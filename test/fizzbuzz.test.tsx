import { describe, expect, it } from "vitest";
import { fizzbuzz } from "../src/fizzbuzz.js"

describe("fizzbuzz", (): void => {
  it("should throw if not number is provided as parameter", (): void => {
    expect((): void => fizzbuzz()).toThrow();
  });

  it("should throw a specific error message if not number is provided as parameter", (): void => {
    expect((): void => fizzbuzz()).toThrow(
      "parameter provided must be a number"
    );
  });

  it("should throw a specific error message not a number is provided", (): void => {
    expect((): void => fizzbuzz(NaN)).toThrow(
      "parameter provided must be a number"
    );
  });

  it("should return 1 if number provided is 1", (): void => {
    expect(fizzbuzz(1)).toBe(1);
  });

  it("should return 2 if number provided is 2", (): void => {
    expect(fizzbuzz(2)).toBe(2);
  });

  it('should return "fizz" if number provided is 3', (): void => {
    expect(fizzbuzz(3)).toBe("fizz");
  });

  it('should return "fizz" if number provided is multiple of 3', (): void => {
    expect(fizzbuzz(3)).toBe("fizz");
    expect(fizzbuzz(6)).toBe("fizz");
    expect(fizzbuzz(9)).toBe("fizz");
  });
  it('should return "buzz" if number provided is multiple of 5', (): void => {
    expect(fizzbuzz(5)).toBe("buzz");
  });
  it('should return "buzz" if number provided is multiple of 5', (): void => {
    expect(fizzbuzz(10)).toBe("buzz");
    expect(fizzbuzz(20)).toBe("buzz");
  });
  it('should return "fizzbuzz" if number provided is multiple of 15', (): void => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
  });
});
