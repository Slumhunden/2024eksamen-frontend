import ResultatListe from '../components/ResultatListe';

export default function ResultsPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Resultater</h1>
      <ResultatListe />
    </div>
  );
}
