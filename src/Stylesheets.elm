port module Stylesheets exposing (..)

import Css.File exposing (..)
import Html exposing (div)
import Html.App as App
import SharedCss exposing (css)


port files : CssFileStructure -> Cmd msg

cssFiles : CssFileStructure
cssFiles =
    toFileStructure [ ( "shared.css", compile SharedCss.css ) ]

main : Program Never
main =
    App.program
        { init = ( (), files cssFiles )
        , view = \_ -> (div [] [])
        , update = \_ _ -> ( (), Cmd.none)
        , subscriptions = \_ -> Sub.none
        }
