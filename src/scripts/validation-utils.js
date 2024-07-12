export function addPatternMatching(input, pattern) {
  input.setAttribute("pattern", pattern);
}

export function addRequiredField(input) {
  input.required = true;
}

export function addMinLength(input, length) {
  input.minLength = length;
}

export function createErrorSpan() {
  const errorSpan = document.createElement("span");
  errorSpan.classList.add("error");
  errorSpan.ariaLive = "polite";
  return errorSpan;
}
