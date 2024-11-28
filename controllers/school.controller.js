const School = require('../models/school.model.js');

// Add a new school
exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;
  
  if (!name || !address || !latitude || !longitude) {
    return res.status(400).send({ message: 'All fields are required.' });
  }
  
  School.addSchool(name, address, latitude, longitude, (err, schoolId) => {
    if (err) {
      return res.status(500).send({ message: 'Error adding school.' });
    }
    res.status(200).send({ message: 'School added successfully', id: schoolId });
  });
};

// List all schools sorted by distance
exports.listSchools = (req, res) => {
  const { latitude, longitude } = req.query;
  
  if (!latitude || !longitude) {
    return res.status(400).send({ message: 'Latitude and longitude are required.' });
  }

  School.listSchools(latitude, longitude, (err, schools) => {
    if (err) {
      return res.status(500).send({ message: 'Error fetching schools.' });
    }
    res.status(200).send(schools);
  });
};
