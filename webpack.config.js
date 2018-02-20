var path = require('path');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var packageJson = require('./package.json')

var env = process.env.WEBPACK_ENV;

var libraryName = packageJson.libraryName;
var fileName = packageJson.name;

var plugins = [], outputFile, cssOutputFile, cssMinifyOptions = {};

if (env === 'prod') {
    plugins.push(new UglifyJSPlugin());
    cssOutputFile = fileName + ".min.css";
    cssMinifyOptions.minimize = true;
    outputFile = fileName + '.min.js';
} else {
    cssOutputFile = fileName + ".css";
    outputFile = fileName + '.js';
}

plugins.push(new ExtractTextPlugin({filename: cssOutputFile, disable: false, allChunks: true}))

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd'
    },
    devtool: 'source-map',
    // target: 'node', //Uncomment this for nodejs libraries to use like "fs" features.
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: [
                        { loader: 'css-loader', options: cssMinifyOptions},
                        'sass-loader'
                    ]
                })
            }
        ]
    },
    externals: {},
    plugins: plugins
}