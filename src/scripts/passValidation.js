import {
  addMinLength,
  addRequiredField,
  displayErrorsOnBlur,
  hasSpecialCharacter,
  hasUpperCaseLetter,
} from "./validation-utils";

export default function passValidation(passwordField) {
  const passInput = passwordField.querySelector("input");
  addConstrains(passInput);
  displayErrorsOnBlur(passwordField, showPassError, myPasswordConstrain);
}

function addConstrains(input) {
  addRequiredField(input);
  addMinLength(input, 8);
}

function myPasswordConstrain(string) {
  return hasSpecialCharacter(string) && hasUpperCaseLetter(string);
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
