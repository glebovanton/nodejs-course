import { getRepository } from 'typeorm';
import { Task } from '../../entities/Task';

const getTasks = async (): Promise<Task[] | null> => {
  const taskRepository = getRepository(Task);
  return taskRepository.find();
};

const postTask = async (dto: Task): Promise<Task> => {
  const taskRepository = getRepository(Task);
  const newTask = taskRepository.create(dto);
  const savedTask = await taskRepository.save(newTask);
  return savedTask;
};

const getTaskById = async (taskId: string): Promise<Task | null> => {
  const taskRepository = getRepository(Task);
  const res = await taskRepository.findOne(taskId);
  if (res === undefined) return null;
  return res;
};

const updateTask = async (dto: Task): Promise<Task | null> => {
  const { id } = dto;
  const taskRepository = getRepository(Task);
  if (!id) return null;
  const updatedRes = await taskRepository.update(id, dto);
  return updatedRes.raw;
};

const deleteTask = async (taskId: string): Promise<boolean> => {
  const taskRepository = getRepository(Task);
  const deletedRes = await taskRepository.delete(taskId);
  return !!deletedRes;
};

export { deleteTask, getTasks, getTaskById, postTask, updateTask };
