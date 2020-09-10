import {Controller, Get, HttpException, HttpStatus, Post, Request} from '@nestjs/common';
import {BannersService} from "./banners.service";

@Controller('banners')
export class BannersController {
    constructor(private bannersService: BannersService) { }
    @Get()
    async getBanners(@Request() req) {
        if (req.header('Content-Type')=== 'application/json'){
            const banners = await this.bannersService.getBanners();
            return banners;
        } else {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
    }
    @Post('create')
    async createBanner(@Request() req) {
        return this.bannersService.create(req.body);
    }

    @Get('update')
    async updateBanner(@Request()  req) {
        const banner = await this.bannersService.update(req.body);
        return banner;
    }
}
