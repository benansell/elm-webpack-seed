module GeometricTransformer2D
    exposing
        ( Point
        , RotateDirection(..)
        , ShearDirection(..)
        , Transformation
        , apply
        , combine
        , fromPoint
        , identity
        , rotate
        , scale
        , scaleUniform
        , shear
        , toPoint
        , translate
        )

{-| A library for manipulating points by applying geometric transformations
using homogeneous coordinates which can be useful in [`2D computer graphics`](https://en.wikipedia.org/wiki/2D_computer_graphics)

# Working with Points
@docs Point, toPoint, fromPoint

# Creating Transformations
@docs Transformation, identity, rotate, scale, scaleUniform, shear, translate

# Applying and Combining Transformations
@docs apply, combine

# Misc
@docs RotateDirection, ShearDirection


-}

-- POINT


{-| Representation of a 2D point by its position
-}
type alias Point =
    { x : Float
    , y : Float
    }


{-| Converts a tuple of x,y coordinate values to a point
-}
toPoint : ( Float, Float ) -> Point
toPoint ( x, y ) =
    { x = x, y = y }


{-| Converts a point to a x,y coordinate tuple
-}
fromPoint : Point -> ( Float, Float )
fromPoint p =
    ( p.x, p.y )



-- TRANSFORMATION


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


{-| Apply the transformation to the point.
-}
apply : Transformation -> Point -> Point
apply t p =
    { x = (t.a * p.x) + (t.b * p.y) + t.tx
    , y = (t.c * p.x) + (t.d * p.y) + t.ty
    }


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


{-| Creates an identity transformation for the point. This is
often used to create an initial transform that creates a local origin for a set
of points that allows them to be transformed relative to the local origin.
-}
identity : Point -> Transformation
identity p =
    { a = 1
    , b = 0
    , c = 0
    , d = 1
    , tx = p.x
    , ty = p.y
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


{-| Creates a transformation that will scale each point x value by the width and
y value by the height relative to the origin
-}
scale : Float -> Float -> Transformation
scale width height =
    { a = width
    , b = 0
    , c = 0
    , d = height
    , tx = 0
    , ty = 0
    }


{-| Creates a transformation that will scale each point by a factor k relative
to the origin
-}
scaleUniform : Float -> Transformation
scaleUniform k =
    scale k k


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
translate : ( Float, Float ) -> Transformation
translate ( tx, ty ) =
    { a = 1
    , b = 0
    , c = 0
    , d = 1
    , tx = tx
    , ty = ty
    }
