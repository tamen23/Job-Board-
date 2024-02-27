
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api', // Replace with the path to your Symfony API endpoints
        createProxyMiddleware({
            target: 'http://localhost:8000', // Replace with your Symfony backend URL
            changeOrigin: true,
        })
    );
};
