import { isDate } from "util/types";

/**
 * It validates the password and returns a boolean value
 * It checks for following
 *  Atleast one capital letter, Atleast one number, Atleast one digit, Atleast one Alphanumeric value
 * and you can specify the minimum length of the password.
 * @param {string} password password you want to validate.
 * @param {number} minimumLength (optional) you can provide minimum length of the password should be, default value is 8.
 * @returns {boolean} it return a boolean value indicating provided password is valid or not.
 */
export const passwordValidator = (
  password: string,
  minimumLength?: number
): boolean => {
  // Ensure minLength is a positive integer
  var length = minimumLength == undefined ? 8 : minimumLength;
  var minLength = Math.max(0, Math.floor(length));

  const regexPattern = `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#~])[A-Za-z\\d@$!%*?&#~]{${minLength},}$`;

  const regex = new RegExp(regexPattern);

  const isValid = regex.test(password);

  return isValid;
};

/**
 * It validates the email and returns a boolean value, true means
 * email is valid, false means email is invalid. It checks for
 * '@' and '.' symbol in the email.
 * @param {string} email email you want to validate.
 * @returns {boolean} returns boolean value.
 */

export const emailValidator = (email: string): boolean => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const isValid = regex.test(email);

  return isValid;
};

/**
 * It gives the difference between two dates
 * @param {string | Date} startDate accepts a string or date, format should be in yyyy-mm-dd or yyyy/mm/dd or yyyy-mm-ddT00:00:00Z
 * @param {string | Date} endDate accepts a string or date, format should be in yyyy-mm-dd or yyyy/mm/dd or yyyy-mm-ddT00:00:00Z
 * @returns {number} returns difference between two days in numeric value
 */

export const getDifferenceInDays = (
  startDate: string | Date,
  endDate: string | Date
): number => {
  const date2 = new Date(endDate);
  const date1 = new Date(startDate);

  const diffInTime = date2.getTime() - date1.getTime();
  let days_difference = diffInTime / (1000 * 60 * 60 * 24);

  let finalValue = Number(days_difference.toFixed(0));

  return finalValue;
};

/**
 * @param {string | Date} selectedDate accepts Date in the form of string or Date and it should be in the format YYYY-MM-DD
 * @returns returns date in milliseconds as startdate and enddate
 * @example
 * selectedDate: 2024-04-29 we are appending the time stamp to it as, startDate: "2024-04-29T00:01:01", endDate: "2024-04-29T23:59:59"
 * and returns the value {start_date: number, end_date: number}
 */
export const getDateMilliseconds = (
  selectedDate: string | Date
): { start_date: number; end_date: number } | Error => {
  if (selectedDate == "") {
    throw Error("Please provide a non empty string");
  }

  let mon = new Date(selectedDate).getMonth() + 1;

  const startDate = `${new Date(selectedDate).getFullYear()}-${
    mon > 10 ? "" : "0"
  }${mon}-${new Date(selectedDate).getDate()}T00:01:01`;
  const endDate = `${new Date(selectedDate).getFullYear()}-${
    mon > 10 ? "" : "0"
  }${mon}-${new Date(selectedDate).getDate()}T23:59:59`;

  const stDate = new Date(startDate);
  const edDate = new Date(endDate);
  const stMilli = stDate.getTime();
  const edMilli = edDate.getTime();

  return { start_date: stMilli, end_date: edMilli };
};

/**
 * This methods accepts two dates start_date, end_date and calculates the difference in months between the two dates ad returns the value. Please note that
 * lowest number date should be start_date and highest number date should end_date, otherwise you will get the value in negatives.
 * @param date1 accepts the start date in the format of Date
 * @param date2 accepts the end date in the format of Date
 * @returns the difference between dates in number of months
 */
export const getMonthDifference = (
  start_date: Date,
  end_date: Date
): number | null => {
  let date1 = isDate(start_date);
  let date2 = isDate(end_date);

  if (!date1 || !date2) {
    return null;
  }

  // Calculate the difference in years
  const yearsDiff = end_date.getFullYear() - start_date.getFullYear();

  // Calculate the difference in months
  const monthsDiff = end_date.getMonth() - start_date.getMonth();

  // Calculate the total difference in months
  const totalMonthsDiff = yearsDiff * 12 + monthsDiff;

  return totalMonthsDiff;
};
