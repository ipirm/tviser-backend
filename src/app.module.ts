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

@Module({
    imports: [
        TypeOrmModule.forRoot(config),
        UsersModule,
        AuthModule,
        BannersModule,
        AboutModule,
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'client'),
            exclude: ['/api*'],
        }),
        SlideModule,
        InformationModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
