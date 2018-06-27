const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    desc: { type: String },
    createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Task', taskSchema);
