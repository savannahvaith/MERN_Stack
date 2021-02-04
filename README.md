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
