/**
 * It validates the password and returns a boolean value
 * It checks for following
 *  Atleast one capital letter, Atleast one number, Atleast one digit, Atleast one Alphanumeric value
 * and you can specify the minimum length of the password.
 * @param {string} password password you want to validate.
 * @param {number} minimumLength (optional) you can provide minimum length of the password should be, default value is 8.
 * @returns {boolean} it return a boolean value indicating provided password is valid or not.
 */
export declare const passwordValidator: (password: string, minimumLength?: number) => boolean;
/**
 * It validates the email and returns a boolean value, true means
 * email is valid, false means email is invalid. It checks for
 * '@' and '.' symbol in the email.
 * @param {string} email email you want to validate.
 * @returns {boolean} returns boolean value.
 */
export declare const emailValidator: (email: string) => boolean;
/**
 * It gives the difference between two dates
 * @param {string | Date} startDate accepts a string or date, format should be in yyyy-mm-dd or yyyy/mm/dd or yyyy-mm-ddT00:00:00Z
 * @param {string | Date} endDate accepts a string or date, format should be in yyyy-mm-dd or yyyy/mm/dd or yyyy-mm-ddT00:00:00Z
 * @returns {number} returns difference between two days in numeric value
 */
export declare const getDifferenceInDays: (startDate: string | Date, endDate: string | Date) => number;
/**
 * @param {string | Date} selectedDate accepts Date in the form of string or Date and it should be in the format YYYY-MM-DD
 * @returns returns date in milliseconds as startdate and enddate
 * @example
 * selectedDate: 2024-04-29 we are appending the time stamp to it as, startDate: "2024-04-29T00:01:01", endDate: "2024-04-29T23:59:59"
 * and returns the value {start_date: number, end_date: number}
 */
export declare const getDateMilliseconds: (selectedDate: string | Date) => {
    start_date: number;
    end_date: number;
} | Error;
/**
 * This methods accepts two dates start_date, end_date and calculates the difference in months between the two dates ad returns the value. Please note that
 * lowest number date should be start_date and highest number date should end_date, otherwise you will get the value in negatives.
 * @param date1 accepts the start date in the format of Date
 * @param date2 accepts the end date in the format of Date
 * @returns the difference between dates in number of months
 */
export declare const getMonthDifference: (start_date: Date, end_date: Date) => number | null;
/**
 *
 * @param month accepts string or date, for string in the format yyyy-mm-dd or yyyy/mm/dd
 * @param monthTypeString its an optional parameter, which accepts in boolean value, if given months will be generated in string format
 * @returns returns the months in array of strings starting from the given date to current month.
 *
 * This method accepts starting month and returns the array of months strings till current month.
 * @example
 *
 * generateMonthsCalendar("2023-12-02") returns ["2023-12-01","2024-01-01", "2024-02-01", "2024-03-01", "2024-04-01", "2024-05-01"]
 * genrateMonthsCalendar("2023-12-02", true) returns ["December 2023","January 2024", "Feburary 2024", "March 2024", "April 2024", "May 2024"]
 *
 */
export declare const generateMonthsCalendar: (month: string | Date, monthTypeString?: boolean) => string[] | null;
