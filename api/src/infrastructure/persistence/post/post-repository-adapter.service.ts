import { EntityRepository, Repository } from 'typeorm';

import { PostsPort } from '@domains/ports/posts.port';
import { PostEntity } from '@domains/entities/post.entity';
import { PostOrmEntity } from '@infra/persistence/orm-entities/post.orm-entity';

import { PostMapper } from './post.mapper';
@EntityRepository(PostOrmEntity)
export class PostRepositoryAdapterService extends Repository<PostOrmEntity> implements PostsPort {
  async getAll(): Promise<PostEntity[]> {
    const ormPosts = await this.find();
    return ormPosts.map((p) => PostMapper.mapToDomain(p));
  }
}
