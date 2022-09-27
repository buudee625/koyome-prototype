const express = require('express');
const router = express.Router();
const calendarCtrl = require('../../controllers/calendar');

/*---------- Public Routes ----------*/
router.get('/events', calendarCtrl.index);
router.post('/create-event', calendarCtrl.create);

/*---------- Protected Routes ----------*/

module.exports = router;
