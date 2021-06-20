import * as tasksRepo from './task.memory.repository'

import { Task } from '../../entities/Task';

const getTasksByBoardId = (boardId: string): Promise<Task[] | null> =>
  tasksRepo.getTasksByBoardId(boardId);

const postTask = (task: Task): Promise<Task> => tasksRepo.postTask(task);

const getTaskByBoardIdAndTaskId = (
  boardId: string,
  taskId: string
): Promise<Task | null> =>
  tasksRepo.getTaskByBoardIdAndTaskId(boardId, taskId);

const updateTask = (task: Task): Promise<Task | null> =>
  tasksRepo.updateTask(task);

const deleteTask = (boardId: string, taskId: string): Promise<boolean> =>
  tasksRepo.deleteTask(boardId, taskId);

export {
  deleteTask,
  getTasksByBoardId,
  getTaskByBoardIdAndTaskId,
  postTask,
  updateTask,
};
