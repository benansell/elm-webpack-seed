module Main exposing (..)

import Test.Runner.Html exposing (TestProgram, run)
import Tests exposing (all)


main : TestProgram
main =
    run Tests.all
