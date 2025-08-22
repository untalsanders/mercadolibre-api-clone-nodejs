'use strict'

import { Router } from 'express'
import { deleteProduct, getProduct, getProducts, saveProduct, updateProduct } from '../controllers/ProductController.js'

const router = Router()

router.get('/', getProducts)
router.get('/:productId', getProduct)
router.post('', saveProduct)
router.put('/:productId', updateProduct)
router.delete('/:productId', deleteProduct)

export { router }
