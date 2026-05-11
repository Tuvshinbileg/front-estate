'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Icon from './Icon';
import { Btn } from './Atoms';

export default function Header({ onAuth }) {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isListings = pathname === '/listings' || pathname.startsWith('/listings/');
  const isDashboard = pathname === '/dashboard';

  return (
    <header className={`etheader${scrolled ? ' is-scrolled' : ''}`}>
      <div className="etheader-inner">
        <a className="etlogo" onClick={() => router.push('/')}>
          <Image src="/logo-wordmark.svg" alt="Etoono" width={100} height={28} priority />
        </a>
        <nav className="etnav">
          <a className={isListings ? 'on' : ''} onClick={() => router.push('/listings')}>Buy</a>
          <a>Rent</a>
          <a>Sell</a>
          <a className={isDashboard ? 'on' : ''} onClick={() => router.push('/dashboard')}>
            AI valuation
          </a>
          <a>Help</a>
        </nav>
        <div className="etheader-right">
          <button className="eticon-btn" aria-label="Notifications">
            <Icon name="bell" size={18} />
          </button>
          <Btn kind="ghost" size="sm" onClick={onAuth}>Sign in</Btn>
          <Btn kind="primary" size="sm" icon="plus">List property</Btn>
        </div>
      </div>
    </header>
  );
}
