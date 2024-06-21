// src/components/ResultatListe.tsx
import { useEffect, useState } from "react";
import { Resultat } from "../types/resultater";
import { getResultater } from "../services/apiFacade";

export default function ResultatListe() {
  const [resultater, setResultater] = useState<Resultat[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResultater = async () => {
      try {
        const data = await getResultater();
        setResultater(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchResultater();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Resultater</h1>
      {resultater.length === 0 ? (
        <p className="text-center">No resultater found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b">Resultat</th>
                <th className="py-2 px-4 border-b">Dato</th>
                <th className="py-2 px-4 border-b">Score</th>
              </tr>
            </thead>
            <tbody>
              {resultater.map((resultat) => (
                <tr key={resultat.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{resultat.resultat}</td>
                  <td className="py-2 px-4 border-b">{resultat.dato}</td>
                  <td className="py-2 px-4 border-b">{resultat.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
