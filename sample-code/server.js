const express = require('express');
const app = express(); 
const mongoose = require('mongoose');

const productRouter = require("./routes/products");

// Middleware
const logger = (req, res, next) => {
	console.log(new Date());
	next();
}

app.use(logger);

app.use("/prod",productRouter);

// ! Route example - Moved to products.js:
// app.get("/hello", (req,res) => {
// 	res.send("Who dat");
// });

// app.get("/",logger,(req,res) => {
// 	res.send("Hello,world");
// });

const server = app.listen(5019, () => {
	console.log(`Server listening on port ${server.address().port}`);
});