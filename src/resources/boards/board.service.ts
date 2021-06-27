import { Board } from '../../entities/Board';
import * as boardsRepo from './board.memory.repository';

const getAllBoards = (): Promise<Board[]> => boardsRepo.getAllBoards();

const postBoard = (board: Board): Promise<Board> => boardsRepo.postBoard(board);

const getBoardById = (id: string): Promise<Board | null> =>
  boardsRepo.getBoardById(id);

const updateBoard = (board: Board): Promise<Board | null> =>
  boardsRepo.updateBoard(board);

const deleteBoard = (id: string): Promise<boolean> =>
  boardsRepo.deleteBoard(id);

export { deleteBoard, getAllBoards, getBoardById, postBoard, updateBoard };
