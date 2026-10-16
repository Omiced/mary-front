const BASE_URL = "http://localhost:8080/api";

export const addAlbum = async function (token, artistId, albumObject) {
  try {
    const response = await fetch(`${BASE_URL}/artist/${artistId}/albums`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(albumObject),
    });
    if (!response.ok) throw Error("Error al crear el album: ", response.status);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Fallo en la peticion: ", error.message);
  }
};
