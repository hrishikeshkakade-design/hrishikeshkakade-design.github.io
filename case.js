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
    ['#stagePlay',b=>b.getAttribute('aria-pressed')==='true'?'Pause':'Play'],['.sv-close',()=>'Close'],['.sbtn',b=>/Previous/.test(b.getAttribute('aria-label'))?'Previous step':'Next step'],['.sc .shot',()=>'Open full screen'],['.stages-dots button',()=>'Go to step'],['img.shot',()=>'View full size'],['#themeBtn',()=>'Switch theme'],['.back',()=>'Back to work'],['a[target="_blank"]',()=>'Opens in new tab ↗'],['a,button',()=>'']];
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

/* Click a screenshot to see it full size */
(function(){
  const shots=[...document.querySelectorAll('img.shot')].filter(i=>!i.closest('.sc')); if(!shots.length) return;
  let box=null, last=null;
  const close=()=>{if(!box) return; box.remove(); box=null; document.body.style.overflow=''; last&&last.focus&&last.focus()};
  shots.forEach(img=>{
    img.tabIndex=0; img.setAttribute('role','button'); img.setAttribute('aria-label','View full size: '+img.alt);
    const open=()=>{last=img; box=document.createElement('div'); box.className='lightbox'; box.setAttribute('role','dialog'); box.setAttribute('aria-label',img.alt);
      box.innerHTML=`<img src="${img.currentSrc||img.src}" alt=""><p></p>`; box.querySelector('p').textContent=img.alt;
      box.addEventListener('click',close); document.body.append(box); document.body.style.overflow='hidden'};
    img.addEventListener('click',open);
    img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}});
  });
  addEventListener('keydown',e=>{if(e.key==='Escape') close()});
})();

/* Seven-stage card slider: auto-advances, pauses on hover, focus or when off screen; opens a full-screen step viewer */
(function(){
  const track=document.getElementById('stageTrack'); if(!track) return;
  const cards=[...track.children], dots=[...document.querySelectorAll('.stages-dots button')];
  const prev=document.getElementById('stagePrev'), next=document.getElementById('stageNext'), now=document.getElementById('stageNow');
  const wrap=track.closest('.stages'), playBtn=document.getElementById('stagePlay');
  const calm=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const DUR=6000, N=cards.length;
  let cur=0, playing=!calm, hover=false, visible=false, viewerOpen=false, t0=0, elapsed=0, raf=0;
  const steps=cards.map(c=>({src:c.querySelector('img').src, alt:c.querySelector('img').alt, n:c.querySelector('.sc-n').innerHTML, h:c.querySelector('h4').textContent, p:c.querySelector('p').textContent}));
  const bars=cards.map(c=>{const b=document.createElement('span'); b.className='sc-prog'; b.innerHTML='<i></i>'; c.append(b); return b.firstChild});

  const active=()=>playing&&!hover&&visible&&!viewerOpen&&!document.hidden;
  function setBar(f){bars.forEach((b,k)=>b.style.transform=`scaleX(${k===cur?f:(k<cur?0:0)})`)}
  function tick(ts){
    raf=0;
    if(active()){ if(!t0) t0=ts-elapsed; elapsed=ts-t0; if(elapsed>=DUR){elapsed=0;t0=0;go((cur+1)%N);} }
    else t0=0;
    setBar(Math.min(1,elapsed/DUR));
    raf=requestAnimationFrame(tick);
  }
  function go(i,user){
    i=(i+N)%N; elapsed=0; t0=0;
    track.scrollTo({left:cards[i].offsetLeft-track.offsetLeft,behavior:calm?'auto':'smooth'});
    mark(i); if(viewerOpen) paint();
  }
  function mark(i){cur=i; now.textContent=i+1; dots.forEach((d,k)=>d.setAttribute('aria-selected',k===i))}
  prev.onclick=()=>go(cur-1,true); next.onclick=()=>go(cur+1,true);
  dots.forEach((d,k)=>d.onclick=()=>go(k,true));
  function setPlaying(v){playing=v; playBtn.setAttribute('aria-pressed',v); playBtn.setAttribute('aria-label',v?'Pause auto-play':'Play auto-play'); playBtn.textContent=v?'❚❚':'▶'}
  playBtn.onclick=()=>setPlaying(!playing);
  setPlaying(playing);

  let q=false;
  track.addEventListener('scroll',()=>{if(q)return;q=true;requestAnimationFrame(()=>{q=false;
    const x=track.scrollLeft; let best=0,bd=1e9; cards.forEach((c,k)=>{const d=Math.abs(c.offsetLeft-track.offsetLeft-x); if(d<bd){bd=d;best=k}});
    if(best!==cur){elapsed=0;t0=0;mark(best)}})},{passive:true});
  wrap.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')hover=true});
  wrap.addEventListener('pointerleave',()=>hover=false);
  wrap.addEventListener('focusin',()=>hover=true); wrap.addEventListener('focusout',()=>hover=false);
  track.addEventListener('pointerdown',()=>{elapsed=0;t0=0});
  new IntersectionObserver(es=>es.forEach(e=>visible=e.isIntersecting),{threshold:.4}).observe(wrap);
  track.tabIndex=0;
  track.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();go(cur+1,true)} if(e.key==='ArrowLeft'){e.preventDefault();go(cur-1,true)}});
  mark(0); raf=requestAnimationFrame(tick);

  /* Full-screen viewer with the step's text and arrows */
  let v=null, lastFocus=null;
  function paint(){
    const s=steps[cur];
    v.querySelector('.sv-img').src=s.src; v.querySelector('.sv-img').alt=s.alt;
    v.querySelector('.sv-n').innerHTML=s.n; v.querySelector('h3').textContent=s.h; v.querySelector('.sv-p').textContent=s.p;
    v.querySelectorAll('.sv-dots i').forEach((d,k)=>d.classList.toggle('on',k===cur));
  }
  function open(i){
    lastFocus=document.activeElement; viewerOpen=true; mark(i);
    v=document.createElement('div'); v.className='sv'; v.setAttribute('role','dialog'); v.setAttribute('aria-modal','true'); v.setAttribute('aria-label','Working table steps');
    v.innerHTML=`<div class="sv-in">
      <figure class="sv-fig"><img class="sv-img" alt=""></figure>
      <div class="sv-side">
        <span class="sc-n sv-n"></span><h3></h3><p class="sv-p"></p>
        <div class="sv-dots">${steps.map(()=>'<i></i>').join('')}</div>
        <div class="sv-nav"><button type="button" class="sbtn sv-prev" aria-label="Previous step">←</button><button type="button" class="sbtn sv-next" aria-label="Next step">→</button></div>
      </div>
      <button type="button" class="sv-close" aria-label="Close">✕</button></div>`;
    document.body.append(v); document.body.style.overflow='hidden'; paint();
    v.querySelector('.sv-prev').onclick=()=>go(cur-1,true);
    v.querySelector('.sv-next').onclick=()=>go(cur+1,true);
    v.querySelector('.sv-close').onclick=close;
    v.addEventListener('click',e=>{if(e.target===v)close()});
    v.querySelector('.sv-close').focus();
  }
  function close(){ if(!v)return; v.remove(); v=null; viewerOpen=false; document.body.style.overflow=''; elapsed=0; t0=0; lastFocus&&lastFocus.focus&&lastFocus.focus() }
  addEventListener('keydown',e=>{ if(!v) return;
    if(e.key==='Escape') close(); else if(e.key==='ArrowRight'){e.preventDefault();go(cur+1,true)} else if(e.key==='ArrowLeft'){e.preventDefault();go(cur-1,true)} });
  cards.forEach((c,k)=>{const img=c.querySelector('img'); img.tabIndex=0; img.setAttribute('role','button'); img.setAttribute('aria-label','Open step '+(k+1)+' full screen');
    img.addEventListener('click',()=>open(k)); img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open(k)}})});
})();
