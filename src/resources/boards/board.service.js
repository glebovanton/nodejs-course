const boardsRepo = require('./board.memory.repository');

const deleteBoard = (id) => boardsRepo.deleteBoard(id);
const getAllBoards = () => boardsRepo.getAllBoards();
const postBoard = (board) => boardsRepo.postBoard(board);
const getBoardById = (id) => boardsRepo.getBoardById(id);
const updateBoard = (board) => boardsRepo.updateBoard(board);

module.exports = {
  deleteBoard,
  getAllBoards,
  getBoardById,
  postBoard,
  updateBoard,
};
