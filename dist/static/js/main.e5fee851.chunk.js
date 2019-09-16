(window.webpackJsonpfishtea = window.webpackJsonpfishtea || []).push([[0], { 22(e, t, a) { e.exports = a(33); }, 32(e, t, a) {}, 33(e, t, a) {
  a.r(t); const n = a(0),
    r = a.n(n),
    o = a(18),
    c = a(19),
    l = a(10),
    s = a(5),
    i = a(6),
    u = a(8),
    m = a(7),
    h = a(9); function p(e) { return e[Math.floor(Math.random() * e.length)]; } function f() { const e = ['adorable', 'beautiful', 'clean', 'drab', 'elegant', 'fancy', 'glamorous', 'handsome', 'long', 'magnificent', 'old-fashioned', 'plain', 'quaint', 'sparkling', 'ugliest', 'unsightly', 'angry', 'bewildered', 'clumsy', 'defeated', 'embarrassed', 'fierce', 'grumpy', 'helpless', 'itchy', 'jealous', 'lazy', 'mysterious', 'nervous', 'obnoxious', 'panicky', 'repulsive', 'scary', 'thoughtless', 'uptight', 'worried']; return ''.concat(p(e), '-').concat(p(e), '-').concat(p(['women', 'men', 'children', 'teeth', 'feet', 'people', 'leaves', 'mice', 'geese', 'halves', 'knives', 'wives', 'lives', 'elves', 'loaves', 'potatoes', 'tomatoes', 'cacti', 'foci', 'fungi', 'nuclei', 'syllabuses', 'analyses', 'diagnoses', 'oases', 'theses', 'crises', 'phenomena', 'criteria', 'data'])); } const d = (function (e) {
      function t() {
        let e,
          a; Object(s.a)(this, t); for (var n = arguments.length, o = new Array(n), c = 0; c < n; c++)o[c] = arguments[c]; return (a = Object(u.a)(this, (e = Object(m.a)(t)).call.apply(e, [this].concat(o)))).myInput = r.a.createRef(), a.goToStore = function (e) { e.preventDefault(); const t = a.myInput.current.value; a.props.history.push('/store/'.concat(t)); }, a;
      } return Object(h.a)(t, e), Object(i.a)(t, [{ key: 'render', value() { return r.a.createElement('form', { className: 'store-selector', onSubmit: this.goToStore }, r.a.createElement('h2', null, 'Please Enter A Store'), r.a.createElement('input', { type: 'text', ref: this.myInput, required: !0, placeholder: 'Store Name', defaultValue: f() }), r.a.createElement('button', { type: 'submit' }, 'Visit Store \u2192')); } }]), t;
    }(r.a.Component)),
    b = function (e) { return r.a.createElement('header', { className: 'top' }, r.a.createElement('h1', null, 'Catch', r.a.createElement('span', { className: 'ofThe' }, r.a.createElement('span', { className: 'of' }, 'Of'), r.a.createElement('span', { className: 'the' }, 'The'))), r.a.createElement('h3', { className: 'tagline' }, r.a.createElement('span', null, e.tagline))); },
    v = (function (e) { function t() { return Object(s.a)(this, t), Object(u.a)(this, Object(m.a)(t).apply(this, arguments)); } return Object(h.a)(t, e), Object(i.a)(t, [{ key: 'render', value() { return r.a.createElement('div', { className: 'order' }, 'Order!!!'); } }]), t; }(r.a.Component)),
    y = (function (e) { function t() { return Object(s.a)(this, t), Object(u.a)(this, Object(m.a)(t).apply(this, arguments)); } return Object(h.a)(t, e), Object(i.a)(t, [{ key: 'render', value() { return r.a.createElement('div', { className: 'inventory' }, 'Inventory!!'); } }]), t; }(r.a.Component)),
    E = (function (e) { function t() { return Object(s.a)(this, t), Object(u.a)(this, Object(m.a)(t).apply(this, arguments)); } return Object(h.a)(t, e), Object(i.a)(t, [{ key: 'render', value() { return r.a.createElement('div', { className: 'catch-of-the-day' }, r.a.createElement('div', { className: 'menu' }, r.a.createElement(b, { tagline: 'Fresh Seafood Market', age: 100 })), r.a.createElement(v, null), r.a.createElement(y, null)); } }]), t; }(r.a.Component)),
    g = function () { return r.a.createElement('div', null, r.a.createElement('h2', null, '404 Page Not Found !!!!!')); },
    O = function () { return r.a.createElement(c.a, null, r.a.createElement(l.c, null, r.a.createElement(l.a, { exact: !0, path: '/', component: d }), r.a.createElement(l.a, { path: '/store:storeId', component: E }), r.a.createElement(l.a, { component: g }))); }; a(32), Boolean(window.location.hostname === 'localhost' || window.location.hostname === '[::1]' || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)); Object(o.render)(r.a.createElement(O, null), document.getElementById('root')), 'serviceWorker' in navigator && navigator.serviceWorker.ready.then(((e) => { e.unregister(); }));
} }, [[22, 1, 2]]]);
// # sourceMappingURL=main.e5fee851.chunk.js.map
