import { isValidImdbId } from "../utils/validation";

describe("IMDb ID validation", () => {
  it("valid ID", () => {
    expect(isValidImdbId("tt0133093")).toBe(true);
  });

  it("invalid ID", () => {
    expect(isValidImdbId("tt123")).toBe(false);
  });
});
