const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
const db = require("./db/connection");
const bodyParser = require('body-parser');

const port = 3000;

app.listen(port, function(){
    console.log(`Running in port ${port}`);
});

// body Parser
app.use(bodyParser.urlencoded({extended: false}));

// handle bars
//diretório base da aplicação.
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('views engine', 'handlebars');

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