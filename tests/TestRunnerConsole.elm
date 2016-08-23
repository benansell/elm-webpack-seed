port module Main exposing (..)

import Json.Encode exposing (Value)
import Test.Runner.Node exposing (run)
import Tests exposing (all)


main : Program Value
main =
    run emit Tests.all


port emit : ( String, Value ) -> Cmd msg
