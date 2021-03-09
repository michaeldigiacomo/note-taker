const { response } = require('express');
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

class Store {
    read() {
        return readFile('./db.json', 'utf8')
    }
    write(newNotes) {
        return writeFile('./db.json', 'utf8')
    }
    getNotes() {
        return this.read().then((response) => {
            return JSON.parse(response)
        })
    }
}

module.exports = new Store();