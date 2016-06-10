var webpack = require('webpack');


module.exports = {
    context: __dirname,
    entry: {
        app: './app.jsx'
    },
    output: {
        path: __dirname + '/../dist',
        filename: '[name].js'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.jsx', '.less']
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'jsx' },
            { test: /\.css$/, loader: 'style!css'},
            { test: /\.less$/, loader: 'style!css!less'}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    ],
    externals: {
    }
};