import { ITask } from './task.model';

const TASKS: ITask[] = [];

const deleteUserInTasks = async (userId: string): Promise<void> => {
  // TODO: mock implementation. should be replaced during task development
  const selectedTasks = TASKS.filter((task: ITask) => task.userId === userId);
  selectedTasks.forEach((task: ITask) => {
    const currentTask = task;
    currentTask.userId = null;
  });
};

const deleteBoardInTasks = async (boardId: string): Promise<void> => {
  // TODO: mock implementation. should be replaced during task development
  const selectedTasks = TASKS.filter((task: ITask) => task.boardId === boardId);
  selectedTasks.forEach((task: ITask) => {
    const currentTask = task;
    currentTask.boardId = null;
  });
};

const getTasksByBoardId = async (boardId: string): Promise<ITask[]> =>
  // TODO: mock implementation. should be replaced during task development
  TASKS.filter((task: ITask) => task?.boardId === boardId) || [];

const postTask = async (task: ITask): Promise<ITask> => {
  // TODO: mock implementation. should be replaced during task development
  TASKS.push(task);
  return task;
};

const getTaskByBoardIdAndTaskId = async (
  boardId: string,
  taskId: string
): Promise<ITask | null> =>
  // TODO: mock implementation. should be replaced during task development
  TASKS.find(
    (task: ITask) => task?.boardId === boardId && task?.id === taskId
  ) || null;

const updateTask = async (task: ITask): Promise<ITask | null> => {
  // TODO: mock implementation. should be replaced during task development
  const {
    id,
    title,
    order,
    description,
    userId,
    boardId,
    columnId,
  }: ITask = task;
  const taskIndex: number = TASKS.findIndex(
    (cursorTask: ITask) => cursorTask?.boardId === boardId && cursorTask.id === id
  );
  if (taskIndex >= 0) {
    TASKS[taskIndex] = {
      ...TASKS[taskIndex],
      id,
      title,
      order,
      description,
      userId,
      boardId,
      columnId,
    };
    return TASKS[taskIndex] || null;
  }
  return null;
};

const deleteTask = async (
  boardId: string,
  taskId: string
): Promise<boolean> => {
  // TODO: mock implementation. should be replaced during task development
  const deleteCount = 1;
  const taskIndex: number = TASKS.findIndex(
    (task: ITask) => task?.boardId === boardId && task?.id === taskId
  );
  if (taskIndex >= 0) {
    TASKS.splice(taskIndex, deleteCount);
    return true;
  }
  return false;
};

export {
  deleteBoardInTasks,
  deleteUserInTasks,
  deleteTask,
  getTasksByBoardId,
  getTaskByBoardIdAndTaskId,
  postTask,
  updateTask,
};
