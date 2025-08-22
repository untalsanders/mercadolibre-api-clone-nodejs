'use strict'

import chalk from 'chalk'
import mongoose from 'mongoose'
import config from './config.js'

const { engine, host, port, user, pass, name } = config.database
const url = `${engine}://${user}:${pass}@${host}:${port}/${engine === 'mongodb' ? '?authMechanism=SCRAM-SHA-256' : ''}`
const options = { dbName: name }

const { connect, connection } = mongoose
mongoose.set('strictQuery', false)

await connect(url, options)
  .then(() => console.log(`${chalk.black.bold.bgWhite(' DB ')} ${chalk.green(` Connection has been successfully! `)}`))
  .catch(err => console.log(`${chalk.white.bold.bgRed(' ERROR ')} in initial connection -> ${chalk.red(err.message)}`))

if (config.env !== 'production') {
  connection.on('error', err => console.error(err))
}
