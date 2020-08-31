import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {

    type: "postgres",
    host: "localhost",
    port: 5432,
    username: 'postgres',
    password: "root",
    database: "tviser",
    entities: ["dist/**/*.entity.js"],
    synchronize: true,
    logging: true
}