import React, { useEffect, useState } from "react";
import { getDeltagere } from "../services/apiFacade"; // Replace 'apifacade' with the actual name of your API facade module

interface Deltager {
  id: number;
  navn: string;
  klub: string;
  gender: string;
  alder: number;
}

const DeltagerListe = () => {
  const [deltagere, setDeltagere] = useState<Deltager[]>([]);

  useEffect(() => {
    const fetchDeltagere = async () => {
      try {
        const data = await getDeltagere();
        setDeltagere(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDeltagere();
  }, []);

return (
    <div>
        <h1 style={{ textAlign: "center" }}>Deltagerliste</h1>
        <ul style={{ listStyleType: "none", padding: 0 }}>
            {deltagere.map((deltager: Deltager) => (
                <li key={deltager.id} style={{ marginBottom: "1rem" }}>
                    <div style={{ fontWeight: "bold" }}>{deltager.navn}</div>
                    <div>{deltager.klub}</div>
                    <div>
                        {deltager.gender} | {deltager.alder} years old
                    </div>
                </li>
            ))}
        </ul>
    </div>
);
};

export default DeltagerListe;
