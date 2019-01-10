
// Controller Imports 

const taskController = require('./controllers/taskController');
const listController = require('./controllers/listController');
const routes = require('express-promise-router')()

// TASK

routes.post('/task/new', taskController.postCreateTask);
routes.delete('/task/all', taskController.deleteAllTasks);
routes.post('/task/:id', taskController.deleteTask);
routes.get('/task', taskController.getAllTasks);
routes.put('/task/update', taskController.updateChecked);
routes.put('/task/undo', taskController.undoCompleteTask);

// LIST

routes.post('/list/new', listController.postCreateList);
routes.get('/list/all', listController.getAllLists);


module.exports = routes;



