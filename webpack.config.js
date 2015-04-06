module.exports = {
  entry: {
    'demo/single': "./demo/single"
  },
  output: {
    filename: "[name].bundle.js",
  },
  module: {
    loaders: [
      // https://www.npmjs.com/package/font-awesome-webpack with custom output folder
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff&name=bundle/[hash].[ext]" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?name=bundle/[hash].[ext]" }
    ]
  },
  resolve: {
    alias: {
    }
  },
  plugins: [
    /* production
    new webpack.optimize.UglifyJsPlugin({
    })
    */
  ]
};
