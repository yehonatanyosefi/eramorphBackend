const logger = require('../../services/logger.service')
const {
	CognitoIdentityProviderClient,
	SignUpCommand,
} = require('@aws-sdk/client-cognito-identity-provider')
const networkConventionsService = require('./network-conventions.service')

const client = new CognitoIdentityProviderClient({
	region: networkConventionsService.REGION,
	credentials: {
		accessKeyId: networkConventionsService.AppSyncFinals.SERVICE_NAME,
		secretAccessKey: networkConventionsService.AppSyncFinals.APPSYNC_URI_ID,
	},
})

async function signup(credentials) {
	const { username, password, email } = credentials
	const command = new SignUpCommand({
		ClientId: networkConventionsService.CognitoFinals.AWS_COMPANY_CLIENT_ID,
		Username: username,
		Password: password,
		UserAttributes: [
			{
				Name: 'email',
				Value: username,
			},
		],
	})

	try {
		const data = await client.send(command)
		console.log('success!, data:', data)
		return data
	} catch (err) {
		logger.error('error:', err)
		return null
	}
}

module.exports = {
	signup,
}
