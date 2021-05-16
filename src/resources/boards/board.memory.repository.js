const { deleteBoardInTasks } = require('../tasks/task.memory.repository');

const BOARDS = [];

const deleteBoard = async (boardId) => {
  // TODO: mock implementation. should be replaced during task development
  const boardIndex = BOARDS.findIndex((board) => board && board.id === boardId);
  if (boardIndex >= 0) {
    BOARDS.splice(boardIndex, 1);
    await deleteBoardInTasks(boardId);
    return BOARDS;
  }
  return false;
};

const getAllBoards = async () =>
  // TODO: mock implementation. should be replaced during task development
  BOARDS;

const getBoardById = async (id) =>
  // TODO: mock implementation. should be replaced during task development
  BOARDS.find((board) => board && board.id === id);
const postBoard = async (board) => {
  // TODO: mock implementation. should be replaced during task development
  BOARDS.push(board);
  return board;
};

const updateBoard = async (newBoard) => {
  const { id } = newBoard;
  // TODO: mock implementation. should be replaced during task development
  const boardIndex = BOARDS.findIndex((board) => board && board.id === id);
  if (boardIndex >= 0) {
    BOARDS[boardIndex] = newBoard;
    return BOARDS[boardIndex];
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
