const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 10000;

// Serve static files from frontend folder
app.use(express.static(path.join(__dirname, 'frontend')));

// Fallback to index.html for any unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
