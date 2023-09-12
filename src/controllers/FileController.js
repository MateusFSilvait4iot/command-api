import { Router } from 'express'
import FileBusiness from '../business/FileBusiness.js'
import customResponse from '../helpers/customResponse.js'
import upload from '../middlewares/uploader.js'

const FileController = Router()

FileController.get('/read', async (request, response) => {
    try {
        const { filePath } = request.query

        const result = await FileBusiness.read({ filePath })

        return customResponse({ response, code: 200, message: 'Arquivo encontrado com sucesso!', data: result })
    } catch (error) {
        return customResponse({ response, code: error.code, message: error.message, data: error.data })
    }
})

FileController.post('/create', upload.single('file'), async (request, response) => {
    try {
        const { filePath } = request.body
        const file = request.file

        const result = await FileBusiness.createFile({ filePath, file })

        return customResponse({ response, code: 200, message: 'Arquivo criado com sucesso!', data: result })
    } catch (error) {
        return customResponse({ response, code: error.code, message: error.message, data: error.data })
    }
})

export default FileController