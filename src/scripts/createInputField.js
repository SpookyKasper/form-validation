import _ from "lodash";

export default function createInputField(type, id, placeholder = "") {
  const inputField = document.createElement("div");
  inputField.classList.add("input-field");
  const labelEl = document.createElement("label");
  labelEl.setAttribute("for", id);
  labelEl.textContent = _.startCase(id);
  const inputEl = document.createElement("input");
  inputEl.setAttribute("type", type);
  inputEl.setAttribute("id", id);
  inputEl.placeholder = placeholder;
  inputField.append(labelEl, inputEl);
  return inputField;
}
