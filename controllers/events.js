const Event = require('../models/event');
const S3 = require('aws-sdk/clients/s3');
const s3 = new S3();
const { v4: uuidv4 } = require('uuid');
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;

async function create(req, res) {
  console.log(req.body, '<--req.body: create()/ctrl/event');
  const key = `koyome/events/${uuidv4()}-${req.file.originalname}`;
  const params = { Bucket: BUCKET_NAME, Key: key, Body: req.file.buffer };
  s3.upload(params, async function (err, data) {
    console.log(err, '<---err from AWS call in create()!');
    console.log(req.body, '<---req.body');
    if (err)
      return res.status(400).json({ err: 'Check Terminal for AWS erro' });
    try {
      const event = await Event.create({
        user: req.user,
        title: req.body.title,
        start: req.body.start,
        end: req.body.end,
        poster: data.Location,
        eventUrl: req.body.eventUrl,
        description: req.body.description,
      });
      res.status(201).json({ data: event });
    } catch (err) {
      res.status(400).json({ err });
    }
  });
}

async function index(req, res) {
  try {
    const events = await Event.find({}).populate('user').exec();
    // console.log(events, '<--event: index()/ctrl/event');
    res.status(200).json({ data: events });
  } catch (err) {
    res.status(400).json({ err });
  }
}

async function show(req, res) {
  try {
    const event = await Event.findById(req.params.id).populate('user').exec();
    res.status(200).json({ data: event });
  } catch (err) {
    res.status(400).json({ err });
  }
}

async function deleteEvent(req, res) {
  try {
    const eventToDel = await Event.findById(req.params.id);
    console.log(eventToDel, '<< eventToDel from deleteEvent(): ctrl/events');
    eventToDel.remove({});
    console.log('1 Document removed');
    await eventToDel.save();
  } catch (err) {
    res.status(500).json(err);
    console.log(err, '<<< err from deleteEvent(): ctrl/events');
  }
}

module.exports = {
  index,
  show,
  create,
  deleteEvent,
};
