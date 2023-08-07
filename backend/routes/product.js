const router = require('express').Router();
let Product = require('../models/product.model');

//used in simpletolist
router.route('/').get((req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json('Error: ' + err));
});

//used in createtask3
router.route('/add').post(async (req, res) => {
  const product = req.body.product;
  const price = req.body.price;
  // create a new Activity object
  const newProduct = await new Product({
    product,
    price
  });

  console.log(newProduct);
  // save the new object (newProduct)
  newProduct
    .save()
    .then(() => res.json('Product added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

//used in edittask1
router.route('/:id').get((req, res) => {
  console.log('just id' + req.params.id);
  Product.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json('Error: ' + err));
});

//used in simpletolist
router.route('/delete/:id').delete(async (req, res) => {
  console.log('delete logged');
  await Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

//used in edittask1
router.route('/update/:id').post(async (req, res) => {
  console.log(req.params.id);
  await Product.findById(req.params.id)
    .then((productforedit) => {
      productforedit.product = req.body.product;
      productforedit.price = req.body.price;//new added

      productforedit
        .save()
        .then(() => res.json('Product updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

//new added sold function
router.route('/sold/:id').put((req, res) => {
  Product.findByIdAndUpdate(req.params.id)
    .then(product => {
      product.product = req.body.product + " SOLD";
      return product.save();
    })
    .then(() => res.json("Product sold!"))
    .catch(err => res.status(400).json("error: " + err));
})

module.exports = router;
