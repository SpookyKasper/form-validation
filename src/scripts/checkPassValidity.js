import { hasSpecialCharacter, hasUpperCaseLetter } from "./validation-utils";

export default function checkPassValidity(field) {
  const input = field.querySelector("input");
  const errorSpan = field.querySelector(".error");
  input.validity.valid && customConstrain(input.value)
    ? resetErrorSpan(errorSpan)
    : activateErrorSpan(errorSpan, input);
}

function customConstrain(string) {
  return hasSpecialCharacter(string) && hasUpperCaseLetter(string);
}

function resetErrorSpan(errorSpan) {
  errorSpan.textContent = "";
  errorSpan.className = "error";
}

function activateErrorSpan(errorSpan, input) {
  errorSpan.textContent = showPasswordError(input);
  errorSpan.classList.add("active");
}

function showPasswordError(input) {
  if (input.validity.valueMissing) return "Password can't be blank";
  if (input.validity.tooShort)
    return `Password should be at least ${input.minLength} characters; you entered ${input.value.length}`;
  if (!hasUpperCaseLetter(input.value))
    return `Please add at lease one upper case letter`;
  if (!hasSpecialCharacter(input.value))
    return `Please add at lease one special character (*./@# etc.)`;
}
