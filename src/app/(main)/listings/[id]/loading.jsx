export default function Loading() {
  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '24px 32px' }}>
      <div className="skeleton" style={{ height: 14, width: 130, marginBottom: 24, borderRadius: 6 }} />
      <div className="skeleton" style={{ aspectRatio: '16 / 8', borderRadius: 20, marginBottom: 12 }} />
      <div style={{ display: 'flex', gap: 8, marginBottom: 32 }}>
        {[...Array(7)].map((_, i) => (
          <div key={i} className="skeleton" style={{ flex: '0 0 92px', height: 64, borderRadius: 10 }} />
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 48 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="skeleton" style={{ height: 16, width: 120, borderRadius: 6 }} />
          <div className="skeleton" style={{ height: 40, width: '70%', borderRadius: 8 }} />
          <div className="skeleton" style={{ height: 200, borderRadius: 16, marginTop: 8 }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="skeleton" style={{ height: 200, borderRadius: 20 }} />
          <div className="skeleton" style={{ height: 160, borderRadius: 20 }} />
        </div>
      </div>
    </div>
  );
}
