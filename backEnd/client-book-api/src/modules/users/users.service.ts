import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/user.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}
  create(createUserDto: CreateUserDto) {
    return this.usersRepository.create(createUserDto);
  }

  findAll() {
    return this.usersRepository.findAll();
  }

  findOne(id: string) {
    const foundUser = this.usersRepository.findOne(id);
    if (!foundUser) {
      throw new NotFoundException('User not found');
    }
    return foundUser;
  }

  async findByEmail(email: string) {
    const foundUser = await this.usersRepository.findByEmail(email);
    if (!foundUser) {
      throw new NotFoundException('User not found');
    }
    return foundUser;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const foundUser = this.usersRepository.update(id, updateUserDto);
    if (!foundUser) {
      throw new NotFoundException('User not found');
    }
    return foundUser;
  }

  remove(id: string) {
    const foundUser = this.usersRepository.delete(id);
    if (!foundUser) {
      throw new NotFoundException('User not found');
    }
  }
}
