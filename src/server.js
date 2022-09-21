'use strict'

const express = require('express')
const router = require('./routes/routes')
const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use('/api', router)

module.exports = server
