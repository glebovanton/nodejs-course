const { v4: uuidv4 } = require('uuid');

class User {
  /**
   * @param {number} id The user's id
   * @param {string} name The user's name
   * @param {string} login The user's login
   * @param {?string} password The user's password
   */
  constructor({
    id = uuidv4(),
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
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
