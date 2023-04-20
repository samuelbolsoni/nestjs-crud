import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDemonhoTable1681909776294 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'demonho',
        columns: [
          {
            name: 'id',
            type: 'varchar',
          },
          {
            name: 'name',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('demonho');
  }
}
