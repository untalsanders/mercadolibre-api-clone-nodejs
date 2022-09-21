'use strict'

const moment = require('moment')
const config = require('./config')
const server = require('./server')
require('./database')

const dateNow = moment().format('YYYY/MM/DD HH:mm:ss Z')

server.listen(config.port, config.host, () => {
    console.info(`${dateNow} - API: Running on http://${config.host}:${config.port}`)
})
