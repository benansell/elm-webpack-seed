# elm-webpack-seed
A starter project for elm apps using [webpack](https://webpack.github.io/) and [elm-css](http://package.elm-lang.org/packages/rtfeldman/elm-css/latest)

The seed application is a static app that displays "Hello World" in the content of a [hero layout](https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/) using flexbox.

If you are looking for a webpack starter that does not use elm-css checkout [elm-webpack-starter](https://github.com/moarwick/elm-webpack-starter)

## Features
The seed app contains the following features:
* elm-css - use elm to write your css
* autoprefixer - automatically adds browser specific prefixes to css
* dev server - local development
* deployment - bundles and minifies js & css for production

## Prerequisites
The install guide assumes that you already have the following installed:
* [npm](https://docs.npmjs.com/)
* [elm](http://elm-lang.org/install) - v17.1

## Install
```
git clone https://github.com/benansell/elm-webpack-seed.git
cd elm-webpack-seed
npm install
elm package install
```

## Development
Running the following command will start the app locally:
```
npm start
```
Now browse to the app at `http://localhost:8000/`

The un-minified un-autoprefixed css can be generated separately by running
```
npm run build-css
```
The output will be put in `dist/app.css`

## Production
To generate the files for deployment run:
```
npm run build
```
The output will be placed in the `dist` folder

## Directory Layout
```
dist/                    --> output for deployment - See Production section
elm-package.json         --> definition of the elm required packages
elm-stuff/               --> elm installed packages
node_modules/            --> npm installed modules
package.json             --> definition of the npm required packages
src/                     --> source code directory
    index.tpl.html       --> template html file used by webpack to create index.html
    index.js             --> added into the index.html file by webpack html loader
    Main.elm             --> example basic elm application with a hero layout
    SharedCss.elm        --> example css rules
    Stylesheets.elm      --> Used by elm-css to generate the css
webpack.config.js        --> webpack configuration
```
