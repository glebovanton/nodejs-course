const tasksRepo = require('./task.memory.repository');

const deleteTask = (boardId, taskId) => tasksRepo.deleteTask(boardId, taskId);
const getTasksByBoardId = (boardId) => tasksRepo.getTasksByBoardId(boardId);
const getTaskByBoardIdAndTaskId = (boardId, taskId) =>
  tasksRepo.getTaskByBoardIdAndTaskId(boardId, taskId);
const postTask = (task) => tasksRepo.postTask(task);
const updateTask = (id, title, order, description, userId, boardId, columnId) =>
  tasksRepo.updateTask(
    id,
    title,
    order,
    description,
    userId,
    boardId,
    columnId
  );

module.exports = {
  deleteTask,
  getTasksByBoardId,
  getTaskByBoardIdAndTaskId,
  postTask,
  updateTask,
};
