const router = require('express').Router();
const { List } = require('../config/db');

// CREATE
router.post(`/create`, ({ body }, res,next) => {
    const todo = new List(body);
    todo.save().then(result => {
        res.status(201).send(`${result.title} added successfully!`);
    }).catch(err => next(err));
});

// READ
router.get(`/getAll`, (req, res,next) => {
    List.find((err, result) => {
        if (err) {
            next(err);
        }
        res.status(200).send(result);
    });
});

// READ ONE
router.get(`/get/:id`, (req, res,next) => {
    List.findById(req.params.id, (err, result) => {
        if (err) {
            next(err);
        }
        res.status(200).send(result);
    });
});

// UPDATE
router.patch(`/update/:id`, (req, res,next) => {
    List.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
        if (err) {
            next(err);
        }
        res.status(202).send(result);
    });
});

// DELETE
router.delete(`/delete/:id`, (req, res,next) => {
    List.findByIdAndDelete(req.params.id, (err, result) => {
        if (err) {
            next(err);
        };
        res.status(204).send(result);
    });
});

router.get("/hello", (req,res,next) => {
    res.status(200).send("hello");
})

module.exports = router;