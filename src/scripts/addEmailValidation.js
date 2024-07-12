import checkEmailValidity from "./checkEmailValidity";
import { addRequiredField, addMinLength } from "./validation-utils";

export default function addEmailValidation(emailField) {
  const emailInput = emailField.querySelector("input");
  addConstrains(emailInput);
  displayErrorsOnBlur(emailField);
}

function addConstrains(input) {
  addRequiredField(input);
  addMinLength(input, 8);
}

function displayErrorsOnBlur(field) {
  const input = field.querySelector("input");
  input.addEventListener("input", () => checkEmailValidity(field));
}
