const express = require('express');
const app = express();
const db = require("./db/connection");
const bodyParser = require('body-parser');

const port = 3000;

app.listen(port, function(){
    console.log(`Running in port ${port}`);
});

// body Parser
app.use(bodyParser.urlencoded({extended: false}));

// DB connection
db.authenticate()
    .then(() => {
        console.log("Conectou ao Banco!");
    })
    .catch(err => {
        console.log("Ocorreu um erro ao conectar!", err);
    });


// Rotas
app.get('/', function(req, res) {
    res.send("Dados Inseridos!");
});


// Jobs Rotas
app.use("/jobs", require('./routes/jobs'));