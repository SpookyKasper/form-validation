export function addPatternMatching(input, pattern) {
  input.setAttribute("pattern", pattern);
}

export function addRequiredField(input) {
  input.required = true;
}

export function addMinLength(input, length) {
  input.minLength = length;
}

export function hasSpecialCharacter(string) {
  const specialCharRegex = /[^A-Za-z0-9\s]/;
  return specialCharRegex.test(string);
}

export function hasUpperCaseLetter(string) {
  const upperCaseRegex = /[A-Z]/;
  return upperCaseRegex.test(string);
}
