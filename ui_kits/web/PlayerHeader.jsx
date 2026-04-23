function PlayerHeader({ name, country, seed, age, ranking, avatar }) {
  return (
    <section style={{
      background:'#0B2917', color:'#fff', padding:'48px 48px 40px',
      fontFamily:'var(--wdl-font-sans)', position:'relative', overflow:'hidden'
    }}>
      <div style={{display:'flex',gap:40,alignItems:'center',maxWidth:1312,margin:'0 auto'}}>
        <div style={{width:180,height:180,borderRadius:'50%',background:avatar||'linear-gradient(160deg,#559977,#006633)',border:'3px solid #E2D9B5',flexShrink:0}}/>
        <div>
          <div style={{fontSize:11,fontWeight:500,textTransform:'uppercase',letterSpacing:'-0.03em',color:'#E2D9B5',marginBottom:12,display:'flex',gap:8,alignItems:'center'}}>
            <span style={{padding:'3px 8px',border:'1px solid #E2D9B5',borderRadius:2}}>{country}</span>
            <span>Seed #{seed}</span>
          </div>
          <h1 style={{fontFamily:'var(--wdl-font-display)',fontSize:80,fontWeight:700,letterSpacing:'-0.02em',lineHeight:0.95,textTransform:'uppercase',margin:'0 0 16px'}}>{name}</h1>
          <div style={{display:'flex',gap:40,fontSize:14,color:'#E4E9F1'}}>
            <div><div style={{fontSize:11,color:'#879186',textTransform:'uppercase',letterSpacing:'-0.03em'}}>Age</div><div style={{fontSize:22,fontWeight:500,marginTop:4}}>{age}</div></div>
            <div><div style={{fontSize:11,color:'#879186',textTransform:'uppercase',letterSpacing:'-0.03em'}}>ATP rank</div><div style={{fontSize:22,fontWeight:500,marginTop:4}}>#{ranking}</div></div>
            <div><div style={{fontSize:11,color:'#879186',textTransform:'uppercase',letterSpacing:'-0.03em'}}>Titles</div><div style={{fontSize:22,fontWeight:500,marginTop:4}}>24</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.PlayerHeader = PlayerHeader;
