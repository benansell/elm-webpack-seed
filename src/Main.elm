module Main exposing (..)

import FontAwesome.Brand as FontAwesomeBrand
import Html exposing (Html, a, aside, div, footer, header, li, main', nav, span, text, ul)
import Html.Attributes as Attr
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
        [ header [] [ viewHeader ]
        , div [ class [ SharedCss.Body ] ]
            [ main' [ class [ SharedCss.Content ] ]
                [ viewContent model ]
            , nav [ class [ SharedCss.Nav ] ] []
            , aside [ class [ SharedCss.Aside ] ] []
            ]
        , footer [ class [ SharedCss.Footer ] ] [ viewFooter ]
        ]


viewHeader : Html a
viewHeader =
    div [] []


viewFooter : Html a
viewFooter =
    div []
        [ ul [ class [ SharedCss.FooterItems ] ]
            [ li []
                [ a [ Attr.href "http://elm-lang.org/" ]
                    [ text "Powered by elm" ]
                ]
            , li []
                [ a [ Attr.href "https://github.com/benansell/elm-webpack-seed" ]
                    [ FontAwesomeBrand.github, text " Github" ]

                ]
            ]
        ]


viewContent : Model -> Html a
viewContent model =
    text model
