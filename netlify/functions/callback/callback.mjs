export const handler = async (event, context) => {
  const { code } = event.queryStringParameters;

  if (code) {
    const baseURL = "https://api.login.yahoo.com/oauth2/get_token";
    const body = {
      grant_type: "authorization_code",
      redirect_uri: "oob",
      code,
    };
    const bearerToken = Buffer.from(
      `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
    );
    const response = await fetch(
      "https://api.login.yahoo.com/oauth2/get_token",
      {
        method: "POST",
        headers: {
          Authorization: bearerToken,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(body),
      }
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
