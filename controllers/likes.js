const Event = require('../models/event');

module.exports = {
  create,
  deleteLike,
};

async function create(req, res) {
  try {
    const event = await Event.findById(req.params.id);
    event.likes.push({ username: req.user.username, userId: req.user._id });
    await event.save();
    res.status(201).json({ data: 'like added' });
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

async function deleteLike(req, res) {
  try {
    const event = await Event.findOne({
      'likes._id': req.params.id,
      'likes.username': req.user.username,
    });
    event.likes.remove(req.params.id);
    await event.save();
    res.json({ data: 'like removed' });
  } catch (err) {
    res.status(400).json({ error: err });
  }
}
