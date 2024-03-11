export const handler = async (event, context) => {
  const { code } = event.queryStringParameters;
  if (code) {
    const baseURL = "https://api.login.yahoo.com/oauth2/get_token";
    const client_id = `client_id=${process.env.CLIENT_ID}`;
    const client_secret = `client_secret=${process.env.CLIENT_SECRET}`;
    const redirect_uri = `redirect_uri=${process.env.REDIRECT_URI}`;
    const grant_type = "grant_type=authorization_code";
    const query = `${client_id}&${client_secret}&${redirect_uri}&${grant_type}&code=${code}`;
    console.log(`${baseURL}?${query}`);
    const response = await fetch(`${baseURL}?${query}`, { method: "POST" });
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
