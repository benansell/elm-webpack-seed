port module Stylesheets exposing (main)

import Css.File exposing (CssCompilerProgram, CssFileStructure, compile, toFileStructure)
import Html exposing (div)
import Html
import LogoAnimationCss exposing (css)
import SharedCss exposing (css)


port files : CssFileStructure -> Cmd msg


cssFiles : CssFileStructure
cssFiles =
    toFileStructure
        [ ( "shared.css", compile [ SharedCss.css ] )
        , ( "logo-animation.css", compile [ LogoAnimationCss.css ] )
        ]


main : CssCompilerProgram
main =
    Css.File.compiler files cssFiles