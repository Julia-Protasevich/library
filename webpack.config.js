const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = (env = {}) => {

  const {mode = 'development'} = env;

  const isProd = mode === 'production';
  const isDev = mode === 'development';

  const getStyleLoaders = () => {
    return [
      isProd? MiniCssExtractPlugin.loader : 'style-loader',
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
    mode: isProd ? 'production' : isDev && 'development',
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


