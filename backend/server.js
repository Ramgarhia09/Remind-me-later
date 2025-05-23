const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const reminderRoutes = require('./routes/reminderRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api', reminderRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
