const usersRepo = require('./user.memory.repository');

const deleteUser = (id) => usersRepo.deleteUser(id);
const getAllUsers = () => usersRepo.getAllUsers();
const postUser = (user) => usersRepo.postUser(user);
const getUserById = (id) => usersRepo.getUserById(id);
const updateUser = (user) => usersRepo.updateUser(user);

module.exports = { deleteUser, getAllUsers, getUserById, postUser, updateUser };
