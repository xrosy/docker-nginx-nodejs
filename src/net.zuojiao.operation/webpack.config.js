const webpack           = require('webpack');
const path              = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode   : 'none',
    entry  : './src/app.js',
    output : {
        path     : path.resolve(__dirname, 'dist'),
        filename : '[name].js',
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
                test : /\.x(html|htm|tpl)$/,
                use  : [
                    {
                        loader : 'html-loader',
                    },
                ],
            },
        ],
    },

    plugins : [
        new HtmlWebPackPlugin({
            template : './src/app.html',
            filename : './app.html',
        }),
    ],
};
