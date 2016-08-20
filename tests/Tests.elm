module Tests exposing (all)

import Test exposing (..)
import GeometricTransformer2DTests
import LogoAnimationTests


all : Test
all =
    describe "elm-webpack-seed"
        [ GeometricTransformer2DTests.all
        , LogoAnimationTests.all
        ]
