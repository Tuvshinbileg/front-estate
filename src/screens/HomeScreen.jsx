'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Icon from '@/components/Icon';
import { Btn, Chip, Avatar } from '@/components/Atoms';
import PropertyCard from '@/components/PropertyCard';
import AIValuation from '@/components/AIValuation';
import { featured } from '@/lib/listings';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <main className="ethome">
      {/* Hero */}
      <section className="ethero">
        <div className="ethero-bg" />
        <div className="ethero-inner">
          <div className="ethero-eyebrow">
            <Icon name="shield-check" size={14} /> Trusted by 18,400+ buyers in Mongolia
          </div>
          <h1 className="ethero-title">
            The honest way to buy<br />property in{' '}
            <span className="t-serif-accent" style={{ color: 'var(--emerald-300)' }}>
              Mongolia.
            </span>
          </h1>
          <p className="ethero-sub">
            Etoono AI verifies every listing, prices it against the market, and flags scams
            before you ever pick up the phone.
          </p>

          <div className="ethero-search">
            <div className="ethero-search-field">
              <Icon name="map-pin" size={16} />
              <div>
                <div className="lbl">Where</div>
                <input placeholder="Sükhbaatar, Ulaanbaatar" defaultValue="Sükhbaatar, Ulaanbaatar" />
              </div>
            </div>
            <div className="ethero-search-field">
              <Icon name="building-2" size={16} />
              <div>
                <div className="lbl">Property type</div>
                <input placeholder="Apartment" defaultValue="Apartment" />
              </div>
            </div>
            <div className="ethero-search-field">
              <Icon name="bed-double" size={16} />
              <div>
                <div className="lbl">Rooms</div>
                <input placeholder="2 – 3 rooms" defaultValue="2 – 3 rooms" />
              </div>
            </div>
            <button className="ethero-search-btn" onClick={() => router.push('/listings')}>
              <Icon name="search" size={18} /> Search
            </button>
          </div>

          <div className="ethero-quick">
            <span>Popular:</span>
            <Chip onClick={() => router.push('/listings')}>3-room in Sükhbaatar</Chip>
            <Chip onClick={() => router.push('/listings')}>Under 300M ₮</Chip>
            <Chip onClick={() => router.push('/listings')}>New builds</Chip>
            <Chip onClick={() => router.push('/listings')}>Khan-Uul houses</Chip>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="etsection">
        <div className="etsection-head">
          <div>
            <div className="t-overline" style={{ color: 'var(--accent-ink)' }}>Featured</div>
            <h2 className="t-h1" style={{ marginTop: 6 }}>Hand-picked, AI-verified</h2>
          </div>
          <Btn kind="ghost" size="sm" iconRight="arrow-right" onClick={() => router.push('/listings')}>
            See all listings
          </Btn>
        </div>
        <div className="etgrid-4">
          {featured.map(p => <PropertyCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* AI Valuation strip */}
      <section className="etsection">
        <div className="etvaluation-strip">
          <div>
            <div className="t-overline" style={{ color: 'var(--accent-ink)' }}>AI Valuation</div>
            <h2 className="t-h1" style={{ marginTop: 6, maxWidth: 520 }}>
              Know what your home is worth in 12 seconds.
            </h2>
            <p className="t-body-lg" style={{ color: 'var(--fg-muted)', marginTop: 12, maxWidth: 520 }}>
              Drop in an address. Etoono AI cross-references nearby sales, building age, floor,
              and 23 other signals to land an honest range — never a salesy headline number.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              <Btn kind="accent" icon="sparkles" onClick={() => router.push('/dashboard')}>
                Get a valuation
              </Btn>
              <Btn kind="secondary">How it works</Btn>
            </div>
          </div>
          <AIValuation />
        </div>
      </section>

      {/* Stats */}
      <section className="etstats">
        <div className="etstat"><div className="etstat-num">18,400<span>+</span></div><div className="etstat-lbl">Verified buyers</div></div>
        <div className="etstat"><div className="etstat-num">94<span>%</span></div><div className="etstat-lbl">Listings AI-verified</div></div>
        <div className="etstat"><div className="etstat-num">2.1B<span>₮</span></div><div className="etstat-lbl">Properties listed</div></div>
        <div className="etstat"><div className="etstat-num">±4<span>%</span></div><div className="etstat-lbl">Avg. valuation precision</div></div>
      </section>

      {/* How it works */}
      <section className="etsection">
        <div className="etsection-head">
          <div>
            <div className="t-overline" style={{ color: 'var(--accent-ink)' }}>How it works</div>
            <h2 className="t-h1" style={{ marginTop: 6 }}>AI verification, in three checks</h2>
          </div>
        </div>
        <div className="etgrid-3">
          {[
            { n: '01', t: 'Photo authenticity', d: 'Reverse-search and EXIF analysis catch reused or stolen images. Manipulated photos are rejected before listing.', i: 'image' },
            { n: '02', t: 'Document & ownership', d: 'Title docs, building registry, and ID are matched against the public registry. Mismatches surface as a red flag.', i: 'shield-check' },
            { n: '03', t: 'Market sanity check', d: "Listings priced 30%+ below market are reviewed manually. We'd rather lose a listing than ship a scam.", i: 'trending-up' },
          ].map(s => (
            <div key={s.n} className="ethow-card">
              <div className="ethow-num">{s.n}</div>
              <div className="ethow-icon"><Icon name={s.i} size={22} /></div>
              <h3 className="t-h3" style={{ marginTop: 16 }}>{s.t}</h3>
              <p className="t-body-sm" style={{ marginTop: 8 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="etsection">
        <div className="ettestimonial">
          <div className="ettest-quote">
            <span className="t-serif-accent" style={{ fontSize: 56, color: 'var(--accent)', lineHeight: 0.5, display: 'block', marginBottom: 16 }}>"</span>
            We almost wired a deposit on a listing that turned out to be fake. Etoono caught it before we did.
            The AI valuation also saved us 22M ₮ at negotiation.
          </div>
          <div className="ettest-attr">
            <Avatar name="Bolormaa Otgonbayar" size={48} color="#14204A" />
            <div>
              <div className="ettest-name">Bolormaa Otgonbayar</div>
              <div className="ettest-role">Bought a 3-room in Sükhbaatar · March 2026</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="etfoot">
        <div className="etfoot-inner">
          <Image src="/logo-wordmark-light.svg" alt="Etoono" width={100} height={28} />
          <div className="etfoot-cols">
            <div>
              <h4>Buy</h4>
              <a onClick={() => router.push('/listings')}>Apartments</a>
              <a onClick={() => router.push('/listings')}>Houses</a>
              <a onClick={() => router.push('/listings')}>New builds</a>
              <a onClick={() => router.push('/listings')}>Map view</a>
            </div>
            <div>
              <h4>AI Tools</h4>
              <a onClick={() => router.push('/dashboard')}>Valuation</a>
              <a onClick={() => router.push('/dashboard')}>Trust score</a>
              <a onClick={() => router.push('/dashboard')}>Insights</a>
              <a>API</a>
            </div>
            <div>
              <h4>Company</h4>
              <a>About</a><a>Careers</a><a>Press</a><a>Contact</a>
            </div>
          </div>
        </div>
        <div className="etfoot-bar">© 2026 Etoono · Made in Ulaanbaatar</div>
      </footer>
    </main>
  );
}
