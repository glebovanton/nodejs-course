import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { TaskColumn } from './Column';

export interface IBoard {
  id?: string;
  title: string;
  columns: TaskColumn[];
}

@Entity()
export class Board {
  @PrimaryGeneratedColumn('uuid')
  public id?: string;

  @Column()
  public title: string;

  @Column('simple-json')
  public columns: TaskColumn[];
}
