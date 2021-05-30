import { ITask } from './task.model';
const TASKS: ITask[] = [];

/**
 * Deletes user in tasks
 *
 * @async
 * @function deleteUserInTasks
 * @param {number} userId user ID
 * @returns {Promise.<Void>}
 */
const deleteUserInTasks = async (userId: string): Promise<void> => {
  // TODO: mock implementation. should be replaced during task development
  const selectedTasks = TASKS.filter((task: ITask) => task.userId === userId);
  selectedTasks.forEach((task: ITask) => {
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
const deleteBoardInTasks = async (boardId: string): Promise<void> => {
  // TODO: mock implementation. should be replaced during task development
  const selectedTasks = TASKS.filter((task: ITask) => task.boardId === boardId);
  selectedTasks.forEach((task: ITask) => {
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
const getTasksByBoardId = async (boardId: string): Promise<ITask[]> =>
  // TODO: mock implementation. should be replaced during task development
  TASKS.filter((task: ITask) => task?.boardId === boardId) || [];

/**
 * Creates task
 *
 * @async
 * @function postTask
 * @param {Task} task the task
 * @returns {Promise.<Task>} task
 */
const postTask = async (task: ITask): Promise<ITask> => {
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
 * @returns {Promise.<?Task>} task
 */
const getTaskByBoardIdAndTaskId = async (
  boardId: string,
  taskId: string
): Promise<ITask | null> =>
  // TODO: mock implementation. should be replaced during task development
  TASKS.find(
    (task: ITask) => task?.boardId === boardId && task?.id === taskId
  ) || null;

/**
 * Updates task
 *
 * @async
 * @function updateTask
 * @param {Task} task the new task
 * @returns {Promise.<?Task>} updated task
 */
const updateTask = async (task: ITask): Promise<ITask | null> => {
  // TODO: mock implementation. should be replaced during task development
  const {
    id,
    title,
    order,
    description,
    userId,
    boardId,
    columnId,
  }: ITask = task;
  const taskIndex: number = TASKS.findIndex(
    (task: ITask) => task?.boardId === boardId && task.id === id
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
    return TASKS[taskIndex] || null;
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
const deleteTask = async (
  boardId: string,
  taskId: string
): Promise<boolean> => {
  // TODO: mock implementation. should be replaced during task development
  const deleteCount = 1;
  const taskIndex: number = TASKS.findIndex(
    (task: ITask) => task?.boardId === boardId && task?.id === taskId
  );
  if (taskIndex >= 0) {
    TASKS.splice(taskIndex, deleteCount);
    return true;
  }
  return false;
};

export {
  deleteBoardInTasks,
  deleteUserInTasks,
  deleteTask,
  getTasksByBoardId,
  getTaskByBoardIdAndTaskId,
  postTask,
  updateTask,
};
