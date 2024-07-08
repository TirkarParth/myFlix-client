const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        "/login", 
        createProxyMiddleware({
       target: "https://radiant-lake-01596-6878ff7c62df.herokuapp.com/",
       changeOrigin: true, 
     })
   );
};