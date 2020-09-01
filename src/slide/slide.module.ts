import { Module } from '@nestjs/common';
import { SlideService } from './slide.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {SlideEntity} from "../model/slide.entity";
import { SlideController } from './slide.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SlideEntity])],
  providers: [SlideService],
  exports: [SlideService],
  controllers: [SlideController]
})
export class SlideModule {}
