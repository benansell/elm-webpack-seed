port module Main exposing (..)

import Json.Encode exposing (Value)
import Test.Runner.Node exposing (run, TestProgram)
import Tests exposing (all)


main : TestProgram
main =
    run emit Tests.all


port emit : ( String, Value ) -> Cmd msg
