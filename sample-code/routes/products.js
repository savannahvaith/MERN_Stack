const router = require(`express`).Router();
const { Product } = require(`../config/db`);

// CREATE
router.post(`/create`, ({ body }, res) => {
    const prod = new Product(body);
    prod.save().then((result) => {
        res.status(201).send(`${result.name} addedd successfully!`);
    }).catch(err => console.error(err));
});

// READ
router.get(`/getAll`, (req, res) => {
    Product.find((err, prods) => {
        if (err) {
            // next(err);
            console.error(err);
        }
        res.send(prods);
    });
});

// READ ONE
router.get(`/get/:id`, (req, res) => {
    Product.findById(req.params.id, (err, prod) => {
        if (err) {
            next(err);
        }
        res.send(prod);
    });
});

// UPDATE
router.put(`/replace/:id`, (req, res) => {
    Product.findById(req.params.id, (err, result) => {
        if (err) {
            // next(err);
            console.error(err);
        }
        const prod = result; ;
        prod.name = req.query.name;
        prod.price = req.query.price;
        prod.onSale = req.query.onSale;
        prod.save().then(result => {
            res.status(202).send(`Successfully replaced`);
        }).catch(err => {
            console.error(err);
        })
    });
});

// UPDATE
router.patch(`/update/:id`, (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
        if (err) {
            console.error(err);
        }
        res.status(202).send(`Successfully updated`);
    })
});


// DELETE
router.delete(`/delete/:id`, (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err, result) => {
        if (err) {
            console.error(err);
        }
        res.status(204).send(result);
    })
});

module.exports = router; 