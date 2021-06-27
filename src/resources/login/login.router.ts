import { FORBIDDEN, OK } from 'http-status-codes';
import * as express from 'express';
import { Request, Response } from 'express';
import { signToken } from './login.service';

const router = express.Router();

router.route('/').post(
  async (req: Request, res: Response): Promise<void> => {
    const { login, password } = req.body;
    const token = await signToken(login, password);
    if (!token) {
      res.status(FORBIDDEN).send('Incorrect login or password');
    } else {
      res.status(OK).json({
        token,
      });
    }
  }
);

export const loginRouter = router;
