/**
 * @group unit
 */

import { substract } from "./substract";

describe("subscribe test", () => {
  it("subscract b from a", () => {
    expect(substract(17, 6)).toEqual(11);
  });
});
