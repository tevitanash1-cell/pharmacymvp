interface Pharmacy {
  id: number;
  name: string;
  visitsPerMonth: number;
  lastVisit: string;
}

export default function PharmacyCard({ pharmacy }: { pharmacy: Pharmacy }) {
  return (
    <div className="border p-4 rounded-md shadow-sm mb-3">
      <h2 className="text-lg font-bold">{pharmacy.name}</h2>
      <p>Visits per month: {pharmacy.visitsPerMonth}</p>
      <p>Last visit: {pharmacy.lastVisit}</p>
    </div>
  );
}
