const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    scroll: './src/scroll.js'
  },
  devServer: {
    contentBase: './dist'
  }, 
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules:[
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}},
          'postcss-loader'
        ]
      },
      {
        test:/\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Jack's Portolio Page",
      template: './src/template.html'
    }),
    new CleanWebpackPlugin(['dist'])
  ]
};