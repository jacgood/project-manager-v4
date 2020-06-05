const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId
  },
  ojective: {
      type: Schema.Types.ObjectId
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  dateModified: {
    type: Date,
    default: Date.now
  },
  dateDue: {
    type: Date,
  }
});

module.exports = mongoose.model('task', TaskSchema);