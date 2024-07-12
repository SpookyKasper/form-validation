import {
  addMinLength,
  addRequiredField,
  createErrorSpan,
} from "./validation-utils";

export default function passValidation(passwordField) {
  const errorSpan = createErrorSpan();
  passwordField.append(errorSpan);

  const passInput = passwordField.querySelector("#password");
  addRequiredField(passInput);
  addMinLength(passInput, 8);
  checkValidationOnInput(passInput, errorSpan);
}

function checkValidationOnInput(passInput, errorSpan) {
  passInput.addEventListener("blur", () => {
    if (passInput.validity.valid && passesCustomValidations(passInput.value)) {
      errorSpan.textContent = "";
      errorSpan.className = "error";
    } else {
      showPassError(passInput, errorSpan);
      errorSpan.classList.add("active");
    }
  });
}

function showPassError(input, errorSpan) {
  if (input.validity.valueMissing) {
    errorSpan.textContent = "Password can't be blank";
  } else if (input.validity.tooShort) {
    errorSpan.textContent = `Password should be at least ${input.minLength} characters; you entered ${input.value.length}`;
  } else if (!hasUpperCaseLetter(input.value)) {
    errorSpan.textContent = `Please add at lease one upper case letter`;
  } else if (!hasSpecialCharacter(input.value)) {
    errorSpan.textContent = `Please add at lease one special character (*./@# etc.)`;
  }
}

function passesCustomValidations(string) {
  return hasSpecialCharacter(string) && hasUpperCaseLetter(string);
}

function hasSpecialCharacter(string) {
  const specialCharRegex = /[^A-Za-z0-9\s]/;
  return specialCharRegex.test(string);
}

function hasUpperCaseLetter(string) {
  const upperCaseRegex = /[A-Z]/;
  return upperCaseRegex.test(string);
}
