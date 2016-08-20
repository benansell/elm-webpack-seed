module Tests exposing (all)

import Test exposing (..)
import LogoAnimationTests
import ShapePathTests


all : Test
all =
    describe "elm-webpack-seed"
        [ LogoAnimationTests.all
        , ShapePathTests.all
        ]
