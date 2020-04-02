const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = f => path.join(__dirname, f)

module.exports = {
  entry: resolve('main.js'),
  output: {
    path: resolve('dist'),
    filename: 'bundle-[hash].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 8056,
    contentBase: './public', 
    open: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('index.html') 
    })
  ]
}
