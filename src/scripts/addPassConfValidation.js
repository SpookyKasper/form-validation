import checkPassConfValidity from "./checkPassConfValidity";

export default function addPassConfValidation(confirmField, originalField) {
  const originalInput = originalField.querySelector("input");
  displayErrorsOnBlur(confirmField, originalInput);
}

function displayErrorsOnBlur(confirmField, originalInput) {
  const input = confirmField.querySelector("input");
  input.addEventListener("input", () =>
    checkPassConfValidity(confirmField, originalInput)
  );
}
