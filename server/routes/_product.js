const express = require('express');
const {join} = require("path");
const {readFileSync} = require("fs");
const router = express.Router();

const product = join(__dirname, '../datas/product.json'); // Adjust the path accordingly
const productData = readFileSync(product, 'utf-8');
const products = JSON.parse(productData);

router.get('/', async function (req, res, next) {
  try {
    res.json(products);
  } catch (error) {
    console.log(error);
    return next(error);
  }
});

router.get('/:productId', (req, res) => {
  const productId = req.params.productId;
  const user = products.find(u => u.id === productId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});


module.exports = router; // Export the router
