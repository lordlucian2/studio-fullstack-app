const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { pool, initDb } = require('./db');
const cloudinary = require('cloudinary').v2;

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize Database
initDb();

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.get('/', (req, res) => {
  res.send('Candlelight Studio Backend is running!');
});

// Contact API
app.post('/api/contact', async (req, res) => {
  const { name, email, service, message } = req.body;
  try {
    await pool.query(
      'INSERT INTO contacts (name, email, service, message) VALUES ($1, $2, $3, $4)',
      [name, email, service, message]
    );
    res.status(201).json({ message: 'Contact request saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Projects API
app.get('/api/projects', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM projects ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

