import '../../../bootstrap';

import { MigrationInterface, QueryRunner } from 'typeorm';

import { PostOrmEntity } from '@infra/persistence/orm-entities/post.orm-entity';
import { UserOrmEntity } from '@infra/persistence/orm-entities/user.orm-entity';

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

export class seed1607901286301 implements MigrationInterface {
  name = 'seed1607901286301';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const { raw } = await queryRunner.manager.createQueryBuilder().insert().into('users').values(seedUsers).execute();

    let seedPosts: Partial<PostOrmEntity>[] = [];
    for (const r of raw) {
      seedPosts = seedPosts.concat(generateUserSeedPosts(r));
    }

    await queryRunner.manager.createQueryBuilder().insert().into('posts').values(seedPosts).execute();
  }

  public async down(): Promise<void> {}
}
