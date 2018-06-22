const db = require('../models');

const taskController = {};

module.exports = {
    postCreateTask: async(req, res) => {
        console.log('taskController.postCreateTask()');

        const { desc } = req.body;

        if (!desc) return res.status(400).send('Must have a task description');

        const task = await new db.Task({
            desc
        }).save()

        return res.status(200).send(task);
    }
}