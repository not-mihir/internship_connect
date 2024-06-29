// backend/routes/student.js
const express = require('express');
const Student = require('../models/Student');
const Internship = require('../models/Internship');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/apply/:internshipId', auth, async (req, res) => {
  try {
    const student = await Student.findById(req.user.id);
    if (student.appliedInternships.length > 0) {
      return res.status(400).json({ msg: 'You have already applied to an internship' });
    }

    const internship = await Internship.findById(req.params.internshipId);
    internship.applicants.push(student._id);
    await internship.save();

    student.appliedInternships.push(internship._id);
    await student.save();

    res.json(internship);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/profile', auth, async (req, res) => {
  try {
    const student = await Student.findById(req.user.id).populate('appliedInternships');
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
