import { ref as H, nextTick as me, defineComponent as J, computed as h, createElementBlock as x, openBlock as w, normalizeClass as p, Fragment as ae, renderList as ne, unref as C, withDirectives as We, vModelText as jt, watch as te, onUnmounted as Te, useSlots as He, onMounted as ve, createBlock as Se, Teleport as rt, createCommentVNode as N, createElementVNode as B, renderSlot as _, toDisplayString as U, onBeforeUnmount as De, normalizeStyle as de, createTextVNode as ce, resolveDynamicComponent as qe, withModifiers as Ce, withCtx as ot, inject as Be, provide as Ve, toRef as xe, createVNode as Oe, Transition as Ft, vShow as ct, withKeys as ke, reactive as ul, vModelDynamic as dl, createStaticVNode as cl, mergeProps as Wt, TransitionGroup as fl, render as pl } from "vue";
const Q = (l, a) => {
  if (l.install = (e) => {
    for (const t of [l, ...Object.values(a ?? {})])
      e.component(t.name, t);
  }, a)
    for (const [e, t] of Object.entries(a))
      l[e] = t;
  return l;
};
function bl(l = 4) {
  const a = H(Array(l).fill("")), e = H([]);
  return {
    values: a,
    setRef: (o, f) => {
      o && (e.value[f] = o);
    },
    onInput: (o, f) => {
      const i = o.target.value.replace(/\D/g, "");
      a.value[f] = i.slice(0, 1), i && f < l - 1 && me(() => {
        var b;
        (b = e.value[f + 1]) == null || b.focus();
      });
    },
    onKeydown: (o, f) => {
      o.key === "Backspace" && !a.value[f] && f > 0 && me(() => {
        var n;
        (n = e.value[f - 1]) == null || n.focus();
      });
    }
  };
}
var Rt = (l) => typeof l == "boolean" ? `${l}` : l === 0 ? "0" : l, we = (l) => !l || typeof l != "object" || Object.keys(l).length === 0, vl = (l, a) => JSON.stringify(l) === JSON.stringify(a);
function Ht(l, a) {
  l.forEach(function(e) {
    Array.isArray(e) ? Ht(e, a) : a.push(e);
  });
}
function Nt(l) {
  let a = [];
  return Ht(l, a), a;
}
var Gt = (...l) => Nt(l).filter(Boolean), _t = (l, a) => {
  let e = {}, t = Object.keys(l), r = Object.keys(a);
  for (let s of t) if (r.includes(s)) {
    let o = l[s], f = a[s];
    Array.isArray(o) || Array.isArray(f) ? e[s] = Gt(f, o) : typeof o == "object" && typeof f == "object" ? e[s] = _t(o, f) : e[s] = f + " " + o;
  } else e[s] = l[s];
  for (let s of r) t.includes(s) || (e[s] = a[s]);
  return e;
}, Et = (l) => !l || typeof l != "string" ? l : l.replace(/\s+/g, " ").trim();
const yt = "-", gl = (l) => {
  const a = yl(l), {
    conflictingClassGroups: e,
    conflictingClassGroupModifiers: t
  } = l;
  return {
    getClassGroupId: (o) => {
      const f = o.split(yt);
      return f[0] === "" && f.length !== 1 && f.shift(), Kt(f, a) || ml(o);
    },
    getConflictingClassGroupIds: (o, f) => {
      const n = e[o] || [];
      return f && t[o] ? [...n, ...t[o]] : n;
    }
  };
}, Kt = (l, a) => {
  var o;
  if (l.length === 0)
    return a.classGroupId;
  const e = l[0], t = a.nextPart.get(e), r = t ? Kt(l.slice(1), t) : void 0;
  if (r)
    return r;
  if (a.validators.length === 0)
    return;
  const s = l.join(yt);
  return (o = a.validators.find(({
    validator: f
  }) => f(s))) == null ? void 0 : o.classGroupId;
}, Lt = /^\[(.+)\]$/, ml = (l) => {
  if (Lt.test(l)) {
    const a = Lt.exec(l)[1], e = a == null ? void 0 : a.substring(0, a.indexOf(":"));
    if (e)
      return "arbitrary.." + e;
  }
}, yl = (l) => {
  const {
    theme: a,
    classGroups: e
  } = l, t = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const r in e)
    ft(e[r], t, r, a);
  return t;
}, ft = (l, a, e, t) => {
  l.forEach((r) => {
    if (typeof r == "string") {
      const s = r === "" ? a : At(a, r);
      s.classGroupId = e;
      return;
    }
    if (typeof r == "function") {
      if (hl(r)) {
        ft(r(t), a, e, t);
        return;
      }
      a.validators.push({
        validator: r,
        classGroupId: e
      });
      return;
    }
    Object.entries(r).forEach(([s, o]) => {
      ft(o, At(a, s), e, t);
    });
  });
}, At = (l, a) => {
  let e = l;
  return a.split(yt).forEach((t) => {
    e.nextPart.has(t) || e.nextPart.set(t, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), e = e.nextPart.get(t);
  }), e;
}, hl = (l) => l.isThemeGetter, wl = (l) => {
  if (l < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let a = 0, e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  const r = (s, o) => {
    e.set(s, o), a++, a > l && (a = 0, t = e, e = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let o = e.get(s);
      if (o !== void 0)
        return o;
      if ((o = t.get(s)) !== void 0)
        return r(s, o), o;
    },
    set(s, o) {
      e.has(s) ? e.set(s, o) : r(s, o);
    }
  };
}, pt = "!", bt = ":", xl = bt.length, kl = (l) => {
  const {
    prefix: a,
    experimentalParseClassName: e
  } = l;
  let t = (r) => {
    const s = [];
    let o = 0, f = 0, n = 0, i;
    for (let g = 0; g < r.length; g++) {
      let y = r[g];
      if (o === 0 && f === 0) {
        if (y === bt) {
          s.push(r.slice(n, g)), n = g + xl;
          continue;
        }
        if (y === "/") {
          i = g;
          continue;
        }
      }
      y === "[" ? o++ : y === "]" ? o-- : y === "(" ? f++ : y === ")" && f--;
    }
    const b = s.length === 0 ? r : r.substring(n), k = Cl(b), m = k !== b, d = i && i > n ? i - n : void 0;
    return {
      modifiers: s,
      hasImportantModifier: m,
      baseClassName: k,
      maybePostfixModifierPosition: d
    };
  };
  if (a) {
    const r = a + bt, s = t;
    t = (o) => o.startsWith(r) ? s(o.substring(r.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: o,
      maybePostfixModifierPosition: void 0
    };
  }
  if (e) {
    const r = t;
    t = (s) => e({
      className: s,
      parseClassName: r
    });
  }
  return t;
}, Cl = (l) => l.endsWith(pt) ? l.substring(0, l.length - 1) : l.startsWith(pt) ? l.substring(1) : l, zl = (l) => {
  const a = Object.fromEntries(l.orderSensitiveModifiers.map((t) => [t, !0]));
  return (t) => {
    if (t.length <= 1)
      return t;
    const r = [];
    let s = [];
    return t.forEach((o) => {
      o[0] === "[" || a[o] ? (r.push(...s.sort(), o), s = []) : s.push(o);
    }), r.push(...s.sort()), r;
  };
}, Sl = (l) => ({
  cache: wl(l.cacheSize),
  parseClassName: kl(l),
  sortModifiers: zl(l),
  ...gl(l)
}), Bl = /\s+/, Vl = (l, a) => {
  const {
    parseClassName: e,
    getClassGroupId: t,
    getConflictingClassGroupIds: r,
    sortModifiers: s
  } = a, o = [], f = l.trim().split(Bl);
  let n = "";
  for (let i = f.length - 1; i >= 0; i -= 1) {
    const b = f[i], {
      isExternal: k,
      modifiers: m,
      hasImportantModifier: d,
      baseClassName: g,
      maybePostfixModifierPosition: y
    } = e(b);
    if (k) {
      n = b + (n.length > 0 ? " " + n : n);
      continue;
    }
    let u = !!y, c = t(u ? g.substring(0, y) : g);
    if (!c) {
      if (!u) {
        n = b + (n.length > 0 ? " " + n : n);
        continue;
      }
      if (c = t(g), !c) {
        n = b + (n.length > 0 ? " " + n : n);
        continue;
      }
      u = !1;
    }
    const v = s(m).join(":"), z = d ? v + pt : v, D = z + c;
    if (o.includes(D))
      continue;
    o.push(D);
    const M = r(c, u);
    for (let V = 0; V < M.length; ++V) {
      const T = M[V];
      o.push(z + T);
    }
    n = b + (n.length > 0 ? " " + n : n);
  }
  return n;
};
function $l() {
  let l = 0, a, e, t = "";
  for (; l < arguments.length; )
    (a = arguments[l++]) && (e = Yt(a)) && (t && (t += " "), t += e);
  return t;
}
const Yt = (l) => {
  if (typeof l == "string")
    return l;
  let a, e = "";
  for (let t = 0; t < l.length; t++)
    l[t] && (a = Yt(l[t])) && (e && (e += " "), e += a);
  return e;
};
function vt(l, ...a) {
  let e, t, r, s = o;
  function o(n) {
    const i = a.reduce((b, k) => k(b), l());
    return e = Sl(i), t = e.cache.get, r = e.cache.set, s = f, f(n);
  }
  function f(n) {
    const i = t(n);
    if (i)
      return i;
    const b = Vl(n, e);
    return r(n, b), b;
  }
  return function() {
    return s($l.apply(null, arguments));
  };
}
const be = (l) => {
  const a = (e) => e[l] || [];
  return a.isThemeGetter = !0, a;
}, Ut = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Xt = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Il = /^\d+\/\d+$/, Dl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ml = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Tl = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Rl = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, El = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Fe = (l) => Il.test(l), re = (l) => !!l && !Number.isNaN(Number(l)), Re = (l) => !!l && Number.isInteger(Number(l)), Ot = (l) => l.endsWith("%") && re(l.slice(0, -1)), Me = (l) => Dl.test(l), Ll = () => !0, Al = (l) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ml.test(l) && !Tl.test(l)
), ht = () => !1, Ol = (l) => Rl.test(l), Pl = (l) => El.test(l), jl = (l) => !X(l) && !q(l), Fl = (l) => Ne(l, Jt, ht), X = (l) => Ut.test(l), Ee = (l) => Ne(l, Qt, Al), nt = (l) => Ne(l, Zl, re), Wl = (l) => Ne(l, qt, ht), Hl = (l) => Ne(l, Zt, Pl), Nl = (l) => Ne(l, ht, Ol), q = (l) => Xt.test(l), Qe = (l) => Ge(l, Qt), Gl = (l) => Ge(l, Jl), _l = (l) => Ge(l, qt), Kl = (l) => Ge(l, Jt), Yl = (l) => Ge(l, Zt), Ul = (l) => Ge(l, Ql, !0), Ne = (l, a, e) => {
  const t = Ut.exec(l);
  return t ? t[1] ? a(t[1]) : e(t[2]) : !1;
}, Ge = (l, a, e = !1) => {
  const t = Xt.exec(l);
  return t ? t[1] ? a(t[1]) : e : !1;
}, qt = (l) => l === "position", Xl = /* @__PURE__ */ new Set(["image", "url"]), Zt = (l) => Xl.has(l), ql = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Jt = (l) => ql.has(l), Qt = (l) => l === "length", Zl = (l) => l === "number", Jl = (l) => l === "family-name", Ql = (l) => l === "shadow", gt = () => {
  const l = be("color"), a = be("font"), e = be("text"), t = be("font-weight"), r = be("tracking"), s = be("leading"), o = be("breakpoint"), f = be("container"), n = be("spacing"), i = be("radius"), b = be("shadow"), k = be("inset-shadow"), m = be("drop-shadow"), d = be("blur"), g = be("perspective"), y = be("aspect"), u = be("ease"), c = be("animate"), v = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], z = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], D = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", "contain", "none"], V = () => [q, X, n], T = () => [Fe, "full", "auto", ...V()], $ = () => [Re, "none", "subgrid", q, X], O = () => ["auto", {
    span: ["full", Re, q, X]
  }, q, X], A = () => [Re, "auto", q, X], L = () => ["auto", "min", "max", "fr", q, X], P = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], F = () => ["start", "end", "center", "stretch"], S = () => ["auto", ...V()], E = () => [Fe, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...V()], I = () => [l, q, X], G = () => [Ot, Ee], j = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    i,
    q,
    X
  ], K = () => ["", re, Qe, Ee], Y = () => ["solid", "dashed", "dotted", "double"], oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    d,
    q,
    X
  ], Z = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", q, X], le = () => ["none", re, q, X], ee = () => ["none", re, q, X], se = () => [re, q, X], ue = () => [Fe, "full", ...V()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Me],
      breakpoint: [Me],
      color: [Ll],
      container: [Me],
      "drop-shadow": [Me],
      ease: ["in", "out", "in-out"],
      font: [jl],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Me],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Me],
      shadow: [Me],
      spacing: ["px", re],
      text: [Me],
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
        aspect: ["auto", "square", Fe, X, q, y]
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
        columns: [re, X, q, f]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": v()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": v()
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
        object: [...z(), X, q]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: D()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": D()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": D()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: M()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": M()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": M()
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
        inset: T()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": T()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": T()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: T()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: T()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: T()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: T()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: T()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: T()
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
        z: [Re, "auto", q, X]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Fe, "full", "auto", f, ...V()]
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
        flex: [re, Fe, "auto", "initial", "none", X]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", re, q, X]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", re, q, X]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Re, "first", "last", "none", q, X]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": $()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: O()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": A()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": A()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": $()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: O()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": A()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": A()
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
        "auto-cols": L()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": L()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: V()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": V()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": V()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...P(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...F(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...F()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...P()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...F(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...F(), "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": P()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...F(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...F()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: V()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: V()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: V()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: V()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: V()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: V()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: V()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: V()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: V()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: S()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: S()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: S()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: S()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: S()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: S()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: S()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: S()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: S()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": V()
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
        "space-y": V()
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
        size: E()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [f, "screen", ...E()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          f,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...E()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          f,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [o]
          },
          ...E()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...E()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...E()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...E()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", e, Qe, Ee]
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
        font: [t, q, nt]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ot, X]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Gl, X, a]
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
        tracking: [r, q, X]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [re, "none", q, nt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...V()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", q, X]
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
        list: ["disc", "decimal", "none", q, X]
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
        decoration: [...Y(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [re, "from-font", "auto", q, Ee]
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
        "underline-offset": [re, "auto", q, X]
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
        indent: V()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", q, X]
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
        content: ["none", q, X]
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
        bg: [...z(), _l, Wl]
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
        bg: ["auto", "cover", "contain", Kl, Fl]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Re, q, X],
          radial: ["", q, X],
          conic: [Re, q, X]
        }, Yl, Hl]
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
        from: G()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: G()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: G()
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
        rounded: j()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": j()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": j()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": j()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": j()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": j()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": j()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": j()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": j()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": j()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": j()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": j()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": j()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": j()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": j()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: K()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": K()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": K()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": K()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": K()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": K()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": K()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": K()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": K()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": K()
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
        "divide-y": K()
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
        border: [...Y(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Y(), "hidden", "none"]
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
        outline: [...Y(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [re, q, X]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", re, Qe, Ee]
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
          b,
          Ul,
          Nl
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
        "inset-shadow": ["none", q, X, k]
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
        ring: K()
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
        "ring-offset": [re, Ee]
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
        "inset-ring": K()
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
        opacity: [re, q, X]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...oe(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": oe()
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
          q,
          X
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: W()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [re, q, X]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [re, q, X]
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
          m,
          q,
          X
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", re, q, X]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [re, q, X]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", re, q, X]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [re, q, X]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", re, q, X]
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
          q,
          X
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": W()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [re, q, X]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [re, q, X]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", re, q, X]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [re, q, X]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", re, q, X]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [re, q, X]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [re, q, X]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", re, q, X]
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
        "border-spacing": V()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": V()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": V()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", q, X]
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
        duration: [re, "initial", q, X]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", u, q, X]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [re, q, X]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", c, q, X]
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
        perspective: [g, q, X]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": Z()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: le()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": le()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": le()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": le()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ee()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ee()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ee()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ee()
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
        skew: se()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": se()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": se()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [q, X, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: Z()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", q, X]
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
        "scroll-m": V()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": V()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": V()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": V()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": V()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": V()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": V()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": V()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": V()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": V()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": V()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": V()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": V()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": V()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": V()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": V()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": V()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": V()
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
        "will-change": ["auto", "scroll", "contents", "transform", q, X]
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
        stroke: [re, Qe, Ee, nt]
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
}, ea = (l, {
  cacheSize: a,
  prefix: e,
  experimentalParseClassName: t,
  extend: r = {},
  override: s = {}
}) => (Xe(l, "cacheSize", a), Xe(l, "prefix", e), Xe(l, "experimentalParseClassName", t), et(l.theme, s.theme), et(l.classGroups, s.classGroups), et(l.conflictingClassGroups, s.conflictingClassGroups), et(l.conflictingClassGroupModifiers, s.conflictingClassGroupModifiers), Xe(l, "orderSensitiveModifiers", s.orderSensitiveModifiers), tt(l.theme, r.theme), tt(l.classGroups, r.classGroups), tt(l.conflictingClassGroups, r.conflictingClassGroups), tt(l.conflictingClassGroupModifiers, r.conflictingClassGroupModifiers), el(l, r, "orderSensitiveModifiers"), l), Xe = (l, a, e) => {
  e !== void 0 && (l[a] = e);
}, et = (l, a) => {
  if (a)
    for (const e in a)
      Xe(l, e, a[e]);
}, tt = (l, a) => {
  if (a)
    for (const e in a)
      el(l, a, e);
}, el = (l, a, e) => {
  const t = a[e];
  t !== void 0 && (l[e] = l[e] ? l[e].concat(t) : t);
}, ta = (l, ...a) => typeof l == "function" ? vt(gt, l, ...a) : vt(() => ea(gt(), l), ...a), la = /* @__PURE__ */ vt(gt);
var aa = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, tl = (l) => l || void 0, Ze = (...l) => tl(Nt(l).filter(Boolean).join(" ")), st = null, Ie = {}, mt = !1, _e = (...l) => (a) => a.twMerge ? ((!st || mt) && (mt = !1, st = we(Ie) ? la : ta({ ...Ie, extend: { theme: Ie.theme, classGroups: Ie.classGroups, conflictingClassGroupModifiers: Ie.conflictingClassGroupModifiers, conflictingClassGroups: Ie.conflictingClassGroups, ...Ie.extend } })), tl(st(Ze(l)))) : Ze(l), Pt = (l, a) => {
  for (let e in a) l.hasOwnProperty(e) ? l[e] = Ze(l[e], a[e]) : l[e] = a[e];
  return l;
}, R = (l, a) => {
  let { extend: e = null, slots: t = {}, variants: r = {}, compoundVariants: s = [], compoundSlots: o = [], defaultVariants: f = {} } = l, n = { ...aa, ...a }, i = e != null && e.base ? Ze(e.base, l == null ? void 0 : l.base) : l == null ? void 0 : l.base, b = e != null && e.variants && !we(e.variants) ? _t(r, e.variants) : r, k = e != null && e.defaultVariants && !we(e.defaultVariants) ? { ...e.defaultVariants, ...f } : f;
  !we(n.twMergeConfig) && !vl(n.twMergeConfig, Ie) && (mt = !0, Ie = n.twMergeConfig);
  let m = we(e == null ? void 0 : e.slots), d = we(t) ? {} : { base: Ze(l == null ? void 0 : l.base, m && (e == null ? void 0 : e.base)), ...t }, g = m ? d : Pt({ ...e == null ? void 0 : e.slots }, we(d) ? { base: l == null ? void 0 : l.base } : d), y = we(e == null ? void 0 : e.compoundVariants) ? s : Gt(e == null ? void 0 : e.compoundVariants, s), u = (v) => {
    if (we(b) && we(t) && m) return _e(i, v == null ? void 0 : v.class, v == null ? void 0 : v.className)(n);
    if (y && !Array.isArray(y)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof y}`);
    if (o && !Array.isArray(o)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof o}`);
    let z = (P, F, S = [], E) => {
      let I = S;
      if (typeof F == "string") I = I.concat(Et(F).split(" ").map((G) => `${P}:${G}`));
      else if (Array.isArray(F)) I = I.concat(F.reduce((G, j) => G.concat(`${P}:${j}`), []));
      else if (typeof F == "object" && typeof E == "string") {
        for (let G in F) if (F.hasOwnProperty(G) && G === E) {
          let j = F[G];
          if (j && typeof j == "string") {
            let K = Et(j);
            I[E] ? I[E] = I[E].concat(K.split(" ").map((Y) => `${P}:${Y}`)) : I[E] = K.split(" ").map((Y) => `${P}:${Y}`);
          } else Array.isArray(j) && j.length > 0 && (I[E] = j.reduce((K, Y) => K.concat(`${P}:${Y}`), []));
        }
      }
      return I;
    }, D = (P, F = b, S = null, E = null) => {
      var I;
      let G = F[P];
      if (!G || we(G)) return null;
      let j = (I = E == null ? void 0 : E[P]) != null ? I : v == null ? void 0 : v[P];
      if (j === null) return null;
      let K = Rt(j), Y = Array.isArray(n.responsiveVariants) && n.responsiveVariants.length > 0 || n.responsiveVariants === !0, oe = k == null ? void 0 : k[P], W = [];
      if (typeof K == "object" && Y) for (let [ee, se] of Object.entries(K)) {
        let ue = G[se];
        if (ee === "initial") {
          oe = se;
          continue;
        }
        Array.isArray(n.responsiveVariants) && !n.responsiveVariants.includes(ee) || (W = z(ee, ue, W, S));
      }
      let Z = K != null && typeof K != "object" ? K : Rt(oe), le = G[Z || "false"];
      return typeof W == "object" && typeof S == "string" && W[S] ? Pt(W, le) : W.length > 0 ? (W.push(le), S === "base" ? W.join(" ") : W) : le;
    }, M = () => b ? Object.keys(b).map((P) => D(P, b)) : null, V = (P, F) => {
      if (!b || typeof b != "object") return null;
      let S = new Array();
      for (let E in b) {
        let I = D(E, b, P, F), G = P === "base" && typeof I == "string" ? I : I && I[P];
        G && (S[S.length] = G);
      }
      return S;
    }, T = {};
    for (let P in v) v[P] !== void 0 && (T[P] = v[P]);
    let $ = (P, F) => {
      var S;
      let E = typeof (v == null ? void 0 : v[P]) == "object" ? { [P]: (S = v[P]) == null ? void 0 : S.initial } : {};
      return { ...k, ...T, ...E, ...F };
    }, O = (P = [], F) => {
      let S = [];
      for (let { class: E, className: I, ...G } of P) {
        let j = !0;
        for (let [K, Y] of Object.entries(G)) {
          let oe = $(K, F)[K];
          if (Array.isArray(Y)) {
            if (!Y.includes(oe)) {
              j = !1;
              break;
            }
          } else {
            let W = (Z) => Z == null || Z === !1;
            if (W(Y) && W(oe)) continue;
            if (oe !== Y) {
              j = !1;
              break;
            }
          }
        }
        j && (E && S.push(E), I && S.push(I));
      }
      return S;
    }, A = (P) => {
      let F = O(y, P);
      if (!Array.isArray(F)) return F;
      let S = {};
      for (let E of F) if (typeof E == "string" && (S.base = _e(S.base, E)(n)), typeof E == "object") for (let [I, G] of Object.entries(E)) S[I] = _e(S[I], G)(n);
      return S;
    }, L = (P) => {
      if (o.length < 1) return null;
      let F = {};
      for (let { slots: S = [], class: E, className: I, ...G } of o) {
        if (!we(G)) {
          let j = !0;
          for (let K of Object.keys(G)) {
            let Y = $(K, P)[K];
            if (Y === void 0 || (Array.isArray(G[K]) ? !G[K].includes(Y) : G[K] !== Y)) {
              j = !1;
              break;
            }
          }
          if (!j) continue;
        }
        for (let j of S) F[j] = F[j] || [], F[j].push([E, I]);
      }
      return F;
    };
    if (!we(t) || !m) {
      let P = {};
      if (typeof g == "object" && !we(g)) for (let F of Object.keys(g)) P[F] = (S) => {
        var E, I;
        return _e(g[F], V(F, S), ((E = A(S)) != null ? E : [])[F], ((I = L(S)) != null ? I : [])[F], S == null ? void 0 : S.class, S == null ? void 0 : S.className)(n);
      };
      return P;
    }
    return _e(i, M(), O(y), v == null ? void 0 : v.class, v == null ? void 0 : v.className)(n);
  }, c = () => {
    if (!(!b || typeof b != "object")) return Object.keys(b);
  };
  return u.variantKeys = c(), u.extend = e, u.base = i, u.slots = g, u.variants = b, u.defaultVariants = k, u.compoundSlots = o, u.compoundVariants = y, u;
};
const ra = R({
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
}), oa = ["onUpdate:modelValue", "onInput", "onKeydown"], na = /* @__PURE__ */ J({
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
    const a = l, { values: e, setRef: t, onInput: r, onKeydown: s } = bl(a.length ?? 4), o = h(() => {
      var n, i;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.container) || "flex gap-2" : (i = a.pt) != null && i.container ? `flex gap-2 ${a.pt.container}` : "flex gap-2";
    }), f = h(() => {
      var n, i;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.input) || "" : ra({
        state: a.state,
        size: a.size,
        class: (i = a.pt) == null ? void 0 : i.input
      });
    });
    return (n, i) => (w(), x("div", {
      class: p(o.value)
    }, [
      (w(!0), x(ae, null, ne(C(e).length, (b, k) => We((w(), x("input", {
        key: k,
        "onUpdate:modelValue": (m) => C(e)[k] = m,
        ref_for: !0,
        ref: (m) => C(t)(m, k),
        class: p(f.value),
        maxlength: "1",
        onInput: (m) => C(r)(m, k),
        onKeydown: (m) => C(s)(m, k),
        type: "text",
        inputmode: "numeric",
        autocomplete: "one-time-code"
      }, null, 42, oa)), [
        [jt, C(e)[k]]
      ])), 128))
    ], 2));
  }
}), sa = Q(na);
function ia(l) {
  const a = H(!1), e = (l == null ? void 0 : l.closeOnEsc) ?? !0, t = (l == null ? void 0 : l.closeOnOverlayClick) ?? !0, r = () => {
    a.value = !0;
  }, s = () => {
    var b;
    a.value = !1, (b = l == null ? void 0 : l.onClose) == null || b.call(l);
  }, o = H(null), f = H(null), n = (b) => {
    b.key === "Escape" && e && s();
  };
  return te(a, (b) => {
    b ? (document.addEventListener("keydown", n), document.body.style.overflow = "hidden") : (document.removeEventListener("keydown", n), document.body.style.overflow = "");
  }), Te(() => {
    document.removeEventListener("keydown", n), document.body.style.overflow = "";
  }), {
    isOpen: a,
    open: r,
    close: s,
    modalRef: o,
    overlayRef: f,
    onOverlayClick: (b) => {
      b.target === f.value && t && s();
    }
  };
}
const ua = R({
  base: "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center"
}), da = R({
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
}), ca = R({
  base: "px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between"
}), fa = R({
  base: "text-lg font-medium text-gray-900 dark:text-white"
}), pa = R({
  base: "p-6 flex-1 overflow-y-auto"
}), ba = R({
  base: "px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-2"
}), va = R({
  base: "absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
}), ga = /* @__PURE__ */ J({
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
    const e = l, t = a, r = He(), { isOpen: s, open: o, close: f, modalRef: n, overlayRef: i, onOverlayClick: b } = ia({
      onClose: () => {
        t("close"), t("update:modelValue", !1);
      },
      closeOnEsc: e.closeOnEsc,
      closeOnOverlayClick: e.closeOnOverlayClick
    });
    ve(async () => {
      await me(), e.modelValue && o();
    }), te(
      () => e.modelValue,
      (M) => {
        M && !s.value ? o() : !M && s.value && f();
      }
    ), te(s, (M) => {
      M !== e.modelValue && t("update:modelValue", M);
    });
    const k = () => {
      f();
    }, m = h(() => !!e.title || !!r.header), d = h(() => !!r.footer), g = h(() => {
      var M, V;
      return e.unstyled ? [(M = e.pt) == null ? void 0 : M.overlay, e.class].filter(Boolean) : [ua({ class: (V = e.pt) == null ? void 0 : V.overlay }), e.class];
    }), y = h(() => {
      var M, V;
      return e.unstyled ? [(M = e.pt) == null ? void 0 : M.content, e.contentClass].filter(Boolean) : [
        da({
          size: e.size,
          class: (V = e.pt) == null ? void 0 : V.content
        }),
        e.contentClass
      ];
    }), u = h(() => {
      var M, V;
      return e.unstyled ? [(M = e.pt) == null ? void 0 : M.header, e.headerClass].filter(Boolean) : [ca({ class: (V = e.pt) == null ? void 0 : V.header }), e.headerClass];
    }), c = h(() => {
      var M, V;
      return e.unstyled ? ((M = e.pt) == null ? void 0 : M.title) || "" : fa({ class: (V = e.pt) == null ? void 0 : V.title });
    }), v = h(() => {
      var M, V;
      return e.unstyled ? [(M = e.pt) == null ? void 0 : M.body, e.bodyClass].filter(Boolean) : [pa({ class: (V = e.pt) == null ? void 0 : V.body }), e.bodyClass];
    }), z = h(() => {
      var M, V;
      return e.unstyled ? [(M = e.pt) == null ? void 0 : M.footer, e.footerClass].filter(Boolean) : [ba({ class: (V = e.pt) == null ? void 0 : V.footer }), e.footerClass];
    }), D = h(() => {
      var M, V;
      return e.unstyled ? ((M = e.pt) == null ? void 0 : M.closeButton) || "" : va({ class: (V = e.pt) == null ? void 0 : V.closeButton });
    });
    return (M, V) => (w(), Se(rt, { to: "body" }, [
      C(s) ? (w(), x("div", {
        key: 0,
        class: p(g.value),
        ref_key: "overlayRef",
        ref: i,
        onClick: V[0] || (V[0] = //@ts-ignore
        (...T) => C(b) && C(b)(...T))
      }, [
        B("div", {
          class: p(y.value),
          ref_key: "modalRef",
          ref: n,
          role: "dialog",
          "aria-modal": "true",
          tabindex: "-1"
        }, [
          m.value ? (w(), x("div", {
            key: 0,
            class: p(u.value)
          }, [
            _(M.$slots, "header", {}, () => [
              B("h3", {
                class: p(c.value)
              }, U(e.title), 3)
            ]),
            M.hideCloseButton ? N("", !0) : (w(), x("button", {
              key: 0,
              class: p(D.value),
              onClick: k,
              "aria-label": "关闭"
            }, [
              _(M.$slots, "close-icon", {}, () => [
                V[1] || (V[1] = B("svg", {
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
                  B("line", {
                    x1: "18",
                    y1: "6",
                    x2: "6",
                    y2: "18"
                  }),
                  B("line", {
                    x1: "6",
                    y1: "6",
                    x2: "18",
                    y2: "18"
                  })
                ], -1))
              ])
            ], 2))
          ], 2)) : N("", !0),
          B("div", {
            class: p(v.value)
          }, [
            _(M.$slots, "default")
          ], 2),
          d.value ? (w(), x("div", {
            key: 1,
            class: p(z.value)
          }, [
            _(M.$slots, "footer")
          ], 2)) : N("", !0)
        ], 2)
      ], 2)) : N("", !0)
    ]));
  }
}), ma = Q(ga);
function ya() {
  const l = H(!1), a = H(!1);
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
const ha = R({
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
}), wa = ["src", "alt"], xa = ["src", "alt"], ka = /* @__PURE__ */ J({
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
    const a = l, { isError: e, onLoad: t, onError: r } = ya(), s = h(() => {
      var m, d;
      return a.unstyled ? ((m = a.pt) == null ? void 0 : m.root) || "" : ha({
        size: a.size,
        shape: a.shape,
        status: a.status,
        class: (d = a.pt) == null ? void 0 : d.root
      });
    }), o = h(() => {
      var m;
      return a.unstyled ? ((m = a.pt) == null ? void 0 : m.image) || "" : "w-full h-full object-cover";
    }), f = h(() => {
      var m;
      return a.unstyled ? ((m = a.pt) == null ? void 0 : m.fallback) || "" : "w-full h-full flex items-center justify-center";
    }), n = h(() => {
      var m;
      return a.unstyled ? ((m = a.pt) == null ? void 0 : m.initials) || "" : "w-full h-full flex items-center justify-center";
    }), i = h(() => {
      var m;
      return a.unstyled ? ((m = a.pt) == null ? void 0 : m.icon) || "" : "w-1/2 h-1/2";
    }), b = h(() => a.alt ? a.alt.split(" ").map((m) => m.charAt(0)).slice(0, 2).join("").toUpperCase() : ""), k = h(() => !a.src || e.value);
    return (m, d) => (w(), x("div", {
      class: p(s.value)
    }, [
      k.value ? m.fallback ? (w(), x("span", {
        key: 1,
        class: p(f.value)
      }, [
        B("img", {
          src: m.fallback,
          alt: m.alt,
          class: p(o.value)
        }, null, 10, xa)
      ], 2)) : m.alt ? (w(), x("span", {
        key: 2,
        class: p(n.value)
      }, U(b.value), 3)) : (w(), x("span", {
        key: 3,
        class: p(f.value)
      }, [
        (w(), x("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          class: p(i.value)
        }, d[2] || (d[2] = [
          B("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }, null, -1),
          B("circle", {
            cx: "12",
            cy: "7",
            r: "4"
          }, null, -1)
        ]), 2))
      ], 2)) : (w(), x("img", {
        key: 0,
        src: m.src,
        alt: m.alt,
        class: p(o.value),
        onLoad: d[0] || (d[0] = //@ts-ignore
        (...g) => C(t) && C(t)(...g)),
        onError: d[1] || (d[1] = //@ts-ignore
        (...g) => C(r) && C(r)(...g))
      }, null, 42, wa))
    ], 2));
  }
}), Ca = Q(ka);
function za(l) {
  const a = h(() => l.dot ? l.show !== !1 : l.show !== !1 && l.content !== void 0 && l.content !== ""), e = h(() => {
    switch (l.position) {
      case "top-left":
        return "top-0 left-0 -translate-x-1/2 -translate-y-1/2";
      case "bottom-right":
        return "bottom-0 right-0 translate-x-1/2 translate-y-1/2";
      case "bottom-left":
        return "bottom-0 left-0 -translate-x-1/2 translate-y-1/2";
      case "top-right":
      default:
        return "top-0 right-0 translate-x-1/2 -translate-y-1/2";
    }
  });
  return {
    visible: a,
    positionClass: e
  };
}
const Sa = R({
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
}), Ba = /* @__PURE__ */ J({
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
    const a = l, { visible: e, positionClass: t } = za(a), r = h(() => {
      var f;
      return a.unstyled ? ((f = a.pt) == null ? void 0 : f.root) || "" : "relative inline-block";
    }), s = h(() => {
      var f, n;
      return a.unstyled ? ((f = a.pt) == null ? void 0 : f.badge) || "" : Sa({
        color: a.color,
        size: a.size,
        dot: a.dot,
        class: [t.value, (n = a.pt) == null ? void 0 : n.badge]
      });
    }), o = h(() => a.dot ? "" : typeof a.content == "number" && a.max && a.content > a.max ? `${a.max}+` : a.content);
    return (f, n) => (w(), x("div", {
      class: p(r.value)
    }, [
      _(f.$slots, "default"),
      C(e) ? (w(), x("span", {
        key: 0,
        class: p(s.value),
        role: "status",
        "aria-live": "polite"
      }, U(o.value), 3)) : N("", !0)
    ], 2));
  }
}), Va = Q(Ba);
function $a(l) {
  const a = H(l.modelValue ?? !1), e = () => {
    var r;
    l.disabled || (a.value = !a.value, (r = l.onChange) == null || r.call(l, a.value));
  };
  return te(
    () => l.modelValue,
    (r) => {
      r !== void 0 && (a.value = r);
    }
  ), {
    checked: h(() => !!a.value),
    disabled: h(() => !!l.disabled),
    toggle: e,
    onKeyDown: (r) => {
      (r.key === "Enter" || r.key === " ") && (r.preventDefault(), e());
    }
  };
}
const Ia = R({
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
        root: "w-8 h-4",
        thumb: "w-3 h-3 top-0.5"
      },
      default: {
        root: "w-10 h-6",
        thumb: "w-4 h-4 top-1"
      },
      large: {
        root: "w-12 h-7",
        thumb: "w-5 h-5 top-1"
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
}), Da = ["aria-checked", "disabled"], Ma = /* @__PURE__ */ J({
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
    const e = l, t = a, { checked: r, toggle: s, onKeyDown: o } = $a({
      modelValue: e.modelValue,
      disabled: e.disabled,
      onChange: (u) => t("update:modelValue", u)
    }), f = H(!1);
    te(r, (u) => {
      u && (f.value = !0, setTimeout(() => {
        f.value = !1;
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
    }, i = () => {
      if (!r.value)
        return "bg-gray-300 dark:bg-gray-600";
      const u = {
        blue: "bg-blue-600 dark:bg-blue-500",
        green: "bg-green-600 dark:bg-green-500",
        red: "bg-red-600 dark:bg-red-500",
        yellow: "bg-yellow-600 dark:bg-yellow-500",
        purple: "bg-purple-600 dark:bg-purple-500"
      };
      return u[e.color] || u.blue;
    }, b = () => {
      const u = {
        blue: "bg-blue-400/10",
        green: "bg-green-400/10",
        red: "bg-red-400/10",
        yellow: "bg-yellow-400/10",
        purple: "bg-purple-400/10"
      };
      return u[e.color] || u.blue;
    }, k = h(
      () => Ia({
        checked: r.value,
        disabled: e.disabled,
        size: e.size,
        color: e.color
      })
    ), m = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.root) || "" : k.value.root({ class: (c = e.pt) == null ? void 0 : c.root });
    }), d = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.track) || "" : i() + ((c = e.pt) != null && c.track ? ` ${e.pt.track}` : "");
    }), g = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.thumb) || "" : k.value.thumb({ class: (c = e.pt) == null ? void 0 : c.thumb });
    }), y = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.ripple) || "" : b() + ((c = e.pt) != null && c.ripple ? ` ${e.pt.ripple}` : "");
    });
    return (u, c) => (w(), x("button", {
      type: "button",
      role: "switch",
      "aria-checked": C(r),
      disabled: e.disabled,
      onClick: c[0] || (c[0] = //@ts-ignore
      (...v) => C(s) && C(s)(...v)),
      onKeydown: c[1] || (c[1] = //@ts-ignore
      (...v) => C(o) && C(o)(...v)),
      class: p(m.value)
    }, [
      B("span", {
        class: p([
          d.value,
          "absolute inset-0 rounded-full transition-colors duration-300 ease-in-out"
        ])
      }, null, 2),
      B("span", {
        class: p([
          g.value,
          "transform transition-all duration-300 ease-in-out",
          n()
        ])
      }, [
        C(r) ? (w(), x("span", {
          key: 0,
          class: p(["absolute inset-0 bg-white rounded-full transition-all duration-300", {
            "opacity-100 scale-100": C(r),
            "opacity-0 scale-0": !C(r)
          }])
        }, null, 2)) : N("", !0)
      ], 2),
      B("span", {
        class: p(["absolute inset-0 transition-opacity duration-300", { "opacity-0": !C(r), "opacity-100": C(r) }])
      }, [
        B("span", {
          class: p(["absolute inset-0 rounded-full transform transition-transform duration-500", [
            y.value,
            { "scale-100": f.value, "scale-0": !f.value }
          ]])
        }, null, 2)
      ], 2)
    ], 42, Da));
  }
}), ll = (l, a) => {
  const e = l.__vccOpts || l;
  for (const [t, r] of a)
    e[t] = r;
  return e;
}, Ta = /* @__PURE__ */ ll(Ma, [["__scopeId", "data-v-dec8aa04"]]), Ra = Q(Ta);
function Ea(l) {
  const a = H(!1), e = (l == null ? void 0 : l.closeOnEsc) ?? !0, t = (l == null ? void 0 : l.closeOnOverlayClick) ?? !0, r = () => {
    var b;
    a.value = !0, (b = l == null ? void 0 : l.onOpen) == null || b.call(l);
  }, s = () => {
    var b;
    a.value = !1, (b = l == null ? void 0 : l.onClose) == null || b.call(l);
  }, o = H(null), f = H(null), n = (b) => {
    b.key === "Escape" && e && s();
  }, i = (b) => {
    b.target === f.value && t && s();
  };
  return te(a, (b) => {
    b ? document.addEventListener("keydown", n) : document.removeEventListener("keydown", n);
  }), Te(() => {
    document.removeEventListener("keydown", n);
  }), {
    isOpen: a,
    open: r,
    close: s,
    overlayRef: f,
    drawerRef: o,
    onOverlayClick: i
  };
}
const La = R({
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
}), Aa = R({
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
}), Oa = R({
  base: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700"
}), Pa = R({
  base: "text-lg font-medium text-gray-900 dark:text-white"
}), ja = R({
  base: "p-1 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
}), Fa = R({
  base: "flex-1 p-4 overflow-y-auto"
}), Wa = R({
  base: "flex justify-end gap-2 p-4 border-t border-gray-200 dark:border-gray-700"
}), Ha = ["aria-hidden", "aria-labelledby"], Na = /* @__PURE__ */ J({
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
    const e = l, t = a, r = He(), { isOpen: s, close: o, open: f, drawerRef: n, overlayRef: i, onOverlayClick: b } = Ea({
      onClose: () => {
        t("update:modelValue", !1), t("close");
      },
      onOpen: () => {
        t("open");
      },
      closeOnEsc: e.closeOnEsc,
      closeOnOverlayClick: e.closeOnOverlayClick
    });
    te(
      () => e.modelValue,
      (T) => {
        T && !s.value ? f() : !T && s.value && o();
      },
      { immediate: !0 }
    ), te(s, (T) => {
      T !== e.modelValue && t("update:modelValue", T);
    });
    const k = H("");
    te(s, (T) => {
      e.preventScroll && (T ? (k.value = document.body.style.overflow, document.body.style.overflow = "hidden") : document.body.style.overflow = k.value);
    }), De(() => {
      e.preventScroll && s.value && (document.body.style.overflow = k.value);
    });
    const m = h(() => {
      var T, $;
      return e.unstyled ? [(T = e.pt) == null ? void 0 : T.overlay, e.overlayClass].filter(Boolean) : [
        La({
          open: s.value,
          class: ($ = e.pt) == null ? void 0 : $.overlay
        }),
        e.overlayClass
      ];
    }), d = h(() => {
      var T, $;
      return e.unstyled ? [(T = e.pt) == null ? void 0 : T.container, e.contentClass, e.class].filter(
        Boolean
      ) : [
        Aa({
          placement: e.placement,
          open: s.value,
          class: ($ = e.pt) == null ? void 0 : $.container
        }),
        e.contentClass,
        e.class
      ];
    }), g = h(() => {
      const T = {
        zIndex: e.zIndex.toString()
      };
      if (!e.unstyled && e.size) {
        const $ = typeof e.size == "number" ? `${e.size}px` : e.size;
        e.placement === "left" || e.placement === "right" ? T.width = $ : T.height = $;
      }
      return T;
    }), y = h(() => {
      var T, $;
      return e.unstyled ? [(T = e.pt) == null ? void 0 : T.header, e.headerClass].filter(Boolean) : [Oa({ class: ($ = e.pt) == null ? void 0 : $.header }), e.headerClass];
    }), u = h(() => {
      var T, $;
      return e.unstyled ? ((T = e.pt) == null ? void 0 : T.title) || "" : Pa({ class: ($ = e.pt) == null ? void 0 : $.title });
    }), c = h(() => {
      var T, $;
      return e.unstyled ? ((T = e.pt) == null ? void 0 : T.closeButton) || "" : ja({ class: ($ = e.pt) == null ? void 0 : $.closeButton });
    }), v = h(() => {
      var T, $;
      return e.unstyled ? [(T = e.pt) == null ? void 0 : T.body, e.bodyClass].filter(Boolean) : [Fa({ class: ($ = e.pt) == null ? void 0 : $.body }), e.bodyClass];
    }), z = h(() => {
      var T, $;
      return e.unstyled ? [(T = e.pt) == null ? void 0 : T.footer, e.footerClass].filter(Boolean) : [Wa({ class: ($ = e.pt) == null ? void 0 : $.footer }), e.footerClass];
    }), D = () => {
      o();
    }, M = h(() => !!e.title || !!r.header), V = h(() => !!r.footer);
    return (T, $) => (w(), Se(rt, { to: "body" }, [
      T.showOverlay && C(s) ? (w(), x("div", {
        key: 0,
        class: p(m.value),
        ref_key: "overlayRef",
        ref: i,
        onClick: $[0] || ($[0] = //@ts-ignore
        (...O) => C(b) && C(b)(...O)),
        role: "presentation",
        "aria-hidden": "true"
      }, null, 2)) : N("", !0),
      B("div", {
        class: p(d.value),
        style: de(g.value),
        ref_key: "drawerRef",
        ref: n,
        role: "dialog",
        "aria-modal": "true",
        "aria-hidden": !C(s),
        "aria-labelledby": T.title ? "drawer-title" : void 0
      }, [
        M.value ? (w(), x("div", {
          key: 0,
          class: p(y.value)
        }, [
          _(T.$slots, "header", {}, () => [
            T.title ? (w(), x("h2", {
              key: 0,
              class: p(u.value),
              id: "drawer-title"
            }, U(T.title), 3)) : N("", !0)
          ]),
          T.hideCloseButton ? N("", !0) : (w(), x("button", {
            key: 0,
            class: p(c.value),
            onClick: D,
            "aria-label": "关闭",
            type: "button"
          }, [
            _(T.$slots, "close-icon", {}, () => [
              $[1] || ($[1] = B("svg", {
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
                B("line", {
                  x1: "18",
                  y1: "6",
                  x2: "6",
                  y2: "18"
                }),
                B("line", {
                  x1: "6",
                  y1: "6",
                  x2: "18",
                  y2: "18"
                })
              ], -1))
            ])
          ], 2))
        ], 2)) : N("", !0),
        B("div", {
          class: p(v.value)
        }, [
          _(T.$slots, "default")
        ], 2),
        V.value ? (w(), x("div", {
          key: 1,
          class: p(z.value)
        }, [
          _(T.$slots, "footer")
        ], 2)) : N("", !0)
      ], 14, Ha)
    ]));
  }
}), Ga = Q(Na);
function _a(l, a) {
  const e = H(
    a.modelValue !== void 0 ? a.modelValue : l[0]
  ), t = (o) => e.value === o, r = (o) => {
    var f;
    e.value = o, (f = a.onChange) == null || f.call(a, o);
  };
  return {
    selected: e,
    isSelected: t,
    select: r,
    onKeydown: (o) => {
      const f = l.indexOf(e.value);
      if (o.key === "ArrowRight" || o.key === "ArrowDown") {
        const n = l[(f + 1) % l.length];
        r(n);
      } else if (o.key === "ArrowLeft" || o.key === "ArrowUp") {
        const n = l[(f - 1 + l.length) % l.length];
        r(n);
      }
    }
  };
}
const Ka = R({
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
}), Ya = R({
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
}), Ua = ["disabled", "aria-selected", "tabindex", "onClick"], Xa = /* @__PURE__ */ J({
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
    const e = l, t = a, r = h(() => e.options.map((m) => typeof m == "object" ? {
      value: m.value,
      label: m.label,
      disabled: m.disabled || !1
    } : {
      value: m,
      label: String(m),
      disabled: !1
    })), s = h(() => r.value.map((m) => m.value)), { isSelected: o, select: f, onKeydown: n } = _a(s.value, {
      modelValue: e.modelValue,
      onChange: (m) => {
        t("update:modelValue", m), t("change", m);
      }
    });
    te(
      () => e.modelValue,
      (m) => {
        m !== void 0 && s.value.includes(m) && f(m);
      }
    );
    const i = h(() => {
      var m, d;
      return e.unstyled ? ((m = e.pt) == null ? void 0 : m.container) || "" : Ka({
        size: e.size,
        disabled: e.disabled,
        block: e.block,
        class: (d = e.pt) == null ? void 0 : d.container
      });
    }), b = (m, d) => {
      var g, y;
      return e.unstyled ? ((g = e.pt) == null ? void 0 : g.option) || "" : Ya({
        selected: o(m),
        disabled: e.disabled || d,
        size: e.size,
        class: (y = e.pt) == null ? void 0 : y.option
      });
    }, k = (m, d) => {
      e.disabled || d || f(m);
    };
    return (m, d) => (w(), x("div", {
      class: p(i.value),
      role: "tablist",
      onKeydown: d[0] || (d[0] = //@ts-ignore
      (...g) => C(n) && C(n)(...g))
    }, [
      (w(!0), x(ae, null, ne(r.value, (g) => (w(), x("button", {
        key: String(g.value),
        class: p(b(g.value, g.disabled)),
        disabled: e.disabled || g.disabled,
        "aria-selected": C(o)(g.value),
        tabindex: C(o)(g.value) ? 0 : -1,
        role: "tab",
        type: "button",
        onClick: (y) => k(g.value, g.disabled)
      }, U(g.label), 11, Ua))), 128))
    ], 34));
  }
}), qa = Q(Xa);
function Za(l) {
  const a = H(null), e = H(null), t = l.min ?? 0, r = l.max ?? 100, s = l.step ?? 1, o = l.orientation ?? "horizontal", f = H(l.modelValue ?? t), n = h(() => (f.value - t) / (r - t) * 100), i = (d) => {
    var u;
    const g = Math.round(d / s) * s, y = Math.min(r, Math.max(t, g));
    f.value = y, (u = l.onChange) == null || u.call(l, y);
  }, b = (d) => {
    const g = a.value;
    if (!g) return;
    const y = g.getBoundingClientRect(), u = o === "horizontal" ? (d.clientX - y.left) / y.width : 1 - (d.clientY - y.top) / y.height;
    i(t + u * (r - t));
  }, k = (d) => {
    d.key === "ArrowRight" || d.key === "ArrowUp" ? (d.preventDefault(), i(f.value + s)) : (d.key === "ArrowLeft" || d.key === "ArrowDown") && (d.preventDefault(), i(f.value - s));
  }, m = (d) => {
    d.preventDefault();
    const g = (u) => {
      const c = a.value;
      if (!c) return;
      const v = c.getBoundingClientRect(), z = o === "horizontal" ? (u.clientX - v.left) / v.width : 1 - (u.clientY - v.top) / v.height;
      i(t + z * (r - t));
    }, y = () => {
      window.removeEventListener("mousemove", g), window.removeEventListener("mouseup", y);
    };
    window.addEventListener("mousemove", g), window.addEventListener("mouseup", y);
  };
  return te(
    () => l.modelValue,
    (d) => {
      d != null && (f.value = d);
    }
  ), {
    value: f,
    percent: n,
    trackRef: a,
    thumbRef: e,
    onTrackClick: b,
    onThumbKeyDown: k,
    onThumbMouseDown: m
  };
}
const Ja = R({
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
}), Qa = R({
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
}), er = R({
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
}), tr = R({
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
}), lr = R({
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
}), ar = R({
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
}), rr = R({
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
}), or = R({
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
}), nr = ["aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-orientation", "aria-disabled", "tabindex"], sr = /* @__PURE__ */ J({
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
      percent: s,
      trackRef: o,
      thumbRef: f,
      onTrackClick: n,
      onThumbKeyDown: i,
      onThumbMouseDown: b
    } = Za({
      min: e.min,
      max: e.max,
      step: e.step,
      orientation: e.orientation,
      modelValue: e.modelValue,
      onChange: (S) => {
        t("update:modelValue", S), t("change", S);
      }
    }), k = h(() => {
      var S, E;
      return e.unstyled ? ((S = e.pt) == null ? void 0 : S.container) || "" : Ja({
        orientation: e.orientation,
        disabled: e.disabled,
        class: (E = e.pt) == null ? void 0 : E.container
      });
    }), m = h(() => {
      var S, E;
      return e.unstyled ? ((S = e.pt) == null ? void 0 : S.track) || "" : Qa({
        orientation: e.orientation,
        disabled: e.disabled,
        class: (E = e.pt) == null ? void 0 : E.track
      });
    }), d = h(() => {
      var S, E;
      return e.unstyled ? ((S = e.pt) == null ? void 0 : S.fill) || "" : er({
        orientation: e.orientation,
        disabled: e.disabled,
        class: (E = e.pt) == null ? void 0 : E.fill
      });
    }), g = h(() => {
      var S, E;
      return e.unstyled ? ((S = e.pt) == null ? void 0 : S.thumb) || "" : tr({
        orientation: e.orientation,
        disabled: e.disabled,
        class: (E = e.pt) == null ? void 0 : E.thumb
      });
    }), y = h(() => e.orientation === "horizontal" ? { width: `${s.value}%` } : { height: `${s.value}%` }), u = h(() => e.orientation === "horizontal" ? { left: `${s.value}%` } : { bottom: `${s.value}%` }), c = H(!1), v = h(() => {
      var S, E;
      return e.unstyled ? ((S = e.pt) == null ? void 0 : S.tooltip) || "" : lr({
        orientation: e.orientation,
        visible: e.showTooltip && c.value,
        class: (E = e.pt) == null ? void 0 : E.tooltip
      });
    }), z = () => {
      e.disabled || (c.value = !0);
    }, D = () => {
      c.value = !1;
    }, M = h(() => e.formatTooltip ? e.formatTooltip(r.value) : r.value.toString()), V = h(() => {
      var S, E;
      return e.unstyled ? ((S = e.pt) == null ? void 0 : S.marks) || "" : ar({
        orientation: e.orientation,
        class: (E = e.pt) == null ? void 0 : E.marks
      });
    }), T = h(() => {
      if (!e.showMarks) return [];
      if (e.marks)
        return Object.entries(e.marks).map(([G, j]) => ({
          value: Number(G),
          label: j,
          percent: (Number(G) - e.min) / (e.max - e.min) * 100,
          active: r.value >= Number(G)
        }));
      const S = Math.floor((e.max - e.min) / e.step), E = S > 10 ? Math.floor(S / 5) : 1, I = [];
      for (let G = 0; G <= S; G += E) {
        const j = e.min + G * e.step;
        I.push({
          value: j,
          label: j.toString(),
          percent: G / S * 100,
          active: r.value >= j
        });
      }
      return I;
    }), $ = (S) => {
      var E, I;
      return e.unstyled ? ((E = e.pt) == null ? void 0 : E.mark) || "" : rr({
        orientation: e.orientation,
        active: S,
        class: (I = e.pt) == null ? void 0 : I.mark
      });
    }, O = (S) => e.orientation === "horizontal" ? { left: `${S}%` } : { bottom: `${S}%` }, A = () => {
      var S, E;
      return e.unstyled ? ((S = e.pt) == null ? void 0 : S.markLabel) || "" : or({
        orientation: e.orientation,
        class: (E = e.pt) == null ? void 0 : E.markLabel
      });
    }, L = (S) => {
      e.disabled || n(S);
    }, P = (S) => {
      e.disabled || i(S);
    }, F = (S) => {
      if (e.disabled) return;
      b(S), z();
      const E = () => {
        D(), window.removeEventListener("mouseup", E);
      };
      window.addEventListener("mouseup", E);
    };
    return (S, E) => (w(), x("div", {
      class: p(k.value)
    }, [
      B("div", {
        class: p(m.value),
        ref_key: "trackRef",
        ref: o,
        onClick: L
      }, [
        B("div", {
          class: p(d.value),
          style: de(y.value)
        }, null, 6),
        S.showMarks ? (w(), x("div", {
          key: 0,
          class: p(V.value)
        }, [
          (w(!0), x(ae, null, ne(T.value, (I) => (w(), x("div", {
            key: I.value,
            class: p($(I.active)),
            style: de(O(I.percent))
          }, [
            B("span", {
              class: p(A)
            }, U(I.label), 1)
          ], 6))), 128))
        ], 2)) : N("", !0)
      ], 2),
      B("div", {
        class: p(g.value),
        style: de(u.value),
        ref_key: "thumbRef",
        ref: f,
        onMousedown: F,
        onKeydown: P,
        onMouseover: z,
        onMouseleave: D,
        role: "slider",
        "aria-valuemin": S.min,
        "aria-valuemax": S.max,
        "aria-valuenow": C(r),
        "aria-orientation": S.orientation,
        "aria-disabled": S.disabled,
        tabindex: S.disabled ? -1 : 0
      }, [
        S.showTooltip ? (w(), x("div", {
          key: 0,
          class: p(v.value)
        }, U(M.value), 3)) : N("", !0)
      ], 46, nr)
    ], 2));
  }
}), ir = Q(sr), ur = R({
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
}), dr = R({
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
}), cr = R({
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
}), fr = R({
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
}), pr = R({
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
}), br = { class: "popover-inner" }, vr = /* @__PURE__ */ J({
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
    const t = l, r = e, s = H(!1), o = H(null), f = H(null), n = `popover-${Math.random().toString(36).slice(2, 9)}`;
    let i = null, b = null;
    const k = H(0), m = H(0), d = async () => {
      b && clearTimeout(b), !t.disabled && (i = setTimeout(() => {
        s.value = !0, r("update:modelValue", !0), me(c);
      }, t.openDelay));
    }, g = () => {
      i && clearTimeout(i), !t.disabled && (b = setTimeout(() => {
        s.value = !1, r("update:modelValue", !1);
      }, t.closeDelay));
    }, y = () => {
      s.value ? g() : d();
    }, u = (W) => {
      W ? d() : g();
    }, c = () => {
      const W = f.value;
      if (!W || !s.value) return;
      const Z = k.value, le = m.value;
      if (t.followCursor || t.unbound) {
        let ye = 0, ie = 0;
        switch (t.placement) {
          case "top":
            ye = le - W.offsetHeight - t.offset, ie = Z - W.offsetWidth / 2;
            break;
          case "right":
            ye = le - W.offsetHeight / 2, ie = Z + t.offset;
            break;
          case "bottom":
            ye = le + t.offset, ie = Z - W.offsetWidth / 2;
            break;
          case "left":
            ye = le - W.offsetHeight / 2, ie = Z - W.offsetWidth - t.offset;
            break;
        }
        v(W, ye, ie);
        return;
      }
      const ee = o.value;
      if (!ee) return;
      const se = ee.getBoundingClientRect(), ue = W.getBoundingClientRect();
      let fe = 0, ge = 0;
      const pe = se.left + se.width / 2, ze = se.top + se.height / 2;
      switch (t.placement) {
        case "top":
          fe = se.top - ue.height - t.offset, ge = pe - ue.width / 2;
          break;
        case "right":
          fe = ze - ue.height / 2, ge = se.right + t.offset;
          break;
        case "bottom":
          fe = se.bottom + t.offset, ge = pe - ue.width / 2;
          break;
        case "left":
          fe = ze - ue.height / 2, ge = se.left - ue.width - t.offset;
          break;
      }
      v(W, fe, ge);
    }, v = (W, Z, le) => {
      var se;
      const ee = W.querySelector(
        '[class*="popoverArrow"]'
      );
      if (le = Math.max(8, le), le = Math.min(le, window.innerWidth - W.offsetWidth - 8), Z = Math.max(8, Z), Z = Math.min(Z, window.innerHeight - W.offsetHeight - 8), W.style.position = "fixed", W.style.top = `${Z}px`, W.style.left = `${le}px`, W.style.zIndex = ((se = t.zIndex) == null ? void 0 : se.toString()) || "1000", W.style.transition = "none", ee && t.showArrow && !t.followCursor && !t.unbound) {
        const ue = o.value;
        if (!ue) return;
        const fe = ue.getBoundingClientRect(), ge = W.getBoundingClientRect(), pe = getComputedStyle(W).borderColor;
        switch (t.placement) {
          case "top":
          case "bottom": {
            const ye = fe.left + fe.width / 2 - le, ie = 12, Pe = ge.width - 12, je = Math.max(
              ie,
              Math.min(Pe, ye)
            );
            ee.style.left = `${je}px`, ee.style.transform = "rotate(45deg)", t.placement === "top" ? (ee.style.borderRight = `1px solid ${pe}`, ee.style.borderBottom = `1px solid ${pe}`, ee.style.borderLeft = "none", ee.style.borderTop = "none") : (ee.style.borderLeft = `1px solid ${pe}`, ee.style.borderTop = `1px solid ${pe}`, ee.style.borderRight = "none", ee.style.borderBottom = "none");
            break;
          }
          case "left":
          case "right": {
            const ye = fe.top + fe.height / 2 - Z, ie = 12, Pe = ge.height - 12, je = Math.max(
              ie,
              Math.min(Pe, ye)
            );
            ee.style.top = `${je}px`, ee.style.transform = "rotate(45deg)", t.placement === "left" ? (ee.style.borderRight = `1px solid ${pe}`, ee.style.borderBottom = `1px solid ${pe}`, ee.style.borderLeft = "none", ee.style.borderTop = "none") : (ee.style.borderLeft = `1px solid ${pe}`, ee.style.borderTop = `1px solid ${pe}`, ee.style.borderRight = "none", ee.style.borderBottom = "none");
            break;
          }
        }
      }
    }, z = (W) => {
      k.value = W.clientX, m.value = W.clientY, (t.followCursor || t.unbound) && s.value && c();
    }, D = () => {
      s.value && c();
    }, M = () => {
      s.value && c();
    }, V = () => {
      t.disabled || (t.trigger === "click" || t.trigger === "manual") && y();
    }, T = (W) => {
      t.disabled || (k.value = W.clientX, m.value = W.clientY, t.trigger === "hover" && d());
    }, $ = () => {
      t.disabled || t.trigger === "hover" && g();
    }, O = () => {
      t.disabled || d();
    }, A = () => {
      t.disabled || g();
    }, L = (W) => {
      var Z, le;
      s.value && !((Z = f.value) != null && Z.contains(W.target)) && !((le = o.value) != null && le.contains(W.target)) && g();
    }, P = h(() => {
      var W, Z;
      return t.unstyled ? ((W = t.pt) == null ? void 0 : W.container) || "relative inline-block" : (Z = t.pt) != null && Z.container ? `relative inline-block ${t.pt.container}` : "relative inline-block";
    }), F = h(() => {
      var W, Z;
      return t.unstyled ? ((W = t.pt) == null ? void 0 : W.trigger) || "inline-block" : ur({
        disabled: t.disabled,
        class: (Z = t.pt) == null ? void 0 : Z.trigger
      });
    }), S = h(() => {
      var W, Z;
      return t.unstyled ? ((W = t.pt) == null ? void 0 : W.content) || "" : dr({
        placement: t.placement,
        visible: s.value,
        color: t.color,
        class: (Z = t.pt) == null ? void 0 : Z.content
      });
    }), E = h(() => {
      var W, Z;
      return t.unstyled ? ((W = t.pt) == null ? void 0 : W.arrow) || "" : cr({
        placement: t.placement,
        color: t.color,
        class: (Z = t.pt) == null ? void 0 : Z.arrow
      });
    }), I = h(() => {
      var W, Z;
      return t.unstyled ? ((W = t.pt) == null ? void 0 : W.title) || "" : fr({
        color: t.color,
        class: (Z = t.pt) == null ? void 0 : Z.title
      });
    }), G = h(() => {
      var W, Z;
      return t.unstyled ? ((W = t.pt) == null ? void 0 : W.body) || "" : pr({
        color: t.color,
        class: (Z = t.pt) == null ? void 0 : Z.body
      });
    }), j = h(() => {
      var Z;
      const W = {
        zIndex: ((Z = t.zIndex) == null ? void 0 : Z.toString()) || "1000",
        transition: "none",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        maxWidth: "280px",
        overflow: "hidden"
      };
      return t.width && (W.width = typeof t.width == "number" ? `${t.width}px` : t.width), W;
    }), K = h(() => t.teleport === !1 ? null : typeof t.teleport == "string" ? t.teleport : "body"), Y = () => {
      window.addEventListener("resize", D), window.addEventListener("scroll", M, !0), document.addEventListener("click", L), window.addEventListener("mousemove", z);
    }, oe = () => {
      window.removeEventListener("resize", D), window.removeEventListener("scroll", M, !0), document.removeEventListener("click", L), window.removeEventListener("mousemove", z);
    };
    return ve(() => {
      Y(), t.modelValue && me(() => {
        u(!0);
      });
    }), Te(() => {
      oe(), i && clearTimeout(i), b && clearTimeout(b);
    }), te(
      () => t.modelValue,
      (W) => {
        W !== s.value && u(W);
      }
    ), te(s, (W) => {
      W && me(c), r("update:modelValue", W);
    }), te(
      () => [t.placement, t.offset, t.followCursor, t.unbound],
      () => {
        s.value && me(c);
      }
    ), a({
      show: () => u(!0),
      hide: () => u(!1),
      toggle: y,
      updatePosition: c
    }), (W, Z) => (w(), x("div", {
      class: p(P.value),
      onMousemove: z
    }, [
      W.unbound ? N("", !0) : (w(), x("div", {
        key: 0,
        ref_key: "triggerRef",
        ref: o,
        class: p(F.value),
        "aria-describedby": n,
        onClick: V,
        onMouseenter: T,
        onMouseleave: $,
        onFocus: O,
        onBlur: A
      }, [
        _(W.$slots, "trigger")
      ], 34)),
      (w(), Se(rt, {
        to: K.value,
        disabled: !K.value
      }, [
        s.value && !W.disabled ? (w(), x("div", {
          key: 0,
          ref_key: "popoverRef",
          ref: f,
          class: p(S.value),
          style: de(j.value),
          id: n,
          role: "tooltip",
          "aria-live": "polite"
        }, [
          W.showArrow && !W.followCursor && !W.unbound ? (w(), x("div", {
            key: 0,
            class: p(E.value)
          }, null, 2)) : N("", !0),
          B("div", br, [
            W.title ? (w(), x("div", {
              key: 0,
              class: p(I.value)
            }, U(W.title), 3)) : N("", !0),
            B("div", {
              class: p(G.value)
            }, [
              _(W.$slots, "default", {}, () => [
                ce(U(W.content), 1)
              ])
            ], 2)
          ])
        ], 6)) : N("", !0)
      ], 8, ["to", "disabled"]))
    ], 34));
  }
}), gr = Q(vr);
function mr(l) {
  const a = H(!1), e = H(null), t = H(null);
  let r = null, s = null, o = 0, f = 0;
  const i = {
    ...{
      openDelay: 0,
      closeDelay: 100,
      placement: "top",
      offset: 8,
      followCursor: !1,
      unbound: !1
    },
    ...l
  }, b = (V) => {
    o = V.clientX, f = V.clientY, (i.followCursor || i.unbound) && a.value && g();
  }, k = () => {
    s && clearTimeout(s), r = setTimeout(() => {
      a.value = !0, requestAnimationFrame(g);
    }, i.openDelay);
  }, m = () => {
    r && clearTimeout(r), s = setTimeout(() => {
      a.value = !1;
    }, i.closeDelay);
  }, d = (V) => {
    V ? k() : m();
  }, g = () => {
    if (!a.value || !t.value || !i.unbound && !i.followCursor && !e.value) return;
    const V = t.value, T = V.getBoundingClientRect();
    let $ = 0, O = 0;
    const A = i.offset;
    if (i.followCursor || i.unbound)
      switch (i.placement) {
        case "top":
          $ = f - T.height - A, O = o - T.width / 2;
          break;
        case "right":
          $ = f - T.height / 2, O = o + A;
          break;
        case "bottom":
          $ = f + A, O = o - T.width / 2;
          break;
        case "left":
          $ = f - T.height / 2, O = o - T.width - A;
          break;
      }
    else {
      const P = e.value.getBoundingClientRect();
      switch (i.placement) {
        case "top":
          $ = P.top - T.height - A, O = P.left + P.width / 2 - T.width / 2;
          break;
        case "right":
          $ = P.top + P.height / 2 - T.height / 2, O = P.right + A;
          break;
        case "bottom":
          $ = P.bottom + A, O = P.left + P.width / 2 - T.width / 2;
          break;
        case "left":
          $ = P.top + P.height / 2 - T.height / 2, O = P.left - T.width - A;
          break;
      }
    }
    O = Math.max(8, O), O = Math.min(O, window.innerWidth - T.width - 8), $ = Math.max(8, $), $ = Math.min($, window.innerHeight - T.height - 8), V.style.position = "fixed", V.style.top = "0", V.style.left = "0", V.style.transform = `translate3d(${O}px, ${$}px, 0)`, V.style.zIndex = "9999";
  }, y = () => {
    a.value && g();
  }, u = () => {
    a.value && g();
  };
  te(a, (V) => {
    V ? (window.addEventListener("resize", y), window.addEventListener("scroll", u, !0), (i.followCursor || i.unbound) && window.addEventListener("mousemove", b)) : (window.removeEventListener("resize", y), window.removeEventListener("scroll", u, !0), (i.followCursor || i.unbound) && window.removeEventListener("mousemove", b));
  }), te(e, (V) => {
    V && a.value && !i.unbound && g();
  }), ve(() => {
    (i.followCursor || i.unbound) && window.addEventListener("mousemove", b);
  });
  const c = (V) => {
    o = V.clientX, f = V.clientY, k();
  }, v = () => k(), z = () => m(), D = () => m();
  Te(() => {
    r && clearTimeout(r), s && clearTimeout(s), window.removeEventListener("resize", y), window.removeEventListener("scroll", u, !0), (i.followCursor || i.unbound) && window.removeEventListener("mousemove", b);
  });
  const M = `tooltip-${Math.random().toString(36).slice(2, 9)}`;
  return {
    isOpen: a,
    triggerRef: e,
    tooltipRef: t,
    tooltipId: M,
    updatePosition: g,
    onMouseEnter: c,
    onFocus: v,
    onMouseLeave: z,
    onBlur: D,
    setIsOpen: d
  };
}
const yr = R({
  base: "inline-block"
}), hr = R({
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
}), wr = R({
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
}), xr = ["aria-describedby"], kr = ["id"], Cr = /* @__PURE__ */ J({
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
    const t = l, r = e, s = H(0), o = H(0), f = H(!1), n = mr({
      openDelay: t.openDelay,
      closeDelay: t.closeDelay,
      placement: t.placement,
      offset: t.offset,
      followCursor: t.followCursor,
      unbound: t.unbound
    }), i = n.isOpen, b = n.triggerRef, k = n.tooltipRef, m = n.tooltipId, d = n.setIsOpen, g = () => {
      f.value = !0, d(!0), me(() => {
        M();
      });
    }, y = () => {
      f.value = !1, d(!1);
    }, u = () => {
      f.value ? y() : g();
    }, c = h(() => {
      var I, G;
      return t.unstyled ? ((I = t.pt) == null ? void 0 : I.container) || "" : yr({
        class: (G = t.pt) == null ? void 0 : G.container
      });
    }), v = h(() => {
      var I, G;
      return t.unstyled ? ((I = t.pt) == null ? void 0 : I.content) || "" : hr({
        color: t.color,
        visible: !0,
        class: (G = t.pt) == null ? void 0 : G.content
      });
    }), z = h(() => {
      var I, G;
      return t.unstyled ? ((I = t.pt) == null ? void 0 : I.arrow) || "" : wr({
        color: t.color,
        placement: t.placement,
        class: (G = t.pt) == null ? void 0 : G.arrow
      });
    }), D = h(() => {
      const I = {};
      return t.maxWidth && (I.maxWidth = typeof t.maxWidth == "number" ? `${t.maxWidth}px` : t.maxWidth), I;
    }), M = () => {
      const I = k.value;
      if (!I || !i.value) return;
      const G = s.value, j = o.value;
      if (t.followCursor || t.unbound) {
        let Z = 0, le = 0;
        switch (t.placement) {
          case "top":
            Z = j - I.offsetHeight - t.offset, le = G - I.offsetWidth / 2;
            break;
          case "right":
            Z = j - I.offsetHeight / 2, le = G + t.offset;
            break;
          case "bottom":
            Z = j + t.offset, le = G - I.offsetWidth / 2;
            break;
          case "left":
            Z = j - I.offsetHeight / 2, le = G - I.offsetWidth - t.offset;
            break;
        }
        V(I, Z, le);
        return;
      }
      const K = b.value;
      if (!K) return;
      const Y = K.getBoundingClientRect();
      let oe = 0, W = 0;
      switch (t.placement) {
        case "top":
          oe = Y.top - I.offsetHeight - t.offset, W = Y.left + Y.width / 2 - I.offsetWidth / 2;
          break;
        case "right":
          oe = Y.top + Y.height / 2 - I.offsetHeight / 2, W = Y.right + t.offset;
          break;
        case "bottom":
          oe = Y.bottom + t.offset, W = Y.left + Y.width / 2 - I.offsetWidth / 2;
          break;
        case "left":
          oe = Y.top + Y.height / 2 - I.offsetHeight / 2, W = Y.left - I.offsetWidth - t.offset;
          break;
      }
      V(I, oe, W);
    }, V = (I, G, j) => {
      j = Math.max(8, j), j = Math.min(j, window.innerWidth - I.offsetWidth - 8), G = Math.max(8, G), G = Math.min(G, window.innerHeight - I.offsetHeight - 8), I.style.position = "fixed", I.style.top = `${G}px`, I.style.left = `${j}px`, I.style.zIndex = "9999", I.style.transition = "none";
    }, T = (I) => {
      s.value = I.clientX, o.value = I.clientY, i.value && (t.followCursor || t.unbound) && M();
    }, $ = () => {
      i.value && M();
    }, O = () => {
      i.value && M();
    }, A = (I) => {
      t.disabled || (s.value = I.clientX, o.value = I.clientY, (t.trigger === "hover" || t.trigger === "both") && (d(!0), me(M)));
    }, L = () => {
      t.disabled || (t.trigger === "focus" || t.trigger === "both") && (d(!0), me(M));
    }, P = () => {
      t.disabled || (t.trigger === "hover" || t.trigger === "both") && d(!1);
    }, F = () => {
      t.disabled || (t.trigger === "focus" || t.trigger === "both") && d(!1);
    }, S = () => {
      window.addEventListener("mousemove", T), window.addEventListener("resize", $), window.addEventListener("scroll", O, !0);
    }, E = () => {
      window.removeEventListener("mousemove", T), window.removeEventListener("resize", $), window.removeEventListener("scroll", O, !0);
    };
    return ve(() => {
      S(), t.unbound && t.modelValue && (f.value = !0, d(!0), me(M));
    }), Te(() => {
      E();
    }), te(i, (I) => {
      I && me(M), t.unbound && (r("update:modelValue", I), f.value = I);
    }), te(
      () => t.modelValue,
      (I) => {
        t.unbound && (f.value = I, d(I), I && me(M));
      }
    ), a({
      show: g,
      hide: y,
      toggle: u,
      updatePosition: M
    }), (I, G) => (w(), x(ae, null, [
      I.unbound ? N("", !0) : (w(), x("span", {
        key: 0,
        ref_key: "triggerRef",
        ref: b,
        onMouseenter: A,
        onMouseleave: P,
        onFocus: L,
        onBlur: F,
        "aria-describedby": C(m),
        class: p(c.value),
        role: "button",
        tabindex: "0"
      }, [
        _(I.$slots, "default")
      ], 42, xr)),
      (w(), Se(rt, { to: "body" }, [
        C(i) && !I.disabled ? (w(), x("div", {
          key: 0,
          ref_key: "tooltipRef",
          ref: k,
          class: p(v.value),
          style: de(D.value),
          id: C(m),
          role: "tooltip",
          "aria-live": "polite"
        }, [
          _(I.$slots, "content", {}, () => [
            ce(U(I.content), 1)
          ]),
          I.arrow && !I.followCursor && !I.unbound ? (w(), x("div", {
            key: 0,
            class: p(z.value)
          }, null, 2)) : N("", !0)
        ], 14, kr)) : N("", !0)
      ]))
    ], 64));
  }
}), zr = Q(Cr);
function Sr(l) {
  const a = H(l.modelValue ?? !1), e = () => {
    var o;
    l.disabled || !l.selectable || (a.value = !a.value, (o = l.onChange) == null || o.call(l, a.value));
  }, t = (o) => {
    var f;
    l.disabled || (o.stopPropagation(), (f = l.onClose) == null || f.call(l, o));
  }, r = h(() => a.value), s = h(() => l.closable || !!l.onClose);
  return {
    isSelected: r,
    isClosable: s,
    toggle: e,
    handleClose: t
  };
}
const Br = R({
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
}), Vr = ["aria-selected"], $r = ["disabled"], Ir = /* @__PURE__ */ J({
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
    const e = l, t = a, { isSelected: r, isClosable: s, toggle: o, handleClose: f } = Sr({
      modelValue: e.modelValue,
      selectable: e.selectable,
      disabled: e.disabled,
      closable: e.closable,
      onClose: (y) => t("close", y),
      onChange: (y) => t("update:modelValue", y)
    }), n = h(() => {
      var y, u;
      return e.unstyled ? ((y = e.pt) == null ? void 0 : y.root) || "" : Br({
        variant: e.variant,
        color: e.color,
        size: e.size,
        radius: e.radius,
        selected: r.value,
        disabled: e.disabled,
        class: (u = e.pt) == null ? void 0 : u.root
      });
    }), i = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.dot) || "" : [
        "mr-1.5 h-2 w-2 rounded-full",
        {
          default: "bg-zinc-500",
          primary: "bg-blue-500",
          secondary: "bg-purple-500",
          success: "bg-green-500",
          warning: "bg-yellow-500",
          danger: "bg-red-500"
        }[e.color || "default"],
        (c = e.pt) == null ? void 0 : c.dot
      ];
    }), b = h(() => {
      var y;
      return e.unstyled ? ((y = e.pt) == null ? void 0 : y.avatar) || "" : "flex shrink-0 mr-1.5";
    }), k = h(() => {
      var y;
      return e.unstyled ? ((y = e.pt) == null ? void 0 : y.startContent) || "" : "flex shrink-0 mr-1.5";
    }), m = h(() => {
      var y;
      return e.unstyled ? ((y = e.pt) == null ? void 0 : y.content) || "" : "truncate";
    }), d = h(() => {
      var y;
      return e.unstyled ? ((y = e.pt) == null ? void 0 : y.endContent) || "" : "flex shrink-0 ml-1.5";
    }), g = h(() => {
      var y;
      return e.unstyled ? ((y = e.pt) == null ? void 0 : y.closeButton) || "" : "ml-1.5 flex-shrink-0 flex items-center justify-center rounded-full hover:bg-black/5 focus:outline-none focus:bg-black/10 w-4 h-4";
    });
    return (y, u) => (w(), x("span", {
      class: p(n.value),
      role: "option",
      "aria-selected": C(r),
      onClick: u[1] || (u[1] = //@ts-ignore
      (...c) => C(o) && C(o)(...c))
    }, [
      y.variant === "dot" ? (w(), x("span", {
        key: 0,
        class: p(i.value)
      }, null, 2)) : N("", !0),
      y.$slots.avatar ? _(y.$slots, "avatar", {
        key: 1,
        class: p(b.value)
      }) : y.avatar ? _(y.$slots, "avatarFallback", {
        key: 2,
        class: p(b.value)
      }, () => [
        B("span", {
          class: p(b.value)
        }, [
          (w(), Se(qe(y.avatar)))
        ], 2)
      ]) : N("", !0),
      y.$slots.startContent ? _(y.$slots, "startContent", {
        key: 3,
        class: p(k.value)
      }) : y.startContent ? _(y.$slots, "startContentFallback", {
        key: 4,
        class: p(k.value)
      }, () => [
        B("span", {
          class: p(k.value)
        }, [
          (w(), Se(qe(y.startContent)))
        ], 2)
      ]) : N("", !0),
      B("span", {
        class: p(m.value)
      }, [
        _(y.$slots, "default")
      ], 2),
      y.$slots.endContent ? _(y.$slots, "endContent", {
        key: 5,
        class: p(d.value)
      }) : y.endContent ? _(y.$slots, "endContentFallback", {
        key: 6,
        class: p(d.value)
      }, () => [
        B("span", {
          class: p(d.value)
        }, [
          (w(), Se(qe(y.endContent)))
        ], 2)
      ]) : N("", !0),
      C(s) ? (w(), x("button", {
        key: 7,
        type: "button",
        class: p(g.value),
        onClick: u[0] || (u[0] = Ce(
          //@ts-ignore
          (...c) => C(f) && C(f)(...c),
          ["stop"]
        )),
        "aria-label": "关闭",
        disabled: y.disabled
      }, u[2] || (u[2] = [
        B("svg", {
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
          B("line", {
            x1: "18",
            y1: "6",
            x2: "6",
            y2: "18"
          }),
          B("line", {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "18"
          })
        ], -1)
      ]), 10, $r)) : N("", !0)
    ], 10, Vr));
  }
}), Dr = Q(Ir), Mr = R({
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
}), Tr = R({
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
}), Rr = R({
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
}), Er = R({
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
}), Lr = R({
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
}), Ar = ["innerHTML"], Or = { class: "flex-1" }, Pr = /* @__PURE__ */ J({
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
    const e = l, t = a, r = H(!0), s = () => {
      r.value = !1, t("close");
    }, o = h(
      () => {
        var m, d;
        return e.unstyled ? ((m = e.pt) == null ? void 0 : m.root) || "" : Mr({
          variant: e.variant,
          size: e.size,
          rounded: e.rounded,
          border: e.border,
          shadow: e.shadow,
          class: [e.class, (d = e.pt) == null ? void 0 : d.root]
        });
      }
    ), f = h(
      () => {
        var m, d;
        return e.unstyled ? ((m = e.pt) == null ? void 0 : m.icon) || "" : Tr({
          variant: e.variant,
          size: e.size,
          class: (d = e.pt) == null ? void 0 : d.icon
        });
      }
    ), n = h(
      () => {
        var m, d;
        return e.unstyled ? ((m = e.pt) == null ? void 0 : m.title) || "" : Rr({
          size: e.size,
          class: (d = e.pt) == null ? void 0 : d.title
        });
      }
    ), i = h(
      () => {
        var m, d;
        return e.unstyled ? ((m = e.pt) == null ? void 0 : m.description) || "" : Er({
          size: e.size,
          class: (d = e.pt) == null ? void 0 : d.description
        });
      }
    ), b = h(
      () => {
        var m, d;
        return e.unstyled ? ((m = e.pt) == null ? void 0 : m.closeButton) || "" : Lr({
          size: e.size,
          class: (d = e.pt) == null ? void 0 : d.closeButton
        });
      }
    ), k = {
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
    return (m, d) => r.value ? (w(), x("div", {
      key: 0,
      class: p(o.value)
    }, [
      m.icon ? (w(), x("div", {
        key: 0,
        class: p(f.value)
      }, [
        _(m.$slots, "icon", {}, () => [
          B("span", {
            innerHTML: k[m.variant]
          }, null, 8, Ar)
        ])
      ], 2)) : N("", !0),
      B("div", Or, [
        m.$slots.title || m.title ? (w(), x("div", {
          key: 0,
          class: p(n.value)
        }, [
          _(m.$slots, "title", {}, () => [
            ce(U(m.title), 1)
          ])
        ], 2)) : N("", !0),
        B("div", {
          class: p(i.value)
        }, [
          _(m.$slots, "default", {}, () => [
            ce(U(m.description), 1)
          ])
        ], 2)
      ]),
      m.closable ? (w(), x("button", {
        key: 1,
        class: p(b.value),
        onClick: s,
        "aria-label": "关闭",
        type: "button"
      }, [
        _(m.$slots, "close-icon", {}, () => [
          d[0] || (d[0] = B("svg", {
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
            B("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }),
            B("line", {
              x1: "6",
              y1: "6",
              x2: "18",
              y2: "18"
            })
          ], -1))
        ])
      ], 2)) : N("", !0)
    ], 2)) : N("", !0);
  }
}), jr = Q(Pr), Fr = R({
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
}), Wr = /* @__PURE__ */ J({
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
    const a = l, e = h(() => {
      var t, r;
      return a.unstyled ? ((t = a.pt) == null ? void 0 : t.root) || "" : Fr({
        size: a.size,
        variant: a.variant,
        class: (r = a.pt) == null ? void 0 : r.root
      });
    });
    return (t, r) => (w(), x("kbd", {
      class: p(e.value)
    }, [
      _(t.$slots, "default")
    ], 2));
  }
}), Hr = Q(Wr), Nr = R({
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
}), Gr = {
  click: (l) => l instanceof MouseEvent
}, _r = (l, a) => ({
  _ref: H(null),
  handleClick: (r) => {
    if (l.disabled || l.loading) {
      r.stopPropagation();
      return;
    } else
      a("click", r);
  }
}), Kr = ["type", "disabled"], Yr = { key: 0 }, Ur = {
  key: 1,
  class: "inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
}, Xr = /* @__PURE__ */ J({
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
  emits: Gr,
  setup(l, { expose: a, emit: e }) {
    const t = e, r = l, { _ref: s, handleClick: o } = _r(r, t), f = h(() => {
      var b, k;
      return r.unstyled ? ((b = r.pt) == null ? void 0 : b.root) || "" : Nr({
        variant: r.variant,
        size: r.size,
        fullWidth: r.fullWidth,
        rounded: r.rounded,
        disabled: r.disabled || r.loading,
        class: (k = r.pt) == null ? void 0 : k.root
      });
    }), n = h(() => {
      var b;
      return r.unstyled ? ((b = r.pt) == null ? void 0 : b.loader) || "" : "mr-2";
    }), i = h(() => {
      var b;
      return r.unstyled && ((b = r.pt) == null ? void 0 : b.icon) || "";
    });
    return a({
      _ref: s,
      handleClick: o
    }), (b, k) => (w(), x("button", {
      class: p(f.value),
      type: b.type,
      disabled: b.disabled || b.loading,
      ref_key: "_ref",
      ref: s,
      onClick: k[0] || (k[0] = //@ts-ignore
      (...m) => C(o) && C(o)(...m))
    }, [
      b.loading ? (w(), x("span", {
        key: 0,
        class: p(n.value)
      }, [
        b.$slots.loading ? (w(), x("span", Yr, [
          _(b.$slots, "loading")
        ])) : (w(), x("span", Ur))
      ], 2)) : b.$slots.icon ? (w(), x("span", {
        key: 1,
        class: p(i.value)
      }, [
        _(b.$slots, "icon")
      ], 2)) : N("", !0),
      _(b.$slots, "default")
    ], 10, Kr));
  }
}), qr = Q(Xr), Zr = R({
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
}), Jr = /* @__PURE__ */ J({
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
    const a = l, e = h(() => {
      var o, f;
      return a.unstyled ? ((o = a.pt) == null ? void 0 : o.root) || "" : Zr({
        variant: a.variant,
        padding: a.padding,
        radius: a.radius,
        hover: a.hover,
        class: (f = a.pt) == null ? void 0 : f.root
      });
    }), t = h(() => {
      var o;
      return a.unstyled ? ((o = a.pt) == null ? void 0 : o.header) || "" : "mb-4";
    }), r = h(() => {
      var o;
      return a.unstyled && ((o = a.pt) == null ? void 0 : o.body) || "";
    }), s = h(() => {
      var o;
      return a.unstyled ? ((o = a.pt) == null ? void 0 : o.footer) || "" : "mt-4 flex justify-end";
    });
    return (o, f) => (w(), x("div", {
      class: p(e.value)
    }, [
      o.$slots.header ? (w(), x("div", {
        key: 0,
        class: p(t.value)
      }, [
        _(o.$slots, "header")
      ], 2)) : N("", !0),
      B("div", {
        class: p(r.value)
      }, [
        _(o.$slots, "default")
      ], 2),
      o.$slots.footer ? (w(), x("div", {
        key: 1,
        class: p(s.value)
      }, [
        _(o.$slots, "footer")
      ], 2)) : N("", !0)
    ], 2));
  }
}), Qr = Q(Jr), eo = R({
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
}), to = /* @__PURE__ */ J({
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
    const a = l, e = He(), t = h(() => {
      var n;
      return !!a.label || !!((n = e.default) != null && n.call(e));
    }), r = h(() => a.as ? a.as : a.orientation === "horizontal" && !t.value ? "hr" : "div"), s = h(() => {
      var n, i;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.root) || "" : eo({
        orientation: a.orientation,
        variant: a.variant,
        size: a.size,
        labelPosition: a.labelPosition,
        withLabel: t.value,
        class: (i = a.pt) == null ? void 0 : i.root
      });
    }), o = h(() => {
      var n;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.label) || "" : "shrink-0 whitespace-nowrap px-2 text-gray-500";
    }), f = h(() => !a.unstyled && a.color ? {
      borderColor: a.color,
      "--tw-border-opacity": 1,
      "before:border-color": a.color,
      "after:border-color": a.color
    } : {});
    return (n, i) => (w(), Se(qe(r.value), {
      class: p(s.value),
      style: de(f.value),
      role: "separator",
      "aria-orientation": n.orientation,
      "data-orientation": n.orientation
    }, {
      default: ot(() => [
        t.value ? (w(), x("div", {
          key: 0,
          class: p(o.value)
        }, [
          _(n.$slots, "default", {}, () => [
            ce(U(n.label), 1)
          ])
        ], 2)) : N("", !0)
      ]),
      _: 3
    }, 8, ["class", "style", "aria-orientation", "data-orientation"]));
  }
}), lo = Q(to), ao = R({
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
}), ro = ["value", "placeholder", "disabled", "readonly", "rows", "maxlength", "minlength"], oo = /* @__PURE__ */ J({
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
    const e = l, t = a, r = h(() => {
      var i;
      return ((i = e.pt) == null ? void 0 : i.root) || "w-full";
    }), s = h(() => {
      var i, b;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.textarea) || "" : ao({
        size: e.size,
        status: e.status,
        resize: e.resize,
        class: (b = e.pt) == null ? void 0 : b.textarea
      });
    }), o = h(() => {
      var i, b;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.counter) || "" : ((b = e.pt) == null ? void 0 : b.counter) || "mt-1 text-right text-sm text-gray-500";
    }), f = (i) => {
      const b = i.target;
      t("update:modelValue", b.value), e.autosize && n(b);
    }, n = (i) => {
      i.style.height = "auto", i.style.height = `${i.scrollHeight}px`;
    };
    return ve(() => {
      if (e.autosize) {
        const i = document.querySelector("textarea");
        i && n(i);
      }
    }), (i, b) => {
      var k;
      return w(), x("div", {
        class: p(r.value)
      }, [
        B("textarea", {
          class: p(s.value),
          value: i.modelValue,
          placeholder: i.placeholder,
          disabled: i.disabled,
          readonly: i.readonly,
          rows: i.rows,
          maxlength: i.maxLength,
          minlength: i.minLength,
          onInput: f
        }, null, 42, ro),
        i.showCount && i.maxLength ? (w(), x("div", {
          key: 0,
          class: p(o.value)
        }, U(((k = i.modelValue) == null ? void 0 : k.length) || 0) + "/" + U(i.maxLength), 3)) : N("", !0)
      ], 2);
    };
  }
}), no = Q(oo), lt = R({
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
}), so = ["checked", "disabled"], io = /* @__PURE__ */ J({
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
    const e = l, t = a, r = Be("checkbox-group", null), s = h(() => {
      if (r) {
        const y = e.value;
        return r.modelValue.value.includes(
          y
        );
      }
      return Array.isArray(e.modelValue) ? e.modelValue.includes(e.value) : !!e.modelValue;
    }), o = h(() => (r == null ? void 0 : r.disabled.value) || !1 || e.disabled), f = h(() => (r == null ? void 0 : r.size.value) || e.size || "default"), n = h(() => (r == null ? void 0 : r.color.value) || e.color || "blue"), i = () => {
      if (!o.value)
        if (r) {
          const y = e.value, u = [...r.modelValue.value], c = u.indexOf(y);
          if (c === -1) {
            if (r.max.value && u.length >= r.max.value)
              return;
            u.push(y);
          } else {
            if (r.min.value && u.length <= r.min.value)
              return;
            u.splice(c, 1);
          }
          r.changeEvent(u);
        } else if (Array.isArray(e.modelValue)) {
          const y = e.value, u = [...e.modelValue], c = u.indexOf(y);
          c === -1 ? u.push(y) : u.splice(c, 1), t("update:modelValue", u), t("change", u);
        } else {
          const y = !e.modelValue;
          t("update:modelValue", y), t("change", y);
        }
    }, b = (y) => {
      (y.key === "Enter" || y.key === " ") && (y.preventDefault(), i());
    }, k = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.root) || "" : lt({
        checked: s.value,
        disabled: o.value,
        size: f.value,
        color: n.value
      }).root({ class: (c = e.pt) == null ? void 0 : c.root });
    }), m = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.checkbox) || "" : lt({
        checked: s.value,
        disabled: o.value,
        size: f.value,
        color: n.value
      }).checkbox({ class: (c = e.pt) == null ? void 0 : c.checkbox });
    }), d = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.icon) || "" : lt({
        checked: s.value,
        disabled: o.value,
        size: f.value,
        color: n.value
      }).icon({ class: (c = e.pt) == null ? void 0 : c.icon });
    }), g = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.label) || "" : lt({
        checked: s.value,
        disabled: o.value,
        size: f.value,
        color: n.value
      }).label({ class: (c = e.pt) == null ? void 0 : c.label });
    });
    return (y, u) => (w(), x("label", {
      class: p(k.value),
      onClick: Ce(i, ["prevent"]),
      onKeydown: b,
      tabindex: "0"
    }, [
      B("input", {
        type: "checkbox",
        class: "sr-only",
        checked: s.value,
        disabled: o.value
      }, null, 8, so),
      B("div", {
        class: p(m.value)
      }, [
        s.value ? (w(), x("span", {
          key: 0,
          class: p(d.value)
        }, u[0] || (u[0] = [
          B("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "3",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "size-3/4"
          }, [
            B("polyline", { points: "20 6 9 17 4 12" })
          ], -1)
        ]), 2)) : N("", !0)
      ], 2),
      e.label ? (w(), x("span", {
        key: 0,
        class: p(g.value)
      }, U(e.label), 3)) : _(y.$slots, "default", { key: 1 })
    ], 34));
  }
}), uo = /* @__PURE__ */ J({
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
    const e = l, t = a, r = (s) => {
      t("update:modelValue", s), t("change", s);
    };
    return Ve("checkbox-group", {
      modelValue: xe(e, "modelValue"),
      disabled: xe(e, "disabled"),
      size: xe(e, "size"),
      color: xe(e, "color"),
      min: xe(e, "min"),
      max: xe(e, "max"),
      changeEvent: r
    }), (s, o) => (w(), x("div", {
      class: p(["flex flex-wrap", [s.direction === "vertical" ? "flex-col gap-2" : "flex-row gap-4"]]),
      role: "group",
      "aria-label": "checkbox-group"
    }, [
      _(s.$slots, "default")
    ], 2));
  }
}), co = Q(io), fo = Q(uo), Le = R({
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
function po(l) {
  var f;
  const a = H(((f = l.modelValue) == null ? void 0 : f.toString()) || ""), e = H(null), t = (n) => {
    var i;
    if (!(l.disabled || l.readonly)) {
      if (l.type === "number" && n !== "") {
        const b = parseFloat(n);
        a.value = isNaN(b) ? "" : n;
      } else
        a.value = n;
      l.maxlength && n.length > l.maxlength && (a.value = n.slice(0, l.maxlength)), (i = l.onChange) == null || i.call(l, a.value);
    }
  };
  return te(
    () => l.modelValue,
    (n) => {
      n != null ? a.value = n.toString() : a.value = "";
    }
  ), {
    inputValue: a,
    inputRef: e,
    updateValue: t,
    clearInput: () => {
      var n, i;
      l.disabled || l.readonly || (a.value = "", (n = l.onChange) == null || n.call(l, ""), (i = e.value) == null || i.focus());
    },
    focus: () => {
      var n;
      (n = e.value) == null || n.focus();
    },
    blur: () => {
      var n;
      (n = e.value) == null || n.blur();
    }
  };
}
const bo = ["type", "value", "placeholder", "disabled", "readonly", "maxlength", "autofocus"], vo = /* @__PURE__ */ J({
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
    const t = l, r = e, { inputValue: s, inputRef: o, updateValue: f, clearInput: n, focus: i, blur: b } = po(
      {
        modelValue: t.modelValue,
        type: t.type,
        disabled: t.disabled,
        readonly: t.readonly,
        maxlength: t.maxlength,
        onChange: (v) => r("update:modelValue", v)
      }
    ), k = h(() => {
      var z, D;
      return t.unstyled ? ((z = t.pt) == null ? void 0 : z.root) || "" : Le({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).root({ class: (D = t.pt) == null ? void 0 : D.root });
    }), m = h(() => {
      var z, D;
      return t.unstyled ? ((z = t.pt) == null ? void 0 : z.wrapper) || "" : Le({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).wrapper({ class: (D = t.pt) == null ? void 0 : D.wrapper });
    }), d = h(() => {
      var z, D;
      return t.unstyled ? ((z = t.pt) == null ? void 0 : z.input) || "" : Le({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).input({ class: (D = t.pt) == null ? void 0 : D.input });
    }), g = h(() => {
      var z, D;
      return t.unstyled ? ((z = t.pt) == null ? void 0 : z.prefix) || "" : Le({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).prefix({ class: (D = t.pt) == null ? void 0 : D.prefix });
    }), y = h(() => {
      var z, D;
      return t.unstyled ? ((z = t.pt) == null ? void 0 : z.suffix) || "" : Le({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).suffix({ class: (D = t.pt) == null ? void 0 : D.suffix });
    }), u = h(() => {
      var z, D;
      return t.unstyled ? ((z = t.pt) == null ? void 0 : z.clear) || "" : Le({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).clear({ class: (D = t.pt) == null ? void 0 : D.clear });
    }), c = h(() => {
      var z, D;
      return t.unstyled ? ((z = t.pt) == null ? void 0 : z.count) || "" : Le({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).count({ class: (D = t.pt) == null ? void 0 : D.count });
    });
    return a({
      focus: i,
      blur: b,
      inputRef: o
    }), (v, z) => (w(), x("div", {
      class: p(k.value)
    }, [
      B("div", {
        class: p([m.value, t.readonly && "cursor-default"])
      }, [
        t.prefixIcon ? (w(), x("div", {
          key: 0,
          class: p(g.value)
        }, [
          B("i", {
            class: p(t.prefixIcon)
          }, null, 2)
        ], 2)) : N("", !0),
        B("input", {
          type: t.type,
          class: p(d.value),
          value: C(s),
          placeholder: t.placeholder,
          disabled: t.disabled,
          readonly: t.readonly,
          maxlength: t.maxlength,
          autofocus: t.autofocus,
          ref_key: "inputRef",
          ref: o,
          onInput: z[0] || (z[0] = (D) => C(f)(D.target.value)),
          onFocus: z[1] || (z[1] = (D) => v.$emit("focus", D)),
          onBlur: z[2] || (z[2] = (D) => v.$emit("blur", D))
        }, null, 42, bo),
        t.clearable && C(s) && !t.disabled && !t.readonly ? (w(), x("div", {
          key: 1,
          class: p([y.value, u.value]),
          onClick: z[3] || (z[3] = //@ts-ignore
          (...D) => C(n) && C(n)(...D))
        }, z[4] || (z[4] = [
          B("svg", {
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
            B("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }),
            B("line", {
              x1: "6",
              y1: "6",
              x2: "18",
              y2: "18"
            })
          ], -1)
        ]), 2)) : N("", !0),
        t.suffixIcon ? (w(), x("div", {
          key: 2,
          class: p(y.value)
        }, [
          B("i", {
            class: p(t.suffixIcon)
          }, null, 2)
        ], 2)) : N("", !0)
      ], 2),
      t.showCount && t.maxlength ? (w(), x("div", {
        key: 0,
        class: p(c.value)
      }, U(C(s).length) + "/" + U(t.maxlength), 3)) : N("", !0)
    ], 2));
  }
}), go = Q(vo);
function mo(l) {
  const a = H(!1), e = H(""), t = H(0), r = H(null), s = H(null), o = H(l.modelValue);
  te(
    () => l.modelValue,
    (A) => {
      o.value = A;
    },
    { immediate: !0 }
  );
  const f = h(() => {
    var A;
    return ((A = l.options) == null ? void 0 : A.map((L) => ({
      ...L,
      disabled: L.disabled || !1
    }))) || [];
  }), n = h(() => {
    const A = {}, L = [];
    return f.value.forEach((P) => {
      P.group ? (A[P.group] || (A[P.group] = []), A[P.group].push(P)) : L.push(P);
    }), { groups: A, noGroup: L };
  }), i = h(() => l.multiple ? Array.isArray(o.value) ? o.value : [] : o.value !== void 0 ? [o.value] : []), b = h(() => {
    const A = [];
    if (!i.value.length) return A;
    for (const L of i.value) {
      const P = f.value.find(
        (F) => F.value === L || String(F.value) === String(L)
      );
      if (P)
        A.push(P);
      else if (L != null && (typeof L == "string" || typeof L == "number")) {
        const F = {
          label: String(L),
          value: L,
          disabled: !1
        };
        A.push(F);
      }
    }
    return A;
  }), k = h(() => {
    var A;
    return !b.value || b.value.length === 0 ? "" : ((A = b.value[0]) == null ? void 0 : A.label) || "";
  }), m = h(() => {
    if (!l.filterable || !e.value)
      return f.value;
    const A = e.value.toLowerCase();
    return f.value.filter(
      (L) => L.label.toLowerCase().includes(A)
    );
  }), d = (A) => {
    var P;
    if (l.disabled || l.readonly || A.disabled)
      return;
    let L;
    if (l.multiple) {
      const F = [...i.value], S = F.findIndex(
        (E) => String(E) === String(A.value)
      );
      S > -1 ? F.splice(S, 1) : F.push(A.value), L = F;
    } else
      L = A.value, c();
    o.value = L, (P = l.onChange) == null || P.call(l, L), l.filterable && me(() => {
      e.value = "";
    });
  }, g = (A) => {
    var P;
    if (A && A.stopPropagation(), l.disabled || l.readonly) return;
    const L = l.multiple ? [] : void 0;
    o.value = L, (P = l.onChange) == null || P.call(l, L);
  }, y = () => {
    var A;
    l.disabled || l.readonly || (a.value = !a.value, (A = l.onDropdownVisibleChange) == null || A.call(l, a.value), a.value && me(() => {
      v();
    }));
  }, u = () => {
    var A;
    l.disabled || l.readonly || a.value || (a.value = !0, (A = l.onDropdownVisibleChange) == null || A.call(l, !0), me(() => {
      v();
    }));
  }, c = () => {
    var A;
    a.value && (a.value = !1, e.value = "", (A = l.onDropdownVisibleChange) == null || A.call(l, !1));
  }, v = () => {
    const A = m.value;
    for (let L = 0; L < A.length; L++)
      if (!A[L].disabled) {
        t.value = L;
        return;
      }
    t.value = -1;
  }, z = (A) => i.value.some((L) => String(L) === String(A)), D = (A) => {
    var P, F;
    if (l.disabled || l.readonly) return;
    const L = m.value;
    switch (A.key) {
      case "ArrowDown":
        if (A.preventDefault(), !a.value)
          u();
        else {
          let S = t.value, E = 0;
          do
            S = (S + 1) % L.length, E++;
          while ((P = L[S]) != null && P.disabled && E < L.length);
          t.value = S;
        }
        break;
      case "ArrowUp":
        if (A.preventDefault(), !a.value)
          u();
        else {
          let S = t.value, E = 0;
          do
            S = S <= 0 ? L.length - 1 : S - 1, E++;
          while ((F = L[S]) != null && F.disabled && E < L.length);
          t.value = S;
        }
        break;
      case "Enter":
      case " ":
        A.preventDefault(), a.value && t.value >= 0 && L[t.value] ? d(L[t.value]) : y();
        break;
      case "Escape":
        A.preventDefault(), c();
        break;
      case "Tab":
        c();
        break;
    }
  }, M = (A) => {
    var L;
    e.value = A, (L = l.onSearch) == null || L.call(l, A), v();
  }, V = (A) => {
    a.value && r.value && s.value && !r.value.contains(A.target) && !s.value.contains(A.target) && c();
  }, T = () => {
    document.addEventListener("mousedown", V);
  }, $ = () => {
    document.removeEventListener("mousedown", V);
  };
  te(a, (A) => {
    A ? T() : $();
  });
  const O = () => {
    $();
  };
  return ve(() => {
    a.value && T();
  }), De(() => {
    O();
  }), {
    isOpen: a,
    searchValue: e,
    activeIndex: t,
    triggerRef: r,
    dropdownRef: s,
    selectedValues: i,
    selectedOptions: b,
    getOptionLabel: k,
    filteredOptions: m,
    groupedOptions: n,
    selectOption: d,
    clearSelection: g,
    toggleDropdown: y,
    openDropdown: u,
    closeDropdown: c,
    isSelected: z,
    onKeyDown: D,
    onSearchInput: M,
    cleanup: O
  };
}
const yo = R({
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
R({
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
const ho = {
  key: 0,
  class: "text-red-500"
}, wo = ["aria-expanded", "aria-disabled", "aria-readonly", "aria-required"], xo = {
  key: 0,
  class: "flex flex-wrap gap-1"
}, ko = { class: "truncate" }, Co = ["onClick"], zo = {
  key: 1,
  class: "truncate"
}, So = { class: "flex items-center" }, Bo = ["aria-multiselectable"], Vo = {
  key: 0,
  class: "sticky top-0"
}, $o = ["value"], Io = ["onClick", "aria-selected", "aria-disabled"], Do = ["onClick", "aria-selected", "aria-disabled"], Mo = { class: "px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400" }, To = ["onClick", "aria-selected", "aria-disabled"], Ro = {
  key: 1,
  class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
}, Eo = {
  key: 2,
  class: "mt-1 text-xs text-red-500"
}, Lo = /* @__PURE__ */ J({
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
    const t = l, r = e, s = yo(), o = h(() => {
      var E, I, G, j, K, Y, oe, W, Z, le, ee, se, ue, fe, ge, pe, ze, ye, ie, Pe, je, xt, kt, Ct, zt, St, Bt, Vt, $t, It, Dt, Mt, Tt;
      return t.unstyled ? {
        root: ((E = t.pt) == null ? void 0 : E.root) || "",
        trigger: ((I = t.pt) == null ? void 0 : I.trigger) || "",
        value: ((G = t.pt) == null ? void 0 : G.value) || "",
        placeholder: ((j = t.pt) == null ? void 0 : j.placeholder) || "",
        dropdown: ((K = t.pt) == null ? void 0 : K.dropdown) || "",
        option: ((Y = t.pt) == null ? void 0 : Y.option) || "",
        optionSelected: ((oe = t.pt) == null ? void 0 : oe.optionSelected) || "",
        optionActive: ((W = t.pt) == null ? void 0 : W.optionActive) || "",
        optionDisabled: ((Z = t.pt) == null ? void 0 : Z.optionDisabled) || "",
        icon: ((le = t.pt) == null ? void 0 : le.icon) || "",
        clearIcon: ((ee = t.pt) == null ? void 0 : ee.clearIcon) || "",
        checkIcon: ((se = t.pt) == null ? void 0 : se.checkIcon) || "",
        search: ((ue = t.pt) == null ? void 0 : ue.search) || "",
        tag: ((fe = t.pt) == null ? void 0 : fe.tag) || "",
        tagRemove: ((ge = t.pt) == null ? void 0 : ge.tagRemove) || "",
        noMatch: ((pe = t.pt) == null ? void 0 : pe.noMatch) || "",
        label: ((ze = t.pt) == null ? void 0 : ze.label) || ""
      } : {
        root: s.root({
          size: t.size,
          status: t.status,
          disabled: t.disabled,
          multiple: t.multiple,
          open: i.value,
          class: (ye = t.pt) == null ? void 0 : ye.root
        }),
        trigger: s.trigger({
          size: t.size,
          status: t.status,
          disabled: t.disabled,
          multiple: t.multiple,
          open: i.value,
          class: (ie = t.pt) == null ? void 0 : ie.trigger
        }),
        value: s.value({
          multiple: t.multiple,
          class: (Pe = t.pt) == null ? void 0 : Pe.value
        }),
        placeholder: s.placeholder({ class: (je = t.pt) == null ? void 0 : je.placeholder }),
        dropdown: s.dropdown({ class: (xt = t.pt) == null ? void 0 : xt.dropdown }),
        option: s.option({ class: (kt = t.pt) == null ? void 0 : kt.option }),
        optionSelected: s.optionSelected({ class: (Ct = t.pt) == null ? void 0 : Ct.optionSelected }),
        optionActive: s.optionActive({ class: (zt = t.pt) == null ? void 0 : zt.optionActive }),
        optionDisabled: s.optionDisabled({ class: (St = t.pt) == null ? void 0 : St.optionDisabled }),
        icon: s.icon({ class: (Bt = t.pt) == null ? void 0 : Bt.icon }),
        clearIcon: s.clearIcon({ class: (Vt = t.pt) == null ? void 0 : Vt.clearIcon }),
        checkIcon: s.checkIcon({ class: ($t = t.pt) == null ? void 0 : $t.checkIcon }),
        search: s.search({ class: (It = t.pt) == null ? void 0 : It.search }),
        tag: s.tag({ class: (Dt = t.pt) == null ? void 0 : Dt.tag }),
        tagRemove: s.tagRemove({ class: (Mt = t.pt) == null ? void 0 : Mt.tagRemove }),
        noMatch: s.noMatch({ class: (Tt = t.pt) == null ? void 0 : Tt.noMatch })
      };
    }), f = `versa-select-dropdown-${Math.random().toString(36).substring(2, 9)}`, n = H(null), {
      isOpen: i,
      searchValue: b,
      activeIndex: k,
      triggerRef: m,
      dropdownRef: d,
      selectedValues: g,
      selectedOptions: y,
      getOptionLabel: u,
      filteredOptions: c,
      groupedOptions: v,
      selectOption: z,
      clearSelection: D,
      toggleDropdown: M,
      openDropdown: V,
      closeDropdown: T,
      isSelected: $,
      onKeyDown: O,
      onSearchInput: A,
      cleanup: L
    } = mo({
      modelValue: t.modelValue,
      options: t.options,
      multiple: t.multiple,
      filterable: t.filterable,
      disabled: t.disabled,
      readonly: t.readonly,
      onChange: (E) => {
        r("update:modelValue", E), r("change", E), (E === void 0 || Array.isArray(E) && E.length === 0) && r("clear");
      },
      onSearch: (E) => {
        r("search", E);
      },
      onDropdownVisibleChange: (E) => {
        r("dropdown-visible-change", E), E && t.filterable && setTimeout(() => {
          var I;
          (I = n.value) == null || I.focus();
        }, 0);
      }
    }), P = h(() => Object.keys(v.value.groups).length > 0), F = (E, I) => {
      let G = 0;
      if (E === null)
        return I;
      G += v.value.noGroup.length;
      const j = Object.keys(v.value.groups);
      for (let K = 0; K < j.length; K++) {
        const Y = j[K];
        if (Y === E)
          return G + I;
        G += v.value.groups[Y].length;
      }
      return -1;
    }, S = (E) => {
      A(E.target.value);
    };
    return De(() => {
      L();
    }), a({
      open: V,
      close: T,
      clear: D
    }), (E, I) => {
      var G;
      return w(), x("div", {
        class: p(o.value.root)
      }, [
        t.showLabel && t.label ? (w(), x("label", {
          key: 0,
          class: p(
            ((G = t.pt) == null ? void 0 : G.label) || "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          )
        }, [
          ce(U(t.label) + " ", 1),
          t.required ? (w(), x("span", ho, "*")) : N("", !0)
        ], 2)) : N("", !0),
        B("div", {
          ref_key: "triggerRef",
          ref: m,
          class: p(o.value.trigger),
          onClick: I[1] || (I[1] = (j) => !t.disabled && !t.readonly && C(M)()),
          onKeydown: I[2] || (I[2] = //@ts-ignore
          (...j) => C(O) && C(O)(...j)),
          tabindex: "0",
          role: "combobox",
          "aria-expanded": C(i),
          "aria-disabled": t.disabled,
          "aria-readonly": t.readonly,
          "aria-required": t.required,
          "aria-haspopup": !0,
          "aria-controls": f
        }, [
          B("div", {
            class: p(o.value.value)
          }, [
            t.multiple && C(y).length ? (w(), x("div", xo, [
              (w(!0), x(ae, null, ne(C(y), (j) => (w(), x("div", {
                key: j.value,
                class: p(o.value.tag)
              }, [
                B("span", ko, U(j.label), 1),
                !t.disabled && !t.readonly ? (w(), x("button", {
                  key: 0,
                  type: "button",
                  class: p(o.value.tagRemove),
                  onClick: Ce((K) => C(z)(j), ["stop"]),
                  "aria-label": "移除"
                }, I[4] || (I[4] = [
                  B("svg", {
                    viewBox: "0 0 24 24",
                    width: "12",
                    height: "12",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    fill: "none"
                  }, [
                    B("line", {
                      x1: "18",
                      y1: "6",
                      x2: "6",
                      y2: "18"
                    }),
                    B("line", {
                      x1: "6",
                      y1: "6",
                      x2: "18",
                      y2: "18"
                    })
                  ], -1)
                ]), 10, Co)) : N("", !0)
              ], 2))), 128))
            ])) : C(y).length ? (w(), x("div", zo, U(C(u)), 1)) : (w(), x("div", {
              key: 2,
              class: p(o.value.placeholder)
            }, U(t.placeholder), 3))
          ], 2),
          B("div", So, [
            t.clearable && C(g).length && !t.disabled && !t.readonly ? (w(), x("button", {
              key: 0,
              type: "button",
              class: p(o.value.clearIcon),
              onClick: I[0] || (I[0] = Ce(
                //@ts-ignore
                (...j) => C(D) && C(D)(...j),
                ["stop"]
              )),
              "aria-label": "清除选择"
            }, I[5] || (I[5] = [
              B("svg", {
                viewBox: "0 0 24 24",
                width: "14",
                height: "14",
                stroke: "currentColor",
                "stroke-width": "2",
                fill: "none"
              }, [
                B("line", {
                  x1: "18",
                  y1: "6",
                  x2: "6",
                  y2: "18"
                }),
                B("line", {
                  x1: "6",
                  y1: "6",
                  x2: "18",
                  y2: "18"
                })
              ], -1)
            ]), 2)) : N("", !0),
            B("div", {
              class: p(o.value.icon)
            }, [
              (w(), x("svg", {
                viewBox: "0 0 24 24",
                width: "16",
                height: "16",
                stroke: "currentColor",
                "stroke-width": "2",
                fill: "none",
                style: de({ transform: C(i) ? "rotate(180deg)" : void 0 }),
                class: "transition-transform duration-200"
              }, I[6] || (I[6] = [
                B("polyline", { points: "6 9 12 15 18 9" }, null, -1)
              ]), 4))
            ], 2)
          ])
        ], 42, wo),
        Oe(Ft, { name: "versa-select-dropdown" }, {
          default: ot(() => [
            C(i) ? (w(), x("div", {
              key: 0,
              ref_key: "dropdownRef",
              ref: d,
              id: f,
              class: p(o.value.dropdown),
              style: de({ maxHeight: `${t.maxDropdownHeight}px` }),
              role: "listbox",
              "aria-multiselectable": t.multiple
            }, [
              t.filterable ? (w(), x("div", Vo, [
                B("input", {
                  ref_key: "searchInputRef",
                  ref: n,
                  class: p(o.value.search),
                  type: "text",
                  value: C(b),
                  onInput: S,
                  placeholder: "搜索...",
                  onKeydown: I[3] || (I[3] = Ce(() => {
                  }, ["stop"]))
                }, null, 42, $o)
              ])) : N("", !0),
              B("div", null, [
                P.value ? (w(), x(ae, { key: 1 }, [
                  C(v).noGroup.length ? (w(!0), x(ae, { key: 0 }, ne(C(v).noGroup, (j, K) => (w(), x("div", {
                    key: j.value,
                    class: p([
                      o.value.option,
                      {
                        [o.value.optionSelected]: C($)(j.value),
                        [o.value.optionActive]: C(k) === K,
                        [o.value.optionDisabled]: j.disabled
                      }
                    ]),
                    onClick: Ce((Y) => !j.disabled && C(z)(j), ["stop"]),
                    role: "option",
                    "aria-selected": C($)(j.value),
                    "aria-disabled": j.disabled
                  }, [
                    ce(U(j.label) + " ", 1),
                    C($)(j.value) ? (w(), x("svg", {
                      key: 0,
                      class: p(o.value.checkIcon),
                      viewBox: "0 0 24 24",
                      width: "16",
                      height: "16",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      fill: "none"
                    }, I[8] || (I[8] = [
                      B("polyline", { points: "20 6 9 17 4 12" }, null, -1)
                    ]), 2)) : N("", !0)
                  ], 10, Do))), 128)) : N("", !0),
                  (w(!0), x(ae, null, ne(C(v).groups, (j, K) => (w(), x(ae, { key: K }, [
                    B("div", Mo, U(K), 1),
                    (w(!0), x(ae, null, ne(j, (Y, oe) => (w(), x("div", {
                      key: Y.value,
                      class: p([
                        o.value.option,
                        "pl-5",
                        {
                          [o.value.optionSelected]: C($)(Y.value),
                          [o.value.optionActive]: F(K, oe) === C(k),
                          [o.value.optionDisabled]: Y.disabled
                        }
                      ]),
                      onClick: Ce((W) => !Y.disabled && C(z)(Y), ["stop"]),
                      role: "option",
                      "aria-selected": C($)(Y.value),
                      "aria-disabled": Y.disabled
                    }, [
                      ce(U(Y.label) + " ", 1),
                      C($)(Y.value) ? (w(), x("svg", {
                        key: 0,
                        class: p(o.value.checkIcon),
                        viewBox: "0 0 24 24",
                        width: "16",
                        height: "16",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        fill: "none"
                      }, I[9] || (I[9] = [
                        B("polyline", { points: "20 6 9 17 4 12" }, null, -1)
                      ]), 2)) : N("", !0)
                    ], 10, To))), 128))
                  ], 64))), 128))
                ], 64)) : (w(), x(ae, { key: 0 }, [
                  C(c).length ? (w(!0), x(ae, { key: 0 }, ne(C(c), (j, K) => (w(), x("div", {
                    key: j.value,
                    class: p([
                      o.value.option,
                      {
                        [o.value.optionSelected]: C($)(j.value),
                        [o.value.optionActive]: C(k) === K,
                        [o.value.optionDisabled]: j.disabled
                      }
                    ]),
                    onClick: Ce((Y) => !j.disabled && C(z)(j), ["stop"]),
                    role: "option",
                    "aria-selected": C($)(j.value),
                    "aria-disabled": j.disabled
                  }, [
                    ce(U(j.label) + " ", 1),
                    C($)(j.value) ? (w(), x("svg", {
                      key: 0,
                      class: p(o.value.checkIcon),
                      viewBox: "0 0 24 24",
                      width: "16",
                      height: "16",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      fill: "none"
                    }, I[7] || (I[7] = [
                      B("polyline", { points: "20 6 9 17 4 12" }, null, -1)
                    ]), 2)) : N("", !0)
                  ], 10, Io))), 128)) : (w(), x("div", {
                    key: 1,
                    class: p(o.value.noMatch)
                  }, U(t.noMatchText), 3))
                ], 64))
              ])
            ], 14, Bo)) : N("", !0)
          ]),
          _: 1
        }),
        t.helpText && !t.errorText ? (w(), x("div", Ro, U(t.helpText), 1)) : N("", !0),
        t.errorText ? (w(), x("div", Eo, U(t.errorText), 1)) : N("", !0)
      ], 2);
    };
  }
}), Ao = Q(Lo);
function Oo(l) {
  const a = H(l.modelValue ?? 0), e = H(-1), t = H(!1);
  return te(
    () => l.modelValue,
    (n) => {
      n !== void 0 && (a.value = n);
    }
  ), {
    currentValue: a,
    hoverValue: e,
    isHovering: t,
    getStarValue: (n) => {
      const i = t.value ? e.value : a.value;
      return l.allowHalf ? i >= n + 1 ? 1 : i >= n + 0.5 ? 0.5 : 0 : i >= n + 1 ? 1 : 0;
    },
    handleClick: (n, i) => {
      var k;
      if (l.disabled || l.readonly) return;
      let b;
      l.allowHalf && i ? b = n + 0.5 : b = n + 1, b === a.value && (b = 0), a.value = b, (k = l.onChange) == null || k.call(l, b);
    },
    handleMouseMove: (n, i) => {
      var b;
      if (!(l.disabled || l.readonly)) {
        if (t.value = !0, l.allowHalf) {
          const m = n.currentTarget.getBoundingClientRect(), d = n.clientX - m.left < m.width / 2;
          e.value = d ? i + 0.5 : i + 1;
        } else
          e.value = i + 1;
        (b = l.onHoverChange) == null || b.call(l, e.value);
      }
    },
    handleMouseLeave: () => {
      var n;
      l.disabled || l.readonly || (t.value = !1, e.value = -1, (n = l.onHoverChange) == null || n.call(l, a.value));
    }
  };
}
const Po = R({
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
}), jo = R({
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
}), Fo = R({
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
}), Wo = R({
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
}), Ho = R({
  base: "text-gray-300 dark:text-gray-600"
}), No = R({
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
}), Go = {
  "update:modelValue": (l) => typeof l == "number",
  change: (l) => typeof l == "number",
  "hover-change": (l) => typeof l == "number"
}, _o = ["onClick", "onMousemove", "aria-checked", "aria-disabled", "aria-readonly", "tabindex"], Ko = /* @__PURE__ */ J({
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
  emits: Go,
  setup(l, { emit: a }) {
    const e = l, t = a, {
      currentValue: r,
      getStarValue: s,
      handleClick: o,
      handleMouseMove: f,
      handleMouseLeave: n
    } = Oo({
      modelValue: e.modelValue,
      max: e.max,
      allowHalf: e.allowHalf,
      readonly: e.readonly,
      disabled: e.disabled,
      onChange: (u) => {
        t("update:modelValue", u), t("change", u);
      },
      onHoverChange: (u) => {
        t("hover-change", u);
      }
    }), i = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.container) || "" : Po({
        disabled: e.disabled,
        class: (c = e.pt) == null ? void 0 : c.container
      });
    }), b = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.item) || "" : jo({
        size: e.size,
        disabled: e.disabled,
        readonly: e.readonly,
        class: (c = e.pt) == null ? void 0 : c.item
      });
    }), k = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.score) || "" : Fo({
        size: e.size,
        class: (c = e.pt) == null ? void 0 : c.score
      });
    }), m = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.fullStar) || "absolute inset-0 overflow-hidden w-full" : Wo({
        color: e.color,
        class: (c = e.pt) == null ? void 0 : c.fullStar
      }) + " w-full";
    }), d = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.halfStar) || "absolute inset-0 overflow-hidden w-1/2" : No({
        color: e.color,
        class: (c = e.pt) == null ? void 0 : c.halfStar
      }) + " w-1/2";
    }), g = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.voidStar) || "" : Ho({
        class: (c = e.pt) == null ? void 0 : c.voidStar
      });
    }), y = (u) => e.formatTooltip ? e.formatTooltip(u) : u.toString();
    return (u, c) => (w(), x("div", {
      class: p(i.value),
      onMouseleave: c[0] || (c[0] = //@ts-ignore
      (...v) => C(n) && C(n)(...v)),
      role: "radiogroup",
      "aria-label": "评分"
    }, [
      (w(!0), x(ae, null, ne(u.max, (v) => (w(), x("div", {
        key: v,
        class: p(b.value),
        onClick: (z) => C(o)(v - 1, !1),
        onMousemove: (z) => C(f)(z, v - 1),
        role: "radio",
        "aria-checked": C(s)(v - 1) > 0,
        "aria-disabled": u.disabled,
        "aria-readonly": u.readonly,
        tabindex: u.disabled ? -1 : 0
      }, [
        B("span", {
          class: p(g.value)
        }, [
          _(u.$slots, "character", {}, () => [
            ce(U(u.character || "★"), 1)
          ], !0)
        ], 2),
        C(s)(v - 1) === 1 ? (w(), x("span", {
          key: 0,
          class: p(m.value)
        }, [
          _(u.$slots, "character", {}, () => [
            ce(U(u.character || "★"), 1)
          ], !0)
        ], 2)) : C(s)(v - 1) === 0.5 ? (w(), x("span", {
          key: 1,
          class: p(d.value)
        }, [
          _(u.$slots, "character", {}, () => [
            ce(U(u.character || "★"), 1)
          ], !0)
        ], 2)) : N("", !0)
      ], 42, _o))), 128)),
      u.showScore ? (w(), x("span", {
        key: 0,
        class: p(k.value)
      }, U(y(C(r))), 3)) : N("", !0)
    ], 34));
  }
}), Yo = /* @__PURE__ */ ll(Ko, [["__scopeId", "data-v-ae42a8b5"]]), Uo = Q(Yo), Xo = (l, a) => {
  const e = H(l.modelValue || /* @__PURE__ */ new Date()), t = H(e.value.getMonth()), r = H(e.value.getFullYear()), s = h(() => {
    const k = l.locale || "default", m = l.firstDayOfWeek || 0, d = [];
    for (let g = 0; g < 7; g++) {
      const y = (g + m) % 7;
      d.push(
        new Intl.DateTimeFormat(k, { weekday: "short" }).format(
          new Date(2021, 0, y + 3)
          // 2021-01-03 is a Sunday
        )
      );
    }
    return d;
  }), o = h(() => {
    const k = r.value, m = t.value, d = new Date(k, m, 1).getDay(), g = new Date(k, m + 1, 0).getDate(), y = l.firstDayOfWeek || 0, u = [], c = new Date(k, m, 0).getDate(), v = (d - y + 7) % 7;
    for (let M = c - v + 1; M <= c; M++)
      u.push({
        date: new Date(k, m - 1, M),
        day: M,
        isCurrentMonth: !1,
        isToday: !1,
        isSelected: !1,
        isDisabled: !1
      });
    const z = /* @__PURE__ */ new Date();
    for (let M = 1; M <= g; M++) {
      const V = new Date(k, m, M), T = z.getDate() === M && z.getMonth() === m && z.getFullYear() === k, $ = l.modelValue && l.modelValue.getDate() === M && l.modelValue.getMonth() === m && l.modelValue.getFullYear() === k, O = l.disabled || l.min && V < l.min || l.max && V > l.max;
      u.push({
        date: V,
        day: M,
        isCurrentMonth: !0,
        isToday: T,
        isSelected: $,
        isDisabled: O
      });
    }
    const D = 42 - u.length;
    for (let M = 1; M <= D; M++)
      u.push({
        date: new Date(k, m + 1, M),
        day: M,
        isCurrentMonth: !1,
        isToday: !1,
        isSelected: !1,
        isDisabled: !1
      });
    return u;
  }), f = h(() => {
    const k = l.locale || "default";
    return new Intl.DateTimeFormat(k, { month: "long" }).format(
      new Date(r.value, t.value)
    );
  }), n = () => {
    t.value === 0 ? (t.value = 11, r.value--) : t.value--;
  }, i = () => {
    t.value === 11 ? (t.value = 0, r.value++) : t.value++;
  }, b = (k) => {
    l.disabled || l.readonly || l.min && k < l.min || l.max && k > l.max || (e.value = k, a("update:modelValue", k), a("change", k));
  };
  return te(
    () => l.modelValue,
    (k) => {
      k && (e.value = k, t.value = k.getMonth(), r.value = k.getFullYear());
    }
  ), {
    currentDate: e,
    currentMonth: t,
    currentYear: r,
    weekdays: s,
    daysInMonth: o,
    monthName: f,
    prevMonth: n,
    nextMonth: i,
    selectDate: b
  };
}, qo = R({
  base: "w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), Zo = R({
  base: "flex items-center justify-between mb-4"
}), Jo = R({
  base: "text-lg font-medium"
}), Qo = R({
  base: "flex items-center space-x-1"
}), en = R({
  base: "p-1 rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
}), tn = R({
  base: "grid grid-cols-7 mb-1"
}), ln = R({
  base: "text-center text-sm font-medium text-gray-500 py-2"
}), an = R({
  base: "grid grid-cols-7 gap-1"
}), $e = R({
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
}), rn = {
  "update:modelValue": (l) => l === null || l instanceof Date,
  change: (l) => l === null || l instanceof Date
}, on = ["disabled"], nn = ["disabled"], sn = ["onClick", "disabled"], un = /* @__PURE__ */ J({
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
  emits: rn,
  setup(l, { emit: a }) {
    const e = a, t = l, {
      currentYear: r,
      weekdays: s,
      daysInMonth: o,
      monthName: f,
      prevMonth: n,
      nextMonth: i,
      selectDate: b
    } = Xo(t, e), k = h(() => {
      var m, d, g, y, u, c, v, z, D, M, V, T, $, O, A, L, P, F, S, E, I, G, j, K, Y, oe;
      return {
        root: t.unstyled ? ((m = t.pt) == null ? void 0 : m.root) || "" : qo({ unstyled: t.unstyled, class: (d = t.pt) == null ? void 0 : d.root }),
        header: t.unstyled ? ((g = t.pt) == null ? void 0 : g.header) || "" : Zo({ class: (y = t.pt) == null ? void 0 : y.header }),
        title: t.unstyled ? ((u = t.pt) == null ? void 0 : u.title) || "" : Jo({ class: (c = t.pt) == null ? void 0 : c.title }),
        navigation: t.unstyled ? ((v = t.pt) == null ? void 0 : v.navigation) || "" : Qo({ class: (z = t.pt) == null ? void 0 : z.navigation }),
        navButton: t.unstyled ? ((D = t.pt) == null ? void 0 : D.navButton) || "" : en({ class: (M = t.pt) == null ? void 0 : M.navButton }),
        weekdays: t.unstyled ? ((V = t.pt) == null ? void 0 : V.weekdays) || "" : tn({ class: (T = t.pt) == null ? void 0 : T.weekdays }),
        weekday: t.unstyled ? (($ = t.pt) == null ? void 0 : $.weekday) || "" : ln({ class: (O = t.pt) == null ? void 0 : O.weekday }),
        days: t.unstyled ? ((A = t.pt) == null ? void 0 : A.days) || "" : an({ class: (L = t.pt) == null ? void 0 : L.days }),
        day: t.unstyled ? ((P = t.pt) == null ? void 0 : P.day) || "" : $e({ class: (F = t.pt) == null ? void 0 : F.day }),
        today: t.unstyled ? ((S = t.pt) == null ? void 0 : S.today) || "" : $e({ isToday: !0, class: (E = t.pt) == null ? void 0 : E.today }).split(" ").filter((W) => !$e().includes(W)).join(" "),
        selected: t.unstyled ? ((I = t.pt) == null ? void 0 : I.selected) || "" : $e({ isSelected: !0, class: (G = t.pt) == null ? void 0 : G.selected }).split(" ").filter((W) => !$e().includes(W)).join(" "),
        disabled: t.unstyled ? ((j = t.pt) == null ? void 0 : j.disabled) || "" : $e({ isDisabled: !0, class: (K = t.pt) == null ? void 0 : K.disabled }).split(" ").filter((W) => !$e().includes(W)).join(" "),
        adjacent: t.unstyled ? ((Y = t.pt) == null ? void 0 : Y.adjacent) || "" : $e({ isAdjacent: !0, class: (oe = t.pt) == null ? void 0 : oe.adjacent }).split(" ").filter((W) => !$e().includes(W)).join(" ")
      };
    });
    return (m, d) => (w(), x("div", {
      class: p(k.value.root)
    }, [
      B("div", {
        class: p(k.value.header)
      }, [
        B("div", {
          class: p(k.value.title)
        }, U(C(f)) + " " + U(C(r)), 3),
        B("div", {
          class: p(k.value.navigation)
        }, [
          B("button", {
            class: p(k.value.navButton),
            onClick: d[0] || (d[0] = //@ts-ignore
            (...g) => C(n) && C(n)(...g)),
            disabled: m.disabled || m.readonly
          }, d[2] || (d[2] = [
            B("svg", {
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
              B("path", { d: "m15 18-6-6 6-6" })
            ], -1)
          ]), 10, on),
          B("button", {
            class: p(k.value.navButton),
            onClick: d[1] || (d[1] = //@ts-ignore
            (...g) => C(i) && C(i)(...g)),
            disabled: m.disabled || m.readonly
          }, d[3] || (d[3] = [
            B("svg", {
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
              B("path", { d: "m9 18 6-6-6-6" })
            ], -1)
          ]), 10, nn)
        ], 2)
      ], 2),
      B("div", {
        class: p(k.value.weekdays)
      }, [
        (w(!0), x(ae, null, ne(C(s), (g, y) => (w(), x("div", {
          key: y,
          class: p(k.value.weekday)
        }, U(g), 3))), 128))
      ], 2),
      B("div", {
        class: p(k.value.days)
      }, [
        (w(!0), x(ae, null, ne(C(o), (g, y) => (w(), x("button", {
          key: y,
          class: p([
            k.value.day,
            g.isToday ? k.value.today : "",
            g.isSelected ? k.value.selected : "",
            g.isDisabled ? k.value.disabled : "",
            g.isCurrentMonth ? "" : k.value.adjacent
          ]),
          onClick: (u) => C(b)(g.date),
          disabled: g.isDisabled || m.disabled || m.readonly
        }, U(g.day), 11, sn))), 128))
      ], 2)
    ], 2));
  }
}), wt = Q(un), dn = (l, a) => {
  const e = H(!1), t = H(null), r = H(null), s = H(null), o = H(null), f = H(null), n = H(null), i = h(() => {
    let S = 0, E = 0, I = 0;
    if (l.modelValue) {
      if (l.modelValue instanceof Date)
        S = l.modelValue.getHours(), E = l.modelValue.getMinutes(), I = l.modelValue.getSeconds();
      else if (typeof l.modelValue == "string") {
        const G = l.modelValue.split(":");
        S = parseInt(G[0]) || 0, E = parseInt(G[1]) || 0, I = G[2] ? parseInt(G[2]) : 0;
      }
    }
    return { hours: S, minutes: E, seconds: I };
  }), b = H(i.value.hours), k = H(i.value.minutes), m = H(i.value.seconds), d = H(i.value.hours >= 12 ? "pm" : "am"), g = h(() => {
    const S = [], E = l.hourStep || 1, I = l.format === "12h", G = I ? 1 : 0, j = I ? 12 : 23;
    for (let K = G; K <= j; K += E)
      S.push(K);
    return S;
  }), y = h(() => {
    const S = [], E = l.minuteStep || 1;
    for (let I = 0; I <= 59; I += E)
      S.push(I);
    return S;
  }), u = h(() => {
    const S = [], E = l.secondStep || 1;
    for (let I = 0; I <= 59; I += E)
      S.push(I);
    return S;
  }), c = h(() => {
    if (!l.modelValue) return "";
    try {
      if (l.modelValue instanceof Date) {
        const S = {
          hour: "numeric",
          minute: "2-digit"
        };
        return l.showSeconds && (S.second = "2-digit"), l.format === "12h" ? S.hour12 = !0 : S.hour12 = !1, new Intl.DateTimeFormat("default", S).format(
          l.modelValue
        );
      } else
        return l.modelValue;
    } catch (S) {
      return console.error("Time formatting error:", S), l.modelValue instanceof Date ? l.modelValue.toLocaleTimeString() : l.modelValue;
    }
  }), v = () => {
    l.disabled || l.readonly || (e.value = !e.value, e.value && (b.value = i.value.hours, k.value = i.value.minutes, m.value = i.value.seconds, d.value = i.value.hours >= 12 ? "pm" : "am", setTimeout(() => {
      D();
    }, 50)));
  }, z = () => {
    e.value = !1;
  }, D = () => {
    const S = (E, I) => {
      if (!E) return;
      const j = E.querySelectorAll("div")[I];
      j && (E.scrollTop = j.offsetTop - E.offsetHeight / 2 + j.offsetHeight / 2);
    };
    if (l.format === "12h") {
      const E = b.value > 12 ? b.value - 12 : b.value === 0 ? 12 : b.value;
      S(s.value, g.value.indexOf(E));
    } else
      S(s.value, g.value.indexOf(b.value));
    S(
      o.value,
      y.value.indexOf(k.value)
    ), l.showSeconds && f.value && S(
      f.value,
      u.value.indexOf(m.value)
    ), l.format === "12h" && n.value && S(n.value, d.value === "am" ? 0 : 1);
  }, M = () => {
    let S = b.value;
    l.format === "12h" && (d.value === "pm" && S < 12 ? S += 12 : d.value === "am" && S === 12 && (S = 0));
    let E;
    if (l.modelValue instanceof Date) {
      const I = new Date(l.modelValue);
      I.setHours(S), I.setMinutes(k.value), I.setSeconds(l.showSeconds ? m.value : 0), E = I;
    } else {
      const I = S.toString().padStart(2, "0"), G = k.value.toString().padStart(2, "0");
      if (l.showSeconds) {
        const j = m.value.toString().padStart(2, "0");
        E = `${I}:${G}:${j}`;
      } else
        E = `${I}:${G}`;
    }
    a("update:modelValue", E), a("change", E);
  }, V = (S) => {
    b.value = S, M();
  }, T = (S) => {
    k.value = S, M();
  }, $ = (S) => {
    m.value = S, M();
  }, O = (S) => {
    d.value = S, M();
  }, A = (S) => {
    S.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, L = (S) => {
    a("focus", S);
  }, P = (S) => {
    a("blur", S);
  }, F = (S) => {
    e.value && t.value && r.value && !t.value.contains(S.target) && !r.value.contains(S.target) && z();
  };
  return ve(() => {
    document.addEventListener("mousedown", F);
  }), De(() => {
    document.removeEventListener("mousedown", F);
  }), te(
    () => l.modelValue,
    (S) => {
      S ? (b.value = i.value.hours, k.value = i.value.minutes, m.value = i.value.seconds, d.value = i.value.hours >= 12 ? "pm" : "am") : z();
    }
  ), {
    isOpen: e,
    inputRef: t,
    dropdownRef: r,
    hourRef: s,
    minuteRef: o,
    secondRef: f,
    ampmRef: n,
    formattedValue: c,
    hourList: g,
    minuteList: y,
    secondList: u,
    selectedHour: b,
    selectedMinute: k,
    selectedSecond: m,
    selectedAmPm: d,
    toggleDropdown: v,
    closeDropdown: z,
    selectHour: V,
    selectMinute: T,
    selectSecond: $,
    selectAmPm: O,
    handleClear: A,
    handleFocus: L,
    handleBlur: P
  };
}, cn = R({
  base: "relative w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), fn = R({
  base: "relative flex items-center"
}), pn = R({
  base: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    error: {
      true: "border-red-500 focus:ring-red-500"
    }
  }
}), bn = R({
  base: "absolute right-3 text-gray-400 hover:text-gray-500 cursor-pointer"
}), vn = R({
  base: "absolute z-50 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 p-4"
}), gn = R({
  base: "flex space-x-2 h-52 overflow-hidden"
}), mn = R({
  base: "flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
}), it = R({
  base: "py-2 px-3 text-center cursor-pointer hover:bg-gray-100 rounded-md",
  variants: {
    selected: {
      true: "bg-blue-100 text-blue-700 font-medium"
    }
  }
}), yn = {
  "update:modelValue": (l) => l === null || typeof l == "string" || l instanceof Date,
  change: (l) => l === null || typeof l == "string" || l instanceof Date,
  focus: (l) => l instanceof FocusEvent,
  blur: (l) => l instanceof FocusEvent,
  clear: () => !0
}, hn = ["value", "placeholder", "disabled"], wn = ["onClick"], xn = ["onClick"], kn = ["onClick"], Cn = /* @__PURE__ */ J({
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
  emits: yn,
  setup(l, { emit: a }) {
    const e = a, t = l, {
      isOpen: r,
      inputRef: s,
      dropdownRef: o,
      hourRef: f,
      minuteRef: n,
      secondRef: i,
      ampmRef: b,
      formattedValue: k,
      hourList: m,
      minuteList: d,
      secondList: g,
      selectedHour: y,
      selectedMinute: u,
      selectedSecond: c,
      selectedAmPm: v,
      toggleDropdown: z,
      selectHour: D,
      selectMinute: M,
      selectSecond: V,
      selectAmPm: T,
      handleClear: $,
      handleFocus: O,
      handleBlur: A
    } = dn(t, e), L = h(() => {
      var P, F, S, E, I, G, j, K, Y, oe, W, Z, le, ee, se, ue, fe, ge;
      return {
        root: t.unstyled ? ((P = t.pt) == null ? void 0 : P.root) || "" : cn({ unstyled: t.unstyled, class: (F = t.pt) == null ? void 0 : F.root }),
        inputWrapper: t.unstyled ? ((S = t.pt) == null ? void 0 : S.inputWrapper) || "" : fn({ class: (E = t.pt) == null ? void 0 : E.inputWrapper }),
        input: t.unstyled ? ((I = t.pt) == null ? void 0 : I.input) || "" : pn({ class: (G = t.pt) == null ? void 0 : G.input }),
        clearButton: t.unstyled ? ((j = t.pt) == null ? void 0 : j.clearButton) || "" : bn({ class: (K = t.pt) == null ? void 0 : K.clearButton }),
        dropdown: t.unstyled ? ((Y = t.pt) == null ? void 0 : Y.dropdown) || "" : vn({ class: (oe = t.pt) == null ? void 0 : oe.dropdown }),
        timeSelector: t.unstyled ? ((W = t.pt) == null ? void 0 : W.timeSelector) || "" : gn({ class: (Z = t.pt) == null ? void 0 : Z.timeSelector }),
        column: t.unstyled ? ((le = t.pt) == null ? void 0 : le.column) || "" : mn({ class: (ee = t.pt) == null ? void 0 : ee.column }),
        item: t.unstyled ? ((se = t.pt) == null ? void 0 : se.item) || "" : it({ class: (ue = t.pt) == null ? void 0 : ue.item }),
        itemSelected: t.unstyled ? ((fe = t.pt) == null ? void 0 : fe.itemSelected) || "" : it({ selected: !0, class: (ge = t.pt) == null ? void 0 : ge.itemSelected }).split(" ").filter((pe) => !it().includes(pe)).join(" ")
      };
    });
    return (P, F) => (w(), x("div", {
      class: p(L.value.root)
    }, [
      B("div", {
        class: p(L.value.inputWrapper),
        onClick: F[3] || (F[3] = //@ts-ignore
        (...S) => C(z) && C(z)(...S))
      }, [
        B("input", {
          ref_key: "inputRef",
          ref: s,
          type: "text",
          class: p(L.value.input),
          value: C(k),
          placeholder: P.placeholder,
          disabled: P.disabled,
          readonly: !0,
          onFocus: F[0] || (F[0] = //@ts-ignore
          (...S) => C(O) && C(O)(...S)),
          onBlur: F[1] || (F[1] = //@ts-ignore
          (...S) => C(A) && C(A)(...S))
        }, null, 42, hn),
        P.clearable && P.modelValue && !P.disabled && !P.readonly ? (w(), x("span", {
          key: 0,
          class: p(L.value.clearButton),
          onClick: F[2] || (F[2] = //@ts-ignore
          (...S) => C($) && C($)(...S))
        }, F[6] || (F[6] = [
          B("svg", {
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
            B("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }),
            B("line", {
              x1: "6",
              y1: "6",
              x2: "18",
              y2: "18"
            })
          ], -1)
        ]), 2)) : N("", !0)
      ], 2),
      C(r) ? (w(), x("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: o,
        class: p(L.value.dropdown)
      }, [
        B("div", {
          class: p(L.value.timeSelector)
        }, [
          B("div", {
            ref_key: "hourRef",
            ref: f,
            class: p(L.value.column)
          }, [
            (w(!0), x(ae, null, ne(C(m), (S) => (w(), x("div", {
              key: `hour-${S}`,
              class: p([
                L.value.item,
                (P.format === "12h" ? (C(y) > 12 ? C(y) - 12 : C(y) === 0 ? 12 : C(y)) === S : C(y) === S) ? L.value.itemSelected : ""
              ]),
              onClick: (E) => C(D)(S)
            }, U(S.toString().padStart(2, "0")), 11, wn))), 128))
          ], 2),
          B("div", {
            ref_key: "minuteRef",
            ref: n,
            class: p(L.value.column)
          }, [
            (w(!0), x(ae, null, ne(C(d), (S) => (w(), x("div", {
              key: `minute-${S}`,
              class: p([
                L.value.item,
                C(u) === S ? L.value.itemSelected : ""
              ]),
              onClick: (E) => C(M)(S)
            }, U(S.toString().padStart(2, "0")), 11, xn))), 128))
          ], 2),
          P.showSeconds ? (w(), x("div", {
            key: 0,
            ref_key: "secondRef",
            ref: i,
            class: p(L.value.column)
          }, [
            (w(!0), x(ae, null, ne(C(g), (S) => (w(), x("div", {
              key: `second-${S}`,
              class: p([
                L.value.item,
                C(c) === S ? L.value.itemSelected : ""
              ]),
              onClick: (E) => C(V)(S)
            }, U(S.toString().padStart(2, "0")), 11, kn))), 128))
          ], 2)) : N("", !0),
          P.format === "12h" ? (w(), x("div", {
            key: 1,
            ref_key: "ampmRef",
            ref: b,
            class: p(L.value.column)
          }, [
            B("div", {
              class: p([
                L.value.item,
                C(v) === "am" ? L.value.itemSelected : ""
              ]),
              onClick: F[4] || (F[4] = (S) => C(T)("am"))
            }, " AM ", 2),
            B("div", {
              class: p([
                L.value.item,
                C(v) === "pm" ? L.value.itemSelected : ""
              ]),
              onClick: F[5] || (F[5] = (S) => C(T)("pm"))
            }, " PM ", 2)
          ], 2)) : N("", !0)
        ], 2)
      ], 2)) : N("", !0)
    ], 2));
  }
}), al = Q(Cn), zn = (l, a) => {
  const e = H(!1), t = H(null), r = H(null), s = h(() => {
    if (!l.modelValue) return "";
    try {
      const d = l.locale || "default", g = {};
      return l.format ? (l.format.includes("yyyy") && (g.year = "numeric"), l.format.includes("MM") ? g.month = "2-digit" : l.format.includes("M") && (g.month = "numeric"), l.format.includes("dd") ? g.day = "2-digit" : l.format.includes("d") && (g.day = "numeric"), Object.keys(g).length === 0 && (g.year = "numeric", g.month = "2-digit", g.day = "2-digit")) : (g.year = "numeric", g.month = "2-digit", g.day = "2-digit"), new Intl.DateTimeFormat(d, g).format(l.modelValue);
    } catch (d) {
      return console.error("Date formatting error:", d), l.modelValue.toLocaleDateString();
    }
  }), o = () => {
    l.disabled || l.readonly || (e.value = !e.value);
  }, f = () => {
    e.value = !1;
  }, n = (d) => {
    d === null ? (a("update:modelValue", null), a("change", null)) : (a("update:modelValue", d), a("change", d)), f();
  }, i = (d) => {
    d.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, b = (d) => {
    a("focus", d);
  }, k = (d) => {
    a("blur", d);
  }, m = (d) => {
    e.value && t.value && r.value && !t.value.contains(d.target) && !r.value.contains(d.target) && f();
  };
  return ve(() => {
    document.addEventListener("mousedown", m);
  }), De(() => {
    document.removeEventListener("mousedown", m);
  }), te(
    () => l.modelValue,
    (d) => {
      d || f();
    }
  ), {
    isOpen: e,
    inputRef: t,
    dropdownRef: r,
    formattedValue: s,
    toggleDropdown: o,
    closeDropdown: f,
    handleDateChange: n,
    handleClear: i,
    handleFocus: b,
    handleBlur: k
  };
}, Sn = R({
  base: "relative w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), Bn = R({
  base: "relative flex items-center"
}), Vn = R({
  base: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    error: {
      true: "border-red-500 focus:ring-red-500"
    }
  }
}), $n = R({
  base: "absolute right-3 text-gray-400 hover:text-gray-500 cursor-pointer"
}), In = R({
  base: "absolute z-50 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 p-4"
}), Dn = {
  "update:modelValue": (l) => l === null || l instanceof Date,
  change: (l) => l === null || l instanceof Date,
  focus: (l) => l instanceof FocusEvent,
  blur: (l) => l instanceof FocusEvent,
  clear: () => !0
}, Mn = ["value", "placeholder", "disabled"], Tn = /* @__PURE__ */ J({
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
  emits: Dn,
  setup(l, { emit: a }) {
    const e = a, t = l, {
      isOpen: r,
      inputRef: s,
      dropdownRef: o,
      formattedValue: f,
      toggleDropdown: n,
      handleDateChange: i,
      handleClear: b,
      handleFocus: k,
      handleBlur: m
    } = zn(t, e), d = h(() => {
      var g, y, u, c, v, z, D, M, V, T;
      return {
        root: t.unstyled ? ((g = t.pt) == null ? void 0 : g.root) || "" : Sn({ unstyled: t.unstyled, class: (y = t.pt) == null ? void 0 : y.root }),
        inputWrapper: t.unstyled ? ((u = t.pt) == null ? void 0 : u.inputWrapper) || "" : Bn({ class: (c = t.pt) == null ? void 0 : c.inputWrapper }),
        input: t.unstyled ? ((v = t.pt) == null ? void 0 : v.input) || "" : Vn({ class: (z = t.pt) == null ? void 0 : z.input }),
        clearButton: t.unstyled ? ((D = t.pt) == null ? void 0 : D.clearButton) || "" : $n({ class: (M = t.pt) == null ? void 0 : M.clearButton }),
        dropdown: t.unstyled ? ((V = t.pt) == null ? void 0 : V.dropdown) || "" : In({ class: (T = t.pt) == null ? void 0 : T.dropdown })
      };
    });
    return (g, y) => {
      var u;
      return w(), x("div", {
        class: p(d.value.root)
      }, [
        B("div", {
          class: p(d.value.inputWrapper),
          onClick: y[3] || (y[3] = //@ts-ignore
          (...c) => C(n) && C(n)(...c))
        }, [
          B("input", {
            ref_key: "inputRef",
            ref: s,
            type: "text",
            class: p(d.value.input),
            value: C(f),
            placeholder: g.placeholder,
            disabled: g.disabled,
            readonly: !0,
            onFocus: y[0] || (y[0] = //@ts-ignore
            (...c) => C(k) && C(k)(...c)),
            onBlur: y[1] || (y[1] = //@ts-ignore
            (...c) => C(m) && C(m)(...c))
          }, null, 42, Mn),
          g.clearable && g.modelValue && !g.disabled && !g.readonly ? (w(), x("span", {
            key: 0,
            class: p(d.value.clearButton),
            onClick: y[2] || (y[2] = //@ts-ignore
            (...c) => C(b) && C(b)(...c))
          }, y[4] || (y[4] = [
            B("svg", {
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
              B("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
              }),
              B("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
              })
            ], -1)
          ]), 2)) : N("", !0)
        ], 2),
        C(r) ? (w(), x("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: o,
          class: p(d.value.dropdown)
        }, [
          Oe(C(wt), {
            modelValue: g.modelValue,
            min: g.min,
            max: g.max,
            disabled: g.disabled,
            readonly: g.readonly,
            firstDayOfWeek: g.firstDayOfWeek,
            locale: g.locale,
            pt: (u = g.pt) == null ? void 0 : u.calendar,
            "onUpdate:modelValue": C(i)
          }, null, 8, ["modelValue", "min", "max", "disabled", "readonly", "firstDayOfWeek", "locale", "pt", "onUpdate:modelValue"])
        ], 2)) : N("", !0)
      ], 2);
    };
  }
}), Rn = Q(Tn), En = (l, a) => {
  const e = H(!1), t = H("date"), r = H(null), s = H(null), o = H(l.modelValue || /* @__PURE__ */ new Date()), f = h(() => {
    if (!l.modelValue) return "";
    try {
      const c = l.locale || "default", v = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "2-digit"
      };
      return l.showSeconds && (v.second = "2-digit"), l.timeFormat === "12h" ? v.hour12 = !0 : v.hour12 = !1, new Intl.DateTimeFormat(c, v).format(l.modelValue);
    } catch (c) {
      return console.error("DateTime formatting error:", c), l.modelValue.toLocaleString();
    }
  }), n = () => {
    l.disabled || l.readonly || (e.value = !e.value, e.value && (o.value = l.modelValue || /* @__PURE__ */ new Date()));
  }, i = () => {
    e.value = !1;
  }, b = (c) => {
    t.value = c;
  }, k = (c) => {
    if (!c) return;
    const v = new Date(o.value);
    v.setFullYear(c.getFullYear()), v.setMonth(c.getMonth()), v.setDate(c.getDate()), o.value = v, a("update:modelValue", v), a("change", v), b("time");
  }, m = (c) => {
    if (!c) return;
    const v = new Date(o.value);
    if (c instanceof Date)
      v.setHours(c.getHours()), v.setMinutes(c.getMinutes()), v.setSeconds(c.getSeconds());
    else if (typeof c == "string") {
      const z = c.split(":");
      z.length >= 2 && (v.setHours(parseInt(z[0]) || 0), v.setMinutes(parseInt(z[1]) || 0), z.length >= 3 && v.setSeconds(parseInt(z[2]) || 0));
    }
    o.value = v, a("update:modelValue", v), a("change", v), i();
  }, d = (c) => {
    c.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, g = (c) => {
    a("focus", c);
  }, y = (c) => {
    a("blur", c);
  }, u = (c) => {
    e.value && r.value && s.value && !r.value.contains(c.target) && !s.value.contains(c.target) && i();
  };
  return ve(() => {
    document.addEventListener("mousedown", u);
  }), De(() => {
    document.removeEventListener("mousedown", u);
  }), te(
    () => l.modelValue,
    (c) => {
      c ? o.value = c : i();
    }
  ), {
    isOpen: e,
    activeTab: t,
    inputRef: r,
    dropdownRef: s,
    currentDateTime: o,
    formattedValue: f,
    toggleDropdown: n,
    closeDropdown: i,
    switchTab: b,
    handleDateChange: k,
    handleTimeChange: m,
    handleClear: d,
    handleFocus: g,
    handleBlur: y
  };
}, Ln = R({
  base: "relative w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), An = R({
  base: "relative flex items-center"
}), On = R({
  base: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    error: {
      true: "border-red-500 focus:ring-red-500"
    }
  }
}), Pn = R({
  base: "absolute right-3 text-gray-400 hover:text-gray-500 cursor-pointer"
}), jn = R({
  base: "absolute z-50 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 p-4"
}), Fn = R({
  base: "flex border-b mb-4"
}), ut = R({
  base: "px-4 py-2 text-sm font-medium cursor-pointer",
  variants: {
    active: {
      true: "border-b-2 border-blue-500 text-blue-700",
      false: "text-gray-500 hover:text-gray-700"
    }
  },
  defaultVariants: {
    active: !1
  }
}), Wn = R({
  base: "mt-2"
}), Hn = {
  "update:modelValue": (l) => l === null || l instanceof Date,
  change: (l) => l === null || l instanceof Date,
  focus: (l) => l instanceof FocusEvent,
  blur: (l) => l instanceof FocusEvent,
  clear: () => !0
}, Nn = ["value", "placeholder", "disabled"], Gn = /* @__PURE__ */ J({
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
  emits: Hn,
  setup(l, { emit: a }) {
    const e = a, t = l, {
      isOpen: r,
      activeTab: s,
      inputRef: o,
      dropdownRef: f,
      currentDateTime: n,
      formattedValue: i,
      toggleDropdown: b,
      switchTab: k,
      handleDateChange: m,
      handleTimeChange: d,
      handleClear: g,
      handleFocus: y,
      handleBlur: u
    } = En(t, e), c = h(() => {
      var v, z, D, M, V, T, $, O, A, L, P, F, S, E, I, G, j, K;
      return {
        root: t.unstyled ? ((v = t.pt) == null ? void 0 : v.root) || "" : Ln({
          unstyled: t.unstyled,
          class: (z = t.pt) == null ? void 0 : z.root
        }),
        inputWrapper: t.unstyled ? ((D = t.pt) == null ? void 0 : D.inputWrapper) || "" : An({ class: (M = t.pt) == null ? void 0 : M.inputWrapper }),
        input: t.unstyled ? ((V = t.pt) == null ? void 0 : V.input) || "" : On({ class: (T = t.pt) == null ? void 0 : T.input }),
        clearButton: t.unstyled ? (($ = t.pt) == null ? void 0 : $.clearButton) || "" : Pn({ class: (O = t.pt) == null ? void 0 : O.clearButton }),
        dropdown: t.unstyled ? ((A = t.pt) == null ? void 0 : A.dropdown) || "" : jn({ class: (L = t.pt) == null ? void 0 : L.dropdown }),
        tabs: t.unstyled ? ((P = t.pt) == null ? void 0 : P.tabs) || "" : Fn({ class: (F = t.pt) == null ? void 0 : F.tabs }),
        tab: t.unstyled ? ((S = t.pt) == null ? void 0 : S.tab) || "" : ut({ class: (E = t.pt) == null ? void 0 : E.tab }),
        activeTab: t.unstyled ? ((I = t.pt) == null ? void 0 : I.activeTab) || "" : ut({ active: !0, class: (G = t.pt) == null ? void 0 : G.activeTab }).split(" ").filter((Y) => !ut().includes(Y)).join(" "),
        tabContent: t.unstyled ? ((j = t.pt) == null ? void 0 : j.tabContent) || "" : Wn({ class: (K = t.pt) == null ? void 0 : K.tabContent })
      };
    });
    return (v, z) => {
      var D, M, V, T, $, O, A, L, P, F;
      return w(), x("div", {
        class: p(c.value.root)
      }, [
        B("div", {
          class: p(c.value.inputWrapper),
          onClick: z[3] || (z[3] = //@ts-ignore
          (...S) => C(b) && C(b)(...S))
        }, [
          B("input", {
            ref_key: "inputRef",
            ref: o,
            type: "text",
            class: p(c.value.input),
            value: C(i),
            placeholder: v.placeholder,
            disabled: v.disabled,
            readonly: !0,
            onFocus: z[0] || (z[0] = //@ts-ignore
            (...S) => C(y) && C(y)(...S)),
            onBlur: z[1] || (z[1] = //@ts-ignore
            (...S) => C(u) && C(u)(...S))
          }, null, 42, Nn),
          v.clearable && v.modelValue && !v.disabled && !v.readonly ? (w(), x("span", {
            key: 0,
            class: p(c.value.clearButton),
            onClick: z[2] || (z[2] = //@ts-ignore
            (...S) => C(g) && C(g)(...S))
          }, z[6] || (z[6] = [
            B("svg", {
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
              B("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
              }),
              B("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
              })
            ], -1)
          ]), 2)) : N("", !0)
        ], 2),
        C(r) ? (w(), x("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: f,
          class: p(c.value.dropdown)
        }, [
          B("div", {
            class: p(c.value.tabs)
          }, [
            B("div", {
              class: p([c.value.tab, C(s) === "date" ? c.value.activeTab : ""]),
              onClick: z[4] || (z[4] = (S) => C(k)("date"))
            }, " 日期 ", 2),
            B("div", {
              class: p([c.value.tab, C(s) === "time" ? c.value.activeTab : ""]),
              onClick: z[5] || (z[5] = (S) => C(k)("time"))
            }, " 时间 ", 2)
          ], 2),
          B("div", {
            class: p(c.value.tabContent)
          }, [
            We(B("div", null, [
              Oe(C(wt), {
                modelValue: C(n),
                min: v.min,
                max: v.max,
                disabled: v.disabled,
                readonly: v.readonly,
                firstDayOfWeek: v.firstDayOfWeek,
                locale: v.locale,
                pt: (M = (D = v.pt) == null ? void 0 : D.datePicker) == null ? void 0 : M.calendar,
                "onUpdate:modelValue": C(m)
              }, null, 8, ["modelValue", "min", "max", "disabled", "readonly", "firstDayOfWeek", "locale", "pt", "onUpdate:modelValue"])
            ], 512), [
              [ct, C(s) === "date"]
            ]),
            We(B("div", null, [
              Oe(C(al), {
                modelValue: C(n),
                disabled: v.disabled,
                readonly: v.readonly,
                format: v.timeFormat,
                hourStep: v.hourStep,
                minuteStep: v.minuteStep,
                secondStep: v.secondStep,
                showSeconds: v.showSeconds,
                pt: {
                  timeSelector: (T = (V = v.pt) == null ? void 0 : V.timePicker) == null ? void 0 : T.timeSelector,
                  column: (O = ($ = v.pt) == null ? void 0 : $.timePicker) == null ? void 0 : O.column,
                  item: (L = (A = v.pt) == null ? void 0 : A.timePicker) == null ? void 0 : L.item,
                  itemSelected: (F = (P = v.pt) == null ? void 0 : P.timePicker) == null ? void 0 : F.itemSelected
                },
                "onUpdate:modelValue": C(d)
              }, null, 8, ["modelValue", "disabled", "readonly", "format", "hourStep", "minuteStep", "secondStep", "showSeconds", "pt", "onUpdate:modelValue"])
            ], 512), [
              [ct, C(s) === "time"]
            ])
          ], 2)
        ], 2)) : N("", !0)
      ], 2);
    };
  }
}), _n = Q(Gn), Kn = (l, a) => {
  const e = H(!1), t = H(null), r = H(null), s = h(() => {
    if (l.options && l.options.length > 0)
      return l.options;
    const d = [], g = l.start || "00:00", y = l.end || "23:59", u = l.step || 30, [c, v] = g.split(":").map(Number), [z, D] = y.split(":").map(Number), M = c * 60 + v, V = z * 60 + D;
    for (let T = M; T <= V; T += u) {
      const $ = Math.floor(T / 60), O = T % 60;
      if (l.format === "12h") {
        const A = $ >= 12 ? "PM" : "AM", L = $ === 0 ? 12 : $ > 12 ? $ - 12 : $;
        d.push(
          `${L.toString().padStart(2, "0")}:${O.toString().padStart(2, "0")} ${A}`
        );
      } else
        d.push(
          `${$.toString().padStart(2, "0")}:${O.toString().padStart(2, "0")}`
        );
    }
    return d;
  }), o = () => {
    l.disabled || l.readonly || (e.value = !e.value);
  }, f = () => {
    e.value = !1;
  }, n = (d) => {
    a("update:modelValue", d), a("change", d), f();
  }, i = (d) => {
    d.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, b = (d) => {
    a("focus", d);
  }, k = (d) => {
    a("blur", d);
  }, m = (d) => {
    e.value && t.value && r.value && !t.value.contains(d.target) && !r.value.contains(d.target) && f();
  };
  return ve(() => {
    document.addEventListener("mousedown", m);
  }), De(() => {
    document.removeEventListener("mousedown", m);
  }), te(
    () => l.modelValue,
    (d) => {
      d || f();
    }
  ), {
    isOpen: e,
    inputRef: t,
    dropdownRef: r,
    timeOptions: s,
    toggleDropdown: o,
    selectOption: n,
    handleClear: i,
    handleFocus: b,
    handleBlur: k
  };
}, Yn = R({
  base: "relative w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), Un = R({
  base: "relative flex items-center"
}), Xn = R({
  base: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    error: {
      true: "border-red-500 focus:ring-red-500"
    }
  }
}), qn = R({
  base: "absolute right-3 text-gray-400 hover:text-gray-500 cursor-pointer"
}), Zn = R({
  base: "absolute z-50 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200"
}), Jn = R({
  base: "max-h-60 overflow-auto py-1"
}), Ke = R({
  base: "px-3 py-2 text-sm cursor-pointer hover:bg-gray-100",
  variants: {
    selected: {
      true: "bg-blue-100 text-blue-700 font-medium"
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed hover:bg-transparent"
    }
  }
}), Qn = {
  "update:modelValue": (l) => l === null || typeof l == "string",
  change: (l) => l === null || typeof l == "string",
  focus: (l) => l instanceof FocusEvent,
  blur: (l) => l instanceof FocusEvent,
  clear: () => !0
}, es = ["value", "placeholder", "disabled"], ts = ["onClick"], ls = /* @__PURE__ */ J({
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
  emits: Qn,
  setup(l, { emit: a }) {
    const e = a, t = l, {
      isOpen: r,
      inputRef: s,
      dropdownRef: o,
      timeOptions: f,
      toggleDropdown: n,
      selectOption: i,
      handleClear: b,
      handleFocus: k,
      handleBlur: m
    } = Kn(t, e), d = h(() => {
      var g, y, u, c, v, z, D, M, V, T, $, O, A, L, P, F;
      return {
        root: t.unstyled ? ((g = t.pt) == null ? void 0 : g.root) || "" : Yn({ unstyled: t.unstyled, class: (y = t.pt) == null ? void 0 : y.root }),
        inputWrapper: t.unstyled ? ((u = t.pt) == null ? void 0 : u.inputWrapper) || "" : Un({ class: (c = t.pt) == null ? void 0 : c.inputWrapper }),
        input: t.unstyled ? ((v = t.pt) == null ? void 0 : v.input) || "" : Xn({ class: (z = t.pt) == null ? void 0 : z.input }),
        clearButton: t.unstyled ? ((D = t.pt) == null ? void 0 : D.clearButton) || "" : qn({ class: (M = t.pt) == null ? void 0 : M.clearButton }),
        dropdown: t.unstyled ? ((V = t.pt) == null ? void 0 : V.dropdown) || "" : Zn({ class: (T = t.pt) == null ? void 0 : T.dropdown }),
        optionsList: t.unstyled ? (($ = t.pt) == null ? void 0 : $.optionsList) || "" : Jn({ class: (O = t.pt) == null ? void 0 : O.optionsList }),
        option: t.unstyled ? ((A = t.pt) == null ? void 0 : A.option) || "" : Ke({ class: (L = t.pt) == null ? void 0 : L.option }),
        optionSelected: t.unstyled ? ((P = t.pt) == null ? void 0 : P.optionSelected) || "" : Ke({
          selected: !0,
          class: (F = t.pt) == null ? void 0 : F.optionSelected
        }).split(" ").filter((S) => !Ke().includes(S)).join(" "),
        optionDisabled: t.unstyled ? "" : Ke({ disabled: !0 }).split(" ").filter((S) => !Ke().includes(S)).join(" ")
      };
    });
    return (g, y) => (w(), x("div", {
      class: p(d.value.root)
    }, [
      B("div", {
        class: p(d.value.inputWrapper),
        onClick: y[3] || (y[3] = //@ts-ignore
        (...u) => C(n) && C(n)(...u))
      }, [
        B("input", {
          ref_key: "inputRef",
          ref: s,
          type: "text",
          class: p(d.value.input),
          value: g.modelValue,
          placeholder: g.placeholder,
          disabled: g.disabled,
          readonly: !0,
          onFocus: y[0] || (y[0] = //@ts-ignore
          (...u) => C(k) && C(k)(...u)),
          onBlur: y[1] || (y[1] = //@ts-ignore
          (...u) => C(m) && C(m)(...u))
        }, null, 42, es),
        g.clearable && g.modelValue && !g.disabled && !g.readonly ? (w(), x("span", {
          key: 0,
          class: p(d.value.clearButton),
          onClick: y[2] || (y[2] = //@ts-ignore
          (...u) => C(b) && C(b)(...u))
        }, y[4] || (y[4] = [
          B("svg", {
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
            B("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }),
            B("line", {
              x1: "6",
              y1: "6",
              x2: "18",
              y2: "18"
            })
          ], -1)
        ]), 2)) : N("", !0)
      ], 2),
      C(r) ? (w(), x("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: o,
        class: p(d.value.dropdown)
      }, [
        B("div", {
          class: p(d.value.optionsList)
        }, [
          (w(!0), x(ae, null, ne(C(f), (u, c) => (w(), x("div", {
            key: c,
            class: p([
              d.value.option,
              g.modelValue === u ? d.value.optionSelected : "",
              g.disabled ? d.value.optionDisabled : ""
            ]),
            onClick: (v) => !g.disabled && C(i)(u)
          }, U(u), 11, ts))), 128)),
          C(f).length === 0 ? (w(), x("div", {
            key: 0,
            class: p(d.value.option),
            style: { cursor: "default" }
          }, " 无可用选项 ", 2)) : N("", !0)
        ], 2)
      ], 2)) : N("", !0)
    ], 2));
  }
}), as = Q(ls), rs = R({
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
}), os = R({
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
}), ns = R({
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
}), ss = R({
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
}), is = { key: 1 }, us = /* @__PURE__ */ J({
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
    const a = l, e = h(() => {
      var s, o;
      return a.unstyled ? ((s = a.pt) == null ? void 0 : s.root) || "" : rs({
        animation: a.animation,
        rounded: a.rounded,
        class: (o = a.pt) == null ? void 0 : o.root
      });
    }), t = h(() => {
      var s;
      return a.unstyled && ((s = a.pt) == null ? void 0 : s.content) || "";
    }), r = h(() => {
      const s = {};
      return a.width && (s.width = typeof a.width == "number" ? `${a.width}px` : a.width), a.height && (s.height = typeof a.height == "number" ? `${a.height}px` : a.height), s;
    });
    return (s, o) => s.loading ? (w(), x("div", {
      key: 0,
      class: p(e.value),
      style: de(r.value)
    }, [
      B("div", {
        class: p(t.value)
      }, [
        _(s.$slots, "skeleton")
      ], 2)
    ], 6)) : (w(), x("div", is, [
      _(s.$slots, "default")
    ]));
  }
}), ds = /* @__PURE__ */ J({
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
    const a = l, e = h(() => {
      var o, f;
      return a.unstyled ? ((o = a.pt) == null ? void 0 : o.root) || "" : os({
        rounded: a.rounded,
        class: (f = a.pt) == null ? void 0 : f.root
      });
    }), t = () => {
      var o, f;
      return a.unstyled ? ((o = a.pt) == null ? void 0 : o.line) || "" : ns({
        animation: a.animation,
        rounded: a.rounded,
        class: (f = a.pt) == null ? void 0 : f.line
      });
    }, r = (o) => typeof a.widths == "string" || typeof a.widths == "number" ? a.widths : Array.isArray(a.widths) && a.widths.length > 0 ? a.widths[o % a.widths.length] : "100%", s = (o) => {
      const f = r(o), n = {
        width: typeof f == "number" ? `${f}px` : f
      };
      return a.lineHeight && (n.height = typeof a.lineHeight == "number" ? `${a.lineHeight}px` : a.lineHeight), n;
    };
    return (o, f) => (w(), x("div", {
      class: p(e.value)
    }, [
      (w(!0), x(ae, null, ne(o.lines, (n) => (w(), x("div", {
        key: n,
        class: p(t()),
        style: de(s(n - 1))
      }, null, 6))), 128))
    ], 2));
  }
}), cs = /* @__PURE__ */ J({
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
    const a = l, e = h(() => {
      var t, r;
      return a.unstyled ? ((t = a.pt) == null ? void 0 : t.root) || "" : ss({
        size: a.size,
        circle: a.circle,
        animation: a.animation,
        class: (r = a.pt) == null ? void 0 : r.root
      });
    });
    return (t, r) => (w(), x("div", {
      class: p(e.value)
    }, null, 2));
  }
}), fs = Q(us), ps = Q(ds), bs = Q(cs);
function vs(l = {}) {
  const a = H(l.modelValue || ""), e = (s) => a.value === s, t = (s) => {
    var o;
    a.value = s, (o = l.onChange) == null || o.call(l, s);
  };
  return te(
    () => l.modelValue,
    (s) => {
      s !== void 0 && s !== a.value && (a.value = s);
    }
  ), {
    activeTab: a,
    isActive: e,
    activate: t,
    onKeydown: (s, o) => {
      const f = o.indexOf(a.value);
      if (f === -1 && o.length > 0) {
        t(o[0]);
        return;
      }
      if (s.key === "ArrowRight" || s.key === "ArrowDown") {
        const n = (f + 1) % o.length;
        t(o[n]), s.preventDefault();
      } else if (s.key === "ArrowLeft" || s.key === "ArrowUp") {
        const n = (f - 1 + o.length) % o.length;
        t(o[n]), s.preventDefault();
      }
    }
  };
}
const gs = R({
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
}), ms = R({
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
}), ys = R({
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
}), hs = R({
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
}), ws = {
  "update:modelValue": (l) => typeof l == "string" || typeof l == "number",
  change: (l) => typeof l == "string" || typeof l == "number"
}, xs = ["aria-disabled"], ks = ["aria-selected", "aria-disabled", "tabindex", "onClick"], Cs = /* @__PURE__ */ J({
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
  emits: ws,
  setup(l, { emit: a }) {
    const e = l, t = a, r = He(), s = h(() => {
      if (!r.default) return [];
      const c = r.default({}) || [], v = /* @__PURE__ */ new Set(), z = [];
      return c.filter((D) => D.type && (D.type.name === "TabItem" || typeof D.type == "object" && D.type.__name === "TabItem")).forEach((D) => {
        const M = D.props || {}, V = M.name;
        V && !v.has(V) ? (v.add(V), z.push({
          name: V,
          title: M.title || M.label || "",
          disabled: M.disabled || !1
        })) : console.warn(
          V ? `[Tabs] 发现重复的TabItem name: ${V}，只有第一个会被显示` : "[Tabs] TabItem必须提供name属性"
        );
      }), z;
    }), o = h(
      () => s.value.map((c) => c.name)
    ), { activeTab: f, isActive: n, activate: i, onKeydown: b } = vs({
      modelValue: e.modelValue,
      onChange: (c) => {
        t("update:modelValue", c), t("change", c);
      }
    });
    te(
      s,
      (c) => {
        c.length > 0 && !c.some((v) => n(v.name)) && i(c[0].name);
      },
      { immediate: !0 }
    );
    const k = (c, v) => {
      e.disabled || v || i(c);
    }, m = (c) => {
      b(c, o.value);
    }, d = h(() => {
      var c, v;
      return e.unstyled ? ((c = e.pt) == null ? void 0 : c.container) || "" : gs({
        placement: e.placement,
        fullWidth: e.fullWidth,
        disabled: e.disabled,
        class: (v = e.pt) == null ? void 0 : v.container
      });
    }), g = h(() => {
      var c, v;
      return e.unstyled ? ((c = e.pt) == null ? void 0 : c.nav) || "" : ms({
        variant: e.variant,
        placement: e.placement,
        fullWidth: e.fullWidth,
        size: e.size,
        class: (v = e.pt) == null ? void 0 : v.nav
      });
    }), y = (c, v) => {
      var z, D;
      return e.unstyled ? ((z = e.pt) == null ? void 0 : z.navItem) || "" : ys({
        variant: e.variant,
        active: n(c),
        disabled: e.disabled || v,
        size: e.size,
        fullWidth: e.fullWidth,
        class: (D = e.pt) == null ? void 0 : D.navItem
      });
    }, u = h(() => {
      var c, v;
      return e.unstyled ? ((c = e.pt) == null ? void 0 : c.content) || "" : hs({
        placement: e.placement,
        class: (v = e.pt) == null ? void 0 : v.content
      });
    });
    return Ve("activeTab", f), (c, v) => (w(), x("div", {
      class: p(d.value),
      "aria-disabled": c.disabled,
      role: "tablist",
      onKeydown: m
    }, [
      B("div", {
        class: p(g.value)
      }, [
        (w(!0), x(ae, null, ne(s.value, (z) => (w(), x("button", {
          key: z.name,
          class: p(y(z.name, z.disabled)),
          role: "tab",
          "aria-selected": C(n)(z.name),
          "aria-disabled": c.disabled || z.disabled,
          tabindex: C(n)(z.name) ? 0 : -1,
          onClick: (D) => k(z.name, z.disabled)
        }, U(z.title), 11, ks))), 128))
      ], 2),
      B("div", {
        class: p(u.value)
      }, [
        _(c.$slots, "default")
      ], 2)
    ], 42, xs));
  }
}), zs = /* @__PURE__ */ J({
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
    const a = l, e = Be("activeTab", H("")), t = h(() => e.value === a.name), r = h(() => {
      var s;
      return a.unstyled && ((s = a.pt) == null ? void 0 : s.root) || "";
    });
    return (s, o) => We((w(), x("div", {
      class: p(r.value)
    }, [
      _(s.$slots, "default")
    ], 2)), [
      [ct, t.value]
    ]);
  }
}), Ss = Q(Cs), Bs = Q(zs), Vs = R({
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
}), $s = R({
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
}), Is = R({
  base: "text-lg font-medium"
}), Ds = R({
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
}), Ms = R({
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
}), Ts = {
  "update:collapsed": (l) => typeof l == "boolean",
  collapse: (l) => typeof l == "boolean"
}, Rs = /* @__PURE__ */ J({
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
  emits: Ts,
  setup(l, { emit: a }) {
    const e = l, t = a, r = H(e.defaultCollapsed);
    te(
      () => e.defaultCollapsed,
      (k) => {
        r.value = k;
      }
    );
    const s = () => {
      e.collapsible && (r.value = !r.value, t("update:collapsed", r.value), t("collapse", r.value));
    }, o = h(() => {
      var k, m;
      return e.unstyled ? ((k = e.pt) == null ? void 0 : k.root) || "" : Vs({
        variant: e.variant,
        padding: e.padding,
        radius: e.radius,
        bordered: e.bordered,
        class: (m = e.pt) == null ? void 0 : m.root
      });
    }), f = h(() => {
      var k, m;
      return e.unstyled ? ((k = e.pt) == null ? void 0 : k.header) || "" : $s({
        padding: e.padding,
        collapsible: e.collapsible,
        class: (m = e.pt) == null ? void 0 : m.header
      });
    }), n = h(() => {
      var k, m;
      return e.unstyled ? ((k = e.pt) == null ? void 0 : k.title) || "" : Is({
        class: (m = e.pt) == null ? void 0 : m.title
      });
    }), i = h(() => {
      var k, m;
      return e.unstyled ? ((k = e.pt) == null ? void 0 : k.content) || "" : Ds({
        padding: e.padding,
        collapsed: r.value,
        class: (m = e.pt) == null ? void 0 : m.content
      });
    }), b = h(() => {
      var k, m;
      return e.unstyled ? ((k = e.pt) == null ? void 0 : k.icon) || "" : Ms({
        collapsed: r.value,
        class: (m = e.pt) == null ? void 0 : m.icon
      });
    });
    return (k, m) => (w(), x("div", {
      class: p(o.value)
    }, [
      B("div", {
        class: p(f.value),
        onClick: s
      }, [
        B("div", {
          class: p(n.value)
        }, [
          _(k.$slots, "title", {}, () => [
            ce(U(k.title), 1)
          ])
        ], 2),
        k.collapsible ? (w(), x("div", {
          key: 0,
          class: p(b.value)
        }, [
          _(k.$slots, "icon", {}, () => [
            m[0] || (m[0] = B("svg", {
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
              B("polyline", { points: "6 9 12 15 18 9" })
            ], -1))
          ])
        ], 2)) : N("", !0)
      ], 2),
      B("div", {
        class: p(i.value)
      }, [
        _(k.$slots, "default")
      ], 2)
    ], 2));
  }
}), Es = Q(Rs), Ls = R({
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
}), As = R({
  base: "flex items-center gap-1"
}), Os = R({
  base: ""
}), Ps = R({
  base: "flex items-center justify-center transition-colors focus:outline-none",
  variants: {
    variant: {
      default: "bg-white border border-gray-300 hover:bg-gray-100",
      outline: "bg-transparent border border-gray-300 hover:bg-gray-100",
      text: "bg-transparent hover:bg-gray-100"
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
      true: "bg-blue-500 text-white border-blue-500 hover:bg-blue-600",
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
}), js = R({
  base: "flex items-center justify-center",
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
}), Fs = R({
  base: "flex items-center ml-4"
}), Ws = R({
  base: "w-12 h-full text-center border border-gray-300 rounded-md mx-1 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500",
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
}), Hs = R({
  base: "ml-2 px-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none",
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
}), Ns = {
  "update:modelValue": (l) => typeof l == "number",
  change: (l) => typeof l == "number"
}, Gs = ["disabled"], _s = ["disabled"], Ks = ["onClick", "disabled", "aria-current"], Ys = ["disabled"], Us = ["disabled"], Xs = ["max", "disabled"], qs = ["disabled"], Zs = /* @__PURE__ */ J({
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
  emits: Ns,
  setup(l, { emit: a }) {
    const e = l, t = a, r = h({
      get: () => e.modelValue,
      set: (v) => {
        t("update:modelValue", v), t("change", v);
      }
    }), s = H(""), o = h(() => e.disabled), f = h(() => {
      const v = e.totalPages, z = e.modelValue, D = e.visiblePageCount;
      if (v <= D)
        return Array.from({ length: v }, (O, A) => A + 1);
      const M = Math.floor(D / 2);
      let V = z - M, T = z + M;
      V < 1 && (T = Math.min(v, T + (1 - V)), V = 1), T > v && (V = Math.max(1, V - (T - v)), T = v);
      const $ = [];
      V > 1 && ($.push(1), V > 2 && $.push("..."));
      for (let O = V; O <= T; O++)
        $.push(O);
      return T < v && (T < v - 1 && $.push("..."), $.push(v)), $;
    }), n = (v) => {
      v >= 1 && v <= e.totalPages && v !== r.value && (r.value = v);
    }, i = () => {
      const v = Number(s.value);
      !isNaN(v) && v >= 1 && v <= e.totalPages && n(v), s.value = "";
    }, b = h(() => {
      var v, z;
      return e.unstyled ? ((v = e.pt) == null ? void 0 : v.root) || "" : Ls({
        disabled: e.disabled,
        class: (z = e.pt) == null ? void 0 : z.root
      });
    }), k = h(() => {
      var v, z;
      return e.unstyled ? ((v = e.pt) == null ? void 0 : v.list) || "" : As({
        class: (z = e.pt) == null ? void 0 : z.list
      });
    }), m = h(() => {
      var v, z;
      return e.unstyled ? ((v = e.pt) == null ? void 0 : v.item) || "" : Os({
        class: (z = e.pt) == null ? void 0 : z.item
      });
    }), d = (v, z) => {
      var D, M, V, T, $, O, A, L, P, F, S, E;
      return e.unstyled ? z === "first" ? ((D = e.pt) == null ? void 0 : D.firstButton) || "" : z === "prev" ? ((M = e.pt) == null ? void 0 : M.prevButton) || "" : z === "next" ? ((V = e.pt) == null ? void 0 : V.nextButton) || "" : z === "last" ? ((T = e.pt) == null ? void 0 : T.lastButton) || "" : v === r.value ? (($ = e.pt) == null ? void 0 : $.activeButton) || "" : ((O = e.pt) == null ? void 0 : O.button) || "" : Ps({
        variant: e.variant,
        size: e.size,
        shape: e.shape,
        active: v === r.value,
        disabled: e.disabled,
        class: v === r.value ? (A = e.pt) == null ? void 0 : A.activeButton : z === "first" ? (L = e.pt) == null ? void 0 : L.firstButton : z === "prev" ? (P = e.pt) == null ? void 0 : P.prevButton : z === "next" ? (F = e.pt) == null ? void 0 : F.nextButton : z === "last" ? (S = e.pt) == null ? void 0 : S.lastButton : (E = e.pt) == null ? void 0 : E.button
      });
    }, g = h(() => {
      var v, z;
      return e.unstyled ? ((v = e.pt) == null ? void 0 : v.ellipsis) || "" : js({
        size: e.size,
        class: (z = e.pt) == null ? void 0 : z.ellipsis
      });
    }), y = h(() => {
      var v, z;
      return e.unstyled ? ((v = e.pt) == null ? void 0 : v.jumper) || "" : Fs({
        class: (z = e.pt) == null ? void 0 : z.jumper
      });
    }), u = h(() => {
      var v, z;
      return e.unstyled ? ((v = e.pt) == null ? void 0 : v.jumperInput) || "" : Ws({
        size: e.size,
        class: (z = e.pt) == null ? void 0 : z.jumperInput
      });
    }), c = h(() => {
      var v, z;
      return e.unstyled ? ((v = e.pt) == null ? void 0 : v.jumperButton) || "" : Hs({
        size: e.size,
        class: (z = e.pt) == null ? void 0 : z.jumperButton
      });
    });
    return (v, z) => (w(), x("nav", {
      class: p(b.value),
      "aria-label": "分页导航"
    }, [
      B("ul", {
        class: p(k.value)
      }, [
        v.showEndButtons ? (w(), x("li", {
          key: 0,
          class: p(m.value)
        }, [
          B("button", {
            class: p(d(1, "first")),
            onClick: z[0] || (z[0] = (D) => n(1)),
            disabled: o.value || r.value === 1,
            "aria-label": "首页"
          }, [
            _(v.$slots, "first-button", {}, () => [
              z[5] || (z[5] = B("svg", {
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
                B("polyline", { points: "11 17 6 12 11 7" }),
                B("polyline", { points: "18 17 13 12 18 7" })
              ], -1))
            ])
          ], 10, Gs)
        ], 2)) : N("", !0),
        v.showPrevNextButtons ? (w(), x("li", {
          key: 1,
          class: p(m.value)
        }, [
          B("button", {
            class: p(d(r.value - 1, "prev")),
            onClick: z[1] || (z[1] = (D) => n(r.value - 1)),
            disabled: o.value || r.value === 1,
            "aria-label": "上一页"
          }, [
            _(v.$slots, "prev-button", {}, () => [
              z[6] || (z[6] = B("svg", {
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
                B("polyline", { points: "15 18 9 12 15 6" })
              ], -1))
            ])
          ], 10, _s)
        ], 2)) : N("", !0),
        (w(!0), x(ae, null, ne(f.value, (D, M) => (w(), x(ae, { key: M }, [
          D !== "..." ? (w(), x("li", {
            key: 0,
            class: p(m.value)
          }, [
            B("button", {
              class: p(d(Number(D))),
              onClick: (V) => n(Number(D)),
              disabled: o.value,
              "aria-current": r.value === D ? "page" : void 0
            }, U(D), 11, Ks)
          ], 2)) : (w(), x("li", {
            key: 1,
            class: p(m.value)
          }, [
            B("span", {
              class: p(g.value)
            }, "...", 2)
          ], 2))
        ], 64))), 128)),
        v.showPrevNextButtons ? (w(), x("li", {
          key: 2,
          class: p(m.value)
        }, [
          B("button", {
            class: p(d(r.value + 1, "next")),
            onClick: z[2] || (z[2] = (D) => n(r.value + 1)),
            disabled: o.value || r.value === v.totalPages,
            "aria-label": "下一页"
          }, [
            _(v.$slots, "next-button", {}, () => [
              z[7] || (z[7] = B("svg", {
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
                B("polyline", { points: "9 18 15 12 9 6" })
              ], -1))
            ])
          ], 10, Ys)
        ], 2)) : N("", !0),
        v.showEndButtons ? (w(), x("li", {
          key: 3,
          class: p(m.value)
        }, [
          B("button", {
            class: p(d(v.totalPages, "last")),
            onClick: z[3] || (z[3] = (D) => n(v.totalPages)),
            disabled: o.value || r.value === v.totalPages,
            "aria-label": "尾页"
          }, [
            _(v.$slots, "last-button", {}, () => [
              z[8] || (z[8] = B("svg", {
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
                B("polyline", { points: "13 17 18 12 13 7" }),
                B("polyline", { points: "6 17 11 12 6 7" })
              ], -1))
            ])
          ], 10, Us)
        ], 2)) : N("", !0),
        v.showJumper ? (w(), x("li", {
          key: 4,
          class: p(y.value)
        }, [
          z[9] || (z[9] = B("span", null, "前往", -1)),
          We(B("input", {
            class: p(u.value),
            type: "number",
            "onUpdate:modelValue": z[4] || (z[4] = (D) => s.value = D),
            min: "1",
            max: v.totalPages,
            disabled: o.value,
            onKeyup: ke(i, ["enter"])
          }, null, 42, Xs), [
            [jt, s.value]
          ]),
          z[10] || (z[10] = B("span", null, "页", -1)),
          B("button", {
            class: p(c.value),
            onClick: i,
            disabled: o.value
          }, " 跳转 ", 10, qs)
        ], 2)) : N("", !0)
      ], 2)
    ], 2));
  }
}), Js = Q(Zs), Qs = R({
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
}), ei = R({
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
}), ti = R({
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
}), li = R({
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
}), ai = {
  /**
   * 进度变化时触发
   */
  "update:value": (l) => typeof l == "number"
}, ri = (l) => {
  const a = h(() => {
    if (l.indeterminate)
      return 0;
    const r = Math.max(0, Math.min(l.value || 0, l.max || 100)), s = Math.max(1, l.max || 100);
    return Math.round(r / s * 100);
  }), e = h(() => `${a.value}%`), t = h(() => {
    if (!l.indeterminate)
      return `width: ${a.value}%`;
  });
  return {
    percentage: a,
    formattedPercentage: e,
    progressWidth: t
  };
}, oi = ["aria-valuenow"], ni = /* @__PURE__ */ J({
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
  emits: ai,
  setup(l) {
    const a = l, { percentage: e, formattedPercentage: t, progressWidth: r } = ri(a), s = h(() => {
      var i, b;
      return a.unstyled ? ((i = a.pt) == null ? void 0 : i.root) || "" : Qs({
        unstyled: a.unstyled,
        class: (b = a.pt) == null ? void 0 : b.root
      });
    }), o = h(() => {
      var i, b;
      return a.unstyled ? ((i = a.pt) == null ? void 0 : i.container) || "" : ei({
        size: a.size,
        shape: a.shape,
        unstyled: a.unstyled,
        class: (b = a.pt) == null ? void 0 : b.container
      });
    }), f = h(() => {
      var i, b;
      return a.unstyled ? ((i = a.pt) == null ? void 0 : i.bar) || "" : ti({
        variant: a.variant,
        striped: a.striped,
        animated: a.animated,
        indeterminate: a.indeterminate,
        unstyled: a.unstyled,
        class: (b = a.pt) == null ? void 0 : b.bar
      });
    }), n = h(() => {
      var i, b;
      return a.unstyled ? ((i = a.pt) == null ? void 0 : i.text) || "" : li({
        variant: a.variant,
        unstyled: a.unstyled,
        class: (b = a.pt) == null ? void 0 : b.text
      });
    });
    return (i, b) => (w(), x("div", {
      class: p(s.value)
    }, [
      B("div", {
        class: p(o.value)
      }, [
        B("div", {
          class: p(f.value),
          style: de(C(r)),
          role: "progressbar",
          "aria-valuenow": i.indeterminate ? void 0 : C(e),
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        }, null, 14, oi)
      ], 2),
      i.showText ? (w(), x("div", {
        key: 0,
        class: p(n.value)
      }, [
        _(i.$slots, "text", {}, () => [
          ce(U(C(t)), 1)
        ])
      ], 2)) : N("", !0)
    ], 2));
  }
}), si = Q(ni), ii = R({
  base: "flex",
  variants: {},
  defaultVariants: {}
}), ui = R({
  base: "flex flex-wrap items-center space-x-1 md:space-x-2",
  variants: {},
  defaultVariants: {}
}), di = R({
  base: "mx-1 text-gray-400",
  variants: {},
  defaultVariants: {}
}), ci = R({
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
}), fi = R({
  base: "inline-flex items-center",
  variants: {},
  defaultVariants: {}
}), rl = Symbol("breadcrumb"), pi = (l) => {
  const a = H(null);
  return Ve(rl, {
    separator: l.separator || "/",
    separatorIcon: l.separatorIcon || ""
  }), {
    _ref: a
  };
}, bi = () => {
  const l = Be(
    rl,
    {
      separator: "/",
      separatorIcon: ""
    }
  );
  return {
    _ref: H(null),
    breadcrumbContext: l
  };
}, vi = /* @__PURE__ */ J({
  name: "VBreadcrumb",
  __name: "breadcrumb",
  props: {
    separator: { default: "/" },
    separatorIcon: { default: "" },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  setup(l, { expose: a }) {
    const e = l, { _ref: t } = pi(e), r = h(() => {
      var o, f;
      return e.unstyled ? ((o = e.pt) == null ? void 0 : o.root) || "" : ii({
        class: (f = e.pt) == null ? void 0 : f.root
      });
    }), s = h(() => {
      var o, f;
      return e.unstyled ? ((o = e.pt) == null ? void 0 : o.list) || "" : ui({
        class: (f = e.pt) == null ? void 0 : f.list
      });
    });
    return a({
      _ref: t
    }), (o, f) => (w(), x("nav", {
      class: p(r.value),
      ref_key: "_ref",
      ref: t
    }, [
      B("ol", {
        class: p(s.value)
      }, [
        _(o.$slots, "default")
      ], 2)
    ], 2));
  }
}), gi = {
  click: (l) => l instanceof MouseEvent
}, mi = ["href"], yi = /* @__PURE__ */ J({
  name: "VBreadcrumbItem",
  __name: "breadcrumb-item",
  props: {
    href: { default: "" },
    disabled: { type: Boolean, default: !1 },
    active: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: gi,
  setup(l, { expose: a, emit: e }) {
    const t = e, r = l, { _ref: s, breadcrumbContext: o } = bi(), f = H(!1), n = () => {
      if (s.value) {
        const g = s.value.parentElement;
        g && (f.value = g.firstElementChild === s.value);
      }
    };
    ve(() => {
      n();
    });
    const i = (g) => {
      if (r.disabled) {
        g.preventDefault();
        return;
      }
      t("click", g);
    }, b = h(() => {
      var g, y;
      return r.unstyled ? ((g = r.pt) == null ? void 0 : g.root) || "" : ci({
        disabled: r.disabled,
        active: r.active,
        class: (y = r.pt) == null ? void 0 : y.root
      });
    }), k = h(() => {
      var g;
      return r.unstyled ? ((g = r.pt) == null ? void 0 : g.separator) || "" : di();
    }), m = h(() => {
      var g, y;
      return r.unstyled ? ((g = r.pt) == null ? void 0 : g.link) || "" : fi({
        class: (y = r.pt) == null ? void 0 : y.link
      });
    }), d = h(() => {
      var g;
      return r.unstyled && ((g = r.pt) == null ? void 0 : g.content) || "";
    });
    return a({
      _ref: s
    }), (g, y) => (w(), x("li", {
      class: p(b.value),
      ref_key: "_ref",
      ref: s
    }, [
      g.$slots.separator ? _(g.$slots, "separator", { key: 0 }) : C(o).separatorIcon ? (w(), x("span", {
        key: 1,
        class: p(k.value)
      }, [
        (w(), Se(qe(C(o).separatorIcon)))
      ], 2)) : f.value ? N("", !0) : (w(), x("span", {
        key: 2,
        class: p(k.value)
      }, U(C(o).separator), 3)),
      g.href && !g.disabled && !g.active ? (w(), x("a", {
        key: 3,
        href: g.href,
        class: p(m.value),
        onClick: i
      }, [
        _(g.$slots, "default")
      ], 10, mi)) : (w(), x("span", {
        key: 4,
        class: p(d.value)
      }, [
        _(g.$slots, "default")
      ], 2))
    ], 2));
  }
}), ol = Q(vi, {
  BreadcrumbItem: yi
}), hi = ol.BreadcrumbItem, nl = R({
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
}), wi = {
  "update:panels": (l) => Array.isArray(l),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  "resize-start": (l) => !0,
  resize: (l) => Array.isArray(l),
  "resize-end": (l) => Array.isArray(l),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  collapse: (l, a) => !0,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  expand: (l, a) => !0
}, xi = {
  "update:size": (l) => typeof l == "string",
  "update:collapsed": (l) => typeof l == "boolean"
}, ki = (l, a) => {
  const e = H(null), t = H([]), r = H([]), s = H(!1), o = H(0), f = H(-1), n = ul(l.panels || []), i = h(() => l.direction !== "vertical"), b = (V, T) => {
    t.value[T] = V;
  }, k = (V, T) => {
    r.value[T] = V;
  }, m = () => {
    if (!e.value || t.value.length === 0) return;
    const V = i.value ? e.value.clientWidth : e.value.clientHeight;
    if (!l.panels || l.panels.length === 0) {
      const T = `${100 / t.value.length}%`;
      t.value.forEach(($, O) => {
        n[O] = n[O] || {}, n[O].size = T, n[O].resizable = n[O].resizable !== !1;
      });
      return;
    }
    l.panels.forEach((T, $) => {
      if ($ < t.value.length)
        if (n[$] = { ...T }, T.size && T.size.endsWith("%")) {
          const O = parseFloat(T.size) / 100, A = Math.floor(V * O);
          t.value[$].style[i.value ? "width" : "height"] = `${A}px`;
        } else T.size && (t.value[$].style[i.value ? "width" : "height"] = T.size);
    }), a("update:panels", [...n]);
  }, d = (V, T) => {
    var P, F;
    if (!l.resizable) return;
    const $ = T, O = T + 1, A = ((P = n[$]) == null ? void 0 : P.resizable) !== !1, L = ((F = n[O]) == null ? void 0 : F.resizable) !== !1;
    if (!(!A && !L)) {
      if (V.preventDefault(), s.value = !0, f.value = T, V instanceof MouseEvent)
        o.value = i.value ? V.clientX : V.clientY;
      else {
        const S = V.touches[0];
        o.value = i.value ? S.clientX : S.clientY;
      }
      window.addEventListener("mousemove", g), window.addEventListener("mouseup", c), window.addEventListener("touchmove", y), window.addEventListener("touchend", v), a("resize-start", V);
    }
  }, g = (V) => {
    s.value && u(i.value ? V.clientX : V.clientY);
  }, y = (V) => {
    if (!s.value) return;
    const T = V.touches[0];
    u(i.value ? T.clientX : T.clientY);
  }, u = (V) => {
    var oe, W, Z, le;
    if (!s.value || !e.value) return;
    const T = f.value, $ = T, O = T + 1;
    if ($ < 0 || O >= t.value.length || !t.value[$] || !t.value[O])
      return;
    const A = t.value[$], L = t.value[O], P = V - o.value;
    if (P === 0) return;
    const F = i.value ? A.offsetWidth : A.offsetHeight, S = i.value ? L.offsetWidth : L.offsetHeight, E = (oe = n[$]) != null && oe.minSize ? M(
      n[$].minSize,
      e.value,
      i.value
    ) : 0, I = (W = n[O]) != null && W.minSize ? M(
      n[O].minSize,
      e.value,
      i.value
    ) : 0, G = (Z = n[$]) != null && Z.maxSize ? M(
      n[$].maxSize,
      e.value,
      i.value
    ) : 1 / 0, j = (le = n[O]) != null && le.maxSize ? M(
      n[O].maxSize,
      e.value,
      i.value
    ) : 1 / 0;
    let K = F + P, Y = S - P;
    K < E ? (K = E, Y = F + S - E) : K > G && (K = G, Y = F + S - G), Y < I ? (Y = I, K = F + S - I) : Y > j && (Y = j, K = F + S - j), i.value ? (A.style.width = `${K}px`, L.style.width = `${Y}px`) : (A.style.height = `${K}px`, L.style.height = `${Y}px`), n[$] = {
      ...n[$],
      size: `${K}px`
    }, n[O] = {
      ...n[O],
      size: `${Y}px`
    }, o.value = V, a("resize", [...n]);
  }, c = () => {
    z();
  }, v = () => {
    z();
  }, z = () => {
    s.value && (s.value = !1, f.value = -1, window.removeEventListener("mousemove", g), window.removeEventListener("mouseup", c), window.removeEventListener("touchmove", y), window.removeEventListener("touchend", v), a("resize-end", [...n]), a("update:panels", [...n]));
  }, D = (V) => {
    if (V < 0 || V >= t.value.length) return;
    const T = t.value[V], $ = n[V];
    if (!$.collapsible) return;
    if (!$.collapsed)
      $._savedSize = $.size, i.value ? T.style.width = "0" : T.style.height = "0", $.size = "0", $.collapsed = !0, a("collapse", V, !0);
    else {
      const A = $._savedSize || "1fr";
      i.value ? T.style.width = A : T.style.height = A, $.size = A, $.collapsed = !1, a("expand", V, !1);
    }
    a("update:panels", [...n]);
  }, M = (V, T, $) => {
    if (V.endsWith("px"))
      return parseFloat(V);
    if (V.endsWith("%")) {
      const O = $ ? T.clientWidth : T.clientHeight;
      return parseFloat(V) / 100 * O;
    } else if (V.endsWith("rem")) {
      const O = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      return parseFloat(V) * O;
    } else if (V.endsWith("em")) {
      const O = parseFloat(getComputedStyle(T).fontSize);
      return parseFloat(V) * O;
    } else {
      if (V.endsWith("vh"))
        return parseFloat(V) / 100 * window.innerHeight;
      if (V.endsWith("vw"))
        return parseFloat(V) / 100 * window.innerWidth;
    }
    return parseFloat(V) || 0;
  };
  return ve(() => {
    m(), window.addEventListener("resize", m);
  }), De(() => {
    window.removeEventListener("resize", m), window.removeEventListener("mousemove", g), window.removeEventListener("mouseup", c), window.removeEventListener("touchmove", y), window.removeEventListener("touchend", v);
  }), {
    rootRef: e,
    panelRefs: t,
    gutterRefs: r,
    isResizing: s,
    panelSizes: n,
    isHorizontal: i,
    registerPanel: b,
    registerGutter: k,
    onGutterMouseDown: d,
    toggleCollapse: D,
    initPanelSizes: m
  };
}, Ci = ["aria-orientation"], zi = ["onMousedown", "onTouchstart", "aria-label", "aria-controls", "onKeydown"], Si = /* @__PURE__ */ J({
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
  emits: wi,
  setup(l, { expose: a, emit: e }) {
    const t = l, r = e, {
      rootRef: s,
      panelSizes: o,
      isHorizontal: f,
      registerPanel: n,
      registerGutter: i,
      onGutterMouseDown: b,
      toggleCollapse: k,
      initPanelSizes: m
    } = ki(t, r), d = h(() => {
      var D;
      const c = He(), v = Object.keys(c).filter((M) => M.startsWith("panel-")).length / 2, z = ((D = t.panels) == null ? void 0 : D.length) || 0;
      return Math.max(v, z, 2);
    }), g = (c) => {
      const v = o[c] || {}, z = f.value ? "width" : "height", D = {};
      return v.size && (D[z] = v.size), v.collapsed && (D[z] = "0", D.overflow = "hidden"), D;
    }, y = (c, v, z) => {
      if (!t.resizable) return;
      c.preventDefault();
      const D = c.shiftKey ? 10 : 1, M = o[v], V = o[v + 1];
      if (!M || !V) return;
      const T = parseFloat(M.size || "0"), $ = parseFloat(V.size || "0"), O = D * z;
      M.size = `${T + O}px`, V.size = `${$ - O}px`, m();
    }, u = h(() => {
      var T, $, O, A, L, P;
      if (t.unstyled)
        return {
          root: ((T = t.pt) == null ? void 0 : T.root) || "",
          wrapper: (($ = t.pt) == null ? void 0 : $.wrapper) || "",
          panel: ((O = t.pt) == null ? void 0 : O.panel) || "",
          gutter: ((A = t.pt) == null ? void 0 : A.gutter) || "",
          gutterHandle: ((L = t.pt) == null ? void 0 : L.gutterHandle) || "",
          gutterIcon: ((P = t.pt) == null ? void 0 : P.gutterIcon) || ""
        };
      const { root: c, wrapper: v, panel: z, gutter: D, gutterHandle: M, gutterIcon: V } = nl({
        direction: t.direction,
        size: t.size,
        solid: t.solid,
        dotted: t.dotted,
        dashed: t.dashed,
        disabled: !t.resizable
      });
      return {
        root: c(),
        wrapper: v(),
        panel: z(),
        gutter: D(),
        gutterHandle: M(),
        gutterIcon: V()
      };
    });
    return a({
      toggleCollapse: k,
      initPanelSizes: m
    }), Ve("splitter", {
      registerPanel: n,
      direction: t.direction
    }), (c, v) => (w(), x("div", {
      ref_key: "rootRef",
      ref: s,
      class: p(u.value.root),
      role: "separator",
      "aria-orientation": t.direction === "vertical" ? "horizontal" : "vertical"
    }, [
      (w(!0), x(ae, null, ne(d.value, (z, D) => (w(), x(ae, { key: D }, [
        D < d.value ? (w(), x("div", {
          key: 0,
          ref_for: !0,
          ref: (M) => M && C(n)(M, D),
          class: p(u.value.wrapper),
          style: de(g(D))
        }, [
          _(c.$slots, `panel-${D}`, {}, () => [
            B("div", {
              class: p(u.value.panel)
            }, [
              _(c.$slots, `panel-${D}-content`, {}, () => [
                ce("Panel " + U(D + 1), 1)
              ])
            ], 2)
          ])
        ], 6)) : N("", !0),
        D < d.value - 1 ? (w(), x("div", {
          key: 1,
          ref_for: !0,
          ref: (M) => M && C(i)(M, D),
          class: p(u.value.gutter),
          onMousedown: (M) => C(b)(M, D),
          onTouchstart: (M) => C(b)(M, D),
          tabindex: "0",
          "aria-label": `调整${C(f) ? "宽度" : "高度"}`,
          "aria-controls": `panel-${D},panel-${D + 1}`,
          onKeydown: [
            ke((M) => y(M, D, -1), ["left"]),
            ke((M) => y(M, D, 1), ["right"]),
            ke((M) => y(M, D, -1), ["up"]),
            ke((M) => y(M, D, 1), ["down"])
          ]
        }, [
          _(c.$slots, `gutter-${D}`, {}, () => [
            B("div", {
              class: p(u.value.gutterHandle)
            }, [
              _(c.$slots, `gutter-${D}-handle`, {}, () => [
                C(f) ? (w(), x("svg", {
                  key: 0,
                  class: p(u.value.gutterIcon),
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round"
                }, v[0] || (v[0] = [
                  B("line", {
                    x1: "12",
                    y1: "5",
                    x2: "12",
                    y2: "19"
                  }, null, -1),
                  B("line", {
                    x1: "8",
                    y1: "9",
                    x2: "8",
                    y2: "15"
                  }, null, -1),
                  B("line", {
                    x1: "16",
                    y1: "9",
                    x2: "16",
                    y2: "15"
                  }, null, -1)
                ]), 2)) : (w(), x("svg", {
                  key: 1,
                  class: p(u.value.gutterIcon),
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round"
                }, v[1] || (v[1] = [
                  B("line", {
                    x1: "5",
                    y1: "12",
                    x2: "19",
                    y2: "12"
                  }, null, -1),
                  B("line", {
                    x1: "9",
                    y1: "8",
                    x2: "15",
                    y2: "8"
                  }, null, -1),
                  B("line", {
                    x1: "9",
                    y1: "16",
                    x2: "15",
                    y2: "16"
                  }, null, -1)
                ]), 2))
              ])
            ], 2)
          ])
        ], 42, zi)) : N("", !0)
      ], 64))), 128))
    ], 10, Ci));
  }
}), Bi = /* @__PURE__ */ J({
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
  emits: xi,
  setup(l, { emit: a }) {
    const e = l, t = a, r = H(null), s = Be("splitter", {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      registerPanel: (n, i) => {
      },
      direction: "horizontal",
      index: -1
    });
    te(
      () => e.size,
      (n) => {
        n !== void 0 && r.value && (s.direction === "horizontal" ? r.value.style.width = n : r.value.style.height = n);
      }
    ), te(
      () => e.collapsed,
      (n) => {
        t("update:collapsed", n);
      }
    ), ve(() => {
      r.value && s.index >= 0 && s.registerPanel(r.value, s.index);
    });
    const o = h(() => {
      var n;
      return e.unstyled ? ((n = e.pt) == null ? void 0 : n.root) || "" : nl().panel();
    }), f = h(() => {
      var n;
      return e.unstyled ? ((n = e.pt) == null ? void 0 : n.content) || "" : "h-full w-full";
    });
    return (n, i) => (w(), x("div", {
      ref_key: "panelRef",
      ref: r,
      class: p(o.value)
    }, [
      B("div", {
        class: p(f.value)
      }, [
        _(n.$slots, "default")
      ], 2)
    ], 2));
  }
}), Vi = Q(Si), $i = Q(Bi), Ii = (l, a) => {
  var g, y;
  const e = H(((g = l.modelValue) == null ? void 0 : g[0]) || null), t = H(((y = l.modelValue) == null ? void 0 : y[1]) || null), r = H((e.value || /* @__PURE__ */ new Date()).getMonth()), s = H((e.value || /* @__PURE__ */ new Date()).getFullYear()), o = H("start"), f = h(() => {
    const u = l.locale || "default", c = l.firstDayOfWeek || 0, v = [];
    for (let z = 0; z < 7; z++) {
      const D = (z + c) % 7;
      v.push(
        new Intl.DateTimeFormat(u, { weekday: "short" }).format(
          new Date(2021, 0, D + 3)
          // 2021-01-03 is a Sunday
        )
      );
    }
    return v;
  }), n = h(() => {
    const u = s.value, c = r.value, v = new Date(u, c, 1).getDay(), z = new Date(u, c + 1, 0).getDate(), D = l.firstDayOfWeek || 0, M = [], V = new Date(u, c, 0).getDate(), T = (v - D + 7) % 7;
    for (let A = V - T + 1; A <= V; A++)
      M.push({
        date: new Date(u, c - 1, A),
        day: A,
        isCurrentMonth: !1,
        isToday: !1,
        isSelected: !1,
        isRangeStart: !1,
        isRangeEnd: !1,
        isInRange: !1,
        isDisabled: !1
      });
    const $ = /* @__PURE__ */ new Date();
    for (let A = 1; A <= z; A++) {
      const L = new Date(u, c, A), P = $.getDate() === A && $.getMonth() === c && $.getFullYear() === u, F = e.value && L.getDate() === e.value.getDate() && L.getMonth() === e.value.getMonth() && L.getFullYear() === e.value.getFullYear(), S = t.value && L.getDate() === t.value.getDate() && L.getMonth() === t.value.getMonth() && L.getFullYear() === t.value.getFullYear(), E = e.value && t.value && L > e.value && L < t.value, I = F || S, G = l.disabled || l.min && L < l.min || l.max && L > l.max;
      M.push({
        date: L,
        day: A,
        isCurrentMonth: !0,
        isToday: P,
        isSelected: I,
        isRangeStart: F,
        isRangeEnd: S,
        isInRange: E,
        isDisabled: G
      });
    }
    const O = 42 - M.length;
    for (let A = 1; A <= O; A++) {
      const L = new Date(u, c + 1, A), P = e.value && L.getDate() === e.value.getDate() && L.getMonth() === e.value.getMonth() && L.getFullYear() === e.value.getFullYear(), F = t.value && L.getDate() === t.value.getDate() && L.getMonth() === t.value.getMonth() && L.getFullYear() === t.value.getFullYear(), S = e.value && t.value && L > e.value && L < t.value, E = P || F;
      M.push({
        date: L,
        day: A,
        isCurrentMonth: !1,
        isToday: !1,
        isSelected: E,
        isRangeStart: P,
        isRangeEnd: F,
        isInRange: S,
        isDisabled: !1
      });
    }
    return M;
  }), i = h(() => {
    const u = l.locale || "default";
    return new Intl.DateTimeFormat(u, { month: "long" }).format(
      new Date(s.value, r.value)
    );
  }), b = () => {
    r.value === 0 ? (r.value = 11, s.value--) : r.value--;
  }, k = () => {
    r.value === 11 ? (r.value = 0, s.value++) : r.value++;
  }, m = (u) => {
    l.disabled || l.readonly || l.min && u < l.min || l.max && u > l.max || (o.value === "start" ? (e.value = u, t.value = null, o.value = "end") : (e.value && u < e.value ? (t.value = e.value, e.value = u) : t.value = u, o.value = "start"), a("update:modelValue", [e.value, t.value]), a("change", [e.value, t.value]));
  }, d = () => {
    e.value = null, t.value = null, o.value = "start", a("update:modelValue", [null, null]), a("change", [null, null]);
  };
  return te(
    () => l.modelValue,
    (u) => {
      u && (e.value = u[0], t.value = u[1], e.value && (r.value = e.value.getMonth(), s.value = e.value.getFullYear()), o.value = t.value ? "start" : "end");
    }
  ), {
    startDate: e,
    endDate: t,
    currentMonth: r,
    currentYear: s,
    selectionMode: o,
    weekdays: f,
    daysInMonth: n,
    monthName: i,
    prevMonth: b,
    nextMonth: k,
    selectDate: m,
    resetSelection: d
  };
}, Di = R({
  base: "w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), Mi = R({
  base: "flex items-center justify-between mb-4"
}), Ti = R({
  base: "text-lg font-medium"
}), Ri = R({
  base: "flex items-center space-x-1"
}), Ei = R({
  base: "p-1 rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
}), Li = R({
  base: "grid grid-cols-7 mb-1"
}), Ai = R({
  base: "text-center text-sm font-medium text-gray-500 py-2"
}), Oi = R({
  base: "grid grid-cols-7 gap-1"
}), he = R({
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
}), Pi = {
  "update:modelValue": (l) => Array.isArray(l) && (l[0] === null || l[0] instanceof Date) && (l[1] === null || l[1] instanceof Date),
  change: (l) => Array.isArray(l) && (l[0] === null || l[0] instanceof Date) && (l[1] === null || l[1] instanceof Date)
}, ji = {
  key: 0,
  class: "text-sm text-blue-500 ml-2"
}, Fi = ["disabled"], Wi = ["disabled"], Hi = ["onClick", "disabled"], Ni = {
  key: 0,
  class: "mt-4 flex justify-between"
}, Gi = { class: "ml-1 font-medium" }, _i = { class: "ml-1 font-medium" }, Ki = /* @__PURE__ */ J({
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
  emits: Pi,
  setup(l, { emit: a }) {
    const e = a, t = l, {
      startDate: r,
      endDate: s,
      currentYear: o,
      selectionMode: f,
      weekdays: n,
      daysInMonth: i,
      monthName: b,
      prevMonth: k,
      nextMonth: m,
      selectDate: d,
      resetSelection: g
    } = Ii(t, e), y = (c) => {
      const v = t.locale || "default";
      return new Intl.DateTimeFormat(v).format(c);
    }, u = h(() => {
      var c, v, z, D, M, V, T, $, O, A, L, P, F, S, E, I, G, j, K, Y, oe, W, Z, le, ee, se, ue, fe, ge, pe, ze, ye;
      return {
        root: t.unstyled ? ((c = t.pt) == null ? void 0 : c.root) || "" : Di({ unstyled: t.unstyled, class: (v = t.pt) == null ? void 0 : v.root }),
        header: t.unstyled ? ((z = t.pt) == null ? void 0 : z.header) || "" : Mi({ class: (D = t.pt) == null ? void 0 : D.header }),
        title: t.unstyled ? ((M = t.pt) == null ? void 0 : M.title) || "" : Ti({ class: (V = t.pt) == null ? void 0 : V.title }),
        navigation: t.unstyled ? ((T = t.pt) == null ? void 0 : T.navigation) || "" : Ri({ class: ($ = t.pt) == null ? void 0 : $.navigation }),
        navButton: t.unstyled ? ((O = t.pt) == null ? void 0 : O.navButton) || "" : Ei({ class: (A = t.pt) == null ? void 0 : A.navButton }),
        weekdays: t.unstyled ? ((L = t.pt) == null ? void 0 : L.weekdays) || "" : Li({ class: (P = t.pt) == null ? void 0 : P.weekdays }),
        weekday: t.unstyled ? ((F = t.pt) == null ? void 0 : F.weekday) || "" : Ai({ class: (S = t.pt) == null ? void 0 : S.weekday }),
        days: t.unstyled ? ((E = t.pt) == null ? void 0 : E.days) || "" : Oi({ class: (I = t.pt) == null ? void 0 : I.days }),
        day: t.unstyled ? ((G = t.pt) == null ? void 0 : G.day) || "" : he({ class: (j = t.pt) == null ? void 0 : j.day }),
        today: t.unstyled ? ((K = t.pt) == null ? void 0 : K.today) || "" : he({ isToday: !0, class: (Y = t.pt) == null ? void 0 : Y.today }).split(" ").filter((ie) => !he().includes(ie)).join(" "),
        selected: t.unstyled ? ((oe = t.pt) == null ? void 0 : oe.selected) || "" : he({ isSelected: !0, class: (W = t.pt) == null ? void 0 : W.selected }).split(" ").filter((ie) => !he().includes(ie)).join(" "),
        rangeStart: t.unstyled ? ((Z = t.pt) == null ? void 0 : Z.rangeStart) || "" : he({
          isRangeStart: !0,
          class: (le = t.pt) == null ? void 0 : le.rangeStart
        }).split(" ").filter((ie) => !he().includes(ie)).join(" "),
        rangeEnd: t.unstyled ? ((ee = t.pt) == null ? void 0 : ee.rangeEnd) || "" : he({ isRangeEnd: !0, class: (se = t.pt) == null ? void 0 : se.rangeEnd }).split(" ").filter((ie) => !he().includes(ie)).join(" "),
        inRange: t.unstyled ? ((ue = t.pt) == null ? void 0 : ue.inRange) || "" : he({ isInRange: !0, class: (fe = t.pt) == null ? void 0 : fe.inRange }).split(" ").filter((ie) => !he().includes(ie)).join(" "),
        disabled: t.unstyled ? ((ge = t.pt) == null ? void 0 : ge.disabled) || "" : he({ isDisabled: !0, class: (pe = t.pt) == null ? void 0 : pe.disabled }).split(" ").filter((ie) => !he().includes(ie)).join(" "),
        adjacent: t.unstyled ? ((ze = t.pt) == null ? void 0 : ze.adjacent) || "" : he({ isAdjacent: !0, class: (ye = t.pt) == null ? void 0 : ye.adjacent }).split(" ").filter((ie) => !he().includes(ie)).join(" ")
      };
    });
    return (c, v) => (w(), x("div", {
      class: p(u.value.root)
    }, [
      B("div", {
        class: p(u.value.header)
      }, [
        B("div", {
          class: p(u.value.title)
        }, [
          ce(U(C(b)) + " " + U(C(o)) + " ", 1),
          C(f) === "end" ? (w(), x("span", ji, " (Select end date) ")) : N("", !0)
        ], 2),
        B("div", {
          class: p(u.value.navigation)
        }, [
          B("button", {
            class: p(u.value.navButton),
            onClick: v[0] || (v[0] = //@ts-ignore
            (...z) => C(k) && C(k)(...z)),
            disabled: c.disabled || c.readonly
          }, v[3] || (v[3] = [
            B("svg", {
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
              B("path", { d: "m15 18-6-6 6-6" })
            ], -1)
          ]), 10, Fi),
          B("button", {
            class: p(u.value.navButton),
            onClick: v[1] || (v[1] = //@ts-ignore
            (...z) => C(m) && C(m)(...z)),
            disabled: c.disabled || c.readonly
          }, v[4] || (v[4] = [
            B("svg", {
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
              B("path", { d: "m9 18 6-6-6-6" })
            ], -1)
          ]), 10, Wi)
        ], 2)
      ], 2),
      B("div", {
        class: p(u.value.weekdays)
      }, [
        (w(!0), x(ae, null, ne(C(n), (z, D) => (w(), x("div", {
          key: D,
          class: p(u.value.weekday)
        }, U(z), 3))), 128))
      ], 2),
      B("div", {
        class: p(u.value.days)
      }, [
        (w(!0), x(ae, null, ne(C(i), (z, D) => (w(), x("button", {
          key: D,
          class: p([
            u.value.day,
            z.isToday ? u.value.today : "",
            z.isSelected ? u.value.selected : "",
            z.isRangeStart ? u.value.rangeStart : "",
            z.isRangeEnd ? u.value.rangeEnd : "",
            z.isInRange ? u.value.inRange : "",
            z.isDisabled ? u.value.disabled : "",
            z.isCurrentMonth ? "" : u.value.adjacent
          ]),
          onClick: (M) => C(d)(z.date),
          disabled: z.isDisabled || c.disabled || c.readonly
        }, U(z.day), 11, Hi))), 128))
      ], 2),
      C(r) || C(s) ? (w(), x("div", Ni, [
        B("div", null, [
          v[5] || (v[5] = B("span", { class: "text-sm text-gray-500" }, "Start:", -1)),
          B("span", Gi, U(C(r) ? y(C(r)) : "-"), 1)
        ]),
        B("div", null, [
          v[6] || (v[6] = B("span", { class: "text-sm text-gray-500" }, "End:", -1)),
          B("span", _i, U(C(s) ? y(C(s)) : "-"), 1)
        ]),
        B("button", {
          class: "text-sm text-red-500 hover:text-red-700",
          onClick: v[2] || (v[2] = //@ts-ignore
          (...z) => C(g) && C(g)(...z))
        }, " Reset ")
      ])) : N("", !0)
    ], 2));
  }
}), Yi = Q(Ki), Ui = R({
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
}), Xi = R({
  base: "w-full"
}), qi = R({
  base: ""
}), Zi = R({
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
}), Ji = R({
  base: "text-base font-medium"
}), Qi = R({
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
}), eu = R({
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
}), tu = R({
  base: "py-4 px-5"
}), lu = {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  "update:modelValue": (l) => !0,
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  change: (l) => !0
}, au = {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  click: (l) => !0,
  toggle: (l) => typeof l == "boolean"
}, ru = /* @__PURE__ */ J({
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
  emits: lu,
  setup(l, { emit: a }) {
    const e = l, t = a, r = H(
      Array.isArray(e.modelValue) ? e.modelValue : e.modelValue ? [e.modelValue] : []
    );
    te(
      () => e.modelValue,
      (n) => {
        Array.isArray(n) ? r.value = n : n ? r.value = [n] : r.value = [];
      }
    );
    const s = h(() => {
      var n, i;
      return e.unstyled ? ((n = e.pt) == null ? void 0 : n.root) || "" : Ui({
        variant: e.variant,
        radius: e.radius,
        bordered: e.bordered,
        class: (i = e.pt) == null ? void 0 : i.root
      });
    }), o = (n, i) => {
      let b = [...r.value];
      if (i ? e.multiple ? b.includes(n) || b.push(n) : b = [n] : b = b.filter((k) => k !== n), r.value = b, e.multiple)
        t("update:modelValue", b), t("change", b);
      else {
        const k = b.length > 0 ? b[0] : void 0;
        t("update:modelValue", k), t("change", k);
      }
    }, f = (n) => r.value.includes(n);
    return Ve("accordionContext", {
      disabled: h(() => e.disabled),
      animated: h(() => e.animated),
      toggleItem: o,
      isItemExpanded: f
    }), (n, i) => (w(), x("div", {
      class: p(s.value)
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), ou = ["aria-expanded", "aria-disabled"], nu = /* @__PURE__ */ J({
  name: "AccordionItem",
  __name: "accordion-item",
  props: {
    value: {},
    header: {},
    disabled: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: au,
  setup(l, { emit: a }) {
    const e = l, t = a, r = Be("accordionContext", {
      disabled: h(() => !1),
      animated: h(() => !0),
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
      toggleItem: (u, c) => {
      },
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
      isItemExpanded: (u) => !1
    }), s = h(
      () => e.disabled || r.disabled.value
    ), o = h(() => r.isItemExpanded(e.value)), f = H(null);
    te(
      () => o.value,
      (u) => {
        if (!(!r.animated.value || !f.value))
          if (u) {
            const c = f.value;
            c.style.height = "0", c.style.height = `${c.scrollHeight}px`;
            const v = () => {
              o.value && (c.style.height = ""), c.removeEventListener("transitionend", v);
            };
            c.addEventListener("transitionend", v);
          } else {
            const c = f.value, v = c.offsetHeight;
            c.style.height = `${v}px`, c.style.height = "0";
          }
      }
    );
    const n = (u) => {
      if (s.value) return;
      t("click", u);
      const c = !o.value;
      r.toggleItem(e.value, c), t("toggle", c);
    }, i = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.root) || "" : Xi({
        class: (c = e.pt) == null ? void 0 : c.root
      });
    }), b = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.header) || "" : qi({
        class: (c = e.pt) == null ? void 0 : c.header
      });
    }), k = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.trigger) || "" : Zi({
        disabled: s.value,
        class: (c = e.pt) == null ? void 0 : c.trigger
      });
    }), m = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.title) || "" : Ji({
        class: (c = e.pt) == null ? void 0 : c.title
      });
    }), d = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.icon) || "" : Qi({
        expanded: o.value,
        class: (c = e.pt) == null ? void 0 : c.icon
      });
    }), g = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.content) || "" : eu({
        animated: r.animated.value,
        expanded: o.value,
        class: (c = e.pt) == null ? void 0 : c.content
      });
    }), y = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.contentInner) || "" : tu({
        class: (c = e.pt) == null ? void 0 : c.contentInner
      });
    });
    return ve(() => {
      f.value && !o.value && (f.value.style.height = "0");
    }), (u, c) => (w(), x("div", {
      class: p(i.value)
    }, [
      B("div", {
        class: p(b.value)
      }, [
        B("button", {
          type: "button",
          class: p(k.value),
          "aria-expanded": o.value,
          "aria-disabled": s.value,
          onClick: n
        }, [
          B("div", {
            class: p(m.value)
          }, [
            _(u.$slots, "header", {}, () => [
              ce(U(u.header), 1)
            ])
          ], 2),
          B("div", {
            class: p(d.value)
          }, [
            _(u.$slots, "icon", {}, () => [
              c[0] || (c[0] = B("svg", {
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
                B("polyline", { points: "6 9 12 15 18 9" })
              ], -1))
            ])
          ], 2)
        ], 10, ou)
      ], 2),
      B("div", {
        class: p(g.value),
        ref_key: "contentEl",
        ref: f
      }, [
        B("div", {
          class: p(y.value)
        }, [
          _(u.$slots, "default")
        ], 2)
      ], 2)
    ], 2));
  }
}), su = Q(ru), iu = Q(nu), uu = R({
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
}), du = { key: 0 }, cu = ["onClick"], fu = ["placeholder", "disabled", "readonly", "autofocus", "onKeydown"], pu = { key: 0 }, bu = /* @__PURE__ */ J({
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
    const e = l, t = a, r = H(null), s = H(""), o = H(!1), f = h(() => e.unstyled ? {
      root: () => {
        var d;
        return ((d = e.pt) == null ? void 0 : d.root) || "";
      },
      wrapper: () => {
        var d;
        return ((d = e.pt) == null ? void 0 : d.wrapper) || "";
      },
      input: () => {
        var d;
        return ((d = e.pt) == null ? void 0 : d.input) || "";
      },
      prefix: () => {
        var d;
        return ((d = e.pt) == null ? void 0 : d.prefix) || "";
      },
      suffix: () => {
        var d;
        return ((d = e.pt) == null ? void 0 : d.suffix) || "";
      },
      tag: () => {
        var d;
        return ((d = e.pt) == null ? void 0 : d.tag) || "";
      },
      tagClose: () => {
        var d;
        return ((d = e.pt) == null ? void 0 : d.tagClose) || "";
      },
      count: () => {
        var d;
        return ((d = e.pt) == null ? void 0 : d.count) || "";
      }
    } : uu({
      size: e.size,
      status: e.status,
      disabled: e.disabled
    })), n = () => {
      if (!s.value || e.disabled || e.readonly || e.maxCount && e.modelValue.length >= e.maxCount) return;
      const d = [...e.modelValue];
      d.includes(s.value) || (d.push(s.value), t("update:modelValue", d), t("change", d), t("add", s.value)), s.value = "";
    }, i = (d) => {
      if (e.disabled || e.readonly) return;
      const g = [...e.modelValue], y = g[d];
      g.splice(d, 1), t("update:modelValue", g), t("change", g), t("remove", y, d);
    }, b = () => {
      if (s.value === "" && e.modelValue.length > 0 && !e.disabled && !e.readonly) {
        const d = [...e.modelValue], g = d.length - 1, y = d[g];
        d.pop(), t("update:modelValue", d), t("change", d), t("remove", y, g);
      }
    }, k = (d) => {
      o.value = !0, t("focus", d);
    }, m = (d) => {
      o.value = !1, s.value && n(), t("blur", d);
    };
    return te(
      () => e.autofocus,
      (d) => {
        d && r.value && r.value.focus();
      },
      { immediate: !0 }
    ), (d, g) => {
      var y, u;
      return w(), x("div", {
        class: p(f.value.root())
      }, [
        B("div", {
          class: p(f.value.wrapper())
        }, [
          d.$slots.prefix || d.prefixIcon ? (w(), x("div", {
            key: 0,
            class: p(f.value.prefix())
          }, [
            _(d.$slots, "prefix", {}, () => [
              d.prefixIcon ? (w(), x("span", du, U(d.prefixIcon), 1)) : N("", !0)
            ])
          ], 2)) : N("", !0),
          (w(!0), x(ae, null, ne(d.modelValue, (c, v) => (w(), x("div", {
            key: v,
            class: p(f.value.tag())
          }, [
            ce(U(c) + " ", 1),
            d.closable && !d.disabled && !d.readonly ? (w(), x("span", {
              key: 0,
              class: p(f.value.tagClose()),
              onClick: (z) => i(v)
            }, " × ", 10, cu)) : N("", !0)
          ], 2))), 128)),
          We(B("input", {
            ref_key: "inputRef",
            ref: r,
            class: p(f.value.input()),
            type: "text",
            placeholder: (y = d.modelValue) != null && y.length ? "" : d.placeholder,
            disabled: d.disabled,
            readonly: d.readonly,
            autofocus: d.autofocus,
            "onUpdate:modelValue": g[0] || (g[0] = (c) => s.value = c),
            onKeydown: [
              ke(Ce(n, ["prevent"]), ["enter"]),
              ke(b, ["backspace"])
            ],
            onBlur: m,
            onFocus: k
          }, null, 42, fu), [
            [dl, s.value]
          ]),
          d.$slots.suffix || d.suffixIcon ? (w(), x("div", {
            key: 1,
            class: p(f.value.suffix())
          }, [
            _(d.$slots, "suffix", {}, () => [
              d.suffixIcon ? (w(), x("span", pu, U(d.suffixIcon), 1)) : N("", !0)
            ])
          ], 2)) : N("", !0),
          d.showCount && d.maxCount ? (w(), x("span", {
            key: 2,
            class: p(f.value.count())
          }, U(((u = d.modelValue) == null ? void 0 : u.length) || 0) + "/" + U(d.maxCount), 3)) : N("", !0)
        ], 2)
      ], 2);
    };
  }
}), vu = Q(bu), Ae = R({
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
}), gu = {
  "update:visible": (l) => typeof l == "boolean",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  select: (l, a) => !0,
  show: () => !0,
  hide: () => !0
}, mu = {
  click: (l) => l instanceof MouseEvent
}, yu = (l, a) => {
  const e = H(l.visible || !1), t = H(null), r = H(null), s = `dropdown-${Math.random().toString(36).slice(2, 11)}`;
  let o = null, f = null;
  te(
    () => l.visible,
    (g) => {
      g !== void 0 && (e.value = g);
    }
  ), te(
    () => e.value,
    (g) => {
      a("update:visible", g), a(g ? "show" : "hide");
    }
  );
  const n = () => {
    l.disabled || ((l.trigger === "hover" || l.trigger === "focus") && l.showDelay ? (clearTimeout(f), o = window.setTimeout(() => {
      e.value = !0;
    }, l.showDelay)) : e.value = !0);
  }, i = () => {
    l.trigger !== "manual" && ((l.trigger === "hover" || l.trigger === "focus") && l.hideDelay ? (clearTimeout(o), f = window.setTimeout(() => {
      e.value = !1;
    }, l.hideDelay)) : e.value = !1);
  }, b = () => {
    l.disabled || l.trigger !== "manual" && (e.value = !e.value);
  }, k = (g) => {
    if (!l.closeOnClickOutside || !e.value || l.trigger === "manual") return;
    const y = g.target;
    r.value && !r.value.contains(y) && t.value && !t.value.contains(y) && i();
  }, m = (g, y) => {
    l.closeOnSelect && l.trigger !== "manual" && i(), a("select", g, y);
  }, d = (g, y) => {
    g.disabled || g.divider || g.value !== void 0 && m(g.value, y);
  };
  return ve(() => {
    l.closeOnClickOutside && document.addEventListener("click", k);
  }), De(() => {
    document.removeEventListener("click", k), o && clearTimeout(o), f && clearTimeout(f);
  }), {
    isVisible: e,
    triggerRef: t,
    contentRef: r,
    dropdownId: s,
    show: n,
    hide: i,
    toggle: b,
    handleItemClick: m,
    handleOptionClick: d
  };
}, hu = ["aria-expanded", "aria-controls"], wu = ["id"], xu = ["onClick", "aria-disabled"], ku = /* @__PURE__ */ J({
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
  emits: gu,
  setup(l, { expose: a, emit: e }) {
    const t = l, r = e, {
      isVisible: s,
      triggerRef: o,
      contentRef: f,
      dropdownId: n,
      show: i,
      hide: b,
      toggle: k,
      handleItemClick: m,
      handleOptionClick: d
    } = yu(t, r), g = h(() => {
      var A, L, P, F, S, E, I, G, j, K;
      if (t.unstyled)
        return {
          root: ((A = t.pt) == null ? void 0 : A.root) || "",
          trigger: ((L = t.pt) == null ? void 0 : L.trigger) || "",
          content: ((P = t.pt) == null ? void 0 : P.content) || "",
          arrow: ((F = t.pt) == null ? void 0 : F.arrow) || "",
          menu: ((S = t.pt) == null ? void 0 : S.menu) || "",
          menuItem: ((E = t.pt) == null ? void 0 : E.menuItem) || "",
          menuItemSelected: ((I = t.pt) == null ? void 0 : I.menuItemSelected) || "",
          menuItemDisabled: ((G = t.pt) == null ? void 0 : G.menuItemDisabled) || "",
          menuItemIcon: ((j = t.pt) == null ? void 0 : j.menuItemIcon) || "",
          menuDivider: ((K = t.pt) == null ? void 0 : K.menuDivider) || ""
        };
      const {
        root: y,
        trigger: u,
        content: c,
        arrow: v,
        menu: z,
        menuItem: D,
        menuItemSelected: M,
        menuItemActive: V,
        menuItemDisabled: T,
        menuItemIcon: $,
        menuDivider: O
      } = Ae({
        placement: t.placement,
        size: t.size,
        disabled: t.disabled
      });
      return {
        root: y(),
        trigger: u(),
        content: c(),
        arrow: v(),
        menu: z(),
        menuItem: D(),
        menuItemSelected: M(),
        menuItemActive: V(),
        menuItemDisabled: T(),
        menuItemIcon: $(),
        menuDivider: O()
      };
    });
    return a({
      show: i,
      hide: b,
      toggle: k
    }), Ve("dropdown", {
      handleItemClick: m,
      closeOnSelect: t.closeOnSelect
    }), (y, u) => (w(), x("div", {
      class: p(g.value.root)
    }, [
      B("div", {
        ref_key: "triggerRef",
        ref: o,
        class: p(g.value.trigger),
        onClick: u[0] || (u[0] = (c) => y.trigger === "click" && C(k)()),
        onMouseenter: u[1] || (u[1] = (c) => y.trigger === "hover" && C(i)()),
        onMouseleave: u[2] || (u[2] = (c) => y.trigger === "hover" && C(b)()),
        onFocus: u[3] || (u[3] = (c) => y.trigger === "focus" && C(i)()),
        onBlur: u[4] || (u[4] = (c) => y.trigger === "focus" && C(b)()),
        onKeydown: [
          u[5] || (u[5] = ke(
            //@ts-ignore
            (...c) => C(b) && C(b)(...c),
            ["esc"]
          )),
          u[6] || (u[6] = ke(Ce((c) => y.trigger === "click" && C(k)(), ["prevent"]), ["space"])),
          u[7] || (u[7] = ke((c) => y.trigger === "click" && C(k)(), ["enter"]))
        ],
        tabindex: "0",
        role: "button",
        "aria-haspopup": !0,
        "aria-expanded": C(s),
        "aria-controls": C(n)
      }, [
        _(y.$slots, "trigger")
      ], 42, hu),
      Oe(Ft, { name: "dropdown" }, {
        default: ot(() => [
          C(s) ? (w(), x("div", {
            key: 0,
            ref_key: "contentRef",
            ref: f,
            id: C(n),
            class: p(g.value.content),
            onMouseenter: u[8] || (u[8] = (c) => y.trigger === "hover" && C(i)()),
            onMouseleave: u[9] || (u[9] = (c) => y.trigger === "hover" && C(b)()),
            role: "menu"
          }, [
            y.arrow ? (w(), x("div", {
              key: 0,
              class: p(g.value.arrow)
            }, null, 2)) : N("", !0),
            B("div", {
              class: p(g.value.menu)
            }, [
              y.options && y.options.length ? (w(!0), x(ae, { key: 0 }, ne(y.options, (c, v) => (w(), x(ae, { key: v }, [
                c.divider ? (w(), x("div", {
                  key: 0,
                  class: p(g.value.menuDivider),
                  role: "separator"
                }, null, 2)) : (w(), x("div", {
                  key: 1,
                  class: p([
                    g.value.menuItem,
                    c.disabled && g.value.menuItemDisabled
                  ]),
                  onClick: (z) => !c.disabled && C(d)(c, z),
                  role: "menuitem",
                  "aria-disabled": c.disabled
                }, [
                  c.icon ? (w(), x("span", {
                    key: 0,
                    class: p(g.value.menuItemIcon)
                  }, U(c.icon), 3)) : N("", !0),
                  B("span", null, U(c.label), 1)
                ], 10, xu))
              ], 64))), 128)) : _(y.$slots, "default", { key: 1 })
            ], 2)
          ], 42, wu)) : N("", !0)
        ]),
        _: 3
      })
    ], 2));
  }
}), Cu = ["aria-disabled"], zu = /* @__PURE__ */ J({
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
  emits: mu,
  setup(l, { emit: a }) {
    const e = l, t = a, r = Be("dropdown", {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      handleItemClick: (b, k) => {
      },
      closeOnSelect: !0
    }), s = (b) => {
      t("click", b), e.value !== void 0 && r.handleItemClick(e.value, b);
    }, o = (b) => {
      const k = new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0,
        view: window
      });
      t("click", k), e.value !== void 0 && r.handleItemClick(e.value, k);
    }, f = h(() => {
      var b, k;
      return e.unstyled ? ((b = e.pt) == null ? void 0 : b.root) || "" : [
        Ae().menuItem(),
        e.active && Ae().menuItemActive(),
        e.disabled && Ae().menuItemDisabled(),
        (k = e.pt) == null ? void 0 : k.root
      ].filter(Boolean).join(" ");
    }), n = h(() => {
      var b;
      return e.unstyled ? ((b = e.pt) == null ? void 0 : b.icon) || "" : Ae().menuItemIcon();
    }), i = h(() => {
      var b;
      return e.unstyled ? ((b = e.pt) == null ? void 0 : b.root) || "" : Ae().menuDivider();
    });
    return (b, k) => b.divider ? (w(), x("div", {
      key: 1,
      role: "separator",
      class: p(i.value)
    }, null, 2)) : (w(), x("div", {
      key: 0,
      class: p(f.value),
      role: "menuitem",
      tabindex: "0",
      "aria-disabled": b.disabled,
      onClick: k[0] || (k[0] = (m) => !b.disabled && s(m)),
      onKeydown: [
        k[1] || (k[1] = ke((m) => !b.disabled && o(), ["enter"])),
        k[2] || (k[2] = ke(Ce((m) => !b.disabled && o(), ["prevent"]), ["space"]))
      ]
    }, [
      _(b.$slots, "icon", {}, () => [
        b.icon ? (w(), x("span", {
          key: 0,
          class: p(n.value)
        }, U(b.icon), 3)) : N("", !0)
      ]),
      _(b.$slots, "default", {}, () => [
        ce(U(b.label), 1)
      ])
    ], 42, Cu));
  }
}), Su = /* @__PURE__ */ J({
  __name: "DropdownDivider",
  props: {
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  setup(l) {
    const a = l, e = h(() => {
      var t, r;
      return a.unstyled ? ((t = a.pt) == null ? void 0 : t.root) || "" : [Ae().menuDivider(), (r = a.pt) == null ? void 0 : r.root].filter(Boolean).join(" ");
    });
    return (t, r) => (w(), x("div", {
      class: p(e.value),
      role: "separator"
    }, null, 2));
  }
}), Bu = Q(ku), Vu = Q(zu), $u = Q(Su), Iu = R({
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
}), Du = R({
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
}), Mu = R({
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
}), Tu = (l, a) => {
  const e = H(l.active || !1), t = h({
    get: () => l.active !== void 0 ? l.active : e.value,
    set: (o) => {
      l.disabled || (l.active === void 0 && (e.value = o), a("update:active", o), a("change", o));
    }
  }), r = () => {
    t.value = !t.value;
  };
  return {
    isActive: t,
    toggle: r,
    handleTrigger: (o) => {
      l.disabled || l.trigger === "click" && r();
    }
  };
}, Ru = ["tabindex", "aria-checked", "aria-disabled"], Eu = /* @__PURE__ */ J({
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
    const e = l, t = a, { isActive: r, handleTrigger: s } = Tu(e, t), o = h(() => {
      var i, b;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.root) || "" : Iu({
        variant: e.variant,
        size: e.size,
        class: (b = e.pt) == null ? void 0 : b.root
      });
    }), f = h(() => {
      var i, b;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.on) || "" : Du({
        active: r.value,
        variant: e.variant,
        disabled: e.disabled,
        class: (b = e.pt) == null ? void 0 : b.on
      });
    }), n = h(() => {
      var i, b;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.off) || "" : Mu({
        active: r.value,
        variant: e.variant,
        disabled: e.disabled,
        class: (b = e.pt) == null ? void 0 : b.off
      });
    });
    return (i, b) => (w(), x("div", {
      class: p(o.value),
      onClick: b[0] || (b[0] = (k) => e.trigger === "click" ? C(s)(k) : void 0),
      onMouseenter: b[1] || (b[1] = (k) => e.trigger === "hover" ? r.value = !0 : void 0),
      onMouseleave: b[2] || (b[2] = (k) => e.trigger === "hover" ? r.value = !1 : void 0),
      onFocus: b[3] || (b[3] = (k) => e.trigger === "focus" ? r.value = !0 : void 0),
      onBlur: b[4] || (b[4] = (k) => e.trigger === "focus" ? r.value = !1 : void 0),
      tabindex: e.trigger === "focus" ? 0 : void 0,
      "aria-checked": C(r),
      "aria-disabled": e.disabled,
      role: "switch"
    }, [
      B("div", {
        class: p(f.value)
      }, [
        _(i.$slots, "on")
      ], 2),
      B("div", {
        class: p(n.value)
      }, [
        _(i.$slots, "off")
      ], 2)
    ], 42, Ru));
  }
}), Lu = Q(Eu), Au = R({
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
}), Ou = R({
  base: "absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
}), Pu = R({
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
}), ju = {
  load: (l) => l instanceof Event,
  error: (l) => l instanceof Event,
  zoom: (l) => typeof l == "boolean"
}, Fu = (l, a) => {
  const e = H(null), t = H(!0), r = H(!1), s = H(l.isZoomed || !1), o = (i) => {
    t.value = !1, a("load", i);
  }, f = (i) => {
    t.value = !1, r.value = !0, a("error", i);
  }, n = () => {
    l.isZoomable && (s.value = !s.value, a("zoom", s.value));
  };
  return te(
    () => l.isZoomed,
    (i) => {
      i !== void 0 && (s.value = i);
    }
  ), te(
    () => l.src,
    () => {
      t.value = !0, r.value = !1;
    }
  ), {
    imageRef: e,
    isLoading: t,
    isError: r,
    isZoomed: s,
    handleLoad: o,
    handleError: f,
    toggleZoom: n
  };
}, Wu = ["aria-label"], Hu = ["src", "alt", "loading"], Nu = ["src", "alt"], Gu = {
  key: 3,
  class: "absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800"
}, _u = { class: "text-gray-400 flex flex-col items-center" }, Ku = /* @__PURE__ */ J({
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
  emits: ju,
  setup(l, { expose: a, emit: e }) {
    const t = l, r = e, {
      imageRef: s,
      isLoading: o,
      isError: f,
      isZoomed: n,
      handleLoad: i,
      handleError: b,
      toggleZoom: k
    } = Fu(t, r), m = () => {
      t.isZoomable && k();
    }, d = h(() => {
      var D, M;
      return t.unstyled ? ((D = t.pt) == null ? void 0 : D.root) || "" : Au({
        fit: t.fit,
        radius: t.radius,
        isZoomable: t.isZoomable,
        isZoomed: n.value,
        class: (M = t.pt) == null ? void 0 : M.root
      });
    }), g = h(() => {
      var D, M;
      return t.unstyled ? ((D = t.pt) == null ? void 0 : D.img) || "" : `w-full h-full transition-transform ${n.value ? "scale-" + t.zoomScale : ""} ${((M = t.pt) == null ? void 0 : M.img) || ""}`;
    }), y = h(() => {
      var D, M;
      return t.unstyled ? ((D = t.pt) == null ? void 0 : D.skeleton) || "" : Ou({ class: (M = t.pt) == null ? void 0 : M.skeleton });
    }), u = h(() => {
      var D, M;
      return t.unstyled ? ((D = t.pt) == null ? void 0 : D.overlay) || "" : Pu({ visible: n.value, class: (M = t.pt) == null ? void 0 : M.overlay });
    }), c = h(() => {
      const D = {};
      return t.width !== "auto" && (D.width = typeof t.width == "number" ? `${t.width}px` : t.width), t.height !== "auto" && (D.height = typeof t.height == "number" ? `${t.height}px` : t.height), D;
    }), v = h(() => ({
      objectFit: t.fit
    })), z = h(() => t.skeletonColor ? { backgroundColor: t.skeletonColor } : {});
    return a({
      imageRef: s,
      isLoading: o,
      isError: f,
      isZoomed: n
    }), (D, M) => (w(), x("div", {
      class: p(d.value),
      style: de(c.value),
      onClick: m,
      role: "img",
      "aria-label": D.alt
    }, [
      D.skeleton && C(o) ? (w(), x("div", {
        key: 0,
        class: p(y.value),
        style: de(z.value)
      }, null, 6)) : N("", !0),
      B("img", {
        ref_key: "imageRef",
        ref: s,
        src: D.src,
        alt: D.alt,
        class: p(g.value),
        style: de(v.value),
        loading: D.loading,
        onLoad: M[0] || (M[0] = //@ts-ignore
        (...V) => C(i) && C(i)(...V)),
        onError: M[1] || (M[1] = //@ts-ignore
        (...V) => C(b) && C(b)(...V))
      }, null, 46, Hu),
      D.blurred && C(o) ? (w(), x("img", {
        key: 1,
        src: D.src,
        alt: D.alt,
        class: "absolute inset-0 w-full h-full",
        style: de({
          filter: `blur(${D.blurAmount}px)`,
          transform: "scale(1.1)",
          objectFit: D.fit
        })
      }, null, 12, Nu)) : N("", !0),
      D.isZoomable && C(n).valueOf() ? (w(), x("div", {
        key: 2,
        class: p(u.value)
      }, [
        _(D.$slots, "zoom-icon", {}, () => [
          M[2] || (M[2] = cl('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>', 1))
        ])
      ], 2)) : N("", !0),
      C(f) ? (w(), x("div", Gu, [
        _(D.$slots, "error", {}, () => [
          B("div", _u, [
            M[3] || (M[3] = B("svg", {
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
              B("rect", {
                x: "3",
                y: "3",
                width: "18",
                height: "18",
                rx: "2",
                ry: "2"
              }),
              B("circle", {
                cx: "8.5",
                cy: "8.5",
                r: "1.5"
              }),
              B("polyline", { points: "21 15 16 10 5 21" })
            ], -1)),
            B("span", null, U(D.alt || "图片加载失败"), 1)
          ])
        ])
      ])) : N("", !0)
    ], 14, Wu));
  }
}), Yu = Q(Ku), Uu = R({
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
}), Xu = R({
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
}), qu = {
  click: (l) => l instanceof MouseEvent
}, Zu = (l, a) => {
  const e = (r) => {
    if (l.disabled) {
      r.preventDefault();
      return;
    }
    a("click", r);
  }, t = h(() => {
    const r = {};
    return l.href && (r.href = l.href), l.external && (r.target = "_blank", r.rel = "noopener noreferrer"), r;
  });
  return {
    handleClick: e,
    linkAttributes: t
  };
}, Ju = ["aria-disabled"], Qu = /* @__PURE__ */ J({
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
  emits: qu,
  setup(l, { emit: a }) {
    const e = l, t = a, { handleClick: r, linkAttributes: s } = Zu(e, t), o = h(() => {
      var n, i;
      return e.unstyled ? ((n = e.pt) == null ? void 0 : n.root) || "" : Uu({
        variant: e.variant,
        size: e.size,
        underline: e.underline,
        disabled: e.disabled,
        class: (i = e.pt) == null ? void 0 : i.root
      });
    }), f = (n) => {
      var i, b;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.icon) || "" : Xu({
        position: n,
        size: e.size,
        class: (b = e.pt) == null ? void 0 : b.icon
      });
    };
    return (n, i) => (w(), x("a", Wt({ class: o.value }, C(s), {
      onClick: i[0] || (i[0] = //@ts-ignore
      (...b) => C(r) && C(r)(...b)),
      "aria-disabled": n.disabled
    }), [
      n.iconPosition === "left" ? _(n.$slots, "icon-left", { key: 0 }, () => [
        n.$slots["icon-left"] ? (w(), x("span", {
          key: 0,
          class: p(f("left"))
        }, [
          _(n.$slots, "icon-left")
        ], 2)) : N("", !0)
      ]) : N("", !0),
      _(n.$slots, "default"),
      n.iconPosition === "right" ? _(n.$slots, "icon-right", { key: 1 }, () => [
        n.$slots["icon-right"] ? (w(), x("span", {
          key: 0,
          class: p(f("right"))
        }, [
          _(n.$slots, "icon-right")
        ], 2)) : N("", !0)
      ]) : N("", !0),
      n.external && !n.$slots["icon-right"] && n.iconPosition !== "left" ? (w(), x("span", {
        key: 2,
        class: p(f("right"))
      }, i[1] || (i[1] = [
        B("svg", {
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
          B("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
          B("polyline", { points: "15 3 21 3 21 9" }),
          B("line", {
            x1: "10",
            y1: "14",
            x2: "21",
            y2: "3"
          })
        ], -1)
      ]), 2)) : N("", !0)
    ], 16, Ju));
  }
}), ed = Q(Qu), td = R({
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
}), ld = {
  change: (l, a) => typeof l == "number" && typeof a == "number",
  "update:active-index": (l) => typeof l == "number"
}, ad = ["tabindex"], rd = ["tabindex"], od = ["onClick", "aria-label", "aria-current", "tabindex"], nd = /* @__PURE__ */ J({
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
  emits: ld,
  setup(l, { expose: a, emit: e }) {
    const t = l, r = e, s = He(), o = H(null), f = H(t.initialIndex);
    let n = null;
    const i = h(() => {
      if (!s) return 0;
      let $ = 0;
      for (; s[`item-${$}`]; )
        $++;
      return $ || 1;
    }), b = h(() => {
      var $, O;
      return t.unstyled ? (($ = t.pt) == null ? void 0 : $.root) || "" : td({
        variant: t.variant,
        size: t.size,
        class: (O = t.pt) == null ? void 0 : O.root
      });
    }), k = h(() => {
      var $, O;
      return t.unstyled ? (($ = t.pt) == null ? void 0 : $.container) || "" : `relative w-full h-full ${((O = t.pt) == null ? void 0 : O.container) || ""}`;
    }), m = h(() => {
      var $, O;
      return t.unstyled ? (($ = t.pt) == null ? void 0 : $.item) || "" : `w-full h-full ${((O = t.pt) == null ? void 0 : O.item) || ""}`;
    }), d = h(() => {
      var $, O;
      return t.unstyled ? (($ = t.pt) == null ? void 0 : $.prevButton) || "" : `absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${((O = t.pt) == null ? void 0 : O.prevButton) || ""}`;
    }), g = h(() => {
      var $, O;
      return t.unstyled ? (($ = t.pt) == null ? void 0 : $.nextButton) || "" : `absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${((O = t.pt) == null ? void 0 : O.nextButton) || ""}`;
    }), y = h(() => {
      var $, O;
      return t.unstyled ? (($ = t.pt) == null ? void 0 : $.indicators) || "" : `absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 ${((O = t.pt) == null ? void 0 : O.indicators) || ""}`;
    }), u = h(() => {
      var $, O;
      return t.unstyled ? (($ = t.pt) == null ? void 0 : $.indicator) || "" : `w-2 h-2 rounded-full bg-white/50 hover:bg-white/75 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${((O = t.pt) == null ? void 0 : O.indicator) || ""}`;
    }), c = h(() => {
      var $, O;
      return t.unstyled ? (($ = t.pt) == null ? void 0 : $.activeIndicator) || "" : `w-6 h-2 rounded-full bg-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${((O = t.pt) == null ? void 0 : O.activeIndicator) || ""}`;
    }), v = () => {
      if (t.disabled) return;
      const $ = f.value;
      f.value < i.value - 1 ? f.value++ : t.loop && (f.value = 0), f.value !== $ && (r("change", f.value, $), r("update:active-index", f.value));
    }, z = () => {
      if (t.disabled) return;
      const $ = f.value;
      f.value > 0 ? f.value-- : t.loop && (f.value = i.value - 1), f.value !== $ && (r("change", f.value, $), r("update:active-index", f.value));
    }, D = ($) => {
      if (!t.disabled && $ >= 0 && $ < i.value) {
        const O = f.value;
        f.value = $, r("change", f.value, O), r("update:active-index", f.value);
      }
    }, M = () => {
      t.autoplay && !t.disabled && (n = setInterval(() => {
        v();
      }, t.interval));
    }, V = () => {
      n && (clearInterval(n), n = null);
    }, T = ($) => {
      !t.keyboardNavigation || t.disabled || ($.key === "ArrowLeft" ? z() : $.key === "ArrowRight" && v());
    };
    return te(
      () => t.autoplay,
      ($) => {
        $ ? M() : V();
      }
    ), te(
      () => t.disabled,
      ($) => {
        $ ? V() : t.autoplay && M();
      }
    ), ve(() => {
      t.autoplay && M(), t.keyboardNavigation && o.value && o.value.addEventListener("keydown", T);
    }), Te(() => {
      V(), o.value && o.value.removeEventListener("keydown", T);
    }), a({
      next: v,
      prev: z,
      goToSlide: D
    }), ($, O) => (w(), x("div", {
      class: p(b.value),
      ref_key: "rootRef",
      ref: o
    }, [
      B("div", {
        class: p(k.value)
      }, [
        (w(!0), x(ae, null, ne(i.value, (A, L) => (w(), x(ae, null, [
          L === f.value ? (w(), x("div", {
            key: L,
            class: p(m.value)
          }, [
            _($.$slots, `item-${L}`)
          ], 2)) : N("", !0)
        ], 64))), 256))
      ], 2),
      $.navigation && !$.disabled ? (w(), x(ae, { key: 0 }, [
        $.navigation && ($.loop || f.value > 0) ? (w(), x("button", {
          key: 0,
          class: p(d.value),
          onClick: z,
          "aria-label": "Previous slide",
          tabindex: $.disabled ? -1 : 0
        }, [
          _($.$slots, "prev-icon", {}, () => [
            O[0] || (O[0] = B("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              B("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M15 19l-7-7 7-7"
              })
            ], -1))
          ])
        ], 10, ad)) : N("", !0),
        $.navigation && ($.loop || f.value < i.value - 1) ? (w(), x("button", {
          key: 1,
          class: p(g.value),
          onClick: v,
          "aria-label": "Next slide",
          tabindex: $.disabled ? -1 : 0
        }, [
          _($.$slots, "next-icon", {}, () => [
            O[1] || (O[1] = B("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              B("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M9 5l7 7-7 7"
              })
            ], -1))
          ])
        ], 10, rd)) : N("", !0)
      ], 64)) : N("", !0),
      $.indicators && !$.disabled ? (w(), x("div", {
        key: 1,
        class: p(y.value)
      }, [
        (w(!0), x(ae, null, ne(i.value, (A, L) => (w(), x("button", {
          key: L,
          class: p([
            L === f.value ? c.value : u.value
          ]),
          onClick: (P) => D(L),
          "aria-label": `Go to slide ${L + 1}`,
          "aria-current": L === f.value,
          tabindex: $.disabled ? -1 : 0
        }, null, 10, od))), 128))
      ], 2)) : N("", !0)
    ], 2));
  }
}), sd = Q(nd), id = R({
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
}), ud = {}, dd = {}, cd = /* @__PURE__ */ J({
  name: "Timeline",
  __name: "timeline",
  props: {
    orientation: { default: "vertical" },
    align: { default: "left" },
    reverse: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: ud,
  setup(l) {
    const a = l;
    Ve("timelineAlign", a.align), Ve("timelineOrientation", a.orientation);
    const e = h(() => {
      var r, s;
      return a.unstyled ? ((r = a.pt) == null ? void 0 : r.root) || "" : id({
        orientation: a.orientation,
        align: a.align,
        class: (s = a.pt) == null ? void 0 : s.root
      });
    }), t = h(() => a.reverse ? { flexDirection: "column-reverse" } : {});
    return (r, s) => (w(), x("div", {
      class: p(e.value),
      style: de(t.value)
    }, [
      _(r.$slots, "default")
    ], 6));
  }
}), fd = /* @__PURE__ */ J({
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
  emits: dd,
  setup(l) {
    const a = l, e = Be(
      "timelineAlign",
      "left"
    ), t = Be(
      "timelineOrientation",
      "vertical"
    ), r = h(() => e === "alternate"), s = h(() => {
      var g, y, u;
      if (a.unstyled)
        return ((g = a.pt) == null ? void 0 : g.root) || "";
      const d = "relative flex";
      return t === "vertical" ? `${d} ${e === "right" ? "flex-row-reverse" : "flex-row"} ${((y = a.pt) == null ? void 0 : y.root) || ""}` : `${d} flex-col ${((u = a.pt) == null ? void 0 : u.root) || ""}`;
    }), o = h(() => {
      var g, y, u;
      if (a.unstyled)
        return ((g = a.pt) == null ? void 0 : g.dot) || "";
      const d = "flex-shrink-0 z-10";
      return t === "vertical" ? `${d} ${e === "right" ? "mr-4" : "ml-4"} ${((y = a.pt) == null ? void 0 : y.dot) || ""}` : `${d} ${((u = a.pt) == null ? void 0 : u.dot) || ""}`;
    }), f = h(() => {
      var d, g, y;
      return a.unstyled ? ((d = a.pt) == null ? void 0 : d.connector) || "" : t === "vertical" ? `absolute top-6 left-0 w-0.5 h-full bg-gray-300 dark:bg-gray-600 ${e === "right" ? "right-0 left-auto" : ""} ${((g = a.pt) == null ? void 0 : g.connector) || ""}` : `absolute left-6 top-0 w-full h-0.5 bg-gray-300 dark:bg-gray-600 ${((y = a.pt) == null ? void 0 : y.connector) || ""}`;
    }), n = h(() => {
      var d, g;
      return a.unstyled ? ((d = a.pt) == null ? void 0 : d.content) || "" : `flex-1 ${((g = a.pt) == null ? void 0 : g.content) || ""}`;
    }), i = h(() => {
      var d, g;
      return a.unstyled ? ((d = a.pt) == null ? void 0 : d.opposite) || "" : `flex-1 text-right ${((g = a.pt) == null ? void 0 : g.opposite) || ""}`;
    }), b = h(() => a.dotColor ? { borderColor: a.dotColor } : {}), k = h(() => a.lineColor ? { backgroundColor: a.lineColor } : {}), m = h(() => {
      const d = {};
      return a.dotColor && !a.unstyled && (a.lineColor || (d["--line-color"] = a.dotColor)), d;
    });
    return (d, g) => (w(), x("div", {
      class: p(s.value),
      style: de(m.value)
    }, [
      B("div", {
        class: p(o.value),
        style: de(b.value)
      }, [
        _(d.$slots, "dot", {}, () => {
          var y;
          return [
            B("div", {
              class: p([
                "w-3 h-3 rounded-full border-2 border-gray-300 dark:border-gray-600",
                (y = a.pt) == null ? void 0 : y.dot
              ]),
              style: de(b.value)
            }, null, 6)
          ];
        })
      ], 6),
      a.isLast ? N("", !0) : (w(), x("div", {
        key: 0,
        class: p(f.value),
        style: de(k.value)
      }, null, 6)),
      B("div", {
        class: p(n.value)
      }, [
        _(d.$slots, "default")
      ], 2),
      r.value ? (w(), x("div", {
        key: 1,
        class: p(i.value)
      }, [
        _(d.$slots, "opposite")
      ], 2)) : N("", !0)
    ], 6));
  }
}), pd = Q(cd), bd = Q(fd), Je = H([]);
let vd = 0;
const gd = (l) => {
  const a = `toast-${vd++}`, e = {
    id: a,
    visible: !0,
    ...l
  };
  return Je.value.push(e), a;
}, sl = (l) => {
  const a = Je.value.findIndex((e) => e.id === l);
  a !== -1 && Je.value.splice(a, 1);
}, md = () => {
  Je.value = [];
}, at = R({
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
}), yd = ["innerHTML"], hd = { class: "flex-1" }, wd = /* @__PURE__ */ J({
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
    const e = l, t = a, { type: r = "info", duration: s = 3e3 } = e, o = h(() => at().base({ type: e.type })), f = h(() => at().icon({ type: e.type })), n = h(
      () => at().description({ type: e.type })
    ), i = h(
      () => at().closeButton({ type: e.type })
    ), b = {
      info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" /></svg>',
      success: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" /></svg>',
      warning: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" /></svg>',
      error: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" /></svg>'
    };
    let k;
    const m = H(s), d = H(0), g = () => {
      s <= 0 || (d.value = Date.now(), k = setTimeout(() => {
        v();
      }, m.value));
    }, y = () => {
      s <= 0 || (clearTimeout(k), m.value -= Date.now() - d.value);
    }, u = () => {
      s <= 0 || g();
    }, c = () => {
      v();
    }, v = () => {
      t("close", e.id), e.onClose && e.onClose(e.id);
    };
    return ve(() => {
      g();
    }), Te(() => {
      clearTimeout(k);
    }), (z, D) => (w(), x("div", {
      class: p(o.value),
      role: "alert",
      onMouseenter: y,
      onMouseleave: u
    }, [
      B("div", {
        class: p(f.value)
      }, [
        _(z.$slots, "icon", {}, () => [
          B("span", {
            innerHTML: b[C(r) || "info"]
          }, null, 8, yd)
        ])
      ], 2),
      B("div", hd, [
        B("div", {
          class: p(n.value)
        }, U(z.message), 3)
      ]),
      (w(), x("button", {
        key: 0,
        type: "button",
        class: p(i.value),
        "aria-label": "Close",
        onClick: c
      }, D[0] || (D[0] = [
        B("svg", {
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
          B("line", {
            x1: "18",
            y1: "6",
            x2: "6",
            y2: "18"
          }),
          B("line", {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "18"
          })
        ], -1)
      ]), 2))
    ], 34));
  }
}), xd = { class: "pointer-events-none fixed inset-0 z-[9999] overflow-hidden" }, il = /* @__PURE__ */ J({
  __name: "ToastContainer",
  setup(l) {
    const a = [
      "top-left",
      "top-right",
      "bottom-left",
      "bottom-right",
      "top-center",
      "bottom-center"
    ], e = (o) => Je.value.filter((f) => (f.position || "top-right") === o), t = (o) => {
      sl(o);
    }, r = (o) => {
      switch (o) {
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
    }, s = (o) => {
      const f = o.includes("top"), n = o.includes("center"), i = o.includes("right");
      let b = "", k = "";
      return n ? (b = f ? "-translate-y-full opacity-0" : "translate-y-full opacity-0", k = f ? "-translate-y-full opacity-0" : "translate-y-full opacity-0") : f ? i ? (b = "translate-x-full opacity-0", k = "translate-x-full opacity-0") : (b = "-translate-x-full opacity-0", k = "-translate-x-full opacity-0") : (b = "translate-y-full opacity-0", k = "translate-y-full opacity-0"), {
        enter: "transition-all duration-300 ease-out",
        leave: "transition-all duration-200 ease-in absolute w-full",
        enterFrom: b,
        leaveTo: k
      };
    };
    return (o, f) => (w(), x("div", xd, [
      (w(), x(ae, null, ne(a, (n) => B("div", {
        key: n,
        class: p([
          "absolute flex w-full flex-col gap-4 p-4 md:max-w-[420px]",
          r(n)
        ])
      }, [
        Oe(fl, {
          tag: "div",
          "enter-active-class": s(n).enter,
          "leave-active-class": s(n).leave,
          "enter-from-class": s(n).enterFrom,
          "leave-to-class": s(n).leaveTo,
          "move-class": "transition-all duration-300 ease-in-out",
          class: "flex flex-col gap-4 w-full"
        }, {
          default: ot(() => [
            (w(!0), x(ae, null, ne(e(n), (i) => (w(), Se(wd, Wt({
              key: i.id
            }, { ref_for: !0 }, i, { onClose: t }), null, 16))), 128))
          ]),
          _: 2
        }, 1032, ["enter-active-class", "leave-active-class", "enter-from-class", "leave-to-class"])
      ], 2)), 64))
    ]));
  }
});
let Ye = null;
const kd = () => {
  if (typeof document > "u" || Ye) return;
  Ye = document.createElement("div"), Ye.id = "versakit-toast-container", document.body.appendChild(Ye);
  const l = Oe(il);
  pl(l, Ye);
}, Ue = (l) => (kd(), gd(l)), Pd = {
  success: (l, a) => Ue({ ...a, message: l, type: "success" }),
  error: (l, a) => Ue({ ...a, message: l, type: "error" }),
  warning: (l, a) => Ue({ ...a, message: l, type: "warning" }),
  info: (l, a) => Ue({ ...a, message: l, type: "info" }),
  show: (l) => Ue(l),
  remove: (l) => sl(l),
  removeAll: () => md()
}, Cd = /* @__PURE__ */ J({
  __name: "Steps",
  props: {
    current: { default: 0 },
    direction: { default: "horizontal" },
    status: { default: "process" }
  },
  emits: ["update:current", "change"],
  setup(l, { emit: a }) {
    const e = l, t = a, r = H([]), s = (n) => {
      r.value.push(n);
    }, o = (n) => {
      const i = r.value.indexOf(n);
      i !== -1 && r.value.splice(i, 1);
    }, f = (n) => {
      n !== e.current && (t("update:current", n), t("change", n));
    };
    return Ve("steps-context", {
      current: xe(e, "current"),
      direction: xe(e, "direction"),
      status: xe(e, "status"),
      steps: r,
      registerStep: s,
      unregisterStep: o,
      onChange: f
    }), (n, i) => (w(), x("div", {
      class: p([
        "flex w-full gap-4",
        n.direction === "vertical" ? "flex-col" : "flex-row items-center"
      ])
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), zd = { class: "relative z-10 flex flex-col items-center" }, Sd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  class: "h-5 w-5"
}, Bd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  class: "h-5 w-5"
}, Vd = { key: 2 }, $d = {
  key: 0,
  class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
}, Id = /* @__PURE__ */ J({
  __name: "StepItem",
  props: {
    title: {},
    description: {},
    status: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(l) {
    const a = l, e = Be("steps-context"), t = Symbol("step-item");
    ve(() => {
      e == null || e.registerStep(t);
    }), Te(() => {
      e == null || e.unregisterStep(t);
    });
    const r = h(() => (e == null ? void 0 : e.steps.value.indexOf(t)) ?? -1), s = h(() => r.value === ((e == null ? void 0 : e.steps.value.length) ?? 0) - 1), o = h(() => {
      if (a.status) return a.status;
      if (!e) return "wait";
      const m = e.current.value;
      return r.value < m ? "finish" : r.value === m ? e.status.value : "wait";
    }), f = h(() => o.value === "finish"), n = h(() => o.value === "process"), i = h(() => !a.disabled && e), b = h(() => {
      switch (o.value) {
        case "finish":
          return "border-blue-500 bg-white text-blue-500 dark:border-blue-500 dark:bg-gray-900";
        case "process":
          return "border-blue-500 bg-blue-500 text-white dark:border-blue-500 dark:bg-blue-500";
        case "error":
          return "border-red-500 bg-white text-red-500 dark:border-red-500 dark:bg-gray-900";
        default:
          return "border-gray-200 bg-white text-gray-400 dark:border-gray-700 dark:bg-gray-900";
      }
    }), k = () => {
      i.value && e && e.onChange(r.value);
    };
    return (m, d) => {
      var g, y, u;
      return w(), x("div", {
        class: p([
          "relative flex flex-1",
          ((g = C(e)) == null ? void 0 : g.direction.value) === "vertical" ? "flex-col pb-8 last:pb-0" : "flex-row items-center last:flex-none",
          i.value ? "cursor-pointer" : "cursor-default"
        ]),
        onClick: k
      }, [
        s.value ? N("", !0) : (w(), x("div", {
          key: 0,
          class: p([
            "absolute transition-colors duration-300",
            ((y = C(e)) == null ? void 0 : y.direction.value) === "vertical" ? "left-[15px] top-[30px] h-[calc(100%-10px)] w-[2px]" : "left-[50%] right-[-50%] top-[15px] h-[2px] w-full",
            f.value ? "bg-blue-500" : "bg-gray-200 dark:bg-gray-700"
          ])
        }, null, 2)),
        B("div", zd, [
          B("div", {
            class: p([
              "flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300",
              b.value
            ])
          }, [
            _(m.$slots, "icon", {}, () => [
              o.value === "finish" ? (w(), x("svg", Sd, d[0] || (d[0] = [
                B("path", {
                  "fill-rule": "evenodd",
                  d: "M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z",
                  "clip-rule": "evenodd"
                }, null, -1)
              ]))) : o.value === "error" ? (w(), x("svg", Bd, d[1] || (d[1] = [
                B("path", {
                  "fill-rule": "evenodd",
                  d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
                  "clip-rule": "evenodd"
                }, null, -1)
              ]))) : (w(), x("span", Vd, U(r.value + 1), 1))
            ])
          ], 2)
        ]),
        B("div", {
          class: p([
            "flex flex-col",
            ((u = C(e)) == null ? void 0 : u.direction.value) === "vertical" ? "ml-4 mt-0.5" : "absolute top-8 left-1/2 -translate-x-1/2 w-max max-w-[120px] text-center mt-2"
          ])
        }, [
          B("div", {
            class: p([
              "text-sm font-medium transition-colors duration-300",
              n.value || f.value ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400",
              o.value === "error" ? "text-red-500" : ""
            ])
          }, [
            _(m.$slots, "title", {}, () => [
              ce(U(m.title), 1)
            ])
          ], 2),
          m.description || m.$slots.description ? (w(), x("div", $d, [
            _(m.$slots, "description", {}, () => [
              ce(U(m.description), 1)
            ])
          ])) : N("", !0)
        ], 2)
      ], 2);
    };
  }
}), Dd = ["value", "checked", "disabled"], Md = /* @__PURE__ */ J({
  __name: "Radio",
  props: {
    modelValue: { type: [String, Number, Boolean] },
    label: { type: [String, Number, Boolean] },
    disabled: { type: Boolean, default: !1 },
    size: {}
  },
  emits: ["update:modelValue", "change"],
  setup(l, { emit: a }) {
    const e = l, t = a, r = Be("radio-group", null), s = h(() => r ? r.modelValue.value === e.label : e.modelValue === e.label), o = h(() => (r == null ? void 0 : r.disabled.value) || !1 || e.disabled), f = h(() => (r == null ? void 0 : r.size.value) || e.size || "md"), n = h(() => {
      switch (f.value) {
        case "sm":
          return "h-4 w-4";
        case "lg":
          return "h-6 w-6";
        default:
          return "h-5 w-5";
      }
    }), i = h(() => {
      switch (f.value) {
        case "sm":
          return "h-1.5 w-1.5";
        case "lg":
          return "h-2.5 w-2.5";
        default:
          return "h-2 w-2";
      }
    }), b = h(() => {
      switch (f.value) {
        case "sm":
          return "text-sm";
        case "lg":
          return "text-lg";
        default:
          return "text-base";
      }
    }), k = () => {
      if (o.value) return;
      const m = e.label ?? "";
      r ? r.changeEvent(m) : (t("update:modelValue", m), t("change", m));
    };
    return (m, d) => (w(), x("label", {
      class: p([
        "group relative inline-flex cursor-pointer items-center select-none",
        o.value ? "cursor-not-allowed opacity-50" : ""
      ])
    }, [
      B("input", {
        type: "radio",
        class: "peer sr-only",
        value: m.label,
        checked: s.value,
        disabled: o.value,
        onChange: k
      }, null, 40, Dd),
      B("div", {
        class: p([
          "relative flex items-center justify-center rounded-full border transition-all duration-200",
          n.value,
          s.value ? "border-blue-500 bg-blue-500" : "border-gray-300 bg-white group-hover:border-blue-500 dark:border-gray-600 dark:bg-gray-800"
        ])
      }, [
        B("div", {
          class: p([
            "rounded-full bg-white transition-transform duration-200",
            i.value,
            s.value ? "scale-100" : "scale-0"
          ])
        }, null, 2)
      ], 2),
      m.$slots.default || m.label ? (w(), x("span", {
        key: 0,
        class: p(["ml-2 text-gray-700 dark:text-gray-300", b.value])
      }, [
        _(m.$slots, "default", {}, () => [
          ce(U(m.label), 1)
        ])
      ], 2)) : N("", !0)
    ], 2));
  }
}), Td = /* @__PURE__ */ J({
  __name: "RadioGroup",
  props: {
    modelValue: { type: [String, Number, Boolean] },
    disabled: { type: Boolean, default: !1 },
    size: { default: "md" },
    direction: { default: "horizontal" }
  },
  emits: ["update:modelValue", "change"],
  setup(l, { emit: a }) {
    const e = l, t = a, r = (s) => {
      t("update:modelValue", s), t("change", s);
    };
    return Ve("radio-group", {
      modelValue: xe(e, "modelValue"),
      disabled: xe(e, "disabled"),
      size: xe(e, "size"),
      changeEvent: r
    }), (s, o) => (w(), x("div", {
      class: p([
        "flex",
        s.direction === "vertical" ? "flex-col gap-2" : "flex-row gap-4"
      ]),
      role: "radiogroup",
      "aria-label": "radio-group"
    }, [
      _(s.$slots, "default")
    ], 2));
  }
}), Rd = R({
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
}), Ed = { class: "overflow-x-auto" }, Ld = { class: "text-sm" }, Ad = /* @__PURE__ */ J({
  __name: "Table",
  props: {
    data: { default: () => [] },
    columns: { default: () => [] },
    stripe: { type: Boolean, default: !1 },
    border: { type: Boolean, default: !1 },
    dense: { type: Boolean, default: !1 },
    emptyText: { default: "No Data" }
  },
  setup(l) {
    const a = l, e = h(() => {
      const { root: r, table: s, thead: o, th: f, tbody: n, tr: i, td: b, empty: k } = Rd({
        stripe: a.stripe,
        border: a.border,
        dense: a.dense
      });
      return {
        root: r(),
        table: s(),
        thead: o(),
        th: f(),
        tbody: n(),
        tr: i(),
        td: b(),
        empty: k()
      };
    }), t = (r) => {
      switch (r) {
        case "center":
          return "text-center";
        case "right":
          return "text-right";
        default:
          return "text-left";
      }
    };
    return (r, s) => {
      var o;
      return w(), x("div", {
        class: p(e.value.root)
      }, [
        B("div", Ed, [
          B("table", {
            class: p(e.value.table)
          }, [
            B("thead", {
              class: p(e.value.thead)
            }, [
              B("tr", null, [
                (w(!0), x(ae, null, ne(r.columns, (f) => (w(), x("th", {
                  key: f.key,
                  class: p([e.value.th, t(f.align)]),
                  style: de({
                    width: f.width ? typeof f.width == "number" ? `${f.width}px` : f.width : void 0
                  })
                }, U(f.title), 7))), 128))
              ])
            ], 2),
            B("tbody", {
              class: p(e.value.tbody)
            }, [
              (w(!0), x(ae, null, ne(r.data, (f, n) => (w(), x("tr", {
                key: n,
                class: p(e.value.tr)
              }, [
                (w(!0), x(ae, null, ne(r.columns, (i) => (w(), x("td", {
                  key: i.key,
                  class: p([e.value.td, t(i.align)])
                }, [
                  _(r.$slots, i.key, {
                    row: f,
                    index: n
                  }, () => [
                    ce(U(f[i.key]), 1)
                  ])
                ], 2))), 128))
              ], 2))), 128))
            ], 2)
          ], 2)
        ]),
        (o = r.data) != null && o.length ? N("", !0) : (w(), x("div", {
          key: 0,
          class: p(e.value.empty)
        }, [
          _(r.$slots, "empty", {}, () => [
            B("span", Ld, U(r.emptyText), 1)
          ])
        ], 2))
      ], 2);
    };
  }
}), dt = [
  sa,
  ma,
  Ca,
  Va,
  Ra,
  Ga,
  qa,
  ir,
  gr,
  zr,
  Dr,
  jr,
  Hr,
  qr,
  Qr,
  lo,
  no,
  Ao,
  co,
  fo,
  go,
  Uo,
  wt,
  al,
  Rn,
  _n,
  as,
  fs,
  ps,
  bs,
  Ss,
  Bs,
  Es,
  Js,
  si,
  ol,
  hi,
  Vi,
  $i,
  Yi,
  su,
  iu,
  vu,
  Bu,
  Vu,
  $u,
  Lu,
  Yu,
  ed,
  sd,
  pd,
  bd,
  il,
  Cd,
  Id,
  Md,
  Td,
  Ad
], jd = {
  install: (l) => {
    var a;
    for (const e in dt)
      l.component(((a = dt[e]) == null ? void 0 : a.name) || e, dt[e]);
  }
};
export {
  su as Accordion,
  iu as AccordionItem,
  jr as Alert,
  Ca as Avatar,
  Va as Badge,
  ol as Breadcrumb,
  hi as BreadcrumbItem,
  qr as Button,
  wt as Calendar,
  Qr as Card,
  sd as Carousel,
  co as Checkbox,
  fo as CheckboxGroup,
  Dr as Chip,
  Rn as DatePicker,
  _n as DateTimePicker,
  lo as Divider,
  Ga as Drawer,
  Bu as Dropdown,
  $u as DropdownDivider,
  Vu as DropdownItem,
  Yu as Image,
  go as Input,
  sa as InputOtp,
  vu as InputTag,
  Hr as Kbd,
  ed as Link,
  ma as Modal,
  Js as Paginator,
  Es as Panel,
  gr as Popover,
  si as Progress,
  Md as Radio,
  Td as RadioGroup,
  Yi as RangeCalendar,
  Uo as Rate,
  qa as Segmented,
  Ao as Select,
  fs as Skeleton,
  bs as SkeletonAvatar,
  ps as SkeletonText,
  ir as Slider,
  Vi as Splitter,
  $i as SplitterPanel,
  Id as StepItem,
  Cd as Steps,
  Lu as Swap,
  Ra as Switch,
  Bs as TabItem,
  Ad as Table,
  Ss as Tabs,
  no as Textarea,
  al as TimePicker,
  as as TimeSelect,
  pd as Timeline,
  bd as TimelineItem,
  Pd as Toast,
  il as ToastContainer,
  zr as Tooltip,
  jd as Versakit
};
