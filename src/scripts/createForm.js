import "../styles/form.css";
import createInputField from "./createInputField";

export default function createForm() {
  const formEl = document.createElement("form");

  const emailInput = createInputField("email", "email", "someone@mail.com");
  const zipCodeInput = createInputField("text", "zip-code");
  const passwordInput = createInputField("password", "password");
  const passConfInput = createInputField("password", "pass-confirmation");

  formEl.append(emailInput, zipCodeInput, passwordInput, passConfInput);

  return formEl;
}
