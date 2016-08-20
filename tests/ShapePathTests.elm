module ShapePathTests exposing (all)

import Expect
import ShapePath
import Test exposing (Test, describe, test)
import Transformer2D as Transformer


all : Test
all =
    describe "ShapePath"
        [ pathToTransformations
        ]


pathToTransformations : Test
pathToTransformations =
    let
        transformations =
            [ Transformer.identity { x = 0, y = 0 } ]

        path =
            { duration = 10
            , steps =
                [ { start = 0
                  , duration = 1
                  , end = 1
                  , progressiveTransforms =
                        \p -> transformations
                  }
                ]
            }
    in
        describe "pathToTransformations"
            [ test "is an empty list when there is no current step" <|
                \() ->
                    ShapePath.pathToTransformations path 10 100
                        |> Expect.equal []
            , test "is transformation list for current step" <|
                \() ->
                    ShapePath.pathToTransformations path 10 5
                        |> Expect.equal transformations
            ]
