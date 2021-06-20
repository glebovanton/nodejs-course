import { getRepository } from 'typeorm';
import { Task } from '../../entities/Task';

const TASKS: Task[] = [];

const deleteUserInTasks = async (userId: string): Promise<void> => {
  // TODO: mock implementation. should be replaced during task development
  const selectedTasks = TASKS.filter((task: Task) => task.userId === userId);
  selectedTasks.forEach((task: Task) => {
    const currentTask = task;
    currentTask.userId = null;
  });
};

const deleteBoardInTasks = async (boardId: string): Promise<void> => {
  // TODO: mock implementation. should be replaced during task development
  const selectedTasks = TASKS.filter((task: Task) => task.boardId === boardId);
  selectedTasks.forEach((task: Task) => {
    const currentTask = task;
    currentTask.boardId = null;
  });
};

const getTasksByBoardId = async (boardId: string): Promise<Task[] | null> => {
  const taskRepository = getRepository('Task');
  const res = await taskRepository.find({ where: { boardId } });
  // @ts-ignore
  return res;
  if (res === undefined) return null;
  // @ts-ignore
  return res;
};

const postTask = async (dto: Task): Promise<Task> => {
  const taskRepository = getRepository('Task');
  const newTask = taskRepository.create(dto);
  // @ts-ignore
  const savedTask = await taskRepository.save(newTask);
  // @ts-ignore
  return savedTask;
};

const getTaskByBoardIdAndTaskId = async (
  boardId: string,
  taskId: string
): Promise<Task | null> => {
  const taskRepository = getRepository('Task');
  const res = await taskRepository.findOne({
    where: { boardId, taskId },
  });
  if (res === undefined) return null;
  // @ts-ignore
  return res;
};

const updateTask = async (dto: Task): Promise<Task | null> => {
  const { id } = dto;
  const taskRepository = getRepository('Task');
  const res = await taskRepository.findOne(id);
  if (res === undefined || !id) return null;
  const updatedRes = await taskRepository.update(id, dto);
  return updatedRes.raw;
};

const deleteTask = async (
  boardId: string,
  taskId: string
): Promise<boolean> => {
  const taskRepository = getRepository('Task');
  const deletedRes = await taskRepository.delete({
    where: { boardId, taskId },
  });
  if (deletedRes.affected) return true;
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
