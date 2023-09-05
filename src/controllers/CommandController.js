import { Router } from 'express'

import CommandBusiness from '../business/CommandBusiness.js'
import customResponse from '../helpers/customResponse.js'

const CommandController = Router()

CommandController.get('/', async (request, response) => {
    try {
        const command = request.query.command

        const result = await CommandBusiness.execute({ command })

        return customResponse({ response, code: 200, message: 'Comando executado com sucesso!', data: result })
    } catch (error) {
        return customResponse({ response, code: error?.code, message: error?.message, data: error?.data })
    }
})

export default CommandController