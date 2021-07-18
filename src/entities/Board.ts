import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IColumn } from 'src/interface/column.interface';

@Entity()
export class Board {
  @PrimaryGeneratedColumn('uuid')
  public id?: string;

  @Column()
  public title: string;

  @Column('simple-json')
  public columns: IColumn[];
}
