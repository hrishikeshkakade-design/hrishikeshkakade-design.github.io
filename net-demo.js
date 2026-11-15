/* Networking Analysis: interactive prototype for the case study.
   Built with the Astuto library (window.Astuto) plus a hand-drawn Sankey. All data is invented sample data. */
(function(){
var root=document.getElementById('netDemo'); if(!root||!window.Astuto) return;
var A=window.Astuto,h=React.createElement,useState=React.useState,useEffect=React.useEffect,useRef=React.useRef,useMemo=React.useMemo;

/* ---------- Sample data ---------- */
var RATE={NAT:0.045,IGW:0.09,'VPC Peering':0.01,'Cross-AZ':0.02,'Cloud NAT':0.045,'Premium Tier':0.085};
var INSIGHTS={
  'NAT>Amazon S3':'Route S3 traffic through a gateway endpoint to skip NAT processing charges.',
  'NAT>DynamoDB':'Use a DynamoDB gateway endpoint instead of the NAT gateway.',
  'Cross-AZ':'Keep chatty services in the same availability zone.',
  'IGW>Internet':'Serve static assets through a CDN to cut internet egress.',
  'Cloud NAT>Cloud Storage':'Enable Private Google Access for Cloud Storage traffic.',
  'Premium Tier':'Standard Tier networking may be cheaper for this workload.',
  'big':'One of the top 3 resources by transfer this period.'
};
function insightsFor(r,rank){var out=[];
  if(INSIGHTS[r.route+'>'+r.dest])out.push(INSIGHTS[r.route+'>'+r.dest]);
  if(INSIGHTS[r.route])out.push(INSIGHTS[r.route]);
  if(r.route==='IGW'&&r.dest==='Internet')out.push(INSIGHTS['IGW>Internet']);
  if(rank<3)out.push(INSIGHTS.big);
  return out.filter(function(v,i,a){return a.indexOf(v)===i;});}
function rows(list){return list.map(function(x){return {res:x[0],route:x[1],dest:x[2],egress:x[3],ingress:x[4]};});}
var INGESTIONS=[
  {id:'aws-1',name:'Production VPCs',provider:'aws',account:'Acme Production (123456789012)',region:'us-east-1',start:'13 Jan 2026',end:'19 Jan 2026',up:'20 Jan 2026',by:'jamie@acme.io',billed:336,
   rows:rows([['i-0a12web01','NAT','Amazon S3',420,96],['i-0b33jobs01','IGW','Internet',310,140],['i-0c77etl01','NAT','Amazon S3',185,40],['i-0d41api02','NAT','DynamoDB',120,64],['i-0e90cache1','Cross-AZ','Internal',96,96],['i-0f18web02','IGW','Internet',88,52],['i-0g55etl02','VPC Peering','Shared services',64,30]])},
  {id:'aws-2',name:'Data platform',provider:'aws',account:'Acme Data (210987654321)',region:'eu-west-1',start:'2 Feb 2026',end:'8 Feb 2026',up:'9 Feb 2026',by:'priya@acme.io',billed:212,
   rows:rows([['i-1a02spark01','NAT','Amazon S3',540,120],['i-1b19spark02','NAT','Amazon S3',380,90],['i-1c07kafka01','Cross-AZ','Internal',260,260],['i-1d33airflow','IGW','Internet',70,35]])},
  {id:'gcp-1',name:'Analytics cluster',provider:'gcp',account:'acme-analytics',region:'us-central1',start:'13 Jan 2026',end:'19 Jan 2026',up:'20 Jan 2026',by:'jamie@acme.io',billed:180,
   rows:rows([['gke-node-a1','Cloud NAT','Cloud Storage',300,60],['gke-node-a2','Cloud NAT','Cloud Storage',210,44],['gke-node-b1','Premium Tier','Internet',150,80],['vm-reporting','Premium Tier','Internet',60,20]])}
];
var DIMS={res:'Resource',route:'Network Route',dest:'Destination'};
var COLORS=['var(--data-a1)','var(--data-f1)','var(--data-d1)','var(--data-b1)','var(--data-c1)','var(--data-e1)','var(--data-h1)','var(--data-k1)','var(--data-l1)','var(--data-g1)'];
var ROUTE_COLORS={NAT:'var(--data-j1)',IGW:'var(--data-h1)','VPC Peering':'var(--data-f1)','Cross-AZ':'var(--data-d1)','Cloud NAT':'var(--data-j1)','Premium Tier':'var(--data-h1)'};
var DETECTED={aws:[{n:'prod-vpc-logs',id:'fl-0b1943c16ae952146',res:'vpc-0a7c1e2f',st:'ACTIVE'},{n:'prod-eni-logs',id:'fl-0fb35fae2a65b9dee',res:'eni-04637909b0bb0d098',st:'ACTIVE'},{n:'preprod-eni-logs',id:'fl-0c2d88e1a4b7f6310',res:'eni-0346a6a53d25569da',st:'ACTIVE'},{n:'legacy-vpc-logs',id:'fl-09a1c3e5b7d9f2468',res:'vpc-01b2c3d4',st:'INACTIVE'}],
  gcp:[{n:'analytics-subnet-logs',id:'projects/acme-analytics/subnet-a',res:'subnet-a',st:'ACTIVE'},{n:'reporting-subnet-logs',id:'projects/acme-analytics/subnet-b',res:'subnet-b',st:'ACTIVE'}]};
var ACCOUNTS={aws:['Acme Production (123456789012)','Acme Data (210987654321)'],gcp:['acme-analytics','acme-staging']};
var REGIONS={aws:['us-east-1','eu-west-1','ap-southeast-2'],gcp:['us-central1','europe-west1']};

function gb(v){return v>=1000?(v/1000).toFixed(2)+' TB':Math.round(v)+' GB';}
function usd(v){return '$'+v.toFixed(2);}
function cost(r,dir){var gbv=dir==='egress'?r.egress:r.ingress;return gbv*(RATE[r.route]||0.05);}
function logo(p,s){return h(A.ExtraIcon,{name:p==='gcp'?'gcp':'aws',size:s||16});}

/* ---------- Small pieces ---------- */
function Menu(p){ /* popover anchored under a trigger */
  var ref=useRef(null);
  useEffect(function(){if(!p.open)return;function f(e){if(ref.current&&!ref.current.contains(e.target))p.onClose();}document.addEventListener('pointerdown',f);return function(){document.removeEventListener('pointerdown',f);};},[p.open]);
  return h('div',{className:'nd-anchor',ref:ref},p.trigger,p.open?h('div',{className:'nd-menu'+(p.right?' right':''),role:'menu'},p.children):null);
}
function Select(p){return h('label',{className:'nd-field'},h('span',{className:'nd-label'},p.label),
  h('span',{className:'nd-select'},p.icon||null,h('select',{value:p.value,onChange:function(e){p.onChange(e.target.value);}},p.options.map(function(o){return h('option',{key:o,value:o},o);}))),
  p.sub?h('span',{className:'nd-sub'},p.sub):null);}

/* ---------- Sankey ---------- */
function Sankey(p){
  var wrap=useRef(null),ws=useState(640),W=ws[0],setW=ws[1],hv=useState(null),hover=hv[0],setHover=hv[1];
  useEffect(function(){var ro=new ResizeObserver(function(e){setW(Math.max(280,e[0].contentRect.width));});ro.observe(wrap.current);return function(){ro.disconnect();};},[]);
  var H=W<500?240:250,TOP=26,NW=14,GAP=7;
  var seq=p.seq,data=p.rows;
  var cols=seq.map(function(d){var m={};data.forEach(function(r){m[r[d]]=(m[r[d]]||0)+r.v;});return Object.keys(m).map(function(k){return {key:k,dim:d,v:m[k]};}).sort(function(a,b){return b.v-a.v;});});
  var total=data.reduce(function(s,r){return s+r.v;},0)||1;
  var k=Math.min.apply(null,cols.map(function(c){return (H-GAP*(c.length-1))/total;}));
  var xs=cols.map(function(c,i){return cols.length===1?0:Math.round(i*(W-NW)/(cols.length-1));});
  var colour={},ci=0;cols[0].forEach(function(n){colour[n.dim+':'+n.key]=n.dim==='route'?(ROUTE_COLORS[n.key]||COLORS[ci++%COLORS.length]):COLORS[ci++%COLORS.length];});
  cols.forEach(function(c,i){var y=TOP;var used=c.reduce(function(s,n){return s+n.v*k;},0)+GAP*(c.length-1);y+=(H-used)/2;
    c.forEach(function(n){n.x=xs[i];n.y=y;n.h=Math.max(2,n.v*k);n.out=n.y;n.inn=n.y;y+=n.h+GAP;var id=n.dim+':'+n.key;
      if(!colour[id])colour[id]=n.dim==='route'?(ROUTE_COLORS[n.key]||'var(--data-j1)'):(n.dim==='dest'?'var(--data-i1)':COLORS[ci++%COLORS.length]);n.c=colour[id];});});
  var links=[];
  for(var i=0;i<cols.length-1;i++){var a=seq[i],b=seq[i+1],m={};data.forEach(function(r){var key=r[a]+'\u0000'+r[b];m[key]=(m[key]||0)+r.v;});
    var srcIdx={},dstIdx={};cols[i].forEach(function(n,j){srcIdx[n.key]=n;});cols[i+1].forEach(function(n){dstIdx[n.key]=n;});
    var L=Object.keys(m).map(function(key){var s=key.split('\u0000');return {s:srcIdx[s[0]],t:dstIdx[s[1]],v:m[key]};});
    L.sort(function(x,y){return x.s.y-y.s.y||x.t.y-y.t.y;}).forEach(function(l){l.sy=l.s.out;l.s.out+=l.v*k;});
    L.slice().sort(function(x,y){return x.t.y-y.t.y||x.s.y-y.s.y;}).forEach(function(l){l.ty=l.t.inn;l.t.inn+=l.v*k;});
    links=links.concat(L);}
  function lit(l){if(!hover)return true;return (l.s.dim+':'+l.s.key)===hover||(l.t.dim+':'+l.t.key)===hover||l.path===hover;}
  function onNode(n){p.onPick(p.focus&&p.focus.dim===n.dim&&p.focus.key===n.key?null:{dim:n.dim,key:n.key});}
  return h('div',{className:'nd-sankey',ref:wrap},
    h('svg',{width:W,height:H+TOP+6,viewBox:'0 0 '+W+' '+(H+TOP+6),role:'img','aria-label':'Sankey chart of network traffic by '+seq.map(function(d){return DIMS[d];}).join(', then ')},
      cols.map(function(c,i){return h('text',{key:'h'+i,x:i===cols.length-1&&cols.length>1?xs[i]+NW:(i>0?xs[i]+NW/2:xs[i]),y:12,className:'nd-colh',textAnchor:i===cols.length-1&&cols.length>1?'end':(i>0?'middle':'start')},DIMS[seq[i]].toUpperCase());}),
      links.map(function(l,j){var x0=l.s.x+NW,x1=l.t.x,mx=(x0+x1)/2,hgt=l.v*k;
        var d='M'+x0+','+l.sy+' C'+mx+','+l.sy+' '+mx+','+l.ty+' '+x1+','+l.ty+' L'+x1+','+(l.ty+hgt)+' C'+mx+','+(l.ty+hgt)+' '+mx+','+(l.sy+hgt)+' '+x0+','+(l.sy+hgt)+' Z';
        return h('path',{key:'l'+j,d:d,fill:l.s.c,className:'nd-link'+(lit(l)?' on':''),onMouseEnter:function(){setHover(l.s.dim+':'+l.s.key);},onMouseLeave:function(){setHover(null);}},h('title',null,l.s.key+' → '+l.t.key+': '+p.fmt(l.v)));}),
      cols.map(function(c){return c.map(function(n){var id=n.dim+':'+n.key,sel=p.focus&&p.focus.dim===n.dim&&p.focus.key===n.key,last=n.x===xs[xs.length-1]&&cols.length>1;
        return h('g',{key:id,className:'nd-node'+(sel?' sel':'')+(hover&&hover!==id&&!links.some(function(l){return lit(l)&&((l.s.dim+':'+l.s.key)===id||(l.t.dim+':'+l.t.key)===id);})?' dim':''),tabIndex:0,role:'button','aria-pressed':sel?'true':'false','aria-label':DIMS[n.dim]+' '+n.key+', '+p.fmt(n.v),
          onMouseEnter:function(){setHover(id);},onMouseLeave:function(){setHover(null);},onFocus:function(){setHover(id);},onBlur:function(){setHover(null);},onClick:function(){onNode(n);},onKeyDown:function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();onNode(n);}}},
          h('rect',{x:n.x,y:n.y,width:NW,height:n.h,rx:2,fill:n.c}),
          n.h>=14||true?h('text',{x:last?n.x-6:n.x+NW+6,y:n.y+Math.min(n.h/2,14)+4,textAnchor:last?'end':'start',className:'nd-nl'},h('tspan',{className:'k'},n.key),h('tspan',{dx:6,className:'v'},p.fmt(n.v))):null);});}))
  );
}

/* ---------- Analysis tab ---------- */
function Analysis(p){
  var ing=p.ing;
  var s1=useState(['res','route']),seq=s1[0],setSeq=s1[1];
  var s2=useState(0),rate=s2[0],setRate=s2[1];           /* 0 data, 1 cost */
  var s3=useState('egress'),dir=s3[0],setDir=s3[1];
  var s4=useState(false),setOpen=s4[1],setOpenV=s4[0];
  var s5=useState(false),seqOpen=s5[0],setSeqOpen=s5[1];
  var s6=useState(null),focus=s6[0],setFocus=s6[1];
  var s7=useState({k:'cost',desc:true}),sort=s7[0],setSort=s7[1];
  var s8=useState(''),q=s8[0],setQ=s8[1];
  var s9=useState(null),openRow=s9[0],setOpenRow=s9[1];
  var s10=useState(false),chart=s10[0],setChart=s10[1];
  var s11=useState({rate:0,dir:'egress'}),draft=s11[0],setDraft=s11[1];
  useEffect(function(){setFocus(null);setOpenRow(null);},[ing.id]);
  var rows=useMemo(function(){var rs=ing.rows.map(function(r){var g=dir==='egress'?r.egress:r.ingress;return Object.assign({},r,{gb:g,cost:cost(r,dir)});});
    rs.slice().sort(function(a,b){return b.gb-a.gb;}).forEach(function(r,i){r.ins=insightsFor(r,i);});return rs;},[ing,dir]);
  var totCost=rows.reduce(function(s,r){return s+r.cost;},0),totGb=rows.reduce(function(s,r){return s+r.gb;},0);
  var fmt=rate===0?gb:usd;
  var flow=rows.map(function(r){return Object.assign({},r,{v:rate===0?r.gb:r.cost});});
  var shown=rows.filter(function(r){return (!focus||r[focus.dim]===focus.key)&&(!q||(r.res+' '+r.route+' '+r.dest).toLowerCase().indexOf(q.toLowerCase())>=0);});
  shown.sort(function(a,b){var x=a[sort.k],y=b[sort.k];var c=typeof x==='number'?x-y:String(x).localeCompare(String(y));return sort.desc?-c:c;});
  var share=Math.round(totCost/ing.billed*100);
  function th(key,label,num){var on=sort.k===key;return h('th',{scope:'col',className:num?'num':'','aria-sort':on?(sort.desc?'descending':'ascending'):'none'},
    h('button',{type:'button',className:'nd-th'+(on?' on':''),onClick:function(){setSort({k:key,desc:on?!sort.desc:true});}},label,h(A.Icon,{name:on?(sort.desc?'arrow-down':'arrow-up'):'chevron-selector-vertical',size:12})));}
  var avail=Object.keys(DIMS).filter(function(d){return seq.indexOf(d)<0;});
  return h('div',{className:'nd-body'},
    h('div',{className:'nd-kpis'},
      h('div',{className:'nd-kpi'},h('span',{className:'nd-ic'},h(A.Icon,{name:'currency-dollar',size:16})),h('div',null,h('div',{className:'nd-kv'},usd(totCost),h(A.Badge,{theme:'purple',size:'sm'},share+'% of the period’s billed cost')),h('div',{className:'nd-kl'},'TOTAL NETWORKING COST'))),
      h('div',{className:'nd-kpi'},h('span',{className:'nd-ic'},h(A.Icon,{name:'database-01',size:16})),h('div',null,h('div',{className:'nd-kv'},gb(totGb)),h('div',{className:'nd-kl'},'TOTAL BYTES TRANSFERRED · '+dir.toUpperCase())))),
    h('div',{className:'nd-bar'},
      h('div',{className:'nd-seq'},h('span',{className:'nd-seq-l'},'Flow Sequence'),
        seq.map(function(d,i){return h('span',{key:d,className:'nd-chip'},(i?h('span',{className:'nd-arrow','aria-hidden':'true'},'→'):null),DIMS[d],h('button',{type:'button','aria-label':'Remove '+DIMS[d],onClick:function(){setSeq(seq.filter(function(x){return x!==d;}));setFocus(null);}},h(A.Icon,{name:'x-close',size:12})));}),
        avail.length?h(Menu,{open:seqOpen,onClose:function(){setSeqOpen(false);},trigger:h('button',{type:'button',className:'nd-add','aria-label':'Add a step to the flow sequence',onClick:function(){setSeqOpen(!seqOpen);}},h(A.Icon,{name:'plus',size:14}))},
          avail.map(function(d){return h('button',{key:d,type:'button',className:'nd-mi',onClick:function(){setSeq(seq.concat(d));setSeqOpen(false);}},DIMS[d]);})):null),
      h('div',{className:'nd-bar-r'},
        h(Menu,{open:setOpenV,right:true,onClose:function(){setOpen(false);},trigger:h(A.SelectButton,{label:'Flow Rate : '+(rate===0?'Data':'Cost'),onClick:function(){setDraft({rate:rate,dir:dir});setOpen(!setOpenV);}})},
          h('div',{className:'nd-pop'},h('div',{className:'nd-pop-h'},'FLOW SETTINGS'),
            h('div',{className:'nd-pop-f'},h('span',{className:'nd-label'},'Flow Direction'),h(A.SegmentedControl,{size:'sm',value:draft.dir==='egress'?0:1,onChange:function(i){setDraft({rate:draft.rate,dir:i?'ingress':'egress'});},options:[{label:'Egress'},{label:'Ingress'}]})),
            h('div',{className:'nd-pop-f'},h('span',{className:'nd-label'},'Flow Rate'),h(A.SegmentedControl,{size:'sm',value:draft.rate,onChange:function(i){setDraft({rate:i,dir:draft.dir});},options:[{icon:'database-01',label:'Data'},{icon:'currency-dollar',label:'Cost'}]})),
            h('div',{className:'nd-pop-a'},h(A.TextButton,{size:'small',onClick:function(){setOpen(false);}},'Cancel'),h(A.TextButton,{size:'small',color:'green',onClick:function(){setRate(draft.rate);setDir(draft.dir);setOpen(false);}},'Apply')))),
        h(A.Button,{color:'gray',outline:true,leftIcon:chart?'bar-chart-square-02':'eye-off',onClick:function(){setChart(!chart);}},chart?'Show Chart':'Hide Chart'))),
    chart?null:h('div',{className:'nd-chart'},seq.length<2?h('div',{className:'nd-empty'},'Sankey chart cannot be generated unless flow sequence has more than 1 item. Add a step with +.'):
      h(Sankey,{seq:seq,rows:flow,fmt:fmt,focus:focus,onPick:function(f){setFocus(f);setOpenRow(null);}})),
    h('div',{className:'nd-bar'},
      h('div',{className:'nd-search'},h(A.Input,{size:'sm',placeholder:'Search resources, routes or destinations',leftIcon:'search-md',value:q,onChange:function(e){setQ(e.target.value);}})),
      focus?h('span',{className:'nd-filter'},DIMS[focus.dim]+': ',h('b',null,focus.key),h('button',{type:'button','aria-label':'Clear filter',onClick:function(){setFocus(null);}},h(A.Icon,{name:'x-close',size:12}))):null,
      h('div',{className:'nd-bar-r'},h(A.Button,{color:'gray',outline:true,leftIcon:'upload-01',onClick:function(){p.toast('Export would download '+shown.length+' rows as CSV.');}},'Export'))),
    h('div',{className:'nd-table'},h('table',null,
      h('thead',null,h('tr',null,th('res','Resource'),th('route','Network Route'),th('dest','Destination'),th('gb','Bytes Transferred',true),th('cost','Networking Cost',true),h('th',{scope:'col',className:'num'},'Insights'))),
      h('tbody',null,shown.length?shown.map(function(r){var open=openRow===r.res;return [
        h('tr',{key:r.res,className:open?'open':''},h('td',{className:'mono'},r.res),h('td',null,r.route),h('td',null,r.dest),h('td',{className:'num'},gb(r.gb)),h('td',{className:'num'},usd(r.cost)),
          h('td',{className:'num'},r.ins.length?h('button',{type:'button',className:'nd-ins','aria-expanded':open?'true':'false',onClick:function(){setOpenRow(open?null:r.res);}},h(A.Icon,{name:'lightbulb-02',size:14}),r.ins.length):h('span',{className:'nd-none'},'–'))),
        open?h('tr',{key:r.res+'-i',className:'nd-insrow'},h('td',{colSpan:6},h('ul',null,r.ins.map(function(t,i){return h('li',{key:i},h(A.Icon,{name:'lightbulb-02',size:14}),t);})))):null];}):
        h('tr',null,h('td',{colSpan:6,className:'nd-emptyrow'},'No resources match. Clear the search or the filter.'))),
      h('tfoot',null,h('tr',null,h('td',{colSpan:3},focus||q?'SHOWN':'TOTAL'),h('td',{className:'num'},gb(shown.reduce(function(s,r){return s+r.gb;},0))),h('td',{className:'num'},usd(shown.reduce(function(s,r){return s+r.cost;},0))),h('td',{className:'num'},shown.reduce(function(s,r){return s+r.ins.length;},0))))))
  );
}

/* ---------- Flow Logs tab ---------- */
function FlowLogs(p){
  var s=useState(0),src=s[0],setSrc=s[1],s2=useState(''),q=s2[0],setQ=s2[1];
  var list=p.list.filter(function(i){return (src===0||(src===1?i.provider==='aws':i.provider==='gcp'))&&(!q||i.name.toLowerCase().indexOf(q.toLowerCase())>=0);});
  return h('div',{className:'nd-body'},
    h('div',{className:'nd-bar'},h(A.SegmentedControl,{size:'sm',value:src,onChange:setSrc,options:[{label:'All'},{label:'AWS'},{label:'GCP'}]}),
      h('div',{className:'nd-search'},h(A.Input,{size:'sm',placeholder:'Search flow logs',leftIcon:'search-md',value:q,onChange:function(e){setQ(e.target.value);}})),
      h('div',{className:'nd-bar-r'},h(A.Button,{color:'green',leftIcon:'plus-circle',onClick:p.onAdd},'Add Flow Log'))),
    h('div',{className:'nd-table'},h('table',null,
      h('thead',null,h('tr',null,['Log Name','Billing Account','Region','Period Cost','Period','Uploaded','Uploaded By'].map(function(t){return h('th',{key:t,scope:'col',className:t==='Period Cost'?'num':''},t);}))),
      h('tbody',null,list.map(function(i){var c=i.rows.reduce(function(s,r){return s+cost(r,'egress');},0);
        return h('tr',{key:i.id,className:'link',tabIndex:0,onClick:function(){p.onOpen(i.id);},onKeyDown:function(e){if(e.key==='Enter')p.onOpen(i.id);}},
          h('td',null,h('span',{className:'nd-ln'},logo(i.provider),i.name,i.fresh?h(A.Badge,{theme:'green',size:'sm'},'New'):null)),h('td',{className:'clip'},i.account),h('td',null,i.region),h('td',{className:'num'},usd(c)),h('td',null,i.start+' – '+i.end),h('td',null,i.up),h('td',{className:'brand'},i.by));})))),
    h(A.Callout,{tone:'info',title:'Flow log ID tracking'},'Only logs from confirmed flow logs are processed. This prevents stale data from unused VPCs or other accounts in the same bucket being analysed.'));
}

/* ---------- Add Flow Log wizard ---------- */
var REQS=[['Enable VPC Flow Logs','Enable Flow Logs for all VPCs that contain NAT Gateways, delivered to an S3 bucket.'],['Provide Account & Region','Select where your Flow Logs are stored. Available logs are detected automatically.'],['Validate Flow Log IDs','We check that logs are active, accessible and tied to VPCs with NAT Gateways.'],['Select Analysis Window','Choose up to 15 days per quarter. Remaining quota shows before ingestion.']];
function days(a,b){var d=(new Date(b)-new Date(a))/864e5;return isNaN(d)?0:Math.round(d);}
function Wizard(p){
  var st=useState(0),step=st[0],setStep=st[1];
  var f=useState({name:'',src:'aws',acct:ACCOUNTS.aws[0],region:REGIONS.aws[0]}),form=f[0],setForm=f[1];
  var sl=useState({}),sel=sl[0],setSel=sl[1];
  var mn=useState(null),manual=mn[0],setManual=mn[1];
  var ex=useState([]),extra=ex[0],setExtra=ex[1];
  var va=useState(-1),checking=va[0],setChecking=va[1];
  var dt=useState({a:'2026-07-13',b:'2026-07-19'}),dts=dt[0],setDts=dt[1];
  var ref=useRef(null);
  useEffect(function(){var el=ref.current&&ref.current.querySelector('input,select,button');if(el)el.focus();},[step]);
  useEffect(function(){function k(e){if(e.key==='Escape')p.onClose();}document.addEventListener('keydown',k);return function(){document.removeEventListener('keydown',k);};},[]);
  var det=DETECTED[form.src].concat(extra);
  var nSel=det.filter(function(d){return sel[d.id];}).length;
  var used=p.used,len=days(dts.a,dts.b),left=15-used,ok=len>0&&len<=left;
  function next(){
    if(step===0){setStep(1);return;}
    if(step===1){setChecking(0);var i=0;var t=setInterval(function(){i++;setChecking(i);if(i>=3){clearInterval(t);setTimeout(function(){setChecking(-1);setStep(2);},350);}},420);return;}
    p.onSave({name:form.name.trim(),provider:form.src,account:form.acct,region:form.region,days:len,start:dts.a,end:dts.b});
  }
  var canNext=step===0?form.name.trim().length>0:step===1?nSel>0&&checking<0:ok;
  var titles=['1. Add Flow Log','2. Select Flow Logs to Ingest','3. Select Analysis Window'];
  var subs=['Connect VPC Flow Logs delivered to storage to analyse NAT Gateway traffic and network cost drivers. You can ingest up to 15 days of log data per quarter.','We detected the following active Flow Logs in the selected account and region. Select the logs you want to ingest.','Select a time window to analyse NAT gateway traffic. This is limited to a maximum of 15 days per quarter.'];
  function reqs(active){return h('div',{className:'nd-reqs'},h('div',{className:'nd-reqs-h'},'Setup requirements'),h('ol',null,REQS.map(function(r,i){return h('li',{key:i,className:i===active?'on':i<active?'done':''},h('i',{'aria-hidden':'true'}),h('b',null,r[0]),h('span',null,r[1]),i===0?h('a',{href:'https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html',target:'_blank',rel:'noopener'},'View AWS setup guide ↗'):null);})));}
  var body;
  if(step===0)body=h('div',{className:'nd-split'},reqs(1),h('div',{className:'nd-form'},
    h(A.Input,{label:'Flow Log Name',placeholder:'e.g. Production VPCs',value:form.name,onChange:function(e){setForm(Object.assign({},form,{name:e.target.value}));},subtext:'This name identifies the flow log in the analyser.'}),
    h('div',{className:'nd-field'},h('span',{className:'nd-label'},'Log Source'),h(A.SegmentedControl,{value:form.src==='aws'?0:1,onChange:function(i){var s=i?'gcp':'aws';setSel({});setExtra([]);setForm(Object.assign({},form,{src:s,acct:ACCOUNTS[s][0],region:REGIONS[s][0]}));},options:[{label:'AWS'},{label:'GCP'}]})),
    h(Select,{label:'Account',value:form.acct,options:ACCOUNTS[form.src],onChange:function(v){setForm(Object.assign({},form,{acct:v}));},sub:'The account that contains the Flow Logs.'}),
    h(Select,{label:'Region',value:form.region,options:REGIONS[form.src],onChange:function(v){setForm(Object.assign({},form,{region:v}));},sub:'Where Flow Logs are delivered.'})));
  else if(step===1)body=h('div',null,
    h('div',{className:'nd-table'},h('table',null,h('thead',null,h('tr',null,h('th',{className:'cb'},h(A.Checkbox,{checked:nSel>0&&nSel===det.filter(function(d){return d.st==='ACTIVE';}).length,indeterminate:nSel>0&&nSel<det.filter(function(d){return d.st==='ACTIVE';}).length,onChange:function(c){var n={};if(c)det.forEach(function(d){if(d.st==='ACTIVE')n[d.id]=true;});setSel(n);}})),h('th',null,'Flow Log Name'),h('th',null,'Flow Log ID'),h('th',null,'Associated Resource'),h('th',null,'Status'))),
      h('tbody',null,det.map(function(d){var dis=d.st!=='ACTIVE';return h('tr',{key:d.id,className:dis?'dis':''},h('td',{className:'cb'},h(A.Checkbox,{checked:!!sel[d.id],disabled:dis,onChange:function(c){var n=Object.assign({},sel);n[d.id]=c;setSel(n);}})),h('td',null,d.n),h('td',{className:'mono clip'},d.id),h('td',{className:'mono'},d.res),h('td',null,h('span',{className:dis?'nd-st off':'nd-st'},d.st)));})))),
    manual!==null?h('div',{className:'nd-manual'},h(A.Input,{size:'sm',placeholder:form.src==='aws'?'fl-0123456789abcdef0':'projects/…/subnet',value:manual,onChange:function(e){setManual(e.target.value);}}),h(A.Button,{color:manual.trim()?'green':'disabled',onClick:function(){if(!manual.trim())return;var id=manual.trim();setExtra(extra.concat({n:'manual-'+(extra.length+1),id:id,res:'—',st:'ACTIVE'}));var n=Object.assign({},sel);n[id]=true;setSel(n);setManual(null);}},'Add'),h(A.TextButton,{onClick:function(){setManual(null);}},'Cancel')):
      h('div',{className:'nd-note'},h(A.Icon,{name:'info-circle',size:16}),h('span',null,'Only logs tied to VPCs with NAT Gateways are shown. Missing one? Add it manually.'),h(A.Button,{color:'green',size:'base',leftIcon:'plus-circle',onClick:function(){setManual('');}},'Add Manually')),
    checking>=0?h('div',{className:'nd-check',role:'status'},['Flow Logs are active','Logs are accessible','Associated VPCs contain NAT Gateways'].map(function(t,i){return h('span',{key:i,className:i<checking?'ok':''},h(A.Icon,{name:i<checking?'check-circle':'loading-02',size:16}),t);})):null);
  else body=h('div',{className:'nd-split'},reqs(3),h('div',{className:'nd-form'},
    h('div',{className:'nd-quota'},h('div',{className:'nd-qh'},h('span',null,'QUARTER USAGE'),h('b',null,used+'/15 days used')),h('div',{className:'nd-qbar'},h('i',{style:{width:(used/15*100)+'%'}}),h('i',{className:ok?'sel':'over',style:{width:(Math.min(len,15-used)/15*100)+'%'}})),h('span',null,left+' days remaining this quarter')),
    h('div',{className:'nd-dates'},h(A.Input,{label:'Analysis start date',type:'date',value:dts.a,onChange:function(e){setDts({a:e.target.value,b:dts.b});}}),h(A.Input,{label:'Analysis end date',type:'date',value:dts.b,onChange:function(e){setDts({a:dts.a,b:e.target.value});}})),
    h(A.Callout,{tone:ok?'success':'error'},len<=0?'The end date must be after the start date.':ok?len+' days selected in time window, within quota.':len+' days selected, but only '+left+' days are left this quarter.')));
  return h('div',{className:'nd-overlay',onMouseDown:function(e){if(e.target===e.currentTarget)p.onClose();}},
    h('div',{className:'nd-modal',role:'dialog','aria-modal':'true','aria-label':titles[step],ref:ref},
      h('div',{className:'nd-mh'},h('div',{className:'nd-prog','aria-hidden':'true'},[0,1,2].map(function(i){return h('i',{key:i,className:i<=step?'on':''});})),h('a',{className:'nd-doc',href:'https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html',target:'_blank',rel:'noopener'},'Documentation ↗'),h('button',{type:'button',className:'nd-x','aria-label':'Close',onClick:p.onClose},h(A.Icon,{name:'x-close',size:18}))),
      h('div',{className:'nd-mb'},h('h4',null,titles[step]),h('p',{className:'nd-msub'},subs[step]),body),
      h('div',{className:'nd-mf'},h(A.Button,{color:'gray',outline:true,size:'lg',onClick:step?function(){setStep(step-1);}:p.onClose},step?'Back':'Cancel'),h(A.Button,{color:canNext?'green':'disabled',size:'lg',rightIcon:'arrow-right',onClick:function(){if(canNext)next();}},['Next','Validate & Next','Save & Import'][step]))));
}

/* ---------- App ---------- */
function fmtDate(s){var d=new Date(s);return isNaN(d)?s:d.toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'});}
function App(){
  var a=useState(0),tab=a[0],setTab=a[1];
  var b=useState(INGESTIONS),list=b[0],setList=b[1];
  var c=useState('aws-1'),selId=c[0],setSel=c[1];
  var d=useState(false),menu=d[0],setMenu=d[1];
  var e=useState(false),wiz=e[0],setWiz=e[1];
  var f=useState(null),toast=f[0],setToast=f[1];
  var g=useState(5),used=g[0],setUsed=g[1];
  var tq=useRef(0);
  function say(m){setToast(m);clearTimeout(tq.current);tq.current=setTimeout(function(){setToast(null);},3200);}
  var ing=list.filter(function(i){return i.id===selId;})[0]||list[0];
  function save(x){var n=list.length+1,base=x.provider==='gcp'?INGESTIONS[2]:INGESTIONS[0],scale=0.4+((x.name.length*7)%9)/10;
    var item={id:'new-'+n,name:x.name,provider:x.provider,account:x.account,region:x.region,start:fmtDate(x.start),end:fmtDate(x.end),up:'Today',by:'jamie@acme.io',billed:base.billed*scale,fresh:true,
      rows:base.rows.map(function(r){return Object.assign({},r,{egress:Math.round(r.egress*scale),ingress:Math.round(r.ingress*scale)});})};
    setList(list.concat(item));setUsed(used+x.days);setSel(item.id);setWiz(false);setTab(0);say('“'+x.name+'” imported. '+x.days+' days used from this quarter’s quota.');}
  var groups=['aws','gcp'];
  return h('div',{className:'nd-app'},
    h('div',{className:'nd-head'},h('div',{className:'nd-title'},'Networking Analysis'),
      h(A.NavTabs,{value:tab,onChange:setTab,tabs:[{label:'Network Flow Analysis',icon:'line-chart-up-01'},{label:'Flow Logs',icon:'file-06'}]})),
    tab===0?h('div',{className:'nd-tool'},
      h(Menu,{open:menu,onClose:function(){setMenu(false);},trigger:h(A.SelectButton,{logo:logo(ing.provider),label:ing.name,onClick:function(){setMenu(!menu);}})},
        groups.map(function(gp){var items=list.filter(function(i){return i.provider===gp;});return items.length?h('div',{key:gp},h('div',{className:'nd-mg'},'FLOW LOGS ('+gp.toUpperCase()+')'),
          items.map(function(i){return h('button',{key:i.id,type:'button',className:'nd-mi'+(i.id===ing.id?' on':''),onClick:function(){setSel(i.id);setMenu(false);}},logo(i.provider),i.name,i.id===ing.id?h(A.Icon,{name:'check',size:14}):null);})):null;}),
        h('button',{type:'button',className:'nd-mi add',onClick:function(){setMenu(false);setWiz(true);}},h(A.Icon,{name:'plus',size:14}),'Add Flow Log')),
      h('div',{className:'nd-period'},h(A.Icon,{name:'calendar',size:16}),h('span',null,'Log Period'),h('b',null,ing.start+' – '+ing.end))):null,
    tab===0?h(Analysis,{ing:ing,toast:say}):h(FlowLogs,{list:list,onAdd:function(){setWiz(true);},onOpen:function(id){setSel(id);setTab(0);}}),
    wiz?h(Wizard,{used:used,onClose:function(){setWiz(false);},onSave:save}):null,
    toast?h('div',{className:'nd-toast',role:'status'},h(A.Toast,{type:'success',title:toast,onClose:function(){setToast(null);}})):null
  );
}
ReactDOM.createRoot(root).render(h(App));

/* Scale the 1280×800 layout to the frame */
function fit(){root.style.setProperty('--k',(root.clientWidth/1280).toFixed(4));}
fit();new ResizeObserver(fit).observe(root);

/* Follow the site theme */
var html=document.documentElement,mq=matchMedia('(prefers-color-scheme: dark)');
function th(){root.setAttribute('data-theme',html.dataset.theme?html.dataset.theme:(mq.matches?'dark':'light'));}
th();new MutationObserver(th).observe(html,{attributes:true,attributeFilter:['data-theme']});if(mq.addEventListener)mq.addEventListener('change',th);
})();
