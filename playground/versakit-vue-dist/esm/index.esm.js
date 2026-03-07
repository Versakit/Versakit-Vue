import { ref as H, nextTick as me, defineComponent as J, computed as h, createElementBlock as z, openBlock as w, normalizeClass as b, Fragment as oe, renderList as se, unref as x, withDirectives as We, vModelText as jt, watch as te, onUnmounted as Te, useSlots as He, onMounted as ve, createBlock as Se, Teleport as ot, createCommentVNode as G, createElementVNode as B, renderSlot as _, toDisplayString as U, onBeforeUnmount as De, normalizeStyle as de, createTextVNode as ce, resolveDynamicComponent as qe, withModifiers as Ce, withCtx as rt, inject as Be, provide as Ve, toRef as xe, createVNode as Oe, Transition as Ft, vShow as ct, withKeys as ke, reactive as ul, vModelDynamic as dl, createStaticVNode as cl, mergeProps as Wt, TransitionGroup as fl, render as pl } from "vue";
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
    setRef: (r, f) => {
      r && (e.value[f] = r);
    },
    onInput: (r, f) => {
      const i = r.target.value.replace(/\D/g, "");
      a.value[f] = i.slice(0, 1), i && f < l - 1 && me(() => {
        var p;
        (p = e.value[f + 1]) == null || p.focus();
      });
    },
    onKeydown: (r, f) => {
      r.key === "Backspace" && !a.value[f] && f > 0 && me(() => {
        var s;
        (s = e.value[f - 1]) == null || s.focus();
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
function Gt(l) {
  let a = [];
  return Ht(l, a), a;
}
var Nt = (...l) => Gt(l).filter(Boolean), _t = (l, a) => {
  let e = {}, t = Object.keys(l), o = Object.keys(a);
  for (let n of t) if (o.includes(n)) {
    let r = l[n], f = a[n];
    Array.isArray(r) || Array.isArray(f) ? e[n] = Nt(f, r) : typeof r == "object" && typeof f == "object" ? e[n] = _t(r, f) : e[n] = f + " " + r;
  } else e[n] = l[n];
  for (let n of o) t.includes(n) || (e[n] = a[n]);
  return e;
}, Et = (l) => !l || typeof l != "string" ? l : l.replace(/\s+/g, " ").trim();
const yt = "-", gl = (l) => {
  const a = yl(l), {
    conflictingClassGroups: e,
    conflictingClassGroupModifiers: t
  } = l;
  return {
    getClassGroupId: (r) => {
      const f = r.split(yt);
      return f[0] === "" && f.length !== 1 && f.shift(), Kt(f, a) || ml(r);
    },
    getConflictingClassGroupIds: (r, f) => {
      const s = e[r] || [];
      return f && t[r] ? [...s, ...t[r]] : s;
    }
  };
}, Kt = (l, a) => {
  var r;
  if (l.length === 0)
    return a.classGroupId;
  const e = l[0], t = a.nextPart.get(e), o = t ? Kt(l.slice(1), t) : void 0;
  if (o)
    return o;
  if (a.validators.length === 0)
    return;
  const n = l.join(yt);
  return (r = a.validators.find(({
    validator: f
  }) => f(n))) == null ? void 0 : r.classGroupId;
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
  for (const o in e)
    ft(e[o], t, o, a);
  return t;
}, ft = (l, a, e, t) => {
  l.forEach((o) => {
    if (typeof o == "string") {
      const n = o === "" ? a : At(a, o);
      n.classGroupId = e;
      return;
    }
    if (typeof o == "function") {
      if (hl(o)) {
        ft(o(t), a, e, t);
        return;
      }
      a.validators.push({
        validator: o,
        classGroupId: e
      });
      return;
    }
    Object.entries(o).forEach(([n, r]) => {
      ft(r, At(a, n), e, t);
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
  const o = (n, r) => {
    e.set(n, r), a++, a > l && (a = 0, t = e, e = /* @__PURE__ */ new Map());
  };
  return {
    get(n) {
      let r = e.get(n);
      if (r !== void 0)
        return r;
      if ((r = t.get(n)) !== void 0)
        return o(n, r), r;
    },
    set(n, r) {
      e.has(n) ? e.set(n, r) : o(n, r);
    }
  };
}, pt = "!", bt = ":", xl = bt.length, kl = (l) => {
  const {
    prefix: a,
    experimentalParseClassName: e
  } = l;
  let t = (o) => {
    const n = [];
    let r = 0, f = 0, s = 0, i;
    for (let g = 0; g < o.length; g++) {
      let y = o[g];
      if (r === 0 && f === 0) {
        if (y === bt) {
          n.push(o.slice(s, g)), s = g + xl;
          continue;
        }
        if (y === "/") {
          i = g;
          continue;
        }
      }
      y === "[" ? r++ : y === "]" ? r-- : y === "(" ? f++ : y === ")" && f--;
    }
    const p = n.length === 0 ? o : o.substring(s), k = Cl(p), m = k !== p, d = i && i > s ? i - s : void 0;
    return {
      modifiers: n,
      hasImportantModifier: m,
      baseClassName: k,
      maybePostfixModifierPosition: d
    };
  };
  if (a) {
    const o = a + bt, n = t;
    t = (r) => r.startsWith(o) ? n(r.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: r,
      maybePostfixModifierPosition: void 0
    };
  }
  if (e) {
    const o = t;
    t = (n) => e({
      className: n,
      parseClassName: o
    });
  }
  return t;
}, Cl = (l) => l.endsWith(pt) ? l.substring(0, l.length - 1) : l.startsWith(pt) ? l.substring(1) : l, zl = (l) => {
  const a = Object.fromEntries(l.orderSensitiveModifiers.map((t) => [t, !0]));
  return (t) => {
    if (t.length <= 1)
      return t;
    const o = [];
    let n = [];
    return t.forEach((r) => {
      r[0] === "[" || a[r] ? (o.push(...n.sort(), r), n = []) : n.push(r);
    }), o.push(...n.sort()), o;
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
    getConflictingClassGroupIds: o,
    sortModifiers: n
  } = a, r = [], f = l.trim().split(Bl);
  let s = "";
  for (let i = f.length - 1; i >= 0; i -= 1) {
    const p = f[i], {
      isExternal: k,
      modifiers: m,
      hasImportantModifier: d,
      baseClassName: g,
      maybePostfixModifierPosition: y
    } = e(p);
    if (k) {
      s = p + (s.length > 0 ? " " + s : s);
      continue;
    }
    let u = !!y, c = t(u ? g.substring(0, y) : g);
    if (!c) {
      if (!u) {
        s = p + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (c = t(g), !c) {
        s = p + (s.length > 0 ? " " + s : s);
        continue;
      }
      u = !1;
    }
    const v = n(m).join(":"), C = d ? v + pt : v, D = C + c;
    if (r.includes(D))
      continue;
    r.push(D);
    const M = o(c, u);
    for (let V = 0; V < M.length; ++V) {
      const T = M[V];
      r.push(C + T);
    }
    s = p + (s.length > 0 ? " " + s : s);
  }
  return s;
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
  let e, t, o, n = r;
  function r(s) {
    const i = a.reduce((p, k) => k(p), l());
    return e = Sl(i), t = e.cache.get, o = e.cache.set, n = f, f(s);
  }
  function f(s) {
    const i = t(s);
    if (i)
      return i;
    const p = Vl(s, e);
    return o(s, p), p;
  }
  return function() {
    return n($l.apply(null, arguments));
  };
}
const be = (l) => {
  const a = (e) => e[l] || [];
  return a.isThemeGetter = !0, a;
}, Ut = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Xt = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Il = /^\d+\/\d+$/, Dl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ml = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Tl = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Rl = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, El = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Fe = (l) => Il.test(l), ae = (l) => !!l && !Number.isNaN(Number(l)), Re = (l) => !!l && Number.isInteger(Number(l)), Ot = (l) => l.endsWith("%") && ae(l.slice(0, -1)), Me = (l) => Dl.test(l), Ll = () => !0, Al = (l) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ml.test(l) && !Tl.test(l)
), ht = () => !1, Ol = (l) => Rl.test(l), Pl = (l) => El.test(l), jl = (l) => !X(l) && !q(l), Fl = (l) => Ge(l, Jt, ht), X = (l) => Ut.test(l), Ee = (l) => Ge(l, Qt, Al), nt = (l) => Ge(l, Zl, ae), Wl = (l) => Ge(l, qt, ht), Hl = (l) => Ge(l, Zt, Pl), Gl = (l) => Ge(l, ht, Ol), q = (l) => Xt.test(l), Qe = (l) => Ne(l, Qt), Nl = (l) => Ne(l, Jl), _l = (l) => Ne(l, qt), Kl = (l) => Ne(l, Jt), Yl = (l) => Ne(l, Zt), Ul = (l) => Ne(l, Ql, !0), Ge = (l, a, e) => {
  const t = Ut.exec(l);
  return t ? t[1] ? a(t[1]) : e(t[2]) : !1;
}, Ne = (l, a, e = !1) => {
  const t = Xt.exec(l);
  return t ? t[1] ? a(t[1]) : e : !1;
}, qt = (l) => l === "position", Xl = /* @__PURE__ */ new Set(["image", "url"]), Zt = (l) => Xl.has(l), ql = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Jt = (l) => ql.has(l), Qt = (l) => l === "length", Zl = (l) => l === "number", Jl = (l) => l === "family-name", Ql = (l) => l === "shadow", gt = () => {
  const l = be("color"), a = be("font"), e = be("text"), t = be("font-weight"), o = be("tracking"), n = be("leading"), r = be("breakpoint"), f = be("container"), s = be("spacing"), i = be("radius"), p = be("shadow"), k = be("inset-shadow"), m = be("drop-shadow"), d = be("blur"), g = be("perspective"), y = be("aspect"), u = be("ease"), c = be("animate"), v = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], D = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", "contain", "none"], V = () => [q, X, s], T = () => [Fe, "full", "auto", ...V()], $ = () => [Re, "none", "subgrid", q, X], O = () => ["auto", {
    span: ["full", Re, q, X]
  }, q, X], A = () => [Re, "auto", q, X], L = () => ["auto", "min", "max", "fr", q, X], P = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], F = () => ["start", "end", "center", "stretch"], S = () => ["auto", ...V()], E = () => [Fe, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...V()], I = () => [l, q, X], N = () => [Ot, Ee], j = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    i,
    q,
    X
  ], K = () => ["", ae, Qe, Ee], Y = () => ["solid", "dashed", "dotted", "double"], re = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    d,
    q,
    X
  ], Z = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", q, X], le = () => ["none", ae, q, X], ee = () => ["none", ae, q, X], ne = () => [ae, q, X], ue = () => [Fe, "full", ...V()];
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
      spacing: ["px", ae],
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
        columns: [ae, X, q, f]
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
        object: [...C(), X, q]
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
        flex: [ae, Fe, "auto", "initial", "none", X]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ae, q, X]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ae, q, X]
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
            screen: [r]
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
        tracking: [o, q, X]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ae, "none", q, nt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          n,
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
        decoration: [ae, "from-font", "auto", q, Ee]
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
        "underline-offset": [ae, "auto", q, X]
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
        bg: [...C(), _l, Wl]
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
        "outline-offset": [ae, q, X]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ae, Qe, Ee]
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
        "ring-offset": [ae, Ee]
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
        opacity: [ae, q, X]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...re(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": re()
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
        brightness: [ae, q, X]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ae, q, X]
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
        grayscale: ["", ae, q, X]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ae, q, X]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ae, q, X]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ae, q, X]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ae, q, X]
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
        "backdrop-brightness": [ae, q, X]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ae, q, X]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ae, q, X]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ae, q, X]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ae, q, X]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ae, q, X]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ae, q, X]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ae, q, X]
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
        duration: [ae, "initial", q, X]
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
        delay: [ae, q, X]
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
        skew: ne()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ne()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ne()
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
        stroke: [ae, Qe, Ee, nt]
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
  extend: o = {},
  override: n = {}
}) => (Xe(l, "cacheSize", a), Xe(l, "prefix", e), Xe(l, "experimentalParseClassName", t), et(l.theme, n.theme), et(l.classGroups, n.classGroups), et(l.conflictingClassGroups, n.conflictingClassGroups), et(l.conflictingClassGroupModifiers, n.conflictingClassGroupModifiers), Xe(l, "orderSensitiveModifiers", n.orderSensitiveModifiers), tt(l.theme, o.theme), tt(l.classGroups, o.classGroups), tt(l.conflictingClassGroups, o.conflictingClassGroups), tt(l.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), el(l, o, "orderSensitiveModifiers"), l), Xe = (l, a, e) => {
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
var aa = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, tl = (l) => l || void 0, Ze = (...l) => tl(Gt(l).filter(Boolean).join(" ")), st = null, Ie = {}, mt = !1, _e = (...l) => (a) => a.twMerge ? ((!st || mt) && (mt = !1, st = we(Ie) ? la : ta({ ...Ie, extend: { theme: Ie.theme, classGroups: Ie.classGroups, conflictingClassGroupModifiers: Ie.conflictingClassGroupModifiers, conflictingClassGroups: Ie.conflictingClassGroups, ...Ie.extend } })), tl(st(Ze(l)))) : Ze(l), Pt = (l, a) => {
  for (let e in a) l.hasOwnProperty(e) ? l[e] = Ze(l[e], a[e]) : l[e] = a[e];
  return l;
}, R = (l, a) => {
  let { extend: e = null, slots: t = {}, variants: o = {}, compoundVariants: n = [], compoundSlots: r = [], defaultVariants: f = {} } = l, s = { ...aa, ...a }, i = e != null && e.base ? Ze(e.base, l == null ? void 0 : l.base) : l == null ? void 0 : l.base, p = e != null && e.variants && !we(e.variants) ? _t(o, e.variants) : o, k = e != null && e.defaultVariants && !we(e.defaultVariants) ? { ...e.defaultVariants, ...f } : f;
  !we(s.twMergeConfig) && !vl(s.twMergeConfig, Ie) && (mt = !0, Ie = s.twMergeConfig);
  let m = we(e == null ? void 0 : e.slots), d = we(t) ? {} : { base: Ze(l == null ? void 0 : l.base, m && (e == null ? void 0 : e.base)), ...t }, g = m ? d : Pt({ ...e == null ? void 0 : e.slots }, we(d) ? { base: l == null ? void 0 : l.base } : d), y = we(e == null ? void 0 : e.compoundVariants) ? n : Nt(e == null ? void 0 : e.compoundVariants, n), u = (v) => {
    if (we(p) && we(t) && m) return _e(i, v == null ? void 0 : v.class, v == null ? void 0 : v.className)(s);
    if (y && !Array.isArray(y)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof y}`);
    if (r && !Array.isArray(r)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof r}`);
    let C = (P, F, S = [], E) => {
      let I = S;
      if (typeof F == "string") I = I.concat(Et(F).split(" ").map((N) => `${P}:${N}`));
      else if (Array.isArray(F)) I = I.concat(F.reduce((N, j) => N.concat(`${P}:${j}`), []));
      else if (typeof F == "object" && typeof E == "string") {
        for (let N in F) if (F.hasOwnProperty(N) && N === E) {
          let j = F[N];
          if (j && typeof j == "string") {
            let K = Et(j);
            I[E] ? I[E] = I[E].concat(K.split(" ").map((Y) => `${P}:${Y}`)) : I[E] = K.split(" ").map((Y) => `${P}:${Y}`);
          } else Array.isArray(j) && j.length > 0 && (I[E] = j.reduce((K, Y) => K.concat(`${P}:${Y}`), []));
        }
      }
      return I;
    }, D = (P, F = p, S = null, E = null) => {
      var I;
      let N = F[P];
      if (!N || we(N)) return null;
      let j = (I = E == null ? void 0 : E[P]) != null ? I : v == null ? void 0 : v[P];
      if (j === null) return null;
      let K = Rt(j), Y = Array.isArray(s.responsiveVariants) && s.responsiveVariants.length > 0 || s.responsiveVariants === !0, re = k == null ? void 0 : k[P], W = [];
      if (typeof K == "object" && Y) for (let [ee, ne] of Object.entries(K)) {
        let ue = N[ne];
        if (ee === "initial") {
          re = ne;
          continue;
        }
        Array.isArray(s.responsiveVariants) && !s.responsiveVariants.includes(ee) || (W = C(ee, ue, W, S));
      }
      let Z = K != null && typeof K != "object" ? K : Rt(re), le = N[Z || "false"];
      return typeof W == "object" && typeof S == "string" && W[S] ? Pt(W, le) : W.length > 0 ? (W.push(le), S === "base" ? W.join(" ") : W) : le;
    }, M = () => p ? Object.keys(p).map((P) => D(P, p)) : null, V = (P, F) => {
      if (!p || typeof p != "object") return null;
      let S = new Array();
      for (let E in p) {
        let I = D(E, p, P, F), N = P === "base" && typeof I == "string" ? I : I && I[P];
        N && (S[S.length] = N);
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
      for (let { class: E, className: I, ...N } of P) {
        let j = !0;
        for (let [K, Y] of Object.entries(N)) {
          let re = $(K, F)[K];
          if (Array.isArray(Y)) {
            if (!Y.includes(re)) {
              j = !1;
              break;
            }
          } else {
            let W = (Z) => Z == null || Z === !1;
            if (W(Y) && W(re)) continue;
            if (re !== Y) {
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
      for (let E of F) if (typeof E == "string" && (S.base = _e(S.base, E)(s)), typeof E == "object") for (let [I, N] of Object.entries(E)) S[I] = _e(S[I], N)(s);
      return S;
    }, L = (P) => {
      if (r.length < 1) return null;
      let F = {};
      for (let { slots: S = [], class: E, className: I, ...N } of r) {
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
        for (let j of S) F[j] = F[j] || [], F[j].push([E, I]);
      }
      return F;
    };
    if (!we(t) || !m) {
      let P = {};
      if (typeof g == "object" && !we(g)) for (let F of Object.keys(g)) P[F] = (S) => {
        var E, I;
        return _e(g[F], V(F, S), ((E = A(S)) != null ? E : [])[F], ((I = L(S)) != null ? I : [])[F], S == null ? void 0 : S.class, S == null ? void 0 : S.className)(s);
      };
      return P;
    }
    return _e(i, M(), O(y), v == null ? void 0 : v.class, v == null ? void 0 : v.className)(s);
  }, c = () => {
    if (!(!p || typeof p != "object")) return Object.keys(p);
  };
  return u.variantKeys = c(), u.extend = e, u.base = i, u.slots = g, u.variants = p, u.defaultVariants = k, u.compoundSlots = r, u.compoundVariants = y, u;
};
const oa = R({
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
}), ra = ["onUpdate:modelValue", "onInput", "onKeydown"], na = /* @__PURE__ */ J({
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
    const a = l, { values: e, setRef: t, onInput: o, onKeydown: n } = bl(a.length ?? 4), r = h(() => {
      var s, i;
      return a.unstyled ? ((s = a.pt) == null ? void 0 : s.container) || "flex gap-2" : (i = a.pt) != null && i.container ? `flex gap-2 ${a.pt.container}` : "flex gap-2";
    }), f = h(() => {
      var s, i;
      return a.unstyled ? ((s = a.pt) == null ? void 0 : s.input) || "" : oa({
        state: a.state,
        size: a.size,
        class: (i = a.pt) == null ? void 0 : i.input
      });
    });
    return (s, i) => (w(), z("div", {
      class: b(r.value)
    }, [
      (w(!0), z(oe, null, se(x(e).length, (p, k) => We((w(), z("input", {
        key: k,
        "onUpdate:modelValue": (m) => x(e)[k] = m,
        ref_for: !0,
        ref: (m) => x(t)(m, k),
        class: b(f.value),
        maxlength: "1",
        onInput: (m) => x(o)(m, k),
        onKeydown: (m) => x(n)(m, k),
        type: "text",
        inputmode: "numeric",
        autocomplete: "one-time-code"
      }, null, 42, ra)), [
        [jt, x(e)[k]]
      ])), 128))
    ], 2));
  }
}), sa = Q(na);
function ia(l) {
  const a = H(!1), e = (l == null ? void 0 : l.closeOnEsc) ?? !0, t = (l == null ? void 0 : l.closeOnOverlayClick) ?? !0, o = () => {
    a.value = !0;
  }, n = () => {
    var p;
    a.value = !1, (p = l == null ? void 0 : l.onClose) == null || p.call(l);
  }, r = H(null), f = H(null), s = (p) => {
    p.key === "Escape" && e && n();
  };
  return te(a, (p) => {
    p ? (document.addEventListener("keydown", s), document.body.style.overflow = "hidden") : (document.removeEventListener("keydown", s), document.body.style.overflow = "");
  }), Te(() => {
    document.removeEventListener("keydown", s), document.body.style.overflow = "";
  }), {
    isOpen: a,
    open: o,
    close: n,
    modalRef: r,
    overlayRef: f,
    onOverlayClick: (p) => {
      p.target === f.value && t && n();
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
    const e = l, t = a, o = He(), { isOpen: n, open: r, close: f, modalRef: s, overlayRef: i, onOverlayClick: p } = ia({
      onClose: () => {
        t("close"), t("update:modelValue", !1);
      },
      closeOnEsc: e.closeOnEsc,
      closeOnOverlayClick: e.closeOnOverlayClick
    });
    ve(async () => {
      await me(), e.modelValue && r();
    }), te(
      () => e.modelValue,
      (M) => {
        M && !n.value ? r() : !M && n.value && f();
      }
    ), te(n, (M) => {
      M !== e.modelValue && t("update:modelValue", M);
    });
    const k = () => {
      f();
    }, m = h(() => !!e.title || !!o.header), d = h(() => !!o.footer), g = h(() => {
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
    }), C = h(() => {
      var M, V;
      return e.unstyled ? [(M = e.pt) == null ? void 0 : M.footer, e.footerClass].filter(Boolean) : [ba({ class: (V = e.pt) == null ? void 0 : V.footer }), e.footerClass];
    }), D = h(() => {
      var M, V;
      return e.unstyled ? ((M = e.pt) == null ? void 0 : M.closeButton) || "" : va({ class: (V = e.pt) == null ? void 0 : V.closeButton });
    });
    return (M, V) => (w(), Se(ot, { to: "body" }, [
      x(n) ? (w(), z("div", {
        key: 0,
        class: b(g.value),
        ref_key: "overlayRef",
        ref: i,
        onClick: V[0] || (V[0] = //@ts-ignore
        (...T) => x(p) && x(p)(...T))
      }, [
        B("div", {
          class: b(y.value),
          ref_key: "modalRef",
          ref: s,
          role: "dialog",
          "aria-modal": "true",
          tabindex: "-1"
        }, [
          m.value ? (w(), z("div", {
            key: 0,
            class: b(u.value)
          }, [
            _(M.$slots, "header", {}, () => [
              B("h3", {
                class: b(c.value)
              }, U(e.title), 3)
            ]),
            M.hideCloseButton ? G("", !0) : (w(), z("button", {
              key: 0,
              class: b(D.value),
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
          ], 2)) : G("", !0),
          B("div", {
            class: b(v.value)
          }, [
            _(M.$slots, "default")
          ], 2),
          d.value ? (w(), z("div", {
            key: 1,
            class: b(C.value)
          }, [
            _(M.$slots, "footer")
          ], 2)) : G("", !0)
        ], 2)
      ], 2)) : G("", !0)
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
    const a = l, { isError: e, onLoad: t, onError: o } = ya(), n = h(() => {
      var m, d;
      return a.unstyled ? ((m = a.pt) == null ? void 0 : m.root) || "" : ha({
        size: a.size,
        shape: a.shape,
        status: a.status,
        class: (d = a.pt) == null ? void 0 : d.root
      });
    }), r = h(() => {
      var m;
      return a.unstyled ? ((m = a.pt) == null ? void 0 : m.image) || "" : "w-full h-full object-cover";
    }), f = h(() => {
      var m;
      return a.unstyled ? ((m = a.pt) == null ? void 0 : m.fallback) || "" : "w-full h-full flex items-center justify-center";
    }), s = h(() => {
      var m;
      return a.unstyled ? ((m = a.pt) == null ? void 0 : m.initials) || "" : "w-full h-full flex items-center justify-center";
    }), i = h(() => {
      var m;
      return a.unstyled ? ((m = a.pt) == null ? void 0 : m.icon) || "" : "w-1/2 h-1/2";
    }), p = h(() => a.alt ? a.alt.split(" ").map((m) => m.charAt(0)).slice(0, 2).join("").toUpperCase() : ""), k = h(() => !a.src || e.value);
    return (m, d) => (w(), z("div", {
      class: b(n.value)
    }, [
      k.value ? m.fallback ? (w(), z("span", {
        key: 1,
        class: b(f.value)
      }, [
        B("img", {
          src: m.fallback,
          alt: m.alt,
          class: b(r.value)
        }, null, 10, xa)
      ], 2)) : m.alt ? (w(), z("span", {
        key: 2,
        class: b(s.value)
      }, U(p.value), 3)) : (w(), z("span", {
        key: 3,
        class: b(f.value)
      }, [
        (w(), z("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          class: b(i.value)
        }, d[2] || (d[2] = [
          B("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }, null, -1),
          B("circle", {
            cx: "12",
            cy: "7",
            r: "4"
          }, null, -1)
        ]), 2))
      ], 2)) : (w(), z("img", {
        key: 0,
        src: m.src,
        alt: m.alt,
        class: b(r.value),
        onLoad: d[0] || (d[0] = //@ts-ignore
        (...g) => x(t) && x(t)(...g)),
        onError: d[1] || (d[1] = //@ts-ignore
        (...g) => x(o) && x(o)(...g))
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
    const a = l, { visible: e, positionClass: t } = za(a), o = h(() => {
      var f;
      return a.unstyled ? ((f = a.pt) == null ? void 0 : f.root) || "" : "relative inline-block";
    }), n = h(() => {
      var f, s;
      return a.unstyled ? ((f = a.pt) == null ? void 0 : f.badge) || "" : Sa({
        color: a.color,
        size: a.size,
        dot: a.dot,
        class: [t.value, (s = a.pt) == null ? void 0 : s.badge]
      });
    }), r = h(() => a.dot ? "" : typeof a.content == "number" && a.max && a.content > a.max ? `${a.max}+` : a.content);
    return (f, s) => (w(), z("div", {
      class: b(o.value)
    }, [
      _(f.$slots, "default"),
      x(e) ? (w(), z("span", {
        key: 0,
        class: b(n.value),
        role: "status",
        "aria-live": "polite"
      }, U(r.value), 3)) : G("", !0)
    ], 2));
  }
}), Va = Q(Ba);
function $a(l) {
  const a = H(l.modelValue ?? !1), e = () => {
    var o;
    l.disabled || (a.value = !a.value, (o = l.onChange) == null || o.call(l, a.value));
  };
  return te(
    () => l.modelValue,
    (o) => {
      o !== void 0 && (a.value = o);
    }
  ), {
    checked: h(() => !!a.value),
    disabled: h(() => !!l.disabled),
    toggle: e,
    onKeyDown: (o) => {
      (o.key === "Enter" || o.key === " ") && (o.preventDefault(), e());
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
    const e = l, t = a, { checked: o, toggle: n, onKeyDown: r } = $a({
      modelValue: e.modelValue,
      disabled: e.disabled,
      onChange: (u) => t("update:modelValue", u)
    }), f = H(!1);
    te(o, (u) => {
      u && (f.value = !0, setTimeout(() => {
        f.value = !1;
      }, 500));
    });
    const s = () => {
      if (!o.value) return "";
      switch (e.size) {
        case "small":
          return "translate-x-3";
        case "large":
          return "translate-x-5";
        default:
          return "translate-x-4";
      }
    }, i = () => {
      if (!o.value)
        return "bg-gray-300 dark:bg-gray-600";
      const u = {
        blue: "bg-blue-600 dark:bg-blue-500",
        green: "bg-green-600 dark:bg-green-500",
        red: "bg-red-600 dark:bg-red-500",
        yellow: "bg-yellow-600 dark:bg-yellow-500",
        purple: "bg-purple-600 dark:bg-purple-500"
      };
      return u[e.color] || u.blue;
    }, p = () => {
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
        checked: o.value,
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
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.ripple) || "" : p() + ((c = e.pt) != null && c.ripple ? ` ${e.pt.ripple}` : "");
    });
    return (u, c) => (w(), z("button", {
      type: "button",
      role: "switch",
      "aria-checked": x(o),
      disabled: e.disabled,
      onClick: c[0] || (c[0] = //@ts-ignore
      (...v) => x(n) && x(n)(...v)),
      onKeydown: c[1] || (c[1] = //@ts-ignore
      (...v) => x(r) && x(r)(...v)),
      class: b(m.value)
    }, [
      B("span", {
        class: b([
          d.value,
          "absolute inset-0 rounded-full transition-colors duration-300 ease-in-out"
        ])
      }, null, 2),
      B("span", {
        class: b([
          g.value,
          "transform transition-all duration-300 ease-in-out",
          s()
        ])
      }, [
        x(o) ? (w(), z("span", {
          key: 0,
          class: b(["absolute inset-0 bg-white rounded-full transition-all duration-300", {
            "opacity-100 scale-100": x(o),
            "opacity-0 scale-0": !x(o)
          }])
        }, null, 2)) : G("", !0)
      ], 2),
      B("span", {
        class: b(["absolute inset-0 transition-opacity duration-300", { "opacity-0": !x(o), "opacity-100": x(o) }])
      }, [
        B("span", {
          class: b(["absolute inset-0 rounded-full transform transition-transform duration-500", [
            y.value,
            { "scale-100": f.value, "scale-0": !f.value }
          ]])
        }, null, 2)
      ], 2)
    ], 42, Da));
  }
}), ll = (l, a) => {
  const e = l.__vccOpts || l;
  for (const [t, o] of a)
    e[t] = o;
  return e;
}, Ta = /* @__PURE__ */ ll(Ma, [["__scopeId", "data-v-dec8aa04"]]), Ra = Q(Ta);
function Ea(l) {
  const a = H(!1), e = (l == null ? void 0 : l.closeOnEsc) ?? !0, t = (l == null ? void 0 : l.closeOnOverlayClick) ?? !0, o = () => {
    var p;
    a.value = !0, (p = l == null ? void 0 : l.onOpen) == null || p.call(l);
  }, n = () => {
    var p;
    a.value = !1, (p = l == null ? void 0 : l.onClose) == null || p.call(l);
  }, r = H(null), f = H(null), s = (p) => {
    p.key === "Escape" && e && n();
  }, i = (p) => {
    p.target === f.value && t && n();
  };
  return te(a, (p) => {
    p ? document.addEventListener("keydown", s) : document.removeEventListener("keydown", s);
  }), Te(() => {
    document.removeEventListener("keydown", s);
  }), {
    isOpen: a,
    open: o,
    close: n,
    overlayRef: f,
    drawerRef: r,
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
}), Ha = ["aria-hidden", "aria-labelledby"], Ga = /* @__PURE__ */ J({
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
    const e = l, t = a, o = He(), { isOpen: n, close: r, open: f, drawerRef: s, overlayRef: i, onOverlayClick: p } = Ea({
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
        T && !n.value ? f() : !T && n.value && r();
      },
      { immediate: !0 }
    ), te(n, (T) => {
      T !== e.modelValue && t("update:modelValue", T);
    });
    const k = H("");
    te(n, (T) => {
      e.preventScroll && (T ? (k.value = document.body.style.overflow, document.body.style.overflow = "hidden") : document.body.style.overflow = k.value);
    }), De(() => {
      e.preventScroll && n.value && (document.body.style.overflow = k.value);
    });
    const m = h(() => {
      var T, $;
      return e.unstyled ? [(T = e.pt) == null ? void 0 : T.overlay, e.overlayClass].filter(Boolean) : [
        La({
          open: n.value,
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
          open: n.value,
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
    }), C = h(() => {
      var T, $;
      return e.unstyled ? [(T = e.pt) == null ? void 0 : T.footer, e.footerClass].filter(Boolean) : [Wa({ class: ($ = e.pt) == null ? void 0 : $.footer }), e.footerClass];
    }), D = () => {
      r();
    }, M = h(() => !!e.title || !!o.header), V = h(() => !!o.footer);
    return (T, $) => (w(), Se(ot, { to: "body" }, [
      T.showOverlay && x(n) ? (w(), z("div", {
        key: 0,
        class: b(m.value),
        ref_key: "overlayRef",
        ref: i,
        onClick: $[0] || ($[0] = //@ts-ignore
        (...O) => x(p) && x(p)(...O)),
        role: "presentation",
        "aria-hidden": "true"
      }, null, 2)) : G("", !0),
      B("div", {
        class: b(d.value),
        style: de(g.value),
        ref_key: "drawerRef",
        ref: s,
        role: "dialog",
        "aria-modal": "true",
        "aria-hidden": !x(n),
        "aria-labelledby": T.title ? "drawer-title" : void 0
      }, [
        M.value ? (w(), z("div", {
          key: 0,
          class: b(y.value)
        }, [
          _(T.$slots, "header", {}, () => [
            T.title ? (w(), z("h2", {
              key: 0,
              class: b(u.value),
              id: "drawer-title"
            }, U(T.title), 3)) : G("", !0)
          ]),
          T.hideCloseButton ? G("", !0) : (w(), z("button", {
            key: 0,
            class: b(c.value),
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
        ], 2)) : G("", !0),
        B("div", {
          class: b(v.value)
        }, [
          _(T.$slots, "default")
        ], 2),
        V.value ? (w(), z("div", {
          key: 1,
          class: b(C.value)
        }, [
          _(T.$slots, "footer")
        ], 2)) : G("", !0)
      ], 14, Ha)
    ]));
  }
}), Na = Q(Ga);
function _a(l, a) {
  const e = H(
    a.modelValue !== void 0 ? a.modelValue : l[0]
  ), t = (r) => e.value === r, o = (r) => {
    var f;
    e.value = r, (f = a.onChange) == null || f.call(a, r);
  };
  return {
    selected: e,
    isSelected: t,
    select: o,
    onKeydown: (r) => {
      const f = l.indexOf(e.value);
      if (r.key === "ArrowRight" || r.key === "ArrowDown") {
        const s = l[(f + 1) % l.length];
        o(s);
      } else if (r.key === "ArrowLeft" || r.key === "ArrowUp") {
        const s = l[(f - 1 + l.length) % l.length];
        o(s);
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
    const e = l, t = a, o = h(() => e.options.map((m) => typeof m == "object" ? {
      value: m.value,
      label: m.label,
      disabled: m.disabled || !1
    } : {
      value: m,
      label: String(m),
      disabled: !1
    })), n = h(() => o.value.map((m) => m.value)), { isSelected: r, select: f, onKeydown: s } = _a(n.value, {
      modelValue: e.modelValue,
      onChange: (m) => {
        t("update:modelValue", m), t("change", m);
      }
    });
    te(
      () => e.modelValue,
      (m) => {
        m !== void 0 && n.value.includes(m) && f(m);
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
    }), p = (m, d) => {
      var g, y;
      return e.unstyled ? ((g = e.pt) == null ? void 0 : g.option) || "" : Ya({
        selected: r(m),
        disabled: e.disabled || d,
        size: e.size,
        class: (y = e.pt) == null ? void 0 : y.option
      });
    }, k = (m, d) => {
      e.disabled || d || f(m);
    };
    return (m, d) => (w(), z("div", {
      class: b(i.value),
      role: "tablist",
      onKeydown: d[0] || (d[0] = //@ts-ignore
      (...g) => x(s) && x(s)(...g))
    }, [
      (w(!0), z(oe, null, se(o.value, (g) => (w(), z("button", {
        key: String(g.value),
        class: b(p(g.value, g.disabled)),
        disabled: e.disabled || g.disabled,
        "aria-selected": x(r)(g.value),
        tabindex: x(r)(g.value) ? 0 : -1,
        role: "tab",
        type: "button",
        onClick: (y) => k(g.value, g.disabled)
      }, U(g.label), 11, Ua))), 128))
    ], 34));
  }
}), qa = Q(Xa);
function Za(l) {
  const a = H(null), e = H(null), t = l.min ?? 0, o = l.max ?? 100, n = l.step ?? 1, r = l.orientation ?? "horizontal", f = H(l.modelValue ?? t), s = h(() => (f.value - t) / (o - t) * 100), i = (d) => {
    var u;
    const g = Math.round(d / n) * n, y = Math.min(o, Math.max(t, g));
    f.value = y, (u = l.onChange) == null || u.call(l, y);
  }, p = (d) => {
    const g = a.value;
    if (!g) return;
    const y = g.getBoundingClientRect(), u = r === "horizontal" ? (d.clientX - y.left) / y.width : 1 - (d.clientY - y.top) / y.height;
    i(t + u * (o - t));
  }, k = (d) => {
    d.key === "ArrowRight" || d.key === "ArrowUp" ? (d.preventDefault(), i(f.value + n)) : (d.key === "ArrowLeft" || d.key === "ArrowDown") && (d.preventDefault(), i(f.value - n));
  }, m = (d) => {
    d.preventDefault();
    const g = (u) => {
      const c = a.value;
      if (!c) return;
      const v = c.getBoundingClientRect(), C = r === "horizontal" ? (u.clientX - v.left) / v.width : 1 - (u.clientY - v.top) / v.height;
      i(t + C * (o - t));
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
    percent: s,
    trackRef: a,
    thumbRef: e,
    onTrackClick: p,
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
}), eo = R({
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
}), to = R({
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
}), lo = R({
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
}), ao = R({
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
}), oo = R({
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
}), ro = R({
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
}), no = ["aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-orientation", "aria-disabled", "tabindex"], so = /* @__PURE__ */ J({
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
      value: o,
      percent: n,
      trackRef: r,
      thumbRef: f,
      onTrackClick: s,
      onThumbKeyDown: i,
      onThumbMouseDown: p
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
      return e.unstyled ? ((S = e.pt) == null ? void 0 : S.fill) || "" : eo({
        orientation: e.orientation,
        disabled: e.disabled,
        class: (E = e.pt) == null ? void 0 : E.fill
      });
    }), g = h(() => {
      var S, E;
      return e.unstyled ? ((S = e.pt) == null ? void 0 : S.thumb) || "" : to({
        orientation: e.orientation,
        disabled: e.disabled,
        class: (E = e.pt) == null ? void 0 : E.thumb
      });
    }), y = h(() => e.orientation === "horizontal" ? { width: `${n.value}%` } : { height: `${n.value}%` }), u = h(() => e.orientation === "horizontal" ? { left: `${n.value}%` } : { bottom: `${n.value}%` }), c = H(!1), v = h(() => {
      var S, E;
      return e.unstyled ? ((S = e.pt) == null ? void 0 : S.tooltip) || "" : lo({
        orientation: e.orientation,
        visible: e.showTooltip && c.value,
        class: (E = e.pt) == null ? void 0 : E.tooltip
      });
    }), C = () => {
      e.disabled || (c.value = !0);
    }, D = () => {
      c.value = !1;
    }, M = h(() => e.formatTooltip ? e.formatTooltip(o.value) : o.value.toString()), V = h(() => {
      var S, E;
      return e.unstyled ? ((S = e.pt) == null ? void 0 : S.marks) || "" : ao({
        orientation: e.orientation,
        class: (E = e.pt) == null ? void 0 : E.marks
      });
    }), T = h(() => {
      if (!e.showMarks) return [];
      if (e.marks)
        return Object.entries(e.marks).map(([N, j]) => ({
          value: Number(N),
          label: j,
          percent: (Number(N) - e.min) / (e.max - e.min) * 100,
          active: o.value >= Number(N)
        }));
      const S = Math.floor((e.max - e.min) / e.step), E = S > 10 ? Math.floor(S / 5) : 1, I = [];
      for (let N = 0; N <= S; N += E) {
        const j = e.min + N * e.step;
        I.push({
          value: j,
          label: j.toString(),
          percent: N / S * 100,
          active: o.value >= j
        });
      }
      return I;
    }), $ = (S) => {
      var E, I;
      return e.unstyled ? ((E = e.pt) == null ? void 0 : E.mark) || "" : oo({
        orientation: e.orientation,
        active: S,
        class: (I = e.pt) == null ? void 0 : I.mark
      });
    }, O = (S) => e.orientation === "horizontal" ? { left: `${S}%` } : { bottom: `${S}%` }, A = () => {
      var S, E;
      return e.unstyled ? ((S = e.pt) == null ? void 0 : S.markLabel) || "" : ro({
        orientation: e.orientation,
        class: (E = e.pt) == null ? void 0 : E.markLabel
      });
    }, L = (S) => {
      e.disabled || s(S);
    }, P = (S) => {
      e.disabled || i(S);
    }, F = (S) => {
      if (e.disabled) return;
      p(S), C();
      const E = () => {
        D(), window.removeEventListener("mouseup", E);
      };
      window.addEventListener("mouseup", E);
    };
    return (S, E) => (w(), z("div", {
      class: b(k.value)
    }, [
      B("div", {
        class: b(m.value),
        ref_key: "trackRef",
        ref: r,
        onClick: L
      }, [
        B("div", {
          class: b(d.value),
          style: de(y.value)
        }, null, 6),
        S.showMarks ? (w(), z("div", {
          key: 0,
          class: b(V.value)
        }, [
          (w(!0), z(oe, null, se(T.value, (I) => (w(), z("div", {
            key: I.value,
            class: b($(I.active)),
            style: de(O(I.percent))
          }, [
            B("span", {
              class: b(A)
            }, U(I.label), 1)
          ], 6))), 128))
        ], 2)) : G("", !0)
      ], 2),
      B("div", {
        class: b(g.value),
        style: de(u.value),
        ref_key: "thumbRef",
        ref: f,
        onMousedown: F,
        onKeydown: P,
        onMouseover: C,
        onMouseleave: D,
        role: "slider",
        "aria-valuemin": S.min,
        "aria-valuemax": S.max,
        "aria-valuenow": x(o),
        "aria-orientation": S.orientation,
        "aria-disabled": S.disabled,
        tabindex: S.disabled ? -1 : 0
      }, [
        S.showTooltip ? (w(), z("div", {
          key: 0,
          class: b(v.value)
        }, U(M.value), 3)) : G("", !0)
      ], 46, no)
    ], 2));
  }
}), io = Q(so), uo = R({
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
}), co = R({
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
}), fo = R({
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
}), po = R({
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
}), bo = R({
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
}), vo = { class: "popover-inner" }, go = /* @__PURE__ */ J({
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
    const t = l, o = e, n = H(!1), r = H(null), f = H(null), s = `popover-${Math.random().toString(36).slice(2, 9)}`;
    let i = null, p = null;
    const k = H(0), m = H(0), d = async () => {
      p && clearTimeout(p), !t.disabled && (i = setTimeout(() => {
        n.value = !0, o("update:modelValue", !0), me(c);
      }, t.openDelay));
    }, g = () => {
      i && clearTimeout(i), !t.disabled && (p = setTimeout(() => {
        n.value = !1, o("update:modelValue", !1);
      }, t.closeDelay));
    }, y = () => {
      n.value ? g() : d();
    }, u = (W) => {
      W ? d() : g();
    }, c = () => {
      const W = f.value;
      if (!W || !n.value) return;
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
      const ee = r.value;
      if (!ee) return;
      const ne = ee.getBoundingClientRect(), ue = W.getBoundingClientRect();
      let fe = 0, ge = 0;
      const pe = ne.left + ne.width / 2, ze = ne.top + ne.height / 2;
      switch (t.placement) {
        case "top":
          fe = ne.top - ue.height - t.offset, ge = pe - ue.width / 2;
          break;
        case "right":
          fe = ze - ue.height / 2, ge = ne.right + t.offset;
          break;
        case "bottom":
          fe = ne.bottom + t.offset, ge = pe - ue.width / 2;
          break;
        case "left":
          fe = ze - ue.height / 2, ge = ne.left - ue.width - t.offset;
          break;
      }
      v(W, fe, ge);
    }, v = (W, Z, le) => {
      var ne;
      const ee = W.querySelector(
        '[class*="popoverArrow"]'
      );
      if (le = Math.max(8, le), le = Math.min(le, window.innerWidth - W.offsetWidth - 8), Z = Math.max(8, Z), Z = Math.min(Z, window.innerHeight - W.offsetHeight - 8), W.style.position = "fixed", W.style.top = `${Z}px`, W.style.left = `${le}px`, W.style.zIndex = ((ne = t.zIndex) == null ? void 0 : ne.toString()) || "1000", W.style.transition = "none", ee && t.showArrow && !t.followCursor && !t.unbound) {
        const ue = r.value;
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
    }, C = (W) => {
      k.value = W.clientX, m.value = W.clientY, (t.followCursor || t.unbound) && n.value && c();
    }, D = () => {
      n.value && c();
    }, M = () => {
      n.value && c();
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
      n.value && !((Z = f.value) != null && Z.contains(W.target)) && !((le = r.value) != null && le.contains(W.target)) && g();
    }, P = h(() => {
      var W, Z;
      return t.unstyled ? ((W = t.pt) == null ? void 0 : W.container) || "relative inline-block" : (Z = t.pt) != null && Z.container ? `relative inline-block ${t.pt.container}` : "relative inline-block";
    }), F = h(() => {
      var W, Z;
      return t.unstyled ? ((W = t.pt) == null ? void 0 : W.trigger) || "inline-block" : uo({
        disabled: t.disabled,
        class: (Z = t.pt) == null ? void 0 : Z.trigger
      });
    }), S = h(() => {
      var W, Z;
      return t.unstyled ? ((W = t.pt) == null ? void 0 : W.content) || "" : co({
        placement: t.placement,
        visible: n.value,
        color: t.color,
        class: (Z = t.pt) == null ? void 0 : Z.content
      });
    }), E = h(() => {
      var W, Z;
      return t.unstyled ? ((W = t.pt) == null ? void 0 : W.arrow) || "" : fo({
        placement: t.placement,
        color: t.color,
        class: (Z = t.pt) == null ? void 0 : Z.arrow
      });
    }), I = h(() => {
      var W, Z;
      return t.unstyled ? ((W = t.pt) == null ? void 0 : W.title) || "" : po({
        color: t.color,
        class: (Z = t.pt) == null ? void 0 : Z.title
      });
    }), N = h(() => {
      var W, Z;
      return t.unstyled ? ((W = t.pt) == null ? void 0 : W.body) || "" : bo({
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
      window.addEventListener("resize", D), window.addEventListener("scroll", M, !0), document.addEventListener("click", L), window.addEventListener("mousemove", C);
    }, re = () => {
      window.removeEventListener("resize", D), window.removeEventListener("scroll", M, !0), document.removeEventListener("click", L), window.removeEventListener("mousemove", C);
    };
    return ve(() => {
      Y(), t.modelValue && me(() => {
        u(!0);
      });
    }), Te(() => {
      re(), i && clearTimeout(i), p && clearTimeout(p);
    }), te(
      () => t.modelValue,
      (W) => {
        W !== n.value && u(W);
      }
    ), te(n, (W) => {
      W && me(c), o("update:modelValue", W);
    }), te(
      () => [t.placement, t.offset, t.followCursor, t.unbound],
      () => {
        n.value && me(c);
      }
    ), a({
      show: () => u(!0),
      hide: () => u(!1),
      toggle: y,
      updatePosition: c
    }), (W, Z) => (w(), z("div", {
      class: b(P.value),
      onMousemove: C
    }, [
      W.unbound ? G("", !0) : (w(), z("div", {
        key: 0,
        ref_key: "triggerRef",
        ref: r,
        class: b(F.value),
        "aria-describedby": s,
        onClick: V,
        onMouseenter: T,
        onMouseleave: $,
        onFocus: O,
        onBlur: A
      }, [
        _(W.$slots, "trigger")
      ], 34)),
      (w(), Se(ot, {
        to: K.value,
        disabled: !K.value
      }, [
        n.value && !W.disabled ? (w(), z("div", {
          key: 0,
          ref_key: "popoverRef",
          ref: f,
          class: b(S.value),
          style: de(j.value),
          id: s,
          role: "tooltip",
          "aria-live": "polite"
        }, [
          W.showArrow && !W.followCursor && !W.unbound ? (w(), z("div", {
            key: 0,
            class: b(E.value)
          }, null, 2)) : G("", !0),
          B("div", vo, [
            W.title ? (w(), z("div", {
              key: 0,
              class: b(I.value)
            }, U(W.title), 3)) : G("", !0),
            B("div", {
              class: b(N.value)
            }, [
              _(W.$slots, "default", {}, () => [
                ce(U(W.content), 1)
              ])
            ], 2)
          ])
        ], 6)) : G("", !0)
      ], 8, ["to", "disabled"]))
    ], 34));
  }
}), mo = Q(go);
function yo(l) {
  const a = H(!1), e = H(null), t = H(null);
  let o = null, n = null, r = 0, f = 0;
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
  }, p = (V) => {
    r = V.clientX, f = V.clientY, (i.followCursor || i.unbound) && a.value && g();
  }, k = () => {
    n && clearTimeout(n), o = setTimeout(() => {
      a.value = !0, requestAnimationFrame(g);
    }, i.openDelay);
  }, m = () => {
    o && clearTimeout(o), n = setTimeout(() => {
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
          $ = f - T.height - A, O = r - T.width / 2;
          break;
        case "right":
          $ = f - T.height / 2, O = r + A;
          break;
        case "bottom":
          $ = f + A, O = r - T.width / 2;
          break;
        case "left":
          $ = f - T.height / 2, O = r - T.width - A;
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
    V ? (window.addEventListener("resize", y), window.addEventListener("scroll", u, !0), (i.followCursor || i.unbound) && window.addEventListener("mousemove", p)) : (window.removeEventListener("resize", y), window.removeEventListener("scroll", u, !0), (i.followCursor || i.unbound) && window.removeEventListener("mousemove", p));
  }), te(e, (V) => {
    V && a.value && !i.unbound && g();
  }), ve(() => {
    (i.followCursor || i.unbound) && window.addEventListener("mousemove", p);
  });
  const c = (V) => {
    r = V.clientX, f = V.clientY, k();
  }, v = () => k(), C = () => m(), D = () => m();
  Te(() => {
    o && clearTimeout(o), n && clearTimeout(n), window.removeEventListener("resize", y), window.removeEventListener("scroll", u, !0), (i.followCursor || i.unbound) && window.removeEventListener("mousemove", p);
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
    onMouseLeave: C,
    onBlur: D,
    setIsOpen: d
  };
}
const ho = R({
  base: "inline-block"
}), wo = R({
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
}), xo = R({
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
}), ko = ["aria-describedby"], Co = ["id"], zo = /* @__PURE__ */ J({
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
    const t = l, o = e, n = H(0), r = H(0), f = H(!1), s = yo({
      openDelay: t.openDelay,
      closeDelay: t.closeDelay,
      placement: t.placement,
      offset: t.offset,
      followCursor: t.followCursor,
      unbound: t.unbound
    }), i = s.isOpen, p = s.triggerRef, k = s.tooltipRef, m = s.tooltipId, d = s.setIsOpen, g = () => {
      f.value = !0, d(!0), me(() => {
        M();
      });
    }, y = () => {
      f.value = !1, d(!1);
    }, u = () => {
      f.value ? y() : g();
    }, c = h(() => {
      var I, N;
      return t.unstyled ? ((I = t.pt) == null ? void 0 : I.container) || "" : ho({
        class: (N = t.pt) == null ? void 0 : N.container
      });
    }), v = h(() => {
      var I, N;
      return t.unstyled ? ((I = t.pt) == null ? void 0 : I.content) || "" : wo({
        color: t.color,
        visible: !0,
        class: (N = t.pt) == null ? void 0 : N.content
      });
    }), C = h(() => {
      var I, N;
      return t.unstyled ? ((I = t.pt) == null ? void 0 : I.arrow) || "" : xo({
        color: t.color,
        placement: t.placement,
        class: (N = t.pt) == null ? void 0 : N.arrow
      });
    }), D = h(() => {
      const I = {};
      return t.maxWidth && (I.maxWidth = typeof t.maxWidth == "number" ? `${t.maxWidth}px` : t.maxWidth), I;
    }), M = () => {
      const I = k.value;
      if (!I || !i.value) return;
      const N = n.value, j = r.value;
      if (t.followCursor || t.unbound) {
        let Z = 0, le = 0;
        switch (t.placement) {
          case "top":
            Z = j - I.offsetHeight - t.offset, le = N - I.offsetWidth / 2;
            break;
          case "right":
            Z = j - I.offsetHeight / 2, le = N + t.offset;
            break;
          case "bottom":
            Z = j + t.offset, le = N - I.offsetWidth / 2;
            break;
          case "left":
            Z = j - I.offsetHeight / 2, le = N - I.offsetWidth - t.offset;
            break;
        }
        V(I, Z, le);
        return;
      }
      const K = p.value;
      if (!K) return;
      const Y = K.getBoundingClientRect();
      let re = 0, W = 0;
      switch (t.placement) {
        case "top":
          re = Y.top - I.offsetHeight - t.offset, W = Y.left + Y.width / 2 - I.offsetWidth / 2;
          break;
        case "right":
          re = Y.top + Y.height / 2 - I.offsetHeight / 2, W = Y.right + t.offset;
          break;
        case "bottom":
          re = Y.bottom + t.offset, W = Y.left + Y.width / 2 - I.offsetWidth / 2;
          break;
        case "left":
          re = Y.top + Y.height / 2 - I.offsetHeight / 2, W = Y.left - I.offsetWidth - t.offset;
          break;
      }
      V(I, re, W);
    }, V = (I, N, j) => {
      j = Math.max(8, j), j = Math.min(j, window.innerWidth - I.offsetWidth - 8), N = Math.max(8, N), N = Math.min(N, window.innerHeight - I.offsetHeight - 8), I.style.position = "fixed", I.style.top = `${N}px`, I.style.left = `${j}px`, I.style.zIndex = "9999", I.style.transition = "none";
    }, T = (I) => {
      n.value = I.clientX, r.value = I.clientY, i.value && (t.followCursor || t.unbound) && M();
    }, $ = () => {
      i.value && M();
    }, O = () => {
      i.value && M();
    }, A = (I) => {
      t.disabled || (n.value = I.clientX, r.value = I.clientY, (t.trigger === "hover" || t.trigger === "both") && (d(!0), me(M)));
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
      I && me(M), t.unbound && (o("update:modelValue", I), f.value = I);
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
    }), (I, N) => (w(), z(oe, null, [
      I.unbound ? G("", !0) : (w(), z("span", {
        key: 0,
        ref_key: "triggerRef",
        ref: p,
        onMouseenter: A,
        onMouseleave: P,
        onFocus: L,
        onBlur: F,
        "aria-describedby": x(m),
        class: b(c.value),
        role: "button",
        tabindex: "0"
      }, [
        _(I.$slots, "default")
      ], 42, ko)),
      (w(), Se(ot, { to: "body" }, [
        x(i) && !I.disabled ? (w(), z("div", {
          key: 0,
          ref_key: "tooltipRef",
          ref: k,
          class: b(v.value),
          style: de(D.value),
          id: x(m),
          role: "tooltip",
          "aria-live": "polite"
        }, [
          _(I.$slots, "content", {}, () => [
            ce(U(I.content), 1)
          ]),
          I.arrow && !I.followCursor && !I.unbound ? (w(), z("div", {
            key: 0,
            class: b(C.value)
          }, null, 2)) : G("", !0)
        ], 14, Co)) : G("", !0)
      ]))
    ], 64));
  }
}), So = Q(zo);
function Bo(l) {
  const a = H(l.modelValue ?? !1), e = () => {
    var r;
    l.disabled || !l.selectable || (a.value = !a.value, (r = l.onChange) == null || r.call(l, a.value));
  }, t = (r) => {
    var f;
    l.disabled || (r.stopPropagation(), (f = l.onClose) == null || f.call(l, r));
  }, o = h(() => a.value), n = h(() => l.closable || !!l.onClose);
  return {
    isSelected: o,
    isClosable: n,
    toggle: e,
    handleClose: t
  };
}
const Vo = R({
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
}), $o = ["aria-selected"], Io = ["disabled"], Do = /* @__PURE__ */ J({
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
    const e = l, t = a, { isSelected: o, isClosable: n, toggle: r, handleClose: f } = Bo({
      modelValue: e.modelValue,
      selectable: e.selectable,
      disabled: e.disabled,
      closable: e.closable,
      onClose: (y) => t("close", y),
      onChange: (y) => t("update:modelValue", y)
    }), s = h(() => {
      var y, u;
      return e.unstyled ? ((y = e.pt) == null ? void 0 : y.root) || "" : Vo({
        variant: e.variant,
        color: e.color,
        size: e.size,
        radius: e.radius,
        selected: o.value,
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
    }), p = h(() => {
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
    return (y, u) => (w(), z("span", {
      class: b(s.value),
      role: "option",
      "aria-selected": x(o),
      onClick: u[1] || (u[1] = //@ts-ignore
      (...c) => x(r) && x(r)(...c))
    }, [
      y.variant === "dot" ? (w(), z("span", {
        key: 0,
        class: b(i.value)
      }, null, 2)) : G("", !0),
      y.$slots.avatar ? _(y.$slots, "avatar", {
        key: 1,
        class: b(p.value)
      }) : y.avatar ? _(y.$slots, "avatarFallback", {
        key: 2,
        class: b(p.value)
      }, () => [
        B("span", {
          class: b(p.value)
        }, [
          (w(), Se(qe(y.avatar)))
        ], 2)
      ]) : G("", !0),
      y.$slots.startContent ? _(y.$slots, "startContent", {
        key: 3,
        class: b(k.value)
      }) : y.startContent ? _(y.$slots, "startContentFallback", {
        key: 4,
        class: b(k.value)
      }, () => [
        B("span", {
          class: b(k.value)
        }, [
          (w(), Se(qe(y.startContent)))
        ], 2)
      ]) : G("", !0),
      B("span", {
        class: b(m.value)
      }, [
        _(y.$slots, "default")
      ], 2),
      y.$slots.endContent ? _(y.$slots, "endContent", {
        key: 5,
        class: b(d.value)
      }) : y.endContent ? _(y.$slots, "endContentFallback", {
        key: 6,
        class: b(d.value)
      }, () => [
        B("span", {
          class: b(d.value)
        }, [
          (w(), Se(qe(y.endContent)))
        ], 2)
      ]) : G("", !0),
      x(n) ? (w(), z("button", {
        key: 7,
        type: "button",
        class: b(g.value),
        onClick: u[0] || (u[0] = Ce(
          //@ts-ignore
          (...c) => x(f) && x(f)(...c),
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
      ]), 10, Io)) : G("", !0)
    ], 10, $o));
  }
}), Mo = Q(Do), To = R({
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
}), Ro = R({
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
}), Eo = R({
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
}), Lo = R({
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
}), Ao = R({
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
}), Oo = ["innerHTML"], Po = { class: "flex-1" }, jo = /* @__PURE__ */ J({
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
    const e = l, t = a, o = H(!0), n = () => {
      o.value = !1, t("close");
    }, r = h(
      () => {
        var m, d;
        return e.unstyled ? ((m = e.pt) == null ? void 0 : m.root) || "" : To({
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
        return e.unstyled ? ((m = e.pt) == null ? void 0 : m.icon) || "" : Ro({
          variant: e.variant,
          size: e.size,
          class: (d = e.pt) == null ? void 0 : d.icon
        });
      }
    ), s = h(
      () => {
        var m, d;
        return e.unstyled ? ((m = e.pt) == null ? void 0 : m.title) || "" : Eo({
          size: e.size,
          class: (d = e.pt) == null ? void 0 : d.title
        });
      }
    ), i = h(
      () => {
        var m, d;
        return e.unstyled ? ((m = e.pt) == null ? void 0 : m.description) || "" : Lo({
          size: e.size,
          class: (d = e.pt) == null ? void 0 : d.description
        });
      }
    ), p = h(
      () => {
        var m, d;
        return e.unstyled ? ((m = e.pt) == null ? void 0 : m.closeButton) || "" : Ao({
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
    return (m, d) => o.value ? (w(), z("div", {
      key: 0,
      class: b(r.value)
    }, [
      m.icon ? (w(), z("div", {
        key: 0,
        class: b(f.value)
      }, [
        _(m.$slots, "icon", {}, () => [
          B("span", {
            innerHTML: k[m.variant]
          }, null, 8, Oo)
        ])
      ], 2)) : G("", !0),
      B("div", Po, [
        m.$slots.title || m.title ? (w(), z("div", {
          key: 0,
          class: b(s.value)
        }, [
          _(m.$slots, "title", {}, () => [
            ce(U(m.title), 1)
          ])
        ], 2)) : G("", !0),
        B("div", {
          class: b(i.value)
        }, [
          _(m.$slots, "default", {}, () => [
            ce(U(m.description), 1)
          ])
        ], 2)
      ]),
      m.closable ? (w(), z("button", {
        key: 1,
        class: b(p.value),
        onClick: n,
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
      ], 2)) : G("", !0)
    ], 2)) : G("", !0);
  }
}), Fo = Q(jo), Wo = R({
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
}), Ho = /* @__PURE__ */ J({
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
      var t, o;
      return a.unstyled ? ((t = a.pt) == null ? void 0 : t.root) || "" : Wo({
        size: a.size,
        variant: a.variant,
        class: (o = a.pt) == null ? void 0 : o.root
      });
    });
    return (t, o) => (w(), z("kbd", {
      class: b(e.value)
    }, [
      _(t.$slots, "default")
    ], 2));
  }
}), Go = Q(Ho), No = R({
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
}), _o = {
  click: (l) => l instanceof MouseEvent
}, Ko = (l, a) => ({
  _ref: H(null),
  handleClick: (o) => {
    if (l.disabled || l.loading) {
      o.stopPropagation();
      return;
    } else
      a("click", o);
  }
}), Yo = ["type", "disabled"], Uo = { key: 0 }, Xo = {
  key: 1,
  class: "inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
}, qo = /* @__PURE__ */ J({
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
  emits: _o,
  setup(l, { expose: a, emit: e }) {
    const t = e, o = l, { _ref: n, handleClick: r } = Ko(o, t), f = h(() => {
      var p, k;
      return o.unstyled ? ((p = o.pt) == null ? void 0 : p.root) || "" : No({
        variant: o.variant,
        size: o.size,
        fullWidth: o.fullWidth,
        rounded: o.rounded,
        disabled: o.disabled || o.loading,
        class: (k = o.pt) == null ? void 0 : k.root
      });
    }), s = h(() => {
      var p;
      return o.unstyled ? ((p = o.pt) == null ? void 0 : p.loader) || "" : "mr-2";
    }), i = h(() => {
      var p;
      return o.unstyled && ((p = o.pt) == null ? void 0 : p.icon) || "";
    });
    return a({
      _ref: n,
      handleClick: r
    }), (p, k) => (w(), z("button", {
      class: b(f.value),
      type: p.type,
      disabled: p.disabled || p.loading,
      ref_key: "_ref",
      ref: n,
      onClick: k[0] || (k[0] = //@ts-ignore
      (...m) => x(r) && x(r)(...m))
    }, [
      p.loading ? (w(), z("span", {
        key: 0,
        class: b(s.value)
      }, [
        p.$slots.loading ? (w(), z("span", Uo, [
          _(p.$slots, "loading")
        ])) : (w(), z("span", Xo))
      ], 2)) : p.$slots.icon ? (w(), z("span", {
        key: 1,
        class: b(i.value)
      }, [
        _(p.$slots, "icon")
      ], 2)) : G("", !0),
      _(p.$slots, "default")
    ], 10, Yo));
  }
}), Zo = Q(qo), Jo = R({
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
}), Qo = /* @__PURE__ */ J({
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
      var r, f;
      return a.unstyled ? ((r = a.pt) == null ? void 0 : r.root) || "" : Jo({
        variant: a.variant,
        padding: a.padding,
        radius: a.radius,
        hover: a.hover,
        class: (f = a.pt) == null ? void 0 : f.root
      });
    }), t = h(() => {
      var r;
      return a.unstyled ? ((r = a.pt) == null ? void 0 : r.header) || "" : "mb-4";
    }), o = h(() => {
      var r;
      return a.unstyled && ((r = a.pt) == null ? void 0 : r.body) || "";
    }), n = h(() => {
      var r;
      return a.unstyled ? ((r = a.pt) == null ? void 0 : r.footer) || "" : "mt-4 flex justify-end";
    });
    return (r, f) => (w(), z("div", {
      class: b(e.value)
    }, [
      r.$slots.header ? (w(), z("div", {
        key: 0,
        class: b(t.value)
      }, [
        _(r.$slots, "header")
      ], 2)) : G("", !0),
      B("div", {
        class: b(o.value)
      }, [
        _(r.$slots, "default")
      ], 2),
      r.$slots.footer ? (w(), z("div", {
        key: 1,
        class: b(n.value)
      }, [
        _(r.$slots, "footer")
      ], 2)) : G("", !0)
    ], 2));
  }
}), er = Q(Qo), tr = R({
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
}), lr = /* @__PURE__ */ J({
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
      var s;
      return !!a.label || !!((s = e.default) != null && s.call(e));
    }), o = h(() => a.as ? a.as : a.orientation === "horizontal" && !t.value ? "hr" : "div"), n = h(() => {
      var s, i;
      return a.unstyled ? ((s = a.pt) == null ? void 0 : s.root) || "" : tr({
        orientation: a.orientation,
        variant: a.variant,
        size: a.size,
        labelPosition: a.labelPosition,
        withLabel: t.value,
        class: (i = a.pt) == null ? void 0 : i.root
      });
    }), r = h(() => {
      var s;
      return a.unstyled ? ((s = a.pt) == null ? void 0 : s.label) || "" : "px-2 text-gray-500";
    }), f = h(() => !a.unstyled && a.color ? {
      borderColor: a.color,
      "--tw-border-opacity": 1,
      "before:border-color": a.color,
      "after:border-color": a.color
    } : {});
    return (s, i) => (w(), Se(qe(o.value), {
      class: b(n.value),
      style: de(f.value),
      role: "separator",
      "aria-orientation": s.orientation,
      "data-orientation": s.orientation
    }, {
      default: rt(() => [
        t.value ? (w(), z("div", {
          key: 0,
          class: b(r.value)
        }, [
          _(s.$slots, "default", {}, () => [
            ce(U(s.label), 1)
          ])
        ], 2)) : G("", !0)
      ]),
      _: 3
    }, 8, ["class", "style", "aria-orientation", "data-orientation"]));
  }
}), ar = Q(lr), or = R({
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
}), rr = ["value", "placeholder", "disabled", "readonly", "rows", "maxlength", "minlength"], nr = /* @__PURE__ */ J({
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
    const e = l, t = a, o = h(() => {
      var i;
      return ((i = e.pt) == null ? void 0 : i.root) || "w-full";
    }), n = h(() => {
      var i, p;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.textarea) || "" : or({
        size: e.size,
        status: e.status,
        resize: e.resize,
        class: (p = e.pt) == null ? void 0 : p.textarea
      });
    }), r = h(() => {
      var i, p;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.counter) || "" : ((p = e.pt) == null ? void 0 : p.counter) || "mt-1 text-right text-sm text-gray-500";
    }), f = (i) => {
      const p = i.target;
      t("update:modelValue", p.value), e.autosize && s(p);
    }, s = (i) => {
      i.style.height = "auto", i.style.height = `${i.scrollHeight}px`;
    };
    return ve(() => {
      if (e.autosize) {
        const i = document.querySelector("textarea");
        i && s(i);
      }
    }), (i, p) => {
      var k;
      return w(), z("div", {
        class: b(o.value)
      }, [
        B("textarea", {
          class: b(n.value),
          value: i.modelValue,
          placeholder: i.placeholder,
          disabled: i.disabled,
          readonly: i.readonly,
          rows: i.rows,
          maxlength: i.maxLength,
          minlength: i.minLength,
          onInput: f
        }, null, 42, rr),
        i.showCount && i.maxLength ? (w(), z("div", {
          key: 0,
          class: b(r.value)
        }, U(((k = i.modelValue) == null ? void 0 : k.length) || 0) + "/" + U(i.maxLength), 3)) : G("", !0)
      ], 2);
    };
  }
}), sr = Q(nr), lt = R({
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
}), ir = ["checked", "disabled"], ur = /* @__PURE__ */ J({
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
    const e = l, t = a, o = Be("checkbox-group", null), n = h(() => {
      if (o) {
        const y = e.value;
        return o.modelValue.value.includes(
          y
        );
      }
      return Array.isArray(e.modelValue) ? e.modelValue.includes(e.value) : !!e.modelValue;
    }), r = h(() => (o == null ? void 0 : o.disabled.value) || !1 || e.disabled), f = h(() => (o == null ? void 0 : o.size.value) || e.size || "default"), s = h(() => (o == null ? void 0 : o.color.value) || e.color || "blue"), i = () => {
      if (!r.value)
        if (o) {
          const y = e.value, u = [...o.modelValue.value], c = u.indexOf(y);
          if (c === -1) {
            if (o.max.value && u.length >= o.max.value)
              return;
            u.push(y);
          } else {
            if (o.min.value && u.length <= o.min.value)
              return;
            u.splice(c, 1);
          }
          o.changeEvent(u);
        } else if (Array.isArray(e.modelValue)) {
          const y = e.value, u = [...e.modelValue], c = u.indexOf(y);
          c === -1 ? u.push(y) : u.splice(c, 1), t("update:modelValue", u), t("change", u);
        } else {
          const y = !e.modelValue;
          t("update:modelValue", y), t("change", y);
        }
    }, p = (y) => {
      (y.key === "Enter" || y.key === " ") && (y.preventDefault(), i());
    }, k = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.root) || "" : lt({
        checked: n.value,
        disabled: r.value,
        size: f.value,
        color: s.value
      }).root({ class: (c = e.pt) == null ? void 0 : c.root });
    }), m = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.checkbox) || "" : lt({
        checked: n.value,
        disabled: r.value,
        size: f.value,
        color: s.value
      }).checkbox({ class: (c = e.pt) == null ? void 0 : c.checkbox });
    }), d = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.icon) || "" : lt({
        checked: n.value,
        disabled: r.value,
        size: f.value,
        color: s.value
      }).icon({ class: (c = e.pt) == null ? void 0 : c.icon });
    }), g = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.label) || "" : lt({
        checked: n.value,
        disabled: r.value,
        size: f.value,
        color: s.value
      }).label({ class: (c = e.pt) == null ? void 0 : c.label });
    });
    return (y, u) => (w(), z("label", {
      class: b(k.value),
      onClick: Ce(i, ["prevent"]),
      onKeydown: p,
      tabindex: "0"
    }, [
      B("input", {
        type: "checkbox",
        class: "sr-only",
        checked: n.value,
        disabled: r.value
      }, null, 8, ir),
      B("div", {
        class: b(m.value)
      }, [
        n.value ? (w(), z("span", {
          key: 0,
          class: b(d.value)
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
        ]), 2)) : G("", !0)
      ], 2),
      e.label ? (w(), z("span", {
        key: 0,
        class: b(g.value)
      }, U(e.label), 3)) : _(y.$slots, "default", { key: 1 })
    ], 34));
  }
}), dr = /* @__PURE__ */ J({
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
    const e = l, t = a, o = (n) => {
      t("update:modelValue", n), t("change", n);
    };
    return Ve("checkbox-group", {
      modelValue: xe(e, "modelValue"),
      disabled: xe(e, "disabled"),
      size: xe(e, "size"),
      color: xe(e, "color"),
      min: xe(e, "min"),
      max: xe(e, "max"),
      changeEvent: o
    }), (n, r) => (w(), z("div", {
      class: b(["flex flex-wrap", [n.direction === "vertical" ? "flex-col gap-2" : "flex-row gap-4"]]),
      role: "group",
      "aria-label": "checkbox-group"
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), cr = Q(ur), fr = Q(dr), Le = R({
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
function pr(l) {
  var f;
  const a = H(((f = l.modelValue) == null ? void 0 : f.toString()) || ""), e = H(null), t = (s) => {
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
  return te(
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
const br = ["type", "value", "placeholder", "disabled", "readonly", "maxlength", "autofocus"], vr = /* @__PURE__ */ J({
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
    const t = l, o = e, { inputValue: n, inputRef: r, updateValue: f, clearInput: s, focus: i, blur: p } = pr(
      {
        modelValue: t.modelValue,
        type: t.type,
        disabled: t.disabled,
        readonly: t.readonly,
        maxlength: t.maxlength,
        onChange: (v) => o("update:modelValue", v)
      }
    ), k = h(() => {
      var C, D;
      return t.unstyled ? ((C = t.pt) == null ? void 0 : C.root) || "" : Le({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).root({ class: (D = t.pt) == null ? void 0 : D.root });
    }), m = h(() => {
      var C, D;
      return t.unstyled ? ((C = t.pt) == null ? void 0 : C.wrapper) || "" : Le({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).wrapper({ class: (D = t.pt) == null ? void 0 : D.wrapper });
    }), d = h(() => {
      var C, D;
      return t.unstyled ? ((C = t.pt) == null ? void 0 : C.input) || "" : Le({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).input({ class: (D = t.pt) == null ? void 0 : D.input });
    }), g = h(() => {
      var C, D;
      return t.unstyled ? ((C = t.pt) == null ? void 0 : C.prefix) || "" : Le({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).prefix({ class: (D = t.pt) == null ? void 0 : D.prefix });
    }), y = h(() => {
      var C, D;
      return t.unstyled ? ((C = t.pt) == null ? void 0 : C.suffix) || "" : Le({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).suffix({ class: (D = t.pt) == null ? void 0 : D.suffix });
    }), u = h(() => {
      var C, D;
      return t.unstyled ? ((C = t.pt) == null ? void 0 : C.clear) || "" : Le({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).clear({ class: (D = t.pt) == null ? void 0 : D.clear });
    }), c = h(() => {
      var C, D;
      return t.unstyled ? ((C = t.pt) == null ? void 0 : C.count) || "" : Le({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).count({ class: (D = t.pt) == null ? void 0 : D.count });
    });
    return a({
      focus: i,
      blur: p,
      inputRef: r
    }), (v, C) => (w(), z("div", {
      class: b(k.value)
    }, [
      B("div", {
        class: b([m.value, t.readonly && "cursor-default"])
      }, [
        t.prefixIcon ? (w(), z("div", {
          key: 0,
          class: b(g.value)
        }, [
          B("i", {
            class: b(t.prefixIcon)
          }, null, 2)
        ], 2)) : G("", !0),
        B("input", {
          type: t.type,
          class: b(d.value),
          value: x(n),
          placeholder: t.placeholder,
          disabled: t.disabled,
          readonly: t.readonly,
          maxlength: t.maxlength,
          autofocus: t.autofocus,
          ref_key: "inputRef",
          ref: r,
          onInput: C[0] || (C[0] = (D) => x(f)(D.target.value)),
          onFocus: C[1] || (C[1] = (D) => v.$emit("focus", D)),
          onBlur: C[2] || (C[2] = (D) => v.$emit("blur", D))
        }, null, 42, br),
        t.clearable && x(n) && !t.disabled && !t.readonly ? (w(), z("div", {
          key: 1,
          class: b([y.value, u.value]),
          onClick: C[3] || (C[3] = //@ts-ignore
          (...D) => x(s) && x(s)(...D))
        }, C[4] || (C[4] = [
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
        ]), 2)) : G("", !0),
        t.suffixIcon ? (w(), z("div", {
          key: 2,
          class: b(y.value)
        }, [
          B("i", {
            class: b(t.suffixIcon)
          }, null, 2)
        ], 2)) : G("", !0)
      ], 2),
      t.showCount && t.maxlength ? (w(), z("div", {
        key: 0,
        class: b(c.value)
      }, U(x(n).length) + "/" + U(t.maxlength), 3)) : G("", !0)
    ], 2));
  }
}), gr = Q(vr);
function mr(l) {
  const a = H(!1), e = H(""), t = H(0), o = H(null), n = H(null), r = H(l.modelValue);
  te(
    () => l.modelValue,
    (A) => {
      r.value = A;
    },
    { immediate: !0 }
  );
  const f = h(() => {
    var A;
    return ((A = l.options) == null ? void 0 : A.map((L) => ({
      ...L,
      disabled: L.disabled || !1
    }))) || [];
  }), s = h(() => {
    const A = {}, L = [];
    return f.value.forEach((P) => {
      P.group ? (A[P.group] || (A[P.group] = []), A[P.group].push(P)) : L.push(P);
    }), { groups: A, noGroup: L };
  }), i = h(() => l.multiple ? Array.isArray(r.value) ? r.value : [] : r.value !== void 0 ? [r.value] : []), p = h(() => {
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
    return !p.value || p.value.length === 0 ? "" : ((A = p.value[0]) == null ? void 0 : A.label) || "";
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
    r.value = L, (P = l.onChange) == null || P.call(l, L), l.filterable && me(() => {
      e.value = "";
    });
  }, g = (A) => {
    var P;
    if (A && A.stopPropagation(), l.disabled || l.readonly) return;
    const L = l.multiple ? [] : void 0;
    r.value = L, (P = l.onChange) == null || P.call(l, L);
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
  }, C = (A) => i.value.some((L) => String(L) === String(A)), D = (A) => {
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
    a.value && o.value && n.value && !o.value.contains(A.target) && !n.value.contains(A.target) && c();
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
    triggerRef: o,
    dropdownRef: n,
    selectedValues: i,
    selectedOptions: p,
    getOptionLabel: k,
    filteredOptions: m,
    groupedOptions: s,
    selectOption: d,
    clearSelection: g,
    toggleDropdown: y,
    openDropdown: u,
    closeDropdown: c,
    isSelected: C,
    onKeyDown: D,
    onSearchInput: M,
    cleanup: O
  };
}
const yr = R({
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
const hr = {
  key: 0,
  class: "text-red-500"
}, wr = ["aria-expanded", "aria-disabled", "aria-readonly", "aria-required"], xr = {
  key: 0,
  class: "flex flex-wrap gap-1"
}, kr = { class: "truncate" }, Cr = ["onClick"], zr = {
  key: 1,
  class: "truncate"
}, Sr = { class: "flex items-center" }, Br = ["aria-multiselectable"], Vr = {
  key: 0,
  class: "sticky top-0"
}, $r = ["value"], Ir = ["onClick", "aria-selected", "aria-disabled"], Dr = ["onClick", "aria-selected", "aria-disabled"], Mr = { class: "px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400" }, Tr = ["onClick", "aria-selected", "aria-disabled"], Rr = {
  key: 1,
  class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
}, Er = {
  key: 2,
  class: "mt-1 text-xs text-red-500"
}, Lr = /* @__PURE__ */ J({
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
    const t = l, o = e, n = yr(), r = h(() => {
      var E, I, N, j, K, Y, re, W, Z, le, ee, ne, ue, fe, ge, pe, ze, ye, ie, Pe, je, xt, kt, Ct, zt, St, Bt, Vt, $t, It, Dt, Mt, Tt;
      return t.unstyled ? {
        root: ((E = t.pt) == null ? void 0 : E.root) || "",
        trigger: ((I = t.pt) == null ? void 0 : I.trigger) || "",
        value: ((N = t.pt) == null ? void 0 : N.value) || "",
        placeholder: ((j = t.pt) == null ? void 0 : j.placeholder) || "",
        dropdown: ((K = t.pt) == null ? void 0 : K.dropdown) || "",
        option: ((Y = t.pt) == null ? void 0 : Y.option) || "",
        optionSelected: ((re = t.pt) == null ? void 0 : re.optionSelected) || "",
        optionActive: ((W = t.pt) == null ? void 0 : W.optionActive) || "",
        optionDisabled: ((Z = t.pt) == null ? void 0 : Z.optionDisabled) || "",
        icon: ((le = t.pt) == null ? void 0 : le.icon) || "",
        clearIcon: ((ee = t.pt) == null ? void 0 : ee.clearIcon) || "",
        checkIcon: ((ne = t.pt) == null ? void 0 : ne.checkIcon) || "",
        search: ((ue = t.pt) == null ? void 0 : ue.search) || "",
        tag: ((fe = t.pt) == null ? void 0 : fe.tag) || "",
        tagRemove: ((ge = t.pt) == null ? void 0 : ge.tagRemove) || "",
        noMatch: ((pe = t.pt) == null ? void 0 : pe.noMatch) || "",
        label: ((ze = t.pt) == null ? void 0 : ze.label) || ""
      } : {
        root: n.root({
          size: t.size,
          status: t.status,
          disabled: t.disabled,
          multiple: t.multiple,
          open: i.value,
          class: (ye = t.pt) == null ? void 0 : ye.root
        }),
        trigger: n.trigger({
          size: t.size,
          status: t.status,
          disabled: t.disabled,
          multiple: t.multiple,
          open: i.value,
          class: (ie = t.pt) == null ? void 0 : ie.trigger
        }),
        value: n.value({
          multiple: t.multiple,
          class: (Pe = t.pt) == null ? void 0 : Pe.value
        }),
        placeholder: n.placeholder({ class: (je = t.pt) == null ? void 0 : je.placeholder }),
        dropdown: n.dropdown({ class: (xt = t.pt) == null ? void 0 : xt.dropdown }),
        option: n.option({ class: (kt = t.pt) == null ? void 0 : kt.option }),
        optionSelected: n.optionSelected({ class: (Ct = t.pt) == null ? void 0 : Ct.optionSelected }),
        optionActive: n.optionActive({ class: (zt = t.pt) == null ? void 0 : zt.optionActive }),
        optionDisabled: n.optionDisabled({ class: (St = t.pt) == null ? void 0 : St.optionDisabled }),
        icon: n.icon({ class: (Bt = t.pt) == null ? void 0 : Bt.icon }),
        clearIcon: n.clearIcon({ class: (Vt = t.pt) == null ? void 0 : Vt.clearIcon }),
        checkIcon: n.checkIcon({ class: ($t = t.pt) == null ? void 0 : $t.checkIcon }),
        search: n.search({ class: (It = t.pt) == null ? void 0 : It.search }),
        tag: n.tag({ class: (Dt = t.pt) == null ? void 0 : Dt.tag }),
        tagRemove: n.tagRemove({ class: (Mt = t.pt) == null ? void 0 : Mt.tagRemove }),
        noMatch: n.noMatch({ class: (Tt = t.pt) == null ? void 0 : Tt.noMatch })
      };
    }), f = `versa-select-dropdown-${Math.random().toString(36).substring(2, 9)}`, s = H(null), {
      isOpen: i,
      searchValue: p,
      activeIndex: k,
      triggerRef: m,
      dropdownRef: d,
      selectedValues: g,
      selectedOptions: y,
      getOptionLabel: u,
      filteredOptions: c,
      groupedOptions: v,
      selectOption: C,
      clearSelection: D,
      toggleDropdown: M,
      openDropdown: V,
      closeDropdown: T,
      isSelected: $,
      onKeyDown: O,
      onSearchInput: A,
      cleanup: L
    } = mr({
      modelValue: t.modelValue,
      options: t.options,
      multiple: t.multiple,
      filterable: t.filterable,
      disabled: t.disabled,
      readonly: t.readonly,
      onChange: (E) => {
        o("update:modelValue", E), o("change", E), (E === void 0 || Array.isArray(E) && E.length === 0) && o("clear");
      },
      onSearch: (E) => {
        o("search", E);
      },
      onDropdownVisibleChange: (E) => {
        o("dropdown-visible-change", E), E && t.filterable && setTimeout(() => {
          var I;
          (I = s.value) == null || I.focus();
        }, 0);
      }
    }), P = h(() => Object.keys(v.value.groups).length > 0), F = (E, I) => {
      let N = 0;
      if (E === null)
        return I;
      N += v.value.noGroup.length;
      const j = Object.keys(v.value.groups);
      for (let K = 0; K < j.length; K++) {
        const Y = j[K];
        if (Y === E)
          return N + I;
        N += v.value.groups[Y].length;
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
      var N;
      return w(), z("div", {
        class: b(r.value.root)
      }, [
        t.showLabel && t.label ? (w(), z("label", {
          key: 0,
          class: b(
            ((N = t.pt) == null ? void 0 : N.label) || "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          )
        }, [
          ce(U(t.label) + " ", 1),
          t.required ? (w(), z("span", hr, "*")) : G("", !0)
        ], 2)) : G("", !0),
        B("div", {
          ref_key: "triggerRef",
          ref: m,
          class: b(r.value.trigger),
          onClick: I[1] || (I[1] = (j) => !t.disabled && !t.readonly && x(M)()),
          onKeydown: I[2] || (I[2] = //@ts-ignore
          (...j) => x(O) && x(O)(...j)),
          tabindex: "0",
          role: "combobox",
          "aria-expanded": x(i),
          "aria-disabled": t.disabled,
          "aria-readonly": t.readonly,
          "aria-required": t.required,
          "aria-haspopup": !0,
          "aria-controls": f
        }, [
          B("div", {
            class: b(r.value.value)
          }, [
            t.multiple && x(y).length ? (w(), z("div", xr, [
              (w(!0), z(oe, null, se(x(y), (j) => (w(), z("div", {
                key: j.value,
                class: b(r.value.tag)
              }, [
                B("span", kr, U(j.label), 1),
                !t.disabled && !t.readonly ? (w(), z("button", {
                  key: 0,
                  type: "button",
                  class: b(r.value.tagRemove),
                  onClick: Ce((K) => x(C)(j), ["stop"]),
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
                ]), 10, Cr)) : G("", !0)
              ], 2))), 128))
            ])) : x(y).length ? (w(), z("div", zr, U(x(u)), 1)) : (w(), z("div", {
              key: 2,
              class: b(r.value.placeholder)
            }, U(t.placeholder), 3))
          ], 2),
          B("div", Sr, [
            t.clearable && x(g).length && !t.disabled && !t.readonly ? (w(), z("button", {
              key: 0,
              type: "button",
              class: b(r.value.clearIcon),
              onClick: I[0] || (I[0] = Ce(
                //@ts-ignore
                (...j) => x(D) && x(D)(...j),
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
            ]), 2)) : G("", !0),
            B("div", {
              class: b(r.value.icon)
            }, [
              (w(), z("svg", {
                viewBox: "0 0 24 24",
                width: "16",
                height: "16",
                stroke: "currentColor",
                "stroke-width": "2",
                fill: "none",
                style: de({ transform: x(i) ? "rotate(180deg)" : void 0 }),
                class: "transition-transform duration-200"
              }, I[6] || (I[6] = [
                B("polyline", { points: "6 9 12 15 18 9" }, null, -1)
              ]), 4))
            ], 2)
          ])
        ], 42, wr),
        Oe(Ft, { name: "versa-select-dropdown" }, {
          default: rt(() => [
            x(i) ? (w(), z("div", {
              key: 0,
              ref_key: "dropdownRef",
              ref: d,
              id: f,
              class: b(r.value.dropdown),
              style: de({ maxHeight: `${t.maxDropdownHeight}px` }),
              role: "listbox",
              "aria-multiselectable": t.multiple
            }, [
              t.filterable ? (w(), z("div", Vr, [
                B("input", {
                  ref_key: "searchInputRef",
                  ref: s,
                  class: b(r.value.search),
                  type: "text",
                  value: x(p),
                  onInput: S,
                  placeholder: "搜索...",
                  onKeydown: I[3] || (I[3] = Ce(() => {
                  }, ["stop"]))
                }, null, 42, $r)
              ])) : G("", !0),
              B("div", null, [
                P.value ? (w(), z(oe, { key: 1 }, [
                  x(v).noGroup.length ? (w(!0), z(oe, { key: 0 }, se(x(v).noGroup, (j, K) => (w(), z("div", {
                    key: j.value,
                    class: b([
                      r.value.option,
                      {
                        [r.value.optionSelected]: x($)(j.value),
                        [r.value.optionActive]: x(k) === K,
                        [r.value.optionDisabled]: j.disabled
                      }
                    ]),
                    onClick: Ce((Y) => !j.disabled && x(C)(j), ["stop"]),
                    role: "option",
                    "aria-selected": x($)(j.value),
                    "aria-disabled": j.disabled
                  }, [
                    ce(U(j.label) + " ", 1),
                    x($)(j.value) ? (w(), z("svg", {
                      key: 0,
                      class: b(r.value.checkIcon),
                      viewBox: "0 0 24 24",
                      width: "16",
                      height: "16",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      fill: "none"
                    }, I[8] || (I[8] = [
                      B("polyline", { points: "20 6 9 17 4 12" }, null, -1)
                    ]), 2)) : G("", !0)
                  ], 10, Dr))), 128)) : G("", !0),
                  (w(!0), z(oe, null, se(x(v).groups, (j, K) => (w(), z(oe, { key: K }, [
                    B("div", Mr, U(K), 1),
                    (w(!0), z(oe, null, se(j, (Y, re) => (w(), z("div", {
                      key: Y.value,
                      class: b([
                        r.value.option,
                        "pl-5",
                        {
                          [r.value.optionSelected]: x($)(Y.value),
                          [r.value.optionActive]: F(K, re) === x(k),
                          [r.value.optionDisabled]: Y.disabled
                        }
                      ]),
                      onClick: Ce((W) => !Y.disabled && x(C)(Y), ["stop"]),
                      role: "option",
                      "aria-selected": x($)(Y.value),
                      "aria-disabled": Y.disabled
                    }, [
                      ce(U(Y.label) + " ", 1),
                      x($)(Y.value) ? (w(), z("svg", {
                        key: 0,
                        class: b(r.value.checkIcon),
                        viewBox: "0 0 24 24",
                        width: "16",
                        height: "16",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        fill: "none"
                      }, I[9] || (I[9] = [
                        B("polyline", { points: "20 6 9 17 4 12" }, null, -1)
                      ]), 2)) : G("", !0)
                    ], 10, Tr))), 128))
                  ], 64))), 128))
                ], 64)) : (w(), z(oe, { key: 0 }, [
                  x(c).length ? (w(!0), z(oe, { key: 0 }, se(x(c), (j, K) => (w(), z("div", {
                    key: j.value,
                    class: b([
                      r.value.option,
                      {
                        [r.value.optionSelected]: x($)(j.value),
                        [r.value.optionActive]: x(k) === K,
                        [r.value.optionDisabled]: j.disabled
                      }
                    ]),
                    onClick: Ce((Y) => !j.disabled && x(C)(j), ["stop"]),
                    role: "option",
                    "aria-selected": x($)(j.value),
                    "aria-disabled": j.disabled
                  }, [
                    ce(U(j.label) + " ", 1),
                    x($)(j.value) ? (w(), z("svg", {
                      key: 0,
                      class: b(r.value.checkIcon),
                      viewBox: "0 0 24 24",
                      width: "16",
                      height: "16",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      fill: "none"
                    }, I[7] || (I[7] = [
                      B("polyline", { points: "20 6 9 17 4 12" }, null, -1)
                    ]), 2)) : G("", !0)
                  ], 10, Ir))), 128)) : (w(), z("div", {
                    key: 1,
                    class: b(r.value.noMatch)
                  }, U(t.noMatchText), 3))
                ], 64))
              ])
            ], 14, Br)) : G("", !0)
          ]),
          _: 1
        }),
        t.helpText && !t.errorText ? (w(), z("div", Rr, U(t.helpText), 1)) : G("", !0),
        t.errorText ? (w(), z("div", Er, U(t.errorText), 1)) : G("", !0)
      ], 2);
    };
  }
}), Ar = Q(Lr);
function Or(l) {
  const a = H(l.modelValue ?? 0), e = H(-1), t = H(!1);
  return te(
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
          const m = s.currentTarget.getBoundingClientRect(), d = s.clientX - m.left < m.width / 2;
          e.value = d ? i + 0.5 : i + 1;
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
const Pr = R({
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
}), jr = R({
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
}), Fr = R({
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
}), Wr = R({
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
}), Hr = R({
  base: "text-gray-300 dark:text-gray-600"
}), Gr = R({
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
}), Nr = {
  "update:modelValue": (l) => typeof l == "number",
  change: (l) => typeof l == "number",
  "hover-change": (l) => typeof l == "number"
}, _r = ["onClick", "onMousemove", "aria-checked", "aria-disabled", "aria-readonly", "tabindex"], Kr = /* @__PURE__ */ J({
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
  emits: Nr,
  setup(l, { emit: a }) {
    const e = l, t = a, {
      currentValue: o,
      getStarValue: n,
      handleClick: r,
      handleMouseMove: f,
      handleMouseLeave: s
    } = Or({
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
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.container) || "" : Pr({
        disabled: e.disabled,
        class: (c = e.pt) == null ? void 0 : c.container
      });
    }), p = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.item) || "" : jr({
        size: e.size,
        disabled: e.disabled,
        readonly: e.readonly,
        class: (c = e.pt) == null ? void 0 : c.item
      });
    }), k = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.score) || "" : Fr({
        size: e.size,
        class: (c = e.pt) == null ? void 0 : c.score
      });
    }), m = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.fullStar) || "absolute inset-0 overflow-hidden w-full" : Wr({
        color: e.color,
        class: (c = e.pt) == null ? void 0 : c.fullStar
      }) + " w-full";
    }), d = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.halfStar) || "absolute inset-0 overflow-hidden w-1/2" : Gr({
        color: e.color,
        class: (c = e.pt) == null ? void 0 : c.halfStar
      }) + " w-1/2";
    }), g = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.voidStar) || "" : Hr({
        class: (c = e.pt) == null ? void 0 : c.voidStar
      });
    }), y = (u) => e.formatTooltip ? e.formatTooltip(u) : u.toString();
    return (u, c) => (w(), z("div", {
      class: b(i.value),
      onMouseleave: c[0] || (c[0] = //@ts-ignore
      (...v) => x(s) && x(s)(...v)),
      role: "radiogroup",
      "aria-label": "评分"
    }, [
      (w(!0), z(oe, null, se(u.max, (v) => (w(), z("div", {
        key: v,
        class: b(p.value),
        onClick: (C) => x(r)(v - 1, !1),
        onMousemove: (C) => x(f)(C, v - 1),
        role: "radio",
        "aria-checked": x(n)(v - 1) > 0,
        "aria-disabled": u.disabled,
        "aria-readonly": u.readonly,
        tabindex: u.disabled ? -1 : 0
      }, [
        B("span", {
          class: b(g.value)
        }, [
          _(u.$slots, "character", {}, () => [
            ce(U(u.character || "★"), 1)
          ], !0)
        ], 2),
        x(n)(v - 1) === 1 ? (w(), z("span", {
          key: 0,
          class: b(m.value)
        }, [
          _(u.$slots, "character", {}, () => [
            ce(U(u.character || "★"), 1)
          ], !0)
        ], 2)) : x(n)(v - 1) === 0.5 ? (w(), z("span", {
          key: 1,
          class: b(d.value)
        }, [
          _(u.$slots, "character", {}, () => [
            ce(U(u.character || "★"), 1)
          ], !0)
        ], 2)) : G("", !0)
      ], 42, _r))), 128)),
      u.showScore ? (w(), z("span", {
        key: 0,
        class: b(k.value)
      }, U(y(x(o))), 3)) : G("", !0)
    ], 34));
  }
}), Yr = /* @__PURE__ */ ll(Kr, [["__scopeId", "data-v-ae42a8b5"]]), Ur = Q(Yr), Xr = (l, a) => {
  const e = H(l.modelValue || /* @__PURE__ */ new Date()), t = H(e.value.getMonth()), o = H(e.value.getFullYear()), n = h(() => {
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
  }), r = h(() => {
    const k = o.value, m = t.value, d = new Date(k, m, 1).getDay(), g = new Date(k, m + 1, 0).getDate(), y = l.firstDayOfWeek || 0, u = [], c = new Date(k, m, 0).getDate(), v = (d - y + 7) % 7;
    for (let M = c - v + 1; M <= c; M++)
      u.push({
        date: new Date(k, m - 1, M),
        day: M,
        isCurrentMonth: !1,
        isToday: !1,
        isSelected: !1,
        isDisabled: !1
      });
    const C = /* @__PURE__ */ new Date();
    for (let M = 1; M <= g; M++) {
      const V = new Date(k, m, M), T = C.getDate() === M && C.getMonth() === m && C.getFullYear() === k, $ = l.modelValue && l.modelValue.getDate() === M && l.modelValue.getMonth() === m && l.modelValue.getFullYear() === k, O = l.disabled || l.min && V < l.min || l.max && V > l.max;
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
      new Date(o.value, t.value)
    );
  }), s = () => {
    t.value === 0 ? (t.value = 11, o.value--) : t.value--;
  }, i = () => {
    t.value === 11 ? (t.value = 0, o.value++) : t.value++;
  }, p = (k) => {
    l.disabled || l.readonly || l.min && k < l.min || l.max && k > l.max || (e.value = k, a("update:modelValue", k), a("change", k));
  };
  return te(
    () => l.modelValue,
    (k) => {
      k && (e.value = k, t.value = k.getMonth(), o.value = k.getFullYear());
    }
  ), {
    currentDate: e,
    currentMonth: t,
    currentYear: o,
    weekdays: n,
    daysInMonth: r,
    monthName: f,
    prevMonth: s,
    nextMonth: i,
    selectDate: p
  };
}, qr = R({
  base: "w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), Zr = R({
  base: "flex items-center justify-between mb-4"
}), Jr = R({
  base: "text-lg font-medium"
}), Qr = R({
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
}), on = {
  "update:modelValue": (l) => l === null || l instanceof Date,
  change: (l) => l === null || l instanceof Date
}, rn = ["disabled"], nn = ["disabled"], sn = ["onClick", "disabled"], un = /* @__PURE__ */ J({
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
  emits: on,
  setup(l, { emit: a }) {
    const e = a, t = l, {
      currentYear: o,
      weekdays: n,
      daysInMonth: r,
      monthName: f,
      prevMonth: s,
      nextMonth: i,
      selectDate: p
    } = Xr(t, e), k = h(() => {
      var m, d, g, y, u, c, v, C, D, M, V, T, $, O, A, L, P, F, S, E, I, N, j, K, Y, re;
      return {
        root: t.unstyled ? ((m = t.pt) == null ? void 0 : m.root) || "" : qr({ unstyled: t.unstyled, class: (d = t.pt) == null ? void 0 : d.root }),
        header: t.unstyled ? ((g = t.pt) == null ? void 0 : g.header) || "" : Zr({ class: (y = t.pt) == null ? void 0 : y.header }),
        title: t.unstyled ? ((u = t.pt) == null ? void 0 : u.title) || "" : Jr({ class: (c = t.pt) == null ? void 0 : c.title }),
        navigation: t.unstyled ? ((v = t.pt) == null ? void 0 : v.navigation) || "" : Qr({ class: (C = t.pt) == null ? void 0 : C.navigation }),
        navButton: t.unstyled ? ((D = t.pt) == null ? void 0 : D.navButton) || "" : en({ class: (M = t.pt) == null ? void 0 : M.navButton }),
        weekdays: t.unstyled ? ((V = t.pt) == null ? void 0 : V.weekdays) || "" : tn({ class: (T = t.pt) == null ? void 0 : T.weekdays }),
        weekday: t.unstyled ? (($ = t.pt) == null ? void 0 : $.weekday) || "" : ln({ class: (O = t.pt) == null ? void 0 : O.weekday }),
        days: t.unstyled ? ((A = t.pt) == null ? void 0 : A.days) || "" : an({ class: (L = t.pt) == null ? void 0 : L.days }),
        day: t.unstyled ? ((P = t.pt) == null ? void 0 : P.day) || "" : $e({ class: (F = t.pt) == null ? void 0 : F.day }),
        today: t.unstyled ? ((S = t.pt) == null ? void 0 : S.today) || "" : $e({ isToday: !0, class: (E = t.pt) == null ? void 0 : E.today }).split(" ").filter((W) => !$e().includes(W)).join(" "),
        selected: t.unstyled ? ((I = t.pt) == null ? void 0 : I.selected) || "" : $e({ isSelected: !0, class: (N = t.pt) == null ? void 0 : N.selected }).split(" ").filter((W) => !$e().includes(W)).join(" "),
        disabled: t.unstyled ? ((j = t.pt) == null ? void 0 : j.disabled) || "" : $e({ isDisabled: !0, class: (K = t.pt) == null ? void 0 : K.disabled }).split(" ").filter((W) => !$e().includes(W)).join(" "),
        adjacent: t.unstyled ? ((Y = t.pt) == null ? void 0 : Y.adjacent) || "" : $e({ isAdjacent: !0, class: (re = t.pt) == null ? void 0 : re.adjacent }).split(" ").filter((W) => !$e().includes(W)).join(" ")
      };
    });
    return (m, d) => (w(), z("div", {
      class: b(k.value.root)
    }, [
      B("div", {
        class: b(k.value.header)
      }, [
        B("div", {
          class: b(k.value.title)
        }, U(x(f)) + " " + U(x(o)), 3),
        B("div", {
          class: b(k.value.navigation)
        }, [
          B("button", {
            class: b(k.value.navButton),
            onClick: d[0] || (d[0] = //@ts-ignore
            (...g) => x(s) && x(s)(...g)),
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
          ]), 10, rn),
          B("button", {
            class: b(k.value.navButton),
            onClick: d[1] || (d[1] = //@ts-ignore
            (...g) => x(i) && x(i)(...g)),
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
        class: b(k.value.weekdays)
      }, [
        (w(!0), z(oe, null, se(x(n), (g, y) => (w(), z("div", {
          key: y,
          class: b(k.value.weekday)
        }, U(g), 3))), 128))
      ], 2),
      B("div", {
        class: b(k.value.days)
      }, [
        (w(!0), z(oe, null, se(x(r), (g, y) => (w(), z("button", {
          key: y,
          class: b([
            k.value.day,
            g.isToday ? k.value.today : "",
            g.isSelected ? k.value.selected : "",
            g.isDisabled ? k.value.disabled : "",
            g.isCurrentMonth ? "" : k.value.adjacent
          ]),
          onClick: (u) => x(p)(g.date),
          disabled: g.isDisabled || m.disabled || m.readonly
        }, U(g.day), 11, sn))), 128))
      ], 2)
    ], 2));
  }
}), wt = Q(un), dn = (l, a) => {
  const e = H(!1), t = H(null), o = H(null), n = H(null), r = H(null), f = H(null), s = H(null), i = h(() => {
    let S = 0, E = 0, I = 0;
    if (l.modelValue) {
      if (l.modelValue instanceof Date)
        S = l.modelValue.getHours(), E = l.modelValue.getMinutes(), I = l.modelValue.getSeconds();
      else if (typeof l.modelValue == "string") {
        const N = l.modelValue.split(":");
        S = parseInt(N[0]) || 0, E = parseInt(N[1]) || 0, I = N[2] ? parseInt(N[2]) : 0;
      }
    }
    return { hours: S, minutes: E, seconds: I };
  }), p = H(i.value.hours), k = H(i.value.minutes), m = H(i.value.seconds), d = H(i.value.hours >= 12 ? "pm" : "am"), g = h(() => {
    const S = [], E = l.hourStep || 1, I = l.format === "12h", N = I ? 1 : 0, j = I ? 12 : 23;
    for (let K = N; K <= j; K += E)
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
    l.disabled || l.readonly || (e.value = !e.value, e.value && (p.value = i.value.hours, k.value = i.value.minutes, m.value = i.value.seconds, d.value = i.value.hours >= 12 ? "pm" : "am", setTimeout(() => {
      D();
    }, 50)));
  }, C = () => {
    e.value = !1;
  }, D = () => {
    const S = (E, I) => {
      if (!E) return;
      const j = E.querySelectorAll("div")[I];
      j && (E.scrollTop = j.offsetTop - E.offsetHeight / 2 + j.offsetHeight / 2);
    };
    if (l.format === "12h") {
      const E = p.value > 12 ? p.value - 12 : p.value === 0 ? 12 : p.value;
      S(n.value, g.value.indexOf(E));
    } else
      S(n.value, g.value.indexOf(p.value));
    S(
      r.value,
      y.value.indexOf(k.value)
    ), l.showSeconds && f.value && S(
      f.value,
      u.value.indexOf(m.value)
    ), l.format === "12h" && s.value && S(s.value, d.value === "am" ? 0 : 1);
  }, M = () => {
    let S = p.value;
    l.format === "12h" && (d.value === "pm" && S < 12 ? S += 12 : d.value === "am" && S === 12 && (S = 0));
    let E;
    if (l.modelValue instanceof Date) {
      const I = new Date(l.modelValue);
      I.setHours(S), I.setMinutes(k.value), I.setSeconds(l.showSeconds ? m.value : 0), E = I;
    } else {
      const I = S.toString().padStart(2, "0"), N = k.value.toString().padStart(2, "0");
      if (l.showSeconds) {
        const j = m.value.toString().padStart(2, "0");
        E = `${I}:${N}:${j}`;
      } else
        E = `${I}:${N}`;
    }
    a("update:modelValue", E), a("change", E);
  }, V = (S) => {
    p.value = S, M();
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
    e.value && t.value && o.value && !t.value.contains(S.target) && !o.value.contains(S.target) && C();
  };
  return ve(() => {
    document.addEventListener("mousedown", F);
  }), De(() => {
    document.removeEventListener("mousedown", F);
  }), te(
    () => l.modelValue,
    (S) => {
      S ? (p.value = i.value.hours, k.value = i.value.minutes, m.value = i.value.seconds, d.value = i.value.hours >= 12 ? "pm" : "am") : C();
    }
  ), {
    isOpen: e,
    inputRef: t,
    dropdownRef: o,
    hourRef: n,
    minuteRef: r,
    secondRef: f,
    ampmRef: s,
    formattedValue: c,
    hourList: g,
    minuteList: y,
    secondList: u,
    selectedHour: p,
    selectedMinute: k,
    selectedSecond: m,
    selectedAmPm: d,
    toggleDropdown: v,
    closeDropdown: C,
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
      isOpen: o,
      inputRef: n,
      dropdownRef: r,
      hourRef: f,
      minuteRef: s,
      secondRef: i,
      ampmRef: p,
      formattedValue: k,
      hourList: m,
      minuteList: d,
      secondList: g,
      selectedHour: y,
      selectedMinute: u,
      selectedSecond: c,
      selectedAmPm: v,
      toggleDropdown: C,
      selectHour: D,
      selectMinute: M,
      selectSecond: V,
      selectAmPm: T,
      handleClear: $,
      handleFocus: O,
      handleBlur: A
    } = dn(t, e), L = h(() => {
      var P, F, S, E, I, N, j, K, Y, re, W, Z, le, ee, ne, ue, fe, ge;
      return {
        root: t.unstyled ? ((P = t.pt) == null ? void 0 : P.root) || "" : cn({ unstyled: t.unstyled, class: (F = t.pt) == null ? void 0 : F.root }),
        inputWrapper: t.unstyled ? ((S = t.pt) == null ? void 0 : S.inputWrapper) || "" : fn({ class: (E = t.pt) == null ? void 0 : E.inputWrapper }),
        input: t.unstyled ? ((I = t.pt) == null ? void 0 : I.input) || "" : pn({ class: (N = t.pt) == null ? void 0 : N.input }),
        clearButton: t.unstyled ? ((j = t.pt) == null ? void 0 : j.clearButton) || "" : bn({ class: (K = t.pt) == null ? void 0 : K.clearButton }),
        dropdown: t.unstyled ? ((Y = t.pt) == null ? void 0 : Y.dropdown) || "" : vn({ class: (re = t.pt) == null ? void 0 : re.dropdown }),
        timeSelector: t.unstyled ? ((W = t.pt) == null ? void 0 : W.timeSelector) || "" : gn({ class: (Z = t.pt) == null ? void 0 : Z.timeSelector }),
        column: t.unstyled ? ((le = t.pt) == null ? void 0 : le.column) || "" : mn({ class: (ee = t.pt) == null ? void 0 : ee.column }),
        item: t.unstyled ? ((ne = t.pt) == null ? void 0 : ne.item) || "" : it({ class: (ue = t.pt) == null ? void 0 : ue.item }),
        itemSelected: t.unstyled ? ((fe = t.pt) == null ? void 0 : fe.itemSelected) || "" : it({ selected: !0, class: (ge = t.pt) == null ? void 0 : ge.itemSelected }).split(" ").filter((pe) => !it().includes(pe)).join(" ")
      };
    });
    return (P, F) => (w(), z("div", {
      class: b(L.value.root)
    }, [
      B("div", {
        class: b(L.value.inputWrapper),
        onClick: F[3] || (F[3] = //@ts-ignore
        (...S) => x(C) && x(C)(...S))
      }, [
        B("input", {
          ref_key: "inputRef",
          ref: n,
          type: "text",
          class: b(L.value.input),
          value: x(k),
          placeholder: P.placeholder,
          disabled: P.disabled,
          readonly: !0,
          onFocus: F[0] || (F[0] = //@ts-ignore
          (...S) => x(O) && x(O)(...S)),
          onBlur: F[1] || (F[1] = //@ts-ignore
          (...S) => x(A) && x(A)(...S))
        }, null, 42, hn),
        P.clearable && P.modelValue && !P.disabled && !P.readonly ? (w(), z("span", {
          key: 0,
          class: b(L.value.clearButton),
          onClick: F[2] || (F[2] = //@ts-ignore
          (...S) => x($) && x($)(...S))
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
        ]), 2)) : G("", !0)
      ], 2),
      x(o) ? (w(), z("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: r,
        class: b(L.value.dropdown)
      }, [
        B("div", {
          class: b(L.value.timeSelector)
        }, [
          B("div", {
            ref_key: "hourRef",
            ref: f,
            class: b(L.value.column)
          }, [
            (w(!0), z(oe, null, se(x(m), (S) => (w(), z("div", {
              key: `hour-${S}`,
              class: b([
                L.value.item,
                (P.format === "12h" ? (x(y) > 12 ? x(y) - 12 : x(y) === 0 ? 12 : x(y)) === S : x(y) === S) ? L.value.itemSelected : ""
              ]),
              onClick: (E) => x(D)(S)
            }, U(S.toString().padStart(2, "0")), 11, wn))), 128))
          ], 2),
          B("div", {
            ref_key: "minuteRef",
            ref: s,
            class: b(L.value.column)
          }, [
            (w(!0), z(oe, null, se(x(d), (S) => (w(), z("div", {
              key: `minute-${S}`,
              class: b([
                L.value.item,
                x(u) === S ? L.value.itemSelected : ""
              ]),
              onClick: (E) => x(M)(S)
            }, U(S.toString().padStart(2, "0")), 11, xn))), 128))
          ], 2),
          P.showSeconds ? (w(), z("div", {
            key: 0,
            ref_key: "secondRef",
            ref: i,
            class: b(L.value.column)
          }, [
            (w(!0), z(oe, null, se(x(g), (S) => (w(), z("div", {
              key: `second-${S}`,
              class: b([
                L.value.item,
                x(c) === S ? L.value.itemSelected : ""
              ]),
              onClick: (E) => x(V)(S)
            }, U(S.toString().padStart(2, "0")), 11, kn))), 128))
          ], 2)) : G("", !0),
          P.format === "12h" ? (w(), z("div", {
            key: 1,
            ref_key: "ampmRef",
            ref: p,
            class: b(L.value.column)
          }, [
            B("div", {
              class: b([
                L.value.item,
                x(v) === "am" ? L.value.itemSelected : ""
              ]),
              onClick: F[4] || (F[4] = (S) => x(T)("am"))
            }, " AM ", 2),
            B("div", {
              class: b([
                L.value.item,
                x(v) === "pm" ? L.value.itemSelected : ""
              ]),
              onClick: F[5] || (F[5] = (S) => x(T)("pm"))
            }, " PM ", 2)
          ], 2)) : G("", !0)
        ], 2)
      ], 2)) : G("", !0)
    ], 2));
  }
}), al = Q(Cn), zn = (l, a) => {
  const e = H(!1), t = H(null), o = H(null), n = h(() => {
    if (!l.modelValue) return "";
    try {
      const d = l.locale || "default", g = {};
      return l.format ? (l.format.includes("yyyy") && (g.year = "numeric"), l.format.includes("MM") ? g.month = "2-digit" : l.format.includes("M") && (g.month = "numeric"), l.format.includes("dd") ? g.day = "2-digit" : l.format.includes("d") && (g.day = "numeric"), Object.keys(g).length === 0 && (g.year = "numeric", g.month = "2-digit", g.day = "2-digit")) : (g.year = "numeric", g.month = "2-digit", g.day = "2-digit"), new Intl.DateTimeFormat(d, g).format(l.modelValue);
    } catch (d) {
      return console.error("Date formatting error:", d), l.modelValue.toLocaleDateString();
    }
  }), r = () => {
    l.disabled || l.readonly || (e.value = !e.value);
  }, f = () => {
    e.value = !1;
  }, s = (d) => {
    d === null ? (a("update:modelValue", null), a("change", null)) : (a("update:modelValue", d), a("change", d)), f();
  }, i = (d) => {
    d.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, p = (d) => {
    a("focus", d);
  }, k = (d) => {
    a("blur", d);
  }, m = (d) => {
    e.value && t.value && o.value && !t.value.contains(d.target) && !o.value.contains(d.target) && f();
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
    dropdownRef: o,
    formattedValue: n,
    toggleDropdown: r,
    closeDropdown: f,
    handleDateChange: s,
    handleClear: i,
    handleFocus: p,
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
      isOpen: o,
      inputRef: n,
      dropdownRef: r,
      formattedValue: f,
      toggleDropdown: s,
      handleDateChange: i,
      handleClear: p,
      handleFocus: k,
      handleBlur: m
    } = zn(t, e), d = h(() => {
      var g, y, u, c, v, C, D, M, V, T;
      return {
        root: t.unstyled ? ((g = t.pt) == null ? void 0 : g.root) || "" : Sn({ unstyled: t.unstyled, class: (y = t.pt) == null ? void 0 : y.root }),
        inputWrapper: t.unstyled ? ((u = t.pt) == null ? void 0 : u.inputWrapper) || "" : Bn({ class: (c = t.pt) == null ? void 0 : c.inputWrapper }),
        input: t.unstyled ? ((v = t.pt) == null ? void 0 : v.input) || "" : Vn({ class: (C = t.pt) == null ? void 0 : C.input }),
        clearButton: t.unstyled ? ((D = t.pt) == null ? void 0 : D.clearButton) || "" : $n({ class: (M = t.pt) == null ? void 0 : M.clearButton }),
        dropdown: t.unstyled ? ((V = t.pt) == null ? void 0 : V.dropdown) || "" : In({ class: (T = t.pt) == null ? void 0 : T.dropdown })
      };
    });
    return (g, y) => {
      var u;
      return w(), z("div", {
        class: b(d.value.root)
      }, [
        B("div", {
          class: b(d.value.inputWrapper),
          onClick: y[3] || (y[3] = //@ts-ignore
          (...c) => x(s) && x(s)(...c))
        }, [
          B("input", {
            ref_key: "inputRef",
            ref: n,
            type: "text",
            class: b(d.value.input),
            value: x(f),
            placeholder: g.placeholder,
            disabled: g.disabled,
            readonly: !0,
            onFocus: y[0] || (y[0] = //@ts-ignore
            (...c) => x(k) && x(k)(...c)),
            onBlur: y[1] || (y[1] = //@ts-ignore
            (...c) => x(m) && x(m)(...c))
          }, null, 42, Mn),
          g.clearable && g.modelValue && !g.disabled && !g.readonly ? (w(), z("span", {
            key: 0,
            class: b(d.value.clearButton),
            onClick: y[2] || (y[2] = //@ts-ignore
            (...c) => x(p) && x(p)(...c))
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
          ]), 2)) : G("", !0)
        ], 2),
        x(o) ? (w(), z("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: r,
          class: b(d.value.dropdown)
        }, [
          Oe(x(wt), {
            modelValue: g.modelValue,
            min: g.min,
            max: g.max,
            disabled: g.disabled,
            readonly: g.readonly,
            firstDayOfWeek: g.firstDayOfWeek,
            locale: g.locale,
            pt: (u = g.pt) == null ? void 0 : u.calendar,
            "onUpdate:modelValue": x(i)
          }, null, 8, ["modelValue", "min", "max", "disabled", "readonly", "firstDayOfWeek", "locale", "pt", "onUpdate:modelValue"])
        ], 2)) : G("", !0)
      ], 2);
    };
  }
}), Rn = Q(Tn), En = (l, a) => {
  const e = H(!1), t = H("date"), o = H(null), n = H(null), r = H(l.modelValue || /* @__PURE__ */ new Date()), f = h(() => {
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
  }), s = () => {
    l.disabled || l.readonly || (e.value = !e.value, e.value && (r.value = l.modelValue || /* @__PURE__ */ new Date()));
  }, i = () => {
    e.value = !1;
  }, p = (c) => {
    t.value = c;
  }, k = (c) => {
    if (!c) return;
    const v = new Date(r.value);
    v.setFullYear(c.getFullYear()), v.setMonth(c.getMonth()), v.setDate(c.getDate()), r.value = v, a("update:modelValue", v), a("change", v), p("time");
  }, m = (c) => {
    if (!c) return;
    const v = new Date(r.value);
    if (c instanceof Date)
      v.setHours(c.getHours()), v.setMinutes(c.getMinutes()), v.setSeconds(c.getSeconds());
    else if (typeof c == "string") {
      const C = c.split(":");
      C.length >= 2 && (v.setHours(parseInt(C[0]) || 0), v.setMinutes(parseInt(C[1]) || 0), C.length >= 3 && v.setSeconds(parseInt(C[2]) || 0));
    }
    r.value = v, a("update:modelValue", v), a("change", v), i();
  }, d = (c) => {
    c.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, g = (c) => {
    a("focus", c);
  }, y = (c) => {
    a("blur", c);
  }, u = (c) => {
    e.value && o.value && n.value && !o.value.contains(c.target) && !n.value.contains(c.target) && i();
  };
  return ve(() => {
    document.addEventListener("mousedown", u);
  }), De(() => {
    document.removeEventListener("mousedown", u);
  }), te(
    () => l.modelValue,
    (c) => {
      c ? r.value = c : i();
    }
  ), {
    isOpen: e,
    activeTab: t,
    inputRef: o,
    dropdownRef: n,
    currentDateTime: r,
    formattedValue: f,
    toggleDropdown: s,
    closeDropdown: i,
    switchTab: p,
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
}, Gn = ["value", "placeholder", "disabled"], Nn = /* @__PURE__ */ J({
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
      isOpen: o,
      activeTab: n,
      inputRef: r,
      dropdownRef: f,
      currentDateTime: s,
      formattedValue: i,
      toggleDropdown: p,
      switchTab: k,
      handleDateChange: m,
      handleTimeChange: d,
      handleClear: g,
      handleFocus: y,
      handleBlur: u
    } = En(t, e), c = h(() => {
      var v, C, D, M, V, T, $, O, A, L, P, F, S, E, I, N, j, K;
      return {
        root: t.unstyled ? ((v = t.pt) == null ? void 0 : v.root) || "" : Ln({
          unstyled: t.unstyled,
          class: (C = t.pt) == null ? void 0 : C.root
        }),
        inputWrapper: t.unstyled ? ((D = t.pt) == null ? void 0 : D.inputWrapper) || "" : An({ class: (M = t.pt) == null ? void 0 : M.inputWrapper }),
        input: t.unstyled ? ((V = t.pt) == null ? void 0 : V.input) || "" : On({ class: (T = t.pt) == null ? void 0 : T.input }),
        clearButton: t.unstyled ? (($ = t.pt) == null ? void 0 : $.clearButton) || "" : Pn({ class: (O = t.pt) == null ? void 0 : O.clearButton }),
        dropdown: t.unstyled ? ((A = t.pt) == null ? void 0 : A.dropdown) || "" : jn({ class: (L = t.pt) == null ? void 0 : L.dropdown }),
        tabs: t.unstyled ? ((P = t.pt) == null ? void 0 : P.tabs) || "" : Fn({ class: (F = t.pt) == null ? void 0 : F.tabs }),
        tab: t.unstyled ? ((S = t.pt) == null ? void 0 : S.tab) || "" : ut({ class: (E = t.pt) == null ? void 0 : E.tab }),
        activeTab: t.unstyled ? ((I = t.pt) == null ? void 0 : I.activeTab) || "" : ut({ active: !0, class: (N = t.pt) == null ? void 0 : N.activeTab }).split(" ").filter((Y) => !ut().includes(Y)).join(" "),
        tabContent: t.unstyled ? ((j = t.pt) == null ? void 0 : j.tabContent) || "" : Wn({ class: (K = t.pt) == null ? void 0 : K.tabContent })
      };
    });
    return (v, C) => {
      var D, M, V, T, $, O, A, L, P, F;
      return w(), z("div", {
        class: b(c.value.root)
      }, [
        B("div", {
          class: b(c.value.inputWrapper),
          onClick: C[3] || (C[3] = //@ts-ignore
          (...S) => x(p) && x(p)(...S))
        }, [
          B("input", {
            ref_key: "inputRef",
            ref: r,
            type: "text",
            class: b(c.value.input),
            value: x(i),
            placeholder: v.placeholder,
            disabled: v.disabled,
            readonly: !0,
            onFocus: C[0] || (C[0] = //@ts-ignore
            (...S) => x(y) && x(y)(...S)),
            onBlur: C[1] || (C[1] = //@ts-ignore
            (...S) => x(u) && x(u)(...S))
          }, null, 42, Gn),
          v.clearable && v.modelValue && !v.disabled && !v.readonly ? (w(), z("span", {
            key: 0,
            class: b(c.value.clearButton),
            onClick: C[2] || (C[2] = //@ts-ignore
            (...S) => x(g) && x(g)(...S))
          }, C[6] || (C[6] = [
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
          ]), 2)) : G("", !0)
        ], 2),
        x(o) ? (w(), z("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: f,
          class: b(c.value.dropdown)
        }, [
          B("div", {
            class: b(c.value.tabs)
          }, [
            B("div", {
              class: b([c.value.tab, x(n) === "date" ? c.value.activeTab : ""]),
              onClick: C[4] || (C[4] = (S) => x(k)("date"))
            }, " 日期 ", 2),
            B("div", {
              class: b([c.value.tab, x(n) === "time" ? c.value.activeTab : ""]),
              onClick: C[5] || (C[5] = (S) => x(k)("time"))
            }, " 时间 ", 2)
          ], 2),
          B("div", {
            class: b(c.value.tabContent)
          }, [
            We(B("div", null, [
              Oe(x(wt), {
                modelValue: x(s),
                min: v.min,
                max: v.max,
                disabled: v.disabled,
                readonly: v.readonly,
                firstDayOfWeek: v.firstDayOfWeek,
                locale: v.locale,
                pt: (M = (D = v.pt) == null ? void 0 : D.datePicker) == null ? void 0 : M.calendar,
                "onUpdate:modelValue": x(m)
              }, null, 8, ["modelValue", "min", "max", "disabled", "readonly", "firstDayOfWeek", "locale", "pt", "onUpdate:modelValue"])
            ], 512), [
              [ct, x(n) === "date"]
            ]),
            We(B("div", null, [
              Oe(x(al), {
                modelValue: x(s),
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
                "onUpdate:modelValue": x(d)
              }, null, 8, ["modelValue", "disabled", "readonly", "format", "hourStep", "minuteStep", "secondStep", "showSeconds", "pt", "onUpdate:modelValue"])
            ], 512), [
              [ct, x(n) === "time"]
            ])
          ], 2)
        ], 2)) : G("", !0)
      ], 2);
    };
  }
}), _n = Q(Nn), Kn = (l, a) => {
  const e = H(!1), t = H(null), o = H(null), n = h(() => {
    if (l.options && l.options.length > 0)
      return l.options;
    const d = [], g = l.start || "00:00", y = l.end || "23:59", u = l.step || 30, [c, v] = g.split(":").map(Number), [C, D] = y.split(":").map(Number), M = c * 60 + v, V = C * 60 + D;
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
  }), r = () => {
    l.disabled || l.readonly || (e.value = !e.value);
  }, f = () => {
    e.value = !1;
  }, s = (d) => {
    a("update:modelValue", d), a("change", d), f();
  }, i = (d) => {
    d.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, p = (d) => {
    a("focus", d);
  }, k = (d) => {
    a("blur", d);
  }, m = (d) => {
    e.value && t.value && o.value && !t.value.contains(d.target) && !o.value.contains(d.target) && f();
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
    dropdownRef: o,
    timeOptions: n,
    toggleDropdown: r,
    selectOption: s,
    handleClear: i,
    handleFocus: p,
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
      isOpen: o,
      inputRef: n,
      dropdownRef: r,
      timeOptions: f,
      toggleDropdown: s,
      selectOption: i,
      handleClear: p,
      handleFocus: k,
      handleBlur: m
    } = Kn(t, e), d = h(() => {
      var g, y, u, c, v, C, D, M, V, T, $, O, A, L, P, F;
      return {
        root: t.unstyled ? ((g = t.pt) == null ? void 0 : g.root) || "" : Yn({ unstyled: t.unstyled, class: (y = t.pt) == null ? void 0 : y.root }),
        inputWrapper: t.unstyled ? ((u = t.pt) == null ? void 0 : u.inputWrapper) || "" : Un({ class: (c = t.pt) == null ? void 0 : c.inputWrapper }),
        input: t.unstyled ? ((v = t.pt) == null ? void 0 : v.input) || "" : Xn({ class: (C = t.pt) == null ? void 0 : C.input }),
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
    return (g, y) => (w(), z("div", {
      class: b(d.value.root)
    }, [
      B("div", {
        class: b(d.value.inputWrapper),
        onClick: y[3] || (y[3] = //@ts-ignore
        (...u) => x(s) && x(s)(...u))
      }, [
        B("input", {
          ref_key: "inputRef",
          ref: n,
          type: "text",
          class: b(d.value.input),
          value: g.modelValue,
          placeholder: g.placeholder,
          disabled: g.disabled,
          readonly: !0,
          onFocus: y[0] || (y[0] = //@ts-ignore
          (...u) => x(k) && x(k)(...u)),
          onBlur: y[1] || (y[1] = //@ts-ignore
          (...u) => x(m) && x(m)(...u))
        }, null, 42, es),
        g.clearable && g.modelValue && !g.disabled && !g.readonly ? (w(), z("span", {
          key: 0,
          class: b(d.value.clearButton),
          onClick: y[2] || (y[2] = //@ts-ignore
          (...u) => x(p) && x(p)(...u))
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
        ]), 2)) : G("", !0)
      ], 2),
      x(o) ? (w(), z("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: r,
        class: b(d.value.dropdown)
      }, [
        B("div", {
          class: b(d.value.optionsList)
        }, [
          (w(!0), z(oe, null, se(x(f), (u, c) => (w(), z("div", {
            key: c,
            class: b([
              d.value.option,
              g.modelValue === u ? d.value.optionSelected : "",
              g.disabled ? d.value.optionDisabled : ""
            ]),
            onClick: (v) => !g.disabled && x(i)(u)
          }, U(u), 11, ts))), 128)),
          x(f).length === 0 ? (w(), z("div", {
            key: 0,
            class: b(d.value.option),
            style: { cursor: "default" }
          }, " 无可用选项 ", 2)) : G("", !0)
        ], 2)
      ], 2)) : G("", !0)
    ], 2));
  }
}), as = Q(ls), os = R({
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
}), rs = R({
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
      var n, r;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.root) || "" : os({
        animation: a.animation,
        rounded: a.rounded,
        class: (r = a.pt) == null ? void 0 : r.root
      });
    }), t = h(() => {
      var n;
      return a.unstyled && ((n = a.pt) == null ? void 0 : n.content) || "";
    }), o = h(() => {
      const n = {};
      return a.width && (n.width = typeof a.width == "number" ? `${a.width}px` : a.width), a.height && (n.height = typeof a.height == "number" ? `${a.height}px` : a.height), n;
    });
    return (n, r) => n.loading ? (w(), z("div", {
      key: 0,
      class: b(e.value),
      style: de(o.value)
    }, [
      B("div", {
        class: b(t.value)
      }, [
        _(n.$slots, "skeleton")
      ], 2)
    ], 6)) : (w(), z("div", is, [
      _(n.$slots, "default")
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
      var r, f;
      return a.unstyled ? ((r = a.pt) == null ? void 0 : r.root) || "" : rs({
        rounded: a.rounded,
        class: (f = a.pt) == null ? void 0 : f.root
      });
    }), t = () => {
      var r, f;
      return a.unstyled ? ((r = a.pt) == null ? void 0 : r.line) || "" : ns({
        animation: a.animation,
        rounded: a.rounded,
        class: (f = a.pt) == null ? void 0 : f.line
      });
    }, o = (r) => typeof a.widths == "string" || typeof a.widths == "number" ? a.widths : Array.isArray(a.widths) && a.widths.length > 0 ? a.widths[r % a.widths.length] : "100%", n = (r) => {
      const f = o(r), s = {
        width: typeof f == "number" ? `${f}px` : f
      };
      return a.lineHeight && (s.height = typeof a.lineHeight == "number" ? `${a.lineHeight}px` : a.lineHeight), s;
    };
    return (r, f) => (w(), z("div", {
      class: b(e.value)
    }, [
      (w(!0), z(oe, null, se(r.lines, (s) => (w(), z("div", {
        key: s,
        class: b(t()),
        style: de(n(s - 1))
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
      var t, o;
      return a.unstyled ? ((t = a.pt) == null ? void 0 : t.root) || "" : ss({
        size: a.size,
        circle: a.circle,
        animation: a.animation,
        class: (o = a.pt) == null ? void 0 : o.root
      });
    });
    return (t, o) => (w(), z("div", {
      class: b(e.value)
    }, null, 2));
  }
}), fs = Q(us), ps = Q(ds), bs = Q(cs);
function vs(l = {}) {
  const a = H(l.modelValue || ""), e = (n) => a.value === n, t = (n) => {
    var r;
    a.value = n, (r = l.onChange) == null || r.call(l, n);
  };
  return te(
    () => l.modelValue,
    (n) => {
      n !== void 0 && n !== a.value && (a.value = n);
    }
  ), {
    activeTab: a,
    isActive: e,
    activate: t,
    onKeydown: (n, r) => {
      const f = r.indexOf(a.value);
      if (f === -1 && r.length > 0) {
        t(r[0]);
        return;
      }
      if (n.key === "ArrowRight" || n.key === "ArrowDown") {
        const s = (f + 1) % r.length;
        t(r[s]), n.preventDefault();
      } else if (n.key === "ArrowLeft" || n.key === "ArrowUp") {
        const s = (f - 1 + r.length) % r.length;
        t(r[s]), n.preventDefault();
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
    const e = l, t = a, o = He(), n = h(() => {
      if (!o.default) return [];
      const c = o.default() || [], v = /* @__PURE__ */ new Set(), C = [];
      return c.filter((D) => D.type && (D.type.name === "TabItem" || typeof D.type == "object" && D.type.__name === "TabItem")).forEach((D) => {
        const M = D.props || {}, V = M.name;
        V && !v.has(V) ? (v.add(V), C.push({
          name: V,
          title: M.title || M.label || "",
          disabled: M.disabled || !1
        })) : console.warn(
          V ? `[Tabs] 发现重复的TabItem name: ${V}，只有第一个会被显示` : "[Tabs] TabItem必须提供name属性"
        );
      }), C;
    }), r = h(
      () => n.value.map((c) => c.name)
    ), { activeTab: f, isActive: s, activate: i, onKeydown: p } = vs({
      modelValue: e.modelValue,
      onChange: (c) => {
        t("update:modelValue", c), t("change", c);
      }
    });
    te(
      n,
      (c) => {
        c.length > 0 && !c.some((v) => s(v.name)) && i(c[0].name);
      },
      { immediate: !0 }
    );
    const k = (c, v) => {
      e.disabled || v || i(c);
    }, m = (c) => {
      p(c, r.value);
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
      var C, D;
      return e.unstyled ? ((C = e.pt) == null ? void 0 : C.navItem) || "" : ys({
        variant: e.variant,
        active: s(c),
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
    return Ve("activeTab", f), (c, v) => (w(), z("div", {
      class: b(d.value),
      "aria-disabled": c.disabled,
      role: "tablist",
      onKeydown: m
    }, [
      B("div", {
        class: b(g.value)
      }, [
        (w(!0), z(oe, null, se(n.value, (C) => (w(), z("button", {
          key: C.name,
          class: b(y(C.name, C.disabled)),
          role: "tab",
          "aria-selected": x(s)(C.name),
          "aria-disabled": c.disabled || C.disabled,
          tabindex: x(s)(C.name) ? 0 : -1,
          onClick: (D) => k(C.name, C.disabled)
        }, U(C.title), 11, ks))), 128))
      ], 2),
      B("div", {
        class: b(u.value)
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
    const a = l, e = Be("activeTab", H("")), t = h(() => e.value === a.name), o = h(() => {
      var n;
      return a.unstyled && ((n = a.pt) == null ? void 0 : n.root) || "";
    });
    return (n, r) => We((w(), z("div", {
      class: b(o.value)
    }, [
      _(n.$slots, "default")
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
    const e = l, t = a, o = H(e.defaultCollapsed);
    te(
      () => e.defaultCollapsed,
      (k) => {
        o.value = k;
      }
    );
    const n = () => {
      e.collapsible && (o.value = !o.value, t("update:collapsed", o.value), t("collapse", o.value));
    }, r = h(() => {
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
    }), s = h(() => {
      var k, m;
      return e.unstyled ? ((k = e.pt) == null ? void 0 : k.title) || "" : Is({
        class: (m = e.pt) == null ? void 0 : m.title
      });
    }), i = h(() => {
      var k, m;
      return e.unstyled ? ((k = e.pt) == null ? void 0 : k.content) || "" : Ds({
        padding: e.padding,
        collapsed: o.value,
        class: (m = e.pt) == null ? void 0 : m.content
      });
    }), p = h(() => {
      var k, m;
      return e.unstyled ? ((k = e.pt) == null ? void 0 : k.icon) || "" : Ms({
        collapsed: o.value,
        class: (m = e.pt) == null ? void 0 : m.icon
      });
    });
    return (k, m) => (w(), z("div", {
      class: b(r.value)
    }, [
      B("div", {
        class: b(f.value),
        onClick: n
      }, [
        B("div", {
          class: b(s.value)
        }, [
          _(k.$slots, "title", {}, () => [
            ce(U(k.title), 1)
          ])
        ], 2),
        k.collapsible ? (w(), z("div", {
          key: 0,
          class: b(p.value)
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
        ], 2)) : G("", !0)
      ], 2),
      B("div", {
        class: b(i.value)
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
}), Gs = {
  "update:modelValue": (l) => typeof l == "number",
  change: (l) => typeof l == "number"
}, Ns = ["disabled"], _s = ["disabled"], Ks = ["onClick", "disabled", "aria-current"], Ys = ["disabled"], Us = ["disabled"], Xs = ["max", "disabled"], qs = ["disabled"], Zs = /* @__PURE__ */ J({
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
    const e = l, t = a, o = h({
      get: () => e.modelValue,
      set: (v) => {
        t("update:modelValue", v), t("change", v);
      }
    }), n = H(""), r = h(() => e.disabled), f = h(() => {
      const v = e.totalPages, C = e.modelValue, D = e.visiblePageCount;
      if (v <= D)
        return Array.from({ length: v }, (O, A) => A + 1);
      const M = Math.floor(D / 2);
      let V = C - M, T = C + M;
      V < 1 && (T = Math.min(v, T + (1 - V)), V = 1), T > v && (V = Math.max(1, V - (T - v)), T = v);
      const $ = [];
      V > 1 && ($.push(1), V > 2 && $.push("..."));
      for (let O = V; O <= T; O++)
        $.push(O);
      return T < v && (T < v - 1 && $.push("..."), $.push(v)), $;
    }), s = (v) => {
      v >= 1 && v <= e.totalPages && v !== o.value && (o.value = v);
    }, i = () => {
      const v = Number(n.value);
      !isNaN(v) && v >= 1 && v <= e.totalPages && s(v), n.value = "";
    }, p = h(() => {
      var v, C;
      return e.unstyled ? ((v = e.pt) == null ? void 0 : v.root) || "" : Ls({
        disabled: e.disabled,
        class: (C = e.pt) == null ? void 0 : C.root
      });
    }), k = h(() => {
      var v, C;
      return e.unstyled ? ((v = e.pt) == null ? void 0 : v.list) || "" : As({
        class: (C = e.pt) == null ? void 0 : C.list
      });
    }), m = h(() => {
      var v, C;
      return e.unstyled ? ((v = e.pt) == null ? void 0 : v.item) || "" : Os({
        class: (C = e.pt) == null ? void 0 : C.item
      });
    }), d = (v, C) => {
      var D, M, V, T, $, O, A, L, P, F, S, E;
      return e.unstyled ? C === "first" ? ((D = e.pt) == null ? void 0 : D.firstButton) || "" : C === "prev" ? ((M = e.pt) == null ? void 0 : M.prevButton) || "" : C === "next" ? ((V = e.pt) == null ? void 0 : V.nextButton) || "" : C === "last" ? ((T = e.pt) == null ? void 0 : T.lastButton) || "" : v === o.value ? (($ = e.pt) == null ? void 0 : $.activeButton) || "" : ((O = e.pt) == null ? void 0 : O.button) || "" : Ps({
        variant: e.variant,
        size: e.size,
        shape: e.shape,
        active: v === o.value,
        disabled: e.disabled,
        class: v === o.value ? (A = e.pt) == null ? void 0 : A.activeButton : C === "first" ? (L = e.pt) == null ? void 0 : L.firstButton : C === "prev" ? (P = e.pt) == null ? void 0 : P.prevButton : C === "next" ? (F = e.pt) == null ? void 0 : F.nextButton : C === "last" ? (S = e.pt) == null ? void 0 : S.lastButton : (E = e.pt) == null ? void 0 : E.button
      });
    }, g = h(() => {
      var v, C;
      return e.unstyled ? ((v = e.pt) == null ? void 0 : v.ellipsis) || "" : js({
        size: e.size,
        class: (C = e.pt) == null ? void 0 : C.ellipsis
      });
    }), y = h(() => {
      var v, C;
      return e.unstyled ? ((v = e.pt) == null ? void 0 : v.jumper) || "" : Fs({
        class: (C = e.pt) == null ? void 0 : C.jumper
      });
    }), u = h(() => {
      var v, C;
      return e.unstyled ? ((v = e.pt) == null ? void 0 : v.jumperInput) || "" : Ws({
        size: e.size,
        class: (C = e.pt) == null ? void 0 : C.jumperInput
      });
    }), c = h(() => {
      var v, C;
      return e.unstyled ? ((v = e.pt) == null ? void 0 : v.jumperButton) || "" : Hs({
        size: e.size,
        class: (C = e.pt) == null ? void 0 : C.jumperButton
      });
    });
    return (v, C) => (w(), z("nav", {
      class: b(p.value),
      "aria-label": "分页导航"
    }, [
      B("ul", {
        class: b(k.value)
      }, [
        v.showEndButtons ? (w(), z("li", {
          key: 0,
          class: b(m.value)
        }, [
          B("button", {
            class: b(d(1, "first")),
            onClick: C[0] || (C[0] = (D) => s(1)),
            disabled: r.value || o.value === 1,
            "aria-label": "首页"
          }, [
            _(v.$slots, "first-button", {}, () => [
              C[5] || (C[5] = B("svg", {
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
          ], 10, Ns)
        ], 2)) : G("", !0),
        v.showPrevNextButtons ? (w(), z("li", {
          key: 1,
          class: b(m.value)
        }, [
          B("button", {
            class: b(d(o.value - 1, "prev")),
            onClick: C[1] || (C[1] = (D) => s(o.value - 1)),
            disabled: r.value || o.value === 1,
            "aria-label": "上一页"
          }, [
            _(v.$slots, "prev-button", {}, () => [
              C[6] || (C[6] = B("svg", {
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
        ], 2)) : G("", !0),
        (w(!0), z(oe, null, se(f.value, (D, M) => (w(), z(oe, { key: M }, [
          D !== "..." ? (w(), z("li", {
            key: 0,
            class: b(m.value)
          }, [
            B("button", {
              class: b(d(Number(D))),
              onClick: (V) => s(Number(D)),
              disabled: r.value,
              "aria-current": o.value === D ? "page" : void 0
            }, U(D), 11, Ks)
          ], 2)) : (w(), z("li", {
            key: 1,
            class: b(m.value)
          }, [
            B("span", {
              class: b(g.value)
            }, "...", 2)
          ], 2))
        ], 64))), 128)),
        v.showPrevNextButtons ? (w(), z("li", {
          key: 2,
          class: b(m.value)
        }, [
          B("button", {
            class: b(d(o.value + 1, "next")),
            onClick: C[2] || (C[2] = (D) => s(o.value + 1)),
            disabled: r.value || o.value === v.totalPages,
            "aria-label": "下一页"
          }, [
            _(v.$slots, "next-button", {}, () => [
              C[7] || (C[7] = B("svg", {
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
        ], 2)) : G("", !0),
        v.showEndButtons ? (w(), z("li", {
          key: 3,
          class: b(m.value)
        }, [
          B("button", {
            class: b(d(v.totalPages, "last")),
            onClick: C[3] || (C[3] = (D) => s(v.totalPages)),
            disabled: r.value || o.value === v.totalPages,
            "aria-label": "尾页"
          }, [
            _(v.$slots, "last-button", {}, () => [
              C[8] || (C[8] = B("svg", {
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
        ], 2)) : G("", !0),
        v.showJumper ? (w(), z("li", {
          key: 4,
          class: b(y.value)
        }, [
          C[9] || (C[9] = B("span", null, "前往", -1)),
          We(B("input", {
            class: b(u.value),
            type: "number",
            "onUpdate:modelValue": C[4] || (C[4] = (D) => n.value = D),
            min: "1",
            max: v.totalPages,
            disabled: r.value,
            onKeyup: ke(i, ["enter"])
          }, null, 42, Xs), [
            [jt, n.value]
          ]),
          C[10] || (C[10] = B("span", null, "页", -1)),
          B("button", {
            class: b(c.value),
            onClick: i,
            disabled: r.value
          }, " 跳转 ", 10, qs)
        ], 2)) : G("", !0)
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
}, oi = (l) => {
  const a = h(() => {
    if (l.indeterminate)
      return 0;
    const o = Math.max(0, Math.min(l.value || 0, l.max || 100)), n = Math.max(1, l.max || 100);
    return Math.round(o / n * 100);
  }), e = h(() => `${a.value}%`), t = h(() => {
    if (!l.indeterminate)
      return `width: ${a.value}%`;
  });
  return {
    percentage: a,
    formattedPercentage: e,
    progressWidth: t
  };
}, ri = ["aria-valuenow"], ni = /* @__PURE__ */ J({
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
    const a = l, { percentage: e, formattedPercentage: t, progressWidth: o } = oi(a), n = h(() => {
      var i, p;
      return a.unstyled ? ((i = a.pt) == null ? void 0 : i.root) || "" : Qs({
        unstyled: a.unstyled,
        class: (p = a.pt) == null ? void 0 : p.root
      });
    }), r = h(() => {
      var i, p;
      return a.unstyled ? ((i = a.pt) == null ? void 0 : i.container) || "" : ei({
        size: a.size,
        shape: a.shape,
        unstyled: a.unstyled,
        class: (p = a.pt) == null ? void 0 : p.container
      });
    }), f = h(() => {
      var i, p;
      return a.unstyled ? ((i = a.pt) == null ? void 0 : i.bar) || "" : ti({
        variant: a.variant,
        striped: a.striped,
        animated: a.animated,
        indeterminate: a.indeterminate,
        unstyled: a.unstyled,
        class: (p = a.pt) == null ? void 0 : p.bar
      });
    }), s = h(() => {
      var i, p;
      return a.unstyled ? ((i = a.pt) == null ? void 0 : i.text) || "" : li({
        variant: a.variant,
        unstyled: a.unstyled,
        class: (p = a.pt) == null ? void 0 : p.text
      });
    });
    return (i, p) => (w(), z("div", {
      class: b(n.value)
    }, [
      B("div", {
        class: b(r.value)
      }, [
        B("div", {
          class: b(f.value),
          style: de(x(o)),
          role: "progressbar",
          "aria-valuenow": i.indeterminate ? void 0 : x(e),
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        }, null, 14, ri)
      ], 2),
      i.showText ? (w(), z("div", {
        key: 0,
        class: b(s.value)
      }, [
        _(i.$slots, "text", {}, () => [
          ce(U(x(t)), 1)
        ])
      ], 2)) : G("", !0)
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
}), ol = Symbol("breadcrumb"), pi = (l) => {
  const a = H(null);
  return Ve(ol, {
    separator: l.separator || "/",
    separatorIcon: l.separatorIcon || ""
  }), {
    _ref: a
  };
}, bi = () => {
  const l = Be(
    ol,
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
    const e = l, { _ref: t } = pi(e), o = h(() => {
      var r, f;
      return e.unstyled ? ((r = e.pt) == null ? void 0 : r.root) || "" : ii({
        class: (f = e.pt) == null ? void 0 : f.root
      });
    }), n = h(() => {
      var r, f;
      return e.unstyled ? ((r = e.pt) == null ? void 0 : r.list) || "" : ui({
        class: (f = e.pt) == null ? void 0 : f.list
      });
    });
    return a({
      _ref: t
    }), (r, f) => (w(), z("nav", {
      class: b(o.value),
      ref_key: "_ref",
      ref: t
    }, [
      B("ol", {
        class: b(n.value)
      }, [
        _(r.$slots, "default")
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
    const t = e, o = l, { _ref: n, breadcrumbContext: r } = bi(), f = H(!1), s = () => {
      if (n.value) {
        const g = n.value.parentElement;
        g && (f.value = g.firstElementChild === n.value);
      }
    };
    ve(() => {
      s();
    });
    const i = (g) => {
      if (o.disabled) {
        g.preventDefault();
        return;
      }
      t("click", g);
    }, p = h(() => {
      var g, y;
      return o.unstyled ? ((g = o.pt) == null ? void 0 : g.root) || "" : ci({
        disabled: o.disabled,
        active: o.active,
        class: (y = o.pt) == null ? void 0 : y.root
      });
    }), k = h(() => {
      var g;
      return o.unstyled ? ((g = o.pt) == null ? void 0 : g.separator) || "" : di();
    }), m = h(() => {
      var g, y;
      return o.unstyled ? ((g = o.pt) == null ? void 0 : g.link) || "" : fi({
        class: (y = o.pt) == null ? void 0 : y.link
      });
    }), d = h(() => {
      var g;
      return o.unstyled && ((g = o.pt) == null ? void 0 : g.content) || "";
    });
    return a({
      _ref: n
    }), (g, y) => (w(), z("li", {
      class: b(p.value),
      ref_key: "_ref",
      ref: n
    }, [
      g.$slots.separator ? _(g.$slots, "separator", { key: 0 }) : x(r).separatorIcon ? (w(), z("span", {
        key: 1,
        class: b(k.value)
      }, [
        (w(), Se(qe(x(r).separatorIcon)))
      ], 2)) : f.value ? G("", !0) : (w(), z("span", {
        key: 2,
        class: b(k.value)
      }, U(x(r).separator), 3)),
      g.href && !g.disabled && !g.active ? (w(), z("a", {
        key: 3,
        href: g.href,
        class: b(m.value),
        onClick: i
      }, [
        _(g.$slots, "default")
      ], 10, mi)) : (w(), z("span", {
        key: 4,
        class: b(d.value)
      }, [
        _(g.$slots, "default")
      ], 2))
    ], 2));
  }
}), rl = Q(vi, {
  BreadcrumbItem: yi
}), hi = rl.BreadcrumbItem, nl = R({
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
  const e = H(null), t = H([]), o = H([]), n = H(!1), r = H(0), f = H(-1), s = ul(l.panels || []), i = h(() => l.direction !== "vertical"), p = (V, T) => {
    t.value[T] = V;
  }, k = (V, T) => {
    o.value[T] = V;
  }, m = () => {
    if (!e.value || t.value.length === 0) return;
    const V = i.value ? e.value.clientWidth : e.value.clientHeight;
    if (!l.panels || l.panels.length === 0) {
      const T = `${100 / t.value.length}%`;
      t.value.forEach(($, O) => {
        s[O] = s[O] || {}, s[O].size = T, s[O].resizable = s[O].resizable !== !1;
      });
      return;
    }
    l.panels.forEach((T, $) => {
      if ($ < t.value.length)
        if (s[$] = { ...T }, T.size && T.size.endsWith("%")) {
          const O = parseFloat(T.size) / 100, A = Math.floor(V * O);
          t.value[$].style[i.value ? "width" : "height"] = `${A}px`;
        } else T.size && (t.value[$].style[i.value ? "width" : "height"] = T.size);
    }), a("update:panels", [...s]);
  }, d = (V, T) => {
    var P, F;
    if (!l.resizable) return;
    const $ = T, O = T + 1, A = ((P = s[$]) == null ? void 0 : P.resizable) !== !1, L = ((F = s[O]) == null ? void 0 : F.resizable) !== !1;
    if (!(!A && !L)) {
      if (V.preventDefault(), n.value = !0, f.value = T, V instanceof MouseEvent)
        r.value = i.value ? V.clientX : V.clientY;
      else {
        const S = V.touches[0];
        r.value = i.value ? S.clientX : S.clientY;
      }
      window.addEventListener("mousemove", g), window.addEventListener("mouseup", c), window.addEventListener("touchmove", y), window.addEventListener("touchend", v), a("resize-start", V);
    }
  }, g = (V) => {
    n.value && u(i.value ? V.clientX : V.clientY);
  }, y = (V) => {
    if (!n.value) return;
    const T = V.touches[0];
    u(i.value ? T.clientX : T.clientY);
  }, u = (V) => {
    var re, W, Z, le;
    if (!n.value || !e.value) return;
    const T = f.value, $ = T, O = T + 1;
    if ($ < 0 || O >= t.value.length || !t.value[$] || !t.value[O])
      return;
    const A = t.value[$], L = t.value[O], P = V - r.value;
    if (P === 0) return;
    const F = i.value ? A.offsetWidth : A.offsetHeight, S = i.value ? L.offsetWidth : L.offsetHeight, E = (re = s[$]) != null && re.minSize ? M(
      s[$].minSize,
      e.value,
      i.value
    ) : 0, I = (W = s[O]) != null && W.minSize ? M(
      s[O].minSize,
      e.value,
      i.value
    ) : 0, N = (Z = s[$]) != null && Z.maxSize ? M(
      s[$].maxSize,
      e.value,
      i.value
    ) : 1 / 0, j = (le = s[O]) != null && le.maxSize ? M(
      s[O].maxSize,
      e.value,
      i.value
    ) : 1 / 0;
    let K = F + P, Y = S - P;
    K < E ? (K = E, Y = F + S - E) : K > N && (K = N, Y = F + S - N), Y < I ? (Y = I, K = F + S - I) : Y > j && (Y = j, K = F + S - j), i.value ? (A.style.width = `${K}px`, L.style.width = `${Y}px`) : (A.style.height = `${K}px`, L.style.height = `${Y}px`), s[$] = {
      ...s[$],
      size: `${K}px`
    }, s[O] = {
      ...s[O],
      size: `${Y}px`
    }, r.value = V, a("resize", [...s]);
  }, c = () => {
    C();
  }, v = () => {
    C();
  }, C = () => {
    n.value && (n.value = !1, f.value = -1, window.removeEventListener("mousemove", g), window.removeEventListener("mouseup", c), window.removeEventListener("touchmove", y), window.removeEventListener("touchend", v), a("resize-end", [...s]), a("update:panels", [...s]));
  }, D = (V) => {
    if (V < 0 || V >= t.value.length) return;
    const T = t.value[V], $ = s[V];
    if (!$.collapsible) return;
    if (!$.collapsed)
      $._savedSize = $.size, i.value ? T.style.width = "0" : T.style.height = "0", $.size = "0", $.collapsed = !0, a("collapse", V, !0);
    else {
      const A = $._savedSize || "1fr";
      i.value ? T.style.width = A : T.style.height = A, $.size = A, $.collapsed = !1, a("expand", V, !1);
    }
    a("update:panels", [...s]);
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
    gutterRefs: o,
    isResizing: n,
    panelSizes: s,
    isHorizontal: i,
    registerPanel: p,
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
    const t = l, o = e, {
      rootRef: n,
      panelSizes: r,
      isHorizontal: f,
      registerPanel: s,
      registerGutter: i,
      onGutterMouseDown: p,
      toggleCollapse: k,
      initPanelSizes: m
    } = ki(t, o), d = h(() => {
      var D;
      const c = He(), v = Object.keys(c).filter((M) => M.startsWith("panel-")).length / 2, C = ((D = t.panels) == null ? void 0 : D.length) || 0;
      return Math.max(v, C, 2);
    }), g = (c) => {
      const v = r[c] || {}, C = f.value ? "width" : "height", D = {};
      return v.size && (D[C] = v.size), v.collapsed && (D[C] = "0", D.overflow = "hidden"), D;
    }, y = (c, v, C) => {
      if (!t.resizable) return;
      c.preventDefault();
      const D = c.shiftKey ? 10 : 1, M = r[v], V = r[v + 1];
      if (!M || !V) return;
      const T = parseFloat(M.size || "0"), $ = parseFloat(V.size || "0"), O = D * C;
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
      const { root: c, wrapper: v, panel: C, gutter: D, gutterHandle: M, gutterIcon: V } = nl({
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
        panel: C(),
        gutter: D(),
        gutterHandle: M(),
        gutterIcon: V()
      };
    });
    return a({
      toggleCollapse: k,
      initPanelSizes: m
    }), Ve("splitter", {
      registerPanel: s,
      direction: t.direction
    }), (c, v) => (w(), z("div", {
      ref_key: "rootRef",
      ref: n,
      class: b(u.value.root),
      role: "separator",
      "aria-orientation": t.direction === "vertical" ? "horizontal" : "vertical"
    }, [
      (w(!0), z(oe, null, se(d.value, (C, D) => (w(), z(oe, { key: D }, [
        D < d.value ? (w(), z("div", {
          key: 0,
          ref_for: !0,
          ref: (M) => M && x(s)(M, D),
          class: b(u.value.wrapper),
          style: de(g(D))
        }, [
          _(c.$slots, `panel-${D}`, {}, () => [
            B("div", {
              class: b(u.value.panel)
            }, [
              _(c.$slots, `panel-${D}-content`, {}, () => [
                ce("Panel " + U(D + 1), 1)
              ])
            ], 2)
          ])
        ], 6)) : G("", !0),
        D < d.value - 1 ? (w(), z("div", {
          key: 1,
          ref_for: !0,
          ref: (M) => M && x(i)(M, D),
          class: b(u.value.gutter),
          onMousedown: (M) => x(p)(M, D),
          onTouchstart: (M) => x(p)(M, D),
          tabindex: "0",
          "aria-label": `调整${x(f) ? "宽度" : "高度"}`,
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
              class: b(u.value.gutterHandle)
            }, [
              _(c.$slots, `gutter-${D}-handle`, {}, () => [
                x(f) ? (w(), z("svg", {
                  key: 0,
                  class: b(u.value.gutterIcon),
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
                ]), 2)) : (w(), z("svg", {
                  key: 1,
                  class: b(u.value.gutterIcon),
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
        ], 42, zi)) : G("", !0)
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
    const e = l, t = a, o = H(null), n = Be("splitter", {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      registerPanel: (s, i) => {
      },
      direction: "horizontal",
      index: -1
    });
    te(
      () => e.size,
      (s) => {
        s !== void 0 && o.value && (n.direction === "horizontal" ? o.value.style.width = s : o.value.style.height = s);
      }
    ), te(
      () => e.collapsed,
      (s) => {
        t("update:collapsed", s);
      }
    ), ve(() => {
      o.value && n.index >= 0 && n.registerPanel(o.value, n.index);
    });
    const r = h(() => {
      var s;
      return e.unstyled ? ((s = e.pt) == null ? void 0 : s.root) || "" : nl().panel();
    }), f = h(() => {
      var s;
      return e.unstyled ? ((s = e.pt) == null ? void 0 : s.content) || "" : "h-full w-full";
    });
    return (s, i) => (w(), z("div", {
      ref_key: "panelRef",
      ref: o,
      class: b(r.value)
    }, [
      B("div", {
        class: b(f.value)
      }, [
        _(s.$slots, "default")
      ], 2)
    ], 2));
  }
}), Vi = Q(Si), $i = Q(Bi), Ii = (l, a) => {
  var g, y;
  const e = H(((g = l.modelValue) == null ? void 0 : g[0]) || null), t = H(((y = l.modelValue) == null ? void 0 : y[1]) || null), o = H((e.value || /* @__PURE__ */ new Date()).getMonth()), n = H((e.value || /* @__PURE__ */ new Date()).getFullYear()), r = H("start"), f = h(() => {
    const u = l.locale || "default", c = l.firstDayOfWeek || 0, v = [];
    for (let C = 0; C < 7; C++) {
      const D = (C + c) % 7;
      v.push(
        new Intl.DateTimeFormat(u, { weekday: "short" }).format(
          new Date(2021, 0, D + 3)
          // 2021-01-03 is a Sunday
        )
      );
    }
    return v;
  }), s = h(() => {
    const u = n.value, c = o.value, v = new Date(u, c, 1).getDay(), C = new Date(u, c + 1, 0).getDate(), D = l.firstDayOfWeek || 0, M = [], V = new Date(u, c, 0).getDate(), T = (v - D + 7) % 7;
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
    for (let A = 1; A <= C; A++) {
      const L = new Date(u, c, A), P = $.getDate() === A && $.getMonth() === c && $.getFullYear() === u, F = e.value && L.getDate() === e.value.getDate() && L.getMonth() === e.value.getMonth() && L.getFullYear() === e.value.getFullYear(), S = t.value && L.getDate() === t.value.getDate() && L.getMonth() === t.value.getMonth() && L.getFullYear() === t.value.getFullYear(), E = e.value && t.value && L > e.value && L < t.value, I = F || S, N = l.disabled || l.min && L < l.min || l.max && L > l.max;
      M.push({
        date: L,
        day: A,
        isCurrentMonth: !0,
        isToday: P,
        isSelected: I,
        isRangeStart: F,
        isRangeEnd: S,
        isInRange: E,
        isDisabled: N
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
      new Date(n.value, o.value)
    );
  }), p = () => {
    o.value === 0 ? (o.value = 11, n.value--) : o.value--;
  }, k = () => {
    o.value === 11 ? (o.value = 0, n.value++) : o.value++;
  }, m = (u) => {
    l.disabled || l.readonly || l.min && u < l.min || l.max && u > l.max || (r.value === "start" ? (e.value = u, t.value = null, r.value = "end") : (e.value && u < e.value ? (t.value = e.value, e.value = u) : t.value = u, r.value = "start"), a("update:modelValue", [e.value, t.value]), a("change", [e.value, t.value]));
  }, d = () => {
    e.value = null, t.value = null, r.value = "start", a("update:modelValue", [null, null]), a("change", [null, null]);
  };
  return te(
    () => l.modelValue,
    (u) => {
      u && (e.value = u[0], t.value = u[1], e.value && (o.value = e.value.getMonth(), n.value = e.value.getFullYear()), r.value = t.value ? "start" : "end");
    }
  ), {
    startDate: e,
    endDate: t,
    currentMonth: o,
    currentYear: n,
    selectionMode: r,
    weekdays: f,
    daysInMonth: s,
    monthName: i,
    prevMonth: p,
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
}, Fi = ["disabled"], Wi = ["disabled"], Hi = ["onClick", "disabled"], Gi = {
  key: 0,
  class: "mt-4 flex justify-between"
}, Ni = { class: "ml-1 font-medium" }, _i = { class: "ml-1 font-medium" }, Ki = /* @__PURE__ */ J({
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
      startDate: o,
      endDate: n,
      currentYear: r,
      selectionMode: f,
      weekdays: s,
      daysInMonth: i,
      monthName: p,
      prevMonth: k,
      nextMonth: m,
      selectDate: d,
      resetSelection: g
    } = Ii(t, e), y = (c) => {
      const v = t.locale || "default";
      return new Intl.DateTimeFormat(v).format(c);
    }, u = h(() => {
      var c, v, C, D, M, V, T, $, O, A, L, P, F, S, E, I, N, j, K, Y, re, W, Z, le, ee, ne, ue, fe, ge, pe, ze, ye;
      return {
        root: t.unstyled ? ((c = t.pt) == null ? void 0 : c.root) || "" : Di({ unstyled: t.unstyled, class: (v = t.pt) == null ? void 0 : v.root }),
        header: t.unstyled ? ((C = t.pt) == null ? void 0 : C.header) || "" : Mi({ class: (D = t.pt) == null ? void 0 : D.header }),
        title: t.unstyled ? ((M = t.pt) == null ? void 0 : M.title) || "" : Ti({ class: (V = t.pt) == null ? void 0 : V.title }),
        navigation: t.unstyled ? ((T = t.pt) == null ? void 0 : T.navigation) || "" : Ri({ class: ($ = t.pt) == null ? void 0 : $.navigation }),
        navButton: t.unstyled ? ((O = t.pt) == null ? void 0 : O.navButton) || "" : Ei({ class: (A = t.pt) == null ? void 0 : A.navButton }),
        weekdays: t.unstyled ? ((L = t.pt) == null ? void 0 : L.weekdays) || "" : Li({ class: (P = t.pt) == null ? void 0 : P.weekdays }),
        weekday: t.unstyled ? ((F = t.pt) == null ? void 0 : F.weekday) || "" : Ai({ class: (S = t.pt) == null ? void 0 : S.weekday }),
        days: t.unstyled ? ((E = t.pt) == null ? void 0 : E.days) || "" : Oi({ class: (I = t.pt) == null ? void 0 : I.days }),
        day: t.unstyled ? ((N = t.pt) == null ? void 0 : N.day) || "" : he({ class: (j = t.pt) == null ? void 0 : j.day }),
        today: t.unstyled ? ((K = t.pt) == null ? void 0 : K.today) || "" : he({ isToday: !0, class: (Y = t.pt) == null ? void 0 : Y.today }).split(" ").filter((ie) => !he().includes(ie)).join(" "),
        selected: t.unstyled ? ((re = t.pt) == null ? void 0 : re.selected) || "" : he({ isSelected: !0, class: (W = t.pt) == null ? void 0 : W.selected }).split(" ").filter((ie) => !he().includes(ie)).join(" "),
        rangeStart: t.unstyled ? ((Z = t.pt) == null ? void 0 : Z.rangeStart) || "" : he({
          isRangeStart: !0,
          class: (le = t.pt) == null ? void 0 : le.rangeStart
        }).split(" ").filter((ie) => !he().includes(ie)).join(" "),
        rangeEnd: t.unstyled ? ((ee = t.pt) == null ? void 0 : ee.rangeEnd) || "" : he({ isRangeEnd: !0, class: (ne = t.pt) == null ? void 0 : ne.rangeEnd }).split(" ").filter((ie) => !he().includes(ie)).join(" "),
        inRange: t.unstyled ? ((ue = t.pt) == null ? void 0 : ue.inRange) || "" : he({ isInRange: !0, class: (fe = t.pt) == null ? void 0 : fe.inRange }).split(" ").filter((ie) => !he().includes(ie)).join(" "),
        disabled: t.unstyled ? ((ge = t.pt) == null ? void 0 : ge.disabled) || "" : he({ isDisabled: !0, class: (pe = t.pt) == null ? void 0 : pe.disabled }).split(" ").filter((ie) => !he().includes(ie)).join(" "),
        adjacent: t.unstyled ? ((ze = t.pt) == null ? void 0 : ze.adjacent) || "" : he({ isAdjacent: !0, class: (ye = t.pt) == null ? void 0 : ye.adjacent }).split(" ").filter((ie) => !he().includes(ie)).join(" ")
      };
    });
    return (c, v) => (w(), z("div", {
      class: b(u.value.root)
    }, [
      B("div", {
        class: b(u.value.header)
      }, [
        B("div", {
          class: b(u.value.title)
        }, [
          ce(U(x(p)) + " " + U(x(r)) + " ", 1),
          x(f) === "end" ? (w(), z("span", ji, " (Select end date) ")) : G("", !0)
        ], 2),
        B("div", {
          class: b(u.value.navigation)
        }, [
          B("button", {
            class: b(u.value.navButton),
            onClick: v[0] || (v[0] = //@ts-ignore
            (...C) => x(k) && x(k)(...C)),
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
            class: b(u.value.navButton),
            onClick: v[1] || (v[1] = //@ts-ignore
            (...C) => x(m) && x(m)(...C)),
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
        class: b(u.value.weekdays)
      }, [
        (w(!0), z(oe, null, se(x(s), (C, D) => (w(), z("div", {
          key: D,
          class: b(u.value.weekday)
        }, U(C), 3))), 128))
      ], 2),
      B("div", {
        class: b(u.value.days)
      }, [
        (w(!0), z(oe, null, se(x(i), (C, D) => (w(), z("button", {
          key: D,
          class: b([
            u.value.day,
            C.isToday ? u.value.today : "",
            C.isSelected ? u.value.selected : "",
            C.isRangeStart ? u.value.rangeStart : "",
            C.isRangeEnd ? u.value.rangeEnd : "",
            C.isInRange ? u.value.inRange : "",
            C.isDisabled ? u.value.disabled : "",
            C.isCurrentMonth ? "" : u.value.adjacent
          ]),
          onClick: (M) => x(d)(C.date),
          disabled: C.isDisabled || c.disabled || c.readonly
        }, U(C.day), 11, Hi))), 128))
      ], 2),
      x(o) || x(n) ? (w(), z("div", Gi, [
        B("div", null, [
          v[5] || (v[5] = B("span", { class: "text-sm text-gray-500" }, "Start:", -1)),
          B("span", Ni, U(x(o) ? y(x(o)) : "-"), 1)
        ]),
        B("div", null, [
          v[6] || (v[6] = B("span", { class: "text-sm text-gray-500" }, "End:", -1)),
          B("span", _i, U(x(n) ? y(x(n)) : "-"), 1)
        ]),
        B("button", {
          class: "text-sm text-red-500 hover:text-red-700",
          onClick: v[2] || (v[2] = //@ts-ignore
          (...C) => x(g) && x(g)(...C))
        }, " Reset ")
      ])) : G("", !0)
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
}, ou = /* @__PURE__ */ J({
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
    const e = l, t = a, o = H(
      Array.isArray(e.modelValue) ? e.modelValue : e.modelValue ? [e.modelValue] : []
    );
    te(
      () => e.modelValue,
      (s) => {
        Array.isArray(s) ? o.value = s : s ? o.value = [s] : o.value = [];
      }
    );
    const n = h(() => {
      var s, i;
      return e.unstyled ? ((s = e.pt) == null ? void 0 : s.root) || "" : Ui({
        variant: e.variant,
        radius: e.radius,
        bordered: e.bordered,
        class: (i = e.pt) == null ? void 0 : i.root
      });
    }), r = (s, i) => {
      let p = [...o.value];
      if (i ? e.multiple ? p.includes(s) || p.push(s) : p = [s] : p = p.filter((k) => k !== s), o.value = p, e.multiple)
        t("update:modelValue", p), t("change", p);
      else {
        const k = p.length > 0 ? p[0] : void 0;
        t("update:modelValue", k), t("change", k);
      }
    }, f = (s) => o.value.includes(s);
    return Ve("accordionContext", {
      disabled: h(() => e.disabled),
      animated: h(() => e.animated),
      toggleItem: r,
      isItemExpanded: f
    }), (s, i) => (w(), z("div", {
      class: b(n.value)
    }, [
      _(s.$slots, "default")
    ], 2));
  }
}), ru = ["aria-expanded", "aria-disabled"], nu = /* @__PURE__ */ J({
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
    const e = l, t = a, o = Be("accordionContext", {
      disabled: h(() => !1),
      animated: h(() => !0),
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
      toggleItem: (u, c) => {
      },
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
      isItemExpanded: (u) => !1
    }), n = h(
      () => e.disabled || o.disabled.value
    ), r = h(() => o.isItemExpanded(e.value)), f = H(null);
    te(
      () => r.value,
      (u) => {
        if (!(!o.animated.value || !f.value))
          if (u) {
            const c = f.value;
            c.style.height = "0", c.style.height = `${c.scrollHeight}px`;
            const v = () => {
              r.value && (c.style.height = ""), c.removeEventListener("transitionend", v);
            };
            c.addEventListener("transitionend", v);
          } else {
            const c = f.value, v = c.offsetHeight;
            c.style.height = `${v}px`, c.style.height = "0";
          }
      }
    );
    const s = (u) => {
      if (n.value) return;
      t("click", u);
      const c = !r.value;
      o.toggleItem(e.value, c), t("toggle", c);
    }, i = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.root) || "" : Xi({
        class: (c = e.pt) == null ? void 0 : c.root
      });
    }), p = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.header) || "" : qi({
        class: (c = e.pt) == null ? void 0 : c.header
      });
    }), k = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.trigger) || "" : Zi({
        disabled: n.value,
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
        expanded: r.value,
        class: (c = e.pt) == null ? void 0 : c.icon
      });
    }), g = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.content) || "" : eu({
        animated: o.animated.value,
        expanded: r.value,
        class: (c = e.pt) == null ? void 0 : c.content
      });
    }), y = h(() => {
      var u, c;
      return e.unstyled ? ((u = e.pt) == null ? void 0 : u.contentInner) || "" : tu({
        class: (c = e.pt) == null ? void 0 : c.contentInner
      });
    });
    return ve(() => {
      f.value && !r.value && (f.value.style.height = "0");
    }), (u, c) => (w(), z("div", {
      class: b(i.value)
    }, [
      B("div", {
        class: b(p.value)
      }, [
        B("button", {
          type: "button",
          class: b(k.value),
          "aria-expanded": r.value,
          "aria-disabled": n.value,
          onClick: s
        }, [
          B("div", {
            class: b(m.value)
          }, [
            _(u.$slots, "header", {}, () => [
              ce(U(u.header), 1)
            ])
          ], 2),
          B("div", {
            class: b(d.value)
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
        ], 10, ru)
      ], 2),
      B("div", {
        class: b(g.value),
        ref_key: "contentEl",
        ref: f
      }, [
        B("div", {
          class: b(y.value)
        }, [
          _(u.$slots, "default")
        ], 2)
      ], 2)
    ], 2));
  }
}), su = Q(ou), iu = Q(nu), uu = R({
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
    const e = l, t = a, o = H(null), n = H(""), r = H(!1), f = h(() => e.unstyled ? {
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
    })), s = () => {
      if (!n.value || e.disabled || e.readonly || e.maxCount && e.modelValue.length >= e.maxCount) return;
      const d = [...e.modelValue];
      d.includes(n.value) || (d.push(n.value), t("update:modelValue", d), t("change", d), t("add", n.value)), n.value = "";
    }, i = (d) => {
      if (e.disabled || e.readonly) return;
      const g = [...e.modelValue], y = g[d];
      g.splice(d, 1), t("update:modelValue", g), t("change", g), t("remove", y, d);
    }, p = () => {
      if (n.value === "" && e.modelValue.length > 0 && !e.disabled && !e.readonly) {
        const d = [...e.modelValue], g = d.length - 1, y = d[g];
        d.pop(), t("update:modelValue", d), t("change", d), t("remove", y, g);
      }
    }, k = (d) => {
      r.value = !0, t("focus", d);
    }, m = (d) => {
      r.value = !1, n.value && s(), t("blur", d);
    };
    return te(
      () => e.autofocus,
      (d) => {
        d && o.value && o.value.focus();
      },
      { immediate: !0 }
    ), (d, g) => {
      var y, u;
      return w(), z("div", {
        class: b(f.value.root())
      }, [
        B("div", {
          class: b(f.value.wrapper())
        }, [
          d.$slots.prefix || d.prefixIcon ? (w(), z("div", {
            key: 0,
            class: b(f.value.prefix())
          }, [
            _(d.$slots, "prefix", {}, () => [
              d.prefixIcon ? (w(), z("span", du, U(d.prefixIcon), 1)) : G("", !0)
            ])
          ], 2)) : G("", !0),
          (w(!0), z(oe, null, se(d.modelValue, (c, v) => (w(), z("div", {
            key: v,
            class: b(f.value.tag())
          }, [
            ce(U(c) + " ", 1),
            d.closable && !d.disabled && !d.readonly ? (w(), z("span", {
              key: 0,
              class: b(f.value.tagClose()),
              onClick: (C) => i(v)
            }, " × ", 10, cu)) : G("", !0)
          ], 2))), 128)),
          We(B("input", {
            ref_key: "inputRef",
            ref: o,
            class: b(f.value.input()),
            type: "text",
            placeholder: (y = d.modelValue) != null && y.length ? "" : d.placeholder,
            disabled: d.disabled,
            readonly: d.readonly,
            autofocus: d.autofocus,
            "onUpdate:modelValue": g[0] || (g[0] = (c) => n.value = c),
            onKeydown: [
              ke(Ce(s, ["prevent"]), ["enter"]),
              ke(p, ["backspace"])
            ],
            onBlur: m,
            onFocus: k
          }, null, 42, fu), [
            [dl, n.value]
          ]),
          d.$slots.suffix || d.suffixIcon ? (w(), z("div", {
            key: 1,
            class: b(f.value.suffix())
          }, [
            _(d.$slots, "suffix", {}, () => [
              d.suffixIcon ? (w(), z("span", pu, U(d.suffixIcon), 1)) : G("", !0)
            ])
          ], 2)) : G("", !0),
          d.showCount && d.maxCount ? (w(), z("span", {
            key: 2,
            class: b(f.value.count())
          }, U(((u = d.modelValue) == null ? void 0 : u.length) || 0) + "/" + U(d.maxCount), 3)) : G("", !0)
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
  const e = H(l.visible || !1), t = H(null), o = H(null), n = `dropdown-${Math.random().toString(36).slice(2, 11)}`;
  let r = null, f = null;
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
  const s = () => {
    l.disabled || ((l.trigger === "hover" || l.trigger === "focus") && l.showDelay ? (clearTimeout(f), r = window.setTimeout(() => {
      e.value = !0;
    }, l.showDelay)) : e.value = !0);
  }, i = () => {
    l.trigger !== "manual" && ((l.trigger === "hover" || l.trigger === "focus") && l.hideDelay ? (clearTimeout(r), f = window.setTimeout(() => {
      e.value = !1;
    }, l.hideDelay)) : e.value = !1);
  }, p = () => {
    l.disabled || l.trigger !== "manual" && (e.value = !e.value);
  }, k = (g) => {
    if (!l.closeOnClickOutside || !e.value || l.trigger === "manual") return;
    const y = g.target;
    o.value && !o.value.contains(y) && t.value && !t.value.contains(y) && i();
  }, m = (g, y) => {
    l.closeOnSelect && l.trigger !== "manual" && i(), a("select", g, y);
  }, d = (g, y) => {
    g.disabled || g.divider || g.value !== void 0 && m(g.value, y);
  };
  return ve(() => {
    l.closeOnClickOutside && document.addEventListener("click", k);
  }), De(() => {
    document.removeEventListener("click", k), r && clearTimeout(r), f && clearTimeout(f);
  }), {
    isVisible: e,
    triggerRef: t,
    contentRef: o,
    dropdownId: n,
    show: s,
    hide: i,
    toggle: p,
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
    const t = l, o = e, {
      isVisible: n,
      triggerRef: r,
      contentRef: f,
      dropdownId: s,
      show: i,
      hide: p,
      toggle: k,
      handleItemClick: m,
      handleOptionClick: d
    } = yu(t, o), g = h(() => {
      var A, L, P, F, S, E, I, N, j, K;
      if (t.unstyled)
        return {
          root: ((A = t.pt) == null ? void 0 : A.root) || "",
          trigger: ((L = t.pt) == null ? void 0 : L.trigger) || "",
          content: ((P = t.pt) == null ? void 0 : P.content) || "",
          arrow: ((F = t.pt) == null ? void 0 : F.arrow) || "",
          menu: ((S = t.pt) == null ? void 0 : S.menu) || "",
          menuItem: ((E = t.pt) == null ? void 0 : E.menuItem) || "",
          menuItemSelected: ((I = t.pt) == null ? void 0 : I.menuItemSelected) || "",
          menuItemDisabled: ((N = t.pt) == null ? void 0 : N.menuItemDisabled) || "",
          menuItemIcon: ((j = t.pt) == null ? void 0 : j.menuItemIcon) || "",
          menuDivider: ((K = t.pt) == null ? void 0 : K.menuDivider) || ""
        };
      const {
        root: y,
        trigger: u,
        content: c,
        arrow: v,
        menu: C,
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
        menu: C(),
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
      hide: p,
      toggle: k
    }), Ve("dropdown", {
      handleItemClick: m,
      closeOnSelect: t.closeOnSelect
    }), (y, u) => (w(), z("div", {
      class: b(g.value.root)
    }, [
      B("div", {
        ref_key: "triggerRef",
        ref: r,
        class: b(g.value.trigger),
        onClick: u[0] || (u[0] = (c) => y.trigger === "click" && x(k)()),
        onMouseenter: u[1] || (u[1] = (c) => y.trigger === "hover" && x(i)()),
        onMouseleave: u[2] || (u[2] = (c) => y.trigger === "hover" && x(p)()),
        onFocus: u[3] || (u[3] = (c) => y.trigger === "focus" && x(i)()),
        onBlur: u[4] || (u[4] = (c) => y.trigger === "focus" && x(p)()),
        onKeydown: [
          u[5] || (u[5] = ke(
            //@ts-ignore
            (...c) => x(p) && x(p)(...c),
            ["esc"]
          )),
          u[6] || (u[6] = ke(Ce((c) => y.trigger === "click" && x(k)(), ["prevent"]), ["space"])),
          u[7] || (u[7] = ke((c) => y.trigger === "click" && x(k)(), ["enter"]))
        ],
        tabindex: "0",
        role: "button",
        "aria-haspopup": !0,
        "aria-expanded": x(n),
        "aria-controls": x(s)
      }, [
        _(y.$slots, "trigger")
      ], 42, hu),
      Oe(Ft, { name: "dropdown" }, {
        default: rt(() => [
          x(n) ? (w(), z("div", {
            key: 0,
            ref_key: "contentRef",
            ref: f,
            id: x(s),
            class: b(g.value.content),
            onMouseenter: u[8] || (u[8] = (c) => y.trigger === "hover" && x(i)()),
            onMouseleave: u[9] || (u[9] = (c) => y.trigger === "hover" && x(p)()),
            role: "menu"
          }, [
            y.arrow ? (w(), z("div", {
              key: 0,
              class: b(g.value.arrow)
            }, null, 2)) : G("", !0),
            B("div", {
              class: b(g.value.menu)
            }, [
              y.options && y.options.length ? (w(!0), z(oe, { key: 0 }, se(y.options, (c, v) => (w(), z(oe, { key: v }, [
                c.divider ? (w(), z("div", {
                  key: 0,
                  class: b(g.value.menuDivider),
                  role: "separator"
                }, null, 2)) : (w(), z("div", {
                  key: 1,
                  class: b([
                    g.value.menuItem,
                    c.disabled && g.value.menuItemDisabled
                  ]),
                  onClick: (C) => !c.disabled && x(d)(c, C),
                  role: "menuitem",
                  "aria-disabled": c.disabled
                }, [
                  c.icon ? (w(), z("span", {
                    key: 0,
                    class: b(g.value.menuItemIcon)
                  }, U(c.icon), 3)) : G("", !0),
                  B("span", null, U(c.label), 1)
                ], 10, xu))
              ], 64))), 128)) : _(y.$slots, "default", { key: 1 })
            ], 2)
          ], 42, wu)) : G("", !0)
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
    const e = l, t = a, o = Be("dropdown", {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      handleItemClick: (p, k) => {
      },
      closeOnSelect: !0
    }), n = (p) => {
      t("click", p), e.value !== void 0 && o.handleItemClick(e.value, p);
    }, r = (p) => {
      const k = new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0,
        view: window
      });
      t("click", k), e.value !== void 0 && o.handleItemClick(e.value, k);
    }, f = h(() => {
      var p, k;
      return e.unstyled ? ((p = e.pt) == null ? void 0 : p.root) || "" : [
        Ae().menuItem(),
        e.active && Ae().menuItemActive(),
        e.disabled && Ae().menuItemDisabled(),
        (k = e.pt) == null ? void 0 : k.root
      ].filter(Boolean).join(" ");
    }), s = h(() => {
      var p;
      return e.unstyled ? ((p = e.pt) == null ? void 0 : p.icon) || "" : Ae().menuItemIcon();
    }), i = h(() => {
      var p;
      return e.unstyled ? ((p = e.pt) == null ? void 0 : p.root) || "" : Ae().menuDivider();
    });
    return (p, k) => p.divider ? (w(), z("div", {
      key: 1,
      role: "separator",
      class: b(i.value)
    }, null, 2)) : (w(), z("div", {
      key: 0,
      class: b(f.value),
      role: "menuitem",
      tabindex: "0",
      "aria-disabled": p.disabled,
      onClick: k[0] || (k[0] = (m) => !p.disabled && n(m)),
      onKeydown: [
        k[1] || (k[1] = ke((m) => !p.disabled && r(), ["enter"])),
        k[2] || (k[2] = ke(Ce((m) => !p.disabled && r(), ["prevent"]), ["space"]))
      ]
    }, [
      _(p.$slots, "icon", {}, () => [
        p.icon ? (w(), z("span", {
          key: 0,
          class: b(s.value)
        }, U(p.icon), 3)) : G("", !0)
      ]),
      _(p.$slots, "default", {}, () => [
        ce(U(p.label), 1)
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
      var t, o;
      return a.unstyled ? ((t = a.pt) == null ? void 0 : t.root) || "" : [Ae().menuDivider(), (o = a.pt) == null ? void 0 : o.root].filter(Boolean).join(" ");
    });
    return (t, o) => (w(), z("div", {
      class: b(e.value),
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
    set: (r) => {
      l.disabled || (l.active === void 0 && (e.value = r), a("update:active", r), a("change", r));
    }
  }), o = () => {
    t.value = !t.value;
  };
  return {
    isActive: t,
    toggle: o,
    handleTrigger: (r) => {
      l.disabled || l.trigger === "click" && o();
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
    const e = l, t = a, { isActive: o, handleTrigger: n } = Tu(e, t), r = h(() => {
      var i, p;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.root) || "" : Iu({
        variant: e.variant,
        size: e.size,
        class: (p = e.pt) == null ? void 0 : p.root
      });
    }), f = h(() => {
      var i, p;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.on) || "" : Du({
        active: o.value,
        variant: e.variant,
        disabled: e.disabled,
        class: (p = e.pt) == null ? void 0 : p.on
      });
    }), s = h(() => {
      var i, p;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.off) || "" : Mu({
        active: o.value,
        variant: e.variant,
        disabled: e.disabled,
        class: (p = e.pt) == null ? void 0 : p.off
      });
    });
    return (i, p) => (w(), z("div", {
      class: b(r.value),
      onClick: p[0] || (p[0] = (k) => e.trigger === "click" ? x(n)(k) : void 0),
      onMouseenter: p[1] || (p[1] = (k) => e.trigger === "hover" ? o.value = !0 : void 0),
      onMouseleave: p[2] || (p[2] = (k) => e.trigger === "hover" ? o.value = !1 : void 0),
      onFocus: p[3] || (p[3] = (k) => e.trigger === "focus" ? o.value = !0 : void 0),
      onBlur: p[4] || (p[4] = (k) => e.trigger === "focus" ? o.value = !1 : void 0),
      tabindex: e.trigger === "focus" ? 0 : void 0,
      "aria-checked": x(o),
      "aria-disabled": e.disabled,
      role: "switch"
    }, [
      B("div", {
        class: b(f.value)
      }, [
        _(i.$slots, "on")
      ], 2),
      B("div", {
        class: b(s.value)
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
  const e = H(null), t = H(!0), o = H(!1), n = H(l.isZoomed || !1), r = (i) => {
    t.value = !1, a("load", i);
  }, f = (i) => {
    t.value = !1, o.value = !0, a("error", i);
  }, s = () => {
    l.isZoomable && (n.value = !n.value, a("zoom", n.value));
  };
  return te(
    () => l.isZoomed,
    (i) => {
      i !== void 0 && (n.value = i);
    }
  ), te(
    () => l.src,
    () => {
      t.value = !0, o.value = !1;
    }
  ), {
    imageRef: e,
    isLoading: t,
    isError: o,
    isZoomed: n,
    handleLoad: r,
    handleError: f,
    toggleZoom: s
  };
}, Wu = ["aria-label"], Hu = ["src", "alt", "loading"], Gu = ["src", "alt"], Nu = {
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
    const t = l, o = e, {
      imageRef: n,
      isLoading: r,
      isError: f,
      isZoomed: s,
      handleLoad: i,
      handleError: p,
      toggleZoom: k
    } = Fu(t, o), m = () => {
      t.isZoomable && k();
    }, d = h(() => {
      var D, M;
      return t.unstyled ? ((D = t.pt) == null ? void 0 : D.root) || "" : Au({
        fit: t.fit,
        radius: t.radius,
        isZoomable: t.isZoomable,
        isZoomed: s.value,
        class: (M = t.pt) == null ? void 0 : M.root
      });
    }), g = h(() => {
      var D, M;
      return t.unstyled ? ((D = t.pt) == null ? void 0 : D.img) || "" : `w-full h-full transition-transform ${s.value ? "scale-" + t.zoomScale : ""} ${((M = t.pt) == null ? void 0 : M.img) || ""}`;
    }), y = h(() => {
      var D, M;
      return t.unstyled ? ((D = t.pt) == null ? void 0 : D.skeleton) || "" : Ou({ class: (M = t.pt) == null ? void 0 : M.skeleton });
    }), u = h(() => {
      var D, M;
      return t.unstyled ? ((D = t.pt) == null ? void 0 : D.overlay) || "" : Pu({ visible: s.value, class: (M = t.pt) == null ? void 0 : M.overlay });
    }), c = h(() => {
      const D = {};
      return t.width !== "auto" && (D.width = typeof t.width == "number" ? `${t.width}px` : t.width), t.height !== "auto" && (D.height = typeof t.height == "number" ? `${t.height}px` : t.height), D;
    }), v = h(() => ({
      objectFit: t.fit
    })), C = h(() => t.skeletonColor ? { backgroundColor: t.skeletonColor } : {});
    return a({
      imageRef: n,
      isLoading: r,
      isError: f,
      isZoomed: s
    }), (D, M) => (w(), z("div", {
      class: b(d.value),
      style: de(c.value),
      onClick: m,
      role: "img",
      "aria-label": D.alt
    }, [
      D.skeleton && x(r) ? (w(), z("div", {
        key: 0,
        class: b(y.value),
        style: de(C.value)
      }, null, 6)) : G("", !0),
      B("img", {
        ref_key: "imageRef",
        ref: n,
        src: D.src,
        alt: D.alt,
        class: b(g.value),
        style: de(v.value),
        loading: D.loading,
        onLoad: M[0] || (M[0] = //@ts-ignore
        (...V) => x(i) && x(i)(...V)),
        onError: M[1] || (M[1] = //@ts-ignore
        (...V) => x(p) && x(p)(...V))
      }, null, 46, Hu),
      D.blurred && x(r) ? (w(), z("img", {
        key: 1,
        src: D.src,
        alt: D.alt,
        class: "absolute inset-0 w-full h-full",
        style: de({
          filter: `blur(${D.blurAmount}px)`,
          transform: "scale(1.1)",
          objectFit: D.fit
        })
      }, null, 12, Gu)) : G("", !0),
      D.isZoomable && x(s).valueOf() ? (w(), z("div", {
        key: 2,
        class: b(u.value)
      }, [
        _(D.$slots, "zoom-icon", {}, () => [
          M[2] || (M[2] = cl('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>', 1))
        ])
      ], 2)) : G("", !0),
      x(f) ? (w(), z("div", Nu, [
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
      ])) : G("", !0)
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
  const e = (o) => {
    if (l.disabled) {
      o.preventDefault();
      return;
    }
    a("click", o);
  }, t = h(() => {
    const o = {};
    return l.href && (o.href = l.href), l.external && (o.target = "_blank", o.rel = "noopener noreferrer"), o;
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
    const e = l, t = a, { handleClick: o, linkAttributes: n } = Zu(e, t), r = h(() => {
      var s, i;
      return e.unstyled ? ((s = e.pt) == null ? void 0 : s.root) || "" : Uu({
        variant: e.variant,
        size: e.size,
        underline: e.underline,
        disabled: e.disabled,
        class: (i = e.pt) == null ? void 0 : i.root
      });
    }), f = (s) => {
      var i, p;
      return e.unstyled ? ((i = e.pt) == null ? void 0 : i.icon) || "" : Xu({
        position: s,
        size: e.size,
        class: (p = e.pt) == null ? void 0 : p.icon
      });
    };
    return (s, i) => (w(), z("a", Wt({ class: r.value }, x(n), {
      onClick: i[0] || (i[0] = //@ts-ignore
      (...p) => x(o) && x(o)(...p)),
      "aria-disabled": s.disabled
    }), [
      s.iconPosition === "left" ? _(s.$slots, "icon-left", { key: 0 }, () => [
        s.$slots["icon-left"] ? (w(), z("span", {
          key: 0,
          class: b(f("left"))
        }, [
          _(s.$slots, "icon-left")
        ], 2)) : G("", !0)
      ]) : G("", !0),
      _(s.$slots, "default"),
      s.iconPosition === "right" ? _(s.$slots, "icon-right", { key: 1 }, () => [
        s.$slots["icon-right"] ? (w(), z("span", {
          key: 0,
          class: b(f("right"))
        }, [
          _(s.$slots, "icon-right")
        ], 2)) : G("", !0)
      ]) : G("", !0),
      s.external && !s.$slots["icon-right"] && s.iconPosition !== "left" ? (w(), z("span", {
        key: 2,
        class: b(f("right"))
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
      ]), 2)) : G("", !0)
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
}, ad = ["tabindex"], od = ["tabindex"], rd = ["onClick", "aria-label", "aria-current", "tabindex"], nd = /* @__PURE__ */ J({
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
    const t = l, o = e, n = He(), r = H(null), f = H(t.initialIndex);
    let s = null;
    const i = h(() => {
      if (!n) return 0;
      let $ = 0;
      for (; n[`item-${$}`]; )
        $++;
      return $ || 1;
    }), p = h(() => {
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
      f.value < i.value - 1 ? f.value++ : t.loop && (f.value = 0), f.value !== $ && (o("change", f.value, $), o("update:active-index", f.value));
    }, C = () => {
      if (t.disabled) return;
      const $ = f.value;
      f.value > 0 ? f.value-- : t.loop && (f.value = i.value - 1), f.value !== $ && (o("change", f.value, $), o("update:active-index", f.value));
    }, D = ($) => {
      if (!t.disabled && $ >= 0 && $ < i.value) {
        const O = f.value;
        f.value = $, o("change", f.value, O), o("update:active-index", f.value);
      }
    }, M = () => {
      t.autoplay && !t.disabled && (s = setInterval(() => {
        v();
      }, t.interval));
    }, V = () => {
      s && (clearInterval(s), s = null);
    }, T = ($) => {
      !t.keyboardNavigation || t.disabled || ($.key === "ArrowLeft" ? C() : $.key === "ArrowRight" && v());
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
      t.autoplay && M(), t.keyboardNavigation && r.value && r.value.addEventListener("keydown", T);
    }), Te(() => {
      V(), r.value && r.value.removeEventListener("keydown", T);
    }), a({
      next: v,
      prev: C,
      goToSlide: D
    }), ($, O) => (w(), z("div", {
      class: b(p.value),
      ref_key: "rootRef",
      ref: r
    }, [
      B("div", {
        class: b(k.value)
      }, [
        (w(!0), z(oe, null, se(i.value, (A, L) => (w(), z(oe, null, [
          L === f.value ? (w(), z("div", {
            key: L,
            class: b(m.value)
          }, [
            _($.$slots, `item-${L}`)
          ], 2)) : G("", !0)
        ], 64))), 256))
      ], 2),
      $.navigation && !$.disabled ? (w(), z(oe, { key: 0 }, [
        $.navigation && ($.loop || f.value > 0) ? (w(), z("button", {
          key: 0,
          class: b(d.value),
          onClick: C,
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
        ], 10, ad)) : G("", !0),
        $.navigation && ($.loop || f.value < i.value - 1) ? (w(), z("button", {
          key: 1,
          class: b(g.value),
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
        ], 10, od)) : G("", !0)
      ], 64)) : G("", !0),
      $.indicators && !$.disabled ? (w(), z("div", {
        key: 1,
        class: b(y.value)
      }, [
        (w(!0), z(oe, null, se(i.value, (A, L) => (w(), z("button", {
          key: L,
          class: b([
            L === f.value ? c.value : u.value
          ]),
          onClick: (P) => D(L),
          "aria-label": `Go to slide ${L + 1}`,
          "aria-current": L === f.value,
          tabindex: $.disabled ? -1 : 0
        }, null, 10, rd))), 128))
      ], 2)) : G("", !0)
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
      var o, n;
      return a.unstyled ? ((o = a.pt) == null ? void 0 : o.root) || "" : id({
        orientation: a.orientation,
        align: a.align,
        class: (n = a.pt) == null ? void 0 : n.root
      });
    }), t = h(() => a.reverse ? { flexDirection: "column-reverse" } : {});
    return (o, n) => (w(), z("div", {
      class: b(e.value),
      style: de(t.value)
    }, [
      _(o.$slots, "default")
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
    ), o = h(() => e === "alternate"), n = h(() => {
      var g, y, u;
      if (a.unstyled)
        return ((g = a.pt) == null ? void 0 : g.root) || "";
      const d = "relative flex";
      return t === "vertical" ? `${d} ${e === "right" ? "flex-row-reverse" : "flex-row"} ${((y = a.pt) == null ? void 0 : y.root) || ""}` : `${d} flex-col ${((u = a.pt) == null ? void 0 : u.root) || ""}`;
    }), r = h(() => {
      var g, y, u;
      if (a.unstyled)
        return ((g = a.pt) == null ? void 0 : g.dot) || "";
      const d = "flex-shrink-0 z-10";
      return t === "vertical" ? `${d} ${e === "right" ? "mr-4" : "ml-4"} ${((y = a.pt) == null ? void 0 : y.dot) || ""}` : `${d} ${((u = a.pt) == null ? void 0 : u.dot) || ""}`;
    }), f = h(() => {
      var d, g, y;
      return a.unstyled ? ((d = a.pt) == null ? void 0 : d.connector) || "" : t === "vertical" ? `absolute top-6 left-0 w-0.5 h-full bg-gray-300 dark:bg-gray-600 ${e === "right" ? "right-0 left-auto" : ""} ${((g = a.pt) == null ? void 0 : g.connector) || ""}` : `absolute left-6 top-0 w-full h-0.5 bg-gray-300 dark:bg-gray-600 ${((y = a.pt) == null ? void 0 : y.connector) || ""}`;
    }), s = h(() => {
      var d, g;
      return a.unstyled ? ((d = a.pt) == null ? void 0 : d.content) || "" : `flex-1 ${((g = a.pt) == null ? void 0 : g.content) || ""}`;
    }), i = h(() => {
      var d, g;
      return a.unstyled ? ((d = a.pt) == null ? void 0 : d.opposite) || "" : `flex-1 text-right ${((g = a.pt) == null ? void 0 : g.opposite) || ""}`;
    }), p = h(() => a.dotColor ? { borderColor: a.dotColor } : {}), k = h(() => a.lineColor ? { backgroundColor: a.lineColor } : {}), m = h(() => {
      const d = {};
      return a.dotColor && !a.unstyled && (a.lineColor || (d["--line-color"] = a.dotColor)), d;
    });
    return (d, g) => (w(), z("div", {
      class: b(n.value),
      style: de(m.value)
    }, [
      B("div", {
        class: b(r.value),
        style: de(p.value)
      }, [
        _(d.$slots, "dot", {}, () => {
          var y;
          return [
            B("div", {
              class: b([
                "w-3 h-3 rounded-full border-2 border-gray-300 dark:border-gray-600",
                (y = a.pt) == null ? void 0 : y.dot
              ]),
              style: de(p.value)
            }, null, 6)
          ];
        })
      ], 6),
      a.isLast ? G("", !0) : (w(), z("div", {
        key: 0,
        class: b(f.value),
        style: de(k.value)
      }, null, 6)),
      B("div", {
        class: b(s.value)
      }, [
        _(d.$slots, "default")
      ], 2),
      o.value ? (w(), z("div", {
        key: 1,
        class: b(i.value)
      }, [
        _(d.$slots, "opposite")
      ], 2)) : G("", !0)
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
    const e = l, t = a, { type: o = "info", duration: n = 3e3 } = e, r = h(() => at().base({ type: e.type })), f = h(() => at().icon({ type: e.type })), s = h(
      () => at().description({ type: e.type })
    ), i = h(
      () => at().closeButton({ type: e.type })
    ), p = {
      info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" /></svg>',
      success: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" /></svg>',
      warning: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" /></svg>',
      error: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" /></svg>'
    };
    let k;
    const m = H(n), d = H(0), g = () => {
      n <= 0 || (d.value = Date.now(), k = setTimeout(() => {
        v();
      }, m.value));
    }, y = () => {
      n <= 0 || (clearTimeout(k), m.value -= Date.now() - d.value);
    }, u = () => {
      n <= 0 || g();
    }, c = () => {
      v();
    }, v = () => {
      t("close", e.id), e.onClose && e.onClose();
    };
    return ve(() => {
      g();
    }), Te(() => {
      clearTimeout(k);
    }), (C, D) => (w(), z("div", {
      class: b(r.value),
      role: "alert",
      onMouseenter: y,
      onMouseleave: u
    }, [
      B("div", {
        class: b(f.value)
      }, [
        _(C.$slots, "icon", {}, () => [
          B("span", {
            innerHTML: p[x(o) || "info"]
          }, null, 8, yd)
        ])
      ], 2),
      B("div", hd, [
        B("div", {
          class: b(s.value)
        }, U(C.message), 3)
      ]),
      (w(), z("button", {
        key: 0,
        type: "button",
        class: b(i.value),
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
    ], e = (r) => Je.value.filter((f) => (f.position || "top-right") === r), t = (r) => {
      sl(r);
    }, o = (r) => {
      switch (r) {
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
    }, n = (r) => {
      const f = r.includes("top"), s = r.includes("center"), i = r.includes("right");
      let p = "", k = "";
      return s ? (p = f ? "-translate-y-full opacity-0" : "translate-y-full opacity-0", k = f ? "-translate-y-full opacity-0" : "translate-y-full opacity-0") : f ? i ? (p = "translate-x-full opacity-0", k = "translate-x-full opacity-0") : (p = "-translate-x-full opacity-0", k = "-translate-x-full opacity-0") : (p = "translate-y-full opacity-0", k = "translate-y-full opacity-0"), {
        enter: "transition-all duration-300 ease-out",
        leave: "transition-all duration-200 ease-in absolute w-full",
        enterFrom: p,
        leaveTo: k
      };
    };
    return (r, f) => (w(), z("div", xd, [
      (w(), z(oe, null, se(a, (s) => B("div", {
        key: s,
        class: b([
          "absolute flex w-full flex-col gap-4 p-4 md:max-w-[420px]",
          o(s)
        ])
      }, [
        Oe(fl, {
          tag: "div",
          "enter-active-class": n(s).enter,
          "leave-active-class": n(s).leave,
          "enter-from-class": n(s).enterFrom,
          "leave-to-class": n(s).leaveTo,
          "move-class": "transition-all duration-300 ease-in-out",
          class: "flex flex-col gap-4 w-full"
        }, {
          default: rt(() => [
            (w(!0), z(oe, null, se(e(s), (i) => (w(), Se(wd, Wt({
              key: i.id
            }, { ref_for: !0 }, i, {
              onClose: (p) => t(i.id)
            }), null, 16, ["onClose"]))), 128))
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
}, Ue = (l) => (kd(), gd(l)), Ed = {
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
    const e = l, t = a, o = H([]), n = (s) => {
      o.value.push(s);
    }, r = (s) => {
      const i = o.value.indexOf(s);
      i !== -1 && o.value.splice(i, 1);
    }, f = (s) => {
      s !== e.current && (t("update:current", s), t("change", s));
    };
    return Ve("steps-context", {
      current: xe(e, "current"),
      direction: xe(e, "direction"),
      status: xe(e, "status"),
      steps: o,
      registerStep: n,
      unregisterStep: r,
      onChange: f
    }), (s, i) => (w(), z("div", {
      class: b([
        "flex w-full gap-4",
        s.direction === "vertical" ? "flex-col" : "flex-row items-center"
      ])
    }, [
      _(s.$slots, "default")
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
    const o = h(() => (e == null ? void 0 : e.steps.value.indexOf(t)) ?? -1), n = h(() => o.value === ((e == null ? void 0 : e.steps.value.length) ?? 0) - 1), r = h(() => {
      if (a.status) return a.status;
      if (!e) return "wait";
      const m = e.current.value;
      return o.value < m ? "finish" : o.value === m ? e.status.value : "wait";
    }), f = h(() => r.value === "finish"), s = h(() => r.value === "process"), i = h(() => !a.disabled && e), p = h(() => {
      switch (r.value) {
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
      i.value && e && e.onChange(o.value);
    };
    return (m, d) => {
      var g, y, u;
      return w(), z("div", {
        class: b([
          "relative flex flex-1",
          ((g = x(e)) == null ? void 0 : g.direction.value) === "vertical" ? "flex-col pb-8 last:pb-0" : "flex-row items-center last:flex-none",
          i.value ? "cursor-pointer" : "cursor-default"
        ]),
        onClick: k
      }, [
        n.value ? G("", !0) : (w(), z("div", {
          key: 0,
          class: b([
            "absolute transition-colors duration-300",
            ((y = x(e)) == null ? void 0 : y.direction.value) === "vertical" ? "left-[15px] top-[30px] h-[calc(100%-10px)] w-[2px]" : "left-[50%] right-[-50%] top-[15px] h-[2px] w-full",
            f.value ? "bg-blue-500" : "bg-gray-200 dark:bg-gray-700"
          ])
        }, null, 2)),
        B("div", zd, [
          B("div", {
            class: b([
              "flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300",
              p.value
            ])
          }, [
            _(m.$slots, "icon", {}, () => [
              r.value === "finish" ? (w(), z("svg", Sd, d[0] || (d[0] = [
                B("path", {
                  "fill-rule": "evenodd",
                  d: "M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z",
                  "clip-rule": "evenodd"
                }, null, -1)
              ]))) : r.value === "error" ? (w(), z("svg", Bd, d[1] || (d[1] = [
                B("path", {
                  "fill-rule": "evenodd",
                  d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
                  "clip-rule": "evenodd"
                }, null, -1)
              ]))) : (w(), z("span", Vd, U(o.value + 1), 1))
            ])
          ], 2)
        ]),
        B("div", {
          class: b([
            "flex flex-col",
            ((u = x(e)) == null ? void 0 : u.direction.value) === "vertical" ? "ml-4 mt-0.5" : "absolute top-8 left-1/2 -translate-x-1/2 w-max max-w-[120px] text-center mt-2"
          ])
        }, [
          B("div", {
            class: b([
              "text-sm font-medium transition-colors duration-300",
              s.value || f.value ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400",
              r.value === "error" ? "text-red-500" : ""
            ])
          }, [
            _(m.$slots, "title", {}, () => [
              ce(U(m.title), 1)
            ])
          ], 2),
          m.description || m.$slots.description ? (w(), z("div", $d, [
            _(m.$slots, "description", {}, () => [
              ce(U(m.description), 1)
            ])
          ])) : G("", !0)
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
    const e = l, t = a, o = Be("radio-group", null), n = h(() => o ? o.modelValue.value === e.label : e.modelValue === e.label), r = h(() => (o == null ? void 0 : o.disabled.value) || !1 || e.disabled), f = h(() => (o == null ? void 0 : o.size.value) || e.size || "md"), s = h(() => {
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
    }), p = h(() => {
      switch (f.value) {
        case "sm":
          return "text-sm";
        case "lg":
          return "text-lg";
        default:
          return "text-base";
      }
    }), k = () => {
      if (r.value) return;
      const m = e.label ?? "";
      o ? o.changeEvent(m) : (t("update:modelValue", m), t("change", m));
    };
    return (m, d) => (w(), z("label", {
      class: b([
        "group relative inline-flex cursor-pointer items-center select-none",
        r.value ? "cursor-not-allowed opacity-50" : ""
      ])
    }, [
      B("input", {
        type: "radio",
        class: "peer sr-only",
        value: m.label,
        checked: n.value,
        disabled: r.value,
        onChange: k
      }, null, 40, Dd),
      B("div", {
        class: b([
          "relative flex items-center justify-center rounded-full border transition-all duration-200",
          s.value,
          n.value ? "border-blue-500 bg-blue-500" : "border-gray-300 bg-white group-hover:border-blue-500 dark:border-gray-600 dark:bg-gray-800"
        ])
      }, [
        B("div", {
          class: b([
            "rounded-full bg-white transition-transform duration-200",
            i.value,
            n.value ? "scale-100" : "scale-0"
          ])
        }, null, 2)
      ], 2),
      m.$slots.default || m.label ? (w(), z("span", {
        key: 0,
        class: b(["ml-2 text-gray-700 dark:text-gray-300", p.value])
      }, [
        _(m.$slots, "default", {}, () => [
          ce(U(m.label), 1)
        ])
      ], 2)) : G("", !0)
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
    const e = l, t = a, o = (n) => {
      t("update:modelValue", n), t("change", n);
    };
    return Ve("radio-group", {
      modelValue: xe(e, "modelValue"),
      disabled: xe(e, "disabled"),
      size: xe(e, "size"),
      changeEvent: o
    }), (n, r) => (w(), z("div", {
      class: b([
        "flex",
        n.direction === "vertical" ? "flex-col gap-2" : "flex-row gap-4"
      ]),
      role: "radiogroup",
      "aria-label": "radio-group"
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), dt = [
  sa,
  ma,
  Ca,
  Va,
  Ra,
  Na,
  qa,
  io,
  mo,
  So,
  Mo,
  Fo,
  Go,
  Zo,
  er,
  ar,
  sr,
  Ar,
  cr,
  fr,
  gr,
  Ur,
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
  rl,
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
  Td
], Ld = {
  install: (l) => {
    var a;
    for (const e in dt)
      l.component(((a = dt[e]) == null ? void 0 : a.name) || e, dt[e]);
  }
};
export {
  su as Accordion,
  iu as AccordionItem,
  Fo as Alert,
  Ca as Avatar,
  Va as Badge,
  rl as Breadcrumb,
  hi as BreadcrumbItem,
  Zo as Button,
  wt as Calendar,
  er as Card,
  sd as Carousel,
  cr as Checkbox,
  fr as CheckboxGroup,
  Mo as Chip,
  Rn as DatePicker,
  _n as DateTimePicker,
  ar as Divider,
  Na as Drawer,
  Bu as Dropdown,
  $u as DropdownDivider,
  Vu as DropdownItem,
  Yu as Image,
  gr as Input,
  sa as InputOtp,
  vu as InputTag,
  Go as Kbd,
  ed as Link,
  ma as Modal,
  Js as Paginator,
  Es as Panel,
  mo as Popover,
  si as Progress,
  Md as Radio,
  Td as RadioGroup,
  Yi as RangeCalendar,
  Ur as Rate,
  qa as Segmented,
  Ar as Select,
  fs as Skeleton,
  bs as SkeletonAvatar,
  ps as SkeletonText,
  io as Slider,
  Vi as Splitter,
  $i as SplitterPanel,
  Id as StepItem,
  Cd as Steps,
  Lu as Swap,
  Ra as Switch,
  Bs as TabItem,
  Ss as Tabs,
  sr as Textarea,
  al as TimePicker,
  as as TimeSelect,
  pd as Timeline,
  bd as TimelineItem,
  Ed as Toast,
  il as ToastContainer,
  So as Tooltip,
  Ld as Versakit
};
