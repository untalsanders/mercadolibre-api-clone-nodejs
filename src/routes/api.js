'use strict'

import { Router } from 'express'
import {
    getProducts,
    getProduct,
    saveProduct,
    updateProduct,
    deleteProduct,
} from '../controllers/ProductController.js'

const api = Router()

api.get('/products', getProducts)
api.get('/products/:productId', getProduct)
api.post('/products', saveProduct)
api.put('/products/:productId', updateProduct)
api.delete('/products/:productId', deleteProduct)

export default api
