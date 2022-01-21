const express = require('express');
const path = require('path')

const fs = require('fs');

const app = express();

app.get('/', function(req, res) {
    res.send(dataWorkers)
});

app.get('/birthday', function(req, res) {
    res.send(dataWorkers)
});

app.listen(3000);