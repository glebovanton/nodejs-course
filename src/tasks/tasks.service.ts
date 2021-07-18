import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { Task } from '../entities/Task';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const taskRepository = getRepository(Task);
    const newTask = taskRepository.create(createTaskDto);
    return await taskRepository.save(newTask);
  }

  async findAll(): Promise<Task[]> {
    const taskRepository = getRepository(Task);
    return await taskRepository.find();
  }

  async findOne(taskId: string): Promise<Task | null> {
    const taskRepository = getRepository(Task);
    const res = await taskRepository.findOne(taskId);
    if (res === undefined) return null;
    return res;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const taskRepository = getRepository(Task);
    if (!id) return null;
    const updatedRes = await taskRepository.update(id, updateTaskDto);
    return updatedRes.raw;
  }

  async remove(taskId: string) {
    const taskRepository = getRepository(Task);
    const deletedRes = await taskRepository.delete(taskId);
    return !!deletedRes.affected;
  }
}
