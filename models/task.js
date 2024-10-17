const TaskStatus = require('./task_status');

class Task {
    static id = 0;
    
    constructor(name, description = '', status = TaskStatus.PENDING) {
        this.id = Task.id++;
        this.update({ name, description, status });
    }

    validate_name(name) {
        return name.length >= 1;
    }

    validate_description(description) {
        return description.length >= 5;
    }

    validate_status(status) {
        return Object.values(TaskStatus).includes(status);
    }

    validate_args(name, description, status) {
        return (
            (!name || this.validate_name(name)) &&
            (!description || this.validate_description(description)) &&
            (!status || this.validate_status(status))
        );
    }

    update({ name, description, status }) {
        if (!this.validate_args(name, description, status)) return false;

        this.name = name ? name : this.name;
        this.description = description ? description : this.description;
        this.status = status ? status : this.status;

        return true;
    }
}

module.exports = Task;
