## frontend-helper-methods

Helper Methods for frontend application

## Installation

```bash
npm i frontend-helper-methods
```

## Methods

### passwordValidator(password: string, minimumLength?: number) => boolean

It provides validation for the password whether it is valid or not.You have to pass a password and optionally you can pass minimum length the password should be. It checks for following rules.

- Password must include atleast one `Capital Letter`.
- Password must include atleast one `Numeric value`.
- Password must include atleast one `Alphanumeric value`.
- Password must include atleast one `Number`.
- Password must be of minimum length `by default minimum length is 8`

### Usage

```javascript
//Usage

import { passwordValidator } from "frontend-helper-methods";

console.log(passwordValidator("<Provide password you want to validate>"));
```

### emailValidator: (email: string) => boolean

It validates the email and returns a boolean value, true means
email is valid, false means email is invalid. It checks for
'@' and '.' symbol in the email.

### Usage

```javascript
//Usage

import { emailValidator } from "frontend-helper-methods";

console.log(emailValidator("<Provide email you want to validate>"));
```

### getDifferenceInDays: (startDate: string | Date, endDate: string | Date) => number

It takes start date, end date values and gives the difference between two dates. date format should be in `yyyy-mm-dd` or `yyyy/mm/dd` or `yyyy-mm-ddT00:00:00Z`.

### Usage

```javascript
//Usage

import { getDifferenceInDays } from "frontend-helper-methods";

console.log(getDifferenceInDays("<Provide start date>", "<Provide end date>"));

console.log(getDifferenceInDays("2024-02-07", "2024/02/07")); // return value 0

console.log(getDifferenceInDays("2024/02/07", "2024/02/09")); // return value 2

console.log(
  getDifferenceInDays("2024-02-07T00:00:00Z", "2024-02-09T00:00:00Z")
); // return value 2
```

### getDateMilliseconds: (selectedDate: string | Date): { start_date: number; end_date: number } | Error

It accepts Date in the form of string or Date and it should be in the format `yyyy-mm-dd` or `yyyy/mm/ddd` or `yyyy-mm-ddT00:00:00Z` and returns the updated date in milliseconds as {start_date: number, end_date: number}

### Usage

```javascript
// Usage

import { getDateMilliseconds } from "frontend-helper-methods";

console.log(getDateMilliseconds("<Provide selected date>"));

console.log(getDateMilliseconds("2024-04-29")); // returns { start_date: 1714329061000, end_date: 1714415399000 }

// if you provide an empty string, method will throw an Error with string `Please provide a non empty string`
console.log(getDateMilliseconds("")); // returns Error: Please provide a non empty string
```
