'use strict'

import express from 'express'
import router from './routes/routes.js'

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use('/api', router)

const gracefullShutdown = (message, code) => {
    console.log(`${chalk.white.bold.bgRed(' ERROR: ')} -> ${chalk.red(message)}: ${code}`)
}

process.on('exit', (code) => gracefullShutdown('About to exit with code: ', code))

export default server
