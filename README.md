# CIUDIX — Centro comercial digital

Prototipo frontend de CIUDIX: un pasillo comercial digital interactivo con vitrinas de muestra, búsqueda por texto, categorías, fichas de tiendas y CTA comercial por WhatsApp.

## Estructura

- `index.html`: estructura de la experiencia.
- `css/style.css`: identidad visual futurista, diseño responsive y pasillo en perspectiva.
- `js/app.js`: navegación del pasillo, búsqueda, filtros, vitrinas, favoritos y modales.
- `assets/ciudix-logo.png`: logo usado por el sitio.

## Cómo probarlo

Abre `index.html` en un navegador moderno. Para publicar, sube toda la carpeta `ciudix-web` conservando sus rutas relativas. Las imágenes de las vitrinas usan URLs de Unsplash y Google Fonts se carga desde su CDN, por lo que se requiere internet para ver esos recursos externos.

## Interacciones

- Escritorio: flechas izquierda/derecha del pasillo o teclado `←` y `→` (también A/D).
- Móvil: botones laterales o deslizar el pasillo.
- Buscar por nombre, categoría, tipo de negocio, descripción o producto de muestra.
- Seleccionar categoría para filtrar las vitrinas; los resultados aparecen debajo del buscador y las categorías.
- Abrir una vitrina para ver descripción y productos ilustrativos.
- Los CTA de contacto y de interés comercial abren WhatsApp al número configurado: `+57 318 447 2253`.
- Los logos de Facebook, Instagram y TikTok se muestran como próximos a activarse; no apuntan a perfiles porque aún no han sido creados.

## Importante antes de publicar

Este sitio es un prototipo frontend. Los negocios, productos, calificaciones, precios y horarios son demostrativos; no son un catálogo real ni se guardan en una base de datos. Antes del lanzamiento comercial, reemplaza los datos de ejemplo y conecta un backend, panel de administración, autenticación, altas de negocios, pagos/suscripciones y analítica. Revisa también que los textos legales y las políticas de privacidad estén completos.

## Mejoras de esta versión

- El pasillo tiene más altura y margen superior para que las vitrinas y el indicador «ENTRAR» no queden cortados.
- El bloque de acciones del encabezado tiene su propio espacio y ya no se superpone con el enlace de búsqueda.
- Al escribir se filtran las vitrinas y el pasillo centra la primera coincidencia; al enviar la búsqueda, elegir una sugerencia o categoría, la página desplaza automáticamente al visitante hacia los resultados.
- Nueva sección de planes: Vitrina Esencial, Vitrina Pro y Vitrina Premium. Los planes describen construcción de marca, catálogo, promociones, agendamiento, actualizaciones y visibilidad. Los precios se cotizan por WhatsApp porque aún no se han definido tarifas comerciales.
- Se reforzó el mensaje de valor para los negocios: CIUDIX construye, mantiene y actualiza su presencia digital.
