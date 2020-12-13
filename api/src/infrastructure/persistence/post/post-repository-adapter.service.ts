import { EntityRepository, Repository } from 'typeorm';

import { PostOrmEntity } from '@infra/persistence/orm-entities/post';

@EntityRepository(PostOrmEntity)
export class PostRepositoryAdapterService extends Repository<PostOrmEntity> {}
