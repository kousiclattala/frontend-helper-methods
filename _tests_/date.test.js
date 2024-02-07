import { getDifferenceInDays } from "../dist";

it("Should return the difference in number", () => {
  expect(getDifferenceInDays("2024-02-07", "2024-02-10")).toBe(3);
});

it("Should return Nan value", () => {
  expect(getDifferenceInDays("", "")).toBe(NaN);
});
