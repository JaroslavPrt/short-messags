import { getCustomRepository } from 'typeorm';
import { UserRepository } from './user.repository';
import { PostRepository } from './post.repository';

export { UserRepository, PostRepository };

export const getUserRepository = () => getCustomRepository(UserRepository);
export const getPostRepository = () => getCustomRepository(PostRepository);
