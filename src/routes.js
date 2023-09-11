import express from 'express'

import CommandController from './controllers/CommandController.js'
import SystemInfoController from './controllers/SystemInfoController.js'

const app = express.Router()

app.use('/execute', CommandController)
app.use('/system-info', SystemInfoController)

export default app