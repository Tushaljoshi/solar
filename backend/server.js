// === server.js ===
require('dotenv').config(); // ✅ Load environment variables first

const express = require('express');
const path = require('path');
const cors = require('cors');

const contactRoutes = require('./routes/contactRoutes');

const app = express();

// === Middleware ===
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For form submissions

// === Serve static frontend files ===
app.use(express.static(path.join(__dirname, '../frontend')));

// === API Routes ===
app.use('/api/contact', contactRoutes);

// === Fallback for SPA Routing (e.g., React/HTML5 History API) ===
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// === Global Error Handler (Optional but useful) ===
app.use((err, req, res, next) => {
  console.error('💥 Server Error:', err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// === Start Server ===
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
