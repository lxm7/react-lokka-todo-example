const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['whatwg-fetch', './src/app.js'],
  output: {
    publicPath: '/'
  },
  module: {
    exprContextRegExp: /$^/,
    exprContextCritical: false, // see https://github.com/andris9/encoding/issues/16#issuecomment-167376712
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.css/,
      loader: 'style!css'
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    },
    {
      test: /\.json$/,
      loader: "json-loader" // see http://stackoverflow.com/a/36297216
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
}
