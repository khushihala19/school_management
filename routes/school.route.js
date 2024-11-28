const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/school.controller.js');

// Route to add a new school
router.post('/addSchool', schoolController.addSchool);

// Route to list all schools
router.get('/listSchools', schoolController.listSchools);

module.exports = router;
