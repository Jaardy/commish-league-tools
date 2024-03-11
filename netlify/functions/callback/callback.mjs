export const handler = async (event, context) => {
  console.log(event);
  console.log(context);
  return {
    body: JSON.stringify({
      message: `Hello World`,
    }),
    statusCode: 200,
  };
};
