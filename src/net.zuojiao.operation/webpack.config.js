
const webpack            = require('webpack');
const path               = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin  = require('html-webpack-plugin');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');


const absPath = (vp) => path.resolve(__dirname, vp ? vp : '.');


module.exports = {
    mode  : 'none',
    entry : {
        admin : absPath('./src/apps/admin/index.js'),
    },

    output : {
        path     : absPath('./dist'),
        filename : 'static/[name].js',
    },

    plugins : [
        new CleanWebpackPlugin([ 'dist' ]),

        new ExtractTextPlugin('static/[name].css'),

        new HtmlWebPackPlugin({
            template : absPath('./src/apps/admin/index.html'),
            filename : absPath('./dist/admin.html'),
        }),
    ],

    resolve : {
        modules : [
            absPath('src/components'),
            absPath('node_modules'),
        ],
    },

    module : {
        rules : [
            {
                test    : /\.(js|jsx)$/,
                exclude : /node_modules/,
                use     : {
                    loader : 'babel-loader',
                },
            },

            {
                test : /\.(css|less)$/,
                use  : ExtractTextPlugin.extract({
                    fallback : 'style-loader',
                    use      : [{ loader: 'css-loader', options: { importLoaders: 1 } }, 'less-loader' ],
                }),
            },

            {
                test : /\.(html|htm|tpl)$/,
                use  : [
                    {
                        loader : 'html-loader',
                    },
                ],
            },
        ],
    },
};
