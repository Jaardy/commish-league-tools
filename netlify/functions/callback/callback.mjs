export const handler = async (event, context) => {
  console.log(event.queryStringParameters.code);

  return {
    body: JSON.stringify({
      message: `Hello World`,
    }),
    statusCode: 200,
  };
};
