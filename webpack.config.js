var webpack = require('webpack');
var path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var parentDir = path.join(__dirname, './');

module.exports = {
    entry: [
        path.join(parentDir, './src/index.js')
    ],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },{
                test: /\.(scss|css)$/,
                loaders: [
                  "style-loader", "css-loader", "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'index.html', to: 'index.html' },
            { from: 'src/assets/images', to: 'src/assets/images' }
        ], {
            copyUnmodified: true
        }),
        new ExtractTextPlugin("styles.css")
    ],
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}
