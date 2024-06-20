import DeltagerListe from "../components/DeltagerListe";

export default function DeltagerPage() {
return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Deltagere</h1>
        <DeltagerListe />
    </div>
);
}