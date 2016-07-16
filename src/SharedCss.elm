module SharedCss exposing (..)

import Css exposing (..)
import Css.Namespace exposing (namespace)
import Html.CssHelpers exposing (Namespace, withNamespace)

type CssClasses
    = Page
    | Body
    | Content
    | Nav
    | Aside


type CssIds
    = Main


layoutNamespace : Namespace String a b c
layoutNamespace =
    withNamespace "layout"


css : Stylesheet
css =
    (stylesheet << namespace layoutNamespace.name)
        [ ((.) Page)
            [ displayFlex
            , minHeight (vh 100)
            , flexDirection column
            ]
        , ((.) Body)
            [ displayFlex
            , flex (int 1)
            ]
        , ((.) Content)
            [ flex (int 1)
            ]
        , ((.) Aside)
            [ flex3 (int 0) (int 0) (em 12)
            ]
        , ((.) Nav)
            [ flex3 (int 0) (int 0) (em 12)
            , order (int -1)
            ]
        ]
