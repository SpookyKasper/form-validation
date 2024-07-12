import "../styles/form.css";
import { createSubmitButton, createInputField } from "./form-utils";
import createCountryField from "./createCountryField";
import addEmailValidation from "./emailValidation";
import { addRequiredField } from "./validation-utils";

export default function createForm() {
  const formEl = document.createElement("form");
  formEl.noValidate = true;

  const emailField = createInputField("email", "email", "someone@mail.com");
  addEmailValidation(emailField);
  const countryField = createCountryField();
  const zipCodeInput = createInputField("text", "zip-code");
  const passwordInput = createInputField("password", "password");
  const passConfInput = createInputField("password", "pass-confirmation");
  const submitBtn = createSubmitButton("Submit");

  formEl.append(
    emailField,
    countryField,
    zipCodeInput,
    passwordInput,
    passConfInput,
    submitBtn
  );

  return formEl;
}
