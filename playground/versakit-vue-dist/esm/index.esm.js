import { ref as H, nextTick as me, defineComponent as J, computed as m, createElementBlock as x, openBlock as h, normalizeClass as g, Fragment as ae, renderList as ne, unref as C, withDirectives as He, vModelText as Wt, watch as ee, onUnmounted as Re, useSlots as _e, onMounted as be, createBlock as Se, Teleport as nt, createVNode as Be, Transition as Je, withCtx as Pe, createCommentVNode as _, createElementVNode as V, renderSlot as G, toDisplayString as U, onBeforeUnmount as Me, normalizeStyle as ue, createTextVNode as ce, resolveDynamicComponent as Ze, withModifiers as Ce, inject as Ve, provide as $e, toRef as xe, vShow as pt, withKeys as ke, reactive as dl, vModelDynamic as ul, createStaticVNode as cl, mergeProps as Ht, TransitionGroup as fl, render as pl } from "vue";
const Q = (l, a) => {
  if (l.install = (e) => {
    for (const t of [l, ...Object.values(a ?? {})])
      e.component(t.name, t);
  }, a)
    for (const [e, t] of Object.entries(a))
      l[e] = t;
  return l;
};
function gl(l = 4) {
  const a = H(Array(l).fill("")), e = H([]);
  return {
    values: a,
    setRef: (n, u) => {
      n && (e.value[u] = n);
    },
    onInput: (n, u) => {
      const i = n.target.value.replace(/\D/g, "");
      a.value[u] = i.slice(0, 1), i && u < l - 1 && me(() => {
        var p;
        (p = e.value[u + 1]) == null || p.focus();
      });
    },
    onKeydown: (n, u) => {
      n.key === "Backspace" && !a.value[u] && u > 0 && me(() => {
        var s;
        (s = e.value[u - 1]) == null || s.focus();
      });
    }
  };
}
var Lt = (l) => typeof l == "boolean" ? `${l}` : l === 0 ? "0" : l, we = (l) => !l || typeof l != "object" || Object.keys(l).length === 0, bl = (l, a) => JSON.stringify(l) === JSON.stringify(a);
function _t(l, a) {
  l.forEach(function(e) {
    Array.isArray(e) ? _t(e, a) : a.push(e);
  });
}
function Nt(l) {
  let a = [];
  return _t(l, a), a;
}
var Gt = (...l) => Nt(l).filter(Boolean), Kt = (l, a) => {
  let e = {}, t = Object.keys(l), r = Object.keys(a);
  for (let o of t) if (r.includes(o)) {
    let n = l[o], u = a[o];
    Array.isArray(n) || Array.isArray(u) ? e[o] = Gt(u, n) : typeof n == "object" && typeof u == "object" ? e[o] = Kt(n, u) : e[o] = u + " " + n;
  } else e[o] = l[o];
  for (let o of r) t.includes(o) || (e[o] = a[o]);
  return e;
}, At = (l) => !l || typeof l != "string" ? l : l.replace(/\s+/g, " ").trim();
const wt = "-", vl = (l) => {
  const a = yl(l), {
    conflictingClassGroups: e,
    conflictingClassGroupModifiers: t
  } = l;
  return {
    getClassGroupId: (n) => {
      const u = n.split(wt);
      return u[0] === "" && u.length !== 1 && u.shift(), Yt(u, a) || ml(n);
    },
    getConflictingClassGroupIds: (n, u) => {
      const s = e[n] || [];
      return u && t[n] ? [...s, ...t[n]] : s;
    }
  };
}, Yt = (l, a) => {
  var n;
  if (l.length === 0)
    return a.classGroupId;
  const e = l[0], t = a.nextPart.get(e), r = t ? Yt(l.slice(1), t) : void 0;
  if (r)
    return r;
  if (a.validators.length === 0)
    return;
  const o = l.join(wt);
  return (n = a.validators.find(({
    validator: u
  }) => u(o))) == null ? void 0 : n.classGroupId;
}, Ot = /^\[(.+)\]$/, ml = (l) => {
  if (Ot.test(l)) {
    const a = Ot.exec(l)[1], e = a == null ? void 0 : a.substring(0, a.indexOf(":"));
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
    gt(e[r], t, r, a);
  return t;
}, gt = (l, a, e, t) => {
  l.forEach((r) => {
    if (typeof r == "string") {
      const o = r === "" ? a : Pt(a, r);
      o.classGroupId = e;
      return;
    }
    if (typeof r == "function") {
      if (hl(r)) {
        gt(r(t), a, e, t);
        return;
      }
      a.validators.push({
        validator: r,
        classGroupId: e
      });
      return;
    }
    Object.entries(r).forEach(([o, n]) => {
      gt(n, Pt(a, o), e, t);
    });
  });
}, Pt = (l, a) => {
  let e = l;
  return a.split(wt).forEach((t) => {
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
  const r = (o, n) => {
    e.set(o, n), a++, a > l && (a = 0, t = e, e = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let n = e.get(o);
      if (n !== void 0)
        return n;
      if ((n = t.get(o)) !== void 0)
        return r(o, n), n;
    },
    set(o, n) {
      e.has(o) ? e.set(o, n) : r(o, n);
    }
  };
}, bt = "!", vt = ":", xl = vt.length, kl = (l) => {
  const {
    prefix: a,
    experimentalParseClassName: e
  } = l;
  let t = (r) => {
    const o = [];
    let n = 0, u = 0, s = 0, i;
    for (let b = 0; b < r.length; b++) {
      let v = r[b];
      if (n === 0 && u === 0) {
        if (v === vt) {
          o.push(r.slice(s, b)), s = b + xl;
          continue;
        }
        if (v === "/") {
          i = b;
          continue;
        }
      }
      v === "[" ? n++ : v === "]" ? n-- : v === "(" ? u++ : v === ")" && u--;
    }
    const p = o.length === 0 ? r : r.substring(s), k = Cl(p), y = k !== p, c = i && i > s ? i - s : void 0;
    return {
      modifiers: o,
      hasImportantModifier: y,
      baseClassName: k,
      maybePostfixModifierPosition: c
    };
  };
  if (a) {
    const r = a + vt, o = t;
    t = (n) => n.startsWith(r) ? o(n.substring(r.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: n,
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
}, Cl = (l) => l.endsWith(bt) ? l.substring(0, l.length - 1) : l.startsWith(bt) ? l.substring(1) : l, zl = (l) => {
  const a = Object.fromEntries(l.orderSensitiveModifiers.map((t) => [t, !0]));
  return (t) => {
    if (t.length <= 1)
      return t;
    const r = [];
    let o = [];
    return t.forEach((n) => {
      n[0] === "[" || a[n] ? (r.push(...o.sort(), n), o = []) : o.push(n);
    }), r.push(...o.sort()), r;
  };
}, Sl = (l) => ({
  cache: wl(l.cacheSize),
  parseClassName: kl(l),
  sortModifiers: zl(l),
  ...vl(l)
}), Bl = /\s+/, Vl = (l, a) => {
  const {
    parseClassName: e,
    getClassGroupId: t,
    getConflictingClassGroupIds: r,
    sortModifiers: o
  } = a, n = [], u = l.trim().split(Bl);
  let s = "";
  for (let i = u.length - 1; i >= 0; i -= 1) {
    const p = u[i], {
      isExternal: k,
      modifiers: y,
      hasImportantModifier: c,
      baseClassName: b,
      maybePostfixModifierPosition: v
    } = e(p);
    if (k) {
      s = p + (s.length > 0 ? " " + s : s);
      continue;
    }
    let d = !!v, f = t(d ? b.substring(0, v) : b);
    if (!f) {
      if (!d) {
        s = p + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (f = t(b), !f) {
        s = p + (s.length > 0 ? " " + s : s);
        continue;
      }
      d = !1;
    }
    const S = o(y).join(":"), w = c ? S + bt : S, B = w + f;
    if (n.includes(B))
      continue;
    n.push(B);
    const M = r(f, d);
    for (let I = 0; I < M.length; ++I) {
      const O = M[I];
      n.push(w + O);
    }
    s = p + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function $l() {
  let l = 0, a, e, t = "";
  for (; l < arguments.length; )
    (a = arguments[l++]) && (e = Ut(a)) && (t && (t += " "), t += e);
  return t;
}
const Ut = (l) => {
  if (typeof l == "string")
    return l;
  let a, e = "";
  for (let t = 0; t < l.length; t++)
    l[t] && (a = Ut(l[t])) && (e && (e += " "), e += a);
  return e;
};
function mt(l, ...a) {
  let e, t, r, o = n;
  function n(s) {
    const i = a.reduce((p, k) => k(p), l());
    return e = Sl(i), t = e.cache.get, r = e.cache.set, o = u, u(s);
  }
  function u(s) {
    const i = t(s);
    if (i)
      return i;
    const p = Vl(s, e);
    return r(s, p), p;
  }
  return function() {
    return o($l.apply(null, arguments));
  };
}
const ge = (l) => {
  const a = (e) => e[l] || [];
  return a.isThemeGetter = !0, a;
}, Xt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, qt = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Il = /^\d+\/\d+$/, Dl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ml = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Tl = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Rl = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, El = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, We = (l) => Il.test(l), re = (l) => !!l && !Number.isNaN(Number(l)), Ee = (l) => !!l && Number.isInteger(Number(l)), jt = (l) => l.endsWith("%") && re(l.slice(0, -1)), Te = (l) => Dl.test(l), Ll = () => !0, Al = (l) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ml.test(l) && !Tl.test(l)
), xt = () => !1, Ol = (l) => Rl.test(l), Pl = (l) => El.test(l), jl = (l) => !X(l) && !q(l), Fl = (l) => Ne(l, Qt, xt), X = (l) => Xt.test(l), Le = (l) => Ne(l, el, Al), it = (l) => Ne(l, Zl, re), Wl = (l) => Ne(l, Zt, xt), Hl = (l) => Ne(l, Jt, Pl), _l = (l) => Ne(l, xt, Ol), q = (l) => qt.test(l), tt = (l) => Ge(l, el), Nl = (l) => Ge(l, Jl), Gl = (l) => Ge(l, Zt), Kl = (l) => Ge(l, Qt), Yl = (l) => Ge(l, Jt), Ul = (l) => Ge(l, Ql, !0), Ne = (l, a, e) => {
  const t = Xt.exec(l);
  return t ? t[1] ? a(t[1]) : e(t[2]) : !1;
}, Ge = (l, a, e = !1) => {
  const t = qt.exec(l);
  return t ? t[1] ? a(t[1]) : e : !1;
}, Zt = (l) => l === "position", Xl = /* @__PURE__ */ new Set(["image", "url"]), Jt = (l) => Xl.has(l), ql = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Qt = (l) => ql.has(l), el = (l) => l === "length", Zl = (l) => l === "number", Jl = (l) => l === "family-name", Ql = (l) => l === "shadow", yt = () => {
  const l = ge("color"), a = ge("font"), e = ge("text"), t = ge("font-weight"), r = ge("tracking"), o = ge("leading"), n = ge("breakpoint"), u = ge("container"), s = ge("spacing"), i = ge("radius"), p = ge("shadow"), k = ge("inset-shadow"), y = ge("drop-shadow"), c = ge("blur"), b = ge("perspective"), v = ge("aspect"), d = ge("ease"), f = ge("animate"), S = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], w = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], B = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", "contain", "none"], I = () => [q, X, s], O = () => [We, "full", "auto", ...I()], $ = () => [Ee, "none", "subgrid", q, X], T = () => ["auto", {
    span: ["full", Ee, q, X]
  }, q, X], L = () => [Ee, "auto", q, X], A = () => ["auto", "min", "max", "fr", q, X], P = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], F = () => ["start", "end", "center", "stretch"], z = () => ["auto", ...I()], E = () => [We, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...I()], D = () => [l, q, X], N = () => [jt, Le], j = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    i,
    q,
    X
  ], K = () => ["", re, tt, Le], Y = () => ["solid", "dashed", "dotted", "double"], oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    c,
    q,
    X
  ], Z = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", q, X], le = () => ["none", re, q, X], te = () => ["none", re, q, X], se = () => [re, q, X], de = () => [We, "full", ...I()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Te],
      breakpoint: [Te],
      color: [Ll],
      container: [Te],
      "drop-shadow": [Te],
      ease: ["in", "out", "in-out"],
      font: [jl],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Te],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Te],
      shadow: [Te],
      spacing: ["px", re],
      text: [Te],
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
        aspect: ["auto", "square", We, X, q, v]
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
        columns: [re, X, q, u]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": S()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": S()
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
        object: [...w(), X, q]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: B()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": B()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": B()
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
        inset: O()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": O()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": O()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: O()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: O()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: O()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: O()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: O()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: O()
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
        z: [Ee, "auto", q, X]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [We, "full", "auto", u, ...I()]
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
        flex: [re, We, "auto", "initial", "none", X]
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
        order: [Ee, "first", "last", "none", q, X]
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
        col: T()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": L()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": L()
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
        row: T()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": L()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": L()
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
        "auto-cols": A()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": A()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: I()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": I()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": I()
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
        p: I()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: I()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: I()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: I()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: I()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: I()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: I()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: I()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: I()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: z()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: z()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: z()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: z()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: z()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: z()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: z()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: z()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: z()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": I()
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
        "space-y": I()
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
        w: [u, "screen", ...E()]
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
          ...E()
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
            screen: [n]
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
        text: ["base", e, tt, Le]
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
        font: [t, q, it]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", jt, X]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Nl, X, a]
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
        "line-clamp": [re, "none", q, it]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          o,
          ...I()
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
        placeholder: D()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: D()
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
        decoration: [re, "from-font", "auto", q, Le]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: D()
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
        indent: I()
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
        bg: [...w(), Gl, Wl]
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
          }, Ee, q, X],
          radial: ["", q, X],
          conic: [Ee, q, X]
        }, Yl, Hl]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: D()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: N()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: N()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: N()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: D()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: D()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: D()
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
        border: D()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": D()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": D()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": D()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": D()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": D()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": D()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": D()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": D()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: D()
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
        outline: ["", re, tt, Le]
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
          p,
          Ul,
          _l
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: D()
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
        "inset-shadow": D()
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
        ring: D()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [re, Le]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": D()
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
        "inset-ring": D()
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
          y,
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
        "border-spacing": I()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": I()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": I()
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
        ease: ["linear", "initial", d, q, X]
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
        animate: ["none", f, q, X]
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
        perspective: [b, q, X]
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
        scale: te()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": te()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": te()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": te()
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
        translate: de()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": de()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": de()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": de()
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
        accent: D()
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
        caret: D()
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
        "scroll-m": I()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": I()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": I()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": I()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": I()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": I()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": I()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": I()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": I()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": I()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": I()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": I()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": I()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": I()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": I()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": I()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": I()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": I()
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
        fill: ["none", ...D()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [re, tt, Le, it]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...D()]
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
  override: o = {}
}) => (qe(l, "cacheSize", a), qe(l, "prefix", e), qe(l, "experimentalParseClassName", t), lt(l.theme, o.theme), lt(l.classGroups, o.classGroups), lt(l.conflictingClassGroups, o.conflictingClassGroups), lt(l.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), qe(l, "orderSensitiveModifiers", o.orderSensitiveModifiers), at(l.theme, r.theme), at(l.classGroups, r.classGroups), at(l.conflictingClassGroups, r.conflictingClassGroups), at(l.conflictingClassGroupModifiers, r.conflictingClassGroupModifiers), tl(l, r, "orderSensitiveModifiers"), l), qe = (l, a, e) => {
  e !== void 0 && (l[a] = e);
}, lt = (l, a) => {
  if (a)
    for (const e in a)
      qe(l, e, a[e]);
}, at = (l, a) => {
  if (a)
    for (const e in a)
      tl(l, a, e);
}, tl = (l, a, e) => {
  const t = a[e];
  t !== void 0 && (l[e] = l[e] ? l[e].concat(t) : t);
}, ta = (l, ...a) => typeof l == "function" ? mt(yt, l, ...a) : mt(() => ea(yt(), l), ...a), la = /* @__PURE__ */ mt(yt);
var aa = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, ll = (l) => l || void 0, Qe = (...l) => ll(Nt(l).filter(Boolean).join(" ")), dt = null, De = {}, ht = !1, Ke = (...l) => (a) => a.twMerge ? ((!dt || ht) && (ht = !1, dt = we(De) ? la : ta({ ...De, extend: { theme: De.theme, classGroups: De.classGroups, conflictingClassGroupModifiers: De.conflictingClassGroupModifiers, conflictingClassGroups: De.conflictingClassGroups, ...De.extend } })), ll(dt(Qe(l)))) : Qe(l), Ft = (l, a) => {
  for (let e in a) l.hasOwnProperty(e) ? l[e] = Qe(l[e], a[e]) : l[e] = a[e];
  return l;
}, R = (l, a) => {
  let { extend: e = null, slots: t = {}, variants: r = {}, compoundVariants: o = [], compoundSlots: n = [], defaultVariants: u = {} } = l, s = { ...aa, ...a }, i = e != null && e.base ? Qe(e.base, l == null ? void 0 : l.base) : l == null ? void 0 : l.base, p = e != null && e.variants && !we(e.variants) ? Kt(r, e.variants) : r, k = e != null && e.defaultVariants && !we(e.defaultVariants) ? { ...e.defaultVariants, ...u } : u;
  !we(s.twMergeConfig) && !bl(s.twMergeConfig, De) && (ht = !0, De = s.twMergeConfig);
  let y = we(e == null ? void 0 : e.slots), c = we(t) ? {} : { base: Qe(l == null ? void 0 : l.base, y && (e == null ? void 0 : e.base)), ...t }, b = y ? c : Ft({ ...e == null ? void 0 : e.slots }, we(c) ? { base: l == null ? void 0 : l.base } : c), v = we(e == null ? void 0 : e.compoundVariants) ? o : Gt(e == null ? void 0 : e.compoundVariants, o), d = (S) => {
    if (we(p) && we(t) && y) return Ke(i, S == null ? void 0 : S.class, S == null ? void 0 : S.className)(s);
    if (v && !Array.isArray(v)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof v}`);
    if (n && !Array.isArray(n)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof n}`);
    let w = (P, F, z = [], E) => {
      let D = z;
      if (typeof F == "string") D = D.concat(At(F).split(" ").map((N) => `${P}:${N}`));
      else if (Array.isArray(F)) D = D.concat(F.reduce((N, j) => N.concat(`${P}:${j}`), []));
      else if (typeof F == "object" && typeof E == "string") {
        for (let N in F) if (F.hasOwnProperty(N) && N === E) {
          let j = F[N];
          if (j && typeof j == "string") {
            let K = At(j);
            D[E] ? D[E] = D[E].concat(K.split(" ").map((Y) => `${P}:${Y}`)) : D[E] = K.split(" ").map((Y) => `${P}:${Y}`);
          } else Array.isArray(j) && j.length > 0 && (D[E] = j.reduce((K, Y) => K.concat(`${P}:${Y}`), []));
        }
      }
      return D;
    }, B = (P, F = p, z = null, E = null) => {
      var D;
      let N = F[P];
      if (!N || we(N)) return null;
      let j = (D = E == null ? void 0 : E[P]) != null ? D : S == null ? void 0 : S[P];
      if (j === null) return null;
      let K = Lt(j), Y = Array.isArray(s.responsiveVariants) && s.responsiveVariants.length > 0 || s.responsiveVariants === !0, oe = k == null ? void 0 : k[P], W = [];
      if (typeof K == "object" && Y) for (let [te, se] of Object.entries(K)) {
        let de = N[se];
        if (te === "initial") {
          oe = se;
          continue;
        }
        Array.isArray(s.responsiveVariants) && !s.responsiveVariants.includes(te) || (W = w(te, de, W, z));
      }
      let Z = K != null && typeof K != "object" ? K : Lt(oe), le = N[Z || "false"];
      return typeof W == "object" && typeof z == "string" && W[z] ? Ft(W, le) : W.length > 0 ? (W.push(le), z === "base" ? W.join(" ") : W) : le;
    }, M = () => p ? Object.keys(p).map((P) => B(P, p)) : null, I = (P, F) => {
      if (!p || typeof p != "object") return null;
      let z = new Array();
      for (let E in p) {
        let D = B(E, p, P, F), N = P === "base" && typeof D == "string" ? D : D && D[P];
        N && (z[z.length] = N);
      }
      return z;
    }, O = {};
    for (let P in S) S[P] !== void 0 && (O[P] = S[P]);
    let $ = (P, F) => {
      var z;
      let E = typeof (S == null ? void 0 : S[P]) == "object" ? { [P]: (z = S[P]) == null ? void 0 : z.initial } : {};
      return { ...k, ...O, ...E, ...F };
    }, T = (P = [], F) => {
      let z = [];
      for (let { class: E, className: D, ...N } of P) {
        let j = !0;
        for (let [K, Y] of Object.entries(N)) {
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
        j && (E && z.push(E), D && z.push(D));
      }
      return z;
    }, L = (P) => {
      let F = T(v, P);
      if (!Array.isArray(F)) return F;
      let z = {};
      for (let E of F) if (typeof E == "string" && (z.base = Ke(z.base, E)(s)), typeof E == "object") for (let [D, N] of Object.entries(E)) z[D] = Ke(z[D], N)(s);
      return z;
    }, A = (P) => {
      if (n.length < 1) return null;
      let F = {};
      for (let { slots: z = [], class: E, className: D, ...N } of n) {
        if (!we(N)) {
          let j = !0;
          for (let K of Object.keys(N)) {
            let Y = $(K, P)[K];
            if (Y === void 0 || (Array.isArray(N[K]) ? !N[K].includes(Y) : N[K] !== Y)) {
              j = !1;
              break;
            }
          }
          if (!j) continue;
        }
        for (let j of z) F[j] = F[j] || [], F[j].push([E, D]);
      }
      return F;
    };
    if (!we(t) || !y) {
      let P = {};
      if (typeof b == "object" && !we(b)) for (let F of Object.keys(b)) P[F] = (z) => {
        var E, D;
        return Ke(b[F], I(F, z), ((E = L(z)) != null ? E : [])[F], ((D = A(z)) != null ? D : [])[F], z == null ? void 0 : z.class, z == null ? void 0 : z.className)(s);
      };
      return P;
    }
    return Ke(i, M(), T(v), S == null ? void 0 : S.class, S == null ? void 0 : S.className)(s);
  }, f = () => {
    if (!(!p || typeof p != "object")) return Object.keys(p);
  };
  return d.variantKeys = f(), d.extend = e, d.base = i, d.slots = b, d.variants = p, d.defaultVariants = k, d.compoundSlots = n, d.compoundVariants = v, d;
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
    const a = l, { values: e, setRef: t, onInput: r, onKeydown: o } = gl(a.length ?? 4), n = m(() => {
      var s, i;
      return a.unstyled ? ((s = a.pt) == null ? void 0 : s.container) || "flex gap-2" : (i = a.pt) != null && i.container ? `flex gap-2 ${a.pt.container}` : "flex gap-2";
    }), u = m(() => {
      var s, i;
      return a.unstyled ? ((s = a.pt) == null ? void 0 : s.input) || "" : ra({
        state: a.state,
        size: a.size,
        class: (i = a.pt) == null ? void 0 : i.input
      });
    });
    return (s, i) => (h(), x("div", {
      class: g(n.value)
    }, [
      (h(!0), x(ae, null, ne(C(e).length, (p, k) => He((h(), x("input", {
        key: k,
        "onUpdate:modelValue": (y) => C(e)[k] = y,
        ref_for: !0,
        ref: (y) => C(t)(y, k),
        class: g(u.value),
        maxlength: "1",
        onInput: (y) => C(r)(y, k),
        onKeydown: (y) => C(o)(y, k),
        type: "text",
        inputmode: "numeric",
        autocomplete: "one-time-code"
      }, null, 42, oa)), [
        [Wt, C(e)[k]]
      ])), 128))
    ], 2));
  }
}), sa = Q(na);
function ia(l) {
  const a = H(!1), e = (l == null ? void 0 : l.closeOnEsc) ?? !0, t = (l == null ? void 0 : l.closeOnOverlayClick) ?? !0, r = () => {
    a.value = !0;
  }, o = () => {
    var p;
    a.value = !1, (p = l == null ? void 0 : l.onClose) == null || p.call(l);
  }, n = H(null), u = H(null), s = (p) => {
    p.key === "Escape" && e && o();
  };
  return ee(a, (p) => {
    p ? (document.addEventListener("keydown", s), document.body.style.overflow = "hidden") : (document.removeEventListener("keydown", s), document.body.style.overflow = "");
  }), Re(() => {
    document.removeEventListener("keydown", s), document.body.style.overflow = "";
  }), {
    isOpen: a,
    open: r,
    close: o,
    modalRef: n,
    overlayRef: u,
    onOverlayClick: (p) => {
      p.target === u.value && t && o();
    }
  };
}
const da = R({
  base: "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center"
}), ua = R({
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
}), ga = R({
  base: "px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-2"
}), ba = R({
  base: "absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
}), va = /* @__PURE__ */ J({
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
    const e = l, t = a, r = _e(), { isOpen: o, open: n, close: u, modalRef: s, overlayRef: i, onOverlayClick: p } = ia({
      onClose: () => {
        t("close"), t("update:modelValue", !1);
      },
      closeOnEsc: e.closeOnEsc,
      closeOnOverlayClick: e.closeOnOverlayClick
    });
    be(async () => {
      await me(), e.modelValue && n();
    }), ee(
      () => e.modelValue,
      (M) => {
        M && !o.value ? n() : !M && o.value && u();
      }
    ), ee(o, (M) => {
      M !== e.modelValue && t("update:modelValue", M);
    });
    const k = () => {
      u();
    }, y = m(() => !!e.title || !!r.header), c = m(() => !!r.footer), b = m(() => {
      var M, I;
      return e.unstyled ? [(M = e.pt) == null ? void 0 : M.overlay, e.class].filter(Boolean) : [da({ class: (I = e.pt) == null ? void 0 : I.overlay }), e.class];
    }), v = m(() => {
      var M, I;
      return e.unstyled ? [(M = e.pt) == null ? void 0 : M.content, e.contentClass].filter(Boolean) : [
        ua({
          size: e.size,
          class: (I = e.pt) == null ? void 0 : I.content
        }),
        e.contentClass
      ];
    }), d = m(() => {
      var M, I;
      return e.unstyled ? [(M = e.pt) == null ? void 0 : M.header, e.headerClass].filter(Boolean) : [ca({ class: (I = e.pt) == null ? void 0 : I.header }), e.headerClass];
    }), f = m(() => {
      var M, I;
      return e.unstyled ? ((M = e.pt) == null ? void 0 : M.title) || "" : fa({ class: (I = e.pt) == null ? void 0 : I.title });
    }), S = m(() => {
      var M, I;
      return e.unstyled ? [(M = e.pt) == null ? void 0 : M.body, e.bodyClass].filter(Boolean) : [pa({ class: (I = e.pt) == null ? void 0 : I.body }), e.bodyClass];
    }), w = m(() => {
      var M, I;
      return e.unstyled ? [(M = e.pt) == null ? void 0 : M.footer, e.footerClass].filter(Boolean) : [ga({ class: (I = e.pt) == null ? void 0 : I.footer }), e.footerClass];
    }), B = m(() => {
      var M, I;
      return e.unstyled ? ((M = e.pt) == null ? void 0 : M.closeButton) || "" : ba({ class: (I = e.pt) == null ? void 0 : I.closeButton });
    });
    return (M, I) => (h(), Se(nt, { to: "body" }, [
      Be(Je, {
        name: "vk-modal",
        appear: ""
      }, {
        default: Pe(() => [
          C(o) ? (h(), x("div", {
            key: 0,
            class: g(b.value),
            ref_key: "overlayRef",
            ref: i,
            onClick: I[0] || (I[0] = //@ts-ignore
            (...O) => C(p) && C(p)(...O))
          }, [
            V("div", {
              class: g([v.value, "vk-modal-dialog"]),
              ref_key: "modalRef",
              ref: s,
              role: "dialog",
              "aria-modal": "true",
              tabindex: "-1"
            }, [
              y.value ? (h(), x("div", {
                key: 0,
                class: g(d.value)
              }, [
                G(M.$slots, "header", {}, () => [
                  V("h3", {
                    class: g(f.value)
                  }, U(e.title), 3)
                ], !0),
                M.hideCloseButton ? _("", !0) : (h(), x("button", {
                  key: 0,
                  class: g(B.value),
                  onClick: k,
                  "aria-label": "关闭"
                }, [
                  G(M.$slots, "close-icon", {}, () => [
                    I[1] || (I[1] = V("svg", {
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
                      V("line", {
                        x1: "18",
                        y1: "6",
                        x2: "6",
                        y2: "18"
                      }),
                      V("line", {
                        x1: "6",
                        y1: "6",
                        x2: "18",
                        y2: "18"
                      })
                    ], -1))
                  ], !0)
                ], 2))
              ], 2)) : _("", !0),
              V("div", {
                class: g(S.value)
              }, [
                G(M.$slots, "default", {}, void 0, !0)
              ], 2),
              c.value ? (h(), x("div", {
                key: 1,
                class: g(w.value)
              }, [
                G(M.$slots, "footer", {}, void 0, !0)
              ], 2)) : _("", !0)
            ], 2)
          ], 2)) : _("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), st = (l, a) => {
  const e = l.__vccOpts || l;
  for (const [t, r] of a)
    e[t] = r;
  return e;
}, ma = /* @__PURE__ */ st(va, [["__scopeId", "data-v-77a6943b"]]), ya = Q(ma);
function ha() {
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
const wa = R({
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
}), xa = ["src", "alt"], ka = ["src", "alt"], Ca = /* @__PURE__ */ J({
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
    const a = l, { isError: e, onLoad: t, onError: r } = ha(), o = m(() => {
      var y, c;
      return a.unstyled ? ((y = a.pt) == null ? void 0 : y.root) || "" : wa({
        size: a.size,
        shape: a.shape,
        status: a.status,
        class: (c = a.pt) == null ? void 0 : c.root
      });
    }), n = m(() => {
      var y;
      return a.unstyled ? ((y = a.pt) == null ? void 0 : y.image) || "" : "w-full h-full object-cover";
    }), u = m(() => {
      var y;
      return a.unstyled ? ((y = a.pt) == null ? void 0 : y.fallback) || "" : "w-full h-full flex items-center justify-center";
    }), s = m(() => {
      var y;
      return a.unstyled ? ((y = a.pt) == null ? void 0 : y.initials) || "" : "w-full h-full flex items-center justify-center";
    }), i = m(() => {
      var y;
      return a.unstyled ? ((y = a.pt) == null ? void 0 : y.icon) || "" : "w-1/2 h-1/2";
    }), p = m(() => a.alt ? a.alt.split(" ").map((y) => y.charAt(0)).slice(0, 2).join("").toUpperCase() : ""), k = m(() => !a.src || e.value);
    return (y, c) => (h(), x("div", {
      class: g(o.value)
    }, [
      k.value ? y.fallback ? (h(), x("span", {
        key: 1,
        class: g(u.value)
      }, [
        V("img", {
          src: y.fallback,
          alt: y.alt,
          class: g(n.value)
        }, null, 10, ka)
      ], 2)) : y.alt ? (h(), x("span", {
        key: 2,
        class: g(s.value)
      }, U(p.value), 3)) : (h(), x("span", {
        key: 3,
        class: g(u.value)
      }, [
        (h(), x("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          class: g(i.value)
        }, c[2] || (c[2] = [
          V("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }, null, -1),
          V("circle", {
            cx: "12",
            cy: "7",
            r: "4"
          }, null, -1)
        ]), 2))
      ], 2)) : (h(), x("img", {
        key: 0,
        src: y.src,
        alt: y.alt,
        class: g(n.value),
        onLoad: c[0] || (c[0] = //@ts-ignore
        (...b) => C(t) && C(t)(...b)),
        onError: c[1] || (c[1] = //@ts-ignore
        (...b) => C(r) && C(r)(...b))
      }, null, 42, xa))
    ], 2));
  }
}), za = Q(Ca);
function Sa(l) {
  const a = m(() => l.dot ? l.show !== !1 : l.show !== !1 && l.content !== void 0 && l.content !== ""), e = m(() => {
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
const Ba = R({
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
}), Va = /* @__PURE__ */ J({
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
    const a = l, { visible: e, positionClass: t } = Sa(a), r = m(() => {
      var u;
      return a.unstyled ? ((u = a.pt) == null ? void 0 : u.root) || "" : "relative inline-block";
    }), o = m(() => {
      var u, s;
      return a.unstyled ? ((u = a.pt) == null ? void 0 : u.badge) || "" : Ba({
        color: a.color,
        size: a.size,
        dot: a.dot,
        class: [t.value, (s = a.pt) == null ? void 0 : s.badge]
      });
    }), n = m(() => a.dot ? "" : typeof a.content == "number" && a.max && a.content > a.max ? `${a.max}+` : a.content);
    return (u, s) => (h(), x("div", {
      class: g(r.value)
    }, [
      G(u.$slots, "default"),
      C(e) ? (h(), x("span", {
        key: 0,
        class: g(o.value),
        role: "status",
        "aria-live": "polite"
      }, U(n.value), 3)) : _("", !0)
    ], 2));
  }
}), $a = Q(Va);
function Ia(l) {
  const a = H(l.modelValue ?? !1), e = () => {
    var r;
    l.disabled || (a.value = !a.value, (r = l.onChange) == null || r.call(l, a.value));
  };
  return ee(
    () => l.modelValue,
    (r) => {
      r !== void 0 && (a.value = r);
    }
  ), {
    checked: m(() => !!a.value),
    disabled: m(() => !!l.disabled),
    toggle: e,
    onKeyDown: (r) => {
      (r.key === "Enter" || r.key === " ") && (r.preventDefault(), e());
    }
  };
}
const Da = R({
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
}), Ma = ["aria-checked", "disabled"], Ta = /* @__PURE__ */ J({
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
    const e = l, t = a, { checked: r, toggle: o, onKeyDown: n } = Ia({
      modelValue: e.modelValue,
      disabled: e.disabled,
      onChange: (d) => t("update:modelValue", d)
    }), u = H(!1);
    ee(r, (d) => {
      d && (u.value = !0, setTimeout(() => {
        u.value = !1;
      }, 500));
    });
    const s = () => {
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
      const d = {
        blue: "bg-blue-600 dark:bg-blue-500",
        green: "bg-green-600 dark:bg-green-500",
        red: "bg-red-600 dark:bg-red-500",
        yellow: "bg-yellow-600 dark:bg-yellow-500",
        purple: "bg-purple-600 dark:bg-purple-500"
      };
      return d[e.color] || d.blue;
    }, p = () => {
      const d = {
        blue: "bg-blue-400/10",
        green: "bg-green-400/10",
        red: "bg-red-400/10",
        yellow: "bg-yellow-400/10",
        purple: "bg-purple-400/10"
      };
      return d[e.color] || d.blue;
    }, k = m(
      () => Da({
        checked: r.value,
        disabled: e.disabled,
        size: e.size,
        color: e.color
      })
    ), y = m(() => {
      var d, f;
      return e.unstyled ? ((d = e.pt) == null ? void 0 : d.root) || "" : k.value.root({ class: (f = e.pt) == null ? void 0 : f.root });
    }), c = m(() => {
      var d, f;
      return e.unstyled ? ((d = e.pt) == null ? void 0 : d.track) || "" : i() + ((f = e.pt) != null && f.track ? ` ${e.pt.track}` : "");
    }), b = m(() => {
      var d, f;
      return e.unstyled ? ((d = e.pt) == null ? void 0 : d.thumb) || "" : k.value.thumb({ class: (f = e.pt) == null ? void 0 : f.thumb });
    }), v = m(() => {
      var d, f;
      return e.unstyled ? ((d = e.pt) == null ? void 0 : d.ripple) || "" : p() + ((f = e.pt) != null && f.ripple ? ` ${e.pt.ripple}` : "");
    });
    return (d, f) => (h(), x("button", {
      type: "button",
      role: "switch",
      "aria-checked": C(r),
      disabled: e.disabled,
      onClick: f[0] || (f[0] = //@ts-ignore
      (...S) => C(o) && C(o)(...S)),
      onKeydown: f[1] || (f[1] = //@ts-ignore
      (...S) => C(n) && C(n)(...S)),
      class: g(y.value)
    }, [
      V("span", {
        class: g([
          c.value,
          "absolute inset-0 rounded-full transition-colors duration-300 ease-in-out"
        ])
      }, null, 2),
      V("span", {
        class: g([
          b.value,
          "transform transition-all duration-300 ease-in-out",
          s()
        ])
      }, [
        C(r) ? (h(), x("span", {
          key: 0,
          class: g(["absolute inset-0 bg-white rounded-full transition-all duration-300", {
            "opacity-100 scale-100": C(r),
            "opacity-0 scale-0": !C(r)
          }])
        }, null, 2)) : _("", !0)
      ], 2),
      V("span", {
        class: g(["absolute inset-0 transition-opacity duration-300", { "opacity-0": !C(r), "opacity-100": C(r) }])
      }, [
        V("span", {
          class: g(["absolute inset-0 rounded-full transform transition-transform duration-500", [
            v.value,
            { "scale-100": u.value, "scale-0": !u.value }
          ]])
        }, null, 2)
      ], 2)
    ], 42, Ma));
  }
}), Ra = /* @__PURE__ */ st(Ta, [["__scopeId", "data-v-dec8aa04"]]), Ea = Q(Ra);
function La(l) {
  const a = H(!1), e = (l == null ? void 0 : l.closeOnEsc) ?? !0, t = (l == null ? void 0 : l.closeOnOverlayClick) ?? !0, r = () => {
    var p;
    a.value = !0, (p = l == null ? void 0 : l.onOpen) == null || p.call(l);
  }, o = () => {
    var p;
    a.value = !1, (p = l == null ? void 0 : l.onClose) == null || p.call(l);
  }, n = H(null), u = H(null), s = (p) => {
    p.key === "Escape" && e && o();
  }, i = (p) => {
    p.target === u.value && t && o();
  };
  return ee(a, (p) => {
    p ? document.addEventListener("keydown", s) : document.removeEventListener("keydown", s);
  }), Re(() => {
    document.removeEventListener("keydown", s);
  }), {
    isOpen: a,
    open: r,
    close: o,
    overlayRef: u,
    drawerRef: n,
    onOverlayClick: i
  };
}
const Aa = R({
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
}), Oa = R({
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
}), Pa = R({
  base: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700"
}), ja = R({
  base: "text-lg font-medium text-gray-900 dark:text-white"
}), Fa = R({
  base: "p-1 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
}), Wa = R({
  base: "flex-1 p-4 overflow-y-auto"
}), Ha = R({
  base: "flex justify-end gap-2 p-4 border-t border-gray-200 dark:border-gray-700"
}), _a = ["aria-hidden", "aria-labelledby"], Na = /* @__PURE__ */ J({
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
    const e = l, t = a, r = _e(), { isOpen: o, close: n, open: u, drawerRef: s, overlayRef: i, onOverlayClick: p } = La({
      onClose: () => {
        t("update:modelValue", !1), t("close");
      },
      onOpen: () => {
        t("open");
      },
      closeOnEsc: e.closeOnEsc,
      closeOnOverlayClick: e.closeOnOverlayClick
    });
    ee(
      () => e.modelValue,
      ($) => {
        $ && !o.value ? u() : !$ && o.value && n();
      },
      { immediate: !0 }
    ), ee(o, ($) => {
      $ !== e.modelValue && t("update:modelValue", $);
    });
    const k = H("");
    ee(o, ($) => {
      e.preventScroll && ($ ? (k.value = document.body.style.overflow, document.body.style.overflow = "hidden") : document.body.style.overflow = k.value);
    }), Me(() => {
      e.preventScroll && o.value && (document.body.style.overflow = k.value);
    });
    const y = m(() => {
      var $, T;
      return e.unstyled ? [($ = e.pt) == null ? void 0 : $.overlay, e.overlayClass].filter(Boolean) : [
        Aa({
          open: o.value,
          class: (T = e.pt) == null ? void 0 : T.overlay
        }),
        e.overlayClass
      ];
    }), c = m(() => {
      var $, T;
      return e.unstyled ? [($ = e.pt) == null ? void 0 : $.container, e.contentClass, e.class].filter(
        Boolean
      ) : [
        Oa({
          placement: e.placement,
          open: o.value,
          class: (T = e.pt) == null ? void 0 : T.container
        }),
        e.contentClass,
        e.class
      ];
    }), b = m(() => {
      const $ = {
        zIndex: e.zIndex.toString()
      };
      if (!e.unstyled && e.size) {
        const T = typeof e.size == "number" ? `${e.size}px` : e.size;
        e.placement === "left" || e.placement === "right" ? $.width = T : $.height = T;
      }
      return $;
    }), v = m(() => {
      var $, T;
      return e.unstyled ? [($ = e.pt) == null ? void 0 : $.header, e.headerClass].filter(Boolean) : [Pa({ class: (T = e.pt) == null ? void 0 : T.header }), e.headerClass];
    }), d = m(() => {
      var $, T;
      return e.unstyled ? (($ = e.pt) == null ? void 0 : $.title) || "" : ja({ class: (T = e.pt) == null ? void 0 : T.title });
    }), f = m(() => {
      var $, T;
      return e.unstyled ? (($ = e.pt) == null ? void 0 : $.closeButton) || "" : Fa({ class: (T = e.pt) == null ? void 0 : T.closeButton });
    }), S = m(() => {
      var $, T;
      return e.unstyled ? [($ = e.pt) == null ? void 0 : $.body, e.bodyClass].filter(Boolean) : [Wa({ class: (T = e.pt) == null ? void 0 : T.body }), e.bodyClass];
    }), w = m(() => {
      var $, T;
      return e.unstyled ? [($ = e.pt) == null ? void 0 : $.footer, e.footerClass].filter(Boolean) : [Ha({ class: (T = e.pt) == null ? void 0 : T.footer }), e.footerClass];
    }), B = () => {
      n();
    }, M = m(() => !!e.title || !!r.header), I = m(() => !!r.footer), O = m(() => `vk-drawer-${e.placement}`);
    return ($, T) => (h(), Se(nt, { to: "body" }, [
      Be(Je, {
        name: "vk-drawer-overlay",
        appear: ""
      }, {
        default: Pe(() => [
          $.showOverlay && C(o) ? (h(), x("div", {
            key: 0,
            class: g(y.value),
            ref_key: "overlayRef",
            ref: i,
            onClick: T[0] || (T[0] = //@ts-ignore
            (...L) => C(p) && C(p)(...L)),
            role: "presentation",
            "aria-hidden": "true"
          }, null, 2)) : _("", !0)
        ]),
        _: 1
      }),
      Be(Je, {
        name: O.value,
        appear: ""
      }, {
        default: Pe(() => [
          C(o) ? (h(), x("div", {
            key: 0,
            class: g([c.value, "vk-drawer-panel"]),
            style: ue(b.value),
            ref_key: "drawerRef",
            ref: s,
            role: "dialog",
            "aria-modal": "true",
            "aria-hidden": !C(o),
            "aria-labelledby": $.title ? "drawer-title" : void 0
          }, [
            M.value ? (h(), x("div", {
              key: 0,
              class: g(v.value)
            }, [
              G($.$slots, "header", {}, () => [
                $.title ? (h(), x("h2", {
                  key: 0,
                  class: g(d.value),
                  id: "drawer-title"
                }, U($.title), 3)) : _("", !0)
              ], !0),
              $.hideCloseButton ? _("", !0) : (h(), x("button", {
                key: 0,
                class: g(f.value),
                onClick: B,
                "aria-label": "关闭",
                type: "button"
              }, [
                G($.$slots, "close-icon", {}, () => [
                  T[1] || (T[1] = V("svg", {
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
                    V("line", {
                      x1: "18",
                      y1: "6",
                      x2: "6",
                      y2: "18"
                    }),
                    V("line", {
                      x1: "6",
                      y1: "6",
                      x2: "18",
                      y2: "18"
                    })
                  ], -1))
                ], !0)
              ], 2))
            ], 2)) : _("", !0),
            V("div", {
              class: g(S.value)
            }, [
              G($.$slots, "default", {}, void 0, !0)
            ], 2),
            I.value ? (h(), x("div", {
              key: 1,
              class: g(w.value)
            }, [
              G($.$slots, "footer", {}, void 0, !0)
            ], 2)) : _("", !0)
          ], 14, _a)) : _("", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ]));
  }
}), Ga = /* @__PURE__ */ st(Na, [["__scopeId", "data-v-4d3052cd"]]), Ka = Q(Ga);
function Ya(l, a) {
  const e = H(
    a.modelValue !== void 0 ? a.modelValue : l[0]
  ), t = (n) => e.value === n, r = (n) => {
    var u;
    e.value = n, (u = a.onChange) == null || u.call(a, n);
  };
  return {
    selected: e,
    isSelected: t,
    select: r,
    onKeydown: (n) => {
      const u = l.indexOf(e.value);
      if (n.key === "ArrowRight" || n.key === "ArrowDown") {
        const s = l[(u + 1) % l.length];
        r(s);
      } else if (n.key === "ArrowLeft" || n.key === "ArrowUp") {
        const s = l[(u - 1 + l.length) % l.length];
        r(s);
      }
    }
  };
}
const Ua = R({
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
}), Xa = R({
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
}), qa = ["disabled", "aria-selected", "tabindex", "onClick"], Za = /* @__PURE__ */ J({
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
    const e = l, t = a, r = m(() => e.options.map((y) => typeof y == "object" ? {
      value: y.value,
      label: y.label,
      disabled: y.disabled || !1
    } : {
      value: y,
      label: String(y),
      disabled: !1
    })), o = m(() => r.value.map((y) => y.value)), { isSelected: n, select: u, onKeydown: s } = Ya(o.value, {
      modelValue: e.modelValue,
      onChange: (y) => {
        t("update:modelValue", y), t("change", y);
      }
    });
    ee(
      () => e.modelValue,
      (y) => {
        y !== void 0 && o.value.includes(y) && u(y);
      }
    );
    const i = m(() => {
      var y, c;
      return e.unstyled ? ((y = e.pt) == null ? void 0 : y.container) || "" : Ua({
        size: e.size,
        disabled: e.disabled,
        block: e.block,
        class: (c = e.pt) == null ? void 0 : c.container
      });
    }), p = (y, c) => {
      var b, v;
      return e.unstyled ? ((b = e.pt) == null ? void 0 : b.option) || "" : Xa({
        selected: n(y),
        disabled: e.disabled || c,
        size: e.size,
        class: (v = e.pt) == null ? void 0 : v.option
      });
    }, k = (y, c) => {
      e.disabled || c || u(y);
    };
    return (y, c) => (h(), x("div", {
      class: g(i.value),
      role: "tablist",
      onKeydown: c[0] || (c[0] = //@ts-ignore
      (...b) => C(s) && C(s)(...b))
    }, [
      (h(!0), x(ae, null, ne(r.value, (b) => (h(), x("button", {
        key: String(b.value),
        class: g(p(b.value, b.disabled)),
        disabled: e.disabled || b.disabled,
        "aria-selected": C(n)(b.value),
        tabindex: C(n)(b.value) ? 0 : -1,
        role: "tab",
        type: "button",
        onClick: (v) => k(b.value, b.disabled)
      }, U(b.label), 11, qa))), 128))
    ], 34));
  }
}), Ja = Q(Za);
function Qa(l) {
  const a = H(null), e = H(null), t = l.min ?? 0, r = l.max ?? 100, o = l.step ?? 1, n = l.orientation ?? "horizontal", u = H(l.modelValue ?? t), s = m(() => (u.value - t) / (r - t) * 100), i = (c) => {
    var d;
    const b = Math.round(c / o) * o, v = Math.min(r, Math.max(t, b));
    u.value = v, (d = l.onChange) == null || d.call(l, v);
  }, p = (c) => {
    const b = a.value;
    if (!b) return;
    const v = b.getBoundingClientRect(), d = n === "horizontal" ? (c.clientX - v.left) / v.width : 1 - (c.clientY - v.top) / v.height;
    i(t + d * (r - t));
  }, k = (c) => {
    c.key === "ArrowRight" || c.key === "ArrowUp" ? (c.preventDefault(), i(u.value + o)) : (c.key === "ArrowLeft" || c.key === "ArrowDown") && (c.preventDefault(), i(u.value - o));
  }, y = (c) => {
    c.preventDefault();
    const b = (d) => {
      const f = a.value;
      if (!f) return;
      const S = f.getBoundingClientRect(), w = n === "horizontal" ? (d.clientX - S.left) / S.width : 1 - (d.clientY - S.top) / S.height;
      i(t + w * (r - t));
    }, v = () => {
      window.removeEventListener("mousemove", b), window.removeEventListener("mouseup", v);
    };
    window.addEventListener("mousemove", b), window.addEventListener("mouseup", v);
  };
  return ee(
    () => l.modelValue,
    (c) => {
      c != null && (u.value = c);
    }
  ), {
    value: u,
    percent: s,
    trackRef: a,
    thumbRef: e,
    onTrackClick: p,
    onThumbKeyDown: k,
    onThumbMouseDown: y
  };
}
const er = R({
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
}), tr = R({
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
}), lr = R({
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
}), ar = R({
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
}), rr = R({
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
}), or = R({
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
}), nr = R({
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
}), sr = R({
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
}), ir = ["aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-orientation", "aria-disabled", "tabindex"], dr = /* @__PURE__ */ J({
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
      trackRef: n,
      thumbRef: u,
      onTrackClick: s,
      onThumbKeyDown: i,
      onThumbMouseDown: p
    } = Qa({
      min: e.min,
      max: e.max,
      step: e.step,
      orientation: e.orientation,
      modelValue: e.modelValue,
      onChange: (z) => {
        t("update:modelValue", z), t("change", z);
      }
    }), k = m(() => {
      var z, E;
      return e.unstyled ? ((z = e.pt) == null ? void 0 : z.container) || "" : er({
        orientation: e.orientation,
        disabled: e.disabled,
        class: (E = e.pt) == null ? void 0 : E.container
      });
    }), y = m(() => {
      var z, E;
      return e.unstyled ? ((z = e.pt) == null ? void 0 : z.track) || "" : tr({
        orientation: e.orientation,
        disabled: e.disabled,
        class: (E = e.pt) == null ? void 0 : E.track
      });
    }), c = m(() => {
      var z, E;
      return e.unstyled ? ((z = e.pt) == null ? void 0 : z.fill) || "" : lr({
        orientation: e.orientation,
        disabled: e.disabled,
        class: (E = e.pt) == null ? void 0 : E.fill
      });
    }), b = m(() => {
      var z, E;
      return e.unstyled ? ((z = e.pt) == null ? void 0 : z.thumb) || "" : ar({
        orientation: e.orientation,
        disabled: e.disabled,
        class: (E = e.pt) == null ? void 0 : E.thumb
      });
    }), v = m(() => e.orientation === "horizontal" ? { width: `${o.value}%` } : { height: `${o.value}%` }), d = m(() => e.orientation === "horizontal" ? { left: `${o.value}%` } : { bottom: `${o.value}%` }), f = H(!1), S = m(() => {
      var z, E;
      return e.unstyled ? ((z = e.pt) == null ? void 0 : z.tooltip) || "" : rr({
        orientation: e.orientation,
        visible: e.showTooltip && f.value,
        class: (E = e.pt) == null ? void 0 : E.tooltip
      });
    }), w = () => {
      e.disabled || (f.value = !0);
    }, B = () => {
      f.value = !1;
    }, M = m(() => e.formatTooltip ? e.formatTooltip(r.value) : r.value.toString()), I = m(() => {
      var z, E;
      return e.unstyled ? ((z = e.pt) == null ? void 0 : z.marks) || "" : or({
        orientation: e.orientation,
        class: (E = e.pt) == null ? void 0 : E.marks
      });
    }), O = m(() => {
      if (!e.showMarks) return [];
      if (e.marks)
        return Object.entries(e.marks).map(([N, j]) => ({
          value: Number(N),
          label: j,
          percent: (Number(N) - e.min) / (e.max - e.min) * 100,
          active: r.value >= Number(N)
        }));
      const z = Math.floor((e.max - e.min) / e.step), E = z > 10 ? Math.floor(z / 5) : 1, D = [];
      for (let N = 0; N <= z; N += E) {
        const j = e.min + N * e.step;
        D.push({
          value: j,
          label: j.toString(),
          percent: N / z * 100,
          active: r.value >= j
        });
      }
      return D;
    }), $ = (z) => {
      var E, D;
      return e.unstyled ? ((E = e.pt) == null ? void 0 : E.mark) || "" : nr({
        orientation: e.orientation,
        active: z,
        class: (D = e.pt) == null ? void 0 : D.mark
      });
    }, T = (z) => e.orientation === "horizontal" ? { left: `${z}%` } : { bottom: `${z}%` }, L = () => {
      var z, E;
      return e.unstyled ? ((z = e.pt) == null ? void 0 : z.markLabel) || "" : sr({
        orientation: e.orientation,
        class: (E = e.pt) == null ? void 0 : E.markLabel
      });
    }, A = (z) => {
      e.disabled || s(z);
    }, P = (z) => {
      e.disabled || i(z);
    }, F = (z) => {
      if (e.disabled) return;
      p(z), w();
      const E = () => {
        B(), window.removeEventListener("mouseup", E);
      };
      window.addEventListener("mouseup", E);
    };
    return (z, E) => (h(), x("div", {
      class: g(k.value)
    }, [
      V("div", {
        class: g(y.value),
        ref_key: "trackRef",
        ref: n,
        onClick: A
      }, [
        V("div", {
          class: g(c.value),
          style: ue(v.value)
        }, null, 6),
        z.showMarks ? (h(), x("div", {
          key: 0,
          class: g(I.value)
        }, [
          (h(!0), x(ae, null, ne(O.value, (D) => (h(), x("div", {
            key: D.value,
            class: g($(D.active)),
            style: ue(T(D.percent))
          }, [
            V("span", {
              class: g(L)
            }, U(D.label), 1)
          ], 6))), 128))
        ], 2)) : _("", !0)
      ], 2),
      V("div", {
        class: g(b.value),
        style: ue(d.value),
        ref_key: "thumbRef",
        ref: u,
        onMousedown: F,
        onKeydown: P,
        onMouseover: w,
        onMouseleave: B,
        role: "slider",
        "aria-valuemin": z.min,
        "aria-valuemax": z.max,
        "aria-valuenow": C(r),
        "aria-orientation": z.orientation,
        "aria-disabled": z.disabled,
        tabindex: z.disabled ? -1 : 0
      }, [
        z.showTooltip ? (h(), x("div", {
          key: 0,
          class: g(S.value)
        }, U(M.value), 3)) : _("", !0)
      ], 46, ir)
    ], 2));
  }
}), ur = Q(dr), cr = R({
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
}), fr = R({
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
}), pr = R({
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
}), gr = R({
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
}), br = R({
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
}), vr = { class: "popover-inner" }, mr = /* @__PURE__ */ J({
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
    const t = l, r = e, o = H(!1), n = H(null), u = H(null), s = `popover-${Math.random().toString(36).slice(2, 9)}`;
    let i = null, p = null;
    const k = H(0), y = H(0), c = async () => {
      p && clearTimeout(p), !t.disabled && (i = setTimeout(() => {
        o.value = !0, r("update:modelValue", !0), me(f);
      }, t.openDelay));
    }, b = () => {
      i && clearTimeout(i), !t.disabled && (p = setTimeout(() => {
        o.value = !1, r("update:modelValue", !1);
      }, t.closeDelay));
    }, v = () => {
      o.value ? b() : c();
    }, d = (W) => {
      W ? c() : b();
    }, f = () => {
      const W = u.value;
      if (!W || !o.value) return;
      const Z = k.value, le = y.value;
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
        S(W, ye, ie);
        return;
      }
      const te = n.value;
      if (!te) return;
      const se = te.getBoundingClientRect(), de = W.getBoundingClientRect();
      let fe = 0, ve = 0;
      const pe = se.left + se.width / 2, ze = se.top + se.height / 2;
      switch (t.placement) {
        case "top":
          fe = se.top - de.height - t.offset, ve = pe - de.width / 2;
          break;
        case "right":
          fe = ze - de.height / 2, ve = se.right + t.offset;
          break;
        case "bottom":
          fe = se.bottom + t.offset, ve = pe - de.width / 2;
          break;
        case "left":
          fe = ze - de.height / 2, ve = se.left - de.width - t.offset;
          break;
      }
      S(W, fe, ve);
    }, S = (W, Z, le) => {
      var se;
      const te = W.querySelector(
        '[class*="popoverArrow"]'
      );
      if (le = Math.max(8, le), le = Math.min(le, window.innerWidth - W.offsetWidth - 8), Z = Math.max(8, Z), Z = Math.min(Z, window.innerHeight - W.offsetHeight - 8), W.style.position = "fixed", W.style.top = `${Z}px`, W.style.left = `${le}px`, W.style.zIndex = ((se = t.zIndex) == null ? void 0 : se.toString()) || "1000", W.style.transition = "none", te && t.showArrow && !t.followCursor && !t.unbound) {
        const de = n.value;
        if (!de) return;
        const fe = de.getBoundingClientRect(), ve = W.getBoundingClientRect(), pe = getComputedStyle(W).borderColor;
        switch (t.placement) {
          case "top":
          case "bottom": {
            const ye = fe.left + fe.width / 2 - le, ie = 12, je = ve.width - 12, Fe = Math.max(
              ie,
              Math.min(je, ye)
            );
            te.style.left = `${Fe}px`, te.style.transform = "rotate(45deg)", t.placement === "top" ? (te.style.borderRight = `1px solid ${pe}`, te.style.borderBottom = `1px solid ${pe}`, te.style.borderLeft = "none", te.style.borderTop = "none") : (te.style.borderLeft = `1px solid ${pe}`, te.style.borderTop = `1px solid ${pe}`, te.style.borderRight = "none", te.style.borderBottom = "none");
            break;
          }
          case "left":
          case "right": {
            const ye = fe.top + fe.height / 2 - Z, ie = 12, je = ve.height - 12, Fe = Math.max(
              ie,
              Math.min(je, ye)
            );
            te.style.top = `${Fe}px`, te.style.transform = "rotate(45deg)", t.placement === "left" ? (te.style.borderRight = `1px solid ${pe}`, te.style.borderBottom = `1px solid ${pe}`, te.style.borderLeft = "none", te.style.borderTop = "none") : (te.style.borderLeft = `1px solid ${pe}`, te.style.borderTop = `1px solid ${pe}`, te.style.borderRight = "none", te.style.borderBottom = "none");
            break;
          }
        }
      }
    }, w = (W) => {
      k.value = W.clientX, y.value = W.clientY, (t.followCursor || t.unbound) && o.value && f();
    }, B = () => {
      o.value && f();
    }, M = () => {
      o.value && f();
    }, I = () => {
      t.disabled || (t.trigger === "click" || t.trigger === "manual") && v();
    }, O = (W) => {
      t.disabled || (k.value = W.clientX, y.value = W.clientY, t.trigger === "hover" && c());
    }, $ = () => {
      t.disabled || t.trigger === "hover" && b();
    }, T = () => {
      t.disabled || c();
    }, L = () => {
      t.disabled || b();
    }, A = (W) => {
      var Z, le;
      o.value && !((Z = u.value) != null && Z.contains(W.target)) && !((le = n.value) != null && le.contains(W.target)) && b();
    }, P = m(() => {
      var W, Z;
      return t.unstyled ? ((W = t.pt) == null ? void 0 : W.container) || "relative inline-block" : (Z = t.pt) != null && Z.container ? `relative inline-block ${t.pt.container}` : "relative inline-block";
    }), F = m(() => {
      var W, Z;
      return t.unstyled ? ((W = t.pt) == null ? void 0 : W.trigger) || "inline-block" : cr({
        disabled: t.disabled,
        class: (Z = t.pt) == null ? void 0 : Z.trigger
      });
    }), z = m(() => {
      var W, Z;
      return t.unstyled ? ((W = t.pt) == null ? void 0 : W.content) || "" : fr({
        placement: t.placement,
        visible: o.value,
        color: t.color,
        class: (Z = t.pt) == null ? void 0 : Z.content
      });
    }), E = m(() => {
      var W, Z;
      return t.unstyled ? ((W = t.pt) == null ? void 0 : W.arrow) || "" : pr({
        placement: t.placement,
        color: t.color,
        class: (Z = t.pt) == null ? void 0 : Z.arrow
      });
    }), D = m(() => {
      var W, Z;
      return t.unstyled ? ((W = t.pt) == null ? void 0 : W.title) || "" : gr({
        color: t.color,
        class: (Z = t.pt) == null ? void 0 : Z.title
      });
    }), N = m(() => {
      var W, Z;
      return t.unstyled ? ((W = t.pt) == null ? void 0 : W.body) || "" : br({
        color: t.color,
        class: (Z = t.pt) == null ? void 0 : Z.body
      });
    }), j = m(() => {
      var Z;
      const W = {
        zIndex: ((Z = t.zIndex) == null ? void 0 : Z.toString()) || "1000",
        transition: "none",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        maxWidth: "280px",
        overflow: "hidden"
      };
      return t.width && (W.width = typeof t.width == "number" ? `${t.width}px` : t.width), W;
    }), K = m(() => t.teleport === !1 ? null : typeof t.teleport == "string" ? t.teleport : "body"), Y = () => {
      window.addEventListener("resize", B), window.addEventListener("scroll", M, !0), document.addEventListener("click", A), window.addEventListener("mousemove", w);
    }, oe = () => {
      window.removeEventListener("resize", B), window.removeEventListener("scroll", M, !0), document.removeEventListener("click", A), window.removeEventListener("mousemove", w);
    };
    return be(() => {
      Y(), t.modelValue && me(() => {
        d(!0);
      });
    }), Re(() => {
      oe(), i && clearTimeout(i), p && clearTimeout(p);
    }), ee(
      () => t.modelValue,
      (W) => {
        W !== o.value && d(W);
      }
    ), ee(o, (W) => {
      W && me(f), r("update:modelValue", W);
    }), ee(
      () => [t.placement, t.offset, t.followCursor, t.unbound],
      () => {
        o.value && me(f);
      }
    ), a({
      show: () => d(!0),
      hide: () => d(!1),
      toggle: v,
      updatePosition: f
    }), (W, Z) => (h(), x("div", {
      class: g(P.value),
      onMousemove: w
    }, [
      W.unbound ? _("", !0) : (h(), x("div", {
        key: 0,
        ref_key: "triggerRef",
        ref: n,
        class: g(F.value),
        "aria-describedby": s,
        onClick: I,
        onMouseenter: O,
        onMouseleave: $,
        onFocus: T,
        onBlur: L
      }, [
        G(W.$slots, "trigger")
      ], 34)),
      (h(), Se(nt, {
        to: K.value,
        disabled: !K.value
      }, [
        o.value && !W.disabled ? (h(), x("div", {
          key: 0,
          ref_key: "popoverRef",
          ref: u,
          class: g(z.value),
          style: ue(j.value),
          id: s,
          role: "tooltip",
          "aria-live": "polite"
        }, [
          W.showArrow && !W.followCursor && !W.unbound ? (h(), x("div", {
            key: 0,
            class: g(E.value)
          }, null, 2)) : _("", !0),
          V("div", vr, [
            W.title ? (h(), x("div", {
              key: 0,
              class: g(D.value)
            }, U(W.title), 3)) : _("", !0),
            V("div", {
              class: g(N.value)
            }, [
              G(W.$slots, "default", {}, () => [
                ce(U(W.content), 1)
              ])
            ], 2)
          ])
        ], 6)) : _("", !0)
      ], 8, ["to", "disabled"]))
    ], 34));
  }
}), yr = Q(mr);
function hr(l) {
  const a = H(!1), e = H(null), t = H(null);
  let r = null, o = null, n = 0, u = 0;
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
  }, p = (I) => {
    n = I.clientX, u = I.clientY, (i.followCursor || i.unbound) && a.value && b();
  }, k = () => {
    o && clearTimeout(o), r = setTimeout(() => {
      a.value = !0, requestAnimationFrame(b);
    }, i.openDelay);
  }, y = () => {
    r && clearTimeout(r), o = setTimeout(() => {
      a.value = !1;
    }, i.closeDelay);
  }, c = (I) => {
    I ? k() : y();
  }, b = () => {
    if (!a.value || !t.value || !i.unbound && !i.followCursor && !e.value) return;
    const I = t.value, O = I.getBoundingClientRect();
    let $ = 0, T = 0;
    const L = i.offset;
    if (i.followCursor || i.unbound)
      switch (i.placement) {
        case "top":
          $ = u - O.height - L, T = n - O.width / 2;
          break;
        case "right":
          $ = u - O.height / 2, T = n + L;
          break;
        case "bottom":
          $ = u + L, T = n - O.width / 2;
          break;
        case "left":
          $ = u - O.height / 2, T = n - O.width - L;
          break;
      }
    else {
      const P = e.value.getBoundingClientRect();
      switch (i.placement) {
        case "top":
          $ = P.top - O.height - L, T = P.left + P.width / 2 - O.width / 2;
          break;
        case "right":
          $ = P.top + P.height / 2 - O.height / 2, T = P.right + L;
          break;
        case "bottom":
          $ = P.bottom + L, T = P.left + P.width / 2 - O.width / 2;
          break;
        case "left":
          $ = P.top + P.height / 2 - O.height / 2, T = P.left - O.width - L;
          break;
      }
    }
    T = Math.max(8, T), T = Math.min(T, window.innerWidth - O.width - 8), $ = Math.max(8, $), $ = Math.min($, window.innerHeight - O.height - 8), I.style.position = "fixed", I.style.top = "0", I.style.left = "0", I.style.transform = `translate3d(${T}px, ${$}px, 0)`, I.style.zIndex = "9999";
  }, v = () => {
    a.value && b();
  }, d = () => {
    a.value && b();
  };
  ee(a, (I) => {
    I ? (window.addEventListener("resize", v), window.addEventListener("scroll", d, !0), (i.followCursor || i.unbound) && window.addEventListener("mousemove", p)) : (window.removeEventListener("resize", v), window.removeEventListener("scroll", d, !0), (i.followCursor || i.unbound) && window.removeEventListener("mousemove", p));
  }), ee(e, (I) => {
    I && a.value && !i.unbound && b();
  }), be(() => {
    (i.followCursor || i.unbound) && window.addEventListener("mousemove", p);
  });
  const f = (I) => {
    n = I.clientX, u = I.clientY, k();
  }, S = () => k(), w = () => y(), B = () => y();
  Re(() => {
    r && clearTimeout(r), o && clearTimeout(o), window.removeEventListener("resize", v), window.removeEventListener("scroll", d, !0), (i.followCursor || i.unbound) && window.removeEventListener("mousemove", p);
  });
  const M = `tooltip-${Math.random().toString(36).slice(2, 9)}`;
  return {
    isOpen: a,
    triggerRef: e,
    tooltipRef: t,
    tooltipId: M,
    updatePosition: b,
    onMouseEnter: f,
    onFocus: S,
    onMouseLeave: w,
    onBlur: B,
    setIsOpen: c
  };
}
const wr = R({
  base: "inline-block"
}), xr = R({
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
}), kr = R({
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
}), Cr = ["aria-describedby"], zr = ["id"], Sr = /* @__PURE__ */ J({
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
    const t = l, r = e, o = H(0), n = H(0), u = H(!1), s = hr({
      openDelay: t.openDelay,
      closeDelay: t.closeDelay,
      placement: t.placement,
      offset: t.offset,
      followCursor: t.followCursor,
      unbound: t.unbound
    }), i = s.isOpen, p = s.triggerRef, k = s.tooltipRef, y = s.tooltipId, c = s.setIsOpen, b = () => {
      u.value = !0, c(!0), me(() => {
        M();
      });
    }, v = () => {
      u.value = !1, c(!1);
    }, d = () => {
      u.value ? v() : b();
    }, f = m(() => {
      var D, N;
      return t.unstyled ? ((D = t.pt) == null ? void 0 : D.container) || "" : wr({
        class: (N = t.pt) == null ? void 0 : N.container
      });
    }), S = m(() => {
      var D, N;
      return t.unstyled ? ((D = t.pt) == null ? void 0 : D.content) || "" : xr({
        color: t.color,
        visible: !0,
        class: (N = t.pt) == null ? void 0 : N.content
      });
    }), w = m(() => {
      var D, N;
      return t.unstyled ? ((D = t.pt) == null ? void 0 : D.arrow) || "" : kr({
        color: t.color,
        placement: t.placement,
        class: (N = t.pt) == null ? void 0 : N.arrow
      });
    }), B = m(() => {
      const D = {};
      return t.maxWidth && (D.maxWidth = typeof t.maxWidth == "number" ? `${t.maxWidth}px` : t.maxWidth), D;
    }), M = () => {
      const D = k.value;
      if (!D || !i.value) return;
      const N = o.value, j = n.value;
      if (t.followCursor || t.unbound) {
        let Z = 0, le = 0;
        switch (t.placement) {
          case "top":
            Z = j - D.offsetHeight - t.offset, le = N - D.offsetWidth / 2;
            break;
          case "right":
            Z = j - D.offsetHeight / 2, le = N + t.offset;
            break;
          case "bottom":
            Z = j + t.offset, le = N - D.offsetWidth / 2;
            break;
          case "left":
            Z = j - D.offsetHeight / 2, le = N - D.offsetWidth - t.offset;
            break;
        }
        I(D, Z, le);
        return;
      }
      const K = p.value;
      if (!K) return;
      const Y = K.getBoundingClientRect();
      let oe = 0, W = 0;
      switch (t.placement) {
        case "top":
          oe = Y.top - D.offsetHeight - t.offset, W = Y.left + Y.width / 2 - D.offsetWidth / 2;
          break;
        case "right":
          oe = Y.top + Y.height / 2 - D.offsetHeight / 2, W = Y.right + t.offset;
          break;
        case "bottom":
          oe = Y.bottom + t.offset, W = Y.left + Y.width / 2 - D.offsetWidth / 2;
          break;
        case "left":
          oe = Y.top + Y.height / 2 - D.offsetHeight / 2, W = Y.left - D.offsetWidth - t.offset;
          break;
      }
      I(D, oe, W);
    }, I = (D, N, j) => {
      j = Math.max(8, j), j = Math.min(j, window.innerWidth - D.offsetWidth - 8), N = Math.max(8, N), N = Math.min(N, window.innerHeight - D.offsetHeight - 8), D.style.position = "fixed", D.style.top = `${N}px`, D.style.left = `${j}px`, D.style.zIndex = "9999", D.style.transition = "none";
    }, O = (D) => {
      o.value = D.clientX, n.value = D.clientY, i.value && (t.followCursor || t.unbound) && M();
    }, $ = () => {
      i.value && M();
    }, T = () => {
      i.value && M();
    }, L = (D) => {
      t.disabled || (o.value = D.clientX, n.value = D.clientY, (t.trigger === "hover" || t.trigger === "both") && (c(!0), me(M)));
    }, A = () => {
      t.disabled || (t.trigger === "focus" || t.trigger === "both") && (c(!0), me(M));
    }, P = () => {
      t.disabled || (t.trigger === "hover" || t.trigger === "both") && c(!1);
    }, F = () => {
      t.disabled || (t.trigger === "focus" || t.trigger === "both") && c(!1);
    }, z = () => {
      window.addEventListener("mousemove", O), window.addEventListener("resize", $), window.addEventListener("scroll", T, !0);
    }, E = () => {
      window.removeEventListener("mousemove", O), window.removeEventListener("resize", $), window.removeEventListener("scroll", T, !0);
    };
    return be(() => {
      z(), t.unbound && t.modelValue && (u.value = !0, c(!0), me(M));
    }), Re(() => {
      E();
    }), ee(i, (D) => {
      D && me(M), t.unbound && (r("update:modelValue", D), u.value = D);
    }), ee(
      () => t.modelValue,
      (D) => {
        t.unbound && (u.value = D, c(D), D && me(M));
      }
    ), a({
      show: b,
      hide: v,
      toggle: d,
      updatePosition: M
    }), (D, N) => (h(), x(ae, null, [
      D.unbound ? _("", !0) : (h(), x("span", {
        key: 0,
        ref_key: "triggerRef",
        ref: p,
        onMouseenter: L,
        onMouseleave: P,
        onFocus: A,
        onBlur: F,
        "aria-describedby": C(y),
        class: g(f.value),
        role: "button",
        tabindex: "0"
      }, [
        G(D.$slots, "default")
      ], 42, Cr)),
      (h(), Se(nt, { to: "body" }, [
        C(i) && !D.disabled ? (h(), x("div", {
          key: 0,
          ref_key: "tooltipRef",
          ref: k,
          class: g(S.value),
          style: ue(B.value),
          id: C(y),
          role: "tooltip",
          "aria-live": "polite"
        }, [
          G(D.$slots, "content", {}, () => [
            ce(U(D.content), 1)
          ]),
          D.arrow && !D.followCursor && !D.unbound ? (h(), x("div", {
            key: 0,
            class: g(w.value)
          }, null, 2)) : _("", !0)
        ], 14, zr)) : _("", !0)
      ]))
    ], 64));
  }
}), Br = Q(Sr);
function Vr(l) {
  const a = H(l.modelValue ?? !1), e = () => {
    var n;
    l.disabled || !l.selectable || (a.value = !a.value, (n = l.onChange) == null || n.call(l, a.value));
  }, t = (n) => {
    var u;
    l.disabled || (n.stopPropagation(), (u = l.onClose) == null || u.call(l, n));
  }, r = m(() => a.value), o = m(() => l.closable || !!l.onClose);
  return {
    isSelected: r,
    isClosable: o,
    toggle: e,
    handleClose: t
  };
}
const $r = R({
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
}), Ir = ["aria-selected"], Dr = ["disabled"], Mr = /* @__PURE__ */ J({
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
    const e = l, t = a, { isSelected: r, isClosable: o, toggle: n, handleClose: u } = Vr({
      modelValue: e.modelValue,
      selectable: e.selectable,
      disabled: e.disabled,
      closable: e.closable,
      onClose: (v) => t("close", v),
      onChange: (v) => t("update:modelValue", v)
    }), s = m(() => {
      var v, d;
      return e.unstyled ? ((v = e.pt) == null ? void 0 : v.root) || "" : $r({
        variant: e.variant,
        color: e.color,
        size: e.size,
        radius: e.radius,
        selected: r.value,
        disabled: e.disabled,
        class: (d = e.pt) == null ? void 0 : d.root
      });
    }), i = m(() => {
      var d, f;
      return e.unstyled ? ((d = e.pt) == null ? void 0 : d.dot) || "" : [
        "mr-1.5 h-2 w-2 rounded-full",
        {
          default: "bg-zinc-500",
          primary: "bg-blue-500",
          secondary: "bg-purple-500",
          success: "bg-green-500",
          warning: "bg-yellow-500",
          danger: "bg-red-500"
        }[e.color || "default"],
        (f = e.pt) == null ? void 0 : f.dot
      ];
    }), p = m(() => {
      var v;
      return e.unstyled ? ((v = e.pt) == null ? void 0 : v.avatar) || "" : "flex shrink-0 mr-1.5";
    }), k = m(() => {
      var v;
      return e.unstyled ? ((v = e.pt) == null ? void 0 : v.startContent) || "" : "flex shrink-0 mr-1.5";
    }), y = m(() => {
      var v;
      return e.unstyled ? ((v = e.pt) == null ? void 0 : v.content) || "" : "truncate";
    }), c = m(() => {
      var v;
      return e.unstyled ? ((v = e.pt) == null ? void 0 : v.endContent) || "" : "flex shrink-0 ml-1.5";
    }), b = m(() => {
      var v;
      return e.unstyled ? ((v = e.pt) == null ? void 0 : v.closeButton) || "" : "ml-1.5 flex-shrink-0 flex items-center justify-center rounded-full hover:bg-black/5 focus:outline-none focus:bg-black/10 w-4 h-4";
    });
    return (v, d) => (h(), x("span", {
      class: g(s.value),
      role: "option",
      "aria-selected": C(r),
      onClick: d[1] || (d[1] = //@ts-ignore
      (...f) => C(n) && C(n)(...f))
    }, [
      v.variant === "dot" ? (h(), x("span", {
        key: 0,
        class: g(i.value)
      }, null, 2)) : _("", !0),
      v.$slots.avatar ? G(v.$slots, "avatar", {
        key: 1,
        class: g(p.value)
      }) : v.avatar ? G(v.$slots, "avatarFallback", {
        key: 2,
        class: g(p.value)
      }, () => [
        V("span", {
          class: g(p.value)
        }, [
          (h(), Se(Ze(v.avatar)))
        ], 2)
      ]) : _("", !0),
      v.$slots.startContent ? G(v.$slots, "startContent", {
        key: 3,
        class: g(k.value)
      }) : v.startContent ? G(v.$slots, "startContentFallback", {
        key: 4,
        class: g(k.value)
      }, () => [
        V("span", {
          class: g(k.value)
        }, [
          (h(), Se(Ze(v.startContent)))
        ], 2)
      ]) : _("", !0),
      V("span", {
        class: g(y.value)
      }, [
        G(v.$slots, "default")
      ], 2),
      v.$slots.endContent ? G(v.$slots, "endContent", {
        key: 5,
        class: g(c.value)
      }) : v.endContent ? G(v.$slots, "endContentFallback", {
        key: 6,
        class: g(c.value)
      }, () => [
        V("span", {
          class: g(c.value)
        }, [
          (h(), Se(Ze(v.endContent)))
        ], 2)
      ]) : _("", !0),
      C(o) ? (h(), x("button", {
        key: 7,
        type: "button",
        class: g(b.value),
        onClick: d[0] || (d[0] = Ce(
          //@ts-ignore
          (...f) => C(u) && C(u)(...f),
          ["stop"]
        )),
        "aria-label": "关闭",
        disabled: v.disabled
      }, d[2] || (d[2] = [
        V("svg", {
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
          V("line", {
            x1: "18",
            y1: "6",
            x2: "6",
            y2: "18"
          }),
          V("line", {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "18"
          })
        ], -1)
      ]), 10, Dr)) : _("", !0)
    ], 10, Ir));
  }
}), Tr = Q(Mr), Rr = R({
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
}), Er = R({
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
}), Lr = R({
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
}), Ar = R({
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
}), Or = R({
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
}), Pr = ["innerHTML"], jr = { class: "flex-1" }, Fr = /* @__PURE__ */ J({
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
    const e = l, t = a, r = H(!0), o = () => {
      r.value = !1, t("close");
    }, n = m(
      () => {
        var y, c;
        return e.unstyled ? ((y = e.pt) == null ? void 0 : y.root) || "" : Rr({
          variant: e.variant,
          size: e.size,
          rounded: e.rounded,
          border: e.border,
          shadow: e.shadow,
          class: [e.class, (c = e.pt) == null ? void 0 : c.root]
        });
      }
    ), u = m(
      () => {
        var y, c;
        return e.unstyled ? ((y = e.pt) == null ? void 0 : y.icon) || "" : Er({
          variant: e.variant,
          size: e.size,
          class: (c = e.pt) == null ? void 0 : c.icon
        });
      }
    ), s = m(
      () => {
        var y, c;
        return e.unstyled ? ((y = e.pt) == null ? void 0 : y.title) || "" : Lr({
          size: e.size,
          class: (c = e.pt) == null ? void 0 : c.title
        });
      }
    ), i = m(
      () => {
        var y, c;
        return e.unstyled ? ((y = e.pt) == null ? void 0 : y.description) || "" : Ar({
          size: e.size,
          class: (c = e.pt) == null ? void 0 : c.description
        });
      }
    ), p = m(
      () => {
        var y, c;
        return e.unstyled ? ((y = e.pt) == null ? void 0 : y.closeButton) || "" : Or({
          size: e.size,
          class: (c = e.pt) == null ? void 0 : c.closeButton
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
    return (y, c) => r.value ? (h(), x("div", {
      key: 0,
      class: g(n.value)
    }, [
      y.icon ? (h(), x("div", {
        key: 0,
        class: g(u.value)
      }, [
        G(y.$slots, "icon", {}, () => [
          V("span", {
            innerHTML: k[y.variant]
          }, null, 8, Pr)
        ])
      ], 2)) : _("", !0),
      V("div", jr, [
        y.$slots.title || y.title ? (h(), x("div", {
          key: 0,
          class: g(s.value)
        }, [
          G(y.$slots, "title", {}, () => [
            ce(U(y.title), 1)
          ])
        ], 2)) : _("", !0),
        V("div", {
          class: g(i.value)
        }, [
          G(y.$slots, "default", {}, () => [
            ce(U(y.description), 1)
          ])
        ], 2)
      ]),
      y.closable ? (h(), x("button", {
        key: 1,
        class: g(p.value),
        onClick: o,
        "aria-label": "关闭",
        type: "button"
      }, [
        G(y.$slots, "close-icon", {}, () => [
          c[0] || (c[0] = V("svg", {
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
            V("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }),
            V("line", {
              x1: "6",
              y1: "6",
              x2: "18",
              y2: "18"
            })
          ], -1))
        ])
      ], 2)) : _("", !0)
    ], 2)) : _("", !0);
  }
}), Wr = Q(Fr), Hr = R({
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
}), _r = /* @__PURE__ */ J({
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
    const a = l, e = m(() => {
      var t, r;
      return a.unstyled ? ((t = a.pt) == null ? void 0 : t.root) || "" : Hr({
        size: a.size,
        variant: a.variant,
        class: (r = a.pt) == null ? void 0 : r.root
      });
    });
    return (t, r) => (h(), x("kbd", {
      class: g(e.value)
    }, [
      G(t.$slots, "default")
    ], 2));
  }
}), Nr = Q(_r), Gr = R({
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
}), Kr = {
  click: (l) => l instanceof MouseEvent
}, Yr = (l, a) => ({
  _ref: H(null),
  handleClick: (r) => {
    if (l.disabled || l.loading) {
      r.stopPropagation();
      return;
    } else
      a("click", r);
  }
}), Ur = ["type", "disabled"], Xr = { key: 0 }, qr = {
  key: 1,
  class: "inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
}, Zr = /* @__PURE__ */ J({
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
  emits: Kr,
  setup(l, { expose: a, emit: e }) {
    const t = e, r = l, { _ref: o, handleClick: n } = Yr(r, t), u = m(() => {
      var p, k;
      return r.unstyled ? ((p = r.pt) == null ? void 0 : p.root) || "" : Gr({
        variant: r.variant,
        size: r.size,
        fullWidth: r.fullWidth,
        rounded: r.rounded,
        disabled: r.disabled || r.loading,
        class: (k = r.pt) == null ? void 0 : k.root
      });
    }), s = m(() => {
      var p;
      return r.unstyled ? ((p = r.pt) == null ? void 0 : p.loader) || "" : "mr-2";
    }), i = m(() => {
      var p;
      return r.unstyled && ((p = r.pt) == null ? void 0 : p.icon) || "";
    });
    return a({
      _ref: o,
      handleClick: n
    }), (p, k) => (h(), x("button", {
      class: g(u.value),
      type: p.type,
      disabled: p.disabled || p.loading,
      ref_key: "_ref",
      ref: o,
      onClick: k[0] || (k[0] = //@ts-ignore
      (...y) => C(n) && C(n)(...y))
    }, [
      p.loading ? (h(), x("span", {
        key: 0,
        class: g(s.value)
      }, [
        p.$slots.loading ? (h(), x("span", Xr, [
          G(p.$slots, "loading")
        ])) : (h(), x("span", qr))
      ], 2)) : p.$slots.icon ? (h(), x("span", {
        key: 1,
        class: g(i.value)
      }, [
        G(p.$slots, "icon")
      ], 2)) : _("", !0),
      G(p.$slots, "default")
    ], 10, Ur));
  }
}), Jr = Q(Zr), Qr = R({
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
}), eo = /* @__PURE__ */ J({
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
    const a = l, e = m(() => {
      var n, u;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.root) || "" : Qr({
        variant: a.variant,
        padding: a.padding,
        radius: a.radius,
        hover: a.hover,
        class: (u = a.pt) == null ? void 0 : u.root
      });
    }), t = m(() => {
      var n;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.header) || "" : "mb-4";
    }), r = m(() => {
      var n;
      return a.unstyled && ((n = a.pt) == null ? void 0 : n.body) || "";
    }), o = m(() => {
      var n;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.footer) || "" : "mt-4 flex justify-end";
    });
    return (n, u) => (h(), x("div", {
      class: g(e.value)
    }, [
      n.$slots.header ? (h(), x("div", {
        key: 0,
        class: g(t.value)
      }, [
        G(n.$slots, "header")
      ], 2)) : _("", !0),
      V("div", {
        class: g(r.value)
      }, [
        G(n.$slots, "default")
      ], 2),
      n.$slots.footer ? (h(), x("div", {
        key: 1,
        class: g(o.value)
      }, [
        G(n.$slots, "footer")
      ], 2)) : _("", !0)
    ], 2));
  }
}), to = Q(eo), lo = R({
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
}), ao = /* @__PURE__ */ J({
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
    const a = l, e = _e(), t = m(() => {
      var s;
      return !!a.label || !!((s = e.default) != null && s.call(e));
    }), r = m(() => a.as ? a.as : a.orientation === "horizontal" && !t.value ? "hr" : "div"), o = m(() => {
      var s, i;
      return a.unstyled ? ((s = a.pt) == null ? void 0 : s.root) || "" : lo({
        orientation: a.orientation,
        variant: a.variant,
        size: a.size,
        labelPosition: a.labelPosition,
        withLabel: t.value,
        class: (i = a.pt) == null ? void 0 : i.root
      });
    }), n = m(() => {
      var s;
      return a.unstyled ? ((s = a.pt) == null ? void 0 : s.label) || "" : "shrink-0 whitespace-nowrap px-2 text-gray-500";
    }), u = m(() => !a.unstyled && a.color ? {
      borderColor: a.color,
      "--tw-border-opacity": 1,
      "before:border-color": a.color,
      "after:border-color": a.color
    } : {});
    return (s, i) => (h(), Se(Ze(r.value), {
      class: g(o.value),
      style: ue(u.value),
      role: "separator",
      "aria-orientation": s.orientation,
      "data-orientation": s.orientation
    }, {
      default: Pe(() => [
        t.value ? (h(), x("div", {
          key: 0,
          class: g(n.value)
        }, [
          G(s.$slots, "default", {}, () => [
            ce(U(s.label), 1)
          ])
        ], 2)) : _("", !0)
      ]),
      _: 3
    }, 8, ["class", "style", "aria-orientation", "data-orientation"]));
  }
}), ro = Q(ao), oo = R({
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
}), no = ["value", "placeholder", "disabled", "readonly", "rows", "maxlength", "minlength"], so = /* @__PURE__ */ J({
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
    const e = l, t = a, r = m(() => {
      var i;
      return ((i = e.pt) == null ? void 0 : i.root) || "w-full";
    }), o = m(() => {
      var i, p;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.textarea) || "" : oo({
        size: e.size,
        status: e.status,
        resize: e.resize,
        class: (p = e.pt) == null ? void 0 : p.textarea
      });
    }), n = m(() => {
      var i, p;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.counter) || "" : ((p = e.pt) == null ? void 0 : p.counter) || "mt-1 text-right text-sm text-gray-500";
    }), u = (i) => {
      const p = i.target;
      t("update:modelValue", p.value), e.autosize && s(p);
    }, s = (i) => {
      i.style.height = "auto", i.style.height = `${i.scrollHeight}px`;
    };
    return be(() => {
      if (e.autosize) {
        const i = document.querySelector("textarea");
        i && s(i);
      }
    }), (i, p) => {
      var k;
      return h(), x("div", {
        class: g(r.value)
      }, [
        V("textarea", {
          class: g(o.value),
          value: i.modelValue,
          placeholder: i.placeholder,
          disabled: i.disabled,
          readonly: i.readonly,
          rows: i.rows,
          maxlength: i.maxLength,
          minlength: i.minLength,
          onInput: u
        }, null, 42, no),
        i.showCount && i.maxLength ? (h(), x("div", {
          key: 0,
          class: g(n.value)
        }, U(((k = i.modelValue) == null ? void 0 : k.length) || 0) + "/" + U(i.maxLength), 3)) : _("", !0)
      ], 2);
    };
  }
}), io = Q(so), rt = R({
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
}), uo = ["checked", "disabled"], co = /* @__PURE__ */ J({
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
    const e = l, t = a, r = Ve("checkbox-group", null), o = m(() => {
      if (r) {
        const v = e.value;
        return r.modelValue.value.includes(
          v
        );
      }
      return Array.isArray(e.modelValue) ? e.modelValue.includes(e.value) : !!e.modelValue;
    }), n = m(() => (r == null ? void 0 : r.disabled.value) || !1 || e.disabled), u = m(() => (r == null ? void 0 : r.size.value) || e.size || "default"), s = m(() => (r == null ? void 0 : r.color.value) || e.color || "blue"), i = () => {
      if (!n.value)
        if (r) {
          const v = e.value, d = [...r.modelValue.value], f = d.indexOf(v);
          if (f === -1) {
            if (r.max.value && d.length >= r.max.value)
              return;
            d.push(v);
          } else {
            if (r.min.value && d.length <= r.min.value)
              return;
            d.splice(f, 1);
          }
          r.changeEvent(d);
        } else if (Array.isArray(e.modelValue)) {
          const v = e.value, d = [...e.modelValue], f = d.indexOf(v);
          f === -1 ? d.push(v) : d.splice(f, 1), t("update:modelValue", d), t("change", d);
        } else {
          const v = !e.modelValue;
          t("update:modelValue", v), t("change", v);
        }
    }, p = (v) => {
      (v.key === "Enter" || v.key === " ") && (v.preventDefault(), i());
    }, k = m(() => {
      var d, f;
      return e.unstyled ? ((d = e.pt) == null ? void 0 : d.root) || "" : rt({
        checked: o.value,
        disabled: n.value,
        size: u.value,
        color: s.value
      }).root({ class: (f = e.pt) == null ? void 0 : f.root });
    }), y = m(() => {
      var d, f;
      return e.unstyled ? ((d = e.pt) == null ? void 0 : d.checkbox) || "" : rt({
        checked: o.value,
        disabled: n.value,
        size: u.value,
        color: s.value
      }).checkbox({ class: (f = e.pt) == null ? void 0 : f.checkbox });
    }), c = m(() => {
      var d, f;
      return e.unstyled ? ((d = e.pt) == null ? void 0 : d.icon) || "" : rt({
        checked: o.value,
        disabled: n.value,
        size: u.value,
        color: s.value
      }).icon({ class: (f = e.pt) == null ? void 0 : f.icon });
    }), b = m(() => {
      var d, f;
      return e.unstyled ? ((d = e.pt) == null ? void 0 : d.label) || "" : rt({
        checked: o.value,
        disabled: n.value,
        size: u.value,
        color: s.value
      }).label({ class: (f = e.pt) == null ? void 0 : f.label });
    });
    return (v, d) => (h(), x("label", {
      class: g(k.value),
      onClick: Ce(i, ["prevent"]),
      onKeydown: p,
      tabindex: "0"
    }, [
      V("input", {
        type: "checkbox",
        class: "sr-only",
        checked: o.value,
        disabled: n.value
      }, null, 8, uo),
      V("div", {
        class: g(y.value)
      }, [
        o.value ? (h(), x("span", {
          key: 0,
          class: g(c.value)
        }, d[0] || (d[0] = [
          V("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "3",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "size-3/4"
          }, [
            V("polyline", { points: "20 6 9 17 4 12" })
          ], -1)
        ]), 2)) : _("", !0)
      ], 2),
      e.label ? (h(), x("span", {
        key: 0,
        class: g(b.value)
      }, U(e.label), 3)) : G(v.$slots, "default", { key: 1 })
    ], 34));
  }
}), fo = /* @__PURE__ */ J({
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
    return $e("checkbox-group", {
      modelValue: xe(e, "modelValue"),
      disabled: xe(e, "disabled"),
      size: xe(e, "size"),
      color: xe(e, "color"),
      min: xe(e, "min"),
      max: xe(e, "max"),
      changeEvent: r
    }), (o, n) => (h(), x("div", {
      class: g(["flex flex-wrap", [o.direction === "vertical" ? "flex-col gap-2" : "flex-row gap-4"]]),
      role: "group",
      "aria-label": "checkbox-group"
    }, [
      G(o.$slots, "default")
    ], 2));
  }
}), po = Q(co), go = Q(fo), Ae = R({
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
function bo(l) {
  var u;
  const a = H(((u = l.modelValue) == null ? void 0 : u.toString()) || ""), e = H(null), t = (s) => {
    var i;
    if (!(l.disabled || l.readonly)) {
      if (l.type === "number" && s !== "") {
        const p = parseFloat(s);
        a.value = isNaN(p) ? "" : s;
      } else
        a.value = s;
      l.maxlength && s.length > l.maxlength && (a.value = s.slice(0, l.maxlength)), (i = l.onChange) == null || i.call(l, a.value);
    }
  };
  return ee(
    () => l.modelValue,
    (s) => {
      s != null ? a.value = s.toString() : a.value = "";
    }
  ), {
    inputValue: a,
    inputRef: e,
    updateValue: t,
    clearInput: () => {
      var s, i;
      l.disabled || l.readonly || (a.value = "", (s = l.onChange) == null || s.call(l, ""), (i = e.value) == null || i.focus());
    },
    focus: () => {
      var s;
      (s = e.value) == null || s.focus();
    },
    blur: () => {
      var s;
      (s = e.value) == null || s.blur();
    }
  };
}
const vo = ["type", "value", "placeholder", "disabled", "readonly", "maxlength", "autofocus"], mo = /* @__PURE__ */ J({
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
    const t = l, r = e, { inputValue: o, inputRef: n, updateValue: u, clearInput: s, focus: i, blur: p } = bo(
      {
        modelValue: t.modelValue,
        type: t.type,
        disabled: t.disabled,
        readonly: t.readonly,
        maxlength: t.maxlength,
        onChange: (S) => r("update:modelValue", S)
      }
    ), k = m(() => {
      var w, B;
      return t.unstyled ? ((w = t.pt) == null ? void 0 : w.root) || "" : Ae({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).root({ class: (B = t.pt) == null ? void 0 : B.root });
    }), y = m(() => {
      var w, B;
      return t.unstyled ? ((w = t.pt) == null ? void 0 : w.wrapper) || "" : Ae({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).wrapper({ class: (B = t.pt) == null ? void 0 : B.wrapper });
    }), c = m(() => {
      var w, B;
      return t.unstyled ? ((w = t.pt) == null ? void 0 : w.input) || "" : Ae({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).input({ class: (B = t.pt) == null ? void 0 : B.input });
    }), b = m(() => {
      var w, B;
      return t.unstyled ? ((w = t.pt) == null ? void 0 : w.prefix) || "" : Ae({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).prefix({ class: (B = t.pt) == null ? void 0 : B.prefix });
    }), v = m(() => {
      var w, B;
      return t.unstyled ? ((w = t.pt) == null ? void 0 : w.suffix) || "" : Ae({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).suffix({ class: (B = t.pt) == null ? void 0 : B.suffix });
    }), d = m(() => {
      var w, B;
      return t.unstyled ? ((w = t.pt) == null ? void 0 : w.clear) || "" : Ae({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).clear({ class: (B = t.pt) == null ? void 0 : B.clear });
    }), f = m(() => {
      var w, B;
      return t.unstyled ? ((w = t.pt) == null ? void 0 : w.count) || "" : Ae({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).count({ class: (B = t.pt) == null ? void 0 : B.count });
    });
    return a({
      focus: i,
      blur: p,
      inputRef: n
    }), (S, w) => (h(), x("div", {
      class: g(k.value)
    }, [
      V("div", {
        class: g([y.value, t.readonly && "cursor-default"])
      }, [
        t.prefixIcon ? (h(), x("div", {
          key: 0,
          class: g(b.value)
        }, [
          V("i", {
            class: g(t.prefixIcon)
          }, null, 2)
        ], 2)) : _("", !0),
        V("input", {
          type: t.type,
          class: g(c.value),
          value: C(o),
          placeholder: t.placeholder,
          disabled: t.disabled,
          readonly: t.readonly,
          maxlength: t.maxlength,
          autofocus: t.autofocus,
          ref_key: "inputRef",
          ref: n,
          onInput: w[0] || (w[0] = (B) => C(u)(B.target.value)),
          onFocus: w[1] || (w[1] = (B) => S.$emit("focus", B)),
          onBlur: w[2] || (w[2] = (B) => S.$emit("blur", B))
        }, null, 42, vo),
        t.clearable && C(o) && !t.disabled && !t.readonly ? (h(), x("div", {
          key: 1,
          class: g([v.value, d.value]),
          onClick: w[3] || (w[3] = //@ts-ignore
          (...B) => C(s) && C(s)(...B))
        }, w[4] || (w[4] = [
          V("svg", {
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
            V("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }),
            V("line", {
              x1: "6",
              y1: "6",
              x2: "18",
              y2: "18"
            })
          ], -1)
        ]), 2)) : _("", !0),
        t.suffixIcon ? (h(), x("div", {
          key: 2,
          class: g(v.value)
        }, [
          V("i", {
            class: g(t.suffixIcon)
          }, null, 2)
        ], 2)) : _("", !0)
      ], 2),
      t.showCount && t.maxlength ? (h(), x("div", {
        key: 0,
        class: g(f.value)
      }, U(C(o).length) + "/" + U(t.maxlength), 3)) : _("", !0)
    ], 2));
  }
}), yo = Q(mo);
function ho(l) {
  const a = H(!1), e = H(""), t = H(0), r = H(null), o = H(null), n = H(l.modelValue);
  ee(
    () => l.modelValue,
    (L) => {
      n.value = L;
    },
    { immediate: !0 }
  );
  const u = m(() => {
    var L;
    return ((L = l.options) == null ? void 0 : L.map((A) => ({
      ...A,
      disabled: A.disabled || !1
    }))) || [];
  }), s = m(() => {
    const L = {}, A = [];
    return u.value.forEach((P) => {
      P.group ? (L[P.group] || (L[P.group] = []), L[P.group].push(P)) : A.push(P);
    }), { groups: L, noGroup: A };
  }), i = m(() => l.multiple ? Array.isArray(n.value) ? n.value : [] : n.value !== void 0 ? [n.value] : []), p = m(() => {
    const L = [];
    if (!i.value.length) return L;
    for (const A of i.value) {
      const P = u.value.find(
        (F) => F.value === A || String(F.value) === String(A)
      );
      if (P)
        L.push(P);
      else if (A != null && (typeof A == "string" || typeof A == "number")) {
        const F = {
          label: String(A),
          value: A,
          disabled: !1
        };
        L.push(F);
      }
    }
    return L;
  }), k = m(() => {
    var L;
    return !p.value || p.value.length === 0 ? "" : ((L = p.value[0]) == null ? void 0 : L.label) || "";
  }), y = m(() => {
    if (!l.filterable || !e.value)
      return u.value;
    const L = e.value.toLowerCase();
    return u.value.filter(
      (A) => A.label.toLowerCase().includes(L)
    );
  }), c = (L) => {
    var P;
    if (l.disabled || l.readonly || L.disabled)
      return;
    let A;
    if (l.multiple) {
      const F = [...i.value], z = F.findIndex(
        (E) => String(E) === String(L.value)
      );
      z > -1 ? F.splice(z, 1) : F.push(L.value), A = F;
    } else
      A = L.value, f();
    n.value = A, (P = l.onChange) == null || P.call(l, A), l.filterable && me(() => {
      e.value = "";
    });
  }, b = (L) => {
    var P;
    if (L && L.stopPropagation(), l.disabled || l.readonly) return;
    const A = l.multiple ? [] : void 0;
    n.value = A, (P = l.onChange) == null || P.call(l, A);
  }, v = () => {
    var L;
    l.disabled || l.readonly || (a.value = !a.value, (L = l.onDropdownVisibleChange) == null || L.call(l, a.value), a.value && me(() => {
      S();
    }));
  }, d = () => {
    var L;
    l.disabled || l.readonly || a.value || (a.value = !0, (L = l.onDropdownVisibleChange) == null || L.call(l, !0), me(() => {
      S();
    }));
  }, f = () => {
    var L;
    a.value && (a.value = !1, e.value = "", (L = l.onDropdownVisibleChange) == null || L.call(l, !1));
  }, S = () => {
    const L = y.value;
    for (let A = 0; A < L.length; A++)
      if (!L[A].disabled) {
        t.value = A;
        return;
      }
    t.value = -1;
  }, w = (L) => i.value.some((A) => String(A) === String(L)), B = (L) => {
    var P, F;
    if (l.disabled || l.readonly) return;
    const A = y.value;
    switch (L.key) {
      case "ArrowDown":
        if (L.preventDefault(), !a.value)
          d();
        else {
          let z = t.value, E = 0;
          do
            z = (z + 1) % A.length, E++;
          while ((P = A[z]) != null && P.disabled && E < A.length);
          t.value = z;
        }
        break;
      case "ArrowUp":
        if (L.preventDefault(), !a.value)
          d();
        else {
          let z = t.value, E = 0;
          do
            z = z <= 0 ? A.length - 1 : z - 1, E++;
          while ((F = A[z]) != null && F.disabled && E < A.length);
          t.value = z;
        }
        break;
      case "Enter":
      case " ":
        L.preventDefault(), a.value && t.value >= 0 && A[t.value] ? c(A[t.value]) : v();
        break;
      case "Escape":
        L.preventDefault(), f();
        break;
      case "Tab":
        f();
        break;
    }
  }, M = (L) => {
    var A;
    e.value = L, (A = l.onSearch) == null || A.call(l, L), S();
  }, I = (L) => {
    a.value && r.value && o.value && !r.value.contains(L.target) && !o.value.contains(L.target) && f();
  }, O = () => {
    document.addEventListener("mousedown", I);
  }, $ = () => {
    document.removeEventListener("mousedown", I);
  };
  ee(a, (L) => {
    L ? O() : $();
  });
  const T = () => {
    $();
  };
  return be(() => {
    a.value && O();
  }), Me(() => {
    T();
  }), {
    isOpen: a,
    searchValue: e,
    activeIndex: t,
    triggerRef: r,
    dropdownRef: o,
    selectedValues: i,
    selectedOptions: p,
    getOptionLabel: k,
    filteredOptions: y,
    groupedOptions: s,
    selectOption: c,
    clearSelection: b,
    toggleDropdown: v,
    openDropdown: d,
    closeDropdown: f,
    isSelected: w,
    onKeyDown: B,
    onSearchInput: M,
    cleanup: T
  };
}
const wo = R({
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
const xo = {
  key: 0,
  class: "text-red-500"
}, ko = ["aria-expanded", "aria-disabled", "aria-readonly", "aria-required"], Co = {
  key: 0,
  class: "flex flex-wrap gap-1"
}, zo = { class: "truncate" }, So = ["onClick"], Bo = {
  key: 1,
  class: "truncate"
}, Vo = { class: "flex items-center" }, $o = ["aria-multiselectable"], Io = {
  key: 0,
  class: "sticky top-0"
}, Do = ["value"], Mo = ["onClick", "aria-selected", "aria-disabled"], To = ["onClick", "aria-selected", "aria-disabled"], Ro = { class: "px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400" }, Eo = ["onClick", "aria-selected", "aria-disabled"], Lo = {
  key: 1,
  class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
}, Ao = {
  key: 2,
  class: "mt-1 text-xs text-red-500"
}, Oo = /* @__PURE__ */ J({
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
    const t = l, r = e, o = wo(), n = m(() => {
      var E, D, N, j, K, Y, oe, W, Z, le, te, se, de, fe, ve, pe, ze, ye, ie, je, Fe, Ct, zt, St, Bt, Vt, $t, It, Dt, Mt, Tt, Rt, Et;
      return t.unstyled ? {
        root: ((E = t.pt) == null ? void 0 : E.root) || "",
        trigger: ((D = t.pt) == null ? void 0 : D.trigger) || "",
        value: ((N = t.pt) == null ? void 0 : N.value) || "",
        placeholder: ((j = t.pt) == null ? void 0 : j.placeholder) || "",
        dropdown: ((K = t.pt) == null ? void 0 : K.dropdown) || "",
        option: ((Y = t.pt) == null ? void 0 : Y.option) || "",
        optionSelected: ((oe = t.pt) == null ? void 0 : oe.optionSelected) || "",
        optionActive: ((W = t.pt) == null ? void 0 : W.optionActive) || "",
        optionDisabled: ((Z = t.pt) == null ? void 0 : Z.optionDisabled) || "",
        icon: ((le = t.pt) == null ? void 0 : le.icon) || "",
        clearIcon: ((te = t.pt) == null ? void 0 : te.clearIcon) || "",
        checkIcon: ((se = t.pt) == null ? void 0 : se.checkIcon) || "",
        search: ((de = t.pt) == null ? void 0 : de.search) || "",
        tag: ((fe = t.pt) == null ? void 0 : fe.tag) || "",
        tagRemove: ((ve = t.pt) == null ? void 0 : ve.tagRemove) || "",
        noMatch: ((pe = t.pt) == null ? void 0 : pe.noMatch) || "",
        label: ((ze = t.pt) == null ? void 0 : ze.label) || ""
      } : {
        root: o.root({
          size: t.size,
          status: t.status,
          disabled: t.disabled,
          multiple: t.multiple,
          open: i.value,
          class: (ye = t.pt) == null ? void 0 : ye.root
        }),
        trigger: o.trigger({
          size: t.size,
          status: t.status,
          disabled: t.disabled,
          multiple: t.multiple,
          open: i.value,
          class: (ie = t.pt) == null ? void 0 : ie.trigger
        }),
        value: o.value({
          multiple: t.multiple,
          class: (je = t.pt) == null ? void 0 : je.value
        }),
        placeholder: o.placeholder({ class: (Fe = t.pt) == null ? void 0 : Fe.placeholder }),
        dropdown: o.dropdown({ class: (Ct = t.pt) == null ? void 0 : Ct.dropdown }),
        option: o.option({ class: (zt = t.pt) == null ? void 0 : zt.option }),
        optionSelected: o.optionSelected({ class: (St = t.pt) == null ? void 0 : St.optionSelected }),
        optionActive: o.optionActive({ class: (Bt = t.pt) == null ? void 0 : Bt.optionActive }),
        optionDisabled: o.optionDisabled({ class: (Vt = t.pt) == null ? void 0 : Vt.optionDisabled }),
        icon: o.icon({ class: ($t = t.pt) == null ? void 0 : $t.icon }),
        clearIcon: o.clearIcon({ class: (It = t.pt) == null ? void 0 : It.clearIcon }),
        checkIcon: o.checkIcon({ class: (Dt = t.pt) == null ? void 0 : Dt.checkIcon }),
        search: o.search({ class: (Mt = t.pt) == null ? void 0 : Mt.search }),
        tag: o.tag({ class: (Tt = t.pt) == null ? void 0 : Tt.tag }),
        tagRemove: o.tagRemove({ class: (Rt = t.pt) == null ? void 0 : Rt.tagRemove }),
        noMatch: o.noMatch({ class: (Et = t.pt) == null ? void 0 : Et.noMatch })
      };
    }), u = `versa-select-dropdown-${Math.random().toString(36).substring(2, 9)}`, s = H(null), {
      isOpen: i,
      searchValue: p,
      activeIndex: k,
      triggerRef: y,
      dropdownRef: c,
      selectedValues: b,
      selectedOptions: v,
      getOptionLabel: d,
      filteredOptions: f,
      groupedOptions: S,
      selectOption: w,
      clearSelection: B,
      toggleDropdown: M,
      openDropdown: I,
      closeDropdown: O,
      isSelected: $,
      onKeyDown: T,
      onSearchInput: L,
      cleanup: A
    } = ho({
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
          var D;
          (D = s.value) == null || D.focus();
        }, 0);
      }
    }), P = m(() => Object.keys(S.value.groups).length > 0), F = (E, D) => {
      let N = 0;
      if (E === null)
        return D;
      N += S.value.noGroup.length;
      const j = Object.keys(S.value.groups);
      for (let K = 0; K < j.length; K++) {
        const Y = j[K];
        if (Y === E)
          return N + D;
        N += S.value.groups[Y].length;
      }
      return -1;
    }, z = (E) => {
      L(E.target.value);
    };
    return Me(() => {
      A();
    }), a({
      open: I,
      close: O,
      clear: B
    }), (E, D) => {
      var N;
      return h(), x("div", {
        class: g(n.value.root)
      }, [
        t.showLabel && t.label ? (h(), x("label", {
          key: 0,
          class: g(
            ((N = t.pt) == null ? void 0 : N.label) || "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          )
        }, [
          ce(U(t.label) + " ", 1),
          t.required ? (h(), x("span", xo, "*")) : _("", !0)
        ], 2)) : _("", !0),
        V("div", {
          ref_key: "triggerRef",
          ref: y,
          class: g(n.value.trigger),
          onClick: D[1] || (D[1] = (j) => !t.disabled && !t.readonly && C(M)()),
          onKeydown: D[2] || (D[2] = //@ts-ignore
          (...j) => C(T) && C(T)(...j)),
          tabindex: "0",
          role: "combobox",
          "aria-expanded": C(i),
          "aria-disabled": t.disabled,
          "aria-readonly": t.readonly,
          "aria-required": t.required,
          "aria-haspopup": !0,
          "aria-controls": u
        }, [
          V("div", {
            class: g(n.value.value)
          }, [
            t.multiple && C(v).length ? (h(), x("div", Co, [
              (h(!0), x(ae, null, ne(C(v), (j) => (h(), x("div", {
                key: j.value,
                class: g(n.value.tag)
              }, [
                V("span", zo, U(j.label), 1),
                !t.disabled && !t.readonly ? (h(), x("button", {
                  key: 0,
                  type: "button",
                  class: g(n.value.tagRemove),
                  onClick: Ce((K) => C(w)(j), ["stop"]),
                  "aria-label": "移除"
                }, D[4] || (D[4] = [
                  V("svg", {
                    viewBox: "0 0 24 24",
                    width: "12",
                    height: "12",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    fill: "none"
                  }, [
                    V("line", {
                      x1: "18",
                      y1: "6",
                      x2: "6",
                      y2: "18"
                    }),
                    V("line", {
                      x1: "6",
                      y1: "6",
                      x2: "18",
                      y2: "18"
                    })
                  ], -1)
                ]), 10, So)) : _("", !0)
              ], 2))), 128))
            ])) : C(v).length ? (h(), x("div", Bo, U(C(d)), 1)) : (h(), x("div", {
              key: 2,
              class: g(n.value.placeholder)
            }, U(t.placeholder), 3))
          ], 2),
          V("div", Vo, [
            t.clearable && C(b).length && !t.disabled && !t.readonly ? (h(), x("button", {
              key: 0,
              type: "button",
              class: g(n.value.clearIcon),
              onClick: D[0] || (D[0] = Ce(
                //@ts-ignore
                (...j) => C(B) && C(B)(...j),
                ["stop"]
              )),
              "aria-label": "清除选择"
            }, D[5] || (D[5] = [
              V("svg", {
                viewBox: "0 0 24 24",
                width: "14",
                height: "14",
                stroke: "currentColor",
                "stroke-width": "2",
                fill: "none"
              }, [
                V("line", {
                  x1: "18",
                  y1: "6",
                  x2: "6",
                  y2: "18"
                }),
                V("line", {
                  x1: "6",
                  y1: "6",
                  x2: "18",
                  y2: "18"
                })
              ], -1)
            ]), 2)) : _("", !0),
            V("div", {
              class: g(n.value.icon)
            }, [
              (h(), x("svg", {
                viewBox: "0 0 24 24",
                width: "16",
                height: "16",
                stroke: "currentColor",
                "stroke-width": "2",
                fill: "none",
                style: ue({ transform: C(i) ? "rotate(180deg)" : void 0 }),
                class: "transition-transform duration-200"
              }, D[6] || (D[6] = [
                V("polyline", { points: "6 9 12 15 18 9" }, null, -1)
              ]), 4))
            ], 2)
          ])
        ], 42, ko),
        Be(Je, { name: "versa-select-dropdown" }, {
          default: Pe(() => [
            C(i) ? (h(), x("div", {
              key: 0,
              ref_key: "dropdownRef",
              ref: c,
              id: u,
              class: g(n.value.dropdown),
              style: ue({ maxHeight: `${t.maxDropdownHeight}px` }),
              role: "listbox",
              "aria-multiselectable": t.multiple
            }, [
              t.filterable ? (h(), x("div", Io, [
                V("input", {
                  ref_key: "searchInputRef",
                  ref: s,
                  class: g(n.value.search),
                  type: "text",
                  value: C(p),
                  onInput: z,
                  placeholder: "搜索...",
                  onKeydown: D[3] || (D[3] = Ce(() => {
                  }, ["stop"]))
                }, null, 42, Do)
              ])) : _("", !0),
              V("div", null, [
                P.value ? (h(), x(ae, { key: 1 }, [
                  C(S).noGroup.length ? (h(!0), x(ae, { key: 0 }, ne(C(S).noGroup, (j, K) => (h(), x("div", {
                    key: j.value,
                    class: g([
                      n.value.option,
                      {
                        [n.value.optionSelected]: C($)(j.value),
                        [n.value.optionActive]: C(k) === K,
                        [n.value.optionDisabled]: j.disabled
                      }
                    ]),
                    onClick: Ce((Y) => !j.disabled && C(w)(j), ["stop"]),
                    role: "option",
                    "aria-selected": C($)(j.value),
                    "aria-disabled": j.disabled
                  }, [
                    ce(U(j.label) + " ", 1),
                    C($)(j.value) ? (h(), x("svg", {
                      key: 0,
                      class: g(n.value.checkIcon),
                      viewBox: "0 0 24 24",
                      width: "16",
                      height: "16",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      fill: "none"
                    }, D[8] || (D[8] = [
                      V("polyline", { points: "20 6 9 17 4 12" }, null, -1)
                    ]), 2)) : _("", !0)
                  ], 10, To))), 128)) : _("", !0),
                  (h(!0), x(ae, null, ne(C(S).groups, (j, K) => (h(), x(ae, { key: K }, [
                    V("div", Ro, U(K), 1),
                    (h(!0), x(ae, null, ne(j, (Y, oe) => (h(), x("div", {
                      key: Y.value,
                      class: g([
                        n.value.option,
                        "pl-5",
                        {
                          [n.value.optionSelected]: C($)(Y.value),
                          [n.value.optionActive]: F(K, oe) === C(k),
                          [n.value.optionDisabled]: Y.disabled
                        }
                      ]),
                      onClick: Ce((W) => !Y.disabled && C(w)(Y), ["stop"]),
                      role: "option",
                      "aria-selected": C($)(Y.value),
                      "aria-disabled": Y.disabled
                    }, [
                      ce(U(Y.label) + " ", 1),
                      C($)(Y.value) ? (h(), x("svg", {
                        key: 0,
                        class: g(n.value.checkIcon),
                        viewBox: "0 0 24 24",
                        width: "16",
                        height: "16",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        fill: "none"
                      }, D[9] || (D[9] = [
                        V("polyline", { points: "20 6 9 17 4 12" }, null, -1)
                      ]), 2)) : _("", !0)
                    ], 10, Eo))), 128))
                  ], 64))), 128))
                ], 64)) : (h(), x(ae, { key: 0 }, [
                  C(f).length ? (h(!0), x(ae, { key: 0 }, ne(C(f), (j, K) => (h(), x("div", {
                    key: j.value,
                    class: g([
                      n.value.option,
                      {
                        [n.value.optionSelected]: C($)(j.value),
                        [n.value.optionActive]: C(k) === K,
                        [n.value.optionDisabled]: j.disabled
                      }
                    ]),
                    onClick: Ce((Y) => !j.disabled && C(w)(j), ["stop"]),
                    role: "option",
                    "aria-selected": C($)(j.value),
                    "aria-disabled": j.disabled
                  }, [
                    ce(U(j.label) + " ", 1),
                    C($)(j.value) ? (h(), x("svg", {
                      key: 0,
                      class: g(n.value.checkIcon),
                      viewBox: "0 0 24 24",
                      width: "16",
                      height: "16",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      fill: "none"
                    }, D[7] || (D[7] = [
                      V("polyline", { points: "20 6 9 17 4 12" }, null, -1)
                    ]), 2)) : _("", !0)
                  ], 10, Mo))), 128)) : (h(), x("div", {
                    key: 1,
                    class: g(n.value.noMatch)
                  }, U(t.noMatchText), 3))
                ], 64))
              ])
            ], 14, $o)) : _("", !0)
          ]),
          _: 1
        }),
        t.helpText && !t.errorText ? (h(), x("div", Lo, U(t.helpText), 1)) : _("", !0),
        t.errorText ? (h(), x("div", Ao, U(t.errorText), 1)) : _("", !0)
      ], 2);
    };
  }
}), Po = Q(Oo);
function jo(l) {
  const a = H(l.modelValue ?? 0), e = H(-1), t = H(!1);
  return ee(
    () => l.modelValue,
    (s) => {
      s !== void 0 && (a.value = s);
    }
  ), {
    currentValue: a,
    hoverValue: e,
    isHovering: t,
    getStarValue: (s) => {
      const i = t.value ? e.value : a.value;
      return l.allowHalf ? i >= s + 1 ? 1 : i >= s + 0.5 ? 0.5 : 0 : i >= s + 1 ? 1 : 0;
    },
    handleClick: (s, i) => {
      var k;
      if (l.disabled || l.readonly) return;
      let p;
      l.allowHalf && i ? p = s + 0.5 : p = s + 1, p === a.value && (p = 0), a.value = p, (k = l.onChange) == null || k.call(l, p);
    },
    handleMouseMove: (s, i) => {
      var p;
      if (!(l.disabled || l.readonly)) {
        if (t.value = !0, l.allowHalf) {
          const y = s.currentTarget.getBoundingClientRect(), c = s.clientX - y.left < y.width / 2;
          e.value = c ? i + 0.5 : i + 1;
        } else
          e.value = i + 1;
        (p = l.onHoverChange) == null || p.call(l, e.value);
      }
    },
    handleMouseLeave: () => {
      var s;
      l.disabled || l.readonly || (t.value = !1, e.value = -1, (s = l.onHoverChange) == null || s.call(l, a.value));
    }
  };
}
const Fo = R({
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
}), Wo = R({
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
}), Ho = R({
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
}), _o = R({
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
}), No = R({
  base: "text-gray-300 dark:text-gray-600"
}), Go = R({
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
}), Ko = {
  "update:modelValue": (l) => typeof l == "number",
  change: (l) => typeof l == "number",
  "hover-change": (l) => typeof l == "number"
}, Yo = ["onClick", "onMousemove", "aria-checked", "aria-disabled", "aria-readonly", "tabindex"], Uo = /* @__PURE__ */ J({
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
  emits: Ko,
  setup(l, { emit: a }) {
    const e = l, t = a, {
      currentValue: r,
      getStarValue: o,
      handleClick: n,
      handleMouseMove: u,
      handleMouseLeave: s
    } = jo({
      modelValue: e.modelValue,
      max: e.max,
      allowHalf: e.allowHalf,
      readonly: e.readonly,
      disabled: e.disabled,
      onChange: (d) => {
        t("update:modelValue", d), t("change", d);
      },
      onHoverChange: (d) => {
        t("hover-change", d);
      }
    }), i = m(() => {
      var d, f;
      return e.unstyled ? ((d = e.pt) == null ? void 0 : d.container) || "" : Fo({
        disabled: e.disabled,
        class: (f = e.pt) == null ? void 0 : f.container
      });
    }), p = m(() => {
      var d, f;
      return e.unstyled ? ((d = e.pt) == null ? void 0 : d.item) || "" : Wo({
        size: e.size,
        disabled: e.disabled,
        readonly: e.readonly,
        class: (f = e.pt) == null ? void 0 : f.item
      });
    }), k = m(() => {
      var d, f;
      return e.unstyled ? ((d = e.pt) == null ? void 0 : d.score) || "" : Ho({
        size: e.size,
        class: (f = e.pt) == null ? void 0 : f.score
      });
    }), y = m(() => {
      var d, f;
      return e.unstyled ? ((d = e.pt) == null ? void 0 : d.fullStar) || "absolute inset-0 overflow-hidden w-full" : _o({
        color: e.color,
        class: (f = e.pt) == null ? void 0 : f.fullStar
      }) + " w-full";
    }), c = m(() => {
      var d, f;
      return e.unstyled ? ((d = e.pt) == null ? void 0 : d.halfStar) || "absolute inset-0 overflow-hidden w-1/2" : Go({
        color: e.color,
        class: (f = e.pt) == null ? void 0 : f.halfStar
      }) + " w-1/2";
    }), b = m(() => {
      var d, f;
      return e.unstyled ? ((d = e.pt) == null ? void 0 : d.voidStar) || "" : No({
        class: (f = e.pt) == null ? void 0 : f.voidStar
      });
    }), v = (d) => e.formatTooltip ? e.formatTooltip(d) : d.toString();
    return (d, f) => (h(), x("div", {
      class: g(i.value),
      onMouseleave: f[0] || (f[0] = //@ts-ignore
      (...S) => C(s) && C(s)(...S)),
      role: "radiogroup",
      "aria-label": "评分"
    }, [
      (h(!0), x(ae, null, ne(d.max, (S) => (h(), x("div", {
        key: S,
        class: g(p.value),
        onClick: (w) => C(n)(S - 1, !1),
        onMousemove: (w) => C(u)(w, S - 1),
        role: "radio",
        "aria-checked": C(o)(S - 1) > 0,
        "aria-disabled": d.disabled,
        "aria-readonly": d.readonly,
        tabindex: d.disabled ? -1 : 0
      }, [
        V("span", {
          class: g(b.value)
        }, [
          G(d.$slots, "character", {}, () => [
            ce(U(d.character || "★"), 1)
          ], !0)
        ], 2),
        C(o)(S - 1) === 1 ? (h(), x("span", {
          key: 0,
          class: g(y.value)
        }, [
          G(d.$slots, "character", {}, () => [
            ce(U(d.character || "★"), 1)
          ], !0)
        ], 2)) : C(o)(S - 1) === 0.5 ? (h(), x("span", {
          key: 1,
          class: g(c.value)
        }, [
          G(d.$slots, "character", {}, () => [
            ce(U(d.character || "★"), 1)
          ], !0)
        ], 2)) : _("", !0)
      ], 42, Yo))), 128)),
      d.showScore ? (h(), x("span", {
        key: 0,
        class: g(k.value)
      }, U(v(C(r))), 3)) : _("", !0)
    ], 34));
  }
}), Xo = /* @__PURE__ */ st(Uo, [["__scopeId", "data-v-ae42a8b5"]]), qo = Q(Xo), Zo = (l, a) => {
  const e = H(l.modelValue || /* @__PURE__ */ new Date()), t = H(e.value.getMonth()), r = H(e.value.getFullYear()), o = m(() => {
    const k = l.locale || "default", y = l.firstDayOfWeek || 0, c = [];
    for (let b = 0; b < 7; b++) {
      const v = (b + y) % 7;
      c.push(
        new Intl.DateTimeFormat(k, { weekday: "short" }).format(
          new Date(2021, 0, v + 3)
          // 2021-01-03 is a Sunday
        )
      );
    }
    return c;
  }), n = m(() => {
    const k = r.value, y = t.value, c = new Date(k, y, 1).getDay(), b = new Date(k, y + 1, 0).getDate(), v = l.firstDayOfWeek || 0, d = [], f = new Date(k, y, 0).getDate(), S = (c - v + 7) % 7;
    for (let M = f - S + 1; M <= f; M++)
      d.push({
        date: new Date(k, y - 1, M),
        day: M,
        isCurrentMonth: !1,
        isToday: !1,
        isSelected: !1,
        isDisabled: !1
      });
    const w = /* @__PURE__ */ new Date();
    for (let M = 1; M <= b; M++) {
      const I = new Date(k, y, M), O = w.getDate() === M && w.getMonth() === y && w.getFullYear() === k, $ = l.modelValue && l.modelValue.getDate() === M && l.modelValue.getMonth() === y && l.modelValue.getFullYear() === k, T = l.disabled || l.min && I < l.min || l.max && I > l.max;
      d.push({
        date: I,
        day: M,
        isCurrentMonth: !0,
        isToday: O,
        isSelected: $,
        isDisabled: T
      });
    }
    const B = 42 - d.length;
    for (let M = 1; M <= B; M++)
      d.push({
        date: new Date(k, y + 1, M),
        day: M,
        isCurrentMonth: !1,
        isToday: !1,
        isSelected: !1,
        isDisabled: !1
      });
    return d;
  }), u = m(() => {
    const k = l.locale || "default";
    return new Intl.DateTimeFormat(k, { month: "long" }).format(
      new Date(r.value, t.value)
    );
  }), s = () => {
    t.value === 0 ? (t.value = 11, r.value--) : t.value--;
  }, i = () => {
    t.value === 11 ? (t.value = 0, r.value++) : t.value++;
  }, p = (k) => {
    l.disabled || l.readonly || l.min && k < l.min || l.max && k > l.max || (e.value = k, a("update:modelValue", k), a("change", k));
  };
  return ee(
    () => l.modelValue,
    (k) => {
      k && (e.value = k, t.value = k.getMonth(), r.value = k.getFullYear());
    }
  ), {
    currentDate: e,
    currentMonth: t,
    currentYear: r,
    weekdays: o,
    daysInMonth: n,
    monthName: u,
    prevMonth: s,
    nextMonth: i,
    selectDate: p
  };
}, Jo = R({
  base: "w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), Qo = R({
  base: "flex items-center justify-between mb-4"
}), en = R({
  base: "text-lg font-medium"
}), tn = R({
  base: "flex items-center space-x-1"
}), ln = R({
  base: "p-1 rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
}), an = R({
  base: "grid grid-cols-7 mb-1"
}), rn = R({
  base: "text-center text-sm font-medium text-gray-500 py-2"
}), on = R({
  base: "grid grid-cols-7 gap-1"
}), Ie = R({
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
}), nn = {
  "update:modelValue": (l) => l === null || l instanceof Date,
  change: (l) => l === null || l instanceof Date
}, sn = ["disabled"], dn = ["disabled"], un = ["onClick", "disabled"], cn = /* @__PURE__ */ J({
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
  emits: nn,
  setup(l, { emit: a }) {
    const e = a, t = l, {
      currentYear: r,
      weekdays: o,
      daysInMonth: n,
      monthName: u,
      prevMonth: s,
      nextMonth: i,
      selectDate: p
    } = Zo(t, e), k = m(() => {
      var y, c, b, v, d, f, S, w, B, M, I, O, $, T, L, A, P, F, z, E, D, N, j, K, Y, oe;
      return {
        root: t.unstyled ? ((y = t.pt) == null ? void 0 : y.root) || "" : Jo({ unstyled: t.unstyled, class: (c = t.pt) == null ? void 0 : c.root }),
        header: t.unstyled ? ((b = t.pt) == null ? void 0 : b.header) || "" : Qo({ class: (v = t.pt) == null ? void 0 : v.header }),
        title: t.unstyled ? ((d = t.pt) == null ? void 0 : d.title) || "" : en({ class: (f = t.pt) == null ? void 0 : f.title }),
        navigation: t.unstyled ? ((S = t.pt) == null ? void 0 : S.navigation) || "" : tn({ class: (w = t.pt) == null ? void 0 : w.navigation }),
        navButton: t.unstyled ? ((B = t.pt) == null ? void 0 : B.navButton) || "" : ln({ class: (M = t.pt) == null ? void 0 : M.navButton }),
        weekdays: t.unstyled ? ((I = t.pt) == null ? void 0 : I.weekdays) || "" : an({ class: (O = t.pt) == null ? void 0 : O.weekdays }),
        weekday: t.unstyled ? (($ = t.pt) == null ? void 0 : $.weekday) || "" : rn({ class: (T = t.pt) == null ? void 0 : T.weekday }),
        days: t.unstyled ? ((L = t.pt) == null ? void 0 : L.days) || "" : on({ class: (A = t.pt) == null ? void 0 : A.days }),
        day: t.unstyled ? ((P = t.pt) == null ? void 0 : P.day) || "" : Ie({ class: (F = t.pt) == null ? void 0 : F.day }),
        today: t.unstyled ? ((z = t.pt) == null ? void 0 : z.today) || "" : Ie({ isToday: !0, class: (E = t.pt) == null ? void 0 : E.today }).split(" ").filter((W) => !Ie().includes(W)).join(" "),
        selected: t.unstyled ? ((D = t.pt) == null ? void 0 : D.selected) || "" : Ie({ isSelected: !0, class: (N = t.pt) == null ? void 0 : N.selected }).split(" ").filter((W) => !Ie().includes(W)).join(" "),
        disabled: t.unstyled ? ((j = t.pt) == null ? void 0 : j.disabled) || "" : Ie({ isDisabled: !0, class: (K = t.pt) == null ? void 0 : K.disabled }).split(" ").filter((W) => !Ie().includes(W)).join(" "),
        adjacent: t.unstyled ? ((Y = t.pt) == null ? void 0 : Y.adjacent) || "" : Ie({ isAdjacent: !0, class: (oe = t.pt) == null ? void 0 : oe.adjacent }).split(" ").filter((W) => !Ie().includes(W)).join(" ")
      };
    });
    return (y, c) => (h(), x("div", {
      class: g(k.value.root)
    }, [
      V("div", {
        class: g(k.value.header)
      }, [
        V("div", {
          class: g(k.value.title)
        }, U(C(u)) + " " + U(C(r)), 3),
        V("div", {
          class: g(k.value.navigation)
        }, [
          V("button", {
            class: g(k.value.navButton),
            onClick: c[0] || (c[0] = //@ts-ignore
            (...b) => C(s) && C(s)(...b)),
            disabled: y.disabled || y.readonly
          }, c[2] || (c[2] = [
            V("svg", {
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
              V("path", { d: "m15 18-6-6 6-6" })
            ], -1)
          ]), 10, sn),
          V("button", {
            class: g(k.value.navButton),
            onClick: c[1] || (c[1] = //@ts-ignore
            (...b) => C(i) && C(i)(...b)),
            disabled: y.disabled || y.readonly
          }, c[3] || (c[3] = [
            V("svg", {
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
              V("path", { d: "m9 18 6-6-6-6" })
            ], -1)
          ]), 10, dn)
        ], 2)
      ], 2),
      V("div", {
        class: g(k.value.weekdays)
      }, [
        (h(!0), x(ae, null, ne(C(o), (b, v) => (h(), x("div", {
          key: v,
          class: g(k.value.weekday)
        }, U(b), 3))), 128))
      ], 2),
      V("div", {
        class: g(k.value.days)
      }, [
        (h(!0), x(ae, null, ne(C(n), (b, v) => (h(), x("button", {
          key: v,
          class: g([
            k.value.day,
            b.isToday ? k.value.today : "",
            b.isSelected ? k.value.selected : "",
            b.isDisabled ? k.value.disabled : "",
            b.isCurrentMonth ? "" : k.value.adjacent
          ]),
          onClick: (d) => C(p)(b.date),
          disabled: b.isDisabled || y.disabled || y.readonly
        }, U(b.day), 11, un))), 128))
      ], 2)
    ], 2));
  }
}), kt = Q(cn), fn = (l, a) => {
  const e = H(!1), t = H(null), r = H(null), o = H(null), n = H(null), u = H(null), s = H(null), i = m(() => {
    let z = 0, E = 0, D = 0;
    if (l.modelValue) {
      if (l.modelValue instanceof Date)
        z = l.modelValue.getHours(), E = l.modelValue.getMinutes(), D = l.modelValue.getSeconds();
      else if (typeof l.modelValue == "string") {
        const N = l.modelValue.split(":");
        z = parseInt(N[0]) || 0, E = parseInt(N[1]) || 0, D = N[2] ? parseInt(N[2]) : 0;
      }
    }
    return { hours: z, minutes: E, seconds: D };
  }), p = H(i.value.hours), k = H(i.value.minutes), y = H(i.value.seconds), c = H(i.value.hours >= 12 ? "pm" : "am"), b = m(() => {
    const z = [], E = l.hourStep || 1, D = l.format === "12h", N = D ? 1 : 0, j = D ? 12 : 23;
    for (let K = N; K <= j; K += E)
      z.push(K);
    return z;
  }), v = m(() => {
    const z = [], E = l.minuteStep || 1;
    for (let D = 0; D <= 59; D += E)
      z.push(D);
    return z;
  }), d = m(() => {
    const z = [], E = l.secondStep || 1;
    for (let D = 0; D <= 59; D += E)
      z.push(D);
    return z;
  }), f = m(() => {
    if (!l.modelValue) return "";
    try {
      if (l.modelValue instanceof Date) {
        const z = {
          hour: "numeric",
          minute: "2-digit"
        };
        return l.showSeconds && (z.second = "2-digit"), l.format === "12h" ? z.hour12 = !0 : z.hour12 = !1, new Intl.DateTimeFormat("default", z).format(
          l.modelValue
        );
      } else
        return l.modelValue;
    } catch (z) {
      return console.error("Time formatting error:", z), l.modelValue instanceof Date ? l.modelValue.toLocaleTimeString() : l.modelValue;
    }
  }), S = () => {
    l.disabled || l.readonly || (e.value = !e.value, e.value && (p.value = i.value.hours, k.value = i.value.minutes, y.value = i.value.seconds, c.value = i.value.hours >= 12 ? "pm" : "am", setTimeout(() => {
      B();
    }, 50)));
  }, w = () => {
    e.value = !1;
  }, B = () => {
    const z = (E, D) => {
      if (!E) return;
      const j = E.querySelectorAll("div")[D];
      j && (E.scrollTop = j.offsetTop - E.offsetHeight / 2 + j.offsetHeight / 2);
    };
    if (l.format === "12h") {
      const E = p.value > 12 ? p.value - 12 : p.value === 0 ? 12 : p.value;
      z(o.value, b.value.indexOf(E));
    } else
      z(o.value, b.value.indexOf(p.value));
    z(
      n.value,
      v.value.indexOf(k.value)
    ), l.showSeconds && u.value && z(
      u.value,
      d.value.indexOf(y.value)
    ), l.format === "12h" && s.value && z(s.value, c.value === "am" ? 0 : 1);
  }, M = () => {
    let z = p.value;
    l.format === "12h" && (c.value === "pm" && z < 12 ? z += 12 : c.value === "am" && z === 12 && (z = 0));
    let E;
    if (l.modelValue instanceof Date) {
      const D = new Date(l.modelValue);
      D.setHours(z), D.setMinutes(k.value), D.setSeconds(l.showSeconds ? y.value : 0), E = D;
    } else {
      const D = z.toString().padStart(2, "0"), N = k.value.toString().padStart(2, "0");
      if (l.showSeconds) {
        const j = y.value.toString().padStart(2, "0");
        E = `${D}:${N}:${j}`;
      } else
        E = `${D}:${N}`;
    }
    a("update:modelValue", E), a("change", E);
  }, I = (z) => {
    p.value = z, M();
  }, O = (z) => {
    k.value = z, M();
  }, $ = (z) => {
    y.value = z, M();
  }, T = (z) => {
    c.value = z, M();
  }, L = (z) => {
    z.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, A = (z) => {
    a("focus", z);
  }, P = (z) => {
    a("blur", z);
  }, F = (z) => {
    e.value && t.value && r.value && !t.value.contains(z.target) && !r.value.contains(z.target) && w();
  };
  return be(() => {
    document.addEventListener("mousedown", F);
  }), Me(() => {
    document.removeEventListener("mousedown", F);
  }), ee(
    () => l.modelValue,
    (z) => {
      z ? (p.value = i.value.hours, k.value = i.value.minutes, y.value = i.value.seconds, c.value = i.value.hours >= 12 ? "pm" : "am") : w();
    }
  ), {
    isOpen: e,
    inputRef: t,
    dropdownRef: r,
    hourRef: o,
    minuteRef: n,
    secondRef: u,
    ampmRef: s,
    formattedValue: f,
    hourList: b,
    minuteList: v,
    secondList: d,
    selectedHour: p,
    selectedMinute: k,
    selectedSecond: y,
    selectedAmPm: c,
    toggleDropdown: S,
    closeDropdown: w,
    selectHour: I,
    selectMinute: O,
    selectSecond: $,
    selectAmPm: T,
    handleClear: L,
    handleFocus: A,
    handleBlur: P
  };
}, pn = R({
  base: "relative w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), gn = R({
  base: "relative flex items-center"
}), bn = R({
  base: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-900",
  variants: {
    error: {
      true: "border-red-500 focus:ring-red-500"
    }
  }
}), vn = R({
  base: "absolute right-3 cursor-pointer text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300"
}), mn = R({
  base: "absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800"
}), yn = R({
  base: "flex space-x-2 h-52 overflow-hidden"
}), hn = R({
  base: "flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700"
}), ut = R({
  base: "cursor-pointer rounded-md px-3 py-2 text-center text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700",
  variants: {
    selected: {
      true: "bg-blue-100 font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
    }
  }
}), wn = {
  "update:modelValue": (l) => l === null || typeof l == "string" || l instanceof Date,
  change: (l) => l === null || typeof l == "string" || l instanceof Date,
  focus: (l) => l instanceof FocusEvent,
  blur: (l) => l instanceof FocusEvent,
  clear: () => !0
}, xn = ["value", "placeholder", "disabled"], kn = ["onClick"], Cn = ["onClick"], zn = ["onClick"], Sn = /* @__PURE__ */ J({
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
  emits: wn,
  setup(l, { emit: a }) {
    const e = a, t = l, {
      isOpen: r,
      inputRef: o,
      dropdownRef: n,
      hourRef: u,
      minuteRef: s,
      secondRef: i,
      ampmRef: p,
      formattedValue: k,
      hourList: y,
      minuteList: c,
      secondList: b,
      selectedHour: v,
      selectedMinute: d,
      selectedSecond: f,
      selectedAmPm: S,
      toggleDropdown: w,
      selectHour: B,
      selectMinute: M,
      selectSecond: I,
      selectAmPm: O,
      handleClear: $,
      handleFocus: T,
      handleBlur: L
    } = fn(t, e), A = m(() => {
      var P, F, z, E, D, N, j, K, Y, oe, W, Z, le, te, se, de, fe, ve;
      return {
        root: t.unstyled ? ((P = t.pt) == null ? void 0 : P.root) || "" : pn({ unstyled: t.unstyled, class: (F = t.pt) == null ? void 0 : F.root }),
        inputWrapper: t.unstyled ? ((z = t.pt) == null ? void 0 : z.inputWrapper) || "" : gn({ class: (E = t.pt) == null ? void 0 : E.inputWrapper }),
        input: t.unstyled ? ((D = t.pt) == null ? void 0 : D.input) || "" : bn({ class: (N = t.pt) == null ? void 0 : N.input }),
        clearButton: t.unstyled ? ((j = t.pt) == null ? void 0 : j.clearButton) || "" : vn({ class: (K = t.pt) == null ? void 0 : K.clearButton }),
        dropdown: t.unstyled ? ((Y = t.pt) == null ? void 0 : Y.dropdown) || "" : mn({ class: (oe = t.pt) == null ? void 0 : oe.dropdown }),
        timeSelector: t.unstyled ? ((W = t.pt) == null ? void 0 : W.timeSelector) || "" : yn({ class: (Z = t.pt) == null ? void 0 : Z.timeSelector }),
        column: t.unstyled ? ((le = t.pt) == null ? void 0 : le.column) || "" : hn({ class: (te = t.pt) == null ? void 0 : te.column }),
        item: t.unstyled ? ((se = t.pt) == null ? void 0 : se.item) || "" : ut({ class: (de = t.pt) == null ? void 0 : de.item }),
        itemSelected: t.unstyled ? ((fe = t.pt) == null ? void 0 : fe.itemSelected) || "" : ut({ selected: !0, class: (ve = t.pt) == null ? void 0 : ve.itemSelected }).split(" ").filter((pe) => !ut().includes(pe)).join(" ")
      };
    });
    return (P, F) => (h(), x("div", {
      class: g(A.value.root)
    }, [
      V("div", {
        class: g(A.value.inputWrapper),
        onClick: F[3] || (F[3] = //@ts-ignore
        (...z) => C(w) && C(w)(...z))
      }, [
        V("input", {
          ref_key: "inputRef",
          ref: o,
          type: "text",
          class: g(A.value.input),
          value: C(k),
          placeholder: P.placeholder,
          disabled: P.disabled,
          readonly: !0,
          onFocus: F[0] || (F[0] = //@ts-ignore
          (...z) => C(T) && C(T)(...z)),
          onBlur: F[1] || (F[1] = //@ts-ignore
          (...z) => C(L) && C(L)(...z))
        }, null, 42, xn),
        P.clearable && P.modelValue && !P.disabled && !P.readonly ? (h(), x("span", {
          key: 0,
          class: g(A.value.clearButton),
          onClick: F[2] || (F[2] = //@ts-ignore
          (...z) => C($) && C($)(...z))
        }, F[6] || (F[6] = [
          V("svg", {
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
            V("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }),
            V("line", {
              x1: "6",
              y1: "6",
              x2: "18",
              y2: "18"
            })
          ], -1)
        ]), 2)) : _("", !0)
      ], 2),
      C(r) ? (h(), x("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: n,
        class: g(A.value.dropdown)
      }, [
        V("div", {
          class: g(A.value.timeSelector)
        }, [
          V("div", {
            ref_key: "hourRef",
            ref: u,
            class: g(A.value.column)
          }, [
            (h(!0), x(ae, null, ne(C(y), (z) => (h(), x("div", {
              key: `hour-${z}`,
              class: g([
                A.value.item,
                (P.format === "12h" ? (C(v) > 12 ? C(v) - 12 : C(v) === 0 ? 12 : C(v)) === z : C(v) === z) ? A.value.itemSelected : ""
              ]),
              onClick: (E) => C(B)(z)
            }, U(z.toString().padStart(2, "0")), 11, kn))), 128))
          ], 2),
          V("div", {
            ref_key: "minuteRef",
            ref: s,
            class: g(A.value.column)
          }, [
            (h(!0), x(ae, null, ne(C(c), (z) => (h(), x("div", {
              key: `minute-${z}`,
              class: g([
                A.value.item,
                C(d) === z ? A.value.itemSelected : ""
              ]),
              onClick: (E) => C(M)(z)
            }, U(z.toString().padStart(2, "0")), 11, Cn))), 128))
          ], 2),
          P.showSeconds ? (h(), x("div", {
            key: 0,
            ref_key: "secondRef",
            ref: i,
            class: g(A.value.column)
          }, [
            (h(!0), x(ae, null, ne(C(b), (z) => (h(), x("div", {
              key: `second-${z}`,
              class: g([
                A.value.item,
                C(f) === z ? A.value.itemSelected : ""
              ]),
              onClick: (E) => C(I)(z)
            }, U(z.toString().padStart(2, "0")), 11, zn))), 128))
          ], 2)) : _("", !0),
          P.format === "12h" ? (h(), x("div", {
            key: 1,
            ref_key: "ampmRef",
            ref: p,
            class: g(A.value.column)
          }, [
            V("div", {
              class: g([
                A.value.item,
                C(S) === "am" ? A.value.itemSelected : ""
              ]),
              onClick: F[4] || (F[4] = (z) => C(O)("am"))
            }, " AM ", 2),
            V("div", {
              class: g([
                A.value.item,
                C(S) === "pm" ? A.value.itemSelected : ""
              ]),
              onClick: F[5] || (F[5] = (z) => C(O)("pm"))
            }, " PM ", 2)
          ], 2)) : _("", !0)
        ], 2)
      ], 2)) : _("", !0)
    ], 2));
  }
}), al = Q(Sn), Bn = (l, a) => {
  const e = H(!1), t = H(null), r = H(null), o = m(() => {
    if (!l.modelValue) return "";
    try {
      const c = l.locale || "default", b = {};
      return l.format ? (l.format.includes("yyyy") && (b.year = "numeric"), l.format.includes("MM") ? b.month = "2-digit" : l.format.includes("M") && (b.month = "numeric"), l.format.includes("dd") ? b.day = "2-digit" : l.format.includes("d") && (b.day = "numeric"), Object.keys(b).length === 0 && (b.year = "numeric", b.month = "2-digit", b.day = "2-digit")) : (b.year = "numeric", b.month = "2-digit", b.day = "2-digit"), new Intl.DateTimeFormat(c, b).format(l.modelValue);
    } catch (c) {
      return console.error("Date formatting error:", c), l.modelValue.toLocaleDateString();
    }
  }), n = () => {
    l.disabled || l.readonly || (e.value = !e.value);
  }, u = () => {
    e.value = !1;
  }, s = (c) => {
    c === null ? (a("update:modelValue", null), a("change", null)) : (a("update:modelValue", c), a("change", c)), u();
  }, i = (c) => {
    c.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, p = (c) => {
    a("focus", c);
  }, k = (c) => {
    a("blur", c);
  }, y = (c) => {
    e.value && t.value && r.value && !t.value.contains(c.target) && !r.value.contains(c.target) && u();
  };
  return be(() => {
    document.addEventListener("mousedown", y);
  }), Me(() => {
    document.removeEventListener("mousedown", y);
  }), ee(
    () => l.modelValue,
    (c) => {
      c || u();
    }
  ), {
    isOpen: e,
    inputRef: t,
    dropdownRef: r,
    formattedValue: o,
    toggleDropdown: n,
    closeDropdown: u,
    handleDateChange: s,
    handleClear: i,
    handleFocus: p,
    handleBlur: k
  };
}, Vn = R({
  base: "relative w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), $n = R({
  base: "relative flex items-center"
}), In = R({
  base: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-900",
  variants: {
    error: {
      true: "border-red-500 focus:ring-red-500"
    }
  }
}), Dn = R({
  base: "absolute right-3 cursor-pointer text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300"
}), Mn = R({
  base: "absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800"
}), Tn = {
  "update:modelValue": (l) => l === null || l instanceof Date,
  change: (l) => l === null || l instanceof Date,
  focus: (l) => l instanceof FocusEvent,
  blur: (l) => l instanceof FocusEvent,
  clear: () => !0
}, Rn = ["value", "placeholder", "disabled"], En = /* @__PURE__ */ J({
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
  emits: Tn,
  setup(l, { emit: a }) {
    const e = a, t = l, {
      isOpen: r,
      inputRef: o,
      dropdownRef: n,
      formattedValue: u,
      toggleDropdown: s,
      handleDateChange: i,
      handleClear: p,
      handleFocus: k,
      handleBlur: y
    } = Bn(t, e), c = m(() => {
      var b, v, d, f, S, w, B, M, I, O;
      return {
        root: t.unstyled ? ((b = t.pt) == null ? void 0 : b.root) || "" : Vn({ unstyled: t.unstyled, class: (v = t.pt) == null ? void 0 : v.root }),
        inputWrapper: t.unstyled ? ((d = t.pt) == null ? void 0 : d.inputWrapper) || "" : $n({ class: (f = t.pt) == null ? void 0 : f.inputWrapper }),
        input: t.unstyled ? ((S = t.pt) == null ? void 0 : S.input) || "" : In({ class: (w = t.pt) == null ? void 0 : w.input }),
        clearButton: t.unstyled ? ((B = t.pt) == null ? void 0 : B.clearButton) || "" : Dn({ class: (M = t.pt) == null ? void 0 : M.clearButton }),
        dropdown: t.unstyled ? ((I = t.pt) == null ? void 0 : I.dropdown) || "" : Mn({ class: (O = t.pt) == null ? void 0 : O.dropdown })
      };
    });
    return (b, v) => {
      var d;
      return h(), x("div", {
        class: g(c.value.root)
      }, [
        V("div", {
          class: g(c.value.inputWrapper),
          onClick: v[3] || (v[3] = //@ts-ignore
          (...f) => C(s) && C(s)(...f))
        }, [
          V("input", {
            ref_key: "inputRef",
            ref: o,
            type: "text",
            class: g(c.value.input),
            value: C(u),
            placeholder: b.placeholder,
            disabled: b.disabled,
            readonly: !0,
            onFocus: v[0] || (v[0] = //@ts-ignore
            (...f) => C(k) && C(k)(...f)),
            onBlur: v[1] || (v[1] = //@ts-ignore
            (...f) => C(y) && C(y)(...f))
          }, null, 42, Rn),
          b.clearable && b.modelValue && !b.disabled && !b.readonly ? (h(), x("span", {
            key: 0,
            class: g(c.value.clearButton),
            onClick: v[2] || (v[2] = //@ts-ignore
            (...f) => C(p) && C(p)(...f))
          }, v[4] || (v[4] = [
            V("svg", {
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
              V("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
              }),
              V("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
              })
            ], -1)
          ]), 2)) : _("", !0)
        ], 2),
        C(r) ? (h(), x("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: n,
          class: g(c.value.dropdown)
        }, [
          Be(C(kt), {
            modelValue: b.modelValue,
            min: b.min,
            max: b.max,
            disabled: b.disabled,
            readonly: b.readonly,
            firstDayOfWeek: b.firstDayOfWeek,
            locale: b.locale,
            pt: (d = b.pt) == null ? void 0 : d.calendar,
            "onUpdate:modelValue": C(i)
          }, null, 8, ["modelValue", "min", "max", "disabled", "readonly", "firstDayOfWeek", "locale", "pt", "onUpdate:modelValue"])
        ], 2)) : _("", !0)
      ], 2);
    };
  }
}), Ln = Q(En), An = (l, a) => {
  const e = H(!1), t = H("date"), r = H(null), o = H(null), n = H(l.modelValue || /* @__PURE__ */ new Date()), u = m(() => {
    if (!l.modelValue) return "";
    try {
      const f = l.locale || "default", S = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "2-digit"
      };
      return l.showSeconds && (S.second = "2-digit"), l.timeFormat === "12h" ? S.hour12 = !0 : S.hour12 = !1, new Intl.DateTimeFormat(f, S).format(l.modelValue);
    } catch (f) {
      return console.error("DateTime formatting error:", f), l.modelValue.toLocaleString();
    }
  }), s = () => {
    l.disabled || l.readonly || (e.value = !e.value, e.value && (n.value = l.modelValue || /* @__PURE__ */ new Date()));
  }, i = () => {
    e.value = !1;
  }, p = (f) => {
    t.value = f;
  }, k = (f) => {
    if (!f) return;
    const S = new Date(n.value);
    S.setFullYear(f.getFullYear()), S.setMonth(f.getMonth()), S.setDate(f.getDate()), n.value = S, a("update:modelValue", S), a("change", S), p("time");
  }, y = (f) => {
    if (!f) return;
    const S = new Date(n.value);
    if (f instanceof Date)
      S.setHours(f.getHours()), S.setMinutes(f.getMinutes()), S.setSeconds(f.getSeconds());
    else if (typeof f == "string") {
      const w = f.split(":");
      w.length >= 2 && (S.setHours(parseInt(w[0]) || 0), S.setMinutes(parseInt(w[1]) || 0), w.length >= 3 && S.setSeconds(parseInt(w[2]) || 0));
    }
    n.value = S, a("update:modelValue", S), a("change", S), i();
  }, c = (f) => {
    f.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, b = (f) => {
    a("focus", f);
  }, v = (f) => {
    a("blur", f);
  }, d = (f) => {
    e.value && r.value && o.value && !r.value.contains(f.target) && !o.value.contains(f.target) && i();
  };
  return be(() => {
    document.addEventListener("mousedown", d);
  }), Me(() => {
    document.removeEventListener("mousedown", d);
  }), ee(
    () => l.modelValue,
    (f) => {
      f ? n.value = f : i();
    }
  ), {
    isOpen: e,
    activeTab: t,
    inputRef: r,
    dropdownRef: o,
    currentDateTime: n,
    formattedValue: u,
    toggleDropdown: s,
    closeDropdown: i,
    switchTab: p,
    handleDateChange: k,
    handleTimeChange: y,
    handleClear: c,
    handleFocus: b,
    handleBlur: v
  };
}, On = R({
  base: "relative w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), Pn = R({
  base: "relative flex items-center"
}), jn = R({
  base: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-900",
  variants: {
    error: {
      true: "border-red-500 focus:ring-red-500"
    }
  }
}), Fn = R({
  base: "absolute right-3 cursor-pointer text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300"
}), Wn = R({
  base: "absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800"
}), Hn = R({
  base: "mb-4 flex border-b border-gray-200 dark:border-gray-700"
}), ct = R({
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
}), _n = R({
  base: "mt-2"
}), Nn = {
  "update:modelValue": (l) => l === null || l instanceof Date,
  change: (l) => l === null || l instanceof Date,
  focus: (l) => l instanceof FocusEvent,
  blur: (l) => l instanceof FocusEvent,
  clear: () => !0
}, Gn = ["value", "placeholder", "disabled"], Kn = /* @__PURE__ */ J({
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
  emits: Nn,
  setup(l, { emit: a }) {
    const e = a, t = l, {
      isOpen: r,
      activeTab: o,
      inputRef: n,
      dropdownRef: u,
      currentDateTime: s,
      formattedValue: i,
      toggleDropdown: p,
      switchTab: k,
      handleDateChange: y,
      handleTimeChange: c,
      handleClear: b,
      handleFocus: v,
      handleBlur: d
    } = An(t, e), f = m(() => {
      var S, w, B, M, I, O, $, T, L, A, P, F, z, E, D, N, j, K;
      return {
        root: t.unstyled ? ((S = t.pt) == null ? void 0 : S.root) || "" : On({
          unstyled: t.unstyled,
          class: (w = t.pt) == null ? void 0 : w.root
        }),
        inputWrapper: t.unstyled ? ((B = t.pt) == null ? void 0 : B.inputWrapper) || "" : Pn({ class: (M = t.pt) == null ? void 0 : M.inputWrapper }),
        input: t.unstyled ? ((I = t.pt) == null ? void 0 : I.input) || "" : jn({ class: (O = t.pt) == null ? void 0 : O.input }),
        clearButton: t.unstyled ? (($ = t.pt) == null ? void 0 : $.clearButton) || "" : Fn({ class: (T = t.pt) == null ? void 0 : T.clearButton }),
        dropdown: t.unstyled ? ((L = t.pt) == null ? void 0 : L.dropdown) || "" : Wn({ class: (A = t.pt) == null ? void 0 : A.dropdown }),
        tabs: t.unstyled ? ((P = t.pt) == null ? void 0 : P.tabs) || "" : Hn({ class: (F = t.pt) == null ? void 0 : F.tabs }),
        tab: t.unstyled ? ((z = t.pt) == null ? void 0 : z.tab) || "" : ct({ class: (E = t.pt) == null ? void 0 : E.tab }),
        activeTab: t.unstyled ? ((D = t.pt) == null ? void 0 : D.activeTab) || "" : ct({ active: !0, class: (N = t.pt) == null ? void 0 : N.activeTab }).split(" ").filter((Y) => !ct().includes(Y)).join(" "),
        tabContent: t.unstyled ? ((j = t.pt) == null ? void 0 : j.tabContent) || "" : _n({ class: (K = t.pt) == null ? void 0 : K.tabContent })
      };
    });
    return (S, w) => {
      var B, M, I, O, $, T, L, A, P, F;
      return h(), x("div", {
        class: g(f.value.root)
      }, [
        V("div", {
          class: g(f.value.inputWrapper),
          onClick: w[3] || (w[3] = //@ts-ignore
          (...z) => C(p) && C(p)(...z))
        }, [
          V("input", {
            ref_key: "inputRef",
            ref: n,
            type: "text",
            class: g(f.value.input),
            value: C(i),
            placeholder: S.placeholder,
            disabled: S.disabled,
            readonly: !0,
            onFocus: w[0] || (w[0] = //@ts-ignore
            (...z) => C(v) && C(v)(...z)),
            onBlur: w[1] || (w[1] = //@ts-ignore
            (...z) => C(d) && C(d)(...z))
          }, null, 42, Gn),
          S.clearable && S.modelValue && !S.disabled && !S.readonly ? (h(), x("span", {
            key: 0,
            class: g(f.value.clearButton),
            onClick: w[2] || (w[2] = //@ts-ignore
            (...z) => C(b) && C(b)(...z))
          }, w[6] || (w[6] = [
            V("svg", {
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
              V("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
              }),
              V("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
              })
            ], -1)
          ]), 2)) : _("", !0)
        ], 2),
        C(r) ? (h(), x("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: u,
          class: g(f.value.dropdown)
        }, [
          V("div", {
            class: g(f.value.tabs)
          }, [
            V("div", {
              class: g([f.value.tab, C(o) === "date" ? f.value.activeTab : ""]),
              onClick: w[4] || (w[4] = (z) => C(k)("date"))
            }, " 日期 ", 2),
            V("div", {
              class: g([f.value.tab, C(o) === "time" ? f.value.activeTab : ""]),
              onClick: w[5] || (w[5] = (z) => C(k)("time"))
            }, " 时间 ", 2)
          ], 2),
          V("div", {
            class: g(f.value.tabContent)
          }, [
            He(V("div", null, [
              Be(C(kt), {
                modelValue: C(s),
                min: S.min,
                max: S.max,
                disabled: S.disabled,
                readonly: S.readonly,
                firstDayOfWeek: S.firstDayOfWeek,
                locale: S.locale,
                pt: (M = (B = S.pt) == null ? void 0 : B.datePicker) == null ? void 0 : M.calendar,
                "onUpdate:modelValue": C(y)
              }, null, 8, ["modelValue", "min", "max", "disabled", "readonly", "firstDayOfWeek", "locale", "pt", "onUpdate:modelValue"])
            ], 512), [
              [pt, C(o) === "date"]
            ]),
            He(V("div", null, [
              Be(C(al), {
                modelValue: C(s),
                disabled: S.disabled,
                readonly: S.readonly,
                format: S.timeFormat,
                hourStep: S.hourStep,
                minuteStep: S.minuteStep,
                secondStep: S.secondStep,
                showSeconds: S.showSeconds,
                pt: {
                  timeSelector: (O = (I = S.pt) == null ? void 0 : I.timePicker) == null ? void 0 : O.timeSelector,
                  column: (T = ($ = S.pt) == null ? void 0 : $.timePicker) == null ? void 0 : T.column,
                  item: (A = (L = S.pt) == null ? void 0 : L.timePicker) == null ? void 0 : A.item,
                  itemSelected: (F = (P = S.pt) == null ? void 0 : P.timePicker) == null ? void 0 : F.itemSelected
                },
                "onUpdate:modelValue": C(c)
              }, null, 8, ["modelValue", "disabled", "readonly", "format", "hourStep", "minuteStep", "secondStep", "showSeconds", "pt", "onUpdate:modelValue"])
            ], 512), [
              [pt, C(o) === "time"]
            ])
          ], 2)
        ], 2)) : _("", !0)
      ], 2);
    };
  }
}), Yn = Q(Kn), Un = (l, a) => {
  const e = H(!1), t = H(null), r = H(null), o = m(() => {
    if (l.options && l.options.length > 0)
      return l.options;
    const c = [], b = l.start || "00:00", v = l.end || "23:59", d = l.step || 30, [f, S] = b.split(":").map(Number), [w, B] = v.split(":").map(Number), M = f * 60 + S, I = w * 60 + B;
    for (let O = M; O <= I; O += d) {
      const $ = Math.floor(O / 60), T = O % 60;
      if (l.format === "12h") {
        const L = $ >= 12 ? "PM" : "AM", A = $ === 0 ? 12 : $ > 12 ? $ - 12 : $;
        c.push(
          `${A.toString().padStart(2, "0")}:${T.toString().padStart(2, "0")} ${L}`
        );
      } else
        c.push(
          `${$.toString().padStart(2, "0")}:${T.toString().padStart(2, "0")}`
        );
    }
    return c;
  }), n = () => {
    l.disabled || l.readonly || (e.value = !e.value);
  }, u = () => {
    e.value = !1;
  }, s = (c) => {
    a("update:modelValue", c), a("change", c), u();
  }, i = (c) => {
    c.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, p = (c) => {
    a("focus", c);
  }, k = (c) => {
    a("blur", c);
  }, y = (c) => {
    e.value && t.value && r.value && !t.value.contains(c.target) && !r.value.contains(c.target) && u();
  };
  return be(() => {
    document.addEventListener("mousedown", y);
  }), Me(() => {
    document.removeEventListener("mousedown", y);
  }), ee(
    () => l.modelValue,
    (c) => {
      c || u();
    }
  ), {
    isOpen: e,
    inputRef: t,
    dropdownRef: r,
    timeOptions: o,
    toggleDropdown: n,
    selectOption: s,
    handleClear: i,
    handleFocus: p,
    handleBlur: k
  };
}, Xn = R({
  base: "relative w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), qn = R({
  base: "relative flex items-center"
}), Zn = R({
  base: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-900",
  variants: {
    error: {
      true: "border-red-500 focus:ring-red-500"
    }
  }
}), Jn = R({
  base: "absolute right-3 cursor-pointer text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300"
}), Qn = R({
  base: "absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
}), es = R({
  base: "max-h-60 overflow-auto py-1"
}), Ye = R({
  base: "cursor-pointer px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700",
  variants: {
    selected: {
      true: "bg-blue-100 font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
    },
    disabled: {
      true: "cursor-not-allowed opacity-50 hover:bg-transparent dark:hover:bg-transparent"
    }
  }
}), ts = {
  "update:modelValue": (l) => l === null || typeof l == "string",
  change: (l) => l === null || typeof l == "string",
  focus: (l) => l instanceof FocusEvent,
  blur: (l) => l instanceof FocusEvent,
  clear: () => !0
}, ls = ["value", "placeholder", "disabled"], as = ["onClick"], rs = /* @__PURE__ */ J({
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
  emits: ts,
  setup(l, { emit: a }) {
    const e = a, t = l, {
      isOpen: r,
      inputRef: o,
      dropdownRef: n,
      timeOptions: u,
      toggleDropdown: s,
      selectOption: i,
      handleClear: p,
      handleFocus: k,
      handleBlur: y
    } = Un(t, e), c = m(() => {
      var b, v, d, f, S, w, B, M, I, O, $, T, L, A, P, F;
      return {
        root: t.unstyled ? ((b = t.pt) == null ? void 0 : b.root) || "" : Xn({ unstyled: t.unstyled, class: (v = t.pt) == null ? void 0 : v.root }),
        inputWrapper: t.unstyled ? ((d = t.pt) == null ? void 0 : d.inputWrapper) || "" : qn({ class: (f = t.pt) == null ? void 0 : f.inputWrapper }),
        input: t.unstyled ? ((S = t.pt) == null ? void 0 : S.input) || "" : Zn({ class: (w = t.pt) == null ? void 0 : w.input }),
        clearButton: t.unstyled ? ((B = t.pt) == null ? void 0 : B.clearButton) || "" : Jn({ class: (M = t.pt) == null ? void 0 : M.clearButton }),
        dropdown: t.unstyled ? ((I = t.pt) == null ? void 0 : I.dropdown) || "" : Qn({ class: (O = t.pt) == null ? void 0 : O.dropdown }),
        optionsList: t.unstyled ? (($ = t.pt) == null ? void 0 : $.optionsList) || "" : es({ class: (T = t.pt) == null ? void 0 : T.optionsList }),
        option: t.unstyled ? ((L = t.pt) == null ? void 0 : L.option) || "" : Ye({ class: (A = t.pt) == null ? void 0 : A.option }),
        optionSelected: t.unstyled ? ((P = t.pt) == null ? void 0 : P.optionSelected) || "" : Ye({
          selected: !0,
          class: (F = t.pt) == null ? void 0 : F.optionSelected
        }).split(" ").filter((z) => !Ye().includes(z)).join(" "),
        optionDisabled: t.unstyled ? "" : Ye({ disabled: !0 }).split(" ").filter((z) => !Ye().includes(z)).join(" ")
      };
    });
    return (b, v) => (h(), x("div", {
      class: g(c.value.root)
    }, [
      V("div", {
        class: g(c.value.inputWrapper),
        onClick: v[3] || (v[3] = //@ts-ignore
        (...d) => C(s) && C(s)(...d))
      }, [
        V("input", {
          ref_key: "inputRef",
          ref: o,
          type: "text",
          class: g(c.value.input),
          value: b.modelValue,
          placeholder: b.placeholder,
          disabled: b.disabled,
          readonly: !0,
          onFocus: v[0] || (v[0] = //@ts-ignore
          (...d) => C(k) && C(k)(...d)),
          onBlur: v[1] || (v[1] = //@ts-ignore
          (...d) => C(y) && C(y)(...d))
        }, null, 42, ls),
        b.clearable && b.modelValue && !b.disabled && !b.readonly ? (h(), x("span", {
          key: 0,
          class: g(c.value.clearButton),
          onClick: v[2] || (v[2] = //@ts-ignore
          (...d) => C(p) && C(p)(...d))
        }, v[4] || (v[4] = [
          V("svg", {
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
            V("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }),
            V("line", {
              x1: "6",
              y1: "6",
              x2: "18",
              y2: "18"
            })
          ], -1)
        ]), 2)) : _("", !0)
      ], 2),
      C(r) ? (h(), x("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: n,
        class: g(c.value.dropdown)
      }, [
        V("div", {
          class: g(c.value.optionsList)
        }, [
          (h(!0), x(ae, null, ne(C(u), (d, f) => (h(), x("div", {
            key: f,
            class: g([
              c.value.option,
              b.modelValue === d ? c.value.optionSelected : "",
              b.disabled ? c.value.optionDisabled : ""
            ]),
            onClick: (S) => !b.disabled && C(i)(d)
          }, U(d), 11, as))), 128)),
          C(u).length === 0 ? (h(), x("div", {
            key: 0,
            class: g(c.value.option),
            style: { cursor: "default" }
          }, " 无可用选项 ", 2)) : _("", !0)
        ], 2)
      ], 2)) : _("", !0)
    ], 2));
  }
}), os = Q(rs), ns = R({
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
}), ss = R({
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
}), is = R({
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
}), ds = R({
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
}), us = { key: 1 }, cs = /* @__PURE__ */ J({
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
    const a = l, e = m(() => {
      var o, n;
      return a.unstyled ? ((o = a.pt) == null ? void 0 : o.root) || "" : ns({
        animation: a.animation,
        rounded: a.rounded,
        class: (n = a.pt) == null ? void 0 : n.root
      });
    }), t = m(() => {
      var o;
      return a.unstyled && ((o = a.pt) == null ? void 0 : o.content) || "";
    }), r = m(() => {
      const o = {};
      return a.width && (o.width = typeof a.width == "number" ? `${a.width}px` : a.width), a.height && (o.height = typeof a.height == "number" ? `${a.height}px` : a.height), o;
    });
    return (o, n) => o.loading ? (h(), x("div", {
      key: 0,
      class: g(e.value),
      style: ue(r.value)
    }, [
      V("div", {
        class: g(t.value)
      }, [
        G(o.$slots, "skeleton")
      ], 2)
    ], 6)) : (h(), x("div", us, [
      G(o.$slots, "default")
    ]));
  }
}), fs = /* @__PURE__ */ J({
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
    const a = l, e = m(() => {
      var n, u;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.root) || "" : ss({
        rounded: a.rounded,
        class: (u = a.pt) == null ? void 0 : u.root
      });
    }), t = () => {
      var n, u;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.line) || "" : is({
        animation: a.animation,
        rounded: a.rounded,
        class: (u = a.pt) == null ? void 0 : u.line
      });
    }, r = (n) => typeof a.widths == "string" || typeof a.widths == "number" ? a.widths : Array.isArray(a.widths) && a.widths.length > 0 ? a.widths[n % a.widths.length] : "100%", o = (n) => {
      const u = r(n), s = {
        width: typeof u == "number" ? `${u}px` : u
      };
      return a.lineHeight && (s.height = typeof a.lineHeight == "number" ? `${a.lineHeight}px` : a.lineHeight), s;
    };
    return (n, u) => (h(), x("div", {
      class: g(e.value)
    }, [
      (h(!0), x(ae, null, ne(n.lines, (s) => (h(), x("div", {
        key: s,
        class: g(t()),
        style: ue(o(s - 1))
      }, null, 6))), 128))
    ], 2));
  }
}), ps = /* @__PURE__ */ J({
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
    const a = l, e = m(() => {
      var t, r;
      return a.unstyled ? ((t = a.pt) == null ? void 0 : t.root) || "" : ds({
        size: a.size,
        circle: a.circle,
        animation: a.animation,
        class: (r = a.pt) == null ? void 0 : r.root
      });
    });
    return (t, r) => (h(), x("div", {
      class: g(e.value)
    }, null, 2));
  }
}), gs = Q(cs), bs = Q(fs), vs = Q(ps);
function ms(l = {}) {
  const a = H(l.modelValue || ""), e = (o) => a.value === o, t = (o) => {
    var n;
    a.value = o, (n = l.onChange) == null || n.call(l, o);
  };
  return ee(
    () => l.modelValue,
    (o) => {
      o !== void 0 && o !== a.value && (a.value = o);
    }
  ), {
    activeTab: a,
    isActive: e,
    activate: t,
    onKeydown: (o, n) => {
      const u = n.indexOf(a.value);
      if (u === -1 && n.length > 0) {
        t(n[0]);
        return;
      }
      if (o.key === "ArrowRight" || o.key === "ArrowDown") {
        const s = (u + 1) % n.length;
        t(n[s]), o.preventDefault();
      } else if (o.key === "ArrowLeft" || o.key === "ArrowUp") {
        const s = (u - 1 + n.length) % n.length;
        t(n[s]), o.preventDefault();
      }
    }
  };
}
const ys = R({
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
}), hs = R({
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
}), ws = R({
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
}), xs = R({
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
}), ks = {
  "update:modelValue": (l) => typeof l == "string" || typeof l == "number",
  change: (l) => typeof l == "string" || typeof l == "number"
}, Cs = ["aria-disabled"], zs = ["aria-selected", "aria-disabled", "tabindex", "onClick"], Ss = /* @__PURE__ */ J({
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
  emits: ks,
  setup(l, { emit: a }) {
    const e = l, t = a, r = _e(), o = m(() => {
      if (!r.default) return [];
      const f = r.default({}) || [], S = /* @__PURE__ */ new Set(), w = [];
      return f.filter((B) => B.type && (B.type.name === "TabItem" || typeof B.type == "object" && B.type.__name === "TabItem")).forEach((B) => {
        const M = B.props || {}, I = M.name;
        I && !S.has(I) ? (S.add(I), w.push({
          name: I,
          title: M.title || M.label || "",
          disabled: M.disabled || !1
        })) : console.warn(
          I ? `[Tabs] 发现重复的TabItem name: ${I}，只有第一个会被显示` : "[Tabs] TabItem必须提供name属性"
        );
      }), w;
    }), n = m(
      () => o.value.map((f) => f.name)
    ), { activeTab: u, isActive: s, activate: i, onKeydown: p } = ms({
      modelValue: e.modelValue,
      onChange: (f) => {
        t("update:modelValue", f), t("change", f);
      }
    });
    ee(
      o,
      (f) => {
        f.length > 0 && !f.some((S) => s(S.name)) && i(f[0].name);
      },
      { immediate: !0 }
    );
    const k = (f, S) => {
      e.disabled || S || i(f);
    }, y = (f) => {
      p(f, n.value);
    }, c = m(() => {
      var f, S;
      return e.unstyled ? ((f = e.pt) == null ? void 0 : f.container) || "" : ys({
        placement: e.placement,
        fullWidth: e.fullWidth,
        disabled: e.disabled,
        class: (S = e.pt) == null ? void 0 : S.container
      });
    }), b = m(() => {
      var f, S;
      return e.unstyled ? ((f = e.pt) == null ? void 0 : f.nav) || "" : hs({
        variant: e.variant,
        placement: e.placement,
        fullWidth: e.fullWidth,
        size: e.size,
        class: (S = e.pt) == null ? void 0 : S.nav
      });
    }), v = (f, S) => {
      var w, B;
      return e.unstyled ? ((w = e.pt) == null ? void 0 : w.navItem) || "" : ws({
        variant: e.variant,
        active: s(f),
        disabled: e.disabled || S,
        size: e.size,
        fullWidth: e.fullWidth,
        class: (B = e.pt) == null ? void 0 : B.navItem
      });
    }, d = m(() => {
      var f, S;
      return e.unstyled ? ((f = e.pt) == null ? void 0 : f.content) || "" : xs({
        placement: e.placement,
        class: (S = e.pt) == null ? void 0 : S.content
      });
    });
    return $e("activeTab", u), (f, S) => (h(), x("div", {
      class: g(c.value),
      "aria-disabled": f.disabled,
      role: "tablist",
      onKeydown: y
    }, [
      V("div", {
        class: g(b.value)
      }, [
        (h(!0), x(ae, null, ne(o.value, (w) => (h(), x("button", {
          key: w.name,
          class: g(v(w.name, w.disabled)),
          role: "tab",
          "aria-selected": C(s)(w.name),
          "aria-disabled": f.disabled || w.disabled,
          tabindex: C(s)(w.name) ? 0 : -1,
          onClick: (B) => k(w.name, w.disabled)
        }, U(w.title), 11, zs))), 128))
      ], 2),
      V("div", {
        class: g(d.value)
      }, [
        G(f.$slots, "default")
      ], 2)
    ], 42, Cs));
  }
}), Bs = /* @__PURE__ */ J({
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
    const a = l, e = Ve("activeTab", H("")), t = m(() => e.value === a.name), r = m(() => {
      var o;
      return a.unstyled && ((o = a.pt) == null ? void 0 : o.root) || "";
    });
    return (o, n) => He((h(), x("div", {
      class: g(r.value)
    }, [
      G(o.$slots, "default")
    ], 2)), [
      [pt, t.value]
    ]);
  }
}), Vs = Q(Ss), $s = Q(Bs), Is = R({
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
}), Ds = R({
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
}), Ms = R({
  base: "text-lg font-medium"
}), Ts = R({
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
}), Rs = R({
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
}), Es = {
  "update:collapsed": (l) => typeof l == "boolean",
  collapse: (l) => typeof l == "boolean"
}, Ls = /* @__PURE__ */ J({
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
  emits: Es,
  setup(l, { emit: a }) {
    const e = l, t = a, r = H(e.defaultCollapsed);
    ee(
      () => e.defaultCollapsed,
      (k) => {
        r.value = k;
      }
    );
    const o = () => {
      e.collapsible && (r.value = !r.value, t("update:collapsed", r.value), t("collapse", r.value));
    }, n = m(() => {
      var k, y;
      return e.unstyled ? ((k = e.pt) == null ? void 0 : k.root) || "" : Is({
        variant: e.variant,
        padding: e.padding,
        radius: e.radius,
        bordered: e.bordered,
        class: (y = e.pt) == null ? void 0 : y.root
      });
    }), u = m(() => {
      var k, y;
      return e.unstyled ? ((k = e.pt) == null ? void 0 : k.header) || "" : Ds({
        padding: e.padding,
        collapsible: e.collapsible,
        class: (y = e.pt) == null ? void 0 : y.header
      });
    }), s = m(() => {
      var k, y;
      return e.unstyled ? ((k = e.pt) == null ? void 0 : k.title) || "" : Ms({
        class: (y = e.pt) == null ? void 0 : y.title
      });
    }), i = m(() => {
      var k, y;
      return e.unstyled ? ((k = e.pt) == null ? void 0 : k.content) || "" : Ts({
        padding: e.padding,
        collapsed: r.value,
        class: (y = e.pt) == null ? void 0 : y.content
      });
    }), p = m(() => {
      var k, y;
      return e.unstyled ? ((k = e.pt) == null ? void 0 : k.icon) || "" : Rs({
        collapsed: r.value,
        class: (y = e.pt) == null ? void 0 : y.icon
      });
    });
    return (k, y) => (h(), x("div", {
      class: g(n.value)
    }, [
      V("div", {
        class: g(u.value),
        onClick: o
      }, [
        V("div", {
          class: g(s.value)
        }, [
          G(k.$slots, "title", {}, () => [
            ce(U(k.title), 1)
          ])
        ], 2),
        k.collapsible ? (h(), x("div", {
          key: 0,
          class: g(p.value)
        }, [
          G(k.$slots, "icon", {}, () => [
            y[0] || (y[0] = V("svg", {
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
              V("polyline", { points: "6 9 12 15 18 9" })
            ], -1))
          ])
        ], 2)) : _("", !0)
      ], 2),
      V("div", {
        class: g(i.value)
      }, [
        G(k.$slots, "default")
      ], 2)
    ], 2));
  }
}), As = Q(Ls), Os = R({
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
}), Ps = R({
  base: "flex items-center gap-1"
}), js = R({
  base: ""
}), Fs = R({
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
}), Ws = R({
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
}), Hs = R({
  base: "ml-4 flex items-center text-gray-700 dark:text-gray-300"
}), _s = R({
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
}), Ns = R({
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
}), Gs = {
  "update:modelValue": (l) => typeof l == "number",
  change: (l) => typeof l == "number"
}, Ks = ["disabled"], Ys = ["disabled"], Us = ["onClick", "disabled", "aria-current"], Xs = ["disabled"], qs = ["disabled"], Zs = ["max", "disabled"], Js = ["disabled"], Qs = /* @__PURE__ */ J({
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
  emits: Gs,
  setup(l, { emit: a }) {
    const e = l, t = a, r = H(e.modelValue);
    ee(
      () => e.modelValue,
      (w) => {
        w !== r.value && (r.value = w);
      }
    );
    const o = m({
      get: () => r.value,
      set: (w) => {
        r.value = w, t("update:modelValue", w), t("change", w);
      }
    }), n = H(""), u = m(() => e.disabled), s = m(() => {
      const w = e.totalPages, B = r.value, M = e.visiblePageCount;
      if (w <= M)
        return Array.from({ length: w }, (L, A) => A + 1);
      const I = Math.floor(M / 2);
      let O = B - I, $ = B + I;
      O < 1 && ($ = Math.min(w, $ + (1 - O)), O = 1), $ > w && (O = Math.max(1, O - ($ - w)), $ = w);
      const T = [];
      O > 1 && (T.push(1), O > 2 && T.push("..."));
      for (let L = O; L <= $; L++)
        T.push(L);
      return $ < w && ($ < w - 1 && T.push("..."), T.push(w)), T;
    }), i = (w) => {
      w >= 1 && w <= e.totalPages && w !== o.value && (o.value = w);
    }, p = () => {
      const w = Number(n.value);
      !isNaN(w) && w >= 1 && w <= e.totalPages && i(w), n.value = "";
    }, k = m(() => {
      var w, B;
      return e.unstyled ? ((w = e.pt) == null ? void 0 : w.root) || "" : Os({
        disabled: e.disabled,
        class: (B = e.pt) == null ? void 0 : B.root
      });
    }), y = m(() => {
      var w, B;
      return e.unstyled ? ((w = e.pt) == null ? void 0 : w.list) || "" : Ps({
        class: (B = e.pt) == null ? void 0 : B.list
      });
    }), c = m(() => {
      var w, B;
      return e.unstyled ? ((w = e.pt) == null ? void 0 : w.item) || "" : js({
        class: (B = e.pt) == null ? void 0 : B.item
      });
    }), b = (w, B) => {
      var M, I, O, $, T, L, A, P, F, z, E, D;
      return e.unstyled ? B === "first" ? ((M = e.pt) == null ? void 0 : M.firstButton) || "" : B === "prev" ? ((I = e.pt) == null ? void 0 : I.prevButton) || "" : B === "next" ? ((O = e.pt) == null ? void 0 : O.nextButton) || "" : B === "last" ? (($ = e.pt) == null ? void 0 : $.lastButton) || "" : w === o.value ? ((T = e.pt) == null ? void 0 : T.activeButton) || "" : ((L = e.pt) == null ? void 0 : L.button) || "" : Fs({
        variant: e.variant,
        size: e.size,
        shape: e.shape,
        active: w === o.value,
        disabled: e.disabled,
        class: w === o.value ? (A = e.pt) == null ? void 0 : A.activeButton : B === "first" ? (P = e.pt) == null ? void 0 : P.firstButton : B === "prev" ? (F = e.pt) == null ? void 0 : F.prevButton : B === "next" ? (z = e.pt) == null ? void 0 : z.nextButton : B === "last" ? (E = e.pt) == null ? void 0 : E.lastButton : (D = e.pt) == null ? void 0 : D.button
      });
    }, v = m(() => {
      var w, B;
      return e.unstyled ? ((w = e.pt) == null ? void 0 : w.ellipsis) || "" : Ws({
        size: e.size,
        class: (B = e.pt) == null ? void 0 : B.ellipsis
      });
    }), d = m(() => {
      var w, B;
      return e.unstyled ? ((w = e.pt) == null ? void 0 : w.jumper) || "" : Hs({
        class: (B = e.pt) == null ? void 0 : B.jumper
      });
    }), f = m(() => {
      var w, B;
      return e.unstyled ? ((w = e.pt) == null ? void 0 : w.jumperInput) || "" : _s({
        size: e.size,
        class: (B = e.pt) == null ? void 0 : B.jumperInput
      });
    }), S = m(() => {
      var w, B;
      return e.unstyled ? ((w = e.pt) == null ? void 0 : w.jumperButton) || "" : Ns({
        size: e.size,
        class: (B = e.pt) == null ? void 0 : B.jumperButton
      });
    });
    return (w, B) => (h(), x("nav", {
      class: g(k.value),
      "aria-label": "分页导航"
    }, [
      V("ul", {
        class: g(y.value)
      }, [
        w.showEndButtons ? (h(), x("li", {
          key: 0,
          class: g(c.value)
        }, [
          V("button", {
            class: g(b(1, "first")),
            onClick: B[0] || (B[0] = (M) => i(1)),
            disabled: u.value || o.value === 1,
            "aria-label": "首页"
          }, [
            G(w.$slots, "first-button", {}, () => [
              B[5] || (B[5] = V("svg", {
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
                V("polyline", { points: "11 17 6 12 11 7" }),
                V("polyline", { points: "18 17 13 12 18 7" })
              ], -1))
            ])
          ], 10, Ks)
        ], 2)) : _("", !0),
        w.showPrevNextButtons ? (h(), x("li", {
          key: 1,
          class: g(c.value)
        }, [
          V("button", {
            class: g(b(o.value - 1, "prev")),
            onClick: B[1] || (B[1] = (M) => i(o.value - 1)),
            disabled: u.value || o.value === 1,
            "aria-label": "上一页"
          }, [
            G(w.$slots, "prev-button", {}, () => [
              B[6] || (B[6] = V("svg", {
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
                V("polyline", { points: "15 18 9 12 15 6" })
              ], -1))
            ])
          ], 10, Ys)
        ], 2)) : _("", !0),
        (h(!0), x(ae, null, ne(s.value, (M, I) => (h(), x(ae, { key: I }, [
          M !== "..." ? (h(), x("li", {
            key: 0,
            class: g(c.value)
          }, [
            V("button", {
              class: g(b(Number(M))),
              onClick: (O) => i(Number(M)),
              disabled: u.value,
              "aria-current": o.value === M ? "page" : void 0
            }, U(M), 11, Us)
          ], 2)) : (h(), x("li", {
            key: 1,
            class: g(c.value)
          }, [
            V("span", {
              class: g(v.value)
            }, "...", 2)
          ], 2))
        ], 64))), 128)),
        w.showPrevNextButtons ? (h(), x("li", {
          key: 2,
          class: g(c.value)
        }, [
          V("button", {
            class: g(b(o.value + 1, "next")),
            onClick: B[2] || (B[2] = (M) => i(o.value + 1)),
            disabled: u.value || o.value === w.totalPages,
            "aria-label": "下一页"
          }, [
            G(w.$slots, "next-button", {}, () => [
              B[7] || (B[7] = V("svg", {
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
                V("polyline", { points: "9 18 15 12 9 6" })
              ], -1))
            ])
          ], 10, Xs)
        ], 2)) : _("", !0),
        w.showEndButtons ? (h(), x("li", {
          key: 3,
          class: g(c.value)
        }, [
          V("button", {
            class: g(b(w.totalPages, "last")),
            onClick: B[3] || (B[3] = (M) => i(w.totalPages)),
            disabled: u.value || o.value === w.totalPages,
            "aria-label": "尾页"
          }, [
            G(w.$slots, "last-button", {}, () => [
              B[8] || (B[8] = V("svg", {
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
                V("polyline", { points: "13 17 18 12 13 7" }),
                V("polyline", { points: "6 17 11 12 6 7" })
              ], -1))
            ])
          ], 10, qs)
        ], 2)) : _("", !0),
        w.showJumper ? (h(), x("li", {
          key: 4,
          class: g(d.value)
        }, [
          B[9] || (B[9] = V("span", null, "前往", -1)),
          He(V("input", {
            class: g(f.value),
            type: "number",
            "onUpdate:modelValue": B[4] || (B[4] = (M) => n.value = M),
            min: "1",
            max: w.totalPages,
            disabled: u.value,
            onKeyup: ke(p, ["enter"])
          }, null, 42, Zs), [
            [Wt, n.value]
          ]),
          B[10] || (B[10] = V("span", null, "页", -1)),
          V("button", {
            class: g(S.value),
            onClick: p,
            disabled: u.value
          }, " 跳转 ", 10, Js)
        ], 2)) : _("", !0)
      ], 2)
    ], 2));
  }
}), ei = Q(Qs), ti = R({
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
}), li = R({
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
}), ai = R({
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
}), ri = R({
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
}), oi = {
  /**
   * 进度变化时触发
   */
  "update:value": (l) => typeof l == "number"
}, ni = (l) => {
  const a = m(() => {
    if (l.indeterminate)
      return 0;
    const r = Math.max(0, Math.min(l.value || 0, l.max || 100)), o = Math.max(1, l.max || 100);
    return Math.round(r / o * 100);
  }), e = m(() => `${a.value}%`), t = m(() => {
    if (!l.indeterminate)
      return `width: ${a.value}%`;
  });
  return {
    percentage: a,
    formattedPercentage: e,
    progressWidth: t
  };
}, si = ["aria-valuenow"], ii = /* @__PURE__ */ J({
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
  emits: oi,
  setup(l) {
    const a = l, { percentage: e, formattedPercentage: t, progressWidth: r } = ni(a), o = m(() => {
      var i, p;
      return a.unstyled ? ((i = a.pt) == null ? void 0 : i.root) || "" : ti({
        unstyled: a.unstyled,
        class: (p = a.pt) == null ? void 0 : p.root
      });
    }), n = m(() => {
      var i, p;
      return a.unstyled ? ((i = a.pt) == null ? void 0 : i.container) || "" : li({
        size: a.size,
        shape: a.shape,
        unstyled: a.unstyled,
        class: (p = a.pt) == null ? void 0 : p.container
      });
    }), u = m(() => {
      var i, p;
      return a.unstyled ? ((i = a.pt) == null ? void 0 : i.bar) || "" : ai({
        variant: a.variant,
        striped: a.striped,
        animated: a.animated,
        indeterminate: a.indeterminate,
        unstyled: a.unstyled,
        class: (p = a.pt) == null ? void 0 : p.bar
      });
    }), s = m(() => {
      var i, p;
      return a.unstyled ? ((i = a.pt) == null ? void 0 : i.text) || "" : ri({
        variant: a.variant,
        unstyled: a.unstyled,
        class: (p = a.pt) == null ? void 0 : p.text
      });
    });
    return (i, p) => (h(), x("div", {
      class: g(o.value)
    }, [
      V("div", {
        class: g(n.value)
      }, [
        V("div", {
          class: g(u.value),
          style: ue(C(r)),
          role: "progressbar",
          "aria-valuenow": i.indeterminate ? void 0 : C(e),
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        }, null, 14, si)
      ], 2),
      i.showText ? (h(), x("div", {
        key: 0,
        class: g(s.value)
      }, [
        G(i.$slots, "text", {}, () => [
          ce(U(C(t)), 1)
        ])
      ], 2)) : _("", !0)
    ], 2));
  }
}), di = Q(ii), ui = R({
  base: "flex",
  variants: {},
  defaultVariants: {}
}), ci = R({
  base: "flex flex-wrap items-center space-x-1 md:space-x-2",
  variants: {},
  defaultVariants: {}
}), fi = R({
  base: "mx-1 text-gray-400",
  variants: {},
  defaultVariants: {}
}), pi = R({
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
}), gi = R({
  base: "inline-flex items-center",
  variants: {},
  defaultVariants: {}
}), rl = Symbol("breadcrumb"), bi = (l) => {
  const a = H(null);
  return $e(rl, {
    separator: l.separator || "/",
    separatorIcon: l.separatorIcon || ""
  }), {
    _ref: a
  };
}, vi = () => {
  const l = Ve(
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
}, mi = /* @__PURE__ */ J({
  name: "VBreadcrumb",
  __name: "breadcrumb",
  props: {
    separator: { default: "/" },
    separatorIcon: { default: "" },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  setup(l, { expose: a }) {
    const e = l, { _ref: t } = bi(e), r = m(() => {
      var n, u;
      return e.unstyled ? ((n = e.pt) == null ? void 0 : n.root) || "" : ui({
        class: (u = e.pt) == null ? void 0 : u.root
      });
    }), o = m(() => {
      var n, u;
      return e.unstyled ? ((n = e.pt) == null ? void 0 : n.list) || "" : ci({
        class: (u = e.pt) == null ? void 0 : u.list
      });
    });
    return a({
      _ref: t
    }), (n, u) => (h(), x("nav", {
      class: g(r.value),
      ref_key: "_ref",
      ref: t
    }, [
      V("ol", {
        class: g(o.value)
      }, [
        G(n.$slots, "default")
      ], 2)
    ], 2));
  }
}), yi = {
  click: (l) => l instanceof MouseEvent
}, hi = ["href"], wi = /* @__PURE__ */ J({
  name: "VBreadcrumbItem",
  __name: "breadcrumb-item",
  props: {
    href: { default: "" },
    disabled: { type: Boolean, default: !1 },
    active: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: yi,
  setup(l, { expose: a, emit: e }) {
    const t = e, r = l, { _ref: o, breadcrumbContext: n } = vi(), u = H(!1), s = () => {
      if (o.value) {
        const b = o.value.parentElement;
        b && (u.value = b.firstElementChild === o.value);
      }
    };
    be(() => {
      s();
    });
    const i = (b) => {
      if (r.disabled) {
        b.preventDefault();
        return;
      }
      t("click", b);
    }, p = m(() => {
      var b, v;
      return r.unstyled ? ((b = r.pt) == null ? void 0 : b.root) || "" : pi({
        disabled: r.disabled,
        active: r.active,
        class: (v = r.pt) == null ? void 0 : v.root
      });
    }), k = m(() => {
      var b;
      return r.unstyled ? ((b = r.pt) == null ? void 0 : b.separator) || "" : fi();
    }), y = m(() => {
      var b, v;
      return r.unstyled ? ((b = r.pt) == null ? void 0 : b.link) || "" : gi({
        class: (v = r.pt) == null ? void 0 : v.link
      });
    }), c = m(() => {
      var b;
      return r.unstyled && ((b = r.pt) == null ? void 0 : b.content) || "";
    });
    return a({
      _ref: o
    }), (b, v) => (h(), x("li", {
      class: g(p.value),
      ref_key: "_ref",
      ref: o
    }, [
      b.$slots.separator ? G(b.$slots, "separator", { key: 0 }) : C(n).separatorIcon ? (h(), x("span", {
        key: 1,
        class: g(k.value)
      }, [
        (h(), Se(Ze(C(n).separatorIcon)))
      ], 2)) : u.value ? _("", !0) : (h(), x("span", {
        key: 2,
        class: g(k.value)
      }, U(C(n).separator), 3)),
      b.href && !b.disabled && !b.active ? (h(), x("a", {
        key: 3,
        href: b.href,
        class: g(y.value),
        onClick: i
      }, [
        G(b.$slots, "default")
      ], 10, hi)) : (h(), x("span", {
        key: 4,
        class: g(c.value)
      }, [
        G(b.$slots, "default")
      ], 2))
    ], 2));
  }
}), ol = Q(mi, {
  BreadcrumbItem: wi
}), xi = ol.BreadcrumbItem, nl = R({
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
}), ki = {
  "update:panels": (l) => Array.isArray(l),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  "resize-start": (l) => !0,
  resize: (l) => Array.isArray(l),
  "resize-end": (l) => Array.isArray(l),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  collapse: (l, a) => !0,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  expand: (l, a) => !0
}, Ci = {
  "update:size": (l) => typeof l == "string",
  "update:collapsed": (l) => typeof l == "boolean"
}, zi = (l, a) => {
  const e = H(null), t = H([]), r = H([]), o = H(!1), n = H(0), u = H(-1), s = dl(l.panels || []), i = m(() => l.direction !== "vertical"), p = (I, O) => {
    t.value[O] = I;
  }, k = (I, O) => {
    r.value[O] = I;
  }, y = () => {
    if (!e.value || t.value.length === 0) return;
    const I = i.value ? e.value.clientWidth : e.value.clientHeight;
    if (!l.panels || l.panels.length === 0) {
      const O = `${100 / t.value.length}%`;
      t.value.forEach(($, T) => {
        s[T] = s[T] || {}, s[T].size = O, s[T].resizable = s[T].resizable !== !1;
      });
      return;
    }
    l.panels.forEach((O, $) => {
      if ($ < t.value.length)
        if (s[$] = { ...O }, O.size && O.size.endsWith("%")) {
          const T = parseFloat(O.size) / 100, L = Math.floor(I * T);
          t.value[$].style[i.value ? "width" : "height"] = `${L}px`;
        } else O.size && (t.value[$].style[i.value ? "width" : "height"] = O.size);
    }), a("update:panels", [...s]);
  }, c = (I, O) => {
    var P, F;
    if (!l.resizable) return;
    const $ = O, T = O + 1, L = ((P = s[$]) == null ? void 0 : P.resizable) !== !1, A = ((F = s[T]) == null ? void 0 : F.resizable) !== !1;
    if (!(!L && !A)) {
      if (I.preventDefault(), o.value = !0, u.value = O, I instanceof MouseEvent)
        n.value = i.value ? I.clientX : I.clientY;
      else {
        const z = I.touches[0];
        n.value = i.value ? z.clientX : z.clientY;
      }
      window.addEventListener("mousemove", b), window.addEventListener("mouseup", f), window.addEventListener("touchmove", v), window.addEventListener("touchend", S), a("resize-start", I);
    }
  }, b = (I) => {
    o.value && d(i.value ? I.clientX : I.clientY);
  }, v = (I) => {
    if (!o.value) return;
    const O = I.touches[0];
    d(i.value ? O.clientX : O.clientY);
  }, d = (I) => {
    var oe, W, Z, le;
    if (!o.value || !e.value) return;
    const O = u.value, $ = O, T = O + 1;
    if ($ < 0 || T >= t.value.length || !t.value[$] || !t.value[T])
      return;
    const L = t.value[$], A = t.value[T], P = I - n.value;
    if (P === 0) return;
    const F = i.value ? L.offsetWidth : L.offsetHeight, z = i.value ? A.offsetWidth : A.offsetHeight, E = (oe = s[$]) != null && oe.minSize ? M(
      s[$].minSize,
      e.value,
      i.value
    ) : 0, D = (W = s[T]) != null && W.minSize ? M(
      s[T].minSize,
      e.value,
      i.value
    ) : 0, N = (Z = s[$]) != null && Z.maxSize ? M(
      s[$].maxSize,
      e.value,
      i.value
    ) : 1 / 0, j = (le = s[T]) != null && le.maxSize ? M(
      s[T].maxSize,
      e.value,
      i.value
    ) : 1 / 0;
    let K = F + P, Y = z - P;
    K < E ? (K = E, Y = F + z - E) : K > N && (K = N, Y = F + z - N), Y < D ? (Y = D, K = F + z - D) : Y > j && (Y = j, K = F + z - j), i.value ? (L.style.width = `${K}px`, A.style.width = `${Y}px`) : (L.style.height = `${K}px`, A.style.height = `${Y}px`), s[$] = {
      ...s[$],
      size: `${K}px`
    }, s[T] = {
      ...s[T],
      size: `${Y}px`
    }, n.value = I, a("resize", [...s]);
  }, f = () => {
    w();
  }, S = () => {
    w();
  }, w = () => {
    o.value && (o.value = !1, u.value = -1, window.removeEventListener("mousemove", b), window.removeEventListener("mouseup", f), window.removeEventListener("touchmove", v), window.removeEventListener("touchend", S), a("resize-end", [...s]), a("update:panels", [...s]));
  }, B = (I) => {
    if (I < 0 || I >= t.value.length) return;
    const O = t.value[I], $ = s[I];
    if (!$.collapsible) return;
    if (!$.collapsed)
      $._savedSize = $.size, i.value ? O.style.width = "0" : O.style.height = "0", $.size = "0", $.collapsed = !0, a("collapse", I, !0);
    else {
      const L = $._savedSize || "1fr";
      i.value ? O.style.width = L : O.style.height = L, $.size = L, $.collapsed = !1, a("expand", I, !1);
    }
    a("update:panels", [...s]);
  }, M = (I, O, $) => {
    if (I.endsWith("px"))
      return parseFloat(I);
    if (I.endsWith("%")) {
      const T = $ ? O.clientWidth : O.clientHeight;
      return parseFloat(I) / 100 * T;
    } else if (I.endsWith("rem")) {
      const T = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      return parseFloat(I) * T;
    } else if (I.endsWith("em")) {
      const T = parseFloat(getComputedStyle(O).fontSize);
      return parseFloat(I) * T;
    } else {
      if (I.endsWith("vh"))
        return parseFloat(I) / 100 * window.innerHeight;
      if (I.endsWith("vw"))
        return parseFloat(I) / 100 * window.innerWidth;
    }
    return parseFloat(I) || 0;
  };
  return be(() => {
    y(), window.addEventListener("resize", y);
  }), Me(() => {
    window.removeEventListener("resize", y), window.removeEventListener("mousemove", b), window.removeEventListener("mouseup", f), window.removeEventListener("touchmove", v), window.removeEventListener("touchend", S);
  }), {
    rootRef: e,
    panelRefs: t,
    gutterRefs: r,
    isResizing: o,
    panelSizes: s,
    isHorizontal: i,
    registerPanel: p,
    registerGutter: k,
    onGutterMouseDown: c,
    toggleCollapse: B,
    initPanelSizes: y
  };
}, Si = ["aria-orientation"], Bi = ["onMousedown", "onTouchstart", "aria-label", "aria-controls", "onKeydown"], Vi = /* @__PURE__ */ J({
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
  emits: ki,
  setup(l, { expose: a, emit: e }) {
    const t = l, r = e, {
      rootRef: o,
      panelSizes: n,
      isHorizontal: u,
      registerPanel: s,
      registerGutter: i,
      onGutterMouseDown: p,
      toggleCollapse: k,
      initPanelSizes: y
    } = zi(t, r), c = m(() => {
      var B;
      const f = _e(), S = Object.keys(f).filter((M) => M.startsWith("panel-")).length / 2, w = ((B = t.panels) == null ? void 0 : B.length) || 0;
      return Math.max(S, w, 2);
    }), b = (f) => {
      const S = n[f] || {}, w = u.value ? "width" : "height", B = {};
      return S.size && (B[w] = S.size), S.collapsed && (B[w] = "0", B.overflow = "hidden"), B;
    }, v = (f, S, w) => {
      if (!t.resizable) return;
      f.preventDefault();
      const B = f.shiftKey ? 10 : 1, M = n[S], I = n[S + 1];
      if (!M || !I) return;
      const O = parseFloat(M.size || "0"), $ = parseFloat(I.size || "0"), T = B * w;
      M.size = `${O + T}px`, I.size = `${$ - T}px`, y();
    }, d = m(() => {
      var O, $, T, L, A, P;
      if (t.unstyled)
        return {
          root: ((O = t.pt) == null ? void 0 : O.root) || "",
          wrapper: (($ = t.pt) == null ? void 0 : $.wrapper) || "",
          panel: ((T = t.pt) == null ? void 0 : T.panel) || "",
          gutter: ((L = t.pt) == null ? void 0 : L.gutter) || "",
          gutterHandle: ((A = t.pt) == null ? void 0 : A.gutterHandle) || "",
          gutterIcon: ((P = t.pt) == null ? void 0 : P.gutterIcon) || ""
        };
      const { root: f, wrapper: S, panel: w, gutter: B, gutterHandle: M, gutterIcon: I } = nl({
        direction: t.direction,
        size: t.size,
        solid: t.solid,
        dotted: t.dotted,
        dashed: t.dashed,
        disabled: !t.resizable
      });
      return {
        root: f(),
        wrapper: S(),
        panel: w(),
        gutter: B(),
        gutterHandle: M(),
        gutterIcon: I()
      };
    });
    return a({
      toggleCollapse: k,
      initPanelSizes: y
    }), $e("splitter", {
      registerPanel: s,
      direction: t.direction
    }), (f, S) => (h(), x("div", {
      ref_key: "rootRef",
      ref: o,
      class: g(d.value.root),
      role: "separator",
      "aria-orientation": t.direction === "vertical" ? "horizontal" : "vertical"
    }, [
      (h(!0), x(ae, null, ne(c.value, (w, B) => (h(), x(ae, { key: B }, [
        B < c.value ? (h(), x("div", {
          key: 0,
          ref_for: !0,
          ref: (M) => M && C(s)(M, B),
          class: g(d.value.wrapper),
          style: ue(b(B))
        }, [
          G(f.$slots, `panel-${B}`, {}, () => [
            V("div", {
              class: g(d.value.panel)
            }, [
              G(f.$slots, `panel-${B}-content`, {}, () => [
                ce("Panel " + U(B + 1), 1)
              ])
            ], 2)
          ])
        ], 6)) : _("", !0),
        B < c.value - 1 ? (h(), x("div", {
          key: 1,
          ref_for: !0,
          ref: (M) => M && C(i)(M, B),
          class: g(d.value.gutter),
          onMousedown: (M) => C(p)(M, B),
          onTouchstart: (M) => C(p)(M, B),
          tabindex: "0",
          "aria-label": `调整${C(u) ? "宽度" : "高度"}`,
          "aria-controls": `panel-${B},panel-${B + 1}`,
          onKeydown: [
            ke((M) => v(M, B, -1), ["left"]),
            ke((M) => v(M, B, 1), ["right"]),
            ke((M) => v(M, B, -1), ["up"]),
            ke((M) => v(M, B, 1), ["down"])
          ]
        }, [
          G(f.$slots, `gutter-${B}`, {}, () => [
            V("div", {
              class: g(d.value.gutterHandle)
            }, [
              G(f.$slots, `gutter-${B}-handle`, {}, () => [
                C(u) ? (h(), x("svg", {
                  key: 0,
                  class: g(d.value.gutterIcon),
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round"
                }, S[0] || (S[0] = [
                  V("line", {
                    x1: "12",
                    y1: "5",
                    x2: "12",
                    y2: "19"
                  }, null, -1),
                  V("line", {
                    x1: "8",
                    y1: "9",
                    x2: "8",
                    y2: "15"
                  }, null, -1),
                  V("line", {
                    x1: "16",
                    y1: "9",
                    x2: "16",
                    y2: "15"
                  }, null, -1)
                ]), 2)) : (h(), x("svg", {
                  key: 1,
                  class: g(d.value.gutterIcon),
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round"
                }, S[1] || (S[1] = [
                  V("line", {
                    x1: "5",
                    y1: "12",
                    x2: "19",
                    y2: "12"
                  }, null, -1),
                  V("line", {
                    x1: "9",
                    y1: "8",
                    x2: "15",
                    y2: "8"
                  }, null, -1),
                  V("line", {
                    x1: "9",
                    y1: "16",
                    x2: "15",
                    y2: "16"
                  }, null, -1)
                ]), 2))
              ])
            ], 2)
          ])
        ], 42, Bi)) : _("", !0)
      ], 64))), 128))
    ], 10, Si));
  }
}), $i = /* @__PURE__ */ J({
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
  emits: Ci,
  setup(l, { emit: a }) {
    const e = l, t = a, r = H(null), o = Ve("splitter", {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      registerPanel: (s, i) => {
      },
      direction: "horizontal",
      index: -1
    });
    ee(
      () => e.size,
      (s) => {
        s !== void 0 && r.value && (o.direction === "horizontal" ? r.value.style.width = s : r.value.style.height = s);
      }
    ), ee(
      () => e.collapsed,
      (s) => {
        t("update:collapsed", s);
      }
    ), be(() => {
      r.value && o.index >= 0 && o.registerPanel(r.value, o.index);
    });
    const n = m(() => {
      var s;
      return e.unstyled ? ((s = e.pt) == null ? void 0 : s.root) || "" : nl().panel();
    }), u = m(() => {
      var s;
      return e.unstyled ? ((s = e.pt) == null ? void 0 : s.content) || "" : "h-full w-full";
    });
    return (s, i) => (h(), x("div", {
      ref_key: "panelRef",
      ref: r,
      class: g(n.value)
    }, [
      V("div", {
        class: g(u.value)
      }, [
        G(s.$slots, "default")
      ], 2)
    ], 2));
  }
}), Ii = Q(Vi), Di = Q($i), Mi = (l, a) => {
  var b, v;
  const e = H(((b = l.modelValue) == null ? void 0 : b[0]) || null), t = H(((v = l.modelValue) == null ? void 0 : v[1]) || null), r = H((e.value || /* @__PURE__ */ new Date()).getMonth()), o = H((e.value || /* @__PURE__ */ new Date()).getFullYear()), n = H("start"), u = m(() => {
    const d = l.locale || "default", f = l.firstDayOfWeek || 0, S = [];
    for (let w = 0; w < 7; w++) {
      const B = (w + f) % 7;
      S.push(
        new Intl.DateTimeFormat(d, { weekday: "short" }).format(
          new Date(2021, 0, B + 3)
          // 2021-01-03 is a Sunday
        )
      );
    }
    return S;
  }), s = m(() => {
    const d = o.value, f = r.value, S = new Date(d, f, 1).getDay(), w = new Date(d, f + 1, 0).getDate(), B = l.firstDayOfWeek || 0, M = [], I = new Date(d, f, 0).getDate(), O = (S - B + 7) % 7;
    for (let L = I - O + 1; L <= I; L++)
      M.push({
        date: new Date(d, f - 1, L),
        day: L,
        isCurrentMonth: !1,
        isToday: !1,
        isSelected: !1,
        isRangeStart: !1,
        isRangeEnd: !1,
        isInRange: !1,
        isDisabled: !1
      });
    const $ = /* @__PURE__ */ new Date();
    for (let L = 1; L <= w; L++) {
      const A = new Date(d, f, L), P = $.getDate() === L && $.getMonth() === f && $.getFullYear() === d, F = e.value && A.getDate() === e.value.getDate() && A.getMonth() === e.value.getMonth() && A.getFullYear() === e.value.getFullYear(), z = t.value && A.getDate() === t.value.getDate() && A.getMonth() === t.value.getMonth() && A.getFullYear() === t.value.getFullYear(), E = e.value && t.value && A > e.value && A < t.value, D = F || z, N = l.disabled || l.min && A < l.min || l.max && A > l.max;
      M.push({
        date: A,
        day: L,
        isCurrentMonth: !0,
        isToday: P,
        isSelected: D,
        isRangeStart: F,
        isRangeEnd: z,
        isInRange: E,
        isDisabled: N
      });
    }
    const T = 42 - M.length;
    for (let L = 1; L <= T; L++) {
      const A = new Date(d, f + 1, L), P = e.value && A.getDate() === e.value.getDate() && A.getMonth() === e.value.getMonth() && A.getFullYear() === e.value.getFullYear(), F = t.value && A.getDate() === t.value.getDate() && A.getMonth() === t.value.getMonth() && A.getFullYear() === t.value.getFullYear(), z = e.value && t.value && A > e.value && A < t.value, E = P || F;
      M.push({
        date: A,
        day: L,
        isCurrentMonth: !1,
        isToday: !1,
        isSelected: E,
        isRangeStart: P,
        isRangeEnd: F,
        isInRange: z,
        isDisabled: !1
      });
    }
    return M;
  }), i = m(() => {
    const d = l.locale || "default";
    return new Intl.DateTimeFormat(d, { month: "long" }).format(
      new Date(o.value, r.value)
    );
  }), p = () => {
    r.value === 0 ? (r.value = 11, o.value--) : r.value--;
  }, k = () => {
    r.value === 11 ? (r.value = 0, o.value++) : r.value++;
  }, y = (d) => {
    l.disabled || l.readonly || l.min && d < l.min || l.max && d > l.max || (n.value === "start" ? (e.value = d, t.value = null, n.value = "end") : (e.value && d < e.value ? (t.value = e.value, e.value = d) : t.value = d, n.value = "start"), a("update:modelValue", [e.value, t.value]), a("change", [e.value, t.value]));
  }, c = () => {
    e.value = null, t.value = null, n.value = "start", a("update:modelValue", [null, null]), a("change", [null, null]);
  };
  return ee(
    () => l.modelValue,
    (d) => {
      d && (e.value = d[0], t.value = d[1], e.value && (r.value = e.value.getMonth(), o.value = e.value.getFullYear()), n.value = t.value ? "start" : "end");
    }
  ), {
    startDate: e,
    endDate: t,
    currentMonth: r,
    currentYear: o,
    selectionMode: n,
    weekdays: u,
    daysInMonth: s,
    monthName: i,
    prevMonth: p,
    nextMonth: k,
    selectDate: y,
    resetSelection: c
  };
}, Ti = R({
  base: "w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), Ri = R({
  base: "flex items-center justify-between mb-4"
}), Ei = R({
  base: "text-lg font-medium"
}), Li = R({
  base: "flex items-center space-x-1"
}), Ai = R({
  base: "p-1 rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
}), Oi = R({
  base: "grid grid-cols-7 mb-1"
}), Pi = R({
  base: "text-center text-sm font-medium text-gray-500 py-2"
}), ji = R({
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
}), Fi = {
  "update:modelValue": (l) => Array.isArray(l) && (l[0] === null || l[0] instanceof Date) && (l[1] === null || l[1] instanceof Date),
  change: (l) => Array.isArray(l) && (l[0] === null || l[0] instanceof Date) && (l[1] === null || l[1] instanceof Date)
}, Wi = {
  key: 0,
  class: "text-sm text-blue-500 ml-2"
}, Hi = ["disabled"], _i = ["disabled"], Ni = ["onClick", "disabled"], Gi = {
  key: 0,
  class: "mt-4 flex justify-between"
}, Ki = { class: "ml-1 font-medium" }, Yi = { class: "ml-1 font-medium" }, Ui = /* @__PURE__ */ J({
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
  emits: Fi,
  setup(l, { emit: a }) {
    const e = a, t = l, {
      startDate: r,
      endDate: o,
      currentYear: n,
      selectionMode: u,
      weekdays: s,
      daysInMonth: i,
      monthName: p,
      prevMonth: k,
      nextMonth: y,
      selectDate: c,
      resetSelection: b
    } = Mi(t, e), v = (f) => {
      const S = t.locale || "default";
      return new Intl.DateTimeFormat(S).format(f);
    }, d = m(() => {
      var f, S, w, B, M, I, O, $, T, L, A, P, F, z, E, D, N, j, K, Y, oe, W, Z, le, te, se, de, fe, ve, pe, ze, ye;
      return {
        root: t.unstyled ? ((f = t.pt) == null ? void 0 : f.root) || "" : Ti({ unstyled: t.unstyled, class: (S = t.pt) == null ? void 0 : S.root }),
        header: t.unstyled ? ((w = t.pt) == null ? void 0 : w.header) || "" : Ri({ class: (B = t.pt) == null ? void 0 : B.header }),
        title: t.unstyled ? ((M = t.pt) == null ? void 0 : M.title) || "" : Ei({ class: (I = t.pt) == null ? void 0 : I.title }),
        navigation: t.unstyled ? ((O = t.pt) == null ? void 0 : O.navigation) || "" : Li({ class: ($ = t.pt) == null ? void 0 : $.navigation }),
        navButton: t.unstyled ? ((T = t.pt) == null ? void 0 : T.navButton) || "" : Ai({ class: (L = t.pt) == null ? void 0 : L.navButton }),
        weekdays: t.unstyled ? ((A = t.pt) == null ? void 0 : A.weekdays) || "" : Oi({ class: (P = t.pt) == null ? void 0 : P.weekdays }),
        weekday: t.unstyled ? ((F = t.pt) == null ? void 0 : F.weekday) || "" : Pi({ class: (z = t.pt) == null ? void 0 : z.weekday }),
        days: t.unstyled ? ((E = t.pt) == null ? void 0 : E.days) || "" : ji({ class: (D = t.pt) == null ? void 0 : D.days }),
        day: t.unstyled ? ((N = t.pt) == null ? void 0 : N.day) || "" : he({ class: (j = t.pt) == null ? void 0 : j.day }),
        today: t.unstyled ? ((K = t.pt) == null ? void 0 : K.today) || "" : he({ isToday: !0, class: (Y = t.pt) == null ? void 0 : Y.today }).split(" ").filter((ie) => !he().includes(ie)).join(" "),
        selected: t.unstyled ? ((oe = t.pt) == null ? void 0 : oe.selected) || "" : he({ isSelected: !0, class: (W = t.pt) == null ? void 0 : W.selected }).split(" ").filter((ie) => !he().includes(ie)).join(" "),
        rangeStart: t.unstyled ? ((Z = t.pt) == null ? void 0 : Z.rangeStart) || "" : he({
          isRangeStart: !0,
          class: (le = t.pt) == null ? void 0 : le.rangeStart
        }).split(" ").filter((ie) => !he().includes(ie)).join(" "),
        rangeEnd: t.unstyled ? ((te = t.pt) == null ? void 0 : te.rangeEnd) || "" : he({ isRangeEnd: !0, class: (se = t.pt) == null ? void 0 : se.rangeEnd }).split(" ").filter((ie) => !he().includes(ie)).join(" "),
        inRange: t.unstyled ? ((de = t.pt) == null ? void 0 : de.inRange) || "" : he({ isInRange: !0, class: (fe = t.pt) == null ? void 0 : fe.inRange }).split(" ").filter((ie) => !he().includes(ie)).join(" "),
        disabled: t.unstyled ? ((ve = t.pt) == null ? void 0 : ve.disabled) || "" : he({ isDisabled: !0, class: (pe = t.pt) == null ? void 0 : pe.disabled }).split(" ").filter((ie) => !he().includes(ie)).join(" "),
        adjacent: t.unstyled ? ((ze = t.pt) == null ? void 0 : ze.adjacent) || "" : he({ isAdjacent: !0, class: (ye = t.pt) == null ? void 0 : ye.adjacent }).split(" ").filter((ie) => !he().includes(ie)).join(" ")
      };
    });
    return (f, S) => (h(), x("div", {
      class: g(d.value.root)
    }, [
      V("div", {
        class: g(d.value.header)
      }, [
        V("div", {
          class: g(d.value.title)
        }, [
          ce(U(C(p)) + " " + U(C(n)) + " ", 1),
          C(u) === "end" ? (h(), x("span", Wi, " (Select end date) ")) : _("", !0)
        ], 2),
        V("div", {
          class: g(d.value.navigation)
        }, [
          V("button", {
            class: g(d.value.navButton),
            onClick: S[0] || (S[0] = //@ts-ignore
            (...w) => C(k) && C(k)(...w)),
            disabled: f.disabled || f.readonly
          }, S[3] || (S[3] = [
            V("svg", {
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
              V("path", { d: "m15 18-6-6 6-6" })
            ], -1)
          ]), 10, Hi),
          V("button", {
            class: g(d.value.navButton),
            onClick: S[1] || (S[1] = //@ts-ignore
            (...w) => C(y) && C(y)(...w)),
            disabled: f.disabled || f.readonly
          }, S[4] || (S[4] = [
            V("svg", {
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
              V("path", { d: "m9 18 6-6-6-6" })
            ], -1)
          ]), 10, _i)
        ], 2)
      ], 2),
      V("div", {
        class: g(d.value.weekdays)
      }, [
        (h(!0), x(ae, null, ne(C(s), (w, B) => (h(), x("div", {
          key: B,
          class: g(d.value.weekday)
        }, U(w), 3))), 128))
      ], 2),
      V("div", {
        class: g(d.value.days)
      }, [
        (h(!0), x(ae, null, ne(C(i), (w, B) => (h(), x("button", {
          key: B,
          class: g([
            d.value.day,
            w.isToday ? d.value.today : "",
            w.isSelected ? d.value.selected : "",
            w.isRangeStart ? d.value.rangeStart : "",
            w.isRangeEnd ? d.value.rangeEnd : "",
            w.isInRange ? d.value.inRange : "",
            w.isDisabled ? d.value.disabled : "",
            w.isCurrentMonth ? "" : d.value.adjacent
          ]),
          onClick: (M) => C(c)(w.date),
          disabled: w.isDisabled || f.disabled || f.readonly
        }, U(w.day), 11, Ni))), 128))
      ], 2),
      C(r) || C(o) ? (h(), x("div", Gi, [
        V("div", null, [
          S[5] || (S[5] = V("span", { class: "text-sm text-gray-500" }, "Start:", -1)),
          V("span", Ki, U(C(r) ? v(C(r)) : "-"), 1)
        ]),
        V("div", null, [
          S[6] || (S[6] = V("span", { class: "text-sm text-gray-500" }, "End:", -1)),
          V("span", Yi, U(C(o) ? v(C(o)) : "-"), 1)
        ]),
        V("button", {
          class: "text-sm text-red-500 hover:text-red-700",
          onClick: S[2] || (S[2] = //@ts-ignore
          (...w) => C(b) && C(b)(...w))
        }, " Reset ")
      ])) : _("", !0)
    ], 2));
  }
}), Xi = Q(Ui), qi = R({
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
}), Zi = R({
  base: "w-full"
}), Ji = R({
  base: ""
}), Qi = R({
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
}), ed = R({
  base: "text-base font-medium"
}), td = R({
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
}), ld = R({
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
}), ad = R({
  base: "py-4 px-5"
}), rd = {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  "update:modelValue": (l) => !0,
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  change: (l) => !0
}, od = {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  click: (l) => !0,
  toggle: (l) => typeof l == "boolean"
}, nd = /* @__PURE__ */ J({
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
  emits: rd,
  setup(l, { emit: a }) {
    const e = l, t = a, r = H(
      Array.isArray(e.modelValue) ? e.modelValue : e.modelValue ? [e.modelValue] : []
    );
    ee(
      () => e.modelValue,
      (s) => {
        Array.isArray(s) ? r.value = s : s ? r.value = [s] : r.value = [];
      }
    );
    const o = m(() => {
      var s, i;
      return e.unstyled ? ((s = e.pt) == null ? void 0 : s.root) || "" : qi({
        variant: e.variant,
        radius: e.radius,
        bordered: e.bordered,
        class: (i = e.pt) == null ? void 0 : i.root
      });
    }), n = (s, i) => {
      let p = [...r.value];
      if (i ? e.multiple ? p.includes(s) || p.push(s) : p = [s] : p = p.filter((k) => k !== s), r.value = p, e.multiple)
        t("update:modelValue", p), t("change", p);
      else {
        const k = p.length > 0 ? p[0] : void 0;
        t("update:modelValue", k), t("change", k);
      }
    }, u = (s) => r.value.includes(s);
    return $e("accordionContext", {
      disabled: m(() => e.disabled),
      animated: m(() => e.animated),
      toggleItem: n,
      isItemExpanded: u
    }), (s, i) => (h(), x("div", {
      class: g(o.value)
    }, [
      G(s.$slots, "default")
    ], 2));
  }
}), sd = ["aria-expanded", "aria-disabled"], id = /* @__PURE__ */ J({
  name: "AccordionItem",
  __name: "accordion-item",
  props: {
    value: {},
    header: {},
    disabled: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: od,
  setup(l, { emit: a }) {
    const e = l, t = a, r = Ve("accordionContext", {
      disabled: m(() => !1),
      animated: m(() => !0),
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
      toggleItem: (d, f) => {
      },
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
      isItemExpanded: (d) => !1
    }), o = m(
      () => e.disabled || r.disabled.value
    ), n = m(() => r.isItemExpanded(e.value)), u = H(null);
    ee(
      () => n.value,
      (d) => {
        if (!(!r.animated.value || !u.value))
          if (d) {
            const f = u.value;
            f.style.height = "0", f.style.height = `${f.scrollHeight}px`;
            const S = () => {
              n.value && (f.style.height = ""), f.removeEventListener("transitionend", S);
            };
            f.addEventListener("transitionend", S);
          } else {
            const f = u.value, S = f.offsetHeight;
            f.style.height = `${S}px`, f.style.height = "0";
          }
      }
    );
    const s = (d) => {
      if (o.value) return;
      t("click", d);
      const f = !n.value;
      r.toggleItem(e.value, f), t("toggle", f);
    }, i = m(() => {
      var d, f;
      return e.unstyled ? ((d = e.pt) == null ? void 0 : d.root) || "" : Zi({
        class: (f = e.pt) == null ? void 0 : f.root
      });
    }), p = m(() => {
      var d, f;
      return e.unstyled ? ((d = e.pt) == null ? void 0 : d.header) || "" : Ji({
        class: (f = e.pt) == null ? void 0 : f.header
      });
    }), k = m(() => {
      var d, f;
      return e.unstyled ? ((d = e.pt) == null ? void 0 : d.trigger) || "" : Qi({
        disabled: o.value,
        class: (f = e.pt) == null ? void 0 : f.trigger
      });
    }), y = m(() => {
      var d, f;
      return e.unstyled ? ((d = e.pt) == null ? void 0 : d.title) || "" : ed({
        class: (f = e.pt) == null ? void 0 : f.title
      });
    }), c = m(() => {
      var d, f;
      return e.unstyled ? ((d = e.pt) == null ? void 0 : d.icon) || "" : td({
        expanded: n.value,
        class: (f = e.pt) == null ? void 0 : f.icon
      });
    }), b = m(() => {
      var d, f;
      return e.unstyled ? ((d = e.pt) == null ? void 0 : d.content) || "" : ld({
        animated: r.animated.value,
        expanded: n.value,
        class: (f = e.pt) == null ? void 0 : f.content
      });
    }), v = m(() => {
      var d, f;
      return e.unstyled ? ((d = e.pt) == null ? void 0 : d.contentInner) || "" : ad({
        class: (f = e.pt) == null ? void 0 : f.contentInner
      });
    });
    return be(() => {
      u.value && !n.value && (u.value.style.height = "0");
    }), (d, f) => (h(), x("div", {
      class: g(i.value)
    }, [
      V("div", {
        class: g(p.value)
      }, [
        V("button", {
          type: "button",
          class: g(k.value),
          "aria-expanded": n.value,
          "aria-disabled": o.value,
          onClick: s
        }, [
          V("div", {
            class: g(y.value)
          }, [
            G(d.$slots, "header", {}, () => [
              ce(U(d.header), 1)
            ])
          ], 2),
          V("div", {
            class: g(c.value)
          }, [
            G(d.$slots, "icon", {}, () => [
              f[0] || (f[0] = V("svg", {
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
                V("polyline", { points: "6 9 12 15 18 9" })
              ], -1))
            ])
          ], 2)
        ], 10, sd)
      ], 2),
      V("div", {
        class: g(b.value),
        ref_key: "contentEl",
        ref: u
      }, [
        V("div", {
          class: g(v.value)
        }, [
          G(d.$slots, "default")
        ], 2)
      ], 2)
    ], 2));
  }
}), dd = Q(nd), ud = Q(id), cd = R({
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
}), fd = { key: 0 }, pd = ["onClick"], gd = ["placeholder", "disabled", "readonly", "autofocus", "onKeydown"], bd = { key: 0 }, vd = /* @__PURE__ */ J({
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
    const e = l, t = a, r = H(null), o = H(""), n = H(!1), u = m(() => e.unstyled ? {
      root: () => {
        var c;
        return ((c = e.pt) == null ? void 0 : c.root) || "";
      },
      wrapper: () => {
        var c;
        return ((c = e.pt) == null ? void 0 : c.wrapper) || "";
      },
      input: () => {
        var c;
        return ((c = e.pt) == null ? void 0 : c.input) || "";
      },
      prefix: () => {
        var c;
        return ((c = e.pt) == null ? void 0 : c.prefix) || "";
      },
      suffix: () => {
        var c;
        return ((c = e.pt) == null ? void 0 : c.suffix) || "";
      },
      tag: () => {
        var c;
        return ((c = e.pt) == null ? void 0 : c.tag) || "";
      },
      tagClose: () => {
        var c;
        return ((c = e.pt) == null ? void 0 : c.tagClose) || "";
      },
      count: () => {
        var c;
        return ((c = e.pt) == null ? void 0 : c.count) || "";
      }
    } : cd({
      size: e.size,
      status: e.status,
      disabled: e.disabled
    })), s = () => {
      if (!o.value || e.disabled || e.readonly || e.maxCount && e.modelValue.length >= e.maxCount) return;
      const c = [...e.modelValue];
      c.includes(o.value) || (c.push(o.value), t("update:modelValue", c), t("change", c), t("add", o.value)), o.value = "";
    }, i = (c) => {
      if (e.disabled || e.readonly) return;
      const b = [...e.modelValue], v = b[c];
      b.splice(c, 1), t("update:modelValue", b), t("change", b), t("remove", v, c);
    }, p = () => {
      if (o.value === "" && e.modelValue.length > 0 && !e.disabled && !e.readonly) {
        const c = [...e.modelValue], b = c.length - 1, v = c[b];
        c.pop(), t("update:modelValue", c), t("change", c), t("remove", v, b);
      }
    }, k = (c) => {
      n.value = !0, t("focus", c);
    }, y = (c) => {
      n.value = !1, o.value && s(), t("blur", c);
    };
    return ee(
      () => e.autofocus,
      (c) => {
        c && r.value && r.value.focus();
      },
      { immediate: !0 }
    ), (c, b) => {
      var v, d;
      return h(), x("div", {
        class: g(u.value.root())
      }, [
        V("div", {
          class: g(u.value.wrapper())
        }, [
          c.$slots.prefix || c.prefixIcon ? (h(), x("div", {
            key: 0,
            class: g(u.value.prefix())
          }, [
            G(c.$slots, "prefix", {}, () => [
              c.prefixIcon ? (h(), x("span", fd, U(c.prefixIcon), 1)) : _("", !0)
            ])
          ], 2)) : _("", !0),
          (h(!0), x(ae, null, ne(c.modelValue, (f, S) => (h(), x("div", {
            key: S,
            class: g(u.value.tag())
          }, [
            ce(U(f) + " ", 1),
            c.closable && !c.disabled && !c.readonly ? (h(), x("span", {
              key: 0,
              class: g(u.value.tagClose()),
              onClick: (w) => i(S)
            }, " × ", 10, pd)) : _("", !0)
          ], 2))), 128)),
          He(V("input", {
            ref_key: "inputRef",
            ref: r,
            class: g(u.value.input()),
            type: "text",
            placeholder: (v = c.modelValue) != null && v.length ? "" : c.placeholder,
            disabled: c.disabled,
            readonly: c.readonly,
            autofocus: c.autofocus,
            "onUpdate:modelValue": b[0] || (b[0] = (f) => o.value = f),
            onKeydown: [
              ke(Ce(s, ["prevent"]), ["enter"]),
              ke(p, ["backspace"])
            ],
            onBlur: y,
            onFocus: k
          }, null, 42, gd), [
            [ul, o.value]
          ]),
          c.$slots.suffix || c.suffixIcon ? (h(), x("div", {
            key: 1,
            class: g(u.value.suffix())
          }, [
            G(c.$slots, "suffix", {}, () => [
              c.suffixIcon ? (h(), x("span", bd, U(c.suffixIcon), 1)) : _("", !0)
            ])
          ], 2)) : _("", !0),
          c.showCount && c.maxCount ? (h(), x("span", {
            key: 2,
            class: g(u.value.count())
          }, U(((d = c.modelValue) == null ? void 0 : d.length) || 0) + "/" + U(c.maxCount), 3)) : _("", !0)
        ], 2)
      ], 2);
    };
  }
}), md = Q(vd), Oe = R({
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
}), yd = {
  "update:visible": (l) => typeof l == "boolean",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  select: (l, a) => !0,
  show: () => !0,
  hide: () => !0
}, hd = {
  click: (l) => l instanceof MouseEvent
}, wd = (l, a) => {
  const e = H(l.visible || !1), t = H(null), r = H(null), o = `dropdown-${Math.random().toString(36).slice(2, 11)}`;
  let n = null, u = null;
  ee(
    () => l.visible,
    (b) => {
      b !== void 0 && (e.value = b);
    }
  ), ee(
    () => e.value,
    (b) => {
      a("update:visible", b), a(b ? "show" : "hide");
    }
  );
  const s = () => {
    l.disabled || ((l.trigger === "hover" || l.trigger === "focus") && l.showDelay ? (clearTimeout(u), n = window.setTimeout(() => {
      e.value = !0;
    }, l.showDelay)) : e.value = !0);
  }, i = () => {
    l.trigger !== "manual" && ((l.trigger === "hover" || l.trigger === "focus") && l.hideDelay ? (clearTimeout(n), u = window.setTimeout(() => {
      e.value = !1;
    }, l.hideDelay)) : e.value = !1);
  }, p = () => {
    l.disabled || l.trigger !== "manual" && (e.value = !e.value);
  }, k = (b) => {
    if (!l.closeOnClickOutside || !e.value || l.trigger === "manual") return;
    const v = b.target;
    r.value && !r.value.contains(v) && t.value && !t.value.contains(v) && i();
  }, y = (b, v) => {
    l.closeOnSelect && l.trigger !== "manual" && i(), a("select", b, v);
  }, c = (b, v) => {
    b.disabled || b.divider || b.value !== void 0 && y(b.value, v);
  };
  return be(() => {
    l.closeOnClickOutside && document.addEventListener("click", k);
  }), Me(() => {
    document.removeEventListener("click", k), n && clearTimeout(n), u && clearTimeout(u);
  }), {
    isVisible: e,
    triggerRef: t,
    contentRef: r,
    dropdownId: o,
    show: s,
    hide: i,
    toggle: p,
    handleItemClick: y,
    handleOptionClick: c
  };
}, xd = ["aria-expanded", "aria-controls"], kd = ["id"], Cd = ["onClick", "aria-disabled"], zd = /* @__PURE__ */ J({
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
  emits: yd,
  setup(l, { expose: a, emit: e }) {
    const t = l, r = e, {
      isVisible: o,
      triggerRef: n,
      contentRef: u,
      dropdownId: s,
      show: i,
      hide: p,
      toggle: k,
      handleItemClick: y,
      handleOptionClick: c
    } = wd(t, r), b = m(() => {
      var L, A, P, F, z, E, D, N, j, K;
      if (t.unstyled)
        return {
          root: ((L = t.pt) == null ? void 0 : L.root) || "",
          trigger: ((A = t.pt) == null ? void 0 : A.trigger) || "",
          content: ((P = t.pt) == null ? void 0 : P.content) || "",
          arrow: ((F = t.pt) == null ? void 0 : F.arrow) || "",
          menu: ((z = t.pt) == null ? void 0 : z.menu) || "",
          menuItem: ((E = t.pt) == null ? void 0 : E.menuItem) || "",
          menuItemSelected: ((D = t.pt) == null ? void 0 : D.menuItemSelected) || "",
          menuItemDisabled: ((N = t.pt) == null ? void 0 : N.menuItemDisabled) || "",
          menuItemIcon: ((j = t.pt) == null ? void 0 : j.menuItemIcon) || "",
          menuDivider: ((K = t.pt) == null ? void 0 : K.menuDivider) || ""
        };
      const {
        root: v,
        trigger: d,
        content: f,
        arrow: S,
        menu: w,
        menuItem: B,
        menuItemSelected: M,
        menuItemActive: I,
        menuItemDisabled: O,
        menuItemIcon: $,
        menuDivider: T
      } = Oe({
        placement: t.placement,
        size: t.size,
        disabled: t.disabled
      });
      return {
        root: v(),
        trigger: d(),
        content: f(),
        arrow: S(),
        menu: w(),
        menuItem: B(),
        menuItemSelected: M(),
        menuItemActive: I(),
        menuItemDisabled: O(),
        menuItemIcon: $(),
        menuDivider: T()
      };
    });
    return a({
      show: i,
      hide: p,
      toggle: k
    }), $e("dropdown", {
      handleItemClick: y,
      closeOnSelect: t.closeOnSelect
    }), (v, d) => (h(), x("div", {
      class: g(b.value.root)
    }, [
      V("div", {
        ref_key: "triggerRef",
        ref: n,
        class: g(b.value.trigger),
        onClick: d[0] || (d[0] = (f) => v.trigger === "click" && C(k)()),
        onMouseenter: d[1] || (d[1] = (f) => v.trigger === "hover" && C(i)()),
        onMouseleave: d[2] || (d[2] = (f) => v.trigger === "hover" && C(p)()),
        onFocus: d[3] || (d[3] = (f) => v.trigger === "focus" && C(i)()),
        onBlur: d[4] || (d[4] = (f) => v.trigger === "focus" && C(p)()),
        onKeydown: [
          d[5] || (d[5] = ke(
            //@ts-ignore
            (...f) => C(p) && C(p)(...f),
            ["esc"]
          )),
          d[6] || (d[6] = ke(Ce((f) => v.trigger === "click" && C(k)(), ["prevent"]), ["space"])),
          d[7] || (d[7] = ke((f) => v.trigger === "click" && C(k)(), ["enter"]))
        ],
        tabindex: "0",
        role: "button",
        "aria-haspopup": !0,
        "aria-expanded": C(o),
        "aria-controls": C(s)
      }, [
        G(v.$slots, "trigger")
      ], 42, xd),
      Be(Je, { name: "dropdown" }, {
        default: Pe(() => [
          C(o) ? (h(), x("div", {
            key: 0,
            ref_key: "contentRef",
            ref: u,
            id: C(s),
            class: g(b.value.content),
            onMouseenter: d[8] || (d[8] = (f) => v.trigger === "hover" && C(i)()),
            onMouseleave: d[9] || (d[9] = (f) => v.trigger === "hover" && C(p)()),
            role: "menu"
          }, [
            v.arrow ? (h(), x("div", {
              key: 0,
              class: g(b.value.arrow)
            }, null, 2)) : _("", !0),
            V("div", {
              class: g(b.value.menu)
            }, [
              v.options && v.options.length ? (h(!0), x(ae, { key: 0 }, ne(v.options, (f, S) => (h(), x(ae, { key: S }, [
                f.divider ? (h(), x("div", {
                  key: 0,
                  class: g(b.value.menuDivider),
                  role: "separator"
                }, null, 2)) : (h(), x("div", {
                  key: 1,
                  class: g([
                    b.value.menuItem,
                    f.disabled && b.value.menuItemDisabled
                  ]),
                  onClick: (w) => !f.disabled && C(c)(f, w),
                  role: "menuitem",
                  "aria-disabled": f.disabled
                }, [
                  f.icon ? (h(), x("span", {
                    key: 0,
                    class: g(b.value.menuItemIcon)
                  }, U(f.icon), 3)) : _("", !0),
                  V("span", null, U(f.label), 1)
                ], 10, Cd))
              ], 64))), 128)) : G(v.$slots, "default", { key: 1 })
            ], 2)
          ], 42, kd)) : _("", !0)
        ]),
        _: 3
      })
    ], 2));
  }
}), Sd = ["aria-disabled"], Bd = /* @__PURE__ */ J({
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
  emits: hd,
  setup(l, { emit: a }) {
    const e = l, t = a, r = Ve("dropdown", {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      handleItemClick: (p, k) => {
      },
      closeOnSelect: !0
    }), o = (p) => {
      t("click", p), e.value !== void 0 && r.handleItemClick(e.value, p);
    }, n = (p) => {
      const k = new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0,
        view: window
      });
      t("click", k), e.value !== void 0 && r.handleItemClick(e.value, k);
    }, u = m(() => {
      var p, k;
      return e.unstyled ? ((p = e.pt) == null ? void 0 : p.root) || "" : [
        Oe().menuItem(),
        e.active && Oe().menuItemActive(),
        e.disabled && Oe().menuItemDisabled(),
        (k = e.pt) == null ? void 0 : k.root
      ].filter(Boolean).join(" ");
    }), s = m(() => {
      var p;
      return e.unstyled ? ((p = e.pt) == null ? void 0 : p.icon) || "" : Oe().menuItemIcon();
    }), i = m(() => {
      var p;
      return e.unstyled ? ((p = e.pt) == null ? void 0 : p.root) || "" : Oe().menuDivider();
    });
    return (p, k) => p.divider ? (h(), x("div", {
      key: 1,
      role: "separator",
      class: g(i.value)
    }, null, 2)) : (h(), x("div", {
      key: 0,
      class: g(u.value),
      role: "menuitem",
      tabindex: "0",
      "aria-disabled": p.disabled,
      onClick: k[0] || (k[0] = (y) => !p.disabled && o(y)),
      onKeydown: [
        k[1] || (k[1] = ke((y) => !p.disabled && n(), ["enter"])),
        k[2] || (k[2] = ke(Ce((y) => !p.disabled && n(), ["prevent"]), ["space"]))
      ]
    }, [
      G(p.$slots, "icon", {}, () => [
        p.icon ? (h(), x("span", {
          key: 0,
          class: g(s.value)
        }, U(p.icon), 3)) : _("", !0)
      ]),
      G(p.$slots, "default", {}, () => [
        ce(U(p.label), 1)
      ])
    ], 42, Sd));
  }
}), Vd = /* @__PURE__ */ J({
  __name: "DropdownDivider",
  props: {
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  setup(l) {
    const a = l, e = m(() => {
      var t, r;
      return a.unstyled ? ((t = a.pt) == null ? void 0 : t.root) || "" : [Oe().menuDivider(), (r = a.pt) == null ? void 0 : r.root].filter(Boolean).join(" ");
    });
    return (t, r) => (h(), x("div", {
      class: g(e.value),
      role: "separator"
    }, null, 2));
  }
}), $d = Q(zd), Id = Q(Bd), Dd = Q(Vd), Md = R({
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
}), Td = R({
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
}), Rd = R({
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
}), Ed = (l, a) => {
  const e = H(l.active || !1), t = m({
    get: () => l.active !== void 0 ? l.active : e.value,
    set: (n) => {
      l.disabled || (l.active === void 0 && (e.value = n), a("update:active", n), a("change", n));
    }
  }), r = () => {
    t.value = !t.value;
  };
  return {
    isActive: t,
    toggle: r,
    handleTrigger: (n) => {
      l.disabled || l.trigger === "click" && r();
    }
  };
}, Ld = ["tabindex", "aria-checked", "aria-disabled"], Ad = /* @__PURE__ */ J({
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
    const e = l, t = a, { isActive: r, handleTrigger: o } = Ed(e, t), n = m(() => {
      var i, p;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.root) || "" : Md({
        variant: e.variant,
        size: e.size,
        class: (p = e.pt) == null ? void 0 : p.root
      });
    }), u = m(() => {
      var i, p;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.on) || "" : Td({
        active: r.value,
        variant: e.variant,
        disabled: e.disabled,
        class: (p = e.pt) == null ? void 0 : p.on
      });
    }), s = m(() => {
      var i, p;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.off) || "" : Rd({
        active: r.value,
        variant: e.variant,
        disabled: e.disabled,
        class: (p = e.pt) == null ? void 0 : p.off
      });
    });
    return (i, p) => (h(), x("div", {
      class: g(n.value),
      onClick: p[0] || (p[0] = (k) => e.trigger === "click" ? C(o)(k) : void 0),
      onMouseenter: p[1] || (p[1] = (k) => e.trigger === "hover" ? r.value = !0 : void 0),
      onMouseleave: p[2] || (p[2] = (k) => e.trigger === "hover" ? r.value = !1 : void 0),
      onFocus: p[3] || (p[3] = (k) => e.trigger === "focus" ? r.value = !0 : void 0),
      onBlur: p[4] || (p[4] = (k) => e.trigger === "focus" ? r.value = !1 : void 0),
      tabindex: e.trigger === "focus" ? 0 : void 0,
      "aria-checked": C(r),
      "aria-disabled": e.disabled,
      role: "switch"
    }, [
      V("div", {
        class: g(u.value)
      }, [
        G(i.$slots, "on")
      ], 2),
      V("div", {
        class: g(s.value)
      }, [
        G(i.$slots, "off")
      ], 2)
    ], 42, Ld));
  }
}), Od = Q(Ad), Pd = R({
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
}), jd = R({
  base: "absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
}), Fd = R({
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
}), Wd = {
  load: (l) => l instanceof Event,
  error: (l) => l instanceof Event,
  zoom: (l) => typeof l == "boolean"
}, Hd = (l, a) => {
  const e = H(null), t = H(!0), r = H(!1), o = H(l.isZoomed || !1), n = (i) => {
    t.value = !1, a("load", i);
  }, u = (i) => {
    t.value = !1, r.value = !0, a("error", i);
  }, s = () => {
    l.isZoomable && (o.value = !o.value, a("zoom", o.value));
  };
  return ee(
    () => l.isZoomed,
    (i) => {
      i !== void 0 && (o.value = i);
    }
  ), ee(
    () => l.src,
    () => {
      t.value = !0, r.value = !1;
    }
  ), {
    imageRef: e,
    isLoading: t,
    isError: r,
    isZoomed: o,
    handleLoad: n,
    handleError: u,
    toggleZoom: s
  };
}, _d = ["aria-label"], Nd = ["src", "alt", "loading"], Gd = ["src", "alt"], Kd = {
  key: 3,
  class: "absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800"
}, Yd = { class: "text-gray-400 flex flex-col items-center" }, Ud = /* @__PURE__ */ J({
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
  emits: Wd,
  setup(l, { expose: a, emit: e }) {
    const t = l, r = e, {
      imageRef: o,
      isLoading: n,
      isError: u,
      isZoomed: s,
      handleLoad: i,
      handleError: p,
      toggleZoom: k
    } = Hd(t, r), y = () => {
      t.isZoomable && k();
    }, c = m(() => {
      var B, M;
      return t.unstyled ? ((B = t.pt) == null ? void 0 : B.root) || "" : Pd({
        fit: t.fit,
        radius: t.radius,
        isZoomable: t.isZoomable,
        isZoomed: s.value,
        class: (M = t.pt) == null ? void 0 : M.root
      });
    }), b = m(() => {
      var B, M;
      return t.unstyled ? ((B = t.pt) == null ? void 0 : B.img) || "" : `w-full h-full transition-transform ${s.value ? "scale-" + t.zoomScale : ""} ${((M = t.pt) == null ? void 0 : M.img) || ""}`;
    }), v = m(() => {
      var B, M;
      return t.unstyled ? ((B = t.pt) == null ? void 0 : B.skeleton) || "" : jd({ class: (M = t.pt) == null ? void 0 : M.skeleton });
    }), d = m(() => {
      var B, M;
      return t.unstyled ? ((B = t.pt) == null ? void 0 : B.overlay) || "" : Fd({ visible: s.value, class: (M = t.pt) == null ? void 0 : M.overlay });
    }), f = m(() => {
      const B = {};
      return t.width !== "auto" && (B.width = typeof t.width == "number" ? `${t.width}px` : t.width), t.height !== "auto" && (B.height = typeof t.height == "number" ? `${t.height}px` : t.height), B;
    }), S = m(() => ({
      objectFit: t.fit
    })), w = m(() => t.skeletonColor ? { backgroundColor: t.skeletonColor } : {});
    return a({
      imageRef: o,
      isLoading: n,
      isError: u,
      isZoomed: s
    }), (B, M) => (h(), x("div", {
      class: g(c.value),
      style: ue(f.value),
      onClick: y,
      role: "img",
      "aria-label": B.alt
    }, [
      B.skeleton && C(n) ? (h(), x("div", {
        key: 0,
        class: g(v.value),
        style: ue(w.value)
      }, null, 6)) : _("", !0),
      V("img", {
        ref_key: "imageRef",
        ref: o,
        src: B.src,
        alt: B.alt,
        class: g(b.value),
        style: ue(S.value),
        loading: B.loading,
        onLoad: M[0] || (M[0] = //@ts-ignore
        (...I) => C(i) && C(i)(...I)),
        onError: M[1] || (M[1] = //@ts-ignore
        (...I) => C(p) && C(p)(...I))
      }, null, 46, Nd),
      B.blurred && C(n) ? (h(), x("img", {
        key: 1,
        src: B.src,
        alt: B.alt,
        class: "absolute inset-0 w-full h-full",
        style: ue({
          filter: `blur(${B.blurAmount}px)`,
          transform: "scale(1.1)",
          objectFit: B.fit
        })
      }, null, 12, Gd)) : _("", !0),
      B.isZoomable && C(s).valueOf() ? (h(), x("div", {
        key: 2,
        class: g(d.value)
      }, [
        G(B.$slots, "zoom-icon", {}, () => [
          M[2] || (M[2] = cl('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>', 1))
        ])
      ], 2)) : _("", !0),
      C(u) ? (h(), x("div", Kd, [
        G(B.$slots, "error", {}, () => [
          V("div", Yd, [
            M[3] || (M[3] = V("svg", {
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
              V("rect", {
                x: "3",
                y: "3",
                width: "18",
                height: "18",
                rx: "2",
                ry: "2"
              }),
              V("circle", {
                cx: "8.5",
                cy: "8.5",
                r: "1.5"
              }),
              V("polyline", { points: "21 15 16 10 5 21" })
            ], -1)),
            V("span", null, U(B.alt || "图片加载失败"), 1)
          ])
        ])
      ])) : _("", !0)
    ], 14, _d));
  }
}), Xd = Q(Ud), qd = R({
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
}), Zd = R({
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
}), Jd = {
  click: (l) => l instanceof MouseEvent
}, Qd = (l, a) => {
  const e = (r) => {
    if (l.disabled) {
      r.preventDefault();
      return;
    }
    a("click", r);
  }, t = m(() => {
    const r = {};
    return l.href && (r.href = l.href), l.external && (r.target = "_blank", r.rel = "noopener noreferrer"), r;
  });
  return {
    handleClick: e,
    linkAttributes: t
  };
}, eu = ["aria-disabled"], tu = /* @__PURE__ */ J({
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
  emits: Jd,
  setup(l, { emit: a }) {
    const e = l, t = a, { handleClick: r, linkAttributes: o } = Qd(e, t), n = m(() => {
      var s, i;
      return e.unstyled ? ((s = e.pt) == null ? void 0 : s.root) || "" : qd({
        variant: e.variant,
        size: e.size,
        underline: e.underline,
        disabled: e.disabled,
        class: (i = e.pt) == null ? void 0 : i.root
      });
    }), u = (s) => {
      var i, p;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.icon) || "" : Zd({
        position: s,
        size: e.size,
        class: (p = e.pt) == null ? void 0 : p.icon
      });
    };
    return (s, i) => (h(), x("a", Ht({ class: n.value }, C(o), {
      onClick: i[0] || (i[0] = //@ts-ignore
      (...p) => C(r) && C(r)(...p)),
      "aria-disabled": s.disabled
    }), [
      s.iconPosition === "left" ? G(s.$slots, "icon-left", { key: 0 }, () => [
        s.$slots["icon-left"] ? (h(), x("span", {
          key: 0,
          class: g(u("left"))
        }, [
          G(s.$slots, "icon-left")
        ], 2)) : _("", !0)
      ]) : _("", !0),
      G(s.$slots, "default"),
      s.iconPosition === "right" ? G(s.$slots, "icon-right", { key: 1 }, () => [
        s.$slots["icon-right"] ? (h(), x("span", {
          key: 0,
          class: g(u("right"))
        }, [
          G(s.$slots, "icon-right")
        ], 2)) : _("", !0)
      ]) : _("", !0),
      s.external && !s.$slots["icon-right"] && s.iconPosition !== "left" ? (h(), x("span", {
        key: 2,
        class: g(u("right"))
      }, i[1] || (i[1] = [
        V("svg", {
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
          V("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
          V("polyline", { points: "15 3 21 3 21 9" }),
          V("line", {
            x1: "10",
            y1: "14",
            x2: "21",
            y2: "3"
          })
        ], -1)
      ]), 2)) : _("", !0)
    ], 16, eu));
  }
}), lu = Q(tu), au = R({
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
}), ru = {
  change: (l, a) => typeof l == "number" && typeof a == "number",
  "update:active-index": (l) => typeof l == "number"
}, ou = ["tabindex"], nu = ["tabindex"], su = ["onClick", "aria-label", "aria-current", "tabindex"], iu = /* @__PURE__ */ J({
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
  emits: ru,
  setup(l, { expose: a, emit: e }) {
    const t = l, r = e, o = _e(), n = H(null), u = H(t.initialIndex);
    let s = null;
    const i = m(() => {
      if (!o) return 0;
      let $ = 0;
      for (; o[`item-${$}`]; )
        $++;
      return $ || 1;
    }), p = m(() => {
      var $, T;
      return t.unstyled ? (($ = t.pt) == null ? void 0 : $.root) || "" : au({
        variant: t.variant,
        size: t.size,
        class: (T = t.pt) == null ? void 0 : T.root
      });
    }), k = m(() => {
      var $, T;
      return t.unstyled ? (($ = t.pt) == null ? void 0 : $.container) || "" : `relative w-full h-full ${((T = t.pt) == null ? void 0 : T.container) || ""}`;
    }), y = m(() => {
      var $, T;
      return t.unstyled ? (($ = t.pt) == null ? void 0 : $.item) || "" : `w-full h-full ${((T = t.pt) == null ? void 0 : T.item) || ""}`;
    }), c = m(() => {
      var $, T;
      return t.unstyled ? (($ = t.pt) == null ? void 0 : $.prevButton) || "" : `absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${((T = t.pt) == null ? void 0 : T.prevButton) || ""}`;
    }), b = m(() => {
      var $, T;
      return t.unstyled ? (($ = t.pt) == null ? void 0 : $.nextButton) || "" : `absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${((T = t.pt) == null ? void 0 : T.nextButton) || ""}`;
    }), v = m(() => {
      var $, T;
      return t.unstyled ? (($ = t.pt) == null ? void 0 : $.indicators) || "" : `absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 ${((T = t.pt) == null ? void 0 : T.indicators) || ""}`;
    }), d = m(() => {
      var $, T;
      return t.unstyled ? (($ = t.pt) == null ? void 0 : $.indicator) || "" : `w-2 h-2 rounded-full bg-white/50 hover:bg-white/75 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${((T = t.pt) == null ? void 0 : T.indicator) || ""}`;
    }), f = m(() => {
      var $, T;
      return t.unstyled ? (($ = t.pt) == null ? void 0 : $.activeIndicator) || "" : `w-6 h-2 rounded-full bg-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${((T = t.pt) == null ? void 0 : T.activeIndicator) || ""}`;
    }), S = () => {
      if (t.disabled) return;
      const $ = u.value;
      u.value < i.value - 1 ? u.value++ : t.loop && (u.value = 0), u.value !== $ && (r("change", u.value, $), r("update:active-index", u.value));
    }, w = () => {
      if (t.disabled) return;
      const $ = u.value;
      u.value > 0 ? u.value-- : t.loop && (u.value = i.value - 1), u.value !== $ && (r("change", u.value, $), r("update:active-index", u.value));
    }, B = ($) => {
      if (!t.disabled && $ >= 0 && $ < i.value) {
        const T = u.value;
        u.value = $, r("change", u.value, T), r("update:active-index", u.value);
      }
    }, M = () => {
      t.autoplay && !t.disabled && (s = setInterval(() => {
        S();
      }, t.interval));
    }, I = () => {
      s && (clearInterval(s), s = null);
    }, O = ($) => {
      !t.keyboardNavigation || t.disabled || ($.key === "ArrowLeft" ? w() : $.key === "ArrowRight" && S());
    };
    return ee(
      () => t.autoplay,
      ($) => {
        $ ? M() : I();
      }
    ), ee(
      () => t.disabled,
      ($) => {
        $ ? I() : t.autoplay && M();
      }
    ), be(() => {
      t.autoplay && M(), t.keyboardNavigation && n.value && n.value.addEventListener("keydown", O);
    }), Re(() => {
      I(), n.value && n.value.removeEventListener("keydown", O);
    }), a({
      next: S,
      prev: w,
      goToSlide: B
    }), ($, T) => (h(), x("div", {
      class: g(p.value),
      ref_key: "rootRef",
      ref: n
    }, [
      V("div", {
        class: g(k.value)
      }, [
        (h(!0), x(ae, null, ne(i.value, (L, A) => (h(), x(ae, null, [
          A === u.value ? (h(), x("div", {
            key: A,
            class: g(y.value)
          }, [
            G($.$slots, `item-${A}`)
          ], 2)) : _("", !0)
        ], 64))), 256))
      ], 2),
      $.navigation && !$.disabled ? (h(), x(ae, { key: 0 }, [
        $.navigation && ($.loop || u.value > 0) ? (h(), x("button", {
          key: 0,
          class: g(c.value),
          onClick: w,
          "aria-label": "Previous slide",
          tabindex: $.disabled ? -1 : 0
        }, [
          G($.$slots, "prev-icon", {}, () => [
            T[0] || (T[0] = V("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              V("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M15 19l-7-7 7-7"
              })
            ], -1))
          ])
        ], 10, ou)) : _("", !0),
        $.navigation && ($.loop || u.value < i.value - 1) ? (h(), x("button", {
          key: 1,
          class: g(b.value),
          onClick: S,
          "aria-label": "Next slide",
          tabindex: $.disabled ? -1 : 0
        }, [
          G($.$slots, "next-icon", {}, () => [
            T[1] || (T[1] = V("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              V("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M9 5l7 7-7 7"
              })
            ], -1))
          ])
        ], 10, nu)) : _("", !0)
      ], 64)) : _("", !0),
      $.indicators && !$.disabled ? (h(), x("div", {
        key: 1,
        class: g(v.value)
      }, [
        (h(!0), x(ae, null, ne(i.value, (L, A) => (h(), x("button", {
          key: A,
          class: g([
            A === u.value ? f.value : d.value
          ]),
          onClick: (P) => B(A),
          "aria-label": `Go to slide ${A + 1}`,
          "aria-current": A === u.value,
          tabindex: $.disabled ? -1 : 0
        }, null, 10, su))), 128))
      ], 2)) : _("", !0)
    ], 2));
  }
}), du = Q(iu), uu = R({
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
}), cu = {}, fu = {}, pu = /* @__PURE__ */ J({
  name: "Timeline",
  __name: "timeline",
  props: {
    orientation: { default: "vertical" },
    align: { default: "left" },
    reverse: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: cu,
  setup(l) {
    const a = l;
    $e("timelineAlign", a.align), $e("timelineOrientation", a.orientation);
    const e = m(() => {
      var r, o;
      return a.unstyled ? ((r = a.pt) == null ? void 0 : r.root) || "" : uu({
        orientation: a.orientation,
        align: a.align,
        class: (o = a.pt) == null ? void 0 : o.root
      });
    }), t = m(() => a.reverse ? { flexDirection: "column-reverse" } : {});
    return (r, o) => (h(), x("div", {
      class: g(e.value),
      style: ue(t.value)
    }, [
      G(r.$slots, "default")
    ], 6));
  }
}), gu = /* @__PURE__ */ J({
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
  emits: fu,
  setup(l) {
    const a = l, e = Ve(
      "timelineAlign",
      "left"
    ), t = Ve(
      "timelineOrientation",
      "vertical"
    ), r = m(() => e === "alternate"), o = m(() => {
      var b, v, d;
      if (a.unstyled)
        return ((b = a.pt) == null ? void 0 : b.root) || "";
      const c = "relative flex";
      return t === "vertical" ? `${c} ${e === "right" ? "flex-row-reverse" : "flex-row"} ${((v = a.pt) == null ? void 0 : v.root) || ""}` : `${c} flex-col ${((d = a.pt) == null ? void 0 : d.root) || ""}`;
    }), n = m(() => {
      var b, v, d;
      if (a.unstyled)
        return ((b = a.pt) == null ? void 0 : b.dot) || "";
      const c = "flex-shrink-0 z-10";
      return t === "vertical" ? `${c} ${e === "right" ? "mr-4" : "ml-4"} ${((v = a.pt) == null ? void 0 : v.dot) || ""}` : `${c} ${((d = a.pt) == null ? void 0 : d.dot) || ""}`;
    }), u = m(() => {
      var c, b, v;
      return a.unstyled ? ((c = a.pt) == null ? void 0 : c.connector) || "" : t === "vertical" ? `absolute top-6 left-0 w-0.5 h-full bg-gray-300 dark:bg-gray-600 ${e === "right" ? "right-0 left-auto" : ""} ${((b = a.pt) == null ? void 0 : b.connector) || ""}` : `absolute left-6 top-0 w-full h-0.5 bg-gray-300 dark:bg-gray-600 ${((v = a.pt) == null ? void 0 : v.connector) || ""}`;
    }), s = m(() => {
      var c, b;
      return a.unstyled ? ((c = a.pt) == null ? void 0 : c.content) || "" : `flex-1 ${((b = a.pt) == null ? void 0 : b.content) || ""}`;
    }), i = m(() => {
      var c, b;
      return a.unstyled ? ((c = a.pt) == null ? void 0 : c.opposite) || "" : `flex-1 text-right ${((b = a.pt) == null ? void 0 : b.opposite) || ""}`;
    }), p = m(() => a.dotColor ? { borderColor: a.dotColor } : {}), k = m(() => a.lineColor ? { backgroundColor: a.lineColor } : {}), y = m(() => {
      const c = {};
      return a.dotColor && !a.unstyled && (a.lineColor || (c["--line-color"] = a.dotColor)), c;
    });
    return (c, b) => (h(), x("div", {
      class: g(o.value),
      style: ue(y.value)
    }, [
      V("div", {
        class: g(n.value),
        style: ue(p.value)
      }, [
        G(c.$slots, "dot", {}, () => {
          var v;
          return [
            V("div", {
              class: g([
                "w-3 h-3 rounded-full border-2 border-gray-300 dark:border-gray-600",
                (v = a.pt) == null ? void 0 : v.dot
              ]),
              style: ue(p.value)
            }, null, 6)
          ];
        })
      ], 6),
      a.isLast ? _("", !0) : (h(), x("div", {
        key: 0,
        class: g(u.value),
        style: ue(k.value)
      }, null, 6)),
      V("div", {
        class: g(s.value)
      }, [
        G(c.$slots, "default")
      ], 2),
      r.value ? (h(), x("div", {
        key: 1,
        class: g(i.value)
      }, [
        G(c.$slots, "opposite")
      ], 2)) : _("", !0)
    ], 6));
  }
}), bu = Q(pu), vu = Q(gu), et = H([]);
let mu = 0;
const yu = (l) => {
  const a = `toast-${mu++}`, e = {
    id: a,
    visible: !0,
    ...l
  };
  return et.value.push(e), a;
}, sl = (l) => {
  const a = et.value.findIndex((e) => e.id === l);
  a !== -1 && et.value.splice(a, 1);
}, hu = () => {
  et.value = [];
}, ot = R({
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
}), wu = ["innerHTML"], xu = { class: "flex-1" }, ku = /* @__PURE__ */ J({
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
    const e = l, t = a, { type: r = "info", duration: o = 3e3 } = e, n = m(() => ot().base({ type: e.type })), u = m(() => ot().icon({ type: e.type })), s = m(
      () => ot().description({ type: e.type })
    ), i = m(
      () => ot().closeButton({ type: e.type })
    ), p = {
      info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" /></svg>',
      success: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" /></svg>',
      warning: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" /></svg>',
      error: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" /></svg>'
    };
    let k;
    const y = H(o), c = H(0), b = () => {
      o <= 0 || (c.value = Date.now(), k = setTimeout(() => {
        S();
      }, y.value));
    }, v = () => {
      o <= 0 || (clearTimeout(k), y.value -= Date.now() - c.value);
    }, d = () => {
      o <= 0 || b();
    }, f = () => {
      S();
    }, S = () => {
      t("close", e.id), e.onClose && e.onClose(e.id);
    };
    return be(() => {
      b();
    }), Re(() => {
      clearTimeout(k);
    }), (w, B) => (h(), x("div", {
      class: g(n.value),
      role: "alert",
      onMouseenter: v,
      onMouseleave: d
    }, [
      V("div", {
        class: g(u.value)
      }, [
        G(w.$slots, "icon", {}, () => [
          V("span", {
            innerHTML: p[C(r) || "info"]
          }, null, 8, wu)
        ])
      ], 2),
      V("div", xu, [
        V("div", {
          class: g(s.value)
        }, U(w.message), 3)
      ]),
      (h(), x("button", {
        key: 0,
        type: "button",
        class: g(i.value),
        "aria-label": "Close",
        onClick: f
      }, B[0] || (B[0] = [
        V("svg", {
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
          V("line", {
            x1: "18",
            y1: "6",
            x2: "6",
            y2: "18"
          }),
          V("line", {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "18"
          })
        ], -1)
      ]), 2))
    ], 34));
  }
}), Cu = { class: "pointer-events-none fixed inset-0 z-[9999] overflow-hidden" }, il = /* @__PURE__ */ J({
  __name: "ToastContainer",
  setup(l) {
    const a = [
      "top-left",
      "top-right",
      "bottom-left",
      "bottom-right",
      "top-center",
      "bottom-center"
    ], e = (n) => et.value.filter((u) => (u.position || "top-right") === n), t = (n) => {
      sl(n);
    }, r = (n) => {
      switch (n) {
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
    }, o = (n) => {
      const u = n.includes("top"), s = n.includes("center"), i = n.includes("right");
      let p = "", k = "";
      return s ? (p = u ? "-translate-y-full opacity-0" : "translate-y-full opacity-0", k = u ? "-translate-y-full opacity-0" : "translate-y-full opacity-0") : u ? i ? (p = "translate-x-full opacity-0", k = "translate-x-full opacity-0") : (p = "-translate-x-full opacity-0", k = "-translate-x-full opacity-0") : (p = "translate-y-full opacity-0", k = "translate-y-full opacity-0"), {
        enter: "transition-all duration-300 ease-out",
        leave: "transition-all duration-200 ease-in absolute w-full",
        enterFrom: p,
        leaveTo: k
      };
    };
    return (n, u) => (h(), x("div", Cu, [
      (h(), x(ae, null, ne(a, (s) => V("div", {
        key: s,
        class: g([
          "absolute flex w-full flex-col gap-4 p-4 md:max-w-[420px]",
          r(s)
        ])
      }, [
        Be(fl, {
          tag: "div",
          "enter-active-class": o(s).enter,
          "leave-active-class": o(s).leave,
          "enter-from-class": o(s).enterFrom,
          "leave-to-class": o(s).leaveTo,
          "move-class": "transition-all duration-300 ease-in-out",
          class: "flex flex-col gap-4 w-full"
        }, {
          default: Pe(() => [
            (h(!0), x(ae, null, ne(e(s), (i) => (h(), Se(ku, Ht({
              key: i.id
            }, { ref_for: !0 }, i, { onClose: t }), null, 16))), 128))
          ]),
          _: 2
        }, 1032, ["enter-active-class", "leave-active-class", "enter-from-class", "leave-to-class"])
      ], 2)), 64))
    ]));
  }
});
let Ue = null;
const zu = () => {
  if (typeof document > "u" || Ue) return;
  Ue = document.createElement("div"), Ue.id = "versakit-toast-container", document.body.appendChild(Ue);
  const l = Be(il);
  pl(l, Ue);
}, Xe = (l) => (zu(), yu(l)), Fu = {
  success: (l, a) => Xe({ ...a, message: l, type: "success" }),
  error: (l, a) => Xe({ ...a, message: l, type: "error" }),
  warning: (l, a) => Xe({ ...a, message: l, type: "warning" }),
  info: (l, a) => Xe({ ...a, message: l, type: "info" }),
  show: (l) => Xe(l),
  remove: (l) => sl(l),
  removeAll: () => hu()
}, Su = /* @__PURE__ */ J({
  __name: "Steps",
  props: {
    current: { default: 0 },
    direction: { default: "horizontal" },
    status: { default: "process" }
  },
  emits: ["update:current", "change"],
  setup(l, { emit: a }) {
    const e = l, t = a, r = H([]), o = (s) => {
      r.value.push(s);
    }, n = (s) => {
      const i = r.value.indexOf(s);
      i !== -1 && r.value.splice(i, 1);
    }, u = (s) => {
      s !== e.current && (t("update:current", s), t("change", s));
    };
    return $e("steps-context", {
      current: xe(e, "current"),
      direction: xe(e, "direction"),
      status: xe(e, "status"),
      steps: r,
      registerStep: o,
      unregisterStep: n,
      onChange: u
    }), (s, i) => (h(), x("div", {
      class: g([
        "flex w-full gap-4",
        s.direction === "vertical" ? "flex-col" : "flex-row items-center"
      ])
    }, [
      G(s.$slots, "default")
    ], 2));
  }
}), Bu = { class: "relative z-10 flex flex-col items-center" }, Vu = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  class: "h-5 w-5"
}, $u = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  class: "h-5 w-5"
}, Iu = { key: 2 }, Du = {
  key: 0,
  class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
}, Mu = /* @__PURE__ */ J({
  __name: "StepItem",
  props: {
    title: {},
    description: {},
    status: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(l) {
    const a = l, e = Ve("steps-context"), t = Symbol("step-item");
    be(() => {
      e == null || e.registerStep(t);
    }), Re(() => {
      e == null || e.unregisterStep(t);
    });
    const r = m(() => (e == null ? void 0 : e.steps.value.indexOf(t)) ?? -1), o = m(() => r.value === ((e == null ? void 0 : e.steps.value.length) ?? 0) - 1), n = m(() => {
      if (a.status) return a.status;
      if (!e) return "wait";
      const y = e.current.value;
      return r.value < y ? "finish" : r.value === y ? e.status.value : "wait";
    }), u = m(() => n.value === "finish"), s = m(() => n.value === "process"), i = m(() => !a.disabled && e), p = m(() => {
      switch (n.value) {
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
    return (y, c) => {
      var b, v, d;
      return h(), x("div", {
        class: g([
          "relative flex flex-1",
          ((b = C(e)) == null ? void 0 : b.direction.value) === "vertical" ? "flex-col pb-8 last:pb-0" : "flex-row items-center last:flex-none",
          i.value ? "cursor-pointer" : "cursor-default"
        ]),
        onClick: k
      }, [
        o.value ? _("", !0) : (h(), x("div", {
          key: 0,
          class: g([
            "absolute transition-colors duration-300",
            ((v = C(e)) == null ? void 0 : v.direction.value) === "vertical" ? "left-[15px] top-[30px] h-[calc(100%-10px)] w-[2px]" : "left-[50%] right-[-50%] top-[15px] h-[2px] w-full",
            u.value ? "bg-blue-500" : "bg-gray-200 dark:bg-gray-700"
          ])
        }, null, 2)),
        V("div", Bu, [
          V("div", {
            class: g([
              "flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300",
              p.value
            ])
          }, [
            G(y.$slots, "icon", {}, () => [
              n.value === "finish" ? (h(), x("svg", Vu, c[0] || (c[0] = [
                V("path", {
                  "fill-rule": "evenodd",
                  d: "M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z",
                  "clip-rule": "evenodd"
                }, null, -1)
              ]))) : n.value === "error" ? (h(), x("svg", $u, c[1] || (c[1] = [
                V("path", {
                  "fill-rule": "evenodd",
                  d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
                  "clip-rule": "evenodd"
                }, null, -1)
              ]))) : (h(), x("span", Iu, U(r.value + 1), 1))
            ])
          ], 2)
        ]),
        V("div", {
          class: g([
            "flex flex-col",
            ((d = C(e)) == null ? void 0 : d.direction.value) === "vertical" ? "ml-4 mt-0.5" : "absolute top-8 left-1/2 -translate-x-1/2 w-max max-w-[120px] text-center mt-2"
          ])
        }, [
          V("div", {
            class: g([
              "text-sm font-medium transition-colors duration-300",
              s.value || u.value ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400",
              n.value === "error" ? "text-red-500" : ""
            ])
          }, [
            G(y.$slots, "title", {}, () => [
              ce(U(y.title), 1)
            ])
          ], 2),
          y.description || y.$slots.description ? (h(), x("div", Du, [
            G(y.$slots, "description", {}, () => [
              ce(U(y.description), 1)
            ])
          ])) : _("", !0)
        ], 2)
      ], 2);
    };
  }
}), Tu = ["value", "checked", "disabled"], Ru = /* @__PURE__ */ J({
  __name: "Radio",
  props: {
    modelValue: { type: [String, Number, Boolean] },
    label: { type: [String, Number, Boolean] },
    disabled: { type: Boolean, default: !1 },
    size: {}
  },
  emits: ["update:modelValue", "change"],
  setup(l, { emit: a }) {
    const e = l, t = a, r = Ve("radio-group", null), o = m(() => r ? r.modelValue.value === e.label : e.modelValue === e.label), n = m(() => (r == null ? void 0 : r.disabled.value) || !1 || e.disabled), u = m(() => (r == null ? void 0 : r.size.value) || e.size || "md"), s = m(() => {
      switch (u.value) {
        case "sm":
          return "h-4 w-4";
        case "lg":
          return "h-6 w-6";
        default:
          return "h-5 w-5";
      }
    }), i = m(() => {
      switch (u.value) {
        case "sm":
          return "h-1.5 w-1.5";
        case "lg":
          return "h-2.5 w-2.5";
        default:
          return "h-2 w-2";
      }
    }), p = m(() => {
      switch (u.value) {
        case "sm":
          return "text-sm";
        case "lg":
          return "text-lg";
        default:
          return "text-base";
      }
    }), k = () => {
      if (n.value) return;
      const y = e.label ?? "";
      r ? r.changeEvent(y) : (t("update:modelValue", y), t("change", y));
    };
    return (y, c) => (h(), x("label", {
      class: g([
        "group relative inline-flex cursor-pointer items-center select-none",
        n.value ? "cursor-not-allowed opacity-50" : ""
      ])
    }, [
      V("input", {
        type: "radio",
        class: "peer sr-only",
        value: y.label,
        checked: o.value,
        disabled: n.value,
        onChange: k
      }, null, 40, Tu),
      V("div", {
        class: g([
          "relative flex items-center justify-center rounded-full border transition-all duration-200",
          s.value,
          o.value ? "border-blue-500 bg-blue-500" : "border-gray-300 bg-white group-hover:border-blue-500 dark:border-gray-600 dark:bg-gray-800"
        ])
      }, [
        V("div", {
          class: g([
            "rounded-full bg-white transition-transform duration-200",
            i.value,
            o.value ? "scale-100" : "scale-0"
          ])
        }, null, 2)
      ], 2),
      y.$slots.default || y.label ? (h(), x("span", {
        key: 0,
        class: g(["ml-2 text-gray-700 dark:text-gray-300", p.value])
      }, [
        G(y.$slots, "default", {}, () => [
          ce(U(y.label), 1)
        ])
      ], 2)) : _("", !0)
    ], 2));
  }
}), Eu = /* @__PURE__ */ J({
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
    return $e("radio-group", {
      modelValue: xe(e, "modelValue"),
      disabled: xe(e, "disabled"),
      size: xe(e, "size"),
      changeEvent: r
    }), (o, n) => (h(), x("div", {
      class: g([
        "flex",
        o.direction === "vertical" ? "flex-col gap-2" : "flex-row gap-4"
      ]),
      role: "radiogroup",
      "aria-label": "radio-group"
    }, [
      G(o.$slots, "default")
    ], 2));
  }
}), Lu = R({
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
}), Au = { class: "overflow-x-auto" }, Ou = { class: "text-sm" }, Pu = /* @__PURE__ */ J({
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
    const a = l, e = m(() => {
      const { root: r, table: o, thead: n, th: u, tbody: s, tr: i, td: p, empty: k } = Lu({
        stripe: a.stripe,
        border: a.border,
        dense: a.dense
      });
      return {
        root: r(),
        table: o(),
        thead: n(),
        th: u(),
        tbody: s(),
        tr: i(),
        td: p(),
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
    return (r, o) => {
      var n;
      return h(), x("div", {
        class: g(e.value.root)
      }, [
        V("div", Au, [
          V("table", {
            class: g(e.value.table)
          }, [
            V("thead", {
              class: g(e.value.thead)
            }, [
              V("tr", null, [
                (h(!0), x(ae, null, ne(r.columns, (u) => (h(), x("th", {
                  key: u.key,
                  class: g([e.value.th, t(u.align)]),
                  style: ue({
                    width: u.width ? typeof u.width == "number" ? `${u.width}px` : u.width : void 0
                  })
                }, U(u.title), 7))), 128))
              ])
            ], 2),
            V("tbody", {
              class: g(e.value.tbody)
            }, [
              (h(!0), x(ae, null, ne(r.data, (u, s) => (h(), x("tr", {
                key: s,
                class: g(e.value.tr)
              }, [
                (h(!0), x(ae, null, ne(r.columns, (i) => (h(), x("td", {
                  key: i.key,
                  class: g([e.value.td, t(i.align)])
                }, [
                  G(r.$slots, i.key, {
                    row: u,
                    index: s
                  }, () => [
                    ce(U(u[i.key]), 1)
                  ])
                ], 2))), 128))
              ], 2))), 128))
            ], 2)
          ], 2)
        ]),
        (n = r.data) != null && n.length ? _("", !0) : (h(), x("div", {
          key: 0,
          class: g(e.value.empty)
        }, [
          G(r.$slots, "empty", {}, () => [
            V("span", Ou, U(r.emptyText), 1)
          ])
        ], 2))
      ], 2);
    };
  }
}), ft = [
  sa,
  ya,
  za,
  $a,
  Ea,
  Ka,
  Ja,
  ur,
  yr,
  Br,
  Tr,
  Wr,
  Nr,
  Jr,
  to,
  ro,
  io,
  Po,
  po,
  go,
  yo,
  qo,
  kt,
  al,
  Ln,
  Yn,
  os,
  gs,
  bs,
  vs,
  Vs,
  $s,
  As,
  ei,
  di,
  ol,
  xi,
  Ii,
  Di,
  Xi,
  dd,
  ud,
  md,
  $d,
  Id,
  Dd,
  Od,
  Xd,
  lu,
  du,
  bu,
  vu,
  il,
  Su,
  Mu,
  Ru,
  Eu,
  Pu
], Wu = {
  install: (l) => {
    var a;
    for (const e in ft)
      l.component(((a = ft[e]) == null ? void 0 : a.name) || e, ft[e]);
  }
};
export {
  dd as Accordion,
  ud as AccordionItem,
  Wr as Alert,
  za as Avatar,
  $a as Badge,
  ol as Breadcrumb,
  xi as BreadcrumbItem,
  Jr as Button,
  kt as Calendar,
  to as Card,
  du as Carousel,
  po as Checkbox,
  go as CheckboxGroup,
  Tr as Chip,
  Ln as DatePicker,
  Yn as DateTimePicker,
  ro as Divider,
  Ka as Drawer,
  $d as Dropdown,
  Dd as DropdownDivider,
  Id as DropdownItem,
  Xd as Image,
  yo as Input,
  sa as InputOtp,
  md as InputTag,
  Nr as Kbd,
  lu as Link,
  ya as Modal,
  ei as Paginator,
  As as Panel,
  yr as Popover,
  di as Progress,
  Ru as Radio,
  Eu as RadioGroup,
  Xi as RangeCalendar,
  qo as Rate,
  Ja as Segmented,
  Po as Select,
  gs as Skeleton,
  vs as SkeletonAvatar,
  bs as SkeletonText,
  ur as Slider,
  Ii as Splitter,
  Di as SplitterPanel,
  Mu as StepItem,
  Su as Steps,
  Od as Swap,
  Ea as Switch,
  $s as TabItem,
  Pu as Table,
  Vs as Tabs,
  io as Textarea,
  al as TimePicker,
  os as TimeSelect,
  bu as Timeline,
  vu as TimelineItem,
  Fu as Toast,
  il as ToastContainer,
  Br as Tooltip,
  Wu as Versakit
};
