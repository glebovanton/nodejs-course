import * as usersRepo from './user.memory.repository'
import { IUser } from '../../entities/User';

const getAllUsers = (): Promise<IUser[]> => usersRepo.getAllUsers();

const postUser = (user: IUser): Promise<IUser> => usersRepo.postUser(user);

const getUserById = (id: string): Promise<IUser | null> =>
  usersRepo.getUserById(id);

const updateUser = (user: IUser): Promise<IUser | null> =>
  usersRepo.updateUser(user);

const deleteUser = (id: string): Promise<boolean> => usersRepo.deleteUser(id);

export { deleteUser, getAllUsers, getUserById, postUser, updateUser };
