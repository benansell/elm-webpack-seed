port module Stylesheets exposing (main)

import Css.File exposing (CssFileStructure, compile, toFileStructure)
import Html exposing (div)
import Html.App as App
import LogoAnimationCss exposing (css)
import SharedCss exposing (css)


port files : CssFileStructure -> Cmd msg


cssFiles : CssFileStructure
cssFiles =
    toFileStructure
        [ ( "shared.css", compile SharedCss.css )
        , ( "logo-animation.css", compile LogoAnimationCss.css )
        ]


main : Program Never
main =
    App.program
        { init = ( (), files cssFiles )
        , view = \_ -> (div [] [])
        , update = \_ _ -> ( (), Cmd.none )
        , subscriptions = \_ -> Sub.none
        }
