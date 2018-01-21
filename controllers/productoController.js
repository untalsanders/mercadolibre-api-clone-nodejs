'use strict'

const Producto = require('../models/productoModel')

var getProducto = (req, res) => {
    let productoId = req.params.productoId
    Producto.findById(productoId, (err, producto) => {
        if (err) return res.status(500).send({
            message: `Ha ocurrido un error al realizar la petición: ${err}`
        })
        if (!producto) return res.status(404).send({
            message: `El producto no existe`
        })
        res.status(200).send({
            producto: producto
        })
        // res.status(200).send({ producto })
    })
}

var getAllProductos = (req, res) => {
    Producto.find({}, (err, productos) => {
        if (err) return res.status(500).send({
            message: `Ha ocurrido un error al procesar la peticion: ${err}`
        })
        if (!productos) return res.status(500).send({
            message: `No existen productos`
        })
        res.status(200).send({
            productos: productos
        })
        // res.status(200).send({ productos: productos[0] })
    })
}

var saveProducto = (req, res) => {
    console.log(`${req.method}: /api/producto`)
    console.log(req.body)

    let producto = new Producto()
    producto.nombre = req.body.nombre
    producto.foto = req.body.foto
    producto.precio = req.body.precio
    producto.categoria = req.body.categoria
    producto.descripcion = req.body.descripcion

    producto.save((err, productoStored) => {
        if (err) res.status(500).send({
            message: `Error al guardar en la base de datos: ${err}`
        })
        res.status(200).send({
            producto: productoStored
        })
    })
    console.log(req.body)
}

var updateProducto = (req, res) => {
    let productoId = req.params.productoId
    let updateBody = req.body
    Producto.findByIdAndUpdate(productoId, updateBody, (err, productoUpdated) => {
        if (err) res.status(500).send({
            message: `Error al actualizar producto: ${err}`
        })
        res.status(200).send({
            producto: productoUpdated
        })
    })
}

var deleteProducto = (req, res) => {
    let productoId = req.params.productoId
    Producto.findById(productoId, (err, producto) => {
        if (err) res.status(500).send({
            message: `Error al borrar producto de la base de datos: ${err}`
        })
        producto.remove(err => {
            if (err) res.status(500).send({
                message: `Error al borrar producto de la base de datos: ${err}`
            })
            res.status(200).send({
                message: `El producto ha sido borrado`
            })
        })
    })
}

module.exports = {
    getProducto,
    getAllProductos,
    saveProducto,
    updateProducto,
    deleteProducto
}
