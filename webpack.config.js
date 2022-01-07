const webpack = require("webpack");
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

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
            exclude: [/node_modules/, /dist/, /test/, /temp/ ]
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
        minimizer: [new TerserPlugin({
            include: /\.min\.js$/
        })]
    }
};