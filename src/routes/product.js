'use strict'

import { Router } from 'express'
import { getProducts, getProduct, saveProduct, updateProduct, deleteProduct } from '../controllers/ProductController.js'

const router = Router()

router.get('/', getProducts)
router.get('/:productId', getProduct)
router.post('', saveProduct)
router.put('/:productId', updateProduct)
router.delete('/:productId', deleteProduct)

export { router }
