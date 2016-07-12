var CopyWebpackPlugin = require('copy-webpack-plugin');
var WebpackMerge = require('webpack-merge');

var common = {
    entry: [
        './src/index.js'
    ],

    output: {
        path: './dist',
        filename: 'index.js'
    },

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.elm']
    },

    module: {
        loaders: [{
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'file?name=[name].[ext]'
            },

            {
                test: /\.elm$/,
                exclude: [/elm-stuff/, /node_modules/],
                loader: 'elm'
            },
        ]
    },

    target: 'web'
};


var devOnly = {
    devServer: {
        inline: true,
        progress: true,
        stats: 'errors-only'
    }
};

var prodOnly = {
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'src/index.html'
            }
        ])
    ]
};


var npm_target = process.env.npm_lifecycle_event;
var environment;

if(npm_target === 'start') {
    environment = 'development';
} else {
    environment = 'production';
}

if(environment === 'development') {
    console.log('running development');
    module.exports = WebpackMerge(common, devOnly);
} else {
    console.log('building for production');
    module.exports = WebpackMerge(common, prodOnly);
}
