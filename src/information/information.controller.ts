import {Controller, Get, Patch, Post, Request} from '@nestjs/common';
import {InformationService} from "./information.service";

@Controller('information')
export class InformationController {
    constructor(private informationService: InformationService) { }
    @Get()
    async getAInformation(): Promise<any> {
        return await this.informationService.getInformation();
    }
    @Post('create')
    async createAbout(@Request() req) {
        return this.informationService.createInformaton(req.body);
    }
    @Patch('update')
    async updateAbout(@Request() req) {
        return this.informationService.updateInformaton(req.body);
    }
}
