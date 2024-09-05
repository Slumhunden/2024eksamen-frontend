import React, { useEffect, useState } from "react";
import { getDeltagere } from "../services/apiFacade"; // Replace 'apifacade' with the actual name of your API facade module

interface Deltager {
  id: number;
  navn: string;
  klub: string;
  gender: string;
  alder: number;
  discipliner: Disciplin[];
  resultater: Resultat[];
}

interface Disciplin {
  id: number;
  navn: string;
  resultatType: string;
}

interface Resultat {
  id: number;
  resultat: string;
  dato: string;
  score: number;
  disciplin: Disciplin;
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
            Navn:
            <div style={{ fontWeight: "bold" }}>{deltager.navn}</div>
            <div>Klub: {deltager.klub}</div>
            <div>
              Køn: {deltager.gender} | {deltager.alder} years old
            </div>
            <div>
              {deltager.discipliner.map((disciplin: Disciplin) => (
                <span key={disciplin.id}> Disciplin: {disciplin.navn}</span>
              ))}
            </div>
            <div></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeltagerListe;
