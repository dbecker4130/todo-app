const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const taskSchema = new Schema({
    desc: { type: String },
    createdAt: { type: Date, default: Date.now() }
});

const Task = mongoose.model('Task', taskSchema);
export default Task;