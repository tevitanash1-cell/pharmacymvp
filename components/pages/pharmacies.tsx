import { useEffect, useState } from 'react';
import PharmacyCard from '../components/PharmacyCard';

interface Pharmacy {
  id: number;
  name: string;
  visitsPerMonth: number;
  lastVisit: string;
}

export default function PharmaciesPage() {
  const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);

  useEffect(() => {
    fetch('/api/pharmacies')
      .then(res => res.json())
      .then(data => setPharmacies(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pharmacies</h1>
      {pharmacies.map(p => (
        <PharmacyCard key={p.id} pharmacy={p} />
      ))}
    </div>
  );
}
