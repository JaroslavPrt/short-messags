import { MigrationInterface, QueryRunner } from 'typeorm';

export class user1605625453961 implements MigrationInterface {
  name = 'user1605625453961';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "user" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "familyName" character varying(255) NOT NULL,
                "givenName" character varying(255) NOT NULL,
                "username" character varying(255) NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"),
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "user"
        `);
  }
}
