// backend/routes/professor.js
const express = require('express');
const Professor = require('../models/Professor');
const Internship = require('../models/Internship');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/add-internship', auth, async (req, res) => {
  try {
    const { title, description } = req.body;
    const professor = await Professor.findById(req.user.id);

    const newInternship = new Internship({
      title,
      description,
      professor: professor._id
    });

    const internship = await newInternship.save();
    professor.internships.push(internship._id);
    await professor.save();

    res.json(internship);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/profile', auth, async (req, res) => {
  try {
    const professor = await Professor.findById(req.user.id).populate('internships');
    res.json(professor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// More routes for accepting/rejecting applications

module.exports = router;
