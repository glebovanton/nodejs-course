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

export class Board implements IBoard {
  id?: string;

  title: string;

  columns: IColumn[];

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
