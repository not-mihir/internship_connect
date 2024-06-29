// backend/models/Professor.js
const mongoose = require('mongoose');

const ProfessorSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  qualifications: String,
  internships: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Internship' }]
});

module.exports = mongoose.model('Professor', ProfessorSchema);
