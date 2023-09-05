import { execSync } from 'child_process'

import CustomError from '../helpers/customError.js'

class CommandBusiness {
    async execute({ command }) {
        if (!command) throw new CustomError('Comando não enviado!', 400)

        const result = execSync(command, (error, stdout, stderr) => {
            const err = stderr || error

            if (err) {
                console.error(err)
                throw new CustomError('Erro ao executar o comando!', 400, err)
            }
        }).toString('utf-8')

        return result
    }
}

export default new CommandBusiness()