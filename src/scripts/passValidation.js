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
