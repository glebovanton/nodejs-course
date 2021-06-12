import { v4 as uuidv4 } from 'uuid';

export interface IColumn {
  id?: string;
  title: string;
  order: number;
}

export interface IBoard {
  id?: string;
  title: string;
  columns: IColumn[];
}

/**
 * @typedef {Object} Column
 * @property {number} id The column's id
 * @property {string} title The column's title
 * @property {number} order The column's order
 */

export class Board implements IBoard {
  id?: string;

  title: string;

  columns: IColumn[];

  /**
   * @param {number} id The board's id
   * @param {string} title The board's title
   * @param {Column[]} columns The board's columns
   */
  constructor({
    id = uuidv4(),
    title = 'task',
    columns = [],
  }: IBoard) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}
