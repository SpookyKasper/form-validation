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
  errorSpan.textContent = showPassErrors(input);
  errorSpan.classList.add("active");
}
