'use client';

import { useState } from 'react';
import Icon from '@/components/Icon';
import { Chip, GlassPill } from '@/components/Atoms';
import PropertyCard from '@/components/PropertyCard';
import { allListings } from '@/lib/listings';

export default function ListingsScreen() {
  const [view, setView] = useState('grid');
  const [rooms, setRooms] = useState([2, 3]);
  const [page, setPage] = useState(3);
  const totalPages = 64;

  const toggleRoom = n =>
    setRooms(prev => (prev.includes(n) ? prev.filter(x => x !== n) : [...prev, n]));

  const pagerNums = () => {
    const pages = [1];
    if (page > 3) pages.push('…');
    for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) pages.push(i);
    if (page < totalPages - 2) pages.push('…');
    pages.push(totalPages);
    return pages;
  };

  return (
    <main className="etlistings">
      {/* Filter bar */}
      <div className="etfilter-bar">
        <div className="etfilter-bar-inner">
          <div className="etsearch-pill">
            <Icon name="search" size={16} />
            <input placeholder="Sükhbaatar, Ulaanbaatar" defaultValue="Ulaanbaatar" />
          </div>
          <div className="etfilters">
            {['Apartment', 'House', 'New build', 'Studio'].map(t => (
              <Chip key={t} active={t === 'Apartment'}>{t}</Chip>
            ))}
            <span className="etdiv" />
            {[1, 2, 3, '4+'].map(n => (
              <Chip key={n} active={rooms.includes(n)} onClick={() => toggleRoom(n)}>
                {n} rm
              </Chip>
            ))}
            <span className="etdiv" />
            <Chip>Price</Chip>
            <Chip>Area</Chip>
            <Chip icon="sparkles">AI verified only</Chip>
            <Chip icon="sliders-horizontal">More filters</Chip>
          </div>
          <div className="etfilter-right">
            <button className={`etview${view === 'grid' ? ' on' : ''}`} onClick={() => setView('grid')}>
              <Icon name="layout-grid" size={16} />
            </button>
            <button className={`etview${view === 'map' ? ' on' : ''}`} onClick={() => setView('map')}>
              <Icon name="map" size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="etresults">
        <div className="etresults-list">
          <div className="etresults-head">
            <div>
              <h2 className="t-h2">2,418 properties in Ulaanbaatar</h2>
              <p className="t-body-sm" style={{ marginTop: 4 }}>AI-verified · sorted by best match</p>
            </div>
            <div className="etresults-sort">
              <span className="t-caption">Sort:</span>
              <select className="etselect">
                <option>Best match</option>
                <option>Price: low to high</option>
                <option>Newest</option>
                <option>Trust score</option>
              </select>
            </div>
          </div>

          <div className="etgrid-3">
            {allListings.map(p => <PropertyCard key={p.id} p={p} />)}
          </div>

          {/* Pagination */}
          <nav className="etpager" aria-label="Listings pagination">
            <div className="etpager-meta">
              Showing <b>{(page - 1) * 12 + 1}–{page * 12}</b> of <b>2,418</b>
            </div>
            <div className="etpager-controls">
              <button
                className="etpager-btn"
                disabled={page === 1}
                onClick={() => setPage(p => Math.max(1, p - 1))}
              >
                <Icon name="chevron-left" size={14} /> Prev
              </button>
              {pagerNums().map((n, i) =>
                n === '…' ? (
                  <span key={`e${i}`} className="etpager-gap">…</span>
                ) : (
                  <button
                    key={n}
                    className={`etpager-num${n === page ? ' on' : ''}`}
                    onClick={() => setPage(n)}
                  >
                    {n}
                  </button>
                )
              )}
              <button
                className="etpager-btn"
                disabled={page === totalPages}
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              >
                Next <Icon name="chevron-right" size={14} />
              </button>
            </div>
          </nav>
        </div>

        {/* Map */}
        <aside className="etmap-col">
          <div className="etmap">
            <div className="etmap-tile" />
            {allListings.slice(0, 6).map((p, i) => (
              <div
                key={p.id}
                className="etpin"
                style={{ left: 20 + (i * 47) % 240, top: 60 + (i * 73) % 280 }}
              >
                <span className="etpin-price">{Math.round(p.price / 1e6)}M ₮</span>
              </div>
            ))}
            <GlassPill className="etmap-glass">
              <Icon name="sparkles" size={14} /> 2,418 results in this area
            </GlassPill>
            <div className="etmap-controls">
              <button><Icon name="plus" size={14} /></button>
              <button><Icon name="minus" size={14} /></button>
              <button><Icon name="locate" size={14} /></button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
