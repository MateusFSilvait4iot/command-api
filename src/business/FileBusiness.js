import { resolve } from 'path'
import yaml from 'js-yaml'
import fs from 'fs'
import CustomError from '../helpers/customError.js'

class FileBusiness {
    async readYaml({ filePath }) {
        try {
            return yaml.load(fs.readFileSync(resolve(filePath), 'utf-8'))
        } catch (error) {
            throw new CustomError('Erro ao ler o arquivo!', 400, error)
        }
    }

    async createFile({ filePath, file }) {
        try {
            return fs.writeFileSync(resolve(filePath), file.buffer, 'utf-8')
        } catch(error) {
            throw new CustomError('Erro ao criar o arquivo!', 400, error)
        }
    }
}

export default new FileBusiness()