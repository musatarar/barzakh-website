import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1704404855220 implements MigrationInterface {
    name = 'Migrations1704404855220'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "menu_item" DROP COLUMN "type"`);
        await queryRunner.query(`CREATE TYPE "public"."menu_item_type_enum" AS ENUM('drink', 'cocktail', 'food')`);
        await queryRunner.query(`ALTER TABLE "menu_item" ADD "type" "public"."menu_item_type_enum" NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "menu_item" DROP COLUMN "type"`);
        await queryRunner.query(`DROP TYPE "public"."menu_item_type_enum"`);
        await queryRunner.query(`ALTER TABLE "menu_item" ADD "type" character varying NOT NULL`);
    }

}
