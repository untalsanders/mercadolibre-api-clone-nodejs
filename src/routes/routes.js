'use strict'

import { Router } from 'express'
import { getProducts, getProduct, saveProduct, updateProduct, deleteProduct } from '../controllers/ProductController.js'

const router = Router()

router.get('/products', getProducts)
router.get('/products/:productId', getProduct)
router.post('/products', saveProduct)
router.put('/products/:productId', updateProduct)
router.delete('/products/:productId', deleteProduct)

export default router
