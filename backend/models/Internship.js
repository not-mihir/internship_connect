// backend/models/Internship.js
const mongoose = require('mongoose');

const InternshipSchema = new mongoose.Schema({
  title: String,
  description: String,
  professor: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' },
  applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  acceptedStudent: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' }
});

module.exports = mongoose.model('Internship', InternshipSchema);
