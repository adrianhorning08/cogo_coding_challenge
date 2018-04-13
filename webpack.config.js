const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./main/scripts/entry.jsx",
    output: {
        path: __dirname,
        filename: "./main/scripts/bundle.js"
    },
    mode: 'development',
    module: {
      rules: [
        { test: /\.jsx$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ["react"]
          }
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    devtool: 'source-maps',
    watch: true,
    devServer: {
      port: 3000,
      hot: true
    }
};
