export const handler = async (): Promise<AWSLambda.APIGatewayProxyResult> => ({
  statusCode: 200,
  body: JSON.stringify({
    message: "Hello from monzo-auth-callback!",
  }),
  headers: {
    "x-api-version": process.env.API_VERSION || "0.0.1-dev",
  },
});
