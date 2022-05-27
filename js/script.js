const submit = document.querySelector(".registerbtn");
const firstNameField = document.getElementById("first-name-field");
const firstError = document.getElementById("firstError");
const iErrorFirst = document.getElementById("i-error-first");

const lastNameField = document.getElementById("last-name-field");
const lastError = document.getElementById("lastError");
const iErrorLast = document.getElementById("i-error-last");

const emailField = document.getElementById("email-field");
const emailError = document.getElementById("emailError");
const iErrorEmail = document.getElementById("i-error-email");

const passwordField = document.getElementById("password-field");
const passError = document.getElementById("passError");
const iErrorPass = document.getElementById("i-error-pass");

//check input- if invalid- error message
const validateName = (e) => {
  if (!firstNameField.value) {
    firstError.classList.add("visible");
    iErrorFirst.classList.add("visible");
    firstNameField.classList.add("input-error");
    firstNameField.setAttribute("aria-hidden", false);
    firstNameField.setAttribute("aria-invalid", true);
  } else {
    firstError.classList.remove("visible");
    iErrorFirst.classList.remove("visible");
    firstNameField.classList.remove("input-error");
    firstNameField.setAttribute("aria-hidden", true);
    firstNameField.setAttribute("aria-invalid", false);
  }
};

const validateLast = (e) => {
  if (!lastNameField.value) {
    lastError.classList.add("visible");
    iErrorLast.classList.add("visible");
    lastNameField.classList.add("input-error");
    lastNameField.setAttribute("aria-hidden", false);
    lastNameField.setAttribute("aria-invalid", true);
  } else {
    lastError.classList.remove("visible");
    iErrorLast.classList.remove("visible");
    lastNameField.classList.remove("input-error");
    lastNameField.setAttribute("aria-hidden", true);
    lastNameField.setAttribute("aria-invalid", false);
  }
};

const validateEmail = (e) => {
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailField.value || !emailField.value.match(mailFormat)) {
    emailError.classList.add("visible");
    iErrorEmail.classList.add("visible");
    emailField.classList.add("input-error");
    emailField.setAttribute("aria-hidden", false);
    emailField.setAttribute("aria-invalid", true);
  } else {
    emailError.classList.remove("visible");
    iErrorEmail.classList.remove("visible");
    emailField.classList.remove("input-error");
    emailField.setAttribute("aria-hidden", true);
    emailField.setAttribute("aria-invalid", false);
  }
};

const validatePassword = (e) => {
  if (!passwordField.value) {
    passError.classList.add("visible");
    iErrorPass.classList.add("visible");
    passwordField.classList.add("input-error");
    passwordField.setAttribute("aria-hidden", false);
    passwordField.setAttribute("aria-invalid", true);
  } else {
    passError.classList.remove("visible");
    iErrorPass.classList.remove("visible");
    passwordField.classList.remove("input-error");
    passwordField.setAttribute("aria-hidden", true);
    passwordField.setAttribute("aria-invalid", false);
  }
};

//validate onclick
submit.addEventListener("click", function (e) {
  e.preventDefault();
  validateName();
  validateLast();
  validateEmail();
  validatePassword();
});
