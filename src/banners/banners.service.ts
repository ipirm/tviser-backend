import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {BannersEntity} from "../model/banner.entity";
import {CreateBannerDTO} from "./dto/create-banner.dto";

@Injectable()
export class BannersService {
    constructor(@InjectRepository(BannersEntity) private readonly banners: Repository<BannersEntity>) {
    }

    public async getBanners() {
        return await this.banners.find();
    }

    public async remove(id: string): Promise<void> {
        await this.banners.delete(id);
    }

    public async create(createBannerDTO: CreateBannerDTO): Promise<any> {
        const banners = this.banners.save(createBannerDTO);
        return banners;
    }

    public async update(createBannerDTO: CreateBannerDTO): Promise<any> {
        return this.banners.update(createBannerDTO.id, createBannerDTO);
    }
}
