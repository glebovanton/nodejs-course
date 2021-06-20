import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

@Entity('Board')
export class Board {
  @PrimaryGeneratedColumn('increment')
  id?: string;

  @Column('varchar', { length: 25 })
  title: string;

  @Column('json', { nullable: true })
  columns: IColumn[];
}
