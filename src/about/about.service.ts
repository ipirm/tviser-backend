import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {AboutEntity} from "../model/about.entity";
import {I18nRepository} from "typeorm-i18n";
import {CreateAboutDto} from "./dto/create-about.dto";
import {paginate} from "nestjs-typeorm-paginate";
import {SlideEntity} from "../model/slide.entity";
import {CreateSlideDto} from "../slide/dto/create-slide.dto";

@Injectable()
export class AboutService {

    constructor(
        @InjectRepository(AboutEntity) private readonly about: I18nRepository<AboutEntity>,
        @InjectRepository(SlideEntity) private readonly slide: I18nRepository<SlideEntity>,
    ) {
    }

    public async getAbout({page, limit}) {
        const queryBuilder = this.about.createQueryBuilder('c');
        return paginate<AboutEntity>(queryBuilder, {page, limit});
    }

    public async createAbout(createAboutDto: CreateAboutDto): Promise<any> {
        return await this.about.save(createAboutDto);
    }

    public async removeAbout(id: string): Promise<any> {
        await this.about.delete(id);
        return await this.about.find();
    }

    public async updateAbout(createAboutDto: CreateAboutDto): Promise<any> {
        const id = createAboutDto.id;
        return await this.about.save({...createAboutDto, id});
    }

    public async findOne(id: string): Promise<any> {
        return this.about.findOne(id);
    }

    public async createSlide(createSlideDto: CreateSlideDto): Promise<any> {
         const slide = new CreateSlideDto();
        await this.slide.save(createSlideDto)
        // about.slides = []
      const id = createSlideDto.aboutId;
        const newPost =  this.slide.create(createSlideDto);
        await this.slide.save(newPost);
         return createSlideDto.aboutId
    }


    public async getSlides({page, limit}) {
        const queryBuilder = this.slide.createQueryBuilder('c');
        return paginate<SlideEntity>(queryBuilder, {page, limit});
    }

}
