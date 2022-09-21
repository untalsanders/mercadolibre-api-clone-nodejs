'use strict'

import pkg from 'mongoose'
const { Schema, model } = pkg

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

export const Product = model('Product', productSchema)
