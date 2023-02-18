const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class dev1676748953344 {
    name = 'dev1676748953344'

    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "student_house" (
                "id" uuid NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "deletedAt" TIMESTAMP,
                "version" integer NOT NULL,
                "name" character varying(50) NOT NULL DEFAULT '',
                CONSTRAINT "PK_4dbfa07f22cd13d80db02b75a9e" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."packages_type_enum" AS ENUM('PACZKA', 'AWISO', 'LIST')
        `);
        await queryRunner.query(`
            CREATE TABLE "packages" (
                "id" uuid NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "deletedAt" TIMESTAMP,
                "version" integer NOT NULL,
                "number" numeric(10, 0) NOT NULL DEFAULT '0',
                "quantity" numeric(10, 0) NOT NULL DEFAULT '0',
                "type" "public"."packages_type_enum" NOT NULL DEFAULT 'PACZKA',
                "delivery_date" TIMESTAMP WITH TIME ZONE NOT NULL,
                "receiver_first_name" character varying(50) NOT NULL DEFAULT '',
                "receiver_last_name" character varying(50) NOT NULL DEFAULT '',
                "receiver_first_name" character varying(6) DEFAULT '',
                "recived" boolean NOT NULL DEFAULT false,
                "recived_date" TIMESTAMP WITH TIME ZONE NOT NULL,
                "studentHouseId" uuid,
                CONSTRAINT "PK_020801f620e21f943ead9311c98" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "packages" DROP COLUMN "receiver_first_name"
        `);
        await queryRunner.query(`
            ALTER TABLE "packages"
            ADD "receiver_first_name" character varying(6) DEFAULT ''
        `);
        await queryRunner.query(`
            ALTER TABLE "packages"
            ADD CONSTRAINT "FK_9d10bf8ca0937b5e38b6a273981" FOREIGN KEY ("studentHouseId") REFERENCES "student_house"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "packages" DROP CONSTRAINT "FK_9d10bf8ca0937b5e38b6a273981"
        `);
        await queryRunner.query(`
            ALTER TABLE "packages" DROP COLUMN "receiver_first_name"
        `);
        await queryRunner.query(`
            ALTER TABLE "packages"
            ADD "receiver_first_name" character varying(50) NOT NULL DEFAULT ''
        `);
        await queryRunner.query(`
            DROP TABLE "packages"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."packages_type_enum"
        `);
        await queryRunner.query(`
            DROP TABLE "student_house"
        `);
    }
}
