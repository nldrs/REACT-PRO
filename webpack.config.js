const path = require('path');
const webpack = require("webpack");
console.log(__dirname)
module.exports = {
    entry: './src/js/root.js',
    output: {
        path: path.resolve(__dirname, "src/"),
        // path:__dirname+'/src/',
        filename: "all.js",
         publicPath: '/assets/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader','css-loader']
        }]
    },
      /*plugins:[
        "react-html-attrs"
      ],
    devServer:{
        contentBase: path.resolve(__dirname, './dist'), // boolean | string | array, static file location
        host:'192.168.0.111',
        compress: true, // enable gzip compression
        port:'9000',
        historyApiFallback:true,
        hot:true,
        inline:true,
        progress:true
       
    },*/
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/
    },
    watch: true
};