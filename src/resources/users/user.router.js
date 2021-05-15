const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAllUsers();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getUserById(id);

  if (typeof id === 'string') {
    // map user fields to exclude secret fields like "password"
    res.json(User.toResponse(user));
  } else {
    res.status(404).json({
      message: 'User not found',
    });
  }
});

router.route('/').post(async (req, res) => {
  const { name, login, password } = req.body;
  if (
    typeof name === 'string' &&
    typeof login === 'string' &&
    typeof password === 'string'
  ) {
    const result = await usersService.postUser(
      new User({
        name,
        login,
        password,
      })
    );
    res.status(201).json(User.toResponse(result));
  } else {
    res.status(400).json({
      message: 'Bad request',
    });
  }
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const { name, login, password } = req.body;
  // const users = await usersService.getAllUsers();
  // const isExist = users.some((user) => user.id === id);
  if (
    typeof id === 'string' &&
    typeof name === 'string' &&
    typeof login === 'string' &&
    typeof password === 'string'
  ) {
    const result = await usersService.updateUser({ id, name, login, password });
    res.json(User.toResponse(result));
  } else {
    res.status(400).json({
      message: 'Bad request',
    });
  }
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const users = await usersService.getAllUsers();
  const isExist = users.some((user) => user.id === id);
  if (isExist) {
    await usersService.deleteUser(id);
    res.status(204).json({
      message: 'The user has been deleted',
    });
  } else {
    res.status(404).json({
      message: 'User not found',
    });
  }
});

module.exports = router;
