module LogoAnimation exposing (Action, Model, actionToString, init, tick, update, view)

import Css as Css
import Html exposing (div, Html)
import List as List exposing (intersperse, map)
import String as String exposing (concat)
import Svg exposing (..)
import Svg.Attributes exposing (..)
import Svg.Events exposing (onClick)
import LogoAnimationCss as LogoAnimCss exposing (..)
import GeometricTransformer2D as Transformer


-- MODEL


type alias Shape =
    { action : Action
    , actionDuration : Float
    , actionEnd : Maybe Float
    , actionStart : Maybe Float
    , color : Css.Color
    , origin : Transformer.Point
    , points : List Transformer.Point
    , initialTransform : Transformer.Transformation
    , currentTransform : Transformer.Transformation
    }


type alias Model =
    { action : Action
    , shapes : List Shape
    }


type alias Progress =
    Float


type Direction
    = Forward
    | Backward


init : Model
init =
    { action = None
    , shapes =
        [ bottomBigTriangle
        , bottomRightTriangle
        , centerSquare
        , centerTriangle
        , leftBigTriangle
        , topParallelogram
        , topRightTriangle
        ]
    }


bottomBigTriangle : Shape
bottomBigTriangle =
    createShape MoveDown 2 LogoAnimCss.blue ( 361.649, 472.371 ) [ ( 0, -101.854 ), ( -152.78, 50.927 ), ( 152.781, 50.927 ) ]


bottomRightTriangle : Shape
bottomRightTriangle =
    createShape Hinge 4 LogoAnimCss.yellow ( 523.298, 514.432 ) [ ( -67.776, -67.777 ), ( 0, 0 ), ( 0, -135.553 ) ]


centerSquare : Shape
centerSquare =
    createShape Shrink 3 LogoAnimCss.green ( 446.9075, 361.3065 ) [ ( -76.3905, 0 ), ( 0, 76.3905 ), ( 76.3905, 0 ), ( 0, -76.3905 ) ]


centerTriangle : Shape
centerTriangle =
    createShape Wobble 2 LogoAnimCss.yellow ( 361.649, 306.205 ) [ ( 0, 46.577 ), ( 69.865, -23.289 ), ( -69.866, -23.289 ) ]


leftBigTriangle : Shape
leftBigTriangle =
    createShape MoveRight 5 LogoAnimCss.blueGray ( 250.927, 361.649 ) [ ( 101.854, 0 ), ( -50.927, -152.781 ), ( -50.927, 152.783 ) ]


topParallelogram : Shape
topParallelogram =
    createShape Shear 4 LogoAnimCss.green ( 320.54, 235.188 ) [ ( -111.673, -35.188 ), ( -41.299, 35.187 ), ( 111.673, 35.187 ), ( 41.298, -35.188 ) ]


topRightTriangle : Shape
topRightTriangle =
    createShape Rotate 10 LogoAnimCss.blue ( 475.39, 247.908 ) [ ( 47.908, 95.816 ), ( 47.908, -47.908 ), ( -95.817, -47.908 ) ]


createShape : Action -> Float -> Css.Color -> ( Float, Float ) -> List ( Float, Float ) -> Shape
createShape action durationInSeconds color origin coordinates =
    let
        originPoint =
            Transformer.toPoint origin

        initialTransform =
            Transformer.identity originPoint
    in
        { action = action
        , actionDuration = durationInSeconds * 1000
        , actionEnd = Nothing
        , actionStart = Nothing
        , color = color
        , origin = originPoint
        , points = List.map Transformer.toPoint coordinates
        , initialTransform = initialTransform
        , currentTransform = initialTransform
        }



-- UPDATE


type Action
    = None
    | Hinge
    | MoveDown
    | MoveRight
    | Rotate
    | Shear
    | Shrink
    | Wobble


tick : Float -> Model -> Model
tick time model =
    { model
        | action = None
        , shapes =
            List.map
                (\s ->
                    if time < Maybe.withDefault 0 s.actionEnd then
                        updateShape time s
                    else if s.action /= None && s.action == model.action then
                        updateShape time { s | actionStart = Just time, actionEnd = Just (time + s.actionDuration) }
                    else if Nothing /= s.actionEnd then
                        { s | actionStart = Nothing, actionEnd = Nothing, currentTransform = s.initialTransform }
                    else
                        s
                )
                model.shapes
    }


update : Action -> Model -> Model
update newAction model =
    if newAction == None then
        model
    else
        { model | action = newAction }


updateShape : Float -> Shape -> Shape
updateShape time shape =
    let
        progress =
            timeRemainingToProgress shape.actionDuration <| timeRemaining time shape.actionEnd
    in
        case shape.action of
            None ->
                shape

            Hinge ->
                transformHinge progress shape

            MoveDown ->
                transformMoveDown progress shape

            MoveRight ->
                transformMoveRight progress shape

            Rotate ->
                transformRotate progress shape

            Shear ->
                transformShear progress shape

            Shrink ->
                transformShrink progress shape

            Wobble ->
                transformWobble progress shape


updateTransform : List Transformer.Transformation -> Shape -> Shape
updateTransform transforms shape =
    let
        first =
            firstTransform transforms

        transformsWithInitial =
            (List.drop 1 transforms) ++ [ shape.initialTransform ]
    in
        { shape | currentTransform = List.foldl Transformer.combine first transformsWithInitial }


firstTransform : List Transformer.Transformation -> Transformer.Transformation
firstTransform transforms =
    let
        head =
            List.head transforms
    in
        case head of
            Nothing ->
                ( 0, 0 ) |> Transformer.toPoint |> Transformer.identity

            Just first ->
                first


transformHinge : Progress -> Shape -> Shape
transformHinge progress shape =
    let
        angle =
            2 * pi * progress

        maxScale =
            0.7

        scale =
            scaleProgress maxScale 2 progress
    in
        if progress < 0.25 then
            updateTransform [ (Transformer.scaleUniform scale), (Transformer.rotate Transformer.Clockwise angle) ] shape
        else if progress < 0.5 then
            updateTransform [ (Transformer.scaleUniform maxScale), (Transformer.rotate Transformer.Clockwise angle) ] shape
        else if progress < 0.75 then
            updateTransform [ (Transformer.scaleUniform maxScale), (Transformer.rotate Transformer.AntiClockwise angle) ] shape
        else
            updateTransform [ (Transformer.scaleUniform scale), (Transformer.rotate Transformer.AntiClockwise angle) ] shape


transformMoveDown : Progress -> Shape -> Shape
transformMoveDown progress shape =
    let
        offset =
            translateProgress Forward 100 (progress / 2)
    in
        updateTransform [ (Transformer.translate 0 offset) ] shape


transformMoveRight : Progress -> Shape -> Shape
transformMoveRight progress shape =
    let
        offset =
            translateProgress Forward -100 (progress / 2)

        scale =
            scaleProgress 0.5 1 progress
    in
        updateTransform [ (Transformer.scaleUniform scale), (Transformer.translate offset 0) ] shape


transformRotate : Progress -> Shape -> Shape
transformRotate progress shape =
    let
        maxOffset =
            40

        maxScale =
            0.8
    in
        if progress < 0.25 then
            let
                offset =
                    translateProgress Forward maxOffset progress

                scale =
                    scaleProgress maxScale 2 progress
            in
                updateTransform [ (Transformer.scaleUniform scale), (Transformer.translate offset -offset) ] shape
        else if progress < 0.75 then
            let
                angle =
                    4 * pi * (progress - 0.25)
            in
                updateTransform [ (Transformer.scaleUniform maxScale), (Transformer.rotate Transformer.AntiClockwise angle), (Transformer.translate maxOffset -maxOffset) ] shape
        else
            let
                offset =
                    translateProgress Backward maxOffset progress

                scale =
                    scaleProgress maxScale 2 progress
            in
                updateTransform [ (Transformer.scaleUniform scale), (Transformer.translate offset -offset) ] shape


transformShear : Progress -> Shape -> Shape
transformShear progress shape =
    let
        maxOffset =
            -80

        maxShear =
            -2
    in
        if progress < 0.25 then
            let
                offset =
                    translateProgress Forward maxOffset progress
            in
                updateTransform [ (Transformer.translate offset offset) ] shape
        else if progress < 0.5 then
            let
                shear =
                    maxShear * 4 * (progress - 0.25)
            in
                updateTransform [ (Transformer.shear Transformer.Horizontal shear), (Transformer.translate maxOffset maxOffset) ] shape
        else if progress < 0.75 then
            let
                shear =
                    maxShear - (maxShear * 4 * (progress - 0.5))
            in
                updateTransform [ (Transformer.shear Transformer.Horizontal shear), (Transformer.translate maxOffset maxOffset) ] shape
        else
            let
                offset =
                    translateProgress Backward maxOffset progress
            in
                updateTransform [ (Transformer.translate offset offset) ] shape


transformShrink : Progress -> Shape -> Shape
transformShrink progress shape =
    let
        scale =
            scaleProgress 0.5 4 progress
    in
        updateTransform [ (Transformer.scaleUniform scale) ] shape


transformWobble : Progress -> Shape -> Shape
transformWobble progress shape =
    let
        angle =
            degrees 1

        wobbleTick =
            round <| 25 * progress
    in
        if wobbleTick % 2 == 0 then
            updateTransform [ (Transformer.rotate Transformer.Clockwise angle) ] shape
        else
            updateTransform [ (Transformer.rotate Transformer.AntiClockwise angle) ] shape


scaleProgress : Float -> Float -> Progress -> Float
scaleProgress scale cycle progress =
    let
        angle =
            2 * pi * cycle * progress

        offset =
            (1 - scale) / 2
    in
        scale + (offset * (1 + cos angle))


translateProgress : Direction -> Float -> Progress -> Float
translateProgress direction offset progress =
    case direction of
        Forward ->
            offset * sin (2 * pi * progress)

        Backward ->
            offset - (offset * cos (2 * pi * progress))


timeRemaining : Float -> Maybe Float -> Float
timeRemaining time actionEnd =
    case actionEnd of
        Nothing ->
            0

        Just end ->
            end - time


timeRemainingToProgress : Float -> Float -> Progress
timeRemainingToProgress duration remaining =
    if remaining <= 0 then
        1
    else
        (duration - remaining) / duration



-- VIEW


shapeToViewPoints : Shape -> List Transformer.Point
shapeToViewPoints shape =
    List.map (Transformer.apply shape.currentTransform) shape.points


actionToString : Action -> Maybe String
actionToString action =
    case action of
        None ->
            Nothing

        Hinge ->
            Just "Hinge"

        MoveDown ->
            Just "Move Down"

        MoveRight ->
            Just "Move Right"

        Rotate ->
            Just "Rotate"

        Shear ->
            Just "Shear"

        Shrink ->
            Just "Shrink"

        Wobble ->
            Just "Shake"


cssToString : { a | value : String } -> String
cssToString { value } =
    value


pointsToString : List Transformer.Point -> String
pointsToString points =
    String.join " " <| List.map pointToString points


pointToString : Transformer.Point -> String
pointToString p =
    toString (p.x) ++ "," ++ toString (p.y)


shapeToPolygon : Shape -> Svg Action
shapeToPolygon shape =
    polygon
        [ fill <| cssToString shape.color
        , points <| pointsToString <| shapeToViewPoints shape
        , onClick shape.action
        ]
        []


{ id, class, classList } =
    logoAnimationNamespace
view : Model -> Html Action
view model =
    div [ class [ LogoAnimCss.Container ] ]
        [ svg
            [ version "1.1"
            , viewBox "100 100 523.141 522.95"
            , x <| cssToString (Css.px 0)
            , y <| cssToString (Css.px 0)
            ]
            [ g [] (List.map shapeToPolygon model.shapes) ]
        ]
