const {Client} = require('pg');
const client = new Client({
    host:"localhost",
    user:"postgres",
    port:"9009",
    password:"BooshB3@r12",
    database:"avengers"
});

module.exports = client;