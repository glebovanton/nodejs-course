const usersRepo = require('./user.memory.repository');

/**
 * Returns all users
 *
 * @async
 * @function getAllUsers
 * @returns {Promise.<User[]>} array of users
 */
const getAllUsers = () => usersRepo.getAllUsers();

/**
 * Creates user
 *
 * @async
 * @function postUser
 * @param {User} user user
 * @returns {Promise.<User>} added user
 */
const postUser = (user) => usersRepo.postUser(user);

/**
 * Returns user by user ID
 *
 * @async
 * @function getUserById
 * @param {number} id user ID
 * @returns {Promise.<?User>} user
 */
const getUserById = (id) => usersRepo.getUserById(id);

/**
 * Updates user by user ID and returs updated user
 *
 * @async
 * @function updateUser
 * @param {User} newUser updated user
 * @returns {Promise.<?User>} user
 */
const updateUser = (user) => usersRepo.updateUser(user);

/**
 * Deletes user by user ID
 *
 * @async
 * @function deleteUser
 * @param {number} id user ID
 * @returns {Promise.<boolean>} if user is deleted
 */
const deleteUser = (id) => usersRepo.deleteUser(id);

module.exports = { deleteUser, getAllUsers, getUserById, postUser, updateUser };
