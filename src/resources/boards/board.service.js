const boardsRepo = require('./board.memory.repository');

/**
 * Returns all boards
 *
 * @async
 * @function getAllBoards
 * @returns {Promise.<Board[]>} array of boards
 */
const getAllBoards = () => boardsRepo.getAllBoards();

/**
 * Creates board
 *
 * @async
 * @function postBoard
 * @param {Board} board board
 * @returns {Promise.<Board>} added board
 */
const postBoard = (board) => boardsRepo.postBoard(board);

/**
 * Returns board by board ID
 *
 * @async
 * @function getBoardById
 * @param {number} boardId board ID
 * @returns {Promise.<?Board>} board
 */
const getBoardById = (id) => boardsRepo.getBoardById(id);

/**
 * Updates board by board ID and returs updated board
 *
 * @async
 * @function updateBoard
 * @param {Board} newBoard updated board
 * @returns {Promise.<?Board>} board
 */
const updateBoard = (board) => boardsRepo.updateBoard(board);

/**
 * Deletes board by board ID
 *
 * @async
 * @function deleteBoard
 * @param {number} id board ID
 * @returns {Promise.<boolean>} if board is deleted
 */
const deleteBoard = (id) => boardsRepo.deleteBoard(id);

module.exports = {
  deleteBoard,
  getAllBoards,
  getBoardById,
  postBoard,
  updateBoard,
};
