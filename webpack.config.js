/* global process */

var AutoPrefixer = require('autoprefixer');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
var Webpack = require('webpack');
var WebpackMerge = require('webpack-merge');


var npm_target = process.env.npm_lifecycle_event;
var environment;

if (npm_target === 'start') {
    environment = 'development';
} else if (npm_target === 'test') {
    environment = 'test-unit';
} else {
    environment = 'production';
}

var common = {
    entry: {
        app: './src/app.js',
        vendor: './src/vendor.js'
    },

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.elm']
    },

    module: {
        loaders: [{
            test: /\.(eot|svg|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?/,
            loader: 'file-loader'
        }],

        noParse: /^(?!.*Stylesheets).*\.elm$/
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.tpl.html'
        }),
        new Webpack.optimize.CommonsChunkPlugin({
            name: "init",
            minChunks: Infinity
        }),
        new Webpack.optimize.OccurenceOrderPlugin()
    ],

    postcss: [AutoPrefixer({
        browsers: ['last 2 versions']
    })],

    target: 'web'
};

var extractCssVendor = null;

if (environment === 'development') {
    console.log('running development');
    extractCssVendor = new ExtractTextPlugin('vendor.css');

    var devOnly = {
        output: {
            filename: '[name].js'
        },

        module: {
            loaders: [{
                    test: /\.css$/,
                    loader: extractCssVendor.extract('style-loader', 'css-loader')
                },

                {
                    test: /src\/Stylesheets.elm$/,
                    loaders: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                        'elm-css-webpack-loader'
                    ]
                },

                {
                    test: /\.elm$/,
                    exclude: [
                        /elm-stuff/,
                        /node_modules/,
                        /src\/Stylesheets.elm$/
                    ],
                    loaders: [
                        'elm-hot-loader',
                        'elm-webpack-loader?verbose=true&warn=true&debug=false'
                    ]
                }
            ]
        },

        plugins: [
            extractCssVendor
        ],

        devServer: {
            inline: true,
            progress: true,
            stats: 'errors-only'
        }
    };

    module.exports = WebpackMerge(common, devOnly);
} else if (environment === 'test-unit') {
    console.log('running unit tests');

    var unitTestsOnly = {
        entry: {
            app: './tests/test-app.js'
        },

        output: {
            filename: '[name].js'
        },

        resolve: {
            extensions: ['', '.js', '.elm']
        },

        module: {
            loaders: [{
                    test: /\.elm$/,
                    exclude: [
                        /elm-stuff/,
                        /node_modules/
                    ],
                loaders: [
                    'elm-webpack-loader?cwd=tests'
                    ]
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: 'tests/index.html'
            })
        ],

        devServer: {
            inline: true,
            progress: true,
            stats: 'errors-only'
        }
    };

    module.exports = unitTestsOnly;
} else {
    console.log('building for production');
    var extractCssApp = new ExtractTextPlugin('app-[chunkhash].css', {
        allChunks: true
    });
    extractCssVendor = new ExtractTextPlugin('vendor-[chunkhash].css');

    var prodOnly = {
        output: {
            path: './dist',
            filename: '[name]-[chunkhash].min.js',
            chunkFilename: '[name]-[chunkhash].min.js'
        },

        module: {
            loaders: [{
                    test: /\.css$/,
                    loader: extractCssVendor.extract('style-loader', 'css-loader')
                },

                {
                    test: /src\/Stylesheets.elm/,
                    loader: extractCssApp.extract(
                        'style-loader', [
                            'css-loader',
                            'postcss-loader',
                            'elm-css-webpack-loader'
                        ])
                },

                {
                    test: /\.elm$/,
                    exclude: [
                        /elm-stuff/,
                        /node_modules/,
                        /src\/Stylesheets.elm$/
                    ],
                    loader: 'elm-webpack-loader'
                }
            ]
        },

        plugins: [
            new CopyWebpackPlugin([{
                from: 'src/assets',
                to: 'assets'
            }]),
            extractCssApp,
            extractCssVendor,
            new UnminifiedWebpackPlugin(),
            new Webpack.optimize.UglifyJsPlugin({
                compress: {
                  warnings: false,
                  dead_code: true,
                  unused: true
                }
            })
        ]
    };

    module.exports = WebpackMerge(common, prodOnly);
}
