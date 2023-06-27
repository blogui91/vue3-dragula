var B = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Le(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ve = function(t, r) {
  return Array.prototype.slice.call(t, r);
}, ke = typeof setImmediate == "function", Q;
ke ? Q = function(e) {
  setImmediate(e);
} : Q = function(e) {
  setTimeout(e, 0);
};
var ze = Q, Ge = ze, Je = function(t, r, n) {
  t && Ge(function() {
    t.apply(n || null, r || []);
  });
}, ce = Ve, Ke = Je, Ue = function(t, r) {
  var n = r || {}, a = {};
  return t === void 0 && (t = {}), t.on = function(o, s) {
    return a[o] ? a[o].push(s) : a[o] = [s], t;
  }, t.once = function(o, s) {
    return s._once = !0, t.on(o, s), t;
  }, t.off = function(o, s) {
    var c = arguments.length;
    if (c === 1)
      delete a[o];
    else if (c === 0)
      a = {};
    else {
      var d = a[o];
      if (!d)
        return t;
      d.splice(d.indexOf(s), 1);
    }
    return t;
  }, t.emit = function() {
    var o = ce(arguments);
    return t.emitterSnapshot(o.shift()).apply(this, o);
  }, t.emitterSnapshot = function(o) {
    var s = (a[o] || []).slice(0);
    return function() {
      var c = ce(arguments), d = this || t;
      if (o === "error" && n.throws !== !1 && !s.length)
        throw c.length === 1 ? c[0] : c;
      return s.forEach(function(b) {
        n.async ? Ke(b, c, d) : b.apply(d, c), b._once && t.off(o, b);
      }), t;
    };
  }, t;
}, we = B.CustomEvent;
function qe() {
  try {
    var e = new we("cat", { detail: { foo: "bar" } });
    return e.type === "cat" && e.detail.foo === "bar";
  } catch {
  }
  return !1;
}
var We = qe() ? we : (
  // IE >= 9
  typeof document < "u" && typeof document.createEvent == "function" ? function(t, r) {
    var n = document.createEvent("CustomEvent");
    return r ? n.initCustomEvent(t, r.bubbles, r.cancelable, r.detail) : n.initCustomEvent(t, !1, !1, void 0), n;
  } : (
    // IE <= 8
    function(t, r) {
      var n = document.createEventObject();
      return n.type = t, r ? (n.bubbles = !!r.bubbles, n.cancelable = !!r.cancelable, n.detail = r.detail) : (n.bubbles = !1, n.cancelable = !1, n.detail = void 0), n;
    }
  )
), ye = [], q = "", Qe = /^on/;
for (q in B)
  Qe.test(q) && ye.push(q.slice(2));
var Ze = ye, et = We, tt = Ze, j = B.document, Ce = rt, Se = at, A = [];
B.addEventListener || (Ce = it, Se = ot);
var nt = {
  add: Ce,
  remove: Se,
  fabricate: ut
};
function rt(e, t, r, n) {
  return e.addEventListener(t, r, n);
}
function it(e, t, r) {
  return e.attachEvent("on" + t, st(e, t, r));
}
function at(e, t, r, n) {
  return e.removeEventListener(t, r, n);
}
function ot(e, t, r) {
  var n = Me(e, t, r);
  if (n)
    return e.detachEvent("on" + t, n);
}
function ut(e, t, r) {
  var n = tt.indexOf(t) === -1 ? o() : a();
  e.dispatchEvent ? e.dispatchEvent(n) : e.fireEvent("on" + t, n);
  function a() {
    var s;
    return j.createEvent ? (s = j.createEvent("Event"), s.initEvent(t, !0, !0)) : j.createEventObject && (s = j.createEventObject()), s;
  }
  function o() {
    return new et(t, { detail: r });
  }
}
function lt(e, t, r) {
  return function(a) {
    var o = a || B.event;
    o.target = o.target || o.srcElement, o.preventDefault = o.preventDefault || function() {
      o.returnValue = !1;
    }, o.stopPropagation = o.stopPropagation || function() {
      o.cancelBubble = !0;
    }, o.which = o.which || o.keyCode, r.call(e, o);
  };
}
function st(e, t, r) {
  var n = Me(e, t, r) || lt(e, t, r);
  return A.push({
    wrapper: n,
    element: e,
    type: t,
    fn: r
  }), n;
}
function Me(e, t, r) {
  var n = ft(e, t, r);
  if (n) {
    var a = A[n].wrapper;
    return A.splice(n, 1), a;
  }
}
function ft(e, t, r) {
  var n, a;
  for (n = 0; n < A.length; n++)
    if (a = A[n], a.element === e && a.type === t && a.fn === r)
      return n;
}
var de = {}, ct = "(?:^|\\s)", dt = "(?:\\s|$)";
function Oe(e) {
  var t = de[e];
  return t ? t.lastIndex = 0 : de[e] = t = new RegExp(ct + e + dt, "g"), t;
}
function vt(e, t) {
  var r = e.className;
  r.length ? Oe(t).test(r) || (e.className += " " + t) : e.className = t;
}
function mt(e, t) {
  e.className = e.className.replace(Oe(t), " ").trim();
}
var gt = {
  add: vt,
  rm: mt
}, pt = Ue, D = nt, N = gt, F = document, O = F.documentElement;
function ht(e, t) {
  var r = arguments.length;
  r === 1 && Array.isArray(e) === !1 && (t = e, e = []);
  var n, a, o, s, c, d, p, b, M, g, L, I = null, P, l = t || {};
  l.moves === void 0 && (l.moves = pe), l.accepts === void 0 && (l.accepts = pe), l.invalid === void 0 && (l.invalid = Ye), l.containers === void 0 && (l.containers = e || []), l.isContainer === void 0 && (l.isContainer = Et), l.copy === void 0 && (l.copy = !1), l.copySortSource === void 0 && (l.copySortSource = !1), l.revertOnSpill === void 0 && (l.revertOnSpill = !1), l.removeOnSpill === void 0 && (l.removeOnSpill = !1), l.direction === void 0 && (l.direction = "vertical"), l.ignoreInputTextSelection === void 0 && (l.ignoreInputTextSelection = !0), l.mirrorContainer === void 0 && (l.mirrorContainer = F.body);
  var m = pt({
    containers: l.containers,
    start: Xe,
    end: re,
    cancel: ue,
    remove: oe,
    destroy: xe,
    canMove: Ie,
    dragging: !1
  });
  return l.removeOnSpill === !0 && m.on("over", De).on("out", Fe), Z(), m;
  function V(i) {
    return m.containers.indexOf(i) !== -1 || l.isContainer(i);
  }
  function Z(i) {
    var u = i ? "remove" : "add";
    $(O, u, "mousedown", Ne), $(O, u, "mouseup", G);
  }
  function k(i) {
    var u = i ? "remove" : "add";
    $(O, u, "mousemove", _e);
  }
  function ee(i) {
    var u = i ? "remove" : "add";
    D[u](O, "selectstart", te), D[u](O, "click", te);
  }
  function xe() {
    Z(!0), G({});
  }
  function te(i) {
    P && i.preventDefault();
  }
  function Ne(i) {
    d = i.clientX, p = i.clientY;
    var u = ve(i) !== 1 || i.metaKey || i.ctrlKey;
    if (!u) {
      var f = i.target, v = z(f);
      v && (P = v, k(), i.type === "mousedown" && (Ee(f) ? f.focus() : i.preventDefault()));
    }
  }
  function _e(i) {
    if (P) {
      if (ve(i) === 0) {
        G({});
        return;
      }
      if (!(i.clientX !== void 0 && Math.abs(i.clientX - d) <= (l.slideFactorX || 0) && i.clientY !== void 0 && Math.abs(i.clientY - p) <= (l.slideFactorY || 0))) {
        if (l.ignoreInputTextSelection) {
          var u = _("clientX", i) || 0, f = _("clientY", i) || 0, v = F.elementFromPoint(u, f);
          if (Ee(v))
            return;
        }
        var w = P;
        k(!0), ee(), re(), ne(w);
        var h = bt(o);
        s = _("pageX", i) - h.left, c = _("pageY", i) - h.top, N.add(g || o, "gu-transit"), Pe(), U(i);
      }
    }
  }
  function z(i) {
    if (!(m.dragging && n) && !V(i)) {
      for (var u = i; y(i) && V(y(i)) === !1; )
        if (l.invalid(i, u) || (i = y(i), !i))
          return;
      var f = y(i);
      if (f && !l.invalid(i, u)) {
        var v = l.moves(i, f, u, R(i));
        if (v)
          return {
            item: i,
            source: f
          };
      }
    }
  }
  function Ie(i) {
    return !!z(i);
  }
  function Xe(i) {
    var u = z(i);
    u && ne(u);
  }
  function ne(i) {
    Re(i.item, i.source) && (g = i.item.cloneNode(!0), m.emit("cloned", g, i.item, "copy")), a = i.source, o = i.item, b = M = R(i.item), m.dragging = !0, m.emit("drag", o, a);
  }
  function Ye() {
    return !1;
  }
  function re() {
    if (m.dragging) {
      var i = g || o;
      ae(i, y(i));
    }
  }
  function ie() {
    P = !1, k(!0), ee(!0);
  }
  function G(i) {
    if (ie(), !!m.dragging) {
      var u = g || o, f = _("clientX", i) || 0, v = _("clientY", i) || 0, w = ge(n, f, v), h = le(w, f, v);
      h && (g && l.copySortSource || !g || h !== a) ? ae(u, h) : l.removeOnSpill ? oe() : ue();
    }
  }
  function ae(i, u) {
    var f = y(i);
    g && l.copySortSource && u === a && f.removeChild(o), K(u) ? m.emit("cancel", i, a, a) : m.emit("drop", i, u, a, M), J();
  }
  function oe() {
    if (m.dragging) {
      var i = g || o, u = y(i);
      u && u.removeChild(i), m.emit(g ? "cancel" : "remove", i, u, a), J();
    }
  }
  function ue(i) {
    if (m.dragging) {
      var u = arguments.length > 0 ? i : l.revertOnSpill, f = g || o, v = y(f), w = K(v);
      w === !1 && u && (g ? v && v.removeChild(g) : a.insertBefore(f, b)), w || u ? m.emit("cancel", f, a, a) : m.emit("drop", f, v, a, M), J();
    }
  }
  function J() {
    var i = g || o;
    ie(), $e(), i && N.rm(i, "gu-transit"), L && clearTimeout(L), m.dragging = !1, I && m.emit("out", i, I, a), m.emit("dragend", i), a = o = g = b = M = L = I = null;
  }
  function K(i, u) {
    var f;
    return u !== void 0 ? f = u : n ? f = M : f = R(g || o), i === a && f === b;
  }
  function le(i, u, f) {
    for (var v = i; v && !w(); )
      v = y(v);
    return v;
    function w() {
      var h = V(v);
      if (h === !1)
        return !1;
      var Y = se(v, i), E = fe(v, Y, u, f), T = K(v, E);
      return T ? !0 : l.accepts(o, v, a, E);
    }
  }
  function U(i) {
    if (!n)
      return;
    i.preventDefault();
    var u = _("clientX", i) || 0, f = _("clientY", i) || 0, v = u - s, w = f - c;
    n.style.left = v + "px", n.style.top = w + "px";
    var h = g || o, Y = ge(n, u, f), E = le(Y, u, f), T = E !== null && E !== I;
    (T || E === null) && (je(), I = E, Ae());
    var C = y(h);
    if (E === a && g && !l.copySortSource) {
      C && C.removeChild(h);
      return;
    }
    var S, X = se(E, Y);
    if (X !== null)
      S = fe(E, X, u, f);
    else if (l.revertOnSpill === !0 && !g)
      S = b, E = a;
    else {
      g && C && C.removeChild(h);
      return;
    }
    (S === null && T || S !== h && S !== R(h)) && (M = S, E.insertBefore(h, S), m.emit("shadow", h, E, a));
    function x(He) {
      m.emit(He, h, I, a);
    }
    function Ae() {
      T && x("over");
    }
    function je() {
      I && x("out");
    }
  }
  function De(i) {
    N.rm(i, "gu-hide");
  }
  function Fe(i) {
    m.dragging && N.add(i, "gu-hide");
  }
  function Pe() {
    if (!n) {
      var i = o.getBoundingClientRect();
      n = o.cloneNode(!0), n.style.width = he(i) + "px", n.style.height = be(i) + "px", N.rm(n, "gu-transit"), N.add(n, "gu-mirror"), l.mirrorContainer.appendChild(n), $(O, "add", "mousemove", U), N.add(l.mirrorContainer, "gu-unselectable"), m.emit("cloned", n, o, "mirror");
    }
  }
  function $e() {
    n && (N.rm(l.mirrorContainer, "gu-unselectable"), $(O, "remove", "mousemove", U), y(n).removeChild(n), n = null);
  }
  function se(i, u) {
    for (var f = u; f !== i && y(f) !== i; )
      f = y(f);
    return f === O ? null : f;
  }
  function fe(i, u, f, v) {
    var w = l.direction === "horizontal", h = u !== i ? E() : Y();
    return h;
    function Y() {
      var C = i.children.length, S, X, x;
      for (S = 0; S < C; S++)
        if (X = i.children[S], x = X.getBoundingClientRect(), w && x.left + x.width / 2 > f || !w && x.top + x.height / 2 > v)
          return X;
      return null;
    }
    function E() {
      var C = u.getBoundingClientRect();
      return T(w ? f > C.left + he(C) / 2 : v > C.top + be(C) / 2);
    }
    function T(C) {
      return C ? R(u) : u;
    }
  }
  function Re(i, u) {
    return typeof l.copy == "boolean" ? l.copy : l.copy(i, u);
  }
}
function $(e, t, r, n) {
  var a = {
    mouseup: "touchend",
    mousedown: "touchstart",
    mousemove: "touchmove"
  }, o = {
    mouseup: "pointerup",
    mousedown: "pointerdown",
    mousemove: "pointermove"
  }, s = {
    mouseup: "MSPointerUp",
    mousedown: "MSPointerDown",
    mousemove: "MSPointerMove"
  };
  B.navigator.pointerEnabled ? D[t](e, o[r], n) : B.navigator.msPointerEnabled ? D[t](e, s[r], n) : (D[t](e, a[r], n), D[t](e, r, n));
}
function ve(e) {
  if (e.touches !== void 0)
    return e.touches.length;
  if (e.which !== void 0 && e.which !== 0)
    return e.which;
  if (e.buttons !== void 0)
    return e.buttons;
  var t = e.button;
  if (t !== void 0)
    return t & 1 ? 1 : t & 2 ? 3 : t & 4 ? 2 : 0;
}
function bt(e) {
  var t = e.getBoundingClientRect();
  return {
    left: t.left + me("scrollLeft", "pageXOffset"),
    top: t.top + me("scrollTop", "pageYOffset")
  };
}
function me(e, t) {
  return typeof B[t] < "u" ? B[t] : O.clientHeight ? O[e] : F.body[e];
}
function ge(e, t, r) {
  e = e || {};
  var n = e.className || "", a;
  return e.className += " gu-hide", a = F.elementFromPoint(t, r), e.className = n, a;
}
function Et() {
  return !1;
}
function pe() {
  return !0;
}
function he(e) {
  return e.width || e.right - e.left;
}
function be(e) {
  return e.height || e.bottom - e.top;
}
function y(e) {
  return e.parentNode === F ? null : e.parentNode;
}
function Ee(e) {
  return e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.tagName === "SELECT" || Be(e);
}
function Be(e) {
  return !e || e.contentEditable === "false" ? !1 : e.contentEditable === "true" ? !0 : Be(y(e));
}
function R(e) {
  return e.nextElementSibling || t();
  function t() {
    var r = e;
    do
      r = r.nextSibling;
    while (r && r.nodeType !== 1);
    return r;
  }
}
function wt(e) {
  return e.targetTouches && e.targetTouches.length ? e.targetTouches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e;
}
function _(e, t) {
  var r = wt(t), n = {
    pageX: "clientX",
    // IE8
    pageY: "clientY"
    // IE8
  };
  return e in n && !(e in r) && n[e] in r && (e = n[e]), r[e];
}
var yt = ht;
const H = /* @__PURE__ */ Le(yt);
function Ct(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, r) {
    var n = e.get(t);
    n ? n.push(r) : e.set(t, [r]);
  }, off: function(t, r) {
    var n = e.get(t);
    n && (r ? n.splice(n.indexOf(r) >>> 0, 1) : e.set(t, []));
  }, emit: function(t, r) {
    var n = e.get(t);
    n && n.slice().map(function(a) {
      a(r);
    }), (n = e.get("*")) && n.slice().map(function(a) {
      a(t, r);
    });
  } };
}
if (!H)
  throw new Error("[vue-dragula] cannot locate dragula.");
const W = window.requestAnimationFrame, St = W ? function(e) {
  W(() => {
    W(e);
  });
} : function(e) {
  window.setTimeout(e, 50);
};
class Mt {
  constructor(t) {
    this.bags = [], this.eventBus = new Ct(), this.events = [
      "cancel",
      "cloned",
      "drag",
      "dragend",
      "drop",
      "out",
      "over",
      "remove",
      "shadow",
      "dropModel",
      "removeModel"
    ];
  }
  add(t, r) {
    let n = this.find(t);
    if (n)
      throw new Error('Bag named: "' + t + '" already exists.');
    return n = {
      name: t,
      drake: r
    }, this.bags.push(n), r.models && this.handleModels(t, r), n.initEvents || this.setupEvents(n), n;
  }
  find(t) {
    let r = this.bags;
    for (var n = 0; n < r.length; n++)
      if (r[n].name === t)
        return r[n];
  }
  handleModels(t, r) {
    if (r.registered)
      return;
    let n, a, o, s;
    r.on("remove", (c, d, p) => {
      r.models && (s = this.findModelForContainer(p, r), s.splice(a, 1), r.cancel(!0), this.eventBus.emit("removeModel", [t, c, p, a]));
    }), r.on("drag", (c, d) => {
      n = c, a = this.domIndexOf(c, d);
    }), r.on("drop", (c, d, p) => {
      if (!(!r.models || !d)) {
        if (o = this.domIndexOf(c, d), s = this.findModelForContainer(p, r), d === p)
          s.splice(o, 0, s.splice(a, 1)[0]);
        else {
          let b = n === c, M = this.findModelForContainer(d, r), g = b ? s[a] : JSON.parse(JSON.stringify(s[a]));
          b && St(() => {
            s.splice(a, 1);
          }), M.splice(o, 0, g), r.cancel(!0);
        }
        this.eventBus.emit("dropModel", [t, c, d, p, o]);
      }
    }), r.registered = !0;
  }
  destroy(t) {
    let r = this.find(t);
    if (!r)
      return;
    let n = this.bags.indexOf(r);
    this.bags.splice(n, 1), r.drake.destroy();
  }
  setOptions(t, r) {
    let n = this.add(t, H(r));
    this.handleModels(t, n.drake);
  }
  setupEvents(t) {
    t.initEvents = !0;
    let r = this, n = (a) => {
      function o() {
        let s = Array.prototype.slice.call(arguments);
        r.eventBus.emit(a, [t.name].concat(s));
      }
      t.drake.on(a, o);
    };
    this.events.forEach(n);
  }
  domIndexOf(t, r) {
    return Array.prototype.indexOf.call(
      r.children,
      t
    );
  }
  findModelForContainer(t, r) {
    return (this.findModelContainerByContainer(t, r) || {}).model;
  }
  findModelContainerByContainer(t, r) {
    if (r.models)
      return r.models.find((n) => n.container === t);
  }
}
if (!H)
  throw new Error("[vue-dragula] cannot locate dragula.");
function Ot(e) {
  const t = new Mt(e);
  let r = "globalBag", n;
  e.vueDragula = {
    options: t.setOptions.bind(t),
    find: t.find.bind(t),
    eventBus: t.eventBus
  }, e.directive("dragula", {
    params: ["bag"],
    bind(a, o, s) {
      const c = s ? s.data.attrs.bag : this.params.bag;
      s || (a = this.el), c !== void 0 && c.length !== 0 && (r = c);
      const d = t.find(r);
      if (d) {
        n = d.drake, n.containers.push(a);
        return;
      }
      n = H({
        containers: [a]
      }), t.add(r, n), t.handleModels(r, n);
    },
    update(a, o, s, c) {
      const d = s ? o.value : a;
      if (!d)
        return;
      const p = s ? s.data.attrs.bag : this.params.bag;
      p !== void 0 && p.length !== 0 && (r = p), n = t.find(r).drake, n.models || (n.models = []), s || (a = this.el);
      let M = t.findModelContainerByContainer(a, n);
      M ? M.model = d : n.models.push({
        model: d,
        container: a
      });
    },
    unbind(a, o, s) {
      let c = "globalBag";
      const d = s ? s.data.attrs.bag : this.params.bag;
      s || (a = this.el), d !== void 0 && d.length !== 0 && (c = d);
      var p = t.find(c).drake;
      if (p) {
        var b = p.containers.indexOf(a);
        b > -1 && p.containers.splice(b, 1), p.containers.length === 0 && t.destroy(c);
      }
    }
  });
}
function Te(e, t = {}) {
  Te.installed && console.warn("[vue-dragula] already installed."), Ot(e);
}
Te.version = "2.0.0";
export {
  Te as default
};
