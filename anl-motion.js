/* Cursor-driven motion walkthroughs (figure.anl): screen states crossfade while a cursor clicks through short scenes, looping while visible */
(function(){
  const CONFIG={
    anl:{w:1920,h:1172,rest:[980,560],still:3,
      at:{chevron:[482,277],product:[398,360],aws:[646,220],views:[626,146],view1:[468,302]},
      scenes:[
        {cap:'Group by product',steps:[['frame',1],['move','chevron'],['click'],['frame',2],['wait',500],['move','product'],['click'],['frame',3],['wait',1800]]},
        {cap:'Compare two measures',steps:[['frame',1],['move','aws'],['click'],['frame',4],['wait',1900]]},
        {cap:'Load a saved view',steps:[['frame',1],['move','views'],['click'],['frame',5],['wait',500],['move','view1'],['click'],['frame',6],['wait',1800]]}]},
    cvm:{w:1920,h:1080,rest:[1150,300],still:6,keep:true,
      at:{addC:[298,855],addIT1:[942,613],addIT2:[942,706]},
      scenes:[
        {cap:'Add contributors',steps:[['frame',1],['move','addC'],['click'],['frame',2],['wait',1500]]},
        {cap:'Build working tables',steps:[['move','addIT1'],['frame',3],['wait',250],['click'],['frame',4],['wait',1500]]},
        {cap:'Chain the next table',steps:[['move','addIT2'],['frame',5],['wait',250],['click'],['frame',6],['wait',2400]]}]}
  };
  const calm=matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('figure.anl').forEach(fig=>{
    const C=CONFIG[fig.id]; if(!C) return;
    const frames=[...fig.querySelectorAll('.anl-f')], cur=fig.querySelector('.anl-cur'), ring=fig.querySelector('.anl-ring'), cap=fig.querySelector('.anl-cap');
    const show=n=>frames.forEach(f=>f.classList.toggle('on',f.dataset.f==n));
    if(calm){show(C.still);cur.hidden=true;return}
    const pos=k=>{const p=k==='rest'?C.rest:C.at[k];return [p[0]/C.w*100,p[1]/C.h*100]};
    const place=k=>{const p=pos(k);cur.style.left=p[0]+'%';cur.style.top=p[1]+'%'};
    let run=0, visible=false, playing=false;
    const sleep=ms=>new Promise(r=>setTimeout(r,ms));
    async function step(s){
      if(s[0]==='frame'){show(s[1]);await sleep(450)}
      else if(s[0]==='move'){place(s[1]);await sleep(950)}
      else if(s[0]==='click'){cur.classList.add('down');ring.style.left=cur.style.left;ring.style.top=cur.style.top;ring.classList.remove('go');void ring.offsetWidth;ring.classList.add('go');await sleep(160);cur.classList.remove('down');await sleep(200)}
      else await sleep(s[1]);
    }
    async function loop(){
      if(playing) return; playing=true; const id=++run;
      place('rest');
      while(visible&&id===run){
        for(const sc of C.scenes){
          cap.textContent=sc.cap; cap.classList.add('on');
          for(const s of sc.steps){ if(!visible||id!==run){playing=false;return} await step(s) }
          cap.classList.remove('on'); if(!C.keep||sc===C.scenes[C.scenes.length-1]) place('rest'); await sleep(C.keep?250:700);
        }
      }
      playing=false;
    }
    new IntersectionObserver(es=>es.forEach(e=>{visible=e.isIntersecting; if(visible) loop(); else run++}),{threshold:.35}).observe(fig);
  });
})();
