module Main exposing (..)

import FontAwesome.Brand as FontAwesomeBrand
import Css as Css
import Html exposing (..)
import Html.Attributes as Attr
import Html.App as App
import SharedCss exposing (..)
import LogoAnimation as LogoAnim exposing (logoView)


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
styles : List Css.Mixin -> Attribute a
styles =
    Css.asPairs >> Attr.style


view : Model -> Html a
view model =
    div [ class [ SharedCss.Page ] ]
        [ header [] [ viewHeader ]
        , div [ class [ SharedCss.Body ] ]
            [ main' [ class [ SharedCss.Content ] ]
                [ viewContent model ]
            , nav [ class [ SharedCss.Nav ] ] [ viewNav ]
            , aside [ class [ SharedCss.Aside ] ] [ viewAside ]
            ]
        , footer [ class [ SharedCss.Footer ] ] [ viewFooter ]
        ]


viewHeader : Html a
viewHeader =
    div []
        [ h1 [] [ text "elm-webpack-seed" ]
        ]


viewNav : Html a
viewNav =
    div [] [ h2 [] [ text "Navigation" ] ]


viewAside : Html a
viewAside =
    div [] [ h3 [] [ text "Aside" ] ]


viewFooter : Html a
viewFooter =
    div []
        [ ul [ class [ SharedCss.FooterItems ] ]
            [ li []
                [ a [ Attr.href "http://elm-lang.org/" ]
                    [ div [ class [ SharedCss.Media ] ]
                        [ img
                            [ Attr.src "assets/elm_logo.svg"
                            , class [ SharedCss.MediaFigure ]
                            , styles [ Css.maxWidth (Css.px 30) ]
                            ]
                            []
                        , div [ class [ SharedCss.MediaBody ] ] [ text "Powered by elm" ]
                        ]
                    ]
                ]
            , li []
                [ a [ Attr.href "https://github.com/benansell/elm-webpack-seed" ]
                    [ FontAwesomeBrand.github, text " Github" ]
                ]
            ]
        ]


viewContent : Model -> Html a
viewContent model =
    LogoAnim.logoView
