import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {I18nRepository} from "typeorm-i18n";
import {SlideEntity} from "../model/slide.entity";
import {CreateSlideDto} from "./dto/create-slide.dto";

@Injectable()
export class SlideService {
    constructor(
        @InjectRepository(SlideEntity) private readonly slide: I18nRepository<SlideEntity>,
    ) {
    }

    public async updateSlide(createSlideDto: CreateSlideDto): Promise<any> {
        const id = createSlideDto.id;
        return await this.slide.save({...createSlideDto, id});
    }

    public async removeSlide(id: string): Promise<any> {
        await this.slide.delete(id);
        return await this.slide.find();
    }
}
