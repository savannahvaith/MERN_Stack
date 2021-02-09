const router = require('express').Router();
const {Todo} = require('../config/db');

// CREATE
router.post(`/create`, ({body}, res) => {
    const todo = new Todo(body);
    todo.save().then(result => {
        res.status(201).send(`${result.title} addedd successfully!`);
    }).catch(err => console.error(err));
});

// READ
router.get(`/getAll`, (req,res) => {
    Todo.find((err,result) => {
        if(err){
            console.error(err);
        }
        res.status(200).send(result);
    });
});

// READ ONE
router.get(`/get/:id`, (req,res) => {
    Todo.findById(req.params.id, (err,result) => {
        if(err){
            console.error(err);
        }
        res.status(200).send(result);
    });
});

// UPDATE
router.patch(`/update/:id`, (req,res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err,result) => {
        if(err){
            console.error(err);
        }
        res.status(202).send(result);
    });
});

// DELETE
router.delete(`/delete/:id`, (req,res) => {
    Todo.findByIdAndDelete(req.params.id, (err,result) => {
        if(err){
            console.error(err);
        };
        res.status(204).send(result);
    });
});

module.exports = router;