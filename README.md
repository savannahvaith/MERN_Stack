# Learning MERN

This repository will be used for understanding the MERN Stack.

Switch through the different branches to get an indepth understanding of each element

## Express

`Express.js` is a web framework that is very minimalist.
By itself it doesn't so much, its main purpose is to implement the middleware into a project.

## Installation

Run `npm install express` - to install the framework into your project.

Once you've installed express into your application, you can start using it in your Node App.

## How does it work?

First, we need to import the package into the application.

Create a `server.js` file

Import express using the `require` method

`const express = require('express');`

Next, we need to call the variable, and initialise the express application.

`const app = express()`

Finally, to communicate with the application, we need to get the application to listen on a specific port.

`app.listen(5019);`

If you don't specify a port then it will automatically assign a open port to the application - which might be useful for testing or automation.

After you have specified the port, you can pass a callback as the second parameter which we can then log to the user what port the application is running on...

```js
const server = app.listen(5019, () => {
    console.log(`Server successfully started on port: ${server.address().port}`);
});
```

## Handling Requests

Express comes pre-equipped with functionality for dealing with requests.

Requests have two major components that we are interested in, namely - the path and the method.

The *Path* is the location the request will be sent to, and the *method* is the type of the request.

`app.get('/hello', (req,res) => console.log('Hello world!'));`

### GET

Get requests are used to fetch data, to listen for information we use the `.get()` function.

`app.get('/read',(req,res) => console.log('fetch'));`

### POST

POST requests are used to create data, to listen for a POST request, use the `.post()` function.

`app.post('/create', (req,res) => console.log('create'));`

### PUT

PUT requests are used to *replace* data.

`app.put('/replace', (req,res) => console.log('replace'));`

### PATCH

PATCH requests are used for *partial* updates.

`app.patch('/update', (req,res) => console.log('update'));`

### DELETE

DELETE requests are used to delete data.

`app.delete('/delete', (req,res) => console.log('delete'));`

## Request Variable

In all of the above examples, the callbacks take a `req` variable.
This is an objet that represents the received request, and ca be used to view sent data and request meta data such as cookies and headers.

We can receive data in three different ways:

### URL Parameters

To use URL parameters in express, the must be declared in the path using a `:` then access via the `req.params` object.

```js
app.delete('/delete/:id', (req,res) => {
    console.log(req.params.id);
});
```

### Query Parameters

Query parameters are appended to the end of a URL and take a very particular format.

Query parameters start with a `?`

Each parameter takes a **key=value**

Parameters are separated by a **&**

For example, if we had this object:

```js
{
    "id":1,
    "make":"Audi",
    "model":"RS7"
}
```

and we wanted to update this object, we would need to update the `make` and `model`, which wuold look something like:

`/update/1?make=Merc&model=C`

Query parameters can be accessed from the 'req.query' object

```js
app.put("/replace/:id", (req,res) => {
    const id = req.params.id; 
    const make = req.query.make; 
    const model = req.query.model;
})
```

### Request Body

```js
app.patch("/update/:id", (req,res) => {
    const id = req.params.id; 
    const body = req.body; 
})

```

### Response Variable

The `res` object is used to control the response that we send to a request.

`res.send()` - send the response with any data passed into this function.
If you don't send a response, the next request will hang!

To modify the earlier example:

```js
app.get("hello",(req,res) => console.log("Hello world"));
```

```js
app.get("hello",(req,res) =>{
    res.send("Hello world");
});
```

`res.status()` - by default responses will have status codes. By default, successful responses will have 200 OK - we need to use this to communicate errors and all.

Default:

```js
app.get('/hello',(req,res) => {
    res.status(200).send('Hello, world');
});
```

Error:

```js
app.get('/error',(req,res) => {
    res.status(500).send('Mistakes are made');
});
```

## Middleware

Middleware is software that facilitates communication between two different techs (i.e. db and an app).
Often provides extra functionality to the software it is placed between.

Middleware in express is just a function - it should have a familiar structure `req,res,next`

```js
app.use((req,res,next) => {
    // some logic
    next();
})
```

### Next()

This is a handler function that calls the next piece of middleware in the chain.

Every middleware function should either terminate with `res.send()` or `next()` - else the request will hang.

### Creating middleware

Middleware is just a function, creating middleware is as simple as making a function that follows the convention then executing it.

```js
const logger = (req,res,next) => {
    console.log(new Date());
    next(); 
}

app.use(logger);
```

Now, whenever a route further down is hit this function will be called first, log the date then hand over to the next function in the chain.

### Nesting middleware

To apply middleware to some routes - we can do this by nesting the middleware

```js
app.get("/",logger,(req,res) => {
    res.send("Hello World");
});
```

### Common middleware

`cors` - used to disable restrictions on *Cross origin resource sharing*

```js
const cors = require("cors"); 
app.use(cors);
```

`body-parser` - allows for the parsing of request bodies into JS objects.
Comes with several body parsers but json is probably the most powerful.

```js
const bodyParser = require('body-parser');

app.user(bodyParser);
```

## Error handling

From time to time, we are going to face issues with out requests. When things go wrong it is important to know where we went wrong.

Before we can handle an error we need to create it.
Errors can be created like this:

```js
const err = new Error("a message here"); 
```

`Error` is a built in object. The constructor takes in a message.

Once we have an error, we have to handle it
In order to handle it, we will first need to pass the error to the error handling middleware.

```js
app.get('/error', (req,res,next) => {
    const err = new Error("a message here");
    next(err);
});
```

The second is to simply throw an error - behind the scenes Express will pass the error on to the error handler for you.

```js
app.get("/error",(req,res,next) => {
    throw new Error("useful message");
})
```

### Error handling middleware

Normally Express middleware has three parameters (req, res and next), error handling middleware differs by having four parameters - err, req, res and next.

When an error is thrown, using either method, the next piece of middleware with an err parameter is called.

```js
app.get('/error', (req, res, next) => {
    const err = new Error('Useful error message');
    next(err);
});

const errorLogger = (err, req, res, next) => {
    console.log(err.stack);
    next(err);
}
app.use(errorLogger);

const sendError = (err, req, res) => {
    res.status(500).send(err.message);
}
app.use(sendError);

```

## Router

So far, we have added routes directly to our app variable.

Although okay, we should utilise the methods that are available to us.

Router is provided with the Express package, and can be imported into a module using `require()`

`const router = require('express').Router();`

This will create a router object form the express object.

Express Router uses **exactly** the same function that we saw earlier.

```js
router.get(path, callback);
router.put(path, callback);
router.post(path, callback);
router.patch(path, callback);
router.delete(path, callback);
```

Routes should live in their own folder - we need to seperate logic for different entities.

For instance, if we had a products example:

```js
const router = require('express').Router(); 
router.get('/get',(req,res) => { 
    // .. 
}); 

// post
// put
// patch
// delete
```

we need to export all of these functions to our `server.js`, to do so, we will export the routes and import into `server.js`

at the end of the file in the above code, we will add:

```js
module.exports = router; 
```

In our `server.js`:

```js
const productRoutes = require("./routes/products.js");

app.use(productRoutes);
```

### Base Paths

When adding routes to our `app` we can specify the base path, this path will be prepended to the paths specified in the router.

If we added "products" as the base routes to the above code, the output would be the following:

```js
app.use("/products", productRoutes);

// products/get
// products/create
// products/update
// products/delete
```

## Mongoose

Mongoose is a MongoDB object modelling library, written in JS.
IT provides a simple API to work with MongoDB Database.
It allows for interaction with the DB Directly without having to use SQL, or a query language.

### Mongoose Installation

`npm install mongoose --save`

Import using require

`const mongoose = require('mongoose');`

### Connecting to MongoDB

Connect using `mongoose.connect(uri,options`);

This connects using mongoose default connection:

`mongoose.connect('mongodb://localhost:2017/example', {useNewUrlParser:true});`

We can connect to multiple databases by creating a new connection using the same format.

Different connections can use different settings and can be connected to different databases:

`const conn2 = mongoose.createConnection('mongodb://localhost:27017/example2',{urlNewUrlParser:true});`

To check whether the connection was successful - use a callback or a promise:

```js
mongoose.connect(uri,options){
    function(err){
        if(err){
            // handle error
        }else{
            // connection ready
        }
    }
}
```

### Schemas

Schemas define the structure of your collections, and the shape of the documents within.

A schema is a configuration object for a model.

A `SchemaType` is a configuration object for an individual property.
It says what type a given path should have and what is valid for that path.
Standard types include:

* String
* Boolean
* Date
* etc

[Documentation](https://mongoosejs.com/docs/schematypes.html)

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String, 
    price: String, 
    location: [{
        aisle: Number,
        shelf: Number
    }],
    dateAdded:{
        type: Date,
        default: Date.now
    }, 
    onSale: Boolean
});
```

### Validation

Validation can be used to control what data is allowed in the schema.

Validation is declared when defining a schema:

```js
const productSchema = new Schema({ 
    name: {
        type:String,
        required: true,
        minLength:2
    },
    price: String, 
    location: [{
        aisle: {
            type: Number,
            min: [1, 'Minimum is 1'],
            max: 20
        },
        shelf: Number
    }],
    // ...
});
```

### Models

Models are constructors compiled from schema definitions.

They are responsible for creating, and reading documents from the database.

Call `mongoose.model(name,schema)` to compile the model.
The name argument is the name of the collection the model is for.

Mongoose automatically looks for the plural, lowercase version of this name

```js
const productSchema = new Schema({ /* implementation*/})
const product = mongoose.model("product",productSchema);
```

Mongoose will look for a collection called products.

### Documents

A document represents a one-to-one mapping to a document as stored in MongoDB.

`Model` and `Document` are distinct classes in Mongoose.

The model class is a subclass of the documen class.

A document is an instnace of its model.

### Create

New documents can be created by calling a model constructor.

`let newDoc = new MyModel({example:'data'});`

Saving a document is simple:

`newDoc.save().then(() => console.log('Saved!'));`

### Read

Using `Model.find()` will get an array of documents that matches the query.

```js
let Product = mongoose.model('Product', productSchema);

Product.find(                   // find all from product
    { 'onSale': true },         // where onSale = true
    'name price',               // select name, price
    (err, prods) => {           // callback when complete / error
        if (err) {
            console.error('An error occurred:', err);
        } else {
            console.log('Products on sale:');
            prods.forEach((prod) => console.log(prod.name, prod.price));
        }
    }
);
```

### Update

Updating a document works similarly.

Mongoose tracks changes you make to documents and generates the update operators automatically.

Calling `save()` on a modified document will update the document in the database.

```js
prod.onSale = true;

// await will wait for a promise.
await prod.save();
```

### Delete

Documents can be removed in a number of ways:

`Model.deleteOne()` – Delete a single document that matches a query.

`Model.deleteMany()` – Delete multiple documents that match a query.

The returned promise / callback resolves to an object containing:

`ok` – 1 if no error occurred.

`n` – Number of documents deleted.

`deletedCount` – Same as `n`.
