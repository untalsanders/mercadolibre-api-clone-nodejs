'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = Schema({
    name: String,
    photo: String,
    price: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ['computers', 'phones', 'accesories'],
    },
    description: String,
    createdAt: { type: Date },
    updatedAt: { type: Date },
})

module.exports = mongoose.model('Product', productSchema)
