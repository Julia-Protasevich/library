const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = (env = {}) => {

  const DEV = 'development';
  const PROD = 'production';
  const NONE = 'none';

  let {mode = DEV} = env;

  let isProd = false;
  let isDev = false;

  const defineMode = () => {
    switch (mode){
      case PROD:
        isProd = true;
        break;
      case DEV:
        isDev = true;
        break;
      default:
        mode = NONE;
    }

    return mode;
  };

  const getStyleLoaders = () => {
    return [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader'
    ];
  };

  const getPlugins = () => {
    const plugins = [
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html'
      })
    ];

    if(isProd) {
      plugins.push(new MiniCssExtractPlugin({
        filename: 'main-[hash:8].css'
      }));
    }

    if(isDev) {
      plugins.push(new webpack.SourceMapDevToolPlugin({
        test: /\.js$/,
        filename: '[name].js.map',
      }));
    }

    return plugins;
  };

  return {
    mode: defineMode(),
    module: {
      rules: [{
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }, {
          test: /\.css$/,
          use: getStyleLoaders()
        }, {
          test : /\.(s[c|a]ss)$/,
          use: [...getStyleLoaders(), 'sass-loader']
        }, {
          test: /\.html$/,
          loader: 'html-loader'
        },
      ]
    },
    plugins: getPlugins()
  
  };

};


