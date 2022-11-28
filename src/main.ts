require('dotenv').config();
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app/app.module';
import { sqliteDataSource } from './infra/database/config/sqlite.connection';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  sqliteDataSource.initialize()
    .then(() => {
        Logger.log('[DataSource] Connected to SQLite database', );
    })
    .catch((error) => Logger.error(error))
}
bootstrap();
