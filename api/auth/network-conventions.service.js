require('dotenv').config()

const REGION = process.env.REGION

const AppSyncFinals = {
	SERVICE_NAME: process.env.SERVICE_NAME,
	APPSYNC_URI_ID: process.env.APPSYNC_URI_ID,
}

const CognitoFinals = {
	AWS_COMPANY_CLIENT_ID: process.env.AWS_COMPANY_CLIENT_ID,
	USER_POOL_ID: process.env.USER_POOL_ID,
	PROVIDER_NAME: `cognito-idp.${REGION}.amazonaws.com/${process.env.USER_POOL_ID}`,
	REDIRECT_URI: process.env.REDIRECT_URI,
	HANDLER_NAME: process.env.HANDLER_NAME,
	PIPE_NAME: process.env.PIPE_NAME,
	FRIENDLY_NAME: process.env.FRIENDLY_NAME,
	URI_SCHEME: process.env.URI_SCHEME,
	REDIRECT_URI: `${process.env.URI_SCHEME}://`,
	IDENTITY_POOL_ID: process.env.IDENTITY_POOL_ID,
	COGNITO_DOMAIN: `https://eramorph.auth.${REGION}.amazoncognito.com`,
	REDIRECT_URL: process.env.REDIRECT_URL,
}

function generateEndpoint() {
	return `https://${AppSyncFinals.APPSYNC_URI_ID}.appsync-api.${REGION}.amazonaws.com/graphql`
}

module.exports = {
	REGION,
	generateEndpoint,
	AppSyncFinals,
	CognitoFinals,
}
