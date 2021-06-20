import { IUser } from './user.model';
import { deleteUserInTasks } from '../tasks/task.memory.repository';

const USERS: IUser[] = [];

const getAllUsers = async (): Promise<IUser[]> =>
  // TODO: mock implementation. should be replaced during task development
  USERS;

const postUser = async (user: IUser): Promise<IUser> => {
  // TODO: mock implementation. should be replaced during task development
  USERS.push(user);
  return user;
};

const getUserById = async (id: string): Promise<IUser | null> =>
  // TODO: mock implementation. should be replaced during task development
  USERS.find((user: IUser) => user && user.id === id) || null;

const updateUser = async (newUser: IUser): Promise<IUser | null> => {
  // TODO: mock implementation. should be replaced during task development
  const userIndex = USERS.findIndex(
    (user: IUser) => user && user.id === newUser.id
  );
  if (userIndex >= 0) {
    USERS[userIndex] = newUser;
    return USERS[userIndex] || null;
  }
  return null;
};

const deleteUser = async (id: string): Promise<boolean> => {
  // TODO: mock implementation. should be replaced during task development
  const userIndex = USERS.findIndex((user: IUser) => user && user.id === id);
  if (userIndex >= 0) {
    const deleteCount = 1;

    USERS.splice(userIndex, deleteCount);
    await deleteUserInTasks(id);
    return true;
  }
  return false;
};

export { deleteUser, getAllUsers, getUserById, postUser, updateUser };
