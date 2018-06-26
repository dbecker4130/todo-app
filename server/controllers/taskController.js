const Task = require('../models/task.js');

module.exports = {
    postCreateTask: async(req, res) => {
        console.log('taskController.postCreateTask()');

        const { desc } = req.body;

        if (!desc) return res.status(400).send('Must have a task description');

        const task = await new Task({
            ...req.body,
        }).save()

        return res.status(200).send(task);
    }
}