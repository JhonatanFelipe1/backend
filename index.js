const express = require('express');
const server = express();
const animals = require('./src/data/animals.json');

server.get('/animals', (req,res) => {
    return res.json(animals)
});

server.listen(3000, () => {
    console.log('Server ir running..')
});