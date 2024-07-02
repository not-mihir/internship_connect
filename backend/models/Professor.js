const mongoose = require('mongoose');

const ProfessorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    qualifications: { type: String, required: true },
    specializations: { type: String, required: true },
    internships: [
        {
            title: { type: String, required: true }
        }
    ]
});

module.exports = mongoose.model('Professor', ProfessorSchema);
