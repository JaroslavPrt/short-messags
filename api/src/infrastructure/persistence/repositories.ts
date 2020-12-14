import { getCustomRepository } from 'typeorm';

import { PostRepositoryAdapterService } from './post/post-repository-adapter.service';

export const getPostRepositoryAdapterService = () => getCustomRepository(PostRepositoryAdapterService);
