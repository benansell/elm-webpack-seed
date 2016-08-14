module GeometricTransformer2DTests exposing (all)

import Expect
import GeometricTransformer2D as Transformer
import Test exposing (..)


all : Test
all =
    describe "GeometricTransformer2D"
        [ apply
        , combine
        , fromPoint
        , identity
        , rotate
        , scale
        , scaleUniform
        , shear
        , toPoint
        , translate
        ]



-- POINT


toPoint : Test
toPoint =
    describe "toPoint"
        [ test "uses first value as x value" <|
            \() ->
                Transformer.toPoint ( 123, 456 )
                    |> .x
                    |> Expect.equal 123
        , test "uses second value as y value" <|
            \() ->
                Transformer.toPoint ( 123, 456 )
                    |> .y
                    |> Expect.equal 456
        ]


fromPoint : Test
fromPoint =
    describe "fromPoint"
        [ test "uses x as first value" <|
            \() ->
                Transformer.fromPoint { x = 123, y = 456 }
                    |> fst
                    |> Expect.equal 123
        , test "uses y as second value" <|
            \() ->
                Transformer.fromPoint { x = 123, y = 456 }
                    |> snd
                    |> Expect.equal 456
        ]



-- TRANSFORMATION


apply : Test
apply =
    let
        t =
            { a = 2, b = 3, c = 5, d = 7, tx = 11, ty = 13 }

        p =
            { x = 17, y = 19 }
    in
        describe "apply"
            [ test "points x value is a*x + b*y + tx" <|
                \() ->
                    Transformer.apply t p
                        |> .x
                        |> Expect.equal (t.a * p.x + t.b * p.y + t.tx)
            , test "points y value is c*x + d*y + ty" <|
                \() ->
                    Transformer.apply t p
                        |> .y
                        |> Expect.equal (t.c * p.x + t.d * p.y + t.ty)
            ]


combine : Test
combine =
    let
        t1 =
            { a = 2, b = 3, c = 5, d = 7, tx = 11, ty = 13 }

        t2 =
            { a = 2, b = 3, c = 5, d = 7, tx = 11, ty = 13 }
    in
        describe "combine"
            [ test "new transformations 'a' value is a*a' + b*c'" <|
                \() ->
                    Transformer.combine t1 t2
                        |> .a
                        |> Expect.equal (t1.a * t2.a + t1.b * t2.c)
            , test "new transformations 'b' value is a*b' + b*d'" <|
                \() ->
                    Transformer.combine t1 t2
                        |> .b
                        |> Expect.equal (t1.a * t2.b + t1.b * t2.d)
            , test "new transformations 'c' value is c*a' + d*c'" <|
                \() ->
                    Transformer.combine t1 t2
                        |> .c
                        |> Expect.equal (t1.c * t2.a + t1.d * t2.c)
            , test "new transformations 'd' value is c*b' + d*d'" <|
                \() ->
                    Transformer.combine t1 t2
                        |> .d
                        |> Expect.equal (t1.c * t2.b + t1.d * t2.d)
            , test "new transformations 'tx' value is a*tx' + b*ty' + tx" <|
                \() ->
                    Transformer.combine t1 t2
                        |> .tx
                        |> Expect.equal (t1.a * t2.tx + t1.b * t2.ty + t1.tx)
            , test "new transformations 'ty' value is c*tx' + d*ty' + ty" <|
                \() ->
                    Transformer.combine t1 t2
                        |> .ty
                        |> Expect.equal (t1.c * t2.tx + t1.d * t2.ty + t2.ty)
            ]


identity : Test
identity =
    let
        point =
            { x = 123, y = 456 }
    in
        describe "identity"
            [ test "identity transformation at origin does nothing" <|
                \() ->
                    Transformer.identity { x = 0, y = 0 }
                        |> (flip Transformer.apply) point
                        |> Expect.equal point
            , test "identity transformation at offset displaces point by offset" <|
                \() ->
                    Transformer.identity { x = -100, y = -400 }
                        |> flip (Transformer.apply) point
                        |> Expect.equal { x = 23, y = 56 }
            ]


rotate : Test
rotate =
    let
        point =
            { x = 2, y = 3 }
    in
        describe "rotate"
            [ test "rotate clockwise by quarter turn moves point to quadrant IV" <|
                \() ->
                    turns 0.25
                        |> Transformer.rotate Transformer.Clockwise
                        |> (flip Transformer.apply) point
                        |> roundPoint
                        |> Expect.equal { x = -3, y = 2 }
            , test "rotate clockwise by half turn moves point to quadrant III" <|
                \() ->
                    turns 0.5
                        |> Transformer.rotate Transformer.Clockwise
                        |> (flip Transformer.apply) point
                        |> roundPoint
                        |> Expect.equal { x = -2, y = -3 }
            , test "rotate clockwise by 1 turn does not move the point" <|
                \() ->
                    turns 1
                        |> Transformer.rotate Transformer.Clockwise
                        |> (flip Transformer.apply) point
                        |> roundPoint
                        |> Expect.equal point
            , test "rotate anti-clockwise by quarter turn moves point to quadrant II" <|
                \() ->
                    turns 0.25
                        |> Transformer.rotate Transformer.AntiClockwise
                        |> (flip Transformer.apply) point
                        |> roundPoint
                        |> Expect.equal { x = 3, y = -2 }
            , test "rotate anti-clockwise by half turn moves point to quadrant III" <|
                \() ->
                    turns 0.5
                        |> Transformer.rotate Transformer.AntiClockwise
                        |> (flip Transformer.apply) point
                        |> roundPoint
                        |> Expect.equal { x = -2, y = -3 }
            , test "rotate anti-clockwise by 1 turn does not move the point" <|
                \() ->
                    turns 1
                        |> Transformer.rotate Transformer.AntiClockwise
                        |> (flip Transformer.apply) point
                        |> roundPoint
                        |> Expect.equal point
            ]


scale : Test
scale =
    describe "scale"
        [ test "scales point by double width and triple height" <|
            \() ->
                Transformer.scale 2 3
                    |> (flip Transformer.apply) { x = 5, y = 7 }
                    |> Expect.equal { x = 10, y = 21 }
        , test "scales point by half width and quarter height" <|
            \() ->
                Transformer.scale 0.5 0.25
                    |> (flip Transformer.apply) { x = 10, y = 28 }
                    |> Expect.equal { x = 5, y = 7 }
        ]


scaleUniform : Test
scaleUniform =
    describe "scaleUniform"
        [ test "scales point by double" <|
            \() ->
                Transformer.scaleUniform 2
                    |> (flip Transformer.apply) { x = 5, y = 7 }
                    |> Expect.equal { x = 10, y = 14 }
        , test "scales point by half" <|
            \() ->
                Transformer.scaleUniform 0.5
                    |> (flip Transformer.apply) { x = 10, y = 28 }
                    |> Expect.equal { x = 5, y = 14 }
        ]


shear : Test
shear =
    let
        point =
            { x = 2, y = 3 }
    in
        describe "shear"
            [ test "shear point horizontally changes x value to px + k*py" <|
                \() ->
                    Transformer.shear Transformer.Horizontal 2
                        |> (flip Transformer.apply) point
                        |> .x
                        |> Expect.equal (point.x + 2 * point.y)
            , test "shear point horizontally does not change y" <|
                \() ->
                    Transformer.shear Transformer.Horizontal 2
                        |> (flip Transformer.apply) point
                        |> .y
                        |> Expect.equal point.y
            , test "shear point vertically does not change x" <|
                \() ->
                    Transformer.shear Transformer.Vertical 2
                        |> (flip Transformer.apply) point
                        |> .x
                        |> Expect.equal point.x
            , test "shear point vertically changes y value to py + k*px" <|
                \() ->
                    Transformer.shear Transformer.Vertical 2
                        |> (flip Transformer.apply) point
                        |> .y
                        |> Expect.equal (point.y + 2 * point.x)
            ]


translate : Test
translate =
    let
        point =
            { x = 2, y = 3 }
    in
        describe "translate"
            [ test "translates point by offset tx" <|
                \() ->
                    Transformer.translate ( 5, 7 )
                        |> (flip Transformer.apply) point
                        |> .x
                        |> Expect.equal (point.x + 5)
            , test "translates point by offset ty" <|
                \() ->
                    Transformer.translate ( 5, 7 )
                        |> (flip Transformer.apply) point
                        |> .y
                        |> Expect.equal (point.y + 7)
            ]


roundPoint : Transformer.Point -> Transformer.Point
roundPoint p =
    let
        accuracy =
            10000

        roundWithAccuracy =
            (*) accuracy
                >> round
                >> toFloat
                >> flip (/) accuracy
    in
        { x = roundWithAccuracy p.x
        , y = roundWithAccuracy p.y
        }
