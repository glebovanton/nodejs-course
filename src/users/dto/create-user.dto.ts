export interface IUser {
  id?: string;
  name: string;
  login: string;
  password?: string;
}

export class CreateUserDto {
  id?: string;

  name: string;

  login: string;

  password?: string;

  static toResponse(user: IUser): IUser {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
