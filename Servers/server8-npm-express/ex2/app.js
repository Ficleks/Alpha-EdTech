const express = require('express');
const app = express();

const produto = [
    {
    "id": 1,
    "nome": "Produto A",
    }, 
    {
    "id": 3,
    "nome": "Produto B",
    }, 
    {
    "id": 6,
    "nome": "Produto C",
    },
    {
    "id": 3,
    "nome": "Produto D",
    }
]
app.get('/:id?', function(req, res) {
    const id = req.query.id;
    const p = produto.filter(p => p.id == id);
    res.send(p);
});
app.get('/', function(req, res) {
    res.send(produto);
});
app.listen(3000);