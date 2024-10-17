const Task = require('../models/task.js');
const TaskStatus = require('../models/task_status.js');

const tasks = [
    new Task('Shopping', 'Buy grocery items at 1 PM'),
    new Task('School Pickup', 'Pickup Ben at 5 PM'),
    new Task('Laundry', 'Wash Cloathes at 10 PM')
];

const index = (req, res) => {
    res.json(tasks);
};

const show = (req, res) => {
    const { id } = req.params;
    const task = tasks.find(task => task.id === parseInt(id));

    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ status: false, message: "Task not found" });
    }
};

const create = (req, res) => {
    const { name, description } = req.body;

    if (!name || name.length === 0) {
        return res.status(400).json({ status: false, message: "Name is required" });
    }

    const task = new Task(name, description);
    tasks.push(task);

    res.json({ status: true, message: "Task Added", task });
};

const update = (req, res) => {
    const { id } = req.params;
    const { name, description, status } = req.body;

    const task = tasks.find(task => task.id === parseInt(id));

    if (task) {
        if (task.update({ name, description, status })) {
            res.json({ status: true, message: "Task Updated", task });
        } else {
            res.status(400).json({ status: false, message: "Invalid task data" });
        }
    } else {
        res.status(404).json({ status: false, message: "Task not found" });
    }
};

const destroy = (req, res) => {
    const { id } = req.params;

    const index = tasks.findIndex(task => task.id === parseInt(id));

    if (index !== -1) {
        tasks.splice(index, 1);
        res.json({ status: true, message: "Task Destroyed" });
    } else {
        res.status(404).json({ status: false, message: "Task not found" });
    }
};

const taskStatus = (req, res) => {
    res.json(Object.keys(TaskStatus));
};

module.exports = {
    index,
    create,
    show,
    update,
    destroy,
    taskStatus
};
