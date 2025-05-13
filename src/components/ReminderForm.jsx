import React, { useState } from 'react';

const ReminderForm = () => {
  const [form, setForm] = useState({
    message: '',
    reminderDate: '',
    reminderMethod: 'Email',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/reminders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const result = await response.json();
    alert(result.message || 'Reminder created!');
    setForm({ message: '', reminderDate: '', reminderMethod: 'Email' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/30 backdrop-blur-lg border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl p-8 w-full max-w-md transition-all duration-300"
      >
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">🕒 Remind Me Later</h2>

        <label className="block mb-5 group">
          <span className="text-gray-700 font-semibold">Message</span>
          <input
            type="text"
            name="message"
            placeholder="Type your reminder..."
            value={form.message}
            onChange={handleChange}
            required
            className="mt-1 p-3 w-full rounded-xl bg-white/70 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 group-hover:scale-[1.01]"
          />
        </label>

        <label className="block mb-5 group">
          <span className="text-gray-700 font-semibold">Date & Time</span>
          <input
            type="datetime-local"
            name="reminderDate"
            value={form.reminderDate}
            onChange={handleChange}
            required
            className="mt-1 p-3 w-full rounded-xl bg-white/70 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300 group-hover:scale-[1.01]"
          />
        </label>

        <label className="block mb-6 group">
          <span className="text-gray-700 font-semibold">Reminder Method</span>
          <select
            name="reminderMethod"
            value={form.reminderMethod}
            onChange={handleChange}
            className="mt-1 p-3 w-full rounded-xl bg-white/70 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 group-hover:scale-[1.01]"
          >
            <option value="Email">Email</option>
            <option value="SMS">SMS</option>
          </select>
        </label>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 text-white font-bold py-3 rounded-xl shadow-xl transform transition-all duration-300 hover:-translate-y-1 active:scale-95"
        >
          💾 Save Reminder
        </button>
      </form>
    </div>
  );
};

export default ReminderForm;
