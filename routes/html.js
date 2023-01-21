// Add dependancies: express, router, & path
const path = require('path');
const router = require('express').Router();

// GET route for /notes
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"))
});

// GET route for index.html using *
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// export 
module.exports = router;