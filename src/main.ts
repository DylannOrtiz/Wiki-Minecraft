import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  const allowedOrigins = (
    process.env.CORS_ORIGIN ??
    'http://localhost:3001,http://localhost:3000,https://minecrak-wiki-frontend.vercel.app'
  )
    .split(',')
    .map((origin) => origin.trim())
    .filter((origin) => origin !== '');
  app.enableCors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  });
  app.getHttpAdapter().getInstance().set('json spaces', 2);
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();