
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebPackPlugin ({
        template: './src/index.html',
        title: 'To-Do',
        filename: 'index.html',
        inject: 'body', //or head
        scriptLoading: 'defer', //if inject was head
    })
],
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
        
    },
};