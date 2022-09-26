const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId },
});

const eventSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    dateStart: {
      type: Date,
      required: true,
      default: Date.now,
    },
    dateEnd: {
      type: Date,
      required: true,
      default: Date.now,
    },
    timeStart: {
      type: Date,
      required: true,
      default: Date.now,
    },
    timeEnd: {
      type: Date,
      required: true,
      default: Date.now,
    },
    eventPhoto: String,
    eventUrl: String,
    description: String,
    likes: [likesSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Event', eventSchema);
