const API_URL = "http://localhost:8080";
const DELTAGERE_URL = API_URL + "/api/deltagere";

// Fetch deltagere
async function getDeltagere() {
  const response = await fetch(DELTAGERE_URL);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return await response.json();
  }
}
// Fetch deltagere by ID
async function getDeltagereById(id: number) {
    const url = `${DELTAGERE_URL}/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        return await response.json();
    }
}

export { getDeltagere, getDeltagereById};
