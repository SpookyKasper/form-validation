export default function checkEmailValidity(field) {
  const input = field.querySelector("input");
  const errorSpan = field.querySelector(".error");
  input.validity.valid
    ? resetErrorSpan(errorSpan)
    : activateErrorSpan(errorSpan, input);
}

function resetErrorSpan(errorSpan) {
  errorSpan.textContent = "";
  errorSpan.className = "error";
}

function activateErrorSpan(errorSpan, input) {
  errorSpan.textContent = showEmailErrors(input);
  errorSpan.classList.add("active");
}

function showEmailErrors(input) {
  if (input.validity.valueMissing) return "Email can't be blank";
  if (input.validity.typeMismatch) return "Please enter a valid email";
  if (input.validity.tooShort)
    return `Email should be at least ${input.minLength} characters; you entered ${input.value.length}`;
}
