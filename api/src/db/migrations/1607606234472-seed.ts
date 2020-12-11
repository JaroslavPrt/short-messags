import { MigrationInterface } from 'typeorm';
import { User } from '@db/entities/user';
import { Post } from '@db/entities/post';
import { getUserRepository, getPostRepository } from '../repositories';

const seedUsers: Array<Partial<User>> = [
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

function generateUserSeedPosts(user: User) {
  const posts: Array<Partial<Post>> = [];

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
  userRepository = getUserRepository();
  postRepository = getPostRepository();

  public async up(): Promise<void> {
    const seededUsers = await this.userRepository.save(seedUsers);
    for (const seedUser of seededUsers) {
      const seedPosts = generateUserSeedPosts(seedUser);
      await this.postRepository.save(seedPosts);
    }
  }

  public async down(): Promise<void> {}
}
