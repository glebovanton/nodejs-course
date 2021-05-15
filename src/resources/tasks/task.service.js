const tasksRepo = require('./task.memory.repository');

const deleteTask = (id) => tasksRepo.deleteTask(id);
const getAll = () => tasksRepo.getAll();
const postTask = (task) => tasksRepo.postTask(task);
const getTaskById = (id) => tasksRepo.getTaskById(id);
const updateTask = (task) => tasksRepo.updateTask(task);

module.exports = { deleteTask, getAll, getTaskById, postTask, updateTask };
