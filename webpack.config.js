const webpack = require("webpack");
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        "wordifyfa": "./src/wordifyfa.ts",
        "wordifyfa.min": "./src/wordifyfa.ts"
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }, ],
    },
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: "[name].js",
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            include: /\.min\.js$/
        })]
    }
};