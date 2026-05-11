'use client';

import { useState } from 'react';
import Header from './Header';
import AuthModal from '@/screens/AuthModal';

export default function ClientLayout({ children }) {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div className="etapp">
      <Header onAuth={() => setShowAuth(true)} />
      {children}
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </div>
  );
}
