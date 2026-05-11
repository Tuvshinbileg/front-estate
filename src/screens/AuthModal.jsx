'use client';

import { useState } from 'react';
import Image from 'next/image';
import Icon from '@/components/Icon';
import { Btn, Field } from '@/components/Atoms';

export default function AuthModal({ onClose }) {
  const [tab, setTab] = useState('signin');

  return (
    <div className="etmodal-shade" onClick={onClose}>
      <div className="etmodal" onClick={e => e.stopPropagation()}>
        <button className="etmodal-x" onClick={onClose} aria-label="Close">
          <Icon name="x" size={18} />
        </button>
        <div className="etmodal-inner">
          <Image src="/logo-mark.svg" width={40} height={40} alt="Etoono" />
          <h2 className="t-h2" style={{ marginTop: 16 }}>
            {tab === 'signin' ? 'Welcome back' : 'Create your account'}
          </h2>
          <p className="t-body-sm" style={{ marginTop: 4 }}>
            {tab === 'signin'
              ? 'Sign in to save searches and get AI valuations.'
              : 'Free forever. No agent commission.'}
          </p>

          <div className="ettabs">
            <button className={tab === 'signin' ? 'on' : ''} onClick={() => setTab('signin')}>
              Sign in
            </button>
            <button className={tab === 'signup' ? 'on' : ''} onClick={() => setTab('signup')}>
              Register
            </button>
          </div>

          <div className="etauth-form">
            {tab === 'signup' && (
              <Field label="Full name">
                <input className="etinput" placeholder="Bolormaa O." />
              </Field>
            )}
            <Field label="Email">
              <input className="etinput" type="email" placeholder="you@example.mn" />
            </Field>
            <Field label="Password" hint={tab === 'signup' ? '8+ characters' : null}>
              <input className="etinput" type="password" placeholder="••••••••" />
            </Field>
            <Btn kind="primary" size="md" style={{ width: '100%', marginTop: 8 }}>
              {tab === 'signin' ? 'Sign in' : 'Create account'}
            </Btn>
            <div className="etauth-or"><span>or continue with</span></div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="etbtn etbtn-secondary etbtn-md" style={{ flex: 1 }}>
                <Icon name="chrome" size={14} /> Google
              </button>
              <button className="etbtn etbtn-secondary etbtn-md" style={{ flex: 1 }}>
                Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
