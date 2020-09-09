import {Injectable} from '@nestjs/common';

import {MailerService} from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) {
    }

    async sendMail(mailData): Promise<any> {
        await this.mailerService.sendMail({
            to: 'info@tviser.agency',
            from: 'info@tviser.agency',
            subject: 'Сообщение с сайта',
            html: `
                  <span>${mailData.name}</span><br>
                  <span>${mailData.company}</span><br><br>
                  <span>${mailData.mail}</span><br><br><br>
                  <span>${mailData.text}</span><br>
                  `,
        })
        return mailData.text
    }
}
