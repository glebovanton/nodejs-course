const { v4: uuidv4 } = require('uuid')

class Task {
    constructor({
                    id = uuidv4(),
                    title = 'task',
                    order = 0
                } = {}) {
        this.id = id;
        this.title = title;
        this.columns = {
            title,
            order
        }
    }
}

module.exports = Task;