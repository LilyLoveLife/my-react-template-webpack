
const path = require('path');
// const pxtorem = require("postcss-pxtorem");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// const CompressionWebpackPlugin = require('compression-webpack-plugin');
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

module.exports = {
  reactScriptsVersion: "react-scripts",
  eslint: {
    enable: false
  },
  style: {
    postcss: {
      mode: "extends",
      loaderOptions: {
        // postcssOptions: {
        //   ident: "postcss",
        //   plugins: [
        //     // 自适应
        //     // [
        //     //   "postcss-pxtorem",
        //     //   {
        //     //     rootValue: 16,
        //     //     propList: [
        //     //       "*",
        //     //       "!min-width",
        //     //       "!min-height",
        //     //       "!max-width",
        //     //       "!max-height",
        //     //       "font-size"
        //     //     ],
        //     //     exclude: /node_modules/i
        //     //   },
        //     // ],
        //   ],
        // },
      },
    },
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      if (env === "development") {
        // 打包成分分析
        // webpackConfig.plugins = webpackConfig.plugins.concat(
        //   new BundleAnalyzerPlugin({
        //     analyzerMode: "server",
        //     analyzerHost: "127.0.0.1",
        //     analyzerPort: 8888,
        //     openAnalyzer: true, // 构建完打开浏览器
        //     reportFilename: path.resolve(__dirname, `analyzer/index.html`),
        //   }),
        // );
        // 打包速度分析
        // webpackConfig.plugins = webpackConfig.plugins.concat(
        //   new SpeedMeasurePlugin(),
        // );
      }

      if (env === "product") {
        // webpackConfig.resolve.alias.moment = 'dayjs'
        // 压缩
        // webpackConfig.plugins.push(new CompressionWebpackPlugin({
        //   filename: '[path][name].gz',
        //   test: /\.(js|css)$/i
        // }))
      }
      return webpackConfig;
    },
    devServer: {
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
    },
  },
};
