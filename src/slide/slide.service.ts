import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {I18nRepository} from "typeorm-i18n";
import {SlideEntity} from "../model/slide.entity";
import {CreateSlideDto} from "./dto/create-slide.dto";

@Injectable()
export class SlideService {
    constructor(
        @InjectRepository(SlideEntity) private readonly slide: I18nRepository<SlideEntity>,
    ){}
    public async createSlide(createSlideDto: CreateSlideDto): Promise<any> {
        return await this.slide.save(createSlideDto);
    }
}
