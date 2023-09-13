import express from 'express'

import CommandController from './controllers/CommandController.js'
import SystemInfoController from './controllers/SystemInfoController.js'
import FileController from './controllers/FileController.js'
import ensurePermissions from './middlewares/ensurePermissions.js'

const app = express.Router()

app.use(ensurePermissions)

app.use('/execute', CommandController)
app.use('/system-info', SystemInfoController)
app.use('/files', FileController)

export default app