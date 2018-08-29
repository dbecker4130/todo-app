const mongoose = require('mongoose');
const { Schema } = mongoose;

const listSchema = new Schema({
    title: { type: String },
    createdAt: { type: Date, default: new Date },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'task' }]
});

module.exports = mongoose.model('List', listSchema);