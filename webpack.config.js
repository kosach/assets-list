const path = require('path');
const config = {
  entry: ['babel-polyfill', './src/client.js'],  
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:
        {
          presets:['react']
        },
      },
    ]
  }
};

module.exports = config;
