import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1704907518762 implements MigrationInterface {
    name = 'Migrations1704907518762'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "menu_item" ALTER COLUMN "price" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "menu_item" ALTER COLUMN "price" DROP NOT NULL`);
    }

}
