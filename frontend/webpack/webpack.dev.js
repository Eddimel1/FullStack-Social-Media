const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const Dotenv = require('dotenv-webpack');
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [
    new Dotenv({path:'./envs/.env'}),
    new ReactRefreshWebpackPlugin(),
  ],
}
