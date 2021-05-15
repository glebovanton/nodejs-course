const TASKS = [];

const deleteTask = async (id) => {
    // TODO: mock implementation. should be replaced during task development
    const taskIndex = TASKS.findIndex((task) => task && task.id === id);
    if (taskIndex >= 0) {
        delete TASKS[taskIndex];
        return true;
    } 
        return false;
    
};

const getAll = async () =>
    // TODO: mock implementation. should be replaced during task development
    TASKS;
const postTask = async (task) =>
    // TODO: mock implementation. should be replaced during task development
    TASKS.push(task);
const getTaskById = async (id) =>
    // TODO: mock implementation. should be replaced during task development
    TASKS.find((task) => task && task.id === id);
const updateTask = async (newTask) => {
    // TODO: mock implementation. should be replaced during task development
    const taskIndex = TASKS.findIndex((task) => task && task.id === newTask.id);
    if (taskIndex >= 0) {
        TASKS[taskIndex] = newTask;
        return TASKS[taskIndex];
    } 
        return false;
    
};

module.exports = { deleteTask, getAll, getTaskById, postTask, updateTask };
