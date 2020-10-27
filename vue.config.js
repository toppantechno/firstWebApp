module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: './',
  css: {
    loaderOptions: {
      scss: {
        data: '@import "./src/styles/common/common.scss";'
      }
    }
  }
}