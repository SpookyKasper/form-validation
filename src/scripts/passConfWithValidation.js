import checkPassConfValidity from "./checkPassConfValidity";
import { createInputField } from "./form-utils";

export default function passConfFieldWithValidation(originalField) {
  const passConfField = createInputField("password", "pass-confirmation");
  addPassConfValidation(passConfField, originalField);
  return passConfField;
}

function addPassConfValidation(confirmField, originalField) {
  displayErrorsOnBlur(confirmField, originalField);
}

function displayErrorsOnBlur(confirmField, originalField) {
  const input = confirmField.querySelector("input");
  input.addEventListener("input", () =>
    checkPassConfValidity(confirmField, originalField)
  );
}
