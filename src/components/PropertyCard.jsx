'use client';

import { useRouter } from 'next/navigation';
import Icon from './Icon';
import { Badge, TrustRing } from './Atoms';

export default function PropertyCard({ p }) {
  const router = useRouter();

  return (
    <article className="etcard" onClick={() => router.push(`/listings/${p.id}`)}>
      <div className="etcard-img" style={{ backgroundImage: `url(${p.img})` }}>
        <Badge kind="ai">AI verified · {p.score}</Badge>
        <button
          className="etheart"
          aria-label="Save"
          onClick={e => e.stopPropagation()}
        >
          <Icon name="heart" size={16} />
        </button>
        {p.tag && <span className="ettag">{p.tag}</span>}
      </div>
      <div className="etcard-body">
        <div className="etcard-row">
          <div className="etprice">
            {p.price.toLocaleString()} <span className="etprice-cur">₮</span>
          </div>
          <TrustRing score={p.score} size={20} />
        </div>
        <div className="etmeta">
          <span><Icon name="bed-double" size={14} /> {p.rooms} rooms</span>
          <span><Icon name="ruler" size={14} /> {p.area} m²</span>
          <span><Icon name="building-2" size={14} /> Fl. {p.floor}</span>
        </div>
        <div className="etloc">
          <Icon name="map-pin" size={14} style={{ color: 'var(--accent)' }} />
          {p.district} · {p.city}
        </div>
      </div>
    </article>
  );
}
