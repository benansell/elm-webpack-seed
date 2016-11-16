module Main exposing (main)

import AnimationFrame exposing (times)
import Css as Css
import FontAwesome.Brand as FontAwesomeBrand
import FontAwesome.Web as FontAwesomeWeb
import Html exposing (Html, Attribute, a, aside, div, footer, h1, header, img, li, main_, nav, p, span, text, ul)
import Html as Html
import Html.Attributes as Attr
import LogoAnimation as LogoAnim exposing (Action, Model, init, tick, update, view)
import SharedCss exposing (CssClasses, layoutNamespace)
import String


main : Program Never Model Msg
main =
    Html.program
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
      , status = "Waiting..."
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
            ( { model
                | logoModel = LogoAnim.tick time model.logoModel
              }
            , Cmd.none
            )

        Logo msg ->
            ( { model
                | logoModel = LogoAnim.update msg model.logoModel
                , status = updateStatus msg
              }
            , Cmd.none
            )


updateStatus : Action -> String
updateStatus action =
    let
        actionDescription =
            LogoAnim.actionToString action
    in
        case actionDescription of
            Nothing ->
                "Waiting..."

            Just description ->
                "Last action: " ++ String.toLower description



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    AnimationFrame.times Tick



-- VIEW


{ class } =
    layoutNamespace



--


styles : List Css.Mixin -> Attribute a
styles =
    Css.asPairs >> Attr.style


view : Model -> Html Msg
view model =
    div [ class [ SharedCss.Page ] ]
        [ header [] [ viewHeader ]
        , div [ class [ SharedCss.Body ] ]
            [ main_ [ class [ SharedCss.Content ] ]
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
    div [] [ p [ class [ SharedCss.NavMessage ] ] [ text model.status ] ]


viewAside : Model -> Html Msg
viewAside model =
    span []
        [ p [ class [ SharedCss.NavAsideStatus ] ]
            [ FontAwesomeWeb.info_circle, text "  Nudge the logo to make it move" ]
        ]


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
                        , div [ class [ SharedCss.MediaBody ] ] [ text "Powered by Elm" ]
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
    LogoAnim.view model.logoModel
        |> Html.map Logo
