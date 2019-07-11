/**
 * 生产阶段的webpack配置文件
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  entry: "./src/index.js", // 入口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // 开发阶段不需要配置output，只有在生产阶段才需要配置
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,// 排除第三方包
        use: {
          loader: "babel-loader",
          // options: { // 可以和 .babelrc 二选一
          //   presets: ["@babel/preset-react"]
          // }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },
  plugins: [
    //将来生成开发阶段和生产阶段的index.html，以public/index.html为模板
    new HtmlWebpackPlugin({template: 'public/index.html'})
  ],
  mode:"production" ,
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  }
}
