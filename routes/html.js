// Add dependancies: express, router, & path
const path = require('path');
const htmlRouter = require('express').Router();

// GET route for /notes
htmlRouter.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes"))
});

// GET route for index.html using *
htmlRouter.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// export 
module.exports = htmlRouter;