const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
  },
  client: {
    type: Schema.Types.ObjectId,
  },
  assignedBy: {
    type: Schema.Types.ObjectId,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  dateModified: {
    type: Date,
    default: Date.now,
  },
  dateDue: {
    type: Date,
  },
  objectives: [Schema.Types.ObjectId],
});

module.exports = mongoose.model('project', ProjectSchema);
