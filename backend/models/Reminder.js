const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  message: { type: String, required: true },
  reminderDate: { type: Date, required: true },
  reminderMethod: {
    type: String,
    enum: ['Email', 'SMS'],
    required: true
  }
});

module.exports = mongoose.model('Reminder', reminderSchema);
