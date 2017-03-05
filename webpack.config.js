
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {

    //define entry point
    entry: './src/scrip1.js',

    //define output point
    output: {
        path: path.resolve(__dirname, "distr"),
       
        filename: 'bundle.js'
    },


     module:  {
       rules: [
           {test: /\.scss$/, use:ExtractTextPlugin.extract({
                             fallbackLoader:'style-loader',
                             loader: ['css-loader','sass-loader'],
                             publicPath:'/distr'
              // ['style-loader','css-loader','sass-loader']
         })},

         {
             
           
            test: /\.js$/,
            use : 'babel-loader',
            exclude: /node_modules/
     
           
         }
       ]
     },  

    devServer:{
        contentBase: path.join(__dirname, "distr"),
        compress: true,
        stats:"errors-only",
        open: true
        },
    plugins: [
            new HtmlWebpackPlugin({
            title: 'Portfolio111',
            template: './src/index.html',
            }),
         
             new ExtractTextPlugin({
             filename: "app.css",
             disable: false,
             allChunks: true
        })



   ]
     
}
