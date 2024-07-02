const Professor = require('../models/Professor'); // Ensure this path is correct

exports.getProfessorById = async (req, res) => {
    try {
        const professor = await Professor.findById(req.params.id);
        if (!professor) {
            return res.status(404).json({ success: false, message: 'Professor not found' });
        }
        res.json(professor);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching professor' });
    }
};
