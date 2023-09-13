import 'dotenv/config'
import bcrypt from 'bcrypt'

const apiKey = process.env.API_KEY

const ensurePermissions = async (request, response, next) => {

    try {
        if (!request.headers['x-api-key']) return response.status(401).json({ message: 'Não autorizado!' })

        const passedApiKey = request.headers['x-api-key'] || ''
        const checkApikey = bcrypt.compareSync(passedApiKey, apiKey)
        if (!checkApikey) return response.status(401).json({ message: 'Não autorizado!' })

        return next()
    } catch (err) {
        return response.status(401).json({ message: 'Não autorizado!' })
    }
}

export default ensurePermissions