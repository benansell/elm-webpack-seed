module ShapePath
    exposing
        ( Path
        , pathToTransformations
        , hinge
        , moveDown
        , moveRight
        , rotate
        , shear
        , shrink
        , wobble
        )

import Ease as Ease
import List as List exposing (head, map)
import Transformer2D as Transformer


-- PROGRESS
{- Progress between 0 and 1 -}


type alias Progress =
    Float


type alias EaseProgress a =
    Progress -> a


type alias EaseCycle a =
    { easeIn : EaseProgress a
    , easeOut : EaseProgress a
    }



-- PATH


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


pathToTransformations : Path -> Float -> Float -> List Transformer.Transformation
pathToTransformations path endTime time =
    let
        progress =
            timeRemainingToProgress path.duration (endTime - time)

        currentStep =
            List.filter (\s -> progress >= s.start && progress < (s.start + s.duration)) path.steps
                |> List.head
    in
        case currentStep of
            Nothing ->
                []

            Just step ->
                step.progressiveTransforms progress


timeRemainingToProgress : Float -> Float -> Progress
timeRemainingToProgress duration remaining =
    if remaining <= 0 then
        1
    else
        (duration - remaining) / duration



-- PATH LIBRARY


hinge : Path
hinge =
    let
        maxAngle =
            pi / 2

        angleOne =
            easeSimple Ease.inQuint Ease.linear maxAngle
                |> easeDuration 0.25 0.25

        angleTwo =
            easeSimple Ease.outBack Ease.linear maxAngle
                |> easeOffset maxAngle maxAngle
                |> easeDuration 0.25 0.25

        maxScale =
            0.7

        scale =
            easeScale Ease.linear maxScale
                |> easeDuration 0.25 0.25
    in
        []
            |> pushStep 0.25 [ (scale.easeIn >> Transformer.scaleUniform), (angleOne.easeIn >> Transformer.rotate Transformer.Clockwise) ]
            |> pushStep 0.25 [ (always maxScale >> Transformer.scaleUniform), (angleTwo.easeIn >> Transformer.rotate Transformer.Clockwise) ]
            |> pushStep 0.25 [ (always maxScale >> Transformer.scaleUniform), (angleTwo.easeOut >> Transformer.rotate Transformer.Clockwise) ]
            |> pushStep 0.25 [ (scale.easeOut >> Transformer.scaleUniform), (angleOne.easeOut >> Transformer.rotate Transformer.Clockwise) ]
            |> createPath 4


moveDown : Path
moveDown =
    let
        offset =
            easeTranslate Ease.outElastic ( 0, 75 )
                |> easeDuration 0.5 0.5
    in
        []
            |> pushStep 0.5 [ offset.easeIn >> Transformer.translate ]
            |> pushStep 0.5 [ offset.easeOut >> Transformer.translate ]
            |> createPath 2


moveRight : Path
moveRight =
    let
        offset =
            easeTranslate Ease.outBounce ( -100, 0 )
                |> easeDuration 0.5 0.5

        scale =
            easeScale Ease.inOutBack 0.5
                |> easeDuration 0.5 0.5
    in
        []
            |> pushStep 0.5 [ (scale.easeIn >> Transformer.scaleUniform), (offset.easeIn >> Transformer.translate) ]
            |> pushStep 0.5 [ (scale.easeOut >> Transformer.scaleUniform), (offset.easeOut >> Transformer.translate) ]
            |> createPath 5


rotate : Path
rotate =
    let
        maxOffset =
            40

        offset =
            easeTranslate Ease.outSine ( maxOffset, -maxOffset )
                |> easeDuration 0.25 0.25

        maxScale =
            0.8

        scale =
            easeScale Ease.linear maxScale
                |> easeDuration 0.25 0.25

        angle =
            easeSimple Ease.linear Ease.outBack (2 * pi)
                |> easeDuration 0.5 0.5
    in
        []
            |> pushStep 0.25 [ (scale.easeIn >> Transformer.scaleUniform), (offset.easeIn >> Transformer.translate) ]
            |> pushStep 0.5
                [ (always maxScale >> Transformer.scaleUniform)
                , (angle.easeOut >> Transformer.rotate Transformer.AntiClockwise)
                , (always ( maxOffset, -maxOffset ) >> Transformer.translate)
                ]
            |> pushStep 0.75 [ (scale.easeOut >> Transformer.scaleUniform), (offset.easeOut >> Transformer.translate) ]
            |> createPath 10


shear : Path
shear =
    let
        maxOffset =
            -80

        offset =
            easeTranslate Ease.outSine ( maxOffset, maxOffset )
                |> easeDuration 0.25 0.25

        shear =
            easeSimple Ease.linear Ease.inBounce -2
                |> easeDuration 0.25 0.25
    in
        []
            |> pushStep 0.25 [ (offset.easeIn >> Transformer.translate) ]
            |> pushStep 0.25 [ (shear.easeIn >> Transformer.shear Transformer.Horizontal), (always ( maxOffset, maxOffset ) >> Transformer.translate) ]
            |> pushStep 0.25 [ (shear.easeOut >> Transformer.shear Transformer.Horizontal), (always ( maxOffset, maxOffset ) >> Transformer.translate) ]
            |> pushStep 0.25 [ (offset.easeOut >> Transformer.translate) ]
            |> createPath 4


shrink : Path
shrink =
    let
        scale =
            easeScale Ease.inOutBack 0.5
                |> easeDuration 0.25 0.25
    in
        []
            |> pushStep 0.25 [ (scale.easeIn >> Transformer.scaleUniform) ]
            |> pushStep 0.25 [ (scale.easeOut >> Transformer.scaleUniform) ]
            |> pushStep 0.25 [ (scale.easeIn >> Transformer.scaleUniform) ]
            |> pushStep 0.25 [ (scale.easeOut >> Transformer.scaleUniform) ]
            |> createPath 3


wobble : Path
wobble =
    let
        angle =
            degrees 1

        duration =
            0.01
    in
        List.map (\i -> addWobble duration angle ((toFloat i) / 100)) (List.range 0 100)
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



-- HELPERS


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
            (\progress -> List.map (\t -> t (progress - start)) transforms)
    in
        { start = start
        , duration = duration
        , end = start + duration
        , progressiveTransforms = progressiveTransforms
        }



-- EASE CYCLE


easeDuration : Progress -> Progress -> EaseCycle a -> EaseCycle a
easeDuration durationIn durationOut easeCycle =
    { easeIn = (\p -> easeCycle.easeIn (p / durationIn))
    , easeOut = (\p -> easeCycle.easeOut (p / durationOut))
    }


easeOffset : number -> number -> EaseCycle number -> EaseCycle number
easeOffset offsetIn offsetOut easeCyle =
    { easeIn = (\p -> offsetIn + easeCyle.easeIn p)
    , easeOut = (\p -> offsetOut + easeCyle.easeOut p)
    }


easeSimple : Ease.Easing -> Ease.Easing -> Float -> EaseCycle Float
easeSimple easingIn easingOut direction =
    { easeIn = (\p -> direction * easingIn p)
    , easeOut = (\p -> direction * Ease.reverse easingOut p)
    }


easeScale : Ease.Easing -> Float -> EaseCycle Float
easeScale easing maxScale =
    let
        scale =
            1 - maxScale

        easeProgress =
            (\p -> scale * easing p)
    in
        { easeIn = (\p -> 1 - easeProgress p)
        , easeOut = (\p -> maxScale + easeProgress p)
        }


easeTranslate : Ease.Easing -> ( Float, Float ) -> EaseCycle ( Float, Float )
easeTranslate easing ( tx, ty ) =
    let
        easeIn =
            (\p t -> t * easing p)

        easeOut =
            (\p t -> t * Ease.reverse easing p)
    in
        { easeIn = (\p -> ( easeIn p tx, easeIn p ty ))
        , easeOut = (\p -> ( easeOut p tx, easeOut p ty ))
        }
