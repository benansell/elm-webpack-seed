# elm-webpack-seed [![Build status](https://ci.appveyor.com/api/projects/status/pdqp2pxqekxh5txq/branch/master?svg=true)](https://ci.appveyor.com/project/benansell/elm-webpack-seed/branch/master) [![Build Status](https://travis-ci.org/benansell/elm-webpack-seed.svg?branch=master)](https://travis-ci.org/benansell/elm-webpack-seed)

A starter project for elm apps using [webpack](https://webpack.github.io/) and [elm-css](http://package.elm-lang.org/packages/rtfeldman/elm-css/latest)

The seed application is a static app that displays an animated Elm logo in the content of a [hero layout](https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/) using flexbox. In addition the seed project contains a test suite using [elm-test](http://package.elm-lang.org/packages/elm-community/elm-test/latest) and a local configuration demonstrating how they can be used for TDD.

If you are looking for a webpack starter that does not use elm-css checkout [elm-webpack-starter](https://github.com/moarwick/elm-webpack-starter)

## Features
The seed app contains the following features:
* elm-css - use elm to write your css
* fontawesome - use elm to add fontawesome icons
* autoprefixer - automatically adds browser specific prefixes to css
* dev server - local development
* testing - TDD setup with auto-rerun of the tests
* hot module replacement - support for auto updating modules without refreshing the entire page
* deployment - bundles and minifies js & css for production
* long-term caching - output file names use chunkhash for cache busting

## Demo
https://benansell.github.io/elm-webpack-seed

## Prerequisites
The install guide assumes that you already have the following installed:
* [npm](https://docs.npmjs.com/)
* [elm](http://elm-lang.org/install) - v18.0

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

You can not check the hot module replacement (HMR) is working by changing values in
the app code and seeing the effect in the browser without having to manually reload
the page - e.g. try changing the css in src/SharedCss.elm

Warning: Changes to the code used during the init phase (src/Main.elm - init)
cause a page reload - but *do not* take affect until you manually reload the page. You
can see this behavior by changing the logo shape definitions - e.g. try changing the
color of one of the shapes in src/LogoAnimation.elm


The un-minified un-autoprefixed css can be generated separately by running
```
npm run build-css
```
The output will be put in `dist/` as css files without hash's in the file names

## Testing
The tests are written using [elm-test](http://package.elm-lang.org/packages/elm-community/elm-test/latest) can be run in the following configurations:

| Configuration             | Command              | Output                 |
|---------------------------|----------------------|------------------------|
| Single run in the console | npm run test-console | See the console        |
| Single run in the browser | npm run test-html    | http://localhost:8000/TestRunnerHtml.elm |
| Auto-rerun in the browser | npm test             | http://localhost:9000/ |

Note: The single run in the browser runs on the same port as the development server
and so cannot be run at the same time. However, the auto-rerun setup is configured
to run on a different port and can be run concurrently with the local development
server.

For example to start the tests so that they auto-rerun on file changes (recommended
for TDD!) run the following command:
```
npm run test
```

Note: Be careful to keep your elm-package.json and test/elm-package.json files in sync;
otherwise your tests will not run correctly

## Production
To generate the files for deployment run:
```
npm run build
```
The output will be placed in the `dist` folder. The output file names contain a hash
that changes when the contents of the bundle change.

The following chunks are defined:

| Chunk | Change trigger        | Description                                   |
|-------|-----------------------|-----------------------------------------------|
|app    | app js/css changes    | application specific code                     |
|vendor | vendor js/css changes | 3rd party dependencies                        |
|init   | any js/css change     | initial chunk and details of all other chunks |

Note: The other hashed files in the output directory are the font files for fontawesome
that are automatically bundled by webpack.

## Directory Layout
```
dist/                        --> output for deployment - See Production section
elm-package.json             --> definition of the elm required packages
elm-stuff/                   --> elm installed packages
node_modules/                --> npm installed modules
package.json                 --> definition of the npm required packages
src/                         --> source code directory
    app.js                   --> app specific js added into the index.html file by webpack
    assets/                  --> application specific assets
    index.tpl.html           --> template html file used by webpack to create index.html
    LogoAnimation.elm        --> example content that animates the elm logo
    LogoAnimationCss.elm     --> example content specific css
    Main.elm                 --> example basic elm application with a hero layout
    ShapePath.elm            --> example code used in the animation
    SharedCss.elm            --> example shared css rules
    Stylesheets.elm          --> Used by elm-css to generate the css
    vendor.js                --> 3rd party dependencies, such as fontawesome
tests/                       --> test code directory
    elm-package.json         --> definition of the elm required packages for app & testing
    elm-stuff/               --> elm installed packages for app & testing
    index.html               --> html file used to display the TDD test results
    LogoAnimationTests.elm   --> example tests
    ShapePathTests.elm       --> example tests
    test-app.js              --> test specific js used for TDD testing
    TestRunnerConsole.elm    --> harness for running the tests in the console
    TestRunnerHtml.elm       --> harness for running the tests in the browser
    Tests.elm                --> defines which tests are run by the test runners
webpack.config.js            --> webpack configuration - dev, TDD, production
```
