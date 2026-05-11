'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Icon from '@/components/Icon';
import { Btn, Avatar, Badge } from '@/components/Atoms';
import AIValuation from '@/components/AIValuation';

const galleryImgs = [
  'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=70',
  'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1400&q=70',
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=70',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=70',
  'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1400&q=70',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=70',
  'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1400&q=70',
];

function GalleryCarousel({ imgs, score }) {
  const [idx, setIdx] = useState(0);
  const total = imgs.length;
  const prev = e => { e.stopPropagation(); setIdx(i => (i - 1 + total) % total); };
  const next = e => { e.stopPropagation(); setIdx(i => (i + 1) % total); };

  return (
    <div className="etcarousel">
      <div className="etcarousel-stage">
        <div className="etcarousel-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
          {imgs.map((src, i) => (
            <div key={i} className="etcarousel-slide" style={{ backgroundImage: `url(${src})` }} />
          ))}
        </div>
        <Badge kind="ai">AI verified · {score}</Badge>
        <button className="etcarousel-arrow left" onClick={prev} aria-label="Previous">
          <Icon name="chevron-left" size={20} />
        </button>
        <button className="etcarousel-arrow right" onClick={next} aria-label="Next">
          <Icon name="chevron-right" size={20} />
        </button>
        <div className="etcarousel-counter">
          <Icon name="image" size={13} /> {idx + 1} / {total}
        </div>
      </div>
      <div className="etcarousel-thumbs">
        {imgs.map((src, i) => (
          <button
            key={i}
            className={`etcarousel-thumb${i === idx ? ' on' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
            onClick={() => setIdx(i)}
            aria-label={`Photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function DetailScreen({ p }) {
  const router = useRouter();

  return (
    <main className="etdetail">
      <button className="etdetail-back" onClick={() => router.back()}>
        <Icon name="chevron-left" size={16} /> Back to listings
      </button>

      <GalleryCarousel imgs={galleryImgs} score={p.score} />

      <div className="etdetail-grid">
        <div className="etdetail-main">
          <div className="etdetail-head">
            <div>
              <div className="t-overline" style={{ color: 'var(--accent-ink)' }}>
                Apartment · {p.district}
              </div>
              <h1 className="t-h1" style={{ marginTop: 6 }}>
                {p.rooms}-room apartment, {p.area} m²
              </h1>
              <div className="etmeta" style={{ marginTop: 10 }}>
                <span><Icon name="map-pin" size={14} /> {p.district}, {p.city}</span>
                <span><Icon name="building-2" size={14} /> Floor {p.floor} of 16</span>
                <span><Icon name="calendar" size={14} /> Built 2019</span>
              </div>
            </div>
            <div className="etdetail-actions">
              <button className="eticon-btn"><Icon name="heart" size={16} /></button>
              <button className="eticon-btn"><Icon name="share-2" size={16} /></button>
            </div>
          </div>

          <div className="etfeatures">
            {[
              { i: 'bed-double', l: `${p.rooms} bedrooms` },
              { i: 'bath', l: '2 bathrooms' },
              { i: 'ruler', l: `${p.area} m²` },
              { i: 'car', l: 'Parking' },
              { i: 'wind', l: 'Balcony' },
              { i: 'thermometer', l: 'Central heat' },
            ].map(f => (
              <div key={f.l} className="etfeature"><Icon name={f.i} size={18} /> {f.l}</div>
            ))}
          </div>

          <section className="etsec-block">
            <h3 className="t-h3">About this home</h3>
            <p className="t-body" style={{ marginTop: 12, color: 'var(--fg-muted)' }}>
              Quiet south-facing apartment on the {p.floor}th floor of a 2019 building in central{' '}
              {p.district}. Two minutes' walk to the State Department Store. Renovated 2023 —
              wood floors, full kitchen, in-suite laundry. Listed by the original owner.
            </p>
          </section>

          <section className="etsec-block">
            <h3 className="t-h3">AI verification</h3>
            <div className="etverify">
              {[
                { i: 'image', t: 'Photos authentic', d: 'All 22 images are original. EXIF dates match listing.' },
                { i: 'shield-check', t: 'Title verified', d: 'Document #UB-2019-3419 matches public registry.' },
                { i: 'trending-up', t: 'Priced fairly', d: '412M ₮ is within ±3% of comparable sales.' },
                { i: 'user-check', t: 'Seller verified', d: 'ID-checked. 2 prior listings closed via Etoono.' },
              ].map(v => (
                <div key={v.t} className="etverify-row">
                  <div className="etverify-icon"><Icon name="check" size={14} /></div>
                  <div>
                    <div className="etverify-title">{v.t}</div>
                    <div className="etverify-desc">{v.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="etpurchase">
          <div className="etpurchase-card">
            <div className="etprice" style={{ fontSize: 28 }}>
              {p.price.toLocaleString()} <span className="etprice-cur">₮</span>
            </div>
            <div className="t-body-sm" style={{ marginTop: 2 }}>
              ~ ${Math.round(p.price / 3450).toLocaleString()} USD ·{' '}
              {(p.price / p.area / 1e3).toFixed(0)}K ₮ / m²
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
              <Btn kind="primary" size="md">Contact seller</Btn>
              <Btn kind="secondary" size="md" icon="calendar">Book tour</Btn>
            </div>
            <div className="etseller">
              <Avatar name="Bolormaa Otgonbayar" size={40} />
              <div>
                <div className="etseller-name">
                  Bolormaa O.{' '}
                  <Icon name="badge-check" size={14} style={{ color: 'var(--accent)' }} />
                </div>
                <div className="etseller-role">Owner · 2 listings closed</div>
              </div>
            </div>
          </div>
          <AIValuation
            value={p.price}
            low={Math.round(p.price * 0.96 / 1e6)}
            high={Math.round(p.price * 1.04 / 1e6)}
          />
        </aside>
      </div>
    </main>
  );
}
