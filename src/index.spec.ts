// test index.ts with jest
import { hello } from ".";

describe("hello", () => {
  it("should return 1", () => {
    expect(hello()).toBe(1);
  });
});
