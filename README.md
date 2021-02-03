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
