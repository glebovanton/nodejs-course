const { v4: uuidv4 } = require('uuid');

/**
 * @typedef {Object} Column
 * @property {number} id The column's id
 * @property {string} title The column's title
 * @property {number} order The column's order
 */

class Board {
  /**
   * @param {number} id The board's id
   * @param {string} title The board's title
   * @param {Column[]} columns The board's columns
   */
  constructor({ id = uuidv4(), title = 'task', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
