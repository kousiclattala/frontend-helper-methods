import { generateMonthsCalendar } from "../dist";

it("Function should return null if starting month is not given", () => {
  expect(generateMonthsCalendar()).toBe(null);
});

it("Function should return array of months in date format", () => {
  const data = [
    "2024-05-01",
    "2024-04-01",
    "2024-03-01",
    "2024-02-01",
    "2024-01-01",
  ];

  expect(generateMonthsCalendar("2023-12-01")).toStrictEqual(data);
});

it("Function should return array of months in string format", () => {
  const data = [
    "May 2024",
    "April 2024",
    "March 2024",
    "February 2024",
    "January 2024",
  ];

  expect(generateMonthsCalendar("2023-12-01", true)).toStrictEqual(data);
});
