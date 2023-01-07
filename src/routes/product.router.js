'use strict'

import { Router } from 'express'
import {
    getProducts,
    getProduct,
    saveProduct,
    updateProduct,
    deleteProduct,
} from '../controllers/ProductController.js'

export const productRouter = Router()

productRouter.get('/', getProducts)
productRouter.get('/:productId', getProduct)
productRouter.post('', saveProduct)
productRouter.put('/:productId', updateProduct)
productRouter.delete('/:productId', deleteProduct)

