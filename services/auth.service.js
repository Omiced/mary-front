const BASE_URL = "http://localhost:8080/api/auth";

export const registerUser = async function (userObject) {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userObject),
    });
    if (!response.ok)
      throw new Error("Error en el registro: " + response.status);
    console.log(`registro exitoso ${response.ok}`);
  } catch (e) {
    console.error("Fallo la peticion de registro: ", e.message);
  }
};

export const loginUser = async function (loginObject) {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginObject),
    });
    if (!response.ok)
      throw new Error("Error al iniciar sesion: " + response.status);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("fallo en la peticion: ", error.message);
  }
};
