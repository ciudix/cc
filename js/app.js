(() => {
  'use strict';
  const image = (id, w=900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
  const stores = [
    {
      id:1, name:'CookieScape', category:'Repostería', type:'Cortadores y moldes de silicona',
      description:'Dale forma a tu creatividad. Encuentra cortadores para galletas y moldes de silicona con diseños para celebraciones, temporadas y proyectos creativos. Consulta disponibilidad y opciones de envío.',
      rating:'MARCA', location:'Vitrina CIUDIX · Repostería creativa', hours:'Atención y pedidos por WhatsApp',
      accent:'#ff75b8', glow:'#ff75b8', photo:'assets/cookiescape-vitrina.jpg', badge:'CREATIVIDAD EN CADA MOLDE',
      products:[['Cortadores de galletas','Diseños y formas para crear','photo-1519869325930-281384150729'],['Moldes de silicona','Formas para tus preparaciones','photo-1556909114-f6e7ad7d3136'],['Diseños temáticos','Opciones para cada ocasión','photo-1499636136210-6f4ee915583e']]
    },
    {
      id:2, name:'Creation · DJ Edgar', category:'Eventos', type:'DJ, sonido, iluminación y animación',
      description:'Creation Disco Móvil convierte cada celebración en una experiencia. Servicio de DJ profesional, sonido, iluminación y animación para eventos sociales y empresariales.',
      rating:'MARCA', location:'Vitrina CIUDIX · Música y eventos', hours:'Fechas y disponibilidad por consultar',
      accent:'#f6b943', glow:'#f6b943', photo:'assets/creation-dj-edgar.jpg', badge:'TU EVENTO MERECE EXPERIENCIA',
      products:[['DJ profesional','Música y mezcla para tu evento','photo-1571266028243-d220c9c3b6c8'],['Sonido e iluminación','Equipo para ambientar tu celebración','photo-1470229722913-7c0e2dbbafd3'],['Animación y hora loca','Momentos para encender la fiesta','photo-1506157786151-b8491531f063']]
    },
    {
      id:3, name:'Muebles El Madero', category:'Hogar', type:'Muebles, colchones y bases cama',
      description:'Encuentra opciones para amoblar y renovar tus espacios. Muebles para el hogar, colchones y bases cama. Consulta modelos, medidas, disponibilidad y alternativas de compra.',
      rating:'MARCA', location:'Vitrina CIUDIX · Hogar y descanso', hours:'Asesoría y disponibilidad por consultar',
      accent:'#d7a36a', glow:'#d7a36a', photo:image('photo-1555041469-a586c61ea9bc'), badge:'RENUEVA TUS ESPACIOS',
      products:[['Muebles para el hogar','Opciones para tus espacios','photo-1555041469-a586c61ea9bc'],['Colchones','Alternativas para tu descanso','photo-1631049307264-da0ec9d70304'],['Bases cama','Complementos para tu habitación','photo-1505693416388-ac5ce068fe85']]
    },
    {
      id:4, name:'La Casa del Ebanista', category:'Hogar', type:'Muebles, colchones y bases cama',
      description:'Un espacio para descubrir muebles, colchones y bases cama para el hogar. Explora alternativas y solicita información sobre referencias, medidas y disponibilidad.',
      rating:'MARCA', location:'Vitrina CIUDIX · Muebles y descanso', hours:'Asesoría y disponibilidad por consultar',
      accent:'#54c6bb', glow:'#54c6bb', photo:image('photo-1600210492486-724fe5c67fb0'), badge:'IDEAS PARA TU HOGAR',
      products:[['Muebles','Alternativas para diferentes ambientes','photo-1600210492486-724fe5c67fb0'],['Colchones','Opciones para tu descanso','photo-1631049307264-da0ec9d70304'],['Bases cama','Consulta estilos y medidas','photo-1505693416388-ac5ce068fe85']]
    }
    ,{
      id:5, name:'Sazón de Casa', category:'Restaurantes', type:'Restaurante · comida casera',
      description:'Una vitrina de demostración para descubrir platos del día, almuerzos, bebidas y sabores para compartir. Consulta menú, horarios y disponibilidad.',
      rating:'DEMO', location:'Vitrina demostrativa CIUDIX · Gastronomía', hours:'Menú y horarios ilustrativos · consultar',
      accent:'#ff9b45', glow:'#ff9b45', photo:image('photo-1414235077428-338989a2e8c0'), badge:'SABOR PARA COMPARTIR',
      products:[['Menú del día','Almuerzos y platos caseros','photo-1547592180-85f173990554'],['Hamburguesas','Opciones para disfrutar','photo-1568901346375-23c9450c58cd'],['Bebidas y postres','El complemento perfecto','photo-1499636136210-6f4ee915583e']]
    },
    {
      id:6, name:'Todo a Diez Mil', category:'Tiendas', type:'Almacén · variedad y economía',
      description:'Un almacén de demostración con artículos prácticos para el hogar, accesorios, detalles y productos de uso diario. Una vitrina para encontrar variedad a precios económicos.',
      rating:'DEMO', location:'Vitrina demostrativa CIUDIX · Variedades', hours:'Referencias y precios ilustrativos',
      accent:'#ffd34e', glow:'#ffd34e', photo:image('photo-1607082349566-187342175e2f'), badge:'MUCHO POR DESCUBRIR',
      products:[['Accesorios','Detalles para todos los días','photo-1523275335684-37898b6baf30'],['Hogar','Artículos prácticos y decorativos','photo-1600210492486-724fe5c67fb0'],['Papelería y detalles','Ideas útiles para regalar','photo-1455390582262-044cdead277a']]
    },
    {
      id:7, name:'TecnoPunto', category:'Tecnología', type:'Tecnología · accesorios y equipos',
      description:'Tienda tecnológica de demostración con accesorios para celulares y computadores, periféricos, audio y soluciones para el día a día. Consulta referencias y compatibilidad.',
      rating:'DEMO', location:'Vitrina demostrativa CIUDIX · Tecnología', hours:'Productos y disponibilidad ilustrativos',
      accent:'#38bdf8', glow:'#38bdf8', photo:image('photo-1519389950473-47ba0277781c'), badge:'TECNOLOGÍA A TU ALCANCE',
      products:[['Accesorios móviles','Cargadores, cables y soportes','photo-1605236453806-6ff36851218e'],['Audio','Audífonos y parlantes','photo-1505740420928-5e560c06d30e'],['Periféricos','Teclados, mouse y más','photo-1587829741301-dc798b83add3']]
    },
    {
      id:8, name:'DUCSOFT Technologies', category:'Tecnología', type:'Desarrollo de software · soluciones digitales',
      description:'Somos parte de CIUDIX. En DUCSOFT Technologies creamos software y soluciones digitales para empresas: desarrollo a la medida, sistemas web, automatización de procesos e integración tecnológica.',
      rating:'MARCA PROPIA', location:'Vitrina CIUDIX · Tecnología y software', hours:'Asesoría y proyectos por agendar',
      accent:'#2495ee', glow:'#2495ee', photo:'assets/ducsoft-logo.png', badge:'CREAMOS SOLUCIONES DIGITALES',
      products:[['Software a la medida','Aplicaciones adaptadas a tu negocio','photo-1555066931-4365d14bab8c'],['Sistemas web','Plataformas y portales empresariales','photo-1498050108023-c5249f4df085'],['Automatización e integración','Conecta procesos y herramientas','photo-1518770660439-4636190af475']]
    }
  ];
  const demoBrands = [
    ['Electricolombia','Eléctricos','Material eléctrico, iluminación y soluciones para el hogar','Instalaciones, iluminación y productos eléctricos para proyectos residenciales y comerciales. Vitrina demostrativa: referencias y disponibilidad por confirmar.','#f5b942','photo-1621905251189-08b45d6a269e','ENERGÍA PARA TUS PROYECTOS','Iluminación LED|Lámparas y bombillos','Material eléctrico|Accesorios y conexiones','Herramientas|Equipos para instalación'],
    ['Textura y Arte Analy','Arte y decoración','Decoración, arte y detalles para transformar espacios','Una vitrina para descubrir piezas decorativas, arte y detalles que aportan personalidad al hogar. Catálogo demostrativo.','#d88bca','photo-1579783902614-a3fb3927b6a5','ARTE QUE INSPIRA','Cuadros y láminas|Arte para tus paredes','Decoración|Objetos para ambientar','Detalles|Regalos con estilo'],
    ['Moda Urbana 21','Moda','Ropa, prendas y accesorios','Moda casual para diferentes estilos y ocasiones. Explora colecciones y consulta tallas y disponibilidad.','#f472b6','photo-1483985988355-763728e1935b','VISTE TU ESTILO','Ropa casual|Prendas para todos los días','Accesorios|Complementa tu look','Novedades|Tendencias de temporada'],
    ['Bella Piel Studio','Belleza','Belleza, cuidado personal y cosmética','Productos y recomendaciones para el cuidado personal y la belleza. Vitrina de demostración.','#e879a8','photo-1522335789203-aabd1fc54bc9','TU MOMENTO DE CUIDADO','Cuidado facial|Rutinas para tu piel','Maquillaje|Color y expresión','Cuidado capilar|Productos para tu cabello'],
    ['Mundo Mascota','Mascotas','Alimentos, accesorios y bienestar para mascotas','Un espacio para encontrar productos y accesorios para consentir a tus compañeros peludos.','#8acb79','photo-1548199973-03cce0bbc87b','TODO PARA TU MASCOTA','Alimento|Opciones para perros y gatos','Accesorios|Collares, juguetes y más','Higiene|Cuidado y bienestar'],
    ['Papel y Color','Papelería','Papelería, útiles escolares y oficina','Útiles escolares, artículos de oficina y detalles creativos para estudiar, trabajar y crear.','#62b8e8','photo-1455390582262-044cdead277a','IDEAS QUE TOMAN FORMA','Útiles escolares|Para aprender y crear','Oficina|Organiza tu trabajo','Arte y manualidades|Materiales creativos'],
    ['Sport Zone Boyacá','Deportes','Ropa, accesorios y artículos deportivos','Artículos para acompañar tus entrenamientos y actividades al aire libre. Catálogo ilustrativo.','#5ac9a5','photo-1461896836934-ffe607ba8211','ACTIVA TU ENERGÍA','Entrenamiento|Accesorios fitness','Ropa deportiva|Comodidad en movimiento','Accesorios|Complementos deportivos'],
    ['FerreHogar','Ferretería','Ferretería, herramientas y hogar','Soluciones y herramientas para reparaciones, remodelaciones y proyectos del hogar.','#e6a34a','photo-1581147036324-c1c89c2c8a0b','SOLUCIONES PARA TU PROYECTO','Herramientas|Equipos manuales','Pinturas|Color y renovación','Plomería|Accesorios y repuestos'],
    ['PequeMundo','Juguetería','Juguetes, juegos y regalos','Juegos y detalles para regalar, aprender y compartir en familia. Vitrina demostrativa.','#f4c84e','photo-1607082349566-187342175e2f','DIVERSIÓN PARA CRECER','Juegos didácticos|Aprender jugando','Juguetes|Diversión para todas las edades','Regalos|Detalles especiales'],
    ['Paso Firme','Calzado','Calzado para toda la familia','Opciones de calzado casual y para diferentes ocasiones. Consulta estilos y tallas disponibles.','#9b8af4','photo-1542291026-7eec264c27ff','CAMINA A TU MANERA','Calzado casual|Comodidad diaria','Deportivo|Muévete con libertad','Accesorios|Cuidado del calzado'],
    ['Conecta Accesorios','Accesorios','Accesorios personales y complementos','Complementos para tu estilo: bolsos, relojes, gafas y accesorios de uso diario.','#55c4d8','photo-1523275335684-37898b6baf30','LOS DETALLES CUENTAN','Relojes|Estilo y funcionalidad','Bolsos|Lleva lo que necesitas','Accesorios|Pequeños grandes detalles'],
    ['Café La Terraza','Cafeterías','Café, bebidas y momentos para compartir','Un rincón de demostración para disfrutar café, bebidas calientes y acompañamientos.','#bd8b5c','photo-1495474472287-4d71bcdd2085','UNA PAUSA CON SABOR','Café|Aromas para disfrutar','Bebidas|Opciones frías y calientes','Repostería|Algo para acompañar'],
    ['Pan del Parque','Panaderías','Panadería, pastelería y productos frescos','Pan recién horneado, pastelería y opciones para compartir. Menú ilustrativo.','#d99b58','photo-1509440159596-0249088772ff','RECIÉN HECHO PARA TI','Panadería|Pan y productos horneados','Pastelería|Dulces momentos','Desayunos|Para comenzar el día'],
    ['Vital Centro','Salud y bienestar','Bienestar, cuidado y productos saludables','Vitrina demostrativa de productos de bienestar y cuidado personal. No ofrece servicios médicos ni diagnósticos.','#63c5a6','photo-1540555700478-4be289fbecef','BIENESTAR COTIDIANO','Cuidado personal|Rutinas de bienestar','Accesorios|Complementos de cuidado','Vida activa|Hábitos saludables'],
    ['Flores de Abril','Floristerías','Flores, arreglos y detalles para regalar','Arreglos florales y detalles para celebrar momentos especiales. Consulta diseños y disponibilidad.','#ee8ab1','photo-1490750967868-88aa4486c946','REGALA EMOCIONES','Ramos|Flores para cada ocasión','Arreglos|Diseños especiales','Detalles|Sorprende a alguien'],
    ['AutoPunto','Automotriz','Accesorios y cuidado para vehículos','Accesorios, productos de cuidado y complementos para tu vehículo. Catálogo demostrativo.','#65a9d8','photo-1486262715619-67b85e0b08d3','CUIDA TU CAMINO','Accesorios|Complementos para tu vehículo','Cuidado|Limpieza y protección','Herramientas|Soluciones prácticas'],
    ['Soluciones Express','Servicios','Servicios para el hogar y asistencia cotidiana','Un espacio demostrativo para encontrar servicios y solicitar información de profesionales locales.','#b19af4','photo-1521737711867-e3b97375f902','SERVICIOS CERCA DE TI','Hogar|Apoyo para tu espacio','Asesorías|Consulta con especialistas','Solicitudes|Cuéntanos qué necesitas']
  ];
  demoBrands.forEach((b,i)=>{
    const [name,category,type,description,accent,photo,badge,...products]=b;
    const safePhoto = image(photo,900);
    stores.push({id:9+i,name,category,type,description,rating:'DEMO',location:`Vitrina demostrativa CIUDIX · ${category}`,hours:'Información y disponibilidad ilustrativas · consultar',accent,glow:accent,photo:safePhoto,badge,products:products.map(item=>{const [title,desc]=item.split('|');return [title,desc,'photo-1607082349566-187342175e2f'];})});
  });
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
      el.innerHTML = `<span class="enter-hint">ENTRAR ↗</span><div class="shop-frame"></div><div class="shop-face"><div class="shop-photo" style="background-image:url('${getStoreImage(store)}')"></div><div class="neon-sign" style="--glow:${store.glow}">${escapeHtml(store.name)}</div><div class="shop-entrance" style="--glow:${store.glow}"></div><span class="shop-plants">✦</span><span class="shop-plants right">✧</span><div class="shop-label"><small>${escapeHtml(store.category)} · CIUDIX</small><strong>${escapeHtml(store.name)}</strong><span>${escapeHtml(store.type)}</span></div></div>`;
      el.addEventListener('click',()=>{if(index!==current){current=index;updateWalkway();}else openStore(store);});
      storeWorld.appendChild(el);
    });
    updateWalkway();
  }
  function updateWalkway() {
    if(!storeWorld.children.length)return;
    const frame=$('gameFrame'), width=frame.clientWidth||window.innerWidth, mobile=width<600;
    const spacing=mobile?Math.min(148,width*.39):Math.min(330,width*.205);
    [...storeWorld.children].forEach((el,index)=>{
      let delta=index-current;
      // Wrap indices to keep the walkway moving continuously in both directions.
      if(delta>stores.length/2)delta-=stores.length;
      if(delta<-stores.length/2)delta+=stores.length;
      const distance=Math.abs(delta), visible=distance<=(mobile?2:3);
      const scale=delta===0?(mobile?.98:1.08):Math.max(.52,(mobile?.78:.94)-distance*(mobile?.12:.10));
      const x=delta*spacing, lift=distance===0?-5:Math.min(30,distance*7);
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
      card.innerHTML=`<div class="card-image" style="background-image:url('${getStoreImage(store)}')"><span class="card-badge">${escapeHtml(store.badge)}</span><button class="card-favorite ${favorites.has(store.id)?'active':''}" aria-label="${favorites.has(store.id)?'Quitar de favoritos':'Guardar favorito'}" data-favorite="${store.id}">${favorites.has(store.id)?'♥':'♡'}</button></div><div class="card-body"><div class="card-topline"><h3>${escapeHtml(store.name)}</h3><span class="rating">${escapeHtml(store.type)}</span></div><p>${escapeHtml(store.description)}</p><div class="card-footer"><span>${escapeHtml(store.category)} · Vitrina</span><button type="button" data-open-store="${store.id}">Descubrir ↗</button></div></div>`;
      card.addEventListener('click',e=>{if(e.target.closest('[data-favorite]')){e.stopPropagation();toggleFavorite(store.id);return;}openStore(store);});card.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target===card)openStore(store);});grid.appendChild(card);
    });
  }
  function toggleFavorite(id){favorites.has(id)?favorites.delete(id):favorites.add(id);renderGrid(filteredStores);showToast(favorites.has(id)?'Vitrina guardada en tus favoritos ♥':'Vitrina eliminada de tus favoritos');}
  function scrollToResults(){const target=$('resultsHeading')||$('storeGrid');if(target)target.scrollIntoView({behavior:'smooth',block:'start'});}
  function matchesStore(store, query, category){const categoryMatch=category==='Todas'||store.category===category;const haystack=normalize(`${store.name} ${store.category} ${store.type} ${store.description} ${store.location} ${store.products.map(p=>p[0]).join(' ')}`);return categoryMatch&&(!query||haystack.includes(query));}
  function setCategory(category, shouldScroll=true){document.querySelectorAll('.category-chip').forEach(btn=>btn.classList.toggle('active',btn.dataset.category===category));const query=normalize($('mainSearch').value.trim());filteredStores=stores.filter(store=>matchesStore(store,query,category));renderGrid(filteredStores);if(filteredStores.length){current=stores.indexOf(filteredStores[0]);updateWalkway();}if(shouldScroll)scrollToResults();}
  function searchStores(term, shouldScroll=true){$('mainSearch').value=term;const query=normalize(term.trim());const activeCategory=document.querySelector('.category-chip.active')?.dataset.category||'Todas';filteredStores=stores.filter(store=>matchesStore(store,query,activeCategory));renderGrid(filteredStores);if(filteredStores.length){current=stores.indexOf(filteredStores[0]);updateWalkway();}if(query&&!filteredStores.length)showToast('No encontramos coincidencias. Prueba con otra búsqueda.');else if(query)showToast(`${filteredStores.length} ${filteredStores.length===1?'vitrina encontrada':'vitrinas encontradas'}. Te llevamos a los resultados.`);if(shouldScroll)scrollToResults();}
  function openStore(store){
    $('modalTitle').textContent=store.name;$('modalDescription').textContent=store.description;$('modalCategory').textContent=`${store.category.toUpperCase()} · ${store.badge}`;$('modalRating').textContent=store.rating;
    $('modalHero').style.backgroundImage=`linear-gradient(0deg,rgba(11,15,39,.1),rgba(11,15,39,.05)),url('${getStoreImage(store)}')`;
    $('modalMeta').innerHTML=`<span>⌖ ${escapeHtml(store.location)}</span><span>◷ ${escapeHtml(store.hours)}</span><span>✦ Marca en CIUDIX</span>`;
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
  $('mainSearch').addEventListener('input',()=>{const category=document.querySelector('.category-chip.active')?.dataset.category||'Todas';filteredStores=stores.filter(store=>matchesStore(store,normalize($('mainSearch').value.trim()),category));renderGrid(filteredStores);if(filteredStores.length){current=stores.indexOf(filteredStores[0]);updateWalkway();}});
  document.querySelectorAll('[data-search]').forEach(btn=>btn.addEventListener('click',()=>searchStores(btn.dataset.search)));
  $('seeAll').addEventListener('click',()=>{$('mainSearch').value='';filteredStores=[...stores];document.querySelectorAll('.category-chip').forEach(btn=>btn.classList.toggle('active',btn.dataset.category==='Todas'));current=0;updateWalkway();renderGrid(filteredStores);});
  document.querySelectorAll('[data-close-modal]').forEach(btn=>btn.addEventListener('click',closeStore));$('storeModal').addEventListener('click',e=>{if(e.target===$('storeModal'))closeStore();});
  $('menuToggle').addEventListener('click',()=>{const nav=$('mainNav'),open=nav.classList.toggle('mobile-open');$('menuToggle').setAttribute('aria-expanded',String(open));$('menuToggle').textContent=open?'×':'☰';});
  $('mainNav').querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{$('mainNav').classList.remove('mobile-open');$('menuToggle').setAttribute('aria-expanded','false');$('menuToggle').textContent='☰';}));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeStore();return;}if($('storeModal').classList.contains('open'))return;if(['ArrowLeft','ArrowRight','a','d','A','D'].includes(e.key)&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){if(e.key==='ArrowLeft'||e.key.toLowerCase()==='a')move(-1);else move(1);}});
  let touchStartX=0;$('gameFrame').addEventListener('touchstart',e=>{touchStartX=e.changedTouches[0].screenX;},{passive:true});$('gameFrame').addEventListener('touchend',e=>{const dx=e.changedTouches[0].screenX-touchStartX;if(Math.abs(dx)>35)move(dx<0?1:-1);},{passive:true});
  window.addEventListener('resize',()=>requestAnimationFrame(updateWalkway));$('year').textContent=new Date().getFullYear();renderWalkway();renderGrid(stores);
})();
