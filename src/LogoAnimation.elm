module LogoAnimation
    exposing
        ( Action
            ( None
            , Hinge
            , MoveDown
            , MoveRight
            , Rotate
            , Shear
            , Shrink
            , Wobble
            )
        , Model
        , actionToString
        , createShape
        , init
        , shapeToViewPoints
        , tick
        , update
        , view
        )

import Css as Css
import Html exposing (div, Html)
import List as List exposing (intersperse, map)
import LogoAnimationCss as LogoAnimCss exposing (..)
import ShapePath as ShapePath
import String as String exposing (concat)
import Svg exposing (..)
import Svg.Attributes exposing (..)
import Svg.Events exposing (onClick)
import Transformer2D as Transformer


-- MODEL


type alias Shape =
    { action : Action
    , actionEnd : Maybe Float
    , actionStart : Maybe Float
    , color : Css.Color
    , origin : Transformer.Point
    , points : List Transformer.Point
    , initialTransform : Transformer.Transformation
    , currentTransform : Transformer.Transformation
    , path : Maybe ShapePath.Path
    }


type alias Model =
    { action : Action
    , shapes : List Shape
    }


type Action
    = None
    | Hinge
    | MoveDown
    | MoveRight
    | Rotate
    | Shear
    | Shrink
    | Wobble


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
    createShape MoveDown LogoAnimCss.blue ( 361.649, 472.371 ) [ ( 0, -101.854 ), ( -152.78, 50.927 ), ( 152.781, 50.927 ) ]


bottomRightTriangle : Shape
bottomRightTriangle =
    createShape Hinge LogoAnimCss.yellow ( 523.298, 514.432 ) [ ( -67.776, -67.777 ), ( 0, 0 ), ( 0, -135.553 ) ]


centerSquare : Shape
centerSquare =
    createShape Shrink LogoAnimCss.green ( 446.9075, 361.3065 ) [ ( -76.3905, 0 ), ( 0, 76.3905 ), ( 76.3905, 0 ), ( 0, -76.3905 ) ]


centerTriangle : Shape
centerTriangle =
    createShape Wobble LogoAnimCss.yellow ( 361.649, 306.205 ) [ ( 0, 46.577 ), ( 69.865, -23.289 ), ( -69.866, -23.289 ) ]


leftBigTriangle : Shape
leftBigTriangle =
    createShape MoveRight LogoAnimCss.blueGray ( 250.927, 361.649 ) [ ( 101.854, 0 ), ( -50.927, -152.781 ), ( -50.927, 152.783 ) ]


topParallelogram : Shape
topParallelogram =
    createShape Shear LogoAnimCss.green ( 320.54, 235.188 ) [ ( -111.673, -35.188 ), ( -41.299, 35.187 ), ( 111.673, 35.187 ), ( 41.298, -35.188 ) ]


topRightTriangle : Shape
topRightTriangle =
    createShape Rotate LogoAnimCss.blue ( 475.39, 247.908 ) [ ( 47.908, 95.816 ), ( 47.908, -47.908 ), ( -95.817, -47.908 ) ]


createShape : Action -> Css.Color -> ( Float, Float ) -> List ( Float, Float ) -> Shape
createShape action color origin coordinates =
    let
        originPoint =
            Transformer.toPoint origin

        initialTransform =
            Transformer.identity originPoint
    in
        { action = action
        , actionEnd = Nothing
        , actionStart = Nothing
        , color = color
        , origin = originPoint
        , points = List.map Transformer.toPoint coordinates
        , initialTransform = initialTransform
        , currentTransform = initialTransform
        , path = actionToPath action
        }


actionToPath : Action -> Maybe ShapePath.Path
actionToPath action =
    case action of
        None ->
            Nothing

        Hinge ->
            Just ShapePath.hinge

        MoveDown ->
            Just ShapePath.moveDown

        MoveRight ->
            Just ShapePath.moveRight

        Rotate ->
            Just ShapePath.rotate

        Shear ->
            Just ShapePath.shear

        Shrink ->
            Just ShapePath.shrink

        Wobble ->
            Just ShapePath.wobble



-- UPDATE


update : Action -> Model -> Model
update newAction model =
    if newAction == None then
        model
    else
        { model | action = newAction }


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
                        updateShape time
                            { s
                                | actionStart = Just time
                                , actionEnd = calculateEndTime s.path time
                            }
                    else if Nothing /= s.actionEnd then
                        { s
                            | actionStart = Nothing
                            , actionEnd = Nothing
                            , currentTransform = s.initialTransform
                        }
                    else
                        s
                )
                model.shapes
    }


calculateEndTime : Maybe ShapePath.Path -> Float -> Maybe Float
calculateEndTime path time =
    case path of
        Nothing ->
            Nothing

        Just p ->
            Just <| time + p.duration


updateShape : Float -> Shape -> Shape
updateShape time shape =
    let
        transforms =
            transformsAtTime shape.path shape.actionEnd time

        first =
            firstTransform transforms

        transformsWithInitial =
            (List.drop 1 transforms) ++ [ shape.initialTransform ]
    in
        { shape | currentTransform = List.foldl Transformer.combine first transformsWithInitial }


transformsAtTime : Maybe ShapePath.Path -> Maybe Float -> Float -> List Transformer.Transformation
transformsAtTime path endTime time =
    case path of
        Nothing ->
            []

        Just p ->
            ShapePath.pathToTransformations p (Maybe.withDefault 0 endTime) time


firstTransform : List Transformer.Transformation -> Transformer.Transformation
firstTransform transforms =
    let
        head =
            List.head transforms
    in
        case head of
            Nothing ->
                ( 0, 0 )
                    |> Transformer.toPoint
                    |> Transformer.identity

            Just first ->
                first



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
    List.map pointToString points
        |> String.join " "


pointToString : Transformer.Point -> String
pointToString p =
    toString (p.x) ++ "," ++ toString (p.y)


shapeToPolygon : Shape -> Svg Action
shapeToPolygon shape =
    polygon
        [ fill <|
            cssToString shape.color
        , points <|
            pointsToString <|
                shapeToViewPoints shape
        , onClick shape.action
        ]
        []


{ class } =
    logoAnimationNamespace
view : Model -> Html Action
view model =
    div [ class [ LogoAnimCss.Container ] ]
        [ svg
            [ version "1.1"
            , viewBox "100 100 523.141 522.95"
            , x <|
                cssToString (Css.px 0)
            , y <|
                cssToString (Css.px 0)
            ]
            [ g [] <|
                List.map shapeToPolygon model.shapes
            ]
        ]
