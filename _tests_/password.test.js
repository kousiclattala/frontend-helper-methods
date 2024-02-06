import { passwordValidator } from "../dist";

test("Should verify password is valid", () => {
  expect(passwordValidator("Test@123", 8)).toBe(true);
});

test("Should verify password is invalid", () => {
  expect(passwordValidator("Test@12", 8)).toBe(false);
});
test("Should verify password is invalid", () => {
  expect(passwordValidator("", 8)).toBe(false);
});
