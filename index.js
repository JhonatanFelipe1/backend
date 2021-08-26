const express = require('express');
const server = express();
const animals = require('./src/data/animals.json');
const animal = require('./src/data/animal.json');

server.get('/animals', (req,res) => {
    return res.json(animals)
});

server.get('/animal', (req,res) => {
    return res.json(animal)
});

server.listen(3000, () => {
    console.log('Server ir running..')
});