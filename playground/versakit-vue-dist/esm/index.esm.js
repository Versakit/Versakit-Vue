import { ref as j, nextTick as Se, defineComponent as ee, computed as g, createElementBlock as x, openBlock as y, normalizeClass as p, Fragment as ie, renderList as ve, unref as S, withDirectives as Xe, vModelText as Tt, watch as ae, onUnmounted as He, useSlots as Ze, onMounted as $e, createBlock as Ee, Teleport as ht, createVNode as Le, Transition as ct, withCtx as qe, createCommentVNode as H, createElementVNode as $, renderSlot as K, toDisplayString as U, onBeforeUnmount as Pe, normalizeStyle as ue, createTextVNode as xe, resolveDynamicComponent as dt, withModifiers as Re, inject as Ae, provide as Oe, toRef as Me, vShow as zt, withKeys as De, reactive as vl, vModelDynamic as gl, createStaticVNode as bl, mergeProps as Kt, TransitionGroup as ml, render as yl } from "vue";
const le = (l, a) => {
  if (l.install = (t) => {
    for (const e of [l, ...Object.values(a ?? {})])
      t.component(e.name, e);
  }, a)
    for (const [t, e] of Object.entries(a))
      l[t] = e;
  return l;
};
function hl(l = 4) {
  const a = j(Array(l).fill("")), t = j([]);
  return {
    values: a,
    setRef: (s, v) => {
      s && (t.value[v] = s);
    },
    onInput: (s, v) => {
      const u = s.target.value.replace(/\D/g, "");
      a.value[v] = u.slice(0, 1), u && v < l - 1 && Se(() => {
        var f;
        (f = t.value[v + 1]) == null || f.focus();
      });
    },
    onKeydown: (s, v) => {
      s.key === "Backspace" && !a.value[v] && v > 0 && Se(() => {
        var n;
        (n = t.value[v - 1]) == null || n.focus();
      });
    }
  };
}
var jt = (l) => typeof l == "boolean" ? `${l}` : l === 0 ? "0" : l, Ie = (l) => !l || typeof l != "object" || Object.keys(l).length === 0, wl = (l, a) => JSON.stringify(l) === JSON.stringify(a);
function Yt(l, a) {
  l.forEach(function(t) {
    Array.isArray(t) ? Yt(t, a) : a.push(t);
  });
}
function Ut(l) {
  let a = [];
  return Yt(l, a), a;
}
var Xt = (...l) => Ut(l).filter(Boolean), qt = (l, a) => {
  let t = {}, e = Object.keys(l), r = Object.keys(a);
  for (let o of e) if (r.includes(o)) {
    let s = l[o], v = a[o];
    Array.isArray(s) || Array.isArray(v) ? t[o] = Xt(v, s) : typeof s == "object" && typeof v == "object" ? t[o] = qt(s, v) : t[o] = v + " " + s;
  } else t[o] = l[o];
  for (let o of r) e.includes(o) || (t[o] = a[o]);
  return t;
}, _t = (l) => !l || typeof l != "string" ? l : l.replace(/\s+/g, " ").trim();
const Rt = "-", xl = (l) => {
  const a = Cl(l), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: e
  } = l;
  return {
    getClassGroupId: (s) => {
      const v = s.split(Rt);
      return v[0] === "" && v.length !== 1 && v.shift(), Zt(v, a) || kl(s);
    },
    getConflictingClassGroupIds: (s, v) => {
      const n = t[s] || [];
      return v && e[s] ? [...n, ...e[s]] : n;
    }
  };
}, Zt = (l, a) => {
  var s;
  if (l.length === 0)
    return a.classGroupId;
  const t = l[0], e = a.nextPart.get(t), r = e ? Zt(l.slice(1), e) : void 0;
  if (r)
    return r;
  if (a.validators.length === 0)
    return;
  const o = l.join(Rt);
  return (s = a.validators.find(({
    validator: v
  }) => v(o))) == null ? void 0 : s.classGroupId;
}, Wt = /^\[(.+)\]$/, kl = (l) => {
  if (Wt.test(l)) {
    const a = Wt.exec(l)[1], t = a == null ? void 0 : a.substring(0, a.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, Cl = (l) => {
  const {
    theme: a,
    classGroups: t
  } = l, e = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const r in t)
    $t(t[r], e, r, a);
  return e;
}, $t = (l, a, t, e) => {
  l.forEach((r) => {
    if (typeof r == "string") {
      const o = r === "" ? a : Ft(a, r);
      o.classGroupId = t;
      return;
    }
    if (typeof r == "function") {
      if (Sl(r)) {
        $t(r(e), a, t, e);
        return;
      }
      a.validators.push({
        validator: r,
        classGroupId: t
      });
      return;
    }
    Object.entries(r).forEach(([o, s]) => {
      $t(s, Ft(a, o), t, e);
    });
  });
}, Ft = (l, a) => {
  let t = l;
  return a.split(Rt).forEach((e) => {
    t.nextPart.has(e) || t.nextPart.set(e, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(e);
  }), t;
}, Sl = (l) => l.isThemeGetter, zl = (l) => {
  if (l < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let a = 0, t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
  const r = (o, s) => {
    t.set(o, s), a++, a > l && (a = 0, e = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let s = t.get(o);
      if (s !== void 0)
        return s;
      if ((s = e.get(o)) !== void 0)
        return r(o, s), s;
    },
    set(o, s) {
      t.has(o) ? t.set(o, s) : r(o, s);
    }
  };
}, Bt = "!", Vt = ":", $l = Vt.length, Bl = (l) => {
  const {
    prefix: a,
    experimentalParseClassName: t
  } = l;
  let e = (r) => {
    const o = [];
    let s = 0, v = 0, n = 0, u;
    for (let b = 0; b < r.length; b++) {
      let h = r[b];
      if (s === 0 && v === 0) {
        if (h === Vt) {
          o.push(r.slice(n, b)), n = b + $l;
          continue;
        }
        if (h === "/") {
          u = b;
          continue;
        }
      }
      h === "[" ? s++ : h === "]" ? s-- : h === "(" ? v++ : h === ")" && v--;
    }
    const f = o.length === 0 ? r : r.substring(n), C = Vl(f), k = C !== f, c = u && u > n ? u - n : void 0;
    return {
      modifiers: o,
      hasImportantModifier: k,
      baseClassName: C,
      maybePostfixModifierPosition: c
    };
  };
  if (a) {
    const r = a + Vt, o = e;
    e = (s) => s.startsWith(r) ? o(s.substring(r.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: s,
      maybePostfixModifierPosition: void 0
    };
  }
  if (t) {
    const r = e;
    e = (o) => t({
      className: o,
      parseClassName: r
    });
  }
  return e;
}, Vl = (l) => l.endsWith(Bt) ? l.substring(0, l.length - 1) : l.startsWith(Bt) ? l.substring(1) : l, Il = (l) => {
  const a = Object.fromEntries(l.orderSensitiveModifiers.map((e) => [e, !0]));
  return (e) => {
    if (e.length <= 1)
      return e;
    const r = [];
    let o = [];
    return e.forEach((s) => {
      s[0] === "[" || a[s] ? (r.push(...o.sort(), s), o = []) : o.push(s);
    }), r.push(...o.sort()), r;
  };
}, Ml = (l) => ({
  cache: zl(l.cacheSize),
  parseClassName: Bl(l),
  sortModifiers: Il(l),
  ...xl(l)
}), Dl = /\s+/, Tl = (l, a) => {
  const {
    parseClassName: t,
    getClassGroupId: e,
    getConflictingClassGroupIds: r,
    sortModifiers: o
  } = a, s = [], v = l.trim().split(Dl);
  let n = "";
  for (let u = v.length - 1; u >= 0; u -= 1) {
    const f = v[u], {
      isExternal: C,
      modifiers: k,
      hasImportantModifier: c,
      baseClassName: b,
      maybePostfixModifierPosition: h
    } = t(f);
    if (C) {
      n = f + (n.length > 0 ? " " + n : n);
      continue;
    }
    let i = !!h, d = e(i ? b.substring(0, h) : b);
    if (!d) {
      if (!i) {
        n = f + (n.length > 0 ? " " + n : n);
        continue;
      }
      if (d = e(b), !d) {
        n = f + (n.length > 0 ? " " + n : n);
        continue;
      }
      i = !1;
    }
    const m = o(k).join(":"), w = c ? m + Bt : m, z = w + d;
    if (s.includes(z))
      continue;
    s.push(z);
    const M = r(d, i);
    for (let V = 0; V < M.length; ++V) {
      const A = M[V];
      s.push(w + A);
    }
    n = f + (n.length > 0 ? " " + n : n);
  }
  return n;
};
function Rl() {
  let l = 0, a, t, e = "";
  for (; l < arguments.length; )
    (a = arguments[l++]) && (t = Jt(a)) && (e && (e += " "), e += t);
  return e;
}
const Jt = (l) => {
  if (typeof l == "string")
    return l;
  let a, t = "";
  for (let e = 0; e < l.length; e++)
    l[e] && (a = Jt(l[e])) && (t && (t += " "), t += a);
  return t;
};
function It(l, ...a) {
  let t, e, r, o = s;
  function s(n) {
    const u = a.reduce((f, C) => C(f), l());
    return t = Ml(u), e = t.cache.get, r = t.cache.set, o = v, v(n);
  }
  function v(n) {
    const u = e(n);
    if (u)
      return u;
    const f = Tl(n, t);
    return r(n, f), f;
  }
  return function() {
    return o(Rl.apply(null, arguments));
  };
}
const Be = (l) => {
  const a = (t) => t[l] || [];
  return a.isThemeGetter = !0, a;
}, Qt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, el = /^\((?:(\w[\w-]*):)?(.+)\)$/i, El = /^\d+\/\d+$/, Ll = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Al = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ol = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Pl = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, jl = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Qe = (l) => El.test(l), ce = (l) => !!l && !Number.isNaN(Number(l)), Ge = (l) => !!l && Number.isInteger(Number(l)), Ht = (l) => l.endsWith("%") && ce(l.slice(0, -1)), Fe = (l) => Ll.test(l), _l = () => !0, Wl = (l) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Al.test(l) && !Ol.test(l)
), Et = () => !1, Fl = (l) => Pl.test(l), Hl = (l) => jl.test(l), Nl = (l) => !J(l) && !Q(l), Gl = (l) => et(l, al, Et), J = (l) => Qt.test(l), Ke = (l) => et(l, rl, Wl), wt = (l) => et(l, la, ce), Kl = (l) => et(l, tl, Et), Yl = (l) => et(l, ll, Hl), Ul = (l) => et(l, Et, Fl), Q = (l) => el.test(l), vt = (l) => tt(l, rl), Xl = (l) => tt(l, aa), ql = (l) => tt(l, tl), Zl = (l) => tt(l, al), Jl = (l) => tt(l, ll), Ql = (l) => tt(l, ra, !0), et = (l, a, t) => {
  const e = Qt.exec(l);
  return e ? e[1] ? a(e[1]) : t(e[2]) : !1;
}, tt = (l, a, t = !1) => {
  const e = el.exec(l);
  return e ? e[1] ? a(e[1]) : t : !1;
}, tl = (l) => l === "position", ea = /* @__PURE__ */ new Set(["image", "url"]), ll = (l) => ea.has(l), ta = /* @__PURE__ */ new Set(["length", "size", "percentage"]), al = (l) => ta.has(l), rl = (l) => l === "length", la = (l) => l === "number", aa = (l) => l === "family-name", ra = (l) => l === "shadow", Mt = () => {
  const l = Be("color"), a = Be("font"), t = Be("text"), e = Be("font-weight"), r = Be("tracking"), o = Be("leading"), s = Be("breakpoint"), v = Be("container"), n = Be("spacing"), u = Be("radius"), f = Be("shadow"), C = Be("inset-shadow"), k = Be("drop-shadow"), c = Be("blur"), b = Be("perspective"), h = Be("aspect"), i = Be("ease"), d = Be("animate"), m = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], w = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], z = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", "contain", "none"], V = () => [Q, J, n], A = () => [Qe, "full", "auto", ...V()], D = () => [Ge, "none", "subgrid", Q, J], O = () => ["auto", {
    span: ["full", Ge, Q, J]
  }, Q, J], T = () => [Ge, "auto", Q, J], L = () => ["auto", "min", "max", "fr", Q, J], P = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], F = () => ["start", "end", "center", "stretch"], B = () => ["auto", ...V()], E = () => [Qe, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...V()], I = () => [l, Q, J], N = () => [Ht, Ke], _ = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    Q,
    J
  ], Y = () => ["", ce, vt, Ke], X = () => ["solid", "dashed", "dotted", "double"], ne = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    c,
    Q,
    J
  ], Z = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Q, J], re = () => ["none", ce, Q, J], se = () => ["none", ce, Q, J], pe = () => [ce, Q, J], fe = () => [Qe, "full", ...V()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Fe],
      breakpoint: [Fe],
      color: [_l],
      container: [Fe],
      "drop-shadow": [Fe],
      ease: ["in", "out", "in-out"],
      font: [Nl],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Fe],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Fe],
      shadow: [Fe],
      spacing: ["px", ce],
      text: [Fe],
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
        aspect: ["auto", "square", Qe, J, Q, h]
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
        columns: [ce, J, Q, v]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": m()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": m()
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
        object: [...w(), J, Q]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: z()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": z()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": z()
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
        z: [Ge, "auto", Q, J]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Qe, "full", "auto", v, ...V()]
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
        flex: [ce, Qe, "auto", "initial", "none", J]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ce, Q, J]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ce, Q, J]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ge, "first", "last", "none", Q, J]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": D()
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
        "col-start": T()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": T()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": D()
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
        "row-start": T()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": T()
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
        w: [v, "screen", ...E()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          v,
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
          v,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [s]
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
        text: ["base", t, vt, Ke]
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
        font: [e, Q, wt]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ht, J]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Xl, J, a]
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
        tracking: [r, Q, J]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ce, "none", Q, wt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          o,
          ...V()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Q, J]
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
        list: ["disc", "decimal", "none", Q, J]
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
        decoration: [...X(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ce, "from-font", "auto", Q, Ke]
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
        "underline-offset": [ce, "auto", Q, J]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Q, J]
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
        content: ["none", Q, J]
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
        bg: [...w(), ql, Kl]
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
          }, Ge, Q, J],
          radial: ["", Q, J],
          conic: [Ge, Q, J]
        }, Jl, Yl]
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
        rounded: _()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": _()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": _()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": _()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": _()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": _()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": _()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": _()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": _()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": _()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": _()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": _()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": _()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": _()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": _()
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
        border: [...X(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...X(), "hidden", "none"]
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
        outline: [...X(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ce, Q, J]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ce, vt, Ke]
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
          f,
          Ql,
          Ul
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
        "inset-shadow": ["none", Q, J, C]
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
        "ring-offset": [ce, Ke]
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
        opacity: [ce, Q, J]
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
          Q,
          J
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
        brightness: [ce, Q, J]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ce, Q, J]
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
          Q,
          J
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ce, Q, J]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ce, Q, J]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ce, Q, J]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ce, Q, J]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ce, Q, J]
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
          Q,
          J
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
        "backdrop-brightness": [ce, Q, J]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ce, Q, J]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ce, Q, J]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ce, Q, J]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ce, Q, J]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ce, Q, J]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ce, Q, J]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ce, Q, J]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", Q, J]
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
        duration: [ce, "initial", Q, J]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", i, Q, J]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ce, Q, J]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", d, Q, J]
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
        perspective: [b, Q, J]
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
        rotate: re()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": re()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": re()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": re()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: se()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": se()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": se()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": se()
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
        skew: pe()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": pe()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": pe()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [Q, J, "", "none", "gpu", "cpu"]
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
        translate: fe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": fe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": fe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": fe()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Q, J]
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
        "will-change": ["auto", "scroll", "contents", "transform", Q, J]
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
        stroke: [ce, vt, Ke, wt]
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
}, oa = (l, {
  cacheSize: a,
  prefix: t,
  experimentalParseClassName: e,
  extend: r = {},
  override: o = {}
}) => (ut(l, "cacheSize", a), ut(l, "prefix", t), ut(l, "experimentalParseClassName", e), gt(l.theme, o.theme), gt(l.classGroups, o.classGroups), gt(l.conflictingClassGroups, o.conflictingClassGroups), gt(l.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), ut(l, "orderSensitiveModifiers", o.orderSensitiveModifiers), bt(l.theme, r.theme), bt(l.classGroups, r.classGroups), bt(l.conflictingClassGroups, r.conflictingClassGroups), bt(l.conflictingClassGroupModifiers, r.conflictingClassGroupModifiers), ol(l, r, "orderSensitiveModifiers"), l), ut = (l, a, t) => {
  t !== void 0 && (l[a] = t);
}, gt = (l, a) => {
  if (a)
    for (const t in a)
      ut(l, t, a[t]);
}, bt = (l, a) => {
  if (a)
    for (const t in a)
      ol(l, a, t);
}, ol = (l, a, t) => {
  const e = a[t];
  e !== void 0 && (l[t] = l[t] ? l[t].concat(e) : e);
}, sa = (l, ...a) => typeof l == "function" ? It(Mt, l, ...a) : It(() => oa(Mt(), l), ...a), na = /* @__PURE__ */ It(Mt);
var ia = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, sl = (l) => l || void 0, ft = (...l) => sl(Ut(l).filter(Boolean).join(" ")), xt = null, We = {}, Dt = !1, ot = (...l) => (a) => a.twMerge ? ((!xt || Dt) && (Dt = !1, xt = Ie(We) ? na : sa({ ...We, extend: { theme: We.theme, classGroups: We.classGroups, conflictingClassGroupModifiers: We.conflictingClassGroupModifiers, conflictingClassGroups: We.conflictingClassGroups, ...We.extend } })), sl(xt(ft(l)))) : ft(l), Nt = (l, a) => {
  for (let t in a) l.hasOwnProperty(t) ? l[t] = ft(l[t], a[t]) : l[t] = a[t];
  return l;
}, R = (l, a) => {
  let { extend: t = null, slots: e = {}, variants: r = {}, compoundVariants: o = [], compoundSlots: s = [], defaultVariants: v = {} } = l, n = { ...ia, ...a }, u = t != null && t.base ? ft(t.base, l == null ? void 0 : l.base) : l == null ? void 0 : l.base, f = t != null && t.variants && !Ie(t.variants) ? qt(r, t.variants) : r, C = t != null && t.defaultVariants && !Ie(t.defaultVariants) ? { ...t.defaultVariants, ...v } : v;
  !Ie(n.twMergeConfig) && !wl(n.twMergeConfig, We) && (Dt = !0, We = n.twMergeConfig);
  let k = Ie(t == null ? void 0 : t.slots), c = Ie(e) ? {} : { base: ft(l == null ? void 0 : l.base, k && (t == null ? void 0 : t.base)), ...e }, b = k ? c : Nt({ ...t == null ? void 0 : t.slots }, Ie(c) ? { base: l == null ? void 0 : l.base } : c), h = Ie(t == null ? void 0 : t.compoundVariants) ? o : Xt(t == null ? void 0 : t.compoundVariants, o), i = (m) => {
    if (Ie(f) && Ie(e) && k) return ot(u, m == null ? void 0 : m.class, m == null ? void 0 : m.className)(n);
    if (h && !Array.isArray(h)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof h}`);
    if (s && !Array.isArray(s)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof s}`);
    let w = (P, F, B = [], E) => {
      let I = B;
      if (typeof F == "string") I = I.concat(_t(F).split(" ").map((N) => `${P}:${N}`));
      else if (Array.isArray(F)) I = I.concat(F.reduce((N, _) => N.concat(`${P}:${_}`), []));
      else if (typeof F == "object" && typeof E == "string") {
        for (let N in F) if (F.hasOwnProperty(N) && N === E) {
          let _ = F[N];
          if (_ && typeof _ == "string") {
            let Y = _t(_);
            I[E] ? I[E] = I[E].concat(Y.split(" ").map((X) => `${P}:${X}`)) : I[E] = Y.split(" ").map((X) => `${P}:${X}`);
          } else Array.isArray(_) && _.length > 0 && (I[E] = _.reduce((Y, X) => Y.concat(`${P}:${X}`), []));
        }
      }
      return I;
    }, z = (P, F = f, B = null, E = null) => {
      var I;
      let N = F[P];
      if (!N || Ie(N)) return null;
      let _ = (I = E == null ? void 0 : E[P]) != null ? I : m == null ? void 0 : m[P];
      if (_ === null) return null;
      let Y = jt(_), X = Array.isArray(n.responsiveVariants) && n.responsiveVariants.length > 0 || n.responsiveVariants === !0, ne = C == null ? void 0 : C[P], W = [];
      if (typeof Y == "object" && X) for (let [se, pe] of Object.entries(Y)) {
        let fe = N[pe];
        if (se === "initial") {
          ne = pe;
          continue;
        }
        Array.isArray(n.responsiveVariants) && !n.responsiveVariants.includes(se) || (W = w(se, fe, W, B));
      }
      let Z = Y != null && typeof Y != "object" ? Y : jt(ne), re = N[Z || "false"];
      return typeof W == "object" && typeof B == "string" && W[B] ? Nt(W, re) : W.length > 0 ? (W.push(re), B === "base" ? W.join(" ") : W) : re;
    }, M = () => f ? Object.keys(f).map((P) => z(P, f)) : null, V = (P, F) => {
      if (!f || typeof f != "object") return null;
      let B = new Array();
      for (let E in f) {
        let I = z(E, f, P, F), N = P === "base" && typeof I == "string" ? I : I && I[P];
        N && (B[B.length] = N);
      }
      return B;
    }, A = {};
    for (let P in m) m[P] !== void 0 && (A[P] = m[P]);
    let D = (P, F) => {
      var B;
      let E = typeof (m == null ? void 0 : m[P]) == "object" ? { [P]: (B = m[P]) == null ? void 0 : B.initial } : {};
      return { ...C, ...A, ...E, ...F };
    }, O = (P = [], F) => {
      let B = [];
      for (let { class: E, className: I, ...N } of P) {
        let _ = !0;
        for (let [Y, X] of Object.entries(N)) {
          let ne = D(Y, F)[Y];
          if (Array.isArray(X)) {
            if (!X.includes(ne)) {
              _ = !1;
              break;
            }
          } else {
            let W = (Z) => Z == null || Z === !1;
            if (W(X) && W(ne)) continue;
            if (ne !== X) {
              _ = !1;
              break;
            }
          }
        }
        _ && (E && B.push(E), I && B.push(I));
      }
      return B;
    }, T = (P) => {
      let F = O(h, P);
      if (!Array.isArray(F)) return F;
      let B = {};
      for (let E of F) if (typeof E == "string" && (B.base = ot(B.base, E)(n)), typeof E == "object") for (let [I, N] of Object.entries(E)) B[I] = ot(B[I], N)(n);
      return B;
    }, L = (P) => {
      if (s.length < 1) return null;
      let F = {};
      for (let { slots: B = [], class: E, className: I, ...N } of s) {
        if (!Ie(N)) {
          let _ = !0;
          for (let Y of Object.keys(N)) {
            let X = D(Y, P)[Y];
            if (X === void 0 || (Array.isArray(N[Y]) ? !N[Y].includes(X) : N[Y] !== X)) {
              _ = !1;
              break;
            }
          }
          if (!_) continue;
        }
        for (let _ of B) F[_] = F[_] || [], F[_].push([E, I]);
      }
      return F;
    };
    if (!Ie(e) || !k) {
      let P = {};
      if (typeof b == "object" && !Ie(b)) for (let F of Object.keys(b)) P[F] = (B) => {
        var E, I;
        return ot(b[F], V(F, B), ((E = T(B)) != null ? E : [])[F], ((I = L(B)) != null ? I : [])[F], B == null ? void 0 : B.class, B == null ? void 0 : B.className)(n);
      };
      return P;
    }
    return ot(u, M(), O(h), m == null ? void 0 : m.class, m == null ? void 0 : m.className)(n);
  }, d = () => {
    if (!(!f || typeof f != "object")) return Object.keys(f);
  };
  return i.variantKeys = d(), i.extend = t, i.base = u, i.slots = b, i.variants = f, i.defaultVariants = C, i.compoundSlots = s, i.compoundVariants = h, i;
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
}), da = ["onUpdate:modelValue", "onInput", "onKeydown"], ca = /* @__PURE__ */ ee({
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
    const a = l, { values: t, setRef: e, onInput: r, onKeydown: o } = hl(a.length ?? 4), s = g(() => {
      var n, u;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.container) || "flex gap-2" : (u = a.pt) != null && u.container ? `flex gap-2 ${a.pt.container}` : "flex gap-2";
    }), v = g(() => {
      var n, u;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.input) || "" : ua({
        state: a.state,
        size: a.size,
        class: (u = a.pt) == null ? void 0 : u.input
      });
    });
    return (n, u) => (y(), x("div", {
      class: p(s.value)
    }, [
      (y(!0), x(ie, null, ve(S(t).length, (f, C) => Xe((y(), x("input", {
        key: C,
        "onUpdate:modelValue": (k) => S(t)[C] = k,
        ref_for: !0,
        ref: (k) => S(e)(k, C),
        class: p(v.value),
        maxlength: "1",
        onInput: (k) => S(r)(k, C),
        onKeydown: (k) => S(o)(k, C),
        type: "text",
        inputmode: "numeric",
        autocomplete: "one-time-code"
      }, null, 42, da)), [
        [Tt, S(t)[C]]
      ])), 128))
    ], 2));
  }
}), fa = le(ca);
function pa(l) {
  const a = j(!1), t = (l == null ? void 0 : l.closeOnEsc) ?? !0, e = (l == null ? void 0 : l.closeOnOverlayClick) ?? !0, r = () => {
    a.value = !0;
  }, o = () => {
    var f;
    a.value = !1, (f = l == null ? void 0 : l.onClose) == null || f.call(l);
  }, s = j(null), v = j(null), n = (f) => {
    f.key === "Escape" && t && o();
  };
  return ae(a, (f) => {
    f ? (document.addEventListener("keydown", n), document.body.style.overflow = "hidden") : (document.removeEventListener("keydown", n), document.body.style.overflow = "");
  }), He(() => {
    document.removeEventListener("keydown", n), document.body.style.overflow = "";
  }), {
    isOpen: a,
    open: r,
    close: o,
    modalRef: s,
    overlayRef: v,
    onOverlayClick: (f) => {
      f.target === v.value && e && o();
    }
  };
}
const va = R({
  base: "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center"
}), ga = R({
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
}), xa = /* @__PURE__ */ ee({
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
    const t = l, e = a, r = Ze(), { isOpen: o, open: s, close: v, modalRef: n, overlayRef: u, onOverlayClick: f } = pa({
      onClose: () => {
        e("close"), e("update:modelValue", !1);
      },
      closeOnEsc: t.closeOnEsc,
      closeOnOverlayClick: t.closeOnOverlayClick
    });
    $e(async () => {
      await Se(), t.modelValue && s();
    }), ae(
      () => t.modelValue,
      (M) => {
        M && !o.value ? s() : !M && o.value && v();
      }
    ), ae(o, (M) => {
      M !== t.modelValue && e("update:modelValue", M);
    });
    const C = () => {
      v();
    }, k = g(() => !!t.title || !!r.header), c = g(() => !!r.footer), b = g(() => {
      var M, V;
      return t.unstyled ? [(M = t.pt) == null ? void 0 : M.overlay, t.class].filter(Boolean) : [va({ class: (V = t.pt) == null ? void 0 : V.overlay }), t.class];
    }), h = g(() => {
      var M, V;
      return t.unstyled ? [(M = t.pt) == null ? void 0 : M.content, t.contentClass].filter(Boolean) : [
        ga({
          size: t.size,
          class: (V = t.pt) == null ? void 0 : V.content
        }),
        t.contentClass
      ];
    }), i = g(() => {
      var M, V;
      return t.unstyled ? [(M = t.pt) == null ? void 0 : M.header, t.headerClass].filter(Boolean) : [ba({ class: (V = t.pt) == null ? void 0 : V.header }), t.headerClass];
    }), d = g(() => {
      var M, V;
      return t.unstyled ? ((M = t.pt) == null ? void 0 : M.title) || "" : ma({ class: (V = t.pt) == null ? void 0 : V.title });
    }), m = g(() => {
      var M, V;
      return t.unstyled ? [(M = t.pt) == null ? void 0 : M.body, t.bodyClass].filter(Boolean) : [ya({ class: (V = t.pt) == null ? void 0 : V.body }), t.bodyClass];
    }), w = g(() => {
      var M, V;
      return t.unstyled ? [(M = t.pt) == null ? void 0 : M.footer, t.footerClass].filter(Boolean) : [ha({ class: (V = t.pt) == null ? void 0 : V.footer }), t.footerClass];
    }), z = g(() => {
      var M, V;
      return t.unstyled ? ((M = t.pt) == null ? void 0 : M.closeButton) || "" : wa({ class: (V = t.pt) == null ? void 0 : V.closeButton });
    });
    return (M, V) => (y(), Ee(ht, { to: "body" }, [
      Le(ct, {
        name: "vk-modal",
        appear: ""
      }, {
        default: qe(() => [
          S(o) ? (y(), x("div", {
            key: 0,
            class: p(b.value),
            ref_key: "overlayRef",
            ref: u,
            onClick: V[0] || (V[0] = //@ts-ignore
            (...A) => S(f) && S(f)(...A))
          }, [
            $("div", {
              class: p([h.value, "vk-modal-dialog"]),
              ref_key: "modalRef",
              ref: n,
              role: "dialog",
              "aria-modal": "true",
              tabindex: "-1"
            }, [
              k.value ? (y(), x("div", {
                key: 0,
                class: p(i.value)
              }, [
                K(M.$slots, "header", {}, () => [
                  $("h3", {
                    class: p(d.value)
                  }, U(t.title), 3)
                ], !0),
                M.hideCloseButton ? H("", !0) : (y(), x("button", {
                  key: 0,
                  class: p(z.value),
                  onClick: C,
                  "aria-label": "关闭"
                }, [
                  K(M.$slots, "close-icon", {}, () => [
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
                  ], !0)
                ], 2))
              ], 2)) : H("", !0),
              $("div", {
                class: p(m.value)
              }, [
                K(M.$slots, "default", {}, void 0, !0)
              ], 2),
              c.value ? (y(), x("div", {
                key: 1,
                class: p(w.value)
              }, [
                K(M.$slots, "footer", {}, void 0, !0)
              ], 2)) : H("", !0)
            ], 2)
          ], 2)) : H("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), lt = (l, a) => {
  const t = l.__vccOpts || l;
  for (const [e, r] of a)
    t[e] = r;
  return t;
}, ka = /* @__PURE__ */ lt(xa, [["__scopeId", "data-v-77a6943b"]]), Ca = le(ka);
function Sa() {
  const l = j(!1), a = j(!1);
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
}), $a = ["src", "alt"], Ba = ["src", "alt"], Va = /* @__PURE__ */ ee({
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
    const a = l, { isError: t, onLoad: e, onError: r } = Sa(), o = g(() => {
      var k, c;
      return a.unstyled ? ((k = a.pt) == null ? void 0 : k.root) || "" : za({
        size: a.size,
        shape: a.shape,
        status: a.status,
        class: (c = a.pt) == null ? void 0 : c.root
      });
    }), s = g(() => {
      var k;
      return a.unstyled ? ((k = a.pt) == null ? void 0 : k.image) || "" : "w-full h-full object-cover";
    }), v = g(() => {
      var k;
      return a.unstyled ? ((k = a.pt) == null ? void 0 : k.fallback) || "" : "w-full h-full flex items-center justify-center";
    }), n = g(() => {
      var k;
      return a.unstyled ? ((k = a.pt) == null ? void 0 : k.initials) || "" : "w-full h-full flex items-center justify-center";
    }), u = g(() => {
      var k;
      return a.unstyled ? ((k = a.pt) == null ? void 0 : k.icon) || "" : "w-1/2 h-1/2";
    }), f = g(() => a.alt ? a.alt.split(" ").map((k) => k.charAt(0)).slice(0, 2).join("").toUpperCase() : ""), C = g(() => !a.src || t.value);
    return (k, c) => (y(), x("div", {
      class: p(o.value)
    }, [
      C.value ? k.fallback ? (y(), x("span", {
        key: 1,
        class: p(v.value)
      }, [
        $("img", {
          src: k.fallback,
          alt: k.alt,
          class: p(s.value)
        }, null, 10, Ba)
      ], 2)) : k.alt ? (y(), x("span", {
        key: 2,
        class: p(n.value)
      }, U(f.value), 3)) : (y(), x("span", {
        key: 3,
        class: p(v.value)
      }, [
        (y(), x("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          class: p(u.value)
        }, c[2] || (c[2] = [
          $("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }, null, -1),
          $("circle", {
            cx: "12",
            cy: "7",
            r: "4"
          }, null, -1)
        ]), 2))
      ], 2)) : (y(), x("img", {
        key: 0,
        src: k.src,
        alt: k.alt,
        class: p(s.value),
        onLoad: c[0] || (c[0] = //@ts-ignore
        (...b) => S(e) && S(e)(...b)),
        onError: c[1] || (c[1] = //@ts-ignore
        (...b) => S(r) && S(r)(...b))
      }, null, 42, $a))
    ], 2));
  }
}), Ia = le(Va);
function Ma(l) {
  const a = g(() => l.dot ? l.show !== !1 : l.show !== !1 && l.content !== void 0 && l.content !== ""), t = g(() => {
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
}), Ta = /* @__PURE__ */ ee({
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
    const a = l, { visible: t, positionClass: e } = Ma(a), r = g(() => {
      var v;
      return a.unstyled ? ((v = a.pt) == null ? void 0 : v.root) || "" : "relative inline-block";
    }), o = g(() => {
      var v, n;
      return a.unstyled ? ((v = a.pt) == null ? void 0 : v.badge) || "" : Da({
        color: a.color,
        size: a.size,
        dot: a.dot,
        class: [e.value, (n = a.pt) == null ? void 0 : n.badge]
      });
    }), s = g(() => a.dot ? "" : typeof a.content == "number" && a.max && a.content > a.max ? `${a.max}+` : a.content);
    return (v, n) => (y(), x("div", {
      class: p(r.value)
    }, [
      K(v.$slots, "default"),
      S(t) ? (y(), x("span", {
        key: 0,
        class: p(o.value),
        role: "status",
        "aria-live": "polite"
      }, U(s.value), 3)) : H("", !0)
    ], 2));
  }
}), Ra = le(Ta);
function Ea(l) {
  const a = j(l.modelValue ?? !1), t = () => {
    var r;
    l.disabled || (a.value = !a.value, (r = l.onChange) == null || r.call(l, a.value));
  };
  return ae(
    () => l.modelValue,
    (r) => {
      r !== void 0 && (a.value = r);
    }
  ), {
    checked: g(() => !!a.value),
    disabled: g(() => !!l.disabled),
    toggle: t,
    onKeyDown: (r) => {
      (r.key === "Enter" || r.key === " ") && (r.preventDefault(), t());
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
}), Aa = ["aria-checked", "disabled"], Oa = /* @__PURE__ */ ee({
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
    const t = l, e = a, { checked: r, toggle: o, onKeyDown: s } = Ea({
      modelValue: t.modelValue,
      disabled: t.disabled,
      onChange: (i) => e("update:modelValue", i)
    }), v = j(!1);
    ae(r, (i) => {
      i && (v.value = !0, setTimeout(() => {
        v.value = !1;
      }, 500));
    });
    const n = () => {
      if (!r.value) return "";
      switch (t.size) {
        case "small":
          return "translate-x-3";
        case "large":
          return "translate-x-5";
        default:
          return "translate-x-4";
      }
    }, u = () => {
      if (!r.value)
        return "bg-gray-300 dark:bg-gray-600";
      const i = {
        blue: "bg-blue-600 dark:bg-blue-500",
        green: "bg-green-600 dark:bg-green-500",
        red: "bg-red-600 dark:bg-red-500",
        yellow: "bg-yellow-600 dark:bg-yellow-500",
        purple: "bg-purple-600 dark:bg-purple-500"
      };
      return i[t.color] || i.blue;
    }, f = () => {
      const i = {
        blue: "bg-blue-400/10",
        green: "bg-green-400/10",
        red: "bg-red-400/10",
        yellow: "bg-yellow-400/10",
        purple: "bg-purple-400/10"
      };
      return i[t.color] || i.blue;
    }, C = g(
      () => La({
        checked: r.value,
        disabled: t.disabled,
        size: t.size,
        color: t.color
      })
    ), k = g(() => {
      var i, d;
      return t.unstyled ? ((i = t.pt) == null ? void 0 : i.root) || "" : C.value.root({ class: (d = t.pt) == null ? void 0 : d.root });
    }), c = g(() => {
      var i, d;
      return t.unstyled ? ((i = t.pt) == null ? void 0 : i.track) || "" : u() + ((d = t.pt) != null && d.track ? ` ${t.pt.track}` : "");
    }), b = g(() => {
      var i, d;
      return t.unstyled ? ((i = t.pt) == null ? void 0 : i.thumb) || "" : C.value.thumb({ class: (d = t.pt) == null ? void 0 : d.thumb });
    }), h = g(() => {
      var i, d;
      return t.unstyled ? ((i = t.pt) == null ? void 0 : i.ripple) || "" : f() + ((d = t.pt) != null && d.ripple ? ` ${t.pt.ripple}` : "");
    });
    return (i, d) => (y(), x("button", {
      type: "button",
      role: "switch",
      "aria-checked": S(r),
      disabled: t.disabled,
      onClick: d[0] || (d[0] = //@ts-ignore
      (...m) => S(o) && S(o)(...m)),
      onKeydown: d[1] || (d[1] = //@ts-ignore
      (...m) => S(s) && S(s)(...m)),
      class: p(k.value)
    }, [
      $("span", {
        class: p([
          c.value,
          "absolute inset-0 rounded-full transition-colors duration-300 ease-in-out"
        ])
      }, null, 2),
      $("span", {
        class: p([
          b.value,
          "transform transition-all duration-300 ease-in-out",
          n()
        ])
      }, [
        S(r) ? (y(), x("span", {
          key: 0,
          class: p(["absolute inset-0 bg-white rounded-full transition-all duration-300", {
            "opacity-100 scale-100": S(r),
            "opacity-0 scale-0": !S(r)
          }])
        }, null, 2)) : H("", !0)
      ], 2),
      $("span", {
        class: p(["absolute inset-0 transition-opacity duration-300", { "opacity-0": !S(r), "opacity-100": S(r) }])
      }, [
        $("span", {
          class: p(["absolute inset-0 rounded-full transform transition-transform duration-500", [
            h.value,
            { "scale-100": v.value, "scale-0": !v.value }
          ]])
        }, null, 2)
      ], 2)
    ], 42, Aa));
  }
}), Pa = /* @__PURE__ */ lt(Oa, [["__scopeId", "data-v-dec8aa04"]]), ja = le(Pa);
function _a(l) {
  const a = j(!1), t = (l == null ? void 0 : l.closeOnEsc) ?? !0, e = (l == null ? void 0 : l.closeOnOverlayClick) ?? !0, r = () => {
    var f;
    a.value = !0, (f = l == null ? void 0 : l.onOpen) == null || f.call(l);
  }, o = () => {
    var f;
    a.value = !1, (f = l == null ? void 0 : l.onClose) == null || f.call(l);
  }, s = j(null), v = j(null), n = (f) => {
    f.key === "Escape" && t && o();
  }, u = (f) => {
    f.target === v.value && e && o();
  };
  return ae(a, (f) => {
    f ? document.addEventListener("keydown", n) : document.removeEventListener("keydown", n);
  }), He(() => {
    document.removeEventListener("keydown", n);
  }), {
    isOpen: a,
    open: r,
    close: o,
    overlayRef: v,
    drawerRef: s,
    onOverlayClick: u
  };
}
const Wa = R({
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
}), Fa = R({
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
}), Ua = ["aria-hidden", "aria-labelledby"], Xa = /* @__PURE__ */ ee({
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
    const t = l, e = a, r = Ze(), { isOpen: o, close: s, open: v, drawerRef: n, overlayRef: u, onOverlayClick: f } = _a({
      onClose: () => {
        e("update:modelValue", !1), e("close");
      },
      onOpen: () => {
        e("open");
      },
      closeOnEsc: t.closeOnEsc,
      closeOnOverlayClick: t.closeOnOverlayClick
    });
    ae(
      () => t.modelValue,
      (D) => {
        D && !o.value ? v() : !D && o.value && s();
      },
      { immediate: !0 }
    ), ae(o, (D) => {
      D !== t.modelValue && e("update:modelValue", D);
    });
    const C = j("");
    ae(o, (D) => {
      t.preventScroll && (D ? (C.value = document.body.style.overflow, document.body.style.overflow = "hidden") : document.body.style.overflow = C.value);
    }), Pe(() => {
      t.preventScroll && o.value && (document.body.style.overflow = C.value);
    });
    const k = g(() => {
      var D, O;
      return t.unstyled ? [(D = t.pt) == null ? void 0 : D.overlay, t.overlayClass].filter(Boolean) : [
        Wa({
          open: o.value,
          class: (O = t.pt) == null ? void 0 : O.overlay
        }),
        t.overlayClass
      ];
    }), c = g(() => {
      var D, O;
      return t.unstyled ? [(D = t.pt) == null ? void 0 : D.container, t.contentClass, t.class].filter(
        Boolean
      ) : [
        Fa({
          placement: t.placement,
          open: o.value,
          class: (O = t.pt) == null ? void 0 : O.container
        }),
        t.contentClass,
        t.class
      ];
    }), b = g(() => {
      const D = {
        zIndex: t.zIndex.toString()
      };
      if (!t.unstyled && t.size) {
        const O = typeof t.size == "number" ? `${t.size}px` : t.size;
        t.placement === "left" || t.placement === "right" ? D.width = O : D.height = O;
      }
      return D;
    }), h = g(() => {
      var D, O;
      return t.unstyled ? [(D = t.pt) == null ? void 0 : D.header, t.headerClass].filter(Boolean) : [Ha({ class: (O = t.pt) == null ? void 0 : O.header }), t.headerClass];
    }), i = g(() => {
      var D, O;
      return t.unstyled ? ((D = t.pt) == null ? void 0 : D.title) || "" : Na({ class: (O = t.pt) == null ? void 0 : O.title });
    }), d = g(() => {
      var D, O;
      return t.unstyled ? ((D = t.pt) == null ? void 0 : D.closeButton) || "" : Ga({ class: (O = t.pt) == null ? void 0 : O.closeButton });
    }), m = g(() => {
      var D, O;
      return t.unstyled ? [(D = t.pt) == null ? void 0 : D.body, t.bodyClass].filter(Boolean) : [Ka({ class: (O = t.pt) == null ? void 0 : O.body }), t.bodyClass];
    }), w = g(() => {
      var D, O;
      return t.unstyled ? [(D = t.pt) == null ? void 0 : D.footer, t.footerClass].filter(Boolean) : [Ya({ class: (O = t.pt) == null ? void 0 : O.footer }), t.footerClass];
    }), z = () => {
      s();
    }, M = g(() => !!t.title || !!r.header), V = g(() => !!r.footer), A = g(() => `vk-drawer-${t.placement}`);
    return (D, O) => (y(), Ee(ht, { to: "body" }, [
      Le(ct, {
        name: "vk-drawer-overlay",
        appear: ""
      }, {
        default: qe(() => [
          D.showOverlay && S(o) ? (y(), x("div", {
            key: 0,
            class: p(k.value),
            ref_key: "overlayRef",
            ref: u,
            onClick: O[0] || (O[0] = //@ts-ignore
            (...T) => S(f) && S(f)(...T)),
            role: "presentation",
            "aria-hidden": "true"
          }, null, 2)) : H("", !0)
        ]),
        _: 1
      }),
      Le(ct, {
        name: A.value,
        appear: ""
      }, {
        default: qe(() => [
          S(o) ? (y(), x("div", {
            key: 0,
            class: p([c.value, "vk-drawer-panel"]),
            style: ue(b.value),
            ref_key: "drawerRef",
            ref: n,
            role: "dialog",
            "aria-modal": "true",
            "aria-hidden": !S(o),
            "aria-labelledby": D.title ? "drawer-title" : void 0
          }, [
            M.value ? (y(), x("div", {
              key: 0,
              class: p(h.value)
            }, [
              K(D.$slots, "header", {}, () => [
                D.title ? (y(), x("h2", {
                  key: 0,
                  class: p(i.value),
                  id: "drawer-title"
                }, U(D.title), 3)) : H("", !0)
              ], !0),
              D.hideCloseButton ? H("", !0) : (y(), x("button", {
                key: 0,
                class: p(d.value),
                onClick: z,
                "aria-label": "关闭",
                type: "button"
              }, [
                K(D.$slots, "close-icon", {}, () => [
                  O[1] || (O[1] = $("svg", {
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
            ], 2)) : H("", !0),
            $("div", {
              class: p(m.value)
            }, [
              K(D.$slots, "default", {}, void 0, !0)
            ], 2),
            V.value ? (y(), x("div", {
              key: 1,
              class: p(w.value)
            }, [
              K(D.$slots, "footer", {}, void 0, !0)
            ], 2)) : H("", !0)
          ], 14, Ua)) : H("", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ]));
  }
}), qa = /* @__PURE__ */ lt(Xa, [["__scopeId", "data-v-4d3052cd"]]), Za = le(qa);
function Ja(l, a) {
  const t = j(
    a.modelValue !== void 0 ? a.modelValue : l[0]
  ), e = (s) => t.value === s, r = (s) => {
    var v;
    t.value = s, (v = a.onChange) == null || v.call(a, s);
  };
  return {
    selected: t,
    isSelected: e,
    select: r,
    onKeydown: (s) => {
      const v = l.indexOf(t.value);
      if (s.key === "ArrowRight" || s.key === "ArrowDown") {
        const n = l[(v + 1) % l.length];
        r(n);
      } else if (s.key === "ArrowLeft" || s.key === "ArrowUp") {
        const n = l[(v - 1 + l.length) % l.length];
        r(n);
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
}), tr = ["disabled", "aria-selected", "tabindex", "onClick"], lr = /* @__PURE__ */ ee({
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
    const t = l, e = a, r = g(() => t.options.map((k) => typeof k == "object" ? {
      value: k.value,
      label: k.label,
      disabled: k.disabled || !1
    } : {
      value: k,
      label: String(k),
      disabled: !1
    })), o = g(() => r.value.map((k) => k.value)), { isSelected: s, select: v, onKeydown: n } = Ja(o.value, {
      modelValue: t.modelValue,
      onChange: (k) => {
        e("update:modelValue", k), e("change", k);
      }
    });
    ae(
      () => t.modelValue,
      (k) => {
        k !== void 0 && o.value.includes(k) && v(k);
      }
    );
    const u = g(() => {
      var k, c;
      return t.unstyled ? ((k = t.pt) == null ? void 0 : k.container) || "" : Qa({
        size: t.size,
        disabled: t.disabled,
        block: t.block,
        class: (c = t.pt) == null ? void 0 : c.container
      });
    }), f = (k, c) => {
      var b, h;
      return t.unstyled ? ((b = t.pt) == null ? void 0 : b.option) || "" : er({
        selected: s(k),
        disabled: t.disabled || c,
        size: t.size,
        class: (h = t.pt) == null ? void 0 : h.option
      });
    }, C = (k, c) => {
      t.disabled || c || v(k);
    };
    return (k, c) => (y(), x("div", {
      class: p(u.value),
      role: "tablist",
      onKeydown: c[0] || (c[0] = //@ts-ignore
      (...b) => S(n) && S(n)(...b))
    }, [
      (y(!0), x(ie, null, ve(r.value, (b) => (y(), x("button", {
        key: String(b.value),
        class: p(f(b.value, b.disabled)),
        disabled: t.disabled || b.disabled,
        "aria-selected": S(s)(b.value),
        tabindex: S(s)(b.value) ? 0 : -1,
        role: "tab",
        type: "button",
        onClick: (h) => C(b.value, b.disabled)
      }, U(b.label), 11, tr))), 128))
    ], 34));
  }
}), ar = le(lr);
function rr(l) {
  const a = j(null), t = j(null), e = l.min ?? 0, r = l.max ?? 100, o = l.step ?? 1, s = l.orientation ?? "horizontal", v = j(l.modelValue ?? e), n = g(() => (v.value - e) / (r - e) * 100), u = (c) => {
    var i;
    const b = Math.round(c / o) * o, h = Math.min(r, Math.max(e, b));
    v.value = h, (i = l.onChange) == null || i.call(l, h);
  }, f = (c) => {
    const b = a.value;
    if (!b) return;
    const h = b.getBoundingClientRect(), i = s === "horizontal" ? (c.clientX - h.left) / h.width : 1 - (c.clientY - h.top) / h.height;
    u(e + i * (r - e));
  }, C = (c) => {
    c.key === "ArrowRight" || c.key === "ArrowUp" ? (c.preventDefault(), u(v.value + o)) : (c.key === "ArrowLeft" || c.key === "ArrowDown") && (c.preventDefault(), u(v.value - o));
  }, k = (c) => {
    c.preventDefault();
    const b = (i) => {
      const d = a.value;
      if (!d) return;
      const m = d.getBoundingClientRect(), w = s === "horizontal" ? (i.clientX - m.left) / m.width : 1 - (i.clientY - m.top) / m.height;
      u(e + w * (r - e));
    }, h = () => {
      window.removeEventListener("mousemove", b), window.removeEventListener("mouseup", h);
    };
    window.addEventListener("mousemove", b), window.addEventListener("mouseup", h);
  };
  return ae(
    () => l.modelValue,
    (c) => {
      c != null && (v.value = c);
    }
  ), {
    value: v,
    percent: n,
    trackRef: a,
    thumbRef: t,
    onTrackClick: f,
    onThumbKeyDown: C,
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
}), pr = ["aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-orientation", "aria-disabled", "tabindex"], vr = /* @__PURE__ */ ee({
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
      value: r,
      percent: o,
      trackRef: s,
      thumbRef: v,
      onTrackClick: n,
      onThumbKeyDown: u,
      onThumbMouseDown: f
    } = rr({
      min: t.min,
      max: t.max,
      step: t.step,
      orientation: t.orientation,
      modelValue: t.modelValue,
      onChange: (B) => {
        e("update:modelValue", B), e("change", B);
      }
    }), C = g(() => {
      var B, E;
      return t.unstyled ? ((B = t.pt) == null ? void 0 : B.container) || "" : or({
        orientation: t.orientation,
        disabled: t.disabled,
        class: (E = t.pt) == null ? void 0 : E.container
      });
    }), k = g(() => {
      var B, E;
      return t.unstyled ? ((B = t.pt) == null ? void 0 : B.track) || "" : sr({
        orientation: t.orientation,
        disabled: t.disabled,
        class: (E = t.pt) == null ? void 0 : E.track
      });
    }), c = g(() => {
      var B, E;
      return t.unstyled ? ((B = t.pt) == null ? void 0 : B.fill) || "" : nr({
        orientation: t.orientation,
        disabled: t.disabled,
        class: (E = t.pt) == null ? void 0 : E.fill
      });
    }), b = g(() => {
      var B, E;
      return t.unstyled ? ((B = t.pt) == null ? void 0 : B.thumb) || "" : ir({
        orientation: t.orientation,
        disabled: t.disabled,
        class: (E = t.pt) == null ? void 0 : E.thumb
      });
    }), h = g(() => t.orientation === "horizontal" ? { width: `${o.value}%` } : { height: `${o.value}%` }), i = g(() => t.orientation === "horizontal" ? { left: `${o.value}%` } : { bottom: `${o.value}%` }), d = j(!1), m = g(() => {
      var B, E;
      return t.unstyled ? ((B = t.pt) == null ? void 0 : B.tooltip) || "" : ur({
        orientation: t.orientation,
        visible: t.showTooltip && d.value,
        class: (E = t.pt) == null ? void 0 : E.tooltip
      });
    }), w = () => {
      t.disabled || (d.value = !0);
    }, z = () => {
      d.value = !1;
    }, M = g(() => t.formatTooltip ? t.formatTooltip(r.value) : r.value.toString()), V = g(() => {
      var B, E;
      return t.unstyled ? ((B = t.pt) == null ? void 0 : B.marks) || "" : dr({
        orientation: t.orientation,
        class: (E = t.pt) == null ? void 0 : E.marks
      });
    }), A = g(() => {
      if (!t.showMarks) return [];
      if (t.marks)
        return Object.entries(t.marks).map(([N, _]) => ({
          value: Number(N),
          label: _,
          percent: (Number(N) - t.min) / (t.max - t.min) * 100,
          active: r.value >= Number(N)
        }));
      const B = Math.floor((t.max - t.min) / t.step), E = B > 10 ? Math.floor(B / 5) : 1, I = [];
      for (let N = 0; N <= B; N += E) {
        const _ = t.min + N * t.step;
        I.push({
          value: _,
          label: _.toString(),
          percent: N / B * 100,
          active: r.value >= _
        });
      }
      return I;
    }), D = (B) => {
      var E, I;
      return t.unstyled ? ((E = t.pt) == null ? void 0 : E.mark) || "" : cr({
        orientation: t.orientation,
        active: B,
        class: (I = t.pt) == null ? void 0 : I.mark
      });
    }, O = (B) => t.orientation === "horizontal" ? { left: `${B}%` } : { bottom: `${B}%` }, T = () => {
      var B, E;
      return t.unstyled ? ((B = t.pt) == null ? void 0 : B.markLabel) || "" : fr({
        orientation: t.orientation,
        class: (E = t.pt) == null ? void 0 : E.markLabel
      });
    }, L = (B) => {
      t.disabled || n(B);
    }, P = (B) => {
      t.disabled || u(B);
    }, F = (B) => {
      if (t.disabled) return;
      f(B), w();
      const E = () => {
        z(), window.removeEventListener("mouseup", E);
      };
      window.addEventListener("mouseup", E);
    };
    return (B, E) => (y(), x("div", {
      class: p(C.value)
    }, [
      $("div", {
        class: p(k.value),
        ref_key: "trackRef",
        ref: s,
        onClick: L
      }, [
        $("div", {
          class: p(c.value),
          style: ue(h.value)
        }, null, 6),
        B.showMarks ? (y(), x("div", {
          key: 0,
          class: p(V.value)
        }, [
          (y(!0), x(ie, null, ve(A.value, (I) => (y(), x("div", {
            key: I.value,
            class: p(D(I.active)),
            style: ue(O(I.percent))
          }, [
            $("span", {
              class: p(T)
            }, U(I.label), 1)
          ], 6))), 128))
        ], 2)) : H("", !0)
      ], 2),
      $("div", {
        class: p(b.value),
        style: ue(i.value),
        ref_key: "thumbRef",
        ref: v,
        onMousedown: F,
        onKeydown: P,
        onMouseover: w,
        onMouseleave: z,
        role: "slider",
        "aria-valuemin": B.min,
        "aria-valuemax": B.max,
        "aria-valuenow": S(r),
        "aria-orientation": B.orientation,
        "aria-disabled": B.disabled,
        tabindex: B.disabled ? -1 : 0
      }, [
        B.showTooltip ? (y(), x("div", {
          key: 0,
          class: p(m.value)
        }, U(M.value), 3)) : H("", !0)
      ], 46, pr)
    ], 2));
  }
}), gr = le(vr), br = R({
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
}), xr = { class: "popover-inner" }, kr = /* @__PURE__ */ ee({
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
    const e = l, r = t, o = j(!1), s = j(null), v = j(null), n = `popover-${Math.random().toString(36).slice(2, 9)}`;
    let u = null, f = null;
    const C = j(0), k = j(0), c = async () => {
      f && clearTimeout(f), !e.disabled && (u = setTimeout(() => {
        o.value = !0, r("update:modelValue", !0), Se(d);
      }, e.openDelay));
    }, b = () => {
      u && clearTimeout(u), !e.disabled && (f = setTimeout(() => {
        o.value = !1, r("update:modelValue", !1);
      }, e.closeDelay));
    }, h = () => {
      o.value ? b() : c();
    }, i = (W) => {
      W ? c() : b();
    }, d = () => {
      const W = v.value;
      if (!W || !o.value) return;
      const Z = C.value, re = k.value;
      if (e.followCursor || e.unbound) {
        let he = 0, ge = 0;
        switch (e.placement) {
          case "top":
            he = re - W.offsetHeight - e.offset, ge = Z - W.offsetWidth / 2;
            break;
          case "right":
            he = re - W.offsetHeight / 2, ge = Z + e.offset;
            break;
          case "bottom":
            he = re + e.offset, ge = Z - W.offsetWidth / 2;
            break;
          case "left":
            he = re - W.offsetHeight / 2, ge = Z - W.offsetWidth - e.offset;
            break;
        }
        m(W, he, ge);
        return;
      }
      const se = s.value;
      if (!se) return;
      const pe = se.getBoundingClientRect(), fe = W.getBoundingClientRect();
      let ye = 0, ke = 0;
      const we = pe.left + pe.width / 2, Ce = pe.top + pe.height / 2;
      switch (e.placement) {
        case "top":
          ye = pe.top - fe.height - e.offset, ke = we - fe.width / 2;
          break;
        case "right":
          ye = Ce - fe.height / 2, ke = pe.right + e.offset;
          break;
        case "bottom":
          ye = pe.bottom + e.offset, ke = we - fe.width / 2;
          break;
        case "left":
          ye = Ce - fe.height / 2, ke = pe.left - fe.width - e.offset;
          break;
      }
      m(W, ye, ke);
    }, m = (W, Z, re) => {
      var pe;
      const se = W.querySelector(
        '[class*="popoverArrow"]'
      );
      if (re = Math.max(8, re), re = Math.min(re, window.innerWidth - W.offsetWidth - 8), Z = Math.max(8, Z), Z = Math.min(Z, window.innerHeight - W.offsetHeight - 8), W.style.position = "fixed", W.style.top = `${Z}px`, W.style.left = `${re}px`, W.style.zIndex = ((pe = e.zIndex) == null ? void 0 : pe.toString()) || "1000", W.style.transition = "none", se && e.showArrow && !e.followCursor && !e.unbound) {
        const fe = s.value;
        if (!fe) return;
        const ye = fe.getBoundingClientRect(), ke = W.getBoundingClientRect(), we = getComputedStyle(W).borderColor;
        switch (e.placement) {
          case "top":
          case "bottom": {
            const he = ye.left + ye.width / 2 - re, ge = 12, Te = ke.width - 12, G = Math.max(
              ge,
              Math.min(Te, he)
            );
            se.style.left = `${G}px`, se.style.transform = "rotate(45deg)", e.placement === "top" ? (se.style.borderRight = `1px solid ${we}`, se.style.borderBottom = `1px solid ${we}`, se.style.borderLeft = "none", se.style.borderTop = "none") : (se.style.borderLeft = `1px solid ${we}`, se.style.borderTop = `1px solid ${we}`, se.style.borderRight = "none", se.style.borderBottom = "none");
            break;
          }
          case "left":
          case "right": {
            const he = ye.top + ye.height / 2 - Z, ge = 12, Te = ke.height - 12, G = Math.max(
              ge,
              Math.min(Te, he)
            );
            se.style.top = `${G}px`, se.style.transform = "rotate(45deg)", e.placement === "left" ? (se.style.borderRight = `1px solid ${we}`, se.style.borderBottom = `1px solid ${we}`, se.style.borderLeft = "none", se.style.borderTop = "none") : (se.style.borderLeft = `1px solid ${we}`, se.style.borderTop = `1px solid ${we}`, se.style.borderRight = "none", se.style.borderBottom = "none");
            break;
          }
        }
      }
    }, w = (W) => {
      C.value = W.clientX, k.value = W.clientY, (e.followCursor || e.unbound) && o.value && d();
    }, z = () => {
      o.value && d();
    }, M = () => {
      o.value && d();
    }, V = () => {
      e.disabled || (e.trigger === "click" || e.trigger === "manual") && h();
    }, A = (W) => {
      e.disabled || (C.value = W.clientX, k.value = W.clientY, e.trigger === "hover" && c());
    }, D = () => {
      e.disabled || e.trigger === "hover" && b();
    }, O = () => {
      e.disabled || c();
    }, T = () => {
      e.disabled || b();
    }, L = (W) => {
      var Z, re;
      o.value && !((Z = v.value) != null && Z.contains(W.target)) && !((re = s.value) != null && re.contains(W.target)) && b();
    }, P = g(() => {
      var W, Z;
      return e.unstyled ? ((W = e.pt) == null ? void 0 : W.container) || "relative inline-block" : (Z = e.pt) != null && Z.container ? `relative inline-block ${e.pt.container}` : "relative inline-block";
    }), F = g(() => {
      var W, Z;
      return e.unstyled ? ((W = e.pt) == null ? void 0 : W.trigger) || "inline-block" : br({
        disabled: e.disabled,
        class: (Z = e.pt) == null ? void 0 : Z.trigger
      });
    }), B = g(() => {
      var W, Z;
      return e.unstyled ? ((W = e.pt) == null ? void 0 : W.content) || "" : mr({
        placement: e.placement,
        visible: o.value,
        color: e.color,
        class: (Z = e.pt) == null ? void 0 : Z.content
      });
    }), E = g(() => {
      var W, Z;
      return e.unstyled ? ((W = e.pt) == null ? void 0 : W.arrow) || "" : yr({
        placement: e.placement,
        color: e.color,
        class: (Z = e.pt) == null ? void 0 : Z.arrow
      });
    }), I = g(() => {
      var W, Z;
      return e.unstyled ? ((W = e.pt) == null ? void 0 : W.title) || "" : hr({
        color: e.color,
        class: (Z = e.pt) == null ? void 0 : Z.title
      });
    }), N = g(() => {
      var W, Z;
      return e.unstyled ? ((W = e.pt) == null ? void 0 : W.body) || "" : wr({
        color: e.color,
        class: (Z = e.pt) == null ? void 0 : Z.body
      });
    }), _ = g(() => {
      var Z;
      const W = {
        zIndex: ((Z = e.zIndex) == null ? void 0 : Z.toString()) || "1000",
        transition: "none",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        maxWidth: "280px",
        overflow: "hidden"
      };
      return e.width && (W.width = typeof e.width == "number" ? `${e.width}px` : e.width), W;
    }), Y = g(() => e.teleport === !1 ? null : typeof e.teleport == "string" ? e.teleport : "body"), X = () => {
      window.addEventListener("resize", z), window.addEventListener("scroll", M, !0), document.addEventListener("click", L), window.addEventListener("mousemove", w);
    }, ne = () => {
      window.removeEventListener("resize", z), window.removeEventListener("scroll", M, !0), document.removeEventListener("click", L), window.removeEventListener("mousemove", w);
    };
    return $e(() => {
      X(), e.modelValue && Se(() => {
        i(!0);
      });
    }), He(() => {
      ne(), u && clearTimeout(u), f && clearTimeout(f);
    }), ae(
      () => e.modelValue,
      (W) => {
        W !== o.value && i(W);
      }
    ), ae(o, (W) => {
      W && Se(d), r("update:modelValue", W);
    }), ae(
      () => [e.placement, e.offset, e.followCursor, e.unbound],
      () => {
        o.value && Se(d);
      }
    ), a({
      show: () => i(!0),
      hide: () => i(!1),
      toggle: h,
      updatePosition: d
    }), (W, Z) => (y(), x("div", {
      class: p(P.value),
      onMousemove: w
    }, [
      W.unbound ? H("", !0) : (y(), x("div", {
        key: 0,
        ref_key: "triggerRef",
        ref: s,
        class: p(F.value),
        "aria-describedby": n,
        onClick: V,
        onMouseenter: A,
        onMouseleave: D,
        onFocus: O,
        onBlur: T
      }, [
        K(W.$slots, "trigger")
      ], 34)),
      (y(), Ee(ht, {
        to: Y.value,
        disabled: !Y.value
      }, [
        o.value && !W.disabled ? (y(), x("div", {
          key: 0,
          ref_key: "popoverRef",
          ref: v,
          class: p(B.value),
          style: ue(_.value),
          id: n,
          role: "tooltip",
          "aria-live": "polite"
        }, [
          W.showArrow && !W.followCursor && !W.unbound ? (y(), x("div", {
            key: 0,
            class: p(E.value)
          }, null, 2)) : H("", !0),
          $("div", xr, [
            W.title ? (y(), x("div", {
              key: 0,
              class: p(I.value)
            }, U(W.title), 3)) : H("", !0),
            $("div", {
              class: p(N.value)
            }, [
              K(W.$slots, "default", {}, () => [
                xe(U(W.content), 1)
              ])
            ], 2)
          ])
        ], 6)) : H("", !0)
      ], 8, ["to", "disabled"]))
    ], 34));
  }
}), Cr = le(kr);
function Sr(l) {
  const a = j(!1), t = j(null), e = j(null);
  let r = null, o = null, s = 0, v = 0;
  const u = {
    ...{
      openDelay: 0,
      closeDelay: 100,
      placement: "top",
      offset: 8,
      followCursor: !1,
      unbound: !1
    },
    ...l
  }, f = (V) => {
    s = V.clientX, v = V.clientY, (u.followCursor || u.unbound) && a.value && b();
  }, C = () => {
    o && clearTimeout(o), r = setTimeout(() => {
      a.value = !0, requestAnimationFrame(b);
    }, u.openDelay);
  }, k = () => {
    r && clearTimeout(r), o = setTimeout(() => {
      a.value = !1;
    }, u.closeDelay);
  }, c = (V) => {
    V ? C() : k();
  }, b = () => {
    if (!a.value || !e.value || !u.unbound && !u.followCursor && !t.value) return;
    const V = e.value, A = V.getBoundingClientRect();
    let D = 0, O = 0;
    const T = u.offset;
    if (u.followCursor || u.unbound)
      switch (u.placement) {
        case "top":
          D = v - A.height - T, O = s - A.width / 2;
          break;
        case "right":
          D = v - A.height / 2, O = s + T;
          break;
        case "bottom":
          D = v + T, O = s - A.width / 2;
          break;
        case "left":
          D = v - A.height / 2, O = s - A.width - T;
          break;
      }
    else {
      const P = t.value.getBoundingClientRect();
      switch (u.placement) {
        case "top":
          D = P.top - A.height - T, O = P.left + P.width / 2 - A.width / 2;
          break;
        case "right":
          D = P.top + P.height / 2 - A.height / 2, O = P.right + T;
          break;
        case "bottom":
          D = P.bottom + T, O = P.left + P.width / 2 - A.width / 2;
          break;
        case "left":
          D = P.top + P.height / 2 - A.height / 2, O = P.left - A.width - T;
          break;
      }
    }
    O = Math.max(8, O), O = Math.min(O, window.innerWidth - A.width - 8), D = Math.max(8, D), D = Math.min(D, window.innerHeight - A.height - 8), V.style.position = "fixed", V.style.top = "0", V.style.left = "0", V.style.transform = `translate3d(${O}px, ${D}px, 0)`, V.style.zIndex = "9999";
  }, h = () => {
    a.value && b();
  }, i = () => {
    a.value && b();
  };
  ae(a, (V) => {
    V ? (window.addEventListener("resize", h), window.addEventListener("scroll", i, !0), (u.followCursor || u.unbound) && window.addEventListener("mousemove", f)) : (window.removeEventListener("resize", h), window.removeEventListener("scroll", i, !0), (u.followCursor || u.unbound) && window.removeEventListener("mousemove", f));
  }), ae(t, (V) => {
    V && a.value && !u.unbound && b();
  }), $e(() => {
    (u.followCursor || u.unbound) && window.addEventListener("mousemove", f);
  });
  const d = (V) => {
    s = V.clientX, v = V.clientY, C();
  }, m = () => C(), w = () => k(), z = () => k();
  He(() => {
    r && clearTimeout(r), o && clearTimeout(o), window.removeEventListener("resize", h), window.removeEventListener("scroll", i, !0), (u.followCursor || u.unbound) && window.removeEventListener("mousemove", f);
  });
  const M = `tooltip-${Math.random().toString(36).slice(2, 9)}`;
  return {
    isOpen: a,
    triggerRef: t,
    tooltipRef: e,
    tooltipId: M,
    updatePosition: b,
    onMouseEnter: d,
    onFocus: m,
    onMouseLeave: w,
    onBlur: z,
    setIsOpen: c
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
}), Vr = ["aria-describedby"], Ir = ["id"], Mr = /* @__PURE__ */ ee({
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
    const e = l, r = t, o = j(0), s = j(0), v = j(!1), n = Sr({
      openDelay: e.openDelay,
      closeDelay: e.closeDelay,
      placement: e.placement,
      offset: e.offset,
      followCursor: e.followCursor,
      unbound: e.unbound
    }), u = n.isOpen, f = n.triggerRef, C = n.tooltipRef, k = n.tooltipId, c = n.setIsOpen, b = () => {
      v.value = !0, c(!0), Se(() => {
        M();
      });
    }, h = () => {
      v.value = !1, c(!1);
    }, i = () => {
      v.value ? h() : b();
    }, d = g(() => {
      var I, N;
      return e.unstyled ? ((I = e.pt) == null ? void 0 : I.container) || "" : zr({
        class: (N = e.pt) == null ? void 0 : N.container
      });
    }), m = g(() => {
      var I, N;
      return e.unstyled ? ((I = e.pt) == null ? void 0 : I.content) || "" : $r({
        color: e.color,
        visible: !0,
        class: (N = e.pt) == null ? void 0 : N.content
      });
    }), w = g(() => {
      var I, N;
      return e.unstyled ? ((I = e.pt) == null ? void 0 : I.arrow) || "" : Br({
        color: e.color,
        placement: e.placement,
        class: (N = e.pt) == null ? void 0 : N.arrow
      });
    }), z = g(() => {
      const I = {};
      return e.maxWidth && (I.maxWidth = typeof e.maxWidth == "number" ? `${e.maxWidth}px` : e.maxWidth), I;
    }), M = () => {
      const I = C.value;
      if (!I || !u.value) return;
      const N = o.value, _ = s.value;
      if (e.followCursor || e.unbound) {
        let Z = 0, re = 0;
        switch (e.placement) {
          case "top":
            Z = _ - I.offsetHeight - e.offset, re = N - I.offsetWidth / 2;
            break;
          case "right":
            Z = _ - I.offsetHeight / 2, re = N + e.offset;
            break;
          case "bottom":
            Z = _ + e.offset, re = N - I.offsetWidth / 2;
            break;
          case "left":
            Z = _ - I.offsetHeight / 2, re = N - I.offsetWidth - e.offset;
            break;
        }
        V(I, Z, re);
        return;
      }
      const Y = f.value;
      if (!Y) return;
      const X = Y.getBoundingClientRect();
      let ne = 0, W = 0;
      switch (e.placement) {
        case "top":
          ne = X.top - I.offsetHeight - e.offset, W = X.left + X.width / 2 - I.offsetWidth / 2;
          break;
        case "right":
          ne = X.top + X.height / 2 - I.offsetHeight / 2, W = X.right + e.offset;
          break;
        case "bottom":
          ne = X.bottom + e.offset, W = X.left + X.width / 2 - I.offsetWidth / 2;
          break;
        case "left":
          ne = X.top + X.height / 2 - I.offsetHeight / 2, W = X.left - I.offsetWidth - e.offset;
          break;
      }
      V(I, ne, W);
    }, V = (I, N, _) => {
      _ = Math.max(8, _), _ = Math.min(_, window.innerWidth - I.offsetWidth - 8), N = Math.max(8, N), N = Math.min(N, window.innerHeight - I.offsetHeight - 8), I.style.position = "fixed", I.style.top = `${N}px`, I.style.left = `${_}px`, I.style.zIndex = "9999", I.style.transition = "none";
    }, A = (I) => {
      o.value = I.clientX, s.value = I.clientY, u.value && (e.followCursor || e.unbound) && M();
    }, D = () => {
      u.value && M();
    }, O = () => {
      u.value && M();
    }, T = (I) => {
      e.disabled || (o.value = I.clientX, s.value = I.clientY, (e.trigger === "hover" || e.trigger === "both") && (c(!0), Se(M)));
    }, L = () => {
      e.disabled || (e.trigger === "focus" || e.trigger === "both") && (c(!0), Se(M));
    }, P = () => {
      e.disabled || (e.trigger === "hover" || e.trigger === "both") && c(!1);
    }, F = () => {
      e.disabled || (e.trigger === "focus" || e.trigger === "both") && c(!1);
    }, B = () => {
      window.addEventListener("mousemove", A), window.addEventListener("resize", D), window.addEventListener("scroll", O, !0);
    }, E = () => {
      window.removeEventListener("mousemove", A), window.removeEventListener("resize", D), window.removeEventListener("scroll", O, !0);
    };
    return $e(() => {
      B(), e.unbound && e.modelValue && (v.value = !0, c(!0), Se(M));
    }), He(() => {
      E();
    }), ae(u, (I) => {
      I && Se(M), e.unbound && (r("update:modelValue", I), v.value = I);
    }), ae(
      () => e.modelValue,
      (I) => {
        e.unbound && (v.value = I, c(I), I && Se(M));
      }
    ), a({
      show: b,
      hide: h,
      toggle: i,
      updatePosition: M
    }), (I, N) => (y(), x(ie, null, [
      I.unbound ? H("", !0) : (y(), x("span", {
        key: 0,
        ref_key: "triggerRef",
        ref: f,
        onMouseenter: T,
        onMouseleave: P,
        onFocus: L,
        onBlur: F,
        "aria-describedby": S(k),
        class: p(d.value),
        role: "button",
        tabindex: "0"
      }, [
        K(I.$slots, "default")
      ], 42, Vr)),
      (y(), Ee(ht, { to: "body" }, [
        S(u) && !I.disabled ? (y(), x("div", {
          key: 0,
          ref_key: "tooltipRef",
          ref: C,
          class: p(m.value),
          style: ue(z.value),
          id: S(k),
          role: "tooltip",
          "aria-live": "polite"
        }, [
          K(I.$slots, "content", {}, () => [
            xe(U(I.content), 1)
          ]),
          I.arrow && !I.followCursor && !I.unbound ? (y(), x("div", {
            key: 0,
            class: p(w.value)
          }, null, 2)) : H("", !0)
        ], 14, Ir)) : H("", !0)
      ]))
    ], 64));
  }
}), Dr = le(Mr);
function Tr(l) {
  const a = j(l.modelValue ?? !1), t = () => {
    var s;
    l.disabled || !l.selectable || (a.value = !a.value, (s = l.onChange) == null || s.call(l, a.value));
  }, e = (s) => {
    var v;
    l.disabled || (s.stopPropagation(), (v = l.onClose) == null || v.call(l, s));
  }, r = g(() => a.value), o = g(() => l.closable || !!l.onClose);
  return {
    isSelected: r,
    isClosable: o,
    toggle: t,
    handleClose: e
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
}), Er = ["aria-selected"], Lr = ["disabled"], Ar = /* @__PURE__ */ ee({
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
    const t = l, e = a, { isSelected: r, isClosable: o, toggle: s, handleClose: v } = Tr({
      modelValue: t.modelValue,
      selectable: t.selectable,
      disabled: t.disabled,
      closable: t.closable,
      onClose: (h) => e("close", h),
      onChange: (h) => e("update:modelValue", h)
    }), n = g(() => {
      var h, i;
      return t.unstyled ? ((h = t.pt) == null ? void 0 : h.root) || "" : Rr({
        variant: t.variant,
        color: t.color,
        size: t.size,
        radius: t.radius,
        selected: r.value,
        disabled: t.disabled,
        class: (i = t.pt) == null ? void 0 : i.root
      });
    }), u = g(() => {
      var i, d;
      return t.unstyled ? ((i = t.pt) == null ? void 0 : i.dot) || "" : [
        "mr-1.5 h-2 w-2 rounded-full",
        {
          default: "bg-zinc-500",
          primary: "bg-blue-500",
          secondary: "bg-purple-500",
          success: "bg-green-500",
          warning: "bg-yellow-500",
          danger: "bg-red-500"
        }[t.color || "default"],
        (d = t.pt) == null ? void 0 : d.dot
      ];
    }), f = g(() => {
      var h;
      return t.unstyled ? ((h = t.pt) == null ? void 0 : h.avatar) || "" : "flex shrink-0 mr-1.5";
    }), C = g(() => {
      var h;
      return t.unstyled ? ((h = t.pt) == null ? void 0 : h.startContent) || "" : "flex shrink-0 mr-1.5";
    }), k = g(() => {
      var h;
      return t.unstyled ? ((h = t.pt) == null ? void 0 : h.content) || "" : "truncate";
    }), c = g(() => {
      var h;
      return t.unstyled ? ((h = t.pt) == null ? void 0 : h.endContent) || "" : "flex shrink-0 ml-1.5";
    }), b = g(() => {
      var h;
      return t.unstyled ? ((h = t.pt) == null ? void 0 : h.closeButton) || "" : "ml-1.5 flex-shrink-0 flex items-center justify-center rounded-full hover:bg-black/5 focus:outline-none focus:bg-black/10 w-4 h-4";
    });
    return (h, i) => (y(), x("span", {
      class: p(n.value),
      role: "option",
      "aria-selected": S(r),
      onClick: i[1] || (i[1] = //@ts-ignore
      (...d) => S(s) && S(s)(...d))
    }, [
      h.variant === "dot" ? (y(), x("span", {
        key: 0,
        class: p(u.value)
      }, null, 2)) : H("", !0),
      h.$slots.avatar ? K(h.$slots, "avatar", {
        key: 1,
        class: p(f.value)
      }) : h.avatar ? K(h.$slots, "avatarFallback", {
        key: 2,
        class: p(f.value)
      }, () => [
        $("span", {
          class: p(f.value)
        }, [
          (y(), Ee(dt(h.avatar)))
        ], 2)
      ]) : H("", !0),
      h.$slots.startContent ? K(h.$slots, "startContent", {
        key: 3,
        class: p(C.value)
      }) : h.startContent ? K(h.$slots, "startContentFallback", {
        key: 4,
        class: p(C.value)
      }, () => [
        $("span", {
          class: p(C.value)
        }, [
          (y(), Ee(dt(h.startContent)))
        ], 2)
      ]) : H("", !0),
      $("span", {
        class: p(k.value)
      }, [
        K(h.$slots, "default")
      ], 2),
      h.$slots.endContent ? K(h.$slots, "endContent", {
        key: 5,
        class: p(c.value)
      }) : h.endContent ? K(h.$slots, "endContentFallback", {
        key: 6,
        class: p(c.value)
      }, () => [
        $("span", {
          class: p(c.value)
        }, [
          (y(), Ee(dt(h.endContent)))
        ], 2)
      ]) : H("", !0),
      S(o) ? (y(), x("button", {
        key: 7,
        type: "button",
        class: p(b.value),
        onClick: i[0] || (i[0] = Re(
          //@ts-ignore
          (...d) => S(v) && S(v)(...d),
          ["stop"]
        )),
        "aria-label": "关闭",
        disabled: h.disabled
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
      ]), 10, Lr)) : H("", !0)
    ], 10, Er));
  }
}), Or = le(Ar), Pr = R({
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
}), _r = R({
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
}), Wr = R({
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
}), Fr = R({
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
}), Hr = ["innerHTML"], Nr = { class: "flex-1" }, Gr = /* @__PURE__ */ ee({
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
    const t = l, e = a, r = j(!0), o = () => {
      r.value = !1, e("close");
    }, s = g(
      () => {
        var k, c;
        return t.unstyled ? ((k = t.pt) == null ? void 0 : k.root) || "" : Pr({
          variant: t.variant,
          size: t.size,
          rounded: t.rounded,
          border: t.border,
          shadow: t.shadow,
          class: [t.class, (c = t.pt) == null ? void 0 : c.root]
        });
      }
    ), v = g(
      () => {
        var k, c;
        return t.unstyled ? ((k = t.pt) == null ? void 0 : k.icon) || "" : jr({
          variant: t.variant,
          size: t.size,
          class: (c = t.pt) == null ? void 0 : c.icon
        });
      }
    ), n = g(
      () => {
        var k, c;
        return t.unstyled ? ((k = t.pt) == null ? void 0 : k.title) || "" : _r({
          size: t.size,
          class: (c = t.pt) == null ? void 0 : c.title
        });
      }
    ), u = g(
      () => {
        var k, c;
        return t.unstyled ? ((k = t.pt) == null ? void 0 : k.description) || "" : Wr({
          size: t.size,
          class: (c = t.pt) == null ? void 0 : c.description
        });
      }
    ), f = g(
      () => {
        var k, c;
        return t.unstyled ? ((k = t.pt) == null ? void 0 : k.closeButton) || "" : Fr({
          size: t.size,
          class: (c = t.pt) == null ? void 0 : c.closeButton
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
    return (k, c) => r.value ? (y(), x("div", {
      key: 0,
      class: p(s.value)
    }, [
      k.icon ? (y(), x("div", {
        key: 0,
        class: p(v.value)
      }, [
        K(k.$slots, "icon", {}, () => [
          $("span", {
            innerHTML: C[k.variant]
          }, null, 8, Hr)
        ])
      ], 2)) : H("", !0),
      $("div", Nr, [
        k.$slots.title || k.title ? (y(), x("div", {
          key: 0,
          class: p(n.value)
        }, [
          K(k.$slots, "title", {}, () => [
            xe(U(k.title), 1)
          ])
        ], 2)) : H("", !0),
        $("div", {
          class: p(u.value)
        }, [
          K(k.$slots, "default", {}, () => [
            xe(U(k.description), 1)
          ])
        ], 2)
      ]),
      k.closable ? (y(), x("button", {
        key: 1,
        class: p(f.value),
        onClick: o,
        "aria-label": "关闭",
        type: "button"
      }, [
        K(k.$slots, "close-icon", {}, () => [
          c[0] || (c[0] = $("svg", {
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
      ], 2)) : H("", !0)
    ], 2)) : H("", !0);
  }
}), Kr = le(Gr), Yr = R({
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
}), Ur = /* @__PURE__ */ ee({
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
    const a = l, t = g(() => {
      var e, r;
      return a.unstyled ? ((e = a.pt) == null ? void 0 : e.root) || "" : Yr({
        size: a.size,
        variant: a.variant,
        class: (r = a.pt) == null ? void 0 : r.root
      });
    });
    return (e, r) => (y(), x("kbd", {
      class: p(t.value)
    }, [
      K(e.$slots, "default")
    ], 2));
  }
}), Xr = le(Ur), qr = R({
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
  _ref: j(null),
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
}, lo = /* @__PURE__ */ ee({
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
  setup(l, { expose: a, emit: t }) {
    const e = t, r = l, { _ref: o, handleClick: s } = Jr(r, e), v = g(() => {
      var f, C;
      return r.unstyled ? ((f = r.pt) == null ? void 0 : f.root) || "" : qr({
        variant: r.variant,
        size: r.size,
        fullWidth: r.fullWidth,
        rounded: r.rounded,
        disabled: r.disabled || r.loading,
        class: (C = r.pt) == null ? void 0 : C.root
      });
    }), n = g(() => {
      var f;
      return r.unstyled ? ((f = r.pt) == null ? void 0 : f.loader) || "" : "mr-2";
    }), u = g(() => {
      var f;
      return r.unstyled && ((f = r.pt) == null ? void 0 : f.icon) || "";
    });
    return a({
      _ref: o,
      handleClick: s
    }), (f, C) => (y(), x("button", {
      class: p(v.value),
      type: f.type,
      disabled: f.disabled || f.loading,
      ref_key: "_ref",
      ref: o,
      onClick: C[0] || (C[0] = //@ts-ignore
      (...k) => S(s) && S(s)(...k))
    }, [
      f.loading ? (y(), x("span", {
        key: 0,
        class: p(n.value)
      }, [
        f.$slots.loading ? (y(), x("span", eo, [
          K(f.$slots, "loading")
        ])) : (y(), x("span", to))
      ], 2)) : f.$slots.icon ? (y(), x("span", {
        key: 1,
        class: p(u.value)
      }, [
        K(f.$slots, "icon")
      ], 2)) : H("", !0),
      K(f.$slots, "default")
    ], 10, Qr));
  }
}), ao = le(lo), ro = R({
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
}), oo = /* @__PURE__ */ ee({
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
    const a = l, t = g(() => {
      var s, v;
      return a.unstyled ? ((s = a.pt) == null ? void 0 : s.root) || "" : ro({
        variant: a.variant,
        padding: a.padding,
        radius: a.radius,
        hover: a.hover,
        class: (v = a.pt) == null ? void 0 : v.root
      });
    }), e = g(() => {
      var s;
      return a.unstyled ? ((s = a.pt) == null ? void 0 : s.header) || "" : "mb-4";
    }), r = g(() => {
      var s;
      return a.unstyled && ((s = a.pt) == null ? void 0 : s.body) || "";
    }), o = g(() => {
      var s;
      return a.unstyled ? ((s = a.pt) == null ? void 0 : s.footer) || "" : "mt-4 flex justify-end";
    });
    return (s, v) => (y(), x("div", {
      class: p(t.value)
    }, [
      s.$slots.header ? (y(), x("div", {
        key: 0,
        class: p(e.value)
      }, [
        K(s.$slots, "header")
      ], 2)) : H("", !0),
      $("div", {
        class: p(r.value)
      }, [
        K(s.$slots, "default")
      ], 2),
      s.$slots.footer ? (y(), x("div", {
        key: 1,
        class: p(o.value)
      }, [
        K(s.$slots, "footer")
      ], 2)) : H("", !0)
    ], 2));
  }
}), so = le(oo), no = R({
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
}), io = /* @__PURE__ */ ee({
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
    const a = l, t = Ze(), e = g(() => {
      var n;
      return !!a.label || !!((n = t.default) != null && n.call(t));
    }), r = g(() => a.as ? a.as : a.orientation === "horizontal" && !e.value ? "hr" : "div"), o = g(() => {
      var n, u;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.root) || "" : no({
        orientation: a.orientation,
        variant: a.variant,
        size: a.size,
        labelPosition: a.labelPosition,
        withLabel: e.value,
        class: (u = a.pt) == null ? void 0 : u.root
      });
    }), s = g(() => {
      var n;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.label) || "" : "shrink-0 whitespace-nowrap px-2 text-gray-500";
    }), v = g(() => !a.unstyled && a.color ? {
      borderColor: a.color,
      "--tw-border-opacity": 1,
      "before:border-color": a.color,
      "after:border-color": a.color
    } : {});
    return (n, u) => (y(), Ee(dt(r.value), {
      class: p(o.value),
      style: ue(v.value),
      role: "separator",
      "aria-orientation": n.orientation,
      "data-orientation": n.orientation
    }, {
      default: qe(() => [
        e.value ? (y(), x("div", {
          key: 0,
          class: p(s.value)
        }, [
          K(n.$slots, "default", {}, () => [
            xe(U(n.label), 1)
          ])
        ], 2)) : H("", !0)
      ]),
      _: 3
    }, 8, ["class", "style", "aria-orientation", "data-orientation"]));
  }
}), uo = le(io), co = R({
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
}), fo = ["value", "placeholder", "disabled", "readonly", "rows", "maxlength", "minlength"], po = /* @__PURE__ */ ee({
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
    const t = l, e = a, r = g(() => {
      var u;
      return ((u = t.pt) == null ? void 0 : u.root) || "w-full";
    }), o = g(() => {
      var u, f;
      return t.unstyled ? ((u = t.pt) == null ? void 0 : u.textarea) || "" : co({
        size: t.size,
        status: t.status,
        resize: t.resize,
        class: (f = t.pt) == null ? void 0 : f.textarea
      });
    }), s = g(() => {
      var u, f;
      return t.unstyled ? ((u = t.pt) == null ? void 0 : u.counter) || "" : ((f = t.pt) == null ? void 0 : f.counter) || "mt-1 text-right text-sm text-gray-500";
    }), v = (u) => {
      const f = u.target;
      e("update:modelValue", f.value), t.autosize && n(f);
    }, n = (u) => {
      u.style.height = "auto", u.style.height = `${u.scrollHeight}px`;
    };
    return $e(() => {
      if (t.autosize) {
        const u = document.querySelector("textarea");
        u && n(u);
      }
    }), (u, f) => {
      var C;
      return y(), x("div", {
        class: p(r.value)
      }, [
        $("textarea", {
          class: p(o.value),
          value: u.modelValue,
          placeholder: u.placeholder,
          disabled: u.disabled,
          readonly: u.readonly,
          rows: u.rows,
          maxlength: u.maxLength,
          minlength: u.minLength,
          onInput: v
        }, null, 42, fo),
        u.showCount && u.maxLength ? (y(), x("div", {
          key: 0,
          class: p(s.value)
        }, U(((C = u.modelValue) == null ? void 0 : C.length) || 0) + "/" + U(u.maxLength), 3)) : H("", !0)
      ], 2);
    };
  }
}), vo = le(po), mt = R({
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
}), go = ["checked", "disabled"], bo = /* @__PURE__ */ ee({
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
    const t = l, e = a, r = Ae("checkbox-group", null), o = g(() => {
      if (r) {
        const h = t.value;
        return r.modelValue.value.includes(
          h
        );
      }
      return Array.isArray(t.modelValue) ? t.modelValue.includes(t.value) : !!t.modelValue;
    }), s = g(() => (r == null ? void 0 : r.disabled.value) || !1 || t.disabled), v = g(() => (r == null ? void 0 : r.size.value) || t.size || "default"), n = g(() => (r == null ? void 0 : r.color.value) || t.color || "blue"), u = () => {
      if (!s.value)
        if (r) {
          const h = t.value, i = [...r.modelValue.value], d = i.indexOf(h);
          if (d === -1) {
            if (r.max.value && i.length >= r.max.value)
              return;
            i.push(h);
          } else {
            if (r.min.value && i.length <= r.min.value)
              return;
            i.splice(d, 1);
          }
          r.changeEvent(i);
        } else if (Array.isArray(t.modelValue)) {
          const h = t.value, i = [...t.modelValue], d = i.indexOf(h);
          d === -1 ? i.push(h) : i.splice(d, 1), e("update:modelValue", i), e("change", i);
        } else {
          const h = !t.modelValue;
          e("update:modelValue", h), e("change", h);
        }
    }, f = (h) => {
      (h.key === "Enter" || h.key === " ") && (h.preventDefault(), u());
    }, C = g(() => {
      var i, d;
      return t.unstyled ? ((i = t.pt) == null ? void 0 : i.root) || "" : mt({
        checked: o.value,
        disabled: s.value,
        size: v.value,
        color: n.value
      }).root({ class: (d = t.pt) == null ? void 0 : d.root });
    }), k = g(() => {
      var i, d;
      return t.unstyled ? ((i = t.pt) == null ? void 0 : i.checkbox) || "" : mt({
        checked: o.value,
        disabled: s.value,
        size: v.value,
        color: n.value
      }).checkbox({ class: (d = t.pt) == null ? void 0 : d.checkbox });
    }), c = g(() => {
      var i, d;
      return t.unstyled ? ((i = t.pt) == null ? void 0 : i.icon) || "" : mt({
        checked: o.value,
        disabled: s.value,
        size: v.value,
        color: n.value
      }).icon({ class: (d = t.pt) == null ? void 0 : d.icon });
    }), b = g(() => {
      var i, d;
      return t.unstyled ? ((i = t.pt) == null ? void 0 : i.label) || "" : mt({
        checked: o.value,
        disabled: s.value,
        size: v.value,
        color: n.value
      }).label({ class: (d = t.pt) == null ? void 0 : d.label });
    });
    return (h, i) => (y(), x("label", {
      class: p(C.value),
      onClick: Re(u, ["prevent"]),
      onKeydown: f,
      tabindex: "0"
    }, [
      $("input", {
        type: "checkbox",
        class: "sr-only",
        checked: o.value,
        disabled: s.value
      }, null, 8, go),
      $("div", {
        class: p(k.value)
      }, [
        o.value ? (y(), x("span", {
          key: 0,
          class: p(c.value)
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
        ]), 2)) : H("", !0)
      ], 2),
      t.label ? (y(), x("span", {
        key: 0,
        class: p(b.value)
      }, U(t.label), 3)) : K(h.$slots, "default", { key: 1 })
    ], 34));
  }
}), mo = /* @__PURE__ */ ee({
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
    const t = l, e = a, r = (o) => {
      e("update:modelValue", o), e("change", o);
    };
    return Oe("checkbox-group", {
      modelValue: Me(t, "modelValue"),
      disabled: Me(t, "disabled"),
      size: Me(t, "size"),
      color: Me(t, "color"),
      min: Me(t, "min"),
      max: Me(t, "max"),
      changeEvent: r
    }), (o, s) => (y(), x("div", {
      class: p(["flex flex-wrap", [o.direction === "vertical" ? "flex-col gap-2" : "flex-row gap-4"]]),
      role: "group",
      "aria-label": "checkbox-group"
    }, [
      K(o.$slots, "default")
    ], 2));
  }
}), yo = le(bo), ho = le(mo), Ye = R({
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
  var v;
  const a = j(((v = l.modelValue) == null ? void 0 : v.toString()) || ""), t = j(null), e = (n) => {
    var u;
    if (!(l.disabled || l.readonly)) {
      if (l.type === "number" && n !== "") {
        const f = parseFloat(n);
        a.value = isNaN(f) ? "" : n;
      } else
        a.value = n;
      l.maxlength && n.length > l.maxlength && (a.value = n.slice(0, l.maxlength)), (u = l.onChange) == null || u.call(l, a.value);
    }
  };
  return ae(
    () => l.modelValue,
    (n) => {
      n != null ? a.value = n.toString() : a.value = "";
    }
  ), {
    inputValue: a,
    inputRef: t,
    updateValue: e,
    clearInput: () => {
      var n, u;
      l.disabled || l.readonly || (a.value = "", (n = l.onChange) == null || n.call(l, ""), (u = t.value) == null || u.focus());
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
const xo = ["type", "value", "placeholder", "disabled", "readonly", "maxlength", "autofocus"], ko = /* @__PURE__ */ ee({
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
    const e = l, r = t, { inputValue: o, inputRef: s, updateValue: v, clearInput: n, focus: u, blur: f } = wo(
      {
        modelValue: e.modelValue,
        type: e.type,
        disabled: e.disabled,
        readonly: e.readonly,
        maxlength: e.maxlength,
        onChange: (m) => r("update:modelValue", m)
      }
    ), C = g(() => {
      var w, z;
      return e.unstyled ? ((w = e.pt) == null ? void 0 : w.root) || "" : Ye({
        size: e.size,
        status: e.status,
        disabled: e.disabled
      }).root({ class: (z = e.pt) == null ? void 0 : z.root });
    }), k = g(() => {
      var w, z;
      return e.unstyled ? ((w = e.pt) == null ? void 0 : w.wrapper) || "" : Ye({
        size: e.size,
        status: e.status,
        disabled: e.disabled
      }).wrapper({ class: (z = e.pt) == null ? void 0 : z.wrapper });
    }), c = g(() => {
      var w, z;
      return e.unstyled ? ((w = e.pt) == null ? void 0 : w.input) || "" : Ye({
        size: e.size,
        status: e.status,
        disabled: e.disabled
      }).input({ class: (z = e.pt) == null ? void 0 : z.input });
    }), b = g(() => {
      var w, z;
      return e.unstyled ? ((w = e.pt) == null ? void 0 : w.prefix) || "" : Ye({
        size: e.size,
        status: e.status,
        disabled: e.disabled
      }).prefix({ class: (z = e.pt) == null ? void 0 : z.prefix });
    }), h = g(() => {
      var w, z;
      return e.unstyled ? ((w = e.pt) == null ? void 0 : w.suffix) || "" : Ye({
        size: e.size,
        status: e.status,
        disabled: e.disabled
      }).suffix({ class: (z = e.pt) == null ? void 0 : z.suffix });
    }), i = g(() => {
      var w, z;
      return e.unstyled ? ((w = e.pt) == null ? void 0 : w.clear) || "" : Ye({
        size: e.size,
        status: e.status,
        disabled: e.disabled
      }).clear({ class: (z = e.pt) == null ? void 0 : z.clear });
    }), d = g(() => {
      var w, z;
      return e.unstyled ? ((w = e.pt) == null ? void 0 : w.count) || "" : Ye({
        size: e.size,
        status: e.status,
        disabled: e.disabled
      }).count({ class: (z = e.pt) == null ? void 0 : z.count });
    });
    return a({
      focus: u,
      blur: f,
      inputRef: s
    }), (m, w) => (y(), x("div", {
      class: p(C.value)
    }, [
      $("div", {
        class: p([k.value, e.readonly && "cursor-default"])
      }, [
        e.prefixIcon ? (y(), x("div", {
          key: 0,
          class: p(b.value)
        }, [
          $("i", {
            class: p(e.prefixIcon)
          }, null, 2)
        ], 2)) : H("", !0),
        $("input", {
          type: e.type,
          class: p(c.value),
          value: S(o),
          placeholder: e.placeholder,
          disabled: e.disabled,
          readonly: e.readonly,
          maxlength: e.maxlength,
          autofocus: e.autofocus,
          ref_key: "inputRef",
          ref: s,
          onInput: w[0] || (w[0] = (z) => S(v)(z.target.value)),
          onFocus: w[1] || (w[1] = (z) => m.$emit("focus", z)),
          onBlur: w[2] || (w[2] = (z) => m.$emit("blur", z))
        }, null, 42, xo),
        e.clearable && S(o) && !e.disabled && !e.readonly ? (y(), x("div", {
          key: 1,
          class: p([h.value, i.value]),
          onClick: w[3] || (w[3] = //@ts-ignore
          (...z) => S(n) && S(n)(...z))
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
        ]), 2)) : H("", !0),
        e.suffixIcon ? (y(), x("div", {
          key: 2,
          class: p(h.value)
        }, [
          $("i", {
            class: p(e.suffixIcon)
          }, null, 2)
        ], 2)) : H("", !0)
      ], 2),
      e.showCount && e.maxlength ? (y(), x("div", {
        key: 0,
        class: p(d.value)
      }, U(S(o).length) + "/" + U(e.maxlength), 3)) : H("", !0)
    ], 2));
  }
}), Co = le(ko);
function So(l) {
  const a = j(!1), t = j(""), e = j(0), r = j(null), o = j(null), s = j(l.modelValue);
  ae(
    () => l.modelValue,
    (T) => {
      s.value = T;
    },
    { immediate: !0 }
  );
  const v = g(() => {
    var T;
    return ((T = l.options) == null ? void 0 : T.map((L) => ({
      ...L,
      disabled: L.disabled || !1
    }))) || [];
  }), n = g(() => {
    const T = {}, L = [];
    return v.value.forEach((P) => {
      P.group ? (T[P.group] || (T[P.group] = []), T[P.group].push(P)) : L.push(P);
    }), { groups: T, noGroup: L };
  }), u = g(() => l.multiple ? Array.isArray(s.value) ? s.value : [] : s.value !== void 0 ? [s.value] : []), f = g(() => {
    const T = [];
    if (!u.value.length) return T;
    for (const L of u.value) {
      const P = v.value.find(
        (F) => F.value === L || String(F.value) === String(L)
      );
      if (P)
        T.push(P);
      else if (L != null && (typeof L == "string" || typeof L == "number")) {
        const F = {
          label: String(L),
          value: L,
          disabled: !1
        };
        T.push(F);
      }
    }
    return T;
  }), C = g(() => {
    var T;
    return !f.value || f.value.length === 0 ? "" : ((T = f.value[0]) == null ? void 0 : T.label) || "";
  }), k = g(() => {
    if (!l.filterable || !t.value)
      return v.value;
    const T = t.value.toLowerCase();
    return v.value.filter(
      (L) => L.label.toLowerCase().includes(T)
    );
  }), c = (T) => {
    var P;
    if (l.disabled || l.readonly || T.disabled)
      return;
    let L;
    if (l.multiple) {
      const F = [...u.value], B = F.findIndex(
        (E) => String(E) === String(T.value)
      );
      B > -1 ? F.splice(B, 1) : F.push(T.value), L = F;
    } else
      L = T.value, d();
    s.value = L, (P = l.onChange) == null || P.call(l, L), l.filterable && Se(() => {
      t.value = "";
    });
  }, b = (T) => {
    var P;
    if (T && T.stopPropagation(), l.disabled || l.readonly) return;
    const L = l.multiple ? [] : void 0;
    s.value = L, (P = l.onChange) == null || P.call(l, L);
  }, h = () => {
    var T;
    l.disabled || l.readonly || (a.value = !a.value, (T = l.onDropdownVisibleChange) == null || T.call(l, a.value), a.value && Se(() => {
      m();
    }));
  }, i = () => {
    var T;
    l.disabled || l.readonly || a.value || (a.value = !0, (T = l.onDropdownVisibleChange) == null || T.call(l, !0), Se(() => {
      m();
    }));
  }, d = () => {
    var T;
    a.value && (a.value = !1, t.value = "", (T = l.onDropdownVisibleChange) == null || T.call(l, !1));
  }, m = () => {
    const T = k.value;
    for (let L = 0; L < T.length; L++)
      if (!T[L].disabled) {
        e.value = L;
        return;
      }
    e.value = -1;
  }, w = (T) => u.value.some((L) => String(L) === String(T)), z = (T) => {
    var P, F;
    if (l.disabled || l.readonly) return;
    const L = k.value;
    switch (T.key) {
      case "ArrowDown":
        if (T.preventDefault(), !a.value)
          i();
        else {
          let B = e.value, E = 0;
          do
            B = (B + 1) % L.length, E++;
          while ((P = L[B]) != null && P.disabled && E < L.length);
          e.value = B;
        }
        break;
      case "ArrowUp":
        if (T.preventDefault(), !a.value)
          i();
        else {
          let B = e.value, E = 0;
          do
            B = B <= 0 ? L.length - 1 : B - 1, E++;
          while ((F = L[B]) != null && F.disabled && E < L.length);
          e.value = B;
        }
        break;
      case "Enter":
      case " ":
        T.preventDefault(), a.value && e.value >= 0 && L[e.value] ? c(L[e.value]) : h();
        break;
      case "Escape":
        T.preventDefault(), d();
        break;
      case "Tab":
        d();
        break;
    }
  }, M = (T) => {
    var L;
    t.value = T, (L = l.onSearch) == null || L.call(l, T), m();
  }, V = (T) => {
    a.value && r.value && o.value && !r.value.contains(T.target) && !o.value.contains(T.target) && d();
  }, A = () => {
    document.addEventListener("mousedown", V);
  }, D = () => {
    document.removeEventListener("mousedown", V);
  };
  ae(a, (T) => {
    T ? A() : D();
  });
  const O = () => {
    D();
  };
  return $e(() => {
    a.value && A();
  }), Pe(() => {
    O();
  }), {
    isOpen: a,
    searchValue: t,
    activeIndex: e,
    triggerRef: r,
    dropdownRef: o,
    selectedValues: u,
    selectedOptions: f,
    getOptionLabel: C,
    filteredOptions: k,
    groupedOptions: n,
    selectOption: c,
    clearSelection: b,
    toggleDropdown: h,
    openDropdown: i,
    closeDropdown: d,
    isSelected: w,
    onKeyDown: z,
    onSearchInput: M,
    cleanup: O
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
}, Lo = ["value"], Ao = ["onClick", "aria-selected", "aria-disabled"], Oo = ["onClick", "aria-selected", "aria-disabled"], Po = { class: "px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400" }, jo = ["onClick", "aria-selected", "aria-disabled"], _o = {
  key: 1,
  class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
}, Wo = {
  key: 2,
  class: "mt-1 text-xs text-red-500"
}, Fo = /* @__PURE__ */ ee({
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
    const e = l, r = t, o = zo(), s = g(() => {
      var E, I, N, _, Y, X, ne, W, Z, re, se, pe, fe, ye, ke, we, Ce, he, ge, Te, G, oe, je, be, ze, at, Je, q, te, de, me, Ne, rt;
      return e.unstyled ? {
        root: ((E = e.pt) == null ? void 0 : E.root) || "",
        trigger: ((I = e.pt) == null ? void 0 : I.trigger) || "",
        value: ((N = e.pt) == null ? void 0 : N.value) || "",
        placeholder: ((_ = e.pt) == null ? void 0 : _.placeholder) || "",
        dropdown: ((Y = e.pt) == null ? void 0 : Y.dropdown) || "",
        option: ((X = e.pt) == null ? void 0 : X.option) || "",
        optionSelected: ((ne = e.pt) == null ? void 0 : ne.optionSelected) || "",
        optionActive: ((W = e.pt) == null ? void 0 : W.optionActive) || "",
        optionDisabled: ((Z = e.pt) == null ? void 0 : Z.optionDisabled) || "",
        icon: ((re = e.pt) == null ? void 0 : re.icon) || "",
        clearIcon: ((se = e.pt) == null ? void 0 : se.clearIcon) || "",
        checkIcon: ((pe = e.pt) == null ? void 0 : pe.checkIcon) || "",
        search: ((fe = e.pt) == null ? void 0 : fe.search) || "",
        tag: ((ye = e.pt) == null ? void 0 : ye.tag) || "",
        tagRemove: ((ke = e.pt) == null ? void 0 : ke.tagRemove) || "",
        noMatch: ((we = e.pt) == null ? void 0 : we.noMatch) || "",
        label: ((Ce = e.pt) == null ? void 0 : Ce.label) || ""
      } : {
        root: o.root({
          size: e.size,
          status: e.status,
          disabled: e.disabled,
          multiple: e.multiple,
          open: u.value,
          class: (he = e.pt) == null ? void 0 : he.root
        }),
        trigger: o.trigger({
          size: e.size,
          status: e.status,
          disabled: e.disabled,
          multiple: e.multiple,
          open: u.value,
          class: (ge = e.pt) == null ? void 0 : ge.trigger
        }),
        value: o.value({
          multiple: e.multiple,
          class: (Te = e.pt) == null ? void 0 : Te.value
        }),
        placeholder: o.placeholder({ class: (G = e.pt) == null ? void 0 : G.placeholder }),
        dropdown: o.dropdown({ class: (oe = e.pt) == null ? void 0 : oe.dropdown }),
        option: o.option({ class: (je = e.pt) == null ? void 0 : je.option }),
        optionSelected: o.optionSelected({ class: (be = e.pt) == null ? void 0 : be.optionSelected }),
        optionActive: o.optionActive({ class: (ze = e.pt) == null ? void 0 : ze.optionActive }),
        optionDisabled: o.optionDisabled({ class: (at = e.pt) == null ? void 0 : at.optionDisabled }),
        icon: o.icon({ class: (Je = e.pt) == null ? void 0 : Je.icon }),
        clearIcon: o.clearIcon({ class: (q = e.pt) == null ? void 0 : q.clearIcon }),
        checkIcon: o.checkIcon({ class: (te = e.pt) == null ? void 0 : te.checkIcon }),
        search: o.search({ class: (de = e.pt) == null ? void 0 : de.search }),
        tag: o.tag({ class: (me = e.pt) == null ? void 0 : me.tag }),
        tagRemove: o.tagRemove({ class: (Ne = e.pt) == null ? void 0 : Ne.tagRemove }),
        noMatch: o.noMatch({ class: (rt = e.pt) == null ? void 0 : rt.noMatch })
      };
    }), v = `versa-select-dropdown-${Math.random().toString(36).substring(2, 9)}`, n = j(null), {
      isOpen: u,
      searchValue: f,
      activeIndex: C,
      triggerRef: k,
      dropdownRef: c,
      selectedValues: b,
      selectedOptions: h,
      getOptionLabel: i,
      filteredOptions: d,
      groupedOptions: m,
      selectOption: w,
      clearSelection: z,
      toggleDropdown: M,
      openDropdown: V,
      closeDropdown: A,
      isSelected: D,
      onKeyDown: O,
      onSearchInput: T,
      cleanup: L
    } = So({
      modelValue: e.modelValue,
      options: e.options,
      multiple: e.multiple,
      filterable: e.filterable,
      disabled: e.disabled,
      readonly: e.readonly,
      onChange: (E) => {
        r("update:modelValue", E), r("change", E), (E === void 0 || Array.isArray(E) && E.length === 0) && r("clear");
      },
      onSearch: (E) => {
        r("search", E);
      },
      onDropdownVisibleChange: (E) => {
        r("dropdown-visible-change", E), E && e.filterable && setTimeout(() => {
          var I;
          (I = n.value) == null || I.focus();
        }, 0);
      }
    }), P = g(() => Object.keys(m.value.groups).length > 0), F = (E, I) => {
      let N = 0;
      if (E === null)
        return I;
      N += m.value.noGroup.length;
      const _ = Object.keys(m.value.groups);
      for (let Y = 0; Y < _.length; Y++) {
        const X = _[Y];
        if (X === E)
          return N + I;
        N += m.value.groups[X].length;
      }
      return -1;
    }, B = (E) => {
      T(E.target.value);
    };
    return Pe(() => {
      L();
    }), a({
      open: V,
      close: A,
      clear: z
    }), (E, I) => {
      var N;
      return y(), x("div", {
        class: p(s.value.root)
      }, [
        e.showLabel && e.label ? (y(), x("label", {
          key: 0,
          class: p(
            ((N = e.pt) == null ? void 0 : N.label) || "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          )
        }, [
          xe(U(e.label) + " ", 1),
          e.required ? (y(), x("span", $o, "*")) : H("", !0)
        ], 2)) : H("", !0),
        $("div", {
          ref_key: "triggerRef",
          ref: k,
          class: p(s.value.trigger),
          onClick: I[1] || (I[1] = (_) => !e.disabled && !e.readonly && S(M)()),
          onKeydown: I[2] || (I[2] = //@ts-ignore
          (..._) => S(O) && S(O)(..._)),
          tabindex: "0",
          role: "combobox",
          "aria-expanded": S(u),
          "aria-disabled": e.disabled,
          "aria-readonly": e.readonly,
          "aria-required": e.required,
          "aria-haspopup": !0,
          "aria-controls": v
        }, [
          $("div", {
            class: p(s.value.value)
          }, [
            e.multiple && S(h).length ? (y(), x("div", Vo, [
              (y(!0), x(ie, null, ve(S(h), (_) => (y(), x("div", {
                key: _.value,
                class: p(s.value.tag)
              }, [
                $("span", Io, U(_.label), 1),
                !e.disabled && !e.readonly ? (y(), x("button", {
                  key: 0,
                  type: "button",
                  class: p(s.value.tagRemove),
                  onClick: Re((Y) => S(w)(_), ["stop"]),
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
                ]), 10, Mo)) : H("", !0)
              ], 2))), 128))
            ])) : S(h).length ? (y(), x("div", Do, U(S(i)), 1)) : (y(), x("div", {
              key: 2,
              class: p(s.value.placeholder)
            }, U(e.placeholder), 3))
          ], 2),
          $("div", To, [
            e.clearable && S(b).length && !e.disabled && !e.readonly ? (y(), x("button", {
              key: 0,
              type: "button",
              class: p(s.value.clearIcon),
              onClick: I[0] || (I[0] = Re(
                //@ts-ignore
                (..._) => S(z) && S(z)(..._),
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
            ]), 2)) : H("", !0),
            $("div", {
              class: p(s.value.icon)
            }, [
              (y(), x("svg", {
                viewBox: "0 0 24 24",
                width: "16",
                height: "16",
                stroke: "currentColor",
                "stroke-width": "2",
                fill: "none",
                style: ue({ transform: S(u) ? "rotate(180deg)" : void 0 }),
                class: "transition-transform duration-200"
              }, I[6] || (I[6] = [
                $("polyline", { points: "6 9 12 15 18 9" }, null, -1)
              ]), 4))
            ], 2)
          ])
        ], 42, Bo),
        Le(ct, { name: "versa-select-dropdown" }, {
          default: qe(() => [
            S(u) ? (y(), x("div", {
              key: 0,
              ref_key: "dropdownRef",
              ref: c,
              id: v,
              class: p(s.value.dropdown),
              style: ue({ maxHeight: `${e.maxDropdownHeight}px` }),
              role: "listbox",
              "aria-multiselectable": e.multiple
            }, [
              e.filterable ? (y(), x("div", Eo, [
                $("input", {
                  ref_key: "searchInputRef",
                  ref: n,
                  class: p(s.value.search),
                  type: "text",
                  value: S(f),
                  onInput: B,
                  placeholder: "搜索...",
                  onKeydown: I[3] || (I[3] = Re(() => {
                  }, ["stop"]))
                }, null, 42, Lo)
              ])) : H("", !0),
              $("div", null, [
                P.value ? (y(), x(ie, { key: 1 }, [
                  S(m).noGroup.length ? (y(!0), x(ie, { key: 0 }, ve(S(m).noGroup, (_, Y) => (y(), x("div", {
                    key: _.value,
                    class: p([
                      s.value.option,
                      {
                        [s.value.optionSelected]: S(D)(_.value),
                        [s.value.optionActive]: S(C) === Y,
                        [s.value.optionDisabled]: _.disabled
                      }
                    ]),
                    onClick: Re((X) => !_.disabled && S(w)(_), ["stop"]),
                    role: "option",
                    "aria-selected": S(D)(_.value),
                    "aria-disabled": _.disabled
                  }, [
                    xe(U(_.label) + " ", 1),
                    S(D)(_.value) ? (y(), x("svg", {
                      key: 0,
                      class: p(s.value.checkIcon),
                      viewBox: "0 0 24 24",
                      width: "16",
                      height: "16",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      fill: "none"
                    }, I[8] || (I[8] = [
                      $("polyline", { points: "20 6 9 17 4 12" }, null, -1)
                    ]), 2)) : H("", !0)
                  ], 10, Oo))), 128)) : H("", !0),
                  (y(!0), x(ie, null, ve(S(m).groups, (_, Y) => (y(), x(ie, { key: Y }, [
                    $("div", Po, U(Y), 1),
                    (y(!0), x(ie, null, ve(_, (X, ne) => (y(), x("div", {
                      key: X.value,
                      class: p([
                        s.value.option,
                        "pl-5",
                        {
                          [s.value.optionSelected]: S(D)(X.value),
                          [s.value.optionActive]: F(Y, ne) === S(C),
                          [s.value.optionDisabled]: X.disabled
                        }
                      ]),
                      onClick: Re((W) => !X.disabled && S(w)(X), ["stop"]),
                      role: "option",
                      "aria-selected": S(D)(X.value),
                      "aria-disabled": X.disabled
                    }, [
                      xe(U(X.label) + " ", 1),
                      S(D)(X.value) ? (y(), x("svg", {
                        key: 0,
                        class: p(s.value.checkIcon),
                        viewBox: "0 0 24 24",
                        width: "16",
                        height: "16",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        fill: "none"
                      }, I[9] || (I[9] = [
                        $("polyline", { points: "20 6 9 17 4 12" }, null, -1)
                      ]), 2)) : H("", !0)
                    ], 10, jo))), 128))
                  ], 64))), 128))
                ], 64)) : (y(), x(ie, { key: 0 }, [
                  S(d).length ? (y(!0), x(ie, { key: 0 }, ve(S(d), (_, Y) => (y(), x("div", {
                    key: _.value,
                    class: p([
                      s.value.option,
                      {
                        [s.value.optionSelected]: S(D)(_.value),
                        [s.value.optionActive]: S(C) === Y,
                        [s.value.optionDisabled]: _.disabled
                      }
                    ]),
                    onClick: Re((X) => !_.disabled && S(w)(_), ["stop"]),
                    role: "option",
                    "aria-selected": S(D)(_.value),
                    "aria-disabled": _.disabled
                  }, [
                    xe(U(_.label) + " ", 1),
                    S(D)(_.value) ? (y(), x("svg", {
                      key: 0,
                      class: p(s.value.checkIcon),
                      viewBox: "0 0 24 24",
                      width: "16",
                      height: "16",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      fill: "none"
                    }, I[7] || (I[7] = [
                      $("polyline", { points: "20 6 9 17 4 12" }, null, -1)
                    ]), 2)) : H("", !0)
                  ], 10, Ao))), 128)) : (y(), x("div", {
                    key: 1,
                    class: p(s.value.noMatch)
                  }, U(e.noMatchText), 3))
                ], 64))
              ])
            ], 14, Ro)) : H("", !0)
          ]),
          _: 1
        }),
        e.helpText && !e.errorText ? (y(), x("div", _o, U(e.helpText), 1)) : H("", !0),
        e.errorText ? (y(), x("div", Wo, U(e.errorText), 1)) : H("", !0)
      ], 2);
    };
  }
}), Ho = le(Fo);
function No(l) {
  const a = j(l.modelValue ?? 0), t = j(-1), e = j(!1);
  return ae(
    () => l.modelValue,
    (n) => {
      n !== void 0 && (a.value = n);
    }
  ), {
    currentValue: a,
    hoverValue: t,
    isHovering: e,
    getStarValue: (n) => {
      const u = e.value ? t.value : a.value;
      return l.allowHalf ? u >= n + 1 ? 1 : u >= n + 0.5 ? 0.5 : 0 : u >= n + 1 ? 1 : 0;
    },
    handleClick: (n, u) => {
      var C;
      if (l.disabled || l.readonly) return;
      let f;
      l.allowHalf && u ? f = n + 0.5 : f = n + 1, f === a.value && (f = 0), a.value = f, (C = l.onChange) == null || C.call(l, f);
    },
    handleMouseMove: (n, u) => {
      var f;
      if (!(l.disabled || l.readonly)) {
        if (e.value = !0, l.allowHalf) {
          const k = n.currentTarget.getBoundingClientRect(), c = n.clientX - k.left < k.width / 2;
          t.value = c ? u + 0.5 : u + 1;
        } else
          t.value = u + 1;
        (f = l.onHoverChange) == null || f.call(l, t.value);
      }
    },
    handleMouseLeave: () => {
      var n;
      l.disabled || l.readonly || (e.value = !1, t.value = -1, (n = l.onHoverChange) == null || n.call(l, a.value));
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
}, Jo = ["onClick", "onMousemove", "aria-checked", "aria-disabled", "aria-readonly", "tabindex"], Qo = /* @__PURE__ */ ee({
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
    const t = l, e = a, {
      currentValue: r,
      getStarValue: o,
      handleClick: s,
      handleMouseMove: v,
      handleMouseLeave: n
    } = No({
      modelValue: t.modelValue,
      max: t.max,
      allowHalf: t.allowHalf,
      readonly: t.readonly,
      disabled: t.disabled,
      onChange: (i) => {
        e("update:modelValue", i), e("change", i);
      },
      onHoverChange: (i) => {
        e("hover-change", i);
      }
    }), u = g(() => {
      var i, d;
      return t.unstyled ? ((i = t.pt) == null ? void 0 : i.container) || "" : Go({
        disabled: t.disabled,
        class: (d = t.pt) == null ? void 0 : d.container
      });
    }), f = g(() => {
      var i, d;
      return t.unstyled ? ((i = t.pt) == null ? void 0 : i.item) || "" : Ko({
        size: t.size,
        disabled: t.disabled,
        readonly: t.readonly,
        class: (d = t.pt) == null ? void 0 : d.item
      });
    }), C = g(() => {
      var i, d;
      return t.unstyled ? ((i = t.pt) == null ? void 0 : i.score) || "" : Yo({
        size: t.size,
        class: (d = t.pt) == null ? void 0 : d.score
      });
    }), k = g(() => {
      var i, d;
      return t.unstyled ? ((i = t.pt) == null ? void 0 : i.fullStar) || "absolute inset-0 overflow-hidden w-full" : Uo({
        color: t.color,
        class: (d = t.pt) == null ? void 0 : d.fullStar
      }) + " w-full";
    }), c = g(() => {
      var i, d;
      return t.unstyled ? ((i = t.pt) == null ? void 0 : i.halfStar) || "absolute inset-0 overflow-hidden w-1/2" : qo({
        color: t.color,
        class: (d = t.pt) == null ? void 0 : d.halfStar
      }) + " w-1/2";
    }), b = g(() => {
      var i, d;
      return t.unstyled ? ((i = t.pt) == null ? void 0 : i.voidStar) || "" : Xo({
        class: (d = t.pt) == null ? void 0 : d.voidStar
      });
    }), h = (i) => t.formatTooltip ? t.formatTooltip(i) : i.toString();
    return (i, d) => (y(), x("div", {
      class: p(u.value),
      onMouseleave: d[0] || (d[0] = //@ts-ignore
      (...m) => S(n) && S(n)(...m)),
      role: "radiogroup",
      "aria-label": "评分"
    }, [
      (y(!0), x(ie, null, ve(i.max, (m) => (y(), x("div", {
        key: m,
        class: p(f.value),
        onClick: (w) => S(s)(m - 1, !1),
        onMousemove: (w) => S(v)(w, m - 1),
        role: "radio",
        "aria-checked": S(o)(m - 1) > 0,
        "aria-disabled": i.disabled,
        "aria-readonly": i.readonly,
        tabindex: i.disabled ? -1 : 0
      }, [
        $("span", {
          class: p(b.value)
        }, [
          K(i.$slots, "character", {}, () => [
            xe(U(i.character || "★"), 1)
          ], !0)
        ], 2),
        S(o)(m - 1) === 1 ? (y(), x("span", {
          key: 0,
          class: p(k.value)
        }, [
          K(i.$slots, "character", {}, () => [
            xe(U(i.character || "★"), 1)
          ], !0)
        ], 2)) : S(o)(m - 1) === 0.5 ? (y(), x("span", {
          key: 1,
          class: p(c.value)
        }, [
          K(i.$slots, "character", {}, () => [
            xe(U(i.character || "★"), 1)
          ], !0)
        ], 2)) : H("", !0)
      ], 42, Jo))), 128)),
      i.showScore ? (y(), x("span", {
        key: 0,
        class: p(C.value)
      }, U(h(S(r))), 3)) : H("", !0)
    ], 34));
  }
}), es = /* @__PURE__ */ lt(Qo, [["__scopeId", "data-v-ae42a8b5"]]), ts = le(es), ls = (l, a) => {
  const t = j(l.modelValue || /* @__PURE__ */ new Date()), e = j(t.value.getMonth()), r = j(t.value.getFullYear()), o = g(() => {
    const C = l.locale || "default", k = l.firstDayOfWeek || 0, c = [];
    for (let b = 0; b < 7; b++) {
      const h = (b + k) % 7;
      c.push(
        new Intl.DateTimeFormat(C, { weekday: "short" }).format(
          new Date(2021, 0, h + 3)
          // 2021-01-03 is a Sunday
        )
      );
    }
    return c;
  }), s = g(() => {
    const C = r.value, k = e.value, c = new Date(C, k, 1).getDay(), b = new Date(C, k + 1, 0).getDate(), h = l.firstDayOfWeek || 0, i = [], d = new Date(C, k, 0).getDate(), m = (c - h + 7) % 7;
    for (let M = d - m + 1; M <= d; M++)
      i.push({
        date: new Date(C, k - 1, M),
        day: M,
        isCurrentMonth: !1,
        isToday: !1,
        isSelected: !1,
        isDisabled: !1
      });
    const w = /* @__PURE__ */ new Date();
    for (let M = 1; M <= b; M++) {
      const V = new Date(C, k, M), A = w.getDate() === M && w.getMonth() === k && w.getFullYear() === C, D = l.modelValue && l.modelValue.getDate() === M && l.modelValue.getMonth() === k && l.modelValue.getFullYear() === C, O = l.disabled || l.min && V < l.min || l.max && V > l.max;
      i.push({
        date: V,
        day: M,
        isCurrentMonth: !0,
        isToday: A,
        isSelected: D,
        isDisabled: O
      });
    }
    const z = 42 - i.length;
    for (let M = 1; M <= z; M++)
      i.push({
        date: new Date(C, k + 1, M),
        day: M,
        isCurrentMonth: !1,
        isToday: !1,
        isSelected: !1,
        isDisabled: !1
      });
    return i;
  }), v = g(() => {
    const C = l.locale || "default";
    return new Intl.DateTimeFormat(C, { month: "long" }).format(
      new Date(r.value, e.value)
    );
  }), n = () => {
    e.value === 0 ? (e.value = 11, r.value--) : e.value--;
  }, u = () => {
    e.value === 11 ? (e.value = 0, r.value++) : e.value++;
  }, f = (C) => {
    l.disabled || l.readonly || l.min && C < l.min || l.max && C > l.max || (t.value = C, a("update:modelValue", C), a("change", C));
  };
  return ae(
    () => l.modelValue,
    (C) => {
      C && (t.value = C, e.value = C.getMonth(), r.value = C.getFullYear());
    }
  ), {
    currentDate: t,
    currentMonth: e,
    currentYear: r,
    weekdays: o,
    daysInMonth: s,
    monthName: v,
    prevMonth: n,
    nextMonth: u,
    selectDate: f
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
}), _e = R({
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
}, fs = ["disabled"], ps = ["disabled"], vs = ["onClick", "disabled"], gs = /* @__PURE__ */ ee({
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
    const t = a, e = l, {
      currentYear: r,
      weekdays: o,
      daysInMonth: s,
      monthName: v,
      prevMonth: n,
      nextMonth: u,
      selectDate: f
    } = ls(e, t), C = g(() => {
      var k, c, b, h, i, d, m, w, z, M, V, A, D, O, T, L, P, F, B, E, I, N, _, Y, X, ne;
      return {
        root: e.unstyled ? ((k = e.pt) == null ? void 0 : k.root) || "" : as({ unstyled: e.unstyled, class: (c = e.pt) == null ? void 0 : c.root }),
        header: e.unstyled ? ((b = e.pt) == null ? void 0 : b.header) || "" : rs({ class: (h = e.pt) == null ? void 0 : h.header }),
        title: e.unstyled ? ((i = e.pt) == null ? void 0 : i.title) || "" : os({ class: (d = e.pt) == null ? void 0 : d.title }),
        navigation: e.unstyled ? ((m = e.pt) == null ? void 0 : m.navigation) || "" : ss({ class: (w = e.pt) == null ? void 0 : w.navigation }),
        navButton: e.unstyled ? ((z = e.pt) == null ? void 0 : z.navButton) || "" : ns({ class: (M = e.pt) == null ? void 0 : M.navButton }),
        weekdays: e.unstyled ? ((V = e.pt) == null ? void 0 : V.weekdays) || "" : is({ class: (A = e.pt) == null ? void 0 : A.weekdays }),
        weekday: e.unstyled ? ((D = e.pt) == null ? void 0 : D.weekday) || "" : us({ class: (O = e.pt) == null ? void 0 : O.weekday }),
        days: e.unstyled ? ((T = e.pt) == null ? void 0 : T.days) || "" : ds({ class: (L = e.pt) == null ? void 0 : L.days }),
        day: e.unstyled ? ((P = e.pt) == null ? void 0 : P.day) || "" : _e({ class: (F = e.pt) == null ? void 0 : F.day }),
        today: e.unstyled ? ((B = e.pt) == null ? void 0 : B.today) || "" : _e({ isToday: !0, class: (E = e.pt) == null ? void 0 : E.today }).split(" ").filter((W) => !_e().includes(W)).join(" "),
        selected: e.unstyled ? ((I = e.pt) == null ? void 0 : I.selected) || "" : _e({ isSelected: !0, class: (N = e.pt) == null ? void 0 : N.selected }).split(" ").filter((W) => !_e().includes(W)).join(" "),
        disabled: e.unstyled ? ((_ = e.pt) == null ? void 0 : _.disabled) || "" : _e({ isDisabled: !0, class: (Y = e.pt) == null ? void 0 : Y.disabled }).split(" ").filter((W) => !_e().includes(W)).join(" "),
        adjacent: e.unstyled ? ((X = e.pt) == null ? void 0 : X.adjacent) || "" : _e({ isAdjacent: !0, class: (ne = e.pt) == null ? void 0 : ne.adjacent }).split(" ").filter((W) => !_e().includes(W)).join(" ")
      };
    });
    return (k, c) => (y(), x("div", {
      class: p(C.value.root)
    }, [
      $("div", {
        class: p(C.value.header)
      }, [
        $("div", {
          class: p(C.value.title)
        }, U(S(v)) + " " + U(S(r)), 3),
        $("div", {
          class: p(C.value.navigation)
        }, [
          $("button", {
            class: p(C.value.navButton),
            onClick: c[0] || (c[0] = //@ts-ignore
            (...b) => S(n) && S(n)(...b)),
            disabled: k.disabled || k.readonly
          }, c[2] || (c[2] = [
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
            class: p(C.value.navButton),
            onClick: c[1] || (c[1] = //@ts-ignore
            (...b) => S(u) && S(u)(...b)),
            disabled: k.disabled || k.readonly
          }, c[3] || (c[3] = [
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
        class: p(C.value.weekdays)
      }, [
        (y(!0), x(ie, null, ve(S(o), (b, h) => (y(), x("div", {
          key: h,
          class: p(C.value.weekday)
        }, U(b), 3))), 128))
      ], 2),
      $("div", {
        class: p(C.value.days)
      }, [
        (y(!0), x(ie, null, ve(S(s), (b, h) => (y(), x("button", {
          key: h,
          class: p([
            C.value.day,
            b.isToday ? C.value.today : "",
            b.isSelected ? C.value.selected : "",
            b.isDisabled ? C.value.disabled : "",
            b.isCurrentMonth ? "" : C.value.adjacent
          ]),
          onClick: (i) => S(f)(b.date),
          disabled: b.isDisabled || k.disabled || k.readonly
        }, U(b.day), 11, vs))), 128))
      ], 2)
    ], 2));
  }
}), Lt = le(gs), bs = (l, a) => {
  const t = j(!1), e = j(null), r = j(null), o = j(null), s = j(null), v = j(null), n = j(null), u = g(() => {
    let B = 0, E = 0, I = 0;
    if (l.modelValue) {
      if (l.modelValue instanceof Date)
        B = l.modelValue.getHours(), E = l.modelValue.getMinutes(), I = l.modelValue.getSeconds();
      else if (typeof l.modelValue == "string") {
        const N = l.modelValue.split(":");
        B = parseInt(N[0]) || 0, E = parseInt(N[1]) || 0, I = N[2] ? parseInt(N[2]) : 0;
      }
    }
    return { hours: B, minutes: E, seconds: I };
  }), f = j(u.value.hours), C = j(u.value.minutes), k = j(u.value.seconds), c = j(u.value.hours >= 12 ? "pm" : "am"), b = g(() => {
    const B = [], E = l.hourStep || 1, I = l.format === "12h", N = I ? 1 : 0, _ = I ? 12 : 23;
    for (let Y = N; Y <= _; Y += E)
      B.push(Y);
    return B;
  }), h = g(() => {
    const B = [], E = l.minuteStep || 1;
    for (let I = 0; I <= 59; I += E)
      B.push(I);
    return B;
  }), i = g(() => {
    const B = [], E = l.secondStep || 1;
    for (let I = 0; I <= 59; I += E)
      B.push(I);
    return B;
  }), d = g(() => {
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
  }), m = () => {
    l.disabled || l.readonly || (t.value = !t.value, t.value && (f.value = u.value.hours, C.value = u.value.minutes, k.value = u.value.seconds, c.value = u.value.hours >= 12 ? "pm" : "am", setTimeout(() => {
      z();
    }, 50)));
  }, w = () => {
    t.value = !1;
  }, z = () => {
    const B = (E, I) => {
      if (!E) return;
      const _ = E.querySelectorAll("div")[I];
      _ && (E.scrollTop = _.offsetTop - E.offsetHeight / 2 + _.offsetHeight / 2);
    };
    if (l.format === "12h") {
      const E = f.value > 12 ? f.value - 12 : f.value === 0 ? 12 : f.value;
      B(o.value, b.value.indexOf(E));
    } else
      B(o.value, b.value.indexOf(f.value));
    B(
      s.value,
      h.value.indexOf(C.value)
    ), l.showSeconds && v.value && B(
      v.value,
      i.value.indexOf(k.value)
    ), l.format === "12h" && n.value && B(n.value, c.value === "am" ? 0 : 1);
  }, M = () => {
    let B = f.value;
    l.format === "12h" && (c.value === "pm" && B < 12 ? B += 12 : c.value === "am" && B === 12 && (B = 0));
    let E;
    if (l.modelValue instanceof Date) {
      const I = new Date(l.modelValue);
      I.setHours(B), I.setMinutes(C.value), I.setSeconds(l.showSeconds ? k.value : 0), E = I;
    } else {
      const I = B.toString().padStart(2, "0"), N = C.value.toString().padStart(2, "0");
      if (l.showSeconds) {
        const _ = k.value.toString().padStart(2, "0");
        E = `${I}:${N}:${_}`;
      } else
        E = `${I}:${N}`;
    }
    a("update:modelValue", E), a("change", E);
  }, V = (B) => {
    f.value = B, M();
  }, A = (B) => {
    C.value = B, M();
  }, D = (B) => {
    k.value = B, M();
  }, O = (B) => {
    c.value = B, M();
  }, T = (B) => {
    B.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, L = (B) => {
    a("focus", B);
  }, P = (B) => {
    a("blur", B);
  }, F = (B) => {
    t.value && e.value && r.value && !e.value.contains(B.target) && !r.value.contains(B.target) && w();
  };
  return $e(() => {
    document.addEventListener("mousedown", F);
  }), Pe(() => {
    document.removeEventListener("mousedown", F);
  }), ae(
    () => l.modelValue,
    (B) => {
      B ? (f.value = u.value.hours, C.value = u.value.minutes, k.value = u.value.seconds, c.value = u.value.hours >= 12 ? "pm" : "am") : w();
    }
  ), {
    isOpen: t,
    inputRef: e,
    dropdownRef: r,
    hourRef: o,
    minuteRef: s,
    secondRef: v,
    ampmRef: n,
    formattedValue: d,
    hourList: b,
    minuteList: h,
    secondList: i,
    selectedHour: f,
    selectedMinute: C,
    selectedSecond: k,
    selectedAmPm: c,
    toggleDropdown: m,
    closeDropdown: w,
    selectHour: V,
    selectMinute: A,
    selectSecond: D,
    selectAmPm: O,
    handleClear: T,
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
}, zs = ["value", "placeholder", "disabled"], $s = ["onClick"], Bs = ["onClick"], Vs = ["onClick"], Is = /* @__PURE__ */ ee({
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
    const t = a, e = l, {
      isOpen: r,
      inputRef: o,
      dropdownRef: s,
      hourRef: v,
      minuteRef: n,
      secondRef: u,
      ampmRef: f,
      formattedValue: C,
      hourList: k,
      minuteList: c,
      secondList: b,
      selectedHour: h,
      selectedMinute: i,
      selectedSecond: d,
      selectedAmPm: m,
      toggleDropdown: w,
      selectHour: z,
      selectMinute: M,
      selectSecond: V,
      selectAmPm: A,
      handleClear: D,
      handleFocus: O,
      handleBlur: T
    } = bs(e, t), L = g(() => {
      var P, F, B, E, I, N, _, Y, X, ne, W, Z, re, se, pe, fe, ye, ke;
      return {
        root: e.unstyled ? ((P = e.pt) == null ? void 0 : P.root) || "" : ms({ unstyled: e.unstyled, class: (F = e.pt) == null ? void 0 : F.root }),
        inputWrapper: e.unstyled ? ((B = e.pt) == null ? void 0 : B.inputWrapper) || "" : ys({ class: (E = e.pt) == null ? void 0 : E.inputWrapper }),
        input: e.unstyled ? ((I = e.pt) == null ? void 0 : I.input) || "" : hs({ class: (N = e.pt) == null ? void 0 : N.input }),
        clearButton: e.unstyled ? ((_ = e.pt) == null ? void 0 : _.clearButton) || "" : ws({ class: (Y = e.pt) == null ? void 0 : Y.clearButton }),
        dropdown: e.unstyled ? ((X = e.pt) == null ? void 0 : X.dropdown) || "" : xs({ class: (ne = e.pt) == null ? void 0 : ne.dropdown }),
        timeSelector: e.unstyled ? ((W = e.pt) == null ? void 0 : W.timeSelector) || "" : ks({ class: (Z = e.pt) == null ? void 0 : Z.timeSelector }),
        column: e.unstyled ? ((re = e.pt) == null ? void 0 : re.column) || "" : Cs({ class: (se = e.pt) == null ? void 0 : se.column }),
        item: e.unstyled ? ((pe = e.pt) == null ? void 0 : pe.item) || "" : kt({ class: (fe = e.pt) == null ? void 0 : fe.item }),
        itemSelected: e.unstyled ? ((ye = e.pt) == null ? void 0 : ye.itemSelected) || "" : kt({ selected: !0, class: (ke = e.pt) == null ? void 0 : ke.itemSelected }).split(" ").filter((we) => !kt().includes(we)).join(" ")
      };
    });
    return (P, F) => (y(), x("div", {
      class: p(L.value.root)
    }, [
      $("div", {
        class: p(L.value.inputWrapper),
        onClick: F[3] || (F[3] = //@ts-ignore
        (...B) => S(w) && S(w)(...B))
      }, [
        $("input", {
          ref_key: "inputRef",
          ref: o,
          type: "text",
          class: p(L.value.input),
          value: S(C),
          placeholder: P.placeholder,
          disabled: P.disabled,
          readonly: !0,
          onFocus: F[0] || (F[0] = //@ts-ignore
          (...B) => S(O) && S(O)(...B)),
          onBlur: F[1] || (F[1] = //@ts-ignore
          (...B) => S(T) && S(T)(...B))
        }, null, 42, zs),
        P.clearable && P.modelValue && !P.disabled && !P.readonly ? (y(), x("span", {
          key: 0,
          class: p(L.value.clearButton),
          onClick: F[2] || (F[2] = //@ts-ignore
          (...B) => S(D) && S(D)(...B))
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
        ]), 2)) : H("", !0)
      ], 2),
      S(r) ? (y(), x("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: s,
        class: p(L.value.dropdown)
      }, [
        $("div", {
          class: p(L.value.timeSelector)
        }, [
          $("div", {
            ref_key: "hourRef",
            ref: v,
            class: p(L.value.column)
          }, [
            (y(!0), x(ie, null, ve(S(k), (B) => (y(), x("div", {
              key: `hour-${B}`,
              class: p([
                L.value.item,
                (P.format === "12h" ? (S(h) > 12 ? S(h) - 12 : S(h) === 0 ? 12 : S(h)) === B : S(h) === B) ? L.value.itemSelected : ""
              ]),
              onClick: (E) => S(z)(B)
            }, U(B.toString().padStart(2, "0")), 11, $s))), 128))
          ], 2),
          $("div", {
            ref_key: "minuteRef",
            ref: n,
            class: p(L.value.column)
          }, [
            (y(!0), x(ie, null, ve(S(c), (B) => (y(), x("div", {
              key: `minute-${B}`,
              class: p([
                L.value.item,
                S(i) === B ? L.value.itemSelected : ""
              ]),
              onClick: (E) => S(M)(B)
            }, U(B.toString().padStart(2, "0")), 11, Bs))), 128))
          ], 2),
          P.showSeconds ? (y(), x("div", {
            key: 0,
            ref_key: "secondRef",
            ref: u,
            class: p(L.value.column)
          }, [
            (y(!0), x(ie, null, ve(S(b), (B) => (y(), x("div", {
              key: `second-${B}`,
              class: p([
                L.value.item,
                S(d) === B ? L.value.itemSelected : ""
              ]),
              onClick: (E) => S(V)(B)
            }, U(B.toString().padStart(2, "0")), 11, Vs))), 128))
          ], 2)) : H("", !0),
          P.format === "12h" ? (y(), x("div", {
            key: 1,
            ref_key: "ampmRef",
            ref: f,
            class: p(L.value.column)
          }, [
            $("div", {
              class: p([
                L.value.item,
                S(m) === "am" ? L.value.itemSelected : ""
              ]),
              onClick: F[4] || (F[4] = (B) => S(A)("am"))
            }, " AM ", 2),
            $("div", {
              class: p([
                L.value.item,
                S(m) === "pm" ? L.value.itemSelected : ""
              ]),
              onClick: F[5] || (F[5] = (B) => S(A)("pm"))
            }, " PM ", 2)
          ], 2)) : H("", !0)
        ], 2)
      ], 2)) : H("", !0)
    ], 2));
  }
}), nl = le(Is), Ms = (l, a) => {
  const t = j(!1), e = j(null), r = j(null), o = g(() => {
    if (!l.modelValue) return "";
    try {
      const c = l.locale || "default", b = {};
      return l.format ? (l.format.includes("yyyy") && (b.year = "numeric"), l.format.includes("MM") ? b.month = "2-digit" : l.format.includes("M") && (b.month = "numeric"), l.format.includes("dd") ? b.day = "2-digit" : l.format.includes("d") && (b.day = "numeric"), Object.keys(b).length === 0 && (b.year = "numeric", b.month = "2-digit", b.day = "2-digit")) : (b.year = "numeric", b.month = "2-digit", b.day = "2-digit"), new Intl.DateTimeFormat(c, b).format(l.modelValue);
    } catch (c) {
      return console.error("Date formatting error:", c), l.modelValue.toLocaleDateString();
    }
  }), s = () => {
    l.disabled || l.readonly || (t.value = !t.value);
  }, v = () => {
    t.value = !1;
  }, n = (c) => {
    c === null ? (a("update:modelValue", null), a("change", null)) : (a("update:modelValue", c), a("change", c)), v();
  }, u = (c) => {
    c.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, f = (c) => {
    a("focus", c);
  }, C = (c) => {
    a("blur", c);
  }, k = (c) => {
    t.value && e.value && r.value && !e.value.contains(c.target) && !r.value.contains(c.target) && v();
  };
  return $e(() => {
    document.addEventListener("mousedown", k);
  }), Pe(() => {
    document.removeEventListener("mousedown", k);
  }), ae(
    () => l.modelValue,
    (c) => {
      c || v();
    }
  ), {
    isOpen: t,
    inputRef: e,
    dropdownRef: r,
    formattedValue: o,
    toggleDropdown: s,
    closeDropdown: v,
    handleDateChange: n,
    handleClear: u,
    handleFocus: f,
    handleBlur: C
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
}, Os = ["value", "placeholder", "disabled"], Ps = /* @__PURE__ */ ee({
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
    const t = a, e = l, {
      isOpen: r,
      inputRef: o,
      dropdownRef: s,
      formattedValue: v,
      toggleDropdown: n,
      handleDateChange: u,
      handleClear: f,
      handleFocus: C,
      handleBlur: k
    } = Ms(e, t), c = g(() => {
      var b, h, i, d, m, w, z, M, V, A;
      return {
        root: e.unstyled ? ((b = e.pt) == null ? void 0 : b.root) || "" : Ds({ unstyled: e.unstyled, class: (h = e.pt) == null ? void 0 : h.root }),
        inputWrapper: e.unstyled ? ((i = e.pt) == null ? void 0 : i.inputWrapper) || "" : Ts({ class: (d = e.pt) == null ? void 0 : d.inputWrapper }),
        input: e.unstyled ? ((m = e.pt) == null ? void 0 : m.input) || "" : Rs({ class: (w = e.pt) == null ? void 0 : w.input }),
        clearButton: e.unstyled ? ((z = e.pt) == null ? void 0 : z.clearButton) || "" : Es({ class: (M = e.pt) == null ? void 0 : M.clearButton }),
        dropdown: e.unstyled ? ((V = e.pt) == null ? void 0 : V.dropdown) || "" : Ls({ class: (A = e.pt) == null ? void 0 : A.dropdown })
      };
    });
    return (b, h) => {
      var i;
      return y(), x("div", {
        class: p(c.value.root)
      }, [
        $("div", {
          class: p(c.value.inputWrapper),
          onClick: h[3] || (h[3] = //@ts-ignore
          (...d) => S(n) && S(n)(...d))
        }, [
          $("input", {
            ref_key: "inputRef",
            ref: o,
            type: "text",
            class: p(c.value.input),
            value: S(v),
            placeholder: b.placeholder,
            disabled: b.disabled,
            readonly: !0,
            onFocus: h[0] || (h[0] = //@ts-ignore
            (...d) => S(C) && S(C)(...d)),
            onBlur: h[1] || (h[1] = //@ts-ignore
            (...d) => S(k) && S(k)(...d))
          }, null, 42, Os),
          b.clearable && b.modelValue && !b.disabled && !b.readonly ? (y(), x("span", {
            key: 0,
            class: p(c.value.clearButton),
            onClick: h[2] || (h[2] = //@ts-ignore
            (...d) => S(f) && S(f)(...d))
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
          ]), 2)) : H("", !0)
        ], 2),
        S(r) ? (y(), x("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: s,
          class: p(c.value.dropdown)
        }, [
          Le(S(Lt), {
            modelValue: b.modelValue,
            min: b.min,
            max: b.max,
            disabled: b.disabled,
            readonly: b.readonly,
            firstDayOfWeek: b.firstDayOfWeek,
            locale: b.locale,
            pt: (i = b.pt) == null ? void 0 : i.calendar,
            "onUpdate:modelValue": S(u)
          }, null, 8, ["modelValue", "min", "max", "disabled", "readonly", "firstDayOfWeek", "locale", "pt", "onUpdate:modelValue"])
        ], 2)) : H("", !0)
      ], 2);
    };
  }
}), js = le(Ps), _s = (l, a) => {
  const t = j(!1), e = j("date"), r = j(null), o = j(null), s = j(l.modelValue || /* @__PURE__ */ new Date()), v = g(() => {
    if (!l.modelValue) return "";
    try {
      const d = l.locale || "default", m = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "2-digit"
      };
      return l.showSeconds && (m.second = "2-digit"), l.timeFormat === "12h" ? m.hour12 = !0 : m.hour12 = !1, new Intl.DateTimeFormat(d, m).format(l.modelValue);
    } catch (d) {
      return console.error("DateTime formatting error:", d), l.modelValue.toLocaleString();
    }
  }), n = () => {
    l.disabled || l.readonly || (t.value = !t.value, t.value && (s.value = l.modelValue || /* @__PURE__ */ new Date()));
  }, u = () => {
    t.value = !1;
  }, f = (d) => {
    e.value = d;
  }, C = (d) => {
    if (!d) return;
    const m = new Date(s.value);
    m.setFullYear(d.getFullYear()), m.setMonth(d.getMonth()), m.setDate(d.getDate()), s.value = m, a("update:modelValue", m), a("change", m), f("time");
  }, k = (d) => {
    if (!d) return;
    const m = new Date(s.value);
    if (d instanceof Date)
      m.setHours(d.getHours()), m.setMinutes(d.getMinutes()), m.setSeconds(d.getSeconds());
    else if (typeof d == "string") {
      const w = d.split(":");
      w.length >= 2 && (m.setHours(parseInt(w[0]) || 0), m.setMinutes(parseInt(w[1]) || 0), w.length >= 3 && m.setSeconds(parseInt(w[2]) || 0));
    }
    s.value = m, a("update:modelValue", m), a("change", m), u();
  }, c = (d) => {
    d.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, b = (d) => {
    a("focus", d);
  }, h = (d) => {
    a("blur", d);
  }, i = (d) => {
    t.value && r.value && o.value && !r.value.contains(d.target) && !o.value.contains(d.target) && u();
  };
  return $e(() => {
    document.addEventListener("mousedown", i);
  }), Pe(() => {
    document.removeEventListener("mousedown", i);
  }), ae(
    () => l.modelValue,
    (d) => {
      d ? s.value = d : u();
    }
  ), {
    isOpen: t,
    activeTab: e,
    inputRef: r,
    dropdownRef: o,
    currentDateTime: s,
    formattedValue: v,
    toggleDropdown: n,
    closeDropdown: u,
    switchTab: f,
    handleDateChange: C,
    handleTimeChange: k,
    handleClear: c,
    handleFocus: b,
    handleBlur: h
  };
}, Ws = R({
  base: "relative w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: !1
  }
}), Fs = R({
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
}, Xs = ["value", "placeholder", "disabled"], qs = /* @__PURE__ */ ee({
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
    const t = a, e = l, {
      isOpen: r,
      activeTab: o,
      inputRef: s,
      dropdownRef: v,
      currentDateTime: n,
      formattedValue: u,
      toggleDropdown: f,
      switchTab: C,
      handleDateChange: k,
      handleTimeChange: c,
      handleClear: b,
      handleFocus: h,
      handleBlur: i
    } = _s(e, t), d = g(() => {
      var m, w, z, M, V, A, D, O, T, L, P, F, B, E, I, N, _, Y;
      return {
        root: e.unstyled ? ((m = e.pt) == null ? void 0 : m.root) || "" : Ws({
          unstyled: e.unstyled,
          class: (w = e.pt) == null ? void 0 : w.root
        }),
        inputWrapper: e.unstyled ? ((z = e.pt) == null ? void 0 : z.inputWrapper) || "" : Fs({ class: (M = e.pt) == null ? void 0 : M.inputWrapper }),
        input: e.unstyled ? ((V = e.pt) == null ? void 0 : V.input) || "" : Hs({ class: (A = e.pt) == null ? void 0 : A.input }),
        clearButton: e.unstyled ? ((D = e.pt) == null ? void 0 : D.clearButton) || "" : Ns({ class: (O = e.pt) == null ? void 0 : O.clearButton }),
        dropdown: e.unstyled ? ((T = e.pt) == null ? void 0 : T.dropdown) || "" : Gs({ class: (L = e.pt) == null ? void 0 : L.dropdown }),
        tabs: e.unstyled ? ((P = e.pt) == null ? void 0 : P.tabs) || "" : Ks({ class: (F = e.pt) == null ? void 0 : F.tabs }),
        tab: e.unstyled ? ((B = e.pt) == null ? void 0 : B.tab) || "" : Ct({ class: (E = e.pt) == null ? void 0 : E.tab }),
        activeTab: e.unstyled ? ((I = e.pt) == null ? void 0 : I.activeTab) || "" : Ct({ active: !0, class: (N = e.pt) == null ? void 0 : N.activeTab }).split(" ").filter((X) => !Ct().includes(X)).join(" "),
        tabContent: e.unstyled ? ((_ = e.pt) == null ? void 0 : _.tabContent) || "" : Ys({ class: (Y = e.pt) == null ? void 0 : Y.tabContent })
      };
    });
    return (m, w) => {
      var z, M, V, A, D, O, T, L, P, F;
      return y(), x("div", {
        class: p(d.value.root)
      }, [
        $("div", {
          class: p(d.value.inputWrapper),
          onClick: w[3] || (w[3] = //@ts-ignore
          (...B) => S(f) && S(f)(...B))
        }, [
          $("input", {
            ref_key: "inputRef",
            ref: s,
            type: "text",
            class: p(d.value.input),
            value: S(u),
            placeholder: m.placeholder,
            disabled: m.disabled,
            readonly: !0,
            onFocus: w[0] || (w[0] = //@ts-ignore
            (...B) => S(h) && S(h)(...B)),
            onBlur: w[1] || (w[1] = //@ts-ignore
            (...B) => S(i) && S(i)(...B))
          }, null, 42, Xs),
          m.clearable && m.modelValue && !m.disabled && !m.readonly ? (y(), x("span", {
            key: 0,
            class: p(d.value.clearButton),
            onClick: w[2] || (w[2] = //@ts-ignore
            (...B) => S(b) && S(b)(...B))
          }, w[6] || (w[6] = [
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
          ]), 2)) : H("", !0)
        ], 2),
        S(r) ? (y(), x("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: v,
          class: p(d.value.dropdown)
        }, [
          $("div", {
            class: p(d.value.tabs)
          }, [
            $("div", {
              class: p([d.value.tab, S(o) === "date" ? d.value.activeTab : ""]),
              onClick: w[4] || (w[4] = (B) => S(C)("date"))
            }, " 日期 ", 2),
            $("div", {
              class: p([d.value.tab, S(o) === "time" ? d.value.activeTab : ""]),
              onClick: w[5] || (w[5] = (B) => S(C)("time"))
            }, " 时间 ", 2)
          ], 2),
          $("div", {
            class: p(d.value.tabContent)
          }, [
            Xe($("div", null, [
              Le(S(Lt), {
                modelValue: S(n),
                min: m.min,
                max: m.max,
                disabled: m.disabled,
                readonly: m.readonly,
                firstDayOfWeek: m.firstDayOfWeek,
                locale: m.locale,
                pt: (M = (z = m.pt) == null ? void 0 : z.datePicker) == null ? void 0 : M.calendar,
                "onUpdate:modelValue": S(k)
              }, null, 8, ["modelValue", "min", "max", "disabled", "readonly", "firstDayOfWeek", "locale", "pt", "onUpdate:modelValue"])
            ], 512), [
              [zt, S(o) === "date"]
            ]),
            Xe($("div", null, [
              Le(S(nl), {
                modelValue: S(n),
                disabled: m.disabled,
                readonly: m.readonly,
                format: m.timeFormat,
                hourStep: m.hourStep,
                minuteStep: m.minuteStep,
                secondStep: m.secondStep,
                showSeconds: m.showSeconds,
                pt: {
                  timeSelector: (A = (V = m.pt) == null ? void 0 : V.timePicker) == null ? void 0 : A.timeSelector,
                  column: (O = (D = m.pt) == null ? void 0 : D.timePicker) == null ? void 0 : O.column,
                  item: (L = (T = m.pt) == null ? void 0 : T.timePicker) == null ? void 0 : L.item,
                  itemSelected: (F = (P = m.pt) == null ? void 0 : P.timePicker) == null ? void 0 : F.itemSelected
                },
                "onUpdate:modelValue": S(c)
              }, null, 8, ["modelValue", "disabled", "readonly", "format", "hourStep", "minuteStep", "secondStep", "showSeconds", "pt", "onUpdate:modelValue"])
            ], 512), [
              [zt, S(o) === "time"]
            ])
          ], 2)
        ], 2)) : H("", !0)
      ], 2);
    };
  }
}), Zs = le(qs), Js = (l, a) => {
  const t = j(!1), e = j(null), r = j(null), o = g(() => {
    if (l.options && l.options.length > 0)
      return l.options;
    const c = [], b = l.start || "00:00", h = l.end || "23:59", i = l.step || 30, [d, m] = b.split(":").map(Number), [w, z] = h.split(":").map(Number), M = d * 60 + m, V = w * 60 + z;
    for (let A = M; A <= V; A += i) {
      const D = Math.floor(A / 60), O = A % 60;
      if (l.format === "12h") {
        const T = D >= 12 ? "PM" : "AM", L = D === 0 ? 12 : D > 12 ? D - 12 : D;
        c.push(
          `${L.toString().padStart(2, "0")}:${O.toString().padStart(2, "0")} ${T}`
        );
      } else
        c.push(
          `${D.toString().padStart(2, "0")}:${O.toString().padStart(2, "0")}`
        );
    }
    return c;
  }), s = () => {
    l.disabled || l.readonly || (t.value = !t.value);
  }, v = () => {
    t.value = !1;
  }, n = (c) => {
    a("update:modelValue", c), a("change", c), v();
  }, u = (c) => {
    c.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, f = (c) => {
    a("focus", c);
  }, C = (c) => {
    a("blur", c);
  }, k = (c) => {
    t.value && e.value && r.value && !e.value.contains(c.target) && !r.value.contains(c.target) && v();
  };
  return $e(() => {
    document.addEventListener("mousedown", k);
  }), Pe(() => {
    document.removeEventListener("mousedown", k);
  }), ae(
    () => l.modelValue,
    (c) => {
      c || v();
    }
  ), {
    isOpen: t,
    inputRef: e,
    dropdownRef: r,
    timeOptions: o,
    toggleDropdown: s,
    selectOption: n,
    handleClear: u,
    handleFocus: f,
    handleBlur: C
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
}), st = R({
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
}, sn = ["value", "placeholder", "disabled"], nn = ["onClick"], un = /* @__PURE__ */ ee({
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
    const t = a, e = l, {
      isOpen: r,
      inputRef: o,
      dropdownRef: s,
      timeOptions: v,
      toggleDropdown: n,
      selectOption: u,
      handleClear: f,
      handleFocus: C,
      handleBlur: k
    } = Js(e, t), c = g(() => {
      var b, h, i, d, m, w, z, M, V, A, D, O, T, L, P, F;
      return {
        root: e.unstyled ? ((b = e.pt) == null ? void 0 : b.root) || "" : Qs({ unstyled: e.unstyled, class: (h = e.pt) == null ? void 0 : h.root }),
        inputWrapper: e.unstyled ? ((i = e.pt) == null ? void 0 : i.inputWrapper) || "" : en({ class: (d = e.pt) == null ? void 0 : d.inputWrapper }),
        input: e.unstyled ? ((m = e.pt) == null ? void 0 : m.input) || "" : tn({ class: (w = e.pt) == null ? void 0 : w.input }),
        clearButton: e.unstyled ? ((z = e.pt) == null ? void 0 : z.clearButton) || "" : ln({ class: (M = e.pt) == null ? void 0 : M.clearButton }),
        dropdown: e.unstyled ? ((V = e.pt) == null ? void 0 : V.dropdown) || "" : an({ class: (A = e.pt) == null ? void 0 : A.dropdown }),
        optionsList: e.unstyled ? ((D = e.pt) == null ? void 0 : D.optionsList) || "" : rn({ class: (O = e.pt) == null ? void 0 : O.optionsList }),
        option: e.unstyled ? ((T = e.pt) == null ? void 0 : T.option) || "" : st({ class: (L = e.pt) == null ? void 0 : L.option }),
        optionSelected: e.unstyled ? ((P = e.pt) == null ? void 0 : P.optionSelected) || "" : st({
          selected: !0,
          class: (F = e.pt) == null ? void 0 : F.optionSelected
        }).split(" ").filter((B) => !st().includes(B)).join(" "),
        optionDisabled: e.unstyled ? "" : st({ disabled: !0 }).split(" ").filter((B) => !st().includes(B)).join(" ")
      };
    });
    return (b, h) => (y(), x("div", {
      class: p(c.value.root)
    }, [
      $("div", {
        class: p(c.value.inputWrapper),
        onClick: h[3] || (h[3] = //@ts-ignore
        (...i) => S(n) && S(n)(...i))
      }, [
        $("input", {
          ref_key: "inputRef",
          ref: o,
          type: "text",
          class: p(c.value.input),
          value: b.modelValue,
          placeholder: b.placeholder,
          disabled: b.disabled,
          readonly: !0,
          onFocus: h[0] || (h[0] = //@ts-ignore
          (...i) => S(C) && S(C)(...i)),
          onBlur: h[1] || (h[1] = //@ts-ignore
          (...i) => S(k) && S(k)(...i))
        }, null, 42, sn),
        b.clearable && b.modelValue && !b.disabled && !b.readonly ? (y(), x("span", {
          key: 0,
          class: p(c.value.clearButton),
          onClick: h[2] || (h[2] = //@ts-ignore
          (...i) => S(f) && S(f)(...i))
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
        ]), 2)) : H("", !0)
      ], 2),
      S(r) ? (y(), x("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: s,
        class: p(c.value.dropdown)
      }, [
        $("div", {
          class: p(c.value.optionsList)
        }, [
          (y(!0), x(ie, null, ve(S(v), (i, d) => (y(), x("div", {
            key: d,
            class: p([
              c.value.option,
              b.modelValue === i ? c.value.optionSelected : "",
              b.disabled ? c.value.optionDisabled : ""
            ]),
            onClick: (m) => !b.disabled && S(u)(i)
          }, U(i), 11, nn))), 128)),
          S(v).length === 0 ? (y(), x("div", {
            key: 0,
            class: p(c.value.option),
            style: { cursor: "default" }
          }, " 无可用选项 ", 2)) : H("", !0)
        ], 2)
      ], 2)) : H("", !0)
    ], 2));
  }
}), dn = le(un), cn = R({
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
}), vn = R({
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
}), gn = { key: 1 }, bn = /* @__PURE__ */ ee({
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
    const a = l, t = g(() => {
      var o, s;
      return a.unstyled ? ((o = a.pt) == null ? void 0 : o.root) || "" : cn({
        animation: a.animation,
        rounded: a.rounded,
        class: (s = a.pt) == null ? void 0 : s.root
      });
    }), e = g(() => {
      var o;
      return a.unstyled && ((o = a.pt) == null ? void 0 : o.content) || "";
    }), r = g(() => {
      const o = {};
      return a.width && (o.width = typeof a.width == "number" ? `${a.width}px` : a.width), a.height && (o.height = typeof a.height == "number" ? `${a.height}px` : a.height), o;
    });
    return (o, s) => o.loading ? (y(), x("div", {
      key: 0,
      class: p(t.value),
      style: ue(r.value)
    }, [
      $("div", {
        class: p(e.value)
      }, [
        K(o.$slots, "skeleton")
      ], 2)
    ], 6)) : (y(), x("div", gn, [
      K(o.$slots, "default")
    ]));
  }
}), mn = /* @__PURE__ */ ee({
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
    const a = l, t = g(() => {
      var s, v;
      return a.unstyled ? ((s = a.pt) == null ? void 0 : s.root) || "" : fn({
        rounded: a.rounded,
        class: (v = a.pt) == null ? void 0 : v.root
      });
    }), e = () => {
      var s, v;
      return a.unstyled ? ((s = a.pt) == null ? void 0 : s.line) || "" : pn({
        animation: a.animation,
        rounded: a.rounded,
        class: (v = a.pt) == null ? void 0 : v.line
      });
    }, r = (s) => typeof a.widths == "string" || typeof a.widths == "number" ? a.widths : Array.isArray(a.widths) && a.widths.length > 0 ? a.widths[s % a.widths.length] : "100%", o = (s) => {
      const v = r(s), n = {
        width: typeof v == "number" ? `${v}px` : v
      };
      return a.lineHeight && (n.height = typeof a.lineHeight == "number" ? `${a.lineHeight}px` : a.lineHeight), n;
    };
    return (s, v) => (y(), x("div", {
      class: p(t.value)
    }, [
      (y(!0), x(ie, null, ve(s.lines, (n) => (y(), x("div", {
        key: n,
        class: p(e()),
        style: ue(o(n - 1))
      }, null, 6))), 128))
    ], 2));
  }
}), yn = /* @__PURE__ */ ee({
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
    const a = l, t = g(() => {
      var e, r;
      return a.unstyled ? ((e = a.pt) == null ? void 0 : e.root) || "" : vn({
        size: a.size,
        circle: a.circle,
        animation: a.animation,
        class: (r = a.pt) == null ? void 0 : r.root
      });
    });
    return (e, r) => (y(), x("div", {
      class: p(t.value)
    }, null, 2));
  }
}), hn = le(bn), wn = le(mn), xn = le(yn);
function kn(l = {}) {
  const a = j(l.modelValue || ""), t = (o) => a.value === o, e = (o) => {
    var s;
    a.value = o, (s = l.onChange) == null || s.call(l, o);
  };
  return ae(
    () => l.modelValue,
    (o) => {
      o !== void 0 && o !== a.value && (a.value = o);
    }
  ), {
    activeTab: a,
    isActive: t,
    activate: e,
    onKeydown: (o, s) => {
      const v = s.indexOf(a.value);
      if (v === -1 && s.length > 0) {
        e(s[0]);
        return;
      }
      if (o.key === "ArrowRight" || o.key === "ArrowDown") {
        const n = (v + 1) % s.length;
        e(s[n]), o.preventDefault();
      } else if (o.key === "ArrowLeft" || o.key === "ArrowUp") {
        const n = (v - 1 + s.length) % s.length;
        e(s[n]), o.preventDefault();
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
}, Vn = ["aria-disabled"], In = ["aria-selected", "aria-disabled", "tabindex", "onClick"], Mn = /* @__PURE__ */ ee({
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
    const t = l, e = a, r = Ze(), o = g(() => {
      if (!r.default) return [];
      const d = r.default({}) || [], m = /* @__PURE__ */ new Set(), w = [];
      return d.filter((z) => z.type && (z.type.name === "TabItem" || typeof z.type == "object" && z.type.__name === "TabItem")).forEach((z) => {
        const M = z.props || {}, V = M.name;
        V && !m.has(V) ? (m.add(V), w.push({
          name: V,
          title: M.title || M.label || "",
          disabled: M.disabled || !1
        })) : console.warn(
          V ? `[Tabs] 发现重复的TabItem name: ${V}，只有第一个会被显示` : "[Tabs] TabItem必须提供name属性"
        );
      }), w;
    }), s = g(
      () => o.value.map((d) => d.name)
    ), { activeTab: v, isActive: n, activate: u, onKeydown: f } = kn({
      modelValue: t.modelValue,
      onChange: (d) => {
        e("update:modelValue", d), e("change", d);
      }
    });
    ae(
      o,
      (d) => {
        d.length > 0 && !d.some((m) => n(m.name)) && u(d[0].name);
      },
      { immediate: !0 }
    );
    const C = (d, m) => {
      t.disabled || m || u(d);
    }, k = (d) => {
      f(d, s.value);
    }, c = g(() => {
      var d, m;
      return t.unstyled ? ((d = t.pt) == null ? void 0 : d.container) || "" : Cn({
        placement: t.placement,
        fullWidth: t.fullWidth,
        disabled: t.disabled,
        class: (m = t.pt) == null ? void 0 : m.container
      });
    }), b = g(() => {
      var d, m;
      return t.unstyled ? ((d = t.pt) == null ? void 0 : d.nav) || "" : Sn({
        variant: t.variant,
        placement: t.placement,
        fullWidth: t.fullWidth,
        size: t.size,
        class: (m = t.pt) == null ? void 0 : m.nav
      });
    }), h = (d, m) => {
      var w, z;
      return t.unstyled ? ((w = t.pt) == null ? void 0 : w.navItem) || "" : zn({
        variant: t.variant,
        active: n(d),
        disabled: t.disabled || m,
        size: t.size,
        fullWidth: t.fullWidth,
        class: (z = t.pt) == null ? void 0 : z.navItem
      });
    }, i = g(() => {
      var d, m;
      return t.unstyled ? ((d = t.pt) == null ? void 0 : d.content) || "" : $n({
        placement: t.placement,
        class: (m = t.pt) == null ? void 0 : m.content
      });
    });
    return Oe("activeTab", v), (d, m) => (y(), x("div", {
      class: p(c.value),
      "aria-disabled": d.disabled,
      role: "tablist",
      onKeydown: k
    }, [
      $("div", {
        class: p(b.value)
      }, [
        (y(!0), x(ie, null, ve(o.value, (w) => (y(), x("button", {
          key: w.name,
          class: p(h(w.name, w.disabled)),
          role: "tab",
          "aria-selected": S(n)(w.name),
          "aria-disabled": d.disabled || w.disabled,
          tabindex: S(n)(w.name) ? 0 : -1,
          onClick: (z) => C(w.name, w.disabled)
        }, U(w.title), 11, In))), 128))
      ], 2),
      $("div", {
        class: p(i.value)
      }, [
        K(d.$slots, "default")
      ], 2)
    ], 42, Vn));
  }
}), Dn = /* @__PURE__ */ ee({
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
    const a = l, t = Ae("activeTab", j("")), e = g(() => t.value === a.name), r = g(() => {
      var o;
      return a.unstyled && ((o = a.pt) == null ? void 0 : o.root) || "";
    });
    return (o, s) => Xe((y(), x("div", {
      class: p(r.value)
    }, [
      K(o.$slots, "default")
    ], 2)), [
      [zt, e.value]
    ]);
  }
}), Tn = le(Mn), Rn = le(Dn), En = R({
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
}, _n = /* @__PURE__ */ ee({
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
    const t = l, e = a, r = j(t.defaultCollapsed);
    ae(
      () => t.defaultCollapsed,
      (C) => {
        r.value = C;
      }
    );
    const o = () => {
      t.collapsible && (r.value = !r.value, e("update:collapsed", r.value), e("collapse", r.value));
    }, s = g(() => {
      var C, k;
      return t.unstyled ? ((C = t.pt) == null ? void 0 : C.root) || "" : En({
        variant: t.variant,
        padding: t.padding,
        radius: t.radius,
        bordered: t.bordered,
        class: (k = t.pt) == null ? void 0 : k.root
      });
    }), v = g(() => {
      var C, k;
      return t.unstyled ? ((C = t.pt) == null ? void 0 : C.header) || "" : Ln({
        padding: t.padding,
        collapsible: t.collapsible,
        class: (k = t.pt) == null ? void 0 : k.header
      });
    }), n = g(() => {
      var C, k;
      return t.unstyled ? ((C = t.pt) == null ? void 0 : C.title) || "" : An({
        class: (k = t.pt) == null ? void 0 : k.title
      });
    }), u = g(() => {
      var C, k;
      return t.unstyled ? ((C = t.pt) == null ? void 0 : C.content) || "" : On({
        padding: t.padding,
        collapsed: r.value,
        class: (k = t.pt) == null ? void 0 : k.content
      });
    }), f = g(() => {
      var C, k;
      return t.unstyled ? ((C = t.pt) == null ? void 0 : C.icon) || "" : Pn({
        collapsed: r.value,
        class: (k = t.pt) == null ? void 0 : k.icon
      });
    });
    return (C, k) => (y(), x("div", {
      class: p(s.value)
    }, [
      $("div", {
        class: p(v.value),
        onClick: o
      }, [
        $("div", {
          class: p(n.value)
        }, [
          K(C.$slots, "title", {}, () => [
            xe(U(C.title), 1)
          ])
        ], 2),
        C.collapsible ? (y(), x("div", {
          key: 0,
          class: p(f.value)
        }, [
          K(C.$slots, "icon", {}, () => [
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
        ], 2)) : H("", !0)
      ], 2),
      $("div", {
        class: p(u.value)
      }, [
        K(C.$slots, "default")
      ], 2)
    ], 2));
  }
}), Wn = le(_n), Fn = R({
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
}, Zn = ["disabled"], Jn = ["disabled"], Qn = ["onClick", "disabled", "aria-current"], ei = ["disabled"], ti = ["disabled"], li = ["max", "disabled"], ai = ["disabled"], ri = /* @__PURE__ */ ee({
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
    const t = l, e = a, r = j(t.modelValue);
    ae(
      () => t.modelValue,
      (w) => {
        w !== r.value && (r.value = w);
      }
    );
    const o = g({
      get: () => r.value,
      set: (w) => {
        r.value = w, e("update:modelValue", w), e("change", w);
      }
    }), s = j(""), v = g(() => t.disabled), n = g(() => {
      const w = t.totalPages, z = r.value, M = t.visiblePageCount;
      if (w <= M)
        return Array.from({ length: w }, (T, L) => L + 1);
      const V = Math.floor(M / 2);
      let A = z - V, D = z + V;
      A < 1 && (D = Math.min(w, D + (1 - A)), A = 1), D > w && (A = Math.max(1, A - (D - w)), D = w);
      const O = [];
      A > 1 && (O.push(1), A > 2 && O.push("..."));
      for (let T = A; T <= D; T++)
        O.push(T);
      return D < w && (D < w - 1 && O.push("..."), O.push(w)), O;
    }), u = (w) => {
      w >= 1 && w <= t.totalPages && w !== o.value && (o.value = w);
    }, f = () => {
      const w = Number(s.value);
      !isNaN(w) && w >= 1 && w <= t.totalPages && u(w), s.value = "";
    }, C = g(() => {
      var w, z;
      return t.unstyled ? ((w = t.pt) == null ? void 0 : w.root) || "" : Fn({
        disabled: t.disabled,
        class: (z = t.pt) == null ? void 0 : z.root
      });
    }), k = g(() => {
      var w, z;
      return t.unstyled ? ((w = t.pt) == null ? void 0 : w.list) || "" : Hn({
        class: (z = t.pt) == null ? void 0 : z.list
      });
    }), c = g(() => {
      var w, z;
      return t.unstyled ? ((w = t.pt) == null ? void 0 : w.item) || "" : Nn({
        class: (z = t.pt) == null ? void 0 : z.item
      });
    }), b = (w, z) => {
      var M, V, A, D, O, T, L, P, F, B, E, I;
      return t.unstyled ? z === "first" ? ((M = t.pt) == null ? void 0 : M.firstButton) || "" : z === "prev" ? ((V = t.pt) == null ? void 0 : V.prevButton) || "" : z === "next" ? ((A = t.pt) == null ? void 0 : A.nextButton) || "" : z === "last" ? ((D = t.pt) == null ? void 0 : D.lastButton) || "" : w === o.value ? ((O = t.pt) == null ? void 0 : O.activeButton) || "" : ((T = t.pt) == null ? void 0 : T.button) || "" : Gn({
        variant: t.variant,
        size: t.size,
        shape: t.shape,
        active: w === o.value,
        disabled: t.disabled,
        class: w === o.value ? (L = t.pt) == null ? void 0 : L.activeButton : z === "first" ? (P = t.pt) == null ? void 0 : P.firstButton : z === "prev" ? (F = t.pt) == null ? void 0 : F.prevButton : z === "next" ? (B = t.pt) == null ? void 0 : B.nextButton : z === "last" ? (E = t.pt) == null ? void 0 : E.lastButton : (I = t.pt) == null ? void 0 : I.button
      });
    }, h = g(() => {
      var w, z;
      return t.unstyled ? ((w = t.pt) == null ? void 0 : w.ellipsis) || "" : Kn({
        size: t.size,
        class: (z = t.pt) == null ? void 0 : z.ellipsis
      });
    }), i = g(() => {
      var w, z;
      return t.unstyled ? ((w = t.pt) == null ? void 0 : w.jumper) || "" : Yn({
        class: (z = t.pt) == null ? void 0 : z.jumper
      });
    }), d = g(() => {
      var w, z;
      return t.unstyled ? ((w = t.pt) == null ? void 0 : w.jumperInput) || "" : Un({
        size: t.size,
        class: (z = t.pt) == null ? void 0 : z.jumperInput
      });
    }), m = g(() => {
      var w, z;
      return t.unstyled ? ((w = t.pt) == null ? void 0 : w.jumperButton) || "" : Xn({
        size: t.size,
        class: (z = t.pt) == null ? void 0 : z.jumperButton
      });
    });
    return (w, z) => (y(), x("nav", {
      class: p(C.value),
      "aria-label": "分页导航"
    }, [
      $("ul", {
        class: p(k.value)
      }, [
        w.showEndButtons ? (y(), x("li", {
          key: 0,
          class: p(c.value)
        }, [
          $("button", {
            class: p(b(1, "first")),
            onClick: z[0] || (z[0] = (M) => u(1)),
            disabled: v.value || o.value === 1,
            "aria-label": "首页"
          }, [
            K(w.$slots, "first-button", {}, () => [
              z[5] || (z[5] = $("svg", {
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
        ], 2)) : H("", !0),
        w.showPrevNextButtons ? (y(), x("li", {
          key: 1,
          class: p(c.value)
        }, [
          $("button", {
            class: p(b(o.value - 1, "prev")),
            onClick: z[1] || (z[1] = (M) => u(o.value - 1)),
            disabled: v.value || o.value === 1,
            "aria-label": "上一页"
          }, [
            K(w.$slots, "prev-button", {}, () => [
              z[6] || (z[6] = $("svg", {
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
        ], 2)) : H("", !0),
        (y(!0), x(ie, null, ve(n.value, (M, V) => (y(), x(ie, { key: V }, [
          M !== "..." ? (y(), x("li", {
            key: 0,
            class: p(c.value)
          }, [
            $("button", {
              class: p(b(Number(M))),
              onClick: (A) => u(Number(M)),
              disabled: v.value,
              "aria-current": o.value === M ? "page" : void 0
            }, U(M), 11, Qn)
          ], 2)) : (y(), x("li", {
            key: 1,
            class: p(c.value)
          }, [
            $("span", {
              class: p(h.value)
            }, "...", 2)
          ], 2))
        ], 64))), 128)),
        w.showPrevNextButtons ? (y(), x("li", {
          key: 2,
          class: p(c.value)
        }, [
          $("button", {
            class: p(b(o.value + 1, "next")),
            onClick: z[2] || (z[2] = (M) => u(o.value + 1)),
            disabled: v.value || o.value === w.totalPages,
            "aria-label": "下一页"
          }, [
            K(w.$slots, "next-button", {}, () => [
              z[7] || (z[7] = $("svg", {
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
        ], 2)) : H("", !0),
        w.showEndButtons ? (y(), x("li", {
          key: 3,
          class: p(c.value)
        }, [
          $("button", {
            class: p(b(w.totalPages, "last")),
            onClick: z[3] || (z[3] = (M) => u(w.totalPages)),
            disabled: v.value || o.value === w.totalPages,
            "aria-label": "尾页"
          }, [
            K(w.$slots, "last-button", {}, () => [
              z[8] || (z[8] = $("svg", {
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
        ], 2)) : H("", !0),
        w.showJumper ? (y(), x("li", {
          key: 4,
          class: p(i.value)
        }, [
          z[9] || (z[9] = $("span", null, "前往", -1)),
          Xe($("input", {
            class: p(d.value),
            type: "number",
            "onUpdate:modelValue": z[4] || (z[4] = (M) => s.value = M),
            min: "1",
            max: w.totalPages,
            disabled: v.value,
            onKeyup: De(f, ["enter"])
          }, null, 42, li), [
            [Tt, s.value]
          ]),
          z[10] || (z[10] = $("span", null, "页", -1)),
          $("button", {
            class: p(m.value),
            onClick: f,
            disabled: v.value
          }, " 跳转 ", 10, ai)
        ], 2)) : H("", !0)
      ], 2)
    ], 2));
  }
}), oi = le(ri), si = R({
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
  const a = g(() => {
    if (l.indeterminate)
      return 0;
    const r = Math.max(0, Math.min(l.value || 0, l.max || 100)), o = Math.max(1, l.max || 100);
    return Math.round(r / o * 100);
  }), t = g(() => `${a.value}%`), e = g(() => {
    if (!l.indeterminate)
      return `width: ${a.value}%`;
  });
  return {
    percentage: a,
    formattedPercentage: t,
    progressWidth: e
  };
}, fi = ["aria-valuenow"], pi = /* @__PURE__ */ ee({
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
    const a = l, { percentage: t, formattedPercentage: e, progressWidth: r } = ci(a), o = g(() => {
      var u, f;
      return a.unstyled ? ((u = a.pt) == null ? void 0 : u.root) || "" : si({
        unstyled: a.unstyled,
        class: (f = a.pt) == null ? void 0 : f.root
      });
    }), s = g(() => {
      var u, f;
      return a.unstyled ? ((u = a.pt) == null ? void 0 : u.container) || "" : ni({
        size: a.size,
        shape: a.shape,
        unstyled: a.unstyled,
        class: (f = a.pt) == null ? void 0 : f.container
      });
    }), v = g(() => {
      var u, f;
      return a.unstyled ? ((u = a.pt) == null ? void 0 : u.bar) || "" : ii({
        variant: a.variant,
        striped: a.striped,
        animated: a.animated,
        indeterminate: a.indeterminate,
        unstyled: a.unstyled,
        class: (f = a.pt) == null ? void 0 : f.bar
      });
    }), n = g(() => {
      var u, f;
      return a.unstyled ? ((u = a.pt) == null ? void 0 : u.text) || "" : ui({
        variant: a.variant,
        unstyled: a.unstyled,
        class: (f = a.pt) == null ? void 0 : f.text
      });
    });
    return (u, f) => (y(), x("div", {
      class: p(o.value)
    }, [
      $("div", {
        class: p(s.value)
      }, [
        $("div", {
          class: p(v.value),
          style: ue(S(r)),
          role: "progressbar",
          "aria-valuenow": u.indeterminate ? void 0 : S(t),
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        }, null, 14, fi)
      ], 2),
      u.showText ? (y(), x("div", {
        key: 0,
        class: p(n.value)
      }, [
        K(u.$slots, "text", {}, () => [
          xe(U(S(e)), 1)
        ])
      ], 2)) : H("", !0)
    ], 2));
  }
}), vi = le(pi), gi = R({
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
  const a = j(null);
  return Oe(il, {
    separator: l.separator || "/",
    separatorIcon: l.separatorIcon || ""
  }), {
    _ref: a
  };
}, xi = () => {
  const l = Ae(
    il,
    {
      separator: "/",
      separatorIcon: ""
    }
  );
  return {
    _ref: j(null),
    breadcrumbContext: l
  };
}, ki = /* @__PURE__ */ ee({
  name: "VBreadcrumb",
  __name: "breadcrumb",
  props: {
    separator: { default: "/" },
    separatorIcon: { default: "" },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  setup(l, { expose: a }) {
    const t = l, { _ref: e } = wi(t), r = g(() => {
      var s, v;
      return t.unstyled ? ((s = t.pt) == null ? void 0 : s.root) || "" : gi({
        class: (v = t.pt) == null ? void 0 : v.root
      });
    }), o = g(() => {
      var s, v;
      return t.unstyled ? ((s = t.pt) == null ? void 0 : s.list) || "" : bi({
        class: (v = t.pt) == null ? void 0 : v.list
      });
    });
    return a({
      _ref: e
    }), (s, v) => (y(), x("nav", {
      class: p(r.value),
      ref_key: "_ref",
      ref: e
    }, [
      $("ol", {
        class: p(o.value)
      }, [
        K(s.$slots, "default")
      ], 2)
    ], 2));
  }
}), Ci = {
  click: (l) => l instanceof MouseEvent
}, Si = ["href"], zi = /* @__PURE__ */ ee({
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
  setup(l, { expose: a, emit: t }) {
    const e = t, r = l, { _ref: o, breadcrumbContext: s } = xi(), v = j(!1), n = () => {
      if (o.value) {
        const b = o.value.parentElement;
        b && (v.value = b.firstElementChild === o.value);
      }
    };
    $e(() => {
      n();
    });
    const u = (b) => {
      if (r.disabled) {
        b.preventDefault();
        return;
      }
      e("click", b);
    }, f = g(() => {
      var b, h;
      return r.unstyled ? ((b = r.pt) == null ? void 0 : b.root) || "" : yi({
        disabled: r.disabled,
        active: r.active,
        class: (h = r.pt) == null ? void 0 : h.root
      });
    }), C = g(() => {
      var b;
      return r.unstyled ? ((b = r.pt) == null ? void 0 : b.separator) || "" : mi();
    }), k = g(() => {
      var b, h;
      return r.unstyled ? ((b = r.pt) == null ? void 0 : b.link) || "" : hi({
        class: (h = r.pt) == null ? void 0 : h.link
      });
    }), c = g(() => {
      var b;
      return r.unstyled && ((b = r.pt) == null ? void 0 : b.content) || "";
    });
    return a({
      _ref: o
    }), (b, h) => (y(), x("li", {
      class: p(f.value),
      ref_key: "_ref",
      ref: o
    }, [
      b.$slots.separator ? K(b.$slots, "separator", { key: 0 }) : S(s).separatorIcon ? (y(), x("span", {
        key: 1,
        class: p(C.value)
      }, [
        (y(), Ee(dt(S(s).separatorIcon)))
      ], 2)) : v.value ? H("", !0) : (y(), x("span", {
        key: 2,
        class: p(C.value)
      }, U(S(s).separator), 3)),
      b.href && !b.disabled && !b.active ? (y(), x("a", {
        key: 3,
        href: b.href,
        class: p(k.value),
        onClick: u
      }, [
        K(b.$slots, "default")
      ], 10, Si)) : (y(), x("span", {
        key: 4,
        class: p(c.value)
      }, [
        K(b.$slots, "default")
      ], 2))
    ], 2));
  }
}), ul = le(ki, {
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
  const t = j(null), e = j([]), r = j([]), o = j(!1), s = j(0), v = j(-1), n = vl(l.panels || []), u = g(() => l.direction !== "vertical"), f = (V, A) => {
    e.value[A] = V;
  }, C = (V, A) => {
    r.value[A] = V;
  }, k = () => {
    if (!t.value || e.value.length === 0) return;
    const V = u.value ? t.value.clientWidth : t.value.clientHeight;
    if (!l.panels || l.panels.length === 0) {
      const A = `${100 / e.value.length}%`;
      e.value.forEach((D, O) => {
        n[O] = n[O] || {}, n[O].size = A, n[O].resizable = n[O].resizable !== !1;
      });
      return;
    }
    l.panels.forEach((A, D) => {
      if (D < e.value.length)
        if (n[D] = { ...A }, A.size && A.size.endsWith("%")) {
          const O = parseFloat(A.size) / 100, T = Math.floor(V * O);
          e.value[D].style[u.value ? "width" : "height"] = `${T}px`;
        } else A.size && (e.value[D].style[u.value ? "width" : "height"] = A.size);
    }), a("update:panels", [...n]);
  }, c = (V, A) => {
    var P, F;
    if (!l.resizable) return;
    const D = A, O = A + 1, T = ((P = n[D]) == null ? void 0 : P.resizable) !== !1, L = ((F = n[O]) == null ? void 0 : F.resizable) !== !1;
    if (!(!T && !L)) {
      if (V.preventDefault(), o.value = !0, v.value = A, V instanceof MouseEvent)
        s.value = u.value ? V.clientX : V.clientY;
      else {
        const B = V.touches[0];
        s.value = u.value ? B.clientX : B.clientY;
      }
      window.addEventListener("mousemove", b), window.addEventListener("mouseup", d), window.addEventListener("touchmove", h), window.addEventListener("touchend", m), a("resize-start", V);
    }
  }, b = (V) => {
    o.value && i(u.value ? V.clientX : V.clientY);
  }, h = (V) => {
    if (!o.value) return;
    const A = V.touches[0];
    i(u.value ? A.clientX : A.clientY);
  }, i = (V) => {
    var ne, W, Z, re;
    if (!o.value || !t.value) return;
    const A = v.value, D = A, O = A + 1;
    if (D < 0 || O >= e.value.length || !e.value[D] || !e.value[O])
      return;
    const T = e.value[D], L = e.value[O], P = V - s.value;
    if (P === 0) return;
    const F = u.value ? T.offsetWidth : T.offsetHeight, B = u.value ? L.offsetWidth : L.offsetHeight, E = (ne = n[D]) != null && ne.minSize ? M(
      n[D].minSize,
      t.value,
      u.value
    ) : 0, I = (W = n[O]) != null && W.minSize ? M(
      n[O].minSize,
      t.value,
      u.value
    ) : 0, N = (Z = n[D]) != null && Z.maxSize ? M(
      n[D].maxSize,
      t.value,
      u.value
    ) : 1 / 0, _ = (re = n[O]) != null && re.maxSize ? M(
      n[O].maxSize,
      t.value,
      u.value
    ) : 1 / 0;
    let Y = F + P, X = B - P;
    Y < E ? (Y = E, X = F + B - E) : Y > N && (Y = N, X = F + B - N), X < I ? (X = I, Y = F + B - I) : X > _ && (X = _, Y = F + B - _), u.value ? (T.style.width = `${Y}px`, L.style.width = `${X}px`) : (T.style.height = `${Y}px`, L.style.height = `${X}px`), n[D] = {
      ...n[D],
      size: `${Y}px`
    }, n[O] = {
      ...n[O],
      size: `${X}px`
    }, s.value = V, a("resize", [...n]);
  }, d = () => {
    w();
  }, m = () => {
    w();
  }, w = () => {
    o.value && (o.value = !1, v.value = -1, window.removeEventListener("mousemove", b), window.removeEventListener("mouseup", d), window.removeEventListener("touchmove", h), window.removeEventListener("touchend", m), a("resize-end", [...n]), a("update:panels", [...n]));
  }, z = (V) => {
    if (V < 0 || V >= e.value.length) return;
    const A = e.value[V], D = n[V];
    if (!D.collapsible) return;
    if (!D.collapsed)
      D._savedSize = D.size, u.value ? A.style.width = "0" : A.style.height = "0", D.size = "0", D.collapsed = !0, a("collapse", V, !0);
    else {
      const T = D._savedSize || "1fr";
      u.value ? A.style.width = T : A.style.height = T, D.size = T, D.collapsed = !1, a("expand", V, !1);
    }
    a("update:panels", [...n]);
  }, M = (V, A, D) => {
    if (V.endsWith("px"))
      return parseFloat(V);
    if (V.endsWith("%")) {
      const O = D ? A.clientWidth : A.clientHeight;
      return parseFloat(V) / 100 * O;
    } else if (V.endsWith("rem")) {
      const O = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      return parseFloat(V) * O;
    } else if (V.endsWith("em")) {
      const O = parseFloat(getComputedStyle(A).fontSize);
      return parseFloat(V) * O;
    } else {
      if (V.endsWith("vh"))
        return parseFloat(V) / 100 * window.innerHeight;
      if (V.endsWith("vw"))
        return parseFloat(V) / 100 * window.innerWidth;
    }
    return parseFloat(V) || 0;
  };
  return $e(() => {
    k(), window.addEventListener("resize", k);
  }), Pe(() => {
    window.removeEventListener("resize", k), window.removeEventListener("mousemove", b), window.removeEventListener("mouseup", d), window.removeEventListener("touchmove", h), window.removeEventListener("touchend", m);
  }), {
    rootRef: t,
    panelRefs: e,
    gutterRefs: r,
    isResizing: o,
    panelSizes: n,
    isHorizontal: u,
    registerPanel: f,
    registerGutter: C,
    onGutterMouseDown: c,
    toggleCollapse: z,
    initPanelSizes: k
  };
}, Mi = ["aria-orientation"], Di = ["onMousedown", "onTouchstart", "aria-label", "aria-controls", "onKeydown"], Ti = /* @__PURE__ */ ee({
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
  setup(l, { expose: a, emit: t }) {
    const e = l, r = t, {
      rootRef: o,
      panelSizes: s,
      isHorizontal: v,
      registerPanel: n,
      registerGutter: u,
      onGutterMouseDown: f,
      toggleCollapse: C,
      initPanelSizes: k
    } = Ii(e, r), c = g(() => {
      var z;
      const d = Ze(), m = Object.keys(d).filter((M) => M.startsWith("panel-")).length / 2, w = ((z = e.panels) == null ? void 0 : z.length) || 0;
      return Math.max(m, w, 2);
    }), b = (d) => {
      const m = s[d] || {}, w = v.value ? "width" : "height", z = {};
      return m.size && (z[w] = m.size), m.collapsed && (z[w] = "0", z.overflow = "hidden"), z;
    }, h = (d, m, w) => {
      if (!e.resizable) return;
      d.preventDefault();
      const z = d.shiftKey ? 10 : 1, M = s[m], V = s[m + 1];
      if (!M || !V) return;
      const A = parseFloat(M.size || "0"), D = parseFloat(V.size || "0"), O = z * w;
      M.size = `${A + O}px`, V.size = `${D - O}px`, k();
    }, i = g(() => {
      var A, D, O, T, L, P;
      if (e.unstyled)
        return {
          root: ((A = e.pt) == null ? void 0 : A.root) || "",
          wrapper: ((D = e.pt) == null ? void 0 : D.wrapper) || "",
          panel: ((O = e.pt) == null ? void 0 : O.panel) || "",
          gutter: ((T = e.pt) == null ? void 0 : T.gutter) || "",
          gutterHandle: ((L = e.pt) == null ? void 0 : L.gutterHandle) || "",
          gutterIcon: ((P = e.pt) == null ? void 0 : P.gutterIcon) || ""
        };
      const { root: d, wrapper: m, panel: w, gutter: z, gutterHandle: M, gutterIcon: V } = dl({
        direction: e.direction,
        size: e.size,
        solid: e.solid,
        dotted: e.dotted,
        dashed: e.dashed,
        disabled: !e.resizable
      });
      return {
        root: d(),
        wrapper: m(),
        panel: w(),
        gutter: z(),
        gutterHandle: M(),
        gutterIcon: V()
      };
    });
    return a({
      toggleCollapse: C,
      initPanelSizes: k
    }), Oe("splitter", {
      registerPanel: n,
      direction: e.direction
    }), (d, m) => (y(), x("div", {
      ref_key: "rootRef",
      ref: o,
      class: p(i.value.root),
      role: "separator",
      "aria-orientation": e.direction === "vertical" ? "horizontal" : "vertical"
    }, [
      (y(!0), x(ie, null, ve(c.value, (w, z) => (y(), x(ie, { key: z }, [
        z < c.value ? (y(), x("div", {
          key: 0,
          ref_for: !0,
          ref: (M) => M && S(n)(M, z),
          class: p(i.value.wrapper),
          style: ue(b(z))
        }, [
          K(d.$slots, `panel-${z}`, {}, () => [
            $("div", {
              class: p(i.value.panel)
            }, [
              K(d.$slots, `panel-${z}-content`, {}, () => [
                xe("Panel " + U(z + 1), 1)
              ])
            ], 2)
          ])
        ], 6)) : H("", !0),
        z < c.value - 1 ? (y(), x("div", {
          key: 1,
          ref_for: !0,
          ref: (M) => M && S(u)(M, z),
          class: p(i.value.gutter),
          onMousedown: (M) => S(f)(M, z),
          onTouchstart: (M) => S(f)(M, z),
          tabindex: "0",
          "aria-label": `调整${S(v) ? "宽度" : "高度"}`,
          "aria-controls": `panel-${z},panel-${z + 1}`,
          onKeydown: [
            De((M) => h(M, z, -1), ["left"]),
            De((M) => h(M, z, 1), ["right"]),
            De((M) => h(M, z, -1), ["up"]),
            De((M) => h(M, z, 1), ["down"])
          ]
        }, [
          K(d.$slots, `gutter-${z}`, {}, () => [
            $("div", {
              class: p(i.value.gutterHandle)
            }, [
              K(d.$slots, `gutter-${z}-handle`, {}, () => [
                S(v) ? (y(), x("svg", {
                  key: 0,
                  class: p(i.value.gutterIcon),
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round"
                }, m[0] || (m[0] = [
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
                ]), 2)) : (y(), x("svg", {
                  key: 1,
                  class: p(i.value.gutterIcon),
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round"
                }, m[1] || (m[1] = [
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
        ], 42, Di)) : H("", !0)
      ], 64))), 128))
    ], 10, Mi));
  }
}), Ri = /* @__PURE__ */ ee({
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
    const t = l, e = a, r = j(null), o = Ae("splitter", {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      registerPanel: (n, u) => {
      },
      direction: "horizontal",
      index: -1
    });
    ae(
      () => t.size,
      (n) => {
        n !== void 0 && r.value && (o.direction === "horizontal" ? r.value.style.width = n : r.value.style.height = n);
      }
    ), ae(
      () => t.collapsed,
      (n) => {
        e("update:collapsed", n);
      }
    ), $e(() => {
      r.value && o.index >= 0 && o.registerPanel(r.value, o.index);
    });
    const s = g(() => {
      var n;
      return t.unstyled ? ((n = t.pt) == null ? void 0 : n.root) || "" : dl().panel();
    }), v = g(() => {
      var n;
      return t.unstyled ? ((n = t.pt) == null ? void 0 : n.content) || "" : "h-full w-full";
    });
    return (n, u) => (y(), x("div", {
      ref_key: "panelRef",
      ref: r,
      class: p(s.value)
    }, [
      $("div", {
        class: p(v.value)
      }, [
        K(n.$slots, "default")
      ], 2)
    ], 2));
  }
}), Ei = le(Ti), Li = le(Ri), Ai = (l, a) => {
  var b, h;
  const t = j(((b = l.modelValue) == null ? void 0 : b[0]) || null), e = j(((h = l.modelValue) == null ? void 0 : h[1]) || null), r = j((t.value || /* @__PURE__ */ new Date()).getMonth()), o = j((t.value || /* @__PURE__ */ new Date()).getFullYear()), s = j("start"), v = g(() => {
    const i = l.locale || "default", d = l.firstDayOfWeek || 0, m = [];
    for (let w = 0; w < 7; w++) {
      const z = (w + d) % 7;
      m.push(
        new Intl.DateTimeFormat(i, { weekday: "short" }).format(
          new Date(2021, 0, z + 3)
          // 2021-01-03 is a Sunday
        )
      );
    }
    return m;
  }), n = g(() => {
    const i = o.value, d = r.value, m = new Date(i, d, 1).getDay(), w = new Date(i, d + 1, 0).getDate(), z = l.firstDayOfWeek || 0, M = [], V = new Date(i, d, 0).getDate(), A = (m - z + 7) % 7;
    for (let T = V - A + 1; T <= V; T++)
      M.push({
        date: new Date(i, d - 1, T),
        day: T,
        isCurrentMonth: !1,
        isToday: !1,
        isSelected: !1,
        isRangeStart: !1,
        isRangeEnd: !1,
        isInRange: !1,
        isDisabled: !1
      });
    const D = /* @__PURE__ */ new Date();
    for (let T = 1; T <= w; T++) {
      const L = new Date(i, d, T), P = D.getDate() === T && D.getMonth() === d && D.getFullYear() === i, F = t.value && L.getDate() === t.value.getDate() && L.getMonth() === t.value.getMonth() && L.getFullYear() === t.value.getFullYear(), B = e.value && L.getDate() === e.value.getDate() && L.getMonth() === e.value.getMonth() && L.getFullYear() === e.value.getFullYear(), E = t.value && e.value && L > t.value && L < e.value, I = F || B, N = l.disabled || l.min && L < l.min || l.max && L > l.max;
      M.push({
        date: L,
        day: T,
        isCurrentMonth: !0,
        isToday: P,
        isSelected: I,
        isRangeStart: F,
        isRangeEnd: B,
        isInRange: E,
        isDisabled: N
      });
    }
    const O = 42 - M.length;
    for (let T = 1; T <= O; T++) {
      const L = new Date(i, d + 1, T), P = t.value && L.getDate() === t.value.getDate() && L.getMonth() === t.value.getMonth() && L.getFullYear() === t.value.getFullYear(), F = e.value && L.getDate() === e.value.getDate() && L.getMonth() === e.value.getMonth() && L.getFullYear() === e.value.getFullYear(), B = t.value && e.value && L > t.value && L < e.value, E = P || F;
      M.push({
        date: L,
        day: T,
        isCurrentMonth: !1,
        isToday: !1,
        isSelected: E,
        isRangeStart: P,
        isRangeEnd: F,
        isInRange: B,
        isDisabled: !1
      });
    }
    return M;
  }), u = g(() => {
    const i = l.locale || "default";
    return new Intl.DateTimeFormat(i, { month: "long" }).format(
      new Date(o.value, r.value)
    );
  }), f = () => {
    r.value === 0 ? (r.value = 11, o.value--) : r.value--;
  }, C = () => {
    r.value === 11 ? (r.value = 0, o.value++) : r.value++;
  }, k = (i) => {
    l.disabled || l.readonly || l.min && i < l.min || l.max && i > l.max || (s.value === "start" ? (t.value = i, e.value = null, s.value = "end") : (t.value && i < t.value ? (e.value = t.value, t.value = i) : e.value = i, s.value = "start"), a("update:modelValue", [t.value, e.value]), a("change", [t.value, e.value]));
  }, c = () => {
    t.value = null, e.value = null, s.value = "start", a("update:modelValue", [null, null]), a("change", [null, null]);
  };
  return ae(
    () => l.modelValue,
    (i) => {
      i && (t.value = i[0], e.value = i[1], t.value && (r.value = t.value.getMonth(), o.value = t.value.getFullYear()), s.value = e.value ? "start" : "end");
    }
  ), {
    startDate: t,
    endDate: e,
    currentMonth: r,
    currentYear: o,
    selectionMode: s,
    weekdays: v,
    daysInMonth: n,
    monthName: u,
    prevMonth: f,
    nextMonth: C,
    selectDate: k,
    resetSelection: c
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
}), _i = R({
  base: "flex items-center space-x-1"
}), Wi = R({
  base: "p-1 rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
}), Fi = R({
  base: "grid grid-cols-7 mb-1"
}), Hi = R({
  base: "text-center text-sm font-medium text-gray-500 py-2"
}), Ni = R({
  base: "grid grid-cols-7 gap-1"
}), Ve = R({
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
}, Zi = { class: "ml-1 font-medium" }, Ji = { class: "ml-1 font-medium" }, Qi = /* @__PURE__ */ ee({
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
    const t = a, e = l, {
      startDate: r,
      endDate: o,
      currentYear: s,
      selectionMode: v,
      weekdays: n,
      daysInMonth: u,
      monthName: f,
      prevMonth: C,
      nextMonth: k,
      selectDate: c,
      resetSelection: b
    } = Ai(e, t), h = (d) => {
      const m = e.locale || "default";
      return new Intl.DateTimeFormat(m).format(d);
    }, i = g(() => {
      var d, m, w, z, M, V, A, D, O, T, L, P, F, B, E, I, N, _, Y, X, ne, W, Z, re, se, pe, fe, ye, ke, we, Ce, he;
      return {
        root: e.unstyled ? ((d = e.pt) == null ? void 0 : d.root) || "" : Oi({ unstyled: e.unstyled, class: (m = e.pt) == null ? void 0 : m.root }),
        header: e.unstyled ? ((w = e.pt) == null ? void 0 : w.header) || "" : Pi({ class: (z = e.pt) == null ? void 0 : z.header }),
        title: e.unstyled ? ((M = e.pt) == null ? void 0 : M.title) || "" : ji({ class: (V = e.pt) == null ? void 0 : V.title }),
        navigation: e.unstyled ? ((A = e.pt) == null ? void 0 : A.navigation) || "" : _i({ class: (D = e.pt) == null ? void 0 : D.navigation }),
        navButton: e.unstyled ? ((O = e.pt) == null ? void 0 : O.navButton) || "" : Wi({ class: (T = e.pt) == null ? void 0 : T.navButton }),
        weekdays: e.unstyled ? ((L = e.pt) == null ? void 0 : L.weekdays) || "" : Fi({ class: (P = e.pt) == null ? void 0 : P.weekdays }),
        weekday: e.unstyled ? ((F = e.pt) == null ? void 0 : F.weekday) || "" : Hi({ class: (B = e.pt) == null ? void 0 : B.weekday }),
        days: e.unstyled ? ((E = e.pt) == null ? void 0 : E.days) || "" : Ni({ class: (I = e.pt) == null ? void 0 : I.days }),
        day: e.unstyled ? ((N = e.pt) == null ? void 0 : N.day) || "" : Ve({ class: (_ = e.pt) == null ? void 0 : _.day }),
        today: e.unstyled ? ((Y = e.pt) == null ? void 0 : Y.today) || "" : Ve({ isToday: !0, class: (X = e.pt) == null ? void 0 : X.today }).split(" ").filter((ge) => !Ve().includes(ge)).join(" "),
        selected: e.unstyled ? ((ne = e.pt) == null ? void 0 : ne.selected) || "" : Ve({ isSelected: !0, class: (W = e.pt) == null ? void 0 : W.selected }).split(" ").filter((ge) => !Ve().includes(ge)).join(" "),
        rangeStart: e.unstyled ? ((Z = e.pt) == null ? void 0 : Z.rangeStart) || "" : Ve({
          isRangeStart: !0,
          class: (re = e.pt) == null ? void 0 : re.rangeStart
        }).split(" ").filter((ge) => !Ve().includes(ge)).join(" "),
        rangeEnd: e.unstyled ? ((se = e.pt) == null ? void 0 : se.rangeEnd) || "" : Ve({ isRangeEnd: !0, class: (pe = e.pt) == null ? void 0 : pe.rangeEnd }).split(" ").filter((ge) => !Ve().includes(ge)).join(" "),
        inRange: e.unstyled ? ((fe = e.pt) == null ? void 0 : fe.inRange) || "" : Ve({ isInRange: !0, class: (ye = e.pt) == null ? void 0 : ye.inRange }).split(" ").filter((ge) => !Ve().includes(ge)).join(" "),
        disabled: e.unstyled ? ((ke = e.pt) == null ? void 0 : ke.disabled) || "" : Ve({ isDisabled: !0, class: (we = e.pt) == null ? void 0 : we.disabled }).split(" ").filter((ge) => !Ve().includes(ge)).join(" "),
        adjacent: e.unstyled ? ((Ce = e.pt) == null ? void 0 : Ce.adjacent) || "" : Ve({ isAdjacent: !0, class: (he = e.pt) == null ? void 0 : he.adjacent }).split(" ").filter((ge) => !Ve().includes(ge)).join(" ")
      };
    });
    return (d, m) => (y(), x("div", {
      class: p(i.value.root)
    }, [
      $("div", {
        class: p(i.value.header)
      }, [
        $("div", {
          class: p(i.value.title)
        }, [
          xe(U(S(f)) + " " + U(S(s)) + " ", 1),
          S(v) === "end" ? (y(), x("span", Ki, " (Select end date) ")) : H("", !0)
        ], 2),
        $("div", {
          class: p(i.value.navigation)
        }, [
          $("button", {
            class: p(i.value.navButton),
            onClick: m[0] || (m[0] = //@ts-ignore
            (...w) => S(C) && S(C)(...w)),
            disabled: d.disabled || d.readonly
          }, m[3] || (m[3] = [
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
            onClick: m[1] || (m[1] = //@ts-ignore
            (...w) => S(k) && S(k)(...w)),
            disabled: d.disabled || d.readonly
          }, m[4] || (m[4] = [
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
        (y(!0), x(ie, null, ve(S(n), (w, z) => (y(), x("div", {
          key: z,
          class: p(i.value.weekday)
        }, U(w), 3))), 128))
      ], 2),
      $("div", {
        class: p(i.value.days)
      }, [
        (y(!0), x(ie, null, ve(S(u), (w, z) => (y(), x("button", {
          key: z,
          class: p([
            i.value.day,
            w.isToday ? i.value.today : "",
            w.isSelected ? i.value.selected : "",
            w.isRangeStart ? i.value.rangeStart : "",
            w.isRangeEnd ? i.value.rangeEnd : "",
            w.isInRange ? i.value.inRange : "",
            w.isDisabled ? i.value.disabled : "",
            w.isCurrentMonth ? "" : i.value.adjacent
          ]),
          onClick: (M) => S(c)(w.date),
          disabled: w.isDisabled || d.disabled || d.readonly
        }, U(w.day), 11, Xi))), 128))
      ], 2),
      S(r) || S(o) ? (y(), x("div", qi, [
        $("div", null, [
          m[5] || (m[5] = $("span", { class: "text-sm text-gray-500" }, "Start:", -1)),
          $("span", Zi, U(S(r) ? h(S(r)) : "-"), 1)
        ]),
        $("div", null, [
          m[6] || (m[6] = $("span", { class: "text-sm text-gray-500" }, "End:", -1)),
          $("span", Ji, U(S(o) ? h(S(o)) : "-"), 1)
        ]),
        $("button", {
          class: "text-sm text-red-500 hover:text-red-700",
          onClick: m[2] || (m[2] = //@ts-ignore
          (...w) => S(b) && S(b)(...w))
        }, " Reset ")
      ])) : H("", !0)
    ], 2));
  }
}), eu = le(Qi), tu = R({
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
}, cu = /* @__PURE__ */ ee({
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
    const t = l, e = a, r = j(
      Array.isArray(t.modelValue) ? t.modelValue : t.modelValue ? [t.modelValue] : []
    );
    ae(
      () => t.modelValue,
      (n) => {
        Array.isArray(n) ? r.value = n : n ? r.value = [n] : r.value = [];
      }
    );
    const o = g(() => {
      var n, u;
      return t.unstyled ? ((n = t.pt) == null ? void 0 : n.root) || "" : tu({
        variant: t.variant,
        radius: t.radius,
        bordered: t.bordered,
        class: (u = t.pt) == null ? void 0 : u.root
      });
    }), s = (n, u) => {
      let f = [...r.value];
      if (u ? t.multiple ? f.includes(n) || f.push(n) : f = [n] : f = f.filter((C) => C !== n), r.value = f, t.multiple)
        e("update:modelValue", f), e("change", f);
      else {
        const C = f.length > 0 ? f[0] : void 0;
        e("update:modelValue", C), e("change", C);
      }
    }, v = (n) => r.value.includes(n);
    return Oe("accordionContext", {
      disabled: g(() => t.disabled),
      animated: g(() => t.animated),
      toggleItem: s,
      isItemExpanded: v
    }), (n, u) => (y(), x("div", {
      class: p(o.value)
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), fu = ["aria-expanded", "aria-disabled"], pu = /* @__PURE__ */ ee({
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
    const t = l, e = a, r = Ae("accordionContext", {
      disabled: g(() => !1),
      animated: g(() => !0),
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
      toggleItem: (i, d) => {
      },
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
      isItemExpanded: (i) => !1
    }), o = g(
      () => t.disabled || r.disabled.value
    ), s = g(() => r.isItemExpanded(t.value)), v = j(null);
    ae(
      () => s.value,
      (i) => {
        if (!(!r.animated.value || !v.value))
          if (i) {
            const d = v.value;
            d.style.height = "0", d.style.height = `${d.scrollHeight}px`;
            const m = () => {
              s.value && (d.style.height = ""), d.removeEventListener("transitionend", m);
            };
            d.addEventListener("transitionend", m);
          } else {
            const d = v.value, m = d.offsetHeight;
            d.style.height = `${m}px`, d.style.height = "0";
          }
      }
    );
    const n = (i) => {
      if (o.value) return;
      e("click", i);
      const d = !s.value;
      r.toggleItem(t.value, d), e("toggle", d);
    }, u = g(() => {
      var i, d;
      return t.unstyled ? ((i = t.pt) == null ? void 0 : i.root) || "" : lu({
        class: (d = t.pt) == null ? void 0 : d.root
      });
    }), f = g(() => {
      var i, d;
      return t.unstyled ? ((i = t.pt) == null ? void 0 : i.header) || "" : au({
        class: (d = t.pt) == null ? void 0 : d.header
      });
    }), C = g(() => {
      var i, d;
      return t.unstyled ? ((i = t.pt) == null ? void 0 : i.trigger) || "" : ru({
        disabled: o.value,
        class: (d = t.pt) == null ? void 0 : d.trigger
      });
    }), k = g(() => {
      var i, d;
      return t.unstyled ? ((i = t.pt) == null ? void 0 : i.title) || "" : ou({
        class: (d = t.pt) == null ? void 0 : d.title
      });
    }), c = g(() => {
      var i, d;
      return t.unstyled ? ((i = t.pt) == null ? void 0 : i.icon) || "" : su({
        expanded: s.value,
        class: (d = t.pt) == null ? void 0 : d.icon
      });
    }), b = g(() => {
      var i, d;
      return t.unstyled ? ((i = t.pt) == null ? void 0 : i.content) || "" : nu({
        animated: r.animated.value,
        expanded: s.value,
        class: (d = t.pt) == null ? void 0 : d.content
      });
    }), h = g(() => {
      var i, d;
      return t.unstyled ? ((i = t.pt) == null ? void 0 : i.contentInner) || "" : iu({
        class: (d = t.pt) == null ? void 0 : d.contentInner
      });
    });
    return $e(() => {
      v.value && !s.value && (v.value.style.height = "0");
    }), (i, d) => (y(), x("div", {
      class: p(u.value)
    }, [
      $("div", {
        class: p(f.value)
      }, [
        $("button", {
          type: "button",
          class: p(C.value),
          "aria-expanded": s.value,
          "aria-disabled": o.value,
          onClick: n
        }, [
          $("div", {
            class: p(k.value)
          }, [
            K(i.$slots, "header", {}, () => [
              xe(U(i.header), 1)
            ])
          ], 2),
          $("div", {
            class: p(c.value)
          }, [
            K(i.$slots, "icon", {}, () => [
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
                $("polyline", { points: "6 9 12 15 18 9" })
              ], -1))
            ])
          ], 2)
        ], 10, fu)
      ], 2),
      $("div", {
        class: p(b.value),
        ref_key: "contentEl",
        ref: v
      }, [
        $("div", {
          class: p(h.value)
        }, [
          K(i.$slots, "default")
        ], 2)
      ], 2)
    ], 2));
  }
}), vu = le(cu), gu = le(pu), bu = R({
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
}), mu = { key: 0 }, yu = ["onClick"], hu = ["placeholder", "disabled", "readonly", "autofocus", "onKeydown"], wu = { key: 0 }, xu = /* @__PURE__ */ ee({
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
    const t = l, e = a, r = j(null), o = j(""), s = j(!1), v = g(() => t.unstyled ? {
      root: () => {
        var c;
        return ((c = t.pt) == null ? void 0 : c.root) || "";
      },
      wrapper: () => {
        var c;
        return ((c = t.pt) == null ? void 0 : c.wrapper) || "";
      },
      input: () => {
        var c;
        return ((c = t.pt) == null ? void 0 : c.input) || "";
      },
      prefix: () => {
        var c;
        return ((c = t.pt) == null ? void 0 : c.prefix) || "";
      },
      suffix: () => {
        var c;
        return ((c = t.pt) == null ? void 0 : c.suffix) || "";
      },
      tag: () => {
        var c;
        return ((c = t.pt) == null ? void 0 : c.tag) || "";
      },
      tagClose: () => {
        var c;
        return ((c = t.pt) == null ? void 0 : c.tagClose) || "";
      },
      count: () => {
        var c;
        return ((c = t.pt) == null ? void 0 : c.count) || "";
      }
    } : bu({
      size: t.size,
      status: t.status,
      disabled: t.disabled
    })), n = () => {
      if (!o.value || t.disabled || t.readonly || t.maxCount && t.modelValue.length >= t.maxCount) return;
      const c = [...t.modelValue];
      c.includes(o.value) || (c.push(o.value), e("update:modelValue", c), e("change", c), e("add", o.value)), o.value = "";
    }, u = (c) => {
      if (t.disabled || t.readonly) return;
      const b = [...t.modelValue], h = b[c];
      b.splice(c, 1), e("update:modelValue", b), e("change", b), e("remove", h, c);
    }, f = () => {
      if (o.value === "" && t.modelValue.length > 0 && !t.disabled && !t.readonly) {
        const c = [...t.modelValue], b = c.length - 1, h = c[b];
        c.pop(), e("update:modelValue", c), e("change", c), e("remove", h, b);
      }
    }, C = (c) => {
      s.value = !0, e("focus", c);
    }, k = (c) => {
      s.value = !1, o.value && n(), e("blur", c);
    };
    return ae(
      () => t.autofocus,
      (c) => {
        c && r.value && r.value.focus();
      },
      { immediate: !0 }
    ), (c, b) => {
      var h, i;
      return y(), x("div", {
        class: p(v.value.root())
      }, [
        $("div", {
          class: p(v.value.wrapper())
        }, [
          c.$slots.prefix || c.prefixIcon ? (y(), x("div", {
            key: 0,
            class: p(v.value.prefix())
          }, [
            K(c.$slots, "prefix", {}, () => [
              c.prefixIcon ? (y(), x("span", mu, U(c.prefixIcon), 1)) : H("", !0)
            ])
          ], 2)) : H("", !0),
          (y(!0), x(ie, null, ve(c.modelValue, (d, m) => (y(), x("div", {
            key: m,
            class: p(v.value.tag())
          }, [
            xe(U(d) + " ", 1),
            c.closable && !c.disabled && !c.readonly ? (y(), x("span", {
              key: 0,
              class: p(v.value.tagClose()),
              onClick: (w) => u(m)
            }, " × ", 10, yu)) : H("", !0)
          ], 2))), 128)),
          Xe($("input", {
            ref_key: "inputRef",
            ref: r,
            class: p(v.value.input()),
            type: "text",
            placeholder: (h = c.modelValue) != null && h.length ? "" : c.placeholder,
            disabled: c.disabled,
            readonly: c.readonly,
            autofocus: c.autofocus,
            "onUpdate:modelValue": b[0] || (b[0] = (d) => o.value = d),
            onKeydown: [
              De(Re(n, ["prevent"]), ["enter"]),
              De(f, ["backspace"])
            ],
            onBlur: k,
            onFocus: C
          }, null, 42, hu), [
            [gl, o.value]
          ]),
          c.$slots.suffix || c.suffixIcon ? (y(), x("div", {
            key: 1,
            class: p(v.value.suffix())
          }, [
            K(c.$slots, "suffix", {}, () => [
              c.suffixIcon ? (y(), x("span", wu, U(c.suffixIcon), 1)) : H("", !0)
            ])
          ], 2)) : H("", !0),
          c.showCount && c.maxCount ? (y(), x("span", {
            key: 2,
            class: p(v.value.count())
          }, U(((i = c.modelValue) == null ? void 0 : i.length) || 0) + "/" + U(c.maxCount), 3)) : H("", !0)
        ], 2)
      ], 2);
    };
  }
}), ku = le(xu), Ue = R({
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
  const t = j(l.visible || !1), e = j(null), r = j(null), o = `dropdown-${Math.random().toString(36).slice(2, 11)}`;
  let s = null, v = null;
  ae(
    () => l.visible,
    (b) => {
      b !== void 0 && (t.value = b);
    }
  ), ae(
    () => t.value,
    (b) => {
      a("update:visible", b), a(b ? "show" : "hide");
    }
  );
  const n = () => {
    l.disabled || ((l.trigger === "hover" || l.trigger === "focus") && l.showDelay ? (clearTimeout(v), s = window.setTimeout(() => {
      t.value = !0;
    }, l.showDelay)) : t.value = !0);
  }, u = () => {
    l.trigger !== "manual" && ((l.trigger === "hover" || l.trigger === "focus") && l.hideDelay ? (clearTimeout(s), v = window.setTimeout(() => {
      t.value = !1;
    }, l.hideDelay)) : t.value = !1);
  }, f = () => {
    l.disabled || l.trigger !== "manual" && (t.value = !t.value);
  }, C = (b) => {
    if (!l.closeOnClickOutside || !t.value || l.trigger === "manual") return;
    const h = b.target;
    r.value && !r.value.contains(h) && e.value && !e.value.contains(h) && u();
  }, k = (b, h) => {
    l.closeOnSelect && l.trigger !== "manual" && u(), a("select", b, h);
  }, c = (b, h) => {
    b.disabled || b.divider || b.value !== void 0 && k(b.value, h);
  };
  return $e(() => {
    l.closeOnClickOutside && document.addEventListener("click", C);
  }), Pe(() => {
    document.removeEventListener("click", C), s && clearTimeout(s), v && clearTimeout(v);
  }), {
    isVisible: t,
    triggerRef: e,
    contentRef: r,
    dropdownId: o,
    show: n,
    hide: u,
    toggle: f,
    handleItemClick: k,
    handleOptionClick: c
  };
}, $u = ["aria-expanded", "aria-controls"], Bu = ["id"], Vu = ["onClick", "aria-disabled"], Iu = /* @__PURE__ */ ee({
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
  setup(l, { expose: a, emit: t }) {
    const e = l, r = t, {
      isVisible: o,
      triggerRef: s,
      contentRef: v,
      dropdownId: n,
      show: u,
      hide: f,
      toggle: C,
      handleItemClick: k,
      handleOptionClick: c
    } = zu(e, r), b = g(() => {
      var T, L, P, F, B, E, I, N, _, Y;
      if (e.unstyled)
        return {
          root: ((T = e.pt) == null ? void 0 : T.root) || "",
          trigger: ((L = e.pt) == null ? void 0 : L.trigger) || "",
          content: ((P = e.pt) == null ? void 0 : P.content) || "",
          arrow: ((F = e.pt) == null ? void 0 : F.arrow) || "",
          menu: ((B = e.pt) == null ? void 0 : B.menu) || "",
          menuItem: ((E = e.pt) == null ? void 0 : E.menuItem) || "",
          menuItemSelected: ((I = e.pt) == null ? void 0 : I.menuItemSelected) || "",
          menuItemDisabled: ((N = e.pt) == null ? void 0 : N.menuItemDisabled) || "",
          menuItemIcon: ((_ = e.pt) == null ? void 0 : _.menuItemIcon) || "",
          menuDivider: ((Y = e.pt) == null ? void 0 : Y.menuDivider) || ""
        };
      const {
        root: h,
        trigger: i,
        content: d,
        arrow: m,
        menu: w,
        menuItem: z,
        menuItemSelected: M,
        menuItemActive: V,
        menuItemDisabled: A,
        menuItemIcon: D,
        menuDivider: O
      } = Ue({
        placement: e.placement,
        size: e.size,
        disabled: e.disabled
      });
      return {
        root: h(),
        trigger: i(),
        content: d(),
        arrow: m(),
        menu: w(),
        menuItem: z(),
        menuItemSelected: M(),
        menuItemActive: V(),
        menuItemDisabled: A(),
        menuItemIcon: D(),
        menuDivider: O()
      };
    });
    return a({
      show: u,
      hide: f,
      toggle: C
    }), Oe("dropdown", {
      handleItemClick: k,
      closeOnSelect: e.closeOnSelect
    }), (h, i) => (y(), x("div", {
      class: p(b.value.root)
    }, [
      $("div", {
        ref_key: "triggerRef",
        ref: s,
        class: p(b.value.trigger),
        onClick: i[0] || (i[0] = (d) => h.trigger === "click" && S(C)()),
        onMouseenter: i[1] || (i[1] = (d) => h.trigger === "hover" && S(u)()),
        onMouseleave: i[2] || (i[2] = (d) => h.trigger === "hover" && S(f)()),
        onFocus: i[3] || (i[3] = (d) => h.trigger === "focus" && S(u)()),
        onBlur: i[4] || (i[4] = (d) => h.trigger === "focus" && S(f)()),
        onKeydown: [
          i[5] || (i[5] = De(
            //@ts-ignore
            (...d) => S(f) && S(f)(...d),
            ["esc"]
          )),
          i[6] || (i[6] = De(Re((d) => h.trigger === "click" && S(C)(), ["prevent"]), ["space"])),
          i[7] || (i[7] = De((d) => h.trigger === "click" && S(C)(), ["enter"]))
        ],
        tabindex: "0",
        role: "button",
        "aria-haspopup": !0,
        "aria-expanded": S(o),
        "aria-controls": S(n)
      }, [
        K(h.$slots, "trigger")
      ], 42, $u),
      Le(ct, { name: "dropdown" }, {
        default: qe(() => [
          S(o) ? (y(), x("div", {
            key: 0,
            ref_key: "contentRef",
            ref: v,
            id: S(n),
            class: p(b.value.content),
            onMouseenter: i[8] || (i[8] = (d) => h.trigger === "hover" && S(u)()),
            onMouseleave: i[9] || (i[9] = (d) => h.trigger === "hover" && S(f)()),
            role: "menu"
          }, [
            h.arrow ? (y(), x("div", {
              key: 0,
              class: p(b.value.arrow)
            }, null, 2)) : H("", !0),
            $("div", {
              class: p(b.value.menu)
            }, [
              h.options && h.options.length ? (y(!0), x(ie, { key: 0 }, ve(h.options, (d, m) => (y(), x(ie, { key: m }, [
                d.divider ? (y(), x("div", {
                  key: 0,
                  class: p(b.value.menuDivider),
                  role: "separator"
                }, null, 2)) : (y(), x("div", {
                  key: 1,
                  class: p([
                    b.value.menuItem,
                    d.disabled && b.value.menuItemDisabled
                  ]),
                  onClick: (w) => !d.disabled && S(c)(d, w),
                  role: "menuitem",
                  "aria-disabled": d.disabled
                }, [
                  d.icon ? (y(), x("span", {
                    key: 0,
                    class: p(b.value.menuItemIcon)
                  }, U(d.icon), 3)) : H("", !0),
                  $("span", null, U(d.label), 1)
                ], 10, Vu))
              ], 64))), 128)) : K(h.$slots, "default", { key: 1 })
            ], 2)
          ], 42, Bu)) : H("", !0)
        ]),
        _: 3
      })
    ], 2));
  }
}), Mu = ["aria-disabled"], Du = /* @__PURE__ */ ee({
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
    const t = l, e = a, r = Ae("dropdown", {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      handleItemClick: (f, C) => {
      },
      closeOnSelect: !0
    }), o = (f) => {
      e("click", f), t.value !== void 0 && r.handleItemClick(t.value, f);
    }, s = (f) => {
      const C = new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0,
        view: window
      });
      e("click", C), t.value !== void 0 && r.handleItemClick(t.value, C);
    }, v = g(() => {
      var f, C;
      return t.unstyled ? ((f = t.pt) == null ? void 0 : f.root) || "" : [
        Ue().menuItem(),
        t.active && Ue().menuItemActive(),
        t.disabled && Ue().menuItemDisabled(),
        (C = t.pt) == null ? void 0 : C.root
      ].filter(Boolean).join(" ");
    }), n = g(() => {
      var f;
      return t.unstyled ? ((f = t.pt) == null ? void 0 : f.icon) || "" : Ue().menuItemIcon();
    }), u = g(() => {
      var f;
      return t.unstyled ? ((f = t.pt) == null ? void 0 : f.root) || "" : Ue().menuDivider();
    });
    return (f, C) => f.divider ? (y(), x("div", {
      key: 1,
      role: "separator",
      class: p(u.value)
    }, null, 2)) : (y(), x("div", {
      key: 0,
      class: p(v.value),
      role: "menuitem",
      tabindex: "0",
      "aria-disabled": f.disabled,
      onClick: C[0] || (C[0] = (k) => !f.disabled && o(k)),
      onKeydown: [
        C[1] || (C[1] = De((k) => !f.disabled && s(), ["enter"])),
        C[2] || (C[2] = De(Re((k) => !f.disabled && s(), ["prevent"]), ["space"]))
      ]
    }, [
      K(f.$slots, "icon", {}, () => [
        f.icon ? (y(), x("span", {
          key: 0,
          class: p(n.value)
        }, U(f.icon), 3)) : H("", !0)
      ]),
      K(f.$slots, "default", {}, () => [
        xe(U(f.label), 1)
      ])
    ], 42, Mu));
  }
}), Tu = /* @__PURE__ */ ee({
  __name: "DropdownDivider",
  props: {
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  setup(l) {
    const a = l, t = g(() => {
      var e, r;
      return a.unstyled ? ((e = a.pt) == null ? void 0 : e.root) || "" : [Ue().menuDivider(), (r = a.pt) == null ? void 0 : r.root].filter(Boolean).join(" ");
    });
    return (e, r) => (y(), x("div", {
      class: p(t.value),
      role: "separator"
    }, null, 2));
  }
}), Ru = le(Iu), Eu = le(Du), Lu = le(Tu), Au = R({
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
  const t = j(l.active || !1), e = g({
    get: () => l.active !== void 0 ? l.active : t.value,
    set: (s) => {
      l.disabled || (l.active === void 0 && (t.value = s), a("update:active", s), a("change", s));
    }
  }), r = () => {
    e.value = !e.value;
  };
  return {
    isActive: e,
    toggle: r,
    handleTrigger: (s) => {
      l.disabled || l.trigger === "click" && r();
    }
  };
}, _u = ["tabindex", "aria-checked", "aria-disabled"], Wu = /* @__PURE__ */ ee({
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
    const t = l, e = a, { isActive: r, handleTrigger: o } = ju(t, e), s = g(() => {
      var u, f;
      return t.unstyled ? ((u = t.pt) == null ? void 0 : u.root) || "" : Au({
        variant: t.variant,
        size: t.size,
        class: (f = t.pt) == null ? void 0 : f.root
      });
    }), v = g(() => {
      var u, f;
      return t.unstyled ? ((u = t.pt) == null ? void 0 : u.on) || "" : Ou({
        active: r.value,
        variant: t.variant,
        disabled: t.disabled,
        class: (f = t.pt) == null ? void 0 : f.on
      });
    }), n = g(() => {
      var u, f;
      return t.unstyled ? ((u = t.pt) == null ? void 0 : u.off) || "" : Pu({
        active: r.value,
        variant: t.variant,
        disabled: t.disabled,
        class: (f = t.pt) == null ? void 0 : f.off
      });
    });
    return (u, f) => (y(), x("div", {
      class: p(s.value),
      onClick: f[0] || (f[0] = (C) => t.trigger === "click" ? S(o)(C) : void 0),
      onMouseenter: f[1] || (f[1] = (C) => t.trigger === "hover" ? r.value = !0 : void 0),
      onMouseleave: f[2] || (f[2] = (C) => t.trigger === "hover" ? r.value = !1 : void 0),
      onFocus: f[3] || (f[3] = (C) => t.trigger === "focus" ? r.value = !0 : void 0),
      onBlur: f[4] || (f[4] = (C) => t.trigger === "focus" ? r.value = !1 : void 0),
      tabindex: t.trigger === "focus" ? 0 : void 0,
      "aria-checked": S(r),
      "aria-disabled": t.disabled,
      role: "switch"
    }, [
      $("div", {
        class: p(v.value)
      }, [
        K(u.$slots, "on")
      ], 2),
      $("div", {
        class: p(n.value)
      }, [
        K(u.$slots, "off")
      ], 2)
    ], 42, _u));
  }
}), Fu = le(Wu), Hu = R({
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
  const t = j(null), e = j(!0), r = j(!1), o = j(l.isZoomed || !1), s = (u) => {
    e.value = !1, a("load", u);
  }, v = (u) => {
    e.value = !1, r.value = !0, a("error", u);
  }, n = () => {
    l.isZoomable && (o.value = !o.value, a("zoom", o.value));
  };
  return ae(
    () => l.isZoomed,
    (u) => {
      u !== void 0 && (o.value = u);
    }
  ), ae(
    () => l.src,
    () => {
      e.value = !0, r.value = !1;
    }
  ), {
    imageRef: t,
    isLoading: e,
    isError: r,
    isZoomed: o,
    handleLoad: s,
    handleError: v,
    toggleZoom: n
  };
}, Uu = ["aria-label"], Xu = ["src", "alt", "loading"], qu = ["src", "alt"], Zu = {
  key: 3,
  class: "absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800"
}, Ju = { class: "text-gray-400 flex flex-col items-center" }, Qu = /* @__PURE__ */ ee({
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
  setup(l, { expose: a, emit: t }) {
    const e = l, r = t, {
      imageRef: o,
      isLoading: s,
      isError: v,
      isZoomed: n,
      handleLoad: u,
      handleError: f,
      toggleZoom: C
    } = Yu(e, r), k = () => {
      e.isZoomable && C();
    }, c = g(() => {
      var z, M;
      return e.unstyled ? ((z = e.pt) == null ? void 0 : z.root) || "" : Hu({
        fit: e.fit,
        radius: e.radius,
        isZoomable: e.isZoomable,
        isZoomed: n.value,
        class: (M = e.pt) == null ? void 0 : M.root
      });
    }), b = g(() => {
      var z, M;
      return e.unstyled ? ((z = e.pt) == null ? void 0 : z.img) || "" : `w-full h-full transition-transform ${n.value ? "scale-" + e.zoomScale : ""} ${((M = e.pt) == null ? void 0 : M.img) || ""}`;
    }), h = g(() => {
      var z, M;
      return e.unstyled ? ((z = e.pt) == null ? void 0 : z.skeleton) || "" : Nu({ class: (M = e.pt) == null ? void 0 : M.skeleton });
    }), i = g(() => {
      var z, M;
      return e.unstyled ? ((z = e.pt) == null ? void 0 : z.overlay) || "" : Gu({ visible: n.value, class: (M = e.pt) == null ? void 0 : M.overlay });
    }), d = g(() => {
      const z = {};
      return e.width !== "auto" && (z.width = typeof e.width == "number" ? `${e.width}px` : e.width), e.height !== "auto" && (z.height = typeof e.height == "number" ? `${e.height}px` : e.height), z;
    }), m = g(() => ({
      objectFit: e.fit
    })), w = g(() => e.skeletonColor ? { backgroundColor: e.skeletonColor } : {});
    return a({
      imageRef: o,
      isLoading: s,
      isError: v,
      isZoomed: n
    }), (z, M) => (y(), x("div", {
      class: p(c.value),
      style: ue(d.value),
      onClick: k,
      role: "img",
      "aria-label": z.alt
    }, [
      z.skeleton && S(s) ? (y(), x("div", {
        key: 0,
        class: p(h.value),
        style: ue(w.value)
      }, null, 6)) : H("", !0),
      $("img", {
        ref_key: "imageRef",
        ref: o,
        src: z.src,
        alt: z.alt,
        class: p(b.value),
        style: ue(m.value),
        loading: z.loading,
        onLoad: M[0] || (M[0] = //@ts-ignore
        (...V) => S(u) && S(u)(...V)),
        onError: M[1] || (M[1] = //@ts-ignore
        (...V) => S(f) && S(f)(...V))
      }, null, 46, Xu),
      z.blurred && S(s) ? (y(), x("img", {
        key: 1,
        src: z.src,
        alt: z.alt,
        class: "absolute inset-0 w-full h-full",
        style: ue({
          filter: `blur(${z.blurAmount}px)`,
          transform: "scale(1.1)",
          objectFit: z.fit
        })
      }, null, 12, qu)) : H("", !0),
      z.isZoomable && S(n).valueOf() ? (y(), x("div", {
        key: 2,
        class: p(i.value)
      }, [
        K(z.$slots, "zoom-icon", {}, () => [
          M[2] || (M[2] = bl('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>', 1))
        ])
      ], 2)) : H("", !0),
      S(v) ? (y(), x("div", Zu, [
        K(z.$slots, "error", {}, () => [
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
            $("span", null, U(z.alt || "图片加载失败"), 1)
          ])
        ])
      ])) : H("", !0)
    ], 14, Uu));
  }
}), ed = le(Qu), td = R({
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
  const t = (r) => {
    if (l.disabled) {
      r.preventDefault();
      return;
    }
    a("click", r);
  }, e = g(() => {
    const r = {};
    return l.href && (r.href = l.href), l.external && (r.target = "_blank", r.rel = "noopener noreferrer"), r;
  });
  return {
    handleClick: t,
    linkAttributes: e
  };
}, od = ["aria-disabled"], sd = /* @__PURE__ */ ee({
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
    const t = l, e = a, { handleClick: r, linkAttributes: o } = rd(t, e), s = g(() => {
      var n, u;
      return t.unstyled ? ((n = t.pt) == null ? void 0 : n.root) || "" : td({
        variant: t.variant,
        size: t.size,
        underline: t.underline,
        disabled: t.disabled,
        class: (u = t.pt) == null ? void 0 : u.root
      });
    }), v = (n) => {
      var u, f;
      return t.unstyled ? ((u = t.pt) == null ? void 0 : u.icon) || "" : ld({
        position: n,
        size: t.size,
        class: (f = t.pt) == null ? void 0 : f.icon
      });
    };
    return (n, u) => (y(), x("a", Kt({ class: s.value }, S(o), {
      onClick: u[0] || (u[0] = //@ts-ignore
      (...f) => S(r) && S(r)(...f)),
      "aria-disabled": n.disabled
    }), [
      n.iconPosition === "left" ? K(n.$slots, "icon-left", { key: 0 }, () => [
        n.$slots["icon-left"] ? (y(), x("span", {
          key: 0,
          class: p(v("left"))
        }, [
          K(n.$slots, "icon-left")
        ], 2)) : H("", !0)
      ]) : H("", !0),
      K(n.$slots, "default"),
      n.iconPosition === "right" ? K(n.$slots, "icon-right", { key: 1 }, () => [
        n.$slots["icon-right"] ? (y(), x("span", {
          key: 0,
          class: p(v("right"))
        }, [
          K(n.$slots, "icon-right")
        ], 2)) : H("", !0)
      ]) : H("", !0),
      n.external && !n.$slots["icon-right"] && n.iconPosition !== "left" ? (y(), x("span", {
        key: 2,
        class: p(v("right"))
      }, u[1] || (u[1] = [
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
      ]), 2)) : H("", !0)
    ], 16, od));
  }
}), nd = le(sd), id = R({
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
}, dd = ["tabindex"], cd = ["aria-hidden"], fd = ["tabindex", "disabled"], pd = ["tabindex", "disabled"], vd = ["onClick", "aria-label", "aria-current", "tabindex", "disabled"], gd = 50, bd = /* @__PURE__ */ ee({
  name: "Carousel",
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
    pauseOnHover: { type: Boolean, default: !0 },
    transitionDuration: { default: 500 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: ud,
  setup(l, { expose: a, emit: t }) {
    const e = l, r = t, o = Ze(), s = j(null), v = j(null), n = j(null), u = j(e.initialIndex), f = j(e.initialIndex), C = j(!1), k = j(!1), c = j(null), b = j(0), h = j(0), i = j(0), d = j(0), m = g(() => {
      if (!o) return 0;
      let G = 0;
      for (; o[`item-${G}`]; )
        G++;
      return G || 1;
    }), w = g(() => e.loop && m.value > 1), z = g(() => {
      const G = Array.from({ length: m.value }, (oe, je) => je);
      return w.value ? [G.length - 1, ...G, 0] : G;
    }), M = g(() => w.value ? 1 : 0), V = g(() => ({
      transform: `translateX(${-(f.value + M.value) * 100}%)`,
      transition: C.value ? `transform ${e.transitionDuration}ms ease-in-out` : "none"
    })), A = g(() => e.loop || u.value > 0), D = g(
      () => e.loop || u.value < m.value - 1
    ), O = (G) => `slide-${G}`, T = (G) => {
      const oe = z.value[G];
      return oe >= 0 && oe < m.value ? oe : 0;
    }, L = (G) => `item-${T(G)}`, P = g(
      () => {
        var G, oe;
        return e.unstyled ? ((G = e.pt) == null ? void 0 : G.root) || "" : id({
          variant: e.variant,
          size: e.size,
          class: (oe = e.pt) == null ? void 0 : oe.root
        });
      }
    ), F = g(
      () => {
        var G, oe;
        return e.unstyled ? ((G = e.pt) == null ? void 0 : G.container) || "" : `relative w-full h-full overflow-hidden ${((oe = e.pt) == null ? void 0 : oe.container) || ""}`;
      }
    ), B = g(
      () => {
        var G, oe;
        return e.unstyled ? ((G = e.pt) == null ? void 0 : G.track) || "" : `flex h-full w-full ${((oe = e.pt) == null ? void 0 : oe.track) || ""}`;
      }
    ), E = g(
      () => {
        var G, oe;
        return e.unstyled ? ((G = e.pt) == null ? void 0 : G.item) || "" : `h-full w-full flex-shrink-0 flex-grow-0 basis-full ${((oe = e.pt) == null ? void 0 : oe.item) || ""}`;
      }
    ), I = g(
      () => {
        var G, oe;
        return e.unstyled ? ((G = e.pt) == null ? void 0 : G.prevButton) || "" : `absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all dark:bg-black/60 dark:hover:bg-black/80 ${((oe = e.pt) == null ? void 0 : oe.prevButton) || ""}`;
      }
    ), N = g(
      () => {
        var G, oe;
        return e.unstyled ? ((G = e.pt) == null ? void 0 : G.nextButton) || "" : `absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all dark:bg-black/60 dark:hover:bg-black/80 ${((oe = e.pt) == null ? void 0 : oe.nextButton) || ""}`;
      }
    ), _ = g(
      () => {
        var G, oe;
        return e.unstyled ? ((G = e.pt) == null ? void 0 : G.indicators) || "" : `absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 ${((oe = e.pt) == null ? void 0 : oe.indicators) || ""}`;
      }
    ), Y = g(
      () => {
        var G, oe;
        return e.unstyled ? ((G = e.pt) == null ? void 0 : G.indicator) || "" : `w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/50 hover:bg-white/75 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 cursor-pointer ${((oe = e.pt) == null ? void 0 : oe.indicator) || ""}`;
      }
    ), X = g(
      () => {
        var G, oe;
        return e.unstyled ? ((G = e.pt) == null ? void 0 : G.activeIndicator) || "" : `w-6 h-2 md:w-8 md:h-3 rounded-full bg-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 cursor-pointer ${((oe = e.pt) == null ? void 0 : oe.activeIndicator) || ""}`;
      }
    ), ne = (G, oe) => {
      G !== oe && (r("change", G, oe), r("update:active-index", G));
    }, W = () => {
      if (e.disabled || C.value || m.value <= 1) return;
      const G = u.value;
      u.value < m.value - 1 ? (u.value++, f.value = u.value, C.value = !0, ne(u.value, G)) : w.value && (f.value = m.value, C.value = !0, u.value = 0, ne(0, G));
    }, Z = () => {
      if (e.disabled || C.value || m.value <= 1) return;
      const G = u.value;
      u.value > 0 ? (u.value--, f.value = u.value, C.value = !0, ne(u.value, G)) : w.value && (f.value = -1, C.value = !0, u.value = m.value - 1, ne(u.value, G));
    }, re = (G) => {
      if (e.disabled || C.value || G < 0 || G >= m.value || G === u.value)
        return;
      const oe = u.value;
      u.value = G, f.value = G, C.value = !0, ne(u.value, oe);
    }, se = (G) => {
      if (G.target === n.value) {
        if (!w.value) {
          C.value = !1;
          return;
        }
        f.value === m.value ? (C.value = !1, f.value = 0) : f.value === -1 ? (C.value = !1, f.value = m.value - 1) : C.value = !1;
      }
    }, pe = (G) => {
      !e.touchSwipe || e.disabled || (b.value = G.changedTouches[0].screenX, h.value = G.changedTouches[0].screenY, i.value = b.value, d.value = h.value);
    }, fe = (G) => {
      !e.touchSwipe || e.disabled || (i.value = G.changedTouches[0].screenX, d.value = G.changedTouches[0].screenY);
    }, ye = () => {
      if (!e.touchSwipe || e.disabled) return;
      const G = i.value - b.value, oe = d.value - h.value;
      Math.abs(G) > Math.abs(oe) && Math.abs(G) > gd && (G > 0 ? Z() : W()), b.value = 0, h.value = 0, i.value = 0, d.value = 0;
    }, ke = () => {
      e.pauseOnHover && e.autoplay && (k.value = !0);
    }, we = () => {
      e.pauseOnHover && e.autoplay && (k.value = !1);
    }, Ce = () => {
      e.autoplay && !e.disabled && !c.value && (c.value = setInterval(() => {
        k.value || W();
      }, e.interval));
    }, he = () => {
      c.value && (clearInterval(c.value), c.value = null);
    }, ge = () => {
      he(), e.autoplay && !e.disabled && Ce();
    }, Te = (G) => {
      !e.keyboardNavigation || e.disabled || (G.key === "ArrowLeft" ? (G.preventDefault(), Z()) : G.key === "ArrowRight" && (G.preventDefault(), W()));
    };
    return ae(
      () => e.autoplay,
      (G) => {
        G ? Ce() : he();
      }
    ), ae(
      () => e.disabled,
      (G) => {
        G ? he() : e.autoplay && Ce();
      }
    ), ae(() => e.interval, ge), ae(u, () => {
      ge();
    }), ae(
      () => e.initialIndex,
      (G) => {
        G >= 0 && G < m.value && (u.value = G, f.value = G, C.value = !1);
      }
    ), ae(w, async () => {
      C.value = !1, f.value = u.value, await Se();
    }), $e(() => {
      e.autoplay && Ce(), e.touchSwipe && s.value && (s.value.addEventListener("touchstart", pe, {
        passive: !0
      }), s.value.addEventListener("touchmove", fe, {
        passive: !0
      }), s.value.addEventListener("touchend", ye, {
        passive: !0
      }));
    }), He(() => {
      he(), s.value && (s.value.removeEventListener("touchstart", pe), s.value.removeEventListener("touchmove", fe), s.value.removeEventListener("touchend", ye));
    }), a({
      next: W,
      prev: Z,
      goToSlide: re,
      startAutoplay: Ce,
      stopAutoplay: he
    }), (G, oe) => (y(), x("div", {
      class: p(P.value),
      ref_key: "rootRef",
      ref: s,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": "Carousel",
      tabindex: G.disabled ? -1 : 0,
      onMouseenter: ke,
      onMouseleave: we,
      onKeydown: Te
    }, [
      $("div", {
        class: p(F.value),
        ref_key: "containerRef",
        ref: v
      }, [
        $("div", {
          class: p(B.value),
          ref_key: "trackRef",
          ref: n,
          style: ue(V.value),
          onTransitionend: se
        }, [
          (y(!0), x(ie, null, ve(z.value, (je, be) => (y(), x("div", {
            key: O(be),
            class: p(E.value),
            role: "group",
            "aria-roledescription": "slide",
            "aria-hidden": T(be) !== u.value
          }, [
            K(G.$slots, L(be))
          ], 10, cd))), 128))
        ], 38)
      ], 2),
      G.navigation && !G.disabled ? (y(), x(ie, { key: 0 }, [
        A.value ? (y(), x("button", {
          key: 0,
          class: p(I.value),
          onClick: Z,
          "aria-label": "Previous slide",
          tabindex: G.disabled ? -1 : 0,
          type: "button",
          disabled: C.value
        }, [
          K(G.$slots, "prev-icon", {}, () => [
            oe[0] || (oe[0] = $("svg", {
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
        ], 10, fd)) : H("", !0),
        D.value ? (y(), x("button", {
          key: 1,
          class: p(N.value),
          onClick: W,
          "aria-label": "Next slide",
          tabindex: G.disabled ? -1 : 0,
          type: "button",
          disabled: C.value
        }, [
          K(G.$slots, "next-icon", {}, () => [
            oe[1] || (oe[1] = $("svg", {
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
        ], 10, pd)) : H("", !0)
      ], 64)) : H("", !0),
      G.indicators && !G.disabled ? (y(), x("div", {
        key: 1,
        class: p(_.value)
      }, [
        (y(!0), x(ie, null, ve(m.value, (je, be) => (y(), x("button", {
          key: be,
          class: p([
            be === u.value ? X.value : Y.value
          ]),
          onClick: (ze) => re(be),
          "aria-label": `Go to slide ${be + 1}`,
          "aria-current": be === u.value ? "true" : void 0,
          tabindex: G.disabled ? -1 : 0,
          type: "button",
          disabled: C.value
        }, null, 10, vd))), 128))
      ], 2)) : H("", !0)
    ], 42, dd));
  }
}), md = le(bd), yd = R({
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
}), hd = (l) => l.type ? l.type : l.src ? "image" : l.title || l.description ? "card" : "text", cl = (l, a) => typeof l == "string" ? {
  id: `item-${a}`,
  type: "text",
  content: l
} : {
  id: `item-${a}`,
  type: hd(l),
  content: l.content ?? l.title ?? l.src ?? "",
  src: l.src,
  alt: l.alt,
  title: l.title,
  description: l.description,
  backgroundColor: l.backgroundColor,
  textColor: l.textColor,
  borderRadius: l.borderRadius
}, wd = (l, a) => {
  const t = typeof l == "string" ? Number(l) : l;
  return typeof t != "number" || Number.isNaN(t) || t <= 0 ? a : t;
}, Gt = (l, a) => l ? [cl(l, a)] : [];
function xd(l) {
  const a = g(() => (l.items ?? []).map((c, b) => cl(c, b))), t = g(() => Gt(l.prefix, "prefix")), e = g(() => Gt(l.suffix, "suffix")), r = g(() => {
    const c = a.value;
    if (!c.length) return [];
    const h = l.autofill && c.some((d) => d.type === "image") ? Math.max(4, c.length) : c.length, i = [];
    for (let d = 0; i.length < h; d += 1)
      for (const m of c)
        i.push({
          ...m,
          id: `${m.id}-copy-${d}-${i.length}`
        });
    return i;
  }), o = g(() => [...t.value, ...r.value, ...e.value]), s = g(() => ({
    height: l.height,
    backgroundColor: l.backgroundColor,
    color: l.textColor,
    borderRadius: l.borderRadius
  })), v = g(() => ({})), n = g(() => ({
    gap: l.gap,
    paddingInlineEnd: l.gap
  })), u = g(() => ({
    minWidth: "max-content"
  })), f = (c) => ({
    backgroundColor: c.backgroundColor ?? "rgba(255, 255, 255, 0.86)",
    color: c.textColor ?? l.textColor,
    borderRadius: c.borderRadius ?? l.borderRadius,
    padding: "0.75rem 1rem"
  }), C = (c) => ({
    borderRadius: c.borderRadius ?? l.borderRadius
  }), k = g(() => wd(l.duration, 20));
  return {
    displayItems: o,
    coreItems: r,
    prefixItems: t,
    suffixItems: e,
    rootStyles: s,
    trackStyles: v,
    groupStyles: n,
    itemStyles: u,
    cardStyle: f,
    imageStyle: C,
    duration: k
  };
}
const kd = ["src", "alt"], Cd = ["aria-hidden"], Sd = ["src", "alt"], zd = ["src", "alt"], $d = /* @__PURE__ */ ee({
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
    const a = l, t = Ze(), e = yd(), r = j(null), o = j(null), s = j(null), v = j(null), n = j(0), u = j(0), f = j(1), C = j(!1), k = j(!1);
    let c = null, b = 0, h = 0, i = null;
    const d = /* @__PURE__ */ new Set(), {
      coreItems: m,
      rootStyles: w,
      trackStyles: z,
      groupStyles: M,
      itemStyles: V,
      cardStyle: A,
      imageStyle: D,
      duration: O
    } = xd(a), T = g(() => !!t.default), L = g(() => a.loop && n.value > 0), P = g(() => L.value ? 2 : 1), F = g(
      () => Array.from(
        { length: f.value },
        (q, te) => m.value.map((de) => ({
          ...de,
          id: `${de.id}-repeat-${te}`
        }))
      ).flat()
    ), B = g(() => {
      var de;
      if (!T.value || !a.loop) return 1;
      if (u.value <= 0) return 4;
      const q = ((de = r.value) == null ? void 0 : de.getBoundingClientRect().width) ?? 0, te = Math.ceil(q * 2.2 / u.value) + 1;
      return Math.max(4, Math.min(12, te));
    }), E = g(
      () => {
        var q, te;
        return a.unstyled ? ((q = a.pt) == null ? void 0 : q.root) || "" : e.root({ class: (te = a.pt) == null ? void 0 : te.root });
      }
    ), I = g(
      () => {
        var q, te;
        return a.unstyled ? ((q = a.pt) == null ? void 0 : q.viewport) || "" : e.viewport({ class: (te = a.pt) == null ? void 0 : te.viewport });
      }
    ), N = g(
      () => {
        var q, te;
        return a.unstyled ? ((q = a.pt) == null ? void 0 : q.track) || "" : e.track({ class: (te = a.pt) == null ? void 0 : te.track });
      }
    ), _ = g(
      () => {
        var q, te;
        return a.unstyled ? ((q = a.pt) == null ? void 0 : q.group) || "" : e.group({ class: (te = a.pt) == null ? void 0 : te.group });
      }
    ), Y = g(
      () => {
        var q, te;
        return a.unstyled ? ((q = a.pt) == null ? void 0 : q.item) || "" : e.item({ class: (te = a.pt) == null ? void 0 : te.item });
      }
    ), X = g(
      () => {
        var q, te;
        return a.unstyled ? ((q = a.pt) == null ? void 0 : q.image) || "" : e.image({ class: (te = a.pt) == null ? void 0 : te.image });
      }
    ), ne = g(
      () => {
        var q, te;
        return a.unstyled ? ((q = a.pt) == null ? void 0 : q.card) || "" : e.card({ class: (te = a.pt) == null ? void 0 : te.card });
      }
    ), W = g(
      () => {
        var q, te;
        return a.unstyled ? ((q = a.pt) == null ? void 0 : q.cardTitle) || "" : e.cardTitle({ class: (te = a.pt) == null ? void 0 : te.cardTitle });
      }
    ), Z = g(
      () => {
        var q, te;
        return a.unstyled ? ((q = a.pt) == null ? void 0 : q.cardDescription) || "" : e.cardDescription({ class: (te = a.pt) == null ? void 0 : te.cardDescription });
      }
    ), re = g(
      () => {
        var q, te;
        return a.unstyled ? ((q = a.pt) == null ? void 0 : q.text) || "" : e.text({ class: (te = a.pt) == null ? void 0 : te.text });
      }
    ), se = g(() => ({
      ...z.value,
      visibility: k.value ? "visible" : "hidden"
    })), pe = (q) => {
      if (!o.value) return;
      if (!n.value || !L.value) {
        o.value.style.transform = "translate3d(0, 0, 0)";
        return;
      }
      const te = (q % n.value + n.value) % n.value, de = a.direction === "right" ? -n.value + te : -te;
      o.value.style.transform = `translate3d(${de}px, 0, 0)`;
    }, fe = () => {
      var At, Ot, Pt;
      const q = ((At = s.value) == null ? void 0 : At.getBoundingClientRect().width) ?? 0, te = ((Ot = v.value) == null ? void 0 : Ot.getBoundingClientRect().width) ?? 0;
      if (!q) {
        n.value = 0, u.value = 0, k.value = !1;
        return;
      }
      const de = ((Pt = r.value) == null ? void 0 : Pt.getBoundingClientRect().width) ?? 0, me = T.value ? te || q : q / Math.max(1, f.value), Ne = de * 2.2, rt = !a.loop || me <= 0 ? 1 : Math.min(6, Math.max(1, Math.ceil(Ne / me)));
      if (!T.value && rt !== f.value) {
        f.value = rt, Se(fe);
        return;
      }
      n.value = q, u.value = T.value ? te : 0, h = q ? h % q : 0, k.value = !0, pe(h);
    }, ye = () => {
      c !== null && cancelAnimationFrame(c), c = null, b = 0;
    }, ke = (q) => {
      b || (b = q);
      const te = Math.min(q - b, 64);
      if (b = q, !C.value && L.value && n.value > 0) {
        for (h += n.value / (O.value * 1e3) * te; h >= n.value; ) h -= n.value;
        pe(h);
      }
      c = requestAnimationFrame(ke);
    }, we = () => {
      ye(), c = requestAnimationFrame(ke);
    }, Ce = () => Se(fe), he = () => {
      d.forEach((q) => {
        q.removeEventListener("load", Ce), q.removeEventListener("error", Ce);
      }), d.clear();
    }, ge = () => {
      he(), o.value && o.value.querySelectorAll("img").forEach((q) => {
        q.addEventListener("load", Ce), q.addEventListener("error", Ce), d.add(q);
      });
    }, Te = async () => {
      await Se(), ge(), fe();
    }, G = () => {
      a.pauseOnHover && (C.value = !0);
    }, oe = () => {
      a.pauseOnHover && (C.value = !1);
    }, je = (q, te) => {
      if (!q) return null;
      const de = typeof q == "string" ? { type: "text", content: q } : q;
      return {
        id: `${te}-fixed`,
        type: de.type ?? (de.src ? "image" : "text"),
        content: de.content ?? de.title ?? de.src ?? "",
        src: de.src,
        alt: de.alt,
        title: de.title,
        description: de.description,
        backgroundColor: de.backgroundColor,
        textColor: de.textColor,
        borderRadius: de.borderRadius
      };
    }, be = g(() => je(a.prefix, "prefix")), ze = g(() => je(a.suffix, "suffix")), at = (q, te) => {
      var me, Ne;
      const de = { target: q, item: te };
      q === "prefix" ? (me = a.onPrefixClick) == null || me.call(a, de) : (Ne = a.onSuffixClick) == null || Ne.call(a, de);
    }, Je = (q) => q.alt || q.content || "Runhorselight image";
    return $e(() => {
      Te(), typeof ResizeObserver < "u" ? (i = new ResizeObserver(() => fe()), r.value && i.observe(r.value), s.value && i.observe(s.value), v.value && i.observe(v.value)) : window.addEventListener("resize", fe), we();
    }), Pe(() => {
      ye(), he(), i == null || i.disconnect(), i = null, window.removeEventListener("resize", fe);
    }), ae(
      [
        () => a.items,
        () => a.gap,
        () => a.height,
        () => a.loop,
        () => a.direction,
        () => a.autofill,
        () => T.value,
        () => a.prefix,
        () => a.suffix
      ],
      () => {
        f.value = 1, h = 0, Te();
      },
      { deep: !0 }
    ), ae(
      () => a.pauseOnHover,
      (q) => {
        q || (C.value = !1);
      }
    ), (q, te) => (y(), x("div", {
      class: p([E.value, "flex items-center gap-4"]),
      style: ue(S(w)),
      onMouseenter: G,
      onMouseleave: oe
    }, [
      be.value ? (y(), x("div", {
        key: 0,
        class: p([Y.value, "shrink-0 px-2"]),
        style: ue(S(V)),
        onClick: te[0] || (te[0] = (de) => at("prefix", be.value))
      }, [
        K(q.$slots, "prefix", {
          item: be.value,
          target: "prefix"
        }, () => [
          be.value.type === "image" ? (y(), x("img", {
            key: 0,
            src: be.value.src,
            alt: Je(be.value),
            class: p(X.value),
            style: ue(S(D)(be.value)),
            draggable: "false"
          }, null, 14, kd)) : be.value.type === "card" ? (y(), x("div", {
            key: 1,
            class: p(ne.value),
            style: ue(S(A)(be.value))
          }, [
            $("div", {
              class: p(W.value)
            }, U(be.value.title || be.value.content), 3),
            be.value.description ? (y(), x("div", {
              key: 0,
              class: p(Z.value)
            }, U(be.value.description), 3)) : H("", !0)
          ], 6)) : (y(), x("span", {
            key: 2,
            class: p(re.value),
            style: ue({ color: be.value.textColor || a.textColor })
          }, U(be.value.content), 7))
        ], !0)
      ], 6)) : H("", !0),
      $("div", {
        ref_key: "viewportRef",
        ref: r,
        class: p(I.value)
      }, [
        T.value ? (y(), x("div", {
          key: 0,
          ref_key: "slotMeasureRef",
          ref: v,
          class: "pointer-events-none absolute -z-10 whitespace-nowrap opacity-0",
          style: ue(S(V)),
          "aria-hidden": "true"
        }, [
          K(q.$slots, "default", {}, void 0, !0)
        ], 4)) : H("", !0),
        $("div", {
          ref_key: "trackRef",
          ref: o,
          class: p(N.value),
          style: ue(se.value)
        }, [
          (y(!0), x(ie, null, ve(P.value, (de) => (y(), x("div", {
            key: de,
            ref_for: !0,
            ref: de === 1 ? (me) => s.value = me : void 0,
            class: p(_.value),
            style: ue(S(M)),
            "aria-hidden": de > 1
          }, [
            T.value ? (y(!0), x(ie, { key: 0 }, ve(B.value, (me) => (y(), x("div", {
              key: `slot-${de}-${me}`,
              class: p(Y.value),
              style: ue(S(V))
            }, [
              K(q.$slots, "default", {}, void 0, !0)
            ], 6))), 128)) : (y(!0), x(ie, { key: 1 }, ve(F.value, (me) => (y(), x("div", {
              key: `${de}-${me.id}`,
              class: p(Y.value),
              style: ue(S(V))
            }, [
              K(q.$slots, "item", { item: me }, () => [
                me.type === "image" ? (y(), x("img", {
                  key: 0,
                  src: me.src,
                  alt: Je(me),
                  class: p(X.value),
                  style: ue(S(D)(me)),
                  draggable: "false"
                }, null, 14, Sd)) : me.type === "card" ? (y(), x("div", {
                  key: 1,
                  class: p(ne.value),
                  style: ue(S(A)(me))
                }, [
                  $("div", {
                    class: p(W.value)
                  }, U(me.title || me.content), 3),
                  me.description ? (y(), x("div", {
                    key: 0,
                    class: p(Z.value)
                  }, U(me.description), 3)) : H("", !0)
                ], 6)) : (y(), x("span", {
                  key: 2,
                  class: p(re.value),
                  style: ue({ color: me.textColor || a.textColor })
                }, U(me.content), 7))
              ], !0)
            ], 6))), 128))
          ], 14, Cd))), 128))
        ], 6)
      ], 2),
      ze.value ? (y(), x("div", {
        key: 1,
        class: p([Y.value, "shrink-0 px-2"]),
        style: ue(S(V)),
        onClick: te[1] || (te[1] = (de) => at("suffix", ze.value))
      }, [
        K(q.$slots, "suffix", {
          item: ze.value,
          target: "suffix"
        }, () => [
          ze.value.type === "image" ? (y(), x("img", {
            key: 0,
            src: ze.value.src,
            alt: Je(ze.value),
            class: p(X.value),
            style: ue(S(D)(ze.value)),
            draggable: "false"
          }, null, 14, zd)) : ze.value.type === "card" ? (y(), x("div", {
            key: 1,
            class: p(ne.value),
            style: ue(S(A)(ze.value))
          }, [
            $("div", {
              class: p(W.value)
            }, U(ze.value.title || ze.value.content), 3),
            ze.value.description ? (y(), x("div", {
              key: 0,
              class: p(Z.value)
            }, U(ze.value.description), 3)) : H("", !0)
          ], 6)) : (y(), x("span", {
            key: 2,
            class: p(re.value),
            style: ue({ color: ze.value.textColor || a.textColor })
          }, U(ze.value.content), 7))
        ], !0)
      ], 6)) : H("", !0)
    ], 38));
  }
}), Bd = /* @__PURE__ */ lt($d, [["__scopeId", "data-v-6928f10a"]]), Vd = le(Bd), Id = R({
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
}), Md = {}, Dd = {}, Td = /* @__PURE__ */ ee({
  name: "Timeline",
  __name: "timeline",
  props: {
    orientation: { default: "vertical" },
    align: { default: "left" },
    reverse: { type: Boolean, default: !1 },
    unstyled: { type: Boolean, default: !1 },
    pt: {}
  },
  emits: Md,
  setup(l) {
    const a = l;
    Oe("timelineAlign", a.align), Oe("timelineOrientation", a.orientation);
    const t = g(() => {
      var r, o;
      return a.unstyled ? ((r = a.pt) == null ? void 0 : r.root) || "" : Id({
        orientation: a.orientation,
        align: a.align,
        class: (o = a.pt) == null ? void 0 : o.root
      });
    }), e = g(() => a.reverse ? { flexDirection: "column-reverse" } : {});
    return (r, o) => (y(), x("div", {
      class: p(t.value),
      style: ue(e.value)
    }, [
      K(r.$slots, "default")
    ], 6));
  }
}), Rd = /* @__PURE__ */ ee({
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
  emits: Dd,
  setup(l) {
    const a = l, t = Ae(
      "timelineAlign",
      "left"
    ), e = Ae(
      "timelineOrientation",
      "vertical"
    ), r = g(() => t === "alternate"), o = g(() => {
      var b, h, i;
      if (a.unstyled)
        return ((b = a.pt) == null ? void 0 : b.root) || "";
      const c = "relative flex";
      return e === "vertical" ? `${c} ${t === "right" ? "flex-row-reverse" : "flex-row"} ${((h = a.pt) == null ? void 0 : h.root) || ""}` : `${c} min-w-0 flex-1 flex-col items-center ${((i = a.pt) == null ? void 0 : i.root) || ""}`;
    }), s = g(() => {
      var b, h, i;
      if (a.unstyled)
        return ((b = a.pt) == null ? void 0 : b.dot) || "";
      const c = "relative z-10 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center";
      return e === "vertical" ? `${c} ${t === "right" ? "ml-3" : "mr-3"} ${((h = a.pt) == null ? void 0 : h.dot) || ""}` : `${c} mt-0 ${((i = a.pt) == null ? void 0 : i.dot) || ""}`;
    }), v = g(() => {
      var c, b, h;
      return a.unstyled ? ((c = a.pt) == null ? void 0 : c.connector) || "" : e === "vertical" ? `absolute top-5 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 ${t === "right" ? "right-2.5" : "left-2.5"} ${((b = a.pt) == null ? void 0 : b.connector) || ""}` : `absolute left-1/2 right-0 top-2.5 h-0.5 bg-gray-300 dark:bg-gray-600 ${((h = a.pt) == null ? void 0 : h.connector) || ""}`;
    }), n = g(() => {
      var c, b, h;
      return a.unstyled ? ((c = a.pt) == null ? void 0 : c.content) || "" : e === "horizontal" ? `mt-2 w-full text-center ${((b = a.pt) == null ? void 0 : b.content) || ""}` : `flex-1 ${((h = a.pt) == null ? void 0 : h.content) || ""}`;
    }), u = g(() => {
      var c, b;
      return a.unstyled ? ((c = a.pt) == null ? void 0 : c.opposite) || "" : `flex-1 text-right ${((b = a.pt) == null ? void 0 : b.opposite) || ""}`;
    }), f = g(() => a.dotColor ? { borderColor: a.dotColor, backgroundColor: a.dotColor } : {}), C = g(() => a.lineColor ? { backgroundColor: a.lineColor } : {}), k = g(() => {
      const c = {};
      return a.dotColor && !a.unstyled && (a.lineColor || (c["--line-color"] = a.dotColor)), c;
    });
    return (c, b) => (y(), x("div", {
      class: p(["timeline-item", o.value]),
      style: ue(k.value)
    }, [
      $("div", {
        class: p(["timeline-dot", s.value])
      }, [
        K(c.$slots, "dot", {}, () => {
          var h;
          return [
            $("div", {
              class: p([
                "h-3 w-3 rounded-full border-2 border-gray-300 bg-white dark:border-gray-500 dark:bg-gray-900",
                (h = a.pt) == null ? void 0 : h.dot
              ]),
              style: ue(f.value)
            }, null, 6)
          ];
        })
      ], 2),
      a.isLast ? H("", !0) : (y(), x("div", {
        key: 0,
        class: p(["timeline-connector", v.value]),
        style: ue(C.value)
      }, null, 6)),
      $("div", {
        class: p(n.value)
      }, [
        K(c.$slots, "default")
      ], 2),
      r.value ? (y(), x("div", {
        key: 1,
        class: p(u.value)
      }, [
        K(c.$slots, "opposite")
      ], 2)) : H("", !0)
    ], 6));
  }
}), Ed = le(Td), Ld = le(Rd), pt = j([]);
let Ad = 0;
const Od = (l) => {
  const a = `toast-${Ad++}`, t = {
    id: a,
    visible: !0,
    ...l
  };
  return pt.value.push(t), a;
}, fl = (l) => {
  const a = pt.value.findIndex((t) => t.id === l);
  a !== -1 && pt.value.splice(a, 1);
}, Pd = () => {
  pt.value = [];
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
}), jd = ["innerHTML"], _d = { class: "flex-1" }, Wd = /* @__PURE__ */ ee({
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
    const t = l, e = a, { type: r = "info", duration: o = 3e3 } = t, s = g(() => yt().base({ type: t.type })), v = g(() => yt().icon({ type: t.type })), n = g(
      () => yt().description({ type: t.type })
    ), u = g(
      () => yt().closeButton({ type: t.type })
    ), f = {
      info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" /></svg>',
      success: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" /></svg>',
      warning: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" /></svg>',
      error: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" /></svg>'
    };
    let C;
    const k = j(o), c = j(0), b = () => {
      o <= 0 || (c.value = Date.now(), C = setTimeout(() => {
        m();
      }, k.value));
    }, h = () => {
      o <= 0 || (clearTimeout(C), k.value -= Date.now() - c.value);
    }, i = () => {
      o <= 0 || b();
    }, d = () => {
      m();
    }, m = () => {
      e("close", t.id), t.onClose && t.onClose(t.id);
    };
    return $e(() => {
      b();
    }), He(() => {
      clearTimeout(C);
    }), (w, z) => (y(), x("div", {
      class: p(s.value),
      role: "alert",
      onMouseenter: h,
      onMouseleave: i
    }, [
      $("div", {
        class: p(v.value)
      }, [
        K(w.$slots, "icon", {}, () => [
          $("span", {
            innerHTML: f[S(r) || "info"]
          }, null, 8, jd)
        ])
      ], 2),
      $("div", _d, [
        $("div", {
          class: p(n.value)
        }, U(w.message), 3)
      ]),
      (y(), x("button", {
        key: 0,
        type: "button",
        class: p(u.value),
        "aria-label": "Close",
        onClick: d
      }, z[0] || (z[0] = [
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
}), Fd = { class: "pointer-events-none fixed inset-0 z-[9999] overflow-hidden" }, pl = /* @__PURE__ */ ee({
  __name: "ToastContainer",
  setup(l) {
    const a = [
      "top-left",
      "top-right",
      "bottom-left",
      "bottom-right",
      "top-center",
      "bottom-center"
    ], t = (s) => pt.value.filter((v) => (v.position || "top-right") === s), e = (s) => {
      fl(s);
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
      const v = s.includes("top"), n = s.includes("center"), u = s.includes("right");
      let f = "", C = "";
      return n ? (f = v ? "-translate-y-full opacity-0" : "translate-y-full opacity-0", C = v ? "-translate-y-full opacity-0" : "translate-y-full opacity-0") : v ? u ? (f = "translate-x-full opacity-0", C = "translate-x-full opacity-0") : (f = "-translate-x-full opacity-0", C = "-translate-x-full opacity-0") : (f = "translate-y-full opacity-0", C = "translate-y-full opacity-0"), {
        enter: "transition-all duration-300 ease-out",
        leave: "transition-all duration-200 ease-in absolute w-full",
        enterFrom: f,
        leaveTo: C
      };
    };
    return (s, v) => (y(), x("div", Fd, [
      (y(), x(ie, null, ve(a, (n) => $("div", {
        key: n,
        class: p([
          "absolute flex w-full flex-col gap-4 p-4 md:max-w-[420px]",
          r(n)
        ])
      }, [
        Le(ml, {
          tag: "div",
          "enter-active-class": o(n).enter,
          "leave-active-class": o(n).leave,
          "enter-from-class": o(n).enterFrom,
          "leave-to-class": o(n).leaveTo,
          "move-class": "transition-all duration-300 ease-in-out",
          class: "flex flex-col gap-4 w-full"
        }, {
          default: qe(() => [
            (y(!0), x(ie, null, ve(t(n), (u) => (y(), Ee(Wd, Kt({
              key: u.id
            }, { ref_for: !0 }, u, { onClose: e }), null, 16))), 128))
          ]),
          _: 2
        }, 1032, ["enter-active-class", "leave-active-class", "enter-from-class", "leave-to-class"])
      ], 2)), 64))
    ]));
  }
});
let nt = null;
const Hd = () => {
  if (typeof document > "u" || nt) return;
  nt = document.createElement("div"), nt.id = "versakit-toast-container", document.body.appendChild(nt);
  const l = Le(pl);
  yl(l, nt);
}, it = (l) => (Hd(), Od(l)), hc = {
  success: (l, a) => it({ ...a, message: l, type: "success" }),
  error: (l, a) => it({ ...a, message: l, type: "error" }),
  warning: (l, a) => it({ ...a, message: l, type: "warning" }),
  info: (l, a) => it({ ...a, message: l, type: "info" }),
  show: (l) => it(l),
  remove: (l) => fl(l),
  removeAll: () => Pd()
}, Nd = /* @__PURE__ */ ee({
  __name: "Steps",
  props: {
    current: { default: 0 },
    direction: { default: "horizontal" },
    status: { default: "process" }
  },
  emits: ["update:current", "change"],
  setup(l, { emit: a }) {
    const t = l, e = a, r = j([]), o = (n) => {
      r.value.push(n);
    }, s = (n) => {
      const u = r.value.indexOf(n);
      u !== -1 && r.value.splice(u, 1);
    }, v = (n) => {
      n !== t.current && (e("update:current", n), e("change", n));
    };
    return Oe("steps-context", {
      current: Me(t, "current"),
      direction: Me(t, "direction"),
      status: Me(t, "status"),
      steps: r,
      registerStep: o,
      unregisterStep: s,
      onChange: v
    }), (n, u) => (y(), x("div", {
      class: p([
        "flex w-full gap-4",
        n.direction === "vertical" ? "flex-col" : "flex-row items-center"
      ])
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), Gd = { class: "relative z-10 flex flex-col items-center" }, Kd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  class: "h-5 w-5"
}, Yd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  class: "h-5 w-5"
}, Ud = { key: 2 }, Xd = {
  key: 0,
  class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
}, qd = /* @__PURE__ */ ee({
  __name: "StepItem",
  props: {
    title: {},
    description: {},
    status: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(l) {
    const a = l, t = Ae("steps-context"), e = Symbol("step-item");
    $e(() => {
      t == null || t.registerStep(e);
    }), He(() => {
      t == null || t.unregisterStep(e);
    });
    const r = g(() => (t == null ? void 0 : t.steps.value.indexOf(e)) ?? -1), o = g(() => r.value === ((t == null ? void 0 : t.steps.value.length) ?? 0) - 1), s = g(() => {
      if (a.status) return a.status;
      if (!t) return "wait";
      const k = t.current.value;
      return r.value < k ? "finish" : r.value === k ? t.status.value : "wait";
    }), v = g(() => s.value === "finish"), n = g(() => s.value === "process"), u = g(() => !a.disabled && t), f = g(() => {
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
      u.value && t && t.onChange(r.value);
    };
    return (k, c) => {
      var b, h, i;
      return y(), x("div", {
        class: p([
          "relative flex flex-1",
          ((b = S(t)) == null ? void 0 : b.direction.value) === "vertical" ? "flex-col pb-8 last:pb-0" : "flex-row items-center last:flex-none",
          u.value ? "cursor-pointer" : "cursor-default"
        ]),
        onClick: C
      }, [
        o.value ? H("", !0) : (y(), x("div", {
          key: 0,
          class: p([
            "absolute transition-colors duration-300",
            ((h = S(t)) == null ? void 0 : h.direction.value) === "vertical" ? "left-[15px] top-[30px] h-[calc(100%-10px)] w-[2px]" : "left-[50%] right-[-50%] top-[15px] h-[2px] w-full",
            v.value ? "bg-blue-500" : "bg-gray-200 dark:bg-gray-700"
          ])
        }, null, 2)),
        $("div", Gd, [
          $("div", {
            class: p([
              "flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300",
              f.value
            ])
          }, [
            K(k.$slots, "icon", {}, () => [
              s.value === "finish" ? (y(), x("svg", Kd, c[0] || (c[0] = [
                $("path", {
                  "fill-rule": "evenodd",
                  d: "M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z",
                  "clip-rule": "evenodd"
                }, null, -1)
              ]))) : s.value === "error" ? (y(), x("svg", Yd, c[1] || (c[1] = [
                $("path", {
                  "fill-rule": "evenodd",
                  d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
                  "clip-rule": "evenodd"
                }, null, -1)
              ]))) : (y(), x("span", Ud, U(r.value + 1), 1))
            ])
          ], 2)
        ]),
        $("div", {
          class: p([
            "flex flex-col",
            ((i = S(t)) == null ? void 0 : i.direction.value) === "vertical" ? "ml-4 mt-0.5" : "absolute top-8 left-1/2 -translate-x-1/2 w-max max-w-[120px] text-center mt-2"
          ])
        }, [
          $("div", {
            class: p([
              "text-sm font-medium transition-colors duration-300",
              n.value || v.value ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400",
              s.value === "error" ? "text-red-500" : ""
            ])
          }, [
            K(k.$slots, "title", {}, () => [
              xe(U(k.title), 1)
            ])
          ], 2),
          k.description || k.$slots.description ? (y(), x("div", Xd, [
            K(k.$slots, "description", {}, () => [
              xe(U(k.description), 1)
            ])
          ])) : H("", !0)
        ], 2)
      ], 2);
    };
  }
}), Zd = ["value", "checked", "disabled"], Jd = /* @__PURE__ */ ee({
  __name: "Radio",
  props: {
    modelValue: { type: [String, Number, Boolean] },
    label: { type: [String, Number, Boolean] },
    disabled: { type: Boolean, default: !1 },
    size: {}
  },
  emits: ["update:modelValue", "change"],
  setup(l, { emit: a }) {
    const t = l, e = a, r = Ae("radio-group", null), o = g(() => r ? r.modelValue.value === t.label : t.modelValue === t.label), s = g(() => (r == null ? void 0 : r.disabled.value) || !1 || t.disabled), v = g(() => (r == null ? void 0 : r.size.value) || t.size || "md"), n = g(() => {
      switch (v.value) {
        case "sm":
          return "h-4 w-4";
        case "lg":
          return "h-6 w-6";
        default:
          return "h-5 w-5";
      }
    }), u = g(() => {
      switch (v.value) {
        case "sm":
          return "h-1.5 w-1.5";
        case "lg":
          return "h-2.5 w-2.5";
        default:
          return "h-2 w-2";
      }
    }), f = g(() => {
      switch (v.value) {
        case "sm":
          return "text-sm";
        case "lg":
          return "text-lg";
        default:
          return "text-base";
      }
    }), C = () => {
      if (s.value) return;
      const k = t.label ?? "";
      r ? r.changeEvent(k) : (e("update:modelValue", k), e("change", k));
    };
    return (k, c) => (y(), x("label", {
      class: p([
        "group relative inline-flex cursor-pointer items-center select-none",
        s.value ? "cursor-not-allowed opacity-50" : ""
      ])
    }, [
      $("input", {
        type: "radio",
        class: "peer sr-only",
        value: k.label,
        checked: o.value,
        disabled: s.value,
        onChange: C
      }, null, 40, Zd),
      $("div", {
        class: p([
          "relative flex items-center justify-center rounded-full border transition-all duration-200",
          n.value,
          o.value ? "border-blue-500 bg-blue-500" : "border-gray-300 bg-white group-hover:border-blue-500 dark:border-gray-600 dark:bg-gray-800"
        ])
      }, [
        $("div", {
          class: p([
            "rounded-full bg-white transition-transform duration-200",
            u.value,
            o.value ? "scale-100" : "scale-0"
          ])
        }, null, 2)
      ], 2),
      k.$slots.default || k.label ? (y(), x("span", {
        key: 0,
        class: p(["ml-2 text-gray-700 dark:text-gray-300", f.value])
      }, [
        K(k.$slots, "default", {}, () => [
          xe(U(k.label), 1)
        ])
      ], 2)) : H("", !0)
    ], 2));
  }
}), Qd = /* @__PURE__ */ ee({
  __name: "RadioGroup",
  props: {
    modelValue: { type: [String, Number, Boolean] },
    disabled: { type: Boolean, default: !1 },
    size: { default: "md" },
    direction: { default: "horizontal" }
  },
  emits: ["update:modelValue", "change"],
  setup(l, { emit: a }) {
    const t = l, e = a, r = (o) => {
      e("update:modelValue", o), e("change", o);
    };
    return Oe("radio-group", {
      modelValue: Me(t, "modelValue"),
      disabled: Me(t, "disabled"),
      size: Me(t, "size"),
      changeEvent: r
    }), (o, s) => (y(), x("div", {
      class: p([
        "flex",
        o.direction === "vertical" ? "flex-col gap-2" : "flex-row gap-4"
      ]),
      role: "radiogroup",
      "aria-label": "radio-group"
    }, [
      K(o.$slots, "default")
    ], 2));
  }
}), ec = R({
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
}), tc = { class: "mb-4 flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-950" }, lc = { class: "min-w-0 flex-1" }, ac = {
  key: 0,
  class: "w-full"
}, rc = ["placeholder"], oc = { class: "flex items-center gap-2" }, sc = { class: "overflow-x-auto" }, nc = ["onClick", "aria-sort"], ic = { class: "flex items-center gap-2" }, uc = {
  key: 0,
  class: "inline-flex h-4 w-4 items-center justify-center text-gray-500 dark:text-gray-400"
}, dc = {
  key: 1,
  class: "text-xs text-gray-400"
}, cc = { class: "text-sm" }, fc = {
  key: 1,
  class: "mt-4 flex flex-wrap items-center justify-between gap-3 rounded-b-lg border-t border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300"
}, pc = { class: "flex items-center gap-2" }, vc = ["disabled"], gc = ["disabled"], bc = /* @__PURE__ */ ee({
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
    const a = l, t = j(""), e = j(""), r = j("asc"), o = j(a.initialPage), s = g(() => {
      const i = a.data ?? [];
      return e.value ? [...i].sort((d, m) => {
        const w = d[e.value], z = m[e.value];
        if (w == null && z == null) return 0;
        if (w == null) return r.value === "asc" ? -1 : 1;
        if (z == null) return r.value === "asc" ? 1 : -1;
        if (typeof w == "number" && typeof z == "number")
          return r.value === "asc" ? w - z : z - w;
        const M = String(w).toLowerCase(), V = String(z).toLowerCase();
        return M < V ? r.value === "asc" ? -1 : 1 : M > V ? r.value === "asc" ? 1 : -1 : 0;
      }) : i;
    }), v = g(() => {
      const i = s.value, d = a.columns ?? [];
      if (!a.searchable || !t.value.trim())
        return i;
      const m = t.value.trim().toLowerCase();
      return i.filter(
        (w) => d.some((z) => {
          const M = w[z.key];
          return M == null ? !1 : String(M).toLowerCase().includes(m);
        })
      );
    }), n = g(
      () => Math.max(1, Math.ceil(v.value.length / a.pageSize))
    ), u = g(() => {
      if (!a.pagination)
        return v.value;
      const i = (o.value - 1) * a.pageSize;
      return v.value.slice(i, i + a.pageSize);
    });
    ae([() => v.value.length, () => a.pageSize], () => {
      o.value > n.value && (o.value = n.value);
    });
    const f = g(() => {
      const { root: i, table: d, thead: m, th: w, tbody: z, tr: M, td: V, empty: A } = ec({
        stripe: a.stripe,
        border: a.border,
        dense: a.dense
      });
      return {
        root: i(),
        table: d(),
        thead: m(),
        th: w(),
        tbody: z(),
        tr: M(),
        td: V(),
        empty: A()
      };
    }), C = (i) => {
      switch (i) {
        case "center":
          return "text-center";
        case "right":
          return "text-right";
        default:
          return "text-left";
      }
    }, k = (i) => {
      e.value === i ? r.value = r.value === "asc" ? "desc" : "asc" : (e.value = i, r.value = "asc");
    }, c = (i) => e.value !== i ? "none" : r.value === "asc" ? "ascending" : "descending", b = () => {
      const i = a.columns ?? [], d = i.map(
        (w) => `"${String(w.title).replace(/"/g, '""')}"`
      ), m = v.value.map(
        (w) => i.map((z) => {
          const M = w[z.key];
          return `"${String(M ?? "").replace(/"/g, '""')}"`;
        }).join(",")
      );
      return [d.join(","), ...m].join(`\r
`);
    }, h = () => {
      const i = b(), d = new Blob([i], { type: "text/csv;charset=utf-8;" }), m = URL.createObjectURL(d), w = document.createElement("a");
      w.href = m, w.download = "table-export.csv", document.body.appendChild(w), w.click(), document.body.removeChild(w), URL.revokeObjectURL(m);
    };
    return (i, d) => (y(), x("div", {
      class: p(f.value.root)
    }, [
      $("div", tc, [
        $("div", lc, [
          a.searchable ? (y(), x("div", ac, [
            Xe($("input", {
              "onUpdate:modelValue": d[0] || (d[0] = (m) => t.value = m),
              type: "text",
              placeholder: a.searchPlaceholder,
              class: "w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:focus:border-blue-400 dark:focus:ring-blue-400"
            }, null, 8, rc), [
              [Tt, t.value]
            ])
          ])) : H("", !0)
        ]),
        $("div", oc, [
          a.exportable ? (y(), x("button", {
            key: 0,
            type: "button",
            onClick: h,
            class: "rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:text-blue-400"
          }, " 导出 CSV ")) : H("", !0)
        ])
      ]),
      $("div", sc, [
        $("table", {
          class: p(f.value.table)
        }, [
          $("thead", {
            class: p(f.value.thead)
          }, [
            $("tr", null, [
              (y(!0), x(ie, null, ve(i.columns, (m) => (y(), x("th", {
                key: m.key,
                class: p([
                  f.value.th,
                  C(m.align),
                  m.sortable ? "cursor-pointer select-none text-gray-700 dark:text-gray-300" : ""
                ]),
                style: ue({
                  width: m.width ? typeof m.width == "number" ? `${m.width}px` : m.width : void 0
                }),
                onClick: (w) => m.sortable && k(m.key),
                "aria-sort": m.sortable ? c(m.key) : void 0
              }, [
                $("div", ic, [
                  m.icon ? (y(), x("span", uc, U(m.icon), 1)) : H("", !0),
                  $("span", null, U(m.title), 1),
                  m.sortable ? (y(), x("span", dc, U(e.value === m.key ? r.value === "asc" ? "↑" : "↓" : "⇅"), 1)) : H("", !0)
                ])
              ], 14, nc))), 128))
            ])
          ], 2),
          $("tbody", {
            class: p(f.value.tbody)
          }, [
            (y(!0), x(ie, null, ve(u.value, (m, w) => (y(), x("tr", {
              key: w,
              class: p(f.value.tr)
            }, [
              (y(!0), x(ie, null, ve(i.columns, (z) => (y(), x("td", {
                key: z.key,
                class: p([f.value.td, C(z.align)])
              }, [
                K(i.$slots, z.key, {
                  row: m,
                  index: w
                }, () => [
                  xe(U(m[z.key]), 1)
                ], !0)
              ], 2))), 128))
            ], 2))), 128))
          ], 2)
        ], 2)
      ]),
      v.value.length ? H("", !0) : (y(), x("div", {
        key: 0,
        class: p(f.value.empty)
      }, [
        K(i.$slots, "empty", {}, () => [
          $("span", cc, U(i.emptyText), 1)
        ], !0)
      ], 2)),
      a.pagination && v.value.length ? (y(), x("div", fc, [
        $("div", null, " 第 " + U(o.value) + " / " + U(n.value) + " 页 · 共 " + U(v.value.length) + " 条 ", 1),
        $("div", pc, [
          $("button", {
            type: "button",
            class: "rounded-lg border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700 transition hover:border-blue-500 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:text-blue-400",
            disabled: o.value <= 1,
            onClick: d[1] || (d[1] = (m) => o.value = Math.max(1, o.value - 1))
          }, " 上一页 ", 8, vc),
          $("button", {
            type: "button",
            class: "rounded-lg border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700 transition hover:border-blue-500 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:text-blue-400",
            disabled: o.value >= n.value,
            onClick: d[2] || (d[2] = (m) => o.value = Math.min(n.value, o.value + 1))
          }, " 下一页 ", 8, gc)
        ])
      ])) : H("", !0)
    ], 2));
  }
}), mc = /* @__PURE__ */ lt(bc, [["__scopeId", "data-v-86642214"]]), St = [
  fa,
  Ca,
  Ia,
  Ra,
  ja,
  Za,
  ar,
  gr,
  Cr,
  Dr,
  Or,
  Kr,
  Xr,
  ao,
  so,
  uo,
  vo,
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
  Wn,
  oi,
  vi,
  ul,
  $i,
  Ei,
  Li,
  eu,
  vu,
  gu,
  ku,
  Ru,
  Eu,
  Lu,
  Fu,
  ed,
  nd,
  md,
  Vd,
  Ed,
  Ld,
  pl,
  Nd,
  qd,
  Jd,
  Qd,
  mc
], wc = {
  install: (l) => {
    var a;
    for (const t in St)
      l.component(((a = St[t]) == null ? void 0 : a.name) || t, St[t]);
  }
};
export {
  vu as Accordion,
  gu as AccordionItem,
  Kr as Alert,
  Ia as Avatar,
  Ra as Badge,
  ul as Breadcrumb,
  $i as BreadcrumbItem,
  ao as Button,
  Lt as Calendar,
  so as Card,
  md as Carousel,
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
  Wn as Panel,
  Cr as Popover,
  vi as Progress,
  Jd as Radio,
  Qd as RadioGroup,
  eu as RangeCalendar,
  ts as Rate,
  Vd as Runhorselight,
  ar as Segmented,
  Ho as Select,
  hn as Skeleton,
  xn as SkeletonAvatar,
  wn as SkeletonText,
  gr as Slider,
  Ei as Splitter,
  Li as SplitterPanel,
  qd as StepItem,
  Nd as Steps,
  Fu as Swap,
  ja as Switch,
  Rn as TabItem,
  mc as Table,
  Tn as Tabs,
  vo as Textarea,
  nl as TimePicker,
  dn as TimeSelect,
  Ed as Timeline,
  Ld as TimelineItem,
  hc as Toast,
  pl as ToastContainer,
  Dr as Tooltip,
  wc as Versakit
};
