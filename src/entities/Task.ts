import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export interface ITask {
  id?: string;
  title: string;
  order: number;
  description: string;
  userId?: string | null;
  boardId?: string | null;
  columnId?: string | null;
}

@Entity('Task')
export class Task {
  @Column('varchar', { length: 25, nullable: true })
  boardId?: string | null;

  @Column('varchar', { length: 25, nullable: true })
  columnId?: string | null;

  @Column('varchar', { length: 25 })
  description: string;

  @PrimaryGeneratedColumn('increment')
  id?: string;

  @Column('int')
  order: number;

  @Column('varchar', { length: 25 })
  title: string;

  @Column('varchar', { length: 25, nullable: true })
  userId?: string | null;

  static toResponse(task: ITask): ITask {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}
