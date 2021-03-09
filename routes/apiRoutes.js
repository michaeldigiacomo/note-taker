// import items needed
const router = require('express').Router();
// const store = require('../db/store')
const fs = require('fs');
const path = require('path');

// make a GET request with all notes from the database

router.get('/notes', (req, res) => {
    let allNotes = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');
    allNotes = JSON.parse(allNotes)
    res.json(allNotes)
})

// create a post request

router.post('/notes', (req, res) => {
    let allNotes = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');
    allNotes = JSON.parse(allNotes)
    allNotes.push(req.body)
    allNotes = JSON.stringify(allNotes)
    fs.writeFileSync(path.join(__dirname, '../db/db.json'),allNotes, 'utf8');
    allNotes = JSON.parse(allNotes)
    res.json(allNotes)
})

// create a delete request

module.exports = router;