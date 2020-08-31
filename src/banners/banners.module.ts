import { Module } from '@nestjs/common';
import { BannersService } from './banners.service';
import { BannersController } from './banners.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {BannersEntity} from "../model/banner.entity";

@Module({
  imports: [TypeOrmModule.forFeature([BannersEntity])],
  providers: [BannersService],
  controllers: [BannersController],
  exports: [BannersService]
})
export class BannersModule {}
