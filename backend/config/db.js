const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { DB_URL, DB_NAME } = require('./consts.json');

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    completed: Boolean,
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Todo = model('Todo', todoSchema);


const listSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
   todo: [todoSchema]
});

const List = model('List', listSchema);

mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    }
    console.log(`Connected to DB Successfully!`);
});

module.exports = { "Todo": Todo, "List": List };