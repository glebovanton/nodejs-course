import { getRepository } from 'typeorm';
import { User } from '../../entities/User';

const getAllUsers = async (): Promise<User[]> => {
  const userRepository = getRepository(User);
  const users = await userRepository.find();
  return users;
};

const postUser = async (dto: User): Promise<User> => {
  const userRepository = getRepository(User);
  const newUser = userRepository.create(dto);
  const savedUser = await userRepository.save(newUser);
  return savedUser;
};

const getUserById = async (id: string): Promise<User | null> => {
  const userRepository = getRepository(User);
  const res = await userRepository.findOne(id);
  if (res === undefined) return null;
  return res;
};

const updateUser = async (dto: User): Promise<User | null> => {
  const { id } = dto;
  const userRepository = getRepository(User);
  if (id) {
    const updatedUser = await userRepository.update(id, dto);
    if (updatedUser) return updatedUser.raw;
  }
  return null;
};

const deleteUser = async (id: string): Promise<boolean> => {
  const userRepository = getRepository(User);
  const deletedRes = await userRepository.delete(id);
  return !!deletedRes;
};

export { deleteUser, getAllUsers, getUserById, postUser, updateUser };
