'use strict'

const express = require('express')
const productoCtrl = require('../controllers/productoController')
const api = express.Router()

api.get('/productos', productoCtrl.getAllProductos)
api.get('/productos/:productoId', productoCtrl.getProducto)
api.post('/productos', productoCtrl.saveProducto)
api.put('/productos/:productoId', productoCtrl.updateProducto)
api.delete('/productos/:productoId', productoCtrl.deleteProducto)

module.exports = api
