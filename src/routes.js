import express from 'express'

import CommandController from './controllers/CommandController.js'

const app = express.Router()

app.use('/execute', CommandController)

export default app