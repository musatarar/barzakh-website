import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1704907309101 implements MigrationInterface {
    name = 'Migrations1704907309101'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "menu_item" ADD "price" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "menu_item" DROP COLUMN "price"`);
    }

}
