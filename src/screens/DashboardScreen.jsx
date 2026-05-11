'use client';

import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/Icon';
import { Btn, Chip, Avatar, Badge, TrustRing } from '@/components/Atoms';
import { allListings } from '@/lib/listings';

const chartData = [42, 38, 46, 51, 49, 58, 62, 68, 74, 71, 79, 86];

export default function DashboardScreen() {
  return (
    <main className="etdash">
      {/* Sidebar */}
      <aside className="etside">
        <div className="etside-logo">
          <Link href="/">
            <Image src="/logo-mark.svg" width={36} height={36} alt="Etoono" />
          </Link>
        </div>
        <nav className="etside-nav">
          {[
            { i: 'layout-dashboard', l: 'Overview', href: '/dashboard', on: true },
            { i: 'building-2',       l: 'My properties', href: '#' },
            { i: 'sparkles',         l: 'AI valuations',  href: '#' },
            { i: 'trending-up',      l: 'Market insights', href: '#' },
            { i: 'message-circle',   l: 'Messages',       href: '#', n: 3 },
            { i: 'heart',            l: 'Saved',          href: '#' },
            { i: 'bell',             l: 'Notifications',  href: '#' },
          ].map(item => (
            <Link key={item.l} href={item.href} className={item.on ? 'on' : ''}>
              <Icon name={item.i} size={18} /> {item.l}
              {item.n ? <span className="etside-n">{item.n}</span> : null}
            </Link>
          ))}
        </nav>
        <div className="etside-foot">
          <Link href="#"><Icon name="settings" size={18} /> Settings</Link>
          <Link href="/"><Icon name="log-out" size={18} /> Back to site</Link>
        </div>
      </aside>

      {/* Main */}
      <div className="etdash-main">
        <header className="etdash-head">
          <div>
            <div className="t-overline" style={{ color: 'var(--fg-muted)' }}>Wednesday, May 13</div>
            <h1 className="t-h1" style={{ marginTop: 6 }}>Welcome back, Enkhtuvshin</h1>
          </div>
          <div className="etdash-head-right">
            <button className="eticon-btn"><Icon name="search" size={16} /></button>
            <button className="eticon-btn"><Icon name="bell" size={16} /></button>
            <Avatar name="Enkhtuvshin Nyamdorj" size={36} color="#3E4A6E" />
          </div>
        </header>

        {/* KPIs */}
        <section className="etkpis">
          {[
            { l: 'Active listings',      v: '4',     d: '+1 this week' },
            { l: 'Average trust score',  v: '92',    d: '/ 100', ai: true },
            { l: 'Views (30d)',          v: '8,412', d: '+22% vs prev' },
            { l: 'Inquiries',            v: '37',    d: '9 unread' },
          ].map(k => (
            <div key={k.l} className={`etkpi${k.ai ? ' ai' : ''}`}>
              <div className="etkpi-l">{k.l}</div>
              <div className="etkpi-v">{k.v} <span>{k.d}</span></div>
              {k.ai && <Icon name="sparkles" size={14} className="etkpi-ic" />}
            </div>
          ))}
        </section>

        {/* Chart + Insights */}
        <section className="etpanels">
          <div className="etpanel">
            <div className="etpanel-head">
              <div>
                <div className="t-overline" style={{ color: 'var(--accent-ink)' }}>AI Prediction</div>
                <h3 className="t-h3" style={{ marginTop: 6 }}>Price trend, Sükhbaatar 3-room</h3>
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                <Chip>1Y</Chip><Chip active>2Y</Chip><Chip>5Y</Chip>
              </div>
            </div>
            <div className="etchart">
              <svg viewBox="0 0 600 220" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="fade" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[40, 80, 120, 160].map(y => (
                  <line key={y} x1="0" x2="600" y1={y} y2={y} stroke="rgba(15,23,42,.05)" />
                ))}
                <path
                  d={`M 0 ${220 - chartData[0] * 2.2} ${chartData.map((v, i) => `L ${(i / (chartData.length - 1)) * 600} ${220 - v * 2.2}`).join(' ')} L 600 220 L 0 220 Z`}
                  fill="url(#fade)"
                />
                <path
                  d={`M 0 ${220 - chartData[0] * 2.2} ${chartData.map((v, i) => `L ${(i / (chartData.length - 1)) * 600} ${220 - v * 2.2}`).join(' ')}`}
                  fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round"
                />
                <path
                  d={`M ${(8 / 11) * 600} ${220 - chartData[8] * 2.2} L 600 ${220 - 92 * 2.2}`}
                  fill="none" stroke="#10B981" strokeWidth="2.5" strokeDasharray="4 4"
                />
                <circle cx={(8 / 11) * 600} cy={220 - chartData[8] * 2.2} r="5" fill="#fff" stroke="#10B981" strokeWidth="2.5" />
              </svg>
              <div className="etchart-label">
                <span className="t-overline" style={{ color: 'var(--accent-ink)' }}>Forecast</span>
                <span className="t-num" style={{ fontSize: 18, color: 'var(--fg)' }}>+8.2%</span>
                <span className="t-body-sm">over next 12 months</span>
              </div>
            </div>
          </div>

          <div className="etpanel">
            <div className="etpanel-head">
              <h3 className="t-h3">Smart insights</h3>
            </div>
            {[
              { i: 'trending-up',  t: 'Sükhbaatar prices rose 1.4% this month', d: 'Ahead of Ulaanbaatar avg of 0.8%.' },
              { i: 'shield-check', t: '3 listings pending verification',         d: 'Average review time: 2h 14m.' },
              { i: 'sparkles',     t: 'New comp added near your property',       d: '78m² · sold for 408M ₮ on May 11.' },
            ].map(x => (
              <div key={x.t} className="etinsight">
                <div className="etinsight-icon"><Icon name={x.i} size={16} /></div>
                <div>
                  <div className="etinsight-t">{x.t}</div>
                  <div className="etinsight-d">{x.d}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* My properties table */}
        <section className="etpanel">
          <div className="etpanel-head">
            <h3 className="t-h3">My properties</h3>
            <Btn kind="secondary" size="sm" icon="plus">Add listing</Btn>
          </div>
          <table className="ettable">
            <thead>
              <tr>
                <th>Property</th><th>Price</th><th>Trust</th>
                <th>Views</th><th>Status</th><th></th>
              </tr>
            </thead>
            <tbody>
              {allListings.slice(0, 4).map(p => (
                <tr key={p.id}>
                  <td>
                    <div className="ettable-prop">
                      <div className="ettable-thumb" style={{ backgroundImage: `url(${p.img})` }} />
                      <div>
                        <div className="ettable-title">{p.rooms}-rm · {p.area} m²</div>
                        <div className="ettable-sub">{p.district}, {p.city}</div>
                      </div>
                    </div>
                  </td>
                  <td className="t-num">{p.price.toLocaleString()} ₮</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <TrustRing score={p.score} size={18} />
                      <span className="t-num">{p.score}</span>
                    </div>
                  </td>
                  <td className="t-num">{(1240 + p.id * 137).toLocaleString()}</td>
                  <td>
                    <Badge kind={p.score >= 90 ? 'ai' : 'neutral'}>
                      {p.score >= 90 ? 'Verified' : 'Review'}
                    </Badge>
                  </td>
                  <td>
                    <button className="eticon-btn"><Icon name="more-horizontal" size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
