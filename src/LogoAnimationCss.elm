module LogoAnimationCss exposing (..)

import Css exposing (..)
import Css.Elements as Elements
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
            [ padding (pct 25)
            , width (pct 50)
            ]
        ]
