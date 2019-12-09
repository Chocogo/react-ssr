// 服务端入口打包
const path = require('path')
// 规避node层面的影响
const nodeExternals = require('webpack-node-externals')
module.exports = {
  entry: './server/index.js',
  target: 'node',
  mode: 'development',
  externals: [nodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  // 配置babel  -> 支持jsx,最新语法
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', ['@babel/preset-env']]
        }
      }
    ]
  }
}