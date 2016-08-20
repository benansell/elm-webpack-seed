module Main exposing (..)

import Test.Runner.Html exposing (run)
import Tests exposing (all)


main : Program Never
main =
    run Tests.all
