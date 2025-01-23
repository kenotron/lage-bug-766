import { a } from "./index";
import { expect, describe, test } from "@jest/globals";

describe("a", () => {
  test("should return hello world", () => {
    expect(a()).toBe("hello world");
  });
});
