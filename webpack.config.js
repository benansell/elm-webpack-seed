/* global process */

var AutoPrefixer = require('autoprefixer');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
var Webpack = require('webpack');
var WebpackMerge = require('webpack-merge');

var common = {
    entry: [
        './src/index.js'
    ],

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.elm']
    },

    module: {
        loaders: [{
            test: /\.elm$/,
            exclude: [
                /elm-stuff/,
                /node_modules/,
                /src\/Stylesheets.elm$/
            ],
            loader: 'elm'
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.tpl.html'
        })
    ],

    postcss: [AutoPrefixer({
        browsers: ['last 2 versions']
    })],

    target: 'web'
};


var devOnly = {
    module: {
        loaders: [{
            test: /src\/Stylesheets.elm$/,
            loaders: [
                'style-loader',
                'css-loader',
                'postcss-loader',
                'elm-css-webpack-loader'
            ]
        }]
    },

    devServer: {
        inline: true,
        progress: true,
        stats: 'errors-only'
    }
};

var prodOnly = {
    output: {
        path: './dist',
        filename: 'index.min.js'
    },

    module: {
        loaders: [{
            test: /src\/Stylesheets.elm/,
            loader: ExtractTextPlugin.extract(
                'style-loader', [
                    'css-loader',
                    'postcss-loader',
                    'elm-css-webpack-loader'
                ])
        }]
    },

    plugins: [
        new CopyWebpackPlugin([{
            from: 'src/index.html'
        }]),
        new ExtractTextPlugin('app.css'),
        new Webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new UnminifiedWebpackPlugin()
    ]
};

var npm_target = process.env.npm_lifecycle_event;
var environment;

if (npm_target === 'start') {
    environment = 'development';
} else {
    environment = 'production';
}

if (environment === 'development') {
    console.log('running development');
    module.exports = WebpackMerge(common, devOnly);
} else {
    console.log('building for production');
    module.exports = WebpackMerge(common, prodOnly);
}
