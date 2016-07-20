(function() {
    'use strict';

    // elm-css
    require('./Stylesheets');

    // inject elm
    var Elm = require('./Main');
    Elm.Main.embed(document.getElementById('app'));
})();
