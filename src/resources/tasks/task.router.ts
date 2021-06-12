import * as express from 'express';
import { Request, Response } from 'express';
import { Task , ITask } from './task.model';
import * as tasksService from './task.service';




type RequestParams = { boardId?: string; taskId?: string; id?: string };

const router = express.Router();

router.route('/:boardId/tasks/').get(
  async (req: Request, res: Response): Promise<void> => {
    const { boardId }: RequestParams = req.params;
    if (boardId) {
      const tasks: ITask[] = await tasksService.getTasksByBoardId(boardId);
      if ((await tasks).length) {
        res.json(tasks);
      } else {
        res.status(404).json({
          message: 'Tasks not found',
        });
      }
    } else {
      res.status(400).json({
        message: 'Bad request',
      });
    }
  }
);

router.route('/:boardId/tasks/').post(
  async (req: Request, res: Response): Promise<void> => {
    const { boardId }: RequestParams = req.params;
    const { title, order, description, userId, columnId }: ITask = req.body;
    if (boardId && title && description && boardId) {
      const result: ITask = await tasksService.postTask(
        new Task({ title, order, description, userId, boardId, columnId })
      );
      if (typeof title === 'string') {
        res.status(201).json(Task.toResponse(result));
      } else {
        res.status(400).json({
          message: 'Bad request',
        });
      }
    } else {
      res.status(400).json({
        message: 'Bad request',
      });
    }
  }
);

router.route('/:boardId/tasks/:taskId').get(
  async (req: Request, res: Response): Promise<void> => {
    const { boardId, taskId }: RequestParams = req.params;
    if (boardId && taskId) {
      const task: ITask | null = await tasksService.getTaskByBoardIdAndTaskId(
        boardId,
        taskId
      );
      if (task) {
        res.json(task);
      } else {
        res.status(404).json({
          message: 'Task not found',
        });
      }
    } else {
      res.status(400).json({
        message: 'Bad request',
      });
    }
  }
);

router.route('/:boardId/tasks/:id').put(
  async (req: Request, res: Response): Promise<void> => {
    const { boardId, id }: RequestParams = req.params;
    const { title, order, description, userId, columnId }: ITask = req.body;

    if (id) {
      const result: ITask | null = await tasksService.updateTask(
        new Task({
          id,
          title,
          order,
          description,
          userId,
          boardId,
          columnId,
        })
      );
      if (typeof title === 'string' && result) {
        res.json(result);
      } else {
        res.status(400).json({
          message: 'Bad request',
        });
      }
    } else {
      res.status(400).json({
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
        res.status(204).json({
          message: 'The task has been deleted',
        });
      } else {
        res.status(404).json({
          message: 'Task not found',
        });
      }
    } else {
      res.status(400).json({
        message: 'Bad request',
      });
    }
  }
);

export const taskRouter = router;
