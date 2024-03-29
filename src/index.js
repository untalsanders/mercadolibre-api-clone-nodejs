'use strict'

import chalk from 'chalk'
import server from './server.js'
import config from './config.js'
import './database.js'

server.listen(config.port, config.host, () => {
    console.info(
        `${chalk.white.bold.bgGreen(' SERVER ')} ${chalk.green('is running at')} ${chalk.blue(
            'http://' + config.host + ':' + config.port
        )}`
    )
})
