import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  //білдер - це патерн який дозволюя поступово додавати до обєкта поля
  const config = new DocumentBuilder()
    .setTitle('Nest-Auth-Role-PG-Dokker')
    .setDescription('Documentation REST API')
    .setVersion('1.0.0')
    .addTag('Andy_Rud')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

start();
