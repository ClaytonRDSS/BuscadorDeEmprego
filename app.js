const express = require('express');
const app = express();

const db = require("./db/connection");

const port = 3000;



app.get('/', function(req, res) {
    res.send("Hello, world2!");
});

// DB connection
db.authenticate()
    .then(() => {
        console.log("Conectou ao Banco!");
    })
    .catch(err => {
        console.log("Ocorreu um erro ao conectar!", err);
    });


// Rotas
app.listen(port, function(){
    console.log(`Running in port ${port}`);
});