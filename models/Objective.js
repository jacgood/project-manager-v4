const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectiveSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId
  },
  project: {
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
  },
  tasks: [
    Schema.Types.ObjectId
  ]
});

module.exports = mongoose.model('objective', ObjectiveSchema);