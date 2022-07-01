import { appDataSource } from "../config/database.providers";
import { UserEntity } from "../table-entity/user.entity";

export const userRepository = appDataSource.getRepository(UserEntity).extend({
    async findAll() {
    return await this.createQueryBuilder("users").select('*').getRawMany()
    }
})
