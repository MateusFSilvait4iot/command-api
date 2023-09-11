import { Router } from 'express'
import FileBusiness from '../business/FileBusiness.js'

const FileController = Router()

FileController.get('/read-yaml', async (request, response) => {
    try {
        const { filePath } = request.query

        const result = await FileBusiness.readYaml({ filePath })

        return customResponse({ response, code: 200, message: 'Arquivo encontrado com sucesso!', data: result })
    } catch (error) {
        return customResponse({ response, code: error.code, message: error.message, data: error.data })
    }
})

FileController.get('/create', async (request, response) => {
    try {
        const { filePath, file } = request.query

        const result = await FileBusiness.createFile({ filePath, file })

        return customResponse({ response, code: 200, message: 'Arquivo criado com sucesso!', data: result })
    } catch (error) {
        return customResponse({ response, code: error.code, message: error.message, data: error.data })
    }
})

export default FileController