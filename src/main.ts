require('dotenv').config();
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app/app.module';
import { appDataSource } from './infra/database/config/database.providers';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  appDataSource.initialize()
    .then(() => {
        Logger.log('[DataSource] Connected to SQLite database', );
    })
    .catch((error) => Logger.error(error))
}
bootstrap();
