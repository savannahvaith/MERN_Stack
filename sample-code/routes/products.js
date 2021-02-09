const router = require(`express`).Router(); 
const {Product} = require(`../config/db`);

// CREATE
router.post(`/create`, ( req,res) => {
    const prod = new Product();
    prod.save().then((result) => {
        res.status(201).send(`${result.name} addedd successfully!`);
    }).catch(err => console.error(err));
});

// READ
router.get(`/getAll`, (req,res) => {
    Product.find((err, prods) => {
        if(err){
            next(err);
        }
        res.send(prods);
    });
});

// READ ONE
router.get(`/get/:id`, (req,res) => {
    Product.findById(req.params.id, (err, prod) => {
        if(err){
            next(err);
        }
        res.send(prod);
    });
});

// UPDATE
router.patch(`/update/:id`, (req,res) => {
    Product.findById(req.params.id, (err, prod) => {
        if(err){
            next(err);
        }
        const result = prod; 
        result.name = req.query.name; 
        result.price = req.query.price; 
        result.onSale = req.query.onSale;
        result.save((err) => {
            if(err){
                next(err);
            }
            res.status(202).send(`Successfully replaced`);
        });
    });
});


// DELETE
router.delete(`/delete`, (req,res)=>{
    res.send(`Deleted some information`);
});

module.exports = router; 