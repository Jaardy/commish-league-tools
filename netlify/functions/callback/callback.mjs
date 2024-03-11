export const handler = async (event, context) => {
  const { code } = event.queryStringParameters;
  if (code) {
    const payload = {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      redirect_uri: process.env.REDIRECT_URI,
      grant_type: "authorization_code",
      code,
    };
    const response = await fetch(
      "https://api.login.yahoo.com/oauth2/get_token",
      { method: "POST", body: JSON.stringify(payload) }
    );
    const data = await response.json();
    return {
      body: JSON.stringify({
        message: `Hello World`,
        data,
      }),
      statusCode: 200,
    };
  }
};
