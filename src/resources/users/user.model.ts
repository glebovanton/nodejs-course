import { v4 as uuidv4 } from 'uuid';

export interface IUser {
  id?: number;
  name: string;
  login: string;
  password?: string;

}

export class User {
  id?: number;
  name: string;
  login: string;
  password?: string;
  /**
   * @param {number} id The user's id
   * @param {string} name The user's name
   * @param {string} login The user's login
   * @param {?string} password The user's password
   */
  constructor({
    id = Number.parseInt(uuidv4()),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * Returns user for response.
   * @param {User} user The user
   * @return {User} The user
   */
  static toResponse(user: IUser): IUser {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
