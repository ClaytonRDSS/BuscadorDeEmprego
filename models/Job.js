const Sequelise = require('sequelise');
const db = require('../db/connection');

const Job = db.define('Job', {
    title: {
        type: Sequelise.STRING,
    }, 
    description: {
        type: Sequelise.STRING,
    },
    Salário: {
        type: Sequelise.STRING,
    },
    resa: {
        type: Sequelise.STRING,
    },
    email: {
        type: Sequelise.STRING,
    },
    new: {
        type: Sequelise.INTERGE,
    },

});

module.exports = Job;