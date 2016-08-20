module LogoAnimationTests exposing (all)

import Css as Css
import Expect
import LogoAnimation as LogoAnim
import Test exposing (Test, describe, test)
import Transformer2D as Transformer


all : Test
all =
    describe "LogoAnimation"
        [ actionToString
        , createShape
        , init
        , tick
        , update
        ]


actionToString : Test
actionToString =
    describe "actionToString"
        [ test "None is converted to Nothing" <|
            \() ->
                LogoAnim.actionToString LogoAnim.None
                    |> Expect.equal Nothing
        , test "Hinge is converted to 'Hinge'" <|
            \() ->
                LogoAnim.actionToString LogoAnim.Hinge
                    |> Maybe.withDefault ""
                    |> Expect.equal "Hinge"
        , test "MoveDown is converted to 'Move Down'" <|
            \() ->
                LogoAnim.actionToString LogoAnim.MoveDown
                    |> Maybe.withDefault ""
                    |> Expect.equal "Move Down"
        , test "MoveRight is converted to 'Move Right'" <|
            \() ->
                LogoAnim.actionToString LogoAnim.MoveRight
                    |> Maybe.withDefault ""
                    |> Expect.equal "Move Right"
        , test "Rotate is converted to 'Rotate'" <|
            \() ->
                LogoAnim.actionToString LogoAnim.Rotate
                    |> Maybe.withDefault ""
                    |> Expect.equal "Rotate"
        , test "Shear is converted to 'Shear'" <|
            \() ->
                LogoAnim.actionToString LogoAnim.Shear
                    |> Maybe.withDefault ""
                    |> Expect.equal "Shear"
        , test "Wobble is converted to 'Shake'" <|
            \() ->
                LogoAnim.actionToString LogoAnim.Wobble
                    |> Maybe.withDefault ""
                    |> Expect.equal "Shake"
        ]


createShape : Test
createShape =
    let
        action =
            LogoAnim.None

        color =
            (Css.hex "#123456")

        origin =
            ( 1, 2 )

        points =
            [ ( 3, 4 ), ( 5, 6 ) ]
    in
        describe "createShape"
            [ test "action is value supplied" <|
                \() ->
                    LogoAnim.createShape LogoAnim.Hinge color origin points
                        |> .action
                        |> Expect.equal LogoAnim.Hinge
            , test "default actionEnd is Nothing" <|
                \() ->
                    LogoAnim.createShape action color origin points
                        |> .actionEnd
                        |> Expect.equal Nothing
            , test "default actionStart is Nothing" <|
                \() ->
                    LogoAnim.createShape action color origin points
                        |> .actionStart
                        |> Expect.equal Nothing
            , test "color is value supplied" <|
                \() ->
                    LogoAnim.createShape action color origin points
                        |> .actionStart
                        |> Expect.equal Nothing
            , test "origin is value supplied" <|
                \() ->
                    LogoAnim.createShape action color origin points
                        |> .origin
                        |> Expect.equal (Transformer.toPoint origin)
            ]


init : Test
init =
    describe "init"
        [ test "default action is None" <|
            \() ->
                LogoAnim.init
                    |> .action
                    |> Expect.equal LogoAnim.None
        ]


tick : Test
tick =
    let
        shape =
            LogoAnim.createShape
                LogoAnim.Shrink
                (Css.hex "123456")
                ( 0, 0 )
                [ ( 10, 10 ) ]

        model =
            { action = LogoAnim.None, shapes = [ shape ] }

        findFirst =
            \default xs ->
                List.head xs
                    |> Maybe.withDefault default

        updateShape =
            \start end shape ->
                { shape
                    | actionStart = start
                    , actionEnd = end
                }

        updateModel =
            \newAction start end model ->
                { model
                    | action = newAction
                    , shapes =
                        List.map
                            (updateShape start end)
                            model.shapes
                }
    in
        describe "tick"
            [ test "updates action to None" <|
                \() ->
                    LogoAnim.tick 0 model
                        |> .action
                        |> Expect.equal LogoAnim.None
            , test "updates shape when time is before action end time" <|
                \() ->
                    updateModel LogoAnim.None (Just 0) (Just 1000) model
                        |> LogoAnim.tick 250
                        |> .shapes
                        |> findFirst shape
                        |> LogoAnim.shapeToViewPoints
                        |> findFirst { x = 100, y = 100 }
                        |> (\p -> p.x < 10 && p.y < 10)
                        |> Expect.true "shape updated"
            , test "updates shapes start time when action matches shape action" <|
                \() ->
                    updateModel LogoAnim.Shrink Nothing Nothing model
                        |> LogoAnim.tick 1
                        |> .shapes
                        |> findFirst shape
                        |> .actionStart
                        |> Expect.equal (Just 1)
            , test "updates shapes end time when action matches shape action" <|
                \() ->
                    updateModel LogoAnim.Shrink Nothing Nothing model
                        |> LogoAnim.tick 1
                        |> .shapes
                        |> findFirst shape
                        |> .actionStart
                        |> Expect.notEqual Nothing
            , test "updates shapes start and end times when action is not None" <|
                \() ->
                    updateModel LogoAnim.Shrink (Just 0) (Just 1000) model
                        |> LogoAnim.tick 250
                        |> .shapes
                        |> findFirst shape
                        |> LogoAnim.shapeToViewPoints
                        |> findFirst { x = 100, y = 100 }
                        |> (\p -> p.x < 10 && p.y < 10)
                        |> Expect.true "shape updated"
            , test "updates shapes start time to Nothing when time is after end time" <|
                \() ->
                    updateModel LogoAnim.None (Just 1) (Just 2) model
                        |> LogoAnim.tick 3
                        |> .shapes
                        |> findFirst shape
                        |> .actionStart
                        |> Expect.equal Nothing
            , test "updates shapes end time to Nothing when time is after end time" <|
                \() ->
                    updateModel LogoAnim.None (Just 1) (Just 2) model
                        |> LogoAnim.tick 3
                        |> .shapes
                        |> findFirst shape
                        |> .actionStart
                        |> Expect.equal Nothing
            , test "resets shapes current transform when time is after end time" <|
                \() ->
                    updateModel LogoAnim.None (Just 1) (Just 2) model
                        |> LogoAnim.tick 3
                        |> .shapes
                        |> findFirst shape
                        |> .currentTransform
                        |> Expect.equal shape.initialTransform
            , test "does nothing when not due to move" <|
                \() ->
                    updateModel LogoAnim.None Nothing Nothing model
                        |> LogoAnim.tick 250
                        |> .shapes
                        |> findFirst shape
                        |> LogoAnim.shapeToViewPoints
                        |> findFirst { x = 100, y = 100 }
                        |> (\p -> p.x == 10 && p.y == 10)
                        |> Expect.true "shape not updated"
            ]


update : Test
update =
    let
        updateAction =
            \newAction model -> { model | action = newAction }
    in
        describe "update"
            [ test "ignores action of None" <|
                \() ->
                    updateAction LogoAnim.Hinge LogoAnim.init
                        |> LogoAnim.update LogoAnim.None
                        |> .action
                        |> Expect.equal LogoAnim.Hinge
            , test "updates action when not None" <|
                \() ->
                    updateAction LogoAnim.None LogoAnim.init
                        |> LogoAnim.update LogoAnim.Hinge
                        |> .action
                        |> Expect.equal LogoAnim.Hinge
            ]
