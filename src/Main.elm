module Main exposing (..)

import AnimationFrame exposing (times)
import Css as Css
import FontAwesome.Brand as FontAwesomeBrand
import FontAwesome.Web as FontAwesomeWeb
import Html exposing (..)
import Html.Attributes as Attr
import Html.App as App
import SharedCss exposing (..)
import LogoAnimation as LogoAnim exposing (Action, Model, init, tick, update, view)


main : Program Never
main =
    App.program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }



-- MODEL


type alias Model =
    { logoModel : LogoAnim.Model
    , status : String
    }


init : ( Model, Cmd Msg )
init =
    ( { logoModel = LogoAnim.init
      , status = "Sleeping..."
      }
    , Cmd.none
    )



-- UPDATE


type Msg
    = Tick Float
    | Logo LogoAnim.Action


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Tick time ->
            ( { model | logoModel = LogoAnim.tick time model.logoModel }, Cmd.none )

        Logo msg ->
            ( { model | logoModel = LogoAnim.update msg model.logoModel }, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    AnimationFrame.times Tick



-- VIEW


{ id, class, classList } =
    layoutNamespace
styles : List Css.Mixin -> Attribute a
styles =
    Css.asPairs >> Attr.style


view : Model -> Html Msg
view model =
    div [ class [ SharedCss.Page ] ]
        [ header [] [ viewHeader ]
        , div [ class [ SharedCss.Body ] ]
            [ main' [ class [ SharedCss.Content ] ]
                [ viewContent model ]
            , nav [ class [ SharedCss.Nav ] ] [ viewNav model ]
            , aside [ class [ SharedCss.Aside ] ] [ viewAside model ]
            ]
        , footer [ class [ SharedCss.Footer ] ] [ viewFooter ]
        ]


viewHeader : Html a
viewHeader =
    div []
        [ h1 [] [ text "elm-webpack-seed" ]
        ]


viewNav : Model -> Html Msg
viewNav model =
    div [] [ h2 [ class [ SharedCss.NavMessage ] ] [ FontAwesomeWeb.warning, text " Logo is sleeping" ] ]


viewAside : Model -> Html Msg
viewAside model =
    div [] [ h3 [] [ text model.status ] ]


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


viewContent : Model -> Html Msg
viewContent model =
    App.map Logo <| LogoAnim.view model.logoModel
