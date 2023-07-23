const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口
  entry: './src/index.js',
  // 输出
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  resolve: {
    modules: [
      path.resolve(__dirname, ''),
      path.resolve(__dirname, 'node_modules')
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    })
  ]
}