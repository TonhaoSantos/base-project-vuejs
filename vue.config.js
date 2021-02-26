const path = require('path')

module.exports = {
  devServer: {
    proxy: 'http://localhost:5000/'
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src', 'components'),
        '@css': path.resolve(__dirname, 'src', '_assets', 'css'),
        '@fonts': path.resolve(__dirname, 'src', 'fonts'),
        '@helpers': path.resolve(__dirname, 'src', 'helpers'),
        '@i18n': path.resolve(__dirname, 'src', 'i18n'),
        '@icons': path.resolve(__dirname, 'src', 'assets', 'icons'),
        '@img': path.resolve(__dirname, 'src', 'assets', 'img'),
        '@js': path.resolve(__dirname, 'src', 'assets', 'js'),
        '@router': path.resolve(__dirname, 'src', 'router'),
        '@utils': path.resolve(__dirname, 'src', 'utils'),
        '@views': path.resolve(__dirname, 'src', 'views'),
        '@enums': path.resolve(__dirname, 'src', 'enums')
      }
    }
  },
  pwa: {
    name: 'My App',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
      exclude: [
        /\.map$/,
        /manifest\.json$/,
        /_redirects$/
      ]
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/scss/main.scss";'
      }
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'pt-BR',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
