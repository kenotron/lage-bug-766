describe("a", () => {
  test("should return hello world", () => {
    const a = require("./index");
    expect(a()).toBe("hello world");
  })
})