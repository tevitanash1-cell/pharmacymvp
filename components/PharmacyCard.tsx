interface Pharmacy {
  id: number;
  name: string;
  visitsPerMonth: number;
  lastVisit: string;
}

export default function PharmacyCard({ pharmacy }: { pharmacy: Pharmacy }) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
      <h2>{pharmacy.name}</h2>
      <p>Visits per month: {pharmacy.visitsPerMonth}</p>
      <p>Last visit: {pharmacy.lastVisit}</p>
    </div>
  );
}
