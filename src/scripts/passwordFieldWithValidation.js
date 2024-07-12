import checkPassValidity from "./checkPassValidity";
import { createInputField } from "./form-utils";
import { addMinLength, addRequiredField } from "./validation-utils";

export default function passwordFieldWithValidation() {
  const passwordField = createInputField("password", "password");
  addPassValidation(passwordField);
  return passwordField;
}

function addPassValidation(passwordField) {
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
  input.addEventListener("input", () => checkPassValidity(field));
}
