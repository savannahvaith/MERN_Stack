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
router.put(`/update`, (req,res) => {
    res.send(`Some update sent`);
});


// DELETE
router.delete(`/delete`, (req,res)=>{
    res.send(`Deleted some information`);
});

module.exports = router; 