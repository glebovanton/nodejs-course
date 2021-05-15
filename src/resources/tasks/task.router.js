const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
    const tasks = await tasksService.getAll();
    // map task fields to exclude secret fields like "password"
    res.json(tasks);
});

router.route('/').post(async (req, res) => {
    const { title, columns } = req.body;
    await tasksService.postTask(
        new Task({
            title,
            columns,
        })
    );
    if (typeof title === 'string' && typeof columns === 'object') {
        res.status(201).json({
            message: 'Task added successfully!',
        });
    } else {
        res.status(400).json({
            message: 'Bad request',
        });
    }
});

router.route('/:id').get(async (req, res) => {
    const { id } = req.params;
    const task = await tasksService.getTaskById(id);
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({
            message: 'Task not found',
        });
    }
});

router.route('/:id').put(async (req, res) => {
    const { id } = req.params;
    const { title, columns } = req.body;
    const result = await tasksService.updateTask({ id, title, columns });
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
    const result = await tasksService.deleteTask(id);
    if (result) {
        res.status(204).json({
            message: 'The task has been deleted',
        });
    } else {
        res.status(404).json({
            message: 'Task not found',
        });
    }
});

module.exports = router;
