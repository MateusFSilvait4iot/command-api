import express from 'express'
import http from 'http'

import router from './routes.js'

const PORT = 3099

const app = express()
const server = http.createServer(app)

app.use(express.json())
app.use(router)

app.get('/', (request, response) => {
    response.json({ code: 200, message: "Server is running!" })
})

server.listen(PORT, (error) => {
    if (error) {
        console.error(`Something went worng: ${error}`)
    } else {
        console.info(`Server running on port ${PORT}`)
    }
})