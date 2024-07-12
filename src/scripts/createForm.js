import "../styles/form.css";
import { createSubmitButton, createInputField } from "./form-utils";
import createCountryField from "./createCountryField";
import addPassValidation from "./addPassValidation";
import addEmailValidation from "./addEmailValidation";
import addPassConfValidation from "./addPassConfValidation";
import checkEmailValidity from "./checkEmailValidity";
import checkPassValidity from "./checkPassValidity";
import checkPassConfValidity from "./checkPassConfValidity";

export default function createForm() {
  const formEl = document.createElement("form");
  formEl.noValidate = true;

  const emailField = createInputField("email", "email", "someone@mail.com");
  const countryField = createCountryField();
  const zipCodeInput = createInputField("text", "zip-code");
  const passwordField = createInputField("password", "password");
  const passConfField = createInputField("password", "pass-confirmation");

  addEmailValidation(emailField);
  addPassValidation(passwordField);
  addPassConfValidation(passConfField, passwordField);

  const submitBtn = createSubmitButton("Submit");
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    checkEmailValidity(emailField);
    checkPassValidity(passwordField);
    checkPassConfValidity(passConfField, passwordField);
  });

  formEl.append(
    emailField,
    countryField,
    zipCodeInput,
    passwordField,
    passConfField,
    submitBtn
  );

  return formEl;
}
