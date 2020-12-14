import Router from '@koa/router';

import { commonRouter } from './common.routes';
import { postsRouter } from './posts.routes';

export const apiRouter = new Router();

apiRouter.use(commonRouter.routes());
apiRouter.use(postsRouter.routes());
