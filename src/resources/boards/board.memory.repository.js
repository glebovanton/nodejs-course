const { deleteBoardInTasks } = require('../tasks/task.memory.repository');

const BOARDS = [];

/**
 * Returns all boards
 *
 * @async
 * @function getAllBoards
 * @returns {Promise.<Board[]>} array of boards
 */
const getAllBoards = async () =>
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
const postBoard = async (board) => {
  // TODO: mock implementation. should be replaced during task development
  BOARDS.push(board);
  return board;
};

/**
 * Returns board by board ID
 *
 * @async
 * @function getBoardById
 * @param {number} boardId board ID
 * @returns {Promise.<?Board>} board
 */
const getBoardById = async (id) =>
  // TODO: mock implementation. should be replaced during task development
  BOARDS.find((board) => board && board.id === id) || null;

/**
 * Updates board by board ID and returs updated board
 *
 * @async
 * @function updateBoard
 * @param {Board} newBoard updated board
 * @returns {Promise.<?Board>} board
 */
const updateBoard = async (newBoard) => {
  const { id } = newBoard;
  // TODO: mock implementation. should be replaced during task development
  const boardIndex = BOARDS.findIndex((board) => board && board.id === id);
  if (boardIndex >= 0) {
    BOARDS[boardIndex] = newBoard;
    return BOARDS[boardIndex];
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
const deleteBoard = async (boardId) => {
  // TODO: mock implementation. should be replaced during task development
  const boardIndex = BOARDS.findIndex((board) => board && board.id === boardId);
  if (boardIndex >= 0) {
    BOARDS.splice(boardIndex, 1);
    await deleteBoardInTasks(boardId);
    return true;
  }
  return false;
};

module.exports = {
  deleteBoard,
  getAllBoards,
  getBoardById,
  postBoard,
  updateBoard,
};
