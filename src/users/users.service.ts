import { getRepository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { User } from '../entities/User';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { hashPassword } from '../helpers/hash';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto): Promise<User> {
    const userRepository = getRepository(User);
    const newUser = userRepository.create({
      ...createUserDto,
      password: await hashPassword(createUserDto?.password ?? ''),
    });
    return await userRepository.save(newUser);
  }

  async findAll(): Promise<User[]> {
    const userRepository = getRepository(User);
    return await userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    const userRepository = getRepository(User);
    const res = await userRepository.findOne(id);
    if (res === undefined) return null;
    return res;
  }

  async findOneByProps(login: string): Promise<User | null> {
    const userRepository = getRepository(User);
    const res = await userRepository.findOne({ where: { login } });
    if (res === undefined) return null;
    return res;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    const userRepository = getRepository(User);
    if (id) {
      const updatedUser = await userRepository.save({ id, ...updateUserDto });
      if (updatedUser) return updatedUser;
    }
    return null;
  }

  async remove(id: string): Promise<boolean> {
    const userRepository = getRepository(User);
    const deletedRes = await userRepository.delete(id);
    return !!deletedRes.affected;
  }
}
