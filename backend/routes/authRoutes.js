// /backend/routes/authRoutes.js

import express from 'express';

const router = express.Router();

// Dummy login route (replace with actual logic later)
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'user' && password === 'password') {
    res.send('Login successful!');
  } else {
    res.status(401).send('Invalid username or password');
  }
});

export default router;
