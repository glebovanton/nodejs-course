const { deleteUserInTasks } = require('../tasks/task.memory.repository');

const USERS = [];

const deleteUser = async (id) => {
  // TODO: mock implementation. should be replaced during task development
  const userIndex = USERS.findIndex((user) => user && user.id === id);
  if (userIndex >= 0) {
    USERS.splice(userIndex, 1);
    await deleteUserInTasks(id);
  }
  return USERS;
};

const getAllUsers = async () =>
  // TODO: mock implementation. should be replaced during task development
  USERS;

const postUser = async (user) => {
  // TODO: mock implementation. should be replaced during task development
  USERS.push(user);
  return user;
};

const getUserById = async (id) =>
  // TODO: mock implementation. should be replaced during task development
  USERS.find((user) => user && user.id === id);

const updateUser = async (newUser) => {
  // TODO: mock implementation. should be replaced during task development
  const userIndex = USERS.findIndex((user) => user && user.id === newUser.id);
  if (userIndex >= 0) {
    USERS[userIndex] = newUser;
    return USERS[userIndex];
  }
  return false;
};

module.exports = { deleteUser, getAllUsers, getUserById, postUser, updateUser };
