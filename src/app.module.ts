import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsersModule} from './users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {config} from "./orm.config";
import { AuthModule } from './auth/auth.module';
import { BannersModule } from './banners/banners.module';
import { AboutModule } from './about/about.module';
import { ServeStaticModule} from '@nestjs/serve-static';
import { join } from 'path';
import { SlideModule } from './slide/slide.module';
import { InformationModule } from './information/information.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailService } from './mail/mail.service';
import { MailController } from './mail/mail.controller';
import { MailModule } from './mail/mail.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(config),
        UsersModule,
        AuthModule,
        BannersModule,
        AboutModule,
        MailerModule.forRoot({
            transport: 'smtps://info@tviser.agency:2587889e@smtp.yandex.ru',
            defaults: {
                from:'"nest-modules" <modules@nestjs.com>',
            },
            template: {
                dir: __dirname + '/templates',
                adapter: new HandlebarsAdapter(),
                options: {
                    strict: true,
                },
            },
        }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'client'),
            exclude: ['/api*'],
        }),
        SlideModule,
        InformationModule,
        MailModule,
    ],
    controllers: [AppController, MailController],
    providers: [AppService, MailService],
})
export class AppModule {
}
