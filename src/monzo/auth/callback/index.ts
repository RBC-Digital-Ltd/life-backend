export const handler = async (): Promise<AWSLambda.APIGatewayProxyResult> => ({
  statusCode: 200,
  body: JSON.stringify({
    message: "Hello from monzo-auth-callback!",
  }),
});
