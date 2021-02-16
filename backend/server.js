// import express and cors
const express = require(`express`);
const cors = require(`cors`);
const app = express();
const port = process.env.port || 1905; 
const createError = require(`http-errors`);
app.use(cors());
app.use(express.json());


const todoRouter = require(`./routes/todo`);
const listRouter = require(`./routes/list`);
const {TODO_URL} = require(`./config/consts.json`);
const {LIST_URL} = require(`./config/consts.json`);

app.use(TODO_URL,todoRouter);
app.use(LIST_URL,listRouter);

// Error handling if anything fails
app.use((req,res,next) => {
    next(createError(404, 'Resource not found'));
});

app.use((err,req,res,next)=> {
    res.status(err.statusCode || 500).send(err.message || `Something went wrong!`);
});

const server = app.listen(port, () => {
    console.log(`Server started successfully on port ${server.address().port}`);
});

module.exports = server; 