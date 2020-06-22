const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    watch: true,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              plugins: ['@babel/plugin-transform-runtime']
            }
          }
        },
        { test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader" ] },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      }),
    ],
  };