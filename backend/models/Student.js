// backend/models/Student.js
const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  appliedInternships: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Internship' }]
});

module.exports = mongoose.model('Student', StudentSchema);
