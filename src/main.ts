import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors();
  
  const config = new DocumentBuilder()
  .addBearerAuth()
  .setTitle('Nah sólo una prueba')
  .setDescription('Sólo es una prueba no hay ciencia')
  .setVersion('1.0')
  //.addTag('cats')
  .build();
  
  const document=SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,document);

  await app.listen(3000);
}
bootstrap();
