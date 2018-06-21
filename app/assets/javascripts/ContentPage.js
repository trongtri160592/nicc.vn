
    webpackJsonp([0], [, function (e, t, n) {
        "use strict";
        var r = n(13), o = n(43), i = Object.prototype.toString;

        function a(e) {
            return "[object Array]" === i.call(e)
        }

        function s(e) {
            return null !== e && "object" == typeof e
        }

        function c(e) {
            return "[object Function]" === i.call(e)
        }

        function l(e, t) {
            if (null !== e && void 0 !== e) if ("object" == typeof e || a(e) || (e = [e]), a(e)) for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e); else for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
        }

        e.exports = {
            isArray: a, isArrayBuffer: function (e) {
                return "[object ArrayBuffer]" === i.call(e)
            }, isBuffer: o, isFormData: function (e) {
                return "undefined" != typeof FormData && e instanceof FormData
            }, isArrayBufferView: function (e) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
            }, isString: function (e) {
                return "string" == typeof e
            }, isNumber: function (e) {
                return "number" == typeof e
            }, isObject: s, isUndefined: function (e) {
                return void 0 === e
            }, isDate: function (e) {
                return "[object Date]" === i.call(e)
            }, isFile: function (e) {
                return "[object File]" === i.call(e)
            }, isBlob: function (e) {
                return "[object Blob]" === i.call(e)
            }, isFunction: c, isStream: function (e) {
                return s(e) && c(e.pipe)
            }, isURLSearchParams: function (e) {
                return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
            }, isStandardBrowserEnv: function () {
                return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
            }, forEach: l, merge: function e() {
                var t = {};

                function n(n, r) {
                    "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = n
                }

                for (var r = 0, o = arguments.length; r < o; r++) l(arguments[r], n);
                return t
            }, extend: function (e, t, n) {
                return l(t, function (t, o) {
                    e[o] = n && "function" == typeof t ? r(t, n) : t
                }), e
            }, trim: function (e) {
                return e.replace(/^\s*/, "").replace(/\s*$/, "")
            }
        }
    }, , , , , , function (e, t, n) {
        "use strict";
        (function (t) {
            var r = n(1), o = n(45), i = {"Content-Type": "application/x-www-form-urlencoded"};

            function a(e, t) {
                !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
            }

            var s, c = {
                adapter: ("undefined" != typeof XMLHttpRequest ? s = n(14) : void 0 !== t && (s = n(14)), s),
                transformRequest: [function (e, t) {
                    return o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
                }],
                transformResponse: [function (e) {
                    if ("string" == typeof e) try {
                        e = JSON.parse(e)
                    } catch (e) {
                    }
                    return e
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function (e) {
                    return e >= 200 && e < 300
                }
            };
            c.headers = {common: {Accept: "application/json, text/plain, */*"}}, r.forEach(["delete", "get", "head"], function (e) {
                c.headers[e] = {}
            }), r.forEach(["post", "put", "patch"], function (e) {
                c.headers[e] = r.merge(i)
            }), e.exports = c
        }).call(t, n(30))
    }, , , , , function (e, t, n) {
        "use strict";
        var r = n(37);
        n.d(t, "a", function () {
            return r.a
        });
        var o = n(63);
        n.d(t, "b", function () {
            return o.a
        }), n.d(t, "c", function () {
            return o.b
        }), n.d(t, "d", function () {
            return o.c
        })
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e, t) {
            return function () {
                for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                return e.apply(t, n)
            }
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(1), o = n(46), i = n(48), a = n(49), s = n(50), c = n(15),
            l = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(51);
        e.exports = function (e) {
            return new Promise(function (t, u) {
                var d = e.data, p = e.headers;
                r.isFormData(d) && delete p["Content-Type"];
                var f = new XMLHttpRequest, h = "onreadystatechange", v = !1;
                if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in f || s(e.url) || (f = new window.XDomainRequest, h = "onload", v = !0, f.onprogress = function () {
                }, f.ontimeout = function () {
                }), e.auth) {
                    var m = e.auth.username || "", g = e.auth.password || "";
                    p.Authorization = "Basic " + l(m + ":" + g)
                }
                if (f.open(e.method.toUpperCase(), i(e.url, e.params, e.paramsSerializer), !0), f.timeout = e.timeout, f[h] = function () {
                    if (f && (4 === f.readyState || v) && (0 !== f.status || f.responseURL && 0 === f.responseURL.indexOf("file:"))) {
                        var n = "getAllResponseHeaders" in f ? a(f.getAllResponseHeaders()) : null, r = {
                            data: e.responseType && "text" !== e.responseType ? f.response : f.responseText,
                            status: 1223 === f.status ? 204 : f.status,
                            statusText: 1223 === f.status ? "No Content" : f.statusText,
                            headers: n,
                            config: e,
                            request: f
                        };
                        o(t, u, r), f = null
                    }
                }, f.onerror = function () {
                    u(c("Network Error", e, null, f)), f = null
                }, f.ontimeout = function () {
                    u(c("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", f)), f = null
                }, r.isStandardBrowserEnv()) {
                    var b = n(52),
                        y = (e.withCredentials || s(e.url)) && e.xsrfCookieName ? b.read(e.xsrfCookieName) : void 0;
                    y && (p[e.xsrfHeaderName] = y)
                }
                if ("setRequestHeader" in f && r.forEach(p, function (e, t) {
                    void 0 === d && "content-type" === t.toLowerCase() ? delete p[t] : f.setRequestHeader(t, e)
                }), e.withCredentials && (f.withCredentials = !0), e.responseType) try {
                    f.responseType = e.responseType
                } catch (t) {
                    if ("json" !== e.responseType) throw t
                }
                "function" == typeof e.onDownloadProgress && f.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && f.upload && f.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
                    f && (f.abort(), u(e), f = null)
                }), void 0 === d && (d = null), f.send(d)
            })
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(47);
        e.exports = function (e, t, n, o, i) {
            var a = new Error(e);
            return r(a, t, n, o, i)
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            return !(!e || !e.__CANCEL__)
        }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            this.message = e
        }

        r.prototype.toString = function () {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }, r.prototype.__CANCEL__ = !0, e.exports = r
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        });
        var r = function () {
            function e() {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.termKey = void 0, this.term = void 0, this.termType = void 0, this.count = 0, this.codes = []
            }

            return e.fromJSON = function (t) {
                if ("string" == typeof t) return JSON.parse(t, e.reviver);
                var n = new e;
                return Object.keys(t).forEach(function (e) {
                    switch (e) {
                        case"term_key":
                            n.termKey = t[e];
                            break;
                        case"term":
                            n.term = t[e];
                            break;
                        case"term_type":
                            n.termType = t[e];
                            break;
                        case"count":
                            n.count = t[e];
                            break;
                        case"codes":
                            n.codes = t[e]
                    }
                }), n
            }, e.reviver = function (t, n) {
                return "" === t ? e.fromJSON(n) : n
            }, e
        }()
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        });
        var r = function () {
            function e() {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.name = void 0, this.type = void 0, this.codes = [], this.synonyms = [], this.category = void 0
            }

            return e.fromJSON = function (t) {
                if ("string" == typeof t) return JSON.parse(t, e.reviver);
                var n = new e;
                return Object.keys(t).forEach(function (e) {
                    switch (e) {
                        case"name":
                            n.name = t[e];
                            break;
                        case"type":
                            n.type = t[e];
                            break;
                        case"codes":
                            n.codes = t[e];
                            break;
                        case"synonyms":
                            n.synonyms = t[e];
                            break;
                        case"category":
                            n.category = t[e]
                    }
                }), n
            }, e.reviver = function (t, n) {
                return "" === t ? e.fromJSON(n) : n
            }, e
        }()
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        });
        var r = function () {
            function e() {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.name = void 0, this.codes = [], this.parentDiseaseID = void 0, this.menu = void 0
            }

            return e.fromJSON = function (t) {
                if ("string" == typeof t) return JSON.parse(t, e.reviver);
                var n = new e;
                return Object.keys(t).forEach(function (e) {
                    switch (e) {
                        case"name":
                            n.name = t[e];
                            break;
                        case"codes":
                            n.codes = t[e];
                            break;
                        case"disease_parent_id":
                            n.parentDiseaseID = t[e];
                            break;
                        case"menu":
                            n.menu = t[e]
                    }
                }), n
            }, e.reviver = function (t, n) {
                return "" === t ? e.fromJSON(n) : n
            }, e
        }()
    }, function (e, t, n) {
        var r, o, i, a;
        /*!
 * jQuery UI Widget-factory plugin for autosuggest text boxes that allow a user to type
 * ahead, and select a single item from a list of items.
 * Author: @bryanp
 */
        /*!
 * jQuery UI Widget-factory plugin for autosuggest text boxes that allow a user to type
 * ahead, and select a single item from a list of items.
 * Author: @bryanp
 */
        a = function (e) {
            return e.widget("nci.ctsautoselect", e.nci.highlighterautocomplete, {
                options: {source: !1},
                source: function (e, t) {
                    this.options.source && this.options.source(e, t)
                }
            })
        }, o = [n(0), n(2), n(26)], void 0 === (i = "function" == typeof(r = a) ? r.apply(t, o) : r) || (e.exports = i)
    }, , , , , function (e, t, n) {
        var r, o, i, a;
        /*!
 * jQuery UI Widget-factory plugin for autosuggest text boxes that allow a user to type
 * ahead, and select a single item from a list of items.
 * Author: @bryanp
 */
        /*!
 * jQuery UI Widget-factory plugin for autosuggest text boxes that allow a user to type
 * ahead, and select a single item from a list of items.
 * Author: @bryanp
 */
        a = function (e) {
            return e.widget("nci.highlighterautocomplete", e.ui.autocomplete, {
                options: {
                    minLength: 3,
                    fetchSrc: null,
                    contains: !1,
                    queryParam: "term",
                    queryString: {},
                    appendTo: "appendTo",
                    focus: function (t, n) {
                        t.preventDefault(), t.stopPropagation(), e(this).val(n.item.item || n.item.term)
                    },
                    select: function (t, n) {
                        t.preventDefault(), t.stopPropagation(), e(this).val(n.item.item || n.item.term)
                    },
                    source: function (n, r) {
                        var o = this.options.fetchSrc, i = e.extend({}, this.options.queryString || {}), a = n.term;
                        i[this.options.queryParam] = a, t && t.abort && t.abort(), t = "string" == typeof o ? e.ajax({
                            url: o,
                            data: i,
                            dataType: "json"
                        }) : o.call(this, a).done(function (e) {
                            return e.result
                        }), e.when(t).done(function (e) {
                            e.result ? r(e.result) : r(e)
                        }).fail(function () {
                            r([])
                        })
                    }
                }, _renderItem: function (t, n) {
                    var r = this.term.replace(/[-[\]{}()*+?.,\^$|#\s]/g, "$&"), o = new RegExp;
                    o = this.options.contains ? new RegExp("(" + r + ")", "i") : new RegExp("(^" + r + "|\\s+" + r + ")", "i");
                    var i = (n.item || n.term).replace(o, "<strong>$&</strong>");
                    return e("<li></li>").data("ui-autocomplete-item", n).append(i).appendTo(t)
                }
            });
            var t
        }, o = [n(0), n(2)], void 0 === (i = "function" == typeof(r = a) ? r.apply(t, o) : r) || (e.exports = i)
    }, , , , , , , , function (e, t) {
        (function (t) {
            e.exports = t
        }).call(t, {})
    }, , function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return i
        });
        var r = n(12), o = n(67);
        var i = function (e) {
            function t(n) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var i = function (e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, e.call(this));
                return i.facade = new o.a(r.a.create(n), i.isDebug()), i
            }

            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), t.prototype.initialize = function () {
                this.initializeLocalFields()
            }, t
        }(n(5).a)
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return o
        });
        var r = n(38);
        var o = function () {
            function e() {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }

            return e.create = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "v1",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "https", o = arguments[3],
                    i = null;
                switch (t) {
                    case"v1":
                        var a = new r.a(n, e, o);
                        i = new r.b(a)
                }
                if (null != i) return i;
                throw new Error("You must specify a valid Clinical Trials Service version")
            }, e
        }()
    }, function (e, t, n) {
        "use strict";
        var r = n(39);
        n.d(t, "b", function () {
            return r.a
        });
        var o = n(40);
        n.d(t, "a", function () {
            return o.a
        })
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return o
        });
        var r = n(12);
        var o = function () {
            function e(t) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.connection = t
            }

            return e.prototype.getTerms = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = {
                    term_type: e,
                    size: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                    from: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                }, o = Object.assign({}, t, n);
                return this.connection.getRequest("/terms", o).then(function (e) {
                    return r.d.fromJSON(e)
                })
            }, e.prototype.getInterventions = function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10, o = arguments[3], i = {
                    size: n,
                    sort: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "name",
                    order: arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "asc"
                };
                e && (i.category = e), t && (i.name = t);
                var a = Object.assign({}, o, i);
                return this.connection.getRequest("/interventions", a).then(function (e) {
                    return r.c.fromJSON(e)
                })
            }, e.prototype.getDiseases = function (e, t, n) {
                var o = {type: e};
                t && (o.ancestor_ids = t);
                var i = Object.assign({}, n, o);
                return this.connection.getRequest("/diseases", i).then(function (e) {
                    return r.b.fromJSON(e)
                })
            }, e
        }()
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return a
        });
        var r = n(41), o = n.n(r), i = n(6);
        var a = function () {
            function e(t, n, r) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.protocol = t, this.hostname = n, this.port = r, (new i.b).getConfiguration()
            }

            return e.prototype.getRequest = function (e, t) {
                var n = this.port ? ":" + this.port : "", r = this.protocol + "://" + this.hostname + n + "/v1" + e;
                return o.a.get(r, {params: t}).then(function (e) {
                    return e.data
                })
            }, e
        }()
    }, function (e, t, n) {
        e.exports = n(42)
    }, function (e, t, n) {
        "use strict";
        var r = n(1), o = n(13), i = n(44), a = n(7);

        function s(e) {
            var t = new i(e), n = o(i.prototype.request, t);
            return r.extend(n, i.prototype, t), r.extend(n, t), n
        }

        var c = s(a);
        c.Axios = i, c.create = function (e) {
            return s(r.merge(a, e))
        }, c.Cancel = n(17), c.CancelToken = n(58), c.isCancel = n(16), c.all = function (e) {
            return Promise.all(e)
        }, c.spread = n(59), e.exports = c, e.exports.default = c
    }, function (e, t) {
        function n(e) {
            return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }

        /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
        e.exports = function (e) {
            return null != e && (n(e) || function (e) {
                return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
            }(e) || !!e._isBuffer)
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(7), o = n(1), i = n(53), a = n(54), s = n(56), c = n(57);

        function l(e) {
            this.defaults = e, this.interceptors = {request: new i, response: new i}
        }

        l.prototype.request = function (e) {
            "string" == typeof e && (e = o.merge({url: arguments[0]}, arguments[1])), (e = o.merge(r, this.defaults, {method: "get"}, e)).method = e.method.toLowerCase(), e.baseURL && !s(e.url) && (e.url = c(e.baseURL, e.url));
            var t = [a, void 0], n = Promise.resolve(e);
            for (this.interceptors.request.forEach(function (e) {
                t.unshift(e.fulfilled, e.rejected)
            }), this.interceptors.response.forEach(function (e) {
                t.push(e.fulfilled, e.rejected)
            }); t.length;) n = n.then(t.shift(), t.shift());
            return n
        }, o.forEach(["delete", "get", "head", "options"], function (e) {
            l.prototype[e] = function (t, n) {
                return this.request(o.merge(n || {}, {method: e, url: t}))
            }
        }), o.forEach(["post", "put", "patch"], function (e) {
            l.prototype[e] = function (t, n, r) {
                return this.request(o.merge(r || {}, {method: e, url: t, data: n}))
            }
        }), e.exports = l
    }, function (e, t, n) {
        "use strict";
        var r = n(1);
        e.exports = function (e, t) {
            r.forEach(e, function (n, r) {
                r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
            })
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(15);
        e.exports = function (e, t, n) {
            var o = n.config.validateStatus;
            n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e, t, n, r, o) {
            return e.config = t, n && (e.code = n), e.request = r, e.response = o, e
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(1);

        function o(e) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }

        e.exports = function (e, t, n) {
            if (!t) return e;
            var i;
            if (n) i = n(t); else if (r.isURLSearchParams(t)) i = t.toString(); else {
                var a = [];
                r.forEach(t, function (e, t) {
                    null !== e && void 0 !== e && (r.isArray(e) && (t += "[]"), r.isArray(e) || (e = [e]), r.forEach(e, function (e) {
                        r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), a.push(o(t) + "=" + o(e))
                    }))
                }), i = a.join("&")
            }
            return i && (e += (-1 === e.indexOf("?") ? "?" : "&") + i), e
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(1);
        e.exports = function (e) {
            var t, n, o, i = {};
            return e ? (r.forEach(e.split("\n"), function (e) {
                o = e.indexOf(":"), t = r.trim(e.substr(0, o)).toLowerCase(), n = r.trim(e.substr(o + 1)), t && (i[t] = i[t] ? i[t] + ", " + n : n)
            }), i) : i
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(1);
        e.exports = r.isStandardBrowserEnv() ? function () {
            var e, t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");

            function o(e) {
                var r = e;
                return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                    href: n.href,
                    protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                    host: n.host,
                    search: n.search ? n.search.replace(/^\?/, "") : "",
                    hash: n.hash ? n.hash.replace(/^#/, "") : "",
                    hostname: n.hostname,
                    port: n.port,
                    pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                }
            }

            return e = o(window.location.href), function (t) {
                var n = r.isString(t) ? o(t) : t;
                return n.protocol === e.protocol && n.host === e.host
            }
        }() : function () {
            return !0
        }
    }, function (e, t, n) {
        "use strict";
        var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

        function o() {
            this.message = "String contains an invalid character"
        }

        o.prototype = new Error, o.prototype.code = 5, o.prototype.name = "InvalidCharacterError", e.exports = function (e) {
            for (var t, n, i = String(e), a = "", s = 0, c = r; i.charAt(0 | s) || (c = "=", s % 1); a += c.charAt(63 & t >> 8 - s % 1 * 8)) {
                if ((n = i.charCodeAt(s += .75)) > 255) throw new o;
                t = t << 8 | n
            }
            return a
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(1);
        e.exports = r.isStandardBrowserEnv() ? {
            write: function (e, t, n, o, i, a) {
                var s = [];
                s.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), r.isString(o) && s.push("path=" + o), r.isString(i) && s.push("domain=" + i), !0 === a && s.push("secure"), document.cookie = s.join("; ")
            }, read: function (e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            }, remove: function (e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write: function () {
            }, read: function () {
                return null
            }, remove: function () {
            }
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(1);

        function o() {
            this.handlers = []
        }

        o.prototype.use = function (e, t) {
            return this.handlers.push({fulfilled: e, rejected: t}), this.handlers.length - 1
        }, o.prototype.eject = function (e) {
            this.handlers[e] && (this.handlers[e] = null)
        }, o.prototype.forEach = function (e) {
            r.forEach(this.handlers, function (t) {
                null !== t && e(t)
            })
        }, e.exports = o
    }, function (e, t, n) {
        "use strict";
        var r = n(1), o = n(55), i = n(16), a = n(7);

        function s(e) {
            e.cancelToken && e.cancelToken.throwIfRequested()
        }

        e.exports = function (e) {
            return s(e), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
                delete e.headers[t]
            }), (e.adapter || a.adapter)(e).then(function (t) {
                return s(e), t.data = o(t.data, t.headers, e.transformResponse), t
            }, function (t) {
                return i(t) || (s(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
            })
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(1);
        e.exports = function (e, t, n) {
            return r.forEach(n, function (n) {
                e = n(e, t)
            }), e
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(17);

        function o(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise(function (e) {
                t = e
            });
            var n = this;
            e(function (e) {
                n.reason || (n.reason = new r(e), t(n.reason))
            })
        }

        o.prototype.throwIfRequested = function () {
            if (this.reason) throw this.reason
        }, o.source = function () {
            var e;
            return {
                token: new o(function (t) {
                    e = t
                }), cancel: e
            }
        }, e.exports = o
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            return function (t) {
                return e.apply(null, t)
            }
        }
    }, , , , function (e, t, n) {
        "use strict";
        n(18);
        var r = n(64);
        n.d(t, "c", function () {
            return r.a
        });
        n(19);
        var o = n(65);
        n.d(t, "b", function () {
            return o.a
        });
        n(20);
        var i = n(66);
        n.d(t, "a", function () {
            return i.a
        })
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return o
        });
        var r = n(18);
        var o = function () {
            function e() {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.total = 0, this.terms = []
            }

            return e.fromJSON = function (t) {
                if ("string" == typeof t) return JSON.parse(t, e.reviver);
                var n = Object.create(e.prototype);
                return Object.assign(n, t, {
                    terms: t.terms.map(function (e) {
                        return r.a.fromJSON(e)
                    })
                })
            }, e.reviver = function (t, n) {
                return "" === t ? e.fromJSON(n) : n
            }, e
        }()
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return o
        });
        var r = n(19);
        var o = function () {
            function e() {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.total = 0, this.terms = []
            }

            return e.fromJSON = function (t) {
                if ("string" == typeof t) return JSON.parse(t, e.reviver);
                var n = Object.create(e.prototype);
                return Object.assign(n, t, {
                    terms: t.terms.map(function (e) {
                        return r.a.fromJSON(e)
                    })
                })
            }, e.reviver = function (t, n) {
                return "" === t ? e.fromJSON(n) : n
            }, e
        }()
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return o
        });
        var r = n(20);
        var o = function () {
            function e() {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.total = 0, this.terms = []
            }

            return e.fromJSON = function (t) {
                if ("string" == typeof t) return JSON.parse(t, e.reviver);
                var n = Object.create(e.prototype);
                return Object.assign(n, t, {
                    terms: t.terms.map(function (e) {
                        return r.a.fromJSON(e)
                    })
                })
            }, e.reviver = function (t, n) {
                return "" === t ? e.fromJSON(n) : n
            }, e
        }()
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return i
        });
        var r = ["Active", "Approved", "Enrolling by Invitation", "In Review", "Temporarily Closed to Accrual", "Temporarily Closed to Accrual and Intervention"],
            o = ["C2916", "C3262", "C2991"], i = function () {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.isDebug = !1, this.svc = t, this.isDebug = n
                }

                return e.prototype.getDiseasesForSimpleTypeAhead = function (e) {
                    var t = this;
                    return this.svc.getDiseases(["maintype", "subtype", "stage"], void 0, {
                        name: e,
                        size: 10,
                        sort: "cancergov",
                        current_trial_status: r
                    }).then(function (e) {
                        return e.terms
                    }).then(function (e) {
                        return t.isDebug && e.forEach(function (e) {
                            return e.name += " (" + e.codes.join("|") + ")"
                        }), e
                    })
                }, e.prototype.getMainType = function () {
                    var e = this;
                    return this.svc.getDiseases("maintype", void 0, {size: 0, current_trial_status: r}).then(function (t) {
                        var n = [], r = [];
                        t.terms.forEach(function (e) {
                            o.includes(e.codes.join("|")) ? r.push(e) : n.push(e)
                        });
                        var i = n.concat(r);
                        return e.isDebug && i.forEach(function (e) {
                            return e.name += " (" + e.codes.join("|") + ")"
                        }), i
                    })
                }, e.prototype.getSubtypes = function (e) {
                    var t = this;
                    return this.svc.getDiseases("subtype", e, {size: 0, current_trial_status: r}).then(function (e) {
                        var n = e.terms;
                        return t.isDebug && n.forEach(function (e) {
                            return e.name += " (" + e.codes.join("|") + ")"
                        }), n
                    })
                }, e.prototype.getStages = function (e) {
                    var t = this;
                    return this.svc.getDiseases("stage", e, {size: 0, current_trial_status: r}).then(function (e) {
                        var n = e.terms;
                        return t.isDebug && n.forEach(function (e) {
                            return e.name += " (" + e.codes.join("|") + ")"
                        }), n
                    })
                }, e.prototype.getFindings = function (e) {
                    var t = this;
                    return this.svc.getDiseases("finding", e, {size: 0, current_trial_status: r}).then(function (e) {
                        var n = e.terms;
                        return t.isDebug && n.forEach(function (e) {
                            return e.name += " (" + e.codes.join("|") + ")"
                        }), n
                    })
                }, e.prototype.getCountries = function () {
                    return this.svc.getTerms("sites.org_country", {
                        sort: "term",
                        current_trial_statuses: r
                    }, 100).then(function (e) {
                        return e.terms.map(function (e) {
                            return e.term
                        })
                    })
                }, e.prototype.searchHospital = function (e) {
                    return this.svc.getTerms("sites.org_name", {
                        term: e,
                        sort: "term",
                        current_trial_statuses: r
                    }, 10).then(function (e) {
                        return e.terms
                    })
                }, e.prototype.searchTrialInvestigators = function (e) {
                    return this.svc.getTerms("principal_investigator", {
                        term: e,
                        sort: "term",
                        current_trial_statuses: r
                    }, 10).then(function (e) {
                        return e.terms
                    })
                }, e.prototype.searchLeadOrg = function (e) {
                    return this.svc.getTerms("lead_org", {
                        term: e,
                        sort: "term",
                        current_trial_statuses: r
                    }, 10).then(function (e) {
                        return e.terms
                    })
                }, e.prototype.searchDrugs = function (e) {
                    return this.svc.getInterventions(["Agent", "Agent Category"], e, 10, {current_trial_status: r}, "cancergov").then(function (e) {
                        return e.terms
                    })
                }, e.prototype.searchOtherInterventions = function (e) {
                    return this.svc.getInterventions("Other", e, 10, {current_trial_status: r}, "cancergov").then(function (e) {
                        return e.terms
                    })
                }, e
            }()
    }, function (e, t, n) {
        var r;
        void 0 === (r = function (e) {
            var t = null, n = null, r = "livehelp.cancer.gov", o = "livehelp-es.cancer.gov",
                i = "nci--tst.custhelp.com";

            function a() {
                "www.cancer.gov" === location.hostname.toLowerCase() ? (t = r, n = o) : (t = i, n = i)
            }

            var s = !1;
            return {
                init: function () {
                    s || (a(), s = !0)
                }, openChatWindow: function () {
                    this.init(), window.open("https://" + t + "/app/chat/chat_landing?_icf_22=92", "ProactiveLiveHelpForCTS", "height=600,width=633")
                }, openSpanishChatWindow: function () {
                    this.init(), window.open("https://" + n + "/app/chat/chat_landing?_icf_22=92", "ProactiveLiveHelpForCTS", "height=600,width=633")
                }
            }
        }.call(t, n, t, e)) || (e.exports = r)
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
        var r;
        void 0 === (r = function (e) {
            var t = n(0);
            window.popWindow = function (e, t) {
                "privacy" == e ? window.open("/common/popUps/popPrivacy.aspx", "", "scrollbars=no,resizable=yes,width=300,height=300") : "livehelp" == e ? window.open("/common/popUps/popLiveHelp.aspx", "LiveHelp", "scrollbars=yes,resizable=yes,menubar=yes,toolbar=yes,location=yes,width=425,height=500") : "definition" == e ? (t = t.replace(/\s/g, "+"), window.open("/common/popUps/popDefinition.aspx?term=" + t, "", "scrollbars=yes,resizable=yes,width=350,height=450")) : "defbyid" == e ? window.open("/common/popUps/popDefinition.aspx?id=" + t, "", "scrollbars=yes,resizable=yes,width=350,height=450") : "file" == e ? window.open(t, "", "scrollbars=yes,resizable=yes,width=550,height=550") : "fullbrowser" == e ? window.open(t, "", "menubar=yes,location=yes,status=yes,toolbar=yes,titlebar=yes,scrollbars=yes,resizable=yes,width=675,height=510") : "small" == e && window.open(t, "", "scrollbars=no,resizable=no,menubar=no,status=no,toolbar=no,titlebar=no,width=200,height=100,left=400,screenX=400,top=300,screenY=300")
            }, jQuery.fn.load = function (e) {
                t(window).on("load", e)
            }, window.dynPopWindow = function (e, t, n) {
                for (options = "", optWidth = "width=500", optHeight = "height=500", optScrollbar = "scrollbars=yes", optResizable = "resizable=yes", optMenubar = "menubar=yes", optLocation = "location=yes", optStatus = "status=yes", optToolbar = "toolbar=yes", windowOptions = n.split(","), i = 0; i < windowOptions.length; i++) attribute = windowOptions[i].substring(0, windowOptions[i].indexOf("=")).toLowerCase(), "width" == attribute ? optWidth = windowOptions[i] : "height" == attribute ? optHeight = windowOptions[i] : "scrollbars" == attribute ? optScrollbar = windowOptions[i] : "resizable" == attribute ? optResizable = windowOptions[i] : "menubar" == attribute ? optMenubar = windowOptions[i] : "location" == attribute ? optLocation = windowOptions[i] : "status" == attribute ? optStatus = windowOptions[i] : "toolbar" == attribute && (optToolbar = windowOptions[i]);
                options = optWidth + "," + optHeight + "," + optScrollbar + "," + optResizable + "," + optMenubar + "," + optLocation + "," + optStatus + "," + optToolbar, window.open(e, t, options)
            }
        }.call(t, n, t, e)) || (e.exports = r)
    }, function (e, t, n) {
        var r;
        void 0 === (r = function (e) {
            var t = {
                buildTOC: function (e, t, r, o, a) {
                    var s = n(0), c = e || ".on-this-page", l = s((t || "#accordion") + " " + (r || "section")),
                        u = s(c + " ul").empty();
                    for (i = 0; i < l.length; i++) {
                        var d = l[i], p = s(d);
                        if (d.id) {
                            var f = p.children("h2").html();
                            u.append("<li><a href='#" + d.id + "'>" + f + "</a></li>")
                        }
                    }
                },
                buildOTP: function () {
                    var e = n(0), r = {
                            titleText: {en: "On This Page", es: "En Esta Página"},
                            class: "on-this-page hide-otp-on-collapse",
                            placement: {insert: "prependTo", to: "[data-otp-selector]"},
                            ignore: {
                                heading: ["h6", ".ignore-this h2", ".callout-box h3", ".callout-box-full h3", ".callout-box-left h3", ".callout-box-right h3", ".card-thumbnail h3", ".feature-card h3"],
                                node: ["aside"]
                            },
                            maxLevel: e("[data-otp-depth]")[0] ? e("[data-otp-depth]").data("otp-depth") : 1
                        },
                        o = e("<nav>").addClass(r.class).attr("role", "navigation").append(e("<h6>").text(r.titleText[t.page.lang || "en"])),
                        i = e("article").data("nci-outline").sections[0];
                    return o.append(t.page.parseOutline(i, 1, r.maxLevel, r.ignore)), o[r.placement.insert](r.placement.to), o
                },
                Breakpoints: n(4),
                Buttons: n(97),
                Nav: n(99),
                PageOptions: n(102),
                Search: n(104),
                dictionary: n(106),
                page: n(107),
                doAutocomplete: n(93).doAutocomplete,
                window: {}
            };
            return window.NCI = t, t
        }.call(t, n, t, e)) || (e.exports = r)
    }, function (e, t, n) {
        var r;
        void 0 === (r = function (e) {
            return {toggle: n(98)}
        }.call(t, n, t, e)) || (e.exports = r)
    }, function (e, t, n) {
        var r;
        void 0 === (r = function (e) {
            var t = n(0);
            return {
                html: '<button aria-expanded="false" class="toggle" type="button"><span class="hidden">Open child elements</span></button>',
                sel: ".toggle",
                lang: t("html").attr("lang") || "en",
                _innerText: {en: {true: "Collapse", false: "Expand"}, es: {true: "Reducir", false: "Ampliar"}},
                createFor: function (e) {
                    var n = NCI.Buttons.toggle, r = t("<button>").addClass("toggle").attr({
                        "aria-expanded": "false",
                        type: "button"
                    }).append(t("<span>").addClass("hidden").text(n._innerText[n.lang].false));
                    return r.appendTo(e), e.children(r)
                },
                clickMega: function (e) {
                    var n = NCI.Buttons.toggle, r = (NCI.Nav, "true"), o = "false", i = (n.sel, "aria-expanded"),
                        a = t(this), s = a.closest(".has-children"), c = s.children("ul"), l = 0;
                    switch ((s.hasClass("lvl-1") || s.hasClass("level-1")) && (l = 2), (s.hasClass("lvl-2") || s.hasClass("level-2")) && (l = 3), a.attr(i)) {
                        case r:
                            a.attr(i, o).children("span").text(n._innerText[n.lang][o]).parent().find("[aria-expanded='true']").attr(i, o).children("span").text(n._innerText[n.lang][o]), c.slideUp("slow", Function.prototype);
                            break;
                        case o:
                            var u = s.siblings(".has-children"),
                                d = u.children(".nav-item-title").children("button[aria-expanded='true']"),
                                p = u.children("ul");
                            d.attr(i, o).children("span").text(n._innerText[n.lang][o]), p.slideUp("slow"), a.attr(i, r).children("span").text(n._innerText[n.lang].true), s.find(".lvl-" + l + ", .level-" + l).show(), c.slideDown("slow")
                    }
                },
                clickSection: function (e) {
                    var n = NCI.Buttons.toggle, r = window.innerWidth || t(window).width(), o = "true", i = "false",
                        a = (n.sel, "aria-expanded"), s = t(this), c = s.closest(".has-children"), l = c.children("ul");
                    switch ((c.hasClass("lvl-1") || c.hasClass("level-1")) && 2, (c.hasClass("lvl-2") || c.hasClass("level-2")) && 3, s.attr(a)) {
                        case o:
                            s.attr(a, i).children("span").text(n._innerText[n.lang][i]).parent().find("[aria-expanded='true']").attr(a, i).children("span").text(n._innerText[n.lang][i]), l.slideUp("slow", Function.prototype);
                            break;
                        case i:
                            var u = c.siblings(".has-children"),
                                d = u.children("div").children("button[aria-expanded='true']"), p = u.children("ul");
                            d.attr(a, i).children("span").text(n._innerText[n.lang][i]), r <= 1024 ? p.slideUp("slow", Function.prototype) : (p.not(".section-nav .contains-current > ul").slideUp("slow", Function.prototype), p.filter(".section-nav .contains-current > ul").css("display", "none")), s.attr(a, o).children("span").text(n._innerText[n.lang].true), l.slideDown("slow", Function.prototype)
                    }
                }
            }
        }.call(t, n, t, e)) || (e.exports = r)
    }, function (e, t, n) {
        var r;
        void 0 === (r = function (e) {
            var t = n(0);
            return n(100), {
                movingClass: "nav-moving",
                movingTimeout: setTimeout(function () {
                }),
                openClass: "nav-open",
                openPanelClass: "open-panel",
                mobile: "#mega-nav > .nav-menu",
                mega: "#mega-nav",
                hasChildren: ".has-children",
                $mobile: t(),
                $mega: t(),
                $openPanelBtn: t(),
                $hasChildren: t(),
                init: function () {
                    var e = NCI.Nav;
                    e.$mobile = t(e.mobile), e.$mega = t(e.mega), e.$openPanelBtn = t("." + e.openPanelClass), e.$openPanelBtn.click(e.toggleMobileMenu), e.$hasChildren = t(e.hasChildren), t(window).on("load resize", e.resize), t("#content, header, footer, .headroom-area").click(e.close), t(window).scroll(function (e) {
                        NCI.Nav.isOpen() && NCI.Nav.$mega.offset({top: t(".fixedtotop").offset().top, left: "0px"})
                    });
                    var n = NCI.Buttons.toggle;
                    n.createFor(e.$mega.find(".has-children > div")).on("click", n.clickMega), e.$mega.find(".current-page > div > " + n.sel + ", .contains-current > div > " + n.sel).attr("aria-expanded", "true").children("span").text(n._innerText[n.lang].true), e.Section.init();
                    var r = e.$mega.find("[class*=border-container]");
                    r.length > 0 && r.each(function (e) {
                        var n = [], r = t(this);
                        r.siblings().each(function (e) {
                            n.push(t(this).outerHeight(!0))
                        }), n.push(r.outerHeight(!0)), r.height(Math.max.apply(null, n))
                    })
                },
                isOpen: function () {
                    return t("html").hasClass(NCI.Nav.openClass)
                },
                open: function () {
                    var e = NCI.Nav;
                    e.isOpen() || (clearTimeout(e.movingTimeout), e.$mobile.attr("aria-hidden", "false"), t("html").addClass(e.movingClass).addClass(e.openClass), e.$mobile.find(":tabbable:first").focus(), e.$mega.offset({
                        top: t(".fixedtotop").offset().top,
                        left: "0px"
                    }), t(".fixedtotop.scroll-to-fixed-fixed").css("left", "80%"), e.movingTimeout = setTimeout(function () {
                        t("html").removeClass(e.movingClass)
                    }, 500), t("#page").swipe({
                        swipeLeft: function (e, t, n, r, o, i) {
                            this.close()
                        }.bind(e), threshold: 10, fallbackToMouseEvents: !1
                    }), t(".mobile-menu-bar").children().not(e.$openPanelBtn).each(function (e, n) {
                        var r = t(n);
                        r.data("NCI-search-originaltabindex", r.attr("tabindex") || null), r.prop("tabindex", -1)
                    }), e.$mega.on("keydown.NCI.Nav", function (t) {
                        e.keyDownHandler(t)
                    }))
                },
                close: function () {
                    var e = NCI.Nav;
                    e.isOpen() && (clearTimeout(e.movingTimeout), e.$mega.off("keydown.NCI.Nav"), e.$mobile.attr("aria-hidden", "true"), t("html").addClass(e.movingClass).removeClass(e.openClass), t(".mobile-menu-bar").children().not(e.$openPanelBtn).each(function (e, n) {
                        var r = t(n);
                        r.attr("tabindex", r.data("NCI-search-originaltabindex"))
                    }), e.$openPanelBtn.focus(), t(".fixedtotop.scroll-to-fixed-fixed").css("left", "0px"), e.movingTimeout = setTimeout(function () {
                        t("html").removeClass(e.movingClass), e.$mega.removeAttr("style")
                    }, 500), t("#page").swipe("destroy"))
                },
                keyDownHandler: function (e) {
                    var n = NCI.Nav;
                    (e.keyCode === t.ui.keyCode.ESCAPE || e.keyCode === t.ui.keyCode.TAB && (n.$mega.find(":tabbable:first").is(e.target) && e.shiftKey || n.$mega.find(":tabbable:last").is(e.target) && !e.shiftKey)) && (n.close(), setTimeout(function () {
                        n.$openPanelBtn.focus()
                    }, 0))
                },
                toggleMobileMenu: function () {
                    var e = NCI.Nav;
                    e.isOpen() ? e.close() : e.open()
                },
                resize: function () {
                    NCI.Nav.isOpen()
                },
                Section: n(101)
            }
        }.call(t, n, t, e)) || (e.exports = r)
    }, function (e, t, n) {
        var r, o, i, a;
        /*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
        a = function (e) {
            "use strict";

            function t(t) {
                return !t || void 0 !== t.allowPageScroll || void 0 === t.swipe && void 0 === t.swipeStatus || (t.allowPageScroll = c), void 0 !== t.click && void 0 === t.tap && (t.tap = t.click), t || (t = {}), t = e.extend({}, e.fn.swipe.defaults, t), this.each(function () {
                    var D = e(this), k = D.data(E);
                    k || (k = new function (t, D) {
                        function k(t) {
                            if (!(!0 === Te.data(E + "_intouch") || e(t.target).closest(D.excludedElements, Te).length > 0)) {
                                var a = t.originalEvent ? t.originalEvent : t;
                                if (!a.pointerType || "mouse" != a.pointerType || 0 != D.fallbackToMouseEvents) {
                                    var s, c = a.touches, l = c ? c[0] : a;
                                    return xe = y, c ? Se = c.length : !1 !== D.preventDefaultEvents && t.preventDefault(), pe = 0, fe = null, he = null, we = null, ve = 0, me = 0, ge = 0, be = 1, ye = 0, (u = {})[n] = te(n), u[r] = te(r), u[o] = te(o), u[i] = te(i), Ce = u, X(), Q(0, l), !c || Se === D.fingers || D.fingers === g || F() ? (Ee = ie(), 2 == Se && (Q(1, c[1]), me = ge = re(_e[0].start, _e[1].start)), (D.swipeStatus || D.pinchStatus) && (s = R(a, xe))) : s = !1, !1 === s ? (R(a, xe = T), s) : (D.hold && (Pe = setTimeout(e.proxy(function () {
                                        Te.trigger("hold", [a.target]), D.hold && (s = D.hold.call(Te, a, a.target))
                                    }, this), D.longTapThreshold)), Y(!0), null)
                                }
                            }
                            var u
                        }

                        function O(t) {
                            var u, d, p, f, h = t.originalEvent ? t.originalEvent : t;
                            if (xe !== C && xe !== T && !K()) {
                                var b, y = h.touches, x = y ? y[0] : h, S = Z(x);
                                if (De = ie(), y && (Se = y.length), D.hold && clearTimeout(Pe), xe = w, 2 == Se && (0 == me ? (Q(1, y[1]), me = ge = re(_e[0].start, _e[1].start)) : (Z(y[1]), ge = re(_e[0].end, _e[1].end), _e[0].end, _e[1].end, we = be < 1 ? s : a), be = (ge / me * 1).toFixed(2), ye = Math.abs(me - ge)), Se === D.fingers || D.fingers === g || !y || F()) {
                                    if (fe = oe(S.start, S.end), he = oe(S.last, S.end), function (e, t) {
                                        if (!1 !== D.preventDefaultEvents) if (D.allowPageScroll === c) e.preventDefault(); else {
                                            var a = D.allowPageScroll === l;
                                            switch (t) {
                                                case n:
                                                    (D.swipeLeft && a || !a && D.allowPageScroll != v) && e.preventDefault();
                                                    break;
                                                case r:
                                                    (D.swipeRight && a || !a && D.allowPageScroll != v) && e.preventDefault();
                                                    break;
                                                case o:
                                                    (D.swipeUp && a || !a && D.allowPageScroll != m) && e.preventDefault();
                                                    break;
                                                case i:
                                                    (D.swipeDown && a || !a && D.allowPageScroll != m) && e.preventDefault()
                                            }
                                        }
                                    }(t, he), p = S.start, f = S.end, pe = Math.round(Math.sqrt(Math.pow(f.x - p.x, 2) + Math.pow(f.y - p.y, 2))), ve = ne(), function (e, t) {
                                        e != c && (t = Math.max(t, ee(e)), Ce[e].distance = t)
                                    }(fe, pe), b = R(h, xe), !D.triggerOnTouchEnd || D.triggerOnTouchLeave) {
                                        var _ = !0;
                                        if (D.triggerOnTouchLeave) {
                                            var E = {
                                                left: (d = (u = e(u = this)).offset()).left,
                                                right: d.left + u.outerWidth(),
                                                top: d.top,
                                                bottom: d.top + u.outerHeight()
                                            };
                                            _ = function (e, t) {
                                                return e.x > t.left && e.x < t.right && e.y > t.top && e.y < t.bottom
                                            }(S.end, E)
                                        }
                                        !D.triggerOnTouchEnd && _ ? xe = L(w) : D.triggerOnTouchLeave && !_ && (xe = L(C)), xe != T && xe != C || R(h, xe)
                                    }
                                } else R(h, xe = T);
                                !1 === b && R(h, xe = T)
                            }
                        }

                        function N(e) {
                            var t = e.originalEvent ? e.originalEvent : e, n = t.touches;
                            if (n) {
                                if (n.length && !K()) return function (e) {
                                    ke = ie(), Oe = e.touches.length + 1
                                }(t), !0;
                                if (n.length && K()) return !0
                            }
                            return K() && (Se = Oe), De = ie(), ve = ne(), U() || !M() ? R(t, xe = T) : D.triggerOnTouchEnd || !1 === D.triggerOnTouchEnd && xe === w ? (!1 !== D.preventDefaultEvents && !1 !== e.cancelable && e.preventDefault(), R(t, xe = C)) : !D.triggerOnTouchEnd && J() ? $(t, xe = C, p) : xe === w && R(t, xe = T), Y(!1), null
                        }

                        function I() {
                            Se = 0, De = 0, Ee = 0, me = 0, ge = 0, be = 1, X(), Y(!1)
                        }

                        function P(e) {
                            var t = e.originalEvent ? e.originalEvent : e;
                            D.triggerOnTouchLeave && (xe = L(C), R(t, xe))
                        }

                        function A() {
                            Te.unbind(se, k), Te.unbind(de, I), Te.unbind(ce, O), Te.unbind(le, N), ue && Te.unbind(ue, P), Y(!1)
                        }

                        function L(e) {
                            var t = e, n = j(), r = M(), o = U();
                            return !n || o ? t = T : !r || e != w || D.triggerOnTouchEnd && !D.triggerOnTouchLeave ? !r && e == C && D.triggerOnTouchLeave && (t = T) : t = C, t
                        }

                        function R(e, t) {
                            var n, r = e.touches;
                            return (!(!H() || !q()) || q()) && (n = $(e, t, u)), (!(!B() || !F()) || F()) && !1 !== n && (n = $(e, t, d)), G() && V() && !1 !== n ? n = $(e, t, f) : ve > D.longTapThreshold && pe < b && D.longTap && !1 !== n ? n = $(e, t, h) : !(1 !== Se && x || !(isNaN(pe) || pe < D.threshold) || !J()) && !1 !== n && (n = $(e, t, p)), t === T && I(), t === C && (r && r.length || I()), n
                        }

                        function $(t, c, l) {
                            var v;
                            if (l == u) {
                                if (Te.trigger("swipeStatus", [c, fe || null, pe || 0, ve || 0, Se, _e, he]), D.swipeStatus && !1 === (v = D.swipeStatus.call(Te, t, c, fe || null, pe || 0, ve || 0, Se, _e, he))) return !1;
                                if (c == C && H()) {
                                    if (clearTimeout(Ie), clearTimeout(Pe), Te.trigger("swipe", [fe, pe, ve, Se, _e, he]), D.swipe && !1 === (v = D.swipe.call(Te, t, fe, pe, ve, Se, _e, he))) return !1;
                                    switch (fe) {
                                        case n:
                                            Te.trigger("swipeLeft", [fe, pe, ve, Se, _e, he]), D.swipeLeft && (v = D.swipeLeft.call(Te, t, fe, pe, ve, Se, _e, he));
                                            break;
                                        case r:
                                            Te.trigger("swipeRight", [fe, pe, ve, Se, _e, he]), D.swipeRight && (v = D.swipeRight.call(Te, t, fe, pe, ve, Se, _e, he));
                                            break;
                                        case o:
                                            Te.trigger("swipeUp", [fe, pe, ve, Se, _e, he]), D.swipeUp && (v = D.swipeUp.call(Te, t, fe, pe, ve, Se, _e, he));
                                            break;
                                        case i:
                                            Te.trigger("swipeDown", [fe, pe, ve, Se, _e, he]), D.swipeDown && (v = D.swipeDown.call(Te, t, fe, pe, ve, Se, _e, he))
                                    }
                                }
                            }
                            if (l == d) {
                                if (Te.trigger("pinchStatus", [c, we || null, ye || 0, ve || 0, Se, be, _e]), D.pinchStatus && !1 === (v = D.pinchStatus.call(Te, t, c, we || null, ye || 0, ve || 0, Se, be, _e))) return !1;
                                if (c == C && B()) switch (we) {
                                    case a:
                                        Te.trigger("pinchIn", [we || null, ye || 0, ve || 0, Se, be, _e]), D.pinchIn && (v = D.pinchIn.call(Te, t, we || null, ye || 0, ve || 0, Se, be, _e));
                                        break;
                                    case s:
                                        Te.trigger("pinchOut", [we || null, ye || 0, ve || 0, Se, be, _e]), D.pinchOut && (v = D.pinchOut.call(Te, t, we || null, ye || 0, ve || 0, Se, be, _e))
                                }
                            }
                            return l == p ? c !== T && c !== C || (clearTimeout(Ie), clearTimeout(Pe), V() && !G() ? (Ne = ie(), Ie = setTimeout(e.proxy(function () {
                                Ne = null, Te.trigger("tap", [t.target]), D.tap && (v = D.tap.call(Te, t, t.target))
                            }, this), D.doubleTapThreshold)) : (Ne = null, Te.trigger("tap", [t.target]), D.tap && (v = D.tap.call(Te, t, t.target)))) : l == f ? c !== T && c !== C || (clearTimeout(Ie), clearTimeout(Pe), Ne = null, Te.trigger("doubletap", [t.target]), D.doubleTap && (v = D.doubleTap.call(Te, t, t.target))) : l == h && (c !== T && c !== C || (clearTimeout(Ie), Ne = null, Te.trigger("longtap", [t.target]), D.longTap && (v = D.longTap.call(Te, t, t.target)))), v
                        }

                        function M() {
                            var e = !0;
                            return null !== D.threshold && (e = pe >= D.threshold), e
                        }

                        function U() {
                            var e = !1;
                            return null !== D.cancelThreshold && null !== fe && (e = ee(fe) - pe >= D.cancelThreshold), e
                        }

                        function j() {
                            return !(D.maxTimeThreshold && ve >= D.maxTimeThreshold)
                        }

                        function B() {
                            var e = z(), t = W(), n = null === D.pinchThreshold || ye >= D.pinchThreshold;
                            return e && t && n
                        }

                        function F() {
                            return !!(D.pinchStatus || D.pinchIn || D.pinchOut)
                        }

                        function H() {
                            var e = j(), t = M(), n = z(), r = W(), o = U(), i = !o && r && n && t && e;
                            return i
                        }

                        function q() {
                            return !!(D.swipe || D.swipeStatus || D.swipeLeft || D.swipeRight || D.swipeUp || D.swipeDown)
                        }

                        function z() {
                            return Se === D.fingers || D.fingers === g || !x
                        }

                        function W() {
                            return 0 !== _e[0].end.x
                        }

                        function J() {
                            return !!D.tap
                        }

                        function V() {
                            return !!D.doubleTap
                        }

                        function G() {
                            if (null == Ne) return !1;
                            var e = ie();
                            return V() && e - Ne <= D.doubleTapThreshold
                        }

                        function X() {
                            ke = 0, Oe = 0
                        }

                        function K() {
                            var e = !1;
                            if (ke) {
                                var t = ie() - ke;
                                t <= D.fingerReleaseThreshold && (e = !0)
                            }
                            return e
                        }

                        function Y(e) {
                            Te && (!0 === e ? (Te.bind(ce, O), Te.bind(le, N), ue && Te.bind(ue, P)) : (Te.unbind(ce, O, !1), Te.unbind(le, N, !1), ue && Te.unbind(ue, P, !1)), Te.data(E + "_intouch", !0 === e))
                        }

                        function Q(e, t) {
                            var n = {start: {x: 0, y: 0}, last: {x: 0, y: 0}, end: {x: 0, y: 0}};
                            return n.start.x = n.last.x = n.end.x = t.pageX || t.clientX, n.start.y = n.last.y = n.end.y = t.pageY || t.clientY, _e[e] = n, n
                        }

                        function Z(e) {
                            var t = void 0 !== e.identifier ? e.identifier : 0, n = function (e) {
                                return _e[e] || null
                            }(t);
                            return null === n && (n = Q(t, e)), n.last.x = n.end.x, n.last.y = n.end.y, n.end.x = e.pageX || e.clientX, n.end.y = e.pageY || e.clientY, n
                        }

                        function ee(e) {
                            if (Ce[e]) return Ce[e].distance
                        }

                        function te(e) {
                            return {direction: e, distance: 0}
                        }

                        function ne() {
                            return De - Ee
                        }

                        function re(e, t) {
                            var n = Math.abs(e.x - t.x), r = Math.abs(e.y - t.y);
                            return Math.round(Math.sqrt(n * n + r * r))
                        }

                        function oe(e, t) {
                            if (s = t, (a = e).x == s.x && a.y == s.y) return c;
                            var a, s, l = function (e, t) {
                                var n = e.x - t.x, r = t.y - e.y, o = Math.atan2(r, n),
                                    i = Math.round(180 * o / Math.PI);
                                return i < 0 && (i = 360 - Math.abs(i)), i
                            }(e, t);
                            return l <= 45 && l >= 0 ? n : l <= 360 && l >= 315 ? n : l >= 135 && l <= 225 ? r : l > 45 && l < 135 ? i : o
                        }

                        function ie() {
                            var e = new Date;
                            return e.getTime()
                        }

                        var D = e.extend({}, D), ae = x || _ || !D.fallbackToMouseEvents,
                            se = ae ? _ ? S ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
                            ce = ae ? _ ? S ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
                            le = ae ? _ ? S ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
                            ue = ae ? _ ? "mouseleave" : null : "mouseleave",
                            de = _ ? S ? "MSPointerCancel" : "pointercancel" : "touchcancel", pe = 0, fe = null,
                            he = null, ve = 0, me = 0, ge = 0, be = 1, ye = 0, we = 0, Ce = null, Te = e(t),
                            xe = "start", Se = 0, _e = {}, Ee = 0, De = 0, ke = 0, Oe = 0, Ne = 0, Ie = null, Pe = null;
                        try {
                            Te.bind(se, k), Te.bind(de, I)
                        } catch (t) {
                            e.error("events not supported " + se + "," + de + " on jQuery.swipe")
                        }
                        this.enable = function () {
                            return this.disable(), Te.bind(se, k), Te.bind(de, I), Te
                        }, this.disable = function () {
                            return A(), Te
                        }, this.destroy = function () {
                            A(), Te.data(E, null), Te = null
                        }, this.option = function (t, n) {
                            if ("object" == typeof t) D = e.extend(D, t); else if (void 0 !== D[t]) {
                                if (void 0 === n) return D[t];
                                D[t] = n
                            } else {
                                if (!t) return D;
                                e.error("Option " + t + " does not exist on jQuery.swipe.options")
                            }
                            return null
                        }
                    }(this, t), D.data(E, k))
                })
            }

            var n = "left", r = "right", o = "up", i = "down", a = "in", s = "out", c = "none", l = "auto", u = "swipe",
                d = "pinch", p = "tap", f = "doubletap", h = "longtap", v = "horizontal", m = "vertical", g = "all",
                b = 10, y = "start", w = "move", C = "end", T = "cancel", x = "ontouchstart" in window,
                S = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !x,
                _ = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !x, E = "TouchSwipe";
            e.fn.swipe = function (n) {
                var r = e(this), o = r.data(E);
                if (o && "string" == typeof n) {
                    if (o[n]) return o[n].apply(o, Array.prototype.slice.call(arguments, 1));
                    e.error("Method " + n + " does not exist on jQuery.swipe")
                } else if (o && "object" == typeof n) o.option.apply(o, arguments); else if (!(o || "object" != typeof n && n)) return t.apply(this, arguments);
                return r
            }, e.fn.swipe.version = "1.6.18", e.fn.swipe.defaults = {
                fingers: 1,
                threshold: 75,
                cancelThreshold: null,
                pinchThreshold: 20,
                maxTimeThreshold: null,
                fingerReleaseThreshold: 250,
                longTapThreshold: 500,
                doubleTapThreshold: 200,
                swipe: null,
                swipeLeft: null,
                swipeRight: null,
                swipeUp: null,
                swipeDown: null,
                swipeStatus: null,
                pinchIn: null,
                pinchOut: null,
                pinchStatus: null,
                click: null,
                tap: null,
                doubleTap: null,
                longTap: null,
                hold: null,
                triggerOnTouchEnd: !0,
                triggerOnTouchLeave: !1,
                allowPageScroll: "auto",
                fallbackToMouseEvents: !0,
                excludedElements: ".noSwipe",
                preventDefaultEvents: !0
            }, e.fn.swipe.phases = {
                PHASE_START: y,
                PHASE_MOVE: w,
                PHASE_END: C,
                PHASE_CANCEL: T
            }, e.fn.swipe.directions = {
                LEFT: n,
                RIGHT: r,
                UP: o,
                DOWN: i,
                IN: a,
                OUT: s
            }, e.fn.swipe.pageScroll = {NONE: c, HORIZONTAL: v, VERTICAL: m, AUTO: l}, e.fn.swipe.fingers = {
                ONE: 1,
                TWO: 2,
                THREE: 3,
                FOUR: 4,
                FIVE: 5,
                ALL: g
            }
        }, n(34) && n(34).jQuery ? (o = [n(0)], void 0 === (i = "function" == typeof(r = a) ? r.apply(t, o) : r) || (e.exports = i)) : a(void 0 !== e && e.exports ? n(0) : jQuery)
    }, function (e, t, n) {
        var r;
        void 0 === (r = function (e) {
            var t = n(0);
            return {
                sel: ".section-nav",
                selWithChildren: ".section-nav .has-children",
                idOpenerButton: "section-menu-button",
                openerText: {en: "Section Menu", es: "Menú de secciones"},
                $section: t(),
                $withChildren: t(),
                $openerButton: t(),
                init: function () {
                    var e = t("html").attr("lang") || "en", n = NCI.Nav.Section, r = NCI.Buttons.toggle;
                    if (n.$section = t(n.sel), n.$section.length > 0) {
                        n.$openerButton = t("<a>").attr("id", n.idOpenerButton).attr("href", "#").text(n.openerText[e]).on("click", n.onOpenerClick).insertAfter(".fixedtotop"), t(".contentzone").addClass("has-section-nav"), n.$withChildren = t(n.selWithChildren + "> div"), r.createFor(n.$withChildren.not(".level-0 > div")).on("click", r.clickSection), n.$withChildren.parent("li").find("div.current-page > " + r.sel + ", .contains-current > div > " + r.sel).attr("aria-expanded", "true").children("span").text(r._innerText[r.lang].true);
                        var o = window.innerWidth || t(window).width(), i = o;
                        t(window).resize(function () {
                            o = window.innerWidth || t(window).width(), i > 1024 && o <= 1024 ? n.$section.hide() : i <= 1024 && o > 1024 && (t("#overlay").remove(), n.$section.show(), n.$section.removeClass("open"), n.$openerButton.removeClass("open")), i = o
                        }).trigger("resize")
                    }
                },
                onOpenerClick: function (e) {
                    e.preventDefault();
                    var n = NCI.Nav.Section;
                    n.$section.slideToggle(200, function () {
                        n.$openerButton.toggleClass("open", t(this).is(":visible")), n.$section.toggleClass("open", t(this).is(":visible")), n.$section.is(":visible") ? (t("#content").append('<div id="overlay"></div>'), t("#overlay").click(n.onOpenerClick)) : t("#overlay").remove()
                    })
                }
            }
        }.call(t, n, t, e)) || (e.exports = r)
    }, function (e, t, n) {
        var r;
        void 0 === (r = function (e) {
            var t = n(0);
            return {
                init: function () {
                    this.FontResizer.init(), this.Print.init()
                }, Print: {
                    init: function () {
                        t(".po-print a").click(this.click)
                    }, click: function (e) {
                        e.preventDefault(), window.print()
                    }
                }, FontResizer: n(103)
            }
        }.call(t, n, t, e)) || (e.exports = r)
    }, function (e, t, n) {
        var r;
        void 0 === (r = function (e) {
            var t = n(0), r = {
                selector: ".po-font-resize a",
                $content: t(),
                originalSize: 0,
                currentSize: 0,
                multiplier: 1.2,
                init: function () {
                    this.originalSize = parseFloat(t("body").css("font-size"), 10), this.$content = t(".resize-content"), t(this.selector).click(this.click)
                },
                click: function (e) {
                    e.preventDefault();
                    var t = r;
                    t.currentSize = parseFloat(t.$content.css("font-size"), 10);
                    var n = t.currentSize * t.multiplier;
                    return n = n > 30 ? t.originalSize : n, t.$content.css("font-size", n + "px"), !1
                }
            };
            return r
        }.call(t, n, t, e)) || (e.exports = r)
    }, function (e, t, n) {
        var r;
        void 0 === (r = function (e) {
            var t = n(0);
            return n(105), {
                classname: "searching",
                searchBtnClass: "nav-search",
                $form: t(),
                $input: t(),
                $searchBtn: t(),
                init: function () {
                    var e = NCI.Search;
                    e.$form = t("#siteSearchForm"), e.$input = t("#swKeyword"), e.$searchBtn = t("." + e.searchBtnClass), e.$searchBtn.click(e.mobile.show)
                },
                mobile: {
                    clear: function () {
                        NCI.Search.$input.val("")
                    }, show: function (e) {
                        var n = NCI.Search, r = NCI.Nav;
                        t("#nvcgSlMainNav").addClass(n.classname), n.$input.focus(), 0 === t("#searchclear").length && t("#sitesearch").after("<button id='searchclear' onclick='NCI.Search.mobile.clear();' type='reset'></button>"), r.$openPanelBtn.unbind("click").click(n.mobile.hide), t(".mobile-menu-bar").children().not(r.$openPanelBtn).each(function (e, n) {
                            var r = t(n);
                            r.data("NCI-search-originaltabindex", n.tabIndex || null), r.prop("tabindex", -1)
                        }), n.$form.add(r.$openPanelBtn).on("keydown.NCI.Search", function (e) {
                            n.mobile.keyDownHandler(e)
                        })
                    }, hide: function (e) {
                        var n = NCI.Search, r = NCI.Nav;
                        n.$form.add(r.$openPanelBtn).off("keydown.NCI.Search"), t(".mobile-menu-bar").children().not(r.$openPanelBtn).each(function (e, n) {
                            var r = t(n);
                            r.attr("tabindex", r.data("NCI-search-originaltabindex"))
                        }), n.$searchBtn.focus(), t("#nvcgSlMainNav").removeClass(n.classname), r.$openPanelBtn.unbind("click").click(r.toggleMobileMenu)
                    }, keyDownHandler: function (e) {
                        var n = NCI.Nav, r = NCI.Search;
                        (e.keyCode === t.ui.keyCode.ESCAPE || e.keyCode === t.ui.keyCode.TAB && (n.$openPanelBtn.is(e.target) && e.shiftKey || r.$form.find(":tabbable:last").is(e.target) && !e.shiftKey)) && (r.mobile.hide(), setTimeout(function () {
                            r.$searchBtn.focus()
                        }, 0))
                    }
                }
            }
        }.call(t, n, t, e)) || (e.exports = r)
    }, function (e, t, n) {
        var r;
        void 0 === (r = function (e) {
            var t = n(0);
            t(function () {
                var e = t("#resultForm").find(".pagination a");
                e[0] && e.each(function (e, n) {
                    var r = t(this), o = r.attr("href");
                    if (o.match("javascript")) {
                        r.attr("href", "#");
                        var i = o.replace("javascript:page('", "").replace("');", "");
                        r.click(function (e) {
                            e.preventDefault(), document.searchParamForm.selectedPage.value = i, document.searchParamForm.action = "/about-cancer/causes-prevention/genetics/directory/results", document.searchParamForm.submit()
                        })
                    }
                })
            })
        }.call(t, n, t, e)) || (e.exports = r)
    }, , function (e, t, n) {
        var r;
        void 0 === (r = function (e) {
            var t = n(0);
            return {
                makeOutline: function (e) {
                    var t, n, r, o = "^H[1-6]|HGROUP$", i = "^ARTICLE|ASIDE|NAV|SECTION$",
                        a = "^BLOCKQUOTE|BODY|DETAILS|DIALOG|FIELDSET|FIGURE|TD$";

                    function s(e) {
                        this.node = e, this.heading = void 0, this.sections = [], this.container = void 0
                    }

                    function c(e, t) {
                        this.node = e.node, this.sections = [], this.append(t)
                    }

                    function l(e, t, n) {
                        this.node = e, this.outline = void 0, this.parentSection = void 0
                    }

                    function u(e) {
                        return e instanceof Element && new RegExp(o, "i").test(e.tagName)
                    }

                    function d(e) {
                        return e instanceof Element && new RegExp(a, "i").test(e.tagName)
                    }

                    function p(e) {
                        return e instanceof Element && new RegExp(i, "i").test(e.tagName)
                    }

                    function f(e) {
                        return e instanceof Element && (e.hasAttribute("hidden") || "true" === e.getAttribute("aria-hidden") || e.hasAttribute("data-outline-hidden"))
                    }

                    function h(e) {
                        if (u(e)) {
                            var t = e.tagName.toUpperCase();
                            if ("HGROUP" !== t) return -parseInt(t.substr(1));
                            for (var n = 1; n <= 6; n++) {
                                var r = e.getElementsByTagName("H" + n);
                                if (r.length) return -parseInt(r[0].tagName.toUpperCase().substr(1))
                            }
                            return -1
                        }
                        if (!e.implied) throw new TypeError(e + " must be a Heading.")
                    }

                    function v() {
                        return r.length ? r[r.length - 1].node : void 0
                    }

                    function m(e) {
                        var o = v();
                        if (!u(o) && !f(o)) if (f(e)) r.push({node: e}); else {
                            if (p(e)) return null !== t && (n.heading || n.setHeading({implied: !0}), r.push(t)), t = new l(e), n = new s(e), void t.setOutline(new c(t.node, n));
                            if (d(e)) return null !== t && r.push(t), (t = new l(e)).setParentSection(n), n = new s(e), void t.setOutline(new c(t.node, n));
                            if (u(e)) {
                                var i;
                                if (n.heading) if (h(e) >= h(t.outline.getLastSection().heading) || t.outline.getLastSection().heading.implied) i = new s(e), t.outline.append(i), (n = i).setHeading(e); else for (var a = n; ;) {
                                    if (h(e) < h(a.heading)) {
                                        i = new s(e), a.append(i), (n = i).setHeading(e);
                                        break
                                    }
                                    a = a.container
                                } else n.setHeading(e);
                                r.push({node: e})
                            } else ;
                        }
                    }

                    function g(e) {
                        var o = v();
                        if (o === e) r.pop(); else if (u(o) || f(o)) ; else if (p(e) && r.length > 0) {
                            n.heading || n.setHeading({implied: !0});
                            var i = t;
                            t = r.pop(), (n = t.outline.getLastSection()).append(i.outline.sections)
                        } else d(e) && r.length > 0 ? (n.heading || n.setHeading({implied: !0}), n = t.parentSection, t = r.pop()) : (p(e) || d(e)) && (n.heading || n.setHeading({implied: !0}))
                    }

                    return s.prototype.setHeading = function (e) {
                        if (!(e instanceof Element || e.implied)) throw new TypeError(e + " must be an HTML element.");
                        this.heading = e
                    }, s.prototype.append = function (e) {
                        if (!e.length && e instanceof s) e.setContainer(this), this.sections.push(e); else {
                            if (!e.length) throw new TypeError(e + " must be a Section.");
                            for (var t = 0, n = e.length; t < n; t++) this.append(e[t])
                        }
                    }, s.prototype.setContainer = function (e) {
                        if (!(e instanceof s)) throw new TypeError(e + " must be a Section.");
                        this.container = e
                    }, c.prototype.append = function (e) {
                        if (!(e instanceof s)) throw new TypeError(e + " must be a Section.");
                        this.sections.push(e)
                    }, c.prototype.getLastSection = function () {
                        return this.sections[this.sections.length - 1]
                    }, l.prototype.setOutline = function (e) {
                        if (!(e instanceof c)) throw new TypeError(e + " must be an Outline.");
                        this.outline = e
                    }, l.prototype.setParentSection = function (e) {
                        if (!(e instanceof s)) throw new TypeError(e + " must be a Section.");
                        this.parentSection = e
                    }, function (e) {
                        if (p(e) || d(e)) return t = null, n = null, r = [], function (e, t, n) {
                            var r = e;
                            e:for (; r;) if (t(r), r.firstChild) r = r.firstChild; else for (; r;) if (n(r), r == e) r = null; else {
                                if (r.nextSibling) {
                                    r = r.nextSibling;
                                    continue e
                                }
                                r = r.parentNode
                            }
                        }(e, m, g), t.outline;
                        throw new TypeError(e + " must be a sectioning content element or a sectioning root element.")
                    }(e)
                }, parseOutline: function (e, n, r, o) {
                    var i, a, s, c, l = e.sections, u = l && l.length, d = NCI.page.parseOutline;
                    if (u > 0 && n <= r) {
                        s = t("<ul>");
                        for (var p = 0; p < u; p++) i = l[p].node, a = l[p].heading, o && (o.node && t(i).is(o.node.join(",")) || o.heading && t(a).is(o.heading.join(","))) || a.implied || (c = t("<li>").append(t("<a>").attr("href", "#" + (a.id || i.id || t(a).uniqueId().prop("id"))).html(a.innerHTML)), i.hasAttribute("data-display-excludedevice") && c.attr("data-display-excludedevice", i.getAttribute("data-display-excludedevice")), s.append(c), c.append(d(l[p], n + 1, r, o)));
                        if (s.children().length > 0) return s
                    }
                }, lang: 0 === document.documentElement.lang.indexOf("es") ? "es" : "en"
            }
        }.call(t, n, t, e)) || (e.exports = r)
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        });
        var r = function (e) {
            return new Promise(function (t, n) {
                var r = document.createElement("script");
                r.src = e, r.addEventListener("load", function () {
                    return t(r)
                }), r.addEventListener("error", n);
                var o = document.querySelector("script");
                o.parentNode.insertBefore(r, o)
            })
        }
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return i
        });
        var r = n(36), o = n(110);
        n.n(o);
        var i = function (e) {
            function t(n) {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), function (e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, e.call(this, n))
            }

            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), t.prototype.initializeLocalFields = function () {
                var e = this;
                this.$termSelect = $("#q"), this.$termSelect.ctssimpletermbox({
                    source: function (t, n) {
                        e.facade.getDiseasesForSimpleTypeAhead(t.term).then(function (e) {
                            n(e.map(function (e) {
                                return {term: e.name, id: e.codes.join("|")}
                            }))
                        }).catch(function (e) {
                            console.log(e), n([])
                        })
                    }
                })
            }, t.prototype.postValidationStep = function (e) {
                var t = this, n = !1;
                if (this.$termSelect && !1 === this.$termSelect.ctssimpletermbox("getSelection") && void 0 != this.$termSelect.val() && "" != this.$termSelect.val()) {
                    var r = this.$termSelect.val();
                    this.facade.getDiseasesForSimpleTypeAhead(r).then(function (o) {
                        o.length > 0 && 0 == t.CalculateLevenshtein(r, o[0].name) && (t.$termSelect.ctssimpletermbox("setSelection", o[0].codes.join("|")), n = !0), e(n)
                    }).catch(function (e) {
                        console.log(e)
                    })
                } else e(n)
            }, t.prototype.CalculateLevenshtein = function (e, t) {
                t += "", e = (e += "").toLowerCase(), t = t.toLowerCase();
                var n = [], r = void 0, o = void 0, i = Math.min;
                if (!e || !t) return (t || e).length;
                for (r = 0; r <= t.length; n[r] = [r++]) ;
                for (o = 0; o <= e.length; n[0][o] = o++) ;
                for (r = 1; r <= t.length; r++) for (o = 1; o <= e.length; o++) n[r][o] = t.charAt(r - 1) == e.charAt(o - 1) ? n[r - 1][o - 1] : n[r][o] = i(n[r - 1][o - 1] + 1, i(n[r][o - 1] + 1, n[r - 1][o] + 1));
                return n[t.length][e.length]
            }, t
        }(r.a)
    }, function (e, t, n) {
        var r, o, i, a;
        /*!
 * jQuery UI Widget-factory plugin for autosuggest text boxes that allow a user to type
 * ahead, and select a single item from a list of items.
 * Author: @bryanp
 */
        /*!
 * jQuery UI Widget-factory plugin for autosuggest text boxes that allow a user to type
 * ahead, and select a single item from a list of items.
 * Author: @bryanp
 */
        a = function (e) {
            return e.widget("nci.ctssimpletermbox", {
                options: {source: !1, buttonText: "Clear Selection"},
                getText: function () {
                    return e(this.element).val()
                },
                getSelection: function () {
                    e(this.element);
                    var t = this.$hiddenInput.val();
                    return "" != t && t
                },
                setSelection: function (t) {
                    var n = e(this.element), r = this;
                    r.$hiddenInput.val(t), r.$unselectBtn ? r.$unselectBtn.show() : (r.$unselectBtn = e('<button class="remove-suggestion" type="button">' + r.options.buttonText + "</button>"), n.after(r.$unselectBtn), r.$unselectBtn.click(function () {
                        r.$hiddenInput.val(""), n.val("").attr("disabled", !1).focus(), r.$unselectBtn.hide()
                    })), n.attr("disabled", !0)
                },
                _create: function () {
                    var t = e(this.element), n = this;
                    n.$hiddenInput = e('<input type="hidden" id="t" name="t" />'), t.after(n.$hiddenInput), n.$hiddenInput.val(""), t.ctsautoselect({
                        source: n.options.source,
                        select: function (t, r) {
                            t.preventDefault(), t.stopPropagation(), e(this).val(r.item.item || r.item.term), n.setSelection(r.item.id)
                        },
                        close: function (e, n) {
                            e.originalEvent && "menuselect" === e.originalEvent.type && (t.removeClass("error").prev(".error-msg").css("visibility", "hidden"), t.next().focus())
                        }
                    })
                }
            })
        }, o = [n(0), n(2), n(21)], void 0 === (i = "function" == typeof(r = a) ? r.apply(t, o) : r) || (e.exports = i)
    }, , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
        var r, o;
        /*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
        !function (i) {
            if (void 0 === (o = "function" == typeof(r = i) ? r.call(t, n, t, e) : r) || (e.exports = o), !0, e.exports = i(), !!0) {
                var a = window.Cookies, s = window.Cookies = i();
                s.noConflict = function () {
                    return window.Cookies = a, s
                }
            }
        }(function () {
            function e() {
                for (var e = 0, t = {}; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) t[r] = n[r]
                }
                return t
            }

            return function t(n) {
                function r(t, o, i) {
                    var a;
                    if ("undefined" != typeof document) {
                        if (arguments.length > 1) {
                            if ("number" == typeof(i = e({path: "/"}, r.defaults, i)).expires) {
                                var s = new Date;
                                s.setMilliseconds(s.getMilliseconds() + 864e5 * i.expires), i.expires = s
                            }
                            i.expires = i.expires ? i.expires.toUTCString() : "";
                            try {
                                a = JSON.stringify(o), /^[\{\[]/.test(a) && (o = a)
                            } catch (e) {
                            }
                            o = n.write ? n.write(o, t) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                            var c = "";
                            for (var l in i) i[l] && (c += "; " + l, !0 !== i[l] && (c += "=" + i[l]));
                            return document.cookie = t + "=" + o + c
                        }
                        t || (a = {});
                        for (var u = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, p = 0; p < u.length; p++) {
                            var f = u[p].split("="), h = f.slice(1).join("=");
                            this.json || '"' !== h.charAt(0) || (h = h.slice(1, -1));
                            try {
                                var v = f[0].replace(d, decodeURIComponent);
                                if (h = n.read ? n.read(h, v) : n(h, v) || h.replace(d, decodeURIComponent), this.json) try {
                                    h = JSON.parse(h)
                                } catch (e) {
                                }
                                if (t === v) {
                                    a = h;
                                    break
                                }
                                t || (a[v] = h)
                            } catch (e) {
                            }
                        }
                        return a
                    }
                }

                return r.set = r, r.get = function (e) {
                    return r.call(r, e)
                }, r.getJSON = function () {
                    return r.apply({json: !0}, [].slice.call(arguments))
                }, r.defaults = {}, r.remove = function (t, n) {
                    r(t, "", e(n, {expires: -1}))
                }, r.withConverter = t, r
            }(function () {
            })
        })
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
        var r;
        void 0 === (r = function (e) {
            var t = n(0);
            n(95);
            var r = n(96), o = n(186), i = n(187), a = n(76), c = n(188), l = n(189), u = n(192), d = n(193),
                p = n(194).default, f = n(200).default;
            n(202), n(203), t(function () {
                i.init(), /^\/espanol\/?$/.test(location.pathname) && t("#mega-nav .contains-current").removeClass("contains-current"), r.Nav.init(), r.Search.init(), o.init(), r.PageOptions.init(), c.init(), l.init(), u.init(), a.makeAllAccordions(), t("article").each(function () {
                    var e = t(this);
                    if (!e.data("nci-outline")) {
                        var n = r.page.makeOutline(this);
                        e.data("nci-outline", n)
                    }
                }), t("article").length > 0 && r.buildOTP(), t("div.blog-post").each(function () {
                    t(this).find("a.comment-count").length < 1 && t(this).find("div.post-title h3").addClass("no-comments")
                }), d.init(), t('[data-prevent-enter="true"]').NCI_prevent_enter(), p(), t('html[lang="es"]').find("a.news-govdelivery, a.blogRSS").on("click", function () {
                    s.linkTrackVars = "prop4,prop5", s.prop4 = "GovDeliveryEsp", s.prop5 = "www.cancer.gov" + location.pathname.toLowerCase(), s.tl(this, "o", "GovDeliveryEsp")
                })
            }), t(window).on("load", function () {
                t("#content table:not(.no-auto-enlarge)").overflowEnlarge(), f()
            })
        }.call(t, n, t, e)) || (e.exports = r)
    }, function (e, t, n) {
        var r;
        void 0 === (r = function (e) {
            var t = n(0), r = !1;
            return {
                init: function () {
                    r || (!function () {
                        var e, n;
                        switch (t("html").attr("lang") || "en") {
                            case"es":
                                e = t('meta[name="espanol-linking-policy"]').prop("content"), n = "Notificación de salida";
                                break;
                            default:
                                e = t('meta[name="english-linking-policy"]').prop("content"), n = "Exit Disclaimer"
                        }
                        t("a[href]:not(:has(>img))").filter(function () {
                            return /^https?\:\/\/([a-zA-Z0-9\-]+\.)+/i.test(this.href) && !/^https?\:\/\/([a-zA-Z0-9\-]+\.)+gov/i.test(this.href) && "" !== this.href && 0 !== this.href.indexOf(location.protocol + "//" + location.hostname) && !t(this).hasClass("add_this_btn") && !t(this).hasClass("no-exit-notification")
                        }).after(t('<a class="icon-exit-notification" title="' + n + '" href="' + e + '"><span class="hidden">' + n + "</span></a>")), t(".feature-card a.icon-exit-notification").insertAfter('.feature-card a:not([href^="/"]):not([href*=".gov"]) div img'), t('.cgvcancertypehome .cthpCard div h3 + div > a:not([class="icon-exit-notification"])').wrapInner("<div class='cthp-card-image'></div>"), t(".cgvcancertypehome .cthpCard div div a.icon-exit-notification").first().insertAfter('.cgvcancertypehome .cthpCard div div > a:not([href^="/"]):not([href*=".gov"]) div img'), r = !0
                    }(), r = !0)
                }
            }
        }.call(t, n, t, e)) || (e.exports = r)
    }, function (e, t, n) {
        var r;
        void 0 === (r = function (e) {
            var t = n(0), r = !1;
            return {
                init: function () {
                    r || (t(window).scroll(function () {
                        t(this).scrollTop() > 600 ? t(".back-to-top").fadeIn(500, function () {
                            t(this).trigger("reveal")
                        }) : t(".back-to-top").fadeOut(500)
                    }), t(".back-to-top").click(function (e) {
                        e.preventDefault(), t(".headroom-area").addClass("frozen"), t("html, body").animate({scrollTop: 0}, 400, function () {
                            t(".headroom-area").removeClass("frozen")
                        })
                    }), r = !0, r = !0)
                }
            }
        }.call(t, n, t, e)) || (e.exports = r)
    }, function (e, t, n) {
        var r;
        void 0 === (r = function (e) {
            var t = n(0);
            return {
                init: function () {
                    t("[data-toggletables-section]").each(function () {
                        t(this).children("table").each(function (e) {
                            t(this).children("caption[data-hidden-on-js]").addClass("hidden"), t(this).attr("data-toggletables-tablenumber", e), 0 === e ? t(this).addClass("show") : t(this).addClass("hide")
                        }), t(this).find("dl > dd").first().addClass("active"), t(this).find("dl > dd").on("click", function () {
                            var e = t(this), n = e.index() - 1,
                                r = (e.parent("dl"), e.closest("[data-toggletables-section]").children("[data-toggletables-tablenumber=" + n + "]"));
                            r.removeClass("hide").addClass("show"), r.siblings("table").removeClass("show").addClass("hide"), e.siblings("dd").removeClass("active"), e.addClass("active")
                        })
                    })
                }
            }
        }.call(t, n, t, e)) || (e.exports = r)
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), n.d(t, "init", function () {
            return a
        });
        var r = n(190), o = function (e) {
            var t = e.dataset, n = t.videoId, o = t.videoTitle, i = document.createElement("div");
            i.classList.add("video-preview--container"), i.setAttribute("tabIndex", "0");
            var a = "https://img.youtube.com/vi/" + n + "/hqdefault.jpg", s = new Image;
            s.src = a, s.alt = o, s.classList.add("video-preview--preview-img"), i.appendChild(s);
            var c = document.createElement("div");
            c.innerHTML = '\n\t<svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">\n\t\t<path class="play-button--bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#212121" fill-opacity="0.8"></path>\n\t\t<path d="M 45,24 27,14 27,34" fill="#fff"></path>\n\t</svg>\n\t', c.classList.add("video-preview--play-button"), i.appendChild(c);
            var l = document.createElement("p"), u = document.createTextNode(o);
            l.appendChild(u), i.appendChild(l), e.appendChild(i);
            var d = function () {
                return function (e, t, n) {
                    var r = document.documentElement.lang || "en",
                        o = "https://www.youtube-nocookie.com/embed/" + t + "?rel=0" + ("es" === r ? "&hl=es" : "&hl=en") + "&showinfo=1&autoplay=1",
                        i = document.createElement("iframe");
                    i.setAttribute("frameborder", "0"), i.setAttribute("allowFullscreen", ""), i.setAttribute("src", o), i.setAttribute("title", n), i.setAttribute("alt", n), e.innerHTML = "", e.appendChild(i), i.focus()
                }(e, n, o)
            }, p = Object(r.c)({fn: d, keys: ["Enter", " "]});
            e.addEventListener("click", d, !1), e.addEventListener("keydown", p, !1)
        }, i = !1, a = function () {
            i || (Object(r.b)(".flex-video").filter(function (e) {
                return !Object(r.a)(e, "yt-carousel")
            }).forEach(function (e) {
                return o(e)
            }), i = !0)
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(35);
        n.d(t, "a", function () {
            return r.b
        }), n.d(t, "b", function () {
            return r.d
        });
        var o = n(191);
        n.d(t, "c", function () {
            return o.a
        });
        n(108)
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        });
        var r = function (e) {
            return function (t) {
                var n = e.fn, r = void 0 === n ? function () {
                    } : n, o = e.keys, i = void 0 === o ? [] : o, a = e.stopProp, s = void 0 === a || a, c = e.prevDef,
                    l = void 0 === c || c;
                if (i.includes(t.key)) return s && t.stopPropagation(), l && t.preventDefault(), r()
            }
        }
    }, function (e, t, n) {
        var r;
        void 0 === (r = function (e) {
            var t = n(0);
            return {
                init: function () {
                    t.ui.selectmenu.prototype._buttonEvents.keydown = function (e) {
                        var n = !0;
                        switch (e.keyCode) {
                            case t.ui.keyCode.TAB:
                            case t.ui.keyCode.ESCAPE:
                                this.close(e), n = !1;
                                break;
                            case t.ui.keyCode.ENTER:
                                this.isOpen && this._selectFocusedItem(e);
                                break;
                            case t.ui.keyCode.UP:
                                e.altKey ? this._toggle(e) : this._move("prev", e);
                                break;
                            case t.ui.keyCode.DOWN:
                                e.altKey ? this._toggle(e) : this._move("next", e);
                                break;
                            case t.ui.keyCode.SPACE:
                                this.isOpen ? this.menu.trigger(e) : this._toggle(e);
                                break;
                            case t.ui.keyCode.LEFT:
                                this._move("prev", e);
                                break;
                            case t.ui.keyCode.RIGHT:
                                this._move("next", e);
                                break;
                            case t.ui.keyCode.HOME:
                            case t.ui.keyCode.PAGE_UP:
                                this._move("first", e);
                                break;
                            case t.ui.keyCode.END:
                            case t.ui.keyCode.PAGE_DOWN:
                                this._move("last", e);
                                break;
                            default:
                                this.menu.trigger(e), n = !1
                        }
                        n && e.preventDefault()
                    }, t.ui.menu.prototype._keydown = function (e) {
                        var n, r, o, i, a = !0;
                        switch (e.keyCode) {
                            case t.ui.keyCode.PAGE_UP:
                                this.previousPage(e);
                                break;
                            case t.ui.keyCode.PAGE_DOWN:
                                this.nextPage(e);
                                break;
                            case t.ui.keyCode.HOME:
                                this._move("first", "first", e);
                                break;
                            case t.ui.keyCode.END:
                                this._move("last", "last", e);
                                break;
                            case t.ui.keyCode.UP:
                                this.previous(e);
                                break;
                            case t.ui.keyCode.DOWN:
                                this.next(e);
                                break;
                            case t.ui.keyCode.LEFT:
                                this.collapse(e);
                                break;
                            case t.ui.keyCode.RIGHT:
                                this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                                break;
                            case t.ui.keyCode.ESCAPE:
                                this.collapse(e);
                                break;
                            case t.ui.keyCode.ENTER:
                                this._activate(e);
                                break;
                            default:
                                a = !1, r = this.previousFilter || "", o = String.fromCharCode(e.keyCode), i = !1, clearTimeout(this.filterTimer), o === r ? i = !0 : o = r + o, n = this._filterMenuItems(o), (n = i && -1 !== n.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : n).length || (o = String.fromCharCode(e.keyCode), n = this._filterMenuItems(o)), n.length ? (this.focus(e, n), this.previousFilter = o, this.filterTimer = this._delay(function () {
                                    delete this.previousFilter
                                }, 1e3)) : delete this.previousFilter
                        }
                        a && e.preventDefault()
                    }, t.ui.selectmenu.prototype._setAria = function (e) {
                        var t = this.menuItems.eq(e.index).attr("id");
                        this.button.attr({"aria-activedescendant": t}), this.menu.attr("aria-activedescendant", t)
                    }, t("select:not([multiple]):not(.no-auto-jqueryui)").each(function () {
                        var e = t(this);
                        e.selectmenu({
                            change: function (e, t) {
                                t.item.element.change()
                            }, width: e.hasClass("fullwidth") ? "100%" : null
                        }).selectmenu("menuWidget").addClass("scrollable-y")
                    })
                }
            }
        }.call(t, n, t, e)) || (e.exports = r)
    }, function (e, t, n) {
        var r;
        void 0 === (r = function (e) {
            var t = n(0), r = n(4), o = 1e3, i = !1;

            function a() {
                t('a[href^="#cit"], a[href^="#r"]').filter(function () {
                    return /^#r\d+$|^#cit\/section_\d+.\d+$/.test(this.getAttribute("href"))
                }).each(function () {
                    var e, n, i, a = !1;

                    function s() {
                        e.parentNode && 11 !== e.parentNode.nodeType || (document.body.appendChild(e), a = !0), t(e).stop().animate({opacity: 1}, 100), clearTimeout(n)
                    }

                    function c() {
                        e && e.parentNode == document.body && (n = setTimeout(function () {
                            t(e).animate({opacity: 0}, 100, function () {
                                document.body.removeChild(e)
                            })
                        }, 100))
                    }

                    t(this).on("mouseenter.NCI.tooltip", function (l) {
                        var u = this;
                        n && clearTimeout(n), i && clearTimeout(i), i = setTimeout(function () {
                            var n = function (e) {
                                return e = (e = document.getElementById(e.getAttribute("href").replace(/^#cit\//, "#").replace(/^#/, ""))) && "LI" == e.nodeName && e
                            }(u);
                            if (!n) return;
                            if ((window.innerWidth || t(window).width()) <= r.breakpoints.medium) return;
                            if (!e) {
                                (e = document.createElement("ul")).className = "referencetooltip";
                                e.appendChild(n.cloneNode(!0));
                                e.appendChild(document.createElement("li")), t(e).on("mouseenter.NCI.tooltip", s).on("mouseleave.NCI.tooltip", c)
                            }
                            s();
                            var o = t(u).offset(), i = e.offsetHeight;
                            t(e).css({top: o.top - i, left: o.left - 7}), e.offsetHeight > i && (t(e).css({
                                left: "auto",
                                right: 0
                            }), e.lastChild.style.marginLeft = o.left - e.offsetLeft + "px");
                            a && (o.top < e.offsetHeight + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) + t(".fixedtotop").outerHeight() ? t(e).addClass("RTflipped").css({top: o.top + 12}) : "referencetooltip RTflipped" === e.className && t(e).removeClass("RTflipped"), a = !1)
                        }, o)
                    }).on("mouseleave.NCI.tooltip", function () {
                        clearTimeout(i), c()
                    }).on("click.NCI.tooltip", function () {
                        var e = t(this);
                        e.closest("figure.table.ui-dialog-content").dialog("close"), e.trigger("mouseleave.NCI.tooltip")
                    })
                })
            }

            return {
                init: function () {
                    i || (a(), i = !0)
                }
            }
        }.call(t, n, t, e)) || (e.exports = r)
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(0), o = (n.n(r), n(132)), i = n.n(o), a = n(195), s = n.n(a), c = n(196), l = n(199),
            u = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/i/am/not/a/palindrome/or/a/valid/path",
                    n = function (e, t) {
                        for (var n = 0; n < e.length; n++) if (t.match(e[n].path)) return e[n].settings;
                        return null
                    }(e, t);
                if (n && function (e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        if (r instanceof RegExp) {
                            if (e.match(r)) return !0
                        } else if ("string" == typeof r && e === r) return !0
                    }
                    return !1
                }(t, n.urls)) return n;
                return null
            }, d = function (e) {
                if (!e) return !1;
                var t = new Date;
                return s.a.localToEasternTime(t) > new Date(e)
            }, p = function (e) {
                var t, n, r = e.startDate, o = e.endDate, a = e.popupID,
                    c = (t = new Date, n = s.a.localToEasternTime(t), s.a.isBusinessHours(n) && s.a.dateIsWorkDay(n) && !s.a.isHoliday(n)),
                    l = d(r), u = !d(o), p = !function (e) {
                        return !!i.a.get(e + "-opt")
                    }(a);
                return c && l && u && p
            }, f = !1;
        t.default = function () {
            if (!f) {
                f = !0;
                var e = location.pathname.toLowerCase(), t = u(c.a, e), n = c.a.map(function (e) {
                    return e.settings.popupID
                });
                if (t) {
                    var r = p(t);
                    n.splice(n.indexOf(t.popupID), 1), r && ((window.location.href.indexOf("about-cancer/treatment/clinical-trials/disease") > -1 || window.location.href.indexOf("about-cancer/treatment/clinical-trials/intervention") > -1) && (t.popupDelaySeconds = 30), new l.a(t))
                }
                n.map(function (e) {
                    return i.a.remove(e + "-timer")
                })
            }
        }
    }, function (e, t, n) {
        var r;
        void 0 === (r = function (e) {
            function t(e) {
                var t = new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds()),
                    n = new Date(t.getTime());
                return !function (e) {
                    var t = new Date;
                    t.setUTCHours(7, 0, 0, 0), t.setUTCMonth(2), t.setUTCDate(1);
                    for (; 0 != t.getDay();) t.setUTCDate(t.getUTCDate() + 1);
                    t.setUTCDate(t.getUTCDate() + 7);
                    var n = new Date;
                    n.setUTCHours(6, 0, 0, 0), n.setUTCMonth(10), n.setUTCDate(1);
                    for (; 0 != n.getDay();) n.setUTCDate(n.getUTCDate() + 1);
                    var r = new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds()),
                        o = new Date(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds()),
                        i = new Date(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), n.getUTCHours(), n.getUTCMinutes(), n.getUTCSeconds());
                    return r > o && r < i
                }(e) ? n.setUTCHours(n.getUTCHours() + -5) : n.setUTCHours(n.getUTCHours() + -4), n
            }

            function n(e) {
                var t = e.getDay();
                return 6 == t ? e.setDate(e.getDate() - 1) : 0 == t && e.setDate(e.getDate() + 1), e
            }

            return {
                localToEasternTime: function (e) {
                    return t(e)
                }, isBusinessHours: function (e) {
                    return function (e) {
                        var t = !1, n = e.getHours();
                        return n >= 9 && n < 21 && (t = !0), t
                    }(e)
                }, dateIsWorkDay: function (e) {
                    return function (e) {
                        var t = !0;
                        switch (e.getDay()) {
                            case 0:
                                t = !1;
                                break;
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                t = !0;
                                break;
                            case 6:
                                t = !1
                        }
                        return t
                    }(e)
                }, findObservedHoliday: function (e) {
                    return n(e)
                }, isHoliday: function (e) {
                    return function (e) {
                        var t = e.getDate(), r = (e.getDay(), e.getMonth()), o = new Date;
                        o.setHours(0, 0, 0, 0), o.setDate(1), o.setMonth(0);
                        var i = n(o);
                        if (r == i.getMonth() && t == i.getDate()) return !0;
                        for (o.setDate(1), o.setMonth(0); 1 != o.getDay();) o.setDate(o.getDate() + 1);
                        if (o.setDate(o.getDate() + 14), r == o.getMonth() && t == o.getDate()) return !0;
                        for (o.setDate(1), o.setMonth(1); 1 != o.getDay();) o.setDate(o.getDate() + 1);
                        if (o.setDate(o.getDate() + 14), r == o.getMonth() && t == o.getDate()) return !0;
                        for (o.setDate(1), o.setMonth(5), o.setDate(o.getDate() - 1); 1 != o.getDay();) o.setDate(o.getDate() - 1);
                        if (r == o.getMonth() && t == o.getDate()) return !0;
                        if (o.setDate(4), o.setMonth(6), r == (i = n(o)).getMonth() && t == i.getDate()) return !0;
                        for (o.setDate(1), o.setMonth(8); 1 != o.getDay();) o.setDate(o.getDate() + 1);
                        if (r == o.getMonth() && t == o.getDate()) return !0;
                        for (o.setDate(1), o.setMonth(9); 1 != o.getDay();) o.setDate(o.getDate() + 1);
                        if (o.setDate(o.getDate() + 7), r == o.getMonth() && t == o.getDate()) return !0;
                        if (o.setDate(11), o.setMonth(10), r == (i = n(o)).getMonth() && t == i.getDate()) return !0;
                        for (o.setDate(1), o.setMonth(10); 4 != o.getDay();) o.setDate(o.getDate() + 1);
                        return o.setDate(o.getDate() + 21), r == o.getMonth() && t == o.getDate() || (o.setDate(25), o.setMonth(11), r == (i = n(o)).getMonth() && t == i.getDate())
                    }(e)
                }, isDaylightSavingsTime: function (e) {
                    return isDaylightSavingsTim(e)
                }
            }
        }.call(t, n, t, e)) || (e.exports = r)
    }, function (e, t, n) {
        "use strict";
        var r = n(197), o = n(198), i = [{
            path: /^\/about-cancer\/treatment\/clinical-trials/,
            settings: r.a
        }, {path: /^\/espanol\/cancer\/tratamiento/, settings: o.a}];
        t.a = i
    }, function (e, t, n) {
        "use strict";
        var r = {
            urls: ["/about-cancer/treatment/clinical-trials/search", "/about-cancer/treatment/clinical-trials/basic", "/about-cancer/treatment/clinical-trials/search/a", "/about-cancer/treatment/clinical-trials/search/r", "/about-cancer/treatment/clinical-trials/search/v", "/about-cancer/treatment/clinical-trials/advanced-search", "/about-cancer/treatment/clinical-trials/search/results", "/about-cancer/treatment/clinical-trials/search/view", /^\/about-cancer\/treatment\/clinical-trials\/disease\/.*/, /^\/about-cancer\/treatment\/clinical-trials\/intervention\/.*/],
            popupDelaySeconds: 30,
            popupID: "ProactiveLiveHelpForCTSPrompt",
            popupBody: '\n        <h2 class="title">Need Help Finding a Clinical Trial?</h2>\n        <div class="content">\n            <p>Information Specialists are available to help you search and answer your questions.</p>\n            <form onsubmit="return false;">\n                <input id="chat-button" type="button" name="rn_nciChatLaunchButton_4_Button" class="chat-button" value="Chat Now">\n            </form>\n            <div class="live-help"></div>    \n        </div>\n    ',
            optOutDurationDays: 30,
            timerIntervalSeconds: 5,
            interactionDelaySeconds: 10,
            startDate: new Date(0),
            endDate: null
        };
        t.a = r
    }, function (e, t, n) {
        "use strict";
        n(109);
        var r = {
            urls: ["/espanol/cancer/tratamiento/medicamentos", "/espanol/cancer/tratamiento/medicamentos/indice-de-medicamentos", "/espanol/cancer/tratamiento/medicamentos/enfermedades-relacionadas-con-cancer", "/espanol/cancer/tratamiento/medicamentos/uso-extraoficial", "/espanol/cancer/tratamiento/estudios-clinicos", "/espanol/cancer/tratamiento/estudios-clinicos/guia-estudios-clinicos", "/espanol/cancer/tratamiento/estudios-clinicos/que-son-estudios", "/espanol/cancer/tratamiento/estudios-clinicos/que-son-estudios/donde-se-realizan", "/espanol/cancer/tratamiento/estudios-clinicos/que-son-estudios/tipos", "/espanol/cancer/tratamiento/estudios-clinicos/que-son-estudios/fases", "/espanol/cancer/tratamiento/estudios-clinicos/que-son-estudios/asignacion-azar", "/espanol/cancer/tratamiento/estudios-clinicos/que-son-estudios/placebo", "/espanol/cancer/tratamiento/estudios-clinicos/que-son-estudios/miembros-equipo-investigacion", "/espanol/cancer/tratamiento/estudios-clinicos/pago", "/espanol/cancer/tratamiento/estudios-clinicos/pago/cobertura-de-seguro", "/espanol/cancer/tratamiento/estudios-clinicos/pago/gestion-con-plan-de-salud", "/espanol/cancer/tratamiento/estudios-clinicos/pago/programas-federales", "/espanol/cancer/tratamiento/estudios-clinicos/seguridad-paciente", "/espanol/cancer/tratamiento/estudios-clinicos/seguridad-paciente/consentimiento", "/espanol/cancer/tratamiento/estudios-clinicos/seguridad-paciente/asentimiento-ninos", "/espanol/cancer/tratamiento/estudios-clinicos/seguridad-paciente/revision-cientifica", "/espanol/cancer/tratamiento/estudios-clinicos/seguridad-paciente/terminacion-estudio", "/espanol/cancer/tratamiento/estudios-clinicos/decidir-participar", "/espanol/cancer/tratamiento/estudios-clinicos/preguntas", "/espanol/cancer/tratamiento/estudios-clinicos/patrocinados-por-nci"],
            popupDelaySeconds: 30,
            popupID: "Spanish-CTSPrompt",
            popupBody: '\n        <h2 class="title">¿Necesita ayuda en encontrar un estudio clínico?</h2>\n        <div class="content spanish-livehelp">\n            <p>Especialistas de Información están disponibles para ayudarle en hacer una búsqueda y contestar a sus preguntas.</p>\n            <form onsubmit="return false;">\n                <input id="chat-button" type="button" name="rn_nciChatLaunchButton_4_Button" class="chat-button" value="Iniciar Chat">\n            </form>\n            <div class="live-help"></div>    \n        </div>\n    ',
            optOutDurationDays: 30,
            timerIntervalSeconds: 5,
            interactionDelaySeconds: 10,
            startDate: new Date(0),
            endDate: null
        };
        t.a = r
    }, function (e, t, n) {
        "use strict";
        var r = n(132), o = n.n(r), i = n(68), a = n.n(i);
        var s = function () {
            function e(t) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.options = t, this.userActivity = {
                    lastActivityTime: 0,
                    activeElement: null
                }, this.popupStatus = !1, this.countdownIntervalID = "", this.initializeActivityCheck(), this.initializeCountdownTimer()
            }

            return e.prototype.displayPrompt = function () {
                var e = this;
                if (c(this.userActivity.lastActivityTime) < this.options.interactionDelaySeconds) window.setTimeout(this.displayPrompt.bind(this), 1e3); else {
                    var t = '\n            <a class="close">X</a>\n            ' + this.options.popupBody + "\n        ",
                        n = document.createElement("div");
                    n.id = this.options.popupID, n.classList.add("ProactiveLiveHelpPrompt"), n.innerHTML = t, document.querySelector("body").appendChild(n);
                    document.getElementById("chat-button").addEventListener("click", function () {
                        "Spanish-CTSPrompt" === e.options.popupID ? a.a.openSpanishChatWindow() : a.a.openChatWindow(), e.dismissPrompt()
                    }), this.makePromptVisible();
                    document.querySelector(".ProactiveLiveHelpPrompt .close").addEventListener("click", function () {
                        return e.dismissPrompt()
                    });
                    document.addEventListener("keyup", function t(n) {
                        27 === n.keyCode && !0 === e.popupStatus && (e.dismissPrompt(), document.removeEventListener("keyup", t))
                    }), function () {
                        NCIAnalytics && NCIAnalytics.RecordProactiveChatPromptDisplay && NCIAnalytics.RecordProactiveChatPromptDisplay($(".ProactiveLiveHelpPrompt"));
                        var e = $(".ProactiveLiveHelpPrompt .chat-button");
                        e && e.on("click.PLH", function () {
                            NCIAnalytics && NCIAnalytics.RecordProactiveChatPromptClick && NCIAnalytics.RecordProactiveChatPromptClick(this)
                        });
                        (e = $(".ProactiveLiveHelpPrompt .close")) && e.on("click.PLH", function () {
                            NCIAnalytics && NCIAnalytics.RecordProactiveChatPromptDismissal && NCIAnalytics.RecordProactiveChatPromptDismissal(this)
                        })
                    }()
                }
            }, e.prototype.makePromptVisible = function () {
                !1 === this.popupStatus && ($("#" + this.options.popupID).hide().fadeIn("slow"), this.popupStatus = !0)
            }, e.prototype.dismissPrompt = function () {
                !0 === this.popupStatus && ($("#" + this.options.popupID).fadeOut("slow"), $("#popup-message-content").empty().remove(), this.popupStatus = !1, this.setUserToOptedOut(), this.userActivity.activeElement && this.userActivity.activeElement.focus())
            }, e.prototype.setUserToOptedOut = function () {
                o.a.set(this.options.popupID + "-opt", "true", {expires: this.options.optOutDurationDays})
            }, e.prototype.initializeCountdownTimer = function () {
                var e = this.getCountdownTimeRemaining(),
                    t = 1e3 * (e >= this.options.timerIntervalSeconds ? this.options.timerIntervalSeconds : e);
                this.countdownIntervalID = window.setInterval(this.decrementCountdownTimer.bind(this), t)
            }, e.prototype.decrementCountdownTimer = function () {
                var e = this.getCountdownTimeRemaining();
                e -= this.options.timerIntervalSeconds, o.a.set(this.options.popupID + "-timer", e), e <= 0 && (window.clearInterval(this.countdownIntervalID), this.displayPrompt())
            }, e.prototype.getCountdownTimeRemaining = function () {
                var e = o.a.get(this.options.popupID + "-timer");
                return e || (e = this.options.popupDelaySeconds), (e = Number(e)) < 0 && (e = 0), e
            }, e.prototype.initializeActivityCheck = function () {
                $(document).on("keypress.PLH", this.recordUserInteraction.bind(this)), $(document).on("click.PLH", this.recordUserInteraction.bind(this))
            }, e.prototype.recordUserInteraction = function (e) {
                this.userActivity.lastActivityTime = (new Date).getTime(), this.userActivity.activeElement = document.activeElement
            }, e
        }();
        t.a = s;
        var c = function (e) {
            var t = (new Date).getTime() - e;
            return Math.floor(t / 1e3)
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(201), o = n.n(r), i = {
            hook: "[data-sortable]", customSortFunctions: {
                date: function (e, t, n) {
                    var r = new Date(e), o = new Date(t);
                    return r === o ? 0 : n ? r > o ? 1 : -1 : o > r ? 1 : -1
                }
            }
        };
        t.default = function () {
            o()(i)
        }
    }, function (module, exports, __webpack_require__) {
        var factory;
        factory = function () {
            return function (e) {
                var t = {};

                function n(r) {
                    if (t[r]) return t[r].exports;
                    var o = t[r] = {i: r, l: !1, exports: {}};
                    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
                }

                return n.m = e, n.c = t, n.d = function (e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: r})
                }, n.r = function (e) {
                    Object.defineProperty(e, "__esModule", {value: !0})
                }, n.n = function (e) {
                    var t = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return n.d(t, "a", t), t
                }, n.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, n.p = "", n(n.s = "./src/index.js")
            }({
                "./src/baseSortFunctions.js":
                /*!**********************************!*\
  !*** ./src/baseSortFunctions.js ***!
  \**********************************/
                /*! no static exports found */function (module, exports, __webpack_require__) {
                    "use strict";
                    eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _utilities = __webpack_require__(/*! ./utilities */ "./src/utilities.js");\n\nvar defaultSort = function defaultSort(a, b, sortUp) {\n  if (sortUp) {\n    if ((0, _utilities.isValidNumber)(a) && (0, _utilities.isValidNumber)(b)) {\n      return (0, _utilities.removeCurrency)(a) - (0, _utilities.removeCurrency)(b);\n    }\n    // localeCompare offers support for non-ASCII characters\n    return a.localeCompare(b);\n  } else {\n    if ((0, _utilities.isValidNumber)(a) && (0, _utilities.isValidNumber)(b)) {\n      return (0, _utilities.removeCurrency)(b) - (0, _utilities.removeCurrency)(a);\n    }\n    return b.localeCompare(a);\n  }\n};\n\nvar baseSortFunctions = {\n  __default__: defaultSort\n};\n\nexports.default = baseSortFunctions;\n\n//# sourceURL=webpack://sortablejs/./src/baseSortFunctions.js?')
                }, "./src/create.js":
                /*!***********************!*\
  !*** ./src/create.js ***!
  \***********************/
                /*! no static exports found */function (module, exports, __webpack_require__) {
                    "use strict";
                    eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _utilities = __webpack_require__(/*! ./utilities */ \"./src/utilities.js\");\n\nvar createSortableTable = function createSortableTable(_ref) {\n  var tableContainerNode = _ref.table,\n      headerRowSelector = _ref.headerRowSelector,\n      bodyRowsSelector = _ref.bodyRowsSelector,\n      sortFunctions = _ref.sortFunctions;\n\n  var headersList = tableContainerNode.querySelectorAll(headerRowSelector);\n  var bodyList = tableContainerNode.querySelectorAll(bodyRowsSelector);\n  var headers = Array.from(headersList);\n  var tableBody = Array.from(bodyList);\n\n  if (!headersList.length) {\n    throw new Error('Tables must contain at least 1 column to be sortable');\n  }\n\n  if (!bodyList.length) {\n    throw new Error('Tables must contain rows to be sortable');\n  }\n\n  if (!tableBody.every(function (row) {\n    return row.children.length === headers.length;\n  })) {\n    throw new Error('All rows must contain the same number of columns as the header row');\n  }\n\n  /**\r\n   * Event Listener used on interaction with header cells.\r\n   * (NOTE: It is also possible to pass synthetic events to this function (as in the case of presort) by wrapping\r\n   * the header cell node in an object using the key 'target')\r\n   * \r\n   * @param {Event} e\r\n   * @param {string} [e.type] Type of DOM event\r\n   * @param {HTMLElement} e.target Header cell of column to sort\r\n   */\n  var sort = function sort(e) {\n    if (e.type === 'keydown') {\n      if (['Enter', ' '].indexOf(e.key) === -1) {\n        return;\n      }\n    }\n\n    var sortCol = headers.indexOf(e.target);\n\n    var isSorted = e.target.dataset['sorted'];\n    var sortUp = !isSorted ? true : isSorted === 'up' ? false : true;\n\n    var sortType = e.target.dataset.sortableType || '__default__';\n    var sortFunction = sortFunctions[sortType] || sortFunctions['__default__'];\n\n    var sorted = (0, _utilities.sortRows)(sortFunction, tableBody, sortCol, sortUp);\n    (0, _utilities.reorderRows)(sorted);\n    (0, _utilities.setActiveSortCol)(sortCol, headers, tableBody);\n  };\n\n  /**\r\n   * Though use cases may be limited, the option to have tables sort on initial load could be\r\n   * useful. In order to do so, we will poll the column headers for an attribute 'data-sortable-presort'.\r\n   * Note: Only the first column found with the attribute will be handled.\r\n   * \r\n   * NOTE: To avoid repetition, we will pass the node to the same sort function as a synthetic event.\r\n   * \r\n   * @param {HTMLElement[]} headers \r\n   */\n  var presort = function presort(headers) {\n    var cellToPresort = headers.find(function (cell) {\n      return cell.dataset.hasOwnProperty('sortablePresort');\n    });\n    if (cellToPresort) {\n      var syntheticEvent = {\n        target: cellToPresort\n      };\n      sort(syntheticEvent);\n    }\n  };\n\n  try {\n    (0, _utilities.addEventListeners)(headers, sort);\n    presort(headers);\n    return tableContainerNode;\n  } catch (err) {\n    throw err;\n  }\n};\n\nexports.default = createSortableTable;\n\n//# sourceURL=webpack://sortablejs/./src/create.js?")
                }, "./src/index.js":
                /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
                /*! no static exports found */function (module, exports, __webpack_require__) {
                    "use strict";
                    eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _baseSortFunctions = __webpack_require__(/*! ./baseSortFunctions */ \"./src/baseSortFunctions.js\");\n\nvar _baseSortFunctions2 = _interopRequireDefault(_baseSortFunctions);\n\nvar _create = __webpack_require__(/*! ./create */ \"./src/create.js\");\n\nvar _create2 = _interopRequireDefault(_create);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\r\n * \r\n * @param {string} [tableSelector=\"table[data-sortable]\"] The selector used to identify tables designated for sorting\r\n * @return {HTMLElement[]} An array of nodes representing the table elements of sortable tables\r\n */\nvar generateSortableTables = function generateSortableTables() {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n      _ref$tableSelector = _ref.tableSelector,\n      tableSelector = _ref$tableSelector === undefined ? 'table[data-sortable]' : _ref$tableSelector,\n      _ref$headerRowSelecto = _ref.headerRowSelector,\n      headerRowSelector = _ref$headerRowSelecto === undefined ? 'thead th' : _ref$headerRowSelecto,\n      _ref$bodyRowsSelector = _ref.bodyRowsSelector,\n      bodyRowsSelector = _ref$bodyRowsSelector === undefined ? 'tbody tr' : _ref$bodyRowsSelector,\n      _ref$customSortFuncti = _ref.customSortFunctions,\n      customSortFunctions = _ref$customSortFuncti === undefined ? {} : _ref$customSortFuncti;\n\n  if (typeof tableSelector !== 'string') {\n    throw new Error('Must use a valid selector string as tableSelector');\n  }\n\n  if ((typeof customSortFunctions === 'undefined' ? 'undefined' : _typeof(customSortFunctions)) !== 'object' || customSortFunctions === null) {\n    throw new Error('customSortFunctions must be a non-null object');\n  }\n\n  var areCustomSortFunctionsValid = Object.keys(customSortFunctions).every(function (presumedFunction) {\n    return typeof customSortFunctions[presumedFunction] === 'function';\n  });\n\n  if (!areCustomSortFunctionsValid) {\n    throw new Error('All custom sort functions must be FUNCTIONS!');\n  }\n\n  try {\n    var sortFunctions = Object.assign({}, _baseSortFunctions2.default, customSortFunctions);\n    var tables = Array.from(document.querySelectorAll(tableSelector));\n    var sortables = tables.map(function (table) {\n      return (0, _create2.default)({\n        table: table,\n        sortFunctions: sortFunctions,\n        headerRowSelector: headerRowSelector,\n        bodyRowsSelector: bodyRowsSelector\n      });\n    });\n    return sortables;\n  } catch (err) {\n    throw err;\n  }\n};\n\nexports.default = generateSortableTables;\n\n//# sourceURL=webpack://sortablejs/./src/index.js?")
                }, "./src/utilities.js":
                /*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
                /*! no static exports found */function (module, exports, __webpack_require__) {
                    "use strict";
                    eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n/**\r\n * \r\n * @param {string} Cell value\r\n * @return {string} Cell value without '$'s or ','s \r\n */\nvar removeCurrency = exports.removeCurrency = function removeCurrency(str) {\n  return str.replace(/[$,]/g, '');\n};\n\n/**\r\n * To evaluate whether a string should in fact be treated as a number for purposes of sorting we:\r\n * a) Remove dollar signs and commas.\r\n * b) Use the native Javascript isNaN to see if the remaining string parses as a number or not.\r\n * \r\n * @param {string} Cell value\r\n * @return {boolean}\r\n */\nvar isValidNumber = exports.isValidNumber = function isValidNumber(str) {\n  return !isNaN(removeCurrency(str));\n};\n\n/**\r\n * Javascript's native Array sort is not stable across all browsers. Instead of using a completely different sorting\r\n * algorithm, a simple check of equality and deference to index order in cases where it exists allows us\r\n * to have the same stability as something like a merge sort.\r\n * \r\n * @param {function} sortFunction \r\n * @param {HTMLElement[]} unsorted \r\n * @param {number} sortCol \r\n * @param {boolean} sortUp\r\n * @return {HTMLElement[]} Array of Nodes\r\n */\nvar sortRows = exports.sortRows = function sortRows(sortFunction, unsorted, sortCol, sortUp) {\n  var unsortedWithIndex = unsorted.map(function (node, index) {\n    return { node: node, index: index };\n  });\n  var sortedWithIndex = unsortedWithIndex.sort(function (curr, next) {\n    var sortWithContext = function sortWithContext(sortCol, sortUp) {\n      var a = curr.node.children[sortCol].innerText;\n      var b = next.node.children[sortCol].innerText;\n      return sortFunction(a, b, sortUp) || curr.index - next.index;\n    };\n    return sortWithContext(sortCol, sortUp);\n  });\n  var sorted = sortedWithIndex.map(function (_ref) {\n    var node = _ref.node;\n    return node;\n  });\n  return sorted;\n};\n\n/**\r\n * IMPURE: DOM MANIPULATION\r\n * @param {HTMLElement[]} headers \r\n * @param {function} callback \r\n * @return {HTMLElement[]}\r\n */\nvar addEventListeners = exports.addEventListeners = function addEventListeners(headers, callback) {\n  headers.map(function (cell, col) {\n    if (!cell.dataset.hasOwnProperty('fixed')) {\n      cell.tabIndex = 0;\n      cell.dataset['sorted'] = false;\n      cell.addEventListener('click', callback);\n      cell.addEventListener('keydown', callback);\n    }\n  });\n  return headers;\n};\n\n/**\r\n * IMPURE: DOM MANIPULATION\r\n * @param {HTMLElement[]} rows \r\n */\nvar reorderRows = exports.reorderRows = function reorderRows(rows) {\n  for (var i = rows.length - 1; i > 0; i--) {\n    var secondNode = rows[i];\n    var firstNode = rows[i - 1];\n    var parent = secondNode.parentNode;\n    parent.insertBefore(firstNode, secondNode);\n  }\n};\n\n/**\r\n * IMPURE: DOM MANIPULATION\r\n * This function serves two purposes. \r\n * a) Our sort function will rely on reading off the current sort direction/state from the column header, this is how\r\n * we update that.\r\n * \r\n * b) To create hooks that allow for styling all cells currently being sorted.\r\n * \r\n * @param {number} sortCol \r\n * @param {HTMLElement[]} headers \r\n * @param {HTMLElement[]} tableBody \r\n */\nvar setActiveSortCol = exports.setActiveSortCol = function setActiveSortCol(sortCol, headers, tableBody) {\n  headers.map(function (col, idx) {\n    if (col.dataset.hasOwnProperty('fixed')) return;\n    col.dataset['sorted'] = idx !== sortCol ? false : col.dataset['sorted'] === 'up' ? 'down' : 'up';\n  });\n  tableBody.map(function (row) {\n    [].concat(_toConsumableArray(row.children)).map(function (cell, idx) {\n      cell.dataset['sorted'] = idx === sortCol;\n    });\n  });\n};\n\n//# sourceURL=webpack://sortablejs/./src/utilities.js?")
                }
            })
        }, module.exports = factory()
    }, function (e, t, n) {
        var r;
        void 0 === (r = function (e) {
            var t = n(0);

            function r(e, n) {
                if (e.data("scrollWrapper").addClass("has-scroll"), e.data("scrollWrapper").addClass("scrollable"), (window.innerWidth || t(window).width()) <= n.thresholdForEnlarge) i(e); else if (!e.data("enlargeBtn")) {
                    var r = t("<a/>", {
                        class: "article-image-enlarge no-resize",
                        href: "#",
                        html: n.enlargeTxt
                    }).on("click.enlarge", function (t) {
                        t.preventDefault();
                        try {
                            NCIAnalytics.GlobalLinkTrack({sender: this, label: "table-enlarge"})
                        } catch (e) {
                            console.log(e.message)
                        }
                        o(e, n)
                    }).insertBefore(e.data("scrollWrapper"));
                    if (e.data("caption")) e.data("caption").css("padding-right", r.outerWidth()); else t("<div/>", {
                        class: "emptyCaptionShim",
                        html: "&nbsp;"
                    }).insertBefore(r);
                    e.data("enlargeBtn", r)
                }
            }

            function o(e, n) {
                if (e.data("scrollWrapper").removeClass("has-scroll"), e.data("scrollWrapper").removeClass("scrollable"), !e.data("figWrapper")) {
                    var r = t("<div />", {class: "enlarge-table-wrapper"}).insertBefore(e);
                    e.data("figWrapper", r)
                }
                e.dialog({
                    width: a(n),
                    draggable: !1,
                    resizable: !1,
                    modal: !1,
                    title: "",
                    dialogClass: "table-enlarged",
                    position: {
                        my: "top", at: "top", collision: "none", of: e.data("anchorPoint"), using: function (e) {
                            t(this).css("top", e.top), t(this).css("left", n.dialogLRMargin)
                        }
                    },
                    create: function (r, o) {
                        e.data("enlargeBtn") && e.data("enlargeBtn").hide();
                        var i = t("<div/>", {class: "popup-close"}),
                            a = t("<a/>", {href: "#", onclick: "return false;"}).append(t("<span/>", {
                                class: "hidden",
                                html: n.closeTxt
                            }));
                        a.click(function () {
                            return e.dialog("close"), !1
                        }), i.append(a), e.prepend(i)
                    },
                    beforeClose: function (t, n) {
                        e.find(".popup-close").remove(), e.data("enlargeBtn") && e.data("enlargeBtn").show()
                    },
                    open: function () {
                        e.data("figWrapper")
                    },
                    close: function (n, r) {
                        var o = e.data("figWrapper");
                        o && o.height(1), t(this).dialog("destroy"), e.data("scrollWrapper").addClass("has-scroll"), e.data("scrollWrapper").addClass("scrollable")
                    }
                })
            }

            function i(e) {
                var t = e.data("enlargeBtn");
                t && (t.remove(), e.data("enlargeBtn", !1), e.data("caption").css("padding-right", 0)), e.find(".emptyCaptionShim").remove()
            }

            function a(e) {
                return t(window).width() - 2 * e.dialogLRMargin
            }

            n(2), t.fn.overflowEnlarge = function (e) {
                var n = t.extend({
                    text: "Default Text",
                    color: null,
                    enlargeTxt: "es" == t('meta[name="content-language"]').attr("content") ? "Ampliar" : "Enlarge",
                    collapseTxt: "es" == t('meta[name="content-language"]').attr("content") ? "Cerrar" : "Close",
                    thresholdForEnlarge: 1024,
                    xlThreshold: 1440,
                    dialogLRMargin: 20,
                    dialogLRInnerPadding: 16
                }, e);
                return this.each(function () {
                    var e = t(this), a = function (e) {
                        var n = !1;
                        if (e.parents("figure").length <= 0) {
                            (n = t("<figure></figure>")).addClass("table"), n.attr("data-display-excludedevice", e.attr("data-display-excludedevice")), n.insertBefore(e), e.appendTo(n);
                            var r = e.find("caption");
                            if (r.length > 0) {
                                var o = t("<figcaption></figcaption>"), i = e.attr("id");
                                i ? o.attr("id", i + "_cap") : o.uniqueId(), e.attr("aria-labelledby", o.attr("id")), o.append(r.contents()), r.remove(), n.data("caption", o), n.append(o)
                            } else e.data("caption", !1);
                            n.append(e)
                        } else n = e.parents("figure");
                        return n
                    }(e), s = t("<div />", {height: 1}).insertBefore(a);
                    a.data("anchorPoint", s);
                    var c = t("<div />", {class: "scrollable", html: "<div />"}).insertBefore(e);
                    e.appendTo(c.find("div")), a.data("theTable", e), a.data("scrollWrapper", c), a.data("tblOrigWidth", a.data("theTable").width()), a.data("theTable").outerWidth() > a.data("theTable").parent().outerWidth() && r(a, n), t(window).on("resize orientationchange accordionactivate pdqinpagenav", function () {
                        var e = window.innerWidth || t(window).width();
                        void 0 !== a.dialog("instance") ? e <= n.thresholdForEnlarge ? (a.dialog("close"), i(a)) : (a.dialog("close"), a.data("theTable").outerWidth() > a.data("theTable").parent().outerWidth() ? o(a, n) : (a.data("scrollWrapper").removeClass("has-scroll"), a.data("scrollWrapper").removeClass("scrollable"), e < n.thresholdForEnlarge && i(a))) : (n.xlThreshold, a.data("theTable").outerWidth() > a.data("theTable").parent().outerWidth() ? r(a, n) : (a.data("scrollWrapper").removeClass("has-scroll"), a.data("scrollWrapper").removeClass("scrollable"), i(a)))
                    })
                })
            }
        }.call(t, n, t, e)) || (e.exports = r)
    }, function (e, t, n) {
        var r, o, i, a;
        "function" == typeof Symbol && Symbol.iterator;
        a = function (e) {
            e.NCI || (e.NCI = {}), e.NCI.prevent_enter = function (t, n) {
                var r = this;
                r.$el = e(t), r.el = t, r.init = function () {
                    r.options = e.extend({}, e.NCI.prevent_enter.defaultOptions, n), r.$el.data("NCI.prevent_enter") || (r.$el.data("NCI.prevent_enter", r), r.$el.submit(function (t) {
                        e(document.activeElement).is('[data-prevent-enter="false"]') || event.preventDefault()
                    }))
                }, r.init()
            }, e.NCI.prevent_enter.defaultOptions = {option: "setting"}, e.fn.NCI_prevent_enter = function (t) {
                return this.each(function () {
                    new e.NCI.prevent_enter(this, t)
                })
            }
        }, o = [n(0)], void 0 === (i = "function" == typeof(r = a) ? r.apply(t, o) : r) || (e.exports = i)
    }], [185]);
