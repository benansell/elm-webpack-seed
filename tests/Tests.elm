module Tests exposing (all)

import Test exposing (..)
import GeometricTransformer2DTests


all : Test
all =
    describe "elm-webpack-seed"
        [ GeometricTransformer2DTests.all
        ]
