import { resolve } from 'path'
import yaml from 'js-yaml'
import fs from 'fs'
import CustomError from '../helpers/customError.js'

const yamlExtensions = ['.yaml', '.yml']

class FileBusiness {
    async read({ filePath }) {
        try {
            const extenstionFile = filePath.substring(filePath.lastIndexOf('.'))
            const readFile = fs.readFileSync(resolve(filePath), 'utf-8')

            if (yamlExtensions.includes(extenstionFile)) {
                return yaml.load(readFile)
            }

            return readFile

        } catch (error) {
            throw new CustomError('Erro ao ler o arquivo!', 400, error)
        }
    }

    async create({ filePath, file }) {
        try {
            return fs.writeFileSync(resolve(filePath), file.buffer, 'utf-8')
        } catch(error) {
            throw new CustomError('Erro ao criar o arquivo!', 400, error)
        }
    }
}

export default new FileBusiness()