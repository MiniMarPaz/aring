function OrderOfPlay({ court, matches }) {
  return (
    <div style={{fontFamily:'var(--wdl-font-sans)', background:'#fff'}}>
      <div style={{padding:'14px 20px', background:'#0B2917', color:'#fff', borderRadius:'8px 8px 0 0',
        display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <span style={{fontSize:16,fontWeight:500,letterSpacing:'-0.03em'}}>{court}</span>
        <span style={{fontSize:11,textTransform:'uppercase',color:'#E2D9B5',letterSpacing:'-0.03em'}}>Play starts 1.00pm</span>
      </div>
      <div style={{border:'1px solid #DDE1E6',borderTop:'none',borderRadius:'0 0 8px 8px'}}>
        {matches.map((m,i)=>(
          <div key={i} style={{padding:'16px 20px',borderTop: i? '1px solid #F2F4F8':'none',display:'grid',gridTemplateColumns:'80px 1fr auto',gap:16,alignItems:'center'}}>
            <div>
              <div style={{fontSize:11,fontWeight:500,color:'#697077',textTransform:'uppercase',letterSpacing:'-0.03em'}}>{m.label}</div>
              <div style={{fontSize:11,color:'#697077'}}>{m.event}</div>
            </div>
            <div>
              <div style={{fontSize:15,fontWeight:500,letterSpacing:'-0.03em',color:'#121619'}}>{m.p1}</div>
              <div style={{fontSize:11,color:'#697077',margin:'2px 0'}}>vs</div>
              <div style={{fontSize:15,fontWeight:500,letterSpacing:'-0.03em',color:'#121619'}}>{m.p2}</div>
            </div>
            <div style={{textAlign:'right'}}>
              {m.status === 'live' && <span style={{fontSize:11,color:'#22B263',fontWeight:500,textTransform:'uppercase',letterSpacing:'-0.03em'}}>● Live</span>}
              {m.status === 'completed' && <span style={{fontSize:12,fontFamily:'IBM Plex Mono, monospace',color:'#121619'}}>{m.score}</span>}
              {m.status === 'upcoming' && <span style={{fontSize:11,color:'#697077',textTransform:'uppercase',letterSpacing:'-0.03em'}}>Upcoming</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
window.OrderOfPlay = OrderOfPlay;
