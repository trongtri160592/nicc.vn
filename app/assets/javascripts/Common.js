
    !function (t) {
        var e = window.webpackJsonp;
        window.webpackJsonp = function (i, r, s) {
            for (var a, l, c, u = 0, d = []; u < i.length; u++) l = i[u], n[l] && d.push(n[l][0]), n[l] = 0;
            for (a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
            for (e && e(i, r, s); d.length;) d.shift()();
            if (s) for (u = 0; u < s.length; u++) c = o(o.s = s[u]);
            return c
        };
        var i = {}, n = {11: 0};

        function o(e) {
            if (i[e]) return i[e].exports;
            var n = i[e] = {i: e, l: !1, exports: {}};
            return t[e].call(n.exports, n, n.exports, o), n.l = !0, n.exports
        }

        o.m = t, o.c = i, o.d = function (t, e, i) {
            o.o(t, e) || Object.defineProperty(t, e, {configurable: !1, enumerable: !0, get: i})
        }, o.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return o.d(e, "a", e), e
        }, o.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, o.p = "", o.oe = function (t) {
            throw console.error(t), t
        }, o(o.s = 135)
    }([function (t, e) {
        t.exports = jQuery
    }, , function (t, e) {
        t.exports = jQuery.ui
    }, function (t, e, i) {
        var n;
        void 0 === (n = function (t) {
            return {
                getSObject: function () {
                    return window.s
                }, getInstance: function () {
                    return window.s_gi(window.s_account)
                }
            }
        }.call(e, i, e, t)) || (t.exports = n)
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), i.d(e, "breakpoints", function () {
            return n
        }), i.d(e, "lang", function () {
            return o
        }), i.d(e, "CDN", function () {
            return r
        });
        var n = {small: 480, medium: 640, large: 1024, xlarge: 1280}, o = {
            Collapse: {en: "Collapse", es: "Reducir"},
            Expand: {en: "Expand", es: "Ampliar"},
            Section_Menu: {en: "Section Menu", es: "Menú de secciones"},
            Dictionary_More_Information: {en: "More information on dictionary page", es: "Más información"},
            Definition_Title: {en: "Definition", es: "Definición"},
            Definition_Show_Full: {en: "full definition", es: "toda la definición"},
            Show: {en: "Show", es: "Mostrar"},
            Hide: {en: "Hide", es: "Ocultar"},
            Search: {en: "Search", es: "Buscar"},
            Find_Trials: {en: "Find Trials", es: "Encontrar Pruebas"},
            CTS_Search_Hint: {en: "Start your search at any time.", es: "Comienzo su búsqueda en cualquier momento."},
            CTHPDropdown_Label: {en: "View more information", es: "Vea más información"}
        }, r = {
            jquery: "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js",
            jplayer: "https://cdnjs.cloudflare.com/ajax/libs/jplayer/2.9.2/jplayer/jquery.jplayer.min.js",
            select2: "https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/js/select2.min.js"
        }
    }, function (t, e, i) {
        "use strict";
        var n = i(24);
        i.d(e, "a", function () {
            return n.a
        });
        var o = i(25);
        i.d(e, "b", function () {
            return o.a
        })
    }, function (t, e, i) {
        "use strict";
        var n = i(60);
        i.d(e, "a", function () {
            return n.a
        });
        var o = i(62);
        i.d(e, "b", function () {
            return o.a
        })
    }, , function (t, e, i) {
        "use strict";
        i.d(e, "a", function () {
            return n
        });
        var n = function () {
            function t() {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.isInitialized = !1
            }

            return t.prototype.init = function () {
                this.isInitialized || (this.initialize(), this.isInitialized = !0)
            }, t.prototype.isDebug = function () {
                var t = !1, e = this.getQueryParameterByName("debug");
                return void 0 != e && "true" == e.toLowerCase() && (t = !0), t
            }, t.prototype.getQueryParameterByName = function (t, e) {
                e || (e = window.location.href), t = t.replace(/[\[\]]/g, "\\$&");
                var i = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
                return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
            }, t
        }()
    }, function (t, e) {
        var i = t.exports = {version: "2.5.6"};
        "number" == typeof __e && (__e = i)
    }, function (t, e, i) {
        var n = i(126)("wks"), o = i(85), r = i(31).Symbol, s = "function" == typeof r;
        (t.exports = function (t) {
            return n[t] || (n[t] = s && r[t] || (s ? r : o)("Symbol." + t))
        }).store = n
    }, , , , , , , , , , , , function (t, e) {
        var i;
        i = function () {
            return this
        }();
        try {
            i = i || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" == typeof window && (i = window)
        }
        t.exports = i
    }, function (t, e, i) {
        var n = i(31), o = i(9), r = i(32), s = i(122), a = i(123), l = function (t, e, i) {
            var c, u, d, f, p = t & l.F, h = t & l.G, g = t & l.S, v = t & l.P, y = t & l.B,
                m = h ? n : g ? n[e] || (n[e] = {}) : (n[e] || {}).prototype, w = h ? o : o[e] || (o[e] = {}),
                b = w.prototype || (w.prototype = {});
            for (c in h && (i = e), i) d = ((u = !p && m && void 0 !== m[c]) ? m : i)[c], f = y && u ? a(d, n) : v && "function" == typeof d ? a(Function.call, d) : d, m && s(m, c, d, t & l.U), w[c] != d && r(w, c, f), v && b[c] != d && (b[c] = d)
        };
        n.core = o, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, t.exports = l
    }, function (t, e, i) {
        "use strict";
        i.d(e, "a", function () {
            return n
        });
        var n = function (t) {
            function e() {
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), function (t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, t.call(this))
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, t), e
        }(i(8).a)
    }, function (t, e, i) {
        "use strict";
        i.d(e, "a", function () {
            return n
        });
        var n = function (t) {
            function e() {
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), function (t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, t.call(this))
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, t), e.prototype.initialize = function () {
                $(this.onReady.bind(this))
            }, e
        }(i(8).a)
    }, , , , function (t, e, i) {
        (function (e) {
            t.exports = e.Modernizr = i(81)
        }).call(e, i(22))
    }, function (t, e) {
        var i, n, o = t.exports = {};

        function r() {
            throw new Error("setTimeout has not been defined")
        }

        function s() {
            throw new Error("clearTimeout has not been defined")
        }

        function a(t) {
            if (i === setTimeout) return setTimeout(t, 0);
            if ((i === r || !i) && setTimeout) return i = setTimeout, setTimeout(t, 0);
            try {
                return i(t, 0)
            } catch (e) {
                try {
                    return i.call(null, t, 0)
                } catch (e) {
                    return i.call(this, t, 0)
                }
            }
        }

        !function () {
            try {
                i = "function" == typeof setTimeout ? setTimeout : r
            } catch (t) {
                i = r
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (t) {
                n = s
            }
        }();
        var l, c = [], u = !1, d = -1;

        function f() {
            u && l && (u = !1, l.length ? c = l.concat(c) : d = -1, c.length && p())
        }

        function p() {
            if (!u) {
                var t = a(f);
                u = !0;
                for (var e = c.length; e;) {
                    for (l = c, c = []; ++d < e;) l && l[d].run();
                    d = -1, e = c.length
                }
                l = null, u = !1, function (t) {
                    if (n === clearTimeout) return clearTimeout(t);
                    if ((n === s || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
                    try {
                        n(t)
                    } catch (e) {
                        try {
                            return n.call(null, t)
                        } catch (e) {
                            return n.call(this, t)
                        }
                    }
                }(t)
            }
        }

        function h(t, e) {
            this.fun = t, this.array = e
        }

        function g() {
        }

        o.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
            c.push(new h(t, e)), 1 !== c.length || u || a(p)
        }, h.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = g, o.addListener = g, o.once = g, o.off = g, o.removeListener = g, o.removeAllListeners = g, o.emit = g, o.prependListener = g, o.prependOnceListener = g, o.listeners = function (t) {
            return []
        }, o.binding = function (t) {
            throw new Error("process.binding is not supported")
        }, o.cwd = function () {
            return "/"
        }, o.chdir = function (t) {
            throw new Error("process.chdir is not supported")
        }, o.umask = function () {
            return 0
        }
    }, function (t, e) {
        var i = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = i)
    }, function (t, e, i) {
        var n = i(71), o = i(84);
        t.exports = i(74) ? function (t, e, i) {
            return n.f(t, e, o(1, i))
        } : function (t, e, i) {
            return t[e] = i, t
        }
    }, function (t, e, i) {
        var n, o, r, s;
        "function" == typeof Symbol && Symbol.iterator;
        s = function (t, e) {
            t.NCI || (t.NCI = {}), t.NCI.scroll_to = function (i, n) {
                var o = this;
                o.$el = t(i), o.el = i, o.scroll = function () {
                    o.options = t.extend({}, t.NCI.scroll_to.defaultOptions, n);
                    var i = o.options.anchor || o.$el.attr("href"), r = t(i),
                        s = t(o.options.header).outerHeight() || 0, a = window.innerWidth || t(window).width(),
                        l = window.scrollY || window.pageYOffset, c = o.options.fuzz,
                        u = r.length > 0 ? r.offset().top : 0, d = 0;
                    "load" === o.options.event && (l < u - s - c || l > u + c / 2) && 0 !== l ? console.log("restoring previous scroll state") : (d = a > e.breakpoints.large && "#all" == i ? t("#main h1:first").offset().top - s : u - s, t(".headroom-area").addClass("frozen"), t('[tabindex="1"]').focus(), t(window).one("scroll.scrollTo", function () {
                        setTimeout(function () {
                            window.scrollTo(0, d), t(".headroom-area").removeClass("frozen")
                        }, 150)
                    }), window.scrollTo(0, d))
                }, o.scroll()
            }, t.NCI.scroll_to.defaultOptions = {
                anchor: null,
                event: "click",
                header: ".fixedtotop",
                fuzz: 45
            }, t.fn.NCI_scroll_to = function (e) {
                return this.each(function () {
                    new t.NCI.scroll_to(this, e)
                })
            }
        }, o = [i(0), i(4)], void 0 === (r = "function" == typeof(n = s) ? n.apply(e, o) : n) || (t.exports = r)
    }, , function (t, e, i) {
        "use strict";
        i.d(e, "b", function () {
            return n
        }), i.d(e, "d", function () {
            return o
        }), i.d(e, "c", function () {
            return r
        }), i.d(e, "a", function () {
            return s
        });
        var n = function (t, e) {
            for (var i = !1; t && t.parentNode;) {
                if (t.classList.contains(e)) {
                    i = !0;
                    break
                }
                t = t.parentNode
            }
            return i
        }, o = function (t) {
            var e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document).querySelectorAll(t);
            return e ? Array.from(e) : []
        }, r = function (t) {
            var e = document.createElement("div");
            return e.innerHTML = t, Array.from(e.childNodes)
        }, s = function (t, e) {
            return t.map(function (t) {
                return e.appendChild(t)
            })
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , function (t, e, i) {
        "use strict";
        var n = i(61);
        i.d(e, "a", function () {
            return n.a
        })
    }, function (t, e, i) {
        "use strict";
        i.d(e, "a", function () {
            return n
        });
        var n = function t() {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.ClinicalTrialsAPIServer = "clinicaltrialsapi.cancer.gov", this.GoogleAPIKey = "AIzaSyB0DtmqLHmCLjAMjGfNh9myktZYz2-yIfg"
        }
    }, function (t, e, i) {
        "use strict";
        i.d(e, "a", function () {
            return r
        });
        var n = i(6), o = i(0);
        i.n(o);
        var r = function () {
            function t() {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.defaultConfiguration = new n.a
            }

            return t.prototype.getConfiguration = function () {
                var t = this.defaultConfiguration;
                if ("undefined" != typeof CDEConfig) {
                    var e = window.location.hostname;
                    if (e in CDEConfig.environmentConfig) {
                        console.log("Loading overrides for '" + e + "'");
                        var i = CDEConfig.environmentConfig[e];
                        t = o.extend({}, this.defaultConfiguration, i)
                    }
                }
                return t
            }, t
        }()
    }, , , , , , , function (t, e, i) {
        var n;
        void 0 === (n = function (t) {
            var e = i(0);
            var n = !1;
            return {
                init: function () {
                    var t;
                    n || (t = "www.cancer.gov/", "undefined" != typeof s && s.pageName && (t = s.pageName), e(".on-this-page").each(function (i, n) {
                        e(n).on("click", "a", function (i) {
                            var n = e(this), o = n.text();
                            NCIAnalytics.OnThisPageClick(n, o, t)
                        })
                    }), n = !0)
                }
            }
        }.call(e, i, e, t)) || (t.exports = n)
    }, function (t, e) {
        t.exports = function (t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function (t, e, i) {
        var n = i(72), o = i(143), r = i(144), s = Object.defineProperty;
        e.f = i(74) ? Object.defineProperty : function (t, e, i) {
            if (n(t), e = r(e, !0), n(i), o) try {
                return s(t, e, i)
            } catch (t) {
            }
            if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
            return "value" in i && (t[e] = i.value), t
        }
    }, function (t, e, i) {
        var n = i(73);
        t.exports = function (t) {
            if (!n(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function (t, e) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function (t, e, i) {
        t.exports = !i(83)(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, e) {
        var i = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return i.call(t, e)
        }
    }, function (t, e, i) {
        var n;
        void 0 === (n = function (t) {
            var e = i(0);
            i(2);
            var n = i(4);

            function o(t, i) {
                var n = e(t), o = {
                    heightStyle: "content",
                    header: "h2",
                    collapsible: !0,
                    active: !1,
                    beforeActivate: function (t, i) {
                        var o, r = e(this).accordion("option", "icons"),
                            s = (o = i.newHeader[0] ? i.newHeader : i.oldHeader).next(".ui-accordion-content"),
                            a = "true" == o.attr("aria-selected");
                        return o.toggleClass("ui-corner-all", a).toggleClass("accordion-header-active ui-state-active ui-corner-top", !a).attr("aria-selected", (!a).toString()).attr("aria-expanded", (!a).toString()), r.header !== r.activeHeader && o.children(".ui-icon").toggleClass(r.header, a).toggleClass(r.activeHeader, !a), s.toggleClass("accordion-content-active", !a), a ? s.slideUp(function () {
                            n.trigger("accordionactivate", i)
                        }) : s.slideDown(function () {
                            n.trigger("accordionactivate", i)
                        }), !1
                    },
                    icons: {header: "toggle", activeHeader: "toggle"}
                }, r = e.extend({}, o, i);
                n.length > 0 && n.accordion(r)
            }

            function r(t) {
                e(t).length > 0 && e(t).each(function () {
                    void 0 !== e(this).data("ui-accordion") && e(this).accordion("destroy")
                })
            }

            return {
                doAccordion: function (t, e) {
                    o(t, e)
                }, undoAccordion: function (t) {
                    r(t)
                }, makeAllAccordions: function () {
                    !function () {
                        var t = {
                            ".accordion": 'h2:not([data-display-excludedevice~="mobile"] h2)',
                            "#nvcgRelatedResourcesArea": "h6",
                            "#cgvCitationSl": "h6",
                            ".cthp-content": "h3"
                        }, i = [], s = [];
                        for (var a in t) t.hasOwnProperty(a) && (i.push(a + ".ui-accordion"), s.push(a + " " + t[a]));
                        var l = i.join(", "), c = s.join(", ");

                        function u() {
                            var i, s = window.innerWidth || e(window).width();
                            if (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor) && window.innerWidth === e(window).width() + 15 && (s = e(window).width()), s <= n.breakpoints.medium && 0 === e(l).length || e(".accordion").hasClass("desktop") && 0 === e(l).length) {
                                for (i in e(c).each(function () {
                                    var t = e(this), i = t.nextAll();
                                    (i.length > 0 || t.next().is("ul, ol")) && !i.is(".clearfix") && t.nextUntil(e(c)).wrapAll('<div class="clearfix"></div>')
                                }), t) t.hasOwnProperty(i) && o(i, {header: t[i]});
                                e(".ui-accordion-header").each(function (t) {
                                    t % 2 == 0 ? e(this).addClass("odd") : e(this).addClass("even")
                                })
                            } else if (s > n.breakpoints.medium && !e(".accordion").hasClass("desktop")) for (i in t) t.hasOwnProperty(i) && r(i, t[i])
                        }

                        e(window).on("resize", function () {
                            u()
                        }), u()
                    }()
                }
            }
        }.call(e, i, e, t)) || (t.exports = n)
    }, function (t, e, i) {
        var n, o, r;
        !function (s) {
            "use strict";
            o = [i(0)], void 0 === (r = "function" == typeof(n = s) ? n.apply(e, o) : n) || (t.exports = r)
        }(function (t) {
            "use strict";
            var e = window.Slick || {};
            (e = function () {
                var e = 0;
                return function (i, n) {
                    var o, r = this;
                    r.defaults = {
                        accessibility: !0,
                        adaptiveHeight: !1,
                        appendArrows: t(i),
                        appendDots: t(i),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function (e, i) {
                            return t('<button type="button" />').text(i + 1)
                        },
                        dots: !1,
                        dotsClass: "slick-dots",
                        draggable: !0,
                        easing: "linear",
                        edgeFriction: .35,
                        fade: !1,
                        focusOnSelect: !1,
                        focusOnChange: !1,
                        infinite: !0,
                        initialSlide: 0,
                        lazyLoad: "ondemand",
                        mobileFirst: !1,
                        pauseOnHover: !0,
                        pauseOnFocus: !0,
                        pauseOnDotsHover: !1,
                        respondTo: "window",
                        responsive: null,
                        rows: 1,
                        rtl: !1,
                        slide: "",
                        slidesPerRow: 1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500,
                        swipe: !0,
                        swipeToSlide: !1,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        useTransform: !0,
                        variableWidth: !1,
                        vertical: !1,
                        verticalSwiping: !1,
                        waitForAnimate: !0,
                        zIndex: 1e3
                    }, r.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        scrolling: !1,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        swiping: !1,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1,
                        unslicked: !1
                    }, t.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = t(i), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = t(i).data("slick") || {}, r.options = t.extend({}, r.defaults, n, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = t.proxy(r.autoPlay, r), r.autoPlayClear = t.proxy(r.autoPlayClear, r), r.autoPlayIterator = t.proxy(r.autoPlayIterator, r), r.changeSlide = t.proxy(r.changeSlide, r), r.clickHandler = t.proxy(r.clickHandler, r), r.selectHandler = t.proxy(r.selectHandler, r), r.setPosition = t.proxy(r.setPosition, r), r.swipeHandler = t.proxy(r.swipeHandler, r), r.dragHandler = t.proxy(r.dragHandler, r), r.keyHandler = t.proxy(r.keyHandler, r), r.instanceUid = e++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
                }
            }()).prototype.activateADA = function () {
                this.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
            }, e.prototype.addSlide = e.prototype.slickAdd = function (e, i, n) {
                var o = this;
                if ("boolean" == typeof i) n = i, i = null; else if (i < 0 || i >= o.slideCount) return !1;
                o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : n ? t(e).insertBefore(o.$slides.eq(i)) : t(e).insertAfter(o.$slides.eq(i)) : !0 === n ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (e, i) {
                    t(i).attr("data-slick-index", e)
                }), o.$slidesCache = o.$slides, o.reinit()
            }, e.prototype.animateHeight = function () {
                var t = this;
                if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                    var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                    t.$list.animate({height: e}, t.options.speed)
                }
            }, e.prototype.animateSlide = function (e, i) {
                var n = {}, o = this;
                o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (e = -e), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({left: e}, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({top: e}, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), t({animStart: o.currentLeft}).animate({animStart: e}, {
                    duration: o.options.speed,
                    easing: o.options.easing,
                    step: function (t) {
                        t = Math.ceil(t), !1 === o.options.vertical ? (n[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(n))
                    },
                    complete: function () {
                        i && i.call()
                    }
                })) : (o.applyTransition(), e = Math.ceil(e), !1 === o.options.vertical ? n[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function () {
                    o.disableTransition(), i.call()
                }, o.options.speed))
            }, e.prototype.getNavTarget = function () {
                var e = this.options.asNavFor;
                return e && null !== e && (e = t(e).not(this.$slider)), e
            }, e.prototype.asNavFor = function (e) {
                var i = this.getNavTarget();
                null !== i && "object" == typeof i && i.each(function () {
                    var i = t(this).slick("getSlick");
                    i.unslicked || i.slideHandler(e, !0)
                })
            }, e.prototype.applyTransition = function (t) {
                var e = this, i = {};
                !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
            }, e.prototype.autoPlay = function () {
                var t = this;
                t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
            }, e.prototype.autoPlayClear = function () {
                this.autoPlayTimer && clearInterval(this.autoPlayTimer)
            }, e.prototype.autoPlayIterator = function () {
                var t = this, e = t.currentSlide + t.options.slidesToScroll;
                t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
            }, e.prototype.buildArrows = function () {
                var e = this;
                !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                    "aria-disabled": "true",
                    tabindex: "-1"
                }))
            }, e.prototype.buildDots = function () {
                var e, i, n = this;
                if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
                    for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
                    n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
                }
            }, e.prototype.buildOut = function () {
                var e = this;
                e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, i) {
                    t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
                }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
            }, e.prototype.buildRows = function () {
                var t, e, i, n, o, r, s, a = this;
                if (n = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 0) {
                    for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), t = 0; t < o; t++) {
                        var l = document.createElement("div");
                        for (e = 0; e < a.options.rows; e++) {
                            var c = document.createElement("div");
                            for (i = 0; i < a.options.slidesPerRow; i++) {
                                var u = t * s + (e * a.options.slidesPerRow + i);
                                r.get(u) && c.appendChild(r.get(u))
                            }
                            l.appendChild(c)
                        }
                        n.appendChild(l)
                    }
                    a.$slider.empty().append(n), a.$slider.children().children().children().css({
                        width: 100 / a.options.slidesPerRow + "%",
                        display: "inline-block"
                    })
                }
            }, e.prototype.checkResponsive = function (e, i) {
                var n, o, r, s = this, a = !1, l = s.$slider.width(), c = window.innerWidth || t(window).width();
                if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                    for (n in o = null, s.breakpoints) s.breakpoints.hasOwnProperty(n) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[n] && (o = s.breakpoints[n]) : r > s.breakpoints[n] && (o = s.breakpoints[n]));
                    null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || i) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e), a = o), e || !1 === a || s.$slider.trigger("breakpoint", [s, a])
                }
            }, e.prototype.changeSlide = function (e, i) {
                var n, o, r = this, s = t(e.currentTarget);
                switch (s.is("a") && e.preventDefault(), s.is("li") || (s = s.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
                    case"previous":
                        o = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
                        break;
                    case"next":
                        o = 0 === n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
                        break;
                    case"index":
                        var a = 0 === e.data.index ? 0 : e.data.index || s.index() * r.options.slidesToScroll;
                        r.slideHandler(r.checkNavigable(a), !1, i), s.children().trigger("focus");
                        break;
                    default:
                        return
                }
            }, e.prototype.checkNavigable = function (t) {
                var e, i;
                if (i = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1]; else for (var n in e) {
                    if (t < e[n]) {
                        t = i;
                        break
                    }
                    i = e[n]
                }
                return t
            }, e.prototype.cleanUpEvents = function () {
                var e = this;
                e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
            }, e.prototype.cleanUpSlideEvents = function () {
                var e = this;
                e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
            }, e.prototype.cleanUpRows = function () {
                var t, e = this;
                e.options.rows > 0 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(t))
            }, e.prototype.clickHandler = function (t) {
                !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
            }, e.prototype.destroy = function (e) {
                var i = this;
                i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
                    t(this).attr("style", t(this).data("originalStyling"))
                }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
            }, e.prototype.disableTransition = function (t) {
                var e = this, i = {};
                i[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
            }, e.prototype.fadeSlide = function (t, e) {
                var i = this;
                !1 === i.cssTransitions ? (i.$slides.eq(t).css({zIndex: i.options.zIndex}), i.$slides.eq(t).animate({opacity: 1}, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
                    opacity: 1,
                    zIndex: i.options.zIndex
                }), e && setTimeout(function () {
                    i.disableTransition(t), e.call()
                }, i.options.speed))
            }, e.prototype.fadeSlideOut = function (t) {
                var e = this;
                !1 === e.cssTransitions ? e.$slides.eq(t).animate({
                    opacity: 0,
                    zIndex: e.options.zIndex - 2
                }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
                    opacity: 0,
                    zIndex: e.options.zIndex - 2
                }))
            }, e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
                var e = this;
                null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
            }, e.prototype.focusHandler = function () {
                var e = this;
                e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (i) {
                    i.stopImmediatePropagation();
                    var n = t(this);
                    setTimeout(function () {
                        e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay())
                    }, 0)
                })
            }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
                return this.currentSlide
            }, e.prototype.getDotCount = function () {
                var t = this, e = 0, i = 0, n = 0;
                if (!0 === t.options.infinite) if (t.slideCount <= t.options.slidesToShow) ++n; else for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else if (!0 === t.options.centerMode) n = t.slideCount; else if (t.options.asNavFor) for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
                return n - 1
            }, e.prototype.getLeft = function (t) {
                var e, i, n, o, r = this, s = 0;
                return r.slideOffset = 0, i = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = i * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && t + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (t > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (t - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (t - r.slideCount)) * i * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * i * -1))) : t + r.options.slidesToShow > r.slideCount && (r.slideOffset = (t + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (t + r.options.slidesToShow - r.slideCount) * i), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), e = !1 === r.options.vertical ? t * r.slideWidth * -1 + r.slideOffset : t * i * -1 + s, !0 === r.options.variableWidth && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow), e = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === r.options.centerMode && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow + 1), e = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (r.$list.width() - n.outerWidth()) / 2)), e
            }, e.prototype.getOption = e.prototype.slickGetOption = function (t) {
                return this.options[t]
            }, e.prototype.getNavigableIndexes = function () {
                var t, e = this, i = 0, n = 0, o = [];
                for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); i < t;) o.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                return o
            }, e.prototype.getSlick = function () {
                return this
            }, e.prototype.getSlideCount = function () {
                var e, i, n = this;
                return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function (o, r) {
                    if (r.offsetLeft - i + t(r).outerWidth() / 2 > -1 * n.swipeLeft) return e = r, !1
                }), Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
            }, e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
                this.changeSlide({data: {message: "index", index: parseInt(t)}}, e)
            }, e.prototype.init = function (e) {
                var i = this;
                t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
            }, e.prototype.initADA = function () {
                var e = this, i = Math.ceil(e.slideCount / e.options.slidesToShow),
                    n = e.getNavigableIndexes().filter(function (t) {
                        return t >= 0 && t < e.slideCount
                    });
                e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                    "aria-hidden": "true",
                    tabindex: "-1"
                }).find("a, input, button, select").attr({tabindex: "-1"}), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (i) {
                    var o = n.indexOf(i);
                    if (t(this).attr({
                        role: "tabpanel",
                        id: "slick-slide" + e.instanceUid + i,
                        tabindex: -1
                    }), -1 !== o) {
                        var r = "slick-slide-control" + e.instanceUid + o;
                        t("#" + r).length && t(this).attr({"aria-describedby": r})
                    }
                }), e.$dots.attr("role", "tablist").find("li").each(function (o) {
                    var r = n[o];
                    t(this).attr({role: "presentation"}), t(this).find("button").first().attr({
                        role: "tab",
                        id: "slick-slide-control" + e.instanceUid + o,
                        "aria-controls": "slick-slide" + e.instanceUid + r,
                        "aria-label": o + 1 + " of " + i,
                        "aria-selected": null,
                        tabindex: "-1"
                    })
                }).eq(e.currentSlide).find("button").attr({"aria-selected": "true", tabindex: "0"}).end());
                for (var o = e.currentSlide, r = o + e.options.slidesToShow; o < r; o++) e.options.focusOnChange ? e.$slides.eq(o).attr({tabindex: "0"}) : e.$slides.eq(o).removeAttr("tabindex");
                e.activateADA()
            }, e.prototype.initArrowEvents = function () {
                var t = this;
                !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)))
            }, e.prototype.initDotEvents = function () {
                var e = this;
                !0 === e.options.dots && e.slideCount > e.options.slidesToShow && (t("li", e.$dots).on("click.slick", {message: "index"}, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
            }, e.prototype.initSlideEvents = function () {
                var e = this;
                e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
            }, e.prototype.initializeEvents = function () {
                var e = this;
                e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {action: "start"}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {action: "move"}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {action: "end"}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(e.setPosition)
            }, e.prototype.initUI = function () {
                var t = this;
                !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
            }, e.prototype.keyHandler = function (t) {
                var e = this;
                t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({data: {message: !0 === e.options.rtl ? "next" : "previous"}}) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({data: {message: !0 === e.options.rtl ? "previous" : "next"}}))
            }, e.prototype.lazyLoad = function () {
                var e, i, n, o = this;

                function r(e) {
                    t("img[data-lazy]", e).each(function () {
                        var e = t(this), i = t(this).attr("data-lazy"), n = t(this).attr("data-srcset"),
                            r = t(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                            s = document.createElement("img");
                        s.onload = function () {
                            e.animate({opacity: 0}, 100, function () {
                                n && (e.attr("srcset", n), r && e.attr("sizes", r)), e.attr("src", i).animate({opacity: 1}, 200, function () {
                                    e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                                }), o.$slider.trigger("lazyLoaded", [o, e, i])
                            })
                        }, s.onerror = function () {
                            e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, e, i])
                        }, s.src = i
                    })
                }

                if (!0 === o.options.centerMode ? !0 === o.options.infinite ? n = (i = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (i = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), n = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (i = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, n = Math.ceil(i + o.options.slidesToShow), !0 === o.options.fade && (i > 0 && i--, n <= o.slideCount && n++)), e = o.$slider.find(".slick-slide").slice(i, n), "anticipated" === o.options.lazyLoad) for (var s = i - 1, a = n, l = o.$slider.find(".slick-slide"), c = 0; c < o.options.slidesToScroll; c++) s < 0 && (s = o.slideCount - 1), e = (e = e.add(l.eq(s))).add(l.eq(a)), s--, a++;
                r(e), o.slideCount <= o.options.slidesToShow ? r(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? r(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && r(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
            }, e.prototype.loadSlider = function () {
                var t = this;
                t.setPosition(), t.$slideTrack.css({opacity: 1}), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
            }, e.prototype.next = e.prototype.slickNext = function () {
                this.changeSlide({data: {message: "next"}})
            }, e.prototype.orientationChange = function () {
                this.checkResponsive(), this.setPosition()
            }, e.prototype.pause = e.prototype.slickPause = function () {
                this.autoPlayClear(), this.paused = !0
            }, e.prototype.play = e.prototype.slickPlay = function () {
                var t = this;
                t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
            }, e.prototype.postSlide = function (e) {
                var i = this;
                i.unslicked || (i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
            }, e.prototype.prev = e.prototype.slickPrev = function () {
                this.changeSlide({data: {message: "previous"}})
            }, e.prototype.preventDefault = function (t) {
                t.preventDefault()
            }, e.prototype.progressiveLazyLoad = function (e) {
                e = e || 1;
                var i, n, o, r, s, a = this, l = t("img[data-lazy]", a.$slider);
                l.length ? (i = l.first(), n = i.attr("data-lazy"), o = i.attr("data-srcset"), r = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function () {
                    o && (i.attr("srcset", o), r && i.attr("sizes", r)), i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, n]), a.progressiveLazyLoad()
                }, s.onerror = function () {
                    e < 3 ? setTimeout(function () {
                        a.progressiveLazyLoad(e + 1)
                    }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, n]), a.progressiveLazyLoad())
                }, s.src = n) : a.$slider.trigger("allImagesLoaded", [a])
            }, e.prototype.refresh = function (e) {
                var i, n, o = this;
                n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), t.extend(o, o.initials, {currentSlide: i}), o.init(), e || o.changeSlide({
                    data: {
                        message: "index",
                        index: i
                    }
                }, !1)
            }, e.prototype.registerBreakpoints = function () {
                var e, i, n, o = this, r = o.options.responsive || null;
                if ("array" === t.type(r) && r.length) {
                    for (e in o.respondTo = o.options.respondTo || "window", r) if (n = o.breakpoints.length - 1, r.hasOwnProperty(e)) {
                        for (i = r[e].breakpoint; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                        o.breakpoints.push(i), o.breakpointSettings[i] = r[e].settings
                    }
                    o.breakpoints.sort(function (t, e) {
                        return o.options.mobileFirst ? t - e : e - t
                    })
                }
            }, e.prototype.reinit = function () {
                var e = this;
                e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
            }, e.prototype.resize = function () {
                var e = this;
                t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
                    e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
                }, 50))
            }, e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, i) {
                var n = this;
                if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : n.slideCount - 1 : !0 === e ? --t : t, n.slideCount < 1 || t < 0 || t > n.slideCount - 1) return !1;
                n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
            }, e.prototype.setCSS = function (t) {
                var e, i, n = this, o = {};
                !0 === n.options.rtl && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", o[n.positionProp] = t, !1 === n.transformsEnabled ? n.$slideTrack.css(o) : (o = {}, !1 === n.cssTransitions ? (o[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(o)))
            }, e.prototype.setDimensions = function () {
                var t = this;
                !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({padding: "0px " + t.options.centerPadding}) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({padding: t.options.centerPadding + " 0px"})), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
                var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
                !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
            }, e.prototype.setFade = function () {
                var e, i = this;
                i.$slides.each(function (n, o) {
                    e = i.slideWidth * n * -1, !0 === i.options.rtl ? t(o).css({
                        position: "relative",
                        right: e,
                        top: 0,
                        zIndex: i.options.zIndex - 2,
                        opacity: 0
                    }) : t(o).css({position: "relative", left: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0})
                }), i.$slides.eq(i.currentSlide).css({zIndex: i.options.zIndex - 1, opacity: 1})
            }, e.prototype.setHeight = function () {
                var t = this;
                if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                    var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                    t.$list.css("height", e)
                }
            }, e.prototype.setOption = e.prototype.slickSetOption = function () {
                var e, i, n, o, r, s = this, a = !1;
                if ("object" === t.type(arguments[0]) ? (n = arguments[0], a = arguments[1], r = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) s.options[n] = o; else if ("multiple" === r) t.each(n, function (t, e) {
                    s.options[t] = e
                }); else if ("responsive" === r) for (i in o) if ("array" !== t.type(s.options.responsive)) s.options.responsive = [o[i]]; else {
                    for (e = s.options.responsive.length - 1; e >= 0;) s.options.responsive[e].breakpoint === o[i].breakpoint && s.options.responsive.splice(e, 1), e--;
                    s.options.responsive.push(o[i])
                }
                a && (s.unload(), s.reinit())
            }, e.prototype.setPosition = function () {
                var t = this;
                t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
            }, e.prototype.setProps = function () {
                var t = this, e = document.body.style;
                t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
            }, e.prototype.setSlideClasses = function (t) {
                var e, i, n, o, r = this;
                if (i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(t).addClass("slick-current"), !0 === r.options.centerMode) {
                    var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
                    e = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (t >= e && t <= r.slideCount - 1 - e ? r.$slides.slice(t - e + s, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = r.options.slidesToShow + t, i.slice(n - e + 1 + s, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : t === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(t).addClass("slick-center")
                } else t >= 0 && t <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(t, t + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, n = !0 === r.options.infinite ? r.options.slidesToShow + t : t, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - t < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
                "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
            }, e.prototype.setupInfinite = function () {
                var e, i, n, o = this;
                if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null, o.slideCount > o.options.slidesToShow)) {
                    for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - n; e -= 1) i = e - 1, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                    for (e = 0; e < n + o.slideCount; e += 1) i = e, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                    o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                        t(this).attr("id", "")
                    })
                }
            }, e.prototype.interrupt = function (t) {
                t || this.autoPlay(), this.interrupted = t
            }, e.prototype.selectHandler = function (e) {
                var i = this, n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                    o = parseInt(n.attr("data-slick-index"));
                o || (o = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(o, !1, !0) : i.slideHandler(o)
            }, e.prototype.slideHandler = function (t, e, i) {
                var n, o, r, s, a, l, c = this;
                if (e = e || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t)) if (!1 === e && c.asNavFor(t), n = t, a = c.getLeft(n), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, function () {
                    c.postSlide(n)
                }) : c.postSlide(n)); else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, function () {
                    c.postSlide(n)
                }) : c.postSlide(n)); else {
                    if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(r), c.fadeSlide(o, function () {
                        c.postSlide(o)
                    })) : c.postSlide(o), void c.animateHeight();
                    !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(a, function () {
                        c.postSlide(o)
                    }) : c.postSlide(o)
                }
            }, e.prototype.startLoad = function () {
                var t = this;
                !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
            }, e.prototype.swipeDirection = function () {
                var t, e, i, n, o = this;
                return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(e, t), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? !1 === o.options.rtl ? "left" : "right" : n <= 360 && n >= 315 ? !1 === o.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
            }, e.prototype.swipeEnd = function (t) {
                var e, i, n = this;
                if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1, !1;
                if (n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
                if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                    switch (i = n.swipeDirection()) {
                        case"left":
                        case"down":
                            e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                            break;
                        case"right":
                        case"up":
                            e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
                    }
                    "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
                } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
            }, e.prototype.swipeHandler = function (t) {
                var e = this;
                if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                    case"start":
                        e.swipeStart(t);
                        break;
                    case"move":
                        e.swipeMove(t);
                        break;
                    case"end":
                        e.swipeEnd(t)
                }
            }, e.prototype.swipeMove = function (t) {
                var e, i, n, o, r, s, a = this;
                return r = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), i = a.swipeDirection(), void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, t.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = e + n * o : a.swipeLeft = e + n * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = e + n * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
            }, e.prototype.swipeStart = function (t) {
                var e, i = this;
                if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
                void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, i.dragging = !0
            }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
                var t = this;
                null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
            }, e.prototype.unload = function () {
                var e = this;
                t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
            }, e.prototype.unslick = function (t) {
                var e = this;
                e.$slider.trigger("unslick", [e, t]), e.destroy()
            }, e.prototype.updateArrows = function () {
                var t = this;
                Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
            }, e.prototype.updateDots = function () {
                var t = this;
                null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
            }, e.prototype.visibility = function () {
                var t = this;
                t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
            }, t.fn.slick = function () {
                var t, i, n = this, o = arguments[0], r = Array.prototype.slice.call(arguments, 1), s = n.length;
                for (t = 0; t < s; t++) if ("object" == typeof o || void 0 === o ? n[t].slick = new e(n[t], o) : i = n[t].slick[o].apply(n[t].slick, r), void 0 !== i) return i;
                return n
            }
        })
    }, function (t, e, i) {
        var n;
        void 0 === (n = function (t) {
            var e = $.fn.slick;
            $.fn.slick = function (t) {
                var i = e.call(this, t);
                if ("function" !== i.each) return i;
                i.each(function (t, e) {
                    void 0 !== e.slick && (e.slick.setSlideClasses = function (t) {
                        var e, i, n, o = this;
                        o.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"), i = o.$slider.find(".slick-slide"), !0 === o.options.centerMode ? (e = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (t >= e && t <= o.slideCount - 1 - e ? o.$slides.slice(t - e, t + e + 1).addClass("slick-active") : (n = o.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active")), 0 === t ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(t).addClass("slick-center")) : t > 0 && t < o.slideCount - o.options.slidesToShow ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active") : i.length <= o.options.slidesToShow ? i.addClass("slick-active") : !0 === o.options.centerItems ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active") : (n = !0 === o.options.infinite ? o.options.slidesToShow + t : t, i.slice(n, Math.ceil(n + o.options.slidesToShow)).addClass("slick-active")), "ondemand" === o.options.lazyLoad && o.lazyLoad()
                    }, void 0 !== e.slick.options.previewMode && e.slick.options.previewMode && (e.slick.getLeft = function (t) {
                        var e, i = this, n = 0;
                        i.slideOffset = 0, e = i.$slides.first().outerHeight(), !0 === i.options.infinite ? (i.slideCount > i.options.slidesToShow && (i.slideOffset = i.slideWidth * i.options.slidesToShow * -1, n = e * i.options.slidesToShow * -1), i.slideCount % i.options.slidesToScroll != 0 && t + i.options.slidesToScroll > i.slideCount && i.slideCount > i.options.slidesToShow && (i.slideOffset = i.slideCount % i.options.slidesToShow * i.slideWidth * -1, n = i.slideCount % i.options.slidesToShow * e * -1)) : i.slideCount % i.options.slidesToShow != 0 && t + i.options.slidesToScroll > i.slideCount && i.slideCount > i.options.slidesToShow && (i.slideOffset = i.options.slidesToShow * i.slideWidth - i.slideCount % i.options.slidesToShow * i.slideWidth, n = i.slideCount % i.options.slidesToShow * e);
                        var o = Math.ceil(i.options.slidesToShow) - i.options.slidesToShow;
                        return !0 === i.options.centerItems ? i.slideOffset -= i.slideWidth * o / 2 : i.slideOffset -= i.slideWidth * o, o > .5 && i.setSlideClasses(i.currentSlide), !1 === i.options.vertical ? t * i.slideWidth * -1 + i.slideOffset : t * e * -1 + n
                    }))
                })
            }
        }.call(e, i, e, t)) || (t.exports = n)
    }, function (t, e, i) {
        "use strict";
        var n = i(221), o = (i.n(n), i(3)), r = i.n(o), s = {
            href: "/search",
            innerHTML: '\n        <div class="floating-delighter__icon">\n        </div>\n        <div class="floating-delighter__label">Tìm kiếm</div>\n    ',
            classList: ["floating-delighter--cts"]
        }, a = {
            "/about-cancer/treatment/clinical-trials": {
                delighter: s,
                exclude: [/^\/advanced-search$/, {
                    rule: /^\/search/,
                    whitelist: ["/about-cancer/treatment/clinical-trials/search/help", "/about-cancer/treatment/clinical-trials/search/trial-guide"]
                }]
            },
            "/social-media": {
                delighter: {
                    href: "/news-events/events/social-media",
                    innerHTML: '\n        <div class="floating-delighter__icon">\n        </div>\n        <div class="floating-delighter__label">NCI Social Media Events</div>\n    ',
                    classList: ["floating-delighter--social-media"]
                }
            }
        }, l = Object.keys(a), c = !1, u = function (t, e) {
            var i, n = (i = e, t.split(i)[1]);
            return a[e].exclude.map(function (e) {
                if (e instanceof RegExp) return !!n.match(e);
                var i = !!n.match(e.rule), o = e.whitelist.includes(t);
                return !!i && !o
            }).includes(!0)
        };
        e.a = function () {
            if (!c) {
                c = !0;
                var t = function (t) {
                    if ("/" === t) return s;
                    for (var e = 0; e < l.length; e++) {
                        var i = l[e];
                        if (t === i) return a[i].delighter;
                        if (t.startsWith(i)) return a[i].exclude && u(t, i) ? null : a[i].delighter
                    }
                    return null
                }(location.pathname.toLowerCase());
                if (t) {
                    var e = function (t) {
                        var e = t.href, i = t.innerHTML, n = t.classList, o = document.createElement("div");
                        o.classList.add("floating-delighter"), n.map(function (t) {
                            return o.classList.add(t)
                        });
                        var s = document.createElement("a");
                        return s.href = e, s.classList.add("floating-delighter__link"), s.addEventListener("click", function (t) {
                            var e = r.a.getSObject();
                            NCIAnalytics.HomePageDelighterClick(t.currentTarget, "hp_find", e.pageName)
                        }), s.innerHTML = i, o.appendChild(s), o
                    }(t), i = document.querySelector(".page-options-container");
                    return i && i.appendChild(e), e
                }
            }
        }
    }, function (t, e, i) {
        var n;
        void 0 === (n = function (t) {
            var e = i(0);
            e(".shareComponent").click(function () {
                e(this).find(".shareWindow").toggleClass("hide"), e(this).find(".shareBtn").toggleClass("shareBtnOpen")
            })
        }.call(e, i, e, t)) || (t.exports = n)
    }, function (t, e) {
        !function (e) {
            var i = "Modernizr" in e, n = e.Modernizr;
            !function (e, i, n) {
                function o(t, e) {
                    return typeof t === e
                }

                function r(t) {
                    var e = C.className, i = b._config.classPrefix || "";
                    if (T && (e = e.baseVal), b._config.enableJSClass) {
                        var n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
                        e = e.replace(n, "$1" + i + "js$2")
                    }
                    b._config.enableClasses && (e += " " + i + t.join(" " + i), T ? C.className.baseVal = e : C.className = e)
                }

                function s(t, e) {
                    if ("object" == typeof t) for (var i in t) x(t, i) && s(i, t[i]); else {
                        var n = (t = t.toLowerCase()).split("."), o = b[n[0]];
                        if (2 == n.length && (o = o[n[1]]), void 0 !== o) return b;
                        e = "function" == typeof e ? e() : e, 1 == n.length ? b[n[0]] = e : (!b[n[0]] || b[n[0]] instanceof Boolean || (b[n[0]] = new Boolean(b[n[0]])), b[n[0]][n[1]] = e), r([(e && 0 != e ? "" : "no-") + n.join("-")]), b._trigger(t, e)
                    }
                    return b
                }

                function a() {
                    return "function" != typeof i.createElement ? i.createElement(arguments[0]) : T ? i.createElementNS.call(i, "http://www.w3.org/2000/svg", arguments[0]) : i.createElement.apply(i, arguments)
                }

                function l(t, e) {
                    return !!~("" + t).indexOf(e)
                }

                function c(t, e, n, o) {
                    var r, s, l, c, u = "modernizr", d = a("div"), f = function () {
                        var t = i.body;
                        return t || ((t = a(T ? "svg" : "body")).fake = !0), t
                    }();
                    if (parseInt(n, 10)) for (; n--;) (l = a("div")).id = o ? o[n] : u + (n + 1), d.appendChild(l);
                    return (r = a("style")).type = "text/css", r.id = "s" + u, (f.fake ? f : d).appendChild(r), f.appendChild(d), r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(i.createTextNode(t)), d.id = u, f.fake && (f.style.background = "", f.style.overflow = "hidden", c = C.style.overflow, C.style.overflow = "hidden", C.appendChild(f)), s = e(d, t), f.fake ? (f.parentNode.removeChild(f), C.style.overflow = c, C.offsetHeight) : d.parentNode.removeChild(d), !!s
                }

                function u(t) {
                    return t.replace(/([A-Z])/g, function (t, e) {
                        return "-" + e.toLowerCase()
                    }).replace(/^ms-/, "-ms-")
                }

                function d(t, i, n) {
                    var o;
                    if ("getComputedStyle" in e) {
                        o = getComputedStyle.call(e, t, i);
                        var r = e.console;
                        if (null !== o) n && (o = o.getPropertyValue(n)); else if (r) {
                            r[r.error ? "error" : "log"].call(r, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                        }
                    } else o = !i && t.currentStyle && t.currentStyle[n];
                    return o
                }

                function f(t, i) {
                    var o = t.length;
                    if ("CSS" in e && "supports" in e.CSS) {
                        for (; o--;) if (e.CSS.supports(u(t[o]), i)) return !0;
                        return !1
                    }
                    if ("CSSSupportsRule" in e) {
                        for (var r = []; o--;) r.push("(" + u(t[o]) + ":" + i + ")");
                        return c("@supports (" + (r = r.join(" or ")) + ") { #modernizr { position: absolute; } }", function (t) {
                            return "absolute" == d(t, null, "position")
                        })
                    }
                    return n
                }

                function p(t) {
                    return t.replace(/([a-z])-([a-z])/g, function (t, e, i) {
                        return e + i.toUpperCase()
                    }).replace(/^-/, "")
                }

                function h(t, e, i, r) {
                    function s() {
                        u && (delete _.style, delete _.modElem)
                    }

                    if (r = !o(r, "undefined") && r, !o(i, "undefined")) {
                        var c = f(t, i);
                        if (!o(c, "undefined")) return c
                    }
                    for (var u, d, h, g, v, y = ["modernizr", "tspan", "samp"]; !_.style && y.length;) u = !0, _.modElem = a(y.shift()), _.style = _.modElem.style;
                    for (h = t.length, d = 0; h > d; d++) if (g = t[d], v = _.style[g], l(g, "-") && (g = p(g)), _.style[g] !== n) {
                        if (r || o(i, "undefined")) return s(), "pfx" != e || g;
                        try {
                            _.style[g] = i
                        } catch (t) {
                        }
                        if (_.style[g] != v) return s(), "pfx" != e || g
                    }
                    return s(), !1
                }

                function g(t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }

                function v(t, e, i, n, r) {
                    var s = t.charAt(0).toUpperCase() + t.slice(1), a = (t + " " + A.join(s + " ") + s).split(" ");
                    return o(e, "string") || o(e, "undefined") ? h(a, e, n, r) : function (t, e, i) {
                        var n;
                        for (var r in t) if (t[r] in e) return !1 === i ? t[r] : o(n = e[t[r]], "function") ? g(n, i || e) : n;
                        return !1
                    }(a = (t + " " + O.join(s + " ") + s).split(" "), e, i)
                }

                function y(t, e, i) {
                    return v(t, n, n, e, i)
                }

                var m = [], w = {
                    _version: "3.6.0",
                    _config: {classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0},
                    _q: [],
                    on: function (t, e) {
                        var i = this;
                        setTimeout(function () {
                            e(i[t])
                        }, 0)
                    },
                    addTest: function (t, e, i) {
                        m.push({name: t, fn: e, options: i})
                    },
                    addAsyncTest: function (t) {
                        m.push({name: null, fn: t})
                    }
                }, b = function () {
                };
                b.prototype = w, b = new b;
                var x, k = [], C = i.documentElement, T = "svg" === C.nodeName.toLowerCase();
                !function () {
                    var t = {}.hasOwnProperty;
                    x = o(t, "undefined") || o(t.call, "undefined") ? function (t, e) {
                        return e in t && o(t.constructor.prototype[e], "undefined")
                    } : function (e, i) {
                        return t.call(e, i)
                    }
                }(), w._l = {}, w.on = function (t, e) {
                    this._l[t] || (this._l[t] = []), this._l[t].push(e), b.hasOwnProperty(t) && setTimeout(function () {
                        b._trigger(t, b[t])
                    }, 0)
                }, w._trigger = function (t, e) {
                    if (this._l[t]) {
                        var i = this._l[t];
                        setTimeout(function () {
                            var t;
                            for (t = 0; t < i.length; t++) (0, i[t])(e)
                        }, 0), delete this._l[t]
                    }
                }, b._q.push(function () {
                    w.addTest = s
                });
                var S = "Moz O ms Webkit", A = w._config.usePrefixes ? S.split(" ") : [];
                w._cssomPrefixes = A;
                w.atRule = function (t) {
                    var i, o = M.length, r = e.CSSRule;
                    if (void 0 === r) return n;
                    if (!t) return !1;
                    if ((i = (t = t.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE") in r) return "@" + t;
                    for (var s = 0; o > s; s++) {
                        var a = M[s];
                        if (a.toUpperCase() + "_" + i in r) return "@-" + a.toLowerCase() + "-" + t
                    }
                    return !1
                };
                var $ = function () {
                    var t = !("onblur" in i.documentElement);
                    return function (e, i) {
                        var o;
                        return !!e && (i && "string" != typeof i || (i = a(i || "div")), !(o = (e = "on" + e) in i) && t && (i.setAttribute || (i = a("div")), i.setAttribute(e, ""), o = "function" == typeof i[e], i[e] !== n && (i[e] = n), i.removeAttribute(e)), o)
                    }
                }();
                w.hasEvent = $, T || function (e, i) {
                    function n() {
                        var t = v.elements;
                        return "string" == typeof t ? t.split(" ") : t
                    }

                    function o(t) {
                        var e = g[t[p]];
                        return e || (e = {}, h++, t[p] = h, g[h] = e), e
                    }

                    function r(t, e, n) {
                        return e || (e = i), c ? e.createElement(t) : (n || (n = o(e)), !(r = n.cache[t] ? n.cache[t].cloneNode() : f.test(t) ? (n.cache[t] = n.createElem(t)).cloneNode() : n.createElem(t)).canHaveChildren || d.test(t) || r.tagUrn ? r : n.frag.appendChild(r));
                        var r
                    }

                    function s(t, e) {
                        e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function (i) {
                            return v.shivMethods ? r(i, t, e) : e.createElem(i)
                        }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-:]+/g, function (t) {
                            return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                        }) + ");return n}")(v, e.frag)
                    }

                    function a(t) {
                        t || (t = i);
                        var e = o(t);
                        return !v.shivCSS || l || e.hasCSS || (e.hasCSS = !!function (t, e) {
                            var i = t.createElement("p"), n = t.getElementsByTagName("head")[0] || t.documentElement;
                            return i.innerHTML = "x<style>" + e + "</style>", n.insertBefore(i.lastChild, n.firstChild)
                        }(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), c || s(t, e), t
                    }

                    var l, c, u = e.html5 || {},
                        d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                        f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                        p = "_html5shiv", h = 0, g = {};
                    !function () {
                        try {
                            var t = i.createElement("a");
                            t.innerHTML = "<xyz></xyz>", l = "hidden" in t, c = 1 == t.childNodes.length || function () {
                                i.createElement("a");
                                var t = i.createDocumentFragment();
                                return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement
                            }()
                        } catch (t) {
                            l = !0, c = !0
                        }
                    }();
                    var v = {
                        elements: u.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
                        version: "3.7.3",
                        shivCSS: !1 !== u.shivCSS,
                        supportsUnknownElements: c,
                        shivMethods: !1 !== u.shivMethods,
                        type: "default",
                        shivDocument: a,
                        createElement: r,
                        createDocumentFragment: function (t, e) {
                            if (t || (t = i), c) return t.createDocumentFragment();
                            for (var r = (e = e || o(t)).frag.cloneNode(), s = 0, a = n(), l = a.length; l > s; s++) r.createElement(a[s]);
                            return r
                        },
                        addElements: function (t, e) {
                            var i = v.elements;
                            "string" != typeof i && (i = i.join(" ")), "string" != typeof t && (t = t.join(" ")), v.elements = i + " " + t, a(e)
                        }
                    };
                    e.html5 = v, a(i), "object" == typeof t && t.exports && (t.exports = v)
                }(void 0 !== e ? e : this, i);
                var E = {elem: a("modernizr")};
                b._q.push(function () {
                    delete E.elem
                });
                var _ = {style: E.elem.style};
                b._q.unshift(function () {
                    delete _.style
                });
                var O = w._config.usePrefixes ? S.toLowerCase().split(" ") : [];
                w._domPrefixes = O, w.testAllProps = v, w.testAllProps = y;
                var P = w.testProp = function (t, e, i) {
                    return h([t], n, e, i)
                }, I = w.testStyles = c;
                b.addTest("borderradius", y("borderRadius", "0px", !0)), b.addTest("flexbox", y("flexBasis", "1px", !0)), I('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function (t) {
                    b.addTest("generatedcontent", t.offsetHeight >= 6)
                }), b.addTest("cssreflections", y("boxReflect", "above", !0)), b.addTest("textshadow", P("textShadow", "1px 1px")), b.addTest("csstransforms", function () {
                    return -1 === navigator.userAgent.indexOf("Android 2.") && y("transform", "scale(1)", !0)
                });
                var j = "CSS" in e && "supports" in e.CSS, N = "supportsCSS" in e;
                b.addTest("supports", j || N), b.addTest("csstransforms3d", function () {
                    return !!y("perspective", "1px", !0)
                }), b.addTest("csstransitions", y("transition", "all", !0)), b.addTest("geolocation", "geolocation" in navigator), b.addTest("hashchange", function () {
                    return !1 !== $("hashchange", e) && (i.documentMode === n || i.documentMode > 7)
                }), b.addTest("svg", !!i.createElementNS && !!i.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
                var M = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
                w._prefixes = M, b.addTest("touchevents", function () {
                    var t;
                    if ("ontouchstart" in e || e.DocumentTouch && i instanceof DocumentTouch) t = !0; else {
                        var n = ["@media (", M.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                        I(n, function (e) {
                            t = 9 === e.offsetTop
                        })
                    }
                    return t
                }), b.addTest("webworkers", "Worker" in e), function () {
                    var t, e, i, n, r, s;
                    for (var a in m) if (m.hasOwnProperty(a)) {
                        if (t = [], (e = m[a]).name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length)) for (i = 0; i < e.options.aliases.length; i++) t.push(e.options.aliases[i].toLowerCase());
                        for (n = o(e.fn, "function") ? e.fn() : e.fn, r = 0; r < t.length; r++) 1 === (s = t[r].split(".")).length ? b[s[0]] = n : (!b[s[0]] || b[s[0]] instanceof Boolean || (b[s[0]] = new Boolean(b[s[0]])), b[s[0]][s[1]] = n), k.push((n ? "" : "no-") + s.join("-"))
                    }
                }(), r(k), delete w.addTest, delete w.addAsyncTest;
                for (var L = 0; L < b._q.length; L++) b._q[L]();
                e.Modernizr = b
            }(e, document), t.exports = e.Modernizr, i ? e.Modernizr = n : delete e.Modernizr
        }(window)
    }, function (t, e) {
        var i = Math.ceil, n = Math.floor;
        t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? n : i)(t)
        }
    }, function (t, e) {
        t.exports = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
        }
    }, function (t, e) {
        var i = 0, n = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++i + n).toString(36))
        }
    }, function (t, e) {
        t.exports = {}
    }, function (t, e, i) {
        var n = i(149), o = i(127);
        t.exports = Object.keys || function (t) {
            return n(t, o)
        }
    }, function (t, e, i) {
        var n = i(124), o = i(70);
        t.exports = function (t) {
            return n(o(t))
        }
    }, function (t, e) {
        var i = {}.toString;
        t.exports = function (t) {
            return i.call(t).slice(8, -1)
        }
    }, function (t, e, i) {
        var n = i(82), o = Math.min;
        t.exports = function (t) {
            return t > 0 ? o(n(t), 9007199254740991) : 0
        }
    }, function (t, e, i) {
        var n = i(126)("keys"), o = i(85);
        t.exports = function (t) {
            return n[t] || (n[t] = o(t))
        }
    }, function (t, e, i) {
        var n = i(70);
        t.exports = function (t) {
            return Object(n(t))
        }
    }, function (t, e, i) {
        var n;
        void 0 === (n = function (t) {
            return {
                doAutocomplete: function (t, e, n, o, r, s) {
                    !function (t, e, n, o, r, s) {
                        var a = i(0), l = a(t), c = l.is("#swKeyword") ? null : l.parent(), u = o || "term", d = {
                            appendTo: c, source: function (t, i) {
                                var n, o = a.extend({}, r || {}), s = t.term;
                                o[u] = s, n && n.abort && n.abort(), n = "string" == typeof e ? a.ajax({
                                    url: e,
                                    data: o,
                                    dataType: "json"
                                }) : e.call(this, s).done(function (t) {
                                    return t.result
                                }), a.when(n).done(function (t) {
                                    if (t.result) i(t.result.map(function (t) {
                                        return t.term
                                    })); else {
                                        for (var e = [], n = 0; n < t.length; n++) e.push(t[n].item);
                                        i(e)
                                    }
                                }).fail(function () {
                                    i([])
                                })
                            }, minLength: 3
                        }, f = a.extend({}, d, s || {});
                        l.autocomplete(f)
                    }(t, e, 0, o, r, s)
                }
            }
        }.call(e, i, e, t)) || (t.exports = n)
    }, function (t, e, i) {
        var n, o, r;
        /*!
 * headroom.js v0.9.4 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2017 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */
        !function (i, s) {
            "use strict";
            o = [], void 0 === (r = "function" == typeof(n = s) ? n.apply(e, o) : n) || (t.exports = r)
        }(0, function () {
            "use strict";

            function t(t) {
                this.callback = t, this.ticking = !1
            }

            function e(t) {
                return t && "undefined" != typeof window && (t === window || t.nodeType)
            }

            function i(t) {
                if (arguments.length <= 0) throw new Error("Missing arguments in extend function");
                var n, o, r = t || {};
                for (o = 1; o < arguments.length; o++) {
                    var s = arguments[o] || {};
                    for (n in s) "object" != typeof r[n] || e(r[n]) ? r[n] = r[n] || s[n] : r[n] = i(r[n], s[n])
                }
                return r
            }

            function n(t, e) {
                e = i(e, n.options), this.lastKnownScrollY = 0, this.elem = t, this.tolerance = function (t) {
                    return t === Object(t) ? t : {down: t, up: t}
                }(e.tolerance), this.classes = e.classes, this.offset = e.offset, this.scroller = e.scroller, this.initialised = !1, this.onPin = e.onPin, this.onUnpin = e.onUnpin, this.onTop = e.onTop, this.onNotTop = e.onNotTop, this.onBottom = e.onBottom, this.onNotBottom = e.onNotBottom
            }

            var o = {
                bind: !!function () {
                }.bind,
                classList: "classList" in document.documentElement,
                rAF: !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame)
            };
            return window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame, t.prototype = {
                constructor: t,
                update: function () {
                    this.callback && this.callback(), this.ticking = !1
                },
                requestTick: function () {
                    this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0)
                },
                handleEvent: function () {
                    this.requestTick()
                }
            }, n.prototype = {
                constructor: n, init: function () {
                    if (n.cutsTheMustard) return this.debouncer = new t(this.update.bind(this)), this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this
                }, destroy: function () {
                    var t = this.classes;
                    for (var e in this.initialised = !1, t) t.hasOwnProperty(e) && this.elem.classList.remove(t[e]);
                    this.scroller.removeEventListener("scroll", this.debouncer, !1)
                }, attachEvent: function () {
                    this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent())
                }, unpin: function () {
                    var t = this.elem.classList, e = this.classes;
                    !t.contains(e.pinned) && t.contains(e.unpinned) || (t.add(e.unpinned), t.remove(e.pinned), this.onUnpin && this.onUnpin.call(this))
                }, pin: function () {
                    var t = this.elem.classList, e = this.classes;
                    t.contains(e.unpinned) && (t.remove(e.unpinned), t.add(e.pinned), this.onPin && this.onPin.call(this))
                }, top: function () {
                    var t = this.elem.classList, e = this.classes;
                    t.contains(e.top) || (t.add(e.top), t.remove(e.notTop), this.onTop && this.onTop.call(this))
                }, notTop: function () {
                    var t = this.elem.classList, e = this.classes;
                    t.contains(e.notTop) || (t.add(e.notTop), t.remove(e.top), this.onNotTop && this.onNotTop.call(this))
                }, bottom: function () {
                    var t = this.elem.classList, e = this.classes;
                    t.contains(e.bottom) || (t.add(e.bottom), t.remove(e.notBottom), this.onBottom && this.onBottom.call(this))
                }, notBottom: function () {
                    var t = this.elem.classList, e = this.classes;
                    t.contains(e.notBottom) || (t.add(e.notBottom), t.remove(e.bottom), this.onNotBottom && this.onNotBottom.call(this))
                }, getScrollY: function () {
                    return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop
                }, getViewportHeight: function () {
                    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                }, getElementPhysicalHeight: function (t) {
                    return Math.max(t.offsetHeight, t.clientHeight)
                }, getScrollerPhysicalHeight: function () {
                    return this.scroller === window || this.scroller === document.body ? this.getViewportHeight() : this.getElementPhysicalHeight(this.scroller)
                }, getDocumentHeight: function () {
                    var t = document.body, e = document.documentElement;
                    return Math.max(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, t.clientHeight, e.clientHeight)
                }, getElementHeight: function (t) {
                    return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight)
                }, getScrollerHeight: function () {
                    return this.scroller === window || this.scroller === document.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller)
                }, isOutOfBounds: function (t) {
                    var e = t < 0, i = t + this.getScrollerPhysicalHeight() > this.getScrollerHeight();
                    return e || i
                }, toleranceExceeded: function (t, e) {
                    return Math.abs(t - this.lastKnownScrollY) >= this.tolerance[e]
                }, shouldUnpin: function (t, e) {
                    var i = t > this.lastKnownScrollY, n = t >= this.offset;
                    return i && n && e
                }, shouldPin: function (t, e) {
                    var i = t < this.lastKnownScrollY, n = t <= this.offset;
                    return i && e || n
                }, update: function () {
                    var t = this.getScrollY(), e = t > this.lastKnownScrollY ? "down" : "up",
                        i = this.toleranceExceeded(t, e);
                    this.isOutOfBounds(t) || (t <= this.offset ? this.top() : this.notTop(), t + this.getViewportHeight() >= this.getScrollerHeight() ? this.bottom() : this.notBottom(), this.shouldUnpin(t, i) ? this.unpin() : this.shouldPin(t, i) && this.pin(), this.lastKnownScrollY = t)
                }
            }, n.options = {
                tolerance: {up: 0, down: 0},
                offset: 0,
                scroller: window,
                classes: {
                    pinned: "headroom--pinned",
                    unpinned: "headroom--unpinned",
                    top: "headroom--top",
                    notTop: "headroom--not-top",
                    bottom: "headroom--bottom",
                    notBottom: "headroom--not-bottom",
                    initial: "headroom"
                }
            }, n.cutsTheMustard = void 0 !== o && o.rAF && o.bind && o.classList, n
        })
    }, , , , , , , , , , , , function (t, e, i) {
        var n;
        void 0 === (n = function (t) {
            var e = i(0);
            return {
                dictionaries: {
                    term: "term",
                    "cancer-terms": "term",
                    diccionario: "term",
                    drug: "drug",
                    "cancer-drug": "drug",
                    genetic: "genetic",
                    "genetics-dictionary": "genetic"
                }, endpoint: "/Dictionary.Service/v1", search: function (t, i, n, o, r, s) {
                    if (!t || !this.dictionaries[t]) return e.Deferred().reject();
                    if (!i) return e.Deferred().reject();
                    return n = n || "English", o = o || "begins", r = r || 0, s = s || 0, e.getJSON(this.endpoint + "/search", {
                        dictionary: this.dictionaries[t],
                        searchText: i,
                        language: n,
                        searchType: o,
                        offset: r,
                        maxResuts: s
                    })
                }, searchSuggest: function (t, i, n, o) {
                    if (!t || !this.dictionaries[t]) return e.Deferred().reject();
                    if (!i) return e.Deferred().reject();
                    return n = n || "English", o = o || "begins", e.getJSON(this.endpoint + "/searchSuggest", {
                        dictionary: this.dictionaries[t],
                        searchText: i,
                        language: n,
                        searchType: o
                    })
                }, getTerm: function (t, i, n) {
                    if (!t || !this.dictionaries[t]) return e.Deferred().reject();
                    if (!i) return e.Deferred().reject();
                    return n = n || "English", e.getJSON(this.endpoint + "/getTerm", {
                        dictionary: this.dictionaries[t],
                        termId: i,
                        language: n
                    })
                }
            }
        }.call(e, i, e, t)) || (t.exports = n)
    }, , , , , function (t, e, i) {
        "use strict";
        var n = i(207), o = i.n(n), r = i(35),
            s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, a = function (t) {
                return Object.entries(t).map(function (t) {
                    var e = t[0], i = Object(r.d)(e), n = function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "" + Date.now(),
                            e = void 0;
                        if ("string" == typeof t) e = o.a.generate(t); else {
                            if (!t || "object" !== (void 0 === t ? "undefined" : s(t))) throw new Error("Invalid seed provided for GeoPattern");
                            var i = t.str, n = void 0 === i ? "" : i, r = t.options, a = void 0 === r ? {} : r;
                            try {
                                e = o.a.generate(n, a)
                            } catch (t) {
                                e = o.a.generate(n), console.log("Invalid options", t)
                            }
                        }
                        return e.toDataUrl()
                    }(t[1]);
                    return i.map(function (t) {
                        return function (t, e) {
                            return t && e && (t.style.backgroundImage = e), t
                        }(t, n)
                    })
                })
            };
        e.a = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "body";
            return document.querySelector(e) ? a(t) : []
        }
    }, , function (t, e, i) {
        var n;
        void 0 === (n = function (t) {
            var e = i(0);
            i(226);
            var n = i(3);
            var o = !1;
            return {
                init: function () {
                    o || (!function () {
                        var t = "Previous", i = "Next";
                        "es" === e("html").attr("lang") && (t = "Anterior", i = "Siguiente");
                        var o = "www.cancer.gov/", r = n.getSObject();
                        void 0 !== r && (o = r.pageName), e(".ic-carousel").each(function (n, r) {
                            var s = e(this).imagecarousel({
                                change: function (t, i) {
                                    var n = e(this).imagecarousel("getTitle");
                                    n.length > 50 && (n = n.substring(0, 50)), 0 == n.length && (n = "none");
                                    var r = i.triggerEvent, s = i.direction, a = i.beforeIndex + 1;
                                    NCIAnalytics.ImageCarouselClickSwipe(e(this), n, r, s, a, o)
                                }, previousText: t, nextText: i
                            });
                            e(window).on("accordionactivate", function (t, e) {
                                s.closest(".ui-accordion-content").is(e.newPanel) && s.imagecarousel("setPosition")
                            })
                        })
                    }(), o = !0)
                }
            }
        }.call(e, i, e, t)) || (t.exports = n)
    }, function (t, e, n) {
        var o, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        void 0 === (o = function (t) {
            var e = n(0), o = n(227);
            n(77), n(78);
            var s = 3;

            function a(t) {
                e(".yt-carousel").length && function (t) {
                    e.getScript("https://apis.google.com/js/client.js", function () {
                        gapi.load("client", {
                            callback: function () {
                                void 0 === t ? console.log("No API key provided for carousel initialization.") : function (t) {
                                    var i = t;
                                    gapi.client.init({
                                        apiKey: i,
                                        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"]
                                    }).then(function () {
                                        e(".yt-carousel").each(function (t) {
                                            var i = e(this), n = i.attr("data-playlist-id"), o = i.find("h4").text();
                                            !function (t) {
                                                var i = "previous", n = "next";
                                                e(".yt-carousel.ytc-spanish").length && (i = "anterior", n = "siguiente");
                                                var o = '<div class="row yt-carousel-controls"><div class="yt-carousel-thumbs columns small-10"></div><div class="yt-carousel-arrows columns small-2"><button class="previous" type="button" value="' + i + '" alt="' + i + '"></button><button class="next" type="button" value="' + n + '" alt="' + n + '"></button><div class="yt-carousel-pager" /></div></div>',
                                                    r = '<div class="row yt-carousel-m-controls"><div class="yt-carousel-m-pager columns small-9"></div><div class="yt-carousel-m-arrows columns small-3"><button class="m-previous" type="button" value="' + i + '" alt="' + i + '"></button><button class="m-next" type="button" value="' + n + '" alt="' + n + '"></button></div></div>';
                                                t.append(o + r)
                                            }(i), gapi.client.youtube.playlistItems.list({
                                                playlistId: n,
                                                part: "snippet",
                                                maxResults: 50
                                            }).then(function (t) {
                                                var n = i.find(".yt-carousel-thumbs"),
                                                    r = t.result.pageInfo.totalResults;
                                                r > 50 && (r = 50);
                                                var a = t.result.items[0].snippet.resourceId.videoId,
                                                    f = t.result.items[0].snippet.title;
                                                c(i, a, f, 0, r), e.each(t.result.items, function (t, e) {
                                                    var i = e.snippet.resourceId.videoId, o = e.snippet.title,
                                                        r = e.snippet.thumbnails.medium.url;
                                                    !function (t, e, i, n) {
                                                        var o = '<div class="ytc-thumb-container"><a class="yt-carousel-thumb" id="' + e + '"><img src="' + n + '" alt="' + i + '"></a><span>' + i + "</span></div>";
                                                        t.append(o)
                                                    }(n, i, o, r)
                                                }), r <= s ? i.find(".yt-carousel-controls button").addClass("ytc-hidden") : l(i, r), function (t, e, i) {
                                                    e.slick({
                                                        infinite: !0,
                                                        slidesToShow: s,
                                                        slidesToScroll: s
                                                    }), u(t, i), e.on("swipe", function (e, n, o) {
                                                        u(t, i)
                                                    }), t.find(".yt-carousel-arrows .previous").click(function () {
                                                        e.slick("slickPrev"), u(t, i)
                                                    }), t.find(".yt-carousel-arrows .next").click(function () {
                                                        e.slick("slickNext"), u(t, i)
                                                    }), t.on("keydown", function (n) {
                                                        37 == n.keyCode && (e.slick("slickPrev"), u(t, i)), 39 == n.keyCode && (e.slick("slickNext"), u(t, i))
                                                    })
                                                }(i, n, r), i.find(".slick-current .yt-carousel-thumb").first().addClass("ytc-clicked"), i.find(".yt-carousel-thumb").click(function () {
                                                    var t = e(this);
                                                    !function (t, e, i, n) {
                                                        t.find(".ytc-clicked").removeClass("ytc-clicked"), e.addClass("ytc-clicked");
                                                        var o = e.closest(".slick-slide").attr("data-slick-index"),
                                                            r = e.text(), s = e.attr("id");
                                                        if (s.length < 1) {
                                                            var a = e.find("img").attr("src");
                                                            s = a.split("/")[4]
                                                        }
                                                        c(t, s, r, o, i, !0), d(t, n, "click", o)
                                                    }(i, t, r, o)
                                                }), i.find(".m-previous").click(function () {
                                                    var t = i.find(".flex-video").attr("ytc-index"), e = --t;
                                                    e < 0 && (e = r - 1);
                                                    var n = i.find(".slick-slide[data-slick-index='" + e + "']"),
                                                        s = n.find(".yt-carousel-thumb").attr("id"), a = n.text();
                                                    c(i, s, a, e, r, !0), d(i, o, "swipe", e)
                                                }), i.find(".m-next").click(function () {
                                                    var t = i.find(".flex-video").attr("ytc-index"), e = ++t;
                                                    e > r - 1 && (e = 0);
                                                    var n = i.find(".slick-slide[data-slick-index='" + e + "']"),
                                                        s = n.find(".yt-carousel-thumb").attr("id"), a = n.text();
                                                    c(i, s, a, e, r, !0), d(i, o, "swipe", e)
                                                })
                                            })
                                        })
                                    })
                                }(t)
                            }, onerror: function () {
                                console.log("Google api.js failed to load.")
                            }, timeout: 5e3, ontimeout: function () {
                                console.log("Google api.js did not load in a timely manner.")
                            }
                        })
                    })
                }(t)
            }

            function l(t, e) {
                var n = t.find(".ytc-thumb-container").last(), o = s - e % s;
                if (o != s) for (i = 0; i < o; i++) n.after('<div class="ytc-thumb-container ytc-dummy" />')
            }

            function c(t, i, n, r, a, l) {
                var f = t.find(".yt-carousel-selected .flex-video");
                f.attr("id", "ytplayer-" + i), f.attr("data-video-id", i), f.attr("data-video-title", n), f.attr("ytc-index", r), f.find("noscript a").attr("href", "https://www.youtube.com/watch?v=" + i), f.find("noscript a").attr("title", n);
                var p = t.find(".yt-carousel-m-pager"), h = 1 + parseInt(r);

                function g(t) {
                    l && t.target.playVideo()
                }

                function v(i) {
                    switch (i.data) {
                        case 0:
                            $indexCurr = t.find(".flex-video").attr("ytc-index"), $indexNext = ++$indexCurr, $indexNext <= a - 1 && ($carouselTitle = t.find("h4").text(), $selNext = t.find(".slick-slide[data-slick-index='" + $indexNext + "']"), $idNext = $selNext.find(".yt-carousel-thumb").attr("id"), $titleNext = $selNext.text(), t.find(".ytc-clicked").removeClass("ytc-clicked"), $selNext.find(".yt-carousel-thumb").addClass("ytc-clicked"), $indexCurr % s == 0 && $indexCurr < a && $indexCurr <= $indexNext && (e(".yt-carousel-thumbs").slick("slickNext"), u(t, a)), d(t, $carouselTitle, "complete", r), c(t, $idNext, $titleNext, $indexNext, a, !0))
                    }
                }

                e(".yt-carousel.ytc-spanish").length ? p.text(h + " de " + a) : p.text(h + " of " + a), f.children("iframe").remove(), o.init(t), new YT.Player("flex-video-api", {
                    events: {
                        onReady: g,
                        onStateChange: v
                    }
                })
            }

            function u(t, i) {
                var n = t.find(".yt-carousel-pager"), o = t.find(".slick-current").attr("data-slick-index"),
                    r = (o = ++o) + (s - 1);
                r > i && (r = i);
                var a = o + "-" + r;
                o == i && (a = i), e(".yt-carousel.ytc-spanish").length ? n.text(a + " de " + i) : n.text(a + " of " + i)
            }

            function d(t, e, i, n) {
                if (r("undefined" !== NCIAnalytics)) {
                    var o = e;
                    e.length > 50 && (o = e.substring(0, 50));
                    var s = "vidcar_" + o + "_" + i + "_" + ++n;
                    "complete" == i ? NCIAnalytics.VideoCarouselComplete(t, s) : NCIAnalytics.VideoCarouselClickSwipe(t, s)
                }
            }

            var f = !1;
            return {
                init: function () {
                    f || (a(), f = !0)
                }, apiInit: function (t) {
                    f || (a(t), f = !0)
                }
            }
        }.call(e, n, e, t)) || (t.exports = o)
    }, , , , , , function (t, e) {
        t.exports = !1
    }, function (t, e, i) {
        var n = i(73), o = i(31).document, r = n(o) && n(o.createElement);
        t.exports = function (t) {
            return r ? o.createElement(t) : {}
        }
    }, function (t, e, i) {
        var n = i(31), o = i(32), r = i(75), s = i(85)("src"), a = Function.toString, l = ("" + a).split("toString");
        i(9).inspectSource = function (t) {
            return a.call(t)
        }, (t.exports = function (t, e, i, a) {
            var c = "function" == typeof i;
            c && (r(i, "name") || o(i, "name", e)), t[e] !== i && (c && (r(i, s) || o(i, s, t[e] ? "" + t[e] : l.join(String(e)))), t === n ? t[e] = i : a ? t[e] ? t[e] = i : o(t, e, i) : (delete t[e], o(t, e, i)))
        })(Function.prototype, "toString", function () {
            return "function" == typeof this && this[s] || a.call(this)
        })
    }, function (t, e, i) {
        var n = i(145);
        t.exports = function (t, e, i) {
            if (n(t), void 0 === e) return t;
            switch (i) {
                case 1:
                    return function (i) {
                        return t.call(e, i)
                    };
                case 2:
                    return function (i, n) {
                        return t.call(e, i, n)
                    };
                case 3:
                    return function (i, n, o) {
                        return t.call(e, i, n, o)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        }
    }, function (t, e, i) {
        var n = i(89);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == n(t) ? t.split("") : Object(t)
        }
    }, function (t, e, i) {
        var n = i(88), o = i(90), r = i(150);
        t.exports = function (t) {
            return function (e, i, s) {
                var a, l = n(e), c = o(l.length), u = r(s, c);
                if (t && i != i) {
                    for (; c > u;) if ((a = l[u++]) != a) return !0
                } else for (; c > u; u++) if ((t || u in l) && l[u] === i) return t || u || 0;
                return !t && -1
            }
        }
    }, function (t, e, i) {
        var n = i(9), o = i(31), r = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (t.exports = function (t, e) {
            return r[t] || (r[t] = void 0 !== e ? e : {})
        })("versions", []).push({
            version: n.version,
            mode: i(120) ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        })
    }, function (t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function (t, e, i) {
        var n = i(71).f, o = i(75), r = i(10)("toStringTag");
        t.exports = function (t, e, i) {
            t && !o(t = i ? t : t.prototype, r) && n(t, r, {configurable: !0, value: e})
        }
    }, function (t, e) {
        e.f = {}.propertyIsEnumerable
    }, function (t, e, i) {
        var n = i(172), o = i(70);
        t.exports = function (t, e, i) {
            if (n(e)) throw TypeError("String#" + i + " doesn't accept regex!");
            return String(o(t))
        }
    }, function (t, e, i) {
        var n = i(10)("match");
        t.exports = function (t) {
            var e = /./;
            try {
                "/./"[t](e)
            } catch (i) {
                try {
                    return e[n] = !1, !"/./"[t](e)
                } catch (t) {
                }
            }
            return !0
        }
    }, , function (t, e) {
        var i = Object.prototype.hasOwnProperty, n = Object.prototype.toString;

        function o(t) {
            if (!t || "[object Object]" !== n.call(t) || t.nodeType || t.setInterval) return !1;
            var e, o = i.call(t, "constructor"), r = i.call(t.constructor.prototype, "isPrototypeOf");
            if (t.constructor && !o && !r) return !1;
            for (e in t) ;
            return void 0 === e || i.call(t, e)
        }

        t.exports = function t() {
            var e, i, n, r, s, a, l = arguments[0] || {}, c = 1, u = arguments.length, d = !1;
            for ("boolean" == typeof l && (d = l, l = arguments[1] || {}, c = 2), "object" != typeof l && "function" != typeof l && (l = {}); c < u; c++) if (null != (e = arguments[c])) for (i in e) n = l[i], l !== (r = e[i]) && (d && r && (o(r) || (s = Array.isArray(r))) ? (s ? (s = !1, a = n && Array.isArray(n) ? n : []) : a = n && o(n) ? n : {}, l[i] = t(d, a, r)) : void 0 !== r && (l[i] = r));
            return l
        }
    }, , function (t, e, i) {
        i(29), t.exports = i(136)
    }, function (t, e, i) {
        var n;
        void 0 === (n = function (t) {
            i(137), i(139), i(160), i(163), i(167), i(170), i(173), i(175), i(176);
            var e = i(177), n = i(178), o = i(180), r = i(184);
            $.widget("ui.menu", $.ui.menu, {
                focus: function (t, e) {
                    return $(".ui-state-focus").removeClass("ui-state-focus"), $(e[0]).addClass("ui-state-focus"), this._super(null, arguments[1])
                }
            }), $.widget("ui.accordion", $.ui.accordion, {
                destroy: function () {
                    for (var t = 0; t < this.element.length; t++) $(this.element[t]).find(".ui-accordion-header").removeClass("ui-state-active");
                    return this._super()
                }
            }), $.widget("ui.autocomplete", $.ui.autocomplete, {
                _renderItem: function (t, e) {
                    var i = this.term.replace(/[-[\]{}()*+?.,\^$|#\s]/g, "$&");
                    regexBold = new RegExp("(" + i + ")", "i");
                    var n = (e.value || e.term).replace(regexBold, "<strong>$&</strong>");
                    return $("<li>").data("data-value", e.value).append(n).appendTo(t)
                }
            }), r.init(), $(function () {
                n.init(), o.init(), e.init()
            })
        }.call(e, i, e, t)) || (t.exports = n)
    }, function (t, e, i) {
        "use strict";
        t.exports = i(138).polyfill()
    }, function (t, e, i) {
        (function (e, i) {
            /*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */
            var n;
            n = function () {
                "use strict";

                function t(t) {
                    return "function" == typeof t
                }

                var n = Array.isArray ? Array.isArray : function (t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }, o = 0, r = void 0, s = void 0, a = function (t, e) {
                    h[o] = t, h[o + 1] = e, 2 === (o += 2) && (s ? s(g) : b())
                };
                var l = "undefined" != typeof window ? window : void 0, c = l || {},
                    u = c.MutationObserver || c.WebKitMutationObserver,
                    d = "undefined" == typeof self && void 0 !== e && "[object process]" === {}.toString.call(e),
                    f = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                function p() {
                    var t = setTimeout;
                    return function () {
                        return t(g, 1)
                    }
                }

                var h = new Array(1e3);

                function g() {
                    for (var t = 0; t < o; t += 2) {
                        (0, h[t])(h[t + 1]), h[t] = void 0, h[t + 1] = void 0
                    }
                    o = 0
                }

                var v, y, m, w, b = void 0;

                function x(t, e) {
                    var i = this, n = new this.constructor(T);
                    void 0 === n[C] && F(n);
                    var o = i._state;
                    if (o) {
                        var r = arguments[o - 1];
                        a(function () {
                            return H(o, n, r, i._result)
                        })
                    } else M(i, n, t, e);
                    return n
                }

                function k(t) {
                    if (t && "object" == typeof t && t.constructor === this) return t;
                    var e = new this(T);
                    return P(e, t), e
                }

                d ? b = function () {
                    return e.nextTick(g)
                } : u ? (y = 0, m = new u(g), w = document.createTextNode(""), m.observe(w, {characterData: !0}), b = function () {
                    w.data = y = ++y % 2
                }) : f ? ((v = new MessageChannel).port1.onmessage = g, b = function () {
                    return v.port2.postMessage(0)
                }) : b = void 0 === l ? function () {
                    try {
                        var t = Function("return this")().require("vertx");
                        return void 0 !== (r = t.runOnLoop || t.runOnContext) ? function () {
                            r(g)
                        } : p()
                    } catch (t) {
                        return p()
                    }
                }() : p();
                var C = Math.random().toString(36).substring(2);

                function T() {
                }

                var S = void 0, A = 1, $ = 2, E = {error: null};

                function _(t) {
                    try {
                        return t.then
                    } catch (t) {
                        return E.error = t, E
                    }
                }

                function O(e, i, n) {
                    i.constructor === e.constructor && n === x && i.constructor.resolve === k ? function (t, e) {
                        e._state === A ? j(t, e._result) : e._state === $ ? N(t, e._result) : M(e, void 0, function (e) {
                            return P(t, e)
                        }, function (e) {
                            return N(t, e)
                        })
                    }(e, i) : n === E ? (N(e, E.error), E.error = null) : void 0 === n ? j(e, i) : t(n) ? function (t, e, i) {
                        a(function (t) {
                            var n = !1, o = function (t, e, i, n) {
                                try {
                                    t.call(e, i, n)
                                } catch (t) {
                                    return t
                                }
                            }(i, e, function (i) {
                                n || (n = !0, e !== i ? P(t, i) : j(t, i))
                            }, function (e) {
                                n || (n = !0, N(t, e))
                            }, t._label);
                            !n && o && (n = !0, N(t, o))
                        }, t)
                    }(e, i, n) : j(e, i)
                }

                function P(t, e) {
                    var i, n;
                    t === e ? N(t, new TypeError("You cannot resolve a promise with itself")) : (n = typeof(i = e), null === i || "object" !== n && "function" !== n ? j(t, e) : O(t, e, _(e)))
                }

                function I(t) {
                    t._onerror && t._onerror(t._result), L(t)
                }

                function j(t, e) {
                    t._state === S && (t._result = e, t._state = A, 0 !== t._subscribers.length && a(L, t))
                }

                function N(t, e) {
                    t._state === S && (t._state = $, t._result = e, a(I, t))
                }

                function M(t, e, i, n) {
                    var o = t._subscribers, r = o.length;
                    t._onerror = null, o[r] = e, o[r + A] = i, o[r + $] = n, 0 === r && t._state && a(L, t)
                }

                function L(t) {
                    var e = t._subscribers, i = t._state;
                    if (0 !== e.length) {
                        for (var n = void 0, o = void 0, r = t._result, s = 0; s < e.length; s += 3) n = e[s], o = e[s + i], n ? H(i, n, o, r) : o(r);
                        t._subscribers.length = 0
                    }
                }

                function H(e, i, n, o) {
                    var r = t(n), s = void 0, a = void 0, l = void 0, c = void 0;
                    if (r) {
                        if ((s = function (t, e) {
                            try {
                                return t(e)
                            } catch (t) {
                                return E.error = t, E
                            }
                        }(n, o)) === E ? (c = !0, a = s.error, s.error = null) : l = !0, i === s) return void N(i, new TypeError("A promises callback cannot return that same promise."))
                    } else s = o, l = !0;
                    i._state !== S || (r && l ? P(i, s) : c ? N(i, a) : e === A ? j(i, s) : e === $ && N(i, s))
                }

                var D = 0;

                function F(t) {
                    t[C] = D++, t._state = void 0, t._result = void 0, t._subscribers = []
                }

                var z = function () {
                    function t(t, e) {
                        this._instanceConstructor = t, this.promise = new t(T), this.promise[C] || F(this.promise), n(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? j(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), 0 === this._remaining && j(this.promise, this._result))) : N(this.promise, new Error("Array Methods must be provided an Array"))
                    }

                    return t.prototype._enumerate = function (t) {
                        for (var e = 0; this._state === S && e < t.length; e++) this._eachEntry(t[e], e)
                    }, t.prototype._eachEntry = function (t, e) {
                        var i = this._instanceConstructor, n = i.resolve;
                        if (n === k) {
                            var o = _(t);
                            if (o === x && t._state !== S) this._settledAt(t._state, e, t._result); else if ("function" != typeof o) this._remaining--, this._result[e] = t; else if (i === R) {
                                var r = new i(T);
                                O(r, t, o), this._willSettleAt(r, e)
                            } else this._willSettleAt(new i(function (e) {
                                return e(t)
                            }), e)
                        } else this._willSettleAt(n(t), e)
                    }, t.prototype._settledAt = function (t, e, i) {
                        var n = this.promise;
                        n._state === S && (this._remaining--, t === $ ? N(n, i) : this._result[e] = i), 0 === this._remaining && j(n, this._result)
                    }, t.prototype._willSettleAt = function (t, e) {
                        var i = this;
                        M(t, void 0, function (t) {
                            return i._settledAt(A, e, t)
                        }, function (t) {
                            return i._settledAt($, e, t)
                        })
                    }, t
                }();
                var R = function () {
                    function t(e) {
                        this[C] = D++, this._result = this._state = void 0, this._subscribers = [], T !== e && ("function" != typeof e && function () {
                            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                        }(), this instanceof t ? function (t, e) {
                            try {
                                e(function (e) {
                                    P(t, e)
                                }, function (e) {
                                    N(t, e)
                                })
                            } catch (e) {
                                N(t, e)
                            }
                        }(this, e) : function () {
                            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                        }())
                    }

                    return t.prototype.catch = function (t) {
                        return this.then(null, t)
                    }, t.prototype.finally = function (t) {
                        var e = this.constructor;
                        return this.then(function (i) {
                            return e.resolve(t()).then(function () {
                                return i
                            })
                        }, function (i) {
                            return e.resolve(t()).then(function () {
                                throw i
                            })
                        })
                    }, t
                }();
                return R.prototype.then = x, R.all = function (t) {
                    return new z(this, t).promise
                }, R.race = function (t) {
                    var e = this;
                    return n(t) ? new e(function (i, n) {
                        for (var o = t.length, r = 0; r < o; r++) e.resolve(t[r]).then(i, n)
                    }) : new e(function (t, e) {
                        return e(new TypeError("You must pass an array to race."))
                    })
                }, R.resolve = k, R.reject = function (t) {
                    var e = new this(T);
                    return N(e, t), e
                }, R._setScheduler = function (t) {
                    s = t
                }, R._setAsap = function (t) {
                    a = t
                }, R._asap = a, R.polyfill = function () {
                    var t = void 0;
                    if (void 0 !== i) t = i; else if ("undefined" != typeof self) t = self; else try {
                        t = Function("return this")()
                    } catch (t) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var e = t.Promise;
                    if (e) {
                        var n = null;
                        try {
                            n = Object.prototype.toString.call(e.resolve())
                        } catch (t) {
                        }
                        if ("[object Promise]" === n && !e.cast) return
                    }
                    t.Promise = R
                }, R.Promise = R, R
            }, t.exports = n()
        }).call(e, i(30), i(22))
    }, function (t, e, i) {
        i(140), i(153), t.exports = i(9).Array.from
    }, function (t, e, i) {
        "use strict";
        var n = i(141)(!0);
        i(142)(String, "String", function (t) {
            this._t = String(t), this._i = 0
        }, function () {
            var t, e = this._t, i = this._i;
            return i >= e.length ? {value: void 0, done: !0} : (t = n(e, i), this._i += t.length, {value: t, done: !1})
        })
    }, function (t, e, i) {
        var n = i(82), o = i(70);
        t.exports = function (t) {
            return function (e, i) {
                var r, s, a = String(o(e)), l = n(i), c = a.length;
                return l < 0 || l >= c ? t ? "" : void 0 : (r = a.charCodeAt(l)) < 55296 || r > 56319 || l + 1 === c || (s = a.charCodeAt(l + 1)) < 56320 || s > 57343 ? t ? a.charAt(l) : r : t ? a.slice(l, l + 2) : s - 56320 + (r - 55296 << 10) + 65536
            }
        }
    }, function (t, e, i) {
        "use strict";
        var n = i(120), o = i(23), r = i(122), s = i(32), a = i(86), l = i(146), c = i(128), u = i(152),
            d = i(10)("iterator"), f = !([].keys && "next" in [].keys()), p = function () {
                return this
            };
        t.exports = function (t, e, i, h, g, v, y) {
            l(i, e, h);
            var m, w, b, x = function (t) {
                    if (!f && t in S) return S[t];
                    switch (t) {
                        case"keys":
                        case"values":
                            return function () {
                                return new i(this, t)
                            }
                    }
                    return function () {
                        return new i(this, t)
                    }
                }, k = e + " Iterator", C = "values" == g, T = !1, S = t.prototype,
                A = S[d] || S["@@iterator"] || g && S[g], $ = A || x(g), E = g ? C ? x("entries") : $ : void 0,
                _ = "Array" == e && S.entries || A;
            if (_ && (b = u(_.call(new t))) !== Object.prototype && b.next && (c(b, k, !0), n || "function" == typeof b[d] || s(b, d, p)), C && A && "values" !== A.name && (T = !0, $ = function () {
                return A.call(this)
            }), n && !y || !f && !T && S[d] || s(S, d, $), a[e] = $, a[k] = p, g) if (m = {
                values: C ? $ : x("values"),
                keys: v ? $ : x("keys"),
                entries: E
            }, y) for (w in m) w in S || r(S, w, m[w]); else o(o.P + o.F * (f || T), e, m);
            return m
        }
    }, function (t, e, i) {
        t.exports = !i(74) && !i(83)(function () {
            return 7 != Object.defineProperty(i(121)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, e, i) {
        var n = i(73);
        t.exports = function (t, e) {
            if (!n(t)) return t;
            var i, o;
            if (e && "function" == typeof(i = t.toString) && !n(o = i.call(t))) return o;
            if ("function" == typeof(i = t.valueOf) && !n(o = i.call(t))) return o;
            if (!e && "function" == typeof(i = t.toString) && !n(o = i.call(t))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function (t, e, i) {
        "use strict";
        var n = i(147), o = i(84), r = i(128), s = {};
        i(32)(s, i(10)("iterator"), function () {
            return this
        }), t.exports = function (t, e, i) {
            t.prototype = n(s, {next: o(1, i)}), r(t, e + " Iterator")
        }
    }, function (t, e, i) {
        var n = i(72), o = i(148), r = i(127), s = i(91)("IE_PROTO"), a = function () {
        }, l = function () {
            var t, e = i(121)("iframe"), n = r.length;
            for (e.style.display = "none", i(151).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; n--;) delete l.prototype[r[n]];
            return l()
        };
        t.exports = Object.create || function (t, e) {
            var i;
            return null !== t ? (a.prototype = n(t), i = new a, a.prototype = null, i[s] = t) : i = l(), void 0 === e ? i : o(i, e)
        }
    }, function (t, e, i) {
        var n = i(71), o = i(72), r = i(87);
        t.exports = i(74) ? Object.defineProperties : function (t, e) {
            o(t);
            for (var i, s = r(e), a = s.length, l = 0; a > l;) n.f(t, i = s[l++], e[i]);
            return t
        }
    }, function (t, e, i) {
        var n = i(75), o = i(88), r = i(125)(!1), s = i(91)("IE_PROTO");
        t.exports = function (t, e) {
            var i, a = o(t), l = 0, c = [];
            for (i in a) i != s && n(a, i) && c.push(i);
            for (; e.length > l;) n(a, i = e[l++]) && (~r(c, i) || c.push(i));
            return c
        }
    }, function (t, e, i) {
        var n = i(82), o = Math.max, r = Math.min;
        t.exports = function (t, e) {
            return (t = n(t)) < 0 ? o(t + e, 0) : r(t, e)
        }
    }, function (t, e, i) {
        var n = i(31).document;
        t.exports = n && n.documentElement
    }, function (t, e, i) {
        var n = i(75), o = i(92), r = i(91)("IE_PROTO"), s = Object.prototype;
        t.exports = Object.getPrototypeOf || function (t) {
            return t = o(t), n(t, r) ? t[r] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
        }
    }, function (t, e, i) {
        "use strict";
        var n = i(123), o = i(23), r = i(92), s = i(154), a = i(155), l = i(90), c = i(156), u = i(157);
        o(o.S + o.F * !i(159)(function (t) {
            Array.from(t)
        }), "Array", {
            from: function (t) {
                var e, i, o, d, f = r(t), p = "function" == typeof this ? this : Array, h = arguments.length,
                    g = h > 1 ? arguments[1] : void 0, v = void 0 !== g, y = 0, m = u(f);
                if (v && (g = n(g, h > 2 ? arguments[2] : void 0, 2)), void 0 == m || p == Array && a(m)) for (i = new p(e = l(f.length)); e > y; y++) c(i, y, v ? g(f[y], y) : f[y]); else for (d = m.call(f), i = new p; !(o = d.next()).done; y++) c(i, y, v ? s(d, g, [o.value, y], !0) : o.value);
                return i.length = y, i
            }
        })
    }, function (t, e, i) {
        var n = i(72);
        t.exports = function (t, e, i, o) {
            try {
                return o ? e(n(i)[0], i[1]) : e(i)
            } catch (e) {
                var r = t.return;
                throw void 0 !== r && n(r.call(t)), e
            }
        }
    }, function (t, e, i) {
        var n = i(86), o = i(10)("iterator"), r = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (n.Array === t || r[o] === t)
        }
    }, function (t, e, i) {
        "use strict";
        var n = i(71), o = i(84);
        t.exports = function (t, e, i) {
            e in t ? n.f(t, e, o(0, i)) : t[e] = i
        }
    }, function (t, e, i) {
        var n = i(158), o = i(10)("iterator"), r = i(86);
        t.exports = i(9).getIteratorMethod = function (t) {
            if (void 0 != t) return t[o] || t["@@iterator"] || r[n(t)]
        }
    }, function (t, e, i) {
        var n = i(89), o = i(10)("toStringTag"), r = "Arguments" == n(function () {
            return arguments
        }());
        t.exports = function (t) {
            var e, i, s;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(i = function (t, e) {
                try {
                    return t[e]
                } catch (t) {
                }
            }(e = Object(t), o)) ? i : r ? n(e) : "Object" == (s = n(e)) && "function" == typeof e.callee ? "Arguments" : s
        }
    }, function (t, e, i) {
        var n = i(10)("iterator"), o = !1;
        try {
            var r = [7][n]();
            r.return = function () {
                o = !0
            }, Array.from(r, function () {
                throw 2
            })
        } catch (t) {
        }
        t.exports = function (t, e) {
            if (!e && !o) return !1;
            var i = !1;
            try {
                var r = [7], s = r[n]();
                s.next = function () {
                    return {done: i = !0}
                }, r[n] = function () {
                    return s
                }, t(r)
            } catch (t) {
            }
            return i
        }
    }, function (t, e, i) {
        i(161), t.exports = i(9).Array.includes
    }, function (t, e, i) {
        "use strict";
        var n = i(23), o = i(125)(!0);
        n(n.P, "Array", {
            includes: function (t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), i(162)("includes")
    }, function (t, e, i) {
        var n = i(10)("unscopables"), o = Array.prototype;
        void 0 == o[n] && i(32)(o, n, {}), t.exports = function (t) {
            o[n][t] = !0
        }
    }, function (t, e, i) {
        i(164), t.exports = i(9).Object.assign
    }, function (t, e, i) {
        var n = i(23);
        n(n.S + n.F, "Object", {assign: i(165)})
    }, function (t, e, i) {
        "use strict";
        var n = i(87), o = i(166), r = i(129), s = i(92), a = i(124), l = Object.assign;
        t.exports = !l || i(83)(function () {
            var t = {}, e = {}, i = Symbol(), n = "abcdefghijklmnopqrst";
            return t[i] = 7, n.split("").forEach(function (t) {
                e[t] = t
            }), 7 != l({}, t)[i] || Object.keys(l({}, e)).join("") != n
        }) ? function (t, e) {
            for (var i = s(t), l = arguments.length, c = 1, u = o.f, d = r.f; l > c;) for (var f, p = a(arguments[c++]), h = u ? n(p).concat(u(p)) : n(p), g = h.length, v = 0; g > v;) d.call(p, f = h[v++]) && (i[f] = p[f]);
            return i
        } : l
    }, function (t, e) {
        e.f = Object.getOwnPropertySymbols
    }, function (t, e, i) {
        i(168), t.exports = i(9).Object.entries
    }, function (t, e, i) {
        var n = i(23), o = i(169)(!0);
        n(n.S, "Object", {
            entries: function (t) {
                return o(t)
            }
        })
    }, function (t, e, i) {
        var n = i(87), o = i(88), r = i(129).f;
        t.exports = function (t) {
            return function (e) {
                for (var i, s = o(e), a = n(s), l = a.length, c = 0, u = []; l > c;) r.call(s, i = a[c++]) && u.push(t ? [i, s[i]] : s[i]);
                return u
            }
        }
    }, function (t, e, i) {
        i(171), t.exports = i(9).String.includes
    }, function (t, e, i) {
        "use strict";
        var n = i(23), o = i(130);
        n(n.P + n.F * i(131)("includes"), "String", {
            includes: function (t) {
                return !!~o(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, function (t, e, i) {
        var n = i(73), o = i(89), r = i(10)("match");
        t.exports = function (t) {
            var e;
            return n(t) && (void 0 !== (e = t[r]) ? !!e : "RegExp" == o(t))
        }
    }, function (t, e, i) {
        i(174), t.exports = i(9).String.startsWith
    }, function (t, e, i) {
        "use strict";
        var n = i(23), o = i(90), r = i(130), s = "".startsWith;
        n(n.P + n.F * i(131)("startsWith"), "String", {
            startsWith: function (t) {
                var e = r(this, t, "startsWith"),
                    i = o(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)), n = String(t);
                return s ? s.call(e, n, i) : e.slice(i, i + n.length) === n
            }
        })
    }, function (t, e, i) {
        var n;
        void 0 === (n = function (t) {
            var e = i(0);
            !function () {
                function t(t) {
                    var i = "", n = 0;
                    return e(t.get().reverse()).each(function (t, o) {
                        "" == i ? i = e(o).find("a:first").text() : i += ">" + e(o).find("a:first").text(), n++
                    }), {string: i, depth: n}
                }

                function i() {
                    var t = "";
                    return window.innerWidth && (t = window.innerWidth > 1440 ? "Extra wide" : window.innerWidth > 1024 ? "Desktop" : window.innerWidth > 640 ? "Tablet" : "Mobile"), t
                }

                e(function () {
                    var n, o = i();
                    window.onresize = function () {
                        var t = i();
                        return o != t && ("undefined" != typeof NCIAnalytics && "function" == typeof NCIAnalytics.Resize && NCIAnalytics.Resize(this, t), o = t), t
                    }, e("#mega-nav a").filter(function () {
                        return 0 === e(this).closest(".mobile-item").length
                    }).on("click.analytics", function (t) {
                        var i = e(this), n = [], o = i.parent("li").parents("li");
                        n.push(i[0]), o.children("a").length > 0 && n.push(o.children("a")[0]), o.children("div").children("a").length > 0 && n.push(o.children("div").children("a")[0]), NCIAnalytics.MegaMenuClick(this, n)
                    });
                    var r = e("#mega-nav"), s = e(".mobile-menu-bar");
                    r.on("mouseenter.analytics", ".nav-item", function (t) {
                        window.clearTimeout(n), s.is(":hidden") && (n = window.setTimeout(function () {
                            var t = e("#mega-nav a.open").text();
                            NCIAnalytics.MegaMenuDesktopReveal(this, t)
                        }, 1e3))
                    }).on("mouseleave.analytics", ".nav-item", function (t) {
                        window.clearTimeout(n)
                    }).on("click.analytics", "button.toggle", function () {
                        var i = e(this), n = "true" === i.attr("aria-expanded"), o = t(i.parents("li")).string;
                        i.prev().text();
                        NCIAnalytics.MegaMenuMobileAccordionClick(this, n, o)
                    }).on("click.analytics", ".lvl-1 a, .mobile-item a", function (t) {
                        if (s.is(":visible")) {
                            var i = e(this), n = "www.cancer.gov" + location.pathname.toLowerCase(), o = i.text(),
                                r = i.attr("href"), a = i.closest(".lvl-1"),
                                l = e.trim(a.children(":first").find("a").text()), c = i.closest(".lvl-2"),
                                u = c[0] && c.children(":first").find("a").get(0) !== this ? e.trim(c.children(":first").find("a").text()) : l;
                            NCIAnalytics.MegaMenuMobileLinkClick(this, n, o, r, l, u)
                        }
                    }), s.on("click.analytics", ".nav-header", function () {
                        var t = !1;
                        "false" === e("#mega-nav > .nav-menu").attr("aria-hidden") && (t = !0), t && NCIAnalytics.MegaMenuMobileReveal(this)
                    }), e(".utility a").each(function (t, i) {
                        e(i).on("click.analytics", function (t) {
                            var i = e(this).text();
                            NCIAnalytics.UtilityBarClick(this, i)
                        })
                    }), e(".nci-logo").on("click.analytics", function (t) {
                        NCIAnalytics.LogoClick(this)
                    }), e(".feature-primary .feature-card").each(function (t, i) {
                        e(i).on("click.analytics", "a", function (i) {
                            var n = e(this), o = n.children("h3").text(), r = n.children("h3").text(), s = t + 1;
                            NCIAnalytics.CardClick(this, o, r, "Feature", s)
                        })
                    }), e(".feature-secondary .feature-card").each(function (t, i) {
                        e(i).on("click.analytics", "a", function (i) {
                            var n = e(this), o = n.children("h3").text(), r = n.children("h3").text(), s = t + 1;
                            NCIAnalytics.CardClick(this, o, r, "SecondaryFeature", s)
                        })
                    }), e(".guide-card .card").each(function (t, i) {
                        e(i).on("click.analytics", "a", function (n) {
                            var o = e(this), r = e(i).children("h2").text(), s = o.text(), a = t + 1;
                            NCIAnalytics.CardClick(this, r, s, "Guide", a)
                        })
                    }), e(".multimedia .card").each(function (t, i) {
                        e(i).on("click.analytics", "a", function (i) {
                            var n = e(this), o = n.children("h3").text(), r = n.children("h3").text(), s = t + 1;
                            NCIAnalytics.CardClick(this, o, r, "Multimedia", s)
                        })
                    }), e(".card-thumbnail .card-thumbnail-image").each(function (t, i) {
                        e(i).on("click.analytics", "a", function (i) {
                            var n = e(this).closest("a").attr("data-title"), o = t + 1;
                            NCIAnalytics.CardClick(this, n, "Image", "Thumbnail", o)
                        })
                    }), e(".card-thumbnail .card-thumbnail-text").each(function (t, i) {
                        e(i).on("click.analytics", "a", function (i) {
                            var n = e(this), o = n.closest("h3").find("a:first").text(),
                                r = n.closest("h3").find("a:first").text(), s = t + 1;
                            NCIAnalytics.CardClick(this, o, r, "Thumbnail", s)
                        })
                    }), e(".cthp-card-container .cthpCard").each(function (t, i) {
                        e(i).on("click.analytics", "a", function (i) {
                            var n = e(this), o = n.closest(".cthpCard").find("h3:first").text(), r = n.text(),
                                s = t + 1;
                            NCIAnalytics.CardClick(this, o, r, "CTHP", s)
                        })
                    }), e(".topic-feature .feature-card").each(function (t, i) {
                        e(i).on("click.analytics", "a", function (i) {
                            var n = e(this), o = n.parents("#cgvBody,#cgvIntroText")[0], r = n.children("h3").text(),
                                s = "img" == i.target.tagName.toLowerCase() ? "Image" : n.children("h3").text(),
                                a = o ? "InlineCard" : "SlottedTopicCard", l = t + 1;
                            NCIAnalytics.CardClick(this, r, s, a, l)
                        })
                    }), e("#nvcgSlSectionNav a").on("click.analytics", function (i) {
                        var n = e(this), o = "www.cancer.gov" + location.pathname.toLowerCase(),
                            r = n.closest(".level-0"), s = e.trim(r.children(":first").text()),
                            a = r.find(".level-1").is(".has-children") ? t(n.parents("li")).string : "", l = n.text(),
                            c = t(n.parents("li")).depth;
                        NCIAnalytics.SectionLinkClick(this, o, s, l, c, a)
                    }), e(".feature .video").each(function (t, i) {
                        e(i).on("click.analytics", "a", function (t) {
                            var i = e(this).attr("data-analytics"),
                                n = window.location.hostname + window.location.pathname;
                            NCIAnalytics.VideoSplashImageClick(this, i, n)
                        })
                    }), e(".feature .icons").each(function (t, i) {
                        e(i).on("click.analytics", "a", function (t) {
                            var i = e(this).attr("data-analytics"),
                                n = window.location.hostname + window.location.pathname;
                            NCIAnalytics.BRPiconClick(this, i, n)
                        })
                    }), e(".accordion section").each(function (t, i) {
                        e(i).on("click", "h2", function (t) {
                            var i = e(this);
                            accordionId = i.closest(".accordion").attr("id"), sectionId = i.closest("section").attr("id"), accordionId && (sectionId || (sectionId = "none"), displayedName = i.text(), displayedName || (displayedName = "none"), action = "expand", "false" === i.attr("aria-expanded") && (action = "collapse"), NCIAnalytics.AccordionClick(i, accordionId, sectionId, displayedName, action))
                        })
                    }), e(".add_this_btn").each(function () {
                        var t = e(this);
                        t.on("click.analytics", t, function (t) {
                            NCIAnalytics.BookmarkShareClick(this)
                        })
                    }), e(".po-font-resize a").on("click.analytics", function (t) {
                        var i = e(this);
                        i.off("mouseleave.analytics"), i.on("mouseleave.analytics", function () {
                            var t, n = e(".resize-content:first")[0] ? e(".resize-content:first") : e("#cgvBody"),
                                o = parseInt(n.css("font-size"));
                            t = o < 19 ? "Normal" : o < 23 ? "Medium" : o < 27 ? "Large" : "Extra Large", NCIAnalytics.fontResizer(this, t), i.off("mouseleave.analytics")
                        })
                    }), jQuery("#how-to-submit-a-grant-application, #application-development, #application-submission-resources, #grants-funding-opportunities").find("a").on("click.analytics", function () {
                        NCIAnalytics.GlobalLinkTrack({
                            sender: this,
                            label: jQuery(this).text(),
                            eventList: "ogapreaward"
                        })
                    }), jQuery("#application-submission").find("p a, ol a").on("click.analytics", function () {
                        jQuery(this).attr("href").indexOf("grants.") > -1 && NCIAnalytics.GlobalLinkTrack({
                            sender: this,
                            label: jQuery(this).text(),
                            eventList: "ogapreaward"
                        })
                    }), jQuery("#pre-award-activities").find("a").on("click.analytics", function () {
                        NCIAnalytics.GlobalLinkTrack({
                            sender: this,
                            label: jQuery(this).text(),
                            eventList: "ogareceiving"
                        })
                    }), jQuery('h3:contains("Preparation of Awards")').nextAll().find("a").on("click.analytics", function () {
                        NCIAnalytics.GlobalLinkTrack({
                            sender: this,
                            label: jQuery(this).text(),
                            eventList: "ogareceiving"
                        })
                    }), jQuery(".post-award-links").find("a").on("click.analytics", function () {
                        NCIAnalytics.GlobalLinkTrack({
                            sender: this,
                            label: jQuery(this).text(),
                            eventList: "ogacloseout"
                        })
                    }), location.pathname.indexOf("grants-training/grants-process/grant-closeout") > -1 && jQuery(".related-resources").find("a").on("click.analytics", function () {
                        jQuery(this).attr("href").indexOf("grants.") > -1 && NCIAnalytics.GlobalLinkTrack({
                            sender: this,
                            label: jQuery(this).text(),
                            eventList: "ogacloseout"
                        })
                    }), jQuery("#apply").on("click", "a", function () {
                        jQuery(this).text().search(/^(download the)(.+)(award application)/gi) > -1 && NCIAnalytics.GlobalLinkTrack({
                            sender: this,
                            label: jQuery(this).text(),
                            eventList: "cctappdownload"
                        })
                    }), jQuery("#predoctoral, #postdoctoral, #clinical-fellow, #postbaccalaureate").on("click", "a", function () {
                        var t = jQuery(this).text(), e = t && "how to apply" === t.toLowerCase() ? "ccthowtoapply" : "";
                        NCIAnalytics.GlobalLinkTrack({sender: this, label: t, eventList: e})
                    })
                }), e(window).on("load", function () {
                    e("#nvcgSlSectionNav button.toggle").on("click.analytics", function (i) {
                        var n = e(this), o = "www.cancer.gov" + location.pathname.toLowerCase(),
                            r = n.closest(".level-0"), s = e.trim(r.children(":first").text()),
                            a = t(n.parents("li:not(.level-0)")).string, l = "true" == n.attr("aria-expanded");
                        NCIAnalytics.SectionAccordionClick(this, o, l, s, a)
                    }), e("#section-menu-button").on("click.analytics", function (t) {
                        var i = e(".section-nav"), n = e(".section-nav .level-0 a:first").text();
                        i.is(".open") || NCIAnalytics.SectionMenuButtonClick(this, n)
                    }), e("#apply-training-post-resume").on("click.analytics", function () {
                        NCIAnalytics.GlobalLinkTrack({sender: this, label: "post-resume"})
                    }), e("#app-download-iphone").on("click.analytics", function () {
                        NCIAnalytics.GlobalLinkTrack({sender: this, label: "download-fyi-app_iphone"})
                    }), e("#app-download-ipad").on("click.analytics", function () {
                        NCIAnalytics.GlobalLinkTrack({sender: this, label: "download-fyi-app_ipad"})
                    }), e("#app-download-android").on("click.analytics", function () {
                        NCIAnalytics.GlobalLinkTrack({sender: this, label: "download-fyi-app_android"})
                    }), -1 != window.location.pathname.indexOf("/grants-training/training/contact") && (e("#cgvBody ul").eq(0).find("li").each(function () {
                        e(this).find("a").on("click", function () {
                            NCIAnalytics.GlobalLinkTrack({sender: this, label: jQuery(this).text()})
                        })
                    }), e("#cgvBody table tr td a").each(function () {
                        -1 != e(this).attr("href").indexOf("mailto:") && e(this).on("click", function () {
                            NCIAnalytics.GlobalLinkTrack({sender: this, label: "email-contact"})
                        })
                    })), e(".previous-link, .next-link").on("click", "a", function () {
                        var t = jQuery(this).text();
                        t = t.replace(/[<>]/, "").trim(), NCIAnalytics.GlobalLinkTrack({sender: this, label: t})
                    }), e(".pdq-hp-patient-toggle").on("click", "a", function () {
                        NCIAnalytics.GlobalLinkTrack({sender: this, label: jQuery(this).text()})
                    });
                    var i = window.location.hostname + window.location.pathname;
                    e("#blog-archive-accordion").on("click", "a", function () {
                        NCIAnalytics.BlogArchiveLinkClick(this, i)
                    }), e("#blog-archive-accordion").on("click", "h3, h4", function () {
                        var t = !e(this).hasClass("ui-state-active");
                        NCIAnalytics.BlogArchiveAccordionClick(this, window.location.hostname + window.location.pathname, t)
                    }), e(".blogRSS").on("click", function () {
                        NCIAnalytics.BlogSubscribeClick(this, i)
                    }), e(".cgvblogpost #cgvBody").on("click", "a", function () {
                        var t = e(this), n = t.text();
                        t.hasClass("definition") ? NCIAnalytics.BlogBodyLinkClick(this, n, i, !0) : NCIAnalytics.BlogBodyLinkClick(this, n, i)
                    }), e("#nvcgRelatedResourcesArea").on("click", "a", function () {
                        var t = e(this), n = t.text(), o = t.closest("li").index() + 1;
                        NCIAnalytics.BlogRelatedLinksClick(this, n, i, o)
                    }), e(".blog-feature .feature-card").each(function (t, n) {
                        e(n).on("click", "a", function (n) {
                            var o = e(this).children("h3").text(), r = t + 1;
                            NCIAnalytics.BlogCardClick(this, o, r, i)
                        })
                    }), e(".right-rail .managed.list.with-date li").each(function (t, n) {
                        e(n).on("click", "a", function (n) {
                            var o = e(this).text(), r = t + 1;
                            NCIAnalytics.FeaturedPostsClick(this, o, r, i)
                        })
                    }), e(".right-rail .managed.list.without-date li").each(function (t, n) {
                        e(n).on("click", "a", function (n) {
                            var o = e(this).text(), r = t + 1;
                            NCIAnalytics.CategoryClick(this, o, r, i)
                        })
                    }), e(".blog-pager.clearfix").on("click", "a", function () {
                        var t = e(this).attr("class"), n = "";
                        "older" == t ? n = "Older" : "newer" == t && (n = "Newer"), NCIAnalytics.OlderNewerClick(this, n, i)
                    }), e("#cgvSlPagination").on("click", "a", function () {
                        var t = e(this).parent().attr("class"), n = "";
                        "blog-post-older" == t ? n = "Older" : "blog-post-newer" == t && (n = "Newer"), NCIAnalytics.OlderNewerClick(this, n, i)
                    });
                    var n = !1;
                    e("table[data-sortable]").on("click.analytics", "th", function () {
                        var t = window.location.hostname + window.location.pathname;
                        n || (NCIAnalytics.TableSortHeaderClick(this, t), n = !0)
                    })
                })
            }()
        }.call(e, i, e, t)) || (t.exports = n)
    }, function (t, e) {
    }, function (t, e, i) {
        var n;
        void 0 === (n = function (t) {
            i(0);
            var e = i(93), n = !1, o = i(4);
            return {
                init: function () {
                    n || (!function () {
                        i(2), window.innerWidth || $(window).width();
                        var t = "English";
                        "es" === $("html").attr("lang") && (t = "Spanish");
                        var r = $("#swKeyword");
                        if (0 !== r.length) {
                            var s = "/AutoSuggestSearch.svc/SearchJSON/" + t, a = function (t) {
                                var e, i;
                                (window.innerWidth || $(window).width()) <= o.breakpoints.large ? (e = {
                                    my: "left top",
                                    at: "left bottom",
                                    of: "#nvcgSlMainNav"
                                }, i = function () {
                                    this.menu.element.outerWidth("100%")
                                }) : (e = $.ui.autocomplete.prototype.options.position, i = $.ui.autocomplete.prototype._resizeMenu), t.autocomplete("option", "position", e).autocomplete("option", "classes", {"ui-autocomplete": "sitewide-search-menu"}).data("ui-autocomplete")._resizeMenu = i
                            };
                            e.doAutocomplete(r, s, !1, "term"), a(r), $(window).on("resize.NCI.search", function () {
                                a(r), r.autocomplete("close")
                            }), n = !0
                        }
                    }(), n = !0)
                }
            }
        }.call(e, i, e, t)) || (t.exports = n)
    }, function (t, e, i) {
        (function (n) {
            var o;
            void 0 === (o = function (t) {
                i(179);
                var e = !1;
                return {
                    init: function () {
                        e || (!function (t) {
                            n.addTest("windows", -1 != navigator.platform.indexOf("Win")), n.addTest("mac", -1 != navigator.platform.indexOf("Mac")), n.addTest("linux", -1 != navigator.platform.indexOf("Linux")), n.addTest("iphone", -1 != navigator.platform.indexOf("iPhone")), n.addTest("ipad", -1 != navigator.platform.indexOf("iPad")), n.addTest("android", -1 != navigator.platform.indexOf("Android"));
                            var e = t("#mega-nav");
                            e.accessibleMegaMenu({
                                uuidPrefix: "accessible-megamenu",
                                menuClass: "nav-menu",
                                topNavItemClass: "nav-item",
                                panelClass: "sub-nav-mega",
                                panelGroupClass: "sub-nav-group",
                                hoverClass: "hover",
                                focusClass: "focus",
                                openClass: "open"
                            }), e.find(".sub-nav-group-wrapper").bind("mouseleave", function (e) {
                                t(e.relatedTarget).is(".sub-nav-mega") && t(this).closest(".nav-menu").trigger("mouseout")
                            }).each(function () {
                                var e = t(this);
                                e.outerHeight() > 300 && e.parent().addClass("mega-menu-scroll")
                            }), t("html").is(".no-csstransitions") && (e.find(".sub-nav-mega").each(function () {
                                var e = t(this);
                                e.data("initHeight", e[0].scrollHeight).height(0)
                            }), e.on("mouseenter", "li.nav-item", function () {
                                var e = t(this).find(".sub-nav-mega"), i = e.data("initHeight");
                                e.stop(!0, !0).delay(500).animate({opacity: 1, height: i}, 500)
                            }).on("mouseleave", "li.nav-item", function () {
                                t(this).find(".sub-nav-mega").stop(!0, !0).delay(100).animate({
                                    opacity: 0,
                                    height: 0
                                }, 250)
                            }))
                        }(jQuery), jQuery(document).ready(function () {
                            $(".sub-nav-mega").each(function () {
                                $(this).text().trim().length || $(this).addClass("empty-mega")
                            })
                        }), e = !0)
                    }
                }
            }.call(e, i, e, t)) || (t.exports = o)
        }).call(e, i(29))
    }, function (t, e) {
        !function (t, e, i) {
            "use strict";
            var n, o, r, s, a, l, c, u, d, f, p, h, g, v, y, m, w, b = "accessibleMegaMenu", x = {
                uuidPrefix: "accessible-megamenu",
                menuClass: "accessible-megamenu",
                topNavItemClass: "accessible-megamenu-top-nav-item",
                panelClass: "accessible-megamenu-panel",
                panelGroupClass: "accessible-megamenu-panel-group",
                hoverClass: "hover",
                focusClass: "focus",
                openClass: "open"
            }, k = {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38,
                keyMap: {
                    48: "0",
                    49: "1",
                    50: "2",
                    51: "3",
                    52: "4",
                    53: "5",
                    54: "6",
                    55: "7",
                    56: "8",
                    57: "9",
                    59: ";",
                    65: "a",
                    66: "b",
                    67: "c",
                    68: "d",
                    69: "e",
                    70: "f",
                    71: "g",
                    72: "h",
                    73: "i",
                    74: "j",
                    75: "k",
                    76: "l",
                    77: "m",
                    78: "n",
                    79: "o",
                    80: "p",
                    81: "q",
                    82: "r",
                    83: "s",
                    84: "t",
                    85: "u",
                    86: "v",
                    87: "w",
                    88: "x",
                    89: "y",
                    90: "z",
                    96: "0",
                    97: "1",
                    98: "2",
                    99: "3",
                    100: "4",
                    101: "5",
                    102: "6",
                    103: "7",
                    104: "8",
                    105: "9",
                    190: "."
                }
            };

            function C(e, i) {
                this.element = e, this.settings = t.extend({}, x, i), this._defaults = x, this._name = b, this.mouseTimeoutID = null, this.focusTimeoutID = null, this.mouseFocused = !1, this.justFocused = !1, this.init()
            }

            function T(e) {
                return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function () {
                    return "hidden" === t.css(this, "visibility")
                }).length
            }

            function S(e, i) {
                var n, o, r, s = e.nodeName.toLowerCase();
                return "area" === s ? (o = (n = e.parentNode).name, !(!e.href || !o || "map" !== n.nodeName.toLowerCase()) && (!!(r = t("img[usemap=#" + o + "]")[0]) && T(r))) : (/input|select|textarea|button|object/.test(s) ? !e.disabled : "a" === s && e.href || i) && T(e)
            }

            C.prototype = (y = 0, m = "", w = "function" == typeof e.hasOwnProperty && !!e.hasOwnProperty("ontouchstart"), n = function (e) {
                if (!o()) return t(e).closest(":data(plugin_" + b + ")").data("plugin_" + b)
            }, o = function () {
                return (e.innerWidth || t(e).width()) <= 1024
            }, r = function (e) {
                if (!o()) {
                    e = t(e);
                    var i = this.settings;
                    e.attr("id") || e.attr("id", i.uuidPrefix + "-" + (new Date).getTime() + "-" + ++y)
                }
            }, s = function (e, n) {
                if (!o()) {
                    var r, s = t(e.target), a = this, l = this.settings, c = this.menu,
                        u = s.closest("." + l.topNavItemClass),
                        d = s.hasClass(l.panelClass) ? s : s.closest("." + l.panelClass);
                    if (v.call(this, !0), n) if ((u = c.find("." + l.topNavItemClass + " ." + l.openClass + ":first").closest("." + l.topNavItemClass)).is(e.relatedTarget) || u.has(e.relatedTarget).length > 0) 0 === u.length && c.find("[aria-expanded=true]").attr("aria-expanded", "false").removeClass(l.openClass).filter("." + l.panelClass).attr("aria-hidden", "true"); else {
                        if (("mouseout" === e.type || "focusout" === e.type) && u.has(i.activeElement).length > 0) return;
                        u.find("[aria-expanded]").attr("aria-expanded", "false").removeClass(l.openClass).filter("." + l.panelClass).attr("aria-hidden", "true"), ("keydown" === e.type && e.keyCode === k.ESCAPE || "DOMAttrModified" === e.type) && (r = u.find(":tabbable:first"), setTimeout(function () {
                            c.find("[aria-expanded]." + a.settings.panelClass).off("DOMAttrModified.accessible-megamenu"), r.focus(), a.justFocused = !1
                        }, 99))
                    } else clearTimeout(a.focusTimeoutID), u.siblings().find("[aria-expanded]").attr("aria-expanded", "false").removeClass(l.openClass).filter("." + l.panelClass).attr("aria-hidden", "true"), u.find("[aria-expanded]").attr("aria-expanded", "true").addClass(l.openClass).filter("." + l.panelClass).attr("aria-hidden", "false"), "mouseover" === e.type && s.is(":tabbable") && 1 === u.length && 0 === d.length && c.has(i.activeElement).length > 0 && (s.focus(), a.justFocused = !1), v.call(a)
                }
            }, a = function (e) {
                if (!o()) {
                    var i = t(e.target), n = i.closest("." + this.settings.topNavItemClass),
                        r = i.closest("." + this.settings.panelClass);
                    1 === n.length && 0 === r.length && 1 === n.find("." + this.settings.panelClass).length && (i.hasClass(this.settings.openClass) ? this.justFocused ? (e.preventDefault(), e.stopPropagation(), this.justFocused = !1) : w && (e.preventDefault(), e.stopPropagation(), s.call(this, e, i.hasClass(this.settings.openClass))) : (e.preventDefault(), e.stopPropagation(), s.call(this, e), this.justFocused = !1))
                }
            }, l = function (e) {
                o() || 0 === t(e.target).closest(this.menu).length && (e.preventDefault(), e.stopPropagation(), s.call(this, e, !0))
            }, c = function (e) {
                o() || "aria-expanded" === e.originalEvent.attrName && "false" === e.originalEvent.newValue && t(e.target).hasClass(this.settings.openClass) && (e.preventDefault(), e.stopPropagation(), s.call(this, e, !0))
            }, u = function (e) {
                if (!o()) {
                    clearTimeout(this.focusTimeoutID);
                    var i = t(e.target), n = i.closest("." + this.settings.panelClass);
                    i.addClass(this.settings.focusClass).on("click.accessible-megamenu", t.proxy(a, this)), this.justFocused = !this.mouseFocused, this.mouseFocused = !1, this.panels.not(n).filter("." + this.settings.openClass).length && s.call(this, e)
                }
            }, d = function (i) {
                if (!o()) {
                    this.justFocused = !1;
                    var n = this, r = t(i.target), a = r.closest("." + this.settings.topNavItemClass);
                    r.removeClass(this.settings.focusClass).off("click.accessible-megamenu"), e.cvox ? n.focusTimeoutID = setTimeout(function () {
                        e.cvox.Api.getCurrentNode(function (t) {
                            a.has(t).length ? clearTimeout(n.focusTimeoutID) : n.focusTimeoutID = setTimeout(function (t, e, i) {
                                s.call(t, e, i)
                            }, 275, n, i, !0)
                        })
                    }, 25) : n.focusTimeoutID = setTimeout(function () {
                        s.call(n, i, !0)
                    }, 300)
                }
            }, f = function (i) {
                if (!o()) {
                    var r, l, c, u, d, f, p = this.constructor === C ? this : n(this), h = p.settings,
                        g = t(t(this).is("." + h.hoverClass + ":tabbable") ? this : i.target), v = p.menu,
                        y = p.topnavitems, w = g.closest("." + h.topNavItemClass), b = v.find(":tabbable"),
                        x = g.hasClass(h.panelClass) ? g : g.closest("." + h.panelClass),
                        T = x.find("." + h.panelGroupClass), S = g.closest("." + h.panelGroupClass),
                        A = i.keyCode || i.which, $ = !1, E = k.keyMap[i.keyCode] || "",
                        _ = 1 === w.length && 0 === x.length;
                    if (!g.is("input:focus, select:focus, textarea:focus, button:focus")) {
                        switch (g.is("." + h.hoverClass + ":tabbable") && t("html").off("keydown.accessible-megamenu"), A) {
                            case k.ESCAPE:
                                s.call(p, i, !0);
                                break;
                            case k.DOWN:
                                i.preventDefault(), _ ? (s.call(p, i), $ = 1 === w.find("." + h.panelClass + " :tabbable:first").focus().length) : $ = 1 === b.filter(":gt(" + b.index(g) + "):first").focus().length, !$ && e.opera && "[object Opera]" === opera.toString() && (i.ctrlKey || i.metaKey) && (c = (b = t(":tabbable")).index(g), $ = 1 === t(":tabbable:gt(" + t(":tabbable").index(g) + "):first").focus().length);
                                break;
                            case k.UP:
                                i.preventDefault(), _ && g.hasClass(h.openClass) ? (s.call(p, i, !0), (r = y.filter(":lt(" + y.index(w) + "):last")).children("." + h.panelClass).length && ($ = 1 === r.children().attr("aria-expanded", "true").addClass(h.openClass).filter("." + h.panelClass).attr("aria-hidden", "false").find(":tabbable:last").focus())) : _ || ($ = 1 === b.filter(":lt(" + b.index(g) + "):last").focus().length), !$ && e.opera && "[object Opera]" === opera.toString() && (i.ctrlKey || i.metaKey) && (c = (b = t(":tabbable")).index(g), $ = 1 === t(":tabbable:lt(" + t(":tabbable").index(g) + "):first").focus().length);
                                break;
                            case k.RIGHT:
                                i.preventDefault(), _ ? $ = 1 === y.filter(":gt(" + y.index(w) + "):first").find(":tabbable:first").focus().length : (T.length && S.length && ($ = 1 === T.filter(":gt(" + T.index(S) + "):first").find(":tabbable:first").focus().length), $ || ($ = 1 === w.find(":tabbable:first").focus().length));
                                break;
                            case k.LEFT:
                                i.preventDefault(), _ ? $ = 1 === y.filter(":lt(" + y.index(w) + "):last").find(":tabbable:first").focus().length : (T.length && S.length && ($ = 1 === T.filter(":lt(" + T.index(S) + "):last").find(":tabbable:first").focus().length), $ || ($ = 1 === w.find(":tabbable:first").focus().length));
                                break;
                            case k.TAB:
                                c = b.index(g), i.shiftKey && _ && g.hasClass(h.openClass) ? (s.call(p, i, !0), (r = y.filter(":lt(" + y.index(w) + "):last")).children("." + h.panelClass).length && ($ = r.children().attr("aria-expanded", "true").addClass(h.openClass).filter("." + h.panelClass).attr("aria-hidden", "false").find(":tabbable:last").focus())) : i.shiftKey && c > 0 ? $ = 1 === b.filter(":lt(" + c + "):last").focus().length : !i.shiftKey && c < b.length - 1 ? $ = 1 === b.filter(":gt(" + c + "):first").focus().length : e.opera && "[object Opera]" === opera.toString() && (c = (b = t(":tabbable")).index(g), $ = i.shiftKey ? 1 === t(":tabbable:lt(" + t(":tabbable").index(g) + "):last").focus().length : 1 === t(":tabbable:gt(" + t(":tabbable").index(g) + "):first").focus().length), $ && i.preventDefault();
                                break;
                            case k.SPACE:
                                if (!_) return !0;
                                i.preventDefault(), a.call(p, i);
                                break;
                            case k.ENTER:
                                return !0;
                            default:
                                if (clearTimeout(this.keydownTimeoutID), 0 === (m += E !== m ? E : "").length) return;
                                for (this.keydownTimeoutID = setTimeout(function () {
                                    m = ""
                                }, 1e3), b = _ && !g.hasClass(h.openClass) ? b.filter(":not(." + h.panelClass + " :tabbable)") : w.find(":tabbable"), i.shiftKey && (b = t(b.get().reverse())), c = 0; c < b.length; c++) if ((u = b.eq(c)).is(g)) {
                                    l = 1 === m.length ? c + 1 : c;
                                    break
                                }
                                for (f = new RegExp("^" + m.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), "i"), c = l; c < b.length; c++) if (u = b.eq(c), d = t.trim(u.text()), f.test(d)) {
                                    $ = !0, u.focus();
                                    break
                                }
                                if (!$) for (c = 0; c < l; c++) if (u = b.eq(c), d = t.trim(u.text()), f.test(d)) {
                                    u.focus();
                                    break
                                }
                        }
                        p.justFocused = !1
                    }
                }
            }, p = function (e) {
                o() || (t(e.target).is(":focusable, ." + this.settings.panelClass) && (this.mouseFocused = !0), this.mouseTimeoutID = setTimeout(function () {
                    clearTimeout(this.focusTimeoutID)
                }, 1))
            }, h = function (e) {
                o() || (clearTimeout(this.mouseTimeoutID), t(e.target).addClass(this.settings.hoverClass), s.call(this, e), t(e.target).is(":tabbable") && t("html").on("keydown.accessible-megamenu", t.proxy(f, e.target)))
            }, g = function (e) {
                if (!o()) {
                    var i = this;
                    t(e.target).removeClass(i.settings.hoverClass), i.mouseTimeoutID = setTimeout(function () {
                        s.call(i, e, !0)
                    }, 250), t(e.target).is(":tabbable") && t("html").off("keydown.accessible-megamenu")
                }
            }, v = function (e) {
                if (!o()) {
                    var i = this.menu;
                    e ? (t("html").off("mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu,  pointerup.outside-accessible-megamenu"), i.find("[aria-expanded]." + this.settings.panelClass).off("DOMAttrModified.accessible-megamenu")) : (t("html").on("mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu,  pointerup.outside-accessible-megamenu", t.proxy(l, this)), i.find("[aria-expanded=true]." + this.settings.panelClass).on("DOMAttrModified.accessible-megamenu", t.proxy(c, this)))
                }
            }, {
                constructor: C, init: function () {
                    var e = this, n = this.settings, o = this.nav = t(this.element),
                        s = this.menu = o.children().first(), l = this.topnavitems = s.children();
                    o.attr("role", "navigation"), s.addClass(n.menuClass), l.each(function (i, o) {
                        var s, a;
                        (o = t(o)).addClass(n.topNavItemClass), s = o.find(":tabbable:first"), a = o.children(":not(:tabbable):last"), r.call(e, s), a.length && (r.call(e, a), s.attr({
                            "aria-haspopup": !0,
                            "aria-controls": a.attr("id"),
                            "aria-expanded": !1
                        }), a.attr({
                            role: "group",
                            "aria-expanded": !1,
                            "aria-hidden": !0
                        }).addClass(n.panelClass).not("[aria-labelledby]").attr("aria-labelledby", s.attr("id")))
                    }), this.panels = s.find("." + n.panelClass), s.on("focusin.accessible-megamenu", ":focusable, ." + n.panelClass, t.proxy(u, this)).on("focusout.accessible-megamenu", ":focusable, ." + n.panelClass, t.proxy(d, this)).on("keydown.accessible-megamenu", t.proxy(f, this)).on("mouseover.accessible-megamenu", t.proxy(h, this)).on("mouseout.accessible-megamenu", t.proxy(g, this)).on("mousedown.accessible-megamenu", t.proxy(p, this)), w && s.on("touchstart.accessible-megamenu", t.proxy(a, this)), s.find("hr").attr("role", "separator"), t(i.activeElement).closest(s).length && t(i.activeElement).trigger("focusin.accessible-megamenu")
                }, getDefaults: function () {
                    return this._defaults
                }, getOption: function (t) {
                    return this.settings[t]
                }, getAllOptions: function () {
                    return this.settings
                }, setOption: function (t, e, i) {
                    this.settings[t] = e, i && this.init()
                }
            }), t.fn[b] = function (e) {
                return this.each(function () {
                    t.data(this, "plugin_" + b) || t.data(this, "plugin_" + b, new C(this, e))
                })
            }, t.extend(t.expr[":"], {
                data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
                    return function (i) {
                        return !!t.data(i, e)
                    }
                }) : function (e, i, n) {
                    return !!t.data(e, n[3])
                }, focusable: function (e) {
                    return S(e, !isNaN(t.attr(e, "tabindex")))
                }, tabbable: function (e) {
                    var i = t.attr(e, "tabindex"), n = isNaN(i);
                    return (n || i >= 0) && S(e, !n)
                }
            })
        }(jQuery, window, document)
    }, function (t, e, i) {
        var n;
        void 0 === (n = function (t) {
            i(181), i(182), i(183);
            var e = !1;
            return {
                init: function () {
                    var t;
                    e || (t = $(".fixedtotop").outerHeight(), $(".fixedtotop").scrollToFixed({
                        spacerClass: "fixedtotop-spacer",
                        fixed: function () {
                            $(".fixedtotop-spacer").height(t);
                        }
                    }), $(".headroom-area").headroom({
                        offset: 205,
                        classes: {initial: "slide", pinned: "slide--reset", unpinned: "slide--up"}
                    }), e = !0, e = !0)
                }
            }
        }.call(e, i, e, t)) || (t.exports = n)
    }, function (t, e, i) {
        (function (n) {
            var o;
            void 0 === (o = function (t) {
                i(94);
                var e = n;
                window.Headroom = $.extend(!0, e, {
                    options: {classes: {isFrozen: "frozen"}},
                    prototype: {
                        shouldPin: function (t, e) {
                            var i = t < this.lastKnownScrollY, n = t <= this.offset;
                            return !this.elem.classList.contains(this.classes.isFrozen) && (i && e || n)
                        }, shouldUnpin: function (t, e) {
                            var i = t > this.lastKnownScrollY, n = t >= this.offset;
                            return !this.elem.classList.contains(this.classes.isFrozen) && i && n && e
                        }
                    }
                })
            }.call(e, i, e, t)) || (t.exports = o)
        }).call(e, i(94))
    }, function (t, e, i) {
        (function (t) {
            var e;
            (e = window.Zepto || window.jQuery) && (e.fn.headroom = function (i) {
                return this.each(function () {
                    var n = e(this), o = n.data("headroom"), r = "object" == typeof i && i;
                    r = e.extend(!0, {}, t.options, r), o || ((o = new t(this, r)).init(), n.data("headroom", o)), "string" == typeof i && (o[i](), "destroy" === i && n.removeData("headroom"))
                })
            }, e("[data-headroom]").each(function () {
                var t = e(this);
                t.headroom(t.data())
            }))
        }).call(e, i(94))
    }, function (t, e) {
        var i;
        (i = jQuery).isScrollToFixed = function (t) {
            return !!i(t).data("ScrollToFixed")
        }, i.ScrollToFixed = function (t, e) {
            var n = this;
            n.$el = i(t), n.el = t, n.$el.data("ScrollToFixed", n);
            var o, r, s, a, l = !1, c = n.$el, u = 0, d = 0, f = -1, p = -1, h = null;

            function g() {
                var t = n.options.limit;
                return t ? "function" == typeof t ? t.apply(c) : t : 0
            }

            function v() {
                return "fixed" === o
            }

            function y() {
                return "absolute" === o
            }

            function m() {
                return !(v() || y())
            }

            function w() {
                if (!v()) {
                    var t = c[0].getBoundingClientRect();
                    h.css({
                        display: c.css("display"),
                        width: t.width,
                        height: t.height,
                        float: c.css("float")
                    }), cssOptions = {
                        "z-index": n.options.zIndex,
                        position: "fixed",
                        top: -1 == n.options.bottom ? C() : "",
                        bottom: -1 == n.options.bottom ? "" : n.options.bottom}, n.options.dontSetWidth || (cssOptions.width = c.css("width")), c.css(cssOptions), c.addClass(n.options.baseClassName), n.options.className && c.addClass(n.options.className), o = "fixed"
                }
            }

            function b() {
                var t = g(), e = d;
                n.options.removeOffsets && (e = "", t -= u), cssOptions = {
                    position: "absolute",
                    top: t,
                    left: e,
                    "margin-left": "0px",
                    bottom: ""
                }, n.options.dontSetWidth || (cssOptions.width = c.css("width")), c.css(cssOptions), o = "absolute"
            }

            function x() {
                m() || (p = -1, h.css("display", "none"), c.css({
                    "z-index": a,
                    width: "",
                    position: r,
                    left: "",
                    top: s,
                    "margin-left": ""
                }), c.removeClass("scroll-to-fixed-fixed"), n.options.className && c.removeClass(n.options.className), o = null)
            }

            function k(t) {
                t != p && (c.css("left", d - t), p = t)
            }

            function C() {
                var t = n.options.marginTop;
                return t ? "function" == typeof t ? t.apply(c) : t : 0
            }

            function T() {
                if (i.isScrollToFixed(c) && !c.is(":hidden")) {
                    var t = l, e = m();
                    l ? m() && (u = c.offset().top, d = c.offset().left) : (c.trigger("preUnfixed.ScrollToFixed"), x(), c.trigger("unfixed.ScrollToFixed"), p = -1, u = c.offset().top, d = c.offset().left, n.options.offsets && (d += c.offset().left - c.position().left), -1 == f && (f = d), o = c.css("position"), l = !0, -1 != n.options.bottom && (c.trigger("preFixed.ScrollToFixed"), w(), c.trigger("fixed.ScrollToFixed")));
                    var s = i(window).scrollLeft(), a = i(window).scrollTop(), h = g();
                    n.options.minWidth && i(window).width() < n.options.minWidth ? m() && t || (S(), c.trigger("preUnfixed.ScrollToFixed"), x(), c.trigger("unfixed.ScrollToFixed")) : n.options.maxWidth && i(window).width() > n.options.maxWidth ? m() && t || (S(), c.trigger("preUnfixed.ScrollToFixed"), x(), c.trigger("unfixed.ScrollToFixed")) : -1 == n.options.bottom ? h > 0 && a >= h - C() ? e || y() && t || (S(), c.trigger("preAbsolute.ScrollToFixed"), b(), c.trigger("unfixed.ScrollToFixed")) : a >= u - C() ? (v() && t || (S(), c.trigger("preFixed.ScrollToFixed"), w(), p = -1, c.trigger("fixed.ScrollToFixed")), k(s)) : m() && t || (S(), c.trigger("preUnfixed.ScrollToFixed"), x(), c.trigger("unfixed.ScrollToFixed")) : h > 0 ? a + i(window).height() - c.outerHeight(!0) >= h - (C() || -(n.options.bottom ? n.options.bottom : 0)) ? v() && (S(), c.trigger("preUnfixed.ScrollToFixed"), "absolute" === r ? b() : x(), c.trigger("unfixed.ScrollToFixed")) : (v() || (S(), c.trigger("preFixed.ScrollToFixed"), w()), k(s), c.trigger("fixed.ScrollToFixed")) : k(s)
                }
            }

            function S() {
                var t = c.css("position");
                "absolute" == t ? c.trigger("postAbsolute.ScrollToFixed") : "fixed" == t ? c.trigger("postFixed.ScrollToFixed") : c.trigger("postUnfixed.ScrollToFixed")
            }

            var A = function (t) {
                c.is(":visible") ? (l = !1, T()) : x()
            }, $ = function (t) {
                window.requestAnimationFrame ? requestAnimationFrame(T) : T()
            };
            n.init = function () {
                n.options = i.extend({}, i.ScrollToFixed.defaultOptions, e), a = c.css("z-index"), n.$el.css("z-index", n.options.zIndex), h = i("<div />"), o = c.css("position"), r = c.css("position"), c.css("float"), s = c.css("top"), m() && n.$el.after(h), i(window).bind("resize.ScrollToFixed", A), i(window).bind("scroll.ScrollToFixed", $), "ontouchmove" in window && i(window).bind("touchmove.ScrollToFixed", T), n.options.preFixed && c.bind("preFixed.ScrollToFixed", n.options.preFixed), n.options.postFixed && c.bind("postFixed.ScrollToFixed", n.options.postFixed), n.options.preUnfixed && c.bind("preUnfixed.ScrollToFixed", n.options.preUnfixed), n.options.postUnfixed && c.bind("postUnfixed.ScrollToFixed", n.options.postUnfixed), n.options.preAbsolute && c.bind("preAbsolute.ScrollToFixed", n.options.preAbsolute), n.options.postAbsolute && c.bind("postAbsolute.ScrollToFixed", n.options.postAbsolute), n.options.fixed && c.bind("fixed.ScrollToFixed", n.options.fixed), n.options.unfixed && c.bind("unfixed.ScrollToFixed", n.options.unfixed), n.options.spacerClass && h.addClass(n.options.spacerClass), c.bind("resize.ScrollToFixed", function () {
                    h.height(c.height())
                }), c.bind("scroll.ScrollToFixed", function () {
                    c.trigger("preUnfixed.ScrollToFixed"), x(), c.trigger("unfixed.ScrollToFixed"), T()
                }), c.bind("detach.ScrollToFixed", function (t) {
                    var e;
                    (e = (e = t) || window.event).preventDefault && e.preventDefault(), e.returnValue = !1, c.trigger("preUnfixed.ScrollToFixed"), x(), c.trigger("unfixed.ScrollToFixed"), i(window).off("resize.ScrollToFixed", A), i(window).off("scroll.ScrollToFixed", $), c.off(".ScrollToFixed"), h.remove(), n.$el.removeData("ScrollToFixed")
                }), A()
            }, n.init()
        }, i.ScrollToFixed.defaultOptions = {
            marginTop: 0,
            limit: 0,
            bottom: -1,
            zIndex: 1e3,
            baseClassName: "scroll-to-fixed-fixed"
        }, i.fn.scrollToFixed = function (t) {
            return this.each(function () {
                new i.ScrollToFixed(this, t)
            })
        }
    }, function (t, e, i) {
        var n;
        void 0 === (n = function (t) {
            var e = !1, n = i(0);

            function o(t) {
                if ("" !== location.hash) {
                    n(".headroom-area").addClass("frozen");
                    var e = location.hash.match(/^#section\//i),
                        i = ("#" + location.hash.replace(/^.+\//, "").replace(/([\!\"\#\$\%\&\'\(\)\*\+\,\.\/\:\;\<\=\>\?\@\[\\\]\^\`\{\|\}\~])/g, "\\$1")).replace("#\\", ""),
                        o = n(i), r = e ? o.children(".ui-accordion-content") : o.closest(".ui-accordion-content"),
                        s = r.closest(".ui-accordion"),
                        a = s.length > 0 ? s.data("ui-accordion").headers.index(r.prev(".ui-accordion-header")) : void 0,
                        l = function (i) {
                            n(window).NCI_scroll_to({isSection: e, anchor: i, event: t.type})
                        };
                    s.length > 0 ? (s.on("accordionactivate", function (t) {
                        l(i)
                    }), r.hasClass("accordion-content-active") ? l(i) : s.accordion("option", "active", a)) : l(i)
                }
            }

            return i(33), {
                init: function () {
                    e || (n(window).on("load.deeplink hashchange.deeplink", function (t) {
                        t.preventDefault(), n(document).ready(function () {
                            o(t)
                        })
                    }), n(document).ready(function () {
                        n("#content").on("click.deeplink", "a[href*=\\#]", function (t) {
                            this.attributes.href.value === location.hash && (t.preventDefault(), o(t))
                        })
                    }), e = !0)
                }
            }
        }.call(e, i, e, t)) || (t.exports = n)
    }, , , , , , , , , , , , , , , , , , , , , , , function (t, e, i) {
        !function (e) {
            "use strict";
            var n = i(208);

            function o(t) {
                return function (e, i) {
                    return "object" == typeof e && (i = e, e = null), null !== e && void 0 !== e || (e = (new Date).toString()), i || (i = {}), t.call(this, e, i)
                }
            }

            var r = t.exports = {
                generate: o(function (t, e) {
                    return new n(t, e)
                })
            };
            e && (e.fn.geopattern = o(function (t, i) {
                return this.each(function () {
                    var n = e(this).attr("data-title-sha");
                    n && (i = e.extend({hash: n}, i));
                    var o = r.generate(t, i);
                    e(this).css("background-image", o.toDataUrl())
                })
            }))
        }("undefined" != typeof jQuery ? jQuery : null)
    }, function (t, e, i) {
        "use strict";
        (function (e) {
            var n = i(133), o = i(213), r = i(214), s = i(215), a = {baseColor: "#933c3c"},
                l = ["octogons", "overlappingCircles", "plusSigns", "xes", "sineWaves", "hexagons", "overlappingRings", "plaid", "triangles", "squares", "concentricCircles", "diamonds", "tessellation", "nestedSquares", "mosaicSquares", "chevrons"],
                c = "#222", u = "#ddd", d = "#000", f = .02, p = .02, h = .15;

            function g(t, e, i) {
                return parseInt(t.substr(e, i || 1), 16)
            }

            function v(t, e, i, n, o) {
                return (parseFloat(t) - e) * (o - n) / (i - e) + n
            }

            function y(t) {
                return t % 2 == 0 ? u : c
            }

            function m(t) {
                return v(t, 0, 15, p, h)
            }

            var w = t.exports = function (t, e) {
                return this.opts = n({}, a, e), this.hash = e.hash || r(t), this.svg = new s, this.generateBackground(), this.generatePattern(), this
            };

            function b(t) {
                return [[t, 0, t, 3 * t], [0, t, 3 * t, t]]
            }

            function x(t) {
                return [0, 0, t, t, 0, t, 0, 0].join(",")
            }

            function k(t, e, i, n, o) {
                var r = x(n), s = m(o[0]), a = y(o[0]),
                    l = {stroke: d, "stroke-opacity": f, "fill-opacity": s, fill: a};
                t.polyline(r, l).transform({
                    translate: [e + n, i],
                    scale: [-1, 1]
                }), t.polyline(r, l).transform({
                    translate: [e + n, i + 2 * n],
                    scale: [1, -1]
                }), s = m(o[1]), a = y(o[1]), l = {
                    stroke: d,
                    "stroke-opacity": f,
                    "fill-opacity": s,
                    fill: a
                }, t.polyline(r, l).transform({
                    translate: [e + n, i + 2 * n],
                    scale: [-1, -1]
                }), t.polyline(r, l).transform({translate: [e + n, i], scale: [1, 1]})
            }

            function C(t, e, i, n, o) {
                var r = m(o), s = y(o), a = x(n), l = {stroke: d, "stroke-opacity": f, "fill-opacity": r, fill: s};
                t.polyline(a, l).transform({
                    translate: [e, i + n],
                    scale: [1, -1]
                }), t.polyline(a, l).transform({
                    translate: [e + 2 * n, i + n],
                    scale: [-1, -1]
                }), t.polyline(a, l).transform({
                    translate: [e, i + n],
                    scale: [1, 1]
                }), t.polyline(a, l).transform({translate: [e + 2 * n, i + n], scale: [-1, 1]})
            }

            w.prototype.toSvg = function () {
                return this.svg.toString()
            }, w.prototype.toString = function () {
                return this.toSvg()
            }, w.prototype.toBase64 = function () {
                var t = this.toSvg();
                return "undefined" != typeof window && "function" == typeof window.btoa ? window.btoa(t) : new e(t).toString("base64")
            }, w.prototype.toDataUri = function () {
                return "data:image/svg+xml;base64," + this.toBase64()
            }, w.prototype.toDataUrl = function () {
                return 'url("' + this.toDataUri() + '")'
            }, w.prototype.generateBackground = function () {
                var t, e, i, n;
                this.opts.color ? i = o.hex2rgb(this.opts.color) : (e = v(g(this.hash, 14, 3), 0, 4095, 0, 359), n = g(this.hash, 17), (t = o.rgb2hsl(o.hex2rgb(this.opts.baseColor))).h = (360 * t.h - e + 360) % 360 / 360, t.s = n % 2 == 0 ? Math.min(1, (100 * t.s + n) / 100) : Math.max(0, (100 * t.s - n) / 100), i = o.hsl2rgb(t)), this.color = o.rgb2hex(i), this.svg.rect(0, 0, "100%", "100%", {fill: o.rgb2rgbString(i)})
            }, w.prototype.generatePattern = function () {
                var t = this.opts.generator;
                if (t) {
                    if (l.indexOf(t) < 0) throw new Error("The generator " + t + " does not exist.")
                } else t = l[g(this.hash, 20)];
                return this["geo" + t.slice(0, 1).toUpperCase() + t.slice(1)]()
            }, w.prototype.geoHexagons = function () {
                var t, e, i, n, o, r, s, a = v(g(this.hash, 0), 0, 15, 8, 60), l = a * Math.sqrt(3), c = 2 * a,
                    u = function (t) {
                        var e = t, i = e / 2, n = Math.sin(60 * Math.PI / 180) * e;
                        return [0, n, i, 0, i + e, 0, 2 * e, n, i + e, 2 * n, i, 2 * n, 0, n].join(",")
                    }(a);
                for (this.svg.setWidth(3 * c + 3 * a), this.svg.setHeight(6 * l), e = 0, s = 0; s < 6; s++) for (r = 0; r < 6; r++) o = g(this.hash, e), t = r % 2 == 0 ? s * l : s * l + l / 2, i = m(o), n = {
                    fill: y(o),
                    "fill-opacity": i,
                    stroke: d,
                    "stroke-opacity": f
                }, this.svg.polyline(u, n).transform({translate: [r * a * 1.5 - c / 2, t - l / 2]}), 0 === r && this.svg.polyline(u, n).transform({translate: [6 * a * 1.5 - c / 2, t - l / 2]}), 0 === s && (t = r % 2 == 0 ? 6 * l : 6 * l + l / 2, this.svg.polyline(u, n).transform({translate: [r * a * 1.5 - c / 2, t - l / 2]})), 0 === r && 0 === s && this.svg.polyline(u, n).transform({translate: [6 * a * 1.5 - c / 2, 5 * l + l / 2]}), e++
            }, w.prototype.geoSineWaves = function () {
                var t, e, i, n, o, r, s = Math.floor(v(g(this.hash, 0), 0, 15, 100, 400)),
                    a = Math.floor(v(g(this.hash, 1), 0, 15, 30, 100)),
                    l = Math.floor(v(g(this.hash, 2), 0, 15, 3, 30));
                for (this.svg.setWidth(s), this.svg.setHeight(36 * l), t = 0; t < 36; t++) e = m(o = g(this.hash, t)), n = {
                    fill: "none",
                    stroke: y(o),
                    opacity: e,
                    "stroke-width": l + "px"
                }, i = "M0 " + a + " C " + (r = s / 4 * .7) + " 0, " + (s / 2 - r) + " 0, " + s / 2 + " " + a + " S " + (s - r) + " " + 2 * a + ", " + s + " " + a + " S " + (1.5 * s - r) + " 0, " + 1.5 * s + ", " + a, this.svg.path(i, n).transform({translate: [-s / 4, l * t - 1.5 * a]}), this.svg.path(i, n).transform({translate: [-s / 4, l * t - 1.5 * a + 36 * l]})
            }, w.prototype.geoChevrons = function () {
                var t, e, i, n, o, r, s, a, l, c, u = v(g(this.hash, 0), 0, 15, 30, 80),
                    p = v(g(this.hash, 0), 0, 15, 30, 80),
                    h = [[0, 0, (t = u) / 2, (e = p) - (i = .66 * e), t / 2, e, 0, i, 0, 0], [t / 2, e - i, t, 0, t, i, t / 2, e, t / 2, e - i]].map(function (t) {
                        return t.join(",")
                    });
                for (this.svg.setWidth(6 * u), this.svg.setHeight(6 * p * .66), o = 0, c = 0; c < 6; c++) for (l = 0; l < 6; l++) r = m(a = g(this.hash, o)), n = y(a), s = {
                    stroke: d,
                    "stroke-opacity": f,
                    fill: n,
                    "fill-opacity": r,
                    "stroke-width": 1
                }, this.svg.group(s).transform({translate: [l * u, c * p * .66 - p / 2]}).polyline(h).end(), 0 === c && this.svg.group(s).transform({translate: [l * u, 6 * p * .66 - p / 2]}).polyline(h).end(), o += 1
            }, w.prototype.geoPlusSigns = function () {
                var t, e, i, n, o, r, s, a, l = v(g(this.hash, 0), 0, 15, 10, 25), c = 3 * l, u = b(l);
                for (this.svg.setWidth(12 * l), this.svg.setHeight(12 * l), i = 0, a = 0; a < 6; a++) for (s = 0; s < 6; s++) n = m(r = g(this.hash, i)), e = y(r), t = a % 2 == 0 ? 0 : 1, o = {
                    fill: e,
                    stroke: d,
                    "stroke-opacity": f,
                    "fill-opacity": n
                }, this.svg.group(o).transform({translate: [s * c - s * l + t * l - l, a * c - a * l - c / 2]}).rect(u).end(), 0 === s && this.svg.group(o).transform({translate: [4 * c - s * l + t * l - l, a * c - a * l - c / 2]}).rect(u).end(), 0 === a && this.svg.group(o).transform({translate: [s * c - s * l + t * l - l, 4 * c - a * l - c / 2]}).rect(u).end(), 0 === s && 0 === a && this.svg.group(o).transform({translate: [4 * c - s * l + t * l - l, 4 * c - a * l - c / 2]}).rect(u).end(), i++
            }, w.prototype.geoXes = function () {
                var t, e, i, n, o, r, s, a = v(g(this.hash, 0), 0, 15, 10, 25), l = b(a), c = 3 * a * .943;
                for (this.svg.setWidth(3 * c), this.svg.setHeight(3 * c), e = 0, s = 0; s < 6; s++) for (r = 0; r < 6; r++) i = m(o = g(this.hash, e)), t = r % 2 == 0 ? s * c - .5 * c : s * c - .5 * c + c / 4, n = {
                    fill: y(o),
                    opacity: i
                }, this.svg.group(n).transform({
                    translate: [r * c / 2 - c / 2, t - s * c / 2],
                    rotate: [45, c / 2, c / 2]
                }).rect(l).end(), 0 === r && this.svg.group(n).transform({
                    translate: [6 * c / 2 - c / 2, t - s * c / 2],
                    rotate: [45, c / 2, c / 2]
                }).rect(l).end(), 0 === s && (t = r % 2 == 0 ? 6 * c - c / 2 : 6 * c - c / 2 + c / 4, this.svg.group(n).transform({
                    translate: [r * c / 2 - c / 2, t - 6 * c / 2],
                    rotate: [45, c / 2, c / 2]
                }).rect(l).end()), 5 === s && this.svg.group(n).transform({
                    translate: [r * c / 2 - c / 2, t - 11 * c / 2],
                    rotate: [45, c / 2, c / 2]
                }).rect(l).end(), 0 === r && 0 === s && this.svg.group(n).transform({
                    translate: [6 * c / 2 - c / 2, t - 6 * c / 2],
                    rotate: [45, c / 2, c / 2]
                }).rect(l).end(), e++
            }, w.prototype.geoOverlappingCircles = function () {
                var t, e, i, n, o, r, s = v(g(this.hash, 0), 0, 15, 25, 200) / 2;
                for (this.svg.setWidth(6 * s), this.svg.setHeight(6 * s), t = 0, r = 0; r < 6; r++) for (o = 0; o < 6; o++) e = m(n = g(this.hash, t)), i = {
                    fill: y(n),
                    opacity: e
                }, this.svg.circle(o * s, r * s, s, i), 0 === o && this.svg.circle(6 * s, r * s, s, i), 0 === r && this.svg.circle(o * s, 6 * s, s, i), 0 === o && 0 === r && this.svg.circle(6 * s, 6 * s, s, i), t++
            }, w.prototype.geoOctogons = function () {
                var t, e, i, n, o, r, s = v(g(this.hash, 0), 0, 15, 10, 60), a = function (t) {
                    var e = .33 * t;
                    return [e, 0, t - e, 0, t, e, t, t - e, t - e, t, e, t, 0, t - e, 0, e, e, 0].join(",")
                }(s);
                for (this.svg.setWidth(6 * s), this.svg.setHeight(6 * s), e = 0, r = 0; r < 6; r++) for (o = 0; o < 6; o++) i = m(n = g(this.hash, e)), t = y(n), this.svg.polyline(a, {
                    fill: t,
                    "fill-opacity": i,
                    stroke: d,
                    "stroke-opacity": f
                }).transform({translate: [o * s, r * s]}), e += 1
            }, w.prototype.geoSquares = function () {
                var t, e, i, n, o, r, s = v(g(this.hash, 0), 0, 15, 10, 60);
                for (this.svg.setWidth(6 * s), this.svg.setHeight(6 * s), e = 0, r = 0; r < 6; r++) for (o = 0; o < 6; o++) i = m(n = g(this.hash, e)), t = y(n), this.svg.rect(o * s, r * s, s, s, {
                    fill: t,
                    "fill-opacity": i,
                    stroke: d,
                    "stroke-opacity": f
                }), e += 1
            }, w.prototype.geoConcentricCircles = function () {
                var t, e, i, n, o, r, s = v(g(this.hash, 0), 0, 15, 10, 60), a = s / 5;
                for (this.svg.setWidth(6 * (s + a)), this.svg.setHeight(6 * (s + a)), e = 0, r = 0; r < 6; r++) for (o = 0; o < 6; o++) i = m(n = g(this.hash, e)), t = y(n), this.svg.circle(o * s + o * a + (s + a) / 2, r * s + r * a + (s + a) / 2, s / 2, {
                    fill: "none",
                    stroke: t,
                    opacity: i,
                    "stroke-width": a + "px"
                }), i = m(n = g(this.hash, 39 - e)), t = y(n), this.svg.circle(o * s + o * a + (s + a) / 2, r * s + r * a + (s + a) / 2, s / 4, {
                    fill: t,
                    "fill-opacity": i
                }), e += 1
            }, w.prototype.geoOverlappingRings = function () {
                var t, e, i, n, o, r, s = v(g(this.hash, 0), 0, 15, 10, 60), a = s / 4;
                for (this.svg.setWidth(6 * s), this.svg.setHeight(6 * s), t = 0, r = 0; r < 6; r++) for (o = 0; o < 6; o++) e = m(n = g(this.hash, t)), i = {
                    fill: "none",
                    stroke: y(n),
                    opacity: e,
                    "stroke-width": a + "px"
                }, this.svg.circle(o * s, r * s, s - a / 2, i), 0 === o && this.svg.circle(6 * s, r * s, s - a / 2, i), 0 === r && this.svg.circle(o * s, 6 * s, s - a / 2, i), 0 === o && 0 === r && this.svg.circle(6 * s, 6 * s, s - a / 2, i), t += 1
            }, w.prototype.geoTriangles = function () {
                var t, e, i, n, o, r, s, a = v(g(this.hash, 0), 0, 15, 15, 80), l = a / 2 * Math.sqrt(3),
                    c = function (t, e) {
                        var i = t / 2;
                        return [i, 0, t, e, 0, e, i, 0].join(",")
                    }(a, l);
                for (this.svg.setWidth(3 * a), this.svg.setHeight(6 * l), t = 0, s = 0; s < 6; s++) for (r = 0; r < 6; r++) e = m(o = g(this.hash, t)), n = {
                    fill: y(o),
                    "fill-opacity": e,
                    stroke: d,
                    "stroke-opacity": f
                }, i = s % 2 == 0 ? r % 2 == 0 ? 180 : 0 : r % 2 != 0 ? 180 : 0, this.svg.polyline(c, n).transform({
                    translate: [r * a * .5 - a / 2, l * s],
                    rotate: [i, a / 2, l / 2]
                }), 0 === r && this.svg.polyline(c, n).transform({
                    translate: [6 * a * .5 - a / 2, l * s],
                    rotate: [i, a / 2, l / 2]
                }), t += 1
            }, w.prototype.geoDiamonds = function () {
                var t, e, i, n, o, r, s, a, l, c = v(g(this.hash, 0), 0, 15, 10, 50),
                    u = v(g(this.hash, 1), 0, 15, 10, 50),
                    p = [(t = c) / 2, 0, t, (e = u) / 2, t / 2, e, 0, e / 2].join(",");
                for (this.svg.setWidth(6 * c), this.svg.setHeight(3 * u), n = 0, l = 0; l < 6; l++) for (a = 0; a < 6; a++) o = m(s = g(this.hash, n)), r = {
                    fill: y(s),
                    "fill-opacity": o,
                    stroke: d,
                    "stroke-opacity": f
                }, i = l % 2 == 0 ? 0 : c / 2, this.svg.polyline(p, r).transform({translate: [a * c - c / 2 + i, u / 2 * l - u / 2]}), 0 === a && this.svg.polyline(p, r).transform({translate: [6 * c - c / 2 + i, u / 2 * l - u / 2]}), 0 === l && this.svg.polyline(p, r).transform({translate: [a * c - c / 2 + i, u / 2 * 6 - u / 2]}), 0 === a && 0 === l && this.svg.polyline(p, r).transform({translate: [6 * c - c / 2 + i, u / 2 * 6 - u / 2]}), n += 1
            }, w.prototype.geoNestedSquares = function () {
                var t, e, i, n, o, r, s = v(g(this.hash, 0), 0, 15, 4, 12), a = 7 * s;
                for (this.svg.setWidth(6 * (a + s) + 6 * s), this.svg.setHeight(6 * (a + s) + 6 * s), t = 0, r = 0; r < 6; r++) for (o = 0; o < 6; o++) e = m(n = g(this.hash, t)), i = {
                    fill: "none",
                    stroke: y(n),
                    opacity: e,
                    "stroke-width": s + "px"
                }, this.svg.rect(o * a + o * s * 2 + s / 2, r * a + r * s * 2 + s / 2, a, a, i), e = m(n = g(this.hash, 39 - t)), i = {
                    fill: "none",
                    stroke: y(n),
                    opacity: e,
                    "stroke-width": s + "px"
                }, this.svg.rect(o * a + o * s * 2 + s / 2 + 2 * s, r * a + r * s * 2 + s / 2 + 2 * s, 3 * s, 3 * s, i), t += 1
            }, w.prototype.geoMosaicSquares = function () {
                var t, e, i, n = v(g(this.hash, 0), 0, 15, 15, 50);
                for (this.svg.setWidth(8 * n), this.svg.setHeight(8 * n), t = 0, i = 0; i < 4; i++) for (e = 0; e < 4; e++) e % 2 == 0 ? i % 2 == 0 ? C(this.svg, e * n * 2, i * n * 2, n, g(this.hash, t)) : k(this.svg, e * n * 2, i * n * 2, n, [g(this.hash, t), g(this.hash, t + 1)]) : i % 2 == 0 ? k(this.svg, e * n * 2, i * n * 2, n, [g(this.hash, t), g(this.hash, t + 1)]) : C(this.svg, e * n * 2, i * n * 2, n, g(this.hash, t)), t += 1
            }, w.prototype.geoPlaid = function () {
                var t, e, i, n, o, r, s = 0, a = 0;
                for (e = 0; e < 36;) s += g(this.hash, e) + 5, i = m(r = g(this.hash, e + 1)), t = y(r), n = r + 5, this.svg.rect(0, s, "100%", n, {
                    opacity: i,
                    fill: t
                }), s += n, e += 2;
                for (e = 0; e < 36;) a += g(this.hash, e) + 5, i = m(r = g(this.hash, e + 1)), t = y(r), o = r + 5, this.svg.rect(a, 0, o, "100%", {
                    opacity: i,
                    fill: t
                }), a += o, e += 2;
                this.svg.setWidth(a), this.svg.setHeight(s)
            }, w.prototype.geoTessellation = function () {
                var t, e, i, n, o, r = v(g(this.hash, 0), 0, 15, 5, 40), s = r * Math.sqrt(3), a = 2 * r,
                    l = r / 2 * Math.sqrt(3), c = function (t, e) {
                        return [0, 0, e, t / 2, 0, t, 0, 0].join(",")
                    }(r, l), u = 3 * r + 2 * l, p = 2 * s + 2 * r;
                for (this.svg.setWidth(u), this.svg.setHeight(p), e = 0; e < 20; e++) switch (i = m(o = g(this.hash, e)), t = y(o), n = {
                    stroke: d,
                    "stroke-opacity": f,
                    fill: t,
                    "fill-opacity": i,
                    "stroke-width": 1
                }, e) {
                    case 0:
                        this.svg.rect(-r / 2, -r / 2, r, r, n), this.svg.rect(u - r / 2, -r / 2, r, r, n), this.svg.rect(-r / 2, p - r / 2, r, r, n), this.svg.rect(u - r / 2, p - r / 2, r, r, n);
                        break;
                    case 1:
                        this.svg.rect(a / 2 + l, s / 2, r, r, n);
                        break;
                    case 2:
                        this.svg.rect(-r / 2, p / 2 - r / 2, r, r, n), this.svg.rect(u - r / 2, p / 2 - r / 2, r, r, n);
                        break;
                    case 3:
                        this.svg.rect(a / 2 + l, 1.5 * s + r, r, r, n);
                        break;
                    case 4:
                        this.svg.polyline(c, n).transform({
                            translate: [r / 2, -r / 2],
                            rotate: [0, r / 2, l / 2]
                        }), this.svg.polyline(c, n).transform({
                            translate: [r / 2, p - -r / 2],
                            rotate: [0, r / 2, l / 2],
                            scale: [1, -1]
                        });
                        break;
                    case 5:
                        this.svg.polyline(c, n).transform({
                            translate: [u - r / 2, -r / 2],
                            rotate: [0, r / 2, l / 2],
                            scale: [-1, 1]
                        }), this.svg.polyline(c, n).transform({
                            translate: [u - r / 2, p + r / 2],
                            rotate: [0, r / 2, l / 2],
                            scale: [-1, -1]
                        });
                        break;
                    case 6:
                        this.svg.polyline(c, n).transform({translate: [u / 2 + r / 2, s / 2]});
                        break;
                    case 7:
                        this.svg.polyline(c, n).transform({translate: [u - u / 2 - r / 2, s / 2], scale: [-1, 1]});
                        break;
                    case 8:
                        this.svg.polyline(c, n).transform({translate: [u / 2 + r / 2, p - s / 2], scale: [1, -1]});
                        break;
                    case 9:
                        this.svg.polyline(c, n).transform({translate: [u - u / 2 - r / 2, p - s / 2], scale: [-1, -1]});
                        break;
                    case 10:
                        this.svg.polyline(c, n).transform({translate: [r / 2, p / 2 - r / 2]});
                        break;
                    case 11:
                        this.svg.polyline(c, n).transform({translate: [u - r / 2, p / 2 - r / 2], scale: [-1, 1]});
                        break;
                    case 12:
                        this.svg.rect(0, 0, r, r, n).transform({translate: [r / 2, r / 2], rotate: [-30, 0, 0]});
                        break;
                    case 13:
                        this.svg.rect(0, 0, r, r, n).transform({
                            scale: [-1, 1],
                            translate: [r / 2 - u, r / 2],
                            rotate: [-30, 0, 0]
                        });
                        break;
                    case 14:
                        this.svg.rect(0, 0, r, r, n).transform({
                            translate: [r / 2, p / 2 - r / 2 - r],
                            rotate: [30, 0, r]
                        });
                        break;
                    case 15:
                        this.svg.rect(0, 0, r, r, n).transform({
                            scale: [-1, 1],
                            translate: [r / 2 - u, p / 2 - r / 2 - r],
                            rotate: [30, 0, r]
                        });
                        break;
                    case 16:
                        this.svg.rect(0, 0, r, r, n).transform({
                            scale: [1, -1],
                            translate: [r / 2, p / 2 - p - r / 2 - r],
                            rotate: [30, 0, r]
                        });
                        break;
                    case 17:
                        this.svg.rect(0, 0, r, r, n).transform({
                            scale: [-1, -1],
                            translate: [r / 2 - u, p / 2 - p - r / 2 - r],
                            rotate: [30, 0, r]
                        });
                        break;
                    case 18:
                        this.svg.rect(0, 0, r, r, n).transform({
                            scale: [1, -1],
                            translate: [r / 2, r / 2 - p],
                            rotate: [-30, 0, 0]
                        });
                        break;
                    case 19:
                        this.svg.rect(0, 0, r, r, n).transform({
                            scale: [-1, -1],
                            translate: [r / 2 - u, r / 2 - p],
                            rotate: [-30, 0, 0]
                        })
                }
            }
        }).call(e, i(209).Buffer)
    }, function (t, e, i) {
        "use strict";
        (function (t) {
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
            var n = i(210), o = i(211), r = i(212);

            function s() {
                return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function a(t, e) {
                if (s() < e) throw new RangeError("Invalid typed array length");
                return l.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = l.prototype : (null === t && (t = new l(e)), t.length = e), t
            }

            function l(t, e, i) {
                if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l)) return new l(t, e, i);
                if ("number" == typeof t) {
                    if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                    return d(this, t)
                }
                return c(this, t, e, i)
            }

            function c(t, e, i, n) {
                if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function (t, e, i, n) {
                    if (e.byteLength, i < 0 || e.byteLength < i) throw new RangeError("'offset' is out of bounds");
                    if (e.byteLength < i + (n || 0)) throw new RangeError("'length' is out of bounds");
                    e = void 0 === i && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, i) : new Uint8Array(e, i, n);
                    l.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = l.prototype : t = f(t, e);
                    return t
                }(t, e, i, n) : "string" == typeof e ? function (t, e, i) {
                    "string" == typeof i && "" !== i || (i = "utf8");
                    if (!l.isEncoding(i)) throw new TypeError('"encoding" must be a valid string encoding');
                    var n = 0 | h(e, i), o = (t = a(t, n)).write(e, i);
                    o !== n && (t = t.slice(0, o));
                    return t
                }(t, e, i) : function (t, e) {
                    if (l.isBuffer(e)) {
                        var i = 0 | p(e.length);
                        return 0 === (t = a(t, i)).length ? t : (e.copy(t, 0, 0, i), t)
                    }
                    if (e) {
                        if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (n = e.length) != n ? a(t, 0) : f(t, e);
                        if ("Buffer" === e.type && r(e.data)) return f(t, e.data)
                    }
                    var n;
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(t, e)
            }

            function u(t) {
                if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                if (t < 0) throw new RangeError('"size" argument must not be negative')
            }

            function d(t, e) {
                if (u(e), t = a(t, e < 0 ? 0 : 0 | p(e)), !l.TYPED_ARRAY_SUPPORT) for (var i = 0; i < e; ++i) t[i] = 0;
                return t
            }

            function f(t, e) {
                var i = e.length < 0 ? 0 : 0 | p(e.length);
                t = a(t, i);
                for (var n = 0; n < i; n += 1) t[n] = 255 & e[n];
                return t
            }

            function p(t) {
                if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
                return 0 | t
            }

            function h(t, e) {
                if (l.isBuffer(t)) return t.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                "string" != typeof t && (t = "" + t);
                var i = t.length;
                if (0 === i) return 0;
                for (var n = !1; ;) switch (e) {
                    case"ascii":
                    case"latin1":
                    case"binary":
                        return i;
                    case"utf8":
                    case"utf-8":
                    case void 0:
                        return z(t).length;
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return 2 * i;
                    case"hex":
                        return i >>> 1;
                    case"base64":
                        return R(t).length;
                    default:
                        if (n) return z(t).length;
                        e = ("" + e).toLowerCase(), n = !0
                }
            }

            function g(t, e, i) {
                var n = t[e];
                t[e] = t[i], t[i] = n
            }

            function v(t, e, i, n, o) {
                if (0 === t.length) return -1;
                if ("string" == typeof i ? (n = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), i = +i, isNaN(i) && (i = o ? 0 : t.length - 1), i < 0 && (i = t.length + i), i >= t.length) {
                    if (o) return -1;
                    i = t.length - 1
                } else if (i < 0) {
                    if (!o) return -1;
                    i = 0
                }
                if ("string" == typeof e && (e = l.from(e, n)), l.isBuffer(e)) return 0 === e.length ? -1 : y(t, e, i, n, o);
                if ("number" == typeof e) return e &= 255, l.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, i) : Uint8Array.prototype.lastIndexOf.call(t, e, i) : y(t, [e], i, n, o);
                throw new TypeError("val must be string, number or Buffer")
            }

            function y(t, e, i, n, o) {
                var r, s = 1, a = t.length, l = e.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (t.length < 2 || e.length < 2) return -1;
                    s = 2, a /= 2, l /= 2, i /= 2
                }

                function c(t, e) {
                    return 1 === s ? t[e] : t.readUInt16BE(e * s)
                }

                if (o) {
                    var u = -1;
                    for (r = i; r < a; r++) if (c(t, r) === c(e, -1 === u ? 0 : r - u)) {
                        if (-1 === u && (u = r), r - u + 1 === l) return u * s
                    } else -1 !== u && (r -= r - u), u = -1
                } else for (i + l > a && (i = a - l), r = i; r >= 0; r--) {
                    for (var d = !0, f = 0; f < l; f++) if (c(t, r + f) !== c(e, f)) {
                        d = !1;
                        break
                    }
                    if (d) return r
                }
                return -1
            }

            function m(t, e, i, n) {
                i = Number(i) || 0;
                var o = t.length - i;
                n ? (n = Number(n)) > o && (n = o) : n = o;
                var r = e.length;
                if (r % 2 != 0) throw new TypeError("Invalid hex string");
                n > r / 2 && (n = r / 2);
                for (var s = 0; s < n; ++s) {
                    var a = parseInt(e.substr(2 * s, 2), 16);
                    if (isNaN(a)) return s;
                    t[i + s] = a
                }
                return s
            }

            function w(t, e, i, n) {
                return B(z(e, t.length - i), t, i, n)
            }

            function b(t, e, i, n) {
                return B(function (t) {
                    for (var e = [], i = 0; i < t.length; ++i) e.push(255 & t.charCodeAt(i));
                    return e
                }(e), t, i, n)
            }

            function x(t, e, i, n) {
                return b(t, e, i, n)
            }

            function k(t, e, i, n) {
                return B(R(e), t, i, n)
            }

            function C(t, e, i, n) {
                return B(function (t, e) {
                    for (var i, n, o, r = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) i = t.charCodeAt(s), n = i >> 8, o = i % 256, r.push(o), r.push(n);
                    return r
                }(e, t.length - i), t, i, n)
            }

            function T(t, e, i) {
                return 0 === e && i === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, i))
            }

            function S(t, e, i) {
                i = Math.min(t.length, i);
                for (var n = [], o = e; o < i;) {
                    var r, s, a, l, c = t[o], u = null, d = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                    if (o + d <= i) switch (d) {
                        case 1:
                            c < 128 && (u = c);
                            break;
                        case 2:
                            128 == (192 & (r = t[o + 1])) && (l = (31 & c) << 6 | 63 & r) > 127 && (u = l);
                            break;
                        case 3:
                            r = t[o + 1], s = t[o + 2], 128 == (192 & r) && 128 == (192 & s) && (l = (15 & c) << 12 | (63 & r) << 6 | 63 & s) > 2047 && (l < 55296 || l > 57343) && (u = l);
                            break;
                        case 4:
                            r = t[o + 1], s = t[o + 2], a = t[o + 3], 128 == (192 & r) && 128 == (192 & s) && 128 == (192 & a) && (l = (15 & c) << 18 | (63 & r) << 12 | (63 & s) << 6 | 63 & a) > 65535 && l < 1114112 && (u = l)
                    }
                    null === u ? (u = 65533, d = 1) : u > 65535 && (u -= 65536, n.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), n.push(u), o += d
                }
                return function (t) {
                    var e = t.length;
                    if (e <= A) return String.fromCharCode.apply(String, t);
                    var i = "", n = 0;
                    for (; n < e;) i += String.fromCharCode.apply(String, t.slice(n, n += A));
                    return i
                }(n)
            }

            e.Buffer = l, e.SlowBuffer = function (t) {
                +t != t && (t = 0);
                return l.alloc(+t)
            }, e.INSPECT_MAX_BYTES = 50, l.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
                try {
                    var t = new Uint8Array(1);
                    return t.__proto__ = {
                        __proto__: Uint8Array.prototype, foo: function () {
                            return 42
                        }
                    }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                } catch (t) {
                    return !1
                }
            }(), e.kMaxLength = s(), l.poolSize = 8192, l._augment = function (t) {
                return t.__proto__ = l.prototype, t
            }, l.from = function (t, e, i) {
                return c(null, t, e, i)
            }, l.TYPED_ARRAY_SUPPORT && (l.prototype.__proto__ = Uint8Array.prototype, l.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {
                value: null,
                configurable: !0
            })), l.alloc = function (t, e, i) {
                return function (t, e, i, n) {
                    return u(e), e <= 0 ? a(t, e) : void 0 !== i ? "string" == typeof n ? a(t, e).fill(i, n) : a(t, e).fill(i) : a(t, e)
                }(null, t, e, i)
            }, l.allocUnsafe = function (t) {
                return d(null, t)
            }, l.allocUnsafeSlow = function (t) {
                return d(null, t)
            }, l.isBuffer = function (t) {
                return !(null == t || !t._isBuffer)
            }, l.compare = function (t, e) {
                if (!l.isBuffer(t) || !l.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                if (t === e) return 0;
                for (var i = t.length, n = e.length, o = 0, r = Math.min(i, n); o < r; ++o) if (t[o] !== e[o]) {
                    i = t[o], n = e[o];
                    break
                }
                return i < n ? -1 : n < i ? 1 : 0
            }, l.isEncoding = function (t) {
                switch (String(t).toLowerCase()) {
                    case"hex":
                    case"utf8":
                    case"utf-8":
                    case"ascii":
                    case"latin1":
                    case"binary":
                    case"base64":
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, l.concat = function (t, e) {
                if (!r(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return l.alloc(0);
                var i;
                if (void 0 === e) for (e = 0, i = 0; i < t.length; ++i) e += t[i].length;
                var n = l.allocUnsafe(e), o = 0;
                for (i = 0; i < t.length; ++i) {
                    var s = t[i];
                    if (!l.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                    s.copy(n, o), o += s.length
                }
                return n
            }, l.byteLength = h, l.prototype._isBuffer = !0, l.prototype.swap16 = function () {
                var t = this.length;
                if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var e = 0; e < t; e += 2) g(this, e, e + 1);
                return this
            }, l.prototype.swap32 = function () {
                var t = this.length;
                if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var e = 0; e < t; e += 4) g(this, e, e + 3), g(this, e + 1, e + 2);
                return this
            }, l.prototype.swap64 = function () {
                var t = this.length;
                if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var e = 0; e < t; e += 8) g(this, e, e + 7), g(this, e + 1, e + 6), g(this, e + 2, e + 5), g(this, e + 3, e + 4);
                return this
            }, l.prototype.toString = function () {
                var t = 0 | this.length;
                return 0 === t ? "" : 0 === arguments.length ? S(this, 0, t) : function (t, e, i) {
                    var n = !1;
                    if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                    if ((void 0 === i || i > this.length) && (i = this.length), i <= 0) return "";
                    if ((i >>>= 0) <= (e >>>= 0)) return "";
                    for (t || (t = "utf8"); ;) switch (t) {
                        case"hex":
                            return _(this, e, i);
                        case"utf8":
                        case"utf-8":
                            return S(this, e, i);
                        case"ascii":
                            return $(this, e, i);
                        case"latin1":
                        case"binary":
                            return E(this, e, i);
                        case"base64":
                            return T(this, e, i);
                        case"ucs2":
                        case"ucs-2":
                        case"utf16le":
                        case"utf-16le":
                            return O(this, e, i);
                        default:
                            if (n) throw new TypeError("Unknown encoding: " + t);
                            t = (t + "").toLowerCase(), n = !0
                    }
                }.apply(this, arguments)
            }, l.prototype.equals = function (t) {
                if (!l.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === l.compare(this, t)
            }, l.prototype.inspect = function () {
                var t = "", i = e.INSPECT_MAX_BYTES;
                return this.length > 0 && (t = this.toString("hex", 0, i).match(/.{2}/g).join(" "), this.length > i && (t += " ... ")), "<Buffer " + t + ">"
            }, l.prototype.compare = function (t, e, i, n, o) {
                if (!l.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === e && (e = 0), void 0 === i && (i = t ? t.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), e < 0 || i > t.length || n < 0 || o > this.length) throw new RangeError("out of range index");
                if (n >= o && e >= i) return 0;
                if (n >= o) return -1;
                if (e >= i) return 1;
                if (e >>>= 0, i >>>= 0, n >>>= 0, o >>>= 0, this === t) return 0;
                for (var r = o - n, s = i - e, a = Math.min(r, s), c = this.slice(n, o), u = t.slice(e, i), d = 0; d < a; ++d) if (c[d] !== u[d]) {
                    r = c[d], s = u[d];
                    break
                }
                return r < s ? -1 : s < r ? 1 : 0
            }, l.prototype.includes = function (t, e, i) {
                return -1 !== this.indexOf(t, e, i)
            }, l.prototype.indexOf = function (t, e, i) {
                return v(this, t, e, i, !0)
            }, l.prototype.lastIndexOf = function (t, e, i) {
                return v(this, t, e, i, !1)
            }, l.prototype.write = function (t, e, i, n) {
                if (void 0 === e) n = "utf8", i = this.length, e = 0; else if (void 0 === i && "string" == typeof e) n = e, i = this.length, e = 0; else {
                    if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e |= 0, isFinite(i) ? (i |= 0, void 0 === n && (n = "utf8")) : (n = i, i = void 0)
                }
                var o = this.length - e;
                if ((void 0 === i || i > o) && (i = o), t.length > 0 && (i < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                for (var r = !1; ;) switch (n) {
                    case"hex":
                        return m(this, t, e, i);
                    case"utf8":
                    case"utf-8":
                        return w(this, t, e, i);
                    case"ascii":
                        return b(this, t, e, i);
                    case"latin1":
                    case"binary":
                        return x(this, t, e, i);
                    case"base64":
                        return k(this, t, e, i);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return C(this, t, e, i);
                    default:
                        if (r) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), r = !0
                }
            }, l.prototype.toJSON = function () {
                return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
            };
            var A = 4096;

            function $(t, e, i) {
                var n = "";
                i = Math.min(t.length, i);
                for (var o = e; o < i; ++o) n += String.fromCharCode(127 & t[o]);
                return n
            }

            function E(t, e, i) {
                var n = "";
                i = Math.min(t.length, i);
                for (var o = e; o < i; ++o) n += String.fromCharCode(t[o]);
                return n
            }

            function _(t, e, i) {
                var n = t.length;
                (!e || e < 0) && (e = 0), (!i || i < 0 || i > n) && (i = n);
                for (var o = "", r = e; r < i; ++r) o += F(t[r]);
                return o
            }

            function O(t, e, i) {
                for (var n = t.slice(e, i), o = "", r = 0; r < n.length; r += 2) o += String.fromCharCode(n[r] + 256 * n[r + 1]);
                return o
            }

            function P(t, e, i) {
                if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                if (t + e > i) throw new RangeError("Trying to access beyond buffer length")
            }

            function I(t, e, i, n, o, r) {
                if (!l.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (e > o || e < r) throw new RangeError('"value" argument is out of bounds');
                if (i + n > t.length) throw new RangeError("Index out of range")
            }

            function j(t, e, i, n) {
                e < 0 && (e = 65535 + e + 1);
                for (var o = 0, r = Math.min(t.length - i, 2); o < r; ++o) t[i + o] = (e & 255 << 8 * (n ? o : 1 - o)) >>> 8 * (n ? o : 1 - o)
            }

            function N(t, e, i, n) {
                e < 0 && (e = 4294967295 + e + 1);
                for (var o = 0, r = Math.min(t.length - i, 4); o < r; ++o) t[i + o] = e >>> 8 * (n ? o : 3 - o) & 255
            }

            function M(t, e, i, n, o, r) {
                if (i + n > t.length) throw new RangeError("Index out of range");
                if (i < 0) throw new RangeError("Index out of range")
            }

            function L(t, e, i, n, r) {
                return r || M(t, 0, i, 4), o.write(t, e, i, n, 23, 4), i + 4
            }

            function H(t, e, i, n, r) {
                return r || M(t, 0, i, 8), o.write(t, e, i, n, 52, 8), i + 8
            }

            l.prototype.slice = function (t, e) {
                var i, n = this.length;
                if (t = ~~t, e = void 0 === e ? n : ~~e, t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t), l.TYPED_ARRAY_SUPPORT) (i = this.subarray(t, e)).__proto__ = l.prototype; else {
                    var o = e - t;
                    i = new l(o, void 0);
                    for (var r = 0; r < o; ++r) i[r] = this[r + t]
                }
                return i
            }, l.prototype.readUIntLE = function (t, e, i) {
                t |= 0, e |= 0, i || P(t, e, this.length);
                for (var n = this[t], o = 1, r = 0; ++r < e && (o *= 256);) n += this[t + r] * o;
                return n
            }, l.prototype.readUIntBE = function (t, e, i) {
                t |= 0, e |= 0, i || P(t, e, this.length);
                for (var n = this[t + --e], o = 1; e > 0 && (o *= 256);) n += this[t + --e] * o;
                return n
            }, l.prototype.readUInt8 = function (t, e) {
                return e || P(t, 1, this.length), this[t]
            }, l.prototype.readUInt16LE = function (t, e) {
                return e || P(t, 2, this.length), this[t] | this[t + 1] << 8
            }, l.prototype.readUInt16BE = function (t, e) {
                return e || P(t, 2, this.length), this[t] << 8 | this[t + 1]
            }, l.prototype.readUInt32LE = function (t, e) {
                return e || P(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }, l.prototype.readUInt32BE = function (t, e) {
                return e || P(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }, l.prototype.readIntLE = function (t, e, i) {
                t |= 0, e |= 0, i || P(t, e, this.length);
                for (var n = this[t], o = 1, r = 0; ++r < e && (o *= 256);) n += this[t + r] * o;
                return n >= (o *= 128) && (n -= Math.pow(2, 8 * e)), n
            }, l.prototype.readIntBE = function (t, e, i) {
                t |= 0, e |= 0, i || P(t, e, this.length);
                for (var n = e, o = 1, r = this[t + --n]; n > 0 && (o *= 256);) r += this[t + --n] * o;
                return r >= (o *= 128) && (r -= Math.pow(2, 8 * e)), r
            }, l.prototype.readInt8 = function (t, e) {
                return e || P(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            }, l.prototype.readInt16LE = function (t, e) {
                e || P(t, 2, this.length);
                var i = this[t] | this[t + 1] << 8;
                return 32768 & i ? 4294901760 | i : i
            }, l.prototype.readInt16BE = function (t, e) {
                e || P(t, 2, this.length);
                var i = this[t + 1] | this[t] << 8;
                return 32768 & i ? 4294901760 | i : i
            }, l.prototype.readInt32LE = function (t, e) {
                return e || P(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }, l.prototype.readInt32BE = function (t, e) {
                return e || P(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }, l.prototype.readFloatLE = function (t, e) {
                return e || P(t, 4, this.length), o.read(this, t, !0, 23, 4)
            }, l.prototype.readFloatBE = function (t, e) {
                return e || P(t, 4, this.length), o.read(this, t, !1, 23, 4)
            }, l.prototype.readDoubleLE = function (t, e) {
                return e || P(t, 8, this.length), o.read(this, t, !0, 52, 8)
            }, l.prototype.readDoubleBE = function (t, e) {
                return e || P(t, 8, this.length), o.read(this, t, !1, 52, 8)
            }, l.prototype.writeUIntLE = function (t, e, i, n) {
                (t = +t, e |= 0, i |= 0, n) || I(this, t, e, i, Math.pow(2, 8 * i) - 1, 0);
                var o = 1, r = 0;
                for (this[e] = 255 & t; ++r < i && (o *= 256);) this[e + r] = t / o & 255;
                return e + i
            }, l.prototype.writeUIntBE = function (t, e, i, n) {
                (t = +t, e |= 0, i |= 0, n) || I(this, t, e, i, Math.pow(2, 8 * i) - 1, 0);
                var o = i - 1, r = 1;
                for (this[e + o] = 255 & t; --o >= 0 && (r *= 256);) this[e + o] = t / r & 255;
                return e + i
            }, l.prototype.writeUInt8 = function (t, e, i) {
                return t = +t, e |= 0, i || I(this, t, e, 1, 255, 0), l.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
            }, l.prototype.writeUInt16LE = function (t, e, i) {
                return t = +t, e |= 0, i || I(this, t, e, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : j(this, t, e, !0), e + 2
            }, l.prototype.writeUInt16BE = function (t, e, i) {
                return t = +t, e |= 0, i || I(this, t, e, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : j(this, t, e, !1), e + 2
            }, l.prototype.writeUInt32LE = function (t, e, i) {
                return t = +t, e |= 0, i || I(this, t, e, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : N(this, t, e, !0), e + 4
            }, l.prototype.writeUInt32BE = function (t, e, i) {
                return t = +t, e |= 0, i || I(this, t, e, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : N(this, t, e, !1), e + 4
            }, l.prototype.writeIntLE = function (t, e, i, n) {
                if (t = +t, e |= 0, !n) {
                    var o = Math.pow(2, 8 * i - 1);
                    I(this, t, e, i, o - 1, -o)
                }
                var r = 0, s = 1, a = 0;
                for (this[e] = 255 & t; ++r < i && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + r - 1] && (a = 1), this[e + r] = (t / s >> 0) - a & 255;
                return e + i
            }, l.prototype.writeIntBE = function (t, e, i, n) {
                if (t = +t, e |= 0, !n) {
                    var o = Math.pow(2, 8 * i - 1);
                    I(this, t, e, i, o - 1, -o)
                }
                var r = i - 1, s = 1, a = 0;
                for (this[e + r] = 255 & t; --r >= 0 && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + r + 1] && (a = 1), this[e + r] = (t / s >> 0) - a & 255;
                return e + i
            }, l.prototype.writeInt8 = function (t, e, i) {
                return t = +t, e |= 0, i || I(this, t, e, 1, 127, -128), l.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
            }, l.prototype.writeInt16LE = function (t, e, i) {
                return t = +t, e |= 0, i || I(this, t, e, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : j(this, t, e, !0), e + 2
            }, l.prototype.writeInt16BE = function (t, e, i) {
                return t = +t, e |= 0, i || I(this, t, e, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : j(this, t, e, !1), e + 2
            }, l.prototype.writeInt32LE = function (t, e, i) {
                return t = +t, e |= 0, i || I(this, t, e, 4, 2147483647, -2147483648), l.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : N(this, t, e, !0), e + 4
            }, l.prototype.writeInt32BE = function (t, e, i) {
                return t = +t, e |= 0, i || I(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), l.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : N(this, t, e, !1), e + 4
            }, l.prototype.writeFloatLE = function (t, e, i) {
                return L(this, t, e, !0, i)
            }, l.prototype.writeFloatBE = function (t, e, i) {
                return L(this, t, e, !1, i)
            }, l.prototype.writeDoubleLE = function (t, e, i) {
                return H(this, t, e, !0, i)
            }, l.prototype.writeDoubleBE = function (t, e, i) {
                return H(this, t, e, !1, i)
            }, l.prototype.copy = function (t, e, i, n) {
                if (i || (i = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < i && (n = i), n === i) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw new RangeError("targetStart out of bounds");
                if (i < 0 || i >= this.length) throw new RangeError("sourceStart out of bounds");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), t.length - e < n - i && (n = t.length - e + i);
                var o, r = n - i;
                if (this === t && i < e && e < n) for (o = r - 1; o >= 0; --o) t[o + e] = this[o + i]; else if (r < 1e3 || !l.TYPED_ARRAY_SUPPORT) for (o = 0; o < r; ++o) t[o + e] = this[o + i]; else Uint8Array.prototype.set.call(t, this.subarray(i, i + r), e);
                return r
            }, l.prototype.fill = function (t, e, i, n) {
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (n = e, e = 0, i = this.length) : "string" == typeof i && (n = i, i = this.length), 1 === t.length) {
                        var o = t.charCodeAt(0);
                        o < 256 && (t = o)
                    }
                    if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                    if ("string" == typeof n && !l.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
                } else "number" == typeof t && (t &= 255);
                if (e < 0 || this.length < e || this.length < i) throw new RangeError("Out of range index");
                if (i <= e) return this;
                var r;
                if (e >>>= 0, i = void 0 === i ? this.length : i >>> 0, t || (t = 0), "number" == typeof t) for (r = e; r < i; ++r) this[r] = t; else {
                    var s = l.isBuffer(t) ? t : z(new l(t, n).toString()), a = s.length;
                    for (r = 0; r < i - e; ++r) this[r + e] = s[r % a]
                }
                return this
            };
            var D = /[^+\/0-9A-Za-z-_]/g;

            function F(t) {
                return t < 16 ? "0" + t.toString(16) : t.toString(16)
            }

            function z(t, e) {
                var i;
                e = e || 1 / 0;
                for (var n = t.length, o = null, r = [], s = 0; s < n; ++s) {
                    if ((i = t.charCodeAt(s)) > 55295 && i < 57344) {
                        if (!o) {
                            if (i > 56319) {
                                (e -= 3) > -1 && r.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === n) {
                                (e -= 3) > -1 && r.push(239, 191, 189);
                                continue
                            }
                            o = i;
                            continue
                        }
                        if (i < 56320) {
                            (e -= 3) > -1 && r.push(239, 191, 189), o = i;
                            continue
                        }
                        i = 65536 + (o - 55296 << 10 | i - 56320)
                    } else o && (e -= 3) > -1 && r.push(239, 191, 189);
                    if (o = null, i < 128) {
                        if ((e -= 1) < 0) break;
                        r.push(i)
                    } else if (i < 2048) {
                        if ((e -= 2) < 0) break;
                        r.push(i >> 6 | 192, 63 & i | 128)
                    } else if (i < 65536) {
                        if ((e -= 3) < 0) break;
                        r.push(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128)
                    } else {
                        if (!(i < 1114112)) throw new Error("Invalid code point");
                        if ((e -= 4) < 0) break;
                        r.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, 63 & i | 128)
                    }
                }
                return r
            }

            function R(t) {
                return n.toByteArray(function (t) {
                    if ((t = function (t) {
                        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                    }(t).replace(D, "")).length < 2) return "";
                    for (; t.length % 4 != 0;) t += "=";
                    return t
                }(t))
            }

            function B(t, e, i, n) {
                for (var o = 0; o < n && !(o + i >= e.length || o >= t.length); ++o) e[o + i] = t[o];
                return o
            }
        }).call(e, i(22))
    }, function (t, e, i) {
        "use strict";
        e.byteLength = function (t) {
            var e = c(t), i = e[0], n = e[1];
            return 3 * (i + n) / 4 - n
        }, e.toByteArray = function (t) {
            for (var e, i = c(t), n = i[0], s = i[1], a = new r(function (t, e, i) {
                return 3 * (e + i) / 4 - i
            }(0, n, s)), l = 0, u = s > 0 ? n - 4 : n, d = 0; d < u; d += 4) e = o[t.charCodeAt(d)] << 18 | o[t.charCodeAt(d + 1)] << 12 | o[t.charCodeAt(d + 2)] << 6 | o[t.charCodeAt(d + 3)], a[l++] = e >> 16 & 255, a[l++] = e >> 8 & 255, a[l++] = 255 & e;
            2 === s && (e = o[t.charCodeAt(d)] << 2 | o[t.charCodeAt(d + 1)] >> 4, a[l++] = 255 & e);
            1 === s && (e = o[t.charCodeAt(d)] << 10 | o[t.charCodeAt(d + 1)] << 4 | o[t.charCodeAt(d + 2)] >> 2, a[l++] = e >> 8 & 255, a[l++] = 255 & e);
            return a
        }, e.fromByteArray = function (t) {
            for (var e, i = t.length, o = i % 3, r = [], s = 0, a = i - o; s < a; s += 16383) r.push(u(t, s, s + 16383 > a ? a : s + 16383));
            1 === o ? (e = t[i - 1], r.push(n[e >> 2] + n[e << 4 & 63] + "==")) : 2 === o && (e = (t[i - 2] << 8) + t[i - 1], r.push(n[e >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "="));
            return r.join("")
        };
        for (var n = [], o = [], r = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, l = s.length; a < l; ++a) n[a] = s[a], o[s.charCodeAt(a)] = a;

        function c(t) {
            var e = t.length;
            if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var i = t.indexOf("=");
            return -1 === i && (i = e), [i, i === e ? 0 : 4 - i % 4]
        }

        function u(t, e, i) {
            for (var o, r, s = [], a = e; a < i; a += 3) o = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(n[(r = o) >> 18 & 63] + n[r >> 12 & 63] + n[r >> 6 & 63] + n[63 & r]);
            return s.join("")
        }

        o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63
    }, function (t, e) {
        e.read = function (t, e, i, n, o) {
            var r, s, a = 8 * o - n - 1, l = (1 << a) - 1, c = l >> 1, u = -7, d = i ? o - 1 : 0, f = i ? -1 : 1,
                p = t[e + d];
            for (d += f, r = p & (1 << -u) - 1, p >>= -u, u += a; u > 0; r = 256 * r + t[e + d], d += f, u -= 8) ;
            for (s = r & (1 << -u) - 1, r >>= -u, u += n; u > 0; s = 256 * s + t[e + d], d += f, u -= 8) ;
            if (0 === r) r = 1 - c; else {
                if (r === l) return s ? NaN : 1 / 0 * (p ? -1 : 1);
                s += Math.pow(2, n), r -= c
            }
            return (p ? -1 : 1) * s * Math.pow(2, r - n)
        }, e.write = function (t, e, i, n, o, r) {
            var s, a, l, c = 8 * r - o - 1, u = (1 << c) - 1, d = u >> 1,
                f = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = n ? 0 : r - 1, h = n ? 1 : -1,
                g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
            for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = u) : (s = Math.floor(Math.log(e) / Math.LN2), e * (l = Math.pow(2, -s)) < 1 && (s--, l *= 2), (e += s + d >= 1 ? f / l : f * Math.pow(2, 1 - d)) * l >= 2 && (s++, l /= 2), s + d >= u ? (a = 0, s = u) : s + d >= 1 ? (a = (e * l - 1) * Math.pow(2, o), s += d) : (a = e * Math.pow(2, d - 1) * Math.pow(2, o), s = 0)); o >= 8; t[i + p] = 255 & a, p += h, a /= 256, o -= 8) ;
            for (s = s << o | a, c += o; c > 0; t[i + p] = 255 & s, p += h, s /= 256, c -= 8) ;
            t[i + p - h] |= 128 * g
        }
    }, function (t, e) {
        var i = {}.toString;
        t.exports = Array.isArray || function (t) {
            return "[object Array]" == i.call(t)
        }
    }, function (t, e, i) {
        "use strict";
        t.exports = {
            hex2rgb: function (t) {
                t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, i, n) {
                    return e + e + i + i + n + n
                });
                var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                return e ? {r: parseInt(e[1], 16), g: parseInt(e[2], 16), b: parseInt(e[3], 16)} : null
            }, rgb2hex: function (t) {
                return "#" + ["r", "g", "b"].map(function (e) {
                    return ("0" + t[e].toString(16)).slice(-2)
                }).join("")
            }, rgb2hsl: function (t) {
                var e = t.r, i = t.g, n = t.b;
                e /= 255, i /= 255, n /= 255;
                var o, r, s = Math.max(e, i, n), a = Math.min(e, i, n), l = (s + a) / 2;
                if (s === a) o = r = 0; else {
                    var c = s - a;
                    switch (r = l > .5 ? c / (2 - s - a) : c / (s + a), s) {
                        case e:
                            o = (i - n) / c + (i < n ? 6 : 0);
                            break;
                        case i:
                            o = (n - e) / c + 2;
                            break;
                        case n:
                            o = (e - i) / c + 4
                    }
                    o /= 6
                }
                return {h: o, s: r, l: l}
            }, hsl2rgb: function (t) {
                function e(t, e, i) {
                    return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
                }

                var i, n, o, r = t.h, s = t.s, a = t.l;
                if (0 === s) i = n = o = a; else {
                    var l = a < .5 ? a * (1 + s) : a + s - a * s, c = 2 * a - l;
                    i = e(c, l, r + 1 / 3), n = e(c, l, r), o = e(c, l, r - 1 / 3)
                }
                return {r: Math.round(255 * i), g: Math.round(255 * n), b: Math.round(255 * o)}
            }, rgb2rgbString: function (t) {
                return "rgb(" + [t.r, t.g, t.b].join(",") + ")"
            }
        }
    }, function (t, e, i) {
        "use strict";

        function n() {
            var t = 1732584193, e = 4023233417, i = 2562383102, n = 271733878, o = 3285377520, r = new Uint32Array(80),
                s = 0, a = 24, l = 0;

            function c() {
                for (var a = 16; a < 80; a++) {
                    var l = r[a - 3] ^ r[a - 8] ^ r[a - 14] ^ r[a - 16];
                    r[a] = l << 1 | l >>> 31
                }
                var c, u, d = t, f = e, p = i, h = n, g = o;
                for (a = 0; a < 80; a++) {
                    a < 20 ? (c = h ^ f & (p ^ h), u = 1518500249) : a < 40 ? (c = f ^ p ^ h, u = 1859775393) : a < 60 ? (c = f & p | h & (f | p), u = 2400959708) : (c = f ^ p ^ h, u = 3395469782);
                    var v = (d << 5 | d >>> 27) + c + g + u + (0 | r[a]);
                    g = h, h = p, p = f << 30 | f >>> 2, f = d, d = v
                }
                for (t = t + d | 0, e = e + f | 0, i = i + p | 0, n = n + h | 0, o = o + g | 0, s = 0, a = 0; a < 16; a++) r[a] = 0
            }

            function u(t) {
                r[s] |= (255 & t) << a, a ? a -= 8 : (s++, a = 24), 16 === s && c()
            }

            function d(t) {
                for (var e = "", i = 28; i >= 0; i -= 4) e += (t >> i & 15).toString(16);
                return e
            }

            return {
                update: function (t) {
                    if ("string" == typeof t) return function (t) {
                        var e = t.length;
                        l += 8 * e;
                        for (var i = 0; i < e; i++) u(t.charCodeAt(i))
                    }(t);
                    var e = t.length;
                    l += 8 * e;
                    for (var i = 0; i < e; i++) u(t[i])
                }, digest: function () {
                    u(128), (s > 14 || 14 === s && a < 24) && c(), s = 14, a = 24, u(0), u(0), u(l > 0xffffffffff ? l / 1099511627776 : 0), u(l > 4294967295 ? l / 4294967296 : 0);
                    for (var r = 24; r >= 0; r -= 8) u(l >> r);
                    return d(t) + d(e) + d(i) + d(n) + d(o)
                }
            }
        }

        t.exports = function (t) {
            if (void 0 === t) return n();
            var e = n();
            return e.update(t), e.digest()
        }
    }, function (t, e, i) {
        "use strict";
        var n = i(133), o = i(216);

        function r() {
            return this.width = 100, this.height = 100, this.svg = o("svg"), this.context = [], this.setAttributes(this.svg, {
                xmlns: "http://www.w3.org/2000/svg",
                width: this.width,
                height: this.height
            }), this
        }

        t.exports = r, r.prototype.currentContext = function () {
            return this.context[this.context.length - 1] || this.svg
        }, r.prototype.end = function () {
            return this.context.pop(), this
        }, r.prototype.currentNode = function () {
            var t = this.currentContext();
            return t.lastChild || t
        }, r.prototype.transform = function (t) {
            return this.currentNode().setAttribute("transform", Object.keys(t).map(function (e) {
                return e + "(" + t[e].join(",") + ")"
            }).join(" ")), this
        }, r.prototype.setAttributes = function (t, e) {
            Object.keys(e).forEach(function (i) {
                t.setAttribute(i, e[i])
            })
        }, r.prototype.setWidth = function (t) {
            this.svg.setAttribute("width", Math.floor(t))
        }, r.prototype.setHeight = function (t) {
            this.svg.setAttribute("height", Math.floor(t))
        }, r.prototype.toString = function () {
            return this.svg.toString()
        }, r.prototype.rect = function (t, e, i, r, s) {
            var a = this;
            if (Array.isArray(t)) return t.forEach(function (t) {
                a.rect.apply(a, t.concat(s))
            }), this;
            var l = o("rect");
            return this.currentContext().appendChild(l), this.setAttributes(l, n({
                x: t,
                y: e,
                width: i,
                height: r
            }, s)), this
        }, r.prototype.circle = function (t, e, i, r) {
            var s = o("circle");
            return this.currentContext().appendChild(s), this.setAttributes(s, n({cx: t, cy: e, r: i}, r)), this
        }, r.prototype.path = function (t, e) {
            var i = o("path");
            return this.currentContext().appendChild(i), this.setAttributes(i, n({d: t}, e)), this
        }, r.prototype.polyline = function (t, e) {
            var i = this;
            if (Array.isArray(t)) return t.forEach(function (t) {
                i.polyline(t, e)
            }), this;
            var r = o("polyline");
            return this.currentContext().appendChild(r), this.setAttributes(r, n({points: t}, e)), this
        }, r.prototype.group = function (t) {
            var e = o("g");
            return this.currentContext().appendChild(e), this.context.push(e), this.setAttributes(e, n({}, t)), this
        }
    }, function (t, e, i) {
        "use strict";
        var n = t.exports = function (t) {
            return this instanceof n ? (this.tagName = t, this.attributes = Object.create(null), this.children = [], this.lastChild = null, this) : new n(t)
        };
        n.prototype.appendChild = function (t) {
            return this.children.push(t), this.lastChild = t, this
        }, n.prototype.setAttribute = function (t, e) {
            return this.attributes[t] = e, this
        }, n.prototype.toString = function () {
            var t = this;
            return ["<", t.tagName, Object.keys(t.attributes).map(function (e) {
                return [" ", e, '="', t.attributes[e], '"'].join("")
            }).join(""), ">", t.children.map(function (t) {
                return t.toString()
            }).join(""), "</", t.tagName, ">"].join("")
        }
    }, , , , , function (t, e) {
    }, , , , , function (t, e, i) {
        var n, o, r, s;
        /*!
 * jQuery UI Widget-factory plugin for supporting an image carousel.  Currently this uses slick for functionality.
 * this widget should be called on a element that matches the following structure:
 * <div class="ic-carousel">
 *   <div class="ic-carousel-title"><h4>Title</h4></div>
 *   <div class="row">
 *      <div class="slider">
 *        <div>
 *          <img alt="alt" src="/image.jpg" />
 *          <div class="ic-credit">Credit: Credit</div>
 *          <div class="ic-caption">...</div>
 *        </div>
 *        ... more images ...
 *      </div>
 *   </div>
 * </div>
 * Author: @bryanp
 */
        /*!
 * jQuery UI Widget-factory plugin for supporting an image carousel.  Currently this uses slick for functionality.
 * this widget should be called on a element that matches the following structure:
 * <div class="ic-carousel">
 *   <div class="ic-carousel-title"><h4>Title</h4></div>
 *   <div class="row">
 *      <div class="slider">
 *        <div>
 *          <img alt="alt" src="/image.jpg" />
 *          <div class="ic-credit">Credit: Credit</div>
 *          <div class="ic-caption">...</div>
 *        </div>
 *        ... more images ...
 *      </div>
 *   </div>
 * </div>
 * Author: @bryanp
 */
        s = function (t) {
            return t.widget("nci.imagecarousel", {
                options: {previousText: "Previous", nextText: "Next", change: null},
                getTitle: function () {
                    return this.title
                },
                setPosition: function () {
                    this.$sliderEl.slick("setPosition")
                },
                _addControls: function () {
                    this.controls = {}, this.controls.$prevButton = t("<button>", {
                        class: "previous",
                        type: "button"
                    }).append("<span>", {
                        class: "ic-arrow-button",
                        text: this.options.previousText
                    }), this.controls.$nextButton = t("<button>", {class: "next"}).append("<span>", {
                        class: "ic-arrow-button",
                        text: this.options.nextText
                    }), this.controls.$status = t("<div>", {class: "pagingInfo"});
                    var e = t("<div>", {class: "row ic-controls"}).append(t("<div>", {class: "controls"}).append(t("<div>").append(this.controls.$status, t("<div>", {class: "arrows arrows-for-ic-carousel"}).append(this.controls.$prevButton, this.controls.$nextButton))));
                    this.$el.append(e)
                },
                _setStatus: function (t, e, i) {
                    var n = (e || 0) + 1;
                    this.controls.$status.text(n + "/" + t.slideCount)
                },
                _create: function () {
                    var e = this;
                    e.$el = t(this.element), e.$sliderEl = e.$el.find(".slider").first(), e.title = e.$el.find(".ic-carousel-title h4").text(), e._addControls(), e.$sliderEl.on("init reInit", function (t, i, n, o) {
                        e.slideCount = i.slideCount, e._setStatus(i, n, o)
                    }), e.$sliderEl.on("afterChange", function (t, i, n, o) {
                        e._setStatus(i, n, o)
                    }), e.$sliderEl.on("swipe", function (t, i, n) {
                        var o = e.$sliderEl.slick("slickCurrentSlide"), r = "unknown", s = -1;
                        "right" == n ? (r = "previous", s = o + 1 < e.slideCount ? o + 1 : 0) : (r = "next", s = o - 1 >= 0 ? o - 1 : e.slideCount - 1), e._trigger("change", null, {
                            triggerEvent: "swipe",
                            direction: r,
                            beforeIndex: s,
                            afterIndex: o,
                            totalImages: e.slideCount
                        })
                    }), e.$sliderEl.slick({
                        lazyLoad: "ondemand",
                        arrows: !0,
                        slidesToShow: 1,
                        previewMode: !0,
                        slidesToScroll: 1,
                        speed: 500,
                        dots: !1,
                        customPaging: function (e, i) {
                            t(e.$slides[i]).data();
                            return "<a>" + i + "</a>"
                        },
                        responsive: [{
                            breakpoint: 1024,
                            settings: {slidesToShow: 1, speed: 1e3, slidesToScroll: 1}
                        }, {
                            breakpoint: 768,
                            settings: {slidesToShow: 1, speed: 700, slidesToScroll: 1}
                        }, {breakpoint: 576, settings: {slidesToShow: 1, speed: 500, slidesToScroll: 1}}]
                    }), e.controls.$prevButton.click(function () {
                        if (e.slideCount > 0) {
                            var t = e.$sliderEl.slick("slickCurrentSlide"), i = t - 1 >= 0 ? t - 1 : e.slideCount - 1;
                            e.$sliderEl.slick("slickPrev"), e._trigger("change", null, {
                                triggerEvent: "click",
                                direction: "previous",
                                beforeIndex: t,
                                afterIndex: i,
                                totalImages: e.slideCount
                            })
                        }
                    }), e.controls.$nextButton.click(function () {
                        if (e.slideCount > 0) {
                            var t = e.$sliderEl.slick("slickCurrentSlide"), i = t + 1 < e.slideCount ? t + 1 : 0;
                            e.$sliderEl.slick("slickNext"), e._trigger("change", null, {
                                triggerEvent: "click",
                                direction: "next",
                                beforeIndex: t,
                                afterIndex: i,
                                totalImages: e.slideCount
                            })
                        }
                    })
                }
            })
        }, o = [i(0), i(2), i(77), i(78)], void 0 === (r = "function" == typeof(n = s) ? n.apply(e, o) : n) || (t.exports = r)
    }, function (t, e, i) {
        var n;
        void 0 === (n = function (t) {
            var e = i(0), n = document.createElement("script");
            n.src = "https://www.youtube.com/iframe_api";
            var o = document.getElementsByTagName("script")[0];
            return o.parentNode.insertBefore(n, o), {
                init: function (t) {
                    var i;
                    void 0 === (i = t) && (i = e("body")), i.find(".flex-video").each(function () {
                        var t = e(this), i = e("html").attr("lang") || "en", n = "&hl=en";
                        document.documentElement.lang.indexOf("es") > -1 && (n = "&hl=es"), e("#flex-video-api").removeAttr("id");
                        var o = "//www.youtube-nocookie.com/embed/", r = "https://www.youtube.com/", s = "", a = "",
                            l = "?wmode=opaque&rel=0&enablejsapi=1" + n, c = "";
                        t.hasClass("playlist") ? (c = "playlist", a = t.attr("data-playlist-title"), s = "videoseries", l = l + "&list=" + t.attr("data-playlist-id"), r = r + "playlist?list=" + s) : (c = "video", a = t.attr("data-video-title"), l += "", r = r + "watch?v=" + (s = t.attr("data-video-id"))), o = o + s + l;
                        var u = {
                            video: {en: "Youtube embedded video: " + r, es: "Video insertado desde YouTube: " + r},
                            playlist: {
                                en: "Youtube embedded video playlist: " + r,
                                es: "Lista de reproducci&oacute;n insertada desde YouTube: " + r
                            }
                        };
                        t.append(e(document.createElement("iframe")).attr("width", "560").attr("height", "315").attr("src", o).attr("frameborder", "0").attr("allowFullScreen", "").attr("title", a).attr("alt", a).attr("id", "flex-video-api").attr("enablejsapi", "1").text(u[c][i]))
                    })
                }
            }
        }.call(e, i, e, t)) || (t.exports = n)
    }]);
