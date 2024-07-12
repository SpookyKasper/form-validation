import "../styles/form.css";
import { createSubmitButton, createInputField } from "./form-utils";
import createCountryField from "./createCountryField";
import addEmailValidation from "./emailValidation";
import passValidation from "./passValidation";

export default function createForm() {
  const formEl = document.createElement("form");
  // formEl.noValidate = true;

  const emailField = createInputField("email", "email", "someone@mail.com");
  addEmailValidation(emailField);
  const countryField = createCountryField();
  const zipCodeInput = createInputField("text", "zip-code");
  const passwordInput = createInputField("password", "password");
  passValidation(passwordInput);
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
