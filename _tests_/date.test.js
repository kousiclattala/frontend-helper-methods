import {
  getDifferenceInDays,
  getDateMilliseconds,
  getMonthDifference,
} from "../dist";

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

it("Function should return the difference in months between two dates", () => {
  const date1 = new Date("2024-04-29");
  const date2 = new Date("2024-05-02");

  expect(getMonthDifference(date1, date2)).toBe(1);
});

it("Function should return null if start_date or end_date is missing", () => {
  const date1 = new Date("29-04-2024");
  const date2 = new Date("2024-05-02");

  expect(getMonthDifference(date1, "")).toBe(null);
  expect(getMonthDifference("", "")).toBe(null);
  expect(getMonthDifference("", date2)).toBe(null);
  expect(getMonthDifference(date1, date2)).toBe(NaN);
});
