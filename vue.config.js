const path  = require('path')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "assets/styles/index.scss";`
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'src': path.resolve(__dirname, 'src/'),
        'assets': path.resolve(__dirname, 'src/assets'),
        'components': path.resolve(__dirname, 'src/components/'),
      }
    }
  }
}