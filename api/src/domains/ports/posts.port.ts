import { PostEntity } from '../entities/post.entity';

export interface PostsPort {
  getAll(): Promise<Array<PostEntity>>;
}
