import { add } from "@nx-tuto/calculator";

describe("Calculator", () => {
  describe("one number is provided", () => {
    it("returns the number", () => {
      expect(add(0)).toBe(0);
      expect(add(1)).toBe(1);
    });
  });
  describe("2 numbers are provided", () => {
    it("adds the 2 numbers", () => {
      expect(add(0, 1)).toEqual(1);
    });
  });
});
