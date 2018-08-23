const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    desc: { type: String },
    extra: { type: String },
    createdAt: { type: Date, default: Date.now() },
    checked: { type: Boolean }
});

module.exports = mongoose.model('Task', taskSchema);
