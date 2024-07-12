import "../styles/form.css";
import { createSubmitButton, createInputField } from "./form-utils";
import createCountryField from "./createCountryField";
import emailValidation from "./emailValidation";
import passValidation from "./passValidation";
import confirmValidation from "./confirmValidation";

export default function createForm() {
  const formEl = document.createElement("form");
  formEl.noValidate = true;

  const emailField = createInputField("email", "email", "someone@mail.com");
  const countryField = createCountryField();
  const zipCodeInput = createInputField("text", "zip-code");
  const passwordField = createInputField("password", "password");
  const passConfInput = createInputField("password", "pass-confirmation");

  emailValidation(emailField);
  passValidation(passwordField);
  confirmValidation(passConfInput, passwordField);

  const submitBtn = createSubmitButton("Submit");
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
  });

  formEl.append(
    emailField,
    countryField,
    zipCodeInput,
    passwordField,
    passConfInput,
    submitBtn
  );

  return formEl;
}
