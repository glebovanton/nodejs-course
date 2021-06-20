import { getRepository } from 'typeorm';
import { User } from '../../entities/User';
import { deleteUserInTasks } from '../tasks/task.memory.repository';

const getAllUsers = async (): Promise<User[]> => {
  const userRepository = getRepository('User');
  const users = await userRepository.find();
  // @ts-ignore
  return users
};

const postUser = async (dto: User): Promise<User> => {
  const userRepository = getRepository('User');
  const newUser = userRepository.create(dto);
  // @ts-ignore
  const savedUser = await userRepository.save(newUser);
  // @ts-ignore
  return savedUser;
};

const getUserById = async (id: string): Promise<User | null> => {
  const userRepository = getRepository('User');
  const res = await userRepository.findOne(id);
  if (res === undefined) return null;
  // @ts-ignore
  return res;
};

const updateUser = async (dto: User): Promise<User | null> => {
  const { id } = dto;
  const userRepository = getRepository('User');
  const res = await userRepository.findOne(id);
  if (res === undefined || !id) return null;
  const updatedRes = await userRepository.update(id, dto);
  return updatedRes.raw;
};

const deleteUser = async (id: string): Promise<boolean> => {
  const userRepository = getRepository('User');
  const deletedRes = await userRepository.delete(id);
  const deletedUsersRes = await deleteUserInTasks(id);
  if (deletedRes.affected && deletedUsersRes) return true;
  return false;
};

export { deleteUser, getAllUsers, getUserById, postUser, updateUser };
