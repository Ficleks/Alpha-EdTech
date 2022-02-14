const express = require('express');
const path = require('path')

const fs = require('fs');

const app = express();
const cors = require('cors')
app.use(cors())

const dataWorkers = require("./modules/data/workers.js");
const numbers = require("./modules/ramal.js")

app.get('/', function(req, res) {
    res.send(dataWorkers)
});

app.get('/birthday', function(req, res) {
    res.send(dataWorkers)
});

app.get('/ramais', function(req, res) {
    res.send(numbers)
});

app.listen(3000);