import * as tasksRepo from './task.memory.repository'

import { Task } from '../../entities/Task';

const getTasks = (): Promise<Task[] | null> =>
  tasksRepo.getTasks();

const postTask = (task: Task): Promise<Task> => tasksRepo.postTask(task);

const getTaskById = (
  taskId: string
): Promise<Task | null> =>
  tasksRepo.getTaskById(taskId);

const updateTask = (task: Task): Promise<Task | null> =>
  tasksRepo.updateTask(task);

const deleteTask = (taskId: string): Promise<boolean> =>
  tasksRepo.deleteTask(taskId);

export {
  deleteTask,
  getTasks,
  getTaskById,
  postTask,
  updateTask,
};
