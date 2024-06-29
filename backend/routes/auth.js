// backend/routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Professor = require('../models/Professor');
const Student = require('../models/Student');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { role, name, email, password, qualifications } = req.body;
  try {
    let user;
    if (role === 'professor') {
      user = new Professor({ name, email, password, qualifications });
    } else {
      user = new Student({ name, email, password });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  const { role, email, password } = req.body;
  try {
    let user;
    if (role === 'professor') {
      user = await Professor.findOne({ email });
    } else {
      user = await Student.findOne({ email });
    }

    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const payload = { user: { id: user.id, role } };
    jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
