const mongoose = require('mongoose');

const calendarSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId },
  events: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
});

module.exports = mongoose.model('Calendar', calendarSchema);
