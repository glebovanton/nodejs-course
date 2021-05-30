import { v4 as uuidv4 } from 'uuid';

export interface ITask {
  id?: number;
  title: string;
  order: number;
  description: string;
  userId?: number | null;
  boardId?: number | null;
  columnId?: number | null;
}

export class Task implements ITask {
  boardId?: number | null;
  columnId?: number | null;
  description: string;
  id?: number;
  order: number;
  title: string;
  userId?: number | null;
  /**
   * @param {number} id The task's id
   * @param {string} title The task's title
   * @param {number} order The task's order
   * @param {string} description The task's description
   * @param {number} userId The task's user ID
   * @param {number} boardId The task's board ID
   * @param {number} columnId The task's column ID
   */
  constructor({
    id = Number.parseInt(uuidv4()),
    title = 'task',
    order = 0,
    description = '',
    userId,
    boardId = null,
    columnId = null,
  }: ITask) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  /**
   * Returns task for response.
   * @param {Task} task The task
   * @return {Task} The task
   */
  static toResponse(task: ITask): ITask {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}
