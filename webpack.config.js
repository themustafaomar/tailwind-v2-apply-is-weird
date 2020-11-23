const path = require('path')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    rules: [{
      test: /\.css$/i,
      exclude: /node_modules/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
      ],
    }],
  },
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    index: 'index.html',
    compress: true,
    port: 9000
  }
}