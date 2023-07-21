const path = require("path");
const {VueLoaderPlugin} = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.esm.js"
    }
  },
  devServer: {
    port: 8080,
    open: true,
    allowedHosts: "all"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        type: "javascript/auto",
        use: {
          loader: "url-loader",
          // 当加载的图片, 小于 limit 时, 会将图片编译成 base64 字符串形式
          // 当加载的图片, 大于 limit 时, 需要使用 file-loader 模块进行加载
          options: {
            limit: 12 * 1024,
            esModule: false,
            name: "img/[name].[hash:8].[ext]"
          },
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", {targets: "defaults"}]
            ]
          }
        }
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
  ],
};