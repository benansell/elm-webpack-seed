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


type alias Shape =
    { action : Action
    , color : Css.Color
    , points : List ( Float, Float )
    }


type alias Model =
    { action : Action
    , progress : Int
    , shapes : List (Shape)
    }


init : Model
init =
    { action = None
    , progress = 0
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
    { action = None
    , color = LogoAnimCss.blue
    , points = [ ( 161.649, 170.517 ), ( 8.869, 323.298 ), ( 314.43, 323.298 ) ]
    }


bottomRightTriangle : Shape
bottomRightTriangle =
    { action = None
    , color = LogoAnimCss.yellow
    , points = [ ( 255.522, 246.655 ), ( 323.298, 314.432 ), ( 323.298, 178.879 ) ]
    }


centerSquare : Shape
centerSquare =
    { action = None
    , color = LogoAnimCss.green
    , points = [ ( 170.517, 161.649 ), ( 246.5, 84.916 ), ( 323.298, 161.649 ), ( 246.5, 237.697 ) ]
    }


centerTriangle : Shape
centerTriangle =
    { action = None
    , color = LogoAnimCss.yellow
    , points = [ ( 161.649, 152.782 ), ( 231.514, 82.916 ), ( 91.783, 82.916 ) ]
    }


leftBigTriangle : Shape
leftBigTriangle =
    { action = None
    , color = LogoAnimCss.blueGray
    , points = [ ( 152.781, 161.649 ), ( 0, 8.868 ), ( 0, 314.432 ) ]
    }


topParallelogram : Shape
topParallelogram =
    { action = None
    , color = LogoAnimCss.green
    , points = [ ( 8.867, 0 ), ( 79.241, 70.375 ), ( 232.213, 70.375 ), ( 161.838, 0 ) ]
    }


topRightTriangle : Shape
topRightTriangle =
    { action = None
    , color = LogoAnimCss.blue
    , points = [ ( 323.298, 143.724 ), ( 323.298, 0 ), ( 179.573, 0 ) ]
    }



-- UPDATE


type Action
    = None


tick : Float -> Model -> Model
tick time model =
    case model.action of
        None ->
            model


update : Action -> Model -> Model
update action model =
    case action of
        None ->
            model



-- VIEW


cssToString : { a | value : String } -> String
cssToString { value } =
    value


pointsToString : List ( Float, Float ) -> String
pointsToString points =
    String.join " " <| List.map pointToString points


pointToString : ( Float, Float ) -> String
pointToString ( x, y ) =
    toString x ++ "," ++ toString y


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
            , viewBox <| pointsToString [ ( 0, 0 ), ( 323.141, 322.95 ) ]
            , x <| cssToString (Css.px 0)
            , y <| cssToString (Css.px 0)
            ]
            [ g [] (List.map shapeToPolygon model.shapes) ]
        ]
