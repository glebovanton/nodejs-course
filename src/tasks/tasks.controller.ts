import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('/boards/:boardId/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(
    @Param('boardId') boardId: string,
    @Body() createTaskDto: CreateTaskDto,
  ) {
    return await this.tasksService.create({
      ...createTaskDto,
      boardId: boardId,
    });
  }

  @Get()
  async findAll() {
    return await this.tasksService.findAll();
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const task = await this.tasksService.findOne(id);
    return task
      ? res.status(HttpStatus.OK).json(task)
      : res.status(HttpStatus.NOT_FOUND).json({
          message: 'Task not found',
        });
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return await this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    const isRemoved = await this.tasksService.remove(id);
    return isRemoved
      ? res.status(HttpStatus.NO_CONTENT).json({
          message: 'The task has been deleted',
        })
      : res.status(HttpStatus.NOT_FOUND).json({
          message: 'Task not found',
        });
  }
}
