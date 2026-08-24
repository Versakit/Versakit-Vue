import { ref as W, nextTick as he, defineComponent as Q, computed as v, createElementBlock as x, openBlock as m, normalizeClass as p, Fragment as oe, renderList as de, unref as C, withDirectives as Ye, vModelText as Tt, watch as le, onUnmounted as Fe, useSlots as Xe, onMounted as we, createBlock as De, Teleport as ht, createVNode as Te, Transition as dt, withCtx as Ue, createCommentVNode as _, createElementVNode as $, renderSlot as G, toDisplayString as Y, onBeforeUnmount as Le, normalizeStyle as se, createTextVNode as ve, resolveDynamicComponent as ut, withModifiers as Me, inject as Re, provide as Ee, toRef as Ve, vShow as zt, withKeys as Ie, reactive as gl, vModelDynamic as vl, createStaticVNode as bl, mergeProps as Kt, TransitionGroup as ml, render as yl } from "vue";
const te = (l, a) => {
  if (l.install = (e) => {
    for (const t of [l, ...Object.values(a ?? {})])
      e.component(t.name, t);
  }, a)
    for (const [e, t] of Object.entries(a))
      l[e] = t;
  return l;
};
function hl(l = 4) {
  const a = W(Array(l).fill("")), e = W([]);
  return {
    values: a,
    setRef: (n, f) => {
      n && (e.value[f] = n);
    },
    onInput: (n, f) => {
      const c = n.target.value.replace(/\D/g, "");
      a.value[f] = c.slice(0, 1), c && f < l - 1 && he(() => {
        var g;
        (g = e.value[f + 1]) == null || g.focus();
      });
    },
    onKeydown: (n, f) => {
      n.key === "Backspace" && !a.value[f] && f > 0 && he(() => {
        var s;
        (s = e.value[f - 1]) == null || s.focus();
      });
    }
  };
}
var jt = (l) => typeof l == "boolean" ? `${l}` : l === 0 ? "0" : l, Be = (l) => !l || typeof l != "object" || Object.keys(l).length === 0, wl = (l, a) => JSON.stringify(l) === JSON.stringify(a);
function Yt(l, a) {
  l.forEach(function(e) {
    Array.isArray(e) ? Yt(e, a) : a.push(e);
  });
}
function Ut(l) {
  let a = [];
  return Yt(l, a), a;
}
var Xt = (...l) => Ut(l).filter(Boolean), qt = (l, a) => {
  let e = {}, t = Object.keys(l), r = Object.keys(a);
  for (let o of t) if (r.includes(o)) {
    let n = l[o], f = a[o];
    Array.isArray(n) || Array.isArray(f) ? e[o] = Xt(f, n) : typeof n == "object" && typeof f == "object" ? e[o] = qt(n, f) : e[o] = f + " " + n;
  } else e[o] = l[o];
  for (let o of r) t.includes(o) || (e[o] = a[o]);
  return e;
}, Wt = (l) => !l || typeof l != "string" ? l : l.replace(/\s+/g, " ").trim();
const Rt = "-", xl = (l) => {
  const a = Cl(l), {
    conflictingClassGroups: e,
    conflictingClassGroupModifiers: t
  } = l;
  return {
    getClassGroupId: (n) => {
      const f = n.split(Rt);
      return f[0] === "" && f.length !== 1 && f.shift(), Zt(f, a) || kl(n);
    },
    getConflictingClassGroupIds: (n, f) => {
      const s = e[n] || [];
      return f && t[n] ? [...s, ...t[n]] : s;
    }
  };
}, Zt = (l, a) => {
  var n;
  if (l.length === 0)
    return a.classGroupId;
  const e = l[0], t = a.nextPart.get(e), r = t ? Zt(l.slice(1), t) : void 0;
  if (r)
    return r;
  if (a.validators.length === 0)
    return;
  const o = l.join(Rt);
  return (n = a.validators.find(({
    validator: f
  }) => f(o))) == null ? void 0 : n.classGroupId;
}, Ft = /^\[(.+)\]$/, kl = (l) => {
  if (Ft.test(l)) {
    const a = Ft.exec(l)[1], e = a == null ? void 0 : a.substring(0, a.indexOf(":"));
    if (e)
      return "arbitrary.." + e;
  }
}, Cl = (l) => {
  const {
    theme: a,
    classGroups: e
  } = l, t = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const r in e)
    $t(e[r], t, r, a);
  return t;
}, $t = (l, a, e, t) => {
  l.forEach((r) => {
    if (typeof r == "string") {
      const o = r === "" ? a : _t(a, r);
      o.classGroupId = e;
      return;
    }
    if (typeof r == "function") {
      if (Sl(r)) {
        $t(r(t), a, e, t);
        return;
      }
      a.validators.push({
        validator: r,
        classGroupId: e
      });
      return;
    }
    Object.entries(r).forEach(([o, n]) => {
      $t(n, _t(a, o), e, t);
    });
  });
}, _t = (l, a) => {
  let e = l;
  return a.split(Rt).forEach((t) => {
    e.nextPart.has(t) || e.nextPart.set(t, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), e = e.nextPart.get(t);
  }), e;
}, Sl = (l) => l.isThemeGetter, zl = (l) => {
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
}, Bt = "!", Vt = ":", $l = Vt.length, Bl = (l) => {
  const {
    prefix: a,
    experimentalParseClassName: e
  } = l;
  let t = (r) => {
    const o = [];
    let n = 0, f = 0, s = 0, c;
    for (let b = 0; b < r.length; b++) {
      let y = r[b];
      if (n === 0 && f === 0) {
        if (y === Vt) {
          o.push(r.slice(s, b)), s = b + $l;
          continue;
        }
        if (y === "/") {
          c = b;
          continue;
        }
      }
      y === "[" ? n++ : y === "]" ? n-- : y === "(" ? f++ : y === ")" && f--;
    }
    const g = o.length === 0 ? r : r.substring(s), z = Vl(g), k = z !== g, d = c && c > s ? c - s : void 0;
    return {
      modifiers: o,
      hasImportantModifier: k,
      baseClassName: z,
      maybePostfixModifierPosition: d
    };
  };
  if (a) {
    const r = a + Vt, o = t;
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
}, Vl = (l) => l.endsWith(Bt) ? l.substring(0, l.length - 1) : l.startsWith(Bt) ? l.substring(1) : l, Il = (l) => {
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
}, Ml = (l) => ({
  cache: zl(l.cacheSize),
  parseClassName: Bl(l),
  sortModifiers: Il(l),
  ...xl(l)
}), Dl = /\s+/, Tl = (l, a) => {
  const {
    parseClassName: e,
    getClassGroupId: t,
    getConflictingClassGroupIds: r,
    sortModifiers: o
  } = a, n = [], f = l.trim().split(Dl);
  let s = "";
  for (let c = f.length - 1; c >= 0; c -= 1) {
    const g = f[c], {
      isExternal: z,
      modifiers: k,
      hasImportantModifier: d,
      baseClassName: b,
      maybePostfixModifierPosition: y
    } = e(g);
    if (z) {
      s = g + (s.length > 0 ? " " + s : s);
      continue;
    }
    let i = !!y, u = t(i ? b.substring(0, y) : b);
    if (!u) {
      if (!i) {
        s = g + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (u = t(b), !u) {
        s = g + (s.length > 0 ? " " + s : s);
        continue;
      }
      i = !1;
    }
    const w = o(k).join(":"), h = d ? w + Bt : w, S = h + u;
    if (n.includes(S))
      continue;
    n.push(S);
    const M = r(u, i);
    for (let I = 0; I < M.length; ++I) {
      const O = M[I];
      n.push(h + O);
    }
    s = g + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function Rl() {
  let l = 0, a, e, t = "";
  for (; l < arguments.length; )
    (a = arguments[l++]) && (e = Jt(a)) && (t && (t += " "), t += e);
  return t;
}
const Jt = (l) => {
  if (typeof l == "string")
    return l;
  let a, e = "";
  for (let t = 0; t < l.length; t++)
    l[t] && (a = Jt(l[t])) && (e && (e += " "), e += a);
  return e;
};
function It(l, ...a) {
  let e, t, r, o = n;
  function n(s) {
    const c = a.reduce((g, z) => z(g), l());
    return e = Ml(c), t = e.cache.get, r = e.cache.set, o = f, f(s);
  }
  function f(s) {
    const c = t(s);
    if (c)
      return c;
    const g = Tl(s, e);
    return r(s, g), g;
  }
  return function() {
    return o(Rl.apply(null, arguments));
  };
}
const Se = (l) => {
  const a = (e) => e[l] || [];
  return a.isThemeGetter = !0, a;
}, Qt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, el = /^\((?:(\w[\w-]*):)?(.+)\)$/i, El = /^\d+\/\d+$/, Ll = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Al = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ol = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Pl = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, jl = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ze = (l) => El.test(l), ue = (l) => !!l && !Number.isNaN(Number(l)), He = (l) => !!l && Number.isInteger(Number(l)), Ht = (l) => l.endsWith("%") && ue(l.slice(0, -1)), We = (l) => Ll.test(l), Wl = () => !0, Fl = (l) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Al.test(l) && !Ol.test(l)
), Et = () => !1, _l = (l) => Pl.test(l), Hl = (l) => jl.test(l), Nl = (l) => !Z(l) && !J(l), Gl = (l) => Je(l, al, Et), Z = (l) => Qt.test(l), Ne = (l) => Je(l, rl, Fl), wt = (l) => Je(l, la, ue), Kl = (l) => Je(l, tl, Et), Yl = (l) => Je(l, ll, Hl), Ul = (l) => Je(l, Et, _l), J = (l) => el.test(l), gt = (l) => Qe(l, rl), Xl = (l) => Qe(l, aa), ql = (l) => Qe(l, tl), Zl = (l) => Qe(l, al), Jl = (l) => Qe(l, ll), Ql = (l) => Qe(l, ra, !0), Je = (l, a, e) => {
  const t = Qt.exec(l);
  return t ? t[1] ? a(t[1]) : e(t[2]) : !1;
}, Qe = (l, a, e = !1) => {
  const t = el.exec(l);
  return t ? t[1] ? a(t[1]) : e : !1;
}, tl = (l) => l === "position", ea = /* @__PURE__ */ new Set(["image", "url"]), ll = (l) => ea.has(l), ta = /* @__PURE__ */ new Set(["length", "size", "percentage"]), al = (l) => ta.has(l), rl = (l) => l === "length", la = (l) => l === "number", aa = (l) => l === "family-name", ra = (l) => l === "shadow", Mt = () => {
  const l = Se("color"), a = Se("font"), e = Se("text"), t = Se("font-weight"), r = Se("tracking"), o = Se("leading"), n = Se("breakpoint"), f = Se("container"), s = Se("spacing"), c = Se("radius"), g = Se("shadow"), z = Se("inset-shadow"), k = Se("drop-shadow"), d = Se("blur"), b = Se("perspective"), y = Se("aspect"), i = Se("ease"), u = Se("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], h = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], S = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", "contain", "none"], I = () => [J, Z, s], O = () => [Ze, "full", "auto", ...I()], V = () => [He, "none", "subgrid", J, Z], T = () => ["auto", {
    span: ["full", He, J, Z]
  }, J, Z], E = () => [He, "auto", J, Z], L = () => ["auto", "min", "max", "fr", J, Z], P = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], F = () => ["start", "end", "center", "stretch"], B = () => ["auto", ...I()], A = () => [Ze, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...I()], D = () => [l, J, Z], N = () => [Ht, Ne], j = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    J,
    Z
  ], K = () => ["", ue, gt, Ne], U = () => ["solid", "dashed", "dotted", "double"], ne = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], H = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    d,
    J,
    Z
  ], q = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", J, Z], ae = () => ["none", ue, J, Z], re = () => ["none", ue, J, Z], fe = () => [ue, J, Z], ce = () => [Ze, "full", ...I()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [We],
      breakpoint: [We],
      color: [Wl],
      container: [We],
      "drop-shadow": [We],
      ease: ["in", "out", "in-out"],
      font: [Nl],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [We],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [We],
      shadow: [We],
      spacing: ["px", ue],
      text: [We],
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
        aspect: ["auto", "square", Ze, Z, J, y]
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
        columns: [ue, Z, J, f]
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
        object: [...h(), Z, J]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: S()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": S()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": S()
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
        z: [He, "auto", J, Z]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ze, "full", "auto", f, ...I()]
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
        flex: [ue, Ze, "auto", "initial", "none", Z]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ue, J, Z]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ue, J, Z]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [He, "first", "last", "none", J, Z]
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
        col: T()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": E()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": E()
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
        row: T()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": E()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": E()
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
        m: B()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: B()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: B()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: B()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: B()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: B()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: B()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: B()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: B()
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
        size: A()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [f, "screen", ...A()]
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
          ...A()
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
            screen: [n]
          },
          ...A()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...A()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...A()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...A()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", e, gt, Ne]
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
        font: [t, J, wt]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ht, Z]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Xl, Z, a]
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
        tracking: [r, J, Z]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ue, "none", J, wt]
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
        "list-image": ["none", J, Z]
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
        list: ["disc", "decimal", "none", J, Z]
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
        decoration: [...U(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ue, "from-font", "auto", J, Ne]
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
        "underline-offset": [ue, "auto", J, Z]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", J, Z]
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
        content: ["none", J, Z]
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
        bg: [...h(), ql, Kl]
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
        bg: ["auto", "cover", "contain", Zl, Gl]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, He, J, Z],
          radial: ["", J, Z],
          conic: [He, J, Z]
        }, Jl, Yl]
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
        border: [...U(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...U(), "hidden", "none"]
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
        outline: [...U(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ue, J, Z]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ue, gt, Ne]
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
          g,
          Ql,
          Ul
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
        "inset-shadow": ["none", J, Z, z]
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
        "ring-offset": [ue, Ne]
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
        opacity: [ue, J, Z]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ne(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ne()
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
          J,
          Z
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: H()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ue, J, Z]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ue, J, Z]
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
          k,
          J,
          Z
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ue, J, Z]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ue, J, Z]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ue, J, Z]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ue, J, Z]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ue, J, Z]
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
          J,
          Z
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": H()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ue, J, Z]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ue, J, Z]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ue, J, Z]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ue, J, Z]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ue, J, Z]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ue, J, Z]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ue, J, Z]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ue, J, Z]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", J, Z]
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
        duration: [ue, "initial", J, Z]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", i, J, Z]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ue, J, Z]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", u, J, Z]
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
        perspective: [b, J, Z]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": q()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ae()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ae()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ae()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ae()
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
        transform: [J, Z, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: q()
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
        translate: ce()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ce()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ce()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ce()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", J, Z]
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
        "will-change": ["auto", "scroll", "contents", "transform", J, Z]
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
        stroke: [ue, gt, Ne, wt]
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
}, oa = (l, {
  cacheSize: a,
  prefix: e,
  experimentalParseClassName: t,
  extend: r = {},
  override: o = {}
}) => (it(l, "cacheSize", a), it(l, "prefix", e), it(l, "experimentalParseClassName", t), vt(l.theme, o.theme), vt(l.classGroups, o.classGroups), vt(l.conflictingClassGroups, o.conflictingClassGroups), vt(l.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), it(l, "orderSensitiveModifiers", o.orderSensitiveModifiers), bt(l.theme, r.theme), bt(l.classGroups, r.classGroups), bt(l.conflictingClassGroups, r.conflictingClassGroups), bt(l.conflictingClassGroupModifiers, r.conflictingClassGroupModifiers), ol(l, r, "orderSensitiveModifiers"), l), it = (l, a, e) => {
  e !== void 0 && (l[a] = e);
}, vt = (l, a) => {
  if (a)
    for (const e in a)
      it(l, e, a[e]);
}, bt = (l, a) => {
  if (a)
    for (const e in a)
      ol(l, a, e);
}, ol = (l, a, e) => {
  const t = a[e];
  t !== void 0 && (l[e] = l[e] ? l[e].concat(t) : t);
}, sa = (l, ...a) => typeof l == "function" ? It(Mt, l, ...a) : It(() => oa(Mt(), l), ...a), na = /* @__PURE__ */ It(Mt);
var ia = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, sl = (l) => l || void 0, ct = (...l) => sl(Ut(l).filter(Boolean).join(" ")), xt = null, Pe = {}, Dt = !1, rt = (...l) => (a) => a.twMerge ? ((!xt || Dt) && (Dt = !1, xt = Be(Pe) ? na : sa({ ...Pe, extend: { theme: Pe.theme, classGroups: Pe.classGroups, conflictingClassGroupModifiers: Pe.conflictingClassGroupModifiers, conflictingClassGroups: Pe.conflictingClassGroups, ...Pe.extend } })), sl(xt(ct(l)))) : ct(l), Nt = (l, a) => {
  for (let e in a) l.hasOwnProperty(e) ? l[e] = ct(l[e], a[e]) : l[e] = a[e];
  return l;
}, R = (l, a) => {
  let { extend: e = null, slots: t = {}, variants: r = {}, compoundVariants: o = [], compoundSlots: n = [], defaultVariants: f = {} } = l, s = { ...ia, ...a }, c = e != null && e.base ? ct(e.base, l == null ? void 0 : l.base) : l == null ? void 0 : l.base, g = e != null && e.variants && !Be(e.variants) ? qt(r, e.variants) : r, z = e != null && e.defaultVariants && !Be(e.defaultVariants) ? { ...e.defaultVariants, ...f } : f;
  !Be(s.twMergeConfig) && !wl(s.twMergeConfig, Pe) && (Dt = !0, Pe = s.twMergeConfig);
  let k = Be(e == null ? void 0 : e.slots), d = Be(t) ? {} : { base: ct(l == null ? void 0 : l.base, k && (e == null ? void 0 : e.base)), ...t }, b = k ? d : Nt({ ...e == null ? void 0 : e.slots }, Be(d) ? { base: l == null ? void 0 : l.base } : d), y = Be(e == null ? void 0 : e.compoundVariants) ? o : Xt(e == null ? void 0 : e.compoundVariants, o), i = (w) => {
    if (Be(g) && Be(t) && k) return rt(c, w == null ? void 0 : w.class, w == null ? void 0 : w.className)(s);
    if (y && !Array.isArray(y)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof y}`);
    if (n && !Array.isArray(n)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof n}`);
    let h = (P, F, B = [], A) => {
      let D = B;
      if (typeof F == "string") D = D.concat(Wt(F).split(" ").map((N) => `${P}:${N}`));
      else if (Array.isArray(F)) D = D.concat(F.reduce((N, j) => N.concat(`${P}:${j}`), []));
      else if (typeof F == "object" && typeof A == "string") {
        for (let N in F) if (F.hasOwnProperty(N) && N === A) {
          let j = F[N];
          if (j && typeof j == "string") {
            let K = Wt(j);
            D[A] ? D[A] = D[A].concat(K.split(" ").map((U) => `${P}:${U}`)) : D[A] = K.split(" ").map((U) => `${P}:${U}`);
          } else Array.isArray(j) && j.length > 0 && (D[A] = j.reduce((K, U) => K.concat(`${P}:${U}`), []));
        }
      }
      return D;
    }, S = (P, F = g, B = null, A = null) => {
      var D;
      let N = F[P];
      if (!N || Be(N)) return null;
      let j = (D = A == null ? void 0 : A[P]) != null ? D : w == null ? void 0 : w[P];
      if (j === null) return null;
      let K = jt(j), U = Array.isArray(s.responsiveVariants) && s.responsiveVariants.length > 0 || s.responsiveVariants === !0, ne = z == null ? void 0 : z[P], H = [];
      if (typeof K == "object" && U) for (let [re, fe] of Object.entries(K)) {
        let ce = N[fe];
        if (re === "initial") {
          ne = fe;
          continue;
        }
        Array.isArray(s.responsiveVariants) && !s.responsiveVariants.includes(re) || (H = h(re, ce, H, B));
      }
      let q = K != null && typeof K != "object" ? K : jt(ne), ae = N[q || "false"];
      return typeof H == "object" && typeof B == "string" && H[B] ? Nt(H, ae) : H.length > 0 ? (H.push(ae), B === "base" ? H.join(" ") : H) : ae;
    }, M = () => g ? Object.keys(g).map((P) => S(P, g)) : null, I = (P, F) => {
      if (!g || typeof g != "object") return null;
      let B = new Array();
      for (let A in g) {
        let D = S(A, g, P, F), N = P === "base" && typeof D == "string" ? D : D && D[P];
        N && (B[B.length] = N);
      }
      return B;
    }, O = {};
    for (let P in w) w[P] !== void 0 && (O[P] = w[P]);
    let V = (P, F) => {
      var B;
      let A = typeof (w == null ? void 0 : w[P]) == "object" ? { [P]: (B = w[P]) == null ? void 0 : B.initial } : {};
      return { ...z, ...O, ...A, ...F };
    }, T = (P = [], F) => {
      let B = [];
      for (let { class: A, className: D, ...N } of P) {
        let j = !0;
        for (let [K, U] of Object.entries(N)) {
          let ne = V(K, F)[K];
          if (Array.isArray(U)) {
            if (!U.includes(ne)) {
              j = !1;
              break;
            }
          } else {
            let H = (q) => q == null || q === !1;
            if (H(U) && H(ne)) continue;
            if (ne !== U) {
              j = !1;
              break;
            }
          }
        }
        j && (A && B.push(A), D && B.push(D));
      }
      return B;
    }, E = (P) => {
      let F = T(y, P);
      if (!Array.isArray(F)) return F;
      let B = {};
      for (let A of F) if (typeof A == "string" && (B.base = rt(B.base, A)(s)), typeof A == "object") for (let [D, N] of Object.entries(A)) B[D] = rt(B[D], N)(s);
      return B;
    }, L = (P) => {
      if (n.length < 1) return null;
      let F = {};
      for (let { slots: B = [], class: A, className: D, ...N } of n) {
        if (!Be(N)) {
          let j = !0;
          for (let K of Object.keys(N)) {
            let U = V(K, P)[K];
            if (U === void 0 || (Array.isArray(N[K]) ? !N[K].includes(U) : N[K] !== U)) {
              j = !1;
              break;
            }
          }
          if (!j) continue;
        }
        for (let j of B) F[j] = F[j] || [], F[j].push([A, D]);
      }
      return F;
    };
    if (!Be(t) || !k) {
      let P = {};
      if (typeof b == "object" && !Be(b)) for (let F of Object.keys(b)) P[F] = (B) => {
        var A, D;
        return rt(b[F], I(F, B), ((A = E(B)) != null ? A : [])[F], ((D = L(B)) != null ? D : [])[F], B == null ? void 0 : B.class, B == null ? void 0 : B.className)(s);
      };
      return P;
    }
    return rt(c, M(), T(y), w == null ? void 0 : w.class, w == null ? void 0 : w.className)(s);
  }, u = () => {
    if (!(!g || typeof g != "object")) return Object.keys(g);
  };
  return i.variantKeys = u(), i.extend = e, i.base = c, i.slots = b, i.variants = g, i.defaultVariants = z, i.compoundSlots = n, i.compoundVariants = y, i;
};
const ua = R({
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
}), da = ["onUpdate:modelValue", "onInput", "onKeydown"], ca = /* @__PURE__ */ Q({
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
    const a = l, { values: e, setRef: t, onInput: r, onKeydown: o } = hl(a.length ?? 4), n = v(() => {
      var s, c;
      return a.unstyled ? ((s = a.pt) == null ? void 0 : s.container) || "flex gap-2" : (c = a.pt) != null && c.container ? `flex gap-2 ${a.pt.container}` : "flex gap-2";
    }), f = v(() => {
      var s, c;
      return a.unstyled ? ((s = a.pt) == null ? void 0 : s.input) || "" : ua({
        state: a.state,
        size: a.size,
        class: (c = a.pt) == null ? void 0 : c.input
      });
    });
    return (s, c) => (m(), x("div", {
      class: p(n.value)
    }, [
      (m(!0), x(oe, null, de(C(e).length, (g, z) => Ye((m(), x("input", {
        key: z,
        "onUpdate:modelValue": (k) => C(e)[z] = k,
        ref_for: !0,
        ref: (k) => C(t)(k, z),
        class: p(f.value),
        maxlength: "1",
        onInput: (k) => C(r)(k, z),
        onKeydown: (k) => C(o)(k, z),
        type: "text",
        inputmode: "numeric",
        autocomplete: "one-time-code"
      }, null, 42, da)), [
        [Tt, C(e)[z]]
      ])), 128))
    ], 2));
  }
}), fa = te(ca);
function pa(l) {
  const a = W(!1), e = (l == null ? void 0 : l.closeOnEsc) ?? !0, t = (l == null ? void 0 : l.closeOnOverlayClick) ?? !0, r = () => {
    a.value = !0;
  }, o = () => {
    var g;
    a.value = !1, (g = l == null ? void 0 : l.onClose) == null || g.call(l);
  }, n = W(null), f = W(null), s = (g) => {
    g.key === "Escape" && e && o();
  };
  return le(a, (g) => {
    g ? (document.addEventListener("keydown", s), document.body.style.overflow = "hidden") : (document.removeEventListener("keydown", s), document.body.style.overflow = "");
  }), Fe(() => {
    document.removeEventListener("keydown", s), document.body.style.overflow = "";
  }), {
    isOpen: a,
    open: r,
    close: o,
    modalRef: n,
    overlayRef: f,
    onOverlayClick: (g) => {
      g.target === f.value && t && o();
    }
  };
}
const ga = R({
  base: "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center"
}), va = R({
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
}), ba = R({
  base: "px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between"
}), ma = R({
  base: "text-lg font-medium text-gray-900 dark:text-white"
}), ya = R({
  base: "p-6 flex-1 overflow-y-auto"
}), ha = R({
  base: "px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-2"
}), wa = R({
  base: "absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
}), xa = /* @__PURE__ */ Q({
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
    const e = l, t = a, r = Xe(), { isOpen: o, open: n, close: f, modalRef: s, overlayRef: c, onOverlayClick: g } = pa({
      onClose: () => {
        t("close"), t("update:modelValue", !1);
      },
      closeOnEsc: e.closeOnEsc,
      closeOnOverlayClick: e.closeOnOverlayClick
    });
    we(async () => {
      await he(), e.modelValue && n();
    }), le(
      () => e.modelValue,
      (M) => {
        M && !o.value ? n() : !M && o.value && f();
      }
    ), le(o, (M) => {
      M !== e.modelValue && t("update:modelValue", M);
    });
    const z = () => {
      f();
    }, k = v(() => !!e.title || !!r.header), d = v(() => !!r.footer), b = v(() => {
      var M, I;
      return e.unstyled ? [(M = e.pt) == null ? void 0 : M.overlay, e.class].filter(Boolean) : [ga({ class: (I = e.pt) == null ? void 0 : I.overlay }), e.class];
    }), y = v(() => {
      var M, I;
      return e.unstyled ? [(M = e.pt) == null ? void 0 : M.content, e.contentClass].filter(Boolean) : [
        va({
          size: e.size,
          class: (I = e.pt) == null ? void 0 : I.content
        }),
        e.contentClass
      ];
    }), i = v(() => {
      var M, I;
      return e.unstyled ? [(M = e.pt) == null ? void 0 : M.header, e.headerClass].filter(Boolean) : [ba({ class: (I = e.pt) == null ? void 0 : I.header }), e.headerClass];
    }), u = v(() => {
      var M, I;
      return e.unstyled ? ((M = e.pt) == null ? void 0 : M.title) || "" : ma({ class: (I = e.pt) == null ? void 0 : I.title });
    }), w = v(() => {
      var M, I;
      return e.unstyled ? [(M = e.pt) == null ? void 0 : M.body, e.bodyClass].filter(Boolean) : [ya({ class: (I = e.pt) == null ? void 0 : I.body }), e.bodyClass];
    }), h = v(() => {
      var M, I;
      return e.unstyled ? [(M = e.pt) == null ? void 0 : M.footer, e.footerClass].filter(Boolean) : [ha({ class: (I = e.pt) == null ? void 0 : I.footer }), e.footerClass];
    }), S = v(() => {
      var M, I;
      return e.unstyled ? ((M = e.pt) == null ? void 0 : M.closeButton) || "" : wa({ class: (I = e.pt) == null ? void 0 : I.closeButton });
    });
    return (M, I) => (m(), De(ht, { to: "body" }, [
      Te(dt, {
        name: "vk-modal",
        appear: ""
      }, {
        default: Ue(() => [
          C(o) ? (m(), x("div", {
            key: 0,
            class: p(b.value),
            ref_key: "overlayRef",
            ref: c,
            onClick: I[0] || (I[0] = //@ts-ignore
            (...O) => C(g) && C(g)(...O))
          }, [
            $("div", {
              class: p([y.value, "vk-modal-dialog"]),
              ref_key: "modalRef",
              ref: s,
              role: "dialog",
              "aria-modal": "true",
              tabindex: "-1"
            }, [
              k.value ? (m(), x("div", {
                key: 0,
                class: p(i.value)
              }, [
                G(M.$slots, "header", {}, () => [
                  $("h3", {
                    class: p(u.value)
                  }, Y(e.title), 3)
                ], !0),
                M.hideCloseButton ? _("", !0) : (m(), x("button", {
                  key: 0,
                  class: p(S.value),
                  onClick: z,
                  "aria-label": "关闭"
                }, [
                  G(M.$slots, "close-icon", {}, () => [
                    I[1] || (I[1] = $("svg", {
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
                      $("line", {
                        x1: "18",
                        y1: "6",
                        x2: "6",
                        y2: "18"
                      }),
                      $("line", {
                        x1: "6",
                        y1: "6",
                        x2: "18",
                        y2: "18"
                      })
                    ], -1))
                  ], !0)
                ], 2))
              ], 2)) : _("", !0),
              $("div", {
                class: p(w.value)
              }, [
                G(M.$slots, "default", {}, void 0, !0)
              ], 2),
              d.value ? (m(), x("div", {
                key: 1,
                class: p(h.value)
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
}), et = (l, a) => {
  const e = l.__vccOpts || l;
  for (const [t, r] of a)
    e[t] = r;
  return e;
}, ka = /* @__PURE__ */ et(xa, [["__scopeId", "data-v-77a6943b"]]), Ca = te(ka);
function Sa() {
  const l = W(!1), a = W(!1);
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
const za = R({
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
}), $a = ["src", "alt"], Ba = ["src", "alt"], Va = /* @__PURE__ */ Q({
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
    const a = l, { isError: e, onLoad: t, onError: r } = Sa(), o = v(() => {
      var k, d;
      return a.unstyled ? ((k = a.pt) == null ? void 0 : k.root) || "" : za({
        size: a.size,
        shape: a.shape,
        status: a.status,
        class: (d = a.pt) == null ? void 0 : d.root
      });
    }), n = v(() => {
      var k;
      return a.unstyled ? ((k = a.pt) == null ? void 0 : k.image) || "" : "w-full h-full object-cover";
    }), f = v(() => {
      var k;
      return a.unstyled ? ((k = a.pt) == null ? void 0 : k.fallback) || "" : "w-full h-full flex items-center justify-center";
    }), s = v(() => {
      var k;
      return a.unstyled ? ((k = a.pt) == null ? void 0 : k.initials) || "" : "w-full h-full flex items-center justify-center";
    }), c = v(() => {
      var k;
      return a.unstyled ? ((k = a.pt) == null ? void 0 : k.icon) || "" : "w-1/2 h-1/2";
    }), g = v(() => a.alt ? a.alt.split(" ").map((k) => k.charAt(0)).slice(0, 2).join("").toUpperCase() : ""), z = v(() => !a.src || e.value);
    return (k, d) => (m(), x("div", {
      class: p(o.value)
    }, [
      z.value ? k.fallback ? (m(), x("span", {
        key: 1,
        class: p(f.value)
      }, [
        $("img", {
          src: k.fallback,
          alt: k.alt,
          class: p(n.value)
        }, null, 10, Ba)
      ], 2)) : k.alt ? (m(), x("span", {
        key: 2,
        class: p(s.value)
      }, Y(g.value), 3)) : (m(), x("span", {
        key: 3,
        class: p(f.value)
      }, [
        (m(), x("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          class: p(c.value)
        }, d[2] || (d[2] = [
          $("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }, null, -1),
          $("circle", {
            cx: "12",
            cy: "7",
            r: "4"
          }, null, -1)
        ]), 2))
      ], 2)) : (m(), x("img", {
        key: 0,
        src: k.src,
        alt: k.alt,
        class: p(n.value),
        onLoad: d[0] || (d[0] = //@ts-ignore
        (...b) => C(t) && C(t)(...b)),
        onError: d[1] || (d[1] = //@ts-ignore
        (...b) => C(r) && C(r)(...b))
      }, null, 42, $a))
    ], 2));
  }
}), Ia = te(Va);
function Ma(l) {
  const a = v(() => l.dot ? l.show !== !1 : l.show !== !1 && l.content !== void 0 && l.content !== ""), e = v(() => {
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
const Da = R({
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
}), Ta = /* @__PURE__ */ Q({
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
    const a = l, { visible: e, positionClass: t } = Ma(a), r = v(() => {
      var f;
      return a.unstyled ? ((f = a.pt) == null ? void 0 : f.root) || "" : "relative inline-block";
    }), o = v(() => {
      var f, s;
      return a.unstyled ? ((f = a.pt) == null ? void 0 : f.badge) || "" : Da({
        color: a.color,
        size: a.size,
        dot: a.dot,
        class: [t.value, (s = a.pt) == null ? void 0 : s.badge]
      });
    }), n = v(() => a.dot ? "" : typeof a.content == "number" && a.max && a.content > a.max ? `${a.max}+` : a.content);
    return (f, s) => (m(), x("div", {
      class: p(r.value)
    }, [
      G(f.$slots, "default"),
      C(e) ? (m(), x("span", {
        key: 0,
        class: p(o.value),
        role: "status",
        "aria-live": "polite"
      }, Y(n.value), 3)) : _("", !0)
    ], 2));
  }
}), Ra = te(Ta);
function Ea(l) {
  const a = W(l.modelValue ?? !1), e = () => {
    var r;
    l.disabled || (a.value = !a.value, (r = l.onChange) == null || r.call(l, a.value));
  };
  return le(
    () => l.modelValue,
    (r) => {
      r !== void 0 && (a.value = r);
    }
  ), {
    checked: v(() => !!a.value),
    disabled: v(() => !!l.disabled),
    toggle: e,
    onKeyDown: (r) => {
      (r.key === "Enter" || r.key === " ") && (r.preventDefault(), e());
    }
  };
}
const La = R({
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
}), Aa = ["aria-checked", "disabled"], Oa = /* @__PURE__ */ Q({
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
    const e = l, t = a, { checked: r, toggle: o, onKeyDown: n } = Ea({
      modelValue: e.modelValue,
      disabled: e.disabled,
      onChange: (i) => t("update:modelValue", i)
    }), f = W(!1);
    le(r, (i) => {
      i && (f.value = !0, setTimeout(() => {
        f.value = !1;
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
    }, c = () => {
      if (!r.value)
        return "bg-gray-300 dark:bg-gray-600";
      const i = {
        blue: "bg-blue-600 dark:bg-blue-500",
        green: "bg-green-600 dark:bg-green-500",
        red: "bg-red-600 dark:bg-red-500",
        yellow: "bg-yellow-600 dark:bg-yellow-500",
        purple: "bg-purple-600 dark:bg-purple-500"
      };
      return i[e.color] || i.blue;
    }, g = () => {
      const i = {
        blue: "bg-blue-400/10",
        green: "bg-green-400/10",
        red: "bg-red-400/10",
        yellow: "bg-yellow-400/10",
        purple: "bg-purple-400/10"
      };
      return i[e.color] || i.blue;
    }, z = v(
      () => La({
        checked: r.value,
        disabled: e.disabled,
        size: e.size,
        color: e.color
      })
    ), k = v(() => {
      var i, u;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.root) || "" : z.value.root({ class: (u = e.pt) == null ? void 0 : u.root });
    }), d = v(() => {
      var i, u;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.track) || "" : c() + ((u = e.pt) != null && u.track ? ` ${e.pt.track}` : "");
    }), b = v(() => {
      var i, u;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.thumb) || "" : z.value.thumb({ class: (u = e.pt) == null ? void 0 : u.thumb });
    }), y = v(() => {
      var i, u;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.ripple) || "" : g() + ((u = e.pt) != null && u.ripple ? ` ${e.pt.ripple}` : "");
    });
    return (i, u) => (m(), x("button", {
      type: "button",
      role: "switch",
      "aria-checked": C(r),
      disabled: e.disabled,
      onClick: u[0] || (u[0] = //@ts-ignore
      (...w) => C(o) && C(o)(...w)),
      onKeydown: u[1] || (u[1] = //@ts-ignore
      (...w) => C(n) && C(n)(...w)),
      class: p(k.value)
    }, [
      $("span", {
        class: p([
          d.value,
          "absolute inset-0 rounded-full transition-colors duration-300 ease-in-out"
        ])
      }, null, 2),
      $("span", {
        class: p([
          b.value,
          "transform transition-all duration-300 ease-in-out",
          s()
        ])
      }, [
        C(r) ? (m(), x("span", {
          key: 0,
          class: p(["absolute inset-0 bg-white rounded-full transition-all duration-300", {
            "opacity-100 scale-100": C(r),
            "opacity-0 scale-0": !C(r)
          }])
        }, null, 2)) : _("", !0)
      ], 2),
      $("span", {
        class: p(["absolute inset-0 transition-opacity duration-300", { "opacity-0": !C(r), "opacity-100": C(r) }])
      }, [
        $("span", {
          class: p(["absolute inset-0 rounded-full transform transition-transform duration-500", [
            y.value,
            { "scale-100": f.value, "scale-0": !f.value }
          ]])
        }, null, 2)
      ], 2)
    ], 42, Aa));
  }
}), Pa = /* @__PURE__ */ et(Oa, [["__scopeId", "data-v-dec8aa04"]]), ja = te(Pa);
function Wa(l) {
  const a = W(!1), e = (l == null ? void 0 : l.closeOnEsc) ?? !0, t = (l == null ? void 0 : l.closeOnOverlayClick) ?? !0, r = () => {
    var g;
    a.value = !0, (g = l == null ? void 0 : l.onOpen) == null || g.call(l);
  }, o = () => {
    var g;
    a.value = !1, (g = l == null ? void 0 : l.onClose) == null || g.call(l);
  }, n = W(null), f = W(null), s = (g) => {
    g.key === "Escape" && e && o();
  }, c = (g) => {
    g.target === f.value && t && o();
  };
  return le(a, (g) => {
    g ? document.addEventListener("keydown", s) : document.removeEventListener("keydown", s);
  }), Fe(() => {
    document.removeEventListener("keydown", s);
  }), {
    isOpen: a,
    open: r,
    close: o,
    overlayRef: f,
    drawerRef: n,
    onOverlayClick: c
  };
}
const Fa = R({
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
}), _a = R({
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
}), Ha = R({
  base: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700"
}), Na = R({
  base: "text-lg font-medium text-gray-900 dark:text-white"
}), Ga = R({
  base: "p-1 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
}), Ka = R({
  base: "flex-1 p-4 overflow-y-auto"
}), Ya = R({
  base: "flex justify-end gap-2 p-4 border-t border-gray-200 dark:border-gray-700"
}), Ua = ["aria-hidden", "aria-labelledby"], Xa = /* @__PURE__ */ Q({
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
    const e = l, t = a, r = Xe(), { isOpen: o, close: n, open: f, drawerRef: s, overlayRef: c, onOverlayClick: g } = Wa({
      onClose: () => {
        t("update:modelValue", !1), t("close");
      },
      onOpen: () => {
        t("open");
      },
      closeOnEsc: e.closeOnEsc,
      closeOnOverlayClick: e.closeOnOverlayClick
    });
    le(
      () => e.modelValue,
      (V) => {
        V && !o.value ? f() : !V && o.value && n();
      },
      { immediate: !0 }
    ), le(o, (V) => {
      V !== e.modelValue && t("update:modelValue", V);
    });
    const z = W("");
    le(o, (V) => {
      e.preventScroll && (V ? (z.value = document.body.style.overflow, document.body.style.overflow = "hidden") : document.body.style.overflow = z.value);
    }), Le(() => {
      e.preventScroll && o.value && (document.body.style.overflow = z.value);
    });
    const k = v(() => {
      var V, T;
      return e.unstyled ? [(V = e.pt) == null ? void 0 : V.overlay, e.overlayClass].filter(Boolean) : [
        Fa({
          open: o.value,
          class: (T = e.pt) == null ? void 0 : T.overlay
        }),
        e.overlayClass
      ];
    }), d = v(() => {
      var V, T;
      return e.unstyled ? [(V = e.pt) == null ? void 0 : V.container, e.contentClass, e.class].filter(
        Boolean
      ) : [
        _a({
          placement: e.placement,
          open: o.value,
          class: (T = e.pt) == null ? void 0 : T.container
        }),
        e.contentClass,
        e.class
      ];
    }), b = v(() => {
      const V = {
        zIndex: e.zIndex.toString()
      };
      if (!e.unstyled && e.size) {
        const T = typeof e.size == "number" ? `${e.size}px` : e.size;
        e.placement === "left" || e.placement === "right" ? V.width = T : V.height = T;
      }
      return V;
    }), y = v(() => {
      var V, T;
      return e.unstyled ? [(V = e.pt) == null ? void 0 : V.header, e.headerClass].filter(Boolean) : [Ha({ class: (T = e.pt) == null ? void 0 : T.header }), e.headerClass];
    }), i = v(() => {
      var V, T;
      return e.unstyled ? ((V = e.pt) == null ? void 0 : V.title) || "" : Na({ class: (T = e.pt) == null ? void 0 : T.title });
    }), u = v(() => {
      var V, T;
      return e.unstyled ? ((V = e.pt) == null ? void 0 : V.closeButton) || "" : Ga({ class: (T = e.pt) == null ? void 0 : T.closeButton });
    }), w = v(() => {
      var V, T;
      return e.unstyled ? [(V = e.pt) == null ? void 0 : V.body, e.bodyClass].filter(Boolean) : [Ka({ class: (T = e.pt) == null ? void 0 : T.body }), e.bodyClass];
    }), h = v(() => {
      var V, T;
      return e.unstyled ? [(V = e.pt) == null ? void 0 : V.footer, e.footerClass].filter(Boolean) : [Ya({ class: (T = e.pt) == null ? void 0 : T.footer }), e.footerClass];
    }), S = () => {
      n();
    }, M = v(() => !!e.title || !!r.header), I = v(() => !!r.footer), O = v(() => `vk-drawer-${e.placement}`);
    return (V, T) => (m(), De(ht, { to: "body" }, [
      Te(dt, {
        name: "vk-drawer-overlay",
        appear: ""
      }, {
        default: Ue(() => [
          V.showOverlay && C(o) ? (m(), x("div", {
            key: 0,
            class: p(k.value),
            ref_key: "overlayRef",
            ref: c,
            onClick: T[0] || (T[0] = //@ts-ignore
            (...E) => C(g) && C(g)(...E)),
            role: "presentation",
            "aria-hidden": "true"
          }, null, 2)) : _("", !0)
        ]),
        _: 1
      }),
      Te(dt, {
        name: O.value,
        appear: ""
      }, {
        default: Ue(() => [
          C(o) ? (m(), x("div", {
            key: 0,
            class: p([d.value, "vk-drawer-panel"]),
            style: se(b.value),
            ref_key: "drawerRef",
            ref: s,
            role: "dialog",
            "aria-modal": "true",
            "aria-hidden": !C(o),
            "aria-labelledby": V.title ? "drawer-title" : void 0
          }, [
            M.value ? (m(), x("div", {
              key: 0,
              class: p(y.value)
            }, [
              G(V.$slots, "header", {}, () => [
                V.title ? (m(), x("h2", {
                  key: 0,
                  class: p(i.value),
                  id: "drawer-title"
                }, Y(V.title), 3)) : _("", !0)
              ], !0),
              V.hideCloseButton ? _("", !0) : (m(), x("button", {
                key: 0,
                class: p(u.value),
                onClick: S,
                "aria-label": "关闭",
                type: "button"
              }, [
                G(V.$slots, "close-icon", {}, () => [
                  T[1] || (T[1] = $("svg", {
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
                    $("line", {
                      x1: "18",
                      y1: "6",
                      x2: "6",
                      y2: "18"
                    }),
                    $("line", {
                      x1: "6",
                      y1: "6",
                      x2: "18",
                      y2: "18"
                    })
                  ], -1))
                ], !0)
              ], 2))
            ], 2)) : _("", !0),
            $("div", {
              class: p(w.value)
            }, [
              G(V.$slots, "default", {}, void 0, !0)
            ], 2),
            I.value ? (m(), x("div", {
              key: 1,
              class: p(h.value)
            }, [
              G(V.$slots, "footer", {}, void 0, !0)
            ], 2)) : _("", !0)
          ], 14, Ua)) : _("", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ]));
  }
}), qa = /* @__PURE__ */ et(Xa, [["__scopeId", "data-v-4d3052cd"]]), Za = te(qa);
function Ja(l, a) {
  const e = W(
    a.modelValue !== void 0 ? a.modelValue : l[0]
  ), t = (n) => e.value === n, r = (n) => {
    var f;
    e.value = n, (f = a.onChange) == null || f.call(a, n);
  };
  return {
    selected: e,
    isSelected: t,
    select: r,
    onKeydown: (n) => {
      const f = l.indexOf(e.value);
      if (n.key === "ArrowRight" || n.key === "ArrowDown") {
        const s = l[(f + 1) % l.length];
        r(s);
      } else if (n.key === "ArrowLeft" || n.key === "ArrowUp") {
        const s = l[(f - 1 + l.length) % l.length];
        r(s);
      }
    }
  };
}
const Qa = R({
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
}), er = R({
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
}), tr = ["disabled", "aria-selected", "tabindex", "onClick"], lr = /* @__PURE__ */ Q({
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
    const e = l, t = a, r = v(() => e.options.map((k) => typeof k == "object" ? {
      value: k.value,
      label: k.label,
      disabled: k.disabled || !1
    } : {
      value: k,
      label: String(k),
      disabled: !1
    })), o = v(() => r.value.map((k) => k.value)), { isSelected: n, select: f, onKeydown: s } = Ja(o.value, {
      modelValue: e.modelValue,
      onChange: (k) => {
        t("update:modelValue", k), t("change", k);
      }
    });
    le(
      () => e.modelValue,
      (k) => {
        k !== void 0 && o.value.includes(k) && f(k);
      }
    );
    const c = v(() => {
      var k, d;
      return e.unstyled ? ((k = e.pt) == null ? void 0 : k.container) || "" : Qa({
        size: e.size,
        disabled: e.disabled,
        block: e.block,
        class: (d = e.pt) == null ? void 0 : d.container
      });
    }), g = (k, d) => {
      var b, y;
      return e.unstyled ? ((b = e.pt) == null ? void 0 : b.option) || "" : er({
        selected: n(k),
        disabled: e.disabled || d,
        size: e.size,
        class: (y = e.pt) == null ? void 0 : y.option
      });
    }, z = (k, d) => {
      e.disabled || d || f(k);
    };
    return (k, d) => (m(), x("div", {
      class: p(c.value),
      role: "tablist",
      onKeydown: d[0] || (d[0] = //@ts-ignore
      (...b) => C(s) && C(s)(...b))
    }, [
      (m(!0), x(oe, null, de(r.value, (b) => (m(), x("button", {
        key: String(b.value),
        class: p(g(b.value, b.disabled)),
        disabled: e.disabled || b.disabled,
        "aria-selected": C(n)(b.value),
        tabindex: C(n)(b.value) ? 0 : -1,
        role: "tab",
        type: "button",
        onClick: (y) => z(b.value, b.disabled)
      }, Y(b.label), 11, tr))), 128))
    ], 34));
  }
}), ar = te(lr);
function rr(l) {
  const a = W(null), e = W(null), t = l.min ?? 0, r = l.max ?? 100, o = l.step ?? 1, n = l.orientation ?? "horizontal", f = W(l.modelValue ?? t), s = v(() => (f.value - t) / (r - t) * 100), c = (d) => {
    var i;
    const b = Math.round(d / o) * o, y = Math.min(r, Math.max(t, b));
    f.value = y, (i = l.onChange) == null || i.call(l, y);
  }, g = (d) => {
    const b = a.value;
    if (!b) return;
    const y = b.getBoundingClientRect(), i = n === "horizontal" ? (d.clientX - y.left) / y.width : 1 - (d.clientY - y.top) / y.height;
    c(t + i * (r - t));
  }, z = (d) => {
    d.key === "ArrowRight" || d.key === "ArrowUp" ? (d.preventDefault(), c(f.value + o)) : (d.key === "ArrowLeft" || d.key === "ArrowDown") && (d.preventDefault(), c(f.value - o));
  }, k = (d) => {
    d.preventDefault();
    const b = (i) => {
      const u = a.value;
      if (!u) return;
      const w = u.getBoundingClientRect(), h = n === "horizontal" ? (i.clientX - w.left) / w.width : 1 - (i.clientY - w.top) / w.height;
      c(t + h * (r - t));
    }, y = () => {
      window.removeEventListener("mousemove", b), window.removeEventListener("mouseup", y);
    };
    window.addEventListener("mousemove", b), window.addEventListener("mouseup", y);
  };
  return le(
    () => l.modelValue,
    (d) => {
      d != null && (f.value = d);
    }
  ), {
    value: f,
    percent: s,
    trackRef: a,
    thumbRef: e,
    onTrackClick: g,
    onThumbKeyDown: z,
    onThumbMouseDown: k
  };
}
const or = R({
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
}), sr = R({
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
}), nr = R({
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
}), ir = R({
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
}), ur = R({
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
}), dr = R({
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
}), cr = R({
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
}), fr = R({
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
}), pr = ["aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-orientation", "aria-disabled", "tabindex"], gr = /* @__PURE__ */ Q({
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
      thumbRef: f,
      onTrackClick: s,
      onThumbKeyDown: c,
      onThumbMouseDown: g
    } = rr({
      min: e.min,
      max: e.max,
      step: e.step,
      orientation: e.orientation,
      modelValue: e.modelValue,
      onChange: (B) => {
        t("update:modelValue", B), t("change", B);
      }
    }), z = v(() => {
      var B, A;
      return e.unstyled ? ((B = e.pt) == null ? void 0 : B.container) || "" : or({
        orientation: e.orientation,
        disabled: e.disabled,
        class: (A = e.pt) == null ? void 0 : A.container
      });
    }), k = v(() => {
      var B, A;
      return e.unstyled ? ((B = e.pt) == null ? void 0 : B.track) || "" : sr({
        orientation: e.orientation,
        disabled: e.disabled,
        class: (A = e.pt) == null ? void 0 : A.track
      });
    }), d = v(() => {
      var B, A;
      return e.unstyled ? ((B = e.pt) == null ? void 0 : B.fill) || "" : nr({
        orientation: e.orientation,
        disabled: e.disabled,
        class: (A = e.pt) == null ? void 0 : A.fill
      });
    }), b = v(() => {
      var B, A;
      return e.unstyled ? ((B = e.pt) == null ? void 0 : B.thumb) || "" : ir({
        orientation: e.orientation,
        disabled: e.disabled,
        class: (A = e.pt) == null ? void 0 : A.thumb
      });
    }), y = v(() => e.orientation === "horizontal" ? { width: `${o.value}%` } : { height: `${o.value}%` }), i = v(() => e.orientation === "horizontal" ? { left: `${o.value}%` } : { bottom: `${o.value}%` }), u = W(!1), w = v(() => {
      var B, A;
      return e.unstyled ? ((B = e.pt) == null ? void 0 : B.tooltip) || "" : ur({
        orientation: e.orientation,
        visible: e.showTooltip && u.value,
        class: (A = e.pt) == null ? void 0 : A.tooltip
      });
    }), h = () => {
      e.disabled || (u.value = !0);
    }, S = () => {
      u.value = !1;
    }, M = v(() => e.formatTooltip ? e.formatTooltip(r.value) : r.value.toString()), I = v(() => {
      var B, A;
      return e.unstyled ? ((B = e.pt) == null ? void 0 : B.marks) || "" : dr({
        orientation: e.orientation,
        class: (A = e.pt) == null ? void 0 : A.marks
      });
    }), O = v(() => {
      if (!e.showMarks) return [];
      if (e.marks)
        return Object.entries(e.marks).map(([N, j]) => ({
          value: Number(N),
          label: j,
          percent: (Number(N) - e.min) / (e.max - e.min) * 100,
          active: r.value >= Number(N)
        }));
      const B = Math.floor((e.max - e.min) / e.step), A = B > 10 ? Math.floor(B / 5) : 1, D = [];
      for (let N = 0; N <= B; N += A) {
        const j = e.min + N * e.step;
        D.push({
          value: j,
          label: j.toString(),
          percent: N / B * 100,
          active: r.value >= j
        });
      }
      return D;
    }), V = (B) => {
      var A, D;
      return e.unstyled ? ((A = e.pt) == null ? void 0 : A.mark) || "" : cr({
        orientation: e.orientation,
        active: B,
        class: (D = e.pt) == null ? void 0 : D.mark
      });
    }, T = (B) => e.orientation === "horizontal" ? { left: `${B}%` } : { bottom: `${B}%` }, E = () => {
      var B, A;
      return e.unstyled ? ((B = e.pt) == null ? void 0 : B.markLabel) || "" : fr({
        orientation: e.orientation,
        class: (A = e.pt) == null ? void 0 : A.markLabel
      });
    }, L = (B) => {
      e.disabled || s(B);
    }, P = (B) => {
      e.disabled || c(B);
    }, F = (B) => {
      if (e.disabled) return;
      g(B), h();
      const A = () => {
        S(), window.removeEventListener("mouseup", A);
      };
      window.addEventListener("mouseup", A);
    };
    return (B, A) => (m(), x("div", {
      class: p(z.value)
    }, [
      $("div", {
        class: p(k.value),
        ref_key: "trackRef",
        ref: n,
        onClick: L
      }, [
        $("div", {
          class: p(d.value),
          style: se(y.value)
        }, null, 6),
        B.showMarks ? (m(), x("div", {
          key: 0,
          class: p(I.value)
        }, [
          (m(!0), x(oe, null, de(O.value, (D) => (m(), x("div", {
            key: D.value,
            class: p(V(D.active)),
            style: se(T(D.percent))
          }, [
            $("span", {
              class: p(E)
            }, Y(D.label), 1)
          ], 6))), 128))
        ], 2)) : _("", !0)
      ], 2),
      $("div", {
        class: p(b.value),
        style: se(i.value),
        ref_key: "thumbRef",
        ref: f,
        onMousedown: F,
        onKeydown: P,
        onMouseover: h,
        onMouseleave: S,
        role: "slider",
        "aria-valuemin": B.min,
        "aria-valuemax": B.max,
        "aria-valuenow": C(r),
        "aria-orientation": B.orientation,
        "aria-disabled": B.disabled,
        tabindex: B.disabled ? -1 : 0
      }, [
        B.showTooltip ? (m(), x("div", {
          key: 0,
          class: p(w.value)
        }, Y(M.value), 3)) : _("", !0)
      ], 46, pr)
    ], 2));
  }
}), vr = te(gr), br = R({
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
}), mr = R({
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
}), yr = R({
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
}), hr = R({
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
}), wr = R({
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
}), xr = { class: "popover-inner" }, kr = /* @__PURE__ */ Q({
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
    const t = l, r = e, o = W(!1), n = W(null), f = W(null), s = `popover-${Math.random().toString(36).slice(2, 9)}`;
    let c = null, g = null;
    const z = W(0), k = W(0), d = async () => {
      g && clearTimeout(g), !t.disabled && (c = setTimeout(() => {
        o.value = !0, r("update:modelValue", !0), he(u);
      }, t.openDelay));
    }, b = () => {
      c && clearTimeout(c), !t.disabled && (g = setTimeout(() => {
        o.value = !1, r("update:modelValue", !1);
      }, t.closeDelay));
    }, y = () => {
      o.value ? b() : d();
    }, i = (H) => {
      H ? d() : b();
    }, u = () => {
      const H = f.value;
      if (!H || !o.value) return;
      const q = z.value, ae = k.value;
      if (t.followCursor || t.unbound) {
        let xe = 0, pe = 0;
        switch (t.placement) {
          case "top":
            xe = ae - H.offsetHeight - t.offset, pe = q - H.offsetWidth / 2;
            break;
          case "right":
            xe = ae - H.offsetHeight / 2, pe = q + t.offset;
            break;
          case "bottom":
            xe = ae + t.offset, pe = q - H.offsetWidth / 2;
            break;
          case "left":
            xe = ae - H.offsetHeight / 2, pe = q - H.offsetWidth - t.offset;
            break;
        }
        w(H, xe, pe);
        return;
      }
      const re = n.value;
      if (!re) return;
      const fe = re.getBoundingClientRect(), ce = H.getBoundingClientRect();
      let be = 0, ye = 0;
      const me = fe.left + fe.width / 2, ze = fe.top + fe.height / 2;
      switch (t.placement) {
        case "top":
          be = fe.top - ce.height - t.offset, ye = me - ce.width / 2;
          break;
        case "right":
          be = ze - ce.height / 2, ye = fe.right + t.offset;
          break;
        case "bottom":
          be = fe.bottom + t.offset, ye = me - ce.width / 2;
          break;
        case "left":
          be = ze - ce.height / 2, ye = fe.left - ce.width - t.offset;
          break;
      }
      w(H, be, ye);
    }, w = (H, q, ae) => {
      var fe;
      const re = H.querySelector(
        '[class*="popoverArrow"]'
      );
      if (ae = Math.max(8, ae), ae = Math.min(ae, window.innerWidth - H.offsetWidth - 8), q = Math.max(8, q), q = Math.min(q, window.innerHeight - H.offsetHeight - 8), H.style.position = "fixed", H.style.top = `${q}px`, H.style.left = `${ae}px`, H.style.zIndex = ((fe = t.zIndex) == null ? void 0 : fe.toString()) || "1000", H.style.transition = "none", re && t.showArrow && !t.followCursor && !t.unbound) {
        const ce = n.value;
        if (!ce) return;
        const be = ce.getBoundingClientRect(), ye = H.getBoundingClientRect(), me = getComputedStyle(H).borderColor;
        switch (t.placement) {
          case "top":
          case "bottom": {
            const xe = be.left + be.width / 2 - ae, pe = 12, Ae = ye.width - 12, je = Math.max(
              pe,
              Math.min(Ae, xe)
            );
            re.style.left = `${je}px`, re.style.transform = "rotate(45deg)", t.placement === "top" ? (re.style.borderRight = `1px solid ${me}`, re.style.borderBottom = `1px solid ${me}`, re.style.borderLeft = "none", re.style.borderTop = "none") : (re.style.borderLeft = `1px solid ${me}`, re.style.borderTop = `1px solid ${me}`, re.style.borderRight = "none", re.style.borderBottom = "none");
            break;
          }
          case "left":
          case "right": {
            const xe = be.top + be.height / 2 - q, pe = 12, Ae = ye.height - 12, je = Math.max(
              pe,
              Math.min(Ae, xe)
            );
            re.style.top = `${je}px`, re.style.transform = "rotate(45deg)", t.placement === "left" ? (re.style.borderRight = `1px solid ${me}`, re.style.borderBottom = `1px solid ${me}`, re.style.borderLeft = "none", re.style.borderTop = "none") : (re.style.borderLeft = `1px solid ${me}`, re.style.borderTop = `1px solid ${me}`, re.style.borderRight = "none", re.style.borderBottom = "none");
            break;
          }
        }
      }
    }, h = (H) => {
      z.value = H.clientX, k.value = H.clientY, (t.followCursor || t.unbound) && o.value && u();
    }, S = () => {
      o.value && u();
    }, M = () => {
      o.value && u();
    }, I = () => {
      t.disabled || (t.trigger === "click" || t.trigger === "manual") && y();
    }, O = (H) => {
      t.disabled || (z.value = H.clientX, k.value = H.clientY, t.trigger === "hover" && d());
    }, V = () => {
      t.disabled || t.trigger === "hover" && b();
    }, T = () => {
      t.disabled || d();
    }, E = () => {
      t.disabled || b();
    }, L = (H) => {
      var q, ae;
      o.value && !((q = f.value) != null && q.contains(H.target)) && !((ae = n.value) != null && ae.contains(H.target)) && b();
    }, P = v(() => {
      var H, q;
      return t.unstyled ? ((H = t.pt) == null ? void 0 : H.container) || "relative inline-block" : (q = t.pt) != null && q.container ? `relative inline-block ${t.pt.container}` : "relative inline-block";
    }), F = v(() => {
      var H, q;
      return t.unstyled ? ((H = t.pt) == null ? void 0 : H.trigger) || "inline-block" : br({
        disabled: t.disabled,
        class: (q = t.pt) == null ? void 0 : q.trigger
      });
    }), B = v(() => {
      var H, q;
      return t.unstyled ? ((H = t.pt) == null ? void 0 : H.content) || "" : mr({
        placement: t.placement,
        visible: o.value,
        color: t.color,
        class: (q = t.pt) == null ? void 0 : q.content
      });
    }), A = v(() => {
      var H, q;
      return t.unstyled ? ((H = t.pt) == null ? void 0 : H.arrow) || "" : yr({
        placement: t.placement,
        color: t.color,
        class: (q = t.pt) == null ? void 0 : q.arrow
      });
    }), D = v(() => {
      var H, q;
      return t.unstyled ? ((H = t.pt) == null ? void 0 : H.title) || "" : hr({
        color: t.color,
        class: (q = t.pt) == null ? void 0 : q.title
      });
    }), N = v(() => {
      var H, q;
      return t.unstyled ? ((H = t.pt) == null ? void 0 : H.body) || "" : wr({
        color: t.color,
        class: (q = t.pt) == null ? void 0 : q.body
      });
    }), j = v(() => {
      var q;
      const H = {
        zIndex: ((q = t.zIndex) == null ? void 0 : q.toString()) || "1000",
        transition: "none",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        maxWidth: "280px",
        overflow: "hidden"
      };
      return t.width && (H.width = typeof t.width == "number" ? `${t.width}px` : t.width), H;
    }), K = v(() => t.teleport === !1 ? null : typeof t.teleport == "string" ? t.teleport : "body"), U = () => {
      window.addEventListener("resize", S), window.addEventListener("scroll", M, !0), document.addEventListener("click", L), window.addEventListener("mousemove", h);
    }, ne = () => {
      window.removeEventListener("resize", S), window.removeEventListener("scroll", M, !0), document.removeEventListener("click", L), window.removeEventListener("mousemove", h);
    };
    return we(() => {
      U(), t.modelValue && he(() => {
        i(!0);
      });
    }), Fe(() => {
      ne(), c && clearTimeout(c), g && clearTimeout(g);
    }), le(
      () => t.modelValue,
      (H) => {
        H !== o.value && i(H);
      }
    ), le(o, (H) => {
      H && he(u), r("update:modelValue", H);
    }), le(
      () => [t.placement, t.offset, t.followCursor, t.unbound],
      () => {
        o.value && he(u);
      }
    ), a({
      show: () => i(!0),
      hide: () => i(!1),
      toggle: y,
      updatePosition: u
    }), (H, q) => (m(), x("div", {
      class: p(P.value),
      onMousemove: h
    }, [
      H.unbound ? _("", !0) : (m(), x("div", {
        key: 0,
        ref_key: "triggerRef",
        ref: n,
        class: p(F.value),
        "aria-describedby": s,
        onClick: I,
        onMouseenter: O,
        onMouseleave: V,
        onFocus: T,
        onBlur: E
      }, [
        G(H.$slots, "trigger")
      ], 34)),
      (m(), De(ht, {
        to: K.value,
        disabled: !K.value
      }, [
        o.value && !H.disabled ? (m(), x("div", {
          key: 0,
          ref_key: "popoverRef",
          ref: f,
          class: p(B.value),
          style: se(j.value),
          id: s,
          role: "tooltip",
          "aria-live": "polite"
        }, [
          H.showArrow && !H.followCursor && !H.unbound ? (m(), x("div", {
            key: 0,
            class: p(A.value)
          }, null, 2)) : _("", !0),
          $("div", xr, [
            H.title ? (m(), x("div", {
              key: 0,
              class: p(D.value)
            }, Y(H.title), 3)) : _("", !0),
            $("div", {
              class: p(N.value)
            }, [
              G(H.$slots, "default", {}, () => [
                ve(Y(H.content), 1)
              ])
            ], 2)
          ])
        ], 6)) : _("", !0)
      ], 8, ["to", "disabled"]))
    ], 34));
  }
}), Cr = te(kr);
function Sr(l) {
  const a = W(!1), e = W(null), t = W(null);
  let r = null, o = null, n = 0, f = 0;
  const c = {
    ...{
      openDelay: 0,
      closeDelay: 100,
      placement: "top",
      offset: 8,
      followCursor: !1,
      unbound: !1
    },
    ...l
  }, g = (I) => {
    n = I.clientX, f = I.clientY, (c.followCursor || c.unbound) && a.value && b();
  }, z = () => {
    o && clearTimeout(o), r = setTimeout(() => {
      a.value = !0, requestAnimationFrame(b);
    }, c.openDelay);
  }, k = () => {
    r && clearTimeout(r), o = setTimeout(() => {
      a.value = !1;
    }, c.closeDelay);
  }, d = (I) => {
    I ? z() : k();
  }, b = () => {
    if (!a.value || !t.value || !c.unbound && !c.followCursor && !e.value) return;
    const I = t.value, O = I.getBoundingClientRect();
    let V = 0, T = 0;
    const E = c.offset;
    if (c.followCursor || c.unbound)
      switch (c.placement) {
        case "top":
          V = f - O.height - E, T = n - O.width / 2;
          break;
        case "right":
          V = f - O.height / 2, T = n + E;
          break;
        case "bottom":
          V = f + E, T = n - O.width / 2;
          break;
        case "left":
          V = f - O.height / 2, T = n - O.width - E;
          break;
      }
    else {
      const P = e.value.getBoundingClientRect();
      switch (c.placement) {
        case "top":
          V = P.top - O.height - E, T = P.left + P.width / 2 - O.width / 2;
          break;
        case "right":
          V = P.top + P.height / 2 - O.height / 2, T = P.right + E;
          break;
        case "bottom":
          V = P.bottom + E, T = P.left + P.width / 2 - O.width / 2;
          break;
        case "left":
          V = P.top + P.height / 2 - O.height / 2, T = P.left - O.width - E;
          break;
      }
    }
    T = Math.max(8, T), T = Math.min(T, window.innerWidth - O.width - 8), V = Math.max(8, V), V = Math.min(V, window.innerHeight - O.height - 8), I.style.position = "fixed", I.style.top = "0", I.style.left = "0", I.style.transform = `translate3d(${T}px, ${V}px, 0)`, I.style.zIndex = "9999";
  }, y = () => {
    a.value && b();
  }, i = () => {
    a.value && b();
  };
  le(a, (I) => {
    I ? (window.addEventListener("resize", y), window.addEventListener("scroll", i, !0), (c.followCursor || c.unbound) && window.addEventListener("mousemove", g)) : (window.removeEventListener("resize", y), window.removeEventListener("scroll", i, !0), (c.followCursor || c.unbound) && window.removeEventListener("mousemove", g));
  }), le(e, (I) => {
    I && a.value && !c.unbound && b();
  }), we(() => {
    (c.followCursor || c.unbound) && window.addEventListener("mousemove", g);
  });
  const u = (I) => {
    n = I.clientX, f = I.clientY, z();
  }, w = () => z(), h = () => k(), S = () => k();
  Fe(() => {
    r && clearTimeout(r), o && clearTimeout(o), window.removeEventListener("resize", y), window.removeEventListener("scroll", i, !0), (c.followCursor || c.unbound) && window.removeEventListener("mousemove", g);
  });
  const M = `tooltip-${Math.random().toString(36).slice(2, 9)}`;
  return {
    isOpen: a,
    triggerRef: e,
    tooltipRef: t,
    tooltipId: M,
    updatePosition: b,
    onMouseEnter: u,
    onFocus: w,
    onMouseLeave: h,
    onBlur: S,
    setIsOpen: d
  };
}
const zr = R({
  base: "inline-block"
}), $r = R({
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
}), Br = R({
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
}), Vr = ["aria-describedby"], Ir = ["id"], Mr = /* @__PURE__ */ Q({
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
    const t = l, r = e, o = W(0), n = W(0), f = W(!1), s = Sr({
      openDelay: t.openDelay,
      closeDelay: t.closeDelay,
      placement: t.placement,
      offset: t.offset,
      followCursor: t.followCursor,
      unbound: t.unbound
    }), c = s.isOpen, g = s.triggerRef, z = s.tooltipRef, k = s.tooltipId, d = s.setIsOpen, b = () => {
      f.value = !0, d(!0), he(() => {
        M();
      });
    }, y = () => {
      f.value = !1, d(!1);
    }, i = () => {
      f.value ? y() : b();
    }, u = v(() => {
      var D, N;
      return t.unstyled ? ((D = t.pt) == null ? void 0 : D.container) || "" : zr({
        class: (N = t.pt) == null ? void 0 : N.container
      });
    }), w = v(() => {
      var D, N;
      return t.unstyled ? ((D = t.pt) == null ? void 0 : D.content) || "" : $r({
        color: t.color,
        visible: !0,
        class: (N = t.pt) == null ? void 0 : N.content
      });
    }), h = v(() => {
      var D, N;
      return t.unstyled ? ((D = t.pt) == null ? void 0 : D.arrow) || "" : Br({
        color: t.color,
        placement: t.placement,
        class: (N = t.pt) == null ? void 0 : N.arrow
      });
    }), S = v(() => {
      const D = {};
      return t.maxWidth && (D.maxWidth = typeof t.maxWidth == "number" ? `${t.maxWidth}px` : t.maxWidth), D;
    }), M = () => {
      const D = z.value;
      if (!D || !c.value) return;
      const N = o.value, j = n.value;
      if (t.followCursor || t.unbound) {
        let q = 0, ae = 0;
        switch (t.placement) {
          case "top":
            q = j - D.offsetHeight - t.offset, ae = N - D.offsetWidth / 2;
            break;
          case "right":
            q = j - D.offsetHeight / 2, ae = N + t.offset;
            break;
          case "bottom":
            q = j + t.offset, ae = N - D.offsetWidth / 2;
            break;
          case "left":
            q = j - D.offsetHeight / 2, ae = N - D.offsetWidth - t.offset;
            break;
        }
        I(D, q, ae);
        return;
      }
      const K = g.value;
      if (!K) return;
      const U = K.getBoundingClientRect();
      let ne = 0, H = 0;
      switch (t.placement) {
        case "top":
          ne = U.top - D.offsetHeight - t.offset, H = U.left + U.width / 2 - D.offsetWidth / 2;
          break;
        case "right":
          ne = U.top + U.height / 2 - D.offsetHeight / 2, H = U.right + t.offset;
          break;
        case "bottom":
          ne = U.bottom + t.offset, H = U.left + U.width / 2 - D.offsetWidth / 2;
          break;
        case "left":
          ne = U.top + U.height / 2 - D.offsetHeight / 2, H = U.left - D.offsetWidth - t.offset;
          break;
      }
      I(D, ne, H);
    }, I = (D, N, j) => {
      j = Math.max(8, j), j = Math.min(j, window.innerWidth - D.offsetWidth - 8), N = Math.max(8, N), N = Math.min(N, window.innerHeight - D.offsetHeight - 8), D.style.position = "fixed", D.style.top = `${N}px`, D.style.left = `${j}px`, D.style.zIndex = "9999", D.style.transition = "none";
    }, O = (D) => {
      o.value = D.clientX, n.value = D.clientY, c.value && (t.followCursor || t.unbound) && M();
    }, V = () => {
      c.value && M();
    }, T = () => {
      c.value && M();
    }, E = (D) => {
      t.disabled || (o.value = D.clientX, n.value = D.clientY, (t.trigger === "hover" || t.trigger === "both") && (d(!0), he(M)));
    }, L = () => {
      t.disabled || (t.trigger === "focus" || t.trigger === "both") && (d(!0), he(M));
    }, P = () => {
      t.disabled || (t.trigger === "hover" || t.trigger === "both") && d(!1);
    }, F = () => {
      t.disabled || (t.trigger === "focus" || t.trigger === "both") && d(!1);
    }, B = () => {
      window.addEventListener("mousemove", O), window.addEventListener("resize", V), window.addEventListener("scroll", T, !0);
    }, A = () => {
      window.removeEventListener("mousemove", O), window.removeEventListener("resize", V), window.removeEventListener("scroll", T, !0);
    };
    return we(() => {
      B(), t.unbound && t.modelValue && (f.value = !0, d(!0), he(M));
    }), Fe(() => {
      A();
    }), le(c, (D) => {
      D && he(M), t.unbound && (r("update:modelValue", D), f.value = D);
    }), le(
      () => t.modelValue,
      (D) => {
        t.unbound && (f.value = D, d(D), D && he(M));
      }
    ), a({
      show: b,
      hide: y,
      toggle: i,
      updatePosition: M
    }), (D, N) => (m(), x(oe, null, [
      D.unbound ? _("", !0) : (m(), x("span", {
        key: 0,
        ref_key: "triggerRef",
        ref: g,
        onMouseenter: E,
        onMouseleave: P,
        onFocus: L,
        onBlur: F,
        "aria-describedby": C(k),
        class: p(u.value),
        role: "button",
        tabindex: "0"
      }, [
        G(D.$slots, "default")
      ], 42, Vr)),
      (m(), De(ht, { to: "body" }, [
        C(c) && !D.disabled ? (m(), x("div", {
          key: 0,
          ref_key: "tooltipRef",
          ref: z,
          class: p(w.value),
          style: se(S.value),
          id: C(k),
          role: "tooltip",
          "aria-live": "polite"
        }, [
          G(D.$slots, "content", {}, () => [
            ve(Y(D.content), 1)
          ]),
          D.arrow && !D.followCursor && !D.unbound ? (m(), x("div", {
            key: 0,
            class: p(h.value)
          }, null, 2)) : _("", !0)
        ], 14, Ir)) : _("", !0)
      ]))
    ], 64));
  }
}), Dr = te(Mr);
function Tr(l) {
  const a = W(l.modelValue ?? !1), e = () => {
    var n;
    l.disabled || !l.selectable || (a.value = !a.value, (n = l.onChange) == null || n.call(l, a.value));
  }, t = (n) => {
    var f;
    l.disabled || (n.stopPropagation(), (f = l.onClose) == null || f.call(l, n));
  }, r = v(() => a.value), o = v(() => l.closable || !!l.onClose);
  return {
    isSelected: r,
    isClosable: o,
    toggle: e,
    handleClose: t
  };
}
const Rr = R({
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
}), Er = ["aria-selected"], Lr = ["disabled"], Ar = /* @__PURE__ */ Q({
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
    const e = l, t = a, { isSelected: r, isClosable: o, toggle: n, handleClose: f } = Tr({
      modelValue: e.modelValue,
      selectable: e.selectable,
      disabled: e.disabled,
      closable: e.closable,
      onClose: (y) => t("close", y),
      onChange: (y) => t("update:modelValue", y)
    }), s = v(() => {
      var y, i;
      return e.unstyled ? ((y = e.pt) == null ? void 0 : y.root) || "" : Rr({
        variant: e.variant,
        color: e.color,
        size: e.size,
        radius: e.radius,
        selected: r.value,
        disabled: e.disabled,
        class: (i = e.pt) == null ? void 0 : i.root
      });
    }), c = v(() => {
      var i, u;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.dot) || "" : [
        "mr-1.5 h-2 w-2 rounded-full",
        {
          default: "bg-zinc-500",
          primary: "bg-blue-500",
          secondary: "bg-purple-500",
          success: "bg-green-500",
          warning: "bg-yellow-500",
          danger: "bg-red-500"
        }[e.color || "default"],
        (u = e.pt) == null ? void 0 : u.dot
      ];
    }), g = v(() => {
      var y;
      return e.unstyled ? ((y = e.pt) == null ? void 0 : y.avatar) || "" : "flex shrink-0 mr-1.5";
    }), z = v(() => {
      var y;
      return e.unstyled ? ((y = e.pt) == null ? void 0 : y.startContent) || "" : "flex shrink-0 mr-1.5";
    }), k = v(() => {
      var y;
      return e.unstyled ? ((y = e.pt) == null ? void 0 : y.content) || "" : "truncate";
    }), d = v(() => {
      var y;
      return e.unstyled ? ((y = e.pt) == null ? void 0 : y.endContent) || "" : "flex shrink-0 ml-1.5";
    }), b = v(() => {
      var y;
      return e.unstyled ? ((y = e.pt) == null ? void 0 : y.closeButton) || "" : "ml-1.5 flex-shrink-0 flex items-center justify-center rounded-full hover:bg-black/5 focus:outline-none focus:bg-black/10 w-4 h-4";
    });
    return (y, i) => (m(), x("span", {
      class: p(s.value),
      role: "option",
      "aria-selected": C(r),
      onClick: i[1] || (i[1] = //@ts-ignore
      (...u) => C(n) && C(n)(...u))
    }, [
      y.variant === "dot" ? (m(), x("span", {
        key: 0,
        class: p(c.value)
      }, null, 2)) : _("", !0),
      y.$slots.avatar ? G(y.$slots, "avatar", {
        key: 1,
        class: p(g.value)
      }) : y.avatar ? G(y.$slots, "avatarFallback", {
        key: 2,
        class: p(g.value)
      }, () => [
        $("span", {
          class: p(g.value)
        }, [
          (m(), De(ut(y.avatar)))
        ], 2)
      ]) : _("", !0),
      y.$slots.startContent ? G(y.$slots, "startContent", {
        key: 3,
        class: p(z.value)
      }) : y.startContent ? G(y.$slots, "startContentFallback", {
        key: 4,
        class: p(z.value)
      }, () => [
        $("span", {
          class: p(z.value)
        }, [
          (m(), De(ut(y.startContent)))
        ], 2)
      ]) : _("", !0),
      $("span", {
        class: p(k.value)
      }, [
        G(y.$slots, "default")
      ], 2),
      y.$slots.endContent ? G(y.$slots, "endContent", {
        key: 5,
        class: p(d.value)
      }) : y.endContent ? G(y.$slots, "endContentFallback", {
        key: 6,
        class: p(d.value)
      }, () => [
        $("span", {
          class: p(d.value)
        }, [
          (m(), De(ut(y.endContent)))
        ], 2)
      ]) : _("", !0),
      C(o) ? (m(), x("button", {
        key: 7,
        type: "button",
        class: p(b.value),
        onClick: i[0] || (i[0] = Me(
          //@ts-ignore
          (...u) => C(f) && C(f)(...u),
          ["stop"]
        )),
        "aria-label": "关闭",
        disabled: y.disabled
      }, i[2] || (i[2] = [
        $("svg", {
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
          $("line", {
            x1: "18",
            y1: "6",
            x2: "6",
            y2: "18"
          }),
          $("line", {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "18"
          })
        ], -1)
      ]), 10, Lr)) : _("", !0)
    ], 10, Er));
  }
}), Or = te(Ar), Pr = R({
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
}), jr = R({
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
}), Wr = R({
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
}), Fr = R({
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
}), _r = R({
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
}), Hr = ["innerHTML"], Nr = { class: "flex-1" }, Gr = /* @__PURE__ */ Q({
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
    const e = l, t = a, r = W(!0), o = () => {
      r.value = !1, t("close");
    }, n = v(
      () => {
        var k, d;
        return e.unstyled ? ((k = e.pt) == null ? void 0 : k.root) || "" : Pr({
          variant: e.variant,
          size: e.size,
          rounded: e.rounded,
          border: e.border,
          shadow: e.shadow,
          class: [e.class, (d = e.pt) == null ? void 0 : d.root]
        });
      }
    ), f = v(
      () => {
        var k, d;
        return e.unstyled ? ((k = e.pt) == null ? void 0 : k.icon) || "" : jr({
          variant: e.variant,
          size: e.size,
          class: (d = e.pt) == null ? void 0 : d.icon
        });
      }
    ), s = v(
      () => {
        var k, d;
        return e.unstyled ? ((k = e.pt) == null ? void 0 : k.title) || "" : Wr({
          size: e.size,
          class: (d = e.pt) == null ? void 0 : d.title
        });
      }
    ), c = v(
      () => {
        var k, d;
        return e.unstyled ? ((k = e.pt) == null ? void 0 : k.description) || "" : Fr({
          size: e.size,
          class: (d = e.pt) == null ? void 0 : d.description
        });
      }
    ), g = v(
      () => {
        var k, d;
        return e.unstyled ? ((k = e.pt) == null ? void 0 : k.closeButton) || "" : _r({
          size: e.size,
          class: (d = e.pt) == null ? void 0 : d.closeButton
        });
      }
    ), z = {
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
    return (k, d) => r.value ? (m(), x("div", {
      key: 0,
      class: p(n.value)
    }, [
      k.icon ? (m(), x("div", {
        key: 0,
        class: p(f.value)
      }, [
        G(k.$slots, "icon", {}, () => [
          $("span", {
            innerHTML: z[k.variant]
          }, null, 8, Hr)
        ])
      ], 2)) : _("", !0),
      $("div", Nr, [
        k.$slots.title || k.title ? (m(), x("div", {
          key: 0,
          class: p(s.value)
        }, [
          G(k.$slots, "title", {}, () => [
            ve(Y(k.title), 1)
          ])
        ], 2)) : _("", !0),
        $("div", {
          class: p(c.value)
        }, [
          G(k.$slots, "default", {}, () => [
            ve(Y(k.description), 1)
          ])
        ], 2)
      ]),
      k.closable ? (m(), x("button", {
        key: 1,
        class: p(g.value),
        onClick: o,
        "aria-label": "关闭",
        type: "button"
      }, [
        G(k.$slots, "close-icon", {}, () => [
          d[0] || (d[0] = $("svg", {
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
            $("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }),
            $("line", {
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
}), Kr = te(Gr), Yr = R({
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
}), Ur = /* @__PURE__ */ Q({
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
    const a = l, e = v(() => {
      var t, r;
      return a.unstyled ? ((t = a.pt) == null ? void 0 : t.root) || "" : Yr({
        size: a.size,
        variant: a.variant,
        class: (r = a.pt) == null ? void 0 : r.root
      });
    });
    return (t, r) => (m(), x("kbd", {
      class: p(e.value)
    }, [
      G(t.$slots, "default")
    ], 2));
  }
}), Xr = te(Ur), qr = R({
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
}), Zr = {
  click: (l) => l instanceof MouseEvent
}, Jr = (l, a) => ({
  _ref: W(null),
  handleClick: (r) => {
    if (l.disabled || l.loading) {
      r.stopPropagation();
      return;
    } else
      a("click", r);
  }
}), Qr = ["type", "disabled"], eo = { key: 0 }, to = {
  key: 1,
  class: "inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
}, lo = /* @__PURE__ */ Q({
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
  emits: Zr,
  setup(l, { expose: a, emit: e }) {
    const t = e, r = l, { _ref: o, handleClick: n } = Jr(r, t), f = v(() => {
      var g, z;
      return r.unstyled ? ((g = r.pt) == null ? void 0 : g.root) || "" : qr({
        variant: r.variant,
        size: r.size,
        fullWidth: r.fullWidth,
        rounded: r.rounded,
        disabled: r.disabled || r.loading,
        class: (z = r.pt) == null ? void 0 : z.root
      });
    }), s = v(() => {
      var g;
      return r.unstyled ? ((g = r.pt) == null ? void 0 : g.loader) || "" : "mr-2";
    }), c = v(() => {
      var g;
      return r.unstyled && ((g = r.pt) == null ? void 0 : g.icon) || "";
    });
    return a({
      _ref: o,
      handleClick: n
    }), (g, z) => (m(), x("button", {
      class: p(f.value),
      type: g.type,
      disabled: g.disabled || g.loading,
      ref_key: "_ref",
      ref: o,
      onClick: z[0] || (z[0] = //@ts-ignore
      (...k) => C(n) && C(n)(...k))
    }, [
      g.loading ? (m(), x("span", {
        key: 0,
        class: p(s.value)
      }, [
        g.$slots.loading ? (m(), x("span", eo, [
          G(g.$slots, "loading")
        ])) : (m(), x("span", to))
      ], 2)) : g.$slots.icon ? (m(), x("span", {
        key: 1,
        class: p(c.value)
      }, [
        G(g.$slots, "icon")
      ], 2)) : _("", !0),
      G(g.$slots, "default")
    ], 10, Qr));
  }
}), ao = te(lo), ro = R({
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
}), oo = /* @__PURE__ */ Q({
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
    const a = l, e = v(() => {
      var n, f;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.root) || "" : ro({
        variant: a.variant,
        padding: a.padding,
        radius: a.radius,
        hover: a.hover,
        class: (f = a.pt) == null ? void 0 : f.root
      });
    }), t = v(() => {
      var n;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.header) || "" : "mb-4";
    }), r = v(() => {
      var n;
      return a.unstyled && ((n = a.pt) == null ? void 0 : n.body) || "";
    }), o = v(() => {
      var n;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.footer) || "" : "mt-4 flex justify-end";
    });
    return (n, f) => (m(), x("div", {
      class: p(e.value)
    }, [
      n.$slots.header ? (m(), x("div", {
        key: 0,
        class: p(t.value)
      }, [
        G(n.$slots, "header")
      ], 2)) : _("", !0),
      $("div", {
        class: p(r.value)
      }, [
        G(n.$slots, "default")
      ], 2),
      n.$slots.footer ? (m(), x("div", {
        key: 1,
        class: p(o.value)
      }, [
        G(n.$slots, "footer")
      ], 2)) : _("", !0)
    ], 2));
  }
}), so = te(oo), no = R({
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
}), io = /* @__PURE__ */ Q({
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
    const a = l, e = Xe(), t = v(() => {
      var s;
      return !!a.label || !!((s = e.default) != null && s.call(e));
    }), r = v(() => a.as ? a.as : a.orientation === "horizontal" && !t.value ? "hr" : "div"), o = v(() => {
      var s, c;
      return a.unstyled ? ((s = a.pt) == null ? void 0 : s.root) || "" : no({
        orientation: a.orientation,
        variant: a.variant,
        size: a.size,
        labelPosition: a.labelPosition,
        withLabel: t.value,
        class: (c = a.pt) == null ? void 0 : c.root
      });
    }), n = v(() => {
      var s;
      return a.unstyled ? ((s = a.pt) == null ? void 0 : s.label) || "" : "shrink-0 whitespace-nowrap px-2 text-gray-500";
    }), f = v(() => !a.unstyled && a.color ? {
      borderColor: a.color,
      "--tw-border-opacity": 1,
      "before:border-color": a.color,
      "after:border-color": a.color
    } : {});
    return (s, c) => (m(), De(ut(r.value), {
      class: p(o.value),
      style: se(f.value),
      role: "separator",
      "aria-orientation": s.orientation,
      "data-orientation": s.orientation
    }, {
      default: Ue(() => [
        t.value ? (m(), x("div", {
          key: 0,
          class: p(n.value)
        }, [
          G(s.$slots, "default", {}, () => [
            ve(Y(s.label), 1)
          ])
        ], 2)) : _("", !0)
      ]),
      _: 3
    }, 8, ["class", "style", "aria-orientation", "data-orientation"]));
  }
}), uo = te(io), co = R({
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
}), fo = ["value", "placeholder", "disabled", "readonly", "rows", "maxlength", "minlength"], po = /* @__PURE__ */ Q({
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
    const e = l, t = a, r = v(() => {
      var c;
      return ((c = e.pt) == null ? void 0 : c.root) || "w-full";
    }), o = v(() => {
      var c, g;
      return e.unstyled ? ((c = e.pt) == null ? void 0 : c.textarea) || "" : co({
        size: e.size,
        status: e.status,
        resize: e.resize,
        class: (g = e.pt) == null ? void 0 : g.textarea
      });
    }), n = v(() => {
      var c, g;
      return e.unstyled ? ((c = e.pt) == null ? void 0 : c.counter) || "" : ((g = e.pt) == null ? void 0 : g.counter) || "mt-1 text-right text-sm text-gray-500";
    }), f = (c) => {
      const g = c.target;
      t("update:modelValue", g.value), e.autosize && s(g);
    }, s = (c) => {
      c.style.height = "auto", c.style.height = `${c.scrollHeight}px`;
    };
    return we(() => {
      if (e.autosize) {
        const c = document.querySelector("textarea");
        c && s(c);
      }
    }), (c, g) => {
      var z;
      return m(), x("div", {
        class: p(r.value)
      }, [
        $("textarea", {
          class: p(o.value),
          value: c.modelValue,
          placeholder: c.placeholder,
          disabled: c.disabled,
          readonly: c.readonly,
          rows: c.rows,
          maxlength: c.maxLength,
          minlength: c.minLength,
          onInput: f
        }, null, 42, fo),
        c.showCount && c.maxLength ? (m(), x("div", {
          key: 0,
          class: p(n.value)
        }, Y(((z = c.modelValue) == null ? void 0 : z.length) || 0) + "/" + Y(c.maxLength), 3)) : _("", !0)
      ], 2);
    };
  }
}), go = te(po), mt = R({
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
}), vo = ["checked", "disabled"], bo = /* @__PURE__ */ Q({
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
    const e = l, t = a, r = Re("checkbox-group", null), o = v(() => {
      if (r) {
        const y = e.value;
        return r.modelValue.value.includes(
          y
        );
      }
      return Array.isArray(e.modelValue) ? e.modelValue.includes(e.value) : !!e.modelValue;
    }), n = v(() => (r == null ? void 0 : r.disabled.value) || !1 || e.disabled), f = v(() => (r == null ? void 0 : r.size.value) || e.size || "default"), s = v(() => (r == null ? void 0 : r.color.value) || e.color || "blue"), c = () => {
      if (!n.value)
        if (r) {
          const y = e.value, i = [...r.modelValue.value], u = i.indexOf(y);
          if (u === -1) {
            if (r.max.value && i.length >= r.max.value)
              return;
            i.push(y);
          } else {
            if (r.min.value && i.length <= r.min.value)
              return;
            i.splice(u, 1);
          }
          r.changeEvent(i);
        } else if (Array.isArray(e.modelValue)) {
          const y = e.value, i = [...e.modelValue], u = i.indexOf(y);
          u === -1 ? i.push(y) : i.splice(u, 1), t("update:modelValue", i), t("change", i);
        } else {
          const y = !e.modelValue;
          t("update:modelValue", y), t("change", y);
        }
    }, g = (y) => {
      (y.key === "Enter" || y.key === " ") && (y.preventDefault(), c());
    }, z = v(() => {
      var i, u;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.root) || "" : mt({
        checked: o.value,
        disabled: n.value,
        size: f.value,
        color: s.value
      }).root({ class: (u = e.pt) == null ? void 0 : u.root });
    }), k = v(() => {
      var i, u;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.checkbox) || "" : mt({
        checked: o.value,
        disabled: n.value,
        size: f.value,
        color: s.value
      }).checkbox({ class: (u = e.pt) == null ? void 0 : u.checkbox });
    }), d = v(() => {
      var i, u;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.icon) || "" : mt({
        checked: o.value,
        disabled: n.value,
        size: f.value,
        color: s.value
      }).icon({ class: (u = e.pt) == null ? void 0 : u.icon });
    }), b = v(() => {
      var i, u;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.label) || "" : mt({
        checked: o.value,
        disabled: n.value,
        size: f.value,
        color: s.value
      }).label({ class: (u = e.pt) == null ? void 0 : u.label });
    });
    return (y, i) => (m(), x("label", {
      class: p(z.value),
      onClick: Me(c, ["prevent"]),
      onKeydown: g,
      tabindex: "0"
    }, [
      $("input", {
        type: "checkbox",
        class: "sr-only",
        checked: o.value,
        disabled: n.value
      }, null, 8, vo),
      $("div", {
        class: p(k.value)
      }, [
        o.value ? (m(), x("span", {
          key: 0,
          class: p(d.value)
        }, i[0] || (i[0] = [
          $("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "3",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "size-3/4"
          }, [
            $("polyline", { points: "20 6 9 17 4 12" })
          ], -1)
        ]), 2)) : _("", !0)
      ], 2),
      e.label ? (m(), x("span", {
        key: 0,
        class: p(b.value)
      }, Y(e.label), 3)) : G(y.$slots, "default", { key: 1 })
    ], 34));
  }
}), mo = /* @__PURE__ */ Q({
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
    return Ee("checkbox-group", {
      modelValue: Ve(e, "modelValue"),
      disabled: Ve(e, "disabled"),
      size: Ve(e, "size"),
      color: Ve(e, "color"),
      min: Ve(e, "min"),
      max: Ve(e, "max"),
      changeEvent: r
    }), (o, n) => (m(), x("div", {
      class: p(["flex flex-wrap", [o.direction === "vertical" ? "flex-col gap-2" : "flex-row gap-4"]]),
      role: "group",
      "aria-label": "checkbox-group"
    }, [
      G(o.$slots, "default")
    ], 2));
  }
}), yo = te(bo), ho = te(mo), Ge = R({
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
function wo(l) {
  var f;
  const a = W(((f = l.modelValue) == null ? void 0 : f.toString()) || ""), e = W(null), t = (s) => {
    var c;
    if (!(l.disabled || l.readonly)) {
      if (l.type === "number" && s !== "") {
        const g = parseFloat(s);
        a.value = isNaN(g) ? "" : s;
      } else
        a.value = s;
      l.maxlength && s.length > l.maxlength && (a.value = s.slice(0, l.maxlength)), (c = l.onChange) == null || c.call(l, a.value);
    }
  };
  return le(
    () => l.modelValue,
    (s) => {
      s != null ? a.value = s.toString() : a.value = "";
    }
  ), {
    inputValue: a,
    inputRef: e,
    updateValue: t,
    clearInput: () => {
      var s, c;
      l.disabled || l.readonly || (a.value = "", (s = l.onChange) == null || s.call(l, ""), (c = e.value) == null || c.focus());
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
const xo = ["type", "value", "placeholder", "disabled", "readonly", "maxlength", "autofocus"], ko = /* @__PURE__ */ Q({
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
    const t = l, r = e, { inputValue: o, inputRef: n, updateValue: f, clearInput: s, focus: c, blur: g } = wo(
      {
        modelValue: t.modelValue,
        type: t.type,
        disabled: t.disabled,
        readonly: t.readonly,
        maxlength: t.maxlength,
        onChange: (w) => r("update:modelValue", w)
      }
    ), z = v(() => {
      var h, S;
      return t.unstyled ? ((h = t.pt) == null ? void 0 : h.root) || "" : Ge({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).root({ class: (S = t.pt) == null ? void 0 : S.root });
    }), k = v(() => {
      var h, S;
      return t.unstyled ? ((h = t.pt) == null ? void 0 : h.wrapper) || "" : Ge({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).wrapper({ class: (S = t.pt) == null ? void 0 : S.wrapper });
    }), d = v(() => {
      var h, S;
      return t.unstyled ? ((h = t.pt) == null ? void 0 : h.input) || "" : Ge({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).input({ class: (S = t.pt) == null ? void 0 : S.input });
    }), b = v(() => {
      var h, S;
      return t.unstyled ? ((h = t.pt) == null ? void 0 : h.prefix) || "" : Ge({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).prefix({ class: (S = t.pt) == null ? void 0 : S.prefix });
    }), y = v(() => {
      var h, S;
      return t.unstyled ? ((h = t.pt) == null ? void 0 : h.suffix) || "" : Ge({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).suffix({ class: (S = t.pt) == null ? void 0 : S.suffix });
    }), i = v(() => {
      var h, S;
      return t.unstyled ? ((h = t.pt) == null ? void 0 : h.clear) || "" : Ge({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).clear({ class: (S = t.pt) == null ? void 0 : S.clear });
    }), u = v(() => {
      var h, S;
      return t.unstyled ? ((h = t.pt) == null ? void 0 : h.count) || "" : Ge({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).count({ class: (S = t.pt) == null ? void 0 : S.count });
    });
    return a({
      focus: c,
      blur: g,
      inputRef: n
    }), (w, h) => (m(), x("div", {
      class: p(z.value)
    }, [
      $("div", {
        class: p([k.value, t.readonly && "cursor-default"])
      }, [
        t.prefixIcon ? (m(), x("div", {
          key: 0,
          class: p(b.value)
        }, [
          $("i", {
            class: p(t.prefixIcon)
          }, null, 2)
        ], 2)) : _("", !0),
        $("input", {
          type: t.type,
          class: p(d.value),
          value: C(o),
          placeholder: t.placeholder,
          disabled: t.disabled,
          readonly: t.readonly,
          maxlength: t.maxlength,
          autofocus: t.autofocus,
          ref_key: "inputRef",
          ref: n,
          onInput: h[0] || (h[0] = (S) => C(f)(S.target.value)),
          onFocus: h[1] || (h[1] = (S) => w.$emit("focus", S)),
          onBlur: h[2] || (h[2] = (S) => w.$emit("blur", S))
        }, null, 42, xo),
        t.clearable && C(o) && !t.disabled && !t.readonly ? (m(), x("div", {
          key: 1,
          class: p([y.value, i.value]),
          onClick: h[3] || (h[3] = //@ts-ignore
          (...S) => C(s) && C(s)(...S))
        }, h[4] || (h[4] = [
          $("svg", {
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
            $("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }),
            $("line", {
              x1: "6",
              y1: "6",
              x2: "18",
              y2: "18"
            })
          ], -1)
        ]), 2)) : _("", !0),
        t.suffixIcon ? (m(), x("div", {
          key: 2,
          class: p(y.value)
        }, [
          $("i", {
            class: p(t.suffixIcon)
          }, null, 2)
        ], 2)) : _("", !0)
      ], 2),
      t.showCount && t.maxlength ? (m(), x("div", {
        key: 0,
        class: p(u.value)
      }, Y(C(o).length) + "/" + Y(t.maxlength), 3)) : _("", !0)
    ], 2));
  }
}), Co = te(ko);
function So(l) {
  const a = W(!1), e = W(""), t = W(0), r = W(null), o = W(null), n = W(l.modelValue);
  le(
    () => l.modelValue,
    (E) => {
      n.value = E;
    },
    { immediate: !0 }
  );
  const f = v(() => {
    var E;
    return ((E = l.options) == null ? void 0 : E.map((L) => ({
      ...L,
      disabled: L.disabled || !1
    }))) || [];
  }), s = v(() => {
    const E = {}, L = [];
    return f.value.forEach((P) => {
      P.group ? (E[P.group] || (E[P.group] = []), E[P.group].push(P)) : L.push(P);
    }), { groups: E, noGroup: L };
  }), c = v(() => l.multiple ? Array.isArray(n.value) ? n.value : [] : n.value !== void 0 ? [n.value] : []), g = v(() => {
    const E = [];
    if (!c.value.length) return E;
    for (const L of c.value) {
      const P = f.value.find(
        (F) => F.value === L || String(F.value) === String(L)
      );
      if (P)
        E.push(P);
      else if (L != null && (typeof L == "string" || typeof L == "number")) {
        const F = {
          label: String(L),
          value: L,
          disabled: !1
        };
        E.push(F);
      }
    }
    return E;
  }), z = v(() => {
    var E;
    return !g.value || g.value.length === 0 ? "" : ((E = g.value[0]) == null ? void 0 : E.label) || "";
  }), k = v(() => {
    if (!l.filterable || !e.value)
      return f.value;
    const E = e.value.toLowerCase();
    return f.value.filter(
      (L) => L.label.toLowerCase().includes(E)
    );
  }), d = (E) => {
    var P;
    if (l.disabled || l.readonly || E.disabled)
      return;
    let L;
    if (l.multiple) {
      const F = [...c.value], B = F.findIndex(
        (A) => String(A) === String(E.value)
      );
      B > -1 ? F.splice(B, 1) : F.push(E.value), L = F;
    } else
      L = E.value, u();
    n.value = L, (P = l.onChange) == null || P.call(l, L), l.filterable && he(() => {
      e.value = "";
    });
  }, b = (E) => {
    var P;
    if (E && E.stopPropagation(), l.disabled || l.readonly) return;
    const L = l.multiple ? [] : void 0;
    n.value = L, (P = l.onChange) == null || P.call(l, L);
  }, y = () => {
    var E;
    l.disabled || l.readonly || (a.value = !a.value, (E = l.onDropdownVisibleChange) == null || E.call(l, a.value), a.value && he(() => {
      w();
    }));
  }, i = () => {
    var E;
    l.disabled || l.readonly || a.value || (a.value = !0, (E = l.onDropdownVisibleChange) == null || E.call(l, !0), he(() => {
      w();
    }));
  }, u = () => {
    var E;
    a.value && (a.value = !1, e.value = "", (E = l.onDropdownVisibleChange) == null || E.call(l, !1));
  }, w = () => {
    const E = k.value;
    for (let L = 0; L < E.length; L++)
      if (!E[L].disabled) {
        t.value = L;
        return;
      }
    t.value = -1;
  }, h = (E) => c.value.some((L) => String(L) === String(E)), S = (E) => {
    var P, F;
    if (l.disabled || l.readonly) return;
    const L = k.value;
    switch (E.key) {
      case "ArrowDown":
        if (E.preventDefault(), !a.value)
          i();
        else {
          let B = t.value, A = 0;
          do
            B = (B + 1) % L.length, A++;
          while ((P = L[B]) != null && P.disabled && A < L.length);
          t.value = B;
        }
        break;
      case "ArrowUp":
        if (E.preventDefault(), !a.value)
          i();
        else {
          let B = t.value, A = 0;
          do
            B = B <= 0 ? L.length - 1 : B - 1, A++;
          while ((F = L[B]) != null && F.disabled && A < L.length);
          t.value = B;
        }
        break;
      case "Enter":
      case " ":
        E.preventDefault(), a.value && t.value >= 0 && L[t.value] ? d(L[t.value]) : y();
        break;
      case "Escape":
        E.preventDefault(), u();
        break;
      case "Tab":
        u();
        break;
    }
  }, M = (E) => {
    var L;
    e.value = E, (L = l.onSearch) == null || L.call(l, E), w();
  }, I = (E) => {
    a.value && r.value && o.value && !r.value.contains(E.target) && !o.value.contains(E.target) && u();
  }, O = () => {
    document.addEventListener("mousedown", I);
  }, V = () => {
    document.removeEventListener("mousedown", I);
  };
  le(a, (E) => {
    E ? O() : V();
  });
  const T = () => {
    V();
  };
  return we(() => {
    a.value && O();
  }), Le(() => {
    T();
  }), {
    isOpen: a,
    searchValue: e,
    activeIndex: t,
    triggerRef: r,
    dropdownRef: o,
    selectedValues: c,
    selectedOptions: g,
    getOptionLabel: z,
    filteredOptions: k,
    groupedOptions: s,
    selectOption: d,
    clearSelection: b,
    toggleDropdown: y,
    openDropdown: i,
    closeDropdown: u,
    isSelected: h,
    onKeyDown: S,
    onSearchInput: M,
    cleanup: T
  };
}
const zo = R({
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
const $o = {
  key: 0,
  class: "text-red-500"
}, Bo = ["aria-expanded", "aria-disabled", "aria-readonly", "aria-required"], Vo = {
  key: 0,
  class: "flex flex-wrap gap-1"
}, Io = { class: "truncate" }, Mo = ["onClick"], Do = {
  key: 1,
  class: "truncate"
}, To = { class: "flex items-center" }, Ro = ["aria-multiselectable"], Eo = {
  key: 0,
  class: "sticky top-0"
}, Lo = ["value"], Ao = ["onClick", "aria-selected", "aria-disabled"], Oo = ["onClick", "aria-selected", "aria-disabled"], Po = { class: "px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400" }, jo = ["onClick", "aria-selected", "aria-disabled"], Wo = {
  key: 1,
  class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
}, Fo = {
  key: 2,
  class: "mt-1 text-xs text-red-500"
}, _o = /* @__PURE__ */ Q({
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
    const t = l, r = e, o = zo(), n = v(() => {
      var A, D, N, j, K, U, ne, H, q, ae, re, fe, ce, be, ye, me, ze, xe, pe, Ae, je, pt, tt, ke, Ce, lt, qe, X, ee, ie, ge, _e, at;
      return t.unstyled ? {
        root: ((A = t.pt) == null ? void 0 : A.root) || "",
        trigger: ((D = t.pt) == null ? void 0 : D.trigger) || "",
        value: ((N = t.pt) == null ? void 0 : N.value) || "",
        placeholder: ((j = t.pt) == null ? void 0 : j.placeholder) || "",
        dropdown: ((K = t.pt) == null ? void 0 : K.dropdown) || "",
        option: ((U = t.pt) == null ? void 0 : U.option) || "",
        optionSelected: ((ne = t.pt) == null ? void 0 : ne.optionSelected) || "",
        optionActive: ((H = t.pt) == null ? void 0 : H.optionActive) || "",
        optionDisabled: ((q = t.pt) == null ? void 0 : q.optionDisabled) || "",
        icon: ((ae = t.pt) == null ? void 0 : ae.icon) || "",
        clearIcon: ((re = t.pt) == null ? void 0 : re.clearIcon) || "",
        checkIcon: ((fe = t.pt) == null ? void 0 : fe.checkIcon) || "",
        search: ((ce = t.pt) == null ? void 0 : ce.search) || "",
        tag: ((be = t.pt) == null ? void 0 : be.tag) || "",
        tagRemove: ((ye = t.pt) == null ? void 0 : ye.tagRemove) || "",
        noMatch: ((me = t.pt) == null ? void 0 : me.noMatch) || "",
        label: ((ze = t.pt) == null ? void 0 : ze.label) || ""
      } : {
        root: o.root({
          size: t.size,
          status: t.status,
          disabled: t.disabled,
          multiple: t.multiple,
          open: c.value,
          class: (xe = t.pt) == null ? void 0 : xe.root
        }),
        trigger: o.trigger({
          size: t.size,
          status: t.status,
          disabled: t.disabled,
          multiple: t.multiple,
          open: c.value,
          class: (pe = t.pt) == null ? void 0 : pe.trigger
        }),
        value: o.value({
          multiple: t.multiple,
          class: (Ae = t.pt) == null ? void 0 : Ae.value
        }),
        placeholder: o.placeholder({ class: (je = t.pt) == null ? void 0 : je.placeholder }),
        dropdown: o.dropdown({ class: (pt = t.pt) == null ? void 0 : pt.dropdown }),
        option: o.option({ class: (tt = t.pt) == null ? void 0 : tt.option }),
        optionSelected: o.optionSelected({ class: (ke = t.pt) == null ? void 0 : ke.optionSelected }),
        optionActive: o.optionActive({ class: (Ce = t.pt) == null ? void 0 : Ce.optionActive }),
        optionDisabled: o.optionDisabled({ class: (lt = t.pt) == null ? void 0 : lt.optionDisabled }),
        icon: o.icon({ class: (qe = t.pt) == null ? void 0 : qe.icon }),
        clearIcon: o.clearIcon({ class: (X = t.pt) == null ? void 0 : X.clearIcon }),
        checkIcon: o.checkIcon({ class: (ee = t.pt) == null ? void 0 : ee.checkIcon }),
        search: o.search({ class: (ie = t.pt) == null ? void 0 : ie.search }),
        tag: o.tag({ class: (ge = t.pt) == null ? void 0 : ge.tag }),
        tagRemove: o.tagRemove({ class: (_e = t.pt) == null ? void 0 : _e.tagRemove }),
        noMatch: o.noMatch({ class: (at = t.pt) == null ? void 0 : at.noMatch })
      };
    }), f = `versa-select-dropdown-${Math.random().toString(36).substring(2, 9)}`, s = W(null), {
      isOpen: c,
      searchValue: g,
      activeIndex: z,
      triggerRef: k,
      dropdownRef: d,
      selectedValues: b,
      selectedOptions: y,
      getOptionLabel: i,
      filteredOptions: u,
      groupedOptions: w,
      selectOption: h,
      clearSelection: S,
      toggleDropdown: M,
      openDropdown: I,
      closeDropdown: O,
      isSelected: V,
      onKeyDown: T,
      onSearchInput: E,
      cleanup: L
    } = So({
      modelValue: t.modelValue,
      options: t.options,
      multiple: t.multiple,
      filterable: t.filterable,
      disabled: t.disabled,
      readonly: t.readonly,
      onChange: (A) => {
        r("update:modelValue", A), r("change", A), (A === void 0 || Array.isArray(A) && A.length === 0) && r("clear");
      },
      onSearch: (A) => {
        r("search", A);
      },
      onDropdownVisibleChange: (A) => {
        r("dropdown-visible-change", A), A && t.filterable && setTimeout(() => {
          var D;
          (D = s.value) == null || D.focus();
        }, 0);
      }
    }), P = v(() => Object.keys(w.value.groups).length > 0), F = (A, D) => {
      let N = 0;
      if (A === null)
        return D;
      N += w.value.noGroup.length;
      const j = Object.keys(w.value.groups);
      for (let K = 0; K < j.length; K++) {
        const U = j[K];
        if (U === A)
          return N + D;
        N += w.value.groups[U].length;
      }
      return -1;
    }, B = (A) => {
      E(A.target.value);
    };
    return Le(() => {
      L();
    }), a({
      open: I,
      close: O,
      clear: S
    }), (A, D) => {
      var N;
      return m(), x("div", {
        class: p(n.value.root)
      }, [
        t.showLabel && t.label ? (m(), x("label", {
          key: 0,
          class: p(
            ((N = t.pt) == null ? void 0 : N.label) || "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          )
        }, [
          ve(Y(t.label) + " ", 1),
          t.required ? (m(), x("span", $o, "*")) : _("", !0)
        ], 2)) : _("", !0),
        $("div", {
          ref_key: "triggerRef",
          ref: k,
          class: p(n.value.trigger),
          onClick: D[1] || (D[1] = (j) => !t.disabled && !t.readonly && C(M)()),
          onKeydown: D[2] || (D[2] = //@ts-ignore
          (...j) => C(T) && C(T)(...j)),
          tabindex: "0",
          role: "combobox",
          "aria-expanded": C(c),
          "aria-disabled": t.disabled,
          "aria-readonly": t.readonly,
          "aria-required": t.required,
          "aria-haspopup": !0,
          "aria-controls": f
        }, [
          $("div", {
            class: p(n.value.value)
          }, [
            t.multiple && C(y).length ? (m(), x("div", Vo, [
              (m(!0), x(oe, null, de(C(y), (j) => (m(), x("div", {
                key: j.value,
                class: p(n.value.tag)
              }, [
                $("span", Io, Y(j.label), 1),
                !t.disabled && !t.readonly ? (m(), x("button", {
                  key: 0,
                  type: "button",
                  class: p(n.value.tagRemove),
                  onClick: Me((K) => C(h)(j), ["stop"]),
                  "aria-label": "移除"
                }, D[4] || (D[4] = [
                  $("svg", {
                    viewBox: "0 0 24 24",
                    width: "12",
                    height: "12",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    fill: "none"
                  }, [
                    $("line", {
                      x1: "18",
                      y1: "6",
                      x2: "6",
                      y2: "18"
                    }),
                    $("line", {
                      x1: "6",
                      y1: "6",
                      x2: "18",
                      y2: "18"
                    })
                  ], -1)
                ]), 10, Mo)) : _("", !0)
              ], 2))), 128))
            ])) : C(y).length ? (m(), x("div", Do, Y(C(i)), 1)) : (m(), x("div", {
              key: 2,
              class: p(n.value.placeholder)
            }, Y(t.placeholder), 3))
          ], 2),
          $("div", To, [
            t.clearable && C(b).length && !t.disabled && !t.readonly ? (m(), x("button", {
              key: 0,
              type: "button",
              class: p(n.value.clearIcon),
              onClick: D[0] || (D[0] = Me(
                //@ts-ignore
                (...j) => C(S) && C(S)(...j),
                ["stop"]
              )),
              "aria-label": "清除选择"
            }, D[5] || (D[5] = [
              $("svg", {
                viewBox: "0 0 24 24",
                width: "14",
                height: "14",
                stroke: "currentColor",
                "stroke-width": "2",
                fill: "none"
              }, [
                $("line", {
                  x1: "18",
                  y1: "6",
                  x2: "6",
                  y2: "18"
                }),
                $("line", {
                  x1: "6",
                  y1: "6",
                  x2: "18",
                  y2: "18"
                })
              ], -1)
            ]), 2)) : _("", !0),
            $("div", {
              class: p(n.value.icon)
            }, [
              (m(), x("svg", {
                viewBox: "0 0 24 24",
                width: "16",
                height: "16",
                stroke: "currentColor",
                "stroke-width": "2",
                fill: "none",
                style: se({ transform: C(c) ? "rotate(180deg)" : void 0 }),
                class: "transition-transform duration-200"
              }, D[6] || (D[6] = [
                $("polyline", { points: "6 9 12 15 18 9" }, null, -1)
              ]), 4))
            ], 2)
          ])
        ], 42, Bo),
        Te(dt, { name: "versa-select-dropdown" }, {
          default: Ue(() => [
            C(c) ? (m(), x("div", {
              key: 0,
              ref_key: "dropdownRef",
              ref: d,
              id: f,
              class: p(n.value.dropdown),
              style: se({ maxHeight: `${t.maxDropdownHeight}px` }),
              role: "listbox",
              "aria-multiselectable": t.multiple
            }, [
              t.filterable ? (m(), x("div", Eo, [
                $("input", {
                  ref_key: "searchInputRef",
                  ref: s,
                  class: p(n.value.search),
                  type: "text",
                  value: C(g),
                  onInput: B,
                  placeholder: "搜索...",
                  onKeydown: D[3] || (D[3] = Me(() => {
                  }, ["stop"]))
                }, null, 42, Lo)
              ])) : _("", !0),
              $("div", null, [
                P.value ? (m(), x(oe, { key: 1 }, [
                  C(w).noGroup.length ? (m(!0), x(oe, { key: 0 }, de(C(w).noGroup, (j, K) => (m(), x("div", {
                    key: j.value,
                    class: p([
                      n.value.option,
                      {
                        [n.value.optionSelected]: C(V)(j.value),
                        [n.value.optionActive]: C(z) === K,
                        [n.value.optionDisabled]: j.disabled
                      }
                    ]),
                    onClick: Me((U) => !j.disabled && C(h)(j), ["stop"]),
                    role: "option",
                    "aria-selected": C(V)(j.value),
                    "aria-disabled": j.disabled
                  }, [
                    ve(Y(j.label) + " ", 1),
                    C(V)(j.value) ? (m(), x("svg", {
                      key: 0,
                      class: p(n.value.checkIcon),
                      viewBox: "0 0 24 24",
                      width: "16",
                      height: "16",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      fill: "none"
                    }, D[8] || (D[8] = [
                      $("polyline", { points: "20 6 9 17 4 12" }, null, -1)
                    ]), 2)) : _("", !0)
                  ], 10, Oo))), 128)) : _("", !0),
                  (m(!0), x(oe, null, de(C(w).groups, (j, K) => (m(), x(oe, { key: K }, [
                    $("div", Po, Y(K), 1),
                    (m(!0), x(oe, null, de(j, (U, ne) => (m(), x("div", {
                      key: U.value,
                      class: p([
                        n.value.option,
                        "pl-5",
                        {
                          [n.value.optionSelected]: C(V)(U.value),
                          [n.value.optionActive]: F(K, ne) === C(z),
                          [n.value.optionDisabled]: U.disabled
                        }
                      ]),
                      onClick: Me((H) => !U.disabled && C(h)(U), ["stop"]),
                      role: "option",
                      "aria-selected": C(V)(U.value),
                      "aria-disabled": U.disabled
                    }, [
                      ve(Y(U.label) + " ", 1),
                      C(V)(U.value) ? (m(), x("svg", {
                        key: 0,
                        class: p(n.value.checkIcon),
                        viewBox: "0 0 24 24",
                        width: "16",
                        height: "16",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        fill: "none"
                      }, D[9] || (D[9] = [
                        $("polyline", { points: "20 6 9 17 4 12" }, null, -1)
                      ]), 2)) : _("", !0)
                    ], 10, jo))), 128))
                  ], 64))), 128))
                ], 64)) : (m(), x(oe, { key: 0 }, [
                  C(u).length ? (m(!0), x(oe, { key: 0 }, de(C(u), (j, K) => (m(), x("div", {
                    key: j.value,
                    class: p([
                      n.value.option,
                      {
                        [n.value.optionSelected]: C(V)(j.value),
                        [n.value.optionActive]: C(z) === K,
                        [n.value.optionDisabled]: j.disabled
                      }
                    ]),
                    onClick: Me((U) => !j.disabled && C(h)(j), ["stop"]),
                    role: "option",
                    "aria-selected": C(V)(j.value),
                    "aria-disabled": j.disabled
                  }, [
                    ve(Y(j.label) + " ", 1),
                    C(V)(j.value) ? (m(), x("svg", {
                      key: 0,
                      class: p(n.value.checkIcon),
                      viewBox: "0 0 24 24",
                      width: "16",
                      height: "16",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      fill: "none"
                    }, D[7] || (D[7] = [
                      $("polyline", { points: "20 6 9 17 4 12" }, null, -1)
                    ]), 2)) : _("", !0)
                  ], 10, Ao))), 128)) : (m(), x("div", {
                    key: 1,
                    class: p(n.value.noMatch)
                  }, Y(t.noMatchText), 3))
                ], 64))
              ])
            ], 14, Ro)) : _("", !0)
          ]),
          _: 1
        }),
        t.helpText && !t.errorText ? (m(), x("div", Wo, Y(t.helpText), 1)) : _("", !0),
        t.errorText ? (m(), x("div", Fo, Y(t.errorText), 1)) : _("", !0)
      ], 2);
    };
  }
}), Ho = te(_o);
function No(l) {
  const a = W(l.modelValue ?? 0), e = W(-1), t = W(!1);
  return le(
    () => l.modelValue,
    (s) => {
      s !== void 0 && (a.value = s);
    }
  ), {
    currentValue: a,
    hoverValue: e,
    isHovering: t,
    getStarValue: (s) => {
      const c = t.value ? e.value : a.value;
      return l.allowHalf ? c >= s + 1 ? 1 : c >= s + 0.5 ? 0.5 : 0 : c >= s + 1 ? 1 : 0;
    },
    handleClick: (s, c) => {
      var z;
      if (l.disabled || l.readonly) return;
      let g;
      l.allowHalf && c ? g = s + 0.5 : g = s + 1, g === a.value && (g = 0), a.value = g, (z = l.onChange) == null || z.call(l, g);
    },
    handleMouseMove: (s, c) => {
      var g;
      if (!(l.disabled || l.readonly)) {
        if (t.value = !0, l.allowHalf) {
          const k = s.currentTarget.getBoundingClientRect(), d = s.clientX - k.left < k.width / 2;
          e.value = d ? c + 0.5 : c + 1;
        } else
          e.value = c + 1;
        (g = l.onHoverChange) == null || g.call(l, e.value);
      }
    },
    handleMouseLeave: () => {
      var s;
      l.disabled || l.readonly || (t.value = !1, e.value = -1, (s = l.onHoverChange) == null || s.call(l, a.value));
    }
  };
}
const Go = R({
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
}), Ko = R({
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
}), Yo = R({
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
}), Uo = R({
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
}), Xo = R({
  base: "text-gray-300 dark:text-gray-600"
}), qo = R({
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
}), Zo = {
  "update:modelValue": (l) => typeof l == "number",
  change: (l) => typeof l == "number",
  "hover-change": (l) => typeof l == "number"
}, Jo = ["onClick", "onMousemove", "aria-checked", "aria-disabled", "aria-readonly", "tabindex"], Qo = /* @__PURE__ */ Q({
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
  emits: Zo,
  setup(l, { emit: a }) {
    const e = l, t = a, {
      currentValue: r,
      getStarValue: o,
      handleClick: n,
      handleMouseMove: f,
      handleMouseLeave: s
    } = No({
      modelValue: e.modelValue,
      max: e.max,
      allowHalf: e.allowHalf,
      readonly: e.readonly,
      disabled: e.disabled,
      onChange: (i) => {
        t("update:modelValue", i), t("change", i);
      },
      onHoverChange: (i) => {
        t("hover-change", i);
      }
    }), c = v(() => {
      var i, u;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.container) || "" : Go({
        disabled: e.disabled,
        class: (u = e.pt) == null ? void 0 : u.container
      });
    }), g = v(() => {
      var i, u;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.item) || "" : Ko({
        size: e.size,
        disabled: e.disabled,
        readonly: e.readonly,
        class: (u = e.pt) == null ? void 0 : u.item
      });
    }), z = v(() => {
      var i, u;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.score) || "" : Yo({
        size: e.size,
        class: (u = e.pt) == null ? void 0 : u.score
      });
    }), k = v(() => {
      var i, u;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.fullStar) || "absolute inset-0 overflow-hidden w-full" : Uo({
        color: e.color,
        class: (u = e.pt) == null ? void 0 : u.fullStar
      }) + " w-full";
    }), d = v(() => {
      var i, u;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.halfStar) || "absolute inset-0 overflow-hidden w-1/2" : qo({
        color: e.color,
        class: (u = e.pt) == null ? void 0 : u.halfStar
      }) + " w-1/2";
    }), b = v(() => {
      var i, u;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.voidStar) || "" : Xo({
        class: (u = e.pt) == null ? void 0 : u.voidStar
      });
    }), y = (i) => e.formatTooltip ? e.formatTooltip(i) : i.toString();
    return (i, u) => (m(), x("div", {
      class: p(c.value),
      onMouseleave: u[0] || (u[0] = //@ts-ignore
      (...w) => C(s) && C(s)(...w)),
      role: "radiogroup",
      "aria-label": "评分"
    }, [
      (m(!0), x(oe, null, de(i.max, (w) => (m(), x("div", {
        key: w,
        class: p(g.value),
        onClick: (h) => C(n)(w - 1, !1),
        onMousemove: (h) => C(f)(h, w - 1),
        role: "radio",
        "aria-checked": C(o)(w - 1) > 0,
        "aria-disabled": i.disabled,
        "aria-readonly": i.readonly,
        tabindex: i.disabled ? -1 : 0
      }, [
        $("span", {
          class: p(b.value)
        }, [
          G(i.$slots, "character", {}, () => [
            ve(Y(i.character || "★"), 1)
          ], !0)
        ], 2),
        C(o)(w - 1) === 1 ? (m(), x("span", {
          key: 0,
          class: p(k.value)
        }, [
          G(i.$slots, "character", {}, () => [
            ve(Y(i.character || "★"), 1)
          ], !0)
        ], 2)) : C(o)(w - 1) === 0.5 ? (m(), x("span", {
          key: 1,
          class: p(d.value)
        }, [
          G(i.$slots, "character", {}, () => [
            ve(Y(i.character || "★"), 1)
          ], !0)
        ], 2)) : _("", !0)
      ], 42, Jo))), 128)),
      i.showScore ? (m(), x("span", {
        key: 0,
        class: p(z.value)
      }, Y(y(C(r))), 3)) : _("", !0)
    ], 34));
  }
}), es = /* @__PURE__ */ et(Qo, [["__scopeId", "data-v-ae42a8b5"]]), ts = te(es), ls = (l, a) => {
  const e = W(l.modelValue || /* @__PURE__ */ new Date()), t = W(e.value.getMonth()), r = W(e.value.getFullYear()), o = v(() => {
    const z = l.locale || "default", k = l.firstDayOfWeek || 0, d = [];
    for (let b = 0; b < 7; b++) {
      const y = (b + k) % 7;
      d.push(
        new Intl.DateTimeFormat(z, { weekday: "short" }).format(
          new Date(2021, 0, y + 3)
          // 2021-01-03 is a Sunday
        )
      );
    }
    return d;
  }), n = v(() => {
    const z = r.value, k = t.value, d = new Date(z, k, 1).getDay(), b = new Date(z, k + 1, 0).getDate(), y = l.firstDayOfWeek || 0, i = [], u = new Date(z, k, 0).getDate(), w = (d - y + 7) % 7;
    for (let M = u - w + 1; M <= u; M++)
      i.push({
        date: new Date(z, k - 1, M),
        day: M,
        isCurrentMonth: !1,
        isToday: !1,
        isSelected: !1,
        isDisabled: !1
      });
    const h = /* @__PURE__ */ new Date();
    for (let M = 1; M <= b; M++) {
      const I = new Date(z, k, M), O = h.getDate() === M && h.getMonth() === k && h.getFullYear() === z, V = l.modelValue && l.modelValue.getDate() === M && l.modelValue.getMonth() === k && l.modelValue.getFullYear() === z, T = l.disabled || l.min && I < l.min || l.max && I > l.max;
      i.push({
        date: I,
        day: M,
        isCurrentMonth: !0,
        isToday: O,
        isSelected: V,
        isDisabled: T
      });
    }
    const S = 42 - i.length;
    for (let M = 1; M <= S; M++)
      i.push({
        date: new Date(z, k + 1, M),
        day: M,
        isCurrentMonth: !1,
        isToday: !1,
        isSelected: !1,
        isDisabled: !1
      });
    return i;
  }), f = v(() => {
    const z = l.locale || "default";
    return new Intl.DateTimeFormat(z, { month: "long" }).format(
      new Date(r.value, t.value)
    );
  }), s = () => {
    t.value === 0 ? (t.value = 11, r.value--) : t.value--;
  }, c = () => {
    t.value === 11 ? (t.value = 0, r.value++) : t.value++;
  }, g = (z) => {
    l.disabled || l.readonly || l.min && z < l.min || l.max && z > l.max || (e.value = z, a("update:modelValue", z), a("change", z));
  };
  return le(
    () => l.modelValue,
    (z) => {
      z && (e.value = z, t.value = z.getMonth(), r.value = z.getFullYear());
    }
  ), {
    currentDate: e,
    currentMonth: t,
    currentYear: r,
    weekdays: o,
    daysInMonth: n,
    monthName: f,
    prevMonth: s,
    nextMonth: c,
    selectDate: g
  };
}, as = R({
  base: "w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), rs = R({
  base: "flex items-center justify-between mb-4"
}), os = R({
  base: "text-lg font-medium"
}), ss = R({
  base: "flex items-center space-x-1"
}), ns = R({
  base: "p-1 rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
}), is = R({
  base: "grid grid-cols-7 mb-1"
}), us = R({
  base: "text-center text-sm font-medium text-gray-500 py-2"
}), ds = R({
  base: "grid grid-cols-7 gap-1"
}), Oe = R({
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
}), cs = {
  "update:modelValue": (l) => l === null || l instanceof Date,
  change: (l) => l === null || l instanceof Date
}, fs = ["disabled"], ps = ["disabled"], gs = ["onClick", "disabled"], vs = /* @__PURE__ */ Q({
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
  emits: cs,
  setup(l, { emit: a }) {
    const e = a, t = l, {
      currentYear: r,
      weekdays: o,
      daysInMonth: n,
      monthName: f,
      prevMonth: s,
      nextMonth: c,
      selectDate: g
    } = ls(t, e), z = v(() => {
      var k, d, b, y, i, u, w, h, S, M, I, O, V, T, E, L, P, F, B, A, D, N, j, K, U, ne;
      return {
        root: t.unstyled ? ((k = t.pt) == null ? void 0 : k.root) || "" : as({ unstyled: t.unstyled, class: (d = t.pt) == null ? void 0 : d.root }),
        header: t.unstyled ? ((b = t.pt) == null ? void 0 : b.header) || "" : rs({ class: (y = t.pt) == null ? void 0 : y.header }),
        title: t.unstyled ? ((i = t.pt) == null ? void 0 : i.title) || "" : os({ class: (u = t.pt) == null ? void 0 : u.title }),
        navigation: t.unstyled ? ((w = t.pt) == null ? void 0 : w.navigation) || "" : ss({ class: (h = t.pt) == null ? void 0 : h.navigation }),
        navButton: t.unstyled ? ((S = t.pt) == null ? void 0 : S.navButton) || "" : ns({ class: (M = t.pt) == null ? void 0 : M.navButton }),
        weekdays: t.unstyled ? ((I = t.pt) == null ? void 0 : I.weekdays) || "" : is({ class: (O = t.pt) == null ? void 0 : O.weekdays }),
        weekday: t.unstyled ? ((V = t.pt) == null ? void 0 : V.weekday) || "" : us({ class: (T = t.pt) == null ? void 0 : T.weekday }),
        days: t.unstyled ? ((E = t.pt) == null ? void 0 : E.days) || "" : ds({ class: (L = t.pt) == null ? void 0 : L.days }),
        day: t.unstyled ? ((P = t.pt) == null ? void 0 : P.day) || "" : Oe({ class: (F = t.pt) == null ? void 0 : F.day }),
        today: t.unstyled ? ((B = t.pt) == null ? void 0 : B.today) || "" : Oe({ isToday: !0, class: (A = t.pt) == null ? void 0 : A.today }).split(" ").filter((H) => !Oe().includes(H)).join(" "),
        selected: t.unstyled ? ((D = t.pt) == null ? void 0 : D.selected) || "" : Oe({ isSelected: !0, class: (N = t.pt) == null ? void 0 : N.selected }).split(" ").filter((H) => !Oe().includes(H)).join(" "),
        disabled: t.unstyled ? ((j = t.pt) == null ? void 0 : j.disabled) || "" : Oe({ isDisabled: !0, class: (K = t.pt) == null ? void 0 : K.disabled }).split(" ").filter((H) => !Oe().includes(H)).join(" "),
        adjacent: t.unstyled ? ((U = t.pt) == null ? void 0 : U.adjacent) || "" : Oe({ isAdjacent: !0, class: (ne = t.pt) == null ? void 0 : ne.adjacent }).split(" ").filter((H) => !Oe().includes(H)).join(" ")
      };
    });
    return (k, d) => (m(), x("div", {
      class: p(z.value.root)
    }, [
      $("div", {
        class: p(z.value.header)
      }, [
        $("div", {
          class: p(z.value.title)
        }, Y(C(f)) + " " + Y(C(r)), 3),
        $("div", {
          class: p(z.value.navigation)
        }, [
          $("button", {
            class: p(z.value.navButton),
            onClick: d[0] || (d[0] = //@ts-ignore
            (...b) => C(s) && C(s)(...b)),
            disabled: k.disabled || k.readonly
          }, d[2] || (d[2] = [
            $("svg", {
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
              $("path", { d: "m15 18-6-6 6-6" })
            ], -1)
          ]), 10, fs),
          $("button", {
            class: p(z.value.navButton),
            onClick: d[1] || (d[1] = //@ts-ignore
            (...b) => C(c) && C(c)(...b)),
            disabled: k.disabled || k.readonly
          }, d[3] || (d[3] = [
            $("svg", {
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
              $("path", { d: "m9 18 6-6-6-6" })
            ], -1)
          ]), 10, ps)
        ], 2)
      ], 2),
      $("div", {
        class: p(z.value.weekdays)
      }, [
        (m(!0), x(oe, null, de(C(o), (b, y) => (m(), x("div", {
          key: y,
          class: p(z.value.weekday)
        }, Y(b), 3))), 128))
      ], 2),
      $("div", {
        class: p(z.value.days)
      }, [
        (m(!0), x(oe, null, de(C(n), (b, y) => (m(), x("button", {
          key: y,
          class: p([
            z.value.day,
            b.isToday ? z.value.today : "",
            b.isSelected ? z.value.selected : "",
            b.isDisabled ? z.value.disabled : "",
            b.isCurrentMonth ? "" : z.value.adjacent
          ]),
          onClick: (i) => C(g)(b.date),
          disabled: b.isDisabled || k.disabled || k.readonly
        }, Y(b.day), 11, gs))), 128))
      ], 2)
    ], 2));
  }
}), Lt = te(vs), bs = (l, a) => {
  const e = W(!1), t = W(null), r = W(null), o = W(null), n = W(null), f = W(null), s = W(null), c = v(() => {
    let B = 0, A = 0, D = 0;
    if (l.modelValue) {
      if (l.modelValue instanceof Date)
        B = l.modelValue.getHours(), A = l.modelValue.getMinutes(), D = l.modelValue.getSeconds();
      else if (typeof l.modelValue == "string") {
        const N = l.modelValue.split(":");
        B = parseInt(N[0]) || 0, A = parseInt(N[1]) || 0, D = N[2] ? parseInt(N[2]) : 0;
      }
    }
    return { hours: B, minutes: A, seconds: D };
  }), g = W(c.value.hours), z = W(c.value.minutes), k = W(c.value.seconds), d = W(c.value.hours >= 12 ? "pm" : "am"), b = v(() => {
    const B = [], A = l.hourStep || 1, D = l.format === "12h", N = D ? 1 : 0, j = D ? 12 : 23;
    for (let K = N; K <= j; K += A)
      B.push(K);
    return B;
  }), y = v(() => {
    const B = [], A = l.minuteStep || 1;
    for (let D = 0; D <= 59; D += A)
      B.push(D);
    return B;
  }), i = v(() => {
    const B = [], A = l.secondStep || 1;
    for (let D = 0; D <= 59; D += A)
      B.push(D);
    return B;
  }), u = v(() => {
    if (!l.modelValue) return "";
    try {
      if (l.modelValue instanceof Date) {
        const B = {
          hour: "numeric",
          minute: "2-digit"
        };
        return l.showSeconds && (B.second = "2-digit"), l.format === "12h" ? B.hour12 = !0 : B.hour12 = !1, new Intl.DateTimeFormat("default", B).format(
          l.modelValue
        );
      } else
        return l.modelValue;
    } catch (B) {
      return console.error("Time formatting error:", B), l.modelValue instanceof Date ? l.modelValue.toLocaleTimeString() : l.modelValue;
    }
  }), w = () => {
    l.disabled || l.readonly || (e.value = !e.value, e.value && (g.value = c.value.hours, z.value = c.value.minutes, k.value = c.value.seconds, d.value = c.value.hours >= 12 ? "pm" : "am", setTimeout(() => {
      S();
    }, 50)));
  }, h = () => {
    e.value = !1;
  }, S = () => {
    const B = (A, D) => {
      if (!A) return;
      const j = A.querySelectorAll("div")[D];
      j && (A.scrollTop = j.offsetTop - A.offsetHeight / 2 + j.offsetHeight / 2);
    };
    if (l.format === "12h") {
      const A = g.value > 12 ? g.value - 12 : g.value === 0 ? 12 : g.value;
      B(o.value, b.value.indexOf(A));
    } else
      B(o.value, b.value.indexOf(g.value));
    B(
      n.value,
      y.value.indexOf(z.value)
    ), l.showSeconds && f.value && B(
      f.value,
      i.value.indexOf(k.value)
    ), l.format === "12h" && s.value && B(s.value, d.value === "am" ? 0 : 1);
  }, M = () => {
    let B = g.value;
    l.format === "12h" && (d.value === "pm" && B < 12 ? B += 12 : d.value === "am" && B === 12 && (B = 0));
    let A;
    if (l.modelValue instanceof Date) {
      const D = new Date(l.modelValue);
      D.setHours(B), D.setMinutes(z.value), D.setSeconds(l.showSeconds ? k.value : 0), A = D;
    } else {
      const D = B.toString().padStart(2, "0"), N = z.value.toString().padStart(2, "0");
      if (l.showSeconds) {
        const j = k.value.toString().padStart(2, "0");
        A = `${D}:${N}:${j}`;
      } else
        A = `${D}:${N}`;
    }
    a("update:modelValue", A), a("change", A);
  }, I = (B) => {
    g.value = B, M();
  }, O = (B) => {
    z.value = B, M();
  }, V = (B) => {
    k.value = B, M();
  }, T = (B) => {
    d.value = B, M();
  }, E = (B) => {
    B.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, L = (B) => {
    a("focus", B);
  }, P = (B) => {
    a("blur", B);
  }, F = (B) => {
    e.value && t.value && r.value && !t.value.contains(B.target) && !r.value.contains(B.target) && h();
  };
  return we(() => {
    document.addEventListener("mousedown", F);
  }), Le(() => {
    document.removeEventListener("mousedown", F);
  }), le(
    () => l.modelValue,
    (B) => {
      B ? (g.value = c.value.hours, z.value = c.value.minutes, k.value = c.value.seconds, d.value = c.value.hours >= 12 ? "pm" : "am") : h();
    }
  ), {
    isOpen: e,
    inputRef: t,
    dropdownRef: r,
    hourRef: o,
    minuteRef: n,
    secondRef: f,
    ampmRef: s,
    formattedValue: u,
    hourList: b,
    minuteList: y,
    secondList: i,
    selectedHour: g,
    selectedMinute: z,
    selectedSecond: k,
    selectedAmPm: d,
    toggleDropdown: w,
    closeDropdown: h,
    selectHour: I,
    selectMinute: O,
    selectSecond: V,
    selectAmPm: T,
    handleClear: E,
    handleFocus: L,
    handleBlur: P
  };
}, ms = R({
  base: "relative w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), ys = R({
  base: "relative flex items-center"
}), hs = R({
  base: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-900",
  variants: {
    error: {
      true: "border-red-500 focus:ring-red-500"
    }
  }
}), ws = R({
  base: "absolute right-3 cursor-pointer text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300"
}), xs = R({
  base: "absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800"
}), ks = R({
  base: "flex space-x-2 h-52 overflow-hidden"
}), Cs = R({
  base: "flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700"
}), kt = R({
  base: "cursor-pointer rounded-md px-3 py-2 text-center text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700",
  variants: {
    selected: {
      true: "bg-blue-100 font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
    }
  }
}), Ss = {
  "update:modelValue": (l) => l === null || typeof l == "string" || l instanceof Date,
  change: (l) => l === null || typeof l == "string" || l instanceof Date,
  focus: (l) => l instanceof FocusEvent,
  blur: (l) => l instanceof FocusEvent,
  clear: () => !0
}, zs = ["value", "placeholder", "disabled"], $s = ["onClick"], Bs = ["onClick"], Vs = ["onClick"], Is = /* @__PURE__ */ Q({
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
  emits: Ss,
  setup(l, { emit: a }) {
    const e = a, t = l, {
      isOpen: r,
      inputRef: o,
      dropdownRef: n,
      hourRef: f,
      minuteRef: s,
      secondRef: c,
      ampmRef: g,
      formattedValue: z,
      hourList: k,
      minuteList: d,
      secondList: b,
      selectedHour: y,
      selectedMinute: i,
      selectedSecond: u,
      selectedAmPm: w,
      toggleDropdown: h,
      selectHour: S,
      selectMinute: M,
      selectSecond: I,
      selectAmPm: O,
      handleClear: V,
      handleFocus: T,
      handleBlur: E
    } = bs(t, e), L = v(() => {
      var P, F, B, A, D, N, j, K, U, ne, H, q, ae, re, fe, ce, be, ye;
      return {
        root: t.unstyled ? ((P = t.pt) == null ? void 0 : P.root) || "" : ms({ unstyled: t.unstyled, class: (F = t.pt) == null ? void 0 : F.root }),
        inputWrapper: t.unstyled ? ((B = t.pt) == null ? void 0 : B.inputWrapper) || "" : ys({ class: (A = t.pt) == null ? void 0 : A.inputWrapper }),
        input: t.unstyled ? ((D = t.pt) == null ? void 0 : D.input) || "" : hs({ class: (N = t.pt) == null ? void 0 : N.input }),
        clearButton: t.unstyled ? ((j = t.pt) == null ? void 0 : j.clearButton) || "" : ws({ class: (K = t.pt) == null ? void 0 : K.clearButton }),
        dropdown: t.unstyled ? ((U = t.pt) == null ? void 0 : U.dropdown) || "" : xs({ class: (ne = t.pt) == null ? void 0 : ne.dropdown }),
        timeSelector: t.unstyled ? ((H = t.pt) == null ? void 0 : H.timeSelector) || "" : ks({ class: (q = t.pt) == null ? void 0 : q.timeSelector }),
        column: t.unstyled ? ((ae = t.pt) == null ? void 0 : ae.column) || "" : Cs({ class: (re = t.pt) == null ? void 0 : re.column }),
        item: t.unstyled ? ((fe = t.pt) == null ? void 0 : fe.item) || "" : kt({ class: (ce = t.pt) == null ? void 0 : ce.item }),
        itemSelected: t.unstyled ? ((be = t.pt) == null ? void 0 : be.itemSelected) || "" : kt({ selected: !0, class: (ye = t.pt) == null ? void 0 : ye.itemSelected }).split(" ").filter((me) => !kt().includes(me)).join(" ")
      };
    });
    return (P, F) => (m(), x("div", {
      class: p(L.value.root)
    }, [
      $("div", {
        class: p(L.value.inputWrapper),
        onClick: F[3] || (F[3] = //@ts-ignore
        (...B) => C(h) && C(h)(...B))
      }, [
        $("input", {
          ref_key: "inputRef",
          ref: o,
          type: "text",
          class: p(L.value.input),
          value: C(z),
          placeholder: P.placeholder,
          disabled: P.disabled,
          readonly: !0,
          onFocus: F[0] || (F[0] = //@ts-ignore
          (...B) => C(T) && C(T)(...B)),
          onBlur: F[1] || (F[1] = //@ts-ignore
          (...B) => C(E) && C(E)(...B))
        }, null, 42, zs),
        P.clearable && P.modelValue && !P.disabled && !P.readonly ? (m(), x("span", {
          key: 0,
          class: p(L.value.clearButton),
          onClick: F[2] || (F[2] = //@ts-ignore
          (...B) => C(V) && C(V)(...B))
        }, F[6] || (F[6] = [
          $("svg", {
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
            $("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }),
            $("line", {
              x1: "6",
              y1: "6",
              x2: "18",
              y2: "18"
            })
          ], -1)
        ]), 2)) : _("", !0)
      ], 2),
      C(r) ? (m(), x("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: n,
        class: p(L.value.dropdown)
      }, [
        $("div", {
          class: p(L.value.timeSelector)
        }, [
          $("div", {
            ref_key: "hourRef",
            ref: f,
            class: p(L.value.column)
          }, [
            (m(!0), x(oe, null, de(C(k), (B) => (m(), x("div", {
              key: `hour-${B}`,
              class: p([
                L.value.item,
                (P.format === "12h" ? (C(y) > 12 ? C(y) - 12 : C(y) === 0 ? 12 : C(y)) === B : C(y) === B) ? L.value.itemSelected : ""
              ]),
              onClick: (A) => C(S)(B)
            }, Y(B.toString().padStart(2, "0")), 11, $s))), 128))
          ], 2),
          $("div", {
            ref_key: "minuteRef",
            ref: s,
            class: p(L.value.column)
          }, [
            (m(!0), x(oe, null, de(C(d), (B) => (m(), x("div", {
              key: `minute-${B}`,
              class: p([
                L.value.item,
                C(i) === B ? L.value.itemSelected : ""
              ]),
              onClick: (A) => C(M)(B)
            }, Y(B.toString().padStart(2, "0")), 11, Bs))), 128))
          ], 2),
          P.showSeconds ? (m(), x("div", {
            key: 0,
            ref_key: "secondRef",
            ref: c,
            class: p(L.value.column)
          }, [
            (m(!0), x(oe, null, de(C(b), (B) => (m(), x("div", {
              key: `second-${B}`,
              class: p([
                L.value.item,
                C(u) === B ? L.value.itemSelected : ""
              ]),
              onClick: (A) => C(I)(B)
            }, Y(B.toString().padStart(2, "0")), 11, Vs))), 128))
          ], 2)) : _("", !0),
          P.format === "12h" ? (m(), x("div", {
            key: 1,
            ref_key: "ampmRef",
            ref: g,
            class: p(L.value.column)
          }, [
            $("div", {
              class: p([
                L.value.item,
                C(w) === "am" ? L.value.itemSelected : ""
              ]),
              onClick: F[4] || (F[4] = (B) => C(O)("am"))
            }, " AM ", 2),
            $("div", {
              class: p([
                L.value.item,
                C(w) === "pm" ? L.value.itemSelected : ""
              ]),
              onClick: F[5] || (F[5] = (B) => C(O)("pm"))
            }, " PM ", 2)
          ], 2)) : _("", !0)
        ], 2)
      ], 2)) : _("", !0)
    ], 2));
  }
}), nl = te(Is), Ms = (l, a) => {
  const e = W(!1), t = W(null), r = W(null), o = v(() => {
    if (!l.modelValue) return "";
    try {
      const d = l.locale || "default", b = {};
      return l.format ? (l.format.includes("yyyy") && (b.year = "numeric"), l.format.includes("MM") ? b.month = "2-digit" : l.format.includes("M") && (b.month = "numeric"), l.format.includes("dd") ? b.day = "2-digit" : l.format.includes("d") && (b.day = "numeric"), Object.keys(b).length === 0 && (b.year = "numeric", b.month = "2-digit", b.day = "2-digit")) : (b.year = "numeric", b.month = "2-digit", b.day = "2-digit"), new Intl.DateTimeFormat(d, b).format(l.modelValue);
    } catch (d) {
      return console.error("Date formatting error:", d), l.modelValue.toLocaleDateString();
    }
  }), n = () => {
    l.disabled || l.readonly || (e.value = !e.value);
  }, f = () => {
    e.value = !1;
  }, s = (d) => {
    d === null ? (a("update:modelValue", null), a("change", null)) : (a("update:modelValue", d), a("change", d)), f();
  }, c = (d) => {
    d.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, g = (d) => {
    a("focus", d);
  }, z = (d) => {
    a("blur", d);
  }, k = (d) => {
    e.value && t.value && r.value && !t.value.contains(d.target) && !r.value.contains(d.target) && f();
  };
  return we(() => {
    document.addEventListener("mousedown", k);
  }), Le(() => {
    document.removeEventListener("mousedown", k);
  }), le(
    () => l.modelValue,
    (d) => {
      d || f();
    }
  ), {
    isOpen: e,
    inputRef: t,
    dropdownRef: r,
    formattedValue: o,
    toggleDropdown: n,
    closeDropdown: f,
    handleDateChange: s,
    handleClear: c,
    handleFocus: g,
    handleBlur: z
  };
}, Ds = R({
  base: "relative w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), Ts = R({
  base: "relative flex items-center"
}), Rs = R({
  base: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-900",
  variants: {
    error: {
      true: "border-red-500 focus:ring-red-500"
    }
  }
}), Es = R({
  base: "absolute right-3 cursor-pointer text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300"
}), Ls = R({
  base: "absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800"
}), As = {
  "update:modelValue": (l) => l === null || l instanceof Date,
  change: (l) => l === null || l instanceof Date,
  focus: (l) => l instanceof FocusEvent,
  blur: (l) => l instanceof FocusEvent,
  clear: () => !0
}, Os = ["value", "placeholder", "disabled"], Ps = /* @__PURE__ */ Q({
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
  emits: As,
  setup(l, { emit: a }) {
    const e = a, t = l, {
      isOpen: r,
      inputRef: o,
      dropdownRef: n,
      formattedValue: f,
      toggleDropdown: s,
      handleDateChange: c,
      handleClear: g,
      handleFocus: z,
      handleBlur: k
    } = Ms(t, e), d = v(() => {
      var b, y, i, u, w, h, S, M, I, O;
      return {
        root: t.unstyled ? ((b = t.pt) == null ? void 0 : b.root) || "" : Ds({ unstyled: t.unstyled, class: (y = t.pt) == null ? void 0 : y.root }),
        inputWrapper: t.unstyled ? ((i = t.pt) == null ? void 0 : i.inputWrapper) || "" : Ts({ class: (u = t.pt) == null ? void 0 : u.inputWrapper }),
        input: t.unstyled ? ((w = t.pt) == null ? void 0 : w.input) || "" : Rs({ class: (h = t.pt) == null ? void 0 : h.input }),
        clearButton: t.unstyled ? ((S = t.pt) == null ? void 0 : S.clearButton) || "" : Es({ class: (M = t.pt) == null ? void 0 : M.clearButton }),
        dropdown: t.unstyled ? ((I = t.pt) == null ? void 0 : I.dropdown) || "" : Ls({ class: (O = t.pt) == null ? void 0 : O.dropdown })
      };
    });
    return (b, y) => {
      var i;
      return m(), x("div", {
        class: p(d.value.root)
      }, [
        $("div", {
          class: p(d.value.inputWrapper),
          onClick: y[3] || (y[3] = //@ts-ignore
          (...u) => C(s) && C(s)(...u))
        }, [
          $("input", {
            ref_key: "inputRef",
            ref: o,
            type: "text",
            class: p(d.value.input),
            value: C(f),
            placeholder: b.placeholder,
            disabled: b.disabled,
            readonly: !0,
            onFocus: y[0] || (y[0] = //@ts-ignore
            (...u) => C(z) && C(z)(...u)),
            onBlur: y[1] || (y[1] = //@ts-ignore
            (...u) => C(k) && C(k)(...u))
          }, null, 42, Os),
          b.clearable && b.modelValue && !b.disabled && !b.readonly ? (m(), x("span", {
            key: 0,
            class: p(d.value.clearButton),
            onClick: y[2] || (y[2] = //@ts-ignore
            (...u) => C(g) && C(g)(...u))
          }, y[4] || (y[4] = [
            $("svg", {
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
              $("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
              }),
              $("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
              })
            ], -1)
          ]), 2)) : _("", !0)
        ], 2),
        C(r) ? (m(), x("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: n,
          class: p(d.value.dropdown)
        }, [
          Te(C(Lt), {
            modelValue: b.modelValue,
            min: b.min,
            max: b.max,
            disabled: b.disabled,
            readonly: b.readonly,
            firstDayOfWeek: b.firstDayOfWeek,
            locale: b.locale,
            pt: (i = b.pt) == null ? void 0 : i.calendar,
            "onUpdate:modelValue": C(c)
          }, null, 8, ["modelValue", "min", "max", "disabled", "readonly", "firstDayOfWeek", "locale", "pt", "onUpdate:modelValue"])
        ], 2)) : _("", !0)
      ], 2);
    };
  }
}), js = te(Ps), Ws = (l, a) => {
  const e = W(!1), t = W("date"), r = W(null), o = W(null), n = W(l.modelValue || /* @__PURE__ */ new Date()), f = v(() => {
    if (!l.modelValue) return "";
    try {
      const u = l.locale || "default", w = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "2-digit"
      };
      return l.showSeconds && (w.second = "2-digit"), l.timeFormat === "12h" ? w.hour12 = !0 : w.hour12 = !1, new Intl.DateTimeFormat(u, w).format(l.modelValue);
    } catch (u) {
      return console.error("DateTime formatting error:", u), l.modelValue.toLocaleString();
    }
  }), s = () => {
    l.disabled || l.readonly || (e.value = !e.value, e.value && (n.value = l.modelValue || /* @__PURE__ */ new Date()));
  }, c = () => {
    e.value = !1;
  }, g = (u) => {
    t.value = u;
  }, z = (u) => {
    if (!u) return;
    const w = new Date(n.value);
    w.setFullYear(u.getFullYear()), w.setMonth(u.getMonth()), w.setDate(u.getDate()), n.value = w, a("update:modelValue", w), a("change", w), g("time");
  }, k = (u) => {
    if (!u) return;
    const w = new Date(n.value);
    if (u instanceof Date)
      w.setHours(u.getHours()), w.setMinutes(u.getMinutes()), w.setSeconds(u.getSeconds());
    else if (typeof u == "string") {
      const h = u.split(":");
      h.length >= 2 && (w.setHours(parseInt(h[0]) || 0), w.setMinutes(parseInt(h[1]) || 0), h.length >= 3 && w.setSeconds(parseInt(h[2]) || 0));
    }
    n.value = w, a("update:modelValue", w), a("change", w), c();
  }, d = (u) => {
    u.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, b = (u) => {
    a("focus", u);
  }, y = (u) => {
    a("blur", u);
  }, i = (u) => {
    e.value && r.value && o.value && !r.value.contains(u.target) && !o.value.contains(u.target) && c();
  };
  return we(() => {
    document.addEventListener("mousedown", i);
  }), Le(() => {
    document.removeEventListener("mousedown", i);
  }), le(
    () => l.modelValue,
    (u) => {
      u ? n.value = u : c();
    }
  ), {
    isOpen: e,
    activeTab: t,
    inputRef: r,
    dropdownRef: o,
    currentDateTime: n,
    formattedValue: f,
    toggleDropdown: s,
    closeDropdown: c,
    switchTab: g,
    handleDateChange: z,
    handleTimeChange: k,
    handleClear: d,
    handleFocus: b,
    handleBlur: y
  };
}, Fs = R({
  base: "relative w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), _s = R({
  base: "relative flex items-center"
}), Hs = R({
  base: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-900",
  variants: {
    error: {
      true: "border-red-500 focus:ring-red-500"
    }
  }
}), Ns = R({
  base: "absolute right-3 cursor-pointer text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300"
}), Gs = R({
  base: "absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800"
}), Ks = R({
  base: "mb-4 flex border-b border-gray-200 dark:border-gray-700"
}), Ct = R({
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
}), Ys = R({
  base: "mt-2"
}), Us = {
  "update:modelValue": (l) => l === null || l instanceof Date,
  change: (l) => l === null || l instanceof Date,
  focus: (l) => l instanceof FocusEvent,
  blur: (l) => l instanceof FocusEvent,
  clear: () => !0
}, Xs = ["value", "placeholder", "disabled"], qs = /* @__PURE__ */ Q({
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
  emits: Us,
  setup(l, { emit: a }) {
    const e = a, t = l, {
      isOpen: r,
      activeTab: o,
      inputRef: n,
      dropdownRef: f,
      currentDateTime: s,
      formattedValue: c,
      toggleDropdown: g,
      switchTab: z,
      handleDateChange: k,
      handleTimeChange: d,
      handleClear: b,
      handleFocus: y,
      handleBlur: i
    } = Ws(t, e), u = v(() => {
      var w, h, S, M, I, O, V, T, E, L, P, F, B, A, D, N, j, K;
      return {
        root: t.unstyled ? ((w = t.pt) == null ? void 0 : w.root) || "" : Fs({
          unstyled: t.unstyled,
          class: (h = t.pt) == null ? void 0 : h.root
        }),
        inputWrapper: t.unstyled ? ((S = t.pt) == null ? void 0 : S.inputWrapper) || "" : _s({ class: (M = t.pt) == null ? void 0 : M.inputWrapper }),
        input: t.unstyled ? ((I = t.pt) == null ? void 0 : I.input) || "" : Hs({ class: (O = t.pt) == null ? void 0 : O.input }),
        clearButton: t.unstyled ? ((V = t.pt) == null ? void 0 : V.clearButton) || "" : Ns({ class: (T = t.pt) == null ? void 0 : T.clearButton }),
        dropdown: t.unstyled ? ((E = t.pt) == null ? void 0 : E.dropdown) || "" : Gs({ class: (L = t.pt) == null ? void 0 : L.dropdown }),
        tabs: t.unstyled ? ((P = t.pt) == null ? void 0 : P.tabs) || "" : Ks({ class: (F = t.pt) == null ? void 0 : F.tabs }),
        tab: t.unstyled ? ((B = t.pt) == null ? void 0 : B.tab) || "" : Ct({ class: (A = t.pt) == null ? void 0 : A.tab }),
        activeTab: t.unstyled ? ((D = t.pt) == null ? void 0 : D.activeTab) || "" : Ct({ active: !0, class: (N = t.pt) == null ? void 0 : N.activeTab }).split(" ").filter((U) => !Ct().includes(U)).join(" "),
        tabContent: t.unstyled ? ((j = t.pt) == null ? void 0 : j.tabContent) || "" : Ys({ class: (K = t.pt) == null ? void 0 : K.tabContent })
      };
    });
    return (w, h) => {
      var S, M, I, O, V, T, E, L, P, F;
      return m(), x("div", {
        class: p(u.value.root)
      }, [
        $("div", {
          class: p(u.value.inputWrapper),
          onClick: h[3] || (h[3] = //@ts-ignore
          (...B) => C(g) && C(g)(...B))
        }, [
          $("input", {
            ref_key: "inputRef",
            ref: n,
            type: "text",
            class: p(u.value.input),
            value: C(c),
            placeholder: w.placeholder,
            disabled: w.disabled,
            readonly: !0,
            onFocus: h[0] || (h[0] = //@ts-ignore
            (...B) => C(y) && C(y)(...B)),
            onBlur: h[1] || (h[1] = //@ts-ignore
            (...B) => C(i) && C(i)(...B))
          }, null, 42, Xs),
          w.clearable && w.modelValue && !w.disabled && !w.readonly ? (m(), x("span", {
            key: 0,
            class: p(u.value.clearButton),
            onClick: h[2] || (h[2] = //@ts-ignore
            (...B) => C(b) && C(b)(...B))
          }, h[6] || (h[6] = [
            $("svg", {
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
              $("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
              }),
              $("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
              })
            ], -1)
          ]), 2)) : _("", !0)
        ], 2),
        C(r) ? (m(), x("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: f,
          class: p(u.value.dropdown)
        }, [
          $("div", {
            class: p(u.value.tabs)
          }, [
            $("div", {
              class: p([u.value.tab, C(o) === "date" ? u.value.activeTab : ""]),
              onClick: h[4] || (h[4] = (B) => C(z)("date"))
            }, " 日期 ", 2),
            $("div", {
              class: p([u.value.tab, C(o) === "time" ? u.value.activeTab : ""]),
              onClick: h[5] || (h[5] = (B) => C(z)("time"))
            }, " 时间 ", 2)
          ], 2),
          $("div", {
            class: p(u.value.tabContent)
          }, [
            Ye($("div", null, [
              Te(C(Lt), {
                modelValue: C(s),
                min: w.min,
                max: w.max,
                disabled: w.disabled,
                readonly: w.readonly,
                firstDayOfWeek: w.firstDayOfWeek,
                locale: w.locale,
                pt: (M = (S = w.pt) == null ? void 0 : S.datePicker) == null ? void 0 : M.calendar,
                "onUpdate:modelValue": C(k)
              }, null, 8, ["modelValue", "min", "max", "disabled", "readonly", "firstDayOfWeek", "locale", "pt", "onUpdate:modelValue"])
            ], 512), [
              [zt, C(o) === "date"]
            ]),
            Ye($("div", null, [
              Te(C(nl), {
                modelValue: C(s),
                disabled: w.disabled,
                readonly: w.readonly,
                format: w.timeFormat,
                hourStep: w.hourStep,
                minuteStep: w.minuteStep,
                secondStep: w.secondStep,
                showSeconds: w.showSeconds,
                pt: {
                  timeSelector: (O = (I = w.pt) == null ? void 0 : I.timePicker) == null ? void 0 : O.timeSelector,
                  column: (T = (V = w.pt) == null ? void 0 : V.timePicker) == null ? void 0 : T.column,
                  item: (L = (E = w.pt) == null ? void 0 : E.timePicker) == null ? void 0 : L.item,
                  itemSelected: (F = (P = w.pt) == null ? void 0 : P.timePicker) == null ? void 0 : F.itemSelected
                },
                "onUpdate:modelValue": C(d)
              }, null, 8, ["modelValue", "disabled", "readonly", "format", "hourStep", "minuteStep", "secondStep", "showSeconds", "pt", "onUpdate:modelValue"])
            ], 512), [
              [zt, C(o) === "time"]
            ])
          ], 2)
        ], 2)) : _("", !0)
      ], 2);
    };
  }
}), Zs = te(qs), Js = (l, a) => {
  const e = W(!1), t = W(null), r = W(null), o = v(() => {
    if (l.options && l.options.length > 0)
      return l.options;
    const d = [], b = l.start || "00:00", y = l.end || "23:59", i = l.step || 30, [u, w] = b.split(":").map(Number), [h, S] = y.split(":").map(Number), M = u * 60 + w, I = h * 60 + S;
    for (let O = M; O <= I; O += i) {
      const V = Math.floor(O / 60), T = O % 60;
      if (l.format === "12h") {
        const E = V >= 12 ? "PM" : "AM", L = V === 0 ? 12 : V > 12 ? V - 12 : V;
        d.push(
          `${L.toString().padStart(2, "0")}:${T.toString().padStart(2, "0")} ${E}`
        );
      } else
        d.push(
          `${V.toString().padStart(2, "0")}:${T.toString().padStart(2, "0")}`
        );
    }
    return d;
  }), n = () => {
    l.disabled || l.readonly || (e.value = !e.value);
  }, f = () => {
    e.value = !1;
  }, s = (d) => {
    a("update:modelValue", d), a("change", d), f();
  }, c = (d) => {
    d.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, g = (d) => {
    a("focus", d);
  }, z = (d) => {
    a("blur", d);
  }, k = (d) => {
    e.value && t.value && r.value && !t.value.contains(d.target) && !r.value.contains(d.target) && f();
  };
  return we(() => {
    document.addEventListener("mousedown", k);
  }), Le(() => {
    document.removeEventListener("mousedown", k);
  }), le(
    () => l.modelValue,
    (d) => {
      d || f();
    }
  ), {
    isOpen: e,
    inputRef: t,
    dropdownRef: r,
    timeOptions: o,
    toggleDropdown: n,
    selectOption: s,
    handleClear: c,
    handleFocus: g,
    handleBlur: z
  };
}, Qs = R({
  base: "relative w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), en = R({
  base: "relative flex items-center"
}), tn = R({
  base: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-900",
  variants: {
    error: {
      true: "border-red-500 focus:ring-red-500"
    }
  }
}), ln = R({
  base: "absolute right-3 cursor-pointer text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300"
}), an = R({
  base: "absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
}), rn = R({
  base: "max-h-60 overflow-auto py-1"
}), ot = R({
  base: "cursor-pointer px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700",
  variants: {
    selected: {
      true: "bg-blue-100 font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
    },
    disabled: {
      true: "cursor-not-allowed opacity-50 hover:bg-transparent dark:hover:bg-transparent"
    }
  }
}), on = {
  "update:modelValue": (l) => l === null || typeof l == "string",
  change: (l) => l === null || typeof l == "string",
  focus: (l) => l instanceof FocusEvent,
  blur: (l) => l instanceof FocusEvent,
  clear: () => !0
}, sn = ["value", "placeholder", "disabled"], nn = ["onClick"], un = /* @__PURE__ */ Q({
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
  emits: on,
  setup(l, { emit: a }) {
    const e = a, t = l, {
      isOpen: r,
      inputRef: o,
      dropdownRef: n,
      timeOptions: f,
      toggleDropdown: s,
      selectOption: c,
      handleClear: g,
      handleFocus: z,
      handleBlur: k
    } = Js(t, e), d = v(() => {
      var b, y, i, u, w, h, S, M, I, O, V, T, E, L, P, F;
      return {
        root: t.unstyled ? ((b = t.pt) == null ? void 0 : b.root) || "" : Qs({ unstyled: t.unstyled, class: (y = t.pt) == null ? void 0 : y.root }),
        inputWrapper: t.unstyled ? ((i = t.pt) == null ? void 0 : i.inputWrapper) || "" : en({ class: (u = t.pt) == null ? void 0 : u.inputWrapper }),
        input: t.unstyled ? ((w = t.pt) == null ? void 0 : w.input) || "" : tn({ class: (h = t.pt) == null ? void 0 : h.input }),
        clearButton: t.unstyled ? ((S = t.pt) == null ? void 0 : S.clearButton) || "" : ln({ class: (M = t.pt) == null ? void 0 : M.clearButton }),
        dropdown: t.unstyled ? ((I = t.pt) == null ? void 0 : I.dropdown) || "" : an({ class: (O = t.pt) == null ? void 0 : O.dropdown }),
        optionsList: t.unstyled ? ((V = t.pt) == null ? void 0 : V.optionsList) || "" : rn({ class: (T = t.pt) == null ? void 0 : T.optionsList }),
        option: t.unstyled ? ((E = t.pt) == null ? void 0 : E.option) || "" : ot({ class: (L = t.pt) == null ? void 0 : L.option }),
        optionSelected: t.unstyled ? ((P = t.pt) == null ? void 0 : P.optionSelected) || "" : ot({
          selected: !0,
          class: (F = t.pt) == null ? void 0 : F.optionSelected
        }).split(" ").filter((B) => !ot().includes(B)).join(" "),
        optionDisabled: t.unstyled ? "" : ot({ disabled: !0 }).split(" ").filter((B) => !ot().includes(B)).join(" ")
      };
    });
    return (b, y) => (m(), x("div", {
      class: p(d.value.root)
    }, [
      $("div", {
        class: p(d.value.inputWrapper),
        onClick: y[3] || (y[3] = //@ts-ignore
        (...i) => C(s) && C(s)(...i))
      }, [
        $("input", {
          ref_key: "inputRef",
          ref: o,
          type: "text",
          class: p(d.value.input),
          value: b.modelValue,
          placeholder: b.placeholder,
          disabled: b.disabled,
          readonly: !0,
          onFocus: y[0] || (y[0] = //@ts-ignore
          (...i) => C(z) && C(z)(...i)),
          onBlur: y[1] || (y[1] = //@ts-ignore
          (...i) => C(k) && C(k)(...i))
        }, null, 42, sn),
        b.clearable && b.modelValue && !b.disabled && !b.readonly ? (m(), x("span", {
          key: 0,
          class: p(d.value.clearButton),
          onClick: y[2] || (y[2] = //@ts-ignore
          (...i) => C(g) && C(g)(...i))
        }, y[4] || (y[4] = [
          $("svg", {
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
            $("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }),
            $("line", {
              x1: "6",
              y1: "6",
              x2: "18",
              y2: "18"
            })
          ], -1)
        ]), 2)) : _("", !0)
      ], 2),
      C(r) ? (m(), x("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: n,
        class: p(d.value.dropdown)
      }, [
        $("div", {
          class: p(d.value.optionsList)
        }, [
          (m(!0), x(oe, null, de(C(f), (i, u) => (m(), x("div", {
            key: u,
            class: p([
              d.value.option,
              b.modelValue === i ? d.value.optionSelected : "",
              b.disabled ? d.value.optionDisabled : ""
            ]),
            onClick: (w) => !b.disabled && C(c)(i)
          }, Y(i), 11, nn))), 128)),
          C(f).length === 0 ? (m(), x("div", {
            key: 0,
            class: p(d.value.option),
            style: { cursor: "default" }
          }, " 无可用选项 ", 2)) : _("", !0)
        ], 2)
      ], 2)) : _("", !0)
    ], 2));
  }
}), dn = te(un), cn = R({
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
}), fn = R({
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
}), pn = R({
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
}), gn = R({
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
}), vn = { key: 1 }, bn = /* @__PURE__ */ Q({
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
    const a = l, e = v(() => {
      var o, n;
      return a.unstyled ? ((o = a.pt) == null ? void 0 : o.root) || "" : cn({
        animation: a.animation,
        rounded: a.rounded,
        class: (n = a.pt) == null ? void 0 : n.root
      });
    }), t = v(() => {
      var o;
      return a.unstyled && ((o = a.pt) == null ? void 0 : o.content) || "";
    }), r = v(() => {
      const o = {};
      return a.width && (o.width = typeof a.width == "number" ? `${a.width}px` : a.width), a.height && (o.height = typeof a.height == "number" ? `${a.height}px` : a.height), o;
    });
    return (o, n) => o.loading ? (m(), x("div", {
      key: 0,
      class: p(e.value),
      style: se(r.value)
    }, [
      $("div", {
        class: p(t.value)
      }, [
        G(o.$slots, "skeleton")
      ], 2)
    ], 6)) : (m(), x("div", vn, [
      G(o.$slots, "default")
    ]));
  }
}), mn = /* @__PURE__ */ Q({
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
    const a = l, e = v(() => {
      var n, f;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.root) || "" : fn({
        rounded: a.rounded,
        class: (f = a.pt) == null ? void 0 : f.root
      });
    }), t = () => {
      var n, f;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.line) || "" : pn({
        animation: a.animation,
        rounded: a.rounded,
        class: (f = a.pt) == null ? void 0 : f.line
      });
    }, r = (n) => typeof a.widths == "string" || typeof a.widths == "number" ? a.widths : Array.isArray(a.widths) && a.widths.length > 0 ? a.widths[n % a.widths.length] : "100%", o = (n) => {
      const f = r(n), s = {
        width: typeof f == "number" ? `${f}px` : f
      };
      return a.lineHeight && (s.height = typeof a.lineHeight == "number" ? `${a.lineHeight}px` : a.lineHeight), s;
    };
    return (n, f) => (m(), x("div", {
      class: p(e.value)
    }, [
      (m(!0), x(oe, null, de(n.lines, (s) => (m(), x("div", {
        key: s,
        class: p(t()),
        style: se(o(s - 1))
      }, null, 6))), 128))
    ], 2));
  }
}), yn = /* @__PURE__ */ Q({
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
    const a = l, e = v(() => {
      var t, r;
      return a.unstyled ? ((t = a.pt) == null ? void 0 : t.root) || "" : gn({
        size: a.size,
        circle: a.circle,
        animation: a.animation,
        class: (r = a.pt) == null ? void 0 : r.root
      });
    });
    return (t, r) => (m(), x("div", {
      class: p(e.value)
    }, null, 2));
  }
}), hn = te(bn), wn = te(mn), xn = te(yn);
function kn(l = {}) {
  const a = W(l.modelValue || ""), e = (o) => a.value === o, t = (o) => {
    var n;
    a.value = o, (n = l.onChange) == null || n.call(l, o);
  };
  return le(
    () => l.modelValue,
    (o) => {
      o !== void 0 && o !== a.value && (a.value = o);
    }
  ), {
    activeTab: a,
    isActive: e,
    activate: t,
    onKeydown: (o, n) => {
      const f = n.indexOf(a.value);
      if (f === -1 && n.length > 0) {
        t(n[0]);
        return;
      }
      if (o.key === "ArrowRight" || o.key === "ArrowDown") {
        const s = (f + 1) % n.length;
        t(n[s]), o.preventDefault();
      } else if (o.key === "ArrowLeft" || o.key === "ArrowUp") {
        const s = (f - 1 + n.length) % n.length;
        t(n[s]), o.preventDefault();
      }
    }
  };
}
const Cn = R({
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
}), Sn = R({
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
}), zn = R({
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
}), $n = R({
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
}), Bn = {
  "update:modelValue": (l) => typeof l == "string" || typeof l == "number",
  change: (l) => typeof l == "string" || typeof l == "number"
}, Vn = ["aria-disabled"], In = ["aria-selected", "aria-disabled", "tabindex", "onClick"], Mn = /* @__PURE__ */ Q({
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
  emits: Bn,
  setup(l, { emit: a }) {
    const e = l, t = a, r = Xe(), o = v(() => {
      if (!r.default) return [];
      const u = r.default({}) || [], w = /* @__PURE__ */ new Set(), h = [];
      return u.filter((S) => S.type && (S.type.name === "TabItem" || typeof S.type == "object" && S.type.__name === "TabItem")).forEach((S) => {
        const M = S.props || {}, I = M.name;
        I && !w.has(I) ? (w.add(I), h.push({
          name: I,
          title: M.title || M.label || "",
          disabled: M.disabled || !1
        })) : console.warn(
          I ? `[Tabs] 发现重复的TabItem name: ${I}，只有第一个会被显示` : "[Tabs] TabItem必须提供name属性"
        );
      }), h;
    }), n = v(
      () => o.value.map((u) => u.name)
    ), { activeTab: f, isActive: s, activate: c, onKeydown: g } = kn({
      modelValue: e.modelValue,
      onChange: (u) => {
        t("update:modelValue", u), t("change", u);
      }
    });
    le(
      o,
      (u) => {
        u.length > 0 && !u.some((w) => s(w.name)) && c(u[0].name);
      },
      { immediate: !0 }
    );
    const z = (u, w) => {
      e.disabled || w || c(u);
    }, k = (u) => {
      g(u, n.value);
    }, d = v(() => {
      var u, w;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.container) || "" : Cn({
        placement: e.placement,
        fullWidth: e.fullWidth,
        disabled: e.disabled,
        class: (w = e.pt) == null ? void 0 : w.container
      });
    }), b = v(() => {
      var u, w;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.nav) || "" : Sn({
        variant: e.variant,
        placement: e.placement,
        fullWidth: e.fullWidth,
        size: e.size,
        class: (w = e.pt) == null ? void 0 : w.nav
      });
    }), y = (u, w) => {
      var h, S;
      return e.unstyled ? ((h = e.pt) == null ? void 0 : h.navItem) || "" : zn({
        variant: e.variant,
        active: s(u),
        disabled: e.disabled || w,
        size: e.size,
        fullWidth: e.fullWidth,
        class: (S = e.pt) == null ? void 0 : S.navItem
      });
    }, i = v(() => {
      var u, w;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.content) || "" : $n({
        placement: e.placement,
        class: (w = e.pt) == null ? void 0 : w.content
      });
    });
    return Ee("activeTab", f), (u, w) => (m(), x("div", {
      class: p(d.value),
      "aria-disabled": u.disabled,
      role: "tablist",
      onKeydown: k
    }, [
      $("div", {
        class: p(b.value)
      }, [
        (m(!0), x(oe, null, de(o.value, (h) => (m(), x("button", {
          key: h.name,
          class: p(y(h.name, h.disabled)),
          role: "tab",
          "aria-selected": C(s)(h.name),
          "aria-disabled": u.disabled || h.disabled,
          tabindex: C(s)(h.name) ? 0 : -1,
          onClick: (S) => z(h.name, h.disabled)
        }, Y(h.title), 11, In))), 128))
      ], 2),
      $("div", {
        class: p(i.value)
      }, [
        G(u.$slots, "default")
      ], 2)
    ], 42, Vn));
  }
}), Dn = /* @__PURE__ */ Q({
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
    const a = l, e = Re("activeTab", W("")), t = v(() => e.value === a.name), r = v(() => {
      var o;
      return a.unstyled && ((o = a.pt) == null ? void 0 : o.root) || "";
    });
    return (o, n) => Ye((m(), x("div", {
      class: p(r.value)
    }, [
      G(o.$slots, "default")
    ], 2)), [
      [zt, t.value]
    ]);
  }
}), Tn = te(Mn), Rn = te(Dn), En = R({
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
}), Ln = R({
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
}), An = R({
  base: "text-lg font-medium"
}), On = R({
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
}), Pn = R({
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
}), jn = {
  "update:collapsed": (l) => typeof l == "boolean",
  collapse: (l) => typeof l == "boolean"
}, Wn = /* @__PURE__ */ Q({
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
  emits: jn,
  setup(l, { emit: a }) {
    const e = l, t = a, r = W(e.defaultCollapsed);
    le(
      () => e.defaultCollapsed,
      (z) => {
        r.value = z;
      }
    );
    const o = () => {
      e.collapsible && (r.value = !r.value, t("update:collapsed", r.value), t("collapse", r.value));
    }, n = v(() => {
      var z, k;
      return e.unstyled ? ((z = e.pt) == null ? void 0 : z.root) || "" : En({
        variant: e.variant,
        padding: e.padding,
        radius: e.radius,
        bordered: e.bordered,
        class: (k = e.pt) == null ? void 0 : k.root
      });
    }), f = v(() => {
      var z, k;
      return e.unstyled ? ((z = e.pt) == null ? void 0 : z.header) || "" : Ln({
        padding: e.padding,
        collapsible: e.collapsible,
        class: (k = e.pt) == null ? void 0 : k.header
      });
    }), s = v(() => {
      var z, k;
      return e.unstyled ? ((z = e.pt) == null ? void 0 : z.title) || "" : An({
        class: (k = e.pt) == null ? void 0 : k.title
      });
    }), c = v(() => {
      var z, k;
      return e.unstyled ? ((z = e.pt) == null ? void 0 : z.content) || "" : On({
        padding: e.padding,
        collapsed: r.value,
        class: (k = e.pt) == null ? void 0 : k.content
      });
    }), g = v(() => {
      var z, k;
      return e.unstyled ? ((z = e.pt) == null ? void 0 : z.icon) || "" : Pn({
        collapsed: r.value,
        class: (k = e.pt) == null ? void 0 : k.icon
      });
    });
    return (z, k) => (m(), x("div", {
      class: p(n.value)
    }, [
      $("div", {
        class: p(f.value),
        onClick: o
      }, [
        $("div", {
          class: p(s.value)
        }, [
          G(z.$slots, "title", {}, () => [
            ve(Y(z.title), 1)
          ])
        ], 2),
        z.collapsible ? (m(), x("div", {
          key: 0,
          class: p(g.value)
        }, [
          G(z.$slots, "icon", {}, () => [
            k[0] || (k[0] = $("svg", {
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
              $("polyline", { points: "6 9 12 15 18 9" })
            ], -1))
          ])
        ], 2)) : _("", !0)
      ], 2),
      $("div", {
        class: p(c.value)
      }, [
        G(z.$slots, "default")
      ], 2)
    ], 2));
  }
}), Fn = te(Wn), _n = R({
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
}), Hn = R({
  base: "flex items-center gap-1"
}), Nn = R({
  base: ""
}), Gn = R({
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
}), Kn = R({
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
}), Yn = R({
  base: "ml-4 flex items-center text-gray-700 dark:text-gray-300"
}), Un = R({
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
}), Xn = R({
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
}), qn = {
  "update:modelValue": (l) => typeof l == "number",
  change: (l) => typeof l == "number"
}, Zn = ["disabled"], Jn = ["disabled"], Qn = ["onClick", "disabled", "aria-current"], ei = ["disabled"], ti = ["disabled"], li = ["max", "disabled"], ai = ["disabled"], ri = /* @__PURE__ */ Q({
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
  emits: qn,
  setup(l, { emit: a }) {
    const e = l, t = a, r = W(e.modelValue);
    le(
      () => e.modelValue,
      (h) => {
        h !== r.value && (r.value = h);
      }
    );
    const o = v({
      get: () => r.value,
      set: (h) => {
        r.value = h, t("update:modelValue", h), t("change", h);
      }
    }), n = W(""), f = v(() => e.disabled), s = v(() => {
      const h = e.totalPages, S = r.value, M = e.visiblePageCount;
      if (h <= M)
        return Array.from({ length: h }, (E, L) => L + 1);
      const I = Math.floor(M / 2);
      let O = S - I, V = S + I;
      O < 1 && (V = Math.min(h, V + (1 - O)), O = 1), V > h && (O = Math.max(1, O - (V - h)), V = h);
      const T = [];
      O > 1 && (T.push(1), O > 2 && T.push("..."));
      for (let E = O; E <= V; E++)
        T.push(E);
      return V < h && (V < h - 1 && T.push("..."), T.push(h)), T;
    }), c = (h) => {
      h >= 1 && h <= e.totalPages && h !== o.value && (o.value = h);
    }, g = () => {
      const h = Number(n.value);
      !isNaN(h) && h >= 1 && h <= e.totalPages && c(h), n.value = "";
    }, z = v(() => {
      var h, S;
      return e.unstyled ? ((h = e.pt) == null ? void 0 : h.root) || "" : _n({
        disabled: e.disabled,
        class: (S = e.pt) == null ? void 0 : S.root
      });
    }), k = v(() => {
      var h, S;
      return e.unstyled ? ((h = e.pt) == null ? void 0 : h.list) || "" : Hn({
        class: (S = e.pt) == null ? void 0 : S.list
      });
    }), d = v(() => {
      var h, S;
      return e.unstyled ? ((h = e.pt) == null ? void 0 : h.item) || "" : Nn({
        class: (S = e.pt) == null ? void 0 : S.item
      });
    }), b = (h, S) => {
      var M, I, O, V, T, E, L, P, F, B, A, D;
      return e.unstyled ? S === "first" ? ((M = e.pt) == null ? void 0 : M.firstButton) || "" : S === "prev" ? ((I = e.pt) == null ? void 0 : I.prevButton) || "" : S === "next" ? ((O = e.pt) == null ? void 0 : O.nextButton) || "" : S === "last" ? ((V = e.pt) == null ? void 0 : V.lastButton) || "" : h === o.value ? ((T = e.pt) == null ? void 0 : T.activeButton) || "" : ((E = e.pt) == null ? void 0 : E.button) || "" : Gn({
        variant: e.variant,
        size: e.size,
        shape: e.shape,
        active: h === o.value,
        disabled: e.disabled,
        class: h === o.value ? (L = e.pt) == null ? void 0 : L.activeButton : S === "first" ? (P = e.pt) == null ? void 0 : P.firstButton : S === "prev" ? (F = e.pt) == null ? void 0 : F.prevButton : S === "next" ? (B = e.pt) == null ? void 0 : B.nextButton : S === "last" ? (A = e.pt) == null ? void 0 : A.lastButton : (D = e.pt) == null ? void 0 : D.button
      });
    }, y = v(() => {
      var h, S;
      return e.unstyled ? ((h = e.pt) == null ? void 0 : h.ellipsis) || "" : Kn({
        size: e.size,
        class: (S = e.pt) == null ? void 0 : S.ellipsis
      });
    }), i = v(() => {
      var h, S;
      return e.unstyled ? ((h = e.pt) == null ? void 0 : h.jumper) || "" : Yn({
        class: (S = e.pt) == null ? void 0 : S.jumper
      });
    }), u = v(() => {
      var h, S;
      return e.unstyled ? ((h = e.pt) == null ? void 0 : h.jumperInput) || "" : Un({
        size: e.size,
        class: (S = e.pt) == null ? void 0 : S.jumperInput
      });
    }), w = v(() => {
      var h, S;
      return e.unstyled ? ((h = e.pt) == null ? void 0 : h.jumperButton) || "" : Xn({
        size: e.size,
        class: (S = e.pt) == null ? void 0 : S.jumperButton
      });
    });
    return (h, S) => (m(), x("nav", {
      class: p(z.value),
      "aria-label": "分页导航"
    }, [
      $("ul", {
        class: p(k.value)
      }, [
        h.showEndButtons ? (m(), x("li", {
          key: 0,
          class: p(d.value)
        }, [
          $("button", {
            class: p(b(1, "first")),
            onClick: S[0] || (S[0] = (M) => c(1)),
            disabled: f.value || o.value === 1,
            "aria-label": "首页"
          }, [
            G(h.$slots, "first-button", {}, () => [
              S[5] || (S[5] = $("svg", {
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
                $("polyline", { points: "11 17 6 12 11 7" }),
                $("polyline", { points: "18 17 13 12 18 7" })
              ], -1))
            ])
          ], 10, Zn)
        ], 2)) : _("", !0),
        h.showPrevNextButtons ? (m(), x("li", {
          key: 1,
          class: p(d.value)
        }, [
          $("button", {
            class: p(b(o.value - 1, "prev")),
            onClick: S[1] || (S[1] = (M) => c(o.value - 1)),
            disabled: f.value || o.value === 1,
            "aria-label": "上一页"
          }, [
            G(h.$slots, "prev-button", {}, () => [
              S[6] || (S[6] = $("svg", {
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
                $("polyline", { points: "15 18 9 12 15 6" })
              ], -1))
            ])
          ], 10, Jn)
        ], 2)) : _("", !0),
        (m(!0), x(oe, null, de(s.value, (M, I) => (m(), x(oe, { key: I }, [
          M !== "..." ? (m(), x("li", {
            key: 0,
            class: p(d.value)
          }, [
            $("button", {
              class: p(b(Number(M))),
              onClick: (O) => c(Number(M)),
              disabled: f.value,
              "aria-current": o.value === M ? "page" : void 0
            }, Y(M), 11, Qn)
          ], 2)) : (m(), x("li", {
            key: 1,
            class: p(d.value)
          }, [
            $("span", {
              class: p(y.value)
            }, "...", 2)
          ], 2))
        ], 64))), 128)),
        h.showPrevNextButtons ? (m(), x("li", {
          key: 2,
          class: p(d.value)
        }, [
          $("button", {
            class: p(b(o.value + 1, "next")),
            onClick: S[2] || (S[2] = (M) => c(o.value + 1)),
            disabled: f.value || o.value === h.totalPages,
            "aria-label": "下一页"
          }, [
            G(h.$slots, "next-button", {}, () => [
              S[7] || (S[7] = $("svg", {
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
                $("polyline", { points: "9 18 15 12 9 6" })
              ], -1))
            ])
          ], 10, ei)
        ], 2)) : _("", !0),
        h.showEndButtons ? (m(), x("li", {
          key: 3,
          class: p(d.value)
        }, [
          $("button", {
            class: p(b(h.totalPages, "last")),
            onClick: S[3] || (S[3] = (M) => c(h.totalPages)),
            disabled: f.value || o.value === h.totalPages,
            "aria-label": "尾页"
          }, [
            G(h.$slots, "last-button", {}, () => [
              S[8] || (S[8] = $("svg", {
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
                $("polyline", { points: "13 17 18 12 13 7" }),
                $("polyline", { points: "6 17 11 12 6 7" })
              ], -1))
            ])
          ], 10, ti)
        ], 2)) : _("", !0),
        h.showJumper ? (m(), x("li", {
          key: 4,
          class: p(i.value)
        }, [
          S[9] || (S[9] = $("span", null, "前往", -1)),
          Ye($("input", {
            class: p(u.value),
            type: "number",
            "onUpdate:modelValue": S[4] || (S[4] = (M) => n.value = M),
            min: "1",
            max: h.totalPages,
            disabled: f.value,
            onKeyup: Ie(g, ["enter"])
          }, null, 42, li), [
            [Tt, n.value]
          ]),
          S[10] || (S[10] = $("span", null, "页", -1)),
          $("button", {
            class: p(w.value),
            onClick: g,
            disabled: f.value
          }, " 跳转 ", 10, ai)
        ], 2)) : _("", !0)
      ], 2)
    ], 2));
  }
}), oi = te(ri), si = R({
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
}), ni = R({
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
}), ii = R({
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
}), ui = R({
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
}), di = {
  /**
   * 进度变化时触发
   */
  "update:value": (l) => typeof l == "number"
}, ci = (l) => {
  const a = v(() => {
    if (l.indeterminate)
      return 0;
    const r = Math.max(0, Math.min(l.value || 0, l.max || 100)), o = Math.max(1, l.max || 100);
    return Math.round(r / o * 100);
  }), e = v(() => `${a.value}%`), t = v(() => {
    if (!l.indeterminate)
      return `width: ${a.value}%`;
  });
  return {
    percentage: a,
    formattedPercentage: e,
    progressWidth: t
  };
}, fi = ["aria-valuenow"], pi = /* @__PURE__ */ Q({
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
  emits: di,
  setup(l) {
    const a = l, { percentage: e, formattedPercentage: t, progressWidth: r } = ci(a), o = v(() => {
      var c, g;
      return a.unstyled ? ((c = a.pt) == null ? void 0 : c.root) || "" : si({
        unstyled: a.unstyled,
        class: (g = a.pt) == null ? void 0 : g.root
      });
    }), n = v(() => {
      var c, g;
      return a.unstyled ? ((c = a.pt) == null ? void 0 : c.container) || "" : ni({
        size: a.size,
        shape: a.shape,
        unstyled: a.unstyled,
        class: (g = a.pt) == null ? void 0 : g.container
      });
    }), f = v(() => {
      var c, g;
      return a.unstyled ? ((c = a.pt) == null ? void 0 : c.bar) || "" : ii({
        variant: a.variant,
        striped: a.striped,
        animated: a.animated,
        indeterminate: a.indeterminate,
        unstyled: a.unstyled,
        class: (g = a.pt) == null ? void 0 : g.bar
      });
    }), s = v(() => {
      var c, g;
      return a.unstyled ? ((c = a.pt) == null ? void 0 : c.text) || "" : ui({
        variant: a.variant,
        unstyled: a.unstyled,
        class: (g = a.pt) == null ? void 0 : g.text
      });
    });
    return (c, g) => (m(), x("div", {
      class: p(o.value)
    }, [
      $("div", {
        class: p(n.value)
      }, [
        $("div", {
          class: p(f.value),
          style: se(C(r)),
          role: "progressbar",
          "aria-valuenow": c.indeterminate ? void 0 : C(e),
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        }, null, 14, fi)
      ], 2),
      c.showText ? (m(), x("div", {
        key: 0,
        class: p(s.value)
      }, [
        G(c.$slots, "text", {}, () => [
          ve(Y(C(t)), 1)
        ])
      ], 2)) : _("", !0)
    ], 2));
  }
}), gi = te(pi), vi = R({
  base: "flex",
  variants: {},
  defaultVariants: {}
}), bi = R({
  base: "flex flex-wrap items-center space-x-1 md:space-x-2",
  variants: {},
  defaultVariants: {}
}), mi = R({
  base: "mx-1 text-gray-400",
  variants: {},
  defaultVariants: {}
}), yi = R({
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
}), hi = R({
  base: "inline-flex items-center",
  variants: {},
  defaultVariants: {}
}), il = Symbol("breadcrumb"), wi = (l) => {
  const a = W(null);
  return Ee(il, {
    separator: l.separator || "/",
    separatorIcon: l.separatorIcon || ""
  }), {
    _ref: a
  };
}, xi = () => {
  const l = Re(
    il,
    {
      separator: "/",
      separatorIcon: ""
    }
  );
  return {
    _ref: W(null),
    breadcrumbContext: l
  };
}, ki = /* @__PURE__ */ Q({
  name: "VBreadcrumb",
  __name: "breadcrumb",
  props: {
    separator: { default: "/" },
    separatorIcon: { default: "" },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  setup(l, { expose: a }) {
    const e = l, { _ref: t } = wi(e), r = v(() => {
      var n, f;
      return e.unstyled ? ((n = e.pt) == null ? void 0 : n.root) || "" : vi({
        class: (f = e.pt) == null ? void 0 : f.root
      });
    }), o = v(() => {
      var n, f;
      return e.unstyled ? ((n = e.pt) == null ? void 0 : n.list) || "" : bi({
        class: (f = e.pt) == null ? void 0 : f.list
      });
    });
    return a({
      _ref: t
    }), (n, f) => (m(), x("nav", {
      class: p(r.value),
      ref_key: "_ref",
      ref: t
    }, [
      $("ol", {
        class: p(o.value)
      }, [
        G(n.$slots, "default")
      ], 2)
    ], 2));
  }
}), Ci = {
  click: (l) => l instanceof MouseEvent
}, Si = ["href"], zi = /* @__PURE__ */ Q({
  name: "VBreadcrumbItem",
  __name: "breadcrumb-item",
  props: {
    href: { default: "" },
    disabled: { type: Boolean, default: !1 },
    active: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: Ci,
  setup(l, { expose: a, emit: e }) {
    const t = e, r = l, { _ref: o, breadcrumbContext: n } = xi(), f = W(!1), s = () => {
      if (o.value) {
        const b = o.value.parentElement;
        b && (f.value = b.firstElementChild === o.value);
      }
    };
    we(() => {
      s();
    });
    const c = (b) => {
      if (r.disabled) {
        b.preventDefault();
        return;
      }
      t("click", b);
    }, g = v(() => {
      var b, y;
      return r.unstyled ? ((b = r.pt) == null ? void 0 : b.root) || "" : yi({
        disabled: r.disabled,
        active: r.active,
        class: (y = r.pt) == null ? void 0 : y.root
      });
    }), z = v(() => {
      var b;
      return r.unstyled ? ((b = r.pt) == null ? void 0 : b.separator) || "" : mi();
    }), k = v(() => {
      var b, y;
      return r.unstyled ? ((b = r.pt) == null ? void 0 : b.link) || "" : hi({
        class: (y = r.pt) == null ? void 0 : y.link
      });
    }), d = v(() => {
      var b;
      return r.unstyled && ((b = r.pt) == null ? void 0 : b.content) || "";
    });
    return a({
      _ref: o
    }), (b, y) => (m(), x("li", {
      class: p(g.value),
      ref_key: "_ref",
      ref: o
    }, [
      b.$slots.separator ? G(b.$slots, "separator", { key: 0 }) : C(n).separatorIcon ? (m(), x("span", {
        key: 1,
        class: p(z.value)
      }, [
        (m(), De(ut(C(n).separatorIcon)))
      ], 2)) : f.value ? _("", !0) : (m(), x("span", {
        key: 2,
        class: p(z.value)
      }, Y(C(n).separator), 3)),
      b.href && !b.disabled && !b.active ? (m(), x("a", {
        key: 3,
        href: b.href,
        class: p(k.value),
        onClick: c
      }, [
        G(b.$slots, "default")
      ], 10, Si)) : (m(), x("span", {
        key: 4,
        class: p(d.value)
      }, [
        G(b.$slots, "default")
      ], 2))
    ], 2));
  }
}), ul = te(ki, {
  BreadcrumbItem: zi
}), $i = ul.BreadcrumbItem, dl = R({
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
}), Bi = {
  "update:panels": (l) => Array.isArray(l),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  "resize-start": (l) => !0,
  resize: (l) => Array.isArray(l),
  "resize-end": (l) => Array.isArray(l),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  collapse: (l, a) => !0,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  expand: (l, a) => !0
}, Vi = {
  "update:size": (l) => typeof l == "string",
  "update:collapsed": (l) => typeof l == "boolean"
}, Ii = (l, a) => {
  const e = W(null), t = W([]), r = W([]), o = W(!1), n = W(0), f = W(-1), s = gl(l.panels || []), c = v(() => l.direction !== "vertical"), g = (I, O) => {
    t.value[O] = I;
  }, z = (I, O) => {
    r.value[O] = I;
  }, k = () => {
    if (!e.value || t.value.length === 0) return;
    const I = c.value ? e.value.clientWidth : e.value.clientHeight;
    if (!l.panels || l.panels.length === 0) {
      const O = `${100 / t.value.length}%`;
      t.value.forEach((V, T) => {
        s[T] = s[T] || {}, s[T].size = O, s[T].resizable = s[T].resizable !== !1;
      });
      return;
    }
    l.panels.forEach((O, V) => {
      if (V < t.value.length)
        if (s[V] = { ...O }, O.size && O.size.endsWith("%")) {
          const T = parseFloat(O.size) / 100, E = Math.floor(I * T);
          t.value[V].style[c.value ? "width" : "height"] = `${E}px`;
        } else O.size && (t.value[V].style[c.value ? "width" : "height"] = O.size);
    }), a("update:panels", [...s]);
  }, d = (I, O) => {
    var P, F;
    if (!l.resizable) return;
    const V = O, T = O + 1, E = ((P = s[V]) == null ? void 0 : P.resizable) !== !1, L = ((F = s[T]) == null ? void 0 : F.resizable) !== !1;
    if (!(!E && !L)) {
      if (I.preventDefault(), o.value = !0, f.value = O, I instanceof MouseEvent)
        n.value = c.value ? I.clientX : I.clientY;
      else {
        const B = I.touches[0];
        n.value = c.value ? B.clientX : B.clientY;
      }
      window.addEventListener("mousemove", b), window.addEventListener("mouseup", u), window.addEventListener("touchmove", y), window.addEventListener("touchend", w), a("resize-start", I);
    }
  }, b = (I) => {
    o.value && i(c.value ? I.clientX : I.clientY);
  }, y = (I) => {
    if (!o.value) return;
    const O = I.touches[0];
    i(c.value ? O.clientX : O.clientY);
  }, i = (I) => {
    var ne, H, q, ae;
    if (!o.value || !e.value) return;
    const O = f.value, V = O, T = O + 1;
    if (V < 0 || T >= t.value.length || !t.value[V] || !t.value[T])
      return;
    const E = t.value[V], L = t.value[T], P = I - n.value;
    if (P === 0) return;
    const F = c.value ? E.offsetWidth : E.offsetHeight, B = c.value ? L.offsetWidth : L.offsetHeight, A = (ne = s[V]) != null && ne.minSize ? M(
      s[V].minSize,
      e.value,
      c.value
    ) : 0, D = (H = s[T]) != null && H.minSize ? M(
      s[T].minSize,
      e.value,
      c.value
    ) : 0, N = (q = s[V]) != null && q.maxSize ? M(
      s[V].maxSize,
      e.value,
      c.value
    ) : 1 / 0, j = (ae = s[T]) != null && ae.maxSize ? M(
      s[T].maxSize,
      e.value,
      c.value
    ) : 1 / 0;
    let K = F + P, U = B - P;
    K < A ? (K = A, U = F + B - A) : K > N && (K = N, U = F + B - N), U < D ? (U = D, K = F + B - D) : U > j && (U = j, K = F + B - j), c.value ? (E.style.width = `${K}px`, L.style.width = `${U}px`) : (E.style.height = `${K}px`, L.style.height = `${U}px`), s[V] = {
      ...s[V],
      size: `${K}px`
    }, s[T] = {
      ...s[T],
      size: `${U}px`
    }, n.value = I, a("resize", [...s]);
  }, u = () => {
    h();
  }, w = () => {
    h();
  }, h = () => {
    o.value && (o.value = !1, f.value = -1, window.removeEventListener("mousemove", b), window.removeEventListener("mouseup", u), window.removeEventListener("touchmove", y), window.removeEventListener("touchend", w), a("resize-end", [...s]), a("update:panels", [...s]));
  }, S = (I) => {
    if (I < 0 || I >= t.value.length) return;
    const O = t.value[I], V = s[I];
    if (!V.collapsible) return;
    if (!V.collapsed)
      V._savedSize = V.size, c.value ? O.style.width = "0" : O.style.height = "0", V.size = "0", V.collapsed = !0, a("collapse", I, !0);
    else {
      const E = V._savedSize || "1fr";
      c.value ? O.style.width = E : O.style.height = E, V.size = E, V.collapsed = !1, a("expand", I, !1);
    }
    a("update:panels", [...s]);
  }, M = (I, O, V) => {
    if (I.endsWith("px"))
      return parseFloat(I);
    if (I.endsWith("%")) {
      const T = V ? O.clientWidth : O.clientHeight;
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
  return we(() => {
    k(), window.addEventListener("resize", k);
  }), Le(() => {
    window.removeEventListener("resize", k), window.removeEventListener("mousemove", b), window.removeEventListener("mouseup", u), window.removeEventListener("touchmove", y), window.removeEventListener("touchend", w);
  }), {
    rootRef: e,
    panelRefs: t,
    gutterRefs: r,
    isResizing: o,
    panelSizes: s,
    isHorizontal: c,
    registerPanel: g,
    registerGutter: z,
    onGutterMouseDown: d,
    toggleCollapse: S,
    initPanelSizes: k
  };
}, Mi = ["aria-orientation"], Di = ["onMousedown", "onTouchstart", "aria-label", "aria-controls", "onKeydown"], Ti = /* @__PURE__ */ Q({
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
  emits: Bi,
  setup(l, { expose: a, emit: e }) {
    const t = l, r = e, {
      rootRef: o,
      panelSizes: n,
      isHorizontal: f,
      registerPanel: s,
      registerGutter: c,
      onGutterMouseDown: g,
      toggleCollapse: z,
      initPanelSizes: k
    } = Ii(t, r), d = v(() => {
      var S;
      const u = Xe(), w = Object.keys(u).filter((M) => M.startsWith("panel-")).length / 2, h = ((S = t.panels) == null ? void 0 : S.length) || 0;
      return Math.max(w, h, 2);
    }), b = (u) => {
      const w = n[u] || {}, h = f.value ? "width" : "height", S = {};
      return w.size && (S[h] = w.size), w.collapsed && (S[h] = "0", S.overflow = "hidden"), S;
    }, y = (u, w, h) => {
      if (!t.resizable) return;
      u.preventDefault();
      const S = u.shiftKey ? 10 : 1, M = n[w], I = n[w + 1];
      if (!M || !I) return;
      const O = parseFloat(M.size || "0"), V = parseFloat(I.size || "0"), T = S * h;
      M.size = `${O + T}px`, I.size = `${V - T}px`, k();
    }, i = v(() => {
      var O, V, T, E, L, P;
      if (t.unstyled)
        return {
          root: ((O = t.pt) == null ? void 0 : O.root) || "",
          wrapper: ((V = t.pt) == null ? void 0 : V.wrapper) || "",
          panel: ((T = t.pt) == null ? void 0 : T.panel) || "",
          gutter: ((E = t.pt) == null ? void 0 : E.gutter) || "",
          gutterHandle: ((L = t.pt) == null ? void 0 : L.gutterHandle) || "",
          gutterIcon: ((P = t.pt) == null ? void 0 : P.gutterIcon) || ""
        };
      const { root: u, wrapper: w, panel: h, gutter: S, gutterHandle: M, gutterIcon: I } = dl({
        direction: t.direction,
        size: t.size,
        solid: t.solid,
        dotted: t.dotted,
        dashed: t.dashed,
        disabled: !t.resizable
      });
      return {
        root: u(),
        wrapper: w(),
        panel: h(),
        gutter: S(),
        gutterHandle: M(),
        gutterIcon: I()
      };
    });
    return a({
      toggleCollapse: z,
      initPanelSizes: k
    }), Ee("splitter", {
      registerPanel: s,
      direction: t.direction
    }), (u, w) => (m(), x("div", {
      ref_key: "rootRef",
      ref: o,
      class: p(i.value.root),
      role: "separator",
      "aria-orientation": t.direction === "vertical" ? "horizontal" : "vertical"
    }, [
      (m(!0), x(oe, null, de(d.value, (h, S) => (m(), x(oe, { key: S }, [
        S < d.value ? (m(), x("div", {
          key: 0,
          ref_for: !0,
          ref: (M) => M && C(s)(M, S),
          class: p(i.value.wrapper),
          style: se(b(S))
        }, [
          G(u.$slots, `panel-${S}`, {}, () => [
            $("div", {
              class: p(i.value.panel)
            }, [
              G(u.$slots, `panel-${S}-content`, {}, () => [
                ve("Panel " + Y(S + 1), 1)
              ])
            ], 2)
          ])
        ], 6)) : _("", !0),
        S < d.value - 1 ? (m(), x("div", {
          key: 1,
          ref_for: !0,
          ref: (M) => M && C(c)(M, S),
          class: p(i.value.gutter),
          onMousedown: (M) => C(g)(M, S),
          onTouchstart: (M) => C(g)(M, S),
          tabindex: "0",
          "aria-label": `调整${C(f) ? "宽度" : "高度"}`,
          "aria-controls": `panel-${S},panel-${S + 1}`,
          onKeydown: [
            Ie((M) => y(M, S, -1), ["left"]),
            Ie((M) => y(M, S, 1), ["right"]),
            Ie((M) => y(M, S, -1), ["up"]),
            Ie((M) => y(M, S, 1), ["down"])
          ]
        }, [
          G(u.$slots, `gutter-${S}`, {}, () => [
            $("div", {
              class: p(i.value.gutterHandle)
            }, [
              G(u.$slots, `gutter-${S}-handle`, {}, () => [
                C(f) ? (m(), x("svg", {
                  key: 0,
                  class: p(i.value.gutterIcon),
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round"
                }, w[0] || (w[0] = [
                  $("line", {
                    x1: "12",
                    y1: "5",
                    x2: "12",
                    y2: "19"
                  }, null, -1),
                  $("line", {
                    x1: "8",
                    y1: "9",
                    x2: "8",
                    y2: "15"
                  }, null, -1),
                  $("line", {
                    x1: "16",
                    y1: "9",
                    x2: "16",
                    y2: "15"
                  }, null, -1)
                ]), 2)) : (m(), x("svg", {
                  key: 1,
                  class: p(i.value.gutterIcon),
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round"
                }, w[1] || (w[1] = [
                  $("line", {
                    x1: "5",
                    y1: "12",
                    x2: "19",
                    y2: "12"
                  }, null, -1),
                  $("line", {
                    x1: "9",
                    y1: "8",
                    x2: "15",
                    y2: "8"
                  }, null, -1),
                  $("line", {
                    x1: "9",
                    y1: "16",
                    x2: "15",
                    y2: "16"
                  }, null, -1)
                ]), 2))
              ])
            ], 2)
          ])
        ], 42, Di)) : _("", !0)
      ], 64))), 128))
    ], 10, Mi));
  }
}), Ri = /* @__PURE__ */ Q({
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
  emits: Vi,
  setup(l, { emit: a }) {
    const e = l, t = a, r = W(null), o = Re("splitter", {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      registerPanel: (s, c) => {
      },
      direction: "horizontal",
      index: -1
    });
    le(
      () => e.size,
      (s) => {
        s !== void 0 && r.value && (o.direction === "horizontal" ? r.value.style.width = s : r.value.style.height = s);
      }
    ), le(
      () => e.collapsed,
      (s) => {
        t("update:collapsed", s);
      }
    ), we(() => {
      r.value && o.index >= 0 && o.registerPanel(r.value, o.index);
    });
    const n = v(() => {
      var s;
      return e.unstyled ? ((s = e.pt) == null ? void 0 : s.root) || "" : dl().panel();
    }), f = v(() => {
      var s;
      return e.unstyled ? ((s = e.pt) == null ? void 0 : s.content) || "" : "h-full w-full";
    });
    return (s, c) => (m(), x("div", {
      ref_key: "panelRef",
      ref: r,
      class: p(n.value)
    }, [
      $("div", {
        class: p(f.value)
      }, [
        G(s.$slots, "default")
      ], 2)
    ], 2));
  }
}), Ei = te(Ti), Li = te(Ri), Ai = (l, a) => {
  var b, y;
  const e = W(((b = l.modelValue) == null ? void 0 : b[0]) || null), t = W(((y = l.modelValue) == null ? void 0 : y[1]) || null), r = W((e.value || /* @__PURE__ */ new Date()).getMonth()), o = W((e.value || /* @__PURE__ */ new Date()).getFullYear()), n = W("start"), f = v(() => {
    const i = l.locale || "default", u = l.firstDayOfWeek || 0, w = [];
    for (let h = 0; h < 7; h++) {
      const S = (h + u) % 7;
      w.push(
        new Intl.DateTimeFormat(i, { weekday: "short" }).format(
          new Date(2021, 0, S + 3)
          // 2021-01-03 is a Sunday
        )
      );
    }
    return w;
  }), s = v(() => {
    const i = o.value, u = r.value, w = new Date(i, u, 1).getDay(), h = new Date(i, u + 1, 0).getDate(), S = l.firstDayOfWeek || 0, M = [], I = new Date(i, u, 0).getDate(), O = (w - S + 7) % 7;
    for (let E = I - O + 1; E <= I; E++)
      M.push({
        date: new Date(i, u - 1, E),
        day: E,
        isCurrentMonth: !1,
        isToday: !1,
        isSelected: !1,
        isRangeStart: !1,
        isRangeEnd: !1,
        isInRange: !1,
        isDisabled: !1
      });
    const V = /* @__PURE__ */ new Date();
    for (let E = 1; E <= h; E++) {
      const L = new Date(i, u, E), P = V.getDate() === E && V.getMonth() === u && V.getFullYear() === i, F = e.value && L.getDate() === e.value.getDate() && L.getMonth() === e.value.getMonth() && L.getFullYear() === e.value.getFullYear(), B = t.value && L.getDate() === t.value.getDate() && L.getMonth() === t.value.getMonth() && L.getFullYear() === t.value.getFullYear(), A = e.value && t.value && L > e.value && L < t.value, D = F || B, N = l.disabled || l.min && L < l.min || l.max && L > l.max;
      M.push({
        date: L,
        day: E,
        isCurrentMonth: !0,
        isToday: P,
        isSelected: D,
        isRangeStart: F,
        isRangeEnd: B,
        isInRange: A,
        isDisabled: N
      });
    }
    const T = 42 - M.length;
    for (let E = 1; E <= T; E++) {
      const L = new Date(i, u + 1, E), P = e.value && L.getDate() === e.value.getDate() && L.getMonth() === e.value.getMonth() && L.getFullYear() === e.value.getFullYear(), F = t.value && L.getDate() === t.value.getDate() && L.getMonth() === t.value.getMonth() && L.getFullYear() === t.value.getFullYear(), B = e.value && t.value && L > e.value && L < t.value, A = P || F;
      M.push({
        date: L,
        day: E,
        isCurrentMonth: !1,
        isToday: !1,
        isSelected: A,
        isRangeStart: P,
        isRangeEnd: F,
        isInRange: B,
        isDisabled: !1
      });
    }
    return M;
  }), c = v(() => {
    const i = l.locale || "default";
    return new Intl.DateTimeFormat(i, { month: "long" }).format(
      new Date(o.value, r.value)
    );
  }), g = () => {
    r.value === 0 ? (r.value = 11, o.value--) : r.value--;
  }, z = () => {
    r.value === 11 ? (r.value = 0, o.value++) : r.value++;
  }, k = (i) => {
    l.disabled || l.readonly || l.min && i < l.min || l.max && i > l.max || (n.value === "start" ? (e.value = i, t.value = null, n.value = "end") : (e.value && i < e.value ? (t.value = e.value, e.value = i) : t.value = i, n.value = "start"), a("update:modelValue", [e.value, t.value]), a("change", [e.value, t.value]));
  }, d = () => {
    e.value = null, t.value = null, n.value = "start", a("update:modelValue", [null, null]), a("change", [null, null]);
  };
  return le(
    () => l.modelValue,
    (i) => {
      i && (e.value = i[0], t.value = i[1], e.value && (r.value = e.value.getMonth(), o.value = e.value.getFullYear()), n.value = t.value ? "start" : "end");
    }
  ), {
    startDate: e,
    endDate: t,
    currentMonth: r,
    currentYear: o,
    selectionMode: n,
    weekdays: f,
    daysInMonth: s,
    monthName: c,
    prevMonth: g,
    nextMonth: z,
    selectDate: k,
    resetSelection: d
  };
}, Oi = R({
  base: "w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), Pi = R({
  base: "flex items-center justify-between mb-4"
}), ji = R({
  base: "text-lg font-medium"
}), Wi = R({
  base: "flex items-center space-x-1"
}), Fi = R({
  base: "p-1 rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
}), _i = R({
  base: "grid grid-cols-7 mb-1"
}), Hi = R({
  base: "text-center text-sm font-medium text-gray-500 py-2"
}), Ni = R({
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
}), Gi = {
  "update:modelValue": (l) => Array.isArray(l) && (l[0] === null || l[0] instanceof Date) && (l[1] === null || l[1] instanceof Date),
  change: (l) => Array.isArray(l) && (l[0] === null || l[0] instanceof Date) && (l[1] === null || l[1] instanceof Date)
}, Ki = {
  key: 0,
  class: "text-sm text-blue-500 ml-2"
}, Yi = ["disabled"], Ui = ["disabled"], Xi = ["onClick", "disabled"], qi = {
  key: 0,
  class: "mt-4 flex justify-between"
}, Zi = { class: "ml-1 font-medium" }, Ji = { class: "ml-1 font-medium" }, Qi = /* @__PURE__ */ Q({
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
  emits: Gi,
  setup(l, { emit: a }) {
    const e = a, t = l, {
      startDate: r,
      endDate: o,
      currentYear: n,
      selectionMode: f,
      weekdays: s,
      daysInMonth: c,
      monthName: g,
      prevMonth: z,
      nextMonth: k,
      selectDate: d,
      resetSelection: b
    } = Ai(t, e), y = (u) => {
      const w = t.locale || "default";
      return new Intl.DateTimeFormat(w).format(u);
    }, i = v(() => {
      var u, w, h, S, M, I, O, V, T, E, L, P, F, B, A, D, N, j, K, U, ne, H, q, ae, re, fe, ce, be, ye, me, ze, xe;
      return {
        root: t.unstyled ? ((u = t.pt) == null ? void 0 : u.root) || "" : Oi({ unstyled: t.unstyled, class: (w = t.pt) == null ? void 0 : w.root }),
        header: t.unstyled ? ((h = t.pt) == null ? void 0 : h.header) || "" : Pi({ class: (S = t.pt) == null ? void 0 : S.header }),
        title: t.unstyled ? ((M = t.pt) == null ? void 0 : M.title) || "" : ji({ class: (I = t.pt) == null ? void 0 : I.title }),
        navigation: t.unstyled ? ((O = t.pt) == null ? void 0 : O.navigation) || "" : Wi({ class: (V = t.pt) == null ? void 0 : V.navigation }),
        navButton: t.unstyled ? ((T = t.pt) == null ? void 0 : T.navButton) || "" : Fi({ class: (E = t.pt) == null ? void 0 : E.navButton }),
        weekdays: t.unstyled ? ((L = t.pt) == null ? void 0 : L.weekdays) || "" : _i({ class: (P = t.pt) == null ? void 0 : P.weekdays }),
        weekday: t.unstyled ? ((F = t.pt) == null ? void 0 : F.weekday) || "" : Hi({ class: (B = t.pt) == null ? void 0 : B.weekday }),
        days: t.unstyled ? ((A = t.pt) == null ? void 0 : A.days) || "" : Ni({ class: (D = t.pt) == null ? void 0 : D.days }),
        day: t.unstyled ? ((N = t.pt) == null ? void 0 : N.day) || "" : $e({ class: (j = t.pt) == null ? void 0 : j.day }),
        today: t.unstyled ? ((K = t.pt) == null ? void 0 : K.today) || "" : $e({ isToday: !0, class: (U = t.pt) == null ? void 0 : U.today }).split(" ").filter((pe) => !$e().includes(pe)).join(" "),
        selected: t.unstyled ? ((ne = t.pt) == null ? void 0 : ne.selected) || "" : $e({ isSelected: !0, class: (H = t.pt) == null ? void 0 : H.selected }).split(" ").filter((pe) => !$e().includes(pe)).join(" "),
        rangeStart: t.unstyled ? ((q = t.pt) == null ? void 0 : q.rangeStart) || "" : $e({
          isRangeStart: !0,
          class: (ae = t.pt) == null ? void 0 : ae.rangeStart
        }).split(" ").filter((pe) => !$e().includes(pe)).join(" "),
        rangeEnd: t.unstyled ? ((re = t.pt) == null ? void 0 : re.rangeEnd) || "" : $e({ isRangeEnd: !0, class: (fe = t.pt) == null ? void 0 : fe.rangeEnd }).split(" ").filter((pe) => !$e().includes(pe)).join(" "),
        inRange: t.unstyled ? ((ce = t.pt) == null ? void 0 : ce.inRange) || "" : $e({ isInRange: !0, class: (be = t.pt) == null ? void 0 : be.inRange }).split(" ").filter((pe) => !$e().includes(pe)).join(" "),
        disabled: t.unstyled ? ((ye = t.pt) == null ? void 0 : ye.disabled) || "" : $e({ isDisabled: !0, class: (me = t.pt) == null ? void 0 : me.disabled }).split(" ").filter((pe) => !$e().includes(pe)).join(" "),
        adjacent: t.unstyled ? ((ze = t.pt) == null ? void 0 : ze.adjacent) || "" : $e({ isAdjacent: !0, class: (xe = t.pt) == null ? void 0 : xe.adjacent }).split(" ").filter((pe) => !$e().includes(pe)).join(" ")
      };
    });
    return (u, w) => (m(), x("div", {
      class: p(i.value.root)
    }, [
      $("div", {
        class: p(i.value.header)
      }, [
        $("div", {
          class: p(i.value.title)
        }, [
          ve(Y(C(g)) + " " + Y(C(n)) + " ", 1),
          C(f) === "end" ? (m(), x("span", Ki, " (Select end date) ")) : _("", !0)
        ], 2),
        $("div", {
          class: p(i.value.navigation)
        }, [
          $("button", {
            class: p(i.value.navButton),
            onClick: w[0] || (w[0] = //@ts-ignore
            (...h) => C(z) && C(z)(...h)),
            disabled: u.disabled || u.readonly
          }, w[3] || (w[3] = [
            $("svg", {
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
              $("path", { d: "m15 18-6-6 6-6" })
            ], -1)
          ]), 10, Yi),
          $("button", {
            class: p(i.value.navButton),
            onClick: w[1] || (w[1] = //@ts-ignore
            (...h) => C(k) && C(k)(...h)),
            disabled: u.disabled || u.readonly
          }, w[4] || (w[4] = [
            $("svg", {
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
              $("path", { d: "m9 18 6-6-6-6" })
            ], -1)
          ]), 10, Ui)
        ], 2)
      ], 2),
      $("div", {
        class: p(i.value.weekdays)
      }, [
        (m(!0), x(oe, null, de(C(s), (h, S) => (m(), x("div", {
          key: S,
          class: p(i.value.weekday)
        }, Y(h), 3))), 128))
      ], 2),
      $("div", {
        class: p(i.value.days)
      }, [
        (m(!0), x(oe, null, de(C(c), (h, S) => (m(), x("button", {
          key: S,
          class: p([
            i.value.day,
            h.isToday ? i.value.today : "",
            h.isSelected ? i.value.selected : "",
            h.isRangeStart ? i.value.rangeStart : "",
            h.isRangeEnd ? i.value.rangeEnd : "",
            h.isInRange ? i.value.inRange : "",
            h.isDisabled ? i.value.disabled : "",
            h.isCurrentMonth ? "" : i.value.adjacent
          ]),
          onClick: (M) => C(d)(h.date),
          disabled: h.isDisabled || u.disabled || u.readonly
        }, Y(h.day), 11, Xi))), 128))
      ], 2),
      C(r) || C(o) ? (m(), x("div", qi, [
        $("div", null, [
          w[5] || (w[5] = $("span", { class: "text-sm text-gray-500" }, "Start:", -1)),
          $("span", Zi, Y(C(r) ? y(C(r)) : "-"), 1)
        ]),
        $("div", null, [
          w[6] || (w[6] = $("span", { class: "text-sm text-gray-500" }, "End:", -1)),
          $("span", Ji, Y(C(o) ? y(C(o)) : "-"), 1)
        ]),
        $("button", {
          class: "text-sm text-red-500 hover:text-red-700",
          onClick: w[2] || (w[2] = //@ts-ignore
          (...h) => C(b) && C(b)(...h))
        }, " Reset ")
      ])) : _("", !0)
    ], 2));
  }
}), eu = te(Qi), tu = R({
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
}), lu = R({
  base: "w-full"
}), au = R({
  base: ""
}), ru = R({
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
}), ou = R({
  base: "text-base font-medium"
}), su = R({
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
}), nu = R({
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
}), iu = R({
  base: "py-4 px-5"
}), uu = {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  "update:modelValue": (l) => !0,
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  change: (l) => !0
}, du = {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  click: (l) => !0,
  toggle: (l) => typeof l == "boolean"
}, cu = /* @__PURE__ */ Q({
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
  emits: uu,
  setup(l, { emit: a }) {
    const e = l, t = a, r = W(
      Array.isArray(e.modelValue) ? e.modelValue : e.modelValue ? [e.modelValue] : []
    );
    le(
      () => e.modelValue,
      (s) => {
        Array.isArray(s) ? r.value = s : s ? r.value = [s] : r.value = [];
      }
    );
    const o = v(() => {
      var s, c;
      return e.unstyled ? ((s = e.pt) == null ? void 0 : s.root) || "" : tu({
        variant: e.variant,
        radius: e.radius,
        bordered: e.bordered,
        class: (c = e.pt) == null ? void 0 : c.root
      });
    }), n = (s, c) => {
      let g = [...r.value];
      if (c ? e.multiple ? g.includes(s) || g.push(s) : g = [s] : g = g.filter((z) => z !== s), r.value = g, e.multiple)
        t("update:modelValue", g), t("change", g);
      else {
        const z = g.length > 0 ? g[0] : void 0;
        t("update:modelValue", z), t("change", z);
      }
    }, f = (s) => r.value.includes(s);
    return Ee("accordionContext", {
      disabled: v(() => e.disabled),
      animated: v(() => e.animated),
      toggleItem: n,
      isItemExpanded: f
    }), (s, c) => (m(), x("div", {
      class: p(o.value)
    }, [
      G(s.$slots, "default")
    ], 2));
  }
}), fu = ["aria-expanded", "aria-disabled"], pu = /* @__PURE__ */ Q({
  name: "AccordionItem",
  __name: "accordion-item",
  props: {
    value: {},
    header: {},
    disabled: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: du,
  setup(l, { emit: a }) {
    const e = l, t = a, r = Re("accordionContext", {
      disabled: v(() => !1),
      animated: v(() => !0),
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
      toggleItem: (i, u) => {
      },
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
      isItemExpanded: (i) => !1
    }), o = v(
      () => e.disabled || r.disabled.value
    ), n = v(() => r.isItemExpanded(e.value)), f = W(null);
    le(
      () => n.value,
      (i) => {
        if (!(!r.animated.value || !f.value))
          if (i) {
            const u = f.value;
            u.style.height = "0", u.style.height = `${u.scrollHeight}px`;
            const w = () => {
              n.value && (u.style.height = ""), u.removeEventListener("transitionend", w);
            };
            u.addEventListener("transitionend", w);
          } else {
            const u = f.value, w = u.offsetHeight;
            u.style.height = `${w}px`, u.style.height = "0";
          }
      }
    );
    const s = (i) => {
      if (o.value) return;
      t("click", i);
      const u = !n.value;
      r.toggleItem(e.value, u), t("toggle", u);
    }, c = v(() => {
      var i, u;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.root) || "" : lu({
        class: (u = e.pt) == null ? void 0 : u.root
      });
    }), g = v(() => {
      var i, u;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.header) || "" : au({
        class: (u = e.pt) == null ? void 0 : u.header
      });
    }), z = v(() => {
      var i, u;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.trigger) || "" : ru({
        disabled: o.value,
        class: (u = e.pt) == null ? void 0 : u.trigger
      });
    }), k = v(() => {
      var i, u;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.title) || "" : ou({
        class: (u = e.pt) == null ? void 0 : u.title
      });
    }), d = v(() => {
      var i, u;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.icon) || "" : su({
        expanded: n.value,
        class: (u = e.pt) == null ? void 0 : u.icon
      });
    }), b = v(() => {
      var i, u;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.content) || "" : nu({
        animated: r.animated.value,
        expanded: n.value,
        class: (u = e.pt) == null ? void 0 : u.content
      });
    }), y = v(() => {
      var i, u;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.contentInner) || "" : iu({
        class: (u = e.pt) == null ? void 0 : u.contentInner
      });
    });
    return we(() => {
      f.value && !n.value && (f.value.style.height = "0");
    }), (i, u) => (m(), x("div", {
      class: p(c.value)
    }, [
      $("div", {
        class: p(g.value)
      }, [
        $("button", {
          type: "button",
          class: p(z.value),
          "aria-expanded": n.value,
          "aria-disabled": o.value,
          onClick: s
        }, [
          $("div", {
            class: p(k.value)
          }, [
            G(i.$slots, "header", {}, () => [
              ve(Y(i.header), 1)
            ])
          ], 2),
          $("div", {
            class: p(d.value)
          }, [
            G(i.$slots, "icon", {}, () => [
              u[0] || (u[0] = $("svg", {
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
                $("polyline", { points: "6 9 12 15 18 9" })
              ], -1))
            ])
          ], 2)
        ], 10, fu)
      ], 2),
      $("div", {
        class: p(b.value),
        ref_key: "contentEl",
        ref: f
      }, [
        $("div", {
          class: p(y.value)
        }, [
          G(i.$slots, "default")
        ], 2)
      ], 2)
    ], 2));
  }
}), gu = te(cu), vu = te(pu), bu = R({
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
}), mu = { key: 0 }, yu = ["onClick"], hu = ["placeholder", "disabled", "readonly", "autofocus", "onKeydown"], wu = { key: 0 }, xu = /* @__PURE__ */ Q({
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
    const e = l, t = a, r = W(null), o = W(""), n = W(!1), f = v(() => e.unstyled ? {
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
    } : bu({
      size: e.size,
      status: e.status,
      disabled: e.disabled
    })), s = () => {
      if (!o.value || e.disabled || e.readonly || e.maxCount && e.modelValue.length >= e.maxCount) return;
      const d = [...e.modelValue];
      d.includes(o.value) || (d.push(o.value), t("update:modelValue", d), t("change", d), t("add", o.value)), o.value = "";
    }, c = (d) => {
      if (e.disabled || e.readonly) return;
      const b = [...e.modelValue], y = b[d];
      b.splice(d, 1), t("update:modelValue", b), t("change", b), t("remove", y, d);
    }, g = () => {
      if (o.value === "" && e.modelValue.length > 0 && !e.disabled && !e.readonly) {
        const d = [...e.modelValue], b = d.length - 1, y = d[b];
        d.pop(), t("update:modelValue", d), t("change", d), t("remove", y, b);
      }
    }, z = (d) => {
      n.value = !0, t("focus", d);
    }, k = (d) => {
      n.value = !1, o.value && s(), t("blur", d);
    };
    return le(
      () => e.autofocus,
      (d) => {
        d && r.value && r.value.focus();
      },
      { immediate: !0 }
    ), (d, b) => {
      var y, i;
      return m(), x("div", {
        class: p(f.value.root())
      }, [
        $("div", {
          class: p(f.value.wrapper())
        }, [
          d.$slots.prefix || d.prefixIcon ? (m(), x("div", {
            key: 0,
            class: p(f.value.prefix())
          }, [
            G(d.$slots, "prefix", {}, () => [
              d.prefixIcon ? (m(), x("span", mu, Y(d.prefixIcon), 1)) : _("", !0)
            ])
          ], 2)) : _("", !0),
          (m(!0), x(oe, null, de(d.modelValue, (u, w) => (m(), x("div", {
            key: w,
            class: p(f.value.tag())
          }, [
            ve(Y(u) + " ", 1),
            d.closable && !d.disabled && !d.readonly ? (m(), x("span", {
              key: 0,
              class: p(f.value.tagClose()),
              onClick: (h) => c(w)
            }, " × ", 10, yu)) : _("", !0)
          ], 2))), 128)),
          Ye($("input", {
            ref_key: "inputRef",
            ref: r,
            class: p(f.value.input()),
            type: "text",
            placeholder: (y = d.modelValue) != null && y.length ? "" : d.placeholder,
            disabled: d.disabled,
            readonly: d.readonly,
            autofocus: d.autofocus,
            "onUpdate:modelValue": b[0] || (b[0] = (u) => o.value = u),
            onKeydown: [
              Ie(Me(s, ["prevent"]), ["enter"]),
              Ie(g, ["backspace"])
            ],
            onBlur: k,
            onFocus: z
          }, null, 42, hu), [
            [vl, o.value]
          ]),
          d.$slots.suffix || d.suffixIcon ? (m(), x("div", {
            key: 1,
            class: p(f.value.suffix())
          }, [
            G(d.$slots, "suffix", {}, () => [
              d.suffixIcon ? (m(), x("span", wu, Y(d.suffixIcon), 1)) : _("", !0)
            ])
          ], 2)) : _("", !0),
          d.showCount && d.maxCount ? (m(), x("span", {
            key: 2,
            class: p(f.value.count())
          }, Y(((i = d.modelValue) == null ? void 0 : i.length) || 0) + "/" + Y(d.maxCount), 3)) : _("", !0)
        ], 2)
      ], 2);
    };
  }
}), ku = te(xu), Ke = R({
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
}), Cu = {
  "update:visible": (l) => typeof l == "boolean",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  select: (l, a) => !0,
  show: () => !0,
  hide: () => !0
}, Su = {
  click: (l) => l instanceof MouseEvent
}, zu = (l, a) => {
  const e = W(l.visible || !1), t = W(null), r = W(null), o = `dropdown-${Math.random().toString(36).slice(2, 11)}`;
  let n = null, f = null;
  le(
    () => l.visible,
    (b) => {
      b !== void 0 && (e.value = b);
    }
  ), le(
    () => e.value,
    (b) => {
      a("update:visible", b), a(b ? "show" : "hide");
    }
  );
  const s = () => {
    l.disabled || ((l.trigger === "hover" || l.trigger === "focus") && l.showDelay ? (clearTimeout(f), n = window.setTimeout(() => {
      e.value = !0;
    }, l.showDelay)) : e.value = !0);
  }, c = () => {
    l.trigger !== "manual" && ((l.trigger === "hover" || l.trigger === "focus") && l.hideDelay ? (clearTimeout(n), f = window.setTimeout(() => {
      e.value = !1;
    }, l.hideDelay)) : e.value = !1);
  }, g = () => {
    l.disabled || l.trigger !== "manual" && (e.value = !e.value);
  }, z = (b) => {
    if (!l.closeOnClickOutside || !e.value || l.trigger === "manual") return;
    const y = b.target;
    r.value && !r.value.contains(y) && t.value && !t.value.contains(y) && c();
  }, k = (b, y) => {
    l.closeOnSelect && l.trigger !== "manual" && c(), a("select", b, y);
  }, d = (b, y) => {
    b.disabled || b.divider || b.value !== void 0 && k(b.value, y);
  };
  return we(() => {
    l.closeOnClickOutside && document.addEventListener("click", z);
  }), Le(() => {
    document.removeEventListener("click", z), n && clearTimeout(n), f && clearTimeout(f);
  }), {
    isVisible: e,
    triggerRef: t,
    contentRef: r,
    dropdownId: o,
    show: s,
    hide: c,
    toggle: g,
    handleItemClick: k,
    handleOptionClick: d
  };
}, $u = ["aria-expanded", "aria-controls"], Bu = ["id"], Vu = ["onClick", "aria-disabled"], Iu = /* @__PURE__ */ Q({
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
  emits: Cu,
  setup(l, { expose: a, emit: e }) {
    const t = l, r = e, {
      isVisible: o,
      triggerRef: n,
      contentRef: f,
      dropdownId: s,
      show: c,
      hide: g,
      toggle: z,
      handleItemClick: k,
      handleOptionClick: d
    } = zu(t, r), b = v(() => {
      var E, L, P, F, B, A, D, N, j, K;
      if (t.unstyled)
        return {
          root: ((E = t.pt) == null ? void 0 : E.root) || "",
          trigger: ((L = t.pt) == null ? void 0 : L.trigger) || "",
          content: ((P = t.pt) == null ? void 0 : P.content) || "",
          arrow: ((F = t.pt) == null ? void 0 : F.arrow) || "",
          menu: ((B = t.pt) == null ? void 0 : B.menu) || "",
          menuItem: ((A = t.pt) == null ? void 0 : A.menuItem) || "",
          menuItemSelected: ((D = t.pt) == null ? void 0 : D.menuItemSelected) || "",
          menuItemDisabled: ((N = t.pt) == null ? void 0 : N.menuItemDisabled) || "",
          menuItemIcon: ((j = t.pt) == null ? void 0 : j.menuItemIcon) || "",
          menuDivider: ((K = t.pt) == null ? void 0 : K.menuDivider) || ""
        };
      const {
        root: y,
        trigger: i,
        content: u,
        arrow: w,
        menu: h,
        menuItem: S,
        menuItemSelected: M,
        menuItemActive: I,
        menuItemDisabled: O,
        menuItemIcon: V,
        menuDivider: T
      } = Ke({
        placement: t.placement,
        size: t.size,
        disabled: t.disabled
      });
      return {
        root: y(),
        trigger: i(),
        content: u(),
        arrow: w(),
        menu: h(),
        menuItem: S(),
        menuItemSelected: M(),
        menuItemActive: I(),
        menuItemDisabled: O(),
        menuItemIcon: V(),
        menuDivider: T()
      };
    });
    return a({
      show: c,
      hide: g,
      toggle: z
    }), Ee("dropdown", {
      handleItemClick: k,
      closeOnSelect: t.closeOnSelect
    }), (y, i) => (m(), x("div", {
      class: p(b.value.root)
    }, [
      $("div", {
        ref_key: "triggerRef",
        ref: n,
        class: p(b.value.trigger),
        onClick: i[0] || (i[0] = (u) => y.trigger === "click" && C(z)()),
        onMouseenter: i[1] || (i[1] = (u) => y.trigger === "hover" && C(c)()),
        onMouseleave: i[2] || (i[2] = (u) => y.trigger === "hover" && C(g)()),
        onFocus: i[3] || (i[3] = (u) => y.trigger === "focus" && C(c)()),
        onBlur: i[4] || (i[4] = (u) => y.trigger === "focus" && C(g)()),
        onKeydown: [
          i[5] || (i[5] = Ie(
            //@ts-ignore
            (...u) => C(g) && C(g)(...u),
            ["esc"]
          )),
          i[6] || (i[6] = Ie(Me((u) => y.trigger === "click" && C(z)(), ["prevent"]), ["space"])),
          i[7] || (i[7] = Ie((u) => y.trigger === "click" && C(z)(), ["enter"]))
        ],
        tabindex: "0",
        role: "button",
        "aria-haspopup": !0,
        "aria-expanded": C(o),
        "aria-controls": C(s)
      }, [
        G(y.$slots, "trigger")
      ], 42, $u),
      Te(dt, { name: "dropdown" }, {
        default: Ue(() => [
          C(o) ? (m(), x("div", {
            key: 0,
            ref_key: "contentRef",
            ref: f,
            id: C(s),
            class: p(b.value.content),
            onMouseenter: i[8] || (i[8] = (u) => y.trigger === "hover" && C(c)()),
            onMouseleave: i[9] || (i[9] = (u) => y.trigger === "hover" && C(g)()),
            role: "menu"
          }, [
            y.arrow ? (m(), x("div", {
              key: 0,
              class: p(b.value.arrow)
            }, null, 2)) : _("", !0),
            $("div", {
              class: p(b.value.menu)
            }, [
              y.options && y.options.length ? (m(!0), x(oe, { key: 0 }, de(y.options, (u, w) => (m(), x(oe, { key: w }, [
                u.divider ? (m(), x("div", {
                  key: 0,
                  class: p(b.value.menuDivider),
                  role: "separator"
                }, null, 2)) : (m(), x("div", {
                  key: 1,
                  class: p([
                    b.value.menuItem,
                    u.disabled && b.value.menuItemDisabled
                  ]),
                  onClick: (h) => !u.disabled && C(d)(u, h),
                  role: "menuitem",
                  "aria-disabled": u.disabled
                }, [
                  u.icon ? (m(), x("span", {
                    key: 0,
                    class: p(b.value.menuItemIcon)
                  }, Y(u.icon), 3)) : _("", !0),
                  $("span", null, Y(u.label), 1)
                ], 10, Vu))
              ], 64))), 128)) : G(y.$slots, "default", { key: 1 })
            ], 2)
          ], 42, Bu)) : _("", !0)
        ]),
        _: 3
      })
    ], 2));
  }
}), Mu = ["aria-disabled"], Du = /* @__PURE__ */ Q({
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
  emits: Su,
  setup(l, { emit: a }) {
    const e = l, t = a, r = Re("dropdown", {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      handleItemClick: (g, z) => {
      },
      closeOnSelect: !0
    }), o = (g) => {
      t("click", g), e.value !== void 0 && r.handleItemClick(e.value, g);
    }, n = (g) => {
      const z = new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0,
        view: window
      });
      t("click", z), e.value !== void 0 && r.handleItemClick(e.value, z);
    }, f = v(() => {
      var g, z;
      return e.unstyled ? ((g = e.pt) == null ? void 0 : g.root) || "" : [
        Ke().menuItem(),
        e.active && Ke().menuItemActive(),
        e.disabled && Ke().menuItemDisabled(),
        (z = e.pt) == null ? void 0 : z.root
      ].filter(Boolean).join(" ");
    }), s = v(() => {
      var g;
      return e.unstyled ? ((g = e.pt) == null ? void 0 : g.icon) || "" : Ke().menuItemIcon();
    }), c = v(() => {
      var g;
      return e.unstyled ? ((g = e.pt) == null ? void 0 : g.root) || "" : Ke().menuDivider();
    });
    return (g, z) => g.divider ? (m(), x("div", {
      key: 1,
      role: "separator",
      class: p(c.value)
    }, null, 2)) : (m(), x("div", {
      key: 0,
      class: p(f.value),
      role: "menuitem",
      tabindex: "0",
      "aria-disabled": g.disabled,
      onClick: z[0] || (z[0] = (k) => !g.disabled && o(k)),
      onKeydown: [
        z[1] || (z[1] = Ie((k) => !g.disabled && n(), ["enter"])),
        z[2] || (z[2] = Ie(Me((k) => !g.disabled && n(), ["prevent"]), ["space"]))
      ]
    }, [
      G(g.$slots, "icon", {}, () => [
        g.icon ? (m(), x("span", {
          key: 0,
          class: p(s.value)
        }, Y(g.icon), 3)) : _("", !0)
      ]),
      G(g.$slots, "default", {}, () => [
        ve(Y(g.label), 1)
      ])
    ], 42, Mu));
  }
}), Tu = /* @__PURE__ */ Q({
  __name: "DropdownDivider",
  props: {
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  setup(l) {
    const a = l, e = v(() => {
      var t, r;
      return a.unstyled ? ((t = a.pt) == null ? void 0 : t.root) || "" : [Ke().menuDivider(), (r = a.pt) == null ? void 0 : r.root].filter(Boolean).join(" ");
    });
    return (t, r) => (m(), x("div", {
      class: p(e.value),
      role: "separator"
    }, null, 2));
  }
}), Ru = te(Iu), Eu = te(Du), Lu = te(Tu), Au = R({
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
}), Ou = R({
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
}), Pu = R({
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
}), ju = (l, a) => {
  const e = W(l.active || !1), t = v({
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
}, Wu = ["tabindex", "aria-checked", "aria-disabled"], Fu = /* @__PURE__ */ Q({
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
    const e = l, t = a, { isActive: r, handleTrigger: o } = ju(e, t), n = v(() => {
      var c, g;
      return e.unstyled ? ((c = e.pt) == null ? void 0 : c.root) || "" : Au({
        variant: e.variant,
        size: e.size,
        class: (g = e.pt) == null ? void 0 : g.root
      });
    }), f = v(() => {
      var c, g;
      return e.unstyled ? ((c = e.pt) == null ? void 0 : c.on) || "" : Ou({
        active: r.value,
        variant: e.variant,
        disabled: e.disabled,
        class: (g = e.pt) == null ? void 0 : g.on
      });
    }), s = v(() => {
      var c, g;
      return e.unstyled ? ((c = e.pt) == null ? void 0 : c.off) || "" : Pu({
        active: r.value,
        variant: e.variant,
        disabled: e.disabled,
        class: (g = e.pt) == null ? void 0 : g.off
      });
    });
    return (c, g) => (m(), x("div", {
      class: p(n.value),
      onClick: g[0] || (g[0] = (z) => e.trigger === "click" ? C(o)(z) : void 0),
      onMouseenter: g[1] || (g[1] = (z) => e.trigger === "hover" ? r.value = !0 : void 0),
      onMouseleave: g[2] || (g[2] = (z) => e.trigger === "hover" ? r.value = !1 : void 0),
      onFocus: g[3] || (g[3] = (z) => e.trigger === "focus" ? r.value = !0 : void 0),
      onBlur: g[4] || (g[4] = (z) => e.trigger === "focus" ? r.value = !1 : void 0),
      tabindex: e.trigger === "focus" ? 0 : void 0,
      "aria-checked": C(r),
      "aria-disabled": e.disabled,
      role: "switch"
    }, [
      $("div", {
        class: p(f.value)
      }, [
        G(c.$slots, "on")
      ], 2),
      $("div", {
        class: p(s.value)
      }, [
        G(c.$slots, "off")
      ], 2)
    ], 42, Wu));
  }
}), _u = te(Fu), Hu = R({
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
}), Nu = R({
  base: "absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
}), Gu = R({
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
}), Ku = {
  load: (l) => l instanceof Event,
  error: (l) => l instanceof Event,
  zoom: (l) => typeof l == "boolean"
}, Yu = (l, a) => {
  const e = W(null), t = W(!0), r = W(!1), o = W(l.isZoomed || !1), n = (c) => {
    t.value = !1, a("load", c);
  }, f = (c) => {
    t.value = !1, r.value = !0, a("error", c);
  }, s = () => {
    l.isZoomable && (o.value = !o.value, a("zoom", o.value));
  };
  return le(
    () => l.isZoomed,
    (c) => {
      c !== void 0 && (o.value = c);
    }
  ), le(
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
    handleError: f,
    toggleZoom: s
  };
}, Uu = ["aria-label"], Xu = ["src", "alt", "loading"], qu = ["src", "alt"], Zu = {
  key: 3,
  class: "absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800"
}, Ju = { class: "text-gray-400 flex flex-col items-center" }, Qu = /* @__PURE__ */ Q({
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
  emits: Ku,
  setup(l, { expose: a, emit: e }) {
    const t = l, r = e, {
      imageRef: o,
      isLoading: n,
      isError: f,
      isZoomed: s,
      handleLoad: c,
      handleError: g,
      toggleZoom: z
    } = Yu(t, r), k = () => {
      t.isZoomable && z();
    }, d = v(() => {
      var S, M;
      return t.unstyled ? ((S = t.pt) == null ? void 0 : S.root) || "" : Hu({
        fit: t.fit,
        radius: t.radius,
        isZoomable: t.isZoomable,
        isZoomed: s.value,
        class: (M = t.pt) == null ? void 0 : M.root
      });
    }), b = v(() => {
      var S, M;
      return t.unstyled ? ((S = t.pt) == null ? void 0 : S.img) || "" : `w-full h-full transition-transform ${s.value ? "scale-" + t.zoomScale : ""} ${((M = t.pt) == null ? void 0 : M.img) || ""}`;
    }), y = v(() => {
      var S, M;
      return t.unstyled ? ((S = t.pt) == null ? void 0 : S.skeleton) || "" : Nu({ class: (M = t.pt) == null ? void 0 : M.skeleton });
    }), i = v(() => {
      var S, M;
      return t.unstyled ? ((S = t.pt) == null ? void 0 : S.overlay) || "" : Gu({ visible: s.value, class: (M = t.pt) == null ? void 0 : M.overlay });
    }), u = v(() => {
      const S = {};
      return t.width !== "auto" && (S.width = typeof t.width == "number" ? `${t.width}px` : t.width), t.height !== "auto" && (S.height = typeof t.height == "number" ? `${t.height}px` : t.height), S;
    }), w = v(() => ({
      objectFit: t.fit
    })), h = v(() => t.skeletonColor ? { backgroundColor: t.skeletonColor } : {});
    return a({
      imageRef: o,
      isLoading: n,
      isError: f,
      isZoomed: s
    }), (S, M) => (m(), x("div", {
      class: p(d.value),
      style: se(u.value),
      onClick: k,
      role: "img",
      "aria-label": S.alt
    }, [
      S.skeleton && C(n) ? (m(), x("div", {
        key: 0,
        class: p(y.value),
        style: se(h.value)
      }, null, 6)) : _("", !0),
      $("img", {
        ref_key: "imageRef",
        ref: o,
        src: S.src,
        alt: S.alt,
        class: p(b.value),
        style: se(w.value),
        loading: S.loading,
        onLoad: M[0] || (M[0] = //@ts-ignore
        (...I) => C(c) && C(c)(...I)),
        onError: M[1] || (M[1] = //@ts-ignore
        (...I) => C(g) && C(g)(...I))
      }, null, 46, Xu),
      S.blurred && C(n) ? (m(), x("img", {
        key: 1,
        src: S.src,
        alt: S.alt,
        class: "absolute inset-0 w-full h-full",
        style: se({
          filter: `blur(${S.blurAmount}px)`,
          transform: "scale(1.1)",
          objectFit: S.fit
        })
      }, null, 12, qu)) : _("", !0),
      S.isZoomable && C(s).valueOf() ? (m(), x("div", {
        key: 2,
        class: p(i.value)
      }, [
        G(S.$slots, "zoom-icon", {}, () => [
          M[2] || (M[2] = bl('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>', 1))
        ])
      ], 2)) : _("", !0),
      C(f) ? (m(), x("div", Zu, [
        G(S.$slots, "error", {}, () => [
          $("div", Ju, [
            M[3] || (M[3] = $("svg", {
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
              $("rect", {
                x: "3",
                y: "3",
                width: "18",
                height: "18",
                rx: "2",
                ry: "2"
              }),
              $("circle", {
                cx: "8.5",
                cy: "8.5",
                r: "1.5"
              }),
              $("polyline", { points: "21 15 16 10 5 21" })
            ], -1)),
            $("span", null, Y(S.alt || "图片加载失败"), 1)
          ])
        ])
      ])) : _("", !0)
    ], 14, Uu));
  }
}), ed = te(Qu), td = R({
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
}), ld = R({
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
}), ad = {
  click: (l) => l instanceof MouseEvent
}, rd = (l, a) => {
  const e = (r) => {
    if (l.disabled) {
      r.preventDefault();
      return;
    }
    a("click", r);
  }, t = v(() => {
    const r = {};
    return l.href && (r.href = l.href), l.external && (r.target = "_blank", r.rel = "noopener noreferrer"), r;
  });
  return {
    handleClick: e,
    linkAttributes: t
  };
}, od = ["aria-disabled"], sd = /* @__PURE__ */ Q({
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
  emits: ad,
  setup(l, { emit: a }) {
    const e = l, t = a, { handleClick: r, linkAttributes: o } = rd(e, t), n = v(() => {
      var s, c;
      return e.unstyled ? ((s = e.pt) == null ? void 0 : s.root) || "" : td({
        variant: e.variant,
        size: e.size,
        underline: e.underline,
        disabled: e.disabled,
        class: (c = e.pt) == null ? void 0 : c.root
      });
    }), f = (s) => {
      var c, g;
      return e.unstyled ? ((c = e.pt) == null ? void 0 : c.icon) || "" : ld({
        position: s,
        size: e.size,
        class: (g = e.pt) == null ? void 0 : g.icon
      });
    };
    return (s, c) => (m(), x("a", Kt({ class: n.value }, C(o), {
      onClick: c[0] || (c[0] = //@ts-ignore
      (...g) => C(r) && C(r)(...g)),
      "aria-disabled": s.disabled
    }), [
      s.iconPosition === "left" ? G(s.$slots, "icon-left", { key: 0 }, () => [
        s.$slots["icon-left"] ? (m(), x("span", {
          key: 0,
          class: p(f("left"))
        }, [
          G(s.$slots, "icon-left")
        ], 2)) : _("", !0)
      ]) : _("", !0),
      G(s.$slots, "default"),
      s.iconPosition === "right" ? G(s.$slots, "icon-right", { key: 1 }, () => [
        s.$slots["icon-right"] ? (m(), x("span", {
          key: 0,
          class: p(f("right"))
        }, [
          G(s.$slots, "icon-right")
        ], 2)) : _("", !0)
      ]) : _("", !0),
      s.external && !s.$slots["icon-right"] && s.iconPosition !== "left" ? (m(), x("span", {
        key: 2,
        class: p(f("right"))
      }, c[1] || (c[1] = [
        $("svg", {
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
          $("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
          $("polyline", { points: "15 3 21 3 21 9" }),
          $("line", {
            x1: "10",
            y1: "14",
            x2: "21",
            y2: "3"
          })
        ], -1)
      ]), 2)) : _("", !0)
    ], 16, od));
  }
}), nd = te(sd), id = R({
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
}), ud = {
  change: (l, a) => typeof l == "number" && typeof a == "number",
  "update:active-index": (l) => typeof l == "number"
}, dd = ["tabindex"], cd = ["tabindex"], fd = ["onClick", "aria-label", "aria-current", "tabindex"], pd = /* @__PURE__ */ Q({
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
  emits: ud,
  setup(l, { expose: a, emit: e }) {
    const t = l, r = e, o = Xe(), n = W(null), f = W(t.initialIndex);
    let s = null;
    const c = v(() => {
      if (!o) return 0;
      let V = 0;
      for (; o[`item-${V}`]; )
        V++;
      return V || 1;
    }), g = v(() => {
      var V, T;
      return t.unstyled ? ((V = t.pt) == null ? void 0 : V.root) || "" : id({
        variant: t.variant,
        size: t.size,
        class: (T = t.pt) == null ? void 0 : T.root
      });
    }), z = v(() => {
      var V, T;
      return t.unstyled ? ((V = t.pt) == null ? void 0 : V.container) || "" : `relative w-full h-full ${((T = t.pt) == null ? void 0 : T.container) || ""}`;
    }), k = v(() => {
      var V, T;
      return t.unstyled ? ((V = t.pt) == null ? void 0 : V.item) || "" : `w-full h-full ${((T = t.pt) == null ? void 0 : T.item) || ""}`;
    }), d = v(() => {
      var V, T;
      return t.unstyled ? ((V = t.pt) == null ? void 0 : V.prevButton) || "" : `absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${((T = t.pt) == null ? void 0 : T.prevButton) || ""}`;
    }), b = v(() => {
      var V, T;
      return t.unstyled ? ((V = t.pt) == null ? void 0 : V.nextButton) || "" : `absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${((T = t.pt) == null ? void 0 : T.nextButton) || ""}`;
    }), y = v(() => {
      var V, T;
      return t.unstyled ? ((V = t.pt) == null ? void 0 : V.indicators) || "" : `absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 ${((T = t.pt) == null ? void 0 : T.indicators) || ""}`;
    }), i = v(() => {
      var V, T;
      return t.unstyled ? ((V = t.pt) == null ? void 0 : V.indicator) || "" : `w-2 h-2 rounded-full bg-white/50 hover:bg-white/75 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${((T = t.pt) == null ? void 0 : T.indicator) || ""}`;
    }), u = v(() => {
      var V, T;
      return t.unstyled ? ((V = t.pt) == null ? void 0 : V.activeIndicator) || "" : `w-6 h-2 rounded-full bg-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${((T = t.pt) == null ? void 0 : T.activeIndicator) || ""}`;
    }), w = () => {
      if (t.disabled) return;
      const V = f.value;
      f.value < c.value - 1 ? f.value++ : t.loop && (f.value = 0), f.value !== V && (r("change", f.value, V), r("update:active-index", f.value));
    }, h = () => {
      if (t.disabled) return;
      const V = f.value;
      f.value > 0 ? f.value-- : t.loop && (f.value = c.value - 1), f.value !== V && (r("change", f.value, V), r("update:active-index", f.value));
    }, S = (V) => {
      if (!t.disabled && V >= 0 && V < c.value) {
        const T = f.value;
        f.value = V, r("change", f.value, T), r("update:active-index", f.value);
      }
    }, M = () => {
      t.autoplay && !t.disabled && (s = setInterval(() => {
        w();
      }, t.interval));
    }, I = () => {
      s && (clearInterval(s), s = null);
    }, O = (V) => {
      !t.keyboardNavigation || t.disabled || (V.key === "ArrowLeft" ? h() : V.key === "ArrowRight" && w());
    };
    return le(
      () => t.autoplay,
      (V) => {
        V ? M() : I();
      }
    ), le(
      () => t.disabled,
      (V) => {
        V ? I() : t.autoplay && M();
      }
    ), we(() => {
      t.autoplay && M(), t.keyboardNavigation && n.value && n.value.addEventListener("keydown", O);
    }), Fe(() => {
      I(), n.value && n.value.removeEventListener("keydown", O);
    }), a({
      next: w,
      prev: h,
      goToSlide: S
    }), (V, T) => (m(), x("div", {
      class: p(g.value),
      ref_key: "rootRef",
      ref: n
    }, [
      $("div", {
        class: p(z.value)
      }, [
        (m(!0), x(oe, null, de(c.value, (E, L) => (m(), x(oe, null, [
          L === f.value ? (m(), x("div", {
            key: L,
            class: p(k.value)
          }, [
            G(V.$slots, `item-${L}`)
          ], 2)) : _("", !0)
        ], 64))), 256))
      ], 2),
      V.navigation && !V.disabled ? (m(), x(oe, { key: 0 }, [
        V.navigation && (V.loop || f.value > 0) ? (m(), x("button", {
          key: 0,
          class: p(d.value),
          onClick: h,
          "aria-label": "Previous slide",
          tabindex: V.disabled ? -1 : 0
        }, [
          G(V.$slots, "prev-icon", {}, () => [
            T[0] || (T[0] = $("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              $("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M15 19l-7-7 7-7"
              })
            ], -1))
          ])
        ], 10, dd)) : _("", !0),
        V.navigation && (V.loop || f.value < c.value - 1) ? (m(), x("button", {
          key: 1,
          class: p(b.value),
          onClick: w,
          "aria-label": "Next slide",
          tabindex: V.disabled ? -1 : 0
        }, [
          G(V.$slots, "next-icon", {}, () => [
            T[1] || (T[1] = $("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              $("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M9 5l7 7-7 7"
              })
            ], -1))
          ])
        ], 10, cd)) : _("", !0)
      ], 64)) : _("", !0),
      V.indicators && !V.disabled ? (m(), x("div", {
        key: 1,
        class: p(y.value)
      }, [
        (m(!0), x(oe, null, de(c.value, (E, L) => (m(), x("button", {
          key: L,
          class: p([
            L === f.value ? u.value : i.value
          ]),
          onClick: (P) => S(L),
          "aria-label": `Go to slide ${L + 1}`,
          "aria-current": L === f.value,
          tabindex: V.disabled ? -1 : 0
        }, null, 10, fd))), 128))
      ], 2)) : _("", !0)
    ], 2));
  }
}), gd = te(pd), vd = R({
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
}), bd = (l) => l.type ? l.type : l.src ? "image" : l.title || l.description ? "card" : "text", cl = (l, a) => typeof l == "string" ? {
  id: `item-${a}`,
  type: "text",
  content: l
} : {
  id: `item-${a}`,
  type: bd(l),
  content: l.content ?? l.title ?? l.src ?? "",
  src: l.src,
  alt: l.alt,
  title: l.title,
  description: l.description,
  backgroundColor: l.backgroundColor,
  textColor: l.textColor,
  borderRadius: l.borderRadius
}, md = (l, a) => {
  const e = typeof l == "string" ? Number(l) : l;
  return typeof e != "number" || Number.isNaN(e) || e <= 0 ? a : e;
}, Gt = (l, a) => l ? [cl(l, a)] : [];
function yd(l) {
  const a = v(() => (l.items ?? []).map((d, b) => cl(d, b))), e = v(() => Gt(l.prefix, "prefix")), t = v(() => Gt(l.suffix, "suffix")), r = v(() => {
    const d = a.value;
    if (!d.length) return [];
    const y = l.autofill && d.some((u) => u.type === "image") ? Math.max(4, d.length) : d.length, i = [];
    for (let u = 0; i.length < y; u += 1)
      for (const w of d)
        i.push({
          ...w,
          id: `${w.id}-copy-${u}-${i.length}`
        });
    return i;
  }), o = v(() => [...e.value, ...r.value, ...t.value]), n = v(() => ({
    height: l.height,
    backgroundColor: l.backgroundColor,
    color: l.textColor,
    borderRadius: l.borderRadius
  })), f = v(() => ({})), s = v(() => ({
    gap: l.gap,
    paddingInlineEnd: l.gap
  })), c = v(() => ({
    minWidth: "max-content"
  })), g = (d) => ({
    backgroundColor: d.backgroundColor ?? "rgba(255, 255, 255, 0.86)",
    color: d.textColor ?? l.textColor,
    borderRadius: d.borderRadius ?? l.borderRadius,
    padding: "0.75rem 1rem"
  }), z = (d) => ({
    borderRadius: d.borderRadius ?? l.borderRadius
  }), k = v(() => md(l.duration, 20));
  return {
    displayItems: o,
    coreItems: r,
    prefixItems: e,
    suffixItems: t,
    rootStyles: n,
    trackStyles: f,
    groupStyles: s,
    itemStyles: c,
    cardStyle: g,
    imageStyle: z,
    duration: k
  };
}
const hd = ["src", "alt"], wd = ["aria-hidden"], xd = ["src", "alt"], kd = ["src", "alt"], Cd = /* @__PURE__ */ Q({
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
    const a = l, e = Xe(), t = vd(), r = W(null), o = W(null), n = W(null), f = W(null), s = W(0), c = W(0), g = W(1), z = W(!1), k = W(!1);
    let d = null, b = 0, y = 0, i = null;
    const u = /* @__PURE__ */ new Set(), {
      coreItems: w,
      rootStyles: h,
      trackStyles: S,
      groupStyles: M,
      itemStyles: I,
      cardStyle: O,
      imageStyle: V,
      duration: T
    } = yd(a), E = v(() => !!e.default), L = v(() => a.loop && s.value > 0), P = v(() => L.value ? 2 : 1), F = v(
      () => Array.from(
        { length: g.value },
        (X, ee) => w.value.map((ie) => ({
          ...ie,
          id: `${ie.id}-repeat-${ee}`
        }))
      ).flat()
    ), B = v(() => {
      var ie;
      if (!E.value || !a.loop) return 1;
      if (c.value <= 0) return 4;
      const X = ((ie = r.value) == null ? void 0 : ie.getBoundingClientRect().width) ?? 0, ee = Math.ceil(X * 2.2 / c.value) + 1;
      return Math.max(4, Math.min(12, ee));
    }), A = v(
      () => {
        var X, ee;
        return a.unstyled ? ((X = a.pt) == null ? void 0 : X.root) || "" : t.root({ class: (ee = a.pt) == null ? void 0 : ee.root });
      }
    ), D = v(
      () => {
        var X, ee;
        return a.unstyled ? ((X = a.pt) == null ? void 0 : X.viewport) || "" : t.viewport({ class: (ee = a.pt) == null ? void 0 : ee.viewport });
      }
    ), N = v(
      () => {
        var X, ee;
        return a.unstyled ? ((X = a.pt) == null ? void 0 : X.track) || "" : t.track({ class: (ee = a.pt) == null ? void 0 : ee.track });
      }
    ), j = v(
      () => {
        var X, ee;
        return a.unstyled ? ((X = a.pt) == null ? void 0 : X.group) || "" : t.group({ class: (ee = a.pt) == null ? void 0 : ee.group });
      }
    ), K = v(
      () => {
        var X, ee;
        return a.unstyled ? ((X = a.pt) == null ? void 0 : X.item) || "" : t.item({ class: (ee = a.pt) == null ? void 0 : ee.item });
      }
    ), U = v(
      () => {
        var X, ee;
        return a.unstyled ? ((X = a.pt) == null ? void 0 : X.image) || "" : t.image({ class: (ee = a.pt) == null ? void 0 : ee.image });
      }
    ), ne = v(
      () => {
        var X, ee;
        return a.unstyled ? ((X = a.pt) == null ? void 0 : X.card) || "" : t.card({ class: (ee = a.pt) == null ? void 0 : ee.card });
      }
    ), H = v(
      () => {
        var X, ee;
        return a.unstyled ? ((X = a.pt) == null ? void 0 : X.cardTitle) || "" : t.cardTitle({ class: (ee = a.pt) == null ? void 0 : ee.cardTitle });
      }
    ), q = v(
      () => {
        var X, ee;
        return a.unstyled ? ((X = a.pt) == null ? void 0 : X.cardDescription) || "" : t.cardDescription({ class: (ee = a.pt) == null ? void 0 : ee.cardDescription });
      }
    ), ae = v(
      () => {
        var X, ee;
        return a.unstyled ? ((X = a.pt) == null ? void 0 : X.text) || "" : t.text({ class: (ee = a.pt) == null ? void 0 : ee.text });
      }
    ), re = v(() => ({
      ...S.value,
      visibility: k.value ? "visible" : "hidden"
    })), fe = (X) => {
      if (!o.value) return;
      if (!s.value || !L.value) {
        o.value.style.transform = "translate3d(0, 0, 0)";
        return;
      }
      const ee = (X % s.value + s.value) % s.value, ie = a.direction === "right" ? -s.value + ee : -ee;
      o.value.style.transform = `translate3d(${ie}px, 0, 0)`;
    }, ce = () => {
      var At, Ot, Pt;
      const X = ((At = n.value) == null ? void 0 : At.getBoundingClientRect().width) ?? 0, ee = ((Ot = f.value) == null ? void 0 : Ot.getBoundingClientRect().width) ?? 0;
      if (!X) {
        s.value = 0, c.value = 0, k.value = !1;
        return;
      }
      const ie = ((Pt = r.value) == null ? void 0 : Pt.getBoundingClientRect().width) ?? 0, ge = E.value ? ee || X : X / Math.max(1, g.value), _e = ie * 2.2, at = !a.loop || ge <= 0 ? 1 : Math.min(6, Math.max(1, Math.ceil(_e / ge)));
      if (!E.value && at !== g.value) {
        g.value = at, he(ce);
        return;
      }
      s.value = X, c.value = E.value ? ee : 0, y = X ? y % X : 0, k.value = !0, fe(y);
    }, be = () => {
      d !== null && cancelAnimationFrame(d), d = null, b = 0;
    }, ye = (X) => {
      b || (b = X);
      const ee = Math.min(X - b, 64);
      if (b = X, !z.value && L.value && s.value > 0) {
        for (y += s.value / (T.value * 1e3) * ee; y >= s.value; ) y -= s.value;
        fe(y);
      }
      d = requestAnimationFrame(ye);
    }, me = () => {
      be(), d = requestAnimationFrame(ye);
    }, ze = () => he(ce), xe = () => {
      u.forEach((X) => {
        X.removeEventListener("load", ze), X.removeEventListener("error", ze);
      }), u.clear();
    }, pe = () => {
      xe(), o.value && o.value.querySelectorAll("img").forEach((X) => {
        X.addEventListener("load", ze), X.addEventListener("error", ze), u.add(X);
      });
    }, Ae = async () => {
      await he(), pe(), ce();
    }, je = () => {
      a.pauseOnHover && (z.value = !0);
    }, pt = () => {
      a.pauseOnHover && (z.value = !1);
    }, tt = (X, ee) => {
      if (!X) return null;
      const ie = typeof X == "string" ? { type: "text", content: X } : X;
      return {
        id: `${ee}-fixed`,
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
    }, ke = v(() => tt(a.prefix, "prefix")), Ce = v(() => tt(a.suffix, "suffix")), lt = (X, ee) => {
      var ge, _e;
      const ie = { target: X, item: ee };
      X === "prefix" ? (ge = a.onPrefixClick) == null || ge.call(a, ie) : (_e = a.onSuffixClick) == null || _e.call(a, ie);
    }, qe = (X) => X.alt || X.content || "Runhorselight image";
    return we(() => {
      Ae(), typeof ResizeObserver < "u" ? (i = new ResizeObserver(() => ce()), r.value && i.observe(r.value), n.value && i.observe(n.value), f.value && i.observe(f.value)) : window.addEventListener("resize", ce), me();
    }), Le(() => {
      be(), xe(), i == null || i.disconnect(), i = null, window.removeEventListener("resize", ce);
    }), le(
      [
        () => a.items,
        () => a.gap,
        () => a.height,
        () => a.loop,
        () => a.direction,
        () => a.autofill,
        () => E.value,
        () => a.prefix,
        () => a.suffix
      ],
      () => {
        g.value = 1, y = 0, Ae();
      },
      { deep: !0 }
    ), le(
      () => a.pauseOnHover,
      (X) => {
        X || (z.value = !1);
      }
    ), (X, ee) => (m(), x("div", {
      class: p([A.value, "flex items-center gap-4"]),
      style: se(C(h)),
      onMouseenter: je,
      onMouseleave: pt
    }, [
      ke.value ? (m(), x("div", {
        key: 0,
        class: p([K.value, "shrink-0 px-2"]),
        style: se(C(I)),
        onClick: ee[0] || (ee[0] = (ie) => lt("prefix", ke.value))
      }, [
        G(X.$slots, "prefix", {
          item: ke.value,
          target: "prefix"
        }, () => [
          ke.value.type === "image" ? (m(), x("img", {
            key: 0,
            src: ke.value.src,
            alt: qe(ke.value),
            class: p(U.value),
            style: se(C(V)(ke.value)),
            draggable: "false"
          }, null, 14, hd)) : ke.value.type === "card" ? (m(), x("div", {
            key: 1,
            class: p(ne.value),
            style: se(C(O)(ke.value))
          }, [
            $("div", {
              class: p(H.value)
            }, Y(ke.value.title || ke.value.content), 3),
            ke.value.description ? (m(), x("div", {
              key: 0,
              class: p(q.value)
            }, Y(ke.value.description), 3)) : _("", !0)
          ], 6)) : (m(), x("span", {
            key: 2,
            class: p(ae.value),
            style: se({ color: ke.value.textColor || a.textColor })
          }, Y(ke.value.content), 7))
        ], !0)
      ], 6)) : _("", !0),
      $("div", {
        ref_key: "viewportRef",
        ref: r,
        class: p(D.value)
      }, [
        E.value ? (m(), x("div", {
          key: 0,
          ref_key: "slotMeasureRef",
          ref: f,
          class: "pointer-events-none absolute -z-10 whitespace-nowrap opacity-0",
          style: se(C(I)),
          "aria-hidden": "true"
        }, [
          G(X.$slots, "default", {}, void 0, !0)
        ], 4)) : _("", !0),
        $("div", {
          ref_key: "trackRef",
          ref: o,
          class: p(N.value),
          style: se(re.value)
        }, [
          (m(!0), x(oe, null, de(P.value, (ie) => (m(), x("div", {
            key: ie,
            ref_for: !0,
            ref: ie === 1 ? (ge) => n.value = ge : void 0,
            class: p(j.value),
            style: se(C(M)),
            "aria-hidden": ie > 1
          }, [
            E.value ? (m(!0), x(oe, { key: 0 }, de(B.value, (ge) => (m(), x("div", {
              key: `slot-${ie}-${ge}`,
              class: p(K.value),
              style: se(C(I))
            }, [
              G(X.$slots, "default", {}, void 0, !0)
            ], 6))), 128)) : (m(!0), x(oe, { key: 1 }, de(F.value, (ge) => (m(), x("div", {
              key: `${ie}-${ge.id}`,
              class: p(K.value),
              style: se(C(I))
            }, [
              G(X.$slots, "item", { item: ge }, () => [
                ge.type === "image" ? (m(), x("img", {
                  key: 0,
                  src: ge.src,
                  alt: qe(ge),
                  class: p(U.value),
                  style: se(C(V)(ge)),
                  draggable: "false"
                }, null, 14, xd)) : ge.type === "card" ? (m(), x("div", {
                  key: 1,
                  class: p(ne.value),
                  style: se(C(O)(ge))
                }, [
                  $("div", {
                    class: p(H.value)
                  }, Y(ge.title || ge.content), 3),
                  ge.description ? (m(), x("div", {
                    key: 0,
                    class: p(q.value)
                  }, Y(ge.description), 3)) : _("", !0)
                ], 6)) : (m(), x("span", {
                  key: 2,
                  class: p(ae.value),
                  style: se({ color: ge.textColor || a.textColor })
                }, Y(ge.content), 7))
              ], !0)
            ], 6))), 128))
          ], 14, wd))), 128))
        ], 6)
      ], 2),
      Ce.value ? (m(), x("div", {
        key: 1,
        class: p([K.value, "shrink-0 px-2"]),
        style: se(C(I)),
        onClick: ee[1] || (ee[1] = (ie) => lt("suffix", Ce.value))
      }, [
        G(X.$slots, "suffix", {
          item: Ce.value,
          target: "suffix"
        }, () => [
          Ce.value.type === "image" ? (m(), x("img", {
            key: 0,
            src: Ce.value.src,
            alt: qe(Ce.value),
            class: p(U.value),
            style: se(C(V)(Ce.value)),
            draggable: "false"
          }, null, 14, kd)) : Ce.value.type === "card" ? (m(), x("div", {
            key: 1,
            class: p(ne.value),
            style: se(C(O)(Ce.value))
          }, [
            $("div", {
              class: p(H.value)
            }, Y(Ce.value.title || Ce.value.content), 3),
            Ce.value.description ? (m(), x("div", {
              key: 0,
              class: p(q.value)
            }, Y(Ce.value.description), 3)) : _("", !0)
          ], 6)) : (m(), x("span", {
            key: 2,
            class: p(ae.value),
            style: se({ color: Ce.value.textColor || a.textColor })
          }, Y(Ce.value.content), 7))
        ], !0)
      ], 6)) : _("", !0)
    ], 38));
  }
}), Sd = /* @__PURE__ */ et(Cd, [["__scopeId", "data-v-6928f10a"]]), zd = te(Sd), $d = R({
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
}), Bd = {}, Vd = {}, Id = /* @__PURE__ */ Q({
  name: "Timeline",
  __name: "timeline",
  props: {
    orientation: { default: "vertical" },
    align: { default: "left" },
    reverse: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: Bd,
  setup(l) {
    const a = l;
    Ee("timelineAlign", a.align), Ee("timelineOrientation", a.orientation);
    const e = v(() => {
      var r, o;
      return a.unstyled ? ((r = a.pt) == null ? void 0 : r.root) || "" : $d({
        orientation: a.orientation,
        align: a.align,
        class: (o = a.pt) == null ? void 0 : o.root
      });
    }), t = v(() => a.reverse ? { flexDirection: "column-reverse" } : {});
    return (r, o) => (m(), x("div", {
      class: p(e.value),
      style: se(t.value)
    }, [
      G(r.$slots, "default")
    ], 6));
  }
}), Md = /* @__PURE__ */ Q({
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
  emits: Vd,
  setup(l) {
    const a = l, e = Re(
      "timelineAlign",
      "left"
    ), t = Re(
      "timelineOrientation",
      "vertical"
    ), r = v(() => e === "alternate"), o = v(() => {
      var b, y, i;
      if (a.unstyled)
        return ((b = a.pt) == null ? void 0 : b.root) || "";
      const d = "relative flex";
      return t === "vertical" ? `${d} ${e === "right" ? "flex-row-reverse" : "flex-row"} ${((y = a.pt) == null ? void 0 : y.root) || ""}` : `${d} min-w-0 flex-1 flex-col items-center ${((i = a.pt) == null ? void 0 : i.root) || ""}`;
    }), n = v(() => {
      var b, y, i;
      if (a.unstyled)
        return ((b = a.pt) == null ? void 0 : b.dot) || "";
      const d = "relative z-10 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center";
      return t === "vertical" ? `${d} ${e === "right" ? "ml-3" : "mr-3"} ${((y = a.pt) == null ? void 0 : y.dot) || ""}` : `${d} mt-0 ${((i = a.pt) == null ? void 0 : i.dot) || ""}`;
    }), f = v(() => {
      var d, b, y;
      return a.unstyled ? ((d = a.pt) == null ? void 0 : d.connector) || "" : t === "vertical" ? `absolute top-5 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 ${e === "right" ? "right-2.5" : "left-2.5"} ${((b = a.pt) == null ? void 0 : b.connector) || ""}` : `absolute left-1/2 right-0 top-2.5 h-0.5 bg-gray-300 dark:bg-gray-600 ${((y = a.pt) == null ? void 0 : y.connector) || ""}`;
    }), s = v(() => {
      var d, b, y;
      return a.unstyled ? ((d = a.pt) == null ? void 0 : d.content) || "" : t === "horizontal" ? `mt-2 w-full text-center ${((b = a.pt) == null ? void 0 : b.content) || ""}` : `flex-1 ${((y = a.pt) == null ? void 0 : y.content) || ""}`;
    }), c = v(() => {
      var d, b;
      return a.unstyled ? ((d = a.pt) == null ? void 0 : d.opposite) || "" : `flex-1 text-right ${((b = a.pt) == null ? void 0 : b.opposite) || ""}`;
    }), g = v(() => a.dotColor ? { borderColor: a.dotColor, backgroundColor: a.dotColor } : {}), z = v(() => a.lineColor ? { backgroundColor: a.lineColor } : {}), k = v(() => {
      const d = {};
      return a.dotColor && !a.unstyled && (a.lineColor || (d["--line-color"] = a.dotColor)), d;
    });
    return (d, b) => (m(), x("div", {
      class: p(["timeline-item", o.value]),
      style: se(k.value)
    }, [
      $("div", {
        class: p(["timeline-dot", n.value])
      }, [
        G(d.$slots, "dot", {}, () => {
          var y;
          return [
            $("div", {
              class: p([
                "h-3 w-3 rounded-full border-2 border-gray-300 bg-white dark:border-gray-500 dark:bg-gray-900",
                (y = a.pt) == null ? void 0 : y.dot
              ]),
              style: se(g.value)
            }, null, 6)
          ];
        })
      ], 2),
      a.isLast ? _("", !0) : (m(), x("div", {
        key: 0,
        class: p(["timeline-connector", f.value]),
        style: se(z.value)
      }, null, 6)),
      $("div", {
        class: p(s.value)
      }, [
        G(d.$slots, "default")
      ], 2),
      r.value ? (m(), x("div", {
        key: 1,
        class: p(c.value)
      }, [
        G(d.$slots, "opposite")
      ], 2)) : _("", !0)
    ], 6));
  }
}), Dd = te(Id), Td = te(Md), ft = W([]);
let Rd = 0;
const Ed = (l) => {
  const a = `toast-${Rd++}`, e = {
    id: a,
    visible: !0,
    ...l
  };
  return ft.value.push(e), a;
}, fl = (l) => {
  const a = ft.value.findIndex((e) => e.id === l);
  a !== -1 && ft.value.splice(a, 1);
}, Ld = () => {
  ft.value = [];
}, yt = R({
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
}), Ad = ["innerHTML"], Od = { class: "flex-1" }, Pd = /* @__PURE__ */ Q({
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
    const e = l, t = a, { type: r = "info", duration: o = 3e3 } = e, n = v(() => yt().base({ type: e.type })), f = v(() => yt().icon({ type: e.type })), s = v(
      () => yt().description({ type: e.type })
    ), c = v(
      () => yt().closeButton({ type: e.type })
    ), g = {
      info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" /></svg>',
      success: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" /></svg>',
      warning: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" /></svg>',
      error: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" /></svg>'
    };
    let z;
    const k = W(o), d = W(0), b = () => {
      o <= 0 || (d.value = Date.now(), z = setTimeout(() => {
        w();
      }, k.value));
    }, y = () => {
      o <= 0 || (clearTimeout(z), k.value -= Date.now() - d.value);
    }, i = () => {
      o <= 0 || b();
    }, u = () => {
      w();
    }, w = () => {
      t("close", e.id), e.onClose && e.onClose(e.id);
    };
    return we(() => {
      b();
    }), Fe(() => {
      clearTimeout(z);
    }), (h, S) => (m(), x("div", {
      class: p(n.value),
      role: "alert",
      onMouseenter: y,
      onMouseleave: i
    }, [
      $("div", {
        class: p(f.value)
      }, [
        G(h.$slots, "icon", {}, () => [
          $("span", {
            innerHTML: g[C(r) || "info"]
          }, null, 8, Ad)
        ])
      ], 2),
      $("div", Od, [
        $("div", {
          class: p(s.value)
        }, Y(h.message), 3)
      ]),
      (m(), x("button", {
        key: 0,
        type: "button",
        class: p(c.value),
        "aria-label": "Close",
        onClick: u
      }, S[0] || (S[0] = [
        $("svg", {
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
          $("line", {
            x1: "18",
            y1: "6",
            x2: "6",
            y2: "18"
          }),
          $("line", {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "18"
          })
        ], -1)
      ]), 2))
    ], 34));
  }
}), jd = { class: "pointer-events-none fixed inset-0 z-[9999] overflow-hidden" }, pl = /* @__PURE__ */ Q({
  __name: "ToastContainer",
  setup(l) {
    const a = [
      "top-left",
      "top-right",
      "bottom-left",
      "bottom-right",
      "top-center",
      "bottom-center"
    ], e = (n) => ft.value.filter((f) => (f.position || "top-right") === n), t = (n) => {
      fl(n);
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
      const f = n.includes("top"), s = n.includes("center"), c = n.includes("right");
      let g = "", z = "";
      return s ? (g = f ? "-translate-y-full opacity-0" : "translate-y-full opacity-0", z = f ? "-translate-y-full opacity-0" : "translate-y-full opacity-0") : f ? c ? (g = "translate-x-full opacity-0", z = "translate-x-full opacity-0") : (g = "-translate-x-full opacity-0", z = "-translate-x-full opacity-0") : (g = "translate-y-full opacity-0", z = "translate-y-full opacity-0"), {
        enter: "transition-all duration-300 ease-out",
        leave: "transition-all duration-200 ease-in absolute w-full",
        enterFrom: g,
        leaveTo: z
      };
    };
    return (n, f) => (m(), x("div", jd, [
      (m(), x(oe, null, de(a, (s) => $("div", {
        key: s,
        class: p([
          "absolute flex w-full flex-col gap-4 p-4 md:max-w-[420px]",
          r(s)
        ])
      }, [
        Te(ml, {
          tag: "div",
          "enter-active-class": o(s).enter,
          "leave-active-class": o(s).leave,
          "enter-from-class": o(s).enterFrom,
          "leave-to-class": o(s).leaveTo,
          "move-class": "transition-all duration-300 ease-in-out",
          class: "flex flex-col gap-4 w-full"
        }, {
          default: Ue(() => [
            (m(!0), x(oe, null, de(e(s), (c) => (m(), De(Pd, Kt({
              key: c.id
            }, { ref_for: !0 }, c, { onClose: t }), null, 16))), 128))
          ]),
          _: 2
        }, 1032, ["enter-active-class", "leave-active-class", "enter-from-class", "leave-to-class"])
      ], 2)), 64))
    ]));
  }
});
let st = null;
const Wd = () => {
  if (typeof document > "u" || st) return;
  st = document.createElement("div"), st.id = "versakit-toast-container", document.body.appendChild(st);
  const l = Te(pl);
  yl(l, st);
}, nt = (l) => (Wd(), Ed(l)), bc = {
  success: (l, a) => nt({ ...a, message: l, type: "success" }),
  error: (l, a) => nt({ ...a, message: l, type: "error" }),
  warning: (l, a) => nt({ ...a, message: l, type: "warning" }),
  info: (l, a) => nt({ ...a, message: l, type: "info" }),
  show: (l) => nt(l),
  remove: (l) => fl(l),
  removeAll: () => Ld()
}, Fd = /* @__PURE__ */ Q({
  __name: "Steps",
  props: {
    current: { default: 0 },
    direction: { default: "horizontal" },
    status: { default: "process" }
  },
  emits: ["update:current", "change"],
  setup(l, { emit: a }) {
    const e = l, t = a, r = W([]), o = (s) => {
      r.value.push(s);
    }, n = (s) => {
      const c = r.value.indexOf(s);
      c !== -1 && r.value.splice(c, 1);
    }, f = (s) => {
      s !== e.current && (t("update:current", s), t("change", s));
    };
    return Ee("steps-context", {
      current: Ve(e, "current"),
      direction: Ve(e, "direction"),
      status: Ve(e, "status"),
      steps: r,
      registerStep: o,
      unregisterStep: n,
      onChange: f
    }), (s, c) => (m(), x("div", {
      class: p([
        "flex w-full gap-4",
        s.direction === "vertical" ? "flex-col" : "flex-row items-center"
      ])
    }, [
      G(s.$slots, "default")
    ], 2));
  }
}), _d = { class: "relative z-10 flex flex-col items-center" }, Hd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  class: "h-5 w-5"
}, Nd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  class: "h-5 w-5"
}, Gd = { key: 2 }, Kd = {
  key: 0,
  class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
}, Yd = /* @__PURE__ */ Q({
  __name: "StepItem",
  props: {
    title: {},
    description: {},
    status: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(l) {
    const a = l, e = Re("steps-context"), t = Symbol("step-item");
    we(() => {
      e == null || e.registerStep(t);
    }), Fe(() => {
      e == null || e.unregisterStep(t);
    });
    const r = v(() => (e == null ? void 0 : e.steps.value.indexOf(t)) ?? -1), o = v(() => r.value === ((e == null ? void 0 : e.steps.value.length) ?? 0) - 1), n = v(() => {
      if (a.status) return a.status;
      if (!e) return "wait";
      const k = e.current.value;
      return r.value < k ? "finish" : r.value === k ? e.status.value : "wait";
    }), f = v(() => n.value === "finish"), s = v(() => n.value === "process"), c = v(() => !a.disabled && e), g = v(() => {
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
    }), z = () => {
      c.value && e && e.onChange(r.value);
    };
    return (k, d) => {
      var b, y, i;
      return m(), x("div", {
        class: p([
          "relative flex flex-1",
          ((b = C(e)) == null ? void 0 : b.direction.value) === "vertical" ? "flex-col pb-8 last:pb-0" : "flex-row items-center last:flex-none",
          c.value ? "cursor-pointer" : "cursor-default"
        ]),
        onClick: z
      }, [
        o.value ? _("", !0) : (m(), x("div", {
          key: 0,
          class: p([
            "absolute transition-colors duration-300",
            ((y = C(e)) == null ? void 0 : y.direction.value) === "vertical" ? "left-[15px] top-[30px] h-[calc(100%-10px)] w-[2px]" : "left-[50%] right-[-50%] top-[15px] h-[2px] w-full",
            f.value ? "bg-blue-500" : "bg-gray-200 dark:bg-gray-700"
          ])
        }, null, 2)),
        $("div", _d, [
          $("div", {
            class: p([
              "flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300",
              g.value
            ])
          }, [
            G(k.$slots, "icon", {}, () => [
              n.value === "finish" ? (m(), x("svg", Hd, d[0] || (d[0] = [
                $("path", {
                  "fill-rule": "evenodd",
                  d: "M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z",
                  "clip-rule": "evenodd"
                }, null, -1)
              ]))) : n.value === "error" ? (m(), x("svg", Nd, d[1] || (d[1] = [
                $("path", {
                  "fill-rule": "evenodd",
                  d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
                  "clip-rule": "evenodd"
                }, null, -1)
              ]))) : (m(), x("span", Gd, Y(r.value + 1), 1))
            ])
          ], 2)
        ]),
        $("div", {
          class: p([
            "flex flex-col",
            ((i = C(e)) == null ? void 0 : i.direction.value) === "vertical" ? "ml-4 mt-0.5" : "absolute top-8 left-1/2 -translate-x-1/2 w-max max-w-[120px] text-center mt-2"
          ])
        }, [
          $("div", {
            class: p([
              "text-sm font-medium transition-colors duration-300",
              s.value || f.value ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400",
              n.value === "error" ? "text-red-500" : ""
            ])
          }, [
            G(k.$slots, "title", {}, () => [
              ve(Y(k.title), 1)
            ])
          ], 2),
          k.description || k.$slots.description ? (m(), x("div", Kd, [
            G(k.$slots, "description", {}, () => [
              ve(Y(k.description), 1)
            ])
          ])) : _("", !0)
        ], 2)
      ], 2);
    };
  }
}), Ud = ["value", "checked", "disabled"], Xd = /* @__PURE__ */ Q({
  __name: "Radio",
  props: {
    modelValue: { type: [String, Number, Boolean] },
    label: { type: [String, Number, Boolean] },
    disabled: { type: Boolean, default: !1 },
    size: {}
  },
  emits: ["update:modelValue", "change"],
  setup(l, { emit: a }) {
    const e = l, t = a, r = Re("radio-group", null), o = v(() => r ? r.modelValue.value === e.label : e.modelValue === e.label), n = v(() => (r == null ? void 0 : r.disabled.value) || !1 || e.disabled), f = v(() => (r == null ? void 0 : r.size.value) || e.size || "md"), s = v(() => {
      switch (f.value) {
        case "sm":
          return "h-4 w-4";
        case "lg":
          return "h-6 w-6";
        default:
          return "h-5 w-5";
      }
    }), c = v(() => {
      switch (f.value) {
        case "sm":
          return "h-1.5 w-1.5";
        case "lg":
          return "h-2.5 w-2.5";
        default:
          return "h-2 w-2";
      }
    }), g = v(() => {
      switch (f.value) {
        case "sm":
          return "text-sm";
        case "lg":
          return "text-lg";
        default:
          return "text-base";
      }
    }), z = () => {
      if (n.value) return;
      const k = e.label ?? "";
      r ? r.changeEvent(k) : (t("update:modelValue", k), t("change", k));
    };
    return (k, d) => (m(), x("label", {
      class: p([
        "group relative inline-flex cursor-pointer items-center select-none",
        n.value ? "cursor-not-allowed opacity-50" : ""
      ])
    }, [
      $("input", {
        type: "radio",
        class: "peer sr-only",
        value: k.label,
        checked: o.value,
        disabled: n.value,
        onChange: z
      }, null, 40, Ud),
      $("div", {
        class: p([
          "relative flex items-center justify-center rounded-full border transition-all duration-200",
          s.value,
          o.value ? "border-blue-500 bg-blue-500" : "border-gray-300 bg-white group-hover:border-blue-500 dark:border-gray-600 dark:bg-gray-800"
        ])
      }, [
        $("div", {
          class: p([
            "rounded-full bg-white transition-transform duration-200",
            c.value,
            o.value ? "scale-100" : "scale-0"
          ])
        }, null, 2)
      ], 2),
      k.$slots.default || k.label ? (m(), x("span", {
        key: 0,
        class: p(["ml-2 text-gray-700 dark:text-gray-300", g.value])
      }, [
        G(k.$slots, "default", {}, () => [
          ve(Y(k.label), 1)
        ])
      ], 2)) : _("", !0)
    ], 2));
  }
}), qd = /* @__PURE__ */ Q({
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
    return Ee("radio-group", {
      modelValue: Ve(e, "modelValue"),
      disabled: Ve(e, "disabled"),
      size: Ve(e, "size"),
      changeEvent: r
    }), (o, n) => (m(), x("div", {
      class: p([
        "flex",
        o.direction === "vertical" ? "flex-col gap-2" : "flex-row gap-4"
      ]),
      role: "radiogroup",
      "aria-label": "radio-group"
    }, [
      G(o.$slots, "default")
    ], 2));
  }
}), Zd = R({
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
}), Jd = { class: "mb-4 flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-950" }, Qd = { class: "min-w-0 flex-1" }, ec = {
  key: 0,
  class: "w-full"
}, tc = ["placeholder"], lc = { class: "flex items-center gap-2" }, ac = { class: "overflow-x-auto" }, rc = ["onClick", "aria-sort"], oc = { class: "flex items-center gap-2" }, sc = {
  key: 0,
  class: "inline-flex h-4 w-4 items-center justify-center text-gray-500 dark:text-gray-400"
}, nc = {
  key: 1,
  class: "text-xs text-gray-400"
}, ic = { class: "text-sm" }, uc = {
  key: 1,
  class: "mt-4 flex flex-wrap items-center justify-between gap-3 rounded-b-lg border-t border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300"
}, dc = { class: "flex items-center gap-2" }, cc = ["disabled"], fc = ["disabled"], pc = /* @__PURE__ */ Q({
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
    const a = l, e = W(""), t = W(""), r = W("asc"), o = W(a.initialPage), n = v(() => {
      const i = a.data ?? [];
      return t.value ? [...i].sort((u, w) => {
        const h = u[t.value], S = w[t.value];
        if (h == null && S == null) return 0;
        if (h == null) return r.value === "asc" ? -1 : 1;
        if (S == null) return r.value === "asc" ? 1 : -1;
        if (typeof h == "number" && typeof S == "number")
          return r.value === "asc" ? h - S : S - h;
        const M = String(h).toLowerCase(), I = String(S).toLowerCase();
        return M < I ? r.value === "asc" ? -1 : 1 : M > I ? r.value === "asc" ? 1 : -1 : 0;
      }) : i;
    }), f = v(() => {
      const i = n.value, u = a.columns ?? [];
      if (!a.searchable || !e.value.trim())
        return i;
      const w = e.value.trim().toLowerCase();
      return i.filter(
        (h) => u.some((S) => {
          const M = h[S.key];
          return M == null ? !1 : String(M).toLowerCase().includes(w);
        })
      );
    }), s = v(
      () => Math.max(1, Math.ceil(f.value.length / a.pageSize))
    ), c = v(() => {
      if (!a.pagination)
        return f.value;
      const i = (o.value - 1) * a.pageSize;
      return f.value.slice(i, i + a.pageSize);
    });
    le([() => f.value.length, () => a.pageSize], () => {
      o.value > s.value && (o.value = s.value);
    });
    const g = v(() => {
      const { root: i, table: u, thead: w, th: h, tbody: S, tr: M, td: I, empty: O } = Zd({
        stripe: a.stripe,
        border: a.border,
        dense: a.dense
      });
      return {
        root: i(),
        table: u(),
        thead: w(),
        th: h(),
        tbody: S(),
        tr: M(),
        td: I(),
        empty: O()
      };
    }), z = (i) => {
      switch (i) {
        case "center":
          return "text-center";
        case "right":
          return "text-right";
        default:
          return "text-left";
      }
    }, k = (i) => {
      t.value === i ? r.value = r.value === "asc" ? "desc" : "asc" : (t.value = i, r.value = "asc");
    }, d = (i) => t.value !== i ? "none" : r.value === "asc" ? "ascending" : "descending", b = () => {
      const i = a.columns ?? [], u = i.map(
        (h) => `"${String(h.title).replace(/"/g, '""')}"`
      ), w = f.value.map(
        (h) => i.map((S) => {
          const M = h[S.key];
          return `"${String(M ?? "").replace(/"/g, '""')}"`;
        }).join(",")
      );
      return [u.join(","), ...w].join(`\r
`);
    }, y = () => {
      const i = b(), u = new Blob([i], { type: "text/csv;charset=utf-8;" }), w = URL.createObjectURL(u), h = document.createElement("a");
      h.href = w, h.download = "table-export.csv", document.body.appendChild(h), h.click(), document.body.removeChild(h), URL.revokeObjectURL(w);
    };
    return (i, u) => (m(), x("div", {
      class: p(g.value.root)
    }, [
      $("div", Jd, [
        $("div", Qd, [
          a.searchable ? (m(), x("div", ec, [
            Ye($("input", {
              "onUpdate:modelValue": u[0] || (u[0] = (w) => e.value = w),
              type: "text",
              placeholder: a.searchPlaceholder,
              class: "w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:focus:border-blue-400 dark:focus:ring-blue-400"
            }, null, 8, tc), [
              [Tt, e.value]
            ])
          ])) : _("", !0)
        ]),
        $("div", lc, [
          a.exportable ? (m(), x("button", {
            key: 0,
            type: "button",
            onClick: y,
            class: "rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:text-blue-400"
          }, " 导出 CSV ")) : _("", !0)
        ])
      ]),
      $("div", ac, [
        $("table", {
          class: p(g.value.table)
        }, [
          $("thead", {
            class: p(g.value.thead)
          }, [
            $("tr", null, [
              (m(!0), x(oe, null, de(i.columns, (w) => (m(), x("th", {
                key: w.key,
                class: p([
                  g.value.th,
                  z(w.align),
                  w.sortable ? "cursor-pointer select-none text-gray-700 dark:text-gray-300" : ""
                ]),
                style: se({
                  width: w.width ? typeof w.width == "number" ? `${w.width}px` : w.width : void 0
                }),
                onClick: (h) => w.sortable && k(w.key),
                "aria-sort": w.sortable ? d(w.key) : void 0
              }, [
                $("div", oc, [
                  w.icon ? (m(), x("span", sc, Y(w.icon), 1)) : _("", !0),
                  $("span", null, Y(w.title), 1),
                  w.sortable ? (m(), x("span", nc, Y(t.value === w.key ? r.value === "asc" ? "↑" : "↓" : "⇅"), 1)) : _("", !0)
                ])
              ], 14, rc))), 128))
            ])
          ], 2),
          $("tbody", {
            class: p(g.value.tbody)
          }, [
            (m(!0), x(oe, null, de(c.value, (w, h) => (m(), x("tr", {
              key: h,
              class: p(g.value.tr)
            }, [
              (m(!0), x(oe, null, de(i.columns, (S) => (m(), x("td", {
                key: S.key,
                class: p([g.value.td, z(S.align)])
              }, [
                G(i.$slots, S.key, {
                  row: w,
                  index: h
                }, () => [
                  ve(Y(w[S.key]), 1)
                ], !0)
              ], 2))), 128))
            ], 2))), 128))
          ], 2)
        ], 2)
      ]),
      f.value.length ? _("", !0) : (m(), x("div", {
        key: 0,
        class: p(g.value.empty)
      }, [
        G(i.$slots, "empty", {}, () => [
          $("span", ic, Y(i.emptyText), 1)
        ], !0)
      ], 2)),
      a.pagination && f.value.length ? (m(), x("div", uc, [
        $("div", null, " 第 " + Y(o.value) + " / " + Y(s.value) + " 页 · 共 " + Y(f.value.length) + " 条 ", 1),
        $("div", dc, [
          $("button", {
            type: "button",
            class: "rounded-lg border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700 transition hover:border-blue-500 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:text-blue-400",
            disabled: o.value <= 1,
            onClick: u[1] || (u[1] = (w) => o.value = Math.max(1, o.value - 1))
          }, " 上一页 ", 8, cc),
          $("button", {
            type: "button",
            class: "rounded-lg border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700 transition hover:border-blue-500 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:text-blue-400",
            disabled: o.value >= s.value,
            onClick: u[2] || (u[2] = (w) => o.value = Math.min(s.value, o.value + 1))
          }, " 下一页 ", 8, fc)
        ])
      ])) : _("", !0)
    ], 2));
  }
}), gc = /* @__PURE__ */ et(pc, [["__scopeId", "data-v-86642214"]]), St = [
  fa,
  Ca,
  Ia,
  Ra,
  ja,
  Za,
  ar,
  vr,
  Cr,
  Dr,
  Or,
  Kr,
  Xr,
  ao,
  so,
  uo,
  go,
  Ho,
  yo,
  ho,
  Co,
  ts,
  Lt,
  nl,
  js,
  Zs,
  dn,
  hn,
  wn,
  xn,
  Tn,
  Rn,
  Fn,
  oi,
  gi,
  ul,
  $i,
  Ei,
  Li,
  eu,
  gu,
  vu,
  ku,
  Ru,
  Eu,
  Lu,
  _u,
  ed,
  nd,
  gd,
  zd,
  Dd,
  Td,
  pl,
  Fd,
  Yd,
  Xd,
  qd,
  gc
], mc = {
  install: (l) => {
    var a;
    for (const e in St)
      l.component(((a = St[e]) == null ? void 0 : a.name) || e, St[e]);
  }
};
export {
  gu as Accordion,
  vu as AccordionItem,
  Kr as Alert,
  Ia as Avatar,
  Ra as Badge,
  ul as Breadcrumb,
  $i as BreadcrumbItem,
  ao as Button,
  Lt as Calendar,
  so as Card,
  gd as Carousel,
  yo as Checkbox,
  ho as CheckboxGroup,
  Or as Chip,
  js as DatePicker,
  Zs as DateTimePicker,
  uo as Divider,
  Za as Drawer,
  Ru as Dropdown,
  Lu as DropdownDivider,
  Eu as DropdownItem,
  ed as Image,
  Co as Input,
  fa as InputOtp,
  ku as InputTag,
  Xr as Kbd,
  nd as Link,
  Ca as Modal,
  oi as Paginator,
  Fn as Panel,
  Cr as Popover,
  gi as Progress,
  Xd as Radio,
  qd as RadioGroup,
  eu as RangeCalendar,
  ts as Rate,
  zd as Runhorselight,
  ar as Segmented,
  Ho as Select,
  hn as Skeleton,
  xn as SkeletonAvatar,
  wn as SkeletonText,
  vr as Slider,
  Ei as Splitter,
  Li as SplitterPanel,
  Yd as StepItem,
  Fd as Steps,
  _u as Swap,
  ja as Switch,
  Rn as TabItem,
  gc as Table,
  Tn as Tabs,
  go as Textarea,
  nl as TimePicker,
  dn as TimeSelect,
  Dd as Timeline,
  Td as TimelineItem,
  bc as Toast,
  pl as ToastContainer,
  Dr as Tooltip,
  mc as Versakit
};
