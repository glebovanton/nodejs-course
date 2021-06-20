import { IBoard } from './board.model';
import * as boardsRepo from './board.memory.repository'

const getAllBoards = (): Promise<IBoard[]> => boardsRepo.getAllBoards();

const postBoard = (board: IBoard): Promise<IBoard> => boardsRepo.postBoard(board);

const getBoardById = (id: string): Promise<IBoard | null> =>
  boardsRepo.getBoardById(id);

const updateBoard = (board: IBoard): Promise<IBoard | null> =>
  boardsRepo.updateBoard(board);

const deleteBoard = (id: string): Promise<boolean> =>
  boardsRepo.deleteBoard(id);

export {
  deleteBoard,
  getAllBoards,
  getBoardById,
  postBoard,
  updateBoard,
};
