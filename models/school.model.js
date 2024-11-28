const db = require('../config/db.config.js');

// Add School to the database
exports.addSchool = (name, address, latitude, longitude, callback) => {
  const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
  db.query(query, [name, address, latitude, longitude], (err, res) => {
    if (err) {
      console.error('Error inserting school:', err);
      callback(err, null);
    } else {
      console.log('School added:', res.insertId);
      callback(null, res.insertId);
    }
  });
};

// List all schools, sorted by proximity
exports.listSchools = (latitude, longitude, callback) => {
  const query = 'SELECT *, ( 6371 * acos( cos( radians(?) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(?) ) + sin( radians(?) ) * sin( radians( latitude ) ) ) ) AS distance FROM schools ORDER BY distance ASC';
  db.query(query, [latitude, longitude, latitude], (err, res) => {
    if (err) {
      console.error('Error fetching schools:', err);
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};
