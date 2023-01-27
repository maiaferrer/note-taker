// add dependencies - path, express, & fs
const path = require('path');
const fs = require('fs');
const router = require('express').Router();

// creates a random ID
const { v4: uuidv4 } = require('uuid');


// GET route should read the db.json file and return all saved notes at JSON
router.get('/notes', (req, res) => {
  fs.readFile('./db/db.json', (err, data) => {
    res.json(JSON.parse(data))
  })
});

// POST route should receive a new note to save on the request body
// add it to the db.json file
// then, return the new note to the client
router.post('/notes', (req, res) => {
    const {title , text} = req.body;

    if (title && text) {
        let newNote = {
            title,
            text,
            id: uuidv4(),
        };
    fs.readFile('./db/db.json', (err, file) => {
        if (err) {
            console.log(err)
            res.status(500).send()
            return;
        }
        const data = JSON.parse(file);
        data.push(newNote);
        // console.log(newNote)
    fs.writeFile('./db/db.json', JSON.stringify(data), (err, write) => {
        if (err) {
            console.log(err)
            res.status(500).send()
            return;
        }
        res.json(newNote)
    })
    })
}
else {
    res.status(400).send()
}
});

// DELETE should recieve a query parameter that contains the id of a note to delete
// read all notes from the db.json file
// remove note with given id property
// rewrite notes to the db.json
router.delete('/notes/:id', (req, res) => {
   const readDb = JSON.parse(fs.readFileSync('./db/db.json'))
   const userDeleteNote = readDb.filter((newNote) => req.params.id);
   if(userDeleteNote === -1) 
   return res.json({})
   readDb.splice(userDeleteNote, 1)
    
    fs.writeFile("./db/db.json", JSON.stringify(readDb), (err, del) => {
        if (err) {
            console.log(err)
            res.status(500).send()
            return;
        }
    });
    res.json(readDb);
});

// export 
module.exports = router;