import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { userRepository } from 'src/infra/database/repository/user.repository';
import { UserEntity } from 'src/infra/database/table-entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor() {}

  async create(createUserDto: CreateUserDto) {
    const userEntity = UserEntity.from(createUserDto);
    try {
      return await userRepository.save(userEntity);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  findAll() {
    return userRepository.findAll()
  }

  async findOne(id: number) {
    try {
      return await userRepository.findOneOrFail({where: {id}});
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const userEntity = UserEntity.from(updateUserDto);
    try {
      return await userRepository.update(id, userEntity);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async remove(id: number) {
    try {
      return await userRepository.delete(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
