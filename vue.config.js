/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        '@services': resolve('src/api/Services')
      }
    }
    // plugins: [
    //   new IgnorePlugin({
    //     resourceRegExp: /^\.unit\.ts$/,
    //     contextRegExp: /.*/
    //   })
    //   //,new BundleAnalyzerPlugin()
    // ]
  },
  chainWebpack: (config) => {
    const rule = config.module.rule('ts');

    rule.uses.delete('thread-loader');
    rule
      .use('ts-loader')
      .loader('ts-loader')
      .tap((options) => {
        options.transpileOnly = false;
        options.happyPackMode = false;

        return options;
      });
  },
  transpileDependencies: ['vuetify'],
  pwa: {
    name: 'SkyCourt',
    themeColor: '#4c97d2'
  },
  productionSourceMap: false,
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  devServer: {
    https: false,
    port: 8080,
    open: true,
    proxy: {
      // proxy all requests starting with /api to .net server
      '/api': {
        target: 'http://localhost:50447/'
      },
      '/signalr/negotiate': {
        target: 'http://localhost:50447'
      },
      '/signalr/start': {
        target: 'http://localhost:50447'
      },
      '/signalr': {
        target: 'ws://localhost:50447',
        ws: true
      }
    }
  }
};
