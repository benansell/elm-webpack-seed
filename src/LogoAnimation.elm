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

                      | a  b  0 |
|x' y' 1| = |x y 1| * | c  d  0 |
                      | tx ty 1 |

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
    createShape MoveDown 2 LogoAnimCss.blue ( 0, 0 ) [ ( 361.649, 370.517 ), ( 208.869, 523.298 ), ( 514.43, 523.298 ) ]


bottomRightTriangle : Shape
bottomRightTriangle =
    createShape None 1 LogoAnimCss.yellow ( 0, 0 ) [ ( 455.522, 446.655 ), ( 523.298, 514.432 ), ( 523.298, 378.879 ) ]


centerSquare : Shape
centerSquare =
    createShape Shrink 3 LogoAnimCss.green ( 446.9075, 361.3065 ) [ ( -76.3905, 0 ), ( 0, 76.3905 ), ( 76.3905, 0 ), ( 0, -76.3905 ) ]


centerTriangle : Shape
centerTriangle =
    createShape None 1 LogoAnimCss.yellow ( 0, 0 ) [ ( 361.649, 352.782 ), ( 431.514, 282.916 ), ( 291.783, 282.916 ) ]


leftBigTriangle : Shape
leftBigTriangle =
    createShape MoveRight 5 LogoAnimCss.blueGray ( 0, 0 ) [ ( 352.781, 361.649 ), ( 200, 208.868 ), ( 200, 514.432 ) ]


topParallelogram : Shape
topParallelogram =
    createShape None 1 LogoAnimCss.green ( 0, 0 ) [ ( 208.867, 200 ), ( 279.241, 270.375 ), ( 432.213, 270.375 ), ( 361.838, 200 ) ]


topRightTriangle : Shape
topRightTriangle =
    createShape None 1 LogoAnimCss.blue ( 0, 0 ) [ ( 523.298, 343.724 ), ( 523.298, 200 ), ( 379.573, 200 ) ]


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


matrixTranslate : Float -> Float -> Matrix
matrixTranslate tx ty =
    { a = 0
    , b = 0
    , c = 0
    , d = 0
    , tx = tx
    , ty = ty
    }


matrixAdd : Matrix -> Matrix -> Matrix
matrixAdd m1 m2 =
    { a = m1.a + m2.a
    , b = m1.b + m2.b
    , c = m1.c + m2.c
    , d = m1.d + m2.d
    , tx = m1.tx + m2.tx
    , ty = m1.ty + m2.ty
    }



-- UPDATE


type Action
    = None
    | MoveDown
    | MoveRight
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
                    else if s.action == model.action then
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

            MoveDown ->
                transformMoveDown progress shape

            MoveRight ->
                transformMoveRight progress shape

            Shrink ->
                transformShrink progress shape


updateTransform : Matrix -> Shape -> Shape
updateTransform matrix shape =
    { shape | currentTransform = matrixAdd shape.initialTransform matrix }


transformMoveDown : Progress -> Shape -> Shape
transformMoveDown progress shape =
    let
        offset =
            100 * sin (pi * progress)

        matrix =
            matrixTranslate 0 offset
    in
        updateTransform matrix shape


transformMoveRight : Progress -> Shape -> Shape
transformMoveRight progress shape =
    let
        offset =
            10 * sin (4 * pi * progress)

        matrix =
            matrixTranslate offset 0
    in
        updateTransform matrix shape


transformShrink : Progress -> Shape -> Shape
transformShrink progress shape =
    let
        scale =
            -0.5 * sin (pi * progress)

        matrix =
            matrixScale scale
    in
        updateTransform matrix shape


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
        remaining / duration



-- VIEW


shapeToViewPoints : Shape -> List Point
shapeToViewPoints shape =
    List.map (\p -> projectPoint p shape.currentTransform) shape.points


projectPoint : Point -> Matrix -> Point
projectPoint point matrix =
    { x = (point.x * matrix.a) + (point.y * matrix.c) + matrix.tx
    , y = (point.x * matrix.b) + (point.y * matrix.d) + matrix.ty
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
