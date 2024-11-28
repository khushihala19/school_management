const express = require('express');
const bodyParser = require('body-parser');
const schoolRoutes = require('./routes/school.route.js');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use('/api', schoolRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
