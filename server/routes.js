

// Controller Imports 

const taskController = require('./controllers/taskController');

const routes = require('express-promise-router')()

// TASK

routes.post('/task/new', taskController.postCreateTask);
routes.post('/task/delete', taskController.deleteTask);
routes.get('/task', taskController.getAllTasks);

module.exports = routes;



