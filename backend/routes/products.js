const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
    Product.find()
        .then((products) => res.json(products))
        .catch(err => res.status(400).json('error: ' + err));
})

router.route('/:id').get((req, res) => {
    Product.findById(req.params.id)
        .then((product) => res.json(product))
        .catch((err) => res.status(400).json("error: " + err));
})

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const newProduct = new Product({
        name,
        price
    });
    newProduct.save()
        .then(() => res.json("Product added!"))
        .catch(err => res.status(400).json('error: ' + err));
})

router.route('/update/:id').post((req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            product.name = req.body.name;
            product.price = req.body.price;

            product.save()
                .then(() => res.json("Product updated!"))
                .catch(err => res.status(400).json("error: " + err));
        })
})

router.route('/sold/:id').put((req, res) => {
    Product.findByIdAndUpdate(req.params.id)
        .then(product => {
            product.name = req.body.name + " SOLD";
            return product.save();
        })
        .then(() => res.json("Product sold!"))
        .catch(err => res.status(400).json("error: " + err));
})

router.route('/delete/:id').delete((req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(() => res.json("Product deleted!"))
        .catch(err => res.status(400).json("error: " + err));
})

module.exports = router;