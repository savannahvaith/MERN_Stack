const express = require('express');

const app = express(); 

const server = app.listen(5019, () => {
    console.log(`Server listening on port ${server.address().port}`);
});
