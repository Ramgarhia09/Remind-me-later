const Reminder = require('../models/Reminder');

exports.createReminder = async (req, res) => {
  try {
    const { message, reminderDate, reminderMethod } = req.body;
    const reminder = await Reminder.create({ message, reminderDate, reminderMethod });
    res.status(201).json({ message: 'Reminder created!', reminder });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getReminders = async (req, res) => {
  try {
    const reminders = await Reminder.find().sort({ reminderDate: 1 });
    res.status(200).json(reminders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
