import createProxyMiddleware from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    "/v1",
    createProxyMiddleware({
      target: "http://localhost:5174", // API 서버 주소
      changeOrigin: true,
    })
  );
};
