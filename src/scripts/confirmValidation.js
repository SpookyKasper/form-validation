export default function confirmValidation(confirmField, originalField) {
  const errorSpan = confirmField.querySelector(".error");
  const confirmInput = confirmField.querySelector("input");
  const originalInput = originalField.querySelector("input");
  checkValidationOnBlur(confirmInput, originalInput, errorSpan);
}

function checkValidationOnBlur(confirmInput, originalInput, errorSpan) {
  confirmInput.addEventListener("blur", () => {
    if (confirmInput.value === originalInput.value) {
      errorSpan.textContent = "";
      errorSpan.className = "error";
    } else {
      errorSpan.textContent = "Passwords don't match";
      errorSpan.classList.add("active");
    }
  });
}
