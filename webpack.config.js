
/**
 * Dependencies
 */

const watch = process.env.WATCH ? process.env.WATCH : false;
const webpack = require('webpack');
const path = require('path');
/**
 * Input/Output file paths
 */
var extEntryFilePath = './index.tsx';
var outputFileName = '[name].min.js';
var sourceMapOutputFileName = '[name].map';

module.exports = {
  watch: watch,

  mode: 'development',
  watchOptions: {
    aggregateTimeout: 300,
    ignored: /node_modules/
  },
  entry:        {
    app: "./index.ts",
  },
  devtool:      'source-map',
  output:       {
    path:              __dirname,
    filename:          outputFileName,
    sourceMapFilename: sourceMapOutputFileName
  },
  resolve:      {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  externals:    {
    "jquery": "jQuery",
    "react": "React",
    "react-dom": "ReactDOM"
  },
  module:       {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};
