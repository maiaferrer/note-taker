// Require Dependancies
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

// import modular routers for /api and /
// api route
const api = require("./routes/api");
app.use('/api', api);

// html route
const html = require("./routes/html");
app.use('/', html);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// server listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);