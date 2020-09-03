import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {I18nRepository} from "typeorm-i18n";
import {InformationEntity} from "../model/information.entity";
import {CreateInformationDto} from "./dto/create-information.dto";

@Injectable()
export class InformationService {
    constructor(@InjectRepository(InformationEntity) private readonly information: I18nRepository<InformationEntity>) {
    }


    async getInformation() {
        return await this.information.findOne(1)
    }

    async createInformaton(createInformationDto: CreateInformationDto) {
        return await this.information.save(createInformationDto)
    }

    async updateInformaton(createInformationDto: CreateInformationDto) {
        const id = createInformationDto.id;
        return await this.information.save({...createInformationDto, id});
    }


}
