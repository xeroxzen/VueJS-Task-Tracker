module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:5000",
        ws: true,
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};
