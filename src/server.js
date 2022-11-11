'use strict'

import chalk from 'chalk'
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'
import cors from 'cors'
import bodyParser from 'body-parser'
import api from './routes/api.js'

const server = express()
const swaggerDocument = YAML.load('./openapi.yml')

server.use(bodyParser.json())
server.use(cors())

server.use('/api/v1', api)
server.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

function gracefullShutdown(message, code) {
    console.log(
        `${chalk.white.bold.bgRed(' ERROR: ')} -> ${chalk.red(
            message
        )}: ${code}`
    )
}

process.on('exit', (code) => gracefullShutdown('About to exit with code: ', code))

export default server
