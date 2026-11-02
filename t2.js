(function(){var W=window,D=document;W.T2V='1.2.0-rc.3';
function theme(s){s=s||{};var d=document.documentElement.style;function h(x){x=x.replace('#','');return[0,2,4].map(function(i){return parseInt(x.substr(i,2),16)})}function m(c,t,p){var b=h(t);return'#'+h(c).map(function(v,i){v=Math.round(v+(b[i]-v)*p);return(v<16?'0':'')+v.toString(16)}).join('')}function v(k,x){d.setProperty('--t2-'+k,x)}var P=s.pri,A=s.acc,D=s.accDk||m(A,'#000000',.21),Q=s.paper;v('navy',P);v('navy-dk',s.priDk||m(P,'#000000',.25));v('pri-rgb',h(P)+'');v('acc',A);v('acc-rgb',h(A)+'');v('acc-lt',s.accLt||m(A,'#ffffff',.1));v('acc-dk',D);v('accdk-rgb',h(D)+'');v('paper',Q);v('paper-rgb',h(Q)+'');v('paper-dk',s.paperDk||m(Q,'#000000',.06));v('field',s.field||m(Q,'#000000',.13));v('shd-rgb',s.shd||h(m(P,'#000000',.43))+'');v('disp',s.font);v('disp-w',s.w||400);if(s.fontUrl){var l=document.createElement('link');l.rel='stylesheet';l.href=s.fontUrl;document.head.appendChild(l)}var C=s.preset=='classic',S='rgba(var(--t2-shd-rgb),';(C?'6,6,4,3,6,6,4':'18,16,12,8,22,14,10').split(',').forEach(function(r,i){v('r'+(i?i+1:''),r+'px')});v('pill',C?'4px':'999px');v('rk',C?.34:1);v('tk',C?0:1);v('dk',C?.78:1);v('nav-a',C?1:.86);v('glass',C?'none':'saturate(1.4) blur(14px)');v('glass2',C?'none':'saturate(1.4) blur(12px)');v('bcase',C?'uppercase':'none');v('btrack',C?'.06em':'normal');var c='0 0 0 1px rgba(var(--t2-pri-rgb),.10),0 6px 16px '+S+'.07)',z=['8px 24px S.06','18px 40px S.12','8px 18px S.22','12px 30px S.12','30px 70px S.12','0 0 3px rgba(var(--t2-acc-rgb),.28','30px 80px rgba(0,0,0,.3','6px 18px rgba(0,0,0,.18','20px 50px S.12','30px 70px S.16','16px 40px S.16','10px 30px S.08','16px 40px S.12','8px 20px rgba(var(--t2-accdk-rgb),.28','14px 30px rgba(0,0,0,.32'];v('shc',C?c:'0 12px 30px '+S+'.12)');z.forEach(function(x,i){v('sh'+i,C?c:'0 '+x.replace('S',S)+')')});var o=s.vars||{};for(var k in o)if(o.hasOwnProperty(k))v(k,o[k])}
if(W.T2S){try{theme(W.T2S);}catch(e){}}else{var t2s;try{Object.defineProperty(W,'T2S',{configurable:true,enumerable:true,get:function(){return t2s;},set:function(v){t2s=v;try{theme(v);}catch(e){}}});}catch(e){D.addEventListener('DOMContentLoaded',function(){theme(W.T2S);});}}
W.T2PROMO_STD=W.T2PROMO_STD||'Promotions apply to select apartments and lease terms, are available for a limited time, and may change or end without notice. Move-in dates and other eligibility requirements apply. Contact our leasing office for current details.';
function run(){
try{(function(){function swap(){[].forEach.call(document.querySelectorAll('.w-form input#Message,.w-form input[name="Message"]'),function(inp){var ta=document.createElement('textarea');[].forEach.call(inp.attributes,function(a){if(a.name!=='type'&&a.name!=='value')ta.setAttribute(a.name,a.value);});ta.value=inp.value;ta.rows=3;inp.parentNode.replaceChild(ta,inp);});}
if(document.readyState!=='loading')swap();else document.addEventListener('DOMContentLoaded',swap);})();
}catch(e){console.error(e);}
try{(function(){var C=window.T2&&window.T2.map;if(!C||!C.addr)return;
var TOKEN=(window.T2K||{}).mapbox,V='3.6.0';if(!TOKEN)return;
function frames(){return [].filter.call(document.querySelectorAll('iframe'),function(f){return /google\.[a-z.]+\/maps|maps\.google\./i.test(f.getAttribute('src')||'');});}
var fs=frames();if(!fs.length)return;
var DIR='https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent((C.name?C.name+', ':'')+C.addr);
var P={land:'#f3efe4',water:'#c7dbe5',park:'#dce6cf',bldg:'#e6e0d2',label:'#4b5b6e'};
function load(cb,fail){if(window.mapboxgl)return cb();var l=document.createElement('link');l.rel='stylesheet';l.href='https://api.mapbox.com/mapbox-gl-js/v'+V+'/mapbox-gl.css';document.head.appendChild(l);var s=document.createElement('script');s.src='https://api.mapbox.com/mapbox-gl-js/v'+V+'/mapbox-gl.js';s.onload=cb;s.onerror=fail;document.head.appendChild(s);}
function where(cb,fail){if(C.lng&&C.lat)return cb([+C.lng,+C.lat]);var k='t2geo:'+C.addr;try{var c=sessionStorage.getItem(k);if(c)return cb(JSON.parse(c));}catch(e){}
fetch('https://api.mapbox.com/search/geocode/v6/forward?limit=1&country=us&q='+encodeURIComponent(C.addr)+'&access_token='+TOKEN).then(function(r){if(!r.ok)throw r.status;return r.json();}).then(function(j){var g=j&&j.features&&j.features[0];if(!g)throw 'none';var ll=g.geometry.coordinates;try{sessionStorage.setItem(k,JSON.stringify(ll));}catch(e){}cb(ll);}).catch(fail);}
var KEEP=['park_like','food_and_drink','food_and_drink_stores','store_like','education','medical','sport_and_leisure','arts_and_entertainment','historic','landmark'];
var BLOCK=['apartment','townhome','residence','condo','senior living','lodge','flats','villas','realty','real estate','property management','cannabis','dispensary','vape','smoke shop','tobacco','pawn','payday','check cashing'].concat((C.hide||[]).map(function(x){return String(x).toLowerCase();}));
function poiFilter(orig){var nm=['downcase',['coalesce',['get','name_en'],['get','name'],'']],ty=['downcase',['coalesce',['get','type'],'']];
var f=['all',['match',['get','class'],KEEP,true,false]];BLOCK.forEach(function(w){f.push(['!',['in',w,nm]]);f.push(['!',['in',w,ty]]);});if(orig)f.push(orig);return f;}
function brand(map){(map.getStyle().layers||[]).forEach(function(l){var id=l.id;try{
if(id==='poi-label'){try{map.setFilter(id,poiFilter(l.filter));}catch(e){map.setLayoutProperty(id,'visibility','none');}}
else if(l.type==='symbol'&&/poi|transit|airport|natural-point|ferry/.test(id)){map.setLayoutProperty(id,'visibility','none');return;}
if(l.type==='background')map.setPaintProperty(id,'background-color',P.land);
else if(l.type==='fill'){if(/water/.test(id))map.setPaintProperty(id,'fill-color',P.water);else if(/park|national|landcover|grass|wood|pitch|golf/.test(id))map.setPaintProperty(id,'fill-color',P.park);else if(/building/.test(id))map.setPaintProperty(id,'fill-color',P.bldg);else if(/land/.test(id))map.setPaintProperty(id,'fill-color',P.land);}
else if(l.type==='line'&&/water|river|stream/.test(id))map.setPaintProperty(id,'line-color',P.water);
else if(l.type==='symbol'&&l.layout&&l.layout['text-field'])map.setPaintProperty(id,'text-color',P.label);}catch(e){}});}
function build(f,ll){var h=Math.round(f.getBoundingClientRect().height)||440,box=document.createElement('div');box.className='t2-mbx';box.style.height=h+'px';box.setAttribute('role','region');box.setAttribute('aria-label','Map showing '+(C.name||'the property')+' at '+C.addr);
f.style.display='none';f.parentNode.insertBefore(box,f);var done=false,undo=function(why){if(done)return;done=true;try{box.remove();}catch(e){}f.style.display='';if(why)console.warn('Template 2.0 map: kept the Google map ('+why+'). If Mapbox rejected the token, add '+location.origin+' to its allowed URLs.');};
var t=setTimeout(function(){undo('timed out');},9000);
var map=new mapboxgl.Map({accessToken:TOKEN,container:box,style:'mapbox://styles/mapbox/light-v11',center:ll,zoom:14,cooperativeGestures:true,attributionControl:false});
map.addControl(new mapboxgl.AttributionControl({compact:true}),'bottom-right');map.addControl(new mapboxgl.NavigationControl({showCompass:false}),'bottom-right');
map.on('error',function(e){var s=e&&e.error&&e.error.status;if(s===401||s===403)undo('token '+s);});
map.on('load',function(){if(done)return;clearTimeout(t);brand(map);box.t2map=map;try{document.dispatchEvent(new CustomEvent('t2:map',{detail:{map:map,box:box}}));}catch(e){}
var el=document.createElement('div');el.className='t2-mk';el.innerHTML='<span class="t2-mk-pin"><svg viewBox="0 0 12 12" aria-hidden="true"><path fill="currentColor" d="M6 .8 11.2 6 6 11.2.8 6Z"/></svg></span><span class="t2-mk-lbl"></span>';el.querySelector('.t2-mk-lbl').textContent=C.name||'';if(!C.name)el.querySelector('.t2-mk-lbl').remove();
el.addEventListener('click',function(){window.open(DIR,'_blank','noopener');});el.title='Get directions to '+(C.name||C.addr);
new mapboxgl.Marker({element:el,anchor:'bottom'}).setLngLat(ll).addTo(map);
var a=document.createElement('a');a.className='t2-mbx-dir';a.href=DIR;a.target='_blank';a.rel='noopener';a.innerHTML='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 1.5 14.5 8 8 14.5 1.5 8Z"/><path d="M6 9.5V8a1 1 0 0 1 1-1h3M8.8 5.2 10.6 7 8.8 8.8"/></svg>Get directions';box.appendChild(a);
if(window.ResizeObserver)new ResizeObserver(function(){map.resize();}).observe(box);});}
function go(){load(function(){where(function(ll){frames().forEach(function(f){build(f,ll);});},function(e){console.warn('Template 2.0 map: kept the Google map (address lookup failed: '+e+').');});},function(){});}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){if(es.some(function(x){return x.isIntersecting;})){io.disconnect();go();}},{rootMargin:'400px'});fs.forEach(function(f){io.observe(f);});}else go();})();
}catch(e){console.error(e);}
try{(function(){var d=document.documentElement,T2=window.T2||{Noun:'Apartments',path:'/apartments'};
function fixLinks(){[].forEach.call(document.querySelectorAll('a[href^="/floorplans"],a[href^="/apply"]'),function(a){a.setAttribute('href',a.getAttribute('href').replace(/^\/(floorplans|apply)/,T2.path));});
[].forEach.call(document.querySelectorAll('.navbar .nav-tour-cta'),function(a){a.setAttribute('href',T2.path);});
var ft=document.querySelector('#or3d .of-title');if(ft&&ft.firstChild&&ft.firstChild.nodeType===3)ft.firstChild.nodeValue='Find Your '+T2.Noun.replace(/s$/,'');}
fixLinks();document.addEventListener('DOMContentLoaded',fixLinks);addEventListener('load',fixLinks);
[].forEach.call(document.querySelectorAll('.navbar .nav-call-cta'),function(a){var n=(a.textContent||'').replace(/\D/g,'');if(n.length>=10)a.setAttribute('href','tel:+1'+n.slice(-10));});
function sc(){d.classList.toggle('t2-scrolled',(window.scrollY||0)>8);}sc();addEventListener('scroll',sc,{passive:true});
if(!document.querySelector('.t2-hero,.t2-sec'))return;d.classList.add('t2-js');
function go(){requestAnimationFrame(function(){d.classList.add('t2-in');});}
if(document.readyState==='complete')go();else addEventListener('load',go);setTimeout(go,1800);
var els=document.querySelectorAll('.t2-gal-item');if(!('IntersectionObserver' in window)){[].forEach.call(els,function(e){e.classList.add('is-in');});return;}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -12% 0px'});
[].forEach.call(els,function(e){io.observe(e);});})();
(function(){if(document.getElementById('or3d'))return;var pop=null,orig=null,origNext=null,last=null,pre='';
var TOUR="I'd like to schedule a tour.",HINT='Preferred days and times, floor plan, or questions';
var onContact=/^\/contact/.test(location.pathname);
function form(){return (pop&&pop.querySelector('.w-form'))||document.querySelector('.form-div .w-form');}
function mark(f,on){var fm=f.querySelector('form')||f,h=fm.querySelector('input[name="Tour Request"]');if(on&&!h){h=document.createElement('input');h.type='hidden';h.name='Tour Request';h.value=TOUR;fm.appendChild(h);}else if(!on&&h)h.parentNode.removeChild(h);}
function prefill(f,msg){var m=f.querySelector('#Message,[name="Message"]');if(m){if(!m.getAttribute('placeholder'))m.setAttribute('placeholder',HINT);if(msg){m.value=msg;pre=msg;}else if(pre&&m.value===pre){m.value='';pre='';}}mark(f,true);}
function scrollTo(f,msg){prefill(f,msg);f.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'});setTimeout(function(){var i=f.querySelector('input:not([type=hidden]):not([type=submit])');if(i)i.focus({preventScroll:true});},450);}
function open(msg){var f=form();if(!f){location.href='/contact?tour=1';return;}
if(onContact&&!f.closest('.t2-tourform')&&!(pop&&pop.contains(f))){scrollTo(f,msg);return;}
if(!pop){pop=document.createElement('div');pop.className='t2-pop';pop.setAttribute('role','dialog');pop.setAttribute('aria-modal','true');pop.setAttribute('aria-labelledby','t2PopH');
pop.innerHTML='<div class="t2-pop-card"><button type="button" class="t2-pop-x" aria-label="Close">\u00d7</button><h2 class="t2-pop-h" id="t2PopH">Schedule a Tour</h2><p class="t2-pop-sub">Share your contact info and our team will reach out to set up a time that works for you.</p><div class="t2-pop-f"></div></div>';
document.body.appendChild(pop);pop.addEventListener('click',function(e){if(e.target===pop||e.target.closest('.t2-pop-x'))close();});}
var slot=pop.querySelector('.t2-pop-f');if(f.parentNode!==slot){orig=f.parentNode;origNext=f.nextSibling;slot.appendChild(f);}
prefill(f,msg);last=document.activeElement;pop.classList.add('on');document.documentElement.style.overflow='hidden';
setTimeout(function(){var i=f.querySelector('input:not([type=hidden]):not([type=submit])');if(i)i.focus();},80);}
function close(){if(!pop||!pop.classList.contains('on'))return;pop.classList.remove('on');document.documentElement.style.overflow='';var f=pop.querySelector('.w-form');if(f){mark(f,false);var m=f.querySelector('#Message,[name="Message"]');if(m&&pre&&m.value===pre){m.value='';}pre='';if(orig)orig.insertBefore(f,origNext);}if(last&&last.focus)last.focus();}
addEventListener('keydown',function(e){if(e.key==='Escape')close();});
function isTour(a){if(a.hasAttribute('data-t2-tour'))return true;var t=(a.textContent||'').toLowerCase().replace(/\s+/g,' '),h=a.getAttribute('href')||'';
if(!/\btours?\b/.test(t)||/3d|virtual|video/.test(t))return false;if(/^(https?:)?\/\//i.test(h)){var host=h.replace(/^(https?:)?\/\//i,'').split(/[\/?#]/)[0].toLowerCase().replace(/^www\./,'');var dom=String((window.T2&&window.T2.domain)||'').toLowerCase();if(!(/webflow\.io$/.test(host)||host===location.hostname.replace(/^www\./,'')||(dom&&host===dom)))return false;}return true;}
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a,button');if(!a||(pop&&pop.contains(a)))return;if(!isTour(a))return;e.preventDefault();open(a.getAttribute('data-t2-tour')||'');});
document.addEventListener('submit',function(e){var fm=e.target;if(fm&&fm.querySelector&&fm.querySelector('input[name="Tour Request"]')){window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'tour_request'});if(typeof window.gtag==='function')window.gtag('event','tour_request');}},true);
if(/[?&]tour=1/.test(location.search)){var f0=document.querySelector('.form-div .w-form');if(f0)setTimeout(function(){scrollTo(f0,'');},500);}
window.t2Tour=open;})();
}catch(e){console.error(e);}
try{(function(){var fd=document.querySelector('.faq-div');if(!fd)return;var cf=fd.parentNode,hs=[].slice.call(fd.querySelectorAll('.section-heading.faqs')).filter(function(h){var n=h.nextElementSibling,ok=false;while(n&&!n.matches('.section-heading.faqs')){if(getComputedStyle(n).display!=='none'){ok=true;break;}n=n.nextElementSibling;}return ok;});if(!hs.length)return;
cf.classList.add('t2-faqgrid');var aside=document.createElement('aside');aside.className='t2-faqnav';aside.setAttribute('aria-label','FAQ topics');var ul=document.createElement('ul');ul.className='t2-faqnav-list';
hs.forEach(function(h){var id=h.id||('faq-'+h.textContent.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''));h.id=id;var li=document.createElement('li'),a=document.createElement('a');a.href='#'+id;a.textContent=h.textContent;li.appendChild(a);ul.appendChild(li);});
aside.appendChild(ul);aside.insertAdjacentHTML('beforeend','<div class="t2-faqhelp"><b>Still have questions?</b><p>Our team is happy to help.</p><a href="/contact">Contact Us</a></div>');cf.insertBefore(aside,fd);
var nav=document.querySelector('.navbar'),mq=matchMedia('(max-width:991px)'),rm=matchMedia('(prefers-reduced-motion: reduce)');
function navH(){if(!nav)return 0;var p=getComputedStyle(nav).position;return /fixed|sticky/.test(p)?Math.max(0,Math.round(nav.getBoundingClientRect().bottom)):0;}
function setNav(){document.documentElement.style.setProperty('--t2-navh',navH()+'px');}
function off(){return mq.matches?navH()+aside.offsetHeight+12:110;}
function go(t,smooth){window.scrollTo({top:t.getBoundingClientRect().top+scrollY-off(),behavior:smooth&&!rm.matches?'smooth':'auto'});}
var links=[].slice.call(ul.querySelectorAll('a')),last=-1;
function spy(){var y=off()+24,cur=0;hs.forEach(function(h,i){if(h.getBoundingClientRect().top<y)cur=i;});if(cur===last)return;last=cur;links.forEach(function(a,i){a.classList.toggle('on',i===cur);if(i===cur){a.setAttribute('aria-current','true');}else a.removeAttribute('aria-current');});
var a=links[cur];if(a&&ul.scrollWidth>ul.clientWidth){var x=Math.max(0,a.offsetLeft-(ul.clientWidth-a.offsetWidth)/2);if(ul.scrollTo)ul.scrollTo({left:x,behavior:rm.matches?'auto':'smooth'});else ul.scrollLeft=x;}}
setNav();addEventListener('resize',function(){setNav();last=-1;spy();});addEventListener('load',setNav);
addEventListener('scroll',spy,{passive:true});spy();
if(location.hash){var t0=document.getElementById(location.hash.slice(1));if(t0)setTimeout(function(){go(t0,false);},80);}
ul.addEventListener('click',function(e){var a=e.target.closest('a');if(!a)return;e.preventDefault();var t=document.getElementById(a.getAttribute('href').slice(1));if(t)go(t,true);});})();
}catch(e){console.error(e);}
try{(function(){var fixed=[];
[].forEach.call(document.querySelectorAll('.w-lightbox'),function(a){var img=a.querySelector('img'),j=a.querySelector('script.w-json');if(!img||!j)return;
var src=img.getAttribute('src');if(!src||/cloudfront\.net\/plugins\//.test(src))return;
var d={};try{d=JSON.parse(j.textContent)||{};}catch(e){}
var it=(d.items&&d.items[0])||{};if(it.url===src)return;
fixed.push((it.url||'(none)')+' -> '+src);
d.items=[{type:'image',url:src,caption:it.caption||''}];j.textContent=JSON.stringify(d);});
if(fixed.length)console.warn('Gallery: '+fixed.length+' lightbox photo(s) did not match their tile and were corrected on this page:\n'+fixed.join('\n'));
if(window.Webflow&&Webflow.require){try{var lb=Webflow.require('lightbox');if(lb&&lb.ready)lb.ready();}catch(e){}}})();
}catch(e){console.error(e);}
try{(function(){var cs=[].slice.call(document.querySelectorAll('.t2-acard,.t2-band-item')).filter(function(c){var d=c.querySelector('.t2-acard-desc,.t2-band-p');return d&&d.textContent.trim();});if(!cs.length)return;
function set(c,on){cs.forEach(function(x){var o=x===c&&on;x.classList.toggle('is-open',o);x.setAttribute('aria-expanded',o?'true':'false');});}
cs.forEach(function(c){c.classList.add('has-desc');c.tabIndex=0;c.setAttribute('aria-expanded','false');
c.addEventListener('click',function(){set(c,!c.classList.contains('is-open'));});
c.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();set(c,!c.classList.contains('is-open'));}else if(e.key==='Escape'){set(c,false);}});});
document.addEventListener('click',function(e){if(!e.target.closest('.has-desc'))set(null,false);});
document.addEventListener('keydown',function(e){if(e.key==='Escape')set(null,false);});})();
}catch(e){console.error(e);}
try{!function(){var P=window.T2PROMO;if(!P||!P.text||/^\/(contact|thank-you)/.test(location.pathname))return;var d=new Date().toLocaleDateString('en-CA');if(P.start&&d<P.start||P.end&&d>P.end)return;var h=document.documentElement,rm=matchMedia('(prefers-reduced-motion: reduce)').matches,seen;try{seen=sessionStorage.t2pb;sessionStorage.t2pb=1}catch(e){}
function go(){var b=document.createElement('div'),n=document.querySelector('.navbar'),fx=n&&/fixed|sticky/.test(getComputedStyle(n).position);b.className='t2-pb'+(seen?' calm':'');b.setAttribute('role','region');b.setAttribute('aria-label','Current special');b.innerHTML='<p><b></b><span class="t2-pbw"><button type="button" class="t2-pbs" aria-label="Promo terms" aria-expanded="false">*</button><span class="t2-pbtip" role="tooltip"></span></span></p><a>See Availability</a>';b.querySelector('b').textContent=P.text;b.querySelector('.t2-pbtip').textContent=P.terms||window.T2PROMO_STD||'';b.querySelector('a').href=(window.T2&&T2.path)||'/apartments';document.body.appendChild(b);h.classList.add('t2-pbx');
var w=b.querySelector('.t2-pbw'),k=w.firstChild;function t(o){w.classList.toggle('open',o);k.setAttribute('aria-expanded',o)}k.onclick=function(e){e.stopPropagation();t(!w.classList.contains('open'))};document.addEventListener('click',function(){t(false)});addEventListener('keydown',function(e){e.key=='Escape'&&t(false)});
function sz(){h.style.setProperty('--t2-pbt',(fx?Math.ceil(n.getBoundingClientRect().bottom):0)+'px')}
function sc(){var x=scrollY>40;b.classList.toggle('hid',x);x&&t(false)}
sz();sc();addEventListener('resize',sz);addEventListener('load',sz);addEventListener('scroll',sc,{passive:true});if(window.ResizeObserver)new ResizeObserver(sz).observe(n||b);
setTimeout(function(){sz();b.classList.add('on');seen||setTimeout(function(){b.classList.add('calm')},rm?0:4500)},rm?0:1200)}
document.readyState=='loading'?document.addEventListener('DOMContentLoaded',go):go()}();
}catch(e){console.error(e);}
try{!function(){var P=window.T2PROMO,d=new Date().toLocaleDateString('en-CA');if(!P||!P.text||P.start&&d<P.start||P.end&&d>P.end)return;function f(){[].forEach.call(document.querySelectorAll('.faq-text'),function(q){if(/move-in special/i.test(q.textContent)){var a=q.closest('.faq-dropdown');a=a&&a.querySelector('.answer');if(a)a.textContent=P.text+'. '+(P.terms||window.T2PROMO_STD||'')+(P.end?' Offer ends '+new Date(P.end+'T12:00').toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})+'.':'')}})}document.readyState=='loading'?document.addEventListener('DOMContentLoaded',f):f()}();
}catch(e){console.error(e);}
try{(function(){var m,f,h,op,last;function build(){m=document.createElement('div');m.className='t2-tm';m.setAttribute('role','dialog');m.setAttribute('aria-modal','true');m.setAttribute('aria-labelledby','t2TmH');m.innerHTML='<div class="t2-tm-box"><div class="t2-tm-head"><b id="t2TmH"></b><a target="_blank" rel="noopener">Open in a new tab \u2197</a><button type="button" class="t2-tm-x" aria-label="Close the 3D tour">\u00d7</button></div><iframe title="Matterport 3D tour" allow="autoplay; fullscreen; web-share; xr-spatial-tracking" allowfullscreen></iframe></div>';document.body.appendChild(m);f=m.querySelector('iframe');h=m.querySelector('b');op=m.querySelector('a');m.addEventListener('click',function(e){if(e.target===m||e.target.closest('.t2-tm-x'))close();});}function open(id,t){if(!m)build();var u='https://my.matterport.com/show/?m='+encodeURIComponent(id);h.textContent=t;op.href=u;f.src=u+'&play=1&qs=1';last=document.activeElement;m.classList.add('on');document.documentElement.style.overflow='hidden';m.querySelector('.t2-tm-x').focus();}function close(){if(!m||!m.classList.contains('on'))return;m.classList.remove('on');f.src='about:blank';document.documentElement.style.overflow='';if(last&&last.focus)last.focus();}addEventListener('keydown',function(e){if(e.key==='Escape')close();});document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('[data-matterport]');if(!a)return;e.preventDefault();var id=(a.getAttribute('data-matterport')||'').trim();if(!/^[A-Za-z0-9]{6,}$/.test(id))return;open(id,a.getAttribute('data-tour-title')||'3D Tour');});})();
}catch(e){console.error(e);}
try{(function(){if(!document.querySelector('.faq-div'))return;var q=[];[].forEach.call(document.querySelectorAll('.faq-div .faq-dropdown'),function(d){if(getComputedStyle(d).display==='none')return;var t=d.querySelector('.faq-dropdown-toggle .faq-text'),a=d.querySelector('.faq-text.answer');if(!t||!a)return;var qt=(t.textContent||'').trim(),at=(a.textContent||'').replace(/\s+/g,' ').trim();if(!qt||!at||/\[/.test(qt+at))return;q.push({'@type':'Question',name:qt,acceptedAnswer:{'@type':'Answer',text:at}});});if(!q.length)return;var s=document.createElement('script');s.type='application/ld+json';s.textContent=JSON.stringify({'@context':'https://schema.org','@type':'FAQPage',mainEntity:q});document.head.appendChild(s);})();
}catch(e){console.error(e);}
try{(function(){var m,im,h,last;function close(){if(m&&m.classList.contains('on')){m.classList.remove('on');document.documentElement.style.overflow='';if(last&&last.focus)last.focus();}}function nm(f){var n=f.parentNode.querySelector('.t2-plan-name');return n?n.textContent.trim():'Floor plan';}function open(f){if(!m){m=document.createElement('div');m.className='t2-pz';m.setAttribute('role','dialog');m.setAttribute('aria-modal','true');m.innerHTML='<div class="t2-pz-box"><b></b><button type="button" class="t2-pz-x" aria-label="Close floor plan">\u00d7</button><img alt=""></div>';document.body.appendChild(m);im=m.querySelector('img');h=m.querySelector('b');m.addEventListener('click',function(e){if(e.target===m||e.target.closest('.t2-pz-x'))close();});}var i=f.querySelector('img');if(!i)return;im.src=i.getAttribute('src');im.alt=i.alt;h.textContent=nm(f);last=document.activeElement;m.classList.add('on');document.documentElement.style.overflow='hidden';m.querySelector('.t2-pz-x').focus();}document.querySelectorAll('div.t2-plan>.t2-plan-fig').forEach(function(f){f.setAttribute('tabindex','0');f.setAttribute('role','button');f.setAttribute('aria-label','Enlarge '+nm(f)+' floor plan');f.insertAdjacentHTML('beforeend','<span class="t2-pz-b" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7"/></svg></span>');f.addEventListener('click',function(){open(f);});f.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open(f);}});});addEventListener('keydown',function(e){if(e.key==='Escape')close();});})();
}catch(e){console.error(e);}
try{!function(){var T=window.T2||{},p=String(T.path||'/apartments').split('#')[0],A=p+'#availability';function run(){var here=location.pathname.replace(/\/$/,'')===p;[].forEach.call(document.querySelectorAll('a[href]'),function(l){var h=l.getAttribute('href')||'',b=h.split('#')[0],t=(l.textContent||'').toLowerCase();if(b!==p&&!(here&&h==='#availability'))return;if(/\bapply\b|availab/.test(t))l.setAttribute('href',here?'#availability':A);else if(b===p&&h!==p&&h!==p+'#fees')l.setAttribute('href',p)})}run();document.addEventListener('DOMContentLoaded',run);addEventListener('load',function(){setTimeout(run,0)})}();
}catch(e){console.error(e);}
try{(function(){var av=D.getElementById('availability'),fd=D.getElementById('or3d');if(D.getElementById('fees')||!av&&!fd)return;
var T=W.T2||{},F=T.fees||{},O='Optional',pop=!av;
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
var UT={'included':'The utility is paid by the property and included in your rent. No separate charge.','paid to provider':'You set up an account in your name and pay the utility company directly. No charge from us.','flat rate':'A fixed monthly charge for the utility that stays the same each month.','rubs':'Your share of the property\'s utility bill, divided among residents by a set formula. The amount can change month to month.','lifestyle fee':'One simple monthly fee that can include internet, water/sewer, trash, pest control and amenity access. What\'s included varies by property.'};
var ut=F.utilities||'[Airtable]';
var cards=[['Every month',[['rent','Rent',pop?'Shown for each apartment':'<a href="#availability">See availability</a>',''],
['rbp','Resident Benefits Package','$20–$60','Bundles a package of resident services and benefits into one monthly charge. Based on credit tier: $20, $50 or $60 a month.'],
['ltl','Liability to Landlord Insurance','$16','Required liability-only coverage with a $0 deductible that protects the property owner from accidental damage to your home, such as fire, flood or injury. It does not cover your belongings, so we recommend carrying your own renters insurance too.'],
['utilities','Utilities',ut,UT[String(ut).toLowerCase()]||''],
['petRent','Pet rent','$45 per pet','Monthly charge for each authorized cat or dog. No pet rent is charged for other animal types.',O],
['parking','Parking',null,'Reserved, covered, carport or underground parking, where available. Open surface parking is always free. Types and prices vary.',O],
['garage','Garage',null,'Attached, detached or off-site garages, where available. Prices vary by garage type.',O],
['storage','Storage',null,'Extra storage units, where available. Prices vary by unit size.',O]].concat((F.optional||[]).map(function(o){return [null,o.name,o.value,o.desc||'',O];}))],
['To apply and move in',[['appFee','Application fee','$69 per applicant','Covers processing your rental application, including background and credit checks. Non-refundable.'],
['holding','Holding fee','$500','Holds your home once you\'re approved. After move-in, it transfers to your security deposit, which may be applied to amounts owed at move-out and is refunded per your lease terms. Approved residents may use a $500 Jetty deposit bond instead of paying cash.'],
['docSetup','Documentation Setup Fee','$200','Covers preparing your lease documents and setting up your resident account.'],
['service','Service fee','$150–$350','One-time, non-refundable fee based on the number of carpeted rooms in your home: up to 2 rooms $150, 3–4 rooms $250, 5 or more rooms $350.'],
['petFee','Pet fee','$380 per home','One-time fee to move in with an authorized pet: $380 per home for cats and dogs. For other animals it is $190 per pet, up to $380 per home.',O]]]];
function grid(){var n=0,h='<div class="t2-fees-grid">';
cards.forEach(function(c){var rows='';c[1].forEach(function(r){var k=r[0],val=k&&F[k]!=null?F[k]:r[2];if(val===false||val==null)return;
var nm=k&&F[k+'Name']||r[1],d=k&&F[k+'Desc']!=null?F[k+'Desc']:r[3],id='t2fee'+(n++),tag=r[4]?' <span class="t2-fee-tag">'+r[4]+'</span>':'';
rows+='<li class="t2-fee">'+(d?'<button type="button" class="t2-fee-row" aria-expanded="false" aria-controls="'+id+'">':'<div class="t2-fee-row">')+'<span class="t2-fee-n">'+esc(nm)+tag+'</span><span class="t2-fee-v">'+(k==='rent'&&F.rent==null?val:esc(val))+'</span>'+(d?'</button><p class="t2-fee-d" id="'+id+'" hidden>'+esc(d)+'</p>':'</div>')+'</li>';});
if(rows)h+='<div class="t2-fee-card"><h3 class="t2-fee-h">'+c[0]+'</h3><ul class="t2-fee-list">'+rows+'</ul></div>';});
return h+'</div><p class="t2-fees-note">Fees current as of '+esc(F.asOf||'November 2026')+'. Fees may vary by state; your lease has the terms that apply to you.</p>';}
function tog(e){var b=e.target.closest('button.t2-fee-row');if(!b)return;var o=b.getAttribute('aria-expanded')!=='true';b.setAttribute('aria-expanded',o?'true':'false');D.getElementById(b.getAttribute('aria-controls')).hidden=!o;}
if(!pop){var s=D.createElement('section');s.id='fees';s.className='t2-sec t2-fees';s.setAttribute('aria-labelledby','t2FeesH');s.innerHTML='<div class="t2-wrap"><div class="t2-head is-tight"><div class="t2-head-copy"><h2 class="t2-h2" id="t2FeesH">What You\'ll Pay</h2><p class="t2-lead">Rent varies by apartment and is shown live in Available Apartments above. Everything else is listed here, so there are no surprises.</p></div></div>'+grid()+'</div>';av.parentNode.insertBefore(s,av.nextSibling);
s.addEventListener('click',tog);if(location.hash==='#fees')setTimeout(function(){s.scrollIntoView();},0);return;}
var m,last;function close(){if(!m||!m.classList.contains('on'))return;m.classList.remove('on');D.documentElement.style.overflow='';if(last&&last.focus)last.focus();}
function open(){if(!m){m=D.createElement('div');m.className='t2-tm t2-fpop';m.setAttribute('role','dialog');m.setAttribute('aria-modal','true');m.setAttribute('aria-labelledby','t2FpopH');
m.innerHTML='<div class="t2-tm-box t2-fpop-box"><div class="t2-tm-head"><b id="t2FpopH">What You\'ll Pay</b><button type="button" class="t2-tm-x" aria-label="Close fees">\u00d7</button></div><div class="t2-fpop-body"><p class="t2-lead">Rent varies by apartment and is shown for each one in the finder. Everything else is listed here, so there are no surprises.</p>'+grid()+'</div></div>';
D.body.appendChild(m);m.addEventListener('click',function(e){if(e.target===m||e.target.closest('.t2-tm-x'))close();else tog(e);});}
last=D.activeElement;m.classList.add('on');D.documentElement.style.overflow='hidden';m.querySelector('.t2-tm-x').focus();}
W.t2Fees=open;addEventListener('keydown',function(e){if(e.key==='Escape')close();});
D.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('[data-t2-fees],a[href$="#fees"]');if(!a)return;e.preventDefault();open();});
if(location.hash==='#fees')setTimeout(open,300);})();
}catch(e){console.error(e);}
try{(function(){if(!D.querySelector('.faq-div'))return;var T=W.T2||{},p=String(T.path||'/apartments').split('#')[0];
var L=[[/resident benefits package|security deposit|pet fees/i,'See every fee',p+'#fees'],[/move-in special|how do i apply/i,'See available apartments',p+'#availability'],[/schedule a tour/i,'Schedule a tour','/contact'],[/contact the leasing office/i,'Contact us','/contact']];
[].forEach.call(D.querySelectorAll('.faq-div .faq-dropdown'),function(d){var q=d.querySelector('.faq-dropdown-toggle .faq-text'),a=d.querySelector('.faq-text.answer');if(!q||!a||a.querySelector('.t2-faq-link'))return;
for(var i=0;i<L.length;i++){if(L[i][0].test(q.textContent)){var l=D.createElement('a');l.className='t2-faq-link';l.href=L[i][2];l.textContent=L[i][1]+' →';a.appendChild(D.createTextNode(' '));a.appendChild(l);break;}}});})();
}catch(e){console.error(e);}
try{(function(){var P=W.T2&&T2.map&&T2.map.pois;if(!P||!D.querySelector('.t2-poi-item'))return;
function key(s){return String(s).toLowerCase().replace(/[‘’]/g,"'").replace(/\s+/g,' ').trim();}
var K={};for(var n in P)if(P.hasOwnProperty(n))K[key(n)]=P[n];
function hook(map,box){if(!box.closest||!box.closest('.t2-phero-map')||box.t2pois)return;box.t2pois=1;var b=new mapboxgl.LngLatBounds();b.extend(map.getCenter());var any=0;
[].forEach.call(D.querySelectorAll('.t2-poi-item'),function(li){var sp=li.querySelector('span')||li,nm=(sp.textContent||'').trim(),ll=K[key(nm)];if(!ll)return;any=1;b.extend(ll);
var el=D.createElement('div');el.className='t2-pmk';el.innerHTML='<span class="t2-pmk-dot"></span><span class="t2-pmk-l"></span>';el.querySelector('.t2-pmk-l').textContent=nm;el.setAttribute('aria-hidden','true');
new mapboxgl.Marker({element:el}).setLngLat(ll).addTo(map);li.classList.add('has-pin');if(!li.hasAttribute('tabindex'))li.tabIndex=0;
function on(){el.classList.add('on');li.classList.add('is-hl');}function off(){el.classList.remove('on');li.classList.remove('is-hl');}
el.addEventListener('mouseenter',on);el.addEventListener('mouseleave',off);li.addEventListener('mouseenter',on);li.addEventListener('mouseleave',off);li.addEventListener('focus',on);li.addEventListener('blur',off);
li.addEventListener('click',function(){var o=el.classList.contains('on');[].forEach.call(D.querySelectorAll('.t2-pmk.on,.t2-poi-item.is-hl'),function(x){x.classList.remove('on','is-hl');});if(!o)on();});});
if(any)map.fitBounds(b,{padding:{top:70,bottom:50,left:50,right:50},maxZoom:15,duration:0});}
D.addEventListener('t2:map',function(e){hook(e.detail.map,e.detail.box);});
[].forEach.call(D.querySelectorAll('.t2-mbx'),function(x){if(x.t2map)hook(x.t2map,x);});})();
}catch(e){console.error(e);}
}
if(D.readyState==='loading')D.addEventListener('DOMContentLoaded',run);else run();
})();
