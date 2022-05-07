const express = require("express");
const app = express();
const morgan = require("morgan");
const client = require("./modules/db");
const queryRouter = require("./routes/queryRouter");

const PORT = 3001;

// Middleware
app.use(express.json());
app.use(morgan('dev'));

client.connect();
app.use('/marvel', queryRouter);

// Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.status(400).send({ errMsg: err.message})
});

app.listen(PORT, () => {
    console.log(`The App is running at port ${PORT}`);
});