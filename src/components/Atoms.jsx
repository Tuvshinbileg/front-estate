'use client';

import Icon from './Icon';

export function Btn({ kind = 'primary', size = 'md', icon, iconRight, children, style, ...rest }) {
  return (
    <button className={`etbtn etbtn-${kind} etbtn-${size}`} style={style} {...rest}>
      {icon && <Icon name={icon} size={size === 'sm' ? 14 : 16} />}
      {children}
      {iconRight && <Icon name={iconRight} size={size === 'sm' ? 14 : 16} />}
    </button>
  );
}

export function Chip({ active, children, icon, ...rest }) {
  return (
    <button className={`etchip${active ? ' on' : ''}`} {...rest}>
      {icon && <Icon name={icon} size={13} />}
      {children}
    </button>
  );
}

export function Field({ label, hint, children }) {
  return (
    <label className="etfield">
      {label && <span className="etfield-label">{label}</span>}
      {children}
      {hint && <span className="etfield-hint">{hint}</span>}
    </label>
  );
}

export function Avatar({ name = '??', size = 36, color = '#14204A' }) {
  const initials = name.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();
  return (
    <div
      className="etavatar"
      style={{ width: size, height: size, background: color, fontSize: size * 0.36 }}
    >
      {initials}
    </div>
  );
}

export function Badge({ kind = 'ai', icon, children }) {
  return (
    <span className={`etbadge etbadge-${kind}`}>
      {kind === 'ai' && <span className="etbadge-dot" />}
      {icon && <Icon name={icon} size={12} />}
      {children}
    </span>
  );
}

export function TrustRing({ score = 94, size = 22 }) {
  const color =
    score >= 80 ? 'var(--accent)' : score >= 50 ? 'var(--amber-500)' : 'var(--danger)';
  return (
    <span
      className="ettrust"
      style={{
        width: size,
        height: size,
        background: `conic-gradient(${color} ${score}%, var(--gray-200) 0)`,
      }}
    >
      <span className="ettrust-hole" />
    </span>
  );
}

export function GlassPill({ children, className = '' }) {
  return <div className={`etglass ${className}`}>{children}</div>;
}
