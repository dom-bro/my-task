module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': process.cwd(),
      },
    },
  },
  devServer: {
    proxy: 'http://localhost:8088',
  },
  chainWebpack (config) {
    // config.plugins.delete('prefetch')
  },
}
