import _ from "lodash";

export function createInputField(type, id, placeholder = "") {
  const inputContainer = createInputFieldContainer();
  const myLabelEl = createLabelEl(id);
  const myInputEl = createInputEl(type, id, placeholder);

  inputContainer.append(myLabelEl, myInputEl);

  return inputContainer;
}

export function createSelectField(id, options, firstOption) {
  const inputContainer = createInputFieldContainer();
  const myLabelEl = createLabelEl(id);
  const mySelectEl = createSelectEl(id, options, firstOption);

  inputContainer.append(myLabelEl, mySelectEl);

  return inputContainer;
}

function createInputFieldContainer() {
  const inputFieldContainer = document.createElement("div");
  inputFieldContainer.classList.add("input-field");
  return inputFieldContainer;
}

function createLabelEl(id) {
  const labelEl = document.createElement("label");
  labelEl.setAttribute("for", id);
  labelEl.textContent = _.startCase(id);
  return labelEl;
}

function createInputEl(type, id, placeholder) {
  const inputEl = document.createElement("input");
  inputEl.setAttribute("type", type);
  inputEl.setAttribute("id", id);
  inputEl.placeholder = placeholder;
  return inputEl;
}

function createSelectEl(id, options, firstOption) {
  const selectEl = document.createElement("select");
  selectEl.setAttribute("id", id);
  selectEl.append(createOptionEl(firstOption));
  options.forEach((option) => {
    const myOptionEl = createOptionEl(option);
    selectEl.append(myOptionEl);
  });
  return selectEl;
}

function createOptionEl(value) {
  const optionEl = document.createElement("option");
  optionEl.setAttribute("value", value);
  optionEl.textContent = _.startCase(value);
  return optionEl;
}
