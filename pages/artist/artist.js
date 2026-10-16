import { createArtist } from "../../services/artist.service.js";
import { showAlert } from "../../util/alerts.js";
const artistForm = document.querySelector("form");

artistForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const artistObject = Object.fromEntries([...new FormData(artistForm)]);
  const token = localStorage.getItem("token");
  createArtist(token, artistObject);
  artistForm.reset();
  alert("artista creado");
});
