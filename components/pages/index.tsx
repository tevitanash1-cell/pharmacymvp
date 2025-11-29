import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Pharmacy Tracker</h1>
      <Link href="/pharmacies">
        <a className="text-blue-500 underline">View Pharmacies</a>
      </Link>
    </div>
  );
}
