
// Controller Imports 

const taskController = require('./controllers/taskController');
const routes = require('express-promise-router')()

// TASK

routes.post('/task/new', taskController.postCreateTask);
routes.delete('/task/all', taskController.deleteAllTasks);
routes.post('/task/:id', taskController.deleteTask);
routes.get('/task', taskController.getAllTasks);
routes.put('/task/update', taskController.updateChecked);
routes.put('/task/undo', taskController.undoCompleteTask);

module.exports = routes;



