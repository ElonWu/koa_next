const next = require('next');
const Koa = require('koa');
const setupRouter = require('./routes');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();

  setupRouter(server);

  // 加载 next
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.listen(3000, () => console.log(`Server is on Port 3000`));
});
