// import express and cors
const express = require(`express`);
const cors = require(`cors`);
const app = express();
const port = process.env.port || 1905; 

app.use(cors());

const todoRouter = require(`./routes/todo`);
const {TODO_URL} = require(`./config/consts.json`);

app.use(express.json());
app.use(TODO_URL,todoRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
