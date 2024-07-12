import { addMinLength, addRequiredField } from "./validation-utils";
import checkPassValidity from "./checkPassValidity";

export default function addPassValidation(passwordField) {
  const passInput = passwordField.querySelector("input");
  addConstrains(passInput);
  displayErrorsOnBlur(passwordField);
}

function addConstrains(input) {
  addRequiredField(input);
  addMinLength(input, 8);
}

function displayErrorsOnBlur(field) {
  const input = field.querySelector("input");
  input.addEventListener("input", () => {
    checkPassValidity(field);
  });
}
