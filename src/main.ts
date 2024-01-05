import { AppModule } from '@/modules/app.module';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
// import * as cookieParser from 'cookie-parser';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.use(cookieParser(process.env.COOKIE_NAME));

  app.enableCors({
    allowedHeaders: ['Content-Type', 'Authorization'],
    origin: [process.env.REACT_APP_URL],
    methods: ['*', 'DELETE', 'PATCH'],
    credentials: true,
  });

  app.setGlobalPrefix('api');

  // await app.listen(configService.get('PORT'));
  await app.listen(process.env.PORT);
}
bootstrap();
