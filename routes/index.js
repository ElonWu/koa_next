const Router = require('@koa/router');
const { getPosts } = require('../controllers');

const setupRouter = (server) => {
  // 加载 koa 路由
  const router = new Router({
    prefix: '/api',
    methods: ['GET', 'POST', 'PUT', 'OPTIONS', 'PATCH', 'DELETE'],
  });

  router.get('/posts', getPosts);

  server.use(router.routes()).use(router.allowedMethods());
};

module.exports = setupRouter;
