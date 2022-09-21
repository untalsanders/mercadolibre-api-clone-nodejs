'use strict'

const { Router } = require('express')
const router = Router()
const {
    deleteProduct,
    getAllProducts,
    getProduct,
    saveProduct,
    updateProduct,
} = require('../controllers/ProductController')

router.get('/products', getAllProducts)
router.get('/products/:productId', getProduct)
router.post('/products', saveProduct)
router.put('/products/:productId', updateProduct)
router.delete('/products/:productId', deleteProduct)

module.exports = router
