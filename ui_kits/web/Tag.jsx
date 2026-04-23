function Tag({ kind='news', children }) {
  const map = {
    news:    { bg:'#006633', fg:'#fff' },
    feature: { bg:'#540082', fg:'#fff' },
    members: { bg:'#9B8148', fg:'#fff' },
    live:    { bg:'#D3F0E0', fg:'#006633' },
    video:   { bg:'#F2F4F8', fg:'#697077' },
    heritage:{ bg:'#E2D9B5', fg:'#240330' },
  };
  const c = map[kind] || map.news;
  return (
    <span style={{
      background:c.bg, color:c.fg,
      padding:'5px 12px', borderRadius:9999,
      fontFamily:'var(--wdl-font-sans)', fontWeight:500, fontSize:11, lineHeight:1.2,
      letterSpacing:'0.02em', textTransform:'uppercase',
      display:'inline-flex', alignItems:'center', gap:6,
    }}>
      {kind==='live' && <span style={{width:8,height:8,borderRadius:'50%',background:'#22B263'}}/>}
      {children}
    </span>
  );
}
window.Tag = Tag;
