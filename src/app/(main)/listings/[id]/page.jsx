import { notFound } from 'next/navigation';
import { allListings } from '@/lib/listings';
import DetailScreen from '@/screens/DetailScreen';

export function generateStaticParams() {
  return allListings.map(p => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const p = allListings.find(l => l.id === Number(id));
  if (!p) return { title: 'Property not found' };
  return {
    title: `${p.rooms}-room in ${p.district} · ${p.price.toLocaleString()} ₮`,
    description: `${p.area} m² · Floor ${p.floor} · AI trust score ${p.score}/100 · ${p.district}, ${p.city}`,
  };
}

export default async function DetailPage({ params }) {
  const { id } = await params;
  const p = allListings.find(l => l.id === Number(id));
  if (!p) notFound();
  return <DetailScreen p={p} />;
}
