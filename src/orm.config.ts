import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    url: process.env.POSTGRES_URL,
    port: 5432,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
    logging: true
}