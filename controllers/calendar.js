const Event = require('../models/event');

async function create(req, res) {
  console.log(req.body, '<--req.body: create()/ctrl/event');
  const event = Event(req.body);
  await event.save();
  res.sendStatus(201);
}

async function index(req, res) {
  const event = await Event.find({});
  console.log(event, '<--event: index()/ctrl/event');
  res.send(event);
}

module.exports = {
  index,
  create,
};
