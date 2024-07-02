const express = require('express');
const router = express.Router();
const { getProfessorById } = require('../controllers/professorController');

router.get('/:id', getProfessorById);

module.exports = router;
