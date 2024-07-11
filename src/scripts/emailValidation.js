export default function addEmailValidation(emailInputField) {
  const emailInput = emailInputField.querySelector("#email");
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  emailInput.setAttribute("pattern", emailPattern);
}
