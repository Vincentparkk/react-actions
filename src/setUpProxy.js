import createProxyMiddleware from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    "/v1",
    createProxyMiddleware({
      target: "https://testdata1.vercel.app", // API 서버 주소
      changeOrigin: true,
    })
  );
};
