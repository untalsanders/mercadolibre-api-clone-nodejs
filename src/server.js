'use strict'

import chalk from 'chalk'
import cors from 'cors'
import express, { json } from 'express'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'
import { router } from './routes/index.js'

const server = express()
const swaggerDocument = YAML.load('./openapi.yml')

server.use(json())
server.use(cors())

server.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
server.use(router)

function gracefullShutdown(message, code) {
    console.log(`${chalk.white.bold.bgRed(' ERROR: ')} -> ${chalk.red(message)}: ${code}`)
}

process.on('exit', code => gracefullShutdown('About to exit with code: ', code))

export default server
