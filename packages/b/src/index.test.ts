import { b } from "./index";
import { expect, describe, test } from "@jest/globals";

describe("B", () => {
  test("should return hello world", () => {
    expect(b()).toBe("hello world");
  });
});
