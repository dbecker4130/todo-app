

// Controller Imports 

const taskController = require('./controllers/taskController');

const routes = require('express-promise-router')()

// TASK

routes.post('/task/new', taskController.postCreateTask);
routes.delete('/task/:taskID', taskController.deleteTask);
routes.get('/task', taskController.getAllTasks);

module.exports = routes;



