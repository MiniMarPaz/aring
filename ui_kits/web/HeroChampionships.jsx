function HeroChampionships() {
  return (
    <section style={{
      background:'#0B2917', color:'#fff', padding:'80px 48px 96px',
      position:'relative', overflow:'hidden', fontFamily:'var(--wdl-font-sans)'
    }}>
      <div style={{maxWidth:1312, margin:'0 auto'}}>
        <div style={{
          fontSize:12, fontWeight:500, textTransform:'uppercase',
          letterSpacing:'-0.03em', color:'#E2D9B5', marginBottom:16,
          display:'inline-flex', alignItems:'center', gap:10
        }}>
          <span style={{width:24,height:1,background:'#E2D9B5'}}/>
          Mon 30 June — Sun 13 July 2026
        </div>
        <h1 style={{
          fontFamily:'var(--wdl-font-display)',
          fontSize:128, fontWeight:700, lineHeight:0.92, letterSpacing:'-0.02em',
          textTransform:'uppercase', margin:'0 0 24px', maxWidth:1000
        }}>
          The<br/>Championships,<br/><span style={{color:'#E2D9B5'}}>Wimbledon</span>
        </h1>
        <p style={{
          fontFamily:"'EB Garamond',serif", fontSize:22, lineHeight:1.5,
          letterSpacing:'0.02em', color:'#E4E9F1', maxWidth:560, margin:'0 0 40px'
        }}>
          The oldest tennis tournament in the world, and one of the four Grand Slams. Played on grass at the All England Club, since 1877.
        </p>
        <div style={{display:'flex',gap:12}}>
          <Button variant="primary" icon="arrow">Buy tickets</Button>
          <button style={{
            background:'transparent',color:'#fff',border:'1px solid #E2D9B5',
            padding:'0 24px',height:44,borderRadius:8,
            fontFamily:'var(--wdl-font-sans)',fontWeight:700,fontSize:14,letterSpacing:'0.02em',cursor:'pointer'
          }}>Watch the trailer</button>
        </div>
      </div>
      <img src="../../assets/logos/wimbledon-roundel.svg" style={{
        position:'absolute', right:-80, bottom:-80, width:400, height:400, opacity:0.12
      }}/>
    </section>
  );
}
window.HeroChampionships = HeroChampionships;
