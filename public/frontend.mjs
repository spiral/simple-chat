function at(e, t) {
  const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
  for (let o = 0; o < s.length; o++)
    n[s[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
function Qs(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = Z(s) ? Xr(s) : Qs(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else {
    if (Z(e))
      return e;
    if (W(e))
      return e;
  }
}
const Yr = /;(?![^(]*\))/g, Qr = /:([^]+)/, Gr = /\/\*.*?\*\//gs;
function Xr(e) {
  const t = {};
  return e.replace(Gr, "").split(Yr).forEach((n) => {
    if (n) {
      const s = n.split(Qr);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function tn(e) {
  let t = "";
  if (Z(e))
    t = e;
  else if (P(e))
    for (let n = 0; n < e.length; n++) {
      const s = tn(e[n]);
      s && (t += s + " ");
    }
  else if (W(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Zr = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ec = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", tc = /* @__PURE__ */ at(Zr), nc = /* @__PURE__ */ at(ec), sc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", oc = /* @__PURE__ */ at(sc);
function _i(e) {
  return !!e || e === "";
}
const To = (e) => Z(e) ? e : e == null ? "" : P(e) || W(e) && (e.toString === Ei || !V(e.toString)) ? JSON.stringify(e, gi, 2) : String(e), gi = (e, t) => t && t.__v_isRef ? gi(e, t.value) : yt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, o]) => (n[`${s} =>`] = o, n), {})
} : bi(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : W(t) && !P(t) && !yi(t) ? String(t) : t, B = {}.NODE_ENV !== "production" ? Object.freeze({}) : {}, Ht = {}.NODE_ENV !== "production" ? Object.freeze([]) : [], ce = () => {
}, mi = () => !1, ic = /^on[^a-z]/, fn = (e) => ic.test(e), Ln = (e) => e.startsWith("onUpdate:"), ee = Object.assign, Gs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, rc = Object.prototype.hasOwnProperty, A = (e, t) => rc.call(e, t), P = Array.isArray, yt = (e) => zn(e) === "[object Map]", bi = (e) => zn(e) === "[object Set]", V = (e) => typeof e == "function", Z = (e) => typeof e == "string", Xs = (e) => typeof e == "symbol", W = (e) => e !== null && typeof e == "object", Zs = (e) => W(e) && V(e.then) && V(e.catch), Ei = Object.prototype.toString, zn = (e) => Ei.call(e), eo = (e) => zn(e).slice(8, -1), yi = (e) => zn(e) === "[object Object]", to = (e) => Z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Tn = /* @__PURE__ */ at(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), cc = /* @__PURE__ */ at("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), qn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, lc = /-(\w)/g, He = qn((e) => e.replace(lc, (t, n) => n ? n.toUpperCase() : "")), uc = /\B([A-Z])/g, Qe = qn((e) => e.replace(uc, "-$1").toLowerCase()), xt = qn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ht = qn((e) => e ? `on${xt(e)}` : ""), nn = (e, t) => !Object.is(e, t), At = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Fn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Ts = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Co;
const vi = () => Co || (Co = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Cs(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let xe;
class wi {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = xe, !t && xe && (this.index = (xe.scopes || (xe.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = xe;
      try {
        return xe = this, t();
      } finally {
        xe = n;
      }
    } else
      ({}).NODE_ENV !== "production" && Cs("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    xe = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    xe = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function ac(e) {
  return new wi(e);
}
function fc(e, t = xe) {
  t && t.active && t.effects.push(e);
}
function dc() {
  return xe;
}
const sn = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Oi = (e) => (e.w & lt) > 0, Ni = (e) => (e.n & lt) > 0, hc = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= lt;
}, pc = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const o = t[s];
      Oi(o) && !Ni(o) ? o.delete(e) : t[n++] = o, o.w &= ~lt, o.n &= ~lt;
    }
    t.length = n;
  }
}, xs = /* @__PURE__ */ new WeakMap();
let Gt = 0, lt = 1;
const Ds = 30;
let pe;
const vt = Symbol({}.NODE_ENV !== "production" ? "iterate" : ""), Ps = Symbol({}.NODE_ENV !== "production" ? "Map key iterate" : "");
class no {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, fc(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = pe, n = rt;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = pe, pe = this, rt = !0, lt = 1 << ++Gt, Gt <= Ds ? hc(this) : xo(this), this.fn();
    } finally {
      Gt <= Ds && pc(this), lt = 1 << --Gt, pe = this.parent, rt = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    pe === this ? this.deferStop = !0 : this.active && (xo(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function xo(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let rt = !0;
const Si = [];
function Pt() {
  Si.push(rt), rt = !1;
}
function Vt() {
  const e = Si.pop();
  rt = e === void 0 ? !0 : e;
}
function me(e, t, n) {
  if (rt && pe) {
    let s = xs.get(e);
    s || xs.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || s.set(n, o = sn());
    const i = {}.NODE_ENV !== "production" ? { effect: pe, target: e, type: t, key: n } : void 0;
    Vs(o, i);
  }
}
function Vs(e, t) {
  let n = !1;
  Gt <= Ds ? Ni(e) || (e.n |= lt, n = !Oi(e)) : n = !e.has(pe), n && (e.add(pe), pe.deps.push(e), {}.NODE_ENV !== "production" && pe.onTrack && pe.onTrack(Object.assign({ effect: pe }, t)));
}
function Ge(e, t, n, s, o, i) {
  const r = xs.get(e);
  if (!r)
    return;
  let c = [];
  if (t === "clear")
    c = [...r.values()];
  else if (n === "length" && P(e)) {
    const a = Number(s);
    r.forEach((h, d) => {
      (d === "length" || d >= a) && c.push(h);
    });
  } else
    switch (n !== void 0 && c.push(r.get(n)), t) {
      case "add":
        P(e) ? to(n) && c.push(r.get("length")) : (c.push(r.get(vt)), yt(e) && c.push(r.get(Ps)));
        break;
      case "delete":
        P(e) || (c.push(r.get(vt)), yt(e) && c.push(r.get(Ps)));
        break;
      case "set":
        yt(e) && c.push(r.get(vt));
        break;
    }
  const l = {}.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: s, oldValue: o, oldTarget: i } : void 0;
  if (c.length === 1)
    c[0] && ({}.NODE_ENV !== "production" ? Lt(c[0], l) : Lt(c[0]));
  else {
    const a = [];
    for (const h of c)
      h && a.push(...h);
    ({}).NODE_ENV !== "production" ? Lt(sn(a), l) : Lt(sn(a));
  }
}
function Lt(e, t) {
  const n = P(e) ? e : [...e];
  for (const s of n)
    s.computed && Do(s, t);
  for (const s of n)
    s.computed || Do(s, t);
}
function Do(e, t) {
  (e !== pe || e.allowRecurse) && ({}.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(ee({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const _c = /* @__PURE__ */ at("__proto__,__v_isRef,__isVue"), Ti = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Xs)
), gc = /* @__PURE__ */ Yn(), mc = /* @__PURE__ */ Yn(!1, !0), bc = /* @__PURE__ */ Yn(!0), Ec = /* @__PURE__ */ Yn(!0, !0), Po = /* @__PURE__ */ yc();
function yc() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = k(this);
      for (let i = 0, r = this.length; i < r; i++)
        me(s, "get", i + "");
      const o = s[t](...n);
      return o === -1 || o === !1 ? s[t](...n.map(k)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Pt();
      const s = k(this)[t].apply(this, n);
      return Vt(), s;
    };
  }), e;
}
function vc(e) {
  const t = k(this);
  return me(t, "has", e), t.hasOwnProperty(e);
}
function Yn(e = !1, t = !1) {
  return function(s, o, i) {
    if (o === "__v_isReactive")
      return !e;
    if (o === "__v_isReadonly")
      return e;
    if (o === "__v_isShallow")
      return t;
    if (o === "__v_raw" && i === (e ? t ? Ii : Ri : t ? ki : Vi).get(s))
      return s;
    const r = P(s);
    if (!e) {
      if (r && A(Po, o))
        return Reflect.get(Po, o, i);
      if (o === "hasOwnProperty")
        return vc;
    }
    const c = Reflect.get(s, o, i);
    return (Xs(o) ? Ti.has(o) : _c(o)) || (e || me(s, "get", o), t) ? c : oe(c) ? r && to(o) ? c : c.value : W(c) ? e ? ji(c) : oo(c) : c;
  };
}
const wc = /* @__PURE__ */ Ci(), Oc = /* @__PURE__ */ Ci(!0);
function Ci(e = !1) {
  return function(n, s, o, i) {
    let r = n[s];
    if (ut(r) && oe(r) && !oe(o))
      return !1;
    if (!e && (!Un(o) && !ut(o) && (r = k(r), o = k(o)), !P(n) && oe(r) && !oe(o)))
      return r.value = o, !0;
    const c = P(n) && to(s) ? Number(s) < n.length : A(n, s), l = Reflect.set(n, s, o, i);
    return n === k(i) && (c ? nn(o, r) && Ge(n, "set", s, o, r) : Ge(n, "add", s, o)), l;
  };
}
function Nc(e, t) {
  const n = A(e, t), s = e[t], o = Reflect.deleteProperty(e, t);
  return o && n && Ge(e, "delete", t, void 0, s), o;
}
function Sc(e, t) {
  const n = Reflect.has(e, t);
  return (!Xs(t) || !Ti.has(t)) && me(e, "has", t), n;
}
function Tc(e) {
  return me(e, "iterate", P(e) ? "length" : vt), Reflect.ownKeys(e);
}
const xi = {
  get: gc,
  set: wc,
  deleteProperty: Nc,
  has: Sc,
  ownKeys: Tc
}, Di = {
  get: bc,
  set(e, t) {
    return {}.NODE_ENV !== "production" && Cs(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return {}.NODE_ENV !== "production" && Cs(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, Cc = /* @__PURE__ */ ee({}, xi, {
  get: mc,
  set: Oc
}), xc = /* @__PURE__ */ ee({}, Di, {
  get: Ec
}), so = (e) => e, Qn = (e) => Reflect.getPrototypeOf(e);
function bn(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const o = k(e), i = k(t);
  n || (t !== i && me(o, "get", t), me(o, "get", i));
  const { has: r } = Qn(o), c = s ? so : n ? io : on;
  if (r.call(o, t))
    return c(e.get(t));
  if (r.call(o, i))
    return c(e.get(i));
  e !== o && e.get(t);
}
function En(e, t = !1) {
  const n = this.__v_raw, s = k(n), o = k(e);
  return t || (e !== o && me(s, "has", e), me(s, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function yn(e, t = !1) {
  return e = e.__v_raw, !t && me(k(e), "iterate", vt), Reflect.get(e, "size", e);
}
function Vo(e) {
  e = k(e);
  const t = k(this);
  return Qn(t).has.call(t, e) || (t.add(e), Ge(t, "add", e, e)), this;
}
function ko(e, t) {
  t = k(t);
  const n = k(this), { has: s, get: o } = Qn(n);
  let i = s.call(n, e);
  i ? {}.NODE_ENV !== "production" && Pi(n, s, e) : (e = k(e), i = s.call(n, e));
  const r = o.call(n, e);
  return n.set(e, t), i ? nn(t, r) && Ge(n, "set", e, t, r) : Ge(n, "add", e, t), this;
}
function Ro(e) {
  const t = k(this), { has: n, get: s } = Qn(t);
  let o = n.call(t, e);
  o ? {}.NODE_ENV !== "production" && Pi(t, n, e) : (e = k(e), o = n.call(t, e));
  const i = s ? s.call(t, e) : void 0, r = t.delete(e);
  return o && Ge(t, "delete", e, void 0, i), r;
}
function Io() {
  const e = k(this), t = e.size !== 0, n = {}.NODE_ENV !== "production" ? yt(e) ? new Map(e) : new Set(e) : void 0, s = e.clear();
  return t && Ge(e, "clear", void 0, void 0, n), s;
}
function vn(e, t) {
  return function(s, o) {
    const i = this, r = i.__v_raw, c = k(r), l = t ? so : e ? io : on;
    return !e && me(c, "iterate", vt), r.forEach((a, h) => s.call(o, l(a), l(h), i));
  };
}
function wn(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = k(o), r = yt(i), c = e === "entries" || e === Symbol.iterator && r, l = e === "keys" && r, a = o[e](...s), h = n ? so : t ? io : on;
    return !t && me(i, "iterate", l ? Ps : vt), {
      // iterator protocol
      next() {
        const { value: d, done: _ } = a.next();
        return _ ? { value: d, done: _ } : {
          value: c ? [h(d[0]), h(d[1])] : h(d),
          done: _
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function tt(e) {
  return function(...t) {
    if ({}.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${xt(e)} operation ${n}failed: target is readonly.`, k(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function Dc() {
  const e = {
    get(i) {
      return bn(this, i);
    },
    get size() {
      return yn(this);
    },
    has: En,
    add: Vo,
    set: ko,
    delete: Ro,
    clear: Io,
    forEach: vn(!1, !1)
  }, t = {
    get(i) {
      return bn(this, i, !1, !0);
    },
    get size() {
      return yn(this);
    },
    has: En,
    add: Vo,
    set: ko,
    delete: Ro,
    clear: Io,
    forEach: vn(!1, !0)
  }, n = {
    get(i) {
      return bn(this, i, !0);
    },
    get size() {
      return yn(this, !0);
    },
    has(i) {
      return En.call(this, i, !0);
    },
    add: tt(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: tt(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: tt(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: tt(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: vn(!0, !1)
  }, s = {
    get(i) {
      return bn(this, i, !0, !0);
    },
    get size() {
      return yn(this, !0);
    },
    has(i) {
      return En.call(this, i, !0);
    },
    add: tt(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: tt(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: tt(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: tt(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: vn(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    e[i] = wn(i, !1, !1), n[i] = wn(i, !0, !1), t[i] = wn(i, !1, !0), s[i] = wn(i, !0, !0);
  }), [
    e,
    n,
    t,
    s
  ];
}
const [Pc, Vc, kc, Rc] = /* @__PURE__ */ Dc();
function Gn(e, t) {
  const n = t ? e ? Rc : kc : e ? Vc : Pc;
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(A(n, o) && o in s ? n : s, o, i);
}
const Ic = {
  get: /* @__PURE__ */ Gn(!1, !1)
}, jc = {
  get: /* @__PURE__ */ Gn(!1, !0)
}, Ac = {
  get: /* @__PURE__ */ Gn(!0, !1)
}, Mc = {
  get: /* @__PURE__ */ Gn(!0, !0)
};
function Pi(e, t, n) {
  const s = k(n);
  if (s !== n && t.call(e, s)) {
    const o = eo(e);
    console.warn(`Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const Vi = /* @__PURE__ */ new WeakMap(), ki = /* @__PURE__ */ new WeakMap(), Ri = /* @__PURE__ */ new WeakMap(), Ii = /* @__PURE__ */ new WeakMap();
function $c(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Lc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : $c(eo(e));
}
function oo(e) {
  return ut(e) ? e : Xn(e, !1, xi, Ic, Vi);
}
function Fc(e) {
  return Xn(e, !1, Cc, jc, ki);
}
function ji(e) {
  return Xn(e, !0, Di, Ac, Ri);
}
function Ft(e) {
  return Xn(e, !0, xc, Mc, Ii);
}
function Xn(e, t, n, s, o) {
  if (!W(e))
    return {}.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const r = Lc(e);
  if (r === 0)
    return e;
  const c = new Proxy(e, r === 2 ? s : n);
  return o.set(e, c), c;
}
function wt(e) {
  return ut(e) ? wt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ut(e) {
  return !!(e && e.__v_isReadonly);
}
function Un(e) {
  return !!(e && e.__v_isShallow);
}
function ks(e) {
  return wt(e) || ut(e);
}
function k(e) {
  const t = e && e.__v_raw;
  return t ? k(t) : e;
}
function Zn(e) {
  return Fn(e, "__v_skip", !0), e;
}
const on = (e) => W(e) ? oo(e) : e, io = (e) => W(e) ? ji(e) : e;
function Ai(e) {
  rt && pe && (e = k(e), {}.NODE_ENV !== "production" ? Vs(e.dep || (e.dep = sn()), {
    target: e,
    type: "get",
    key: "value"
  }) : Vs(e.dep || (e.dep = sn())));
}
function Mi(e, t) {
  e = k(e);
  const n = e.dep;
  n && ({}.NODE_ENV !== "production" ? Lt(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : Lt(n));
}
function oe(e) {
  return !!(e && e.__v_isRef === !0);
}
function Uc(e) {
  return Hc(e, !1);
}
function Hc(e, t) {
  return oe(e) ? e : new Bc(e, t);
}
class Bc {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : k(t), this._value = n ? t : on(t);
  }
  get value() {
    return Ai(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Un(t) || ut(t);
    t = n ? t : k(t), nn(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : on(t), Mi(this, t));
  }
}
function $i(e) {
  return oe(e) ? e.value : e;
}
const Wc = {
  get: (e, t, n) => $i(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return oe(o) && !oe(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Li(e) {
  return wt(e) ? e : new Proxy(e, Wc);
}
var Fi;
class Kc {
  constructor(t, n, s, o) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Fi] = !1, this._dirty = !0, this.effect = new no(t, () => {
      this._dirty || (this._dirty = !0, Mi(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = s;
  }
  get value() {
    const t = k(this);
    return Ai(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Fi = "__v_isReadonly";
function Jc(e, t, n = !1) {
  let s, o;
  const i = V(e);
  i ? (s = e, o = {}.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : ce) : (s = e.get, o = e.set);
  const r = new Kc(s, o, i || !o, n);
  return {}.NODE_ENV !== "production" && t && !n && (r.effect.onTrack = t.onTrack, r.effect.onTrigger = t.onTrigger), r;
}
const Ot = [];
function Cn(e) {
  Ot.push(e);
}
function xn() {
  Ot.pop();
}
function y(e, ...t) {
  if ({}.NODE_ENV === "production")
    return;
  Pt();
  const n = Ot.length ? Ot[Ot.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = zc();
  if (s)
    Ye(s, n, 11, [
      e + t.join(""),
      n && n.proxy,
      o.map(({ vnode: i }) => `at <${rs(n, i.type)}>`).join(`
`),
      o
    ]);
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    o.length && i.push(`
`, ...qc(o)), console.warn(...i);
  }
  Vt();
}
function zc() {
  let e = Ot[Ot.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function qc(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Yc(n));
  }), t;
}
function Yc({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${rs(e.component, e.type, s)}`, i = ">" + n;
  return e.props ? [o, ...Qc(e.props), i] : [o + i];
}
function Qc(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...Ui(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ui(e, t, n) {
  return Z(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : oe(t) ? (t = Ui(e, k(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : V(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = k(t), n ? t : [`${e}=`, t]);
}
const ro = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [
    0
    /* ErrorCodes.SETUP_FUNCTION */
  ]: "setup function",
  [
    1
    /* ErrorCodes.RENDER_FUNCTION */
  ]: "render function",
  [
    2
    /* ErrorCodes.WATCH_GETTER */
  ]: "watcher getter",
  [
    3
    /* ErrorCodes.WATCH_CALLBACK */
  ]: "watcher callback",
  [
    4
    /* ErrorCodes.WATCH_CLEANUP */
  ]: "watcher cleanup function",
  [
    5
    /* ErrorCodes.NATIVE_EVENT_HANDLER */
  ]: "native event handler",
  [
    6
    /* ErrorCodes.COMPONENT_EVENT_HANDLER */
  ]: "component event handler",
  [
    7
    /* ErrorCodes.VNODE_HOOK */
  ]: "vnode hook",
  [
    8
    /* ErrorCodes.DIRECTIVE_HOOK */
  ]: "directive hook",
  [
    9
    /* ErrorCodes.TRANSITION_HOOK */
  ]: "transition hook",
  [
    10
    /* ErrorCodes.APP_ERROR_HANDLER */
  ]: "app errorHandler",
  [
    11
    /* ErrorCodes.APP_WARN_HANDLER */
  ]: "app warnHandler",
  [
    12
    /* ErrorCodes.FUNCTION_REF */
  ]: "ref function",
  [
    13
    /* ErrorCodes.ASYNC_COMPONENT_LOADER */
  ]: "async component loader",
  [
    14
    /* ErrorCodes.SCHEDULER */
  ]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function Ye(e, t, n, s) {
  let o;
  try {
    o = s ? e(...s) : e();
  } catch (i) {
    es(i, t, n);
  }
  return o;
}
function Se(e, t, n, s) {
  if (V(e)) {
    const i = Ye(e, t, n, s);
    return i && Zs(i) && i.catch((r) => {
      es(r, t, n);
    }), i;
  }
  const o = [];
  for (let i = 0; i < e.length; i++)
    o.push(Se(e[i], t, n, s));
  return o;
}
function es(e, t, n, s = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const r = t.proxy, c = {}.NODE_ENV !== "production" ? ro[n] : n;
    for (; i; ) {
      const a = i.ec;
      if (a) {
        for (let h = 0; h < a.length; h++)
          if (a[h](e, r, c) === !1)
            return;
      }
      i = i.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      Ye(l, null, 10, [e, r, c]);
      return;
    }
  }
  Gc(e, n, o, s);
}
function Gc(e, t, n, s = !0) {
  if ({}.NODE_ENV !== "production") {
    const o = ro[t];
    if (n && Cn(n), y(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && xn(), s)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let rn = !1, Rs = !1;
const fe = [];
let Le = 0;
const Bt = [];
let $e = null, st = 0;
const Hi = /* @__PURE__ */ Promise.resolve();
let co = null;
const Xc = 100;
function Zc(e) {
  const t = co || Hi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function el(e) {
  let t = Le + 1, n = fe.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    cn(fe[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function ts(e) {
  (!fe.length || !fe.includes(e, rn && e.allowRecurse ? Le + 1 : Le)) && (e.id == null ? fe.push(e) : fe.splice(el(e.id), 0, e), Bi());
}
function Bi() {
  !rn && !Rs && (Rs = !0, co = Hi.then(Ji));
}
function tl(e) {
  const t = fe.indexOf(e);
  t > Le && fe.splice(t, 1);
}
function Wi(e) {
  P(e) ? Bt.push(...e) : (!$e || !$e.includes(e, e.allowRecurse ? st + 1 : st)) && Bt.push(e), Bi();
}
function jo(e, t = rn ? Le + 1 : 0) {
  for ({}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < fe.length; t++) {
    const n = fe[t];
    if (n && n.pre) {
      if ({}.NODE_ENV !== "production" && lo(e, n))
        continue;
      fe.splice(t, 1), t--, n();
    }
  }
}
function Ki(e) {
  if (Bt.length) {
    const t = [...new Set(Bt)];
    if (Bt.length = 0, $e) {
      $e.push(...t);
      return;
    }
    for ($e = t, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), $e.sort((n, s) => cn(n) - cn(s)), st = 0; st < $e.length; st++)
      ({}).NODE_ENV !== "production" && lo(e, $e[st]) || $e[st]();
    $e = null, st = 0;
  }
}
const cn = (e) => e.id == null ? 1 / 0 : e.id, nl = (e, t) => {
  const n = cn(e) - cn(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Ji(e) {
  Rs = !1, rn = !0, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), fe.sort(nl);
  const t = {}.NODE_ENV !== "production" ? (n) => lo(e, n) : ce;
  try {
    for (Le = 0; Le < fe.length; Le++) {
      const n = fe[Le];
      if (n && n.active !== !1) {
        if ({}.NODE_ENV !== "production" && t(n))
          continue;
        Ye(
          n,
          null,
          14
          /* ErrorCodes.SCHEDULER */
        );
      }
    }
  } finally {
    Le = 0, fe.length = 0, Ki(e), rn = !1, co = null, (fe.length || Bt.length) && Ji(e);
  }
}
function lo(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Xc) {
      const s = t.ownerInstance, o = s && go(s.type);
      return y(`Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let Nt = !1;
const Mt = /* @__PURE__ */ new Set();
({}).NODE_ENV !== "production" && (vi().__VUE_HMR_RUNTIME__ = {
  createRecord: Es(zi),
  rerender: Es(il),
  reload: Es(rl)
});
const Dt = /* @__PURE__ */ new Map();
function sl(e) {
  const t = e.type.__hmrId;
  let n = Dt.get(t);
  n || (zi(t, e.type), n = Dt.get(t)), n.instances.add(e);
}
function ol(e) {
  Dt.get(e.type.__hmrId).instances.delete(e);
}
function zi(e, t) {
  return Dt.has(e) ? !1 : (Dt.set(e, {
    initialDef: Zt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Zt(e) {
  return Tr(e) ? e.__vccOpts : e;
}
function il(e, t) {
  const n = Dt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, Zt(s.type).render = t), s.renderCache = [], Nt = !0, s.update(), Nt = !1;
  }));
}
function rl(e, t) {
  const n = Dt.get(e);
  if (!n)
    return;
  t = Zt(t), Ao(n.initialDef, t);
  const s = [...n.instances];
  for (const o of s) {
    const i = Zt(o.type);
    Mt.has(i) || (i !== n.initialDef && Ao(i, t), Mt.add(i)), o.appContext.optionsCache.delete(o.type), o.ceReload ? (Mt.add(i), o.ceReload(t.styles), Mt.delete(i)) : o.parent ? ts(o.parent.update) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  Wi(() => {
    for (const o of s)
      Mt.delete(Zt(o.type));
  });
}
function Ao(e, t) {
  ee(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Es(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let Fe, Xt = [], Is = !1;
function dn(e, ...t) {
  Fe ? Fe.emit(e, ...t) : Is || Xt.push({ event: e, args: t });
}
function qi(e, t) {
  var n, s;
  Fe = e, Fe ? (Fe.enabled = !0, Xt.forEach(({ event: o, args: i }) => Fe.emit(o, ...i)), Xt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !(!((s = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || s === void 0) && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    qi(i, t);
  }), setTimeout(() => {
    Fe || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Is = !0, Xt = []);
  }, 3e3)) : (Is = !0, Xt = []);
}
function cl(e, t) {
  dn("app:init", e, t, {
    Fragment: ye,
    Text: pn,
    Comment: le,
    Static: Rn
  });
}
function ll(e) {
  dn("app:unmount", e);
}
const ul = /* @__PURE__ */ uo(
  "component:added"
  /* DevtoolsHooks.COMPONENT_ADDED */
), Yi = /* @__PURE__ */ uo(
  "component:updated"
  /* DevtoolsHooks.COMPONENT_UPDATED */
), al = /* @__PURE__ */ uo(
  "component:removed"
  /* DevtoolsHooks.COMPONENT_REMOVED */
), fl = (e) => {
  Fe && typeof Fe.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Fe.cleanupBuffer(e) && al(e);
};
function uo(e) {
  return (t) => {
    dn(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const dl = /* @__PURE__ */ Qi(
  "perf:start"
  /* DevtoolsHooks.PERFORMANCE_START */
), hl = /* @__PURE__ */ Qi(
  "perf:end"
  /* DevtoolsHooks.PERFORMANCE_END */
);
function Qi(e) {
  return (t, n, s) => {
    dn(e, t.appContext.app, t.uid, t, n, s);
  };
}
function pl(e, t, n) {
  dn("component:emit", e.appContext.app, e, t, n);
}
function _l(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || B;
  if ({}.NODE_ENV !== "production") {
    const { emitsOptions: h, propsOptions: [d] } = e;
    if (h)
      if (!(t in h))
        (!d || !(ht(t) in d)) && y(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ht(t)}" prop.`);
      else {
        const _ = h[t];
        V(_) && (_(...n) || y(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let o = n;
  const i = t.startsWith("update:"), r = i && t.slice(7);
  if (r && r in s) {
    const h = `${r === "modelValue" ? "model" : r}Modifiers`, { number: d, trim: _ } = s[h] || B;
    _ && (o = n.map((S) => Z(S) ? S.trim() : S)), d && (o = n.map(Ts));
  }
  if ({}.NODE_ENV !== "production" && pl(e, t, o), {}.NODE_ENV !== "production") {
    const h = t.toLowerCase();
    h !== t && s[ht(h)] && y(`Event "${h}" is emitted in component ${rs(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Qe(t)}" instead of "${t}".`);
  }
  let c, l = s[c = ht(t)] || // also try camelCase event handler (#2249)
  s[c = ht(He(t))];
  !l && i && (l = s[c = ht(Qe(t))]), l && Se(l, e, 6, o);
  const a = s[c + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Se(a, e, 6, o);
  }
}
function Gi(e, t, n = !1) {
  const s = t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let r = {}, c = !1;
  if (!V(e)) {
    const l = (a) => {
      const h = Gi(a, t, !0);
      h && (c = !0, ee(r, h));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !i && !c ? (W(e) && s.set(e, null), null) : (P(i) ? i.forEach((l) => r[l] = null) : ee(r, i), W(e) && s.set(e, r), r);
}
function ns(e, t) {
  return !e || !fn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), A(e, t[0].toLowerCase() + t.slice(1)) || A(e, Qe(t)) || A(e, t));
}
let ge = null, Xi = null;
function Hn(e) {
  const t = ge;
  return ge = e, Xi = e && e.type.__scopeId || null, t;
}
function gl(e, t = ge, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Yo(-1);
    const i = Hn(t);
    let r;
    try {
      r = e(...o);
    } finally {
      Hn(i), s._d && Yo(1);
    }
    return {}.NODE_ENV !== "production" && Yi(t), r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
let js = !1;
function Bn() {
  js = !0;
}
function ys(e) {
  const { type: t, vnode: n, proxy: s, withProxy: o, props: i, propsOptions: [r], slots: c, attrs: l, emit: a, render: h, renderCache: d, data: _, setupState: S, ctx: x, inheritAttrs: O } = e;
  let M, U;
  const G = Hn(e);
  ({}).NODE_ENV !== "production" && (js = !1);
  try {
    if (n.shapeFlag & 4) {
      const J = o || s;
      M = Pe(h.call(J, J, d, i, S, _, x)), U = l;
    } else {
      const J = t;
      ({}).NODE_ENV !== "production" && l === i && Bn(), M = Pe(J.length > 1 ? J(i, {}.NODE_ENV !== "production" ? {
        get attrs() {
          return Bn(), l;
        },
        slots: c,
        emit: a
      } : { attrs: l, slots: c, emit: a }) : J(
        i,
        null
        /* we know it doesn't need it */
      )), U = t.props ? l : bl(l);
    }
  } catch (J) {
    en.length = 0, es(
      J,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), M = ke(le);
  }
  let Y = M, I;
  if ({}.NODE_ENV !== "production" && M.patchFlag > 0 && M.patchFlag & 2048 && ([Y, I] = ml(M)), U && O !== !1) {
    const J = Object.keys(U), { shapeFlag: Re } = Y;
    if (J.length) {
      if (Re & 7)
        r && J.some(Ln) && (U = El(U, r)), Y = Be(Y, U);
      else if ({}.NODE_ENV !== "production" && !js && Y.type !== le) {
        const Ie = Object.keys(l), j = [], q = [];
        for (let Q = 0, ue = Ie.length; Q < ue; Q++) {
          const re = Ie[Q];
          fn(re) ? Ln(re) || j.push(re[2].toLowerCase() + re.slice(3)) : q.push(re);
        }
        q.length && y(`Extraneous non-props attributes (${q.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), j.length && y(`Extraneous non-emits event listeners (${j.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && ({}.NODE_ENV !== "production" && !Mo(Y) && y("Runtime directive used on component with non-element root node. The directives will not function as intended."), Y = Be(Y), Y.dirs = Y.dirs ? Y.dirs.concat(n.dirs) : n.dirs), n.transition && ({}.NODE_ENV !== "production" && !Mo(Y) && y("Component inside <Transition> renders non-element root node that cannot be animated."), Y.transition = n.transition), {}.NODE_ENV !== "production" && I ? I(Y) : M = Y, Hn(G), M;
}
const ml = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Zi(t);
  if (!s)
    return [e, void 0];
  const o = t.indexOf(s), i = n ? n.indexOf(s) : -1, r = (c) => {
    t[o] = c, n && (i > -1 ? n[i] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [Pe(s), r];
};
function Zi(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    if (po(s)) {
      if (s.type !== le || s.children === "v-if") {
        if (t)
          return;
        t = s;
      }
    } else
      return;
  }
  return t;
}
const bl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || fn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, El = (e, t) => {
  const n = {};
  for (const s in e)
    (!Ln(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Mo = (e) => e.shapeFlag & 7 || e.type === le;
function yl(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: r, children: c, patchFlag: l } = t, a = i.emitsOptions;
  if ({}.NODE_ENV !== "production" && (o || c) && Nt || t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return s ? $o(s, r, a) : !!r;
    if (l & 8) {
      const h = t.dynamicProps;
      for (let d = 0; d < h.length; d++) {
        const _ = h[d];
        if (r[_] !== s[_] && !ns(a, _))
          return !0;
      }
    }
  } else
    return (o || c) && (!c || !c.$stable) ? !0 : s === r ? !1 : s ? r ? $o(s, r, a) : !0 : !!r;
  return !1;
}
function $o(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const i = s[o];
    if (t[i] !== e[i] && !ns(n, i))
      return !0;
  }
  return !1;
}
function vl({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const wl = (e) => e.__isSuspense;
function Ol(e, t) {
  t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : Wi(e);
}
function Nl(e, t) {
  if (!X)
    ({}).NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = X.provides;
    const s = X.parent && X.parent.provides;
    s === n && (n = X.provides = Object.create(s)), n[e] = t;
  }
}
function Dn(e, t, n = !1) {
  const s = X || ge;
  if (s) {
    const o = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && V(t) ? t.call(s.proxy) : t;
    ({}).NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else
    ({}).NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
const On = {};
function Pn(e, t, n) {
  return {}.NODE_ENV !== "production" && !V(t) && y("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), er(e, t, n);
}
function er(e, t, { immediate: n, deep: s, flush: o, onTrack: i, onTrigger: r } = B) {
  ({}).NODE_ENV !== "production" && !t && (n !== void 0 && y('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), s !== void 0 && y('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const c = (I) => {
    y("Invalid watch source: ", I, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, l = dc() === (X == null ? void 0 : X.scope) ? X : null;
  let a, h = !1, d = !1;
  if (oe(e) ? (a = () => e.value, h = Un(e)) : wt(e) ? (a = () => e, s = !0) : P(e) ? (d = !0, h = e.some((I) => wt(I) || Un(I)), a = () => e.map((I) => {
    if (oe(I))
      return I.value;
    if (wt(I))
      return Et(I);
    if (V(I))
      return Ye(
        I,
        l,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
    ({}).NODE_ENV !== "production" && c(I);
  })) : V(e) ? t ? a = () => Ye(
    e,
    l,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : a = () => {
    if (!(l && l.isUnmounted))
      return _ && _(), Se(e, l, 3, [S]);
  } : (a = ce, {}.NODE_ENV !== "production" && c(e)), t && s) {
    const I = a;
    a = () => Et(I());
  }
  let _, S = (I) => {
    _ = G.onStop = () => {
      Ye(
        I,
        l,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, x;
  if (un)
    if (S = ce, t ? n && Se(t, l, 3, [
      a(),
      d ? [] : void 0,
      S
    ]) : a(), o === "sync") {
      const I = Iu();
      x = I.__watcherHandles || (I.__watcherHandles = []);
    } else
      return ce;
  let O = d ? new Array(e.length).fill(On) : On;
  const M = () => {
    if (G.active)
      if (t) {
        const I = G.run();
        (s || h || (d ? I.some((J, Re) => nn(J, O[Re])) : nn(I, O))) && (_ && _(), Se(t, l, 3, [
          I,
          // pass undefined as the old value when it's changed for the first time
          O === On ? void 0 : d && O[0] === On ? [] : O,
          S
        ]), O = I);
      } else
        G.run();
  };
  M.allowRecurse = !!t;
  let U;
  o === "sync" ? U = M : o === "post" ? U = () => Ee(M, l && l.suspense) : (M.pre = !0, l && (M.id = l.uid), U = () => ts(M));
  const G = new no(a, U);
  ({}).NODE_ENV !== "production" && (G.onTrack = i, G.onTrigger = r), t ? n ? M() : O = G.run() : o === "post" ? Ee(G.run.bind(G), l && l.suspense) : G.run();
  const Y = () => {
    G.stop(), l && l.scope && Gs(l.scope.effects, G);
  };
  return x && x.push(Y), Y;
}
function Sl(e, t, n) {
  const s = this.proxy, o = Z(e) ? e.includes(".") ? tr(s, e) : () => s[e] : e.bind(s, s);
  let i;
  V(t) ? i = t : (i = t.handler, n = t);
  const r = X;
  Jt(this);
  const c = er(o, i.bind(s), n);
  return r ? Jt(r) : Tt(), c;
}
function tr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
function Et(e, t) {
  if (!W(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), oe(e))
    Et(e.value, t);
  else if (P(e))
    for (let n = 0; n < e.length; n++)
      Et(e[n], t);
  else if (bi(e) || yt(e))
    e.forEach((n) => {
      Et(n, t);
    });
  else if (yi(e))
    for (const n in e)
      Et(e[n], t);
  return e;
}
function Tl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ir(() => {
    e.isMounted = !0;
  }), rr(() => {
    e.isUnmounting = !0;
  }), e;
}
const we = [Function, Array], Cl = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: we,
    onEnter: we,
    onAfterEnter: we,
    onEnterCancelled: we,
    // leave
    onBeforeLeave: we,
    onLeave: we,
    onAfterLeave: we,
    onLeaveCancelled: we,
    // appear
    onBeforeAppear: we,
    onAppear: we,
    onAfterAppear: we,
    onAppearCancelled: we
  },
  setup(e, { slots: t }) {
    const n = Su(), s = Tl();
    let o;
    return () => {
      const i = t.default && sr(t.default(), !0);
      if (!i || !i.length)
        return;
      let r = i[0];
      if (i.length > 1) {
        let O = !1;
        for (const M of i)
          if (M.type !== le) {
            if ({}.NODE_ENV !== "production" && O) {
              y("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            if (r = M, O = !0, {}.NODE_ENV === "production")
              break;
          }
      }
      const c = k(e), { mode: l } = c;
      if ({}.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && y(`invalid <transition> mode: ${l}`), s.isLeaving)
        return vs(r);
      const a = Lo(r);
      if (!a)
        return vs(r);
      const h = As(a, c, s, n);
      Ms(a, h);
      const d = n.subTree, _ = d && Lo(d);
      let S = !1;
      const { getTransitionKey: x } = a.type;
      if (x) {
        const O = x();
        o === void 0 ? o = O : O !== o && (o = O, S = !0);
      }
      if (_ && _.type !== le && (!gt(a, _) || S)) {
        const O = As(_, c, s, n);
        if (Ms(_, O), l === "out-in")
          return s.isLeaving = !0, O.afterLeave = () => {
            s.isLeaving = !1, n.update.active !== !1 && n.update();
          }, vs(r);
        l === "in-out" && a.type !== le && (O.delayLeave = (M, U, G) => {
          const Y = nr(s, _);
          Y[String(_.key)] = _, M._leaveCb = () => {
            U(), M._leaveCb = void 0, delete h.delayedLeave;
          }, h.delayedLeave = G;
        });
      }
      return r;
    };
  }
}, xl = Cl;
function nr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function As(e, t, n, s) {
  const { appear: o, mode: i, persisted: r = !1, onBeforeEnter: c, onEnter: l, onAfterEnter: a, onEnterCancelled: h, onBeforeLeave: d, onLeave: _, onAfterLeave: S, onLeaveCancelled: x, onBeforeAppear: O, onAppear: M, onAfterAppear: U, onAppearCancelled: G } = t, Y = String(e.key), I = nr(n, e), J = (j, q) => {
    j && Se(j, s, 9, q);
  }, Re = (j, q) => {
    const Q = q[1];
    J(j, q), P(j) ? j.every((ue) => ue.length <= 1) && Q() : j.length <= 1 && Q();
  }, Ie = {
    mode: i,
    persisted: r,
    beforeEnter(j) {
      let q = c;
      if (!n.isMounted)
        if (o)
          q = O || c;
        else
          return;
      j._leaveCb && j._leaveCb(
        !0
        /* cancelled */
      );
      const Q = I[Y];
      Q && gt(e, Q) && Q.el._leaveCb && Q.el._leaveCb(), J(q, [j]);
    },
    enter(j) {
      let q = l, Q = a, ue = h;
      if (!n.isMounted)
        if (o)
          q = M || l, Q = U || a, ue = G || h;
        else
          return;
      let re = !1;
      const We = j._enterCb = (gn) => {
        re || (re = !0, gn ? J(ue, [j]) : J(Q, [j]), Ie.delayedLeave && Ie.delayedLeave(), j._enterCb = void 0);
      };
      q ? Re(q, [j, We]) : We();
    },
    leave(j, q) {
      const Q = String(e.key);
      if (j._enterCb && j._enterCb(
        !0
        /* cancelled */
      ), n.isUnmounting)
        return q();
      J(d, [j]);
      let ue = !1;
      const re = j._leaveCb = (We) => {
        ue || (ue = !0, q(), We ? J(x, [j]) : J(S, [j]), j._leaveCb = void 0, I[Q] === e && delete I[Q]);
      };
      I[Q] = e, _ ? Re(_, [j, re]) : re();
    },
    clone(j) {
      return As(j, t, n, s);
    }
  };
  return Ie;
}
function vs(e) {
  if (hn(e))
    return e = Be(e), e.children = null, e;
}
function Lo(e) {
  return hn(e) ? e.children ? e.children[0] : void 0 : e;
}
function Ms(e, t) {
  e.shapeFlag & 6 && e.component ? Ms(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function sr(e, t = !1, n) {
  let s = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const c = n == null ? r.key : String(n) + String(r.key != null ? r.key : i);
    r.type === ye ? (r.patchFlag & 128 && o++, s = s.concat(sr(r.children, t, c))) : (t || r.type !== le) && s.push(c != null ? Be(r, { key: c }) : r);
  }
  if (o > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
const Vn = (e) => !!e.type.__asyncLoader, hn = (e) => e.type.__isKeepAlive;
function Dl(e, t) {
  or(e, "a", t);
}
function Pl(e, t) {
  or(e, "da", t);
}
function or(e, t, n = X) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (ss(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      hn(o.parent.vnode) && Vl(s, t, n, o), o = o.parent;
  }
}
function Vl(e, t, n, s) {
  const o = ss(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  cr(() => {
    Gs(s[t], o);
  }, n);
}
function ss(e, t, n = X, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...r) => {
      if (n.isUnmounted)
        return;
      Pt(), Jt(n);
      const c = Se(t, n, e, r);
      return Tt(), Vt(), c;
    });
    return s ? o.unshift(i) : o.push(i), i;
  } else if ({}.NODE_ENV !== "production") {
    const o = ht(ro[e].replace(/ hook$/, ""));
    y(`${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Xe = (e) => (t, n = X) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!un || e === "sp") && ss(e, (...s) => t(...s), n)
), kl = Xe(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), ir = Xe(
  "m"
  /* LifecycleHooks.MOUNTED */
), Rl = Xe(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), Il = Xe(
  "u"
  /* LifecycleHooks.UPDATED */
), rr = Xe(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), cr = Xe(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), jl = Xe(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), Al = Xe(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), Ml = Xe(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function $l(e, t = X) {
  ss("ec", e, t);
}
function lr(e) {
  cc(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function Ll(e, t) {
  const n = ge;
  if (n === null)
    return {}.NODE_ENV !== "production" && y("withDirectives can only be used inside render functions."), e;
  const s = is(n) || n.proxy, o = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, c, l, a = B] = t[i];
    r && (V(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Et(c), o.push({
      dir: r,
      instance: s,
      value: c,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function ft(e, t, n, s) {
  const o = e.dirs, i = t && t.dirs;
  for (let r = 0; r < o.length; r++) {
    const c = o[r];
    i && (c.oldValue = i[r].value);
    let l = c.dir[s];
    l && (Pt(), Se(l, n, 8, [
      e.el,
      c,
      e,
      t
    ]), Vt());
  }
}
const $s = "components";
function Fo(e, t) {
  return Ul($s, e, !0, t) || e;
}
const Fl = Symbol();
function Ul(e, t, n = !0, s = !1) {
  const o = ge || X;
  if (o) {
    const i = o.type;
    if (e === $s) {
      const c = go(
        i,
        !1
        /* do not include inferred name to avoid breaking existing code */
      );
      if (c && (c === t || c === He(t) || c === xt(He(t))))
        return i;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      Uo(o[e] || i[e], t) || // global registration
      Uo(o.appContext[e], t)
    );
    if (!r && s)
      return i;
    if ({}.NODE_ENV !== "production" && n && !r) {
      const c = e === $s ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      y(`Failed to resolve ${e.slice(0, -1)}: ${t}${c}`);
    }
    return r;
  } else
    ({}).NODE_ENV !== "production" && y(`resolve${xt(e.slice(0, -1))} can only be used in render() or setup().`);
}
function Uo(e, t) {
  return e && (e[t] || e[He(t)] || e[xt(He(t))]);
}
function Hl(e, t, n, s) {
  let o;
  const i = n && n[s];
  if (P(e) || Z(e)) {
    o = new Array(e.length);
    for (let r = 0, c = e.length; r < c; r++)
      o[r] = t(e[r], r, void 0, i && i[r]);
  } else if (typeof e == "number") {
    ({}).NODE_ENV !== "production" && !Number.isInteger(e) && y(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let r = 0; r < e; r++)
      o[r] = t(r + 1, r, void 0, i && i[r]);
  } else if (W(e))
    if (e[Symbol.iterator])
      o = Array.from(e, (r, c) => t(r, c, void 0, i && i[c]));
    else {
      const r = Object.keys(e);
      o = new Array(r.length);
      for (let c = 0, l = r.length; c < l; c++) {
        const a = r[c];
        o[c] = t(e[a], a, c, i && i[c]);
      }
    }
  else
    o = [];
  return n && (n[s] = o), o;
}
const Ls = (e) => e ? Or(e) ? is(e) || e.proxy : Ls(e.parent) : null, St = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ee(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => ({}).NODE_ENV !== "production" ? Ft(e.props) : e.props,
    $attrs: (e) => ({}).NODE_ENV !== "production" ? Ft(e.attrs) : e.attrs,
    $slots: (e) => ({}).NODE_ENV !== "production" ? Ft(e.slots) : e.slots,
    $refs: (e) => ({}).NODE_ENV !== "production" ? Ft(e.refs) : e.refs,
    $parent: (e) => Ls(e.parent),
    $root: (e) => Ls(e.root),
    $emit: (e) => e.emit,
    $options: (e) => fo(e),
    $forceUpdate: (e) => e.f || (e.f = () => ts(e.update)),
    $nextTick: (e) => e.n || (e.n = Zc.bind(e.proxy)),
    $watch: (e) => Sl.bind(e)
  })
), ao = (e) => e === "_" || e === "$", ws = (e, t) => e !== B && !e.__isScriptSetup && A(e, t), ur = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: o, props: i, accessCache: r, type: c, appContext: l } = e;
    if ({}.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let a;
    if (t[0] !== "$") {
      const S = r[t];
      if (S !== void 0)
        switch (S) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (ws(s, t))
          return r[t] = 1, s[t];
        if (o !== B && A(o, t))
          return r[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && A(a, t)
        )
          return r[t] = 3, i[t];
        if (n !== B && A(n, t))
          return r[t] = 4, n[t];
        Fs && (r[t] = 0);
      }
    }
    const h = St[t];
    let d, _;
    if (h)
      return t === "$attrs" && (me(e, "get", t), {}.NODE_ENV !== "production" && Bn()), h(e);
    if (
      // css module (injected by vue-loader)
      (d = c.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== B && A(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      _ = l.config.globalProperties, A(_, t)
    )
      return _[t];
    ({}).NODE_ENV !== "production" && ge && (!Z(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== B && ao(t[0]) && A(o, t) ? y(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === ge && y(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return ws(o, t) ? (o[t] = n, !0) : {}.NODE_ENV !== "production" && o.__isScriptSetup && A(o, t) ? (y(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== B && A(s, t) ? (s[t] = n, !0) : A(e.props, t) ? ({}.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? ({}.NODE_ENV !== "production" && y(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : ({}.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: i } }, r) {
    let c;
    return !!n[r] || e !== B && A(e, r) || ws(t, r) || (c = i[0]) && A(c, r) || A(s, r) || A(St, r) || A(o.config.globalProperties, r);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : A(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
({}).NODE_ENV !== "production" && (ur.ownKeys = (e) => (y("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function Bl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(St).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => St[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ce
    });
  }), t;
}
function Wl(e) {
  const { ctx: t, propsOptions: [n] } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: ce
    });
  });
}
function Kl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(k(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (ao(s[0])) {
        y(`setup() return property ${JSON.stringify(s)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, s, {
        enumerable: !0,
        configurable: !0,
        get: () => n[s],
        set: ce
      });
    }
  });
}
function Jl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Fs = !0;
function zl(e) {
  const t = fo(e), n = e.proxy, s = e.ctx;
  Fs = !1, t.beforeCreate && Ho(
    t.beforeCreate,
    e,
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  );
  const {
    // state
    data: o,
    computed: i,
    methods: r,
    watch: c,
    provide: l,
    inject: a,
    // lifecycle
    created: h,
    beforeMount: d,
    mounted: _,
    beforeUpdate: S,
    updated: x,
    activated: O,
    deactivated: M,
    beforeDestroy: U,
    beforeUnmount: G,
    destroyed: Y,
    unmounted: I,
    render: J,
    renderTracked: Re,
    renderTriggered: Ie,
    errorCaptured: j,
    serverPrefetch: q,
    // public API
    expose: Q,
    inheritAttrs: ue,
    // assets
    components: re,
    directives: We,
    filters: gn
  } = t, Ze = {}.NODE_ENV !== "production" ? Jl() : null;
  if ({}.NODE_ENV !== "production") {
    const [L] = e.propsOptions;
    if (L)
      for (const F in L)
        Ze("Props", F);
  }
  if (a && ql(a, s, Ze, e.appContext.config.unwrapInjectedRef), r)
    for (const L in r) {
      const F = r[L];
      V(F) ? ({}.NODE_ENV !== "production" ? Object.defineProperty(s, L, {
        value: F.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[L] = F.bind(n), {}.NODE_ENV !== "production" && Ze("Methods", L)) : {}.NODE_ENV !== "production" && y(`Method "${L}" has type "${typeof F}" in the component definition. Did you reference the function correctly?`);
    }
  if (o) {
    ({}).NODE_ENV !== "production" && !V(o) && y("The data option must be a function. Plain object usage is no longer supported.");
    const L = o.call(n, n);
    if ({}.NODE_ENV !== "production" && Zs(L) && y("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !W(L))
      ({}).NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = oo(L), {}.NODE_ENV !== "production")
      for (const F in L)
        Ze("Data", F), ao(F[0]) || Object.defineProperty(s, F, {
          configurable: !0,
          enumerable: !0,
          get: () => L[F],
          set: ce
        });
  }
  if (Fs = !0, i)
    for (const L in i) {
      const F = i[L], je = V(F) ? F.bind(n, n) : V(F.get) ? F.get.bind(n, n) : ce;
      ({}).NODE_ENV !== "production" && je === ce && y(`Computed property "${L}" has no getter.`);
      const _s = !V(F) && V(F.set) ? F.set.bind(n) : {}.NODE_ENV !== "production" ? () => {
        y(`Write operation failed: computed property "${L}" is readonly.`);
      } : ce, qt = ku({
        get: je,
        set: _s
      });
      Object.defineProperty(s, L, {
        enumerable: !0,
        configurable: !0,
        get: () => qt.value,
        set: (kt) => qt.value = kt
      }), {}.NODE_ENV !== "production" && Ze("Computed", L);
    }
  if (c)
    for (const L in c)
      ar(c[L], s, n, L);
  if (l) {
    const L = V(l) ? l.call(n) : l;
    Reflect.ownKeys(L).forEach((F) => {
      Nl(F, L[F]);
    });
  }
  h && Ho(
    h,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function be(L, F) {
    P(F) ? F.forEach((je) => L(je.bind(n))) : F && L(F.bind(n));
  }
  if (be(kl, d), be(ir, _), be(Rl, S), be(Il, x), be(Dl, O), be(Pl, M), be($l, j), be(Ml, Re), be(Al, Ie), be(rr, G), be(cr, I), be(jl, q), P(Q))
    if (Q.length) {
      const L = e.exposed || (e.exposed = {});
      Q.forEach((F) => {
        Object.defineProperty(L, F, {
          get: () => n[F],
          set: (je) => n[F] = je
        });
      });
    } else
      e.exposed || (e.exposed = {});
  J && e.render === ce && (e.render = J), ue != null && (e.inheritAttrs = ue), re && (e.components = re), We && (e.directives = We);
}
function ql(e, t, n = ce, s = !1) {
  P(e) && (e = Us(e));
  for (const o in e) {
    const i = e[o];
    let r;
    W(i) ? "default" in i ? r = Dn(
      i.from || o,
      i.default,
      !0
      /* treat default function as factory */
    ) : r = Dn(i.from || o) : r = Dn(i), oe(r) ? s ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : ({}.NODE_ENV !== "production" && y(`injected property "${o}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[o] = r) : t[o] = r, {}.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Ho(e, t, n) {
  Se(P(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ar(e, t, n, s) {
  const o = s.includes(".") ? tr(n, s) : () => n[s];
  if (Z(e)) {
    const i = t[e];
    V(i) ? Pn(o, i) : {}.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, i);
  } else if (V(e))
    Pn(o, e.bind(n));
  else if (W(e))
    if (P(e))
      e.forEach((i) => ar(i, t, n, s));
    else {
      const i = V(e.handler) ? e.handler.bind(n) : t[e.handler];
      V(i) ? Pn(o, i, e) : {}.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else
    ({}).NODE_ENV !== "production" && y(`Invalid watch option: "${s}"`, e);
}
function fo(e) {
  const t = e.type, { mixins: n, extends: s } = t, { mixins: o, optionsCache: i, config: { optionMergeStrategies: r } } = e.appContext, c = i.get(t);
  let l;
  return c ? l = c : !o.length && !n && !s ? l = t : (l = {}, o.length && o.forEach((a) => Wn(l, a, r, !0)), Wn(l, t, r)), W(t) && i.set(t, l), l;
}
function Wn(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && Wn(e, i, n, !0), o && o.forEach((r) => Wn(e, r, n, !0));
  for (const r in t)
    if (s && r === "expose")
      ({}).NODE_ENV !== "production" && y('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const c = Yl[r] || n && n[r];
      e[r] = c ? c(e[r], t[r]) : t[r];
    }
  return e;
}
const Yl = {
  data: Bo,
  props: pt,
  emits: pt,
  // objects
  methods: pt,
  computed: pt,
  // lifecycle
  beforeCreate: he,
  created: he,
  beforeMount: he,
  mounted: he,
  beforeUpdate: he,
  updated: he,
  beforeDestroy: he,
  beforeUnmount: he,
  destroyed: he,
  unmounted: he,
  activated: he,
  deactivated: he,
  errorCaptured: he,
  serverPrefetch: he,
  // assets
  components: pt,
  directives: pt,
  // watch
  watch: Gl,
  // provide / inject
  provide: Bo,
  inject: Ql
};
function Bo(e, t) {
  return t ? e ? function() {
    return ee(V(e) ? e.call(this, this) : e, V(t) ? t.call(this, this) : t);
  } : t : e;
}
function Ql(e, t) {
  return pt(Us(e), Us(t));
}
function Us(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function he(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function pt(e, t) {
  return e ? ee(ee(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function Gl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = ee(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = he(e[s], t[s]);
  return n;
}
function Xl(e, t, n, s = !1) {
  const o = {}, i = {};
  Fn(i, os, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), fr(e, t, o, i);
  for (const r in e.propsOptions[0])
    r in o || (o[r] = void 0);
  ({}).NODE_ENV !== "production" && hr(t || {}, o, e), n ? e.props = s ? o : Fc(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function Zl(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function eu(e, t, n, s) {
  const { props: o, attrs: i, vnode: { patchFlag: r } } = e, c = k(o), [l] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !({}.NODE_ENV !== "production" && Zl(e)) && (s || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const h = e.vnode.dynamicProps;
      for (let d = 0; d < h.length; d++) {
        let _ = h[d];
        if (ns(e.emitsOptions, _))
          continue;
        const S = t[_];
        if (l)
          if (A(i, _))
            S !== i[_] && (i[_] = S, a = !0);
          else {
            const x = He(_);
            o[x] = Hs(
              l,
              c,
              x,
              S,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          S !== i[_] && (i[_] = S, a = !0);
      }
    }
  } else {
    fr(e, t, o, i) && (a = !0);
    let h;
    for (const d in c)
      (!t || // for camelCase
      !A(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = Qe(d)) === d || !A(t, h))) && (l ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[h] !== void 0) && (o[d] = Hs(
        l,
        c,
        d,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete o[d]);
    if (i !== c)
      for (const d in i)
        (!t || !A(t, d)) && (delete i[d], a = !0);
  }
  a && Ge(e, "set", "$attrs"), {}.NODE_ENV !== "production" && hr(t || {}, o, e);
}
function fr(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let r = !1, c;
  if (t)
    for (let l in t) {
      if (Tn(l))
        continue;
      const a = t[l];
      let h;
      o && A(o, h = He(l)) ? !i || !i.includes(h) ? n[h] = a : (c || (c = {}))[h] = a : ns(e.emitsOptions, l) || (!(l in s) || a !== s[l]) && (s[l] = a, r = !0);
    }
  if (i) {
    const l = k(n), a = c || B;
    for (let h = 0; h < i.length; h++) {
      const d = i[h];
      n[d] = Hs(o, l, d, a[d], e, !A(a, d));
    }
  }
  return r;
}
function Hs(e, t, n, s, o, i) {
  const r = e[n];
  if (r != null) {
    const c = A(r, "default");
    if (c && s === void 0) {
      const l = r.default;
      if (r.type !== Function && V(l)) {
        const { propsDefaults: a } = o;
        n in a ? s = a[n] : (Jt(o), s = a[n] = l.call(null, t), Tt());
      } else
        s = l;
    }
    r[
      0
      /* BooleanFlags.shouldCast */
    ] && (i && !c ? s = !1 : r[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (s === "" || s === Qe(n)) && (s = !0));
  }
  return s;
}
function dr(e, t, n = !1) {
  const s = t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, r = {}, c = [];
  let l = !1;
  if (!V(e)) {
    const h = (d) => {
      l = !0;
      const [_, S] = dr(d, t, !0);
      ee(r, _), S && c.push(...S);
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!i && !l)
    return W(e) && s.set(e, Ht), Ht;
  if (P(i))
    for (let h = 0; h < i.length; h++) {
      ({}).NODE_ENV !== "production" && !Z(i[h]) && y("props must be strings when using array syntax.", i[h]);
      const d = He(i[h]);
      Wo(d) && (r[d] = B);
    }
  else if (i) {
    ({}).NODE_ENV !== "production" && !W(i) && y("invalid props options", i);
    for (const h in i) {
      const d = He(h);
      if (Wo(d)) {
        const _ = i[h], S = r[d] = P(_) || V(_) ? { type: _ } : Object.assign({}, _);
        if (S) {
          const x = Jo(Boolean, S.type), O = Jo(String, S.type);
          S[
            0
            /* BooleanFlags.shouldCast */
          ] = x > -1, S[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = O < 0 || x < O, (x > -1 || A(S, "default")) && c.push(d);
        }
      }
    }
  }
  const a = [r, c];
  return W(e) && s.set(e, a), a;
}
function Wo(e) {
  return e[0] !== "$" ? !0 : ({}.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Bs(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Ko(e, t) {
  return Bs(e) === Bs(t);
}
function Jo(e, t) {
  return P(t) ? t.findIndex((n) => Ko(n, e)) : V(t) && Ko(t, e) ? 0 : -1;
}
function hr(e, t, n) {
  const s = k(t), o = n.propsOptions[0];
  for (const i in o) {
    let r = o[i];
    r != null && tu(i, s[i], r, !A(e, i) && !A(e, Qe(i)));
  }
}
function tu(e, t, n, s) {
  const { type: o, required: i, validator: r } = n;
  if (i && s) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (o != null && o !== !0) {
      let c = !1;
      const l = P(o) ? o : [o], a = [];
      for (let h = 0; h < l.length && !c; h++) {
        const { valid: d, expectedType: _ } = su(t, l[h]);
        a.push(_ || ""), c = d;
      }
      if (!c) {
        y(ou(e, t, a));
        return;
      }
    }
    r && !r(t) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const nu = /* @__PURE__ */ at("String,Number,Boolean,Function,Symbol,BigInt");
function su(e, t) {
  let n;
  const s = Bs(t);
  if (nu(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else
    s === "Object" ? n = W(e) : s === "Array" ? n = P(e) : s === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function ou(e, t, n) {
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(xt).join(" | ")}`;
  const o = n[0], i = eo(t), r = zo(t, o), c = zo(t, i);
  return n.length === 1 && qo(o) && !iu(o, i) && (s += ` with value ${r}`), s += `, got ${i} `, qo(i) && (s += `with value ${c}.`), s;
}
function zo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function qo(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function iu(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const pr = (e) => e[0] === "_" || e === "$stable", ho = (e) => P(e) ? e.map(Pe) : [Pe(e)], ru = (e, t, n) => {
  if (t._n)
    return t;
  const s = gl((...o) => ({}.NODE_ENV !== "production" && X && y(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), ho(t(...o))), n);
  return s._c = !1, s;
}, _r = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (pr(o))
      continue;
    const i = e[o];
    if (V(i))
      t[o] = ru(o, i, s);
    else if (i != null) {
      ({}).NODE_ENV !== "production" && y(`Non-function value encountered for slot "${o}". Prefer function slots for better performance.`);
      const r = ho(i);
      t[o] = () => r;
    }
  }
}, gr = (e, t) => {
  ({}).NODE_ENV !== "production" && !hn(e.vnode) && y("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = ho(t);
  e.slots.default = () => n;
}, cu = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = k(t), Fn(t, "_", n)) : _r(t, e.slots = {});
  } else
    e.slots = {}, t && gr(e, t);
  Fn(e.slots, os, 1);
}, lu = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, r = B;
  if (s.shapeFlag & 32) {
    const c = t._;
    c ? {}.NODE_ENV !== "production" && Nt ? ee(o, t) : n && c === 1 ? i = !1 : (ee(o, t), !n && c === 1 && delete o._) : (i = !t.$stable, _r(t, o)), r = t;
  } else
    t && (gr(e, t), r = { default: 1 });
  if (i)
    for (const c in o)
      !pr(c) && !(c in r) && delete o[c];
};
function mr() {
  return {
    app: null,
    config: {
      isNativeTag: mi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uu = 0;
function au(e, t) {
  return function(s, o = null) {
    V(s) || (s = Object.assign({}, s)), o != null && !W(o) && ({}.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), o = null);
    const i = mr(), r = /* @__PURE__ */ new Set();
    let c = !1;
    const l = i.app = {
      _uid: uu++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Xo,
      get config() {
        return i.config;
      },
      set config(a) {
        ({}).NODE_ENV !== "production" && y("app.config cannot be replaced. Modify individual options instead.");
      },
      use(a, ...h) {
        return r.has(a) ? {}.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : a && V(a.install) ? (r.add(a), a.install(l, ...h)) : V(a) ? (r.add(a), a(l, ...h)) : {}.NODE_ENV !== "production" && y('A plugin must either be a function or an object with an "install" function.'), l;
      },
      mixin(a) {
        return i.mixins.includes(a) ? {}.NODE_ENV !== "production" && y("Mixin has already been applied to target app" + (a.name ? `: ${a.name}` : "")) : i.mixins.push(a), l;
      },
      component(a, h) {
        return {}.NODE_ENV !== "production" && Ks(a, i.config), h ? ({}.NODE_ENV !== "production" && i.components[a] && y(`Component "${a}" has already been registered in target app.`), i.components[a] = h, l) : i.components[a];
      },
      directive(a, h) {
        return {}.NODE_ENV !== "production" && lr(a), h ? ({}.NODE_ENV !== "production" && i.directives[a] && y(`Directive "${a}" has already been registered in target app.`), i.directives[a] = h, l) : i.directives[a];
      },
      mount(a, h, d) {
        if (c)
          ({}).NODE_ENV !== "production" && y("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          ({}).NODE_ENV !== "production" && a.__vue_app__ && y("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const _ = ke(s, o);
          return _.appContext = i, {}.NODE_ENV !== "production" && (i.reload = () => {
            e(Be(_), a, d);
          }), h && t ? t(_, a) : e(_, a, d), c = !0, l._container = a, a.__vue_app__ = l, {}.NODE_ENV !== "production" && (l._instance = _.component, cl(l, Xo)), is(_.component) || _.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, l._container), {}.NODE_ENV !== "production" && (l._instance = null, ll(l)), delete l._container.__vue_app__) : {}.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(a, h) {
        return {}.NODE_ENV !== "production" && a in i.provides && y(`App already provides property with key "${String(a)}". It will be overwritten with the new value.`), i.provides[a] = h, l;
      }
    };
    return l;
  };
}
function Ws(e, t, n, s, o = !1) {
  if (P(e)) {
    e.forEach((_, S) => Ws(_, t && (P(t) ? t[S] : t), n, s, o));
    return;
  }
  if (Vn(s) && !o)
    return;
  const i = s.shapeFlag & 4 ? is(s.component) || s.component.proxy : s.el, r = o ? null : i, { i: c, r: l } = e;
  if ({}.NODE_ENV !== "production" && !c) {
    y("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const a = t && t.r, h = c.refs === B ? c.refs = {} : c.refs, d = c.setupState;
  if (a != null && a !== l && (Z(a) ? (h[a] = null, A(d, a) && (d[a] = null)) : oe(a) && (a.value = null)), V(l))
    Ye(l, c, 12, [r, h]);
  else {
    const _ = Z(l), S = oe(l);
    if (_ || S) {
      const x = () => {
        if (e.f) {
          const O = _ ? A(d, l) ? d[l] : h[l] : l.value;
          o ? P(O) && Gs(O, i) : P(O) ? O.includes(i) || O.push(i) : _ ? (h[l] = [i], A(d, l) && (d[l] = h[l])) : (l.value = [i], e.k && (h[e.k] = l.value));
        } else
          _ ? (h[l] = r, A(d, l) && (d[l] = r)) : S ? (l.value = r, e.k && (h[e.k] = r)) : {}.NODE_ENV !== "production" && y("Invalid template ref type:", l, `(${typeof l})`);
      };
      r ? (x.id = -1, Ee(x, n)) : x();
    } else
      ({}).NODE_ENV !== "production" && y("Invalid template ref type:", l, `(${typeof l})`);
  }
}
let Qt, it;
function ze(e, t) {
  e.appContext.config.performance && Kn() && it.mark(`vue-${t}-${e.uid}`), {}.NODE_ENV !== "production" && dl(e, t, Kn() ? it.now() : Date.now());
}
function qe(e, t) {
  if (e.appContext.config.performance && Kn()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    it.mark(s), it.measure(`<${rs(e, e.type)}> ${t}`, n, s), it.clearMarks(n), it.clearMarks(s);
  }
  ({}).NODE_ENV !== "production" && hl(e, t, Kn() ? it.now() : Date.now());
}
function Kn() {
  return Qt !== void 0 || (typeof window < "u" && window.performance ? (Qt = !0, it = window.performance) : Qt = !1), Qt;
}
function fu() {
  const e = [];
  if ({}.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const Ee = Ol;
function du(e) {
  return hu(e);
}
function hu(e, t) {
  fu();
  const n = vi();
  n.__VUE__ = !0, {}.NODE_ENV !== "production" && qi(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: s, remove: o, patchProp: i, createElement: r, createText: c, createComment: l, setText: a, setElementText: h, parentNode: d, nextSibling: _, setScopeId: S = ce, insertStaticContent: x } = e, O = (u, f, p, m = null, g = null, v = null, N = !1, E = null, w = {}.NODE_ENV !== "production" && Nt ? !1 : !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !gt(u, f) && (m = mn(u), et(u, g, v, !0), u = null), f.patchFlag === -2 && (w = !1, f.dynamicChildren = null);
    const { type: b, ref: C, shapeFlag: T } = f;
    switch (b) {
      case pn:
        M(u, f, p, m);
        break;
      case le:
        U(u, f, p, m);
        break;
      case Rn:
        u == null ? G(f, p, m, N) : {}.NODE_ENV !== "production" && Y(u, f, p, N);
        break;
      case ye:
        We(u, f, p, m, g, v, N, E, w);
        break;
      default:
        T & 1 ? Re(u, f, p, m, g, v, N, E, w) : T & 6 ? gn(u, f, p, m, g, v, N, E, w) : T & 64 || T & 128 ? b.process(u, f, p, m, g, v, N, E, w, Rt) : {}.NODE_ENV !== "production" && y("Invalid VNode type:", b, `(${typeof b})`);
    }
    C != null && g && Ws(C, u && u.ref, v, f || u, !f);
  }, M = (u, f, p, m) => {
    if (u == null)
      s(f.el = c(f.children), p, m);
    else {
      const g = f.el = u.el;
      f.children !== u.children && a(g, f.children);
    }
  }, U = (u, f, p, m) => {
    u == null ? s(f.el = l(f.children || ""), p, m) : f.el = u.el;
  }, G = (u, f, p, m) => {
    [u.el, u.anchor] = x(u.children, f, p, m, u.el, u.anchor);
  }, Y = (u, f, p, m) => {
    if (f.children !== u.children) {
      const g = _(u.anchor);
      J(u), [f.el, f.anchor] = x(f.children, p, g, m);
    } else
      f.el = u.el, f.anchor = u.anchor;
  }, I = ({ el: u, anchor: f }, p, m) => {
    let g;
    for (; u && u !== f; )
      g = _(u), s(u, p, m), u = g;
    s(f, p, m);
  }, J = ({ el: u, anchor: f }) => {
    let p;
    for (; u && u !== f; )
      p = _(u), o(u), u = p;
    o(f);
  }, Re = (u, f, p, m, g, v, N, E, w) => {
    N = N || f.type === "svg", u == null ? Ie(f, p, m, g, v, N, E, w) : Q(u, f, g, v, N, E, w);
  }, Ie = (u, f, p, m, g, v, N, E) => {
    let w, b;
    const { type: C, props: T, shapeFlag: D, transition: R, dirs: $ } = u;
    if (w = u.el = r(u.type, v, T && T.is, T), D & 8 ? h(w, u.children) : D & 16 && q(u.children, w, null, m, g, v && C !== "foreignObject", N, E), $ && ft(u, null, m, "created"), j(w, u, u.scopeId, N, m), T) {
      for (const H in T)
        H !== "value" && !Tn(H) && i(w, H, null, T[H], v, u.children, m, g, Ke);
      "value" in T && i(w, "value", null, T.value), (b = T.onVnodeBeforeMount) && Me(b, m, u);
    }
    ({}).NODE_ENV !== "production" && (Object.defineProperty(w, "__vnode", {
      value: u,
      enumerable: !1
    }), Object.defineProperty(w, "__vueParentComponent", {
      value: m,
      enumerable: !1
    })), $ && ft(u, null, m, "beforeMount");
    const z = (!g || g && !g.pendingBranch) && R && !R.persisted;
    z && R.beforeEnter(w), s(w, f, p), ((b = T && T.onVnodeMounted) || z || $) && Ee(() => {
      b && Me(b, m, u), z && R.enter(w), $ && ft(u, null, m, "mounted");
    }, g);
  }, j = (u, f, p, m, g) => {
    if (p && S(u, p), m)
      for (let v = 0; v < m.length; v++)
        S(u, m[v]);
    if (g) {
      let v = g.subTree;
      if ({}.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && (v = Zi(v.children) || v), f === v) {
        const N = g.vnode;
        j(u, N, N.scopeId, N.slotScopeIds, g.parent);
      }
    }
  }, q = (u, f, p, m, g, v, N, E, w = 0) => {
    for (let b = w; b < u.length; b++) {
      const C = u[b] = E ? ot(u[b]) : Pe(u[b]);
      O(null, C, f, p, m, g, v, N, E);
    }
  }, Q = (u, f, p, m, g, v, N) => {
    const E = f.el = u.el;
    let { patchFlag: w, dynamicChildren: b, dirs: C } = f;
    w |= u.patchFlag & 16;
    const T = u.props || B, D = f.props || B;
    let R;
    p && dt(p, !1), (R = D.onVnodeBeforeUpdate) && Me(R, p, f, u), C && ft(f, u, p, "beforeUpdate"), p && dt(p, !0), {}.NODE_ENV !== "production" && Nt && (w = 0, N = !1, b = null);
    const $ = g && f.type !== "foreignObject";
    if (b ? (ue(u.dynamicChildren, b, E, p, m, $, v), {}.NODE_ENV !== "production" && p && p.type.__hmrId && kn(u, f)) : N || je(u, f, E, null, p, m, $, v, !1), w > 0) {
      if (w & 16)
        re(E, f, T, D, p, m, g);
      else if (w & 2 && T.class !== D.class && i(E, "class", null, D.class, g), w & 4 && i(E, "style", T.style, D.style, g), w & 8) {
        const z = f.dynamicProps;
        for (let H = 0; H < z.length; H++) {
          const te = z[H], Te = T[te], It = D[te];
          (It !== Te || te === "value") && i(E, te, Te, It, g, u.children, p, m, Ke);
        }
      }
      w & 1 && u.children !== f.children && h(E, f.children);
    } else
      !N && b == null && re(E, f, T, D, p, m, g);
    ((R = D.onVnodeUpdated) || C) && Ee(() => {
      R && Me(R, p, f, u), C && ft(f, u, p, "updated");
    }, m);
  }, ue = (u, f, p, m, g, v, N) => {
    for (let E = 0; E < f.length; E++) {
      const w = u[E], b = f[E], C = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        w.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (w.type === ye || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !gt(w, b) || // - In the case of a component, it could contain anything.
        w.shapeFlag & 70) ? d(w.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      O(w, b, C, null, m, g, v, N, !0);
    }
  }, re = (u, f, p, m, g, v, N) => {
    if (p !== m) {
      if (p !== B)
        for (const E in p)
          !Tn(E) && !(E in m) && i(u, E, p[E], null, N, f.children, g, v, Ke);
      for (const E in m) {
        if (Tn(E))
          continue;
        const w = m[E], b = p[E];
        w !== b && E !== "value" && i(u, E, b, w, N, f.children, g, v, Ke);
      }
      "value" in m && i(u, "value", p.value, m.value);
    }
  }, We = (u, f, p, m, g, v, N, E, w) => {
    const b = f.el = u ? u.el : c(""), C = f.anchor = u ? u.anchor : c("");
    let { patchFlag: T, dynamicChildren: D, slotScopeIds: R } = f;
    ({}).NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Nt || T & 2048) && (T = 0, w = !1, D = null), R && (E = E ? E.concat(R) : R), u == null ? (s(b, p, m), s(C, p, m), q(f.children, p, C, g, v, N, E, w)) : T > 0 && T & 64 && D && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren ? (ue(u.dynamicChildren, D, p, g, v, N, E), {}.NODE_ENV !== "production" && g && g.type.__hmrId ? kn(u, f) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (f.key != null || g && f === g.subTree) && kn(
        u,
        f,
        !0
        /* shallow */
      )
    )) : je(u, f, p, C, g, v, N, E, w);
  }, gn = (u, f, p, m, g, v, N, E, w) => {
    f.slotScopeIds = E, u == null ? f.shapeFlag & 512 ? g.ctx.activate(f, p, m, N, w) : Ze(f, p, m, g, v, N, w) : be(u, f, w);
  }, Ze = (u, f, p, m, g, v, N) => {
    const E = u.component = Nu(u, m, g);
    if ({}.NODE_ENV !== "production" && E.type.__hmrId && sl(E), {}.NODE_ENV !== "production" && (Cn(u), ze(E, "mount")), hn(u) && (E.ctx.renderer = Rt), {}.NODE_ENV !== "production" && ze(E, "init"), Cu(E), {}.NODE_ENV !== "production" && qe(E, "init"), E.asyncDep) {
      if (g && g.registerDep(E, L), !u.el) {
        const w = E.subTree = ke(le);
        U(null, w, f, p);
      }
      return;
    }
    L(E, u, f, p, g, v, N), {}.NODE_ENV !== "production" && (xn(), qe(E, "mount"));
  }, be = (u, f, p) => {
    const m = f.component = u.component;
    if (yl(u, f, p))
      if (m.asyncDep && !m.asyncResolved) {
        ({}).NODE_ENV !== "production" && Cn(f), F(m, f, p), {}.NODE_ENV !== "production" && xn();
        return;
      } else
        m.next = f, tl(m.update), m.update();
    else
      f.el = u.el, m.vnode = f;
  }, L = (u, f, p, m, g, v, N) => {
    const E = () => {
      if (u.isMounted) {
        let { next: C, bu: T, u: D, parent: R, vnode: $ } = u, z = C, H;
        ({}).NODE_ENV !== "production" && Cn(C || u.vnode), dt(u, !1), C ? (C.el = $.el, F(u, C, N)) : C = $, T && At(T), (H = C.props && C.props.onVnodeBeforeUpdate) && Me(H, R, C, $), dt(u, !0), {}.NODE_ENV !== "production" && ze(u, "render");
        const te = ys(u);
        ({}).NODE_ENV !== "production" && qe(u, "render");
        const Te = u.subTree;
        u.subTree = te, {}.NODE_ENV !== "production" && ze(u, "patch"), O(
          Te,
          te,
          // parent may have changed if it's in a teleport
          d(Te.el),
          // anchor may have changed if it's in a fragment
          mn(Te),
          u,
          g,
          v
        ), {}.NODE_ENV !== "production" && qe(u, "patch"), C.el = te.el, z === null && vl(u, te.el), D && Ee(D, g), (H = C.props && C.props.onVnodeUpdated) && Ee(() => Me(H, R, C, $), g), {}.NODE_ENV !== "production" && Yi(u), {}.NODE_ENV !== "production" && xn();
      } else {
        let C;
        const { el: T, props: D } = f, { bm: R, m: $, parent: z } = u, H = Vn(f);
        if (dt(u, !1), R && At(R), !H && (C = D && D.onVnodeBeforeMount) && Me(C, z, f), dt(u, !0), T && bs) {
          const te = () => {
            ({}).NODE_ENV !== "production" && ze(u, "render"), u.subTree = ys(u), {}.NODE_ENV !== "production" && qe(u, "render"), {}.NODE_ENV !== "production" && ze(u, "hydrate"), bs(T, u.subTree, u, g, null), {}.NODE_ENV !== "production" && qe(u, "hydrate");
          };
          H ? f.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !u.isUnmounted && te()
          ) : te();
        } else {
          ({}).NODE_ENV !== "production" && ze(u, "render");
          const te = u.subTree = ys(u);
          ({}).NODE_ENV !== "production" && qe(u, "render"), {}.NODE_ENV !== "production" && ze(u, "patch"), O(null, te, p, m, u, g, v), {}.NODE_ENV !== "production" && qe(u, "patch"), f.el = te.el;
        }
        if ($ && Ee($, g), !H && (C = D && D.onVnodeMounted)) {
          const te = f;
          Ee(() => Me(C, z, te), g);
        }
        (f.shapeFlag & 256 || z && Vn(z.vnode) && z.vnode.shapeFlag & 256) && u.a && Ee(u.a, g), u.isMounted = !0, {}.NODE_ENV !== "production" && ul(u), f = p = m = null;
      }
    }, w = u.effect = new no(
      E,
      () => ts(b),
      u.scope
      // track it in component's effect scope
    ), b = u.update = () => w.run();
    b.id = u.uid, dt(u, !0), {}.NODE_ENV !== "production" && (w.onTrack = u.rtc ? (C) => At(u.rtc, C) : void 0, w.onTrigger = u.rtg ? (C) => At(u.rtg, C) : void 0, b.ownerInstance = u), b();
  }, F = (u, f, p) => {
    f.component = u;
    const m = u.vnode.props;
    u.vnode = f, u.next = null, eu(u, f.props, m, p), lu(u, f.children, p), Pt(), jo(), Vt();
  }, je = (u, f, p, m, g, v, N, E, w = !1) => {
    const b = u && u.children, C = u ? u.shapeFlag : 0, T = f.children, { patchFlag: D, shapeFlag: R } = f;
    if (D > 0) {
      if (D & 128) {
        qt(b, T, p, m, g, v, N, E, w);
        return;
      } else if (D & 256) {
        _s(b, T, p, m, g, v, N, E, w);
        return;
      }
    }
    R & 8 ? (C & 16 && Ke(b, g, v), T !== b && h(p, T)) : C & 16 ? R & 16 ? qt(b, T, p, m, g, v, N, E, w) : Ke(b, g, v, !0) : (C & 8 && h(p, ""), R & 16 && q(T, p, m, g, v, N, E, w));
  }, _s = (u, f, p, m, g, v, N, E, w) => {
    u = u || Ht, f = f || Ht;
    const b = u.length, C = f.length, T = Math.min(b, C);
    let D;
    for (D = 0; D < T; D++) {
      const R = f[D] = w ? ot(f[D]) : Pe(f[D]);
      O(u[D], R, p, null, g, v, N, E, w);
    }
    b > C ? Ke(u, g, v, !0, !1, T) : q(f, p, m, g, v, N, E, w, T);
  }, qt = (u, f, p, m, g, v, N, E, w) => {
    let b = 0;
    const C = f.length;
    let T = u.length - 1, D = C - 1;
    for (; b <= T && b <= D; ) {
      const R = u[b], $ = f[b] = w ? ot(f[b]) : Pe(f[b]);
      if (gt(R, $))
        O(R, $, p, null, g, v, N, E, w);
      else
        break;
      b++;
    }
    for (; b <= T && b <= D; ) {
      const R = u[T], $ = f[D] = w ? ot(f[D]) : Pe(f[D]);
      if (gt(R, $))
        O(R, $, p, null, g, v, N, E, w);
      else
        break;
      T--, D--;
    }
    if (b > T) {
      if (b <= D) {
        const R = D + 1, $ = R < C ? f[R].el : m;
        for (; b <= D; )
          O(null, f[b] = w ? ot(f[b]) : Pe(f[b]), p, $, g, v, N, E, w), b++;
      }
    } else if (b > D)
      for (; b <= T; )
        et(u[b], g, v, !0), b++;
    else {
      const R = b, $ = b, z = /* @__PURE__ */ new Map();
      for (b = $; b <= D; b++) {
        const de = f[b] = w ? ot(f[b]) : Pe(f[b]);
        de.key != null && ({}.NODE_ENV !== "production" && z.has(de.key) && y("Duplicate keys found during update:", JSON.stringify(de.key), "Make sure keys are unique."), z.set(de.key, b));
      }
      let H, te = 0;
      const Te = D - $ + 1;
      let It = !1, Oo = 0;
      const Yt = new Array(Te);
      for (b = 0; b < Te; b++)
        Yt[b] = 0;
      for (b = R; b <= T; b++) {
        const de = u[b];
        if (te >= Te) {
          et(de, g, v, !0);
          continue;
        }
        let Ae;
        if (de.key != null)
          Ae = z.get(de.key);
        else
          for (H = $; H <= D; H++)
            if (Yt[H - $] === 0 && gt(de, f[H])) {
              Ae = H;
              break;
            }
        Ae === void 0 ? et(de, g, v, !0) : (Yt[Ae - $] = b + 1, Ae >= Oo ? Oo = Ae : It = !0, O(de, f[Ae], p, null, g, v, N, E, w), te++);
      }
      const No = It ? pu(Yt) : Ht;
      for (H = No.length - 1, b = Te - 1; b >= 0; b--) {
        const de = $ + b, Ae = f[de], So = de + 1 < C ? f[de + 1].el : m;
        Yt[b] === 0 ? O(null, Ae, p, So, g, v, N, E, w) : It && (H < 0 || b !== No[H] ? kt(
          Ae,
          p,
          So,
          2
          /* MoveType.REORDER */
        ) : H--);
      }
    }
  }, kt = (u, f, p, m, g = null) => {
    const { el: v, type: N, transition: E, children: w, shapeFlag: b } = u;
    if (b & 6) {
      kt(u.component.subTree, f, p, m);
      return;
    }
    if (b & 128) {
      u.suspense.move(f, p, m);
      return;
    }
    if (b & 64) {
      N.move(u, f, p, Rt);
      return;
    }
    if (N === ye) {
      s(v, f, p);
      for (let T = 0; T < w.length; T++)
        kt(w[T], f, p, m);
      s(u.anchor, f, p);
      return;
    }
    if (N === Rn) {
      I(u, f, p);
      return;
    }
    if (m !== 2 && b & 1 && E)
      if (m === 0)
        E.beforeEnter(v), s(v, f, p), Ee(() => E.enter(v), g);
      else {
        const { leave: T, delayLeave: D, afterLeave: R } = E, $ = () => s(v, f, p), z = () => {
          T(v, () => {
            $(), R && R();
          });
        };
        D ? D(v, $, z) : z();
      }
    else
      s(v, f, p);
  }, et = (u, f, p, m = !1, g = !1) => {
    const { type: v, props: N, ref: E, children: w, dynamicChildren: b, shapeFlag: C, patchFlag: T, dirs: D } = u;
    if (E != null && Ws(E, null, p, u, !0), C & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const R = C & 1 && D, $ = !Vn(u);
    let z;
    if ($ && (z = N && N.onVnodeBeforeUnmount) && Me(z, f, u), C & 6)
      qr(u.component, p, m);
    else {
      if (C & 128) {
        u.suspense.unmount(p, m);
        return;
      }
      R && ft(u, null, f, "beforeUnmount"), C & 64 ? u.type.remove(u, f, p, g, Rt, m) : b && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== ye || T > 0 && T & 64) ? Ke(b, f, p, !1, !0) : (v === ye && T & 384 || !g && C & 16) && Ke(w, f, p), m && gs(u);
    }
    ($ && (z = N && N.onVnodeUnmounted) || R) && Ee(() => {
      z && Me(z, f, u), R && ft(u, null, f, "unmounted");
    }, p);
  }, gs = (u) => {
    const { type: f, el: p, anchor: m, transition: g } = u;
    if (f === ye) {
      ({}).NODE_ENV !== "production" && u.patchFlag > 0 && u.patchFlag & 2048 && g && !g.persisted ? u.children.forEach((N) => {
        N.type === le ? o(N.el) : gs(N);
      }) : zr(p, m);
      return;
    }
    if (f === Rn) {
      J(u);
      return;
    }
    const v = () => {
      o(p), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (u.shapeFlag & 1 && g && !g.persisted) {
      const { leave: N, delayLeave: E } = g, w = () => N(p, v);
      E ? E(u.el, v, w) : w();
    } else
      v();
  }, zr = (u, f) => {
    let p;
    for (; u !== f; )
      p = _(u), o(u), u = p;
    o(f);
  }, qr = (u, f, p) => {
    ({}).NODE_ENV !== "production" && u.type.__hmrId && ol(u);
    const { bum: m, scope: g, update: v, subTree: N, um: E } = u;
    m && At(m), g.stop(), v && (v.active = !1, et(N, u, f, p)), E && Ee(E, f), Ee(() => {
      u.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), {}.NODE_ENV !== "production" && fl(u);
  }, Ke = (u, f, p, m = !1, g = !1, v = 0) => {
    for (let N = v; N < u.length; N++)
      et(u[N], f, p, m, g);
  }, mn = (u) => u.shapeFlag & 6 ? mn(u.component.subTree) : u.shapeFlag & 128 ? u.suspense.next() : _(u.anchor || u.el), wo = (u, f, p) => {
    u == null ? f._vnode && et(f._vnode, null, null, !0) : O(f._vnode || null, u, f, null, null, null, p), jo(), Ki(), f._vnode = u;
  }, Rt = {
    p: O,
    um: et,
    m: kt,
    r: gs,
    mt: Ze,
    mc: q,
    pc: je,
    pbc: ue,
    n: mn,
    o: e
  };
  let ms, bs;
  return t && ([ms, bs] = t(Rt)), {
    render: wo,
    hydrate: ms,
    createApp: au(wo, ms)
  };
}
function dt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function kn(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (P(s) && P(o))
    for (let i = 0; i < s.length; i++) {
      const r = s[i];
      let c = o[i];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = o[i] = ot(o[i]), c.el = r.el), n || kn(r, c)), c.type === pn && (c.el = r.el), {}.NODE_ENV !== "production" && c.type === le && !c.el && (c.el = r.el);
    }
}
function pu(e) {
  const t = e.slice(), n = [0];
  let s, o, i, r, c;
  const l = e.length;
  for (s = 0; s < l; s++) {
    const a = e[s];
    if (a !== 0) {
      if (o = n[n.length - 1], e[o] < a) {
        t[s] = o, n.push(s);
        continue;
      }
      for (i = 0, r = n.length - 1; i < r; )
        c = i + r >> 1, e[n[c]] < a ? i = c + 1 : r = c;
      a < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, r = n[i - 1]; i-- > 0; )
    n[i] = r, r = t[r];
  return n;
}
const _u = (e) => e.__isTeleport, ye = Symbol({}.NODE_ENV !== "production" ? "Fragment" : void 0), pn = Symbol({}.NODE_ENV !== "production" ? "Text" : void 0), le = Symbol({}.NODE_ENV !== "production" ? "Comment" : void 0), Rn = Symbol({}.NODE_ENV !== "production" ? "Static" : void 0), en = [];
let Ve = null;
function ct(e = !1) {
  en.push(Ve = e ? null : []);
}
function gu() {
  en.pop(), Ve = en[en.length - 1] || null;
}
let ln = 1;
function Yo(e) {
  ln += e;
}
function br(e) {
  return e.dynamicChildren = ln > 0 ? Ve || Ht : null, gu(), ln > 0 && Ve && Ve.push(e), e;
}
function Kt(e, t, n, s, o, i) {
  return br(Ne(
    e,
    t,
    n,
    s,
    o,
    i,
    !0
    /* isBlock */
  ));
}
function Er(e, t, n, s, o) {
  return br(ke(
    e,
    t,
    n,
    s,
    o,
    !0
    /* isBlock: prevent a block from tracking itself */
  ));
}
function po(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function gt(e, t) {
  return {}.NODE_ENV !== "production" && t.shapeFlag & 6 && Mt.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const mu = (...e) => vr(...e), os = "__vInternal", yr = ({ key: e }) => e ?? null, In = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? Z(e) || oe(e) || V(e) ? { i: ge, r: e, k: t, f: !!n } : e : null;
function Ne(e, t = null, n = null, s = 0, o = null, i = e === ye ? 0 : 1, r = !1, c = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && yr(t),
    ref: t && In(t),
    scopeId: Xi,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: ge
  };
  return c ? (_o(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= Z(n) ? 8 : 16), {}.NODE_ENV !== "production" && l.key !== l.key && y("VNode created with invalid key (NaN). VNode type:", l.type), ln > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Ve && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Ve.push(l), l;
}
const ke = {}.NODE_ENV !== "production" ? mu : vr;
function vr(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === Fl) && ({}.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = le), po(e)) {
    const c = Be(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && _o(c, n), ln > 0 && !i && Ve && (c.shapeFlag & 6 ? Ve[Ve.indexOf(e)] = c : Ve.push(c)), c.patchFlag |= -2, c;
  }
  if (Tr(e) && (e = e.__vccOpts), t) {
    t = bu(t);
    let { class: c, style: l } = t;
    c && !Z(c) && (t.class = tn(c)), W(l) && (ks(l) && !P(l) && (l = ee({}, l)), t.style = Qs(l));
  }
  const r = Z(e) ? 1 : wl(e) ? 128 : _u(e) ? 64 : W(e) ? 4 : V(e) ? 2 : 0;
  return {}.NODE_ENV !== "production" && r & 4 && ks(e) && (e = k(e), y("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), Ne(e, t, n, s, o, r, i, !0);
}
function bu(e) {
  return e ? ks(e) || os in e ? ee({}, e) : e : null;
}
function Be(e, t, n = !1) {
  const { props: s, ref: o, patchFlag: i, children: r } = e, c = t ? vu(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && yr(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? P(o) ? o.concat(In(t)) : [o, In(t)] : In(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: {}.NODE_ENV !== "production" && i === -1 && P(r) ? r.map(wr) : r,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ye ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Be(e.ssContent),
    ssFallback: e.ssFallback && Be(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function wr(e) {
  const t = Be(e);
  return P(e.children) && (t.children = e.children.map(wr)), t;
}
function Eu(e = " ", t = 0) {
  return ke(pn, null, e, t);
}
function yu(e = "", t = !1) {
  return t ? (ct(), Er(le, null, e)) : ke(le, null, e);
}
function Pe(e) {
  return e == null || typeof e == "boolean" ? ke(le) : P(e) ? ke(
    ye,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? ot(e) : ke(pn, null, String(e));
}
function ot(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Be(e);
}
function _o(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (P(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), _o(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(os in t) ? t._ctx = ge : o === 3 && ge && (ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    V(t) ? (t = { default: t, _ctx: ge }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Eu(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function vu(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = tn([t.class, s.class]));
      else if (o === "style")
        t.style = Qs([t.style, s.style]);
      else if (fn(o)) {
        const i = t[o], r = s[o];
        r && i !== r && !(P(i) && i.includes(r)) && (t[o] = i ? [].concat(i, r) : r);
      } else
        o !== "" && (t[o] = s[o]);
  }
  return t;
}
function Me(e, t, n, s = null) {
  Se(e, t, 7, [
    n,
    s
  ]);
}
const wu = mr();
let Ou = 0;
function Nu(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || wu, i = {
    uid: Ou++,
    vnode: e,
    type: s,
    parent: t,
    appContext: o,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new wi(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: dr(s, o),
    emitsOptions: Gi(s, o),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: B,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: B,
    data: B,
    props: B,
    attrs: B,
    slots: B,
    refs: B,
    setupState: B,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return {}.NODE_ENV !== "production" ? i.ctx = Bl(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = _l.bind(null, i), e.ce && e.ce(i), i;
}
let X = null;
const Su = () => X || ge, Jt = (e) => {
  X = e, e.scope.on();
}, Tt = () => {
  X && X.scope.off(), X = null;
}, Tu = /* @__PURE__ */ at("slot,component");
function Ks(e, t) {
  const n = t.isNativeTag || mi;
  (Tu(e) || n(e)) && y("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Or(e) {
  return e.vnode.shapeFlag & 4;
}
let un = !1;
function Cu(e, t = !1) {
  un = t;
  const { props: n, children: s } = e.vnode, o = Or(e);
  Xl(e, n, o, t), cu(e, s);
  const i = o ? xu(e, t) : void 0;
  return un = !1, i;
}
function xu(e, t) {
  var n;
  const s = e.type;
  if ({}.NODE_ENV !== "production") {
    if (s.name && Ks(s.name, e.appContext.config), s.components) {
      const i = Object.keys(s.components);
      for (let r = 0; r < i.length; r++)
        Ks(i[r], e.appContext.config);
    }
    if (s.directives) {
      const i = Object.keys(s.directives);
      for (let r = 0; r < i.length; r++)
        lr(i[r]);
    }
    s.compilerOptions && Nr() && y('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Zn(new Proxy(e.ctx, ur)), {}.NODE_ENV !== "production" && Wl(e);
  const { setup: o } = s;
  if (o) {
    const i = e.setupContext = o.length > 1 ? Du(e) : null;
    Jt(e), Pt();
    const r = Ye(o, e, 0, [{}.NODE_ENV !== "production" ? Ft(e.props) : e.props, i]);
    if (Vt(), Tt(), Zs(r)) {
      if (r.then(Tt, Tt), t)
        return r.then((c) => {
          Qo(e, c, t);
        }).catch((c) => {
          es(
            c,
            e,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      if (e.asyncDep = r, {}.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = s.name) !== null && n !== void 0 ? n : "Anonymous";
        y(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      Qo(e, r, t);
  } else
    Sr(e, t);
}
function Qo(e, t, n) {
  V(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : W(t) ? ({}.NODE_ENV !== "production" && po(t) && y("setup() should not return VNodes directly - return a render function instead."), {}.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Li(t), {}.NODE_ENV !== "production" && Kl(e)) : {}.NODE_ENV !== "production" && t !== void 0 && y(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), Sr(e, n);
}
let Js;
const Nr = () => !Js;
function Sr(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Js && !s.render) {
      const o = s.template || fo(e).template;
      if (o) {
        ({}).NODE_ENV !== "production" && ze(e, "compile");
        const { isCustomElement: i, compilerOptions: r } = e.appContext.config, { delimiters: c, compilerOptions: l } = s, a = ee(ee({
          isCustomElement: i,
          delimiters: c
        }, r), l);
        s.render = Js(o, a), {}.NODE_ENV !== "production" && qe(e, "compile");
      }
    }
    e.render = s.render || ce;
  }
  Jt(e), Pt(), zl(e), Vt(), Tt(), {}.NODE_ENV !== "production" && !s.render && e.render === ce && !t && (s.template ? y(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : y("Component is missing template or render function."));
}
function Go(e) {
  return new Proxy(e.attrs, {}.NODE_ENV !== "production" ? {
    get(t, n) {
      return Bn(), me(e, "get", "$attrs"), t[n];
    },
    set() {
      return y("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return y("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return me(e, "get", "$attrs"), t[n];
    }
  });
}
function Du(e) {
  const t = (s) => {
    if ({}.NODE_ENV !== "production" && (e.exposed && y("expose() should be called only once per setup()."), s != null)) {
      let o = typeof s;
      o === "object" && (P(s) ? o = "array" : oe(s) && (o = "ref")), o !== "object" && y(`expose() should be passed a plain object, received ${o}.`);
    }
    e.exposed = s || {};
  };
  let n;
  return {}.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = Go(e));
    },
    get slots() {
      return Ft(e.slots);
    },
    get emit() {
      return (s, ...o) => e.emit(s, ...o);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = Go(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function is(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Li(Zn(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in St)
          return St[n](e);
      },
      has(t, n) {
        return n in t || n in St;
      }
    }));
}
const Pu = /(?:^|[-_])(\w)/g, Vu = (e) => e.replace(Pu, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function go(e, t = !0) {
  return V(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function rs(e, t, n = !1) {
  let s = go(t);
  if (!s && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (s = o[1]);
  }
  if (!s && e && e.parent) {
    const o = (i) => {
      for (const r in i)
        if (i[r] === t)
          return r;
    };
    s = o(e.components || e.parent.type.components) || o(e.appContext.components);
  }
  return s ? Vu(s) : n ? "App" : "Anonymous";
}
function Tr(e) {
  return V(e) && "__vccOpts" in e;
}
const ku = (e, t) => Jc(e, t, un), Ru = Symbol({}.NODE_ENV !== "production" ? "ssrContext" : ""), Iu = () => {
  {
    const e = Dn(Ru);
    return e || {}.NODE_ENV !== "production" && y("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
  }
};
function Os(e) {
  return !!(e && e.__v_isShallow);
}
function ju() {
  if ({}.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, s = { style: "color:#9d288c" }, o = {
    header(d) {
      return W(d) ? d.__isVue ? ["div", e, "VueInstance"] : oe(d) ? [
        "div",
        {},
        ["span", e, h(d)],
        "<",
        c(d.value),
        ">"
      ] : wt(d) ? [
        "div",
        {},
        ["span", e, Os(d) ? "ShallowReactive" : "Reactive"],
        "<",
        c(d),
        `>${ut(d) ? " (readonly)" : ""}`
      ] : ut(d) ? [
        "div",
        {},
        ["span", e, Os(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(d),
        ">"
      ] : null : null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...i(d.$)
        ];
    }
  };
  function i(d) {
    const _ = [];
    d.type.props && d.props && _.push(r("props", k(d.props))), d.setupState !== B && _.push(r("setup", d.setupState)), d.data !== B && _.push(r("data", k(d.data)));
    const S = l(d, "computed");
    S && _.push(r("computed", S));
    const x = l(d, "inject");
    return x && _.push(r("injected", x)), _.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), _;
  }
  function r(d, _) {
    return _ = ee({}, _), Object.keys(_).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(_).map((S) => [
          "div",
          {},
          ["span", s, S + ": "],
          c(_[S], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(d, _ = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", s, d] : W(d) ? ["object", { object: _ ? k(d) : d }] : ["span", n, String(d)];
  }
  function l(d, _) {
    const S = d.type;
    if (V(S))
      return;
    const x = {};
    for (const O in d.ctx)
      a(S, O, _) && (x[O] = d.ctx[O]);
    return x;
  }
  function a(d, _, S) {
    const x = d[S];
    if (P(x) && x.includes(_) || W(x) && _ in x || d.extends && a(d.extends, _, S) || d.mixins && d.mixins.some((O) => a(O, _, S)))
      return !0;
  }
  function h(d) {
    return Os(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Xo = "3.2.47", Au = "http://www.w3.org/2000/svg", mt = typeof document < "u" ? document : null, Zo = mt && /* @__PURE__ */ mt.createElement("template"), Mu = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t ? mt.createElementNS(Au, e) : mt.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => mt.createTextNode(e),
  createComment: (e) => mt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => mt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, o, i) {
    const r = n ? n.previousSibling : t.lastChild;
    if (o && (o === i || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === i || !(o = o.nextSibling)); )
        ;
    else {
      Zo.innerHTML = s ? `<svg>${e}</svg>` : e;
      const c = Zo.content;
      if (s) {
        const l = c.firstChild;
        for (; l.firstChild; )
          c.appendChild(l.firstChild);
        c.removeChild(l);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function $u(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function Lu(e, t, n) {
  const s = e.style, o = Z(n);
  if (n && !o) {
    if (t && !Z(t))
      for (const i in t)
        n[i] == null && zs(s, i, "");
    for (const i in n)
      zs(s, i, n[i]);
  } else {
    const i = s.display;
    o ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (s.display = i);
  }
}
const Fu = /[^\\];\s*$/, ei = /\s*!important$/;
function zs(e, t, n) {
  if (P(n))
    n.forEach((s) => zs(e, t, s));
  else if (n == null && (n = ""), {}.NODE_ENV !== "production" && Fu.test(n) && y(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Uu(e, t);
    ei.test(n) ? e.setProperty(Qe(s), n.replace(ei, ""), "important") : e[s] = n;
  }
}
const ti = ["Webkit", "Moz", "ms"], Ns = {};
function Uu(e, t) {
  const n = Ns[t];
  if (n)
    return n;
  let s = He(t);
  if (s !== "filter" && s in e)
    return Ns[t] = s;
  s = xt(s);
  for (let o = 0; o < ti.length; o++) {
    const i = ti[o] + s;
    if (i in e)
      return Ns[t] = i;
  }
  return t;
}
const ni = "http://www.w3.org/1999/xlink";
function Hu(e, t, n, s, o) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(ni, t.slice(6, t.length)) : e.setAttributeNS(ni, t, n);
  else {
    const i = oc(t);
    n == null || i && !_i(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n);
  }
}
function Bu(e, t, n, s, o, i, r) {
  if (t === "innerHTML" || t === "textContent") {
    s && r(s, o, i), e[t] = n ?? "";
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && // custom elements may use _value internally
  !e.tagName.includes("-")) {
    e._value = n;
    const l = n ?? "";
    (e.value !== l || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    e.tagName === "OPTION") && (e.value = l), n == null && e.removeAttribute(t);
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = _i(n) : n == null && l === "string" ? (n = "", c = !0) : l === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    ({}).NODE_ENV !== "production" && !c && y(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, l);
  }
  c && e.removeAttribute(t);
}
function $t(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Wu(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function Ku(e, t, n, s, o = null) {
  const i = e._vei || (e._vei = {}), r = i[t];
  if (s && r)
    r.value = s;
  else {
    const [c, l] = Ju(t);
    if (s) {
      const a = i[t] = Yu(s, o);
      $t(e, c, a, l);
    } else
      r && (Wu(e, c, r, l), i[t] = void 0);
  }
}
const si = /(?:Once|Passive|Capture)$/;
function Ju(e) {
  let t;
  if (si.test(e)) {
    t = {};
    let s;
    for (; s = e.match(si); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Qe(e.slice(2)), t];
}
let Ss = 0;
const zu = /* @__PURE__ */ Promise.resolve(), qu = () => Ss || (zu.then(() => Ss = 0), Ss = Date.now());
function Yu(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Se(Qu(s, n.value), t, 5, [s]);
  };
  return n.value = e, n.attached = qu(), n;
}
function Qu(e, t) {
  if (P(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((s) => (o) => !o._stopped && s && s(o));
  } else
    return t;
}
const oi = /^on[a-z]/, Gu = (e, t, n, s, o = !1, i, r, c, l) => {
  t === "class" ? $u(e, s, o) : t === "style" ? Lu(e, n, s) : fn(t) ? Ln(t) || Ku(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Xu(e, t, s, o)) ? Bu(e, t, s, i, r, c, l) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Hu(e, t, s, o));
};
function Xu(e, t, n, s) {
  return s ? !!(t === "innerHTML" || t === "textContent" || t in e && oi.test(t) && V(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || oi.test(t) && Z(n) ? !1 : t in e;
}
const Zu = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
xl.props;
const ii = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return P(t) ? (n) => At(t, n) : t;
};
function ea(e) {
  e.target.composing = !0;
}
function ri(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ta = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e._assign = ii(o);
    const i = s || o.props && o.props.type === "number";
    $t(e, t ? "change" : "input", (r) => {
      if (r.target.composing)
        return;
      let c = e.value;
      n && (c = c.trim()), i && (c = Ts(c)), e._assign(c);
    }), n && $t(e, "change", () => {
      e.value = e.value.trim();
    }), t || ($t(e, "compositionstart", ea), $t(e, "compositionend", ri), $t(e, "change", ri));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: s, number: o } }, i) {
    if (e._assign = ii(i), e.composing || document.activeElement === e && e.type !== "range" && (n || s && e.value.trim() === t || (o || e.type === "number") && Ts(e.value) === t))
      return;
    const r = t ?? "";
    e.value !== r && (e.value = r);
  }
}, na = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, sa = (e, t) => (n) => {
  if (!("key" in n))
    return;
  const s = Qe(n.key);
  if (t.some((o) => o === s || na[o] === s))
    return e(n);
}, oa = /* @__PURE__ */ ee({ patchProp: Gu }, Mu);
let ci;
function ia() {
  return ci || (ci = du(oa));
}
const ra = (...e) => {
  const t = ia().createApp(...e);
  ({}).NODE_ENV !== "production" && (ca(t), la(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = ua(s);
    if (!o)
      return;
    const i = t._component;
    !V(i) && !i.render && !i.template && (i.template = o.innerHTML), o.innerHTML = "";
    const r = n(o, !1, o instanceof SVGElement);
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r;
  }, t;
};
function ca(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => tc(t) || nc(t),
    writable: !1
  });
}
function la(e) {
  if (Nr()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        y("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return y(s), n;
      },
      set() {
        y(s);
      }
    });
  }
}
function ua(e) {
  if (Z(e)) {
    const t = document.querySelector(e);
    return {}.NODE_ENV !== "production" && !t && y(`Failed to mount app: mount target selector "${e}" returned null.`), t;
  }
  return {}.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && y('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
}
function aa() {
  ju();
}
({}).NODE_ENV !== "production" && aa();
var fa = !1;
function da() {
  return Cr().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Cr() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const ha = typeof Proxy == "function", pa = "devtools-plugin:setup", _a = "plugin:settings:set";
let jt, qs;
function ga() {
  var e;
  return jt !== void 0 || (typeof window < "u" && window.performance ? (jt = !0, qs = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (jt = !0, qs = global.perf_hooks.performance) : jt = !1), jt;
}
function ma() {
  return ga() ? qs.now() : Date.now();
}
class ba {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const s = {};
    if (t.settings)
      for (const r in t.settings) {
        const c = t.settings[r];
        s[r] = c.defaultValue;
      }
    const o = `__vue-devtools-plugin-settings__${t.id}`;
    let i = Object.assign({}, s);
    try {
      const r = localStorage.getItem(o), c = JSON.parse(r);
      Object.assign(i, c);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return i;
      },
      setSettings(r) {
        try {
          localStorage.setItem(o, JSON.stringify(r));
        } catch {
        }
        i = r;
      },
      now() {
        return ma();
      }
    }, n && n.on(_a, (r, c) => {
      r === this.plugin.id && this.fallbacks.setSettings(c);
    }), this.proxiedOn = new Proxy({}, {
      get: (r, c) => this.target ? this.target.on[c] : (...l) => {
        this.onQueue.push({
          method: c,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (r, c) => this.target ? this.target[c] : c === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(c) ? (...l) => (this.targetQueue.push({
        method: c,
        args: l,
        resolve: () => {
        }
      }), this.fallbacks[c](...l)) : (...l) => new Promise((a) => {
        this.targetQueue.push({
          method: c,
          args: l,
          resolve: a
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function xr(e, t) {
  const n = e, s = Cr(), o = da(), i = ha && n.enableEarlyProxy;
  if (o && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !i))
    o.emit(pa, e, t);
  else {
    const r = i ? new ba(n, o) : null;
    (s.__VUE_DEVTOOLS_PLUGINS__ = s.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: r
    }), r && t(r.proxiedTarget);
  }
}
/*!
  * pinia v2.0.32
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const Ea = {}.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
var Ct;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Ct || (Ct = {}));
const Dr = typeof window < "u", li = ({}.NODE_ENV !== "production" || !1) && {}.NODE_ENV !== "test" && Dr, ui = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function ya(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], { type: e.type }) : e;
}
function mo(e, t, n) {
  const s = new XMLHttpRequest();
  s.open("GET", e), s.responseType = "blob", s.onload = function() {
    kr(s.response, t, n);
  }, s.onerror = function() {
    console.error("could not download file");
  }, s.send();
}
function Pr(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function jn(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
  }
}
const An = typeof navigator == "object" ? navigator : { userAgent: "" }, Vr = /* @__PURE__ */ (() => /Macintosh/.test(An.userAgent) && /AppleWebKit/.test(An.userAgent) && !/Safari/.test(An.userAgent))(), kr = Dr ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Vr ? va : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in An ? wa : (
      // Fallback to using FileReader and a popup
      Oa
    )
  )
) : () => {
};
function va(e, t = "download", n) {
  const s = document.createElement("a");
  s.download = t, s.rel = "noopener", typeof e == "string" ? (s.href = e, s.origin !== location.origin ? Pr(s.href) ? mo(e, t, n) : (s.target = "_blank", jn(s)) : jn(s)) : (s.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(s.href);
  }, 4e4), setTimeout(function() {
    jn(s);
  }, 0));
}
function wa(e, t = "download", n) {
  if (typeof e == "string")
    if (Pr(e))
      mo(e, t, n);
    else {
      const s = document.createElement("a");
      s.href = e, s.target = "_blank", setTimeout(function() {
        jn(s);
      });
    }
  else
    navigator.msSaveOrOpenBlob(ya(e, n), t);
}
function Oa(e, t, n, s) {
  if (s = s || open("", "_blank"), s && (s.document.title = s.document.body.innerText = "downloading..."), typeof e == "string")
    return mo(e, t, n);
  const o = e.type === "application/octet-stream", i = /constructor/i.test(String(ui.HTMLElement)) || "safari" in ui, r = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((r || o && i || Vr) && typeof FileReader < "u") {
    const c = new FileReader();
    c.onloadend = function() {
      let l = c.result;
      if (typeof l != "string")
        throw s = null, new Error("Wrong reader.result type");
      l = r ? l : l.replace(/^data:[^;]*;/, "data:attachment/file;"), s ? s.location.href = l : location.assign(l), s = null;
    }, c.readAsDataURL(e);
  } else {
    const c = URL.createObjectURL(e);
    s ? s.location.assign(c) : location.href = c, s = null, setTimeout(function() {
      URL.revokeObjectURL(c);
    }, 4e4);
  }
}
function ie(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function bo(e) {
  return "_a" in e && "install" in e;
}
function Rr() {
  if (!("clipboard" in navigator))
    return ie("Your browser doesn't support the Clipboard API", "error"), !0;
}
function Ir(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (ie('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Na(e) {
  if (!Rr())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), ie("Global state copied to clipboard.");
    } catch (t) {
      if (Ir(t))
        return;
      ie("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function Sa(e) {
  if (!Rr())
    try {
      e.state.value = JSON.parse(await navigator.clipboard.readText()), ie("Global state pasted from clipboard.");
    } catch (t) {
      if (Ir(t))
        return;
      ie("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function Ta(e) {
  try {
    kr(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    ie("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let Je;
function Ca() {
  Je || (Je = document.createElement("input"), Je.type = "file", Je.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      Je.onchange = async () => {
        const s = Je.files;
        if (!s)
          return t(null);
        const o = s.item(0);
        return t(o ? { text: await o.text(), file: o } : null);
      }, Je.oncancel = () => t(null), Je.onerror = n, Je.click();
    });
  }
  return e;
}
async function xa(e) {
  try {
    const n = await (await Ca())();
    if (!n)
      return;
    const { text: s, file: o } = n;
    e.state.value = JSON.parse(s), ie(`Global state imported from "${o.name}".`);
  } catch (t) {
    ie("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function De(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const jr = "🍍 Pinia (root)", Ys = "_root";
function Da(e) {
  return bo(e) ? {
    id: Ys,
    label: jr
  } : {
    id: e.$id,
    label: e.$id
  };
}
function Pa(e) {
  if (bo(e)) {
    const n = Array.from(e._s.keys()), s = e._s;
    return {
      state: n.map((i) => ({
        editable: !0,
        key: i,
        value: e.state.value[i]
      })),
      getters: n.filter((i) => s.get(i)._getters).map((i) => {
        const r = s.get(i);
        return {
          editable: !1,
          key: i,
          value: r._getters.reduce((c, l) => (c[l] = r[l], c), {})
        };
      })
    };
  }
  const t = {
    state: Object.keys(e.$state).map((n) => ({
      editable: !0,
      key: n,
      value: e.$state[n]
    }))
  };
  return e._getters && e._getters.length && (t.getters = e._getters.map((n) => ({
    editable: !1,
    key: n,
    value: e[n]
  }))), e._customProperties.size && (t.customProperties = Array.from(e._customProperties).map((n) => ({
    editable: !0,
    key: n,
    value: e[n]
  }))), t;
}
function Va(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: De(e.type),
    key: De(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function ka(e) {
  switch (e) {
    case Ct.direct:
      return "mutation";
    case Ct.patchFunction:
      return "$patch";
    case Ct.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let Ut = !0;
const Mn = [], _t = "pinia:mutations", ae = "pinia", { assign: Ra } = Object, Jn = (e) => "🍍 " + e;
function Ia(e, t) {
  xr({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Mn,
    app: e
  }, (n) => {
    typeof n.now != "function" && ie("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: _t,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: ae,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            Na(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await Sa(t), n.sendInspectorTree(ae), n.sendInspectorState(ae);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            Ta(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await xa(t), n.sendInspectorTree(ae), n.sendInspectorState(ae);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: "Reset the state (option store only)",
          action: (s) => {
            const o = t._s.get(s);
            o ? o._isOptionsAPI ? (o.$reset(), ie(`Store "${s}" reset.`)) : ie(`Cannot reset "${s}" store because it's a setup store.`, "warn") : ie(`Cannot reset "${s}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((s, o) => {
      const i = s.componentInstance && s.componentInstance.proxy;
      if (i && i._pStores) {
        const r = s.componentInstance.proxy._pStores;
        Object.values(r).forEach((c) => {
          s.instanceData.state.push({
            type: Jn(c.$id),
            key: "state",
            editable: !0,
            value: c._isOptionsAPI ? {
              _custom: {
                value: k(c.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => c.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(c.$state).reduce((l, a) => (l[a] = c.$state[a], l), {})
            )
          }), c._getters && c._getters.length && s.instanceData.state.push({
            type: Jn(c.$id),
            key: "getters",
            editable: !1,
            value: c._getters.reduce((l, a) => {
              try {
                l[a] = c[a];
              } catch (h) {
                l[a] = h;
              }
              return l;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((s) => {
      if (s.app === e && s.inspectorId === ae) {
        let o = [t];
        o = o.concat(Array.from(t._s.values())), s.rootNodes = (s.filter ? o.filter((i) => "$id" in i ? i.$id.toLowerCase().includes(s.filter.toLowerCase()) : jr.toLowerCase().includes(s.filter.toLowerCase())) : o).map(Da);
      }
    }), n.on.getInspectorState((s) => {
      if (s.app === e && s.inspectorId === ae) {
        const o = s.nodeId === Ys ? t : t._s.get(s.nodeId);
        if (!o)
          return;
        o && (s.state = Pa(o));
      }
    }), n.on.editInspectorState((s, o) => {
      if (s.app === e && s.inspectorId === ae) {
        const i = s.nodeId === Ys ? t : t._s.get(s.nodeId);
        if (!i)
          return ie(`store "${s.nodeId}" not found`, "error");
        const { path: r } = s;
        bo(i) ? r.unshift("state") : (r.length !== 1 || !i._customProperties.has(r[0]) || r[0] in i.$state) && r.unshift("$state"), Ut = !1, s.set(i, r, s.state.value), Ut = !0;
      }
    }), n.on.editComponentState((s) => {
      if (s.type.startsWith("🍍")) {
        const o = s.type.replace(/^🍍\s*/, ""), i = t._s.get(o);
        if (!i)
          return ie(`store "${o}" not found`, "error");
        const { path: r } = s;
        if (r[0] !== "state")
          return ie(`Invalid path for store "${o}":
${r}
Only state can be modified.`);
        r[0] = "$state", Ut = !1, s.set(i, r, s.state.value), Ut = !0;
      }
    });
  });
}
function ja(e, t) {
  Mn.includes(Jn(t.$id)) || Mn.push(Jn(t.$id)), xr({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Mn,
    app: e,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: !0
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (n) => {
    const s = typeof n.now == "function" ? n.now.bind(n) : Date.now;
    t.$onAction(({ after: r, onError: c, name: l, args: a }) => {
      const h = Ar++;
      n.addTimelineEvent({
        layerId: _t,
        event: {
          time: s(),
          title: "🛫 " + l,
          subtitle: "start",
          data: {
            store: De(t.$id),
            action: De(l),
            args: a
          },
          groupId: h
        }
      }), r((d) => {
        bt = void 0, n.addTimelineEvent({
          layerId: _t,
          event: {
            time: s(),
            title: "🛬 " + l,
            subtitle: "end",
            data: {
              store: De(t.$id),
              action: De(l),
              args: a,
              result: d
            },
            groupId: h
          }
        });
      }), c((d) => {
        bt = void 0, n.addTimelineEvent({
          layerId: _t,
          event: {
            time: s(),
            logType: "error",
            title: "💥 " + l,
            subtitle: "end",
            data: {
              store: De(t.$id),
              action: De(l),
              args: a,
              error: d
            },
            groupId: h
          }
        });
      });
    }, !0), t._customProperties.forEach((r) => {
      Pn(() => $i(t[r]), (c, l) => {
        n.notifyComponentUpdate(), n.sendInspectorState(ae), Ut && n.addTimelineEvent({
          layerId: _t,
          event: {
            time: s(),
            title: "Change",
            subtitle: r,
            data: {
              newValue: c,
              oldValue: l
            },
            groupId: bt
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: r, type: c }, l) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(ae), !Ut)
        return;
      const a = {
        time: s(),
        title: ka(c),
        data: Ra({ store: De(t.$id) }, Va(r)),
        groupId: bt
      };
      bt = void 0, c === Ct.patchFunction ? a.subtitle = "⤵️" : c === Ct.patchObject ? a.subtitle = "🧩" : r && !Array.isArray(r) && (a.subtitle = r.type), r && (a.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: r
        }
      }), n.addTimelineEvent({
        layerId: _t,
        event: a
      });
    }, { detached: !0, flush: "sync" });
    const o = t._hotUpdate;
    t._hotUpdate = Zn((r) => {
      o(r), n.addTimelineEvent({
        layerId: _t,
        event: {
          time: s(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: De(t.$id),
            info: De("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(ae), n.sendInspectorState(ae);
    });
    const { $dispose: i } = t;
    t.$dispose = () => {
      i(), n.notifyComponentUpdate(), n.sendInspectorTree(ae), n.sendInspectorState(ae), n.getSettings().logStoreChanges && ie(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(ae), n.sendInspectorState(ae), n.getSettings().logStoreChanges && ie(`"${t.$id}" store installed 🆕`);
  });
}
let Ar = 0, bt;
function ai(e, t) {
  const n = t.reduce((s, o) => (s[o] = k(e)[o], s), {});
  for (const s in n)
    e[s] = function() {
      const o = Ar, i = new Proxy(e, {
        get(...r) {
          return bt = o, Reflect.get(...r);
        },
        set(...r) {
          return bt = o, Reflect.set(...r);
        }
      });
      return n[s].apply(i, arguments);
    };
}
function Aa({ app: e, store: t, options: n }) {
  if (!t.$id.startsWith("__hot:")) {
    if (n.state && (t._isOptionsAPI = !0), typeof n.state == "function") {
      ai(
        // @ts-expect-error: can cast the store...
        t,
        Object.keys(n.actions)
      );
      const s = t._hotUpdate;
      k(t)._hotUpdate = function(o) {
        s.apply(this, arguments), ai(t, Object.keys(o._hmrPayload.actions));
      };
    }
    ja(
      e,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      t
    );
  }
}
function Ma() {
  const e = ac(!0), t = e.run(() => Uc({}));
  let n = [], s = [];
  const o = Zn({
    install(i) {
      o._a = i, i.provide(Ea, o), i.config.globalProperties.$pinia = o, li && Ia(i, o), s.forEach((r) => n.push(r)), s = [];
    },
    use(i) {
      return !this._a && !fa ? s.push(i) : n.push(i), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return li && typeof Proxy < "u" && o.use(Aa), o;
}
const Eo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, $a = {
  props: {
    thread: Number
  },
  data() {
    return {
      message: ""
    };
  },
  methods: {
    sendMessage() {
      this.centrifuge.rpc("thread:publish", {
        id: this.thread,
        message: this.message,
        authToken: this.authToken
      }).then(() => {
        this.message = "";
      });
    }
  }
}, La = { class: "border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0" }, Fa = { class: "relative flex" }, Ua = {
  key: 0,
  class: "absolute right-0 items-center inset-y-0 hidden sm:flex"
}, Ha = /* @__PURE__ */ Ne("span", { class: "font-bold" }, "Send", -1), Ba = [
  Ha
];
function Wa(e, t, n, s, o, i) {
  return ct(), Kt("div", La, [
    Ne("div", Fa, [
      Ll(Ne("input", {
        "onUpdate:modelValue": t[0] || (t[0] = (r) => o.message = r),
        type: "text",
        onKeyup: t[1] || (t[1] = sa((...r) => i.sendMessage && i.sendMessage(...r), ["enter"])),
        placeholder: "Write your message!",
        class: "w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-6 bg-gray-200 rounded-md py-3"
      }, null, 544), [
        [ta, o.message]
      ]),
      o.message.length > 1 ? (ct(), Kt("div", Ua, [
        Ne("button", {
          type: "button",
          onClick: t[2] || (t[2] = (...r) => i.sendMessage && i.sendMessage(...r)),
          class: "inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
        }, Ba)
      ])) : yu("", !0)
    ])
  ]);
}
const Ka = /* @__PURE__ */ Eo($a, [["render", Wa]]), Ja = {
  props: {
    message: Object
  },
  computed: {
    isOwnMessage() {
      return this.message.user.id === this.user.id;
    }
  }
}, za = { class: "chat-message" }, qa = { class: "flex flex-col space-y-2 text-xs mx-2 order-2 items-start" };
function Ya(e, t, n, s, o, i) {
  return ct(), Kt("div", za, [
    Ne("div", {
      class: tn(["flex items-end", { "justify-end": i.isOwnMessage }])
    }, [
      Ne("div", qa, [
        Ne("div", null, [
          Ne("span", {
            class: tn(["px-4 py-2 rounded-lg inline-block rounded-bl-none", { "bg-blue-600 text-white": i.isOwnMessage, "bg-gray-300 text-gray-600": !i.isOwnMessage }])
          }, To(n.message.text), 3)
        ]),
        Ne("span", null, To(n.message.user.username), 1)
      ])
    ], 2)
  ]);
}
const Qa = /* @__PURE__ */ Eo(Ja, [["render", Ya]]), Ga = {
  components: {
    Message: Qa,
    MessageForm: Ka
  },
  props: {
    thread: Number
  },
  mounted() {
    this.centrifuge.rpc("thread:history", { id: this.thread }).then((e) => {
      this.messages = e.data.messages;
    }), this.centrifuge.on("publication", (e) => {
      e.channel !== "chat" || e.data.type !== "message" || e.data.thread.id !== this.thread || this.messages.push(e.data.message);
    });
  },
  data() {
    return {
      messages: []
    };
  }
}, Xa = {
  id: "messages",
  class: "flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
};
function Za(e, t, n, s, o, i) {
  const r = Fo("Message"), c = Fo("MessageForm");
  return ct(), Kt(ye, null, [
    Ne("div", Xa, [
      (ct(!0), Kt(ye, null, Hl(o.messages, (l) => (ct(), Er(r, {
        key: l.id,
        message: l
      }, null, 8, ["message"]))), 128))
    ]),
    ke(c, { thread: n.thread }, null, 8, ["thread"])
  ], 64);
}
const ef = /* @__PURE__ */ Eo(Ga, [["render", Za]]), tf = { class: "flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen" }, nf = {
  __name: "App",
  setup(e) {
    return (t, n) => (ct(), Kt("div", tf, [
      ke(ef, { thread: 1 })
    ]));
  }
};
var Ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Mr = {}, cs = {}, _n = {}, an = {}, sf = {
  get exports() {
    return an;
  },
  set exports(e) {
    an = e;
  }
}, Wt = typeof Reflect == "object" ? Reflect : null, fi = Wt && typeof Wt.apply == "function" ? Wt.apply : function(t, n, s) {
  return Function.prototype.apply.call(t, n, s);
}, $n;
Wt && typeof Wt.ownKeys == "function" ? $n = Wt.ownKeys : Object.getOwnPropertySymbols ? $n = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : $n = function(t) {
  return Object.getOwnPropertyNames(t);
};
function of(e) {
  console && console.warn && console.warn(e);
}
var $r = Number.isNaN || function(t) {
  return t !== t;
};
function K() {
  K.init.call(this);
}
sf.exports = K;
an.once = uf;
K.EventEmitter = K;
K.prototype._events = void 0;
K.prototype._eventsCount = 0;
K.prototype._maxListeners = void 0;
var di = 10;
function ls(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(K, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return di;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || $r(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    di = e;
  }
});
K.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
K.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || $r(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function Lr(e) {
  return e._maxListeners === void 0 ? K.defaultMaxListeners : e._maxListeners;
}
K.prototype.getMaxListeners = function() {
  return Lr(this);
};
K.prototype.emit = function(t) {
  for (var n = [], s = 1; s < arguments.length; s++)
    n.push(arguments[s]);
  var o = t === "error", i = this._events;
  if (i !== void 0)
    o = o && i.error === void 0;
  else if (!o)
    return !1;
  if (o) {
    var r;
    if (n.length > 0 && (r = n[0]), r instanceof Error)
      throw r;
    var c = new Error("Unhandled error." + (r ? " (" + r.message + ")" : ""));
    throw c.context = r, c;
  }
  var l = i[t];
  if (l === void 0)
    return !1;
  if (typeof l == "function")
    fi(l, this, n);
  else
    for (var a = l.length, h = Wr(l, a), s = 0; s < a; ++s)
      fi(h[s], this, n);
  return !0;
};
function Fr(e, t, n, s) {
  var o, i, r;
  if (ls(n), i = e._events, i === void 0 ? (i = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (i.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    n.listener ? n.listener : n
  ), i = e._events), r = i[t]), r === void 0)
    r = i[t] = n, ++e._eventsCount;
  else if (typeof r == "function" ? r = i[t] = s ? [n, r] : [r, n] : s ? r.unshift(n) : r.push(n), o = Lr(e), o > 0 && r.length > o && !r.warned) {
    r.warned = !0;
    var c = new Error("Possible EventEmitter memory leak detected. " + r.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    c.name = "MaxListenersExceededWarning", c.emitter = e, c.type = t, c.count = r.length, of(c);
  }
  return e;
}
K.prototype.addListener = function(t, n) {
  return Fr(this, t, n, !1);
};
K.prototype.on = K.prototype.addListener;
K.prototype.prependListener = function(t, n) {
  return Fr(this, t, n, !0);
};
function rf() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Ur(e, t, n) {
  var s = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n }, o = rf.bind(s);
  return o.listener = n, s.wrapFn = o, o;
}
K.prototype.once = function(t, n) {
  return ls(n), this.on(t, Ur(this, t, n)), this;
};
K.prototype.prependOnceListener = function(t, n) {
  return ls(n), this.prependListener(t, Ur(this, t, n)), this;
};
K.prototype.removeListener = function(t, n) {
  var s, o, i, r, c;
  if (ls(n), o = this._events, o === void 0)
    return this;
  if (s = o[t], s === void 0)
    return this;
  if (s === n || s.listener === n)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete o[t], o.removeListener && this.emit("removeListener", t, s.listener || n));
  else if (typeof s != "function") {
    for (i = -1, r = s.length - 1; r >= 0; r--)
      if (s[r] === n || s[r].listener === n) {
        c = s[r].listener, i = r;
        break;
      }
    if (i < 0)
      return this;
    i === 0 ? s.shift() : cf(s, i), s.length === 1 && (o[t] = s[0]), o.removeListener !== void 0 && this.emit("removeListener", t, c || n);
  }
  return this;
};
K.prototype.off = K.prototype.removeListener;
K.prototype.removeAllListeners = function(t) {
  var n, s, o;
  if (s = this._events, s === void 0)
    return this;
  if (s.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : s[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete s[t]), this;
  if (arguments.length === 0) {
    var i = Object.keys(s), r;
    for (o = 0; o < i.length; ++o)
      r = i[o], r !== "removeListener" && this.removeAllListeners(r);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (n = s[t], typeof n == "function")
    this.removeListener(t, n);
  else if (n !== void 0)
    for (o = n.length - 1; o >= 0; o--)
      this.removeListener(t, n[o]);
  return this;
};
function Hr(e, t, n) {
  var s = e._events;
  if (s === void 0)
    return [];
  var o = s[t];
  return o === void 0 ? [] : typeof o == "function" ? n ? [o.listener || o] : [o] : n ? lf(o) : Wr(o, o.length);
}
K.prototype.listeners = function(t) {
  return Hr(this, t, !0);
};
K.prototype.rawListeners = function(t) {
  return Hr(this, t, !1);
};
K.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Br.call(e, t);
};
K.prototype.listenerCount = Br;
function Br(e) {
  var t = this._events;
  if (t !== void 0) {
    var n = t[e];
    if (typeof n == "function")
      return 1;
    if (n !== void 0)
      return n.length;
  }
  return 0;
}
K.prototype.eventNames = function() {
  return this._eventsCount > 0 ? $n(this._events) : [];
};
function Wr(e, t) {
  for (var n = new Array(t), s = 0; s < t; ++s)
    n[s] = e[s];
  return n;
}
function cf(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function lf(e) {
  for (var t = new Array(e.length), n = 0; n < t.length; ++n)
    t[n] = e[n].listener || e[n];
  return t;
}
function uf(e, t) {
  return new Promise(function(n, s) {
    function o(r) {
      e.removeListener(t, i), s(r);
    }
    function i() {
      typeof e.removeListener == "function" && e.removeListener("error", o), n([].slice.call(arguments));
    }
    Kr(e, t, i, { once: !0 }), t !== "error" && af(e, o, { once: !0 });
  });
}
function af(e, t, n) {
  typeof e.on == "function" && Kr(e, "error", t, n);
}
function Kr(e, t, n, s) {
  if (typeof e.on == "function")
    s.once ? e.once(t, n) : e.on(t, n);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function o(i) {
      s.once && e.removeEventListener(t, o), n(i);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var ve = {};
Object.defineProperty(ve, "__esModule", { value: !0 });
ve.unsubscribedCodes = ve.subscribingCodes = ve.disconnectedCodes = ve.connectingCodes = ve.errorCodes = void 0;
ve.errorCodes = {
  timeout: 1,
  transportClosed: 2,
  clientDisconnected: 3,
  clientClosed: 4,
  clientConnectToken: 5,
  clientRefreshToken: 6,
  subscriptionUnsubscribed: 7,
  subscriptionSubscribeToken: 8,
  subscriptionRefreshToken: 9,
  transportWriteError: 10,
  connectionClosed: 11
};
ve.connectingCodes = {
  connectCalled: 0,
  transportClosed: 1,
  noPing: 2,
  subscribeTimeout: 3,
  unsubscribeError: 4
};
ve.disconnectedCodes = {
  disconnectCalled: 0,
  unauthorized: 1,
  badProtocol: 2,
  messageSizeLimit: 3
};
ve.subscribingCodes = {
  subscribeCalled: 0,
  transportClosed: 1
};
ve.unsubscribedCodes = {
  unsubscribeCalled: 0,
  unauthorized: 1,
  clientClosed: 2
};
var us = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.SubscriptionState = e.State = void 0, function(t) {
    t.Disconnected = "disconnected", t.Connecting = "connecting", t.Connected = "connected";
  }(e.State || (e.State = {})), function(t) {
    t.Unsubscribed = "unsubscribed", t.Subscribing = "subscribing", t.Subscribed = "subscribed";
  }(e.SubscriptionState || (e.SubscriptionState = {}));
})(us);
var _e = {};
Object.defineProperty(_e, "__esModule", { value: !0 });
_e.ttlMilliseconds = _e.errorExists = _e.backoff = _e.log = _e.isFunction = _e.startsWith = void 0;
function ff(e, t) {
  return e.lastIndexOf(t, 0) === 0;
}
_e.startsWith = ff;
function Jr(e) {
  return e == null ? !1 : typeof e == "function";
}
_e.isFunction = Jr;
function df(e, t) {
  if (globalThis.console) {
    const n = globalThis.console[e];
    Jr(n) && n.apply(globalThis.console, t);
  }
}
_e.log = df;
function hf(e, t) {
  return Math.floor(Math.random() * (t - e + 1) + e);
}
function pf(e, t, n) {
  e > 31 && (e = 31);
  const s = hf(0, Math.min(n, t * Math.pow(2, e)));
  return Math.min(n, t + s);
}
_e.backoff = pf;
function _f(e) {
  return "error" in e && e.error !== null;
}
_e.errorExists = _f;
function gf(e) {
  return Math.min(e * 1e3, 2147483647);
}
_e.ttlMilliseconds = gf;
var mf = Ue && Ue.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(_n, "__esModule", { value: !0 });
_n.Subscription = void 0;
const bf = mf(an), Oe = ve, Ce = us, Nn = _e;
class Ef extends bf.default {
  /** Subscription constructor should not be used directly, create subscriptions using Client method. */
  constructor(t, n, s) {
    super(), this._resubscribeTimeout = null, this._refreshTimeout = null, this.channel = n, this.state = Ce.SubscriptionState.Unsubscribed, this._centrifuge = t, this._token = null, this._getToken = null, this._data = null, this._recover = !1, this._offset = null, this._epoch = null, this._recoverable = !1, this._positioned = !1, this._joinLeave = !1, this._minResubscribeDelay = 500, this._maxResubscribeDelay = 2e4, this._resubscribeTimeout = null, this._resubscribeAttempts = 0, this._promises = {}, this._promiseId = 0, this._inflight = !1, this._refreshTimeout = null, this._setOptions(s), this._centrifuge._debugEnabled ? (this.on("state", (o) => {
      this._centrifuge._debug("subscription state", n, o.oldState, "->", o.newState);
    }), this.on("error", (o) => {
      this._centrifuge._debug("subscription error", n, o);
    })) : this.on("error", function() {
      Function.prototype();
    });
  }
  /** ready returns a Promise which resolves upon subscription goes to Subscribed
   * state and rejects in case of subscription goes to Unsubscribed state.
   * Optional timeout can be passed.*/
  ready(t) {
    return this.state === Ce.SubscriptionState.Unsubscribed ? Promise.reject({ code: Oe.errorCodes.subscriptionUnsubscribed, message: this.state }) : this.state === Ce.SubscriptionState.Subscribed ? Promise.resolve() : new Promise((n, s) => {
      const o = {
        resolve: n,
        reject: s
      };
      t && (o.timeout = setTimeout(function() {
        s({ code: Oe.errorCodes.timeout, message: "timeout" });
      }, t)), this._promises[this._nextPromiseId()] = o;
    });
  }
  /** subscribe to a channel.*/
  subscribe() {
    this._isSubscribed() || (this._resubscribeAttempts = 0, this._setSubscribing(Oe.subscribingCodes.subscribeCalled, "subscribe called"));
  }
  /** unsubscribe from a channel, keeping position state.*/
  unsubscribe() {
    this._setUnsubscribed(Oe.unsubscribedCodes.unsubscribeCalled, "unsubscribe called", !0);
  }
  /** publish data to a channel.*/
  publish(t) {
    const n = this;
    return this._methodCall().then(function() {
      return n._centrifuge.publish(n.channel, t);
    });
  }
  /** get online presence for a channel.*/
  presence() {
    const t = this;
    return this._methodCall().then(function() {
      return t._centrifuge.presence(t.channel);
    });
  }
  /** presence stats for a channel (num clients and unique users).*/
  presenceStats() {
    const t = this;
    return this._methodCall().then(function() {
      return t._centrifuge.presenceStats(t.channel);
    });
  }
  /** history for a channel. By default it does not return publications (only current
   *  StreamPosition data) – provide an explicit limit > 0 to load publications.*/
  history(t) {
    const n = this;
    return this._methodCall().then(function() {
      return n._centrifuge.history(n.channel, t);
    });
  }
  _methodCall() {
    return this._isSubscribed() ? Promise.resolve() : this._isUnsubscribed() ? Promise.reject({ code: Oe.errorCodes.subscriptionUnsubscribed, message: this.state }) : new Promise((t, n) => {
      const s = setTimeout(function() {
        n({ code: Oe.errorCodes.timeout, message: "timeout" });
      }, this._centrifuge._config.timeout);
      this._promises[this._nextPromiseId()] = {
        timeout: s,
        resolve: t,
        reject: n
      };
    });
  }
  _nextPromiseId() {
    return ++this._promiseId;
  }
  _needRecover() {
    return this._recover === !0;
  }
  _isUnsubscribed() {
    return this.state === Ce.SubscriptionState.Unsubscribed;
  }
  _isSubscribing() {
    return this.state === Ce.SubscriptionState.Subscribing;
  }
  _isSubscribed() {
    return this.state === Ce.SubscriptionState.Subscribed;
  }
  _setState(t) {
    if (this.state !== t) {
      const n = this.state;
      return this.state = t, this.emit("state", { newState: t, oldState: n, channel: this.channel }), !0;
    }
    return !1;
  }
  _usesToken() {
    return this._token !== null || this._getToken !== null;
  }
  _clearSubscribingState() {
    this._resubscribeAttempts = 0, this._clearResubscribeTimeout();
  }
  _clearSubscribedState() {
    this._clearRefreshTimeout();
  }
  _setSubscribed(t) {
    if (!this._isSubscribing())
      return;
    this._clearSubscribingState(), t.recoverable && (this._recover = !0, this._offset = t.offset || 0, this._epoch = t.epoch || ""), this._setState(Ce.SubscriptionState.Subscribed);
    const n = this._centrifuge._getSubscribeContext(this.channel, t);
    this.emit("subscribed", n), this._resolvePromises();
    const s = t.publications;
    if (s && s.length > 0)
      for (const o in s)
        s.hasOwnProperty(o) && this._handlePublication(s[o]);
    t.expires === !0 && (this._refreshTimeout = setTimeout(() => this._refresh(), (0, Nn.ttlMilliseconds)(t.ttl)));
  }
  _setSubscribing(t, n) {
    this._isSubscribing() || (this._isSubscribed() && this._clearSubscribedState(), this._setState(Ce.SubscriptionState.Subscribing) && this.emit("subscribing", { channel: this.channel, code: t, reason: n }), this._subscribe(!1, !1));
  }
  _subscribe(t, n) {
    if (this._centrifuge._debug("subscribing on", this.channel), this._centrifuge.state !== Ce.State.Connected && !t)
      return this._centrifuge._debug("delay subscribe on", this.channel, "till connected"), null;
    if (this._usesToken()) {
      if (this._token)
        return this._sendSubscribe(this._token, n);
      {
        if (t)
          return null;
        const s = this;
        return this._getSubscriptionToken().then(function(o) {
          if (s._isSubscribing()) {
            if (!o) {
              s._failUnauthorized();
              return;
            }
            s._token = o, s._sendSubscribe(o, !1);
          }
        }).catch(function(o) {
          s._isSubscribing() && (s.emit("error", {
            type: "subscribeToken",
            channel: s.channel,
            error: {
              code: Oe.errorCodes.subscriptionSubscribeToken,
              message: o !== void 0 ? o.toString() : ""
            }
          }), s._scheduleResubscribe());
        }), null;
      }
    } else
      return this._sendSubscribe("", n);
  }
  _sendSubscribe(t, n) {
    const o = {
      channel: this.channel
    };
    if (t && (o.token = t), this._data && (o.data = this._data), this._positioned && (o.positioned = !0), this._recoverable && (o.recoverable = !0), this._joinLeave && (o.join_leave = !0), this._needRecover()) {
      o.recover = !0;
      const r = this._getOffset();
      r && (o.offset = r);
      const c = this._getEpoch();
      c && (o.epoch = c);
    }
    const i = { subscribe: o };
    return this._inflight = !0, this._centrifuge._call(i, n).then((r) => {
      this._inflight = !1;
      const c = r.reply.subscribe;
      this._handleSubscribeResponse(c), r.next && r.next();
    }, (r) => {
      this._inflight = !1, this._handleSubscribeError(r.error), r.next && r.next();
    }), i;
  }
  _handleSubscribeError(t) {
    if (this._isSubscribing()) {
      if (t.code === Oe.errorCodes.timeout) {
        this._centrifuge._disconnect(Oe.connectingCodes.subscribeTimeout, "subscribe timeout", !0);
        return;
      }
      this._subscribeError(t);
    }
  }
  _handleSubscribeResponse(t) {
    this._isSubscribing() && this._setSubscribed(t);
  }
  _setUnsubscribed(t, n, s) {
    this._isUnsubscribed() || (this._isSubscribed() && (s && this._centrifuge._unsubscribe(this), this._clearSubscribedState()), this._isSubscribing() && this._clearSubscribingState(), this._setState(Ce.SubscriptionState.Unsubscribed) && this.emit("unsubscribed", { channel: this.channel, code: t, reason: n }), this._rejectPromises({ code: Oe.errorCodes.subscriptionUnsubscribed, message: this.state }));
  }
  _handlePublication(t) {
    const n = this._centrifuge._getPublicationContext(this.channel, t);
    this.emit("publication", n), t.offset && (this._offset = t.offset);
  }
  _handleJoin(t) {
    const n = this._centrifuge._getJoinLeaveContext(t.info);
    this.emit("join", { channel: this.channel, info: n });
  }
  _handleLeave(t) {
    const n = this._centrifuge._getJoinLeaveContext(t.info);
    this.emit("leave", { channel: this.channel, info: n });
  }
  _resolvePromises() {
    for (const t in this._promises)
      this._promises[t].timeout && clearTimeout(this._promises[t].timeout), this._promises[t].resolve(), delete this._promises[t];
  }
  _rejectPromises(t) {
    for (const n in this._promises)
      this._promises[n].timeout && clearTimeout(this._promises[n].timeout), this._promises[n].reject(t), delete this._promises[n];
  }
  _scheduleResubscribe() {
    const t = this, n = this._getResubscribeDelay();
    this._resubscribeTimeout = setTimeout(function() {
      t._isSubscribing() && t._subscribe(!1, !1);
    }, n);
  }
  _subscribeError(t) {
    if (this._isSubscribing())
      if (t.code < 100 || t.code === 109 || t.temporary === !0) {
        t.code === 109 && (this._token = null);
        const n = {
          channel: this.channel,
          type: "subscribe",
          error: t
        };
        this._centrifuge.state === Ce.State.Connected && this.emit("error", n), this._scheduleResubscribe();
      } else
        this._setUnsubscribed(t.code, t.message, !1);
  }
  _getResubscribeDelay() {
    const t = (0, Nn.backoff)(this._resubscribeAttempts, this._minResubscribeDelay, this._maxResubscribeDelay);
    return this._resubscribeAttempts++, t;
  }
  _setOptions(t) {
    t && (t.since && (this._offset = t.since.offset, this._epoch = t.since.epoch, this._recover = !0), t.data && (this._data = t.data), t.minResubscribeDelay !== void 0 && (this._minResubscribeDelay = t.minResubscribeDelay), t.maxResubscribeDelay !== void 0 && (this._maxResubscribeDelay = t.maxResubscribeDelay), t.token && (this._token = t.token), t.getToken && (this._getToken = t.getToken), t.positioned === !0 && (this._positioned = !0), t.recoverable === !0 && (this._recoverable = !0), t.joinLeave === !0 && (this._joinLeave = !0));
  }
  _getOffset() {
    const t = this._offset;
    return t !== null ? t : 0;
  }
  _getEpoch() {
    const t = this._epoch;
    return t !== null ? t : "";
  }
  _clearRefreshTimeout() {
    this._refreshTimeout !== null && (clearTimeout(this._refreshTimeout), this._refreshTimeout = null);
  }
  _clearResubscribeTimeout() {
    this._resubscribeTimeout !== null && (clearTimeout(this._resubscribeTimeout), this._resubscribeTimeout = null);
  }
  _getSubscriptionToken() {
    this._centrifuge._debug("get subscription token for channel", this.channel);
    const t = {
      channel: this.channel
    }, n = this._getToken;
    if (n === null)
      throw new Error("provide a function to get channel subscription token");
    return n(t);
  }
  _refresh() {
    this._clearRefreshTimeout();
    const t = this;
    this._getSubscriptionToken().then(function(n) {
      if (!t._isSubscribed())
        return;
      if (!n) {
        t._failUnauthorized();
        return;
      }
      t._token = n;
      const o = {
        sub_refresh: {
          channel: t.channel,
          token: n
        }
      };
      t._centrifuge._call(o).then((i) => {
        const r = i.reply.sub_refresh;
        t._refreshResponse(r), i.next && i.next();
      }, (i) => {
        t._refreshError(i.error), i.next && i.next();
      });
    }).catch(function(n) {
      t.emit("error", {
        type: "refreshToken",
        channel: t.channel,
        error: {
          code: Oe.errorCodes.subscriptionRefreshToken,
          message: n !== void 0 ? n.toString() : ""
        }
      }), t._refreshTimeout = setTimeout(() => t._refresh(), t._getRefreshRetryDelay());
    });
  }
  _refreshResponse(t) {
    this._isSubscribed() && (this._centrifuge._debug("subscription token refreshed, channel", this.channel), this._clearRefreshTimeout(), t.expires === !0 && (this._refreshTimeout = setTimeout(() => this._refresh(), (0, Nn.ttlMilliseconds)(t.ttl))));
  }
  _refreshError(t) {
    this._isSubscribed() && (t.code < 100 || t.temporary === !0 ? (this.emit("error", {
      type: "refresh",
      channel: this.channel,
      error: t
    }), this._refreshTimeout = setTimeout(() => this._refresh(), this._getRefreshRetryDelay())) : this._setUnsubscribed(t.code, t.message, !0));
  }
  _getRefreshRetryDelay() {
    return (0, Nn.backoff)(0, 1e4, 2e4);
  }
  _failUnauthorized() {
    this._setUnsubscribed(Oe.unsubscribedCodes.unauthorized, "unauthorized", !0);
  }
}
_n.Subscription = Ef;
var as = {};
Object.defineProperty(as, "__esModule", { value: !0 });
as.SockjsTransport = void 0;
class yf {
  constructor(t, n) {
    this.endpoint = t, this.options = n, this._transport = null;
  }
  name() {
    return "sockjs";
  }
  subName() {
    return "sockjs-" + this._transport.transport;
  }
  emulation() {
    return !1;
  }
  supported() {
    return this.options.sockjs !== null;
  }
  initialize(t, n) {
    this._transport = new this.options.sockjs(this.endpoint, null, this.options.sockjsOptions), this._transport.onopen = () => {
      n.onOpen();
    }, this._transport.onerror = (s) => {
      n.onError(s);
    }, this._transport.onclose = (s) => {
      n.onClose(s);
    }, this._transport.onmessage = (s) => {
      n.onMessage(s.data);
    };
  }
  close() {
    this._transport.close();
  }
  send(t) {
    this._transport.send(t);
  }
}
as.SockjsTransport = yf;
var fs = {};
Object.defineProperty(fs, "__esModule", { value: !0 });
fs.WebsocketTransport = void 0;
class vf {
  constructor(t, n) {
    this.endpoint = t, this.options = n, this._transport = null;
  }
  name() {
    return "websocket";
  }
  subName() {
    return "websocket";
  }
  emulation() {
    return !1;
  }
  supported() {
    return this.options.websocket !== void 0 && this.options.websocket !== null;
  }
  initialize(t, n) {
    let s = "";
    t === "protobuf" && (s = "centrifuge-protobuf"), s !== "" ? this._transport = new this.options.websocket(this.endpoint, s) : this._transport = new this.options.websocket(this.endpoint), t === "protobuf" && (this._transport.binaryType = "arraybuffer"), this._transport.onopen = () => {
      n.onOpen();
    }, this._transport.onerror = (o) => {
      n.onError(o);
    }, this._transport.onclose = (o) => {
      n.onClose(o);
    }, this._transport.onmessage = (o) => {
      n.onMessage(o.data);
    };
  }
  close() {
    this._transport.close();
  }
  send(t) {
    this._transport.send(t);
  }
}
fs.WebsocketTransport = vf;
var ds = {};
Object.defineProperty(ds, "__esModule", { value: !0 });
ds.HttpStreamTransport = void 0;
class wf {
  constructor(t, n) {
    this.endpoint = t, this.options = n, this._abortController = null, this._utf8decoder = new TextDecoder(), this._protocol = "json";
  }
  name() {
    return "http_stream";
  }
  subName() {
    return "http_stream";
  }
  emulation() {
    return !0;
  }
  _handleErrors(t) {
    if (!t.ok)
      throw new Error(t.status);
    return t;
  }
  _fetchEventTarget(t, n, s) {
    const o = new EventTarget(), i = t.options.fetch;
    return i(n, s).then(t._handleErrors).then((r) => {
      o.dispatchEvent(new Event("open"));
      let c = "", l = 0, a = new Uint8Array();
      const h = r.body.getReader();
      return new t.options.readableStream({
        start(d) {
          function _() {
            return h.read().then(({ done: S, value: x }) => {
              if (S) {
                o.dispatchEvent(new Event("close")), d.close();
                return;
              }
              try {
                if (t._protocol === "json")
                  for (c += t._utf8decoder.decode(x); l < c.length; )
                    if (c[l] === `
`) {
                      const O = c.substring(0, l);
                      o.dispatchEvent(new MessageEvent("message", { data: O })), c = c.substring(l + 1), l = 0;
                    } else
                      ++l;
                else {
                  const O = new Uint8Array(a.length + x.length);
                  for (O.set(a), O.set(x, a.length), a = O; ; ) {
                    const M = t.options.decoder.decodeReply(a);
                    if (M.ok) {
                      const U = a.slice(0, M.pos);
                      o.dispatchEvent(new MessageEvent("message", { data: U })), a = a.slice(M.pos);
                      continue;
                    }
                    break;
                  }
                }
              } catch (O) {
                o.dispatchEvent(new Event("error", { detail: O })), o.dispatchEvent(new Event("close")), d.close();
                return;
              }
              _();
            }).catch(function(S) {
              o.dispatchEvent(new Event("error", { detail: S })), o.dispatchEvent(new Event("close")), d.close();
            });
          }
          return _();
        }
      });
    }).catch((r) => {
      o.dispatchEvent(new Event("error", { detail: r })), o.dispatchEvent(new Event("close"));
    }), o;
  }
  supported() {
    return this.options.fetch !== null && this.options.readableStream !== null && typeof TextDecoder < "u" && typeof AbortController < "u" && typeof EventTarget < "u" && typeof Event < "u" && typeof MessageEvent < "u" && typeof Error < "u";
  }
  initialize(t, n, s) {
    this._protocol = t, this._abortController = new AbortController();
    let o, i;
    t === "json" ? (o = {
      Accept: "application/json",
      "Content-Type": "application/json"
    }, i = s) : (o = {
      Accept: "application/octet-stream",
      "Content-Type": "application/octet-stream"
    }, i = s);
    const r = {
      method: "POST",
      headers: o,
      body: i,
      mode: "cors",
      credentials: "same-origin",
      cache: "no-cache",
      signal: this._abortController.signal
    }, c = this._fetchEventTarget(this, this.endpoint, r);
    c.addEventListener("open", () => {
      n.onOpen();
    }), c.addEventListener("error", (l) => {
      this._abortController.abort(), n.onError(l);
    }), c.addEventListener("close", () => {
      this._abortController.abort(), n.onClose({
        code: 4,
        reason: "connection closed"
      });
    }), c.addEventListener("message", (l) => {
      n.onMessage(l.data);
    });
  }
  close() {
    this._abortController.abort();
  }
  send(t, n, s) {
    let o, i;
    const r = {
      session: n,
      node: s,
      data: t
    };
    this._protocol === "json" ? (o = {
      "Content-Type": "application/json"
    }, i = JSON.stringify(r)) : (o = {
      "Content-Type": "application/octet-stream"
    }, i = this.options.encoder.encodeEmulationRequest(r));
    const c = this.options.fetch, l = {
      method: "POST",
      headers: o,
      body: i,
      mode: "cors",
      credentials: "same-origin",
      cache: "no-cache"
    };
    c(this.options.emulationEndpoint, l);
  }
}
ds.HttpStreamTransport = wf;
var hs = {};
Object.defineProperty(hs, "__esModule", { value: !0 });
hs.SseTransport = void 0;
class Of {
  constructor(t, n) {
    this.endpoint = t, this.options = n, this._protocol = "json", this._transport = null, this._onClose = null;
  }
  name() {
    return "sse";
  }
  subName() {
    return "sse";
  }
  emulation() {
    return !0;
  }
  supported() {
    return this.options.eventsource !== null && this.options.fetch !== null;
  }
  initialize(t, n, s) {
    let o;
    globalThis && globalThis.document && globalThis.document.baseURI ? o = new URL(this.endpoint, globalThis.document.baseURI) : o = new URL(this.endpoint), o.searchParams.append("cf_connect", s);
    const i = {}, r = new this.options.eventsource(o.toString(), i);
    this._transport = r;
    const c = this;
    r.onopen = function() {
      n.onOpen();
    }, r.onerror = function(l) {
      r.close(), n.onError(l), n.onClose({
        code: 4,
        reason: "connection closed"
      });
    }, r.onmessage = function(l) {
      n.onMessage(l.data);
    }, c._onClose = function() {
      n.onClose({
        code: 4,
        reason: "connection closed"
      });
    };
  }
  close() {
    this._transport.close(), this._onClose !== null && this._onClose();
  }
  send(t, n, s) {
    const o = {
      session: n,
      node: s,
      data: t
    }, i = {
      "Content-Type": "application/json"
    }, r = JSON.stringify(o), c = this.options.fetch, l = {
      method: "POST",
      headers: i,
      body: r,
      mode: "cors",
      credentials: "same-origin",
      cache: "no-cache"
    };
    c(this.options.emulationEndpoint, l);
  }
}
hs.SseTransport = Of;
var ps = {}, Sn = Ue && Ue.__awaiter || function(e, t, n, s) {
  function o(i) {
    return i instanceof n ? i : new n(function(r) {
      r(i);
    });
  }
  return new (n || (n = Promise))(function(i, r) {
    function c(h) {
      try {
        a(s.next(h));
      } catch (d) {
        r(d);
      }
    }
    function l(h) {
      try {
        a(s.throw(h));
      } catch (d) {
        r(d);
      }
    }
    function a(h) {
      h.done ? i(h.value) : o(h.value).then(c, l);
    }
    a((s = s.apply(e, t || [])).next());
  });
};
Object.defineProperty(ps, "__esModule", { value: !0 });
ps.WebtransportTransport = void 0;
class Nf {
  constructor(t, n) {
    this.endpoint = t, this.options = n, this._transport = null, this._stream = null, this._writer = null, this._utf8decoder = new TextDecoder(), this._protocol = "json";
  }
  name() {
    return "webtransport";
  }
  subName() {
    return "webtransport";
  }
  emulation() {
    return !1;
  }
  supported() {
    return this.options.webtransport !== void 0 && this.options.webtransport !== null;
  }
  initialize(t, n) {
    return Sn(this, void 0, void 0, function* () {
      let s;
      globalThis && globalThis.document && globalThis.document.baseURI ? s = new URL(this.endpoint, globalThis.document.baseURI) : s = new URL(this.endpoint), t === "protobuf" && s.searchParams.append("cf_protocol", "protobuf"), this._protocol = t;
      const o = new EventTarget();
      this._transport = new this.options.webtransport(s.toString()), this._transport.closed.then(() => {
        n.onClose({
          code: 4,
          reason: "connection closed"
        });
      }).catch(() => {
        n.onClose({
          code: 4,
          reason: "connection closed"
        });
      });
      try {
        yield this._transport.ready;
      } catch {
        this.close();
        return;
      }
      let i;
      try {
        i = yield this._transport.createBidirectionalStream();
      } catch {
        this.close();
        return;
      }
      this._stream = i, this._writer = this._stream.writable.getWriter(), o.addEventListener("close", () => {
        n.onClose({
          code: 4,
          reason: "connection closed"
        });
      }), o.addEventListener("message", (r) => {
        n.onMessage(r.data);
      }), this._startReading(o), n.onOpen();
    });
  }
  _startReading(t) {
    return Sn(this, void 0, void 0, function* () {
      const n = this._stream.readable.getReader();
      let s = "", o = 0, i = new Uint8Array();
      try {
        for (; ; ) {
          const { done: r, value: c } = yield n.read();
          if (c.length > 0)
            if (this._protocol === "json")
              for (s += this._utf8decoder.decode(c); o < s.length; )
                if (s[o] === `
`) {
                  const l = s.substring(0, o);
                  t.dispatchEvent(new MessageEvent("message", { data: l })), s = s.substring(o + 1), o = 0;
                } else
                  ++o;
            else {
              const l = new Uint8Array(i.length + c.length);
              for (l.set(i), l.set(c, i.length), i = l; ; ) {
                const a = this.options.decoder.decodeReply(i);
                if (a.ok) {
                  const h = i.slice(0, a.pos);
                  t.dispatchEvent(new MessageEvent("message", { data: h })), i = i.slice(a.pos);
                  continue;
                }
                break;
              }
            }
          if (r)
            break;
        }
      } catch {
        t.dispatchEvent(new Event("close"));
      }
    });
  }
  close() {
    return Sn(this, void 0, void 0, function* () {
      try {
        this._writer && (yield this._writer.close()), this._transport.close();
      } catch {
      }
    });
  }
  send(t) {
    return Sn(this, void 0, void 0, function* () {
      let n;
      this._protocol === "json" ? n = new TextEncoder().encode(t + `
`) : n = t;
      try {
        yield this._writer.write(n);
      } catch {
        this.close();
      }
    });
  }
}
ps.WebtransportTransport = Nf;
var zt = {};
Object.defineProperty(zt, "__esModule", { value: !0 });
zt.JsonDecoder = zt.JsonEncoder = void 0;
class Sf {
  encodeCommands(t) {
    return t.map((n) => JSON.stringify(n)).join(`
`);
  }
}
zt.JsonEncoder = Sf;
class Tf {
  decodeReplies(t) {
    return t.trim().split(`
`).map((n) => JSON.parse(n));
  }
}
zt.JsonDecoder = Tf;
var Cf = Ue && Ue.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(cs, "__esModule", { value: !0 });
cs.Centrifuge = void 0;
const xf = _n, se = ve, Df = as, hi = fs, Pf = ds, Vf = hs, kf = ps, pi = zt, nt = _e, ne = us, Rf = Cf(an), If = {
  protocol: "json",
  token: null,
  getToken: null,
  data: null,
  debug: !1,
  name: "js",
  version: "",
  fetch: null,
  readableStream: null,
  websocket: null,
  eventsource: null,
  sockjs: null,
  sockjsOptions: {},
  emulationEndpoint: "/emulation",
  minReconnectDelay: 500,
  maxReconnectDelay: 2e4,
  timeout: 5e3,
  maxServerPingDelay: 1e4,
  networkEventTarget: null
};
class yo extends Rf.default {
  /** Constructs Centrifuge client. Call connect() method to start connecting. */
  constructor(t, n) {
    super(), this._reconnectTimeout = null, this._refreshTimeout = null, this._serverPingTimeout = null, this.state = ne.State.Disconnected, this._endpoint = t, this._emulation = !1, this._transports = [], this._currentTransportIndex = 0, this._triedAllTransports = !1, this._transportWasOpen = !1, this._transport = null, this._transportClosed = !0, this._encoder = null, this._decoder = null, this._reconnecting = !1, this._reconnectTimeout = null, this._reconnectAttempts = 0, this._client = null, this._session = "", this._node = "", this._subs = {}, this._serverSubs = {}, this._commandId = 0, this._commands = [], this._batching = !1, this._refreshRequired = !1, this._refreshTimeout = null, this._callbacks = {}, this._token = void 0, this._dispatchPromise = Promise.resolve(), this._serverPing = 0, this._serverPingTimeout = null, this._sendPong = !1, this._promises = {}, this._promiseId = 0, this._debugEnabled = !1, this._config = Object.assign(Object.assign({}, If), n), this._configure(), this._debugEnabled ? (this.on("state", (s) => {
      this._debug("client state", s.oldState, "->", s.newState);
    }), this.on("error", (s) => {
      this._debug("client error", s);
    })) : this.on("error", function() {
      Function.prototype();
    });
  }
  /** newSubscription allocates new Subscription to a channel. Since server only allows
   * one subscription per channel per client this method throws if client already has
   * channel subscription in internal registry.
   * */
  newSubscription(t, n) {
    if (this.getSubscription(t) !== null)
      throw new Error("Subscription to the channel " + t + " already exists");
    const s = new xf.Subscription(this, t, n);
    return this._subs[t] = s, s;
  }
  /** getSubscription returns Subscription if it's registered in the internal
   * registry or null. */
  getSubscription(t) {
    return this._getSub(t);
  }
  /** removeSubscription allows removing Subcription from the internal registry. Subscrption
   * must be in unsubscribed state. */
  removeSubscription(t) {
    t && (t.state !== ne.SubscriptionState.Unsubscribed && t.unsubscribe(), this._removeSubscription(t));
  }
  /** Get a map with all current client-side subscriptions. */
  subscriptions() {
    return this._subs;
  }
  /** ready returns a Promise which resolves upon client goes to Connected
   * state and rejects in case of client goes to Disconnected or Failed state.
   * Users can provide optional timeout in milliseconds. */
  ready(t) {
    return this.state === ne.State.Disconnected ? Promise.reject({ code: se.errorCodes.clientDisconnected, message: "client disconnected" }) : this.state === ne.State.Connected ? Promise.resolve() : new Promise((n, s) => {
      const o = {
        resolve: n,
        reject: s
      };
      t && (o.timeout = setTimeout(function() {
        s({ code: se.errorCodes.timeout, message: "timeout" });
      }, t)), this._promises[this._nextPromiseId()] = o;
    });
  }
  /** connect to a server. */
  connect() {
    if (this._isConnected()) {
      this._debug("connect called when already connected");
      return;
    }
    if (this._isConnecting()) {
      this._debug("connect called when already connecting");
      return;
    }
    this._reconnectAttempts = 0, this._startConnecting();
  }
  /** disconnect from a server. */
  disconnect() {
    this._disconnect(se.disconnectedCodes.disconnectCalled, "disconnect called", !1);
  }
  /** send asynchronous data to a server (without any response from a server
   * expected, see rpc method if you need response). */
  send(t) {
    const n = {
      send: {
        data: t
      }
    }, s = this;
    return this._methodCall().then(function() {
      return s._transportSendCommands([n]) ? Promise.resolve() : Promise.reject(s._createErrorObject(se.errorCodes.transportWriteError, "transport write error"));
    });
  }
  /** rpc to a server - i.e. a call which waits for a response with data. */
  rpc(t, n) {
    const s = {
      rpc: {
        method: t,
        data: n
      }
    }, o = this;
    return this._methodCall().then(function() {
      return o._callPromise(s, function(i) {
        return {
          data: i.rpc.data
        };
      });
    });
  }
  /** publish data to a channel. */
  publish(t, n) {
    const s = {
      publish: {
        channel: t,
        data: n
      }
    }, o = this;
    return this._methodCall().then(function() {
      return o._callPromise(s, function() {
        return {};
      });
    });
  }
  /** history for a channel. By default it does not return publications (only current
   *  StreamPosition data) – provide an explicit limit > 0 to load publications.*/
  history(t, n) {
    const s = {
      history: this._getHistoryRequest(t, n)
    }, o = this;
    return this._methodCall().then(function() {
      return o._callPromise(s, function(i) {
        const r = i.history, c = [];
        if (r.publications)
          for (let l = 0; l < r.publications.length; l++)
            c.push(o._getPublicationContext(t, r.publications[l]));
        return {
          publications: c,
          epoch: r.epoch || "",
          offset: r.offset || 0
        };
      });
    });
  }
  /** presence for a channel. */
  presence(t) {
    const n = {
      presence: {
        channel: t
      }
    }, s = this;
    return this._methodCall().then(function() {
      return s._callPromise(n, function(o) {
        return {
          clients: o.presence.presence
        };
      });
    });
  }
  /** presence stats for a channel. */
  presenceStats(t) {
    const n = {
      presence_stats: {
        channel: t
      }
    }, s = this;
    return this._methodCall().then(function() {
      return s._callPromise(n, function(o) {
        const i = o.presence_stats;
        return {
          numUsers: i.num_users,
          numClients: i.num_clients
        };
      });
    });
  }
  /** start command batching (collect into temporary buffer without sending to a server)
   * until stopBatching called.*/
  startBatching() {
    this._batching = !0;
  }
  /** stop batching commands and flush collected commands to the
   * network (all in one request/frame).*/
  stopBatching() {
    const t = this;
    Promise.resolve().then(function() {
      Promise.resolve().then(function() {
        t._batching = !1, t._flush();
      });
    });
  }
  _debug(...t) {
    this._debugEnabled && (0, nt.log)("debug", t);
  }
  /** @internal */
  _setFormat(t) {
    if (!this._formatOverride(t)) {
      if (t === "protobuf")
        throw new Error("not implemented by JSON-only Centrifuge client, use client with Protobuf support");
      this._encoder = new pi.JsonEncoder(), this._decoder = new pi.JsonDecoder();
    }
  }
  /** @internal */
  _formatOverride(t) {
    return !1;
  }
  _configure() {
    if (!("Promise" in globalThis))
      throw new Error("Promise polyfill required");
    if (!this._endpoint)
      throw new Error("endpoint configuration required");
    if (this._config.protocol !== "json" && this._config.protocol !== "protobuf")
      throw new Error("unsupported protocol " + this._config.protocol);
    if (this._config.token !== null && (this._token = this._config.token), this._setFormat("json"), this._config.protocol === "protobuf" && this._setFormat("protobuf"), (this._config.debug === !0 || typeof localStorage < "u" && localStorage.getItem("centrifuge.debug")) && (this._debugEnabled = !0), this._debug("config", this._config), typeof this._endpoint != "string")
      if (typeof this._endpoint == "object" && this._endpoint instanceof Array) {
        this._transports = this._endpoint, this._emulation = !0;
        for (const t in this._transports) {
          const n = this._transports[t];
          if (!n.endpoint || !n.transport)
            throw new Error("malformed transport configuration");
          const s = n.transport;
          if (["websocket", "http_stream", "sse", "sockjs", "webtransport"].indexOf(s) < 0)
            throw new Error("unsupported transport name: " + s);
        }
      } else
        throw new Error("unsupported url configuration type: only string or array of objects are supported");
  }
  _setState(t) {
    if (this.state !== t) {
      this._reconnecting = !1;
      const n = this.state;
      return this.state = t, this.emit("state", { newState: t, oldState: n }), !0;
    }
    return !1;
  }
  _isDisconnected() {
    return this.state === ne.State.Disconnected;
  }
  _isConnecting() {
    return this.state === ne.State.Connecting;
  }
  _isConnected() {
    return this.state === ne.State.Connected;
  }
  _nextCommandId() {
    return ++this._commandId;
  }
  _setNetworkEvents() {
    let t = null;
    this._config.networkEventTarget !== null ? t = this._config.networkEventTarget : typeof globalThis.addEventListener < "u" && (t = globalThis), t && (t.addEventListener("offline", () => {
      this._debug("offline event triggered"), this.state === ne.State.Connected && this._transport && !this._transportClosed && (this._transportClosed = !0, this._transport.close());
    }), t.addEventListener("online", () => {
      this._debug("online event triggered"), this.state === ne.State.Connecting && (this._clearReconnectTimeout(), this._startReconnecting());
    }));
  }
  _getReconnectDelay() {
    const t = (0, nt.backoff)(this._reconnectAttempts, this._config.minReconnectDelay, this._config.maxReconnectDelay);
    return this._reconnectAttempts += 1, t;
  }
  _clearOutgoingRequests() {
    for (const t in this._callbacks)
      if (this._callbacks.hasOwnProperty(t)) {
        const n = this._callbacks[t];
        clearTimeout(n.timeout);
        const s = n.errback;
        if (!s)
          continue;
        s({ error: this._createErrorObject(se.errorCodes.connectionClosed, "connection closed") });
      }
    this._callbacks = {};
  }
  _clearConnectedState() {
    this._client = null, this._clearServerPingTimeout(), this._clearRefreshTimeout();
    for (const t in this._subs) {
      if (!this._subs.hasOwnProperty(t))
        continue;
      const n = this._subs[t];
      n.state === ne.SubscriptionState.Subscribed && n._setSubscribing(se.subscribingCodes.transportClosed, "transport closed");
    }
    for (const t in this._serverSubs)
      this._serverSubs.hasOwnProperty(t) && this.emit("subscribing", { channel: t });
  }
  _handleWriteError(t) {
    for (const n of t) {
      const s = n.id;
      if (!(s in this._callbacks))
        continue;
      const o = this._callbacks[s];
      clearTimeout(this._callbacks[s].timeout), delete this._callbacks[s];
      const i = o.errback;
      i({ error: this._createErrorObject(se.errorCodes.transportWriteError, "transport write error") });
    }
  }
  _transportSendCommands(t) {
    if (!t.length)
      return !0;
    if (!this._transport)
      return !1;
    try {
      this._transport.send(this._encoder.encodeCommands(t), this._session, this._node);
    } catch (n) {
      return this._debug("error writing commands", n), this._handleWriteError(t), !1;
    }
    return !0;
  }
  _initializeTransport() {
    let t;
    this._config.websocket !== null ? t = this._config.websocket : typeof globalThis.WebSocket != "function" && typeof globalThis.WebSocket != "object" || (t = globalThis.WebSocket);
    let n = null;
    this._config.sockjs !== null ? n = this._config.sockjs : typeof globalThis.SockJS < "u" && (n = globalThis.SockJS);
    let s = null;
    this._config.eventsource !== null ? s = this._config.eventsource : typeof globalThis.EventSource < "u" && (s = globalThis.EventSource);
    let o = null;
    this._config.fetch !== null ? o = this._config.fetch : typeof globalThis.fetch < "u" && (o = globalThis.fetch);
    let i = null;
    if (this._config.readableStream !== null ? i = this._config.readableStream : typeof globalThis.ReadableStream < "u" && (i = globalThis.ReadableStream), this._emulation) {
      this._currentTransportIndex >= this._transports.length && (this._triedAllTransports = !0, this._currentTransportIndex = 0);
      let _ = 0;
      for (; ; ) {
        if (_ >= this._transports.length)
          throw new Error("no supported transport found");
        const S = this._transports[this._currentTransportIndex], x = S.transport, O = S.endpoint;
        if (x === "websocket") {
          if (this._debug("trying websocket transport"), this._transport = new hi.WebsocketTransport(O, {
            websocket: t
          }), !this._transport.supported()) {
            this._debug("websocket transport not available"), this._currentTransportIndex++, _++;
            continue;
          }
        } else if (x === "webtransport") {
          if (this._debug("trying webtransport transport"), this._transport = new kf.WebtransportTransport(O, {
            webtransport: globalThis.WebTransport,
            decoder: this._decoder,
            encoder: this._encoder
          }), !this._transport.supported()) {
            this._debug("webtransport transport not available"), this._currentTransportIndex++, _++;
            continue;
          }
        } else if (x === "http_stream") {
          if (this._debug("trying http_stream transport"), this._transport = new Pf.HttpStreamTransport(O, {
            fetch: o,
            readableStream: i,
            emulationEndpoint: this._config.emulationEndpoint,
            decoder: this._decoder,
            encoder: this._encoder
          }), !this._transport.supported()) {
            this._debug("http_stream transport not available"), this._currentTransportIndex++, _++;
            continue;
          }
        } else if (x === "sse") {
          if (this._debug("trying sse transport"), this._transport = new Vf.SseTransport(O, {
            eventsource: s,
            fetch: o,
            emulationEndpoint: this._config.emulationEndpoint
          }), !this._transport.supported()) {
            this._debug("sse transport not available"), this._currentTransportIndex++, _++;
            continue;
          }
        } else if (x === "sockjs") {
          if (this._debug("trying sockjs"), this._transport = new Df.SockjsTransport(O, {
            sockjs: n,
            sockjsOptions: this._config.sockjsOptions
          }), !this._transport.supported()) {
            this._debug("sockjs transport not available"), this._currentTransportIndex++, _++;
            continue;
          }
        } else
          throw new Error("unknown transport " + x);
        break;
      }
    } else {
      if ((0, nt.startsWith)(this._endpoint, "http"))
        throw new Error("Provide explicit transport endpoints configuration in case of using HTTP (i.e. using array of TransportEndpoint instead of a single string), or use ws(s):// scheme in an endpoint if you aimed using WebSocket transport");
      if (this._debug("client will use websocket"), this._transport = new hi.WebsocketTransport(this._endpoint, {
        websocket: t
      }), !this._transport.supported())
        throw new Error("WebSocket not available");
    }
    const r = this;
    let c, l = !1, a = !0;
    this._transport.name() === "sse" && (a = !1);
    const h = [];
    if (this._transport.emulation()) {
      const _ = r._sendConnect(!0);
      if (h.push(_), a) {
        const S = r._sendSubscribeCommands(!0, !0);
        for (const x in S)
          h.push(S[x]);
      }
    }
    const d = this._encoder.encodeCommands(h);
    this._transport.initialize(this._config.protocol, {
      onOpen: function() {
        l = !0, c = r._transport.subName(), r._debug(c, "transport open"), r._transportWasOpen = !0, r._transportClosed = !1, !r._transport.emulation() && (r.startBatching(), r._sendConnect(!1), a && r._sendSubscribeCommands(!0, !1), r.stopBatching());
      },
      onError: function(_) {
        r._debug("transport level error", _);
      },
      onClose: function(_) {
        r._debug(r._transport.name(), "transport closed"), r._transportClosed = !0;
        let S = "connection closed", x = !0, O = 0;
        if (_ && "code" in _ && _.code && (O = _.code), _ && _.reason)
          try {
            const U = JSON.parse(_.reason);
            S = U.reason, x = U.reconnect;
          } catch {
            S = _.reason, (O >= 3500 && O < 4e3 || O >= 4500 && O < 5e3) && (x = !1);
          }
        O < 3e3 ? (O === 1009 ? (O = se.disconnectedCodes.messageSizeLimit, S = "message size limit exceeded", x = !1) : (O = se.connectingCodes.transportClosed, S = "transport closed"), r._emulation && !r._transportWasOpen && (r._currentTransportIndex++, r._currentTransportIndex >= r._transports.length && (r._triedAllTransports = !0, r._currentTransportIndex = 0))) : r._transportWasOpen = !0;
        let M = !1;
        if (r._emulation && !r._transportWasOpen && !r._triedAllTransports && (M = !0), r._isConnecting() && !l && r.emit("error", {
          type: "transport",
          error: {
            code: se.errorCodes.transportClosed,
            message: "transport closed"
          },
          transport: r._transport.name()
        }), r._disconnect(O, S, x), r._isConnecting()) {
          let U = r._getReconnectDelay();
          M && (U = 0), r._debug("reconnect after " + U + " milliseconds"), r._reconnecting = !1, r._reconnectTimeout = setTimeout(() => {
            r._startReconnecting();
          }, U);
        }
      },
      onMessage: function(_) {
        r._dataReceived(_);
      }
    }, d);
  }
  _sendConnect(t) {
    const n = this._constructConnectCommand(), s = this;
    return this._call(n, t).then((o) => {
      const i = o.reply.connect;
      s._connectResponse(i), o.next && o.next();
    }, (o) => {
      s._connectError(o.error), o.next && o.next();
    }), n;
  }
  _startReconnecting() {
    if (!this._isConnecting() || this._reconnecting)
      return;
    if (this._reconnecting = !0, !(this._refreshRequired || !this._token && this._config.getToken !== null)) {
      this._initializeTransport();
      return;
    }
    const n = this;
    this._getToken().then(function(s) {
      if (n._isConnecting()) {
        if (!s) {
          n._failUnauthorized();
          return;
        }
        n._token = s, n._debug("connection token refreshed"), n._initializeTransport();
      }
    }).catch(function(s) {
      if (!n._isConnecting())
        return;
      n.emit("error", {
        type: "connectToken",
        error: {
          code: se.errorCodes.clientConnectToken,
          message: s !== void 0 ? s.toString() : ""
        }
      });
      const o = n._getReconnectDelay();
      n._debug("error on connection token refresh, reconnect after " + o + " milliseconds", s), n._reconnecting = !1, n._reconnectTimeout = setTimeout(() => {
        n._startReconnecting();
      }, o);
    });
  }
  _connectError(t) {
    this.state === ne.State.Connecting && (t.code === 109 && (this._refreshRequired = !0), t.code < 100 || t.temporary === !0 || t.code === 109 ? (this.emit("error", {
      type: "connect",
      error: t
    }), this._transport && !this._transportClosed && (this._transportClosed = !0, this._transport.close())) : this._disconnect(t.code, t.message, !1));
  }
  _constructConnectCommand() {
    const t = {};
    this._token && (t.token = this._token), this._config.data && (t.data = this._config.data), this._config.name && (t.name = this._config.name), this._config.version && (t.version = this._config.version);
    const n = {};
    let s = !1;
    for (const o in this._serverSubs)
      if (this._serverSubs.hasOwnProperty(o) && this._serverSubs[o].recoverable) {
        s = !0;
        const i = {
          recover: !0
        };
        this._serverSubs[o].offset && (i.offset = this._serverSubs[o].offset), this._serverSubs[o].epoch && (i.epoch = this._serverSubs[o].epoch), n[o] = i;
      }
    return s && (t.subs = n), {
      connect: t
    };
  }
  _getHistoryRequest(t, n) {
    const s = {
      channel: t
    };
    return n !== void 0 && (n.since && (s.since = {
      offset: n.since.offset
    }, n.since.epoch && (s.since.epoch = n.since.epoch)), n.limit !== void 0 && (s.limit = n.limit), n.reverse === !0 && (s.reverse = !0)), s;
  }
  _methodCall() {
    return this._isConnected() ? Promise.resolve() : new Promise((t, n) => {
      const s = setTimeout(function() {
        n({ code: se.errorCodes.timeout, message: "timeout" });
      }, this._config.timeout);
      this._promises[this._nextPromiseId()] = {
        timeout: s,
        resolve: t,
        reject: n
      };
    });
  }
  _callPromise(t, n) {
    return new Promise((s, o) => {
      this._call(t, !1).then((i) => {
        s(n(i.reply)), i.next && i.next();
      }, (i) => {
        o(i.error), i.next && i.next();
      });
    });
  }
  _dataReceived(t) {
    this._serverPing > 0 && this._waitServerPing();
    const n = this._decoder.decodeReplies(t);
    this._dispatchPromise = this._dispatchPromise.then(() => {
      let s;
      this._dispatchPromise = new Promise((o) => {
        s = o;
      }), this._dispatchSynchronized(n, s);
    });
  }
  _dispatchSynchronized(t, n) {
    let s = Promise.resolve();
    for (const o in t)
      t.hasOwnProperty(o) && (s = s.then(() => this._dispatchReply(t[o])));
    s = s.then(() => {
      n();
    });
  }
  _dispatchReply(t) {
    let n;
    const s = new Promise((i) => {
      n = i;
    });
    if (t == null)
      return this._debug("dispatch: got undefined or null reply"), n(), s;
    const o = t.id;
    return o && o > 0 ? this._handleReply(t, n) : t.push ? this._handlePush(t.push, n) : this._handleServerPing(n), s;
  }
  _call(t, n) {
    return new Promise((s, o) => {
      t.id = this._nextCommandId(), this._registerCall(t.id, s, o), n || this._addCommand(t);
    });
  }
  _startConnecting() {
    this._debug("start connecting"), this._setState(ne.State.Connecting) && this.emit("connecting", { code: se.connectingCodes.connectCalled, reason: "connect called" }), this._client = null, this._startReconnecting();
  }
  _disconnect(t, n, s) {
    if (this._isDisconnected())
      return;
    const o = this.state, i = {
      code: t,
      reason: n
    };
    let r = !1;
    s ? r = this._setState(ne.State.Connecting) : (r = this._setState(ne.State.Disconnected), this._rejectPromises({ code: se.errorCodes.clientDisconnected, message: "disconnected" })), this._clearOutgoingRequests(), o === ne.State.Connecting && this._clearReconnectTimeout(), o === ne.State.Connected && this._clearConnectedState(), r && (this._isConnecting() ? this.emit("connecting", i) : this.emit("disconnected", i)), this._transport && !this._transportClosed && (this._transportClosed = !0, this._transport.close());
  }
  _failUnauthorized() {
    this._disconnect(se.disconnectedCodes.unauthorized, "unauthorized", !1);
  }
  _getToken() {
    if (this._debug("get connection token"), !this._config.getToken)
      throw new Error("provide a function to get connection token");
    return this._config.getToken({});
  }
  _refresh() {
    const t = this._client, n = this;
    this._getToken().then(function(s) {
      if (t !== n._client)
        return;
      if (!s) {
        n._failUnauthorized();
        return;
      }
      if (n._token = s, n._debug("connection token refreshed"), !n._isConnected())
        return;
      const o = {
        refresh: { token: n._token }
      };
      n._call(o, !1).then((i) => {
        const r = i.reply.refresh;
        n._refreshResponse(r), i.next && i.next();
      }, (i) => {
        n._refreshError(i.error), i.next && i.next();
      });
    }).catch(function(s) {
      n.emit("error", {
        type: "refreshToken",
        error: {
          code: se.errorCodes.clientRefreshToken,
          message: s !== void 0 ? s.toString() : ""
        }
      }), n._refreshTimeout = setTimeout(() => n._refresh(), n._getRefreshRetryDelay());
    });
  }
  _refreshError(t) {
    t.code < 100 || t.temporary === !0 ? (this.emit("error", {
      type: "refresh",
      error: t
    }), this._refreshTimeout = setTimeout(() => this._refresh(), this._getRefreshRetryDelay())) : this._disconnect(t.code, t.message, !1);
  }
  _getRefreshRetryDelay() {
    return (0, nt.backoff)(0, 5e3, 1e4);
  }
  _refreshResponse(t) {
    this._refreshTimeout && (clearTimeout(this._refreshTimeout), this._refreshTimeout = null), t.expires && (this._client = t.client, this._refreshTimeout = setTimeout(() => this._refresh(), (0, nt.ttlMilliseconds)(t.ttl)));
  }
  _removeSubscription(t) {
    t !== null && delete this._subs[t.channel];
  }
  _unsubscribe(t) {
    if (!this._isConnected())
      return;
    const s = { unsubscribe: {
      channel: t.channel
    } }, o = this;
    this._call(s, !1).then((i) => {
      i.next && i.next();
    }, (i) => {
      i.next && i.next(), o._disconnect(se.connectingCodes.unsubscribeError, "unsubscribe error", !0);
    });
  }
  _getSub(t) {
    const n = this._subs[t];
    return n || null;
  }
  _isServerSub(t) {
    return this._serverSubs[t] !== void 0;
  }
  _sendSubscribeCommands(t, n) {
    const s = [];
    for (const o in this._subs) {
      if (!this._subs.hasOwnProperty(o))
        continue;
      const i = this._subs[o];
      if (i._inflight !== !0 && i.state === ne.SubscriptionState.Subscribing) {
        const r = i._subscribe(t, n);
        r && s.push(r);
      }
    }
    return s;
  }
  _connectResponse(t) {
    if (this._transportWasOpen = !0, this._reconnectAttempts = 0, this._refreshRequired = !1, this._isConnected())
      return;
    this._client = t.client, this._setState(ne.State.Connected), this._setNetworkEvents(), this._refreshTimeout && clearTimeout(this._refreshTimeout), t.expires && (this._refreshTimeout = setTimeout(() => this._refresh(), (0, nt.ttlMilliseconds)(t.ttl))), this._session = t.session, this._node = t.node, this.startBatching(), this._sendSubscribeCommands(!1, !1), this.stopBatching();
    const n = {
      client: t.client,
      transport: this._transport.subName()
    };
    t.data && (n.data = t.data), this.emit("connected", n), this._resolvePromises(), this._processServerSubs(t.subs || {}), t.ping && t.ping > 0 ? (this._serverPing = t.ping * 1e3, this._sendPong = t.pong === !0, this._waitServerPing()) : this._serverPing = 0;
  }
  _processServerSubs(t) {
    for (const n in t) {
      if (!t.hasOwnProperty(n))
        continue;
      const s = t[n];
      this._serverSubs[n] = {
        offset: s.offset,
        epoch: s.epoch,
        recoverable: s.recoverable || !1
      };
      const o = this._getSubscribeContext(n, s);
      this.emit("subscribed", o);
    }
    for (const n in t) {
      if (!t.hasOwnProperty(n))
        continue;
      const s = t[n];
      if (s.recovered) {
        const o = s.publications;
        if (o && o.length > 0)
          for (const i in o)
            o.hasOwnProperty(i) && this._handlePublication(n, o[i]);
      }
    }
    for (const n in this._serverSubs)
      this._serverSubs.hasOwnProperty(n) && (t[n] || (this.emit("unsubscribed", { channel: n }), delete this._serverSubs[n]));
  }
  _clearRefreshTimeout() {
    this._refreshTimeout !== null && (clearTimeout(this._refreshTimeout), this._refreshTimeout = null);
  }
  _clearReconnectTimeout() {
    this._reconnectTimeout !== null && (clearTimeout(this._reconnectTimeout), this._reconnectTimeout = null);
  }
  _clearServerPingTimeout() {
    this._serverPingTimeout !== null && (clearTimeout(this._serverPingTimeout), this._serverPingTimeout = null);
  }
  _waitServerPing() {
    this._config.maxServerPingDelay !== 0 && this._isConnected() && (this._clearServerPingTimeout(), this._serverPingTimeout = setTimeout(() => {
      this._isConnected() && this._disconnect(se.connectingCodes.noPing, "no ping", !0);
    }, this._serverPing + this._config.maxServerPingDelay));
  }
  _getSubscribeContext(t, n) {
    const s = {
      channel: t,
      positioned: !1,
      recoverable: !1,
      wasRecovering: !1,
      recovered: !1
    };
    n.recovered && (s.recovered = !0), n.positioned && (s.positioned = !0), n.recoverable && (s.recoverable = !0), n.was_recovering && (s.wasRecovering = !0);
    let o = "";
    "epoch" in n && (o = n.epoch);
    let i = 0;
    return "offset" in n && (i = n.offset), (s.positioned || s.recoverable) && (s.streamPosition = {
      offset: i,
      epoch: o
    }), n.data && (s.data = n.data), s;
  }
  _handleReply(t, n) {
    const s = t.id;
    if (!(s in this._callbacks)) {
      n();
      return;
    }
    const o = this._callbacks[s];
    if (clearTimeout(this._callbacks[s].timeout), delete this._callbacks[s], (0, nt.errorExists)(t)) {
      const i = o.errback;
      if (!i) {
        n();
        return;
      }
      const r = t.error;
      i({ error: r, next: n });
    } else {
      const i = o.callback;
      if (!i)
        return;
      i({ reply: t, next: n });
    }
  }
  _handleJoin(t, n) {
    const s = this._getSub(t);
    if (!s) {
      if (this._isServerSub(t)) {
        const o = { channel: t, info: this._getJoinLeaveContext(n.info) };
        this.emit("join", o);
      }
      return;
    }
    s._handleJoin(n);
  }
  _handleLeave(t, n) {
    const s = this._getSub(t);
    if (!s) {
      if (this._isServerSub(t)) {
        const o = { channel: t, info: this._getJoinLeaveContext(n.info) };
        this.emit("leave", o);
      }
      return;
    }
    s._handleLeave(n);
  }
  _handleUnsubscribe(t, n) {
    const s = this._getSub(t);
    if (!s) {
      this._isServerSub(t) && (delete this._serverSubs[t], this.emit("unsubscribed", { channel: t }));
      return;
    }
    n.code < 2500 ? s._setUnsubscribed(n.code, n.reason, !1) : s._setSubscribing(n.code, n.reason);
  }
  _handleSubscribe(t, n) {
    this._serverSubs[t] = {
      offset: n.offset,
      epoch: n.epoch,
      recoverable: n.recoverable || !1
    }, this.emit("subscribed", this._getSubscribeContext(t, n));
  }
  _handleDisconnect(t) {
    const n = t.code;
    let s = !0;
    (n >= 3500 && n < 4e3 || n >= 4500 && n < 5e3) && (s = !1), this._disconnect(n, t.reason, s);
  }
  _getPublicationContext(t, n) {
    const s = {
      channel: t,
      data: n.data
    };
    return n.offset && (s.offset = n.offset), n.info && (s.info = this._getJoinLeaveContext(n.info)), n.tags && (s.tags = n.tags), s;
  }
  _getJoinLeaveContext(t) {
    const n = {
      client: t.client,
      user: t.user
    };
    return t.conn_info && (n.connInfo = t.conn_info), t.chan_info && (n.chanInfo = t.chan_info), n;
  }
  _handlePublication(t, n) {
    const s = this._getSub(t);
    if (!s) {
      if (this._isServerSub(t)) {
        const o = this._getPublicationContext(t, n);
        this.emit("publication", o), n.offset !== void 0 && (this._serverSubs[t].offset = n.offset);
      }
      return;
    }
    s._handlePublication(n);
  }
  _handleMessage(t) {
    this.emit("message", { data: t.data });
  }
  _handleServerPing(t) {
    if (this._sendPong) {
      const n = {};
      this._transportSendCommands([n]);
    }
    t();
  }
  _handlePush(t, n) {
    const s = t.channel;
    t.pub ? this._handlePublication(s, t.pub) : t.message ? this._handleMessage(t.message) : t.join ? this._handleJoin(s, t.join) : t.leave ? this._handleLeave(s, t.leave) : t.unsubscribe ? this._handleUnsubscribe(s, t.unsubscribe) : t.subscribe ? this._handleSubscribe(s, t.subscribe) : t.disconnect && this._handleDisconnect(t.disconnect), n();
  }
  _flush() {
    const t = this._commands.slice(0);
    this._commands = [], this._transportSendCommands(t);
  }
  _createErrorObject(t, n, s) {
    const o = {
      code: t,
      message: n
    };
    return s && (o.temporary = !0), o;
  }
  _registerCall(t, n, s) {
    this._callbacks[t] = {
      callback: n,
      errback: s,
      timeout: null
    }, this._callbacks[t].timeout = setTimeout(() => {
      delete this._callbacks[t], (0, nt.isFunction)(s) && s({ error: this._createErrorObject(se.errorCodes.timeout, "timeout") });
    }, this._config.timeout);
  }
  _addCommand(t) {
    this._batching ? this._commands.push(t) : this._transportSendCommands([t]);
  }
  _nextPromiseId() {
    return ++this._promiseId;
  }
  _resolvePromises() {
    for (const t in this._promises)
      this._promises[t].timeout && clearTimeout(this._promises[t].timeout), this._promises[t].resolve(), delete this._promises[t];
  }
  _rejectPromises(t) {
    for (const n in this._promises)
      this._promises[n].timeout && clearTimeout(this._promises[n].timeout), this._promises[n].reject(t), delete this._promises[n];
  }
}
cs.Centrifuge = yo;
yo.SubscriptionState = ne.SubscriptionState;
yo.State = ne.State;
(function(e) {
  var t = Ue && Ue.__createBinding || (Object.create ? function(i, r, c, l) {
    l === void 0 && (l = c);
    var a = Object.getOwnPropertyDescriptor(r, c);
    (!a || ("get" in a ? !r.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
      return r[c];
    } }), Object.defineProperty(i, l, a);
  } : function(i, r, c, l) {
    l === void 0 && (l = c), i[l] = r[c];
  }), n = Ue && Ue.__exportStar || function(i, r) {
    for (var c in i)
      c !== "default" && !Object.prototype.hasOwnProperty.call(r, c) && t(r, i, c);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Subscription = e.Centrifuge = void 0;
  const s = cs;
  Object.defineProperty(e, "Centrifuge", { enumerable: !0, get: function() {
    return s.Centrifuge;
  } });
  const o = _n;
  Object.defineProperty(e, "Subscription", { enumerable: !0, get: function() {
    return o.Subscription;
  } }), n(us, e);
})(Mr);
const vo = ra(nf);
vo.use(Ma());
vo.use({
  install(e, t) {
    e.config.globalProperties.authToken = document.getElementsByName("x-bearer")[0].getAttribute("content");
    const n = new Mr.Centrifuge("ws://127.0.0.1:8081/connection/websocket", {
      data: {
        authToken: e.config.globalProperties.authToken
      }
    });
    n.on("connected", (s) => {
      e.config.globalProperties.user = s.data.user;
    }), n.connect(), e.config.globalProperties.centrifuge = n;
  }
});
vo.mount("#app");
