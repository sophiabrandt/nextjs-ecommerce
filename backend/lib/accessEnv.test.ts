import { accessEnv } from "./accessEnv";

describe("Access Env", () => {
  test("it should return a key from env", () => {
    const test_env = accessEnv("TEST_ENV");
    expect(test_env).toEqual("env");
  });

  test("it should return a default value for a non-existing key when a default value was provided", () => {
    const test_env = accessEnv("DOES_NOT_EXIST", "fallback value");
    expect(test_env).toEqual("fallback value");
  });

  test("it should throw an error for a non-existing key when no value was provided", () => {
    expect(() => accessEnv("DOES_NOT_EXIST")).toThrowError();
  });

  test("it should throw an error for an existing key with empty property and no default value", () => {
    const test_env = accessEnv("EMPTY_TEST_ENV");
    expect(() => accessEnv("DOES_EXIST")).toThrowError();
  });
});
