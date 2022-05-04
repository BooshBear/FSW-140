const express = require("express");
const app = express();
const morgan = require("morgan");

const PORT = 9000;

// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Connect to DB
const {Client} = require('pg')
const client = new Client({
    host:"localhost",
    user:"postgres",
    port:"9009",
    password:"BooshB3@r12",
    database:"avengers"
})
client.connect();

app.get('/marvel', (req, res)=>{
    client.query(`SELECT * FROM public.avengers LIMIT 10`, (err, result) =>{
        if(!err){
            res.send(result.rows)
        } else {
            console.log(err.message)
        }
    })
    client.end;
  });

// Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.status(400).send({ errMsg: err.message})
});

app.listen(PORT, () => {
    console.log(`The App is running at port ${PORT}`)
});