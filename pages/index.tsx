import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Welcome to Pharmacy Tracker</h1>
      <Link href="/pharmacies">
        <a style={{ color: 'blue', textDecoration: 'underline' }}>View Pharmacies</a>
      </Link>
    </div>
  );
}
