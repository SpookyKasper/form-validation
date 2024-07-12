export default function checkPassConfValidity(field, originalField) {
  const input = field.querySelector("input");
  const originalInput = originalField.querySelector("input");
  const errorSpan = field.querySelector(".error");
  input.value === originalInput.value
    ? resetErrorSpan(errorSpan)
    : activateErrorSpan(errorSpan);
}

function resetErrorSpan(errorSpan) {
  errorSpan.textContent = "";
  errorSpan.className = "error";
}

function activateErrorSpan(errorSpan) {
  errorSpan.textContent = "Password must match";
  errorSpan.classList.add("active");
}
