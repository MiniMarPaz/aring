function Header({ active='home', authed=false, onNav }) {
  const items = ['Home','Scores','Draws','Players','Tickets','Watch','News'];
  return (
    <header style={{
      height:72, borderBottom:'1px solid #DDE1E6',
      display:'flex', alignItems:'center', padding:'0 32px', gap:32,
      background:'#fff', position:'sticky', top:0, zIndex:10,
      fontFamily:'var(--wdl-font-sans)'
    }}>
      <a href="#home" onClick={e=>{e.preventDefault(); onNav&&onNav('home')}} style={{display:'flex',alignItems:'center',gap:10,textDecoration:'none'}}>
        <img src="../../assets/logos/wimbledon-roundel.svg" width="44" height="44" alt="Wimbledon"/>
        <div style={{display:'flex',flexDirection:'column',lineHeight:1}}>
          <span style={{fontFamily:"'EB Garamond',serif",fontSize:20,color:'#006633',fontStyle:'italic',letterSpacing:2}}>Wimbledon</span>
          <span style={{fontSize:9,color:'#697077',letterSpacing:3,textTransform:'uppercase',marginTop:2}}>The Championships</span>
        </div>
      </a>
      <nav style={{display:'flex',gap:28,flex:1,marginLeft:24}}>
        {items.map(i=>{
          const key = i.toLowerCase();
          const isActive = active === key;
          return (
            <a key={i} href={`#${key}`} onClick={e=>{e.preventDefault(); onNav&&onNav(key)}} style={{
              fontSize:14, fontWeight:500, letterSpacing:'-0.03em',
              color: isActive ? '#006633' : '#121619',
              textDecoration:'none', borderBottom: isActive ? '2px solid #006633' : '2px solid transparent',
              paddingBottom:4, cursor:'pointer'
            }}>{i}</a>
          );
        })}
      </nav>
      <button aria-label="Search" style={{background:'none',border:'none',cursor:'pointer',color:'#121619'}}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6"/><path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/></svg>
      </button>
      {authed ? (
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <div style={{width:36,height:36,borderRadius:'50%',background:'#540082',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:500,fontSize:13}}>NJ</div>
          <span style={{fontSize:14,fontWeight:500,letterSpacing:'-0.03em'}}>My Wimbledon</span>
        </div>
      ) : (
        <Button variant="primary" size="sm" onClick={()=>onNav&&onNav('login')}>Log in</Button>
      )}
    </header>
  );
}
window.Header = Header;
