const TASKS = [];

const deleteUserInTasks = async (userId) => {
  // TODO: mock implementation. should be replaced during task development
  const selectedTasks = TASKS.filter((task) => task.userId === userId);
  selectedTasks.forEach((task) => {
    // eslint-disable-next-line no-param-reassign
    task.userId = null;
  });
};

const deleteBoardInTasks = async (boardId) => {
  // TODO: mock implementation. should be replaced during task development
  const selectedTasks = TASKS.filter((task) => task.boardId === boardId);
  selectedTasks.forEach((task) => {
    // eslint-disable-next-line no-param-reassign
    task.boardId = null;
  });
};

const deleteTask = async (boardId, taskId) => {
  // TODO: mock implementation. should be replaced during task development
  const taskIndex = TASKS.findIndex(
    (task) => task && task.boardId === boardId && task.id === taskId
  );

  if (taskIndex >= 0) {
    return TASKS.splice(taskIndex, 1);
  }
  return false;
};

const getTasksByBoardId = async (boardId) =>
  // TODO: mock implementation. should be replaced during task development
  TASKS.filter((task) => task && task.boardId === boardId) || [];

const getTaskByBoardIdAndTaskId = async (boardId, taskId) =>
  // TODO: mock implementation. should be replaced during task development
  TASKS.find((task) => task && task.boardId === boardId && task.id === taskId);

const postTask = async (task) => {
  // TODO: mock implementation. should be replaced during task development
  TASKS.push(task);
  return task;
};

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
