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

    public async getAbouts() {
        return await this.about.createQueryBuilder("about")
            .leftJoinAndSelect("about.slides", "slide")
            .orderBy("slide.id", "ASC")
            .getMany();
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
        return await this.about.createQueryBuilder("about")
            .leftJoinAndSelect("about.slides", "slide")
            .where("about.id = :id", { id: id })
            .orderBy("slide.id", "ASC")
            .getMany();
    }

    public async createSlide(createSlideDto: CreateSlideDto): Promise<any> {
        await this.slide.save(createSlideDto);
        return this.slide.find()
    }


    public async getSlides({page, limit}) {
        const queryBuilder = this.slide.createQueryBuilder('c')
            .orderBy("id", "ASC");
        return paginate<SlideEntity>(queryBuilder, {page, limit});
    }

    public async getSlide(id) {
        return await this.slide.findOne(id);
    }

    public async updateSlide(createSlideDto: CreateSlideDto): Promise<any> {
        const id = createSlideDto.id;
        return await this.about.save({...createSlideDto, id});
    }
}
