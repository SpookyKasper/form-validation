import {
  addRequiredField,
  addMinLength,
  displayErrorsOnBlur,
} from "./validation-utils";

export default function emailValidation(emailField) {
  const emailInput = emailField.querySelector("input");
  addConstrains(emailInput);
  displayErrorsOnBlur(emailField, showEmailError, customEmailValidation);
}

function addConstrains(input) {
  addRequiredField(input);
  addMinLength(input, 8);
}

function customEmailValidation() {
  return true;
}

function showEmailError(input, errorSpan) {
  if (input.validity.valueMissing) {
    errorSpan.textContent = "Email can't be blank";
  } else if (input.validity.typeMismatch) {
    errorSpan.textContent = "Please enter a valid email";
  } else if (input.validity.tooShort) {
    errorSpan.textContent = `Email should be at least ${input.minLength} characters; you entered ${input.value.length}`;
  }
}
