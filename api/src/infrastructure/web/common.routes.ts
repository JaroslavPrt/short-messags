import Router from '@koa/router';

export const commonRouter = new Router();

commonRouter.get(['/', '/ping', '/health'], (ctx) => {
  ctx.status = 200;
});
