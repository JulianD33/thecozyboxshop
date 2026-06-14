/* THE COZY BOX SHOP, "Build a Box" customizer */
(function () {
  'use strict';

  var root = document.getElementById('cbItems');
  if (!root) return; // only runs on customize.html

  var WHATSAPP = '18298127667'; // +1 (829) 812-7667

  /* ---- data (each piece carries both languages) ---- */
  var BOXES = [
    { id: 'petite',  cap: 3, img: 'assets/images/box-open-handmade.jpeg',
      en: 'The Petite Box',  es: 'La Cajita Cozy',
      enSub: 'Pick 3 pieces', esSub: 'Elige 3 piezas' },
    { id: 'classic', cap: 5, img: 'assets/images/box-curated.jpeg',
      en: 'The Classic Box', es: 'La Caja Clásica',
      enSub: 'Pick 5 pieces', esSub: 'Elige 5 piezas' },
    { id: 'deluxe',  cap: 7, img: 'assets/images/giftbox-deluxe.jpeg',
      en: 'The Deluxe Box',  es: 'La Caja Deluxe',
      enSub: 'Pick 7 pieces', esSub: 'Elige 7 piezas' }
  ];

  var ITEMS = [
    // candles
    { id: 'c1', cat: 'candles', img: 'assets/images/candle-stars.jpeg', en: 'Starlight Gel Candle',   es: 'Vela de Gel Estelar',  enCat: 'Candle', esCat: 'Vela' },
    { id: 'c2', cat: 'candles', img: 'assets/images/candle-coral.jpeg', en: 'Sunset Coral Candle',    es: 'Vela Coral Atardecer', enCat: 'Candle', esCat: 'Vela' },
    { id: 'c3', cat: 'candles', img: 'assets/images/candle-green.jpeg', en: 'Eucalyptus Mint Candle', es: 'Vela Eucalipto y Menta', enCat: 'Candle', esCat: 'Vela' },
    { id: 'c4', cat: 'candles', img: 'assets/images/mini-candle-red.jpeg', en: 'Little Ruby Mini Candle', es: 'Mini Vela Rubí',    enCat: 'Mini candle', esCat: 'Mini vela' },
    { id: 'c5', cat: 'candles', img: 'assets/images/candle-rose-garden.jpeg', en: 'Rose Garden Candle', es: 'Vela Jardín de Rosas', enCat: 'Candle', esCat: 'Vela' },
    { id: 'c6', cat: 'candles', img: 'assets/images/candle-berry-tin.jpeg', en: 'Berry Medley Candle', es: 'Vela Frutos del Bosque', enCat: 'Candle', esCat: 'Vela' },
    // soap & skincare
    { id: 's1', cat: 'soap', img: 'assets/images/giftbox-koala.jpeg',   en: 'Oatmeal & Cinnamon Soap', es: 'Jabón de Avena y Canela', enCat: 'Soap', esCat: 'Jabón' },
    { id: 's2', cat: 'soap', img: 'assets/images/sugar-scrub-jar.jpeg', en: 'Organic Sugar Scrub',     es: 'Exfoliante de Azúcar Orgánico', enCat: 'Body scrub', esCat: 'Exfoliante' },
    { id: 's3', cat: 'soap', img: 'assets/images/product-collage.jpeg', en: 'Natural Lip Balm',        es: 'Bálsamo Labial Natural', enCat: 'Lip care', esCat: 'Labial' },
    // wax melts & burners
    { id: 'm1', cat: 'melts', img: 'assets/images/waxmelts-sunflower.jpeg',  en: 'Sunflower Melt Set',   es: 'Set de Ceras Girasol',  enCat: 'Wax melts', esCat: 'Ceras' },
    { id: 'm2', cat: 'melts', img: 'assets/images/waxmelt-cupcake.jpeg',     en: 'Cupcake Dream Melt',   es: 'Cera Cupcake de Ensueño', enCat: 'Wax melt', esCat: 'Cera' },
    { id: 'm3', cat: 'melts', img: 'assets/images/waxmelts-strawberry.jpeg', en: 'Strawberry Patch Melts', es: 'Ceras Fresa del Huerto', enCat: 'Wax melts', esCat: 'Ceras' },
    { id: 'm4', cat: 'melts', img: 'assets/images/product-collage.jpeg',     en: 'Citrus Slice Melts',   es: 'Ceras Rodaja de Cítricos', enCat: 'Wax melts', esCat: 'Ceras' },
    { id: 'm5', cat: 'melts', img: 'assets/images/giftbox-koala.jpeg',       en: 'Terracotta Wax Burner', es: 'Hornillo de Terracota', enCat: 'Burner', esCat: 'Hornillo' }
  ];

  /* localized UI strings */
  var T = {
    en: {
      add: 'Add', remove: 'Remove',
      count0: 'Pick a box size to start', countN: function (n, c) { return n + ' of ' + c + ' chosen'; },
      full: 'Your box is full ✦', need: 'Pick a box size to start',
      empty: 'Your box is empty, add a few pieces above.',
      send: 'Send my box on WhatsApp', boxLabel: 'Box', noBox: 'No box chosen yet'
    },
    es: {
      add: 'Añadir', remove: 'Quitar',
      count0: 'Elige un tamaño de caja para empezar', countN: function (n, c) { return n + ' de ' + c + ' elegidas'; },
      full: 'Tu caja está llena ✦', need: 'Elige un tamaño de caja para empezar',
      empty: 'Tu caja está vacía, agrega algunas piezas arriba.',
      send: 'Enviar mi caja por WhatsApp', boxLabel: 'Caja', noBox: 'Aún no eliges una caja'
    }
  };

  /* ---- state ---- */
  var state = { box: null, qty: {}, filter: 'all' };

  function lang() {
    try { return localStorage.getItem('cbs-lang') || 'es'; } catch (e) { return 'es'; }
  }
  function L(o) { return lang() === 'es' ? o.es : o.en; }
  function LC(o) { return lang() === 'es' ? o.esCat : o.enCat; }
  function cap() { return state.box ? state.box.cap : 0; }
  function total() {
    var t = 0; for (var k in state.qty) t += state.qty[k]; return t;
  }

  /* ---- renderers ---- */
  function renderBoxes() {
    var el = document.getElementById('cbBoxes');
    el.innerHTML = '';
    BOXES.forEach(function (b) {
      var active = state.box && state.box.id === b.id;
      var card = document.createElement('button');
      card.type = 'button';
      card.className = 'cb-box' + (active ? ' active' : '');
      card.innerHTML =
        '<span class="cb-box-img"><img src="' + b.img + '" alt=""></span>' +
        '<span class="cb-box-meta"><span class="cb-box-name">' + L(b) + '</span>' +
        '<span class="cb-box-cap">' + (lang() === 'es' ? b.esSub : b.enSub) + '</span></span>' +
        '<span class="cb-box-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
      card.addEventListener('click', function () { chooseBox(b); });
      el.appendChild(card);
    });
  }

  function renderItems() {
    root.innerHTML = '';
    ITEMS.forEach(function (it) {
      if (state.filter !== 'all' && it.cat !== state.filter) return;
      var q = state.qty[it.id] || 0;
      var card = document.createElement('div');
      card.className = 'cb-item' + (q > 0 ? ' active' : '');
      card.innerHTML =
        '<div class="cb-item-img"><img src="' + it.img + '" alt="' + L(it) + '">' +
          (q > 0 ? '<span class="cb-item-badge">' + q + '</span>' : '') + '</div>' +
        '<div class="cb-item-body">' +
          '<span class="cb-item-cat">' + LC(it) + '</span>' +
          '<span class="cb-item-name">' + L(it) + '</span>' +
          '<div class="cb-stepper">' +
            '<button type="button" class="cb-minus" aria-label="' + T[lang()].remove + '"' + (q === 0 ? ' disabled' : '') + '>' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14" stroke-linecap="round"/></svg></button>' +
            '<span class="cb-qty">' + q + '</span>' +
            '<button type="button" class="cb-plus" aria-label="' + T[lang()].add + '">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 5v14M5 12h14" stroke-linecap="round"/></svg></button>' +
          '</div>' +
        '</div>';
      card.querySelector('.cb-plus').addEventListener('click', function () { bump(it.id, 1); });
      card.querySelector('.cb-minus').addEventListener('click', function () { bump(it.id, -1); });
      root.appendChild(card);
    });
  }

  function renderSummary() {
    var t = T[lang()];
    var box = document.getElementById('cbSumBox');
    var list = document.getElementById('cbSumList');
    var hint = document.getElementById('cbHint');
    var send = document.getElementById('cbSend');
    var sendTxt = document.getElementById('cbSendTxt');
    var bar = document.getElementById('cbBar');
    var count = document.getElementById('cbCount');

    sendTxt.textContent = t.send;

    // box line
    if (state.box) {
      box.innerHTML = '<img src="' + state.box.img + '" alt=""><span><strong>' + L(state.box) +
        '</strong><span class="cb-sum-cap">' + total() + ' / ' + state.box.cap + '</span></span>';
      box.classList.add('show');
    } else {
      box.innerHTML = '<span class="cb-sum-nobox">' + t.noBox + '</span>';
      box.classList.add('show');
    }

    // item lines
    list.innerHTML = '';
    var any = false;
    ITEMS.forEach(function (it) {
      var q = state.qty[it.id] || 0;
      if (q <= 0) return;
      any = true;
      var li = document.createElement('li');
      li.className = 'cb-sum-row';
      li.innerHTML = '<span class="cb-sum-q">' + q + '×</span><span>' + L(it) + '</span>';
      list.appendChild(li);
    });
    if (!any) {
      var li2 = document.createElement('li');
      li2.className = 'cb-sum-empty';
      li2.textContent = t.empty;
      list.appendChild(li2);
    }

    // progress + counter
    var c = cap();
    var n = total();
    var pct = c ? Math.min(100, Math.round((n / c) * 100)) : 0;
    bar.style.width = pct + '%';
    if (!state.box) count.textContent = t.count0;
    else count.textContent = (n >= c ? t.full : t.countN(n, c));

    // hint + send state
    if (!state.box) { hint.textContent = t.need; hint.classList.add('show'); }
    else if (!any) { hint.textContent = t.empty; hint.classList.add('show'); }
    else { hint.textContent = ''; hint.classList.remove('show'); }

    send.disabled = !(state.box && any);
  }

  function renderAll() { renderBoxes(); renderItems(); renderSummary(); }

  /* ---- actions ---- */
  function chooseBox(b) {
    state.box = b;
    // if shrinking below current total, trim extras from the end
    var over = total() - b.cap;
    if (over > 0) {
      for (var i = ITEMS.length - 1; i >= 0 && over > 0; i--) {
        var id = ITEMS[i].id;
        while ((state.qty[id] || 0) > 0 && over > 0) { state.qty[id]--; over--; }
      }
    }
    renderAll();
  }

  function bump(id, delta) {
    if (!state.box && delta > 0) {
      // nudge them to pick a box first
      var bx = document.getElementById('cbBoxes');
      bx.classList.remove('cb-shake'); void bx.offsetWidth; bx.classList.add('cb-shake');
      return;
    }
    var cur = state.qty[id] || 0;
    var next = cur + delta;
    if (next < 0) next = 0;
    if (delta > 0 && total() >= cap()) return; // full
    state.qty[id] = next;
    renderItems();
    renderSummary();
  }

  /* ---- filter chips ---- */
  document.querySelectorAll('#cbFilter .chip').forEach(function (chip) {
    chip.addEventListener('click', function () {
      document.querySelectorAll('#cbFilter .chip').forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');
      state.filter = chip.getAttribute('data-filter');
      renderItems();
    });
  });

  /* ---- send to WhatsApp ---- */
  document.getElementById('cbSend').addEventListener('click', function () {
    if (!state.box || total() < 1) return;
    var es = lang() === 'es';
    var v = function (id) { var e = document.getElementById(id); return e ? e.value.trim() : ''; };
    var lines = [];
    lines.push(es ? '¡Hola! Quiero armar mi propia Cozy Box 🎁' : 'Hi! I would love to build my own Cozy Box 🎁');
    lines.push('');
    lines.push((es ? 'Caja: ' : 'Box: ') + L(state.box) + ' (' + total() + '/' + state.box.cap + ')');
    lines.push('');
    lines.push(es ? 'Mis piezas:' : 'My pieces:');
    ITEMS.forEach(function (it) {
      var q = state.qty[it.id] || 0;
      if (q > 0) lines.push('• ' + L(it) + ' x' + q);
    });
    var name = v('cbName'), forWho = v('cbFor'), vibe = v('cbVibe'), note = v('cbNote');
    if (forWho || vibe || note || name) lines.push('');
    if (forWho) lines.push((es ? 'Para / ocasión: ' : 'For / occasion: ') + forWho);
    if (vibe)   lines.push((es ? 'Aromas o colores: ' : 'Scents or colors: ') + vibe);
    if (note)   lines.push((es ? 'Nota: ' : 'Note: ') + note);
    if (name)   lines.push((es ? 'Nombre: ' : 'Name: ') + name);

    var msg = encodeURIComponent(lines.join('\n'));
    window.open('https://wa.me/' + WHATSAPP + '?text=' + msg, '_blank');
  });

  /* ---- language reactivity ---- */
  document.addEventListener('cbs:lang', renderAll);

  renderAll();
})();
