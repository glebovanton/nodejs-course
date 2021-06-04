import * as express from 'express';
import { Request, Response } from 'express';
import { CREATED, BAD_REQUEST, NO_CONTENT, NOT_FOUND } from 'http-status-codes';
import { Board , IBoard, IColumn } from './board.model';
import * as boardsService from './board.service';

type RequestParams = { id?: string };
type RequestBody = { title?: string; columns?: IColumn[] };

const router = express.Router();

router.route('/').get(
  async (_req: Request, res: Response): Promise<void> => {
    const boards: IBoard[] = await boardsService.getAllBoards();
    // map board fields to exclude secret fields like "password"
    res.json(boards);
  }
);

router.route('/:id').get(
  async (req: Request, res: Response): Promise<void> => {
    const { id }: RequestParams = req.params;
    if (id) {
      const board: IBoard | null = await boardsService.getBoardById(id);
      if (board) {
        res.json(board);
      } else {
        res.status(NOT_FOUND).json({
          message: 'Board not found',
        });
      }
    } else {
      res.status(BAD_REQUEST).json({
        message: 'Bad request',
      });
    }
  }
);

router.route('/').post(
  async (req: Request, res: Response): Promise<void> => {
    const { title = '', columns = [] }: RequestBody = req.body;
    const createdBoard: IBoard = await boardsService.postBoard(
      new Board({
        title,
        columns,
      })
    );
    if (typeof title === 'string' && typeof columns === 'object') {
      res.status(CREATED).json(createdBoard);
    } else {
      res.status(BAD_REQUEST).json({
        message: 'Bad request',
      });
    }
  }
);

router.route('/:id').put(
  async (req: Request, res: Response): Promise<void> => {
    const { id }: RequestParams = req.params;
    const { title, columns }: RequestBody = req.body;
    if (id && title && columns) {
      const result: IBoard | null = await boardsService.updateBoard({
        id,
        title,
        columns,
      });
      if (typeof title === 'string' && typeof columns === 'object' && result) {
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

router.route('/:id').delete(
  async (req: Request, res: Response): Promise<void> => {
    const { id }: RequestParams = req.params;
    if (id) {
      const result: boolean = await boardsService.deleteBoard(id);
      if (result) {
        res.status(NO_CONTENT).json({
          message: 'The board has been deleted',
        });
      } else {
        res.status(NOT_FOUND).json({
          message: 'Board not found',
        });
      }
    } else {
      res.status(NOT_FOUND).json({
        message: 'Board not found',
      });
    }
  }
);

export const boardRouter = router;
