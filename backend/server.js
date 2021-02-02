// import express and cors
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.port || 1905; 


app.use(cors());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})