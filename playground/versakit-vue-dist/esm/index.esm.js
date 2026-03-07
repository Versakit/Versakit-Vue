import { ref as H, nextTick as ve, defineComponent as J, computed as h, createElementBlock as z, openBlock as S, normalizeClass as g, Fragment as re, renderList as de, unref as y, withDirectives as Pe, vModelText as Et, watch as ee, onUnmounted as je, useSlots as We, onMounted as me, createBlock as Be, Teleport as Qe, createCommentVNode as N, createElementVNode as $, renderSlot as Y, toDisplayString as X, onBeforeUnmount as Ve, normalizeStyle as ue, createTextVNode as pe, resolveDynamicComponent as Ye, withModifiers as ke, withCtx as ft, createVNode as Ue, Transition as Lt, vShow as rt, provide as Re, inject as Ee, withKeys as xe, reactive as tl, vModelDynamic as ll, createStaticVNode as al, mergeProps as ol } from "vue";
const Q = (l, a) => {
  if (l.install = (t) => {
    for (const e of [l, ...Object.values(a ?? {})])
      t.component(e.name, e);
  }, a)
    for (const [t, e] of Object.entries(a))
      l[t] = e;
  return l;
};
function rl(l = 4) {
  const a = H(Array(l).fill("")), t = H([]);
  return {
    values: a,
    setRef: (r, b) => {
      r && (t.value[b] = r);
    },
    onInput: (r, b) => {
      const d = r.target.value.replace(/\D/g, "");
      a.value[b] = d.slice(0, 1), d && b < l - 1 && ve(() => {
        var p;
        (p = t.value[b + 1]) == null || p.focus();
      });
    },
    onKeydown: (r, b) => {
      r.key === "Backspace" && !a.value[b] && b > 0 && ve(() => {
        var n;
        (n = t.value[b - 1]) == null || n.focus();
      });
    }
  };
}
var $t = (l) => typeof l == "boolean" ? `${l}` : l === 0 ? "0" : l, we = (l) => !l || typeof l != "object" || Object.keys(l).length === 0, nl = (l, a) => JSON.stringify(l) === JSON.stringify(a);
function Ot(l, a) {
  l.forEach(function(t) {
    Array.isArray(t) ? Ot(t, a) : a.push(t);
  });
}
function At(l) {
  let a = [];
  return Ot(l, a), a;
}
var Pt = (...l) => At(l).filter(Boolean), jt = (l, a) => {
  let t = {}, e = Object.keys(l), o = Object.keys(a);
  for (let s of e) if (o.includes(s)) {
    let r = l[s], b = a[s];
    Array.isArray(r) || Array.isArray(b) ? t[s] = Pt(b, r) : typeof r == "object" && typeof b == "object" ? t[s] = jt(r, b) : t[s] = b + " " + r;
  } else t[s] = l[s];
  for (let s of o) e.includes(s) || (t[s] = a[s]);
  return t;
}, It = (l) => !l || typeof l != "string" ? l : l.replace(/\s+/g, " ").trim();
const pt = "-", sl = (l) => {
  const a = dl(l), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: e
  } = l;
  return {
    getClassGroupId: (r) => {
      const b = r.split(pt);
      return b[0] === "" && b.length !== 1 && b.shift(), Wt(b, a) || il(r);
    },
    getConflictingClassGroupIds: (r, b) => {
      const n = t[r] || [];
      return b && e[r] ? [...n, ...e[r]] : n;
    }
  };
}, Wt = (l, a) => {
  var r;
  if (l.length === 0)
    return a.classGroupId;
  const t = l[0], e = a.nextPart.get(t), o = e ? Wt(l.slice(1), e) : void 0;
  if (o)
    return o;
  if (a.validators.length === 0)
    return;
  const s = l.join(pt);
  return (r = a.validators.find(({
    validator: b
  }) => b(s))) == null ? void 0 : r.classGroupId;
}, Dt = /^\[(.+)\]$/, il = (l) => {
  if (Dt.test(l)) {
    const a = Dt.exec(l)[1], t = a == null ? void 0 : a.substring(0, a.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, dl = (l) => {
  const {
    theme: a,
    classGroups: t
  } = l, e = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in t)
    nt(t[o], e, o, a);
  return e;
}, nt = (l, a, t, e) => {
  l.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? a : Mt(a, o);
      s.classGroupId = t;
      return;
    }
    if (typeof o == "function") {
      if (ul(o)) {
        nt(o(e), a, t, e);
        return;
      }
      a.validators.push({
        validator: o,
        classGroupId: t
      });
      return;
    }
    Object.entries(o).forEach(([s, r]) => {
      nt(r, Mt(a, s), t, e);
    });
  });
}, Mt = (l, a) => {
  let t = l;
  return a.split(pt).forEach((e) => {
    t.nextPart.has(e) || t.nextPart.set(e, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(e);
  }), t;
}, ul = (l) => l.isThemeGetter, cl = (l) => {
  if (l < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let a = 0, t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
  const o = (s, r) => {
    t.set(s, r), a++, a > l && (a = 0, e = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let r = t.get(s);
      if (r !== void 0)
        return r;
      if ((r = e.get(s)) !== void 0)
        return o(s, r), r;
    },
    set(s, r) {
      t.has(s) ? t.set(s, r) : o(s, r);
    }
  };
}, st = "!", it = ":", fl = it.length, pl = (l) => {
  const {
    prefix: a,
    experimentalParseClassName: t
  } = l;
  let e = (o) => {
    const s = [];
    let r = 0, b = 0, n = 0, d;
    for (let v = 0; v < o.length; v++) {
      let w = o[v];
      if (r === 0 && b === 0) {
        if (w === it) {
          s.push(o.slice(n, v)), n = v + fl;
          continue;
        }
        if (w === "/") {
          d = v;
          continue;
        }
      }
      w === "[" ? r++ : w === "]" ? r-- : w === "(" ? b++ : w === ")" && b--;
    }
    const p = s.length === 0 ? o : o.substring(n), C = bl(p), m = C !== p, i = d && d > n ? d - n : void 0;
    return {
      modifiers: s,
      hasImportantModifier: m,
      baseClassName: C,
      maybePostfixModifierPosition: i
    };
  };
  if (a) {
    const o = a + it, s = e;
    e = (r) => r.startsWith(o) ? s(r.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: r,
      maybePostfixModifierPosition: void 0
    };
  }
  if (t) {
    const o = e;
    e = (s) => t({
      className: s,
      parseClassName: o
    });
  }
  return e;
}, bl = (l) => l.endsWith(st) ? l.substring(0, l.length - 1) : l.startsWith(st) ? l.substring(1) : l, gl = (l) => {
  const a = Object.fromEntries(l.orderSensitiveModifiers.map((e) => [e, !0]));
  return (e) => {
    if (e.length <= 1)
      return e;
    const o = [];
    let s = [];
    return e.forEach((r) => {
      r[0] === "[" || a[r] ? (o.push(...s.sort(), r), s = []) : s.push(r);
    }), o.push(...s.sort()), o;
  };
}, vl = (l) => ({
  cache: cl(l.cacheSize),
  parseClassName: pl(l),
  sortModifiers: gl(l),
  ...sl(l)
}), ml = /\s+/, yl = (l, a) => {
  const {
    parseClassName: t,
    getClassGroupId: e,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = a, r = [], b = l.trim().split(ml);
  let n = "";
  for (let d = b.length - 1; d >= 0; d -= 1) {
    const p = b[d], {
      isExternal: C,
      modifiers: m,
      hasImportantModifier: i,
      baseClassName: v,
      maybePostfixModifierPosition: w
    } = t(p);
    if (C) {
      n = p + (n.length > 0 ? " " + n : n);
      continue;
    }
    let c = !!w, u = e(c ? v.substring(0, w) : v);
    if (!u) {
      if (!c) {
        n = p + (n.length > 0 ? " " + n : n);
        continue;
      }
      if (u = e(v), !u) {
        n = p + (n.length > 0 ? " " + n : n);
        continue;
      }
      c = !1;
    }
    const f = s(m).join(":"), x = i ? f + st : f, D = x + u;
    if (r.includes(D))
      continue;
    r.push(D);
    const M = o(u, c);
    for (let B = 0; B < M.length; ++B) {
      const T = M[B];
      r.push(x + T);
    }
    n = p + (n.length > 0 ? " " + n : n);
  }
  return n;
};
function hl() {
  let l = 0, a, t, e = "";
  for (; l < arguments.length; )
    (a = arguments[l++]) && (t = Ft(a)) && (e && (e += " "), e += t);
  return e;
}
const Ft = (l) => {
  if (typeof l == "string")
    return l;
  let a, t = "";
  for (let e = 0; e < l.length; e++)
    l[e] && (a = Ft(l[e])) && (t && (t += " "), t += a);
  return t;
};
function dt(l, ...a) {
  let t, e, o, s = r;
  function r(n) {
    const d = a.reduce((p, C) => C(p), l());
    return t = vl(d), e = t.cache.get, o = t.cache.set, s = b, b(n);
  }
  function b(n) {
    const d = e(n);
    if (d)
      return d;
    const p = yl(n, t);
    return o(n, p), p;
  }
  return function() {
    return s(hl.apply(null, arguments));
  };
}
const be = (l) => {
  const a = (t) => t[l] || [];
  return a.isThemeGetter = !0, a;
}, Ht = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Gt = /^\((?:(\w[\w-]*):)?(.+)\)$/i, wl = /^\d+\/\d+$/, xl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, kl = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Cl = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Sl = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, zl = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ae = (l) => wl.test(l), ae = (l) => !!l && !Number.isNaN(Number(l)), Ie = (l) => !!l && Number.isInteger(Number(l)), Tt = (l) => l.endsWith("%") && ae(l.slice(0, -1)), $e = (l) => xl.test(l), Bl = () => !0, Vl = (l) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  kl.test(l) && !Cl.test(l)
), bt = () => !1, $l = (l) => Sl.test(l), Il = (l) => zl.test(l), Dl = (l) => !_(l) && !q(l), Ml = (l) => Fe(l, Yt, bt), _ = (l) => Ht.test(l), De = (l) => Fe(l, Ut, Vl), et = (l) => Fe(l, Hl, ae), Tl = (l) => Fe(l, Nt, bt), Rl = (l) => Fe(l, Kt, Il), El = (l) => Fe(l, bt, $l), q = (l) => Gt.test(l), _e = (l) => He(l, Ut), Ll = (l) => He(l, Gl), Ol = (l) => He(l, Nt), Al = (l) => He(l, Yt), Pl = (l) => He(l, Kt), jl = (l) => He(l, Nl, !0), Fe = (l, a, t) => {
  const e = Ht.exec(l);
  return e ? e[1] ? a(e[1]) : t(e[2]) : !1;
}, He = (l, a, t = !1) => {
  const e = Gt.exec(l);
  return e ? e[1] ? a(e[1]) : t : !1;
}, Nt = (l) => l === "position", Wl = /* @__PURE__ */ new Set(["image", "url"]), Kt = (l) => Wl.has(l), Fl = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Yt = (l) => Fl.has(l), Ut = (l) => l === "length", Hl = (l) => l === "number", Gl = (l) => l === "family-name", Nl = (l) => l === "shadow", ut = () => {
  const l = be("color"), a = be("font"), t = be("text"), e = be("font-weight"), o = be("tracking"), s = be("leading"), r = be("breakpoint"), b = be("container"), n = be("spacing"), d = be("radius"), p = be("shadow"), C = be("inset-shadow"), m = be("drop-shadow"), i = be("blur"), v = be("perspective"), w = be("aspect"), c = be("ease"), u = be("animate"), f = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], x = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], D = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", "contain", "none"], B = () => [q, _, n], T = () => [Ae, "full", "auto", ...B()], V = () => [Ie, "none", "subgrid", q, _], A = () => ["auto", {
    span: ["full", Ie, q, _]
  }, q, _], O = () => [Ie, "auto", q, _], L = () => ["auto", "min", "max", "fr", q, _], P = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], W = () => ["start", "end", "center", "stretch"], k = () => ["auto", ...B()], E = () => [Ae, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...B()], I = () => [l, q, _], G = () => [Tt, De], j = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    q,
    _
  ], K = () => ["", ae, _e, De], U = () => ["solid", "dashed", "dotted", "double"], oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], F = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    i,
    q,
    _
  ], Z = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", q, _], le = () => ["none", ae, q, _], te = () => ["none", ae, q, _], ne = () => [ae, q, _], ie = () => [Ae, "full", ...B()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [$e],
      breakpoint: [$e],
      color: [Bl],
      container: [$e],
      "drop-shadow": [$e],
      ease: ["in", "out", "in-out"],
      font: [Dl],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [$e],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [$e],
      shadow: [$e],
      spacing: ["px", ae],
      text: [$e],
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
        aspect: ["auto", "square", Ae, _, q, w]
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
        columns: [ae, _, q, b]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": f()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": f()
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
        object: [...x(), _, q]
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
        z: [Ie, "auto", q, _]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ae, "full", "auto", b, ...B()]
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
        flex: [ae, Ae, "auto", "initial", "none", _]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ae, q, _]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ae, q, _]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ie, "first", "last", "none", q, _]
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
        col: A()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": O()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": O()
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
        row: A()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": O()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": O()
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
        justify: [...P(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...W(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...W()]
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
        items: [...W(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...W(), "baseline"]
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
        "place-items": [...W(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...W()]
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
        m: k()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: k()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: k()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: k()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: k()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: k()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: k()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: k()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: k()
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
        size: E()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [b, "screen", ...E()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          b,
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
          b,
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
        text: ["base", t, _e, De]
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
        font: [e, q, et]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Tt, _]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ll, _, a]
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
        tracking: [o, q, _]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ae, "none", q, et]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...B()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", q, _]
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
        list: ["disc", "decimal", "none", q, _]
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
        decoration: [...U(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ae, "from-font", "auto", q, De]
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
        "underline-offset": [ae, "auto", q, _]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", q, _]
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
        content: ["none", q, _]
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
        bg: [...x(), Ol, Tl]
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
        bg: ["auto", "cover", "contain", Al, Ml]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Ie, q, _],
          radial: ["", q, _],
          conic: [Ie, q, _]
        }, Pl, Rl]
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
        outline: [...U(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ae, q, _]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ae, _e, De]
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
          jl,
          El
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
        "inset-shadow": ["none", q, _, C]
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
        "ring-offset": [ae, De]
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
        opacity: [ae, q, _]
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
          _
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: F()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ae, q, _]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ae, q, _]
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
          _
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ae, q, _]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ae, q, _]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ae, q, _]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ae, q, _]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ae, q, _]
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
          _
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": F()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ae, q, _]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ae, q, _]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ae, q, _]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ae, q, _]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ae, q, _]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ae, q, _]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ae, q, _]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ae, q, _]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", q, _]
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
        duration: [ae, "initial", q, _]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", c, q, _]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ae, q, _]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", u, q, _]
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
        perspective: [v, q, _]
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
        transform: [q, _, "", "none", "gpu", "cpu"]
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
        translate: ie()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ie()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ie()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ie()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", q, _]
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
        "will-change": ["auto", "scroll", "contents", "transform", q, _]
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
        stroke: [ae, _e, De, et]
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
}, Kl = (l, {
  cacheSize: a,
  prefix: t,
  experimentalParseClassName: e,
  extend: o = {},
  override: s = {}
}) => (Ke(l, "cacheSize", a), Ke(l, "prefix", t), Ke(l, "experimentalParseClassName", e), qe(l.theme, s.theme), qe(l.classGroups, s.classGroups), qe(l.conflictingClassGroups, s.conflictingClassGroups), qe(l.conflictingClassGroupModifiers, s.conflictingClassGroupModifiers), Ke(l, "orderSensitiveModifiers", s.orderSensitiveModifiers), Ze(l.theme, o.theme), Ze(l.classGroups, o.classGroups), Ze(l.conflictingClassGroups, o.conflictingClassGroups), Ze(l.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), Xt(l, o, "orderSensitiveModifiers"), l), Ke = (l, a, t) => {
  t !== void 0 && (l[a] = t);
}, qe = (l, a) => {
  if (a)
    for (const t in a)
      Ke(l, t, a[t]);
}, Ze = (l, a) => {
  if (a)
    for (const t in a)
      Xt(l, a, t);
}, Xt = (l, a, t) => {
  const e = a[t];
  e !== void 0 && (l[t] = l[t] ? l[t].concat(e) : e);
}, Yl = (l, ...a) => typeof l == "function" ? dt(ut, l, ...a) : dt(() => Kl(ut(), l), ...a), Ul = /* @__PURE__ */ dt(ut);
var Xl = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, _t = (l) => l || void 0, Xe = (...l) => _t(At(l).filter(Boolean).join(" ")), tt = null, ze = {}, ct = !1, Ge = (...l) => (a) => a.twMerge ? ((!tt || ct) && (ct = !1, tt = we(ze) ? Ul : Yl({ ...ze, extend: { theme: ze.theme, classGroups: ze.classGroups, conflictingClassGroupModifiers: ze.conflictingClassGroupModifiers, conflictingClassGroups: ze.conflictingClassGroups, ...ze.extend } })), _t(tt(Xe(l)))) : Xe(l), Rt = (l, a) => {
  for (let t in a) l.hasOwnProperty(t) ? l[t] = Xe(l[t], a[t]) : l[t] = a[t];
  return l;
}, R = (l, a) => {
  let { extend: t = null, slots: e = {}, variants: o = {}, compoundVariants: s = [], compoundSlots: r = [], defaultVariants: b = {} } = l, n = { ...Xl, ...a }, d = t != null && t.base ? Xe(t.base, l == null ? void 0 : l.base) : l == null ? void 0 : l.base, p = t != null && t.variants && !we(t.variants) ? jt(o, t.variants) : o, C = t != null && t.defaultVariants && !we(t.defaultVariants) ? { ...t.defaultVariants, ...b } : b;
  !we(n.twMergeConfig) && !nl(n.twMergeConfig, ze) && (ct = !0, ze = n.twMergeConfig);
  let m = we(t == null ? void 0 : t.slots), i = we(e) ? {} : { base: Xe(l == null ? void 0 : l.base, m && (t == null ? void 0 : t.base)), ...e }, v = m ? i : Rt({ ...t == null ? void 0 : t.slots }, we(i) ? { base: l == null ? void 0 : l.base } : i), w = we(t == null ? void 0 : t.compoundVariants) ? s : Pt(t == null ? void 0 : t.compoundVariants, s), c = (f) => {
    if (we(p) && we(e) && m) return Ge(d, f == null ? void 0 : f.class, f == null ? void 0 : f.className)(n);
    if (w && !Array.isArray(w)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof w}`);
    if (r && !Array.isArray(r)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof r}`);
    let x = (P, W, k = [], E) => {
      let I = k;
      if (typeof W == "string") I = I.concat(It(W).split(" ").map((G) => `${P}:${G}`));
      else if (Array.isArray(W)) I = I.concat(W.reduce((G, j) => G.concat(`${P}:${j}`), []));
      else if (typeof W == "object" && typeof E == "string") {
        for (let G in W) if (W.hasOwnProperty(G) && G === E) {
          let j = W[G];
          if (j && typeof j == "string") {
            let K = It(j);
            I[E] ? I[E] = I[E].concat(K.split(" ").map((U) => `${P}:${U}`)) : I[E] = K.split(" ").map((U) => `${P}:${U}`);
          } else Array.isArray(j) && j.length > 0 && (I[E] = j.reduce((K, U) => K.concat(`${P}:${U}`), []));
        }
      }
      return I;
    }, D = (P, W = p, k = null, E = null) => {
      var I;
      let G = W[P];
      if (!G || we(G)) return null;
      let j = (I = E == null ? void 0 : E[P]) != null ? I : f == null ? void 0 : f[P];
      if (j === null) return null;
      let K = $t(j), U = Array.isArray(n.responsiveVariants) && n.responsiveVariants.length > 0 || n.responsiveVariants === !0, oe = C == null ? void 0 : C[P], F = [];
      if (typeof K == "object" && U) for (let [te, ne] of Object.entries(K)) {
        let ie = G[ne];
        if (te === "initial") {
          oe = ne;
          continue;
        }
        Array.isArray(n.responsiveVariants) && !n.responsiveVariants.includes(te) || (F = x(te, ie, F, k));
      }
      let Z = K != null && typeof K != "object" ? K : $t(oe), le = G[Z || "false"];
      return typeof F == "object" && typeof k == "string" && F[k] ? Rt(F, le) : F.length > 0 ? (F.push(le), k === "base" ? F.join(" ") : F) : le;
    }, M = () => p ? Object.keys(p).map((P) => D(P, p)) : null, B = (P, W) => {
      if (!p || typeof p != "object") return null;
      let k = new Array();
      for (let E in p) {
        let I = D(E, p, P, W), G = P === "base" && typeof I == "string" ? I : I && I[P];
        G && (k[k.length] = G);
      }
      return k;
    }, T = {};
    for (let P in f) f[P] !== void 0 && (T[P] = f[P]);
    let V = (P, W) => {
      var k;
      let E = typeof (f == null ? void 0 : f[P]) == "object" ? { [P]: (k = f[P]) == null ? void 0 : k.initial } : {};
      return { ...C, ...T, ...E, ...W };
    }, A = (P = [], W) => {
      let k = [];
      for (let { class: E, className: I, ...G } of P) {
        let j = !0;
        for (let [K, U] of Object.entries(G)) {
          let oe = V(K, W)[K];
          if (Array.isArray(U)) {
            if (!U.includes(oe)) {
              j = !1;
              break;
            }
          } else {
            let F = (Z) => Z == null || Z === !1;
            if (F(U) && F(oe)) continue;
            if (oe !== U) {
              j = !1;
              break;
            }
          }
        }
        j && (E && k.push(E), I && k.push(I));
      }
      return k;
    }, O = (P) => {
      let W = A(w, P);
      if (!Array.isArray(W)) return W;
      let k = {};
      for (let E of W) if (typeof E == "string" && (k.base = Ge(k.base, E)(n)), typeof E == "object") for (let [I, G] of Object.entries(E)) k[I] = Ge(k[I], G)(n);
      return k;
    }, L = (P) => {
      if (r.length < 1) return null;
      let W = {};
      for (let { slots: k = [], class: E, className: I, ...G } of r) {
        if (!we(G)) {
          let j = !0;
          for (let K of Object.keys(G)) {
            let U = V(K, P)[K];
            if (U === void 0 || (Array.isArray(G[K]) ? !G[K].includes(U) : G[K] !== U)) {
              j = !1;
              break;
            }
          }
          if (!j) continue;
        }
        for (let j of k) W[j] = W[j] || [], W[j].push([E, I]);
      }
      return W;
    };
    if (!we(e) || !m) {
      let P = {};
      if (typeof v == "object" && !we(v)) for (let W of Object.keys(v)) P[W] = (k) => {
        var E, I;
        return Ge(v[W], B(W, k), ((E = O(k)) != null ? E : [])[W], ((I = L(k)) != null ? I : [])[W], k == null ? void 0 : k.class, k == null ? void 0 : k.className)(n);
      };
      return P;
    }
    return Ge(d, M(), A(w), f == null ? void 0 : f.class, f == null ? void 0 : f.className)(n);
  }, u = () => {
    if (!(!p || typeof p != "object")) return Object.keys(p);
  };
  return c.variantKeys = u(), c.extend = t, c.base = d, c.slots = v, c.variants = p, c.defaultVariants = C, c.compoundSlots = r, c.compoundVariants = w, c;
};
const _l = R({
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
}), ql = ["onUpdate:modelValue", "onInput", "onKeydown"], Zl = /* @__PURE__ */ J({
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
    const a = l, { values: t, setRef: e, onInput: o, onKeydown: s } = rl(a.length ?? 4), r = h(() => {
      var n, d;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.container) || "flex gap-2" : (d = a.pt) != null && d.container ? `flex gap-2 ${a.pt.container}` : "flex gap-2";
    }), b = h(() => {
      var n, d;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.input) || "" : _l({
        state: a.state,
        size: a.size,
        class: (d = a.pt) == null ? void 0 : d.input
      });
    });
    return (n, d) => (S(), z("div", {
      class: g(r.value)
    }, [
      (S(!0), z(re, null, de(y(t).length, (p, C) => Pe((S(), z("input", {
        key: C,
        "onUpdate:modelValue": (m) => y(t)[C] = m,
        ref_for: !0,
        ref: (m) => y(e)(m, C),
        class: g(b.value),
        maxlength: "1",
        onInput: (m) => y(o)(m, C),
        onKeydown: (m) => y(s)(m, C),
        type: "text",
        inputmode: "numeric",
        autocomplete: "one-time-code"
      }, null, 42, ql)), [
        [Et, y(t)[C]]
      ])), 128))
    ], 2));
  }
}), Jl = Q(Zl);
function Ql(l) {
  const a = H(!1), t = (l == null ? void 0 : l.closeOnEsc) ?? !0, e = (l == null ? void 0 : l.closeOnOverlayClick) ?? !0, o = () => {
    a.value = !0;
  }, s = () => {
    var p;
    a.value = !1, (p = l == null ? void 0 : l.onClose) == null || p.call(l);
  }, r = H(null), b = H(null), n = (p) => {
    p.key === "Escape" && t && s();
  };
  return ee(a, (p) => {
    p ? (document.addEventListener("keydown", n), document.body.style.overflow = "hidden") : (document.removeEventListener("keydown", n), document.body.style.overflow = "");
  }), je(() => {
    document.removeEventListener("keydown", n), document.body.style.overflow = "";
  }), {
    isOpen: a,
    open: o,
    close: s,
    modalRef: r,
    overlayRef: b,
    onOverlayClick: (p) => {
      p.target === b.value && e && s();
    }
  };
}
const ea = R({
  base: "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center"
}), ta = R({
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
}), la = R({
  base: "px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between"
}), aa = R({
  base: "text-lg font-medium text-gray-900 dark:text-white"
}), oa = R({
  base: "p-6 flex-1 overflow-y-auto"
}), ra = R({
  base: "px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-2"
}), na = R({
  base: "absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
}), sa = /* @__PURE__ */ J({
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
    const t = l, e = a, o = We(), { isOpen: s, open: r, close: b, modalRef: n, overlayRef: d, onOverlayClick: p } = Ql({
      onClose: () => {
        e("close"), e("update:modelValue", !1);
      },
      closeOnEsc: t.closeOnEsc,
      closeOnOverlayClick: t.closeOnOverlayClick
    });
    me(async () => {
      await ve(), t.modelValue && r();
    }), ee(
      () => t.modelValue,
      (M) => {
        M && !s.value ? r() : !M && s.value && b();
      }
    ), ee(s, (M) => {
      M !== t.modelValue && e("update:modelValue", M);
    });
    const C = () => {
      b();
    }, m = h(() => !!t.title || !!o.header), i = h(() => !!o.footer), v = h(() => {
      var M, B;
      return t.unstyled ? [(M = t.pt) == null ? void 0 : M.overlay, t.class].filter(Boolean) : [ea({ class: (B = t.pt) == null ? void 0 : B.overlay }), t.class];
    }), w = h(() => {
      var M, B;
      return t.unstyled ? [(M = t.pt) == null ? void 0 : M.content, t.contentClass].filter(Boolean) : [
        ta({
          size: t.size,
          class: (B = t.pt) == null ? void 0 : B.content
        }),
        t.contentClass
      ];
    }), c = h(() => {
      var M, B;
      return t.unstyled ? [(M = t.pt) == null ? void 0 : M.header, t.headerClass].filter(Boolean) : [la({ class: (B = t.pt) == null ? void 0 : B.header }), t.headerClass];
    }), u = h(() => {
      var M, B;
      return t.unstyled ? ((M = t.pt) == null ? void 0 : M.title) || "" : aa({ class: (B = t.pt) == null ? void 0 : B.title });
    }), f = h(() => {
      var M, B;
      return t.unstyled ? [(M = t.pt) == null ? void 0 : M.body, t.bodyClass].filter(Boolean) : [oa({ class: (B = t.pt) == null ? void 0 : B.body }), t.bodyClass];
    }), x = h(() => {
      var M, B;
      return t.unstyled ? [(M = t.pt) == null ? void 0 : M.footer, t.footerClass].filter(Boolean) : [ra({ class: (B = t.pt) == null ? void 0 : B.footer }), t.footerClass];
    }), D = h(() => {
      var M, B;
      return t.unstyled ? ((M = t.pt) == null ? void 0 : M.closeButton) || "" : na({ class: (B = t.pt) == null ? void 0 : B.closeButton });
    });
    return (M, B) => (S(), Be(Qe, { to: "body" }, [
      y(s) ? (S(), z("div", {
        key: 0,
        class: g(v.value),
        ref_key: "overlayRef",
        ref: d,
        onClick: B[0] || (B[0] = //@ts-ignore
        (...T) => y(p) && y(p)(...T))
      }, [
        $("div", {
          class: g(w.value),
          ref_key: "modalRef",
          ref: n,
          role: "dialog",
          "aria-modal": "true",
          tabindex: "-1"
        }, [
          m.value ? (S(), z("div", {
            key: 0,
            class: g(c.value)
          }, [
            Y(M.$slots, "header", {}, () => [
              $("h3", {
                class: g(u.value)
              }, X(t.title), 3)
            ]),
            M.hideCloseButton ? N("", !0) : (S(), z("button", {
              key: 0,
              class: g(D.value),
              onClick: C,
              "aria-label": "关闭"
            }, [
              Y(M.$slots, "close-icon", {}, () => [
                B[1] || (B[1] = $("svg", {
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
              ])
            ], 2))
          ], 2)) : N("", !0),
          $("div", {
            class: g(f.value)
          }, [
            Y(M.$slots, "default")
          ], 2),
          i.value ? (S(), z("div", {
            key: 1,
            class: g(x.value)
          }, [
            Y(M.$slots, "footer")
          ], 2)) : N("", !0)
        ], 2)
      ], 2)) : N("", !0)
    ]));
  }
}), ia = Q(sa);
function da() {
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
const ua = R({
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
}), ca = ["src", "alt"], fa = ["src", "alt"], pa = /* @__PURE__ */ J({
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
    const a = l, { isError: t, onLoad: e, onError: o } = da(), s = h(() => {
      var m, i;
      return a.unstyled ? ((m = a.pt) == null ? void 0 : m.root) || "" : ua({
        size: a.size,
        shape: a.shape,
        status: a.status,
        class: (i = a.pt) == null ? void 0 : i.root
      });
    }), r = h(() => {
      var m;
      return a.unstyled ? ((m = a.pt) == null ? void 0 : m.image) || "" : "w-full h-full object-cover";
    }), b = h(() => {
      var m;
      return a.unstyled ? ((m = a.pt) == null ? void 0 : m.fallback) || "" : "w-full h-full flex items-center justify-center";
    }), n = h(() => {
      var m;
      return a.unstyled ? ((m = a.pt) == null ? void 0 : m.initials) || "" : "w-full h-full flex items-center justify-center";
    }), d = h(() => {
      var m;
      return a.unstyled ? ((m = a.pt) == null ? void 0 : m.icon) || "" : "w-1/2 h-1/2";
    }), p = h(() => a.alt ? a.alt.split(" ").map((m) => m.charAt(0)).slice(0, 2).join("").toUpperCase() : ""), C = h(() => !a.src || t.value);
    return (m, i) => (S(), z("div", {
      class: g(s.value)
    }, [
      C.value ? m.fallback ? (S(), z("span", {
        key: 1,
        class: g(b.value)
      }, [
        $("img", {
          src: m.fallback,
          alt: m.alt,
          class: g(r.value)
        }, null, 10, fa)
      ], 2)) : m.alt ? (S(), z("span", {
        key: 2,
        class: g(n.value)
      }, X(p.value), 3)) : (S(), z("span", {
        key: 3,
        class: g(b.value)
      }, [
        (S(), z("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          class: g(d.value)
        }, i[2] || (i[2] = [
          $("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }, null, -1),
          $("circle", {
            cx: "12",
            cy: "7",
            r: "4"
          }, null, -1)
        ]), 2))
      ], 2)) : (S(), z("img", {
        key: 0,
        src: m.src,
        alt: m.alt,
        class: g(r.value),
        onLoad: i[0] || (i[0] = //@ts-ignore
        (...v) => y(e) && y(e)(...v)),
        onError: i[1] || (i[1] = //@ts-ignore
        (...v) => y(o) && y(o)(...v))
      }, null, 42, ca))
    ], 2));
  }
}), ba = Q(pa);
function ga(l) {
  const a = h(() => l.dot ? l.show !== !1 : l.show !== !1 && l.content !== void 0 && l.content !== ""), t = h(() => {
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
    positionClass: t
  };
}
const va = R({
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
}), ma = /* @__PURE__ */ J({
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
    const a = l, { visible: t, positionClass: e } = ga(a), o = h(() => {
      var b;
      return a.unstyled ? ((b = a.pt) == null ? void 0 : b.root) || "" : "relative inline-block";
    }), s = h(() => {
      var b, n;
      return a.unstyled ? ((b = a.pt) == null ? void 0 : b.badge) || "" : va({
        color: a.color,
        size: a.size,
        dot: a.dot,
        class: [e.value, (n = a.pt) == null ? void 0 : n.badge]
      });
    }), r = h(() => a.dot ? "" : typeof a.content == "number" && a.max && a.content > a.max ? `${a.max}+` : a.content);
    return (b, n) => (S(), z("div", {
      class: g(o.value)
    }, [
      Y(b.$slots, "default"),
      y(t) ? (S(), z("span", {
        key: 0,
        class: g(s.value),
        role: "status",
        "aria-live": "polite"
      }, X(r.value), 3)) : N("", !0)
    ], 2));
  }
}), ya = Q(ma);
function ha(l) {
  const a = H(l.modelValue ?? !1), t = () => {
    var o;
    l.disabled || (a.value = !a.value, (o = l.onChange) == null || o.call(l, a.value));
  };
  return ee(
    () => l.modelValue,
    (o) => {
      o !== void 0 && (a.value = o);
    }
  ), {
    checked: h(() => !!a.value),
    disabled: h(() => !!l.disabled),
    toggle: t,
    onKeyDown: (o) => {
      (o.key === "Enter" || o.key === " ") && (o.preventDefault(), t());
    }
  };
}
const wa = R({
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
}), xa = ["aria-checked", "disabled"], ka = /* @__PURE__ */ J({
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
    const t = l, e = a, { checked: o, toggle: s, onKeyDown: r } = ha({
      modelValue: t.modelValue,
      disabled: t.disabled,
      onChange: (c) => e("update:modelValue", c)
    }), b = H(!1);
    ee(o, (c) => {
      c && (b.value = !0, setTimeout(() => {
        b.value = !1;
      }, 500));
    });
    const n = () => {
      if (!o.value) return "";
      switch (t.size) {
        case "small":
          return "translate-x-3";
        case "large":
          return "translate-x-5";
        default:
          return "translate-x-4";
      }
    }, d = () => {
      if (!o.value)
        return "bg-gray-300 dark:bg-gray-600";
      const c = {
        blue: "bg-blue-600 dark:bg-blue-500",
        green: "bg-green-600 dark:bg-green-500",
        red: "bg-red-600 dark:bg-red-500",
        yellow: "bg-yellow-600 dark:bg-yellow-500",
        purple: "bg-purple-600 dark:bg-purple-500"
      };
      return c[t.color] || c.blue;
    }, p = () => {
      const c = {
        blue: "bg-blue-400/10",
        green: "bg-green-400/10",
        red: "bg-red-400/10",
        yellow: "bg-yellow-400/10",
        purple: "bg-purple-400/10"
      };
      return c[t.color] || c.blue;
    }, C = h(
      () => wa({
        checked: o.value,
        disabled: t.disabled,
        size: t.size,
        color: t.color
      })
    ), m = h(() => {
      var c, u;
      return t.unstyled ? ((c = t.pt) == null ? void 0 : c.root) || "" : C.value.root({ class: (u = t.pt) == null ? void 0 : u.root });
    }), i = h(() => {
      var c, u;
      return t.unstyled ? ((c = t.pt) == null ? void 0 : c.track) || "" : d() + ((u = t.pt) != null && u.track ? ` ${t.pt.track}` : "");
    }), v = h(() => {
      var c, u;
      return t.unstyled ? ((c = t.pt) == null ? void 0 : c.thumb) || "" : C.value.thumb({ class: (u = t.pt) == null ? void 0 : u.thumb });
    }), w = h(() => {
      var c, u;
      return t.unstyled ? ((c = t.pt) == null ? void 0 : c.ripple) || "" : p() + ((u = t.pt) != null && u.ripple ? ` ${t.pt.ripple}` : "");
    });
    return (c, u) => (S(), z("button", {
      type: "button",
      role: "switch",
      "aria-checked": y(o),
      disabled: t.disabled,
      onClick: u[0] || (u[0] = //@ts-ignore
      (...f) => y(s) && y(s)(...f)),
      onKeydown: u[1] || (u[1] = //@ts-ignore
      (...f) => y(r) && y(r)(...f)),
      class: g(m.value)
    }, [
      $("span", {
        class: g([
          i.value,
          "absolute inset-0 rounded-full transition-colors duration-300 ease-in-out"
        ])
      }, null, 2),
      $("span", {
        class: g([
          v.value,
          "transform transition-all duration-300 ease-in-out",
          n()
        ])
      }, [
        y(o) ? (S(), z("span", {
          key: 0,
          class: g(["absolute inset-0 bg-white rounded-full transition-all duration-300", {
            "opacity-100 scale-100": y(o),
            "opacity-0 scale-0": !y(o)
          }])
        }, null, 2)) : N("", !0)
      ], 2),
      $("span", {
        class: g(["absolute inset-0 transition-opacity duration-300", { "opacity-0": !y(o), "opacity-100": y(o) }])
      }, [
        $("span", {
          class: g(["absolute inset-0 rounded-full transform transition-transform duration-500", [
            w.value,
            { "scale-100": b.value, "scale-0": !b.value }
          ]])
        }, null, 2)
      ], 2)
    ], 42, xa));
  }
}), qt = (l, a) => {
  const t = l.__vccOpts || l;
  for (const [e, o] of a)
    t[e] = o;
  return t;
}, Ca = /* @__PURE__ */ qt(ka, [["__scopeId", "data-v-dec8aa04"]]), Sa = Q(Ca);
function za(l) {
  const a = H(!1), t = (l == null ? void 0 : l.closeOnEsc) ?? !0, e = (l == null ? void 0 : l.closeOnOverlayClick) ?? !0, o = () => {
    var p;
    a.value = !0, (p = l == null ? void 0 : l.onOpen) == null || p.call(l);
  }, s = () => {
    var p;
    a.value = !1, (p = l == null ? void 0 : l.onClose) == null || p.call(l);
  }, r = H(null), b = H(null), n = (p) => {
    p.key === "Escape" && t && s();
  }, d = (p) => {
    p.target === b.value && e && s();
  };
  return ee(a, (p) => {
    p ? document.addEventListener("keydown", n) : document.removeEventListener("keydown", n);
  }), je(() => {
    document.removeEventListener("keydown", n);
  }), {
    isOpen: a,
    open: o,
    close: s,
    overlayRef: b,
    drawerRef: r,
    onOverlayClick: d
  };
}
const Ba = R({
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
}), Va = R({
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
}), $a = R({
  base: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700"
}), Ia = R({
  base: "text-lg font-medium text-gray-900 dark:text-white"
}), Da = R({
  base: "p-1 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
}), Ma = R({
  base: "flex-1 p-4 overflow-y-auto"
}), Ta = R({
  base: "flex justify-end gap-2 p-4 border-t border-gray-200 dark:border-gray-700"
}), Ra = ["aria-hidden", "aria-labelledby"], Ea = /* @__PURE__ */ J({
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
    const t = l, e = a, o = We(), { isOpen: s, close: r, open: b, drawerRef: n, overlayRef: d, onOverlayClick: p } = za({
      onClose: () => {
        e("update:modelValue", !1), e("close");
      },
      onOpen: () => {
        e("open");
      },
      closeOnEsc: t.closeOnEsc,
      closeOnOverlayClick: t.closeOnOverlayClick
    });
    ee(
      () => t.modelValue,
      (T) => {
        T && !s.value ? b() : !T && s.value && r();
      },
      { immediate: !0 }
    ), ee(s, (T) => {
      T !== t.modelValue && e("update:modelValue", T);
    });
    const C = H("");
    ee(s, (T) => {
      t.preventScroll && (T ? (C.value = document.body.style.overflow, document.body.style.overflow = "hidden") : document.body.style.overflow = C.value);
    }), Ve(() => {
      t.preventScroll && s.value && (document.body.style.overflow = C.value);
    });
    const m = h(() => {
      var T, V;
      return t.unstyled ? [(T = t.pt) == null ? void 0 : T.overlay, t.overlayClass].filter(Boolean) : [
        Ba({
          open: s.value,
          class: (V = t.pt) == null ? void 0 : V.overlay
        }),
        t.overlayClass
      ];
    }), i = h(() => {
      var T, V;
      return t.unstyled ? [(T = t.pt) == null ? void 0 : T.container, t.contentClass, t.class].filter(
        Boolean
      ) : [
        Va({
          placement: t.placement,
          open: s.value,
          class: (V = t.pt) == null ? void 0 : V.container
        }),
        t.contentClass,
        t.class
      ];
    }), v = h(() => {
      const T = {
        zIndex: t.zIndex.toString()
      };
      if (!t.unstyled && t.size) {
        const V = typeof t.size == "number" ? `${t.size}px` : t.size;
        t.placement === "left" || t.placement === "right" ? T.width = V : T.height = V;
      }
      return T;
    }), w = h(() => {
      var T, V;
      return t.unstyled ? [(T = t.pt) == null ? void 0 : T.header, t.headerClass].filter(Boolean) : [$a({ class: (V = t.pt) == null ? void 0 : V.header }), t.headerClass];
    }), c = h(() => {
      var T, V;
      return t.unstyled ? ((T = t.pt) == null ? void 0 : T.title) || "" : Ia({ class: (V = t.pt) == null ? void 0 : V.title });
    }), u = h(() => {
      var T, V;
      return t.unstyled ? ((T = t.pt) == null ? void 0 : T.closeButton) || "" : Da({ class: (V = t.pt) == null ? void 0 : V.closeButton });
    }), f = h(() => {
      var T, V;
      return t.unstyled ? [(T = t.pt) == null ? void 0 : T.body, t.bodyClass].filter(Boolean) : [Ma({ class: (V = t.pt) == null ? void 0 : V.body }), t.bodyClass];
    }), x = h(() => {
      var T, V;
      return t.unstyled ? [(T = t.pt) == null ? void 0 : T.footer, t.footerClass].filter(Boolean) : [Ta({ class: (V = t.pt) == null ? void 0 : V.footer }), t.footerClass];
    }), D = () => {
      r();
    }, M = h(() => !!t.title || !!o.header), B = h(() => !!o.footer);
    return (T, V) => (S(), Be(Qe, { to: "body" }, [
      T.showOverlay && y(s) ? (S(), z("div", {
        key: 0,
        class: g(m.value),
        ref_key: "overlayRef",
        ref: d,
        onClick: V[0] || (V[0] = //@ts-ignore
        (...A) => y(p) && y(p)(...A)),
        role: "presentation",
        "aria-hidden": "true"
      }, null, 2)) : N("", !0),
      $("div", {
        class: g(i.value),
        style: ue(v.value),
        ref_key: "drawerRef",
        ref: n,
        role: "dialog",
        "aria-modal": "true",
        "aria-hidden": !y(s),
        "aria-labelledby": T.title ? "drawer-title" : void 0
      }, [
        M.value ? (S(), z("div", {
          key: 0,
          class: g(w.value)
        }, [
          Y(T.$slots, "header", {}, () => [
            T.title ? (S(), z("h2", {
              key: 0,
              class: g(c.value),
              id: "drawer-title"
            }, X(T.title), 3)) : N("", !0)
          ]),
          T.hideCloseButton ? N("", !0) : (S(), z("button", {
            key: 0,
            class: g(u.value),
            onClick: D,
            "aria-label": "关闭",
            type: "button"
          }, [
            Y(T.$slots, "close-icon", {}, () => [
              V[1] || (V[1] = $("svg", {
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
            ])
          ], 2))
        ], 2)) : N("", !0),
        $("div", {
          class: g(f.value)
        }, [
          Y(T.$slots, "default")
        ], 2),
        B.value ? (S(), z("div", {
          key: 1,
          class: g(x.value)
        }, [
          Y(T.$slots, "footer")
        ], 2)) : N("", !0)
      ], 14, Ra)
    ]));
  }
}), La = Q(Ea);
function Oa(l, a) {
  const t = H(
    a.modelValue !== void 0 ? a.modelValue : l[0]
  ), e = (r) => t.value === r, o = (r) => {
    var b;
    t.value = r, (b = a.onChange) == null || b.call(a, r);
  };
  return {
    selected: t,
    isSelected: e,
    select: o,
    onKeydown: (r) => {
      const b = l.indexOf(t.value);
      if (r.key === "ArrowRight" || r.key === "ArrowDown") {
        const n = l[(b + 1) % l.length];
        o(n);
      } else if (r.key === "ArrowLeft" || r.key === "ArrowUp") {
        const n = l[(b - 1 + l.length) % l.length];
        o(n);
      }
    }
  };
}
const Aa = R({
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
}), Pa = R({
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
}), ja = ["disabled", "aria-selected", "tabindex", "onClick"], Wa = /* @__PURE__ */ J({
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
    const t = l, e = a, o = h(() => t.options.map((m) => typeof m == "object" ? {
      value: m.value,
      label: m.label,
      disabled: m.disabled || !1
    } : {
      value: m,
      label: String(m),
      disabled: !1
    })), s = h(() => o.value.map((m) => m.value)), { isSelected: r, select: b, onKeydown: n } = Oa(s.value, {
      modelValue: t.modelValue,
      onChange: (m) => {
        e("update:modelValue", m), e("change", m);
      }
    });
    ee(
      () => t.modelValue,
      (m) => {
        m !== void 0 && s.value.includes(m) && b(m);
      }
    );
    const d = h(() => {
      var m, i;
      return t.unstyled ? ((m = t.pt) == null ? void 0 : m.container) || "" : Aa({
        size: t.size,
        disabled: t.disabled,
        block: t.block,
        class: (i = t.pt) == null ? void 0 : i.container
      });
    }), p = (m, i) => {
      var v, w;
      return t.unstyled ? ((v = t.pt) == null ? void 0 : v.option) || "" : Pa({
        selected: r(m),
        disabled: t.disabled || i,
        size: t.size,
        class: (w = t.pt) == null ? void 0 : w.option
      });
    }, C = (m, i) => {
      t.disabled || i || b(m);
    };
    return (m, i) => (S(), z("div", {
      class: g(d.value),
      role: "tablist",
      onKeydown: i[0] || (i[0] = //@ts-ignore
      (...v) => y(n) && y(n)(...v))
    }, [
      (S(!0), z(re, null, de(o.value, (v) => (S(), z("button", {
        key: String(v.value),
        class: g(p(v.value, v.disabled)),
        disabled: t.disabled || v.disabled,
        "aria-selected": y(r)(v.value),
        tabindex: y(r)(v.value) ? 0 : -1,
        role: "tab",
        type: "button",
        onClick: (w) => C(v.value, v.disabled)
      }, X(v.label), 11, ja))), 128))
    ], 34));
  }
}), Fa = Q(Wa);
function Ha(l) {
  const a = H(null), t = H(null), e = l.min ?? 0, o = l.max ?? 100, s = l.step ?? 1, r = l.orientation ?? "horizontal", b = H(l.modelValue ?? e), n = h(() => (b.value - e) / (o - e) * 100), d = (i) => {
    var c;
    const v = Math.round(i / s) * s, w = Math.min(o, Math.max(e, v));
    b.value = w, (c = l.onChange) == null || c.call(l, w);
  }, p = (i) => {
    const v = a.value;
    if (!v) return;
    const w = v.getBoundingClientRect(), c = r === "horizontal" ? (i.clientX - w.left) / w.width : 1 - (i.clientY - w.top) / w.height;
    d(e + c * (o - e));
  }, C = (i) => {
    i.key === "ArrowRight" || i.key === "ArrowUp" ? (i.preventDefault(), d(b.value + s)) : (i.key === "ArrowLeft" || i.key === "ArrowDown") && (i.preventDefault(), d(b.value - s));
  }, m = (i) => {
    i.preventDefault();
    const v = (c) => {
      const u = a.value;
      if (!u) return;
      const f = u.getBoundingClientRect(), x = r === "horizontal" ? (c.clientX - f.left) / f.width : 1 - (c.clientY - f.top) / f.height;
      d(e + x * (o - e));
    }, w = () => {
      window.removeEventListener("mousemove", v), window.removeEventListener("mouseup", w);
    };
    window.addEventListener("mousemove", v), window.addEventListener("mouseup", w);
  };
  return ee(
    () => l.modelValue,
    (i) => {
      i != null && (b.value = i);
    }
  ), {
    value: b,
    percent: n,
    trackRef: a,
    thumbRef: t,
    onTrackClick: p,
    onThumbKeyDown: C,
    onThumbMouseDown: m
  };
}
const Ga = R({
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
}), Na = R({
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
}), Ka = R({
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
}), Ya = R({
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
}), Ua = R({
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
}), Xa = R({
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
}), _a = R({
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
}), qa = R({
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
}), Za = ["aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-orientation", "aria-disabled", "tabindex"], Ja = /* @__PURE__ */ J({
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
    const t = l, e = a, {
      value: o,
      percent: s,
      trackRef: r,
      thumbRef: b,
      onTrackClick: n,
      onThumbKeyDown: d,
      onThumbMouseDown: p
    } = Ha({
      min: t.min,
      max: t.max,
      step: t.step,
      orientation: t.orientation,
      modelValue: t.modelValue,
      onChange: (k) => {
        e("update:modelValue", k), e("change", k);
      }
    }), C = h(() => {
      var k, E;
      return t.unstyled ? ((k = t.pt) == null ? void 0 : k.container) || "" : Ga({
        orientation: t.orientation,
        disabled: t.disabled,
        class: (E = t.pt) == null ? void 0 : E.container
      });
    }), m = h(() => {
      var k, E;
      return t.unstyled ? ((k = t.pt) == null ? void 0 : k.track) || "" : Na({
        orientation: t.orientation,
        disabled: t.disabled,
        class: (E = t.pt) == null ? void 0 : E.track
      });
    }), i = h(() => {
      var k, E;
      return t.unstyled ? ((k = t.pt) == null ? void 0 : k.fill) || "" : Ka({
        orientation: t.orientation,
        disabled: t.disabled,
        class: (E = t.pt) == null ? void 0 : E.fill
      });
    }), v = h(() => {
      var k, E;
      return t.unstyled ? ((k = t.pt) == null ? void 0 : k.thumb) || "" : Ya({
        orientation: t.orientation,
        disabled: t.disabled,
        class: (E = t.pt) == null ? void 0 : E.thumb
      });
    }), w = h(() => t.orientation === "horizontal" ? { width: `${s.value}%` } : { height: `${s.value}%` }), c = h(() => t.orientation === "horizontal" ? { left: `${s.value}%` } : { bottom: `${s.value}%` }), u = H(!1), f = h(() => {
      var k, E;
      return t.unstyled ? ((k = t.pt) == null ? void 0 : k.tooltip) || "" : Ua({
        orientation: t.orientation,
        visible: t.showTooltip && u.value,
        class: (E = t.pt) == null ? void 0 : E.tooltip
      });
    }), x = () => {
      t.disabled || (u.value = !0);
    }, D = () => {
      u.value = !1;
    }, M = h(() => t.formatTooltip ? t.formatTooltip(o.value) : o.value.toString()), B = h(() => {
      var k, E;
      return t.unstyled ? ((k = t.pt) == null ? void 0 : k.marks) || "" : Xa({
        orientation: t.orientation,
        class: (E = t.pt) == null ? void 0 : E.marks
      });
    }), T = h(() => {
      if (!t.showMarks) return [];
      if (t.marks)
        return Object.entries(t.marks).map(([G, j]) => ({
          value: Number(G),
          label: j,
          percent: (Number(G) - t.min) / (t.max - t.min) * 100,
          active: o.value >= Number(G)
        }));
      const k = Math.floor((t.max - t.min) / t.step), E = k > 10 ? Math.floor(k / 5) : 1, I = [];
      for (let G = 0; G <= k; G += E) {
        const j = t.min + G * t.step;
        I.push({
          value: j,
          label: j.toString(),
          percent: G / k * 100,
          active: o.value >= j
        });
      }
      return I;
    }), V = (k) => {
      var E, I;
      return t.unstyled ? ((E = t.pt) == null ? void 0 : E.mark) || "" : _a({
        orientation: t.orientation,
        active: k,
        class: (I = t.pt) == null ? void 0 : I.mark
      });
    }, A = (k) => t.orientation === "horizontal" ? { left: `${k}%` } : { bottom: `${k}%` }, O = () => {
      var k, E;
      return t.unstyled ? ((k = t.pt) == null ? void 0 : k.markLabel) || "" : qa({
        orientation: t.orientation,
        class: (E = t.pt) == null ? void 0 : E.markLabel
      });
    }, L = (k) => {
      t.disabled || n(k);
    }, P = (k) => {
      t.disabled || d(k);
    }, W = (k) => {
      if (t.disabled) return;
      p(k), x();
      const E = () => {
        D(), window.removeEventListener("mouseup", E);
      };
      window.addEventListener("mouseup", E);
    };
    return (k, E) => (S(), z("div", {
      class: g(C.value)
    }, [
      $("div", {
        class: g(m.value),
        ref_key: "trackRef",
        ref: r,
        onClick: L
      }, [
        $("div", {
          class: g(i.value),
          style: ue(w.value)
        }, null, 6),
        k.showMarks ? (S(), z("div", {
          key: 0,
          class: g(B.value)
        }, [
          (S(!0), z(re, null, de(T.value, (I) => (S(), z("div", {
            key: I.value,
            class: g(V(I.active)),
            style: ue(A(I.percent))
          }, [
            $("span", {
              class: g(O)
            }, X(I.label), 1)
          ], 6))), 128))
        ], 2)) : N("", !0)
      ], 2),
      $("div", {
        class: g(v.value),
        style: ue(c.value),
        ref_key: "thumbRef",
        ref: b,
        onMousedown: W,
        onKeydown: P,
        onMouseover: x,
        onMouseleave: D,
        role: "slider",
        "aria-valuemin": k.min,
        "aria-valuemax": k.max,
        "aria-valuenow": y(o),
        "aria-orientation": k.orientation,
        "aria-disabled": k.disabled,
        tabindex: k.disabled ? -1 : 0
      }, [
        k.showTooltip ? (S(), z("div", {
          key: 0,
          class: g(f.value)
        }, X(M.value), 3)) : N("", !0)
      ], 46, Za)
    ], 2));
  }
}), Qa = Q(Ja), eo = R({
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
}), to = R({
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
}), lo = R({
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
}), ao = R({
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
}), oo = R({
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
}), ro = { class: "popover-inner" }, no = /* @__PURE__ */ J({
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
  setup(l, { expose: a, emit: t }) {
    const e = l, o = t, s = H(!1), r = H(null), b = H(null), n = `popover-${Math.random().toString(36).slice(2, 9)}`;
    let d = null, p = null;
    const C = H(0), m = H(0), i = async () => {
      p && clearTimeout(p), !e.disabled && (d = setTimeout(() => {
        s.value = !0, o("update:modelValue", !0), ve(u);
      }, e.openDelay));
    }, v = () => {
      d && clearTimeout(d), !e.disabled && (p = setTimeout(() => {
        s.value = !1, o("update:modelValue", !1);
      }, e.closeDelay));
    }, w = () => {
      s.value ? v() : i();
    }, c = (F) => {
      F ? i() : v();
    }, u = () => {
      const F = b.value;
      if (!F || !s.value) return;
      const Z = C.value, le = m.value;
      if (e.followCursor || e.unbound) {
        let ye = 0, se = 0;
        switch (e.placement) {
          case "top":
            ye = le - F.offsetHeight - e.offset, se = Z - F.offsetWidth / 2;
            break;
          case "right":
            ye = le - F.offsetHeight / 2, se = Z + e.offset;
            break;
          case "bottom":
            ye = le + e.offset, se = Z - F.offsetWidth / 2;
            break;
          case "left":
            ye = le - F.offsetHeight / 2, se = Z - F.offsetWidth - e.offset;
            break;
        }
        f(F, ye, se);
        return;
      }
      const te = r.value;
      if (!te) return;
      const ne = te.getBoundingClientRect(), ie = F.getBoundingClientRect();
      let ce = 0, ge = 0;
      const fe = ne.left + ne.width / 2, Ce = ne.top + ne.height / 2;
      switch (e.placement) {
        case "top":
          ce = ne.top - ie.height - e.offset, ge = fe - ie.width / 2;
          break;
        case "right":
          ce = Ce - ie.height / 2, ge = ne.right + e.offset;
          break;
        case "bottom":
          ce = ne.bottom + e.offset, ge = fe - ie.width / 2;
          break;
        case "left":
          ce = Ce - ie.height / 2, ge = ne.left - ie.width - e.offset;
          break;
      }
      f(F, ce, ge);
    }, f = (F, Z, le) => {
      var ne;
      const te = F.querySelector(
        '[class*="popoverArrow"]'
      );
      if (le = Math.max(8, le), le = Math.min(le, window.innerWidth - F.offsetWidth - 8), Z = Math.max(8, Z), Z = Math.min(Z, window.innerHeight - F.offsetHeight - 8), F.style.position = "fixed", F.style.top = `${Z}px`, F.style.left = `${le}px`, F.style.zIndex = ((ne = e.zIndex) == null ? void 0 : ne.toString()) || "1000", F.style.transition = "none", te && e.showArrow && !e.followCursor && !e.unbound) {
        const ie = r.value;
        if (!ie) return;
        const ce = ie.getBoundingClientRect(), ge = F.getBoundingClientRect(), fe = getComputedStyle(F).borderColor;
        switch (e.placement) {
          case "top":
          case "bottom": {
            const ye = ce.left + ce.width / 2 - le, se = 12, Le = ge.width - 12, Oe = Math.max(
              se,
              Math.min(Le, ye)
            );
            te.style.left = `${Oe}px`, te.style.transform = "rotate(45deg)", e.placement === "top" ? (te.style.borderRight = `1px solid ${fe}`, te.style.borderBottom = `1px solid ${fe}`, te.style.borderLeft = "none", te.style.borderTop = "none") : (te.style.borderLeft = `1px solid ${fe}`, te.style.borderTop = `1px solid ${fe}`, te.style.borderRight = "none", te.style.borderBottom = "none");
            break;
          }
          case "left":
          case "right": {
            const ye = ce.top + ce.height / 2 - Z, se = 12, Le = ge.height - 12, Oe = Math.max(
              se,
              Math.min(Le, ye)
            );
            te.style.top = `${Oe}px`, te.style.transform = "rotate(45deg)", e.placement === "left" ? (te.style.borderRight = `1px solid ${fe}`, te.style.borderBottom = `1px solid ${fe}`, te.style.borderLeft = "none", te.style.borderTop = "none") : (te.style.borderLeft = `1px solid ${fe}`, te.style.borderTop = `1px solid ${fe}`, te.style.borderRight = "none", te.style.borderBottom = "none");
            break;
          }
        }
      }
    }, x = (F) => {
      C.value = F.clientX, m.value = F.clientY, (e.followCursor || e.unbound) && s.value && u();
    }, D = () => {
      s.value && u();
    }, M = () => {
      s.value && u();
    }, B = () => {
      e.disabled || (e.trigger === "click" || e.trigger === "manual") && w();
    }, T = (F) => {
      e.disabled || (C.value = F.clientX, m.value = F.clientY, e.trigger === "hover" && i());
    }, V = () => {
      e.disabled || e.trigger === "hover" && v();
    }, A = () => {
      e.disabled || i();
    }, O = () => {
      e.disabled || v();
    }, L = (F) => {
      var Z, le;
      s.value && !((Z = b.value) != null && Z.contains(F.target)) && !((le = r.value) != null && le.contains(F.target)) && v();
    }, P = h(() => {
      var F, Z;
      return e.unstyled ? ((F = e.pt) == null ? void 0 : F.container) || "relative inline-block" : (Z = e.pt) != null && Z.container ? `relative inline-block ${e.pt.container}` : "relative inline-block";
    }), W = h(() => {
      var F, Z;
      return e.unstyled ? ((F = e.pt) == null ? void 0 : F.trigger) || "inline-block" : eo({
        disabled: e.disabled,
        class: (Z = e.pt) == null ? void 0 : Z.trigger
      });
    }), k = h(() => {
      var F, Z;
      return e.unstyled ? ((F = e.pt) == null ? void 0 : F.content) || "" : to({
        placement: e.placement,
        visible: s.value,
        color: e.color,
        class: (Z = e.pt) == null ? void 0 : Z.content
      });
    }), E = h(() => {
      var F, Z;
      return e.unstyled ? ((F = e.pt) == null ? void 0 : F.arrow) || "" : lo({
        placement: e.placement,
        color: e.color,
        class: (Z = e.pt) == null ? void 0 : Z.arrow
      });
    }), I = h(() => {
      var F, Z;
      return e.unstyled ? ((F = e.pt) == null ? void 0 : F.title) || "" : ao({
        color: e.color,
        class: (Z = e.pt) == null ? void 0 : Z.title
      });
    }), G = h(() => {
      var F, Z;
      return e.unstyled ? ((F = e.pt) == null ? void 0 : F.body) || "" : oo({
        color: e.color,
        class: (Z = e.pt) == null ? void 0 : Z.body
      });
    }), j = h(() => {
      var Z;
      const F = {
        zIndex: ((Z = e.zIndex) == null ? void 0 : Z.toString()) || "1000",
        transition: "none",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        maxWidth: "280px",
        overflow: "hidden"
      };
      return e.width && (F.width = typeof e.width == "number" ? `${e.width}px` : e.width), F;
    }), K = h(() => e.teleport === !1 ? null : typeof e.teleport == "string" ? e.teleport : "body"), U = () => {
      window.addEventListener("resize", D), window.addEventListener("scroll", M, !0), document.addEventListener("click", L), window.addEventListener("mousemove", x);
    }, oe = () => {
      window.removeEventListener("resize", D), window.removeEventListener("scroll", M, !0), document.removeEventListener("click", L), window.removeEventListener("mousemove", x);
    };
    return me(() => {
      U(), e.modelValue && ve(() => {
        c(!0);
      });
    }), je(() => {
      oe(), d && clearTimeout(d), p && clearTimeout(p);
    }), ee(
      () => e.modelValue,
      (F) => {
        F !== s.value && c(F);
      }
    ), ee(s, (F) => {
      F && ve(u), o("update:modelValue", F);
    }), ee(
      () => [e.placement, e.offset, e.followCursor, e.unbound],
      () => {
        s.value && ve(u);
      }
    ), a({
      show: () => c(!0),
      hide: () => c(!1),
      toggle: w,
      updatePosition: u
    }), (F, Z) => (S(), z("div", {
      class: g(P.value),
      onMousemove: x
    }, [
      F.unbound ? N("", !0) : (S(), z("div", {
        key: 0,
        ref_key: "triggerRef",
        ref: r,
        class: g(W.value),
        "aria-describedby": n,
        onClick: B,
        onMouseenter: T,
        onMouseleave: V,
        onFocus: A,
        onBlur: O
      }, [
        Y(F.$slots, "trigger")
      ], 34)),
      (S(), Be(Qe, {
        to: K.value,
        disabled: !K.value
      }, [
        s.value && !F.disabled ? (S(), z("div", {
          key: 0,
          ref_key: "popoverRef",
          ref: b,
          class: g(k.value),
          style: ue(j.value),
          id: n,
          role: "tooltip",
          "aria-live": "polite"
        }, [
          F.showArrow && !F.followCursor && !F.unbound ? (S(), z("div", {
            key: 0,
            class: g(E.value)
          }, null, 2)) : N("", !0),
          $("div", ro, [
            F.title ? (S(), z("div", {
              key: 0,
              class: g(I.value)
            }, X(F.title), 3)) : N("", !0),
            $("div", {
              class: g(G.value)
            }, [
              Y(F.$slots, "default", {}, () => [
                pe(X(F.content), 1)
              ])
            ], 2)
          ])
        ], 6)) : N("", !0)
      ], 8, ["to", "disabled"]))
    ], 34));
  }
}), so = Q(no);
function io(l) {
  const a = H(!1), t = H(null), e = H(null);
  let o = null, s = null, r = 0, b = 0;
  const d = {
    ...{
      openDelay: 0,
      closeDelay: 100,
      placement: "top",
      offset: 8,
      followCursor: !1,
      unbound: !1
    },
    ...l
  }, p = (B) => {
    r = B.clientX, b = B.clientY, (d.followCursor || d.unbound) && a.value && v();
  }, C = () => {
    s && clearTimeout(s), o = setTimeout(() => {
      a.value = !0, requestAnimationFrame(v);
    }, d.openDelay);
  }, m = () => {
    o && clearTimeout(o), s = setTimeout(() => {
      a.value = !1;
    }, d.closeDelay);
  }, i = (B) => {
    B ? C() : m();
  }, v = () => {
    if (!a.value || !e.value || !d.unbound && !d.followCursor && !t.value) return;
    const B = e.value, T = B.getBoundingClientRect();
    let V = 0, A = 0;
    const O = d.offset;
    if (d.followCursor || d.unbound)
      switch (d.placement) {
        case "top":
          V = b - T.height - O, A = r - T.width / 2;
          break;
        case "right":
          V = b - T.height / 2, A = r + O;
          break;
        case "bottom":
          V = b + O, A = r - T.width / 2;
          break;
        case "left":
          V = b - T.height / 2, A = r - T.width - O;
          break;
      }
    else {
      const P = t.value.getBoundingClientRect();
      switch (d.placement) {
        case "top":
          V = P.top - T.height - O, A = P.left + P.width / 2 - T.width / 2;
          break;
        case "right":
          V = P.top + P.height / 2 - T.height / 2, A = P.right + O;
          break;
        case "bottom":
          V = P.bottom + O, A = P.left + P.width / 2 - T.width / 2;
          break;
        case "left":
          V = P.top + P.height / 2 - T.height / 2, A = P.left - T.width - O;
          break;
      }
    }
    A = Math.max(8, A), A = Math.min(A, window.innerWidth - T.width - 8), V = Math.max(8, V), V = Math.min(V, window.innerHeight - T.height - 8), B.style.position = "fixed", B.style.top = "0", B.style.left = "0", B.style.transform = `translate3d(${A}px, ${V}px, 0)`, B.style.zIndex = "9999";
  }, w = () => {
    a.value && v();
  }, c = () => {
    a.value && v();
  };
  ee(a, (B) => {
    B ? (window.addEventListener("resize", w), window.addEventListener("scroll", c, !0), (d.followCursor || d.unbound) && window.addEventListener("mousemove", p)) : (window.removeEventListener("resize", w), window.removeEventListener("scroll", c, !0), (d.followCursor || d.unbound) && window.removeEventListener("mousemove", p));
  }), ee(t, (B) => {
    B && a.value && !d.unbound && v();
  }), me(() => {
    (d.followCursor || d.unbound) && window.addEventListener("mousemove", p);
  });
  const u = (B) => {
    r = B.clientX, b = B.clientY, C();
  }, f = () => C(), x = () => m(), D = () => m();
  je(() => {
    o && clearTimeout(o), s && clearTimeout(s), window.removeEventListener("resize", w), window.removeEventListener("scroll", c, !0), (d.followCursor || d.unbound) && window.removeEventListener("mousemove", p);
  });
  const M = `tooltip-${Math.random().toString(36).slice(2, 9)}`;
  return {
    isOpen: a,
    triggerRef: t,
    tooltipRef: e,
    tooltipId: M,
    updatePosition: v,
    onMouseEnter: u,
    onFocus: f,
    onMouseLeave: x,
    onBlur: D,
    setIsOpen: i
  };
}
const uo = R({
  base: "inline-block"
}), co = R({
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
}), fo = R({
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
}), po = ["aria-describedby"], bo = ["id"], go = /* @__PURE__ */ J({
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
  setup(l, { expose: a, emit: t }) {
    const e = l, o = t, s = H(0), r = H(0), b = H(!1), n = io({
      openDelay: e.openDelay,
      closeDelay: e.closeDelay,
      placement: e.placement,
      offset: e.offset,
      followCursor: e.followCursor,
      unbound: e.unbound
    }), d = n.isOpen, p = n.triggerRef, C = n.tooltipRef, m = n.tooltipId, i = n.setIsOpen, v = () => {
      b.value = !0, i(!0), ve(() => {
        M();
      });
    }, w = () => {
      b.value = !1, i(!1);
    }, c = () => {
      b.value ? w() : v();
    }, u = h(() => {
      var I, G;
      return e.unstyled ? ((I = e.pt) == null ? void 0 : I.container) || "" : uo({
        class: (G = e.pt) == null ? void 0 : G.container
      });
    }), f = h(() => {
      var I, G;
      return e.unstyled ? ((I = e.pt) == null ? void 0 : I.content) || "" : co({
        color: e.color,
        visible: !0,
        class: (G = e.pt) == null ? void 0 : G.content
      });
    }), x = h(() => {
      var I, G;
      return e.unstyled ? ((I = e.pt) == null ? void 0 : I.arrow) || "" : fo({
        color: e.color,
        placement: e.placement,
        class: (G = e.pt) == null ? void 0 : G.arrow
      });
    }), D = h(() => {
      const I = {};
      return e.maxWidth && (I.maxWidth = typeof e.maxWidth == "number" ? `${e.maxWidth}px` : e.maxWidth), I;
    }), M = () => {
      const I = C.value;
      if (!I || !d.value) return;
      const G = s.value, j = r.value;
      if (e.followCursor || e.unbound) {
        let Z = 0, le = 0;
        switch (e.placement) {
          case "top":
            Z = j - I.offsetHeight - e.offset, le = G - I.offsetWidth / 2;
            break;
          case "right":
            Z = j - I.offsetHeight / 2, le = G + e.offset;
            break;
          case "bottom":
            Z = j + e.offset, le = G - I.offsetWidth / 2;
            break;
          case "left":
            Z = j - I.offsetHeight / 2, le = G - I.offsetWidth - e.offset;
            break;
        }
        B(I, Z, le);
        return;
      }
      const K = p.value;
      if (!K) return;
      const U = K.getBoundingClientRect();
      let oe = 0, F = 0;
      switch (e.placement) {
        case "top":
          oe = U.top - I.offsetHeight - e.offset, F = U.left + U.width / 2 - I.offsetWidth / 2;
          break;
        case "right":
          oe = U.top + U.height / 2 - I.offsetHeight / 2, F = U.right + e.offset;
          break;
        case "bottom":
          oe = U.bottom + e.offset, F = U.left + U.width / 2 - I.offsetWidth / 2;
          break;
        case "left":
          oe = U.top + U.height / 2 - I.offsetHeight / 2, F = U.left - I.offsetWidth - e.offset;
          break;
      }
      B(I, oe, F);
    }, B = (I, G, j) => {
      j = Math.max(8, j), j = Math.min(j, window.innerWidth - I.offsetWidth - 8), G = Math.max(8, G), G = Math.min(G, window.innerHeight - I.offsetHeight - 8), I.style.position = "fixed", I.style.top = `${G}px`, I.style.left = `${j}px`, I.style.zIndex = "9999", I.style.transition = "none";
    }, T = (I) => {
      s.value = I.clientX, r.value = I.clientY, d.value && (e.followCursor || e.unbound) && M();
    }, V = () => {
      d.value && M();
    }, A = () => {
      d.value && M();
    }, O = (I) => {
      e.disabled || (s.value = I.clientX, r.value = I.clientY, (e.trigger === "hover" || e.trigger === "both") && (i(!0), ve(M)));
    }, L = () => {
      e.disabled || (e.trigger === "focus" || e.trigger === "both") && (i(!0), ve(M));
    }, P = () => {
      e.disabled || (e.trigger === "hover" || e.trigger === "both") && i(!1);
    }, W = () => {
      e.disabled || (e.trigger === "focus" || e.trigger === "both") && i(!1);
    }, k = () => {
      window.addEventListener("mousemove", T), window.addEventListener("resize", V), window.addEventListener("scroll", A, !0);
    }, E = () => {
      window.removeEventListener("mousemove", T), window.removeEventListener("resize", V), window.removeEventListener("scroll", A, !0);
    };
    return me(() => {
      k(), e.unbound && e.modelValue && (b.value = !0, i(!0), ve(M));
    }), je(() => {
      E();
    }), ee(d, (I) => {
      I && ve(M), e.unbound && (o("update:modelValue", I), b.value = I);
    }), ee(
      () => e.modelValue,
      (I) => {
        e.unbound && (b.value = I, i(I), I && ve(M));
      }
    ), a({
      show: v,
      hide: w,
      toggle: c,
      updatePosition: M
    }), (I, G) => (S(), z(re, null, [
      I.unbound ? N("", !0) : (S(), z("span", {
        key: 0,
        ref_key: "triggerRef",
        ref: p,
        onMouseenter: O,
        onMouseleave: P,
        onFocus: L,
        onBlur: W,
        "aria-describedby": y(m),
        class: g(u.value),
        role: "button",
        tabindex: "0"
      }, [
        Y(I.$slots, "default")
      ], 42, po)),
      (S(), Be(Qe, { to: "body" }, [
        y(d) && !I.disabled ? (S(), z("div", {
          key: 0,
          ref_key: "tooltipRef",
          ref: C,
          class: g(f.value),
          style: ue(D.value),
          id: y(m),
          role: "tooltip",
          "aria-live": "polite"
        }, [
          Y(I.$slots, "content", {}, () => [
            pe(X(I.content), 1)
          ]),
          I.arrow && !I.followCursor && !I.unbound ? (S(), z("div", {
            key: 0,
            class: g(x.value)
          }, null, 2)) : N("", !0)
        ], 14, bo)) : N("", !0)
      ]))
    ], 64));
  }
}), vo = Q(go);
function mo(l) {
  const a = H(l.modelValue ?? !1), t = () => {
    var r;
    l.disabled || !l.selectable || (a.value = !a.value, (r = l.onChange) == null || r.call(l, a.value));
  }, e = (r) => {
    var b;
    l.disabled || (r.stopPropagation(), (b = l.onClose) == null || b.call(l, r));
  }, o = h(() => a.value), s = h(() => l.closable || !!l.onClose);
  return {
    isSelected: o,
    isClosable: s,
    toggle: t,
    handleClose: e
  };
}
const yo = R({
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
}), ho = ["aria-selected"], wo = ["disabled"], xo = /* @__PURE__ */ J({
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
    const t = l, e = a, { isSelected: o, isClosable: s, toggle: r, handleClose: b } = mo({
      modelValue: t.modelValue,
      selectable: t.selectable,
      disabled: t.disabled,
      closable: t.closable,
      onClose: (w) => e("close", w),
      onChange: (w) => e("update:modelValue", w)
    }), n = h(() => {
      var w, c;
      return t.unstyled ? ((w = t.pt) == null ? void 0 : w.root) || "" : yo({
        variant: t.variant,
        color: t.color,
        size: t.size,
        radius: t.radius,
        selected: o.value,
        disabled: t.disabled,
        class: (c = t.pt) == null ? void 0 : c.root
      });
    }), d = h(() => {
      var c, u;
      return t.unstyled ? ((c = t.pt) == null ? void 0 : c.dot) || "" : [
        "mr-1.5 h-2 w-2 rounded-full",
        {
          default: "bg-zinc-500",
          primary: "bg-blue-500",
          secondary: "bg-purple-500",
          success: "bg-green-500",
          warning: "bg-yellow-500",
          danger: "bg-red-500"
        }[t.color || "default"],
        (u = t.pt) == null ? void 0 : u.dot
      ];
    }), p = h(() => {
      var w;
      return t.unstyled ? ((w = t.pt) == null ? void 0 : w.avatar) || "" : "flex shrink-0 mr-1.5";
    }), C = h(() => {
      var w;
      return t.unstyled ? ((w = t.pt) == null ? void 0 : w.startContent) || "" : "flex shrink-0 mr-1.5";
    }), m = h(() => {
      var w;
      return t.unstyled ? ((w = t.pt) == null ? void 0 : w.content) || "" : "truncate";
    }), i = h(() => {
      var w;
      return t.unstyled ? ((w = t.pt) == null ? void 0 : w.endContent) || "" : "flex shrink-0 ml-1.5";
    }), v = h(() => {
      var w;
      return t.unstyled ? ((w = t.pt) == null ? void 0 : w.closeButton) || "" : "ml-1.5 flex-shrink-0 flex items-center justify-center rounded-full hover:bg-black/5 focus:outline-none focus:bg-black/10 w-4 h-4";
    });
    return (w, c) => (S(), z("span", {
      class: g(n.value),
      role: "option",
      "aria-selected": y(o),
      onClick: c[1] || (c[1] = //@ts-ignore
      (...u) => y(r) && y(r)(...u))
    }, [
      w.variant === "dot" ? (S(), z("span", {
        key: 0,
        class: g(d.value)
      }, null, 2)) : N("", !0),
      w.$slots.avatar ? Y(w.$slots, "avatar", {
        key: 1,
        class: g(p.value)
      }) : w.avatar ? Y(w.$slots, "avatarFallback", {
        key: 2,
        class: g(p.value)
      }, () => [
        $("span", {
          class: g(p.value)
        }, [
          (S(), Be(Ye(w.avatar)))
        ], 2)
      ]) : N("", !0),
      w.$slots.startContent ? Y(w.$slots, "startContent", {
        key: 3,
        class: g(C.value)
      }) : w.startContent ? Y(w.$slots, "startContentFallback", {
        key: 4,
        class: g(C.value)
      }, () => [
        $("span", {
          class: g(C.value)
        }, [
          (S(), Be(Ye(w.startContent)))
        ], 2)
      ]) : N("", !0),
      $("span", {
        class: g(m.value)
      }, [
        Y(w.$slots, "default")
      ], 2),
      w.$slots.endContent ? Y(w.$slots, "endContent", {
        key: 5,
        class: g(i.value)
      }) : w.endContent ? Y(w.$slots, "endContentFallback", {
        key: 6,
        class: g(i.value)
      }, () => [
        $("span", {
          class: g(i.value)
        }, [
          (S(), Be(Ye(w.endContent)))
        ], 2)
      ]) : N("", !0),
      y(s) ? (S(), z("button", {
        key: 7,
        type: "button",
        class: g(v.value),
        onClick: c[0] || (c[0] = ke(
          //@ts-ignore
          (...u) => y(b) && y(b)(...u),
          ["stop"]
        )),
        "aria-label": "关闭",
        disabled: w.disabled
      }, c[2] || (c[2] = [
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
      ]), 10, wo)) : N("", !0)
    ], 10, ho));
  }
}), ko = Q(xo), Co = R({
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
}), So = R({
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
}), zo = R({
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
}), Bo = R({
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
}), Vo = R({
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
}), $o = ["innerHTML"], Io = { class: "flex-1" }, Do = /* @__PURE__ */ J({
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
    const t = l, e = a, o = H(!0), s = () => {
      o.value = !1, e("close");
    }, r = h(
      () => {
        var m, i;
        return t.unstyled ? ((m = t.pt) == null ? void 0 : m.root) || "" : Co({
          variant: t.variant,
          size: t.size,
          rounded: t.rounded,
          border: t.border,
          shadow: t.shadow,
          class: [t.class, (i = t.pt) == null ? void 0 : i.root]
        });
      }
    ), b = h(
      () => {
        var m, i;
        return t.unstyled ? ((m = t.pt) == null ? void 0 : m.icon) || "" : So({
          variant: t.variant,
          size: t.size,
          class: (i = t.pt) == null ? void 0 : i.icon
        });
      }
    ), n = h(
      () => {
        var m, i;
        return t.unstyled ? ((m = t.pt) == null ? void 0 : m.title) || "" : zo({
          size: t.size,
          class: (i = t.pt) == null ? void 0 : i.title
        });
      }
    ), d = h(
      () => {
        var m, i;
        return t.unstyled ? ((m = t.pt) == null ? void 0 : m.description) || "" : Bo({
          size: t.size,
          class: (i = t.pt) == null ? void 0 : i.description
        });
      }
    ), p = h(
      () => {
        var m, i;
        return t.unstyled ? ((m = t.pt) == null ? void 0 : m.closeButton) || "" : Vo({
          size: t.size,
          class: (i = t.pt) == null ? void 0 : i.closeButton
        });
      }
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
    return (m, i) => o.value ? (S(), z("div", {
      key: 0,
      class: g(r.value)
    }, [
      m.icon ? (S(), z("div", {
        key: 0,
        class: g(b.value)
      }, [
        Y(m.$slots, "icon", {}, () => [
          $("span", {
            innerHTML: C[m.variant]
          }, null, 8, $o)
        ])
      ], 2)) : N("", !0),
      $("div", Io, [
        m.$slots.title || m.title ? (S(), z("div", {
          key: 0,
          class: g(n.value)
        }, [
          Y(m.$slots, "title", {}, () => [
            pe(X(m.title), 1)
          ])
        ], 2)) : N("", !0),
        $("div", {
          class: g(d.value)
        }, [
          Y(m.$slots, "default", {}, () => [
            pe(X(m.description), 1)
          ])
        ], 2)
      ]),
      m.closable ? (S(), z("button", {
        key: 1,
        class: g(p.value),
        onClick: s,
        "aria-label": "关闭",
        type: "button"
      }, [
        Y(m.$slots, "close-icon", {}, () => [
          i[0] || (i[0] = $("svg", {
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
      ], 2)) : N("", !0)
    ], 2)) : N("", !0);
  }
}), Mo = Q(Do), To = R({
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
}), Ro = /* @__PURE__ */ J({
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
    const a = l, t = h(() => {
      var e, o;
      return a.unstyled ? ((e = a.pt) == null ? void 0 : e.root) || "" : To({
        size: a.size,
        variant: a.variant,
        class: (o = a.pt) == null ? void 0 : o.root
      });
    });
    return (e, o) => (S(), z("kbd", {
      class: g(t.value)
    }, [
      Y(e.$slots, "default")
    ], 2));
  }
}), Eo = Q(Ro), Lo = R({
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
}), Oo = {
  click: (l) => l instanceof MouseEvent
}, Ao = (l, a) => ({
  _ref: H(null),
  handleClick: (o) => {
    if (l.disabled || l.loading) {
      o.stopPropagation();
      return;
    } else
      a("click", o);
  }
}), Po = ["type", "disabled"], jo = { key: 0 }, Wo = {
  key: 1,
  class: "inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
}, Fo = /* @__PURE__ */ J({
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
  emits: Oo,
  setup(l, { expose: a, emit: t }) {
    const e = t, o = l, { _ref: s, handleClick: r } = Ao(o, e), b = h(() => {
      var p, C;
      return o.unstyled ? ((p = o.pt) == null ? void 0 : p.root) || "" : Lo({
        variant: o.variant,
        size: o.size,
        fullWidth: o.fullWidth,
        rounded: o.rounded,
        disabled: o.disabled || o.loading,
        class: (C = o.pt) == null ? void 0 : C.root
      });
    }), n = h(() => {
      var p;
      return o.unstyled ? ((p = o.pt) == null ? void 0 : p.loader) || "" : "mr-2";
    }), d = h(() => {
      var p;
      return o.unstyled && ((p = o.pt) == null ? void 0 : p.icon) || "";
    });
    return a({
      _ref: s,
      handleClick: r
    }), (p, C) => (S(), z("button", {
      class: g(b.value),
      type: p.type,
      disabled: p.disabled || p.loading,
      ref_key: "_ref",
      ref: s,
      onClick: C[0] || (C[0] = //@ts-ignore
      (...m) => y(r) && y(r)(...m))
    }, [
      p.loading ? (S(), z("span", {
        key: 0,
        class: g(n.value)
      }, [
        p.$slots.loading ? (S(), z("span", jo, [
          Y(p.$slots, "loading")
        ])) : (S(), z("span", Wo))
      ], 2)) : p.$slots.icon ? (S(), z("span", {
        key: 1,
        class: g(d.value)
      }, [
        Y(p.$slots, "icon")
      ], 2)) : N("", !0),
      Y(p.$slots, "default")
    ], 10, Po));
  }
}), Ho = Q(Fo), Go = R({
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
}), No = /* @__PURE__ */ J({
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
    const a = l, t = h(() => {
      var r, b;
      return a.unstyled ? ((r = a.pt) == null ? void 0 : r.root) || "" : Go({
        variant: a.variant,
        padding: a.padding,
        radius: a.radius,
        hover: a.hover,
        class: (b = a.pt) == null ? void 0 : b.root
      });
    }), e = h(() => {
      var r;
      return a.unstyled ? ((r = a.pt) == null ? void 0 : r.header) || "" : "mb-4";
    }), o = h(() => {
      var r;
      return a.unstyled && ((r = a.pt) == null ? void 0 : r.body) || "";
    }), s = h(() => {
      var r;
      return a.unstyled ? ((r = a.pt) == null ? void 0 : r.footer) || "" : "mt-4 flex justify-end";
    });
    return (r, b) => (S(), z("div", {
      class: g(t.value)
    }, [
      r.$slots.header ? (S(), z("div", {
        key: 0,
        class: g(e.value)
      }, [
        Y(r.$slots, "header")
      ], 2)) : N("", !0),
      $("div", {
        class: g(o.value)
      }, [
        Y(r.$slots, "default")
      ], 2),
      r.$slots.footer ? (S(), z("div", {
        key: 1,
        class: g(s.value)
      }, [
        Y(r.$slots, "footer")
      ], 2)) : N("", !0)
    ], 2));
  }
}), Ko = Q(No), Yo = R({
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
}), Uo = /* @__PURE__ */ J({
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
    const a = l, t = We(), e = h(() => {
      var n;
      return !!a.label || !!((n = t.default) != null && n.call(t));
    }), o = h(() => a.as ? a.as : a.orientation === "horizontal" && !e.value ? "hr" : "div"), s = h(() => {
      var n, d;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.root) || "" : Yo({
        orientation: a.orientation,
        variant: a.variant,
        size: a.size,
        labelPosition: a.labelPosition,
        withLabel: e.value,
        class: (d = a.pt) == null ? void 0 : d.root
      });
    }), r = h(() => {
      var n;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.label) || "" : "px-2 text-gray-500";
    }), b = h(() => !a.unstyled && a.color ? {
      borderColor: a.color,
      "--tw-border-opacity": 1,
      "before:border-color": a.color,
      "after:border-color": a.color
    } : {});
    return (n, d) => (S(), Be(Ye(o.value), {
      class: g(s.value),
      style: ue(b.value),
      role: "separator",
      "aria-orientation": n.orientation,
      "data-orientation": n.orientation
    }, {
      default: ft(() => [
        e.value ? (S(), z("div", {
          key: 0,
          class: g(r.value)
        }, [
          Y(n.$slots, "default", {}, () => [
            pe(X(n.label), 1)
          ])
        ], 2)) : N("", !0)
      ]),
      _: 3
    }, 8, ["class", "style", "aria-orientation", "data-orientation"]));
  }
}), Xo = Q(Uo), _o = R({
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
}), qo = ["value", "placeholder", "disabled", "readonly", "rows", "maxlength", "minlength"], Zo = /* @__PURE__ */ J({
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
    const t = l, e = a, o = h(() => {
      var d;
      return ((d = t.pt) == null ? void 0 : d.root) || "w-full";
    }), s = h(() => {
      var d, p;
      return t.unstyled ? ((d = t.pt) == null ? void 0 : d.textarea) || "" : _o({
        size: t.size,
        status: t.status,
        resize: t.resize,
        class: (p = t.pt) == null ? void 0 : p.textarea
      });
    }), r = h(() => {
      var d, p;
      return t.unstyled ? ((d = t.pt) == null ? void 0 : d.counter) || "" : ((p = t.pt) == null ? void 0 : p.counter) || "mt-1 text-right text-sm text-gray-500";
    }), b = (d) => {
      const p = d.target;
      e("update:modelValue", p.value), t.autosize && n(p);
    }, n = (d) => {
      d.style.height = "auto", d.style.height = `${d.scrollHeight}px`;
    };
    return me(() => {
      if (t.autosize) {
        const d = document.querySelector("textarea");
        d && n(d);
      }
    }), (d, p) => {
      var C;
      return S(), z("div", {
        class: g(o.value)
      }, [
        $("textarea", {
          class: g(s.value),
          value: d.modelValue,
          placeholder: d.placeholder,
          disabled: d.disabled,
          readonly: d.readonly,
          rows: d.rows,
          maxlength: d.maxLength,
          minlength: d.minLength,
          onInput: b
        }, null, 42, qo),
        d.showCount && d.maxLength ? (S(), z("div", {
          key: 0,
          class: g(r.value)
        }, X(((C = d.modelValue) == null ? void 0 : C.length) || 0) + "/" + X(d.maxLength), 3)) : N("", !0)
      ], 2);
    };
  }
}), Jo = Q(Zo);
function Qo(l) {
  const a = H(l.modelValue ?? !1), t = () => {
    var o;
    l.disabled || (a.value = !a.value, (o = l.onChange) == null || o.call(l, a.value));
  };
  return ee(
    () => l.modelValue,
    (o) => {
      o !== void 0 && (a.value = o);
    }
  ), {
    checked: h(() => !!a.value),
    disabled: h(() => !!l.disabled),
    toggle: t,
    onKeyDown: (o) => {
      (o.key === "Enter" || o.key === " ") && (o.preventDefault(), t());
    }
  };
}
const Je = R({
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
}), er = ["checked", "disabled"], tr = /* @__PURE__ */ J({
  name: "Checkbox",
  __name: "index",
  props: {
    modelValue: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    size: { default: "default" },
    color: { default: "blue" },
    label: {},
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: ["update:modelValue"],
  setup(l, { emit: a }) {
    const t = l, e = a, { checked: o, toggle: s, onKeyDown: r } = Qo({
      modelValue: t.modelValue,
      disabled: t.disabled,
      onChange: (C) => e("update:modelValue", C)
    }), b = h(() => {
      var m, i;
      return t.unstyled ? ((m = t.pt) == null ? void 0 : m.root) || "" : Je({
        checked: o.value,
        disabled: t.disabled,
        size: t.size,
        color: t.color
      }).root({ class: (i = t.pt) == null ? void 0 : i.root });
    }), n = h(() => {
      var m, i;
      return t.unstyled ? ((m = t.pt) == null ? void 0 : m.checkbox) || "" : Je({
        checked: o.value,
        disabled: t.disabled,
        size: t.size,
        color: t.color
      }).checkbox({ class: (i = t.pt) == null ? void 0 : i.checkbox });
    }), d = h(() => {
      var m, i;
      return t.unstyled ? ((m = t.pt) == null ? void 0 : m.icon) || "" : Je({
        checked: o.value,
        disabled: t.disabled,
        size: t.size,
        color: t.color
      }).icon({ class: (i = t.pt) == null ? void 0 : i.icon });
    }), p = h(() => {
      var m, i;
      return t.unstyled ? ((m = t.pt) == null ? void 0 : m.label) || "" : Je({
        checked: o.value,
        disabled: t.disabled,
        size: t.size,
        color: t.color
      }).label({ class: (i = t.pt) == null ? void 0 : i.label });
    });
    return (C, m) => (S(), z("label", {
      class: g(b.value),
      onClick: m[0] || (m[0] = ke(
        //@ts-ignore
        (...i) => y(s) && y(s)(...i),
        ["prevent"]
      )),
      onKeydown: m[1] || (m[1] = //@ts-ignore
      (...i) => y(r) && y(r)(...i)),
      tabindex: "0"
    }, [
      $("input", {
        type: "checkbox",
        class: "sr-only",
        checked: y(o),
        disabled: t.disabled
      }, null, 8, er),
      $("div", {
        class: g(n.value)
      }, [
        y(o) ? (S(), z("span", {
          key: 0,
          class: g(d.value)
        }, m[2] || (m[2] = [
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
        ]), 2)) : N("", !0)
      ], 2),
      t.label ? (S(), z("span", {
        key: 0,
        class: g(p.value)
      }, X(t.label), 3)) : Y(C.$slots, "default", { key: 1 })
    ], 34));
  }
}), lr = Q(tr), Me = R({
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
function ar(l) {
  var b;
  const a = H(((b = l.modelValue) == null ? void 0 : b.toString()) || ""), t = H(null), e = (n) => {
    var d;
    if (!(l.disabled || l.readonly)) {
      if (l.type === "number" && n !== "") {
        const p = parseFloat(n);
        a.value = isNaN(p) ? "" : n;
      } else
        a.value = n;
      l.maxlength && n.length > l.maxlength && (a.value = n.slice(0, l.maxlength)), (d = l.onChange) == null || d.call(l, a.value);
    }
  };
  return ee(
    () => l.modelValue,
    (n) => {
      n != null ? a.value = n.toString() : a.value = "";
    }
  ), {
    inputValue: a,
    inputRef: t,
    updateValue: e,
    clearInput: () => {
      var n, d;
      l.disabled || l.readonly || (a.value = "", (n = l.onChange) == null || n.call(l, ""), (d = t.value) == null || d.focus());
    },
    focus: () => {
      var n;
      (n = t.value) == null || n.focus();
    },
    blur: () => {
      var n;
      (n = t.value) == null || n.blur();
    }
  };
}
const or = ["type", "value", "placeholder", "disabled", "readonly", "maxlength", "autofocus"], rr = /* @__PURE__ */ J({
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
  setup(l, { expose: a, emit: t }) {
    const e = l, o = t, { inputValue: s, inputRef: r, updateValue: b, clearInput: n, focus: d, blur: p } = ar(
      {
        modelValue: e.modelValue,
        type: e.type,
        disabled: e.disabled,
        readonly: e.readonly,
        maxlength: e.maxlength,
        onChange: (f) => o("update:modelValue", f)
      }
    ), C = h(() => {
      var x, D;
      return e.unstyled ? ((x = e.pt) == null ? void 0 : x.root) || "" : Me({
        size: e.size,
        status: e.status,
        disabled: e.disabled
      }).root({ class: (D = e.pt) == null ? void 0 : D.root });
    }), m = h(() => {
      var x, D;
      return e.unstyled ? ((x = e.pt) == null ? void 0 : x.wrapper) || "" : Me({
        size: e.size,
        status: e.status,
        disabled: e.disabled
      }).wrapper({ class: (D = e.pt) == null ? void 0 : D.wrapper });
    }), i = h(() => {
      var x, D;
      return e.unstyled ? ((x = e.pt) == null ? void 0 : x.input) || "" : Me({
        size: e.size,
        status: e.status,
        disabled: e.disabled
      }).input({ class: (D = e.pt) == null ? void 0 : D.input });
    }), v = h(() => {
      var x, D;
      return e.unstyled ? ((x = e.pt) == null ? void 0 : x.prefix) || "" : Me({
        size: e.size,
        status: e.status,
        disabled: e.disabled
      }).prefix({ class: (D = e.pt) == null ? void 0 : D.prefix });
    }), w = h(() => {
      var x, D;
      return e.unstyled ? ((x = e.pt) == null ? void 0 : x.suffix) || "" : Me({
        size: e.size,
        status: e.status,
        disabled: e.disabled
      }).suffix({ class: (D = e.pt) == null ? void 0 : D.suffix });
    }), c = h(() => {
      var x, D;
      return e.unstyled ? ((x = e.pt) == null ? void 0 : x.clear) || "" : Me({
        size: e.size,
        status: e.status,
        disabled: e.disabled
      }).clear({ class: (D = e.pt) == null ? void 0 : D.clear });
    }), u = h(() => {
      var x, D;
      return e.unstyled ? ((x = e.pt) == null ? void 0 : x.count) || "" : Me({
        size: e.size,
        status: e.status,
        disabled: e.disabled
      }).count({ class: (D = e.pt) == null ? void 0 : D.count });
    });
    return a({
      focus: d,
      blur: p,
      inputRef: r
    }), (f, x) => (S(), z("div", {
      class: g(C.value)
    }, [
      $("div", {
        class: g([m.value, e.readonly && "cursor-default"])
      }, [
        e.prefixIcon ? (S(), z("div", {
          key: 0,
          class: g(v.value)
        }, [
          $("i", {
            class: g(e.prefixIcon)
          }, null, 2)
        ], 2)) : N("", !0),
        $("input", {
          type: e.type,
          class: g(i.value),
          value: y(s),
          placeholder: e.placeholder,
          disabled: e.disabled,
          readonly: e.readonly,
          maxlength: e.maxlength,
          autofocus: e.autofocus,
          ref_key: "inputRef",
          ref: r,
          onInput: x[0] || (x[0] = (D) => y(b)(D.target.value)),
          onFocus: x[1] || (x[1] = (D) => f.$emit("focus", D)),
          onBlur: x[2] || (x[2] = (D) => f.$emit("blur", D))
        }, null, 42, or),
        e.clearable && y(s) && !e.disabled && !e.readonly ? (S(), z("div", {
          key: 1,
          class: g([w.value, c.value]),
          onClick: x[3] || (x[3] = //@ts-ignore
          (...D) => y(n) && y(n)(...D))
        }, x[4] || (x[4] = [
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
        ]), 2)) : N("", !0),
        e.suffixIcon ? (S(), z("div", {
          key: 2,
          class: g(w.value)
        }, [
          $("i", {
            class: g(e.suffixIcon)
          }, null, 2)
        ], 2)) : N("", !0)
      ], 2),
      e.showCount && e.maxlength ? (S(), z("div", {
        key: 0,
        class: g(u.value)
      }, X(y(s).length) + "/" + X(e.maxlength), 3)) : N("", !0)
    ], 2));
  }
}), nr = Q(rr);
function sr(l) {
  const a = H(!1), t = H(""), e = H(0), o = H(null), s = H(null), r = H(l.modelValue);
  ee(
    () => l.modelValue,
    (O) => {
      r.value = O;
    },
    { immediate: !0 }
  );
  const b = h(() => {
    var O;
    return ((O = l.options) == null ? void 0 : O.map((L) => ({
      ...L,
      disabled: L.disabled || !1
    }))) || [];
  }), n = h(() => {
    const O = {}, L = [];
    return b.value.forEach((P) => {
      P.group ? (O[P.group] || (O[P.group] = []), O[P.group].push(P)) : L.push(P);
    }), { groups: O, noGroup: L };
  }), d = h(() => l.multiple ? Array.isArray(r.value) ? r.value : [] : r.value !== void 0 ? [r.value] : []), p = h(() => {
    const O = [];
    if (!d.value.length) return O;
    for (const L of d.value) {
      const P = b.value.find(
        (W) => W.value === L || String(W.value) === String(L)
      );
      if (P)
        O.push(P);
      else if (L != null && (typeof L == "string" || typeof L == "number")) {
        const W = {
          label: String(L),
          value: L,
          disabled: !1
        };
        O.push(W);
      }
    }
    return O;
  }), C = h(() => {
    var O;
    return !p.value || p.value.length === 0 ? "" : ((O = p.value[0]) == null ? void 0 : O.label) || "";
  }), m = h(() => {
    if (!l.filterable || !t.value)
      return b.value;
    const O = t.value.toLowerCase();
    return b.value.filter(
      (L) => L.label.toLowerCase().includes(O)
    );
  }), i = (O) => {
    var P;
    if (l.disabled || l.readonly || O.disabled)
      return;
    let L;
    if (l.multiple) {
      const W = [...d.value], k = W.findIndex(
        (E) => String(E) === String(O.value)
      );
      k > -1 ? W.splice(k, 1) : W.push(O.value), L = W;
    } else
      L = O.value, u();
    r.value = L, (P = l.onChange) == null || P.call(l, L), l.filterable && ve(() => {
      t.value = "";
    });
  }, v = (O) => {
    var P;
    if (O && O.stopPropagation(), l.disabled || l.readonly) return;
    const L = l.multiple ? [] : void 0;
    r.value = L, (P = l.onChange) == null || P.call(l, L);
  }, w = () => {
    var O;
    l.disabled || l.readonly || (a.value = !a.value, (O = l.onDropdownVisibleChange) == null || O.call(l, a.value), a.value && ve(() => {
      f();
    }));
  }, c = () => {
    var O;
    l.disabled || l.readonly || a.value || (a.value = !0, (O = l.onDropdownVisibleChange) == null || O.call(l, !0), ve(() => {
      f();
    }));
  }, u = () => {
    var O;
    a.value && (a.value = !1, t.value = "", (O = l.onDropdownVisibleChange) == null || O.call(l, !1));
  }, f = () => {
    const O = m.value;
    for (let L = 0; L < O.length; L++)
      if (!O[L].disabled) {
        e.value = L;
        return;
      }
    e.value = -1;
  }, x = (O) => d.value.some((L) => String(L) === String(O)), D = (O) => {
    var P, W;
    if (l.disabled || l.readonly) return;
    const L = m.value;
    switch (O.key) {
      case "ArrowDown":
        if (O.preventDefault(), !a.value)
          c();
        else {
          let k = e.value, E = 0;
          do
            k = (k + 1) % L.length, E++;
          while ((P = L[k]) != null && P.disabled && E < L.length);
          e.value = k;
        }
        break;
      case "ArrowUp":
        if (O.preventDefault(), !a.value)
          c();
        else {
          let k = e.value, E = 0;
          do
            k = k <= 0 ? L.length - 1 : k - 1, E++;
          while ((W = L[k]) != null && W.disabled && E < L.length);
          e.value = k;
        }
        break;
      case "Enter":
      case " ":
        O.preventDefault(), a.value && e.value >= 0 && L[e.value] ? i(L[e.value]) : w();
        break;
      case "Escape":
        O.preventDefault(), u();
        break;
      case "Tab":
        u();
        break;
    }
  }, M = (O) => {
    var L;
    t.value = O, (L = l.onSearch) == null || L.call(l, O), f();
  }, B = (O) => {
    a.value && o.value && s.value && !o.value.contains(O.target) && !s.value.contains(O.target) && u();
  }, T = () => {
    document.addEventListener("mousedown", B);
  }, V = () => {
    document.removeEventListener("mousedown", B);
  };
  ee(a, (O) => {
    O ? T() : V();
  });
  const A = () => {
    V();
  };
  return me(() => {
    a.value && T();
  }), Ve(() => {
    A();
  }), {
    isOpen: a,
    searchValue: t,
    activeIndex: e,
    triggerRef: o,
    dropdownRef: s,
    selectedValues: d,
    selectedOptions: p,
    getOptionLabel: C,
    filteredOptions: m,
    groupedOptions: n,
    selectOption: i,
    clearSelection: v,
    toggleDropdown: w,
    openDropdown: c,
    closeDropdown: u,
    isSelected: x,
    onKeyDown: D,
    onSearchInput: M,
    cleanup: A
  };
}
const ir = R({
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
const dr = {
  key: 0,
  class: "text-red-500"
}, ur = ["aria-expanded", "aria-disabled", "aria-readonly", "aria-required"], cr = {
  key: 0,
  class: "flex flex-wrap gap-1"
}, fr = { class: "truncate" }, pr = ["onClick"], br = {
  key: 1,
  class: "truncate"
}, gr = { class: "flex items-center" }, vr = ["aria-multiselectable"], mr = {
  key: 0,
  class: "sticky top-0"
}, yr = ["value"], hr = ["onClick", "aria-selected", "aria-disabled"], wr = ["onClick", "aria-selected", "aria-disabled"], xr = { class: "px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400" }, kr = ["onClick", "aria-selected", "aria-disabled"], Cr = {
  key: 1,
  class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
}, Sr = {
  key: 2,
  class: "mt-1 text-xs text-red-500"
}, zr = /* @__PURE__ */ J({
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
  setup(l, { expose: a, emit: t }) {
    const e = l, o = t, s = ir(), r = h(() => {
      var E, I, G, j, K, U, oe, F, Z, le, te, ne, ie, ce, ge, fe, Ce, ye, se, Le, Oe, vt, mt, yt, ht, wt, xt, kt, Ct, St, zt, Bt, Vt;
      return e.unstyled ? {
        root: ((E = e.pt) == null ? void 0 : E.root) || "",
        trigger: ((I = e.pt) == null ? void 0 : I.trigger) || "",
        value: ((G = e.pt) == null ? void 0 : G.value) || "",
        placeholder: ((j = e.pt) == null ? void 0 : j.placeholder) || "",
        dropdown: ((K = e.pt) == null ? void 0 : K.dropdown) || "",
        option: ((U = e.pt) == null ? void 0 : U.option) || "",
        optionSelected: ((oe = e.pt) == null ? void 0 : oe.optionSelected) || "",
        optionActive: ((F = e.pt) == null ? void 0 : F.optionActive) || "",
        optionDisabled: ((Z = e.pt) == null ? void 0 : Z.optionDisabled) || "",
        icon: ((le = e.pt) == null ? void 0 : le.icon) || "",
        clearIcon: ((te = e.pt) == null ? void 0 : te.clearIcon) || "",
        checkIcon: ((ne = e.pt) == null ? void 0 : ne.checkIcon) || "",
        search: ((ie = e.pt) == null ? void 0 : ie.search) || "",
        tag: ((ce = e.pt) == null ? void 0 : ce.tag) || "",
        tagRemove: ((ge = e.pt) == null ? void 0 : ge.tagRemove) || "",
        noMatch: ((fe = e.pt) == null ? void 0 : fe.noMatch) || "",
        label: ((Ce = e.pt) == null ? void 0 : Ce.label) || ""
      } : {
        root: s.root({
          size: e.size,
          status: e.status,
          disabled: e.disabled,
          multiple: e.multiple,
          open: d.value,
          class: (ye = e.pt) == null ? void 0 : ye.root
        }),
        trigger: s.trigger({
          size: e.size,
          status: e.status,
          disabled: e.disabled,
          multiple: e.multiple,
          open: d.value,
          class: (se = e.pt) == null ? void 0 : se.trigger
        }),
        value: s.value({
          multiple: e.multiple,
          class: (Le = e.pt) == null ? void 0 : Le.value
        }),
        placeholder: s.placeholder({ class: (Oe = e.pt) == null ? void 0 : Oe.placeholder }),
        dropdown: s.dropdown({ class: (vt = e.pt) == null ? void 0 : vt.dropdown }),
        option: s.option({ class: (mt = e.pt) == null ? void 0 : mt.option }),
        optionSelected: s.optionSelected({ class: (yt = e.pt) == null ? void 0 : yt.optionSelected }),
        optionActive: s.optionActive({ class: (ht = e.pt) == null ? void 0 : ht.optionActive }),
        optionDisabled: s.optionDisabled({ class: (wt = e.pt) == null ? void 0 : wt.optionDisabled }),
        icon: s.icon({ class: (xt = e.pt) == null ? void 0 : xt.icon }),
        clearIcon: s.clearIcon({ class: (kt = e.pt) == null ? void 0 : kt.clearIcon }),
        checkIcon: s.checkIcon({ class: (Ct = e.pt) == null ? void 0 : Ct.checkIcon }),
        search: s.search({ class: (St = e.pt) == null ? void 0 : St.search }),
        tag: s.tag({ class: (zt = e.pt) == null ? void 0 : zt.tag }),
        tagRemove: s.tagRemove({ class: (Bt = e.pt) == null ? void 0 : Bt.tagRemove }),
        noMatch: s.noMatch({ class: (Vt = e.pt) == null ? void 0 : Vt.noMatch })
      };
    }), b = `versa-select-dropdown-${Math.random().toString(36).substring(2, 9)}`, n = H(null), {
      isOpen: d,
      searchValue: p,
      activeIndex: C,
      triggerRef: m,
      dropdownRef: i,
      selectedValues: v,
      selectedOptions: w,
      getOptionLabel: c,
      filteredOptions: u,
      groupedOptions: f,
      selectOption: x,
      clearSelection: D,
      toggleDropdown: M,
      openDropdown: B,
      closeDropdown: T,
      isSelected: V,
      onKeyDown: A,
      onSearchInput: O,
      cleanup: L
    } = sr({
      modelValue: e.modelValue,
      options: e.options,
      multiple: e.multiple,
      filterable: e.filterable,
      disabled: e.disabled,
      readonly: e.readonly,
      onChange: (E) => {
        o("update:modelValue", E), o("change", E), (E === void 0 || Array.isArray(E) && E.length === 0) && o("clear");
      },
      onSearch: (E) => {
        o("search", E);
      },
      onDropdownVisibleChange: (E) => {
        o("dropdown-visible-change", E), E && e.filterable && setTimeout(() => {
          var I;
          (I = n.value) == null || I.focus();
        }, 0);
      }
    }), P = h(() => Object.keys(f.value.groups).length > 0), W = (E, I) => {
      let G = 0;
      if (E === null)
        return I;
      G += f.value.noGroup.length;
      const j = Object.keys(f.value.groups);
      for (let K = 0; K < j.length; K++) {
        const U = j[K];
        if (U === E)
          return G + I;
        G += f.value.groups[U].length;
      }
      return -1;
    }, k = (E) => {
      O(E.target.value);
    };
    return Ve(() => {
      L();
    }), a({
      open: B,
      close: T,
      clear: D
    }), (E, I) => {
      var G;
      return S(), z("div", {
        class: g(r.value.root)
      }, [
        e.showLabel && e.label ? (S(), z("label", {
          key: 0,
          class: g(
            ((G = e.pt) == null ? void 0 : G.label) || "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          )
        }, [
          pe(X(e.label) + " ", 1),
          e.required ? (S(), z("span", dr, "*")) : N("", !0)
        ], 2)) : N("", !0),
        $("div", {
          ref_key: "triggerRef",
          ref: m,
          class: g(r.value.trigger),
          onClick: I[1] || (I[1] = (j) => !e.disabled && !e.readonly && y(M)()),
          onKeydown: I[2] || (I[2] = //@ts-ignore
          (...j) => y(A) && y(A)(...j)),
          tabindex: "0",
          role: "combobox",
          "aria-expanded": y(d),
          "aria-disabled": e.disabled,
          "aria-readonly": e.readonly,
          "aria-required": e.required,
          "aria-haspopup": !0,
          "aria-controls": b
        }, [
          $("div", {
            class: g(r.value.value)
          }, [
            e.multiple && y(w).length ? (S(), z("div", cr, [
              (S(!0), z(re, null, de(y(w), (j) => (S(), z("div", {
                key: j.value,
                class: g(r.value.tag)
              }, [
                $("span", fr, X(j.label), 1),
                !e.disabled && !e.readonly ? (S(), z("button", {
                  key: 0,
                  type: "button",
                  class: g(r.value.tagRemove),
                  onClick: ke((K) => y(x)(j), ["stop"]),
                  "aria-label": "移除"
                }, I[4] || (I[4] = [
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
                ]), 10, pr)) : N("", !0)
              ], 2))), 128))
            ])) : y(w).length ? (S(), z("div", br, X(y(c)), 1)) : (S(), z("div", {
              key: 2,
              class: g(r.value.placeholder)
            }, X(e.placeholder), 3))
          ], 2),
          $("div", gr, [
            e.clearable && y(v).length && !e.disabled && !e.readonly ? (S(), z("button", {
              key: 0,
              type: "button",
              class: g(r.value.clearIcon),
              onClick: I[0] || (I[0] = ke(
                //@ts-ignore
                (...j) => y(D) && y(D)(...j),
                ["stop"]
              )),
              "aria-label": "清除选择"
            }, I[5] || (I[5] = [
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
            ]), 2)) : N("", !0),
            $("div", {
              class: g(r.value.icon)
            }, [
              (S(), z("svg", {
                viewBox: "0 0 24 24",
                width: "16",
                height: "16",
                stroke: "currentColor",
                "stroke-width": "2",
                fill: "none",
                style: ue({ transform: y(d) ? "rotate(180deg)" : void 0 }),
                class: "transition-transform duration-200"
              }, I[6] || (I[6] = [
                $("polyline", { points: "6 9 12 15 18 9" }, null, -1)
              ]), 4))
            ], 2)
          ])
        ], 42, ur),
        Ue(Lt, { name: "versa-select-dropdown" }, {
          default: ft(() => [
            y(d) ? (S(), z("div", {
              key: 0,
              ref_key: "dropdownRef",
              ref: i,
              id: b,
              class: g(r.value.dropdown),
              style: ue({ maxHeight: `${e.maxDropdownHeight}px` }),
              role: "listbox",
              "aria-multiselectable": e.multiple
            }, [
              e.filterable ? (S(), z("div", mr, [
                $("input", {
                  ref_key: "searchInputRef",
                  ref: n,
                  class: g(r.value.search),
                  type: "text",
                  value: y(p),
                  onInput: k,
                  placeholder: "搜索...",
                  onKeydown: I[3] || (I[3] = ke(() => {
                  }, ["stop"]))
                }, null, 42, yr)
              ])) : N("", !0),
              $("div", null, [
                P.value ? (S(), z(re, { key: 1 }, [
                  y(f).noGroup.length ? (S(!0), z(re, { key: 0 }, de(y(f).noGroup, (j, K) => (S(), z("div", {
                    key: j.value,
                    class: g([
                      r.value.option,
                      {
                        [r.value.optionSelected]: y(V)(j.value),
                        [r.value.optionActive]: y(C) === K,
                        [r.value.optionDisabled]: j.disabled
                      }
                    ]),
                    onClick: ke((U) => !j.disabled && y(x)(j), ["stop"]),
                    role: "option",
                    "aria-selected": y(V)(j.value),
                    "aria-disabled": j.disabled
                  }, [
                    pe(X(j.label) + " ", 1),
                    y(V)(j.value) ? (S(), z("svg", {
                      key: 0,
                      class: g(r.value.checkIcon),
                      viewBox: "0 0 24 24",
                      width: "16",
                      height: "16",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      fill: "none"
                    }, I[8] || (I[8] = [
                      $("polyline", { points: "20 6 9 17 4 12" }, null, -1)
                    ]), 2)) : N("", !0)
                  ], 10, wr))), 128)) : N("", !0),
                  (S(!0), z(re, null, de(y(f).groups, (j, K) => (S(), z(re, { key: K }, [
                    $("div", xr, X(K), 1),
                    (S(!0), z(re, null, de(j, (U, oe) => (S(), z("div", {
                      key: U.value,
                      class: g([
                        r.value.option,
                        "pl-5",
                        {
                          [r.value.optionSelected]: y(V)(U.value),
                          [r.value.optionActive]: W(K, oe) === y(C),
                          [r.value.optionDisabled]: U.disabled
                        }
                      ]),
                      onClick: ke((F) => !U.disabled && y(x)(U), ["stop"]),
                      role: "option",
                      "aria-selected": y(V)(U.value),
                      "aria-disabled": U.disabled
                    }, [
                      pe(X(U.label) + " ", 1),
                      y(V)(U.value) ? (S(), z("svg", {
                        key: 0,
                        class: g(r.value.checkIcon),
                        viewBox: "0 0 24 24",
                        width: "16",
                        height: "16",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        fill: "none"
                      }, I[9] || (I[9] = [
                        $("polyline", { points: "20 6 9 17 4 12" }, null, -1)
                      ]), 2)) : N("", !0)
                    ], 10, kr))), 128))
                  ], 64))), 128))
                ], 64)) : (S(), z(re, { key: 0 }, [
                  y(u).length ? (S(!0), z(re, { key: 0 }, de(y(u), (j, K) => (S(), z("div", {
                    key: j.value,
                    class: g([
                      r.value.option,
                      {
                        [r.value.optionSelected]: y(V)(j.value),
                        [r.value.optionActive]: y(C) === K,
                        [r.value.optionDisabled]: j.disabled
                      }
                    ]),
                    onClick: ke((U) => !j.disabled && y(x)(j), ["stop"]),
                    role: "option",
                    "aria-selected": y(V)(j.value),
                    "aria-disabled": j.disabled
                  }, [
                    pe(X(j.label) + " ", 1),
                    y(V)(j.value) ? (S(), z("svg", {
                      key: 0,
                      class: g(r.value.checkIcon),
                      viewBox: "0 0 24 24",
                      width: "16",
                      height: "16",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      fill: "none"
                    }, I[7] || (I[7] = [
                      $("polyline", { points: "20 6 9 17 4 12" }, null, -1)
                    ]), 2)) : N("", !0)
                  ], 10, hr))), 128)) : (S(), z("div", {
                    key: 1,
                    class: g(r.value.noMatch)
                  }, X(e.noMatchText), 3))
                ], 64))
              ])
            ], 14, vr)) : N("", !0)
          ]),
          _: 1
        }),
        e.helpText && !e.errorText ? (S(), z("div", Cr, X(e.helpText), 1)) : N("", !0),
        e.errorText ? (S(), z("div", Sr, X(e.errorText), 1)) : N("", !0)
      ], 2);
    };
  }
}), Br = Q(zr);
function Vr(l) {
  const a = H(l.modelValue ?? 0), t = H(-1), e = H(!1);
  return ee(
    () => l.modelValue,
    (n) => {
      n !== void 0 && (a.value = n);
    }
  ), {
    currentValue: a,
    hoverValue: t,
    isHovering: e,
    getStarValue: (n) => {
      const d = e.value ? t.value : a.value;
      return l.allowHalf ? d >= n + 1 ? 1 : d >= n + 0.5 ? 0.5 : 0 : d >= n + 1 ? 1 : 0;
    },
    handleClick: (n, d) => {
      var C;
      if (l.disabled || l.readonly) return;
      let p;
      l.allowHalf && d ? p = n + 0.5 : p = n + 1, p === a.value && (p = 0), a.value = p, (C = l.onChange) == null || C.call(l, p);
    },
    handleMouseMove: (n, d) => {
      var p;
      if (!(l.disabled || l.readonly)) {
        if (e.value = !0, l.allowHalf) {
          const m = n.currentTarget.getBoundingClientRect(), i = n.clientX - m.left < m.width / 2;
          t.value = i ? d + 0.5 : d + 1;
        } else
          t.value = d + 1;
        (p = l.onHoverChange) == null || p.call(l, t.value);
      }
    },
    handleMouseLeave: () => {
      var n;
      l.disabled || l.readonly || (e.value = !1, t.value = -1, (n = l.onHoverChange) == null || n.call(l, a.value));
    }
  };
}
const $r = R({
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
}), Ir = R({
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
}), Dr = R({
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
}), Mr = R({
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
}), Tr = R({
  base: "text-gray-300 dark:text-gray-600"
}), Rr = R({
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
}), Er = {
  "update:modelValue": (l) => typeof l == "number",
  change: (l) => typeof l == "number",
  "hover-change": (l) => typeof l == "number"
}, Lr = ["onClick", "onMousemove", "aria-checked", "aria-disabled", "aria-readonly", "tabindex"], Or = /* @__PURE__ */ J({
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
  emits: Er,
  setup(l, { emit: a }) {
    const t = l, e = a, {
      currentValue: o,
      getStarValue: s,
      handleClick: r,
      handleMouseMove: b,
      handleMouseLeave: n
    } = Vr({
      modelValue: t.modelValue,
      max: t.max,
      allowHalf: t.allowHalf,
      readonly: t.readonly,
      disabled: t.disabled,
      onChange: (c) => {
        e("update:modelValue", c), e("change", c);
      },
      onHoverChange: (c) => {
        e("hover-change", c);
      }
    }), d = h(() => {
      var c, u;
      return t.unstyled ? ((c = t.pt) == null ? void 0 : c.container) || "" : $r({
        disabled: t.disabled,
        class: (u = t.pt) == null ? void 0 : u.container
      });
    }), p = h(() => {
      var c, u;
      return t.unstyled ? ((c = t.pt) == null ? void 0 : c.item) || "" : Ir({
        size: t.size,
        disabled: t.disabled,
        readonly: t.readonly,
        class: (u = t.pt) == null ? void 0 : u.item
      });
    }), C = h(() => {
      var c, u;
      return t.unstyled ? ((c = t.pt) == null ? void 0 : c.score) || "" : Dr({
        size: t.size,
        class: (u = t.pt) == null ? void 0 : u.score
      });
    }), m = h(() => {
      var c, u;
      return t.unstyled ? ((c = t.pt) == null ? void 0 : c.fullStar) || "absolute inset-0 overflow-hidden w-full" : Mr({
        color: t.color,
        class: (u = t.pt) == null ? void 0 : u.fullStar
      }) + " w-full";
    }), i = h(() => {
      var c, u;
      return t.unstyled ? ((c = t.pt) == null ? void 0 : c.halfStar) || "absolute inset-0 overflow-hidden w-1/2" : Rr({
        color: t.color,
        class: (u = t.pt) == null ? void 0 : u.halfStar
      }) + " w-1/2";
    }), v = h(() => {
      var c, u;
      return t.unstyled ? ((c = t.pt) == null ? void 0 : c.voidStar) || "" : Tr({
        class: (u = t.pt) == null ? void 0 : u.voidStar
      });
    }), w = (c) => t.formatTooltip ? t.formatTooltip(c) : c.toString();
    return (c, u) => (S(), z("div", {
      class: g(d.value),
      onMouseleave: u[0] || (u[0] = //@ts-ignore
      (...f) => y(n) && y(n)(...f)),
      role: "radiogroup",
      "aria-label": "评分"
    }, [
      (S(!0), z(re, null, de(c.max, (f) => (S(), z("div", {
        key: f,
        class: g(p.value),
        onClick: (x) => y(r)(f - 1, !1),
        onMousemove: (x) => y(b)(x, f - 1),
        role: "radio",
        "aria-checked": y(s)(f - 1) > 0,
        "aria-disabled": c.disabled,
        "aria-readonly": c.readonly,
        tabindex: c.disabled ? -1 : 0
      }, [
        $("span", {
          class: g(v.value)
        }, [
          Y(c.$slots, "character", {}, () => [
            pe(X(c.character || "★"), 1)
          ], !0)
        ], 2),
        y(s)(f - 1) === 1 ? (S(), z("span", {
          key: 0,
          class: g(m.value)
        }, [
          Y(c.$slots, "character", {}, () => [
            pe(X(c.character || "★"), 1)
          ], !0)
        ], 2)) : y(s)(f - 1) === 0.5 ? (S(), z("span", {
          key: 1,
          class: g(i.value)
        }, [
          Y(c.$slots, "character", {}, () => [
            pe(X(c.character || "★"), 1)
          ], !0)
        ], 2)) : N("", !0)
      ], 42, Lr))), 128)),
      c.showScore ? (S(), z("span", {
        key: 0,
        class: g(C.value)
      }, X(w(y(o))), 3)) : N("", !0)
    ], 34));
  }
}), Ar = /* @__PURE__ */ qt(Or, [["__scopeId", "data-v-ae42a8b5"]]), Pr = Q(Ar), jr = (l, a) => {
  const t = H(l.modelValue || /* @__PURE__ */ new Date()), e = H(t.value.getMonth()), o = H(t.value.getFullYear()), s = h(() => {
    const C = l.locale || "default", m = l.firstDayOfWeek || 0, i = [];
    for (let v = 0; v < 7; v++) {
      const w = (v + m) % 7;
      i.push(
        new Intl.DateTimeFormat(C, { weekday: "short" }).format(
          new Date(2021, 0, w + 3)
          // 2021-01-03 is a Sunday
        )
      );
    }
    return i;
  }), r = h(() => {
    const C = o.value, m = e.value, i = new Date(C, m, 1).getDay(), v = new Date(C, m + 1, 0).getDate(), w = l.firstDayOfWeek || 0, c = [], u = new Date(C, m, 0).getDate(), f = (i - w + 7) % 7;
    for (let M = u - f + 1; M <= u; M++)
      c.push({
        date: new Date(C, m - 1, M),
        day: M,
        isCurrentMonth: !1,
        isToday: !1,
        isSelected: !1,
        isDisabled: !1
      });
    const x = /* @__PURE__ */ new Date();
    for (let M = 1; M <= v; M++) {
      const B = new Date(C, m, M), T = x.getDate() === M && x.getMonth() === m && x.getFullYear() === C, V = l.modelValue && l.modelValue.getDate() === M && l.modelValue.getMonth() === m && l.modelValue.getFullYear() === C, A = l.disabled || l.min && B < l.min || l.max && B > l.max;
      c.push({
        date: B,
        day: M,
        isCurrentMonth: !0,
        isToday: T,
        isSelected: V,
        isDisabled: A
      });
    }
    const D = 42 - c.length;
    for (let M = 1; M <= D; M++)
      c.push({
        date: new Date(C, m + 1, M),
        day: M,
        isCurrentMonth: !1,
        isToday: !1,
        isSelected: !1,
        isDisabled: !1
      });
    return c;
  }), b = h(() => {
    const C = l.locale || "default";
    return new Intl.DateTimeFormat(C, { month: "long" }).format(
      new Date(o.value, e.value)
    );
  }), n = () => {
    e.value === 0 ? (e.value = 11, o.value--) : e.value--;
  }, d = () => {
    e.value === 11 ? (e.value = 0, o.value++) : e.value++;
  }, p = (C) => {
    l.disabled || l.readonly || l.min && C < l.min || l.max && C > l.max || (t.value = C, a("update:modelValue", C), a("change", C));
  };
  return ee(
    () => l.modelValue,
    (C) => {
      C && (t.value = C, e.value = C.getMonth(), o.value = C.getFullYear());
    }
  ), {
    currentDate: t,
    currentMonth: e,
    currentYear: o,
    weekdays: s,
    daysInMonth: r,
    monthName: b,
    prevMonth: n,
    nextMonth: d,
    selectDate: p
  };
}, Wr = R({
  base: "w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), Fr = R({
  base: "flex items-center justify-between mb-4"
}), Hr = R({
  base: "text-lg font-medium"
}), Gr = R({
  base: "flex items-center space-x-1"
}), Nr = R({
  base: "p-1 rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
}), Kr = R({
  base: "grid grid-cols-7 mb-1"
}), Yr = R({
  base: "text-center text-sm font-medium text-gray-500 py-2"
}), Ur = R({
  base: "grid grid-cols-7 gap-1"
}), Se = R({
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
}), Xr = {
  "update:modelValue": (l) => l === null || l instanceof Date,
  change: (l) => l === null || l instanceof Date
}, _r = ["disabled"], qr = ["disabled"], Zr = ["onClick", "disabled"], Jr = /* @__PURE__ */ J({
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
  emits: Xr,
  setup(l, { emit: a }) {
    const t = a, e = l, {
      currentYear: o,
      weekdays: s,
      daysInMonth: r,
      monthName: b,
      prevMonth: n,
      nextMonth: d,
      selectDate: p
    } = jr(e, t), C = h(() => {
      var m, i, v, w, c, u, f, x, D, M, B, T, V, A, O, L, P, W, k, E, I, G, j, K, U, oe;
      return {
        root: e.unstyled ? ((m = e.pt) == null ? void 0 : m.root) || "" : Wr({ unstyled: e.unstyled, class: (i = e.pt) == null ? void 0 : i.root }),
        header: e.unstyled ? ((v = e.pt) == null ? void 0 : v.header) || "" : Fr({ class: (w = e.pt) == null ? void 0 : w.header }),
        title: e.unstyled ? ((c = e.pt) == null ? void 0 : c.title) || "" : Hr({ class: (u = e.pt) == null ? void 0 : u.title }),
        navigation: e.unstyled ? ((f = e.pt) == null ? void 0 : f.navigation) || "" : Gr({ class: (x = e.pt) == null ? void 0 : x.navigation }),
        navButton: e.unstyled ? ((D = e.pt) == null ? void 0 : D.navButton) || "" : Nr({ class: (M = e.pt) == null ? void 0 : M.navButton }),
        weekdays: e.unstyled ? ((B = e.pt) == null ? void 0 : B.weekdays) || "" : Kr({ class: (T = e.pt) == null ? void 0 : T.weekdays }),
        weekday: e.unstyled ? ((V = e.pt) == null ? void 0 : V.weekday) || "" : Yr({ class: (A = e.pt) == null ? void 0 : A.weekday }),
        days: e.unstyled ? ((O = e.pt) == null ? void 0 : O.days) || "" : Ur({ class: (L = e.pt) == null ? void 0 : L.days }),
        day: e.unstyled ? ((P = e.pt) == null ? void 0 : P.day) || "" : Se({ class: (W = e.pt) == null ? void 0 : W.day }),
        today: e.unstyled ? ((k = e.pt) == null ? void 0 : k.today) || "" : Se({ isToday: !0, class: (E = e.pt) == null ? void 0 : E.today }).split(" ").filter((F) => !Se().includes(F)).join(" "),
        selected: e.unstyled ? ((I = e.pt) == null ? void 0 : I.selected) || "" : Se({ isSelected: !0, class: (G = e.pt) == null ? void 0 : G.selected }).split(" ").filter((F) => !Se().includes(F)).join(" "),
        disabled: e.unstyled ? ((j = e.pt) == null ? void 0 : j.disabled) || "" : Se({ isDisabled: !0, class: (K = e.pt) == null ? void 0 : K.disabled }).split(" ").filter((F) => !Se().includes(F)).join(" "),
        adjacent: e.unstyled ? ((U = e.pt) == null ? void 0 : U.adjacent) || "" : Se({ isAdjacent: !0, class: (oe = e.pt) == null ? void 0 : oe.adjacent }).split(" ").filter((F) => !Se().includes(F)).join(" ")
      };
    });
    return (m, i) => (S(), z("div", {
      class: g(C.value.root)
    }, [
      $("div", {
        class: g(C.value.header)
      }, [
        $("div", {
          class: g(C.value.title)
        }, X(y(b)) + " " + X(y(o)), 3),
        $("div", {
          class: g(C.value.navigation)
        }, [
          $("button", {
            class: g(C.value.navButton),
            onClick: i[0] || (i[0] = //@ts-ignore
            (...v) => y(n) && y(n)(...v)),
            disabled: m.disabled || m.readonly
          }, i[2] || (i[2] = [
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
          ]), 10, _r),
          $("button", {
            class: g(C.value.navButton),
            onClick: i[1] || (i[1] = //@ts-ignore
            (...v) => y(d) && y(d)(...v)),
            disabled: m.disabled || m.readonly
          }, i[3] || (i[3] = [
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
          ]), 10, qr)
        ], 2)
      ], 2),
      $("div", {
        class: g(C.value.weekdays)
      }, [
        (S(!0), z(re, null, de(y(s), (v, w) => (S(), z("div", {
          key: w,
          class: g(C.value.weekday)
        }, X(v), 3))), 128))
      ], 2),
      $("div", {
        class: g(C.value.days)
      }, [
        (S(!0), z(re, null, de(y(r), (v, w) => (S(), z("button", {
          key: w,
          class: g([
            C.value.day,
            v.isToday ? C.value.today : "",
            v.isSelected ? C.value.selected : "",
            v.isDisabled ? C.value.disabled : "",
            v.isCurrentMonth ? "" : C.value.adjacent
          ]),
          onClick: (c) => y(p)(v.date),
          disabled: v.isDisabled || m.disabled || m.readonly
        }, X(v.day), 11, Zr))), 128))
      ], 2)
    ], 2));
  }
}), gt = Q(Jr), Qr = (l, a) => {
  const t = H(!1), e = H(null), o = H(null), s = H(null), r = H(null), b = H(null), n = H(null), d = h(() => {
    let k = 0, E = 0, I = 0;
    if (l.modelValue) {
      if (l.modelValue instanceof Date)
        k = l.modelValue.getHours(), E = l.modelValue.getMinutes(), I = l.modelValue.getSeconds();
      else if (typeof l.modelValue == "string") {
        const G = l.modelValue.split(":");
        k = parseInt(G[0]) || 0, E = parseInt(G[1]) || 0, I = G[2] ? parseInt(G[2]) : 0;
      }
    }
    return { hours: k, minutes: E, seconds: I };
  }), p = H(d.value.hours), C = H(d.value.minutes), m = H(d.value.seconds), i = H(d.value.hours >= 12 ? "pm" : "am"), v = h(() => {
    const k = [], E = l.hourStep || 1, I = l.format === "12h", G = I ? 1 : 0, j = I ? 12 : 23;
    for (let K = G; K <= j; K += E)
      k.push(K);
    return k;
  }), w = h(() => {
    const k = [], E = l.minuteStep || 1;
    for (let I = 0; I <= 59; I += E)
      k.push(I);
    return k;
  }), c = h(() => {
    const k = [], E = l.secondStep || 1;
    for (let I = 0; I <= 59; I += E)
      k.push(I);
    return k;
  }), u = h(() => {
    if (!l.modelValue) return "";
    try {
      if (l.modelValue instanceof Date) {
        const k = {
          hour: "numeric",
          minute: "2-digit"
        };
        return l.showSeconds && (k.second = "2-digit"), l.format === "12h" ? k.hour12 = !0 : k.hour12 = !1, new Intl.DateTimeFormat("default", k).format(
          l.modelValue
        );
      } else
        return l.modelValue;
    } catch (k) {
      return console.error("Time formatting error:", k), l.modelValue instanceof Date ? l.modelValue.toLocaleTimeString() : l.modelValue;
    }
  }), f = () => {
    l.disabled || l.readonly || (t.value = !t.value, t.value && (p.value = d.value.hours, C.value = d.value.minutes, m.value = d.value.seconds, i.value = d.value.hours >= 12 ? "pm" : "am", setTimeout(() => {
      D();
    }, 50)));
  }, x = () => {
    t.value = !1;
  }, D = () => {
    const k = (E, I) => {
      if (!E) return;
      const j = E.querySelectorAll("div")[I];
      j && (E.scrollTop = j.offsetTop - E.offsetHeight / 2 + j.offsetHeight / 2);
    };
    if (l.format === "12h") {
      const E = p.value > 12 ? p.value - 12 : p.value === 0 ? 12 : p.value;
      k(s.value, v.value.indexOf(E));
    } else
      k(s.value, v.value.indexOf(p.value));
    k(
      r.value,
      w.value.indexOf(C.value)
    ), l.showSeconds && b.value && k(
      b.value,
      c.value.indexOf(m.value)
    ), l.format === "12h" && n.value && k(n.value, i.value === "am" ? 0 : 1);
  }, M = () => {
    let k = p.value;
    l.format === "12h" && (i.value === "pm" && k < 12 ? k += 12 : i.value === "am" && k === 12 && (k = 0));
    let E;
    if (l.modelValue instanceof Date) {
      const I = new Date(l.modelValue);
      I.setHours(k), I.setMinutes(C.value), I.setSeconds(l.showSeconds ? m.value : 0), E = I;
    } else {
      const I = k.toString().padStart(2, "0"), G = C.value.toString().padStart(2, "0");
      if (l.showSeconds) {
        const j = m.value.toString().padStart(2, "0");
        E = `${I}:${G}:${j}`;
      } else
        E = `${I}:${G}`;
    }
    a("update:modelValue", E), a("change", E);
  }, B = (k) => {
    p.value = k, M();
  }, T = (k) => {
    C.value = k, M();
  }, V = (k) => {
    m.value = k, M();
  }, A = (k) => {
    i.value = k, M();
  }, O = (k) => {
    k.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, L = (k) => {
    a("focus", k);
  }, P = (k) => {
    a("blur", k);
  }, W = (k) => {
    t.value && e.value && o.value && !e.value.contains(k.target) && !o.value.contains(k.target) && x();
  };
  return me(() => {
    document.addEventListener("mousedown", W);
  }), Ve(() => {
    document.removeEventListener("mousedown", W);
  }), ee(
    () => l.modelValue,
    (k) => {
      k ? (p.value = d.value.hours, C.value = d.value.minutes, m.value = d.value.seconds, i.value = d.value.hours >= 12 ? "pm" : "am") : x();
    }
  ), {
    isOpen: t,
    inputRef: e,
    dropdownRef: o,
    hourRef: s,
    minuteRef: r,
    secondRef: b,
    ampmRef: n,
    formattedValue: u,
    hourList: v,
    minuteList: w,
    secondList: c,
    selectedHour: p,
    selectedMinute: C,
    selectedSecond: m,
    selectedAmPm: i,
    toggleDropdown: f,
    closeDropdown: x,
    selectHour: B,
    selectMinute: T,
    selectSecond: V,
    selectAmPm: A,
    handleClear: O,
    handleFocus: L,
    handleBlur: P
  };
}, en = R({
  base: "relative w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), tn = R({
  base: "relative flex items-center"
}), ln = R({
  base: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    error: {
      true: "border-red-500 focus:ring-red-500"
    }
  }
}), an = R({
  base: "absolute right-3 text-gray-400 hover:text-gray-500 cursor-pointer"
}), on = R({
  base: "absolute z-50 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 p-4"
}), rn = R({
  base: "flex space-x-2 h-52 overflow-hidden"
}), nn = R({
  base: "flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
}), lt = R({
  base: "py-2 px-3 text-center cursor-pointer hover:bg-gray-100 rounded-md",
  variants: {
    selected: {
      true: "bg-blue-100 text-blue-700 font-medium"
    }
  }
}), sn = {
  "update:modelValue": (l) => l === null || typeof l == "string" || l instanceof Date,
  change: (l) => l === null || typeof l == "string" || l instanceof Date,
  focus: (l) => l instanceof FocusEvent,
  blur: (l) => l instanceof FocusEvent,
  clear: () => !0
}, dn = ["value", "placeholder", "disabled"], un = ["onClick"], cn = ["onClick"], fn = ["onClick"], pn = /* @__PURE__ */ J({
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
  emits: sn,
  setup(l, { emit: a }) {
    const t = a, e = l, {
      isOpen: o,
      inputRef: s,
      dropdownRef: r,
      hourRef: b,
      minuteRef: n,
      secondRef: d,
      ampmRef: p,
      formattedValue: C,
      hourList: m,
      minuteList: i,
      secondList: v,
      selectedHour: w,
      selectedMinute: c,
      selectedSecond: u,
      selectedAmPm: f,
      toggleDropdown: x,
      selectHour: D,
      selectMinute: M,
      selectSecond: B,
      selectAmPm: T,
      handleClear: V,
      handleFocus: A,
      handleBlur: O
    } = Qr(e, t), L = h(() => {
      var P, W, k, E, I, G, j, K, U, oe, F, Z, le, te, ne, ie, ce, ge;
      return {
        root: e.unstyled ? ((P = e.pt) == null ? void 0 : P.root) || "" : en({ unstyled: e.unstyled, class: (W = e.pt) == null ? void 0 : W.root }),
        inputWrapper: e.unstyled ? ((k = e.pt) == null ? void 0 : k.inputWrapper) || "" : tn({ class: (E = e.pt) == null ? void 0 : E.inputWrapper }),
        input: e.unstyled ? ((I = e.pt) == null ? void 0 : I.input) || "" : ln({ class: (G = e.pt) == null ? void 0 : G.input }),
        clearButton: e.unstyled ? ((j = e.pt) == null ? void 0 : j.clearButton) || "" : an({ class: (K = e.pt) == null ? void 0 : K.clearButton }),
        dropdown: e.unstyled ? ((U = e.pt) == null ? void 0 : U.dropdown) || "" : on({ class: (oe = e.pt) == null ? void 0 : oe.dropdown }),
        timeSelector: e.unstyled ? ((F = e.pt) == null ? void 0 : F.timeSelector) || "" : rn({ class: (Z = e.pt) == null ? void 0 : Z.timeSelector }),
        column: e.unstyled ? ((le = e.pt) == null ? void 0 : le.column) || "" : nn({ class: (te = e.pt) == null ? void 0 : te.column }),
        item: e.unstyled ? ((ne = e.pt) == null ? void 0 : ne.item) || "" : lt({ class: (ie = e.pt) == null ? void 0 : ie.item }),
        itemSelected: e.unstyled ? ((ce = e.pt) == null ? void 0 : ce.itemSelected) || "" : lt({ selected: !0, class: (ge = e.pt) == null ? void 0 : ge.itemSelected }).split(" ").filter((fe) => !lt().includes(fe)).join(" ")
      };
    });
    return (P, W) => (S(), z("div", {
      class: g(L.value.root)
    }, [
      $("div", {
        class: g(L.value.inputWrapper),
        onClick: W[3] || (W[3] = //@ts-ignore
        (...k) => y(x) && y(x)(...k))
      }, [
        $("input", {
          ref_key: "inputRef",
          ref: s,
          type: "text",
          class: g(L.value.input),
          value: y(C),
          placeholder: P.placeholder,
          disabled: P.disabled,
          readonly: !0,
          onFocus: W[0] || (W[0] = //@ts-ignore
          (...k) => y(A) && y(A)(...k)),
          onBlur: W[1] || (W[1] = //@ts-ignore
          (...k) => y(O) && y(O)(...k))
        }, null, 42, dn),
        P.clearable && P.modelValue && !P.disabled && !P.readonly ? (S(), z("span", {
          key: 0,
          class: g(L.value.clearButton),
          onClick: W[2] || (W[2] = //@ts-ignore
          (...k) => y(V) && y(V)(...k))
        }, W[6] || (W[6] = [
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
        ]), 2)) : N("", !0)
      ], 2),
      y(o) ? (S(), z("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: r,
        class: g(L.value.dropdown)
      }, [
        $("div", {
          class: g(L.value.timeSelector)
        }, [
          $("div", {
            ref_key: "hourRef",
            ref: b,
            class: g(L.value.column)
          }, [
            (S(!0), z(re, null, de(y(m), (k) => (S(), z("div", {
              key: `hour-${k}`,
              class: g([
                L.value.item,
                (P.format === "12h" ? (y(w) > 12 ? y(w) - 12 : y(w) === 0 ? 12 : y(w)) === k : y(w) === k) ? L.value.itemSelected : ""
              ]),
              onClick: (E) => y(D)(k)
            }, X(k.toString().padStart(2, "0")), 11, un))), 128))
          ], 2),
          $("div", {
            ref_key: "minuteRef",
            ref: n,
            class: g(L.value.column)
          }, [
            (S(!0), z(re, null, de(y(i), (k) => (S(), z("div", {
              key: `minute-${k}`,
              class: g([
                L.value.item,
                y(c) === k ? L.value.itemSelected : ""
              ]),
              onClick: (E) => y(M)(k)
            }, X(k.toString().padStart(2, "0")), 11, cn))), 128))
          ], 2),
          P.showSeconds ? (S(), z("div", {
            key: 0,
            ref_key: "secondRef",
            ref: d,
            class: g(L.value.column)
          }, [
            (S(!0), z(re, null, de(y(v), (k) => (S(), z("div", {
              key: `second-${k}`,
              class: g([
                L.value.item,
                y(u) === k ? L.value.itemSelected : ""
              ]),
              onClick: (E) => y(B)(k)
            }, X(k.toString().padStart(2, "0")), 11, fn))), 128))
          ], 2)) : N("", !0),
          P.format === "12h" ? (S(), z("div", {
            key: 1,
            ref_key: "ampmRef",
            ref: p,
            class: g(L.value.column)
          }, [
            $("div", {
              class: g([
                L.value.item,
                y(f) === "am" ? L.value.itemSelected : ""
              ]),
              onClick: W[4] || (W[4] = (k) => y(T)("am"))
            }, " AM ", 2),
            $("div", {
              class: g([
                L.value.item,
                y(f) === "pm" ? L.value.itemSelected : ""
              ]),
              onClick: W[5] || (W[5] = (k) => y(T)("pm"))
            }, " PM ", 2)
          ], 2)) : N("", !0)
        ], 2)
      ], 2)) : N("", !0)
    ], 2));
  }
}), Zt = Q(pn), bn = (l, a) => {
  const t = H(!1), e = H(null), o = H(null), s = h(() => {
    if (!l.modelValue) return "";
    try {
      const i = l.locale || "default", v = {};
      return l.format ? (l.format.includes("yyyy") && (v.year = "numeric"), l.format.includes("MM") ? v.month = "2-digit" : l.format.includes("M") && (v.month = "numeric"), l.format.includes("dd") ? v.day = "2-digit" : l.format.includes("d") && (v.day = "numeric"), Object.keys(v).length === 0 && (v.year = "numeric", v.month = "2-digit", v.day = "2-digit")) : (v.year = "numeric", v.month = "2-digit", v.day = "2-digit"), new Intl.DateTimeFormat(i, v).format(l.modelValue);
    } catch (i) {
      return console.error("Date formatting error:", i), l.modelValue.toLocaleDateString();
    }
  }), r = () => {
    l.disabled || l.readonly || (t.value = !t.value);
  }, b = () => {
    t.value = !1;
  }, n = (i) => {
    i === null ? (a("update:modelValue", null), a("change", null)) : (a("update:modelValue", i), a("change", i)), b();
  }, d = (i) => {
    i.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, p = (i) => {
    a("focus", i);
  }, C = (i) => {
    a("blur", i);
  }, m = (i) => {
    t.value && e.value && o.value && !e.value.contains(i.target) && !o.value.contains(i.target) && b();
  };
  return me(() => {
    document.addEventListener("mousedown", m);
  }), Ve(() => {
    document.removeEventListener("mousedown", m);
  }), ee(
    () => l.modelValue,
    (i) => {
      i || b();
    }
  ), {
    isOpen: t,
    inputRef: e,
    dropdownRef: o,
    formattedValue: s,
    toggleDropdown: r,
    closeDropdown: b,
    handleDateChange: n,
    handleClear: d,
    handleFocus: p,
    handleBlur: C
  };
}, gn = R({
  base: "relative w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), vn = R({
  base: "relative flex items-center"
}), mn = R({
  base: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    error: {
      true: "border-red-500 focus:ring-red-500"
    }
  }
}), yn = R({
  base: "absolute right-3 text-gray-400 hover:text-gray-500 cursor-pointer"
}), hn = R({
  base: "absolute z-50 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 p-4"
}), wn = {
  "update:modelValue": (l) => l === null || l instanceof Date,
  change: (l) => l === null || l instanceof Date,
  focus: (l) => l instanceof FocusEvent,
  blur: (l) => l instanceof FocusEvent,
  clear: () => !0
}, xn = ["value", "placeholder", "disabled"], kn = /* @__PURE__ */ J({
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
  emits: wn,
  setup(l, { emit: a }) {
    const t = a, e = l, {
      isOpen: o,
      inputRef: s,
      dropdownRef: r,
      formattedValue: b,
      toggleDropdown: n,
      handleDateChange: d,
      handleClear: p,
      handleFocus: C,
      handleBlur: m
    } = bn(e, t), i = h(() => {
      var v, w, c, u, f, x, D, M, B, T;
      return {
        root: e.unstyled ? ((v = e.pt) == null ? void 0 : v.root) || "" : gn({ unstyled: e.unstyled, class: (w = e.pt) == null ? void 0 : w.root }),
        inputWrapper: e.unstyled ? ((c = e.pt) == null ? void 0 : c.inputWrapper) || "" : vn({ class: (u = e.pt) == null ? void 0 : u.inputWrapper }),
        input: e.unstyled ? ((f = e.pt) == null ? void 0 : f.input) || "" : mn({ class: (x = e.pt) == null ? void 0 : x.input }),
        clearButton: e.unstyled ? ((D = e.pt) == null ? void 0 : D.clearButton) || "" : yn({ class: (M = e.pt) == null ? void 0 : M.clearButton }),
        dropdown: e.unstyled ? ((B = e.pt) == null ? void 0 : B.dropdown) || "" : hn({ class: (T = e.pt) == null ? void 0 : T.dropdown })
      };
    });
    return (v, w) => {
      var c;
      return S(), z("div", {
        class: g(i.value.root)
      }, [
        $("div", {
          class: g(i.value.inputWrapper),
          onClick: w[3] || (w[3] = //@ts-ignore
          (...u) => y(n) && y(n)(...u))
        }, [
          $("input", {
            ref_key: "inputRef",
            ref: s,
            type: "text",
            class: g(i.value.input),
            value: y(b),
            placeholder: v.placeholder,
            disabled: v.disabled,
            readonly: !0,
            onFocus: w[0] || (w[0] = //@ts-ignore
            (...u) => y(C) && y(C)(...u)),
            onBlur: w[1] || (w[1] = //@ts-ignore
            (...u) => y(m) && y(m)(...u))
          }, null, 42, xn),
          v.clearable && v.modelValue && !v.disabled && !v.readonly ? (S(), z("span", {
            key: 0,
            class: g(i.value.clearButton),
            onClick: w[2] || (w[2] = //@ts-ignore
            (...u) => y(p) && y(p)(...u))
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
          ]), 2)) : N("", !0)
        ], 2),
        y(o) ? (S(), z("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: r,
          class: g(i.value.dropdown)
        }, [
          Ue(y(gt), {
            modelValue: v.modelValue,
            min: v.min,
            max: v.max,
            disabled: v.disabled,
            readonly: v.readonly,
            firstDayOfWeek: v.firstDayOfWeek,
            locale: v.locale,
            pt: (c = v.pt) == null ? void 0 : c.calendar,
            "onUpdate:modelValue": y(d)
          }, null, 8, ["modelValue", "min", "max", "disabled", "readonly", "firstDayOfWeek", "locale", "pt", "onUpdate:modelValue"])
        ], 2)) : N("", !0)
      ], 2);
    };
  }
}), Cn = Q(kn), Sn = (l, a) => {
  const t = H(!1), e = H("date"), o = H(null), s = H(null), r = H(l.modelValue || /* @__PURE__ */ new Date()), b = h(() => {
    if (!l.modelValue) return "";
    try {
      const u = l.locale || "default", f = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "2-digit"
      };
      return l.showSeconds && (f.second = "2-digit"), l.timeFormat === "12h" ? f.hour12 = !0 : f.hour12 = !1, new Intl.DateTimeFormat(u, f).format(l.modelValue);
    } catch (u) {
      return console.error("DateTime formatting error:", u), l.modelValue.toLocaleString();
    }
  }), n = () => {
    l.disabled || l.readonly || (t.value = !t.value, t.value && (r.value = l.modelValue || /* @__PURE__ */ new Date()));
  }, d = () => {
    t.value = !1;
  }, p = (u) => {
    e.value = u;
  }, C = (u) => {
    if (!u) return;
    const f = new Date(r.value);
    f.setFullYear(u.getFullYear()), f.setMonth(u.getMonth()), f.setDate(u.getDate()), r.value = f, a("update:modelValue", f), a("change", f), p("time");
  }, m = (u) => {
    if (!u) return;
    const f = new Date(r.value);
    if (u instanceof Date)
      f.setHours(u.getHours()), f.setMinutes(u.getMinutes()), f.setSeconds(u.getSeconds());
    else if (typeof u == "string") {
      const x = u.split(":");
      x.length >= 2 && (f.setHours(parseInt(x[0]) || 0), f.setMinutes(parseInt(x[1]) || 0), x.length >= 3 && f.setSeconds(parseInt(x[2]) || 0));
    }
    r.value = f, a("update:modelValue", f), a("change", f), d();
  }, i = (u) => {
    u.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, v = (u) => {
    a("focus", u);
  }, w = (u) => {
    a("blur", u);
  }, c = (u) => {
    t.value && o.value && s.value && !o.value.contains(u.target) && !s.value.contains(u.target) && d();
  };
  return me(() => {
    document.addEventListener("mousedown", c);
  }), Ve(() => {
    document.removeEventListener("mousedown", c);
  }), ee(
    () => l.modelValue,
    (u) => {
      u ? r.value = u : d();
    }
  ), {
    isOpen: t,
    activeTab: e,
    inputRef: o,
    dropdownRef: s,
    currentDateTime: r,
    formattedValue: b,
    toggleDropdown: n,
    closeDropdown: d,
    switchTab: p,
    handleDateChange: C,
    handleTimeChange: m,
    handleClear: i,
    handleFocus: v,
    handleBlur: w
  };
}, zn = R({
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
}), Dn = R({
  base: "flex border-b mb-4"
}), at = R({
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
}), Mn = R({
  base: "mt-2"
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
  emits: Tn,
  setup(l, { emit: a }) {
    const t = a, e = l, {
      isOpen: o,
      activeTab: s,
      inputRef: r,
      dropdownRef: b,
      currentDateTime: n,
      formattedValue: d,
      toggleDropdown: p,
      switchTab: C,
      handleDateChange: m,
      handleTimeChange: i,
      handleClear: v,
      handleFocus: w,
      handleBlur: c
    } = Sn(e, t), u = h(() => {
      var f, x, D, M, B, T, V, A, O, L, P, W, k, E, I, G, j, K;
      return {
        root: e.unstyled ? ((f = e.pt) == null ? void 0 : f.root) || "" : zn({
          unstyled: e.unstyled,
          class: (x = e.pt) == null ? void 0 : x.root
        }),
        inputWrapper: e.unstyled ? ((D = e.pt) == null ? void 0 : D.inputWrapper) || "" : Bn({ class: (M = e.pt) == null ? void 0 : M.inputWrapper }),
        input: e.unstyled ? ((B = e.pt) == null ? void 0 : B.input) || "" : Vn({ class: (T = e.pt) == null ? void 0 : T.input }),
        clearButton: e.unstyled ? ((V = e.pt) == null ? void 0 : V.clearButton) || "" : $n({ class: (A = e.pt) == null ? void 0 : A.clearButton }),
        dropdown: e.unstyled ? ((O = e.pt) == null ? void 0 : O.dropdown) || "" : In({ class: (L = e.pt) == null ? void 0 : L.dropdown }),
        tabs: e.unstyled ? ((P = e.pt) == null ? void 0 : P.tabs) || "" : Dn({ class: (W = e.pt) == null ? void 0 : W.tabs }),
        tab: e.unstyled ? ((k = e.pt) == null ? void 0 : k.tab) || "" : at({ class: (E = e.pt) == null ? void 0 : E.tab }),
        activeTab: e.unstyled ? ((I = e.pt) == null ? void 0 : I.activeTab) || "" : at({ active: !0, class: (G = e.pt) == null ? void 0 : G.activeTab }).split(" ").filter((U) => !at().includes(U)).join(" "),
        tabContent: e.unstyled ? ((j = e.pt) == null ? void 0 : j.tabContent) || "" : Mn({ class: (K = e.pt) == null ? void 0 : K.tabContent })
      };
    });
    return (f, x) => {
      var D, M, B, T, V, A, O, L, P, W;
      return S(), z("div", {
        class: g(u.value.root)
      }, [
        $("div", {
          class: g(u.value.inputWrapper),
          onClick: x[3] || (x[3] = //@ts-ignore
          (...k) => y(p) && y(p)(...k))
        }, [
          $("input", {
            ref_key: "inputRef",
            ref: r,
            type: "text",
            class: g(u.value.input),
            value: y(d),
            placeholder: f.placeholder,
            disabled: f.disabled,
            readonly: !0,
            onFocus: x[0] || (x[0] = //@ts-ignore
            (...k) => y(w) && y(w)(...k)),
            onBlur: x[1] || (x[1] = //@ts-ignore
            (...k) => y(c) && y(c)(...k))
          }, null, 42, Rn),
          f.clearable && f.modelValue && !f.disabled && !f.readonly ? (S(), z("span", {
            key: 0,
            class: g(u.value.clearButton),
            onClick: x[2] || (x[2] = //@ts-ignore
            (...k) => y(v) && y(v)(...k))
          }, x[6] || (x[6] = [
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
          ]), 2)) : N("", !0)
        ], 2),
        y(o) ? (S(), z("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: b,
          class: g(u.value.dropdown)
        }, [
          $("div", {
            class: g(u.value.tabs)
          }, [
            $("div", {
              class: g([u.value.tab, y(s) === "date" ? u.value.activeTab : ""]),
              onClick: x[4] || (x[4] = (k) => y(C)("date"))
            }, " 日期 ", 2),
            $("div", {
              class: g([u.value.tab, y(s) === "time" ? u.value.activeTab : ""]),
              onClick: x[5] || (x[5] = (k) => y(C)("time"))
            }, " 时间 ", 2)
          ], 2),
          $("div", {
            class: g(u.value.tabContent)
          }, [
            Pe($("div", null, [
              Ue(y(gt), {
                modelValue: y(n),
                min: f.min,
                max: f.max,
                disabled: f.disabled,
                readonly: f.readonly,
                firstDayOfWeek: f.firstDayOfWeek,
                locale: f.locale,
                pt: (M = (D = f.pt) == null ? void 0 : D.datePicker) == null ? void 0 : M.calendar,
                "onUpdate:modelValue": y(m)
              }, null, 8, ["modelValue", "min", "max", "disabled", "readonly", "firstDayOfWeek", "locale", "pt", "onUpdate:modelValue"])
            ], 512), [
              [rt, y(s) === "date"]
            ]),
            Pe($("div", null, [
              Ue(y(Zt), {
                modelValue: y(n),
                disabled: f.disabled,
                readonly: f.readonly,
                format: f.timeFormat,
                hourStep: f.hourStep,
                minuteStep: f.minuteStep,
                secondStep: f.secondStep,
                showSeconds: f.showSeconds,
                pt: {
                  timeSelector: (T = (B = f.pt) == null ? void 0 : B.timePicker) == null ? void 0 : T.timeSelector,
                  column: (A = (V = f.pt) == null ? void 0 : V.timePicker) == null ? void 0 : A.column,
                  item: (L = (O = f.pt) == null ? void 0 : O.timePicker) == null ? void 0 : L.item,
                  itemSelected: (W = (P = f.pt) == null ? void 0 : P.timePicker) == null ? void 0 : W.itemSelected
                },
                "onUpdate:modelValue": y(i)
              }, null, 8, ["modelValue", "disabled", "readonly", "format", "hourStep", "minuteStep", "secondStep", "showSeconds", "pt", "onUpdate:modelValue"])
            ], 512), [
              [rt, y(s) === "time"]
            ])
          ], 2)
        ], 2)) : N("", !0)
      ], 2);
    };
  }
}), Ln = Q(En), On = (l, a) => {
  const t = H(!1), e = H(null), o = H(null), s = h(() => {
    if (l.options && l.options.length > 0)
      return l.options;
    const i = [], v = l.start || "00:00", w = l.end || "23:59", c = l.step || 30, [u, f] = v.split(":").map(Number), [x, D] = w.split(":").map(Number), M = u * 60 + f, B = x * 60 + D;
    for (let T = M; T <= B; T += c) {
      const V = Math.floor(T / 60), A = T % 60;
      if (l.format === "12h") {
        const O = V >= 12 ? "PM" : "AM", L = V === 0 ? 12 : V > 12 ? V - 12 : V;
        i.push(
          `${L.toString().padStart(2, "0")}:${A.toString().padStart(2, "0")} ${O}`
        );
      } else
        i.push(
          `${V.toString().padStart(2, "0")}:${A.toString().padStart(2, "0")}`
        );
    }
    return i;
  }), r = () => {
    l.disabled || l.readonly || (t.value = !t.value);
  }, b = () => {
    t.value = !1;
  }, n = (i) => {
    a("update:modelValue", i), a("change", i), b();
  }, d = (i) => {
    i.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, p = (i) => {
    a("focus", i);
  }, C = (i) => {
    a("blur", i);
  }, m = (i) => {
    t.value && e.value && o.value && !e.value.contains(i.target) && !o.value.contains(i.target) && b();
  };
  return me(() => {
    document.addEventListener("mousedown", m);
  }), Ve(() => {
    document.removeEventListener("mousedown", m);
  }), ee(
    () => l.modelValue,
    (i) => {
      i || b();
    }
  ), {
    isOpen: t,
    inputRef: e,
    dropdownRef: o,
    timeOptions: s,
    toggleDropdown: r,
    selectOption: n,
    handleClear: d,
    handleFocus: p,
    handleBlur: C
  };
}, An = R({
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
  base: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    error: {
      true: "border-red-500 focus:ring-red-500"
    }
  }
}), Wn = R({
  base: "absolute right-3 text-gray-400 hover:text-gray-500 cursor-pointer"
}), Fn = R({
  base: "absolute z-50 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200"
}), Hn = R({
  base: "max-h-60 overflow-auto py-1"
}), Ne = R({
  base: "px-3 py-2 text-sm cursor-pointer hover:bg-gray-100",
  variants: {
    selected: {
      true: "bg-blue-100 text-blue-700 font-medium"
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed hover:bg-transparent"
    }
  }
}), Gn = {
  "update:modelValue": (l) => l === null || typeof l == "string",
  change: (l) => l === null || typeof l == "string",
  focus: (l) => l instanceof FocusEvent,
  blur: (l) => l instanceof FocusEvent,
  clear: () => !0
}, Nn = ["value", "placeholder", "disabled"], Kn = ["onClick"], Yn = /* @__PURE__ */ J({
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
  emits: Gn,
  setup(l, { emit: a }) {
    const t = a, e = l, {
      isOpen: o,
      inputRef: s,
      dropdownRef: r,
      timeOptions: b,
      toggleDropdown: n,
      selectOption: d,
      handleClear: p,
      handleFocus: C,
      handleBlur: m
    } = On(e, t), i = h(() => {
      var v, w, c, u, f, x, D, M, B, T, V, A, O, L, P, W;
      return {
        root: e.unstyled ? ((v = e.pt) == null ? void 0 : v.root) || "" : An({ unstyled: e.unstyled, class: (w = e.pt) == null ? void 0 : w.root }),
        inputWrapper: e.unstyled ? ((c = e.pt) == null ? void 0 : c.inputWrapper) || "" : Pn({ class: (u = e.pt) == null ? void 0 : u.inputWrapper }),
        input: e.unstyled ? ((f = e.pt) == null ? void 0 : f.input) || "" : jn({ class: (x = e.pt) == null ? void 0 : x.input }),
        clearButton: e.unstyled ? ((D = e.pt) == null ? void 0 : D.clearButton) || "" : Wn({ class: (M = e.pt) == null ? void 0 : M.clearButton }),
        dropdown: e.unstyled ? ((B = e.pt) == null ? void 0 : B.dropdown) || "" : Fn({ class: (T = e.pt) == null ? void 0 : T.dropdown }),
        optionsList: e.unstyled ? ((V = e.pt) == null ? void 0 : V.optionsList) || "" : Hn({ class: (A = e.pt) == null ? void 0 : A.optionsList }),
        option: e.unstyled ? ((O = e.pt) == null ? void 0 : O.option) || "" : Ne({ class: (L = e.pt) == null ? void 0 : L.option }),
        optionSelected: e.unstyled ? ((P = e.pt) == null ? void 0 : P.optionSelected) || "" : Ne({
          selected: !0,
          class: (W = e.pt) == null ? void 0 : W.optionSelected
        }).split(" ").filter((k) => !Ne().includes(k)).join(" "),
        optionDisabled: e.unstyled ? "" : Ne({ disabled: !0 }).split(" ").filter((k) => !Ne().includes(k)).join(" ")
      };
    });
    return (v, w) => (S(), z("div", {
      class: g(i.value.root)
    }, [
      $("div", {
        class: g(i.value.inputWrapper),
        onClick: w[3] || (w[3] = //@ts-ignore
        (...c) => y(n) && y(n)(...c))
      }, [
        $("input", {
          ref_key: "inputRef",
          ref: s,
          type: "text",
          class: g(i.value.input),
          value: v.modelValue,
          placeholder: v.placeholder,
          disabled: v.disabled,
          readonly: !0,
          onFocus: w[0] || (w[0] = //@ts-ignore
          (...c) => y(C) && y(C)(...c)),
          onBlur: w[1] || (w[1] = //@ts-ignore
          (...c) => y(m) && y(m)(...c))
        }, null, 42, Nn),
        v.clearable && v.modelValue && !v.disabled && !v.readonly ? (S(), z("span", {
          key: 0,
          class: g(i.value.clearButton),
          onClick: w[2] || (w[2] = //@ts-ignore
          (...c) => y(p) && y(p)(...c))
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
        ]), 2)) : N("", !0)
      ], 2),
      y(o) ? (S(), z("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: r,
        class: g(i.value.dropdown)
      }, [
        $("div", {
          class: g(i.value.optionsList)
        }, [
          (S(!0), z(re, null, de(y(b), (c, u) => (S(), z("div", {
            key: u,
            class: g([
              i.value.option,
              v.modelValue === c ? i.value.optionSelected : "",
              v.disabled ? i.value.optionDisabled : ""
            ]),
            onClick: (f) => !v.disabled && y(d)(c)
          }, X(c), 11, Kn))), 128)),
          y(b).length === 0 ? (S(), z("div", {
            key: 0,
            class: g(i.value.option),
            style: { cursor: "default" }
          }, " 无可用选项 ", 2)) : N("", !0)
        ], 2)
      ], 2)) : N("", !0)
    ], 2));
  }
}), Un = Q(Yn), Xn = R({
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
}), _n = R({
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
}), qn = R({
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
}), Zn = R({
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
}), Jn = { key: 1 }, Qn = /* @__PURE__ */ J({
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
    const a = l, t = h(() => {
      var s, r;
      return a.unstyled ? ((s = a.pt) == null ? void 0 : s.root) || "" : Xn({
        animation: a.animation,
        rounded: a.rounded,
        class: (r = a.pt) == null ? void 0 : r.root
      });
    }), e = h(() => {
      var s;
      return a.unstyled && ((s = a.pt) == null ? void 0 : s.content) || "";
    }), o = h(() => {
      const s = {};
      return a.width && (s.width = typeof a.width == "number" ? `${a.width}px` : a.width), a.height && (s.height = typeof a.height == "number" ? `${a.height}px` : a.height), s;
    });
    return (s, r) => s.loading ? (S(), z("div", {
      key: 0,
      class: g(t.value),
      style: ue(o.value)
    }, [
      $("div", {
        class: g(e.value)
      }, [
        Y(s.$slots, "skeleton")
      ], 2)
    ], 6)) : (S(), z("div", Jn, [
      Y(s.$slots, "default")
    ]));
  }
}), es = /* @__PURE__ */ J({
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
    const a = l, t = h(() => {
      var r, b;
      return a.unstyled ? ((r = a.pt) == null ? void 0 : r.root) || "" : _n({
        rounded: a.rounded,
        class: (b = a.pt) == null ? void 0 : b.root
      });
    }), e = () => {
      var r, b;
      return a.unstyled ? ((r = a.pt) == null ? void 0 : r.line) || "" : qn({
        animation: a.animation,
        rounded: a.rounded,
        class: (b = a.pt) == null ? void 0 : b.line
      });
    }, o = (r) => typeof a.widths == "string" || typeof a.widths == "number" ? a.widths : Array.isArray(a.widths) && a.widths.length > 0 ? a.widths[r % a.widths.length] : "100%", s = (r) => {
      const b = o(r), n = {
        width: typeof b == "number" ? `${b}px` : b
      };
      return a.lineHeight && (n.height = typeof a.lineHeight == "number" ? `${a.lineHeight}px` : a.lineHeight), n;
    };
    return (r, b) => (S(), z("div", {
      class: g(t.value)
    }, [
      (S(!0), z(re, null, de(r.lines, (n) => (S(), z("div", {
        key: n,
        class: g(e()),
        style: ue(s(n - 1))
      }, null, 6))), 128))
    ], 2));
  }
}), ts = /* @__PURE__ */ J({
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
    const a = l, t = h(() => {
      var e, o;
      return a.unstyled ? ((e = a.pt) == null ? void 0 : e.root) || "" : Zn({
        size: a.size,
        circle: a.circle,
        animation: a.animation,
        class: (o = a.pt) == null ? void 0 : o.root
      });
    });
    return (e, o) => (S(), z("div", {
      class: g(t.value)
    }, null, 2));
  }
}), ls = Q(Qn), as = Q(es), os = Q(ts);
function rs(l = {}) {
  const a = H(l.modelValue || ""), t = (s) => a.value === s, e = (s) => {
    var r;
    a.value = s, (r = l.onChange) == null || r.call(l, s);
  };
  return ee(
    () => l.modelValue,
    (s) => {
      s !== void 0 && s !== a.value && (a.value = s);
    }
  ), {
    activeTab: a,
    isActive: t,
    activate: e,
    onKeydown: (s, r) => {
      const b = r.indexOf(a.value);
      if (b === -1 && r.length > 0) {
        e(r[0]);
        return;
      }
      if (s.key === "ArrowRight" || s.key === "ArrowDown") {
        const n = (b + 1) % r.length;
        e(r[n]), s.preventDefault();
      } else if (s.key === "ArrowLeft" || s.key === "ArrowUp") {
        const n = (b - 1 + r.length) % r.length;
        e(r[n]), s.preventDefault();
      }
    }
  };
}
const ns = R({
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
}), ss = R({
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
}), is = R({
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
}), ds = R({
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
}), us = {
  "update:modelValue": (l) => typeof l == "string" || typeof l == "number",
  change: (l) => typeof l == "string" || typeof l == "number"
}, cs = ["aria-disabled"], fs = ["aria-selected", "aria-disabled", "tabindex", "onClick"], ps = /* @__PURE__ */ J({
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
  emits: us,
  setup(l, { emit: a }) {
    const t = l, e = a, o = We(), s = h(() => {
      if (!o.default) return [];
      const u = o.default() || [], f = /* @__PURE__ */ new Set(), x = [];
      return u.filter((D) => D.type && (D.type.name === "TabItem" || typeof D.type == "object" && D.type.__name === "TabItem")).forEach((D) => {
        const M = D.props || {}, B = M.name;
        B && !f.has(B) ? (f.add(B), x.push({
          name: B,
          title: M.title || M.label || "",
          disabled: M.disabled || !1
        })) : console.warn(
          B ? `[Tabs] 发现重复的TabItem name: ${B}，只有第一个会被显示` : "[Tabs] TabItem必须提供name属性"
        );
      }), x;
    }), r = h(
      () => s.value.map((u) => u.name)
    ), { activeTab: b, isActive: n, activate: d, onKeydown: p } = rs({
      modelValue: t.modelValue,
      onChange: (u) => {
        e("update:modelValue", u), e("change", u);
      }
    });
    ee(
      s,
      (u) => {
        u.length > 0 && !u.some((f) => n(f.name)) && d(u[0].name);
      },
      { immediate: !0 }
    );
    const C = (u, f) => {
      t.disabled || f || d(u);
    }, m = (u) => {
      p(u, r.value);
    }, i = h(() => {
      var u, f;
      return t.unstyled ? ((u = t.pt) == null ? void 0 : u.container) || "" : ns({
        placement: t.placement,
        fullWidth: t.fullWidth,
        disabled: t.disabled,
        class: (f = t.pt) == null ? void 0 : f.container
      });
    }), v = h(() => {
      var u, f;
      return t.unstyled ? ((u = t.pt) == null ? void 0 : u.nav) || "" : ss({
        variant: t.variant,
        placement: t.placement,
        fullWidth: t.fullWidth,
        size: t.size,
        class: (f = t.pt) == null ? void 0 : f.nav
      });
    }), w = (u, f) => {
      var x, D;
      return t.unstyled ? ((x = t.pt) == null ? void 0 : x.navItem) || "" : is({
        variant: t.variant,
        active: n(u),
        disabled: t.disabled || f,
        size: t.size,
        fullWidth: t.fullWidth,
        class: (D = t.pt) == null ? void 0 : D.navItem
      });
    }, c = h(() => {
      var u, f;
      return t.unstyled ? ((u = t.pt) == null ? void 0 : u.content) || "" : ds({
        placement: t.placement,
        class: (f = t.pt) == null ? void 0 : f.content
      });
    });
    return Re("activeTab", b), (u, f) => (S(), z("div", {
      class: g(i.value),
      "aria-disabled": u.disabled,
      role: "tablist",
      onKeydown: m
    }, [
      $("div", {
        class: g(v.value)
      }, [
        (S(!0), z(re, null, de(s.value, (x) => (S(), z("button", {
          key: x.name,
          class: g(w(x.name, x.disabled)),
          role: "tab",
          "aria-selected": y(n)(x.name),
          "aria-disabled": u.disabled || x.disabled,
          tabindex: y(n)(x.name) ? 0 : -1,
          onClick: (D) => C(x.name, x.disabled)
        }, X(x.title), 11, fs))), 128))
      ], 2),
      $("div", {
        class: g(c.value)
      }, [
        Y(u.$slots, "default")
      ], 2)
    ], 42, cs));
  }
}), bs = /* @__PURE__ */ J({
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
    const a = l, t = Ee("activeTab", H("")), e = h(() => t.value === a.name), o = h(() => {
      var s;
      return a.unstyled && ((s = a.pt) == null ? void 0 : s.root) || "";
    });
    return (s, r) => Pe((S(), z("div", {
      class: g(o.value)
    }, [
      Y(s.$slots, "default")
    ], 2)), [
      [rt, e.value]
    ]);
  }
}), gs = Q(ps), vs = Q(bs), ms = R({
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
}), ys = R({
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
}), hs = R({
  base: "text-lg font-medium"
}), ws = R({
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
}), xs = R({
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
}), ks = {
  "update:collapsed": (l) => typeof l == "boolean",
  collapse: (l) => typeof l == "boolean"
}, Cs = /* @__PURE__ */ J({
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
  emits: ks,
  setup(l, { emit: a }) {
    const t = l, e = a, o = H(t.defaultCollapsed);
    ee(
      () => t.defaultCollapsed,
      (C) => {
        o.value = C;
      }
    );
    const s = () => {
      t.collapsible && (o.value = !o.value, e("update:collapsed", o.value), e("collapse", o.value));
    }, r = h(() => {
      var C, m;
      return t.unstyled ? ((C = t.pt) == null ? void 0 : C.root) || "" : ms({
        variant: t.variant,
        padding: t.padding,
        radius: t.radius,
        bordered: t.bordered,
        class: (m = t.pt) == null ? void 0 : m.root
      });
    }), b = h(() => {
      var C, m;
      return t.unstyled ? ((C = t.pt) == null ? void 0 : C.header) || "" : ys({
        padding: t.padding,
        collapsible: t.collapsible,
        class: (m = t.pt) == null ? void 0 : m.header
      });
    }), n = h(() => {
      var C, m;
      return t.unstyled ? ((C = t.pt) == null ? void 0 : C.title) || "" : hs({
        class: (m = t.pt) == null ? void 0 : m.title
      });
    }), d = h(() => {
      var C, m;
      return t.unstyled ? ((C = t.pt) == null ? void 0 : C.content) || "" : ws({
        padding: t.padding,
        collapsed: o.value,
        class: (m = t.pt) == null ? void 0 : m.content
      });
    }), p = h(() => {
      var C, m;
      return t.unstyled ? ((C = t.pt) == null ? void 0 : C.icon) || "" : xs({
        collapsed: o.value,
        class: (m = t.pt) == null ? void 0 : m.icon
      });
    });
    return (C, m) => (S(), z("div", {
      class: g(r.value)
    }, [
      $("div", {
        class: g(b.value),
        onClick: s
      }, [
        $("div", {
          class: g(n.value)
        }, [
          Y(C.$slots, "title", {}, () => [
            pe(X(C.title), 1)
          ])
        ], 2),
        C.collapsible ? (S(), z("div", {
          key: 0,
          class: g(p.value)
        }, [
          Y(C.$slots, "icon", {}, () => [
            m[0] || (m[0] = $("svg", {
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
        ], 2)) : N("", !0)
      ], 2),
      $("div", {
        class: g(d.value)
      }, [
        Y(C.$slots, "default")
      ], 2)
    ], 2));
  }
}), Ss = Q(Cs), zs = R({
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
}), Bs = R({
  base: "flex items-center gap-1"
}), Vs = R({
  base: ""
}), $s = R({
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
}), Is = R({
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
}), Ds = R({
  base: "flex items-center ml-4"
}), Ms = R({
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
}), Ts = R({
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
}), Rs = {
  "update:modelValue": (l) => typeof l == "number",
  change: (l) => typeof l == "number"
}, Es = ["disabled"], Ls = ["disabled"], Os = ["onClick", "disabled", "aria-current"], As = ["disabled"], Ps = ["disabled"], js = ["max", "disabled"], Ws = ["disabled"], Fs = /* @__PURE__ */ J({
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
  emits: Rs,
  setup(l, { emit: a }) {
    const t = l, e = a, o = h({
      get: () => t.modelValue,
      set: (f) => {
        e("update:modelValue", f), e("change", f);
      }
    }), s = H(""), r = h(() => t.disabled), b = h(() => {
      const f = t.totalPages, x = t.modelValue, D = t.visiblePageCount;
      if (f <= D)
        return Array.from({ length: f }, (A, O) => O + 1);
      const M = Math.floor(D / 2);
      let B = x - M, T = x + M;
      B < 1 && (T = Math.min(f, T + (1 - B)), B = 1), T > f && (B = Math.max(1, B - (T - f)), T = f);
      const V = [];
      B > 1 && (V.push(1), B > 2 && V.push("..."));
      for (let A = B; A <= T; A++)
        V.push(A);
      return T < f && (T < f - 1 && V.push("..."), V.push(f)), V;
    }), n = (f) => {
      f >= 1 && f <= t.totalPages && f !== o.value && (o.value = f);
    }, d = () => {
      const f = Number(s.value);
      !isNaN(f) && f >= 1 && f <= t.totalPages && n(f), s.value = "";
    }, p = h(() => {
      var f, x;
      return t.unstyled ? ((f = t.pt) == null ? void 0 : f.root) || "" : zs({
        disabled: t.disabled,
        class: (x = t.pt) == null ? void 0 : x.root
      });
    }), C = h(() => {
      var f, x;
      return t.unstyled ? ((f = t.pt) == null ? void 0 : f.list) || "" : Bs({
        class: (x = t.pt) == null ? void 0 : x.list
      });
    }), m = h(() => {
      var f, x;
      return t.unstyled ? ((f = t.pt) == null ? void 0 : f.item) || "" : Vs({
        class: (x = t.pt) == null ? void 0 : x.item
      });
    }), i = (f, x) => {
      var D, M, B, T, V, A, O, L, P, W, k, E;
      return t.unstyled ? x === "first" ? ((D = t.pt) == null ? void 0 : D.firstButton) || "" : x === "prev" ? ((M = t.pt) == null ? void 0 : M.prevButton) || "" : x === "next" ? ((B = t.pt) == null ? void 0 : B.nextButton) || "" : x === "last" ? ((T = t.pt) == null ? void 0 : T.lastButton) || "" : f === o.value ? ((V = t.pt) == null ? void 0 : V.activeButton) || "" : ((A = t.pt) == null ? void 0 : A.button) || "" : $s({
        variant: t.variant,
        size: t.size,
        shape: t.shape,
        active: f === o.value,
        disabled: t.disabled,
        class: f === o.value ? (O = t.pt) == null ? void 0 : O.activeButton : x === "first" ? (L = t.pt) == null ? void 0 : L.firstButton : x === "prev" ? (P = t.pt) == null ? void 0 : P.prevButton : x === "next" ? (W = t.pt) == null ? void 0 : W.nextButton : x === "last" ? (k = t.pt) == null ? void 0 : k.lastButton : (E = t.pt) == null ? void 0 : E.button
      });
    }, v = h(() => {
      var f, x;
      return t.unstyled ? ((f = t.pt) == null ? void 0 : f.ellipsis) || "" : Is({
        size: t.size,
        class: (x = t.pt) == null ? void 0 : x.ellipsis
      });
    }), w = h(() => {
      var f, x;
      return t.unstyled ? ((f = t.pt) == null ? void 0 : f.jumper) || "" : Ds({
        class: (x = t.pt) == null ? void 0 : x.jumper
      });
    }), c = h(() => {
      var f, x;
      return t.unstyled ? ((f = t.pt) == null ? void 0 : f.jumperInput) || "" : Ms({
        size: t.size,
        class: (x = t.pt) == null ? void 0 : x.jumperInput
      });
    }), u = h(() => {
      var f, x;
      return t.unstyled ? ((f = t.pt) == null ? void 0 : f.jumperButton) || "" : Ts({
        size: t.size,
        class: (x = t.pt) == null ? void 0 : x.jumperButton
      });
    });
    return (f, x) => (S(), z("nav", {
      class: g(p.value),
      "aria-label": "分页导航"
    }, [
      $("ul", {
        class: g(C.value)
      }, [
        f.showEndButtons ? (S(), z("li", {
          key: 0,
          class: g(m.value)
        }, [
          $("button", {
            class: g(i(1, "first")),
            onClick: x[0] || (x[0] = (D) => n(1)),
            disabled: r.value || o.value === 1,
            "aria-label": "首页"
          }, [
            Y(f.$slots, "first-button", {}, () => [
              x[5] || (x[5] = $("svg", {
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
          ], 10, Es)
        ], 2)) : N("", !0),
        f.showPrevNextButtons ? (S(), z("li", {
          key: 1,
          class: g(m.value)
        }, [
          $("button", {
            class: g(i(o.value - 1, "prev")),
            onClick: x[1] || (x[1] = (D) => n(o.value - 1)),
            disabled: r.value || o.value === 1,
            "aria-label": "上一页"
          }, [
            Y(f.$slots, "prev-button", {}, () => [
              x[6] || (x[6] = $("svg", {
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
          ], 10, Ls)
        ], 2)) : N("", !0),
        (S(!0), z(re, null, de(b.value, (D, M) => (S(), z(re, { key: M }, [
          D !== "..." ? (S(), z("li", {
            key: 0,
            class: g(m.value)
          }, [
            $("button", {
              class: g(i(Number(D))),
              onClick: (B) => n(Number(D)),
              disabled: r.value,
              "aria-current": o.value === D ? "page" : void 0
            }, X(D), 11, Os)
          ], 2)) : (S(), z("li", {
            key: 1,
            class: g(m.value)
          }, [
            $("span", {
              class: g(v.value)
            }, "...", 2)
          ], 2))
        ], 64))), 128)),
        f.showPrevNextButtons ? (S(), z("li", {
          key: 2,
          class: g(m.value)
        }, [
          $("button", {
            class: g(i(o.value + 1, "next")),
            onClick: x[2] || (x[2] = (D) => n(o.value + 1)),
            disabled: r.value || o.value === f.totalPages,
            "aria-label": "下一页"
          }, [
            Y(f.$slots, "next-button", {}, () => [
              x[7] || (x[7] = $("svg", {
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
          ], 10, As)
        ], 2)) : N("", !0),
        f.showEndButtons ? (S(), z("li", {
          key: 3,
          class: g(m.value)
        }, [
          $("button", {
            class: g(i(f.totalPages, "last")),
            onClick: x[3] || (x[3] = (D) => n(f.totalPages)),
            disabled: r.value || o.value === f.totalPages,
            "aria-label": "尾页"
          }, [
            Y(f.$slots, "last-button", {}, () => [
              x[8] || (x[8] = $("svg", {
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
          ], 10, Ps)
        ], 2)) : N("", !0),
        f.showJumper ? (S(), z("li", {
          key: 4,
          class: g(w.value)
        }, [
          x[9] || (x[9] = $("span", null, "前往", -1)),
          Pe($("input", {
            class: g(c.value),
            type: "number",
            "onUpdate:modelValue": x[4] || (x[4] = (D) => s.value = D),
            min: "1",
            max: f.totalPages,
            disabled: r.value,
            onKeyup: xe(d, ["enter"])
          }, null, 42, js), [
            [Et, s.value]
          ]),
          x[10] || (x[10] = $("span", null, "页", -1)),
          $("button", {
            class: g(u.value),
            onClick: d,
            disabled: r.value
          }, " 跳转 ", 10, Ws)
        ], 2)) : N("", !0)
      ], 2)
    ], 2));
  }
}), Hs = Q(Fs), Gs = R({
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
}), Ns = R({
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
}), Ks = R({
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
}), Ys = R({
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
}), Us = {
  /**
   * 进度变化时触发
   */
  "update:value": (l) => typeof l == "number"
}, Xs = (l) => {
  const a = h(() => {
    if (l.indeterminate)
      return 0;
    const o = Math.max(0, Math.min(l.value || 0, l.max || 100)), s = Math.max(1, l.max || 100);
    return Math.round(o / s * 100);
  }), t = h(() => `${a.value}%`), e = h(() => {
    if (!l.indeterminate)
      return `width: ${a.value}%`;
  });
  return {
    percentage: a,
    formattedPercentage: t,
    progressWidth: e
  };
}, _s = ["aria-valuenow"], qs = /* @__PURE__ */ J({
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
  emits: Us,
  setup(l) {
    const a = l, { percentage: t, formattedPercentage: e, progressWidth: o } = Xs(a), s = h(() => {
      var d, p;
      return a.unstyled ? ((d = a.pt) == null ? void 0 : d.root) || "" : Gs({
        unstyled: a.unstyled,
        class: (p = a.pt) == null ? void 0 : p.root
      });
    }), r = h(() => {
      var d, p;
      return a.unstyled ? ((d = a.pt) == null ? void 0 : d.container) || "" : Ns({
        size: a.size,
        shape: a.shape,
        unstyled: a.unstyled,
        class: (p = a.pt) == null ? void 0 : p.container
      });
    }), b = h(() => {
      var d, p;
      return a.unstyled ? ((d = a.pt) == null ? void 0 : d.bar) || "" : Ks({
        variant: a.variant,
        striped: a.striped,
        animated: a.animated,
        indeterminate: a.indeterminate,
        unstyled: a.unstyled,
        class: (p = a.pt) == null ? void 0 : p.bar
      });
    }), n = h(() => {
      var d, p;
      return a.unstyled ? ((d = a.pt) == null ? void 0 : d.text) || "" : Ys({
        variant: a.variant,
        unstyled: a.unstyled,
        class: (p = a.pt) == null ? void 0 : p.text
      });
    });
    return (d, p) => (S(), z("div", {
      class: g(s.value)
    }, [
      $("div", {
        class: g(r.value)
      }, [
        $("div", {
          class: g(b.value),
          style: ue(y(o)),
          role: "progressbar",
          "aria-valuenow": d.indeterminate ? void 0 : y(t),
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        }, null, 14, _s)
      ], 2),
      d.showText ? (S(), z("div", {
        key: 0,
        class: g(n.value)
      }, [
        Y(d.$slots, "text", {}, () => [
          pe(X(y(e)), 1)
        ])
      ], 2)) : N("", !0)
    ], 2));
  }
}), Zs = Q(qs), Js = R({
  base: "flex",
  variants: {},
  defaultVariants: {}
}), Qs = R({
  base: "flex flex-wrap items-center space-x-1 md:space-x-2",
  variants: {},
  defaultVariants: {}
}), ei = R({
  base: "mx-1 text-gray-400",
  variants: {},
  defaultVariants: {}
}), ti = R({
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
}), li = R({
  base: "inline-flex items-center",
  variants: {},
  defaultVariants: {}
}), Jt = Symbol("breadcrumb"), ai = (l) => {
  const a = H(null);
  return Re(Jt, {
    separator: l.separator || "/",
    separatorIcon: l.separatorIcon || ""
  }), {
    _ref: a
  };
}, oi = () => {
  const l = Ee(
    Jt,
    {
      separator: "/",
      separatorIcon: ""
    }
  );
  return {
    _ref: H(null),
    breadcrumbContext: l
  };
}, ri = /* @__PURE__ */ J({
  name: "VBreadcrumb",
  __name: "breadcrumb",
  props: {
    separator: { default: "/" },
    separatorIcon: { default: "" },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  setup(l, { expose: a }) {
    const t = l, { _ref: e } = ai(t), o = h(() => {
      var r, b;
      return t.unstyled ? ((r = t.pt) == null ? void 0 : r.root) || "" : Js({
        class: (b = t.pt) == null ? void 0 : b.root
      });
    }), s = h(() => {
      var r, b;
      return t.unstyled ? ((r = t.pt) == null ? void 0 : r.list) || "" : Qs({
        class: (b = t.pt) == null ? void 0 : b.list
      });
    });
    return a({
      _ref: e
    }), (r, b) => (S(), z("nav", {
      class: g(o.value),
      ref_key: "_ref",
      ref: e
    }, [
      $("ol", {
        class: g(s.value)
      }, [
        Y(r.$slots, "default")
      ], 2)
    ], 2));
  }
}), ni = {
  click: (l) => l instanceof MouseEvent
}, si = ["href"], ii = /* @__PURE__ */ J({
  name: "VBreadcrumbItem",
  __name: "breadcrumb-item",
  props: {
    href: { default: "" },
    disabled: { type: Boolean, default: !1 },
    active: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: ni,
  setup(l, { expose: a, emit: t }) {
    const e = t, o = l, { _ref: s, breadcrumbContext: r } = oi(), b = H(!1), n = () => {
      if (s.value) {
        const v = s.value.parentElement;
        v && (b.value = v.firstElementChild === s.value);
      }
    };
    me(() => {
      n();
    });
    const d = (v) => {
      if (o.disabled) {
        v.preventDefault();
        return;
      }
      e("click", v);
    }, p = h(() => {
      var v, w;
      return o.unstyled ? ((v = o.pt) == null ? void 0 : v.root) || "" : ti({
        disabled: o.disabled,
        active: o.active,
        class: (w = o.pt) == null ? void 0 : w.root
      });
    }), C = h(() => {
      var v;
      return o.unstyled ? ((v = o.pt) == null ? void 0 : v.separator) || "" : ei();
    }), m = h(() => {
      var v, w;
      return o.unstyled ? ((v = o.pt) == null ? void 0 : v.link) || "" : li({
        class: (w = o.pt) == null ? void 0 : w.link
      });
    }), i = h(() => {
      var v;
      return o.unstyled && ((v = o.pt) == null ? void 0 : v.content) || "";
    });
    return a({
      _ref: s
    }), (v, w) => (S(), z("li", {
      class: g(p.value),
      ref_key: "_ref",
      ref: s
    }, [
      v.$slots.separator ? Y(v.$slots, "separator", { key: 0 }) : y(r).separatorIcon ? (S(), z("span", {
        key: 1,
        class: g(C.value)
      }, [
        (S(), Be(Ye(y(r).separatorIcon)))
      ], 2)) : b.value ? N("", !0) : (S(), z("span", {
        key: 2,
        class: g(C.value)
      }, X(y(r).separator), 3)),
      v.href && !v.disabled && !v.active ? (S(), z("a", {
        key: 3,
        href: v.href,
        class: g(m.value),
        onClick: d
      }, [
        Y(v.$slots, "default")
      ], 10, si)) : (S(), z("span", {
        key: 4,
        class: g(i.value)
      }, [
        Y(v.$slots, "default")
      ], 2))
    ], 2));
  }
}), Qt = Q(ri, {
  BreadcrumbItem: ii
}), di = Qt.BreadcrumbItem, el = R({
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
}), ui = {
  "update:panels": (l) => Array.isArray(l),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  "resize-start": (l) => !0,
  resize: (l) => Array.isArray(l),
  "resize-end": (l) => Array.isArray(l),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  collapse: (l, a) => !0,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  expand: (l, a) => !0
}, ci = {
  "update:size": (l) => typeof l == "string",
  "update:collapsed": (l) => typeof l == "boolean"
}, fi = (l, a) => {
  const t = H(null), e = H([]), o = H([]), s = H(!1), r = H(0), b = H(-1), n = tl(l.panels || []), d = h(() => l.direction !== "vertical"), p = (B, T) => {
    e.value[T] = B;
  }, C = (B, T) => {
    o.value[T] = B;
  }, m = () => {
    if (!t.value || e.value.length === 0) return;
    const B = d.value ? t.value.clientWidth : t.value.clientHeight;
    if (!l.panels || l.panels.length === 0) {
      const T = `${100 / e.value.length}%`;
      e.value.forEach((V, A) => {
        n[A] = n[A] || {}, n[A].size = T, n[A].resizable = n[A].resizable !== !1;
      });
      return;
    }
    l.panels.forEach((T, V) => {
      if (V < e.value.length)
        if (n[V] = { ...T }, T.size && T.size.endsWith("%")) {
          const A = parseFloat(T.size) / 100, O = Math.floor(B * A);
          e.value[V].style[d.value ? "width" : "height"] = `${O}px`;
        } else T.size && (e.value[V].style[d.value ? "width" : "height"] = T.size);
    }), a("update:panels", [...n]);
  }, i = (B, T) => {
    var P, W;
    if (!l.resizable) return;
    const V = T, A = T + 1, O = ((P = n[V]) == null ? void 0 : P.resizable) !== !1, L = ((W = n[A]) == null ? void 0 : W.resizable) !== !1;
    if (!(!O && !L)) {
      if (B.preventDefault(), s.value = !0, b.value = T, B instanceof MouseEvent)
        r.value = d.value ? B.clientX : B.clientY;
      else {
        const k = B.touches[0];
        r.value = d.value ? k.clientX : k.clientY;
      }
      window.addEventListener("mousemove", v), window.addEventListener("mouseup", u), window.addEventListener("touchmove", w), window.addEventListener("touchend", f), a("resize-start", B);
    }
  }, v = (B) => {
    s.value && c(d.value ? B.clientX : B.clientY);
  }, w = (B) => {
    if (!s.value) return;
    const T = B.touches[0];
    c(d.value ? T.clientX : T.clientY);
  }, c = (B) => {
    var oe, F, Z, le;
    if (!s.value || !t.value) return;
    const T = b.value, V = T, A = T + 1;
    if (V < 0 || A >= e.value.length || !e.value[V] || !e.value[A])
      return;
    const O = e.value[V], L = e.value[A], P = B - r.value;
    if (P === 0) return;
    const W = d.value ? O.offsetWidth : O.offsetHeight, k = d.value ? L.offsetWidth : L.offsetHeight, E = (oe = n[V]) != null && oe.minSize ? M(
      n[V].minSize,
      t.value,
      d.value
    ) : 0, I = (F = n[A]) != null && F.minSize ? M(
      n[A].minSize,
      t.value,
      d.value
    ) : 0, G = (Z = n[V]) != null && Z.maxSize ? M(
      n[V].maxSize,
      t.value,
      d.value
    ) : 1 / 0, j = (le = n[A]) != null && le.maxSize ? M(
      n[A].maxSize,
      t.value,
      d.value
    ) : 1 / 0;
    let K = W + P, U = k - P;
    K < E ? (K = E, U = W + k - E) : K > G && (K = G, U = W + k - G), U < I ? (U = I, K = W + k - I) : U > j && (U = j, K = W + k - j), d.value ? (O.style.width = `${K}px`, L.style.width = `${U}px`) : (O.style.height = `${K}px`, L.style.height = `${U}px`), n[V] = {
      ...n[V],
      size: `${K}px`
    }, n[A] = {
      ...n[A],
      size: `${U}px`
    }, r.value = B, a("resize", [...n]);
  }, u = () => {
    x();
  }, f = () => {
    x();
  }, x = () => {
    s.value && (s.value = !1, b.value = -1, window.removeEventListener("mousemove", v), window.removeEventListener("mouseup", u), window.removeEventListener("touchmove", w), window.removeEventListener("touchend", f), a("resize-end", [...n]), a("update:panels", [...n]));
  }, D = (B) => {
    if (B < 0 || B >= e.value.length) return;
    const T = e.value[B], V = n[B];
    if (!V.collapsible) return;
    if (!V.collapsed)
      V._savedSize = V.size, d.value ? T.style.width = "0" : T.style.height = "0", V.size = "0", V.collapsed = !0, a("collapse", B, !0);
    else {
      const O = V._savedSize || "1fr";
      d.value ? T.style.width = O : T.style.height = O, V.size = O, V.collapsed = !1, a("expand", B, !1);
    }
    a("update:panels", [...n]);
  }, M = (B, T, V) => {
    if (B.endsWith("px"))
      return parseFloat(B);
    if (B.endsWith("%")) {
      const A = V ? T.clientWidth : T.clientHeight;
      return parseFloat(B) / 100 * A;
    } else if (B.endsWith("rem")) {
      const A = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      return parseFloat(B) * A;
    } else if (B.endsWith("em")) {
      const A = parseFloat(getComputedStyle(T).fontSize);
      return parseFloat(B) * A;
    } else {
      if (B.endsWith("vh"))
        return parseFloat(B) / 100 * window.innerHeight;
      if (B.endsWith("vw"))
        return parseFloat(B) / 100 * window.innerWidth;
    }
    return parseFloat(B) || 0;
  };
  return me(() => {
    m(), window.addEventListener("resize", m);
  }), Ve(() => {
    window.removeEventListener("resize", m), window.removeEventListener("mousemove", v), window.removeEventListener("mouseup", u), window.removeEventListener("touchmove", w), window.removeEventListener("touchend", f);
  }), {
    rootRef: t,
    panelRefs: e,
    gutterRefs: o,
    isResizing: s,
    panelSizes: n,
    isHorizontal: d,
    registerPanel: p,
    registerGutter: C,
    onGutterMouseDown: i,
    toggleCollapse: D,
    initPanelSizes: m
  };
}, pi = ["aria-orientation"], bi = ["onMousedown", "onTouchstart", "aria-label", "aria-controls", "onKeydown"], gi = /* @__PURE__ */ J({
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
  emits: ui,
  setup(l, { expose: a, emit: t }) {
    const e = l, o = t, {
      rootRef: s,
      panelSizes: r,
      isHorizontal: b,
      registerPanel: n,
      registerGutter: d,
      onGutterMouseDown: p,
      toggleCollapse: C,
      initPanelSizes: m
    } = fi(e, o), i = h(() => {
      var D;
      const u = We(), f = Object.keys(u).filter((M) => M.startsWith("panel-")).length / 2, x = ((D = e.panels) == null ? void 0 : D.length) || 0;
      return Math.max(f, x, 2);
    }), v = (u) => {
      const f = r[u] || {}, x = b.value ? "width" : "height", D = {};
      return f.size && (D[x] = f.size), f.collapsed && (D[x] = "0", D.overflow = "hidden"), D;
    }, w = (u, f, x) => {
      if (!e.resizable) return;
      u.preventDefault();
      const D = u.shiftKey ? 10 : 1, M = r[f], B = r[f + 1];
      if (!M || !B) return;
      const T = parseFloat(M.size || "0"), V = parseFloat(B.size || "0"), A = D * x;
      M.size = `${T + A}px`, B.size = `${V - A}px`, m();
    }, c = h(() => {
      var T, V, A, O, L, P;
      if (e.unstyled)
        return {
          root: ((T = e.pt) == null ? void 0 : T.root) || "",
          wrapper: ((V = e.pt) == null ? void 0 : V.wrapper) || "",
          panel: ((A = e.pt) == null ? void 0 : A.panel) || "",
          gutter: ((O = e.pt) == null ? void 0 : O.gutter) || "",
          gutterHandle: ((L = e.pt) == null ? void 0 : L.gutterHandle) || "",
          gutterIcon: ((P = e.pt) == null ? void 0 : P.gutterIcon) || ""
        };
      const { root: u, wrapper: f, panel: x, gutter: D, gutterHandle: M, gutterIcon: B } = el({
        direction: e.direction,
        size: e.size,
        solid: e.solid,
        dotted: e.dotted,
        dashed: e.dashed,
        disabled: !e.resizable
      });
      return {
        root: u(),
        wrapper: f(),
        panel: x(),
        gutter: D(),
        gutterHandle: M(),
        gutterIcon: B()
      };
    });
    return a({
      toggleCollapse: C,
      initPanelSizes: m
    }), Re("splitter", {
      registerPanel: n,
      direction: e.direction
    }), (u, f) => (S(), z("div", {
      ref_key: "rootRef",
      ref: s,
      class: g(c.value.root),
      role: "separator",
      "aria-orientation": e.direction === "vertical" ? "horizontal" : "vertical"
    }, [
      (S(!0), z(re, null, de(i.value, (x, D) => (S(), z(re, { key: D }, [
        D < i.value ? (S(), z("div", {
          key: 0,
          ref_for: !0,
          ref: (M) => M && y(n)(M, D),
          class: g(c.value.wrapper),
          style: ue(v(D))
        }, [
          Y(u.$slots, `panel-${D}`, {}, () => [
            $("div", {
              class: g(c.value.panel)
            }, [
              Y(u.$slots, `panel-${D}-content`, {}, () => [
                pe("Panel " + X(D + 1), 1)
              ])
            ], 2)
          ])
        ], 6)) : N("", !0),
        D < i.value - 1 ? (S(), z("div", {
          key: 1,
          ref_for: !0,
          ref: (M) => M && y(d)(M, D),
          class: g(c.value.gutter),
          onMousedown: (M) => y(p)(M, D),
          onTouchstart: (M) => y(p)(M, D),
          tabindex: "0",
          "aria-label": `调整${y(b) ? "宽度" : "高度"}`,
          "aria-controls": `panel-${D},panel-${D + 1}`,
          onKeydown: [
            xe((M) => w(M, D, -1), ["left"]),
            xe((M) => w(M, D, 1), ["right"]),
            xe((M) => w(M, D, -1), ["up"]),
            xe((M) => w(M, D, 1), ["down"])
          ]
        }, [
          Y(u.$slots, `gutter-${D}`, {}, () => [
            $("div", {
              class: g(c.value.gutterHandle)
            }, [
              Y(u.$slots, `gutter-${D}-handle`, {}, () => [
                y(b) ? (S(), z("svg", {
                  key: 0,
                  class: g(c.value.gutterIcon),
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round"
                }, f[0] || (f[0] = [
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
                ]), 2)) : (S(), z("svg", {
                  key: 1,
                  class: g(c.value.gutterIcon),
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round"
                }, f[1] || (f[1] = [
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
        ], 42, bi)) : N("", !0)
      ], 64))), 128))
    ], 10, pi));
  }
}), vi = /* @__PURE__ */ J({
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
  emits: ci,
  setup(l, { emit: a }) {
    const t = l, e = a, o = H(null), s = Ee("splitter", {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      registerPanel: (n, d) => {
      },
      direction: "horizontal",
      index: -1
    });
    ee(
      () => t.size,
      (n) => {
        n !== void 0 && o.value && (s.direction === "horizontal" ? o.value.style.width = n : o.value.style.height = n);
      }
    ), ee(
      () => t.collapsed,
      (n) => {
        e("update:collapsed", n);
      }
    ), me(() => {
      o.value && s.index >= 0 && s.registerPanel(o.value, s.index);
    });
    const r = h(() => {
      var n;
      return t.unstyled ? ((n = t.pt) == null ? void 0 : n.root) || "" : el().panel();
    }), b = h(() => {
      var n;
      return t.unstyled ? ((n = t.pt) == null ? void 0 : n.content) || "" : "h-full w-full";
    });
    return (n, d) => (S(), z("div", {
      ref_key: "panelRef",
      ref: o,
      class: g(r.value)
    }, [
      $("div", {
        class: g(b.value)
      }, [
        Y(n.$slots, "default")
      ], 2)
    ], 2));
  }
}), mi = Q(gi), yi = Q(vi), hi = (l, a) => {
  var v, w;
  const t = H(((v = l.modelValue) == null ? void 0 : v[0]) || null), e = H(((w = l.modelValue) == null ? void 0 : w[1]) || null), o = H((t.value || /* @__PURE__ */ new Date()).getMonth()), s = H((t.value || /* @__PURE__ */ new Date()).getFullYear()), r = H("start"), b = h(() => {
    const c = l.locale || "default", u = l.firstDayOfWeek || 0, f = [];
    for (let x = 0; x < 7; x++) {
      const D = (x + u) % 7;
      f.push(
        new Intl.DateTimeFormat(c, { weekday: "short" }).format(
          new Date(2021, 0, D + 3)
          // 2021-01-03 is a Sunday
        )
      );
    }
    return f;
  }), n = h(() => {
    const c = s.value, u = o.value, f = new Date(c, u, 1).getDay(), x = new Date(c, u + 1, 0).getDate(), D = l.firstDayOfWeek || 0, M = [], B = new Date(c, u, 0).getDate(), T = (f - D + 7) % 7;
    for (let O = B - T + 1; O <= B; O++)
      M.push({
        date: new Date(c, u - 1, O),
        day: O,
        isCurrentMonth: !1,
        isToday: !1,
        isSelected: !1,
        isRangeStart: !1,
        isRangeEnd: !1,
        isInRange: !1,
        isDisabled: !1
      });
    const V = /* @__PURE__ */ new Date();
    for (let O = 1; O <= x; O++) {
      const L = new Date(c, u, O), P = V.getDate() === O && V.getMonth() === u && V.getFullYear() === c, W = t.value && L.getDate() === t.value.getDate() && L.getMonth() === t.value.getMonth() && L.getFullYear() === t.value.getFullYear(), k = e.value && L.getDate() === e.value.getDate() && L.getMonth() === e.value.getMonth() && L.getFullYear() === e.value.getFullYear(), E = t.value && e.value && L > t.value && L < e.value, I = W || k, G = l.disabled || l.min && L < l.min || l.max && L > l.max;
      M.push({
        date: L,
        day: O,
        isCurrentMonth: !0,
        isToday: P,
        isSelected: I,
        isRangeStart: W,
        isRangeEnd: k,
        isInRange: E,
        isDisabled: G
      });
    }
    const A = 42 - M.length;
    for (let O = 1; O <= A; O++) {
      const L = new Date(c, u + 1, O), P = t.value && L.getDate() === t.value.getDate() && L.getMonth() === t.value.getMonth() && L.getFullYear() === t.value.getFullYear(), W = e.value && L.getDate() === e.value.getDate() && L.getMonth() === e.value.getMonth() && L.getFullYear() === e.value.getFullYear(), k = t.value && e.value && L > t.value && L < e.value, E = P || W;
      M.push({
        date: L,
        day: O,
        isCurrentMonth: !1,
        isToday: !1,
        isSelected: E,
        isRangeStart: P,
        isRangeEnd: W,
        isInRange: k,
        isDisabled: !1
      });
    }
    return M;
  }), d = h(() => {
    const c = l.locale || "default";
    return new Intl.DateTimeFormat(c, { month: "long" }).format(
      new Date(s.value, o.value)
    );
  }), p = () => {
    o.value === 0 ? (o.value = 11, s.value--) : o.value--;
  }, C = () => {
    o.value === 11 ? (o.value = 0, s.value++) : o.value++;
  }, m = (c) => {
    l.disabled || l.readonly || l.min && c < l.min || l.max && c > l.max || (r.value === "start" ? (t.value = c, e.value = null, r.value = "end") : (t.value && c < t.value ? (e.value = t.value, t.value = c) : e.value = c, r.value = "start"), a("update:modelValue", [t.value, e.value]), a("change", [t.value, e.value]));
  }, i = () => {
    t.value = null, e.value = null, r.value = "start", a("update:modelValue", [null, null]), a("change", [null, null]);
  };
  return ee(
    () => l.modelValue,
    (c) => {
      c && (t.value = c[0], e.value = c[1], t.value && (o.value = t.value.getMonth(), s.value = t.value.getFullYear()), r.value = e.value ? "start" : "end");
    }
  ), {
    startDate: t,
    endDate: e,
    currentMonth: o,
    currentYear: s,
    selectionMode: r,
    weekdays: b,
    daysInMonth: n,
    monthName: d,
    prevMonth: p,
    nextMonth: C,
    selectDate: m,
    resetSelection: i
  };
}, wi = R({
  base: "w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), xi = R({
  base: "flex items-center justify-between mb-4"
}), ki = R({
  base: "text-lg font-medium"
}), Ci = R({
  base: "flex items-center space-x-1"
}), Si = R({
  base: "p-1 rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
}), zi = R({
  base: "grid grid-cols-7 mb-1"
}), Bi = R({
  base: "text-center text-sm font-medium text-gray-500 py-2"
}), Vi = R({
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
}), $i = {
  "update:modelValue": (l) => Array.isArray(l) && (l[0] === null || l[0] instanceof Date) && (l[1] === null || l[1] instanceof Date),
  change: (l) => Array.isArray(l) && (l[0] === null || l[0] instanceof Date) && (l[1] === null || l[1] instanceof Date)
}, Ii = {
  key: 0,
  class: "text-sm text-blue-500 ml-2"
}, Di = ["disabled"], Mi = ["disabled"], Ti = ["onClick", "disabled"], Ri = {
  key: 0,
  class: "mt-4 flex justify-between"
}, Ei = { class: "ml-1 font-medium" }, Li = { class: "ml-1 font-medium" }, Oi = /* @__PURE__ */ J({
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
  emits: $i,
  setup(l, { emit: a }) {
    const t = a, e = l, {
      startDate: o,
      endDate: s,
      currentYear: r,
      selectionMode: b,
      weekdays: n,
      daysInMonth: d,
      monthName: p,
      prevMonth: C,
      nextMonth: m,
      selectDate: i,
      resetSelection: v
    } = hi(e, t), w = (u) => {
      const f = e.locale || "default";
      return new Intl.DateTimeFormat(f).format(u);
    }, c = h(() => {
      var u, f, x, D, M, B, T, V, A, O, L, P, W, k, E, I, G, j, K, U, oe, F, Z, le, te, ne, ie, ce, ge, fe, Ce, ye;
      return {
        root: e.unstyled ? ((u = e.pt) == null ? void 0 : u.root) || "" : wi({ unstyled: e.unstyled, class: (f = e.pt) == null ? void 0 : f.root }),
        header: e.unstyled ? ((x = e.pt) == null ? void 0 : x.header) || "" : xi({ class: (D = e.pt) == null ? void 0 : D.header }),
        title: e.unstyled ? ((M = e.pt) == null ? void 0 : M.title) || "" : ki({ class: (B = e.pt) == null ? void 0 : B.title }),
        navigation: e.unstyled ? ((T = e.pt) == null ? void 0 : T.navigation) || "" : Ci({ class: (V = e.pt) == null ? void 0 : V.navigation }),
        navButton: e.unstyled ? ((A = e.pt) == null ? void 0 : A.navButton) || "" : Si({ class: (O = e.pt) == null ? void 0 : O.navButton }),
        weekdays: e.unstyled ? ((L = e.pt) == null ? void 0 : L.weekdays) || "" : zi({ class: (P = e.pt) == null ? void 0 : P.weekdays }),
        weekday: e.unstyled ? ((W = e.pt) == null ? void 0 : W.weekday) || "" : Bi({ class: (k = e.pt) == null ? void 0 : k.weekday }),
        days: e.unstyled ? ((E = e.pt) == null ? void 0 : E.days) || "" : Vi({ class: (I = e.pt) == null ? void 0 : I.days }),
        day: e.unstyled ? ((G = e.pt) == null ? void 0 : G.day) || "" : he({ class: (j = e.pt) == null ? void 0 : j.day }),
        today: e.unstyled ? ((K = e.pt) == null ? void 0 : K.today) || "" : he({ isToday: !0, class: (U = e.pt) == null ? void 0 : U.today }).split(" ").filter((se) => !he().includes(se)).join(" "),
        selected: e.unstyled ? ((oe = e.pt) == null ? void 0 : oe.selected) || "" : he({ isSelected: !0, class: (F = e.pt) == null ? void 0 : F.selected }).split(" ").filter((se) => !he().includes(se)).join(" "),
        rangeStart: e.unstyled ? ((Z = e.pt) == null ? void 0 : Z.rangeStart) || "" : he({
          isRangeStart: !0,
          class: (le = e.pt) == null ? void 0 : le.rangeStart
        }).split(" ").filter((se) => !he().includes(se)).join(" "),
        rangeEnd: e.unstyled ? ((te = e.pt) == null ? void 0 : te.rangeEnd) || "" : he({ isRangeEnd: !0, class: (ne = e.pt) == null ? void 0 : ne.rangeEnd }).split(" ").filter((se) => !he().includes(se)).join(" "),
        inRange: e.unstyled ? ((ie = e.pt) == null ? void 0 : ie.inRange) || "" : he({ isInRange: !0, class: (ce = e.pt) == null ? void 0 : ce.inRange }).split(" ").filter((se) => !he().includes(se)).join(" "),
        disabled: e.unstyled ? ((ge = e.pt) == null ? void 0 : ge.disabled) || "" : he({ isDisabled: !0, class: (fe = e.pt) == null ? void 0 : fe.disabled }).split(" ").filter((se) => !he().includes(se)).join(" "),
        adjacent: e.unstyled ? ((Ce = e.pt) == null ? void 0 : Ce.adjacent) || "" : he({ isAdjacent: !0, class: (ye = e.pt) == null ? void 0 : ye.adjacent }).split(" ").filter((se) => !he().includes(se)).join(" ")
      };
    });
    return (u, f) => (S(), z("div", {
      class: g(c.value.root)
    }, [
      $("div", {
        class: g(c.value.header)
      }, [
        $("div", {
          class: g(c.value.title)
        }, [
          pe(X(y(p)) + " " + X(y(r)) + " ", 1),
          y(b) === "end" ? (S(), z("span", Ii, " (Select end date) ")) : N("", !0)
        ], 2),
        $("div", {
          class: g(c.value.navigation)
        }, [
          $("button", {
            class: g(c.value.navButton),
            onClick: f[0] || (f[0] = //@ts-ignore
            (...x) => y(C) && y(C)(...x)),
            disabled: u.disabled || u.readonly
          }, f[3] || (f[3] = [
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
          ]), 10, Di),
          $("button", {
            class: g(c.value.navButton),
            onClick: f[1] || (f[1] = //@ts-ignore
            (...x) => y(m) && y(m)(...x)),
            disabled: u.disabled || u.readonly
          }, f[4] || (f[4] = [
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
          ]), 10, Mi)
        ], 2)
      ], 2),
      $("div", {
        class: g(c.value.weekdays)
      }, [
        (S(!0), z(re, null, de(y(n), (x, D) => (S(), z("div", {
          key: D,
          class: g(c.value.weekday)
        }, X(x), 3))), 128))
      ], 2),
      $("div", {
        class: g(c.value.days)
      }, [
        (S(!0), z(re, null, de(y(d), (x, D) => (S(), z("button", {
          key: D,
          class: g([
            c.value.day,
            x.isToday ? c.value.today : "",
            x.isSelected ? c.value.selected : "",
            x.isRangeStart ? c.value.rangeStart : "",
            x.isRangeEnd ? c.value.rangeEnd : "",
            x.isInRange ? c.value.inRange : "",
            x.isDisabled ? c.value.disabled : "",
            x.isCurrentMonth ? "" : c.value.adjacent
          ]),
          onClick: (M) => y(i)(x.date),
          disabled: x.isDisabled || u.disabled || u.readonly
        }, X(x.day), 11, Ti))), 128))
      ], 2),
      y(o) || y(s) ? (S(), z("div", Ri, [
        $("div", null, [
          f[5] || (f[5] = $("span", { class: "text-sm text-gray-500" }, "Start:", -1)),
          $("span", Ei, X(y(o) ? w(y(o)) : "-"), 1)
        ]),
        $("div", null, [
          f[6] || (f[6] = $("span", { class: "text-sm text-gray-500" }, "End:", -1)),
          $("span", Li, X(y(s) ? w(y(s)) : "-"), 1)
        ]),
        $("button", {
          class: "text-sm text-red-500 hover:text-red-700",
          onClick: f[2] || (f[2] = //@ts-ignore
          (...x) => y(v) && y(v)(...x))
        }, " Reset ")
      ])) : N("", !0)
    ], 2));
  }
}), Ai = Q(Oi), Pi = R({
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
}), ji = R({
  base: "w-full"
}), Wi = R({
  base: ""
}), Fi = R({
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
}), Hi = R({
  base: "text-base font-medium"
}), Gi = R({
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
}), Ni = R({
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
}), Ki = R({
  base: "py-4 px-5"
}), Yi = {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  "update:modelValue": (l) => !0,
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  change: (l) => !0
}, Ui = {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  click: (l) => !0,
  toggle: (l) => typeof l == "boolean"
}, Xi = /* @__PURE__ */ J({
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
  emits: Yi,
  setup(l, { emit: a }) {
    const t = l, e = a, o = H(
      Array.isArray(t.modelValue) ? t.modelValue : t.modelValue ? [t.modelValue] : []
    );
    ee(
      () => t.modelValue,
      (n) => {
        Array.isArray(n) ? o.value = n : n ? o.value = [n] : o.value = [];
      }
    );
    const s = h(() => {
      var n, d;
      return t.unstyled ? ((n = t.pt) == null ? void 0 : n.root) || "" : Pi({
        variant: t.variant,
        radius: t.radius,
        bordered: t.bordered,
        class: (d = t.pt) == null ? void 0 : d.root
      });
    }), r = (n, d) => {
      let p = [...o.value];
      if (d ? t.multiple ? p.includes(n) || p.push(n) : p = [n] : p = p.filter((C) => C !== n), o.value = p, t.multiple)
        e("update:modelValue", p), e("change", p);
      else {
        const C = p.length > 0 ? p[0] : void 0;
        e("update:modelValue", C), e("change", C);
      }
    }, b = (n) => o.value.includes(n);
    return Re("accordionContext", {
      disabled: h(() => t.disabled),
      animated: h(() => t.animated),
      toggleItem: r,
      isItemExpanded: b
    }), (n, d) => (S(), z("div", {
      class: g(s.value)
    }, [
      Y(n.$slots, "default")
    ], 2));
  }
}), _i = ["aria-expanded", "aria-disabled"], qi = /* @__PURE__ */ J({
  name: "AccordionItem",
  __name: "accordion-item",
  props: {
    value: {},
    header: {},
    disabled: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: Ui,
  setup(l, { emit: a }) {
    const t = l, e = a, o = Ee("accordionContext", {
      disabled: h(() => !1),
      animated: h(() => !0),
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
      toggleItem: (c, u) => {
      },
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
      isItemExpanded: (c) => !1
    }), s = h(
      () => t.disabled || o.disabled.value
    ), r = h(() => o.isItemExpanded(t.value)), b = H(null);
    ee(
      () => r.value,
      (c) => {
        if (!(!o.animated.value || !b.value))
          if (c) {
            const u = b.value;
            u.style.height = "0", u.style.height = `${u.scrollHeight}px`;
            const f = () => {
              r.value && (u.style.height = ""), u.removeEventListener("transitionend", f);
            };
            u.addEventListener("transitionend", f);
          } else {
            const u = b.value, f = u.offsetHeight;
            u.style.height = `${f}px`, u.style.height = "0";
          }
      }
    );
    const n = (c) => {
      if (s.value) return;
      e("click", c);
      const u = !r.value;
      o.toggleItem(t.value, u), e("toggle", u);
    }, d = h(() => {
      var c, u;
      return t.unstyled ? ((c = t.pt) == null ? void 0 : c.root) || "" : ji({
        class: (u = t.pt) == null ? void 0 : u.root
      });
    }), p = h(() => {
      var c, u;
      return t.unstyled ? ((c = t.pt) == null ? void 0 : c.header) || "" : Wi({
        class: (u = t.pt) == null ? void 0 : u.header
      });
    }), C = h(() => {
      var c, u;
      return t.unstyled ? ((c = t.pt) == null ? void 0 : c.trigger) || "" : Fi({
        disabled: s.value,
        class: (u = t.pt) == null ? void 0 : u.trigger
      });
    }), m = h(() => {
      var c, u;
      return t.unstyled ? ((c = t.pt) == null ? void 0 : c.title) || "" : Hi({
        class: (u = t.pt) == null ? void 0 : u.title
      });
    }), i = h(() => {
      var c, u;
      return t.unstyled ? ((c = t.pt) == null ? void 0 : c.icon) || "" : Gi({
        expanded: r.value,
        class: (u = t.pt) == null ? void 0 : u.icon
      });
    }), v = h(() => {
      var c, u;
      return t.unstyled ? ((c = t.pt) == null ? void 0 : c.content) || "" : Ni({
        animated: o.animated.value,
        expanded: r.value,
        class: (u = t.pt) == null ? void 0 : u.content
      });
    }), w = h(() => {
      var c, u;
      return t.unstyled ? ((c = t.pt) == null ? void 0 : c.contentInner) || "" : Ki({
        class: (u = t.pt) == null ? void 0 : u.contentInner
      });
    });
    return me(() => {
      b.value && !r.value && (b.value.style.height = "0");
    }), (c, u) => (S(), z("div", {
      class: g(d.value)
    }, [
      $("div", {
        class: g(p.value)
      }, [
        $("button", {
          type: "button",
          class: g(C.value),
          "aria-expanded": r.value,
          "aria-disabled": s.value,
          onClick: n
        }, [
          $("div", {
            class: g(m.value)
          }, [
            Y(c.$slots, "header", {}, () => [
              pe(X(c.header), 1)
            ])
          ], 2),
          $("div", {
            class: g(i.value)
          }, [
            Y(c.$slots, "icon", {}, () => [
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
        ], 10, _i)
      ], 2),
      $("div", {
        class: g(v.value),
        ref_key: "contentEl",
        ref: b
      }, [
        $("div", {
          class: g(w.value)
        }, [
          Y(c.$slots, "default")
        ], 2)
      ], 2)
    ], 2));
  }
}), Zi = Q(Xi), Ji = Q(qi), Qi = R({
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
}), ed = { key: 0 }, td = ["onClick"], ld = ["placeholder", "disabled", "readonly", "autofocus", "onKeydown"], ad = { key: 0 }, od = /* @__PURE__ */ J({
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
    const t = l, e = a, o = H(null), s = H(""), r = H(!1), b = h(() => t.unstyled ? {
      root: () => {
        var i;
        return ((i = t.pt) == null ? void 0 : i.root) || "";
      },
      wrapper: () => {
        var i;
        return ((i = t.pt) == null ? void 0 : i.wrapper) || "";
      },
      input: () => {
        var i;
        return ((i = t.pt) == null ? void 0 : i.input) || "";
      },
      prefix: () => {
        var i;
        return ((i = t.pt) == null ? void 0 : i.prefix) || "";
      },
      suffix: () => {
        var i;
        return ((i = t.pt) == null ? void 0 : i.suffix) || "";
      },
      tag: () => {
        var i;
        return ((i = t.pt) == null ? void 0 : i.tag) || "";
      },
      tagClose: () => {
        var i;
        return ((i = t.pt) == null ? void 0 : i.tagClose) || "";
      },
      count: () => {
        var i;
        return ((i = t.pt) == null ? void 0 : i.count) || "";
      }
    } : Qi({
      size: t.size,
      status: t.status,
      disabled: t.disabled
    })), n = () => {
      if (!s.value || t.disabled || t.readonly || t.maxCount && t.modelValue.length >= t.maxCount) return;
      const i = [...t.modelValue];
      i.includes(s.value) || (i.push(s.value), e("update:modelValue", i), e("change", i), e("add", s.value)), s.value = "";
    }, d = (i) => {
      if (t.disabled || t.readonly) return;
      const v = [...t.modelValue], w = v[i];
      v.splice(i, 1), e("update:modelValue", v), e("change", v), e("remove", w, i);
    }, p = () => {
      if (s.value === "" && t.modelValue.length > 0 && !t.disabled && !t.readonly) {
        const i = [...t.modelValue], v = i.length - 1, w = i[v];
        i.pop(), e("update:modelValue", i), e("change", i), e("remove", w, v);
      }
    }, C = (i) => {
      r.value = !0, e("focus", i);
    }, m = (i) => {
      r.value = !1, s.value && n(), e("blur", i);
    };
    return ee(
      () => t.autofocus,
      (i) => {
        i && o.value && o.value.focus();
      },
      { immediate: !0 }
    ), (i, v) => {
      var w, c;
      return S(), z("div", {
        class: g(b.value.root())
      }, [
        $("div", {
          class: g(b.value.wrapper())
        }, [
          i.$slots.prefix || i.prefixIcon ? (S(), z("div", {
            key: 0,
            class: g(b.value.prefix())
          }, [
            Y(i.$slots, "prefix", {}, () => [
              i.prefixIcon ? (S(), z("span", ed, X(i.prefixIcon), 1)) : N("", !0)
            ])
          ], 2)) : N("", !0),
          (S(!0), z(re, null, de(i.modelValue, (u, f) => (S(), z("div", {
            key: f,
            class: g(b.value.tag())
          }, [
            pe(X(u) + " ", 1),
            i.closable && !i.disabled && !i.readonly ? (S(), z("span", {
              key: 0,
              class: g(b.value.tagClose()),
              onClick: (x) => d(f)
            }, " × ", 10, td)) : N("", !0)
          ], 2))), 128)),
          Pe($("input", {
            ref_key: "inputRef",
            ref: o,
            class: g(b.value.input()),
            type: "text",
            placeholder: (w = i.modelValue) != null && w.length ? "" : i.placeholder,
            disabled: i.disabled,
            readonly: i.readonly,
            autofocus: i.autofocus,
            "onUpdate:modelValue": v[0] || (v[0] = (u) => s.value = u),
            onKeydown: [
              xe(ke(n, ["prevent"]), ["enter"]),
              xe(p, ["backspace"])
            ],
            onBlur: m,
            onFocus: C
          }, null, 42, ld), [
            [ll, s.value]
          ]),
          i.$slots.suffix || i.suffixIcon ? (S(), z("div", {
            key: 1,
            class: g(b.value.suffix())
          }, [
            Y(i.$slots, "suffix", {}, () => [
              i.suffixIcon ? (S(), z("span", ad, X(i.suffixIcon), 1)) : N("", !0)
            ])
          ], 2)) : N("", !0),
          i.showCount && i.maxCount ? (S(), z("span", {
            key: 2,
            class: g(b.value.count())
          }, X(((c = i.modelValue) == null ? void 0 : c.length) || 0) + "/" + X(i.maxCount), 3)) : N("", !0)
        ], 2)
      ], 2);
    };
  }
}), rd = Q(od), Te = R({
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
}), nd = {
  "update:visible": (l) => typeof l == "boolean",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  select: (l, a) => !0,
  show: () => !0,
  hide: () => !0
}, sd = {
  click: (l) => l instanceof MouseEvent
}, id = (l, a) => {
  const t = H(l.visible || !1), e = H(null), o = H(null), s = `dropdown-${Math.random().toString(36).slice(2, 11)}`;
  let r = null, b = null;
  ee(
    () => l.visible,
    (v) => {
      v !== void 0 && (t.value = v);
    }
  ), ee(
    () => t.value,
    (v) => {
      a("update:visible", v), a(v ? "show" : "hide");
    }
  );
  const n = () => {
    l.disabled || ((l.trigger === "hover" || l.trigger === "focus") && l.showDelay ? (clearTimeout(b), r = window.setTimeout(() => {
      t.value = !0;
    }, l.showDelay)) : t.value = !0);
  }, d = () => {
    l.trigger !== "manual" && ((l.trigger === "hover" || l.trigger === "focus") && l.hideDelay ? (clearTimeout(r), b = window.setTimeout(() => {
      t.value = !1;
    }, l.hideDelay)) : t.value = !1);
  }, p = () => {
    l.disabled || l.trigger !== "manual" && (t.value = !t.value);
  }, C = (v) => {
    if (!l.closeOnClickOutside || !t.value || l.trigger === "manual") return;
    const w = v.target;
    o.value && !o.value.contains(w) && e.value && !e.value.contains(w) && d();
  }, m = (v, w) => {
    l.closeOnSelect && l.trigger !== "manual" && d(), a("select", v, w);
  }, i = (v, w) => {
    v.disabled || v.divider || v.value !== void 0 && m(v.value, w);
  };
  return me(() => {
    l.closeOnClickOutside && document.addEventListener("click", C);
  }), Ve(() => {
    document.removeEventListener("click", C), r && clearTimeout(r), b && clearTimeout(b);
  }), {
    isVisible: t,
    triggerRef: e,
    contentRef: o,
    dropdownId: s,
    show: n,
    hide: d,
    toggle: p,
    handleItemClick: m,
    handleOptionClick: i
  };
}, dd = ["aria-expanded", "aria-controls"], ud = ["id"], cd = ["onClick", "aria-disabled"], fd = /* @__PURE__ */ J({
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
  emits: nd,
  setup(l, { expose: a, emit: t }) {
    const e = l, o = t, {
      isVisible: s,
      triggerRef: r,
      contentRef: b,
      dropdownId: n,
      show: d,
      hide: p,
      toggle: C,
      handleItemClick: m,
      handleOptionClick: i
    } = id(e, o), v = h(() => {
      var O, L, P, W, k, E, I, G, j, K;
      if (e.unstyled)
        return {
          root: ((O = e.pt) == null ? void 0 : O.root) || "",
          trigger: ((L = e.pt) == null ? void 0 : L.trigger) || "",
          content: ((P = e.pt) == null ? void 0 : P.content) || "",
          arrow: ((W = e.pt) == null ? void 0 : W.arrow) || "",
          menu: ((k = e.pt) == null ? void 0 : k.menu) || "",
          menuItem: ((E = e.pt) == null ? void 0 : E.menuItem) || "",
          menuItemSelected: ((I = e.pt) == null ? void 0 : I.menuItemSelected) || "",
          menuItemDisabled: ((G = e.pt) == null ? void 0 : G.menuItemDisabled) || "",
          menuItemIcon: ((j = e.pt) == null ? void 0 : j.menuItemIcon) || "",
          menuDivider: ((K = e.pt) == null ? void 0 : K.menuDivider) || ""
        };
      const {
        root: w,
        trigger: c,
        content: u,
        arrow: f,
        menu: x,
        menuItem: D,
        menuItemSelected: M,
        menuItemActive: B,
        menuItemDisabled: T,
        menuItemIcon: V,
        menuDivider: A
      } = Te({
        placement: e.placement,
        size: e.size,
        disabled: e.disabled
      });
      return {
        root: w(),
        trigger: c(),
        content: u(),
        arrow: f(),
        menu: x(),
        menuItem: D(),
        menuItemSelected: M(),
        menuItemActive: B(),
        menuItemDisabled: T(),
        menuItemIcon: V(),
        menuDivider: A()
      };
    });
    return a({
      show: d,
      hide: p,
      toggle: C
    }), Re("dropdown", {
      handleItemClick: m,
      closeOnSelect: e.closeOnSelect
    }), (w, c) => (S(), z("div", {
      class: g(v.value.root)
    }, [
      $("div", {
        ref_key: "triggerRef",
        ref: r,
        class: g(v.value.trigger),
        onClick: c[0] || (c[0] = (u) => w.trigger === "click" && y(C)()),
        onMouseenter: c[1] || (c[1] = (u) => w.trigger === "hover" && y(d)()),
        onMouseleave: c[2] || (c[2] = (u) => w.trigger === "hover" && y(p)()),
        onFocus: c[3] || (c[3] = (u) => w.trigger === "focus" && y(d)()),
        onBlur: c[4] || (c[4] = (u) => w.trigger === "focus" && y(p)()),
        onKeydown: [
          c[5] || (c[5] = xe(
            //@ts-ignore
            (...u) => y(p) && y(p)(...u),
            ["esc"]
          )),
          c[6] || (c[6] = xe(ke((u) => w.trigger === "click" && y(C)(), ["prevent"]), ["space"])),
          c[7] || (c[7] = xe((u) => w.trigger === "click" && y(C)(), ["enter"]))
        ],
        tabindex: "0",
        role: "button",
        "aria-haspopup": !0,
        "aria-expanded": y(s),
        "aria-controls": y(n)
      }, [
        Y(w.$slots, "trigger")
      ], 42, dd),
      Ue(Lt, { name: "dropdown" }, {
        default: ft(() => [
          y(s) ? (S(), z("div", {
            key: 0,
            ref_key: "contentRef",
            ref: b,
            id: y(n),
            class: g(v.value.content),
            onMouseenter: c[8] || (c[8] = (u) => w.trigger === "hover" && y(d)()),
            onMouseleave: c[9] || (c[9] = (u) => w.trigger === "hover" && y(p)()),
            role: "menu"
          }, [
            w.arrow ? (S(), z("div", {
              key: 0,
              class: g(v.value.arrow)
            }, null, 2)) : N("", !0),
            $("div", {
              class: g(v.value.menu)
            }, [
              w.options && w.options.length ? (S(!0), z(re, { key: 0 }, de(w.options, (u, f) => (S(), z(re, { key: f }, [
                u.divider ? (S(), z("div", {
                  key: 0,
                  class: g(v.value.menuDivider),
                  role: "separator"
                }, null, 2)) : (S(), z("div", {
                  key: 1,
                  class: g([
                    v.value.menuItem,
                    u.disabled && v.value.menuItemDisabled
                  ]),
                  onClick: (x) => !u.disabled && y(i)(u, x),
                  role: "menuitem",
                  "aria-disabled": u.disabled
                }, [
                  u.icon ? (S(), z("span", {
                    key: 0,
                    class: g(v.value.menuItemIcon)
                  }, X(u.icon), 3)) : N("", !0),
                  $("span", null, X(u.label), 1)
                ], 10, cd))
              ], 64))), 128)) : Y(w.$slots, "default", { key: 1 })
            ], 2)
          ], 42, ud)) : N("", !0)
        ]),
        _: 3
      })
    ], 2));
  }
}), pd = ["aria-disabled"], bd = /* @__PURE__ */ J({
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
  emits: sd,
  setup(l, { emit: a }) {
    const t = l, e = a, o = Ee("dropdown", {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      handleItemClick: (p, C) => {
      },
      closeOnSelect: !0
    }), s = (p) => {
      e("click", p), t.value !== void 0 && o.handleItemClick(t.value, p);
    }, r = (p) => {
      const C = new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0,
        view: window
      });
      e("click", C), t.value !== void 0 && o.handleItemClick(t.value, C);
    }, b = h(() => {
      var p, C;
      return t.unstyled ? ((p = t.pt) == null ? void 0 : p.root) || "" : [
        Te().menuItem(),
        t.active && Te().menuItemActive(),
        t.disabled && Te().menuItemDisabled(),
        (C = t.pt) == null ? void 0 : C.root
      ].filter(Boolean).join(" ");
    }), n = h(() => {
      var p;
      return t.unstyled ? ((p = t.pt) == null ? void 0 : p.icon) || "" : Te().menuItemIcon();
    }), d = h(() => {
      var p;
      return t.unstyled ? ((p = t.pt) == null ? void 0 : p.root) || "" : Te().menuDivider();
    });
    return (p, C) => p.divider ? (S(), z("div", {
      key: 1,
      role: "separator",
      class: g(d.value)
    }, null, 2)) : (S(), z("div", {
      key: 0,
      class: g(b.value),
      role: "menuitem",
      tabindex: "0",
      "aria-disabled": p.disabled,
      onClick: C[0] || (C[0] = (m) => !p.disabled && s(m)),
      onKeydown: [
        C[1] || (C[1] = xe((m) => !p.disabled && r(), ["enter"])),
        C[2] || (C[2] = xe(ke((m) => !p.disabled && r(), ["prevent"]), ["space"]))
      ]
    }, [
      Y(p.$slots, "icon", {}, () => [
        p.icon ? (S(), z("span", {
          key: 0,
          class: g(n.value)
        }, X(p.icon), 3)) : N("", !0)
      ]),
      Y(p.$slots, "default", {}, () => [
        pe(X(p.label), 1)
      ])
    ], 42, pd));
  }
}), gd = /* @__PURE__ */ J({
  __name: "DropdownDivider",
  props: {
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  setup(l) {
    const a = l, t = h(() => {
      var e, o;
      return a.unstyled ? ((e = a.pt) == null ? void 0 : e.root) || "" : [Te().menuDivider(), (o = a.pt) == null ? void 0 : o.root].filter(Boolean).join(" ");
    });
    return (e, o) => (S(), z("div", {
      class: g(t.value),
      role: "separator"
    }, null, 2));
  }
}), vd = Q(fd), md = Q(bd), yd = Q(gd), hd = R({
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
}), wd = R({
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
}), xd = R({
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
}), kd = (l, a) => {
  const t = H(l.active || !1), e = h({
    get: () => l.active !== void 0 ? l.active : t.value,
    set: (r) => {
      l.disabled || (l.active === void 0 && (t.value = r), a("update:active", r), a("change", r));
    }
  }), o = () => {
    e.value = !e.value;
  };
  return {
    isActive: e,
    toggle: o,
    handleTrigger: (r) => {
      l.disabled || l.trigger === "click" && o();
    }
  };
}, Cd = ["tabindex", "aria-checked", "aria-disabled"], Sd = /* @__PURE__ */ J({
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
    const t = l, e = a, { isActive: o, handleTrigger: s } = kd(t, e), r = h(() => {
      var d, p;
      return t.unstyled ? ((d = t.pt) == null ? void 0 : d.root) || "" : hd({
        variant: t.variant,
        size: t.size,
        class: (p = t.pt) == null ? void 0 : p.root
      });
    }), b = h(() => {
      var d, p;
      return t.unstyled ? ((d = t.pt) == null ? void 0 : d.on) || "" : wd({
        active: o.value,
        variant: t.variant,
        disabled: t.disabled,
        class: (p = t.pt) == null ? void 0 : p.on
      });
    }), n = h(() => {
      var d, p;
      return t.unstyled ? ((d = t.pt) == null ? void 0 : d.off) || "" : xd({
        active: o.value,
        variant: t.variant,
        disabled: t.disabled,
        class: (p = t.pt) == null ? void 0 : p.off
      });
    });
    return (d, p) => (S(), z("div", {
      class: g(r.value),
      onClick: p[0] || (p[0] = (C) => t.trigger === "click" ? y(s)(C) : void 0),
      onMouseenter: p[1] || (p[1] = (C) => t.trigger === "hover" ? o.value = !0 : void 0),
      onMouseleave: p[2] || (p[2] = (C) => t.trigger === "hover" ? o.value = !1 : void 0),
      onFocus: p[3] || (p[3] = (C) => t.trigger === "focus" ? o.value = !0 : void 0),
      onBlur: p[4] || (p[4] = (C) => t.trigger === "focus" ? o.value = !1 : void 0),
      tabindex: t.trigger === "focus" ? 0 : void 0,
      "aria-checked": y(o),
      "aria-disabled": t.disabled,
      role: "switch"
    }, [
      $("div", {
        class: g(b.value)
      }, [
        Y(d.$slots, "on")
      ], 2),
      $("div", {
        class: g(n.value)
      }, [
        Y(d.$slots, "off")
      ], 2)
    ], 42, Cd));
  }
}), zd = Q(Sd), Bd = R({
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
}), Vd = R({
  base: "absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
}), $d = R({
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
}), Id = {
  load: (l) => l instanceof Event,
  error: (l) => l instanceof Event,
  zoom: (l) => typeof l == "boolean"
}, Dd = (l, a) => {
  const t = H(null), e = H(!0), o = H(!1), s = H(l.isZoomed || !1), r = (d) => {
    e.value = !1, a("load", d);
  }, b = (d) => {
    e.value = !1, o.value = !0, a("error", d);
  }, n = () => {
    l.isZoomable && (s.value = !s.value, a("zoom", s.value));
  };
  return ee(
    () => l.isZoomed,
    (d) => {
      d !== void 0 && (s.value = d);
    }
  ), ee(
    () => l.src,
    () => {
      e.value = !0, o.value = !1;
    }
  ), {
    imageRef: t,
    isLoading: e,
    isError: o,
    isZoomed: s,
    handleLoad: r,
    handleError: b,
    toggleZoom: n
  };
}, Md = ["aria-label"], Td = ["src", "alt", "loading"], Rd = ["src", "alt"], Ed = {
  key: 3,
  class: "absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800"
}, Ld = { class: "text-gray-400 flex flex-col items-center" }, Od = /* @__PURE__ */ J({
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
  emits: Id,
  setup(l, { expose: a, emit: t }) {
    const e = l, o = t, {
      imageRef: s,
      isLoading: r,
      isError: b,
      isZoomed: n,
      handleLoad: d,
      handleError: p,
      toggleZoom: C
    } = Dd(e, o), m = () => {
      e.isZoomable && C();
    }, i = h(() => {
      var D, M;
      return e.unstyled ? ((D = e.pt) == null ? void 0 : D.root) || "" : Bd({
        fit: e.fit,
        radius: e.radius,
        isZoomable: e.isZoomable,
        isZoomed: n.value,
        class: (M = e.pt) == null ? void 0 : M.root
      });
    }), v = h(() => {
      var D, M;
      return e.unstyled ? ((D = e.pt) == null ? void 0 : D.img) || "" : `w-full h-full transition-transform ${n.value ? "scale-" + e.zoomScale : ""} ${((M = e.pt) == null ? void 0 : M.img) || ""}`;
    }), w = h(() => {
      var D, M;
      return e.unstyled ? ((D = e.pt) == null ? void 0 : D.skeleton) || "" : Vd({ class: (M = e.pt) == null ? void 0 : M.skeleton });
    }), c = h(() => {
      var D, M;
      return e.unstyled ? ((D = e.pt) == null ? void 0 : D.overlay) || "" : $d({ visible: n.value, class: (M = e.pt) == null ? void 0 : M.overlay });
    }), u = h(() => {
      const D = {};
      return e.width !== "auto" && (D.width = typeof e.width == "number" ? `${e.width}px` : e.width), e.height !== "auto" && (D.height = typeof e.height == "number" ? `${e.height}px` : e.height), D;
    }), f = h(() => ({
      objectFit: e.fit
    })), x = h(() => e.skeletonColor ? { backgroundColor: e.skeletonColor } : {});
    return a({
      imageRef: s,
      isLoading: r,
      isError: b,
      isZoomed: n
    }), (D, M) => (S(), z("div", {
      class: g(i.value),
      style: ue(u.value),
      onClick: m,
      role: "img",
      "aria-label": D.alt
    }, [
      D.skeleton && y(r) ? (S(), z("div", {
        key: 0,
        class: g(w.value),
        style: ue(x.value)
      }, null, 6)) : N("", !0),
      $("img", {
        ref_key: "imageRef",
        ref: s,
        src: D.src,
        alt: D.alt,
        class: g(v.value),
        style: ue(f.value),
        loading: D.loading,
        onLoad: M[0] || (M[0] = //@ts-ignore
        (...B) => y(d) && y(d)(...B)),
        onError: M[1] || (M[1] = //@ts-ignore
        (...B) => y(p) && y(p)(...B))
      }, null, 46, Td),
      D.blurred && y(r) ? (S(), z("img", {
        key: 1,
        src: D.src,
        alt: D.alt,
        class: "absolute inset-0 w-full h-full",
        style: ue({
          filter: `blur(${D.blurAmount}px)`,
          transform: "scale(1.1)",
          objectFit: D.fit
        })
      }, null, 12, Rd)) : N("", !0),
      D.isZoomable && y(n).valueOf() ? (S(), z("div", {
        key: 2,
        class: g(c.value)
      }, [
        Y(D.$slots, "zoom-icon", {}, () => [
          M[2] || (M[2] = al('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>', 1))
        ])
      ], 2)) : N("", !0),
      y(b) ? (S(), z("div", Ed, [
        Y(D.$slots, "error", {}, () => [
          $("div", Ld, [
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
            $("span", null, X(D.alt || "图片加载失败"), 1)
          ])
        ])
      ])) : N("", !0)
    ], 14, Md));
  }
}), Ad = Q(Od), Pd = R({
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
}), jd = R({
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
}), Wd = {
  click: (l) => l instanceof MouseEvent
}, Fd = (l, a) => {
  const t = (o) => {
    if (l.disabled) {
      o.preventDefault();
      return;
    }
    a("click", o);
  }, e = h(() => {
    const o = {};
    return l.href && (o.href = l.href), l.external && (o.target = "_blank", o.rel = "noopener noreferrer"), o;
  });
  return {
    handleClick: t,
    linkAttributes: e
  };
}, Hd = ["aria-disabled"], Gd = /* @__PURE__ */ J({
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
  emits: Wd,
  setup(l, { emit: a }) {
    const t = l, e = a, { handleClick: o, linkAttributes: s } = Fd(t, e), r = h(() => {
      var n, d;
      return t.unstyled ? ((n = t.pt) == null ? void 0 : n.root) || "" : Pd({
        variant: t.variant,
        size: t.size,
        underline: t.underline,
        disabled: t.disabled,
        class: (d = t.pt) == null ? void 0 : d.root
      });
    }), b = (n) => {
      var d, p;
      return t.unstyled ? ((d = t.pt) == null ? void 0 : d.icon) || "" : jd({
        position: n,
        size: t.size,
        class: (p = t.pt) == null ? void 0 : p.icon
      });
    };
    return (n, d) => (S(), z("a", ol({ class: r.value }, y(s), {
      onClick: d[0] || (d[0] = //@ts-ignore
      (...p) => y(o) && y(o)(...p)),
      "aria-disabled": n.disabled
    }), [
      n.iconPosition === "left" ? Y(n.$slots, "icon-left", { key: 0 }, () => [
        n.$slots["icon-left"] ? (S(), z("span", {
          key: 0,
          class: g(b("left"))
        }, [
          Y(n.$slots, "icon-left")
        ], 2)) : N("", !0)
      ]) : N("", !0),
      Y(n.$slots, "default"),
      n.iconPosition === "right" ? Y(n.$slots, "icon-right", { key: 1 }, () => [
        n.$slots["icon-right"] ? (S(), z("span", {
          key: 0,
          class: g(b("right"))
        }, [
          Y(n.$slots, "icon-right")
        ], 2)) : N("", !0)
      ]) : N("", !0),
      n.external && !n.$slots["icon-right"] && n.iconPosition !== "left" ? (S(), z("span", {
        key: 2,
        class: g(b("right"))
      }, d[1] || (d[1] = [
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
      ]), 2)) : N("", !0)
    ], 16, Hd));
  }
}), Nd = Q(Gd), Kd = R({
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
}), Yd = {
  change: (l, a) => typeof l == "number" && typeof a == "number",
  "update:active-index": (l) => typeof l == "number"
}, Ud = ["tabindex"], Xd = ["tabindex"], _d = ["onClick", "aria-label", "aria-current", "tabindex"], qd = /* @__PURE__ */ J({
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
  emits: Yd,
  setup(l, { expose: a, emit: t }) {
    const e = l, o = t, s = We(), r = H(null), b = H(e.initialIndex);
    let n = null;
    const d = h(() => {
      if (!s) return 0;
      let V = 0;
      for (; s[`item-${V}`]; )
        V++;
      return V || 1;
    }), p = h(() => {
      var V, A;
      return e.unstyled ? ((V = e.pt) == null ? void 0 : V.root) || "" : Kd({
        variant: e.variant,
        size: e.size,
        class: (A = e.pt) == null ? void 0 : A.root
      });
    }), C = h(() => {
      var V, A;
      return e.unstyled ? ((V = e.pt) == null ? void 0 : V.container) || "" : `relative w-full h-full ${((A = e.pt) == null ? void 0 : A.container) || ""}`;
    }), m = h(() => {
      var V, A;
      return e.unstyled ? ((V = e.pt) == null ? void 0 : V.item) || "" : `w-full h-full ${((A = e.pt) == null ? void 0 : A.item) || ""}`;
    }), i = h(() => {
      var V, A;
      return e.unstyled ? ((V = e.pt) == null ? void 0 : V.prevButton) || "" : `absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${((A = e.pt) == null ? void 0 : A.prevButton) || ""}`;
    }), v = h(() => {
      var V, A;
      return e.unstyled ? ((V = e.pt) == null ? void 0 : V.nextButton) || "" : `absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${((A = e.pt) == null ? void 0 : A.nextButton) || ""}`;
    }), w = h(() => {
      var V, A;
      return e.unstyled ? ((V = e.pt) == null ? void 0 : V.indicators) || "" : `absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 ${((A = e.pt) == null ? void 0 : A.indicators) || ""}`;
    }), c = h(() => {
      var V, A;
      return e.unstyled ? ((V = e.pt) == null ? void 0 : V.indicator) || "" : `w-2 h-2 rounded-full bg-white/50 hover:bg-white/75 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${((A = e.pt) == null ? void 0 : A.indicator) || ""}`;
    }), u = h(() => {
      var V, A;
      return e.unstyled ? ((V = e.pt) == null ? void 0 : V.activeIndicator) || "" : `w-6 h-2 rounded-full bg-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${((A = e.pt) == null ? void 0 : A.activeIndicator) || ""}`;
    }), f = () => {
      if (e.disabled) return;
      const V = b.value;
      b.value < d.value - 1 ? b.value++ : e.loop && (b.value = 0), b.value !== V && (o("change", b.value, V), o("update:active-index", b.value));
    }, x = () => {
      if (e.disabled) return;
      const V = b.value;
      b.value > 0 ? b.value-- : e.loop && (b.value = d.value - 1), b.value !== V && (o("change", b.value, V), o("update:active-index", b.value));
    }, D = (V) => {
      if (!e.disabled && V >= 0 && V < d.value) {
        const A = b.value;
        b.value = V, o("change", b.value, A), o("update:active-index", b.value);
      }
    }, M = () => {
      e.autoplay && !e.disabled && (n = setInterval(() => {
        f();
      }, e.interval));
    }, B = () => {
      n && (clearInterval(n), n = null);
    }, T = (V) => {
      !e.keyboardNavigation || e.disabled || (V.key === "ArrowLeft" ? x() : V.key === "ArrowRight" && f());
    };
    return ee(
      () => e.autoplay,
      (V) => {
        V ? M() : B();
      }
    ), ee(
      () => e.disabled,
      (V) => {
        V ? B() : e.autoplay && M();
      }
    ), me(() => {
      e.autoplay && M(), e.keyboardNavigation && r.value && r.value.addEventListener("keydown", T);
    }), je(() => {
      B(), r.value && r.value.removeEventListener("keydown", T);
    }), a({
      next: f,
      prev: x,
      goToSlide: D
    }), (V, A) => (S(), z("div", {
      class: g(p.value),
      ref_key: "rootRef",
      ref: r
    }, [
      $("div", {
        class: g(C.value)
      }, [
        (S(!0), z(re, null, de(d.value, (O, L) => (S(), z(re, null, [
          L === b.value ? (S(), z("div", {
            key: L,
            class: g(m.value)
          }, [
            Y(V.$slots, `item-${L}`)
          ], 2)) : N("", !0)
        ], 64))), 256))
      ], 2),
      V.navigation && !V.disabled ? (S(), z(re, { key: 0 }, [
        V.navigation && (V.loop || b.value > 0) ? (S(), z("button", {
          key: 0,
          class: g(i.value),
          onClick: x,
          "aria-label": "Previous slide",
          tabindex: V.disabled ? -1 : 0
        }, [
          Y(V.$slots, "prev-icon", {}, () => [
            A[0] || (A[0] = $("svg", {
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
        ], 10, Ud)) : N("", !0),
        V.navigation && (V.loop || b.value < d.value - 1) ? (S(), z("button", {
          key: 1,
          class: g(v.value),
          onClick: f,
          "aria-label": "Next slide",
          tabindex: V.disabled ? -1 : 0
        }, [
          Y(V.$slots, "next-icon", {}, () => [
            A[1] || (A[1] = $("svg", {
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
        ], 10, Xd)) : N("", !0)
      ], 64)) : N("", !0),
      V.indicators && !V.disabled ? (S(), z("div", {
        key: 1,
        class: g(w.value)
      }, [
        (S(!0), z(re, null, de(d.value, (O, L) => (S(), z("button", {
          key: L,
          class: g([
            L === b.value ? u.value : c.value
          ]),
          onClick: (P) => D(L),
          "aria-label": `Go to slide ${L + 1}`,
          "aria-current": L === b.value,
          tabindex: V.disabled ? -1 : 0
        }, null, 10, _d))), 128))
      ], 2)) : N("", !0)
    ], 2));
  }
}), Zd = Q(qd), Jd = R({
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
}), Qd = {}, eu = {}, tu = /* @__PURE__ */ J({
  name: "Timeline",
  __name: "timeline",
  props: {
    orientation: { default: "vertical" },
    align: { default: "left" },
    reverse: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: Qd,
  setup(l) {
    const a = l;
    Re("timelineAlign", a.align), Re("timelineOrientation", a.orientation);
    const t = h(() => {
      var o, s;
      return a.unstyled ? ((o = a.pt) == null ? void 0 : o.root) || "" : Jd({
        orientation: a.orientation,
        align: a.align,
        class: (s = a.pt) == null ? void 0 : s.root
      });
    }), e = h(() => a.reverse ? { flexDirection: "column-reverse" } : {});
    return (o, s) => (S(), z("div", {
      class: g(t.value),
      style: ue(e.value)
    }, [
      Y(o.$slots, "default")
    ], 6));
  }
}), lu = /* @__PURE__ */ J({
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
  emits: eu,
  setup(l) {
    const a = l, t = Ee(
      "timelineAlign",
      "left"
    ), e = Ee(
      "timelineOrientation",
      "vertical"
    ), o = h(() => t === "alternate"), s = h(() => {
      var v, w, c;
      if (a.unstyled)
        return ((v = a.pt) == null ? void 0 : v.root) || "";
      const i = "relative flex";
      return e === "vertical" ? `${i} ${t === "right" ? "flex-row-reverse" : "flex-row"} ${((w = a.pt) == null ? void 0 : w.root) || ""}` : `${i} flex-col ${((c = a.pt) == null ? void 0 : c.root) || ""}`;
    }), r = h(() => {
      var v, w, c;
      if (a.unstyled)
        return ((v = a.pt) == null ? void 0 : v.dot) || "";
      const i = "flex-shrink-0 z-10";
      return e === "vertical" ? `${i} ${t === "right" ? "mr-4" : "ml-4"} ${((w = a.pt) == null ? void 0 : w.dot) || ""}` : `${i} ${((c = a.pt) == null ? void 0 : c.dot) || ""}`;
    }), b = h(() => {
      var i, v, w;
      return a.unstyled ? ((i = a.pt) == null ? void 0 : i.connector) || "" : e === "vertical" ? `absolute top-6 left-0 w-0.5 h-full bg-gray-300 dark:bg-gray-600 ${t === "right" ? "right-0 left-auto" : ""} ${((v = a.pt) == null ? void 0 : v.connector) || ""}` : `absolute left-6 top-0 w-full h-0.5 bg-gray-300 dark:bg-gray-600 ${((w = a.pt) == null ? void 0 : w.connector) || ""}`;
    }), n = h(() => {
      var i, v;
      return a.unstyled ? ((i = a.pt) == null ? void 0 : i.content) || "" : `flex-1 ${((v = a.pt) == null ? void 0 : v.content) || ""}`;
    }), d = h(() => {
      var i, v;
      return a.unstyled ? ((i = a.pt) == null ? void 0 : i.opposite) || "" : `flex-1 text-right ${((v = a.pt) == null ? void 0 : v.opposite) || ""}`;
    }), p = h(() => a.dotColor ? { borderColor: a.dotColor } : {}), C = h(() => a.lineColor ? { backgroundColor: a.lineColor } : {}), m = h(() => {
      const i = {};
      return a.dotColor && !a.unstyled && (a.lineColor || (i["--line-color"] = a.dotColor)), i;
    });
    return (i, v) => (S(), z("div", {
      class: g(s.value),
      style: ue(m.value)
    }, [
      $("div", {
        class: g(r.value),
        style: ue(p.value)
      }, [
        Y(i.$slots, "dot", {}, () => {
          var w;
          return [
            $("div", {
              class: g([
                "w-3 h-3 rounded-full border-2 border-gray-300 dark:border-gray-600",
                (w = a.pt) == null ? void 0 : w.dot
              ]),
              style: ue(p.value)
            }, null, 6)
          ];
        })
      ], 6),
      a.isLast ? N("", !0) : (S(), z("div", {
        key: 0,
        class: g(b.value),
        style: ue(C.value)
      }, null, 6)),
      $("div", {
        class: g(n.value)
      }, [
        Y(i.$slots, "default")
      ], 2),
      o.value ? (S(), z("div", {
        key: 1,
        class: g(d.value)
      }, [
        Y(i.$slots, "opposite")
      ], 2)) : N("", !0)
    ], 6));
  }
}), au = Q(tu), ou = Q(lu), ot = [
  Jl,
  ia,
  ba,
  ya,
  Sa,
  La,
  Fa,
  Qa,
  so,
  vo,
  ko,
  Mo,
  Eo,
  Ho,
  Ko,
  Xo,
  Jo,
  Br,
  lr,
  nr,
  Pr,
  gt,
  Zt,
  Cn,
  Ln,
  Un,
  ls,
  as,
  os,
  gs,
  vs,
  Ss,
  Hs,
  Zs,
  Qt,
  di,
  mi,
  yi,
  Ai,
  Zi,
  Ji,
  rd,
  vd,
  md,
  yd,
  zd,
  Ad,
  Nd,
  Zd,
  au,
  ou
], nu = {
  install: (l) => {
    var a;
    for (const t in ot)
      l.component(((a = ot[t]) == null ? void 0 : a.name) || t, ot[t]);
  }
};
export {
  Zi as Accordion,
  Ji as AccordionItem,
  Mo as Alert,
  ba as Avatar,
  ya as Badge,
  Qt as Breadcrumb,
  di as BreadcrumbItem,
  Ho as Button,
  gt as Calendar,
  Ko as Card,
  Zd as Carousel,
  lr as Checkbox,
  ko as Chip,
  Cn as DatePicker,
  Ln as DateTimePicker,
  Xo as Divider,
  La as Drawer,
  vd as Dropdown,
  yd as DropdownDivider,
  md as DropdownItem,
  Ad as Image,
  nr as Input,
  Jl as InputOtp,
  rd as InputTag,
  Eo as Kbd,
  Nd as Link,
  ia as Modal,
  Hs as Paginator,
  Ss as Panel,
  so as Popover,
  Zs as Progress,
  Ai as RangeCalendar,
  Pr as Rate,
  Fa as Segmented,
  Br as Select,
  ls as Skeleton,
  os as SkeletonAvatar,
  as as SkeletonText,
  Qa as Slider,
  mi as Splitter,
  yi as SplitterPanel,
  zd as Swap,
  Sa as Switch,
  vs as TabItem,
  gs as Tabs,
  Jo as Textarea,
  Zt as TimePicker,
  Un as TimeSelect,
  au as Timeline,
  ou as TimelineItem,
  vo as Tooltip,
  nu as Versakit
};
