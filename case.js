/* Case study pages: theme, reading progress, contents highlight, PDF button, cursor */
(function(){
  const root=document.documentElement;
  try{const t=localStorage.getItem('pf-theme'); if(t) root.dataset.theme=t}catch(e){}
  const isDark=()=>root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
  const tb=document.getElementById('themeBtn');
  if(tb) tb.onclick=()=>{const n=isDark()?'light':'dark'; root.dataset.theme=n; try{localStorage.setItem('pf-theme',n)}catch(e){}};

  const toast=document.getElementById('toast'); let tt;
  const say=m=>{toast.textContent=m; toast.hidden=false; clearTimeout(tt); tt=setTimeout(()=>toast.hidden=true,2200)};
  document.querySelectorAll('[data-pdf]').forEach(a=>{
    const url=a.dataset.pdf;
    if(url){a.href=url; a.target='_blank'; a.rel='noopener'}
    else a.addEventListener('click',e=>{e.preventDefault(); say('PDF coming soon')});
  });

  const prog=document.querySelector('.nprog'), links=[...document.querySelectorAll('.toc a')];
  const secs=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
  let q=false;
  function upd(){
    q=false;
    const h=document.documentElement.scrollHeight-innerHeight;
    if(prog) prog.style.transform=`scaleX(${h>0?Math.min(1,scrollY/h):0})`;
    let cur=secs[0]; for(const s of secs) if(s.getBoundingClientRect().top<=innerHeight*.35) cur=s;
    links.forEach(a=>a.classList.toggle('on',cur&&a.getAttribute('href')==='#'+cur.id));
  }
  addEventListener('scroll',()=>{if(!q){q=true;requestAnimationFrame(upd)}},{passive:true});
  addEventListener('resize',upd); upd();

  if(!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const calm=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const el=document.createElement('div'); el.className='ccur'; el.setAttribute('aria-hidden','true');
  el.innerHTML='<div class="cc-o"></div><div class="cc-tag"></div>'; document.body.append(el); root.classList.add('cc');
  const tag=el.querySelector('.cc-tag');
  const RULES=[['[data-pdf]',a=>a.dataset.pdf?'Open PDF ↗':'PDF coming soon'],['.next',()=>'Next case study'],['.toc a',()=>'Jump to section'],
    ['#themeBtn',()=>'Switch theme'],['.back',()=>'Back to work'],['a[target="_blank"]',()=>'Opens in new tab ↗'],['a,button',()=>'']];
  let x=-99,y=-99,cx=-99,cy=-99,raf=0;
  const loop=()=>{raf=0;const k=calm?1:.35;cx+=(x-cx)*k;cy+=(y-cy)*k;el.style.transform=`translate(${cx}px,${cy}px)`;if(Math.abs(x-cx)>.2||Math.abs(y-cy)>.2)raf=requestAnimationFrame(loop)};
  addEventListener('pointermove',e=>{
    if(e.pointerType!=='mouse'){root.classList.remove('cc-in');return}
    x=e.clientX;y=e.clientY; if(!root.classList.contains('cc-in')){cx=x;cy=y;root.classList.add('cc-in')}
    const t=e.target instanceof Element?e.target:document.body; let hot=false,txt='';
    for(const [s,f] of RULES){const m=t.closest(s); if(m){hot=true;txt=f(m);break}}
    el.classList.toggle('hot',hot); if(txt){tag.textContent=txt;el.classList.add('tagged')}else el.classList.remove('tagged');
    if(!raf)raf=requestAnimationFrame(loop);
  },{passive:true});
  addEventListener('pointerdown',()=>el.classList.add('down')); addEventListener('pointerup',()=>el.classList.remove('down'));
  root.addEventListener('mouseleave',()=>root.classList.remove('cc-in'));
})();
