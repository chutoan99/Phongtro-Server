import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const PORT = process.env.PORT || 8000;
  await app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}
bootstrap();
