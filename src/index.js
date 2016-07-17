(function() {
    'use strict';

    // vendor / 3rd party
    require('font-awesome/css/font-awesome.css');

    // elm-css
    require('./Stylesheets');

    // inject elm
    var Elm = require('./Main');
    Elm.Main.embed(document.getElementById('main'));
})();
