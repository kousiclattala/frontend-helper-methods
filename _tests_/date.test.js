import { getDifferenceInDays, getDateMilliseconds } from "../dist";

it("Should return the difference in number", () => {
  expect(getDifferenceInDays("2024-02-07", "2024-02-10")).toBe(3);
});

it("Should return Nan value", () => {
  expect(getDifferenceInDays("", "")).toBe(NaN);
});

it("Should return the date in milliseconds", () => {
  expect(getDateMilliseconds("2024-04-29")).toStrictEqual({
    start_date: 1714329061000,
    end_date: 1714415399000,
  });
});

it("Function Should throw error when a non empty string is supplied", () => {
  const shouldThrowError = () => {
    getDateMilliseconds("");
  };

  expect(shouldThrowError).toThrow(
    new Error("Please provide a non empty string")
  );
});
