const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

// Get All Product
router.get('/', async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ message: error })
  }
})

// Add a Product
router.post('/', async (req, res) => {
  const newProduct = new Product(req.body)
  try {
    const savedProduct = await newProduct.save()
    res.status(200).json(savedProduct)
  } catch (error) {
    res.status(500).json({ message: error })
  }
})

// Get Spesific Product
router.get('/:productId', async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId)
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: error })
  }
})

// Update Spesific Product
router.patch('/:productId', async (req, res) => {
  try {
    const updatedProduct = await Product.updateOne(
      { _id: req.params.productId },
      {
        $set: {
          name: req.body.name,
          qty: req.body.qty,
          price: req.body.price
        }
      }
    )
    res.status(200).json(updatedProduct)
  } catch (error) {
    res.status(500).json({ message: error })
  }
})

// Delete Spesific Product
router.delete('/:productId', async (req, res) => {
  try {
    const deletedProduct = await Product.deleteOne({ _id: req.params.productId })
    res.status(200).json(deletedProduct)
  } catch (error) {
    res.status(500).json({ message: error })
  }
})

module.exports = router