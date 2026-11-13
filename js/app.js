(() => {
  'use strict';
  const image = (id, w=900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
  const stores = [
    {id:1,name:'Modo Urbano',category:'Moda',type:'Moda y accesorios',description:'Prendas, calzado y accesorios para expresar tu estilo todos los días.',rating:'4.9',location:'Pasillo central · Vitrina 01',hours:'Horario por confirmar',accent:'#ff4db8',glow:'#ff4db8',photo:image('photo-1441986300917-64674bd600d8'),badge:'EN TENDENCIA',products:[['Chaqueta urbana','$129.900','photo-1551028719-00167b16eac5'],['Sneakers clásicos','$189.000','photo-1542291026-7eec264c27ff'],['Bolso esencial','$79.900','photo-1548036328-c9fa89d128fa']]},
    {id:2,name:'La Esquina',category:'Comida',type:'Restaurante y sabores',description:'Sabores que sorprenden, platos para compartir y un lugar para volver.',rating:'4.8',location:'Pasillo gastronómico · Vitrina 02',hours:'Horario por confirmar',accent:'#ff9d35',glow:'#ff9d35',photo:image('photo-1555396273-367ea4eb4db5'),badge:'PARA ANTOJARSE',products:[['Hamburguesa de la casa','$28.000','photo-1568901346375-23c9450c58cd'],['Pizza artesanal','$32.000','photo-1513104890138-7c749659a591'],['Combo para compartir','$49.900','photo-1517248135467-4c7edcad34c4']]},
    {id:3,name:'Verde Vivo',category:'Hogar',type:'Hogar y decoración',description:'Detalles, plantas y objetos que hacen que cada espacio se sienta tuyo.',rating:'4.9',location:'Pasillo diseño · Vitrina 03',hours:'Horario por confirmar',accent:'#50d6a3',glow:'#50d6a3',photo:image('photo-1494438639946-1ebd1d20bf85'),badge:'IDEAS PARA TU HOGAR',products:[['Planta de interior','$39.900','photo-1501004318641-b39e6451bec6'],['Maceta artesanal','$34.000','photo-1485955900006-10f4d324d411'],['Lámpara decorativa','$89.900','photo-1507473885765-e6ed057f782c']]},
    {id:4,name:'Brilla Studio',category:'Belleza',type:'Belleza y cuidado personal',description:'Un espacio para consentirte, renovar tu estilo y descubrir nuevas rutinas.',rating:'4.7',location:'Pasillo bienestar · Vitrina 04',hours:'Horario por confirmar',accent:'#e88bff',glow:'#e88bff',photo:image('photo-1522335789203-aabd1fc54bc9'),badge:'TU MOMENTO',products:[['Kit de cuidado','$65.000','photo-1608248543803-ba4f8c70ae0b'],['Fragancia floral','$98.000','photo-1594035910387-fea47794261f'],['Set de belleza','$54.900','photo-1596462502278-27bfdc403348']]},
    {id:5,name:'Tecno Punto',category:'Servicios',type:'Tecnología y accesorios',description:'Accesorios, soluciones tecnológicas y pequeños grandes aliados para tu día.',rating:'4.8',location:'Pasillo innovación · Vitrina 05',hours:'Horario por confirmar',accent:'#41d9f2',glow:'#41d9f2',photo:image('photo-1498049794561-7780e7231661'),badge:'MODO TECNO',products:[['Audífonos inalámbricos','$119.000','photo-1505740420928-5e560c06d30e'],['Reloj inteligente','$159.900','photo-1523275335684-37898b6baf30'],['Accesorios móviles','$29.900','photo-1511707171634-5f897ff02aa9']]},
    {id:6,name:'Café Aurora',category:'Comida',type:'Café de especialidad',description:'Café, conversación y una pausa deliciosa para recargar el día.',rating:'5.0',location:'Pasillo gastronómico · Vitrina 06',hours:'Horario por confirmar',accent:'#ffc35c',glow:'#ffc35c',photo:image('photo-1501339847302-ac426a4a7cbb'),badge:'FAVORITO DEL DÍA',products:[['Café de origen','$8.500','photo-1442512595331-e89e73853f31'],['Croissant artesanal','$7.000','photo-1555507036-ab1f4038808a'],['Latte de la casa','$10.000','photo-1461023058943-07fcbe16d735']]},
    {id:7,name:'Casa Bonita',category:'Hogar',type:'Decoración y regalos',description:'Regalos con intención y detalles que convierten una casa en hogar.',rating:'4.8',location:'Pasillo diseño · Vitrina 07',hours:'Horario por confirmar',accent:'#ff7b83',glow:'#ff7b83',photo:image('photo-1600210492486-724fe5c67fb0'),badge:'DETALLES ÚNICOS',products:[['Vela aromática','$25.000','photo-1603006905003-be475563bc59'],['Jarrón decorativo','$46.000','photo-1578749556568-bc2c40e68b61'],['Cojín de diseño','$39.000','photo-1584100936595-c0654b55a2e2']]},
    {id:8,name:'Plan de Hoy',category:'Experiencias',type:'Planes y experiencias',description:'Encuentra actividades, eventos y nuevos planes para salir de la rutina.',rating:'4.9',location:'Zona experiencias · Vitrina 08',hours:'Agenda por confirmar',accent:'#7f87ff',glow:'#7f87ff',photo:image('photo-1492684223066-81342ee5ff30'),badge:'ARMA TU PLAN',products:[['Plan en pareja','Desde $65.000','photo-1511795409834-ef04bbd61622'],['Experiencia gourmet','Desde $45.000','photo-1414235077428-338989a2e8c0'],['Entradas a eventos','Desde $25.000','photo-1501386761578-eac5c94b800a']]}
  ];
  const $ = id => document.getElementById(id);
  const storeWorld = $('storeWorld');
  const WHATSAPP = '573184472253';
  let current = 0, hasStarted = false, toastTimer;
  const favorites = new Set();
  let filteredStores = [...stores];
  const getStoreImage = store => store.photo;
  const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('es');
  function renderWalkway() {
    storeWorld.innerHTML = '';
    stores.forEach((store,index) => {
      const el = document.createElement('button'); el.type='button'; el.className='shop'; el.dataset.index=index;
      el.setAttribute('aria-label',`Seleccionar vitrina ${store.name}`);
      el.innerHTML = `<span class="enter-hint">ENTRAR ↗</span><div class="shop-frame"></div><div class="shop-face"><div class="shop-photo" style="background-image:url('${getStoreImage(store)}')"></div><div class="neon-sign" style="--glow:${store.glow}">${escapeHtml(store.name)}</div><div class="shop-awning" style="--accent:${store.accent}"></div><div class="shop-entrance" style="--glow:${store.glow}"></div><span class="shop-plants">✦</span><span class="shop-plants right">✧</span><div class="shop-label"><small>${escapeHtml(store.category)} · CIUDIX</small><strong>${escapeHtml(store.name)}</strong><span>${escapeHtml(store.type)}</span></div></div>`;
      el.addEventListener('click',()=>{if(index!==current){current=index;updateWalkway();}else openStore(store);});
      storeWorld.appendChild(el);
    });
    updateWalkway();
  }
  function updateWalkway() {
    if(!storeWorld.children.length)return;
    const frame=$('gameFrame'), width=frame.clientWidth||window.innerWidth, mobile=width<600;
    const spacing=mobile?Math.min(160,width*.44):Math.min(320,width*.225);
    [...storeWorld.children].forEach((el,index)=>{
      let delta=index-current;
      // Wrap indices to keep the walkway moving continuously in both directions.
      if(delta>stores.length/2)delta-=stores.length;
      if(delta<-stores.length/2)delta+=stores.length;
      const distance=Math.abs(delta), visible=distance<=(mobile?2:3);
      const scale=delta===0?(mobile?.98:1.24):Math.max(.48,(mobile?.78:.9)-distance*(mobile?.12:.12));
      const x=delta*spacing, lift=distance===0?-5:Math.min(42,distance*9);
      el.style.setProperty('--x',`${x}px`);el.style.setProperty('--scale',scale);el.style.setProperty('--lift',`${lift}px`);
      el.style.zIndex=String(30-distance);el.style.opacity=visible?(distance>2?.23:distance===2?.58:1):0;el.style.pointerEvents=visible?'auto':'none';el.style.setProperty('--angle',delta===0?'0deg':delta<0?'5deg':'-5deg');
      el.classList.toggle('is-current',delta===0);el.setAttribute('aria-pressed',delta===0?'true':'false');
    });
    const store=stores[current];$('currentStoreName').textContent=store.name;$('progressLabel').textContent=`${String(current+1).padStart(2,'0')} / ${String(stores.length).padStart(2,'0')}`;$('progressBar').style.width=`${((current+1)/stores.length)*100}%`;
    if(hasStarted)$('walkStartOverlay').classList.add('hidden');
  }
  function move(amount){hasStarted=true;$('walkStartOverlay').classList.add('hidden');current=(current+amount+stores.length)%stores.length;updateWalkway();}
  function beginWalk(){hasStarted=true;$('walkStartOverlay').classList.add('hidden');$('gameFrame').focus({preventScroll:true});}
  function showToast(message){const el=$('toast');el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),3000);}
  function renderGrid(list=filteredStores){
    const grid=$('storeGrid');grid.innerHTML='';$('resultCount').textContent=String(list.length).padStart(2,'0');
    if(!list.length){grid.innerHTML='<div class="no-results">No encontramos esa búsqueda todavía. Prueba con otra palabra o selecciona otra categoría.</div>';return;}
    list.forEach(store=>{
      const card=document.createElement('article');card.className='store-card';card.tabIndex=0;card.setAttribute('role','button');card.setAttribute('aria-label',`Abrir vitrina ${store.name}`);
      card.innerHTML=`<div class="card-image" style="background-image:url('${getStoreImage(store)}')"><span class="card-badge">${escapeHtml(store.badge)}</span><button class="card-favorite ${favorites.has(store.id)?'active':''}" aria-label="${favorites.has(store.id)?'Quitar de favoritos':'Guardar favorito'}" data-favorite="${store.id}">${favorites.has(store.id)?'♥':'♡'}</button></div><div class="card-body"><div class="card-topline"><h3>${escapeHtml(store.name)}</h3><span class="rating">★ <b>${store.rating}</b></span></div><p>${escapeHtml(store.description)}</p><div class="card-footer"><span>${escapeHtml(store.category)} · Vitrina</span><button type="button" data-open-store="${store.id}">Descubrir ↗</button></div></div>`;
      card.addEventListener('click',e=>{if(e.target.closest('[data-favorite]')){e.stopPropagation();toggleFavorite(store.id);return;}openStore(store);});card.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target===card)openStore(store);});grid.appendChild(card);
    });
  }
  function toggleFavorite(id){favorites.has(id)?favorites.delete(id):favorites.add(id);renderGrid(filteredStores);showToast(favorites.has(id)?'Vitrina guardada en tus favoritos ♥':'Vitrina eliminada de tus favoritos');}
  function scrollToResults(){const target=$('resultsHeading')||$('storeGrid');if(target)target.scrollIntoView({behavior:'smooth',block:'start'});}
  // Búsqueda tolerante: ignora tildes, admite palabras en cualquier orden y contempla sinónimos comunes.
  const searchSynonyms = {
    cafe:['cafeteria','cafetería','bebida','bebidas','croissant','latte'],
    comida:['restaurante','restaurantes','almuerzo','hamburguesa','pizza','cafe','cafeteria','gastronomia'],
    moda:['ropa','vestuario','tenis','zapatos','calzado','sneakers','chaqueta','bolso','accesorios'],
    hogar:['decoracion','decoración','casa','plantas','maceta','lampara','regalos','vela','jarron'],
    belleza:['cosmeticos','cosméticos','maquillaje','cuidado','perfume','fragancia','estetica','estética'],
    tecnologia:['tecnología','tecnologia','tech','celular','movil','móvil','audifonos','audífonos','reloj','accesorios'],
    servicios:['tecnologia','tecnología','celular','reparacion','reparación','accesorios'],
    experiencias:['planes','eventos','turismo','actividades','entradas','pareja','gourmet'],
    regalos:['hogar','decoracion','decoración','vela','jarron','detalle','detalles']
  };
  function searchTermsFor(term){
    const normalized=normalize(term).replace(/[^a-z0-9\s]/g,' ').trim();
    if(!normalized)return [];
    const terms=normalized.split(/\s+/).filter(Boolean);
    return terms.map(word=>({word, alternatives:[word,...(searchSynonyms[word]||[]).map(normalize)]}));
  }
  function matchesStore(store, query, category){
    const categoryMatch=category==='Todas'||store.category===category;
    const haystack=normalize(`${store.name} ${store.category} ${store.type} ${store.description} ${store.location} ${store.badge} ${store.products.map(p=>p[0]).join(' ')} ${store.products.map(p=>p[1]).join(' ')}`);
    const terms=searchTermsFor(query);
    const textMatch=terms.every(term=>term.alternatives.some(word=>haystack.includes(word)));
    return categoryMatch&&textMatch;
  }
  function updateSearchResults({scroll=false, notify=false}={}){
    const query=$('mainSearch').value.trim();
    // Al escribir una búsqueda nueva, no dejamos una categoría anterior bloqueando resultados.
    if(query){document.querySelectorAll('.category-chip').forEach(btn=>btn.classList.toggle('active',btn.dataset.category==='Todas'));}
    const category=document.querySelector('.category-chip.active')?.dataset.category||'Todas';
    filteredStores=stores.filter(store=>matchesStore(store,query,category));
    renderGrid(filteredStores);
    if(filteredStores.length){current=stores.indexOf(filteredStores[0]);updateWalkway();}
    if(notify&&query&&!filteredStores.length)showToast('No encontramos coincidencias. Prueba con moda, café, regalos, hogar o tecnología.');
    else if(notify&&query)showToast(`${filteredStores.length} ${filteredStores.length===1?'vitrina encontrada':'vitrinas encontradas'}.`);
    if(scroll)scrollToResults();
  }
  function setCategory(category, shouldScroll=true){
    document.querySelectorAll('.category-chip').forEach(btn=>btn.classList.toggle('active',btn.dataset.category===category));
    updateSearchResults({scroll:shouldScroll});
  }
  function searchStores(term, shouldScroll=true){$('mainSearch').value=term;updateSearchResults({scroll:shouldScroll,notify:true});}
  function openStore(store){
    $('modalTitle').textContent=store.name;$('modalDescription').textContent=store.description;$('modalCategory').textContent=`${store.category.toUpperCase()} · ${store.badge}`;$('modalRating').textContent=store.rating;
    $('modalHero').style.backgroundImage=`linear-gradient(0deg,rgba(11,15,39,.1),rgba(11,15,39,.05)),url('${getStoreImage(store)}')`;
    $('modalMeta').innerHTML=`<span>⌖ ${escapeHtml(store.location)}</span><span>◷ ${escapeHtml(store.hours)}</span><span>✦ Vitrina de muestra</span>`;
    $('modalProducts').innerHTML=store.products.map(product=>`<div class="product-mini"><img loading="lazy" src="${image(product[2],400)}" alt="${escapeHtml(product[0])}"><div><b>${escapeHtml(product[0])}</b><small>${escapeHtml(product[1])}</small></div></div>`).join('');
    const message=encodeURIComponent(`Hola CIUDIX, quiero información sobre la vitrina de ${store.name}.`);$('modalContact').href=`https://wa.me/${WHATSAPP}?text=${message}`;
    $('storeModal').classList.add('open');$('storeModal').setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
  }
  function closeStore(){$('storeModal').classList.remove('open');$('storeModal').setAttribute('aria-hidden','true');document.body.style.overflow='';}
  $('startWalk').addEventListener('click',()=>{beginWalk();$('gameFrame').scrollIntoView({behavior:'smooth',block:'center'});});
  $('beginExplore').addEventListener('click',()=>{beginWalk();move(0);});
  $('mobileLeft').addEventListener('click',()=>move(-1));$('mobileRight').addEventListener('click',()=>move(1));$('moveLeft').addEventListener('click',()=>move(-1));$('moveRight').addEventListener('click',()=>move(1));
  $('visitStore')?.addEventListener('click',()=>openStore(stores[current]));
  $('categoryList').addEventListener('click',e=>{const btn=e.target.closest('[data-category]');if(btn)setCategory(btn.dataset.category);});
  $('searchForm').addEventListener('submit',e=>{e.preventDefault();searchStores($('mainSearch').value,true);});
  $('mainSearch').addEventListener('input',()=>updateSearchResults());
  document.querySelectorAll('[data-search]').forEach(btn=>btn.addEventListener('click',()=>searchStores(btn.dataset.search)));
  $('seeAll').addEventListener('click',()=>{$('mainSearch').value='';filteredStores=[...stores];document.querySelectorAll('.category-chip').forEach(btn=>btn.classList.toggle('active',btn.dataset.category==='Todas'));current=0;updateWalkway();renderGrid(filteredStores);});
  document.querySelectorAll('[data-close-modal]').forEach(btn=>btn.addEventListener('click',closeStore));$('storeModal').addEventListener('click',e=>{if(e.target===$('storeModal'))closeStore();});
  $('menuToggle').addEventListener('click',()=>{const nav=$('mainNav'),open=nav.classList.toggle('mobile-open');$('menuToggle').setAttribute('aria-expanded',String(open));$('menuToggle').textContent=open?'×':'☰';});
  $('mainNav').querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{$('mainNav').classList.remove('mobile-open');$('menuToggle').setAttribute('aria-expanded','false');$('menuToggle').textContent='☰';}));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeStore();return;}if($('storeModal').classList.contains('open'))return;if(['ArrowLeft','ArrowRight','a','d','A','D'].includes(e.key)&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){if(e.key==='ArrowLeft'||e.key.toLowerCase()==='a')move(-1);else move(1);}});
  let touchStartX=0;$('gameFrame').addEventListener('touchstart',e=>{touchStartX=e.changedTouches[0].screenX;},{passive:true});$('gameFrame').addEventListener('touchend',e=>{const dx=e.changedTouches[0].screenX-touchStartX;if(Math.abs(dx)>35)move(dx<0?1:-1);},{passive:true});
  window.addEventListener('resize',()=>requestAnimationFrame(updateWalkway));$('year').textContent=new Date().getFullYear();renderWalkway();renderGrid(stores);
})();
