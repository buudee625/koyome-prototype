const express = require('express');
const router = express.Router();
const eventCtrl = require('../../controllers/events');
const multer = require('multer');
const upload = multer();

/*---------- Public Routes ----------*/
router.get('/', eventCtrl.index);
router.post('/', upload.single('photo'), eventCtrl.create);
router.delete('/:id', eventCtrl.deleteEvent);

/*---------- Protected Routes ----------*/

module.exports = router;
