import { getCustomRepository, MigrationInterface, QueryRunner } from 'typeorm';

import { PostOrmEntity } from '@infra/persistence/orm-entities/post';
import { UserOrmEntity } from '@infra/persistence/orm-entities/user';
import { PostRepositoryAdapterService } from '@infra/persistence/post/post-repository-adapter.service';
import { UserRepositoryAdapterService } from '@infra/persistence/user/user-repository-adapter.service';

const seedUsers: Array<Partial<UserOrmEntity>> = [
  {
    familyName: 'jj',
    givenName: 'abrams',
    username: 'jjabrams',
  },
  {
    familyName: 'qq',
    givenName: 'harold',
    username: 'qqharold',
  },
  {
    familyName: 'zz',
    givenName: 'top',
    username: 'zztop',
  },
];

function generateUserSeedPosts(user: UserOrmEntity) {
  const posts: Array<Partial<PostOrmEntity>> = [];

  for (let index = 0; index < 10; index++) {
    posts.push({
      user,
      title: `user_${user.id}_post_${index}`,
      body:
        'Culpa consequat culpa culpa minim. Enim tempor nulla occaecat ullamco aute velit commodo exercitation cupidatat anim ea aliquip quis. Incididunt esse id do cillum ipsum nisi laboris enim consequat est. Non reprehenderit magna enim reprehenderit sunt consectetur cillum do.',
    });
  }

  return posts;
}

export class seed1607606234472 implements MigrationInterface {
  name = 'seed1607606234472';
  userRepository = getCustomRepository(UserRepositoryAdapterService);
  postRepository = getCustomRepository(PostRepositoryAdapterService);

  public async up(queryRunner: QueryRunner): Promise<void> {
    const seededUsers = await this.userRepository.save(seedUsers);
    for (const seedUser of seededUsers) {
      const seedPosts = generateUserSeedPosts(seedUser);
      await this.postRepository.save(seedPosts);
    }
  }

  public async down(): Promise<void> {}
}
