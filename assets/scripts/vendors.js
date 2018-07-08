function Scroller() {
  this.latestKnownScrollY = 0, this.ticking = !1
}! function(e, t) {
  function n(e) {
    var t = ht[e] = {};
    return V.each(e.split(tt), function(e, n) {
      t[n] = !0
    }), t
  }

  function r(e, n, r) {
    if (r === t && 1 === e.nodeType) {
      var i = "data-" + n.replace(mt, "-$1").toLowerCase();
      if (r = e.getAttribute(i), "string" == typeof r) {
        try {
          r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : gt.test(r) ? V.parseJSON(r) : r
        } catch (o) {}
        V.data(e, n, r)
      } else r = t
    }
    return r
  }

  function i(e) {
    var t;
    for (t in e)
      if (("data" !== t || !V.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0
  }

  function o() {
    return !1
  }

  function a() {
    return !0
  }

  function s(e) {
    return !e || !e.parentNode || 11 === e.parentNode.nodeType
  }

  function l(e, t) {
    do e = e[t]; while (e && 1 !== e.nodeType);
    return e
  }

  function u(e, t, n) {
    if (t = t || 0, V.isFunction(t)) return V.grep(e, function(e, r) {
      var i = !!t.call(e, r, e);
      return i === n
    });
    if (t.nodeType) return V.grep(e, function(e) {
      return e === t === n
    });
    if ("string" == typeof t) {
      var r = V.grep(e, function(e) {
        return 1 === e.nodeType
      });
      if (Ot.test(t)) return V.filter(t, r, !n);
      t = V.filter(t, r)
    }
    return V.grep(e, function(e) {
      return V.inArray(e, t) >= 0 === n
    })
  }

  function c(e) {
    var t = Bt.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement)
      for (; t.length;) n.createElement(t.pop());
    return n
  }

  function d(e, t) {
    return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
  }

  function f(e, t) {
    if (1 === t.nodeType && V.hasData(e)) {
      var n, r, i, o = V._data(e),
        a = V._data(t, o),
        s = o.events;
      if (s) {
        delete a.handle, a.events = {};
        for (n in s)
          for (r = 0, i = s[n].length; i > r; r++) V.event.add(t, n, s[n][r])
      }
      a.data && (a.data = V.extend({}, a.data))
    }
  }

  function p(e, t) {
    var n;
    1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), V.support.html5Clone && e.innerHTML && !V.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Qt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text), t.removeAttribute(V.expando))
  }

  function h(e) {
    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
  }

  function g(e) {
    Qt.test(e.type) && (e.defaultChecked = e.checked)
  }

  function m(e, t) {
    if (t in e) return t;
    for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = vn.length; i--;)
      if (t = vn[i] + n, t in e) return t;
    return r
  }

  function y(e, t) {
    return e = t || e, "none" === V.css(e, "display") || !V.contains(e.ownerDocument, e)
  }

  function v(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; a > o; o++) n = e[o], n.style && (i[o] = V._data(n, "olddisplay"), t ? (!i[o] && "none" === n.style.display && (n.style.display = ""), "" === n.style.display && y(n) && (i[o] = V._data(n, "olddisplay", k(n.nodeName)))) : (r = nn(n, "display"), !i[o] && "none" !== r && V._data(n, "olddisplay", r)));
    for (o = 0; a > o; o++) n = e[o], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? i[o] || "" : "none"));
    return e
  }

  function b(e, t, n) {
    var r = dn.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
  }

  function x(e, t, n, r) {
    for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > i; i += 2) "margin" === n && (o += V.css(e, n + yn[i], !0)), r ? ("content" === n && (o -= parseFloat(nn(e, "padding" + yn[i])) || 0), "margin" !== n && (o -= parseFloat(nn(e, "border" + yn[i] + "Width")) || 0)) : (o += parseFloat(nn(e, "padding" + yn[i])) || 0, "padding" !== n && (o += parseFloat(nn(e, "border" + yn[i] + "Width")) || 0));
    return o
  }

  function w(e, t, n) {
    var r = "width" === t ? e.offsetWidth : e.offsetHeight,
      i = !0,
      o = V.support.boxSizing && "border-box" === V.css(e, "boxSizing");
    if (0 >= r || null == r) {
      if (r = nn(e, t), (0 > r || null == r) && (r = e.style[t]), fn.test(r)) return r;
      i = o && (V.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
    }
    return r + x(e, t, n || (o ? "border" : "content"), i) + "px"
  }

  function k(e) {
    if (hn[e]) return hn[e];
    var t = V("<" + e + ">").appendTo(q.body),
      n = t.css("display");
    return t.remove(), ("none" === n || "" === n) && (rn = q.body.appendChild(rn || V.extend(q.createElement("iframe"), {
      frameBorder: 0,
      width: 0,
      height: 0
    })), on && rn.createElement || (on = (rn.contentWindow || rn.contentDocument).document, on.write("<!doctype html><html><body>"), on.close()), t = on.body.appendChild(on.createElement(e)), n = nn(t, "display"), q.body.removeChild(rn)), hn[e] = n, n
  }

  function T(e, t, n, r) {
    var i;
    if (V.isArray(t)) V.each(t, function(t, i) {
      n || wn.test(e) ? r(e, i) : T(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
    });
    else if (n || "object" !== V.type(t)) r(e, t);
    else
      for (i in t) T(e + "[" + i + "]", t[i], n, r)
  }

  function C(e) {
    return function(t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r, i, o, a = t.toLowerCase().split(tt),
        s = 0,
        l = a.length;
      if (V.isFunction(n))
        for (; l > s; s++) r = a[s], o = /^\+/.test(r), o && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[o ? "unshift" : "push"](n)
    }
  }

  function N(e, n, r, i, o, a) {
    o = o || n.dataTypes[0], a = a || {}, a[o] = !0;
    for (var s, l = e[o], u = 0, c = l ? l.length : 0, d = e === _n; c > u && (d || !s); u++) s = l[u](n, r, i), "string" == typeof s && (!d || a[s] ? s = t : (n.dataTypes.unshift(s), s = N(e, n, r, i, s, a)));
    return (d || !s) && !a["*"] && (s = N(e, n, r, i, "*", a)), s
  }

  function E(e, n) {
    var r, i, o = V.ajaxSettings.flatOptions || {};
    for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
    i && V.extend(!0, e, i)
  }

  function S(e, n, r) {
    var i, o, a, s, l = e.contents,
      u = e.dataTypes,
      c = e.responseFields;
    for (o in c) o in r && (n[c[o]] = r[o]);
    for (;
      "*" === u[0];) u.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
    if (i)
      for (o in l)
        if (l[o] && l[o].test(i)) {
          u.unshift(o);
          break
        }
    if (u[0] in r) a = u[0];
    else {
      for (o in r) {
        if (!u[0] || e.converters[o + " " + u[0]]) {
          a = o;
          break
        }
        s || (s = o)
      }
      a = a || s
    }
    return a ? (a !== u[0] && u.unshift(a), r[a]) : void 0
  }

  function A(e, t) {
    var n, r, i, o, a = e.dataTypes.slice(),
      s = a[0],
      l = {},
      u = 0;
    if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), a[1])
      for (n in e.converters) l[n.toLowerCase()] = e.converters[n];
    for (; i = a[++u];)
      if ("*" !== i) {
        if ("*" !== s && s !== i) {
          if (n = l[s + " " + i] || l["* " + i], !n)
            for (r in l)
              if (o = r.split(" "), o[1] === i && (n = l[s + " " + o[0]] || l["* " + o[0]])) {
                n === !0 ? n = l[r] : l[r] !== !0 && (i = o[0], a.splice(u--, 0, i));
                break
              }
          if (n !== !0)
            if (n && e["throws"]) t = n(t);
            else try {
              t = n(t)
            } catch (c) {
              return {
                state: "parsererror",
                error: n ? c : "No conversion from " + s + " to " + i
              }
            }
        }
        s = i
      }
    return {
      state: "success",
      data: t
    }
  }

  function P() {
    try {
      return new e.XMLHttpRequest
    } catch (t) {}
  }

  function j() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP")
    } catch (t) {}
  }

  function L() {
    return setTimeout(function() {
      Jn = t
    }, 0), Jn = V.now()
  }

  function D(e, t) {
    V.each(t, function(t, n) {
      for (var r = (er[t] || []).concat(er["*"]), i = 0, o = r.length; o > i; i++)
        if (r[i].call(e, t, n)) return
    })
  }

  function F(e, t, n) {
    var r, i = 0,
      o = Zn.length,
      a = V.Deferred().always(function() {
        delete s.elem
      }),
      s = function() {
        for (var t = Jn || L(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), i = 0, o = l.tweens.length; o > i; i++) l.tweens[i].run(r);
        return a.notifyWith(e, [l, r, n]), 1 > r && o ? n : (a.resolveWith(e, [l]), !1)
      },
      l = a.promise({
        elem: e,
        props: V.extend({}, t),
        opts: V.extend(!0, {
          specialEasing: {}
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Jn || L(),
        duration: n.duration,
        tweens: [],
        createTween: function(t, n) {
          var r = V.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
          return l.tweens.push(r), r
        },
        stop: function(t) {
          for (var n = 0, r = t ? l.tweens.length : 0; r > n; n++) l.tweens[n].run(1);
          return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
        }
      }),
      u = l.props;
    for ($(u, l.opts.specialEasing); o > i; i++)
      if (r = Zn[i].call(l, e, u, l.opts)) return r;
    return D(l, u), V.isFunction(l.opts.start) && l.opts.start.call(e, l), V.fx.timer(V.extend(s, {
      anim: l,
      queue: l.opts.queue,
      elem: e
    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
  }

  function $(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (r = V.camelCase(n), i = t[r], o = e[n], V.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = V.cssHooks[r], a && "expand" in a) {
        o = a.expand(o), delete e[r];
        for (n in o) n in e || (e[n] = o[n], t[n] = i)
      } else t[r] = i
  }

  function H(e, t, n) {
    var r, i, o, a, s, l, u, c, d = this,
      f = e.style,
      p = {},
      h = [],
      g = e.nodeType && y(e);
    n.queue || (u = V._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, c = u.empty.fire, u.empty.fire = function() {
      u.unqueued || c()
    }), u.unqueued++, d.always(function() {
      d.always(function() {
        u.unqueued--, V.queue(e, "fx").length || u.empty.fire()
      })
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === V.css(e, "display") && "none" === V.css(e, "float") && (V.support.inlineBlockNeedsLayout && "inline" !== k(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", V.support.shrinkWrapBlocks || d.done(function() {
      f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
    }));
    for (r in t)
      if (o = t[r], Gn.exec(o)) {
        if (delete t[r], o === (g ? "hide" : "show")) continue;
        h.push(r)
      }
    if (a = h.length)
      for (s = V._data(e, "fxshow") || V._data(e, "fxshow", {}), g ? V(e).show() : d.done(function() {
          V(e).hide()
        }), d.done(function() {
          var t;
          V.removeData(e, "fxshow", !0);
          for (t in p) V.style(e, t, p[t])
        }), r = 0; a > r; r++) i = h[r], l = d.createTween(i, g ? s[i] : 0), p[i] = s[i] || V.style(e, i), i in s || (s[i] = l.start, g && (l.end = l.start, l.start = "width" === i || "height" === i ? 1 : 0))
  }

  function O(e, t, n, r, i) {
    return new O.prototype.init(e, t, n, r, i)
  }

  function _(e, t) {
    var n, r = {
        height: e
      },
      i = 0;
    for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = yn[i], r["margin" + n] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r
  }

  function M(e) {
    return V.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
  }
  var B, W, q = e.document,
    R = e.location,
    z = e.navigator,
    I = e.jQuery,
    X = e.$,
    Y = Array.prototype.push,
    U = Array.prototype.slice,
    J = Array.prototype.indexOf,
    Q = Object.prototype.toString,
    G = Object.prototype.hasOwnProperty,
    K = String.prototype.trim,
    V = function(e, t) {
      return new V.fn.init(e, t, B)
    },
    Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
    et = /\S/,
    tt = /\s+/,
    nt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    rt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
    it = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    ot = /^[\],:{}\s]*$/,
    at = /(?:^|:|,)(?:\s*\[)+/g,
    st = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    lt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
    ut = /^-ms-/,
    ct = /-([\da-z])/gi,
    dt = function(e, t) {
      return (t + "").toUpperCase()
    },
    ft = function() {
      q.addEventListener ? (q.removeEventListener("DOMContentLoaded", ft, !1), V.ready()) : "complete" === q.readyState && (q.detachEvent("onreadystatechange", ft), V.ready())
    },
    pt = {};
  V.fn = V.prototype = {
    constructor: V,
    init: function(e, n, r) {
      var i, o, a;
      if (!e) return this;
      if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
      if ("string" == typeof e) {
        if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : rt.exec(e), i && (i[1] || !n)) {
          if (i[1]) return n = n instanceof V ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : q, e = V.parseHTML(i[1], a, !0), it.test(i[1]) && V.isPlainObject(n) && this.attr.call(e, n, !0), V.merge(this, e);
          if (o = q.getElementById(i[2]), o && o.parentNode) {
            if (o.id !== i[2]) return r.find(e);
            this.length = 1, this[0] = o
          }
          return this.context = q, this.selector = e, this
        }
        return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
      }
      return V.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), V.makeArray(e, this))
    },
    selector: "",
    jquery: "1.8.2",
    length: 0,
    size: function() {
      return this.length
    },
    toArray: function() {
      return U.call(this)
    },
    get: function(e) {
      return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
    },
    pushStack: function(e, t, n) {
      var r = V.merge(this.constructor(), e);
      return r.prevObject = this, r.context = this.context, "find" === t ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
    },
    each: function(e, t) {
      return V.each(this, e, t)
    },
    ready: function(e) {
      return V.ready.promise().done(e), this
    },
    eq: function(e) {
      return e = +e, -1 === e ? this.slice(e) : this.slice(e, e + 1)
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    slice: function() {
      return this.pushStack(U.apply(this, arguments), "slice", U.call(arguments).join(","))
    },
    map: function(e) {
      return this.pushStack(V.map(this, function(t, n) {
        return e.call(t, n, t)
      }))
    },
    end: function() {
      return this.prevObject || this.constructor(null)
    },
    push: Y,
    sort: [].sort,
    splice: [].splice
  }, V.fn.init.prototype = V.fn, V.extend = V.fn.extend = function() {
    var e, n, r, i, o, a, s = arguments[0] || {},
      l = 1,
      u = arguments.length,
      c = !1;
    for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" != typeof s && !V.isFunction(s) && (s = {}), u === l && (s = this, --l); u > l; l++)
      if (null != (e = arguments[l]))
        for (n in e) r = s[n], i = e[n], s !== i && (c && i && (V.isPlainObject(i) || (o = V.isArray(i))) ? (o ? (o = !1, a = r && V.isArray(r) ? r : []) : a = r && V.isPlainObject(r) ? r : {}, s[n] = V.extend(c, a, i)) : i !== t && (s[n] = i));
    return s
  }, V.extend({
    noConflict: function(t) {
      return e.$ === V && (e.$ = X), t && e.jQuery === V && (e.jQuery = I), V
    },
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {
      e ? V.readyWait++ : V.ready(!0)
    },
    ready: function(e) {
      if (e === !0 ? !--V.readyWait : !V.isReady) {
        if (!q.body) return setTimeout(V.ready, 1);
        V.isReady = !0, e !== !0 && --V.readyWait > 0 || (W.resolveWith(q, [V]), V.fn.trigger && V(q).trigger("ready").off("ready"))
      }
    },
    isFunction: function(e) {
      return "function" === V.type(e)
    },
    isArray: Array.isArray || function(e) {
      return "array" === V.type(e)
    },
    isWindow: function(e) {
      return null != e && e == e.window
    },
    isNumeric: function(e) {
      return !isNaN(parseFloat(e)) && isFinite(e)
    },
    type: function(e) {
      return null == e ? String(e) : pt[Q.call(e)] || "object"
    },
    isPlainObject: function(e) {
      if (!e || "object" !== V.type(e) || e.nodeType || V.isWindow(e)) return !1;
      try {
        if (e.constructor && !G.call(e, "constructor") && !G.call(e.constructor.prototype, "isPrototypeOf")) return !1
      } catch (n) {
        return !1
      }
      var r;
      for (r in e);
      return r === t || G.call(e, r)
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    error: function(e) {
      throw new Error(e)
    },
    parseHTML: function(e, t, n) {
      var r;
      return e && "string" == typeof e ? ("boolean" == typeof t && (n = t, t = 0), t = t || q, (r = it.exec(e)) ? [t.createElement(r[1])] : (r = V.buildFragment([e], t, n ? null : []), V.merge([], (r.cacheable ? V.clone(r.fragment) : r.fragment).childNodes))) : null
    },
    parseJSON: function(t) {
      return t && "string" == typeof t ? (t = V.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : ot.test(t.replace(st, "@").replace(lt, "]").replace(at, "")) ? new Function("return " + t)() : void V.error("Invalid JSON: " + t)) : null
    },
    parseXML: function(n) {
      var r, i;
      if (!n || "string" != typeof n) return null;
      try {
        e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
      } catch (o) {
        r = t
      }
      return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && V.error("Invalid XML: " + n), r
    },
    noop: function() {},
    globalEval: function(t) {
      t && et.test(t) && (e.execScript || function(t) {
        e.eval.call(e, t)
      })(t)
    },
    camelCase: function(e) {
      return e.replace(ut, "ms-").replace(ct, dt)
    },
    nodeName: function(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    },
    each: function(e, n, r) {
      var i, o = 0,
        a = e.length,
        s = a === t || V.isFunction(e);
      if (r)
        if (s) {
          for (i in e)
            if (n.apply(e[i], r) === !1) break
        } else
          for (; a > o && n.apply(e[o++], r) !== !1;);
      else if (s) {
        for (i in e)
          if (n.call(e[i], i, e[i]) === !1) break
      } else
        for (; a > o && n.call(e[o], o, e[o++]) !== !1;);
      return e
    },
    trim: K && !K.call(" ") ? function(e) {
      return null == e ? "" : K.call(e)
    } : function(e) {
      return null == e ? "" : (e + "").replace(nt, "")
    },
    makeArray: function(e, t) {
      var n, r = t || [];
      return null != e && (n = V.type(e), null == e.length || "string" === n || "function" === n || "regexp" === n || V.isWindow(e) ? Y.call(r, e) : V.merge(r, e)), r
    },
    inArray: function(e, t, n) {
      var r;
      if (t) {
        if (J) return J.call(t, e, n);
        for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
          if (n in t && t[n] === e) return n
      }
      return -1
    },
    merge: function(e, n) {
      var r = n.length,
        i = e.length,
        o = 0;
      if ("number" == typeof r)
        for (; r > o; o++) e[i++] = n[o];
      else
        for (; n[o] !== t;) e[i++] = n[o++];
      return e.length = i, e
    },
    grep: function(e, t, n) {
      var r, i = [],
        o = 0,
        a = e.length;
      for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
      return i
    },
    map: function(e, n, r) {
      var i, o, a = [],
        s = 0,
        l = e.length,
        u = e instanceof V || l !== t && "number" == typeof l && (l > 0 && e[0] && e[l - 1] || 0 === l || V.isArray(e));
      if (u)
        for (; l > s; s++) i = n(e[s], s, r), null != i && (a[a.length] = i);
      else
        for (o in e) i = n(e[o], o, r), null != i && (a[a.length] = i);
      return a.concat.apply([], a)
    },
    guid: 1,
    proxy: function(e, n) {
      var r, i, o;
      return "string" == typeof n && (r = e[n], n = e, e = r), V.isFunction(e) ? (i = U.call(arguments, 2), o = function() {
        return e.apply(n, i.concat(U.call(arguments)))
      }, o.guid = e.guid = e.guid || V.guid++, o) : t
    },
    access: function(e, n, r, i, o, a, s) {
      var l, u = null == r,
        c = 0,
        d = e.length;
      if (r && "object" == typeof r) {
        for (c in r) V.access(e, n, c, r[c], 1, a, i);
        o = 1
      } else if (i !== t) {
        if (l = s === t && V.isFunction(i), u && (l ? (l = n, n = function(e, t, n) {
            return l.call(V(e), n)
          }) : (n.call(e, i), n = null)), n)
          for (; d > c; c++) n(e[c], r, l ? i.call(e[c], c, n(e[c], r)) : i, s);
        o = 1
      }
      return o ? e : u ? n.call(e) : d ? n(e[0], r) : a
    },
    now: function() {
      return (new Date).getTime()
    }
  }), V.ready.promise = function(t) {
    if (!W)
      if (W = V.Deferred(), "complete" === q.readyState) setTimeout(V.ready, 1);
      else if (q.addEventListener) q.addEventListener("DOMContentLoaded", ft, !1), e.addEventListener("load", V.ready, !1);
    else {
      q.attachEvent("onreadystatechange", ft), e.attachEvent("onload", V.ready);
      var n = !1;
      try {
        n = null == e.frameElement && q.documentElement
      } catch (r) {}
      n && n.doScroll && function i() {
        if (!V.isReady) {
          try {
            n.doScroll("left")
          } catch (e) {
            return setTimeout(i, 50)
          }
          V.ready()
        }
      }()
    }
    return W.promise(t)
  }, V.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
    pt["[object " + t + "]"] = t.toLowerCase()
  }), B = V(q);
  var ht = {};
  V.Callbacks = function(e) {
    e = "string" == typeof e ? ht[e] || n(e) : V.extend({}, e);
    var r, i, o, a, s, l, u = [],
      c = !e.once && [],
      d = function(t) {
        for (r = e.memory && t, i = !0, l = a || 0, a = 0, s = u.length, o = !0; u && s > l; l++)
          if (u[l].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
            r = !1;
            break
          }
        o = !1, u && (c ? c.length && d(c.shift()) : r ? u = [] : f.disable())
      },
      f = {
        add: function() {
          if (u) {
            var t = u.length;
            ! function n(t) {
              V.each(t, function(t, r) {
                var i = V.type(r);
                "function" !== i || e.unique && f.has(r) ? r && r.length && "string" !== i && n(r) : u.push(r)
              })
            }(arguments), o ? s = u.length : r && (a = t, d(r))
          }
          return this
        },
        remove: function() {
          return u && V.each(arguments, function(e, t) {
            for (var n;
              (n = V.inArray(t, u, n)) > -1;) u.splice(n, 1), o && (s >= n && s--, l >= n && l--)
          }), this
        },
        has: function(e) {
          return V.inArray(e, u) > -1
        },
        empty: function() {
          return u = [], this
        },
        disable: function() {
          return u = c = r = t, this
        },
        disabled: function() {
          return !u
        },
        lock: function() {
          return c = t, r || f.disable(), this
        },
        locked: function() {
          return !c
        },
        fireWith: function(e, t) {
          return t = t || [], t = [e, t.slice ? t.slice() : t], u && (!i || c) && (o ? c.push(t) : d(t)), this
        },
        fire: function() {
          return f.fireWith(this, arguments), this
        },
        fired: function() {
          return !!i
        }
      };
    return f
  }, V.extend({
    Deferred: function(e) {
      var t = [
          ["resolve", "done", V.Callbacks("once memory"), "resolved"],
          ["reject", "fail", V.Callbacks("once memory"), "rejected"],
          ["notify", "progress", V.Callbacks("memory")]
        ],
        n = "pending",
        r = {
          state: function() {
            return n
          },
          always: function() {
            return i.done(arguments).fail(arguments), this
          },
          then: function() {
            var e = arguments;
            return V.Deferred(function(n) {
              V.each(t, function(t, r) {
                var o = r[0],
                  a = e[t];
                i[r[1]](V.isFunction(a) ? function() {
                  var e = a.apply(this, arguments);
                  e && V.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === i ? n : this, [e])
                } : n[o])
              }), e = null
            }).promise()
          },
          promise: function(e) {
            return null != e ? V.extend(e, r) : r
          }
        },
        i = {};
      return r.pipe = r.then, V.each(t, function(e, o) {
        var a = o[2],
          s = o[3];
        r[o[1]] = a.add, s && a.add(function() {
          n = s
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = a.fire, i[o[0] + "With"] = a.fireWith
      }), r.promise(i), e && e.call(i, i), i
    },
    when: function(e) {
      var t, n, r, i = 0,
        o = U.call(arguments),
        a = o.length,
        s = 1 !== a || e && V.isFunction(e.promise) ? a : 0,
        l = 1 === s ? e : V.Deferred(),
        u = function(e, n, r) {
          return function(i) {
            n[e] = this, r[e] = arguments.length > 1 ? U.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
          }
        };
      if (a > 1)
        for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && V.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, t)) : --s;
      return s || l.resolveWith(r, o), l.promise()
    }
  }), V.support = function() {
    var t, n, r, i, o, a, s, l, u, c, d, f = q.createElement("div");
    if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*"), r = f.getElementsByTagName("a")[0], r.style.cssText = "top:1px;float:left;opacity:.5", !n || !n.length) return {};
    i = q.createElement("select"), o = i.appendChild(q.createElement("option")), a = f.getElementsByTagName("input")[0], t = {
      leadingWhitespace: 3 === f.firstChild.nodeType,
      tbody: !f.getElementsByTagName("tbody").length,
      htmlSerialize: !!f.getElementsByTagName("link").length,
      style: /top/.test(r.getAttribute("style")),
      hrefNormalized: "/a" === r.getAttribute("href"),
      opacity: /^0.5/.test(r.style.opacity),
      cssFloat: !!r.style.cssFloat,
      checkOn: "on" === a.value,
      optSelected: o.selected,
      getSetAttribute: "t" !== f.className,
      enctype: !!q.createElement("form").enctype,
      html5Clone: "<:nav></:nav>" !== q.createElement("nav").cloneNode(!0).outerHTML,
      boxModel: "CSS1Compat" === q.compatMode,
      submitBubbles: !0,
      changeBubbles: !0,
      focusinBubbles: !1,
      deleteExpando: !0,
      noCloneEvent: !0,
      inlineBlockNeedsLayout: !1,
      shrinkWrapBlocks: !1,
      reliableMarginRight: !0,
      boxSizingReliable: !0,
      pixelPosition: !1
    }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !o.disabled;
    try {
      delete f.test
    } catch (p) {
      t.deleteExpando = !1
    }
    if (!f.addEventListener && f.attachEvent && f.fireEvent && (f.attachEvent("onclick", d = function() {
        t.noCloneEvent = !1
      }), f.cloneNode(!0).fireEvent("onclick"), f.detachEvent("onclick", d)), a = q.createElement("input"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), f.appendChild(a), s = q.createDocumentFragment(), s.appendChild(f.lastChild), t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = a.checked, s.removeChild(a), s.appendChild(f), f.attachEvent)
      for (u in {
          submit: !0,
          change: !0,
          focusin: !0
        }) l = "on" + u, c = l in f, c || (f.setAttribute(l, "return;"), c = "function" == typeof f[l]), t[u + "Bubbles"] = c;
    return V(function() {
      var n, r, i, o, a = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
        s = q.getElementsByTagName("body")[0];
      s && (n = q.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", s.insertBefore(n, s.firstChild), r = q.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = r.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === i[0].offsetHeight, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === r.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(r, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(r, null) || {
        width: "4px"
      }).width, o = q.createElement("div"), o.style.cssText = r.style.cssText = a, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), "undefined" != typeof r.style.zoom && (r.innerHTML = "", r.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === r.offsetWidth, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== r.offsetWidth, n.style.zoom = 1), s.removeChild(n), n = r = i = o = null)
    }), s.removeChild(f), n = r = i = o = a = s = f = null, t
  }();
  var gt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    mt = /([A-Z])/g;
  V.extend({
    cache: {},
    deletedIds: [],
    uuid: 0,
    expando: "jQuery" + (V.fn.jquery + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0
    },
    hasData: function(e) {
      return e = e.nodeType ? V.cache[e[V.expando]] : e[V.expando], !!e && !i(e)
    },
    data: function(e, n, r, i) {
      if (V.acceptData(e)) {
        var o, a, s = V.expando,
          l = "string" == typeof n,
          u = e.nodeType,
          c = u ? V.cache : e,
          d = u ? e[s] : e[s] && s;
        if (d && c[d] && (i || c[d].data) || !l || r !== t) return d || (u ? e[s] = d = V.deletedIds.pop() || V.guid++ : d = s), c[d] || (c[d] = {}, u || (c[d].toJSON = V.noop)), ("object" == typeof n || "function" == typeof n) && (i ? c[d] = V.extend(c[d], n) : c[d].data = V.extend(c[d].data, n)), o = c[d], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[V.camelCase(n)] = r), l ? (a = o[n], null == a && (a = o[V.camelCase(n)])) : a = o, a
      }
    },
    removeData: function(e, t, n) {
      if (V.acceptData(e)) {
        var r, o, a, s = e.nodeType,
          l = s ? V.cache : e,
          u = s ? e[V.expando] : V.expando;
        if (l[u]) {
          if (t && (r = n ? l[u] : l[u].data)) {
            V.isArray(t) || (t in r ? t = [t] : (t = V.camelCase(t), t = t in r ? [t] : t.split(" ")));
            for (o = 0, a = t.length; a > o; o++) delete r[t[o]];
            if (!(n ? i : V.isEmptyObject)(r)) return
          }(n || (delete l[u].data, i(l[u]))) && (s ? V.cleanData([e], !0) : V.support.deleteExpando || l != l.window ? delete l[u] : l[u] = null)
        }
      }
    },
    _data: function(e, t, n) {
      return V.data(e, t, n, !0)
    },
    acceptData: function(e) {
      var t = e.nodeName && V.noData[e.nodeName.toLowerCase()];
      return !t || t !== !0 && e.getAttribute("classid") === t
    }
  }), V.fn.extend({
    data: function(e, n) {
      var i, o, a, s, l, u = this[0],
        c = 0,
        d = null;
      if (e === t) {
        if (this.length && (d = V.data(u), 1 === u.nodeType && !V._data(u, "parsedAttrs"))) {
          for (a = u.attributes, l = a.length; l > c; c++) s = a[c].name, s.indexOf("data-") || (s = V.camelCase(s.substring(5)), r(u, s, d[s]));
          V._data(u, "parsedAttrs", !0)
        }
        return d
      }
      return "object" == typeof e ? this.each(function() {
        V.data(this, e)
      }) : (i = e.split(".", 2), i[1] = i[1] ? "." + i[1] : "", o = i[1] + "!", V.access(this, function(n) {
        return n === t ? (d = this.triggerHandler("getData" + o, [i[0]]), d === t && u && (d = V.data(u, e), d = r(u, e, d)), d === t && i[1] ? this.data(i[0]) : d) : (i[1] = n, void this.each(function() {
          var t = V(this);
          t.triggerHandler("setData" + o, i), V.data(this, e, n), t.triggerHandler("changeData" + o, i)
        }))
      }, null, n, arguments.length > 1, null, !1))
    },
    removeData: function(e) {
      return this.each(function() {
        V.removeData(this, e)
      })
    }
  }), V.extend({
    queue: function(e, t, n) {
      var r;
      return e ? (t = (t || "fx") + "queue", r = V._data(e, t), n && (!r || V.isArray(n) ? r = V._data(e, t, V.makeArray(n)) : r.push(n)), r || []) : void 0
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var n = V.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = V._queueHooks(e, t),
        a = function() {
          V.dequeue(e, t)
        };
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
    },
    _queueHooks: function(e, t) {
      var n = t + "queueHooks";
      return V._data(e, n) || V._data(e, n, {
        empty: V.Callbacks("once memory").add(function() {
          V.removeData(e, t + "queue", !0), V.removeData(e, n, !0)
        })
      })
    }
  }), V.fn.extend({
    queue: function(e, n) {
      var r = 2;
      return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? V.queue(this[0], e) : n === t ? this : this.each(function() {
        var t = V.queue(this, e, n);
        V._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && V.dequeue(this, e)
      })
    },
    dequeue: function(e) {
      return this.each(function() {
        V.dequeue(this, e)
      })
    },
    delay: function(e, t) {
      return e = V.fx ? V.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
        var r = setTimeout(t, e);
        n.stop = function() {
          clearTimeout(r)
        }
      })
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", [])
    },
    promise: function(e, n) {
      var r, i = 1,
        o = V.Deferred(),
        a = this,
        s = this.length,
        l = function() {
          --i || o.resolveWith(a, [a])
        };
      for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = V._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
      return l(), o.promise(n)
    }
  });
  var yt, vt, bt, xt = /[\t\r\n]/g,
    wt = /\r/g,
    kt = /^(?:button|input)$/i,
    Tt = /^(?:button|input|object|select|textarea)$/i,
    Ct = /^a(?:rea|)$/i,
    Nt = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    Et = V.support.getSetAttribute;
  V.fn.extend({
    attr: function(e, t) {
      return V.access(this, V.attr, e, t, arguments.length > 1)
    },
    removeAttr: function(e) {
      return this.each(function() {
        V.removeAttr(this, e)
      })
    },
    prop: function(e, t) {
      return V.access(this, V.prop, e, t, arguments.length > 1)
    },
    removeProp: function(e) {
      return e = V.propFix[e] || e, this.each(function() {
        try {
          this[e] = t, delete this[e]
        } catch (n) {}
      })
    },
    addClass: function(e) {
      var t, n, r, i, o, a, s;
      if (V.isFunction(e)) return this.each(function(t) {
        V(this).addClass(e.call(this, t, this.className))
      });
      if (e && "string" == typeof e)
        for (t = e.split(tt), n = 0, r = this.length; r > n; n++)
          if (i = this[n], 1 === i.nodeType)
            if (i.className || 1 !== t.length) {
              for (o = " " + i.className + " ", a = 0, s = t.length; s > a; a++) o.indexOf(" " + t[a] + " ") < 0 && (o += t[a] + " ");
              i.className = V.trim(o)
            } else i.className = e;
      return this
    },
    removeClass: function(e) {
      var n, r, i, o, a, s, l;
      if (V.isFunction(e)) return this.each(function(t) {
        V(this).removeClass(e.call(this, t, this.className))
      });
      if (e && "string" == typeof e || e === t)
        for (n = (e || "").split(tt), s = 0, l = this.length; l > s; s++)
          if (i = this[s], 1 === i.nodeType && i.className) {
            for (r = (" " + i.className + " ").replace(xt, " "), o = 0, a = n.length; a > o; o++)
              for (; r.indexOf(" " + n[o] + " ") >= 0;) r = r.replace(" " + n[o] + " ", " ");
            i.className = e ? V.trim(r) : ""
          }
      return this
    },
    toggleClass: function(e, t) {
      var n = typeof e,
        r = "boolean" == typeof t;
      return this.each(V.isFunction(e) ? function(n) {
        V(this).toggleClass(e.call(this, n, this.className, t), t)
      } : function() {
        if ("string" === n)
          for (var i, o = 0, a = V(this), s = t, l = e.split(tt); i = l[o++];) s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i);
        else("undefined" === n || "boolean" === n) && (this.className && V._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : V._data(this, "__className__") || "")
      })
    },
    hasClass: function(e) {
      for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(xt, " ").indexOf(t) >= 0) return !0;
      return !1
    },
    val: function(e) {
      var n, r, i, o = this[0]; {
        if (arguments.length) return i = V.isFunction(e), this.each(function(r) {
          var o, a = V(this);
          1 === this.nodeType && (o = i ? e.call(this, r, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : V.isArray(o) && (o = V.map(o, function(e) {
            return null == e ? "" : e + ""
          })), n = V.valHooks[this.type] || V.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
        });
        if (o) return n = V.valHooks[o.type] || V.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (r = n.get(o, "value")) !== t ? r : (r = o.value, "string" == typeof r ? r.replace(wt, "") : null == r ? "" : r)
      }
    }
  }), V.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = e.attributes.value;
          return !t || t.specified ? e.value : e.text
        }
      },
      select: {
        get: function(e) {
          var t, n, r, i, o = e.selectedIndex,
            a = [],
            s = e.options,
            l = "select-one" === e.type;
          if (0 > o) return null;
          for (n = l ? o : 0, r = l ? o + 1 : s.length; r > n; n++)
            if (i = s[n], !(!i.selected || (V.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && V.nodeName(i.parentNode, "optgroup"))) {
              if (t = V(i).val(), l) return t;
              a.push(t)
            }
          return l && !a.length && s.length ? V(s[o]).val() : a
        },
        set: function(e, t) {
          var n = V.makeArray(t);
          return V(e).find("option").each(function() {
            this.selected = V.inArray(V(this).val(), n) >= 0
          }), n.length || (e.selectedIndex = -1), n
        }
      }
    },
    attrFn: {},
    attr: function(e, n, r, i) {
      var o, a, s, l = e.nodeType;
      if (e && 3 !== l && 8 !== l && 2 !== l) return i && V.isFunction(V.fn[n]) ? V(e)[n](r) : "undefined" == typeof e.getAttribute ? V.prop(e, n, r) : (s = 1 !== l || !V.isXMLDoc(e), s && (n = n.toLowerCase(), a = V.attrHooks[n] || (Nt.test(n) ? vt : yt)), r !== t ? null === r ? void V.removeAttr(e, n) : a && "set" in a && s && (o = a.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : a && "get" in a && s && null !== (o = a.get(e, n)) ? o : (o = e.getAttribute(n), null === o ? t : o))
    },
    removeAttr: function(e, t) {
      var n, r, i, o, a = 0;
      if (t && 1 === e.nodeType)
        for (r = t.split(tt); a < r.length; a++) i = r[a], i && (n = V.propFix[i] || i, o = Nt.test(i), o || V.attr(e, i, ""), e.removeAttribute(Et ? i : n), o && n in e && (e[n] = !1))
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (kt.test(e.nodeName) && e.parentNode) V.error("type property can't be changed");
          else if (!V.support.radioValue && "radio" === t && V.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      },
      value: {
        get: function(e, t) {
          return yt && V.nodeName(e, "button") ? yt.get(e, t) : t in e ? e.value : null
        },
        set: function(e, t, n) {
          return yt && V.nodeName(e, "button") ? yt.set(e, t, n) : void(e.value = t)
        }
      }
    },
    propFix: {
      tabindex: "tabIndex",
      readonly: "readOnly",
      "for": "htmlFor",
      "class": "className",
      maxlength: "maxLength",
      cellspacing: "cellSpacing",
      cellpadding: "cellPadding",
      rowspan: "rowSpan",
      colspan: "colSpan",
      usemap: "useMap",
      frameborder: "frameBorder",
      contenteditable: "contentEditable"
    },
    prop: function(e, n, r) {
      var i, o, a, s = e.nodeType;
      if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !V.isXMLDoc(e), a && (n = V.propFix[n] || n, o = V.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          var n = e.getAttributeNode("tabindex");
          return n && n.specified ? parseInt(n.value, 10) : Tt.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : t
        }
      }
    }
  }), vt = {
    get: function(e, n) {
      var r, i = V.prop(e, n);
      return i === !0 || "boolean" != typeof i && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
    },
    set: function(e, t, n) {
      var r;
      return t === !1 ? V.removeAttr(e, n) : (r = V.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
    }
  }, Et || (bt = {
    name: !0,
    id: !0,
    coords: !0
  }, yt = V.valHooks.button = {
    get: function(e, n) {
      var r;
      return r = e.getAttributeNode(n), r && (bt[n] ? "" !== r.value : r.specified) ? r.value : t
    },
    set: function(e, t, n) {
      var r = e.getAttributeNode(n);
      return r || (r = q.createAttribute(n), e.setAttributeNode(r)), r.value = t + ""
    }
  }, V.each(["width", "height"], function(e, t) {
    V.attrHooks[t] = V.extend(V.attrHooks[t], {
      set: function(e, n) {
        return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
      }
    })
  }), V.attrHooks.contenteditable = {
    get: yt.get,
    set: function(e, t, n) {
      "" === t && (t = "false"), yt.set(e, t, n)
    }
  }), V.support.hrefNormalized || V.each(["href", "src", "width", "height"], function(e, n) {
    V.attrHooks[n] = V.extend(V.attrHooks[n], {
      get: function(e) {
        var r = e.getAttribute(n, 2);
        return null === r ? t : r
      }
    })
  }), V.support.style || (V.attrHooks.style = {
    get: function(e) {
      return e.style.cssText.toLowerCase() || t
    },
    set: function(e, t) {
      return e.style.cssText = t + ""
    }
  }), V.support.optSelected || (V.propHooks.selected = V.extend(V.propHooks.selected, {
    get: function(e) {
      var t = e.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
    }
  })), V.support.enctype || (V.propFix.enctype = "encoding"), V.support.checkOn || V.each(["radio", "checkbox"], function() {
    V.valHooks[this] = {
      get: function(e) {
        return null === e.getAttribute("value") ? "on" : e.value
      }
    }
  }), V.each(["radio", "checkbox"], function() {
    V.valHooks[this] = V.extend(V.valHooks[this], {
      set: function(e, t) {
        return V.isArray(t) ? e.checked = V.inArray(V(e).val(), t) >= 0 : void 0
      }
    })
  });
  var St = /^(?:textarea|input|select)$/i,
    At = /^([^\.]*|)(?:\.(.+)|)$/,
    Pt = /(?:^|\s)hover(\.\S+|)\b/,
    jt = /^key/,
    Lt = /^(?:mouse|contextmenu)|click/,
    Dt = /^(?:focusinfocus|focusoutblur)$/,
    Ft = function(e) {
      return V.event.special.hover ? e : e.replace(Pt, "mouseenter$1 mouseleave$1")
    };
  V.event = {
      add: function(e, n, r, i, o) {
        var a, s, l, u, c, d, f, p, h, g, m;
        if (3 !== e.nodeType && 8 !== e.nodeType && n && r && (a = V._data(e))) {
          for (r.handler && (h = r, r = h.handler, o = h.selector), r.guid || (r.guid = V.guid++), l = a.events, l || (a.events = l = {}), s = a.handle, s || (a.handle = s = function(e) {
              return "undefined" == typeof V || e && V.event.triggered === e.type ? t : V.event.dispatch.apply(s.elem, arguments)
            }, s.elem = e), n = V.trim(Ft(n)).split(" "), u = 0; u < n.length; u++) c = At.exec(n[u]) || [], d = c[1], f = (c[2] || "").split(".").sort(), m = V.event.special[d] || {}, d = (o ? m.delegateType : m.bindType) || d, m = V.event.special[d] || {}, p = V.extend({
            type: d,
            origType: c[1],
            data: i,
            handler: r,
            guid: r.guid,
            selector: o,
            needsContext: o && V.expr.match.needsContext.test(o),
            namespace: f.join(".")
          }, h), g = l[d], g || (g = l[d] = [], g.delegateCount = 0, m.setup && m.setup.call(e, i, f, s) !== !1 || (e.addEventListener ? e.addEventListener(d, s, !1) : e.attachEvent && e.attachEvent("on" + d, s))), m.add && (m.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? g.splice(g.delegateCount++, 0, p) : g.push(p), V.event.global[d] = !0;
          e = null
        }
      },
      global: {},
      remove: function(e, t, n, r, i) {
        var o, a, s, l, u, c, d, f, p, h, g, m = V.hasData(e) && V._data(e);
        if (m && (f = m.events)) {
          for (t = V.trim(Ft(t || "")).split(" "), o = 0; o < t.length; o++)
            if (a = At.exec(t[o]) || [], s = l = a[1], u = a[2], s) {
              for (p = V.event.special[s] || {}, s = (r ? p.delegateType : p.bindType) || s, h = f[s] || [], c = h.length, u = u ? new RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, d = 0; d < h.length; d++) g = h[d], !(!i && l !== g.origType || n && n.guid !== g.guid || u && !u.test(g.namespace) || r && r !== g.selector && ("**" !== r || !g.selector) || (h.splice(d--, 1), g.selector && h.delegateCount--, !p.remove || !p.remove.call(e, g)));
              0 === h.length && c !== h.length && ((!p.teardown || p.teardown.call(e, u, m.handle) === !1) && V.removeEvent(e, s, m.handle), delete f[s])
            } else
              for (s in f) V.event.remove(e, s + t[o], n, r, !0);
          V.isEmptyObject(f) && (delete m.handle, V.removeData(e, "events", !0))
        }
      },
      customEvent: {
        getData: !0,
        setData: !0,
        changeData: !0
      },
      trigger: function(n, r, i, o) {
        if (!i || 3 !== i.nodeType && 8 !== i.nodeType) {
          var a, s, l, u, c, d, f, p, h, g, m = n.type || n,
            y = [];
          if (Dt.test(m + V.event.triggered)) return;
          if (m.indexOf("!") >= 0 && (m = m.slice(0, -1), s = !0), m.indexOf(".") >= 0 && (y = m.split("."), m = y.shift(), y.sort()), (!i || V.event.customEvent[m]) && !V.event.global[m]) return;
          if (n = "object" == typeof n ? n[V.expando] ? n : new V.Event(m, n) : new V.Event(m), n.type = m, n.isTrigger = !0, n.exclusive = s, n.namespace = y.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, d = m.indexOf(":") < 0 ? "on" + m : "", !i) {
            a = V.cache;
            for (l in a) a[l].events && a[l].events[m] && V.event.trigger(n, r, a[l].handle.elem, !0);
            return
          }
          if (n.result = t, n.target || (n.target = i), r = null != r ? V.makeArray(r) : [], r.unshift(n), f = V.event.special[m] || {}, f.trigger && f.trigger.apply(i, r) === !1) return;
          if (h = [
              [i, f.bindType || m]
            ], !o && !f.noBubble && !V.isWindow(i)) {
            for (g = f.delegateType || m, u = Dt.test(g + m) ? i : i.parentNode, c = i; u; u = u.parentNode) h.push([u, g]), c = u;
            c === (i.ownerDocument || q) && h.push([c.defaultView || c.parentWindow || e, g])
          }
          for (l = 0; l < h.length && !n.isPropagationStopped(); l++) u = h[l][0], n.type = h[l][1], p = (V._data(u, "events") || {})[n.type] && V._data(u, "handle"), p && p.apply(u, r), p = d && u[d], p && V.acceptData(u) && p.apply && p.apply(u, r) === !1 && n.preventDefault();
          return n.type = m, !(o || n.isDefaultPrevented() || f._default && f._default.apply(i.ownerDocument, r) !== !1 || "click" === m && V.nodeName(i, "a") || !V.acceptData(i) || !d || !i[m] || ("focus" === m || "blur" === m) && 0 === n.target.offsetWidth || V.isWindow(i) || (c = i[d], c && (i[d] = null), V.event.triggered = m, i[m](), V.event.triggered = t, !c || !(i[d] = c))), n.result
        }
      },
      dispatch: function(n) {
        n = V.event.fix(n || e.event);
        var r, i, o, a, s, l, u, c, d, f = (V._data(this, "events") || {})[n.type] || [],
          p = f.delegateCount,
          h = U.call(arguments),
          g = !n.exclusive && !n.namespace,
          m = V.event.special[n.type] || {},
          y = [];
        if (h[0] = n, n.delegateTarget = this, !m.preDispatch || m.preDispatch.call(this, n) !== !1) {
          if (p && (!n.button || "click" !== n.type))
            for (o = n.target; o != this; o = o.parentNode || this)
              if (o.disabled !== !0 || "click" !== n.type) {
                for (s = {}, u = [], r = 0; p > r; r++) c = f[r], d = c.selector, s[d] === t && (s[d] = c.needsContext ? V(d, this).index(o) >= 0 : V.find(d, this, null, [o]).length), s[d] && u.push(c);
                u.length && y.push({
                  elem: o,
                  matches: u
                })
              }
          for (f.length > p && y.push({
              elem: this,
              matches: f.slice(p)
            }), r = 0; r < y.length && !n.isPropagationStopped(); r++)
            for (l = y[r], n.currentTarget = l.elem, i = 0; i < l.matches.length && !n.isImmediatePropagationStopped(); i++) c = l.matches[i], (g || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) && (n.data = c.data, n.handleObj = c, a = ((V.event.special[c.origType] || {}).handle || c.handler).apply(l.elem, h), a !== t && (n.result = a, a === !1 && (n.preventDefault(), n.stopPropagation())));
          return m.postDispatch && m.postDispatch.call(this, n), n.result
        }
      },
      props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(e, t) {
          return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(e, n) {
          var r, i, o, a = n.button,
            s = n.fromElement;
          return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || q, i = r.documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), !e.which && a !== t && (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
        }
      },
      fix: function(e) {
        if (e[V.expando]) return e;
        var t, n, r = e,
          i = V.event.fixHooks[e.type] || {},
          o = i.props ? this.props.concat(i.props) : this.props;
        for (e = V.Event(r), t = o.length; t;) n = o[--t], e[n] = r[n];
        return e.target || (e.target = r.srcElement || q), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, i.filter ? i.filter(e, r) : e
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          delegateType: "focusin"
        },
        blur: {
          delegateType: "focusout"
        },
        beforeunload: {
          setup: function(e, t, n) {
            V.isWindow(this) && (this.onbeforeunload = n)
          },
          teardown: function(e, t) {
            this.onbeforeunload === t && (this.onbeforeunload = null)
          }
        }
      },
      simulate: function(e, t, n, r) {
        var i = V.extend(new V.Event, n, {
          type: e,
          isSimulated: !0,
          originalEvent: {}
        });
        r ? V.event.trigger(i, null, t) : V.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
      }
    }, V.event.handle = V.event.dispatch, V.removeEvent = q.removeEventListener ? function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
      var r = "on" + t;
      e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n))
    }, V.Event = function(e, t) {
      return this instanceof V.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? a : o) : this.type = e, t && V.extend(this, t), this.timeStamp = e && e.timeStamp || V.now(), this[V.expando] = !0, void 0) : new V.Event(e, t)
    }, V.Event.prototype = {
      preventDefault: function() {
        this.isDefaultPrevented = a;
        var e = this.originalEvent;
        e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
      },
      stopPropagation: function() {
        this.isPropagationStopped = a;
        var e = this.originalEvent;
        e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
      },
      stopImmediatePropagation: function() {
        this.isImmediatePropagationStopped = a, this.stopPropagation()
      },
      isDefaultPrevented: o,
      isPropagationStopped: o,
      isImmediatePropagationStopped: o
    }, V.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    }, function(e, t) {
      V.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(e) {
          {
            var n, r = this,
              i = e.relatedTarget,
              o = e.handleObj;
            o.selector
          }
          return (!i || i !== r && !V.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
        }
      }
    }), V.support.submitBubbles || (V.event.special.submit = {
      setup: function() {
        return V.nodeName(this, "form") ? !1 : void V.event.add(this, "click._submit keypress._submit", function(e) {
          var n = e.target,
            r = V.nodeName(n, "input") || V.nodeName(n, "button") ? n.form : t;
          r && !V._data(r, "_submit_attached") && (V.event.add(r, "submit._submit", function(e) {
            e._submit_bubble = !0
          }), V._data(r, "_submit_attached", !0))
        })
      },
      postDispatch: function(e) {
        e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && V.event.simulate("submit", this.parentNode, e, !0))
      },
      teardown: function() {
        return V.nodeName(this, "form") ? !1 : void V.event.remove(this, "._submit")
      }
    }), V.support.changeBubbles || (V.event.special.change = {
      setup: function() {
        return St.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (V.event.add(this, "propertychange._change", function(e) {
          "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
        }), V.event.add(this, "click._change", function(e) {
          this._just_changed && !e.isTrigger && (this._just_changed = !1), V.event.simulate("change", this, e, !0)
        })), !1) : void V.event.add(this, "beforeactivate._change", function(e) {
          var t = e.target;
          St.test(t.nodeName) && !V._data(t, "_change_attached") && (V.event.add(t, "change._change", function(e) {
            this.parentNode && !e.isSimulated && !e.isTrigger && V.event.simulate("change", this.parentNode, e, !0)
          }), V._data(t, "_change_attached", !0))
        })
      },
      handle: function(e) {
        var t = e.target;
        return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
      },
      teardown: function() {
        return V.event.remove(this, "._change"), !St.test(this.nodeName)
      }
    }), V.support.focusinBubbles || V.each({
      focus: "focusin",
      blur: "focusout"
    }, function(e, t) {
      var n = 0,
        r = function(e) {
          V.event.simulate(t, e.target, V.event.fix(e), !0)
        };
      V.event.special[t] = {
        setup: function() {
          0 === n++ && q.addEventListener(e, r, !0)
        },
        teardown: function() {
          0 === --n && q.removeEventListener(e, r, !0)
        }
      }
    }), V.fn.extend({
      on: function(e, n, r, i, a) {
        var s, l;
        if ("object" == typeof e) {
          "string" != typeof n && (r = r || n, n = t);
          for (l in e) this.on(l, n, r, e[l], a);
          return this
        }
        if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = o;
        else if (!i) return this;
        return 1 === a && (s = i, i = function(e) {
          return V().off(e), s.apply(this, arguments)
        }, i.guid = s.guid || (s.guid = V.guid++)), this.each(function() {
          V.event.add(this, e, i, r, n)
        })
      },
      one: function(e, t, n, r) {
        return this.on(e, t, n, r, 1)
      },
      off: function(e, n, r) {
        var i, a;
        if (e && e.preventDefault && e.handleObj) return i = e.handleObj, V(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
        if ("object" == typeof e) {
          for (a in e) this.off(a, n, e[a]);
          return this
        }
        return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = o), this.each(function() {
          V.event.remove(this, e, r, n)
        })
      },
      bind: function(e, t, n) {
        return this.on(e, null, t, n)
      },
      unbind: function(e, t) {
        return this.off(e, null, t)
      },
      live: function(e, t, n) {
        return V(this.context).on(e, this.selector, t, n), this
      },
      die: function(e, t) {
        return V(this.context).off(e, this.selector || "**", t), this
      },
      delegate: function(e, t, n, r) {
        return this.on(t, e, n, r)
      },
      undelegate: function(e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      },
      trigger: function(e, t) {
        return this.each(function() {
          V.event.trigger(e, t, this)
        })
      },
      triggerHandler: function(e, t) {
        return this[0] ? V.event.trigger(e, t, this[0], !0) : void 0
      },
      toggle: function(e) {
        var t = arguments,
          n = e.guid || V.guid++,
          r = 0,
          i = function(n) {
            var i = (V._data(this, "lastToggle" + e.guid) || 0) % r;
            return V._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
          };
        for (i.guid = n; r < t.length;) t[r++].guid = n;
        return this.click(i)
      },
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    }), V.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
      V.fn[t] = function(e, n) {
        return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }, jt.test(t) && (V.event.fixHooks[t] = V.event.keyHooks), Lt.test(t) && (V.event.fixHooks[t] = V.event.mouseHooks)
    }),
    function(e, t) {
      function n(e, t, n, r) {
        n = n || [], t = t || L;
        var i, o, a, s, l = t.nodeType;
        if (!e || "string" != typeof e) return n;
        if (1 !== l && 9 !== l) return [];
        if (a = w(t), !a && !r && (i = nt.exec(e)))
          if (s = i[1]) {
            if (9 === l) {
              if (o = t.getElementById(s), !o || !o.parentNode) return n;
              if (o.id === s) return n.push(o), n
            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && k(t, o) && o.id === s) return n.push(o), n
          } else {
            if (i[2]) return O.apply(n, _.call(t.getElementsByTagName(e), 0)), n;
            if ((s = i[3]) && ft && t.getElementsByClassName) return O.apply(n, _.call(t.getElementsByClassName(s), 0)), n
          }
        return g(e.replace(K, "$1"), t, n, r, a)
      }

      function r(e) {
        return function(t) {
          var n = t.nodeName.toLowerCase();
          return "input" === n && t.type === e
        }
      }

      function i(e) {
        return function(t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e
        }
      }

      function o(e) {
        return B(function(t) {
          return t = +t, B(function(n, r) {
            for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
          })
        })
      }

      function a(e, t, n) {
        if (e === t) return n;
        for (var r = e.nextSibling; r;) {
          if (r === t) return -1;
          r = r.nextSibling
        }
        return 1
      }

      function s(e, t) {
        var r, i, o, a, s, l, u, c = R[P][e];
        if (c) return t ? 0 : c.slice(0);
        for (s = e, l = [], u = b.preFilter; s;) {
          (!r || (i = Z.exec(s))) && (i && (s = s.slice(i[0].length)), l.push(o = [])), r = !1, (i = et.exec(s)) && (o.push(r = new j(i.shift())), s = s.slice(r.length), r.type = i[0].replace(K, " "));
          for (a in b.filter)(i = st[a].exec(s)) && (!u[a] || (i = u[a](i, L, !0))) && (o.push(r = new j(i.shift())), s = s.slice(r.length), r.type = a, r.matches = i);
          if (!r) break
        }
        return t ? s.length : s ? n.error(e) : R(e, l).slice(0)
      }

      function l(e, t, n) {
        var r = t.dir,
          i = n && "parentNode" === t.dir,
          o = $++;
        return t.first ? function(t, n, o) {
          for (; t = t[r];)
            if (i || 1 === t.nodeType) return e(t, n, o)
        } : function(t, n, a) {
          if (a) {
            for (; t = t[r];)
              if ((i || 1 === t.nodeType) && e(t, n, a)) return t
          } else
            for (var s, l = F + " " + o + " ", u = l + y; t = t[r];)
              if (i || 1 === t.nodeType) {
                if ((s = t[P]) === u) return t.sizset;
                if ("string" == typeof s && 0 === s.indexOf(l)) {
                  if (t.sizset) return t
                } else {
                  if (t[P] = u, e(t, n, a)) return t.sizset = !0, t;
                  t.sizset = !1
                }
              }
        }
      }

      function u(e) {
        return e.length > 1 ? function(t, n, r) {
          for (var i = e.length; i--;)
            if (!e[i](t, n, r)) return !1;
          return !0
        } : e[0]
      }

      function c(e, t, n, r, i) {
        for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
        return a
      }

      function d(e, t, n, r, i, o) {
        return r && !r[P] && (r = d(r)), i && !i[P] && (i = d(i, o)), B(function(o, a, s, l) {
          if (!o || !i) {
            var u, d, f, p = [],
              g = [],
              m = a.length,
              y = o || h(t || "*", s.nodeType ? [s] : s, [], o),
              v = !e || !o && t ? y : c(y, p, e, s, l),
              b = n ? i || (o ? e : m || r) ? [] : a : v;
            if (n && n(v, b, s, l), r)
              for (f = c(b, g), r(f, [], s, l), u = f.length; u--;)(d = f[u]) && (b[g[u]] = !(v[g[u]] = d));
            if (o)
              for (u = e && b.length; u--;)(d = b[u]) && (o[p[u]] = !(a[p[u]] = d));
            else b = c(b === a ? b.splice(m, b.length) : b), i ? i(null, a, b, l) : O.apply(a, b)
          }
        })
      }

      function f(e) {
        for (var t, n, r, i = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, c = l(function(e) {
            return e === t
          }, a, !0), p = l(function(e) {
            return M.call(t, e) > -1
          }, a, !0), h = [function(e, n, r) {
            return !o && (r || n !== E) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
          }]; i > s; s++)
          if (n = b.relative[e[s].type]) h = [l(u(h), n)];
          else {
            if (n = b.filter[e[s].type].apply(null, e[s].matches), n[P]) {
              for (r = ++s; i > r && !b.relative[e[r].type]; r++);
              return d(s > 1 && u(h), s > 1 && e.slice(0, s - 1).join("").replace(K, "$1"), n, r > s && f(e.slice(s, r)), i > r && f(e = e.slice(r)), i > r && e.join(""))
            }
            h.push(n)
          }
        return u(h)
      }

      function p(e, t) {
        var r = t.length > 0,
          i = e.length > 0,
          o = function(a, s, l, u, d) {
            var f, p, h, g = [],
              m = 0,
              v = "0",
              x = a && [],
              w = null != d,
              k = E,
              T = a || i && b.find.TAG("*", d && s.parentNode || s),
              C = F += null == k ? 1 : Math.E;
            for (w && (E = s !== L && s, y = o.el); null != (f = T[v]); v++) {
              if (i && f) {
                for (p = 0; h = e[p]; p++)
                  if (h(f, s, l)) {
                    u.push(f);
                    break
                  }
                w && (F = C, y = ++o.el)
              }
              r && ((f = !h && f) && m--, a && x.push(f))
            }
            if (m += v, r && v !== m) {
              for (p = 0; h = t[p]; p++) h(x, g, s, l);
              if (a) {
                if (m > 0)
                  for (; v--;) !x[v] && !g[v] && (g[v] = H.call(u));
                g = c(g)
              }
              O.apply(u, g), w && !a && g.length > 0 && m + t.length > 1 && n.uniqueSort(u)
            }
            return w && (F = C, E = k), x
          };
        return o.el = 0, r ? B(o) : o
      }

      function h(e, t, r, i) {
        for (var o = 0, a = t.length; a > o; o++) n(e, t[o], r, i);
        return r
      }

      function g(e, t, n, r, i) {
        {
          var o, a, l, u, c, d = s(e);
          d.length
        }
        if (!r && 1 === d.length) {
          if (a = d[0] = d[0].slice(0), a.length > 2 && "ID" === (l = a[0]).type && 9 === t.nodeType && !i && b.relative[a[1].type]) {
            if (t = b.find.ID(l.matches[0].replace(at, ""), t, i)[0], !t) return n;
            e = e.slice(a.shift().length)
          }
          for (o = st.POS.test(e) ? -1 : a.length - 1; o >= 0 && (l = a[o], !b.relative[u = l.type]); o--)
            if ((c = b.find[u]) && (r = c(l.matches[0].replace(at, ""), rt.test(a[0].type) && t.parentNode || t, i))) {
              if (a.splice(o, 1), e = r.length && a.join(""), !e) return O.apply(n, _.call(r, 0)), n;
              break
            }
        }
        return T(e, d)(r, t, i, n, rt.test(e)), n
      }

      function m() {}
      var y, v, b, x, w, k, T, C, N, E, S = !0,
        A = "undefined",
        P = ("sizcache" + Math.random()).replace(".", ""),
        j = String,
        L = e.document,
        D = L.documentElement,
        F = 0,
        $ = 0,
        H = [].pop,
        O = [].push,
        _ = [].slice,
        M = [].indexOf || function(e) {
          for (var t = 0, n = this.length; n > t; t++)
            if (this[t] === e) return t;
          return -1
        },
        B = function(e, t) {
          return e[P] = null == t || t, e
        },
        W = function() {
          var e = {},
            t = [];
          return B(function(n, r) {
            return t.push(n) > b.cacheLength && delete e[t.shift()], e[n] = r
          }, e)
        },
        q = W(),
        R = W(),
        z = W(),
        I = "[\\x20\\t\\r\\n\\f]",
        X = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
        Y = X.replace("w", "w#"),
        U = "([*^$|!~]?=)",
        J = "\\[" + I + "*(" + X + ")" + I + "*(?:" + U + I + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + Y + ")|)|)" + I + "*\\]",
        Q = ":(" + X + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + J + ")|[^:]|\\\\.)*|.*))\\)|)",
        G = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)",
        K = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
        Z = new RegExp("^" + I + "*," + I + "*"),
        et = new RegExp("^" + I + "*([\\x20\\t\\r\\n\\f>+~])" + I + "*"),
        tt = new RegExp(Q),
        nt = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        rt = /[\x20\t\r\n\f]*[+~]/,
        it = /h\d/i,
        ot = /input|select|textarea|button/i,
        at = /\\(?!\\)/g,
        st = {
          ID: new RegExp("^#(" + X + ")"),
          CLASS: new RegExp("^\\.(" + X + ")"),
          NAME: new RegExp("^\\[name=['\"]?(" + X + ")['\"]?\\]"),
          TAG: new RegExp("^(" + X.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + J),
          PSEUDO: new RegExp("^" + Q),
          POS: new RegExp(G, "i"),
          CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
          needsContext: new RegExp("^" + I + "*[>+~]|" + G, "i")
        },
        lt = function(e) {
          var t = L.createElement("div");
          try {
            return e(t)
          } catch (n) {
            return !1
          } finally {
            t = null
          }
        },
        ut = lt(function(e) {
          return e.appendChild(L.createComment("")), !e.getElementsByTagName("*").length
        }),
        ct = lt(function(e) {
          return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href")
        }),
        dt = lt(function(e) {
          e.innerHTML = "<select></select>";
          var t = typeof e.lastChild.getAttribute("multiple");
          return "boolean" !== t && "string" !== t
        }),
        ft = lt(function(e) {
          return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
        }),
        pt = lt(function(e) {
          e.id = P + 0, e.innerHTML = "<a name='" + P + "'></a><div name='" + P + "'></div>", D.insertBefore(e, D.firstChild);
          var t = L.getElementsByName && L.getElementsByName(P).length === 2 + L.getElementsByName(P + 0).length;
          return v = !L.getElementById(P), D.removeChild(e), t
        });
      try {
        _.call(D.childNodes, 0)[0].nodeType
      } catch (ht) {
        _ = function(e) {
          for (var t, n = []; t = this[e]; e++) n.push(t);
          return n
        }
      }
      n.matches = function(e, t) {
        return n(e, null, null, t)
      }, n.matchesSelector = function(e, t) {
        return n(t, null, null, [e]).length > 0
      }, x = n.getText = function(e) {
        var t, n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += x(e)
          } else if (3 === i || 4 === i) return e.nodeValue
        } else
          for (; t = e[r]; r++) n += x(t);
        return n
      }, w = n.isXML = function(e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return t ? "HTML" !== t.nodeName : !1
      }, k = n.contains = D.contains ? function(e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
          r = t && t.parentNode;
        return e === r || !!(r && 1 === r.nodeType && n.contains && n.contains(r))
      } : D.compareDocumentPosition ? function(e, t) {
        return t && !!(16 & e.compareDocumentPosition(t))
      } : function(e, t) {
        for (; t = t.parentNode;)
          if (t === e) return !0;
        return !1
      }, n.attr = function(e, t) {
        var n, r = w(e);
        return r || (t = t.toLowerCase()), (n = b.attrHandle[t]) ? n(e) : r || dt ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? "boolean" == typeof e[t] ? e[t] ? t : null : n.specified ? n.value : null : null)
      }, b = n.selectors = {
        cacheLength: 50,
        createPseudo: B,
        match: st,
        attrHandle: ct ? {} : {
          href: function(e) {
            return e.getAttribute("href", 2)
          },
          type: function(e) {
            return e.getAttribute("type")
          }
        },
        find: {
          ID: v ? function(e, t, n) {
            if (typeof t.getElementById !== A && !n) {
              var r = t.getElementById(e);
              return r && r.parentNode ? [r] : []
            }
          } : function(e, n, r) {
            if (typeof n.getElementById !== A && !r) {
              var i = n.getElementById(e);
              return i ? i.id === e || typeof i.getAttributeNode !== A && i.getAttributeNode("id").value === e ? [i] : t : []
            }
          },
          TAG: ut ? function(e, t) {
            return typeof t.getElementsByTagName !== A ? t.getElementsByTagName(e) : void 0
          } : function(e, t) {
            var n = t.getElementsByTagName(e);
            if ("*" === e) {
              for (var r, i = [], o = 0; r = n[o]; o++) 1 === r.nodeType && i.push(r);
              return i
            }
            return n
          },
          NAME: pt && function(e, t) {
            return typeof t.getElementsByName !== A ? t.getElementsByName(name) : void 0
          },
          CLASS: ft && function(e, t, n) {
            return typeof t.getElementsByClassName === A || n ? void 0 : t.getElementsByClassName(e)
          }
        },
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function(e) {
            return e[1] = e[1].replace(at, ""), e[3] = (e[4] || e[5] || "").replace(at, ""), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
          },
          CHILD: function(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1] ? (e[2] || n.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2])), e[4] = +(e[6] + e[7] || "odd" === e[2])) : e[2] && n.error(e[0]), e
          },
          PSEUDO: function(e) {
            var t, n;
            return st.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[3] : (t = e[4]) && (tt.test(t) && (n = s(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t), e.slice(0, 3))
          }
        },
        filter: {
          ID: v ? function(e) {
            return e = e.replace(at, ""),
              function(t) {
                return t.getAttribute("id") === e
              }
          } : function(e) {
            return e = e.replace(at, ""),
              function(t) {
                var n = typeof t.getAttributeNode !== A && t.getAttributeNode("id");
                return n && n.value === e
              }
          },
          TAG: function(e) {
            return "*" === e ? function() {
              return !0
            } : (e = e.replace(at, "").toLowerCase(), function(t) {
              return t.nodeName && t.nodeName.toLowerCase() === e
            })
          },
          CLASS: function(e) {
            var t = q[P][e];
            return t || (t = q(e, new RegExp("(^|" + I + ")" + e + "(" + I + "|$)"))),
              function(e) {
                return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
              }
          },
          ATTR: function(e, t, r) {
            return function(i) {
              var o = n.attr(i, e);
              return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.substr(o.length - r.length) === r : "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t ? o === r || o.substr(0, r.length + 1) === r + "-" : !1) : !0
            }
          },
          CHILD: function(e, t, n, r) {
            return "nth" === e ? function(e) {
              var t, i, o = e.parentNode;
              if (1 === n && 0 === r) return !0;
              if (o)
                for (i = 0, t = o.firstChild; t && (1 !== t.nodeType || (i++, e !== t)); t = t.nextSibling);
              return i -= r, i === n || i % n === 0 && i / n >= 0
            } : function(t) {
              var n = t;
              switch (e) {
                case "only":
                case "first":
                  for (; n = n.previousSibling;)
                    if (1 === n.nodeType) return !1;
                  if ("first" === e) return !0;
                  n = t;
                case "last":
                  for (; n = n.nextSibling;)
                    if (1 === n.nodeType) return !1;
                  return !0
              }
            }
          },
          PSEUDO: function(e, t) {
            var r, i = b.pseudos[e] || b.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
            return i[P] ? i(t) : i.length > 1 ? (r = [e, e, "", t], b.setFilters.hasOwnProperty(e.toLowerCase()) ? B(function(e, n) {
              for (var r, o = i(e, t), a = o.length; a--;) r = M.call(e, o[a]), e[r] = !(n[r] = o[a])
            }) : function(e) {
              return i(e, 0, r)
            }) : i
          }
        },
        pseudos: {
          not: B(function(e) {
            var t = [],
              n = [],
              r = T(e.replace(K, "$1"));
            return r[P] ? B(function(e, t, n, i) {
              for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
            }) : function(e, i, o) {
              return t[0] = e, r(t, null, o, n), !n.pop()
            }
          }),
          has: B(function(e) {
            return function(t) {
              return n(e, t).length > 0
            }
          }),
          contains: B(function(e) {
            return function(t) {
              return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
            }
          }),
          enabled: function(e) {
            return e.disabled === !1
          },
          disabled: function(e) {
            return e.disabled === !0
          },
          checked: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected
          },
          selected: function(e) {
            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
          },
          parent: function(e) {
            return !b.pseudos.empty(e)
          },
          empty: function(e) {
            var t;
            for (e = e.firstChild; e;) {
              if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t) return !1;
              e = e.nextSibling
            }
            return !0
          },
          header: function(e) {
            return it.test(e.nodeName)
          },
          text: function(e) {
            var t, n;
            return "input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null == (n = e.getAttribute("type")) || n.toLowerCase() === t)
          },
          radio: r("radio"),
          checkbox: r("checkbox"),
          file: r("file"),
          password: r("password"),
          image: r("image"),
          submit: i("submit"),
          reset: i("reset"),
          button: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
          },
          input: function(e) {
            return ot.test(e.nodeName)
          },
          focus: function(e) {
            var t = e.ownerDocument;
            return !(e !== t.activeElement || t.hasFocus && !t.hasFocus() || !e.type && !e.href)
          },
          active: function(e) {
            return e === e.ownerDocument.activeElement
          },
          first: o(function() {
            return [0]
          }),
          last: o(function(e, t) {
            return [t - 1]
          }),
          eq: o(function(e, t, n) {
            return [0 > n ? n + t : n]
          }),
          even: o(function(e, t) {
            for (var n = 0; t > n; n += 2) e.push(n);
            return e
          }),
          odd: o(function(e, t) {
            for (var n = 1; t > n; n += 2) e.push(n);
            return e
          }),
          lt: o(function(e, t, n) {
            for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
            return e
          }),
          gt: o(function(e, t, n) {
            for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
            return e
          })
        }
      }, C = D.compareDocumentPosition ? function(e, t) {
        return e === t ? (N = !0, 0) : (e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) : e.compareDocumentPosition) ? -1 : 1
      } : function(e, t) {
        if (e === t) return N = !0, 0;
        if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
        var n, r, i = [],
          o = [],
          s = e.parentNode,
          l = t.parentNode,
          u = s;
        if (s === l) return a(e, t);
        if (!s) return -1;
        if (!l) return 1;
        for (; u;) i.unshift(u), u = u.parentNode;
        for (u = l; u;) o.unshift(u), u = u.parentNode;
        n = i.length, r = o.length;
        for (var c = 0; n > c && r > c; c++)
          if (i[c] !== o[c]) return a(i[c], o[c]);
        return c === n ? a(e, o[c], -1) : a(i[c], t, 1)
      }, [0, 0].sort(C), S = !N, n.uniqueSort = function(e) {
        var t, n = 1;
        if (N = S, e.sort(C), N)
          for (; t = e[n]; n++) t === e[n - 1] && e.splice(n--, 1);
        return e
      }, n.error = function(e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
      }, T = n.compile = function(e, t) {
        var n, r = [],
          i = [],
          o = z[P][e];
        if (!o) {
          for (t || (t = s(e)), n = t.length; n--;) o = f(t[n]), o[P] ? r.push(o) : i.push(o);
          o = z(e, p(i, r))
        }
        return o
      }, L.querySelectorAll && function() {
        var e, t = g,
          r = /'|\\/g,
          i = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
          o = [":focus"],
          a = [":active", ":focus"],
          l = D.matchesSelector || D.mozMatchesSelector || D.webkitMatchesSelector || D.oMatchesSelector || D.msMatchesSelector;
        lt(function(e) {
          e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || o.push("\\[" + I + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || o.push(":checked")
        }), lt(function(e) {
          e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && o.push("[*^$]=" + I + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled")
        }), o = new RegExp(o.join("|")), g = function(e, n, i, a, l) {
          if (!(a || l || o && o.test(e))) {
            var u, c, d = !0,
              f = P,
              p = n,
              h = 9 === n.nodeType && e;
            if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
              for (u = s(e), (d = n.getAttribute("id")) ? f = d.replace(r, "\\$&") : n.setAttribute("id", f), f = "[id='" + f + "'] ", c = u.length; c--;) u[c] = f + u[c].join("");
              p = rt.test(e) && n.parentNode || n, h = u.join(",")
            }
            if (h) try {
              return O.apply(i, _.call(p.querySelectorAll(h), 0)), i
            } catch (g) {} finally {
              d || n.removeAttribute("id")
            }
          }
          return t(e, n, i, a, l)
        }, l && (lt(function(t) {
          e = l.call(t, "div");
          try {
            l.call(t, "[test!='']:sizzle"), a.push("!=", Q)
          } catch (n) {}
        }), a = new RegExp(a.join("|")), n.matchesSelector = function(t, r) {
          if (r = r.replace(i, "='$1']"), !(w(t) || a.test(r) || o && o.test(r))) try {
            var s = l.call(t, r);
            if (s || e || t.document && 11 !== t.document.nodeType) return s
          } catch (u) {}
          return n(r, null, null, [t]).length > 0
        })
      }(), b.pseudos.nth = b.pseudos.eq, b.filters = m.prototype = b.pseudos, b.setFilters = new m, n.attr = V.attr, V.find = n, V.expr = n.selectors, V.expr[":"] = V.expr.pseudos, V.unique = n.uniqueSort, V.text = n.getText, V.isXMLDoc = n.isXML, V.contains = n.contains
    }(e);
  var $t = /Until$/,
    Ht = /^(?:parents|prev(?:Until|All))/,
    Ot = /^.[^:#\[\.,]*$/,
    _t = V.expr.match.needsContext,
    Mt = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  V.fn.extend({
    find: function(e) {
      var t, n, r, i, o, a, s = this;
      if ("string" != typeof e) return V(e).filter(function() {
        for (t = 0, n = s.length; n > t; t++)
          if (V.contains(s[t], this)) return !0
      });
      for (a = this.pushStack("", "find", e), t = 0, n = this.length; n > t; t++)
        if (r = a.length, V.find(e, this[t], a), t > 0)
          for (i = r; i < a.length; i++)
            for (o = 0; r > o; o++)
              if (a[o] === a[i]) {
                a.splice(i--, 1);
                break
              }
      return a
    },
    has: function(e) {
      var t, n = V(e, this),
        r = n.length;
      return this.filter(function() {
        for (t = 0; r > t; t++)
          if (V.contains(this, n[t])) return !0
      })
    },
    not: function(e) {
      return this.pushStack(u(this, e, !1), "not", e)
    },
    filter: function(e) {
      return this.pushStack(u(this, e, !0), "filter", e)
    },
    is: function(e) {
      return !!e && ("string" == typeof e ? _t.test(e) ? V(e, this.context).index(this[0]) >= 0 : V.filter(e, this).length > 0 : this.filter(e).length > 0)
    },
    closest: function(e, t) {
      for (var n, r = 0, i = this.length, o = [], a = _t.test(e) || "string" != typeof e ? V(e, t || this.context) : 0; i > r; r++)
        for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
          if (a ? a.index(n) > -1 : V.find.matchesSelector(n, e)) {
            o.push(n);
            break
          }
          n = n.parentNode
        }
      return o = o.length > 1 ? V.unique(o) : o, this.pushStack(o, "closest", e)
    },
    index: function(e) {
      return e ? "string" == typeof e ? V.inArray(this[0], V(e)) : V.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
    },
    add: function(e, t) {
      var n = "string" == typeof e ? V(e, t) : V.makeArray(e && e.nodeType ? [e] : e),
        r = V.merge(this.get(), n);
      return this.pushStack(s(n[0]) || s(r[0]) ? r : V.unique(r))
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), V.fn.andSelf = V.fn.addBack, V.each({
    parent: function(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function(e) {
      return V.dir(e, "parentNode")
    },
    parentsUntil: function(e, t, n) {
      return V.dir(e, "parentNode", n)
    },
    next: function(e) {
      return l(e, "nextSibling")
    },
    prev: function(e) {
      return l(e, "previousSibling")
    },
    nextAll: function(e) {
      return V.dir(e, "nextSibling")
    },
    prevAll: function(e) {
      return V.dir(e, "previousSibling")
    },
    nextUntil: function(e, t, n) {
      return V.dir(e, "nextSibling", n)
    },
    prevUntil: function(e, t, n) {
      return V.dir(e, "previousSibling", n)
    },
    siblings: function(e) {
      return V.sibling((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
      return V.sibling(e.firstChild)
    },
    contents: function(e) {
      return V.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : V.merge([], e.childNodes)
    }
  }, function(e, t) {
    V.fn[e] = function(n, r) {
      var i = V.map(this, t, n);
      return $t.test(e) || (r = n), r && "string" == typeof r && (i = V.filter(r, i)), i = this.length > 1 && !Mt[e] ? V.unique(i) : i, this.length > 1 && Ht.test(e) && (i = i.reverse()), this.pushStack(i, e, U.call(arguments).join(","))
    }
  }), V.extend({
    filter: function(e, t, n) {
      return n && (e = ":not(" + e + ")"), 1 === t.length ? V.find.matchesSelector(t[0], e) ? [t[0]] : [] : V.find.matches(e, t)
    },
    dir: function(e, n, r) {
      for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !V(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
      return i
    },
    sibling: function(e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    }
  });
  var Bt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Wt = / jQuery\d+="(?:null|\d+)"/g,
    qt = /^\s+/,
    Rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    zt = /<([\w:]+)/,
    It = /<tbody/i,
    Xt = /<|&#?\w+;/,
    Yt = /<(?:script|style|link)/i,
    Ut = /<(?:script|object|embed|option|style)/i,
    Jt = new RegExp("<(?:" + Bt + ")[\\s/>]", "i"),
    Qt = /^(?:checkbox|radio)$/,
    Gt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Kt = /\/(java|ecma)script/i,
    Vt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
    Zt = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      area: [1, "<map>", "</map>"],
      _default: [0, "", ""]
    },
    en = c(q),
    tn = en.appendChild(q.createElement("div"));
  Zt.optgroup = Zt.option, Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead, Zt.th = Zt.td, V.support.htmlSerialize || (Zt._default = [1, "X<div>", "</div>"]), V.fn.extend({
      text: function(e) {
        return V.access(this, function(e) {
          return e === t ? V.text(this) : this.empty().append((this[0] && this[0].ownerDocument || q).createTextNode(e))
        }, null, e, arguments.length)
      },
      wrapAll: function(e) {
        if (V.isFunction(e)) return this.each(function(t) {
          V(this).wrapAll(e.call(this, t))
        });
        if (this[0]) {
          var t = V(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
            return e
          }).append(this)
        }
        return this
      },
      wrapInner: function(e) {
        return this.each(V.isFunction(e) ? function(t) {
          V(this).wrapInner(e.call(this, t))
        } : function() {
          var t = V(this),
            n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e)
        })
      },
      wrap: function(e) {
        var t = V.isFunction(e);
        return this.each(function(n) {
          V(this).wrapAll(t ? e.call(this, n) : e)
        })
      },
      unwrap: function() {
        return this.parent().each(function() {
          V.nodeName(this, "body") || V(this).replaceWith(this.childNodes)
        }).end()
      },
      append: function() {
        return this.domManip(arguments, !0, function(e) {
          (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(e)
        })
      },
      prepend: function() {
        return this.domManip(arguments, !0, function(e) {
          (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(e, this.firstChild)
        })
      },
      before: function() {
        if (!s(this[0])) return this.domManip(arguments, !1, function(e) {
          this.parentNode.insertBefore(e, this)
        });
        if (arguments.length) {
          var e = V.clean(arguments);
          return this.pushStack(V.merge(e, this), "before", this.selector)
        }
      },
      after: function() {
        if (!s(this[0])) return this.domManip(arguments, !1, function(e) {
          this.parentNode.insertBefore(e, this.nextSibling)
        });
        if (arguments.length) {
          var e = V.clean(arguments);
          return this.pushStack(V.merge(this, e), "after", this.selector)
        }
      },
      remove: function(e, t) {
        for (var n, r = 0; null != (n = this[r]); r++)(!e || V.filter(e, [n]).length) && (!t && 1 === n.nodeType && (V.cleanData(n.getElementsByTagName("*")), V.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
        return this
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++)
          for (1 === e.nodeType && V.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
        return this
      },
      clone: function(e, t) {
        return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
          return V.clone(this, e, t)
        })
      },
      html: function(e) {
        return V.access(this, function(e) {
          var n = this[0] || {},
            r = 0,
            i = this.length;
          if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Wt, "") : t;
          if (!("string" != typeof e || Yt.test(e) || !V.support.htmlSerialize && Jt.test(e) || !V.support.leadingWhitespace && qt.test(e) || Zt[(zt.exec(e) || ["", ""])[1].toLowerCase()])) {
            e = e.replace(Rt, "<$1></$2>");
            try {
              for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (V.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
              n = 0
            } catch (o) {}
          }
          n && this.empty().append(e)
        }, null, e, arguments.length)
      },
      replaceWith: function(e) {
        return s(this[0]) ? this.length ? this.pushStack(V(V.isFunction(e) ? e() : e), "replaceWith", e) : this : V.isFunction(e) ? this.each(function(t) {
          var n = V(this),
            r = n.html();
          n.replaceWith(e.call(this, t, r))
        }) : ("string" != typeof e && (e = V(e).detach()), this.each(function() {
          var t = this.nextSibling,
            n = this.parentNode;
          V(this).remove(), t ? V(t).before(e) : V(n).append(e)
        }))
      },
      detach: function(e) {
        return this.remove(e, !0)
      },
      domManip: function(e, n, r) {
        e = [].concat.apply([], e);
        var i, o, a, s, l = 0,
          u = e[0],
          c = [],
          f = this.length;
        if (!V.support.checkClone && f > 1 && "string" == typeof u && Gt.test(u)) return this.each(function() {
          V(this).domManip(e, n, r)
        });
        if (V.isFunction(u)) return this.each(function(i) {
          var o = V(this);
          e[0] = u.call(this, i, n ? o.html() : t), o.domManip(e, n, r)
        });
        if (this[0]) {
          if (i = V.buildFragment(e, this, c), a = i.fragment, o = a.firstChild, 1 === a.childNodes.length && (a = o), o)
            for (n = n && V.nodeName(o, "tr"), s = i.cacheable || f - 1; f > l; l++) r.call(n && V.nodeName(this[l], "table") ? d(this[l], "tbody") : this[l], l === s ? a : V.clone(a, !0, !0));
          a = o = null, c.length && V.each(c, function(e, t) {
            t.src ? V.ajax ? V.ajax({
              url: t.src,
              type: "GET",
              dataType: "script",
              async: !1,
              global: !1,
              "throws": !0
            }) : V.error("no ajax") : V.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Vt, "")), t.parentNode && t.parentNode.removeChild(t)
          })
        }
        return this
      }
    }), V.buildFragment = function(e, n, r) {
      var i, o, a, s = e[0];
      return n = n || q, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, 1 === e.length && "string" == typeof s && s.length < 512 && n === q && "<" === s.charAt(0) && !Ut.test(s) && (V.support.checkClone || !Gt.test(s)) && (V.support.html5Clone || !Jt.test(s)) && (o = !0, i = V.fragments[s], a = i !== t), i || (i = n.createDocumentFragment(), V.clean(e, n, i, r), o && (V.fragments[s] = a && i)), {
        fragment: i,
        cacheable: o
      }
    }, V.fragments = {}, V.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(e, t) {
      V.fn[e] = function(n) {
        var r, i = 0,
          o = [],
          a = V(n),
          s = a.length,
          l = 1 === this.length && this[0].parentNode;
        if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === s) return a[t](this[0]), this;
        for (; s > i; i++) r = (i > 0 ? this.clone(!0) : this).get(), V(a[i])[t](r), o = o.concat(r);
        return this.pushStack(o, e, a.selector)
      }
    }), V.extend({
      clone: function(e, t, n) {
        var r, i, o, a;
        if (V.support.html5Clone || V.isXMLDoc(e) || !Jt.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (tn.innerHTML = e.outerHTML, tn.removeChild(a = tn.firstChild)), !(V.support.noCloneEvent && V.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || V.isXMLDoc(e)))
          for (p(e, a), r = h(e), i = h(a), o = 0; r[o]; ++o) i[o] && p(r[o], i[o]);
        if (t && (f(e, a), n))
          for (r = h(e), i = h(a), o = 0; r[o]; ++o) f(r[o], i[o]);
        return r = i = null, a
      },
      clean: function(e, t, n, r) {
        var i, o, a, s, l, u, d, f, p, h, m, y = t === q && en,
          v = [];
        for (t && "undefined" != typeof t.createDocumentFragment || (t = q), i = 0; null != (a = e[i]); i++)
          if ("number" == typeof a && (a += ""), a) {
            if ("string" == typeof a)
              if (Xt.test(a)) {
                for (y = y || c(t), d = t.createElement("div"), y.appendChild(d), a = a.replace(Rt, "<$1></$2>"), s = (zt.exec(a) || ["", ""])[1].toLowerCase(), l = Zt[s] || Zt._default, u = l[0], d.innerHTML = l[1] + a + l[2]; u--;) d = d.lastChild;
                if (!V.support.tbody)
                  for (f = It.test(a), p = "table" !== s || f ? "<table>" !== l[1] || f ? [] : d.childNodes : d.firstChild && d.firstChild.childNodes, o = p.length - 1; o >= 0; --o) V.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o]);
                !V.support.leadingWhitespace && qt.test(a) && d.insertBefore(t.createTextNode(qt.exec(a)[0]), d.firstChild), a = d.childNodes, d.parentNode.removeChild(d)
              } else a = t.createTextNode(a);
            a.nodeType ? v.push(a) : V.merge(v, a)
          }
        if (d && (a = d = y = null), !V.support.appendChecked)
          for (i = 0; null != (a = v[i]); i++) V.nodeName(a, "input") ? g(a) : "undefined" != typeof a.getElementsByTagName && V.grep(a.getElementsByTagName("input"), g);
        if (n)
          for (h = function(e) {
              return !e.type || Kt.test(e.type) ? r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e) : void 0
            }, i = 0; null != (a = v[i]); i++) V.nodeName(a, "script") && h(a) || (n.appendChild(a), "undefined" != typeof a.getElementsByTagName && (m = V.grep(V.merge([], a.getElementsByTagName("script")), h), v.splice.apply(v, [i + 1, 0].concat(m)), i += m.length));
        return v
      },
      cleanData: function(e, t) {
        for (var n, r, i, o, a = 0, s = V.expando, l = V.cache, u = V.support.deleteExpando, c = V.event.special; null != (i = e[a]); a++)
          if ((t || V.acceptData(i)) && (r = i[s], n = r && l[r])) {
            if (n.events)
              for (o in n.events) c[o] ? V.event.remove(i, o) : V.removeEvent(i, o, n.handle);
            l[r] && (delete l[r], u ? delete i[s] : i.removeAttribute ? i.removeAttribute(s) : i[s] = null, V.deletedIds.push(r))
          }
      }
    }),
    function() {
      var e, t;
      V.uaMatch = function(e) {
        e = e.toLowerCase();
        var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
        return {
          browser: t[1] || "",
          version: t[2] || "0"
        }
      }, e = V.uaMatch(z.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), V.browser = t, V.sub = function() {
        function e(t, n) {
          return new e.fn.init(t, n)
        }
        V.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function n(n, r) {
          return r && r instanceof V && !(r instanceof e) && (r = e(r)), V.fn.init.call(this, n, r, t)
        }, e.fn.init.prototype = e.fn;
        var t = e(q);
        return e
      }
    }();
  var nn, rn, on, an = /alpha\([^)]*\)/i,
    sn = /opacity=([^)]*)/,
    ln = /^(top|right|bottom|left)$/,
    un = /^(none|table(?!-c[ea]).+)/,
    cn = /^margin/,
    dn = new RegExp("^(" + Z + ")(.*)$", "i"),
    fn = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
    pn = new RegExp("^([-+])=(" + Z + ")", "i"),
    hn = {},
    gn = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    mn = {
      letterSpacing: 0,
      fontWeight: 400
    },
    yn = ["Top", "Right", "Bottom", "Left"],
    vn = ["Webkit", "O", "Moz", "ms"],
    bn = V.fn.toggle;
  V.fn.extend({
    css: function(e, n) {
      return V.access(this, function(e, n, r) {
        return r !== t ? V.style(e, n, r) : V.css(e, n)
      }, e, n, arguments.length > 1)
    },
    show: function() {
      return v(this, !0)
    },
    hide: function() {
      return v(this)
    },
    toggle: function(e, t) {
      var n = "boolean" == typeof e;
      return V.isFunction(e) && V.isFunction(t) ? bn.apply(this, arguments) : this.each(function() {
        (n ? e : y(this)) ? V(this).show(): V(this).hide()
      })
    }
  }), V.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = nn(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": V.support.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(e, n, r, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o, a, s, l = V.camelCase(n),
          u = e.style;
        if (n = V.cssProps[l] || (V.cssProps[l] = m(u, l)), s = V.cssHooks[n] || V.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
        if (a = typeof r, "string" === a && (o = pn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(V.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" === a && !V.cssNumber[l] && (r += "px"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
          u[n] = r
        } catch (c) {}
      }
    },
    css: function(e, n, r, i) {
      var o, a, s, l = V.camelCase(n);
      return n = V.cssProps[l] || (V.cssProps[l] = m(e.style, l)), s = V.cssHooks[n] || V.cssHooks[l], s && "get" in s && (o = s.get(e, !0, i)), o === t && (o = nn(e, n)), "normal" === o && n in mn && (o = mn[n]), r || i !== t ? (a = parseFloat(o), r || V.isNumeric(a) ? a || 0 : o) : o
    },
    swap: function(e, t, n) {
      var r, i, o = {};
      for (i in t) o[i] = e.style[i], e.style[i] = t[i];
      r = n.call(e);
      for (i in t) e.style[i] = o[i];
      return r
    }
  }), e.getComputedStyle ? nn = function(t, n) {
    var r, i, o, a, s = e.getComputedStyle(t, null),
      l = t.style;
    return s && (r = s[n], "" === r && !V.contains(t.ownerDocument, t) && (r = V.style(t, n)), fn.test(r) && cn.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = r, r = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), r
  } : q.documentElement.currentStyle && (nn = function(e, t) {
    var n, r, i = e.currentStyle && e.currentStyle[t],
      o = e.style;
    return null == i && o && o[t] && (i = o[t]), fn.test(i) && !ln.test(t) && (n = o.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : i, i = o.pixelLeft + "px", o.left = n, r && (e.runtimeStyle.left = r)), "" === i ? "auto" : i
  }), V.each(["height", "width"], function(e, t) {
    V.cssHooks[t] = {
      get: function(e, n, r) {
        return n ? 0 === e.offsetWidth && un.test(nn(e, "display")) ? V.swap(e, gn, function() {
          return w(e, t, r)
        }) : w(e, t, r) : void 0
      },
      set: function(e, n, r) {
        return b(e, n, r ? x(e, t, r, V.support.boxSizing && "border-box" === V.css(e, "boxSizing")) : 0)
      }
    }
  }), V.support.opacity || (V.cssHooks.opacity = {
    get: function(e, t) {
      return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
    },
    set: function(e, t) {
      var n = e.style,
        r = e.currentStyle,
        i = V.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
        o = r && r.filter || n.filter || "";
      n.zoom = 1, t >= 1 && "" === V.trim(o.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), r && !r.filter) || (n.filter = an.test(o) ? o.replace(an, i) : o + " " + i)
    }
  }), V(function() {
    V.support.reliableMarginRight || (V.cssHooks.marginRight = {
      get: function(e, t) {
        return V.swap(e, {
          display: "inline-block"
        }, function() {
          return t ? nn(e, "marginRight") : void 0
        })
      }
    }), !V.support.pixelPosition && V.fn.position && V.each(["top", "left"], function(e, t) {
      V.cssHooks[t] = {
        get: function(e, n) {
          if (n) {
            var r = nn(e, t);
            return fn.test(r) ? V(e).position()[t] + "px" : r
          }
        }
      }
    })
  }), V.expr && V.expr.filters && (V.expr.filters.hidden = function(e) {
    return 0 === e.offsetWidth && 0 === e.offsetHeight || !V.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || nn(e, "display"))
  }, V.expr.filters.visible = function(e) {
    return !V.expr.filters.hidden(e)
  }), V.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(e, t) {
    V.cssHooks[e + t] = {
      expand: function(n) {
        var r, i = "string" == typeof n ? n.split(" ") : [n],
          o = {};
        for (r = 0; 4 > r; r++) o[e + yn[r] + t] = i[r] || i[r - 2] || i[0];
        return o
      }
    }, cn.test(e) || (V.cssHooks[e + t].set = b)
  });
  var xn = /%20/g,
    wn = /\[\]$/,
    kn = /\r?\n/g,
    Tn = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    Cn = /^(?:select|textarea)/i;
  V.fn.extend({
    serialize: function() {
      return V.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        return this.elements ? V.makeArray(this.elements) : this
      }).filter(function() {
        return this.name && !this.disabled && (this.checked || Cn.test(this.nodeName) || Tn.test(this.type))
      }).map(function(e, t) {
        var n = V(this).val();
        return null == n ? null : V.isArray(n) ? V.map(n, function(e) {
          return {
            name: t.name,
            value: e.replace(kn, "\r\n")
          }
        }) : {
          name: t.name,
          value: n.replace(kn, "\r\n")
        }
      }).get()
    }
  }), V.param = function(e, n) {
    var r, i = [],
      o = function(e, t) {
        t = V.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
      };
    if (n === t && (n = V.ajaxSettings && V.ajaxSettings.traditional), V.isArray(e) || e.jquery && !V.isPlainObject(e)) V.each(e, function() {
      o(this.name, this.value)
    });
    else
      for (r in e) T(r, e[r], n, o);
    return i.join("&").replace(xn, "+")
  };
  var Nn, En, Sn = /#.*$/,
    An = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Pn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
    jn = /^(?:GET|HEAD)$/,
    Ln = /^\/\//,
    Dn = /\?/,
    Fn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    $n = /([?&])_=[^&]*/,
    Hn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    On = V.fn.load,
    _n = {},
    Mn = {},
    Bn = ["*/"] + ["*"];
  try {
    En = R.href
  } catch (Wn) {
    En = q.createElement("a"), En.href = "", En = En.href
  }
  Nn = Hn.exec(En.toLowerCase()) || [], V.fn.load = function(e, n, r) {
    if ("string" != typeof e && On) return On.apply(this, arguments);
    if (!this.length) return this;
    var i, o, a, s = this,
      l = e.indexOf(" ");
    return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), V.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"), V.ajax({
      url: e,
      type: o,
      dataType: "html",
      data: n,
      complete: function(e, t) {
        r && s.each(r, a || [e.responseText, t, e])
      }
    }).done(function(e) {
      a = arguments, s.html(i ? V("<div>").append(e.replace(Fn, "")).find(i) : e)
    }), this
  }, V.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
    V.fn[t] = function(e) {
      return this.on(t, e)
    }
  }), V.each(["get", "post"], function(e, n) {
    V[n] = function(e, r, i, o) {
      return V.isFunction(r) && (o = o || i, i = r, r = t), V.ajax({
        type: n,
        url: e,
        data: r,
        success: i,
        dataType: o
      })
    }
  }), V.extend({
    getScript: function(e, n) {
      return V.get(e, t, n, "script")
    },
    getJSON: function(e, t, n) {
      return V.get(e, t, n, "json")
    },
    ajaxSetup: function(e, t) {
      return t ? E(e, V.ajaxSettings) : (t = e, e = V.ajaxSettings), E(e, t), e
    },
    ajaxSettings: {
      url: En,
      isLocal: Pn.test(Nn[1]),
      global: !0,
      type: "GET",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      processData: !0,
      async: !0,
      accepts: {
        xml: "application/xml, text/xml",
        html: "text/html",
        text: "text/plain",
        json: "application/json, text/javascript",
        "*": Bn
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText"
      },
      converters: {
        "* text": e.String,
        "text html": !0,
        "text json": V.parseJSON,
        "text xml": V.parseXML
      },
      flatOptions: {
        context: !0,
        url: !0
      }
    },
    ajaxPrefilter: C(_n),
    ajaxTransport: C(Mn),
    ajax: function(e, n) {
      function r(e, n, r, a) {
        var u, d, v, b, w, T = n;
        2 !== x && (x = 2, l && clearTimeout(l), s = t, o = a || "", k.readyState = e > 0 ? 4 : 0, r && (b = S(f, k, r)), e >= 200 && 300 > e || 304 === e ? (f.ifModified && (w = k.getResponseHeader("Last-Modified"), w && (V.lastModified[i] = w), w = k.getResponseHeader("Etag"), w && (V.etag[i] = w)), 304 === e ? (T = "notmodified", u = !0) : (u = A(f, b), T = u.state, d = u.data, v = u.error, u = !v)) : (v = T, (!T || e) && (T = "error", 0 > e && (e = 0))), k.status = e, k.statusText = (n || T) + "", u ? g.resolveWith(p, [d, T, k]) : g.rejectWith(p, [k, T, v]), k.statusCode(y), y = t, c && h.trigger("ajax" + (u ? "Success" : "Error"), [k, f, u ? d : v]), m.fireWith(p, [k, T]), c && (h.trigger("ajaxComplete", [k, f]), --V.active || V.event.trigger("ajaxStop")))
      }
      "object" == typeof e && (n = e, e = t), n = n || {};
      var i, o, a, s, l, u, c, d, f = V.ajaxSetup({}, n),
        p = f.context || f,
        h = p !== f && (p.nodeType || p instanceof V) ? V(p) : V.event,
        g = V.Deferred(),
        m = V.Callbacks("once memory"),
        y = f.statusCode || {},
        v = {},
        b = {},
        x = 0,
        w = "canceled",
        k = {
          readyState: 0,
          setRequestHeader: function(e, t) {
            if (!x) {
              var n = e.toLowerCase();
              e = b[n] = b[n] || e, v[e] = t
            }
            return this
          },
          getAllResponseHeaders: function() {
            return 2 === x ? o : null
          },
          getResponseHeader: function(e) {
            var n;
            if (2 === x) {
              if (!a)
                for (a = {}; n = An.exec(o);) a[n[1].toLowerCase()] = n[2];
              n = a[e.toLowerCase()]
            }
            return n === t ? null : n
          },
          overrideMimeType: function(e) {
            return x || (f.mimeType = e), this
          },
          abort: function(e) {
            return e = e || w, s && s.abort(e), r(0, e), this
          }
        };
      if (g.promise(k), k.success = k.done, k.error = k.fail, k.complete = m.add, k.statusCode = function(e) {
          if (e) {
            var t;
            if (2 > x)
              for (t in e) y[t] = [y[t], e[t]];
            else t = e[k.status], k.always(t)
          }
          return this
        }, f.url = ((e || f.url) + "").replace(Sn, "").replace(Ln, Nn[1] + "//"), f.dataTypes = V.trim(f.dataType || "*").toLowerCase().split(tt), null == f.crossDomain && (u = Hn.exec(f.url.toLowerCase()) || !1, f.crossDomain = u && u.join(":") + (u[3] ? "" : "http:" === u[1] ? 80 : 443) !== Nn.join(":") + (Nn[3] ? "" : "http:" === Nn[1] ? 80 : 443)), f.data && f.processData && "string" != typeof f.data && (f.data = V.param(f.data, f.traditional)), N(_n, f, n, k), 2 === x) return k;
      if (c = f.global, f.type = f.type.toUpperCase(), f.hasContent = !jn.test(f.type), c && 0 === V.active++ && V.event.trigger("ajaxStart"), !f.hasContent && (f.data && (f.url += (Dn.test(f.url) ? "&" : "?") + f.data, delete f.data), i = f.url, f.cache === !1)) {
        var T = V.now(),
          C = f.url.replace($n, "$1_=" + T);
        f.url = C + (C === f.url ? (Dn.test(f.url) ? "&" : "?") + "_=" + T : "")
      }(f.data && f.hasContent && f.contentType !== !1 || n.contentType) && k.setRequestHeader("Content-Type", f.contentType), f.ifModified && (i = i || f.url, V.lastModified[i] && k.setRequestHeader("If-Modified-Since", V.lastModified[i]), V.etag[i] && k.setRequestHeader("If-None-Match", V.etag[i])), k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Bn + "; q=0.01" : "") : f.accepts["*"]);
      for (d in f.headers) k.setRequestHeader(d, f.headers[d]);
      if (!f.beforeSend || f.beforeSend.call(p, k, f) !== !1 && 2 !== x) {
        w = "abort";
        for (d in {
            success: 1,
            error: 1,
            complete: 1
          }) k[d](f[d]);
        if (s = N(Mn, f, n, k)) {
          k.readyState = 1, c && h.trigger("ajaxSend", [k, f]), f.async && f.timeout > 0 && (l = setTimeout(function() {
            k.abort("timeout")
          }, f.timeout));
          try {
            x = 1, s.send(v, r)
          } catch (E) {
            if (!(2 > x)) throw E;
            r(-1, E)
          }
        } else r(-1, "No Transport");
        return k
      }
      return k.abort()
    },
    active: 0,
    lastModified: {},
    etag: {}
  });
  var qn = [],
    Rn = /\?/,
    zn = /(=)\?(?=&|$)|\?\?/,
    In = V.now();
  V.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = qn.pop() || V.expando + "_" + In++;
      return this[e] = !0, e
    }
  }), V.ajaxPrefilter("json jsonp", function(n, r, i) {
    var o, a, s, l = n.data,
      u = n.url,
      c = n.jsonp !== !1,
      d = c && zn.test(u),
      f = c && !d && "string" == typeof l && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && zn.test(l);
    return "jsonp" === n.dataTypes[0] || d || f ? (o = n.jsonpCallback = V.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a = e[o], d ? n.url = u.replace(zn, "$1" + o) : f ? n.data = l.replace(zn, "$1" + o) : c && (n.url += (Rn.test(u) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
      return s || V.error(o + " was not called"), s[0]
    }, n.dataTypes[0] = "json", e[o] = function() {
      s = arguments
    }, i.always(function() {
      e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, qn.push(o)), s && V.isFunction(a) && a(s[0]), s = a = t
    }), "script") : void 0
  }), V.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /javascript|ecmascript/
    },
    converters: {
      "text script": function(e) {
        return V.globalEval(e), e
      }
    }
  }), V.ajaxPrefilter("script", function(e) {
    e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
  }), V.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
      var n, r = q.head || q.getElementsByTagName("head")[0] || q.documentElement;
      return {
        send: function(i, o) {
          n = q.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
            (i || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success"))
          }, r.insertBefore(n, r.firstChild)
        },
        abort: function() {
          n && n.onload(0, 1)
        }
      }
    }
  });
  var Xn, Yn = e.ActiveXObject ? function() {
      for (var e in Xn) Xn[e](0, 1)
    } : !1,
    Un = 0;
  V.ajaxSettings.xhr = e.ActiveXObject ? function() {
      return !this.isLocal && P() || j()
    } : P,
    function(e) {
      V.extend(V.support, {
        ajax: !!e,
        cors: !!e && "withCredentials" in e
      })
    }(V.ajaxSettings.xhr()), V.support.ajax && V.ajaxTransport(function(n) {
      if (!n.crossDomain || V.support.cors) {
        var r;
        return {
          send: function(i, o) {
            var a, s, l = n.xhr();
            if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
              for (s in n.xhrFields) l[s] = n.xhrFields[s];
            n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
            try {
              for (s in i) l.setRequestHeader(s, i[s])
            } catch (u) {}
            l.send(n.hasContent && n.data || null), r = function(e, i) {
              var s, u, c, d, f;
              try {
                if (r && (i || 4 === l.readyState))
                  if (r = t, a && (l.onreadystatechange = V.noop, Yn && delete Xn[a]), i) 4 !== l.readyState && l.abort();
                  else {
                    s = l.status, c = l.getAllResponseHeaders(), d = {}, f = l.responseXML, f && f.documentElement && (d.xml = f);
                    try {
                      d.text = l.responseText
                    } catch (e) {}
                    try {
                      u = l.statusText
                    } catch (p) {
                      u = ""
                    }
                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404
                  }
              } catch (h) {
                i || o(-1, h)
              }
              d && o(s, u, d, c)
            }, n.async ? 4 === l.readyState ? setTimeout(r, 0) : (a = ++Un, Yn && (Xn || (Xn = {}, V(e).unload(Yn)), Xn[a] = r), l.onreadystatechange = r) : r()
          },
          abort: function() {
            r && r(0, 1)
          }
        }
      }
    });
  var Jn, Qn, Gn = /^(?:toggle|show|hide)$/,
    Kn = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$", "i"),
    Vn = /queueHooks$/,
    Zn = [H],
    er = {
      "*": [function(e, t) {
        var n, r, i = this.createTween(e, t),
          o = Kn.exec(t),
          a = i.cur(),
          s = +a || 0,
          l = 1,
          u = 20;
        if (o) {
          if (n = +o[2], r = o[3] || (V.cssNumber[e] ? "" : "px"), "px" !== r && s) {
            s = V.css(i.elem, e, !0) || n || 1;
            do l = l || ".5", s /= l, V.style(i.elem, e, s + r); while (l !== (l = i.cur() / a) && 1 !== l && --u)
          }
          i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
        }
        return i
      }]
    };
  V.Animation = V.extend(F, {
    tweener: function(e, t) {
      V.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
      for (var n, r = 0, i = e.length; i > r; r++) n = e[r], er[n] = er[n] || [], er[n].unshift(t)
    },
    prefilter: function(e, t) {
      t ? Zn.unshift(e) : Zn.push(e)
    }
  }), V.Tween = O, O.prototype = {
    constructor: O,
    init: function(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (V.cssNumber[n] ? "" : "px")
    },
    cur: function() {
      var e = O.propHooks[this.prop];
      return e && e.get ? e.get(this) : O.propHooks._default.get(this)
    },
    run: function(e) {
      var t, n = O.propHooks[this.prop];
      return this.pos = t = this.options.duration ? V.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
    }
  }, O.prototype.init.prototype = O.prototype, O.propHooks = {
    _default: {
      get: function(e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = V.css(e.elem, e.prop, !1, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
      },
      set: function(e) {
        V.fx.step[e.prop] ? V.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[V.cssProps[e.prop]] || V.cssHooks[e.prop]) ? V.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
      }
    }
  }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
    set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, V.each(["toggle", "show", "hide"], function(e, t) {
    var n = V.fn[t];
    V.fn[t] = function(r, i, o) {
      return null == r || "boolean" == typeof r || !e && V.isFunction(r) && V.isFunction(i) ? n.apply(this, arguments) : this.animate(_(t, !0), r, i, o)
    }
  }), V.fn.extend({
    fadeTo: function(e, t, n, r) {
      return this.filter(y).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r)
    },
    animate: function(e, t, n, r) {
      var i = V.isEmptyObject(e),
        o = V.speed(t, n, r),
        a = function() {
          var t = F(this, V.extend({}, e), o);
          i && t.stop(!0)
        };
      return i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
    },
    stop: function(e, n, r) {
      var i = function(e) {
        var t = e.stop;
        delete e.stop, t(r)
      };
      return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
        var t = !0,
          n = null != e && e + "queueHooks",
          o = V.timers,
          a = V._data(this);
        if (n) a[n] && a[n].stop && i(a[n]);
        else
          for (n in a) a[n] && a[n].stop && Vn.test(n) && i(a[n]);
        for (n = o.length; n--;) o[n].elem === this && (null == e || o[n].queue === e) && (o[n].anim.stop(r), t = !1, o.splice(n, 1));
        (t || !r) && V.dequeue(this, e)
      })
    }
  }), V.each({
    slideDown: _("show"),
    slideUp: _("hide"),
    slideToggle: _("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function(e, t) {
    V.fn[e] = function(e, n, r) {
      return this.animate(t, e, n, r)
    }
  }), V.speed = function(e, t, n) {
    var r = e && "object" == typeof e ? V.extend({}, e) : {
      complete: n || !n && t || V.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !V.isFunction(t) && t
    };
    return r.duration = V.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in V.fx.speeds ? V.fx.speeds[r.duration] : V.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
      V.isFunction(r.old) && r.old.call(this), r.queue && V.dequeue(this, r.queue)
    }, r
  }, V.easing = {
    linear: function(e) {
      return e
    },
    swing: function(e) {
      return .5 - Math.cos(e * Math.PI) / 2
    }
  }, V.timers = [], V.fx = O.prototype.init, V.fx.tick = function() {
    for (var e, t = V.timers, n = 0; n < t.length; n++) e = t[n], !e() && t[n] === e && t.splice(n--, 1);
    t.length || V.fx.stop()
  }, V.fx.timer = function(e) {
    e() && V.timers.push(e) && !Qn && (Qn = setInterval(V.fx.tick, V.fx.interval))
  }, V.fx.interval = 13, V.fx.stop = function() {
    clearInterval(Qn), Qn = null
  }, V.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, V.fx.step = {}, V.expr && V.expr.filters && (V.expr.filters.animated = function(e) {
    return V.grep(V.timers, function(t) {
      return e === t.elem
    }).length
  });
  var tr = /^(?:body|html)$/i;
  V.fn.offset = function(e) {
    if (arguments.length) return e === t ? this : this.each(function(t) {
      V.offset.setOffset(this, e, t)
    });
    var n, r, i, o, a, s, l, u = {
        top: 0,
        left: 0
      },
      c = this[0],
      d = c && c.ownerDocument;
    if (d) return (r = d.body) === c ? V.offset.bodyOffset(c) : (n = d.documentElement, V.contains(n, c) ? ("undefined" != typeof c.getBoundingClientRect && (u = c.getBoundingClientRect()), i = M(d), o = n.clientTop || r.clientTop || 0, a = n.clientLeft || r.clientLeft || 0, s = i.pageYOffset || n.scrollTop, l = i.pageXOffset || n.scrollLeft, {
      top: u.top + s - o,
      left: u.left + l - a
    }) : u)
  }, V.offset = {
    bodyOffset: function(e) {
      var t = e.offsetTop,
        n = e.offsetLeft;
      return V.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(V.css(e, "marginTop")) || 0, n += parseFloat(V.css(e, "marginLeft")) || 0), {
        top: t,
        left: n
      }
    },
    setOffset: function(e, t, n) {
      var r = V.css(e, "position");
      "static" === r && (e.style.position = "relative");
      var i, o, a = V(e),
        s = a.offset(),
        l = V.css(e, "top"),
        u = V.css(e, "left"),
        c = ("absolute" === r || "fixed" === r) && V.inArray("auto", [l, u]) > -1,
        d = {},
        f = {};
      c ? (f = a.position(), i = f.top, o = f.left) : (i = parseFloat(l) || 0, o = parseFloat(u) || 0), V.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + i), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : a.css(d)
    }
  }, V.fn.extend({
    position: function() {
      if (this[0]) {
        var e = this[0],
          t = this.offsetParent(),
          n = this.offset(),
          r = tr.test(t[0].nodeName) ? {
            top: 0,
            left: 0
          } : t.offset();
        return n.top -= parseFloat(V.css(e, "marginTop")) || 0, n.left -= parseFloat(V.css(e, "marginLeft")) || 0, r.top += parseFloat(V.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(V.css(t[0], "borderLeftWidth")) || 0, {
          top: n.top - r.top,
          left: n.left - r.left
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var e = this.offsetParent || q.body; e && !tr.test(e.nodeName) && "static" === V.css(e, "position");) e = e.offsetParent;
        return e || q.body
      })
    }
  }), V.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(e, n) {
    var r = /Y/.test(n);
    V.fn[e] = function(i) {
      return V.access(this, function(e, i, o) {
        var a = M(e);
        return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : void(a ? a.scrollTo(r ? V(a).scrollLeft() : o, r ? o : V(a).scrollTop()) : e[i] = o)
      }, e, i, arguments.length, null)
    }
  }), V.each({
    Height: "height",
    Width: "width"
  }, function(e, n) {
    V.each({
      padding: "inner" + e,
      content: n,
      "": "outer" + e
    }, function(r, i) {
      V.fn[i] = function(i, o) {
        var a = arguments.length && (r || "boolean" != typeof i),
          s = r || (i === !0 || o === !0 ? "margin" : "border");
        return V.access(this, function(n, r, i) {
          var o;
          return V.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? V.css(n, r, i, s) : V.style(n, r, i, s)
        }, n, a ? i : t, a, null)
      }
    })
  }), e.jQuery = e.$ = V, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
    return V
  })
}(window),
function(e) {
  "use strict";

  function t(t, i) {
    this.settings = e.extend({}, r, i), this.modal = t, this.buildDOM(), this.addEventListeners(), this.index = e[n].lookup.push(this) - 1, this.busy = !1
  }
  var n = "remodal",
    r = {
      hashTracking: !0,
      closeOnConfirm: !0,
      closeOnCancel: !0
    };
  e[n] = {
    lookup: []
  };
  var i, o, a = function(e) {
      var t = e.css("transition-duration") || e.css("-webkit-transition-duration") || e.css("-moz-transition-duration") || e.css("-o-transition-duration") || e.css("-ms-transition-duration") || 0,
        n = e.css("transition-delay") || e.css("-webkit-transition-delay") || e.css("-moz-transition-delay") || e.css("-o-transition-delay") || e.css("-ms-transition-delay") || 0;
      return 1e3 * (parseFloat(t) + parseFloat(n))
    },
    s = function() {
      if (e(document.body).height() <= e(window).height()) return 0;
      var t = document.createElement("div");
      t.style.visibility = "hidden", t.style.width = "100px", document.body.appendChild(t);
      var n = t.offsetWidth;
      t.style.overflow = "scroll";
      var r = document.createElement("div");
      r.style.width = "100%", t.appendChild(r);
      var i = r.offsetWidth;
      return t.parentNode.removeChild(t), n - i
    },
    l = function() {
      e(document.body).css("padding-right", "+=" + s()), e("html, body").addClass(n + "_lock")
    },
    u = function() {
      e(document.body).css("padding-right", "-=" + s()), e("html, body").removeClass(n + "_lock")
    },
    c = function(e) {
      var t, n, r = {};
      t = e.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ","), n = t.split(",");
      var i, o, a;
      for (i = 0, o = n.length; o > i; i++) n[i] = n[i].split(":"), a = n[i][1], ("string" == typeof a || a instanceof String) && (a = "true" === a || ("false" === a ? !1 : a)), ("string" == typeof a || a instanceof String) && (a = isNaN(a) ? a : +a), r[n[i][0]] = a;
      return r
    };
  t.prototype.buildDOM = function() {
    this.body = e(document.body), this.bg = e("." + n + "-bg"), this.modalClose = e("<a href='#'>").addClass(n + "-close"), this.overlay = e("<div>").addClass(n + "-overlay"), this.modal.hasClass(n) || this.modal.addClass(n), this.modal.css("visibility", "visible"), this.modal.append(this.modalClose), this.overlay.append(this.modal), this.body.append(this.overlay), this.confirm = this.modal.find("." + n + "-confirm"), this.cancel = this.modal.find("." + n + "-cancel");
    var t = a(this.overlay),
      r = a(this.modal),
      i = a(this.bg);
    this.td = r > t ? r : t, this.td = i > this.td ? i : this.td
  }, t.prototype.addEventListeners = function() {
    var t = this;
    this.modalClose.bind("click." + n, function(e) {
      e.preventDefault(), t.close()
    }), this.cancel.bind("click." + n, function(e) {
      e.preventDefault(), t.modal.trigger("cancel"), t.settings.closeOnCancel && t.close()
    }), this.confirm.bind("click." + n, function(e) {
      e.preventDefault(), t.modal.trigger("confirm"), t.settings.closeOnConfirm && t.close()
    }), e(document).bind("keyup." + n, function(e) {
      27 === e.keyCode && t.close()
    }), this.overlay.bind("click." + n, function(r) {
      var i = e(r.target);
      i.hasClass(n + "-overlay") && t.close()
    })
  }, t.prototype.open = function() {
    if (!this.busy) {
      this.busy = !0, this.modal.trigger("open");
      var t = this.modal.attr("data-" + n + "-id");
      t && this.settings.hashTracking && (o = e(window).scrollTop(), location.hash = t), i && i !== this && (i.overlay.hide(), i.body.removeClass(n + "_active")), i = this, l(), this.overlay.show();
      var r = this;
      setTimeout(function() {
        r.body.addClass(n + "_active"), setTimeout(function() {
          r.busy = !1, r.modal.trigger("opened")
        }, r.td + 50)
      }, 25)
    }
  }, t.prototype.close = function() {
    if (!this.busy) {
      this.busy = !0, this.modal.trigger("close"), this.settings.hashTracking && this.modal.attr("data-" + n + "-id") === location.hash.substr(1) && (location.hash = "", e(window).scrollTop(o)), this.body.removeClass(n + "_active");
      var t = this;
      setTimeout(function() {
        t.overlay.hide(), u(), t.busy = !1, t.modal.trigger("closed")
      }, t.td + 50)
    }
  }, e && (e.fn[n] = function(r) {
    var i;
    return this.each(function(o, a) {
      var s = e(a);
      null == s.data(n) && (i = new t(s, r), s.data(n, i.index), i.settings.hashTracking && s.attr("data-" + n + "-id") === location.hash.substr(1) && i.open())
    }), i
  }), e(document).ready(function() {
    e(document).on("click", "[data-" + n + "-target]", function(t) {
      t.preventDefault();
      var r = t.currentTarget,
        i = r.getAttribute("data-" + n + "-target"),
        o = e("[data-" + n + "-id=" + i + "]");
      e[n].lookup[o.data(n)].open()
    }), e(document).find("." + n).each(function(t, r) {
      var i = e(r),
        o = i.data(n + "-options");
      o ? ("string" == typeof o || o instanceof String) && (o = c(o)) : o = {}, i[n](o)
    })
  });
  var d = function(t, r) {
    var o = location.hash.replace("#", "");
    if ("undefined" == typeof r && (r = !0), o) {
      var a;
      try {
        a = e("[data-" + n + "-id=" + o.replace(new RegExp("/", "g"), "\\/") + "]")
      } catch (t) {}
      if (a && a.length) {
        var s = e[n].lookup[a.data(n)];
        s && s.settings.hashTracking && s.open()
      }
    } else r && i && !i.busy && i.settings.hashTracking && i.close()
  };
  e(window).bind("hashchange." + n, d)
}(window.jQuery || window.Zepto), ! function(e) {
  var t = {
    animation: "dissolve",
    separator: ",",
    speed: 2e3
  };
  e.fx.step.textShadowBlur = function(t) {
    e(t.elem).prop("textShadowBlur", t.now).css({
      textShadow: "0 0 " + Math.floor(t.now) + "px black"
    })
  }, e.fn.textrotator = function(n) {
    var r = e.extend({}, t, n);
    return this.each(function() {
      var t = e(this),
        n = [];
      e.each(t.text().split(r.separator), function(e, t) {
        n.push(t)
      }), t.text(n[0]);
      var i = function() {
        switch (r.animation) {
          case "dissolve":
            t.animate({
              textShadowBlur: 20,
              opacity: 0
            }, 500, function() {
              o = e.inArray(t.text(), n), o + 1 == n.length && (o = -1), t.text(n[o + 1]).animate({
                textShadowBlur: 0,
                opacity: 1
              }, 500)
            });
            break;
          case "flip":
            t.find(".back").length > 0 && t.html(t.find(".back").html());
            var i = t.text(),
              o = e.inArray(i, n);
            o + 1 == n.length && (o = -1), t.html(""), e("<span class='front'>" + i + "</span>").appendTo(t), e("<span class='back'>" + n[o + 1] + "</span>").appendTo(t), t.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip").show().css({
              "-webkit-transform": " rotateY(-180deg)",
              "-moz-transform": " rotateY(-180deg)",
              "-o-transform": " rotateY(-180deg)",
              transform: " rotateY(-180deg)"
            });
            break;
          case "flipUp":
            t.find(".back").length > 0 && t.html(t.find(".back").html());
            var i = t.text(),
              o = e.inArray(i, n);
            o + 1 == n.length && (o = -1), t.html(""), e("<span class='front'>" + i + "</span>").appendTo(t), e("<span class='back'>" + n[o + 1] + "</span>").appendTo(t), t.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip up").show().css({
              "-webkit-transform": " rotateX(-180deg)",
              "-moz-transform": " rotateX(-180deg)",
              "-o-transform": " rotateX(-180deg)",
              transform: " rotateX(-180deg)"
            });
            break;
          case "flipCube":
            t.find(".back").length > 0 && t.html(t.find(".back").html());
            var i = t.text(),
              o = e.inArray(i, n);
            o + 1 == n.length && (o = -1), t.html(""), e("<span class='front'>" + i + "</span>").appendTo(t), e("<span class='back'>" + n[o + 1] + "</span>").appendTo(t), t.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube").show().css({
              "-webkit-transform": " rotateY(180deg)",
              "-moz-transform": " rotateY(180deg)",
              "-o-transform": " rotateY(180deg)",
              transform: " rotateY(180deg)"
            });
            break;
          case "flipCubeUp":
            t.find(".back").length > 0 && t.html(t.find(".back").html());
            var i = t.text(),
              o = e.inArray(i, n);
            o + 1 == n.length && (o = -1), t.html(""), e("<span class='front'>" + i + "</span>").appendTo(t), e("<span class='back'>" + n[o + 1] + "</span>").appendTo(t), t.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube up").show().css({
              "-webkit-transform": " rotateX(180deg)",
              "-moz-transform": " rotateX(180deg)",
              "-o-transform": " rotateX(180deg)",
              transform: " rotateX(180deg)"
            });
            break;
          case "spin":
            t.find(".rotating").length > 0 && t.html(t.find(".rotating").html()), o = e.inArray(t.text(), n), o + 1 == n.length && (o = -1), t.wrapInner("<span class='rotating spin' />").find(".rotating").hide().text(n[o + 1]).show().css({
              "-webkit-transform": " rotate(0) scale(1)",
              "-moz-transform": "rotate(0) scale(1)",
              "-o-transform": "rotate(0) scale(1)",
              transform: "rotate(0) scale(1)"
            });
            break;
          case "fade":
            t.fadeOut(r.speed, function() {
              o = e.inArray(t.text(), n), o + 1 == n.length && (o = -1), t.text(n[o + 1]).fadeIn(r.speed)
            })
        }
      };
      setInterval(i, r.speed)
    })
  }
}(window.jQuery), ! function(e, t, n, r) {
  "use strict";
  if (!t.history.pushState) return e.fn.smoothState = function() {
    return this
  }, void(e.fn.smoothState.options = {});
  if (!e.fn.smoothState) {
    var i = e("html, body"),
      o = t.console,
      a = {
        debug: !1,
        anchors: "a",
        forms: "form",
        allowFormCaching: !1,
        repeatDelay: 500,
        blacklist: ".no-smoothState",
        prefetch: !1,
        prefetchOn: "mouseover touchstart",
        cacheLength: 0,
        loadingClass: "is-loading",
        alterRequest: function(e) {
          return e
        },
        onBefore: function() {},
        onStart: {
          duration: 0,
          render: function() {}
        },
        onProgress: {
          duration: 0,
          render: function() {}
        },
        onReady: {
          duration: 0,
          render: function(e, t) {
            e.html(t)
          }
        },
        onAfter: function() {}
      },
      s = {
        isExternal: function(e) {
          var n = e.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
          return "string" == typeof n[1] && n[1].length > 0 && n[1].toLowerCase() !== t.location.protocol ? !0 : "string" == typeof n[2] && n[2].length > 0 && n[2].replace(new RegExp(":(" + {
            "http:": 80,
            "https:": 443
          }[t.location.protocol] + ")?$"), "") !== t.location.host ? !0 : !1
        },
        stripHash: function(e) {
          return e.replace(/#.*/, "")
        },
        isHash: function(e, n) {
          n = n || t.location.href;
          var r = e.indexOf("#") > -1 ? !0 : !1,
            i = s.stripHash(e) === s.stripHash(n) ? !0 : !1;
          return r && i
        },
        translate: function(t) {
          var n = {
            dataType: "html",
            type: "GET"
          };
          return t = "string" == typeof t ? e.extend({}, n, {
            url: t
          }) : e.extend({}, n, t)
        },
        shouldLoadAnchor: function(e, t) {
          var n = e.prop("href");
          return !(s.isExternal(n) || s.isHash(n) || e.is(t) || e.prop("target"))
        },
        clearIfOverCapacity: function(e, t) {
          return Object.keys || (Object.keys = function(e) {
            var t, n = [];
            for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
            return n
          }), Object.keys(e).length > t && (e = {}), e
        },
        storePageIn: function(t, n, r, i) {
          var o = e("<html></html>").append(e(r));
          return t[n] = {
            status: "loaded",
            title: o.find("title").first().text(),
            html: o.find("#" + i)
          }, t
        },
        triggerAllAnimationEndEvent: function(t, n) {
          n = " " + n || "";
          var r = 0,
            i = "animationstart webkitAnimationStart oanimationstart MSAnimationStart",
            o = "animationend webkitAnimationEnd oanimationend MSAnimationEnd",
            a = "allanimationend",
            l = function(n) {
              e(n.delegateTarget).is(t) && (n.stopPropagation(), r++)
            },
            u = function(n) {
              e(n.delegateTarget).is(t) && (n.stopPropagation(), r--, 0 === r && t.trigger(a))
            };
          t.on(i, l), t.on(o, u), t.on("allanimationend" + n, function() {
            r = 0, s.redraw(t)
          })
        },
        redraw: function(e) {
          e.height()
        }
      },
      l = function(n) {
        if (null !== n.state) {
          var r = t.location.href,
            i = e("#" + n.state.id),
            o = i.data("smoothState");
          o.href === r || s.isHash(r, o.href) || o.load(r, !1)
        }
      },
      u = function(a, l) {
        var u = e(a),
          c = u.prop("id"),
          d = null,
          f = !1,
          p = {},
          h = t.location.href,
          g = function(e) {
            e = e || !1, e && p.hasOwnProperty(e) ? delete p[e] : p = {}, u.data("smoothState").cache = p
          },
          m = function(t, n) {
            n = n || e.noop;
            var r = s.translate(t);
            if (!p.hasOwnProperty(r.url) || "undefined" != typeof r.data) {
              p = s.clearIfOverCapacity(p, l.cacheLength), p[r.url] = {
                status: "fetching"
              };
              var i = e.ajax(r);
              i.success(function(e) {
                s.storePageIn(p, r.url, e, c), u.data("smoothState").cache = p
              }), i.error(function() {
                p[r.url].status = "error"
              }), n && i.complete(n)
            }
          },
          y = function() {
            if (d) {
              var t = e(d, u);
              if (t.length) {
                var n = t.offset().top;
                i.scrollTop(n)
              }
              d = null
            }
          },
          v = function(r) {
            var a = "#" + c,
              s = p[r] ? e(p[r].html.html()) : null;
            s.length ? (n.title = p[r].title, u.data("smoothState").href = r, l.loadingClass && i.removeClass(l.loadingClass), l.onReady.render(u, s), u.one("ss.onReadyEnd", function() {
              f = !1, l.onAfter(u, s), y()
            }), t.setTimeout(function() {
              u.trigger("ss.onReadyEnd")
            }, l.onReady.duration)) : !s && l.debug && o ? o.warn("No element with an id of " + a + " in response from " + r + " in " + p) : t.location = r
          },
          b = function(e, n, r) {
            var a = s.translate(e);
            "undefined" == typeof n && (n = !0), "undefined" == typeof r && (r = !0);
            var d = !1,
              f = !1,
              h = {
                loaded: function() {
                  var e = d ? "ss.onProgressEnd" : "ss.onStartEnd";
                  f && d ? f && v(a.url) : u.one(e, function() {
                    v(a.url)
                  }), n && t.history.pushState({
                    id: c
                  }, p[a.url].title, a.url), r || g(a.url)
                },
                fetching: function() {
                  d || (d = !0, u.one("ss.onStartEnd", function() {
                    l.loadingClass && i.addClass(l.loadingClass), l.onProgress.render(u), t.setTimeout(function() {
                      u.trigger("ss.onProgressEnd"), f = !0
                    }, l.onProgress.duration)
                  })), t.setTimeout(function() {
                    p.hasOwnProperty(a.url) && h[p[a.url].status]()
                  }, 10)
                },
                error: function() {
                  l.debug && o ? o.log("There was an error loading: " + a.url) : t.location = a.url
                }
              };
            p.hasOwnProperty(a.url) || m(a), l.onStart.render(u), t.setTimeout(function() {
              i.scrollTop(0), u.trigger("ss.onStartEnd")
            }, l.onStart.duration), h[p[a.url].status]()
          },
          x = function(t) {
            var n, r = e(t.currentTarget);
            s.shouldLoadAnchor(r, l.blacklist) && !f && (t.stopPropagation(), n = s.translate(r.prop("href")), n = l.alterRequest(n), m(n))
          },
          w = function(t) {
            var n = e(t.currentTarget);
            if (!t.metaKey && !t.ctrlKey && s.shouldLoadAnchor(n, l.blacklist) && (t.stopPropagation(), t.preventDefault(), !C())) {
              N();
              var r = s.translate(n.prop("href"));
              f = !0, d = n.prop("hash"), r = l.alterRequest(r), l.onBefore(n, u), b(r)
            }
          },
          k = function(t) {
            var n = e(t.currentTarget);
            if (!n.is(l.blacklist) && (t.preventDefault(), t.stopPropagation(), !C())) {
              N();
              var i = {
                url: n.prop("action"),
                data: n.serialize(),
                type: n.prop("method")
              };
              f = !0, i = l.alterRequest(i), "get" === i.type.toLowerCase() && (i.url = i.url + "?" + i.data), l.onBefore(n, u), b(i, r, l.allowFormCaching)
            }
          },
          T = 0,
          C = function() {
            var e = null === l.repeatDelay,
              t = parseInt(Date.now()) > T;
            return !(e || t)
          },
          N = function() {
            T = parseInt(Date.now()) + parseInt(l.repeatDelay)
          },
          E = function(e) {
            l.anchors && (e.on("click", l.anchors, w), l.prefetch && e.on(l.prefetchOn, l.anchors, x)), l.forms && e.on("submit", l.forms, k)
          },
          S = function() {
            var e = u.prop("class");
            u.removeClass(e), s.redraw(u), u.addClass(e)
          };
        return l = e.extend({}, e.fn.smoothState.options, l), null === t.history.state && t.history.replaceState({
          id: c
        }, n.title, h), s.storePageIn(p, h, n.documentElement.outerHTML, c), s.triggerAllAnimationEndEvent(u, "ss.onStartEnd ss.onProgressEnd ss.onEndEnd"), E(u), {
          href: h,
          cache: p,
          clear: g,
          load: b,
          fetch: m,
          restartCSSAnimations: S
        }
      },
      c = function(t) {
        return this.each(function() {
          var n = this.tagName.toLowerCase();
          this.id && "body" !== n && "html" !== n && !e.data(this, "smoothState") ? e.data(this, "smoothState", new u(this, t)) : !this.id && o ? o.warn("Every smoothState container needs an id but the following one does not have one:", this) : "body" !== n && "html" !== n || !o || o.warn("The smoothstate container cannot be the " + this.tagName + " tag")
        })
      };
    t.onpopstate = l, e.smoothStateUtility = s, e.fn.smoothState = c, e.fn.smoothState.options = a
  }
}(jQuery, window, document), window.Modernizr = function(e, t, n) {
    function r(e) {
      v.cssText = e
    }

    function i(e, t) {
      return typeof e === t
    }

    function o(e, t) {
      return !!~("" + e).indexOf(t)
    }

    function a(e, t) {
      for (var r in e) {
        var i = e[r];
        if (!o(i, "-") && v[i] !== n) return "pfx" == t ? i : !0
      }
      return !1
    }

    function s(e, t, r) {
      for (var o in e) {
        var a = t[e[o]];
        if (a !== n) return r === !1 ? e[o] : i(a, "function") ? a.bind(r || t) : a
      }
      return !1
    }

    function l(e, t, n) {
      var r = e.charAt(0).toUpperCase() + e.slice(1),
        o = (e + " " + w.join(r + " ") + r).split(" ");
      return i(t, "string") || i(t, "undefined") ? a(o, t) : (o = (e + " " + k.join(r + " ") + r).split(" "), s(o, t, n))
    }
    var u, c, d, f = "2.6.2",
      p = {},
      h = !0,
      g = t.documentElement,
      m = "modernizr",
      y = t.createElement(m),
      v = y.style,
      b = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
      x = "Webkit Moz O ms",
      w = x.split(" "),
      k = x.toLowerCase().split(" "),
      T = {},
      C = [],
      N = C.slice,
      E = function(e, n, r, i) {
        var o, a, s, l, u = t.createElement("div"),
          c = t.body,
          d = c || t.createElement("body");
        if (parseInt(r, 10))
          for (; r--;) s = t.createElement("div"), s.id = i ? i[r] : m + (r + 1), u.appendChild(s);
        return o = ["&#173;", '<style id="s', m, '">', e, "</style>"].join(""), u.id = m, (c ? u : d).innerHTML += o, d.appendChild(u), c || (d.style.background = "", d.style.overflow = "hidden", l = g.style.overflow, g.style.overflow = "hidden", g.appendChild(d)), a = n(u, e), c ? u.parentNode.removeChild(u) : (d.parentNode.removeChild(d), g.style.overflow = l), !!a
      },
      S = {}.hasOwnProperty;
    d = i(S, "undefined") || i(S.call, "undefined") ? function(e, t) {
      return t in e && i(e.constructor.prototype[t], "undefined")
    } : function(e, t) {
      return S.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function(e) {
      var t = this;
      if ("function" != typeof t) throw new TypeError;
      var n = N.call(arguments, 1),
        r = function() {
          if (this instanceof r) {
            var i = function() {};
            i.prototype = t.prototype;
            var o = new i,
              a = t.apply(o, n.concat(N.call(arguments)));
            return Object(a) === a ? a : o
          }
          return t.apply(e, n.concat(N.call(arguments)))
        };
      return r
    }), T.csstransforms = function() {
      return !!l("transform")
    }, T.csstransforms3d = function() {
      var e = !!l("perspective");
      return e && "webkitPerspective" in g.style && E("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t) {
        e = 9 === t.offsetLeft && 3 === t.offsetHeight
      }), e
    }, T.csstransitions = function() {
      return l("transition")
    };
    for (var A in T) d(T, A) && (c = A.toLowerCase(), p[c] = T[A](), C.push((p[c] ? "" : "no-") + c));
    return p.addTest = function(e, t) {
        if ("object" == typeof e)
          for (var r in e) d(e, r) && p.addTest(r, e[r]);
        else {
          if (e = e.toLowerCase(), p[e] !== n) return p;
          t = "function" == typeof t ? t() : t, "undefined" != typeof h && h && (g.className += " " + (t ? "" : "no-") + e), p[e] = t
        }
        return p
      }, r(""), y = u = null,
      function(e, t) {
        function n(e, t) {
          var n = e.createElement("p"),
            r = e.getElementsByTagName("head")[0] || e.documentElement;
          return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
          var e = y.elements;
          return "string" == typeof e ? e.split(" ") : e
        }

        function i(e) {
          var t = m[e[h]];
          return t || (t = {}, g++, e[h] = g, m[g] = t), t
        }

        function o(e, n, r) {
          if (n || (n = t), c) return n.createElement(e);
          r || (r = i(n));
          var o;
          return o = r.cache[e] ? r.cache[e].cloneNode() : p.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), o.canHaveChildren && !f.test(e) ? r.frag.appendChild(o) : o
        }

        function a(e, n) {
          if (e || (e = t), c) return e.createDocumentFragment();
          n = n || i(e);
          for (var o = n.frag.cloneNode(), a = 0, s = r(), l = s.length; l > a; a++) o.createElement(s[a]);
          return o
        }

        function s(e, t) {
          t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
            return y.shivMethods ? o(n, e, t) : t.createElem(n)
          }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/\w+/g, function(e) {
            return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
          }) + ");return n}")(y, t.frag)
        }

        function l(e) {
          e || (e = t);
          var r = i(e);
          return y.shivCSS && !u && !r.hasCSS && (r.hasCSS = !!n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), c || s(e, r), e
        }
        var u, c, d = e.html5 || {},
          f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
          p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
          h = "_html5shiv",
          g = 0,
          m = {};
        ! function() {
          try {
            var e = t.createElement("a");
            e.innerHTML = "<xyz></xyz>", u = "hidden" in e, c = 1 == e.childNodes.length || function() {
              t.createElement("a");
              var e = t.createDocumentFragment();
              return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
            }()
          } catch (n) {
            u = !0, c = !0
          }
        }();
        var y = {
          elements: d.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
          shivCSS: d.shivCSS !== !1,
          supportsUnknownElements: c,
          shivMethods: d.shivMethods !== !1,
          type: "default",
          shivDocument: l,
          createElement: o,
          createDocumentFragment: a
        };
        e.html5 = y, l(t)
      }(this, t), p._version = f, p._prefixes = b, p._domPrefixes = k, p._cssomPrefixes = w, p.testProp = function(e) {
        return a([e])
      }, p.testAllProps = l, p.testStyles = E, p.prefixed = function(e, t, n) {
        return t ? l(e, t, n) : l(e, "pfx")
      }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (h ? " js " + C.join(" ") : ""), p
  }(this, this.document),
  function(e, t, n) {
    function r(e) {
      return "[object Function]" == m.call(e)
    }

    function i(e) {
      return "string" == typeof e
    }

    function o() {}

    function a(e) {
      return !e || "loaded" == e || "complete" == e || "uninitialized" == e
    }

    function s() {
      var e = y.shift();
      v = 1, e ? e.t ? h(function() {
        ("c" == e.t ? f.injectCss : f.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
      }, 0) : (e(), s()) : v = 0
    }

    function l(e, n, r, i, o, l, u) {
      function c(t) {
        if (!p && a(d.readyState) && (b.r = p = 1, !v && s(), d.onload = d.onreadystatechange = null, t)) {
          "img" != e && h(function() {
            w.removeChild(d)
          }, 50);
          for (var r in E[n]) E[n].hasOwnProperty(r) && E[n][r].onload()
        }
      }
      var u = u || f.errorTimeout,
        d = t.createElement(e),
        p = 0,
        m = 0,
        b = {
          t: r,
          s: n,
          e: o,
          a: l,
          x: u
        };
      1 === E[n] && (m = 1, E[n] = []), "object" == e ? d.data = n : (d.src = n, d.type = e), d.width = d.height = "0", d.onerror = d.onload = d.onreadystatechange = function() {
        c.call(this, m)
      }, y.splice(i, 0, b), "img" != e && (m || 2 === E[n] ? (w.insertBefore(d, x ? null : g), h(c, u)) : E[n].push(d))
    }

    function u(e, t, n, r, o) {
      return v = 0, t = t || "j", i(e) ? l("c" == t ? T : k, e, t, this.i++, n, r, o) : (y.splice(this.i++, 0, e), 1 == y.length && s()), this
    }

    function c() {
      var e = f;
      return e.loader = {
        load: u,
        i: 0
      }, e
    }
    var d, f, p = t.documentElement,
      h = e.setTimeout,
      g = t.getElementsByTagName("script")[0],
      m = {}.toString,
      y = [],
      v = 0,
      b = "MozAppearance" in p.style,
      x = b && !!t.createRange().compareNode,
      w = x ? p : g.parentNode,
      p = e.opera && "[object Opera]" == m.call(e.opera),
      p = !!t.attachEvent && !p,
      k = b ? "object" : p ? "script" : "img",
      T = p ? "script" : k,
      C = Array.isArray || function(e) {
        return "[object Array]" == m.call(e)
      },
      N = [],
      E = {},
      S = {
        timeout: function(e, t) {
          return t.length && (e.timeout = t[0]), e
        }
      };
    f = function(e) {
      function t(e) {
        var t, n, r, e = e.split("!"),
          i = N.length,
          o = e.pop(),
          a = e.length,
          o = {
            url: o,
            origUrl: o,
            prefixes: e
          };
        for (n = 0; a > n; n++) r = e[n].split("="), (t = S[r.shift()]) && (o = t(o, r));
        for (n = 0; i > n; n++) o = N[n](o);
        return o
      }

      function a(e, i, o, a, s) {
        var l = t(e),
          u = l.autoCallback;
        l.url.split(".").pop().split("?").shift(), l.bypass || (i && (i = r(i) ? i : i[e] || i[a] || i[e.split("/").pop().split("?")[0]]), l.instead ? l.instead(e, i, o, a, s) : (E[l.url] ? l.noexec = !0 : E[l.url] = 1, o.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : n, l.noexec, l.attrs, l.timeout), (r(i) || r(u)) && o.load(function() {
          c(), i && i(l.origUrl, s, a), u && u(l.origUrl, s, a), E[l.url] = 2
        })))
      }

      function s(e, t) {
        function n(e, n) {
          if (e) {
            if (i(e)) n || (d = function() {
              var e = [].slice.call(arguments);
              f.apply(this, e), p()
            }), a(e, d, t, 0, u);
            else if (Object(e) === e)
              for (l in s = function() {
                  var t, n = 0;
                  for (t in e) e.hasOwnProperty(t) && n++;
                  return n
                }(), e) e.hasOwnProperty(l) && (!n && !--s && (r(d) ? d = function() {
                var e = [].slice.call(arguments);
                f.apply(this, e), p()
              } : d[l] = function(e) {
                return function() {
                  var t = [].slice.call(arguments);
                  e && e.apply(this, t), p()
                }
              }(f[l])), a(e[l], d, t, l, u))
          } else !n && p()
        }
        var s, l, u = !!e.test,
          c = e.load || e.both,
          d = e.callback || o,
          f = d,
          p = e.complete || o;
        n(u ? e.yep : e.nope, !!c), c && n(c)
      }
      var l, u, d = this.yepnope.loader;
      if (i(e)) a(e, 0, d, 0);
      else if (C(e))
        for (l = 0; l < e.length; l++) u = e[l], i(u) ? a(u, 0, d, 0) : C(u) ? f(u) : Object(u) === u && s(u, d);
      else Object(e) === e && s(e, d)
    }, f.addPrefix = function(e, t) {
      S[e] = t
    }, f.addFilter = function(e) {
      N.push(e)
    }, f.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", d = function() {
      t.removeEventListener("DOMContentLoaded", d, 0), t.readyState = "complete"
    }, 0)), e.yepnope = c(), e.yepnope.executeStack = s, e.yepnope.injectJs = function(e, n, r, i, l, u) {
      var c, d, p = t.createElement("script"),
        i = i || f.errorTimeout;
      p.src = e;
      for (d in r) p.setAttribute(d, r[d]);
      n = u ? s : n || o, p.onreadystatechange = p.onload = function() {
        !c && a(p.readyState) && (c = 1, n(), p.onload = p.onreadystatechange = null)
      }, h(function() {
        c || (c = 1, n(1))
      }, i), l ? p.onload() : g.parentNode.insertBefore(p, g)
    }, e.yepnope.injectCss = function(e, n, r, i, a, l) {
      var u, i = t.createElement("link"),
        n = l ? s : n || o;
      i.href = e, i.rel = "stylesheet", i.type = "text/css";
      for (u in r) i.setAttribute(u, r[u]);
      a || (g.parentNode.insertBefore(i, g), h(n, 0))
    }
  }(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
  };
var $content = $(".hero .message"),
  $blur = $(""),
  wHeight = $(window).height();
$(window).on("resize", function() {
  wHeight = $(window).height()
}), window.requestAnimFrame = function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
    window.setTimeout(e, 1e3 / 60)
  }
}(), Scroller.prototype = {
  init: function() {
    window.addEventListener("scroll", this.onScroll.bind(this), !1)
  },
  onScroll: function() {
    this.latestKnownScrollY = window.scrollY, this.requestTick()
  },
  requestTick: function() {
    this.ticking || window.requestAnimFrame(this.update.bind(this)), this.ticking = !0
  },
  update: function() {
    var e = this.latestKnownScrollY;
    this.ticking = !1;
    var t = e / 3,
      n = 1 * e;
    $content.css({
      transform: "translateY(-" + t + "px)",
      "-moz-transform": "translateY(-" + t + "px)",
      "-webkit-transform": "translateY(-" + t + "px)"
    }), $blur.css({
      opacity: n / wHeight
    })
  }
};
var scroller = new Scroller;
scroller.init(), self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {};
var Prism = function() {
  var e = /\blang(?:uage)?-(?!\*)(\w+)\b/i,
    t = self.Prism = {
      util: {
        encode: function(e) {
          return e instanceof n ? new n(e.type, t.util.encode(e.content), e.alias) : "Array" === t.util.type(e) ? e.map(t.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
        },
        type: function(e) {
          return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
        },
        clone: function(e) {
          var n = t.util.type(e);
          switch (n) {
            case "Object":
              var r = {};
              for (var i in e) e.hasOwnProperty(i) && (r[i] = t.util.clone(e[i]));
              return r;
            case "Array":
              return e.map(function(e) {
                return t.util.clone(e)
              })
          }
          return e
        }
      },
      languages: {
        extend: function(e, n) {
          var r = t.util.clone(t.languages[e]);
          for (var i in n) r[i] = n[i];
          return r
        },
        insertBefore: function(e, n, r, i) {
          i = i || t.languages;
          var o = i[e];
          if (2 == arguments.length) {
            r = arguments[1];
            for (var a in r) r.hasOwnProperty(a) && (o[a] = r[a]);
            return o
          }
          var s = {};
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              if (l == n)
                for (var a in r) r.hasOwnProperty(a) && (s[a] = r[a]);
              s[l] = o[l]
            }
          return t.languages.DFS(t.languages, function(t, n) {
            n === i[e] && t != e && (this[t] = s)
          }), i[e] = s
        },
        DFS: function(e, n, r) {
          for (var i in e) e.hasOwnProperty(i) && (n.call(e, i, e[i], r || i), "Object" === t.util.type(e[i]) ? t.languages.DFS(e[i], n) : "Array" === t.util.type(e[i]) && t.languages.DFS(e[i], n, i))
        }
      },
      highlightAll: function(e, n) {
        for (var r, i = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'), o = 0; r = i[o++];) t.highlightElement(r, e === !0, n)
      },
      highlightElement: function(r, i, o) {
        for (var a, s, l = r; l && !e.test(l.className);) l = l.parentNode;
        if (l && (a = (l.className.match(e) || [, ""])[1], s = t.languages[a]), r.className = r.className.replace(e, "").replace(/\s+/g, " ") + " language-" + a, l = r.parentNode, /pre/i.test(l.nodeName) && (l.className = l.className.replace(e, "").replace(/\s+/g, " ") + " language-" + a), s) {
          var u = r.textContent;
          if (u) {
            u = u.replace(/^(?:\r?\n|\r)/, "");
            var c = {
              element: r,
              language: a,
              grammar: s,
              code: u
            };
            if (t.hooks.run("before-highlight", c), i && self.Worker) {
              var d = new Worker(t.filename);
              d.onmessage = function(e) {
                c.highlightedCode = n.stringify(JSON.parse(e.data), a), t.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, o && o.call(c.element), t.hooks.run("after-highlight", c)
              }, d.postMessage(JSON.stringify({
                language: c.language,
                code: c.code
              }))
            } else c.highlightedCode = t.highlight(c.code, c.grammar, c.language), t.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, o && o.call(r), t.hooks.run("after-highlight", c)
          }
        }
      },
      highlight: function(e, r, i) {
        var o = t.tokenize(e, r);
        return n.stringify(t.util.encode(o), i)
      },
      tokenize: function(e, n) {
        var r = t.Token,
          i = [e],
          o = n.rest;
        if (o) {
          for (var a in o) n[a] = o[a];
          delete n.rest
        }
        e: for (var a in n)
          if (n.hasOwnProperty(a) && n[a]) {
            var s = n[a];
            s = "Array" === t.util.type(s) ? s : [s];
            for (var l = 0; l < s.length; ++l) {
              var u = s[l],
                c = u.inside,
                d = !!u.lookbehind,
                f = 0,
                p = u.alias;
              u = u.pattern || u;
              for (var h = 0; h < i.length; h++) {
                var g = i[h];
                if (i.length > e.length) break e;
                if (!(g instanceof r)) {
                  u.lastIndex = 0;
                  var m = u.exec(g);
                  if (m) {
                    d && (f = m[1].length);
                    var y = m.index - 1 + f,
                      m = m[0].slice(f),
                      v = m.length,
                      b = y + v,
                      x = g.slice(0, y + 1),
                      w = g.slice(b + 1),
                      k = [h, 1];
                    x && k.push(x);
                    var T = new r(a, c ? t.tokenize(m, c) : m, p);
                    k.push(T), w && k.push(w), Array.prototype.splice.apply(i, k)
                  }
                }
              }
            }
          }
        return i
      },
      hooks: {
        all: {},
        add: function(e, n) {
          var r = t.hooks.all;
          r[e] = r[e] || [], r[e].push(n)
        },
        run: function(e, n) {
          var r = t.hooks.all[e];
          if (r && r.length)
            for (var i, o = 0; i = r[o++];) i(n)
        }
      }
    },
    n = t.Token = function(e, t, n) {
      this.type = e, this.content = t, this.alias = n
    };
  if (n.stringify = function(e, r, i) {
      if ("string" == typeof e) return e;
      if ("Array" === t.util.type(e)) return e.map(function(t) {
        return n.stringify(t, r, e)
      }).join("");
      var o = {
        type: e.type,
        content: n.stringify(e.content, r, i),
        tag: "span",
        classes: ["token", e.type],
        attributes: {},
        language: r,
        parent: i
      };
      if ("comment" == o.type && (o.attributes.spellcheck = "true"), e.alias) {
        var a = "Array" === t.util.type(e.alias) ? e.alias : [e.alias];
        Array.prototype.push.apply(o.classes, a)
      }
      t.hooks.run("wrap", o);
      var s = "";
      for (var l in o.attributes) s += l + '="' + (o.attributes[l] || "") + '"';
      return "<" + o.tag + ' class="' + o.classes.join(" ") + '" ' + s + ">" + o.content + "</" + o.tag + ">"
    }, !self.document) return self.addEventListener ? (self.addEventListener("message", function(e) {
    var n = JSON.parse(e.data),
      r = n.language,
      i = n.code;
    self.postMessage(JSON.stringify(t.util.encode(t.tokenize(i, t.languages[r])))), self.close()
  }, !1), self.Prism) : self.Prism;
  var r = document.getElementsByTagName("script");
  return r = r[r.length - 1], r && (t.filename = r.src, document.addEventListener && !r.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", t.highlightAll)), self.Prism
}();
"undefined" != typeof module && module.exports && (module.exports = Prism), Prism.languages.markup = {
    comment: /<!--[\w\W]*?-->/,
    prolog: /<\?[\w\W]+?\?>/,
    doctype: /<!DOCTYPE[\w\W]+?>/,
    cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
    tag: {
      pattern: /<\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/i,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "attr-value": {
          pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
          inside: {
            punctuation: /[=>"']/
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: /&#?[\da-z]{1,8};/i
  }, Prism.hooks.add("wrap", function(e) {
    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
  }), Prism.languages.css = {
    comment: /\/\*[\w\W]*?\*\//,
    atrule: {
      pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
      inside: {
        rule: /@[\w-]+/
      }
    },
    url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
    selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
    string: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
    property: /(\b|\B)[\w-]+(?=\s*:)/i,
    important: /\B!important\b/i,
    "function": /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:]/
  }, Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css), Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
    style: {
      pattern: /<style[\w\W]*?>[\w\W]*?<\/style>/i,
      inside: {
        tag: {
          pattern: /<style[\w\W]*?>|<\/style>/i,
          inside: Prism.languages.markup.tag.inside
        },
        rest: Prism.languages.css
      },
      alias: "language-css"
    }
  }), Prism.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
      pattern: /\s*style=("|').*?\1/i,
      inside: {
        "attr-name": {
          pattern: /^\s*style/i,
          inside: Prism.languages.markup.tag.inside
        },
        punctuation: /^\s*=\s*['"]|['"]\s*$/,
        "attr-value": {
          pattern: /.+/i,
          inside: Prism.languages.css
        }
      },
      alias: "language-css"
    }
  }, Prism.languages.markup.tag)), Prism.languages.clike = {
    comment: [{
      pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
      lookbehind: !0
    }, {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: !0
    }],
    string: /("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    "class-name": {
      pattern: /((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /(\.|\\)/
      }
    },
    keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    "boolean": /\b(true|false)\b/,
    "function": {
      pattern: /[a-z0-9_]+\(/i,
      inside: {
        punctuation: /\(/
      }
    },
    number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,
    operator: /[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,
    ignore: /&(lt|gt|amp);/i,
    punctuation: /[{}[\];(),.:]/
  }, Prism.languages.javascript = Prism.languages.extend("clike", {
    keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,
    number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
    "function": /(?!\d)[a-z0-9_$]+(?=\()/i
  }), Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
      lookbehind: !0
    }
  }), Prism.languages.insertBefore("javascript", "class-name", {
    "template-string": {
      pattern: /`(?:\\`|\\?[^`])*`/,
      inside: {
        interpolation: {
          pattern: /\$\{[^}]+\}/,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: Prism.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    }
  }), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
    script: {
      pattern: /<script[\w\W]*?>[\w\W]*?<\/script>/i,
      inside: {
        tag: {
          pattern: /<script[\w\W]*?>|<\/script>/i,
          inside: Prism.languages.markup.tag.inside
        },
        rest: Prism.languages.javascript
      },
      alias: "language-javascript"
    }
  }), Prism.languages.css.selector = {
    pattern: /[^\{\}\s][^\{\}]*(?=\s*\{)/,
    inside: {
      "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      "pseudo-class": /:[-\w]+(?:\(.*\))?/,
      "class": /\.[-:\.\w]+/,
      id: /#[-:\.\w]+/
    }
  }, Prism.languages.insertBefore("css", "function", {
    hexcode: /#[\da-f]{3,6}/i,
    entity: /\\[\da-f]{1,8}/i,
    number: /[\d%\.]+/
  }), Prism.languages.git = {
    comment: /^#.*$/m,
    string: /("|')(\\?.)*?\1/m,
    command: {
      pattern: /^.*\$ git .*$/m,
      inside: {
        parameter: /\s(--|-)\w+/m
      }
    },
    coord: /^@@.*@@$/m,
    deleted: /^-(?!-).+$/m,
    inserted: /^\+(?!\+).+$/m,
    commit_sha1: /^commit \w{40}$/m
  }, Prism.languages.markdown = Prism.languages.extend("markup", {}), Prism.languages.insertBefore("markdown", "prolog", {
    blockquote: {
      pattern: /(^|\n)>(?:[\t ]*>)*/,
      lookbehind: !0,
      alias: "punctuation"
    },
    code: [{
      pattern: /(^|\n)(?: {4}|\t).+/,
      lookbehind: !0,
      alias: "keyword"
    }, {
      pattern: /``.+?``|`[^`\n]+`/,
      alias: "keyword"
    }],
    title: [{
      pattern: /\w+.*\n(?:==+|--+)/,
      alias: "important",
      inside: {
        punctuation: /==+$|--+$/
      }
    }, {
      pattern: /((?:^|\n)\s*)#+.+/,
      lookbehind: !0,
      alias: "important",
      inside: {
        punctuation: /^#+|#+$/
      }
    }],
    hr: {
      pattern: /((?:^|\n)\s*)([*-])([\t ]*\2){2,}(?=\s*(?:\n|$))/,
      lookbehind: !0,
      alias: "punctuation"
    },
    list: {
      pattern: /((?:^|\n)\s*)(?:[*+-]|\d+\.)(?=[\t ].)/,
      lookbehind: !0,
      alias: "punctuation"
    },
    "url-reference": {
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:[^>]|\\>)+>)(?:[\t ]+(?:"(?:[^"]|\\")*"|'(?:[^']|\\')*'|\((?:[^)]|\\\))*\)))?/,
      inside: {
        variable: {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: !0
        },
        string: /(?:"(?:[^"]|\\")*"|'(?:[^']|\\')*'|\((?:[^)]|\\\))*\))$/,
        punctuation: /[[\]\(\)<>:]/
      },
      alias: "url"
    },
    bold: {
      pattern: /(^|[^\\])(\*\*|__)(?:\n(?!\n)|.)+?\2/,
      lookbehind: !0,
      inside: {
        punctuation: /^\*\*|^__|\*\*\s*$|__\s*$/
      }
    },
    italic: {
      pattern: /(^|[^\\])(?:\*(?:\n(?!\n)|.)+?\*|_(?:\n(?!\n)|.)+?_)/,
      lookbehind: !0,
      inside: {
        punctuation: /^[*_]|[*_]$/
      }
    },
    url: {
      pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:[^"]|\\")*")?\)| ?\[[^\]\n]*\])/,
      inside: {
        variable: {
          pattern: /(!?\[)[^\]]+(?=\]$)/,
          lookbehind: !0
        },
        string: {
          pattern: /"(?:[^"]|\\")*"(?=\)$)/
        }
      }
    }
  }), Prism.languages.markdown.bold.inside.url = Prism.util.clone(Prism.languages.markdown.url), Prism.languages.markdown.italic.inside.url = Prism.util.clone(Prism.languages.markdown.url), Prism.languages.markdown.bold.inside.italic = Prism.util.clone(Prism.languages.markdown.italic), Prism.languages.markdown.italic.inside.bold = Prism.util.clone(Prism.languages.markdown.bold), Prism.languages.php = Prism.languages.extend("clike", {
    keyword: /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
    constant: /\b[A-Z0-9_]{2,}\b/,
    comment: {
      pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])(\/\/).*?(\r?\n|$))/,
      lookbehind: !0
    }
  }), Prism.languages.insertBefore("php", "class-name", {
    "shell-comment": {
      pattern: /(^|[^\\])#.*?(\r?\n|$)/,
      lookbehind: !0,
      alias: "comment"
    }
  }), Prism.languages.insertBefore("php", "keyword", {
    delimiter: /(\?>|<\?php|<\?)/i,
    variable: /(\$\w+)\b/i,
    "package": {
      pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
      lookbehind: !0,
      inside: {
        punctuation: /\\/
      }
    }
  }), Prism.languages.insertBefore("php", "operator", {
    property: {
      pattern: /(->)[\w]+/,
      lookbehind: !0
    }
  }), Prism.languages.markup && (Prism.hooks.add("before-highlight", function(e) {
    "php" === e.language && (e.tokenStack = [], e.backupCode = e.code, e.code = e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi, function(t) {
      return e.tokenStack.push(t), "{{{PHP" + e.tokenStack.length + "}}}"
    }))
  }), Prism.hooks.add("before-insert", function(e) {
    "php" === e.language && (e.code = e.backupCode, delete e.backupCode)
  }), Prism.hooks.add("after-highlight", function(e) {
    if ("php" === e.language) {
      for (var t, n = 0; t = e.tokenStack[n]; n++) e.highlightedCode = e.highlightedCode.replace("{{{PHP" + (n + 1) + "}}}", Prism.highlight(t, e.grammar, "php"));
      e.element.innerHTML = e.highlightedCode
    }
  }), Prism.hooks.add("wrap", function(e) {
    "php" === e.language && "markup" === e.type && (e.content = e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g, '<span class="token php">$1</span>'))
  }), Prism.languages.insertBefore("php", "comment", {
    markup: {
      pattern: /<[^?]\/?(.*?)>/,
      inside: Prism.languages.markup
    },
    php: /\{\{\{PHP[0-9]+\}\}\}/
  })), ! function(e) {
    e.languages.sass = e.languages.extend("css", {
      comment: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m
    }), e.languages.insertBefore("sass", "atrule", {
      "atrule-line": {
        pattern: /^(?:[ \t]*)[@+=].+/m,
        inside: {
          atrule: /^(?:[ \t]*)(?:@[\w-]+|[+=])/m
        }
      }
    }), delete e.languages.sass.atrule;
    var t = /((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i,
      n = /[-+]{1,2}|==?|!=|\|?\||\?|\*|\/|%/;
    e.languages.insertBefore("sass", "property", {
      "variable-line": {
        pattern: /(^|(?:\r?\n|\r))[ \t]*\$.+/,
        lookbehind: !0,
        inside: {
          punctuation: /:/,
          variable: t,
          operator: n
        }
      },
      "property-line": {
        pattern: /(^|(?:\r?\n|\r))[ \t]*(?:[^:\s]+[ ]*:.*|:[^:\s]+.*)/i,
        lookbehind: !0,
        inside: {
          property: [/[^:\s]+(?=\s*:)/, {
            pattern: /(:)[^:\s]+/,
            lookbehind: !0
          }],
          punctuation: /:/,
          variable: t,
          operator: n,
          important: e.languages.sass.important
        }
      }
    }), delete e.languages.sass.property, delete e.languages.sass.important, delete e.languages.sass.selector, e.languages.insertBefore("sass", "punctuation", {
      selector: {
        pattern: /([ \t]*).+(?:,(?:\r?\n|\r)\1[ \t]+.+)*/,
        lookbehind: !0
      }
    })
  }(Prism), Prism.languages.scss = Prism.languages.extend("css", {
    comment: {
      pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/,
      lookbehind: !0
    },
    atrule: {
      pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+(\{|;))/i,
      inside: {
        rule: /@[\w-]+/
      }
    },
    url: /([-a-z]+-)*url(?=\()/i,
    selector: /([^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+)(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m
  }), Prism.languages.insertBefore("scss", "atrule", {
    keyword: /@(if|else if|else|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)|(?=@for\s+\$[-_\w]+\s)+from/i
  }), Prism.languages.insertBefore("scss", "property", {
    variable: /((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i
  }), Prism.languages.insertBefore("scss", "function", {
    placeholder: /%[-_\w]+/i,
    statement: /\B!(default|optional)\b/i,
    "boolean": /\b(true|false)\b/,
    "null": /\b(null)\b/,
    operator: /\s+([-+]{1,2}|={1,2}|!=|\|?\||\?|\*|\/|%)\s+/
  }), Prism.languages.scss.atrule.inside.rest = Prism.util.clone(Prism.languages.scss), ! function() {
    function e(e, t) {
      return Array.prototype.slice.call((t || document).querySelectorAll(e))
    }

    function t(e, t) {
      return t = " " + t + " ", (" " + e.className + " ").replace(/[\n\t]/g, " ").indexOf(t) > -1
    }

    function n(e, n, r) {
      for (var i, o = n.replace(/\s+/g, "").split(","), a = +e.getAttribute("data-line-offset") || 0, s = parseFloat(getComputedStyle(e).lineHeight), l = 0; i = o[l++];) {
        i = i.split("-");
        var u = +i[0],
          c = +i[1] || u,
          d = document.createElement("div");
        d.textContent = Array(c - u + 2).join(" \n"), d.className = (r || "") + " line-highlight", t(e, "line-numbers") || (d.setAttribute("data-start", u), c > u && d.setAttribute("data-end", c)), d.style.top = (u - a - 1) * s + "px", t(e, "line-numbers") ? e.appendChild(d) : (e.querySelector("code") || e).appendChild(d)
      }
    }

    function r() {
      var t = location.hash.slice(1);
      e(".temporary.line-highlight").forEach(function(e) {
        e.parentNode.removeChild(e)
      });
      var r = (t.match(/\.([\d,-]+)$/) || [, ""])[1];
      if (r && !document.getElementById(t)) {
        var i = t.slice(0, t.lastIndexOf(".")),
          o = document.getElementById(i);
        o && (o.hasAttribute("data-line") || o.setAttribute("data-line", ""), n(o, r, "temporary "), document.querySelector(".temporary.line-highlight").scrollIntoView())
      }
    }
    if (window.Prism) {
      var i = (crlf = /\r?\n|\r/g, 0);
      Prism.hooks.add("after-highlight", function(t) {
        var o = t.element.parentNode,
          a = o && o.getAttribute("data-line");
        o && a && /pre/i.test(o.nodeName) && (clearTimeout(i), e(".line-highlight", o).forEach(function(e) {
          e.parentNode.removeChild(e)
        }), n(o, a), i = setTimeout(r, 1))
      }), addEventListener("hashchange", r)
    }
  }(), Prism.hooks.add("after-highlight", function(e) {
    var t = e.element.parentNode,
      n = /\s*\bline-numbers\b\s*/;
    if (t && /pre/i.test(t.nodeName) && (n.test(t.className) || n.test(e.element.className))) {
      n.test(e.element.className) && (e.element.className = e.element.className.replace(n, "")), n.test(t.className) || (t.className += " line-numbers");
      var r, i = 1 + e.code.split("\n").length,
        o = new Array(i);
      o = o.join("<span></span>"), r = document.createElement("span"), r.className = "line-numbers-rows", r.innerHTML = o, t.hasAttribute("data-start") && (t.style.counterReset = "linenumber " + (parseInt(t.getAttribute("data-start"), 10) - 1)), e.element.appendChild(r)
    }
  }), ! function() {
    if (self.Prism) {
      var e = {
        csharp: "C#",
        cpp: "C++"
      };
      Prism.hooks.add("before-highlight", function(t) {
        var n = t.element.parentNode;
        if (n && /pre/i.test(n.nodeName)) {
          var r = e[t.language] || t.language;
          n.setAttribute("data-language", r)
        }
      })
    }
  }(),
  function(e) {
    e.fn.readingTime = function(t) {
      if (!this.length) return this;
      var n = {
          readingTimeTarget: ".eta",
          wordCountTarget: null,
          wordsPerMinute: 270,
          round: !0,
          lang: "en",
          lessThanAMinuteString: "",
          prependTimeString: "",
          prependWordString: "",
          remotePath: null,
          remoteTarget: null
        },
        r = this,
        i = e(this);
      r.settings = e.extend({}, n, t);
      var o = r.settings.readingTimeTarget,
        a = r.settings.wordCountTarget,
        s = r.settings.wordsPerMinute,
        l = r.settings.round,
        u = r.settings.lang,
        c = r.settings.lessThanAMinuteString,
        d = r.settings.prependTimeString,
        f = r.settings.prependWordString,
        p = r.settings.remotePath,
        h = r.settings.remoteTarget;
      if ("it" == u) var g = c || "Meno di un minuto",
        m = "min";
      else if ("fr" == u) var g = c || "Moins d'une minute",
        m = "min";
      else if ("de" == u) var g = c || "Weniger als eine Minute",
        m = "min";
      else if ("es" == u) var g = c || "Menos de un minuto",
        m = "min";
      else if ("nl" == u) var g = c || "Minder dan een minuut",
        m = "min";
      else var g = c || "Less than a minute",
        m = "min";
      var y = function(t) {
        var n = t.trim().split(/\s+/g).length,
          r = s / 60,
          i = n / r;
        if (l === !0) var u = Math.round(i / 60);
        else var u = Math.floor(i / 60);
        var c = Math.round(i - 60 * u);
        if (l === !0) e(o).text(u > 0 ? d + u + " " + m : d + g);
        else {
          var p = u + ":" + c;
          e(o).text(d + p)
        }
        "" !== a && void 0 !== a && e(a).text(f + n)
      };
      i.each(function() {
        null != p && null != h ? e.get(p, function(t) {
          y(e("<div>").html(t).find(h).text())
        }) : y(i.text())
      })
    }
  }(jQuery),
  function(e, t) {
    "use strict";
    var n = t.Modernizr;
    e.CBPFWSlider = function(t, n) {
      this.$el = e(n), this._init(t)
    }, e.CBPFWSlider.defaults = {
      speed: 500,
      easing: "ease"
    }, e.CBPFWSlider.prototype = {
      _init: function(t) {
        this.options = e.extend(!0, {}, e.CBPFWSlider.defaults, t), this._config(), this._initEvents()
      },
      _config: function() {
        this.$list = this.$el.children("ul"), this.$items = this.$list.children("li"), this.itemsCount = this.$items.length, this.support = n.csstransitions && n.csstransforms, this.support3d = n.csstransforms3d;
        var t = {
          WebkitTransition: {
            transitionEndEvent: "webkitTransitionEnd",
            tranformName: "-webkit-transform"
          },
          MozTransition: {
            transitionEndEvent: "transitionend",
            tranformName: "-moz-transform"
          },
          OTransition: {
            transitionEndEvent: "oTransitionEnd",
            tranformName: "-o-transform"
          },
          msTransition: {
            transitionEndEvent: "MSTransitionEnd",
            tranformName: "-ms-transform"
          },
          transition: {
            transitionEndEvent: "transitionend",
            tranformName: "transform"
          }
        };
        if (this.support && (this.transEndEventName = t[n.prefixed("transition")].transitionEndEvent + ".cbpFWSlider", this.transformName = t[n.prefixed("transition")].tranformName), this.current = 0, this.old = 0, this.isAnimating = !1, this.$list.css("width", 100 * this.itemsCount + "%"), this.support && this.$list.css("transition", this.transformName + " " + this.options.speed + "ms " + this.options.easing), this.$items.css("width", 100 / this.itemsCount + "%"), this.itemsCount > 1) {
          this.$navPrev = e('<span class="cbp-fwprev"><</span>').hide(), this.$navNext = e('<span class="cbp-fwnext">></span>'), e("<nav/>").append(this.$navPrev, this.$navNext).appendTo(this.$el);
          for (var r = "", i = 0; i < this.itemsCount; ++i) {
            var o = i === this.current ? '<span class="cbp-fwcurrent"></span>' : "<span></span>";
            r += o
          }
          var a = e('<div class="cbp-fwdots"/>').append(r).appendTo(this.$el);
          this.$navDots = a.children("span")
        }
      },
      _initEvents: function() {
        var t = this;
        this.itemsCount > 1 && (this.$navPrev.on("click.cbpFWSlider", e.proxy(this._navigate, this, "previous")), this.$navNext.on("click.cbpFWSlider", e.proxy(this._navigate, this, "next")), this.$navDots.on("click.cbpFWSlider", function() {
          t._jump(e(this).index())
        }))
      },
      _navigate: function(e) {
        return this.isAnimating ? !1 : (this.isAnimating = !0, this.old = this.current, "next" === e && this.current < this.itemsCount - 1 ? ++this.current : "previous" === e && this.current > 0 && --this.current, void this._slide())
      },
      _slide: function() {
        this._toggleNavControls();
        var t = -1 * this.current * 100 / this.itemsCount;
        this.support ? this.$list.css("transform", this.support3d ? "translate3d(" + t + "%,0,0)" : "translate(" + t + "%)") : this.$list.css("margin-left", -1 * this.current * 100 + "%");
        var n = e.proxy(function() {
          this.isAnimating = !1
        }, this);
        this.support ? this.$list.on(this.transEndEventName, e.proxy(n, this)) : n.call()
      },
      _toggleNavControls: function() {
        switch (this.current) {
          case 0:
            this.$navNext.show(), this.$navPrev.hide();
            break;
          case this.itemsCount - 1:
            this.$navNext.hide(), this.$navPrev.show();
            break;
          default:
            this.$navNext.show(), this.$navPrev.show()
        }
        this.$navDots.eq(this.old).removeClass("cbp-fwcurrent").end().eq(this.current).addClass("cbp-fwcurrent")
      },
      _jump: function(e) {
        return e === this.current || this.isAnimating ? !1 : (this.isAnimating = !0, this.old = this.current, this.current = e, void this._slide())
      },
      destroy: function() {
        this.itemsCount > 1 && (this.$navPrev.parent().remove(), this.$navDots.parent().remove()), this.$list.css("width", "auto"), this.support && this.$list.css("transition", "none"), this.$items.css("width", "auto")
      }
    };
    var r = function(e) {
      t.console && t.console.error(e)
    };
    e.fn.cbpFWSlider = function(t) {
      if ("string" == typeof t) {
        var n = Array.prototype.slice.call(arguments, 1);
        this.each(function() {
          var i = e.data(this, "cbpFWSlider");
          return i ? e.isFunction(i[t]) && "_" !== t.charAt(0) ? void i[t].apply(i, n) : void r("no such method '" + t + "' for cbpFWSlider instance") : void r("cannot call methods on cbpFWSlider prior to initialization; attempted to call method '" + t + "'")
        })
      } else this.each(function() {
        var n = e.data(this, "cbpFWSlider");
        n ? n._init() : n = e.data(this, "cbpFWSlider", new e.CBPFWSlider(t, this))
      });
      return this
    }
  }(jQuery, window);
