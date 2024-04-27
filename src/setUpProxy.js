import createProxyMiddleware from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    "/v1",
    createProxyMiddleware({
      target: "https://quill-wakeful-headline.glitch.me", // API 서버 주소
      changeOrigin: true,
    })
  );
};
