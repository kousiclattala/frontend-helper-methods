/**
 * It validates the password and returns a boolean value
 * It checks for following
 *  Atleast one capital letter, Atleast one number, Atleast one digit, Atleast one Alphanumeric value
 * and you can specify the minimum length of the password.
 * @param {string} password password you want to validate.
 * @param {number} minimumLength (optional) you can provide minimum length of the password should be, default value is 8.
 * @returns {boolean} it return a boolean value indicating provided password is valid or not.
 */
export const passwordValidator = (password, minimumLength) => {
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
 * @returns
 */
export const emailValidator = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const isValid = regex.test(email);
    return isValid;
};
