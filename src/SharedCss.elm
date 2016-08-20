module SharedCss
    exposing
        ( CssClasses
            ( Aside
            , Body
            , Content
            , Footer
            , FooterItems
            , Media
            , MediaBody
            , MediaFigure
            , Nav
            , NavAsideStatus
            , NavMessage
            , Page
            )
        , css
        , layoutNamespace
        )

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
    | NavAsideStatus
    | NavMessage
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
        , Elements.body
            [ margin (px 0)
            , minWidth (px 260)
            ]
        , Elements.footer
            [ flex none
            ]
        , Elements.header
            [ backgroundColor blue
            , flex none
            , spaceLeft
            ]
        , ((.) Page)
            [ backgroundColor (rgba 220 220 221 1)
            , displayFlex
            , minHeight (vh 100)
            , flexDirection column
            , fontFamily sansSerif
            ]
        , ((.) Body)
            [ displayFlex
            , flex2 (int 1) (int 0)
            , flexDirection column
            ]
        , ((.) Content)
            [ backgroundColor lightGray
            , flex (int 1)
            , aligner
            ]
        , ((.) Aside)
            [ backgroundColor mediumGray
            , padding (em 1)
            ]
        , ((.) Nav)
            [ backgroundColor darkBlueGray
            , order (int -1)
            , padding (em 1)
            ]
        , ((.) NavAsideStatus)
            [ fontWeight (int 300)
            ]
        , ((.) NavMessage)
            [ color white
            , fontWeight (int 300)
            , lineHeight (em 1.4)
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
        , (mediaQuery "(min-width: 1000px)")
            [ ((.) Body) [ flexDirection row ]
            , ((.) Content)
                [ flex (int 1)
                , padding (px 0)
                , margin (px 0)
                ]
            , ((.) Nav) [ flex3 (int 0) (int 0) (em 12) ]
            , ((.) Aside) [ flex3 (int 0) (int 0) (em 12) ]
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
