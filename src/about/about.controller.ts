import {Controller, Get, Post, Request, Delete, Param, Patch, Query} from '@nestjs/common';
import {AboutService} from "./about.service";

@Controller('pages')
export class AboutController {
    constructor(private aboutService: AboutService) { }

    @Get()
    async getAbouts(): Promise<any> {
        return await this.aboutService.getAbouts();
    }

    @Post('create')
    async createAbout(@Request() req) {
        return this.aboutService.createAbout(req.body);
    }

    @Get(':id')
    async getUser(@Param('id') id) {
        return  await this.aboutService.findOne(id);
    }

    @Delete('delete/:id')
    async deleteAbout(@Param('id') id: string) {
        return this.aboutService.removeAbout(id);
    }

    @Patch('update')
    async updateAbout(@Request() req) {
        return this.aboutService.updateAbout(req.body);
    }

    @Post('create/slide')
    async createSlide(@Request() req) {
        return this.aboutService.createSlide(req.body);
    }

    @Get('slides/data')
    async getSlide(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10
    ): Promise<any> {
        limit = limit > 100 ? 100 : limit;
        return this.aboutService.getSlides({
            page,
            limit
        });
    }
    @Get(':id/slide')
    async getSlides(@Param('id') id) {
        return  await this.aboutService.getSlide(id);
    }
}
