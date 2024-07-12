import "../styles/form.css";
import { createSubmitButton, createInputField } from "./form-utils";
import createCountryField from "./createCountryField";
import addPassConfValidation from "./addPassConfValidation";
import checkEmailValidity from "./checkEmailValidity";
import checkPassValidity from "./checkPassValidity";
import checkPassConfValidity from "./checkPassConfValidity";
import passwordFieldWithValidation from "./passwordFieldWithValidation";
import emailFieldWithValidation from "./emailFieldWithValidation";
import passConfFieldWithValidation from "./addPassConfValidation";

export default function createForm() {
  const formEl = document.createElement("form");
  formEl.noValidate = true;

  const emailField = emailFieldWithValidation();
  const countryField = createCountryField();
  const zipCodeInput = createInputField("text", "zip-code");
  const passwordField = passwordFieldWithValidation();
  const passConfField = passConfFieldWithValidation(passwordField);

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
