import { DataSource } from "typeorm"
import { AddTableUser1656706084178 } from "../migration/1656706084178-AddTableUser";
import { UserEntity } from "../table-entity/user.entity";

export const appDataSource = new DataSource ({
  type: 'sqlite',
  database: 'database.db',
  synchronize: false,
  entities: [UserEntity],
  migrations: [AddTableUser1656706084178],
  logging: true,
  migrationsRun: false
});


