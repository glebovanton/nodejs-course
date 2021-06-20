import { IBoard } from './board.model';
import { deleteBoardInTasks } from '../tasks/task.memory.repository';

const BOARDS: IBoard[] | [] = [];

const getAllBoards = async (): Promise<IBoard[]> =>
  // TODO: mock implementation. should be replaced during task development
  BOARDS;

const postBoard = async (newBoard: IBoard): Promise<IBoard> => {
  // TODO: mock implementation. should be replaced during task development
  const boards: IBoard[] = BOARDS;
  boards.push(newBoard);
  return newBoard;
};

const getBoardById = async (id: string): Promise<IBoard | null> =>
  // TODO: mock implementation. should be replaced during task development
  BOARDS.find((board: IBoard) => board?.id === id) || null;

const updateBoard = async (newBoard: IBoard): Promise<IBoard | null> => {
  const { id } = newBoard;
  // TODO: mock implementation. should be replaced during task development
  const boardIndex: number = BOARDS.findIndex(
    (board: IBoard) => board?.id === id
  );
  if (boardIndex >= 0) {
    BOARDS[boardIndex] = newBoard;
    return BOARDS[boardIndex] || null;
  }
  return null;
};

const deleteBoard = async (boardId: string): Promise<boolean> => {
  // TODO: mock implementation. should be replaced during task development
  const boardIndex = BOARDS.findIndex((board: IBoard) => board?.id === boardId);
  if (boardIndex >= 0) {
    BOARDS.splice(boardIndex, 1);
    await deleteBoardInTasks(boardId);
    return true;
  }
  return false;
};

export { deleteBoard, getAllBoards, getBoardById, postBoard, updateBoard }