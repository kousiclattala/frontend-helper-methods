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

## Usage

```javascript
//Usage

import { passwordValidator } from 'frontend-helper-methods

console.log(passwordValidator("<Provide password you want to validate>"))
```
