module LogoAnimation exposing (Action, Model, init, tick, update, view)

import Css as Css
import Html exposing (div, Html)
import List as List exposing (intersperse, map)
import String as String exposing (concat)
import Svg exposing (..)
import Svg.Attributes exposing (..)
import Svg.Events exposing (onClick)
import LogoAnimationCss as LogoAnimCss exposing (..)


-- MODEL


type alias Point =
    { x : Float
    , y : Float
    }


{-|
Matrix used to transform points (x,y) into the view plane:

| x' |   | a  b  tx |   | x |
| y' | = | c  d  ty | * | y |
| 1  |   | 0  0  1  |   | 1 |

-}
type alias Matrix =
    { a : Float
    , b : Float
    , c : Float
    , d : Float
    , tx : Float
    , ty : Float
    }


type alias Shape =
    { action : Action
    , actionDuration : Float
    , actionEnd : Maybe Float
    , actionStart : Maybe Float
    , color : Css.Color
    , origin : Point
    , points : List Point
    , initialTransform : Matrix
    , currentTransform : Matrix
    }


type alias Model =
    { action : Action
    , shapes : List Shape
    }


type alias Progress =
    Float


type RotateDirection
    = AntiClockwise
    | Clockwise


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
    createShape None 1 LogoAnimCss.yellow ( 361.649, 306.205 ) [ ( 0, 46.577 ), ( 69.865, -23.289 ), ( -69.866, -23.289 ) ]


leftBigTriangle : Shape
leftBigTriangle =
    createShape MoveRight 5 LogoAnimCss.blueGray ( 250.927, 361.649 ) [ ( 101.854, 0 ), ( -50.927, -152.781 ), ( -50.927, 152.783 ) ]


topParallelogram : Shape
topParallelogram =
    createShape None 1 LogoAnimCss.green ( 320.54, 235.188 ) [ ( -111.673, -35.188 ), ( -41.299, 35.187 ), ( 111.673, 35.187 ), ( 41.298, -35.188 ) ]


topRightTriangle : Shape
topRightTriangle =
    createShape Rotate 10 LogoAnimCss.blue ( 475.39, 247.908 ) [ ( 47.908, 95.816 ), ( 47.908, -47.908 ), ( -95.817, -47.908 ) ]


createShape : Action -> Float -> Css.Color -> ( Float, Float ) -> List ( Float, Float ) -> Shape
createShape action durationInSeconds color origin points =
    let
        originPoint =
            toPoint origin

        initialTransform =
            matrixIdentity originPoint
    in
        { action = action
        , actionDuration = durationInSeconds * 1000
        , actionEnd = Nothing
        , actionStart = Nothing
        , color = color
        , origin = originPoint
        , points = List.map toPoint points
        , initialTransform = initialTransform
        , currentTransform = initialTransform
        }


toPoint : ( Float, Float ) -> Point
toPoint ( x, y ) =
    { x = x, y = y }


matrixIdentity : Point -> Matrix
matrixIdentity origin =
    { a = 1
    , b = 0
    , c = 0
    , d = 1
    , tx = origin.x
    , ty = origin.y
    }


matrixScale : Float -> Matrix
matrixScale k =
    { a = k
    , b = 0
    , c = 0
    , d = k
    , tx = 0
    , ty = 0
    }


matrixRotate : RotateDirection -> Float -> Matrix
matrixRotate direction theta =
    let
        signedDirection =
            convertRotateDirecton direction
    in
        { a = cos theta
        , b = signedDirection * -(sin theta)
        , c = signedDirection * sin theta
        , d = cos theta
        , tx = 0
        , ty = 0
        }


convertRotateDirecton : RotateDirection -> Float
convertRotateDirecton direction =
    case direction of
        Clockwise ->
            1

        AntiClockwise ->
            -1


matrixTranslate : Float -> Float -> Matrix
matrixTranslate tx ty =
    { a = 1
    , b = 0
    , c = 0
    , d = 1
    , tx = tx
    , ty = ty
    }


matrixMultiply : Matrix -> Matrix -> Matrix
matrixMultiply m1 m2 =
    { a = (m1.a * m2.a) + (m1.b * m2.c)
    , b = (m1.a * m2.b) + (m1.b * m2.d)
    , c = (m1.c * m2.a) + (m1.d * m2.c)
    , d = (m1.c * m2.b) + (m1.d * m2.d)
    , tx = (m1.a * m2.tx) + (m1.b * m2.ty) + m1.tx
    , ty = (m1.c * m2.tx) + (m1.d * m2.ty) + m1.ty
    }



-- UPDATE


type Action
    = None
    | Hinge
    | MoveDown
    | MoveRight
    | Rotate
    | Shrink


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

            Shrink ->
                transformShrink progress shape


updateTransform : List Matrix -> Shape -> Shape
updateTransform transforms shape =
    let
        first =
            firstTransform transforms

        transformsWithInitial =
            (List.drop 1 transforms) ++ [ shape.initialTransform ]
    in
        { shape | currentTransform = List.foldl matrixMultiply first transformsWithInitial }


firstTransform : List Matrix -> Matrix
firstTransform transforms =
    let
        head =
            List.head transforms
    in
        case head of
            Nothing ->
                matrixIdentity { x = 0, y = 0 }

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
            updateTransform [ (matrixScale scale), (matrixRotate Clockwise angle) ] shape
        else if progress < 0.5 then
            updateTransform [ (matrixScale maxScale), (matrixRotate Clockwise angle) ] shape
        else if progress < 0.75 then
            updateTransform [ (matrixScale maxScale), (matrixRotate AntiClockwise angle) ] shape
        else
            updateTransform [ (matrixScale scale), (matrixRotate AntiClockwise angle) ] shape


transformMoveDown : Progress -> Shape -> Shape
transformMoveDown progress shape =
    let
        offset =
            100 * sin (pi * progress)
    in
        updateTransform [ (matrixTranslate 0 offset) ] shape


transformMoveRight : Progress -> Shape -> Shape
transformMoveRight progress shape =
    let
        offset =
            -100 * sin (pi * progress)

        scale =
            scaleProgress 0.5 1 progress
    in
        updateTransform [ (matrixScale scale), (matrixTranslate offset 0) ] shape


transformRotate : Progress -> Shape -> Shape
transformRotate progress shape =
    if progress < 0.25 then
        let
            offset =
                40 * sin (2 * pi * progress)

            scale =
                scaleProgress 0.8 2 progress
        in
            updateTransform [ (matrixScale scale), (matrixTranslate offset -offset) ] shape
    else if progress < 0.75 then
        let
            angle =
                4 * pi * (progress - 0.25)
        in
            updateTransform [ (matrixScale 0.8), (matrixRotate AntiClockwise angle), (matrixTranslate 40 -40) ] shape
    else
        let
            offset =
                40 - (40 * cos (2 * pi * progress))

            scale =
                scaleProgress 0.8 2 progress
        in
            updateTransform [ (matrixScale scale), (matrixTranslate offset -offset) ] shape


transformShrink : Progress -> Shape -> Shape
transformShrink progress shape =
    let
        scale =
            scaleProgress 0.5 4 progress
    in
        updateTransform [ (matrixScale scale) ] shape


scaleProgress : Float -> Float -> Progress -> Float
scaleProgress scale cycle progress =
    let
        angle =
            2 * pi * cycle * progress

        offset =
            (1 - scale) / 2
    in
        scale + (offset * (1 + cos angle))


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


shapeToViewPoints : Shape -> List Point
shapeToViewPoints shape =
    List.map (\p -> projectPoint p shape.currentTransform) shape.points


projectPoint : Point -> Matrix -> Point
projectPoint point matrix =
    { x = (matrix.a * point.x) + (matrix.b * point.y) + matrix.tx
    , y = (matrix.c * point.x) + (matrix.d * point.y) + matrix.ty
    }


cssToString : { a | value : String } -> String
cssToString { value } =
    value


pointsToString : List Point -> String
pointsToString points =
    String.join " " <| List.map pointToString points


pointToString : Point -> String
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
