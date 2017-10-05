var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin'); 
var OptimizeJsPlugin = require('optimize-js-plugin');
var path = require('path');

module.exports = {
    entry: (env !== 'production' ? [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://loclalhost:8080',
        'webpack/hot/only-dev-server',
        ] : []).concat(['./client/index/js']),
        output: {
        filename: './bundle.js',
        path: __dirname = path.resolve(path.dirname('public')),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html',
        filname: 'index.html',
        inject: 'body',
    }),
   // new webpack.optimize.UglifyJsPlugin,
    new OptimizeJsPlugin({
        sourceMap: false
    })
    ]
};

var env = process.env.NODE_ENV;
console.log('NODE_ENV:', env);