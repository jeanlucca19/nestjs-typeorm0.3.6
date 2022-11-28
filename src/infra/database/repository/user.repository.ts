import { sqliteDataSource } from "../config/sqlite.connection";
import { UserEntity } from "../table-entity/user.entity";

export const userRepository = sqliteDataSource.getRepository(UserEntity).extend({
    async findAll() {
    return await this.createQueryBuilder("users").select('*').getRawMany()
    }
})
