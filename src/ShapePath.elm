module ShapePath exposing (Path, hinge, moveDown, moveRight, rotate, shear, shrink, wobble, pathEndTime, transformsAtTime)

import List as List exposing (head, map)
import GeometricTransformer2D as Transformer


{-| Progress between 0 and 1
-}
type alias Progress =
    Float


type alias Path =
    { duration : Float
    , steps : List Step
    }


type alias Step =
    { start : Progress
    , duration : Progress
    , end : Progress
    , progressiveTransforms : Progress -> List Transformer.Transformation
    }


type Direction
    = Backward
    | Forward


createPath : Float -> List Step -> Path
createPath durationInSeconds steps =
    { duration = durationInSeconds * 1000
    , steps = steps
    }


pushStep : Progress -> List (Progress -> Transformer.Transformation) -> List Step -> List Step
pushStep duration transforms steps =
    let
        previousStep =
            List.head steps
    in
        case previousStep of
            Nothing ->
                [ createStep 0 duration transforms ]

            Just previous ->
                createStep previous.end duration transforms
                    :: steps


createStep : Progress -> Progress -> List (Progress -> Transformer.Transformation) -> Step
createStep start duration transforms =
    let
        progressiveTransforms =
            (\progress -> List.map (\t -> t progress) transforms)
    in
        { start = start
        , duration = duration
        , end = start + duration
        , progressiveTransforms = progressiveTransforms
        }


hinge : Path
hinge =
    let
        angle =
            (\progress -> 2 * pi * progress)

        maxScale =
            0.7

        scale =
            scaleProgress maxScale 2
    in
        []
            |> pushStep 0.25 [ (scale >> Transformer.scaleUniform), (angle >> Transformer.rotate Transformer.Clockwise) ]
            |> pushStep 0.25 [ (always maxScale >> Transformer.scaleUniform), (angle >> Transformer.rotate Transformer.Clockwise) ]
            |> pushStep 0.25 [ (always maxScale >> Transformer.scaleUniform), (angle >> Transformer.rotate Transformer.AntiClockwise) ]
            |> pushStep 0.25 [ (scale >> Transformer.scaleUniform), (angle >> Transformer.rotate Transformer.AntiClockwise) ]
            |> createPath 4


moveDown : Path
moveDown =
    let
        offset =
            (\progress -> ( 0, translateProgress Forward 100 (progress / 2) ))
    in
        []
            |> pushStep 1 [ offset >> Transformer.translate ]
            |> createPath 2


moveRight : Path
moveRight =
    let
        offset =
            (\progress -> ( translateProgress Forward -100 (progress / 2), 0 ))

        scale =
            scaleProgress 0.5 1
    in
        []
            |> pushStep 1 [ (scale >> Transformer.scaleUniform), (offset >> Transformer.translate) ]
            |> createPath 5


rotate : Path
rotate =
    let
        maxOffset =
            40

        maxScale =
            0.8

        angle =
            (\progress -> 4 * pi * (progress - 0.25))

        forwardOffset =
            asymmetricOffset (translateProgress Forward maxOffset)

        backwardOffset =
            asymmetricOffset (translateProgress Backward maxOffset)
    in
        []
            |> pushStep 0.25 [ (scaleProgress maxScale 2 >> Transformer.scaleUniform), (forwardOffset >> Transformer.translate) ]
            |> pushStep 0.5 [ (always maxScale >> Transformer.scaleUniform), (angle >> Transformer.rotate Transformer.AntiClockwise), (always ( maxOffset, -maxOffset ) >> Transformer.translate) ]
            |> pushStep 0.75 [ (scaleProgress maxScale 2 >> Transformer.scaleUniform), (backwardOffset >> Transformer.translate) ]
            |> createPath 10


shear : Path
shear =
    let
        maxOffset =
            -80

        maxShear =
            -2

        shearLeft =
            (\progress -> maxShear * 4 * (progress - 0.25))

        shearRight =
            (\progress -> maxShear - (maxShear * 4 * (progress - 0.5)))
    in
        []
            |> pushStep 0.25 [ (symmetricOffset (translateProgress Forward maxOffset) >> Transformer.translate) ]
            |> pushStep 0.25 [ (shearLeft >> Transformer.shear Transformer.Horizontal), (always ( maxOffset, maxOffset ) >> Transformer.translate) ]
            |> pushStep 0.25 [ (shearRight >> Transformer.shear Transformer.Horizontal), (always ( maxOffset, maxOffset ) >> Transformer.translate) ]
            |> pushStep 0.25 [ (symmetricOffset (translateProgress Backward maxOffset) >> Transformer.translate) ]
            |> createPath 4


shrink : Path
shrink =
    [ createStep 0 1 [ (scaleProgress 0.5 4 >> Transformer.scaleUniform) ] ]
        |> createPath 3


wobble : Path
wobble =
    let
        angle =
            degrees 1

        duration =
            0.01
    in
        List.map (\i -> addWobble duration angle ((toFloat i) / 100)) [0..100]
            |> createPath 2


addWobble : Float -> Float -> Float -> Step
addWobble duration angle start =
    let
        wobbleProgress =
            round <| 25 * start
    in
        if wobbleProgress % 2 == 0 then
            createStep start duration [ always angle >> Transformer.rotate Transformer.Clockwise ]
        else
            createStep start duration [ always angle >> Transformer.rotate Transformer.AntiClockwise ]


symmetricOffset : (Progress -> Float) -> Progress -> ( Float, Float )
symmetricOffset offset =
    (\progress -> ( offset progress, offset progress ))


asymmetricOffset : (Progress -> Float) -> Progress -> ( Float, Float )
asymmetricOffset offset =
    (\progress -> ( offset progress, negate (offset progress) ))


translateProgress : Direction -> Float -> Progress -> Float
translateProgress direction offset progress =
    case direction of
        Forward ->
            offset * sin (2 * pi * progress)

        Backward ->
            offset - (offset * cos (2 * pi * progress))


scaleProgress : Float -> Float -> Progress -> Float
scaleProgress scale cycle progress =
    let
        angle =
            2 * pi * cycle * progress

        offset =
            (1 - scale) / 2
    in
        scale + (offset * (1 + cos angle))


pathEndTime : Path -> Float -> Float
pathEndTime path time =
    path.duration + time


transformsAtTime : Path -> Float -> Float -> List Transformer.Transformation
transformsAtTime path endTime time =
    let
        progress =
            timeRemainingToProgress path.duration (endTime - time)
    in
        transformsForProgress path.steps progress


timeRemainingToProgress : Float -> Float -> Progress
timeRemainingToProgress duration remaining =
    if remaining <= 0 then
        1
    else
        (duration - remaining) / duration


transformsForProgress : List Step -> Progress -> List Transformer.Transformation
transformsForProgress steps progress =
    let
        currentStep =
            List.head <| List.filter (\s -> progress >= s.start && progress < (s.start + s.duration)) steps
    in
        case currentStep of
            Nothing ->
                []

            Just step ->
                step.progressiveTransforms progress
