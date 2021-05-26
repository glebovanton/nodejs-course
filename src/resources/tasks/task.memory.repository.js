const TASKS = [];

/**
 * Deletes user in tasks
 *
 * @async
 * @function deleteUserInTasks
 * @param {number} userId user ID
 * @returns {Promise.<Void>}
 */
const deleteUserInTasks = async (userId) => {
  // TODO: mock implementation. should be replaced during task development
  const selectedTasks = TASKS.filter((task) => task.userId === userId);
  selectedTasks.forEach((task) => {
    const currentTask = task;
    currentTask.userId = null;
  });
};

/**
 * Deletes board in tasks
 *
 * @async
 * @function deleteBoardInTasks
 * @param {number} boardId board ID
 * @returns {Promise.<Void>}
 */
const deleteBoardInTasks = async (boardId) => {
  // TODO: mock implementation. should be replaced during task development
  const selectedTasks = TASKS.filter((task) => task.boardId === boardId);
  selectedTasks.forEach((task) => {
    const currentTask = task;
    currentTask.boardId = null;
  });
};

/**
 * Get tasks by board ID
 *
 * @async
 * @function getTasksByBoardId
 * @param {number} boardId board ID
 * @returns {Promise.<Task[]>} array of tasks
 */
const getTasksByBoardId = async (boardId) =>
  // TODO: mock implementation. should be replaced during task development
  TASKS.filter((task) => task && task.boardId === boardId) || [];

/**
 * Creates task
 *
 * @async
 * @function postTask
 * @param {Task} task the task
 * @returns {Promise.<Task>} task
 */
const postTask = async (task) => {
  // TODO: mock implementation. should be replaced during task development
  TASKS.push(task);
  return task;
};

/**
 * Returns task by board ID and task ID
 *
 * @async
 * @function getTaskByBoardIdAndTaskId
 * @param {number} boardId board ID
 * @param {number} taskId task ID
 * @returns {Promise.<Task>} task
 */
const getTaskByBoardIdAndTaskId = async (boardId, taskId) =>
  // TODO: mock implementation. should be replaced during task development
  TASKS.find((task) => task && task.boardId === boardId && task.id === taskId);

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
const updateTask = async (
  id,
  title,
  order,
  description,
  userId,
  boardId,
  columnId
) => {
  // TODO: mock implementation. should be replaced during task development
  const taskIndex = TASKS.findIndex(
    (task) => task && task.boardId === boardId && task.id === id
  );
  if (taskIndex >= 0) {
    TASKS[taskIndex] = {
      ...TASKS[taskIndex],
      id,
      title,
      order,
      description,
      userId,
      boardId,
      columnId,
    };
    return TASKS[taskIndex];
  }
  return null;
};

/**
 * Deletes task by board ID and task ID
 *
 * @async
 * @function deleteTask
 * @param {number} boardId board ID
 * @param {number} taskId task ID
 * @returns {Promise.<boolean>} id task is deleted
 */
const deleteTask = async (boardId, taskId) => {
  // TODO: mock implementation. should be replaced during task development
  const taskIndex = TASKS.findIndex(
    (task) => task && task.boardId === boardId && task.id === taskId
  );
  if (taskIndex >= 0) {
    TASKS.splice(taskIndex, 1);
    return true;
  }
  return false;
};

module.exports = {
  deleteBoardInTasks,
  deleteUserInTasks,
  deleteTask,
  getTasksByBoardId,
  getTaskByBoardIdAndTaskId,
  postTask,
  updateTask,
};
