const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }/*,
  module:{
      rules:[
          {
              test: /\.css$|.scss$/,
              use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader'
              ]
          },
          {
              test: /\.(png|svg|jpg|gif)$/,
              use: [
                  'file-loader'
              ]
          },
          {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: [
                  'file-loader'
              ]
          },
          {
              test: /\.(csv|tsv)$/,
              use: [
                  'csv-loader'
              ]
          },
          {
              test: /\.xml$/,
              use: [
                  'xml-loader'
              ]
          }
      ]
  }*/
};