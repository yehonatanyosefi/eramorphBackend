const authService = require('./auth.service')
const logger = require('../../services/logger.service')

async function signup(req, res) {
	try {
		const { credentials } = req.body
		const response = await authService.signup(credentials)
		if (!response) return res.sendStatus(400).send({ err: 'Failed to signup' })
		res.status(200).send(response)
	} catch (err) {
		logger.error('Failed to signup', err)
		res.send(500).send({ err: 'Failed to signup' })
	}
}

// signup(
// 	{ body: { credentials: { username: 'user@gmail.com', password: 'test123@' } } },
// 	{
// 		status: () => {
// 			return { send: () => {} }
// 		},
// 	}
// )

module.exports = {
	signup,
}
