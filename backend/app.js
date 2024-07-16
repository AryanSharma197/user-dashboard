const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const analyticsRouter = require('./routes/analytics');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/social_media_analytics'; // Replace with your MongoDB URI

mongoose.connect(mongoURI);

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.use('/api/analytics', analyticsRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
