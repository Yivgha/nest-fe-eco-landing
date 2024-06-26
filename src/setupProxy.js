const { createProxyMiddleware } = require("http-proxy-middleware");
const BASE_URL = process.env.REACT_APP_BASE_URL;
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: `${BASE_URL}`,
      changeOrigin: true,
    })
  );
};

