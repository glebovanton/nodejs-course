import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export interface IUser {
  id?: string;
  name: string;
  login: string;
  password?: string;
}

@Entity()
export class User {

  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name: string;

  @Column()
  login: string;

  @Column()
  password?: string;

  static toResponse(user: IUser): IUser {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
