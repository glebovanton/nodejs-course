import * as tasksRepo from './task.memory.repository'

import { ITask } from './task.model';

const getTasksByBoardId = (boardId: string): Promise<ITask[]> =>
  tasksRepo.getTasksByBoardId(boardId);

const postTask = (task: ITask): Promise<ITask> => tasksRepo.postTask(task);

const getTaskByBoardIdAndTaskId = (
  boardId: string,
  taskId: string
): Promise<ITask | null> =>
  tasksRepo.getTaskByBoardIdAndTaskId(boardId, taskId);

const updateTask = (task: ITask): Promise<ITask | null> =>
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
