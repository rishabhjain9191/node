module.exports = {
  entry: './client.js',
  output: {
    filename: 'bundle.js',
    path: '/Users/rishabh/Documents/node/package_show/public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ]
  }
}
