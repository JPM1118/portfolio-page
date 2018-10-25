const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: {
    app: "./src/index.js",
    myWork: "./src/myWork.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "../dist/")
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img/",
              publicPath: "img/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Jack's Portolio Page",
      template: "./src/html-templates/index-template.html",
      chunks: ["app"],
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      title: "Jack's Portolio Page",
      myPageHeader: "My Work",
      template: "./src/html-templates/my-work.html",
      chunks: ["myWork"],
      filename: "mywork.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new CleanWebpackPlugin(["dist"])
  ]
};
