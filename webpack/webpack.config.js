const modoDev = process.env.NODE_ENV !== 'production'

const webpack = require('webpack')
const MiniCssExtractPlugin = require ('mini-css-extract-plugin')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {

    mode: modoDev ? 'development' : 'production',

    entry: './src/principal.js',
    output:{
        filename: "pricipal.js",
        path: __dirname +"/public"
    },
    devServer:{
        contentBase: "./public",
        port:9000
    },
    optimization:{
        minimizer:[
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
            }),
            new OptimizeCSSAssetsPlugin({
                //////
            })
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:"style.css",

        })
    ],
    module:{
        rules:[{
            test:/\.s?[ac]ss$/,
            use:[
                MiniCssExtractPlugin.loader,
                //'style-loader',//adiciona o CSS na DOM
                'css-loader',//interpretar as url()
                'sass-loader',

            ]
        },{
            test: /\.(png|svg|jpg|gif)$/,
            use:['file-loader']  
        }]
    }

}