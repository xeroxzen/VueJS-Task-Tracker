module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "https://genuine-fake-server-app.herokuapp.com",
        ws: true,
        logLevel: "production",
        changeOrigin: true,
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};
