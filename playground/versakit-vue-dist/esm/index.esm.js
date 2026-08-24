import { ref as R, nextTick as ve, defineComponent as q, computed as d, openBlock as p, createElementBlock as g, normalizeClass as i, Fragment as ee, renderList as oe, unref as h, withDirectives as He, vModelText as $t, watch as Q, onUnmounted as Pe, useSlots as Ge, onMounted as be, createBlock as Me, Teleport as ft, createVNode as De, Transition as rt, withCtx as Ne, createElementVNode as x, renderSlot as F, toDisplayString as N, createCommentVNode as L, onBeforeUnmount as Ee, normalizeStyle as le, createTextVNode as de, resolveDynamicComponent as at, withModifiers as Ie, inject as Te, provide as Re, toRef as Se, vShow as ht, withKeys as ze, reactive as cl, vModelDynamic as fl, createStaticVNode as pl, mergeProps as Wt, TransitionGroup as gl, render as vl } from "vue";
const J = (l, a) => {
  if (l.install = (e) => {
    for (const t of [l, ...Object.values(a ?? {})])
      e.component(t.name, t);
  }, a)
    for (const [e, t] of Object.entries(a))
      l[e] = t;
  return l;
};
function bl(l = 4) {
  const a = R(Array(l).fill("")), e = R([]);
  return {
    values: a,
    setRef: (s, u) => {
      s && (e.value[u] = s);
    },
    onInput: (s, u) => {
      const f = s.target.value.replace(/\D/g, "");
      a.value[u] = f.slice(0, 1), f && u < l - 1 && ve(() => {
        e.value[u + 1]?.focus();
      });
    },
    onKeydown: (s, u) => {
      s.key === "Backspace" && !a.value[u] && u > 0 && ve(() => {
        e.value[u - 1]?.focus();
      });
    }
  };
}
var Rt = (l) => typeof l == "boolean" ? `${l}` : l === 0 ? "0" : l, ke = (l) => !l || typeof l != "object" || Object.keys(l).length === 0, ml = (l, a) => JSON.stringify(l) === JSON.stringify(a);
function Ft(l, a) {
  l.forEach(function(e) {
    Array.isArray(e) ? Ft(e, a) : a.push(e);
  });
}
function _t(l) {
  let a = [];
  return Ft(l, a), a;
}
var Ht = (...l) => _t(l).filter(Boolean), Nt = (l, a) => {
  let e = {}, t = Object.keys(l), r = Object.keys(a);
  for (let o of t) if (r.includes(o)) {
    let s = l[o], u = a[o];
    Array.isArray(s) || Array.isArray(u) ? e[o] = Ht(u, s) : typeof s == "object" && typeof u == "object" ? e[o] = Nt(s, u) : e[o] = u + " " + s;
  } else e[o] = l[o];
  for (let o of r) t.includes(o) || (e[o] = a[o]);
  return e;
}, Et = (l) => !l || typeof l != "string" ? l : l.replace(/\s+/g, " ").trim();
const Bt = "-", yl = (l) => {
  const a = wl(l), {
    conflictingClassGroups: e,
    conflictingClassGroupModifiers: t
  } = l;
  return {
    getClassGroupId: (s) => {
      const u = s.split(Bt);
      return u[0] === "" && u.length !== 1 && u.shift(), Gt(u, a) || hl(s);
    },
    getConflictingClassGroupIds: (s, u) => {
      const n = e[s] || [];
      return u && t[s] ? [...n, ...t[s]] : n;
    }
  };
}, Gt = (l, a) => {
  if (l.length === 0)
    return a.classGroupId;
  const e = l[0], t = a.nextPart.get(e), r = t ? Gt(l.slice(1), t) : void 0;
  if (r)
    return r;
  if (a.validators.length === 0)
    return;
  const o = l.join(Bt);
  return a.validators.find(({
    validator: s
  }) => s(o))?.classGroupId;
}, Lt = /^\[(.+)\]$/, hl = (l) => {
  if (Lt.test(l)) {
    const a = Lt.exec(l)[1], e = a?.substring(0, a.indexOf(":"));
    if (e)
      return "arbitrary.." + e;
  }
}, wl = (l) => {
  const {
    theme: a,
    classGroups: e
  } = l, t = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const r in e)
    wt(e[r], t, r, a);
  return t;
}, wt = (l, a, e, t) => {
  l.forEach((r) => {
    if (typeof r == "string") {
      const o = r === "" ? a : At(a, r);
      o.classGroupId = e;
      return;
    }
    if (typeof r == "function") {
      if (xl(r)) {
        wt(r(t), a, e, t);
        return;
      }
      a.validators.push({
        validator: r,
        classGroupId: e
      });
      return;
    }
    Object.entries(r).forEach(([o, s]) => {
      wt(s, At(a, o), e, t);
    });
  });
}, At = (l, a) => {
  let e = l;
  return a.split(Bt).forEach((t) => {
    e.nextPart.has(t) || e.nextPart.set(t, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), e = e.nextPart.get(t);
  }), e;
}, xl = (l) => l.isThemeGetter, kl = (l) => {
  if (l < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let a = 0, e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  const r = (o, s) => {
    e.set(o, s), a++, a > l && (a = 0, t = e, e = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let s = e.get(o);
      if (s !== void 0)
        return s;
      if ((s = t.get(o)) !== void 0)
        return r(o, s), s;
    },
    set(o, s) {
      e.has(o) ? e.set(o, s) : r(o, s);
    }
  };
}, xt = "!", kt = ":", Cl = kt.length, Sl = (l) => {
  const {
    prefix: a,
    experimentalParseClassName: e
  } = l;
  let t = (r) => {
    const o = [];
    let s = 0, u = 0, n = 0, f;
    for (let v = 0; v < r.length; v++) {
      let k = r[v];
      if (s === 0 && u === 0) {
        if (k === kt) {
          o.push(r.slice(n, v)), n = v + Cl;
          continue;
        }
        if (k === "/") {
          f = v;
          continue;
        }
      }
      k === "[" ? s++ : k === "]" ? s-- : k === "(" ? u++ : k === ")" && u--;
    }
    const y = o.length === 0 ? r : r.substring(n), C = zl(y), S = C !== y, c = f && f > n ? f - n : void 0;
    return {
      modifiers: o,
      hasImportantModifier: S,
      baseClassName: C,
      maybePostfixModifierPosition: c
    };
  };
  if (a) {
    const r = a + kt, o = t;
    t = (s) => s.startsWith(r) ? o(s.substring(r.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: s,
      maybePostfixModifierPosition: void 0
    };
  }
  if (e) {
    const r = t;
    t = (o) => e({
      className: o,
      parseClassName: r
    });
  }
  return t;
}, zl = (l) => l.endsWith(xt) ? l.substring(0, l.length - 1) : l.startsWith(xt) ? l.substring(1) : l, $l = (l) => {
  const a = Object.fromEntries(l.orderSensitiveModifiers.map((t) => [t, !0]));
  return (t) => {
    if (t.length <= 1)
      return t;
    const r = [];
    let o = [];
    return t.forEach((s) => {
      s[0] === "[" || a[s] ? (r.push(...o.sort(), s), o = []) : o.push(s);
    }), r.push(...o.sort()), r;
  };
}, Bl = (l) => ({
  cache: kl(l.cacheSize),
  parseClassName: Sl(l),
  sortModifiers: $l(l),
  ...yl(l)
}), Vl = /\s+/, Il = (l, a) => {
  const {
    parseClassName: e,
    getClassGroupId: t,
    getConflictingClassGroupIds: r,
    sortModifiers: o
  } = a, s = [], u = l.trim().split(Vl);
  let n = "";
  for (let f = u.length - 1; f >= 0; f -= 1) {
    const y = u[f], {
      isExternal: C,
      modifiers: S,
      hasImportantModifier: c,
      baseClassName: v,
      maybePostfixModifierPosition: k
    } = e(y);
    if (C) {
      n = y + (n.length > 0 ? " " + n : n);
      continue;
    }
    let b = !!k, m = t(b ? v.substring(0, k) : v);
    if (!m) {
      if (!b) {
        n = y + (n.length > 0 ? " " + n : n);
        continue;
      }
      if (m = t(v), !m) {
        n = y + (n.length > 0 ? " " + n : n);
        continue;
      }
      b = !1;
    }
    const w = o(S).join(":"), z = c ? w + xt : w, $ = z + m;
    if (s.includes($))
      continue;
    s.push($);
    const T = r(m, b);
    for (let B = 0; B < T.length; ++B) {
      const A = T[B];
      s.push(z + A);
    }
    n = y + (n.length > 0 ? " " + n : n);
  }
  return n;
};
function Ml() {
  let l = 0, a, e, t = "";
  for (; l < arguments.length; )
    (a = arguments[l++]) && (e = Kt(a)) && (t && (t += " "), t += e);
  return t;
}
const Kt = (l) => {
  if (typeof l == "string")
    return l;
  let a, e = "";
  for (let t = 0; t < l.length; t++)
    l[t] && (a = Kt(l[t])) && (e && (e += " "), e += a);
  return e;
};
function Ct(l, ...a) {
  let e, t, r, o = s;
  function s(n) {
    const f = a.reduce((y, C) => C(y), l());
    return e = Bl(f), t = e.cache.get, r = e.cache.set, o = u, u(n);
  }
  function u(n) {
    const f = t(n);
    if (f)
      return f;
    const y = Il(n, e);
    return r(n, y), y;
  }
  return function() {
    return o(Ml.apply(null, arguments));
  };
}
const me = (l) => {
  const a = (e) => e[l] || [];
  return a.isThemeGetter = !0, a;
}, Yt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ut = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Dl = /^\d+\/\d+$/, Tl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Rl = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, El = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Ll = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Al = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ue = (l) => Dl.test(l), ae = (l) => !!l && !Number.isNaN(Number(l)), je = (l) => !!l && Number.isInteger(Number(l)), Ot = (l) => l.endsWith("%") && ae(l.slice(0, -1)), Oe = (l) => Tl.test(l), Ol = () => !0, Pl = (l) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Rl.test(l) && !El.test(l)
), Vt = () => !1, jl = (l) => Ll.test(l), Wl = (l) => Al.test(l), Fl = (l) => !U(l) && !X(l), _l = (l) => Xe(l, Zt, Vt), U = (l) => Yt.test(l), We = (l) => Xe(l, Jt, Pl), gt = (l) => Xe(l, Ql, ae), Hl = (l) => Xe(l, Xt, Vt), Nl = (l) => Xe(l, qt, Wl), Gl = (l) => Xe(l, Vt, jl), X = (l) => Ut.test(l), nt = (l) => qe(l, Jt), Kl = (l) => qe(l, ea), Yl = (l) => qe(l, Xt), Ul = (l) => qe(l, Zt), Xl = (l) => qe(l, qt), ql = (l) => qe(l, ta, !0), Xe = (l, a, e) => {
  const t = Yt.exec(l);
  return t ? t[1] ? a(t[1]) : e(t[2]) : !1;
}, qe = (l, a, e = !1) => {
  const t = Ut.exec(l);
  return t ? t[1] ? a(t[1]) : e : !1;
}, Xt = (l) => l === "position", Zl = /* @__PURE__ */ new Set(["image", "url"]), qt = (l) => Zl.has(l), Jl = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Zt = (l) => Jl.has(l), Jt = (l) => l === "length", Ql = (l) => l === "number", ea = (l) => l === "family-name", ta = (l) => l === "shadow", St = () => {
  const l = me("color"), a = me("font"), e = me("text"), t = me("font-weight"), r = me("tracking"), o = me("leading"), s = me("breakpoint"), u = me("container"), n = me("spacing"), f = me("radius"), y = me("shadow"), C = me("inset-shadow"), S = me("drop-shadow"), c = me("blur"), v = me("perspective"), k = me("aspect"), b = me("ease"), m = me("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], z = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], $ = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", "contain", "none"], B = () => [X, U, n], A = () => [Ue, "full", "auto", ...B()], V = () => [je, "none", "subgrid", X, U], E = () => ["auto", {
    span: ["full", je, X, U]
  }, X, U], P = () => [je, "auto", X, U], j = () => ["auto", "min", "max", "fr", X, U], O = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], H = () => ["start", "end", "center", "stretch"], M = () => ["auto", ...B()], _ = () => [Ue, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...B()], I = () => [l, X, U], W = () => [Ot, We], G = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    f,
    X,
    U
  ], Y = () => ["", ae, nt, We], Z = () => ["solid", "dashed", "dotted", "double"], ce = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    c,
    X,
    U
  ], se = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", X, U], ne = () => ["none", ae, X, U], re = () => ["none", ae, X, U], fe = () => [ae, X, U], ue = () => [Ue, "full", ...B()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Oe],
      breakpoint: [Oe],
      color: [Ol],
      container: [Oe],
      "drop-shadow": [Oe],
      ease: ["in", "out", "in-out"],
      font: [Fl],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Oe],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Oe],
      shadow: [Oe],
      spacing: ["px", ae],
      text: [Oe],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Ue, U, X, k]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ae, U, X, u]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": w()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": w()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...z(), U, X]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: $()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": $()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": $()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: T()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": T()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": T()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: A()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": A()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": A()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: A()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: A()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: A()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: A()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: A()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: A()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [je, "auto", X, U]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ue, "full", "auto", u, ...B()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [ae, Ue, "auto", "initial", "none", U]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ae, X, U]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ae, X, U]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [je, "first", "last", "none", X, U]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": V()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: E()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": P()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": P()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": V()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: E()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": P()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": P()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": j()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": j()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: B()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": B()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": B()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...O(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...H(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...H()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...O()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...H(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...H(), "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": O()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...H(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...H()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: B()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: B()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: B()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: B()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: B()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: B()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: B()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: B()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: B()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: M()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: M()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: M()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: M()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: M()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: M()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: M()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: M()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: M()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": B()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": B()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: _()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [u, "screen", ..._()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          u,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ..._()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          u,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [s]
          },
          ..._()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ..._()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ..._()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ..._()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", e, nt, We]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [t, X, gt]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ot, U]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Kl, U, a]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [r, X, U]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ae, "none", X, gt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          o,
          ...B()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", X, U]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", X, U]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: I()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: I()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Z(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ae, "from-font", "auto", X, We]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: I()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ae, "auto", X, U]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: B()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", X, U]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", X, U]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...z(), Yl, Hl]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "space", "round"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Ul, _l]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, je, X, U],
          radial: ["", X, U],
          conic: [je, X, U]
        }, Xl, Nl]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: I()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: W()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: W()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: W()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: I()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: I()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: I()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: G()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": G()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": G()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": G()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": G()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": G()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": G()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": G()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": G()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": G()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": G()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": G()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": G()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": G()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": G()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: Y()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": Y()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": Y()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": Y()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": Y()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": Y()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": Y()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": Y()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": Y()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": Y()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": Y()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Z(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Z(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: I()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": I()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": I()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": I()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": I()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": I()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": I()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": I()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": I()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: I()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Z(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ae, X, U]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ae, nt, We]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [l]
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          y,
          ql,
          Gl
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: I()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", X, U, C]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": I()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: Y()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: I()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ae, We]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": I()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": Y()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": I()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ae, X, U]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ce(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ce()
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          X,
          U
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: K()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ae, X, U]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ae, X, U]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          S,
          X,
          U
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ae, X, U]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ae, X, U]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ae, X, U]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ae, X, U]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ae, X, U]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          X,
          U
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": K()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ae, X, U]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ae, X, U]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ae, X, U]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ae, X, U]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ae, X, U]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ae, X, U]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ae, X, U]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ae, X, U]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": B()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": B()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": B()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", X, U]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [ae, "initial", X, U]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", b, X, U]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ae, X, U]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", m, X, U]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [v, X, U]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": se()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ne()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ne()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ne()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ne()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: re()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": re()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": re()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": re()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: fe()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": fe()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": fe()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [X, U, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: se()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: ue()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ue()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ue()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ue()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: I()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: I()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", X, U]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": B()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": B()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": B()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": B()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": B()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": B()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": B()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": B()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": B()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": B()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": B()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": B()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": B()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": B()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": B()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": B()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": B()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": B()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", X, U]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...I()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ae, nt, We, gt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...I()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["before", "after", "placeholder", "file", "marker", "selection", "first-line", "first-letter", "backdrop", "*", "**"]
  };
}, la = (l, {
  cacheSize: a,
  prefix: e,
  experimentalParseClassName: t,
  extend: r = {},
  override: o = {}
}) => (lt(l, "cacheSize", a), lt(l, "prefix", e), lt(l, "experimentalParseClassName", t), it(l.theme, o.theme), it(l.classGroups, o.classGroups), it(l.conflictingClassGroups, o.conflictingClassGroups), it(l.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), lt(l, "orderSensitiveModifiers", o.orderSensitiveModifiers), ut(l.theme, r.theme), ut(l.classGroups, r.classGroups), ut(l.conflictingClassGroups, r.conflictingClassGroups), ut(l.conflictingClassGroupModifiers, r.conflictingClassGroupModifiers), Qt(l, r, "orderSensitiveModifiers"), l), lt = (l, a, e) => {
  e !== void 0 && (l[a] = e);
}, it = (l, a) => {
  if (a)
    for (const e in a)
      lt(l, e, a[e]);
}, ut = (l, a) => {
  if (a)
    for (const e in a)
      Qt(l, a, e);
}, Qt = (l, a, e) => {
  const t = a[e];
  t !== void 0 && (l[e] = l[e] ? l[e].concat(t) : t);
}, aa = (l, ...a) => typeof l == "function" ? Ct(St, l, ...a) : Ct(() => la(St(), l), ...a), ra = /* @__PURE__ */ Ct(St);
var oa = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, el = (l) => l || void 0, ot = (...l) => el(_t(l).filter(Boolean).join(" ")), vt = null, Ae = {}, zt = !1, Je = (...l) => (a) => a.twMerge ? ((!vt || zt) && (zt = !1, vt = ke(Ae) ? ra : aa({ ...Ae, extend: { theme: Ae.theme, classGroups: Ae.classGroups, conflictingClassGroupModifiers: Ae.conflictingClassGroupModifiers, conflictingClassGroups: Ae.conflictingClassGroups, ...Ae.extend } })), el(vt(ot(l)))) : ot(l), Pt = (l, a) => {
  for (let e in a) l.hasOwnProperty(e) ? l[e] = ot(l[e], a[e]) : l[e] = a[e];
  return l;
}, D = (l, a) => {
  let { extend: e = null, slots: t = {}, variants: r = {}, compoundVariants: o = [], compoundSlots: s = [], defaultVariants: u = {} } = l, n = { ...oa, ...a }, f = e != null && e.base ? ot(e.base, l?.base) : l?.base, y = e != null && e.variants && !ke(e.variants) ? Nt(r, e.variants) : r, C = e != null && e.defaultVariants && !ke(e.defaultVariants) ? { ...e.defaultVariants, ...u } : u;
  !ke(n.twMergeConfig) && !ml(n.twMergeConfig, Ae) && (zt = !0, Ae = n.twMergeConfig);
  let S = ke(e?.slots), c = ke(t) ? {} : { base: ot(l?.base, S && e?.base), ...t }, v = S ? c : Pt({ ...e?.slots }, ke(c) ? { base: l?.base } : c), k = ke(e?.compoundVariants) ? o : Ht(e?.compoundVariants, o), b = (w) => {
    if (ke(y) && ke(t) && S) return Je(f, w?.class, w?.className)(n);
    if (k && !Array.isArray(k)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof k}`);
    if (s && !Array.isArray(s)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof s}`);
    let z = (O, H, M = [], _) => {
      let I = M;
      if (typeof H == "string") I = I.concat(Et(H).split(" ").map((W) => `${O}:${W}`));
      else if (Array.isArray(H)) I = I.concat(H.reduce((W, G) => W.concat(`${O}:${G}`), []));
      else if (typeof H == "object" && typeof _ == "string") {
        for (let W in H) if (H.hasOwnProperty(W) && W === _) {
          let G = H[W];
          if (G && typeof G == "string") {
            let Y = Et(G);
            I[_] ? I[_] = I[_].concat(Y.split(" ").map((Z) => `${O}:${Z}`)) : I[_] = Y.split(" ").map((Z) => `${O}:${Z}`);
          } else Array.isArray(G) && G.length > 0 && (I[_] = G.reduce((Y, Z) => Y.concat(`${O}:${Z}`), []));
        }
      }
      return I;
    }, $ = (O, H = y, M = null, _ = null) => {
      var I;
      let W = H[O];
      if (!W || ke(W)) return null;
      let G = (I = _?.[O]) != null ? I : w?.[O];
      if (G === null) return null;
      let Y = Rt(G), Z = Array.isArray(n.responsiveVariants) && n.responsiveVariants.length > 0 || n.responsiveVariants === !0, ce = C?.[O], K = [];
      if (typeof Y == "object" && Z) for (let [re, fe] of Object.entries(Y)) {
        let ue = W[fe];
        if (re === "initial") {
          ce = fe;
          continue;
        }
        Array.isArray(n.responsiveVariants) && !n.responsiveVariants.includes(re) || (K = z(re, ue, K, M));
      }
      let se = Y != null && typeof Y != "object" ? Y : Rt(ce), ne = W[se || "false"];
      return typeof K == "object" && typeof M == "string" && K[M] ? Pt(K, ne) : K.length > 0 ? (K.push(ne), M === "base" ? K.join(" ") : K) : ne;
    }, T = () => y ? Object.keys(y).map((O) => $(O, y)) : null, B = (O, H) => {
      if (!y || typeof y != "object") return null;
      let M = new Array();
      for (let _ in y) {
        let I = $(_, y, O, H), W = O === "base" && typeof I == "string" ? I : I && I[O];
        W && (M[M.length] = W);
      }
      return M;
    }, A = {};
    for (let O in w) w[O] !== void 0 && (A[O] = w[O]);
    let V = (O, H) => {
      var M;
      let _ = typeof w?.[O] == "object" ? { [O]: (M = w[O]) == null ? void 0 : M.initial } : {};
      return { ...C, ...A, ..._, ...H };
    }, E = (O = [], H) => {
      let M = [];
      for (let { class: _, className: I, ...W } of O) {
        let G = !0;
        for (let [Y, Z] of Object.entries(W)) {
          let ce = V(Y, H)[Y];
          if (Array.isArray(Z)) {
            if (!Z.includes(ce)) {
              G = !1;
              break;
            }
          } else {
            let K = (se) => se == null || se === !1;
            if (K(Z) && K(ce)) continue;
            if (ce !== Z) {
              G = !1;
              break;
            }
          }
        }
        G && (_ && M.push(_), I && M.push(I));
      }
      return M;
    }, P = (O) => {
      let H = E(k, O);
      if (!Array.isArray(H)) return H;
      let M = {};
      for (let _ of H) if (typeof _ == "string" && (M.base = Je(M.base, _)(n)), typeof _ == "object") for (let [I, W] of Object.entries(_)) M[I] = Je(M[I], W)(n);
      return M;
    }, j = (O) => {
      if (s.length < 1) return null;
      let H = {};
      for (let { slots: M = [], class: _, className: I, ...W } of s) {
        if (!ke(W)) {
          let G = !0;
          for (let Y of Object.keys(W)) {
            let Z = V(Y, O)[Y];
            if (Z === void 0 || (Array.isArray(W[Y]) ? !W[Y].includes(Z) : W[Y] !== Z)) {
              G = !1;
              break;
            }
          }
          if (!G) continue;
        }
        for (let G of M) H[G] = H[G] || [], H[G].push([_, I]);
      }
      return H;
    };
    if (!ke(t) || !S) {
      let O = {};
      if (typeof v == "object" && !ke(v)) for (let H of Object.keys(v)) O[H] = (M) => {
        var _, I;
        return Je(v[H], B(H, M), ((_ = P(M)) != null ? _ : [])[H], ((I = j(M)) != null ? I : [])[H], M?.class, M?.className)(n);
      };
      return O;
    }
    return Je(f, T(), E(k), w?.class, w?.className)(n);
  }, m = () => {
    if (!(!y || typeof y != "object")) return Object.keys(y);
  };
  return b.variantKeys = m(), b.extend = e, b.base = f, b.slots = v, b.variants = y, b.defaultVariants = C, b.compoundSlots = s, b.compoundVariants = k, b;
};
const sa = D({
  base: "w-10 h-10 text-center border rounded outline-none transition-colors",
  variants: {
    state: {
      default: "border-gray-300 focus:border-gray-900 border-2 border-solid",
      error: "border-gray-700 focus:border-black border-2 border-solid",
      success: "border-black focus:border-gray-800 border-2 border-solid"
    },
    size: {
      sm: "w-8 h-8 text-sm",
      md: "w-10 h-10 text-base",
      lg: "w-12 h-12 text-lg"
    }
  },
  defaultVariants: {
    state: "default",
    size: "md"
  }
}), na = ["onUpdate:modelValue", "onInput", "onKeydown"], ia = /* @__PURE__ */ q({
  name: "PinInput",
  __name: "index",
  props: {
    length: { default: 4 },
    size: { default: "md" },
    state: { default: "default" },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  setup(l) {
    const a = l, { values: e, setRef: t, onInput: r, onKeydown: o } = bl(a.length ?? 4), s = d(() => a.unstyled ? a.pt?.container || "flex gap-2" : a.pt?.container ? `flex gap-2 ${a.pt.container}` : "flex gap-2"), u = d(() => a.unstyled ? a.pt?.input || "" : sa({
      state: a.state,
      size: a.size,
      class: a.pt?.input
    }));
    return (n, f) => (p(), g("div", {
      class: i(s.value)
    }, [
      (p(!0), g(ee, null, oe(h(e).length, (y, C) => He((p(), g("input", {
        key: C,
        "onUpdate:modelValue": (S) => h(e)[C] = S,
        ref_for: !0,
        ref: (S) => h(t)(S, C),
        class: i(u.value),
        maxlength: "1",
        onInput: (S) => h(r)(S, C),
        onKeydown: (S) => h(o)(S, C),
        type: "text",
        inputmode: "numeric",
        autocomplete: "one-time-code"
      }, null, 42, na)), [
        [$t, h(e)[C]]
      ])), 128))
    ], 2));
  }
}), ua = J(ia);
function da(l) {
  const a = R(!1), e = l?.closeOnEsc ?? !0, t = l?.closeOnOverlayClick ?? !0, r = () => {
    a.value = !0;
  }, o = () => {
    a.value = !1, l?.onClose?.();
  }, s = R(null), u = R(null), n = (y) => {
    y.key === "Escape" && e && o();
  };
  return Q(a, (y) => {
    y ? (document.addEventListener("keydown", n), document.body.style.overflow = "hidden") : (document.removeEventListener("keydown", n), document.body.style.overflow = "");
  }), Pe(() => {
    document.removeEventListener("keydown", n), document.body.style.overflow = "";
  }), {
    isOpen: a,
    open: r,
    close: o,
    modalRef: s,
    overlayRef: u,
    onOverlayClick: (y) => {
      y.target === u.value && t && o();
    }
  };
}
const ca = D({
  base: "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center"
}), fa = D({
  base: `
    relative
    bg-white dark:bg-gray-800
    rounded-lg shadow-lg
    w-full max-w-lg
    transition-all duration-300
    flex flex-col
    overflow-hidden
  `,
  variants: {
    size: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      full: "max-w-full"
    }
  },
  defaultVariants: {
    size: "lg"
  }
}), pa = D({
  base: "px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between"
}), ga = D({
  base: "text-lg font-medium text-gray-900 dark:text-white"
}), va = D({
  base: "p-6 flex-1 overflow-y-auto"
}), ba = D({
  base: "px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-2"
}), ma = D({
  base: "absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
}), ya = /* @__PURE__ */ q({
  name: "Modal",
  __name: "index",
  props: {
    modelValue: { type: Boolean, default: !1 },
    title: {},
    size: { default: "lg" },
    closeOnEsc: { type: Boolean, default: !0 },
    closeOnOverlayClick: { type: Boolean, default: !0 },
    hideCloseButton: { type: Boolean, default: !1 },
    class: {},
    contentClass: {},
    headerClass: {},
    bodyClass: {},
    footerClass: {},
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: ["update:modelValue", "close"],
  setup(l, { emit: a }) {
    const e = l, t = a, r = Ge(), { isOpen: o, open: s, close: u, modalRef: n, overlayRef: f, onOverlayClick: y } = da({
      onClose: () => {
        t("close"), t("update:modelValue", !1);
      },
      closeOnEsc: e.closeOnEsc,
      closeOnOverlayClick: e.closeOnOverlayClick
    });
    be(async () => {
      await ve(), e.modelValue && s();
    }), Q(
      () => e.modelValue,
      (T) => {
        T && !o.value ? s() : !T && o.value && u();
      }
    ), Q(o, (T) => {
      T !== e.modelValue && t("update:modelValue", T);
    });
    const C = () => {
      u();
    }, S = d(() => !!e.title || !!r.header), c = d(() => !!r.footer), v = d(() => e.unstyled ? [e.pt?.overlay, e.class].filter(Boolean) : [ca({ class: e.pt?.overlay }), e.class]), k = d(() => e.unstyled ? [e.pt?.content, e.contentClass].filter(Boolean) : [
      fa({
        size: e.size,
        class: e.pt?.content
      }),
      e.contentClass
    ]), b = d(() => e.unstyled ? [e.pt?.header, e.headerClass].filter(Boolean) : [pa({ class: e.pt?.header }), e.headerClass]), m = d(() => e.unstyled ? e.pt?.title || "" : ga({ class: e.pt?.title })), w = d(() => e.unstyled ? [e.pt?.body, e.bodyClass].filter(Boolean) : [va({ class: e.pt?.body }), e.bodyClass]), z = d(() => e.unstyled ? [e.pt?.footer, e.footerClass].filter(Boolean) : [ba({ class: e.pt?.footer }), e.footerClass]), $ = d(() => e.unstyled ? e.pt?.closeButton || "" : ma({ class: e.pt?.closeButton }));
    return (T, B) => (p(), Me(ft, { to: "body" }, [
      De(rt, {
        name: "vk-modal",
        appear: ""
      }, {
        default: Ne(() => [
          h(o) ? (p(), g("div", {
            key: 0,
            class: i(v.value),
            ref_key: "overlayRef",
            ref: f,
            onClick: B[0] || (B[0] = //@ts-ignore
            (...A) => h(y) && h(y)(...A))
          }, [
            x("div", {
              class: i([k.value, "vk-modal-dialog"]),
              ref_key: "modalRef",
              ref: n,
              role: "dialog",
              "aria-modal": "true",
              tabindex: "-1"
            }, [
              S.value ? (p(), g("div", {
                key: 0,
                class: i(b.value)
              }, [
                F(T.$slots, "header", {}, () => [
                  x("h3", {
                    class: i(m.value)
                  }, N(e.title), 3)
                ], !0),
                T.hideCloseButton ? L("", !0) : (p(), g("button", {
                  key: 0,
                  class: i($.value),
                  onClick: C,
                  "aria-label": "关闭"
                }, [
                  F(T.$slots, "close-icon", {}, () => [
                    B[1] || (B[1] = x("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      x("line", {
                        x1: "18",
                        y1: "6",
                        x2: "6",
                        y2: "18"
                      }),
                      x("line", {
                        x1: "6",
                        y1: "6",
                        x2: "18",
                        y2: "18"
                      })
                    ], -1))
                  ], !0)
                ], 2))
              ], 2)) : L("", !0),
              x("div", {
                class: i(w.value)
              }, [
                F(T.$slots, "default", {}, void 0, !0)
              ], 2),
              c.value ? (p(), g("div", {
                key: 1,
                class: i(z.value)
              }, [
                F(T.$slots, "footer", {}, void 0, !0)
              ], 2)) : L("", !0)
            ], 2)
          ], 2)) : L("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Ze = (l, a) => {
  const e = l.__vccOpts || l;
  for (const [t, r] of a)
    e[t] = r;
  return e;
}, ha = /* @__PURE__ */ Ze(ya, [["__scopeId", "data-v-77a6943b"]]), wa = J(ha);
function xa() {
  const l = R(!1), a = R(!1);
  return {
    isLoaded: l,
    isError: a,
    onLoad: () => {
      l.value = !0, a.value = !1;
    },
    onError: () => {
      a.value = !0, l.value = !1;
    }
  };
}
const ka = D({
  base: "inline-flex items-center justify-center overflow-hidden bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 relative",
  variants: {
    size: {
      xs: "w-6 h-6 text-xs",
      sm: "w-8 h-8 text-sm",
      md: "w-10 h-10 text-base",
      lg: "w-12 h-12 text-lg",
      xl: "w-16 h-16 text-xl"
    },
    shape: {
      circle: "rounded-full",
      square: "rounded-md"
    },
    status: {
      online: "after:absolute after:bottom-0 after:right-0 after:w-2 after:h-2 after:bg-green-500 after:rounded-full after:border-2 after:border-white dark:after:border-gray-800",
      offline: "after:absolute after:bottom-0 after:right-0 after:w-2 after:h-2 after:bg-gray-400 after:rounded-full after:border-2 after:border-white dark:after:border-gray-800",
      away: "after:absolute after:bottom-0 after:right-0 after:w-2 after:h-2 after:bg-yellow-500 after:rounded-full after:border-2 after:border-white dark:after:border-gray-800",
      busy: "after:absolute after:bottom-0 after:right-0 after:w-2 after:h-2 after:bg-red-500 after:rounded-full after:border-2 after:border-white dark:after:border-gray-800",
      none: ""
    }
  },
  defaultVariants: {
    size: "md",
    shape: "circle",
    status: "none"
  },
  compoundVariants: []
}), Ca = ["src", "alt"], Sa = ["src", "alt"], za = /* @__PURE__ */ q({
  name: "Avatar",
  __name: "index",
  props: {
    size: { default: "md" },
    src: {},
    alt: { default: "" },
    fallback: { default: "" },
    shape: { default: "circle" },
    status: { default: "none" },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  setup(l) {
    const a = l, { isError: e, onLoad: t, onError: r } = xa(), o = d(() => a.unstyled ? a.pt?.root || "" : ka({
      size: a.size,
      shape: a.shape,
      status: a.status,
      class: a.pt?.root
    })), s = d(() => a.unstyled ? a.pt?.image || "" : "w-full h-full object-cover"), u = d(() => a.unstyled ? a.pt?.fallback || "" : "w-full h-full flex items-center justify-center"), n = d(() => a.unstyled ? a.pt?.initials || "" : "w-full h-full flex items-center justify-center"), f = d(() => a.unstyled ? a.pt?.icon || "" : "w-1/2 h-1/2"), y = d(() => a.alt ? a.alt.split(" ").map((S) => S.charAt(0)).slice(0, 2).join("").toUpperCase() : ""), C = d(() => !a.src || e.value);
    return (S, c) => (p(), g("div", {
      class: i(o.value)
    }, [
      C.value ? S.fallback ? (p(), g("span", {
        key: 1,
        class: i(u.value)
      }, [
        x("img", {
          src: S.fallback,
          alt: S.alt,
          class: i(s.value)
        }, null, 10, Sa)
      ], 2)) : S.alt ? (p(), g("span", {
        key: 2,
        class: i(n.value)
      }, N(y.value), 3)) : (p(), g("span", {
        key: 3,
        class: i(u.value)
      }, [
        (p(), g("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          class: i(f.value)
        }, c[2] || (c[2] = [
          x("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }, null, -1),
          x("circle", {
            cx: "12",
            cy: "7",
            r: "4"
          }, null, -1)
        ]), 2))
      ], 2)) : (p(), g("img", {
        key: 0,
        src: S.src,
        alt: S.alt,
        class: i(s.value),
        onLoad: c[0] || (c[0] = //@ts-ignore
        (...v) => h(t) && h(t)(...v)),
        onError: c[1] || (c[1] = //@ts-ignore
        (...v) => h(r) && h(r)(...v))
      }, null, 42, Ca))
    ], 2));
  }
}), $a = J(za);
function Ba(l) {
  const a = d(() => l.dot ? l.show !== !1 : l.show !== !1 && l.content !== void 0 && l.content !== ""), e = d(() => {
    switch (l.position) {
      case "top-left":
        return "top-0 left-0 -translate-x-1/2 -translate-y-1/2";
      case "bottom-right":
        return "bottom-0 right-0 translate-x-1/2 translate-y-1/2";
      case "bottom-left":
        return "bottom-0 left-0 -translate-x-1/2 translate-y-1/2";
      default:
        return "top-0 right-0 translate-x-1/2 -translate-y-1/2";
    }
  });
  return {
    visible: a,
    positionClass: e
  };
}
const Va = D({
  base: "absolute inline-flex items-center justify-center font-medium rounded-full z-10",
  variants: {
    color: {
      primary: "bg-blue-500 text-white dark:bg-blue-600",
      secondary: "bg-gray-500 text-white dark:bg-gray-600",
      success: "bg-green-500 text-white dark:bg-green-600",
      warning: "bg-yellow-500 text-white dark:bg-yellow-600",
      danger: "bg-red-500 text-white dark:bg-red-600",
      info: "bg-sky-500 text-white dark:bg-sky-600"
    },
    size: {
      sm: "min-w-4 h-4 text-xs px-1",
      md: "min-w-5 h-5 text-xs px-1.5",
      lg: "min-w-6 h-6 text-sm px-2"
    },
    dot: {
      true: "w-2 h-2 min-w-0 p-0",
      false: ""
    }
  },
  compoundVariants: [
    {
      dot: !0,
      size: "sm",
      class: "w-1.5 h-1.5"
    },
    {
      dot: !0,
      size: "lg",
      class: "w-2.5 h-2.5"
    }
  ],
  defaultVariants: {
    color: "primary",
    size: "md",
    dot: !1
  }
}), Ia = /* @__PURE__ */ q({
  name: "Badge",
  __name: "index",
  props: {
    content: {},
    dot: { type: Boolean, default: !1 },
    show: { type: Boolean, default: !0 },
    position: { default: "top-right" },
    color: { default: "primary" },
    size: { default: "md" },
    max: { default: 99 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  setup(l) {
    const a = l, { visible: e, positionClass: t } = Ba(a), r = d(() => a.unstyled ? a.pt?.root || "" : "relative inline-block"), o = d(() => a.unstyled ? a.pt?.badge || "" : Va({
      color: a.color,
      size: a.size,
      dot: a.dot,
      class: [t.value, a.pt?.badge]
    })), s = d(() => a.dot ? "" : typeof a.content == "number" && a.max && a.content > a.max ? `${a.max}+` : a.content);
    return (u, n) => (p(), g("div", {
      class: i(r.value)
    }, [
      F(u.$slots, "default"),
      h(e) ? (p(), g("span", {
        key: 0,
        class: i(o.value),
        role: "status",
        "aria-live": "polite"
      }, N(s.value), 3)) : L("", !0)
    ], 2));
  }
}), Ma = J(Ia);
function Da(l) {
  const a = R(l.modelValue ?? !1), e = () => {
    l.disabled || (a.value = !a.value, l.onChange?.(a.value));
  };
  return Q(
    () => l.modelValue,
    (r) => {
      r !== void 0 && (a.value = r);
    }
  ), {
    checked: d(() => !!a.value),
    disabled: d(() => !!l.disabled),
    toggle: e,
    onKeyDown: (r) => {
      (r.key === "Enter" || r.key === " ") && (r.preventDefault(), e());
    }
  };
}
const Ta = D({
  slots: {
    root: [
      "relative inline-flex items-center rounded-full transition-all duration-300 ease-in-out",
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      "dark:focus:ring-offset-gray-800",
      "cursor-pointer overflow-hidden"
    ],
    thumb: [
      "absolute bg-white rounded-full shadow-md",
      "transform transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
      "dark:bg-gray-100",
      "will-change-transform",
      "flex items-center justify-center"
    ]
  },
  variants: {
    checked: {
      true: {
        root: ["transition-all duration-300 ease-in-out"],
        thumb: ["transition-all duration-300", "scale-110"]
      },
      false: {
        root: ["transition-all duration-300 ease-in-out"],
        thumb: ["transition-all duration-300"]
      }
    },
    disabled: {
      true: {
        root: "opacity-50 cursor-not-allowed"
      }
    },
    size: {
      small: {
        root: "w-8 h-5",
        thumb: "w-3 h-3 top-1 left-1"
      },
      default: {
        root: "w-10 h-6",
        thumb: "w-4 h-4 top-1 left-1"
      },
      large: {
        root: "w-12 h-7",
        thumb: "w-5 h-5 top-1 left-1"
      }
    },
    color: {
      blue: {
        root: [
          "focus:ring-blue-500 dark:focus:ring-blue-400",
          "before:bg-blue-400/30"
        ]
      },
      green: {
        root: [
          "focus:ring-green-500 dark:focus:ring-green-400",
          "before:bg-green-400/30"
        ]
      },
      red: {
        root: [
          "focus:ring-red-500 dark:focus:ring-red-400",
          "before:bg-red-400/30"
        ]
      },
      yellow: {
        root: [
          "focus:ring-yellow-500 dark:focus:ring-yellow-400",
          "before:bg-yellow-400/30"
        ]
      },
      purple: {
        root: [
          "focus:ring-purple-500 dark:focus:ring-purple-400",
          "before:bg-purple-400/30"
        ]
      }
    }
  },
  defaultVariants: {
    checked: !1,
    disabled: !1,
    size: "default",
    color: "blue"
  }
}), Ra = ["aria-checked", "disabled"], Ea = /* @__PURE__ */ q({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Switch",
  __name: "index",
  props: {
    modelValue: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    size: { default: "default" },
    color: { default: "blue" },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: ["update:modelValue"],
  setup(l, { emit: a }) {
    const e = l, t = a, { checked: r, toggle: o, onKeyDown: s } = Da({
      modelValue: e.modelValue,
      disabled: e.disabled,
      onChange: (b) => t("update:modelValue", b)
    }), u = R(!1);
    Q(r, (b) => {
      b && (u.value = !0, setTimeout(() => {
        u.value = !1;
      }, 500));
    });
    const n = () => {
      if (!r.value) return "";
      switch (e.size) {
        case "small":
          return "translate-x-3";
        case "large":
          return "translate-x-5";
        default:
          return "translate-x-4";
      }
    }, f = () => {
      if (!r.value)
        return "bg-gray-300 dark:bg-gray-600";
      const b = {
        blue: "bg-blue-600 dark:bg-blue-500",
        green: "bg-green-600 dark:bg-green-500",
        red: "bg-red-600 dark:bg-red-500",
        yellow: "bg-yellow-600 dark:bg-yellow-500",
        purple: "bg-purple-600 dark:bg-purple-500"
      };
      return b[e.color] || b.blue;
    }, y = () => {
      const b = {
        blue: "bg-blue-400/10",
        green: "bg-green-400/10",
        red: "bg-red-400/10",
        yellow: "bg-yellow-400/10",
        purple: "bg-purple-400/10"
      };
      return b[e.color] || b.blue;
    }, C = d(
      () => Ta({
        checked: r.value,
        disabled: e.disabled,
        size: e.size,
        color: e.color
      })
    ), S = d(() => e.unstyled ? e.pt?.root || "" : C.value.root({ class: e.pt?.root })), c = d(() => e.unstyled ? e.pt?.track || "" : f() + (e.pt?.track ? ` ${e.pt.track}` : "")), v = d(() => e.unstyled ? e.pt?.thumb || "" : C.value.thumb({ class: e.pt?.thumb })), k = d(() => e.unstyled ? e.pt?.ripple || "" : y() + (e.pt?.ripple ? ` ${e.pt.ripple}` : ""));
    return (b, m) => (p(), g("button", {
      type: "button",
      role: "switch",
      "aria-checked": h(r),
      disabled: e.disabled,
      onClick: m[0] || (m[0] = //@ts-ignore
      (...w) => h(o) && h(o)(...w)),
      onKeydown: m[1] || (m[1] = //@ts-ignore
      (...w) => h(s) && h(s)(...w)),
      class: i(S.value)
    }, [
      x("span", {
        class: i([
          c.value,
          "absolute inset-0 rounded-full transition-colors duration-300 ease-in-out"
        ])
      }, null, 2),
      x("span", {
        class: i([
          v.value,
          "transform transition-all duration-300 ease-in-out",
          n()
        ])
      }, [
        h(r) ? (p(), g("span", {
          key: 0,
          class: i(["absolute inset-0 bg-white rounded-full transition-all duration-300", {
            "opacity-100 scale-100": h(r),
            "opacity-0 scale-0": !h(r)
          }])
        }, null, 2)) : L("", !0)
      ], 2),
      x("span", {
        class: i(["absolute inset-0 transition-opacity duration-300", { "opacity-0": !h(r), "opacity-100": h(r) }])
      }, [
        x("span", {
          class: i(["absolute inset-0 rounded-full transform transition-transform duration-500", [
            k.value,
            { "scale-100": u.value, "scale-0": !u.value }
          ]])
        }, null, 2)
      ], 2)
    ], 42, Ra));
  }
}), La = /* @__PURE__ */ Ze(Ea, [["__scopeId", "data-v-dec8aa04"]]), Aa = J(La);
function Oa(l) {
  const a = R(!1), e = l?.closeOnEsc ?? !0, t = l?.closeOnOverlayClick ?? !0, r = () => {
    a.value = !0, l?.onOpen?.();
  }, o = () => {
    a.value = !1, l?.onClose?.();
  }, s = R(null), u = R(null), n = (y) => {
    y.key === "Escape" && e && o();
  }, f = (y) => {
    y.target === u.value && t && o();
  };
  return Q(a, (y) => {
    y ? document.addEventListener("keydown", n) : document.removeEventListener("keydown", n);
  }), Pe(() => {
    document.removeEventListener("keydown", n);
  }), {
    isOpen: a,
    open: r,
    close: o,
    overlayRef: u,
    drawerRef: s,
    onOverlayClick: f
  };
}
const Pa = D({
  base: "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity z-40",
  variants: {
    open: {
      true: "opacity-100",
      false: "opacity-0 pointer-events-none"
    }
  },
  defaultVariants: {
    open: !1
  }
}), ja = D({
  base: "fixed bg-white dark:bg-gray-800 shadow-xl transition-all duration-300 overflow-auto flex flex-col z-50",
  variants: {
    placement: {
      left: "top-0 left-0 bottom-0 h-full",
      right: "top-0 right-0 bottom-0 h-full",
      top: "top-0 left-0 right-0 w-full",
      bottom: "bottom-0 left-0 right-0 w-full"
    },
    open: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      placement: "left",
      open: !0,
      class: "translate-x-0"
    },
    {
      placement: "left",
      open: !1,
      class: "-translate-x-full"
    },
    {
      placement: "right",
      open: !0,
      class: "translate-x-0"
    },
    {
      placement: "right",
      open: !1,
      class: "translate-x-full"
    },
    {
      placement: "top",
      open: !0,
      class: "translate-y-0"
    },
    {
      placement: "top",
      open: !1,
      class: "-translate-y-full"
    },
    {
      placement: "bottom",
      open: !0,
      class: "translate-y-0"
    },
    {
      placement: "bottom",
      open: !1,
      class: "translate-y-full"
    }
  ],
  defaultVariants: {
    placement: "right",
    open: !1
  }
}), Wa = D({
  base: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700"
}), Fa = D({
  base: "text-lg font-medium text-gray-900 dark:text-white"
}), _a = D({
  base: "p-1 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
}), Ha = D({
  base: "flex-1 p-4 overflow-y-auto"
}), Na = D({
  base: "flex justify-end gap-2 p-4 border-t border-gray-200 dark:border-gray-700"
}), Ga = ["aria-hidden", "aria-labelledby"], Ka = /* @__PURE__ */ q({
  name: "Drawer",
  __name: "index",
  props: {
    modelValue: { type: Boolean },
    placement: { default: "right" },
    size: { default: "300px" },
    showOverlay: { type: Boolean, default: !0 },
    closeOnEsc: { type: Boolean, default: !0 },
    closeOnOverlayClick: { type: Boolean, default: !0 },
    preventScroll: { type: Boolean, default: !0 },
    zIndex: { default: 1e3 },
    title: {},
    hideCloseButton: { type: Boolean, default: !1 },
    class: {},
    contentClass: {},
    headerClass: {},
    bodyClass: {},
    footerClass: {},
    overlayClass: {},
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: ["update:modelValue", "close", "open"],
  setup(l, { emit: a }) {
    const e = l, t = a, r = Ge(), { isOpen: o, close: s, open: u, drawerRef: n, overlayRef: f, onOverlayClick: y } = Oa({
      onClose: () => {
        t("update:modelValue", !1), t("close");
      },
      onOpen: () => {
        t("open");
      },
      closeOnEsc: e.closeOnEsc,
      closeOnOverlayClick: e.closeOnOverlayClick
    });
    Q(
      () => e.modelValue,
      (V) => {
        V && !o.value ? u() : !V && o.value && s();
      },
      { immediate: !0 }
    ), Q(o, (V) => {
      V !== e.modelValue && t("update:modelValue", V);
    });
    const C = R("");
    Q(o, (V) => {
      e.preventScroll && (V ? (C.value = document.body.style.overflow, document.body.style.overflow = "hidden") : document.body.style.overflow = C.value);
    }), Ee(() => {
      e.preventScroll && o.value && (document.body.style.overflow = C.value);
    });
    const S = d(() => e.unstyled ? [e.pt?.overlay, e.overlayClass].filter(Boolean) : [
      Pa({
        open: o.value,
        class: e.pt?.overlay
      }),
      e.overlayClass
    ]), c = d(() => e.unstyled ? [e.pt?.container, e.contentClass, e.class].filter(
      Boolean
    ) : [
      ja({
        placement: e.placement,
        open: o.value,
        class: e.pt?.container
      }),
      e.contentClass,
      e.class
    ]), v = d(() => {
      const V = {
        zIndex: e.zIndex.toString()
      };
      if (!e.unstyled && e.size) {
        const E = typeof e.size == "number" ? `${e.size}px` : e.size;
        e.placement === "left" || e.placement === "right" ? V.width = E : V.height = E;
      }
      return V;
    }), k = d(() => e.unstyled ? [e.pt?.header, e.headerClass].filter(Boolean) : [Wa({ class: e.pt?.header }), e.headerClass]), b = d(() => e.unstyled ? e.pt?.title || "" : Fa({ class: e.pt?.title })), m = d(() => e.unstyled ? e.pt?.closeButton || "" : _a({ class: e.pt?.closeButton })), w = d(() => e.unstyled ? [e.pt?.body, e.bodyClass].filter(Boolean) : [Ha({ class: e.pt?.body }), e.bodyClass]), z = d(() => e.unstyled ? [e.pt?.footer, e.footerClass].filter(Boolean) : [Na({ class: e.pt?.footer }), e.footerClass]), $ = () => {
      s();
    }, T = d(() => !!e.title || !!r.header), B = d(() => !!r.footer), A = d(() => `vk-drawer-${e.placement}`);
    return (V, E) => (p(), Me(ft, { to: "body" }, [
      De(rt, {
        name: "vk-drawer-overlay",
        appear: ""
      }, {
        default: Ne(() => [
          V.showOverlay && h(o) ? (p(), g("div", {
            key: 0,
            class: i(S.value),
            ref_key: "overlayRef",
            ref: f,
            onClick: E[0] || (E[0] = //@ts-ignore
            (...P) => h(y) && h(y)(...P)),
            role: "presentation",
            "aria-hidden": "true"
          }, null, 2)) : L("", !0)
        ]),
        _: 1
      }),
      De(rt, {
        name: A.value,
        appear: ""
      }, {
        default: Ne(() => [
          h(o) ? (p(), g("div", {
            key: 0,
            class: i([c.value, "vk-drawer-panel"]),
            style: le(v.value),
            ref_key: "drawerRef",
            ref: n,
            role: "dialog",
            "aria-modal": "true",
            "aria-hidden": !h(o),
            "aria-labelledby": V.title ? "drawer-title" : void 0
          }, [
            T.value ? (p(), g("div", {
              key: 0,
              class: i(k.value)
            }, [
              F(V.$slots, "header", {}, () => [
                V.title ? (p(), g("h2", {
                  key: 0,
                  class: i(b.value),
                  id: "drawer-title"
                }, N(V.title), 3)) : L("", !0)
              ], !0),
              V.hideCloseButton ? L("", !0) : (p(), g("button", {
                key: 0,
                class: i(m.value),
                onClick: $,
                "aria-label": "关闭",
                type: "button"
              }, [
                F(V.$slots, "close-icon", {}, () => [
                  E[1] || (E[1] = x("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }, [
                    x("line", {
                      x1: "18",
                      y1: "6",
                      x2: "6",
                      y2: "18"
                    }),
                    x("line", {
                      x1: "6",
                      y1: "6",
                      x2: "18",
                      y2: "18"
                    })
                  ], -1))
                ], !0)
              ], 2))
            ], 2)) : L("", !0),
            x("div", {
              class: i(w.value)
            }, [
              F(V.$slots, "default", {}, void 0, !0)
            ], 2),
            B.value ? (p(), g("div", {
              key: 1,
              class: i(z.value)
            }, [
              F(V.$slots, "footer", {}, void 0, !0)
            ], 2)) : L("", !0)
          ], 14, Ga)) : L("", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ]));
  }
}), Ya = /* @__PURE__ */ Ze(Ka, [["__scopeId", "data-v-4d3052cd"]]), Ua = J(Ya);
function Xa(l, a) {
  const e = R(
    a.modelValue !== void 0 ? a.modelValue : l[0]
  ), t = (s) => e.value === s, r = (s) => {
    e.value = s, a.onChange?.(s);
  };
  return {
    selected: e,
    isSelected: t,
    select: r,
    onKeydown: (s) => {
      const u = l.indexOf(e.value);
      if (s.key === "ArrowRight" || s.key === "ArrowDown") {
        const n = l[(u + 1) % l.length];
        r(n);
      } else if (s.key === "ArrowLeft" || s.key === "ArrowUp") {
        const n = l[(u - 1 + l.length) % l.length];
        r(n);
      }
    }
  };
}
const qa = D({
  base: "inline-flex rounded-md p-1 bg-gray-100 dark:bg-gray-800 outline-none border-none",
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base"
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: ""
    },
    block: {
      true: "w-full",
      false: ""
    }
  },
  defaultVariants: {
    size: "md",
    disabled: !1,
    block: !1
  }
}), Za = D({
  base: "relative flex-1 flex items-center max-w-max justify-center px-3 py-1.5 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-gray-400",
  variants: {
    selected: {
      true: "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm",
      false: "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "cursor-pointer"
    },
    size: {
      sm: "h-6",
      md: "h-8",
      lg: "h-10"
    }
  },
  defaultVariants: {
    selected: !1,
    disabled: !1,
    size: "md"
  }
}), Ja = ["disabled", "aria-selected", "tabindex", "onClick"], Qa = /* @__PURE__ */ q({
  name: "Segmented",
  __name: "index",
  props: {
    modelValue: {},
    options: {},
    size: { default: "md" },
    disabled: { type: Boolean, default: !1 },
    block: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: ["update:modelValue", "change"],
  setup(l, { emit: a }) {
    const e = l, t = a, r = d(() => e.options.map((S) => typeof S == "object" ? {
      value: S.value,
      label: S.label,
      disabled: S.disabled || !1
    } : {
      value: S,
      label: String(S),
      disabled: !1
    })), o = d(() => r.value.map((S) => S.value)), { isSelected: s, select: u, onKeydown: n } = Xa(o.value, {
      modelValue: e.modelValue,
      onChange: (S) => {
        t("update:modelValue", S), t("change", S);
      }
    });
    Q(
      () => e.modelValue,
      (S) => {
        S !== void 0 && o.value.includes(S) && u(S);
      }
    );
    const f = d(() => e.unstyled ? e.pt?.container || "" : qa({
      size: e.size,
      disabled: e.disabled,
      block: e.block,
      class: e.pt?.container
    })), y = (S, c) => e.unstyled ? e.pt?.option || "" : Za({
      selected: s(S),
      disabled: e.disabled || c,
      size: e.size,
      class: e.pt?.option
    }), C = (S, c) => {
      e.disabled || c || u(S);
    };
    return (S, c) => (p(), g("div", {
      class: i(f.value),
      role: "tablist",
      onKeydown: c[0] || (c[0] = //@ts-ignore
      (...v) => h(n) && h(n)(...v))
    }, [
      (p(!0), g(ee, null, oe(r.value, (v) => (p(), g("button", {
        key: String(v.value),
        class: i(y(v.value, v.disabled)),
        disabled: e.disabled || v.disabled,
        "aria-selected": h(s)(v.value),
        tabindex: h(s)(v.value) ? 0 : -1,
        role: "tab",
        type: "button",
        onClick: (k) => C(v.value, v.disabled)
      }, N(v.label), 11, Ja))), 128))
    ], 34));
  }
}), er = J(Qa);
function tr(l) {
  const a = R(null), e = R(null), t = l.min ?? 0, r = l.max ?? 100, o = l.step ?? 1, s = l.orientation ?? "horizontal", u = R(l.modelValue ?? t), n = d(() => (u.value - t) / (r - t) * 100), f = (c) => {
    const v = Math.round(c / o) * o, k = Math.min(r, Math.max(t, v));
    u.value = k, l.onChange?.(k);
  }, y = (c) => {
    const v = a.value;
    if (!v) return;
    const k = v.getBoundingClientRect(), b = s === "horizontal" ? (c.clientX - k.left) / k.width : 1 - (c.clientY - k.top) / k.height;
    f(t + b * (r - t));
  }, C = (c) => {
    c.key === "ArrowRight" || c.key === "ArrowUp" ? (c.preventDefault(), f(u.value + o)) : (c.key === "ArrowLeft" || c.key === "ArrowDown") && (c.preventDefault(), f(u.value - o));
  }, S = (c) => {
    c.preventDefault();
    const v = (b) => {
      const m = a.value;
      if (!m) return;
      const w = m.getBoundingClientRect(), z = s === "horizontal" ? (b.clientX - w.left) / w.width : 1 - (b.clientY - w.top) / w.height;
      f(t + z * (r - t));
    }, k = () => {
      window.removeEventListener("mousemove", v), window.removeEventListener("mouseup", k);
    };
    window.addEventListener("mousemove", v), window.addEventListener("mouseup", k);
  };
  return Q(
    () => l.modelValue,
    (c) => {
      c != null && (u.value = c);
    }
  ), {
    value: u,
    percent: n,
    trackRef: a,
    thumbRef: e,
    onTrackClick: y,
    onThumbKeyDown: C,
    onThumbMouseDown: S
  };
}
const lr = D({
  base: "relative",
  variants: {
    orientation: {
      horizontal: "h-12 w-full",
      vertical: "h-64 w-12"
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: ""
    }
  },
  defaultVariants: {
    orientation: "horizontal",
    disabled: !1
  }
}), ar = D({
  base: "rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer",
  variants: {
    orientation: {
      horizontal: "h-2 w-full absolute top-1/2 -translate-y-1/2",
      vertical: "w-2 h-full absolute left-1/2 -translate-x-1/2"
    },
    disabled: {
      true: "cursor-not-allowed",
      false: ""
    }
  },
  defaultVariants: {
    orientation: "horizontal",
    disabled: !1
  }
}), rr = D({
  base: "absolute rounded-full bg-blue-500 dark:bg-blue-600",
  variants: {
    orientation: {
      horizontal: "h-full top-0 left-0",
      vertical: "w-full bottom-0 left-0"
    },
    disabled: {
      true: "bg-gray-400 dark:bg-gray-500",
      false: ""
    }
  },
  defaultVariants: {
    orientation: "horizontal",
    disabled: !1
  }
}), or = D({
  base: "absolute bg-white dark:bg-gray-200 rounded-full shadow-md border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800",
  variants: {
    orientation: {
      horizontal: "h-4 w-4 top-1/2 -translate-x-1/2 -translate-y-1/2",
      vertical: "h-4 w-4 left-1/2 -translate-x-1/2 translate-y-1/2"
    },
    disabled: {
      true: "cursor-not-allowed",
      false: "cursor-grab active:cursor-grabbing"
    }
  },
  defaultVariants: {
    orientation: "horizontal",
    disabled: !1
  }
}), sr = D({
  base: "absolute bg-gray-800 dark:bg-gray-700 text-white px-2 py-1 text-xs rounded pointer-events-none transform -translate-x-1/2 whitespace-nowrap",
  variants: {
    orientation: {
      horizontal: "bottom-full mb-2",
      vertical: "left-full ml-2 -translate-y-1/2"
    },
    visible: {
      true: "opacity-100",
      false: "opacity-0"
    }
  },
  defaultVariants: {
    orientation: "horizontal",
    visible: !1
  }
}), nr = D({
  base: "absolute",
  variants: {
    orientation: {
      horizontal: "top-1/2 -translate-y-1/2 h-2",
      vertical: "left-1/2 -translate-x-1/2 w-2"
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
}), ir = D({
  base: "absolute bg-gray-400 dark:bg-gray-500 rounded-full",
  variants: {
    orientation: {
      horizontal: "h-2 w-1 -translate-x-1/2",
      vertical: "w-2 h-1 -translate-y-1/2"
    },
    active: {
      true: "bg-blue-500 dark:bg-blue-600",
      false: ""
    }
  },
  defaultVariants: {
    orientation: "horizontal",
    active: !1
  }
}), ur = D({
  base: "absolute text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap",
  variants: {
    orientation: {
      horizontal: "top-full mt-1 -translate-x-1/2",
      vertical: "left-full ml-2 -translate-y-1/2"
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
}), dr = ["aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-orientation", "aria-disabled", "tabindex"], cr = /* @__PURE__ */ q({
  name: "Slider",
  __name: "index",
  props: {
    modelValue: {},
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 1 },
    orientation: { default: "horizontal" },
    disabled: { type: Boolean, default: !1 },
    showTooltip: { type: Boolean, default: !1 },
    showMarks: { type: Boolean, default: !1 },
    marks: {},
    formatTooltip: {},
    unstyled: { type: Boolean, default: !1 },
    pt: { default: void 0 }
  },
  emits: ["update:modelValue", "change"],
  setup(l, { emit: a }) {
    const e = l, t = a, {
      value: r,
      percent: o,
      trackRef: s,
      thumbRef: u,
      onTrackClick: n,
      onThumbKeyDown: f,
      onThumbMouseDown: y
    } = tr({
      min: e.min,
      max: e.max,
      step: e.step,
      orientation: e.orientation,
      modelValue: e.modelValue,
      onChange: (M) => {
        t("update:modelValue", M), t("change", M);
      }
    }), C = d(() => e.unstyled ? e.pt?.container || "" : lr({
      orientation: e.orientation,
      disabled: e.disabled,
      class: e.pt?.container
    })), S = d(() => e.unstyled ? e.pt?.track || "" : ar({
      orientation: e.orientation,
      disabled: e.disabled,
      class: e.pt?.track
    })), c = d(() => e.unstyled ? e.pt?.fill || "" : rr({
      orientation: e.orientation,
      disabled: e.disabled,
      class: e.pt?.fill
    })), v = d(() => e.unstyled ? e.pt?.thumb || "" : or({
      orientation: e.orientation,
      disabled: e.disabled,
      class: e.pt?.thumb
    })), k = d(() => e.orientation === "horizontal" ? { width: `${o.value}%` } : { height: `${o.value}%` }), b = d(() => e.orientation === "horizontal" ? { left: `${o.value}%` } : { bottom: `${o.value}%` }), m = R(!1), w = d(() => e.unstyled ? e.pt?.tooltip || "" : sr({
      orientation: e.orientation,
      visible: e.showTooltip && m.value,
      class: e.pt?.tooltip
    })), z = () => {
      e.disabled || (m.value = !0);
    }, $ = () => {
      m.value = !1;
    }, T = d(() => e.formatTooltip ? e.formatTooltip(r.value) : r.value.toString()), B = d(() => e.unstyled ? e.pt?.marks || "" : nr({
      orientation: e.orientation,
      class: e.pt?.marks
    })), A = d(() => {
      if (!e.showMarks) return [];
      if (e.marks)
        return Object.entries(e.marks).map(([W, G]) => ({
          value: Number(W),
          label: G,
          percent: (Number(W) - e.min) / (e.max - e.min) * 100,
          active: r.value >= Number(W)
        }));
      const M = Math.floor((e.max - e.min) / e.step), _ = M > 10 ? Math.floor(M / 5) : 1, I = [];
      for (let W = 0; W <= M; W += _) {
        const G = e.min + W * e.step;
        I.push({
          value: G,
          label: G.toString(),
          percent: W / M * 100,
          active: r.value >= G
        });
      }
      return I;
    }), V = (M) => e.unstyled ? e.pt?.mark || "" : ir({
      orientation: e.orientation,
      active: M,
      class: e.pt?.mark
    }), E = (M) => e.orientation === "horizontal" ? { left: `${M}%` } : { bottom: `${M}%` }, P = () => e.unstyled ? e.pt?.markLabel || "" : ur({
      orientation: e.orientation,
      class: e.pt?.markLabel
    }), j = (M) => {
      e.disabled || n(M);
    }, O = (M) => {
      e.disabled || f(M);
    }, H = (M) => {
      if (e.disabled) return;
      y(M), z();
      const _ = () => {
        $(), window.removeEventListener("mouseup", _);
      };
      window.addEventListener("mouseup", _);
    };
    return (M, _) => (p(), g("div", {
      class: i(C.value)
    }, [
      x("div", {
        class: i(S.value),
        ref_key: "trackRef",
        ref: s,
        onClick: j
      }, [
        x("div", {
          class: i(c.value),
          style: le(k.value)
        }, null, 6),
        M.showMarks ? (p(), g("div", {
          key: 0,
          class: i(B.value)
        }, [
          (p(!0), g(ee, null, oe(A.value, (I) => (p(), g("div", {
            key: I.value,
            class: i(V(I.active)),
            style: le(E(I.percent))
          }, [
            x("span", {
              class: i(P)
            }, N(I.label), 1)
          ], 6))), 128))
        ], 2)) : L("", !0)
      ], 2),
      x("div", {
        class: i(v.value),
        style: le(b.value),
        ref_key: "thumbRef",
        ref: u,
        onMousedown: H,
        onKeydown: O,
        onMouseover: z,
        onMouseleave: $,
        role: "slider",
        "aria-valuemin": M.min,
        "aria-valuemax": M.max,
        "aria-valuenow": h(r),
        "aria-orientation": M.orientation,
        "aria-disabled": M.disabled,
        tabindex: M.disabled ? -1 : 0
      }, [
        M.showTooltip ? (p(), g("div", {
          key: 0,
          class: i(w.value)
        }, N(T.value), 3)) : L("", !0)
      ], 46, dr)
    ], 2));
  }
}), fr = J(cr), pr = D({
  base: "inline-block",
  variants: {
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: ""
    }
  },
  defaultVariants: {
    disabled: !1
  }
}), gr = D({
  base: "absolute z-10 rounded-md shadow-lg border p-4 max-w-sm box-border",
  variants: {
    placement: {
      top: "mb-2",
      right: "ml-2",
      bottom: "mt-2",
      left: "mr-2"
    },
    visible: {
      true: "opacity-100 scale-100",
      false: "opacity-0 scale-95 pointer-events-none"
    },
    color: {
      default: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",
      primary: "bg-blue-600 border-blue-700 text-white",
      success: "bg-green-600 border-green-700 text-white",
      warning: "bg-yellow-600 border-yellow-700 text-white",
      danger: "bg-red-600 border-red-700 text-white"
    }
  },
  defaultVariants: {
    placement: "bottom",
    visible: !1,
    color: "default"
  }
}), vr = D({
  base: "absolute w-3 h-3 transform rotate-45",
  variants: {
    placement: {
      top: "bottom-[-6.5px] left-1/2 -translate-x-1/2",
      right: "left-[-6.5px] top-1/2 -translate-y-1/2",
      bottom: "top-[-6.5px] left-1/2 -translate-x-1/2",
      left: "right-[-6.5px] top-1/2 -translate-y-1/2"
    },
    color: {
      default: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",
      primary: "bg-blue-600 border-blue-700",
      success: "bg-green-600 border-green-700",
      warning: "bg-yellow-600 border-yellow-700",
      danger: "bg-red-600 border-red-700"
    }
  },
  defaultVariants: {
    placement: "bottom",
    color: "default"
  }
}), br = D({
  base: "text-sm font-medium mb-2 pb-2 border-b",
  variants: {
    color: {
      default: "text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-700",
      primary: "text-white border-blue-700",
      success: "text-white border-green-700",
      warning: "text-white border-yellow-700",
      danger: "text-white border-red-700"
    }
  },
  defaultVariants: {
    color: "default"
  }
}), mr = D({
  base: "text-sm",
  variants: {
    color: {
      default: "text-gray-700 dark:text-gray-300",
      primary: "text-white",
      success: "text-white",
      warning: "text-white",
      danger: "text-white"
    }
  },
  defaultVariants: {
    color: "default"
  }
}), yr = { class: "popover-inner" }, hr = /* @__PURE__ */ q({
  name: "Popover",
  __name: "index",
  props: {
    modelValue: { type: Boolean, default: !1 },
    placement: { default: "bottom" },
    trigger: { default: "click" },
    title: {},
    width: {},
    zIndex: { default: 1e3 },
    disabled: { type: Boolean },
    showArrow: { type: Boolean, default: !0 },
    offset: { default: 8 },
    transition: { default: "none" },
    teleport: { type: [Boolean, String], default: !0 },
    openDelay: { default: 0 },
    closeDelay: { default: 0 },
    followCursor: { type: Boolean, default: !1 },
    unbound: { type: Boolean, default: !1 },
    content: {},
    color: { default: "default" },
    unstyled: { type: Boolean, default: !1 },
    pt: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(l, { expose: a, emit: e }) {
    const t = l, r = e, o = R(!1), s = R(null), u = R(null), n = `popover-${Math.random().toString(36).slice(2, 9)}`;
    let f = null, y = null;
    const C = R(0), S = R(0), c = async () => {
      y && clearTimeout(y), !t.disabled && (f = setTimeout(() => {
        o.value = !0, r("update:modelValue", !0), ve(m);
      }, t.openDelay));
    }, v = () => {
      f && clearTimeout(f), !t.disabled && (y = setTimeout(() => {
        o.value = !1, r("update:modelValue", !1);
      }, t.closeDelay));
    }, k = () => {
      o.value ? v() : c();
    }, b = (K) => {
      K ? c() : v();
    }, m = () => {
      const K = u.value;
      if (!K || !o.value) return;
      const se = C.value, ne = S.value;
      if (t.followCursor || t.unbound) {
        let Ce = 0, Ve = 0;
        switch (t.placement) {
          case "top":
            Ce = ne - K.offsetHeight - t.offset, Ve = se - K.offsetWidth / 2;
            break;
          case "right":
            Ce = ne - K.offsetHeight / 2, Ve = se + t.offset;
            break;
          case "bottom":
            Ce = ne + t.offset, Ve = se - K.offsetWidth / 2;
            break;
          case "left":
            Ce = ne - K.offsetHeight / 2, Ve = se - K.offsetWidth - t.offset;
            break;
        }
        w(K, Ce, Ve);
        return;
      }
      const re = s.value;
      if (!re) return;
      const fe = re.getBoundingClientRect(), ue = K.getBoundingClientRect();
      let $e = 0, ye = 0;
      const Ke = fe.left + fe.width / 2, Be = fe.top + fe.height / 2;
      switch (t.placement) {
        case "top":
          $e = fe.top - ue.height - t.offset, ye = Ke - ue.width / 2;
          break;
        case "right":
          $e = Be - ue.height / 2, ye = fe.right + t.offset;
          break;
        case "bottom":
          $e = fe.bottom + t.offset, ye = Ke - ue.width / 2;
          break;
        case "left":
          $e = Be - ue.height / 2, ye = fe.left - ue.width - t.offset;
          break;
      }
      w(K, $e, ye);
    }, w = (K, se, ne) => {
      const re = K.querySelector(
        '[class*="popoverArrow"]'
      );
      if (ne = Math.max(8, ne), ne = Math.min(ne, window.innerWidth - K.offsetWidth - 8), se = Math.max(8, se), se = Math.min(se, window.innerHeight - K.offsetHeight - 8), K.style.position = "fixed", K.style.top = `${se}px`, K.style.left = `${ne}px`, K.style.zIndex = t.zIndex?.toString() || "1000", K.style.transition = "none", re && t.showArrow && !t.followCursor && !t.unbound) {
        const fe = s.value;
        if (!fe) return;
        const ue = fe.getBoundingClientRect(), $e = K.getBoundingClientRect(), ye = getComputedStyle(K).borderColor;
        switch (t.placement) {
          case "top":
          case "bottom": {
            const Be = ue.left + ue.width / 2 - ne, Ce = 12, Ve = $e.width - 12, Ye = Math.max(
              Ce,
              Math.min(Ve, Be)
            );
            re.style.left = `${Ye}px`, re.style.transform = "rotate(45deg)", t.placement === "top" ? (re.style.borderRight = `1px solid ${ye}`, re.style.borderBottom = `1px solid ${ye}`, re.style.borderLeft = "none", re.style.borderTop = "none") : (re.style.borderLeft = `1px solid ${ye}`, re.style.borderTop = `1px solid ${ye}`, re.style.borderRight = "none", re.style.borderBottom = "none");
            break;
          }
          case "left":
          case "right": {
            const Be = ue.top + ue.height / 2 - se, Ce = 12, Ve = $e.height - 12, Ye = Math.max(
              Ce,
              Math.min(Ve, Be)
            );
            re.style.top = `${Ye}px`, re.style.transform = "rotate(45deg)", t.placement === "left" ? (re.style.borderRight = `1px solid ${ye}`, re.style.borderBottom = `1px solid ${ye}`, re.style.borderLeft = "none", re.style.borderTop = "none") : (re.style.borderLeft = `1px solid ${ye}`, re.style.borderTop = `1px solid ${ye}`, re.style.borderRight = "none", re.style.borderBottom = "none");
            break;
          }
        }
      }
    }, z = (K) => {
      C.value = K.clientX, S.value = K.clientY, (t.followCursor || t.unbound) && o.value && m();
    }, $ = () => {
      o.value && m();
    }, T = () => {
      o.value && m();
    }, B = () => {
      t.disabled || (t.trigger === "click" || t.trigger === "manual") && k();
    }, A = (K) => {
      t.disabled || (C.value = K.clientX, S.value = K.clientY, t.trigger === "hover" && c());
    }, V = () => {
      t.disabled || t.trigger === "hover" && v();
    }, E = () => {
      t.disabled || c();
    }, P = () => {
      t.disabled || v();
    }, j = (K) => {
      o.value && !u.value?.contains(K.target) && !s.value?.contains(K.target) && v();
    }, O = d(() => t.unstyled ? t.pt?.container || "relative inline-block" : t.pt?.container ? `relative inline-block ${t.pt.container}` : "relative inline-block"), H = d(() => t.unstyled ? t.pt?.trigger || "inline-block" : pr({
      disabled: t.disabled,
      class: t.pt?.trigger
    })), M = d(() => t.unstyled ? t.pt?.content || "" : gr({
      placement: t.placement,
      visible: o.value,
      color: t.color,
      class: t.pt?.content
    })), _ = d(() => t.unstyled ? t.pt?.arrow || "" : vr({
      placement: t.placement,
      color: t.color,
      class: t.pt?.arrow
    })), I = d(() => t.unstyled ? t.pt?.title || "" : br({
      color: t.color,
      class: t.pt?.title
    })), W = d(() => t.unstyled ? t.pt?.body || "" : mr({
      color: t.color,
      class: t.pt?.body
    })), G = d(() => {
      const K = {
        zIndex: t.zIndex?.toString() || "1000",
        transition: "none",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        maxWidth: "280px",
        overflow: "hidden"
      };
      return t.width && (K.width = typeof t.width == "number" ? `${t.width}px` : t.width), K;
    }), Y = d(() => t.teleport === !1 ? null : typeof t.teleport == "string" ? t.teleport : "body"), Z = () => {
      window.addEventListener("resize", $), window.addEventListener("scroll", T, !0), document.addEventListener("click", j), window.addEventListener("mousemove", z);
    }, ce = () => {
      window.removeEventListener("resize", $), window.removeEventListener("scroll", T, !0), document.removeEventListener("click", j), window.removeEventListener("mousemove", z);
    };
    return be(() => {
      Z(), t.modelValue && ve(() => {
        b(!0);
      });
    }), Pe(() => {
      ce(), f && clearTimeout(f), y && clearTimeout(y);
    }), Q(
      () => t.modelValue,
      (K) => {
        K !== o.value && b(K);
      }
    ), Q(o, (K) => {
      K && ve(m), r("update:modelValue", K);
    }), Q(
      () => [t.placement, t.offset, t.followCursor, t.unbound],
      () => {
        o.value && ve(m);
      }
    ), a({
      show: () => b(!0),
      hide: () => b(!1),
      toggle: k,
      updatePosition: m
    }), (K, se) => (p(), g("div", {
      class: i(O.value),
      onMousemove: z
    }, [
      K.unbound ? L("", !0) : (p(), g("div", {
        key: 0,
        ref_key: "triggerRef",
        ref: s,
        class: i(H.value),
        "aria-describedby": n,
        onClick: B,
        onMouseenter: A,
        onMouseleave: V,
        onFocus: E,
        onBlur: P
      }, [
        F(K.$slots, "trigger")
      ], 34)),
      (p(), Me(ft, {
        to: Y.value,
        disabled: !Y.value
      }, [
        o.value && !K.disabled ? (p(), g("div", {
          key: 0,
          ref_key: "popoverRef",
          ref: u,
          class: i(M.value),
          style: le(G.value),
          id: n,
          role: "tooltip",
          "aria-live": "polite"
        }, [
          K.showArrow && !K.followCursor && !K.unbound ? (p(), g("div", {
            key: 0,
            class: i(_.value)
          }, null, 2)) : L("", !0),
          x("div", yr, [
            K.title ? (p(), g("div", {
              key: 0,
              class: i(I.value)
            }, N(K.title), 3)) : L("", !0),
            x("div", {
              class: i(W.value)
            }, [
              F(K.$slots, "default", {}, () => [
                de(N(K.content), 1)
              ])
            ], 2)
          ])
        ], 6)) : L("", !0)
      ], 8, ["to", "disabled"]))
    ], 34));
  }
}), wr = J(hr);
function xr(l) {
  const a = R(!1), e = R(null), t = R(null);
  let r = null, o = null, s = 0, u = 0;
  const f = {
    ...{
      openDelay: 0,
      closeDelay: 100,
      placement: "top",
      offset: 8,
      followCursor: !1,
      unbound: !1
    },
    ...l
  }, y = (B) => {
    s = B.clientX, u = B.clientY, (f.followCursor || f.unbound) && a.value && v();
  }, C = () => {
    o && clearTimeout(o), r = setTimeout(() => {
      a.value = !0, requestAnimationFrame(v);
    }, f.openDelay);
  }, S = () => {
    r && clearTimeout(r), o = setTimeout(() => {
      a.value = !1;
    }, f.closeDelay);
  }, c = (B) => {
    B ? C() : S();
  }, v = () => {
    if (!a.value || !t.value || !f.unbound && !f.followCursor && !e.value) return;
    const B = t.value, A = B.getBoundingClientRect();
    let V = 0, E = 0;
    const P = f.offset;
    if (f.followCursor || f.unbound)
      switch (f.placement) {
        case "top":
          V = u - A.height - P, E = s - A.width / 2;
          break;
        case "right":
          V = u - A.height / 2, E = s + P;
          break;
        case "bottom":
          V = u + P, E = s - A.width / 2;
          break;
        case "left":
          V = u - A.height / 2, E = s - A.width - P;
          break;
      }
    else {
      const O = e.value.getBoundingClientRect();
      switch (f.placement) {
        case "top":
          V = O.top - A.height - P, E = O.left + O.width / 2 - A.width / 2;
          break;
        case "right":
          V = O.top + O.height / 2 - A.height / 2, E = O.right + P;
          break;
        case "bottom":
          V = O.bottom + P, E = O.left + O.width / 2 - A.width / 2;
          break;
        case "left":
          V = O.top + O.height / 2 - A.height / 2, E = O.left - A.width - P;
          break;
      }
    }
    E = Math.max(8, E), E = Math.min(E, window.innerWidth - A.width - 8), V = Math.max(8, V), V = Math.min(V, window.innerHeight - A.height - 8), B.style.position = "fixed", B.style.top = "0", B.style.left = "0", B.style.transform = `translate3d(${E}px, ${V}px, 0)`, B.style.zIndex = "9999";
  }, k = () => {
    a.value && v();
  }, b = () => {
    a.value && v();
  };
  Q(a, (B) => {
    B ? (window.addEventListener("resize", k), window.addEventListener("scroll", b, !0), (f.followCursor || f.unbound) && window.addEventListener("mousemove", y)) : (window.removeEventListener("resize", k), window.removeEventListener("scroll", b, !0), (f.followCursor || f.unbound) && window.removeEventListener("mousemove", y));
  }), Q(e, (B) => {
    B && a.value && !f.unbound && v();
  }), be(() => {
    (f.followCursor || f.unbound) && window.addEventListener("mousemove", y);
  });
  const m = (B) => {
    s = B.clientX, u = B.clientY, C();
  }, w = () => C(), z = () => S(), $ = () => S();
  Pe(() => {
    r && clearTimeout(r), o && clearTimeout(o), window.removeEventListener("resize", k), window.removeEventListener("scroll", b, !0), (f.followCursor || f.unbound) && window.removeEventListener("mousemove", y);
  });
  const T = `tooltip-${Math.random().toString(36).slice(2, 9)}`;
  return {
    isOpen: a,
    triggerRef: e,
    tooltipRef: t,
    tooltipId: T,
    updatePosition: v,
    onMouseEnter: m,
    onFocus: w,
    onMouseLeave: z,
    onBlur: $,
    setIsOpen: c
  };
}
const kr = D({
  base: "inline-block"
}), Cr = D({
  base: "px-2 py-1 text-xs font-medium rounded shadow-md pointer-events-none max-w-xs",
  variants: {
    color: {
      default: "bg-gray-800 text-white dark:bg-gray-700",
      primary: "bg-blue-600 text-white",
      success: "bg-green-600 text-white",
      warning: "bg-yellow-600 text-white",
      danger: "bg-red-600 text-white"
    },
    visible: {
      true: "block",
      false: "hidden"
    }
  },
  defaultVariants: {
    color: "default",
    visible: !0
  }
}), Sr = D({
  base: "absolute w-2 h-2 rotate-45",
  variants: {
    color: {
      default: "bg-gray-800 dark:bg-gray-700",
      primary: "bg-blue-600",
      success: "bg-green-600",
      warning: "bg-yellow-600",
      danger: "bg-red-600"
    },
    placement: {
      top: "bottom-[-4px] left-1/2 -translate-x-1/2",
      right: "left-[-4px] top-1/2 -translate-y-1/2",
      bottom: "top-[-4px] left-1/2 -translate-x-1/2",
      left: "right-[-4px] top-1/2 -translate-y-1/2"
    }
  },
  defaultVariants: {
    color: "default",
    placement: "top"
  }
}), zr = ["aria-describedby"], $r = ["id"], Br = /* @__PURE__ */ q({
  name: "Tooltip",
  __name: "index",
  props: {
    content: {},
    placement: { default: "top" },
    openDelay: { default: 0 },
    closeDelay: { default: 0 },
    disabled: { type: Boolean, default: !1 },
    trigger: { default: "hover" },
    maxWidth: {},
    color: { default: "default" },
    arrow: { type: Boolean, default: !0 },
    offset: { default: 8 },
    followCursor: { type: Boolean, default: !1 },
    unbound: { type: Boolean, default: !1 },
    modelValue: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: ["update:modelValue"],
  setup(l, { expose: a, emit: e }) {
    const t = l, r = e, o = R(0), s = R(0), u = R(!1), n = xr({
      openDelay: t.openDelay,
      closeDelay: t.closeDelay,
      placement: t.placement,
      offset: t.offset,
      followCursor: t.followCursor,
      unbound: t.unbound
    }), f = n.isOpen, y = n.triggerRef, C = n.tooltipRef, S = n.tooltipId, c = n.setIsOpen, v = () => {
      u.value = !0, c(!0), ve(() => {
        T();
      });
    }, k = () => {
      u.value = !1, c(!1);
    }, b = () => {
      u.value ? k() : v();
    }, m = d(() => t.unstyled ? t.pt?.container || "" : kr({
      class: t.pt?.container
    })), w = d(() => t.unstyled ? t.pt?.content || "" : Cr({
      color: t.color,
      visible: !0,
      class: t.pt?.content
    })), z = d(() => t.unstyled ? t.pt?.arrow || "" : Sr({
      color: t.color,
      placement: t.placement,
      class: t.pt?.arrow
    })), $ = d(() => {
      const I = {};
      return t.maxWidth && (I.maxWidth = typeof t.maxWidth == "number" ? `${t.maxWidth}px` : t.maxWidth), I;
    }), T = () => {
      const I = C.value;
      if (!I || !f.value) return;
      const W = o.value, G = s.value;
      if (t.followCursor || t.unbound) {
        let se = 0, ne = 0;
        switch (t.placement) {
          case "top":
            se = G - I.offsetHeight - t.offset, ne = W - I.offsetWidth / 2;
            break;
          case "right":
            se = G - I.offsetHeight / 2, ne = W + t.offset;
            break;
          case "bottom":
            se = G + t.offset, ne = W - I.offsetWidth / 2;
            break;
          case "left":
            se = G - I.offsetHeight / 2, ne = W - I.offsetWidth - t.offset;
            break;
        }
        B(I, se, ne);
        return;
      }
      const Y = y.value;
      if (!Y) return;
      const Z = Y.getBoundingClientRect();
      let ce = 0, K = 0;
      switch (t.placement) {
        case "top":
          ce = Z.top - I.offsetHeight - t.offset, K = Z.left + Z.width / 2 - I.offsetWidth / 2;
          break;
        case "right":
          ce = Z.top + Z.height / 2 - I.offsetHeight / 2, K = Z.right + t.offset;
          break;
        case "bottom":
          ce = Z.bottom + t.offset, K = Z.left + Z.width / 2 - I.offsetWidth / 2;
          break;
        case "left":
          ce = Z.top + Z.height / 2 - I.offsetHeight / 2, K = Z.left - I.offsetWidth - t.offset;
          break;
      }
      B(I, ce, K);
    }, B = (I, W, G) => {
      G = Math.max(8, G), G = Math.min(G, window.innerWidth - I.offsetWidth - 8), W = Math.max(8, W), W = Math.min(W, window.innerHeight - I.offsetHeight - 8), I.style.position = "fixed", I.style.top = `${W}px`, I.style.left = `${G}px`, I.style.zIndex = "9999", I.style.transition = "none";
    }, A = (I) => {
      o.value = I.clientX, s.value = I.clientY, f.value && (t.followCursor || t.unbound) && T();
    }, V = () => {
      f.value && T();
    }, E = () => {
      f.value && T();
    }, P = (I) => {
      t.disabled || (o.value = I.clientX, s.value = I.clientY, (t.trigger === "hover" || t.trigger === "both") && (c(!0), ve(T)));
    }, j = () => {
      t.disabled || (t.trigger === "focus" || t.trigger === "both") && (c(!0), ve(T));
    }, O = () => {
      t.disabled || (t.trigger === "hover" || t.trigger === "both") && c(!1);
    }, H = () => {
      t.disabled || (t.trigger === "focus" || t.trigger === "both") && c(!1);
    }, M = () => {
      window.addEventListener("mousemove", A), window.addEventListener("resize", V), window.addEventListener("scroll", E, !0);
    }, _ = () => {
      window.removeEventListener("mousemove", A), window.removeEventListener("resize", V), window.removeEventListener("scroll", E, !0);
    };
    return be(() => {
      M(), t.unbound && t.modelValue && (u.value = !0, c(!0), ve(T));
    }), Pe(() => {
      _();
    }), Q(f, (I) => {
      I && ve(T), t.unbound && (r("update:modelValue", I), u.value = I);
    }), Q(
      () => t.modelValue,
      (I) => {
        t.unbound && (u.value = I, c(I), I && ve(T));
      }
    ), a({
      show: v,
      hide: k,
      toggle: b,
      updatePosition: T
    }), (I, W) => (p(), g(ee, null, [
      I.unbound ? L("", !0) : (p(), g("span", {
        key: 0,
        ref_key: "triggerRef",
        ref: y,
        onMouseenter: P,
        onMouseleave: O,
        onFocus: j,
        onBlur: H,
        "aria-describedby": h(S),
        class: i(m.value),
        role: "button",
        tabindex: "0"
      }, [
        F(I.$slots, "default")
      ], 42, zr)),
      (p(), Me(ft, { to: "body" }, [
        h(f) && !I.disabled ? (p(), g("div", {
          key: 0,
          ref_key: "tooltipRef",
          ref: C,
          class: i(w.value),
          style: le($.value),
          id: h(S),
          role: "tooltip",
          "aria-live": "polite"
        }, [
          F(I.$slots, "content", {}, () => [
            de(N(I.content), 1)
          ]),
          I.arrow && !I.followCursor && !I.unbound ? (p(), g("div", {
            key: 0,
            class: i(z.value)
          }, null, 2)) : L("", !0)
        ], 14, $r)) : L("", !0)
      ]))
    ], 64));
  }
}), Vr = J(Br);
function Ir(l) {
  const a = R(l.modelValue ?? !1), e = () => {
    l.disabled || !l.selectable || (a.value = !a.value, l.onChange?.(a.value));
  }, t = (s) => {
    l.disabled || (s.stopPropagation(), l.onClose?.(s));
  }, r = d(() => a.value), o = d(() => l.closable || !!l.onClose);
  return {
    isSelected: r,
    isClosable: o,
    toggle: e,
    handleClose: t
  };
}
const Mr = D({
  base: "inline-flex items-center justify-center gap-1 text-sm transition-colors duration-200",
  variants: {
    variant: {
      solid: "border-transparent",
      bordered: "bg-transparent border",
      light: "border-transparent",
      flat: "border-transparent",
      faded: "border-transparent bg-opacity-20",
      shadow: "border-transparent shadow-md",
      dot: "pl-2"
      // 使用更小的左内边距，为dot预留空间
    },
    color: {
      default: "bg-zinc-100 text-zinc-800 border-zinc-200",
      primary: "bg-blue-100 text-blue-800 border-blue-300",
      secondary: "bg-purple-100 text-purple-800 border-purple-300",
      success: "bg-green-100 text-green-800 border-green-300",
      warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
      danger: "bg-red-100 text-red-800 border-red-300"
    },
    size: {
      sm: "text-xs py-0.5 px-2 h-5",
      md: "py-1 px-2.5 h-7",
      lg: "text-base py-1.5 px-3 h-9"
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full"
    },
    selected: {
      true: "",
      false: ""
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed pointer-events-none",
      false: ""
    }
  },
  compoundVariants: [
    // 默认/未选中状态
    {
      variant: "solid",
      color: "default",
      selected: !1,
      class: "bg-gray-100 text-gray-800"
    },
    {
      variant: "solid",
      color: "primary",
      selected: !1,
      class: "bg-blue-100 text-blue-800"
    },
    {
      variant: "solid",
      color: "secondary",
      selected: !1,
      class: "bg-purple-100 text-purple-800"
    },
    {
      variant: "solid",
      color: "success",
      selected: !1,
      class: "bg-green-100 text-green-800"
    },
    {
      variant: "solid",
      color: "warning",
      selected: !1,
      class: "bg-yellow-100 text-yellow-800"
    },
    {
      variant: "solid",
      color: "danger",
      selected: !1,
      class: "bg-red-100 text-red-800"
    },
    // 选中状态
    {
      variant: "solid",
      color: "default",
      selected: !0,
      class: "bg-gray-200 text-gray-900"
    },
    {
      variant: "solid",
      color: "primary",
      selected: !0,
      class: "bg-blue-200 text-blue-900"
    },
    {
      variant: "solid",
      color: "secondary",
      selected: !0,
      class: "bg-purple-200 text-purple-900"
    },
    {
      variant: "solid",
      color: "success",
      selected: !0,
      class: "bg-green-200 text-green-900"
    },
    {
      variant: "solid",
      color: "warning",
      selected: !0,
      class: "bg-yellow-200 text-yellow-900"
    },
    {
      variant: "solid",
      color: "danger",
      selected: !0,
      class: "bg-red-200 text-red-900"
    },
    // Bordered 变体
    {
      variant: "bordered",
      color: "default",
      class: "border-gray-300 text-gray-800"
    },
    {
      variant: "bordered",
      color: "primary",
      class: "border-blue-400 text-blue-600"
    },
    {
      variant: "bordered",
      color: "secondary",
      class: "border-purple-400 text-purple-600"
    },
    {
      variant: "bordered",
      color: "success",
      class: "border-green-400 text-green-600"
    },
    {
      variant: "bordered",
      color: "warning",
      class: "border-yellow-400 text-yellow-600"
    },
    {
      variant: "bordered",
      color: "danger",
      class: "border-red-400 text-red-600"
    },
    // Light 变体
    {
      variant: "light",
      color: "default",
      class: "bg-gray-50 text-gray-600"
    },
    {
      variant: "light",
      color: "primary",
      class: "bg-blue-50 text-blue-600"
    },
    {
      variant: "light",
      color: "secondary",
      class: "bg-purple-50 text-purple-600"
    },
    {
      variant: "light",
      color: "success",
      class: "bg-green-50 text-green-600"
    },
    {
      variant: "light",
      color: "warning",
      class: "bg-yellow-50 text-yellow-600"
    },
    {
      variant: "light",
      color: "danger",
      class: "bg-red-50 text-red-600"
    },
    // Flat 变体
    {
      variant: "flat",
      color: "default",
      class: "bg-gray-200 text-gray-800"
    },
    {
      variant: "flat",
      color: "primary",
      class: "bg-blue-200 text-blue-800"
    },
    {
      variant: "flat",
      color: "secondary",
      class: "bg-purple-200 text-purple-800"
    },
    {
      variant: "flat",
      color: "success",
      class: "bg-green-200 text-green-800"
    },
    {
      variant: "flat",
      color: "warning",
      class: "bg-yellow-200 text-yellow-800"
    },
    {
      variant: "flat",
      color: "danger",
      class: "bg-red-200 text-red-800"
    },
    // Faded 变体
    {
      variant: "faded",
      color: "default",
      class: "bg-gray-500 bg-opacity-20 text-gray-800"
    },
    {
      variant: "faded",
      color: "primary",
      class: "bg-blue-500 bg-opacity-20 text-blue-800"
    },
    {
      variant: "faded",
      color: "secondary",
      class: "bg-purple-500 bg-opacity-20 text-purple-800"
    },
    {
      variant: "faded",
      color: "success",
      class: "bg-green-500 bg-opacity-20 text-green-800"
    },
    {
      variant: "faded",
      color: "warning",
      class: "bg-yellow-500 bg-opacity-20 text-yellow-800"
    },
    {
      variant: "faded",
      color: "danger",
      class: "bg-red-500 bg-opacity-20 text-red-800"
    },
    // Shadow 变体
    {
      variant: "shadow",
      color: "default",
      class: "bg-white text-gray-800 shadow-gray-200/50"
    },
    {
      variant: "shadow",
      color: "primary",
      class: "bg-white text-blue-800 shadow-blue-200/50"
    },
    {
      variant: "shadow",
      color: "secondary",
      class: "bg-white text-purple-800 shadow-purple-200/50"
    },
    {
      variant: "shadow",
      color: "success",
      class: "bg-white text-green-800 shadow-green-200/50"
    },
    {
      variant: "shadow",
      color: "warning",
      class: "bg-white text-yellow-800 shadow-yellow-200/50"
    },
    {
      variant: "shadow",
      color: "danger",
      class: "bg-white text-red-800 shadow-red-200/50"
    }
  ],
  defaultVariants: {
    variant: "solid",
    color: "default",
    size: "md",
    radius: "full",
    selected: !1,
    disabled: !1
  }
}), Dr = ["aria-selected"], Tr = ["disabled"], Rr = /* @__PURE__ */ q({
  __name: "index",
  props: {
    modelValue: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    selectable: { type: Boolean, default: !1 },
    closable: { type: Boolean, default: !1 },
    onClose: {},
    variant: { default: "solid" },
    color: { default: "default" },
    size: { default: "md" },
    radius: { default: "full" },
    avatar: {},
    startContent: {},
    endContent: {},
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: ["update:modelValue", "close"],
  setup(l, { emit: a }) {
    const e = l, t = a, { isSelected: r, isClosable: o, toggle: s, handleClose: u } = Ir({
      modelValue: e.modelValue,
      selectable: e.selectable,
      disabled: e.disabled,
      closable: e.closable,
      onClose: (k) => t("close", k),
      onChange: (k) => t("update:modelValue", k)
    }), n = d(() => e.unstyled ? e.pt?.root || "" : Mr({
      variant: e.variant,
      color: e.color,
      size: e.size,
      radius: e.radius,
      selected: r.value,
      disabled: e.disabled,
      class: e.pt?.root
    })), f = d(() => e.unstyled ? e.pt?.dot || "" : [
      "mr-1.5 h-2 w-2 rounded-full",
      {
        default: "bg-zinc-500",
        primary: "bg-blue-500",
        secondary: "bg-purple-500",
        success: "bg-green-500",
        warning: "bg-yellow-500",
        danger: "bg-red-500"
      }[e.color || "default"],
      e.pt?.dot
    ]), y = d(() => e.unstyled ? e.pt?.avatar || "" : "flex shrink-0 mr-1.5"), C = d(() => e.unstyled ? e.pt?.startContent || "" : "flex shrink-0 mr-1.5"), S = d(() => e.unstyled ? e.pt?.content || "" : "truncate"), c = d(() => e.unstyled ? e.pt?.endContent || "" : "flex shrink-0 ml-1.5"), v = d(() => e.unstyled ? e.pt?.closeButton || "" : "ml-1.5 flex-shrink-0 flex items-center justify-center rounded-full hover:bg-black/5 focus:outline-none focus:bg-black/10 w-4 h-4");
    return (k, b) => (p(), g("span", {
      class: i(n.value),
      role: "option",
      "aria-selected": h(r),
      onClick: b[1] || (b[1] = //@ts-ignore
      (...m) => h(s) && h(s)(...m))
    }, [
      k.variant === "dot" ? (p(), g("span", {
        key: 0,
        class: i(f.value)
      }, null, 2)) : L("", !0),
      k.$slots.avatar ? F(k.$slots, "avatar", {
        key: 1,
        class: i(y.value)
      }) : k.avatar ? F(k.$slots, "avatarFallback", {
        key: 2,
        class: i(y.value)
      }, () => [
        x("span", {
          class: i(y.value)
        }, [
          (p(), Me(at(k.avatar)))
        ], 2)
      ]) : L("", !0),
      k.$slots.startContent ? F(k.$slots, "startContent", {
        key: 3,
        class: i(C.value)
      }) : k.startContent ? F(k.$slots, "startContentFallback", {
        key: 4,
        class: i(C.value)
      }, () => [
        x("span", {
          class: i(C.value)
        }, [
          (p(), Me(at(k.startContent)))
        ], 2)
      ]) : L("", !0),
      x("span", {
        class: i(S.value)
      }, [
        F(k.$slots, "default")
      ], 2),
      k.$slots.endContent ? F(k.$slots, "endContent", {
        key: 5,
        class: i(c.value)
      }) : k.endContent ? F(k.$slots, "endContentFallback", {
        key: 6,
        class: i(c.value)
      }, () => [
        x("span", {
          class: i(c.value)
        }, [
          (p(), Me(at(k.endContent)))
        ], 2)
      ]) : L("", !0),
      h(o) ? (p(), g("button", {
        key: 7,
        type: "button",
        class: i(v.value),
        onClick: b[0] || (b[0] = Ie(
          //@ts-ignore
          (...m) => h(u) && h(u)(...m),
          ["stop"]
        )),
        "aria-label": "关闭",
        disabled: k.disabled
      }, b[2] || (b[2] = [
        x("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "12",
          height: "12",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          class: "opacity-70 hover:opacity-100"
        }, [
          x("line", {
            x1: "18",
            y1: "6",
            x2: "6",
            y2: "18"
          }),
          x("line", {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "18"
          })
        ], -1)
      ]), 10, Tr)) : L("", !0)
    ], 10, Dr));
  }
}), Er = J(Rr), Lr = D({
  base: "w-full flex items-start gap-3 relative",
  variants: {
    variant: {
      info: "bg-blue-50 text-blue-800 border-blue-300 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-800",
      success: "bg-green-50 text-green-800 border-green-300 dark:bg-green-900/30 dark:text-green-200 dark:border-green-800",
      warning: "bg-amber-50 text-amber-800 border-amber-300 dark:bg-amber-900/30 dark:text-amber-200 dark:border-amber-800",
      error: "bg-red-50 text-red-800 border-red-300 dark:bg-red-900/30 dark:text-red-200 dark:border-red-800"
    },
    size: {
      xs: "text-xs p-2",
      sm: "text-sm p-3",
      md: "text-base p-4",
      lg: "text-base p-5"
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-xl"
    },
    border: {
      true: "border",
      false: "border-0"
    },
    shadow: {
      true: "shadow-sm",
      false: "shadow-none"
    }
  },
  defaultVariants: {
    variant: "info",
    size: "md",
    rounded: "md",
    border: !0,
    shadow: !1
  }
}), Ar = D({
  base: "shrink-0 flex items-center justify-center",
  variants: {
    variant: {
      info: "text-blue-500 dark:text-blue-400",
      success: "text-green-500 dark:text-green-400",
      warning: "text-amber-500 dark:text-amber-400",
      error: "text-red-500 dark:text-red-400"
    },
    size: {
      xs: "w-4 h-4",
      sm: "w-5 h-5",
      md: "w-6 h-6",
      lg: "w-7 h-7"
    }
  },
  defaultVariants: {
    variant: "info",
    size: "md"
  }
}), Or = D({
  base: "font-medium leading-tight",
  variants: {
    size: {
      xs: "text-xs mb-0.5",
      sm: "text-sm mb-1",
      md: "text-base mb-1",
      lg: "text-lg mb-1.5"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Pr = D({
  base: "leading-normal",
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-base"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), jr = D({
  base: "absolute right-2 top-2 p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors",
  variants: {
    size: {
      xs: "w-5 h-5",
      sm: "w-6 h-6",
      md: "w-7 h-7",
      lg: "w-8 h-8"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Wr = ["innerHTML"], Fr = { class: "flex-1" }, _r = /* @__PURE__ */ q({
  __name: "index",
  props: {
    variant: { default: "info" },
    size: { default: "md" },
    title: {},
    description: {},
    icon: { type: Boolean, default: !0 },
    closable: { type: Boolean, default: !1 },
    class: {},
    rounded: { default: "md" },
    border: { type: Boolean, default: !0 },
    shadow: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: ["close"],
  setup(l, { emit: a }) {
    const e = l, t = a, r = R(!0), o = () => {
      r.value = !1, t("close");
    }, s = d(
      () => e.unstyled ? e.pt?.root || "" : Lr({
        variant: e.variant,
        size: e.size,
        rounded: e.rounded,
        border: e.border,
        shadow: e.shadow,
        class: [e.class, e.pt?.root]
      })
    ), u = d(
      () => e.unstyled ? e.pt?.icon || "" : Ar({
        variant: e.variant,
        size: e.size,
        class: e.pt?.icon
      })
    ), n = d(
      () => e.unstyled ? e.pt?.title || "" : Or({
        size: e.size,
        class: e.pt?.title
      })
    ), f = d(
      () => e.unstyled ? e.pt?.description || "" : Pr({
        size: e.size,
        class: e.pt?.description
      })
    ), y = d(
      () => e.unstyled ? e.pt?.closeButton || "" : jr({
        size: e.size,
        class: e.pt?.closeButton
      })
    ), C = {
      info: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
  </svg>`,
      success: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
  </svg>`,
      warning: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
  </svg>`,
      error: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
  </svg>`
    };
    return (S, c) => r.value ? (p(), g("div", {
      key: 0,
      class: i(s.value)
    }, [
      S.icon ? (p(), g("div", {
        key: 0,
        class: i(u.value)
      }, [
        F(S.$slots, "icon", {}, () => [
          x("span", {
            innerHTML: C[S.variant]
          }, null, 8, Wr)
        ])
      ], 2)) : L("", !0),
      x("div", Fr, [
        S.$slots.title || S.title ? (p(), g("div", {
          key: 0,
          class: i(n.value)
        }, [
          F(S.$slots, "title", {}, () => [
            de(N(S.title), 1)
          ])
        ], 2)) : L("", !0),
        x("div", {
          class: i(f.value)
        }, [
          F(S.$slots, "default", {}, () => [
            de(N(S.description), 1)
          ])
        ], 2)
      ]),
      S.closable ? (p(), g("button", {
        key: 1,
        class: i(y.value),
        onClick: o,
        "aria-label": "关闭",
        type: "button"
      }, [
        F(S.$slots, "close-icon", {}, () => [
          c[0] || (c[0] = x("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            x("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }),
            x("line", {
              x1: "6",
              y1: "6",
              x2: "18",
              y2: "18"
            })
          ], -1))
        ])
      ], 2)) : L("", !0)
    ], 2)) : L("", !0);
  }
}), Hr = J(_r), Nr = D({
  base: "inline-flex items-center justify-center font-mono font-medium rounded-md border shadow-sm min-w-[20px] text-center transition-all",
  variants: {
    variant: {
      default: "bg-slate-900 dark:bg-zinc-900  text-white "
    },
    size: {
      xs: "text-xs px-1.5 py-0.5 rounded-sm",
      sm: "text-sm px-2 py-0.5 rounded-sm",
      md: "text-base px-2.5 py-1",
      lg: "text-base px-3 py-1.5"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
}), Gr = /* @__PURE__ */ q({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Kbd",
  __name: "index",
  props: {
    size: { default: "md" },
    variant: { default: "default" },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  setup(l) {
    const a = l, e = d(() => a.unstyled ? a.pt?.root || "" : Nr({
      size: a.size,
      variant: a.variant,
      class: a.pt?.root
    }));
    return (t, r) => (p(), g("kbd", {
      class: i(e.value)
    }, [
      F(t.$slots, "default")
    ], 2));
  }
}), Kr = J(Gr), Yr = D({
  base: "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  variants: {
    variant: {
      primary: "bg-blue-500 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
      secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus-visible:ring-gray-400",
      success: "bg-green-500 text-white hover:bg-green-700 focus-visible:ring-green-500",
      warning: "bg-yellow-500 text-white hover:bg-yellow-700 focus-visible:ring-yellow-500",
      info: "bg-zinc-500 text-white hover:bg-zinc-700 focus-visible:ring-zinc-500",
      danger: "bg-red-500 text-white hover:bg-red-700 focus-visible:ring-red-500",
      outline: "border border-gray-300 bg-transparent hover:bg-gray-50 focus-visible:ring-gray-400",
      ghost: "bg-transparent hover:bg-gray-100 focus-visible:ring-gray-400",
      link: "bg-transparent underline-offset-4 hover:underline focus-visible:ring-primary-500"
    },
    size: {
      xs: "text-xs px-2.5 py-1.5 rounded",
      sm: "text-sm px-3 py-2 rounded-md",
      md: "text-sm px-4 py-2 rounded-md",
      lg: "text-base px-5 py-2.5 rounded-md"
    },
    fullWidth: {
      true: "w-full"
    },
    rounded: {
      true: "rounded-full"
    },
    disabled: {
      true: "opacity-50 pointer-events-none cursor-not-allowed",
      false: "cursor-pointer"
    }
  },
  compoundVariants: [
    {
      size: "xs",
      rounded: !0,
      class: "rounded-full"
    },
    {
      size: ["sm", "md", "lg"],
      rounded: !0,
      class: "rounded-full"
    }
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
    disabled: !1
  }
}), Ur = {
  click: (l) => l instanceof MouseEvent
}, Xr = (l, a) => ({
  _ref: R(null),
  handleClick: (r) => {
    if (l.disabled || l.loading) {
      r.stopPropagation();
      return;
    } else
      a("click", r);
  }
}), qr = ["type", "disabled"], Zr = { key: 0 }, Jr = {
  key: 1,
  class: "inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
}, Qr = /* @__PURE__ */ q({
  __name: "index",
  props: {
    variant: { default: "primary" },
    size: { default: "md" },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    fullWidth: { type: Boolean, default: !1 },
    rounded: { type: Boolean, default: !1 },
    type: { default: "button" },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: Ur,
  setup(l, { expose: a, emit: e }) {
    const t = e, r = l, { _ref: o, handleClick: s } = Xr(r, t), u = d(() => r.unstyled ? r.pt?.root || "" : Yr({
      variant: r.variant,
      size: r.size,
      fullWidth: r.fullWidth,
      rounded: r.rounded,
      disabled: r.disabled || r.loading,
      class: r.pt?.root
    })), n = d(() => r.unstyled ? r.pt?.loader || "" : "mr-2"), f = d(() => r.unstyled && r.pt?.icon || "");
    return a({
      _ref: o,
      handleClick: s
    }), (y, C) => (p(), g("button", {
      class: i(u.value),
      type: y.type,
      disabled: y.disabled || y.loading,
      ref_key: "_ref",
      ref: o,
      onClick: C[0] || (C[0] = //@ts-ignore
      (...S) => h(s) && h(s)(...S))
    }, [
      y.loading ? (p(), g("span", {
        key: 0,
        class: i(n.value)
      }, [
        y.$slots.loading ? (p(), g("span", Zr, [
          F(y.$slots, "loading")
        ])) : (p(), g("span", Jr))
      ], 2)) : y.$slots.icon ? (p(), g("span", {
        key: 1,
        class: i(f.value)
      }, [
        F(y.$slots, "icon")
      ], 2)) : L("", !0),
      F(y.$slots, "default")
    ], 10, qr));
  }
}), eo = J(Qr), to = D({
  base: "bg-white",
  variants: {
    variant: {
      default: "",
      bordered: "border border-gray-200",
      elevated: "shadow-md"
    },
    padding: {
      none: "",
      sm: "p-3",
      md: "p-5",
      lg: "p-7"
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-xl"
    },
    hover: {
      true: "transition-all duration-200 hover:shadow-lg"
    }
  },
  defaultVariants: {
    variant: "default",
    padding: "md",
    radius: "md",
    hover: !1
  }
}), lo = /* @__PURE__ */ q({
  __name: "index",
  props: {
    variant: { default: "default" },
    padding: { default: "md" },
    radius: { default: "md" },
    hover: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  setup(l) {
    const a = l, e = d(() => a.unstyled ? a.pt?.root || "" : to({
      variant: a.variant,
      padding: a.padding,
      radius: a.radius,
      hover: a.hover,
      class: a.pt?.root
    })), t = d(() => a.unstyled ? a.pt?.header || "" : "mb-4"), r = d(() => a.unstyled && a.pt?.body || ""), o = d(() => a.unstyled ? a.pt?.footer || "" : "mt-4 flex justify-end");
    return (s, u) => (p(), g("div", {
      class: i(e.value)
    }, [
      s.$slots.header ? (p(), g("div", {
        key: 0,
        class: i(t.value)
      }, [
        F(s.$slots, "header")
      ], 2)) : L("", !0),
      x("div", {
        class: i(r.value)
      }, [
        F(s.$slots, "default")
      ], 2),
      s.$slots.footer ? (p(), g("div", {
        key: 1,
        class: i(o.value)
      }, [
        F(s.$slots, "footer")
      ], 2)) : L("", !0)
    ], 2));
  }
}), ao = J(lo), ro = D({
  base: "flex",
  variants: {
    orientation: {
      horizontal: "w-full",
      vertical: "h-full flex-col"
    },
    variant: {
      solid: "border-solid",
      dashed: "border-dashed",
      dotted: "border-dotted"
    },
    size: {
      thin: "border-[0.5px]",
      medium: "border-[1px]",
      thick: "border-[2px]"
    },
    labelPosition: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end"
    },
    withLabel: {
      true: "items-center",
      false: ""
    }
  },
  compoundVariants: [
    {
      orientation: "horizontal",
      class: "border-t border-gray-200 dark:border-gray-700"
    },
    {
      orientation: "vertical",
      class: "border-l border-gray-200 dark:border-gray-700"
    },
    {
      orientation: "horizontal",
      withLabel: !0,
      class: "border-0 items-center"
    },
    {
      orientation: "horizontal",
      withLabel: !0,
      labelPosition: "start",
      class: 'before:content-[""] before:border-t before:border-inherit before:mr-2 before:w-4'
    },
    {
      orientation: "horizontal",
      withLabel: !0,
      labelPosition: "center",
      class: 'before:content-[""] before:border-t before:border-inherit before:mr-2 before:w-full after:content-[""] after:border-t after:border-inherit after:ml-2 after:w-full'
    },
    {
      orientation: "horizontal",
      withLabel: !0,
      labelPosition: "end",
      class: 'after:content-[""] after:border-t after:border-inherit after:ml-2 after:w-4'
    }
  ],
  defaultVariants: {
    orientation: "horizontal",
    variant: "solid",
    size: "medium",
    labelPosition: "center",
    withLabel: !1
  }
}), oo = /* @__PURE__ */ q({
  __name: "index",
  props: {
    orientation: { default: "horizontal" },
    variant: { default: "solid" },
    size: { default: "medium" },
    color: { default: void 0 },
    label: { default: void 0 },
    labelPosition: { default: "center" },
    as: { default: void 0 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  setup(l) {
    const a = l, e = Ge(), t = d(() => !!a.label || !!e.default?.()), r = d(() => a.as ? a.as : a.orientation === "horizontal" && !t.value ? "hr" : "div"), o = d(() => a.unstyled ? a.pt?.root || "" : ro({
      orientation: a.orientation,
      variant: a.variant,
      size: a.size,
      labelPosition: a.labelPosition,
      withLabel: t.value,
      class: a.pt?.root
    })), s = d(() => a.unstyled ? a.pt?.label || "" : "shrink-0 whitespace-nowrap px-2 text-gray-500"), u = d(() => !a.unstyled && a.color ? {
      borderColor: a.color,
      "--tw-border-opacity": 1,
      "before:border-color": a.color,
      "after:border-color": a.color
    } : {});
    return (n, f) => (p(), Me(at(r.value), {
      class: i(o.value),
      style: le(u.value),
      role: "separator",
      "aria-orientation": n.orientation,
      "data-orientation": n.orientation
    }, {
      default: Ne(() => [
        t.value ? (p(), g("div", {
          key: 0,
          class: i(s.value)
        }, [
          F(n.$slots, "default", {}, () => [
            de(N(n.label), 1)
          ])
        ], 2)) : L("", !0)
      ]),
      _: 3
    }, 8, ["class", "style", "aria-orientation", "data-orientation"]));
  }
}), so = J(oo), no = D({
  base: "w-full rounded-md border border-gray-300 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    size: {
      sm: "text-xs p-1.5",
      md: "text-sm p-2",
      lg: "text-base p-2.5"
    },
    status: {
      error: "border-red-500 focus:border-red-500 focus:ring-red-500",
      warning: "border-yellow-500 focus:border-yellow-500 focus:ring-yellow-500",
      success: "border-green-500 focus:border-green-500 focus:ring-green-500"
    },
    resize: {
      none: "resize-none",
      both: "resize",
      horizontal: "resize-x",
      vertical: "resize-y"
    }
  },
  defaultVariants: {
    size: "md",
    resize: "vertical"
  }
}), io = ["value", "placeholder", "disabled", "readonly", "rows", "maxlength", "minlength"], uo = /* @__PURE__ */ q({
  __name: "index",
  props: {
    modelValue: { default: "" },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    rows: { default: 4 },
    maxLength: { default: void 0 },
    minLength: { default: void 0 },
    autosize: { type: Boolean, default: !1 },
    resize: { default: "vertical" },
    showCount: { type: Boolean, default: !1 },
    size: { default: "md" },
    status: { default: void 0 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: ["update:modelValue"],
  setup(l, { emit: a }) {
    const e = l, t = a, r = d(() => e.pt?.root || "w-full"), o = d(() => e.unstyled ? e.pt?.textarea || "" : no({
      size: e.size,
      status: e.status,
      resize: e.resize,
      class: e.pt?.textarea
    })), s = d(() => e.unstyled ? e.pt?.counter || "" : e.pt?.counter || "mt-1 text-right text-sm text-gray-500"), u = (f) => {
      const y = f.target;
      t("update:modelValue", y.value), e.autosize && n(y);
    }, n = (f) => {
      f.style.height = "auto", f.style.height = `${f.scrollHeight}px`;
    };
    return be(() => {
      if (e.autosize) {
        const f = document.querySelector("textarea");
        f && n(f);
      }
    }), (f, y) => (p(), g("div", {
      class: i(r.value)
    }, [
      x("textarea", {
        class: i(o.value),
        value: f.modelValue,
        placeholder: f.placeholder,
        disabled: f.disabled,
        readonly: f.readonly,
        rows: f.rows,
        maxlength: f.maxLength,
        minlength: f.minLength,
        onInput: u
      }, null, 42, io),
      f.showCount && f.maxLength ? (p(), g("div", {
        key: 0,
        class: i(s.value)
      }, N(f.modelValue?.length || 0) + "/" + N(f.maxLength), 3)) : L("", !0)
    ], 2));
  }
}), co = J(uo), dt = D({
  slots: {
    root: "relative inline-flex items-center",
    checkbox: "relative h-5 w-5 appearance-none rounded border transition-all",
    icon: "absolute inset-0 flex items-center justify-center text-white",
    label: "ml-2 text-gray-700 dark:text-gray-300"
  },
  variants: {
    checked: {
      true: {}
    },
    size: {
      small: {
        root: "gap-1.5",
        checkbox: "h-4 w-4",
        label: "text-sm"
      },
      default: {
        root: "gap-2",
        checkbox: "h-5 w-5",
        label: "text-base"
      },
      large: {
        root: "gap-2.5",
        checkbox: "h-6 w-6",
        label: "text-lg"
      }
    },
    color: {
      blue: {},
      green: {},
      red: {},
      yellow: {},
      purple: {}
    },
    disabled: {
      true: {
        root: "cursor-not-allowed opacity-50",
        checkbox: "border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-700",
        label: "text-gray-500 dark:text-gray-400"
      },
      false: {
        root: "cursor-pointer",
        checkbox: "border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700"
      }
    }
  },
  compoundVariants: [
    {
      checked: !0,
      color: "blue",
      class: {
        checkbox: "border-blue-600 bg-blue-600 dark:border-blue-500 dark:bg-blue-500"
      }
    },
    {
      checked: !0,
      color: "green",
      class: {
        checkbox: "border-green-600 bg-green-600 dark:border-green-500 dark:bg-green-500"
      }
    },
    {
      checked: !0,
      color: "red",
      class: {
        checkbox: "border-red-600 bg-red-600 dark:border-red-500 dark:bg-red-500"
      }
    },
    {
      checked: !0,
      color: "yellow",
      class: {
        checkbox: "border-yellow-600 bg-yellow-600 dark:border-yellow-500 dark:bg-yellow-500"
      }
    },
    {
      checked: !0,
      color: "purple",
      class: {
        checkbox: "border-purple-600 bg-purple-600 dark:border-purple-500 dark:bg-purple-500"
      }
    },
    {
      checked: !1,
      disabled: !1,
      class: {
        checkbox: "hover:border-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20 dark:hover:border-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-500/20"
      }
    }
  ],
  defaultVariants: {
    checked: !1,
    size: "default",
    color: "blue",
    disabled: !1
  }
}), fo = ["checked", "disabled"], po = /* @__PURE__ */ q({
  name: "Checkbox",
  __name: "index",
  props: {
    modelValue: { type: [Boolean, String, Number, Array], default: !1 },
    value: { type: [String, Number, Boolean] },
    disabled: { type: Boolean, default: !1 },
    size: { default: "default" },
    color: { default: "blue" },
    label: {},
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: ["update:modelValue", "change"],
  setup(l, { emit: a }) {
    const e = l, t = a, r = Te("checkbox-group", null), o = d(() => {
      if (r) {
        const k = e.value;
        return r.modelValue.value.includes(
          k
        );
      }
      return Array.isArray(e.modelValue) ? e.modelValue.includes(e.value) : !!e.modelValue;
    }), s = d(() => r?.disabled.value || !1 || e.disabled), u = d(() => r?.size.value || e.size || "default"), n = d(() => r?.color.value || e.color || "blue"), f = () => {
      if (!s.value)
        if (r) {
          const k = e.value, b = [...r.modelValue.value], m = b.indexOf(k);
          if (m === -1) {
            if (r.max.value && b.length >= r.max.value)
              return;
            b.push(k);
          } else {
            if (r.min.value && b.length <= r.min.value)
              return;
            b.splice(m, 1);
          }
          r.changeEvent(b);
        } else if (Array.isArray(e.modelValue)) {
          const k = e.value, b = [...e.modelValue], m = b.indexOf(k);
          m === -1 ? b.push(k) : b.splice(m, 1), t("update:modelValue", b), t("change", b);
        } else {
          const k = !e.modelValue;
          t("update:modelValue", k), t("change", k);
        }
    }, y = (k) => {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), f());
    }, C = d(() => e.unstyled ? e.pt?.root || "" : dt({
      checked: o.value,
      disabled: s.value,
      size: u.value,
      color: n.value
    }).root({ class: e.pt?.root })), S = d(() => e.unstyled ? e.pt?.checkbox || "" : dt({
      checked: o.value,
      disabled: s.value,
      size: u.value,
      color: n.value
    }).checkbox({ class: e.pt?.checkbox })), c = d(() => e.unstyled ? e.pt?.icon || "" : dt({
      checked: o.value,
      disabled: s.value,
      size: u.value,
      color: n.value
    }).icon({ class: e.pt?.icon })), v = d(() => e.unstyled ? e.pt?.label || "" : dt({
      checked: o.value,
      disabled: s.value,
      size: u.value,
      color: n.value
    }).label({ class: e.pt?.label }));
    return (k, b) => (p(), g("label", {
      class: i(C.value),
      onClick: Ie(f, ["prevent"]),
      onKeydown: y,
      tabindex: "0"
    }, [
      x("input", {
        type: "checkbox",
        class: "sr-only",
        checked: o.value,
        disabled: s.value
      }, null, 8, fo),
      x("div", {
        class: i(S.value)
      }, [
        o.value ? (p(), g("span", {
          key: 0,
          class: i(c.value)
        }, b[0] || (b[0] = [
          x("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "3",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "size-3/4"
          }, [
            x("polyline", { points: "20 6 9 17 4 12" })
          ], -1)
        ]), 2)) : L("", !0)
      ], 2),
      e.label ? (p(), g("span", {
        key: 0,
        class: i(v.value)
      }, N(e.label), 3)) : F(k.$slots, "default", { key: 1 })
    ], 34));
  }
}), go = /* @__PURE__ */ q({
  __name: "CheckboxGroup",
  props: {
    modelValue: { default: () => [] },
    disabled: { type: Boolean, default: !1 },
    size: { default: "default" },
    color: { default: "blue" },
    direction: { default: "horizontal" },
    min: {},
    max: {}
  },
  emits: ["update:modelValue", "change"],
  setup(l, { emit: a }) {
    const e = l, t = a, r = (o) => {
      t("update:modelValue", o), t("change", o);
    };
    return Re("checkbox-group", {
      modelValue: Se(e, "modelValue"),
      disabled: Se(e, "disabled"),
      size: Se(e, "size"),
      color: Se(e, "color"),
      min: Se(e, "min"),
      max: Se(e, "max"),
      changeEvent: r
    }), (o, s) => (p(), g("div", {
      class: i(["flex flex-wrap", [o.direction === "vertical" ? "flex-col gap-2" : "flex-row gap-4"]]),
      role: "group",
      "aria-label": "checkbox-group"
    }, [
      F(o.$slots, "default")
    ], 2));
  }
}), vo = J(po), bo = J(go), Fe = D({
  slots: {
    root: "relative inline-flex w-full",
    wrapper: "relative flex w-full rounded-md border border-gray-300 bg-white shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 dark:border-gray-600 dark:bg-gray-800",
    input: "block w-full border-0 bg-transparent px-3 py-2 outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white dark:placeholder:text-gray-400",
    prefix: "flex items-center pl-3 text-gray-500 dark:text-gray-400",
    suffix: "flex items-center pr-3 text-gray-500 dark:text-gray-400",
    clear: "flex cursor-pointer items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",
    count: "absolute right-2 -bottom-5 text-xs text-gray-500 dark:text-gray-400"
  },
  variants: {
    size: {
      small: {
        wrapper: "h-8 text-sm",
        input: "text-sm",
        prefix: "text-sm",
        suffix: "text-sm"
      },
      default: {
        wrapper: "h-10",
        input: "text-base"
      },
      large: {
        wrapper: "h-12 text-lg",
        input: "text-lg",
        prefix: "text-lg",
        suffix: "text-lg"
      }
    },
    status: {
      error: {
        wrapper: "!border-red-500 !ring-red-500/30 focus-within:!ring-red-500/30"
      },
      warning: {
        wrapper: "!border-yellow-500 !ring-yellow-500/30 focus-within:!ring-yellow-500/30"
      },
      success: {
        wrapper: "!border-green-500 !ring-green-500/30 focus-within:!ring-green-500/30"
      }
    },
    disabled: {
      true: {
        wrapper: "bg-gray-100 dark:bg-gray-700",
        input: "cursor-not-allowed"
      }
    }
  },
  defaultVariants: {
    size: "default"
  }
});
function mo(l) {
  const a = R(l.modelValue?.toString() || ""), e = R(null), t = (u) => {
    if (!(l.disabled || l.readonly)) {
      if (l.type === "number" && u !== "") {
        const n = parseFloat(u);
        a.value = isNaN(n) ? "" : u;
      } else
        a.value = u;
      l.maxlength && u.length > l.maxlength && (a.value = u.slice(0, l.maxlength)), l.onChange?.(a.value);
    }
  };
  return Q(
    () => l.modelValue,
    (u) => {
      u != null ? a.value = u.toString() : a.value = "";
    }
  ), {
    inputValue: a,
    inputRef: e,
    updateValue: t,
    clearInput: () => {
      l.disabled || l.readonly || (a.value = "", l.onChange?.(""), e.value?.focus());
    },
    focus: () => {
      e.value?.focus();
    },
    blur: () => {
      e.value?.blur();
    }
  };
}
const yo = ["type", "value", "placeholder", "disabled", "readonly", "maxlength", "autofocus"], ho = /* @__PURE__ */ q({
  name: "VersaInput",
  __name: "index",
  props: {
    modelValue: { default: "" },
    placeholder: {},
    type: { default: "text" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    size: { default: "default" },
    prefixIcon: {},
    suffixIcon: {},
    clearable: { type: Boolean, default: !1 },
    maxlength: {},
    showCount: { type: Boolean, default: !1 },
    autofocus: { type: Boolean, default: !1 },
    status: {},
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: ["update:modelValue", "focus", "blur", "clear"],
  setup(l, { expose: a, emit: e }) {
    const t = l, r = e, { inputValue: o, inputRef: s, updateValue: u, clearInput: n, focus: f, blur: y } = mo(
      {
        modelValue: t.modelValue,
        type: t.type,
        disabled: t.disabled,
        readonly: t.readonly,
        maxlength: t.maxlength,
        onChange: (w) => r("update:modelValue", w)
      }
    ), C = d(() => t.unstyled ? t.pt?.root || "" : Fe({
      size: t.size,
      status: t.status,
      disabled: t.disabled
    }).root({ class: t.pt?.root })), S = d(() => t.unstyled ? t.pt?.wrapper || "" : Fe({
      size: t.size,
      status: t.status,
      disabled: t.disabled
    }).wrapper({ class: t.pt?.wrapper })), c = d(() => t.unstyled ? t.pt?.input || "" : Fe({
      size: t.size,
      status: t.status,
      disabled: t.disabled
    }).input({ class: t.pt?.input })), v = d(() => t.unstyled ? t.pt?.prefix || "" : Fe({
      size: t.size,
      status: t.status,
      disabled: t.disabled
    }).prefix({ class: t.pt?.prefix })), k = d(() => t.unstyled ? t.pt?.suffix || "" : Fe({
      size: t.size,
      status: t.status,
      disabled: t.disabled
    }).suffix({ class: t.pt?.suffix })), b = d(() => t.unstyled ? t.pt?.clear || "" : Fe({
      size: t.size,
      status: t.status,
      disabled: t.disabled
    }).clear({ class: t.pt?.clear })), m = d(() => t.unstyled ? t.pt?.count || "" : Fe({
      size: t.size,
      status: t.status,
      disabled: t.disabled
    }).count({ class: t.pt?.count }));
    return a({
      focus: f,
      blur: y,
      inputRef: s
    }), (w, z) => (p(), g("div", {
      class: i(C.value)
    }, [
      x("div", {
        class: i([S.value, t.readonly && "cursor-default"])
      }, [
        t.prefixIcon ? (p(), g("div", {
          key: 0,
          class: i(v.value)
        }, [
          x("i", {
            class: i(t.prefixIcon)
          }, null, 2)
        ], 2)) : L("", !0),
        x("input", {
          type: t.type,
          class: i(c.value),
          value: h(o),
          placeholder: t.placeholder,
          disabled: t.disabled,
          readonly: t.readonly,
          maxlength: t.maxlength,
          autofocus: t.autofocus,
          ref_key: "inputRef",
          ref: s,
          onInput: z[0] || (z[0] = ($) => h(u)($.target.value)),
          onFocus: z[1] || (z[1] = ($) => w.$emit("focus", $)),
          onBlur: z[2] || (z[2] = ($) => w.$emit("blur", $))
        }, null, 42, yo),
        t.clearable && h(o) && !t.disabled && !t.readonly ? (p(), g("div", {
          key: 1,
          class: i([k.value, b.value]),
          onClick: z[3] || (z[3] = //@ts-ignore
          (...$) => h(n) && h(n)(...$))
        }, z[4] || (z[4] = [
          x("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            x("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }),
            x("line", {
              x1: "6",
              y1: "6",
              x2: "18",
              y2: "18"
            })
          ], -1)
        ]), 2)) : L("", !0),
        t.suffixIcon ? (p(), g("div", {
          key: 2,
          class: i(k.value)
        }, [
          x("i", {
            class: i(t.suffixIcon)
          }, null, 2)
        ], 2)) : L("", !0)
      ], 2),
      t.showCount && t.maxlength ? (p(), g("div", {
        key: 0,
        class: i(m.value)
      }, N(h(o).length) + "/" + N(t.maxlength), 3)) : L("", !0)
    ], 2));
  }
}), wo = J(ho);
function xo(l) {
  const a = R(!1), e = R(""), t = R(0), r = R(null), o = R(null), s = R(l.modelValue);
  Q(
    () => l.modelValue,
    (P) => {
      s.value = P;
    },
    { immediate: !0 }
  );
  const u = d(() => l.options?.map((P) => ({
    ...P,
    disabled: P.disabled || !1
  })) || []), n = d(() => {
    const P = {}, j = [];
    return u.value.forEach((O) => {
      O.group ? (P[O.group] || (P[O.group] = []), P[O.group].push(O)) : j.push(O);
    }), { groups: P, noGroup: j };
  }), f = d(() => l.multiple ? Array.isArray(s.value) ? s.value : [] : s.value !== void 0 ? [s.value] : []), y = d(() => {
    const P = [];
    if (!f.value.length) return P;
    for (const j of f.value) {
      const O = u.value.find(
        (H) => H.value === j || String(H.value) === String(j)
      );
      if (O)
        P.push(O);
      else if (j != null && (typeof j == "string" || typeof j == "number")) {
        const H = {
          label: String(j),
          value: j,
          disabled: !1
        };
        P.push(H);
      }
    }
    return P;
  }), C = d(() => !y.value || y.value.length === 0 ? "" : y.value[0]?.label || ""), S = d(() => {
    if (!l.filterable || !e.value)
      return u.value;
    const P = e.value.toLowerCase();
    return u.value.filter(
      (j) => j.label.toLowerCase().includes(P)
    );
  }), c = (P) => {
    if (l.disabled || l.readonly || P.disabled)
      return;
    let j;
    if (l.multiple) {
      const O = [...f.value], H = O.findIndex(
        (M) => String(M) === String(P.value)
      );
      H > -1 ? O.splice(H, 1) : O.push(P.value), j = O;
    } else
      j = P.value, m();
    s.value = j, l.onChange?.(j), l.filterable && ve(() => {
      e.value = "";
    });
  }, v = (P) => {
    if (P && P.stopPropagation(), l.disabled || l.readonly) return;
    const j = l.multiple ? [] : void 0;
    s.value = j, l.onChange?.(j);
  }, k = () => {
    l.disabled || l.readonly || (a.value = !a.value, l.onDropdownVisibleChange?.(a.value), a.value && ve(() => {
      w();
    }));
  }, b = () => {
    l.disabled || l.readonly || a.value || (a.value = !0, l.onDropdownVisibleChange?.(!0), ve(() => {
      w();
    }));
  }, m = () => {
    a.value && (a.value = !1, e.value = "", l.onDropdownVisibleChange?.(!1));
  }, w = () => {
    const P = S.value;
    for (let j = 0; j < P.length; j++)
      if (!P[j].disabled) {
        t.value = j;
        return;
      }
    t.value = -1;
  }, z = (P) => f.value.some((j) => String(j) === String(P)), $ = (P) => {
    if (l.disabled || l.readonly) return;
    const j = S.value;
    switch (P.key) {
      case "ArrowDown":
        if (P.preventDefault(), !a.value)
          b();
        else {
          let O = t.value, H = 0;
          do
            O = (O + 1) % j.length, H++;
          while (j[O]?.disabled && H < j.length);
          t.value = O;
        }
        break;
      case "ArrowUp":
        if (P.preventDefault(), !a.value)
          b();
        else {
          let O = t.value, H = 0;
          do
            O = O <= 0 ? j.length - 1 : O - 1, H++;
          while (j[O]?.disabled && H < j.length);
          t.value = O;
        }
        break;
      case "Enter":
      case " ":
        P.preventDefault(), a.value && t.value >= 0 && j[t.value] ? c(j[t.value]) : k();
        break;
      case "Escape":
        P.preventDefault(), m();
        break;
      case "Tab":
        m();
        break;
    }
  }, T = (P) => {
    e.value = P, l.onSearch?.(P), w();
  }, B = (P) => {
    a.value && r.value && o.value && !r.value.contains(P.target) && !o.value.contains(P.target) && m();
  }, A = () => {
    document.addEventListener("mousedown", B);
  }, V = () => {
    document.removeEventListener("mousedown", B);
  };
  Q(a, (P) => {
    P ? A() : V();
  });
  const E = () => {
    V();
  };
  return be(() => {
    a.value && A();
  }), Ee(() => {
    E();
  }), {
    isOpen: a,
    searchValue: e,
    activeIndex: t,
    triggerRef: r,
    dropdownRef: o,
    selectedValues: f,
    selectedOptions: y,
    getOptionLabel: C,
    filteredOptions: S,
    groupedOptions: n,
    selectOption: c,
    clearSelection: v,
    toggleDropdown: k,
    openDropdown: b,
    closeDropdown: m,
    isSelected: z,
    onKeyDown: $,
    onSearchInput: T,
    cleanup: E
  };
}
const ko = D({
  slots: {
    root: "relative w-full",
    trigger: [
      "flex items-center justify-between w-full px-3 py-2 border rounded-md",
      "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100",
      "transition-colors duration-200 ease-in-out",
      "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
      "hover:border-blue-400 dark:hover:border-blue-500"
    ],
    value: "flex-1 flex items-center flex-wrap gap-1 min-w-0",
    placeholder: "text-gray-400 dark:text-gray-500",
    dropdown: [
      "absolute z-50 w-full mt-1 py-1 overflow-auto",
      "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
      "rounded-md shadow-lg"
    ],
    option: [
      "flex items-center justify-between px-3 py-2 cursor-pointer",
      "text-gray-800 dark:text-gray-200",
      "hover:bg-gray-100 dark:hover:bg-gray-700",
      "transition-colors duration-200"
    ],
    optionSelected: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
    optionActive: "bg-gray-100 dark:bg-gray-700",
    optionDisabled: "opacity-50 cursor-not-allowed hover:bg-transparent dark:hover:bg-transparent",
    icon: "flex items-center text-gray-400",
    clearIcon: "flex items-center mr-1 text-gray-400 hover:text-gray-600",
    checkIcon: "w-4 h-4 text-blue-500",
    search: [
      "w-full px-3 py-2 border-b border-gray-200 dark:border-gray-700",
      "bg-transparent text-gray-800 dark:text-gray-200",
      "focus:outline-none"
    ],
    tag: [
      "inline-flex items-center px-2 py-1 mr-1 mb-1 text-sm",
      "bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300",
      "rounded-md"
    ],
    tagRemove: ["ml-1 text-blue-500 hover:text-blue-700", "focus:outline-none"],
    noMatch: "px-3 py-2 text-center text-gray-500"
  },
  variants: {
    size: {
      small: {
        trigger: "h-8 text-xs",
        option: "py-1 text-xs",
        tag: "text-xs py-0.5"
      },
      default: {
        trigger: "h-10 text-sm",
        option: "py-2 text-sm"
      },
      large: {
        trigger: "h-12",
        option: "py-2.5"
      }
    },
    status: {
      default: {},
      success: {
        trigger: "border-green-500 focus:ring-green-500"
      },
      warning: {
        trigger: "border-yellow-500 focus:ring-yellow-500"
      },
      error: {
        trigger: "border-red-500 focus:ring-red-500"
      }
    },
    disabled: {
      true: {
        root: "opacity-60",
        trigger: "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 cursor-not-allowed"
      }
    },
    multiple: {
      true: {
        value: "flex-wrap"
      }
    },
    open: {
      true: {
        trigger: "border-blue-500 ring-2 ring-blue-500 ring-opacity-50"
      }
    }
  },
  defaultVariants: {
    size: "default",
    status: "default",
    disabled: !1,
    multiple: !1,
    open: !1
  }
});
D({
  slots: {
    base: [
      "flex w-full items-center gap-2 p-2 data-[hover=true]:bg-default-100",
      "cursor-pointer rounded-md outline-none",
      "data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2",
      "data-[pressed=true]:opacity-70",
      "data-[selected=true]:bg-primary-500/20",
      "data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-disabled"
    ],
    wrapper: "flex w-full flex-col",
    label: "text-sm font-normal truncate",
    description: "text-xs text-foreground-400 truncate",
    selectedIcon: "text-primary"
  }
});
const Co = {
  key: 0,
  class: "text-red-500"
}, So = ["aria-expanded", "aria-disabled", "aria-readonly", "aria-required"], zo = {
  key: 0,
  class: "flex flex-wrap gap-1"
}, $o = { class: "truncate" }, Bo = ["onClick"], Vo = {
  key: 1,
  class: "truncate"
}, Io = { class: "flex items-center" }, Mo = ["aria-multiselectable"], Do = {
  key: 0,
  class: "sticky top-0"
}, To = ["value"], Ro = ["onClick", "aria-selected", "aria-disabled"], Eo = ["onClick", "aria-selected", "aria-disabled"], Lo = { class: "px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400" }, Ao = ["onClick", "aria-selected", "aria-disabled"], Oo = {
  key: 1,
  class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
}, Po = {
  key: 2,
  class: "mt-1 text-xs text-red-500"
}, jo = /* @__PURE__ */ q({
  name: "VersaSelect",
  __name: "index",
  props: {
    modelValue: {},
    options: { default: () => [] },
    placeholder: { default: "请选择" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    multiple: { type: Boolean, default: !1 },
    size: { default: "default" },
    status: {},
    clearable: { type: Boolean, default: !1 },
    filterable: { type: Boolean, default: !1 },
    noMatchText: { default: "无匹配数据" },
    maxDropdownHeight: { default: 250 },
    showLabel: { type: Boolean, default: !1 },
    label: {},
    required: { type: Boolean, default: !1 },
    helpText: {},
    errorText: {},
    renderOption: {},
    renderValue: {},
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: [
    "update:modelValue",
    "change",
    "focus",
    "blur",
    "clear",
    "search",
    "dropdown-visible-change",
    "option-select"
  ],
  setup(l, { expose: a, emit: e }) {
    const t = l, r = e, o = ko(), s = d(() => t.unstyled ? {
      root: t.pt?.root || "",
      trigger: t.pt?.trigger || "",
      value: t.pt?.value || "",
      placeholder: t.pt?.placeholder || "",
      dropdown: t.pt?.dropdown || "",
      option: t.pt?.option || "",
      optionSelected: t.pt?.optionSelected || "",
      optionActive: t.pt?.optionActive || "",
      optionDisabled: t.pt?.optionDisabled || "",
      icon: t.pt?.icon || "",
      clearIcon: t.pt?.clearIcon || "",
      checkIcon: t.pt?.checkIcon || "",
      search: t.pt?.search || "",
      tag: t.pt?.tag || "",
      tagRemove: t.pt?.tagRemove || "",
      noMatch: t.pt?.noMatch || "",
      label: t.pt?.label || ""
    } : {
      root: o.root({
        size: t.size,
        status: t.status,
        disabled: t.disabled,
        multiple: t.multiple,
        open: f.value,
        class: t.pt?.root
      }),
      trigger: o.trigger({
        size: t.size,
        status: t.status,
        disabled: t.disabled,
        multiple: t.multiple,
        open: f.value,
        class: t.pt?.trigger
      }),
      value: o.value({
        multiple: t.multiple,
        class: t.pt?.value
      }),
      placeholder: o.placeholder({ class: t.pt?.placeholder }),
      dropdown: o.dropdown({ class: t.pt?.dropdown }),
      option: o.option({ class: t.pt?.option }),
      optionSelected: o.optionSelected({ class: t.pt?.optionSelected }),
      optionActive: o.optionActive({ class: t.pt?.optionActive }),
      optionDisabled: o.optionDisabled({ class: t.pt?.optionDisabled }),
      icon: o.icon({ class: t.pt?.icon }),
      clearIcon: o.clearIcon({ class: t.pt?.clearIcon }),
      checkIcon: o.checkIcon({ class: t.pt?.checkIcon }),
      search: o.search({ class: t.pt?.search }),
      tag: o.tag({ class: t.pt?.tag }),
      tagRemove: o.tagRemove({ class: t.pt?.tagRemove }),
      noMatch: o.noMatch({ class: t.pt?.noMatch })
    }), u = `versa-select-dropdown-${Math.random().toString(36).substring(2, 9)}`, n = R(null), {
      isOpen: f,
      searchValue: y,
      activeIndex: C,
      triggerRef: S,
      dropdownRef: c,
      selectedValues: v,
      selectedOptions: k,
      getOptionLabel: b,
      filteredOptions: m,
      groupedOptions: w,
      selectOption: z,
      clearSelection: $,
      toggleDropdown: T,
      openDropdown: B,
      closeDropdown: A,
      isSelected: V,
      onKeyDown: E,
      onSearchInput: P,
      cleanup: j
    } = xo({
      modelValue: t.modelValue,
      options: t.options,
      multiple: t.multiple,
      filterable: t.filterable,
      disabled: t.disabled,
      readonly: t.readonly,
      onChange: (_) => {
        r("update:modelValue", _), r("change", _), (_ === void 0 || Array.isArray(_) && _.length === 0) && r("clear");
      },
      onSearch: (_) => {
        r("search", _);
      },
      onDropdownVisibleChange: (_) => {
        r("dropdown-visible-change", _), _ && t.filterable && setTimeout(() => {
          n.value?.focus();
        }, 0);
      }
    }), O = d(() => Object.keys(w.value.groups).length > 0), H = (_, I) => {
      let W = 0;
      if (_ === null)
        return I;
      W += w.value.noGroup.length;
      const G = Object.keys(w.value.groups);
      for (let Y = 0; Y < G.length; Y++) {
        const Z = G[Y];
        if (Z === _)
          return W + I;
        W += w.value.groups[Z].length;
      }
      return -1;
    }, M = (_) => {
      P(_.target.value);
    };
    return Ee(() => {
      j();
    }), a({
      open: B,
      close: A,
      clear: $
    }), (_, I) => (p(), g("div", {
      class: i(s.value.root)
    }, [
      t.showLabel && t.label ? (p(), g("label", {
        key: 0,
        class: i(
          t.pt?.label || "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        )
      }, [
        de(N(t.label) + " ", 1),
        t.required ? (p(), g("span", Co, "*")) : L("", !0)
      ], 2)) : L("", !0),
      x("div", {
        ref_key: "triggerRef",
        ref: S,
        class: i(s.value.trigger),
        onClick: I[1] || (I[1] = (W) => !t.disabled && !t.readonly && h(T)()),
        onKeydown: I[2] || (I[2] = //@ts-ignore
        (...W) => h(E) && h(E)(...W)),
        tabindex: "0",
        role: "combobox",
        "aria-expanded": h(f),
        "aria-disabled": t.disabled,
        "aria-readonly": t.readonly,
        "aria-required": t.required,
        "aria-haspopup": !0,
        "aria-controls": u
      }, [
        x("div", {
          class: i(s.value.value)
        }, [
          t.multiple && h(k).length ? (p(), g("div", zo, [
            (p(!0), g(ee, null, oe(h(k), (W) => (p(), g("div", {
              key: W.value,
              class: i(s.value.tag)
            }, [
              x("span", $o, N(W.label), 1),
              !t.disabled && !t.readonly ? (p(), g("button", {
                key: 0,
                type: "button",
                class: i(s.value.tagRemove),
                onClick: Ie((G) => h(z)(W), ["stop"]),
                "aria-label": "移除"
              }, I[4] || (I[4] = [
                x("svg", {
                  viewBox: "0 0 24 24",
                  width: "12",
                  height: "12",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  fill: "none"
                }, [
                  x("line", {
                    x1: "18",
                    y1: "6",
                    x2: "6",
                    y2: "18"
                  }),
                  x("line", {
                    x1: "6",
                    y1: "6",
                    x2: "18",
                    y2: "18"
                  })
                ], -1)
              ]), 10, Bo)) : L("", !0)
            ], 2))), 128))
          ])) : h(k).length ? (p(), g("div", Vo, N(h(b)), 1)) : (p(), g("div", {
            key: 2,
            class: i(s.value.placeholder)
          }, N(t.placeholder), 3))
        ], 2),
        x("div", Io, [
          t.clearable && h(v).length && !t.disabled && !t.readonly ? (p(), g("button", {
            key: 0,
            type: "button",
            class: i(s.value.clearIcon),
            onClick: I[0] || (I[0] = Ie(
              //@ts-ignore
              (...W) => h($) && h($)(...W),
              ["stop"]
            )),
            "aria-label": "清除选择"
          }, I[5] || (I[5] = [
            x("svg", {
              viewBox: "0 0 24 24",
              width: "14",
              height: "14",
              stroke: "currentColor",
              "stroke-width": "2",
              fill: "none"
            }, [
              x("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
              }),
              x("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
              })
            ], -1)
          ]), 2)) : L("", !0),
          x("div", {
            class: i(s.value.icon)
          }, [
            (p(), g("svg", {
              viewBox: "0 0 24 24",
              width: "16",
              height: "16",
              stroke: "currentColor",
              "stroke-width": "2",
              fill: "none",
              style: le({ transform: h(f) ? "rotate(180deg)" : void 0 }),
              class: "transition-transform duration-200"
            }, I[6] || (I[6] = [
              x("polyline", { points: "6 9 12 15 18 9" }, null, -1)
            ]), 4))
          ], 2)
        ])
      ], 42, So),
      De(rt, { name: "versa-select-dropdown" }, {
        default: Ne(() => [
          h(f) ? (p(), g("div", {
            key: 0,
            ref_key: "dropdownRef",
            ref: c,
            id: u,
            class: i(s.value.dropdown),
            style: le({ maxHeight: `${t.maxDropdownHeight}px` }),
            role: "listbox",
            "aria-multiselectable": t.multiple
          }, [
            t.filterable ? (p(), g("div", Do, [
              x("input", {
                ref_key: "searchInputRef",
                ref: n,
                class: i(s.value.search),
                type: "text",
                value: h(y),
                onInput: M,
                placeholder: "搜索...",
                onKeydown: I[3] || (I[3] = Ie(() => {
                }, ["stop"]))
              }, null, 42, To)
            ])) : L("", !0),
            x("div", null, [
              O.value ? (p(), g(ee, { key: 1 }, [
                h(w).noGroup.length ? (p(!0), g(ee, { key: 0 }, oe(h(w).noGroup, (W, G) => (p(), g("div", {
                  key: W.value,
                  class: i([
                    s.value.option,
                    {
                      [s.value.optionSelected]: h(V)(W.value),
                      [s.value.optionActive]: h(C) === G,
                      [s.value.optionDisabled]: W.disabled
                    }
                  ]),
                  onClick: Ie((Y) => !W.disabled && h(z)(W), ["stop"]),
                  role: "option",
                  "aria-selected": h(V)(W.value),
                  "aria-disabled": W.disabled
                }, [
                  de(N(W.label) + " ", 1),
                  h(V)(W.value) ? (p(), g("svg", {
                    key: 0,
                    class: i(s.value.checkIcon),
                    viewBox: "0 0 24 24",
                    width: "16",
                    height: "16",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    fill: "none"
                  }, I[8] || (I[8] = [
                    x("polyline", { points: "20 6 9 17 4 12" }, null, -1)
                  ]), 2)) : L("", !0)
                ], 10, Eo))), 128)) : L("", !0),
                (p(!0), g(ee, null, oe(h(w).groups, (W, G) => (p(), g(ee, { key: G }, [
                  x("div", Lo, N(G), 1),
                  (p(!0), g(ee, null, oe(W, (Y, Z) => (p(), g("div", {
                    key: Y.value,
                    class: i([
                      s.value.option,
                      "pl-5",
                      {
                        [s.value.optionSelected]: h(V)(Y.value),
                        [s.value.optionActive]: H(G, Z) === h(C),
                        [s.value.optionDisabled]: Y.disabled
                      }
                    ]),
                    onClick: Ie((ce) => !Y.disabled && h(z)(Y), ["stop"]),
                    role: "option",
                    "aria-selected": h(V)(Y.value),
                    "aria-disabled": Y.disabled
                  }, [
                    de(N(Y.label) + " ", 1),
                    h(V)(Y.value) ? (p(), g("svg", {
                      key: 0,
                      class: i(s.value.checkIcon),
                      viewBox: "0 0 24 24",
                      width: "16",
                      height: "16",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      fill: "none"
                    }, I[9] || (I[9] = [
                      x("polyline", { points: "20 6 9 17 4 12" }, null, -1)
                    ]), 2)) : L("", !0)
                  ], 10, Ao))), 128))
                ], 64))), 128))
              ], 64)) : (p(), g(ee, { key: 0 }, [
                h(m).length ? (p(!0), g(ee, { key: 0 }, oe(h(m), (W, G) => (p(), g("div", {
                  key: W.value,
                  class: i([
                    s.value.option,
                    {
                      [s.value.optionSelected]: h(V)(W.value),
                      [s.value.optionActive]: h(C) === G,
                      [s.value.optionDisabled]: W.disabled
                    }
                  ]),
                  onClick: Ie((Y) => !W.disabled && h(z)(W), ["stop"]),
                  role: "option",
                  "aria-selected": h(V)(W.value),
                  "aria-disabled": W.disabled
                }, [
                  de(N(W.label) + " ", 1),
                  h(V)(W.value) ? (p(), g("svg", {
                    key: 0,
                    class: i(s.value.checkIcon),
                    viewBox: "0 0 24 24",
                    width: "16",
                    height: "16",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    fill: "none"
                  }, I[7] || (I[7] = [
                    x("polyline", { points: "20 6 9 17 4 12" }, null, -1)
                  ]), 2)) : L("", !0)
                ], 10, Ro))), 128)) : (p(), g("div", {
                  key: 1,
                  class: i(s.value.noMatch)
                }, N(t.noMatchText), 3))
              ], 64))
            ])
          ], 14, Mo)) : L("", !0)
        ]),
        _: 1
      }),
      t.helpText && !t.errorText ? (p(), g("div", Oo, N(t.helpText), 1)) : L("", !0),
      t.errorText ? (p(), g("div", Po, N(t.errorText), 1)) : L("", !0)
    ], 2));
  }
}), Wo = J(jo);
function Fo(l) {
  const a = R(l.modelValue ?? 0), e = R(-1), t = R(!1);
  return Q(
    () => l.modelValue,
    (n) => {
      n !== void 0 && (a.value = n);
    }
  ), {
    currentValue: a,
    hoverValue: e,
    isHovering: t,
    getStarValue: (n) => {
      const f = t.value ? e.value : a.value;
      return l.allowHalf ? f >= n + 1 ? 1 : f >= n + 0.5 ? 0.5 : 0 : f >= n + 1 ? 1 : 0;
    },
    handleClick: (n, f) => {
      if (l.disabled || l.readonly) return;
      let y;
      l.allowHalf && f ? y = n + 0.5 : y = n + 1, y === a.value && (y = 0), a.value = y, l.onChange?.(y);
    },
    handleMouseMove: (n, f) => {
      if (!(l.disabled || l.readonly)) {
        if (t.value = !0, l.allowHalf) {
          const C = n.currentTarget.getBoundingClientRect(), S = n.clientX - C.left < C.width / 2;
          e.value = S ? f + 0.5 : f + 1;
        } else
          e.value = f + 1;
        l.onHoverChange?.(e.value);
      }
    },
    handleMouseLeave: () => {
      l.disabled || l.readonly || (t.value = !1, e.value = -1, l.onHoverChange?.(a.value));
    }
  };
}
const _o = D({
  base: "inline-flex items-center",
  variants: {
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: ""
    }
  },
  defaultVariants: {
    disabled: !1
  }
}), Ho = D({
  base: "relative inline-flex items-center justify-center cursor-pointer transition-all duration-200",
  variants: {
    size: {
      small: "text-lg",
      default: "text-2xl",
      large: "text-3xl"
    },
    disabled: {
      true: "cursor-not-allowed",
      false: ""
    },
    readonly: {
      true: "cursor-default",
      false: ""
    }
  },
  defaultVariants: {
    size: "default",
    disabled: !1,
    readonly: !1
  }
}), No = D({
  base: "ml-2 text-gray-700 dark:text-gray-300",
  variants: {
    size: {
      small: "text-sm",
      default: "text-base",
      large: "text-lg"
    }
  },
  defaultVariants: {
    size: "default"
  }
}), Go = D({
  base: "absolute inset-0 overflow-hidden",
  variants: {
    color: {
      yellow: "text-yellow-400 dark:text-yellow-500",
      blue: "text-blue-500 dark:text-blue-400",
      green: "text-green-500 dark:text-green-400",
      red: "text-red-500 dark:text-red-400",
      purple: "text-purple-500 dark:text-purple-400"
    }
  },
  defaultVariants: {
    color: "yellow"
  }
}), Ko = D({
  base: "text-gray-300 dark:text-gray-600"
}), Yo = D({
  base: "absolute inset-0 overflow-hidden",
  variants: {
    color: {
      yellow: "text-yellow-400 dark:text-yellow-500",
      blue: "text-blue-500 dark:text-blue-400",
      green: "text-green-500 dark:text-green-400",
      red: "text-red-500 dark:text-red-400",
      purple: "text-purple-500 dark:text-purple-400"
    }
  },
  defaultVariants: {
    color: "yellow"
  }
}), Uo = {
  "update:modelValue": (l) => typeof l == "number",
  change: (l) => typeof l == "number",
  "hover-change": (l) => typeof l == "number"
}, Xo = ["onClick", "onMousemove", "aria-checked", "aria-disabled", "aria-readonly", "tabindex"], qo = /* @__PURE__ */ q({
  name: "Rate",
  __name: "index",
  props: {
    modelValue: { default: 0 },
    max: { default: 5 },
    allowHalf: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    color: { default: "yellow" },
    voidColor: {},
    size: { default: "default" },
    character: {},
    showScore: { type: Boolean, default: !1 },
    formatTooltip: {},
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: Uo,
  setup(l, { emit: a }) {
    const e = l, t = a, {
      currentValue: r,
      getStarValue: o,
      handleClick: s,
      handleMouseMove: u,
      handleMouseLeave: n
    } = Fo({
      modelValue: e.modelValue,
      max: e.max,
      allowHalf: e.allowHalf,
      readonly: e.readonly,
      disabled: e.disabled,
      onChange: (b) => {
        t("update:modelValue", b), t("change", b);
      },
      onHoverChange: (b) => {
        t("hover-change", b);
      }
    }), f = d(() => e.unstyled ? e.pt?.container || "" : _o({
      disabled: e.disabled,
      class: e.pt?.container
    })), y = d(() => e.unstyled ? e.pt?.item || "" : Ho({
      size: e.size,
      disabled: e.disabled,
      readonly: e.readonly,
      class: e.pt?.item
    })), C = d(() => e.unstyled ? e.pt?.score || "" : No({
      size: e.size,
      class: e.pt?.score
    })), S = d(() => e.unstyled ? e.pt?.fullStar || "absolute inset-0 overflow-hidden w-full" : Go({
      color: e.color,
      class: e.pt?.fullStar
    }) + " w-full"), c = d(() => e.unstyled ? e.pt?.halfStar || "absolute inset-0 overflow-hidden w-1/2" : Yo({
      color: e.color,
      class: e.pt?.halfStar
    }) + " w-1/2"), v = d(() => e.unstyled ? e.pt?.voidStar || "" : Ko({
      class: e.pt?.voidStar
    })), k = (b) => e.formatTooltip ? e.formatTooltip(b) : b.toString();
    return (b, m) => (p(), g("div", {
      class: i(f.value),
      onMouseleave: m[0] || (m[0] = //@ts-ignore
      (...w) => h(n) && h(n)(...w)),
      role: "radiogroup",
      "aria-label": "评分"
    }, [
      (p(!0), g(ee, null, oe(b.max, (w) => (p(), g("div", {
        key: w,
        class: i(y.value),
        onClick: (z) => h(s)(w - 1, !1),
        onMousemove: (z) => h(u)(z, w - 1),
        role: "radio",
        "aria-checked": h(o)(w - 1) > 0,
        "aria-disabled": b.disabled,
        "aria-readonly": b.readonly,
        tabindex: b.disabled ? -1 : 0
      }, [
        x("span", {
          class: i(v.value)
        }, [
          F(b.$slots, "character", {}, () => [
            de(N(b.character || "★"), 1)
          ], !0)
        ], 2),
        h(o)(w - 1) === 1 ? (p(), g("span", {
          key: 0,
          class: i(S.value)
        }, [
          F(b.$slots, "character", {}, () => [
            de(N(b.character || "★"), 1)
          ], !0)
        ], 2)) : h(o)(w - 1) === 0.5 ? (p(), g("span", {
          key: 1,
          class: i(c.value)
        }, [
          F(b.$slots, "character", {}, () => [
            de(N(b.character || "★"), 1)
          ], !0)
        ], 2)) : L("", !0)
      ], 42, Xo))), 128)),
      b.showScore ? (p(), g("span", {
        key: 0,
        class: i(C.value)
      }, N(k(h(r))), 3)) : L("", !0)
    ], 34));
  }
}), Zo = /* @__PURE__ */ Ze(qo, [["__scopeId", "data-v-ae42a8b5"]]), Jo = J(Zo), Qo = (l, a) => {
  const e = R(l.modelValue || /* @__PURE__ */ new Date()), t = R(e.value.getMonth()), r = R(e.value.getFullYear()), o = d(() => {
    const C = l.locale || "default", S = l.firstDayOfWeek || 0, c = [];
    for (let v = 0; v < 7; v++) {
      const k = (v + S) % 7;
      c.push(
        new Intl.DateTimeFormat(C, { weekday: "short" }).format(
          new Date(2021, 0, k + 3)
          // 2021-01-03 is a Sunday
        )
      );
    }
    return c;
  }), s = d(() => {
    const C = r.value, S = t.value, c = new Date(C, S, 1).getDay(), v = new Date(C, S + 1, 0).getDate(), k = l.firstDayOfWeek || 0, b = [], m = new Date(C, S, 0).getDate(), w = (c - k + 7) % 7;
    for (let T = m - w + 1; T <= m; T++)
      b.push({
        date: new Date(C, S - 1, T),
        day: T,
        isCurrentMonth: !1,
        isToday: !1,
        isSelected: !1,
        isDisabled: !1
      });
    const z = /* @__PURE__ */ new Date();
    for (let T = 1; T <= v; T++) {
      const B = new Date(C, S, T), A = z.getDate() === T && z.getMonth() === S && z.getFullYear() === C, V = l.modelValue && l.modelValue.getDate() === T && l.modelValue.getMonth() === S && l.modelValue.getFullYear() === C, E = l.disabled || l.min && B < l.min || l.max && B > l.max;
      b.push({
        date: B,
        day: T,
        isCurrentMonth: !0,
        isToday: A,
        isSelected: V,
        isDisabled: E
      });
    }
    const $ = 42 - b.length;
    for (let T = 1; T <= $; T++)
      b.push({
        date: new Date(C, S + 1, T),
        day: T,
        isCurrentMonth: !1,
        isToday: !1,
        isSelected: !1,
        isDisabled: !1
      });
    return b;
  }), u = d(() => {
    const C = l.locale || "default";
    return new Intl.DateTimeFormat(C, { month: "long" }).format(
      new Date(r.value, t.value)
    );
  }), n = () => {
    t.value === 0 ? (t.value = 11, r.value--) : t.value--;
  }, f = () => {
    t.value === 11 ? (t.value = 0, r.value++) : t.value++;
  }, y = (C) => {
    l.disabled || l.readonly || l.min && C < l.min || l.max && C > l.max || (e.value = C, a("update:modelValue", C), a("change", C));
  };
  return Q(
    () => l.modelValue,
    (C) => {
      C && (e.value = C, t.value = C.getMonth(), r.value = C.getFullYear());
    }
  ), {
    currentDate: e,
    currentMonth: t,
    currentYear: r,
    weekdays: o,
    daysInMonth: s,
    monthName: u,
    prevMonth: n,
    nextMonth: f,
    selectDate: y
  };
}, es = D({
  base: "w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), ts = D({
  base: "flex items-center justify-between mb-4"
}), ls = D({
  base: "text-lg font-medium"
}), as = D({
  base: "flex items-center space-x-1"
}), rs = D({
  base: "p-1 rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
}), os = D({
  base: "grid grid-cols-7 mb-1"
}), ss = D({
  base: "text-center text-sm font-medium text-gray-500 py-2"
}), ns = D({
  base: "grid grid-cols-7 gap-1"
}), Le = D({
  base: "flex items-center justify-center h-9 w-9 rounded-md text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
  variants: {
    isToday: {
      true: "border border-blue-500"
    },
    isSelected: {
      true: "bg-blue-500 text-white hover:bg-blue-600"
    },
    isDisabled: {
      true: "text-gray-300 cursor-not-allowed"
    },
    isAdjacent: {
      true: "text-gray-400"
    }
  },
  compoundVariants: [
    {
      isSelected: !1,
      isDisabled: !1,
      isAdjacent: !1,
      class: "hover:bg-gray-100 cursor-pointer"
    }
  ]
}), is = {
  "update:modelValue": (l) => l === null || l instanceof Date,
  change: (l) => l === null || l instanceof Date
}, us = ["disabled"], ds = ["disabled"], cs = ["onClick", "disabled"], fs = /* @__PURE__ */ q({
  __name: "index",
  props: {
    modelValue: {},
    min: {},
    max: {},
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    firstDayOfWeek: { default: 0 },
    locale: {},
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: is,
  setup(l, { emit: a }) {
    const e = a, t = l, {
      currentYear: r,
      weekdays: o,
      daysInMonth: s,
      monthName: u,
      prevMonth: n,
      nextMonth: f,
      selectDate: y
    } = Qo(t, e), C = d(() => ({
      root: t.unstyled ? t.pt?.root || "" : es({ unstyled: t.unstyled, class: t.pt?.root }),
      header: t.unstyled ? t.pt?.header || "" : ts({ class: t.pt?.header }),
      title: t.unstyled ? t.pt?.title || "" : ls({ class: t.pt?.title }),
      navigation: t.unstyled ? t.pt?.navigation || "" : as({ class: t.pt?.navigation }),
      navButton: t.unstyled ? t.pt?.navButton || "" : rs({ class: t.pt?.navButton }),
      weekdays: t.unstyled ? t.pt?.weekdays || "" : os({ class: t.pt?.weekdays }),
      weekday: t.unstyled ? t.pt?.weekday || "" : ss({ class: t.pt?.weekday }),
      days: t.unstyled ? t.pt?.days || "" : ns({ class: t.pt?.days }),
      day: t.unstyled ? t.pt?.day || "" : Le({ class: t.pt?.day }),
      today: t.unstyled ? t.pt?.today || "" : Le({ isToday: !0, class: t.pt?.today }).split(" ").filter((S) => !Le().includes(S)).join(" "),
      selected: t.unstyled ? t.pt?.selected || "" : Le({ isSelected: !0, class: t.pt?.selected }).split(" ").filter((S) => !Le().includes(S)).join(" "),
      disabled: t.unstyled ? t.pt?.disabled || "" : Le({ isDisabled: !0, class: t.pt?.disabled }).split(" ").filter((S) => !Le().includes(S)).join(" "),
      adjacent: t.unstyled ? t.pt?.adjacent || "" : Le({ isAdjacent: !0, class: t.pt?.adjacent }).split(" ").filter((S) => !Le().includes(S)).join(" ")
    }));
    return (S, c) => (p(), g("div", {
      class: i(C.value.root)
    }, [
      x("div", {
        class: i(C.value.header)
      }, [
        x("div", {
          class: i(C.value.title)
        }, N(h(u)) + " " + N(h(r)), 3),
        x("div", {
          class: i(C.value.navigation)
        }, [
          x("button", {
            class: i(C.value.navButton),
            onClick: c[0] || (c[0] = //@ts-ignore
            (...v) => h(n) && h(n)(...v)),
            disabled: S.disabled || S.readonly
          }, c[2] || (c[2] = [
            x("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [
              x("path", { d: "m15 18-6-6 6-6" })
            ], -1)
          ]), 10, us),
          x("button", {
            class: i(C.value.navButton),
            onClick: c[1] || (c[1] = //@ts-ignore
            (...v) => h(f) && h(f)(...v)),
            disabled: S.disabled || S.readonly
          }, c[3] || (c[3] = [
            x("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [
              x("path", { d: "m9 18 6-6-6-6" })
            ], -1)
          ]), 10, ds)
        ], 2)
      ], 2),
      x("div", {
        class: i(C.value.weekdays)
      }, [
        (p(!0), g(ee, null, oe(h(o), (v, k) => (p(), g("div", {
          key: k,
          class: i(C.value.weekday)
        }, N(v), 3))), 128))
      ], 2),
      x("div", {
        class: i(C.value.days)
      }, [
        (p(!0), g(ee, null, oe(h(s), (v, k) => (p(), g("button", {
          key: k,
          class: i([
            C.value.day,
            v.isToday ? C.value.today : "",
            v.isSelected ? C.value.selected : "",
            v.isDisabled ? C.value.disabled : "",
            v.isCurrentMonth ? "" : C.value.adjacent
          ]),
          onClick: (b) => h(y)(v.date),
          disabled: v.isDisabled || S.disabled || S.readonly
        }, N(v.day), 11, cs))), 128))
      ], 2)
    ], 2));
  }
}), It = J(fs), ps = (l, a) => {
  const e = R(!1), t = R(null), r = R(null), o = R(null), s = R(null), u = R(null), n = R(null), f = d(() => {
    let M = 0, _ = 0, I = 0;
    if (l.modelValue) {
      if (l.modelValue instanceof Date)
        M = l.modelValue.getHours(), _ = l.modelValue.getMinutes(), I = l.modelValue.getSeconds();
      else if (typeof l.modelValue == "string") {
        const W = l.modelValue.split(":");
        M = parseInt(W[0]) || 0, _ = parseInt(W[1]) || 0, I = W[2] ? parseInt(W[2]) : 0;
      }
    }
    return { hours: M, minutes: _, seconds: I };
  }), y = R(f.value.hours), C = R(f.value.minutes), S = R(f.value.seconds), c = R(f.value.hours >= 12 ? "pm" : "am"), v = d(() => {
    const M = [], _ = l.hourStep || 1, I = l.format === "12h", W = I ? 1 : 0, G = I ? 12 : 23;
    for (let Y = W; Y <= G; Y += _)
      M.push(Y);
    return M;
  }), k = d(() => {
    const M = [], _ = l.minuteStep || 1;
    for (let I = 0; I <= 59; I += _)
      M.push(I);
    return M;
  }), b = d(() => {
    const M = [], _ = l.secondStep || 1;
    for (let I = 0; I <= 59; I += _)
      M.push(I);
    return M;
  }), m = d(() => {
    if (!l.modelValue) return "";
    try {
      if (l.modelValue instanceof Date) {
        const M = {
          hour: "numeric",
          minute: "2-digit"
        };
        return l.showSeconds && (M.second = "2-digit"), l.format === "12h" ? M.hour12 = !0 : M.hour12 = !1, new Intl.DateTimeFormat("default", M).format(
          l.modelValue
        );
      } else
        return l.modelValue;
    } catch (M) {
      return console.error("Time formatting error:", M), l.modelValue instanceof Date ? l.modelValue.toLocaleTimeString() : l.modelValue;
    }
  }), w = () => {
    l.disabled || l.readonly || (e.value = !e.value, e.value && (y.value = f.value.hours, C.value = f.value.minutes, S.value = f.value.seconds, c.value = f.value.hours >= 12 ? "pm" : "am", setTimeout(() => {
      $();
    }, 50)));
  }, z = () => {
    e.value = !1;
  }, $ = () => {
    const M = (_, I) => {
      if (!_) return;
      const G = _.querySelectorAll("div")[I];
      G && (_.scrollTop = G.offsetTop - _.offsetHeight / 2 + G.offsetHeight / 2);
    };
    if (l.format === "12h") {
      const _ = y.value > 12 ? y.value - 12 : y.value === 0 ? 12 : y.value;
      M(o.value, v.value.indexOf(_));
    } else
      M(o.value, v.value.indexOf(y.value));
    M(
      s.value,
      k.value.indexOf(C.value)
    ), l.showSeconds && u.value && M(
      u.value,
      b.value.indexOf(S.value)
    ), l.format === "12h" && n.value && M(n.value, c.value === "am" ? 0 : 1);
  }, T = () => {
    let M = y.value;
    l.format === "12h" && (c.value === "pm" && M < 12 ? M += 12 : c.value === "am" && M === 12 && (M = 0));
    let _;
    if (l.modelValue instanceof Date) {
      const I = new Date(l.modelValue);
      I.setHours(M), I.setMinutes(C.value), I.setSeconds(l.showSeconds ? S.value : 0), _ = I;
    } else {
      const I = M.toString().padStart(2, "0"), W = C.value.toString().padStart(2, "0");
      if (l.showSeconds) {
        const G = S.value.toString().padStart(2, "0");
        _ = `${I}:${W}:${G}`;
      } else
        _ = `${I}:${W}`;
    }
    a("update:modelValue", _), a("change", _);
  }, B = (M) => {
    y.value = M, T();
  }, A = (M) => {
    C.value = M, T();
  }, V = (M) => {
    S.value = M, T();
  }, E = (M) => {
    c.value = M, T();
  }, P = (M) => {
    M.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, j = (M) => {
    a("focus", M);
  }, O = (M) => {
    a("blur", M);
  }, H = (M) => {
    e.value && t.value && r.value && !t.value.contains(M.target) && !r.value.contains(M.target) && z();
  };
  return be(() => {
    document.addEventListener("mousedown", H);
  }), Ee(() => {
    document.removeEventListener("mousedown", H);
  }), Q(
    () => l.modelValue,
    (M) => {
      M ? (y.value = f.value.hours, C.value = f.value.minutes, S.value = f.value.seconds, c.value = f.value.hours >= 12 ? "pm" : "am") : z();
    }
  ), {
    isOpen: e,
    inputRef: t,
    dropdownRef: r,
    hourRef: o,
    minuteRef: s,
    secondRef: u,
    ampmRef: n,
    formattedValue: m,
    hourList: v,
    minuteList: k,
    secondList: b,
    selectedHour: y,
    selectedMinute: C,
    selectedSecond: S,
    selectedAmPm: c,
    toggleDropdown: w,
    closeDropdown: z,
    selectHour: B,
    selectMinute: A,
    selectSecond: V,
    selectAmPm: E,
    handleClear: P,
    handleFocus: j,
    handleBlur: O
  };
}, gs = D({
  base: "relative w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), vs = D({
  base: "relative flex items-center"
}), bs = D({
  base: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-900",
  variants: {
    error: {
      true: "border-red-500 focus:ring-red-500"
    }
  }
}), ms = D({
  base: "absolute right-3 cursor-pointer text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300"
}), ys = D({
  base: "absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800"
}), hs = D({
  base: "flex space-x-2 h-52 overflow-hidden"
}), ws = D({
  base: "flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700"
}), bt = D({
  base: "cursor-pointer rounded-md px-3 py-2 text-center text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700",
  variants: {
    selected: {
      true: "bg-blue-100 font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
    }
  }
}), xs = {
  "update:modelValue": (l) => l === null || typeof l == "string" || l instanceof Date,
  change: (l) => l === null || typeof l == "string" || l instanceof Date,
  focus: (l) => l instanceof FocusEvent,
  blur: (l) => l instanceof FocusEvent,
  clear: () => !0
}, ks = ["value", "placeholder", "disabled"], Cs = ["onClick"], Ss = ["onClick"], zs = ["onClick"], $s = /* @__PURE__ */ q({
  __name: "index",
  props: {
    modelValue: {},
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    placeholder: { default: "选择时间" },
    format: { default: "24h" },
    hourStep: { default: 1 },
    minuteStep: { default: 1 },
    secondStep: { default: 1 },
    showSeconds: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !0 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: xs,
  setup(l, { emit: a }) {
    const e = a, t = l, {
      isOpen: r,
      inputRef: o,
      dropdownRef: s,
      hourRef: u,
      minuteRef: n,
      secondRef: f,
      ampmRef: y,
      formattedValue: C,
      hourList: S,
      minuteList: c,
      secondList: v,
      selectedHour: k,
      selectedMinute: b,
      selectedSecond: m,
      selectedAmPm: w,
      toggleDropdown: z,
      selectHour: $,
      selectMinute: T,
      selectSecond: B,
      selectAmPm: A,
      handleClear: V,
      handleFocus: E,
      handleBlur: P
    } = ps(t, e), j = d(() => ({
      root: t.unstyled ? t.pt?.root || "" : gs({ unstyled: t.unstyled, class: t.pt?.root }),
      inputWrapper: t.unstyled ? t.pt?.inputWrapper || "" : vs({ class: t.pt?.inputWrapper }),
      input: t.unstyled ? t.pt?.input || "" : bs({ class: t.pt?.input }),
      clearButton: t.unstyled ? t.pt?.clearButton || "" : ms({ class: t.pt?.clearButton }),
      dropdown: t.unstyled ? t.pt?.dropdown || "" : ys({ class: t.pt?.dropdown }),
      timeSelector: t.unstyled ? t.pt?.timeSelector || "" : hs({ class: t.pt?.timeSelector }),
      column: t.unstyled ? t.pt?.column || "" : ws({ class: t.pt?.column }),
      item: t.unstyled ? t.pt?.item || "" : bt({ class: t.pt?.item }),
      itemSelected: t.unstyled ? t.pt?.itemSelected || "" : bt({ selected: !0, class: t.pt?.itemSelected }).split(" ").filter((O) => !bt().includes(O)).join(" ")
    }));
    return (O, H) => (p(), g("div", {
      class: i(j.value.root)
    }, [
      x("div", {
        class: i(j.value.inputWrapper),
        onClick: H[3] || (H[3] = //@ts-ignore
        (...M) => h(z) && h(z)(...M))
      }, [
        x("input", {
          ref_key: "inputRef",
          ref: o,
          type: "text",
          class: i(j.value.input),
          value: h(C),
          placeholder: O.placeholder,
          disabled: O.disabled,
          readonly: !0,
          onFocus: H[0] || (H[0] = //@ts-ignore
          (...M) => h(E) && h(E)(...M)),
          onBlur: H[1] || (H[1] = //@ts-ignore
          (...M) => h(P) && h(P)(...M))
        }, null, 42, ks),
        O.clearable && O.modelValue && !O.disabled && !O.readonly ? (p(), g("span", {
          key: 0,
          class: i(j.value.clearButton),
          onClick: H[2] || (H[2] = //@ts-ignore
          (...M) => h(V) && h(V)(...M))
        }, H[6] || (H[6] = [
          x("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            x("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }),
            x("line", {
              x1: "6",
              y1: "6",
              x2: "18",
              y2: "18"
            })
          ], -1)
        ]), 2)) : L("", !0)
      ], 2),
      h(r) ? (p(), g("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: s,
        class: i(j.value.dropdown)
      }, [
        x("div", {
          class: i(j.value.timeSelector)
        }, [
          x("div", {
            ref_key: "hourRef",
            ref: u,
            class: i(j.value.column)
          }, [
            (p(!0), g(ee, null, oe(h(S), (M) => (p(), g("div", {
              key: `hour-${M}`,
              class: i([
                j.value.item,
                (O.format === "12h" ? (h(k) > 12 ? h(k) - 12 : h(k) === 0 ? 12 : h(k)) === M : h(k) === M) ? j.value.itemSelected : ""
              ]),
              onClick: (_) => h($)(M)
            }, N(M.toString().padStart(2, "0")), 11, Cs))), 128))
          ], 2),
          x("div", {
            ref_key: "minuteRef",
            ref: n,
            class: i(j.value.column)
          }, [
            (p(!0), g(ee, null, oe(h(c), (M) => (p(), g("div", {
              key: `minute-${M}`,
              class: i([
                j.value.item,
                h(b) === M ? j.value.itemSelected : ""
              ]),
              onClick: (_) => h(T)(M)
            }, N(M.toString().padStart(2, "0")), 11, Ss))), 128))
          ], 2),
          O.showSeconds ? (p(), g("div", {
            key: 0,
            ref_key: "secondRef",
            ref: f,
            class: i(j.value.column)
          }, [
            (p(!0), g(ee, null, oe(h(v), (M) => (p(), g("div", {
              key: `second-${M}`,
              class: i([
                j.value.item,
                h(m) === M ? j.value.itemSelected : ""
              ]),
              onClick: (_) => h(B)(M)
            }, N(M.toString().padStart(2, "0")), 11, zs))), 128))
          ], 2)) : L("", !0),
          O.format === "12h" ? (p(), g("div", {
            key: 1,
            ref_key: "ampmRef",
            ref: y,
            class: i(j.value.column)
          }, [
            x("div", {
              class: i([
                j.value.item,
                h(w) === "am" ? j.value.itemSelected : ""
              ]),
              onClick: H[4] || (H[4] = (M) => h(A)("am"))
            }, " AM ", 2),
            x("div", {
              class: i([
                j.value.item,
                h(w) === "pm" ? j.value.itemSelected : ""
              ]),
              onClick: H[5] || (H[5] = (M) => h(A)("pm"))
            }, " PM ", 2)
          ], 2)) : L("", !0)
        ], 2)
      ], 2)) : L("", !0)
    ], 2));
  }
}), tl = J($s), Bs = (l, a) => {
  const e = R(!1), t = R(null), r = R(null), o = d(() => {
    if (!l.modelValue) return "";
    try {
      const c = l.locale || "default", v = {};
      return l.format ? (l.format.includes("yyyy") && (v.year = "numeric"), l.format.includes("MM") ? v.month = "2-digit" : l.format.includes("M") && (v.month = "numeric"), l.format.includes("dd") ? v.day = "2-digit" : l.format.includes("d") && (v.day = "numeric"), Object.keys(v).length === 0 && (v.year = "numeric", v.month = "2-digit", v.day = "2-digit")) : (v.year = "numeric", v.month = "2-digit", v.day = "2-digit"), new Intl.DateTimeFormat(c, v).format(l.modelValue);
    } catch (c) {
      return console.error("Date formatting error:", c), l.modelValue.toLocaleDateString();
    }
  }), s = () => {
    l.disabled || l.readonly || (e.value = !e.value);
  }, u = () => {
    e.value = !1;
  }, n = (c) => {
    c === null ? (a("update:modelValue", null), a("change", null)) : (a("update:modelValue", c), a("change", c)), u();
  }, f = (c) => {
    c.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, y = (c) => {
    a("focus", c);
  }, C = (c) => {
    a("blur", c);
  }, S = (c) => {
    e.value && t.value && r.value && !t.value.contains(c.target) && !r.value.contains(c.target) && u();
  };
  return be(() => {
    document.addEventListener("mousedown", S);
  }), Ee(() => {
    document.removeEventListener("mousedown", S);
  }), Q(
    () => l.modelValue,
    (c) => {
      c || u();
    }
  ), {
    isOpen: e,
    inputRef: t,
    dropdownRef: r,
    formattedValue: o,
    toggleDropdown: s,
    closeDropdown: u,
    handleDateChange: n,
    handleClear: f,
    handleFocus: y,
    handleBlur: C
  };
}, Vs = D({
  base: "relative w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), Is = D({
  base: "relative flex items-center"
}), Ms = D({
  base: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-900",
  variants: {
    error: {
      true: "border-red-500 focus:ring-red-500"
    }
  }
}), Ds = D({
  base: "absolute right-3 cursor-pointer text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300"
}), Ts = D({
  base: "absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800"
}), Rs = {
  "update:modelValue": (l) => l === null || l instanceof Date,
  change: (l) => l === null || l instanceof Date,
  focus: (l) => l instanceof FocusEvent,
  blur: (l) => l instanceof FocusEvent,
  clear: () => !0
}, Es = ["value", "placeholder", "disabled"], Ls = /* @__PURE__ */ q({
  __name: "index",
  props: {
    modelValue: {},
    min: {},
    max: {},
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    placeholder: { default: "选择日期" },
    format: {},
    firstDayOfWeek: { default: 0 },
    locale: {},
    clearable: { type: Boolean, default: !0 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: Rs,
  setup(l, { emit: a }) {
    const e = a, t = l, {
      isOpen: r,
      inputRef: o,
      dropdownRef: s,
      formattedValue: u,
      toggleDropdown: n,
      handleDateChange: f,
      handleClear: y,
      handleFocus: C,
      handleBlur: S
    } = Bs(t, e), c = d(() => ({
      root: t.unstyled ? t.pt?.root || "" : Vs({ unstyled: t.unstyled, class: t.pt?.root }),
      inputWrapper: t.unstyled ? t.pt?.inputWrapper || "" : Is({ class: t.pt?.inputWrapper }),
      input: t.unstyled ? t.pt?.input || "" : Ms({ class: t.pt?.input }),
      clearButton: t.unstyled ? t.pt?.clearButton || "" : Ds({ class: t.pt?.clearButton }),
      dropdown: t.unstyled ? t.pt?.dropdown || "" : Ts({ class: t.pt?.dropdown })
    }));
    return (v, k) => (p(), g("div", {
      class: i(c.value.root)
    }, [
      x("div", {
        class: i(c.value.inputWrapper),
        onClick: k[3] || (k[3] = //@ts-ignore
        (...b) => h(n) && h(n)(...b))
      }, [
        x("input", {
          ref_key: "inputRef",
          ref: o,
          type: "text",
          class: i(c.value.input),
          value: h(u),
          placeholder: v.placeholder,
          disabled: v.disabled,
          readonly: !0,
          onFocus: k[0] || (k[0] = //@ts-ignore
          (...b) => h(C) && h(C)(...b)),
          onBlur: k[1] || (k[1] = //@ts-ignore
          (...b) => h(S) && h(S)(...b))
        }, null, 42, Es),
        v.clearable && v.modelValue && !v.disabled && !v.readonly ? (p(), g("span", {
          key: 0,
          class: i(c.value.clearButton),
          onClick: k[2] || (k[2] = //@ts-ignore
          (...b) => h(y) && h(y)(...b))
        }, k[4] || (k[4] = [
          x("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            x("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }),
            x("line", {
              x1: "6",
              y1: "6",
              x2: "18",
              y2: "18"
            })
          ], -1)
        ]), 2)) : L("", !0)
      ], 2),
      h(r) ? (p(), g("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: s,
        class: i(c.value.dropdown)
      }, [
        De(h(It), {
          modelValue: v.modelValue,
          min: v.min,
          max: v.max,
          disabled: v.disabled,
          readonly: v.readonly,
          firstDayOfWeek: v.firstDayOfWeek,
          locale: v.locale,
          pt: v.pt?.calendar,
          "onUpdate:modelValue": h(f)
        }, null, 8, ["modelValue", "min", "max", "disabled", "readonly", "firstDayOfWeek", "locale", "pt", "onUpdate:modelValue"])
      ], 2)) : L("", !0)
    ], 2));
  }
}), As = J(Ls), Os = (l, a) => {
  const e = R(!1), t = R("date"), r = R(null), o = R(null), s = R(l.modelValue || /* @__PURE__ */ new Date()), u = d(() => {
    if (!l.modelValue) return "";
    try {
      const m = l.locale || "default", w = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "2-digit"
      };
      return l.showSeconds && (w.second = "2-digit"), l.timeFormat === "12h" ? w.hour12 = !0 : w.hour12 = !1, new Intl.DateTimeFormat(m, w).format(l.modelValue);
    } catch (m) {
      return console.error("DateTime formatting error:", m), l.modelValue.toLocaleString();
    }
  }), n = () => {
    l.disabled || l.readonly || (e.value = !e.value, e.value && (s.value = l.modelValue || /* @__PURE__ */ new Date()));
  }, f = () => {
    e.value = !1;
  }, y = (m) => {
    t.value = m;
  }, C = (m) => {
    if (!m) return;
    const w = new Date(s.value);
    w.setFullYear(m.getFullYear()), w.setMonth(m.getMonth()), w.setDate(m.getDate()), s.value = w, a("update:modelValue", w), a("change", w), y("time");
  }, S = (m) => {
    if (!m) return;
    const w = new Date(s.value);
    if (m instanceof Date)
      w.setHours(m.getHours()), w.setMinutes(m.getMinutes()), w.setSeconds(m.getSeconds());
    else if (typeof m == "string") {
      const z = m.split(":");
      z.length >= 2 && (w.setHours(parseInt(z[0]) || 0), w.setMinutes(parseInt(z[1]) || 0), z.length >= 3 && w.setSeconds(parseInt(z[2]) || 0));
    }
    s.value = w, a("update:modelValue", w), a("change", w), f();
  }, c = (m) => {
    m.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, v = (m) => {
    a("focus", m);
  }, k = (m) => {
    a("blur", m);
  }, b = (m) => {
    e.value && r.value && o.value && !r.value.contains(m.target) && !o.value.contains(m.target) && f();
  };
  return be(() => {
    document.addEventListener("mousedown", b);
  }), Ee(() => {
    document.removeEventListener("mousedown", b);
  }), Q(
    () => l.modelValue,
    (m) => {
      m ? s.value = m : f();
    }
  ), {
    isOpen: e,
    activeTab: t,
    inputRef: r,
    dropdownRef: o,
    currentDateTime: s,
    formattedValue: u,
    toggleDropdown: n,
    closeDropdown: f,
    switchTab: y,
    handleDateChange: C,
    handleTimeChange: S,
    handleClear: c,
    handleFocus: v,
    handleBlur: k
  };
}, Ps = D({
  base: "relative w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), js = D({
  base: "relative flex items-center"
}), Ws = D({
  base: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-900",
  variants: {
    error: {
      true: "border-red-500 focus:ring-red-500"
    }
  }
}), Fs = D({
  base: "absolute right-3 cursor-pointer text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300"
}), _s = D({
  base: "absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800"
}), Hs = D({
  base: "mb-4 flex border-b border-gray-200 dark:border-gray-700"
}), mt = D({
  base: "cursor-pointer px-4 py-2 text-sm font-medium",
  variants: {
    active: {
      true: "border-b-2 border-blue-500 text-blue-700 dark:border-blue-400 dark:text-blue-300",
      false: "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
    }
  },
  defaultVariants: {
    active: !1
  }
}), Ns = D({
  base: "mt-2"
}), Gs = {
  "update:modelValue": (l) => l === null || l instanceof Date,
  change: (l) => l === null || l instanceof Date,
  focus: (l) => l instanceof FocusEvent,
  blur: (l) => l instanceof FocusEvent,
  clear: () => !0
}, Ks = ["value", "placeholder", "disabled"], Ys = /* @__PURE__ */ q({
  __name: "index",
  props: {
    modelValue: {},
    min: {},
    max: {},
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    placeholder: { default: "选择日期时间" },
    dateFormat: {},
    timeFormat: { default: "24h" },
    firstDayOfWeek: { default: 0 },
    locale: {},
    hourStep: { default: 1 },
    minuteStep: { default: 1 },
    secondStep: { default: 1 },
    showSeconds: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !0 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: Gs,
  setup(l, { emit: a }) {
    const e = a, t = l, {
      isOpen: r,
      activeTab: o,
      inputRef: s,
      dropdownRef: u,
      currentDateTime: n,
      formattedValue: f,
      toggleDropdown: y,
      switchTab: C,
      handleDateChange: S,
      handleTimeChange: c,
      handleClear: v,
      handleFocus: k,
      handleBlur: b
    } = Os(t, e), m = d(() => ({
      root: t.unstyled ? t.pt?.root || "" : Ps({
        unstyled: t.unstyled,
        class: t.pt?.root
      }),
      inputWrapper: t.unstyled ? t.pt?.inputWrapper || "" : js({ class: t.pt?.inputWrapper }),
      input: t.unstyled ? t.pt?.input || "" : Ws({ class: t.pt?.input }),
      clearButton: t.unstyled ? t.pt?.clearButton || "" : Fs({ class: t.pt?.clearButton }),
      dropdown: t.unstyled ? t.pt?.dropdown || "" : _s({ class: t.pt?.dropdown }),
      tabs: t.unstyled ? t.pt?.tabs || "" : Hs({ class: t.pt?.tabs }),
      tab: t.unstyled ? t.pt?.tab || "" : mt({ class: t.pt?.tab }),
      activeTab: t.unstyled ? t.pt?.activeTab || "" : mt({ active: !0, class: t.pt?.activeTab }).split(" ").filter((w) => !mt().includes(w)).join(" "),
      tabContent: t.unstyled ? t.pt?.tabContent || "" : Ns({ class: t.pt?.tabContent })
    }));
    return (w, z) => (p(), g("div", {
      class: i(m.value.root)
    }, [
      x("div", {
        class: i(m.value.inputWrapper),
        onClick: z[3] || (z[3] = //@ts-ignore
        (...$) => h(y) && h(y)(...$))
      }, [
        x("input", {
          ref_key: "inputRef",
          ref: s,
          type: "text",
          class: i(m.value.input),
          value: h(f),
          placeholder: w.placeholder,
          disabled: w.disabled,
          readonly: !0,
          onFocus: z[0] || (z[0] = //@ts-ignore
          (...$) => h(k) && h(k)(...$)),
          onBlur: z[1] || (z[1] = //@ts-ignore
          (...$) => h(b) && h(b)(...$))
        }, null, 42, Ks),
        w.clearable && w.modelValue && !w.disabled && !w.readonly ? (p(), g("span", {
          key: 0,
          class: i(m.value.clearButton),
          onClick: z[2] || (z[2] = //@ts-ignore
          (...$) => h(v) && h(v)(...$))
        }, z[6] || (z[6] = [
          x("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            x("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }),
            x("line", {
              x1: "6",
              y1: "6",
              x2: "18",
              y2: "18"
            })
          ], -1)
        ]), 2)) : L("", !0)
      ], 2),
      h(r) ? (p(), g("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: u,
        class: i(m.value.dropdown)
      }, [
        x("div", {
          class: i(m.value.tabs)
        }, [
          x("div", {
            class: i([m.value.tab, h(o) === "date" ? m.value.activeTab : ""]),
            onClick: z[4] || (z[4] = ($) => h(C)("date"))
          }, " 日期 ", 2),
          x("div", {
            class: i([m.value.tab, h(o) === "time" ? m.value.activeTab : ""]),
            onClick: z[5] || (z[5] = ($) => h(C)("time"))
          }, " 时间 ", 2)
        ], 2),
        x("div", {
          class: i(m.value.tabContent)
        }, [
          He(x("div", null, [
            De(h(It), {
              modelValue: h(n),
              min: w.min,
              max: w.max,
              disabled: w.disabled,
              readonly: w.readonly,
              firstDayOfWeek: w.firstDayOfWeek,
              locale: w.locale,
              pt: w.pt?.datePicker?.calendar,
              "onUpdate:modelValue": h(S)
            }, null, 8, ["modelValue", "min", "max", "disabled", "readonly", "firstDayOfWeek", "locale", "pt", "onUpdate:modelValue"])
          ], 512), [
            [ht, h(o) === "date"]
          ]),
          He(x("div", null, [
            De(h(tl), {
              modelValue: h(n),
              disabled: w.disabled,
              readonly: w.readonly,
              format: w.timeFormat,
              hourStep: w.hourStep,
              minuteStep: w.minuteStep,
              secondStep: w.secondStep,
              showSeconds: w.showSeconds,
              pt: {
                timeSelector: w.pt?.timePicker?.timeSelector,
                column: w.pt?.timePicker?.column,
                item: w.pt?.timePicker?.item,
                itemSelected: w.pt?.timePicker?.itemSelected
              },
              "onUpdate:modelValue": h(c)
            }, null, 8, ["modelValue", "disabled", "readonly", "format", "hourStep", "minuteStep", "secondStep", "showSeconds", "pt", "onUpdate:modelValue"])
          ], 512), [
            [ht, h(o) === "time"]
          ])
        ], 2)
      ], 2)) : L("", !0)
    ], 2));
  }
}), Us = J(Ys), Xs = (l, a) => {
  const e = R(!1), t = R(null), r = R(null), o = d(() => {
    if (l.options && l.options.length > 0)
      return l.options;
    const c = [], v = l.start || "00:00", k = l.end || "23:59", b = l.step || 30, [m, w] = v.split(":").map(Number), [z, $] = k.split(":").map(Number), T = m * 60 + w, B = z * 60 + $;
    for (let A = T; A <= B; A += b) {
      const V = Math.floor(A / 60), E = A % 60;
      if (l.format === "12h") {
        const P = V >= 12 ? "PM" : "AM", j = V === 0 ? 12 : V > 12 ? V - 12 : V;
        c.push(
          `${j.toString().padStart(2, "0")}:${E.toString().padStart(2, "0")} ${P}`
        );
      } else
        c.push(
          `${V.toString().padStart(2, "0")}:${E.toString().padStart(2, "0")}`
        );
    }
    return c;
  }), s = () => {
    l.disabled || l.readonly || (e.value = !e.value);
  }, u = () => {
    e.value = !1;
  }, n = (c) => {
    a("update:modelValue", c), a("change", c), u();
  }, f = (c) => {
    c.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, y = (c) => {
    a("focus", c);
  }, C = (c) => {
    a("blur", c);
  }, S = (c) => {
    e.value && t.value && r.value && !t.value.contains(c.target) && !r.value.contains(c.target) && u();
  };
  return be(() => {
    document.addEventListener("mousedown", S);
  }), Ee(() => {
    document.removeEventListener("mousedown", S);
  }), Q(
    () => l.modelValue,
    (c) => {
      c || u();
    }
  ), {
    isOpen: e,
    inputRef: t,
    dropdownRef: r,
    timeOptions: o,
    toggleDropdown: s,
    selectOption: n,
    handleClear: f,
    handleFocus: y,
    handleBlur: C
  };
}, qs = D({
  base: "relative w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), Zs = D({
  base: "relative flex items-center"
}), Js = D({
  base: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-900",
  variants: {
    error: {
      true: "border-red-500 focus:ring-red-500"
    }
  }
}), Qs = D({
  base: "absolute right-3 cursor-pointer text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300"
}), en = D({
  base: "absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
}), tn = D({
  base: "max-h-60 overflow-auto py-1"
}), Qe = D({
  base: "cursor-pointer px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700",
  variants: {
    selected: {
      true: "bg-blue-100 font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
    },
    disabled: {
      true: "cursor-not-allowed opacity-50 hover:bg-transparent dark:hover:bg-transparent"
    }
  }
}), ln = {
  "update:modelValue": (l) => l === null || typeof l == "string",
  change: (l) => l === null || typeof l == "string",
  focus: (l) => l instanceof FocusEvent,
  blur: (l) => l instanceof FocusEvent,
  clear: () => !0
}, an = ["value", "placeholder", "disabled"], rn = ["onClick"], on = /* @__PURE__ */ q({
  __name: "index",
  props: {
    modelValue: {},
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    placeholder: { default: "选择时间" },
    options: {},
    start: { default: "00:00" },
    end: { default: "23:59" },
    step: { default: 30 },
    format: { default: "24h" },
    clearable: { type: Boolean, default: !0 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: ln,
  setup(l, { emit: a }) {
    const e = a, t = l, {
      isOpen: r,
      inputRef: o,
      dropdownRef: s,
      timeOptions: u,
      toggleDropdown: n,
      selectOption: f,
      handleClear: y,
      handleFocus: C,
      handleBlur: S
    } = Xs(t, e), c = d(() => ({
      root: t.unstyled ? t.pt?.root || "" : qs({ unstyled: t.unstyled, class: t.pt?.root }),
      inputWrapper: t.unstyled ? t.pt?.inputWrapper || "" : Zs({ class: t.pt?.inputWrapper }),
      input: t.unstyled ? t.pt?.input || "" : Js({ class: t.pt?.input }),
      clearButton: t.unstyled ? t.pt?.clearButton || "" : Qs({ class: t.pt?.clearButton }),
      dropdown: t.unstyled ? t.pt?.dropdown || "" : en({ class: t.pt?.dropdown }),
      optionsList: t.unstyled ? t.pt?.optionsList || "" : tn({ class: t.pt?.optionsList }),
      option: t.unstyled ? t.pt?.option || "" : Qe({ class: t.pt?.option }),
      optionSelected: t.unstyled ? t.pt?.optionSelected || "" : Qe({
        selected: !0,
        class: t.pt?.optionSelected
      }).split(" ").filter((v) => !Qe().includes(v)).join(" "),
      optionDisabled: t.unstyled ? "" : Qe({ disabled: !0 }).split(" ").filter((v) => !Qe().includes(v)).join(" ")
    }));
    return (v, k) => (p(), g("div", {
      class: i(c.value.root)
    }, [
      x("div", {
        class: i(c.value.inputWrapper),
        onClick: k[3] || (k[3] = //@ts-ignore
        (...b) => h(n) && h(n)(...b))
      }, [
        x("input", {
          ref_key: "inputRef",
          ref: o,
          type: "text",
          class: i(c.value.input),
          value: v.modelValue,
          placeholder: v.placeholder,
          disabled: v.disabled,
          readonly: !0,
          onFocus: k[0] || (k[0] = //@ts-ignore
          (...b) => h(C) && h(C)(...b)),
          onBlur: k[1] || (k[1] = //@ts-ignore
          (...b) => h(S) && h(S)(...b))
        }, null, 42, an),
        v.clearable && v.modelValue && !v.disabled && !v.readonly ? (p(), g("span", {
          key: 0,
          class: i(c.value.clearButton),
          onClick: k[2] || (k[2] = //@ts-ignore
          (...b) => h(y) && h(y)(...b))
        }, k[4] || (k[4] = [
          x("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            x("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }),
            x("line", {
              x1: "6",
              y1: "6",
              x2: "18",
              y2: "18"
            })
          ], -1)
        ]), 2)) : L("", !0)
      ], 2),
      h(r) ? (p(), g("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: s,
        class: i(c.value.dropdown)
      }, [
        x("div", {
          class: i(c.value.optionsList)
        }, [
          (p(!0), g(ee, null, oe(h(u), (b, m) => (p(), g("div", {
            key: m,
            class: i([
              c.value.option,
              v.modelValue === b ? c.value.optionSelected : "",
              v.disabled ? c.value.optionDisabled : ""
            ]),
            onClick: (w) => !v.disabled && h(f)(b)
          }, N(b), 11, rn))), 128)),
          h(u).length === 0 ? (p(), g("div", {
            key: 0,
            class: i(c.value.option),
            style: { cursor: "default" }
          }, " 无可用选项 ", 2)) : L("", !0)
        ], 2)
      ], 2)) : L("", !0)
    ], 2));
  }
}), sn = J(on), nn = D({
  base: "relative overflow-hidden bg-gray-200 dark:bg-gray-700",
  variants: {
    animation: {
      pulse: "animate-pulse",
      wave: "skeleton-wave",
      none: ""
    },
    rounded: {
      true: "rounded-md",
      false: ""
    }
  },
  defaultVariants: {
    animation: "pulse",
    rounded: !1
  }
}), un = D({
  base: "w-full",
  variants: {
    rounded: {
      true: "rounded-md",
      false: ""
    }
  },
  defaultVariants: {
    rounded: !1
  }
}), dn = D({
  base: "bg-gray-200 dark:bg-gray-700 h-4 mb-2 last:mb-0",
  variants: {
    animation: {
      pulse: "animate-pulse",
      wave: "skeleton-wave",
      none: ""
    },
    rounded: {
      true: "rounded-md",
      false: ""
    }
  },
  defaultVariants: {
    animation: "pulse",
    rounded: !1
  }
}), cn = D({
  base: "bg-gray-200 dark:bg-gray-700 inline-block",
  variants: {
    size: {
      xs: "h-6 w-6",
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12",
      xl: "h-16 w-16"
    },
    circle: {
      true: "rounded-full",
      false: "rounded-md"
    },
    animation: {
      pulse: "animate-pulse",
      wave: "skeleton-wave",
      none: ""
    }
  },
  defaultVariants: {
    size: "md",
    circle: !0,
    animation: "pulse"
  }
}), fn = { key: 1 }, pn = /* @__PURE__ */ q({
  name: "Skeleton",
  __name: "index",
  props: {
    animation: { default: "pulse" },
    loading: { type: Boolean, default: !0 },
    rounded: { type: Boolean, default: !1 },
    width: {},
    height: {},
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  setup(l) {
    const a = l, e = d(() => a.unstyled ? a.pt?.root || "" : nn({
      animation: a.animation,
      rounded: a.rounded,
      class: a.pt?.root
    })), t = d(() => a.unstyled && a.pt?.content || ""), r = d(() => {
      const o = {};
      return a.width && (o.width = typeof a.width == "number" ? `${a.width}px` : a.width), a.height && (o.height = typeof a.height == "number" ? `${a.height}px` : a.height), o;
    });
    return (o, s) => o.loading ? (p(), g("div", {
      key: 0,
      class: i(e.value),
      style: le(r.value)
    }, [
      x("div", {
        class: i(t.value)
      }, [
        F(o.$slots, "skeleton")
      ], 2)
    ], 6)) : (p(), g("div", fn, [
      F(o.$slots, "default")
    ]));
  }
}), gn = /* @__PURE__ */ q({
  name: "SkeletonText",
  __name: "SkeletonText",
  props: {
    lines: { default: 3 },
    widths: { default: () => ["100%", "100%", "80%"] },
    lineHeight: { default: "1rem" },
    animation: { default: "pulse" },
    rounded: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  setup(l) {
    const a = l, e = d(() => a.unstyled ? a.pt?.root || "" : un({
      rounded: a.rounded,
      class: a.pt?.root
    })), t = () => a.unstyled ? a.pt?.line || "" : dn({
      animation: a.animation,
      rounded: a.rounded,
      class: a.pt?.line
    }), r = (s) => typeof a.widths == "string" || typeof a.widths == "number" ? a.widths : Array.isArray(a.widths) && a.widths.length > 0 ? a.widths[s % a.widths.length] : "100%", o = (s) => {
      const u = r(s), n = {
        width: typeof u == "number" ? `${u}px` : u
      };
      return a.lineHeight && (n.height = typeof a.lineHeight == "number" ? `${a.lineHeight}px` : a.lineHeight), n;
    };
    return (s, u) => (p(), g("div", {
      class: i(e.value)
    }, [
      (p(!0), g(ee, null, oe(s.lines, (n) => (p(), g("div", {
        key: n,
        class: i(t()),
        style: le(o(n - 1))
      }, null, 6))), 128))
    ], 2));
  }
}), vn = /* @__PURE__ */ q({
  name: "SkeletonAvatar",
  __name: "SkeletonAvatar",
  props: {
    size: { default: "md" },
    circle: { type: Boolean, default: !0 },
    animation: { default: "pulse" },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  setup(l) {
    const a = l, e = d(() => a.unstyled ? a.pt?.root || "" : cn({
      size: a.size,
      circle: a.circle,
      animation: a.animation,
      class: a.pt?.root
    }));
    return (t, r) => (p(), g("div", {
      class: i(e.value)
    }, null, 2));
  }
}), bn = J(pn), mn = J(gn), yn = J(vn);
function hn(l = {}) {
  const a = R(l.modelValue || ""), e = (o) => a.value === o, t = (o) => {
    a.value = o, l.onChange?.(o);
  };
  return Q(
    () => l.modelValue,
    (o) => {
      o !== void 0 && o !== a.value && (a.value = o);
    }
  ), {
    activeTab: a,
    isActive: e,
    activate: t,
    onKeydown: (o, s) => {
      const u = s.indexOf(a.value);
      if (u === -1 && s.length > 0) {
        t(s[0]);
        return;
      }
      if (o.key === "ArrowRight" || o.key === "ArrowDown") {
        const n = (u + 1) % s.length;
        t(s[n]), o.preventDefault();
      } else if (o.key === "ArrowLeft" || o.key === "ArrowUp") {
        const n = (u - 1 + s.length) % s.length;
        t(s[n]), o.preventDefault();
      }
    }
  };
}
const wn = D({
  base: "w-full",
  variants: {
    placement: {
      top: "flex flex-col",
      bottom: "flex flex-col-reverse",
      left: "flex flex-row",
      right: "flex flex-row-reverse"
    },
    fullWidth: {
      true: "w-full",
      false: ""
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: ""
    }
  },
  defaultVariants: {
    placement: "top",
    fullWidth: !1,
    disabled: !1
  }
}), xn = D({
  base: "flex",
  variants: {
    variant: {
      default: "border-b border-gray-200 dark:border-gray-700",
      pills: "gap-2",
      underline: "border-b border-gray-200 dark:border-gray-700"
    },
    placement: {
      top: "flex-row",
      bottom: "flex-row",
      left: "flex-col",
      right: "flex-col"
    },
    fullWidth: {
      true: "w-full",
      false: ""
    },
    size: {
      sm: "gap-1",
      md: "gap-2",
      lg: "gap-3"
    }
  },
  defaultVariants: {
    variant: "default",
    placement: "top",
    fullWidth: !1,
    size: "md"
  }
}), kn = D({
  base: "focus:outline-none transition-colors",
  variants: {
    variant: {
      default: "px-4 py-2 border-b-2 -mb-px",
      pills: "px-4 py-2 rounded-md",
      underline: "px-4 py-2 border-b-2 -mb-px"
    },
    active: {
      true: "",
      false: ""
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "cursor-pointer"
    },
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base"
    },
    fullWidth: {
      true: "flex-1 text-center",
      false: ""
    }
  },
  compoundVariants: [
    {
      variant: "default",
      active: !0,
      class: "border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400"
    },
    {
      variant: "default",
      active: !1,
      class: "border-transparent text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
    },
    {
      variant: "pills",
      active: !0,
      class: "bg-blue-500 text-white dark:bg-blue-600"
    },
    {
      variant: "pills",
      active: !1,
      class: "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
    },
    {
      variant: "underline",
      active: !0,
      class: "border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400"
    },
    {
      variant: "underline",
      active: !1,
      class: "border-transparent text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
    }
  ],
  defaultVariants: {
    variant: "default",
    active: !1,
    disabled: !1,
    size: "md",
    fullWidth: !1
  }
}), Cn = D({
  base: "py-4",
  variants: {
    placement: {
      top: "pt-4",
      bottom: "pb-4",
      left: "pl-4",
      right: "pr-4"
    }
  },
  defaultVariants: {
    placement: "top"
  }
}), Sn = {
  "update:modelValue": (l) => typeof l == "string" || typeof l == "number",
  change: (l) => typeof l == "string" || typeof l == "number"
}, zn = ["aria-disabled"], $n = ["aria-selected", "aria-disabled", "tabindex", "onClick"], Bn = /* @__PURE__ */ q({
  name: "Tabs",
  __name: "tabs",
  props: {
    modelValue: {},
    variant: { default: "default" },
    size: { default: "md" },
    placement: { default: "top" },
    disabled: { type: Boolean, default: !1 },
    fullWidth: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: Sn,
  setup(l, { emit: a }) {
    const e = l, t = a, r = Ge(), o = d(() => {
      if (!r.default) return [];
      const m = r.default({}) || [], w = /* @__PURE__ */ new Set(), z = [];
      return m.filter(($) => $.type && ($.type.name === "TabItem" || typeof $.type == "object" && $.type.__name === "TabItem")).forEach(($) => {
        const T = $.props || {}, B = T.name;
        B && !w.has(B) ? (w.add(B), z.push({
          name: B,
          title: T.title || T.label || "",
          disabled: T.disabled || !1
        })) : console.warn(
          B ? `[Tabs] 发现重复的TabItem name: ${B}，只有第一个会被显示` : "[Tabs] TabItem必须提供name属性"
        );
      }), z;
    }), s = d(
      () => o.value.map((m) => m.name)
    ), { activeTab: u, isActive: n, activate: f, onKeydown: y } = hn({
      modelValue: e.modelValue,
      onChange: (m) => {
        t("update:modelValue", m), t("change", m);
      }
    });
    Q(
      o,
      (m) => {
        m.length > 0 && !m.some((w) => n(w.name)) && f(m[0].name);
      },
      { immediate: !0 }
    );
    const C = (m, w) => {
      e.disabled || w || f(m);
    }, S = (m) => {
      y(m, s.value);
    }, c = d(() => e.unstyled ? e.pt?.container || "" : wn({
      placement: e.placement,
      fullWidth: e.fullWidth,
      disabled: e.disabled,
      class: e.pt?.container
    })), v = d(() => e.unstyled ? e.pt?.nav || "" : xn({
      variant: e.variant,
      placement: e.placement,
      fullWidth: e.fullWidth,
      size: e.size,
      class: e.pt?.nav
    })), k = (m, w) => e.unstyled ? e.pt?.navItem || "" : kn({
      variant: e.variant,
      active: n(m),
      disabled: e.disabled || w,
      size: e.size,
      fullWidth: e.fullWidth,
      class: e.pt?.navItem
    }), b = d(() => e.unstyled ? e.pt?.content || "" : Cn({
      placement: e.placement,
      class: e.pt?.content
    }));
    return Re("activeTab", u), (m, w) => (p(), g("div", {
      class: i(c.value),
      "aria-disabled": m.disabled,
      role: "tablist",
      onKeydown: S
    }, [
      x("div", {
        class: i(v.value)
      }, [
        (p(!0), g(ee, null, oe(o.value, (z) => (p(), g("button", {
          key: z.name,
          class: i(k(z.name, z.disabled)),
          role: "tab",
          "aria-selected": h(n)(z.name),
          "aria-disabled": m.disabled || z.disabled,
          tabindex: h(n)(z.name) ? 0 : -1,
          onClick: ($) => C(z.name, z.disabled)
        }, N(z.title), 11, $n))), 128))
      ], 2),
      x("div", {
        class: i(b.value)
      }, [
        F(m.$slots, "default")
      ], 2)
    ], 42, zn));
  }
}), Vn = /* @__PURE__ */ q({
  name: "TabItem",
  __name: "tab-item",
  props: {
    name: {},
    title: {},
    label: {},
    disabled: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  setup(l) {
    const a = l, e = Te("activeTab", R("")), t = d(() => e.value === a.name), r = d(() => a.unstyled && a.pt?.root || "");
    return (o, s) => He((p(), g("div", {
      class: i(r.value)
    }, [
      F(o.$slots, "default")
    ], 2)), [
      [ht, t.value]
    ]);
  }
}), In = J(Bn), Mn = J(Vn), Dn = D({
  base: "bg-white overflow-hidden",
  variants: {
    variant: {
      default: "",
      bordered: "border border-gray-200",
      elevated: "shadow-md"
    },
    padding: {
      none: "",
      sm: "",
      md: "",
      lg: ""
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-xl"
    },
    bordered: {
      true: "border border-gray-200",
      false: ""
    }
  },
  compoundVariants: [
    {
      padding: "none",
      class: ""
    },
    {
      padding: "sm",
      class: ""
    },
    {
      padding: "md",
      class: ""
    },
    {
      padding: "lg",
      class: ""
    }
  ],
  defaultVariants: {
    variant: "default",
    padding: "md",
    radius: "md",
    bordered: !0
  }
}), Tn = D({
  base: "flex items-center justify-between",
  variants: {
    padding: {
      none: "p-0",
      sm: "p-3",
      md: "p-4",
      lg: "p-5"
    },
    collapsible: {
      true: "cursor-pointer select-none",
      false: ""
    }
  },
  defaultVariants: {
    padding: "md",
    collapsible: !1
  }
}), Rn = D({
  base: "text-lg font-medium"
}), En = D({
  base: "transition-all",
  variants: {
    padding: {
      none: "p-0",
      sm: "px-3 pb-3",
      md: "px-4 pb-4",
      lg: "px-5 pb-5"
    },
    collapsed: {
      true: "max-h-0 overflow-hidden opacity-0",
      false: "max-h-[1000px] opacity-100"
    }
  },
  defaultVariants: {
    padding: "md",
    collapsed: !1
  }
}), Ln = D({
  base: "transition-transform duration-200",
  variants: {
    collapsed: {
      true: "transform rotate-180",
      false: ""
    }
  },
  defaultVariants: {
    collapsed: !1
  }
}), An = {
  "update:collapsed": (l) => typeof l == "boolean",
  collapse: (l) => typeof l == "boolean"
}, On = /* @__PURE__ */ q({
  name: "Panel",
  __name: "index",
  props: {
    title: {},
    variant: { default: "default" },
    padding: { default: "md" },
    radius: { default: "md" },
    collapsible: { type: Boolean, default: !1 },
    defaultCollapsed: { type: Boolean, default: !1 },
    bordered: { type: Boolean, default: !0 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: An,
  setup(l, { emit: a }) {
    const e = l, t = a, r = R(e.defaultCollapsed);
    Q(
      () => e.defaultCollapsed,
      (C) => {
        r.value = C;
      }
    );
    const o = () => {
      e.collapsible && (r.value = !r.value, t("update:collapsed", r.value), t("collapse", r.value));
    }, s = d(() => e.unstyled ? e.pt?.root || "" : Dn({
      variant: e.variant,
      padding: e.padding,
      radius: e.radius,
      bordered: e.bordered,
      class: e.pt?.root
    })), u = d(() => e.unstyled ? e.pt?.header || "" : Tn({
      padding: e.padding,
      collapsible: e.collapsible,
      class: e.pt?.header
    })), n = d(() => e.unstyled ? e.pt?.title || "" : Rn({
      class: e.pt?.title
    })), f = d(() => e.unstyled ? e.pt?.content || "" : En({
      padding: e.padding,
      collapsed: r.value,
      class: e.pt?.content
    })), y = d(() => e.unstyled ? e.pt?.icon || "" : Ln({
      collapsed: r.value,
      class: e.pt?.icon
    }));
    return (C, S) => (p(), g("div", {
      class: i(s.value)
    }, [
      x("div", {
        class: i(u.value),
        onClick: o
      }, [
        x("div", {
          class: i(n.value)
        }, [
          F(C.$slots, "title", {}, () => [
            de(N(C.title), 1)
          ])
        ], 2),
        C.collapsible ? (p(), g("div", {
          key: 0,
          class: i(y.value)
        }, [
          F(C.$slots, "icon", {}, () => [
            S[0] || (S[0] = x("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [
              x("polyline", { points: "6 9 12 15 18 9" })
            ], -1))
          ])
        ], 2)) : L("", !0)
      ], 2),
      x("div", {
        class: i(f.value)
      }, [
        F(C.$slots, "default")
      ], 2)
    ], 2));
  }
}), Pn = J(On), jn = D({
  base: "flex items-center justify-center",
  variants: {
    disabled: {
      true: "opacity-50 pointer-events-none",
      false: ""
    }
  },
  defaultVariants: {
    disabled: !1
  }
}), Wn = D({
  base: "flex items-center gap-1"
}), Fn = D({
  base: ""
}), _n = D({
  base: "flex items-center justify-center transition-colors focus:outline-none",
  variants: {
    variant: {
      default: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800",
      outline: "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800",
      text: "bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
    },
    size: {
      sm: "h-7 w-7 text-xs",
      md: "h-9 w-9 text-sm",
      lg: "h-11 w-11 text-base"
    },
    shape: {
      square: "rounded-none",
      rounded: "rounded-md",
      circle: "rounded-full"
    },
    active: {
      true: "border-blue-500 bg-blue-500 text-white hover:bg-blue-600 dark:border-blue-500 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500",
      false: ""
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "cursor-pointer"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    shape: "rounded",
    active: !1,
    disabled: !1
  }
}), Hn = D({
  base: "flex items-center justify-center text-gray-500 dark:text-gray-400",
  variants: {
    size: {
      sm: "h-7 w-7 text-xs",
      md: "h-9 w-9 text-sm",
      lg: "h-11 w-11 text-base"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Nn = D({
  base: "ml-4 flex items-center text-gray-700 dark:text-gray-300"
}), Gn = D({
  base: "mx-1 h-full w-12 rounded-md border border-gray-300 bg-white text-center text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:focus:border-blue-400 dark:focus:ring-blue-400",
  variants: {
    size: {
      sm: "h-7 text-xs",
      md: "h-9 text-sm",
      lg: "h-11 text-base"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Kn = D({
  base: "ml-2 rounded-md bg-blue-500 px-3 text-white hover:bg-blue-600 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-500",
  variants: {
    size: {
      sm: "h-7 text-xs",
      md: "h-9 text-sm",
      lg: "h-11 text-base"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Yn = {
  "update:modelValue": (l) => typeof l == "number",
  change: (l) => typeof l == "number"
}, Un = ["disabled"], Xn = ["disabled"], qn = ["onClick", "disabled", "aria-current"], Zn = ["disabled"], Jn = ["disabled"], Qn = ["max", "disabled"], ei = ["disabled"], ti = /* @__PURE__ */ q({
  name: "Paginator",
  __name: "index",
  props: {
    modelValue: { default: 1 },
    totalPages: {},
    visiblePageCount: { default: 5 },
    showEndButtons: { type: Boolean, default: !0 },
    showPrevNextButtons: { type: Boolean, default: !0 },
    showJumper: { type: Boolean, default: !1 },
    size: { default: "md" },
    variant: { default: "default" },
    shape: { default: "rounded" },
    disabled: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: Yn,
  setup(l, { emit: a }) {
    const e = l, t = a, r = R(e.modelValue);
    Q(
      () => e.modelValue,
      (z) => {
        z !== r.value && (r.value = z);
      }
    );
    const o = d({
      get: () => r.value,
      set: (z) => {
        r.value = z, t("update:modelValue", z), t("change", z);
      }
    }), s = R(""), u = d(() => e.disabled), n = d(() => {
      const z = e.totalPages, $ = r.value, T = e.visiblePageCount;
      if (z <= T)
        return Array.from({ length: z }, (P, j) => j + 1);
      const B = Math.floor(T / 2);
      let A = $ - B, V = $ + B;
      A < 1 && (V = Math.min(z, V + (1 - A)), A = 1), V > z && (A = Math.max(1, A - (V - z)), V = z);
      const E = [];
      A > 1 && (E.push(1), A > 2 && E.push("..."));
      for (let P = A; P <= V; P++)
        E.push(P);
      return V < z && (V < z - 1 && E.push("..."), E.push(z)), E;
    }), f = (z) => {
      z >= 1 && z <= e.totalPages && z !== o.value && (o.value = z);
    }, y = () => {
      const z = Number(s.value);
      !isNaN(z) && z >= 1 && z <= e.totalPages && f(z), s.value = "";
    }, C = d(() => e.unstyled ? e.pt?.root || "" : jn({
      disabled: e.disabled,
      class: e.pt?.root
    })), S = d(() => e.unstyled ? e.pt?.list || "" : Wn({
      class: e.pt?.list
    })), c = d(() => e.unstyled ? e.pt?.item || "" : Fn({
      class: e.pt?.item
    })), v = (z, $) => e.unstyled ? $ === "first" ? e.pt?.firstButton || "" : $ === "prev" ? e.pt?.prevButton || "" : $ === "next" ? e.pt?.nextButton || "" : $ === "last" ? e.pt?.lastButton || "" : z === o.value ? e.pt?.activeButton || "" : e.pt?.button || "" : _n({
      variant: e.variant,
      size: e.size,
      shape: e.shape,
      active: z === o.value,
      disabled: e.disabled,
      class: z === o.value ? e.pt?.activeButton : $ === "first" ? e.pt?.firstButton : $ === "prev" ? e.pt?.prevButton : $ === "next" ? e.pt?.nextButton : $ === "last" ? e.pt?.lastButton : e.pt?.button
    }), k = d(() => e.unstyled ? e.pt?.ellipsis || "" : Hn({
      size: e.size,
      class: e.pt?.ellipsis
    })), b = d(() => e.unstyled ? e.pt?.jumper || "" : Nn({
      class: e.pt?.jumper
    })), m = d(() => e.unstyled ? e.pt?.jumperInput || "" : Gn({
      size: e.size,
      class: e.pt?.jumperInput
    })), w = d(() => e.unstyled ? e.pt?.jumperButton || "" : Kn({
      size: e.size,
      class: e.pt?.jumperButton
    }));
    return (z, $) => (p(), g("nav", {
      class: i(C.value),
      "aria-label": "分页导航"
    }, [
      x("ul", {
        class: i(S.value)
      }, [
        z.showEndButtons ? (p(), g("li", {
          key: 0,
          class: i(c.value)
        }, [
          x("button", {
            class: i(v(1, "first")),
            onClick: $[0] || ($[0] = (T) => f(1)),
            disabled: u.value || o.value === 1,
            "aria-label": "首页"
          }, [
            F(z.$slots, "first-button", {}, () => [
              $[5] || ($[5] = x("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                x("polyline", { points: "11 17 6 12 11 7" }),
                x("polyline", { points: "18 17 13 12 18 7" })
              ], -1))
            ])
          ], 10, Un)
        ], 2)) : L("", !0),
        z.showPrevNextButtons ? (p(), g("li", {
          key: 1,
          class: i(c.value)
        }, [
          x("button", {
            class: i(v(o.value - 1, "prev")),
            onClick: $[1] || ($[1] = (T) => f(o.value - 1)),
            disabled: u.value || o.value === 1,
            "aria-label": "上一页"
          }, [
            F(z.$slots, "prev-button", {}, () => [
              $[6] || ($[6] = x("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                x("polyline", { points: "15 18 9 12 15 6" })
              ], -1))
            ])
          ], 10, Xn)
        ], 2)) : L("", !0),
        (p(!0), g(ee, null, oe(n.value, (T, B) => (p(), g(ee, { key: B }, [
          T !== "..." ? (p(), g("li", {
            key: 0,
            class: i(c.value)
          }, [
            x("button", {
              class: i(v(Number(T))),
              onClick: (A) => f(Number(T)),
              disabled: u.value,
              "aria-current": o.value === T ? "page" : void 0
            }, N(T), 11, qn)
          ], 2)) : (p(), g("li", {
            key: 1,
            class: i(c.value)
          }, [
            x("span", {
              class: i(k.value)
            }, "...", 2)
          ], 2))
        ], 64))), 128)),
        z.showPrevNextButtons ? (p(), g("li", {
          key: 2,
          class: i(c.value)
        }, [
          x("button", {
            class: i(v(o.value + 1, "next")),
            onClick: $[2] || ($[2] = (T) => f(o.value + 1)),
            disabled: u.value || o.value === z.totalPages,
            "aria-label": "下一页"
          }, [
            F(z.$slots, "next-button", {}, () => [
              $[7] || ($[7] = x("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                x("polyline", { points: "9 18 15 12 9 6" })
              ], -1))
            ])
          ], 10, Zn)
        ], 2)) : L("", !0),
        z.showEndButtons ? (p(), g("li", {
          key: 3,
          class: i(c.value)
        }, [
          x("button", {
            class: i(v(z.totalPages, "last")),
            onClick: $[3] || ($[3] = (T) => f(z.totalPages)),
            disabled: u.value || o.value === z.totalPages,
            "aria-label": "尾页"
          }, [
            F(z.$slots, "last-button", {}, () => [
              $[8] || ($[8] = x("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                x("polyline", { points: "13 17 18 12 13 7" }),
                x("polyline", { points: "6 17 11 12 6 7" })
              ], -1))
            ])
          ], 10, Jn)
        ], 2)) : L("", !0),
        z.showJumper ? (p(), g("li", {
          key: 4,
          class: i(b.value)
        }, [
          $[9] || ($[9] = x("span", null, "前往", -1)),
          He(x("input", {
            class: i(m.value),
            type: "number",
            "onUpdate:modelValue": $[4] || ($[4] = (T) => s.value = T),
            min: "1",
            max: z.totalPages,
            disabled: u.value,
            onKeyup: ze(y, ["enter"])
          }, null, 42, Qn), [
            [$t, s.value]
          ]),
          $[10] || ($[10] = x("span", null, "页", -1)),
          x("button", {
            class: i(w.value),
            onClick: y,
            disabled: u.value
          }, " 跳转 ", 10, ei)
        ], 2)) : L("", !0)
      ], 2)
    ], 2));
  }
}), li = J(ti), ai = D({
  base: "w-full",
  variants: {
    unstyled: {
      true: "",
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), ri = D({
  base: "w-full overflow-hidden",
  variants: {
    size: {
      sm: "h-1.5",
      md: "h-2.5",
      lg: "h-4"
    },
    shape: {
      flat: "rounded-none",
      rounded: "rounded",
      pill: "rounded-full"
    },
    unstyled: {
      true: "",
      false: "bg-gray-200 dark:bg-gray-700"
    }
  },
  defaultVariants: {
    size: "md",
    shape: "rounded",
    unstyled: !1
  }
}), oi = D({
  base: "h-full transition-all",
  variants: {
    variant: {
      default: "bg-blue-500",
      success: "bg-green-500",
      warning: "bg-yellow-500",
      danger: "bg-red-500",
      info: "bg-gray-500"
    },
    striped: {
      true: "bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:1rem_1rem]",
      false: ""
    },
    animated: {
      true: "animate-progress",
      false: ""
    },
    indeterminate: {
      true: "animate-indeterminate w-1/3",
      false: ""
    },
    unstyled: {
      true: "",
      false: ""
    }
  },
  defaultVariants: {
    variant: "default",
    striped: !1,
    animated: !1,
    indeterminate: !1,
    unstyled: !1
  }
}), si = D({
  base: "text-right text-sm font-medium",
  variants: {
    variant: {
      default: "text-blue-700 dark:text-blue-500",
      success: "text-green-700 dark:text-green-500",
      warning: "text-yellow-700 dark:text-yellow-500",
      danger: "text-red-700 dark:text-red-500",
      info: "text-gray-700 dark:text-gray-500"
    },
    unstyled: {
      true: "",
      false: ""
    }
  },
  defaultVariants: {
    variant: "default",
    unstyled: !1
  }
}), ni = {
  /**
   * 进度变化时触发
   */
  "update:value": (l) => typeof l == "number"
}, ii = (l) => {
  const a = d(() => {
    if (l.indeterminate)
      return 0;
    const r = Math.max(0, Math.min(l.value || 0, l.max || 100)), o = Math.max(1, l.max || 100);
    return Math.round(r / o * 100);
  }), e = d(() => `${a.value}%`), t = d(() => {
    if (!l.indeterminate)
      return `width: ${a.value}%`;
  });
  return {
    percentage: a,
    formattedPercentage: e,
    progressWidth: t
  };
}, ui = ["aria-valuenow"], di = /* @__PURE__ */ q({
  name: "VKProgress",
  __name: "index",
  props: {
    value: { default: 0 },
    max: { default: 100 },
    showText: { type: Boolean, default: !1 },
    variant: { default: "default" },
    size: { default: "md" },
    shape: { default: "rounded" },
    striped: { type: Boolean, default: !1 },
    animated: { type: Boolean, default: !1 },
    indeterminate: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: ni,
  setup(l) {
    const a = l, { percentage: e, formattedPercentage: t, progressWidth: r } = ii(a), o = d(() => a.unstyled ? a.pt?.root || "" : ai({
      unstyled: a.unstyled,
      class: a.pt?.root
    })), s = d(() => a.unstyled ? a.pt?.container || "" : ri({
      size: a.size,
      shape: a.shape,
      unstyled: a.unstyled,
      class: a.pt?.container
    })), u = d(() => a.unstyled ? a.pt?.bar || "" : oi({
      variant: a.variant,
      striped: a.striped,
      animated: a.animated,
      indeterminate: a.indeterminate,
      unstyled: a.unstyled,
      class: a.pt?.bar
    })), n = d(() => a.unstyled ? a.pt?.text || "" : si({
      variant: a.variant,
      unstyled: a.unstyled,
      class: a.pt?.text
    }));
    return (f, y) => (p(), g("div", {
      class: i(o.value)
    }, [
      x("div", {
        class: i(s.value)
      }, [
        x("div", {
          class: i(u.value),
          style: le(h(r)),
          role: "progressbar",
          "aria-valuenow": f.indeterminate ? void 0 : h(e),
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        }, null, 14, ui)
      ], 2),
      f.showText ? (p(), g("div", {
        key: 0,
        class: i(n.value)
      }, [
        F(f.$slots, "text", {}, () => [
          de(N(h(t)), 1)
        ])
      ], 2)) : L("", !0)
    ], 2));
  }
}), ci = J(di), fi = D({
  base: "flex",
  variants: {},
  defaultVariants: {}
}), pi = D({
  base: "flex flex-wrap items-center space-x-1 md:space-x-2",
  variants: {},
  defaultVariants: {}
}), gi = D({
  base: "mx-1 text-gray-400",
  variants: {},
  defaultVariants: {}
}), vi = D({
  base: "inline-flex items-center text-sm font-medium",
  variants: {
    disabled: {
      true: "text-gray-400 pointer-events-none cursor-not-allowed",
      false: "cursor-pointer"
    },
    active: {
      true: "text-gray-800 font-semibold",
      false: "text-gray-500 hover:text-gray-700"
    }
  },
  defaultVariants: {
    disabled: !1,
    active: !1
  }
}), bi = D({
  base: "inline-flex items-center",
  variants: {},
  defaultVariants: {}
}), ll = /* @__PURE__ */ Symbol("breadcrumb"), mi = (l) => {
  const a = R(null);
  return Re(ll, {
    separator: l.separator || "/",
    separatorIcon: l.separatorIcon || ""
  }), {
    _ref: a
  };
}, yi = () => {
  const l = Te(
    ll,
    {
      separator: "/",
      separatorIcon: ""
    }
  );
  return {
    _ref: R(null),
    breadcrumbContext: l
  };
}, hi = /* @__PURE__ */ q({
  name: "VBreadcrumb",
  __name: "breadcrumb",
  props: {
    separator: { default: "/" },
    separatorIcon: { default: "" },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  setup(l, { expose: a }) {
    const e = l, { _ref: t } = mi(e), r = d(() => e.unstyled ? e.pt?.root || "" : fi({
      class: e.pt?.root
    })), o = d(() => e.unstyled ? e.pt?.list || "" : pi({
      class: e.pt?.list
    }));
    return a({
      _ref: t
    }), (s, u) => (p(), g("nav", {
      class: i(r.value),
      ref_key: "_ref",
      ref: t
    }, [
      x("ol", {
        class: i(o.value)
      }, [
        F(s.$slots, "default")
      ], 2)
    ], 2));
  }
}), wi = {
  click: (l) => l instanceof MouseEvent
}, xi = ["href"], ki = /* @__PURE__ */ q({
  name: "VBreadcrumbItem",
  __name: "breadcrumb-item",
  props: {
    href: { default: "" },
    disabled: { type: Boolean, default: !1 },
    active: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: wi,
  setup(l, { expose: a, emit: e }) {
    const t = e, r = l, { _ref: o, breadcrumbContext: s } = yi(), u = R(!1), n = () => {
      if (o.value) {
        const v = o.value.parentElement;
        v && (u.value = v.firstElementChild === o.value);
      }
    };
    be(() => {
      n();
    });
    const f = (v) => {
      if (r.disabled) {
        v.preventDefault();
        return;
      }
      t("click", v);
    }, y = d(() => r.unstyled ? r.pt?.root || "" : vi({
      disabled: r.disabled,
      active: r.active,
      class: r.pt?.root
    })), C = d(() => r.unstyled ? r.pt?.separator || "" : gi()), S = d(() => r.unstyled ? r.pt?.link || "" : bi({
      class: r.pt?.link
    })), c = d(() => r.unstyled && r.pt?.content || "");
    return a({
      _ref: o
    }), (v, k) => (p(), g("li", {
      class: i(y.value),
      ref_key: "_ref",
      ref: o
    }, [
      v.$slots.separator ? F(v.$slots, "separator", { key: 0 }) : h(s).separatorIcon ? (p(), g("span", {
        key: 1,
        class: i(C.value)
      }, [
        (p(), Me(at(h(s).separatorIcon)))
      ], 2)) : u.value ? L("", !0) : (p(), g("span", {
        key: 2,
        class: i(C.value)
      }, N(h(s).separator), 3)),
      v.href && !v.disabled && !v.active ? (p(), g("a", {
        key: 3,
        href: v.href,
        class: i(S.value),
        onClick: f
      }, [
        F(v.$slots, "default")
      ], 10, xi)) : (p(), g("span", {
        key: 4,
        class: i(c.value)
      }, [
        F(v.$slots, "default")
      ], 2))
    ], 2));
  }
}), al = J(hi, {
  BreadcrumbItem: ki
}), Ci = al.BreadcrumbItem, rl = D({
  slots: {
    root: "relative w-full h-full flex",
    wrapper: "flex flex-grow",
    panel: "flex flex-grow overflow-auto",
    gutter: [
      "flex items-center justify-center",
      "bg-gray-100 dark:bg-gray-700",
      "transition-colors duration-200",
      "hover:bg-gray-200 dark:hover:bg-gray-600",
      "focus:outline-none focus:ring-2 focus:ring-blue-500 focus-visible:z-10"
    ],
    gutterHandle: [
      "flex items-center justify-center",
      "w-full h-full",
      "cursor-col-resize"
    ],
    gutterIcon: ["flex-shrink-0", "text-gray-400 dark:text-gray-500"]
  },
  variants: {
    direction: {
      horizontal: {
        root: "flex-row",
        gutter: "w-1 cursor-col-resize"
      },
      vertical: {
        root: "flex-col",
        gutter: "h-1 cursor-row-resize"
      }
    },
    size: {
      sm: {
        gutter: "horizontal:w-0.5 vertical:h-0.5"
      },
      md: {
        gutter: "horizontal:w-1 vertical:h-1"
      },
      lg: {
        gutter: "horizontal:w-2 vertical:h-2"
      }
    },
    solid: {
      true: {
        gutter: "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
      }
    },
    dotted: {
      true: {
        gutter: "border-dotted border-gray-300 dark:border-gray-600 bg-transparent"
      }
    },
    dashed: {
      true: {
        gutter: "border-dashed border-gray-300 dark:border-gray-600 bg-transparent"
      }
    },
    disabled: {
      true: {
        gutter: "cursor-default opacity-50",
        gutterHandle: "cursor-default"
      }
    }
  },
  compoundVariants: [
    {
      direction: "horizontal",
      dotted: !0,
      class: {
        gutter: "border-l border-r"
      }
    },
    {
      direction: "vertical",
      dotted: !0,
      class: {
        gutter: "border-t border-b"
      }
    },
    {
      direction: "horizontal",
      dashed: !0,
      class: {
        gutter: "border-l border-r"
      }
    },
    {
      direction: "vertical",
      dashed: !0,
      class: {
        gutter: "border-t border-b"
      }
    }
  ],
  defaultVariants: {
    direction: "horizontal",
    size: "md",
    solid: !1,
    dotted: !1,
    dashed: !1,
    disabled: !1
  }
}), Si = {
  "update:panels": (l) => Array.isArray(l),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  "resize-start": (l) => !0,
  resize: (l) => Array.isArray(l),
  "resize-end": (l) => Array.isArray(l),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  collapse: (l, a) => !0,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  expand: (l, a) => !0
}, zi = {
  "update:size": (l) => typeof l == "string",
  "update:collapsed": (l) => typeof l == "boolean"
}, $i = (l, a) => {
  const e = R(null), t = R([]), r = R([]), o = R(!1), s = R(0), u = R(-1), n = cl(l.panels || []), f = d(() => l.direction !== "vertical"), y = (B, A) => {
    t.value[A] = B;
  }, C = (B, A) => {
    r.value[A] = B;
  }, S = () => {
    if (!e.value || t.value.length === 0) return;
    const B = f.value ? e.value.clientWidth : e.value.clientHeight;
    if (!l.panels || l.panels.length === 0) {
      const A = `${100 / t.value.length}%`;
      t.value.forEach((V, E) => {
        n[E] = n[E] || {}, n[E].size = A, n[E].resizable = n[E].resizable !== !1;
      });
      return;
    }
    l.panels.forEach((A, V) => {
      if (V < t.value.length)
        if (n[V] = { ...A }, A.size && A.size.endsWith("%")) {
          const E = parseFloat(A.size) / 100, P = Math.floor(B * E);
          t.value[V].style[f.value ? "width" : "height"] = `${P}px`;
        } else A.size && (t.value[V].style[f.value ? "width" : "height"] = A.size);
    }), a("update:panels", [...n]);
  }, c = (B, A) => {
    if (!l.resizable) return;
    const V = A, E = A + 1, P = n[V]?.resizable !== !1, j = n[E]?.resizable !== !1;
    if (!(!P && !j)) {
      if (B.preventDefault(), o.value = !0, u.value = A, B instanceof MouseEvent)
        s.value = f.value ? B.clientX : B.clientY;
      else {
        const O = B.touches[0];
        s.value = f.value ? O.clientX : O.clientY;
      }
      window.addEventListener("mousemove", v), window.addEventListener("mouseup", m), window.addEventListener("touchmove", k), window.addEventListener("touchend", w), a("resize-start", B);
    }
  }, v = (B) => {
    o.value && b(f.value ? B.clientX : B.clientY);
  }, k = (B) => {
    if (!o.value) return;
    const A = B.touches[0];
    b(f.value ? A.clientX : A.clientY);
  }, b = (B) => {
    if (!o.value || !e.value) return;
    const A = u.value, V = A, E = A + 1;
    if (V < 0 || E >= t.value.length || !t.value[V] || !t.value[E])
      return;
    const P = t.value[V], j = t.value[E], O = B - s.value;
    if (O === 0) return;
    const H = f.value ? P.offsetWidth : P.offsetHeight, M = f.value ? j.offsetWidth : j.offsetHeight, _ = n[V]?.minSize ? T(
      n[V].minSize,
      e.value,
      f.value
    ) : 0, I = n[E]?.minSize ? T(
      n[E].minSize,
      e.value,
      f.value
    ) : 0, W = n[V]?.maxSize ? T(
      n[V].maxSize,
      e.value,
      f.value
    ) : 1 / 0, G = n[E]?.maxSize ? T(
      n[E].maxSize,
      e.value,
      f.value
    ) : 1 / 0;
    let Y = H + O, Z = M - O;
    Y < _ ? (Y = _, Z = H + M - _) : Y > W && (Y = W, Z = H + M - W), Z < I ? (Z = I, Y = H + M - I) : Z > G && (Z = G, Y = H + M - G), f.value ? (P.style.width = `${Y}px`, j.style.width = `${Z}px`) : (P.style.height = `${Y}px`, j.style.height = `${Z}px`), n[V] = {
      ...n[V],
      size: `${Y}px`
    }, n[E] = {
      ...n[E],
      size: `${Z}px`
    }, s.value = B, a("resize", [...n]);
  }, m = () => {
    z();
  }, w = () => {
    z();
  }, z = () => {
    o.value && (o.value = !1, u.value = -1, window.removeEventListener("mousemove", v), window.removeEventListener("mouseup", m), window.removeEventListener("touchmove", k), window.removeEventListener("touchend", w), a("resize-end", [...n]), a("update:panels", [...n]));
  }, $ = (B) => {
    if (B < 0 || B >= t.value.length) return;
    const A = t.value[B], V = n[B];
    if (!V.collapsible) return;
    if (!V.collapsed)
      V._savedSize = V.size, f.value ? A.style.width = "0" : A.style.height = "0", V.size = "0", V.collapsed = !0, a("collapse", B, !0);
    else {
      const P = V._savedSize || "1fr";
      f.value ? A.style.width = P : A.style.height = P, V.size = P, V.collapsed = !1, a("expand", B, !1);
    }
    a("update:panels", [...n]);
  }, T = (B, A, V) => {
    if (B.endsWith("px"))
      return parseFloat(B);
    if (B.endsWith("%")) {
      const E = V ? A.clientWidth : A.clientHeight;
      return parseFloat(B) / 100 * E;
    } else if (B.endsWith("rem")) {
      const E = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      return parseFloat(B) * E;
    } else if (B.endsWith("em")) {
      const E = parseFloat(getComputedStyle(A).fontSize);
      return parseFloat(B) * E;
    } else {
      if (B.endsWith("vh"))
        return parseFloat(B) / 100 * window.innerHeight;
      if (B.endsWith("vw"))
        return parseFloat(B) / 100 * window.innerWidth;
    }
    return parseFloat(B) || 0;
  };
  return be(() => {
    S(), window.addEventListener("resize", S);
  }), Ee(() => {
    window.removeEventListener("resize", S), window.removeEventListener("mousemove", v), window.removeEventListener("mouseup", m), window.removeEventListener("touchmove", k), window.removeEventListener("touchend", w);
  }), {
    rootRef: e,
    panelRefs: t,
    gutterRefs: r,
    isResizing: o,
    panelSizes: n,
    isHorizontal: f,
    registerPanel: y,
    registerGutter: C,
    onGutterMouseDown: c,
    toggleCollapse: $,
    initPanelSizes: S
  };
}, Bi = ["aria-orientation"], Vi = ["onMousedown", "onTouchstart", "aria-label", "aria-controls", "onKeydown"], Ii = /* @__PURE__ */ q({
  __name: "index",
  props: {
    direction: { default: "horizontal" },
    size: { default: "md" },
    panels: { default: () => [] },
    solid: { type: Boolean, default: !1 },
    resizable: { type: Boolean, default: !0 },
    dotted: { type: Boolean, default: !1 },
    dashed: { type: Boolean, default: !1 },
    showIndicator: { type: Boolean, default: !0 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: Si,
  setup(l, { expose: a, emit: e }) {
    const t = l, r = e, {
      rootRef: o,
      panelSizes: s,
      isHorizontal: u,
      registerPanel: n,
      registerGutter: f,
      onGutterMouseDown: y,
      toggleCollapse: C,
      initPanelSizes: S
    } = $i(t, r), c = d(() => {
      const m = Ge(), w = Object.keys(m).filter(($) => $.startsWith("panel-")).length / 2, z = t.panels?.length || 0;
      return Math.max(w, z, 2);
    }), v = (m) => {
      const w = s[m] || {}, z = u.value ? "width" : "height", $ = {};
      return w.size && ($[z] = w.size), w.collapsed && ($[z] = "0", $.overflow = "hidden"), $;
    }, k = (m, w, z) => {
      if (!t.resizable) return;
      m.preventDefault();
      const $ = m.shiftKey ? 10 : 1, T = s[w], B = s[w + 1];
      if (!T || !B) return;
      const A = parseFloat(T.size || "0"), V = parseFloat(B.size || "0"), E = $ * z;
      T.size = `${A + E}px`, B.size = `${V - E}px`, S();
    }, b = d(() => {
      if (t.unstyled)
        return {
          root: t.pt?.root || "",
          wrapper: t.pt?.wrapper || "",
          panel: t.pt?.panel || "",
          gutter: t.pt?.gutter || "",
          gutterHandle: t.pt?.gutterHandle || "",
          gutterIcon: t.pt?.gutterIcon || ""
        };
      const { root: m, wrapper: w, panel: z, gutter: $, gutterHandle: T, gutterIcon: B } = rl({
        direction: t.direction,
        size: t.size,
        solid: t.solid,
        dotted: t.dotted,
        dashed: t.dashed,
        disabled: !t.resizable
      });
      return {
        root: m(),
        wrapper: w(),
        panel: z(),
        gutter: $(),
        gutterHandle: T(),
        gutterIcon: B()
      };
    });
    return a({
      toggleCollapse: C,
      initPanelSizes: S
    }), Re("splitter", {
      registerPanel: n,
      direction: t.direction
    }), (m, w) => (p(), g("div", {
      ref_key: "rootRef",
      ref: o,
      class: i(b.value.root),
      role: "separator",
      "aria-orientation": t.direction === "vertical" ? "horizontal" : "vertical"
    }, [
      (p(!0), g(ee, null, oe(c.value, (z, $) => (p(), g(ee, { key: $ }, [
        $ < c.value ? (p(), g("div", {
          key: 0,
          ref_for: !0,
          ref: (T) => T && h(n)(T, $),
          class: i(b.value.wrapper),
          style: le(v($))
        }, [
          F(m.$slots, `panel-${$}`, {}, () => [
            x("div", {
              class: i(b.value.panel)
            }, [
              F(m.$slots, `panel-${$}-content`, {}, () => [
                de("Panel " + N($ + 1), 1)
              ])
            ], 2)
          ])
        ], 6)) : L("", !0),
        $ < c.value - 1 ? (p(), g("div", {
          key: 1,
          ref_for: !0,
          ref: (T) => T && h(f)(T, $),
          class: i(b.value.gutter),
          onMousedown: (T) => h(y)(T, $),
          onTouchstart: (T) => h(y)(T, $),
          tabindex: "0",
          "aria-label": `调整${h(u) ? "宽度" : "高度"}`,
          "aria-controls": `panel-${$},panel-${$ + 1}`,
          onKeydown: [
            ze((T) => k(T, $, -1), ["left"]),
            ze((T) => k(T, $, 1), ["right"]),
            ze((T) => k(T, $, -1), ["up"]),
            ze((T) => k(T, $, 1), ["down"])
          ]
        }, [
          F(m.$slots, `gutter-${$}`, {}, () => [
            x("div", {
              class: i(b.value.gutterHandle)
            }, [
              F(m.$slots, `gutter-${$}-handle`, {}, () => [
                h(u) ? (p(), g("svg", {
                  key: 0,
                  class: i(b.value.gutterIcon),
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round"
                }, w[0] || (w[0] = [
                  x("line", {
                    x1: "12",
                    y1: "5",
                    x2: "12",
                    y2: "19"
                  }, null, -1),
                  x("line", {
                    x1: "8",
                    y1: "9",
                    x2: "8",
                    y2: "15"
                  }, null, -1),
                  x("line", {
                    x1: "16",
                    y1: "9",
                    x2: "16",
                    y2: "15"
                  }, null, -1)
                ]), 2)) : (p(), g("svg", {
                  key: 1,
                  class: i(b.value.gutterIcon),
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round"
                }, w[1] || (w[1] = [
                  x("line", {
                    x1: "5",
                    y1: "12",
                    x2: "19",
                    y2: "12"
                  }, null, -1),
                  x("line", {
                    x1: "9",
                    y1: "8",
                    x2: "15",
                    y2: "8"
                  }, null, -1),
                  x("line", {
                    x1: "9",
                    y1: "16",
                    x2: "15",
                    y2: "16"
                  }, null, -1)
                ]), 2))
              ])
            ], 2)
          ])
        ], 42, Vi)) : L("", !0)
      ], 64))), 128))
    ], 10, Bi));
  }
}), Mi = /* @__PURE__ */ q({
  __name: "SplitterPanel",
  props: {
    size: { default: "1fr" },
    minSize: { default: "0" },
    maxSize: { default: "1fr" },
    resizable: { type: Boolean, default: !0 },
    collapsible: { type: Boolean, default: !1 },
    collapsed: { type: Boolean, default: !1 },
    unstyled: { type: Boolean },
    pt: {}
  },
  emits: zi,
  setup(l, { emit: a }) {
    const e = l, t = a, r = R(null), o = Te("splitter", {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      registerPanel: (n, f) => {
      },
      direction: "horizontal",
      index: -1
    });
    Q(
      () => e.size,
      (n) => {
        n !== void 0 && r.value && (o.direction === "horizontal" ? r.value.style.width = n : r.value.style.height = n);
      }
    ), Q(
      () => e.collapsed,
      (n) => {
        t("update:collapsed", n);
      }
    ), be(() => {
      r.value && o.index >= 0 && o.registerPanel(r.value, o.index);
    });
    const s = d(() => e.unstyled ? e.pt?.root || "" : rl().panel()), u = d(() => e.unstyled ? e.pt?.content || "" : "h-full w-full");
    return (n, f) => (p(), g("div", {
      ref_key: "panelRef",
      ref: r,
      class: i(s.value)
    }, [
      x("div", {
        class: i(u.value)
      }, [
        F(n.$slots, "default")
      ], 2)
    ], 2));
  }
}), Di = J(Ii), Ti = J(Mi), Ri = (l, a) => {
  const e = R(l.modelValue?.[0] || null), t = R(l.modelValue?.[1] || null), r = R((e.value || /* @__PURE__ */ new Date()).getMonth()), o = R((e.value || /* @__PURE__ */ new Date()).getFullYear()), s = R("start"), u = d(() => {
    const v = l.locale || "default", k = l.firstDayOfWeek || 0, b = [];
    for (let m = 0; m < 7; m++) {
      const w = (m + k) % 7;
      b.push(
        new Intl.DateTimeFormat(v, { weekday: "short" }).format(
          new Date(2021, 0, w + 3)
          // 2021-01-03 is a Sunday
        )
      );
    }
    return b;
  }), n = d(() => {
    const v = o.value, k = r.value, b = new Date(v, k, 1).getDay(), m = new Date(v, k + 1, 0).getDate(), w = l.firstDayOfWeek || 0, z = [], $ = new Date(v, k, 0).getDate(), T = (b - w + 7) % 7;
    for (let V = $ - T + 1; V <= $; V++)
      z.push({
        date: new Date(v, k - 1, V),
        day: V,
        isCurrentMonth: !1,
        isToday: !1,
        isSelected: !1,
        isRangeStart: !1,
        isRangeEnd: !1,
        isInRange: !1,
        isDisabled: !1
      });
    const B = /* @__PURE__ */ new Date();
    for (let V = 1; V <= m; V++) {
      const E = new Date(v, k, V), P = B.getDate() === V && B.getMonth() === k && B.getFullYear() === v, j = e.value && E.getDate() === e.value.getDate() && E.getMonth() === e.value.getMonth() && E.getFullYear() === e.value.getFullYear(), O = t.value && E.getDate() === t.value.getDate() && E.getMonth() === t.value.getMonth() && E.getFullYear() === t.value.getFullYear(), H = e.value && t.value && E > e.value && E < t.value, M = j || O, _ = l.disabled || l.min && E < l.min || l.max && E > l.max;
      z.push({
        date: E,
        day: V,
        isCurrentMonth: !0,
        isToday: P,
        isSelected: M,
        isRangeStart: j,
        isRangeEnd: O,
        isInRange: H,
        isDisabled: _
      });
    }
    const A = 42 - z.length;
    for (let V = 1; V <= A; V++) {
      const E = new Date(v, k + 1, V), P = e.value && E.getDate() === e.value.getDate() && E.getMonth() === e.value.getMonth() && E.getFullYear() === e.value.getFullYear(), j = t.value && E.getDate() === t.value.getDate() && E.getMonth() === t.value.getMonth() && E.getFullYear() === t.value.getFullYear(), O = e.value && t.value && E > e.value && E < t.value, H = P || j;
      z.push({
        date: E,
        day: V,
        isCurrentMonth: !1,
        isToday: !1,
        isSelected: H,
        isRangeStart: P,
        isRangeEnd: j,
        isInRange: O,
        isDisabled: !1
      });
    }
    return z;
  }), f = d(() => {
    const v = l.locale || "default";
    return new Intl.DateTimeFormat(v, { month: "long" }).format(
      new Date(o.value, r.value)
    );
  }), y = () => {
    r.value === 0 ? (r.value = 11, o.value--) : r.value--;
  }, C = () => {
    r.value === 11 ? (r.value = 0, o.value++) : r.value++;
  }, S = (v) => {
    l.disabled || l.readonly || l.min && v < l.min || l.max && v > l.max || (s.value === "start" ? (e.value = v, t.value = null, s.value = "end") : (e.value && v < e.value ? (t.value = e.value, e.value = v) : t.value = v, s.value = "start"), a("update:modelValue", [e.value, t.value]), a("change", [e.value, t.value]));
  }, c = () => {
    e.value = null, t.value = null, s.value = "start", a("update:modelValue", [null, null]), a("change", [null, null]);
  };
  return Q(
    () => l.modelValue,
    (v) => {
      v && (e.value = v[0], t.value = v[1], e.value && (r.value = e.value.getMonth(), o.value = e.value.getFullYear()), s.value = t.value ? "start" : "end");
    }
  ), {
    startDate: e,
    endDate: t,
    currentMonth: r,
    currentYear: o,
    selectionMode: s,
    weekdays: u,
    daysInMonth: n,
    monthName: f,
    prevMonth: y,
    nextMonth: C,
    selectDate: S,
    resetSelection: c
  };
}, Ei = D({
  base: "w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), Li = D({
  base: "flex items-center justify-between mb-4"
}), Ai = D({
  base: "text-lg font-medium"
}), Oi = D({
  base: "flex items-center space-x-1"
}), Pi = D({
  base: "p-1 rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
}), ji = D({
  base: "grid grid-cols-7 mb-1"
}), Wi = D({
  base: "text-center text-sm font-medium text-gray-500 py-2"
}), Fi = D({
  base: "grid grid-cols-7 gap-1"
}), xe = D({
  base: "flex items-center justify-center h-9 w-9 rounded-md text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
  variants: {
    isToday: {
      true: "border border-blue-500"
    },
    isSelected: {
      true: "bg-blue-500 text-white hover:bg-blue-600"
    },
    isRangeStart: {
      true: "bg-blue-500 text-white hover:bg-blue-600 rounded-r-none"
    },
    isRangeEnd: {
      true: "bg-blue-500 text-white hover:bg-blue-600 rounded-l-none"
    },
    isInRange: {
      true: "bg-blue-100 hover:bg-blue-200 rounded-none"
    },
    isDisabled: {
      true: "text-gray-300 cursor-not-allowed"
    },
    isAdjacent: {
      true: "text-gray-400"
    }
  },
  compoundVariants: [
    {
      isSelected: !1,
      isRangeStart: !1,
      isRangeEnd: !1,
      isInRange: !1,
      isDisabled: !1,
      isAdjacent: !1,
      class: "hover:bg-gray-100 cursor-pointer"
    }
  ]
}), _i = {
  "update:modelValue": (l) => Array.isArray(l) && (l[0] === null || l[0] instanceof Date) && (l[1] === null || l[1] instanceof Date),
  change: (l) => Array.isArray(l) && (l[0] === null || l[0] instanceof Date) && (l[1] === null || l[1] instanceof Date)
}, Hi = {
  key: 0,
  class: "text-sm text-blue-500 ml-2"
}, Ni = ["disabled"], Gi = ["disabled"], Ki = ["onClick", "disabled"], Yi = {
  key: 0,
  class: "mt-4 flex justify-between"
}, Ui = { class: "ml-1 font-medium" }, Xi = { class: "ml-1 font-medium" }, qi = /* @__PURE__ */ q({
  __name: "index",
  props: {
    modelValue: {},
    min: {},
    max: {},
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    firstDayOfWeek: { default: 0 },
    locale: {},
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: _i,
  setup(l, { emit: a }) {
    const e = a, t = l, {
      startDate: r,
      endDate: o,
      currentYear: s,
      selectionMode: u,
      weekdays: n,
      daysInMonth: f,
      monthName: y,
      prevMonth: C,
      nextMonth: S,
      selectDate: c,
      resetSelection: v
    } = Ri(t, e), k = (m) => {
      const w = t.locale || "default";
      return new Intl.DateTimeFormat(w).format(m);
    }, b = d(() => ({
      root: t.unstyled ? t.pt?.root || "" : Ei({ unstyled: t.unstyled, class: t.pt?.root }),
      header: t.unstyled ? t.pt?.header || "" : Li({ class: t.pt?.header }),
      title: t.unstyled ? t.pt?.title || "" : Ai({ class: t.pt?.title }),
      navigation: t.unstyled ? t.pt?.navigation || "" : Oi({ class: t.pt?.navigation }),
      navButton: t.unstyled ? t.pt?.navButton || "" : Pi({ class: t.pt?.navButton }),
      weekdays: t.unstyled ? t.pt?.weekdays || "" : ji({ class: t.pt?.weekdays }),
      weekday: t.unstyled ? t.pt?.weekday || "" : Wi({ class: t.pt?.weekday }),
      days: t.unstyled ? t.pt?.days || "" : Fi({ class: t.pt?.days }),
      day: t.unstyled ? t.pt?.day || "" : xe({ class: t.pt?.day }),
      today: t.unstyled ? t.pt?.today || "" : xe({ isToday: !0, class: t.pt?.today }).split(" ").filter((m) => !xe().includes(m)).join(" "),
      selected: t.unstyled ? t.pt?.selected || "" : xe({ isSelected: !0, class: t.pt?.selected }).split(" ").filter((m) => !xe().includes(m)).join(" "),
      rangeStart: t.unstyled ? t.pt?.rangeStart || "" : xe({
        isRangeStart: !0,
        class: t.pt?.rangeStart
      }).split(" ").filter((m) => !xe().includes(m)).join(" "),
      rangeEnd: t.unstyled ? t.pt?.rangeEnd || "" : xe({ isRangeEnd: !0, class: t.pt?.rangeEnd }).split(" ").filter((m) => !xe().includes(m)).join(" "),
      inRange: t.unstyled ? t.pt?.inRange || "" : xe({ isInRange: !0, class: t.pt?.inRange }).split(" ").filter((m) => !xe().includes(m)).join(" "),
      disabled: t.unstyled ? t.pt?.disabled || "" : xe({ isDisabled: !0, class: t.pt?.disabled }).split(" ").filter((m) => !xe().includes(m)).join(" "),
      adjacent: t.unstyled ? t.pt?.adjacent || "" : xe({ isAdjacent: !0, class: t.pt?.adjacent }).split(" ").filter((m) => !xe().includes(m)).join(" ")
    }));
    return (m, w) => (p(), g("div", {
      class: i(b.value.root)
    }, [
      x("div", {
        class: i(b.value.header)
      }, [
        x("div", {
          class: i(b.value.title)
        }, [
          de(N(h(y)) + " " + N(h(s)) + " ", 1),
          h(u) === "end" ? (p(), g("span", Hi, " (Select end date) ")) : L("", !0)
        ], 2),
        x("div", {
          class: i(b.value.navigation)
        }, [
          x("button", {
            class: i(b.value.navButton),
            onClick: w[0] || (w[0] = //@ts-ignore
            (...z) => h(C) && h(C)(...z)),
            disabled: m.disabled || m.readonly
          }, w[3] || (w[3] = [
            x("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [
              x("path", { d: "m15 18-6-6 6-6" })
            ], -1)
          ]), 10, Ni),
          x("button", {
            class: i(b.value.navButton),
            onClick: w[1] || (w[1] = //@ts-ignore
            (...z) => h(S) && h(S)(...z)),
            disabled: m.disabled || m.readonly
          }, w[4] || (w[4] = [
            x("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [
              x("path", { d: "m9 18 6-6-6-6" })
            ], -1)
          ]), 10, Gi)
        ], 2)
      ], 2),
      x("div", {
        class: i(b.value.weekdays)
      }, [
        (p(!0), g(ee, null, oe(h(n), (z, $) => (p(), g("div", {
          key: $,
          class: i(b.value.weekday)
        }, N(z), 3))), 128))
      ], 2),
      x("div", {
        class: i(b.value.days)
      }, [
        (p(!0), g(ee, null, oe(h(f), (z, $) => (p(), g("button", {
          key: $,
          class: i([
            b.value.day,
            z.isToday ? b.value.today : "",
            z.isSelected ? b.value.selected : "",
            z.isRangeStart ? b.value.rangeStart : "",
            z.isRangeEnd ? b.value.rangeEnd : "",
            z.isInRange ? b.value.inRange : "",
            z.isDisabled ? b.value.disabled : "",
            z.isCurrentMonth ? "" : b.value.adjacent
          ]),
          onClick: (T) => h(c)(z.date),
          disabled: z.isDisabled || m.disabled || m.readonly
        }, N(z.day), 11, Ki))), 128))
      ], 2),
      h(r) || h(o) ? (p(), g("div", Yi, [
        x("div", null, [
          w[5] || (w[5] = x("span", { class: "text-sm text-gray-500" }, "Start:", -1)),
          x("span", Ui, N(h(r) ? k(h(r)) : "-"), 1)
        ]),
        x("div", null, [
          w[6] || (w[6] = x("span", { class: "text-sm text-gray-500" }, "End:", -1)),
          x("span", Xi, N(h(o) ? k(h(o)) : "-"), 1)
        ]),
        x("button", {
          class: "text-sm text-red-500 hover:text-red-700",
          onClick: w[2] || (w[2] = //@ts-ignore
          (...z) => h(v) && h(v)(...z))
        }, " Reset ")
      ])) : L("", !0)
    ], 2));
  }
}), Zi = J(qi), Ji = D({
  base: "w-full",
  variants: {
    variant: {
      default: "",
      bordered: "border border-gray-200 divide-y divide-gray-200",
      elevated: "shadow-md divide-y divide-gray-200"
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-xl"
    },
    bordered: {
      true: "border border-gray-200",
      false: ""
    }
  },
  defaultVariants: {
    variant: "default",
    radius: "md",
    bordered: !0
  }
}), Qi = D({
  base: "w-full"
}), eu = D({
  base: ""
}), tu = D({
  base: "flex w-full items-center justify-between py-4 px-5 text-left text-base font-medium focus:outline-none",
  variants: {
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: "cursor-pointer"
    }
  },
  defaultVariants: {
    disabled: !1
  }
}), lu = D({
  base: "text-base font-medium"
}), au = D({
  base: "text-gray-500 transition-transform duration-200",
  variants: {
    expanded: {
      true: "rotate-180",
      false: ""
    }
  },
  defaultVariants: {
    expanded: !1
  }
}), ru = D({
  base: "overflow-hidden",
  variants: {
    animated: {
      true: "transition-all duration-300 ease-out",
      false: ""
    },
    expanded: {
      true: "",
      false: "h-0"
    }
  },
  defaultVariants: {
    animated: !0,
    expanded: !1
  }
}), ou = D({
  base: "py-4 px-5"
}), su = {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  "update:modelValue": (l) => !0,
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  change: (l) => !0
}, nu = {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  click: (l) => !0,
  toggle: (l) => typeof l == "boolean"
}, iu = /* @__PURE__ */ q({
  name: "Accordion",
  __name: "accordion",
  props: {
    multiple: { type: Boolean, default: !1 },
    modelValue: {},
    variant: { default: "default" },
    radius: { default: "md" },
    bordered: { type: Boolean, default: !0 },
    animated: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: su,
  setup(l, { emit: a }) {
    const e = l, t = a, r = R(
      Array.isArray(e.modelValue) ? e.modelValue : e.modelValue ? [e.modelValue] : []
    );
    Q(
      () => e.modelValue,
      (n) => {
        Array.isArray(n) ? r.value = n : n ? r.value = [n] : r.value = [];
      }
    );
    const o = d(() => e.unstyled ? e.pt?.root || "" : Ji({
      variant: e.variant,
      radius: e.radius,
      bordered: e.bordered,
      class: e.pt?.root
    })), s = (n, f) => {
      let y = [...r.value];
      if (f ? e.multiple ? y.includes(n) || y.push(n) : y = [n] : y = y.filter((C) => C !== n), r.value = y, e.multiple)
        t("update:modelValue", y), t("change", y);
      else {
        const C = y.length > 0 ? y[0] : void 0;
        t("update:modelValue", C), t("change", C);
      }
    }, u = (n) => r.value.includes(n);
    return Re("accordionContext", {
      disabled: d(() => e.disabled),
      animated: d(() => e.animated),
      toggleItem: s,
      isItemExpanded: u
    }), (n, f) => (p(), g("div", {
      class: i(o.value)
    }, [
      F(n.$slots, "default")
    ], 2));
  }
}), uu = ["aria-expanded", "aria-disabled"], du = /* @__PURE__ */ q({
  name: "AccordionItem",
  __name: "accordion-item",
  props: {
    value: {},
    header: {},
    disabled: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: nu,
  setup(l, { emit: a }) {
    const e = l, t = a, r = Te("accordionContext", {
      disabled: d(() => !1),
      animated: d(() => !0),
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
      toggleItem: (b, m) => {
      },
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
      isItemExpanded: (b) => !1
    }), o = d(
      () => e.disabled || r.disabled.value
    ), s = d(() => r.isItemExpanded(e.value)), u = R(null);
    Q(
      () => s.value,
      (b) => {
        if (!(!r.animated.value || !u.value))
          if (b) {
            const m = u.value;
            m.style.height = "0", m.style.height = `${m.scrollHeight}px`;
            const w = () => {
              s.value && (m.style.height = ""), m.removeEventListener("transitionend", w);
            };
            m.addEventListener("transitionend", w);
          } else {
            const m = u.value, w = m.offsetHeight;
            m.style.height = `${w}px`, m.style.height = "0";
          }
      }
    );
    const n = (b) => {
      if (o.value) return;
      t("click", b);
      const m = !s.value;
      r.toggleItem(e.value, m), t("toggle", m);
    }, f = d(() => e.unstyled ? e.pt?.root || "" : Qi({
      class: e.pt?.root
    })), y = d(() => e.unstyled ? e.pt?.header || "" : eu({
      class: e.pt?.header
    })), C = d(() => e.unstyled ? e.pt?.trigger || "" : tu({
      disabled: o.value,
      class: e.pt?.trigger
    })), S = d(() => e.unstyled ? e.pt?.title || "" : lu({
      class: e.pt?.title
    })), c = d(() => e.unstyled ? e.pt?.icon || "" : au({
      expanded: s.value,
      class: e.pt?.icon
    })), v = d(() => e.unstyled ? e.pt?.content || "" : ru({
      animated: r.animated.value,
      expanded: s.value,
      class: e.pt?.content
    })), k = d(() => e.unstyled ? e.pt?.contentInner || "" : ou({
      class: e.pt?.contentInner
    }));
    return be(() => {
      u.value && !s.value && (u.value.style.height = "0");
    }), (b, m) => (p(), g("div", {
      class: i(f.value)
    }, [
      x("div", {
        class: i(y.value)
      }, [
        x("button", {
          type: "button",
          class: i(C.value),
          "aria-expanded": s.value,
          "aria-disabled": o.value,
          onClick: n
        }, [
          x("div", {
            class: i(S.value)
          }, [
            F(b.$slots, "header", {}, () => [
              de(N(b.header), 1)
            ])
          ], 2),
          x("div", {
            class: i(c.value)
          }, [
            F(b.$slots, "icon", {}, () => [
              m[0] || (m[0] = x("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                x("polyline", { points: "6 9 12 15 18 9" })
              ], -1))
            ])
          ], 2)
        ], 10, uu)
      ], 2),
      x("div", {
        class: i(v.value),
        ref_key: "contentEl",
        ref: u
      }, [
        x("div", {
          class: i(k.value)
        }, [
          F(b.$slots, "default")
        ], 2)
      ], 2)
    ], 2));
  }
}), cu = J(iu), fu = J(du), pu = D({
  slots: {
    root: "relative inline-flex w-full",
    wrapper: "relative flex flex-wrap items-center gap-1 w-full rounded-md border border-gray-300 bg-white shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 dark:border-gray-600 dark:bg-gray-800",
    input: "flex-grow border-0 bg-transparent px-3 py-2 outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white dark:placeholder:text-gray-400",
    prefix: "flex items-center pl-3 text-gray-500 dark:text-gray-400",
    suffix: "flex items-center pr-3 text-gray-500 dark:text-gray-400",
    tag: "inline-flex items-center gap-1 bg-gray-100 rounded py-1 px-2 m-1 text-sm dark:bg-gray-700",
    tagClose: "cursor-pointer hover:text-blue-500 dark:hover:text-blue-400",
    count: "absolute right-2 -bottom-5 text-xs text-gray-500 dark:text-gray-400"
  },
  variants: {
    size: {
      small: {
        wrapper: "min-h-8 py-1 text-sm",
        input: "text-sm py-1",
        tag: "py-0.5 px-1.5 text-xs",
        prefix: "text-sm",
        suffix: "text-sm"
      },
      default: {
        wrapper: "min-h-10",
        input: "text-base py-2",
        tag: "py-1 px-2 text-sm"
      },
      large: {
        wrapper: "min-h-12 py-2 text-lg",
        input: "text-lg py-2",
        tag: "py-1.5 px-2.5 text-base",
        prefix: "text-lg",
        suffix: "text-lg"
      }
    },
    status: {
      error: {
        wrapper: "!border-red-500 !ring-red-500/30 focus-within:!ring-red-500/30"
      },
      warning: {
        wrapper: "!border-yellow-500 !ring-yellow-500/30 focus-within:!ring-yellow-500/30"
      },
      success: {
        wrapper: "!border-green-500 !ring-green-500/30 focus-within:!ring-green-500/30"
      }
    },
    disabled: {
      true: {
        wrapper: "bg-gray-100 dark:bg-gray-700",
        input: "cursor-not-allowed"
      }
    }
  },
  defaultVariants: {
    size: "default"
  }
}), gu = { key: 0 }, vu = ["onClick"], bu = ["placeholder", "disabled", "readonly", "autofocus", "onKeydown"], mu = { key: 0 }, yu = /* @__PURE__ */ q({
  __name: "index",
  props: {
    modelValue: { default: () => [] },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    size: { default: "default" },
    prefixIcon: {},
    suffixIcon: {},
    closable: { type: Boolean, default: !0 },
    maxCount: {},
    showCount: { type: Boolean, default: !1 },
    autofocus: { type: Boolean, default: !1 },
    status: {},
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: [
    "update:modelValue",
    "change",
    "focus",
    "blur",
    "add",
    "remove"
  ],
  setup(l, { emit: a }) {
    const e = l, t = a, r = R(null), o = R(""), s = R(!1), u = d(() => e.unstyled ? {
      root: () => e.pt?.root || "",
      wrapper: () => e.pt?.wrapper || "",
      input: () => e.pt?.input || "",
      prefix: () => e.pt?.prefix || "",
      suffix: () => e.pt?.suffix || "",
      tag: () => e.pt?.tag || "",
      tagClose: () => e.pt?.tagClose || "",
      count: () => e.pt?.count || ""
    } : pu({
      size: e.size,
      status: e.status,
      disabled: e.disabled
    })), n = () => {
      if (!o.value || e.disabled || e.readonly || e.maxCount && e.modelValue.length >= e.maxCount) return;
      const c = [...e.modelValue];
      c.includes(o.value) || (c.push(o.value), t("update:modelValue", c), t("change", c), t("add", o.value)), o.value = "";
    }, f = (c) => {
      if (e.disabled || e.readonly) return;
      const v = [...e.modelValue], k = v[c];
      v.splice(c, 1), t("update:modelValue", v), t("change", v), t("remove", k, c);
    }, y = () => {
      if (o.value === "" && e.modelValue.length > 0 && !e.disabled && !e.readonly) {
        const c = [...e.modelValue], v = c.length - 1, k = c[v];
        c.pop(), t("update:modelValue", c), t("change", c), t("remove", k, v);
      }
    }, C = (c) => {
      s.value = !0, t("focus", c);
    }, S = (c) => {
      s.value = !1, o.value && n(), t("blur", c);
    };
    return Q(
      () => e.autofocus,
      (c) => {
        c && r.value && r.value.focus();
      },
      { immediate: !0 }
    ), (c, v) => (p(), g("div", {
      class: i(u.value.root())
    }, [
      x("div", {
        class: i(u.value.wrapper())
      }, [
        c.$slots.prefix || c.prefixIcon ? (p(), g("div", {
          key: 0,
          class: i(u.value.prefix())
        }, [
          F(c.$slots, "prefix", {}, () => [
            c.prefixIcon ? (p(), g("span", gu, N(c.prefixIcon), 1)) : L("", !0)
          ])
        ], 2)) : L("", !0),
        (p(!0), g(ee, null, oe(c.modelValue, (k, b) => (p(), g("div", {
          key: b,
          class: i(u.value.tag())
        }, [
          de(N(k) + " ", 1),
          c.closable && !c.disabled && !c.readonly ? (p(), g("span", {
            key: 0,
            class: i(u.value.tagClose()),
            onClick: (m) => f(b)
          }, " × ", 10, vu)) : L("", !0)
        ], 2))), 128)),
        He(x("input", {
          ref_key: "inputRef",
          ref: r,
          class: i(u.value.input()),
          type: "text",
          placeholder: c.modelValue?.length ? "" : c.placeholder,
          disabled: c.disabled,
          readonly: c.readonly,
          autofocus: c.autofocus,
          "onUpdate:modelValue": v[0] || (v[0] = (k) => o.value = k),
          onKeydown: [
            ze(Ie(n, ["prevent"]), ["enter"]),
            ze(y, ["backspace"])
          ],
          onBlur: S,
          onFocus: C
        }, null, 42, bu), [
          [fl, o.value]
        ]),
        c.$slots.suffix || c.suffixIcon ? (p(), g("div", {
          key: 1,
          class: i(u.value.suffix())
        }, [
          F(c.$slots, "suffix", {}, () => [
            c.suffixIcon ? (p(), g("span", mu, N(c.suffixIcon), 1)) : L("", !0)
          ])
        ], 2)) : L("", !0),
        c.showCount && c.maxCount ? (p(), g("span", {
          key: 2,
          class: i(u.value.count())
        }, N(c.modelValue?.length || 0) + "/" + N(c.maxCount), 3)) : L("", !0)
      ], 2)
    ], 2));
  }
}), hu = J(yu), _e = D({
  slots: {
    root: "relative inline-block",
    trigger: "inline-flex",
    content: [
      "absolute z-50",
      "bg-white dark:bg-gray-800",
      "border border-gray-200 dark:border-gray-700",
      "rounded-md shadow-lg",
      "min-w-[10rem]",
      "overflow-hidden",
      "animate-dropdown"
    ],
    arrow: [
      "absolute",
      "w-3 h-3",
      "bg-white dark:bg-gray-800",
      "border-t border-l border-gray-200 dark:border-gray-700",
      "transform rotate-45",
      "-z-10"
    ],
    menu: "py-1",
    menuItem: [
      "flex items-center gap-2 w-full",
      "px-4 py-2",
      "text-sm text-gray-700 dark:text-gray-200",
      "hover:bg-gray-100 dark:hover:bg-gray-700",
      "focus:bg-gray-100 dark:focus:bg-gray-700",
      "focus:outline-none",
      "cursor-pointer",
      "transition-colors duration-150"
    ],
    menuItemSelected: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
    menuItemActive: "bg-gray-100 dark:bg-gray-700 font-medium",
    menuItemDisabled: "opacity-50 pointer-events-none cursor-not-allowed",
    menuItemIcon: "mr-2 flex-shrink-0",
    menuDivider: "h-px bg-gray-200 dark:bg-gray-700 my-1"
  },
  variants: {
    placement: {
      top: {
        content: "bottom-full mb-1",
        arrow: "bottom-[-6px] transform rotate-[-135deg]"
      },
      "top-start": {
        content: "bottom-full left-0 mb-1",
        arrow: "bottom-[-6px] left-4 transform rotate-[-135deg]"
      },
      "top-end": {
        content: "bottom-full right-0 mb-1",
        arrow: "bottom-[-6px] right-4 transform rotate-[-135deg]"
      },
      bottom: {
        content: "top-full mt-1",
        arrow: "top-[-6px]"
      },
      "bottom-start": {
        content: "top-full left-0 mt-1",
        arrow: "top-[-6px] left-4"
      },
      "bottom-end": {
        content: "top-full right-0 mt-1",
        arrow: "top-[-6px] right-4"
      },
      left: {
        content: "right-full top-1/2 -translate-y-1/2 mr-1",
        arrow: "right-[-6px] top-1/2 -translate-y-1/2 transform rotate-[135deg]"
      },
      "left-start": {
        content: "right-full top-0 mr-1",
        arrow: "right-[-6px] top-4 transform rotate-[135deg]"
      },
      "left-end": {
        content: "right-full bottom-0 mr-1",
        arrow: "right-[-6px] bottom-4 transform rotate-[135deg]"
      },
      right: {
        content: "left-full top-1/2 -translate-y-1/2 ml-1",
        arrow: "left-[-6px] top-1/2 -translate-y-1/2 transform rotate-[-45deg]"
      },
      "right-start": {
        content: "left-full top-0 ml-1",
        arrow: "left-[-6px] top-4 transform rotate-[-45deg]"
      },
      "right-end": {
        content: "left-full bottom-0 ml-1",
        arrow: "left-[-6px] bottom-4 transform rotate-[-45deg]"
      }
    },
    size: {
      sm: {
        content: "text-xs",
        menuItem: "py-1"
      },
      md: {
        content: "text-sm",
        menuItem: "py-2"
      },
      lg: {
        content: "text-base",
        menuItem: "py-2.5"
      }
    },
    disabled: {
      true: {
        trigger: "opacity-50 pointer-events-none cursor-not-allowed"
      }
    }
  },
  defaultVariants: {
    placement: "bottom",
    size: "md",
    disabled: !1
  }
}), wu = {
  "update:visible": (l) => typeof l == "boolean",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  select: (l, a) => !0,
  show: () => !0,
  hide: () => !0
}, xu = {
  click: (l) => l instanceof MouseEvent
}, ku = (l, a) => {
  const e = R(l.visible || !1), t = R(null), r = R(null), o = `dropdown-${Math.random().toString(36).slice(2, 11)}`;
  let s = null, u = null;
  Q(
    () => l.visible,
    (v) => {
      v !== void 0 && (e.value = v);
    }
  ), Q(
    () => e.value,
    (v) => {
      a("update:visible", v), a(v ? "show" : "hide");
    }
  );
  const n = () => {
    l.disabled || ((l.trigger === "hover" || l.trigger === "focus") && l.showDelay ? (clearTimeout(u), s = window.setTimeout(() => {
      e.value = !0;
    }, l.showDelay)) : e.value = !0);
  }, f = () => {
    l.trigger !== "manual" && ((l.trigger === "hover" || l.trigger === "focus") && l.hideDelay ? (clearTimeout(s), u = window.setTimeout(() => {
      e.value = !1;
    }, l.hideDelay)) : e.value = !1);
  }, y = () => {
    l.disabled || l.trigger !== "manual" && (e.value = !e.value);
  }, C = (v) => {
    if (!l.closeOnClickOutside || !e.value || l.trigger === "manual") return;
    const k = v.target;
    r.value && !r.value.contains(k) && t.value && !t.value.contains(k) && f();
  }, S = (v, k) => {
    l.closeOnSelect && l.trigger !== "manual" && f(), a("select", v, k);
  }, c = (v, k) => {
    v.disabled || v.divider || v.value !== void 0 && S(v.value, k);
  };
  return be(() => {
    l.closeOnClickOutside && document.addEventListener("click", C);
  }), Ee(() => {
    document.removeEventListener("click", C), s && clearTimeout(s), u && clearTimeout(u);
  }), {
    isVisible: e,
    triggerRef: t,
    contentRef: r,
    dropdownId: o,
    show: n,
    hide: f,
    toggle: y,
    handleItemClick: S,
    handleOptionClick: c
  };
}, Cu = ["aria-expanded", "aria-controls"], Su = ["id"], zu = ["onClick", "aria-disabled"], $u = /* @__PURE__ */ q({
  __name: "index",
  props: {
    visible: { type: Boolean, default: !1 },
    options: { default: () => [] },
    trigger: { default: "click" },
    placement: { default: "bottom" },
    disabled: { type: Boolean, default: !1 },
    size: { default: "md" },
    arrow: { type: Boolean, default: !1 },
    showDelay: { default: 100 },
    hideDelay: { default: 100 },
    closeOnClickOutside: { type: Boolean, default: !0 },
    closeOnSelect: { type: Boolean, default: !0 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: wu,
  setup(l, { expose: a, emit: e }) {
    const t = l, r = e, {
      isVisible: o,
      triggerRef: s,
      contentRef: u,
      dropdownId: n,
      show: f,
      hide: y,
      toggle: C,
      handleItemClick: S,
      handleOptionClick: c
    } = ku(t, r), v = d(() => {
      if (t.unstyled)
        return {
          root: t.pt?.root || "",
          trigger: t.pt?.trigger || "",
          content: t.pt?.content || "",
          arrow: t.pt?.arrow || "",
          menu: t.pt?.menu || "",
          menuItem: t.pt?.menuItem || "",
          menuItemSelected: t.pt?.menuItemSelected || "",
          menuItemDisabled: t.pt?.menuItemDisabled || "",
          menuItemIcon: t.pt?.menuItemIcon || "",
          menuDivider: t.pt?.menuDivider || ""
        };
      const {
        root: k,
        trigger: b,
        content: m,
        arrow: w,
        menu: z,
        menuItem: $,
        menuItemSelected: T,
        menuItemActive: B,
        menuItemDisabled: A,
        menuItemIcon: V,
        menuDivider: E
      } = _e({
        placement: t.placement,
        size: t.size,
        disabled: t.disabled
      });
      return {
        root: k(),
        trigger: b(),
        content: m(),
        arrow: w(),
        menu: z(),
        menuItem: $(),
        menuItemSelected: T(),
        menuItemActive: B(),
        menuItemDisabled: A(),
        menuItemIcon: V(),
        menuDivider: E()
      };
    });
    return a({
      show: f,
      hide: y,
      toggle: C
    }), Re("dropdown", {
      handleItemClick: S,
      closeOnSelect: t.closeOnSelect
    }), (k, b) => (p(), g("div", {
      class: i(v.value.root)
    }, [
      x("div", {
        ref_key: "triggerRef",
        ref: s,
        class: i(v.value.trigger),
        onClick: b[0] || (b[0] = (m) => k.trigger === "click" && h(C)()),
        onMouseenter: b[1] || (b[1] = (m) => k.trigger === "hover" && h(f)()),
        onMouseleave: b[2] || (b[2] = (m) => k.trigger === "hover" && h(y)()),
        onFocus: b[3] || (b[3] = (m) => k.trigger === "focus" && h(f)()),
        onBlur: b[4] || (b[4] = (m) => k.trigger === "focus" && h(y)()),
        onKeydown: [
          b[5] || (b[5] = ze(
            //@ts-ignore
            (...m) => h(y) && h(y)(...m),
            ["esc"]
          )),
          b[6] || (b[6] = ze(Ie((m) => k.trigger === "click" && h(C)(), ["prevent"]), ["space"])),
          b[7] || (b[7] = ze((m) => k.trigger === "click" && h(C)(), ["enter"]))
        ],
        tabindex: "0",
        role: "button",
        "aria-haspopup": !0,
        "aria-expanded": h(o),
        "aria-controls": h(n)
      }, [
        F(k.$slots, "trigger")
      ], 42, Cu),
      De(rt, { name: "dropdown" }, {
        default: Ne(() => [
          h(o) ? (p(), g("div", {
            key: 0,
            ref_key: "contentRef",
            ref: u,
            id: h(n),
            class: i(v.value.content),
            onMouseenter: b[8] || (b[8] = (m) => k.trigger === "hover" && h(f)()),
            onMouseleave: b[9] || (b[9] = (m) => k.trigger === "hover" && h(y)()),
            role: "menu"
          }, [
            k.arrow ? (p(), g("div", {
              key: 0,
              class: i(v.value.arrow)
            }, null, 2)) : L("", !0),
            x("div", {
              class: i(v.value.menu)
            }, [
              k.options && k.options.length ? (p(!0), g(ee, { key: 0 }, oe(k.options, (m, w) => (p(), g(ee, { key: w }, [
                m.divider ? (p(), g("div", {
                  key: 0,
                  class: i(v.value.menuDivider),
                  role: "separator"
                }, null, 2)) : (p(), g("div", {
                  key: 1,
                  class: i([
                    v.value.menuItem,
                    m.disabled && v.value.menuItemDisabled
                  ]),
                  onClick: (z) => !m.disabled && h(c)(m, z),
                  role: "menuitem",
                  "aria-disabled": m.disabled
                }, [
                  m.icon ? (p(), g("span", {
                    key: 0,
                    class: i(v.value.menuItemIcon)
                  }, N(m.icon), 3)) : L("", !0),
                  x("span", null, N(m.label), 1)
                ], 10, zu))
              ], 64))), 128)) : F(k.$slots, "default", { key: 1 })
            ], 2)
          ], 42, Su)) : L("", !0)
        ]),
        _: 3
      })
    ], 2));
  }
}), Bu = ["aria-disabled"], Vu = /* @__PURE__ */ q({
  __name: "DropdownItem",
  props: {
    value: {},
    label: {},
    disabled: { type: Boolean, default: !1 },
    active: { type: Boolean, default: !1 },
    icon: {},
    divider: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: xu,
  setup(l, { emit: a }) {
    const e = l, t = a, r = Te("dropdown", {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      handleItemClick: (y, C) => {
      },
      closeOnSelect: !0
    }), o = (y) => {
      t("click", y), e.value !== void 0 && r.handleItemClick(e.value, y);
    }, s = (y) => {
      const C = new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0,
        view: window
      });
      t("click", C), e.value !== void 0 && r.handleItemClick(e.value, C);
    }, u = d(() => e.unstyled ? e.pt?.root || "" : [
      _e().menuItem(),
      e.active && _e().menuItemActive(),
      e.disabled && _e().menuItemDisabled(),
      e.pt?.root
    ].filter(Boolean).join(" ")), n = d(() => e.unstyled ? e.pt?.icon || "" : _e().menuItemIcon()), f = d(() => e.unstyled ? e.pt?.root || "" : _e().menuDivider());
    return (y, C) => y.divider ? (p(), g("div", {
      key: 1,
      role: "separator",
      class: i(f.value)
    }, null, 2)) : (p(), g("div", {
      key: 0,
      class: i(u.value),
      role: "menuitem",
      tabindex: "0",
      "aria-disabled": y.disabled,
      onClick: C[0] || (C[0] = (S) => !y.disabled && o(S)),
      onKeydown: [
        C[1] || (C[1] = ze((S) => !y.disabled && s(), ["enter"])),
        C[2] || (C[2] = ze(Ie((S) => !y.disabled && s(), ["prevent"]), ["space"]))
      ]
    }, [
      F(y.$slots, "icon", {}, () => [
        y.icon ? (p(), g("span", {
          key: 0,
          class: i(n.value)
        }, N(y.icon), 3)) : L("", !0)
      ]),
      F(y.$slots, "default", {}, () => [
        de(N(y.label), 1)
      ])
    ], 42, Bu));
  }
}), Iu = /* @__PURE__ */ q({
  __name: "DropdownDivider",
  props: {
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  setup(l) {
    const a = l, e = d(() => a.unstyled ? a.pt?.root || "" : [_e().menuDivider(), a.pt?.root].filter(Boolean).join(" "));
    return (t, r) => (p(), g("div", {
      class: i(e.value),
      role: "separator"
    }, null, 2));
  }
}), Mu = J($u), Du = J(Vu), Tu = J(Iu), Ru = D({
  base: "inline-grid grid-cols-1 grid-rows-1 place-items-center",
  variants: {
    variant: {
      fade: "",
      flip: "",
      rotate: "",
      slide: ""
    },
    size: {
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-12 h-12"
    }
  },
  defaultVariants: {
    variant: "fade",
    size: "md"
  }
}), Eu = D({
  base: "col-start-1 row-start-1 transition-all duration-300",
  variants: {
    active: {
      true: "opacity-100 transform-none",
      false: "opacity-0 pointer-events-none"
    },
    variant: {
      fade: "transition-opacity",
      flip: "backface-visibility-hidden",
      rotate: "transition-transform",
      slide: "transition-transform"
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: ""
    }
  },
  compoundVariants: [
    {
      active: !1,
      variant: "flip",
      class: "rotate-y-180"
    },
    {
      active: !1,
      variant: "rotate",
      class: "rotate-180"
    },
    {
      active: !1,
      variant: "slide",
      class: "-translate-y-full"
    }
  ]
}), Lu = D({
  base: "col-start-1 row-start-1 transition-all duration-300",
  variants: {
    active: {
      true: "opacity-0 pointer-events-none",
      false: "opacity-100 transform-none"
    },
    variant: {
      fade: "transition-opacity",
      flip: "backface-visibility-hidden",
      rotate: "transition-transform",
      slide: "transition-transform"
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: ""
    }
  },
  compoundVariants: [
    {
      active: !0,
      variant: "flip",
      class: "rotate-y-180"
    },
    {
      active: !0,
      variant: "rotate",
      class: "rotate-180"
    },
    {
      active: !0,
      variant: "slide",
      class: "translate-y-full"
    }
  ]
}), Au = (l, a) => {
  const e = R(l.active || !1), t = d({
    get: () => l.active !== void 0 ? l.active : e.value,
    set: (s) => {
      l.disabled || (l.active === void 0 && (e.value = s), a("update:active", s), a("change", s));
    }
  }), r = () => {
    t.value = !t.value;
  };
  return {
    isActive: t,
    toggle: r,
    handleTrigger: (s) => {
      l.disabled || l.trigger === "click" && r();
    }
  };
}, Ou = ["tabindex", "aria-checked", "aria-disabled"], Pu = /* @__PURE__ */ q({
  __name: "index",
  props: {
    active: { type: Boolean, default: !1 },
    variant: { default: "fade" },
    size: { default: "md" },
    trigger: { default: "click" },
    disabled: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: ["change", "update:active"],
  setup(l, { emit: a }) {
    const e = l, t = a, { isActive: r, handleTrigger: o } = Au(e, t), s = d(() => e.unstyled ? e.pt?.root || "" : Ru({
      variant: e.variant,
      size: e.size,
      class: e.pt?.root
    })), u = d(() => e.unstyled ? e.pt?.on || "" : Eu({
      active: r.value,
      variant: e.variant,
      disabled: e.disabled,
      class: e.pt?.on
    })), n = d(() => e.unstyled ? e.pt?.off || "" : Lu({
      active: r.value,
      variant: e.variant,
      disabled: e.disabled,
      class: e.pt?.off
    }));
    return (f, y) => (p(), g("div", {
      class: i(s.value),
      onClick: y[0] || (y[0] = (C) => e.trigger === "click" ? h(o)(C) : void 0),
      onMouseenter: y[1] || (y[1] = (C) => e.trigger === "hover" ? r.value = !0 : void 0),
      onMouseleave: y[2] || (y[2] = (C) => e.trigger === "hover" ? r.value = !1 : void 0),
      onFocus: y[3] || (y[3] = (C) => e.trigger === "focus" ? r.value = !0 : void 0),
      onBlur: y[4] || (y[4] = (C) => e.trigger === "focus" ? r.value = !1 : void 0),
      tabindex: e.trigger === "focus" ? 0 : void 0,
      "aria-checked": h(r),
      "aria-disabled": e.disabled,
      role: "switch"
    }, [
      x("div", {
        class: i(u.value)
      }, [
        F(f.$slots, "on")
      ], 2),
      x("div", {
        class: i(n.value)
      }, [
        F(f.$slots, "off")
      ], 2)
    ], 42, Ou));
  }
}), ju = J(Pu), Wu = D({
  base: "relative overflow-hidden",
  variants: {
    fit: {
      fill: "object-fill",
      contain: "object-contain",
      cover: "object-cover",
      none: "object-none",
      "scale-down": "object-scale-down"
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full"
    },
    isZoomable: {
      true: "cursor-zoom-in",
      false: ""
    },
    isZoomed: {
      true: "cursor-zoom-out",
      false: ""
    }
  },
  defaultVariants: {
    fit: "cover",
    radius: "md",
    isZoomable: !1,
    isZoomed: !1
  }
}), Fu = D({
  base: "absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
}), _u = D({
  base: "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity",
  variants: {
    visible: {
      true: "opacity-100",
      false: "opacity-0 pointer-events-none"
    }
  },
  defaultVariants: {
    visible: !1
  }
}), Hu = {
  load: (l) => l instanceof Event,
  error: (l) => l instanceof Event,
  zoom: (l) => typeof l == "boolean"
}, Nu = (l, a) => {
  const e = R(null), t = R(!0), r = R(!1), o = R(l.isZoomed || !1), s = (f) => {
    t.value = !1, a("load", f);
  }, u = (f) => {
    t.value = !1, r.value = !0, a("error", f);
  }, n = () => {
    l.isZoomable && (o.value = !o.value, a("zoom", o.value));
  };
  return Q(
    () => l.isZoomed,
    (f) => {
      f !== void 0 && (o.value = f);
    }
  ), Q(
    () => l.src,
    () => {
      t.value = !0, r.value = !1;
    }
  ), {
    imageRef: e,
    isLoading: t,
    isError: r,
    isZoomed: o,
    handleLoad: s,
    handleError: u,
    toggleZoom: n
  };
}, Gu = ["aria-label"], Ku = ["src", "alt", "loading"], Yu = ["src", "alt"], Uu = {
  key: 3,
  class: "absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800"
}, Xu = { class: "text-gray-400 flex flex-col items-center" }, qu = /* @__PURE__ */ q({
  __name: "index",
  props: {
    src: {},
    alt: { default: "" },
    width: { default: "auto" },
    height: { default: "auto" },
    fit: { default: "cover" },
    blurred: { type: Boolean, default: !1 },
    blurAmount: { default: 10 },
    loading: { default: "lazy" },
    isZoomable: { type: Boolean, default: !1 },
    isZoomed: { type: Boolean, default: !1 },
    zoomScale: { default: 1.5 },
    skeleton: { type: Boolean, default: !0 },
    skeletonColor: {},
    radius: { default: "md" },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: Hu,
  setup(l, { expose: a, emit: e }) {
    const t = l, r = e, {
      imageRef: o,
      isLoading: s,
      isError: u,
      isZoomed: n,
      handleLoad: f,
      handleError: y,
      toggleZoom: C
    } = Nu(t, r), S = () => {
      t.isZoomable && C();
    }, c = d(() => t.unstyled ? t.pt?.root || "" : Wu({
      fit: t.fit,
      radius: t.radius,
      isZoomable: t.isZoomable,
      isZoomed: n.value,
      class: t.pt?.root
    })), v = d(() => t.unstyled ? t.pt?.img || "" : `w-full h-full transition-transform ${n.value ? "scale-" + t.zoomScale : ""} ${t.pt?.img || ""}`), k = d(() => t.unstyled ? t.pt?.skeleton || "" : Fu({ class: t.pt?.skeleton })), b = d(() => t.unstyled ? t.pt?.overlay || "" : _u({ visible: n.value, class: t.pt?.overlay })), m = d(() => {
      const $ = {};
      return t.width !== "auto" && ($.width = typeof t.width == "number" ? `${t.width}px` : t.width), t.height !== "auto" && ($.height = typeof t.height == "number" ? `${t.height}px` : t.height), $;
    }), w = d(() => ({
      objectFit: t.fit
    })), z = d(() => t.skeletonColor ? { backgroundColor: t.skeletonColor } : {});
    return a({
      imageRef: o,
      isLoading: s,
      isError: u,
      isZoomed: n
    }), ($, T) => (p(), g("div", {
      class: i(c.value),
      style: le(m.value),
      onClick: S,
      role: "img",
      "aria-label": $.alt
    }, [
      $.skeleton && h(s) ? (p(), g("div", {
        key: 0,
        class: i(k.value),
        style: le(z.value)
      }, null, 6)) : L("", !0),
      x("img", {
        ref_key: "imageRef",
        ref: o,
        src: $.src,
        alt: $.alt,
        class: i(v.value),
        style: le(w.value),
        loading: $.loading,
        onLoad: T[0] || (T[0] = //@ts-ignore
        (...B) => h(f) && h(f)(...B)),
        onError: T[1] || (T[1] = //@ts-ignore
        (...B) => h(y) && h(y)(...B))
      }, null, 46, Ku),
      $.blurred && h(s) ? (p(), g("img", {
        key: 1,
        src: $.src,
        alt: $.alt,
        class: "absolute inset-0 w-full h-full",
        style: le({
          filter: `blur(${$.blurAmount}px)`,
          transform: "scale(1.1)",
          objectFit: $.fit
        })
      }, null, 12, Yu)) : L("", !0),
      $.isZoomable && h(n).valueOf() ? (p(), g("div", {
        key: 2,
        class: i(b.value)
      }, [
        F($.$slots, "zoom-icon", {}, () => [
          T[2] || (T[2] = pl('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>', 1))
        ])
      ], 2)) : L("", !0),
      h(u) ? (p(), g("div", Uu, [
        F($.$slots, "error", {}, () => [
          x("div", Xu, [
            T[3] || (T[3] = x("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              class: "mb-2"
            }, [
              x("rect", {
                x: "3",
                y: "3",
                width: "18",
                height: "18",
                rx: "2",
                ry: "2"
              }),
              x("circle", {
                cx: "8.5",
                cy: "8.5",
                r: "1.5"
              }),
              x("polyline", { points: "21 15 16 10 5 21" })
            ], -1)),
            x("span", null, N($.alt || "图片加载失败"), 1)
          ])
        ])
      ])) : L("", !0)
    ], 14, Gu));
  }
}), Zu = J(qu), Ju = D({
  base: "inline-flex items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
  variants: {
    variant: {
      default: "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white",
      primary: "text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300",
      secondary: "text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300",
      success: "text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300",
      danger: "text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300",
      warning: "text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300",
      info: "text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    },
    underline: {
      true: "underline underline-offset-4",
      false: "no-underline"
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed pointer-events-none",
      false: "cursor-pointer"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    underline: !1,
    disabled: !1
  }
}), Qu = D({
  base: "inline-flex",
  variants: {
    position: {
      left: "mr-2",
      right: "ml-2"
    },
    size: {
      sm: "w-3.5 h-3.5",
      md: "w-4 h-4",
      lg: "w-5 h-5"
    }
  },
  defaultVariants: {
    position: "left",
    size: "md"
  }
}), ed = {
  click: (l) => l instanceof MouseEvent
}, td = (l, a) => {
  const e = (r) => {
    if (l.disabled) {
      r.preventDefault();
      return;
    }
    a("click", r);
  }, t = d(() => {
    const r = {};
    return l.href && (r.href = l.href), l.external && (r.target = "_blank", r.rel = "noopener noreferrer"), r;
  });
  return {
    handleClick: e,
    linkAttributes: t
  };
}, ld = ["aria-disabled"], ad = /* @__PURE__ */ q({
  __name: "index",
  props: {
    href: { default: void 0 },
    variant: { default: "default" },
    size: { default: "md" },
    external: { type: Boolean, default: !1 },
    underline: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    iconPosition: { default: void 0 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: ed,
  setup(l, { emit: a }) {
    const e = l, t = a, { handleClick: r, linkAttributes: o } = td(e, t), s = d(() => e.unstyled ? e.pt?.root || "" : Ju({
      variant: e.variant,
      size: e.size,
      underline: e.underline,
      disabled: e.disabled,
      class: e.pt?.root
    })), u = (n) => e.unstyled ? e.pt?.icon || "" : Qu({
      position: n,
      size: e.size,
      class: e.pt?.icon
    });
    return (n, f) => (p(), g("a", Wt({ class: s.value }, h(o), {
      onClick: f[0] || (f[0] = //@ts-ignore
      (...y) => h(r) && h(r)(...y)),
      "aria-disabled": n.disabled
    }), [
      n.iconPosition === "left" ? F(n.$slots, "icon-left", { key: 0 }, () => [
        n.$slots["icon-left"] ? (p(), g("span", {
          key: 0,
          class: i(u("left"))
        }, [
          F(n.$slots, "icon-left")
        ], 2)) : L("", !0)
      ]) : L("", !0),
      F(n.$slots, "default"),
      n.iconPosition === "right" ? F(n.$slots, "icon-right", { key: 1 }, () => [
        n.$slots["icon-right"] ? (p(), g("span", {
          key: 0,
          class: i(u("right"))
        }, [
          F(n.$slots, "icon-right")
        ], 2)) : L("", !0)
      ]) : L("", !0),
      n.external && !n.$slots["icon-right"] && n.iconPosition !== "left" ? (p(), g("span", {
        key: 2,
        class: i(u("right"))
      }, f[1] || (f[1] = [
        x("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          class: "w-full h-full"
        }, [
          x("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
          x("polyline", { points: "15 3 21 3 21 9" }),
          x("line", {
            x1: "10",
            y1: "14",
            x2: "21",
            y2: "3"
          })
        ], -1)
      ]), 2)) : L("", !0)
    ], 16, ld));
  }
}), rd = J(ad), od = D({
  base: "relative w-full overflow-hidden",
  variants: {
    variant: {
      default: "",
      dots: "",
      thumbnails: ""
    },
    size: {
      sm: "",
      md: "",
      lg: ""
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
}), sd = {
  change: (l, a) => typeof l == "number" && typeof a == "number",
  "update:active-index": (l) => typeof l == "number"
}, nd = ["tabindex"], id = ["tabindex"], ud = ["onClick", "aria-label", "aria-current", "tabindex"], dd = /* @__PURE__ */ q({
  __name: "index",
  props: {
    variant: { default: "default" },
    size: { default: "md" },
    autoplay: { type: Boolean, default: !1 },
    interval: { default: 3e3 },
    loop: { type: Boolean, default: !0 },
    indicators: { type: Boolean, default: !0 },
    navigation: { type: Boolean, default: !0 },
    keyboardNavigation: { type: Boolean, default: !0 },
    touchSwipe: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    initialIndex: { default: 0 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: sd,
  setup(l, { expose: a, emit: e }) {
    const t = l, r = e, o = Ge(), s = R(null), u = R(t.initialIndex);
    let n = null;
    const f = d(() => {
      if (!o) return 0;
      let V = 0;
      for (; o[`item-${V}`]; )
        V++;
      return V || 1;
    }), y = d(() => t.unstyled ? t.pt?.root || "" : od({
      variant: t.variant,
      size: t.size,
      class: t.pt?.root
    })), C = d(() => t.unstyled ? t.pt?.container || "" : `relative w-full h-full ${t.pt?.container || ""}`), S = d(() => t.unstyled ? t.pt?.item || "" : `w-full h-full ${t.pt?.item || ""}`), c = d(() => t.unstyled ? t.pt?.prevButton || "" : `absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${t.pt?.prevButton || ""}`), v = d(() => t.unstyled ? t.pt?.nextButton || "" : `absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${t.pt?.nextButton || ""}`), k = d(() => t.unstyled ? t.pt?.indicators || "" : `absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 ${t.pt?.indicators || ""}`), b = d(() => t.unstyled ? t.pt?.indicator || "" : `w-2 h-2 rounded-full bg-white/50 hover:bg-white/75 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${t.pt?.indicator || ""}`), m = d(() => t.unstyled ? t.pt?.activeIndicator || "" : `w-6 h-2 rounded-full bg-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${t.pt?.activeIndicator || ""}`), w = () => {
      if (t.disabled) return;
      const V = u.value;
      u.value < f.value - 1 ? u.value++ : t.loop && (u.value = 0), u.value !== V && (r("change", u.value, V), r("update:active-index", u.value));
    }, z = () => {
      if (t.disabled) return;
      const V = u.value;
      u.value > 0 ? u.value-- : t.loop && (u.value = f.value - 1), u.value !== V && (r("change", u.value, V), r("update:active-index", u.value));
    }, $ = (V) => {
      if (!t.disabled && V >= 0 && V < f.value) {
        const E = u.value;
        u.value = V, r("change", u.value, E), r("update:active-index", u.value);
      }
    }, T = () => {
      t.autoplay && !t.disabled && (n = setInterval(() => {
        w();
      }, t.interval));
    }, B = () => {
      n && (clearInterval(n), n = null);
    }, A = (V) => {
      !t.keyboardNavigation || t.disabled || (V.key === "ArrowLeft" ? z() : V.key === "ArrowRight" && w());
    };
    return Q(
      () => t.autoplay,
      (V) => {
        V ? T() : B();
      }
    ), Q(
      () => t.disabled,
      (V) => {
        V ? B() : t.autoplay && T();
      }
    ), be(() => {
      t.autoplay && T(), t.keyboardNavigation && s.value && s.value.addEventListener("keydown", A);
    }), Pe(() => {
      B(), s.value && s.value.removeEventListener("keydown", A);
    }), a({
      next: w,
      prev: z,
      goToSlide: $
    }), (V, E) => (p(), g("div", {
      class: i(y.value),
      ref_key: "rootRef",
      ref: s
    }, [
      x("div", {
        class: i(C.value)
      }, [
        (p(!0), g(ee, null, oe(f.value, (P, j) => (p(), g(ee, null, [
          j === u.value ? (p(), g("div", {
            key: j,
            class: i(S.value)
          }, [
            F(V.$slots, `item-${j}`)
          ], 2)) : L("", !0)
        ], 64))), 256))
      ], 2),
      V.navigation && !V.disabled ? (p(), g(ee, { key: 0 }, [
        V.navigation && (V.loop || u.value > 0) ? (p(), g("button", {
          key: 0,
          class: i(c.value),
          onClick: z,
          "aria-label": "Previous slide",
          tabindex: V.disabled ? -1 : 0
        }, [
          F(V.$slots, "prev-icon", {}, () => [
            E[0] || (E[0] = x("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              x("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M15 19l-7-7 7-7"
              })
            ], -1))
          ])
        ], 10, nd)) : L("", !0),
        V.navigation && (V.loop || u.value < f.value - 1) ? (p(), g("button", {
          key: 1,
          class: i(v.value),
          onClick: w,
          "aria-label": "Next slide",
          tabindex: V.disabled ? -1 : 0
        }, [
          F(V.$slots, "next-icon", {}, () => [
            E[1] || (E[1] = x("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              x("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M9 5l7 7-7 7"
              })
            ], -1))
          ])
        ], 10, id)) : L("", !0)
      ], 64)) : L("", !0),
      V.indicators && !V.disabled ? (p(), g("div", {
        key: 1,
        class: i(k.value)
      }, [
        (p(!0), g(ee, null, oe(f.value, (P, j) => (p(), g("button", {
          key: j,
          class: i([
            j === u.value ? m.value : b.value
          ]),
          onClick: (O) => $(j),
          "aria-label": `Go to slide ${j + 1}`,
          "aria-current": j === u.value,
          tabindex: V.disabled ? -1 : 0
        }, null, 10, ud))), 128))
      ], 2)) : L("", !0)
    ], 2));
  }
}), cd = J(dd), fd = D({
  slots: {
    root: "relative w-full overflow-hidden",
    viewport: "h-full w-full overflow-hidden",
    track: "flex h-full w-max flex-nowrap items-center whitespace-nowrap will-change-transform",
    group: "flex h-full shrink-0 items-center whitespace-nowrap",
    item: "inline-flex h-full shrink-0 items-center justify-center",
    image: "h-full max-h-full w-auto object-cover align-middle",
    card: "inline-flex min-w-48 flex-col gap-1 shadow-sm",
    cardTitle: "font-semibold leading-tight",
    cardDescription: "text-sm leading-snug opacity-75",
    text: "whitespace-nowrap leading-none"
  }
}), pd = (l) => l.type ? l.type : l.src ? "image" : l.title || l.description ? "card" : "text", ol = (l, a) => typeof l == "string" ? {
  id: `item-${a}`,
  type: "text",
  content: l
} : {
  id: `item-${a}`,
  type: pd(l),
  content: l.content ?? l.title ?? l.src ?? "",
  src: l.src,
  alt: l.alt,
  title: l.title,
  description: l.description,
  backgroundColor: l.backgroundColor,
  textColor: l.textColor,
  borderRadius: l.borderRadius
}, gd = (l, a) => {
  const e = typeof l == "string" ? Number(l) : l;
  return typeof e != "number" || Number.isNaN(e) || e <= 0 ? a : e;
}, jt = (l, a) => l ? [ol(l, a)] : [];
function vd(l) {
  const a = d(() => (l.items ?? []).map((c, v) => ol(c, v))), e = d(() => jt(l.prefix, "prefix")), t = d(() => jt(l.suffix, "suffix")), r = d(() => {
    const c = a.value;
    if (!c.length) return [];
    const k = l.autofill && c.some((m) => m.type === "image") ? Math.max(4, c.length) : c.length, b = [];
    for (let m = 0; b.length < k; m += 1)
      for (const w of c)
        b.push({
          ...w,
          id: `${w.id}-copy-${m}-${b.length}`
        });
    return b;
  }), o = d(() => [...e.value, ...r.value, ...t.value]), s = d(() => ({
    height: l.height,
    backgroundColor: l.backgroundColor,
    color: l.textColor,
    borderRadius: l.borderRadius
  })), u = d(() => ({})), n = d(() => ({
    gap: l.gap,
    paddingInlineEnd: l.gap
  })), f = d(() => ({
    minWidth: "max-content"
  })), y = (c) => ({
    backgroundColor: c.backgroundColor ?? "rgba(255, 255, 255, 0.86)",
    color: c.textColor ?? l.textColor,
    borderRadius: c.borderRadius ?? l.borderRadius,
    padding: "0.75rem 1rem"
  }), C = (c) => ({
    borderRadius: c.borderRadius ?? l.borderRadius
  }), S = d(() => gd(l.duration, 20));
  return {
    displayItems: o,
    coreItems: r,
    prefixItems: e,
    suffixItems: t,
    rootStyles: s,
    trackStyles: u,
    groupStyles: n,
    itemStyles: f,
    cardStyle: y,
    imageStyle: C,
    duration: S
  };
}
const bd = ["src", "alt"], md = ["aria-hidden"], yd = ["src", "alt"], hd = ["src", "alt"], wd = /* @__PURE__ */ q({
  name: "Runhorselight",
  __name: "index",
  props: {
    items: { default: () => [] },
    prefix: {},
    suffix: {},
    direction: { default: "left" },
    duration: { default: 20 },
    height: { default: "3rem" },
    backgroundColor: { default: "transparent" },
    textColor: { default: "#111827" },
    borderRadius: { default: "0.75rem" },
    gap: { default: "1rem" },
    pauseOnHover: { type: Boolean, default: !0 },
    loop: { type: Boolean, default: !0 },
    autofill: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    onPrefixClick: {},
    onSuffixClick: {},
    pt: {}
  },
  setup(l) {
    const a = l, e = Ge(), t = fd(), r = R(null), o = R(null), s = R(null), u = R(null), n = R(0), f = R(0), y = R(1), C = R(!1), S = R(!1);
    let c = null, v = 0, k = 0, b = null;
    const m = /* @__PURE__ */ new Set(), {
      coreItems: w,
      rootStyles: z,
      trackStyles: $,
      groupStyles: T,
      itemStyles: B,
      cardStyle: A,
      imageStyle: V,
      duration: E
    } = vd(a), P = d(() => !!e.default), j = d(() => a.loop && n.value > 0), O = d(() => j.value ? 2 : 1), H = d(
      () => Array.from(
        { length: y.value },
        (te, ge) => w.value.map((ie) => ({
          ...ie,
          id: `${ie.id}-repeat-${ge}`
        }))
      ).flat()
    ), M = d(() => {
      if (!P.value || !a.loop) return 1;
      if (f.value <= 0) return 4;
      const te = r.value?.getBoundingClientRect().width ?? 0, ge = Math.ceil(te * 2.2 / f.value) + 1;
      return Math.max(4, Math.min(12, ge));
    }), _ = d(
      () => a.unstyled ? a.pt?.root || "" : t.root({ class: a.pt?.root })
    ), I = d(
      () => a.unstyled ? a.pt?.viewport || "" : t.viewport({ class: a.pt?.viewport })
    ), W = d(
      () => a.unstyled ? a.pt?.track || "" : t.track({ class: a.pt?.track })
    ), G = d(
      () => a.unstyled ? a.pt?.group || "" : t.group({ class: a.pt?.group })
    ), Y = d(
      () => a.unstyled ? a.pt?.item || "" : t.item({ class: a.pt?.item })
    ), Z = d(
      () => a.unstyled ? a.pt?.image || "" : t.image({ class: a.pt?.image })
    ), ce = d(
      () => a.unstyled ? a.pt?.card || "" : t.card({ class: a.pt?.card })
    ), K = d(
      () => a.unstyled ? a.pt?.cardTitle || "" : t.cardTitle({ class: a.pt?.cardTitle })
    ), se = d(
      () => a.unstyled ? a.pt?.cardDescription || "" : t.cardDescription({ class: a.pt?.cardDescription })
    ), ne = d(
      () => a.unstyled ? a.pt?.text || "" : t.text({ class: a.pt?.text })
    ), re = d(() => ({
      ...$.value,
      visibility: S.value ? "visible" : "hidden"
    })), fe = (te) => {
      if (!o.value) return;
      if (!n.value || !j.value) {
        o.value.style.transform = "translate3d(0, 0, 0)";
        return;
      }
      const ge = (te % n.value + n.value) % n.value, ie = a.direction === "right" ? -n.value + ge : -ge;
      o.value.style.transform = `translate3d(${ie}px, 0, 0)`;
    }, ue = () => {
      const te = s.value?.getBoundingClientRect().width ?? 0, ge = u.value?.getBoundingClientRect().width ?? 0;
      if (!te) {
        n.value = 0, f.value = 0, S.value = !1;
        return;
      }
      const ie = r.value?.getBoundingClientRect().width ?? 0, pe = P.value ? ge || te : te / Math.max(1, y.value), dl = ie * 2.2, Tt = !a.loop || pe <= 0 ? 1 : Math.min(6, Math.max(1, Math.ceil(dl / pe)));
      if (!P.value && Tt !== y.value) {
        y.value = Tt, ve(ue);
        return;
      }
      n.value = te, f.value = P.value ? ge : 0, k = te ? k % te : 0, S.value = !0, fe(k);
    }, $e = () => {
      c !== null && cancelAnimationFrame(c), c = null, v = 0;
    }, ye = (te) => {
      v || (v = te);
      const ge = Math.min(te - v, 64);
      if (v = te, !C.value && j.value && n.value > 0) {
        for (k += n.value / (E.value * 1e3) * ge; k >= n.value; ) k -= n.value;
        fe(k);
      }
      c = requestAnimationFrame(ye);
    }, Ke = () => {
      $e(), c = requestAnimationFrame(ye);
    }, Be = () => ve(ue), Ce = () => {
      m.forEach((te) => {
        te.removeEventListener("load", Be), te.removeEventListener("error", Be);
      }), m.clear();
    }, Ve = () => {
      Ce(), o.value && o.value.querySelectorAll("img").forEach((te) => {
        te.addEventListener("load", Be), te.addEventListener("error", Be), m.add(te);
      });
    }, Ye = async () => {
      await ve(), Ve(), ue();
    }, il = () => {
      a.pauseOnHover && (C.value = !0);
    }, ul = () => {
      a.pauseOnHover && (C.value = !1);
    }, Mt = (te, ge) => {
      if (!te) return null;
      const ie = typeof te == "string" ? { type: "text", content: te } : te;
      return {
        id: `${ge}-fixed`,
        type: ie.type ?? (ie.src ? "image" : "text"),
        content: ie.content ?? ie.title ?? ie.src ?? "",
        src: ie.src,
        alt: ie.alt,
        title: ie.title,
        description: ie.description,
        backgroundColor: ie.backgroundColor,
        textColor: ie.textColor,
        borderRadius: ie.borderRadius
      };
    }, he = d(() => Mt(a.prefix, "prefix")), we = d(() => Mt(a.suffix, "suffix")), Dt = (te, ge) => {
      const ie = { target: te, item: ge };
      te === "prefix" ? a.onPrefixClick?.(ie) : a.onSuffixClick?.(ie);
    }, pt = (te) => te.alt || te.content || "Runhorselight image";
    return be(() => {
      Ye(), typeof ResizeObserver < "u" ? (b = new ResizeObserver(() => ue()), r.value && b.observe(r.value), s.value && b.observe(s.value), u.value && b.observe(u.value)) : window.addEventListener("resize", ue), Ke();
    }), Ee(() => {
      $e(), Ce(), b?.disconnect(), b = null, window.removeEventListener("resize", ue);
    }), Q(
      [
        () => a.items,
        () => a.gap,
        () => a.height,
        () => a.loop,
        () => a.direction,
        () => a.autofill,
        () => P.value,
        () => a.prefix,
        () => a.suffix
      ],
      () => {
        y.value = 1, k = 0, Ye();
      },
      { deep: !0 }
    ), Q(
      () => a.pauseOnHover,
      (te) => {
        te || (C.value = !1);
      }
    ), (te, ge) => (p(), g("div", {
      class: i([_.value, "flex items-center gap-4"]),
      style: le(h(z)),
      onMouseenter: il,
      onMouseleave: ul
    }, [
      he.value ? (p(), g("div", {
        key: 0,
        class: i([Y.value, "shrink-0 px-2"]),
        style: le(h(B)),
        onClick: ge[0] || (ge[0] = (ie) => Dt("prefix", he.value))
      }, [
        F(te.$slots, "prefix", {
          item: he.value,
          target: "prefix"
        }, () => [
          he.value.type === "image" ? (p(), g("img", {
            key: 0,
            src: he.value.src,
            alt: pt(he.value),
            class: i(Z.value),
            style: le(h(V)(he.value)),
            draggable: "false"
          }, null, 14, bd)) : he.value.type === "card" ? (p(), g("div", {
            key: 1,
            class: i(ce.value),
            style: le(h(A)(he.value))
          }, [
            x("div", {
              class: i(K.value)
            }, N(he.value.title || he.value.content), 3),
            he.value.description ? (p(), g("div", {
              key: 0,
              class: i(se.value)
            }, N(he.value.description), 3)) : L("", !0)
          ], 6)) : (p(), g("span", {
            key: 2,
            class: i(ne.value),
            style: le({ color: he.value.textColor || a.textColor })
          }, N(he.value.content), 7))
        ], !0)
      ], 6)) : L("", !0),
      x("div", {
        ref_key: "viewportRef",
        ref: r,
        class: i(I.value)
      }, [
        P.value ? (p(), g("div", {
          key: 0,
          ref_key: "slotMeasureRef",
          ref: u,
          class: "pointer-events-none absolute -z-10 whitespace-nowrap opacity-0",
          style: le(h(B)),
          "aria-hidden": "true"
        }, [
          F(te.$slots, "default", {}, void 0, !0)
        ], 4)) : L("", !0),
        x("div", {
          ref_key: "trackRef",
          ref: o,
          class: i(W.value),
          style: le(re.value)
        }, [
          (p(!0), g(ee, null, oe(O.value, (ie) => (p(), g("div", {
            key: ie,
            ref_for: !0,
            ref: ie === 1 ? (pe) => s.value = pe : void 0,
            class: i(G.value),
            style: le(h(T)),
            "aria-hidden": ie > 1
          }, [
            P.value ? (p(!0), g(ee, { key: 0 }, oe(M.value, (pe) => (p(), g("div", {
              key: `slot-${ie}-${pe}`,
              class: i(Y.value),
              style: le(h(B))
            }, [
              F(te.$slots, "default", {}, void 0, !0)
            ], 6))), 128)) : (p(!0), g(ee, { key: 1 }, oe(H.value, (pe) => (p(), g("div", {
              key: `${ie}-${pe.id}`,
              class: i(Y.value),
              style: le(h(B))
            }, [
              F(te.$slots, "item", { item: pe }, () => [
                pe.type === "image" ? (p(), g("img", {
                  key: 0,
                  src: pe.src,
                  alt: pt(pe),
                  class: i(Z.value),
                  style: le(h(V)(pe)),
                  draggable: "false"
                }, null, 14, yd)) : pe.type === "card" ? (p(), g("div", {
                  key: 1,
                  class: i(ce.value),
                  style: le(h(A)(pe))
                }, [
                  x("div", {
                    class: i(K.value)
                  }, N(pe.title || pe.content), 3),
                  pe.description ? (p(), g("div", {
                    key: 0,
                    class: i(se.value)
                  }, N(pe.description), 3)) : L("", !0)
                ], 6)) : (p(), g("span", {
                  key: 2,
                  class: i(ne.value),
                  style: le({ color: pe.textColor || a.textColor })
                }, N(pe.content), 7))
              ], !0)
            ], 6))), 128))
          ], 14, md))), 128))
        ], 6)
      ], 2),
      we.value ? (p(), g("div", {
        key: 1,
        class: i([Y.value, "shrink-0 px-2"]),
        style: le(h(B)),
        onClick: ge[1] || (ge[1] = (ie) => Dt("suffix", we.value))
      }, [
        F(te.$slots, "suffix", {
          item: we.value,
          target: "suffix"
        }, () => [
          we.value.type === "image" ? (p(), g("img", {
            key: 0,
            src: we.value.src,
            alt: pt(we.value),
            class: i(Z.value),
            style: le(h(V)(we.value)),
            draggable: "false"
          }, null, 14, hd)) : we.value.type === "card" ? (p(), g("div", {
            key: 1,
            class: i(ce.value),
            style: le(h(A)(we.value))
          }, [
            x("div", {
              class: i(K.value)
            }, N(we.value.title || we.value.content), 3),
            we.value.description ? (p(), g("div", {
              key: 0,
              class: i(se.value)
            }, N(we.value.description), 3)) : L("", !0)
          ], 6)) : (p(), g("span", {
            key: 2,
            class: i(ne.value),
            style: le({ color: we.value.textColor || a.textColor })
          }, N(we.value.content), 7))
        ], !0)
      ], 6)) : L("", !0)
    ], 38));
  }
}), xd = /* @__PURE__ */ Ze(wd, [["__scopeId", "data-v-6928f10a"]]), kd = J(xd), Cd = D({
  base: "relative",
  variants: {
    orientation: {
      vertical: "flex flex-col",
      horizontal: "flex flex-row"
    },
    align: {
      left: "",
      right: "",
      alternate: ""
    }
  },
  defaultVariants: {
    orientation: "vertical",
    align: "left"
  }
}), Sd = {}, zd = {}, $d = /* @__PURE__ */ q({
  name: "Timeline",
  __name: "timeline",
  props: {
    orientation: { default: "vertical" },
    align: { default: "left" },
    reverse: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: Sd,
  setup(l) {
    const a = l;
    Re("timelineAlign", a.align), Re("timelineOrientation", a.orientation);
    const e = d(() => a.unstyled ? a.pt?.root || "" : Cd({
      orientation: a.orientation,
      align: a.align,
      class: a.pt?.root
    })), t = d(() => a.reverse ? { flexDirection: "column-reverse" } : {});
    return (r, o) => (p(), g("div", {
      class: i(e.value),
      style: le(t.value)
    }, [
      F(r.$slots, "default")
    ], 6));
  }
}), Bd = /* @__PURE__ */ q({
  name: "TimelineItem",
  __name: "timeline-item",
  props: {
    position: {},
    isLast: { type: Boolean },
    dotColor: {},
    lineColor: {},
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: zd,
  setup(l) {
    const a = l, e = Te(
      "timelineAlign",
      "left"
    ), t = Te(
      "timelineOrientation",
      "vertical"
    ), r = d(() => e === "alternate"), o = d(() => {
      if (a.unstyled)
        return a.pt?.root || "";
      const c = "relative flex";
      return t === "vertical" ? `${c} ${e === "right" ? "flex-row-reverse" : "flex-row"} ${a.pt?.root || ""}` : `${c} min-w-0 flex-1 flex-col items-center ${a.pt?.root || ""}`;
    }), s = d(() => {
      if (a.unstyled)
        return a.pt?.dot || "";
      const c = "relative z-10 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center";
      return t === "vertical" ? `${c} ${e === "right" ? "ml-3" : "mr-3"} ${a.pt?.dot || ""}` : `${c} mt-0 ${a.pt?.dot || ""}`;
    }), u = d(() => a.unstyled ? a.pt?.connector || "" : t === "vertical" ? `absolute top-5 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 ${e === "right" ? "right-2.5" : "left-2.5"} ${a.pt?.connector || ""}` : `absolute left-1/2 right-0 top-2.5 h-0.5 bg-gray-300 dark:bg-gray-600 ${a.pt?.connector || ""}`), n = d(() => a.unstyled ? a.pt?.content || "" : t === "horizontal" ? `mt-2 w-full text-center ${a.pt?.content || ""}` : `flex-1 ${a.pt?.content || ""}`), f = d(() => a.unstyled ? a.pt?.opposite || "" : `flex-1 text-right ${a.pt?.opposite || ""}`), y = d(() => a.dotColor ? { borderColor: a.dotColor, backgroundColor: a.dotColor } : {}), C = d(() => a.lineColor ? { backgroundColor: a.lineColor } : {}), S = d(() => {
      const c = {};
      return a.dotColor && !a.unstyled && (a.lineColor || (c["--line-color"] = a.dotColor)), c;
    });
    return (c, v) => (p(), g("div", {
      class: i(["timeline-item", o.value]),
      style: le(S.value)
    }, [
      x("div", {
        class: i(["timeline-dot", s.value])
      }, [
        F(c.$slots, "dot", {}, () => [
          x("div", {
            class: i([
              "h-3 w-3 rounded-full border-2 border-gray-300 bg-white dark:border-gray-500 dark:bg-gray-900",
              a.pt?.dot
            ]),
            style: le(y.value)
          }, null, 6)
        ])
      ], 2),
      a.isLast ? L("", !0) : (p(), g("div", {
        key: 0,
        class: i(["timeline-connector", u.value]),
        style: le(C.value)
      }, null, 6)),
      x("div", {
        class: i(n.value)
      }, [
        F(c.$slots, "default")
      ], 2),
      r.value ? (p(), g("div", {
        key: 1,
        class: i(f.value)
      }, [
        F(c.$slots, "opposite")
      ], 2)) : L("", !0)
    ], 6));
  }
}), Vd = J($d), Id = J(Bd), st = R([]);
let Md = 0;
const Dd = (l) => {
  const a = `toast-${Md++}`, e = {
    id: a,
    visible: !0,
    ...l
  };
  return st.value.push(e), a;
}, sl = (l) => {
  const a = st.value.findIndex((e) => e.id === l);
  a !== -1 && st.value.splice(a, 1);
}, Td = () => {
  st.value = [];
}, ct = D({
  slots: {
    base: "pointer-events-auto flex w-full max-w-md items-center gap-3 rounded-lg border p-4 shadow-lg transition-all duration-300 ease-in-out",
    title: "text-sm font-semibold",
    description: "text-sm opacity-90",
    icon: "h-5 w-5 shrink-0",
    closeButton: "ml-auto -mr-2 -mt-2 inline-flex h-6 w-6 items-center justify-center rounded-md p-1 opacity-50 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
  },
  variants: {
    type: {
      success: {
        base: "border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-900/30 dark:text-green-300",
        icon: "text-green-500 dark:text-green-400",
        closeButton: "text-green-800 hover:bg-green-100 dark:text-green-300 dark:hover:bg-green-800"
      },
      error: {
        base: "border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-900/30 dark:text-red-300",
        icon: "text-red-500 dark:text-red-400",
        closeButton: "text-red-800 hover:bg-red-100 dark:text-red-300 dark:hover:bg-red-800"
      },
      warning: {
        base: "border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
        icon: "text-yellow-500 dark:text-yellow-400",
        closeButton: "text-yellow-800 hover:bg-yellow-100 dark:text-yellow-300 dark:hover:bg-yellow-800"
      },
      info: {
        base: "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
        icon: "text-blue-500 dark:text-blue-400",
        closeButton: "text-blue-800 hover:bg-blue-100 dark:text-blue-300 dark:hover:bg-blue-800"
      }
    }
  },
  defaultVariants: {
    type: "info"
  }
}), Rd = ["innerHTML"], Ed = { class: "flex-1" }, Ld = /* @__PURE__ */ q({
  __name: "ToastItem",
  props: {
    visible: { type: Boolean },
    id: {},
    message: {},
    type: {},
    duration: {},
    position: {},
    onClose: { type: Function }
  },
  emits: ["close"],
  setup(l, { emit: a }) {
    const e = l, t = a, { type: r = "info", duration: o = 3e3 } = e, s = d(() => ct().base({ type: e.type })), u = d(() => ct().icon({ type: e.type })), n = d(
      () => ct().description({ type: e.type })
    ), f = d(
      () => ct().closeButton({ type: e.type })
    ), y = {
      info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" /></svg>',
      success: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" /></svg>',
      warning: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" /></svg>',
      error: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" /></svg>'
    };
    let C;
    const S = R(o), c = R(0), v = () => {
      o <= 0 || (c.value = Date.now(), C = setTimeout(() => {
        w();
      }, S.value));
    }, k = () => {
      o <= 0 || (clearTimeout(C), S.value -= Date.now() - c.value);
    }, b = () => {
      o <= 0 || v();
    }, m = () => {
      w();
    }, w = () => {
      t("close", e.id), e.onClose && e.onClose(e.id);
    };
    return be(() => {
      v();
    }), Pe(() => {
      clearTimeout(C);
    }), (z, $) => (p(), g("div", {
      class: i(s.value),
      role: "alert",
      onMouseenter: k,
      onMouseleave: b
    }, [
      x("div", {
        class: i(u.value)
      }, [
        F(z.$slots, "icon", {}, () => [
          x("span", {
            innerHTML: y[h(r) || "info"]
          }, null, 8, Rd)
        ])
      ], 2),
      x("div", Ed, [
        x("div", {
          class: i(n.value)
        }, N(z.message), 3)
      ]),
      (p(), g("button", {
        key: 0,
        type: "button",
        class: i(f.value),
        "aria-label": "Close",
        onClick: m
      }, $[0] || ($[0] = [
        x("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }, [
          x("line", {
            x1: "18",
            y1: "6",
            x2: "6",
            y2: "18"
          }),
          x("line", {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "18"
          })
        ], -1)
      ]), 2))
    ], 34));
  }
}), Ad = { class: "pointer-events-none fixed inset-0 z-[9999] overflow-hidden" }, nl = /* @__PURE__ */ q({
  __name: "ToastContainer",
  setup(l) {
    const a = [
      "top-left",
      "top-right",
      "bottom-left",
      "bottom-right",
      "top-center",
      "bottom-center"
    ], e = (s) => st.value.filter((u) => (u.position || "top-right") === s), t = (s) => {
      sl(s);
    }, r = (s) => {
      switch (s) {
        case "top-left":
          return "top-0 left-0 items-start";
        case "top-right":
          return "top-0 right-0 items-end";
        case "bottom-left":
          return "bottom-0 left-0 items-start justify-end";
        case "bottom-right":
          return "bottom-0 right-0 items-end justify-end";
        case "top-center":
          return "top-0 left-1/2 -translate-x-1/2 items-center";
        case "bottom-center":
          return "bottom-0 left-1/2 -translate-x-1/2 items-center justify-end";
        default:
          return "top-0 right-0 items-end";
      }
    }, o = (s) => {
      const u = s.includes("top"), n = s.includes("center"), f = s.includes("right");
      let y = "", C = "";
      return n ? (y = u ? "-translate-y-full opacity-0" : "translate-y-full opacity-0", C = u ? "-translate-y-full opacity-0" : "translate-y-full opacity-0") : u ? f ? (y = "translate-x-full opacity-0", C = "translate-x-full opacity-0") : (y = "-translate-x-full opacity-0", C = "-translate-x-full opacity-0") : (y = "translate-y-full opacity-0", C = "translate-y-full opacity-0"), {
        enter: "transition-all duration-300 ease-out",
        leave: "transition-all duration-200 ease-in absolute w-full",
        enterFrom: y,
        leaveTo: C
      };
    };
    return (s, u) => (p(), g("div", Ad, [
      (p(), g(ee, null, oe(a, (n) => x("div", {
        key: n,
        class: i([
          "absolute flex w-full flex-col gap-4 p-4 md:max-w-[420px]",
          r(n)
        ])
      }, [
        De(gl, {
          tag: "div",
          "enter-active-class": o(n).enter,
          "leave-active-class": o(n).leave,
          "enter-from-class": o(n).enterFrom,
          "leave-to-class": o(n).leaveTo,
          "move-class": "transition-all duration-300 ease-in-out",
          class: "flex flex-col gap-4 w-full"
        }, {
          default: Ne(() => [
            (p(!0), g(ee, null, oe(e(n), (f) => (p(), Me(Ld, Wt({
              key: f.id
            }, { ref_for: !0 }, f, { onClose: t }), null, 16))), 128))
          ]),
          _: 2
        }, 1032, ["enter-active-class", "leave-active-class", "enter-from-class", "leave-to-class"])
      ], 2)), 64))
    ]));
  }
});
let et = null;
const Od = () => {
  if (typeof document > "u" || et) return;
  et = document.createElement("div"), et.id = "versakit-toast-container", document.body.appendChild(et);
  const l = De(nl);
  vl(l, et);
}, tt = (l) => (Od(), Dd(l)), pc = {
  success: (l, a) => tt({ ...a, message: l, type: "success" }),
  error: (l, a) => tt({ ...a, message: l, type: "error" }),
  warning: (l, a) => tt({ ...a, message: l, type: "warning" }),
  info: (l, a) => tt({ ...a, message: l, type: "info" }),
  show: (l) => tt(l),
  remove: (l) => sl(l),
  removeAll: () => Td()
}, Pd = /* @__PURE__ */ q({
  __name: "Steps",
  props: {
    current: { default: 0 },
    direction: { default: "horizontal" },
    status: { default: "process" }
  },
  emits: ["update:current", "change"],
  setup(l, { emit: a }) {
    const e = l, t = a, r = R([]), o = (n) => {
      r.value.push(n);
    }, s = (n) => {
      const f = r.value.indexOf(n);
      f !== -1 && r.value.splice(f, 1);
    }, u = (n) => {
      n !== e.current && (t("update:current", n), t("change", n));
    };
    return Re("steps-context", {
      current: Se(e, "current"),
      direction: Se(e, "direction"),
      status: Se(e, "status"),
      steps: r,
      registerStep: o,
      unregisterStep: s,
      onChange: u
    }), (n, f) => (p(), g("div", {
      class: i([
        "flex w-full gap-4",
        n.direction === "vertical" ? "flex-col" : "flex-row items-center"
      ])
    }, [
      F(n.$slots, "default")
    ], 2));
  }
}), jd = { class: "relative z-10 flex flex-col items-center" }, Wd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  class: "h-5 w-5"
}, Fd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  class: "h-5 w-5"
}, _d = { key: 2 }, Hd = {
  key: 0,
  class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
}, Nd = /* @__PURE__ */ q({
  __name: "StepItem",
  props: {
    title: {},
    description: {},
    status: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(l) {
    const a = l, e = Te("steps-context"), t = /* @__PURE__ */ Symbol("step-item");
    be(() => {
      e?.registerStep(t);
    }), Pe(() => {
      e?.unregisterStep(t);
    });
    const r = d(() => e?.steps.value.indexOf(t) ?? -1), o = d(() => r.value === (e?.steps.value.length ?? 0) - 1), s = d(() => {
      if (a.status) return a.status;
      if (!e) return "wait";
      const S = e.current.value;
      return r.value < S ? "finish" : r.value === S ? e.status.value : "wait";
    }), u = d(() => s.value === "finish"), n = d(() => s.value === "process"), f = d(() => !a.disabled && e), y = d(() => {
      switch (s.value) {
        case "finish":
          return "border-blue-500 bg-white text-blue-500 dark:border-blue-500 dark:bg-gray-900";
        case "process":
          return "border-blue-500 bg-blue-500 text-white dark:border-blue-500 dark:bg-blue-500";
        case "error":
          return "border-red-500 bg-white text-red-500 dark:border-red-500 dark:bg-gray-900";
        default:
          return "border-gray-200 bg-white text-gray-400 dark:border-gray-700 dark:bg-gray-900";
      }
    }), C = () => {
      f.value && e && e.onChange(r.value);
    };
    return (S, c) => (p(), g("div", {
      class: i([
        "relative flex flex-1",
        h(e)?.direction.value === "vertical" ? "flex-col pb-8 last:pb-0" : "flex-row items-center last:flex-none",
        f.value ? "cursor-pointer" : "cursor-default"
      ]),
      onClick: C
    }, [
      o.value ? L("", !0) : (p(), g("div", {
        key: 0,
        class: i([
          "absolute transition-colors duration-300",
          h(e)?.direction.value === "vertical" ? "left-[15px] top-[30px] h-[calc(100%-10px)] w-[2px]" : "left-[50%] right-[-50%] top-[15px] h-[2px] w-full",
          u.value ? "bg-blue-500" : "bg-gray-200 dark:bg-gray-700"
        ])
      }, null, 2)),
      x("div", jd, [
        x("div", {
          class: i([
            "flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300",
            y.value
          ])
        }, [
          F(S.$slots, "icon", {}, () => [
            s.value === "finish" ? (p(), g("svg", Wd, c[0] || (c[0] = [
              x("path", {
                "fill-rule": "evenodd",
                d: "M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z",
                "clip-rule": "evenodd"
              }, null, -1)
            ]))) : s.value === "error" ? (p(), g("svg", Fd, c[1] || (c[1] = [
              x("path", {
                "fill-rule": "evenodd",
                d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
                "clip-rule": "evenodd"
              }, null, -1)
            ]))) : (p(), g("span", _d, N(r.value + 1), 1))
          ])
        ], 2)
      ]),
      x("div", {
        class: i([
          "flex flex-col",
          h(e)?.direction.value === "vertical" ? "ml-4 mt-0.5" : "absolute top-8 left-1/2 -translate-x-1/2 w-max max-w-[120px] text-center mt-2"
        ])
      }, [
        x("div", {
          class: i([
            "text-sm font-medium transition-colors duration-300",
            n.value || u.value ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400",
            s.value === "error" ? "text-red-500" : ""
          ])
        }, [
          F(S.$slots, "title", {}, () => [
            de(N(S.title), 1)
          ])
        ], 2),
        S.description || S.$slots.description ? (p(), g("div", Hd, [
          F(S.$slots, "description", {}, () => [
            de(N(S.description), 1)
          ])
        ])) : L("", !0)
      ], 2)
    ], 2));
  }
}), Gd = ["value", "checked", "disabled"], Kd = /* @__PURE__ */ q({
  __name: "Radio",
  props: {
    modelValue: { type: [String, Number, Boolean] },
    label: { type: [String, Number, Boolean] },
    disabled: { type: Boolean, default: !1 },
    size: {}
  },
  emits: ["update:modelValue", "change"],
  setup(l, { emit: a }) {
    const e = l, t = a, r = Te("radio-group", null), o = d(() => r ? r.modelValue.value === e.label : e.modelValue === e.label), s = d(() => r?.disabled.value || !1 || e.disabled), u = d(() => r?.size.value || e.size || "md"), n = d(() => {
      switch (u.value) {
        case "sm":
          return "h-4 w-4";
        case "lg":
          return "h-6 w-6";
        default:
          return "h-5 w-5";
      }
    }), f = d(() => {
      switch (u.value) {
        case "sm":
          return "h-1.5 w-1.5";
        case "lg":
          return "h-2.5 w-2.5";
        default:
          return "h-2 w-2";
      }
    }), y = d(() => {
      switch (u.value) {
        case "sm":
          return "text-sm";
        case "lg":
          return "text-lg";
        default:
          return "text-base";
      }
    }), C = () => {
      if (s.value) return;
      const S = e.label ?? "";
      r ? r.changeEvent(S) : (t("update:modelValue", S), t("change", S));
    };
    return (S, c) => (p(), g("label", {
      class: i([
        "group relative inline-flex cursor-pointer items-center select-none",
        s.value ? "cursor-not-allowed opacity-50" : ""
      ])
    }, [
      x("input", {
        type: "radio",
        class: "peer sr-only",
        value: S.label,
        checked: o.value,
        disabled: s.value,
        onChange: C
      }, null, 40, Gd),
      x("div", {
        class: i([
          "relative flex items-center justify-center rounded-full border transition-all duration-200",
          n.value,
          o.value ? "border-blue-500 bg-blue-500" : "border-gray-300 bg-white group-hover:border-blue-500 dark:border-gray-600 dark:bg-gray-800"
        ])
      }, [
        x("div", {
          class: i([
            "rounded-full bg-white transition-transform duration-200",
            f.value,
            o.value ? "scale-100" : "scale-0"
          ])
        }, null, 2)
      ], 2),
      S.$slots.default || S.label ? (p(), g("span", {
        key: 0,
        class: i(["ml-2 text-gray-700 dark:text-gray-300", y.value])
      }, [
        F(S.$slots, "default", {}, () => [
          de(N(S.label), 1)
        ])
      ], 2)) : L("", !0)
    ], 2));
  }
}), Yd = /* @__PURE__ */ q({
  __name: "RadioGroup",
  props: {
    modelValue: { type: [String, Number, Boolean] },
    disabled: { type: Boolean, default: !1 },
    size: { default: "md" },
    direction: { default: "horizontal" }
  },
  emits: ["update:modelValue", "change"],
  setup(l, { emit: a }) {
    const e = l, t = a, r = (o) => {
      t("update:modelValue", o), t("change", o);
    };
    return Re("radio-group", {
      modelValue: Se(e, "modelValue"),
      disabled: Se(e, "disabled"),
      size: Se(e, "size"),
      changeEvent: r
    }), (o, s) => (p(), g("div", {
      class: i([
        "flex",
        o.direction === "vertical" ? "flex-col gap-2" : "flex-row gap-4"
      ]),
      role: "radiogroup",
      "aria-label": "radio-group"
    }, [
      F(o.$slots, "default")
    ], 2));
  }
}), Ud = D({
  slots: {
    root: "w-full overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-900",
    table: "w-full text-left text-sm",
    thead: "bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-800 dark:text-gray-400",
    th: "px-6 py-3 font-medium",
    tbody: "divide-y divide-gray-200 dark:divide-gray-700",
    tr: "bg-white transition-colors hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800",
    td: "whitespace-nowrap px-6 py-4 text-gray-900 dark:text-gray-100",
    empty: "flex flex-col items-center justify-center py-12 text-gray-500 dark:text-gray-400"
  },
  variants: {
    stripe: {
      true: {
        tr: "even:bg-gray-50 dark:even:bg-gray-800"
      }
    },
    border: {
      true: {
        root: "border border-gray-200 dark:border-gray-700",
        th: "border-b border-gray-200 dark:border-gray-700",
        td: "border-b border-gray-200 dark:border-gray-700"
      }
    },
    dense: {
      true: {
        th: "px-4 py-2",
        td: "px-4 py-2"
      }
    }
  },
  defaultVariants: {
    stripe: !1,
    border: !1,
    dense: !1
  }
}), Xd = { class: "mb-4 flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-950" }, qd = { class: "min-w-0 flex-1" }, Zd = {
  key: 0,
  class: "w-full"
}, Jd = ["placeholder"], Qd = { class: "flex items-center gap-2" }, ec = { class: "overflow-x-auto" }, tc = ["onClick", "aria-sort"], lc = { class: "flex items-center gap-2" }, ac = {
  key: 0,
  class: "inline-flex h-4 w-4 items-center justify-center text-gray-500 dark:text-gray-400"
}, rc = {
  key: 1,
  class: "text-xs text-gray-400"
}, oc = { class: "text-sm" }, sc = {
  key: 1,
  class: "mt-4 flex flex-wrap items-center justify-between gap-3 rounded-b-lg border-t border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300"
}, nc = { class: "flex items-center gap-2" }, ic = ["disabled"], uc = ["disabled"], dc = /* @__PURE__ */ q({
  name: "VsTable",
  __name: "Table",
  props: {
    data: { default: () => [] },
    columns: { default: () => [] },
    stripe: { type: Boolean, default: !1 },
    border: { type: Boolean, default: !1 },
    dense: { type: Boolean, default: !1 },
    emptyText: { default: "No Data" },
    searchable: { type: Boolean, default: !1 },
    searchPlaceholder: { default: "Search" },
    pagination: { type: Boolean, default: !1 },
    pageSize: { default: 10 },
    initialPage: { default: 1 },
    exportable: { type: Boolean, default: !1 }
  },
  setup(l) {
    const a = l, e = R(""), t = R(""), r = R("asc"), o = R(a.initialPage), s = d(() => {
      const b = a.data ?? [];
      return t.value ? [...b].sort((m, w) => {
        const z = m[t.value], $ = w[t.value];
        if (z == null && $ == null) return 0;
        if (z == null) return r.value === "asc" ? -1 : 1;
        if ($ == null) return r.value === "asc" ? 1 : -1;
        if (typeof z == "number" && typeof $ == "number")
          return r.value === "asc" ? z - $ : $ - z;
        const T = String(z).toLowerCase(), B = String($).toLowerCase();
        return T < B ? r.value === "asc" ? -1 : 1 : T > B ? r.value === "asc" ? 1 : -1 : 0;
      }) : b;
    }), u = d(() => {
      const b = s.value, m = a.columns ?? [];
      if (!a.searchable || !e.value.trim())
        return b;
      const w = e.value.trim().toLowerCase();
      return b.filter(
        (z) => m.some(($) => {
          const T = z[$.key];
          return T == null ? !1 : String(T).toLowerCase().includes(w);
        })
      );
    }), n = d(
      () => Math.max(1, Math.ceil(u.value.length / a.pageSize))
    ), f = d(() => {
      if (!a.pagination)
        return u.value;
      const b = (o.value - 1) * a.pageSize;
      return u.value.slice(b, b + a.pageSize);
    });
    Q([() => u.value.length, () => a.pageSize], () => {
      o.value > n.value && (o.value = n.value);
    });
    const y = d(() => {
      const { root: b, table: m, thead: w, th: z, tbody: $, tr: T, td: B, empty: A } = Ud({
        stripe: a.stripe,
        border: a.border,
        dense: a.dense
      });
      return {
        root: b(),
        table: m(),
        thead: w(),
        th: z(),
        tbody: $(),
        tr: T(),
        td: B(),
        empty: A()
      };
    }), C = (b) => {
      switch (b) {
        case "center":
          return "text-center";
        case "right":
          return "text-right";
        default:
          return "text-left";
      }
    }, S = (b) => {
      t.value === b ? r.value = r.value === "asc" ? "desc" : "asc" : (t.value = b, r.value = "asc");
    }, c = (b) => t.value !== b ? "none" : r.value === "asc" ? "ascending" : "descending", v = () => {
      const b = a.columns ?? [], m = b.map(
        (z) => `"${String(z.title).replace(/"/g, '""')}"`
      ), w = u.value.map(
        (z) => b.map(($) => {
          const T = z[$.key];
          return `"${String(T ?? "").replace(/"/g, '""')}"`;
        }).join(",")
      );
      return [m.join(","), ...w].join(`\r
`);
    }, k = () => {
      const b = v(), m = new Blob([b], { type: "text/csv;charset=utf-8;" }), w = URL.createObjectURL(m), z = document.createElement("a");
      z.href = w, z.download = "table-export.csv", document.body.appendChild(z), z.click(), document.body.removeChild(z), URL.revokeObjectURL(w);
    };
    return (b, m) => (p(), g("div", {
      class: i(y.value.root)
    }, [
      x("div", Xd, [
        x("div", qd, [
          a.searchable ? (p(), g("div", Zd, [
            He(x("input", {
              "onUpdate:modelValue": m[0] || (m[0] = (w) => e.value = w),
              type: "text",
              placeholder: a.searchPlaceholder,
              class: "w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:focus:border-blue-400 dark:focus:ring-blue-400"
            }, null, 8, Jd), [
              [$t, e.value]
            ])
          ])) : L("", !0)
        ]),
        x("div", Qd, [
          a.exportable ? (p(), g("button", {
            key: 0,
            type: "button",
            onClick: k,
            class: "rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:text-blue-400"
          }, " 导出 CSV ")) : L("", !0)
        ])
      ]),
      x("div", ec, [
        x("table", {
          class: i(y.value.table)
        }, [
          x("thead", {
            class: i(y.value.thead)
          }, [
            x("tr", null, [
              (p(!0), g(ee, null, oe(b.columns, (w) => (p(), g("th", {
                key: w.key,
                class: i([
                  y.value.th,
                  C(w.align),
                  w.sortable ? "cursor-pointer select-none text-gray-700 dark:text-gray-300" : ""
                ]),
                style: le({
                  width: w.width ? typeof w.width == "number" ? `${w.width}px` : w.width : void 0
                }),
                onClick: (z) => w.sortable && S(w.key),
                "aria-sort": w.sortable ? c(w.key) : void 0
              }, [
                x("div", lc, [
                  w.icon ? (p(), g("span", ac, N(w.icon), 1)) : L("", !0),
                  x("span", null, N(w.title), 1),
                  w.sortable ? (p(), g("span", rc, N(t.value === w.key ? r.value === "asc" ? "↑" : "↓" : "⇅"), 1)) : L("", !0)
                ])
              ], 14, tc))), 128))
            ])
          ], 2),
          x("tbody", {
            class: i(y.value.tbody)
          }, [
            (p(!0), g(ee, null, oe(f.value, (w, z) => (p(), g("tr", {
              key: z,
              class: i(y.value.tr)
            }, [
              (p(!0), g(ee, null, oe(b.columns, ($) => (p(), g("td", {
                key: $.key,
                class: i([y.value.td, C($.align)])
              }, [
                F(b.$slots, $.key, {
                  row: w,
                  index: z
                }, () => [
                  de(N(w[$.key]), 1)
                ], !0)
              ], 2))), 128))
            ], 2))), 128))
          ], 2)
        ], 2)
      ]),
      u.value.length ? L("", !0) : (p(), g("div", {
        key: 0,
        class: i(y.value.empty)
      }, [
        F(b.$slots, "empty", {}, () => [
          x("span", oc, N(b.emptyText), 1)
        ], !0)
      ], 2)),
      a.pagination && u.value.length ? (p(), g("div", sc, [
        x("div", null, " 第 " + N(o.value) + " / " + N(n.value) + " 页 · 共 " + N(u.value.length) + " 条 ", 1),
        x("div", nc, [
          x("button", {
            type: "button",
            class: "rounded-lg border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700 transition hover:border-blue-500 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:text-blue-400",
            disabled: o.value <= 1,
            onClick: m[1] || (m[1] = (w) => o.value = Math.max(1, o.value - 1))
          }, " 上一页 ", 8, ic),
          x("button", {
            type: "button",
            class: "rounded-lg border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700 transition hover:border-blue-500 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:text-blue-400",
            disabled: o.value >= n.value,
            onClick: m[2] || (m[2] = (w) => o.value = Math.min(n.value, o.value + 1))
          }, " 下一页 ", 8, uc)
        ])
      ])) : L("", !0)
    ], 2));
  }
}), cc = /* @__PURE__ */ Ze(dc, [["__scopeId", "data-v-5dd3829e"]]), yt = [
  ua,
  wa,
  $a,
  Ma,
  Aa,
  Ua,
  er,
  fr,
  wr,
  Vr,
  Er,
  Hr,
  Kr,
  eo,
  ao,
  so,
  co,
  Wo,
  vo,
  bo,
  wo,
  Jo,
  It,
  tl,
  As,
  Us,
  sn,
  bn,
  mn,
  yn,
  In,
  Mn,
  Pn,
  li,
  ci,
  al,
  Ci,
  Di,
  Ti,
  Zi,
  cu,
  fu,
  hu,
  Mu,
  Du,
  Tu,
  ju,
  Zu,
  rd,
  cd,
  kd,
  Vd,
  Id,
  nl,
  Pd,
  Nd,
  Kd,
  Yd,
  cc
], gc = {
  install: (l) => {
    for (const a in yt)
      l.component(yt[a]?.name || a, yt[a]);
  }
};
export {
  cu as Accordion,
  fu as AccordionItem,
  Hr as Alert,
  $a as Avatar,
  Ma as Badge,
  al as Breadcrumb,
  Ci as BreadcrumbItem,
  eo as Button,
  It as Calendar,
  ao as Card,
  cd as Carousel,
  vo as Checkbox,
  bo as CheckboxGroup,
  Er as Chip,
  As as DatePicker,
  Us as DateTimePicker,
  so as Divider,
  Ua as Drawer,
  Mu as Dropdown,
  Tu as DropdownDivider,
  Du as DropdownItem,
  Zu as Image,
  wo as Input,
  ua as InputOtp,
  hu as InputTag,
  Kr as Kbd,
  rd as Link,
  wa as Modal,
  li as Paginator,
  Pn as Panel,
  wr as Popover,
  ci as Progress,
  Kd as Radio,
  Yd as RadioGroup,
  Zi as RangeCalendar,
  Jo as Rate,
  kd as Runhorselight,
  er as Segmented,
  Wo as Select,
  bn as Skeleton,
  yn as SkeletonAvatar,
  mn as SkeletonText,
  fr as Slider,
  Di as Splitter,
  Ti as SplitterPanel,
  Nd as StepItem,
  Pd as Steps,
  ju as Swap,
  Aa as Switch,
  Mn as TabItem,
  cc as Table,
  In as Tabs,
  co as Textarea,
  tl as TimePicker,
  sn as TimeSelect,
  Vd as Timeline,
  Id as TimelineItem,
  pc as Toast,
  nl as ToastContainer,
  Vr as Tooltip,
  gc as Versakit
};
