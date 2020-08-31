import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsersModule} from './users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {config} from "./orm.config";
import { AuthModule } from './auth/auth.module';
import { BannersModule } from './banners/banners.module';
import { AboutController } from './about/about.controller';
import { AboutService } from './about/about.service';
import { AboutModule } from './about/about.module';
import { ServeStaticModule} from '@nestjs/serve-static'; // New
import { join } from 'path'; // New
import { SlideModule } from './slide/slide.module';

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
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
