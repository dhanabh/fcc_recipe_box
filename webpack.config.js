module.exports = {
  entry: './src/components/start.jsx',

  output: {
    path: "./",
    filename: 'main.js',
    publicPath: ''
  },

  module: {
    loaders: [
      { test: /\.jsx?$/,
       exclude: /node_modules/,
       loader: 'babel',
    query:{
       presets:['es2015','react']

      }
      }
    ]
  }
}
