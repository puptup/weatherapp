const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const EslintWebpackPlugin = require("eslint-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      { 
        test: /\.(svg|png)$/i,
        use: ['url-loader'], 
      }
    ],
  },
  resolve: {
    extensions: ["*",".js", ".jsx", ".ts", ".tsx"],
    alias: {
      '@constants': path.resolve(__dirname, './src/constants'),
      '@app': path.resolve(__dirname, './src/app'),
      '@services': path.resolve(__dirname, './src/services'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@types': path.resolve(__dirname, './src/types'),
      '@theme': path.resolve(__dirname, './src/theme'),
      '@store': path.resolve(__dirname, './src/store'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  devServer: {
    static: {
        directory: path.join(__dirname, '/')
    },
    historyApiFallback: true,
  },
  plugins: [
    new EslintWebpackPlugin({
      extensions: ["tsx", 'js'],
      emitWarning: false,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new Dotenv()
  ],
};