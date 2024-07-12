import checkPassConfValidity from "./checkPassConfValidity";

export default function addPassConfValidation(confirmField, originalField) {
  displayErrorsOnBlur(confirmField, originalField);
}

function displayErrorsOnBlur(confirmField, originalField) {
  const input = confirmField.querySelector("input");
  input.addEventListener("input", () =>
    checkPassConfValidity(confirmField, originalField)
  );
}
