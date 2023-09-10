import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1694327753768 implements MigrationInterface {
    name = 'Init1694327753768'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "recommended" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "image" character varying NOT NULL, "city_id" uuid, CONSTRAINT "REL_30fe5980070d652871f948742d" UNIQUE ("city_id"), CONSTRAINT "PK_cc78ae7d0fc37d0374f41652a13" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "country" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_bf6e37c231c4f4ea56dcd887269" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "states" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "icon" character varying NOT NULL, "countryId" uuid, CONSTRAINT "UQ_839a6c8bd753c3c03e2ef4f141a" UNIQUE ("icon"), CONSTRAINT "PK_09ab30ca0975c02656483265f4f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cities" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "stateId" uuid, CONSTRAINT "PK_4762ffb6e5d198cfec5606bc11e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "image" character varying NOT NULL, CONSTRAINT "UQ_85fbd016e0cef28827c19b1ae23" UNIQUE ("image"), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "images-places" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "image" character varying NOT NULL, "placeId" uuid, CONSTRAINT "PK_d11da7fad08578f943e4e935cd1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "places" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "address" character varying NOT NULL, "latitude" integer NOT NULL, "longitude" integer NOT NULL, "cityId" uuid, "categoryId" uuid, CONSTRAINT "PK_1afab86e226b4c3bc9a74465c12" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "place_accessibility" ("id" SERIAL NOT NULL, "placeId" uuid, "accessibilityId" uuid, CONSTRAINT "PK_1fbe0eeb764ae63fb1cc251e3ed" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "accessibility" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "icon" character varying NOT NULL, CONSTRAINT "UQ_8516dfd6c11950998a1974973d0" UNIQUE ("icon"), CONSTRAINT "PK_9729339e162bc7ec98a8815758c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_accessibility" ("id" SERIAL NOT NULL, "userId" uuid, "accessibilityId" uuid, CONSTRAINT "PK_94de8000e8193dafebba036c955" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstname" character varying NOT NULL, "lastname" character varying NOT NULL, "email" character varying NOT NULL, "image" character varying, "password" character varying NOT NULL, "countryId" uuid, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_479f4d9be96da3b90c54f85a379" UNIQUE ("image"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "rate" integer NOT NULL, "comment" character varying NOT NULL, "placeId" uuid, "user_id" uuid, CONSTRAINT "REL_4c675567d2a58f0b07cef09c13" UNIQUE ("user_id"), CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "recommended" ADD CONSTRAINT "FK_30fe5980070d652871f948742d3" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "states" ADD CONSTRAINT "FK_76ac7edf8f44e80dff569db7321" FOREIGN KEY ("countryId") REFERENCES "country"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cities" ADD CONSTRAINT "FK_ded8a17cd090922d5bac8a2361f" FOREIGN KEY ("stateId") REFERENCES "states"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "images-places" ADD CONSTRAINT "FK_2b44e0f12467c09452c9dd42898" FOREIGN KEY ("placeId") REFERENCES "places"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "places" ADD CONSTRAINT "FK_f548129f350a5ed88401d583c8b" FOREIGN KEY ("cityId") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "places" ADD CONSTRAINT "FK_0b6ec06d951f681973b76fdb573" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "place_accessibility" ADD CONSTRAINT "FK_ad96cc0c663a752ca2080f9a07b" FOREIGN KEY ("placeId") REFERENCES "places"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "place_accessibility" ADD CONSTRAINT "FK_bcc2d50f6088dacb256453fa5cf" FOREIGN KEY ("accessibilityId") REFERENCES "accessibility"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_accessibility" ADD CONSTRAINT "FK_a503b9fb4beb2eb6fbd6ae91472" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_accessibility" ADD CONSTRAINT "FK_806c9bc118b79ce9ade6071bfd9" FOREIGN KEY ("accessibilityId") REFERENCES "accessibility"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_cc0dc7234854a65964f1a268275" FOREIGN KEY ("countryId") REFERENCES "country"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_b372e6b47d9bde525b742a4eaef" FOREIGN KEY ("placeId") REFERENCES "places"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_4c675567d2a58f0b07cef09c13d" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_4c675567d2a58f0b07cef09c13d"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_b372e6b47d9bde525b742a4eaef"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_cc0dc7234854a65964f1a268275"`);
        await queryRunner.query(`ALTER TABLE "user_accessibility" DROP CONSTRAINT "FK_806c9bc118b79ce9ade6071bfd9"`);
        await queryRunner.query(`ALTER TABLE "user_accessibility" DROP CONSTRAINT "FK_a503b9fb4beb2eb6fbd6ae91472"`);
        await queryRunner.query(`ALTER TABLE "place_accessibility" DROP CONSTRAINT "FK_bcc2d50f6088dacb256453fa5cf"`);
        await queryRunner.query(`ALTER TABLE "place_accessibility" DROP CONSTRAINT "FK_ad96cc0c663a752ca2080f9a07b"`);
        await queryRunner.query(`ALTER TABLE "places" DROP CONSTRAINT "FK_0b6ec06d951f681973b76fdb573"`);
        await queryRunner.query(`ALTER TABLE "places" DROP CONSTRAINT "FK_f548129f350a5ed88401d583c8b"`);
        await queryRunner.query(`ALTER TABLE "images-places" DROP CONSTRAINT "FK_2b44e0f12467c09452c9dd42898"`);
        await queryRunner.query(`ALTER TABLE "cities" DROP CONSTRAINT "FK_ded8a17cd090922d5bac8a2361f"`);
        await queryRunner.query(`ALTER TABLE "states" DROP CONSTRAINT "FK_76ac7edf8f44e80dff569db7321"`);
        await queryRunner.query(`ALTER TABLE "recommended" DROP CONSTRAINT "FK_30fe5980070d652871f948742d3"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "user_accessibility"`);
        await queryRunner.query(`DROP TABLE "accessibility"`);
        await queryRunner.query(`DROP TABLE "place_accessibility"`);
        await queryRunner.query(`DROP TABLE "places"`);
        await queryRunner.query(`DROP TABLE "images-places"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "cities"`);
        await queryRunner.query(`DROP TABLE "states"`);
        await queryRunner.query(`DROP TABLE "country"`);
        await queryRunner.query(`DROP TABLE "recommended"`);
    }

}
