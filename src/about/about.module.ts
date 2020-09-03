import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AboutEntity} from "../model/about.entity";
import {AboutService} from "./about.service";
import {AboutController} from "./about.controller";
import {SlideEntity} from "../model/slide.entity";

@Module({
    imports: [TypeOrmModule.forFeature([AboutEntity,SlideEntity])],
    providers: [AboutService],
    controllers: [AboutController],
    exports: [AboutService]
})
export class AboutModule {

}
