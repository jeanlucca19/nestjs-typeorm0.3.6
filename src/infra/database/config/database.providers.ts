import { DataSource } from "typeorm"

export const appDataSource = new DataSource ({
  type: 'sqlite',
  database: 'database.db',
  synchronize: false,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../migration/**/*.ts'],
  logging: true,
  migrationsRun: false
});


