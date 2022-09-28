const Event = require('../models/event');
const S3 = require('aws-sdk/clients/s3');
const s3 = new S3();
const { v4: uuidv4 } = require('uuid');
const { post } = require('../routes/api/users');
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
  const event = await Event.find({});
  console.log(event, '<--event: index()/ctrl/event');
  res.send(event);
}

module.exports = {
  index,
  create,
};
