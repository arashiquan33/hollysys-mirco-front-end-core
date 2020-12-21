const path = require('path');

module.exports = {
  entry: './src/lib/export.ts',
  output: {
    path: path.resolve(__dirname, 'dist/lib/'),
    filename: 'HollysMircoFrontEndFoundtion.js',
    library:"HollysMircoFrontEndFoundtion",
    libraryTarget:"umd"
  },
  module: {
    rules: [  // 添加解析规则
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        },
    ]
   },
   resolve: {   // 需要打包的文件后缀
    extensions: [".tsx", ".ts", ".js"]
  }
};