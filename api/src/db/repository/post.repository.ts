import { EntityRepository, Repository } from 'typeorm';
import { Post } from '../entity/post';

@EntityRepository(Post)
export class UserRepository extends Repository<Post> {}
