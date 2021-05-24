const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAllBoards();
  // map board fields to exclude secret fields like "password"
  res.json(boards);
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const board = await boardsService.getBoardById(id);
  if (board) {
    res.json(board);
  } else {
    res.status(404).json({
      message: 'Board not found',
    });
  }
});

router.route('/').post(async (req, res) => {
  const { title, columns } = req.body;
  const createdBoard = await boardsService.postBoard(
    new Board({
      title,
      columns,
    })
  );
  if (typeof title === 'string' && typeof columns === 'object') {
    res.status(201).json(createdBoard);
  } else {
    res.status(400).json({
      message: 'Bad request',
    });
  }
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const { title, columns } = req.body;
  const result = await boardsService.updateBoard({ id, title, columns });
  if (typeof title === 'string' && typeof columns === 'object' && result) {
    res.json(result);
  } else {
    res.status(400).json({
      message: 'Bad request',
    });
  }
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const result = await boardsService.deleteBoard(id);
  if (result) {
    res.status(204).json({
      message: 'The board has been deleted',
    });
  } else {
    res.status(404).json({
      message: 'Board not found',
    });
  }
});

module.exports = router;
