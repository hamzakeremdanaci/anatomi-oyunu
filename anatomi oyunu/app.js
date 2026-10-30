/* İnsan Anatomisi — uygulama mantığı */
(function () {
  const NS = 'http://www.w3.org/2000/svg';
  const stage = document.getElementById('stage');
  const fig = document.getElementById('fig');
  const svg = document.getElementById('zones');
  const panel = document.getElementById('panel');
  const ptitle = document.getElementById('ptitle');
  const pbadge = document.getElementById('pbadge');
  const pbody = document.getElementById('pbody');
  const tip = document.getElementById('tip');
  const zbtn = document.getElementById('zbtn');

  const state = { mode: 'bone', dir: 'front', sel: null, zones: true };

  const key = () => state.mode + ':' + state.dir;
  const view = () => DATA[key()];

  /* ---------- görünümü kur ---------- */
  function build() {
    const v = view();
    fig.src = v.src;
    stage.style.aspectRatio = v.w + '/' + v.h;
    const vb = v.vb || [0, 0, v.w, v.h];
    svg.setAttribute('viewBox', vb.join(' '));
    svg.innerHTML = '';

    // büyük alanlar altta, küçükler üstte kalsın
    const parts = v.parts
      .map(p => ({ p, a: Math.max.apply(null, p.s.map(s => s[2] * s[3])) }))
      .sort((A, B) => B.a - A.a)
      .map(o => o.p);

    parts.forEach(p => {
      const g = document.createElementNS(NS, 'g');
      g.setAttribute('class', 'hit' + (state.mode === 'muscle' ? ' muscle' : ''));
      g.dataset.id = p.id;
      p.s.forEach(s => {
        const e = document.createElementNS(NS, 'ellipse');
        e.setAttribute('cx', s[0]);
        e.setAttribute('cy', s[1]);
        e.setAttribute('rx', s[2]);
        e.setAttribute('ry', s[3]);
        if (s[4]) e.setAttribute('transform', 'rotate(' + s[4] + ' ' + s[0] + ' ' + s[1] + ')');
        e.setAttribute('class', 'shape');
        g.appendChild(e);
      });
      svg.appendChild(g);
    });

    svg.classList.toggle('zones-off', !state.zones);
    applySelection();
    if (!state.sel) renderEmpty();
  }

  function partById(id) {
    return view().parts.find(p => p.id === id) || null;
  }

  function applySelection() {
    svg.querySelectorAll('.hit').forEach(g => {
      g.classList.toggle('sel', g.dataset.id === state.sel);
    });
  }

  /* ---------- panel ---------- */
  function openPart(id) {
    const p = partById(id);
    if (!p) return;
    state.sel = id;
    applySelection();

    ptitle.textContent = p.name;
    pbadge.textContent = state.mode === 'bone' ? 'İskelet Sistemi' : 'Kas Sistemi';
    pbadge.className = 'badge ' + (state.mode === 'bone' ? 'b' : 'm');

    pbody.innerHTML =
      '<div class="tr">Türkçe: ' + p.tr + '</div>' +
      block('📍 Nerede bulunur?', p.where, false) +
      block('⚙️ Özellikleri ve görevi', p.feat, false) +
      block('🔗 Bağlantıları', p.conn, false);

    panel.classList.add('open');
    stage.classList.add('panel-open');
  }

  function block(label, text, muscle) {
    return '<div class="blk' + (muscle ? ' m' : '') + '">' +
      '<div class="l">' + label + '</div><p>' + text + '</p></div>';
  }

  function renderEmpty() {
    const v = view();
    ptitle.textContent = 'Bir yapı seç';
    pbadge.textContent = state.mode === 'bone' ? 'İskelet Sistemi' : 'Kas Sistemi';
    pbadge.className = 'badge ' + (state.mode === 'bone' ? 'b' : 'm');

    const chips = v.parts.map(p =>
      '<button class="chip' + (state.mode === 'muscle' ? ' m' : '') + '" data-id="' + p.id + '">' + p.name + '</button>'
    ).join('');

    pbody.innerHTML =
      '<div class="empty">' +
      '<p>Vücuttaki bir kemiğe veya kasa tıkla; adını, nerede olduğunu, görevini ve bağlantılarını gör.</p>' +
      '<h3>' + v.parts.length + ' yapı · ' + (state.dir === 'front' ? 'Ön yüz' : 'Arka yüz') + '</h3>' +
      '<div class="chips">' + chips + '</div>' +
      '</div>';
  }

  function closePanel() {
    panel.classList.remove('open');
    stage.classList.remove('panel-open');
    state.sel = null;
    applySelection();
    renderEmpty();
  }

  /* ---------- olaylar ---------- */
  svg.addEventListener('click', e => {
    const g = e.target.closest('.hit');
    if (!g) return;
    openPart(g.dataset.id);
  });

  svg.addEventListener('mousemove', e => {
    const g = e.target.closest('.hit');
    if (!g) { tip.classList.remove('on'); return; }
    const p = partById(g.dataset.id);
    if (!p) return;
    tip.textContent = p.name;
    tip.classList.add('on');
    tip.classList.toggle('m', state.mode === 'muscle');
    tip.style.left = e.clientX + 'px';
    tip.style.top = e.clientY + 'px';
  });

  svg.addEventListener('mouseleave', () => tip.classList.remove('on'));

  pbody.addEventListener('click', e => {
    const c = e.target.closest('.chip');
    if (c) openPart(c.dataset.id);
  });

  document.getElementById('pclose').addEventListener('click', closePanel);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closePanel();
  });

  document.getElementById('tgMode').addEventListener('click', e => {
    const b = e.target.closest('button');
    if (!b) return;
    state.mode = b.dataset.mode;
    state.sel = null;
    document.querySelectorAll('#tgMode button').forEach(x => x.classList.toggle('on', x === b));
    closePanel();
    build();
  });

  document.getElementById('tgDir').addEventListener('click', e => {
    const b = e.target.closest('button');
    if (!b) return;
    state.dir = b.dataset.dir;
    state.sel = null;
    document.querySelectorAll('#tgDir button').forEach(x => x.classList.toggle('on', x === b));
    closePanel();
    build();
  });

  zbtn.addEventListener('click', () => {
    state.zones = !state.zones;
    svg.classList.toggle('zones-off', !state.zones);
    zbtn.classList.toggle('on', state.zones);
    zbtn.textContent = state.zones ? '◉ Tıklama alanları görünür' : '◎ Tıklama alanları gizli';
  });

  /* ---------- paylaşılabilir bağlantı: #kas-arka ---------- */
  function applyHash() {
    const h = location.hash.replace('#', '').toLowerCase();
    const m = h.match(/^(iskelet|kas)-(on|arka)$/);
    if (!m) return;
    state.mode = m[1] === 'kas' ? 'muscle' : 'bone';
    state.dir = m[2] === 'arka' ? 'back' : 'front';
    document.querySelectorAll('#tgMode button').forEach(x => x.classList.toggle('on', x.dataset.mode === state.mode));
    document.querySelectorAll('#tgDir button').forEach(x => x.classList.toggle('on', x.dataset.dir === state.dir));
  }

  applyHash();
  window.addEventListener('hashchange', () => { applyHash(); state.sel = null; closePanel(); build(); });

  build();

  // derin bağlantı: ?open=rectus_femoris
  const op = new URLSearchParams(location.search).get('open');
  if (op && partById(op)) openPart(op);
})();
