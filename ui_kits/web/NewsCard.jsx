function NewsCard({ tag='news', tagLabel='News', eyebrow, title, meta, image, expressive=false }) {
  return (
    <article style={{
      background:'#fff', border:'1px solid #DDE1E6', borderRadius:8, overflow:'hidden',
      display:'flex', flexDirection:'column', fontFamily:'var(--wdl-font-sans)', cursor:'pointer'
    }}>
      <div style={{height:200, background: image || 'linear-gradient(180deg,#2A8055,#006633)', position:'relative'}}>
        <div style={{position:'absolute',top:14,left:14}}><Tag kind={tag}>{tagLabel}</Tag></div>
      </div>
      <div style={{padding:'20px 22px 22px'}}>
        {eyebrow && <div style={{fontSize:11,fontWeight:500,textTransform:'uppercase',letterSpacing:'-0.03em',color:'#697077',marginBottom:8}}>{eyebrow}</div>}
        <h3 style={expressive ? {
          fontFamily:"'EB Garamond',serif", fontStyle:'italic',
          fontSize:22, lineHeight:1.2, letterSpacing:'0.02em',
          color:'#121619', margin:'0 0 10px'
        } : {
          fontSize:18, fontWeight:500, letterSpacing:'-0.03em', lineHeight:1.2,
          color:'#121619', margin:'0 0 10px'
        }}>{title}</h3>
        {meta && <div style={{fontSize:12,color:'#697077',letterSpacing:'-0.03em'}}>{meta}</div>}
      </div>
    </article>
  );
}
window.NewsCard = NewsCard;
