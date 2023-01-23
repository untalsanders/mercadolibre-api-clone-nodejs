import { Router } from 'express'
import { readdirSync } from 'node:fs'
import { dirname } from 'node:path'
import { removeExtensionFilename } from '../utils/helpers.js'

const router = Router()
const PATH_ROUTES = dirname(`${import.meta.url}`).split('file://')[1]

readdirSync(PATH_ROUTES).filter(filename => {
    const routeFilename = removeExtensionFilename(filename)
    if (routeFilename != 'index') {
        console.log(routeFilename)
        import(`./${routeFilename}.js`).then(routerModule => {
            console.log(`Se ha cargado la ruta: /${routeFilename}`)
            router.use(`/${routeFilename}`, routerModule.router)
        })
    }
})

export { router }
