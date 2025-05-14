import { MigrationInterface, QueryRunner } from "typeorm";

export class User1747210994803 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE user (
              id INT AUTO_INCREMENT PRIMARY KEY,
              firstName VARCHAR(255) NOT NULL,
              lastName VARCHAR(255) NOT NULL,
              email VARCHAR(255) NOT NULL UNIQUE,
              password VARCHAR(255) NOT NULL,
              role INT NOT NULL,
              isVerified BOOLEAN NOT NULL DEFAULT false,
              verificationCode VARCHAR(255),
              createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS users;`);
    }

}
