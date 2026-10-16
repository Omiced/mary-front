import { getAllArtist } from "/services/artist.service.js";
import { addAlbum } from "../../services/album.service.js";
import { showAlert } from "../../util/alerts.js";
const albumForm = document.querySelector("form");
const selectArtist = albumForm.querySelector("select");

const loadArtist = async () => {
  selectArtist.innerHTML =
    '<option value="" selected disabled>-- Elige tu artista --</option>';
  const token = localStorage.getItem("token");
  const data = await getAllArtist(token);
  const options = data
    .map((artist) => `<option value="${artist.id}">${artist.name}</option>`)
    .join("");
  selectArtist.insertAdjacentHTML("beforeend", options);
};

loadArtist();

albumForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = Object.fromEntries([...new FormData(albumForm)]);
  console.log(formData);
  const album = {
    name: formData.name,
    releaseYear: formData.releaseDate,
  };
  const token = localStorage.getItem("token");
  const result = await addAlbum(token, formData.artistId, album);
  console.log(result);
  showAlert("album creado", albumForm);
});
