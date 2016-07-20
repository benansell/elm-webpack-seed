module SharedCss exposing (..)

import Css exposing (..)
import Css.Elements as Elements
import Css.Namespace exposing (namespace)
import Html.CssHelpers exposing (Namespace, withNamespace)


type CssClasses
    = Aside
    | Body
    | Content
    | Footer
    | FooterItems
    | Media
    | MediaBody
    | MediaFigure
    | Nav
    | Page


type CssIds
    = App


layoutNamespace : Namespace String a b c
layoutNamespace =
    withNamespace "layout"


spaceLeft : Mixin
spaceLeft =
    paddingLeft (pct 5)


aligner : Mixin
aligner =
    mixin
        [ displayFlex
        , alignItems center
        , property "justify-content" "center"
        ]


css : Stylesheet
css =
    (stylesheet << namespace layoutNamespace.name)
        [ Elements.a
            [ textDecoration none
            , color linkColor
            ]
        , Elements.body [ margin (px 0) ]
        , Elements.header
            [ backgroundColor blue
            , spaceLeft
            ]
        , ((.) Page)
            [ backgroundColor (rgba 220 220 221 1)
            , displayFlex
            , minHeight (vh 100)
            , flexDirection column
            ]
        , ((.) Body)
            [ displayFlex
            , flex (int 1)
            ]
        , ((.) Content)
            [ backgroundColor lightGray
            , flex (int 1)
            , aligner
            ]
        , ((.) Aside)
            [ backgroundColor mediumGray
            , flex3 (int 0) (int 0) (em 12)
            , spaceLeft
            ]
        , ((.) Nav)
            [ backgroundColor darkBlueGray
            , flex3 (int 0) (int 0) (em 12)
            , order (int -1)
            , spaceLeft
            ]
        , ((.) Footer)
            [ backgroundColor darkGray
            ]
        , ((.) FooterItems)
            [ displayFlex
            , flexDirection row
            , marginLeft (pct 5)
            , marginRight (pct 5)
            , paddingLeft (px 0)
            , property "list-style" "none"
            , alignItems center
            , children
                [ Elements.li [ lastChild [ marginLeft auto ] ]
                ]
            ]
        , ((.) Media)
            [ displayFlex
            , alignItems center
            ]
        , ((.) MediaBody)
            [ flex (int 1)
            , whiteSpace noWrap
            ]
        , ((.) MediaFigure)
            [ marginRight (em 1)
            ]
        ]


linkColor : Color
linkColor =
    white


white : Color
white =
    (hex "#fff")


lightGray : Color
lightGray =
    (rgba 220 220 221 1)


mediumGray : Color
mediumGray =
    (rgba 197 195 198 1)


darkGray : Color
darkGray =
    (rgba 70 73 76 1)


darkBlueGray : Color
darkBlueGray =
    (rgba 76 92 104 1)


blue : Color
blue =
    (rgba 25 133 161 1)
