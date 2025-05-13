const express = require('express');
const router = express.Router();
const { createReminder, getReminders } = require('../controllers/reminderController');

router.post('/reminders', createReminder);
router.get('/reminders', getReminders);

module.exports = router;
