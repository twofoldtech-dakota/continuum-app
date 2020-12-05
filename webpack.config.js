const path = require('path');
module.exports = {
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        // {
        //   test: /\.css$/,
        //   loader: 'style-loader!css-loader?modules'
        // },
        {
          test: /\.(jpg|png|svg)$/,
          loader: 'url-loader',
          options: {
            limit: 25000,
          },
      },
      {
          test: /\.(jpg|png|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[path][name].[hash].[ext]',
          },
      },
      ]
    }
  }
};