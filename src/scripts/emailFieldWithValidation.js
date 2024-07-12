import checkEmailValidity from "./checkEmailValidity";
import { createInputField } from "./form-utils";
import { addRequiredField, addMinLength } from "./validation-utils";

export default function emailFieldWithValidation() {
  const emailField = createInputField("email", "email", "someone@mail.com");
  addEmailValidation(emailField);
  return emailField;
}

function addEmailValidation(emailField) {
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
  input.addEventListener("blur", () => checkEmailValidity(field));
}
