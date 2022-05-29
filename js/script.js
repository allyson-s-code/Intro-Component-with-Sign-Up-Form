const submit = document.querySelector(".registerbtn");
const firstNameField = document.getElementById("first-name-field");
const lastNameField = document.getElementById("last-name-field");
const emailField = document.getElementById("email-field");
const passwordField = document.getElementById("password-field");

//validate onclick
submit.addEventListener("click", function (e) {
  e.preventDefault();
  validateForm();
});

//check input- if invalid- error message

const validateForm = function () {
  //First Name
  if (!firstNameField.value) {
    displayError(firstNameField);
    firstNameField.setAttribute("placeholder", "");
  } else {
    removeError(firstNameField);
  }

  //Last Name
  if (!lastNameField.value) {
    displayError(lastNameField);
    lastNameField.setAttribute("placeholder", "");
  } else {
    removeError(lastNameField);
  }

  //Email
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailField.value || !emailField.value.match(mailFormat)) {
    displayError(emailField);
    emailField.setAttribute("placeholder", "");
  } else {
    removeError(emailField);
    return emailField.value.toLowerCase().trim();
  }

  //Password
  if (!passwordField.value) {
    displayError(passwordField);
    passwordField.setAttribute("placeholder", "");
  } else {
    removeError(passwordField);
  }
};

const displayError = function (element) {
  const parentElement = element.parentElement;
  parentElement.classList.add("input-field--error");
};

const removeError = function (element) {
  const parentElement = element.parentElement;
  parentElement.classList.remove("input-field--error");
};
