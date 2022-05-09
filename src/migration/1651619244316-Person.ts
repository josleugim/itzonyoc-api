import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Person1651619244316 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'persons',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'first_name',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'last_name',
            type: 'varchar(255)',
            isNullable: true,
          },
          {
            name: 'rfc',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'curp',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'birthday',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'registration_date',
            type: 'timestamp',
            isNullable: true,
            default: 'now()',
          },
          {
            name: 'status_id',
            type: 'tinyint(4)',
            isNullable: false,
            default: true,
          },
          {
            name: 'gender_id',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'type_id',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'avatar',
            type: 'varchar(2048)',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('persons');
  }
}
