import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { User } from "./User";
import { Board } from "./Board";

export interface ITask {
  id?: string;
  title: string;
  order: number;
  description: string;
  userId?: string | null;
  boardId?: string | null;
  columnId?: string | null;
}

@Entity()
export class Task {
  @Column({ type: 'varchar', nullable: true })
  boardId?: string | null;

  @Column({ type: 'varchar', nullable: true })
  columnId?: string | null;

  @Column()
  description: string;

  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  order: number;

  @Column()
  title: string;

  @Column({ type: 'varchar', nullable: true })
  userId?: string | null;

  @ManyToOne(() => User, { onDelete: 'SET NULL' })
  user: User | null;

  @ManyToOne(() => Board, { onDelete: 'CASCADE' })
  board: Board | null;

  static toResponse(task: ITask): ITask {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}
