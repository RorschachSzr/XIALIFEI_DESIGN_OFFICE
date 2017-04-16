(function() {
    var a, b, c, d, e, f, g, h, i, j, k = {}.hasOwnProperty, l = function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b)
            k.call(b, d) && (a[d] = b[d]);
        return c.prototype = b.prototype,
        a.prototype = new c,
        a.__super__ = b.prototype,
        a
    }, m = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    };
    a = function(a) {
        function c() {
            this._scroll = new scrolltween.ScrollTween({
                scrollTarget: window
            }),
            c.__super__.constructor.apply(this, arguments),
            this._init()
        }
        return l(c, a),
        c.prototype._init = function() {
            return createjs.Ticker.useRAF = !0,
            createjs.Ticker.setFPS(60),
            _.defer(function() {
                return $("[data-map]").foolmaps()
            }),
            $('a[href^="#"]').on("click", function(a) {
                return function(b) {
                    var c, d;
                    return b.preventDefault(),
                    /^[a-z0-9_-]+$/i.test(d = $(b.currentTarget).attr("href").substr(1)) && (c = null,
                    c && c.length || (c = $("#" + d)),
                    c && c.length || (c = $('a[name="' + d + '"]')),
                    c && c.length) ? a._scroll.duration(500).ease(createjs.Ease.cubicInOut).to(c.offset().top) : void 0
                }
            }(this)),
            this._worksArchive(),
            this._worksSingle(),
            this._news()
        }
        ,
        c.prototype._worksArchive = function() {
            return $("body.works.archive").each(function() {
                return function() {
                    return new j
                }
            }(this))
        }
        ,
        c.prototype._worksSingle = function() {
            return $("body.works.single").each(function(a) {
                return function() {
                    var c, d, e;
                    return e = $("[data-fade-image]").map(function(d, e) {
                        return new b({
                            el: e
                        }).on("done", function(b) {
                            return c(b, a._area())
                        })
                    }),
                    c = function(a, b) {
                        var c, d;
                        if (!(a.p$().dest() > 0))
                            return c = {
                                width: a.$el.width(),
                                height: a.$el.height()
                            },
                            d = a.$el.offset(),
                            c.x = d.left,
                            c.y = d.top,
                            g.intersect(b, c) ? a.p$().dest(1) : a.p$().dest(1).syncValue()
                    }
                    ,
                    d = function() {
                        var b, d, f, g, h;
                        for (b = a._area(),
                        h = [],
                        f = 0,
                        g = e.length; g > f; f++)
                            d = e[f],
                            d.done() && h.push(c(d, b));
                        return h
                    }
                    ,
                    d(),
                    $(window).on("scroll resize", _.throttle(d, 100))
                }
            }(this)),
            $("body.works.single").each(function(a) {
                return function() {
                    var b, c, d, e;
                    return b = $("[data-anchor-body]"),
                    c = $("[data-anchor-indicator]"),
                    d = function() {
                        var c, d, e, f, g, h, i;
                        if (!b.length)
                            return null;
                        for (e = b.slice(0).sort(function(a, b) {
                            return $(a).offset().top - $(b).offset().top
                        }),
                        d = a._area(),
                        h = 0,
                        i = e.length; i > h; h++)
                            if (f = e[h],
                            c = $(f),
                            d.y < c.offset().top + c.height()) {
                                g = f;
                                break
                            }
                        return null != g ? g : e[e.length - 1]
                    }
                    ,
                    e = function() {
                        var a, b, e, f, g, h, i;
                        if (b = d()) {
                            for (e = $(b).attr("data-anchor-body"),
                            i = [],
                            g = 0,
                            h = c.length; h > g; g++)
                                f = c[g],
                                a = $(f),
                                i.push(a.attr("data-anchor-indicator") === e ? a.addClass("selected") : a.removeClass("selected"));
                            return i
                        }
                    }
                    ,
                    e(),
                    $(window).on("scroll resize", _.throttle(e, 100))
                }
            }(this)),
            $("body.works.single").each(function(a) {
                return function() {
                    var b, c, d, e, f;
                    return d = function() {
                        var a, d, f, g;
                        for (f = $("[data-fix-border]"),
                        g = [],
                        a = 0,
                        d = f.length; d > a; a++)
                            c = f[a],
                            b = $(c),
                            e = b.attr("data-fix-border"),
                            g.push({
                                border: b,
                                target: $('[data-fix-target="' + e + '"]')
                            });
                        return g
                    }(),
                    f = function() {
                        var b, c, e, f, g;
                        for (b = a._area(),
                        g = [],
                        e = 0,
                        f = d.length; f > e; e++)
                            c = d[e],
                            g.push(c.border.offset().top < b.y ? c.target.css({
                                position: "fixed",
                                top: 0
                            }) : c.target.css({
                                position: "static",
                                top: null
                            }));
                        return g
                    }
                    ,
                    f(),
                    $(window).on("scroll resize", f)
                }
            }(this)),
            $("body.works.single").each(function() {
                return function() {
                    var a;
                    return a = function() {
                        var a, b;
                        return a = $("[data-fit-image]").css({
                            maxHeight: $(window).innerHeight() - 30,
                            maxWidth: $("[data-fit-image]").parent().width()
                        }).filter(function() {
                            return $(this).width() > 0 && $(this).height() > 0
                        }),
                        b = Number.MAX_VALUE,
                        a.filter(function() {
                            return $(this).width() <= $(this).height()
                        }).each(function() {
                            return $(this).width() >= b ? void 0 : b = $(this).width()
                        }).each(function() {
                            return $(this).css({
                                maxWidth: Math.min(b, $(this).parent().width())
                            })
                        }),
                        b = Number.MAX_VALUE,
                        a.filter(function() {
                            return $(this).width() > $(this).height()
                        }).each(function() {
                            return $(this).width() >= b ? void 0 : b = $(this).width()
                        }).each(function() {
                            return $(this).css({
                                maxWidth: Math.min(b, $(this).parent().width())
                            })
                        })
                    }
                    ,
                    a(),
                    $(window).on("resize", a),
                    $("[data-fit-image]").imagesLoaded().progress(a)
                }
            }(this))
        }
        ,
        c.prototype._news = function() {
            return $("body.news").each(function() {
                return function() {
                    return $("form").on("submit", function(a) {
                        var b, c, d, e;
                        return a.preventDefault(),
                        (e = $(a.currentTarget).find('input[type="search"]').val()) ? (b = encodeURIComponent(e.replace(/\//g, " ")),
                        c = $(a.currentTarget).attr("data-target"),
                        d = "" + c + "/search/" + b,
                        location.href = d) : void 0
                    })
                }
            }(this))
        }
        ,
        c.prototype._area = function() {
            return {
                x: $(window).scrollLeft(),
                y: $(window).scrollTop(),
                width: $(window).width(),
                height: $(window).innerHeight()
            }
        }
        ,
        c
    }(createjs.EventDispatcher),
    j = function() {
        function a() {
            this._revolve = m(this._revolve, this),
            this._activate = m(this._activate, this),
            this._alloc = m(this._alloc, this),
            this._onLoadFail = m(this._onLoadFail, this),
            this._onLoadDone = m(this._onLoadDone, this),
            this._marginLeft = 50,
            this._marginRight = 50,
            this._unitWidth = 0,
            this._unitHeight = 0,
            this._marginX = 28,
            this._marginY = 0,
            this._lists = {},
            this._init()
        }
        return a.prototype._init = function() {
            return this._load()
        }
        ,
        a.prototype._load = function() {
            return $.ajax({
                url: $("body").attr("data-api"),
                data: {
                    limit: 1e3
                },
                dataType: "json"
            }).done(this._onLoadDone).fail(this._onLoadFail)
        }
        ,
        a.prototype._onLoadDone = function(a) {
            var b, d, e, f, g, j, k, l, m, n;
            for (f = a.data.slice(0).sort(function(a, b) {
                var c, d;
                switch (c = +new Date(a.post_date),
                d = +new Date(b.post_date),
                !1) {
                case !(c > d):
                    return -1;
                case !(d > c):
                    return 1;
                default:
                    return 0
                }
            }),
            this._unitWidth = f[0].meta_data_thumb.unit_width,
            this._unitHeight = f[0].meta_data_thumb.unit_height,
            $("[data-category]").each(function(a) {
                return function(b, d) {
                    return a._lists[$(d).attr("data-category")] = new c({
                        el: $(d).find("[data-list]").get(0),
                        marginX: a._marginX,
                        marginY: a._marginY,
                        unitWidth: a._unitWidth
                    })
                }
            }(this)),
            m = function() {
                var a, b, c;
                for (c = [],
                a = 0,
                b = f.length; b > a; a++)
                    e = f[a],
                    c.push(new h(e));
                return c
            }(),
            g = 0,
            k = m.length; k > g; g++)
                for (d = m[g],
                n = d.get("categories"),
                j = 0,
                l = n.length; l > j; j++)
                    b = n[j],
                    b in this._lists && this._lists[b].add(new i({
                        model: d
                    }));
            return $(window).on("resize", this._alloc),
            this._alloc(),
            $(window).on("resize scroll", _.debounce(this._activate, 100)),
            this._activate(),
            $("#s").addClass("intro"),
            this._pulse()
        }
        ,
        a.prototype._onLoadFail = function() {
            return console.log("fail")
        }
        ,
        a.prototype._pulse = function() {
            var a, b, c, d;
            return a = null,
            c = function(b) {
                return function() {
                    return a = setTimeout(function() {
                        return b._revolve(),
                        d(),
                        c()
                    }, _.num.random(750, 3e3))
                }
            }(this),
            d = function() {
                return function() {
                    return clearTimeout(a)
                }
            }(this),
            b = !0,
            $(window).on("resize scroll", function() {
                return function() {
                    return b ? (b = !1,
                    d(),
                    $("body").css({
                        pointerEvents: "none"
                    })) : void 0
                }
            }(this)).on("resize scroll", _.debounce(function() {
                return function() {
                    return b ? void 0 : (b = !0,
                    c(),
                    $("body").css({
                        pointerEvents: "auto"
                    }))
                }
            }(this), 75)),
            c()
        }
        ,
        a.prototype._alloc = function() {
            var a, b, c, d, e, f, h, i, j, k, l, m, n, o, p, q;
            if (b = Math.floor(($(window).width() - this._marginLeft - this._marginRight) / (this._unitWidth + this._marginX)),
            2 > b && (b = 2),
            !(3 > b)) {
                if ($("#s").removeClass("n").css({
                    width: (this._unitWidth + this._marginX) * b - this._marginX
                }),
                $("#s>section>header").css({
                    width: "100%"
                }),
                $("#h>div, #f>div").css({
                    width: (this._unitWidth + this._marginX) * b
                }),
                $("body>.header").css({
                    maxWidth: (this._unitWidth + this._marginX) * b,
                    minWidth: (this._unitWidth + this._marginX) * b
                }),
                f = function() {
                    var a, b, c, e;
                    for (c = _.values(this._lists),
                    e = [],
                    a = 0,
                    b = c.length; b > a; a++)
                        d = c[a],
                        e.push(_.num.add.apply(null, function() {
                            var a, b, c, e;
                            for (c = d.views(),
                            e = [],
                            a = 0,
                            b = c.length; b > a; a++)
                                h = c[a],
                                e.push(h.count());
                            return e
                        }()));
                    return e
                }
                .call(this),
                a = g.alloc(b, f),
                _.any(_.values(this._lists), function(a) {
                    return a.count() !== b
                })) {
                    n = _.values(this._lists);
                    for (c in n)
                        d = n[c],
                        d.count(a[c]).render()
                }
                for (e = Math.max.apply(null, function() {
                    var a, b, c, e;
                    for (c = _.values(this._lists),
                    e = [],
                    a = 0,
                    b = c.length; b > a; a++)
                        d = c[a],
                        e.push(d.$el.height());
                    return e
                }
                .call(this)),
                o = _.values(this._lists),
                q = [],
                j = 0,
                l = o.length; l > j; j++)
                    d = o[j],
                    q.push(d.$el.css({
                        height: e
                    }));
                return q
            }
            if ($("#s").addClass("n").css({
                width: "100%"
            }),
            $("#s>section>header").css({
                width: (this._unitWidth + this._marginX) * b - this._marginX
            }),
            $("#h>div, #f>div").css({
                width: (this._unitWidth + this._marginX) * b - this._marginX
            }),
            $("body>.header").css({
                maxWidth: (this._unitWidth + this._marginX) * b - this._marginX,
                minWidth: (this._unitWidth + this._marginX) * b - this._marginX
            }),
            _.any(_.values(this._lists), function(a) {
                return a.count() !== b
            })) {
                for (m = _.values(this._lists),
                p = [],
                i = 0,
                k = m.length; k > i; i++)
                    d = m[i],
                    p.push(d.count(b).render());
                return p
            }
        }
        ,
        a.prototype._activate = function() {
            var a, b, c, d, e, f, g, h, i;
            for (h = this._viewsByVisibility(),
            c = h[0],
            a = h[1],
            d = 0,
            f = c.length; f > d; d++)
                b = c[d],
                b.model.load(),
                b.a(!0);
            for (i = [],
            e = 0,
            g = a.length; g > e; e++)
                b = a[e],
                i.push(b.a(!1));
            return i
        }
        ,
        a.prototype._revolve = function() {
            var a, b, c, d, e, f, g, h;
            if (f = this._viewsByVisibility(),
            d = f[0],
            e = f[1],
            d = _.filter(d, function(a) {
                return _.all(a.sprites(), function(a) {
                    return a.s$().synced()
                })
            }),
            d.length) {
                c = d[Math.floor(Math.random() * d.length)],
                g = c.sprites(),
                h = [];
                for (a in g)
                    b = g[a],
                    h.push(b.s$().wait(75 * a).duration(1e3).ease(createjs.Ease.cubicInOut).dest(b.s$().dest() + 1));
                return h
            }
        }
        ,
        a.prototype._viewsByVisibility = function() {
            var a, b, c, d, e, f, h, i, j, k, l;
            for (a = {
                x: $(window).scrollLeft(),
                y: $(window).scrollTop(),
                width: $(window).width(),
                height: $(window).innerHeight()
            },
            h = _.flatten(function() {
                var a, b;
                a = this._lists,
                b = [];
                for (c in a)
                    e = a[c],
                    b.push(e.views());
                return b
            }
            .call(this)),
            i = [],
            d = [],
            j = 0,
            k = h.length; k > j; j++)
                f = h[j],
                b = {
                    width: f.$el.width(),
                    height: f.$el.height()
                },
                l = f.$el.offset(),
                b.x = l.left,
                b.y = l.top,
                g.intersect(a, b) ? i.push(f) : d.push(f);
            return [i, d]
        }
        ,
        a
    }(),
    $(document).on("ready", function() {
        return new a
    }),
    h = function(a) {
        function b() {
            return this._onError = m(this._onError, this),
            this._onComplete = m(this._onComplete, this),
            b.__super__.constructor.apply(this, arguments)
        }
        return l(b, a),
        b.prototype.data = function() {
            return this._data
        }
        ,
        b.prototype.dpr = function() {
            return this._dpr
        }
        ,
        b.prototype.size = function() {
            return this._size
        }
        ,
        b.prototype.image = function() {
            return this._image
        }
        ,
        b.prototype.loading = function() {
            return !!this._queue && !this._image
        }
        ,
        b.prototype.loaded = function() {
            return !!this._image
        }
        ,
        b.prototype.initialize = function() {
            return this._data = null,
            this._dpr = 0,
            this._size = null,
            this._queue = null,
            this._image = null,
            b.__super__.initialize.apply(this, arguments),
            this._init()
        }
        ,
        b.prototype._init = function() {
            return this._data = this.get("meta_data_thumb"),
            this._dpr = 1,
            this._size = this._data.sizes[this._dpr]
        }
        ,
        b.prototype.load = function() {
            return this._queue || (this._queue = new createjs.LoadQueue,
            this._queue.addEventListener("complete", this._onComplete),
            this._queue.addEventListener("error", this._onError),
            this._queue.loadFile({
                id: "*",
                src: this._size.url
            })),
            this
        }
        ,
        b.prototype._onComplete = function() {
            return this._queue.removeEventListener("complete", this._onComplete),
            this._queue.removeEventListener("error", this._onError),
            this._image = this._queue.getResult("*"),
            this.trigger("complete", this),
            !1
        }
        ,
        b.prototype._onError = function() {
            return this._queue.removeEventListener("complete", this._onComplete),
            this._queue.removeEventListener("error", this._onError),
            this.trigger("error", this),
            !1
        }
        ,
        b
    }(Backbone.Model),
    d = function(a) {
        function b(a) {
            this._ops = a,
            this._p = 0,
            this._p$ = null,
            this._bitmap = null,
            b.__super__.constructor.apply(this, arguments),
            this._init()
        }
        return l(b, a),
        b.prototype.p = function(a) {
            return void 0 !== a ? (this._p !== a && (this._p = a,
            this._onP()),
            this) : this._p
        }
        ,
        b.prototype.p$ = function() {
            return this._p$ || (this._p$ = new tweenutil.SyncTween({
                value: this._p,
                duration: 1e3,
                ease: createjs.Ease.cubicInOut,
                target: this,
                set: this.p
            }))
        }
        ,
        b.prototype._init = function() {
            return this._bitmap = new createjs.Bitmap(this._ops.image),
            this.addChild(this._bitmap),
            this.mask = new createjs.Shape,
            this.mask.graphics.f("#000").dr(0, 0, this._ops.unitWidth, this._ops.unitHeight),
            this._onP()
        }
        ,
        b.prototype._onP = function() {
            var a;
            return a = _.num.loop(this._p, 0, this._ops.count),
            this._bitmap.x = 0,
            this._bitmap.y = Math.round(a * this._ops.unitHeight * -1)
        }
        ,
        b
    }(createjs.Container),
    e = function(a) {
        function b(a) {
            this._ops = a,
            this._p = 0,
            this._sprites = null,
            b.__super__.constructor.apply(this, arguments),
            this._init()
        }
        return l(b, a),
        b.prototype.sprites = function() {
            return this._sprites
        }
        ,
        b.prototype._init = function() {
            var a, b;
            return this._sprites = function() {
                var c, d, e;
                for (e = [],
                a = c = 0,
                d = this._ops.count; d >= 0 ? d > c : c > d; a = d >= 0 ? ++c : --c)
                    b = new f({
                        upperIndex: this._ops.upperIndex,
                        lowerIndex: a,
                        image: this._ops.image,
                        count: this._ops.count,
                        unitWidth: this._ops.unitWidth,
                        unitHeight: this._ops.unitHeight
                    }),
                    b.x = b.mask.x = 0,
                    b.y = b.mask.y = (this._ops.unitHeight + this._ops.margin) * a,
                    e.push(this.addChild(b));
                return e
            }
            .call(this)
        }
        ,
        b
    }(createjs.Container),
    f = function(a) {
        function b(a) {
            this._ops = a,
            this._p = 0,
            this._p$ = null,
            this._sprites = null,
            b.__super__.constructor.apply(this, arguments),
            this._init()
        }
        return l(b, a),
        b.prototype.p = function(a) {
            return void 0 !== a ? (this._p !== a && (this._p = a,
            this._onP()),
            this) : this._p
        }
        ,
        b.prototype.p$ = function() {
            return this._p$ || (this._p$ = new tweenutil.SyncTween({
                value: this._p,
                duration: 1e3,
                ease: createjs.Ease.cubicInOut,
                target: this,
                set: this.p
            }))
        }
        ,
        b.prototype.s$ = function() {
            return this._sprites[0].p$()
        }
        ,
        b.prototype._init = function() {
            return this._sprites = [this.addChild(new d(this._ops)), this.addChild(new d(this._ops))],
            this._sprites[0].p$().dest(this._ops.upperIndex).syncValue(),
            this._sprites[1].p(this._ops.lowerIndex),
            this.mask = new createjs.Shape,
            this.mask.graphics.f("#000").dr(0, 0, this._ops.unitWidth, this._ops.unitHeight),
            this._onP()
        }
        ,
        b.prototype._onP = function() {
            var a, b, c, d, e;
            b = _.num.pinch(this._p, 0, 1),
            d = this._sprites,
            e = [];
            for (a in d)
                c = d[a],
                c.x = c.mask.x = 0,
                e.push(c.y = c.mask.y = a * this._ops.unitHeight - b * this._ops.unitHeight);
            return e
        }
        ,
        b
    }(createjs.Container),
    g = function() {
        function a() {}
        return a.alloc = function(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m;
            if (a < b.length)
                throw new Error;
            for (g = a - b.length,
            i = _.num.add.apply(null, b),
            e = i * (b.length / a),
            f = e / b.length,
            h = function() {
                var a, c, d;
                for (d = [],
                a = 0,
                c = b.length; c > a; a++)
                    j = b[a],
                    d.push(Math.max(j - f, 0));
                return d
            }(),
            d = this._alloc(g, h),
            m = [],
            k = 0,
            l = d.length; l > k; k++)
                c = d[k],
                m.push(c + 1);
            return m
        }
        ,
        a._alloc = function(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o, p;
            for (l = _.num.add.apply(null, b),
            f = function() {
                var c, d, e;
                for (e = [],
                c = 0,
                d = b.length; d > c; c++)
                    m = b[c],
                    e.push(a * (m / l));
                return e
            }(),
            d = function() {
                var a, b, d;
                for (d = [],
                a = 0,
                b = f.length; b > a; a++)
                    c = f[a],
                    d.push(Math.floor(c));
                return d
            }(),
            j = a - _.num.add.apply(null, d),
            e = n = 0; j >= 0 ? j > n : n > j; e = j >= 0 ? ++n : --n) {
                for (i = Number.MIN_VALUE,
                h = -1,
                g = o = 0,
                p = b.length; p >= 0 ? p > o : o > p; g = p >= 0 ? ++o : --o)
                    k = f[g] - d[g],
                    k > i && (i = k,
                    h = g);
                d[h] += 1
            }
            return d
        }
        ,
        a.intersect = function(a, b) {
            return b.y + b.height > a.y && b.y < a.y + a.height && b.x + b.width > a.x && b.x < a.x + a.width
        }
        ,
        a
    }(),
    b = function(a) {
        function b() {
            return b.__super__.constructor.apply(this, arguments)
        }
        return l(b, a),
        b.prototype.p = function(a) {
            return void 0 !== a ? (this._p !== a && (this._p = a,
            this._onP()),
            this) : this._p
        }
        ,
        b.prototype.p$ = function() {
            return this._p$ || (this._p$ = new tweenutil.SyncTween({
                value: this._p,
                wait: 100,
                duration: 250,
                ease: createjs.Ease.linear,
                target: this,
                set: this.p
            }))
        }
        ,
        b.prototype.done = function() {
            return this._done
        }
        ,
        b.prototype.initialize = function() {
            return this._p = 0,
            this._p$ = null,
            this._done = !1,
            b.__super__.initialize.apply(this, arguments),
            this._init()
        }
        ,
        b.prototype._init = function() {
            var a, b;
            return this._p = parseFloat(this.$el.css("opacity")),
            this._onP(),
            a = imagesLoaded(this.el).on("done", b = function(c) {
                return function() {
                    return a.off("done", b),
                    c._done = !0,
                    c.trigger("done", c)
                }
            }(this))
        }
        ,
        b.prototype._onP = function() {
            var a;
            return a = _.num.pinch(this._p, 0, 1),
            this.$el.css("opacity", a)
        }
        ,
        b
    }(Backbone.AdhocView),
    c = function(a) {
        function b() {
            return b.__super__.constructor.apply(this, arguments)
        }
        return l(b, a),
        b.prototype.count = function(a) {
            return void 0 !== a ? (this._count !== a && (this._count = a,
            this.render()),
            this) : this._count
        }
        ,
        b.prototype.views = function() {
            return this._views
        }
        ,
        b.prototype.initialize = function(a) {
            return this._ops = a,
            this._count = 0,
            this._views = [],
            b.__super__.initialize.apply(this, arguments),
            this._init()
        }
        ,
        b.prototype._init = function() {}
        ,
        b.prototype.add = function(a) {
            return this.$el.append(a.el),
            this._views.push(a)
        }
        ,
        b.prototype.render = function() {
            var a, b, c, d, e, f, g, h, i;
            if (!(this._count <= 0)) {
                for (b = function() {
                    var a, b, d;
                    for (d = [],
                    c = a = 0,
                    b = this._count; b >= 0 ? b > a : a > b; c = b >= 0 ? ++a : --a)
                        d.push(0);
                    return d
                }
                .call(this),
                i = this._views,
                g = 0,
                h = i.length; h > g; g++) {
                    f = i[g],
                    d = Number.MAX_VALUE,
                    e = -1;
                    for (c in b)
                        a = b[c],
                        d > a && (d = a,
                        e = c);
                    f.$el.css({
                        left: e * (this._ops.unitWidth + this._ops.marginX),
                        top: d
                    }),
                    b[e] = d + f.$el.height() + this._ops.marginY
                }
                return this.$el.css({
                    width: (this._ops.unitWidth + this._ops.marginX) * this._count - this._ops.marginX,
                    height: Math.max(_.max(b) - this._ops.marginY, 0)
                }),
                this
            }
        }
        ,
        b
    }(Backbone.AdhocView),
    i = function(a) {
        function b() {
            return this._onTick = m(this._onTick, this),
            this._onMouseLeave = m(this._onMouseLeave, this),
            this._onMouseEnter = m(this._onMouseEnter, this),
            this._onComplete = m(this._onComplete, this),
            b.__super__.constructor.apply(this, arguments)
        }
        return l(b, a),
        b.prototype.tagName = "article",
        b.prototype.template = _.template('<% if (meta_new) { %><div class="n"><div></div></div><% } %>\n<div class="c"><a href="<%- permalink %>"><canvas></canvas></a></div>\n<h1><a href="<%- permalink %>"><% print(_.escape(meta_name).replace(/\\n/g, \'<br>\')) %></a></h1>'),
        b.prototype.a = function(a) {
            return void 0 !== a ? (this._a !== a && (this._a = a,
            this._onA()),
            this) : this._a
        }
        ,
        b.prototype.sprites = function() {
            var a;
            return (null != (a = this._root) ? a.sprites() : void 0) || []
        }
        ,
        b.prototype.count = function() {
            return this._data.count
        }
        ,
        b.prototype.initialize = function() {
            return this._a = !1,
            this._dpr = 0,
            this._data = null,
            this._size = null,
            this._margin = 0,
            this._stage = null,
            this._root = null,
            b.__super__.initialize.apply(this, arguments),
            this._init()
        }
        ,
        b.prototype._init = function() {
            return this._dpr = this.model.dpr(),
            this._data = this.model.data(),
            this._size = this.model.size(),
            this._margin = 6,
            this.$el.html(this.template(this.model.toJSON())).find("canvas").attr({
                width: this._data.unit_width * this._dpr,
                height: (this._data.unit_height * this._dpr + this._margin * this._dpr) * this._data.count - this._margin * this._dpr
            }).css({
                width: this._data.unit_width,
                height: (this._data.unit_height + this._margin) * this._data.count - this._margin
            }),
            this.model.on("complete", this._onComplete)
        }
        ,
        b.prototype._onComplete = function() {
            return this.model.off("complete", this._onComplete),
            this._build()
        }
        ,
        b.prototype._onMouseEnter = function() {
            var a, b, c, d;
            c = this._root.sprites(),
            d = [];
            for (a in c)
                b = c[a],
                d.push(b.p$().wait(10 * a).duration(350).ease(createjs.Ease.cubicOut).dest(1));
            return d
        }
        ,
        b.prototype._onMouseLeave = function() {
            var a, b, c, d, e, f, g, h;
            if (_.all(this._root.sprites(), function(a) {
                return 1 === a.p$().value()
            })) {
                e = this._root.sprites(),
                g = [];
                for (a in e)
                    b = e[a],
                    g.push(b.p$().wait(40 * a).duration(600).ease(createjs.Ease.cubicInOut).dest(0));
                return g
            }
            for (a = 0,
            f = this._root.sprites(),
            h = [],
            c = 0,
            d = f.length; d > c; c++)
                b = f[c],
                h.push(b.p$().value() ? b.p$().wait(10 * a++).duration(350).ease(createjs.Ease.cubicInOut).dest(0) : b.p$().dest(0));
            return h
        }
        ,
        b.prototype._onA = function() {
            return this._a ? createjs.Ticker.addEventListener("tick", this._onTick) : createjs.Ticker.removeEventListener("tick", this._onTick),
            this._build()
        }
        ,
        b.prototype._onTick = function(a) {
            return this._stage && this._stage.update(a)
        }
        ,
        b.prototype._build = function() {
            return !this._stage && this.model.loaded() && this._a ? (this._stage = new createjs.Stage(this.$("canvas").get(0)),
            this._stage.addChild(this._root = new e({
                upperIndex: Math.floor(Math.random() * this._data.count),
                lowerIndex: 0,
                image: this.model.image(),
                count: this._data.count,
                unitWidth: this._data.unit_width * this._dpr,
                unitHeight: this._data.unit_height * this._dpr,
                margin: this._margin * this._dpr
            })),
            Modernizr.touch || this.$("canvas").on("mouseenter", this._onMouseEnter).on("mouseleave", this._onMouseLeave),
            this.$el.addClass("intro")) : void 0
        }
        ,
        b
    }(Backbone.AdhocView)
}
).call(this);
