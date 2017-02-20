/**
 * This config is to build app/app.js to show examples
 * to github users
 */
var path = require('path');
const webpack = require('webpack');

const config = {
  entry: './app/index.tsx',
  output: {
    path: `${__dirname}/build/`,
    publicPath: '/build/',
    filename: 'app.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.ts', '.webpack.js', '.js', '.tsx', '.json', '.css', '.html'],
    alias: {
      'ol-react': path.join(__dirname, '..', 'src', 'index')
    }
  },
  module: {
    loaders: [
      {test: /\.ts$/, loader: 'ts' },
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.html/, loader: 'html'},
      {test: /\.tsx?$/, loader: 'awesome-typescript-loader'},
      //{test: /\.(ico|png|jpg|gif|svg|eot|ttf|woff|woff2)(\?.+)?$/, loader: 'url?limit=50000'}
    ],
    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  //externals: {
  //  "react": "React",
  //  "react-dom": "ReactDOM"
  //},
  plugins: []
};

module.exports = config;
