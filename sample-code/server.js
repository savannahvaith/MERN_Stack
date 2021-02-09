const express = require('express');
const app = express(); 
const productRouter = require("./routes/products");
const {PRODUCT_URL} = require('./config/config.json');
// const {trainerUrl} = require("./config/config.json");
// const trainerRoutes = require("./routes/trainers");

app.use(express.json());

// Middleware
// const logger = (req, res, next) => {
// 	console.log(new Date());
// 	next();
// }

// app.use(logger);

app.use(PRODUCT_URL,productRouter);
// app.use(trainerUrl, trainerRoutes);

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