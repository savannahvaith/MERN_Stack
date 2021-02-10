const router = require('express').Router();
const { List } = require('../config/db');

// CREATE
router.post(`/create`, ({ body }, res) => {
    const todo = new List(body);
    todo.save().then(result => {
        res.status(201).send(`${result.title} addedd successfully!`);
    }).catch(err => console.error(err));
});

// READ
router.get(`/getAll`, (req, res) => {
    List.find((err, result) => {
        if (err) {
            console.error(err);
        }
        res.status(200).send(result);
    });
});

// READ ONE
router.get(`/get/:id`, (req, res) => {
    List.findById(req.params.id, (err, result) => {
        if (err) {
            console.error(err);
        }
        res.status(200).send(result);
    });
});

// UPDATE
router.patch(`/update/:id`, (req, res) => {
    List.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
        if (err) {
            console.error(err);
        }
        res.status(202).send(result);
    });
});

// DELETE
router.delete(`/delete/:id`, (req, res) => {
    List.findByIdAndDelete(req.params.id, (err, result) => {
        if (err) {
            console.error(err);
        };
        res.status(204).send(result);
    });
});

module.exports = router;