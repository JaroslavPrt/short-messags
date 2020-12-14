import Router from '@koa/router';

import { logger } from '@logger';
import { PostsService } from '@domains/services/posts.service';
import { getPostRepositoryAdapterService } from '@infra/persistence/repositories';

export const postsRouter = new Router();

const log = logger(__filename);

postsRouter.get('/posts', async (ctx) => {
  try {
    const adapter = getPostRepositoryAdapterService();
    const service = new PostsService(adapter);

    ctx.status = 200;
    ctx.body = await service.getAll();
  } catch (error) {
    log.error('error on getting posts');
  }
});
