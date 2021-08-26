const express = require('express');
const server = express();
const animals = require('./src/data/animals.json');
const animal = require('./src/data/animal.json');

server.get('/animals', (req,res) => {
    return res.json(animals)
});

// Requisição de exemplo: http://localhost:3000/animal/2
server.get('/animal/:id', (req,res) => {
    const data = animals.data; // Pegando os dados do arquivo .json
    const id = req.params.id; // Obtendo o parâmetro "id" que foi passado no endereço da requisição

    // Percorrendo os dados utilizando uma estrutura de repetição
    for( let pos = 0; pos < data.length; pos++ ) {
        if( data[pos].id === id ) {
            return res.json(data[pos]);
        }; // Verificando se o "id" do atual item corresponde ao "id" que foi passado no parâmetro. Se for, retornará o animal.
    };

    return res.json({ data: null }); // Caso contrário, retornará null
});

server.listen(3000, () => {
    console.log('Server ir running..')
});