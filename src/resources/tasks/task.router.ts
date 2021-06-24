import * as express from 'express';
import { Request, Response } from 'express';
import { CREATED, BAD_REQUEST, OK, NOT_FOUND } from 'http-status-codes';
import { Task } from '../../entities/Task';
import * as tasksService from './task.service';

type RequestParams = { boardId?: string; taskId?: string; id?: string };

const router = express.Router();

router.route('/:boardId/tasks/').get(
  async (_req: Request, res: Response): Promise<void> => {
    const tasks: Task[] | null = await tasksService.getTasks();
    if ((await tasks)?.length) {
      res.json(tasks);
    } else {
      res.status(NOT_FOUND).json({
        message: 'Tasks not found',
      });
    }
  }
);

router.route('/:boardId/tasks/').post(
  async (req: Request, res: Response): Promise<void> => {
    const { boardId }: RequestParams = req.params;
    const result: Task = await tasksService.postTask({ ...req.body, boardId });
    if (result) {
      res.status(CREATED).json(Task.toResponse(result));
    } else {
      res.status(BAD_REQUEST).json({
        message: 'Bad request',
      });
    }
  }
);

router.route('/:boardId/tasks/:taskId').get(
  async (req: Request, res: Response): Promise<void> => {
    const { boardId, taskId }: RequestParams = req.params;
    if (boardId && taskId) {
      const task: Task | null = await tasksService.getTaskById(
        taskId
      );
      if (task) {
        res.json(task);
      } else {
        res.status(NOT_FOUND).json({
          message: 'Task not found',
        });
      }
    } else {
      res.status(BAD_REQUEST).json({
        message: 'Bad request',
      });
    }
  }
);

router.route('/:boardId/tasks/:id').put(
  async (req: Request, res: Response): Promise<void> => {
    const { boardId }: RequestParams = req.params;
    const result: Task | null = await tasksService.updateTask({
      ...req.body,
      boardId,
    });
    if (result) {
      res.json(result);
    } else {
      res.status(BAD_REQUEST).json({
        message: 'Bad request',
      });
    }
  }
);

router.route('/:boardId/tasks/:taskId').delete(
  async (req: Request, res: Response): Promise<void> => {
    const { taskId }: RequestParams = req.params;
    if (taskId) {
      const result: boolean = await tasksService.deleteTask(taskId);
      if (result) {
        res.status(OK).json({
          message: 'The task has been deleted',
        });
      } else {
        res.status(NOT_FOUND).json({
          message: 'Task not found',
        });
      }
    } else {
      res.status(BAD_REQUEST).json({
        message: 'Bad request',
      });
    }
  }
);

export const taskRouter = router;
