import {Controller, Delete, Param, Patch, Request} from '@nestjs/common';
import {SlideService} from "./slide.service";


@Controller('slides')
export class SlideController {
    constructor(private slideService: SlideService) { }

    @Patch('/update')
    async updateSlide(@Request() req) {
        return this.slideService.updateSlide(req.body);
    }

    @Delete('delete/:id')
    async deleteAbout(@Param('id') id: string) {
        return this.slideService.removeSlide(id);
    }
}
