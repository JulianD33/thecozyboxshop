/* THE COZY BOX SHOP, English / Spanish translation engine */
(function () {
  'use strict';

  var DICT = {
    /* ---- nav / shared ---- */
    "Handmade · Artesanal": "Hecho a mano · Artesanal",
    "Home": "Inicio",
    "Shop": "Tienda",
    "Our Story": "Nuestra Historia",
    "Contact": "Contacto",
    "Order a Box": "Pedir una Caja",

    /* ---- footer ---- */
    "Small-batch gift boxes of handmade soap, candles, wax melts & natural skincare. Wellness you can feel, scents that stay with you.": "Cajas de regalo en pequeños lotes con jabón artesanal, velas, ceras aromáticas y cuidado natural de la piel. Bienestar que se siente, aromas que te acompañan.",
    "Gift Boxes": "Cajas de Regalo",
    "Candles": "Velas",
    "Soap & Skincare": "Jabón y Cuidado de la Piel",
    "Wax Melts": "Ceras Aromáticas",
    "Company": "Empresa",
    "FAQ": "Preguntas Frecuentes",
    "Custom Orders": "Pedidos Personalizados",
    "Stay cozy": "Mantente cozy",
    "Join for new scents, seasonal boxes & little treats.": "Únete para conocer nuevos aromas, cajas de temporada y pequeños detalles.",
    "Handmade with love · Wrapped with care": "Hecho con amor · Envuelto con cariño",

    /* ---- home: hero ---- */
    "Handcrafted gift boxes": "Cajas de regalo hechas a mano",
    "Wellness you can feel,": "Bienestar que se siente,",
    "scents that stay": "aromas que te",
    "with you.": "acompañan.",
    "Every Cozy Box is hand-poured, hand-wrapped, and made in small batches, artisanal soap, candles, wax melts & natural skincare, gathered into one beautiful moment of calm.": "Cada Cozy Box es vertida a mano, envuelta a mano y hecha en pequeños lotes: jabón artesanal, velas, ceras aromáticas y cuidado natural de la piel, reunidos en un hermoso momento de calma.",
    "Shop the Boxes": "Ver las Cajas",
    "Handmade": "Hecho a mano",
    "Signature scents": "Aromas exclusivos",
    "Loved by gifters": "Amado por quienes regalan",
    "cozy & calm": "cozy y calma",
    "Wrapped with love": "Envuelto con amor",
    "Gift-ready, every time": "Listo para regalar, siempre",

    /* ---- home: strip ---- */
    "Hand-poured candles": "Velas vertidas a mano",
    "Natural artisan soap": "Jabón artesanal natural",
    "Small-batch wax melts": "Ceras en pequeños lotes",
    "Nourishing skincare": "Cuidado nutritivo de la piel",
    "Beautifully gift-wrapped": "Bellamente envuelto para regalo",

    /* ---- home: categories ---- */
    "Find your cozy": "Encuentra tu cozy",
    "A little of everything": "Un poco de todo lo",
    "soothing": "reconfortante",
    "From the first scratch of a match to the last sliver of soap, explore the handmade pieces that fill every box.": "Desde el primer roce de un fósforo hasta la última lámina de jabón: explora las piezas hechas a mano que llenan cada caja.",
    "Hand-poured gel & wax, lit with a soft glow": "Gel y cera vertidos a mano, con un brillo suave",
    "Explore →": "Explorar →",
    "Oatmeal, cinnamon, scrubs & balms": "Avena, canela, exfoliantes y bálsamos",
    "Wax Melts & Burners": "Ceras y Hornillos",
    "Tiny works of art that fill a room": "Pequeñas obras de arte que llenan la habitación",

    /* ---- home: signature box ---- */
    "The signature box": "La caja insignia",
    "One box. A whole evening of calm.": "Una caja. Toda una velada de calma.",
    "We curate each Cozy Box like a little spa ritual, something to light, something to lather, something to soften, and something to keep. All wrapped in tissue and tied by hand.": "Curamos cada Cozy Box como un pequeño ritual de spa: algo para encender, algo para enjabonar, algo para suavizar y algo para conservar. Todo envuelto en papel y atado a mano.",
    "A hand-poured candle": "Una vela vertida a mano",
    "or ceramic wax burner to set the mood.": "o un hornillo de cerámica para crear ambiente.",
    "Artisan soap & scrub": "Jabón y exfoliante artesanal",
    "made with oatmeal, cinnamon & botanicals.": "hechos con avena, canela y botánicos.",
    "Decorative wax melts": "Ceras decorativas",
    "shaped like sunflowers, citrus & cupcakes.": "con forma de girasoles, cítricos y cupcakes.",
    "Little finishing touches": "Pequeños toques finales",
    ", lip balm, an embroidered towel & more.": ", bálsamo labial, una toalla bordada y más.",
    "Build your box": "Arma tu caja",

    /* ---- home: bestsellers ---- */
    "Loved this season": "Lo más querido esta temporada",
    "Our cozy": "Nuestros cozy",
    "bestsellers": "favoritos",
    "The little favorites our customers keep coming back for.": "Los pequeños favoritos por los que nuestros clientes siempre regresan.",
    "Bestseller": "Más vendido",
    "New": "Nuevo",
    "Hand-poured candle": "Vela vertida a mano",
    "Starlight Gel Candle": "Vela de Gel Estelar",
    "A creamy base topped with shimmering red stars suspended in crystal-clear gel. Sweet vanilla & berry.": "Una base cremosa coronada con brillantes estrellas rojas suspendidas en gel cristalino. Dulce vainilla y frutos rojos.",
    "Wax melts": "Ceras aromáticas",
    "Sunflower Melt Set": "Set de Ceras Girasol",
    "Six hand-molded sunflowers in honey & terracotta tones. Warm them to fill any room with comfort.": "Seis girasoles moldeados a mano en tonos miel y terracota. Caliéntalos para llenar de confort cualquier habitación.",
    "Wax melt": "Cera aromática",
    "Cupcake Dream Melt": "Cera Cupcake de Ensueño",
    "A whipped buttercream swirl with a candy star on top. Almost too sweet to melt, almost.": "Un remolino de crema batida con una estrella de caramelo encima. Casi demasiado dulce para derretir... casi.",
    "Add": "Añadir",
    "View the full shop": "Ver toda la tienda",

    /* ---- home: why tiles ---- */
    "Why The Cozy Box": "Por qué The Cozy Box",
    "Made slowly,": "Hecho con calma,",
    "made well": "hecho bien",
    "Hand-poured": "Vertido a mano",
    "Every candle and melt is poured in small batches, never mass-produced.": "Cada vela y cera se vierte en pequeños lotes, nunca en producción masiva.",
    "Natural & kind": "Natural y amable",
    "Skin-loving ingredients like oatmeal, cinnamon & botanical oils.": "Ingredientes que cuidan la piel como avena, canela y aceites botánicos.",
    "Gift-ready": "Listo para regalar",
    "Arrives wrapped in tissue & ribbon, ready to give the moment it lands.": "Llega envuelto en papel y cinta, listo para regalar apenas llega.",
    "Made with care": "Hecho con cariño",
    "Designed by hand to feel like a hug in a box, for them, or for you.": "Diseñado a mano para sentirse como un abrazo en una caja, para ellos o para ti.",

    /* ---- home: how it works ---- */
    "How it works": "Cómo funciona",
    "Cozy, in three easy steps": "Cozy, en tres simples pasos",
    "Choose your box": "Elige tu caja",
    "Pick a ready-made box or tell us the vibe and we'll curate it for you.": "Elige una caja lista o cuéntanos la vibra y la curamos para ti.",
    "We hand-wrap it": "La envolvemos a mano",
    "Each piece is nestled in tissue, tied with ribbon, and finished with a note.": "Cada pieza se acomoda en papel, se ata con cinta y se termina con una nota.",
    "Send the cozy": "Envía el cozy",
    "Ship it to your door or straight to someone who deserves a little calm.": "Envíala a tu puerta o directo a alguien que merece un poco de calma.",

    /* ---- home: testimonials ---- */
    "Kind words": "Palabras amables",
    "Loved by gifters everywhere": "Amado por quienes regalan en todas partes",
    "\"It honestly looked too pretty to open. The candle smells incredible and the soap is so gentle. My sister cried happy tears.\"": "\"Honestamente se veía demasiado linda para abrirla. La vela huele increíble y el jabón es muy suave. Mi hermana lloró de felicidad.\"",
    "Gifted to her sister": "Regalo para su hermana",
    "\"You can tell everything is handmade. The little sunflower melts are the cutest thing I've ever burned. Ordering again for the holidays.\"": "\"Se nota que todo es hecho a mano. Las pequeñas ceras de girasol son lo más lindo que he encendido. Volveré a pedir para las fiestas.\"",
    "Repeat customer": "Cliente frecuente",
    "\"Beautifully wrapped, arrived perfectly, and felt so personal. This is my new go-to gift for absolutely everyone.\"": "\"Bellamente envuelta, llegó perfecta y se sintió muy personal. Es mi nuevo regalo favorito para absolutamente todos.\"",
    "Verified buyer": "Compradora verificada",

    /* ---- home: cta band ---- */
    "Ready to gift cozy?": "¿Lista para regalar cozy?",
    "Send a little": "Envía un poco de",
    "calm": "calma",
    "today.": "hoy.",
    "Tell us who it's for and the feeling you want to give, we'll handcraft the perfect Cozy Box and wrap it like it matters. Because it does.": "Cuéntanos para quién es y la sensación que quieres regalar: crearemos a mano la Cozy Box perfecta y la envolveremos como se merece. Porque así es.",
    "Browse the shop": "Explora la tienda",

    /* ---- shop page ---- */
    "· Shop": "· Tienda",
    "The collection": "La colección",
    "Handmade,": "Hecho a mano,",
    "head to toe cozy": "cozy de pies a cabeza",
    "Curated gift boxes and the little handmade pieces inside them. Filter by what you're in the mood for.": "Cajas de regalo curadas y las pequeñas piezas hechas a mano que llevan dentro. Filtra según lo que se te antoje.",
    "All": "Todo",
    "Signature": "Insignia",
    "Gift box": "Caja de regalo",
    "Gift box · Custom": "Caja de regalo · Personalizada",
    "Mini candle": "Mini vela",
    "Artisan soap": "Jabón artesanal",
    "Body scrub": "Exfoliante corporal",
    "Lip care": "Cuidado labial",
    "Burner": "Hornillo",
    "The Deluxe Cozy Box": "La Cozy Box Deluxe",
    "Our fullest ritual: ceramic wax burner, bath scrub, oatmeal soap, wax melts & a mini candle, all hand-wrapped.": "Nuestro ritual más completo: hornillo de cerámica, exfoliante de baño, jabón de avena, ceras y una mini vela, todo envuelto a mano.",
    "Order": "Pedir",
    "The Warm Welcome Box": "La Caja Bienvenida Cálida",
    "A terracotta burner, citrus & oatmeal soaps, a mini candle and a hand-embroidered dragonfly towel.": "Un hornillo de terracota, jabones de cítricos y avena, una mini vela y una toalla bordada a mano con libélulas.",
    "Build-Your-Own Box": "Arma Tu Propia Caja",
    "Choose your scents and pieces, we curate, wrap and finish it with a handwritten note. Tell us the vibe.": "Elige tus aromas y piezas: curamos, envolvemos y la terminamos con una nota escrita a mano. Cuéntanos la vibra.",
    "Customize": "Personalizar",
    "A creamy base topped with shimmering red stars in crystal gel. Vanilla & wild berry.": "Una base cremosa coronada con brillantes estrellas rojas en gel cristalino. Vainilla y frutos rojos silvestres.",
    "Sunset Coral Candle": "Vela Coral Atardecer",
    "Warm coral gel with a soft glow and a clean cotton wick. Notes of peach blossom & amber.": "Cálido gel coral con un brillo suave y mecha de algodón limpia. Notas de flor de durazno y ámbar.",
    "Eucalyptus Mint Candle": "Vela Eucalipto y Menta",
    "A cool, spa-green gel candle that smells like a deep breath. Eucalyptus, mint & fresh sage.": "Una fresca vela de gel verde spa que huele a respiro profundo. Eucalipto, menta y salvia fresca.",
    "Little Ruby Mini Candle": "Mini Vela Rubí",
    "A pocket-sized candle in glossy red glass, tied with twine. The perfect add-on or stocking filler.": "Una vela de bolsillo en vidrio rojo brillante, atada con cordel. El complemento perfecto o detalle pequeño.",
    "Oatmeal & Cinnamon Soap": "Jabón de Avena y Canela",
    "A gently exfoliating bar with real oats & warm cinnamon. Soothing for sensitive, dry skin.": "Una barra suavemente exfoliante con avena real y canela cálida. Reconfortante para piel sensible y seca.",
    "Organic Sugar Scrub": "Exfoliante de Azúcar Orgánico",
    "A natural exfoliating scrub that buffs skin soft and leaves it lightly scented and glowing.": "Un exfoliante natural que deja la piel suave, ligeramente perfumada y radiante.",
    "Natural Lip Balm": "Bálsamo Labial Natural",
    "A nourishing, lightly tinted balm that melts into lips. Made with botanical butters & oils.": "Un bálsamo nutritivo y ligeramente tintado que se funde en los labios. Hecho con mantecas y aceites botánicos.",
    "Six hand-molded sunflowers in honey & terracotta tones. Warm them to fill a room with comfort.": "Seis girasoles moldeados a mano en tonos miel y terracota. Caliéntalos para llenar una habitación de confort.",
    "A whipped buttercream swirl with a candy star on top. Sweet vanilla frosting & sugar.": "Un remolino de crema batida con una estrella de caramelo encima. Dulce glaseado de vainilla y azúcar.",
    "Strawberry Patch Melts": "Ceras Fresa del Huerto",
    "Three hand-molded strawberries tucked in an organza pouch. Sweet, sun-ripened berry to fill any room.": "Tres fresas moldeadas a mano en una bolsita de organza. Aroma dulce de fresa madura para llenar cualquier habitación.",
    "Citrus Slice Melts": "Ceras Rodaja de Cítricos",
    "Cheerful orange & lime slices with a bright, zesty scent. A little burst of sunshine indoors.": "Alegres rodajas de naranja y lima con un aroma vivo y cítrico. Un pequeño estallido de sol en casa.",
    "Terracotta Wax Burner": "Hornillo de Terracota",
    "A handmade ceramic burner with a soft glow and cut-out detail. The cozy home for any melt.": "Un hornillo de cerámica hecho a mano con un brillo suave y detalles calados. El hogar cozy para cualquier cera.",
    "Gift set": "Set de regalo",
    "Daisy Aromatherapy Set": "Set Aromático Margarita",
    "A white ceramic wax burner paired with hand-poured white daisy wax melts, boxed and tied with ribbon to gift.": "Un hornillo de cerámica blanca con ceras de margarita blanca vertidas a mano, en caja y atado con cinta para regalar.",
    "Candle & Freshener Set": "Set Vela y Aromatizantes",
    "An amber wood-wick candle with hanging daisy wax fresheners, nestled in a black gift box with a handwritten note.": "Una vela de mecha de madera en frasco ámbar con aromatizantes de cera colgantes de margarita, en una caja de regalo negra con una nota escrita a mano.",
    "Rose Garden Candle": "Vela Jardín de Rosas",
    "A wood-wick candle crowned with a ring of pastel wax roses over creamy soy wax. Soft floral & vanilla.": "Una vela de mecha de madera coronada con un anillo de rosas de cera pastel sobre cera de soya cremosa. Suave floral y vainilla.",
    "Berry Medley Candle": "Vela Frutos del Bosque",
    "A black tin filled with hand-molded raspberries & blueberries in soy wax. Sweet, fruity & playful.": "Una lata negra llena de frambuesas y arándanos moldeados a mano en cera de soya. Dulce, frutal y divertida.",
    "Cozy Balm Collection": "Colección Cozy Balm",
    "Six nourishing lip balms, vanilla, strawberry, coconut, honey, rose & chocolate, plus a balm jar. Natural butters & oils.": "Seis bálsamos labiales nutritivos: vainilla, fresa, coco, miel, rosa y chocolate, más un frasco de bálsamo. Mantecas y aceites naturales.",
    "Wax fresheners": "Aromatizantes de cera",
    "Wax Freshener Collection": "Colección de Aromatizantes",
    "Twelve hand-poured scented wax shapes, flowers, hearts, shells, moons & marble, for drawers, cars & closets.": "Doce formas de cera aromática vertidas a mano: flores, corazones, conchas, lunas y mármol, para cajones, autos y armarios.",
    "Can't decide?": "¿No te decides?",
    "Let us build it": "Déjanos armarla",
    "just for them.": "solo para ellos.",
    "Tell us who it's for, the colors and scents they love, and your budget, we'll handcraft a one-of-a-kind Cozy Box.": "Cuéntanos para quién es, los colores y aromas que ama, y tu presupuesto: crearemos a mano una Cozy Box única.",
    "Start a custom box": "Comenzar una caja personalizada",

    /* ---- customize page ---- */
    "Build Your Box": "Arma tu Caja",
    "· Build Your Box": "· Arma tu Caja",
    "Make it yours": "Hazla tuya",
    "Customize your": "Personaliza tu",
    "Pick your box, fill it with the little handmade things you love, and we'll wrap it by hand with a note.": "Elige tu caja, llénala con las pequeñas cosas hechas a mano que amas, y la envolveremos a mano con una nota.",
    "Every box is hand-wrapped in tissue and ribbon, finished with a handwritten note.": "Cada caja se envuelve a mano en papel y cinta, terminada con una nota escrita a mano.",
    "Fill it with cozy": "Llénala de cozy",
    "Make it personal": "Hazla personal",
    "Who's it for / occasion": "¿Para quién es / ocasión?",
    "Scents or colors you love": "Aromas o colores que amas",
    "A note to add (optional)": "Una nota para agregar (opcional)",
    "Your Cozy Box": "Tu Cozy Box",

    /* ---- about page ---- */
    "· Our Story": "· Nuestra Historia",
    "Our story": "Nuestra historia",
    "Made at a": "Hecho en una",
    "kitchen table": "mesa de cocina",
    "The Cozy Box Shop started the way most cozy things do, slowly, by hand, and with a lot of love.": "The Cozy Box Shop comenzó como empiezan casi todas las cosas cozy: con calma, a mano y con mucho amor.",
    "How it began": "Cómo comenzó",
    "A small batch, a big feeling": "Un pequeño lote, un gran sentimiento",
    "It began with one candle, poured on a quiet evening, and the little spark of joy it brought to the room. One candle became soaps, then scrubs, then wax melts shaped like sunflowers, and soon, whole boxes gathered for the people we love.": "Comenzó con una vela, vertida en una noche tranquila, y la pequeña chispa de alegría que trajo a la habitación. Una vela se convirtió en jabones, luego exfoliantes, luego ceras con forma de girasoles, y pronto, cajas enteras reunidas para las personas que amamos.",
    "Today every Cozy Box is still made in small batches, by hand, with ingredients we'd happily use ourselves. No factories, no shortcuts, just honest, comforting things, wrapped with care and sent out into the world to make someone's day a little softer.": "Hoy cada Cozy Box se sigue haciendo en pequeños lotes, a mano, con ingredientes que usaríamos con gusto nosotros mismos. Sin fábricas, sin atajos: solo cosas honestas y reconfortantes, envueltas con cariño y enviadas al mundo para hacer el día de alguien un poco más suave.",
    "What we believe": "En qué creemos",
    "The little things, done": "Las pequeñas cosas, hechas",
    "with care": "con cariño",
    "Handmade, always": "Hecho a mano, siempre",
    "Every candle is poured, every bar is cut, every box is wrapped by hand. Small imperfections are part of the charm.": "Cada vela se vierte, cada barra se corta, cada caja se envuelve a mano. Las pequeñas imperfecciones son parte del encanto.",
    "Naturally kind": "Naturalmente amable",
    "We lean on gentle, natural ingredients, oatmeal, cinnamon, botanical oils, so your skin and your space feel good.": "Nos apoyamos en ingredientes suaves y naturales (avena, canela, aceites botánicos) para que tu piel y tu espacio se sientan bien.",
    "Made to be given": "Hecho para regalar",
    "Each box is designed to feel personal, wrapped, ribboned and finished so it's ready to gift the moment it arrives.": "Cada caja está diseñada para sentirse personal: envuelta, con cinta y terminada para estar lista para regalar apenas llega.",
    "Our craft": "Nuestro oficio",
    "Slow made, on purpose": "Hecho con calma, a propósito",
    "Good things take a little time. We melt, pour, cure and set every piece at its own pace, because rushing a candle or a bar of soap means losing the very thing that makes it special.": "Las cosas buenas toman su tiempo. Derretimos, vertemos, curamos y dejamos reposar cada pieza a su ritmo, porque apurar una vela o una barra de jabón significa perder justo aquello que la hace especial.",
    "in small batches for a clean, even burn.": "en pequeños lotes para una quema limpia y pareja.",
    "Cured & tested": "Curado y probado",
    "so scents are true and skincare is gentle.": "para que los aromas sean fieles y el cuidado sea suave.",
    "Hand-finished": "Terminado a mano",
    "with tissue, twine, ribbon & a note.": "con papel, cordel, cinta y una nota.",
    "See what we make": "Mira lo que hacemos",
    "Come say hello": "Ven a saludar",
    "Let's make something": "Hagamos algo",
    "together.": "juntos.",
    "Whether it's a gift, a treat for yourself, or a custom box for an occasion, we'd love to help you give a little calm.": "Ya sea un regalo, un gusto para ti o una caja personalizada para una ocasión: nos encantaría ayudarte a regalar un poco de calma.",
    "Get in touch": "Contáctanos",

    /* ---- contact page ---- */
    "· Contact": "· Contacto",
    "Let's talk": "Hablemos",
    "Order a box, or": "Pide una caja, o",
    "just say hi": "solo saluda",
    "Tell us what you're dreaming up and we'll make it cozy. We usually reply within one business day.": "Cuéntanos qué estás imaginando y lo haremos cozy. Normalmente respondemos en un día hábil.",
    "Message us to order fast": "Escríbenos para pedir rápido",
    "Email": "Correo",
    "Made & shipped": "Hecho y enviado",
    "Handmade to order · ships in 3–5 business days": "Hecho a mano por pedido · se envía en 3–5 días hábiles",
    "Thank you! We'll continue your order on WhatsApp, opening it now. 🤍": "¡Gracias! Continuaremos tu pedido en WhatsApp; abriéndolo ahora. 🤍",
    "Your name": "Tu nombre",
    "Which box or item?": "¿Qué caja o producto?",
    "The Deluxe Cozy Box": "La Cozy Box Deluxe",
    "The Warm Welcome Box": "La Caja Bienvenida Cálida",
    "Build-Your-Own Box (custom)": "Arma Tu Propia Caja (personalizada)",
    "Wax Melts & Burners": "Ceras y Hornillos",
    "Not sure yet, help me choose": "Aún no estoy segura, ayúdame a elegir",
    "Tell us the details": "Cuéntanos los detalles",
    "Send & continue on WhatsApp": "Enviar y continuar en WhatsApp",
    "No payment now, we'll confirm everything with you first.": "Sin pago ahora: confirmaremos todo contigo primero.",
    "Good to know": "Bueno saber",
    "Frequently asked": "Preguntas frecuentes",
    "Are the products really handmade?": "¿Los productos son realmente hechos a mano?",
    "Yes, every candle, soap, scrub and wax melt is made by hand in small batches. Slight variations in color and shape are part of what makes each piece one of a kind.": "Sí, cada vela, jabón, exfoliante y cera se hace a mano en pequeños lotes. Las ligeras variaciones de color y forma son parte de lo que hace única a cada pieza.",
    "Can I customize what goes in my box?": "¿Puedo personalizar lo que va en mi caja?",
    "Absolutely. Choose our Build-Your-Own Box and tell us the scents, colors, occasion and budget. We'll curate it, wrap it, and add a handwritten note before it ships.": "Por supuesto. Elige nuestra opción Arma Tu Propia Caja y cuéntanos los aromas, colores, la ocasión y el presupuesto. La curamos, la envolvemos y agregamos una nota escrita a mano antes de enviarla.",
    "How long does it take to receive my order?": "¿Cuánto tarda en llegar mi pedido?",
    "Because everything is made to order, please allow 3–5 business days for crafting and wrapping, plus shipping time. Need it sooner for a special date? Just ask and we'll do our best.": "Como todo se hace por pedido, considera de 3–5 días hábiles para la elaboración y envoltura, más el tiempo de envío. ¿La necesitas antes para una fecha especial? Solo pídelo y haremos lo posible.",
    "Are the ingredients safe for sensitive skin?": "¿Los ingredientes son seguros para piel sensible?",
    "We use gentle, natural ingredients like oatmeal, cinnamon and botanical oils. If you have allergies, message us before ordering and we'll share a full ingredient list.": "Usamos ingredientes suaves y naturales como avena, canela y aceites botánicos. Si tienes alergias, escríbenos antes de pedir y te compartiremos la lista completa de ingredientes.",
    "Do you offer gift wrapping & notes?": "¿Ofrecen envoltura de regalo y notas?",
    "Always, and at no extra cost. Every box arrives wrapped in tissue, tied with ribbon, and ready to gift. Add a personal message at checkout and we'll handwrite it.": "Siempre, y sin costo extra. Cada caja llega envuelta en papel, atada con cinta y lista para regalar. Agrega un mensaje personal al pedir y lo escribiremos a mano.",
    "How do I pay?": "¿Cómo pago?",
    "Send your details through the form or WhatsApp and we'll confirm the order and share secure payment options. Nothing is charged until everything is just right.": "Envía tus datos por el formulario o WhatsApp y confirmaremos el pedido y te compartiremos opciones de pago seguras. No se cobra nada hasta que todo esté perfecto."
  };

  var PH = {
    "Your email": "Tu correo",
    "Jane Doe": "Juana Pérez",
    "Who's it for, favorite scents/colors, the occasion, budget, delivery date...": "¿Para quién es?, aromas/colores favoritos, la ocasión, presupuesto, fecha de entrega...",
    "Birthday, thank you, just because...": "Cumpleaños, agradecimiento, porque sí...",
    "Warm vanilla, terracotta tones...": "Vainilla cálida, tonos terracota...",
    "Add a little message for them...": "Agrega un pequeño mensaje para ellos..."
  };

  var nodes = [];
  var phEls = [];

  function collect() {
    var tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var n;
    while ((n = tw.nextNode())) {
      var raw = n.nodeValue;
      var key = raw.trim();
      if (key && DICT[key]) nodes.push({ n: n, raw: raw, key: key });
    }
    document.querySelectorAll('[placeholder]').forEach(function (el) {
      var p = el.getAttribute('placeholder');
      if (PH[p]) phEls.push({ el: el, en: p });
    });
  }

  function apply(lang) {
    nodes.forEach(function (o) {
      o.n.nodeValue = (lang === 'es') ? o.raw.replace(o.key, DICT[o.key]) : o.raw;
    });
    phEls.forEach(function (o) {
      o.el.setAttribute('placeholder', (lang === 'es') ? PH[o.en] : o.en);
    });
    document.documentElement.lang = lang;
    var lbl = document.getElementById('langLabel');
    if (lbl) lbl.textContent = (lang === 'es') ? 'EN' : 'ES';
    var tg = document.getElementById('langToggle');
    if (tg) tg.setAttribute('aria-label', (lang === 'es') ? 'Switch to English' : 'Cambiar a Español');
    try { localStorage.setItem('cbs-lang', lang); } catch (e) {}
    try { document.dispatchEvent(new CustomEvent('cbs:lang', { detail: lang })); } catch (e) {}
  }

  function init() {
    collect();
    var saved = 'es';
    try { saved = localStorage.getItem('cbs-lang') || 'es'; } catch (e) {}
    apply(saved);
    var tg = document.getElementById('langToggle');
    if (tg) tg.addEventListener('click', function () {
      var cur = 'es';
      try { cur = localStorage.getItem('cbs-lang') || 'es'; } catch (e) {}
      apply(cur === 'es' ? 'en' : 'es');
    });
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
