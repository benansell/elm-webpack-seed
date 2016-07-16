module Main exposing (..)

import Html exposing (Html, aside, div, footer, header, main', nav, text)
import Html.App as App
import SharedCss exposing (..)


main : Program Never
main =
    App.beginnerProgram
        { model = model
        , view = view
        , update = \_ model -> model
        }


type alias Model =
    String


model : Model
model =
    "Hello World"


{ id, class, classList } =
    layoutNamespace
view : Model -> Html a
view model =
    div [ class [ SharedCss.Page ] ]
        [ header [] []
        , div [ class [ SharedCss.Body ] ]
            [ main' [ class [ SharedCss.Content ] ]
                [ text model
                ]
            , nav [ class [ SharedCss.Nav ] ] []
            , aside [ class [ SharedCss.Aside ] ] []
            ]
        , footer [] []
        ]
