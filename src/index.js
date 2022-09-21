'use strict'

import chalk from 'chalk'
import server from './server.js'
import { HOST, PORT } from './config.js'
import './database.js'

server.listen(PORT, HOST, () => {
    console.info(
        `${chalk.white.bold.bgGreen(' SERVER ')} ${chalk.green('is running at')} ${chalk.blue('http://' + HOST + ':' + PORT)}`
    )
})
