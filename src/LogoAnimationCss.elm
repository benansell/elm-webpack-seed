module LogoAnimationCss
    exposing
        ( CssClasses(Container)
        , css
        , blue
        , blueGray
        , green
        , logoAnimationNamespace
        , yellow
        )

import Css exposing (..)
import Css.Namespace exposing (namespace)
import Html.CssHelpers exposing (Namespace, withNamespace)


type CssClasses
    = Container


logoAnimationNamespace : Namespace String a b c
logoAnimationNamespace =
    withNamespace "logoAnimation"


css : Stylesheet
css =
    (stylesheet << namespace logoAnimationNamespace.name)
        [ ((.) Container)
            [ padding (pct 2)
            , width (pct 96)
            ]
        ]


blue : Color
blue =
    (hex "#60B5CC")


blueGray : Color
blueGray =
    (hex "#5A6378")


green : Color
green =
    (hex "#7FD13B")


yellow : Color
yellow =
    (hex "#F0AD00")
