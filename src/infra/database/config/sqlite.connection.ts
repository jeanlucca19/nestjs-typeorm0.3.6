import { DataSource } from "typeorm"

export const sqliteDataSource = new DataSource ({
  type: 'sqlite',
  database: process.env.DB_PATH_SQLITE,
  synchronize: false,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../migration/**/*.ts'],
  logging: true,
  migrationsRun: false
});


