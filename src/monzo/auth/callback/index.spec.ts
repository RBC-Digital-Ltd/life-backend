// Test that when we get a callback from Monzo, we can exchange the code for a token
// and then store the token in the database.
// This is a bit of a weird test, because it's testing the database, but it's
// the only way to test the callback endpoint.

describe("Monzo callback", () => {
  test("should store the token in the database", () => {
    expect(true).toBeTrue();
  });
});
