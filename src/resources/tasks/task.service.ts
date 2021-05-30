import * as tasksRepo from './task.memory.repository'

import { ITask } from './task.model';

/**
 * Get tasks by board ID
 *
 * @async
 * @function getTasksByBoardId
 * @param {number} boardId board ID
 * @returns {Promise.<Task[]>} array of tasks
 */
const getTasksByBoardId = (boardId: number): Promise<ITask[]> =>
  tasksRepo.getTasksByBoardId(boardId);

/**
 * Creates task
 *
 * @async
 * @function postTask
 * @param {Task} task the task
 * @returns {Promise.<Task>} task
 */
const postTask = (task: ITask): Promise<ITask> => tasksRepo.postTask(task);

/**
 * Returns task by board ID and task ID
 *
 * @async
 * @function getTaskByBoardIdAndTaskId
 * @param {number} boardId board ID
 * @param {number} taskId task ID
 * @returns {Promise.<?Task>} task
 */
const getTaskByBoardIdAndTaskId = (
  boardId: number,
  taskId: number
): Promise<ITask | null> =>
  tasksRepo.getTaskByBoardIdAndTaskId(boardId, taskId);

/**
 * Updates task
 *
 * @async
 * @function updateTask
 * @param {Task} task the new task
 * @returns {Promise.<?Task>} updated task
 */
const updateTask = (task: ITask): Promise<ITask | null> =>
  tasksRepo.updateTask(task);

/**
 * Deletes task by board ID and task ID
 *
 * @async
 * @function deleteTask
 * @param {number} boardId board ID
 * @param {number} taskId task ID
 * @returns {Promise.<boolean>} id task is deleted
 */
const deleteTask = (boardId: number, taskId: number): Promise<boolean> =>
  tasksRepo.deleteTask(boardId, taskId);

export {
  deleteTask,
  getTasksByBoardId,
  getTaskByBoardIdAndTaskId,
  postTask,
  updateTask,
};
