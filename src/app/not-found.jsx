import Link from 'next/link';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: 12,
        padding: 32,
        textAlign: 'center',
        background: 'var(--bg)',
      }}
    >
      <img src="/logo-mark.svg" width="48" alt="Etoono" style={{ marginBottom: 8 }} />
      <h1 className="t-h2">Page not found</h1>
      <p className="t-body-sm" style={{ maxWidth: 320 }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="etbtn etbtn-primary etbtn-md"
        style={{ marginTop: 8 }}
      >
        Back to home
      </Link>
    </div>
  );
}
