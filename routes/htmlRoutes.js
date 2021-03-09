// import items needed
const router = require('express').Router();
const path = require('path');

// make a GET request with all notes from the database

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

module.exports = router;