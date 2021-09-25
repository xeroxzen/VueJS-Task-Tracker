module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "https://api.jsonbin.io/b/614f97369548541c29b86451",
        ws: true,
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};
