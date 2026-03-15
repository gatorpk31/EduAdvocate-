require('dotenv').config();
const path = require('path');
const express = require('express');
const app = require('./index');

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('*', (req, res) => {
  if (!req.path.startsWith('/api/')) {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`PlanVocate dev server running on http://localhost:${PORT}`);
});
