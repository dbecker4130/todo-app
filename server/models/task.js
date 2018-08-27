const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    desc: { type: String },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
    checked: { type: Boolean }
});

module.exports = mongoose.model('Task', taskSchema);
