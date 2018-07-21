module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': process.cwd(),
      },
    },
  },
  chainWebpack (config) {
    // config.plugins.delete('prefetch')
  },
}
