const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const taskSchema = new Schema({
    desc: { type: String },
    createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Task', taskSchema);
