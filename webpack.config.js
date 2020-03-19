const webpack = require("webpack");
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        "wordifyfa": "./wordifyfa.js",
        "wordifyfa.min": "./wordifyfa.js"
    },
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: "[name].js",
    },
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            include: /\.min\.js$/
        })]
    }
};