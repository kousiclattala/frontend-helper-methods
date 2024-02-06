import { emailValidator } from "../dist";

test("Should verify password is valid", () => {
  expect(emailValidator("kousiclattala112@gmail.com")).toBe(true);
});

test("Should verify password is invalid", () => {
  expect(emailValidator("kousiclattalagmail.com")).toBe(false);
});

test("Should verify password is invalid when empty string is provided", () => {
  expect(emailValidator("")).toBe(false);
});
