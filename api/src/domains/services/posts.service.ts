import { logger } from '@logger';
import { PostsPort } from '../ports/posts.port';
import { PostEntity } from '../entities/post.entity';

export class PostsService {
  constructor(private readonly _postsPort: PostsPort, private readonly log = logger(__filename)) {}

  async getAll(): Promise<Array<PostEntity>> {
    try {
      const posts = await this._postsPort.getAll();
      this.log.trace(`got posts: ${posts.length}`);
      return posts;
    } catch (error) {
      this.log.error(error);
      throw error;
    }
  }
}
