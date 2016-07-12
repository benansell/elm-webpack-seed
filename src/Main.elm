module Main exposing (..)

import Html exposing (Html, div, text)
import Html.App as App

main : Program Never
main =
    App.beginnerProgram
        { model = model,
          view = view,
          update = update
        }

type alias Model = String

model : Model
model = "Hello World"

type Msg
    = Ignore

update : Msg -> Model -> Model
update msg model = model


view : Model -> Html a
view model =
    div [] [ text model ]
