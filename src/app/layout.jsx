import './globals.css';

export const metadata = {
  title: {
    default: 'Etoono — Real estate in Mongolia',
    template: '%s — Etoono',
  },
  description:
    'Etoono AI verifies every listing, prices it against the market, and flags scams before you ever pick up the phone.',
  keywords: ['real estate', 'Mongolia', 'Ulaanbaatar', 'property', 'AI valuation'],
  openGraph: {
    title: 'Etoono — Real estate in Mongolia',
    description:
      'Etoono AI verifies every listing, prices it against the market, and flags scams before you ever pick up the phone.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
