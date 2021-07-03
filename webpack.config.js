const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = (env = {}) => {

  const DEV = 'development';
  const PROD = 'production';
  const NONE = 'none';

  const {mode = NONE} = env;
  const isProd = mode === PROD;
  const isDev = mode === DEV;

  const getStyleLoaders = (isProd) => {
    return [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader'
    ];
  };

  const getPlugins = (isProd, isDev) => {
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
    mode,
    module: {
      rules: [{
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }, {
          test: /\.css$/,
          use: getStyleLoaders(isProd)
        }, {
          test : /\.(s[c|a]ss)$/,
          use: [...getStyleLoaders(isProd), 'sass-loader']
        }, {
          test: /\.html$/,
          loader: 'html-loader'
        },
      ]
    },
    plugins: getPlugins(isProd, isDev),
    devServer: {
      open: true,
      historyApiFallback: true
    }, 
    output: {
      publicPath: '/'
    }
  };

};


