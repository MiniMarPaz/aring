function Footer() {
  const cols = [
    { h: 'The Championships', l: ['About','Heritage','Trophies','News'] },
    { h: 'Visit', l: ['Tickets','Ballot','Debentures','Getting here'] },
    { h: 'Watch & follow', l: ['Live scores','Watch live','App','Newsletter'] },
    { h: 'Members', l: ['My Wimbledon','Log in','Register','Help'] },
  ];
  return (
    <footer style={{background:'#0B2917', color:'#fff', padding:'64px 48px 32px', fontFamily:'var(--wdl-font-sans)'}}>
      <div style={{maxWidth:1312,margin:'0 auto'}}>
        <div style={{display:'flex',gap:32,alignItems:'center',paddingBottom:32,borderBottom:'1px solid rgba(226,217,181,0.3)',marginBottom:32}}>
          <img src="../../assets/logos/wimbledon-roundel.svg" width="64" height="64"/>
          <div style={{flex:1}}>
            <div style={{fontFamily:"'EB Garamond',serif",fontStyle:'italic',fontSize:28,color:'#E2D9B5',letterSpacing:3}}>Wimbledon</div>
            <div style={{fontSize:11,letterSpacing:3,textTransform:'uppercase',color:'#879186',marginTop:4}}>The All England Lawn Tennis Club</div>
          </div>
          <div style={{display:'flex',gap:24,alignItems:'center'}}>
            <span style={{fontSize:11,color:'#879186',textTransform:'uppercase',letterSpacing:'-0.03em'}}>Partners</span>
            <img src="../../assets/logos/ibm.svg" height="28" style={{filter:'invert(1)'}}/>
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:32,marginBottom:48}}>
          {cols.map((c,i)=>(
            <div key={i}>
              <div style={{fontSize:11,fontWeight:500,textTransform:'uppercase',letterSpacing:'-0.03em',color:'#E2D9B5',marginBottom:16}}>{c.h}</div>
              {c.l.map(x => <div key={x} style={{fontSize:14,color:'#E4E9F1',marginBottom:10,letterSpacing:'-0.03em'}}>{x}</div>)}
            </div>
          ))}
        </div>
        <div style={{fontSize:11,color:'#879186',letterSpacing:'-0.03em',display:'flex',justifyContent:'space-between'}}>
          <span>© The All England Lawn Tennis Club (Championships) Limited 2026</span>
          <span>Privacy · Cookies · Terms · Accessibility</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
