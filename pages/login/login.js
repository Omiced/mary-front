import { loginUser } from "../../services/auth.service.js";
import { showAlert } from "../../util/alerts.js";

const formLogin = document.querySelector("form");

formLogin.addEventListener("submit", async (e) => {
  e.preventDefault();
  const loginObject = Object.fromEntries([...new FormData(formLogin)]);
  const { token } = await loginUser(loginObject);
  localStorage.setItem("token", token);
  formLogin.reset();
  showAlert("Iniciando sesion...", formLogin);
  setTimeout(() => (window.location.href = "/pages/artist/artist.html"), 3000);
});
