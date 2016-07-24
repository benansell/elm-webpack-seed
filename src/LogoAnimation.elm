module LogoAnimation exposing (logoView)

import Css as Css
import Html exposing (div, Html)
import List as List exposing (intersperse, map)
import String as String exposing (concat)
import Svg exposing (..)
import Svg.Attributes exposing (..)
import LogoAnimationCss as LogoAnimCss exposing (..)


cssToString : { a | value : String } -> String
cssToString { value } =
    value


pointsToString : List ( Float, Float ) -> String
pointsToString points =
    String.join " " <| List.map pointToString points


pointToString : ( Float, Float ) -> String
pointToString ( x, y ) =
    toString x ++ "," ++ toString y


{ id, class, classList } =
    logoAnimationNamespace
logoView : Html a
logoView =
    div [ class [ LogoAnimCss.Container ] ]
        [ svg
            [ version "1.1"
            , viewBox <| pointsToString [ ( 0, 0 ), ( 323.141, 322.95 ) ]
            , x <| cssToString (Css.px 0)
            , y <| cssToString (Css.px 0)
            ]
            [ g []
                [ centerTriangle
                , topParallelogram
                , centerSquare
                , topRightTriangle
                , leftBigTriangle
                , bottomRightTriangle
                , bottomBigTriangle
                ]
            ]
        ]


bottomBigTriangle : Svg a
bottomBigTriangle =
    polygon
        [ fill <| cssToString LogoAnimCss.blue
        , points <| pointsToString [ ( 161.649, 170.517 ), ( 8.869, 323.298 ), ( 314.43, 323.298 ) ]
        ]
        []


bottomRightTriangle : Svg a
bottomRightTriangle =
    polygon
        [ fill <| cssToString LogoAnimCss.yellow
        , points <| pointsToString [ ( 255.522, 246.655 ), ( 323.298, 314.432 ), ( 323.298, 178.879 ) ]
        ]
        []


centerSquare : Svg a
centerSquare =
    polygon
        [ fill <| cssToString LogoAnimCss.green
        , points <| pointsToString [ ( 170.517, 161.649 ), ( 246.5, 84.916 ), ( 323.298, 161.649 ), ( 246.5, 237.697 ) ]
        ]
        []


centerTriangle : Svg a
centerTriangle =
    polygon
        [ fill <| cssToString LogoAnimCss.yellow
        , points
            <| pointsToString [ ( 161.649, 152.782 ), ( 231.514, 82.916 ), ( 91.783, 82.916 ) ]
        ]
        []


leftBigTriangle : Svg a
leftBigTriangle =
    polygon
        [ fill <| cssToString LogoAnimCss.blueGray
        , points <| pointsToString [ ( 152.781, 161.649 ), ( 0, 8.868 ), ( 0, 314.432 ) ]
        ]
        []


topParallelogram : Svg a
topParallelogram =
    polygon
        [ fill <| cssToString LogoAnimCss.green
        , points <| pointsToString [ ( 8.867, 0 ), ( 79.241, 70.375 ), ( 232.213, 70.375 ), ( 161.838, 0 ) ]
        ]
        []


topRightTriangle : Svg a
topRightTriangle =
    polygon
        [ fill <| cssToString LogoAnimCss.blue
        , points <| pointsToString [ ( 323.298, 143.724 ), ( 323.298, 0 ), ( 179.573, 0 ) ]
        ]
        []
