// Button — matches design-system-v1/tokens.scss .wdl-button-*
// Sizes: sm (32) · md (44) · lg (48). Variants: primary · secondary · tertiary · danger · ghost
function Button({ variant='primary', size='md', children, onClick, icon, style }) {
  const h = { sm:32, md:44, lg:48 }[size];
  const pad = { sm:'0 14px', md:'0 20px', lg:'0 24px' }[size];
  const fs = { sm:12, md:14, lg:16 }[size];
  const variants = {
    primary:   { background:'#006633', color:'#fff', border:'none' },
    secondary: { background:'#E4E9F1', color:'#121619', border:'none' },
    tertiary:  { background:'transparent', color:'#006633', border:'none' },
    danger:    { background:'#DA1E28', color:'#fff', border:'none' },
    ghost:     { background:'transparent', color:'#006633', border:'none' },
  };
  return (
    <button onClick={onClick} style={{
      height:h, padding:pad, borderRadius:8,
      fontFamily:"var(--wdl-font-sans)", fontWeight:700,
      fontSize:fs, letterSpacing:'0.02em', cursor:'pointer',
      display:'inline-flex', alignItems:'center', gap:8,
      ...variants[variant], ...style
    }}>
      {children}
      {icon === 'arrow' && (
        <svg width="14" height="10" viewBox="0 0 12 10" fill="currentColor"><path d="M7 0L6.3 0.7 10.1 4.5H0v1h10.1L6.3 9.3 7 10l5-5z"/></svg>
      )}
    </button>
  );
}
window.Button = Button;
