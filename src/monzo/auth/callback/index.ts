export const handler = async () => ({
  statusCode: 200,
  body: JSON.stringify({
    message: "Hello from monzo-auth-callback!",
  }),
});
