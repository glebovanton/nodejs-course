const { v4: uuidv4 } = require('uuid');

class Task {
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
    id = uuidv4(),
    title = 'task',
    order = 0,
    description,
    userId,
    boardId,
    columnId,
  } = {}) {
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
  static toResponse(task) {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}

module.exports = Task;
