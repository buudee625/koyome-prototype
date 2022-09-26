const mongoose = require('mongoose');

const commentSchema = mongoose.Schema(
  {
    content: String,
    userId: { type: mongoose.Schema.Types.ObjectId },
  },
  {
    timestamps: true,
  }
);

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
    comments: [commentSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Event', eventSchema);
