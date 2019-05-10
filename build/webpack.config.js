const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: path.join(__dirname, './../', 'src/index.tsx'),
  },
  output: {
    path: path.join(__dirname, './../','dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {

            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'build/tpl/index.html'
    })
  ],

  resolve: {
    extensions: ['.ts', '.tsx','.js','.jsx']
  }
}