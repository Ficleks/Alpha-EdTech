const express = require('express');
const path = require('path')

const fs = require('fs');

const app = express();

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendStatus(200)
});


// app.get('/user/:id', function(req, res) {
//     const id = Number(req.params.id)
//     const p = cliente.filter(p => p.id === id);
//     res.send(p);
// });

app.get('/user/id', function(req, res) {
    const id = Number(req.query.id)
    const p = cliente.filter(p => p.id === id);
    res.Json(p);
});

app.get('/user/name', function(req, res) {
    const name = req.query.name;
    const p = cliente.filter(p => p.name === name);
    res.Json(p);
});

app.get('/user/email', function(req, res) {
    const email = req.query.email;
    const p = cliente.filter(p => p.email === email);
    res.json(p);
});

const cliente = [
	{
        "id": 1,
        "name": "Carlos",
        "email": "carlos@hotmail.com"
	}, {
	    "id": 2,
	    "name": "Caetano",
        "email": "caetano@hotmail.com"
 	}, {
 	    "id": 3,
 	    "name": "Caim",
        "email": "caim@hotmail.com"
 	}, {
 	    "id": 4, 
        "name": "Carvalho",
        "email": "carvalho@hotmail.com"
}]



app.listen(3000);