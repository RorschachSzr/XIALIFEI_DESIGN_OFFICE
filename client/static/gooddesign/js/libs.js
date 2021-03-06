!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = a.length
          , c = _.type(a);
        return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    function d(a, b, c) {
        if (_.isFunction(b))
            return _.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return _.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (hb.test(b))
                return _.filter(b, a, c);
            b = _.filter(b, a)
        }
        return _.grep(a, function(a) {
            return U.call(b, a) >= 0 !== c
        })
    }
    function e(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType; )
            ;
        return a
    }
    function f(a) {
        var b = ob[a] = {};
        return _.each(a.match(nb) || [], function(a, c) {
            b[c] = !0
        }),
        b
    }
    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1),
        a.removeEventListener("load", g, !1),
        _.ready()
    }
    function h() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }),
        this.expando = _.expando + Math.random()
    }
    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(ub, "-$1").toLowerCase(),
            c = a.getAttribute(d),
            "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : tb.test(c) ? _.parseJSON(c) : c
                } catch (e) {}
                sb.set(a, b, c)
            } else
                c = void 0;
        return c
    }
    function j() {
        return !0
    }
    function k() {
        return !1
    }
    function l() {
        try {
            return Z.activeElement
        } catch (a) {}
    }
    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
        a
    }
    function o(a) {
        var b = Kb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            rb.set(a[c], "globalEval", !b || rb.get(b[c], "globalEval"))
    }
    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (rb.hasData(a) && (f = rb.access(a),
            g = rb.set(b, f),
            j = f.events)) {
                delete g.handle,
                g.events = {};
                for (e in j)
                    for (c = 0,
                    d = j[e].length; d > c; c++)
                        _.event.add(b, e, j[e][c])
            }
            sb.hasData(a) && (h = sb.access(a),
            i = _.extend({}, h),
            sb.set(b, i))
        }
    }
    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
    }
    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && yb.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
        return e.detach(),
        f
    }
    function u(a) {
        var b = Z
          , c = Ob[a];
        return c || (c = t(a, b),
        "none" !== c && c || (Nb = (Nb || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
        b = Nb[0].contentDocument,
        b.write(),
        b.close(),
        c = t(a, b),
        Nb.detach()),
        Ob[a] = c),
        c
    }
    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Rb(a),
        c && (g = c.getPropertyValue(b) || c[b]),
        c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)),
        Qb.test(g) && Pb.test(b) && (d = h.width,
        e = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = g,
        g = c.width,
        h.width = d,
        h.minWidth = e,
        h.maxWidth = f)),
        void 0 !== g ? g + "" : g
    }
    function w(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    function x(a, b) {
        if (b in a)
            return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xb.length; e--; )
            if (b = Xb[e] + c,
            b in a)
                return b;
        return d
    }
    function y(a, b, c) {
        var d = Tb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += _.css(a, c + wb[f], !0, e)),
            d ? ("content" === c && (g -= _.css(a, "padding" + wb[f], !0, e)),
            "margin" !== c && (g -= _.css(a, "border" + wb[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wb[f], !0, e),
            "padding" !== c && (g += _.css(a, "border" + wb[f] + "Width", !0, e)));
        return g
    }
    function A(a, b, c) {
        var d = !0
          , e = "width" === b ? a.offsetWidth : a.offsetHeight
          , f = Rb(a)
          , g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f),
            (0 > e || null == e) && (e = a.style[b]),
            Qb.test(e))
                return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g],
            d.style && (f[g] = rb.get(d, "olddisplay"),
            c = d.style.display,
            b ? (f[g] || "none" !== c || (d.style.display = ""),
            "" === d.style.display && xb(d) && (f[g] = rb.access(d, "olddisplay", u(d.nodeName)))) : (e = xb(d),
            "none" === c && e || rb.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g],
            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function C(a, b, c, d, e) {
        return new C.prototype.init(a,b,c,d,e)
    }
    function D() {
        return setTimeout(function() {
            Yb = void 0
        }),
        Yb = _.now()
    }
    function E(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)
            c = wb[d],
            e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a),
        e
    }
    function F(a, b, c) {
        for (var d, e = (cc[b] || []).concat(cc["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && xb(a), p = rb.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"),
        null == h.unqueued && (h.unqueued = 0,
        i = h.empty.fire,
        h.empty.fire = function() {
            h.unqueued || i()
        }
        ),
        h.unqueued++,
        l.always(function() {
            l.always(function() {
                h.unqueued--,
                _.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY],
        j = _.css(a, "display"),
        k = "none" === j ? rb.get(a, "olddisplay") || u(a.nodeName) : j,
        "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")),
        c.overflow && (n.overflow = "hidden",
        l.always(function() {
            n.overflow = c.overflow[0],
            n.overflowX = c.overflow[1],
            n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d],
            $b.exec(e)) {
                if (delete b[d],
                f = f || "toggle" === e,
                e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d])
                        continue;
                    o = !0
                }
                m[d] = p && p[d] || _.style(a, d)
            } else
                j = void 0;
        if (_.isEmptyObject(m))
            "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden"in p && (o = p.hidden) : p = rb.access(a, "fxshow", {}),
            f && (p.hidden = !o),
            o ? _(a).show() : l.done(function() {
                _(a).hide()
            }),
            l.done(function() {
                var b;
                rb.remove(a, "fxshow");
                for (b in m)
                    _.style(a, b, m[b])
            });
            for (d in m)
                g = F(o ? p[d] : 0, d, l),
                d in p || (p[d] = g.start,
                o && (g.end = g.start,
                g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function H(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = _.camelCase(c),
            e = b[d],
            f = a[c],
            _.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = _.cssHooks[d],
            g && "expand"in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function I(a, b, c) {
        var d, e, f = 0, g = bc.length, h = _.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = Yb || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]),
            !1)
        }, j = h.promise({
            elem: a,
            props: _.extend({}, b),
            opts: _.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Yb || D(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++)
            if (d = bc[f].call(j, a, k, j.opts))
                return d;
        return _.map(k, F, j),
        _.isFunction(j.opts.start) && j.opts.start.call(a, j),
        _.fx.timer(_.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e = 0, f = b.toLowerCase().match(nb) || [];
            if (_.isFunction(c))
                for (; d = f[e++]; )
                    "+" === d[0] ? (d = d.slice(1) || "*",
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0,
            _.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                e(j),
                !1)
            }),
            i
        }
        var f = {}
          , g = a === vc;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }
    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b)
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d),
        a
    }
    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
            i.shift(),
            void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f),
        c[f]) : void 0
    }
    function N(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; )
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                    !g)
                        for (e in j)
                            if (h = e.split(" "),
                            h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    function O(a, b, c, d) {
        var e;
        if (_.isArray(b))
            _.each(b, function(b, e) {
                c || zc.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== _.type(b))
            d(a, b);
        else
            for (e in b)
                O(a + "[" + e + "]", b[e], c, d)
    }
    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var Q = []
      , R = Q.slice
      , S = Q.concat
      , T = Q.push
      , U = Q.indexOf
      , V = {}
      , W = V.toString
      , X = V.hasOwnProperty
      , Y = {}
      , Z = a.document
      , $ = "2.1.1"
      , _ = function(a, b) {
        return new _.fn.init(a,b)
    }
      , ab = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , bb = /^-ms-/
      , cb = /-([\da-z])/gi
      , db = function(a, b) {
        return b.toUpperCase()
    };
    _.fn = _.prototype = {
        jquery: $,
        constructor: _,
        selector: "",
        length: 0,
        toArray: function() {
            return R.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
        },
        pushStack: function(a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a, b) {
            return _.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(_.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(R.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: T,
        sort: Q.sort,
        splice: Q.splice
    },
    _.extend = _.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || _.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a)
                    c = g[b],
                    d = a[b],
                    g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1,
                    f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {},
                    g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }
    ,
    _.extend({
        expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === _.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !_.isArray(a) && a - parseFloat(a) >= 0
        },
        isPlainObject: function(a) {
            return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = _.trim(a),
            a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"),
            b.text = a,
            Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(bb, "ms-").replace(cb, db)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d),
                    e !== !1); f++)
                        ;
                else
                    for (f in a)
                        if (e = b.apply(a[f], d),
                        e === !1)
                            break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]),
                e !== !1); f++)
                    ;
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]),
                    e === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(ab, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)),
            d
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : U.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++)
                a[e++] = b[d];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f),
                d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h)
                for (; g > f; f++)
                    e = b(a[f], f, d),
                    null != e && i.push(e);
            else
                for (f in a)
                    e = b(a[f], f, d),
                    null != e && i.push(e);
            return S.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b],
            b = a,
            a = c),
            _.isFunction(a) ? (d = R.call(arguments, 2),
            e = function() {
                return a.apply(b || this, d.concat(R.call(arguments)))
            }
            ,
            e.guid = a.guid = a.guid || _.guid++,
            e) : void 0
        },
        now: Date.now,
        support: Y
    }),
    _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        V["[object " + b + "]"] = b.toLowerCase()
    });
    var eb = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b),
            b = b || G,
            c = c || [],
            !a || "string" != typeof a)
                return c;
            if (1 !== (h = b.nodeType) && 9 !== h)
                return [];
            if (I && !d) {
                if (e = sb.exec(a))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g),
                            !f || !f.parentNode)
                                return c;
                            if (f.id === g)
                                return c.push(f),
                                c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g)
                            return c.push(f),
                            c
                    } else {
                        if (e[2])
                            return _.apply(c, b.getElementsByTagName(a)),
                            c;
                        if ((g = e[3]) && v.getElementsByClassName && b.getElementsByClassName)
                            return _.apply(c, b.getElementsByClassName(g)),
                            c
                    }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N,
                    o = b,
                    p = 9 === h && a,
                    1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a),
                        (l = b.getAttribute("id")) ? n = l.replace(ub, "\\$&") : b.setAttribute("id", n),
                        n = "[id='" + n + "'] ",
                        i = j.length; i--; )
                            j[i] = n + m(j[i]);
                        o = tb.test(a) && k(b.parentNode) || b,
                        p = j.join(",")
                    }
                    if (p)
                        try {
                            return _.apply(c, o.querySelectorAll(p)),
                            c
                        } catch (q) {} finally {
                            l || b.removeAttribute("id")
                        }
                }
            }
            return B(a.replace(ib, "$1"), b, c, d)
        }
        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()],
                a[c + " "] = d
            }
            var b = [];
            return a
        }
        function d(a) {
            return a[N] = !0,
            a
        }
        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--; )
                w.attrHandle[c[d]] = b
        }
        function g(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || W) - (~a.sourceIndex || W);
            if (d)
                return d;
            if (c)
                for (; c = c.nextSibling; )
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function j(a) {
            return d(function(b) {
                return b = +b,
                d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; )
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function k(a) {
            return a && typeof a.getElementsByTagName !== V && a
        }
        function l() {}
        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function n(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === d
              , f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d]; )
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
            : function(b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d]; )
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    for (; b = b[d]; )
                        if (1 === b.nodeType || e) {
                            if (i = b[N] || (b[N] = {}),
                            (h = i[d]) && h[0] === P && h[1] === f)
                                return j[2] = h[2];
                            if (i[d] = j,
                            j[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; )
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
            : a[0]
        }
        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++)
                b(a, c[e], d);
            return d
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f),
                j && b.push(h));
            return g
        }
        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)),
            f && !f[N] && (f = r(f, g)),
            d(function(d, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [h] : h, []), s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i),
                e)
                    for (j = q(t, n),
                    e(j, [], h, i),
                    k = j.length; k--; )
                        (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [],
                            k = t.length; k--; )
                                (l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--; )
                            (l = t[k]) && (j = f ? bb.call(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else
                    t = q(t === g ? t.splice(o, t.length) : t),
                    f ? f(null, g, t, i) : _.apply(g, t)
            })
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                return a === b
            }, g, !0), j = n(function(a) {
                return bb.call(b, a) > -1
            }, g, !0), k = [function(a, c, d) {
                return !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
            }
            ]; e > h; h++)
                if (c = w.relative[a[h].type])
                    k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches),
                    c[N]) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++)
                            ;
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ib, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                    }
                    k.push(c)
                }
            return o(k)
        }
        function t(a, c) {
            var e = c.length > 0
              , f = a.length > 0
              , g = function(d, g, h, i, j) {
                var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j), u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0; m = a[l++]; )
                            if (m(k, g, h)) {
                                i.push(k);
                                break
                            }
                        j && (P = u)
                    }
                    e && ((k = !m && k) && n--,
                    d && p.push(k))
                }
                if (n += o,
                e && o !== n) {
                    for (l = 0; m = c[l++]; )
                        m(p, r, g, h);
                    if (d) {
                        if (n > 0)
                            for (; o--; )
                                p[o] || r[o] || (r[o] = Z.call(i));
                        r = q(r)
                    }
                    _.apply(i, r),
                    j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                }
                return j && (P = u,
                C = s),
                p
            };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date, O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function(a, b) {
            return a === b && (E = !0),
            0
        }, V = "undefined", W = 1 << 31, X = {}.hasOwnProperty, Y = [], Z = Y.pop, $ = Y.push, _ = Y.push, ab = Y.slice, bb = Y.indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] === a)
                    return b;
            return -1
        }
        , cb = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", db = "[\\x20\\t\\r\\n\\f]", eb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", fb = eb.replace("w", "w#"), gb = "\\[" + db + "*(" + eb + ")(?:" + db + "*([*^$|!~]?=)" + db + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + fb + "))|)" + db + "*\\]", hb = ":(" + eb + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + gb + ")*)|.*)\\)|)", ib = new RegExp("^" + db + "+|((?:^|[^\\\\])(?:\\\\.)*)" + db + "+$","g"), jb = new RegExp("^" + db + "*," + db + "*"), kb = new RegExp("^" + db + "*([>+~]|" + db + ")" + db + "*"), lb = new RegExp("=" + db + "*([^\\]'\"]*?)" + db + "*\\]","g"), mb = new RegExp(hb), nb = new RegExp("^" + fb + "$"), ob = {
            ID: new RegExp("^#(" + eb + ")"),
            CLASS: new RegExp("^\\.(" + eb + ")"),
            TAG: new RegExp("^(" + eb.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + gb),
            PSEUDO: new RegExp("^" + hb),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + db + "*(even|odd|(([+-]|)(\\d*)n|)" + db + "*(?:([+-]|)" + db + "*(\\d+)|))" + db + "*\\)|)","i"),
            bool: new RegExp("^(?:" + cb + ")$","i"),
            needsContext: new RegExp("^" + db + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + db + "*((?:-\\d)?\\d*)" + db + "*\\)|)(?=[^-]|$)","i")
        }, pb = /^(?:input|select|textarea|button)$/i, qb = /^h\d$/i, rb = /^[^{]+\{\s*\[native \w/, sb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tb = /[+~]/, ub = /'|\\/g, vb = new RegExp("\\\\([\\da-f]{1,6}" + db + "?|(" + db + ")|.)","ig"), wb = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        };
        try {
            _.apply(Y = ab.call(O.childNodes), O.childNodes),
            Y[O.childNodes.length].nodeType
        } catch (xb) {
            _ = {
                apply: Y.length ? function(a, b) {
                    $.apply(a, ab.call(b))
                }
                : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; )
                        ;
                    a.length = c - 1
                }
            }
        }
        v = b.support = {},
        y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }
        ,
        F = b.setDocument = function(a) {
            var b, c = a ? a.ownerDocument || a : O, d = c.defaultView;
            return c !== G && 9 === c.nodeType && c.documentElement ? (G = c,
            H = c.documentElement,
            I = !y(c),
            d && d !== d.top && (d.addEventListener ? d.addEventListener("unload", function() {
                F()
            }, !1) : d.attachEvent && d.attachEvent("onunload", function() {
                F()
            })),
            v.attributes = e(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            v.getElementsByTagName = e(function(a) {
                return a.appendChild(c.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            v.getElementsByClassName = rb.test(c.getElementsByClassName) && e(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>",
                a.firstChild.className = "i",
                2 === a.getElementsByClassName("i").length
            }),
            v.getById = e(function(a) {
                return H.appendChild(a).id = N,
                !c.getElementsByName || !c.getElementsByName(N).length
            }),
            v.getById ? (w.find.ID = function(a, b) {
                if (typeof b.getElementById !== V && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }
            ,
            w.filter.ID = function(a) {
                var b = a.replace(vb, wb);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete w.find.ID,
            w.filter.ID = function(a) {
                var b = a.replace(vb, wb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ),
            w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== V ? b.getElementsByTagName(a) : void 0
            }
            : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++]; )
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }
            ,
            w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== V && I ? b.getElementsByClassName(a) : void 0
            }
            ,
            K = [],
            J = [],
            (v.qsa = rb.test(c.querySelectorAll)) && (e(function(a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowclip^='']").length && J.push("[*^$]=" + db + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || J.push("\\[" + db + "*(?:value|" + cb + ")"),
                a.querySelectorAll(":checked").length || J.push(":checked")
            }),
            e(function(a) {
                var b = c.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && J.push("name" + db + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                J.push(",.*:")
            })),
            (v.matchesSelector = rb.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"),
                L.call(a, "[s!='']:x"),
                K.push("!=", hb)
            }),
            J = J.length && new RegExp(J.join("|")),
            K = K.length && new RegExp(K.join("|")),
            b = rb.test(H.compareDocumentPosition),
            M = b || rb.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a
                  , d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
            : function(a, b) {
                if (b)
                    for (; b = b.parentNode; )
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            U = b ? function(a, b) {
                if (a === b)
                    return E = !0,
                    0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & d || !v.sortDetached && b.compareDocumentPosition(a) === d ? a === c || a.ownerDocument === O && M(O, a) ? -1 : b === c || b.ownerDocument === O && M(O, b) ? 1 : D ? bb.call(D, a) - bb.call(D, b) : 0 : 4 & d ? -1 : 1)
            }
            : function(a, b) {
                if (a === b)
                    return E = !0,
                    0;
                var d, e = 0, f = a.parentNode, h = b.parentNode, i = [a], j = [b];
                if (!f || !h)
                    return a === c ? -1 : b === c ? 1 : f ? -1 : h ? 1 : D ? bb.call(D, a) - bb.call(D, b) : 0;
                if (f === h)
                    return g(a, b);
                for (d = a; d = d.parentNode; )
                    i.unshift(d);
                for (d = b; d = d.parentNode; )
                    j.unshift(d);
                for (; i[e] === j[e]; )
                    e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }
            ,
            c) : G
        }
        ,
        b.matches = function(a, c) {
            return b(a, null, null, c)
        }
        ,
        b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a),
            c = c.replace(lb, "='$1']"),
            !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c)))
                try {
                    var d = L.call(a, c);
                    if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return b(c, G, null, [a]).length > 0
        }
        ,
        b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a),
            M(a, b)
        }
        ,
        b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()]
              , d = c && X.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }
        ,
        b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        b.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (E = !v.detectDuplicates,
            D = !v.sortStable && a.slice(0),
            a.sort(U),
            E) {
                for (; b = a[e++]; )
                    b === a[e] && (d = c.push(e));
                for (; d--; )
                    a.splice(c[d], 1)
            }
            return D = null,
            a
        }
        ,
        x = b.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += x(a)
                } else if (3 === e || 4 === e)
                    return a.nodeValue
            } else
                for (; b = a[d++]; )
                    c += x(b);
            return c
        }
        ,
        w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: ob,
            attrHandle: {},
            find: {},
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
                ATTR: function(a) {
                    return a[1] = a[1].replace(vb, wb),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(vb, wb),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return ob.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && mb.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(vb, wb).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + db + ")" + a + "(" + db + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "",
                        "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                    : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p; ) {
                                    for (l = b; l = l[p]; )
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild],
                            g && s) {
                                for (k = q[N] || (q[N] = {}),
                                j = k[a] || [],
                                n = j[0] === P && j[1],
                                m = j[0] === P && j[2],
                                l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); )
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P)
                                m = j[1];
                            else
                                for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]),
                                l !== b)); )
                                    ;
                            return m -= e,
                            m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c],
                    w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--; )
                            d = bb.call(a, e[g]),
                            a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }
                    ) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = []
                      , c = []
                      , e = A(a.replace(ib, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--; )
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a,
                        e(b, null, f, c),
                        !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                    }
                }),
                lang: d(function(a) {
                    return nb.test(a || "") || b.error("unsupported lang: " + a),
                    a = a.replace(vb, wb).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === H
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !w.pseudos.empty(a)
                },
                header: function(a) {
                    return qb.test(a.nodeName)
                },
                input: function(a) {
                    return pb.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function() {
                    return [0]
                }),
                last: j(function(a, b) {
                    return [b - 1]
                }),
                eq: j(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        w.pseudos.nth = w.pseudos.eq;
        for (u in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            w.pseudos[u] = h(u);
        for (u in {
            submit: !0,
            reset: !0
        })
            w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos,
        w.setFilters = new l,
        z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k)
                return c ? 0 : k.slice(0);
            for (h = a,
            i = [],
            j = w.preFilter; h; ) {
                (!d || (e = jb.exec(h))) && (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                d = !1,
                (e = kb.exec(h)) && (d = e.shift(),
                f.push({
                    value: d,
                    type: e[0].replace(ib, " ")
                }),
                h = h.slice(d.length));
                for (g in w.filter)
                    !(e = ob[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(),
                    f.push({
                        value: d,
                        type: g,
                        matches: e
                    }),
                    h = h.slice(d.length));
                if (!d)
                    break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }
        ,
        A = b.compile = function(a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)),
                c = b.length; c--; )
                    f = s(b[c]),
                    f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)),
                f.selector = a
            }
            return f
        }
        ,
        B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
            if (c = c || [],
            1 === l.length) {
                if (f = l[0] = l[0].slice(0),
                f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(vb, wb), b) || [])[0],
                    !b)
                        return c;
                    j && (b = b.parentNode),
                    a = a.slice(f.shift().value.length)
                }
                for (e = ob.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e],
                !w.relative[h = g.type]); )
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(vb, wb), tb.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1),
                        a = d.length && m(f),
                        !a)
                            return _.apply(c, d),
                            c;
                        break
                    }
            }
            return (j || A(a, l))(d, b, !I, c, tb.test(a) && k(b.parentNode) || b),
            c
        }
        ,
        v.sortStable = N.split("").sort(U).join("") === N,
        v.detectDuplicates = !!E,
        F(),
        v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }),
        e(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        v.attributes && e(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(cb, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }),
        b
    }(a);
    _.find = eb,
    _.expr = eb.selectors,
    _.expr[":"] = _.expr.pseudos,
    _.unique = eb.uniqueSort,
    _.text = eb.getText,
    _.isXMLDoc = eb.isXML,
    _.contains = eb.contains;
    var fb = _.expr.match.needsContext
      , gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , hb = /^.[^:#\[\.,]*$/;
    _.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }
    ,
    _.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a)
                return this.pushStack(_(a).filter(function() {
                    for (b = 0; c > b; b++)
                        if (_.contains(e[b], this))
                            return !0
                }));
            for (b = 0; c > b; b++)
                _.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? _.unique(d) : d),
            d.selector = this.selector ? this.selector + " " + a : a,
            d
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && fb.test(a) ? _(a) : a || [], !1).length
        }
    });
    var ib, jb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, kb = _.fn.init = function(a, b) {
        var c, d;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : jb.exec(a),
            !c || !c[1] && b)
                return !b || b.jquery ? (b || ib).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof _ ? b[0] : b,
                _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)),
                gb.test(c[1]) && _.isPlainObject(b))
                    for (c in b)
                        _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = Z.getElementById(c[2]),
            d && d.parentNode && (this.length = 1,
            this[0] = d),
            this.context = Z,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a,
        this.length = 1,
        this) : _.isFunction(a) ? "undefined" != typeof ib.ready ? ib.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context),
        _.makeArray(a, this))
    }
    ;
    kb.prototype = _.fn,
    ib = _(Z);
    var lb = /^(?:parents|prev(?:Until|All))/
      , mb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    _.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
                if (1 === a.nodeType) {
                    if (e && _(a).is(c))
                        break;
                    d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }),
    _.fn.extend({
        has: function(a) {
            var b = _(a, this)
              , c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (_.contains(this, b[a]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = fb.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? _.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }),
    _.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return _.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return _.dir(a, "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return _.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return _.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return _.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return _.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return _.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return _.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || _.merge([], a.childNodes)
        }
    }, function(a, b) {
        _.fn[a] = function(c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = _.filter(d, e)),
            this.length > 1 && (mb[a] || _.unique(e),
            lb.test(a) && e.reverse()),
            this.pushStack(e)
        }
    });
    var nb = /\S+/g
      , ob = {};
    _.Callbacks = function(a) {
        a = "string" == typeof a ? ob[a] || f(a) : _.extend({}, a);
        var b, c, d, e, g, h, i = [], j = !a.once && [], k = function(f) {
            for (b = a.memory && f,
            c = !0,
            h = e || 0,
            e = 0,
            g = i.length,
            d = !0; i && g > h; h++)
                if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                    b = !1;
                    break
                }
            d = !1,
            i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
        }, l = {
            add: function() {
                if (i) {
                    var c = i.length;
                    !function f(b) {
                        _.each(b, function(b, c) {
                            var d = _.type(c);
                            "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    }(arguments),
                    d ? g = i.length : b && (e = c,
                    k(b))
                }
                return this
            },
            remove: function() {
                return i && _.each(arguments, function(a, b) {
                    for (var c; (c = _.inArray(b, i, c)) > -1; )
                        i.splice(c, 1),
                        d && (g >= c && g--,
                        h >= c && h--)
                }),
                this
            },
            has: function(a) {
                return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
            },
            empty: function() {
                return i = [],
                g = 0,
                this
            },
            disable: function() {
                return i = j = b = void 0,
                this
            },
            disabled: function() {
                return !i
            },
            lock: function() {
                return j = void 0,
                b || l.disable(),
                this
            },
            locked: function() {
                return !j
            },
            fireWith: function(a, b) {
                return !i || c && !j || (b = b || [],
                b = [a, b.slice ? b.slice() : b],
                d ? j.push(b) : k(b)),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!c
            }
        };
        return l
    }
    ,
    _.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", _.Callbacks("once memory"), "resolved"], ["reject", "fail", _.Callbacks("once memory"), "rejected"], ["notify", "progress", _.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return _.Deferred(function(c) {
                        _.each(b, function(b, f) {
                            var g = _.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? _.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            _.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                    this
                }
                ,
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b, c, d, e = 0, f = R.call(arguments), g = f.length, h = 1 !== g || a && _.isFunction(a.promise) ? g : 0, i = 1 === h ? a : _.Deferred(), j = function(a, c, d) {
                return function(e) {
                    c[a] = this,
                    d[a] = arguments.length > 1 ? R.call(arguments) : e,
                    d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                }
            };
            if (g > 1)
                for (b = new Array(g),
                c = new Array(g),
                d = new Array(g); g > e; e++)
                    f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f),
            i.promise()
        }
    });
    var pb;
    _.fn.ready = function(a) {
        return _.ready.promise().done(a),
        this
    }
    ,
    _.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? _.readyWait++ : _.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0,
            a !== !0 && --_.readyWait > 0 || (pb.resolveWith(Z, [_]),
            _.fn.triggerHandler && (_(Z).triggerHandler("ready"),
            _(Z).off("ready"))))
        }
    }),
    _.ready.promise = function(b) {
        return pb || (pb = _.Deferred(),
        "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1),
        a.addEventListener("load", g, !1))),
        pb.promise(b)
    }
    ,
    _.ready.promise();
    var qb = _.access = function(a, b, c, d, e, f, g) {
        var h = 0
          , i = a.length
          , j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c)
                _.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
        _.isFunction(d) || (g = !0),
        j && (g ? (b.call(a, d),
        b = null) : (j = b,
        b = function(a, b, c) {
            return j.call(_(a), c)
        }
        )),
        b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
    ;
    _.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }
    ,
    h.uid = 1,
    h.accepts = _.acceptData,
    h.prototype = {
        key: function(a) {
            if (!h.accepts(a))
                return 0;
            var b = {}
              , c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    },
                    Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c,
                    _.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}),
            c
        },
        set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b)
                f[b] = c;
            else if (_.isEmptyObject(f))
                _.extend(this.cache[e], b);
            else
                for (d in b)
                    f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b),
            void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c),
            void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b)
                this.cache[f] = {};
            else {
                _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b),
                b in g ? d = [b, e] : (d = e,
                d = d in g ? [d] : d.match(nb) || [])),
                c = d.length;
                for (; c--; )
                    delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !_.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var rb = new h
      , sb = new h
      , tb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , ub = /([A-Z])/g;
    _.extend({
        hasData: function(a) {
            return sb.hasData(a) || rb.hasData(a)
        },
        data: function(a, b, c) {
            return sb.access(a, b, c)
        },
        removeData: function(a, b) {
            sb.remove(a, b)
        },
        _data: function(a, b, c) {
            return rb.access(a, b, c)
        },
        _removeData: function(a, b) {
            rb.remove(a, b)
        }
    }),
    _.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = sb.get(f),
                1 === f.nodeType && !rb.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--; )
                        g[c] && (d = g[c].name,
                        0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)),
                        i(f, d, e[d])));
                    rb.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                sb.set(this, a)
            }) : qb(this, function(b) {
                var c, d = _.camelCase(a);
                if (f && void 0 === b) {
                    if (c = sb.get(f, a),
                    void 0 !== c)
                        return c;
                    if (c = sb.get(f, d),
                    void 0 !== c)
                        return c;
                    if (c = i(f, d, void 0),
                    void 0 !== c)
                        return c
                } else
                    this.each(function() {
                        var c = sb.get(this, d);
                        sb.set(this, d, b),
                        -1 !== a.indexOf("-") && void 0 !== c && sb.set(this, a, b)
                    })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                sb.remove(this, a)
            })
        }
    }),
    _.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue",
            d = rb.get(a, b),
            c && (!d || _.isArray(c) ? d = rb.access(a, b, _.makeArray(c)) : d.push(c)),
            d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = _.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = _._queueHooks(a, b)
              , g = function() {
                _.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return rb.get(a, c) || rb.access(a, c, {
                empty: _.Callbacks("once memory").add(function() {
                    rb.remove(a, [b + "queue", c])
                })
            })
        }
    }),
    _.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            c--),
            arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = _.queue(this, a, b);
                _._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                _.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = _.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            for ("string" != typeof a && (b = a,
            a = void 0),
            a = a || "fx"; g--; )
                c = rb.get(f[g], a + "queueHooks"),
                c && c.empty && (d++,
                c.empty.add(h));
            return h(),
            e.promise(b)
        }
    });
    var vb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , wb = ["Top", "Right", "Bottom", "Left"]
      , xb = function(a, b) {
        return a = b || a,
        "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
    }
      , yb = /^(?:checkbox|radio)$/i;
    !function() {
        var a = Z.createDocumentFragment()
          , b = a.appendChild(Z.createElement("div"))
          , c = Z.createElement("input");
        c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        b.appendChild(c),
        Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        b.innerHTML = "<textarea>x</textarea>",
        Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var zb = "undefined";
    Y.focusinBubbles = "onfocusin"in a;
    var Ab = /^key/
      , Bb = /^(?:mouse|pointer|contextmenu)|click/
      , Cb = /^(?:focusinfocus|focusoutblur)$/
      , Db = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = rb.get(a);
            if (q)
                for (c.handler && (f = c,
                c = f.handler,
                e = f.selector),
                c.guid || (c.guid = _.guid++),
                (i = q.events) || (i = q.events = {}),
                (g = q.handle) || (g = q.handle = function(b) {
                    return typeof _ !== zb && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
                }
                ),
                b = (b || "").match(nb) || [""],
                j = b.length; j--; )
                    h = Db.exec(b[j]) || [],
                    n = p = h[1],
                    o = (h[2] || "").split(".").sort(),
                    n && (l = _.event.special[n] || {},
                    n = (e ? l.delegateType : l.bindType) || n,
                    l = _.event.special[n] || {},
                    k = _.extend({
                        type: n,
                        origType: p,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && _.expr.match.needsContext.test(e),
                        namespace: o.join(".")
                    }, f),
                    (m = i[n]) || (m = i[n] = [],
                    m.delegateCount = 0,
                    l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)),
                    l.add && (l.add.call(a, k),
                    k.handler.guid || (k.handler.guid = c.guid)),
                    e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                    _.event.global[n] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = rb.hasData(a) && rb.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(nb) || [""],
                j = b.length; j--; )
                    if (h = Db.exec(b[j]) || [],
                    n = p = h[1],
                    o = (h[2] || "").split(".").sort(),
                    n) {
                        for (l = _.event.special[n] || {},
                        n = (d ? l.delegateType : l.bindType) || n,
                        m = i[n] || [],
                        h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        g = f = m.length; f--; )
                            k = m[f],
                            !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1),
                            k.selector && m.delegateCount--,
                            l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle),
                        delete i[n])
                    } else
                        for (n in i)
                            _.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle,
                rb.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || Z], n = X.call(b, "type") ? b.type : b, o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z,
            3 !== d.nodeType && 8 !== d.nodeType && !Cb.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."),
            n = o.shift(),
            o.sort()),
            j = n.indexOf(":") < 0 && "on" + n,
            b = b[_.expando] ? b : new _.Event(n,"object" == typeof b && b),
            b.isTrigger = e ? 2 : 3,
            b.namespace = o.join("."),
            b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            b.result = void 0,
            b.target || (b.target = d),
            c = null == c ? [b] : _.makeArray(c, [b]),
            l = _.event.special[n] || {},
            e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !_.isWindow(d)) {
                    for (i = l.delegateType || n,
                    Cb.test(i + n) || (g = g.parentNode); g; g = g.parentNode)
                        m.push(g),
                        h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); )
                    b.type = f > 1 ? i : l.bindType || n,
                    k = (rb.get(g, "events") || {})[b.type] && rb.get(g, "handle"),
                    k && k.apply(g, c),
                    k = j && g[j],
                    k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c),
                    b.result === !1 && b.preventDefault());
                return b.type = n,
                e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j],
                h && (d[j] = null),
                _.event.triggered = n,
                d[n](),
                _.event.triggered = void 0,
                h && (d[j] = h)),
                b.result
            }
        },
        dispatch: function(a) {
            a = _.event.fix(a);
            var b, c, d, e, f, g = [], h = R.call(arguments), i = (rb.get(this, "events") || {})[a.type] || [], j = _.event.special[a.type] || {};
            if (h[0] = a,
            a.delegateTarget = this,
            !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = _.event.handlers.call(this, a, i),
                b = 0; (e = g[b++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = e.elem,
                    c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped(); )
                        (!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f,
                        a.data = f.data,
                        d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h),
                        void 0 !== d && (a.result = d) === !1 && (a.preventDefault(),
                        a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [],
                        c = 0; h > c; c++)
                            f = b[c],
                            e = f.selector + " ",
                            void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length),
                            d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z,
                d = c.documentElement,
                e = c.body,
                a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0),
                a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)),
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                a
            }
        },
        fix: function(a) {
            if (a[_.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Bb.test(e) ? this.mouseHooks : Ab.test(e) ? this.keyHooks : {}),
            d = g.props ? this.props.concat(g.props) : this.props,
            a = new _.Event(f),
            b = d.length; b--; )
                c = d[b],
                a[c] = f[c];
            return a.target || (a.target = Z),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== l() && this.focus ? (this.focus(),
                    !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === l() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(),
                    !1) : void 0
                },
                _default: function(a) {
                    return _.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = _.extend(new _.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    _.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }
    ,
    _.Event = function(a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a,
        b && _.extend(this, b),
        this.timeStamp = a && a.timeStamp || _.now(),
        void (this[_.expando] = !0)) : new _.Event(a,b)
    }
    ,
    _.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = j,
            a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = j,
            a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j,
            a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        _.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    Y.focusinBubbles || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0)
        };
        _.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                  , e = rb.access(d, b);
                e || d.addEventListener(a, c, !0),
                rb.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                  , e = rb.access(d, b) - 1;
                e ? rb.access(d, b, e) : (d.removeEventListener(a, c, !0),
                rb.remove(d, b))
            }
        }
    }),
    _.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b,
                b = void 0);
                for (g in a)
                    this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b,
            c = b = void 0) : null == d && ("string" == typeof b ? (d = c,
            c = void 0) : (d = c,
            c = b,
            b = void 0)),
            d === !1)
                d = k;
            else if (!d)
                return this;
            return 1 === e && (f = d,
            d = function(a) {
                return _().off(a),
                f.apply(this, arguments)
            }
            ,
            d.guid = f.guid || (f.guid = _.guid++)),
            this.each(function() {
                _.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj,
                _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b,
            b = void 0),
            c === !1 && (c = k),
            this.each(function() {
                _.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                _.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? _.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Eb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , Fb = /<([\w:]+)/
      , Gb = /<|&#?\w+;/
      , Hb = /<(?:script|style|link)/i
      , Ib = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Jb = /^$|\/(?:java|ecma)script/i
      , Kb = /^true\/(.*)/
      , Lb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , Mb = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Mb.optgroup = Mb.option,
    Mb.tbody = Mb.tfoot = Mb.colgroup = Mb.caption = Mb.thead,
    Mb.th = Mb.td,
    _.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = _.contains(a.ownerDocument, a);
            if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
                for (g = r(h),
                f = r(a),
                d = 0,
                e = f.length; e > d; d++)
                    s(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || r(a),
                    g = g || r(h),
                    d = 0,
                    e = f.length; e > d; d++)
                        q(f[d], g[d]);
                else
                    q(a, h);
            return g = r(h, "script"),
            g.length > 0 && p(g, !i && r(a, "script")),
            h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
                if (e = a[m],
                e || 0 === e)
                    if ("object" === _.type(e))
                        _.merge(l, e.nodeType ? [e] : e);
                    else if (Gb.test(e)) {
                        for (f = f || k.appendChild(b.createElement("div")),
                        g = (Fb.exec(e) || ["", ""])[1].toLowerCase(),
                        h = Mb[g] || Mb._default,
                        f.innerHTML = h[1] + e.replace(Eb, "<$1></$2>") + h[2],
                        j = h[0]; j--; )
                            f = f.lastChild;
                        _.merge(l, f.childNodes),
                        f = k.firstChild,
                        f.textContent = ""
                    } else
                        l.push(b.createTextNode(e));
            for (k.textContent = "",
            m = 0; e = l[m++]; )
                if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e),
                f = r(k.appendChild(e), "script"),
                i && p(f),
                c))
                    for (j = 0; e = f[j++]; )
                        Jb.test(e.type || "") && c.push(e);
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (_.acceptData(c) && (e = c[rb.expando],
                e && (b = rb.cache[e]))) {
                    if (b.events)
                        for (d in b.events)
                            f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                    rb.cache[e] && delete rb.cache[e]
                }
                delete sb.cache[c[sb.expando]]
            }
        }
    }),
    _.fn.extend({
        text: function(a) {
            return qb(this, function(a) {
                return void 0 === a ? _.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                b || 1 !== c.nodeType || _.cleanData(r(c)),
                c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")),
                c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++)
                1 === a.nodeType && (_.cleanData(r(a, !1)),
                a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a : b,
            this.map(function() {
                return _.clone(this, a, b)
            })
        },
        html: function(a) {
            return qb(this, function(a) {
                var b = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === a && 1 === b.nodeType)
                    return b.innerHTML;
                if ("string" == typeof a && !Hb.test(a) && !Mb[(Fb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Eb, "<$1></$2>");
                    try {
                        for (; d > c; c++)
                            b = this[c] || {},
                            1 === b.nodeType && (_.cleanData(r(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode,
                _.cleanData(r(this)),
                a && a.replaceChild(b, this)
            }),
            a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], p = _.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ib.test(m))
                return this.each(function(c) {
                    var d = k.eq(c);
                    p && (a[0] = m.call(this, c, d.html())),
                    d.domManip(a, b)
                });
            if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this),
            d = c.firstChild,
            1 === c.childNodes.length && (c = d),
            d)) {
                for (e = _.map(r(c, "script"), n),
                f = e.length; j > i; i++)
                    g = c,
                    i !== l && (g = _.clone(g, !0, !0),
                    f && _.merge(e, r(g, "script"))),
                    b.call(this[i], g, i);
                if (f)
                    for (h = e[e.length - 1].ownerDocument,
                    _.map(e, o),
                    i = 0; f > i; i++)
                        g = e[i],
                        Jb.test(g.type || "") && !rb.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(Lb, "")))
            }
            return this
        }
    }),
    _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        _.fn[a] = function(a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++)
                c = g === f ? this : this.clone(!0),
                _(e[g])[b](c),
                T.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Nb, Ob = {}, Pb = /^margin/, Qb = new RegExp("^(" + vb + ")(?!px)[a-z%]+$","i"), Rb = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    };
    !function() {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
            g.innerHTML = "",
            e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top,
            d = "4px" === b.width,
            e.removeChild(f)
        }
        var c, d, e = Z.documentElement, f = Z.createElement("div"), g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box",
        g.cloneNode(!0).style.backgroundClip = "",
        Y.clearCloneStyle = "content-box" === g.style.backgroundClip,
        f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",
        f.appendChild(g),
        a.getComputedStyle && _.extend(Y, {
            pixelPosition: function() {
                return b(),
                c
            },
            boxSizingReliable: function() {
                return null == d && b(),
                d
            },
            reliableMarginRight: function() {
                var b, c = g.appendChild(Z.createElement("div"));
                return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                c.style.marginRight = c.style.width = "0",
                g.style.width = "1px",
                e.appendChild(f),
                b = !parseFloat(a.getComputedStyle(c, null).marginRight),
                e.removeChild(f),
                b
            }
        }))
    }(),
    _.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f],
            a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    }
    ;
    var Sb = /^(none|table(?!-c[ea]).+)/
      , Tb = new RegExp("^(" + vb + ")(.*)$","i")
      , Ub = new RegExp("^([+-])=(" + vb + ")","i")
      , Vb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Wb = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Xb = ["Webkit", "O", "Moz", "ms"];
    _.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = _.camelCase(b), i = a.style;
                return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)),
                g = _.cssHooks[b] || _.cssHooks[h],
                void 0 === c ? g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c,
                "string" === f && (e = Ub.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)),
                f = "number"),
                null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"),
                Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                g && "set"in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)),
                void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = _.camelCase(b);
            return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)),
            g = _.cssHooks[b] || _.cssHooks[h],
            g && "get"in g && (e = g.get(a, !0, c)),
            void 0 === e && (e = v(a, b, d)),
            "normal" === e && b in Wb && (e = Wb[b]),
            "" === c || c ? (f = parseFloat(e),
            c === !0 || _.isNumeric(f) ? f || 0 : e) : e
        }
    }),
    _.each(["height", "width"], function(a, b) {
        _.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Sb.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Vb, function() {
                    return A(a, b, d)
                }) : A(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Rb(a);
                return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }),
    _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
        return b ? _.swap(a, {
            display: "inline-block"
        }, v, [a, "marginRight"]) : void 0
    }),
    _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        _.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + wb[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        Pb.test(a) || (_.cssHooks[a + b].set = y)
    }),
    _.fn.extend({
        css: function(a, b) {
            return qb(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (_.isArray(b)) {
                    for (d = Rb(a),
                    e = b.length; e > g; g++)
                        f[b[g]] = _.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return B(this, !0)
        },
        hide: function() {
            return B(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                xb(this) ? _(this).show() : _(this).hide()
            })
        }
    }),
    _.Tween = C,
    C.prototype = {
        constructor: C,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || "swing",
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (_.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = C.propHooks[this.prop];
            return this.pos = b = this.options.duration ? _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : C.propHooks._default.set(this),
            this
        }
    },
    C.prototype.init.prototype = C.prototype,
    C.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    },
    C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    _.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    },
    _.fx = C.prototype.init,
    _.fx.step = {};
    var Yb, Zb, $b = /^(?:toggle|show|hide)$/, _b = new RegExp("^(?:([+-])=|)(" + vb + ")([a-z%]*)$","i"), ac = /queueHooks$/, bc = [G], cc = {
        "*": [function(a, b) {
            var c = this.createTween(a, b)
              , d = c.cur()
              , e = _b.exec(b)
              , f = e && e[3] || (_.cssNumber[a] ? "" : "px")
              , g = (_.cssNumber[a] || "px" !== f && +d) && _b.exec(_.css(c.elem, a))
              , h = 1
              , i = 20;
            if (g && g[3] !== f) {
                f = f || g[3],
                e = e || [],
                g = +d || 1;
                do
                    h = h || ".5",
                    g /= h,
                    _.style(c.elem, a, g + f);
                while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0,
            c.unit = f,
            c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
            c
        }
        ]
    };
    _.Animation = _.extend(I, {
        tweener: function(a, b) {
            _.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                cc[c] = cc[c] || [],
                cc[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? bc.unshift(a) : bc.push(a)
        }
    }),
    _.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? _.extend({}, a) : {
            complete: c || !c && b || _.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !_.isFunction(b) && b
        };
        return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default,
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            _.isFunction(d.old) && d.old.call(this),
            d.queue && _.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    _.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(xb).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = _.isEmptyObject(a)
              , f = _.speed(b, c, d)
              , g = function() {
                var b = I(this, _.extend({}, a), f);
                (e || rb.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b,
            b = a,
            a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null != a && a + "queueHooks"
                  , f = _.timers
                  , g = rb.get(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && ac.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                    b = !1,
                    f.splice(e, 1));
                (b || !c) && _.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = rb.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = _.timers, g = d ? d.length : 0;
                for (c.finish = !0,
                _.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                    f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    _.each(["toggle", "show", "hide"], function(a, b) {
        var c = _.fn[b];
        _.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
        }
    }),
    _.each({
        slideDown: E("show"),
        slideUp: E("hide"),
        slideToggle: E("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        _.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    _.timers = [],
    _.fx.tick = function() {
        var a, b = 0, c = _.timers;
        for (Yb = _.now(); b < c.length; b++)
            a = c[b],
            a() || c[b] !== a || c.splice(b--, 1);
        c.length || _.fx.stop(),
        Yb = void 0
    }
    ,
    _.fx.timer = function(a) {
        _.timers.push(a),
        a() ? _.fx.start() : _.timers.pop()
    }
    ,
    _.fx.interval = 13,
    _.fx.start = function() {
        Zb || (Zb = setInterval(_.fx.tick, _.fx.interval))
    }
    ,
    _.fx.stop = function() {
        clearInterval(Zb),
        Zb = null
    }
    ,
    _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    _.fn.delay = function(a, b) {
        return a = _.fx ? _.fx.speeds[a] || a : a,
        b = b || "fx",
        this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }
    ,
    function() {
        var a = Z.createElement("input")
          , b = Z.createElement("select")
          , c = b.appendChild(Z.createElement("option"));
        a.type = "checkbox",
        Y.checkOn = "" !== a.value,
        Y.optSelected = c.selected,
        b.disabled = !0,
        Y.optDisabled = !c.disabled,
        a = Z.createElement("input"),
        a.value = "t",
        a.type = "radio",
        Y.radioValue = "t" === a.value
    }();
    var dc, ec, fc = _.expr.attrHandle;
    _.fn.extend({
        attr: function(a, b) {
            return qb(this, _.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                _.removeAttr(this, a)
            })
        }
    }),
    _.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)
                return typeof a.getAttribute === zb ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(),
                d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? ec : dc)),
                void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b),
                null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""),
                c) : void _.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(nb);
            if (f && 1 === a.nodeType)
                for (; c = f[e++]; )
                    d = _.propFix[c] || c,
                    _.expr.match.bool.test(c) && (a[d] = !1),
                    a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        }
    }),
    ec = {
        set: function(a, b, c) {
            return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c),
            c
        }
    },
    _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = fc[b] || _.find.attr;
        fc[b] = function(a, b, d) {
            var e, f;
            return d || (f = fc[b],
            fc[b] = e,
            e = null != c(a, b, d) ? b.toLowerCase() : null,
            fc[b] = f),
            e
        }
    });
    var gc = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
        prop: function(a, b) {
            return qb(this, _.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[_.propFix[a] || a]
            })
        }
    }),
    _.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)
                return f = 1 !== g || !_.isXMLDoc(a),
                f && (b = _.propFix[b] || b,
                e = _.propHooks[b]),
                void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || gc.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }),
    Y.optSelected || (_.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex,
            null
        }
    }),
    _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    });
    var hc = /[\t\r\n\f]/g;
    _.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a))
                return this.each(function(b) {
                    _(this).addClass(a.call(this, b, this.className))
                });
            if (h)
                for (b = (a || "").match(nb) || []; j > i; i++)
                    if (c = this[i],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : " ")) {
                        for (f = 0; e = b[f++]; )
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = _.trim(d),
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a))
                return this.each(function(b) {
                    _(this).removeClass(a.call(this, b, this.className))
                });
            if (h)
                for (b = (a || "").match(nb) || []; j > i; i++)
                    if (c = this[i],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : "")) {
                        for (f = 0; e = b[f++]; )
                            for (; d.indexOf(" " + e + " ") >= 0; )
                                d = d.replace(" " + e + " ", " ");
                        g = a ? _.trim(d) : "",
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function(c) {
                _(this).toggleClass(a.call(this, c, this.className, b), b)
            }
            : function() {
                if ("string" === c)
                    for (var b, d = 0, e = _(this), f = a.match(nb) || []; b = f[d++]; )
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else
                    (c === zb || "boolean" === c) && (this.className && rb.set(this, "__className__", this.className),
                    this.className = this.className || a === !1 ? "" : rb.get(this, "__className__") || "")
            }
            )
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hc, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        }
    });
    var ic = /\r/g;
    _.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = _.isFunction(a),
                    this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a,
                        null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })),
                        b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()],
                        b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()],
                    b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                    "string" == typeof c ? c.replace(ic, "") : null == c ? "" : c)
            }
        }
    }),
    _.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = _.find.attr(a, "value");
                    return null != b ? b : _.trim(_.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i],
                        !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                            if (b = _(c).val(),
                            f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--; )
                        d = e[g],
                        (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1),
                    f
                }
            }
        }
    }),
    _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {
            set: function(a, b) {
                return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
            }
        },
        Y.checkOn || (_.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    }),
    _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        _.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    _.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var jc = _.now()
      , kc = /\?/;
    _.parseJSON = function(a) {
        return JSON.parse(a + "")
    }
    ,
    _.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a)
            return null;
        try {
            c = new DOMParser,
            b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a),
        b
    }
    ;
    var lc, mc, nc = /#.*$/, oc = /([?&])_=[^&]*/, pc = /^(.*?):[ \t]*([^\r\n]*)$/gm, qc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rc = /^(?:GET|HEAD)$/, sc = /^\/\//, tc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, uc = {}, vc = {}, wc = "*/".concat("*");
    try {
        mc = location.href
    } catch (xc) {
        mc = Z.createElement("a"),
        mc.href = "",
        mc = mc.href
    }
    lc = tc.exec(mc.toLowerCase()) || [],
    _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mc,
            type: "GET",
            isLocal: qc.test(lc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": wc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": _.parseJSON,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
        },
        ajaxPrefilter: J(uc),
        ajaxTransport: J(vc),
        ajax: function(a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2,
                h && clearTimeout(h),
                d = void 0,
                f = g || "",
                v.readyState = a > 0 ? 4 : 0,
                i = a >= 200 && 300 > a || 304 === a,
                c && (s = M(l, v, c)),
                s = N(l, s, v, i),
                i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"),
                u && (_.lastModified[e] = u),
                u = v.getResponseHeader("etag"),
                u && (_.etag[e] = u)),
                204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state,
                k = s.data,
                r = s.error,
                i = !r)) : (r = w,
                (a || !w) && (w = "error",
                0 > a && (a = 0))),
                v.status = a,
                v.statusText = (b || w) + "",
                i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]),
                v.statusCode(q),
                q = void 0,
                j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]),
                p.fireWith(m, [v, w]),
                j && (n.trigger("ajaxComplete", [v, l]),
                --_.active || _.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a,
            a = void 0),
            b = b || {};
            var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event, o = _.Deferred(), p = _.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!g)
                            for (g = {}; b = pc.exec(f); )
                                g[b[1].toLowerCase()] = b[2];
                        b = g[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? f : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a,
                    r[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return t || (l.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > t)
                            for (b in a)
                                q[b] = [q[b], a[b]];
                        else
                            v.always(a[v.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || u;
                    return d && d.abort(b),
                    c(0, b),
                    this
                }
            };
            if (o.promise(v).complete = p.add,
            v.success = v.done,
            v.error = v.fail,
            l.url = ((a || l.url || mc) + "").replace(nc, "").replace(sc, lc[1] + "//"),
            l.type = b.method || b.type || l.method || l.type,
            l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(nb) || [""],
            null == l.crossDomain && (i = tc.exec(l.url.toLowerCase()),
            l.crossDomain = !(!i || i[1] === lc[1] && i[2] === lc[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (lc[3] || ("http:" === lc[1] ? "80" : "443")))),
            l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)),
            K(uc, l, b, v),
            2 === t)
                return v;
            j = l.global,
            j && 0 === _.active++ && _.event.trigger("ajaxStart"),
            l.type = l.type.toUpperCase(),
            l.hasContent = !rc.test(l.type),
            e = l.url,
            l.hasContent || (l.data && (e = l.url += (kc.test(e) ? "&" : "?") + l.data,
            delete l.data),
            l.cache === !1 && (l.url = oc.test(e) ? e.replace(oc, "$1_=" + jc++) : e + (kc.test(e) ? "&" : "?") + "_=" + jc++)),
            l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]),
            _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])),
            (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType),
            v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + wc + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers)
                v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t))
                return v.abort();
            u = "abort";
            for (k in {
                success: 1,
                error: 1,
                complete: 1
            })
                v[k](l[k]);
            if (d = K(vc, l, b, v)) {
                v.readyState = 1,
                j && n.trigger("ajaxSend", [v, l]),
                l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1,
                    d.send(r, c)
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    c(-1, w)
                }
            } else
                c(-1, "No Transport");
            return v
        },
        getJSON: function(a, b, c) {
            return _.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return _.get(a, void 0, b, "script")
        }
    }),
    _.each(["get", "post"], function(a, b) {
        _[b] = function(a, c, d, e) {
            return _.isFunction(c) && (e = e || d,
            d = c,
            c = void 0),
            _.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }),
    _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        _.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    _._evalUrl = function(a) {
        return _.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    _.fn.extend({
        wrapAll: function(a) {
            var b;
            return _.isFunction(a) ? this.each(function(b) {
                _(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && b.insertBefore(this[0]),
            b.map(function() {
                for (var a = this; a.firstElementChild; )
                    a = a.firstElementChild;
                return a
            }).append(this)),
            this)
        },
        wrapInner: function(a) {
            return this.each(_.isFunction(a) ? function(b) {
                _(this).wrapInner(a.call(this, b))
            }
            : function() {
                var b = _(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            }
            )
        },
        wrap: function(a) {
            var b = _.isFunction(a);
            return this.each(function(c) {
                _(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    _.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }
    ,
    _.expr.filters.visible = function(a) {
        return !_.expr.filters.hidden(a)
    }
    ;
    var yc = /%20/g
      , zc = /\[\]$/
      , Ac = /\r?\n/g
      , Bc = /^(?:submit|button|image|reset|file)$/i
      , Cc = /^(?:input|select|textarea|keygen)/i;
    _.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = _.isFunction(b) ? b() : null == b ? "" : b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional),
        _.isArray(a) || a.jquery && !_.isPlainObject(a))
            _.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                O(c, a[c], b, e);
        return d.join("&").replace(yc, "+")
    }
    ,
    _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = _.prop(this, "elements");
                return a ? _.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !_(this).is(":disabled") && Cc.test(this.nodeName) && !Bc.test(a) && (this.checked || !yb.test(a))
            }).map(function(a, b) {
                var c = _(this).val();
                return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Ac, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Ac, "\r\n")
                }
            }).get()
        }
    }),
    _.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    }
    ;
    var Dc = 0
      , Ec = {}
      , Fc = {
        0: 200,
        1223: 204
    }
      , Gc = _.ajaxSettings.xhr();
    a.ActiveXObject && _(a).on("unload", function() {
        for (var a in Ec)
            Ec[a]()
    }),
    Y.cors = !!Gc && "withCredentials"in Gc,
    Y.ajax = Gc = !!Gc,
    _.ajaxTransport(function(a) {
        var b;
        return Y.cors || Gc && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(), g = ++Dc;
                if (f.open(a.type, a.url, a.async, a.username, a.password),
                a.xhrFields)
                    for (e in a.xhrFields)
                        f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c)
                    f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Ec[g],
                        b = f.onload = f.onerror = null,
                        "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Fc[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }
                ,
                f.onload = b(),
                f.onerror = b("error"),
                b = Ec[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b)
                        throw h
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }),
    _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return _.globalEval(a),
                a
            }
        }
    }),
    _.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET")
    }),
    _.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = _("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(),
                        c = null,
                        a && e("error" === a.type ? 404 : 200, a.type)
                    }
                    ),
                    Z.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Hc = []
      , Ic = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Hc.pop() || _.expando + "_" + jc++;
            return this[a] = !0,
            a
        }
    }),
    _.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Ic.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ic.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
        h ? b[h] = b[h].replace(Ic, "$1" + e) : b.jsonp !== !1 && (b.url += (kc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
        b.converters["script json"] = function() {
            return g || _.error(e + " was not called"),
            g[0]
        }
        ,
        b.dataTypes[0] = "json",
        f = a[e],
        a[e] = function() {
            g = arguments
        }
        ,
        d.always(function() {
            a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback,
            Hc.push(e)),
            g && _.isFunction(f) && f(g[0]),
            g = f = void 0
        }),
        "script") : void 0
    }),
    _.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b,
        b = !1),
        b = b || Z;
        var d = gb.exec(a)
          , e = !c && [];
        return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e),
        e && e.length && _(e).remove(),
        _.merge([], d.childNodes))
    }
    ;
    var Jc = _.fn.load;
    _.fn.load = function(a, b, c) {
        if ("string" != typeof a && Jc)
            return Jc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)),
        a = a.slice(0, h)),
        _.isFunction(b) ? (c = b,
        b = void 0) : b && "object" == typeof b && (e = "POST"),
        g.length > 0 && _.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments,
            g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }
        ),
        this
    }
    ,
    _.expr.filters.animated = function(a) {
        return _.grep(_.timers, function(b) {
            return a === b.elem
        }).length
    }
    ;
    var Kc = a.document.documentElement;
    _.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = _.css(a, "position"), l = _(a), m = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = _.css(a, "top"),
            i = _.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1,
            j ? (d = l.position(),
            g = d.top,
            e = d.left) : (g = parseFloat(f) || 0,
            e = parseFloat(i) || 0),
            _.isFunction(b) && (b = b.call(a, c, h)),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using"in b ? b.using.call(a, m) : l.css(m)
        }
    },
    _.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    _.offset.setOffset(this, a, b)
                });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            if (f)
                return b = f.documentElement,
                _.contains(b, d) ? (typeof d.getBoundingClientRect !== zb && (e = d.getBoundingClientRect()),
                c = P(f),
                {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                _.nodeName(a[0], "html") || (d = a.offset()),
                d.top += _.css(a[0], "borderTopWidth", !0),
                d.left += _.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - d.top - _.css(c, "marginTop", !0),
                    left: b.left - d.left - _.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Kc; a && !_.nodeName(a, "html") && "static" === _.css(a, "position"); )
                    a = a.offsetParent;
                return a || Kc
            })
        }
    }),
    _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function(e) {
            return qb(this, function(b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }),
    _.each(["top", "left"], function(a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
            return c ? (c = v(a, b),
            Qb.test(c) ? _(a).position()[b] + "px" : c) : void 0
        })
    }),
    _.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        _.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            _.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d)
                  , g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qb(this, function(b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }),
    _.fn.size = function() {
        return this.length
    }
    ,
    _.fn.andSelf = _.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var Lc = a.jQuery
      , Mc = a.$;
    return _.noConflict = function(b) {
        return a.$ === _ && (a.$ = Mc),
        b && a.jQuery === _ && (a.jQuery = Lc),
        _
    }
    ,
    typeof b === zb && (a.jQuery = a.$ = _),
    _
}),
function(a) {
    return a.fn.foolmaps = function(b) {
        return this.each(function() {
            var c, d, e, f, g, h;
            return c = a(this),
            f = a.extend({
                type: c.attr("data-type") || "static",
                query: c.attr("data-query") || "",
                zoom: parseInt(c.attr("data-zoom") || 15),
                lang: c.attr("data-lang") || "en",
                prelat: parseInt(c.attr("data-prelat") || 40),
                prelng: parseInt(c.attr("data-prelng") || 133),
                width: parseInt(c.attr("width") || c.attr("data-width") || 0),
                height: parseInt(c.attr("height") || c.attr("data-height") || 0),
                sensor: !1,
                options: null
            }, b),
            "dynamic" === f.type ? (e = new google.maps.Map(this,a.extend({
                center: new google.maps.LatLng(f.prelat,f.prelng),
                zoom: f.zoom,
                disableDefaultUI: !0,
                streetViewControl: !0,
                zoomControl: !0
            }, f.options)),
            (new google.maps.Geocoder).geocode({
                address: f.query
            }, function(a, b) {
                return b === google.maps.GeocoderStatus.OK ? (e.setCenter(a[0].geometry.location),
                new google.maps.Marker({
                    map: e,
                    position: a[0].geometry.location
                })) : void 0
            })) : (h = f.width || Math.ceil(c.innerWidth()),
            d = f.height || Math.ceil(c.innerHeight()),
            g = "//maps.googleapis.com/maps/api/staticmap?" + a.param({
                markers: f.query,
                zoom: f.zoom,
                size: "" + h + "x" + d,
                scale: window.devicePixelRatio && window.devicePixelRatio > 1 ? 2 : 1,
                lang: f.lang,
                sensor: !1
            }),
            c.is("img") ? c.attr("src", g) : c.css({
                backgroundImage: 'url("' + g + '")'
            }))
        }),
        this
    }
}(jQuery),
function() {
    var a = this
      , b = a._
      , c = {}
      , d = Array.prototype
      , e = Object.prototype
      , f = Function.prototype
      , g = d.push
      , h = d.slice
      , i = d.concat
      , j = e.toString
      , k = e.hasOwnProperty
      , l = d.forEach
      , m = d.map
      , n = d.reduce
      , o = d.reduceRight
      , p = d.filter
      , q = d.every
      , r = d.some
      , s = d.indexOf
      , t = d.lastIndexOf
      , u = Array.isArray
      , v = Object.keys
      , w = f.bind
      , x = function(a) {
        return a instanceof x ? a : this instanceof x ? void (this._wrapped = a) : new x(a)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x),
    exports._ = x) : a._ = x,
    x.VERSION = "1.6.0";
    var y = x.each = x.forEach = function(a, b, d) {
        if (null == a)
            return a;
        if (l && a.forEach === l)
            a.forEach(b, d);
        else if (a.length === +a.length) {
            for (var e = 0, f = a.length; f > e; e++)
                if (b.call(d, a[e], e, a) === c)
                    return
        } else
            for (var g = x.keys(a), e = 0, f = g.length; f > e; e++)
                if (b.call(d, a[g[e]], g[e], a) === c)
                    return;
        return a
    }
    ;
    x.map = x.collect = function(a, b, c) {
        var d = [];
        return null == a ? d : m && a.map === m ? a.map(b, c) : (y(a, function(a, e, f) {
            d.push(b.call(c, a, e, f))
        }),
        d)
    }
    ;
    var z = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function(a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []),
        n && a.reduce === n)
            return d && (b = x.bind(b, d)),
            e ? a.reduce(b, c) : a.reduce(b);
        if (y(a, function(a, f, g) {
            e ? c = b.call(d, c, a, f, g) : (c = a,
            e = !0)
        }),
        !e)
            throw new TypeError(z);
        return c
    }
    ,
    x.reduceRight = x.foldr = function(a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []),
        o && a.reduceRight === o)
            return d && (b = x.bind(b, d)),
            e ? a.reduceRight(b, c) : a.reduceRight(b);
        var f = a.length;
        if (f !== +f) {
            var g = x.keys(a);
            f = g.length
        }
        if (y(a, function(h, i, j) {
            i = g ? g[--f] : --f,
            e ? c = b.call(d, c, a[i], i, j) : (c = a[i],
            e = !0)
        }),
        !e)
            throw new TypeError(z);
        return c
    }
    ,
    x.find = x.detect = function(a, b, c) {
        var d;
        return A(a, function(a, e, f) {
            return b.call(c, a, e, f) ? (d = a,
            !0) : void 0
        }),
        d
    }
    ,
    x.filter = x.select = function(a, b, c) {
        var d = [];
        return null == a ? d : p && a.filter === p ? a.filter(b, c) : (y(a, function(a, e, f) {
            b.call(c, a, e, f) && d.push(a)
        }),
        d)
    }
    ,
    x.reject = function(a, b, c) {
        return x.filter(a, function(a, d, e) {
            return !b.call(c, a, d, e)
        }, c)
    }
    ,
    x.every = x.all = function(a, b, d) {
        b || (b = x.identity);
        var e = !0;
        return null == a ? e : q && a.every === q ? a.every(b, d) : (y(a, function(a, f, g) {
            return (e = e && b.call(d, a, f, g)) ? void 0 : c
        }),
        !!e)
    }
    ;
    var A = x.some = x.any = function(a, b, d) {
        b || (b = x.identity);
        var e = !1;
        return null == a ? e : r && a.some === r ? a.some(b, d) : (y(a, function(a, f, g) {
            return e || (e = b.call(d, a, f, g)) ? c : void 0
        }),
        !!e)
    }
    ;
    x.contains = x.include = function(a, b) {
        return null == a ? !1 : s && a.indexOf === s ? -1 != a.indexOf(b) : A(a, function(a) {
            return a === b
        })
    }
    ,
    x.invoke = function(a, b) {
        var c = h.call(arguments, 2)
          , d = x.isFunction(b);
        return x.map(a, function(a) {
            return (d ? b : a[b]).apply(a, c)
        })
    }
    ,
    x.pluck = function(a, b) {
        return x.map(a, x.property(b))
    }
    ,
    x.where = function(a, b) {
        return x.filter(a, x.matches(b))
    }
    ,
    x.findWhere = function(a, b) {
        return x.find(a, x.matches(b))
    }
    ,
    x.max = function(a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535)
            return Math.max.apply(Math, a);
        var d = -1 / 0
          , e = -1 / 0;
        return y(a, function(a, f, g) {
            var h = b ? b.call(c, a, f, g) : a;
            h > e && (d = a,
            e = h)
        }),
        d
    }
    ,
    x.min = function(a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535)
            return Math.min.apply(Math, a);
        var d = 1 / 0
          , e = 1 / 0;
        return y(a, function(a, f, g) {
            var h = b ? b.call(c, a, f, g) : a;
            e > h && (d = a,
            e = h)
        }),
        d
    }
    ,
    x.shuffle = function(a) {
        var b, c = 0, d = [];
        return y(a, function(a) {
            b = x.random(c++),
            d[c - 1] = d[b],
            d[b] = a
        }),
        d
    }
    ,
    x.sample = function(a, b, c) {
        return null == b || c ? (a.length !== +a.length && (a = x.values(a)),
        a[x.random(a.length - 1)]) : x.shuffle(a).slice(0, Math.max(0, b))
    }
    ;
    var B = function(a) {
        return null == a ? x.identity : x.isFunction(a) ? a : x.property(a)
    };
    x.sortBy = function(a, b, c) {
        return b = B(b),
        x.pluck(x.map(a, function(a, d, e) {
            return {
                value: a,
                index: d,
                criteria: b.call(c, a, d, e)
            }
        }).sort(function(a, b) {
            var c = a.criteria
              , d = b.criteria;
            if (c !== d) {
                if (c > d || void 0 === c)
                    return 1;
                if (d > c || void 0 === d)
                    return -1
            }
            return a.index - b.index
        }), "value")
    }
    ;
    var C = function(a) {
        return function(b, c, d) {
            var e = {};
            return c = B(c),
            y(b, function(f, g) {
                var h = c.call(d, f, g, b);
                a(e, h, f)
            }),
            e
        }
    };
    x.groupBy = C(function(a, b, c) {
        x.has(a, b) ? a[b].push(c) : a[b] = [c]
    }),
    x.indexBy = C(function(a, b, c) {
        a[b] = c
    }),
    x.countBy = C(function(a, b) {
        x.has(a, b) ? a[b]++ : a[b] = 1
    }),
    x.sortedIndex = function(a, b, c, d) {
        c = B(c);
        for (var e = c.call(d, b), f = 0, g = a.length; g > f; ) {
            var h = f + g >>> 1;
            c.call(d, a[h]) < e ? f = h + 1 : g = h
        }
        return f
    }
    ,
    x.toArray = function(a) {
        return a ? x.isArray(a) ? h.call(a) : a.length === +a.length ? x.map(a, x.identity) : x.values(a) : []
    }
    ,
    x.size = function(a) {
        return null == a ? 0 : a.length === +a.length ? a.length : x.keys(a).length
    }
    ,
    x.first = x.head = x.take = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : 0 > b ? [] : h.call(a, 0, b)
    }
    ,
    x.initial = function(a, b, c) {
        return h.call(a, 0, a.length - (null == b || c ? 1 : b))
    }
    ,
    x.last = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length - 1] : h.call(a, Math.max(a.length - b, 0))
    }
    ,
    x.rest = x.tail = x.drop = function(a, b, c) {
        return h.call(a, null == b || c ? 1 : b)
    }
    ,
    x.compact = function(a) {
        return x.filter(a, x.identity)
    }
    ;
    var D = function(a, b, c) {
        return b && x.every(a, x.isArray) ? i.apply(c, a) : (y(a, function(a) {
            x.isArray(a) || x.isArguments(a) ? b ? g.apply(c, a) : D(a, b, c) : c.push(a)
        }),
        c)
    };
    x.flatten = function(a, b) {
        return D(a, b, [])
    }
    ,
    x.without = function(a) {
        return x.difference(a, h.call(arguments, 1))
    }
    ,
    x.partition = function(a, b) {
        var c = []
          , d = [];
        return y(a, function(a) {
            (b(a) ? c : d).push(a)
        }),
        [c, d]
    }
    ,
    x.uniq = x.unique = function(a, b, c, d) {
        x.isFunction(b) && (d = c,
        c = b,
        b = !1);
        var e = c ? x.map(a, c, d) : a
          , f = []
          , g = [];
        return y(e, function(c, d) {
            (b ? d && g[g.length - 1] === c : x.contains(g, c)) || (g.push(c),
            f.push(a[d]))
        }),
        f
    }
    ,
    x.union = function() {
        return x.uniq(x.flatten(arguments, !0))
    }
    ,
    x.intersection = function(a) {
        var b = h.call(arguments, 1);
        return x.filter(x.uniq(a), function(a) {
            return x.every(b, function(b) {
                return x.contains(b, a)
            })
        })
    }
    ,
    x.difference = function(a) {
        var b = i.apply(d, h.call(arguments, 1));
        return x.filter(a, function(a) {
            return !x.contains(b, a)
        })
    }
    ,
    x.zip = function() {
        for (var a = x.max(x.pluck(arguments, "length").concat(0)), b = new Array(a), c = 0; a > c; c++)
            b[c] = x.pluck(arguments, "" + c);
        return b
    }
    ,
    x.object = function(a, b) {
        if (null == a)
            return {};
        for (var c = {}, d = 0, e = a.length; e > d; d++)
            b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c
    }
    ,
    x.indexOf = function(a, b, c) {
        if (null == a)
            return -1;
        var d = 0
          , e = a.length;
        if (c) {
            if ("number" != typeof c)
                return d = x.sortedIndex(a, b),
                a[d] === b ? d : -1;
            d = 0 > c ? Math.max(0, e + c) : c
        }
        if (s && a.indexOf === s)
            return a.indexOf(b, c);
        for (; e > d; d++)
            if (a[d] === b)
                return d;
        return -1
    }
    ,
    x.lastIndexOf = function(a, b, c) {
        if (null == a)
            return -1;
        var d = null != c;
        if (t && a.lastIndexOf === t)
            return d ? a.lastIndexOf(b, c) : a.lastIndexOf(b);
        for (var e = d ? c : a.length; e--; )
            if (a[e] === b)
                return e;
        return -1
    }
    ,
    x.range = function(a, b, c) {
        arguments.length <= 1 && (b = a || 0,
        a = 0),
        c = arguments[2] || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = 0, f = new Array(d); d > e; )
            f[e++] = a,
            a += c;
        return f
    }
    ;
    var E = function() {};
    x.bind = function(a, b) {
        var c, d;
        if (w && a.bind === w)
            return w.apply(a, h.call(arguments, 1));
        if (!x.isFunction(a))
            throw new TypeError;
        return c = h.call(arguments, 2),
        d = function() {
            if (!(this instanceof d))
                return a.apply(b, c.concat(h.call(arguments)));
            E.prototype = a.prototype;
            var e = new E;
            E.prototype = null;
            var f = a.apply(e, c.concat(h.call(arguments)));
            return Object(f) === f ? f : e
        }
    }
    ,
    x.partial = function(a) {
        var b = h.call(arguments, 1);
        return function() {
            for (var c = 0, d = b.slice(), e = 0, f = d.length; f > e; e++)
                d[e] === x && (d[e] = arguments[c++]);
            for (; c < arguments.length; )
                d.push(arguments[c++]);
            return a.apply(this, d)
        }
    }
    ,
    x.bindAll = function(a) {
        var b = h.call(arguments, 1);
        if (0 === b.length)
            throw new Error("bindAll must be passed function names");
        return y(b, function(b) {
            a[b] = x.bind(a[b], a)
        }),
        a
    }
    ,
    x.memoize = function(a, b) {
        var c = {};
        return b || (b = x.identity),
        function() {
            var d = b.apply(this, arguments);
            return x.has(c, d) ? c[d] : c[d] = a.apply(this, arguments)
        }
    }
    ,
    x.delay = function(a, b) {
        var c = h.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, c)
        }, b)
    }
    ,
    x.defer = function(a) {
        return x.delay.apply(x, [a, 1].concat(h.call(arguments, 1)))
    }
    ,
    x.throttle = function(a, b, c) {
        var d, e, f, g = null, h = 0;
        c || (c = {});
        var i = function() {
            h = c.leading === !1 ? 0 : x.now(),
            g = null,
            f = a.apply(d, e),
            d = e = null
        };
        return function() {
            var j = x.now();
            h || c.leading !== !1 || (h = j);
            var k = b - (j - h);
            return d = this,
            e = arguments,
            0 >= k ? (clearTimeout(g),
            g = null,
            h = j,
            f = a.apply(d, e),
            d = e = null) : g || c.trailing === !1 || (g = setTimeout(i, k)),
            f
        }
    }
    ,
    x.debounce = function(a, b, c) {
        var d, e, f, g, h, i = function() {
            var j = x.now() - g;
            b > j ? d = setTimeout(i, b - j) : (d = null,
            c || (h = a.apply(f, e),
            f = e = null))
        };
        return function() {
            f = this,
            e = arguments,
            g = x.now();
            var j = c && !d;
            return d || (d = setTimeout(i, b)),
            j && (h = a.apply(f, e),
            f = e = null),
            h
        }
    }
    ,
    x.once = function(a) {
        var b, c = !1;
        return function() {
            return c ? b : (c = !0,
            b = a.apply(this, arguments),
            a = null,
            b)
        }
    }
    ,
    x.wrap = function(a, b) {
        return x.partial(b, a)
    }
    ,
    x.compose = function() {
        var a = arguments;
        return function() {
            for (var b = arguments, c = a.length - 1; c >= 0; c--)
                b = [a[c].apply(this, b)];
            return b[0]
        }
    }
    ,
    x.after = function(a, b) {
        return function() {
            return --a < 1 ? b.apply(this, arguments) : void 0
        }
    }
    ,
    x.keys = function(a) {
        if (!x.isObject(a))
            return [];
        if (v)
            return v(a);
        var b = [];
        for (var c in a)
            x.has(a, c) && b.push(c);
        return b
    }
    ,
    x.values = function(a) {
        for (var b = x.keys(a), c = b.length, d = new Array(c), e = 0; c > e; e++)
            d[e] = a[b[e]];
        return d
    }
    ,
    x.pairs = function(a) {
        for (var b = x.keys(a), c = b.length, d = new Array(c), e = 0; c > e; e++)
            d[e] = [b[e], a[b[e]]];
        return d
    }
    ,
    x.invert = function(a) {
        for (var b = {}, c = x.keys(a), d = 0, e = c.length; e > d; d++)
            b[a[c[d]]] = c[d];
        return b
    }
    ,
    x.functions = x.methods = function(a) {
        var b = [];
        for (var c in a)
            x.isFunction(a[c]) && b.push(c);
        return b.sort()
    }
    ,
    x.extend = function(a) {
        return y(h.call(arguments, 1), function(b) {
            if (b)
                for (var c in b)
                    a[c] = b[c]
        }),
        a
    }
    ,
    x.pick = function(a) {
        var b = {}
          , c = i.apply(d, h.call(arguments, 1));
        return y(c, function(c) {
            c in a && (b[c] = a[c])
        }),
        b
    }
    ,
    x.omit = function(a) {
        var b = {}
          , c = i.apply(d, h.call(arguments, 1));
        for (var e in a)
            x.contains(c, e) || (b[e] = a[e]);
        return b
    }
    ,
    x.defaults = function(a) {
        return y(h.call(arguments, 1), function(b) {
            if (b)
                for (var c in b)
                    void 0 === a[c] && (a[c] = b[c])
        }),
        a
    }
    ,
    x.clone = function(a) {
        return x.isObject(a) ? x.isArray(a) ? a.slice() : x.extend({}, a) : a
    }
    ,
    x.tap = function(a, b) {
        return b(a),
        a
    }
    ;
    var F = function(a, b, c, d) {
        if (a === b)
            return 0 !== a || 1 / a == 1 / b;
        if (null == a || null == b)
            return a === b;
        a instanceof x && (a = a._wrapped),
        b instanceof x && (b = b._wrapped);
        var e = j.call(a);
        if (e != j.call(b))
            return !1;
        switch (e) {
        case "[object String]":
            return a == String(b);
        case "[object Number]":
            return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
        case "[object Date]":
        case "[object Boolean]":
            return +a == +b;
        case "[object RegExp]":
            return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
        }
        if ("object" != typeof a || "object" != typeof b)
            return !1;
        for (var f = c.length; f--; )
            if (c[f] == a)
                return d[f] == b;
        var g = a.constructor
          , h = b.constructor;
        if (g !== h && !(x.isFunction(g) && g instanceof g && x.isFunction(h) && h instanceof h) && "constructor"in a && "constructor"in b)
            return !1;
        c.push(a),
        d.push(b);
        var i = 0
          , k = !0;
        if ("[object Array]" == e) {
            if (i = a.length,
            k = i == b.length)
                for (; i-- && (k = F(a[i], b[i], c, d)); )
                    ;
        } else {
            for (var l in a)
                if (x.has(a, l) && (i++,
                !(k = x.has(b, l) && F(a[l], b[l], c, d))))
                    break;
            if (k) {
                for (l in b)
                    if (x.has(b, l) && !i--)
                        break;
                k = !i
            }
        }
        return c.pop(),
        d.pop(),
        k
    };
    x.isEqual = function(a, b) {
        return F(a, b, [], [])
    }
    ,
    x.isEmpty = function(a) {
        if (null == a)
            return !0;
        if (x.isArray(a) || x.isString(a))
            return 0 === a.length;
        for (var b in a)
            if (x.has(a, b))
                return !1;
        return !0
    }
    ,
    x.isElement = function(a) {
        return !(!a || 1 !== a.nodeType)
    }
    ,
    x.isArray = u || function(a) {
        return "[object Array]" == j.call(a)
    }
    ,
    x.isObject = function(a) {
        return a === Object(a)
    }
    ,
    y(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(a) {
        x["is" + a] = function(b) {
            return j.call(b) == "[object " + a + "]"
        }
    }),
    x.isArguments(arguments) || (x.isArguments = function(a) {
        return !(!a || !x.has(a, "callee"))
    }
    ),
    "function" != typeof /./ && (x.isFunction = function(a) {
        return "function" == typeof a
    }
    ),
    x.isFinite = function(a) {
        return isFinite(a) && !isNaN(parseFloat(a))
    }
    ,
    x.isNaN = function(a) {
        return x.isNumber(a) && a != +a
    }
    ,
    x.isBoolean = function(a) {
        return a === !0 || a === !1 || "[object Boolean]" == j.call(a)
    }
    ,
    x.isNull = function(a) {
        return null === a
    }
    ,
    x.isUndefined = function(a) {
        return void 0 === a
    }
    ,
    x.has = function(a, b) {
        return k.call(a, b)
    }
    ,
    x.noConflict = function() {
        return a._ = b,
        this
    }
    ,
    x.identity = function(a) {
        return a
    }
    ,
    x.constant = function(a) {
        return function() {
            return a
        }
    }
    ,
    x.property = function(a) {
        return function(b) {
            return b[a]
        }
    }
    ,
    x.matches = function(a) {
        return function(b) {
            if (b === a)
                return !0;
            for (var c in a)
                if (a[c] !== b[c])
                    return !1;
            return !0
        }
    }
    ,
    x.times = function(a, b, c) {
        for (var d = Array(Math.max(0, a)), e = 0; a > e; e++)
            d[e] = b.call(c, e);
        return d
    }
    ,
    x.random = function(a, b) {
        return null == b && (b = a,
        a = 0),
        a + Math.floor(Math.random() * (b - a + 1))
    }
    ,
    x.now = Date.now || function() {
        return (new Date).getTime()
    }
    ;
    var G = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    G.unescape = x.invert(G.escape);
    var H = {
        escape: new RegExp("[" + x.keys(G.escape).join("") + "]","g"),
        unescape: new RegExp("(" + x.keys(G.unescape).join("|") + ")","g")
    };
    x.each(["escape", "unescape"], function(a) {
        x[a] = function(b) {
            return null == b ? "" : ("" + b).replace(H[a], function(b) {
                return G[a][b]
            })
        }
    }),
    x.result = function(a, b) {
        if (null == a)
            return void 0;
        var c = a[b];
        return x.isFunction(c) ? c.call(a) : c
    }
    ,
    x.mixin = function(a) {
        y(x.functions(a), function(b) {
            var c = x[b] = a[b];
            x.prototype[b] = function() {
                var a = [this._wrapped];
                return g.apply(a, arguments),
                M.call(this, c.apply(x, a))
            }
        })
    }
    ;
    var I = 0;
    x.uniqueId = function(a) {
        var b = ++I + "";
        return a ? a + b : b
    }
    ,
    x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var J = /(.)^/
      , K = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }
      , L = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function(a, b, c) {
        var d;
        c = x.defaults({}, c, x.templateSettings);
        var e = new RegExp([(c.escape || J).source, (c.interpolate || J).source, (c.evaluate || J).source].join("|") + "|$","g")
          , f = 0
          , g = "__p+='";
        a.replace(e, function(b, c, d, e, h) {
            return g += a.slice(f, h).replace(L, function(a) {
                return "\\" + K[a]
            }),
            c && (g += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'"),
            d && (g += "'+\n((__t=(" + d + "))==null?'':__t)+\n'"),
            e && (g += "';\n" + e + "\n__p+='"),
            f = h + b.length,
            b
        }),
        g += "';\n",
        c.variable || (g = "with(obj||{}){\n" + g + "}\n"),
        g = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + g + "return __p;\n";
        try {
            d = new Function(c.variable || "obj","_",g)
        } catch (h) {
            throw h.source = g,
            h
        }
        if (b)
            return d(b, x);
        var i = function(a) {
            return d.call(this, a, x)
        };
        return i.source = "function(" + (c.variable || "obj") + "){\n" + g + "}",
        i
    }
    ,
    x.chain = function(a) {
        return x(a).chain()
    }
    ;
    var M = function(a) {
        return this._chain ? x(a).chain() : a
    };
    x.mixin(x),
    y(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(a) {
        var b = d[a];
        x.prototype[a] = function() {
            var c = this._wrapped;
            return b.apply(c, arguments),
            "shift" != a && "splice" != a || 0 !== c.length || delete c[0],
            M.call(this, c)
        }
    }),
    y(["concat", "join", "slice"], function(a) {
        var b = d[a];
        x.prototype[a] = function() {
            return M.call(this, b.apply(this._wrapped, arguments))
        }
    }),
    x.extend(x.prototype, {
        chain: function() {
            return this._chain = !0,
            this
        },
        value: function() {
            return this._wrapped
        }
    }),
    "function" == typeof define && define.amd && define("underscore", [], function() {
        return x
    })
}
.call(this),
function() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = [].slice, t = this;
    r = {},
    r.sign = o = function(a) {
        return a > 0 ? 1 : 0 > a ? -1 : 0
    }
    ,
    r.pinch = k = function(a, b, c) {
        var d;
        return b > c && (d = [c, b],
        b = d[0],
        c = d[1]),
        b > a ? b : a > c ? c : a
    }
    ,
    r.loop = q = function(a, b, c) {
        var d, e, f;
        if (b === c)
            return b;
        for (b > c && (f = [c, b],
        b = f[0],
        c = f[1]),
        e = c - b,
        d = a - c; 0 > d; )
            d += e;
        return d % e + b
    }
    ,
    r.clockwise = d = function(a, b, c) {
        for (; b > a; )
            b -= c;
        for (; a > b; )
            b += c;
        return b - a
    }
    ,
    r.nearer = h = function(a, b, c) {
        var e;
        return e = d(a, b, c),
        e >= .5 * c ? e - c : e
    }
    ,
    r.average = b = function() {
        var b;
        return b = 1 <= arguments.length ? s.call(arguments, 0) : [],
        a.apply(null, b) / b.length
    }
    ,
    r.round = n = function(a, b) {
        var c;
        return null == b && (b = 0),
        c = Math.pow(10, b),
        Math.round(a * c) / c
    }
    ,
    r.between = c = function(a, b, c) {
        return a + (b - a) * c
    }
    ,
    r.add = a = function() {
        var a, b, c, d, e;
        for (c = 1 <= arguments.length ? s.call(arguments, 0) : [],
        a = 0,
        d = 0,
        e = c.length; e > d; d++)
            b = c[d],
            a += b;
        return a
    }
    ,
    r.sub = p = function() {
        var a, b, c, d, e;
        if (a = arguments[0],
        c = 2 <= arguments.length ? s.call(arguments, 1) : [],
        void 0 === a)
            throw new Error;
        if (c.length) {
            for (d = 0,
            e = c.length; e > d; d++)
                b = c[d],
                a -= b;
            return a
        }
        return -a
    }
    ,
    r.mul = g = function() {
        var a, b, c, d, e;
        for (c = 1 <= arguments.length ? s.call(arguments, 0) : [],
        a = 1,
        d = 0,
        e = c.length; e > d; d++)
            b = c[d],
            a *= b;
        return a
    }
    ,
    r.div = f = function() {
        var a, b, c, d, e;
        if (a = arguments[0],
        c = 2 <= arguments.length ? s.call(arguments, 1) : [],
        void 0 === a)
            throw new Error;
        if (c.length) {
            for (d = 0,
            e = c.length; e > d; d++)
                b = c[d],
                a /= b;
            return a
        }
        return 1 / a
    }
    ,
    r.random = m = function() {
        var a;
        return a = 1 <= arguments.length ? s.call(arguments, 0) : [],
        0 === a.length ? Math.random() : 1 === a.length ? Math.random() * a[0] : Math.random() * (a[1] - a[0]) + a[0]
    }
    ,
    r.radToDeg = l = function(a) {
        return 57.29577951308232 * a
    }
    ,
    r.degToRad = e = function(a) {
        return .017453292519943295 * a
    }
    ,
    r.exports = function() {
        var a, b, c;
        b = {};
        for (a in r)
            c = r[a],
            b[a] = c;
        return b
    }
    ,
    null != ("undefined" != typeof module && null !== module ? module.exports : void 0) ? module.exports = r : (this._ || (this._ = {}),
    j = this._.number,
    i = this._.num,
    this._.number = this._.num = r,
    r.noConflict = function() {
        return t._.number = j,
        t._.num = i,
        r
    }
    )
}
.call(this),
function(a, b) {
    if ("function" == typeof define && define.amd)
        define(["underscore", "jquery", "exports"], function(c, d, e) {
            a.Backbone = b(a, e, c, d)
        });
    else if ("undefined" != typeof exports) {
        var c = require("underscore");
        b(a, exports, c)
    } else
        a.Backbone = b(a, {}, a._, a.jQuery || a.Zepto || a.ender || a.$)
}(this, function(a, b, c, d) {
    {
        var e = a.Backbone
          , f = []
          , g = (f.push,
        f.slice);
        f.splice
    }
    b.VERSION = "1.1.2",
    b.$ = d,
    b.noConflict = function() {
        return a.Backbone = e,
        this
    }
    ,
    b.emulateHTTP = !1,
    b.emulateJSON = !1;
    var h = b.Events = {
        on: function(a, b, c) {
            if (!j(this, "on", a, [b, c]) || !b)
                return this;
            this._events || (this._events = {});
            var d = this._events[a] || (this._events[a] = []);
            return d.push({
                callback: b,
                context: c,
                ctx: c || this
            }),
            this
        },
        once: function(a, b, d) {
            if (!j(this, "once", a, [b, d]) || !b)
                return this;
            var e = this
              , f = c.once(function() {
                e.off(a, f),
                b.apply(this, arguments)
            });
            return f._callback = b,
            this.on(a, f, d)
        },
        off: function(a, b, d) {
            var e, f, g, h, i, k, l, m;
            if (!this._events || !j(this, "off", a, [b, d]))
                return this;
            if (!a && !b && !d)
                return this._events = void 0,
                this;
            for (h = a ? [a] : c.keys(this._events),
            i = 0,
            k = h.length; k > i; i++)
                if (a = h[i],
                g = this._events[a]) {
                    if (this._events[a] = e = [],
                    b || d)
                        for (l = 0,
                        m = g.length; m > l; l++)
                            f = g[l],
                            (b && b !== f.callback && b !== f.callback._callback || d && d !== f.context) && e.push(f);
                    e.length || delete this._events[a]
                }
            return this
        },
        trigger: function(a) {
            if (!this._events)
                return this;
            var b = g.call(arguments, 1);
            if (!j(this, "trigger", a, b))
                return this;
            var c = this._events[a]
              , d = this._events.all;
            return c && k(c, b),
            d && k(d, arguments),
            this
        },
        stopListening: function(a, b, d) {
            var e = this._listeningTo;
            if (!e)
                return this;
            var f = !b && !d;
            d || "object" != typeof b || (d = this),
            a && ((e = {})[a._listenId] = a);
            for (var g in e)
                a = e[g],
                a.off(b, d, this),
                (f || c.isEmpty(a._events)) && delete this._listeningTo[g];
            return this
        }
    }
      , i = /\s+/
      , j = function(a, b, c, d) {
        if (!c)
            return !0;
        if ("object" == typeof c) {
            for (var e in c)
                a[b].apply(a, [e, c[e]].concat(d));
            return !1
        }
        if (i.test(c)) {
            for (var f = c.split(i), g = 0, h = f.length; h > g; g++)
                a[b].apply(a, [f[g]].concat(d));
            return !1
        }
        return !0
    }
      , k = function(a, b) {
        var c, d = -1, e = a.length, f = b[0], g = b[1], h = b[2];
        switch (b.length) {
        case 0:
            for (; ++d < e; )
                (c = a[d]).callback.call(c.ctx);
            return;
        case 1:
            for (; ++d < e; )
                (c = a[d]).callback.call(c.ctx, f);
            return;
        case 2:
            for (; ++d < e; )
                (c = a[d]).callback.call(c.ctx, f, g);
            return;
        case 3:
            for (; ++d < e; )
                (c = a[d]).callback.call(c.ctx, f, g, h);
            return;
        default:
            for (; ++d < e; )
                (c = a[d]).callback.apply(c.ctx, b);
            return
        }
    }
      , l = {
        listenTo: "on",
        listenToOnce: "once"
    };
    c.each(l, function(a, b) {
        h[b] = function(b, d, e) {
            var f = this._listeningTo || (this._listeningTo = {})
              , g = b._listenId || (b._listenId = c.uniqueId("l"));
            return f[g] = b,
            e || "object" != typeof d || (e = this),
            b[a](d, e, this),
            this
        }
    }),
    h.bind = h.on,
    h.unbind = h.off,
    c.extend(b, h);
    var m = b.Model = function(a, b) {
        var d = a || {};
        b || (b = {}),
        this.cid = c.uniqueId("c"),
        this.attributes = {},
        b.collection && (this.collection = b.collection),
        b.parse && (d = this.parse(d, b) || {}),
        d = c.defaults({}, d, c.result(this, "defaults")),
        this.set(d, b),
        this.changed = {},
        this.initialize.apply(this, arguments)
    }
    ;
    c.extend(m.prototype, h, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function() {
            return c.clone(this.attributes)
        },
        sync: function() {
            return b.sync.apply(this, arguments)
        },
        get: function(a) {
            return this.attributes[a]
        },
        escape: function(a) {
            return c.escape(this.get(a))
        },
        has: function(a) {
            return null != this.get(a)
        },
        set: function(a, b, d) {
            var e, f, g, h, i, j, k, l;
            if (null == a)
                return this;
            if ("object" == typeof a ? (f = a,
            d = b) : (f = {})[a] = b,
            d || (d = {}),
            !this._validate(f, d))
                return !1;
            g = d.unset,
            i = d.silent,
            h = [],
            j = this._changing,
            this._changing = !0,
            j || (this._previousAttributes = c.clone(this.attributes),
            this.changed = {}),
            l = this.attributes,
            k = this._previousAttributes,
            this.idAttribute in f && (this.id = f[this.idAttribute]);
            for (e in f)
                b = f[e],
                c.isEqual(l[e], b) || h.push(e),
                c.isEqual(k[e], b) ? delete this.changed[e] : this.changed[e] = b,
                g ? delete l[e] : l[e] = b;
            if (!i) {
                h.length && (this._pending = d);
                for (var m = 0, n = h.length; n > m; m++)
                    this.trigger("change:" + h[m], this, l[h[m]], d)
            }
            if (j)
                return this;
            if (!i)
                for (; this._pending; )
                    d = this._pending,
                    this._pending = !1,
                    this.trigger("change", this, d);
            return this._pending = !1,
            this._changing = !1,
            this
        },
        unset: function(a, b) {
            return this.set(a, void 0, c.extend({}, b, {
                unset: !0
            }))
        },
        clear: function(a) {
            var b = {};
            for (var d in this.attributes)
                b[d] = void 0;
            return this.set(b, c.extend({}, a, {
                unset: !0
            }))
        },
        hasChanged: function(a) {
            return null == a ? !c.isEmpty(this.changed) : c.has(this.changed, a)
        },
        changedAttributes: function(a) {
            if (!a)
                return this.hasChanged() ? c.clone(this.changed) : !1;
            var b, d = !1, e = this._changing ? this._previousAttributes : this.attributes;
            for (var f in a)
                c.isEqual(e[f], b = a[f]) || ((d || (d = {}))[f] = b);
            return d
        },
        previous: function(a) {
            return null != a && this._previousAttributes ? this._previousAttributes[a] : null
        },
        previousAttributes: function() {
            return c.clone(this._previousAttributes)
        },
        fetch: function(a) {
            a = a ? c.clone(a) : {},
            void 0 === a.parse && (a.parse = !0);
            var b = this
              , d = a.success;
            return a.success = function(c) {
                return b.set(b.parse(c, a), a) ? (d && d(b, c, a),
                void b.trigger("sync", b, c, a)) : !1
            }
            ,
            L(this, a),
            this.sync("read", this, a)
        },
        save: function(a, b, d) {
            var e, f, g, h = this.attributes;
            if (null == a || "object" == typeof a ? (e = a,
            d = b) : (e = {})[a] = b,
            d = c.extend({
                validate: !0
            }, d),
            e && !d.wait) {
                if (!this.set(e, d))
                    return !1
            } else if (!this._validate(e, d))
                return !1;
            e && d.wait && (this.attributes = c.extend({}, h, e)),
            void 0 === d.parse && (d.parse = !0);
            var i = this
              , j = d.success;
            return d.success = function(a) {
                i.attributes = h;
                var b = i.parse(a, d);
                return d.wait && (b = c.extend(e || {}, b)),
                c.isObject(b) && !i.set(b, d) ? !1 : (j && j(i, a, d),
                void i.trigger("sync", i, a, d))
            }
            ,
            L(this, d),
            f = this.isNew() ? "create" : d.patch ? "patch" : "update",
            "patch" === f && (d.attrs = e),
            g = this.sync(f, this, d),
            e && d.wait && (this.attributes = h),
            g
        },
        destroy: function(a) {
            a = a ? c.clone(a) : {};
            var b = this
              , d = a.success
              , e = function() {
                b.trigger("destroy", b, b.collection, a)
            };
            if (a.success = function(c) {
                (a.wait || b.isNew()) && e(),
                d && d(b, c, a),
                b.isNew() || b.trigger("sync", b, c, a)
            }
            ,
            this.isNew())
                return a.success(),
                !1;
            L(this, a);
            var f = this.sync("delete", this, a);
            return a.wait || e(),
            f
        },
        url: function() {
            var a = c.result(this, "urlRoot") || c.result(this.collection, "url") || K();
            return this.isNew() ? a : a.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
        },
        parse: function(a) {
            return a
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return !this.has(this.idAttribute)
        },
        isValid: function(a) {
            return this._validate({}, c.extend(a || {}, {
                validate: !0
            }))
        },
        _validate: function(a, b) {
            if (!b.validate || !this.validate)
                return !0;
            a = c.extend({}, this.attributes, a);
            var d = this.validationError = this.validate(a, b) || null;
            return d ? (this.trigger("invalid", this, d, c.extend(b, {
                validationError: d
            })),
            !1) : !0
        }
    });
    var n = ["keys", "values", "pairs", "invert", "pick", "omit"];
    c.each(n, function(a) {
        m.prototype[a] = function() {
            var b = g.call(arguments);
            return b.unshift(this.attributes),
            c[a].apply(c, b)
        }
    });
    var o = b.Collection = function(a, b) {
        b || (b = {}),
        b.model && (this.model = b.model),
        void 0 !== b.comparator && (this.comparator = b.comparator),
        this._reset(),
        this.initialize.apply(this, arguments),
        a && this.reset(a, c.extend({
            silent: !0
        }, b))
    }
      , p = {
        add: !0,
        remove: !0,
        merge: !0
    }
      , q = {
        add: !0,
        remove: !1
    };
    c.extend(o.prototype, h, {
        model: m,
        initialize: function() {},
        toJSON: function(a) {
            return this.map(function(b) {
                return b.toJSON(a)
            })
        },
        sync: function() {
            return b.sync.apply(this, arguments)
        },
        add: function(a, b) {
            return this.set(a, c.extend({
                merge: !1
            }, b, q))
        },
        remove: function(a, b) {
            var d = !c.isArray(a);
            a = d ? [a] : c.clone(a),
            b || (b = {});
            var e, f, g, h;
            for (e = 0,
            f = a.length; f > e; e++)
                h = a[e] = this.get(a[e]),
                h && (delete this._byId[h.id],
                delete this._byId[h.cid],
                g = this.indexOf(h),
                this.models.splice(g, 1),
                this.length--,
                b.silent || (b.index = g,
                h.trigger("remove", h, this, b)),
                this._removeReference(h, b));
            return d ? a[0] : a
        },
        set: function(a, b) {
            b = c.defaults({}, b, p),
            b.parse && (a = this.parse(a, b));
            var d = !c.isArray(a);
            a = d ? a ? [a] : [] : c.clone(a);
            var e, f, g, h, i, j, k, l = b.at, n = this.model, o = this.comparator && null == l && b.sort !== !1, q = c.isString(this.comparator) ? this.comparator : null, r = [], s = [], t = {}, u = b.add, v = b.merge, w = b.remove, x = !o && u && w ? [] : !1;
            for (e = 0,
            f = a.length; f > e; e++) {
                if (i = a[e] || {},
                g = i instanceof m ? h = i : i[n.prototype.idAttribute || "id"],
                j = this.get(g))
                    w && (t[j.cid] = !0),
                    v && (i = i === h ? h.attributes : i,
                    b.parse && (i = j.parse(i, b)),
                    j.set(i, b),
                    o && !k && j.hasChanged(q) && (k = !0)),
                    a[e] = j;
                else if (u) {
                    if (h = a[e] = this._prepareModel(i, b),
                    !h)
                        continue;
                    r.push(h),
                    this._addReference(h, b)
                }
                h = j || h,
                !x || !h.isNew() && t[h.id] || x.push(h),
                t[h.id] = !0
            }
            if (w) {
                for (e = 0,
                f = this.length; f > e; ++e)
                    t[(h = this.models[e]).cid] || s.push(h);
                s.length && this.remove(s, b)
            }
            if (r.length || x && x.length)
                if (o && (k = !0),
                this.length += r.length,
                null != l)
                    for (e = 0,
                    f = r.length; f > e; e++)
                        this.models.splice(l + e, 0, r[e]);
                else {
                    x && (this.models.length = 0);
                    var y = x || r;
                    for (e = 0,
                    f = y.length; f > e; e++)
                        this.models.push(y[e])
                }
            if (k && this.sort({
                silent: !0
            }),
            !b.silent) {
                for (e = 0,
                f = r.length; f > e; e++)
                    (h = r[e]).trigger("add", h, this, b);
                (k || x && x.length) && this.trigger("sort", this, b)
            }
            return d ? a[0] : a
        },
        reset: function(a, b) {
            b || (b = {});
            for (var d = 0, e = this.models.length; e > d; d++)
                this._removeReference(this.models[d], b);
            return b.previousModels = this.models,
            this._reset(),
            a = this.add(a, c.extend({
                silent: !0
            }, b)),
            b.silent || this.trigger("reset", this, b),
            a
        },
        push: function(a, b) {
            return this.add(a, c.extend({
                at: this.length
            }, b))
        },
        pop: function(a) {
            var b = this.at(this.length - 1);
            return this.remove(b, a),
            b
        },
        unshift: function(a, b) {
            return this.add(a, c.extend({
                at: 0
            }, b))
        },
        shift: function(a) {
            var b = this.at(0);
            return this.remove(b, a),
            b
        },
        slice: function() {
            return g.apply(this.models, arguments)
        },
        get: function(a) {
            return null == a ? void 0 : this._byId[a] || this._byId[a.id] || this._byId[a.cid]
        },
        at: function(a) {
            return this.models[a]
        },
        where: function(a, b) {
            return c.isEmpty(a) ? b ? void 0 : [] : this[b ? "find" : "filter"](function(b) {
                for (var c in a)
                    if (a[c] !== b.get(c))
                        return !1;
                return !0
            })
        },
        findWhere: function(a) {
            return this.where(a, !0)
        },
        sort: function(a) {
            if (!this.comparator)
                throw new Error("Cannot sort a set without a comparator");
            return a || (a = {}),
            c.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(c.bind(this.comparator, this)),
            a.silent || this.trigger("sort", this, a),
            this
        },
        pluck: function(a) {
            return c.invoke(this.models, "get", a)
        },
        fetch: function(a) {
            a = a ? c.clone(a) : {},
            void 0 === a.parse && (a.parse = !0);
            var b = a.success
              , d = this;
            return a.success = function(c) {
                var e = a.reset ? "reset" : "set";
                d[e](c, a),
                b && b(d, c, a),
                d.trigger("sync", d, c, a)
            }
            ,
            L(this, a),
            this.sync("read", this, a)
        },
        create: function(a, b) {
            if (b = b ? c.clone(b) : {},
            !(a = this._prepareModel(a, b)))
                return !1;
            b.wait || this.add(a, b);
            var d = this
              , e = b.success;
            return b.success = function(a, c) {
                b.wait && d.add(a, b),
                e && e(a, c, b)
            }
            ,
            a.save(null, b),
            a
        },
        parse: function(a) {
            return a
        },
        clone: function() {
            return new this.constructor(this.models)
        },
        _reset: function() {
            this.length = 0,
            this.models = [],
            this._byId = {}
        },
        _prepareModel: function(a, b) {
            if (a instanceof m)
                return a;
            b = b ? c.clone(b) : {},
            b.collection = this;
            var d = new this.model(a,b);
            return d.validationError ? (this.trigger("invalid", this, d.validationError, b),
            !1) : d
        },
        _addReference: function(a) {
            this._byId[a.cid] = a,
            null != a.id && (this._byId[a.id] = a),
            a.collection || (a.collection = this),
            a.on("all", this._onModelEvent, this)
        },
        _removeReference: function(a) {
            this === a.collection && delete a.collection,
            a.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(a, b, c, d) {
            ("add" !== a && "remove" !== a || c === this) && ("destroy" === a && this.remove(b, d),
            b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)],
            null != b.id && (this._byId[b.id] = b)),
            this.trigger.apply(this, arguments))
        }
    });
    var r = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
    c.each(r, function(a) {
        o.prototype[a] = function() {
            var b = g.call(arguments);
            return b.unshift(this.models),
            c[a].apply(c, b)
        }
    });
    var s = ["groupBy", "countBy", "sortBy", "indexBy"];
    c.each(s, function(a) {
        o.prototype[a] = function(b, d) {
            var e = c.isFunction(b) ? b : function(a) {
                return a.get(b)
            }
            ;
            return c[a](this.models, e, d)
        }
    });
    var t = b.View = function(a) {
        this.cid = c.uniqueId("view"),
        a || (a = {}),
        c.extend(this, c.pick(a, v)),
        this._ensureElement(),
        this.initialize.apply(this, arguments),
        this.delegateEvents()
    }
      , u = /^(\S+)\s*(.*)$/
      , v = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    c.extend(t.prototype, h, {
        tagName: "div",
        $: function(a) {
            return this.$el.find(a)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            return this.$el.remove(),
            this.stopListening(),
            this
        },
        setElement: function(a, c) {
            return this.$el && this.undelegateEvents(),
            this.$el = a instanceof b.$ ? a : b.$(a),
            this.el = this.$el[0],
            c !== !1 && this.delegateEvents(),
            this
        },
        delegateEvents: function(a) {
            if (!a && !(a = c.result(this, "events")))
                return this;
            this.undelegateEvents();
            for (var b in a) {
                var d = a[b];
                if (c.isFunction(d) || (d = this[a[b]]),
                d) {
                    var e = b.match(u)
                      , f = e[1]
                      , g = e[2];
                    d = c.bind(d, this),
                    f += ".delegateEvents" + this.cid,
                    "" === g ? this.$el.on(f, d) : this.$el.on(f, g, d)
                }
            }
            return this
        },
        undelegateEvents: function() {
            return this.$el.off(".delegateEvents" + this.cid),
            this
        },
        _ensureElement: function() {
            if (this.el)
                this.setElement(c.result(this, "el"), !1);
            else {
                var a = c.extend({}, c.result(this, "attributes"));
                this.id && (a.id = c.result(this, "id")),
                this.className && (a["class"] = c.result(this, "className"));
                var d = b.$("<" + c.result(this, "tagName") + ">").attr(a);
                this.setElement(d, !1)
            }
        }
    }),
    b.sync = function(a, d, e) {
        var f = x[a];
        c.defaults(e || (e = {}), {
            emulateHTTP: b.emulateHTTP,
            emulateJSON: b.emulateJSON
        });
        var g = {
            type: f,
            dataType: "json"
        };
        if (e.url || (g.url = c.result(d, "url") || K()),
        null != e.data || !d || "create" !== a && "update" !== a && "patch" !== a || (g.contentType = "application/json",
        g.data = JSON.stringify(e.attrs || d.toJSON(e))),
        e.emulateJSON && (g.contentType = "application/x-www-form-urlencoded",
        g.data = g.data ? {
            model: g.data
        } : {}),
        e.emulateHTTP && ("PUT" === f || "DELETE" === f || "PATCH" === f)) {
            g.type = "POST",
            e.emulateJSON && (g.data._method = f);
            var h = e.beforeSend;
            e.beforeSend = function(a) {
                return a.setRequestHeader("X-HTTP-Method-Override", f),
                h ? h.apply(this, arguments) : void 0
            }
        }
        "GET" === g.type || e.emulateJSON || (g.processData = !1),
        "PATCH" === g.type && w && (g.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        }
        );
        var i = e.xhr = b.ajax(c.extend(g, e));
        return d.trigger("request", d, i, e),
        i
    }
    ;
    var w = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent)
      , x = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    b.ajax = function() {
        return b.$.ajax.apply(b.$, arguments)
    }
    ;
    var y = b.Router = function(a) {
        a || (a = {}),
        a.routes && (this.routes = a.routes),
        this._bindRoutes(),
        this.initialize.apply(this, arguments)
    }
      , z = /\((.*?)\)/g
      , A = /(\(\?)?:\w+/g
      , B = /\*\w+/g
      , C = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    c.extend(y.prototype, h, {
        initialize: function() {},
        route: function(a, d, e) {
            c.isRegExp(a) || (a = this._routeToRegExp(a)),
            c.isFunction(d) && (e = d,
            d = ""),
            e || (e = this[d]);
            var f = this;
            return b.history.route(a, function(c) {
                var g = f._extractParameters(a, c);
                f.execute(e, g),
                f.trigger.apply(f, ["route:" + d].concat(g)),
                f.trigger("route", d, g),
                b.history.trigger("route", f, d, g)
            }),
            this
        },
        execute: function(a, b) {
            a && a.apply(this, b)
        },
        navigate: function(a, c) {
            return b.history.navigate(a, c),
            this
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = c.result(this, "routes");
                for (var a, b = c.keys(this.routes); null != (a = b.pop()); )
                    this.route(a, this.routes[a])
            }
        },
        _routeToRegExp: function(a) {
            return a = a.replace(C, "\\$&").replace(z, "(?:$1)?").replace(A, function(a, b) {
                return b ? a : "([^/?]+)"
            }).replace(B, "([^?]*?)"),
            new RegExp("^" + a + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters: function(a, b) {
            var d = a.exec(b).slice(1);
            return c.map(d, function(a, b) {
                return b === d.length - 1 ? a || null : a ? decodeURIComponent(a) : null
            })
        }
    });
    var D = b.History = function() {
        this.handlers = [],
        c.bindAll(this, "checkUrl"),
        "undefined" != typeof window && (this.location = window.location,
        this.history = window.history)
    }
      , E = /^[#\/]|\s+$/g
      , F = /^\/+|\/+$/g
      , G = /msie [\w.]+/
      , H = /\/$/
      , I = /#.*$/;
    D.started = !1,
    c.extend(D.prototype, h, {
        interval: 50,
        atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
        },
        getHash: function(a) {
            var b = (a || this).location.href.match(/#(.*)$/);
            return b ? b[1] : ""
        },
        getFragment: function(a, b) {
            if (null == a)
                if (this._hasPushState || !this._wantsHashChange || b) {
                    a = decodeURI(this.location.pathname + this.location.search);
                    var c = this.root.replace(H, "");
                    a.indexOf(c) || (a = a.slice(c.length))
                } else
                    a = this.getHash();
            return a.replace(E, "")
        },
        start: function(a) {
            if (D.started)
                throw new Error("Backbone.history has already been started");
            D.started = !0,
            this.options = c.extend({
                root: "/"
            }, this.options, a),
            this.root = this.options.root,
            this._wantsHashChange = this.options.hashChange !== !1,
            this._wantsPushState = !!this.options.pushState,
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var d = this.getFragment()
              , e = document.documentMode
              , f = G.exec(navigator.userAgent.toLowerCase()) && (!e || 7 >= e);
            if (this.root = ("/" + this.root + "/").replace(F, "/"),
            f && this._wantsHashChange) {
                var g = b.$('<iframe src="javascript:0" tabindex="-1">');
                this.iframe = g.hide().appendTo("body")[0].contentWindow,
                this.navigate(d)
            }
            this._hasPushState ? b.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange"in window && !f ? b.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
            this.fragment = d;
            var h = this.location;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot())
                    return this.fragment = this.getFragment(null, !0),
                    this.location.replace(this.root + "#" + this.fragment),
                    !0;
                this._hasPushState && this.atRoot() && h.hash && (this.fragment = this.getHash().replace(E, ""),
                this.history.replaceState({}, document.title, this.root + this.fragment))
            }
            return this.options.silent ? void 0 : this.loadUrl()
        },
        stop: function() {
            b.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl),
            this._checkUrlInterval && clearInterval(this._checkUrlInterval),
            D.started = !1
        },
        route: function(a, b) {
            this.handlers.unshift({
                route: a,
                callback: b
            })
        },
        checkUrl: function() {
            var a = this.getFragment();
            return a === this.fragment && this.iframe && (a = this.getFragment(this.getHash(this.iframe))),
            a === this.fragment ? !1 : (this.iframe && this.navigate(a),
            void this.loadUrl())
        },
        loadUrl: function(a) {
            return a = this.fragment = this.getFragment(a),
            c.any(this.handlers, function(b) {
                return b.route.test(a) ? (b.callback(a),
                !0) : void 0
            })
        },
        navigate: function(a, b) {
            if (!D.started)
                return !1;
            b && b !== !0 || (b = {
                trigger: !!b
            });
            var c = this.root + (a = this.getFragment(a || ""));
            if (a = a.replace(I, ""),
            this.fragment !== a) {
                if (this.fragment = a,
                "" === a && "/" !== c && (c = c.slice(0, -1)),
                this._hasPushState)
                    this.history[b.replace ? "replaceState" : "pushState"]({}, document.title, c);
                else {
                    if (!this._wantsHashChange)
                        return this.location.assign(c);
                    this._updateHash(this.location, a, b.replace),
                    this.iframe && a !== this.getFragment(this.getHash(this.iframe)) && (b.replace || this.iframe.document.open().close(),
                    this._updateHash(this.iframe.location, a, b.replace))
                }
                return b.trigger ? this.loadUrl(a) : void 0
            }
        },
        _updateHash: function(a, b, c) {
            if (c) {
                var d = a.href.replace(/(javascript:|#).*$/, "");
                a.replace(d + "#" + b)
            } else
                a.hash = "#" + b
        }
    }),
    b.history = new D;
    var J = function(a, b) {
        var d, e = this;
        d = a && c.has(a, "constructor") ? a.constructor : function() {
            return e.apply(this, arguments)
        }
        ,
        c.extend(d, e, b);
        var f = function() {
            this.constructor = d
        };
        return f.prototype = e.prototype,
        d.prototype = new f,
        a && c.extend(d.prototype, a),
        d.__super__ = e.prototype,
        d
    };
    m.extend = o.extend = y.extend = t.extend = D.extend = J;
    var K = function() {
        throw new Error('A "url" property or function must be specified')
    }
      , L = function(a, b) {
        var c = b.error;
        b.error = function(d) {
            c && c(a, d, b),
            a.trigger("error", a, d, b)
        }
    };
    return b
}),
function() {
    var a, b, c, d = {}.hasOwnProperty, e = function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var e in b)
            d.call(b, e) && (a[e] = b[e]);
        return c.prototype = b.prototype,
        a.prototype = new c,
        a.__super__ = b.prototype,
        a
    }, f = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    };
    if (null != ("undefined" != typeof module && null !== module ? module.exports : void 0))
        b = require("backbone");
    else {
        if (!this.Backbone)
            throw new Error("Backbone not found");
        b = this.Backbone
    }
    a = function(a) {
        function b() {
            return b.__super__.constructor.apply(this, arguments)
        }
        return e(b, a),
        b.prototype.initialize = function() {
            return this._x = 0 / 0,
            this._y = 0 / 0,
            this._width = 0 / 0,
            this._height = 0 / 0,
            this._alpha = 1,
            this._visible = !0,
            b.__super__.initialize.call(this, arguments)
        }
        ,
        b.prototype.position = function(a) {
            var b;
            return void 0 !== a ? (b = !1,
            "x"in a && this._x !== a.x && (this._x = a.x,
            b = !0),
            "y"in a && this._y !== a.y && (this._y = a.y,
            b = !0),
            b && this._inPosition(),
            this) : {
                x: this._x || 0,
                y: this._y || 0
            }
        }
        ,
        b.prototype.x = function(a) {
            return void 0 !== a ? this.position({
                x: a
            }) : this._x || 0
        }
        ,
        b.prototype.y = function(a) {
            return void 0 !== a ? this.position({
                y: a
            }) : this._y || 0
        }
        ,
        b.prototype._inPosition = function() {
            return this._onPosition(),
            this.trigger("position", this)
        }
        ,
        b.prototype._onPosition = function() {
            return this.$el.css({
                left: this.x(),
                top: this.y()
            })
        }
        ,
        b.prototype.size = function(a) {
            var b;
            return void 0 !== a ? (b = !1,
            "width"in a && this._width !== a.width && (this._width = a.width,
            b = !0),
            "height"in a && this._height !== a.height && (this._height = a.height,
            b = !0),
            b && this._inSize(),
            this) : {
                width: this._width || 0,
                height: this._height || 0
            }
        }
        ,
        b.prototype.width = function(a) {
            return void 0 !== a ? this.size({
                width: a
            }) : this._width || 0
        }
        ,
        b.prototype.height = function(a) {
            return void 0 !== a ? this.size({
                height: a
            }) : this._height || 0
        }
        ,
        b.prototype._inSize = function() {
            return this._onSize(),
            this.trigger("size", this)
        }
        ,
        b.prototype._onSize = function() {
            return this.$el.css({
                width: this.width(),
                height: this.height()
            })
        }
        ,
        b.prototype.alpha = function(a) {
            return void 0 !== a ? (this._alpha !== a && (this._alpha = a,
            this._inAlpha()),
            this) : this._alpha
        }
        ,
        b.prototype._inAlpha = function() {
            return this._onAlpha(),
            this.trigger("alpha", this)
        }
        ,
        b.prototype._onAlpha = function() {
            return this.$el.css({
                opacity: this.alpha()
            })
        }
        ,
        b.prototype.visible = function(a) {
            return void 0 !== a ? (this._visible !== a && (this._visible = a,
            this._inVisible()),
            this) : this._visible
        }
        ,
        b.prototype._inVisible = function() {
            return this._onVisible(),
            this.trigger("visible", this)
        }
        ,
        b.prototype._onVisible = function() {
            return this.visible() ? this.$el.show() : this.$el.hide()
        }
        ,
        b
    }(b.View),
    c = function(a) {
        function b() {
            return this._onClick = f(this._onClick, this),
            this._onMouseLeave = f(this._onMouseLeave, this),
            this._onMouseEnter = f(this._onMouseEnter, this),
            b.__super__.constructor.apply(this, arguments)
        }
        return e(b, a),
        b.prototype.initialize = function() {
            return this._data = null,
            this._selected = !1,
            this._enabled = !1,
            this._hover = !1,
            this.$el.on("mouseenter", this._onMouseEnter).on("mouseleave", this._onMouseLeave).on("click", this._onClick),
            b.__super__.initialize.apply(this, arguments)
        }
        ,
        b.prototype.data = function(a) {
            return void 0 !== a ? (this._data !== a && (this._data = a,
            this._inData()),
            this) : this._data
        }
        ,
        b.prototype._inData = function() {
            return this._onData(),
            this.trigger("data", this)
        }
        ,
        b.prototype._onData = function() {}
        ,
        b.prototype.selected = function(a) {
            return void 0 !== a ? (this._selected !== a && (this._selected = a,
            this._inSelected()),
            this) : this._selected
        }
        ,
        b.prototype._inSelected = function() {
            return this._onSelected(),
            this.trigger("selected", this)
        }
        ,
        b.prototype._onSelected = function() {
            return this.selected() ? this.$el.addClass("selected") : this.$el.removeClass("selected")
        }
        ,
        b.prototype.enabled = function(a) {
            return void 0 !== a ? (this._enabled !== a && (this._enabled = a,
            this._inEnabled()),
            this) : this._enabled
        }
        ,
        b.prototype._inEnabled = function() {
            return this._onEnabled(),
            this.trigger("enabled", this)
        }
        ,
        b.prototype._onEnabled = function() {
            return this.enabled() ? this.$el.addClass("enabled") : this.$el.removeClass("enabled")
        }
        ,
        b.prototype.hover = function() {
            return this._hover
        }
        ,
        b.prototype._onMouseEnter = function() {
            return this._hover = !0,
            this._inHover()
        }
        ,
        b.prototype._onMouseLeave = function() {
            return this._hover = !1,
            this._inHover()
        }
        ,
        b.prototype._inHover = function() {
            return this._onHover(),
            this.trigger("hover", this)
        }
        ,
        b.prototype._onHover = function() {}
        ,
        b.prototype._onClick = function(a) {
            return a.preventDefault(),
            this.trigger("click", this)
        }
        ,
        b
    }(a),
    null != ("undefined" != typeof module && null !== module ? module.exports : void 0) ? module.exports = {
        AdhocView: a,
        ButtonView: c
    } : null != this.Backbone && (this.Backbone.AdhocView = a,
    this.Backbone.ButtonView = c)
}
.call(this),
this.createjs = this.createjs || {},
function() {
    var a = function() {
        throw "UID cannot be instantiated"
    };
    a._nextID = 0,
    a.get = function() {
        return a._nextID++
    }
    ,
    createjs.UID = a
}(),
this.createjs = this.createjs || {},
function() {
    var a = function() {
        this.initialize()
    }
      , b = a.prototype;
    a.initialize = function(a) {
        a.addEventListener = b.addEventListener,
        a.removeEventListener = b.removeEventListener,
        a.removeAllEventListeners = b.removeAllEventListeners,
        a.hasEventListener = b.hasEventListener,
        a.dispatchEvent = b.dispatchEvent
    }
    ,
    b._listeners = null,
    b.initialize = function() {}
    ,
    b.addEventListener = function(a, b) {
        var c = this._listeners;
        c ? this.removeEventListener(a, b) : c = this._listeners = {};
        var d = c[a];
        return d || (d = c[a] = []),
        d.push(b),
        b
    }
    ,
    b.removeEventListener = function(a, b) {
        var c = this._listeners;
        if (c) {
            var d = c[a];
            if (d)
                for (var e = 0, f = d.length; f > e; e++)
                    if (d[e] == b) {
                        1 == f ? delete c[a] : d.splice(e, 1);
                        break
                    }
        }
    }
    ,
    b.removeAllEventListeners = function(a) {
        a ? this._listeners && delete this._listeners[a] : this._listeners = null
    }
    ,
    b.dispatchEvent = function(a, b) {
        var c = !1
          , d = this._listeners;
        if (a && d) {
            "string" == typeof a && (a = {
                type: a
            });
            var e = d[a.type];
            if (!e)
                return c;
            a.target = b || this,
            e = e.slice();
            for (var f = 0, g = e.length; g > f; f++) {
                var h = e[f];
                c = h.handleEvent ? c || h.handleEvent(a) : c || h(a)
            }
        }
        return !!c
    }
    ,
    b.hasEventListener = function(a) {
        var b = this._listeners;
        return !(!b || !b[a])
    }
    ,
    b.toString = function() {
        return "[EventDispatcher]"
    }
    ,
    createjs.EventDispatcher = a
}(),
this.createjs = this.createjs || {},
function() {
    var a = function() {
        throw "Ticker cannot be instantiated."
    };
    a.useRAF = !1,
    a.addEventListener = null,
    a.removeEventListener = null,
    a.removeAllEventListeners = null,
    a.dispatchEvent = null,
    a.hasEventListener = null,
    a._listeners = null,
    createjs.EventDispatcher.initialize(a),
    a._listeners = null,
    a._pauseable = null,
    a._paused = !1,
    a._inited = !1,
    a._startTime = 0,
    a._pausedTime = 0,
    a._ticks = 0,
    a._pausedTicks = 0,
    a._interval = 50,
    a._lastTime = 0,
    a._times = null,
    a._tickTimes = null,
    a._rafActive = !1,
    a._timeoutID = null,
    a.addListener = function(b, c) {
        null != b && (a.removeListener(b),
        a._pauseable[a._listeners.length] = null == c ? !0 : c,
        a._listeners.push(b))
    }
    ,
    a.init = function() {
        a._inited = !0,
        a._times = [],
        a._tickTimes = [],
        a._pauseable = [],
        a._listeners = [],
        a._times.push(a._lastTime = a._startTime = a._getTime()),
        a.setInterval(a._interval)
    }
    ,
    a.removeListener = function(b) {
        var c = a._listeners;
        if (c) {
            var d = c.indexOf(b);
            -1 != d && (c.splice(d, 1),
            a._pauseable.splice(d, 1))
        }
    }
    ,
    a.removeAllListeners = function() {
        a._listeners = [],
        a._pauseable = []
    }
    ,
    a.setInterval = function(b) {
        a._interval = b,
        a._inited && a._setupTick()
    }
    ,
    a.getInterval = function() {
        return a._interval
    }
    ,
    a.setFPS = function(b) {
        a.setInterval(1e3 / b)
    }
    ,
    a.getFPS = function() {
        return 1e3 / a._interval
    }
    ,
    a.getMeasuredFPS = function(b) {
        return a._times.length < 2 ? -1 : (null == b && (b = 0 | a.getFPS()),
        b = Math.min(a._times.length - 1, b),
        1e3 / ((a._times[0] - a._times[b]) / b))
    }
    ,
    a.setPaused = function(b) {
        a._paused = b
    }
    ,
    a.getPaused = function() {
        return a._paused
    }
    ,
    a.getTime = function(b) {
        return a._getTime() - a._startTime - (b ? a._pausedTime : 0)
    }
    ,
    a.getTicks = function(b) {
        return a._ticks - (b ? a._pausedTicks : 0)
    }
    ,
    a._handleAF = function() {
        a._rafActive = !1,
        a._setupTick(),
        a._getTime() - a._lastTime >= .97 * (a._interval - 1) && a._tick()
    }
    ,
    a._handleTimeout = function() {
        a.timeoutID = null,
        a._setupTick(),
        a._tick()
    }
    ,
    a._setupTick = function() {
        if (!a._rafActive && null == a.timeoutID) {
            if (a.useRAF) {
                var b = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
                if (b)
                    return b(a._handleAF),
                    void (a._rafActive = !0)
            }
            a.timeoutID = setTimeout(a._handleTimeout, a._interval)
        }
    }
    ,
    a._tick = function() {
        var b = a._getTime();
        a._ticks++;
        var c = b - a._lastTime
          , d = a._paused;
        d && (a._pausedTicks++,
        a._pausedTime += c),
        a._lastTime = b;
        for (var e = a._pauseable, f = a._listeners.slice(), g = f ? f.length : 0, h = 0; g > h; h++) {
            var i = f[h];
            null == i || d && e[h] || (i.tick ? i.tick(c, d) : i instanceof Function && i(c, d))
        }
        for (a.dispatchEvent({
            type: "tick",
            paused: d,
            delta: c,
            time: b,
            runTime: b - a._pausedTime
        }),
        a._tickTimes.unshift(a._getTime() - b); a._tickTimes.length > 100; )
            a._tickTimes.pop();
        for (a._times.unshift(b); a._times.length > 100; )
            a._times.pop()
    }
    ;
    var b = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
    a._getTime = function() {
        return b && b.call(performance) || (new Date).getTime()
    }
    ,
    a.init(),
    createjs.Ticker = a
}(),
this.createjs = this.createjs || {},
function() {
    var a = function(a, b, c, d, e, f, g, h, i) {
        this.initialize(a, b, c, d, e, f, g, h, i)
    }
      , b = a.prototype;
    b.stageX = 0,
    b.stageY = 0,
    b.rawX = 0,
    b.rawY = 0,
    b.type = null,
    b.nativeEvent = null,
    b.onMouseMove = null,
    b.onMouseUp = null,
    b.target = null,
    b.pointerID = 0,
    b.primary = !1,
    b.addEventListener = null,
    b.removeEventListener = null,
    b.removeAllEventListeners = null,
    b.dispatchEvent = null,
    b.hasEventListener = null,
    b._listeners = null,
    createjs.EventDispatcher.initialize(b),
    b.initialize = function(a, b, c, d, e, f, g, h, i) {
        this.type = a,
        this.stageX = b,
        this.stageY = c,
        this.target = d,
        this.nativeEvent = e,
        this.pointerID = f,
        this.primary = g,
        this.rawX = null == h ? b : h,
        this.rawY = null == i ? c : i
    }
    ,
    b.clone = function() {
        return new a(this.type,this.stageX,this.stageY,this.target,this.nativeEvent,this.pointerID,this.primary,this.rawX,this.rawY)
    }
    ,
    b.toString = function() {
        return "[MouseEvent (type=" + this.type + " stageX=" + this.stageX + " stageY=" + this.stageY + ")]"
    }
    ,
    createjs.MouseEvent = a
}(),
this.createjs = this.createjs || {},
function() {
    var a = function(a, b, c, d, e, f) {
        this.initialize(a, b, c, d, e, f)
    }
      , b = a.prototype;
    a.identity = null,
    a.DEG_TO_RAD = Math.PI / 180,
    b.a = 1,
    b.b = 0,
    b.c = 0,
    b.d = 1,
    b.tx = 0,
    b.ty = 0,
    b.alpha = 1,
    b.shadow = null,
    b.compositeOperation = null,
    b.initialize = function(a, b, c, d, e, f) {
        return null != a && (this.a = a),
        this.b = b || 0,
        this.c = c || 0,
        null != d && (this.d = d),
        this.tx = e || 0,
        this.ty = f || 0,
        this
    }
    ,
    b.prepend = function(a, b, c, d, e, f) {
        var g = this.tx;
        if (1 != a || 0 != b || 0 != c || 1 != d) {
            var h = this.a
              , i = this.c;
            this.a = h * a + this.b * c,
            this.b = h * b + this.b * d,
            this.c = i * a + this.d * c,
            this.d = i * b + this.d * d
        }
        return this.tx = g * a + this.ty * c + e,
        this.ty = g * b + this.ty * d + f,
        this
    }
    ,
    b.append = function(a, b, c, d, e, f) {
        var g = this.a
          , h = this.b
          , i = this.c
          , j = this.d;
        return this.a = a * g + b * i,
        this.b = a * h + b * j,
        this.c = c * g + d * i,
        this.d = c * h + d * j,
        this.tx = e * g + f * i + this.tx,
        this.ty = e * h + f * j + this.ty,
        this
    }
    ,
    b.prependMatrix = function(a) {
        return this.prepend(a.a, a.b, a.c, a.d, a.tx, a.ty),
        this.prependProperties(a.alpha, a.shadow, a.compositeOperation),
        this
    }
    ,
    b.appendMatrix = function(a) {
        return this.append(a.a, a.b, a.c, a.d, a.tx, a.ty),
        this.appendProperties(a.alpha, a.shadow, a.compositeOperation),
        this
    }
    ,
    b.prependTransform = function(b, c, d, e, f, g, h, i, j) {
        if (f % 360)
            var k = f * a.DEG_TO_RAD
              , l = Math.cos(k)
              , m = Math.sin(k);
        else
            l = 1,
            m = 0;
        return (i || j) && (this.tx -= i,
        this.ty -= j),
        g || h ? (g *= a.DEG_TO_RAD,
        h *= a.DEG_TO_RAD,
        this.prepend(l * d, m * d, -m * e, l * e, 0, 0),
        this.prepend(Math.cos(h), Math.sin(h), -Math.sin(g), Math.cos(g), b, c)) : this.prepend(l * d, m * d, -m * e, l * e, b, c),
        this
    }
    ,
    b.appendTransform = function(b, c, d, e, f, g, h, i, j) {
        if (f % 360)
            var k = f * a.DEG_TO_RAD
              , l = Math.cos(k)
              , m = Math.sin(k);
        else
            l = 1,
            m = 0;
        return g || h ? (g *= a.DEG_TO_RAD,
        h *= a.DEG_TO_RAD,
        this.append(Math.cos(h), Math.sin(h), -Math.sin(g), Math.cos(g), b, c),
        this.append(l * d, m * d, -m * e, l * e, 0, 0)) : this.append(l * d, m * d, -m * e, l * e, b, c),
        (i || j) && (this.tx -= i * this.a + j * this.c,
        this.ty -= i * this.b + j * this.d),
        this
    }
    ,
    b.rotate = function(a) {
        var b = Math.cos(a)
          , c = Math.sin(a)
          , d = this.a
          , e = this.c
          , f = this.tx;
        return this.a = d * b - this.b * c,
        this.b = d * c + this.b * b,
        this.c = e * b - this.d * c,
        this.d = e * c + this.d * b,
        this.tx = f * b - this.ty * c,
        this.ty = f * c + this.ty * b,
        this
    }
    ,
    b.skew = function(b, c) {
        return b *= a.DEG_TO_RAD,
        c *= a.DEG_TO_RAD,
        this.append(Math.cos(c), Math.sin(c), -Math.sin(b), Math.cos(b), 0, 0),
        this
    }
    ,
    b.scale = function(a, b) {
        return this.a *= a,
        this.d *= b,
        this.c *= a,
        this.b *= b,
        this.tx *= a,
        this.ty *= b,
        this
    }
    ,
    b.translate = function(a, b) {
        return this.tx += a,
        this.ty += b,
        this
    }
    ,
    b.identity = function() {
        return this.alpha = this.a = this.d = 1,
        this.b = this.c = this.tx = this.ty = 0,
        this.shadow = this.compositeOperation = null,
        this
    }
    ,
    b.invert = function() {
        var a = this.a
          , b = this.b
          , c = this.c
          , d = this.d
          , e = this.tx
          , f = a * d - b * c;
        return this.a = d / f,
        this.b = -b / f,
        this.c = -c / f,
        this.d = a / f,
        this.tx = (c * this.ty - d * e) / f,
        this.ty = -(a * this.ty - b * e) / f,
        this
    }
    ,
    b.isIdentity = function() {
        return 0 == this.tx && 0 == this.ty && 1 == this.a && 0 == this.b && 0 == this.c && 1 == this.d
    }
    ,
    b.decompose = function(b) {
        null == b && (b = {}),
        b.x = this.tx,
        b.y = this.ty,
        b.scaleX = Math.sqrt(this.a * this.a + this.b * this.b),
        b.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
        var c = Math.atan2(-this.c, this.d)
          , d = Math.atan2(this.b, this.a);
        return c == d ? (b.rotation = d / a.DEG_TO_RAD,
        this.a < 0 && this.d >= 0 && (b.rotation += b.rotation <= 0 ? 180 : -180),
        b.skewX = b.skewY = 0) : (b.skewX = c / a.DEG_TO_RAD,
        b.skewY = d / a.DEG_TO_RAD),
        b
    }
    ,
    b.reinitialize = function(a, b, c, d, e, f, g, h, i) {
        return this.initialize(a, b, c, d, e, f),
        this.alpha = g || 1,
        this.shadow = h,
        this.compositeOperation = i,
        this
    }
    ,
    b.appendProperties = function(a, b, c) {
        return this.alpha *= a,
        this.shadow = b || this.shadow,
        this.compositeOperation = c || this.compositeOperation,
        this
    }
    ,
    b.prependProperties = function(a, b, c) {
        return this.alpha *= a,
        this.shadow = this.shadow || b,
        this.compositeOperation = this.compositeOperation || c,
        this
    }
    ,
    b.clone = function() {
        var b = new a(this.a,this.b,this.c,this.d,this.tx,this.ty);
        return b.shadow = this.shadow,
        b.alpha = this.alpha,
        b.compositeOperation = this.compositeOperation,
        b
    }
    ,
    b.toString = function() {
        return "[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]"
    }
    ,
    a.identity = new a(1,0,0,1,0,0),
    createjs.Matrix2D = a
}(),
this.createjs = this.createjs || {},
function() {
    var a = function(a, b) {
        this.initialize(a, b)
    }
      , b = a.prototype;
    b.x = 0,
    b.y = 0,
    b.initialize = function(a, b) {
        this.x = null == a ? 0 : a,
        this.y = null == b ? 0 : b
    }
    ,
    b.clone = function() {
        return new a(this.x,this.y)
    }
    ,
    b.toString = function() {
        return "[Point (x=" + this.x + " y=" + this.y + ")]"
    }
    ,
    createjs.Point = a
}(),
this.createjs = this.createjs || {},
function() {
    var a = function(a, b, c, d) {
        this.initialize(a, b, c, d)
    }
      , b = a.prototype;
    b.x = 0,
    b.y = 0,
    b.width = 0,
    b.height = 0,
    b.initialize = function(a, b, c, d) {
        this.x = null == a ? 0 : a,
        this.y = null == b ? 0 : b,
        this.width = null == c ? 0 : c,
        this.height = null == d ? 0 : d
    }
    ,
    b.clone = function() {
        return new a(this.x,this.y,this.width,this.height)
    }
    ,
    b.toString = function() {
        return "[Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")]"
    }
    ,
    createjs.Rectangle = a
}(),
this.createjs = this.createjs || {},
function() {
    var a = function(a, b, c, d, e, f, g) {
        this.initialize(a, b, c, d, e, f, g)
    }
      , b = a.prototype;
    b.target = null,
    b.overLabel = null,
    b.outLabel = null,
    b.downLabel = null,
    b.play = !1,
    b._isPressed = !1,
    b._isOver = !1,
    b.initialize = function(a, b, c, d, e, f, g) {
        a.addEventListener && (this.target = a,
        a.cursor = "pointer",
        this.overLabel = null == c ? "over" : c,
        this.outLabel = null == b ? "out" : b,
        this.downLabel = null == d ? "down" : d,
        this.play = e,
        this.setEnabled(!0),
        this.handleEvent({}),
        f && (g && (f.actionsEnabled = !1,
        f.gotoAndStop && f.gotoAndStop(g)),
        a.hitArea = f))
    }
    ,
    b.setEnabled = function(a) {
        var b = this.target;
        a ? (b.addEventListener("mouseover", this),
        b.addEventListener("mouseout", this),
        b.addEventListener("mousedown", this)) : (b.removeEventListener("mouseover", this),
        b.removeEventListener("mouseout", this),
        b.removeEventListener("mousedown", this))
    }
    ,
    b.toString = function() {
        return "[ButtonHelper]"
    }
    ,
    b.handleEvent = function(a) {
        var b, c = this.target, d = a.type;
        "mousedown" == d ? (a.addEventListener("mouseup", this),
        this._isPressed = !0,
        b = this.downLabel) : "mouseup" == d ? (this._isPressed = !1,
        b = this._isOver ? this.overLabel : this.outLabel) : "mouseover" == d ? (this._isOver = !0,
        b = this._isPressed ? this.downLabel : this.overLabel) : (this._isOver = !1,
        b = this._isPressed ? this.overLabel : this.outLabel),
        this.play ? c.gotoAndPlay && c.gotoAndPlay(b) : c.gotoAndStop && c.gotoAndStop(b)
    }
    ,
    createjs.ButtonHelper = a
}(),
this.createjs = this.createjs || {},
function() {
    var a = function(a, b, c, d) {
        this.initialize(a, b, c, d)
    }
      , b = a.prototype;
    a.identity = null,
    b.color = null,
    b.offsetX = 0,
    b.offsetY = 0,
    b.blur = 0,
    b.initialize = function(a, b, c, d) {
        this.color = a,
        this.offsetX = b,
        this.offsetY = c,
        this.blur = d
    }
    ,
    b.toString = function() {
        return "[Shadow]"
    }
    ,
    b.clone = function() {
        return new a(this.color,this.offsetX,this.offsetY,this.blur)
    }
    ,
    a.identity = new a("transparent",0,0,0),
    createjs.Shadow = a
}(),
this.createjs = this.createjs || {},
function() {
    var a = function(a) {
        this.initialize(a)
    }
      , b = a.prototype;
    b.complete = !0,
    b.onComplete = null,
    b.addEventListener = null,
    b.removeEventListener = null,
    b.removeAllEventListeners = null,
    b.dispatchEvent = null,
    b.hasEventListener = null,
    b._listeners = null,
    createjs.EventDispatcher.initialize(b),
    b._animations = null,
    b._frames = null,
    b._images = null,
    b._data = null,
    b._loadCount = 0,
    b._frameHeight = 0,
    b._frameWidth = 0,
    b._numFrames = 0,
    b._regX = 0,
    b._regY = 0,
    b.initialize = function(a) {
        var b, c, d, e;
        if (null != a) {
            if (a.images && (c = a.images.length) > 0)
                for (e = this._images = [],
                b = 0; c > b; b++) {
                    var f = a.images[b];
                    if ("string" == typeof f) {
                        var g = f;
                        f = new Image,
                        f.src = g
                    }
                    e.push(f),
                    f.getContext || f.complete || (this._loadCount++,
                    this.complete = !1,
                    function(a) {
                        f.onload = function() {
                            a._handleImageLoad()
                        }
                    }(this))
                }
            if (null == a.frames)
                ;
            else if (a.frames instanceof Array)
                for (this._frames = [],
                e = a.frames,
                b = 0,
                c = e.length; c > b; b++) {
                    var h = e[b];
                    this._frames.push({
                        image: this._images[h[4] ? h[4] : 0],
                        rect: new createjs.Rectangle(h[0],h[1],h[2],h[3]),
                        regX: h[5] || 0,
                        regY: h[6] || 0
                    })
                }
            else
                d = a.frames,
                this._frameWidth = d.width,
                this._frameHeight = d.height,
                this._regX = d.regX || 0,
                this._regY = d.regY || 0,
                this._numFrames = d.count,
                0 == this._loadCount && this._calculateFrames();
            if (null != (d = a.animations)) {
                this._animations = [],
                this._data = {};
                var i;
                for (i in d) {
                    var j = {
                        name: i
                    }
                      , k = d[i];
                    if ("number" == typeof k)
                        e = j.frames = [k];
                    else if (k instanceof Array)
                        if (1 == k.length)
                            j.frames = [k[0]];
                        else
                            for (j.frequency = k[3],
                            j.next = k[2],
                            e = j.frames = [],
                            b = k[0]; b <= k[1]; b++)
                                e.push(b);
                    else {
                        j.frequency = k.frequency,
                        j.next = k.next;
                        var l = k.frames;
                        e = j.frames = "number" == typeof l ? [l] : l.slice(0)
                    }
                    j.next = e.length < 2 || 0 == j.next ? null : null == j.next || 1 == j.next ? i : j.next,
                    j.frequency || (j.frequency = 1),
                    this._animations.push(i),
                    this._data[i] = j
                }
            }
        }
    }
    ,
    b.getNumFrames = function(a) {
        if (null == a)
            return this._frames ? this._frames.length : this._numFrames;
        var b = this._data[a];
        return null == b ? 0 : b.frames.length
    }
    ,
    b.getAnimations = function() {
        return this._animations.slice(0)
    }
    ,
    b.getAnimation = function(a) {
        return this._data[a]
    }
    ,
    b.getFrame = function(a) {
        var b;
        return this.complete && this._frames && (b = this._frames[a]) ? b : null
    }
    ,
    b.getFrameBounds = function(a) {
        var b = this.getFrame(a);
        return b ? new createjs.Rectangle(-b.regX,-b.regY,b.rect.width,b.rect.height) : null
    }
    ,
    b.toString = function() {
        return "[SpriteSheet]"
    }
    ,
    b.clone = function() {
        var b = new a;
        return b.complete = this.complete,
        b._animations = this._animations,
        b._frames = this._frames,
        b._images = this._images,
        b._data = this._data,
        b._frameHeight = this._frameHeight,
        b._frameWidth = this._frameWidth,
        b._numFrames = this._numFrames,
        b._loadCount = this._loadCount,
        b
    }
    ,
    b._handleImageLoad = function() {
        0 == --this._loadCount && (this._calculateFrames(),
        this.complete = !0,
        this.onComplete && this.onComplete(),
        this.dispatchEvent("complete"))
    }
    ,
    b._calculateFrames = function() {
        if (!this._frames && 0 != this._frameWidth) {
            this._frames = [];
            for (var a = 0, b = this._frameWidth, c = this._frameHeight, d = 0, e = this._images; d < e.length; d++) {
                for (var f = e[d], g = (f.width + 1) / b | 0, h = (f.height + 1) / c | 0, i = this._numFrames > 0 ? Math.min(this._numFrames - a, g * h) : g * h, j = 0; i > j; j++)
                    this._frames.push({
                        image: f,
                        rect: new createjs.Rectangle(j % g * b,(j / g | 0) * c,b,c),
                        regX: this._regX,
                        regY: this._regY
                    });
                a += i
            }
            this._numFrames = a
        }
    }
    ,
    createjs.SpriteSheet = a
}(),
this.createjs = this.createjs || {},
function() {
    function a(a, b, c) {
        this.f = a,
        this.params = b,
        this.path = null == c ? !0 : c
    }
    a.prototype.exec = function(a) {
        this.f.apply(a, this.params)
    }
    ;
    var b = function() {
        this.initialize()
    }
      , c = b.prototype;
    b.getRGB = function(a, b, c, d) {
        return null != a && null == c && (d = b,
        c = 255 & a,
        b = a >> 8 & 255,
        a = a >> 16 & 255),
        null == d ? "rgb(" + a + "," + b + "," + c + ")" : "rgba(" + a + "," + b + "," + c + "," + d + ")"
    }
    ,
    b.getHSL = function(a, b, c, d) {
        return null == d ? "hsl(" + a % 360 + "," + b + "%," + c + "%)" : "hsla(" + a % 360 + "," + b + "%," + c + "%," + d + ")"
    }
    ,
    b.BASE_64 = {
        A: 0,
        B: 1,
        C: 2,
        D: 3,
        E: 4,
        F: 5,
        G: 6,
        H: 7,
        I: 8,
        J: 9,
        K: 10,
        L: 11,
        M: 12,
        N: 13,
        O: 14,
        P: 15,
        Q: 16,
        R: 17,
        S: 18,
        T: 19,
        U: 20,
        V: 21,
        W: 22,
        X: 23,
        Y: 24,
        Z: 25,
        a: 26,
        b: 27,
        c: 28,
        d: 29,
        e: 30,
        f: 31,
        g: 32,
        h: 33,
        i: 34,
        j: 35,
        k: 36,
        l: 37,
        m: 38,
        n: 39,
        o: 40,
        p: 41,
        q: 42,
        r: 43,
        s: 44,
        t: 45,
        u: 46,
        v: 47,
        w: 48,
        x: 49,
        y: 50,
        z: 51,
        0: 52,
        1: 53,
        2: 54,
        3: 55,
        4: 56,
        5: 57,
        6: 58,
        7: 59,
        8: 60,
        9: 61,
        "+": 62,
        "/": 63
    },
    b.STROKE_CAPS_MAP = ["butt", "round", "square"],
    b.STROKE_JOINTS_MAP = ["miter", "round", "bevel"],
    b._ctx = (createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")).getContext("2d"),
    b.beginCmd = new a(b._ctx.beginPath,[],!1),
    b.fillCmd = new a(b._ctx.fill,[],!1),
    b.strokeCmd = new a(b._ctx.stroke,[],!1),
    c._strokeInstructions = null,
    c._strokeStyleInstructions = null,
    c._ignoreScaleStroke = !1,
    c._fillInstructions = null,
    c._instructions = null,
    c._oldInstructions = null,
    c._activeInstructions = null,
    c._active = !1,
    c._dirty = !1,
    c.initialize = function() {
        this.clear(),
        this._ctx = b._ctx
    }
    ,
    c.isEmpty = function() {
        return !(this._instructions.length || this._oldInstructions.length || this._activeInstructions.length)
    }
    ,
    c.draw = function(a) {
        this._dirty && this._updateInstructions();
        for (var b = this._instructions, c = 0, d = b.length; d > c; c++)
            b[c].exec(a)
    }
    ,
    c.drawAsPath = function(a) {
        this._dirty && this._updateInstructions();
        for (var b, c = this._instructions, d = 0, e = c.length; e > d; d++)
            ((b = c[d]).path || 0 == d) && b.exec(a)
    }
    ,
    c.moveTo = function(b, c) {
        return this._activeInstructions.push(new a(this._ctx.moveTo,[b, c])),
        this
    }
    ,
    c.lineTo = function(b, c) {
        return this._dirty = this._active = !0,
        this._activeInstructions.push(new a(this._ctx.lineTo,[b, c])),
        this
    }
    ,
    c.arcTo = function(b, c, d, e, f) {
        return this._dirty = this._active = !0,
        this._activeInstructions.push(new a(this._ctx.arcTo,[b, c, d, e, f])),
        this
    }
    ,
    c.arc = function(b, c, d, e, f, g) {
        return this._dirty = this._active = !0,
        null == g && (g = !1),
        this._activeInstructions.push(new a(this._ctx.arc,[b, c, d, e, f, g])),
        this
    }
    ,
    c.quadraticCurveTo = function(b, c, d, e) {
        return this._dirty = this._active = !0,
        this._activeInstructions.push(new a(this._ctx.quadraticCurveTo,[b, c, d, e])),
        this
    }
    ,
    c.bezierCurveTo = function(b, c, d, e, f, g) {
        return this._dirty = this._active = !0,
        this._activeInstructions.push(new a(this._ctx.bezierCurveTo,[b, c, d, e, f, g])),
        this
    }
    ,
    c.rect = function(b, c, d, e) {
        return this._dirty = this._active = !0,
        this._activeInstructions.push(new a(this._ctx.rect,[b, c, d, e])),
        this
    }
    ,
    c.closePath = function() {
        return this._active && (this._dirty = !0,
        this._activeInstructions.push(new a(this._ctx.closePath,[]))),
        this
    }
    ,
    c.clear = function() {
        return this._instructions = [],
        this._oldInstructions = [],
        this._activeInstructions = [],
        this._strokeStyleInstructions = this._strokeInstructions = this._fillInstructions = null,
        this._active = this._dirty = !1,
        this
    }
    ,
    c.beginFill = function(c) {
        return this._active && this._newPath(),
        this._fillInstructions = c ? [new a(this._setProp,["fillStyle", c],!1), b.fillCmd] : null,
        this
    }
    ,
    c.beginLinearGradientFill = function(c, d, e, f, g, h) {
        this._active && this._newPath();
        for (var i = this._ctx.createLinearGradient(e, f, g, h), j = 0, k = c.length; k > j; j++)
            i.addColorStop(d[j], c[j]);
        return this._fillInstructions = [new a(this._setProp,["fillStyle", i],!1), b.fillCmd],
        this
    }
    ,
    c.beginRadialGradientFill = function(c, d, e, f, g, h, i, j) {
        this._active && this._newPath();
        for (var k = this._ctx.createRadialGradient(e, f, g, h, i, j), l = 0, m = c.length; m > l; l++)
            k.addColorStop(d[l], c[l]);
        return this._fillInstructions = [new a(this._setProp,["fillStyle", k],!1), b.fillCmd],
        this
    }
    ,
    c.beginBitmapFill = function(c, d, e) {
        this._active && this._newPath(),
        d = d || "";
        var f, g = this._ctx.createPattern(c, d), h = new a(this._setProp,["fillStyle", g],!1);
        return f = e ? [h, new a(this._ctx.save,[],!1), new a(this._ctx.transform,[e.a, e.b, e.c, e.d, e.tx, e.ty],!1), b.fillCmd, new a(this._ctx.restore,[],!1)] : [h, b.fillCmd],
        this._fillInstructions = f,
        this
    }
    ,
    c.endFill = function() {
        return this.beginFill()
    }
    ,
    c.setStrokeStyle = function(c, d, e, f, g) {
        return this._active && this._newPath(),
        this._strokeStyleInstructions = [new a(this._setProp,["lineWidth", null == c ? "1" : c],!1), new a(this._setProp,["lineCap", null == d ? "butt" : isNaN(d) ? d : b.STROKE_CAPS_MAP[d]],!1), new a(this._setProp,["lineJoin", null == e ? "miter" : isNaN(e) ? e : b.STROKE_JOINTS_MAP[e]],!1), new a(this._setProp,["miterLimit", null == f ? "10" : f],!1)],
        this._ignoreScaleStroke = g,
        this
    }
    ,
    c.beginStroke = function(b) {
        return this._active && this._newPath(),
        this._strokeInstructions = b ? [new a(this._setProp,["strokeStyle", b],!1)] : null,
        this
    }
    ,
    c.beginLinearGradientStroke = function(b, c, d, e, f, g) {
        this._active && this._newPath();
        for (var h = this._ctx.createLinearGradient(d, e, f, g), i = 0, j = b.length; j > i; i++)
            h.addColorStop(c[i], b[i]);
        return this._strokeInstructions = [new a(this._setProp,["strokeStyle", h],!1)],
        this
    }
    ,
    c.beginRadialGradientStroke = function(b, c, d, e, f, g, h, i) {
        this._active && this._newPath();
        for (var j = this._ctx.createRadialGradient(d, e, f, g, h, i), k = 0, l = b.length; l > k; k++)
            j.addColorStop(c[k], b[k]);
        return this._strokeInstructions = [new a(this._setProp,["strokeStyle", j],!1)],
        this
    }
    ,
    c.beginBitmapStroke = function(b, c) {
        this._active && this._newPath(),
        c = c || "";
        var d = this._ctx.createPattern(b, c);
        return this._strokeInstructions = [new a(this._setProp,["strokeStyle", d],!1)],
        this
    }
    ,
    c.endStroke = function() {
        return this.beginStroke(),
        this
    }
    ,
    c.curveTo = c.quadraticCurveTo,
    c.drawRect = c.rect,
    c.drawRoundRect = function(a, b, c, d, e) {
        return this.drawRoundRectComplex(a, b, c, d, e, e, e, e),
        this
    }
    ,
    c.drawRoundRectComplex = function(b, c, d, e, f, g, h, i) {
        var j = (e > d ? d : e) / 2
          , k = 0
          , l = 0
          , m = 0
          , n = 0;
        0 > f && (f *= k = -1),
        f > j && (f = j),
        0 > g && (g *= l = -1),
        g > j && (g = j),
        0 > h && (h *= m = -1),
        h > j && (h = j),
        0 > i && (i *= n = -1),
        i > j && (i = j),
        this._dirty = this._active = !0;
        var o = this._ctx.arcTo
          , p = this._ctx.lineTo;
        return this._activeInstructions.push(new a(this._ctx.moveTo,[b + d - g, c]), new a(o,[b + d + g * l, c - g * l, b + d, c + g, g]), new a(p,[b + d, c + e - h]), new a(o,[b + d + h * m, c + e + h * m, b + d - h, c + e, h]), new a(p,[b + i, c + e]), new a(o,[b - i * n, c + e + i * n, b, c + e - i, i]), new a(p,[b, c + f]), new a(o,[b - f * k, c - f * k, b + f, c, f]), new a(this._ctx.closePath)),
        this
    }
    ,
    c.drawCircle = function(a, b, c) {
        return this.arc(a, b, c, 0, 2 * Math.PI),
        this
    }
    ,
    c.drawEllipse = function(b, c, d, e) {
        this._dirty = this._active = !0;
        var f = .5522848
          , g = d / 2 * f
          , h = e / 2 * f
          , i = b + d
          , j = c + e
          , k = b + d / 2
          , l = c + e / 2;
        return this._activeInstructions.push(new a(this._ctx.moveTo,[b, l]), new a(this._ctx.bezierCurveTo,[b, l - h, k - g, c, k, c]), new a(this._ctx.bezierCurveTo,[k + g, c, i, l - h, i, l]), new a(this._ctx.bezierCurveTo,[i, l + h, k + g, j, k, j]), new a(this._ctx.bezierCurveTo,[k - g, j, b, l + h, b, l])),
        this
    }
    ,
    c.drawPolyStar = function(b, c, d, e, f, g) {
        this._dirty = this._active = !0,
        null == f && (f = 0),
        f = 1 - f,
        null == g ? g = 0 : g /= 180 / Math.PI;
        var h = Math.PI / e;
        this._activeInstructions.push(new a(this._ctx.moveTo,[b + Math.cos(g) * d, c + Math.sin(g) * d]));
        for (var i = 0; e > i; i++)
            g += h,
            1 != f && this._activeInstructions.push(new a(this._ctx.lineTo,[b + Math.cos(g) * d * f, c + Math.sin(g) * d * f])),
            g += h,
            this._activeInstructions.push(new a(this._ctx.lineTo,[b + Math.cos(g) * d, c + Math.sin(g) * d]));
        return this
    }
    ,
    c.decodePath = function(a) {
        for (var c = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath], d = [2, 2, 4, 6, 0], e = 0, f = a.length, g = [], h = 0, i = 0, j = b.BASE_64; f > e; ) {
            var k = a.charAt(e)
              , l = j[k]
              , m = l >> 3
              , n = c[m];
            if (!n || 3 & l)
                throw "bad path data (@" + e + "): " + k;
            var o = d[m];
            m || (h = i = 0),
            g.length = 0,
            e++;
            for (var p = (l >> 2 & 1) + 2, q = 0; o > q; q++) {
                var r = j[a.charAt(e)]
                  , s = r >> 5 ? -1 : 1;
                r = (31 & r) << 6 | j[a.charAt(e + 1)],
                3 == p && (r = r << 6 | j[a.charAt(e + 2)]),
                r = s * r / 10,
                q % 2 ? h = r += h : i = r += i,
                g[q] = r,
                e += p
            }
            n.apply(this, g)
        }
        return this
    }
    ,
    c.clone = function() {
        var a = new b;
        return a._instructions = this._instructions.slice(),
        a._activeInstructions = this._activeInstructions.slice(),
        a._oldInstructions = this._oldInstructions.slice(),
        this._fillInstructions && (a._fillInstructions = this._fillInstructions.slice()),
        this._strokeInstructions && (a._strokeInstructions = this._strokeInstructions.slice()),
        this._strokeStyleInstructions && (a._strokeStyleInstructions = this._strokeStyleInstructions.slice()),
        a._active = this._active,
        a._dirty = this._dirty,
        a
    }
    ,
    c.toString = function() {
        return "[Graphics]"
    }
    ,
    c.mt = c.moveTo,
    c.lt = c.lineTo,
    c.at = c.arcTo,
    c.bt = c.bezierCurveTo,
    c.qt = c.quadraticCurveTo,
    c.a = c.arc,
    c.r = c.rect,
    c.cp = c.closePath,
    c.c = c.clear,
    c.f = c.beginFill,
    c.lf = c.beginLinearGradientFill,
    c.rf = c.beginRadialGradientFill,
    c.bf = c.beginBitmapFill,
    c.ef = c.endFill,
    c.ss = c.setStrokeStyle,
    c.s = c.beginStroke,
    c.ls = c.beginLinearGradientStroke,
    c.rs = c.beginRadialGradientStroke,
    c.bs = c.beginBitmapStroke,
    c.es = c.endStroke,
    c.dr = c.drawRect,
    c.rr = c.drawRoundRect,
    c.rc = c.drawRoundRectComplex,
    c.dc = c.drawCircle,
    c.de = c.drawEllipse,
    c.dp = c.drawPolyStar,
    c.p = c.decodePath,
    c._updateInstructions = function() {
        this._instructions = this._oldInstructions.slice(),
        this._instructions.push(b.beginCmd),
        this._instructions.push.apply(this._instructions, this._activeInstructions),
        this._fillInstructions && this._instructions.push.apply(this._instructions, this._fillInstructions),
        this._strokeInstructions && (this._strokeStyleInstructions && this._instructions.push.apply(this._instructions, this._strokeStyleInstructions),
        this._instructions.push.apply(this._instructions, this._strokeInstructions),
        this._ignoreScaleStroke ? this._instructions.push(new a(this._ctx.save,[],!1), new a(this._ctx.setTransform,[1, 0, 0, 1, 0, 0],!1), b.strokeCmd, new a(this._ctx.restore,[],!1)) : this._instructions.push(b.strokeCmd))
    }
    ,
    c._newPath = function() {
        this._dirty && this._updateInstructions(),
        this._oldInstructions = this._instructions,
        this._activeInstructions = [],
        this._active = this._dirty = !1
    }
    ,
    c._setProp = function(a, b) {
        this[a] = b
    }
    ,
    createjs.Graphics = b
}(),
this.createjs = this.createjs || {},
function() {
    var a = function() {
        this.initialize()
    }
      , b = a.prototype;
    a.suppressCrossDomainErrors = !1,
    a._hitTestCanvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"),
    a._hitTestCanvas.width = a._hitTestCanvas.height = 1,
    a._hitTestContext = a._hitTestCanvas.getContext("2d"),
    a._nextCacheID = 1,
    b.alpha = 1,
    b.cacheCanvas = null,
    b.id = -1,
    b.mouseEnabled = !0,
    b.name = null,
    b.parent = null,
    b.regX = 0,
    b.regY = 0,
    b.rotation = 0,
    b.scaleX = 1,
    b.scaleY = 1,
    b.skewX = 0,
    b.skewY = 0,
    b.shadow = null,
    b.visible = !0,
    b.x = 0,
    b.y = 0,
    b.compositeOperation = null,
    b.snapToPixel = !1,
    b.onPress = null,
    b.onClick = null,
    b.onDoubleClick = null,
    b.onMouseOver = null,
    b.onMouseOut = null,
    b.onTick = null,
    b.filters = null,
    b.cacheID = 0,
    b.mask = null,
    b.hitArea = null,
    b.cursor = null,
    b.addEventListener = null,
    b.removeEventListener = null,
    b.removeAllEventListeners = null,
    b.dispatchEvent = null,
    b.hasEventListener = null,
    b._listeners = null,
    createjs.EventDispatcher.initialize(b),
    b._cacheOffsetX = 0,
    b._cacheOffsetY = 0,
    b._cacheScale = 1,
    b._cacheDataURLID = 0,
    b._cacheDataURL = null,
    b._matrix = null,
    b.initialize = function() {
        this.id = createjs.UID.get(),
        this._matrix = new createjs.Matrix2D
    }
    ,
    b.isVisible = function() {
        return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY)
    }
    ,
    b.draw = function(a, b) {
        var c = this.cacheCanvas;
        if (b || !c)
            return !1;
        var d = this._cacheScale;
        return a.drawImage(c, this._cacheOffsetX, this._cacheOffsetY, c.width / d, c.height / d),
        !0
    }
    ,
    b.updateContext = function(a) {
        var b, c = this.mask, d = this;
        c && c.graphics && !c.graphics.isEmpty() && (b = c.getMatrix(c._matrix),
        a.transform(b.a, b.b, b.c, b.d, b.tx, b.ty),
        c.graphics.drawAsPath(a),
        a.clip(),
        b.invert(),
        a.transform(b.a, b.b, b.c, b.d, b.tx, b.ty)),
        b = d._matrix.identity().appendTransform(d.x, d.y, d.scaleX, d.scaleY, d.rotation, d.skewX, d.skewY, d.regX, d.regY),
        createjs.Stage._snapToPixelEnabled && d.snapToPixel ? a.transform(b.a, b.b, b.c, b.d, b.tx + .5 | 0, b.ty + .5 | 0) : a.transform(b.a, b.b, b.c, b.d, b.tx, b.ty),
        a.globalAlpha *= d.alpha,
        d.compositeOperation && (a.globalCompositeOperation = d.compositeOperation),
        d.shadow && this._applyShadow(a, d.shadow)
    }
    ,
    b.cache = function(a, b, c, d, e) {
        e = e || 1,
        this.cacheCanvas || (this.cacheCanvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")),
        this.cacheCanvas.width = Math.ceil(c * e),
        this.cacheCanvas.height = Math.ceil(d * e),
        this._cacheOffsetX = a,
        this._cacheOffsetY = b,
        this._cacheScale = e || 1,
        this.updateCache()
    }
    ,
    b.updateCache = function(b) {
        var c = this.cacheCanvas
          , d = this._cacheScale
          , e = this._cacheOffsetX * d
          , f = this._cacheOffsetY * d;
        if (!c)
            throw "cache() must be called before updateCache()";
        var g = c.getContext("2d");
        g.save(),
        b || g.clearRect(0, 0, c.width + 1, c.height + 1),
        g.globalCompositeOperation = b,
        g.setTransform(d, 0, 0, d, -e, -f),
        this.draw(g, !0),
        this._applyFilters(),
        g.restore(),
        this.cacheID = a._nextCacheID++
    }
    ,
    b.uncache = function() {
        this._cacheDataURL = this.cacheCanvas = null,
        this.cacheID = this._cacheOffsetX = this._cacheOffsetY = 0,
        this._cacheScale = 1
    }
    ,
    b.getCacheDataURL = function() {
        return this.cacheCanvas ? (this.cacheID != this._cacheDataURLID && (this._cacheDataURL = this.cacheCanvas.toDataURL()),
        this._cacheDataURL) : null
    }
    ,
    b.getStage = function() {
        for (var a = this; a.parent; )
            a = a.parent;
        return a instanceof createjs.Stage ? a : null
    }
    ,
    b.localToGlobal = function(a, b) {
        var c = this.getConcatenatedMatrix(this._matrix);
        return null == c ? null : (c.append(1, 0, 0, 1, a, b),
        new createjs.Point(c.tx,c.ty))
    }
    ,
    b.globalToLocal = function(a, b) {
        var c = this.getConcatenatedMatrix(this._matrix);
        return null == c ? null : (c.invert(),
        c.append(1, 0, 0, 1, a, b),
        new createjs.Point(c.tx,c.ty))
    }
    ,
    b.localToLocal = function(a, b, c) {
        var d = this.localToGlobal(a, b);
        return c.globalToLocal(d.x, d.y)
    }
    ,
    b.setTransform = function(a, b, c, d, e, f, g, h, i) {
        return this.x = a || 0,
        this.y = b || 0,
        this.scaleX = null == c ? 1 : c,
        this.scaleY = null == d ? 1 : d,
        this.rotation = e || 0,
        this.skewX = f || 0,
        this.skewY = g || 0,
        this.regX = h || 0,
        this.regY = i || 0,
        this
    }
    ,
    b.getMatrix = function(a) {
        var b = this;
        return (a ? a.identity() : new createjs.Matrix2D).appendTransform(b.x, b.y, b.scaleX, b.scaleY, b.rotation, b.skewX, b.skewY, b.regX, b.regY).appendProperties(b.alpha, b.shadow, b.compositeOperation)
    }
    ,
    b.getConcatenatedMatrix = function(a) {
        a ? a.identity() : a = new createjs.Matrix2D;
        for (var b = this; null != b; )
            a.prependTransform(b.x, b.y, b.scaleX, b.scaleY, b.rotation, b.skewX, b.skewY, b.regX, b.regY).prependProperties(b.alpha, b.shadow, b.compositeOperation),
            b = b.parent;
        return a
    }
    ,
    b.hitTest = function(b, c) {
        var d = a._hitTestContext;
        d.setTransform(1, 0, 0, 1, -b, -c),
        this.draw(d);
        var e = this._testHit(d);
        return d.setTransform(1, 0, 0, 1, 0, 0),
        d.clearRect(0, 0, 2, 2),
        e
    }
    ,
    b.set = function(a) {
        for (var b in a)
            this[b] = a[b];
        return this
    }
    ,
    b.clone = function() {
        var b = new a;
        return this.cloneProps(b),
        b
    }
    ,
    b.toString = function() {
        return "[DisplayObject (name=" + this.name + ")]"
    }
    ,
    b.cloneProps = function(a) {
        a.alpha = this.alpha,
        a.name = this.name,
        a.regX = this.regX,
        a.regY = this.regY,
        a.rotation = this.rotation,
        a.scaleX = this.scaleX,
        a.scaleY = this.scaleY,
        a.shadow = this.shadow,
        a.skewX = this.skewX,
        a.skewY = this.skewY,
        a.visible = this.visible,
        a.x = this.x,
        a.y = this.y,
        a.mouseEnabled = this.mouseEnabled,
        a.compositeOperation = this.compositeOperation,
        this.cacheCanvas && (a.cacheCanvas = this.cacheCanvas.cloneNode(!0),
        a.cacheCanvas.getContext("2d").putImageData(this.cacheCanvas.getContext("2d").getImageData(0, 0, this.cacheCanvas.width, this.cacheCanvas.height), 0, 0))
    }
    ,
    b._applyShadow = function(a, b) {
        b = b || Shadow.identity,
        a.shadowColor = b.color,
        a.shadowOffsetX = b.offsetX,
        a.shadowOffsetY = b.offsetY,
        a.shadowBlur = b.blur
    }
    ,
    b._tick = function(a) {
        this.onTick && this.onTick.apply(this, a);
        var b = this._listeners;
        b && b.tick && this.dispatchEvent({
            type: "tick",
            params: a
        })
    }
    ,
    b._testHit = function(b) {
        try {
            var c = b.getImageData(0, 0, 1, 1).data[3] > 1
        } catch (d) {
            if (!a.suppressCrossDomainErrors)
                throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."
        }
        return c
    }
    ,
    b._applyFilters = function() {
        if (this.filters && 0 != this.filters.length && this.cacheCanvas)
            for (var a = this.filters.length, b = this.cacheCanvas.getContext("2d"), c = this.cacheCanvas.width, d = this.cacheCanvas.height, e = 0; a > e; e++)
                this.filters[e].applyFilter(b, 0, 0, c, d)
    }
    ,
    b._hasMouseHandler = function(a) {
        var b = this._listeners;
        return !!(1 & a && (this.onPress || this.onClick || this.onDoubleClick || b && (this.hasEventListener("mousedown") || this.hasEventListener("click") || this.hasEventListener("dblclick"))) || 2 & a && (this.onMouseOver || this.onMouseOut || this.cursor || b && (this.hasEventListener("mouseover") || this.hasEventListener("mouseout"))))
    }
    ,
    createjs.DisplayObject = a
}(),
this.createjs = this.createjs || {},
function() {
    var a = function() {
        this.initialize()
    }
      , b = a.prototype = new createjs.DisplayObject;
    b.children = null,
    b.DisplayObject_initialize = b.initialize,
    b.initialize = function() {
        this.DisplayObject_initialize(),
        this.children = []
    }
    ,
    b.isVisible = function() {
        var a = this.cacheCanvas || this.children.length;
        return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a)
    }
    ,
    b.DisplayObject_draw = b.draw,
    b.draw = function(a, b) {
        if (this.DisplayObject_draw(a, b))
            return !0;
        for (var c = this.children.slice(0), d = 0, e = c.length; e > d; d++) {
            var f = c[d];
            f.isVisible() && (a.save(),
            f.updateContext(a),
            f.draw(a),
            a.restore())
        }
        return !0
    }
    ,
    b.addChild = function(a) {
        if (null == a)
            return a;
        var b = arguments.length;
        if (b > 1) {
            for (var c = 0; b > c; c++)
                this.addChild(arguments[c]);
            return arguments[b - 1]
        }
        return a.parent && a.parent.removeChild(a),
        a.parent = this,
        this.children.push(a),
        a
    }
    ,
    b.addChildAt = function(a, b) {
        var c = arguments.length
          , d = arguments[c - 1];
        if (0 > d || d > this.children.length)
            return arguments[c - 2];
        if (c > 2) {
            for (var e = 0; c - 1 > e; e++)
                this.addChildAt(arguments[e], d + e);
            return arguments[c - 2]
        }
        return a.parent && a.parent.removeChild(a),
        a.parent = this,
        this.children.splice(b, 0, a),
        a
    }
    ,
    b.removeChild = function(a) {
        var b = arguments.length;
        if (b > 1) {
            for (var c = !0, d = 0; b > d; d++)
                c = c && this.removeChild(arguments[d]);
            return c
        }
        return this.removeChildAt(this.children.indexOf(a))
    }
    ,
    b.removeChildAt = function(a) {
        var b = arguments.length;
        if (b > 1) {
            for (var c = [], d = 0; b > d; d++)
                c[d] = arguments[d];
            c.sort(function(a, b) {
                return b - a
            });
            for (var e = !0, d = 0; b > d; d++)
                e = e && this.removeChildAt(c[d]);
            return e
        }
        if (0 > a || a > this.children.length - 1)
            return !1;
        var f = this.children[a];
        return f && (f.parent = null),
        this.children.splice(a, 1),
        !0
    }
    ,
    b.removeAllChildren = function() {
        for (var a = this.children; a.length; )
            a.pop().parent = null
    }
    ,
    b.getChildAt = function(a) {
        return this.children[a]
    }
    ,
    b.getChildByName = function(a) {
        for (var b = this.children, c = 0, d = b.length; d > c; c++)
            if (b[c].name == a)
                return b[c];
        return null
    }
    ,
    b.sortChildren = function(a) {
        this.children.sort(a)
    }
    ,
    b.getChildIndex = function(a) {
        return this.children.indexOf(a)
    }
    ,
    b.getNumChildren = function() {
        return this.children.length
    }
    ,
    b.swapChildrenAt = function(a, b) {
        var c = this.children
          , d = c[a]
          , e = c[b];
        d && e && (c[a] = e,
        c[b] = d)
    }
    ,
    b.swapChildren = function(a, b) {
        for (var c, d, e = this.children, f = 0, g = e.length; g > f && (e[f] == a && (c = f),
        e[f] == b && (d = f),
        null == c || null == d); f++)
            ;
        f != g && (e[c] = b,
        e[d] = a)
    }
    ,
    b.setChildIndex = function(a, b) {
        var c = this.children
          , d = c.length;
        if (!(a.parent != this || 0 > b || b >= d)) {
            for (var e = 0; d > e && c[e] != a; e++)
                ;
            e != d && e != b && (c.splice(e, 1),
            e > b && b--,
            c.splice(b, 0, a))
        }
    }
    ,
    b.contains = function(a) {
        for (; a; ) {
            if (a == this)
                return !0;
            a = a.parent
        }
        return !1
    }
    ,
    b.hitTest = function(a, b) {
        return null != this.getObjectUnderPoint(a, b)
    }
    ,
    b.getObjectsUnderPoint = function(a, b) {
        var c = []
          , d = this.localToGlobal(a, b);
        return this._getObjectsUnderPoint(d.x, d.y, c),
        c
    }
    ,
    b.getObjectUnderPoint = function(a, b) {
        var c = this.localToGlobal(a, b);
        return this._getObjectsUnderPoint(c.x, c.y)
    }
    ,
    b.clone = function(b) {
        var c = new a;
        if (this.cloneProps(c),
        b)
            for (var d = c.children = [], e = 0, f = this.children.length; f > e; e++) {
                var g = this.children[e].clone(b);
                g.parent = c,
                d.push(g)
            }
        return c
    }
    ,
    b.toString = function() {
        return "[Container (name=" + this.name + ")]"
    }
    ,
    b.DisplayObject__tick = b._tick,
    b._tick = function(a) {
        for (var b = this.children.length - 1; b >= 0; b--) {
            var c = this.children[b];
            c._tick && c._tick(a)
        }
        this.DisplayObject__tick(a)
    }
    ,
    b._getObjectsUnderPoint = function(b, c, d, e) {
        var f = createjs.DisplayObject._hitTestContext
          , g = this._matrix
          , h = this._hasMouseHandler(e);
        if (!this.hitArea && this.cacheCanvas && h && (this.getConcatenatedMatrix(g),
        f.setTransform(g.a, g.b, g.c, g.d, g.tx - b, g.ty - c),
        f.globalAlpha = g.alpha,
        this.draw(f),
        this._testHit(f)))
            return f.setTransform(1, 0, 0, 1, 0, 0),
            f.clearRect(0, 0, 2, 2),
            this;
        for (var i = this.children.length, j = i - 1; j >= 0; j--) {
            var k = this.children[j]
              , l = k.hitArea;
            if (k.visible && (l || k.isVisible()) && (!e || k.mouseEnabled)) {
                var m = e && k._hasMouseHandler(e);
                if (!(k instanceof a) || l && m) {
                    if (!e || h || m) {
                        if (k.getConcatenatedMatrix(g),
                        l && (g.appendTransform(l.x, l.y, l.scaleX, l.scaleY, l.rotation, l.skewX, l.skewY, l.regX, l.regY),
                        g.alpha = l.alpha),
                        f.globalAlpha = g.alpha,
                        f.setTransform(g.a, g.b, g.c, g.d, g.tx - b, g.ty - c),
                        (l || k).draw(f),
                        !this._testHit(f))
                            continue;
                        if (f.setTransform(1, 0, 0, 1, 0, 0),
                        f.clearRect(0, 0, 2, 2),
                        h)
                            return this;
                        if (!d)
                            return k;
                        d.push(k)
                    }
                } else {
                    var n;
                    if (h) {
                        if (n = k._getObjectsUnderPoint(b, c))
                            return this
                    } else if (n = k._getObjectsUnderPoint(b, c, d, e),
                    !d && n)
                        return n
                }
            }
        }
        return null
    }
    ,
    createjs.Container = a
}(),
this.createjs = this.createjs || {},
function() {
    var a = function(a) {
        this.initialize(a)
    }
      , b = a.prototype = new createjs.Container;
    a._snapToPixelEnabled = !1,
    b.autoClear = !0,
    b.canvas = null,
    b.mouseX = 0,
    b.mouseY = 0,
    b.onMouseMove = null,
    b.onMouseUp = null,
    b.onMouseDown = null,
    b.snapToPixelEnabled = !1,
    b.mouseInBounds = !1,
    b.tickOnUpdate = !0,
    b.mouseMoveOutside = !1,
    b._pointerData = null,
    b._pointerCount = 0,
    b._primaryPointerID = null,
    b._mouseOverIntervalID = null,
    b.Container_initialize = b.initialize,
    b.initialize = function(a) {
        this.Container_initialize(),
        this.canvas = "string" == typeof a ? document.getElementById(a) : a,
        this._pointerData = {},
        this.enableDOMEvents(!0)
    }
    ,
    b.update = function() {
        if (this.canvas) {
            this.autoClear && this.clear(),
            a._snapToPixelEnabled = this.snapToPixelEnabled,
            this.tickOnUpdate && this._tick(arguments.length ? arguments : null);
            var b = this.canvas.getContext("2d");
            b.save(),
            this.updateContext(b),
            this.draw(b, !1),
            b.restore()
        }
    }
    ,
    b.tick = b.update,
    b.handleEvent = function(a) {
        "tick" == a.type && this.update(a)
    }
    ,
    b.clear = function() {
        if (this.canvas) {
            var a = this.canvas.getContext("2d");
            a.setTransform(1, 0, 0, 1, 0, 0),
            a.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)
        }
    }
    ,
    b.toDataURL = function(a, b) {
        b || (b = "image/png");
        var c, d = this.canvas.getContext("2d"), e = this.canvas.width, f = this.canvas.height;
        if (a) {
            c = d.getImageData(0, 0, e, f);
            var g = d.globalCompositeOperation;
            d.globalCompositeOperation = "destination-over",
            d.fillStyle = a,
            d.fillRect(0, 0, e, f)
        }
        var h = this.canvas.toDataURL(b);
        return a && (d.clearRect(0, 0, e + 1, f + 1),
        d.putImageData(c, 0, 0),
        d.globalCompositeOperation = g),
        h
    }
    ,
    b.enableMouseOver = function(a) {
        if (this._mouseOverIntervalID && (clearInterval(this._mouseOverIntervalID),
        this._mouseOverIntervalID = null),
        null == a)
            a = 20;
        else if (0 >= a)
            return;
        var b = this;
        this._mouseOverIntervalID = setInterval(function() {
            b._testMouseOver()
        }, 1e3 / Math.min(50, a))
    }
    ,
    b.enableDOMEvents = function(a) {
        null == a && (a = !0);
        var b, c, d = this._eventListeners;
        if (!a && d) {
            for (b in d)
                c = d[b],
                c.t.removeEventListener(b, c.f);
            this._eventListeners = null
        } else if (a && !d && this.canvas) {
            var e = window.addEventListener ? window : document
              , f = this;
            d = this._eventListeners = {},
            d.mouseup = {
                t: e,
                f: function(a) {
                    f._handleMouseUp(a)
                }
            },
            d.mousemove = {
                t: e,
                f: function(a) {
                    f._handleMouseMove(a)
                }
            },
            d.dblclick = {
                t: e,
                f: function(a) {
                    f._handleDoubleClick(a)
                }
            },
            d.mousedown = {
                t: this.canvas,
                f: function(a) {
                    f._handleMouseDown(a)
                }
            };
            for (b in d)
                c = d[b],
                c.t.addEventListener(b, c.f)
        }
    }
    ,
    b.clone = function() {
        var b = new a(null);
        return this.cloneProps(b),
        b
    }
    ,
    b.toString = function() {
        return "[Stage (name=" + this.name + ")]"
    }
    ,
    b._getPointerData = function(a) {
        var b = this._pointerData[a];
        return b || (b = this._pointerData[a] = {
            x: 0,
            y: 0
        },
        (null == this._primaryPointerID || -1 == this._primaryPointerID) && (this._primaryPointerID = a)),
        b
    }
    ,
    b._handleMouseMove = function(a) {
        a || (a = window.event),
        this._handlePointerMove(-1, a, a.pageX, a.pageY)
    }
    ,
    b._handlePointerMove = function(a, b, c, d) {
        if (this.canvas) {
            var e, f = this._getPointerData(a), g = f.inBounds;
            if (this._updatePointerPosition(a, c, d),
            g || f.inBounds || this.mouseMoveOutside) {
                (this.onMouseMove || this.hasEventListener("stagemousemove")) && (e = new createjs.MouseEvent("stagemousemove",f.x,f.y,this,b,a,a == this._primaryPointerID,f.rawX,f.rawY),
                this.onMouseMove && this.onMouseMove(e),
                this.dispatchEvent(e));
                var h = f.event;
                h && (h.onMouseMove || h.hasEventListener("mousemove")) && (e = new createjs.MouseEvent("mousemove",f.x,f.y,h.target,b,a,a == this._primaryPointerID,f.rawX,f.rawY),
                h.onMouseMove && h.onMouseMove(e),
                h.dispatchEvent(e, h.target))
            }
        }
    }
    ,
    b._updatePointerPosition = function(a, b, c) {
        var d = this._getElementRect(this.canvas);
        b -= d.left,
        c -= d.top;
        var e = this.canvas.width
          , f = this.canvas.height;
        b /= (d.right - d.left) / e,
        c /= (d.bottom - d.top) / f;
        var g = this._getPointerData(a);
        (g.inBounds = b >= 0 && c >= 0 && e - 1 >= b && f - 1 >= c) ? (g.x = b,
        g.y = c) : this.mouseMoveOutside && (g.x = 0 > b ? 0 : b > e - 1 ? e - 1 : b,
        g.y = 0 > c ? 0 : c > f - 1 ? f - 1 : c),
        g.rawX = b,
        g.rawY = c,
        a == this._primaryPointerID && (this.mouseX = g.x,
        this.mouseY = g.y,
        this.mouseInBounds = g.inBounds)
    }
    ,
    b._getElementRect = function(a) {
        var b;
        try {
            b = a.getBoundingClientRect()
        } catch (c) {
            b = {
                top: a.offsetTop,
                left: a.offsetLeft,
                width: a.offsetWidth,
                height: a.offsetHeight
            }
        }
        var d = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document.body.clientLeft || 0)
          , e = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || document.body.clientTop || 0)
          , f = window.getComputedStyle ? getComputedStyle(a) : a.currentStyle
          , g = parseInt(f.paddingLeft) + parseInt(f.borderLeftWidth)
          , h = parseInt(f.paddingTop) + parseInt(f.borderTopWidth)
          , i = parseInt(f.paddingRight) + parseInt(f.borderRightWidth)
          , j = parseInt(f.paddingBottom) + parseInt(f.borderBottomWidth);
        return {
            left: b.left + d + g,
            right: b.right + d - i,
            top: b.top + e + h,
            bottom: b.bottom + e - j
        }
    }
    ,
    b._handleMouseUp = function(a) {
        this._handlePointerUp(-1, a, !1)
    }
    ,
    b._handlePointerUp = function(a, b, c) {
        var d, e = this._getPointerData(a);
        (this.onMouseMove || this.hasEventListener("stagemouseup")) && (d = new createjs.MouseEvent("stagemouseup",e.x,e.y,this,b,a,a == this._primaryPointerID,e.rawX,e.rawY),
        this.onMouseUp && this.onMouseUp(d),
        this.dispatchEvent(d));
        var f = e.event;
        f && (f.onMouseUp || f.hasEventListener("mouseup")) && (d = new createjs.MouseEvent("mouseup",e.x,e.y,f.target,b,a,a == this._primaryPointerID,e.rawX,e.rawY),
        f.onMouseUp && f.onMouseUp(d),
        f.dispatchEvent(d, f.target));
        var g = e.target;
        g && (g.onClick || g.hasEventListener("click")) && this._getObjectsUnderPoint(e.x, e.y, null, !0, this._mouseOverIntervalID ? 3 : 1) == g && (d = new createjs.MouseEvent("click",e.x,e.y,g,b,a,a == this._primaryPointerID,e.rawX,e.rawY),
        g.onClick && g.onClick(d),
        g.dispatchEvent(d)),
        c ? (a == this._primaryPointerID && (this._primaryPointerID = null),
        delete this._pointerData[a]) : e.event = e.target = null
    }
    ,
    b._handleMouseDown = function(a) {
        this._handlePointerDown(-1, a, !1)
    }
    ,
    b._handlePointerDown = function(a, b, c, d) {
        var e = this._getPointerData(a);
        if (null != d && this._updatePointerPosition(a, c, d),
        this.onMouseDown || this.hasEventListener("stagemousedown")) {
            var f = new createjs.MouseEvent("stagemousedown",e.x,e.y,this,b,a,a == this._primaryPointerID,e.rawX,e.rawY);
            this.onMouseDown && this.onMouseDown(f),
            this.dispatchEvent(f)
        }
        var g = this._getObjectsUnderPoint(e.x, e.y, null, this._mouseOverIntervalID ? 3 : 1);
        g && (e.target = g,
        (g.onPress || g.hasEventListener("mousedown")) && (f = new createjs.MouseEvent("mousedown",e.x,e.y,g,b,a,a == this._primaryPointerID,e.rawX,e.rawY),
        g.onPress && g.onPress(f),
        g.dispatchEvent(f),
        (f.onMouseMove || f.onMouseUp || f.hasEventListener("mousemove") || f.hasEventListener("mouseup")) && (e.event = f)))
    }
    ,
    b._testMouseOver = function() {
        if (-1 == this._primaryPointerID && (this.mouseX != this._mouseOverX || this.mouseY != this._mouseOverY || !this.mouseInBounds)) {
            var a = null;
            this.mouseInBounds && (a = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, 3),
            this._mouseOverX = this.mouseX,
            this._mouseOverY = this.mouseY);
            var b = this._mouseOverTarget;
            if (b != a) {
                var c = this._getPointerData(-1);
                if (b && (b.onMouseOut || b.hasEventListener("mouseout"))) {
                    var d = new createjs.MouseEvent("mouseout",c.x,c.y,b,null,-1,c.rawX,c.rawY);
                    b.onMouseOut && b.onMouseOut(d),
                    b.dispatchEvent(d)
                }
                b && (this.canvas.style.cursor = ""),
                a && (a.onMouseOver || a.hasEventListener("mouseover")) && (d = new createjs.MouseEvent("mouseover",c.x,c.y,a,null,-1,c.rawX,c.rawY),
                a.onMouseOver && a.onMouseOver(d),
                a.dispatchEvent(d)),
                a && (this.canvas.style.cursor = a.cursor || ""),
                this._mouseOverTarget = a
            }
        }
    }
    ,
    b._handleDoubleClick = function(a) {
        var b = this._getPointerData(-1)
          , c = this._getObjectsUnderPoint(b.x, b.y, null, this._mouseOverIntervalID ? 3 : 1);
        c && (c.onDoubleClick || c.hasEventListener("dblclick")) && (evt = new createjs.MouseEvent("dblclick",b.x,b.y,c,a,-1,!0,b.rawX,b.rawY),
        c.onDoubleClick && c.onDoubleClick(evt),
        c.dispatchEvent(evt))
    }
    ,
    createjs.Stage = a
}(),
this.createjs = this.createjs || {},
function() {
    var a = function(a) {
        this.initialize(a)
    }
      , b = a.prototype = new createjs.DisplayObject;
    b.image = null,
    b.snapToPixel = !0,
    b.sourceRect = null,
    b.DisplayObject_initialize = b.initialize,
    b.initialize = function(a) {
        this.DisplayObject_initialize(),
        "string" == typeof a ? (this.image = new Image,
        this.image.src = a) : this.image = a
    }
    ,
    b.isVisible = function() {
        var a = this.cacheCanvas || this.image && (this.image.complete || this.image.getContext || this.image.readyState >= 2);
        return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a)
    }
    ,
    b.DisplayObject_draw = b.draw,
    b.draw = function(a, b) {
        if (this.DisplayObject_draw(a, b))
            return !0;
        var c = this.sourceRect;
        return c ? a.drawImage(this.image, c.x, c.y, c.width, c.height, 0, 0, c.width, c.height) : a.drawImage(this.image, 0, 0),
        !0
    }
    ,
    b.clone = function() {
        var b = new a(this.image);
        return this.sourceRect && (b.sourceRect = this.sourceRect.clone()),
        this.cloneProps(b),
        b
    }
    ,
    b.toString = function() {
        return "[Bitmap (name=" + this.name + ")]"
    }
    ,
    createjs.Bitmap = a
}(),
this.createjs = this.createjs || {},
function() {
    var a = function(a) {
        this.initialize(a)
    }
      , b = a.prototype = new createjs.DisplayObject;
    b.onAnimationEnd = null,
    b.currentFrame = -1,
    b.currentAnimation = null,
    b.paused = !0,
    b.spriteSheet = null,
    b.snapToPixel = !0,
    b.offset = 0,
    b.currentAnimationFrame = 0,
    b.addEventListener = null,
    b.removeEventListener = null,
    b.removeAllEventListeners = null,
    b.dispatchEvent = null,
    b.hasEventListener = null,
    b._listeners = null,
    createjs.EventDispatcher.initialize(b),
    b._advanceCount = 0,
    b._animation = null,
    b.DisplayObject_initialize = b.initialize,
    b.initialize = function(a) {
        this.DisplayObject_initialize(),
        this.spriteSheet = a
    }
    ,
    b.isVisible = function() {
        var a = this.cacheCanvas || this.spriteSheet.complete && this.currentFrame >= 0;
        return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a)
    }
    ,
    b.DisplayObject_draw = b.draw,
    b.draw = function(a, b) {
        if (this.DisplayObject_draw(a, b))
            return !0;
        this._normalizeFrame();
        var c = this.spriteSheet.getFrame(this.currentFrame);
        if (c) {
            var d = c.rect;
            return a.drawImage(c.image, d.x, d.y, d.width, d.height, -c.regX, -c.regY, d.width, d.height),
            !0
        }
    }
    ,
    b.play = function() {
        this.paused = !1
    }
    ,
    b.stop = function() {
        this.paused = !0
    }
    ,
    b.gotoAndPlay = function(a) {
        this.paused = !1,
        this._goto(a)
    }
    ,
    b.gotoAndStop = function(a) {
        this.paused = !0,
        this._goto(a)
    }
    ,
    b.advance = function() {
        this._animation ? this.currentAnimationFrame++ : this.currentFrame++,
        this._normalizeFrame()
    }
    ,
    b.getBounds = function() {
        return this.spriteSheet.getFrameBounds(this.currentFrame)
    }
    ,
    b.clone = function() {
        var b = new a(this.spriteSheet);
        return this.cloneProps(b),
        b
    }
    ,
    b.toString = function() {
        return "[BitmapAnimation (name=" + this.name + ")]"
    }
    ,
    b.DisplayObject__tick = b._tick,
    b._tick = function(a) {
        var b = this._animation ? this._animation.frequency : 1;
        this.paused || (++this._advanceCount + this.offset) % b != 0 || this.advance(),
        this.DisplayObject__tick(a)
    }
    ,
    b._normalizeFrame = function() {
        var a, b = this._animation, c = this.currentFrame, d = this.paused;
        if (b)
            if (a = b.frames.length,
            this.currentAnimationFrame >= a) {
                var e = b.next;
                this._dispatchAnimationEnd(b, c, d, e, a - 1) || (e ? this._goto(e) : (this.paused = !0,
                this.currentAnimationFrame = b.frames.length - 1,
                this.currentFrame = b.frames[this.currentAnimationFrame]))
            } else
                this.currentFrame = b.frames[this.currentAnimationFrame];
        else
            a = this.spriteSheet.getNumFrames(),
            c >= a && (this._dispatchAnimationEnd(b, c, d, a - 1) || (this.currentFrame = 0))
    }
    ,
    b._dispatchAnimationEnd = function(a, b, c, d, e) {
        var f = a ? a.name : null;
        return this.onAnimationEnd && this.onAnimationEnd(this, f, d),
        this.dispatchEvent({
            type: "animationend",
            name: f,
            next: d
        }),
        !c && this.paused && (this.currentAnimationFrame = e),
        this.paused != c || this._animation != a || this.currentFrame != b
    }
    ,
    b.DisplayObject_cloneProps = b.cloneProps,
    b.cloneProps = function(a) {
        this.DisplayObject_cloneProps(a),
        a.onAnimationEnd = this.onAnimationEnd,
        a.currentFrame = this.currentFrame,
        a.currentAnimation = this.currentAnimation,
        a.paused = this.paused,
        a.offset = this.offset,
        a._animation = this._animation,
        a.currentAnimationFrame = this.currentAnimationFrame
    }
    ,
    b._goto = function(a) {
        if (isNaN(a)) {
            var b = this.spriteSheet.getAnimation(a);
            b && (this.currentAnimationFrame = 0,
            this._animation = b,
            this.currentAnimation = a,
            this._normalizeFrame())
        } else
            this.currentAnimation = this._animation = null,
            this.currentFrame = a
    }
    ,
    createjs.BitmapAnimation = a
}(),
this.createjs = this.createjs || {},
function() {
    var a = function(a) {
        this.initialize(a)
    }
      , b = a.prototype = new createjs.DisplayObject;
    b.graphics = null,
    b.DisplayObject_initialize = b.initialize,
    b.initialize = function(a) {
        this.DisplayObject_initialize(),
        this.graphics = a ? a : new createjs.Graphics
    }
    ,
    b.isVisible = function() {
        var a = this.cacheCanvas || this.graphics && !this.graphics.isEmpty();
        return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a)
    }
    ,
    b.DisplayObject_draw = b.draw,
    b.draw = function(a, b) {
        return this.DisplayObject_draw(a, b) ? !0 : (this.graphics.draw(a),
        !0)
    }
    ,
    b.clone = function(b) {
        var c = new a(b && this.graphics ? this.graphics.clone() : this.graphics);
        return this.cloneProps(c),
        c
    }
    ,
    b.toString = function() {
        return "[Shape (name=" + this.name + ")]"
    }
    ,
    createjs.Shape = a
}(),
this.createjs = this.createjs || {},
function() {
    var a = function(a, b, c) {
        this.initialize(a, b, c)
    }
      , b = a.prototype = new createjs.DisplayObject;
    a._workingContext = (createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")).getContext("2d"),
    b.text = "",
    b.font = null,
    b.color = "#000",
    b.textAlign = "left",
    b.textBaseline = "top",
    b.maxWidth = null,
    b.outline = !1,
    b.lineHeight = 0,
    b.lineWidth = null,
    b.DisplayObject_initialize = b.initialize,
    b.initialize = function(a, b, c) {
        this.DisplayObject_initialize(),
        this.text = a,
        this.font = b,
        this.color = c ? c : "#000"
    }
    ,
    b.isVisible = function() {
        var a = this.cacheCanvas || null != this.text && "" !== this.text;
        return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a)
    }
    ,
    b.DisplayObject_draw = b.draw,
    b.draw = function(a, b) {
        return this.DisplayObject_draw(a, b) ? !0 : (this.outline ? a.strokeStyle = this.color : a.fillStyle = this.color,
        a.font = this.font,
        a.textAlign = this.textAlign || "start",
        a.textBaseline = this.textBaseline || "alphabetic",
        this._drawText(a),
        !0)
    }
    ,
    b.getMeasuredWidth = function() {
        return this._getWorkingContext().measureText(this.text).width
    }
    ,
    b.getMeasuredLineHeight = function() {
        return 1.2 * this._getWorkingContext().measureText("M").width
    }
    ,
    b.getMeasuredHeight = function() {
        return this._drawText() * (this.lineHeight || this.getMeasuredLineHeight())
    }
    ,
    b.clone = function() {
        var b = new a(this.text,this.font,this.color);
        return this.cloneProps(b),
        b
    }
    ,
    b.toString = function() {
        return "[Text (text=" + (this.text.length > 20 ? this.text.substr(0, 17) + "..." : this.text) + ")]"
    }
    ,
    b.DisplayObject_cloneProps = b.cloneProps,
    b.cloneProps = function(a) {
        this.DisplayObject_cloneProps(a),
        a.textAlign = this.textAlign,
        a.textBaseline = this.textBaseline,
        a.maxWidth = this.maxWidth,
        a.outline = this.outline,
        a.lineHeight = this.lineHeight,
        a.lineWidth = this.lineWidth
    }
    ,
    b._getWorkingContext = function() {
        var b = a._workingContext;
        return b.font = this.font,
        b.textAlign = this.textAlign || "start",
        b.textBaseline = this.textBaseline || "alphabetic",
        b
    }
    ,
    b._drawText = function(a) {
        var b = !!a;
        b || (a = this._getWorkingContext());
        for (var c = String(this.text).split(/(?:\r\n|\r|\n)/), d = this.lineHeight || this.getMeasuredLineHeight(), e = 0, f = 0, g = c.length; g > f; f++) {
            var h = a.measureText(c[f]).width;
            if (null == this.lineWidth || h < this.lineWidth)
                b && this._drawTextLine(a, c[f], e * d),
                e++;
            else {
                for (var i = c[f].split(/(\s)/), j = i[0], k = 1, l = i.length; l > k; k += 2)
                    a.measureText(j + i[k] + i[k + 1]).width > this.lineWidth ? (b && this._drawTextLine(a, j, e * d),
                    e++,
                    j = i[k + 1]) : j += i[k] + i[k + 1];
                b && this._drawTextLine(a, j, e * d),
                e++
            }
        }
        return e
    }
    ,
    b._drawTextLine = function(a, b, c) {
        this.outline ? a.strokeText(b, 0, c, this.maxWidth || 65535) : a.fillText(b, 0, c, this.maxWidth || 65535)
    }
    ,
    createjs.Text = a
}(),
this.createjs = this.createjs || {},
function() {
    var a = function() {
        throw "SpriteSheetUtils cannot be instantiated"
    };
    a._workingCanvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"),
    a._workingContext = a._workingCanvas.getContext("2d"),
    a.addFlippedFrames = function(b, c, d, e) {
        if (c || d || e) {
            var f = 0;
            c && a._flip(b, ++f, !0, !1),
            d && a._flip(b, ++f, !1, !0),
            e && a._flip(b, ++f, !0, !0)
        }
    }
    ,
    a.extractFrame = function(b, c) {
        isNaN(c) && (c = b.getAnimation(c).frames[0]);
        var d = b.getFrame(c);
        if (!d)
            return null;
        var e = d.rect
          , f = a._workingCanvas;
        f.width = e.width,
        f.height = e.height,
        a._workingContext.drawImage(d.image, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height);
        var g = new Image;
        return g.src = f.toDataURL("image/png"),
        g
    }
    ,
    a.mergeAlpha = function(a, b, c) {
        c || (c = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")),
        c.width = Math.max(b.width, a.width),
        c.height = Math.max(b.height, a.height);
        var d = c.getContext("2d");
        return d.save(),
        d.drawImage(a, 0, 0),
        d.globalCompositeOperation = "destination-in",
        d.drawImage(b, 0, 0),
        d.restore(),
        c
    }
    ,
    a._flip = function(b, c, d, e) {
        for (var f = b._images, g = a._workingCanvas, h = a._workingContext, i = f.length / c, j = 0; i > j; j++) {
            var k = f[j];
            k.__tmp = j,
            h.setTransform(1, 0, 0, 1, 0, 0),
            h.clearRect(0, 0, g.width + 1, g.height + 1),
            g.width = k.width,
            g.height = k.height,
            h.setTransform(d ? -1 : 1, 0, 0, e ? -1 : 1, d ? k.width : 0, e ? k.height : 0),
            h.drawImage(k, 0, 0);
            var l = new Image;
            l.src = g.toDataURL("image/png"),
            l.width = k.width,
            l.height = k.height,
            f.push(l)
        }
        var m = b._frames
          , n = m.length / c;
        for (j = 0; n > j; j++) {
            k = m[j];
            var o = k.rect.clone();
            l = f[k.image.__tmp + i * c];
            var p = {
                image: l,
                rect: o,
                regX: k.regX,
                regY: k.regY
            };
            d && (o.x = l.width - o.x - o.width,
            p.regX = o.width - k.regX),
            e && (o.y = l.height - o.y - o.height,
            p.regY = o.height - k.regY),
            m.push(p)
        }
        var q = "_" + (d ? "h" : "") + (e ? "v" : "")
          , r = b._animations
          , s = b._data
          , t = r.length / c;
        for (j = 0; t > j; j++) {
            var u = r[j];
            k = s[u];
            var v = {
                name: u + q,
                frequency: k.frequency,
                next: k.next,
                frames: []
            };
            k.next && (v.next += q),
            m = k.frames;
            for (var w = 0, x = m.length; x > w; w++)
                v.frames.push(m[w] + n * c);
            s[v.name] = v,
            r.push(v.name)
        }
    }
    ,
    createjs.SpriteSheetUtils = a
}(),
this.createjs = this.createjs || {},
function() {
    var a = function() {
        this.initialize()
    }
      , b = a.prototype;
    a.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions",
    a.ERR_RUNNING = "a build is already running",
    b.maxWidth = 2048,
    b.maxHeight = 2048,
    b.spriteSheet = null,
    b.scale = 1,
    b.padding = 1,
    b.timeSlice = .3,
    b.progress = -1,
    b.onComplete = null,
    b.onProgress = null,
    b.addEventListener = null,
    b.removeEventListener = null,
    b.removeAllEventListeners = null,
    b.dispatchEvent = null,
    b.hasEventListener = null,
    b._listeners = null,
    createjs.EventDispatcher.initialize(b),
    b._frames = null,
    b._animations = null,
    b._data = null,
    b._nextFrameIndex = 0,
    b._index = 0,
    b._timerID = null,
    b._scale = 1,
    b.initialize = function() {
        this._frames = [],
        this._animations = {}
    }
    ,
    b.addFrame = function(b, c, d, e, f, g) {
        if (this._data)
            throw a.ERR_RUNNING;
        var h = c || b.bounds || b.nominalBounds;
        return !h && b.getBounds && (h = b.getBounds()),
        h ? (d = d || 1,
        this._frames.push({
            source: b,
            sourceRect: h,
            scale: d,
            funct: e,
            params: f,
            scope: g,
            index: this._frames.length,
            height: h.height * d
        }) - 1) : null
    }
    ,
    b.addAnimation = function(b, c, d, e) {
        if (this._data)
            throw a.ERR_RUNNING;
        this._animations[b] = {
            frames: c,
            next: d,
            frequency: e
        }
    }
    ,
    b.addMovieClip = function(b, c, d) {
        if (this._data)
            throw a.ERR_RUNNING;
        var e = b.frameBounds
          , f = c || b.bounds || b.nominalBounds;
        if (!f && b.getBounds && (f = b.getBounds()),
        !f && !e)
            return null;
        for (var g = this._frames.length, h = b.timeline.duration, i = 0; h > i; i++) {
            var j = e && e[i] ? e[i] : f;
            this.addFrame(b, j, d, function(a) {
                var b = this.actionsEnabled;
                this.actionsEnabled = !1,
                this.gotoAndStop(a),
                this.actionsEnabled = b
            }, [i], b)
        }
        var k = b.timeline._labels
          , l = [];
        for (var m in k)
            l.push({
                index: k[m],
                label: m
            });
        if (l.length) {
            l.sort(function(a, b) {
                return a.index - b.index
            });
            for (var i = 0, n = l.length; n > i; i++) {
                for (var o = l[i].label, p = g + l[i].index, q = g + (i == n - 1 ? h : l[i + 1].index), r = [], s = p; q > s; s++)
                    r.push(s);
                this.addAnimation(o, r, !0)
            }
        }
    }
    ,
    b.build = function() {
        if (this._data)
            throw a.ERR_RUNNING;
        for (this._startBuild(); this._drawNext(); )
            ;
        return this._endBuild(),
        this.spriteSheet
    }
    ,
    b.buildAsync = function(b) {
        if (this._data)
            throw a.ERR_RUNNING;
        this.timeSlice = b,
        this._startBuild();
        var c = this;
        this._timerID = setTimeout(function() {
            c._run()
        }, 50 - 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)))
    }
    ,
    b.stopAsync = function() {
        clearTimeout(this._timerID),
        this._data = null
    }
    ,
    b.clone = function() {
        throw "SpriteSheetBuilder cannot be cloned."
    }
    ,
    b.toString = function() {
        return "[SpriteSheetBuilder]"
    }
    ,
    b._startBuild = function() {
        var b = this.padding || 0;
        this.progress = 0,
        this.spriteSheet = null,
        this._index = 0,
        this._scale = this.scale;
        var c = [];
        this._data = {
            images: [],
            frames: c,
            animations: this._animations
        };
        var d = this._frames.slice();
        if (d.sort(function(a, b) {
            return a.height <= b.height ? -1 : 1
        }),
        d[d.length - 1].height + 2 * b > this.maxHeight)
            throw a.ERR_DIMENSIONS;
        for (var e = 0, f = 0, g = 0; d.length; ) {
            var h = this._fillRow(d, e, g, c, b);
            if (h.w > f && (f = h.w),
            e += h.h,
            !h.h || !d.length) {
                var i = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
                i.width = this._getSize(f, this.maxWidth),
                i.height = this._getSize(e, this.maxHeight),
                this._data.images[g] = i,
                h.h || (f = e = 0,
                g++)
            }
        }
    }
    ,
    b._getSize = function(a, b) {
        for (var c = 4; Math.pow(2, ++c) < a; )
            ;
        return Math.min(b, Math.pow(2, c))
    }
    ,
    b._fillRow = function(b, c, d, e, f) {
        var g = this.maxWidth
          , h = this.maxHeight;
        c += f;
        for (var i = h - c, j = f, k = 0, l = b.length - 1; l >= 0; l--) {
            var m = b[l]
              , n = this._scale * m.scale
              , o = m.sourceRect
              , p = m.source
              , q = Math.floor(n * o.x - f)
              , r = Math.floor(n * o.y - f)
              , s = Math.ceil(n * o.height + 2 * f)
              , t = Math.ceil(n * o.width + 2 * f);
            if (t > g)
                throw a.ERR_DIMENSIONS;
            s > i || j + t > g || (m.img = d,
            m.rect = new createjs.Rectangle(j,c,t,s),
            k = k || s,
            b.splice(l, 1),
            e[m.index] = [j, c, t, s, d, Math.round(-q + n * p.regX - f), Math.round(-r + n * p.regY - f)],
            j += t)
        }
        return {
            w: j,
            h: k
        }
    }
    ,
    b._endBuild = function() {
        this.spriteSheet = new createjs.SpriteSheet(this._data),
        this._data = null,
        this.progress = 1,
        this.onComplete && this.onComplete(this),
        this.dispatchEvent("complete")
    }
    ,
    b._run = function() {
        for (var a = 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)), b = (new Date).getTime() + a, c = !1; b > (new Date).getTime(); )
            if (!this._drawNext()) {
                c = !0;
                break
            }
        if (c)
            this._endBuild();
        else {
            var d = this;
            this._timerID = setTimeout(function() {
                d._run()
            }, 50 - a)
        }
        var e = this.progress = this._index / this._frames.length;
        this.onProgress && this.onProgress(this, e),
        this.dispatchEvent({
            type: "progress",
            progress: e
        })
    }
    ,
    b._drawNext = function() {
        var a = this._frames[this._index]
          , b = a.scale * this._scale
          , c = a.rect
          , d = a.sourceRect
          , e = this._data.images[a.img]
          , f = e.getContext("2d");
        return a.funct && a.funct.apply(a.scope, a.params),
        f.save(),
        f.beginPath(),
        f.rect(c.x, c.y, c.width, c.height),
        f.clip(),
        f.translate(Math.ceil(c.x - d.x * b), Math.ceil(c.y - d.y * b)),
        f.scale(b, b),
        a.source.draw(f),
        f.restore(),
        ++this._index < this._frames.length
    }
    ,
    createjs.SpriteSheetBuilder = a
}(),
this.createjs = this.createjs || {},
function() {
    var a = function(a) {
        this.initialize(a)
    }
      , b = a.prototype = new createjs.DisplayObject;
    b.htmlElement = null,
    b._oldMtx = null,
    b.DisplayObject_initialize = b.initialize,
    b.initialize = function(a) {
        "string" == typeof a && (a = document.getElementById(a)),
        this.DisplayObject_initialize(),
        this.mouseEnabled = !1,
        this.htmlElement = a;
        var b = a.style;
        b.position = "absolute",
        b.transformOrigin = b.WebkitTransformOrigin = b.msTransformOrigin = b.MozTransformOrigin = b.OTransformOrigin = "0% 0%"
    }
    ,
    b.isVisible = function() {
        return null != this.htmlElement
    }
    ,
    b.draw = function() {
        if (null != this.htmlElement) {
            var a = this.getConcatenatedMatrix(this._matrix)
              , b = this.htmlElement
              , c = b.style;
            if (!this.visible)
                return !0;
            c.visibility = "visible";
            var d = this._oldMtx || {};
            return d.alpha != a.alpha && (c.opacity = "" + a.alpha,
            d.alpha = a.alpha),
            (d.tx != a.tx || d.ty != a.ty || d.a != a.a || d.b != a.b || d.c != a.c || d.d != a.d) && (c.transform = c.WebkitTransform = c.OTransform = c.msTransform = ["matrix(" + a.a, a.b, a.c, a.d, a.tx + .5 | 0, (a.ty + .5 | 0) + ")"].join(","),
            c.MozTransform = ["matrix(" + a.a, a.b, a.c, a.d, (a.tx + .5 | 0) + "px", (a.ty + .5 | 0) + "px)"].join(","),
            this._oldMtx = a.clone()),
            !0
        }
    }
    ,
    b.cache = function() {}
    ,
    b.uncache = function() {}
    ,
    b.updateCache = function() {}
    ,
    b.hitTest = function() {}
    ,
    b.localToGlobal = function() {}
    ,
    b.globalToLocal = function() {}
    ,
    b.localToLocal = function() {}
    ,
    b.clone = function() {
        throw "DOMElement cannot be cloned."
    }
    ,
    b.toString = function() {
        return "[DOMElement (name=" + this.name + ")]"
    }
    ,
    b.DisplayObject__tick = b._tick,
    b._tick = function(a) {
        this.htmlElement.style.visibility = "hidden",
        this.DisplayObject__tick(a)
    }
    ,
    createjs.DOMElement = a
}(),
this.createjs = this.createjs || {},
function() {
    var a = function() {
        this.initialize()
    }
      , b = a.prototype;
    b.initialize = function() {}
    ,
    b.getBounds = function() {
        return new createjs.Rectangle(0,0,0,0)
    }
    ,
    b.applyFilter = function() {}
    ,
    b.toString = function() {
        return "[Filter]"
    }
    ,
    b.clone = function() {
        return new a
    }
    ,
    createjs.Filter = a
}(),
this.createjs = this.createjs || {},
function() {
    var a = function() {
        throw "Touch cannot be instantiated"
    };
    a.isSupported = function() {
        return "ontouchstart"in window || window.navigator.msPointerEnabled
    }
    ,
    a.enable = function(b, c, d) {
        return b && b.canvas && a.isSupported() ? (b.__touch = {
            pointers: {},
            multitouch: !c,
            preventDefault: !d,
            count: 0
        },
        "ontouchstart"in window ? a._IOS_enable(b) : window.navigator.msPointerEnabled && a._IE_enable(b),
        !0) : !1
    }
    ,
    a.disable = function(b) {
        b && ("ontouchstart"in window ? a._IOS_disable(b) : window.navigator.msPointerEnabled && a._IE_disable(b))
    }
    ,
    a._IOS_enable = function(b) {
        var c = b.canvas
          , d = b.__touch.f = function(c) {
            a._IOS_handleEvent(b, c)
        }
        ;
        c.addEventListener("touchstart", d, !1),
        c.addEventListener("touchmove", d, !1),
        c.addEventListener("touchend", d, !1),
        c.addEventListener("touchcancel", d, !1)
    }
    ,
    a._IOS_disable = function(a) {
        var b = a.canvas;
        if (b) {
            var c = a.__touch.f;
            b.removeEventListener("touchstart", c, !1),
            b.removeEventListener("touchmove", c, !1),
            b.removeEventListener("touchend", c, !1),
            b.removeEventListener("touchcancel", c, !1)
        }
    }
    ,
    a._IOS_handleEvent = function(a, b) {
        if (a) {
            a.__touch.preventDefault && b.preventDefault && b.preventDefault();
            for (var c = b.changedTouches, d = b.type, e = 0, f = c.length; f > e; e++) {
                var g = c[e]
                  , h = g.identifier;
                g.target == a.canvas && ("touchstart" == d ? this._handleStart(a, h, b, g.pageX, g.pageY) : "touchmove" == d ? this._handleMove(a, h, b, g.pageX, g.pageY) : ("touchend" == d || "touchcancel" == d) && this._handleEnd(a, h, b))
            }
        }
    }
    ,
    a._IE_enable = function(b) {
        var c = b.canvas
          , d = b.__touch.f = function(c) {
            a._IE_handleEvent(b, c)
        }
        ;
        c.addEventListener("MSPointerDown", d, !1),
        window.addEventListener("MSPointerMove", d, !1),
        window.addEventListener("MSPointerUp", d, !1),
        window.addEventListener("MSPointerCancel", d, !1),
        b.__touch.preventDefault && (c.style.msTouchAction = "none"),
        b.__touch.activeIDs = {}
    }
    ,
    a._IE_disable = function(a) {
        var b = a.__touch.f;
        window.removeEventListener("MSPointerMove", b, !1),
        window.removeEventListener("MSPointerUp", b, !1),
        window.removeEventListener("MSPointerCancel", b, !1),
        a.canvas && a.canvas.removeEventListener("MSPointerDown", b, !1)
    }
    ,
    a._IE_handleEvent = function(a, b) {
        if (a) {
            a.__touch.preventDefault && b.preventDefault && b.preventDefault();
            var c = b.type
              , d = b.pointerId
              , e = a.__touch.activeIDs;
            if ("MSPointerDown" == c) {
                if (b.srcElement != a.canvas)
                    return;
                e[d] = !0,
                this._handleStart(a, d, b, b.pageX, b.pageY)
            } else
                e[d] && ("MSPointerMove" == c ? this._handleMove(a, d, b, b.pageX, b.pageY) : ("MSPointerUp" == c || "MSPointerCancel" == c) && (delete e[d],
                this._handleEnd(a, d, b)))
        }
    }
    ,
    a._handleStart = function(a, b, c, d, e) {
        var f = a.__touch;
        if (f.multitouch || !f.count) {
            var g = f.pointers;
            g[b] || (g[b] = !0,
            f.count++,
            a._handlePointerDown(b, c, d, e))
        }
    }
    ,
    a._handleMove = function(a, b, c, d, e) {
        a.__touch.pointers[b] && a._handlePointerMove(b, c, d, e)
    }
    ,
    a._handleEnd = function(a, b, c) {
        var d = a.__touch
          , e = d.pointers;
        e[b] && (d.count--,
        a._handlePointerUp(b, c, !0),
        delete e[b])
    }
    ,
    createjs.Touch = a
}(),
function() {
    var a = this.createjs = this.createjs || {};
    a = a.EaselJS = a.EaselJS || {},
    a.version = "0.6.1",
    a.buildDate = "Thu, 16 May 2013 16:05:45 GMT"
}(),
this.createjs = this.createjs || {},
function() {
    var a = function(a, b, c) {
        this.initialize(a, b, c)
    }
      , b = a.prototype;
    a.NONE = 0,
    a.LOOP = 1,
    a.REVERSE = 2,
    a.IGNORE = {},
    a._tweens = [],
    a._plugins = {},
    a.get = function(b, c, d, e) {
        return e && a.removeTweens(b),
        new a(b,c,d)
    }
    ,
    a.tick = function(b, c) {
        for (var d = a._tweens.slice(), e = d.length - 1; e >= 0; e--) {
            var f = d[e];
            c && !f.ignoreGlobalPause || f._paused || f.tick(f._useTicks ? 1 : b)
        }
    }
    ,
    createjs.Ticker && createjs.Ticker.addListener(a, !1),
    a.removeTweens = function(b) {
        if (b.tweenjs_count) {
            for (var c = a._tweens, d = c.length - 1; d >= 0; d--)
                c[d]._target == b && (c[d]._paused = !0,
                c.splice(d, 1));
            b.tweenjs_count = 0
        }
    }
    ,
    a.removeAllTweens = function() {
        for (var b = a._tweens, c = 0, d = b.length; d > c; c++) {
            var e = b[c];
            e.paused = !0,
            e.target.tweenjs_count = 0
        }
        b.length = 0
    }
    ,
    a.hasActiveTweens = function(b) {
        return b ? b.tweenjs_count : a._tweens && a._tweens.length
    }
    ,
    a.installPlugin = function(b, c) {
        var d = b.priority;
        null == d && (b.priority = d = 0);
        for (var e = 0, f = c.length, g = a._plugins; f > e; e++) {
            var h = c[e];
            if (g[h]) {
                for (var i = g[h], j = 0, k = i.length; k > j && !(d < i[j].priority); j++)
                    ;
                g[h].splice(j, 0, b)
            } else
                g[h] = [b]
        }
    }
    ,
    a._register = function(b, c) {
        var d = b._target;
        if (c)
            d && (d.tweenjs_count = d.tweenjs_count ? d.tweenjs_count + 1 : 1),
            a._tweens.push(b);
        else {
            d && d.tweenjs_count--;
            var e = a._tweens.indexOf(b);
            -1 != e && a._tweens.splice(e, 1)
        }
    }
    ,
    b.addEventListener = null,
    b.removeEventListener = null,
    b.removeAllEventListeners = null,
    b.dispatchEvent = null,
    b.hasEventListener = null,
    b._listeners = null,
    createjs.EventDispatcher.initialize(b),
    b.ignoreGlobalPause = !1,
    b.loop = !1,
    b.duration = 0,
    b.pluginData = null,
    b.onChange = null,
    b.change = null,
    b.target = null,
    b.position = null,
    b._paused = !1,
    b._curQueueProps = null,
    b._initQueueProps = null,
    b._steps = null,
    b._actions = null,
    b._prevPosition = 0,
    b._stepPosition = 0,
    b._prevPos = -1,
    b._target = null,
    b._useTicks = !1,
    b.initialize = function(b, c, d) {
        this.target = this._target = b,
        c && (this._useTicks = c.useTicks,
        this.ignoreGlobalPause = c.ignoreGlobalPause,
        this.loop = c.loop,
        this.onChange = c.onChange,
        c.override && a.removeTweens(b)),
        this.pluginData = d || {},
        this._curQueueProps = {},
        this._initQueueProps = {},
        this._steps = [],
        this._actions = [],
        c && c.paused ? this._paused = !0 : a._register(this, !0),
        c && null != c.position && this.setPosition(c.position, a.NONE)
    }
    ,
    b.wait = function(a) {
        if (null == a || 0 >= a)
            return this;
        var b = this._cloneProps(this._curQueueProps);
        return this._addStep({
            d: a,
            p0: b,
            e: this._linearEase,
            p1: b
        })
    }
    ,
    b.to = function(a, b, c) {
        return (isNaN(b) || 0 > b) && (b = 0),
        this._addStep({
            d: b || 0,
            p0: this._cloneProps(this._curQueueProps),
            e: c,
            p1: this._cloneProps(this._appendQueueProps(a))
        })
    }
    ,
    b.call = function(a, b, c) {
        return this._addAction({
            f: a,
            p: b ? b : [this],
            o: c ? c : this._target
        })
    }
    ,
    b.set = function(a, b) {
        return this._addAction({
            f: this._set,
            o: this,
            p: [a, b ? b : this._target]
        })
    }
    ,
    b.play = function(a) {
        return this.call(a.setPaused, [!1], a)
    }
    ,
    b.pause = function(a) {
        return a || (a = this),
        this.call(a.setPaused, [!0], a)
    }
    ,
    b.setPosition = function(a, b) {
        0 > a && (a = 0),
        null == b && (b = 1);
        var c = a
          , d = !1;
        if (c >= this.duration && (this.loop ? c %= this.duration : (c = this.duration,
        d = !0)),
        c == this._prevPos)
            return d;
        var e = this._prevPos;
        if (this.position = this._prevPos = c,
        this._prevPosition = a,
        this._target)
            if (d)
                this._updateTargetProps(null, 1);
            else if (this._steps.length > 0) {
                for (var f = 0, g = this._steps.length; g > f && !(this._steps[f].t > c); f++)
                    ;
                var h = this._steps[f - 1];
                this._updateTargetProps(h, (this._stepPosition = c - h.t) / h.d)
            }
        return 0 != b && this._actions.length > 0 && (this._useTicks ? this._runActions(c, c) : 1 == b && e > c ? (e != this.duration && this._runActions(e, this.duration),
        this._runActions(0, c, !0)) : this._runActions(e, c)),
        d && this.setPaused(!0),
        this.onChange && this.onChange(this),
        this.dispatchEvent("change"),
        d
    }
    ,
    b.tick = function(a) {
        this._paused || this.setPosition(this._prevPosition + a)
    }
    ,
    b.setPaused = function(b) {
        return this._paused = !!b,
        a._register(this, !b),
        this
    }
    ,
    b.w = b.wait,
    b.t = b.to,
    b.c = b.call,
    b.s = b.set,
    b.toString = function() {
        return "[Tween]"
    }
    ,
    b.clone = function() {
        throw "Tween can not be cloned."
    }
    ,
    b._updateTargetProps = function(b, c) {
        var d, e, f, g, h, i;
        b || 1 != c ? (b.e && (c = b.e(c, 0, 1, 1)),
        d = b.p0,
        e = b.p1) : d = e = this._curQueueProps;
        for (n in this._initQueueProps) {
            null == (g = d[n]) && (d[n] = g = this._initQueueProps[n]),
            null == (h = e[n]) && (e[n] = h = g),
            f = g == h || 0 == c || 1 == c || "number" != typeof g ? 1 == c ? h : g : g + (h - g) * c;
            var j = !1;
            if (i = a._plugins[n])
                for (var k = 0, l = i.length; l > k; k++) {
                    var m = i[k].tween(this, n, f, d, e, c, !!b && d == e, !b);
                    m == a.IGNORE ? j = !0 : f = m
                }
            j || (this._target[n] = f)
        }
    }
    ,
    b._runActions = function(a, b, c) {
        var d = a
          , e = b
          , f = -1
          , g = this._actions.length
          , h = 1;
        for (a > b && (d = b,
        e = a,
        f = g,
        g = h = -1); (f += h) != g; ) {
            var i = this._actions[f]
              , j = i.t;
            (j == e || j > d && e > j || c && j == a) && i.f.apply(i.o, i.p)
        }
    }
    ,
    b._appendQueueProps = function(b) {
        var c, d, e, f, g;
        for (var h in b) {
            if (void 0 === this._initQueueProps[h]) {
                if (d = this._target[h],
                c = a._plugins[h])
                    for (e = 0,
                    f = c.length; f > e; e++)
                        d = c[e].init(this, h, d);
                this._initQueueProps[h] = void 0 === d ? null : d
            } else
                d = this._curQueueProps[h];
            if (c = a._plugins[h])
                for (g = g || {},
                e = 0,
                f = c.length; f > e; e++)
                    c[e].step && c[e].step(this, h, d, b[h], g);
            this._curQueueProps[h] = b[h]
        }
        return g && this._appendQueueProps(g),
        this._curQueueProps
    }
    ,
    b._cloneProps = function(a) {
        var b = {};
        for (var c in a)
            b[c] = a[c];
        return b
    }
    ,
    b._addStep = function(a) {
        return a.d > 0 && (this._steps.push(a),
        a.t = this.duration,
        this.duration += a.d),
        this
    }
    ,
    b._addAction = function(a) {
        return a.t = this.duration,
        this._actions.push(a),
        this
    }
    ,
    b._set = function(a, b) {
        for (var c in a)
            b[c] = a[c]
    }
    ,
    createjs.Tween = a
}(),
this.createjs = this.createjs || {},
function() {
    var a = function(a, b, c) {
        this.initialize(a, b, c)
    }
      , b = a.prototype;
    b.ignoreGlobalPause = !1,
    b.duration = 0,
    b.loop = !1,
    b.onChange = null,
    b.position = null,
    b._paused = !1,
    b._tweens = null,
    b._labels = null,
    b._prevPosition = 0,
    b._prevPos = -1,
    b._useTicks = !1,
    b.initialize = function(a, b, c) {
        this._tweens = [],
        c && (this._useTicks = c.useTicks,
        this.loop = c.loop,
        this.ignoreGlobalPause = c.ignoreGlobalPause,
        this.onChange = c.onChange),
        a && this.addTween.apply(this, a),
        this.setLabels(b),
        c && c.paused ? this._paused = !0 : createjs.Tween._register(this, !0),
        c && null != c.position && this.setPosition(c.position, createjs.Tween.NONE)
    }
    ,
    b.addTween = function(a) {
        var b = arguments.length;
        if (b > 1) {
            for (var c = 0; b > c; c++)
                this.addTween(arguments[c]);
            return arguments[0]
        }
        return 0 == b ? null : (this.removeTween(a),
        this._tweens.push(a),
        a.setPaused(!0),
        a._paused = !1,
        a._useTicks = this._useTicks,
        a.duration > this.duration && (this.duration = a.duration),
        this._prevPos >= 0 && a.setPosition(this._prevPos, createjs.Tween.NONE),
        a)
    }
    ,
    b.removeTween = function(a) {
        var b = arguments.length;
        if (b > 1) {
            for (var c = !0, d = 0; b > d; d++)
                c = c && this.removeTween(arguments[d]);
            return c
        }
        if (0 == b)
            return !1;
        var e = this._tweens.indexOf(a);
        return -1 != e ? (this._tweens.splice(e, 1),
        a.duration >= this.duration && this.updateDuration(),
        !0) : !1
    }
    ,
    b.addLabel = function(a, b) {
        this._labels[a] = b
    }
    ,
    b.setLabels = function(a) {
        this._labels = a ? a : {}
    }
    ,
    b.gotoAndPlay = function(a) {
        this.setPaused(!1),
        this._goto(a)
    }
    ,
    b.gotoAndStop = function(a) {
        this.setPaused(!0),
        this._goto(a)
    }
    ,
    b.setPosition = function(a, b) {
        0 > a && (a = 0);
        var c = this.loop ? a % this.duration : a
          , d = !this.loop && a >= this.duration;
        if (c == this._prevPos)
            return d;
        this._prevPosition = a,
        this.position = this._prevPos = c;
        for (var e = 0, f = this._tweens.length; f > e; e++)
            if (this._tweens[e].setPosition(c, b),
            c != this._prevPos)
                return !1;
        return d && this.setPaused(!0),
        this.onChange && this.onChange(this),
        d
    }
    ,
    b.setPaused = function(a) {
        this._paused = !!a,
        createjs.Tween._register(this, !a)
    }
    ,
    b.updateDuration = function() {
        this.duration = 0;
        for (var a = 0, b = this._tweens.length; b > a; a++) {
            var c = this._tweens[a];
            c.duration > this.duration && (this.duration = c.duration)
        }
    }
    ,
    b.tick = function(a) {
        this.setPosition(this._prevPosition + a)
    }
    ,
    b.resolve = function(a) {
        var b = parseFloat(a);
        return isNaN(b) && (b = this._labels[a]),
        b
    }
    ,
    b.toString = function() {
        return "[Timeline]"
    }
    ,
    b.clone = function() {
        throw "Timeline can not be cloned."
    }
    ,
    b._goto = function(a) {
        var b = this.resolve(a);
        null != b && this.setPosition(b)
    }
    ,
    createjs.Timeline = a
}(),
this.createjs = this.createjs || {},
function() {
    var a = function() {
        throw "Ease cannot be instantiated."
    };
    a.linear = function(a) {
        return a
    }
    ,
    a.none = a.linear,
    a.get = function(a) {
        return -1 > a && (a = -1),
        a > 1 && (a = 1),
        function(b) {
            return 0 == a ? b : 0 > a ? b * (b * -a + 1 + a) : b * ((2 - b) * a + (1 - a))
        }
    }
    ,
    a.getPowIn = function(a) {
        return function(b) {
            return Math.pow(b, a)
        }
    }
    ,
    a.getPowOut = function(a) {
        return function(b) {
            return 1 - Math.pow(1 - b, a)
        }
    }
    ,
    a.getPowInOut = function(a) {
        return function(b) {
            return (b *= 2) < 1 ? .5 * Math.pow(b, a) : 1 - .5 * Math.abs(Math.pow(2 - b, a))
        }
    }
    ,
    a.quadIn = a.getPowIn(2),
    a.quadOut = a.getPowOut(2),
    a.quadInOut = a.getPowInOut(2),
    a.cubicIn = a.getPowIn(3),
    a.cubicOut = a.getPowOut(3),
    a.cubicInOut = a.getPowInOut(3),
    a.quartIn = a.getPowIn(4),
    a.quartOut = a.getPowOut(4),
    a.quartInOut = a.getPowInOut(4),
    a.quintIn = a.getPowIn(5),
    a.quintOut = a.getPowOut(5),
    a.quintInOut = a.getPowInOut(5),
    a.sineIn = function(a) {
        return 1 - Math.cos(a * Math.PI / 2)
    }
    ,
    a.sineOut = function(a) {
        return Math.sin(a * Math.PI / 2)
    }
    ,
    a.sineInOut = function(a) {
        return -.5 * (Math.cos(Math.PI * a) - 1)
    }
    ,
    a.getBackIn = function(a) {
        return function(b) {
            return b * b * ((a + 1) * b - a)
        }
    }
    ,
    a.backIn = a.getBackIn(1.7),
    a.getBackOut = function(a) {
        return function(b) {
            return --b * b * ((a + 1) * b + a) + 1
        }
    }
    ,
    a.backOut = a.getBackOut(1.7),
    a.getBackInOut = function(a) {
        return a *= 1.525,
        function(b) {
            return (b *= 2) < 1 ? .5 * b * b * ((a + 1) * b - a) : .5 * ((b -= 2) * b * ((a + 1) * b + a) + 2)
        }
    }
    ,
    a.backInOut = a.getBackInOut(1.7),
    a.circIn = function(a) {
        return -(Math.sqrt(1 - a * a) - 1)
    }
    ,
    a.circOut = function(a) {
        return Math.sqrt(1 - --a * a)
    }
    ,
    a.circInOut = function(a) {
        return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
    }
    ,
    a.bounceIn = function(b) {
        return 1 - a.bounceOut(1 - b)
    }
    ,
    a.bounceOut = function(a) {
        return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
    }
    ,
    a.bounceInOut = function(b) {
        return .5 > b ? .5 * a.bounceIn(2 * b) : .5 * a.bounceOut(2 * b - 1) + .5
    }
    ,
    a.getElasticIn = function(a, b) {
        var c = 2 * Math.PI;
        return function(d) {
            if (0 == d || 1 == d)
                return d;
            var e = b / c * Math.asin(1 / a);
            return -(a * Math.pow(2, 10 * (d -= 1)) * Math.sin((d - e) * c / b))
        }
    }
    ,
    a.elasticIn = a.getElasticIn(1, .3),
    a.getElasticOut = function(a, b) {
        var c = 2 * Math.PI;
        return function(d) {
            if (0 == d || 1 == d)
                return d;
            var e = b / c * Math.asin(1 / a);
            return a * Math.pow(2, -10 * d) * Math.sin((d - e) * c / b) + 1
        }
    }
    ,
    a.elasticOut = a.getElasticOut(1, .3),
    a.getElasticInOut = function(a, b) {
        var c = 2 * Math.PI;
        return function(d) {
            var e = b / c * Math.asin(1 / a);
            return (d *= 2) < 1 ? -.5 * a * Math.pow(2, 10 * (d -= 1)) * Math.sin((d - e) * c / b) : a * Math.pow(2, -10 * (d -= 1)) * Math.sin((d - e) * c / b) * .5 + 1
        }
    }
    ,
    a.elasticInOut = a.getElasticInOut(1, .3 * 1.5),
    createjs.Ease = a
}(),
this.createjs = this.createjs || {},
function() {
    var a = function() {
        throw "MotionGuidePlugin cannot be instantiated."
    };
    a.priority = 0,
    a.install = function() {
        return createjs.Tween.installPlugin(a, ["guide", "x", "y", "rotation"]),
        createjs.Tween.IGNORE
    }
    ,
    a.init = function(a, b, c) {
        var d = a.target;
        return d.hasOwnProperty("x") || (d.x = 0),
        d.hasOwnProperty("y") || (d.y = 0),
        d.hasOwnProperty("rotation") || (d.rotation = 0),
        "guide" == b ? null : c
    }
    ,
    a.step = function(b, c, d, e, f) {
        if ("guide" != c)
            return e;
        var g, h = e;
        h.hasOwnProperty("path") || (h.path = []);
        var i = h.path;
        if (h.hasOwnProperty("end") || (h.end = 1),
        h.hasOwnProperty("start") || (h.start = d && d.hasOwnProperty("end") && d.path === i ? d.end : 0),
        h.hasOwnProperty("_segments") && h._length)
            return e;
        var j = i.length
          , k = 10;
        if (!(j >= 6 && (j - 2) % 4 == 0))
            throw "invalid 'path' data, please see documentation for valid paths";
        h._segments = [],
        h._length = 0;
        for (var l = 2; j > l; l += 4) {
            for (var m, n, o = i[l - 2], p = i[l - 1], q = i[l + 0], r = i[l + 1], s = i[l + 2], t = i[l + 3], u = o, v = p, w = 0, x = [], y = 1; k >= y; y++) {
                var z = y / k
                  , A = 1 - z;
                m = A * A * o + 2 * A * z * q + z * z * s,
                n = A * A * p + 2 * A * z * r + z * z * t,
                w += x[x.push(Math.sqrt((g = m - u) * g + (g = n - v) * g)) - 1],
                u = m,
                v = n
            }
            h._segments.push(w),
            h._segments.push(x),
            h._length += w
        }
        return g = h.orient,
        h.orient = !1,
        a.calc(h, h.end, f),
        h.orient = g,
        e
    }
    ,
    a.tween = function(b, c, d, e, f, g, h) {
        var i = f.guide;
        if (void 0 == i || i === e.guide)
            return d;
        if (i.lastRatio != g) {
            var j = (i.end - i.start) * (h ? i.end : g) + i.start;
            a.calc(i, j, b.target),
            i.orient && (b.target.rotation += e.rotation || 0),
            i.lastRatio = g
        }
        return i.orient || "rotation" != c ? b.target[c] : d
    }
    ,
    a.calc = function(b, c, d) {
        void 0 == b._segments && a.validate(b),
        void 0 == d && (d = {
            x: 0,
            y: 0,
            rotation: 0
        });
        for (var e = b._segments, f = b.path, g = b._length * c, h = e.length - 2, i = 0; g > e[i] && h > i; )
            g -= e[i],
            i += 2;
        var j = e[i + 1]
          , k = 0;
        for (h = j.length - 1; g > j[k] && h > k; )
            g -= j[k],
            k++;
        var l = k / ++h + g / (h * j[k]);
        i = 2 * i + 2;
        var m = 1 - l;
        return d.x = m * m * f[i - 2] + 2 * m * l * f[i + 0] + l * l * f[i + 2],
        d.y = m * m * f[i - 1] + 2 * m * l * f[i + 1] + l * l * f[i + 3],
        b.orient && (d.rotation = 57.2957795 * Math.atan2((f[i + 1] - f[i - 1]) * m + (f[i + 3] - f[i + 1]) * l, (f[i + 0] - f[i - 2]) * m + (f[i + 2] - f[i + 0]) * l)),
        d
    }
    ,
    createjs.MotionGuidePlugin = a
}(),
function() {
    var a = this.createjs = this.createjs || {};
    a = a.TweenJS = a.TweenJS || {},
    a.version = "0.4.0",
    a.buildDate = "Tue, 12 Feb 2013 21:08:16 GMT"
}(),
function() {
    var a = this.createjs = this.createjs || {};
    a = a.PreloadJS = a.PreloadJS || {},
    a.version = "NEXT",
    a.buildDate = "Fri, 17 May 2013 14:32:22 GMT"
}(),
this.createjs = this.createjs || {},
function() {
    var a = function() {
        this.init()
    };
    a.prototype = {};
    var b = a.prototype
      , c = a;
    c.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([/.]*?(?:[^?]+)?\/)?((?:[^/?]+)\.(\w+))(?:\?(\S+)?)?$/,
    b.loaded = !1,
    b.canceled = !1,
    b.progress = 0,
    b._item = null,
    b._basePath = null,
    b.onProgress = null,
    b.onLoadStart = null,
    b.onComplete = null,
    b.onError = null,
    b.addEventListener = null,
    b.removeEventListener = null,
    b.removeAllEventListeners = null,
    b.dispatchEvent = null,
    b.hasEventListener = null,
    b._listeners = null,
    createjs.EventDispatcher.initialize(b),
    b.getItem = function() {
        return this._item
    }
    ,
    b.init = function() {}
    ,
    b.load = function() {}
    ,
    b.close = function() {}
    ,
    b._sendLoadStart = function() {
        this._isCanceled() || (this.onLoadStart && this.onLoadStart({
            target: this
        }),
        this.dispatchEvent("loadStart"),
        this.dispatchEvent("loadstart"))
    }
    ,
    b._sendProgress = function(a) {
        if (!this._isCanceled()) {
            var b = null;
            "number" == typeof a ? (this.progress = a,
            b = {
                loaded: this.progress,
                total: 1
            }) : (b = a,
            this.progress = a.loaded / a.total,
            (isNaN(this.progress) || 1 / 0 == this.progress) && (this.progress = 0)),
            b.target = this,
            b.type = "progress",
            b.progress = this.progress,
            this.onProgress && this.onProgress(b),
            this.dispatchEvent(b)
        }
    }
    ,
    b._sendComplete = function() {
        this._isCanceled() || (this.onComplete && this.onComplete({
            target: this
        }),
        this.dispatchEvent("complete"))
    }
    ,
    b._sendError = function(a) {
        this._isCanceled() || (null == a && (a = {}),
        a.target = this,
        a.type = "error",
        this.onError && this.onError(a),
        this.dispatchEvent(a))
    }
    ,
    b._isCanceled = function() {
        return null == window.createjs || this.canceled ? !0 : !1
    }
    ,
    b._parseURI = function(a) {
        return a ? a.match(c.FILE_PATTERN) : null
    }
    ,
    b._formatQueryString = function(a, b) {
        if (null == a)
            throw new Error("You must specify data.");
        var c = [];
        for (var d in a)
            c.push(d + "=" + escape(a[d]));
        return b && (c = c.concat(b)),
        c.join("&")
    }
    ,
    b.buildPath = function(a, b, c) {
        if (null != b) {
            var d = this._parseURI(a);
            (null == d[1] || "" == d[1]) && (a = b + a)
        }
        if (null == c)
            return a;
        var e = []
          , f = a.indexOf("?");
        if (-1 != f) {
            var g = a.slice(f + 1);
            e = e.concat(g.split("&"))
        }
        return -1 != f ? a.slice(0, f) + "?" + this._formatQueryString(c, e) : a + "?" + this._formatQueryString(c, e)
    }
    ,
    b.toString = function() {
        return "[PreloadJS AbstractLoader]"
    }
    ,
    createjs.AbstractLoader = a
}(),
this.createjs = this.createjs || {},
function() {
    var a = function(a, b) {
        this.init(a, b)
    }
      , b = a.prototype = new createjs.AbstractLoader
      , c = a;
    c.LOAD_TIMEOUT = 8e3,
    c.BINARY = "binary",
    c.CSS = "css",
    c.IMAGE = "image",
    c.JAVASCRIPT = "javascript",
    c.JSON = "json",
    c.JSONP = "jsonp",
    c.SOUND = "sound",
    c.SVG = "svg",
    c.TEXT = "text",
    c.XML = "xml",
    c.POST = "POST",
    c.GET = "GET",
    b.useXHR = !0,
    b.stopOnError = !1,
    b.maintainScriptOrder = !0,
    b.next = null,
    b.onFileLoad = null,
    b.onFileProgress = null,
    b._typeCallbacks = null,
    b._extensionCallbacks = null,
    b._loadStartWasDispatched = !1,
    b._maxConnections = 1,
    b._currentlyLoadingScript = null,
    b._currentLoads = null,
    b._loadQueue = null,
    b._loadQueueBackup = null,
    b._loadItemsById = null,
    b._loadItemsBySrc = null,
    b._loadedResults = null,
    b._loadedRawResults = null,
    b._numItems = 0,
    b._numItemsLoaded = 0,
    b._scriptOrder = null,
    b._loadedScripts = null,
    b.init = function(a, b) {
        this._numItems = this._numItemsLoaded = 0,
        this._paused = !1,
        this._loadStartWasDispatched = !1,
        this._currentLoads = [],
        this._loadQueue = [],
        this._loadQueueBackup = [],
        this._scriptOrder = [],
        this._loadedScripts = [],
        this._loadItemsById = {},
        this._loadItemsBySrc = {},
        this._loadedResults = {},
        this._loadedRawResults = {},
        this._typeCallbacks = {},
        this._extensionCallbacks = {},
        this._basePath = b,
        this.setUseXHR(a)
    }
    ,
    b.setUseXHR = function(a) {
        return this.useXHR = 0 != a && null != window.XMLHttpRequest,
        this.useXHR
    }
    ,
    b.removeAll = function() {
        this.remove()
    }
    ,
    b.remove = function(a) {
        var b = null;
        if (!a || a instanceof Array) {
            if (a)
                b = a;
            else if (arguments.length > 0)
                return
        } else
            b = [a];
        var c = !1;
        if (b) {
            for (; b.length; ) {
                var d = b.pop()
                  , e = this.getResult(d);
                for (f = this._loadQueue.length - 1; f >= 0; f--)
                    if (g = this._loadQueue[f].getItem(),
                    g.id == d || g.src == d) {
                        this._loadQueue.splice(f, 1)[0].cancel();
                        break
                    }
                for (f = this._loadQueueBackup.length - 1; f >= 0; f--)
                    if (g = this._loadQueueBackup[f].getItem(),
                    g.id == d || g.src == d) {
                        this._loadQueueBackup.splice(f, 1)[0].cancel();
                        break
                    }
                if (e)
                    delete this._loadItemsById[e.id],
                    delete this._loadItemsBySrc[e.src],
                    this._disposeItem(e);
                else
                    for (var f = this._currentLoads.length - 1; f >= 0; f--) {
                        var g = this._currentLoads[f].getItem();
                        if (g.id == d || g.src == d) {
                            this._currentLoads.splice(f, 1)[0].cancel(),
                            c = !0;
                            break
                        }
                    }
            }
            c && this._loadNext()
        } else {
            this.close();
            for (var h in this._loadItemsById)
                this._disposeItem(this._loadItemsById[h]);
            this.init(this.useXHR)
        }
    }
    ,
    b.reset = function() {
        this.close();
        for (var a in this._loadItemsById)
            this._disposeItem(this._loadItemsById[a]);
        var b = [];
        for (i = 0,
        l = this._loadQueueBackup.length; l > i; i++)
            b.push(this._loadQueueBackup[i].getItem());
        this.loadManifest(b, !1)
    }
    ,
    c.isBinary = function(a) {
        switch (a) {
        case createjs.LoadQueue.IMAGE:
        case createjs.LoadQueue.BINARY:
            return !0;
        default:
            return !1
        }
    }
    ,
    b.installPlugin = function(a) {
        if (null != a && null != a.getPreloadHandlers) {
            var b = a.getPreloadHandlers();
            if (null != b.types)
                for (var c = 0, d = b.types.length; d > c; c++)
                    this._typeCallbacks[b.types[c]] = b.callback;
            if (null != b.extensions)
                for (c = 0,
                d = b.extensions.length; d > c; c++)
                    this._extensionCallbacks[b.extensions[c]] = b.callback
        }
    }
    ,
    b.setMaxConnections = function(a) {
        this._maxConnections = a,
        !this._paused && this._loadQueue.length > 0 && this._loadNext()
    }
    ,
    b.loadFile = function(a, b, c) {
        return null == a ? void this._sendError({
            text: "PRELOAD_NO_FILE"
        }) : (this._addItem(a, c),
        void this.setPaused(b !== !1 ? !1 : !0))
    }
    ,
    b.loadManifest = function(a, b, c) {
        var d = null;
        if (a instanceof Array) {
            if (0 == a.length)
                return void this._sendError({
                    text: "PRELOAD_MANIFEST_EMPTY"
                });
            d = a
        } else {
            if (null == a)
                return void this._sendError({
                    text: "PRELOAD_MANIFEST_NULL"
                });
            d = [a]
        }
        for (var e = 0, f = d.length; f > e; e++)
            this._addItem(d[e], c);
        this.setPaused(b !== !1 ? !1 : !0)
    }
    ,
    b.load = function() {
        this.setPaused(!1)
    }
    ,
    b.getItem = function(a) {
        return this._loadItemsById[a] || this._loadItemsBySrc[a]
    }
    ,
    b.getResult = function(a, b) {
        var c = this._loadItemsById[a] || this._loadItemsBySrc[a];
        if (null == c)
            return null;
        var d = c.id;
        return b && this._loadedRawResults[d] ? this._loadedRawResults[d] : this._loadedResults[d]
    }
    ,
    b.setPaused = function(a) {
        this._paused = a,
        this._paused || this._loadNext()
    }
    ,
    b.close = function() {
        for (; this._currentLoads.length; )
            this._currentLoads.pop().cancel();
        this._scriptOrder.length = 0,
        this._loadedScripts.length = 0,
        this.loadStartWasDispatched = !1
    }
    ,
    b._addItem = function(a, b) {
        var c = this._createLoadItem(a);
        if (null != c) {
            var d = this._createLoader(c, b);
            null != d && (this._loadQueue.push(d),
            this._loadQueueBackup.push(d),
            this._numItems++,
            this._updateProgress(),
            this.maintainScriptOrder && c.type == createjs.LoadQueue.JAVASCRIPT && d instanceof createjs.XHRLoader && (this._scriptOrder.push(c),
            this._loadedScripts.push(null)))
        }
    }
    ,
    b._createLoadItem = function(a) {
        var b = null;
        switch (typeof a) {
        case "string":
            b = {
                src: a
            };
            break;
        case "object":
            b = window.HTMLAudioElement && a instanceof HTMLAudioElement ? {
                tag: a,
                src: b.tag.src,
                type: createjs.LoadQueue.SOUND
            } : a
        }
        var c = this._parseURI(b.src);
        if (null != c && (b.ext = c[5]),
        null == b.type && (b.type = this._getTypeByExtension(b.ext)),
        b.type == createjs.LoadQueue.JSON && null != b.callback && (b.type = createjs.LoadQueue.JSONP),
        b.type == createjs.LoadQueue.JSONP && null == b.callback)
            throw new Error("callback is required for loading JSONP requests.");
        null == b.tag && (b.tag = this._createTag(b.type)),
        (null == b.id || "" == b.id) && (b.id = b.src);
        var d = this._typeCallbacks[b.type] || this._extensionCallbacks[b.ext];
        if (d) {
            var e = d(b.src, b.type, b.id, b.data);
            if (e === !1)
                return null;
            e === !0 || (null != e.src && (b.src = e.src),
            null != e.id && (b.id = e.id),
            null != e.tag && e.tag.load instanceof Function && (b.tag = e.tag),
            null != e.completeHandler && (b.completeHandler = e.completeHandler)),
            e.type && (b.type = e.type),
            c = this._parseURI(b.src),
            null != c && null != c[5] && (b.ext = c[5].toLowerCase())
        }
        return this._loadItemsById[b.id] = b,
        this._loadItemsBySrc[b.src] = b,
        b
    }
    ,
    b._createLoader = function(a, b) {
        var c = this.useXHR;
        switch (a.type) {
        case createjs.LoadQueue.JSON:
        case createjs.LoadQueue.XML:
        case createjs.LoadQueue.TEXT:
            c = !0;
            break;
        case createjs.LoadQueue.SOUND:
        case createjs.LoadQueue.JSONP:
            c = !1
        }
        return null == b && (b = this._basePath),
        c ? new createjs.XHRLoader(a,b) : new createjs.TagLoader(a,b)
    }
    ,
    b._loadNext = function() {
        if (!this._paused) {
            this._loadStartWasDispatched || (this._sendLoadStart(),
            this._loadStartWasDispatched = !0),
            this._numItems == this._numItemsLoaded && (this.loaded = !0,
            this._sendComplete(),
            this.next && this.next.load && this.next.load());
            for (var a = 0, b = this._loadQueue.length; b > a && !(this._currentLoads.length >= this._maxConnections); a++) {
                var c = this._loadQueue[a];
                if (this.maintainScriptOrder && c instanceof createjs.TagLoader && c.getItem().type == createjs.LoadQueue.JAVASCRIPT) {
                    if (this._currentlyLoadingScript)
                        continue;
                    this._currentlyLoadingScript = !0
                }
                this._loadQueue.splice(a, 1),
                a--,
                b--,
                this._loadItem(c)
            }
        }
    }
    ,
    b._loadItem = function(a) {
        a.addEventListener("progress", createjs.proxy(this._handleProgress, this)),
        a.addEventListener("complete", createjs.proxy(this._handleFileComplete, this)),
        a.addEventListener("error", createjs.proxy(this._handleFileError, this)),
        this._currentLoads.push(a),
        this._sendFileStart(a.getItem()),
        a.load()
    }
    ,
    b._handleFileError = function(a) {
        var b = a.target;
        this._numItemsLoaded++,
        this._updateProgress();
        var a = {
            item: b.getItem()
        };
        this._sendError(a),
        this.stopOnError || (this._removeLoadItem(b),
        this._loadNext())
    }
    ,
    b._handleFileComplete = function(a) {
        var b = a.target
          , c = b.getItem();
        if (this._loadedResults[c.id] = b.getResult(),
        b instanceof createjs.XHRLoader && (this._loadedRawResults[c.id] = b.getResult(!0)),
        this._removeLoadItem(b),
        this.maintainScriptOrder && c.type == createjs.LoadQueue.JAVASCRIPT) {
            if (!(b instanceof createjs.TagLoader))
                return this._loadedScripts[this._scriptOrder.indexOf(c)] = c,
                void this._checkScriptLoadOrder(b);
            this._currentlyLoadingScript = !1
        }
        this._processFinishedLoad(c, b)
    }
    ,
    b._processFinishedLoad = function(a, b) {
        this._numItemsLoaded++,
        this._updateProgress(),
        this._sendFileComplete(a, b),
        this._loadNext()
    }
    ,
    b._checkScriptLoadOrder = function() {
        for (var a = this._loadedScripts.length, b = 0; a > b; b++) {
            var c = this._loadedScripts[b];
            if (null === c)
                break;
            c !== !0 && (this._processFinishedLoad(c),
            this._loadedScripts[b] = !0,
            b--,
            a--)
        }
    }
    ,
    b._removeLoadItem = function(a) {
        for (var b = this._currentLoads.length, c = 0; b > c; c++)
            if (this._currentLoads[c] == a) {
                this._currentLoads.splice(c, 1);
                break
            }
    }
    ,
    b._handleProgress = function(a) {
        var b = a.target;
        this._sendFileProgress(b.getItem(), b.progress),
        this._updateProgress()
    }
    ,
    b._updateProgress = function() {
        var a = this._numItemsLoaded / this._numItems
          , b = this._numItems - this._numItemsLoaded;
        if (b > 0) {
            for (var c = 0, d = 0, e = this._currentLoads.length; e > d; d++)
                c += this._currentLoads[d].progress;
            a += c / b * (b / this._numItems)
        }
        this._sendProgress(a)
    }
    ,
    b._disposeItem = function(a) {
        delete this._loadedResults[a.id],
        delete this._loadedRawResults[a.id],
        delete this._loadItemsById[a.id],
        delete this._loadItemsBySrc[a.src]
    }
    ,
    b._createTag = function(a) {
        var b = null;
        switch (a) {
        case createjs.LoadQueue.IMAGE:
            return document.createElement("img");
        case createjs.LoadQueue.SOUND:
            return b = document.createElement("audio"),
            b.autoplay = !1,
            b;
        case createjs.LoadQueue.JSONP:
        case createjs.LoadQueue.JAVASCRIPT:
            return b = document.createElement("script"),
            b.type = "text/javascript",
            b;
        case createjs.LoadQueue.CSS:
            return b = document.createElement(this.useXHR ? "style" : "link"),
            b.rel = "stylesheet",
            b.type = "text/css",
            b;
        case createjs.LoadQueue.SVG:
            return this.useXHR ? b = document.createElement("svg") : (b = document.createElement("object"),
            b.type = "image/svg+xml"),
            b
        }
        return null
    }
    ,
    b._getTypeByExtension = function(a) {
        switch (a.toLowerCase()) {
        case "jpeg":
        case "jpg":
        case "gif":
        case "png":
        case "webp":
        case "bmp":
            return createjs.LoadQueue.IMAGE;
        case "ogg":
        case "mp3":
        case "wav":
            return createjs.LoadQueue.SOUND;
        case "json":
            return createjs.LoadQueue.JSON;
        case "xml":
            return createjs.LoadQueue.XML;
        case "css":
            return createjs.LoadQueue.CSS;
        case "js":
            return createjs.LoadQueue.JAVASCRIPT;
        case "svg":
            return createjs.LoadQueue.SVG;
        default:
            return createjs.LoadQueue.TEXT
        }
    }
    ,
    b._sendFileProgress = function(a, b) {
        if (this._isCanceled())
            return void this._cleanUp();
        var c = {
            target: this,
            type: "fileprogress",
            progress: b,
            loaded: b,
            total: 1,
            item: a
        };
        this.onFileProgress && this.onFileProgress(c),
        this.dispatchEvent(c)
    }
    ,
    b._sendFileComplete = function(a, b) {
        if (!this._isCanceled()) {
            var c = {
                target: this,
                type: "fileload",
                loader: b,
                item: a,
                result: this._loadedResults[a.id],
                rawResult: this._loadedRawResults[a.id]
            };
            a.completeHandler && a.completeHandler(c),
            this.onFileLoad && this.onFileLoad(c),
            this.dispatchEvent(c)
        }
    }
    ,
    b._sendFileStart = function(a) {
        var b = {
            target: this,
            type: "filestart",
            item: a
        };
        this.dispatchEvent(b)
    }
    ,
    b.toString = function() {
        return "[PreloadJS LoadQueue]"
    }
    ,
    c.proxy = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }
    ,
    createjs.LoadQueue = a,
    createjs.proxy || (createjs.proxy = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 2);
        return function() {
            return a.apply(b, Array.prototype.slice.call(arguments, 0).concat(c))
        }
    }
    );
    var d = function() {};
    d.init = function() {
        var a = navigator.userAgent;
        d.isFirefox = a.indexOf("Firefox") > -1,
        d.isOpera = null != window.opera,
        d.isChrome = a.indexOf("Chrome") > -1,
        d.isIOS = a.indexOf("iPod") > -1 || a.indexOf("iPhone") > -1 || a.indexOf("iPad") > -1
    }
    ,
    d.init(),
    createjs.LoadQueue.BrowserDetect = d,
    Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
        if (null == this)
            throw new TypeError;
        var b = Object(this)
          , c = b.length >>> 0;
        if (0 === c)
            return -1;
        var d = 0;
        if (arguments.length > 1 && (d = Number(arguments[1]),
        d != d ? d = 0 : 0 != d && 1 / 0 != d && d != -1 / 0 && (d = (d > 0 || -1) * Math.floor(Math.abs(d)))),
        d >= c)
            return -1;
        for (var e = d >= 0 ? d : Math.max(c - Math.abs(d), 0); c > e; e++)
            if (e in b && b[e] === a)
                return e;
        return -1
    }
    )
}(),
this.createjs = this.createjs || {},
function() {
    var a = function(a, b) {
        this.init(a, b)
    }
      , b = a.prototype = new createjs.AbstractLoader;
    b._loadTimeout = null,
    b._tagCompleteProxy = null,
    b._isAudio = !1,
    b._tag = null,
    b._jsonResult = null,
    b.init = function(a, b) {
        this._item = a,
        this._basePath = b,
        this._tag = a.tag,
        this._isAudio = window.HTMLAudioElement && a.tag instanceof HTMLAudioElement,
        this._tagCompleteProxy = createjs.proxy(this._handleLoad, this)
    }
    ,
    b.getResult = function() {
        return this._item.type == createjs.LoadQueue.JSONP ? this._jsonResult : this._tag
    }
    ,
    b.cancel = function() {
        this.canceled = !0,
        this._clean();
        this.getItem()
    }
    ,
    b.load = function() {
        var a = this._item
          , b = this._tag;
        clearTimeout(this._loadTimeout),
        this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), createjs.LoadQueue.LOAD_TIMEOUT),
        this._isAudio && (b.src = null,
        b.preload = "auto"),
        b.onerror = createjs.proxy(this._handleError, this),
        this._isAudio ? (b.onstalled = createjs.proxy(this._handleStalled, this),
        b.addEventListener("canplaythrough", this._tagCompleteProxy, !1)) : (b.onload = createjs.proxy(this._handleLoad, this),
        b.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this));
        var c = this.buildPath(a.src, this._basePath, a.values);
        switch (a.type) {
        case createjs.LoadQueue.CSS:
            b.href = c;
            break;
        case createjs.LoadQueue.SVG:
            b.data = c;
            break;
        default:
            b.src = c
        }
        if (a.type == createjs.LoadQueue.JSONP) {
            if (null == a.callback)
                throw new Error("callback is required for loading JSONP requests.");
            if (null != window[a.callback])
                throw new Error('JSONP callback "' + a.callback + '" already exists on window. You need to specify a different callback. Or re-name the current one.');
            window[a.callback] = createjs.proxy(this._handleJSONPLoad, this)
        }
        (a.type == createjs.LoadQueue.SVG || a.type == createjs.LoadQueue.JSONP || a.type == createjs.LoadQueue.JSON || a.type == createjs.LoadQueue.JAVASCRIPT || a.type == createjs.LoadQueue.CSS) && (this._startTagVisibility = b.style.visibility,
        b.style.visibility = "hidden",
        (document.body || document.getElementsByTagName("body")[0]).appendChild(b)),
        null != b.load && b.load()
    }
    ,
    b._handleJSONPLoad = function(a) {
        this._jsonResult = a
    }
    ,
    b._handleTimeout = function() {
        this._clean(),
        this._sendError({
            reason: "PRELOAD_TIMEOUT"
        })
    }
    ,
    b._handleStalled = function() {}
    ,
    b._handleError = function() {
        this._clean(),
        this._sendError()
    }
    ,
    b._handleReadyStateChange = function() {
        clearTimeout(this._loadTimeout);
        var a = this.getItem().tag;
        ("loaded" == a.readyState || "complete" == a.readyState) && this._handleLoad()
    }
    ,
    b._handleLoad = function() {
        if (!this._isCanceled()) {
            var a = this.getItem()
              , b = a.tag;
            if (!(this.loaded || this.isAudio && 4 !== b.readyState)) {
                switch (this.loaded = !0,
                a.type) {
                case createjs.LoadQueue.SVG:
                case createjs.LoadQueue.JSONP:
                    b.style.visibility = this._startTagVisibility,
                    (document.body || document.getElementsByTagName("body")[0]).removeChild(b)
                }
                this._clean(),
                this._sendComplete()
            }
        }
    }
    ,
    b._clean = function() {
        clearTimeout(this._loadTimeout);
        var a = this.getItem().tag;
        a.onload = null,
        a.removeEventListener && a.removeEventListener("canplaythrough", this._tagCompleteProxy, !1),
        a.onstalled = null,
        a.onprogress = null,
        a.onerror = null,
        a.parentNode && a.parentNode.removeChild(a);
        var b = this.getItem();
        b.type == createjs.LoadQueue.JSONP && (window[b.callback] = null)
    }
    ,
    b.toString = function() {
        return "[PreloadJS TagLoader]"
    }
    ,
    createjs.TagLoader = a
}(),
this.createjs = this.createjs || {},
function() {
    var a = function(a, b) {
        this.init(a, b)
    }
      , b = a.prototype = new createjs.AbstractLoader;
    b._request = null,
    b._loadTimeout = null,
    b._xhrLevel = 1,
    b._response = null,
    b._rawResponse = null,
    b.init = function(a, b) {
        this._item = a,
        this._basePath = b,
        !this._createXHR(a)
    }
    ,
    b.getResult = function(a) {
        return a && this._rawResponse ? this._rawResponse : this._response
    }
    ,
    b.cancel = function() {
        this.canceled = !0,
        this._clean(),
        this._request.abort()
    }
    ,
    b.load = function() {
        if (null == this._request)
            return void this._handleError();
        this._request.onloadstart = createjs.proxy(this._handleLoadStart, this),
        this._request.onprogress = createjs.proxy(this._handleProgress, this),
        this._request.onabort = createjs.proxy(this._handleAbort, this),
        this._request.onerror = createjs.proxy(this._handleError, this),
        this._request.ontimeout = createjs.proxy(this._handleTimeout, this),
        1 == this._xhrLevel && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), createjs.LoadQueue.LOAD_TIMEOUT)),
        this._request.onload = createjs.proxy(this._handleLoad, this),
        this._request.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this);
        try {
            this._item.values && this._item.method != createjs.LoadQueue.GET ? this._item.method == createjs.LoadQueue.POST && this._request.send(this._formatQueryString(this._item.values)) : this._request.send()
        } catch (a) {
            this._sendError({
                source: a
            })
        }
    }
    ,
    b.getAllResponseHeaders = function() {
        return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null
    }
    ,
    b.getResponseHeader = function(a) {
        return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(a) : null
    }
    ,
    b._handleProgress = function(a) {
        a.loaded > 0 && 0 == a.total || this._sendProgress({
            loaded: a.loaded,
            total: a.total
        })
    }
    ,
    b._handleLoadStart = function() {
        clearTimeout(this._loadTimeout),
        this._sendLoadStart()
    }
    ,
    b._handleAbort = function() {
        this._clean(),
        this._sendError()
    }
    ,
    b._handleError = function() {
        this._clean(),
        this._sendError()
    }
    ,
    b._handleReadyStateChange = function() {
        4 == this._request.readyState && this._handleLoad()
    }
    ,
    b._handleLoad = function() {
        if (!this.loaded) {
            if (this.loaded = !0,
            !this._checkError())
                return void this._handleError();
            this._response = this._getResponse(),
            this._clean();
            var a = this._generateTag();
            a && this._sendComplete()
        }
    }
    ,
    b._handleTimeout = function() {
        this._clean(),
        this._sendError({
            reason: "PRELOAD_TIMEOUT"
        })
    }
    ,
    b._checkError = function() {
        var a = parseInt(this._request.status);
        switch (a) {
        case 404:
        case 0:
            return !1
        }
        return !0
    }
    ,
    b._getResponse = function() {
        if (null != this._response)
            return this._response;
        if (null != this._request.response)
            return this._request.response;
        try {
            if (null != this._request.responseText)
                return this._request.responseText
        } catch (a) {}
        try {
            if (null != this._request.responseXML)
                return this._request.responseXML
        } catch (a) {}
        return null
    }
    ,
    b._createXHR = function(a) {
        var b = document.createElement("a");
        b.href = this.buildPath(a.src, this._basePath);
        var c = document.createElement("a");
        c.href = location.href;
        var d = "" != b.hostname && (b.port != c.port || b.protocol != c.protocol || b.hostname != c.hostname)
          , e = null;
        if (d && window.XDomainRequest)
            e = new XDomainRequest;
        else if (window.XMLHttpRequest)
            e = new XMLHttpRequest;
        else
            try {
                e = new ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (f) {
                try {
                    e = new ActiveXObject("Msxml2.XMLHTTP.3.0")
                } catch (f) {
                    try {
                        e = new ActiveXObject("Msxml2.XMLHTTP")
                    } catch (f) {
                        return !1
                    }
                }
            }
        a.type == createjs.LoadQueue.TEXT && e.overrideMimeType && e.overrideMimeType("text/plain; charset=x-user-defined"),
        this._xhrLevel = "string" == typeof e.responseType ? 2 : 1;
        var g = null;
        return g = a.method == createjs.LoadQueue.GET ? this.buildPath(a.src, this._basePath, a.values) : this.buildPath(a.src, this._basePath),
        e.open(a.method || createjs.LoadQueue.GET, g, !0),
        d && e instanceof XMLHttpRequest && 1 == this._xhrLevel && e.setRequestHeader("Origin", location.origin),
        a.values && a.method == createjs.LoadQueue.POST && e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
        createjs.LoadQueue.isBinary(a.type) && (e.responseType = "arraybuffer"),
        this._request = e,
        !0
    }
    ,
    b._clean = function() {
        clearTimeout(this._loadTimeout);
        var a = this._request;
        a.onloadstart = null,
        a.onprogress = null,
        a.onabort = null,
        a.onerror = null,
        a.onload = null,
        a.ontimeout = null,
        a.onloadend = null,
        a.onreadystatechange = null
    }
    ,
    b._generateTag = function() {
        var a = this._item.type
          , b = this._item.tag;
        switch (a) {
        case createjs.LoadQueue.IMAGE:
            return b.onload = createjs.proxy(this._handleTagReady, this),
            b.src = this.buildPath(this._item.src, this._basePath, this._item.values),
            this._rawResponse = this._response,
            this._response = b,
            !1;
        case createjs.LoadQueue.JAVASCRIPT:
            return b = document.createElement("script"),
            b.text = this._response,
            this._rawResponse = this._response,
            this._response = b,
            !0;
        case createjs.LoadQueue.CSS:
            var c = document.getElementsByTagName("head")[0];
            if (c.appendChild(b),
            b.styleSheet)
                b.styleSheet.cssText = this._response;
            else {
                var d = document.createTextNode(this._response);
                b.appendChild(d)
            }
            return this._rawResponse = this._response,
            this._response = b,
            !0;
        case createjs.LoadQueue.XML:
            var e = this._parseXML(this._response, "text/xml");
            return this._response = e,
            !0;
        case createjs.LoadQueue.SVG:
            var e = this._parseXML(this._response, "image/svg+xml");
            return this._rawResponse = this._response,
            null != e.documentElement ? (b.appendChild(e.documentElement),
            this._response = b) : this._response = e,
            !0;
        case createjs.LoadQueue.JSON:
            var f = {};
            try {
                f = JSON.parse(this._response)
            } catch (g) {
                f = g
            }
            return this._rawResponse = this._response,
            this._response = f,
            !0
        }
        return !0
    }
    ,
    b._parseXML = function(a, b) {
        var c = null;
        if (window.DOMParser) {
            var d = new DOMParser;
            c = d.parseFromString(a, b)
        } else
            c = new ActiveXObject("Microsoft.XMLDOM"),
            c.async = !1,
            c.loadXML(a);
        return c
    }
    ,
    b._handleTagReady = function() {
        this._sendComplete()
    }
    ,
    b.toString = function() {
        return "[PreloadJS XHRLoader]"
    }
    ,
    createjs.XHRLoader = a
}(),
"object" != typeof JSON && (JSON = {}),
function() {
    "use strict";
    function f(a) {
        return 10 > a ? "0" + a : a
    }
    function quote(a) {
        return escapable.lastIndex = 0,
        escapable.test(a) ? '"' + a.replace(escapable, function(a) {
            var b = meta[a];
            return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
    }
    function str(a, b) {
        var c, d, e, f, g, h = gap, i = b[a];
        switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)),
        "function" == typeof rep && (i = rep.call(b, a, i)),
        typeof i) {
        case "string":
            return quote(i);
        case "number":
            return isFinite(i) ? String(i) : "null";
        case "boolean":
        case "null":
            return String(i);
        case "object":
            if (!i)
                return "null";
            if (gap += indent,
            g = [],
            "[object Array]" === Object.prototype.toString.apply(i)) {
                for (f = i.length,
                c = 0; f > c; c += 1)
                    g[c] = str(c, i) || "null";
                return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]",
                gap = h,
                e
            }
            if (rep && "object" == typeof rep)
                for (f = rep.length,
                c = 0; f > c; c += 1)
                    "string" == typeof rep[c] && (d = rep[c],
                    e = str(d, i),
                    e && g.push(quote(d) + (gap ? ": " : ":") + e));
            else
                for (d in i)
                    Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i),
                    e && g.push(quote(d) + (gap ? ": " : ":") + e));
            return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}",
            gap = h,
            e
        }
    }
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }
    ,
    String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
        return this.valueOf()
    }
    );
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, rep;
    "function" != typeof JSON.stringify && (JSON.stringify = function(a, b, c) {
        var d;
        if (gap = "",
        indent = "",
        "number" == typeof c)
            for (d = 0; c > d; d += 1)
                indent += " ";
        else
            "string" == typeof c && (indent = c);
        if (rep = b,
        b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length))
            throw new Error("JSON.stringify");
        return str("", {
            "": a
        })
    }
    ),
    "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
        function walk(a, b) {
            var c, d, e = a[b];
            if (e && "object" == typeof e)
                for (c in e)
                    Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c),
                    void 0 !== d ? e[c] = d : delete e[c]);
            return reviver.call(a, b, e)
        }
        var j;
        if (text = String(text),
        cx.lastIndex = 0,
        cx.test(text) && (text = text.replace(cx, function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        })),
        /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
            return j = eval("(" + text + ")"),
            "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
        throw new SyntaxError("JSON.parse")
    }
    )
}(),
function() {
    "use strict";
    function a() {}
    function b(a, b) {
        for (var c = a.length; c--; )
            if (a[c].listener === b)
                return c;
        return -1
    }
    function c(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype
      , e = this
      , f = e.EventEmitter;
    d.getListeners = function(a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d)
                d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else
            b = d[a] || (d[a] = []);
        return b
    }
    ,
    d.flattenListeners = function(a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1)
            c.push(a[b].listener);
        return c
    }
    ,
    d.getListenersAsObject = function(a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {},
        b[a] = c),
        b || c
    }
    ,
    d.addListener = function(a, c) {
        var d, e = this.getListenersAsObject(a), f = "object" == typeof c;
        for (d in e)
            e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
                listener: c,
                once: !1
            });
        return this
    }
    ,
    d.on = c("addListener"),
    d.addOnceListener = function(a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    }
    ,
    d.once = c("addOnceListener"),
    d.defineEvent = function(a) {
        return this.getListeners(a),
        this
    }
    ,
    d.defineEvents = function(a) {
        for (var b = 0; b < a.length; b += 1)
            this.defineEvent(a[b]);
        return this
    }
    ,
    d.removeListener = function(a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f)
            f.hasOwnProperty(e) && (d = b(f[e], c),
            -1 !== d && f[e].splice(d, 1));
        return this
    }
    ,
    d.off = c("removeListener"),
    d.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    }
    ,
    d.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    }
    ,
    d.manipulateListeners = function(a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener, g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--; )
                f.call(this, b, c[d]);
        else
            for (d in b)
                b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }
    ,
    d.removeEvent = function(a) {
        var b, c = typeof a, d = this._getEvents();
        if ("string" === c)
            delete d[a];
        else if (a instanceof RegExp)
            for (b in d)
                d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else
            delete this._events;
        return this
    }
    ,
    d.removeAllListeners = c("removeEvent"),
    d.emitEvent = function(a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)
            if (g.hasOwnProperty(e))
                for (d = g[e].length; d--; )
                    c = g[e][d],
                    c.once === !0 && this.removeListener(a, c.listener),
                    f = c.listener.apply(this, b || []),
                    f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }
    ,
    d.trigger = c("emitEvent"),
    d.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }
    ,
    d.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a,
        this
    }
    ,
    d._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }
    ,
    d._getEvents = function() {
        return this._events || (this._events = {})
    }
    ,
    a.noConflict = function() {
        return e.EventEmitter = f,
        a
    }
    ,
    "function" == typeof define && define.amd ? define(function() {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
}
.call(this),
function(a) {
    "use strict";
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b,
        c
    }
    var c = document.documentElement
      , d = function() {};
    c.addEventListener ? d = function(a, b, c) {
        a.addEventListener(b, c, !1)
    }
    : c.attachEvent && (d = function(a, c, d) {
        a[c + d] = d.handleEvent ? function() {
            var c = b(a);
            d.handleEvent.call(d, c)
        }
        : function() {
            var c = b(a);
            d.call(a, c)
        }
        ,
        a.attachEvent("on" + c, a[c + d])
    }
    );
    var e = function() {};
    c.removeEventListener ? e = function(a, b, c) {
        a.removeEventListener(b, c, !1)
    }
    : c.detachEvent && (e = function(a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    }
    );
    var f = {
        bind: d,
        unbind: e
    };
    "function" == typeof define && define.amd ? define(f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(this),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(c, d) {
        return b(a, c, d)
    }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("eventie")) : a.imagesLoaded = b(a, a.EventEmitter, a.eventie)
}(window, function(a, b, c) {
    "use strict";
    function d(a, b) {
        for (var c in b)
            a[c] = b[c];
        return a
    }
    function e(a) {
        return "[object Array]" === m.call(a)
    }
    function f(a) {
        var b = [];
        if (e(a))
            b = a;
        else if ("number" == typeof a.length)
            for (var c = 0, d = a.length; d > c; c++)
                b.push(a[c]);
        else
            b.push(a);
        return b
    }
    function g(a, b, c) {
        if (!(this instanceof g))
            return new g(a,b);
        "string" == typeof a && (a = document.querySelectorAll(a)),
        this.elements = f(a),
        this.options = d({}, this.options),
        "function" == typeof b ? c = b : d(this.options, b),
        c && this.on("always", c),
        this.getImages(),
        j && (this.jqDeferred = new j.Deferred);
        var e = this;
        setTimeout(function() {
            e.check()
        })
    }
    function h(a) {
        this.img = a
    }
    function i(a) {
        this.src = a,
        n[a] = this
    }
    var j = a.jQuery
      , k = a.console
      , l = "undefined" != typeof k
      , m = Object.prototype.toString;
    g.prototype = new b,
    g.prototype.options = {},
    g.prototype.getImages = function() {
        this.images = [];
        for (var a = 0, b = this.elements.length; b > a; a++) {
            var c = this.elements[a];
            "IMG" === c.nodeName && this.addImage(c);
            var d = c.nodeType;
            if (d && (1 === d || 9 === d || 11 === d))
                for (var e = c.querySelectorAll("img"), f = 0, g = e.length; g > f; f++) {
                    var h = e[f];
                    this.addImage(h)
                }
        }
    }
    ,
    g.prototype.addImage = function(a) {
        var b = new h(a);
        this.images.push(b)
    }
    ,
    g.prototype.check = function() {
        function a(a, e) {
            return b.options.debug && l && k.log("confirm", a, e),
            b.progress(a),
            c++,
            c === d && b.complete(),
            !0
        }
        var b = this
          , c = 0
          , d = this.images.length;
        if (this.hasAnyBroken = !1,
        !d)
            return void this.complete();
        for (var e = 0; d > e; e++) {
            var f = this.images[e];
            f.on("confirm", a),
            f.check()
        }
    }
    ,
    g.prototype.progress = function(a) {
        this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded;
        var b = this;
        setTimeout(function() {
            b.emit("progress", b, a),
            b.jqDeferred && b.jqDeferred.notify && b.jqDeferred.notify(b, a)
        })
    }
    ,
    g.prototype.complete = function() {
        var a = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var b = this;
        setTimeout(function() {
            if (b.emit(a, b),
            b.emit("always", b),
            b.jqDeferred) {
                var c = b.hasAnyBroken ? "reject" : "resolve";
                b.jqDeferred[c](b)
            }
        })
    }
    ,
    j && (j.fn.imagesLoaded = function(a, b) {
        var c = new g(this,a,b);
        return c.jqDeferred.promise(j(this))
    }
    ),
    h.prototype = new b,
    h.prototype.check = function() {
        var a = n[this.img.src] || new i(this.img.src);
        if (a.isConfirmed)
            return void this.confirm(a.isLoaded, "cached was confirmed");
        if (this.img.complete && void 0 !== this.img.naturalWidth)
            return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
        var b = this;
        a.on("confirm", function(a, c) {
            return b.confirm(a.isLoaded, c),
            !0
        }),
        a.check()
    }
    ,
    h.prototype.confirm = function(a, b) {
        this.isLoaded = a,
        this.emit("confirm", this, b)
    }
    ;
    var n = {};
    return i.prototype = new b,
    i.prototype.check = function() {
        if (!this.isChecked) {
            var a = new Image;
            c.bind(a, "load", this),
            c.bind(a, "error", this),
            a.src = this.src,
            this.isChecked = !0
        }
    }
    ,
    i.prototype.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }
    ,
    i.prototype.onload = function(a) {
        this.confirm(!0, "onload"),
        this.unbindProxyEvents(a)
    }
    ,
    i.prototype.onerror = function(a) {
        this.confirm(!1, "onerror"),
        this.unbindProxyEvents(a)
    }
    ,
    i.prototype.confirm = function(a, b) {
        this.isConfirmed = !0,
        this.isLoaded = a,
        this.emit("confirm", this, b)
    }
    ,
    i.prototype.unbindProxyEvents = function(a) {
        c.unbind(a.target, "load", this),
        c.unbind(a.target, "error", this)
    }
    ,
    g
}),
function() {
    var a, b, c, d, e = this, f = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    };
    d = this.tweenutil,
    this.tweenutil = c = {},
    c.noConflict = function() {
        return e.tweenutil = d,
        c
    }
    ,
    b = this.createjs,
    c.SyncTween = a = function() {
        function a(a) {
            this._onComplete = f(this._onComplete, this),
            this._onChange = f(this._onChange, this),
            this._value = this._dest = (null != a ? a.value : void 0) || 0,
            this._target = (null != a ? a.target : void 0) || null,
            this._set = (null != a ? a.set : void 0) || null,
            this._wait = (null != a ? a.wait : void 0) || 0,
            this._duration = (null != a ? a.duration : void 0) || 0,
            this._ease = (null != a ? a.ease : void 0) || b.Ease.linear,
            this._tween = null
        }
        return a.prototype.value = function() {
            return this._value
        }
        ,
        a.prototype.dest = function(a) {
            return void 0 !== a ? (this._dest !== a && (this._dest = a,
            this._check(),
            this.dispatchEvent({
                type: "dest"
            })),
            this) : this._dest
        }
        ,
        a.prototype.target = function(a) {
            return void 0 !== a ? (this._target = a,
            this) : this._target
        }
        ,
        a.prototype.set = function(a) {
            return void 0 !== a ? (this._set = a,
            this) : this._set
        }
        ,
        a.prototype.wait = function(a) {
            return void 0 !== a ? (this._wait = a,
            this) : this._wait
        }
        ,
        a.prototype.duration = function(a) {
            return void 0 !== a ? (this._duration = a,
            this) : this._duration
        }
        ,
        a.prototype.ease = function(a) {
            return void 0 !== a ? (this._ease = a,
            this) : this._ease
        }
        ,
        a.prototype.synced = function() {
            return this._value === this._dest
        }
        ,
        a.prototype.syncValue = function() {
            return this.synced() || (this._value = this._dest,
            this._apply(),
            this.dispatchEvent({
                type: "change"
            }),
            this._check()),
            this
        }
        ,
        a.prototype.syncDest = function() {
            return this.dest(this.value())
        }
        ,
        a.prototype._check = function() {
            var a;
            return this._value !== this._dest ? (a = this._tween,
            a && this._destroy(a),
            this._tween = b.Tween.get({
                _: this._value
            }).wait(this._wait).to({
                _: this._dest
            }, this._duration, this._ease).call(this._onComplete),
            this._tween.addEventListener("change", this._onChange),
            a || this.dispatchEvent({
                type: "start"
            })) : this._tween ? (this._destroy(this._tween),
            this._tween = null,
            this.dispatchEvent({
                type: "end"
            })) : void 0
        }
        ,
        a.prototype._destroy = function(a) {
            return a.removeEventListener("change", this._onChange),
            a.setPaused(!0),
            b.Tween.removeTweens(a.target)
        }
        ,
        a.prototype._apply = function() {
            return "function" == typeof this._set ? this._target ? this._set.call(this._target, this._value) : this._set(this._value) : this._target && "string" == typeof this._set ? this._target[this._set] = this._value : void 0
        }
        ,
        a.prototype._onChange = function() {
            this._value = this._tween.target._,
            this._apply(),
            this.dispatchEvent({
                type: "change"
            })
        }
        ,
        a.prototype._onComplete = function() {
            return this._onChange(),
            this._destroy(this._tween),
            this._tween = null,
            this.dispatchEvent({
                type: "end"
            })
        }
        ,
        a
    }(),
    b.EventDispatcher.initialize(a.prototype),
    c.cssProxy = function(a, b) {
        return function(c) {
            return this.style[a] = String(c) + b
        }
    }
}
.call(this),
function() {
    var a, b, c, d, e, f, g = this, h = {}.hasOwnProperty, i = function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b)
            h.call(b, d) && (a[d] = b[d]);
        return c.prototype = b.prototype,
        a.prototype = new c,
        a.__super__ = b.prototype,
        a
    };
    f = this.scrolltween,
    this.scrolltween = d = {},
    d.noConflict = function() {
        return g.scrolltween = f,
        d
    }
    ,
    c = this.createjs,
    e = this.tweenutil,
    a = this.$,
    d.ScrollTween = b = function(b) {
        function d(b) {
            var e;
            this._scrollTarget = b.scrollTarget,
            e = a(this._scrollTarget),
            d.__super__.constructor.call(this, {
                value: a(this._scrollTarget).scrollTop(),
                duration: 500,
                ease: c.Ease.cubicOut,
                target: e,
                set: e.scrollTop
            })
        }
        return i(d, b),
        d.prototype.scrollTarget = function() {
            return this._scrollTarget
        }
        ,
        d.prototype.to = function(b) {
            return this.dest(a(this._scrollTarget).scrollTop()),
            this.syncValue(),
            this.dest(b),
            this
        }
        ,
        d
    }(e.SyncTween)
}
.call(this);
