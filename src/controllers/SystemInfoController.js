import { Router } from 'express'

import SystemInfoBusiness from '../business/SystemInfoBusiness.js'
import customResponse from '../helpers/customResponse.js'

const SystemInfoController = Router()

SystemInfoController.get('/', async (request, response) => {
    try {
        const { requestInfo } = request.query

        const result = await SystemInfoBusiness.getInfo({ requestInfo })

        return customResponse({ response, code: 200, message: 'Informação do sistema encontrada com sucesso!', data: result })
    } catch (error) {
        return customResponse({ response, code: error.code, message: error.message, data: error.data })
    }
})

export default SystemInfoController