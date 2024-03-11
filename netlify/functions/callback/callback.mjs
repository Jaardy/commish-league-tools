export const handler = async (event, context) => {
  console.log(event.queryStringParameters);

  return {
    body: JSON.stringify({
      message: `Hello World`,
    }),
    statusCode: 200,
  };
};
