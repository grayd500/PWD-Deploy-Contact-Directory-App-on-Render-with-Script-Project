// client/webpack.config.js:
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js',
      cards: './src/js/cards.js'
    },

    // ✅: Add the correct output
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
    },
    

    // ✅: Add the correct plugins
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },    
  };
};
