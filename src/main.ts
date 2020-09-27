import {NestFactory} from '@nestjs/core';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import {AppModule} from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    const options = new DocumentBuilder()
        .setTitle('Login API')
        .setDescription('The login API description')
        .setVersion('1.0')
        .addTag('Login')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

    await app.enableCors({
        origin: ['http://localhost:8080','https://www.tviser.agency','http://localhost:3000','https://tviser.agency'],
        credentials: true
        });
    await app.listen(process.env.PORT || 3000);
}

bootstrap();