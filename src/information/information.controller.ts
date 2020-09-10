import {Controller, Get, HttpException, HttpStatus, Patch, Post, Request} from '@nestjs/common';
import {InformationService} from "./information.service";

@Controller('information')
export class InformationController {
    constructor(private informationService: InformationService) { }
    @Get()
    async getAInformation(@Request() req): Promise<any> {
        if (req.header('Content-Type')=== 'application/json'){
            return await this.informationService.getInformation();
        } else {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
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
