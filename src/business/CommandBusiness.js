import { execSync } from 'child_process'
import { resolve } from 'path'
import yaml from 'js-yaml'
import fs from 'fs'

class CommandBusiness {
    async execute({ command, readYamlFilePath }) {
        if (command) {
            const result = execSync(command, (error, stdout, stderr) => {
                const err = stderr || error
    
                if (err) {
                    console.error(err)
                    throw new CustomError('Erro ao executar o comando!', 400, err)
                }
            }).toString('utf-8')
    
            return result
        }

        if (readYamlFilePath) {
            try {
                return yaml.load(fs.readFileSync(resolve(readYamlFilePath), 'utf-8'))
            } catch (error) {
                console.log(error)
            }
        }
    }
}

export default new CommandBusiness()