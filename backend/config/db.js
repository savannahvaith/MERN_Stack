const mongoose = require('mongoose');
const {Schema, model} = mongoose; 
const {DB_URL, DB_NAME} = require('./consts.json');

const todoSchema = new Schema({
    title: {
        type: String,
        required:true
    },
    description: String,
    completed: Boolean, 
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt:{
        type: Date
    }
});

const Todo = model('Todo',todoSchema);

mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`, {useNewUrlParser:true}, (err) => {
    if(err){
        console.error(err);
    }
    console.log(`Connected to DB Successfully!`);
});

module.exports = {"Todo" : Todo};