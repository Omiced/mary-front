import { registerUser } from "./services/auth.service.js";
import { showAlert } from "./util/alerts.js";

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const userObject = Object.fromEntries([...new FormData(formEl)]);
  registerUser(userObject);
  showAlert("registro exitoso redirigiendo al login", formEl);
  formEl.reset();
  setTimeout(() => (window.location.href = "/pages/login/login.html"), 3000);
});
