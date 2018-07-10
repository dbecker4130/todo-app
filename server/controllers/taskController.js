const Task = require('../models/task.js');

module.exports = {
    // CREATE A TASK 
    postCreateTask: async(req, res) => {
        console.log('taskController.postCreateTask()');

        const { desc } = req.body;

        if (!desc) return res.status(400).send('Must have a task description');

        const task = await new Task({
            ...req.body,
        }).save()

        return res.status(200).send(task);
    },
    // GET ALL TASKS
    getAllTasks: async(req, res) => {
        console.log('taskController.getAllTasks()');

        const allTasks = await Task.find({})
        if (!allTasks) return res.status(404).send('Sorry, no tasks found');
        return res.status(200).send(allTasks);
    },
    // DELETE A TASK
    deleteTask: async(req, res) => {
        console.log('taskController.deleteTask()');
        const { _id } = req.body;
        console.log('REQ BODY', req.body)
        await Task.remove({ _id: _id })
        return res.status(204).json({ message: 'Successfully deleted task'})
    }
}