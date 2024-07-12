import {
  addRequiredField,
  addMinLength,
  createErrorSpan,
} from "./validation-utils";

export default function addEmailValidation(emailInputField) {
  const errorSpan = createErrorSpan();
  emailInputField.append(errorSpan);

  const emailInput = emailInputField.querySelector("#email");
  addRequiredField(emailInput);
  addMinLength(emailInput, 8);
  checkValidationOnInput(emailInput, errorSpan);
}

function checkValidationOnInput(emailInput, errorSpan) {
  emailInput.addEventListener("blur", () => {
    if (emailInput.validity.valid) {
      errorSpan.textContent = "";
      errorSpan.className = "error";
    } else {
      showEmailError(emailInput, errorSpan);
      errorSpan.classList.add("active");
    }
  });
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
