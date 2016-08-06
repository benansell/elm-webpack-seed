module GeometricTransformer2D
    exposing
        ( Transformation
        , RotateDirection(..)
        , ShearDirection(..)
        , apply
        , combine
        , identity
        , rotate
        , scale
        , shear
        , translate
        )

{-| A library for manipulating points by applying geometric transformations
using homogeneous coordinates which can be useful in [`2D computer graphics`](https://en.wikipedia.org/wiki/2D_computer_graphics)

# Creating Transformations
@docs identity, rotate, scale, shear, translate

# Applying and Combining
@docs apply, combine

# Misc
@docs Transformation, RotateDirection, ShearDirection


-}


{-| Representation of the 2D matrix used to transform points (x,y) in the view plane:
 | x' |   | a  b  tx |   | x |
 | y' | = | c  d  ty | * | y |
 | 1  |   | 0  0  1  |   | 1 |
-}
type alias Transformation =
    { a : Float
    , b : Float
    , c : Float
    , d : Float
    , tx : Float
    , ty : Float
    }


{-| Direction of rotation
-}
type RotateDirection
    = AntiClockwise
    | Clockwise


{-| Direction of shearing
-}
type ShearDirection
    = Horizontal
    | Vertical


{-| Apply the transformation to the x,y coordinate tuple.
-}
apply : Transformation -> ( Float, Float ) -> ( Float, Float )
apply t ( x, y ) =
    ( (t.a * x) + (t.b * y) + t.tx
    , (t.c * x) + (t.d * y) + t.ty
    )


{-| Combine two transformations
-}
combine : Transformation -> Transformation -> Transformation
combine t1 t2 =
    { a = (t1.a * t2.a) + (t1.b * t2.c)
    , b = (t1.a * t2.b) + (t1.b * t2.d)
    , c = (t1.c * t2.a) + (t1.d * t2.c)
    , d = (t1.c * t2.b) + (t1.d * t2.d)
    , tx = (t1.a * t2.tx) + (t1.b * t2.ty) + t1.tx
    , ty = (t1.c * t2.tx) + (t1.d * t2.ty) + t1.ty
    }


{-| Creates an identity transformation for the x,y coordinate tuple. This is
often used to create an initial transform that creates a local origin for a set
of points that allows them to be transformed relative to the local origin.
-}
identity : ( Float, Float ) -> Transformation
identity ( x, y ) =
    { a = 1
    , b = 0
    , c = 0
    , d = 1
    , tx = x
    , ty = y
    }


{-| Creates a transformation that will rotate each point around the origin.
-}
rotate : RotateDirection -> Float -> Transformation
rotate direction theta =
    let
        signedDirection =
            case direction of
                Clockwise ->
                    1

                AntiClockwise ->
                    -1
    in
        { a = cos theta
        , b = signedDirection * -(sin theta)
        , c = signedDirection * sin theta
        , d = cos theta
        , tx = 0
        , ty = 0
        }


{-| Creates a transformation that will scale each point by a factor k relative
to the origin
-}
scale : Float -> Transformation
scale k =
    { a = k
    , b = 0
    , c = 0
    , d = k
    , tx = 0
    , ty = 0
    }


{-| Creates a transformation that will shear each point in the given direction
by a factor of k relative to the origin
-}
shear : ShearDirection -> Float -> Transformation
shear direction k =
    case direction of
        Horizontal ->
            { a = 1
            , b = k
            , c = 0
            , d = 1
            , tx = 0
            , ty = 0
            }

        Vertical ->
            { a = 1
            , b = 0
            , c = k
            , d = 1
            , tx = 0
            , ty = 0
            }


{-| Creates a transformation that will move each point
by the tx ty offset amounts
-}
translate : Float -> Float -> Transformation
translate tx ty =
    { a = 1
    , b = 0
    , c = 0
    , d = 1
    , tx = tx
    , ty = ty
    }
