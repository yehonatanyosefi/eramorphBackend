const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const http = require('http').createServer(app)

// Express App Config
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.resolve(__dirname, 'public')))
} else {
	const corsOptions = {
		origin: ['http://localhost:5173', 'http://localhost:3000'],
		credentials: true,
	}
	app.use(cors(corsOptions))
}

const authRoutes = require('./api/auth/auth.routes')

app.use('/auth', authRoutes)

const logger = require('./services/logger.service')
const port = process.env.PORT || 3030
http.listen(port, () => {
	logger.info('Server is running on port: ' + port)
})
