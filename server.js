// Require Dependancies
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3001;

// import modular routers for /api and /
// api route

// html route


// Middleware for parsing JSON and urlencoded form data



// server listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);