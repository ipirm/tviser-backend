import { Module } from '@nestjs/common';
import { InformationController } from './information.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {InformationService} from "./information.service";
import {InformationEntity} from "../model/information.entity";

@Module({
    imports: [TypeOrmModule.forFeature([InformationEntity])],
    providers: [InformationService],
    controllers: [InformationController],
    exports: [InformationService]
})
export class InformationModule {}
