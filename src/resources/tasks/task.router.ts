import * as express from 'express';
import { Request, Response } from 'express';
import { CREATED, BAD_REQUEST, NO_CONTENT, NOT_FOUND } from 'http-status-codes';
import { Task } from '../../entities/Task';
import * as tasksService from './task.service';

type RequestParams = { boardId?: string; taskId?: string; id?: string };

const router = express.Router();

router.route('/:boardId/tasks/').get(
  async (req: Request, res: Response): Promise<void> => {
    const { boardId }: RequestParams = req.params;
    if (boardId) {
      const tasks: Task[] | null = await tasksService.getTasksByBoardId(
        boardId
      );
      if ((await tasks)?.length) {
        res.json(tasks);
      } else {
        res.status(NOT_FOUND).json({
          message: 'Tasks not found',
        });
      }
    } else {
      res.status(BAD_REQUEST).json({
        message: 'Bad request',
      });
    }
  }
);

router.route('/:boardId/tasks/').post(
  async (req: Request, res: Response): Promise<void> => {
    const { boardId }: RequestParams = req.params;
    const { title, order, description, userId, columnId }: Task = req.body;
    if (boardId && title && description && boardId) {
      const result: Task = await tasksService.postTask({
        title,
        order,
        description,
        userId,
        boardId,
        columnId,
      });
      if (typeof title === 'string') {
        res.status(CREATED).json(Task.toResponse(result));
      } else {
        res.status(BAD_REQUEST).json({
          message: 'Bad request',
        });
      }
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
      const task: Task | null = await tasksService.getTaskByBoardIdAndTaskId(
        boardId,
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
    const { boardId, id }: RequestParams = req.params;
    const { title, order, description, userId, columnId }: Task = req.body;

    if (id) {
      const result: Task | null = await tasksService.updateTask({
        id,
        title,
        order,
        description,
        userId,
        boardId,
        columnId,
      });
      if (typeof title === 'string' && result) {
        res.json(result);
      } else {
        res.status(BAD_REQUEST).json({
          message: 'Bad request',
        });
      }
    } else {
      res.status(BAD_REQUEST).json({
        message: 'Bad request',
      });
    }
  }
);

router.route('/:boardId/tasks/:taskId').delete(
  async (req: Request, res: Response): Promise<void> => {
    const { boardId, taskId }: RequestParams = req.params;
    if (boardId && taskId) {
      const result: boolean = await tasksService.deleteTask(boardId, taskId);
      if (result) {
        res.status(NO_CONTENT).json({
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
