const API_URL = "http://localhost:8080";
const DELTAGERE_URL = API_URL + "/api/deltagere";
const RESULTATER_URL = API_URL + "/api/resultater";

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

// Fetch resultater
async function getResultater() {
  const response = await fetch(RESULTATER_URL);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return await response.json();
  }
}

export { getDeltagere, getDeltagereById, getResultater};
