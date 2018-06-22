

// Controller Imports 

const taskController = require('./controllers/taskController');

const routes = require('express=promise-router')()

// TASK

routes.post('/task/new', taskController.postCreateTask);

export default routes;



