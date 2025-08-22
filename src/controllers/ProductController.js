'use strict'

import { ProductModel } from '../models/ProductModel.js'

export const getProducts = async (_, res) => {
  const products = await ProductModel.find()
  res.status(200).send({ status: 200, message: 'Products retrieved successfully.', data: products })
}

export const getProduct = async (req, res) => {
  const { productId } = req.params
  const product = await ProductModel.findById(productId)

  if (!product) {
    return res.status(404).send({ status: 404, message: 'The product does not exists.', data: null })
  }

  res.status(200).send({ status: 200, message: 'The product has been found.', data: product })
}

export const saveProduct = async (req, res) => {
  const productSaved = await ProductModel.insertOne(req.body)
  res.status(201).send({ message: 'The product has been created successfully.', data: productSaved })
}

export const updateProduct = async (req, res) => {
  const { productId } = req.params
  await ProductModel.updateOne({ _id: productId }, req.body)
  const productUpdated = await ProductModel.findById(productId)
  res.status(200).send({ status: 200, message: 'Product updated successfully.', data: productUpdated })
}

export const deleteProduct = async (req, res) => {
  const { productId } = req.params
  await ProductModel.deleteOne({ _id: productId })
  res.status(204).send()
}
