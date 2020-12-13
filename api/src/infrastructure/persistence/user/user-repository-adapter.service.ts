import { EntityRepository, Repository } from 'typeorm';

import { UserOrmEntity } from '@infra/persistence/orm-entities/user';

@EntityRepository(UserOrmEntity)
export class UserRepositoryAdapterService extends Repository<UserOrmEntity> {}
