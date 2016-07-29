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
    , deltaX : Float
    , y : Float
    , deltaY : Float
    }


type alias Shape =
    { action : Action
    , actionDuration : Float
    , actionEnd : Maybe Float
    , actionStart : Maybe Float
    , color : Css.Color
    , points : List Point
    }


type alias Model =
    { action : Action
    , shapes : List (Shape)
    }


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
    { action = MoveDown
    , actionDuration = 2000
    , actionEnd = Nothing
    , actionStart = Nothing
    , color = LogoAnimCss.blue
    , points = List.map toPoint [ ( 361.649, 370.517 ), ( 208.869, 523.298 ), ( 514.43, 523.298 ) ]
    }


bottomRightTriangle : Shape
bottomRightTriangle =
    { action = None
    , actionDuration = 5
    , actionEnd = Nothing
    , actionStart = Nothing
    , color = LogoAnimCss.yellow
    , points = List.map toPoint [ ( 455.522, 446.655 ), ( 523.298, 514.432 ), ( 523.298, 378.879 ) ]
    }


centerSquare : Shape
centerSquare =
    { action = None
    , actionDuration = 5
    , actionEnd = Nothing
    , actionStart = Nothing
    , color = LogoAnimCss.green
    , points = List.map toPoint [ ( 370.517, 361.649 ), ( 446.5, 284.916 ), ( 523.298, 361.649 ), ( 446.5, 437.697 ) ]
    }


centerTriangle : Shape
centerTriangle =
    { action = None
    , actionDuration = 5
    , actionEnd = Nothing
    , actionStart = Nothing
    , color = LogoAnimCss.yellow
    , points = List.map toPoint [ ( 361.649, 352.782 ), ( 431.514, 282.916 ), ( 291.783, 282.916 ) ]
    }


leftBigTriangle : Shape
leftBigTriangle =
    { action = None
    , actionDuration = 5
    , actionEnd = Nothing
    , actionStart = Nothing
    , color = LogoAnimCss.blueGray
    , points = List.map toPoint [ ( 352.781, 361.649 ), ( 200, 208.868 ), ( 200, 514.432 ) ]
    }


topParallelogram : Shape
topParallelogram =
    { action = None
    , actionDuration = 5
    , actionEnd = Nothing
    , actionStart = Nothing
    , color = LogoAnimCss.green
    , points = List.map toPoint [ ( 208.867, 200 ), ( 279.241, 270.375 ), ( 432.213, 270.375 ), ( 361.838, 200 ) ]
    }


topRightTriangle : Shape
topRightTriangle =
    { action = None
    , actionDuration = 5
    , actionEnd = Nothing
    , actionStart = Nothing
    , color = LogoAnimCss.blue
    , points = List.map toPoint [ ( 523.298, 343.724 ), ( 523.298, 200 ), ( 379.573, 200 ) ]
    }


toPoint : ( Float, Float ) -> Point
toPoint ( x, y ) =
    { x = x, deltaX = 0, y = y, deltaY = 0 }



-- UPDATE


type Action
    = None
    | MoveDown


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
                        { s | actionStart = Nothing, actionEnd = Nothing }
                    else
                        s
                )
                model.shapes
    }


update : Action -> Model -> Model
update newAction model =
    case newAction of
        None ->
            model

        MoveDown ->
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
                moveShapeDown progress shape


moveShapeDown : Float -> Shape -> Shape
moveShapeDown progress shape =
    { shape | points = List.map (\x -> movePointDown progress x) shape.points }


movePointDown : Float -> Point -> Point
movePointDown progress point =
    { point | deltaY = 100 * sin (pi * progress) }


timeRemaining : Float -> Maybe Float -> Float
timeRemaining time actionEnd =
    case actionEnd of
        Nothing ->
            0

        Just end ->
            end - time


timeRemainingToProgress : Float -> Float -> Float
timeRemainingToProgress duration remaining =
    if remaining <= 0 then
        1
    else
        remaining / duration



-- VIEW


cssToString : { a | value : String } -> String
cssToString { value } =
    value


pointsToString : List Point -> String
pointsToString points =
    String.join " " <| List.map pointToString points


pointToString : Point -> String
pointToString p =
    toString (p.x + p.deltaX) ++ "," ++ toString (p.y + p.deltaY)


shapeToPolygon : Shape -> Svg Action
shapeToPolygon shape =
    polygon
        [ fill <| cssToString shape.color
        , points <| pointsToString shape.points
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
