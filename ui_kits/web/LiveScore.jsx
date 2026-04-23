function LiveScore({ court, round, live, players, sets }) {
  return (
    <div style={{
      border:'1px solid #DDE1E6', borderRadius:8, padding:'18px 20px',
      fontFamily:'var(--wdl-font-sans)', background:'#fff', minWidth:360
    }}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
        <div style={{fontSize:11,fontWeight:500,textTransform:'uppercase',letterSpacing:'-0.03em',color:'#697077'}}>{court} · {round}</div>
        {live && <div style={{display:'inline-flex',alignItems:'center',gap:6,fontSize:11,fontWeight:500,textTransform:'uppercase',color:'#22B263',letterSpacing:'-0.03em'}}>
          <span style={{width:8,height:8,borderRadius:'50%',background:'#22B263',boxShadow:'0 0 0 4px rgba(34,178,99,.2)'}}/>Live · Set {live}
        </div>}
      </div>
      {players.map((p, i) => (
        <div key={i} style={{
          display:'grid', gridTemplateColumns:'1fr repeat(5, 28px)', gap:12,
          alignItems:'center', padding:'10px 0',
          borderTop: i ? '1px solid #F2F4F8' : 'none'
        }}>
          <div style={{fontSize:15,fontWeight:500,letterSpacing:'-0.03em',color:'#121619',display:'flex',alignItems:'center',gap:8}}>
            <span style={{fontSize:10,width:16,textAlign:'center',padding:'2px 0',border:'1px solid #DDE1E6',borderRadius:2,color:'#697077'}}>{p.country}</span>
            {p.name} {p.seed && <span style={{color:'#697077',fontWeight:400}}>({p.seed})</span>}
            {p.win && <span style={{marginLeft:6,color:'#006633'}}>▸</span>}
          </div>
          {sets[i].map((s, j) => (
            <span key={j} style={{
              fontFamily:'IBM Plex Mono, monospace', fontSize:14, textAlign:'center',
              color: s.winner ? '#006633' : '#121619',
              fontWeight: s.winner ? 500 : 400
            }}>{s.val === null ? '—' : s.val}{s.tb != null && <sup style={{fontSize:9,color:'#697077'}}>{s.tb}</sup>}</span>
          ))}
        </div>
      ))}
    </div>
  );
}
window.LiveScore = LiveScore;
