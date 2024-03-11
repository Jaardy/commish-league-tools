export const handler = async (event, context) => {
  const { CLIENT_ID, REDIRECT_URI } = process.env;
  const baseURL = "https://api.login.yahoo.com/oauth2/request_auth";
  const clientID = `client_id=${CLIENT_ID}`;
  const redirectURI = `redirect_uri=${REDIRECT_URI}`;
  console.log(`${baseURL}?${clientID}&${redirectURI}&response_type=code`);
  return {
    headers: {
      Location: `${baseURL}?${clientID}&${redirectURI}&response_type=code`,
    },
    statusCode: 302,
  };
};
