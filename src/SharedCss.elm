module SharedCss exposing (..)

import Css exposing (..)
import Css.Elements as Css
import Css.Namespace exposing (namespace)
import Html.CssHelpers exposing (Namespace, withNamespace)


type CssClasses
    = Page
    | Body
    | Content
    | Nav
    | Aside
    | Footer
    | FooterItems


type CssIds
    = Main


layoutNamespace : Namespace String a b c
layoutNamespace =
    withNamespace "layout"


linkColor : Color
linkColor =
    hex "0095dd"


css : Stylesheet
css =
    (stylesheet << namespace layoutNamespace.name)
        [ Css.body [ margin (px 0) ]
        , ((.) Page)
            [ displayFlex
            , minHeight (vh 100)
            , flexDirection column
            ]
        , Css.a
            [ textDecoration none
            , color linkColor
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
        , ((.) Footer)
            [ backgroundColor (rgb 225 227 228)
            ]
        , ((.) FooterItems)
            [ displayFlex
            , flexDirection row
            , marginLeft (pct 5)
            , marginRight (pct 5)
            , paddingLeft (px 0)
            , property "list-style" "none"
            , children
                [ Css.li
                    [ lastChild [ marginLeft auto ] ]
                ]
            ]
        ]
