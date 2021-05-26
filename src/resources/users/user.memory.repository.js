const { deleteUserInTasks } = require('../tasks/task.memory.repository');

const USERS = [];

/**
 * Returns all users
 *
 * @async
 * @function getAllUsers
 * @returns {Promise.<User[]>} array of users
 */
const getAllUsers = async () =>
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
const postUser = async (user) => {
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
const getUserById = async (id) =>
  // TODO: mock implementation. should be replaced during task development
  USERS.find((user) => user && user.id === id) || null;

/**
 * Updates user by user ID and returs updated user
 *
 * @async
 * @function updateUser
 * @param {User} newUser updated user
 * @returns {Promise.<?User>} user
 */
const updateUser = async (newUser) => {
  // TODO: mock implementation. should be replaced during task development
  const userIndex = USERS.findIndex((user) => user && user.id === newUser.id);
  if (userIndex >= 0) {
    USERS[userIndex] = newUser;
    return USERS[userIndex];
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
const deleteUser = async (id) => {
  // TODO: mock implementation. should be replaced during task development
  const userIndex = USERS.findIndex((user) => user && user.id === id);
  if (userIndex >= 0) {
    USERS.splice(userIndex, 1);
    await deleteUserInTasks(id);
    return true;
  }
  return false;
};

module.exports = { deleteUser, getAllUsers, getUserById, postUser, updateUser };
