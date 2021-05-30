import { IUser } from './user.model';
import { deleteUserInTasks } from '../tasks/task.memory.repository';

const USERS: IUser[] = [];

/**
 * Returns all users
 *
 * @async
 * @function getAllUsers
 * @returns {Promise.<User[]>} array of users
 */
const getAllUsers = async (): Promise<IUser[]> =>
  // TODO: mock implementation. should be replaced during task development
  USERS;

/**
 * Creates user
 *
 * @async
 * @function postUser
 * @param {User} user user
 * @returns {Promise.<User>} added user
 */
const postUser = async (user: IUser): Promise<IUser> => {
  // TODO: mock implementation. should be replaced during task development
  USERS.push(user);
  return user;
};

/**
 * Returns user by user ID
 *
 * @async
 * @function getUserById
 * @param {number} id user ID
 * @returns {Promise.<?User>} user
 */
const getUserById = async (id: number): Promise<IUser | null> =>
  // TODO: mock implementation. should be replaced during task development
  USERS.find((user: IUser) => user && user.id === id) || null;

/**
 * Updates user by user ID and returs updated user
 *
 * @async
 * @function updateUser
 * @param {User} newUser updated user
 * @returns {Promise.<?User>} user
 */
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

/**
 * Deletes user by user ID
 *
 * @async
 * @function deleteUser
 * @param {number} id user ID
 * @returns {Promise.<boolean>} if user is deleted
 */
const deleteUser = async (id: number): Promise<boolean> => {
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
