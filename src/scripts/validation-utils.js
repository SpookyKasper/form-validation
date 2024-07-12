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

export function displayErrorsOnBlur(field, showErrors, customConstrain) {
  const input = field.querySelector("input");
  input.addEventListener("input", () => {
    checkFieldValidity(field, showErrors, customConstrain);
  });
}

export function checkFieldValidity(field, showErrors, customConstrain) {
  const input = field.querySelector("input");
  const errorSpan = field.querySelector(".error");
  if (input.validity.valid && customConstrain(input.value)) {
    errorSpan.textContent = "";
    errorSpan.className = "error";
  } else {
    showErrors(input, errorSpan);
    errorSpan.classList.add("active");
  }
}
