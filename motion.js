/* Plays the motion cover once when it scrolls into view; replays on hover/tap of the card or figure. */
(function(){
  const els=[...document.querySelectorAll('.uem')]; if(!els.length) return;
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const play=el=>{el.classList.remove('is-play'); void el.offsetWidth; el.classList.add('is-play')};
  els.forEach(el=>{
    if(reduce) return;
    el.classList.add('is-ready');
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){play(el);io.disconnect()}}),{threshold:.35});
    io.observe(el);
    const host=el.closest('.case,figure')||el; let t=0;
    host.addEventListener('mouseenter',()=>{ if(Date.now()-t>4500){t=Date.now();play(el)} });
  });
})();
