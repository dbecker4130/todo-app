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
        console.log('taskController.deleteOneTask()');
        const { _id } = req.body;
        await Task.remove({ _id: _id })
        return res.status(204).json({ message: 'Successfully deleted task'})
    },
    // DELETE ALL TASKS
    deleteAllTasks: async(req, res) => {
        console.log('taskController.deleteAllTasks()');
        await Task.remove({ })
        return res.status(204).json({ message: 'all tasks deleted'})
    },
    // UPDATE A TASK
    updateChecked: async(req, res) => {
        console.log('taskController.updateChecked()');
        const { _id } = req.body
        const updatedTask = await Task.findByIdAndUpdate(_id, { checked: true })
        return res.status(200).send(updatedTask)
    },
    // UNDO COMPLETED TASK
    undoCompleteTask: async(req, res) => {
        console.log('taskController.undoCompleteTask()');
        const { _id } = req.body
        const undoneTask = await Task.findByIdAndUpdate(_id, { checked: false })
        return res.status(200).send(undoneTask)
    }

}