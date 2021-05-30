import * as express from 'express';
import { User } from './user.model';
import * as usersService from './user.service';

import { IUser } from './user.model';
import { Request, Response } from 'express';

type RequestParams = { id?: string };

const router = express.Router();

router.route('/').get(
  async (_req: Request, res: Response): Promise<void> => {
    const users: IUser[] = await usersService.getAllUsers();
    // map user fields to exclude secret fields like "password"
    res.json(await users.map(User.toResponse));
  }
);

router.route('/:id').get(
  async (req: Request, res: Response): Promise<void> => {
    const { id }: RequestParams = req.params;
    if (id) {
      const user: IUser | null = await usersService.getUserById(id);

      if (user) {
        // map user fields to exclude secret fields like "password"
        res.json(User.toResponse(user));
      } else {
        res.status(404).json({
          message: 'User not found',
        });
      }
    } else {
      res.status(400).json({
        message: 'Bad request',
      });
    }
  }
);

router.route('/').post(
  async (req: Request, res: Response): Promise<void> => {
    const { name, login, password }: IUser = req.body;
    if (
      typeof name === 'string' &&
      typeof login === 'string' &&
      typeof password === 'string'
    ) {
      const result: IUser = await usersService.postUser(
        new User({
          name,
          login,
          password,
        })
      );
      res.status(201).json(User.toResponse(result));
    } else {
      res.status(400).json({
        message: 'Bad request',
      });
    }
  }
);

router.route('/:id').put(
  async (req: Request, res: Response): Promise<void> => {
    const { id }: RequestParams = req.params;
    const { name, login, password }: IUser = req.body;

    if (
      typeof id === 'string' &&
      typeof name === 'string' &&
      typeof login === 'string' &&
      typeof password === 'string'
    ) {
      const result: IUser | null = await usersService.updateUser(
        new User({ id, name, login, password })
      );
      if (result) {
        res.json(User.toResponse(result));
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

router.route('/:id').delete(
  async (req: Request, res: Response): Promise<void> => {
    const { id }: RequestParams = req.params;
    const users: IUser[] = await usersService.getAllUsers();
    if (id) {
      const isExist: boolean = (await users).some((user) => user.id === id);
      if (isExist) {
        await usersService.deleteUser(id);
        res.status(204).json({
          message: 'The user has been deleted',
        });
      } else {
        res.status(404).json({
          message: 'User not found',
        });
      }
    } else {
      res.status(400).json({
        message: 'Bad request',
      });
    }
  }
);

export const userRouter = router;
