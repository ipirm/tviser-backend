import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {


    type: 'postgres',
    host: 'ec2-3-234-85-177.compute-1.amazonaws.com',
    url: 'postgres://bgqmoifjxgcmzy:8ec3522380fa45ee727991ba5d0cfcb84891b0304eb3323a443f363d20af907e@ec2-3-234-85-177.compute-1.amazonaws.com:5432/d9ahl8ru0grqi3',
    port: 5432,
    username: 'bgqmoifjxgcmzy',
    password: '8ec3522380fa45ee727991ba5d0cfcb84891b0304eb3323a443f363d20af907e',
    database: 'd9ahl8ru0grqi3',
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
    logging: true
}