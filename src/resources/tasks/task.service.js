const tasksRepo = require('./task.memory.repository');

/**
 * Get tasks by board ID
 *
 * @async
 * @function getTasksByBoardId
 * @param {number} boardId board ID
 * @returns {Promise.<Task[]>} array of tasks
 */
const getTasksByBoardId = (boardId) => tasksRepo.getTasksByBoardId(boardId);

/**
 * Creates task
 *
 * @async
 * @function postTask
 * @param {Task} task the task
 * @returns {Promise.<Task>} task
 */
const postTask = (task) => tasksRepo.postTask(task);

/**
 * Returns task by board ID and task ID
 *
 * @async
 * @function getTaskByBoardIdAndTaskId
 * @param {number} boardId board ID
 * @param {number} taskId task ID
 * @returns {Promise.<Task>} task
 */
const getTaskByBoardIdAndTaskId = (boardId, taskId) =>
  tasksRepo.getTaskByBoardIdAndTaskId(boardId, taskId);

/**
 * Updates task
 *
 * @async
 * @function updateTask
 * @param {number} id the task's ID
 * @param {strinf} title the task's title
 * @param {number} order the task's order
 * @param {string} description the task's description
 * @param {number} userId the user's ID
 * @param {number} boardId the board's ID
 * @param {number} columnId the column's ID
 * @returns {Promise.<?Task>} updated task
 */
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

/**
 * Deletes task by board ID and task ID
 *
 * @async
 * @function deleteTask
 * @param {number} boardId board ID
 * @param {number} taskId task ID
 * @returns {Promise.<boolean>} id task is deleted
 */
const deleteTask = (boardId, taskId) => tasksRepo.deleteTask(boardId, taskId);

module.exports = {
  deleteTask,
  getTasksByBoardId,
  getTaskByBoardIdAndTaskId,
  postTask,
  updateTask,
};
