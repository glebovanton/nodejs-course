import { IBoard } from './board.model';
import { deleteBoardInTasks } from '../tasks/task.memory.repository';

const BOARDS: IBoard[] | [] = [];

/**
 * Returns all boards
 *
 * @async
 * @function getAllBoards
 * @returns {Promise.<Board[]>} array of boards
 */
const getAllBoards = async (): Promise<IBoard[]> =>
  // TODO: mock implementation. should be replaced during task development
  BOARDS;

/**
 * Creates board
 *
 * @async
 * @function postBoard
 * @param {Board} board board
 * @returns {Promise.<Board>} added board
 */
const postBoard = async (newBoard: IBoard): Promise<IBoard> => {
  // TODO: mock implementation. should be replaced during task development
  const boards: IBoard[] = BOARDS;
  boards.push(newBoard);
  return newBoard;
};

/**
 * Returns board by board ID
 *
 * @async
 * @function getBoardById
 * @param {number} boardId board ID
 * @returns {Promise.<?Board>} board
 */
const getBoardById = async (id: number): Promise<IBoard | null> =>
  // TODO: mock implementation. should be replaced during task development
  BOARDS.find((board: IBoard) => board?.id === id) || null;

/**
 * Updates board by board ID and returs updated board
 *
 * @async
 * @function updateBoard
 * @param {Board} newBoard updated board
 * @returns {Promise.<?Board>} board
 */
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

/**
 * Deletes board by board ID
 *
 * @async
 * @function deleteBoard
 * @param {number} id board ID
 * @returns {Promise.<boolean>} if board is deleted
 */
const deleteBoard = async (boardId: number): Promise<boolean> => {
  // TODO: mock implementation. should be replaced during task development
  const boardIndex = BOARDS.findIndex((board: IBoard) => board?.id === boardId);
  if (boardIndex >= 0) {
    BOARDS.splice(boardIndex, 1);
    await deleteBoardInTasks(boardId);
    return true;
  }
  return false;
};

export { deleteBoard, getAllBoards, getBoardById, postBoard, updateBoard };
