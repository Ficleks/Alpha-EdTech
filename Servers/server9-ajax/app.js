const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

const jsonObject = { "name" : "ex9"};

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

app.use(express.static('public'));

app.get('/', (req, res) => {
    const param = req.query.param;
    const id = req.query.id;
    const p = produto.filter(p => p.id == id);
    if (param === p) {
        res.send(`<html><input type="text" name="id" /><input type="button" value="Consultar" onclick="clicked()" /><br /><div id="result"><div/> 
        <script>function reqListener() {console.log(this.responseText);
        document.getElementById("result").innerHTML = this.responseText;
    };
        
        function clicked() {
            var oReq = new XMLHttpRequest();
            oReq.onload = reqListener;
            oReq.open("get", "/teste", true);
            oReq.send();
        }</script></html>`);
        return false;
    } else {
        fs.readFile("arquivo.txt", function (err, data) {
            res.setHeader("content-type", "text/html");
            res.send(data);
            return false;
        });
    }
})

app.get('/teste', (req, res) => {
    res.json(jsonObject);
    return false;
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})