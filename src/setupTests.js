import { createProxyMiddleware } from 'http-proxy-middleware';

export default function(app) {
  app.use(createProxyMiddleware('/proxypath', { target: '<target path>' }));
};