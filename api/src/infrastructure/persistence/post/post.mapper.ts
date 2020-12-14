import { PostEntity } from '@domains/entities/post.entity';
import { PostOrmEntity } from '@infra/persistence/orm-entities/post.orm-entity';

export class PostMapper {
  static mapToDomain(e: PostOrmEntity): PostEntity {
    return new PostEntity(e.id, e.title, e.body, e.createdAt, e.updatedAt);
  }

  static mapToOrmEntity(p: PostEntity): PostOrmEntity {
    const ormEntity = new PostOrmEntity();

    ormEntity.title = p.title;
    ormEntity.body = p.body;

    return ormEntity;
  }
}
