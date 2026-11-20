// =====================================================================
//  DATOS DEL LOCAL
//  Para un local nuevo: copiá la carpeta "plantilla-gastronomia",
//  cambiá SOLO este archivo y subí. index.html no se toca.
// =====================================================================
window.DATOS = {
  nombre: "Six Seven",
  rubro: "Pizzería",
  barrio: "Buceo",
  logo: "67",                       // texto dentro del círculo del logo
  demo: "Demo · fotos ilustrativas",// "" para la versión final (también la muestra en Google)

  colores: {
    brand: "#e63b2e",   // botones y acentos
    deep: "#1c100c",    // fondo oscuro (portada, números, pie)
    light: "#ff8a6b",   // acento claro
    surface: "#f6f1ec", // fondo de secciones claras
    ghost: "#e6dbd1",   // palabras gigantes de fondo
    ink: "#160d0a",     // texto oscuro
    inkSoft: "#7d6e64", // texto secundario
    hairline: "#ece3db",// líneas finas
    caption: "#8a2a1f", // tinte de las etiquetas sobre fotos
  },

  contacto: {
    whatsapp: "59826240217",          // internacional, sin "+"
    telefono: "2624 0217",
    tel: "+59826240217",
    direccion: "Demóstenes 3479, Buceo · Montevideo",
    mapa: "https://www.google.com/maps/search/?api=1&query=Pizzer%C3%ADa+Six+Seven+Dem%C3%B3stenes+3479+Montevideo",
    instagram: "",                    // link completo, o "" para ocultar
  },

  horario: { abre: 11, cierra: 24, texto: "Abre a las 11:00" }, // cierra 24 = medianoche
  funciones: { pedidos: true, reservas: true },

  // ---------- Portada ----------
  portada: {
    titulo: "Pizza de barrio",
    lema: ["Recién salida", "del horno"],
    foto: "",                         // URL de una foto propia; "" = pizza ilustrada
    destacados: ["Six Seven", "Americana", "Canadiense"], // tarjetas que rotan
    nota: { valor: "4.8", texto: "estrellas en Google", plato: "Clásica" },
  },

  // ---------- Carrusel con palabras gigantes ----------
  insignia: { valor: "4.8", texto: "estrellas en Google" },
  presentacion: {
    numero: "#67",
    titulo: "La pizzería del Buceo",
    texto: "Pizzetas, milanesas, megas y pastas. Pedí desde la mesa escaneando el QR o desde tu casa por WhatsApp.",
  },
  carrusel: [
    { plato: "Six Seven", palabras: ["Armala", "como", "quieras", "vos"] },
    { plato: "Americana", palabras: ["Cheddar", "panceta", "huevo", "fritas"] },
    { plato: "Siciliana", palabras: ["Pepperoni", "morrón", "aceituna", "cebolla"] },
  ],

  // ---------- Carta ----------
  cartaTitulo: ["Todo lo que", "sale del horno"],
  gustos: ["Huevo", "Jamón", "Pepperoni", "Cebolla caramelizada", "Panceta", "Cheddar", "Aceituna", "Morrón", "Ananá"],
  // Cada plato: n=nombre, d=descripción, p=precio ($U, null = "Consultar"),
  // ing=ingredientes, al=alérgenos, foto=URL opcional,
  // pizza={top:{...}, white:true} para dibujarla, pick=cantidad de gustos a elegir.
  carta: [
    { cat: "Pizzetas", items: [
      { n: "Clásica", d: "Solo mozzarella. La que nunca falla.", p: 390, ing: ["Mozzarella"], al: ["Gluten", "Lácteos"], pizza: { top: { oregano: 35 } } },
      { n: "Hawaiana", d: "Jamón y ananá sobre mozzarella.", p: 420, ing: ["Mozzarella", "Jamón", "Ananá"], al: ["Gluten", "Lácteos"], pizza: { top: { jamon: 9, anana: 9 } } },
      { n: "Siciliana", d: "Pepperoni, morrón, aceituna y cebolla caramelizada.", p: 480, ing: ["Mozzarella", "Pepperoni", "Morrón", "Aceituna", "Cebolla caramelizada"], al: ["Gluten", "Lácteos"], pizza: { top: { caramel: 14, calabresa: 10, morron: 7, aceituna: 6 } } },
      { n: "Americana", d: "Cheddar, panceta, huevo frito y papas fritas.", p: 650, ing: ["Mozzarella", "Cheddar", "Panceta", "Huevo frito", "Papas fritas"], al: ["Gluten", "Lácteos", "Huevo"], pizza: { top: { cheddar: 10, panceta: 8, papas: 14, huevo: 1 } } },
      { n: "Canadiense", d: "Jamón, panceta y huevo frito.", p: 650, ing: ["Mozzarella", "Jamón", "Panceta", "Huevo frito"], al: ["Gluten", "Lácteos", "Huevo"], pizza: { top: { jamon: 7, panceta: 8, huevo: 2 } } },
      { n: "Six Seven", d: "La de la casa: mozzarella más cuatro gustos a elección.", p: 680, ing: ["Mozzarella", "4 gustos a elección"], al: ["Gluten", "Lácteos"], pick: 4, pizza: { top: { calabresa: 6, panceta: 5, anana: 5, aceituna: 5, caramel: 8 } } },
    ]},
    { cat: "Milanesas", items: [
      { n: "Milanesa c/fritas", d: "Todas las milanesas van con fritas de regalo.", p: 380 },
      { n: "Mila a caballo", d: "Con dos huevos fritos.", p: 420 },
      { n: "Mila napolitana", d: "Jamón, mozzarella y salsa.", p: 500 },
      { n: "Mila americana", d: "Cheddar, panceta y huevo frito.", p: 590 },
      { n: "Mila en 2 panes", d: "Lechuga, tomate, mayonesa y huevo duro.", p: 450 },
      { n: "Mila en 2 panes completa", d: "Lechuga, tomate, jamón, mozzarella, panceta, huevo y mayonesa.", p: 590 },
    ]},
    { cat: "Megas", items: [
      { n: "Mega a caballo", d: "Mila con seis huevos fritos.", p: 1290 },
      { n: "Mega napolitana", d: "Jamón, mozzarella y salsa.", p: 1350 },
      { n: "Mega americana", d: "Cheddar, panceta y seis huevos fritos.", p: 1490 },
      { n: "Mega Six Seven", d: "Lechuga, tomate, jamón, mozzarella, panceta, seis huevos fritos, salsas y papas pay. Con fritas con cheddar.", p: 1800 },
    ]},
    { cat: "Pizza y fainá", items: [
      { n: "Pizza", d: "", p: 180 },
      { n: "Muzza", d: "", p: 270 },
      { n: "Fainá", d: "", p: 150 },
      { n: "Gustos (cada uno)", d: "Huevo, jamón, pepperoni, cebolla caramelizada, panceta, cheddar, aceituna, morrón, ananá.", p: null },
    ]},
    { cat: "Pastas", items: [
      { n: "Capeletis", d: "Salsas: filetto, tuco, caruso o champi.", p: 420 },
      { n: "Sorrentinos", d: "Salsas: filetto, tuco, caruso o champi.", p: 350 },
      { n: "Raviolones", d: "Salsas: filetto, tuco, caruso o champi.", p: 350 },
      { n: "Ravioles", d: "Salsas: filetto, tuco, caruso o champi.", p: 280 },
      { n: "Tallarines", d: "Salsas: filetto, tuco, caruso o champi.", p: 250 },
    ]},
    { cat: "Panchos y fritas", items: [
      { n: "Pancho al pan", d: "", p: 120 },
      { n: "Pancho c/muzza", d: "", p: 150 },
      { n: "Fritas", d: "", p: 250 },
      { n: "Fritas salseadas", d: "Champi o cheddar.", p: 340 },
    ]},
    { cat: "Bebidas", items: [
      { n: "Cerveza", d: "", p: 280 },
      { n: "Refresco", d: "", p: 230 },
      { n: "Agua", d: "", p: 100 },
    ]},
  ],

  // ---------- El local ----------
  local: {
    titulo: ["Te esperamos", "en el Buceo"],
    texto: "Vení a comer al local o pedí para llevar: armás el pedido acá y te lo tenemos listo.",
    tarjetas: [
      { titulo: "Comé en el local", texto: "Demóstenes 3479, Buceo.", plato: "Clásica", foto: "" },
      { titulo: "Pedí para llevar", texto: "Armá tu pedido y mandalo por WhatsApp.", plato: "Hawaiana", foto: "" },
    ],
  },

  // ---------- Números ----------
  numerosTitulo: ["Pizza de barrio,", "como tiene que ser"],
  numeros: [
    { valor: "4.8", texto: "estrellas en Google" },
    { valor: "6", texto: "pizzetas de la casa" },
    { valor: "30+", texto: "platos en la carta" },
    { valor: "11:00", texto: "abrimos" },
  ],

  // ---------- Reseñas ----------
  // SOLO reseñas reales (por ejemplo copiadas de Google, con permiso del local).
  // Si queda vacío, la sección no aparece.
  resenas: [],

  // ---------- Pie ----------
  cierre: ["¿Mesa para", "esta noche?"],
};

// ---------- Fotos ----------
// Ilustrativas (Unsplash, licencia libre). Cuando el local tenga sus fotos,
// poné la URL o el archivo (ej. "fotos/clasica.jpg") en vez del código.
(function(){
  const U = (id, w=900) => id.startsWith("photo-") ? `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop` : id;
  const F = {
    "Clásica":"photo-1785065316016-ff23cea187b1", "Hawaiana":"photo-1562835155-a7c2a225e97d", "Siciliana":"photo-1700760934249-93efbb574d23",
    "Americana":"photo-1593272280654-b56e97e002e4", "Canadiense":"photo-1655673654158-9f7285b7d1ea", "Six Seven":"photo-1565299624946-b28f40a0ae38",
    "Milanesa c/fritas":"photo-1599921841143-819065a55cc6", "Mila a caballo":"photo-1599921841143-819065a55cc6", "Mila napolitana":"photo-1560611588-163f295eb145",
    "Mila americana":"photo-1560611588-163f295eb145", "Mila en 2 panes":"photo-1667451417729-73e944a796a9", "Mila en 2 panes completa":"photo-1667451417729-73e944a796a9",
    "Mega a caballo":"photo-1585325701956-60dd9c8553bc", "Mega napolitana":"photo-1585325701956-60dd9c8553bc", "Mega americana":"photo-1667451417729-73e944a796a9", "Mega Six Seven":"photo-1667451417729-73e944a796a9",
    "Pizza":"photo-1628840042765-356cda07504e", "Muzza":"photo-1785065316016-ff23cea187b1",
    "Capeletis":"photo-1628885363743-fbf9c98d4196", "Sorrentinos":"photo-1778850620699-79ba3ff60bf0", "Raviolones":"photo-1594610352113-ad218529cfb7", "Ravioles":"photo-1762088875241-e6d23e93dc0f", "Tallarines":"photo-1665761543682-6305ccc5398b",
    "Pancho al pan":"photo-1638368593249-7cadb261e8b3", "Pancho c/muzza":"photo-1599599810694-b5b37304c041",
    "Fritas":"photo-1630384060421-cb20d0e0649d", "Fritas salseadas":"photo-1688978181542-87a886a16fbe", "Cerveza":"photo-1608270586620-248524c67de9",
  };
  const D = window.DATOS;
  D.carta.forEach(c => c.items.forEach(it => { if (!it.foto && F[it.n]) it.foto = U(F[it.n], 700); }));
  D.portada.foto = D.portada.foto || U("photo-1621538997517-58ce53933faa", 1800);       // horno
  D.local.tarjetas[0].foto = D.local.tarjetas[0].foto || U("photo-1767713362918-d6db856570ba"); // frente de pizzería
  D.local.tarjetas[1].foto = D.local.tarjetas[1].foto || U("photo-1644917777632-04f68ce502dd"); // mostrador
})();
