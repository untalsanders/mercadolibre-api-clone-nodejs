'use strict'

import mongoose from 'mongoose'
const { Schema, model } = mongoose

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  category: {
    type: String,
    required: true,
    enum: ['computers', 'phones', 'accesories'],
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, defaul: Date.now },
  updatedAt: { type: Date, defaul: Date.now },
})

export const ProductModel = model('Product', productSchema)
