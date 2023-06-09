import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Client Contact Book App')
    .setDescription(
      "App that will help you organize your clients' contact info",
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const documentation = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('documentation', app, documentation);

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true }),
    new ValidationPipe({
      transform: true,
      transformOptions: { groups: ['transform'] },
    }),
  );
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
