import { Router } from 'express'
import { readdirSync } from 'node:fs'
import { dirname } from 'node:path'
import { removeFileExtension } from '../utils/helpers.js'

const router = Router()
const PATH_ROUTES = dirname(`${import.meta.url}`).split('file://')[1]

readdirSync(PATH_ROUTES).filter(filename => {
  const routeFilename = removeFileExtension(filename)
  if (routeFilename !== 'index') {
    import(`./${routeFilename}.js`).then(routerModule => {
      router.use(`/${routeFilename}`, routerModule.router)
    })
  }
})

export { router }
