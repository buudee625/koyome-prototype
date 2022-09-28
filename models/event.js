const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId },
});

const eventSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    start: {
      type: Date,
      required: true,
      default: Date.now,
    },
    end: {
      type: Date,
      required: true,
      default: Date.now,
    },
    poster: String,
    eventUrl: String,
    description: String,
    likes: [likesSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Event', eventSchema);
