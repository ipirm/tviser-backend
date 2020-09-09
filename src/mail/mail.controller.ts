import {Controller, Post, Request} from '@nestjs/common';
import {MailService} from "./mail.service";

@Controller('mail')
export class MailController {
         constructor(private mailService: MailService){}
    @Post()
    async getMails(@Request() req) {
        const banners = await this.mailService.sendMail(req.body);
        return banners;
    }
}
