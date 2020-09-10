import {Controller, Get, Post, Request, Delete, Param, Patch, Query, HttpException, HttpStatus} from '@nestjs/common';
import {AboutService} from "./about.service";

@Controller('pages')
export class AboutController {
    constructor(private aboutService: AboutService) {
    }

    @Get()
    async getAbouts(@Request() req): Promise<any> {
        if (req.header('Content-Type')=== 'application/json'){
            return await this.aboutService.getAbouts();
        } else {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
    }

    @Post('create')
    async createAbout(@Request() req) {
        return this.aboutService.createAbout(req.body);
    }

    @Get(':id')
    async getUser(@Request() req, @Param('id') id) {
        if (req.header('Content-Type')=== 'application/json'){
            return await this.aboutService.findOne(id);
        } else {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
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
        @Request() req,
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10
    ): Promise<any> {
        if (req.header('Content-Type')=== 'application/json'){
            limit = limit > 100 ? 100 : limit;
            return this.aboutService.getSlides({
                page,
                limit
            });
        } else {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
    }

    @Get(':id/slide')
    async getSlides(@Request() req, @Param('id') id) {
        if (req.header('Content-Type')=== 'application/json'){
            return await this.aboutService.getSlide(id);
        } else {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
    }
}
