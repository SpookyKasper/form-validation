import { addRequiredField, addMinLength } from "./validation-utils";

export default function addEmailValidation(emailInputField) {
  const emailInput = emailInputField.querySelector("#email");
  addRequiredField(emailInput);
  addMinLength(emailInput);
  checkValidationOnInput(emailInput);
}

function checkValidationOnInput(emailInput) {
  emailInput.addEventListener("input", () => {
    console.log(emailInput.validity);
  });
}

function checkEmailType() {
  if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity("Please make sure to type a valid email");
  } else {
    emailInput.setCustomValidity("");
  }
}
