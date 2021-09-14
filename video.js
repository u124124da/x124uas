/**
 * @license
 * Video.js 7.5.5 <http://videojs.com/>
 * Copyright Brightcove, Inc. <https://www.brightcove.com/>
 * Available under Apache License Version 2.0
 * <https://github.com/videojs/video.js/blob/master/LICENSE>
 *
 * Includes vtt.js <https://github.com/mozilla/vtt.js>
 * Available under Apache License Version 2.0
 * <https://github.com/mozilla/vtt.js/blob/master/LICENSE>
 */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("global/window"), require("global/document")) : "function" == typeof define && define.amd ? define(["global/window", "global/document"], t) : (e = e || self).videojs = t(e.window, e.document)
}(this, function(v, h) {
    v = v && v.hasOwnProperty("default") ? v.default : v, h = h && h.hasOwnProperty("default") ? h.default : h;
    var d = "7.5.5";

    function p(e, t) {
        e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
    }

    function a(e, t) {
        return (a = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function s(e, t, i) {
        return (s = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }() ? Reflect.construct : function(e, t, i) {
            var n = [null];
            n.push.apply(n, t);
            var r = new(Function.bind.apply(e, n));
            return i && a(r, i.prototype), r
        }).apply(null, arguments)
    }

    function f(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function t(e, t) {
        return t || (t = e.slice(0)), e.raw = t, e
    }
    var u = [],
        e = function(s, o) {
            return function(e, t, i) {
                var n = o.levels[t],
                    r = new RegExp("^(" + n + ")$");
                if ("log" !== e && i.unshift(e.toUpperCase() + ":"), i.unshift(s + ":"), u && u.push([].concat(i)), v.console) {
                    var a = v.console[e];
                    a || "debug" !== e || (a = v.console.info || v.console.log), a && n && r.test(e) && a[Array.isArray(i) ? "apply" : "call"](v.console, i)
                }
            }
        };
    var m = function t(i) {
            var n, r = "info",
                a = function() {
                    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    n("log", r, t)
                };
            return n = e(i, a), a.createLogger = function(e) {
                return t(i + ": " + e)
            }, a.levels = {
                all: "debug|log|warn|error",
                off: "",
                debug: "debug|log|warn|error",
                info: "log|warn|error",
                warn: "warn|error",
                error: "error",
                DEFAULT: r
            }, a.level = function(e) {
                if ("string" == typeof e) {
                    if (!a.levels.hasOwnProperty(e)) throw new Error('"' + e + '" in not a valid log level');
                    r = e
                }
                return r
            }, (a.history = function() {
                return u ? [].concat(u) : []
            }).filter = function(t) {
                return (u || []).filter(function(e) {
                    return new RegExp(".*" + t + ".*").test(e[0])
                })
            }, a.history.clear = function() {
                u && (u.length = 0)
            }, a.history.disable = function() {
                null !== u && (u.length = 0, u = null)
            }, a.history.enable = function() {
                null === u && (u = [])
            }, a.error = function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                return n("error", r, t)
            }, a.warn = function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                return n("warn", r, t)
            }, a.debug = function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                return n("debug", r, t)
            }, a
        }("VIDEOJS"),
        g = m.createLogger;
    var y = function(e) {
            for (var t = "", i = 0; i < arguments.length; i++) t += e[i].replace(/\n\r?\s*/g, "") + (arguments[i + 1] || "");
            return t
        },
        i = Object.prototype.toString,
        r = function(e) {
            return b(e) ? Object.keys(e) : []
        };

    function o(t, i) {
        r(t).forEach(function(e) {
            return i(t[e], e)
        })
    }

    function _(i) {
        for (var e = arguments.length, t = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) t[n - 1] = arguments[n];
        return Object.assign ? Object.assign.apply(Object, [i].concat(t)) : (t.forEach(function(e) {
            e && o(e, function(e, t) {
                i[t] = e
            })
        }), i)
    }

    function b(e) {
        return !!e && "object" == typeof e
    }

    function l(e) {
        return b(e) && "[object Object]" === i.call(e) && e.constructor === Object
    }

    function n(e, t) {
        if (!e || !t) return "";
        if ("function" != typeof v.getComputedStyle) return "";
        var i = v.getComputedStyle(e);
        return i ? i[t] : ""
    }

    function c() {
        var e = t(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."]);
        return c = function() {
            return e
        }, e
    }

    function T(e) {
        return "string" == typeof e && /\S/.test(e)
    }

    function S(e) {
        if (/\s/.test(e)) throw new Error("class has illegal whitespace characters")
    }

    function k() {
        return h === v.document
    }

    function C(e) {
        return b(e) && 1 === e.nodeType
    }

    function w() {
        try {
            return v.parent !== v.self
        } catch (e) {
            return !0
        }
    }

    function E(n) {
        return function(e, t) {
            if (!T(e)) return h[n](null);
            T(t) && (t = h.querySelector(t));
            var i = C(t) ? t : h;
            return i[n] && i[n](e)
        }
    }

    function A(e, i, t, n) {
        void 0 === e && (e = "div"), void 0 === i && (i = {}), void 0 === t && (t = {});
        var r = h.createElement(e);
        return Object.getOwnPropertyNames(i).forEach(function(e) {
            var t = i[e]; - 1 !== e.indexOf("aria-") || "role" === e || "type" === e ? (m.warn(y(c(), e, t)), r.setAttribute(e, t)) : "textContent" === e ? L(r, t) : r[e] = t
        }), Object.getOwnPropertyNames(t).forEach(function(e) {
            r.setAttribute(e, t[e])
        }), n && X(r, n), r
    }

    function L(e, t) {
        return "undefined" == typeof e.textContent ? e.innerText = t : e.textContent = t, e
    }

    function P(e, t) {
        t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e)
    }

    function O(e, t) {
        return S(t), e.classList ? e.classList.contains(t) : (i = t, new RegExp("(^|\\s)" + i + "($|\\s)")).test(e.className);
        var i
    }

    function I(e, t) {
        return e.classList ? e.classList.add(t) : O(e, t) || (e.className = (e.className + " " + t).trim()), e
    }

    function U(e, t) {
        return e.classList ? e.classList.remove(t) : (S(t), e.className = e.className.split(/\s+/).filter(function(e) {
            return e !== t
        }).join(" ")), e
    }

    function x(e, t, i) {
        var n = O(e, t);
        if ("function" == typeof i && (i = i(e, t)), "boolean" != typeof i && (i = !n), i !== n) return i ? I(e, t) : U(e, t), e
    }

    function D(i, n) {
        Object.getOwnPropertyNames(n).forEach(function(e) {
            var t = n[e];
            null === t || "undefined" == typeof t || !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t)
        })
    }

    function R(e) {
        var t = {},
            i = ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";
        if (e && e.attributes && 0 < e.attributes.length)
            for (var n = e.attributes, r = n.length - 1; 0 <= r; r--) {
                var a = n[r].name,
                    s = n[r].value;
                "boolean" != typeof e[a] && -1 === i.indexOf("," + a + ",") || (s = null !== s), t[a] = s
            }
        return t
    }

    function M(e, t) {
        return e.getAttribute(t)
    }

    function B(e, t, i) {
        e.setAttribute(t, i)
    }

    function N(e, t) {
        e.removeAttribute(t)
    }

    function j() {
        h.body.focus(), h.onselectstart = function() {
            return !1
        }
    }

    function F() {
        h.onselectstart = function() {
            return !0
        }
    }

    function V(e) {
        if (e && e.getBoundingClientRect && e.parentNode) {
            var t = e.getBoundingClientRect(),
                i = {};
            return ["bottom", "height", "left", "right", "top", "width"].forEach(function(e) {
                void 0 !== t[e] && (i[e] = t[e])
            }), i.height || (i.height = parseFloat(n(e, "height"))), i.width || (i.width = parseFloat(n(e, "width"))), i
        }
    }

    function H(e) {
        var t;
        if (e.getBoundingClientRect && e.parentNode && (t = e.getBoundingClientRect()), !t) return {
            left: 0,
            top: 0
        };
        var i = h.documentElement,
            n = h.body,
            r = i.clientLeft || n.clientLeft || 0,
            a = v.pageXOffset || n.scrollLeft,
            s = t.left + a - r,
            o = i.clientTop || n.clientTop || 0,
            u = v.pageYOffset || n.scrollTop,
            l = t.top + u - o;
        return {
            left: Math.round(s),
            top: Math.round(l)
        }
    }

    function q(e, t) {
        var i = {},
            n = H(e),
            r = e.offsetWidth,
            a = e.offsetHeight,
            s = n.top,
            o = n.left,
            u = t.pageY,
            l = t.pageX;
        return t.changedTouches && (l = t.changedTouches[0].pageX, u = t.changedTouches[0].pageY), i.y = Math.max(0, Math.min(1, (s - u + a) / a)), i.x = Math.max(0, Math.min(1, (l - o) / r)), i
    }

    function z(e) {
        return b(e) && 3 === e.nodeType
    }

    function W(e) {
        for (; e.firstChild;) e.removeChild(e.firstChild);
        return e
    }

    function G(e) {
        return "function" == typeof e && (e = e()), (Array.isArray(e) ? e : [e]).map(function(e) {
            return "function" == typeof e && (e = e()), C(e) || z(e) ? e : "string" == typeof e && /\S/.test(e) ? h.createTextNode(e) : void 0
        }).filter(function(e) {
            return e
        })
    }

    function X(t, e) {
        return G(e).forEach(function(e) {
            return t.appendChild(e)
        }), t
    }

    function Y(e, t) {
        return X(W(e), t)
    }

    function K(e) {
        return void 0 === e.button && void 0 === e.buttons || (0 === e.button && void 0 === e.buttons || 0 === e.button && 1 === e.buttons)
    }
    var $ = E("querySelector"),
        Q = E("querySelectorAll"),
        J = Object.freeze({
            isReal: k,
            isEl: C,
            isInFrame: w,
            createEl: A,
            textContent: L,
            prependTo: P,
            hasClass: O,
            addClass: I,
            removeClass: U,
            toggleClass: x,
            setAttributes: D,
            getAttributes: R,
            getAttribute: M,
            setAttribute: B,
            removeAttribute: N,
            blockTextSelection: j,
            unblockTextSelection: F,
            getBoundingClientRect: V,
            findPosition: H,
            getPointerPosition: q,
            isTextNode: z,
            emptyEl: W,
            normalizeContent: G,
            appendContent: X,
            insertContent: Y,
            isSingleLeftClick: K,
            $: $,
            $$: Q
        }),
        Z = 1;

    function ee() {
        return Z++
    }
    var te = {},
        ie = "vdata" + (new Date).getTime();

    function ne(e) {
        var t = e[ie];
        return t || (t = e[ie] = ee()), te[t] || (te[t] = {}), te[t]
    }

    function re(e) {
        var t = e[ie];
        return !!t && !!Object.getOwnPropertyNames(te[t]).length
    }

    function ae(t) {
        var e = t[ie];
        if (e) {
            delete te[e];
            try {
                delete t[ie]
            } catch (e) {
                t.removeAttribute ? t.removeAttribute(ie) : t[ie] = null
            }
        }
    }

    function se(e, t) {
        var i = ne(e);
        0 === i.handlers[t].length && (delete i.handlers[t], e.removeEventListener ? e.removeEventListener(t, i.dispatcher, !1) : e.detachEvent && e.detachEvent("on" + t, i.dispatcher)), Object.getOwnPropertyNames(i.handlers).length <= 0 && (delete i.handlers, delete i.dispatcher, delete i.disabled), 0 === Object.getOwnPropertyNames(i).length && ae(e)
    }

    function oe(t, i, e, n) {
        e.forEach(function(e) {
            t(i, e, n)
        })
    }

    function ue(e) {
        function t() {
            return !0
        }

        function i() {
            return !1
        }
        if (!e || !e.isPropagationStopped) {
            var n = e || v.event;
            for (var r in e = {}, n) "layerX" !== r && "layerY" !== r && "keyLocation" !== r && "webkitMovementX" !== r && "webkitMovementY" !== r && ("returnValue" === r && n.preventDefault || (e[r] = n[r]));
            if (e.target || (e.target = e.srcElement || h), e.relatedTarget || (e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement), e.preventDefault = function() {
                    n.preventDefault && n.preventDefault(), e.returnValue = !1, n.returnValue = !1, e.defaultPrevented = !0
                }, e.defaultPrevented = !1, e.stopPropagation = function() {
                    n.stopPropagation && n.stopPropagation(), e.cancelBubble = !0, n.cancelBubble = !0, e.isPropagationStopped = t
                }, e.isPropagationStopped = i, e.stopImmediatePropagation = function() {
                    n.stopImmediatePropagation && n.stopImmediatePropagation(), e.isImmediatePropagationStopped = t, e.stopPropagation()
                }, e.isImmediatePropagationStopped = i, null !== e.clientX && void 0 !== e.clientX) {
                var a = h.documentElement,
                    s = h.body;
                e.pageX = e.clientX + (a && a.scrollLeft || s && s.scrollLeft || 0) - (a && a.clientLeft || s && s.clientLeft || 0), e.pageY = e.clientY + (a && a.scrollTop || s && s.scrollTop || 0) - (a && a.clientTop || s && s.clientTop || 0)
            }
            e.which = e.charCode || e.keyCode, null !== e.button && void 0 !== e.button && (e.button = 1 & e.button ? 0 : 4 & e.button ? 1 : 2 & e.button ? 2 : 0)
        }
        return e
    }
    var le = !1;
    ! function() {
        try {
            var e = Object.defineProperty({}, "passive", {
                get: function() {
                    le = !0
                }
            });
            v.addEventListener("test", null, e), v.removeEventListener("test", null, e)
        } catch (e) {}
    }();
    var ce = ["touchstart", "touchmove"];

    function he(s, e, t) {
        if (Array.isArray(e)) return oe(he, s, e, t);
        var o = ne(s);
        if (o.handlers || (o.handlers = {}), o.handlers[e] || (o.handlers[e] = []), t.guid || (t.guid = ee()), o.handlers[e].push(t), o.dispatcher || (o.disabled = !1, o.dispatcher = function(e, t) {
                if (!o.disabled) {
                    e = ue(e);
                    var i = o.handlers[e.type];
                    if (i)
                        for (var n = i.slice(0), r = 0, a = n.length; r < a && !e.isImmediatePropagationStopped(); r++) try {
                            n[r].call(s, e, t)
                        } catch (e) {
                            m.error(e)
                        }
                }
            }), 1 === o.handlers[e].length)
            if (s.addEventListener) {
                var i = !1;
                le && -1 < ce.indexOf(e) && (i = {
                    passive: !0
                }), s.addEventListener(e, o.dispatcher, i)
            } else s.attachEvent && s.attachEvent("on" + e, o.dispatcher)
    }

    function de(e, t, i) {
        if (re(e)) {
            var n = ne(e);
            if (n.handlers) {
                if (Array.isArray(t)) return oe(de, e, t, i);
                var r = function(e, t) {
                    n.handlers[t] = [], se(e, t)
                };
                if (void 0 !== t) {
                    var a = n.handlers[t];
                    if (a)
                        if (i) {
                            if (i.guid)
                                for (var s = 0; s < a.length; s++) a[s].guid === i.guid && a.splice(s--, 1);
                            se(e, t)
                        } else r(e, t)
                } else
                    for (var o in n.handlers) Object.prototype.hasOwnProperty.call(n.handlers || {}, o) && r(e, o)
            }
        }
    }

    function pe(e, t, i) {
        var n = re(e) ? ne(e) : {},
            r = e.parentNode || e.ownerDocument;
        if ("string" == typeof t ? t = {
                type: t,
                target: e
            } : t.target || (t.target = e), t = ue(t), n.dispatcher && n.dispatcher.call(e, t, i), r && !t.isPropagationStopped() && !0 === t.bubbles) pe.call(null, r, t, i);
        else if (!r && !t.defaultPrevented && t.target && t.target[t.type]) {
            var a = ne(t.target);
            t.target[t.type] && (a.disabled = !0, "function" == typeof t.target[t.type] && t.target[t.type](), a.disabled = !1)
        }
        return !t.defaultPrevented
    }

    function fe(t, i, n) {
        if (Array.isArray(i)) return oe(fe, t, i, n);
        var e = function e() {
            de(t, i, e), n.apply(this, arguments)
        };
        e.guid = n.guid = n.guid || ee(), he(t, i, e)
    }
    var me, ge = Object.freeze({
            fixEvent: ue,
            on: he,
            off: de,
            trigger: pe,
            one: fe
        }),
        ye = !1,
        ve = function() {
            if (k() && !1 !== me.options.autoSetup) {
                var e = Array.prototype.slice.call(h.getElementsByTagName("video")),
                    t = Array.prototype.slice.call(h.getElementsByTagName("audio")),
                    i = Array.prototype.slice.call(h.getElementsByTagName("video-js")),
                    n = e.concat(t, i);
                if (n && 0 < n.length)
                    for (var r = 0, a = n.length; r < a; r++) {
                        var s = n[r];
                        if (!s || !s.getAttribute) {
                            _e(1);
                            break
                        }
                        void 0 === s.player && null !== s.getAttribute("data-setup") && me(s)
                    } else ye || _e(1)
            }
        };

    function _e(e, t) {
        t && (me = t), v.setTimeout(ve, e)
    }
    k() && "complete" === h.readyState ? ye = !0 : fe(v, "load", function() {
        ye = !0
    });
    var be, Te = function(e) {
            var t = h.createElement("style");
            return t.className = e, t
        },
        Se = function(e, t) {
            e.styleSheet ? e.styleSheet.cssText = t : e.textContent = t
        },
        ke = function(e, t, i) {
            t.guid || (t.guid = ee());
            var n = function() {
                return t.apply(e, arguments)
            };
            return n.guid = i ? i + "_" + t.guid : t.guid, n
        },
        Ce = function(t, i) {
            var n = Date.now();
            return function() {
                var e = Date.now();
                i <= e - n && (t.apply(void 0, arguments), n = e)
            }
        },
        we = function() {};
    we.prototype.allowedEvents_ = {}, we.prototype.addEventListener = we.prototype.on = function(e, t) {
        var i = this.addEventListener;
        this.addEventListener = function() {}, he(this, e, t), this.addEventListener = i
    }, we.prototype.removeEventListener = we.prototype.off = function(e, t) {
        de(this, e, t)
    }, we.prototype.one = function(e, t) {
        var i = this.addEventListener;
        this.addEventListener = function() {}, fe(this, e, t), this.addEventListener = i
    }, we.prototype.dispatchEvent = we.prototype.trigger = function(e) {
        var t = e.type || e;
        "string" == typeof e && (e = {
            type: t
        }), e = ue(e), this.allowedEvents_[t] && this["on" + t] && this["on" + t](e), pe(this, e)
    }, we.prototype.queueTrigger = function(e) {
        var t = this;
        be || (be = new Map);
        var i = e.type || e,
            n = be.get(this);
        n || (n = new Map, be.set(this, n));
        var r = n.get(i);
        n.delete(i), v.clearTimeout(r);
        var a = v.setTimeout(function() {
            0 === n.size && (n = null, be.delete(t)), t.trigger(e)
        }, 0);
        n.set(i, a)
    };
    var Ee = function(t) {
            return t instanceof we || !!t.eventBusEl_ && ["on", "one", "off", "trigger"].every(function(e) {
                return "function" == typeof t[e]
            })
        },
        Ae = function(e) {
            return "string" == typeof e && /\S/.test(e) || Array.isArray(e) && !!e.length
        },
        Le = function(e) {
            if (!e.nodeName && !Ee(e)) throw new Error("Invalid target; must be a DOM node or evented object.")
        },
        Pe = function(e) {
            if (!Ae(e)) throw new Error("Invalid event type; must be a non-empty string or array.")
        },
        Oe = function(e) {
            if ("function" != typeof e) throw new Error("Invalid listener; must be a function.")
        },
        Ie = function(e, t) {
            var i, n, r, a = t.length < 3 || t[0] === e || t[0] === e.eventBusEl_;
            return r = a ? (i = e.eventBusEl_, 3 <= t.length && t.shift(), n = t[0], t[1]) : (i = t[0], n = t[1], t[2]), Le(i), Pe(n), Oe(r), {
                isTargetingSelf: a,
                target: i,
                type: n,
                listener: r = ke(e, r)
            }
        },
        Ue = function(e, t, i, n) {
            Le(e), e.nodeName ? ge[t](e, i, n) : e[t](i, n)
        },
        xe = {
            on: function() {
                for (var e = this, t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                var r = Ie(this, i),
                    a = r.isTargetingSelf,
                    s = r.target,
                    o = r.type,
                    u = r.listener;
                if (Ue(s, "on", o, u), !a) {
                    var l = function() {
                        return e.off(s, o, u)
                    };
                    l.guid = u.guid;
                    var c = function() {
                        return e.off("dispose", l)
                    };
                    c.guid = u.guid, Ue(this, "on", "dispose", l), Ue(s, "on", "dispose", c)
                }
            },
            one: function() {
                for (var r = this, e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var n = Ie(this, t),
                    a = n.isTargetingSelf,
                    s = n.target,
                    o = n.type,
                    u = n.listener;
                if (a) Ue(s, "one", o, u);
                else {
                    var l = function e() {
                        r.off(s, o, e);
                        for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                        u.apply(null, i)
                    };
                    l.guid = u.guid, Ue(s, "one", o, l)
                }
            },
            off: function(e, t, i) {
                if (!e || Ae(e)) de(this.eventBusEl_, e, t);
                else {
                    var n = e,
                        r = t;
                    Le(n), Pe(r), Oe(i), i = ke(this, i), this.off("dispose", i), n.nodeName ? (de(n, r, i), de(n, "dispose", i)) : Ee(n) && (n.off(r, i), n.off("dispose", i))
                }
            },
            trigger: function(e, t) {
                return pe(this.eventBusEl_, e, t)
            }
        };

    function De(e, t) {
        void 0 === t && (t = {});
        var i = t.eventBusKey;
        if (i) {
            if (!e[i].nodeName) throw new Error('The eventBusKey "' + i + '" does not refer to an element.');
            e.eventBusEl_ = e[i]
        } else e.eventBusEl_ = A("span", {
            className: "vjs-event-bus"
        });
        return _(e, xe), e.eventedCallbacks && e.eventedCallbacks.forEach(function(e) {
            e()
        }), e.on("dispose", function() {
            e.off(), v.setTimeout(function() {
                e.eventBusEl_ = null
            }, 0)
        }), e
    }
    var Re = {
        state: {},
        setState: function(e) {
            var i, n = this;
            return "function" == typeof e && (e = e()), o(e, function(e, t) {
                n.state[t] !== e && ((i = i || {})[t] = {
                    from: n.state[t],
                    to: e
                }), n.state[t] = e
            }), i && Ee(this) && this.trigger({
                changes: i,
                type: "statechanged"
            }), i
        }
    };

    function Me(e, t) {
        return _(e, Re), e.state = _({}, e.state, t), "function" == typeof e.handleStateChanged && Ee(e) && e.on("statechanged", e.handleStateChanged), e
    }

    function Be(e) {
        return "string" != typeof e ? e : e.charAt(0).toUpperCase() + e.slice(1)
    }

    function Ne() {
        for (var i = {}, e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return t.forEach(function(e) {
            e && o(e, function(e, t) {
                l(e) ? (l(i[t]) || (i[t] = {}), i[t] = Ne(i[t], e)) : i[t] = e
            })
        }), i
    }
    var je = function() {
        function l(e, t, i) {
            if (!e && this.play ? this.player_ = e = this : this.player_ = e, this.parentComponent_ = null, this.options_ = Ne({}, this.options_), t = this.options_ = Ne(this.options_, t), this.id_ = t.id || t.el && t.el.id, !this.id_) {
                var n = e && e.id && e.id() || "no_player";
                this.id_ = n + "_component_" + ee()
            }
            this.name_ = t.name || null, t.el ? this.el_ = t.el : !1 !== t.createEl && (this.el_ = this.createEl()), !1 !== t.evented && De(this, {
                eventBusKey: this.el_ ? "el_" : null
            }), Me(this, this.constructor.defaultState), this.children_ = [], this.childIndex_ = {}, !(this.childNameIndex_ = {}) !== t.initChildren && this.initChildren(), this.ready(i), !1 !== t.reportTouchActivity && this.enableTouchActivity()
        }
        var e = l.prototype;
        return e.dispose = function() {
            if (this.trigger({
                    type: "dispose",
                    bubbles: !1
                }), this.children_)
                for (var e = this.children_.length - 1; 0 <= e; e--) this.children_[e].dispose && this.children_[e].dispose();
            this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.parentComponent_ = null, this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), ae(this.el_), this.el_ = null), this.player_ = null
        }, e.player = function() {
            return this.player_
        }, e.options = function(e) {
            return m.warn("this.options() has been deprecated and will be moved to the constructor in 6.0"), e && (this.options_ = Ne(this.options_, e)), this.options_
        }, e.el = function() {
            return this.el_
        }, e.createEl = function(e, t, i) {
            return A(e, t, i)
        }, e.localize = function(e, r, t) {
            void 0 === t && (t = e);
            var i = this.player_.language && this.player_.language(),
                n = this.player_.languages && this.player_.languages(),
                a = n && n[i],
                s = i && i.split("-")[0],
                o = n && n[s],
                u = t;
            return a && a[e] ? u = a[e] : o && o[e] && (u = o[e]), r && (u = u.replace(/\{(\d+)\}/g, function(e, t) {
                var i = r[t - 1],
                    n = i;
                return "undefined" == typeof i && (n = e), n
            })), u
        }, e.contentEl = function() {
            return this.contentEl_ || this.el_
        }, e.id = function() {
            return this.id_
        }, e.name = function() {
            return this.name_
        }, e.children = function() {
            return this.children_
        }, e.getChildById = function(e) {
            return this.childIndex_[e]
        }, e.getChild = function(e) {
            if (e) return e = Be(e), this.childNameIndex_[e]
        }, e.addChild = function(e, t, i) {
            var n, r;
            if (void 0 === t && (t = {}), void 0 === i && (i = this.children_.length), "string" == typeof e) {
                r = Be(e);
                var a = t.componentClass || r;
                t.name = r;
                var s = l.getComponent(a);
                if (!s) throw new Error("Component " + a + " does not exist");
                if ("function" != typeof s) return null;
                n = new s(this.player_ || this, t)
            } else n = e;
            if (n.parentComponent_ && n.parentComponent_.removeChild(n), this.children_.splice(i, 0, n), n.parentComponent_ = this, "function" == typeof n.id && (this.childIndex_[n.id()] = n), (r = r || n.name && Be(n.name())) && (this.childNameIndex_[r] = n), "function" == typeof n.el && n.el()) {
                var o = this.contentEl().children[i] || null;
                this.contentEl().insertBefore(n.el(), o)
            }
            return n
        }, e.removeChild = function(e) {
            if ("string" == typeof e && (e = this.getChild(e)), e && this.children_) {
                for (var t = !1, i = this.children_.length - 1; 0 <= i; i--)
                    if (this.children_[i] === e) {
                        t = !0, this.children_.splice(i, 1);
                        break
                    } if (t) {
                    e.parentComponent_ = null, this.childIndex_[e.id()] = null, this.childNameIndex_[e.name()] = null;
                    var n = e.el();
                    n && n.parentNode === this.contentEl() && this.contentEl().removeChild(e.el())
                }
            }
        }, e.initChildren = function() {
            var r = this,
                n = this.options_.children;
            if (n) {
                var e, a = this.options_,
                    i = l.getComponent("Tech");
                (e = Array.isArray(n) ? n : Object.keys(n)).concat(Object.keys(this.options_).filter(function(t) {
                    return !e.some(function(e) {
                        return "string" == typeof e ? t === e : t === e.name
                    })
                })).map(function(e) {
                    var t, i;
                    return i = "string" == typeof e ? n[t = e] || r.options_[t] || {} : (t = e.name, e), {
                        name: t,
                        opts: i
                    }
                }).filter(function(e) {
                    var t = l.getComponent(e.opts.componentClass || Be(e.name));
                    return t && !i.isTech(t)
                }).forEach(function(e) {
                    var t = e.name,
                        i = e.opts;
                    if (void 0 !== a[t] && (i = a[t]), !1 !== i) {
                        !0 === i && (i = {}), i.playerOptions = r.options_.playerOptions;
                        var n = r.addChild(t, i);
                        n && (r[t] = n)
                    }
                })
            }
        }, e.buildCSSClass = function() {
            return ""
        }, e.ready = function(e, t) {
            if (void 0 === t && (t = !1), e) return this.isReady_ ? void(t ? e.call(this) : this.setTimeout(e, 1)) : (this.readyQueue_ = this.readyQueue_ || [], void this.readyQueue_.push(e))
        }, e.triggerReady = function() {
            this.isReady_ = !0, this.setTimeout(function() {
                var e = this.readyQueue_;
                this.readyQueue_ = [], e && 0 < e.length && e.forEach(function(e) {
                    e.call(this)
                }, this), this.trigger("ready")
            }, 1)
        }, e.$ = function(e, t) {
            return $(e, t || this.contentEl())
        }, e.$$ = function(e, t) {
            return Q(e, t || this.contentEl())
        }, e.hasClass = function(e) {
            return O(this.el_, e)
        }, e.addClass = function(e) {
            I(this.el_, e)
        }, e.removeClass = function(e) {
            U(this.el_, e)
        }, e.toggleClass = function(e, t) {
            x(this.el_, e, t)
        }, e.show = function() {
            this.removeClass("vjs-hidden")
        }, e.hide = function() {
            this.addClass("vjs-hidden")
        }, e.lockShowing = function() {
            this.addClass("vjs-lock-showing")
        }, e.unlockShowing = function() {
            this.removeClass("vjs-lock-showing")
        }, e.getAttribute = function(e) {
            return M(this.el_, e)
        }, e.setAttribute = function(e, t) {
            B(this.el_, e, t)
        }, e.removeAttribute = function(e) {
            N(this.el_, e)
        }, e.width = function(e, t) {
            return this.dimension("width", e, t)
        }, e.height = function(e, t) {
            return this.dimension("height", e, t)
        }, e.dimensions = function(e, t) {
            this.width(e, !0), this.height(t)
        }, e.dimension = function(e, t, i) {
            if (void 0 !== t) return null !== t && t == t || (t = 0), -1 !== ("" + t).indexOf("%") || -1 !== ("" + t).indexOf("px") ? this.el_.style[e] = t : this.el_.style[e] = "auto" === t ? "" : t + "px", void(i || this.trigger("componentresize"));
            if (!this.el_) return 0;
            var n = this.el_.style[e],
                r = n.indexOf("px");
            return -1 !== r ? parseInt(n.slice(0, r), 10) : parseInt(this.el_["offset" + Be(e)], 10)
        }, e.currentDimension = function(e) {
            var t = 0;
            if ("width" !== e && "height" !== e) throw new Error("currentDimension only accepts width or height value");
            if ("function" == typeof v.getComputedStyle) {
                var i = v.getComputedStyle(this.el_);
                t = i.getPropertyValue(e) || i[e]
            }
            if (0 === (t = parseFloat(t))) {
                var n = "offset" + Be(e);
                t = this.el_[n]
            }
            return t
        }, e.currentDimensions = function() {
            return {
                width: this.currentDimension("width"),
                height: this.currentDimension("height")
            }
        }, e.currentWidth = function() {
            return this.currentDimension("width")
        }, e.currentHeight = function() {
            return this.currentDimension("height")
        }, e.focus = function() {
            this.el_.focus()
        }, e.blur = function() {
            this.el_.blur()
        }, e.handleKeyDown = function(e) {
            this.player_ && (e.stopPropagation(), this.player_.handleKeyDown(e))
        }, e.handleKeyPress = function(e) {
            this.handleKeyDown(e)
        }, e.emitTapEvents = function() {
            var n, t = 0,
                r = null;
            this.on("touchstart", function(e) {
                1 === e.touches.length && (r = {
                    pageX: e.touches[0].pageX,
                    pageY: e.touches[0].pageY
                }, t = (new Date).getTime(), n = !0)
            }), this.on("touchmove", function(e) {
                if (1 < e.touches.length) n = !1;
                else if (r) {
                    var t = e.touches[0].pageX - r.pageX,
                        i = e.touches[0].pageY - r.pageY;
                    10 < Math.sqrt(t * t + i * i) && (n = !1)
                }
            });
            var e = function() {
                n = !1
            };
            this.on("touchleave", e), this.on("touchcancel", e), this.on("touchend", function(e) {
                !(r = null) === n && ((new Date).getTime() - t < 200 && (e.preventDefault(), this.trigger("tap")))
            })
        }, e.enableTouchActivity = function() {
            if (this.player() && this.player().reportUserActivity) {
                var t, i = ke(this.player(), this.player().reportUserActivity);
                this.on("touchstart", function() {
                    i(), this.clearInterval(t), t = this.setInterval(i, 250)
                });
                var e = function(e) {
                    i(), this.clearInterval(t)
                };
                this.on("touchmove", i), this.on("touchend", e), this.on("touchcancel", e)
            }
        }, e.setTimeout = function(e, t) {
            var i, n, r = this;
            return e = ke(this, e), i = v.setTimeout(function() {
                r.off("dispose", n), e()
            }, t), (n = function() {
                return r.clearTimeout(i)
            }).guid = "vjs-timeout-" + i, this.on("dispose", n), i
        }, e.clearTimeout = function(e) {
            v.clearTimeout(e);
            var t = function() {};
            return t.guid = "vjs-timeout-" + e, this.off("dispose", t), e
        }, e.setInterval = function(e, t) {
            var i = this;
            e = ke(this, e);
            var n = v.setInterval(e, t),
                r = function() {
                    return i.clearInterval(n)
                };
            return r.guid = "vjs-interval-" + n, this.on("dispose", r), n
        }, e.clearInterval = function(e) {
            v.clearInterval(e);
            var t = function() {};
            return t.guid = "vjs-interval-" + e, this.off("dispose", t), e
        }, e.requestAnimationFrame = function(e) {
            var t, i, n = this;
            return this.supportsRaf_ ? (e = ke(this, e), t = v.requestAnimationFrame(function() {
                n.off("dispose", i), e()
            }), (i = function() {
                return n.cancelAnimationFrame(t)
            }).guid = "vjs-raf-" + t, this.on("dispose", i), t) : this.setTimeout(e, 1e3 / 60)
        }, e.cancelAnimationFrame = function(e) {
            if (this.supportsRaf_) {
                v.cancelAnimationFrame(e);
                var t = function() {};
                return t.guid = "vjs-raf-" + e, this.off("dispose", t), e
            }
            return this.clearTimeout(e)
        }, l.registerComponent = function(e, t) {
            if ("string" != typeof e || !e) throw new Error('Illegal component name, "' + e + '"; must be a non-empty string.');
            var i, n = l.getComponent("Tech"),
                r = n && n.isTech(t),
                a = l === t || l.prototype.isPrototypeOf(t.prototype);
            if (r || !a) throw i = r ? "techs must be registered using Tech.registerTech()" : "must be a Component subclass", new Error('Illegal component, "' + e + '"; ' + i + ".");
            e = Be(e), l.components_ || (l.components_ = {});
            var s = l.getComponent("Player");
            if ("Player" === e && s && s.players) {
                var o = s.players,
                    u = Object.keys(o);
                if (o && 0 < u.length && u.map(function(e) {
                        return o[e]
                    }).every(Boolean)) throw new Error("Can not register Player component after player has been created.")
            }
            return l.components_[e] = t
        }, l.getComponent = function(e) {
            if (e) return e = Be(e), l.components_ && l.components_[e] ? l.components_[e] : void 0
        }, l
    }();
    je.prototype.supportsRaf_ = "function" == typeof v.requestAnimationFrame && "function" == typeof v.cancelAnimationFrame, je.registerComponent("Component", je);
    var Fe, Ve, He, qe, ze = v.navigator && v.navigator.userAgent || "",
        We = /AppleWebKit\/([\d.]+)/i.exec(ze),
        Ge = We ? parseFloat(We.pop()) : null,
        Xe = /iPad/i.test(ze),
        Ye = /iPhone/i.test(ze) && !Xe,
        Ke = /iPod/i.test(ze),
        $e = Ye || Xe || Ke,
        Qe = (Fe = ze.match(/OS (\d+)_/i)) && Fe[1] ? Fe[1] : null,
        Je = /Android/i.test(ze),
        Ze = function() {
            var e = ze.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
            if (!e) return null;
            var t = e[1] && parseFloat(e[1]),
                i = e[2] && parseFloat(e[2]);
            return t && i ? parseFloat(e[1] + "." + e[2]) : t || null
        }(),
        et = Je && Ze < 5 && Ge < 537,
        tt = /Firefox/i.test(ze),
        it = /Edge/i.test(ze),
        nt = !it && (/Chrome/i.test(ze) || /CriOS/i.test(ze)),
        rt = (Ve = ze.match(/(Chrome|CriOS)\/(\d+)/)) && Ve[2] ? parseFloat(Ve[2]) : null,
        at = (He = /MSIE\s(\d+)\.\d/.exec(ze), !(qe = He && parseFloat(He[1])) && /Trident\/7.0/i.test(ze) && /rv:11.0/.test(ze) && (qe = 11), qe),
        st = /Safari/i.test(ze) && !nt && !Je && !it,
        ot = (st || $e) && !nt,
        ut = k() && ("ontouchstart" in v || v.navigator.maxTouchPoints || v.DocumentTouch && v.document instanceof v.DocumentTouch),
        lt = Object.freeze({
            IS_IPAD: Xe,
            IS_IPHONE: Ye,
            IS_IPOD: Ke,
            IS_IOS: $e,
            IOS_VERSION: Qe,
            IS_ANDROID: Je,
            ANDROID_VERSION: Ze,
            IS_NATIVE_ANDROID: et,
            IS_FIREFOX: tt,
            IS_EDGE: it,
            IS_CHROME: nt,
            CHROME_VERSION: rt,
            IE_VERSION: at,
            IS_SAFARI: st,
            IS_ANY_SAFARI: ot,
            TOUCH_ENABLED: ut
        });

    function ct(e, t, i, n) {
        return function(e, t, i) {
            if ("number" != typeof t || t < 0 || i < t) throw new Error("Failed to execute '" + e + "' on 'TimeRanges': The index provided (" + t + ") is non-numeric or out of bounds (0-" + i + ").")
        }(e, n, i.length - 1), i[n][t]
    }

    function ht(e) {
        return void 0 === e || 0 === e.length ? {
            length: 0,
            start: function() {
                throw new Error("This TimeRanges object is empty")
            },
            end: function() {
                throw new Error("This TimeRanges object is empty")
            }
        } : {
            length: e.length,
            start: ct.bind(null, "start", 0, e),
            end: ct.bind(null, "end", 1, e)
        }
    }

    function dt(e, t) {
        return Array.isArray(e) ? ht(e) : void 0 === e || void 0 === t ? ht() : ht([
            [e, t]
        ])
    }

    function pt(e, t) {
        var i, n, r = 0;
        if (!t) return 0;
        e && e.length || (e = dt(0, 0));
        for (var a = 0; a < e.length; a++) i = e.start(a), t < (n = e.end(a)) && (n = t), r += n - i;
        return r / t
    }
    for (var ft, mt = {}, gt = [
            ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror", "fullscreen"],
            ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"],
            ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen"],
            ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen"]
        ], yt = gt[0], vt = !1, _t = 0; _t < gt.length; _t++)
        if (gt[_t][1] in h) {
            ft = gt[_t];
            break
        } if (ft) {
        for (var bt = 0; bt < ft.length; bt++) mt[yt[bt]] = ft[bt];
        vt = ft[0] === yt[0]
    }

    function Tt(e) {
        if (e instanceof Tt) return e;
        "number" == typeof e ? this.code = e : "string" == typeof e ? this.message = e : b(e) && ("number" == typeof e.code && (this.code = e.code), _(this, e)), this.message || (this.message = Tt.defaultMessages[this.code] || "")
    }
    Tt.prototype.code = 0, Tt.prototype.message = "", Tt.prototype.status = null, Tt.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], Tt.defaultMessages = {
        1: "You aborted the media playback",
        2: "A network error caused the media download to fail part-way.",
        3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
        4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
        5: "The media is encrypted and we do not have the keys to decrypt it."
    };
    for (var St = 0; St < Tt.errorTypes.length; St++) Tt[Tt.errorTypes[St]] = St, Tt.prototype[Tt.errorTypes[St]] = St;
    var kt = function(e, t) {
        var i, n = null;
        try {
            i = JSON.parse(e, t)
        } catch (e) {
            n = e
        }
        return [n, i]
    };

    function Ct(e) {
        return null != e && "function" == typeof e.then
    }

    function wt(e) {
        Ct(e) && e.then(null, function(e) {})
    }
    var Et = function(n) {
            return ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(function(e, t, i) {
                return n[t] && (e[t] = n[t]), e
            }, {
                cues: n.cues && Array.prototype.map.call(n.cues, function(e) {
                    return {
                        startTime: e.startTime,
                        endTime: e.endTime,
                        text: e.text,
                        id: e.id
                    }
                })
            })
        },
        At = function(e) {
            var t = e.$$("track"),
                i = Array.prototype.map.call(t, function(e) {
                    return e.track
                });
            return Array.prototype.map.call(t, function(e) {
                var t = Et(e.track);
                return e.src && (t.src = e.src), t
            }).concat(Array.prototype.filter.call(e.textTracks(), function(e) {
                return -1 === i.indexOf(e)
            }).map(Et))
        },
        Lt = function(e, i) {
            return e.forEach(function(e) {
                var t = i.addRemoteTextTrack(e).track;
                !e.src && e.cues && e.cues.forEach(function(e) {
                    return t.addCue(e)
                })
            }), i.textTracks()
        };
    "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;

    function Pt(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    var Ot = Pt(function(e, t) {
            function i(e) {
                if (e && "object" == typeof e) {
                    var t = e.which || e.keyCode || e.charCode;
                    t && (e = t)
                }
                if ("number" == typeof e) return s[e];
                var i, n = String(e);
                return (i = r[n.toLowerCase()]) ? i : (i = a[n.toLowerCase()]) || (1 === n.length ? n.charCodeAt(0) : void 0)
            }
            i.isEventKey = function(e, t) {
                if (e && "object" == typeof e) {
                    var i = e.which || e.keyCode || e.charCode;
                    if (null == i) return !1;
                    if ("string" == typeof t) {
                        var n;
                        if (n = r[t.toLowerCase()]) return n === i;
                        if (n = a[t.toLowerCase()]) return n === i
                    } else if ("number" == typeof t) return t === i;
                    return !1
                }
            };
            var r = (t = e.exports = i).code = t.codes = {
                    backspace: 8,
                    tab: 9,
                    enter: 13,
                    shift: 16,
                    ctrl: 17,
                    alt: 18,
                    "pause/break": 19,
                    "caps lock": 20,
                    esc: 27,
                    space: 32,
                    "page up": 33,
                    "page down": 34,
                    end: 35,
                    home: 36,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40,
                    insert: 45,
                    delete: 46,
                    command: 91,
                    "left command": 91,
                    "right command": 93,
                    "numpad *": 106,
                    "numpad +": 107,
                    "numpad -": 109,
                    "numpad .": 110,
                    "numpad /": 111,
                    "num lock": 144,
                    "scroll lock": 145,
                    "my computer": 182,
                    "my calculator": 183,
                    ";": 186,
                    "=": 187,
                    ",": 188,
                    "-": 189,
                    ".": 190,
                    "/": 191,
                    "`": 192,
                    "[": 219,
                    "\\": 220,
                    "]": 221,
                    "'": 222
                },
                a = t.aliases = {
                    windows: 91,
                    "⇧": 16,
                    "⌥": 18,
                    "⌃": 17,
                    "⌘": 91,
                    ctl: 17,
                    control: 17,
                    option: 18,
                    pause: 19,
                    break: 19,
                    caps: 20,
                    return: 13,
                    escape: 27,
                    spc: 32,
                    spacebar: 32,
                    pgup: 33,
                    pgdn: 34,
                    ins: 45,
                    del: 46,
                    cmd: 91
                };
            for (n = 97; n < 123; n++) r[String.fromCharCode(n)] = n - 32;
            for (var n = 48; n < 58; n++) r[n - 48] = n;
            for (n = 1; n < 13; n++) r["f" + n] = n + 111;
            for (n = 0; n < 10; n++) r["numpad " + n] = n + 96;
            var s = t.names = t.title = {};
            for (n in r) s[r[n]] = n;
            for (var o in a) r[o] = a[o]
        }),
        It = (Ot.code, Ot.codes, Ot.aliases, Ot.names, Ot.title, "vjs-modal-dialog"),
        Ut = function(n) {
            function e(e, t) {
                var i;
                return (i = n.call(this, e, t) || this).opened_ = i.hasBeenOpened_ = i.hasBeenFilled_ = !1, i.closeable(!i.options_.uncloseable), i.content(i.options_.content), i.contentEl_ = A("div", {
                    className: It + "-content"
                }, {
                    role: "document"
                }), i.descEl_ = A("p", {
                    className: It + "-description vjs-control-text",
                    id: i.el().getAttribute("aria-describedby")
                }), L(i.descEl_, i.description()), i.el_.appendChild(i.descEl_), i.el_.appendChild(i.contentEl_), i
            }
            p(e, n);
            var t = e.prototype;
            return t.createEl = function() {
                return n.prototype.createEl.call(this, "div", {
                    className: this.buildCSSClass(),
                    tabIndex: -1
                }, {
                    "aria-describedby": this.id() + "_description",
                    "aria-hidden": "true",
                    "aria-label": this.label(),
                    role: "dialog"
                })
            }, t.dispose = function() {
                this.contentEl_ = null, this.descEl_ = null, this.previouslyActiveEl_ = null, n.prototype.dispose.call(this)
            }, t.buildCSSClass = function() {
                return It + " vjs-hidden " + n.prototype.buildCSSClass.call(this)
            }, t.label = function() {
                return this.localize(this.options_.label || "Modal Window")
            }, t.description = function() {
                var e = this.options_.description || this.localize("This is a modal window.");
                return this.closeable() && (e += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), e
            }, t.open = function() {
                if (!this.opened_) {
                    var e = this.player();
                    this.trigger("beforemodalopen"), this.opened_ = !0, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), this.wasPlaying_ = !e.paused(), this.options_.pauseOnOpen && this.wasPlaying_ && e.pause(), this.on("keydown", this.handleKeyDown), this.hadControls_ = e.controls(), e.controls(!1), this.show(), this.conditionalFocus_(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0
                }
            }, t.opened = function(e) {
                return "boolean" == typeof e && this[e ? "open" : "close"](), this.opened_
            }, t.close = function() {
                if (this.opened_) {
                    var e = this.player();
                    this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && this.options_.pauseOnOpen && e.play(), this.off("keydown", this.handleKeyDown), this.hadControls_ && e.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.conditionalBlur_(), this.options_.temporary && this.dispose()
                }
            }, t.closeable = function(e) {
                if ("boolean" == typeof e) {
                    var t = this.closeable_ = !!e,
                        i = this.getChild("closeButton");
                    if (t && !i) {
                        var n = this.contentEl_;
                        this.contentEl_ = this.el_, i = this.addChild("closeButton", {
                            controlText: "Close Modal Dialog"
                        }), this.contentEl_ = n, this.on(i, "close", this.close)
                    }!t && i && (this.off(i, "close", this.close), this.removeChild(i), i.dispose())
                }
                return this.closeable_
            }, t.fill = function() {
                this.fillWith(this.content())
            }, t.fillWith = function(e) {
                var t = this.contentEl(),
                    i = t.parentNode,
                    n = t.nextSibling;
                this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, i.removeChild(t), this.empty(), Y(t, e), this.trigger("modalfill"), n ? i.insertBefore(t, n) : i.appendChild(t);
                var r = this.getChild("closeButton");
                r && i.appendChild(r.el_)
            }, t.empty = function() {
                this.trigger("beforemodalempty"), W(this.contentEl()), this.trigger("modalempty")
            }, t.content = function(e) {
                return "undefined" != typeof e && (this.content_ = e), this.content_
            }, t.conditionalFocus_ = function() {
                var e = h.activeElement,
                    t = this.player_.el_;
                this.previouslyActiveEl_ = null, (t.contains(e) || t === e) && (this.previouslyActiveEl_ = e, this.focus())
            }, t.conditionalBlur_ = function() {
                this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null)
            }, t.handleKeyDown = function(e) {
                if (e.stopPropagation(), Ot.isEventKey(e, "Escape") && this.closeable()) return e.preventDefault(), void this.close();
                if (Ot.isEventKey(e, "Tab")) {
                    for (var t, i = this.focusableEls_(), n = this.el_.querySelector(":focus"), r = 0; r < i.length; r++)
                        if (n === i[r]) {
                            t = r;
                            break
                        } h.activeElement === this.el_ && (t = 0), e.shiftKey && 0 === t ? (i[i.length - 1].focus(), e.preventDefault()) : e.shiftKey || t !== i.length - 1 || (i[0].focus(), e.preventDefault())
                }
            }, t.focusableEls_ = function() {
                var e = this.el_.querySelectorAll("*");
                return Array.prototype.filter.call(e, function(e) {
                    return (e instanceof v.HTMLAnchorElement || e instanceof v.HTMLAreaElement) && e.hasAttribute("href") || (e instanceof v.HTMLInputElement || e instanceof v.HTMLSelectElement || e instanceof v.HTMLTextAreaElement || e instanceof v.HTMLButtonElement) && !e.hasAttribute("disabled") || e instanceof v.HTMLIFrameElement || e instanceof v.HTMLObjectElement || e instanceof v.HTMLEmbedElement || e.hasAttribute("tabindex") && -1 !== e.getAttribute("tabindex") || e.hasAttribute("contenteditable")
                })
            }, e
        }(je);
    Ut.prototype.options_ = {
        pauseOnOpen: !0,
        temporary: !0
    }, je.registerComponent("ModalDialog", Ut);
    var xt = function(n) {
        function e(e) {
            var t;
            void 0 === e && (e = []), (t = n.call(this) || this).tracks_ = [], Object.defineProperty(f(f(t)), "length", {
                get: function() {
                    return this.tracks_.length
                }
            });
            for (var i = 0; i < e.length; i++) t.addTrack(e[i]);
            return t
        }
        p(e, n);
        var t = e.prototype;
        return t.addTrack = function(e) {
            var t = this.tracks_.length;
            "" + t in this || Object.defineProperty(this, t, {
                get: function() {
                    return this.tracks_[t]
                }
            }), -1 === this.tracks_.indexOf(e) && (this.tracks_.push(e), this.trigger({
                track: e,
                type: "addtrack",
                target: this
            }))
        }, t.removeTrack = function(e) {
            for (var t, i = 0, n = this.length; i < n; i++)
                if (this[i] === e) {
                    (t = this[i]).off && t.off(), this.tracks_.splice(i, 1);
                    break
                } t && this.trigger({
                track: t,
                type: "removetrack",
                target: this
            })
        }, t.getTrackById = function(e) {
            for (var t = null, i = 0, n = this.length; i < n; i++) {
                var r = this[i];
                if (r.id === e) {
                    t = r;
                    break
                }
            }
            return t
        }, e
    }(we);
    for (var Dt in xt.prototype.allowedEvents_ = {
            change: "change",
            addtrack: "addtrack",
            removetrack: "removetrack"
        }, xt.prototype.allowedEvents_) xt.prototype["on" + Dt] = null;
    var Rt = function(e, t) {
            for (var i = 0; i < e.length; i++) Object.keys(e[i]).length && t.id !== e[i].id && (e[i].enabled = !1)
        },
        Mt = function(n) {
            function e(e) {
                var t;
                void 0 === e && (e = []);
                for (var i = e.length - 1; 0 <= i; i--)
                    if (e[i].enabled) {
                        Rt(e, e[i]);
                        break
                    } return (t = n.call(this, e) || this).changing_ = !1, t
            }
            p(e, n);
            var t = e.prototype;
            return t.addTrack = function(e) {
                var t = this;
                e.enabled && Rt(this, e), n.prototype.addTrack.call(this, e), e.addEventListener && (e.enabledChange_ = function() {
                    t.changing_ || (t.changing_ = !0, Rt(t, e), t.changing_ = !1, t.trigger("change"))
                }, e.addEventListener("enabledchange", e.enabledChange_))
            }, t.removeTrack = function(e) {
                n.prototype.removeTrack.call(this, e), e.removeEventListener && e.enabledChange_ && (e.removeEventListener("enabledchange", e.enabledChange_), e.enabledChange_ = null)
            }, e
        }(xt),
        Bt = function(e, t) {
            for (var i = 0; i < e.length; i++) Object.keys(e[i]).length && t.id !== e[i].id && (e[i].selected = !1)
        },
        Nt = function(n) {
            function e(e) {
                var t;
                void 0 === e && (e = []);
                for (var i = e.length - 1; 0 <= i; i--)
                    if (e[i].selected) {
                        Bt(e, e[i]);
                        break
                    } return (t = n.call(this, e) || this).changing_ = !1, Object.defineProperty(f(f(t)), "selectedIndex", {
                    get: function() {
                        for (var e = 0; e < this.length; e++)
                            if (this[e].selected) return e;
                        return -1
                    },
                    set: function() {}
                }), t
            }
            p(e, n);
            var t = e.prototype;
            return t.addTrack = function(e) {
                var t = this;
                e.selected && Bt(this, e), n.prototype.addTrack.call(this, e), e.addEventListener && (e.selectedChange_ = function() {
                    t.changing_ || (t.changing_ = !0, Bt(t, e), t.changing_ = !1, t.trigger("change"))
                }, e.addEventListener("selectedchange", e.selectedChange_))
            }, t.removeTrack = function(e) {
                n.prototype.removeTrack.call(this, e), e.removeEventListener && e.selectedChange_ && (e.removeEventListener("selectedchange", e.selectedChange_), e.selectedChange_ = null)
            }, e
        }(xt),
        jt = function(i) {
            function e() {
                return i.apply(this, arguments) || this
            }
            p(e, i);
            var t = e.prototype;
            return t.addTrack = function(e) {
                var t = this;
                i.prototype.addTrack.call(this, e), this.queueChange_ || (this.queueChange_ = function() {
                    return t.queueTrigger("change")
                }), this.triggerSelectedlanguagechange || (this.triggerSelectedlanguagechange_ = function() {
                    return t.trigger("selectedlanguagechange")
                }), e.addEventListener("modechange", this.queueChange_); - 1 === ["metadata", "chapters"].indexOf(e.kind) && e.addEventListener("modechange", this.triggerSelectedlanguagechange_)
            }, t.removeTrack = function(e) {
                i.prototype.removeTrack.call(this, e), e.removeEventListener && (this.queueChange_ && e.removeEventListener("modechange", this.queueChange_), this.selectedlanguagechange_ && e.removeEventListener("modechange", this.triggerSelectedlanguagechange_))
            }, e
        }(xt),
        Ft = function() {
            function e(e) {
                void 0 === e && (e = []), this.trackElements_ = [], Object.defineProperty(this, "length", {
                    get: function() {
                        return this.trackElements_.length
                    }
                });
                for (var t = 0, i = e.length; t < i; t++) this.addTrackElement_(e[t])
            }
            var t = e.prototype;
            return t.addTrackElement_ = function(e) {
                var t = this.trackElements_.length;
                "" + t in this || Object.defineProperty(this, t, {
                    get: function() {
                        return this.trackElements_[t]
                    }
                }), -1 === this.trackElements_.indexOf(e) && this.trackElements_.push(e)
            }, t.getTrackElementByTrack_ = function(e) {
                for (var t, i = 0, n = this.trackElements_.length; i < n; i++)
                    if (e === this.trackElements_[i].track) {
                        t = this.trackElements_[i];
                        break
                    } return t
            }, t.removeTrackElement_ = function(e) {
                for (var t = 0, i = this.trackElements_.length; t < i; t++)
                    if (e === this.trackElements_[t]) {
                        this.trackElements_[t].track && "function" == typeof this.trackElements_[t].track.off && this.trackElements_[t].track.off(), "function" == typeof this.trackElements_[t].off && this.trackElements_[t].off(), this.trackElements_.splice(t, 1);
                        break
                    }
            }, e
        }(),
        Vt = function() {
            function t(e) {
                t.prototype.setCues_.call(this, e), Object.defineProperty(this, "length", {
                    get: function() {
                        return this.length_
                    }
                })
            }
            var e = t.prototype;
            return e.setCues_ = function(e) {
                var t = this.length || 0,
                    i = 0,
                    n = e.length;
                this.cues_ = e, this.length_ = e.length;
                var r = function(e) {
                    "" + e in this || Object.defineProperty(this, "" + e, {
                        get: function() {
                            return this.cues_[e]
                        }
                    })
                };
                if (t < n)
                    for (i = t; i < n; i++) r.call(this, i)
            }, e.getCueById = function(e) {
                for (var t = null, i = 0, n = this.length; i < n; i++) {
                    var r = this[i];
                    if (r.id === e) {
                        t = r;
                        break
                    }
                }
                return t
            }, t
        }(),
        Ht = {
            alternative: "alternative",
            captions: "captions",
            main: "main",
            sign: "sign",
            subtitles: "subtitles",
            commentary: "commentary"
        },
        qt = {
            alternative: "alternative",
            descriptions: "descriptions",
            main: "main",
            "main-desc": "main-desc",
            translation: "translation",
            commentary: "commentary"
        },
        zt = {
            subtitles: "subtitles",
            captions: "captions",
            descriptions: "descriptions",
            chapters: "chapters",
            metadata: "metadata"
        },
        Wt = {
            disabled: "disabled",
            hidden: "hidden",
            showing: "showing"
        },
        Gt = function(a) {
            function e(e) {
                var t;
                void 0 === e && (e = {}), t = a.call(this) || this;
                var i = {
                        id: e.id || "vjs_track_" + ee(),
                        kind: e.kind || "",
                        label: e.label || "",
                        language: e.language || ""
                    },
                    n = function(e) {
                        Object.defineProperty(f(f(t)), e, {
                            get: function() {
                                return i[e]
                            },
                            set: function() {}
                        })
                    };
                for (var r in i) n(r);
                return t
            }
            return p(e, a), e
        }(we),
        Xt = function(e) {
            var t = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"],
                i = h.createElement("a");
            i.href = e;
            var n, r = "" === i.host && "file:" !== i.protocol;
            r && ((n = h.createElement("div")).innerHTML = '<a href="' + e + '"></a>', i = n.firstChild, n.setAttribute("style", "display:none; position:absolute;"), h.body.appendChild(n));
            for (var a = {}, s = 0; s < t.length; s++) a[t[s]] = i[t[s]];
            return "http:" === a.protocol && (a.host = a.host.replace(/:80$/, "")), "https:" === a.protocol && (a.host = a.host.replace(/:443$/, "")), a.protocol || (a.protocol = v.location.protocol), r && h.body.removeChild(n), a
        },
        Yt = function(e) {
            if (!e.match(/^https?:\/\//)) {
                var t = h.createElement("div");
                t.innerHTML = '<a href="' + e + '">x</a>', e = t.firstChild.href
            }
            return e
        },
        Kt = function(e) {
            if ("string" == typeof e) {
                var t = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i.exec(e);
                if (t) return t.pop().toLowerCase()
            }
            return ""
        },
        $t = function(e) {
            var t = v.location,
                i = Xt(e);
            return (":" === i.protocol ? t.protocol : i.protocol) + i.host !== t.protocol + t.host
        },
        Qt = Object.freeze({
            parseUrl: Xt,
            getAbsoluteURL: Yt,
            getFileExtension: Kt,
            isCrossOrigin: $t
        }),
        Jt = function(e) {
            var t = Zt.call(e);
            return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt)
        },
        Zt = Object.prototype.toString;
    var ei = Pt(function(e, t) {
            (t = e.exports = function(e) {
                return e.replace(/^\s*|\s*$/g, "")
            }).left = function(e) {
                return e.replace(/^\s*/, "")
            }, t.right = function(e) {
                return e.replace(/\s*$/, "")
            }
        }),
        ti = (ei.left, ei.right, Function.prototype.toString),
        ii = /^\s*class\b/,
        ni = function(e) {
            try {
                var t = ti.call(e);
                return ii.test(t)
            } catch (e) {
                return !1
            }
        },
        ri = Object.prototype.toString,
        ai = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
        si = function(e) {
            if (!e) return !1;
            if ("function" != typeof e && "object" != typeof e) return !1;
            if ("function" == typeof e && !e.prototype) return !0;
            if (ai) return function(e) {
                try {
                    return !ni(e) && (ti.call(e), !0)
                } catch (e) {
                    return !1
                }
            }(e);
            if (ni(e)) return !1;
            var t = ri.call(e);
            return "[object Function]" === t || "[object GeneratorFunction]" === t
        },
        oi = Object.prototype.toString,
        ui = Object.prototype.hasOwnProperty,
        li = function(e, t, i) {
            if (!si(t)) throw new TypeError("iterator must be a function");
            var n;
            3 <= arguments.length && (n = i), "[object Array]" === oi.call(e) ? function(e, t, i) {
                for (var n = 0, r = e.length; n < r; n++) ui.call(e, n) && (null == i ? t(e[n], n, e) : t.call(i, e[n], n, e))
            }(e, t, n) : "string" == typeof e ? function(e, t, i) {
                for (var n = 0, r = e.length; n < r; n++) null == i ? t(e.charAt(n), n, e) : t.call(i, e.charAt(n), n, e)
            }(e, t, n) : function(e, t, i) {
                for (var n in e) ui.call(e, n) && (null == i ? t(e[n], n, e) : t.call(i, e[n], n, e))
            }(e, t, n)
        },
        ci = function(e) {
            if (!e) return {};
            var a = {};
            return li(ei(e).split("\n"), function(e) {
                var t, i = e.indexOf(":"),
                    n = ei(e.slice(0, i)).toLowerCase(),
                    r = ei(e.slice(i + 1));
                "undefined" == typeof a[n] ? a[n] = r : (t = a[n], "[object Array]" === Object.prototype.toString.call(t) ? a[n].push(r) : a[n] = [a[n], r])
            }), a
        },
        hi = function() {
            for (var e = {}, t = 0; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i) di.call(i, n) && (e[n] = i[n])
            }
            return e
        },
        di = Object.prototype.hasOwnProperty;
    var pi = mi;

    function fi(e, t, i) {
        var n = e;
        return Jt(t) ? (i = t, "string" == typeof e && (n = {
            uri: e
        })) : n = hi(t, {
            uri: e
        }), n.callback = i, n
    }

    function mi(e, t, i) {
        return gi(t = fi(e, t, i))
    }

    function gi(n) {
        if ("undefined" == typeof n.callback) throw new Error("callback argument missing");
        var r = !1,
            a = function(e, t, i) {
                r || (r = !0, n.callback(e, t, i))
            };

        function t(e) {
            return clearTimeout(u), e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))), e.statusCode = 0, a(e, m)
        }

        function e() {
            if (!s) {
                var e;
                clearTimeout(u), e = n.useXDR && void 0 === o.status ? 200 : 1223 === o.status ? 204 : o.status;
                var t = m,
                    i = null;
                return 0 !== e ? (t = {
                    body: function() {
                        var e = void 0;
                        if (e = o.response ? o.response : o.responseText || function(e) {
                                if ("document" === e.responseType) return e.responseXML;
                                var t = e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName;
                                return "" !== e.responseType || t ? null : e.responseXML
                            }(o), f) try {
                            e = JSON.parse(e)
                        } catch (e) {}
                        return e
                    }(),
                    statusCode: e,
                    method: c,
                    headers: {},
                    url: l,
                    rawRequest: o
                }, o.getAllResponseHeaders && (t.headers = ci(o.getAllResponseHeaders()))) : i = new Error("Internal XMLHttpRequest Error"), a(i, t, t.body)
            }
        }
        var i, s, o = n.xhr || null;
        o || (o = n.cors || n.useXDR ? new mi.XDomainRequest : new mi.XMLHttpRequest);
        var u, l = o.url = n.uri || n.url,
            c = o.method = n.method || "GET",
            h = n.body || n.data,
            d = o.headers = n.headers || {},
            p = !!n.sync,
            f = !1,
            m = {
                body: void 0,
                headers: {},
                statusCode: 0,
                method: c,
                url: l,
                rawRequest: o
            };
        if ("json" in n && !1 !== n.json && (f = !0, d.accept || d.Accept || (d.Accept = "application/json"), "GET" !== c && "HEAD" !== c && (d["content-type"] || d["Content-Type"] || (d["Content-Type"] = "application/json"), h = JSON.stringify(!0 === n.json ? h : n.json))), o.onreadystatechange = function() {
                4 === o.readyState && setTimeout(e, 0)
            }, o.onload = e, o.onerror = t, o.onprogress = function() {}, o.onabort = function() {
                s = !0
            }, o.ontimeout = t, o.open(c, l, !p, n.username, n.password), p || (o.withCredentials = !!n.withCredentials), !p && 0 < n.timeout && (u = setTimeout(function() {
                if (!s) {
                    s = !0, o.abort("timeout");
                    var e = new Error("XMLHttpRequest timeout");
                    e.code = "ETIMEDOUT", t(e)
                }
            }, n.timeout)), o.setRequestHeader)
            for (i in d) d.hasOwnProperty(i) && o.setRequestHeader(i, d[i]);
        else if (n.headers && ! function(e) {
                for (var t in e)
                    if (e.hasOwnProperty(t)) return !1;
                return !0
            }(n.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
        return "responseType" in n && (o.responseType = n.responseType), "beforeSend" in n && "function" == typeof n.beforeSend && n.beforeSend(o), o.send(h || null), o
    }
    mi.XMLHttpRequest = v.XMLHttpRequest || function() {}, mi.XDomainRequest = "withCredentials" in new mi.XMLHttpRequest ? mi.XMLHttpRequest : v.XDomainRequest,
        function(e, t) {
            for (var i = 0; i < e.length; i++) t(e[i])
        }(["get", "put", "post", "patch", "head", "delete"], function(n) {
            mi["delete" === n ? "del" : n] = function(e, t, i) {
                return (t = fi(e, t, i)).method = n.toUpperCase(), gi(t)
            }
        });
    var yi = function(e, t) {
            var i = new v.WebVTT.Parser(v, v.vttjs, v.WebVTT.StringDecoder()),
                n = [];
            i.oncue = function(e) {
                t.addCue(e)
            }, i.onparsingerror = function(e) {
                n.push(e)
            }, i.onflush = function() {
                t.trigger({
                    type: "loadeddata",
                    target: t
                })
            }, i.parse(e), 0 < n.length && (v.console && v.console.groupCollapsed && v.console.groupCollapsed("Text Track parsing errors for " + t.src), n.forEach(function(e) {
                return m.error(e)
            }), v.console && v.console.groupEnd && v.console.groupEnd()), i.flush()
        },
        vi = function(l) {
            function e(e) {
                var t;
                if (void 0 === e && (e = {}), !e.tech) throw new Error("A tech was not provided.");
                var i = Ne(e, {
                        kind: zt[e.kind] || "subtitles",
                        language: e.language || e.srclang || ""
                    }),
                    n = Wt[i.mode] || "disabled",
                    r = i.default;
                "metadata" !== i.kind && "chapters" !== i.kind || (n = "hidden"), (t = l.call(this, i) || this).tech_ = i.tech, t.cues_ = [], t.activeCues_ = [];
                var a = new Vt(t.cues_),
                    s = new Vt(t.activeCues_),
                    o = !1,
                    u = ke(f(f(t)), function() {
                        this.activeCues = this.activeCues, o && (this.trigger("cuechange"), o = !1)
                    });
                return "disabled" !== n && t.tech_.ready(function() {
                    t.tech_.on("timeupdate", u)
                }, !0), Object.defineProperties(f(f(t)), {
                    default: {
                        get: function() {
                            return r
                        },
                        set: function() {}
                    },
                    mode: {
                        get: function() {
                            return n
                        },
                        set: function(e) {
                            var t = this;
                            Wt[e] && ("disabled" !== (n = e) ? this.tech_.ready(function() {
                                t.tech_.on("timeupdate", u)
                            }, !0) : this.tech_.off("timeupdate", u), this.trigger("modechange"))
                        }
                    },
                    cues: {
                        get: function() {
                            return this.loaded_ ? a : null
                        },
                        set: function() {}
                    },
                    activeCues: {
                        get: function() {
                            if (!this.loaded_) return null;
                            if (0 === this.cues.length) return s;
                            for (var e = this.tech_.currentTime(), t = [], i = 0, n = this.cues.length; i < n; i++) {
                                var r = this.cues[i];
                                r.startTime <= e && r.endTime >= e ? t.push(r) : r.startTime === r.endTime && r.startTime <= e && r.startTime + .5 >= e && t.push(r)
                            }
                            if (o = !1, t.length !== this.activeCues_.length) o = !0;
                            else
                                for (var a = 0; a < t.length; a++) - 1 === this.activeCues_.indexOf(t[a]) && (o = !0);
                            return this.activeCues_ = t, s.setCues_(this.activeCues_), s
                        },
                        set: function() {}
                    }
                }), i.src ? (t.src = i.src, function(e, a) {
                    var t = {
                            uri: e
                        },
                        i = $t(e);
                    i && (t.cors = i), pi(t, ke(this, function(e, t, i) {
                        if (e) return m.error(e, t);
                        if (a.loaded_ = !0, "function" != typeof v.WebVTT) {
                            if (a.tech_) {
                                var n, r = function() {
                                    m.error("vttjs failed to load, stopping trying to process " + a.src), a.tech_.off("vttjsloaded", n)
                                };
                                n = function() {
                                    return a.tech_.off("vttjserror", r), yi(i, a)
                                }, a.tech_.one("vttjsloaded", n), a.tech_.one("vttjserror", r)
                            }
                        } else yi(i, a)
                    }))
                }(i.src, f(f(t)))) : t.loaded_ = !0, t
            }
            p(e, l);
            var t = e.prototype;
            return t.addCue = function(e) {
                var t = e;
                if (v.vttjs && !(e instanceof v.vttjs.VTTCue)) {
                    for (var i in t = new v.vttjs.VTTCue(e.startTime, e.endTime, e.text), e) i in t || (t[i] = e[i]);
                    t.id = e.id, t.originalCue_ = e
                }
                for (var n = this.tech_.textTracks(), r = 0; r < n.length; r++) n[r] !== this && n[r].removeCue(t);
                this.cues_.push(t), this.cues.setCues_(this.cues_)
            }, t.removeCue = function(e) {
                for (var t = this.cues_.length; t--;) {
                    var i = this.cues_[t];
                    if (i === e || i.originalCue_ && i.originalCue_ === e) {
                        this.cues_.splice(t, 1), this.cues.setCues_(this.cues_);
                        break
                    }
                }
            }, e
        }(Gt);
    vi.prototype.allowedEvents_ = {
        cuechange: "cuechange"
    };
    var _i = function(r) {
            function e(e) {
                var t;
                void 0 === e && (e = {});
                var i = Ne(e, {
                    kind: qt[e.kind] || ""
                });
                t = r.call(this, i) || this;
                var n = !1;
                return Object.defineProperty(f(f(t)), "enabled", {
                    get: function() {
                        return n
                    },
                    set: function(e) {
                        "boolean" == typeof e && e !== n && (n = e, this.trigger("enabledchange"))
                    }
                }), i.enabled && (t.enabled = i.enabled), t.loaded_ = !0, t
            }
            return p(e, r), e
        }(Gt),
        bi = function(r) {
            function e(e) {
                var t;
                void 0 === e && (e = {});
                var i = Ne(e, {
                    kind: Ht[e.kind] || ""
                });
                t = r.call(this, i) || this;
                var n = !1;
                return Object.defineProperty(f(f(t)), "selected", {
                    get: function() {
                        return n
                    },
                    set: function(e) {
                        "boolean" == typeof e && e !== n && (n = e, this.trigger("selectedchange"))
                    }
                }), i.selected && (t.selected = i.selected), t
            }
            return p(e, r), e
        }(Gt),
        Ti = function(r) {
            function e(e) {
                var t, i;
                void 0 === e && (e = {}), t = r.call(this) || this;
                var n = new vi(e);
                return t.kind = n.kind, t.src = n.src, t.srclang = n.language, t.label = n.label, t.default = n.default, Object.defineProperties(f(f(t)), {
                    readyState: {
                        get: function() {
                            return i
                        }
                    },
                    track: {
                        get: function() {
                            return n
                        }
                    }
                }), i = 0, n.addEventListener("loadeddata", function() {
                    i = 2, t.trigger({
                        type: "load",
                        target: f(f(t))
                    })
                }), t
            }
            return p(e, r), e
        }(we);
    Ti.prototype.allowedEvents_ = {
        load: "load"
    }, Ti.NONE = 0, Ti.LOADING = 1, Ti.LOADED = 2, Ti.ERROR = 3;
    var Si = {
        audio: {
            ListClass: Mt,
            TrackClass: _i,
            capitalName: "Audio"
        },
        video: {
            ListClass: Nt,
            TrackClass: bi,
            capitalName: "Video"
        },
        text: {
            ListClass: jt,
            TrackClass: vi,
            capitalName: "Text"
        }
    };
    Object.keys(Si).forEach(function(e) {
        Si[e].getterName = e + "Tracks", Si[e].privateName = e + "Tracks_"
    });
    var ki = {
            remoteText: {
                ListClass: jt,
                TrackClass: vi,
                capitalName: "RemoteText",
                getterName: "remoteTextTracks",
                privateName: "remoteTextTracks_"
            },
            remoteTextEl: {
                ListClass: Ft,
                TrackClass: Ti,
                capitalName: "RemoteTextTrackEls",
                getterName: "remoteTextTrackEls",
                privateName: "remoteTextTrackEls_"
            }
        },
        Ci = Ne(Si, ki);
    ki.names = Object.keys(ki), Si.names = Object.keys(Si), Ci.names = [].concat(ki.names).concat(Si.names);
    var wi = Object.create || function() {
        function t() {}
        return function(e) {
            if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
            return t.prototype = e, new t
        }
    }();

    function Ei(e, t) {
        this.name = "ParsingError", this.code = e.code, this.message = t || e.message
    }

    function Ai(e) {
        function t(e, t, i, n) {
            return 3600 * (0 | e) + 60 * (0 | t) + (0 | i) + (0 | n) / 1e3
        }
        var i = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
        return i ? i[3] ? t(i[1], i[2], i[3].replace(":", ""), i[4]) : 59 < i[1] ? t(i[1], i[2], 0, i[4]) : t(0, i[1], i[2], i[4]) : null
    }

    function Li() {
        this.values = wi(null)
    }

    function Pi(e, t, i, n) {
        var r = n ? e.split(n) : [e];
        for (var a in r)
            if ("string" == typeof r[a]) {
                var s = r[a].split(i);
                if (2 === s.length) t(s[0], s[1])
            }
    }

    function Oi(t, e, a) {
        var i, n, s, r = t;

        function o() {
            var e = Ai(t);
            if (null === e) throw new Ei(Ei.Errors.BadTimeStamp, "Malformed timestamp: " + r);
            return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e
        }

        function u() {
            t = t.replace(/^\s+/, "")
        }
        if (u(), e.startTime = o(), u(), "--\x3e" !== t.substr(0, 3)) throw new Ei(Ei.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '--\x3e'): " + r);
        t = t.substr(3), u(), e.endTime = o(), u(), i = t, n = e, s = new Li, Pi(i, function(e, t) {
            switch (e) {
                case "region":
                    for (var i = a.length - 1; 0 <= i; i--)
                        if (a[i].id === t) {
                            s.set(e, a[i].region);
                            break
                        } break;
                case "vertical":
                    s.alt(e, t, ["rl", "lr"]);
                    break;
                case "line":
                    var n = t.split(","),
                        r = n[0];
                    s.integer(e, r), s.percent(e, r) && s.set("snapToLines", !1), s.alt(e, r, ["auto"]), 2 === n.length && s.alt("lineAlign", n[1], ["start", "middle", "end"]);
                    break;
                case "position":
                    n = t.split(","), s.percent(e, n[0]), 2 === n.length && s.alt("positionAlign", n[1], ["start", "middle", "end"]);
                    break;
                case "size":
                    s.percent(e, t);
                    break;
                case "align":
                    s.alt(e, t, ["start", "middle", "end", "left", "right"])
            }
        }, /:/, /\s/), n.region = s.get("region", null), n.vertical = s.get("vertical", ""), n.line = s.get("line", "auto"), n.lineAlign = s.get("lineAlign", "start"), n.snapToLines = s.get("snapToLines", !0), n.size = s.get("size", 100), n.align = s.get("align", "middle"), n.position = s.get("position", {
            start: 0,
            left: 0,
            middle: 50,
            end: 100,
            right: 100
        }, n.align), n.positionAlign = s.get("positionAlign", {
            start: "start",
            left: "start",
            middle: "middle",
            end: "end",
            right: "end"
        }, n.align)
    }((Ei.prototype = wi(Error.prototype)).constructor = Ei).Errors = {
        BadSignature: {
            code: 0,
            message: "Malformed WebVTT signature."
        },
        BadTimeStamp: {
            code: 1,
            message: "Malformed time stamp."
        }
    }, Li.prototype = {
        set: function(e, t) {
            this.get(e) || "" === t || (this.values[e] = t)
        },
        get: function(e, t, i) {
            return i ? this.has(e) ? this.values[e] : t[i] : this.has(e) ? this.values[e] : t
        },
        has: function(e) {
            return e in this.values
        },
        alt: function(e, t, i) {
            for (var n = 0; n < i.length; ++n)
                if (t === i[n]) {
                    this.set(e, t);
                    break
                }
        },
        integer: function(e, t) {
            /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
        },
        percent: function(e, t) {
            return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && 0 <= (t = parseFloat(t)) && t <= 100) && (this.set(e, t), !0)
        }
    };
    var Ii = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&lrm;": "‎",
            "&rlm;": "‏",
            "&nbsp;": " "
        },
        Ui = {
            c: "span",
            i: "i",
            b: "b",
            u: "u",
            ruby: "ruby",
            rt: "rt",
            v: "span",
            lang: "span"
        },
        xi = {
            v: "title",
            lang: "lang"
        },
        Di = {
            rt: "ruby"
        };

    function Ri(a, i) {
        function e() {
            if (!i) return null;
            var e, t = i.match(/^([^<]*)(<[^>]*>?)?/);
            return e = t[1] ? t[1] : t[2], i = i.substr(e.length), e
        }

        function t(e) {
            return Ii[e]
        }

        function n(e) {
            for (; f = e.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) e = e.replace(f[0], t);
            return e
        }

        function r(e, t) {
            var i = Ui[e];
            if (!i) return null;
            var n = a.document.createElement(i);
            n.localName = i;
            var r = xi[e];
            return r && t && (n[r] = t.trim()), n
        }
        for (var s, o, u, l = a.document.createElement("div"), c = l, h = []; null !== (s = e());)
            if ("<" !== s[0]) c.appendChild(a.document.createTextNode(n(s)));
            else {
                if ("/" === s[1]) {
                    h.length && h[h.length - 1] === s.substr(2).replace(">", "") && (h.pop(), c = c.parentNode);
                    continue
                }
                var d, p = Ai(s.substr(1, s.length - 2));
                if (p) {
                    d = a.document.createProcessingInstruction("timestamp", p), c.appendChild(d);
                    continue
                }
                var f = s.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                if (!f) continue;
                if (!(d = r(f[1], f[3]))) continue;
                if (o = c, Di[(u = d).localName] && Di[u.localName] !== o.localName) continue;
                f[2] && (d.className = f[2].substr(1).replace(".", " ")), h.push(f[1]), c.appendChild(d), c = d
            } return l
    }
    var Mi = [
        [1470, 1470],
        [1472, 1472],
        [1475, 1475],
        [1478, 1478],
        [1488, 1514],
        [1520, 1524],
        [1544, 1544],
        [1547, 1547],
        [1549, 1549],
        [1563, 1563],
        [1566, 1610],
        [1645, 1647],
        [1649, 1749],
        [1765, 1766],
        [1774, 1775],
        [1786, 1805],
        [1807, 1808],
        [1810, 1839],
        [1869, 1957],
        [1969, 1969],
        [1984, 2026],
        [2036, 2037],
        [2042, 2042],
        [2048, 2069],
        [2074, 2074],
        [2084, 2084],
        [2088, 2088],
        [2096, 2110],
        [2112, 2136],
        [2142, 2142],
        [2208, 2208],
        [2210, 2220],
        [8207, 8207],
        [64285, 64285],
        [64287, 64296],
        [64298, 64310],
        [64312, 64316],
        [64318, 64318],
        [64320, 64321],
        [64323, 64324],
        [64326, 64449],
        [64467, 64829],
        [64848, 64911],
        [64914, 64967],
        [65008, 65020],
        [65136, 65140],
        [65142, 65276],
        [67584, 67589],
        [67592, 67592],
        [67594, 67637],
        [67639, 67640],
        [67644, 67644],
        [67647, 67669],
        [67671, 67679],
        [67840, 67867],
        [67872, 67897],
        [67903, 67903],
        [67968, 68023],
        [68030, 68031],
        [68096, 68096],
        [68112, 68115],
        [68117, 68119],
        [68121, 68147],
        [68160, 68167],
        [68176, 68184],
        [68192, 68223],
        [68352, 68405],
        [68416, 68437],
        [68440, 68466],
        [68472, 68479],
        [68608, 68680],
        [126464, 126467],
        [126469, 126495],
        [126497, 126498],
        [126500, 126500],
        [126503, 126503],
        [126505, 126514],
        [126516, 126519],
        [126521, 126521],
        [126523, 126523],
        [126530, 126530],
        [126535, 126535],
        [126537, 126537],
        [126539, 126539],
        [126541, 126543],
        [126545, 126546],
        [126548, 126548],
        [126551, 126551],
        [126553, 126553],
        [126555, 126555],
        [126557, 126557],
        [126559, 126559],
        [126561, 126562],
        [126564, 126564],
        [126567, 126570],
        [126572, 126578],
        [126580, 126583],
        [126585, 126588],
        [126590, 126590],
        [126592, 126601],
        [126603, 126619],
        [126625, 126627],
        [126629, 126633],
        [126635, 126651],
        [1114109, 1114109]
    ];

    function Bi(e) {
        for (var t = 0; t < Mi.length; t++) {
            var i = Mi[t];
            if (e >= i[0] && e <= i[1]) return !0
        }
        return !1
    }

    function Ni() {}

    function ji(e, t, i) {
        Ni.call(this), this.cue = t, this.cueDiv = Ri(e, t.text);
        var n = {
            color: "rgba(255, 255, 255, 1)",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            position: "relative",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "inline",
            writingMode: "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl",
            unicodeBidi: "plaintext"
        };
        this.applyStyles(n, this.cueDiv), this.div = e.document.createElement("div"), n = {
            direction: function(e) {
                var t = [],
                    i = "";
                if (!e || !e.childNodes) return "ltr";

                function r(e, t) {
                    for (var i = t.childNodes.length - 1; 0 <= i; i--) e.push(t.childNodes[i])
                }

                function a(e) {
                    if (!e || !e.length) return null;
                    var t = e.pop(),
                        i = t.textContent || t.innerText;
                    if (i) {
                        var n = i.match(/^.*(\n|\r)/);
                        return n ? n[e.length = 0] : i
                    }
                    return "ruby" === t.tagName ? a(e) : t.childNodes ? (r(e, t), a(e)) : void 0
                }
                for (r(t, e); i = a(t);)
                    for (var n = 0; n < i.length; n++)
                        if (Bi(i.charCodeAt(n))) return "rtl";
                return "ltr"
            }(this.cueDiv),
            writingMode: "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl",
            unicodeBidi: "plaintext",
            textAlign: "middle" === t.align ? "center" : t.align,
            font: i.font,
            whiteSpace: "pre-line",
            position: "absolute"
        }, this.applyStyles(n), this.div.appendChild(this.cueDiv);
        var r = 0;
        switch (t.positionAlign) {
            case "start":
                r = t.position;
                break;
            case "middle":
                r = t.position - t.size / 2;
                break;
            case "end":
                r = t.position - t.size
        }
        "" === t.vertical ? this.applyStyles({
            left: this.formatStyle(r, "%"),
            width: this.formatStyle(t.size, "%")
        }) : this.applyStyles({
            top: this.formatStyle(r, "%"),
            height: this.formatStyle(t.size, "%")
        }), this.move = function(e) {
            this.applyStyles({
                top: this.formatStyle(e.top, "px"),
                bottom: this.formatStyle(e.bottom, "px"),
                left: this.formatStyle(e.left, "px"),
                right: this.formatStyle(e.right, "px"),
                height: this.formatStyle(e.height, "px"),
                width: this.formatStyle(e.width, "px")
            })
        }
    }

    function Fi(e) {
        var t, i, n, r;
        if (e.div) {
            i = e.div.offsetHeight, n = e.div.offsetWidth, r = e.div.offsetTop;
            var a = (a = e.div.childNodes) && (a = a[0]) && a.getClientRects && a.getClientRects();
            e = e.div.getBoundingClientRect(), t = a ? Math.max(a[0] && a[0].height || 0, e.height / a.length) : 0
        }
        this.left = e.left, this.right = e.right, this.top = e.top || r, this.height = e.height || i, this.bottom = e.bottom || r + (e.height || i), this.width = e.width || n, this.lineHeight = void 0 !== t ? t : e.lineHeight
    }

    function Vi(e, t, o, u) {
        var i = new Fi(t),
            n = t.cue,
            r = function(e) {
                if ("number" == typeof e.line && (e.snapToLines || 0 <= e.line && e.line <= 100)) return e.line;
                if (!e.track || !e.track.textTrackList || !e.track.textTrackList.mediaElement) return -1;
                for (var t = e.track, i = t.textTrackList, n = 0, r = 0; r < i.length && i[r] !== t; r++) "showing" === i[r].mode && n++;
                return -1 * ++n
            }(n),
            a = [];
        if (n.snapToLines) {
            var s;
            switch (n.vertical) {
                case "":
                    a = ["+y", "-y"], s = "height";
                    break;
                case "rl":
                    a = ["+x", "-x"], s = "width";
                    break;
                case "lr":
                    a = ["-x", "+x"], s = "width"
            }
            var l = i.lineHeight,
                c = l * Math.round(r),
                h = o[s] + l,
                d = a[0];
            Math.abs(c) > h && (c = c < 0 ? -1 : 1, c *= Math.ceil(h / l) * l), r < 0 && (c += "" === n.vertical ? o.height : o.width, a = a.reverse()), i.move(d, c)
        } else {
            var p = i.lineHeight / o.height * 100;
            switch (n.lineAlign) {
                case "middle":
                    r -= p / 2;
                    break;
                case "end":
                    r -= p
            }
            switch (n.vertical) {
                case "":
                    t.applyStyles({
                        top: t.formatStyle(r, "%")
                    });
                    break;
                case "rl":
                    t.applyStyles({
                        left: t.formatStyle(r, "%")
                    });
                    break;
                case "lr":
                    t.applyStyles({
                        right: t.formatStyle(r, "%")
                    })
            }
            a = ["+y", "-x", "+x", "-y"], i = new Fi(t)
        }
        var f = function(e, t) {
            for (var i, n = new Fi(e), r = 1, a = 0; a < t.length; a++) {
                for (; e.overlapsOppositeAxis(o, t[a]) || e.within(o) && e.overlapsAny(u);) e.move(t[a]);
                if (e.within(o)) return e;
                var s = e.intersectPercentage(o);
                s < r && (i = new Fi(e), r = s), e = new Fi(n)
            }
            return i || n
        }(i, a);
        t.move(f.toCSSCompatValues(o))
    }

    function Hi() {}
    Ni.prototype.applyStyles = function(e, t) {
        for (var i in t = t || this.div, e) e.hasOwnProperty(i) && (t.style[i] = e[i])
    }, Ni.prototype.formatStyle = function(e, t) {
        return 0 === e ? 0 : e + t
    }, (ji.prototype = wi(Ni.prototype)).constructor = ji, Fi.prototype.move = function(e, t) {
        switch (t = void 0 !== t ? t : this.lineHeight, e) {
            case "+x":
                this.left += t, this.right += t;
                break;
            case "-x":
                this.left -= t, this.right -= t;
                break;
            case "+y":
                this.top += t, this.bottom += t;
                break;
            case "-y":
                this.top -= t, this.bottom -= t
        }
    }, Fi.prototype.overlaps = function(e) {
        return this.left < e.right && this.right > e.left && this.top < e.bottom && this.bottom > e.top
    }, Fi.prototype.overlapsAny = function(e) {
        for (var t = 0; t < e.length; t++)
            if (this.overlaps(e[t])) return !0;
        return !1
    }, Fi.prototype.within = function(e) {
        return this.top >= e.top && this.bottom <= e.bottom && this.left >= e.left && this.right <= e.right
    }, Fi.prototype.overlapsOppositeAxis = function(e, t) {
        switch (t) {
            case "+x":
                return this.left < e.left;
            case "-x":
                return this.right > e.right;
            case "+y":
                return this.top < e.top;
            case "-y":
                return this.bottom > e.bottom
        }
    }, Fi.prototype.intersectPercentage = function(e) {
        return Math.max(0, Math.min(this.right, e.right) - Math.max(this.left, e.left)) * Math.max(0, Math.min(this.bottom, e.bottom) - Math.max(this.top, e.top)) / (this.height * this.width)
    }, Fi.prototype.toCSSCompatValues = function(e) {
        return {
            top: this.top - e.top,
            bottom: e.bottom - this.bottom,
            left: this.left - e.left,
            right: e.right - this.right,
            height: this.height,
            width: this.width
        }
    }, Fi.getSimpleBoxPosition = function(e) {
        var t = e.div ? e.div.offsetHeight : e.tagName ? e.offsetHeight : 0,
            i = e.div ? e.div.offsetWidth : e.tagName ? e.offsetWidth : 0,
            n = e.div ? e.div.offsetTop : e.tagName ? e.offsetTop : 0;
        return {
            left: (e = e.div ? e.div.getBoundingClientRect() : e.tagName ? e.getBoundingClientRect() : e).left,
            right: e.right,
            top: e.top || n,
            height: e.height || t,
            bottom: e.bottom || n + (e.height || t),
            width: e.width || i
        }
    }, Hi.StringDecoder = function() {
        return {
            decode: function(e) {
                if (!e) return "";
                if ("string" != typeof e) throw new Error("Error - expected string data.");
                return decodeURIComponent(encodeURIComponent(e))
            }
        }
    }, Hi.convertCueToDOMTree = function(e, t) {
        return e && t ? Ri(e, t) : null
    };
    Hi.processCues = function(n, r, e) {
        if (!n || !r || !e) return null;
        for (; e.firstChild;) e.removeChild(e.firstChild);
        var a = n.document.createElement("div");
        if (a.style.position = "absolute", a.style.left = "0", a.style.right = "0", a.style.top = "0", a.style.bottom = "0", a.style.margin = "1.5%", e.appendChild(a), function(e) {
                for (var t = 0; t < e.length; t++)
                    if (e[t].hasBeenReset || !e[t].displayState) return !0;
                return !1
            }(r)) {
            var s = [],
                o = Fi.getSimpleBoxPosition(a),
                u = {
                    font: Math.round(.05 * o.height * 100) / 100 + "px sans-serif"
                };
            ! function() {
                for (var e, t, i = 0; i < r.length; i++) t = r[i], e = new ji(n, t, u), a.appendChild(e.div), Vi(0, e, o, s), t.displayState = e.div, s.push(Fi.getSimpleBoxPosition(e))
            }()
        } else
            for (var t = 0; t < r.length; t++) a.appendChild(r[t].displayState)
    }, (Hi.Parser = function(e, t, i) {
        i || (i = t, t = {}), t || (t = {}), this.window = e, this.vttjs = t, this.state = "INITIAL", this.buffer = "", this.decoder = i || new TextDecoder("utf8"), this.regionList = []
    }).prototype = {
        reportOrThrowError: function(e) {
            if (!(e instanceof Ei)) throw e;
            this.onparsingerror && this.onparsingerror(e)
        },
        parse: function(e) {
            var a = this;

            function t() {
                for (var e = a.buffer, t = 0; t < e.length && "\r" !== e[t] && "\n" !== e[t];) ++t;
                var i = e.substr(0, t);
                return "\r" === e[t] && ++t, "\n" === e[t] && ++t, a.buffer = e.substr(t), i
            }

            function i(e) {
                e.match(/X-TIMESTAMP-MAP/) ? Pi(e, function(e, t) {
                    switch (e) {
                        case "X-TIMESTAMP-MAP":
                            i = t, n = new Li, Pi(i, function(e, t) {
                                switch (e) {
                                    case "MPEGT":
                                        n.integer(e + "S", t);
                                        break;
                                    case "LOCA":
                                        n.set(e + "L", Ai(t))
                                }
                            }, /[^\d]:/, /,/), a.ontimestampmap && a.ontimestampmap({
                                MPEGTS: n.get("MPEGTS"),
                                LOCAL: n.get("LOCAL")
                            })
                    }
                    var i, n
                }, /=/) : Pi(e, function(e, t) {
                    switch (e) {
                        case "Region":
                            ! function(e) {
                                var r = new Li;
                                if (Pi(e, function(e, t) {
                                        switch (e) {
                                            case "id":
                                                r.set(e, t);
                                                break;
                                            case "width":
                                                r.percent(e, t);
                                                break;
                                            case "lines":
                                                r.integer(e, t);
                                                break;
                                            case "regionanchor":
                                            case "viewportanchor":
                                                var i = t.split(",");
                                                if (2 !== i.length) break;
                                                var n = new Li;
                                                if (n.percent("x", i[0]), n.percent("y", i[1]), !n.has("x") || !n.has("y")) break;
                                                r.set(e + "X", n.get("x")), r.set(e + "Y", n.get("y"));
                                                break;
                                            case "scroll":
                                                r.alt(e, t, ["up"])
                                        }
                                    }, /=/, /\s/), r.has("id")) {
                                    var t = new(a.vttjs.VTTRegion || a.window.VTTRegion);
                                    t.width = r.get("width", 100), t.lines = r.get("lines", 3), t.regionAnchorX = r.get("regionanchorX", 0), t.regionAnchorY = r.get("regionanchorY", 100), t.viewportAnchorX = r.get("viewportanchorX", 0), t.viewportAnchorY = r.get("viewportanchorY", 100), t.scroll = r.get("scroll", ""), a.onregion && a.onregion(t), a.regionList.push({
                                        id: r.get("id"),
                                        region: t
                                    })
                                }
                            }(t)
                    }
                }, /:/)
            }
            e && (a.buffer += a.decoder.decode(e, {
                stream: !0
            }));
            try {
                var n;
                if ("INITIAL" === a.state) {
                    if (!/\r\n|\n/.test(a.buffer)) return this;
                    var r = (n = t()).match(/^WEBVTT([ \t].*)?$/);
                    if (!r || !r[0]) throw new Ei(Ei.Errors.BadSignature);
                    a.state = "HEADER"
                }
                for (var s = !1; a.buffer;) {
                    if (!/\r\n|\n/.test(a.buffer)) return this;
                    switch (s ? s = !1 : n = t(), a.state) {
                        case "HEADER":
                            /:/.test(n) ? i(n) : n || (a.state = "ID");
                            continue;
                        case "NOTE":
                            n || (a.state = "ID");
                            continue;
                        case "ID":
                            if (/^NOTE($|[ \t])/.test(n)) {
                                a.state = "NOTE";
                                break
                            }
                            if (!n) continue;
                            if (a.cue = new(a.vttjs.VTTCue || a.window.VTTCue)(0, 0, ""), a.state = "CUE", -1 === n.indexOf("--\x3e")) {
                                a.cue.id = n;
                                continue
                            }
                            case "CUE":
                                try {
                                    Oi(n, a.cue, a.regionList)
                                } catch (e) {
                                    a.reportOrThrowError(e), a.cue = null, a.state = "BADCUE";
                                    continue
                                }
                                a.state = "CUETEXT";
                                continue;
                            case "CUETEXT":
                                var o = -1 !== n.indexOf("--\x3e");
                                if (!n || o && (s = !0)) {
                                    a.oncue && a.oncue(a.cue), a.cue = null, a.state = "ID";
                                    continue
                                }
                                a.cue.text && (a.cue.text += "\n"), a.cue.text += n;
                                continue;
                            case "BADCUE":
                                n || (a.state = "ID");
                                continue
                    }
                }
            } catch (e) {
                a.reportOrThrowError(e), "CUETEXT" === a.state && a.cue && a.oncue && a.oncue(a.cue), a.cue = null, a.state = "INITIAL" === a.state ? "BADWEBVTT" : "BADCUE"
            }
            return this
        },
        flush: function() {
            var t = this;
            try {
                if (t.buffer += t.decoder.decode(), (t.cue || "HEADER" === t.state) && (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state) throw new Ei(Ei.Errors.BadSignature)
            } catch (e) {
                t.reportOrThrowError(e)
            }
            return t.onflush && t.onflush(), this
        }
    };
    var qi = Hi,
        zi = {
            "": 1,
            lr: 1,
            rl: 1
        },
        Wi = {
            start: 1,
            middle: 1,
            end: 1,
            left: 1,
            right: 1
        };

    function Gi(e) {
        return "string" == typeof e && (!!Wi[e.toLowerCase()] && e.toLowerCase())
    }

    function Xi(e, t, i) {
        this.hasBeenReset = !1;
        var n = "",
            r = !1,
            a = e,
            s = t,
            o = i,
            u = null,
            l = "",
            c = !0,
            h = "auto",
            d = "start",
            p = 50,
            f = "middle",
            m = 50,
            g = "middle";
        Object.defineProperties(this, {
            id: {
                enumerable: !0,
                get: function() {
                    return n
                },
                set: function(e) {
                    n = "" + e
                }
            },
            pauseOnExit: {
                enumerable: !0,
                get: function() {
                    return r
                },
                set: function(e) {
                    r = !!e
                }
            },
            startTime: {
                enumerable: !0,
                get: function() {
                    return a
                },
                set: function(e) {
                    if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
                    a = e, this.hasBeenReset = !0
                }
            },
            endTime: {
                enumerable: !0,
                get: function() {
                    return s
                },
                set: function(e) {
                    if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
                    s = e, this.hasBeenReset = !0
                }
            },
            text: {
                enumerable: !0,
                get: function() {
                    return o
                },
                set: function(e) {
                    o = "" + e, this.hasBeenReset = !0
                }
            },
            region: {
                enumerable: !0,
                get: function() {
                    return u
                },
                set: function(e) {
                    u = e, this.hasBeenReset = !0
                }
            },
            vertical: {
                enumerable: !0,
                get: function() {
                    return l
                },
                set: function(e) {
                    var t, i = "string" == typeof(t = e) && !!zi[t.toLowerCase()] && t.toLowerCase();
                    if (!1 === i) throw new SyntaxError("An invalid or illegal string was specified.");
                    l = i, this.hasBeenReset = !0
                }
            },
            snapToLines: {
                enumerable: !0,
                get: function() {
                    return c
                },
                set: function(e) {
                    c = !!e, this.hasBeenReset = !0
                }
            },
            line: {
                enumerable: !0,
                get: function() {
                    return h
                },
                set: function(e) {
                    if ("number" != typeof e && "auto" !== e) throw new SyntaxError("An invalid number or illegal string was specified.");
                    h = e, this.hasBeenReset = !0
                }
            },
            lineAlign: {
                enumerable: !0,
                get: function() {
                    return d
                },
                set: function(e) {
                    var t = Gi(e);
                    if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                    d = t, this.hasBeenReset = !0
                }
            },
            position: {
                enumerable: !0,
                get: function() {
                    return p
                },
                set: function(e) {
                    if (e < 0 || 100 < e) throw new Error("Position must be between 0 and 100.");
                    p = e, this.hasBeenReset = !0
                }
            },
            positionAlign: {
                enumerable: !0,
                get: function() {
                    return f
                },
                set: function(e) {
                    var t = Gi(e);
                    if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                    f = t, this.hasBeenReset = !0
                }
            },
            size: {
                enumerable: !0,
                get: function() {
                    return m
                },
                set: function(e) {
                    if (e < 0 || 100 < e) throw new Error("Size must be between 0 and 100.");
                    m = e, this.hasBeenReset = !0
                }
            },
            align: {
                enumerable: !0,
                get: function() {
                    return g
                },
                set: function(e) {
                    var t = Gi(e);
                    if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                    g = t, this.hasBeenReset = !0
                }
            }
        }), this.displayState = void 0
    }
    Xi.prototype.getCueAsHTML = function() {
        return WebVTT.convertCueToDOMTree(window, this.text)
    };
    var Yi = Xi,
        Ki = {
            "": !0,
            up: !0
        };

    function $i(e) {
        return "number" == typeof e && 0 <= e && e <= 100
    }
    var Qi = function() {
            var t = 100,
                i = 3,
                n = 0,
                r = 100,
                a = 0,
                s = 100,
                o = "";
            Object.defineProperties(this, {
                width: {
                    enumerable: !0,
                    get: function() {
                        return t
                    },
                    set: function(e) {
                        if (!$i(e)) throw new Error("Width must be between 0 and 100.");
                        t = e
                    }
                },
                lines: {
                    enumerable: !0,
                    get: function() {
                        return i
                    },
                    set: function(e) {
                        if ("number" != typeof e) throw new TypeError("Lines must be set to a number.");
                        i = e
                    }
                },
                regionAnchorY: {
                    enumerable: !0,
                    get: function() {
                        return r
                    },
                    set: function(e) {
                        if (!$i(e)) throw new Error("RegionAnchorX must be between 0 and 100.");
                        r = e
                    }
                },
                regionAnchorX: {
                    enumerable: !0,
                    get: function() {
                        return n
                    },
                    set: function(e) {
                        if (!$i(e)) throw new Error("RegionAnchorY must be between 0 and 100.");
                        n = e
                    }
                },
                viewportAnchorY: {
                    enumerable: !0,
                    get: function() {
                        return s
                    },
                    set: function(e) {
                        if (!$i(e)) throw new Error("ViewportAnchorY must be between 0 and 100.");
                        s = e
                    }
                },
                viewportAnchorX: {
                    enumerable: !0,
                    get: function() {
                        return a
                    },
                    set: function(e) {
                        if (!$i(e)) throw new Error("ViewportAnchorX must be between 0 and 100.");
                        a = e
                    }
                },
                scroll: {
                    enumerable: !0,
                    get: function() {
                        return o
                    },
                    set: function(e) {
                        var t, i = "string" == typeof(t = e) && !!Ki[t.toLowerCase()] && t.toLowerCase();
                        if (!1 === i) throw new SyntaxError("An invalid or illegal string was specified.");
                        o = i
                    }
                }
            })
        },
        Ji = Pt(function(e) {
            var t = e.exports = {
                WebVTT: qi,
                VTTCue: Yi,
                VTTRegion: Qi
            };
            v.vttjs = t, v.WebVTT = t.WebVTT;
            var i = t.VTTCue,
                n = t.VTTRegion,
                r = v.VTTCue,
                a = v.VTTRegion;
            t.shim = function() {
                v.VTTCue = i, v.VTTRegion = n
            }, t.restore = function() {
                v.VTTCue = r, v.VTTRegion = a
            }, v.VTTCue || t.shim()
        });
    Ji.WebVTT, Ji.VTTCue, Ji.VTTRegion;
    var Zi = function(t) {
        function i(i, e) {
            var n;
            return void 0 === i && (i = {}), void 0 === e && (e = function() {}), i.reportTouchActivity = !1, (n = t.call(this, null, i, e) || this).hasStarted_ = !1, n.on("playing", function() {
                this.hasStarted_ = !0
            }), n.on("loadstart", function() {
                this.hasStarted_ = !1
            }), Ci.names.forEach(function(e) {
                var t = Ci[e];
                i && i[t.getterName] && (n[t.privateName] = i[t.getterName])
            }), n.featuresProgressEvents || n.manualProgressOn(), n.featuresTimeupdateEvents || n.manualTimeUpdatesOn(), ["Text", "Audio", "Video"].forEach(function(e) {
                !1 === i["native" + e + "Tracks"] && (n["featuresNative" + e + "Tracks"] = !1)
            }), !1 === i.nativeCaptions || !1 === i.nativeTextTracks ? n.featuresNativeTextTracks = !1 : !0 !== i.nativeCaptions && !0 !== i.nativeTextTracks || (n.featuresNativeTextTracks = !0), n.featuresNativeTextTracks || n.emulateTextTracks(), n.autoRemoteTextTracks_ = new Ci.text.ListClass, n.initTrackListeners(), i.nativeControlsForTouch || n.emitTapEvents(), n.constructor && (n.name_ = n.constructor.name || "Unknown Tech"), n
        }
        p(i, t);
        var e = i.prototype;
        return e.triggerSourceset = function(e) {
            var t = this;
            this.isReady_ || this.one("ready", function() {
                return t.setTimeout(function() {
                    return t.triggerSourceset(e)
                }, 1)
            }), this.trigger({
                src: e,
                type: "sourceset"
            })
        }, e.manualProgressOn = function() {
            this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress)
        }, e.manualProgressOff = function() {
            this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange)
        }, e.trackProgress = function(e) {
            this.stopTrackingProgress(), this.progressInterval = this.setInterval(ke(this, function() {
                var e = this.bufferedPercent();
                this.bufferedPercent_ !== e && this.trigger("progress"), 1 === (this.bufferedPercent_ = e) && this.stopTrackingProgress()
            }), 500)
        }, e.onDurationChange = function(e) {
            this.duration_ = this.duration()
        }, e.buffered = function() {
            return dt(0, 0)
        }, e.bufferedPercent = function() {
            return pt(this.buffered(), this.duration_)
        }, e.stopTrackingProgress = function() {
            this.clearInterval(this.progressInterval)
        }, e.manualTimeUpdatesOn = function() {
            this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime)
        }, e.manualTimeUpdatesOff = function() {
            this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
        }, e.trackCurrentTime = function() {
            this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function() {
                this.trigger({
                    type: "timeupdate",
                    target: this,
                    manuallyTriggered: !0
                })
            }, 250)
        }, e.stopTrackingCurrentTime = function() {
            this.clearInterval(this.currentTimeInterval), this.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            })
        }, e.dispose = function() {
            this.clearTracks(Si.names), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), t.prototype.dispose.call(this)
        }, e.clearTracks = function(e) {
            var r = this;
            (e = [].concat(e)).forEach(function(e) {
                for (var t = r[e + "Tracks"]() || [], i = t.length; i--;) {
                    var n = t[i];
                    "text" === e && r.removeRemoteTextTrack(n), t.removeTrack(n)
                }
            })
        }, e.cleanupAutoTextTracks = function() {
            for (var e = this.autoRemoteTextTracks_ || [], t = e.length; t--;) {
                var i = e[t];
                this.removeRemoteTextTrack(i)
            }
        }, e.reset = function() {}, e.error = function(e) {
            return void 0 !== e && (this.error_ = new Tt(e), this.trigger("error")), this.error_
        }, e.played = function() {
            return this.hasStarted_ ? dt(0, 0) : dt()
        }, e.setCurrentTime = function() {
            this.manualTimeUpdates && this.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            })
        }, e.initTrackListeners = function() {
            var r = this;
            Si.names.forEach(function(e) {
                var t = Si[e],
                    i = function() {
                        r.trigger(e + "trackchange")
                    },
                    n = r[t.getterName]();
                n.addEventListener("removetrack", i), n.addEventListener("addtrack", i), r.on("dispose", function() {
                    n.removeEventListener("removetrack", i), n.removeEventListener("addtrack", i)
                })
            })
        }, e.addWebVttScript_ = function() {
            var e = this;
            if (!v.WebVTT)
                if (h.body.contains(this.el())) {
                    if (!this.options_["vtt.js"] && l(Ji) && 0 < Object.keys(Ji).length) return void this.trigger("vttjsloaded");
                    var t = h.createElement("script");
                    t.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js", t.onload = function() {
                        e.trigger("vttjsloaded")
                    }, t.onerror = function() {
                        e.trigger("vttjserror")
                    }, this.on("dispose", function() {
                        t.onload = null, t.onerror = null
                    }), v.WebVTT = !0, this.el().parentNode.appendChild(t)
                } else this.ready(this.addWebVttScript_)
        }, e.emulateTextTracks = function() {
            var e = this,
                i = this.textTracks(),
                t = this.remoteTextTracks(),
                n = function(e) {
                    return i.addTrack(e.track)
                },
                r = function(e) {
                    return i.removeTrack(e.track)
                };
            t.on("addtrack", n), t.on("removetrack", r), this.addWebVttScript_();
            var a = function() {
                    return e.trigger("texttrackchange")
                },
                s = function() {
                    a();
                    for (var e = 0; e < i.length; e++) {
                        var t = i[e];
                        t.removeEventListener("cuechange", a), "showing" === t.mode && t.addEventListener("cuechange", a)
                    }
                };
            s(), i.addEventListener("change", s), i.addEventListener("addtrack", s), i.addEventListener("removetrack", s), this.on("dispose", function() {
                t.off("addtrack", n), t.off("removetrack", r), i.removeEventListener("change", s), i.removeEventListener("addtrack", s), i.removeEventListener("removetrack", s);
                for (var e = 0; e < i.length; e++) {
                    i[e].removeEventListener("cuechange", a)
                }
            })
        }, e.addTextTrack = function(e, t, i) {
            if (!e) throw new Error("TextTrack kind is required but was not provided");
            return function(e, t, i, n, r) {
                void 0 === r && (r = {});
                var a = e.textTracks();
                r.kind = t, i && (r.label = i), n && (r.language = n), r.tech = e;
                var s = new Ci.text.TrackClass(r);
                return a.addTrack(s), s
            }(this, e, t, i)
        }, e.createRemoteTextTrack = function(e) {
            var t = Ne(e, {
                tech: this
            });
            return new ki.remoteTextEl.TrackClass(t)
        }, e.addRemoteTextTrack = function(e, t) {
            var i = this;
            void 0 === e && (e = {});
            var n = this.createRemoteTextTrack(e);
            return !0 !== t && !1 !== t && (m.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), t = !0), this.remoteTextTrackEls().addTrackElement_(n), this.remoteTextTracks().addTrack(n.track), !0 !== t && this.ready(function() {
                return i.autoRemoteTextTracks_.addTrack(n.track)
            }), n
        }, e.removeRemoteTextTrack = function(e) {
            var t = this.remoteTextTrackEls().getTrackElementByTrack_(e);
            this.remoteTextTrackEls().removeTrackElement_(t), this.remoteTextTracks().removeTrack(e), this.autoRemoteTextTracks_.removeTrack(e)
        }, e.getVideoPlaybackQuality = function() {
            return {}
        }, e.setPoster = function() {}, e.playsinline = function() {}, e.setPlaysinline = function() {}, e.overrideNativeAudioTracks = function() {}, e.overrideNativeVideoTracks = function() {}, e.canPlayType = function() {
            return ""
        }, i.canPlayType = function() {
            return ""
        }, i.canPlaySource = function(e, t) {
            return i.canPlayType(e.type)
        }, i.isTech = function(e) {
            return e.prototype instanceof i || e instanceof i || e === i
        }, i.registerTech = function(e, t) {
            if (i.techs_ || (i.techs_ = {}), !i.isTech(t)) throw new Error("Tech " + e + " must be a Tech");
            if (!i.canPlayType) throw new Error("Techs must have a static canPlayType method on them");
            if (!i.canPlaySource) throw new Error("Techs must have a static canPlaySource method on them");
            return e = Be(e), i.techs_[e] = t, "Tech" !== e && i.defaultTechOrder_.push(e), t
        }, i.getTech = function(e) {
            if (e) return e = Be(e), i.techs_ && i.techs_[e] ? i.techs_[e] : v && v.videojs && v.videojs[e] ? (m.warn("The " + e + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), v.videojs[e]) : void 0
        }, i
    }(je);
    Ci.names.forEach(function(e) {
        var t = Ci[e];
        Zi.prototype[t.getterName] = function() {
            return this[t.privateName] = this[t.privateName] || new t.ListClass, this[t.privateName]
        }
    }), Zi.prototype.featuresVolumeControl = !0, Zi.prototype.featuresMuteControl = !0, Zi.prototype.featuresFullscreenResize = !1, Zi.prototype.featuresPlaybackRate = !1, Zi.prototype.featuresProgressEvents = !1, Zi.prototype.featuresSourceset = !1, Zi.prototype.featuresTimeupdateEvents = !1, Zi.prototype.featuresNativeTextTracks = !1, Zi.withSourceHandlers = function(r) {
        r.registerSourceHandler = function(e, t) {
            var i = r.sourceHandlers;
            i || (i = r.sourceHandlers = []), void 0 === t && (t = i.length), i.splice(t, 0, e)
        }, r.canPlayType = function(e) {
            for (var t, i = r.sourceHandlers || [], n = 0; n < i.length; n++)
                if (t = i[n].canPlayType(e)) return t;
            return ""
        }, r.selectSourceHandler = function(e, t) {
            for (var i = r.sourceHandlers || [], n = 0; n < i.length; n++)
                if (i[n].canHandleSource(e, t)) return i[n];
            return null
        }, r.canPlaySource = function(e, t) {
            var i = r.selectSourceHandler(e, t);
            return i ? i.canHandleSource(e, t) : ""
        };
        ["seekable", "seeking", "duration"].forEach(function(e) {
            var t = this[e];
            "function" == typeof t && (this[e] = function() {
                return this.sourceHandler_ && this.sourceHandler_[e] ? this.sourceHandler_[e].apply(this.sourceHandler_, arguments) : t.apply(this, arguments)
            })
        }, r.prototype), r.prototype.setSource = function(e) {
            var t = r.selectSourceHandler(e, this.options_);
            t || (r.nativeSourceHandler ? t = r.nativeSourceHandler : m.error("No source handler found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), t !== r.nativeSourceHandler && (this.currentSource_ = e), this.sourceHandler_ = t.handleSource(e, this, this.options_), this.one("dispose", this.disposeSourceHandler)
        }, r.prototype.disposeSourceHandler = function() {
            this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null), this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null)
        }
    }, je.registerComponent("Tech", Zi), Zi.registerTech("Tech", Zi), Zi.defaultTechOrder_ = [];
    var en = {},
        tn = {},
        nn = {};

    function rn(e, t, i) {
        e.setTimeout(function() {
            return function i(n, e, r, a, s, o) {
                void 0 === n && (n = {});
                void 0 === e && (e = []);
                void 0 === s && (s = []);
                void 0 === o && (o = !1);
                var t = e,
                    u = t[0],
                    l = t.slice(1);
                if ("string" == typeof u) i(n, en[u], r, a, s, o);
                else if (u) {
                    var c = cn(a, u);
                    if (!c.setSource) return s.push(c), i(n, l, r, a, s, o);
                    c.setSource(_({}, n), function(e, t) {
                        if (e) return i(n, l, r, a, s, o);
                        s.push(c), i(t, n.type === t.type ? l : en[t.type], r, a, s, o)
                    })
                } else l.length ? i(n, l, r, a, s, o) : o ? r(n, s) : i(n, en["*"], r, a, s, !0)
            }(t, en[t.type], i, e)
        }, 1)
    }

    function an(e, t, i, n) {
        void 0 === n && (n = null);
        var r = "call" + Be(i),
            a = e.reduce(ln(r), n),
            s = a === nn,
            o = s ? null : t[i](a);
        return function(e, t, i, n) {
            for (var r = e.length - 1; 0 <= r; r--) {
                var a = e[r];
                a[t] && a[t](n, i)
            }
        }(e, i, o, s), o
    }
    var sn = {
            buffered: 1,
            currentTime: 1,
            duration: 1,
            seekable: 1,
            played: 1,
            paused: 1
        },
        on = {
            setCurrentTime: 1
        },
        un = {
            play: 1,
            pause: 1
        };

    function ln(i) {
        return function(e, t) {
            return e === nn ? nn : t[i] ? t[i](e) : e
        }
    }

    function cn(e, t) {
        var i = tn[e.id()],
            n = null;
        if (null == i) return n = t(e), tn[e.id()] = [
            [t, n]
        ], n;
        for (var r = 0; r < i.length; r++) {
            var a = i[r],
                s = a[0],
                o = a[1];
            s === t && (n = o)
        }
        return null === n && (n = t(e), i.push([t, n])), n
    }
    var hn = {
            opus: "video/ogg",
            ogv: "video/ogg",
            mp4: "video/mp4",
            mov: "video/mp4",
            m4v: "video/mp4",
            mkv: "video/x-matroska",
            mp3: "audio/mpeg",
            aac: "audio/aac",
            oga: "audio/ogg",
            m3u8: "application/x-mpegURL",
            jpg: "image/jpeg",
            jpeg: "image/jpeg",
            gif: "image/gif",
            png: "image/png",
            svg: "image/svg+xml",
            webp: "image/webp"
        },
        dn = function(e) {
            void 0 === e && (e = "");
            var t = Kt(e);
            return hn[t.toLowerCase()] || ""
        };

    function pn(e) {
        var t = dn(e.src);
        return !e.type && t && (e.type = t), e
    }
    var fn = function(l) {
        function e(e, t, i) {
            var n, r = Ne({
                createEl: !1
            }, t);
            if (n = l.call(this, e, r, i) || this, t.playerOptions.sources && 0 !== t.playerOptions.sources.length) e.src(t.playerOptions.sources);
            else
                for (var a = 0, s = t.playerOptions.techOrder; a < s.length; a++) {
                    var o = Be(s[a]),
                        u = Zi.getTech(o);
                    if (o || (u = je.getComponent(o)), u && u.isSupported()) {
                        e.loadTech_(o);
                        break
                    }
                }
            return n
        }
        return p(e, l), e
    }(je);
    je.registerComponent("MediaLoader", fn);
    var mn = function(r) {
        function e(e, t) {
            var i;
            return (i = r.call(this, e, t) || this).emitTapEvents(), i.enable(), i
        }
        p(e, r);
        var t = e.prototype;
        return t.createEl = function(e, t, i) {
            void 0 === e && (e = "div"), void 0 === t && (t = {}), void 0 === i && (i = {}), t = _({
                innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                className: this.buildCSSClass(),
                tabIndex: 0
            }, t), "button" === e && m.error("Creating a ClickableComponent with an HTML element of " + e + " is not supported; use a Button instead."), i = _({
                role: "button"
            }, i), this.tabIndex_ = t.tabIndex;
            var n = r.prototype.createEl.call(this, e, t, i);
            return this.createControlTextEl(n), n
        }, t.dispose = function() {
            this.controlTextEl_ = null, r.prototype.dispose.call(this)
        }, t.createControlTextEl = function(e) {
            return this.controlTextEl_ = A("span", {
                className: "vjs-control-text"
            }, {
                "aria-live": "polite"
            }), e && e.appendChild(this.controlTextEl_), this.controlText(this.controlText_, e), this.controlTextEl_
        }, t.controlText = function(e, t) {
            if (void 0 === t && (t = this.el()), void 0 === e) return this.controlText_ || "Need Text";
            var i = this.localize(e);
            this.controlText_ = e, L(this.controlTextEl_, i), this.nonIconControl || t.setAttribute("title", i)
        }, t.buildCSSClass = function() {
            return "vjs-control vjs-button " + r.prototype.buildCSSClass.call(this)
        }, t.enable = function() {
            this.enabled_ || (this.enabled_ = !0, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), "undefined" != typeof this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on(["tap", "click"], this.handleClick), this.on("keydown", this.handleKeyDown))
        }, t.disable = function() {
            this.enabled_ = !1, this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), "undefined" != typeof this.tabIndex_ && this.el_.removeAttribute("tabIndex"), this.off(["tap", "click"], this.handleClick), this.off("keydown", this.handleKeyDown)
        }, t.handleClick = function(e) {}, t.handleKeyDown = function(e) {
            Ot.isEventKey(e, "Space") || Ot.isEventKey(e, "Enter") ? (e.preventDefault(), e.stopPropagation(), this.trigger("click")) : r.prototype.handleKeyDown.call(this, e)
        }, e
    }(je);
    je.registerComponent("ClickableComponent", mn);
    var gn = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).update(), e.on("posterchange", ke(f(f(i)), i.update)), i
        }
        p(e, n);
        var t = e.prototype;
        return t.dispose = function() {
            this.player().off("posterchange", this.update), n.prototype.dispose.call(this)
        }, t.createEl = function() {
            return A("div", {
                className: "vjs-poster",
                tabIndex: -1
            })
        }, t.update = function(e) {
            var t = this.player().poster();
            this.setSrc(t), t ? this.show() : this.hide()
        }, t.setSrc = function(e) {
            var t = "";
            e && (t = 'url("' + e + '")'), this.el_.style.backgroundImage = t
        }, t.handleClick = function(e) {
            this.player_.controls() && (this.player_.tech(!0).focus(), this.player_.paused() ? wt(this.player_.play()) : this.player_.pause())
        }, e
    }(mn);
    je.registerComponent("PosterImage", gn);
    var yn = "#222",
        vn = {
            monospace: "monospace",
            sansSerif: "sans-serif",
            serif: "serif",
            monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
            monospaceSerif: '"Courier New", monospace',
            proportionalSansSerif: "sans-serif",
            proportionalSerif: "serif",
            casual: '"Comic Sans MS", Impact, fantasy',
            script: '"Monotype Corsiva", cursive',
            smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
        };

    function _n(e, t) {
        var i;
        if (4 === e.length) i = e[1] + e[1] + e[2] + e[2] + e[3] + e[3];
        else {
            if (7 !== e.length) throw new Error("Invalid color code provided, " + e + "; must be formatted as e.g. #f0e or #f604e2.");
            i = e.slice(1)
        }
        return "rgba(" + parseInt(i.slice(0, 2), 16) + "," + parseInt(i.slice(2, 4), 16) + "," + parseInt(i.slice(4, 6), 16) + "," + t + ")"
    }

    function bn(e, t, i) {
        try {
            e.style[t] = i
        } catch (e) {
            return
        }
    }
    var Tn = function(a) {
        function e(i, e, t) {
            var n;
            n = a.call(this, i, e, t) || this;
            var r = ke(f(f(n)), n.updateDisplay);
            return i.on("loadstart", ke(f(f(n)), n.toggleDisplay)), i.on("texttrackchange", r), i.on("loadedmetadata", ke(f(f(n)), n.preselectTrack)), i.ready(ke(f(f(n)), function() {
                if (i.tech_ && i.tech_.featuresNativeTextTracks) this.hide();
                else {
                    i.on("fullscreenchange", r), i.on("playerresize", r), v.addEventListener("orientationchange", r), i.on("dispose", function() {
                        return v.removeEventListener("orientationchange", r)
                    });
                    for (var e = this.options_.playerOptions.tracks || [], t = 0; t < e.length; t++) this.player_.addRemoteTextTrack(e[t], !0);
                    this.preselectTrack()
                }
            })), n
        }
        p(e, a);
        var t = e.prototype;
        return t.preselectTrack = function() {
            for (var e, t, i, n = {
                    captions: 1,
                    subtitles: 1
                }, r = this.player_.textTracks(), a = this.player_.cache_.selectedLanguage, s = 0; s < r.length; s++) {
                var o = r[s];
                a && a.enabled && a.language && a.language === o.language && o.kind in n ? o.kind === a.kind ? i = o : i || (i = o) : a && !a.enabled ? t = e = i = null : o.default && ("descriptions" !== o.kind || e ? o.kind in n && !t && (t = o) : e = o)
            }
            i ? i.mode = "showing" : t ? t.mode = "showing" : e && (e.mode = "showing")
        }, t.toggleDisplay = function() {
            this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
        }, t.createEl = function() {
            return a.prototype.createEl.call(this, "div", {
                className: "vjs-text-track-display"
            }, {
                "aria-live": "off",
                "aria-atomic": "true"
            })
        }, t.clearDisplay = function() {
            "function" == typeof v.WebVTT && v.WebVTT.processCues(v, [], this.el_)
        }, t.updateDisplay = function() {
            var e = this.player_.textTracks();
            this.clearDisplay();
            for (var t = null, i = null, n = e.length; n--;) {
                var r = e[n];
                "showing" === r.mode && ("descriptions" === r.kind ? t = r : i = r)
            }
            i ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), this.updateForTrack(i)) : t && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"), this.updateForTrack(t))
        }, t.updateForTrack = function(e) {
            if ("function" == typeof v.WebVTT && e.activeCues) {
                for (var t = [], i = 0; i < e.activeCues.length; i++) t.push(e.activeCues[i]);
                if (v.WebVTT.processCues(v, t, this.el_), this.player_.textTrackSettings)
                    for (var n = this.player_.textTrackSettings.getValues(), r = t.length; r--;) {
                        var a = t[r];
                        if (a) {
                            var s = a.displayState;
                            if (n.color && (s.firstChild.style.color = n.color), n.textOpacity && bn(s.firstChild, "color", _n(n.color || "#fff", n.textOpacity)), n.backgroundColor && (s.firstChild.style.backgroundColor = n.backgroundColor), n.backgroundOpacity && bn(s.firstChild, "backgroundColor", _n(n.backgroundColor || "#000", n.backgroundOpacity)), n.windowColor && (n.windowOpacity ? bn(s, "backgroundColor", _n(n.windowColor, n.windowOpacity)) : s.style.backgroundColor = n.windowColor), n.edgeStyle && ("dropshadow" === n.edgeStyle ? s.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px " + yn : "raised" === n.edgeStyle ? s.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px " + yn : "depressed" === n.edgeStyle ? s.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px " + yn : "uniform" === n.edgeStyle && (s.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px " + yn)), n.fontPercent && 1 !== n.fontPercent) {
                                var o = v.parseFloat(s.style.fontSize);
                                s.style.fontSize = o * n.fontPercent + "px", s.style.height = "auto", s.style.top = "auto", s.style.bottom = "2px"
                            }
                            n.fontFamily && "default" !== n.fontFamily && ("small-caps" === n.fontFamily ? s.firstChild.style.fontVariant = "small-caps" : s.firstChild.style.fontFamily = vn[n.fontFamily])
                        }
                    }
            }
        }, e
    }(je);
    je.registerComponent("TextTrackDisplay", Tn);
    var Sn = function(r) {
        function e() {
            return r.apply(this, arguments) || this
        }
        return p(e, r), e.prototype.createEl = function() {
            var e = this.player_.isAudio(),
                t = this.localize(e ? "Audio Player" : "Video Player"),
                i = A("span", {
                    className: "vjs-control-text",
                    innerHTML: this.localize("{1} is loading.", [t])
                }),
                n = r.prototype.createEl.call(this, "div", {
                    className: "vjs-loading-spinner",
                    dir: "ltr"
                });
            return n.appendChild(i), n
        }, e
    }(je);
    je.registerComponent("LoadingSpinner", Sn);
    var kn = function(t) {
        function e() {
            return t.apply(this, arguments) || this
        }
        p(e, t);
        var i = e.prototype;
        return i.createEl = function(e, t, i) {
            void 0 === t && (t = {}), void 0 === i && (i = {}), t = _({
                innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                className: this.buildCSSClass()
            }, t), i = _({
                type: "button"
            }, i);
            var n = je.prototype.createEl.call(this, "button", t, i);
            return this.createControlTextEl(n), n
        }, i.addChild = function(e, t) {
            void 0 === t && (t = {});
            var i = this.constructor.name;
            return m.warn("Adding an actionable (user controllable) child to a Button (" + i + ") is not supported; use a ClickableComponent instead."), je.prototype.addChild.call(this, e, t)
        }, i.enable = function() {
            t.prototype.enable.call(this), this.el_.removeAttribute("disabled")
        }, i.disable = function() {
            t.prototype.disable.call(this), this.el_.setAttribute("disabled", "disabled")
        }, i.handleKeyDown = function(e) {
            Ot.isEventKey(e, "Space") || Ot.isEventKey(e, "Enter") ? e.stopPropagation() : t.prototype.handleKeyDown.call(this, e)
        }, e
    }(mn);
    je.registerComponent("Button", kn);
    var Cn = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).mouseused_ = !1, i.on("mousedown", i.handleMouseDown), i
        }
        p(e, n);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-big-play-button"
        }, t.handleClick = function(e) {
            var t = this.player_.play();
            if (this.mouseused_ && e.clientX && e.clientY) return wt(t), void this.player_.tech(!0).focus();
            var i = this.player_.getChild("controlBar"),
                n = i && i.getChild("playToggle");
            if (n) {
                var r = function() {
                    return n.focus()
                };
                Ct(t) ? t.then(r, function() {}) : this.setTimeout(r, 1)
            } else this.player_.tech(!0).focus()
        }, t.handleKeyDown = function(e) {
            this.mouseused_ = !1, n.prototype.handleKeyDown.call(this, e)
        }, t.handleMouseDown = function(e) {
            this.mouseused_ = !0
        }, e
    }(kn);
    Cn.prototype.controlText_ = "Play Video", je.registerComponent("BigPlayButton", Cn);
    var wn = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).controlText(t && t.controlText || i.localize("Close")), i
        }
        p(e, n);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-close-button " + n.prototype.buildCSSClass.call(this)
        }, t.handleClick = function(e) {
            this.trigger({
                type: "close",
                bubbles: !1
            })
        }, e
    }(kn);
    je.registerComponent("CloseButton", wn);
    var En = function(n) {
        function e(e, t) {
            var i;
            return void 0 === t && (t = {}), i = n.call(this, e, t) || this, t.replay = void 0 === t.replay || t.replay, i.on(e, "play", i.handlePlay), i.on(e, "pause", i.handlePause), t.replay && i.on(e, "ended", i.handleEnded), i
        }
        p(e, n);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-play-control " + n.prototype.buildCSSClass.call(this)
        }, t.handleClick = function(e) {
            this.player_.paused() ? this.player_.play() : this.player_.pause()
        }, t.handleSeeked = function(e) {
            this.removeClass("vjs-ended"), this.player_.paused() ? this.handlePause(e) : this.handlePlay(e)
        }, t.handlePlay = function(e) {
            this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause")
        }, t.handlePause = function(e) {
            this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play")
        }, t.handleEnded = function(e) {
            this.removeClass("vjs-playing"), this.addClass("vjs-ended"), this.controlText("Replay"), this.one(this.player_, "seeked", this.handleSeeked)
        }, e
    }(kn);
    En.prototype.controlText_ = "Play", je.registerComponent("PlayToggle", En);
    var An = function(e, t) {
            e = e < 0 ? 0 : e;
            var i = Math.floor(e % 60),
                n = Math.floor(e / 60 % 60),
                r = Math.floor(e / 3600),
                a = Math.floor(t / 60 % 60),
                s = Math.floor(t / 3600);
            return (isNaN(e) || e === 1 / 0) && (r = n = i = "-"), (r = 0 < r || 0 < s ? r + ":" : "") + (n = ((r || 10 <= a) && n < 10 ? "0" + n : n) + ":") + (i = i < 10 ? "0" + i : i)
        },
        Ln = An;

    function Pn(e, t) {
        return void 0 === t && (t = e), Ln(e, t)
    }
    var On = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).throttledUpdateContent = Ce(ke(f(f(i)), i.updateContent), 25), i.on(e, "timeupdate", i.throttledUpdateContent), i
        }
        p(e, n);
        var t = e.prototype;
        return t.createEl = function() {
            var e = this.buildCSSClass(),
                t = n.prototype.createEl.call(this, "div", {
                    className: e + " vjs-time-control vjs-control",
                    innerHTML: '<span class="vjs-control-text" role="presentation">' + this.localize(this.labelText_) + " </span>"
                });
            return this.contentEl_ = A("span", {
                className: e + "-display"
            }, {
                "aria-live": "off",
                role: "presentation"
            }), this.updateTextNode_(), t.appendChild(this.contentEl_), t
        }, t.dispose = function() {
            this.contentEl_ = null, this.textNode_ = null, n.prototype.dispose.call(this)
        }, t.updateTextNode_ = function() {
            if (this.contentEl_) {
                for (; this.contentEl_.firstChild;) this.contentEl_.removeChild(this.contentEl_.firstChild);
                this.textNode_ = h.createTextNode(this.formattedTime_ || this.formatTime_(0)), this.contentEl_.appendChild(this.textNode_)
            }
        }, t.formatTime_ = function(e) {
            return Pn(e)
        }, t.updateFormattedTime_ = function(e) {
            var t = this.formatTime_(e);
            t !== this.formattedTime_ && (this.formattedTime_ = t, this.requestAnimationFrame(this.updateTextNode_))
        }, t.updateContent = function(e) {}, e
    }(je);
    On.prototype.labelText_ = "Time", On.prototype.controlText_ = "Time", je.registerComponent("TimeDisplay", On);
    var In = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).on(e, "ended", i.handleEnded), i
        }
        p(e, n);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-current-time"
        }, t.updateContent = function(e) {
            var t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
            this.updateFormattedTime_(t)
        }, t.handleEnded = function(e) {
            this.player_.duration() && this.updateFormattedTime_(this.player_.duration())
        }, e
    }(On);
    In.prototype.labelText_ = "Current Time", In.prototype.controlText_ = "Current Time", je.registerComponent("CurrentTimeDisplay", In);
    var Un = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).on(e, "durationchange", i.updateContent), i.on(e, "loadstart", i.updateContent), i.on(e, "loadedmetadata", i.throttledUpdateContent), i
        }
        p(e, n);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-duration"
        }, t.updateContent = function(e) {
            var t = this.player_.duration();
            this.duration_ !== t && (this.duration_ = t, this.updateFormattedTime_(t))
        }, e
    }(On);
    Un.prototype.labelText_ = "Duration", Un.prototype.controlText_ = "Duration", je.registerComponent("DurationDisplay", Un);
    var xn = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        return p(t, e), t.prototype.createEl = function() {
            return e.prototype.createEl.call(this, "div", {
                className: "vjs-time-control vjs-time-divider",
                innerHTML: "<div><span>/</span></div>"
            }, {
                "aria-hidden": !0
            })
        }, t
    }(je);
    je.registerComponent("TimeDivider", xn);
    var Dn = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).on(e, "durationchange", i.throttledUpdateContent), i.on(e, "ended", i.handleEnded), i
        }
        p(e, n);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-remaining-time"
        }, t.createEl = function() {
            var e = n.prototype.createEl.call(this);
            return e.insertBefore(A("span", {}, {
                "aria-hidden": !0
            }, "-"), this.contentEl_), e
        }, t.updateContent = function(e) {
            "number" == typeof this.player_.duration() && (this.player_.remainingTimeDisplay ? this.updateFormattedTime_(this.player_.remainingTimeDisplay()) : this.updateFormattedTime_(this.player_.remainingTime()))
        }, t.handleEnded = function(e) {
            this.player_.duration() && this.updateFormattedTime_(0)
        }, e
    }(On);
    Dn.prototype.labelText_ = "Remaining Time", Dn.prototype.controlText_ = "Remaining Time", je.registerComponent("RemainingTimeDisplay", Dn);
    var Rn = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).updateShowing(), i.on(i.player(), "durationchange", i.updateShowing), i
        }
        p(e, n);
        var t = e.prototype;
        return t.createEl = function() {
            var e = n.prototype.createEl.call(this, "div", {
                className: "vjs-live-control vjs-control"
            });
            return this.contentEl_ = A("div", {
                className: "vjs-live-display",
                innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + " </span>" + this.localize("LIVE")
            }, {
                "aria-live": "off"
            }), e.appendChild(this.contentEl_), e
        }, t.dispose = function() {
            this.contentEl_ = null, n.prototype.dispose.call(this)
        }, t.updateShowing = function(e) {
            this.player().duration() === 1 / 0 ? this.show() : this.hide()
        }, e
    }(je);
    je.registerComponent("LiveDisplay", Rn);
    var Mn = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).updateLiveEdgeStatus(), i.player_.liveTracker && i.on(i.player_.liveTracker, "liveedgechange", i.updateLiveEdgeStatus), i
        }
        p(e, n);
        var t = e.prototype;
        return t.createEl = function() {
            var e = n.prototype.createEl.call(this, "button", {
                className: "vjs-seek-to-live-control vjs-control"
            });
            return this.textEl_ = A("span", {
                className: "vjs-seek-to-live-text",
                innerHTML: this.localize("LIVE")
            }, {
                "aria-hidden": "true"
            }), e.appendChild(this.textEl_), e
        }, t.updateLiveEdgeStatus = function(e) {
            !this.player_.liveTracker || this.player_.liveTracker.atLiveEdge() ? (this.setAttribute("aria-disabled", !0), this.addClass("vjs-at-live-edge"), this.controlText("Seek to live, currently playing live")) : (this.setAttribute("aria-disabled", !1), this.removeClass("vjs-at-live-edge"), this.controlText("Seek to live, currently behind live"))
        }, t.handleClick = function() {
            this.player_.liveTracker.seekToLiveEdge()
        }, t.dispose = function() {
            this.player_.liveTracker && this.off(this.player_.liveTracker, "liveedgechange", this.updateLiveEdgeStatus), this.textEl_ = null, n.prototype.dispose.call(this)
        }, e
    }(kn);
    Mn.prototype.controlText_ = "Seek to live, currently playing live", je.registerComponent("SeekToLive", Mn);
    var Bn = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).bar = i.getChild(i.options_.barName), i.vertical(!!i.options_.vertical), i.enable(), i
        }
        p(e, n);
        var t = e.prototype;
        return t.enabled = function() {
            return this.enabled_
        }, t.enable = function() {
            this.enabled() || (this.on("mousedown", this.handleMouseDown), this.on("touchstart", this.handleMouseDown), this.on("keydown", this.handleKeyDown), this.on("click", this.handleClick), this.on(this.player_, "controlsvisible", this.update), this.playerEvent && this.on(this.player_, this.playerEvent, this.update), this.removeClass("disabled"), this.setAttribute("tabindex", 0), this.enabled_ = !0)
        }, t.disable = function() {
            if (this.enabled()) {
                var e = this.bar.el_.ownerDocument;
                this.off("mousedown", this.handleMouseDown), this.off("touchstart", this.handleMouseDown), this.off("keydown", this.handleKeyDown), this.off("click", this.handleClick), this.off(this.player_, "controlsvisible", this.update), this.off(e, "mousemove", this.handleMouseMove), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchmove", this.handleMouseMove), this.off(e, "touchend", this.handleMouseUp), this.removeAttribute("tabindex"), this.addClass("disabled"), this.playerEvent && this.off(this.player_, this.playerEvent, this.update), this.enabled_ = !1
            }
        }, t.createEl = function(e, t, i) {
            return void 0 === t && (t = {}), void 0 === i && (i = {}), t.className = t.className + " vjs-slider", t = _({
                tabIndex: 0
            }, t), i = _({
                role: "slider",
                "aria-valuenow": 0,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                tabIndex: 0
            }, i), n.prototype.createEl.call(this, e, t, i)
        }, t.handleMouseDown = function(e) {
            var t = this.bar.el_.ownerDocument;
            "mousedown" === e.type && e.preventDefault(), "touchstart" !== e.type || nt || e.preventDefault(), j(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(t, "mousemove", this.handleMouseMove), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchmove", this.handleMouseMove), this.on(t, "touchend", this.handleMouseUp), this.handleMouseMove(e)
        }, t.handleMouseMove = function(e) {}, t.handleMouseUp = function() {
            var e = this.bar.el_.ownerDocument;
            F(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(e, "mousemove", this.handleMouseMove), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchmove", this.handleMouseMove), this.off(e, "touchend", this.handleMouseUp), this.update()
        }, t.update = function() {
            if (this.el_) {
                var e = this.getPercent(),
                    t = this.bar;
                if (t) {
                    ("number" != typeof e || e != e || e < 0 || e === 1 / 0) && (e = 0);
                    var i = (100 * e).toFixed(2) + "%",
                        n = t.el().style;
                    return this.vertical() ? n.height = i : n.width = i, e
                }
            }
        }, t.calculateDistance = function(e) {
            var t = q(this.el_, e);
            return this.vertical() ? t.y : t.x
        }, t.handleKeyDown = function(e) {
            Ot.isEventKey(e, "Left") || Ot.isEventKey(e, "Down") ? (e.preventDefault(), e.stopPropagation(), this.stepBack()) : Ot.isEventKey(e, "Right") || Ot.isEventKey(e, "Up") ? (e.preventDefault(), e.stopPropagation(), this.stepForward()) : n.prototype.handleKeyDown.call(this, e)
        }, t.handleClick = function(e) {
            e.stopPropagation(), e.preventDefault()
        }, t.vertical = function(e) {
            if (void 0 === e) return this.vertical_ || !1;
            this.vertical_ = !!e, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal")
        }, e
    }(je);
    je.registerComponent("Slider", Bn);
    var Nn = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).partEls_ = [], i.on(e, "progress", i.update), i
        }
        p(e, n);
        var t = e.prototype;
        return t.createEl = function() {
            return n.prototype.createEl.call(this, "div", {
                className: "vjs-load-progress",
                innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + '</span>: <span class="vjs-control-text-loaded-percentage">0%</span></span>'
            })
        }, t.dispose = function() {
            this.partEls_ = null, n.prototype.dispose.call(this)
        }, t.update = function(e) {
            var t = this.player_.liveTracker,
                i = this.player_.buffered(),
                n = t && t.isLive() ? t.seekableEnd() : this.player_.duration(),
                r = this.player_.bufferedEnd(),
                a = this.partEls_,
                s = this.$(".vjs-control-text-loaded-percentage"),
                o = function(e, t, i) {
                    var n = e / t || 0;
                    return n = 100 * (1 <= n ? 1 : n), i && (n = n.toFixed(2)), n + "%"
                };
            this.el_.style.width = o(r, n), L(s, o(r, n, !0));
            for (var u = 0; u < i.length; u++) {
                var l = i.start(u),
                    c = i.end(u),
                    h = a[u];
                h || (h = this.el_.appendChild(A()), a[u] = h), h.style.left = o(l, r), h.style.width = o(c - l, r)
            }
            for (var d = a.length; d > i.length; d--) this.el_.removeChild(a[d - 1]);
            a.length = i.length
        }, e
    }(je);
    je.registerComponent("LoadProgressBar", Nn);
    var jn = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        p(t, e);
        var i = t.prototype;
        return i.createEl = function() {
            return e.prototype.createEl.call(this, "div", {
                className: "vjs-time-tooltip"
            }, {
                "aria-hidden": "true"
            })
        }, i.update = function(e, t, i) {
            var n = V(this.el_),
                r = V(this.player_.el()),
                a = e.width * t;
            if (r && n) {
                var s = e.left - r.left + a,
                    o = e.width - a + (r.right - e.right),
                    u = n.width / 2;
                s < u ? u += u - s : o < u && (u = o), u < 0 ? u = 0 : u > n.width && (u = n.width), this.el_.style.right = "-" + u + "px", L(this.el_, i)
            }
        }, i.updateTime = function(r, a, s, o) {
            var u = this;
            this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame(function() {
                var e, t = u.player_.duration();
                if (u.player_.liveTracker && u.player_.liveTracker.isLive()) {
                    var i = u.player_.liveTracker.liveWindow(),
                        n = i - a * i;
                    e = (n < 1 ? "" : "-") + Pn(n, i)
                } else e = Pn(s, t);
                u.update(r, a, e), o && o()
            })
        }, t
    }(je);
    je.registerComponent("TimeTooltip", jn);
    var Fn = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        p(t, e);
        var i = t.prototype;
        return i.createEl = function() {
            return e.prototype.createEl.call(this, "div", {
                className: "vjs-play-progress vjs-slider-bar"
            }, {
                "aria-hidden": "true"
            })
        }, i.update = function(e, t) {
            var i = this.getChild("timeTooltip");
            if (i) {
                var n = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                i.updateTime(e, t, n)
            }
        }, t
    }(je);
    Fn.prototype.options_ = {
        children: []
    }, $e || Je || Fn.prototype.options_.children.push("timeTooltip"), je.registerComponent("PlayProgressBar", Fn);
    var Vn = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).update = Ce(ke(f(f(i)), i.update), 25), i
        }
        p(e, n);
        var t = e.prototype;
        return t.createEl = function() {
            return n.prototype.createEl.call(this, "div", {
                className: "vjs-mouse-display"
            })
        }, t.update = function(e, t) {
            var i = this,
                n = t * this.player_.duration();
            this.getChild("timeTooltip").updateTime(e, t, n, function() {
                i.el_.style.left = e.width * t + "px"
            })
        }, e
    }(je);
    Vn.prototype.options_ = {
        children: ["timeTooltip"]
    }, je.registerComponent("MouseTimeDisplay", Vn);
    var Hn = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).setEventHandlers_(), i
        }
        p(e, n);
        var t = e.prototype;
        return t.setEventHandlers_ = function() {
            this.update = Ce(ke(this, this.update), 30), this.on(this.player_, "timeupdate", this.update), this.on(this.player_, "ended", this.handleEnded), this.on(this.player_, "durationchange", this.update), this.player_.liveTracker && this.on(this.player_.liveTracker, "liveedgechange", this.update), this.updateInterval = null, this.on(this.player_, ["playing"], this.enableInterval_), this.on(this.player_, ["ended", "pause", "waiting"], this.disableInterval_), "hidden" in h && "visibilityState" in h && this.on(h, "visibilitychange", this.toggleVisibility_)
        }, t.toggleVisibility_ = function(e) {
            h.hidden ? this.disableInterval_(e) : (this.enableInterval_(), this.requestAnimationFrame(this.update))
        }, t.enableInterval_ = function() {
            var e = this;
            this.clearInterval(this.updateInterval), this.updateInterval = this.setInterval(function() {
                e.requestAnimationFrame(e.update)
            }, 30)
        }, t.disableInterval_ = function(e) {
            this.player_.liveTracker && this.player_.liveTracker.isLive() && "ended" !== e.type || this.clearInterval(this.updateInterval)
        }, t.createEl = function() {
            return n.prototype.createEl.call(this, "div", {
                className: "vjs-progress-holder"
            }, {
                "aria-label": this.localize("Progress Bar")
            })
        }, t.update_ = function(e, t) {
            var i = this.player_.liveTracker,
                n = this.player_.duration();
            i && i.isLive() && (n = this.player_.liveTracker.liveCurrentTime()), this.el_.setAttribute("aria-valuenow", (100 * t).toFixed(2)), this.el_.setAttribute("aria-valuetext", this.localize("progress bar timing: currentTime={1} duration={2}", [Pn(e, n), Pn(n, n)], "{1} of {2}")), this.bar && this.bar.update(V(this.el_), t)
        }, t.update = function(e) {
            if (null !== this.el().offsetParent) {
                var t = n.prototype.update.call(this);
                return this.update_(this.getCurrentTime_(), t), t
            }
        }, t.getCurrentTime_ = function() {
            return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime()
        }, t.handleEnded = function(e) {
            this.update_(this.player_.duration(), 1)
        }, t.getPercent = function() {
            var e, t = this.getCurrentTime_(),
                i = this.player_.liveTracker;
            return i && i.isLive() ? (e = (t - i.seekableStart()) / i.liveWindow(), i.atLiveEdge() && (e = 1)) : e = t / this.player_.duration(), 1 <= e ? 1 : e || 0
        }, t.handleMouseDown = function(e) {
            K(e) && (e.stopPropagation(), this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), n.prototype.handleMouseDown.call(this, e))
        }, t.handleMouseMove = function(e) {
            if (K(e)) {
                var t, i = this.calculateDistance(e),
                    n = this.player_.liveTracker;
                if (n && n.isLive()) {
                    var r = n.seekableStart(),
                        a = n.liveCurrentTime();
                    if (a <= (t = r + i * n.liveWindow()) && (t = a), t <= r && (t = r + .1), t === 1 / 0) return
                } else(t = i * this.player_.duration()) === this.player_.duration() && (t -= .1);
                this.player_.currentTime(t)
            }
        }, t.enable = function() {
            n.prototype.enable.call(this);
            var e = this.getChild("mouseTimeDisplay");
            e && e.show()
        }, t.disable = function() {
            n.prototype.disable.call(this);
            var e = this.getChild("mouseTimeDisplay");
            e && e.hide()
        }, t.handleMouseUp = function(e) {
            n.prototype.handleMouseUp.call(this, e), e && e.stopPropagation(), this.player_.scrubbing(!1), this.player_.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            }), this.videoWasPlaying && wt(this.player_.play())
        }, t.stepForward = function() {
            this.player_.currentTime(this.player_.currentTime() + 5)
        }, t.stepBack = function() {
            this.player_.currentTime(this.player_.currentTime() - 5)
        }, t.handleAction = function(e) {
            this.player_.paused() ? this.player_.play() : this.player_.pause()
        }, t.handleKeyDown = function(e) {
            if (Ot.isEventKey(e, "Space") || Ot.isEventKey(e, "Enter")) e.preventDefault(), e.stopPropagation(), this.handleAction(e);
            else if (Ot.isEventKey(e, "Home")) e.preventDefault(), e.stopPropagation(), this.player_.currentTime(0);
            else if (Ot.isEventKey(e, "End")) e.preventDefault(), e.stopPropagation(), this.player_.currentTime(this.player_.duration());
            else if (/^[0-9]$/.test(Ot(e))) {
                e.preventDefault(), e.stopPropagation();
                var t = 10 * (Ot.codes[Ot(e)] - Ot.codes[0]) / 100;
                this.player_.currentTime(this.player_.duration() * t)
            } else Ot.isEventKey(e, "PgDn") ? (e.preventDefault(), e.stopPropagation(), this.player_.currentTime(this.player_.currentTime() - 60)) : Ot.isEventKey(e, "PgUp") ? (e.preventDefault(), e.stopPropagation(), this.player_.currentTime(this.player_.currentTime() + 60)) : n.prototype.handleKeyDown.call(this, e)
        }, e
    }(Bn);
    Hn.prototype.options_ = {
        children: ["loadProgressBar", "playProgressBar"],
        barName: "playProgressBar"
    }, $e || Je || Hn.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"), je.registerComponent("SeekBar", Hn);
    var qn = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).handleMouseMove = Ce(ke(f(f(i)), i.handleMouseMove), 25), i.throttledHandleMouseSeek = Ce(ke(f(f(i)), i.handleMouseSeek), 25), i.enable(), i
        }
        p(e, n);
        var t = e.prototype;
        return t.createEl = function() {
            return n.prototype.createEl.call(this, "div", {
                className: "vjs-progress-control vjs-control"
            })
        }, t.handleMouseMove = function(e) {
            var t = this.getChild("seekBar");
            if (t) {
                var i = t.getChild("mouseTimeDisplay"),
                    n = t.el(),
                    r = V(n),
                    a = q(n, e).x;
                1 < a ? a = 1 : a < 0 && (a = 0), i && i.update(r, a)
            }
        }, t.handleMouseSeek = function(e) {
            var t = this.getChild("seekBar");
            t && t.handleMouseMove(e)
        }, t.enabled = function() {
            return this.enabled_
        }, t.disable = function() {
            this.children().forEach(function(e) {
                return e.disable && e.disable()
            }), this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDown), this.off(this.el_, "mousemove", this.handleMouseMove), this.handleMouseUp(), this.addClass("disabled"), this.enabled_ = !1)
        }, t.enable = function() {
            this.children().forEach(function(e) {
                return e.enable && e.enable()
            }), this.enabled() || (this.on(["mousedown", "touchstart"], this.handleMouseDown), this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"), this.enabled_ = !0)
        }, t.handleMouseDown = function(e) {
            var t = this.el_.ownerDocument,
                i = this.getChild("seekBar");
            i && i.handleMouseDown(e), this.on(t, "mousemove", this.throttledHandleMouseSeek), this.on(t, "touchmove", this.throttledHandleMouseSeek), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchend", this.handleMouseUp)
        }, t.handleMouseUp = function(e) {
            var t = this.el_.ownerDocument,
                i = this.getChild("seekBar");
            i && i.handleMouseUp(e), this.off(t, "mousemove", this.throttledHandleMouseSeek), this.off(t, "touchmove", this.throttledHandleMouseSeek), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchend", this.handleMouseUp)
        }, e
    }(je);
    qn.prototype.options_ = {
        children: ["seekBar"]
    }, je.registerComponent("ProgressControl", qn);
    var zn = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).on(e, "fullscreenchange", i.handleFullscreenChange), !1 === h[mt.fullscreenEnabled] && i.disable(), i
        }
        p(e, n);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-fullscreen-control " + n.prototype.buildCSSClass.call(this)
        }, t.handleFullscreenChange = function(e) {
            this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen")
        }, t.handleClick = function(e) {
            this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen()
        }, e
    }(kn);
    zn.prototype.controlText_ = "Fullscreen", je.registerComponent("FullscreenToggle", zn);
    var Wn = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        return p(t, e), t.prototype.createEl = function() {
            return e.prototype.createEl.call(this, "div", {
                className: "vjs-volume-level",
                innerHTML: '<span class="vjs-control-text"></span>'
            })
        }, t
    }(je);
    je.registerComponent("VolumeLevel", Wn);
    var Gn = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).on("slideractive", i.updateLastVolume_), i.on(e, "volumechange", i.updateARIAAttributes), e.ready(function() {
                return i.updateARIAAttributes()
            }), i
        }
        p(e, n);
        var t = e.prototype;
        return t.createEl = function() {
            return n.prototype.createEl.call(this, "div", {
                className: "vjs-volume-bar vjs-slider-bar"
            }, {
                "aria-label": this.localize("Volume Level"),
                "aria-live": "polite"
            })
        }, t.handleMouseDown = function(e) {
            K(e) && n.prototype.handleMouseDown.call(this, e)
        }, t.handleMouseMove = function(e) {
            K(e) && (this.checkMuted(), this.player_.volume(this.calculateDistance(e)))
        }, t.checkMuted = function() {
            this.player_.muted() && this.player_.muted(!1)
        }, t.getPercent = function() {
            return this.player_.muted() ? 0 : this.player_.volume()
        }, t.stepForward = function() {
            this.checkMuted(), this.player_.volume(this.player_.volume() + .1)
        }, t.stepBack = function() {
            this.checkMuted(), this.player_.volume(this.player_.volume() - .1)
        }, t.updateARIAAttributes = function(e) {
            var t = this.player_.muted() ? 0 : this.volumeAsPercentage_();
            this.el_.setAttribute("aria-valuenow", t), this.el_.setAttribute("aria-valuetext", t + "%")
        }, t.volumeAsPercentage_ = function() {
            return Math.round(100 * this.player_.volume())
        }, t.updateLastVolume_ = function() {
            var e = this,
                t = this.player_.volume();
            this.one("sliderinactive", function() {
                0 === e.player_.volume() && e.player_.lastVolume_(t)
            })
        }, e
    }(Bn);
    Gn.prototype.options_ = {
        children: ["volumeLevel"],
        barName: "volumeLevel"
    }, Gn.prototype.playerEvent = "volumechange", je.registerComponent("VolumeBar", Gn);
    var Xn = function(a) {
        function e(e, t) {
            var i, n, r;
            return void 0 === t && (t = {}), t.vertical = t.vertical || !1, ("undefined" == typeof t.volumeBar || l(t.volumeBar)) && (t.volumeBar = t.volumeBar || {}, t.volumeBar.vertical = t.vertical), i = a.call(this, e, t) || this, n = f(f(i)), (r = e).tech_ && !r.tech_.featuresVolumeControl && n.addClass("vjs-hidden"), n.on(r, "loadstart", function() {
                r.tech_.featuresVolumeControl ? n.removeClass("vjs-hidden") : n.addClass("vjs-hidden")
            }), i.throttledHandleMouseMove = Ce(ke(f(f(i)), i.handleMouseMove), 25), i.on("mousedown", i.handleMouseDown), i.on("touchstart", i.handleMouseDown), i.on(i.volumeBar, ["focus", "slideractive"], function() {
                i.volumeBar.addClass("vjs-slider-active"), i.addClass("vjs-slider-active"), i.trigger("slideractive")
            }), i.on(i.volumeBar, ["blur", "sliderinactive"], function() {
                i.volumeBar.removeClass("vjs-slider-active"), i.removeClass("vjs-slider-active"), i.trigger("sliderinactive")
            }), i
        }
        p(e, a);
        var t = e.prototype;
        return t.createEl = function() {
            var e = "vjs-volume-horizontal";
            return this.options_.vertical && (e = "vjs-volume-vertical"), a.prototype.createEl.call(this, "div", {
                className: "vjs-volume-control vjs-control " + e
            })
        }, t.handleMouseDown = function(e) {
            var t = this.el_.ownerDocument;
            this.on(t, "mousemove", this.throttledHandleMouseMove), this.on(t, "touchmove", this.throttledHandleMouseMove), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchend", this.handleMouseUp)
        }, t.handleMouseUp = function(e) {
            var t = this.el_.ownerDocument;
            this.off(t, "mousemove", this.throttledHandleMouseMove), this.off(t, "touchmove", this.throttledHandleMouseMove), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchend", this.handleMouseUp)
        }, t.handleMouseMove = function(e) {
            this.volumeBar.handleMouseMove(e)
        }, e
    }(je);
    Xn.prototype.options_ = {
        children: ["volumeBar"]
    }, je.registerComponent("VolumeControl", Xn);
    var Yn = function(a) {
        function e(e, t) {
            var i, n, r;
            return i = a.call(this, e, t) || this, n = f(f(i)), (r = e).tech_ && !r.tech_.featuresMuteControl && n.addClass("vjs-hidden"), n.on(r, "loadstart", function() {
                r.tech_.featuresMuteControl ? n.removeClass("vjs-hidden") : n.addClass("vjs-hidden")
            }), i.on(e, ["loadstart", "volumechange"], i.update), i
        }
        p(e, a);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-mute-control " + a.prototype.buildCSSClass.call(this)
        }, t.handleClick = function(e) {
            var t = this.player_.volume(),
                i = this.player_.lastVolume_();
            if (0 === t) {
                var n = i < .1 ? .1 : i;
                this.player_.volume(n), this.player_.muted(!1)
            } else this.player_.muted(!this.player_.muted())
        }, t.update = function(e) {
            this.updateIcon_(), this.updateControlText_()
        }, t.updateIcon_ = function() {
            var e = this.player_.volume(),
                t = 3;
            $e && this.player_.tech_ && this.player_.tech_.el_ && this.player_.muted(this.player_.tech_.el_.muted), 0 === e || this.player_.muted() ? t = 0 : e < .33 ? t = 1 : e < .67 && (t = 2);
            for (var i = 0; i < 4; i++) U(this.el_, "vjs-vol-" + i);
            I(this.el_, "vjs-vol-" + t)
        }, t.updateControlText_ = function() {
            var e = this.player_.muted() || 0 === this.player_.volume() ? "Unmute" : "Mute";
            this.controlText() !== e && this.controlText(e)
        }, e
    }(kn);
    Yn.prototype.controlText_ = "Mute", je.registerComponent("MuteToggle", Yn);
    var Kn = function(n) {
        function e(e, t) {
            var i;
            return void 0 === t && (t = {}), "undefined" != typeof t.inline ? t.inline = t.inline : t.inline = !0, ("undefined" == typeof t.volumeControl || l(t.volumeControl)) && (t.volumeControl = t.volumeControl || {}, t.volumeControl.vertical = !t.inline), (i = n.call(this, e, t) || this).on(e, ["loadstart"], i.volumePanelState_), i.on(i.volumeControl, ["slideractive"], i.sliderActive_), i.on(i.volumeControl, ["sliderinactive"], i.sliderInactive_), i
        }
        p(e, n);
        var t = e.prototype;
        return t.sliderActive_ = function() {
            this.addClass("vjs-slider-active")
        }, t.sliderInactive_ = function() {
            this.removeClass("vjs-slider-active")
        }, t.volumePanelState_ = function() {
            this.volumeControl.hasClass("vjs-hidden") && this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-hidden"), this.volumeControl.hasClass("vjs-hidden") && !this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-mute-toggle-only")
        }, t.createEl = function() {
            var e = "vjs-volume-panel-horizontal";
            return this.options_.inline || (e = "vjs-volume-panel-vertical"), n.prototype.createEl.call(this, "div", {
                className: "vjs-volume-panel vjs-control " + e
            })
        }, e
    }(je);
    Kn.prototype.options_ = {
        children: ["muteToggle", "volumeControl"]
    }, je.registerComponent("VolumePanel", Kn);
    var $n = function(n) {
        function e(e, t) {
            var i;
            return i = n.call(this, e, t) || this, t && (i.menuButton_ = t.menuButton), i.focusedChild_ = -1, i.on("keydown", i.handleKeyDown), i.boundHandleBlur_ = ke(f(f(i)), i.handleBlur), i.boundHandleTapClick_ = ke(f(f(i)), i.handleTapClick), i
        }
        p(e, n);
        var t = e.prototype;
        return t.addEventListenerForItem = function(e) {
            e instanceof je && (this.on(e, "blur", this.boundHandleBlur_), this.on(e, ["tap", "click"], this.boundHandleTapClick_))
        }, t.removeEventListenerForItem = function(e) {
            e instanceof je && (this.off(e, "blur", this.boundHandleBlur_), this.off(e, ["tap", "click"], this.boundHandleTapClick_))
        }, t.removeChild = function(e) {
            "string" == typeof e && (e = this.getChild(e)), this.removeEventListenerForItem(e), n.prototype.removeChild.call(this, e)
        }, t.addItem = function(e) {
            var t = this.addChild(e);
            t && this.addEventListenerForItem(t)
        }, t.createEl = function() {
            var e = this.options_.contentElType || "ul";
            this.contentEl_ = A(e, {
                className: "vjs-menu-content"
            }), this.contentEl_.setAttribute("role", "menu");
            var t = n.prototype.createEl.call(this, "div", {
                append: this.contentEl_,
                className: "vjs-menu"
            });
            return t.appendChild(this.contentEl_), he(t, "click", function(e) {
                e.preventDefault(), e.stopImmediatePropagation()
            }), t
        }, t.dispose = function() {
            this.contentEl_ = null, this.boundHandleBlur_ = null, this.boundHandleTapClick_ = null, n.prototype.dispose.call(this)
        }, t.handleBlur = function(e) {
            var t = e.relatedTarget || h.activeElement;
            if (!this.children().some(function(e) {
                    return e.el() === t
                })) {
                var i = this.menuButton_;
                i && i.buttonPressed_ && t !== i.el().firstChild && i.unpressButton()
            }
        }, t.handleTapClick = function(t) {
            if (this.menuButton_) {
                this.menuButton_.unpressButton();
                var e = this.children();
                if (!Array.isArray(e)) return;
                var i = e.filter(function(e) {
                    return e.el() === t.target
                })[0];
                if (!i) return;
                "CaptionSettingsMenuItem" !== i.name() && this.menuButton_.focus()
            }
        }, t.handleKeyDown = function(e) {
            Ot.isEventKey(e, "Left") || Ot.isEventKey(e, "Down") ? (e.preventDefault(), e.stopPropagation(), this.stepForward()) : (Ot.isEventKey(e, "Right") || Ot.isEventKey(e, "Up")) && (e.preventDefault(), e.stopPropagation(), this.stepBack())
        }, t.stepForward = function() {
            var e = 0;
            void 0 !== this.focusedChild_ && (e = this.focusedChild_ + 1), this.focus(e)
        }, t.stepBack = function() {
            var e = 0;
            void 0 !== this.focusedChild_ && (e = this.focusedChild_ - 1), this.focus(e)
        }, t.focus = function(e) {
            void 0 === e && (e = 0);
            var t = this.children().slice();
            t.length && t[0].className && /vjs-menu-title/.test(t[0].className) && t.shift(), 0 < t.length && (e < 0 ? e = 0 : e >= t.length && (e = t.length - 1), t[this.focusedChild_ = e].el_.focus())
        }, e
    }(je);
    je.registerComponent("Menu", $n);
    var Qn = function(r) {
        function e(e, t) {
            var i;
            void 0 === t && (t = {}), (i = r.call(this, e, t) || this).menuButton_ = new kn(e, t), i.menuButton_.controlText(i.controlText_), i.menuButton_.el_.setAttribute("aria-haspopup", "true");
            var n = kn.prototype.buildCSSClass();
            return i.menuButton_.el_.className = i.buildCSSClass() + " " + n, i.menuButton_.removeClass("vjs-control"), i.addChild(i.menuButton_), i.update(), i.enabled_ = !0, i.on(i.menuButton_, "tap", i.handleClick), i.on(i.menuButton_, "click", i.handleClick), i.on(i.menuButton_, "keydown", i.handleKeyDown), i.on(i.menuButton_, "mouseenter", function() {
                i.menu.show()
            }), i.on("keydown", i.handleSubmenuKeyDown), i
        }
        p(e, r);
        var t = e.prototype;
        return t.update = function() {
            var e = this.createMenu();
            this.menu && (this.menu.dispose(), this.removeChild(this.menu)), this.menu = e, this.addChild(e), this.buttonPressed_ = !1, this.menuButton_.el_.setAttribute("aria-expanded", "false"), this.items && this.items.length <= this.hideThreshold_ ? this.hide() : this.show()
        }, t.createMenu = function() {
            var e = new $n(this.player_, {
                menuButton: this
            });
            if (this.hideThreshold_ = 0, this.options_.title) {
                var t = A("li", {
                    className: "vjs-menu-title",
                    innerHTML: Be(this.options_.title),
                    tabIndex: -1
                });
                this.hideThreshold_ += 1;
                var i = new je(this.player_, {
                    el: t
                });
                e.addItem(i)
            }
            if (this.items = this.createItems(), this.items)
                for (var n = 0; n < this.items.length; n++) e.addItem(this.items[n]);
            return e
        }, t.createItems = function() {}, t.createEl = function() {
            return r.prototype.createEl.call(this, "div", {
                className: this.buildWrapperCSSClass()
            }, {})
        }, t.buildWrapperCSSClass = function() {
            var e = "vjs-menu-button";
            return !0 === this.options_.inline ? e += "-inline" : e += "-popup", "vjs-menu-button " + e + " " + kn.prototype.buildCSSClass() + " " + r.prototype.buildCSSClass.call(this)
        }, t.buildCSSClass = function() {
            var e = "vjs-menu-button";
            return !0 === this.options_.inline ? e += "-inline" : e += "-popup", "vjs-menu-button " + e + " " + r.prototype.buildCSSClass.call(this)
        }, t.controlText = function(e, t) {
            return void 0 === t && (t = this.menuButton_.el()), this.menuButton_.controlText(e, t)
        }, t.handleClick = function(e) {
            this.buttonPressed_ ? this.unpressButton() : this.pressButton()
        }, t.focus = function() {
            this.menuButton_.focus()
        }, t.blur = function() {
            this.menuButton_.blur()
        }, t.handleKeyDown = function(e) {
            Ot.isEventKey(e, "Esc") || Ot.isEventKey(e, "Tab") ? (this.buttonPressed_ && this.unpressButton(), Ot.isEventKey(e, "Tab") || (e.preventDefault(), this.menuButton_.focus())) : (Ot.isEventKey(e, "Up") || Ot.isEventKey(e, "Down")) && (this.buttonPressed_ || (e.preventDefault(), this.pressButton()))
        }, t.handleSubmenuKeyPress = function(e) {
            this.handleSubmenuKeyDown(e)
        }, t.handleSubmenuKeyDown = function(e) {
            (Ot.isEventKey(e, "Esc") || Ot.isEventKey(e, "Tab")) && (this.buttonPressed_ && this.unpressButton(), Ot.isEventKey(e, "Tab") || (e.preventDefault(), this.menuButton_.focus()))
        }, t.pressButton = function() {
            if (this.enabled_) {
                if (this.buttonPressed_ = !0, this.menu.show(), this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), $e && w()) return;
                this.menu.focus()
            }
        }, t.unpressButton = function() {
            this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.menu.hide(), this.menuButton_.el_.setAttribute("aria-expanded", "false"))
        }, t.disable = function() {
            this.unpressButton(), this.enabled_ = !1, this.addClass("vjs-disabled"), this.menuButton_.disable()
        }, t.enable = function() {
            this.enabled_ = !0, this.removeClass("vjs-disabled"), this.menuButton_.enable()
        }, e
    }(je);
    je.registerComponent("MenuButton", Qn);
    var Jn = function(a) {
        function e(e, t) {
            var i, n = t.tracks;
            if ((i = a.call(this, e, t) || this).items.length <= 1 && i.hide(), !n) return f(i);
            var r = ke(f(f(i)), i.update);
            return n.addEventListener("removetrack", r), n.addEventListener("addtrack", r), i.player_.on("ready", r), i.player_.on("dispose", function() {
                n.removeEventListener("removetrack", r), n.removeEventListener("addtrack", r)
            }), i
        }
        return p(e, a), e
    }(Qn);
    je.registerComponent("TrackButton", Jn);
    var Zn = ["Tab", "Esc", "Up", "Down", "Right", "Left"],
        er = function(n) {
            function e(e, t) {
                var i;
                return (i = n.call(this, e, t) || this).selectable = t.selectable, i.isSelected_ = t.selected || !1, i.multiSelectable = t.multiSelectable, i.selected(i.isSelected_), i.selectable ? i.multiSelectable ? i.el_.setAttribute("role", "menuitemcheckbox") : i.el_.setAttribute("role", "menuitemradio") : i.el_.setAttribute("role", "menuitem"), i
            }
            p(e, n);
            var t = e.prototype;
            return t.createEl = function(e, t, i) {
                return this.nonIconControl = !0, n.prototype.createEl.call(this, "li", _({
                    className: "vjs-menu-item",
                    innerHTML: '<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + "</span>",
                    tabIndex: -1
                }, t), i)
            }, t.handleKeyDown = function(t) {
                Zn.some(function(e) {
                    return Ot.isEventKey(t, e)
                }) || n.prototype.handleKeyDown.call(this, t)
            }, t.handleClick = function(e) {
                this.selected(!0)
            }, t.selected = function(e) {
                this.selectable && (this.isSelected_ = e ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected"), !0) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(""), !1))
            }, e
        }(mn);
    je.registerComponent("MenuItem", er);
    var tr = function(u) {
        function e(e, t) {
            var n, i = t.track,
                r = e.textTracks();
            t.label = i.label || i.language || "Unknown", t.selected = "showing" === i.mode, (n = u.call(this, e, t) || this).track = i, n.kinds = (t.kinds || [t.kind || n.track.kind]).filter(Boolean);
            var a, s = function() {
                    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    n.handleTracksChange.apply(f(f(n)), t)
                },
                o = function() {
                    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    n.handleSelectedLanguageChange.apply(f(f(n)), t)
                };
            (e.on(["loadstart", "texttrackchange"], s), r.addEventListener("change", s), r.addEventListener("selectedlanguagechange", o), n.on("dispose", function() {
                e.off(["loadstart", "texttrackchange"], s), r.removeEventListener("change", s), r.removeEventListener("selectedlanguagechange", o)
            }), void 0 === r.onchange) && n.on(["tap", "click"], function() {
                if ("object" != typeof v.Event) try {
                    a = new v.Event("change")
                } catch (e) {}
                a || (a = h.createEvent("Event")).initEvent("change", !0, !0), r.dispatchEvent(a)
            });
            return n.handleTracksChange(), n
        }
        p(e, u);
        var t = e.prototype;
        return t.handleClick = function(e) {
            var t = this.track,
                i = this.player_.textTracks();
            if (u.prototype.handleClick.call(this, e), i)
                for (var n = 0; n < i.length; n++) {
                    var r = i[n]; - 1 !== this.kinds.indexOf(r.kind) && (r === t ? "showing" !== r.mode && (r.mode = "showing") : "disabled" !== r.mode && (r.mode = "disabled"))
                }
        }, t.handleTracksChange = function(e) {
            var t = "showing" === this.track.mode;
            t !== this.isSelected_ && this.selected(t)
        }, t.handleSelectedLanguageChange = function(e) {
            if ("showing" === this.track.mode) {
                var t = this.player_.cache_.selectedLanguage;
                if (t && t.enabled && t.language === this.track.language && t.kind !== this.track.kind) return;
                this.player_.cache_.selectedLanguage = {
                    enabled: !0,
                    language: this.track.language,
                    kind: this.track.kind
                }
            }
        }, t.dispose = function() {
            this.track = null, u.prototype.dispose.call(this)
        }, e
    }(er);
    je.registerComponent("TextTrackMenuItem", tr);
    var ir = function(i) {
        function e(e, t) {
            return t.track = {
                player: e,
                kind: t.kind,
                kinds: t.kinds,
                default: !1,
                mode: "disabled"
            }, t.kinds || (t.kinds = [t.kind]), t.label ? t.track.label = t.label : t.track.label = t.kinds.join(" and ") + " off", t.selectable = !0, t.multiSelectable = !1, i.call(this, e, t) || this
        }
        p(e, i);
        var t = e.prototype;
        return t.handleTracksChange = function(e) {
            for (var t = this.player().textTracks(), i = !0, n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                if (-1 < this.options_.kinds.indexOf(a.kind) && "showing" === a.mode) {
                    i = !1;
                    break
                }
            }
            i !== this.isSelected_ && this.selected(i)
        }, t.handleSelectedLanguageChange = function(e) {
            for (var t = this.player().textTracks(), i = !0, n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                if (-1 < ["captions", "descriptions", "subtitles"].indexOf(a.kind) && "showing" === a.mode) {
                    i = !1;
                    break
                }
            }
            i && (this.player_.cache_.selectedLanguage = {
                enabled: !1
            })
        }, e
    }(tr);
    je.registerComponent("OffTextTrackMenuItem", ir);
    var nr = function(i) {
        function e(e, t) {
            return void 0 === t && (t = {}), t.tracks = e.textTracks(), i.call(this, e, t) || this
        }
        return p(e, i), e.prototype.createItems = function(e, t) {
            var i;
            void 0 === e && (e = []), void 0 === t && (t = tr), this.label_ && (i = this.label_ + " off"), e.push(new ir(this.player_, {
                kinds: this.kinds_,
                kind: this.kind_,
                label: i
            })), this.hideThreshold_ += 1;
            var n = this.player_.textTracks();
            Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
            for (var r = 0; r < n.length; r++) {
                var a = n[r];
                if (-1 < this.kinds_.indexOf(a.kind)) {
                    var s = new t(this.player_, {
                        track: a,
                        kinds: this.kinds_,
                        kind: this.kind_,
                        selectable: !0,
                        multiSelectable: !1
                    });
                    s.addClass("vjs-" + a.kind + "-menu-item"), e.push(s)
                }
            }
            return e
        }, e
    }(Jn);
    je.registerComponent("TextTrackButton", nr);
    var rr = function(s) {
        function e(e, t) {
            var i, n = t.track,
                r = t.cue,
                a = e.currentTime();
            return t.selectable = !0, t.multiSelectable = !1, t.label = r.text, t.selected = r.startTime <= a && a < r.endTime, (i = s.call(this, e, t) || this).track = n, i.cue = r, n.addEventListener("cuechange", ke(f(f(i)), i.update)), i
        }
        p(e, s);
        var t = e.prototype;
        return t.handleClick = function(e) {
            s.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
        }, t.update = function(e) {
            var t = this.cue,
                i = this.player_.currentTime();
            this.selected(t.startTime <= i && i < t.endTime)
        }, e
    }(er);
    je.registerComponent("ChaptersTrackMenuItem", rr);
    var ar = function(n) {
        function e(e, t, i) {
            return n.call(this, e, t, i) || this
        }
        p(e, n);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-chapters-button " + n.prototype.buildCSSClass.call(this)
        }, t.buildWrapperCSSClass = function() {
            return "vjs-chapters-button " + n.prototype.buildWrapperCSSClass.call(this)
        }, t.update = function(e) {
            this.track_ && (!e || "addtrack" !== e.type && "removetrack" !== e.type) || this.setTrack(this.findChaptersTrack()), n.prototype.update.call(this)
        }, t.setTrack = function(e) {
            if (this.track_ !== e) {
                if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) {
                    var t = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                    t && t.removeEventListener("load", this.updateHandler_), this.track_ = null
                }
                if (this.track_ = e, this.track_) {
                    this.track_.mode = "hidden";
                    var i = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                    i && i.addEventListener("load", this.updateHandler_)
                }
            }
        }, t.findChaptersTrack = function() {
            for (var e = this.player_.textTracks() || [], t = e.length - 1; 0 <= t; t--) {
                var i = e[t];
                if (i.kind === this.kind_) return i
            }
        }, t.getMenuCaption = function() {
            return this.track_ && this.track_.label ? this.track_.label : this.localize(Be(this.kind_))
        }, t.createMenu = function() {
            return this.options_.title = this.getMenuCaption(), n.prototype.createMenu.call(this)
        }, t.createItems = function() {
            var e = [];
            if (!this.track_) return e;
            var t = this.track_.cues;
            if (!t) return e;
            for (var i = 0, n = t.length; i < n; i++) {
                var r = t[i],
                    a = new rr(this.player_, {
                        track: this.track_,
                        cue: r
                    });
                e.push(a)
            }
            return e
        }, e
    }(nr);
    ar.prototype.kind_ = "chapters", ar.prototype.controlText_ = "Chapters", je.registerComponent("ChaptersButton", ar);
    var sr = function(s) {
        function e(e, t, i) {
            var n;
            n = s.call(this, e, t, i) || this;
            var r = e.textTracks(),
                a = ke(f(f(n)), n.handleTracksChange);
            return r.addEventListener("change", a), n.on("dispose", function() {
                r.removeEventListener("change", a)
            }), n
        }
        p(e, s);
        var t = e.prototype;
        return t.handleTracksChange = function(e) {
            for (var t = this.player().textTracks(), i = !1, n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                if (a.kind !== this.kind_ && "showing" === a.mode) {
                    i = !0;
                    break
                }
            }
            i ? this.disable() : this.enable()
        }, t.buildCSSClass = function() {
            return "vjs-descriptions-button " + s.prototype.buildCSSClass.call(this)
        }, t.buildWrapperCSSClass = function() {
            return "vjs-descriptions-button " + s.prototype.buildWrapperCSSClass.call(this)
        }, e
    }(nr);
    sr.prototype.kind_ = "descriptions", sr.prototype.controlText_ = "Descriptions", je.registerComponent("DescriptionsButton", sr);
    var or = function(n) {
        function e(e, t, i) {
            return n.call(this, e, t, i) || this
        }
        p(e, n);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-subtitles-button " + n.prototype.buildCSSClass.call(this)
        }, t.buildWrapperCSSClass = function() {
            return "vjs-subtitles-button " + n.prototype.buildWrapperCSSClass.call(this)
        }, e
    }(nr);
    or.prototype.kind_ = "subtitles", or.prototype.controlText_ = "Subtitles", je.registerComponent("SubtitlesButton", or);
    var ur = function(n) {
        function e(e, t) {
            var i;
            return t.track = {
                player: e,
                kind: t.kind,
                label: t.kind + " settings",
                selectable: !1,
                default: !1,
                mode: "disabled"
            }, t.selectable = !1, t.name = "CaptionSettingsMenuItem", (i = n.call(this, e, t) || this).addClass("vjs-texttrack-settings"), i.controlText(", opens " + t.kind + " settings dialog"), i
        }
        return p(e, n), e.prototype.handleClick = function(e) {
            this.player().getChild("textTrackSettings").open()
        }, e
    }(tr);
    je.registerComponent("CaptionSettingsMenuItem", ur);
    var lr = function(n) {
        function e(e, t, i) {
            return n.call(this, e, t, i) || this
        }
        p(e, n);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-captions-button " + n.prototype.buildCSSClass.call(this)
        }, t.buildWrapperCSSClass = function() {
            return "vjs-captions-button " + n.prototype.buildWrapperCSSClass.call(this)
        }, t.createItems = function() {
            var e = [];
            return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (e.push(new ur(this.player_, {
                kind: this.kind_
            })), this.hideThreshold_ += 1), n.prototype.createItems.call(this, e)
        }, e
    }(nr);
    lr.prototype.kind_ = "captions", lr.prototype.controlText_ = "Captions", je.registerComponent("CaptionsButton", lr);
    var cr = function(r) {
        function e() {
            return r.apply(this, arguments) || this
        }
        return p(e, r), e.prototype.createEl = function(e, t, i) {
            var n = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
            return "captions" === this.options_.track.kind && (n += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Captions") + "</span>\n      "), n += "</span>", r.prototype.createEl.call(this, e, _({
                innerHTML: n
            }, t), i)
        }, e
    }(tr);
    je.registerComponent("SubsCapsMenuItem", cr);
    var hr = function(n) {
        function e(e, t) {
            var i;
            return void 0 === t && (t = {}), (i = n.call(this, e, t) || this).label_ = "subtitles", -1 < ["en", "en-us", "en-ca", "fr-ca"].indexOf(i.player_.language_) && (i.label_ = "captions"), i.menuButton_.controlText(Be(i.label_)), i
        }
        p(e, n);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-subs-caps-button " + n.prototype.buildCSSClass.call(this)
        }, t.buildWrapperCSSClass = function() {
            return "vjs-subs-caps-button " + n.prototype.buildWrapperCSSClass.call(this)
        }, t.createItems = function() {
            var e = [];
            return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (e.push(new ur(this.player_, {
                kind: this.label_
            })), this.hideThreshold_ += 1), e = n.prototype.createItems.call(this, e, cr)
        }, e
    }(nr);
    hr.prototype.kinds_ = ["captions", "subtitles"], hr.prototype.controlText_ = "Subtitles", je.registerComponent("SubsCapsButton", hr);
    var dr = function(s) {
        function e(e, t) {
            var n, i = t.track,
                r = e.audioTracks();
            t.label = i.label || i.language || "Unknown", t.selected = i.enabled, (n = s.call(this, e, t) || this).track = i, n.addClass("vjs-" + i.kind + "-menu-item");
            var a = function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                n.handleTracksChange.apply(f(f(n)), t)
            };
            return r.addEventListener("change", a), n.on("dispose", function() {
                r.removeEventListener("change", a)
            }), n
        }
        p(e, s);
        var t = e.prototype;
        return t.createEl = function(e, t, i) {
            var n = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
            return "main-desc" === this.options_.track.kind && (n += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Descriptions") + "</span>\n      "), n += "</span>", s.prototype.createEl.call(this, e, _({
                innerHTML: n
            }, t), i)
        }, t.handleClick = function(e) {
            var t = this.player_.audioTracks();
            s.prototype.handleClick.call(this, e);
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enabled = n === this.track
            }
        }, t.handleTracksChange = function(e) {
            this.selected(this.track.enabled)
        }, e
    }(er);
    je.registerComponent("AudioTrackMenuItem", dr);
    var pr = function(i) {
        function e(e, t) {
            return void 0 === t && (t = {}), t.tracks = e.audioTracks(), i.call(this, e, t) || this
        }
        p(e, i);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-audio-button " + i.prototype.buildCSSClass.call(this)
        }, t.buildWrapperCSSClass = function() {
            return "vjs-audio-button " + i.prototype.buildWrapperCSSClass.call(this)
        }, t.createItems = function(e) {
            void 0 === e && (e = []), this.hideThreshold_ = 1;
            for (var t = this.player_.audioTracks(), i = 0; i < t.length; i++) {
                var n = t[i];
                e.push(new dr(this.player_, {
                    track: n,
                    selectable: !0,
                    multiSelectable: !1
                }))
            }
            return e
        }, e
    }(Jn);
    pr.prototype.controlText_ = "Audio Track", je.registerComponent("AudioTrackButton", pr);
    var fr = function(a) {
        function e(e, t) {
            var i, n = t.rate,
                r = parseFloat(n, 10);
            return t.label = n, t.selected = 1 === r, t.selectable = !0, t.multiSelectable = !1, (i = a.call(this, e, t) || this).label = n, i.rate = r, i.on(e, "ratechange", i.update), i
        }
        p(e, a);
        var t = e.prototype;
        return t.handleClick = function(e) {
            a.prototype.handleClick.call(this), this.player().playbackRate(this.rate)
        }, t.update = function(e) {
            this.selected(this.player().playbackRate() === this.rate)
        }, e
    }(er);
    fr.prototype.contentElType = "button", je.registerComponent("PlaybackRateMenuItem", fr);
    var mr = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).updateVisibility(), i.updateLabel(), i.on(e, "loadstart", i.updateVisibility), i.on(e, "ratechange", i.updateLabel), i
        }
        p(e, n);
        var t = e.prototype;
        return t.createEl = function() {
            var e = n.prototype.createEl.call(this);
            return this.labelEl_ = A("div", {
                className: "vjs-playback-rate-value",
                innerHTML: "1x"
            }), e.appendChild(this.labelEl_), e
        }, t.dispose = function() {
            this.labelEl_ = null, n.prototype.dispose.call(this)
        }, t.buildCSSClass = function() {
            return "vjs-playback-rate " + n.prototype.buildCSSClass.call(this)
        }, t.buildWrapperCSSClass = function() {
            return "vjs-playback-rate " + n.prototype.buildWrapperCSSClass.call(this)
        }, t.createMenu = function() {
            var e = new $n(this.player()),
                t = this.playbackRates();
            if (t)
                for (var i = t.length - 1; 0 <= i; i--) e.addChild(new fr(this.player(), {
                    rate: t[i] + "x"
                }));
            return e
        }, t.updateARIAAttributes = function() {
            this.el().setAttribute("aria-valuenow", this.player().playbackRate())
        }, t.handleClick = function(e) {
            for (var t = this.player().playbackRate(), i = this.playbackRates(), n = i[0], r = 0; r < i.length; r++)
                if (i[r] > t) {
                    n = i[r];
                    break
                } this.player().playbackRate(n)
        }, t.playbackRates = function() {
            return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates
        }, t.playbackRateSupported = function() {
            return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && 0 < this.playbackRates().length
        }, t.updateVisibility = function(e) {
            this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
        }, t.updateLabel = function(e) {
            this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
        }, e
    }(Qn);
    mr.prototype.controlText_ = "Playback Rate", je.registerComponent("PlaybackRateMenuButton", mr);
    var gr = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        p(t, e);
        var i = t.prototype;
        return i.buildCSSClass = function() {
            return "vjs-spacer " + e.prototype.buildCSSClass.call(this)
        }, i.createEl = function() {
            return e.prototype.createEl.call(this, "div", {
                className: this.buildCSSClass()
            })
        }, t
    }(je);
    je.registerComponent("Spacer", gr);
    var yr = function(t) {
        function e() {
            return t.apply(this, arguments) || this
        }
        p(e, t);
        var i = e.prototype;
        return i.buildCSSClass = function() {
            return "vjs-custom-control-spacer " + t.prototype.buildCSSClass.call(this)
        }, i.createEl = function() {
            var e = t.prototype.createEl.call(this, {
                className: this.buildCSSClass()
            });
            return e.innerHTML = " ", e
        }, e
    }(gr);
    je.registerComponent("CustomControlSpacer", yr);
    var vr = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        return p(t, e), t.prototype.createEl = function() {
            return e.prototype.createEl.call(this, "div", {
                className: "vjs-control-bar",
                dir: "ltr"
            })
        }, t
    }(je);
    vr.prototype.options_ = {
        children: ["playToggle", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "seekToLive", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle"]
    }, je.registerComponent("ControlBar", vr);
    var _r = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).on(e, "error", i.open), i
        }
        p(e, n);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-error-display " + n.prototype.buildCSSClass.call(this)
        }, t.content = function() {
            var e = this.player().error();
            return e ? this.localize(e.message) : ""
        }, e
    }(Ut);
    _r.prototype.options_ = Ne(Ut.prototype.options_, {
        pauseOnOpen: !1,
        fillAlways: !0,
        temporary: !1,
        uncloseable: !0
    }), je.registerComponent("ErrorDisplay", _r);
    var br = "vjs-text-track-settings",
        Tr = ["#000", "Black"],
        Sr = ["#00F", "Blue"],
        kr = ["#0FF", "Cyan"],
        Cr = ["#0F0", "Green"],
        wr = ["#F0F", "Magenta"],
        Er = ["#F00", "Red"],
        Ar = ["#FFF", "White"],
        Lr = ["#FF0", "Yellow"],
        Pr = ["1", "Opaque"],
        Or = ["0.5", "Semi-Transparent"],
        Ir = ["0", "Transparent"],
        Ur = {
            backgroundColor: {
                selector: ".vjs-bg-color > select",
                id: "captions-background-color-%s",
                label: "Color",
                options: [Tr, Ar, Er, Cr, Sr, Lr, wr, kr]
            },
            backgroundOpacity: {
                selector: ".vjs-bg-opacity > select",
                id: "captions-background-opacity-%s",
                label: "Transparency",
                options: [Pr, Or, Ir]
            },
            color: {
                selector: ".vjs-fg-color > select",
                id: "captions-foreground-color-%s",
                label: "Color",
                options: [Ar, Tr, Er, Cr, Sr, Lr, wr, kr]
            },
            edgeStyle: {
                selector: ".vjs-edge-style > select",
                id: "%s",
                label: "Text Edge Style",
                options: [
                    ["none", "None"],
                    ["raised", "Raised"],
                    ["depressed", "Depressed"],
                    ["uniform", "Uniform"],
                    ["dropshadow", "Dropshadow"]
                ]
            },
            fontFamily: {
                selector: ".vjs-font-family > select",
                id: "captions-font-family-%s",
                label: "Font Family",
                options: [
                    ["proportionalSansSerif", "Proportional Sans-Serif"],
                    ["monospaceSansSerif", "Monospace Sans-Serif"],
                    ["proportionalSerif", "Proportional Serif"],
                    ["monospaceSerif", "Monospace Serif"],
                    ["casual", "Casual"],
                    ["script", "Script"],
                    ["small-caps", "Small Caps"]
                ]
            },
            fontPercent: {
                selector: ".vjs-font-percent > select",
                id: "captions-font-size-%s",
                label: "Font Size",
                options: [
                    ["0.50", "50%"],
                    ["0.75", "75%"],
                    ["1.00", "100%"],
                    ["1.25", "125%"],
                    ["1.50", "150%"],
                    ["1.75", "175%"],
                    ["2.00", "200%"],
                    ["3.00", "300%"],
                    ["4.00", "400%"]
                ],
                default: 2,
                parser: function(e) {
                    return "1.00" === e ? null : Number(e)
                }
            },
            textOpacity: {
                selector: ".vjs-text-opacity > select",
                id: "captions-foreground-opacity-%s",
                label: "Transparency",
                options: [Pr, Or]
            },
            windowColor: {
                selector: ".vjs-window-color > select",
                id: "captions-window-color-%s",
                label: "Color"
            },
            windowOpacity: {
                selector: ".vjs-window-opacity > select",
                id: "captions-window-opacity-%s",
                label: "Transparency",
                options: [Ir, Or, Pr]
            }
        };

    function xr(e, t) {
        if (t && (e = t(e)), e && "none" !== e) return e
    }
    Ur.windowColor.options = Ur.backgroundColor.options;
    var Dr = function(n) {
        function e(e, t) {
            var i;
            return t.temporary = !1, (i = n.call(this, e, t) || this).updateDisplay = ke(f(f(i)), i.updateDisplay), i.fill(), i.hasBeenOpened_ = i.hasBeenFilled_ = !0, i.endDialog = A("p", {
                className: "vjs-control-text",
                textContent: i.localize("End of dialog window.")
            }), i.el().appendChild(i.endDialog), i.setDefaults(), void 0 === t.persistTextTrackSettings && (i.options_.persistTextTrackSettings = i.options_.playerOptions.persistTextTrackSettings), i.on(i.$(".vjs-done-button"), "click", function() {
                i.saveSettings(), i.close()
            }), i.on(i.$(".vjs-default-button"), "click", function() {
                i.setDefaults(), i.updateDisplay()
            }), o(Ur, function(e) {
                i.on(i.$(e.selector), "change", i.updateDisplay)
            }), i.options_.persistTextTrackSettings && i.restoreSettings(), i
        }
        p(e, n);
        var t = e.prototype;
        return t.dispose = function() {
            this.endDialog = null, n.prototype.dispose.call(this)
        }, t.createElSelect_ = function(e, t, i) {
            var n = this;
            void 0 === t && (t = ""), void 0 === i && (i = "label");
            var r = Ur[e],
                a = r.id.replace("%s", this.id_),
                s = [t, a].join(" ").trim();
            return ["<" + i + ' id="' + a + '" class="' + ("label" === i ? "vjs-label" : "") + '">', this.localize(r.label), "</" + i + ">", '<select aria-labelledby="' + s + '">'].concat(r.options.map(function(e) {
                var t = a + "-" + e[1].replace(/\W+/g, "");
                return ['<option id="' + t + '" value="' + e[0] + '" ', 'aria-labelledby="' + s + " " + t + '">', n.localize(e[1]), "</option>"].join("")
            })).concat("</select>").join("")
        }, t.createElFgColor_ = function() {
            var e = "captions-text-legend-" + this.id_;
            return ['<fieldset class="vjs-fg-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Text"), "</legend>", this.createElSelect_("color", e), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", e), "</span>", "</fieldset>"].join("")
        }, t.createElBgColor_ = function() {
            var e = "captions-background-" + this.id_;
            return ['<fieldset class="vjs-bg-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Background"), "</legend>", this.createElSelect_("backgroundColor", e), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", e), "</span>", "</fieldset>"].join("")
        }, t.createElWinColor_ = function() {
            var e = "captions-window-" + this.id_;
            return ['<fieldset class="vjs-window-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Window"), "</legend>", this.createElSelect_("windowColor", e), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", e), "</span>", "</fieldset>"].join("")
        }, t.createElColors_ = function() {
            return A("div", {
                className: "vjs-track-settings-colors",
                innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("")
            })
        }, t.createElFont_ = function() {
            return A("div", {
                className: "vjs-track-settings-font",
                innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("")
            })
        }, t.createElControls_ = function() {
            var e = this.localize("restore all settings to the default values");
            return A("div", {
                className: "vjs-track-settings-controls",
                innerHTML: ['<button type="button" class="vjs-default-button" title="' + e + '">', this.localize("Reset"), '<span class="vjs-control-text"> ' + e + "</span>", "</button>", '<button type="button" class="vjs-done-button">' + this.localize("Done") + "</button>"].join("")
            })
        }, t.content = function() {
            return [this.createElColors_(), this.createElFont_(), this.createElControls_()]
        }, t.label = function() {
            return this.localize("Caption Settings Dialog")
        }, t.description = function() {
            return this.localize("Beginning of dialog window. Escape will cancel and close the window.")
        }, t.buildCSSClass = function() {
            return n.prototype.buildCSSClass.call(this) + " vjs-text-track-settings"
        }, t.getValues = function() {
            var i, n, e, s = this;
            return n = function(e, t, i) {
                var n, r, a = (n = s.$(t.selector), r = t.parser, xr(n.options[n.options.selectedIndex].value, r));
                return void 0 !== a && (e[i] = a), e
            }, void 0 === (e = {}) && (e = 0), r(i = Ur).reduce(function(e, t) {
                return n(e, i[t], t)
            }, e)
        }, t.setValues = function(i) {
            var n = this;
            o(Ur, function(e, t) {
                ! function(e, t, i) {
                    if (t)
                        for (var n = 0; n < e.options.length; n++)
                            if (xr(e.options[n].value, i) === t) {
                                e.selectedIndex = n;
                                break
                            }
                }(n.$(e.selector), i[t], e.parser)
            })
        }, t.setDefaults = function() {
            var i = this;
            o(Ur, function(e) {
                var t = e.hasOwnProperty("default") ? e.default : 0;
                i.$(e.selector).selectedIndex = t
            })
        }, t.restoreSettings = function() {
            var e;
            try {
                e = JSON.parse(v.localStorage.getItem(br))
            } catch (e) {
                m.warn(e)
            }
            e && this.setValues(e)
        }, t.saveSettings = function() {
            if (this.options_.persistTextTrackSettings) {
                var e = this.getValues();
                try {
                    Object.keys(e).length ? v.localStorage.setItem(br, JSON.stringify(e)) : v.localStorage.removeItem(br)
                } catch (e) {
                    m.warn(e)
                }
            }
        }, t.updateDisplay = function() {
            var e = this.player_.getChild("textTrackDisplay");
            e && e.updateDisplay()
        }, t.conditionalBlur_ = function() {
            this.previouslyActiveEl_ = null;
            var e = this.player_.controlBar,
                t = e && e.subsCapsButton,
                i = e && e.captionsButton;
            t ? t.focus() : i && i.focus()
        }, e
    }(Ut);
    je.registerComponent("TextTrackSettings", Dr);
    var Rr = function(a) {
        function e(e, t) {
            var i, n = t.ResizeObserver || v.ResizeObserver;
            null === t.ResizeObserver && (n = !1);
            var r = Ne({
                createEl: !n,
                reportTouchActivity: !1
            }, t);
            return (i = a.call(this, e, r) || this).ResizeObserver = t.ResizeObserver || v.ResizeObserver, i.loadListener_ = null, i.resizeObserver_ = null, i.debouncedHandler_ = function(n, r, a, s) {
                var o;
                void 0 === s && (s = v);
                var e = function() {
                    var e = this,
                        t = arguments,
                        i = function() {
                            i = o = null, a || n.apply(e, t)
                        };
                    !o && a && n.apply(e, t), s.clearTimeout(o), o = s.setTimeout(i, r)
                };
                return e.cancel = function() {
                    s.clearTimeout(o), o = null
                }, e
            }(function() {
                i.resizeHandler()
            }, 100, !1, f(f(i))), n ? (i.resizeObserver_ = new i.ResizeObserver(i.debouncedHandler_), i.resizeObserver_.observe(e.el())) : (i.loadListener_ = function() {
                if (i.el_ && i.el_.contentWindow) {
                    var e = i.debouncedHandler_,
                        t = i.unloadListener_ = function() {
                            de(this, "resize", e), de(this, "unload", t), t = null
                        };
                    he(i.el_.contentWindow, "unload", t), he(i.el_.contentWindow, "resize", e)
                }
            }, i.one("load", i.loadListener_)), i
        }
        p(e, a);
        var t = e.prototype;
        return t.createEl = function() {
            return a.prototype.createEl.call(this, "iframe", {
                className: "vjs-resize-manager",
                tabIndex: -1
            }, {
                "aria-hidden": "true"
            })
        }, t.resizeHandler = function() {
            this.player_ && this.player_.trigger && this.player_.trigger("playerresize")
        }, t.dispose = function() {
            this.debouncedHandler_ && this.debouncedHandler_.cancel(), this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect()), this.loadListener_ && this.off("load", this.loadListener_), this.el_ && this.el_.contentWindow && this.unloadListener_ && this.unloadListener_.call(this.el_.contentWindow), this.ResizeObserver = null, this.resizeObserver = null, this.debouncedHandler_ = null, this.loadListener_ = null, a.prototype.dispose.call(this)
        }, e
    }(je);
    je.registerComponent("ResizeManager", Rr);
    var Mr = function(r) {
        function e(e, t) {
            var i, n = Ne({
                createEl: !1
            }, t);
            return (i = r.call(this, e, n) || this).reset_(), i.on(i.player_, "durationchange", i.handleDurationchange), at && "hidden" in h && "visibilityState" in h && i.on(h, "visibilitychange", i.handleVisibilityChange), i
        }
        p(e, r);
        var t = e.prototype;
        return t.handleVisibilityChange = function() {
            this.player_.duration() === 1 / 0 && (h.hidden ? this.stopTracking() : this.startTracking())
        }, t.isBehind_ = function() {
            if (!this.timeupdateSeen_) return !1;
            var e = this.liveCurrentTime(),
                t = this.player_.currentTime(),
                i = this.seekableIncrement_;
            return e !== 1 / 0 && t <= e - (2 * i + .07)
        }, t.trackLive_ = function() {
            this.pastSeekEnd_ = this.pastSeekEnd_;
            var e = this.player_.seekable();
            if (e && e.length) {
                var t = this.seekableEnd();
                t !== this.lastSeekEnd_ && (this.lastSeekEnd_ && (this.seekableIncrement_ = Math.abs(t - this.lastSeekEnd_)), this.pastSeekEnd_ = 0, this.lastSeekEnd_ = t, this.trigger("seekableendchange")), this.pastSeekEnd_ = this.pastSeekEnd() + .03, this.isBehind_() !== this.behindLiveEdge() && (this.behindLiveEdge_ = this.isBehind_(), this.trigger("liveedgechange"))
            }
        }, t.handleDurationchange = function() {
            this.player_.duration() === 1 / 0 ? this.startTracking() : this.stopTracking()
        }, t.startTracking = function() {
            var e = this;
            this.isTracking() || (this.trackingInterval_ = this.setInterval(this.trackLive_, 30), this.trackLive_(), this.on(this.player_, "play", this.trackLive_), this.on(this.player_, "pause", this.trackLive_), this.one(this.player_, "play", this.handlePlay), this.timeupdateSeen_ || (this.handleTimeupdate = function() {
                e.timeupdateSeen_ = !0, e.handleTimeupdate = null
            }, this.one(this.player_, "timeupdate", this.handleTimeupdate)))
        }, t.handlePlay = function() {
            this.one(this.player_, "timeupdate", this.seekToLiveEdge)
        }, t.reset_ = function() {
            this.pastSeekEnd_ = 0, this.lastSeekEnd_ = null, this.behindLiveEdge_ = null, this.timeupdateSeen_ = !1, this.clearInterval(this.trackingInterval_), this.trackingInterval_ = null, this.seekableIncrement_ = 12, this.off(this.player_, "play", this.trackLive_), this.off(this.player_, "pause", this.trackLive_), this.off(this.player_, "play", this.handlePlay), this.off(this.player_, "timeupdate", this.seekToLiveEdge), this.handleTimeupdate && (this.off(this.player_, "timeupdate", this.handleTimeupdate), this.handleTimeupdate = null)
        }, t.stopTracking = function() {
            this.isTracking() && this.reset_()
        }, t.seekableEnd = function() {
            for (var e = this.player_.seekable(), t = [], i = e ? e.length : 0; i--;) t.push(e.end(i));
            return t.length ? t.sort()[t.length - 1] : 1 / 0
        }, t.seekableStart = function() {
            for (var e = this.player_.seekable(), t = [], i = e ? e.length : 0; i--;) t.push(e.start(i));
            return t.length ? t.sort()[0] : 0
        }, t.liveWindow = function() {
            var e = this.liveCurrentTime();
            return e === 1 / 0 ? 1 / 0 : e - this.seekableStart()
        }, t.isLive = function() {
            return this.isTracking()
        }, t.atLiveEdge = function() {
            return !this.behindLiveEdge()
        }, t.liveCurrentTime = function() {
            return this.pastSeekEnd() + this.seekableEnd()
        }, t.pastSeekEnd = function() {
            return this.pastSeekEnd_
        }, t.behindLiveEdge = function() {
            return this.behindLiveEdge_
        }, t.isTracking = function() {
            return "number" == typeof this.trackingInterval_
        }, t.seekToLiveEdge = function() {
            this.atLiveEdge() || (this.player_.currentTime(this.liveCurrentTime()), this.player_.paused() && this.player_.play())
        }, t.dispose = function() {
            this.stopTracking(), r.prototype.dispose.call(this)
        }, e
    }(je);
    je.registerComponent("LiveTracker", Mr);
    var Br = function(e) {
            var t = e.el();
            if (t.hasAttribute("src")) return e.triggerSourceset(t.src), !0;
            var i = e.$$("source"),
                n = [],
                r = "";
            if (!i.length) return !1;
            for (var a = 0; a < i.length; a++) {
                var s = i[a].src;
                s && -1 === n.indexOf(s) && n.push(s)
            }
            return !!n.length && (1 === n.length && (r = n[0]), e.triggerSourceset(r), !0)
        },
        Nr = Object.defineProperty({}, "innerHTML", {
            get: function() {
                return this.cloneNode(!0).innerHTML
            },
            set: function(e) {
                var t = h.createElement(this.nodeName.toLowerCase());
                t.innerHTML = e;
                for (var i = h.createDocumentFragment(); t.childNodes.length;) i.appendChild(t.childNodes[0]);
                return this.innerText = "", v.Element.prototype.appendChild.call(this, i), this.innerHTML
            }
        }),
        jr = function(e, t) {
            for (var i = {}, n = 0; n < e.length && !((i = Object.getOwnPropertyDescriptor(e[n], t)) && i.set && i.get); n++);
            return i.enumerable = !0, i.configurable = !0, i
        },
        Fr = function(a) {
            var s = a.el();
            if (!s.resetSourceWatch_) {
                var t = {},
                    e = jr([a.el(), v.HTMLMediaElement.prototype, v.Element.prototype, Nr], "innerHTML"),
                    i = function(r) {
                        return function() {
                            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                            var n = r.apply(s, t);
                            return Br(a), n
                        }
                    };
                ["append", "appendChild", "insertAdjacentHTML"].forEach(function(e) {
                    s[e] && (t[e] = s[e], s[e] = i(t[e]))
                }), Object.defineProperty(s, "innerHTML", Ne(e, {
                    set: i(e.set)
                })), s.resetSourceWatch_ = function() {
                    s.resetSourceWatch_ = null, Object.keys(t).forEach(function(e) {
                        s[e] = t[e]
                    }), Object.defineProperty(s, "innerHTML", e)
                }, a.one("sourceset", s.resetSourceWatch_)
            }
        },
        Vr = Object.defineProperty({}, "src", {
            get: function() {
                return this.hasAttribute("src") ? Yt(v.Element.prototype.getAttribute.call(this, "src")) : ""
            },
            set: function(e) {
                return v.Element.prototype.setAttribute.call(this, "src", e), e
            }
        }),
        Hr = function(n) {
            if (n.featuresSourceset) {
                var r = n.el();
                if (!r.resetSourceset_) {
                    var i = jr([n.el(), v.HTMLMediaElement.prototype, Vr], "src"),
                        a = r.setAttribute,
                        t = r.load;
                    Object.defineProperty(r, "src", Ne(i, {
                        set: function(e) {
                            var t = i.set.call(r, e);
                            return n.triggerSourceset(r.src), t
                        }
                    })), r.setAttribute = function(e, t) {
                        var i = a.call(r, e, t);
                        return /src/i.test(e) && n.triggerSourceset(r.src), i
                    }, r.load = function() {
                        var e = t.call(r);
                        return Br(n) || (n.triggerSourceset(""), Fr(n)), e
                    }, r.currentSrc ? n.triggerSourceset(r.currentSrc) : Br(n) || Fr(n), r.resetSourceset_ = function() {
                        r.resetSourceset_ = null, r.load = t, r.setAttribute = a, Object.defineProperty(r, "src", i), r.resetSourceWatch_ && r.resetSourceWatch_()
                    }
                }
            }
        };

    function qr() {
        var e = t(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]);
        return qr = function() {
            return e
        }, e
    }
    var zr = function(c) {
        function o(e, t) {
            var i;
            i = c.call(this, e, t) || this;
            var n = e.source,
                r = !1;
            if (n && (i.el_.currentSrc !== n.src || e.tag && 3 === e.tag.initNetworkState_) ? i.setSource(n) : i.handleLateInit_(i.el_), e.enableSourceset && i.setupSourcesetHandling_(), i.el_.hasChildNodes()) {
                for (var a = i.el_.childNodes, s = a.length, o = []; s--;) {
                    var u = a[s];
                    "track" === u.nodeName.toLowerCase() && (i.featuresNativeTextTracks ? (i.remoteTextTrackEls().addTrackElement_(u), i.remoteTextTracks().addTrack(u.track), i.textTracks().addTrack(u.track), r || i.el_.hasAttribute("crossorigin") || !$t(u.src) || (r = !0)) : o.push(u))
                }
                for (var l = 0; l < o.length; l++) i.el_.removeChild(o[l])
            }
            return i.proxyNativeTracks_(), i.featuresNativeTextTracks && r && m.warn(y(qr())), i.restoreMetadataTracksInIOSNativePlayer_(), (ut || Ye || et) && !0 === e.nativeControlsForTouch && i.setControls(!0), i.proxyWebkitFullscreen_(), i.triggerReady(), i
        }
        p(o, c);
        var e = o.prototype;
        return e.dispose = function() {
            this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(), o.disposeMediaElement(this.el_), this.options_ = null, c.prototype.dispose.call(this)
        }, e.setupSourcesetHandling_ = function() {
            Hr(this)
        }, e.restoreMetadataTracksInIOSNativePlayer_ = function() {
            var n, r = this.textTracks(),
                e = function() {
                    n = [];
                    for (var e = 0; e < r.length; e++) {
                        var t = r[e];
                        "metadata" === t.kind && n.push({
                            track: t,
                            storedMode: t.mode
                        })
                    }
                };
            e(), r.addEventListener("change", e), this.on("dispose", function() {
                return r.removeEventListener("change", e)
            });
            var t = function e() {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    "disabled" === i.track.mode && i.track.mode !== i.storedMode && (i.track.mode = i.storedMode)
                }
                r.removeEventListener("change", e)
            };
            this.on("webkitbeginfullscreen", function() {
                r.removeEventListener("change", e), r.removeEventListener("change", t), r.addEventListener("change", t)
            }), this.on("webkitendfullscreen", function() {
                r.removeEventListener("change", e), r.addEventListener("change", e), r.removeEventListener("change", t)
            })
        }, e.overrideNative_ = function(e, t) {
            var i = this;
            if (t === this["featuresNative" + e + "Tracks"]) {
                var n = e.toLowerCase();
                this[n + "TracksListeners_"] && Object.keys(this[n + "TracksListeners_"]).forEach(function(e) {
                    i.el()[n + "Tracks"].removeEventListener(e, i[n + "TracksListeners_"][e])
                }), this["featuresNative" + e + "Tracks"] = !t, this[n + "TracksListeners_"] = null, this.proxyNativeTracksForType_(n)
            }
        }, e.overrideNativeAudioTracks = function(e) {
            this.overrideNative_("Audio", e)
        }, e.overrideNativeVideoTracks = function(e) {
            this.overrideNative_("Video", e)
        }, e.proxyNativeTracksForType_ = function(e) {
            var n = this,
                t = Si[e],
                r = this.el()[t.getterName],
                a = this[t.getterName]();
            if (this["featuresNative" + t.capitalName + "Tracks"] && r && r.addEventListener) {
                var s = {
                        change: function(e) {
                            a.trigger({
                                type: "change",
                                target: a,
                                currentTarget: a,
                                srcElement: a
                            })
                        },
                        addtrack: function(e) {
                            a.addTrack(e.track)
                        },
                        removetrack: function(e) {
                            a.removeTrack(e.track)
                        }
                    },
                    i = function() {
                        for (var e = [], t = 0; t < a.length; t++) {
                            for (var i = !1, n = 0; n < r.length; n++)
                                if (r[n] === a[t]) {
                                    i = !0;
                                    break
                                } i || e.push(a[t])
                        }
                        for (; e.length;) a.removeTrack(e.shift())
                    };
                this[t.getterName + "Listeners_"] = s, Object.keys(s).forEach(function(t) {
                    var i = s[t];
                    r.addEventListener(t, i), n.on("dispose", function(e) {
                        return r.removeEventListener(t, i)
                    })
                }), this.on("loadstart", i), this.on("dispose", function(e) {
                    return n.off("loadstart", i)
                })
            }
        }, e.proxyNativeTracks_ = function() {
            var t = this;
            Si.names.forEach(function(e) {
                t.proxyNativeTracksForType_(e)
            })
        }, e.createEl = function() {
            var e = this.options_.tag;
            if (!e || !this.options_.playerElIngest && !this.movingMediaElementInDOM) {
                if (e) {
                    var t = e.cloneNode(!0);
                    e.parentNode && e.parentNode.insertBefore(t, e), o.disposeMediaElement(e), e = t
                } else {
                    e = h.createElement("video");
                    var i = Ne({}, this.options_.tag && R(this.options_.tag));
                    ut && !0 === this.options_.nativeControlsForTouch || delete i.controls, D(e, _(i, {
                        id: this.options_.techId,
                        class: "vjs-tech"
                    }))
                }
                e.playerId = this.options_.playerId
            }
            "undefined" != typeof this.options_.preload && B(e, "preload", this.options_.preload);
            for (var n = ["loop", "muted", "playsinline", "autoplay"], r = 0; r < n.length; r++) {
                var a = n[r],
                    s = this.options_[a];
                "undefined" != typeof s && (s ? B(e, a, a) : N(e, a), e[a] = s)
            }
            return e
        }, e.handleLateInit_ = function(e) {
            if (0 !== e.networkState && 3 !== e.networkState) {
                if (0 === e.readyState) {
                    var t = !1,
                        i = function() {
                            t = !0
                        };
                    this.on("loadstart", i);
                    var n = function() {
                        t || this.trigger("loadstart")
                    };
                    return this.on("loadedmetadata", n), void this.ready(function() {
                        this.off("loadstart", i), this.off("loadedmetadata", n), t || this.trigger("loadstart")
                    })
                }
                var r = ["loadstart"];
                r.push("loadedmetadata"), 2 <= e.readyState && r.push("loadeddata"), 3 <= e.readyState && r.push("canplay"), 4 <= e.readyState && r.push("canplaythrough"), this.ready(function() {
                    r.forEach(function(e) {
                        this.trigger(e)
                    }, this)
                })
            }
        }, e.setCurrentTime = function(e) {
            try {
                this.el_.currentTime = e
            } catch (e) {
                m(e, "Video is not ready. (Video.js)")
            }
        }, e.duration = function() {
            var t = this;
            if (this.el_.duration === 1 / 0 && Je && nt && 0 === this.el_.currentTime) {
                return this.on("timeupdate", function e() {
                    0 < t.el_.currentTime && (t.el_.duration === 1 / 0 && t.trigger("durationchange"), t.off("timeupdate", e))
                }), NaN
            }
            return this.el_.duration || NaN
        }, e.width = function() {
            return this.el_.offsetWidth
        }, e.height = function() {
            return this.el_.offsetHeight
        }, e.proxyWebkitFullscreen_ = function() {
            var e = this;
            if ("webkitDisplayingFullscreen" in this.el_) {
                var t = function() {
                        this.trigger("fullscreenchange", {
                            isFullscreen: !1
                        })
                    },
                    i = function() {
                        "webkitPresentationMode" in this.el_ && "picture-in-picture" !== this.el_.webkitPresentationMode && (this.one("webkitendfullscreen", t), this.trigger("fullscreenchange", {
                            isFullscreen: !0
                        }))
                    };
                this.on("webkitbeginfullscreen", i), this.on("dispose", function() {
                    e.off("webkitbeginfullscreen", i), e.off("webkitendfullscreen", t)
                })
            }
        }, e.supportsFullScreen = function() {
            if ("function" == typeof this.el_.webkitEnterFullScreen) {
                var e = v.navigator && v.navigator.userAgent || "";
                if (/Android/.test(e) || !/Chrome|Mac OS X 10.5/.test(e)) return !0
            }
            return !1
        }, e.enterFullScreen = function() {
            var e = this.el_;
            e.paused && e.networkState <= e.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function() {
                e.pause(), e.webkitEnterFullScreen()
            }, 0)) : e.webkitEnterFullScreen()
        }, e.exitFullScreen = function() {
            this.el_.webkitExitFullScreen()
        }, e.src = function(e) {
            if (void 0 === e) return this.el_.src;
            this.setSrc(e)
        }, e.reset = function() {
            o.resetMediaElement(this.el_)
        }, e.currentSrc = function() {
            return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
        }, e.setControls = function(e) {
            this.el_.controls = !!e
        }, e.addTextTrack = function(e, t, i) {
            return this.featuresNativeTextTracks ? this.el_.addTextTrack(e, t, i) : c.prototype.addTextTrack.call(this, e, t, i)
        }, e.createRemoteTextTrack = function(e) {
            if (!this.featuresNativeTextTracks) return c.prototype.createRemoteTextTrack.call(this, e);
            var t = h.createElement("track");
            return e.kind && (t.kind = e.kind), e.label && (t.label = e.label), (e.language || e.srclang) && (t.srclang = e.language || e.srclang), e.default && (t.default = e.default), e.id && (t.id = e.id), e.src && (t.src = e.src), t
        }, e.addRemoteTextTrack = function(e, t) {
            var i = c.prototype.addRemoteTextTrack.call(this, e, t);
            return this.featuresNativeTextTracks && this.el().appendChild(i), i
        }, e.removeRemoteTextTrack = function(e) {
            if (c.prototype.removeRemoteTextTrack.call(this, e), this.featuresNativeTextTracks)
                for (var t = this.$$("track"), i = t.length; i--;) e !== t[i] && e !== t[i].track || this.el().removeChild(t[i])
        }, e.getVideoPlaybackQuality = function() {
            if ("function" == typeof this.el().getVideoPlaybackQuality) return this.el().getVideoPlaybackQuality();
            var e = {};
            return "undefined" != typeof this.el().webkitDroppedFrameCount && "undefined" != typeof this.el().webkitDecodedFrameCount && (e.droppedVideoFrames = this.el().webkitDroppedFrameCount, e.totalVideoFrames = this.el().webkitDecodedFrameCount), v.performance && "function" == typeof v.performance.now ? e.creationTime = v.performance.now() : v.performance && v.performance.timing && "number" == typeof v.performance.timing.navigationStart && (e.creationTime = v.Date.now() - v.performance.timing.navigationStart), e
        }, o
    }(Zi);
    if (k()) {
        zr.TEST_VID = h.createElement("video");
        var Wr = h.createElement("track");
        Wr.kind = "captions", Wr.srclang = "en", Wr.label = "English", zr.TEST_VID.appendChild(Wr)
    }
    zr.isSupported = function() {
        try {
            zr.TEST_VID.volume = .5
        } catch (e) {
            return !1
        }
        return !(!zr.TEST_VID || !zr.TEST_VID.canPlayType)
    }, zr.canPlayType = function(e) {
        return zr.TEST_VID.canPlayType(e)
    }, zr.canPlaySource = function(e, t) {
        return zr.canPlayType(e.type)
    }, zr.canControlVolume = function() {
        try {
            var e = zr.TEST_VID.volume;
            return zr.TEST_VID.volume = e / 2 + .1, e !== zr.TEST_VID.volume
        } catch (e) {
            return !1
        }
    }, zr.canMuteVolume = function() {
        try {
            var e = zr.TEST_VID.muted;
            return zr.TEST_VID.muted = !e, zr.TEST_VID.muted ? B(zr.TEST_VID, "muted", "muted") : N(zr.TEST_VID, "muted"), e !== zr.TEST_VID.muted
        } catch (e) {
            return !1
        }
    }, zr.canControlPlaybackRate = function() {
        if (Je && nt && rt < 58) return !1;
        try {
            var e = zr.TEST_VID.playbackRate;
            return zr.TEST_VID.playbackRate = e / 2 + .1, e !== zr.TEST_VID.playbackRate
        } catch (e) {
            return !1
        }
    }, zr.canOverrideAttributes = function() {
        try {
            var e = function() {};
            Object.defineProperty(h.createElement("video"), "src", {
                get: e,
                set: e
            }), Object.defineProperty(h.createElement("audio"), "src", {
                get: e,
                set: e
            }), Object.defineProperty(h.createElement("video"), "innerHTML", {
                get: e,
                set: e
            }), Object.defineProperty(h.createElement("audio"), "innerHTML", {
                get: e,
                set: e
            })
        } catch (e) {
            return !1
        }
        return !0
    }, zr.supportsNativeTextTracks = function() {
        return ot || $e && nt
    }, zr.supportsNativeVideoTracks = function() {
        return !(!zr.TEST_VID || !zr.TEST_VID.videoTracks)
    }, zr.supportsNativeAudioTracks = function() {
        return !(!zr.TEST_VID || !zr.TEST_VID.audioTracks)
    }, zr.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"], zr.prototype.featuresVolumeControl = zr.canControlVolume(), zr.prototype.featuresMuteControl = zr.canMuteVolume(), zr.prototype.featuresPlaybackRate = zr.canControlPlaybackRate(), zr.prototype.featuresSourceset = zr.canOverrideAttributes(), zr.prototype.movingMediaElementInDOM = !$e, zr.prototype.featuresFullscreenResize = !0, zr.prototype.featuresProgressEvents = !0, zr.prototype.featuresTimeupdateEvents = !0, zr.prototype.featuresNativeTextTracks = zr.supportsNativeTextTracks(), zr.prototype.featuresNativeVideoTracks = zr.supportsNativeVideoTracks(), zr.prototype.featuresNativeAudioTracks = zr.supportsNativeAudioTracks();
    var Gr = zr.TEST_VID && zr.TEST_VID.constructor.prototype.canPlayType,
        Xr = /^application\/(?:x-|vnd\.apple\.)mpegurl/i;

    function Yr() {
        var e = t(["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "]);
        return Yr = function() {
            return e
        }, e
    }
    zr.patchCanPlayType = function() {
        4 <= Ze && !tt && !nt && (zr.TEST_VID.constructor.prototype.canPlayType = function(e) {
            return e && Xr.test(e) ? "maybe" : Gr.call(this, e)
        })
    }, zr.unpatchCanPlayType = function() {
        var e = zr.TEST_VID.constructor.prototype.canPlayType;
        return zr.TEST_VID.constructor.prototype.canPlayType = Gr, e
    }, zr.patchCanPlayType(), zr.disposeMediaElement = function(e) {
        if (e) {
            for (e.parentNode && e.parentNode.removeChild(e); e.hasChildNodes();) e.removeChild(e.firstChild);
            e.removeAttribute("src"), "function" == typeof e.load && function() {
                try {
                    e.load()
                } catch (e) {}
            }()
        }
    }, zr.resetMediaElement = function(e) {
        if (e) {
            for (var t = e.querySelectorAll("source"), i = t.length; i--;) e.removeChild(t[i]);
            e.removeAttribute("src"), "function" == typeof e.load && function() {
                try {
                    e.load()
                } catch (e) {}
            }()
        }
    }, ["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach(function(e) {
        zr.prototype[e] = function() {
            return this.el_[e] || this.el_.hasAttribute(e)
        }
    }), ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach(function(t) {
        zr.prototype["set" + Be(t)] = function(e) {
            (this.el_[t] = e) ? this.el_.setAttribute(t, t): this.el_.removeAttribute(t)
        }
    }), ["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "played", "networkState", "readyState", "videoWidth", "videoHeight"].forEach(function(e) {
        zr.prototype[e] = function() {
            return this.el_[e]
        }
    }), ["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate"].forEach(function(t) {
        zr.prototype["set" + Be(t)] = function(e) {
            this.el_[t] = e
        }
    }), ["pause", "load", "play"].forEach(function(e) {
        zr.prototype[e] = function() {
            return this.el_[e]()
        }
    }), Zi.withSourceHandlers(zr), zr.nativeSourceHandler = {}, zr.nativeSourceHandler.canPlayType = function(e) {
        try {
            return zr.TEST_VID.canPlayType(e)
        } catch (e) {
            return ""
        }
    }, zr.nativeSourceHandler.canHandleSource = function(e, t) {
        if (e.type) return zr.nativeSourceHandler.canPlayType(e.type);
        if (e.src) {
            var i = Kt(e.src);
            return zr.nativeSourceHandler.canPlayType("video/" + i)
        }
        return ""
    }, zr.nativeSourceHandler.handleSource = function(e, t, i) {
        t.setSrc(e.src)
    }, zr.nativeSourceHandler.dispose = function() {}, zr.registerSourceHandler(zr.nativeSourceHandler), Zi.registerTech("Html5", zr);
    var Kr = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "resize", "volumechange", "texttrackchange"],
        $r = {
            canplay: "CanPlay",
            canplaythrough: "CanPlayThrough",
            playing: "Playing",
            seeked: "Seeked"
        },
        Qr = ["tiny", "xsmall", "small", "medium", "large", "xlarge", "huge"],
        Jr = {};
    Qr.forEach(function(e) {
        var t = "x" === e.charAt(0) ? "x-" + e.substring(1) : e;
        Jr[e] = "vjs-layout-" + t
    });
    var Zr = {
            tiny: 210,
            xsmall: 320,
            small: 425,
            medium: 768,
            large: 1440,
            xlarge: 2560,
            huge: 1 / 0
        },
        ea = function(c) {
            function l(e, t, i) {
                var n;
                if (e.id = e.id || t.id || "vjs_video_" + ee(), (t = _(l.getTagSettings(e), t)).initChildren = !1, t.createEl = !1, t.evented = !1, t.reportTouchActivity = !1, !t.language)
                    if ("function" == typeof e.closest) {
                        var r = e.closest("[lang]");
                        r && r.getAttribute && (t.language = r.getAttribute("lang"))
                    } else
                        for (var a = e; a && 1 === a.nodeType;) {
                            if (R(a).hasOwnProperty("lang")) {
                                t.language = a.getAttribute("lang");
                                break
                            }
                            a = a.parentNode
                        }
                if ((n = c.call(this, null, t, i) || this).boundDocumentFullscreenChange_ = ke(f(f(n)), n.documentFullscreenChange_), n.boundFullWindowOnEscKey_ = ke(f(f(n)), n.fullWindowOnEscKey), n.log = g(n.id_), n.isPosterFromTech_ = !1, n.queuedCallbacks_ = [], n.isReady_ = !1, n.hasStarted_ = !1, n.userActive_ = !1, !n.options_ || !n.options_.techOrder || !n.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
                if (n.tag = e, n.tagAttributes = e && R(e), n.language(n.options_.language), t.languages) {
                    var s = {};
                    Object.getOwnPropertyNames(t.languages).forEach(function(e) {
                        s[e.toLowerCase()] = t.languages[e]
                    }), n.languages_ = s
                } else n.languages_ = l.prototype.options_.languages;
                n.resetCache_(), n.poster_ = t.poster || "", n.controls_ = !!t.controls, e.controls = !1, e.removeAttribute("controls"), n.changingSrc_ = !1, n.playCallbacks_ = [], n.playTerminatedQueue_ = [], e.hasAttribute("autoplay") ? n.autoplay(!0) : n.autoplay(n.options_.autoplay), t.plugins && Object.keys(t.plugins).forEach(function(e) {
                    if ("function" != typeof n[e]) throw new Error('plugin "' + e + '" does not exist')
                }), n.scrubbing_ = !1, n.el_ = n.createEl(), De(f(f(n)), {
                    eventBusKey: "el_"
                }), n.fluid_ && n.on("playerreset", n.updateStyleEl_);
                var o = Ne(n.options_);
                t.plugins && Object.keys(t.plugins).forEach(function(e) {
                    n[e](t.plugins[e])
                }), n.options_.playerOptions = o, n.middleware_ = [], n.initChildren(), n.isAudio("audio" === e.nodeName.toLowerCase()), n.controls() ? n.addClass("vjs-controls-enabled") : n.addClass("vjs-controls-disabled"), n.el_.setAttribute("role", "region"), n.isAudio() ? n.el_.setAttribute("aria-label", n.localize("Audio Player")) : n.el_.setAttribute("aria-label", n.localize("Video Player")), n.isAudio() && n.addClass("vjs-audio"), n.flexNotSupported_() && n.addClass("vjs-no-flex"), ut && n.addClass("vjs-touch-enabled"), $e || n.addClass("vjs-workinghover"), l.players[n.id_] = f(f(n));
                var u = d.split(".")[0];
                return n.addClass("vjs-v" + u), n.userActive(!0), n.reportUserActivity(), n.one("play", n.listenForUserActivity_), n.on("stageclick", n.handleStageClick_), n.on("keydown", n.handleKeyDown), n.breakpoints(n.options_.breakpoints), n.responsive(n.options_.responsive), n
            }
            p(l, c);
            var e = l.prototype;
            return e.dispose = function() {
                var n = this;
                this.trigger("dispose"), this.off("dispose"), de(h, mt.fullscreenchange, this.boundDocumentFullscreenChange_), de(h, "keydown", this.boundFullWindowOnEscKey_), this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_ = null), l.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && (this.tech_.dispose(), this.isPosterFromTech_ = !1, this.poster_ = ""), this.playerElIngest_ && (this.playerElIngest_ = null), this.tag && (this.tag = null), tn[this.id()] = null, Ci.names.forEach(function(e) {
                    var t = Ci[e],
                        i = n[t.getterName]();
                    i && i.off && i.off()
                }), c.prototype.dispose.call(this)
            }, e.createEl = function() {
                var t, i = this.tag,
                    e = this.playerElIngest_ = i.parentNode && i.parentNode.hasAttribute && i.parentNode.hasAttribute("data-vjs-player"),
                    n = "video-js" === this.tag.tagName.toLowerCase();
                e ? t = this.el_ = i.parentNode : n || (t = this.el_ = c.prototype.createEl.call(this, "div"));
                var r = R(i);
                if (n) {
                    for (t = this.el_ = i, i = this.tag = h.createElement("video"); t.children.length;) i.appendChild(t.firstChild);
                    O(t, "video-js") || I(t, "video-js"), t.appendChild(i), e = this.playerElIngest_ = t, Object.keys(t).forEach(function(e) {
                        i[e] = t[e]
                    })
                }
                if (i.setAttribute("tabindex", "-1"), r.tabindex = "-1", at && (i.setAttribute("role", "application"), r.role = "application"), i.removeAttribute("width"), i.removeAttribute("height"), "width" in r && delete r.width, "height" in r && delete r.height, Object.getOwnPropertyNames(r).forEach(function(e) {
                        n && "class" === e || t.setAttribute(e, r[e]), n && i.setAttribute(e, r[e])
                    }), i.playerId = i.id, i.id += "_html5_api", i.className = "vjs-tech", i.player = t.player = this, this.addClass("vjs-paused"), !0 !== v.VIDEOJS_NO_DYNAMIC_STYLE) {
                    this.styleEl_ = Te("vjs-styles-dimensions");
                    var a = $(".vjs-styles-defaults"),
                        s = $("head");
                    s.insertBefore(this.styleEl_, a ? a.nextSibling : s.firstChild)
                }
                this.fill_ = !1, this.fluid_ = !1, this.width(this.options_.width), this.height(this.options_.height), this.fill(this.options_.fill), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio);
                for (var o = i.getElementsByTagName("a"), u = 0; u < o.length; u++) {
                    var l = o.item(u);
                    I(l, "vjs-hidden"), l.setAttribute("hidden", "hidden")
                }
                return i.initNetworkState_ = i.networkState, i.parentNode && !e && i.parentNode.insertBefore(t, i), P(i, t), this.children_.unshift(i), this.el_.setAttribute("lang", this.language_), this.el_ = t
            }, e.width = function(e) {
                return this.dimension("width", e)
            }, e.height = function(e) {
                return this.dimension("height", e)
            }, e.dimension = function(e, t) {
                var i = e + "_";
                if (void 0 === t) return this[i] || 0;
                if ("" === t) return this[i] = void 0, void this.updateStyleEl_();
                var n = parseFloat(t);
                isNaN(n) ? m.error('Improper value "' + t + '" supplied for for ' + e) : (this[i] = n, this.updateStyleEl_())
            }, e.fluid = function(e) {
                if (void 0 === e) return !!this.fluid_;
                var t, i;
                this.fluid_ = !!e, Ee(this) && this.off("playerreset", this.updateStyleEl_), e ? (this.addClass("vjs-fluid"), this.fill(!1), Ee(t = function() {
                    this.on("playerreset", this.updateStyleEl_)
                }) ? i() : (t.eventedCallbacks || (t.eventedCallbacks = []), t.eventedCallbacks.push(i))) : this.removeClass("vjs-fluid"), this.updateStyleEl_()
            }, e.fill = function(e) {
                if (void 0 === e) return !!this.fill_;
                this.fill_ = !!e, e ? (this.addClass("vjs-fill"), this.fluid(!1)) : this.removeClass("vjs-fill")
            }, e.aspectRatio = function(e) {
                if (void 0 === e) return this.aspectRatio_;
                if (!/^\d+\:\d+$/.test(e)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
                this.aspectRatio_ = e, this.fluid(!0), this.updateStyleEl_()
            }, e.updateStyleEl_ = function() {
                if (!0 !== v.VIDEOJS_NO_DYNAMIC_STYLE) {
                    var e, t, i, n = (void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : 0 < this.videoWidth() ? this.videoWidth() + ":" + this.videoHeight() : "16:9").split(":"),
                        r = n[1] / n[0];
                    e = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / r : this.videoWidth() || 300, t = void 0 !== this.height_ ? this.height_ : e * r, i = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(i), Se(this.styleEl_, "\n      ." + i + " {\n        width: " + e + "px;\n        height: " + t + "px;\n      }\n\n      ." + i + ".vjs-fluid {\n        padding-top: " + 100 * r + "%;\n      }\n    ")
                } else {
                    var a = "number" == typeof this.width_ ? this.width_ : this.options_.width,
                        s = "number" == typeof this.height_ ? this.height_ : this.options_.height,
                        o = this.tech_ && this.tech_.el();
                    o && (0 <= a && (o.width = a), 0 <= s && (o.height = s))
                }
            }, e.loadTech_ = function(e, t) {
                var i = this;
                this.tech_ && this.unloadTech_();
                var n = Be(e),
                    r = e.charAt(0).toLowerCase() + e.slice(1);
                "Html5" !== n && this.tag && (Zi.getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = n, this.isReady_ = !1;
                var a = {
                    source: t,
                    autoplay: "string" != typeof this.autoplay() && this.autoplay(),
                    nativeControlsForTouch: this.options_.nativeControlsForTouch,
                    playerId: this.id(),
                    techId: this.id() + "_" + r + "_api",
                    playsinline: this.options_.playsinline,
                    preload: this.options_.preload,
                    loop: this.options_.loop,
                    muted: this.options_.muted,
                    poster: this.poster(),
                    language: this.language(),
                    playerElIngest: this.playerElIngest_ || !1,
                    "vtt.js": this.options_["vtt.js"],
                    canOverridePoster: !!this.options_.techCanOverridePoster,
                    enableSourceset: this.options_.enableSourceset
                };
                Ci.names.forEach(function(e) {
                    var t = Ci[e];
                    a[t.getterName] = i[t.privateName]
                }), _(a, this.options_[n]), _(a, this.options_[r]), _(a, this.options_[e.toLowerCase()]), this.tag && (a.tag = this.tag), t && t.src === this.cache_.src && 0 < this.cache_.currentTime && (a.startTime = this.cache_.currentTime);
                var s = Zi.getTech(e);
                if (!s) throw new Error("No Tech named '" + n + "' exists! '" + n + "' should be registered using videojs.registerTech()'");
                this.tech_ = new s(a), this.tech_.ready(ke(this, this.handleTechReady_), !0), Lt(this.textTracksJson_ || [], this.tech_), Kr.forEach(function(e) {
                    i.on(i.tech_, e, i["handleTech" + Be(e) + "_"])
                }), Object.keys($r).forEach(function(t) {
                    i.on(i.tech_, t, function(e) {
                        0 === i.tech_.playbackRate() && i.tech_.seeking() ? i.queuedCallbacks_.push({
                            callback: i["handleTech" + $r[t] + "_"].bind(i),
                            event: e
                        }) : i["handleTech" + $r[t] + "_"](e)
                    })
                }), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "sourceset", this.handleTechSourceset_), this.on(this.tech_, "waiting", this.handleTechWaiting_), this.on(this.tech_, "ended", this.handleTechEnded_), this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "play", this.handleTechPlay_), this.on(this.tech_, "firstplay", this.handleTechFirstPlay_), this.on(this.tech_, "pause", this.handleTechPause_), this.on(this.tech_, "durationchange", this.handleTechDurationChange_), this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), this.on(this.tech_, "error", this.handleTechError_), this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), this.on(this.tech_, "posterchange", this.handleTechPosterChange_), this.on(this.tech_, "textdata", this.handleTechTextData_), this.on(this.tech_, "ratechange", this.handleTechRateChange_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === n && this.tag || P(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null)
            }, e.unloadTech_ = function() {
                var i = this;
                Ci.names.forEach(function(e) {
                    var t = Ci[e];
                    i[t.privateName] = i[t.getterName]()
                }), this.textTracksJson_ = At(this.tech_), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1, this.isPosterFromTech_ && (this.poster_ = "", this.trigger("posterchange")), this.isPosterFromTech_ = !1
            }, e.tech = function(e) {
                return void 0 === e && m.warn(y(Yr())), this.tech_
            }, e.addTechControlsListeners_ = function() {
                this.removeTechControlsListeners_(), this.on(this.tech_, "mousedown", this.handleTechClick_), this.on(this.tech_, "dblclick", this.handleTechDoubleClick_), this.on(this.tech_, "touchstart", this.handleTechTouchStart_), this.on(this.tech_, "touchmove", this.handleTechTouchMove_), this.on(this.tech_, "touchend", this.handleTechTouchEnd_), this.on(this.tech_, "tap", this.handleTechTap_)
            }, e.removeTechControlsListeners_ = function() {
                this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_), this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_), this.off(this.tech_, "mousedown", this.handleTechClick_), this.off(this.tech_, "dblclick", this.handleTechDoubleClick_)
            }, e.handleTechReady_ = function() {
                this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_()
            }, e.handleTechLoadStart_ = function() {
                this.removeClass("vjs-ended"), this.removeClass("vjs-seeking"), this.error(null), this.handleTechDurationChange_(), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay")), this.manualAutoplay_(this.autoplay())
            }, e.manualAutoplay_ = function(t) {
                var n = this;
                if (this.tech_ && "string" == typeof t) {
                    var e, i = function() {
                        var e = n.muted();
                        n.muted(!0);
                        var t = function() {
                            n.muted(e)
                        };
                        n.playTerminatedQueue_.push(t);
                        var i = n.play();
                        if (Ct(i)) return i.catch(t)
                    };
                    if ("any" === t && !0 !== this.muted() ? Ct(e = this.play()) && (e = e.catch(i)) : e = "muted" === t && !0 !== this.muted() ? i() : this.play(), Ct(e)) return e.then(function() {
                        n.trigger({
                            type: "autoplay-success",
                            autoplay: t
                        })
                    }).catch(function(e) {
                        n.trigger({
                            type: "autoplay-failure",
                            autoplay: t
                        })
                    })
                }
            }, e.updateSourceCaches_ = function(e) {
                void 0 === e && (e = "");
                var t = e,
                    i = "";
                "string" != typeof t && (t = e.src, i = e.type), this.cache_.source = this.cache_.source || {}, this.cache_.sources = this.cache_.sources || [], t && !i && (i = function(e, t) {
                    if (!t) return "";
                    if (e.cache_.source.src === t && e.cache_.source.type) return e.cache_.source.type;
                    var i = e.cache_.sources.filter(function(e) {
                        return e.src === t
                    });
                    if (i.length) return i[0].type;
                    for (var n = e.$$("source"), r = 0; r < n.length; r++) {
                        var a = n[r];
                        if (a.type && a.src && a.src === t) return a.type
                    }
                    return dn(t)
                }(this, t)), this.cache_.source = Ne({}, e, {
                    src: t,
                    type: i
                });
                for (var n = this.cache_.sources.filter(function(e) {
                        return e.src && e.src === t
                    }), r = [], a = this.$$("source"), s = [], o = 0; o < a.length; o++) {
                    var u = R(a[o]);
                    r.push(u), u.src && u.src === t && s.push(u.src)
                }
                s.length && !n.length ? this.cache_.sources = r : n.length || (this.cache_.sources = [this.cache_.source]), this.cache_.src = t
            }, e.handleTechSourceset_ = function(e) {
                var n = this;
                if (!this.changingSrc_) {
                    var t = function(e) {
                            return n.updateSourceCaches_(e)
                        },
                        i = this.currentSource().src,
                        r = e.src;
                    if (i && !/^blob:/.test(i) && /^blob:/.test(r) && (!this.lastSource_ || this.lastSource_.tech !== r && this.lastSource_.player !== i) && (t = function() {}), t(r), !e.src) {
                        this.tech_.one(["sourceset", "loadstart"], function e(t) {
                            if ("sourceset" !== t.type) {
                                var i = n.techGet("currentSrc");
                                n.lastSource_.tech = i, n.updateSourceCaches_(i)
                            }
                            n.tech_.off(["sourceset", "loadstart"], e)
                        })
                    }
                }
                this.lastSource_ = {
                    player: this.currentSource().src,
                    tech: e.src
                }, this.trigger({
                    src: e.src,
                    type: "sourceset"
                })
            }, e.hasStarted = function(e) {
                if (void 0 === e) return this.hasStarted_;
                e !== this.hasStarted_ && (this.hasStarted_ = e, this.hasStarted_ ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started"))
            }, e.handleTechPlay_ = function() {
                this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play")
            }, e.handleTechRateChange_ = function() {
                0 < this.tech_.playbackRate() && 0 === this.cache_.lastPlaybackRate && (this.queuedCallbacks_.forEach(function(e) {
                    return e.callback(e.event)
                }), this.queuedCallbacks_ = []), this.cache_.lastPlaybackRate = this.tech_.playbackRate(), this.trigger("ratechange")
            }, e.handleTechWaiting_ = function() {
                var t = this;
                this.addClass("vjs-waiting"), this.trigger("waiting");
                var i = this.currentTime();
                this.on("timeupdate", function e() {
                    i !== t.currentTime() && (t.removeClass("vjs-waiting"), t.off("timeupdate", e))
                })
            }, e.handleTechCanPlay_ = function() {
                this.removeClass("vjs-waiting"), this.trigger("canplay")
            }, e.handleTechCanPlayThrough_ = function() {
                this.removeClass("vjs-waiting"), this.trigger("canplaythrough")
            }, e.handleTechPlaying_ = function() {
                this.removeClass("vjs-waiting"), this.trigger("playing")
            }, e.handleTechSeeking_ = function() {
                this.addClass("vjs-seeking"), this.trigger("seeking")
            }, e.handleTechSeeked_ = function() {
                this.removeClass("vjs-seeking"), this.removeClass("vjs-ended"), this.trigger("seeked")
            }, e.handleTechFirstPlay_ = function() {
                this.options_.starttime && (m.warn("Passing the `starttime` option to the player will be deprecated in 6.0"), this.currentTime(this.options_.starttime)), this.addClass("vjs-has-started"), this.trigger("firstplay")
            }, e.handleTechPause_ = function() {
                this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause")
            }, e.handleTechEnded_ = function() {
                this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended")
            }, e.handleTechDurationChange_ = function() {
                this.duration(this.techGet_("duration"))
            }, e.handleTechClick_ = function(e) {
                K(e) && this.controls_ && (this.paused() ? wt(this.play()) : this.pause())
            }, e.handleTechDoubleClick_ = function(t) {
                this.controls_ && (Array.prototype.some.call(this.$$(".vjs-control-bar, .vjs-modal-dialog"), function(e) {
                    return e.contains(t.target)
                }) || void 0 !== this.options_ && void 0 !== this.options_.userActions && void 0 !== this.options_.userActions.doubleClick && !1 === this.options_.userActions.doubleClick || (void 0 !== this.options_ && void 0 !== this.options_.userActions && "function" == typeof this.options_.userActions.doubleClick ? this.options_.userActions.doubleClick.call(this, t) : this.isFullscreen() ? this.exitFullscreen() : this.requestFullscreen()))
            }, e.handleTechTap_ = function() {
                this.userActive(!this.userActive())
            }, e.handleTechTouchStart_ = function() {
                this.userWasActive = this.userActive()
            }, e.handleTechTouchMove_ = function() {
                this.userWasActive && this.reportUserActivity()
            }, e.handleTechTouchEnd_ = function(e) {
                e.preventDefault()
            }, e.handleStageClick_ = function() {
                this.reportUserActivity()
            }, e.toggleFullscreenClass_ = function() {
                this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
            }, e.documentFullscreenChange_ = function(e) {
                var t = mt,
                    i = this.el(),
                    n = h[t.fullscreenElement] === i;
                !n && i.matches ? n = i.matches(":" + t.fullscreen) : !n && i.msMatchesSelector && (n = i.msMatchesSelector(":" + t.fullscreen)), this.isFullscreen(n), !1 === this.isFullscreen() && de(h, t.fullscreenchange, this.boundDocumentFullscreenChange_), vt || this.trigger("fullscreenchange")
            }, e.handleTechFullscreenChange_ = function(e, t) {
                t && this.isFullscreen(t.isFullscreen), this.trigger("fullscreenchange")
            }, e.handleTechError_ = function() {
                var e = this.tech_.error();
                this.error(e)
            }, e.handleTechTextData_ = function() {
                var e = null;
                1 < arguments.length && (e = arguments[1]), this.trigger("textdata", e)
            }, e.getCache = function() {
                return this.cache_
            }, e.resetCache_ = function() {
                this.cache_ = {
                    currentTime: 0,
                    inactivityTimeout: this.options_.inactivityTimeout,
                    duration: NaN,
                    lastVolume: 1,
                    lastPlaybackRate: this.defaultPlaybackRate(),
                    media: null,
                    src: "",
                    source: {},
                    sources: [],
                    volume: 1
                }
            }, e.techCall_ = function(r, a) {
                this.ready(function() {
                    if (r in on) return e = this.middleware_, t = this.tech_, n = a, t[i = r](e.reduce(ln(i), n));
                    if (r in un) return an(this.middleware_, this.tech_, r, a);
                    var e, t, i, n;
                    try {
                        this.tech_ && this.tech_[r](a)
                    } catch (e) {
                        throw m(e), e
                    }
                }, !0)
            }, e.techGet_ = function(t) {
                if (this.tech_ && this.tech_.isReady_) {
                    if (t in sn) return e = this.middleware_, i = this.tech_, n = t, e.reduceRight(ln(n), i[n]());
                    if (t in un) return an(this.middleware_, this.tech_, t);
                    var e, i, n;
                    try {
                        return this.tech_[t]()
                    } catch (e) {
                        if (void 0 === this.tech_[t]) throw m("Video.js: " + t + " method not defined for " + this.techName_ + " playback technology.", e), e;
                        if ("TypeError" === e.name) throw m("Video.js: " + t + " unavailable on " + this.techName_ + " playback technology element.", e), this.tech_.isReady_ = !1, e;
                        throw m(e), e
                    }
                }
            }, e.play = function() {
                var t = this,
                    e = this.options_.Promise || v.Promise;
                return e ? new e(function(e) {
                    t.play_(e)
                }) : this.play_()
            }, e.play_ = function(e) {
                var t = this;
                void 0 === e && (e = wt), this.playCallbacks_.push(e);
                var i = Boolean(!this.changingSrc_ && (this.src() || this.currentSrc()));
                if (this.waitToPlay_ && (this.off(["ready", "loadstart"], this.waitToPlay_), this.waitToPlay_ = null), !this.isReady_ || !i) return this.waitToPlay_ = function(e) {
                    t.play_()
                }, this.one(["ready", "loadstart"], this.waitToPlay_), void(i || !ot && !$e || this.load());
                var n = this.techGet_("play");
                null === n ? this.runPlayTerminatedQueue_() : this.runPlayCallbacks_(n)
            }, e.runPlayTerminatedQueue_ = function() {
                var e = this.playTerminatedQueue_.slice(0);
                this.playTerminatedQueue_ = [], e.forEach(function(e) {
                    e()
                })
            }, e.runPlayCallbacks_ = function(t) {
                var e = this.playCallbacks_.slice(0);
                this.playCallbacks_ = [], this.playTerminatedQueue_ = [], e.forEach(function(e) {
                    e(t)
                })
            }, e.pause = function() {
                this.techCall_("pause")
            }, e.paused = function() {
                return !1 !== this.techGet_("paused")
            }, e.played = function() {
                return this.techGet_("played") || dt(0, 0)
            }, e.scrubbing = function(e) {
                if ("undefined" == typeof e) return this.scrubbing_;
                this.scrubbing_ = !!e, e ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing")
            }, e.currentTime = function(e) {
                return "undefined" != typeof e ? (e < 0 && (e = 0), void this.techCall_("setCurrentTime", e)) : (this.cache_.currentTime = this.techGet_("currentTime") || 0, this.cache_.currentTime)
            }, e.duration = function(e) {
                if (void 0 === e) return void 0 !== this.cache_.duration ? this.cache_.duration : NaN;
                (e = parseFloat(e)) < 0 && (e = 1 / 0), e !== this.cache_.duration && ((this.cache_.duration = e) === 1 / 0 ? (this.addClass("vjs-live"), this.options_.liveui && this.player_.liveTracker && this.addClass("vjs-liveui")) : (this.removeClass("vjs-live"), this.removeClass("vjs-liveui")), isNaN(e) || this.trigger("durationchange"))
            }, e.remainingTime = function() {
                return this.duration() - this.currentTime()
            }, e.remainingTimeDisplay = function() {
                return Math.floor(this.duration()) - Math.floor(this.currentTime())
            }, e.buffered = function() {
                var e = this.techGet_("buffered");
                return e && e.length || (e = dt(0, 0)), e
            }, e.bufferedPercent = function() {
                return pt(this.buffered(), this.duration())
            }, e.bufferedEnd = function() {
                var e = this.buffered(),
                    t = this.duration(),
                    i = e.end(e.length - 1);
                return t < i && (i = t), i
            }, e.volume = function(e) {
                var t;
                return void 0 !== e ? (t = Math.max(0, Math.min(1, parseFloat(e))), this.cache_.volume = t, this.techCall_("setVolume", t), void(0 < t && this.lastVolume_(t))) : (t = parseFloat(this.techGet_("volume")), isNaN(t) ? 1 : t)
            }, e.muted = function(e) {
                if (void 0 === e) return this.techGet_("muted") || !1;
                this.techCall_("setMuted", e)
            }, e.defaultMuted = function(e) {
                return void 0 !== e ? this.techCall_("setDefaultMuted", e) : this.techGet_("defaultMuted") || !1
            }, e.lastVolume_ = function(e) {
                if (void 0 === e || 0 === e) return this.cache_.lastVolume;
                this.cache_.lastVolume = e
            }, e.supportsFullScreen = function() {
                return this.techGet_("supportsFullScreen") || !1
            }, e.isFullscreen = function(e) {
                if (void 0 !== e) return this.isFullscreen_ = !!e, void this.toggleFullscreenClass_();
                if (vt) {
                    var t = mt,
                        i = this.el(),
                        n = h[t.fullscreenElement] === i;
                    return !n && i.matches ? n = i.matches(":" + t.fullscreen) : !n && i.msMatchesSelector && (n = i.msMatchesSelector(":" + t.fullscreen)), n
                }
                return !!this.isFullscreen_
            }, e.requestFullscreen = function() {
                var e = mt;
                this.isFullscreen(!0), e.requestFullscreen ? (he(h, e.fullscreenchange, this.boundDocumentFullscreenChange_), this.el_[e.requestFullscreen]()) : this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange"))
            }, e.exitFullscreen = function() {
                var e = mt;
                this.isFullscreen(!1), e.requestFullscreen ? h[e.exitFullscreen]() : this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange"))
            }, e.enterFullWindow = function() {
                this.isFullWindow = !0, this.docOrigOverflow = h.documentElement.style.overflow, he(h, "keydown", this.boundFullWindowOnEscKey_), h.documentElement.style.overflow = "hidden", I(h.body, "vjs-full-window"), this.trigger("enterFullWindow")
            }, e.fullWindowOnEscKey = function(e) {
                Ot.isEventKey(e, "Esc") && (!0 === this.isFullscreen() ? this.exitFullscreen() : this.exitFullWindow())
            }, e.exitFullWindow = function() {
                this.isFullWindow = !1, de(h, "keydown", this.boundFullWindowOnEscKey_), h.documentElement.style.overflow = this.docOrigOverflow, U(h.body, "vjs-full-window"), this.trigger("exitFullWindow")
            }, e.handleKeyDown = function(e) {
                var t = this.options_.userActions;
                if (t && t.hotkeys) {
                    var i, n;
                    if (i = this.el_.ownerDocument.activeElement, "input" === (n = i.tagName.toLowerCase()) ? -1 !== ["button", "checkbox", "hidden", "radio", "reset", "submit"].indexOf(i.type) : -1 === ["textarea"].indexOf(n)) "function" == typeof t.hotkeys ? t.hotkeys.call(this, e) : this.handleHotkeys(e)
                }
            }, e.handleHotkeys = function(e) {
                var t = this.options_.userActions ? this.options_.userActions.hotkeys : {},
                    i = t.fullscreenKey,
                    n = void 0 === i ? function(e) {
                        return Ot.isEventKey(e, "f")
                    } : i,
                    r = t.muteKey,
                    a = void 0 === r ? function(e) {
                        return Ot.isEventKey(e, "m")
                    } : r,
                    s = t.playPauseKey,
                    o = void 0 === s ? function(e) {
                        return Ot.isEventKey(e, "k") || Ot.isEventKey(e, "Space")
                    } : s;
                if (n.call(this, e)) {
                    e.preventDefault(), e.stopPropagation();
                    var u = je.getComponent("FullscreenToggle");
                    !1 !== h[mt.fullscreenEnabled] && u.prototype.handleClick.call(this)
                } else if (a.call(this, e)) {
                    e.preventDefault(), e.stopPropagation(), je.getComponent("MuteToggle").prototype.handleClick.call(this)
                } else if (o.call(this, e)) {
                    e.preventDefault(), e.stopPropagation(), je.getComponent("PlayToggle").prototype.handleClick.call(this)
                }
            }, e.canPlayType = function(e) {
                for (var t, i = 0, n = this.options_.techOrder; i < n.length; i++) {
                    var r = n[i],
                        a = Zi.getTech(r);
                    if (a || (a = je.getComponent(r)), a) {
                        if (a.isSupported() && (t = a.canPlayType(e))) return t
                    } else m.error('The "' + r + '" tech is undefined. Skipped browser support check for that tech.')
                }
                return ""
            }, e.selectSource = function(e) {
                var i, n = this,
                    t = this.options_.techOrder.map(function(e) {
                        return [e, Zi.getTech(e)]
                    }).filter(function(e) {
                        var t = e[0],
                            i = e[1];
                        return i ? i.isSupported() : (m.error('The "' + t + '" tech is undefined. Skipped browser support check for that tech.'), !1)
                    }),
                    r = function(e, i, n) {
                        var r;
                        return e.some(function(t) {
                            return i.some(function(e) {
                                if (r = n(t, e)) return !0
                            })
                        }), r
                    },
                    a = function(e, t) {
                        var i = e[0];
                        if (e[1].canPlaySource(t, n.options_[i.toLowerCase()])) return {
                            source: t,
                            tech: i
                        }
                    };
                return (this.options_.sourceOrder ? r(e, t, (i = a, function(e, t) {
                    return i(t, e)
                })) : r(t, e, a)) || !1
            }, e.src = function(e) {
                var r = this;
                if ("undefined" == typeof e) return this.cache_.src || "";
                var a = function t(e) {
                    if (Array.isArray(e)) {
                        var i = [];
                        e.forEach(function(e) {
                            e = t(e), Array.isArray(e) ? i = i.concat(e) : b(e) && i.push(e)
                        }), e = i
                    } else e = "string" == typeof e && e.trim() ? [pn({
                        src: e
                    })] : b(e) && "string" == typeof e.src && e.src && e.src.trim() ? [pn(e)] : [];
                    return e
                }(e);
                a.length ? (this.changingSrc_ = !0, this.cache_.sources = a, this.updateSourceCaches_(a[0]), rn(this, a[0], function(e, t) {
                    var i, n;
                    if (r.middleware_ = t, r.cache_.sources = a, r.updateSourceCaches_(e), r.src_(e)) return 1 < a.length ? r.src(a.slice(1)) : (r.changingSrc_ = !1, r.setTimeout(function() {
                        this.error({
                            code: 4,
                            message: this.localize(this.options_.notSupportedMessage)
                        })
                    }, 0), void r.triggerReady());
                    i = t, n = r.tech_, i.forEach(function(e) {
                        return e.setTech && e.setTech(n)
                    })
                })) : this.setTimeout(function() {
                    this.error({
                        code: 4,
                        message: this.localize(this.options_.notSupportedMessage)
                    })
                }, 0)
            }, e.src_ = function(e) {
                var t, i, n = this,
                    r = this.selectSource([e]);
                return !r || (t = r.tech, i = this.techName_, Be(t) !== Be(i) ? (this.changingSrc_ = !0, this.loadTech_(r.tech, r.source), this.tech_.ready(function() {
                    n.changingSrc_ = !1
                })) : this.ready(function() {
                    this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", e) : this.techCall_("src", e.src), this.changingSrc_ = !1
                }, !0), !1)
            }, e.load = function() {
                this.techCall_("load")
            }, e.reset = function() {
                var e = this,
                    t = this.options_.Promise || v.Promise;
                this.paused() || !t ? this.doReset_() : wt(this.play().then(function() {
                    return e.doReset_()
                }))
            }, e.doReset_ = function() {
                this.tech_ && this.tech_.clearTracks("text"), this.resetCache_(), this.poster(""), this.loadTech_(this.options_.techOrder[0], null), this.techCall_("reset"), this.resetControlBarUI_(), Ee(this) && this.trigger("playerreset")
            }, e.resetControlBarUI_ = function() {
                this.resetProgressBar_(), this.resetPlaybackRate_(), this.resetVolumeBar_()
            }, e.resetProgressBar_ = function() {
                this.currentTime(0);
                var e = this.controlBar,
                    t = e.durationDisplay,
                    i = e.remainingTimeDisplay;
                t && t.updateContent(), i && i.updateContent()
            }, e.resetPlaybackRate_ = function() {
                this.playbackRate(this.defaultPlaybackRate()), this.handleTechRateChange_()
            }, e.resetVolumeBar_ = function() {
                this.volume(1), this.trigger("volumechange")
            }, e.currentSources = function() {
                var e = this.currentSource(),
                    t = [];
                return 0 !== Object.keys(e).length && t.push(e), this.cache_.sources || t
            }, e.currentSource = function() {
                return this.cache_.source || {}
            }, e.currentSrc = function() {
                return this.currentSource() && this.currentSource().src || ""
            }, e.currentType = function() {
                return this.currentSource() && this.currentSource().type || ""
            }, e.preload = function(e) {
                return void 0 !== e ? (this.techCall_("setPreload", e), void(this.options_.preload = e)) : this.techGet_("preload")
            }, e.autoplay = function(e) {
                if (void 0 === e) return this.options_.autoplay || !1;
                var t;
                "string" == typeof e && /(any|play|muted)/.test(e) ? (this.options_.autoplay = e, this.manualAutoplay_(e), t = !1) : this.options_.autoplay = !!e, t = "undefined" == typeof t ? this.options_.autoplay : t, this.tech_ && this.techCall_("setAutoplay", t)
            }, e.playsinline = function(e) {
                return void 0 !== e ? (this.techCall_("setPlaysinline", e), this.options_.playsinline = e, this) : this.techGet_("playsinline")
            }, e.loop = function(e) {
                return void 0 !== e ? (this.techCall_("setLoop", e), void(this.options_.loop = e)) : this.techGet_("loop")
            }, e.poster = function(e) {
                if (void 0 === e) return this.poster_;
                e || (e = ""), e !== this.poster_ && (this.poster_ = e, this.techCall_("setPoster", e), this.isPosterFromTech_ = !1, this.trigger("posterchange"))
            }, e.handleTechPosterChange_ = function() {
                if ((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) {
                    var e = this.tech_.poster() || "";
                    e !== this.poster_ && (this.poster_ = e, this.isPosterFromTech_ = !0, this.trigger("posterchange"))
                }
            }, e.controls = function(e) {
                if (void 0 === e) return !!this.controls_;
                e = !!e, this.controls_ !== e && (this.controls_ = e, this.usingNativeControls() && this.techCall_("setControls", e), this.controls_ ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_()))
            }, e.usingNativeControls = function(e) {
                if (void 0 === e) return !!this.usingNativeControls_;
                e = !!e, this.usingNativeControls_ !== e && (this.usingNativeControls_ = e, this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols")))
            }, e.error = function(e) {
                return void 0 === e ? this.error_ || null : null === e ? (this.error_ = e, this.removeClass("vjs-error"), void(this.errorDisplay && this.errorDisplay.close())) : (this.error_ = new Tt(e), this.addClass("vjs-error"), m.error("(CODE:" + this.error_.code + " " + Tt.errorTypes[this.error_.code] + ")", this.error_.message, this.error_), void this.trigger("error"))
            }, e.reportUserActivity = function(e) {
                this.userActivity_ = !0
            }, e.userActive = function(e) {
                if (void 0 === e) return this.userActive_;
                if ((e = !!e) !== this.userActive_) {
                    if (this.userActive_ = e, this.userActive_) return this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), void this.trigger("useractive");
                    this.tech_ && this.tech_.one("mousemove", function(e) {
                        e.stopPropagation(), e.preventDefault()
                    }), this.userActivity_ = !1, this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive")
                }
            }, e.listenForUserActivity_ = function() {
                var t, i, n, r = ke(this, this.reportUserActivity);
                this.on("mousedown", function() {
                    r(), this.clearInterval(t), t = this.setInterval(r, 250)
                }), this.on("mousemove", function(e) {
                    e.screenX === i && e.screenY === n || (i = e.screenX, n = e.screenY, r())
                }), this.on("mouseup", function(e) {
                    r(), this.clearInterval(t)
                });
                var a, e = this.getChild("controlBar");
                !e || $e || Je || (e.on("mouseenter", function(e) {
                    this.player().cache_.inactivityTimeout = this.player().options_.inactivityTimeout, this.player().options_.inactivityTimeout = 0
                }), e.on("mouseleave", function(e) {
                    this.player().options_.inactivityTimeout = this.player().cache_.inactivityTimeout
                })), this.on("keydown", r), this.on("keyup", r), this.setInterval(function() {
                    if (this.userActivity_) {
                        this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(a);
                        var e = this.options_.inactivityTimeout;
                        e <= 0 || (a = this.setTimeout(function() {
                            this.userActivity_ || this.userActive(!1)
                        }, e))
                    }
                }, 250)
            }, e.playbackRate = function(e) {
                if (void 0 === e) return this.tech_ && this.tech_.featuresPlaybackRate ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate") : 1;
                this.techCall_("setPlaybackRate", e)
            }, e.defaultPlaybackRate = function(e) {
                return void 0 !== e ? this.techCall_("setDefaultPlaybackRate", e) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1
            }, e.isAudio = function(e) {
                if (void 0 === e) return !!this.isAudio_;
                this.isAudio_ = !!e
            }, e.addTextTrack = function(e, t, i) {
                if (this.tech_) return this.tech_.addTextTrack(e, t, i)
            }, e.addRemoteTextTrack = function(e, t) {
                if (this.tech_) return this.tech_.addRemoteTextTrack(e, t)
            }, e.removeRemoteTextTrack = function(e) {
                void 0 === e && (e = {});
                var t = e.track;
                if (t || (t = e), this.tech_) return this.tech_.removeRemoteTextTrack(t)
            }, e.getVideoPlaybackQuality = function() {
                return this.techGet_("getVideoPlaybackQuality")
            }, e.videoWidth = function() {
                return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
            }, e.videoHeight = function() {
                return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
            }, e.language = function(e) {
                if (void 0 === e) return this.language_;
                this.language_ = String(e).toLowerCase()
            }, e.languages = function() {
                return Ne(l.prototype.options_.languages, this.languages_)
            }, e.toJSON = function() {
                var e = Ne(this.options_),
                    t = e.tracks;
                e.tracks = [];
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    (n = Ne(n)).player = void 0, e.tracks[i] = n
                }
                return e
            }, e.createModal = function(e, t) {
                var i = this;
                (t = t || {}).content = e || "";
                var n = new Ut(this, t);
                return this.addChild(n), n.on("dispose", function() {
                    i.removeChild(n)
                }), n.open(), n
            }, e.updateCurrentBreakpoint_ = function() {
                if (this.responsive())
                    for (var e = this.currentBreakpoint(), t = this.currentWidth(), i = 0; i < Qr.length; i++) {
                        var n = Qr[i];
                        if (t <= this.breakpoints_[n]) {
                            if (e === n) return;
                            e && this.removeClass(Jr[e]), this.addClass(Jr[n]), this.breakpoint_ = n;
                            break
                        }
                    }
            }, e.removeCurrentBreakpoint_ = function() {
                var e = this.currentBreakpointClass();
                this.breakpoint_ = "", e && this.removeClass(e)
            }, e.breakpoints = function(e) {
                return void 0 === e || (this.breakpoint_ = "", this.breakpoints_ = _({}, Zr, e), this.updateCurrentBreakpoint_()), _(this.breakpoints_)
            }, e.responsive = function(e) {
                return void 0 === e ? this.responsive_ : (e = Boolean(e)) !== this.responsive_ ? ((this.responsive_ = e) ? (this.on("playerresize", this.updateCurrentBreakpoint_), this.updateCurrentBreakpoint_()) : (this.off("playerresize", this.updateCurrentBreakpoint_), this.removeCurrentBreakpoint_()), e) : void 0
            }, e.currentBreakpoint = function() {
                return this.breakpoint_
            }, e.currentBreakpointClass = function() {
                return Jr[this.breakpoint_] || ""
            }, e.loadMedia = function(e, t) {
                var i = this;
                if (e && "object" == typeof e) {
                    this.reset(), this.cache_.media = Ne(e);
                    var n = this.cache_.media,
                        r = n.artwork,
                        a = n.poster,
                        s = n.src,
                        o = n.textTracks;
                    !r && a && (this.cache_.media.artwork = [{
                        src: a,
                        type: dn(a)
                    }]), s && this.src(s), a && this.poster(a), Array.isArray(o) && o.forEach(function(e) {
                        return i.addRemoteTextTrack(e, !1)
                    }), this.ready(t)
                }
            }, e.getMedia = function() {
                if (this.cache_.media) return Ne(this.cache_.media);
                var e = this.poster(),
                    t = {
                        src: this.currentSources(),
                        textTracks: Array.prototype.map.call(this.remoteTextTracks(), function(e) {
                            return {
                                kind: e.kind,
                                label: e.label,
                                language: e.language,
                                src: e.src
                            }
                        })
                    };
                return e && (t.poster = e, t.artwork = [{
                    src: t.poster,
                    type: dn(t.poster)
                }]), t
            }, l.getTagSettings = function(e) {
                var t = {
                        sources: [],
                        tracks: []
                    },
                    i = R(e),
                    n = i["data-setup"];
                if (O(e, "vjs-fill") && (i.fill = !0), O(e, "vjs-fluid") && (i.fluid = !0), null !== n) {
                    var r = kt(n || "{}"),
                        a = r[0],
                        s = r[1];
                    a && m.error(a), _(i, s)
                }
                if (_(t, i), e.hasChildNodes())
                    for (var o = e.childNodes, u = 0, l = o.length; u < l; u++) {
                        var c = o[u],
                            h = c.nodeName.toLowerCase();
                        "source" === h ? t.sources.push(R(c)) : "track" === h && t.tracks.push(R(c))
                    }
                return t
            }, e.flexNotSupported_ = function() {
                var e = h.createElement("i");
                return !("flexBasis" in e.style || "webkitFlexBasis" in e.style || "mozFlexBasis" in e.style || "msFlexBasis" in e.style || "msFlexOrder" in e.style)
            }, l
        }(je);
    Ci.names.forEach(function(e) {
        var t = Ci[e];
        ea.prototype[t.getterName] = function() {
            return this.tech_ ? this.tech_[t.getterName]() : (this[t.privateName] = this[t.privateName] || new t.ListClass, this[t.privateName])
        }
    }), ea.players = {};
    var ta = v.navigator;
    ea.prototype.options_ = {
        techOrder: Zi.defaultTechOrder_,
        html5: {},
        flash: {},
        inactivityTimeout: 2e3,
        playbackRates: [],
        liveui: !1,
        children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "liveTracker", "controlBar", "errorDisplay", "textTrackSettings", "resizeManager"],
        language: ta && (ta.languages && ta.languages[0] || ta.userLanguage || ta.language) || "en",
        languages: {},
        notSupportedMessage: "No compatible source was found for this media.",
        breakpoints: {},
        responsive: !1
    }, ["ended", "seeking", "seekable", "networkState", "readyState"].forEach(function(e) {
        ea.prototype[e] = function() {
            return this.techGet_(e)
        }
    }), Kr.forEach(function(e) {
        ea.prototype["handleTech" + Be(e) + "_"] = function() {
            return this.trigger(e)
        }
    }), je.registerComponent("Player", ea);
    var ia = "plugin",
        na = "activePlugins_",
        ra = {},
        aa = function(e) {
            return ra.hasOwnProperty(e)
        },
        sa = function(e) {
            return aa(e) ? ra[e] : void 0
        },
        oa = function(e, t) {
            e[na] = e[na] || {}, e[na][t] = !0
        },
        ua = function(e, t, i) {
            var n = (i ? "before" : "") + "pluginsetup";
            e.trigger(n, t), e.trigger(n + ":" + t.name, t)
        },
        la = function(r, a) {
            return a.prototype.name = r,
                function() {
                    ua(this, {
                        name: r,
                        plugin: a,
                        instance: null
                    }, !0);
                    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    var n = s(a, [this].concat(t));
                    return this[r] = function() {
                        return n
                    }, ua(this, n.getEventHash()), n
                }
        },
        ca = function() {
            function a(e) {
                if (this.constructor === a) throw new Error("Plugin must be sub-classed; not directly instantiated.");
                this.player = e, De(this), delete this.trigger, Me(this, this.constructor.defaultState), oa(e, this.name), this.dispose = ke(this, this.dispose), e.on("dispose", this.dispose)
            }
            var e = a.prototype;
            return e.version = function() {
                return this.constructor.VERSION
            }, e.getEventHash = function(e) {
                return void 0 === e && (e = {}), e.name = this.name, e.plugin = this.constructor, e.instance = this, e
            }, e.trigger = function(e, t) {
                return void 0 === t && (t = {}), pe(this.eventBusEl_, e, this.getEventHash(t))
            }, e.handleStateChanged = function(e) {}, e.dispose = function() {
                var e = this.name,
                    t = this.player;
                this.trigger("dispose"), this.off(), t.off("dispose", this.dispose), t[na][e] = !1, this.player = this.state = null, t[e] = la(e, ra[e])
            }, a.isBasic = function(e) {
                var t = "string" == typeof e ? sa(e) : e;
                return "function" == typeof t && !a.prototype.isPrototypeOf(t.prototype)
            }, a.registerPlugin = function(e, t) {
                if ("string" != typeof e) throw new Error('Illegal plugin name, "' + e + '", must be a string, was ' + typeof e + ".");
                if (aa(e)) m.warn('A plugin named "' + e + '" already exists. You may want to avoid re-registering plugins!');
                else if (ea.prototype.hasOwnProperty(e)) throw new Error('Illegal plugin name, "' + e + '", cannot share a name with an existing player method!');
                if ("function" != typeof t) throw new Error('Illegal plugin for "' + e + '", must be a function, was ' + typeof t + ".");
                var i, n, r;
                return ra[e] = t, e !== ia && (a.isBasic(t) ? ea.prototype[e] = (i = e, n = t, r = function() {
                    ua(this, {
                        name: i,
                        plugin: n,
                        instance: null
                    }, !0);
                    var e = n.apply(this, arguments);
                    return oa(this, i), ua(this, {
                        name: i,
                        plugin: n,
                        instance: e
                    }), e
                }, Object.keys(n).forEach(function(e) {
                    r[e] = n[e]
                }), r) : ea.prototype[e] = la(e, t)), t
            }, a.deregisterPlugin = function(e) {
                if (e === ia) throw new Error("Cannot de-register base plugin.");
                aa(e) && (delete ra[e], delete ea.prototype[e])
            }, a.getPlugins = function(e) {
                var i;
                return void 0 === e && (e = Object.keys(ra)), e.forEach(function(e) {
                    var t = sa(e);
                    t && ((i = i || {})[e] = t)
                }), i
            }, a.getPluginVersion = function(e) {
                var t = sa(e);
                return t && t.VERSION || ""
            }, a
        }();
    ca.getPlugin = sa, ca.BASE_PLUGIN_NAME = ia, ca.registerPlugin(ia, ca), ea.prototype.usingPlugin = function(e) {
        return !!this[na] && !0 === this[na][e]
    }, ea.prototype.hasPlugin = function(e) {
        return !!aa(e)
    };
    var ha = function(e) {
        return 0 === e.indexOf("#") ? e.slice(1) : e
    };

    function da(e, i, t) {
        var n = da.getPlayer(e);
        if (n) return i && m.warn('Player "' + e + '" is already initialised. Options will not be applied.'), t && n.ready(t), n;
        var r = "string" == typeof e ? $("#" + ha(e)) : e;
        if (!C(r)) throw new TypeError("The element or ID supplied is not valid. (videojs)");
        r.ownerDocument.defaultView && r.ownerDocument.body.contains(r) || m.warn("The element supplied is not included in the DOM"), i = i || {}, da.hooks("beforesetup").forEach(function(e) {
            var t = e(r, Ne(i));
            b(t) && !Array.isArray(t) ? i = Ne(i, t) : m.error("please return an object in beforesetup hooks")
        });
        var a = je.getComponent("Player");
        return n = new a(r, i, t), da.hooks("setup").forEach(function(e) {
            return e(n)
        }), n
    }
    if (da.hooks_ = {}, da.hooks = function(e, t) {
            return da.hooks_[e] = da.hooks_[e] || [], t && (da.hooks_[e] = da.hooks_[e].concat(t)), da.hooks_[e]
        }, da.hook = function(e, t) {
            da.hooks(e, t)
        }, da.hookOnce = function(i, e) {
            da.hooks(i, [].concat(e).map(function(t) {
                return function e() {
                    return da.removeHook(i, e), t.apply(void 0, arguments)
                }
            }))
        }, da.removeHook = function(e, t) {
            var i = da.hooks(e).indexOf(t);
            return !(i <= -1) && (da.hooks_[e] = da.hooks_[e].slice(), da.hooks_[e].splice(i, 1), !0)
        }, !0 !== v.VIDEOJS_NO_DYNAMIC_STYLE && k()) {
        var pa = $(".vjs-styles-defaults");
        if (!pa) {
            pa = Te("vjs-styles-defaults");
            var fa = $("head");
            fa && fa.insertBefore(pa, fa.firstChild), Se(pa, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")
        }
    }
    _e(1, da), da.VERSION = d, da.options = ea.prototype.options_, da.getPlayers = function() {
        return ea.players
    }, da.getPlayer = function(e) {
        var t, i = ea.players;
        if ("string" == typeof e) {
            var n = ha(e),
                r = i[n];
            if (r) return r;
            t = $("#" + n)
        } else t = e;
        if (C(t)) {
            var a = t,
                s = a.player,
                o = a.playerId;
            if (s || i[o]) return s || i[o]
        }
    }, da.getAllPlayers = function() {
        return Object.keys(ea.players).map(function(e) {
            return ea.players[e]
        }).filter(Boolean)
    }, da.players = ea.players, da.getComponent = je.getComponent, da.registerComponent = function(e, t) {
        Zi.isTech(t) && m.warn("The " + e + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), je.registerComponent.call(je, e, t)
    }, da.getTech = Zi.getTech, da.registerTech = Zi.registerTech, da.use = function(e, t) {
        en[e] = en[e] || [], en[e].push(t)
    }, Object.defineProperty(da, "middleware", {
        value: {},
        writeable: !1,
        enumerable: !0
    }), Object.defineProperty(da.middleware, "TERMINATOR", {
        value: nn,
        writeable: !1,
        enumerable: !0
    }), da.browser = lt, da.TOUCH_ENABLED = ut, da.extend = function(e, t) {
        void 0 === t && (t = {});
        var i = function() {
                e.apply(this, arguments)
            },
            n = {};
        for (var r in "object" == typeof t ? (t.constructor !== Object.prototype.constructor && (i = t.constructor), n = t) : "function" == typeof t && (i = t),
                function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (e.super_ = t)
                }(i, e), n) n.hasOwnProperty(r) && (i.prototype[r] = n[r]);
        return i
    }, da.mergeOptions = Ne, da.bind = ke, da.registerPlugin = ca.registerPlugin, da.deregisterPlugin = ca.deregisterPlugin, da.plugin = function(e, t) {
        return m.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"), ca.registerPlugin(e, t)
    }, da.getPlugins = ca.getPlugins, da.getPlugin = ca.getPlugin, da.getPluginVersion = ca.getPluginVersion, da.addLanguage = function(e, t) {
        var i;
        return e = ("" + e).toLowerCase(), da.options.languages = Ne(da.options.languages, ((i = {})[e] = t, i)), da.options.languages[e]
    }, da.log = m, da.createLogger = g, da.createTimeRange = da.createTimeRanges = dt, da.formatTime = Pn, da.setFormatTime = function(e) {
        Ln = e
    }, da.resetFormatTime = function() {
        Ln = An
    }, da.parseUrl = Xt, da.isCrossOrigin = $t, da.EventTarget = we, da.on = he, da.one = fe, da.off = de, da.trigger = pe, da.xhr = pi, da.TextTrack = vi, da.AudioTrack = _i, da.VideoTrack = bi, ["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach(function(e) {
        da[e] = function() {
            return m.warn("videojs." + e + "() is deprecated; use videojs.dom." + e + "() instead"), J[e].apply(null, arguments)
        }
    }), da.computedStyle = n, da.dom = J, da.url = Qt;
    var ma = Pt(function(e, t) {
        var i, c, n, r, h;
        i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/\?#]*\/)*.*?)??(;.*?)?(\?.*?)?(#.*?)?$/, c = /^([^\/?#]*)(.*)$/, n = /(?:\/|^)\.(?=\/)/g, r = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g, h = {
            buildAbsoluteURL: function(e, t, i) {
                if (i = i || {}, e = e.trim(), !(t = t.trim())) {
                    if (!i.alwaysNormalize) return e;
                    var n = h.parseURL(e);
                    if (!n) throw new Error("Error trying to parse base URL.");
                    return n.path = h.normalizePath(n.path), h.buildURLFromParts(n)
                }
                var r = h.parseURL(t);
                if (!r) throw new Error("Error trying to parse relative URL.");
                if (r.scheme) return i.alwaysNormalize ? (r.path = h.normalizePath(r.path), h.buildURLFromParts(r)) : t;
                var a = h.parseURL(e);
                if (!a) throw new Error("Error trying to parse base URL.");
                if (!a.netLoc && a.path && "/" !== a.path[0]) {
                    var s = c.exec(a.path);
                    a.netLoc = s[1], a.path = s[2]
                }
                a.netLoc && !a.path && (a.path = "/");
                var o = {
                    scheme: a.scheme,
                    netLoc: r.netLoc,
                    path: null,
                    params: r.params,
                    query: r.query,
                    fragment: r.fragment
                };
                if (!r.netLoc && (o.netLoc = a.netLoc, "/" !== r.path[0]))
                    if (r.path) {
                        var u = a.path,
                            l = u.substring(0, u.lastIndexOf("/") + 1) + r.path;
                        o.path = h.normalizePath(l)
                    } else o.path = a.path, r.params || (o.params = a.params, r.query || (o.query = a.query));
                return null === o.path && (o.path = i.alwaysNormalize ? h.normalizePath(r.path) : r.path), h.buildURLFromParts(o)
            },
            parseURL: function(e) {
                var t = i.exec(e);
                return t ? {
                    scheme: t[1] || "",
                    netLoc: t[2] || "",
                    path: t[3] || "",
                    params: t[4] || "",
                    query: t[5] || "",
                    fragment: t[6] || ""
                } : null
            },
            normalizePath: function(e) {
                for (e = e.split("").reverse().join("").replace(n, ""); e.length !== (e = e.replace(r, "")).length;);
                return e.split("").reverse().join("")
            },
            buildURLFromParts: function(e) {
                return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
            }
        }, e.exports = h
    });
    /*! @name m3u8-parser @version 4.3.0 @license Apache-2.0 */
    function ga() {
        return (ga = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        }).apply(this, arguments)
    }

    function ya(e, t) {
        e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
    }

    function va(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    var _a = function() {
            function e() {
                this.listeners = {}
            }
            var t = e.prototype;
            return t.on = function(e, t) {
                this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t)
            }, t.off = function(e, t) {
                if (!this.listeners[e]) return !1;
                var i = this.listeners[e].indexOf(t);
                return this.listeners[e].splice(i, 1), -1 < i
            }, t.trigger = function(e) {
                var t, i, n, r = this.listeners[e];
                if (r)
                    if (2 === arguments.length)
                        for (i = r.length, t = 0; t < i; ++t) r[t].call(this, arguments[1]);
                    else
                        for (n = Array.prototype.slice.call(arguments, 1), i = r.length, t = 0; t < i; ++t) r[t].apply(this, n)
            }, t.dispose = function() {
                this.listeners = {}
            }, t.pipe = function(t) {
                this.on("data", function(e) {
                    t.push(e)
                })
            }, e
        }(),
        ba = function(t) {
            function e() {
                var e;
                return (e = t.call(this) || this).buffer = "", e
            }
            return ya(e, t), e.prototype.push = function(e) {
                var t;
                for (this.buffer += e, t = this.buffer.indexOf("\n"); - 1 < t; t = this.buffer.indexOf("\n")) this.trigger("data", this.buffer.substring(0, t)), this.buffer = this.buffer.substring(t + 1)
            }, e
        }(_a),
        Ta = function(e) {
            for (var t, i = e.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')), n = {}, r = i.length; r--;) "" !== i[r] && ((t = /([^=]*)=(.*)/.exec(i[r]).slice(1))[0] = t[0].replace(/^\s+|\s+$/g, ""), t[1] = t[1].replace(/^\s+|\s+$/g, ""), t[1] = t[1].replace(/^['"](.*)['"]$/g, "$1"), n[t[0]] = t[1]);
            return n
        },
        Sa = function(t) {
            function e() {
                var e;
                return (e = t.call(this) || this).customParsers = [], e.tagMappers = [], e
            }
            ya(e, t);
            var i = e.prototype;
            return i.push = function(n) {
                var u, l, c = this;
                0 !== (n = n.trim()).length && ("#" === n[0] ? this.tagMappers.reduce(function(e, t) {
                    var i = t(n);
                    return i === n ? e : e.concat([i])
                }, [n]).forEach(function(e) {
                    for (var t = 0; t < c.customParsers.length; t++)
                        if (c.customParsers[t].call(c, e)) return;
                    if (0 === e.indexOf("#EXT"))
                        if (e = e.replace("\r", ""), u = /^#EXTM3U/.exec(e)) c.trigger("data", {
                            type: "tag",
                            tagType: "m3u"
                        });
                        else {
                            if (u = /^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(e)) return l = {
                                type: "tag",
                                tagType: "inf"
                            }, u[1] && (l.duration = parseFloat(u[1])), u[2] && (l.title = u[2]), void c.trigger("data", l);
                            if (u = /^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(e)) return l = {
                                type: "tag",
                                tagType: "targetduration"
                            }, u[1] && (l.duration = parseInt(u[1], 10)), void c.trigger("data", l);
                            if (u = /^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(e)) return l = {
                                type: "tag",
                                tagType: "totalduration"
                            }, u[1] && (l.duration = parseInt(u[1], 10)), void c.trigger("data", l);
                            if (u = /^#EXT-X-VERSION:?([0-9.]*)?/.exec(e)) return l = {
                                type: "tag",
                                tagType: "version"
                            }, u[1] && (l.version = parseInt(u[1], 10)), void c.trigger("data", l);
                            if (u = /^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(e)) return l = {
                                type: "tag",
                                tagType: "media-sequence"
                            }, u[1] && (l.number = parseInt(u[1], 10)), void c.trigger("data", l);
                            if (u = /^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(e)) return l = {
                                type: "tag",
                                tagType: "discontinuity-sequence"
                            }, u[1] && (l.number = parseInt(u[1], 10)), void c.trigger("data", l);
                            if (u = /^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(e)) return l = {
                                type: "tag",
                                tagType: "playlist-type"
                            }, u[1] && (l.playlistType = u[1]), void c.trigger("data", l);
                            if (u = /^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(e)) return l = {
                                type: "tag",
                                tagType: "byterange"
                            }, u[1] && (l.length = parseInt(u[1], 10)), u[2] && (l.offset = parseInt(u[2], 10)), void c.trigger("data", l);
                            if (u = /^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(e)) return l = {
                                type: "tag",
                                tagType: "allow-cache"
                            }, u[1] && (l.allowed = !/NO/.test(u[1])), void c.trigger("data", l);
                            if (u = /^#EXT-X-MAP:?(.*)$/.exec(e)) {
                                if (l = {
                                        type: "tag",
                                        tagType: "map"
                                    }, u[1]) {
                                    var i = Ta(u[1]);
                                    if (i.URI && (l.uri = i.URI), i.BYTERANGE) {
                                        var n = i.BYTERANGE.split("@"),
                                            r = n[0],
                                            a = n[1];
                                        l.byterange = {}, r && (l.byterange.length = parseInt(r, 10)), a && (l.byterange.offset = parseInt(a, 10))
                                    }
                                }
                                c.trigger("data", l)
                            } else if (u = /^#EXT-X-STREAM-INF:?(.*)$/.exec(e)) {
                                if (l = {
                                        type: "tag",
                                        tagType: "stream-inf"
                                    }, u[1]) {
                                    if (l.attributes = Ta(u[1]), l.attributes.RESOLUTION) {
                                        var s = l.attributes.RESOLUTION.split("x"),
                                            o = {};
                                        s[0] && (o.width = parseInt(s[0], 10)), s[1] && (o.height = parseInt(s[1], 10)), l.attributes.RESOLUTION = o
                                    }
                                    l.attributes.BANDWIDTH && (l.attributes.BANDWIDTH = parseInt(l.attributes.BANDWIDTH, 10)), l.attributes["PROGRAM-ID"] && (l.attributes["PROGRAM-ID"] = parseInt(l.attributes["PROGRAM-ID"], 10))
                                }
                                c.trigger("data", l)
                            } else {
                                if (u = /^#EXT-X-MEDIA:?(.*)$/.exec(e)) return l = {
                                    type: "tag",
                                    tagType: "media"
                                }, u[1] && (l.attributes = Ta(u[1])), void c.trigger("data", l);
                                if (u = /^#EXT-X-ENDLIST/.exec(e)) c.trigger("data", {
                                    type: "tag",
                                    tagType: "endlist"
                                });
                                else if (u = /^#EXT-X-DISCONTINUITY/.exec(e)) c.trigger("data", {
                                    type: "tag",
                                    tagType: "discontinuity"
                                });
                                else {
                                    if (u = /^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(e)) return l = {
                                        type: "tag",
                                        tagType: "program-date-time"
                                    }, u[1] && (l.dateTimeString = u[1], l.dateTimeObject = new Date(u[1])), void c.trigger("data", l);
                                    if (u = /^#EXT-X-KEY:?(.*)$/.exec(e)) return l = {
                                        type: "tag",
                                        tagType: "key"
                                    }, u[1] && (l.attributes = Ta(u[1]), l.attributes.IV && ("0x" === l.attributes.IV.substring(0, 2).toLowerCase() && (l.attributes.IV = l.attributes.IV.substring(2)), l.attributes.IV = l.attributes.IV.match(/.{8}/g), l.attributes.IV[0] = parseInt(l.attributes.IV[0], 16), l.attributes.IV[1] = parseInt(l.attributes.IV[1], 16), l.attributes.IV[2] = parseInt(l.attributes.IV[2], 16), l.attributes.IV[3] = parseInt(l.attributes.IV[3], 16), l.attributes.IV = new Uint32Array(l.attributes.IV))), void c.trigger("data", l);
                                    if (u = /^#EXT-X-START:?(.*)$/.exec(e)) return l = {
                                        type: "tag",
                                        tagType: "start"
                                    }, u[1] && (l.attributes = Ta(u[1]), l.attributes["TIME-OFFSET"] = parseFloat(l.attributes["TIME-OFFSET"]), l.attributes.PRECISE = /YES/.test(l.attributes.PRECISE)), void c.trigger("data", l);
                                    if (u = /^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(e)) return l = {
                                        type: "tag",
                                        tagType: "cue-out-cont"
                                    }, u[1] ? l.data = u[1] : l.data = "", void c.trigger("data", l);
                                    if (u = /^#EXT-X-CUE-OUT:?(.*)?$/.exec(e)) return l = {
                                        type: "tag",
                                        tagType: "cue-out"
                                    }, u[1] ? l.data = u[1] : l.data = "", void c.trigger("data", l);
                                    if (u = /^#EXT-X-CUE-IN:?(.*)?$/.exec(e)) return l = {
                                        type: "tag",
                                        tagType: "cue-in"
                                    }, u[1] ? l.data = u[1] : l.data = "", void c.trigger("data", l);
                                    c.trigger("data", {
                                        type: "tag",
                                        data: e.slice(4)
                                    })
                                }
                            }
                        }
                    else c.trigger("data", {
                        type: "comment",
                        text: e.slice(1)
                    })
                }) : this.trigger("data", {
                    type: "uri",
                    uri: n
                }))
            }, i.addParser = function(e) {
                var t = this,
                    i = e.expression,
                    n = e.customType,
                    r = e.dataParser,
                    a = e.segment;
                "function" != typeof r && (r = function(e) {
                    return e
                }), this.customParsers.push(function(e) {
                    if (i.exec(e)) return t.trigger("data", {
                        type: "custom",
                        data: r(e),
                        customType: n,
                        segment: a
                    }), !0
                })
            }, i.addTagMapper = function(e) {
                var t = e.expression,
                    i = e.map;
                this.tagMappers.push(function(e) {
                    return t.test(e) ? i(e) : e
                })
            }, e
        }(_a),
        ka = function(t) {
            function e() {
                var e;
                (e = t.call(this) || this).lineStream = new ba, e.parseStream = new Sa, e.lineStream.pipe(e.parseStream);
                var r, a, s = va(va(e)),
                    o = [],
                    u = {},
                    l = {
                        AUDIO: {},
                        VIDEO: {},
                        "CLOSED-CAPTIONS": {},
                        SUBTITLES: {}
                    },
                    c = 0;
                return e.manifest = {
                    allowCache: !0,
                    discontinuityStarts: [],
                    segments: []
                }, e.parseStream.on("data", function(t) {
                    var i, n;
                    ({
                        tag: function() {
                            ({
                                "allow-cache": function() {
                                    this.manifest.allowCache = t.allowed, "allowed" in t || (this.trigger("info", {
                                        message: "defaulting allowCache to YES"
                                    }), this.manifest.allowCache = !0)
                                },
                                byterange: function() {
                                    var e = {};
                                    "length" in t && ((u.byterange = e).length = t.length, "offset" in t || (this.trigger("info", {
                                        message: "defaulting offset to zero"
                                    }), t.offset = 0)), "offset" in t && ((u.byterange = e).offset = t.offset)
                                },
                                endlist: function() {
                                    this.manifest.endList = !0
                                },
                                inf: function() {
                                    "mediaSequence" in this.manifest || (this.manifest.mediaSequence = 0, this.trigger("info", {
                                        message: "defaulting media sequence to zero"
                                    })), "discontinuitySequence" in this.manifest || (this.manifest.discontinuitySequence = 0, this.trigger("info", {
                                        message: "defaulting discontinuity sequence to zero"
                                    })), 0 < t.duration && (u.duration = t.duration), 0 === t.duration && (u.duration = .01, this.trigger("info", {
                                        message: "updating zero segment duration to a small value"
                                    })), this.manifest.segments = o
                                },
                                key: function() {
                                    t.attributes ? "NONE" !== t.attributes.METHOD ? t.attributes.URI ? (t.attributes.METHOD || this.trigger("warn", {
                                        message: "defaulting key method to AES-128"
                                    }), a = {
                                        method: t.attributes.METHOD || "AES-128",
                                        uri: t.attributes.URI
                                    }, "undefined" != typeof t.attributes.IV && (a.iv = t.attributes.IV)) : this.trigger("warn", {
                                        message: "ignoring key declaration without URI"
                                    }) : a = null : this.trigger("warn", {
                                        message: "ignoring key declaration without attribute list"
                                    })
                                },
                                "media-sequence": function() {
                                    isFinite(t.number) ? this.manifest.mediaSequence = t.number : this.trigger("warn", {
                                        message: "ignoring invalid media sequence: " + t.number
                                    })
                                },
                                "discontinuity-sequence": function() {
                                    isFinite(t.number) ? (this.manifest.discontinuitySequence = t.number, c = t.number) : this.trigger("warn", {
                                        message: "ignoring invalid discontinuity sequence: " + t.number
                                    })
                                },
                                "playlist-type": function() {
                                    /VOD|EVENT/.test(t.playlistType) ? this.manifest.playlistType = t.playlistType : this.trigger("warn", {
                                        message: "ignoring unknown playlist type: " + t.playlist
                                    })
                                },
                                map: function() {
                                    r = {}, t.uri && (r.uri = t.uri), t.byterange && (r.byterange = t.byterange)
                                },
                                "stream-inf": function() {
                                    this.manifest.playlists = o, this.manifest.mediaGroups = this.manifest.mediaGroups || l, t.attributes ? (u.attributes || (u.attributes = {}), ga(u.attributes, t.attributes)) : this.trigger("warn", {
                                        message: "ignoring empty stream-inf attributes"
                                    })
                                },
                                media: function() {
                                    if (this.manifest.mediaGroups = this.manifest.mediaGroups || l, t.attributes && t.attributes.TYPE && t.attributes["GROUP-ID"] && t.attributes.NAME) {
                                        var e = this.manifest.mediaGroups[t.attributes.TYPE];
                                        e[t.attributes["GROUP-ID"]] = e[t.attributes["GROUP-ID"]] || {}, i = e[t.attributes["GROUP-ID"]], (n = {
                                            default: /yes/i.test(t.attributes.DEFAULT)
                                        }).default ? n.autoselect = !0 : n.autoselect = /yes/i.test(t.attributes.AUTOSELECT), t.attributes.LANGUAGE && (n.language = t.attributes.LANGUAGE), t.attributes.URI && (n.uri = t.attributes.URI), t.attributes["INSTREAM-ID"] && (n.instreamId = t.attributes["INSTREAM-ID"]), t.attributes.CHARACTERISTICS && (n.characteristics = t.attributes.CHARACTERISTICS), t.attributes.FORCED && (n.forced = /yes/i.test(t.attributes.FORCED)), i[t.attributes.NAME] = n
                                    } else this.trigger("warn", {
                                        message: "ignoring incomplete or missing media group"
                                    })
                                },
                                discontinuity: function() {
                                    c += 1, u.discontinuity = !0, this.manifest.discontinuityStarts.push(o.length)
                                },
                                "program-date-time": function() {
                                    "undefined" == typeof this.manifest.dateTimeString && (this.manifest.dateTimeString = t.dateTimeString, this.manifest.dateTimeObject = t.dateTimeObject), u.dateTimeString = t.dateTimeString, u.dateTimeObject = t.dateTimeObject
                                },
                                targetduration: function() {
                                    !isFinite(t.duration) || t.duration < 0 ? this.trigger("warn", {
                                        message: "ignoring invalid target duration: " + t.duration
                                    }) : this.manifest.targetDuration = t.duration
                                },
                                totalduration: function() {
                                    !isFinite(t.duration) || t.duration < 0 ? this.trigger("warn", {
                                        message: "ignoring invalid total duration: " + t.duration
                                    }) : this.manifest.totalDuration = t.duration
                                },
                                start: function() {
                                    t.attributes && !isNaN(t.attributes["TIME-OFFSET"]) ? this.manifest.start = {
                                        timeOffset: t.attributes["TIME-OFFSET"],
                                        precise: t.attributes.PRECISE
                                    } : this.trigger("warn", {
                                        message: "ignoring start declaration without appropriate attribute list"
                                    })
                                },
                                "cue-out": function() {
                                    u.cueOut = t.data
                                },
                                "cue-out-cont": function() {
                                    u.cueOutCont = t.data
                                },
                                "cue-in": function() {
                                    u.cueIn = t.data
                                }
                            } [t.tagType] || function() {}).call(s)
                        },
                        uri: function() {
                            u.uri = t.uri, o.push(u), !this.manifest.targetDuration || "duration" in u || (this.trigger("warn", {
                                message: "defaulting segment duration to the target duration"
                            }), u.duration = this.manifest.targetDuration), a && (u.key = a), u.timeline = c, r && (u.map = r), u = {}
                        },
                        comment: function() {},
                        custom: function() {
                            t.segment ? (u.custom = u.custom || {}, u.custom[t.customType] = t.data) : (this.manifest.custom = this.manifest.custom || {}, this.manifest.custom[t.customType] = t.data)
                        }
                    })[t.type].call(s)
                }), e
            }
            ya(e, t);
            var i = e.prototype;
            return i.push = function(e) {
                this.lineStream.push(e)
            }, i.end = function() {
                this.lineStream.push("\n")
            }, i.addParser = function(e) {
                this.parseStream.addParser(e)
            }, i.addTagMapper = function(e) {
                this.parseStream.addTagMapper(e)
            }, e
        }(_a),
        Ca = function(e) {
            return !!e && "object" == typeof e
        },
        wa = function n() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            return t.reduce(function(t, i) {
                return Object.keys(i).forEach(function(e) {
                    Array.isArray(t[e]) && Array.isArray(i[e]) ? t[e] = t[e].concat(i[e]) : Ca(t[e]) && Ca(i[e]) ? t[e] = n(t[e], i[e]) : t[e] = i[e]
                }), t
            }, {})
        },
        Ea = function(e) {
            return e.reduce(function(e, t) {
                return e.concat(t)
            }, [])
        },
        Aa = function(e) {
            if (!e.length) return [];
            for (var t = [], i = 0; i < e.length; i++) t.push(e[i]);
            return t
        },
        La = function(e) {
            var t;
            return (t = e.reduce(function(e, t) {
                var i, n = t.attributes.id + (t.attributes.lang || "");
                e[n] ? (t.segments[0].discontinuity = !0, (i = e[n].segments).push.apply(i, t.segments), t.attributes.contentProtection && (e[n].attributes.contentProtection = t.attributes.contentProtection)) : e[n] = t;
                return e
            }, {}), Object.keys(t).map(function(e) {
                return t[e]
            })).map(function(e) {
                var t, n;
                return e.discontinuityStarts = (t = e.segments, n = "discontinuity", t.reduce(function(e, t, i) {
                    return t[n] && e.push(i), e
                }, [])), e
            })
        },
        Pa = function(e) {
            var t, i = e.attributes,
                n = e.segments,
                r = {
                    attributes: (t = {
                        NAME: i.id,
                        AUDIO: "audio",
                        SUBTITLES: "subs",
                        RESOLUTION: {
                            width: i.width,
                            height: i.height
                        },
                        CODECS: i.codecs,
                        BANDWIDTH: i.bandwidth
                    }, t["PROGRAM-ID"] = 1, t),
                    uri: "",
                    endList: "static" === (i.type || "static"),
                    timeline: i.periodIndex,
                    resolvedUri: "",
                    targetDuration: i.duration,
                    segments: n,
                    mediaSequence: n.length ? n[0].number : 1
                };
            return i.contentProtection && (r.contentProtection = i.contentProtection), r
        };
    "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    var Oa, Ia = (function(e, t) {
            var i, c, n, r, h;
            i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/\?#]*\/)*.*?)??(;.*?)?(\?.*?)?(#.*?)?$/, c = /^([^\/?#]*)(.*)$/, n = /(?:\/|^)\.(?=\/)/g, r = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g, h = {
                buildAbsoluteURL: function(e, t, i) {
                    if (i = i || {}, e = e.trim(), !(t = t.trim())) {
                        if (!i.alwaysNormalize) return e;
                        var n = h.parseURL(e);
                        if (!n) throw new Error("Error trying to parse base URL.");
                        return n.path = h.normalizePath(n.path), h.buildURLFromParts(n)
                    }
                    var r = h.parseURL(t);
                    if (!r) throw new Error("Error trying to parse relative URL.");
                    if (r.scheme) return i.alwaysNormalize ? (r.path = h.normalizePath(r.path), h.buildURLFromParts(r)) : t;
                    var a = h.parseURL(e);
                    if (!a) throw new Error("Error trying to parse base URL.");
                    if (!a.netLoc && a.path && "/" !== a.path[0]) {
                        var s = c.exec(a.path);
                        a.netLoc = s[1], a.path = s[2]
                    }
                    a.netLoc && !a.path && (a.path = "/");
                    var o = {
                        scheme: a.scheme,
                        netLoc: r.netLoc,
                        path: null,
                        params: r.params,
                        query: r.query,
                        fragment: r.fragment
                    };
                    if (!r.netLoc && (o.netLoc = a.netLoc, "/" !== r.path[0]))
                        if (r.path) {
                            var u = a.path,
                                l = u.substring(0, u.lastIndexOf("/") + 1) + r.path;
                            o.path = h.normalizePath(l)
                        } else o.path = a.path, r.params || (o.params = a.params, r.query || (o.query = a.query));
                    return null === o.path && (o.path = i.alwaysNormalize ? h.normalizePath(r.path) : r.path), h.buildURLFromParts(o)
                },
                parseURL: function(e) {
                    var t = i.exec(e);
                    return t ? {
                        scheme: t[1] || "",
                        netLoc: t[2] || "",
                        path: t[3] || "",
                        params: t[4] || "",
                        query: t[5] || "",
                        fragment: t[6] || ""
                    } : null
                },
                normalizePath: function(e) {
                    for (e = e.split("").reverse().join("").replace(n, ""); e.length !== (e = e.replace(r, "")).length;);
                    return e.split("").reverse().join("")
                },
                buildURLFromParts: function(e) {
                    return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
                }
            }, e.exports = h
        }(Oa = {
            exports: {}
        }, Oa.exports), Oa.exports),
        Ua = function(e, t) {
            return /^[a-z]+:/i.test(t) ? t : (/\/\//i.test(e) || (e = Ia.buildAbsoluteURL(v.location.href, e)), Ia.buildAbsoluteURL(e, t))
        },
        xa = function(e) {
            var t = e.baseUrl,
                i = void 0 === t ? "" : t,
                n = e.source,
                r = void 0 === n ? "" : n,
                a = e.range,
                s = void 0 === a ? "" : a,
                o = {
                    uri: r,
                    resolvedUri: Ua(i || "", r)
                };
            if (s) {
                var u = s.split("-"),
                    l = parseInt(u[0], 10),
                    c = parseInt(u[1], 10);
                o.byterange = {
                    length: c - l,
                    offset: l
                }
            }
            return o
        },
        Da = function(e, t) {
            for (var i, n, r, a, s, o, u, l, c, h, d, p, f = e.type, m = void 0 === f ? "static" : f, g = e.minimumUpdatePeriod, y = void 0 === g ? 0 : g, v = e.media, _ = void 0 === v ? "" : v, b = e.sourceDuration, T = e.timescale, S = void 0 === T ? 1 : T, k = e.startNumber, C = void 0 === k ? 1 : k, w = e.periodIndex, E = [], A = -1, L = 0; L < t.length; L++) {
                var P = t[L],
                    O = P.d,
                    I = P.r || 0,
                    U = P.t || 0;
                A < 0 && (A = U), U && A < U && (A = U);
                var x = void 0;
                if (I < 0) {
                    var D = L + 1;
                    x = D === t.length ? "dynamic" === m && 0 < y && 0 < _.indexOf("$Number$") ? (n = A, r = O, void 0, a = (i = e).NOW, s = i.clientOffset, o = i.availabilityStartTime, u = i.timescale, l = void 0 === u ? 1 : u, c = i.start, h = void 0 === c ? 0 : c, d = i.minimumUpdatePeriod, p = (a + s) / 1e3 + (void 0 === d ? 0 : d) - (o + h), Math.ceil((p * l - n) / r)) : (b * S - A) / O : (t[D].t - A) / O
                } else x = I + 1;
                for (var R = C + E.length + x, M = C + E.length; M < R;) E.push({
                    number: M,
                    duration: O / S,
                    time: A,
                    timeline: w
                }), A += O, M++
            }
            return E
        },
        Ra = {
            static: function(e) {
                var t = e.duration,
                    i = e.timescale,
                    n = void 0 === i ? 1 : i,
                    r = e.sourceDuration;
                return {
                    start: 0,
                    end: Math.ceil(r / (t / n))
                }
            },
            dynamic: function(e) {
                var t = e.NOW,
                    i = e.clientOffset,
                    n = e.availabilityStartTime,
                    r = e.timescale,
                    a = void 0 === r ? 1 : r,
                    s = e.duration,
                    o = e.start,
                    u = void 0 === o ? 0 : o,
                    l = e.minimumUpdatePeriod,
                    c = void 0 === l ? 0 : l,
                    h = e.timeShiftBufferDepth,
                    d = void 0 === h ? 1 / 0 : h,
                    p = (t + i) / 1e3,
                    f = n + u,
                    m = p + c - f,
                    g = Math.ceil(m * a / s),
                    y = Math.floor((p - f - d) * a / s),
                    v = Math.floor((p - f) * a / s);
                return {
                    start: Math.max(0, y),
                    end: Math.min(g, v)
                }
            }
        },
        Ma = function(e) {
            var o, t = e.type,
                i = void 0 === t ? "static" : t,
                n = e.duration,
                r = e.timescale,
                a = void 0 === r ? 1 : r,
                s = e.sourceDuration,
                u = Ra[i](e),
                l = function(e, t) {
                    for (var i = [], n = e; n < t; n++) i.push(n);
                    return i
                }(u.start, u.end).map((o = e, function(e, t) {
                    var i = o.duration,
                        n = o.timescale,
                        r = void 0 === n ? 1 : n,
                        a = o.periodIndex,
                        s = o.startNumber;
                    return {
                        number: (void 0 === s ? 1 : s) + e,
                        duration: i / r,
                        timeline: a,
                        time: t * i
                    }
                }));
            if ("static" === i) {
                var c = l.length - 1;
                l[c].duration = s - n / a * c
            }
            return l
        },
        Ba = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g,
        Na = function(e, t) {
            return e.replace(Ba, (a = t, function(e, t, i, n) {
                if ("$$" === e) return "$";
                if ("undefined" == typeof a[t]) return e;
                var r = "" + a[t];
                return "RepresentationID" === t ? r : (n = i ? parseInt(n, 10) : 1) <= r.length ? r : "" + new Array(n - r.length + 1).join("0") + r
            }));
            var a
        },
        ja = function(i, e) {
            var t, n, r = {
                    RepresentationID: i.id,
                    Bandwidth: i.bandwidth || 0
                },
                a = i.initialization,
                s = void 0 === a ? {
                    sourceURL: "",
                    range: ""
                } : a,
                o = xa({
                    baseUrl: i.baseUrl,
                    source: Na(s.sourceURL, r),
                    range: s.range
                });
            return (n = e, (t = i).duration || n ? t.duration ? Ma(t) : Da(t, n) : [{
                number: t.startNumber || 1,
                duration: t.sourceDuration,
                time: 0,
                timeline: t.periodIndex
            }]).map(function(e) {
                r.Number = e.number, r.Time = e.time;
                var t = Na(i.media || "", r);
                return {
                    uri: t,
                    timeline: e.timeline,
                    duration: e.duration,
                    resolvedUri: Ua(i.baseUrl || "", t),
                    map: o,
                    number: e.number
                }
            })
        },
        Fa = "INVALID_NUMBER_OF_PERIOD",
        Va = "DASH_EMPTY_MANIFEST",
        Ha = "DASH_INVALID_XML",
        qa = "NO_BASE_URL",
        za = "SEGMENT_TIME_UNSPECIFIED",
        Wa = "UNSUPPORTED_UTC_TIMING_SCHEME",
        Ga = function(u, e) {
            var t = u.duration,
                i = u.segmentUrls,
                n = void 0 === i ? [] : i;
            if (!t && !e || t && e) throw new Error(za);
            var r, a = n.map(function(e) {
                return i = e, n = (t = u).baseUrl, r = t.initialization, s = xa({
                    baseUrl: n,
                    source: (a = void 0 === r ? {} : r).sourceURL,
                    range: a.range
                }), (o = xa({
                    baseUrl: n,
                    source: i.media,
                    range: i.mediaRange
                })).map = s, o;
                var t, i, n, r, a, s, o
            });
            return t && (r = Ma(u)), e && (r = Da(u, e)), r.map(function(e, t) {
                if (a[t]) {
                    var i = a[t];
                    return i.timeline = e.timeline, i.duration = e.duration, i.number = e.number, i
                }
            }).filter(function(e) {
                return e
            })
        },
        Xa = function(e) {
            var t = e.baseUrl,
                i = e.initialization,
                n = void 0 === i ? {} : i,
                r = e.sourceDuration,
                a = e.timescale,
                s = void 0 === a ? 1 : a,
                o = e.indexRange,
                u = void 0 === o ? "" : o,
                l = e.duration;
            if (!t) throw new Error(qa);
            var c = xa({
                    baseUrl: t,
                    source: n.sourceURL,
                    range: n.range
                }),
                h = xa({
                    baseUrl: t,
                    source: t,
                    range: u
                });
            if (h.map = c, l) {
                var d = Ma(e);
                d.length && (h.duration = d[0].duration, h.timeline = d[0].timeline)
            } else r && (h.duration = r / s, h.timeline = 0);
            return h.number = 0, [h]
        },
        Ya = function(e) {
            var t, i, n = e.attributes,
                r = e.segmentInfo;
            if (r.template ? (i = ja, t = wa(n, r.template)) : r.base ? (i = Xa, t = wa(n, r.base)) : r.list && (i = Ga, t = wa(n, r.list)), !i) return {
                attributes: n
            };
            var a = i(t, r.timeline);
            if (t.duration) {
                var s = t,
                    o = s.duration,
                    u = s.timescale,
                    l = void 0 === u ? 1 : u;
                t.duration = o / l
            } else a.length ? t.duration = a.reduce(function(e, t) {
                return Math.max(e, Math.ceil(t.duration))
            }, 0) : t.duration = 0;
            return {
                attributes: t,
                segments: a
            }
        },
        Ka = function(e, t) {
            return Aa(e.childNodes).filter(function(e) {
                return e.tagName === t
            })
        },
        $a = function(e) {
            return e.textContent.trim()
        },
        Qa = function(e) {
            var t = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(e);
            if (!t) return 0;
            var i = t.slice(1),
                n = i[0],
                r = i[1],
                a = i[2],
                s = i[3],
                o = i[4],
                u = i[5];
            return 31536e3 * parseFloat(n || 0) + 2592e3 * parseFloat(r || 0) + 86400 * parseFloat(a || 0) + 3600 * parseFloat(s || 0) + 60 * parseFloat(o || 0) + parseFloat(u || 0)
        },
        Ja = {
            mediaPresentationDuration: function(e) {
                return Qa(e)
            },
            availabilityStartTime: function(e) {
                return /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(t = e) && (t += "Z"), Date.parse(t) / 1e3;
                var t
            },
            minimumUpdatePeriod: function(e) {
                return Qa(e)
            },
            timeShiftBufferDepth: function(e) {
                return Qa(e)
            },
            start: function(e) {
                return Qa(e)
            },
            width: function(e) {
                return parseInt(e, 10)
            },
            height: function(e) {
                return parseInt(e, 10)
            },
            bandwidth: function(e) {
                return parseInt(e, 10)
            },
            startNumber: function(e) {
                return parseInt(e, 10)
            },
            timescale: function(e) {
                return parseInt(e, 10)
            },
            duration: function(e) {
                var t = parseInt(e, 10);
                return isNaN(t) ? Qa(e) : t
            },
            d: function(e) {
                return parseInt(e, 10)
            },
            t: function(e) {
                return parseInt(e, 10)
            },
            r: function(e) {
                return parseInt(e, 10)
            },
            DEFAULT: function(e) {
                return e
            }
        },
        Za = function(e) {
            return e && e.attributes ? Aa(e.attributes).reduce(function(e, t) {
                var i = Ja[t.name] || Ja.DEFAULT;
                return e[t.name] = i(t.value), e
            }, {}) : {}
        };
    var es, ts, is, ns, rs, as = {
            "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
            "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
            "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
            "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime"
        },
        ss = function(e, i) {
            return i.length ? Ea(e.map(function(t) {
                return i.map(function(e) {
                    return Ua(t, $a(e))
                })
            })) : e
        },
        os = function(e) {
            var t = Ka(e, "SegmentTemplate")[0],
                i = Ka(e, "SegmentList")[0],
                n = i && Ka(i, "SegmentURL").map(function(e) {
                    return wa({
                        tag: "SegmentURL"
                    }, Za(e))
                }),
                r = Ka(e, "SegmentBase")[0],
                a = i || t,
                s = a && Ka(a, "SegmentTimeline")[0],
                o = i || r || t,
                u = o && Ka(o, "Initialization")[0],
                l = t && Za(t);
            l && u ? l.initialization = u && Za(u) : l && l.initialization && (l.initialization = {
                sourceURL: l.initialization
            });
            var c = {
                template: l,
                timeline: s && Ka(s, "S").map(function(e) {
                    return Za(e)
                }),
                list: i && wa(Za(i), {
                    segmentUrls: n,
                    initialization: Za(u)
                }),
                base: r && wa(Za(r), {
                    initialization: Za(u)
                })
            };
            return Object.keys(c).forEach(function(e) {
                c[e] || delete c[e]
            }), c
        },
        us = function(e) {
            return e.reduce(function(e, t) {
                var i = Za(t),
                    n = as[i.schemeIdUri];
                if (n) {
                    e[n] = {
                        attributes: i
                    };
                    var r = Ka(t, "cenc:pssh")[0];
                    if (r) {
                        var a = $a(r),
                            s = a && function(e) {
                                for (var t = v.atob(e), i = new Uint8Array(t.length), n = 0; n < t.length; n++) i[n] = t.charCodeAt(n);
                                return i
                            }(a);
                        e[n].pssh = s
                    }
                }
                return e
            }, {})
        },
        ls = function(p, f, m) {
            return function(e) {
                var t = Za(e),
                    i = ss(f, Ka(e, "BaseURL")),
                    n = Ka(e, "Role")[0],
                    r = {
                        role: Za(n)
                    },
                    a = wa(p, t, r),
                    s = us(Ka(e, "ContentProtection"));
                Object.keys(s).length && (a = wa(a, {
                    contentProtection: s
                }));
                var o, u, l, c = os(e),
                    h = Ka(e, "Representation"),
                    d = wa(m, c);
                return Ea(h.map((o = a, u = i, l = d, function(e) {
                    var t = Ka(e, "BaseURL"),
                        i = ss(u, t),
                        n = wa(o, Za(e)),
                        r = os(e);
                    return i.map(function(e) {
                        return {
                            segmentInfo: wa(l, r),
                            attributes: wa(n, {
                                baseUrl: e
                            })
                        }
                    })
                })))
            }
        },
        cs = function(e, t) {
            void 0 === t && (t = {});
            var i = t,
                n = i.manifestUri,
                r = void 0 === n ? "" : n,
                a = i.NOW,
                s = void 0 === a ? Date.now() : a,
                o = i.clientOffset,
                u = void 0 === o ? 0 : o,
                l = Ka(e, "Period");
            if (!l.length) throw new Error(Fa);
            var c, h, d = Za(e),
                p = ss([r], Ka(e, "BaseURL"));
            return d.sourceDuration = d.mediaPresentationDuration || 0, d.NOW = s, d.clientOffset = u, Ea(l.map((c = d, h = p, function(e, t) {
                var i = ss(h, Ka(e, "BaseURL")),
                    n = Za(e),
                    r = parseInt(n.id, 10),
                    a = v.isNaN(r) ? t : r,
                    s = wa(c, {
                        periodIndex: a
                    }),
                    o = Ka(e, "AdaptationSet"),
                    u = os(e);
                return Ea(o.map(ls(s, i, u)))
            })))
        },
        hs = function(e) {
            if ("" === e) throw new Error(Va);
            var t = (new v.DOMParser).parseFromString(e, "application/xml"),
                i = t && "MPD" === t.documentElement.tagName ? t.documentElement : null;
            if (!i || i && 0 < i.getElementsByTagName("parsererror").length) throw new Error(Ha);
            return i
        },
        ds = function(e, t) {
            return function(e) {
                var t;
                if (!e.length) return {};
                var i = e[0].attributes,
                    n = i.sourceDuration,
                    r = i.minimumUpdatePeriod,
                    a = void 0 === r ? 0 : r,
                    s = La(e.filter(function(e) {
                        var t = e.attributes;
                        return "video/mp4" === t.mimeType || "video" === t.contentType
                    })).map(Pa),
                    o = La(e.filter(function(e) {
                        var t = e.attributes;
                        return "audio/mp4" === t.mimeType || "audio" === t.contentType
                    })),
                    u = e.filter(function(e) {
                        var t = e.attributes;
                        return "text/vtt" === t.mimeType || "text" === t.contentType
                    }),
                    l = {
                        allowCache: !0,
                        discontinuityStarts: [],
                        segments: [],
                        endList: !0,
                        mediaGroups: (t = {
                            AUDIO: {},
                            VIDEO: {}
                        }, t["CLOSED-CAPTIONS"] = {}, t.SUBTITLES = {}, t),
                        uri: "",
                        duration: n,
                        playlists: s,
                        minimumUpdatePeriod: 1e3 * a
                    };
                return o.length && (l.mediaGroups.AUDIO.audio = o.reduce(function(e, t) {
                    var i, n, r, a, s, o = t.attributes.role && t.attributes.role.value || "main",
                        u = t.attributes.lang || "",
                        l = "main";
                    return u && (l = t.attributes.lang + " (" + o + ")"), e[l] && e[l].playlists[0].attributes.BANDWIDTH > t.attributes.bandwidth || (e[l] = {
                        language: u,
                        autoselect: !0,
                        default: "main" === o,
                        playlists: [(i = t, r = i.attributes, a = i.segments, s = {
                            attributes: (n = {
                                NAME: r.id,
                                BANDWIDTH: r.bandwidth,
                                CODECS: r.codecs
                            }, n["PROGRAM-ID"] = 1, n),
                            uri: "",
                            endList: "static" === (r.type || "static"),
                            timeline: r.periodIndex,
                            resolvedUri: "",
                            targetDuration: r.duration,
                            segments: a,
                            mediaSequence: a.length ? a[0].number : 1
                        }, r.contentProtection && (s.contentProtection = r.contentProtection), s)],
                        uri: ""
                    }), e
                }, {})), u.length && (l.mediaGroups.SUBTITLES.subs = u.reduce(function(e, t) {
                    var i, n, r, a, s = t.attributes.lang || "text";
                    return e[s] || (e[s] = {
                        language: s,
                        default: !1,
                        autoselect: !1,
                        playlists: [(i = t, r = i.attributes, a = i.segments, "undefined" == typeof a && (a = [{
                            uri: r.baseUrl,
                            timeline: r.periodIndex,
                            resolvedUri: r.baseUrl || "",
                            duration: r.sourceDuration,
                            number: 0
                        }], r.duration = r.sourceDuration), {
                            attributes: (n = {
                                NAME: r.id,
                                BANDWIDTH: r.bandwidth
                            }, n["PROGRAM-ID"] = 1, n),
                            uri: "",
                            endList: "static" === (r.type || "static"),
                            timeline: r.periodIndex,
                            resolvedUri: r.baseUrl || "",
                            targetDuration: r.duration,
                            segments: a,
                            mediaSequence: a.length ? a[0].number : 1
                        })],
                        uri: ""
                    }), e
                }, {})), l
            }(cs(hs(e), t).map(Ya))
        },
        ps = function(e) {
            return function(e) {
                var t = Ka(e, "UTCTiming")[0];
                if (!t) return null;
                var i = Za(t);
                switch (i.schemeIdUri) {
                    case "urn:mpeg:dash:utc:http-head:2014":
                    case "urn:mpeg:dash:utc:http-head:2012":
                        i.method = "HEAD";
                        break;
                    case "urn:mpeg:dash:utc:http-xsdate:2014":
                    case "urn:mpeg:dash:utc:http-iso:2014":
                    case "urn:mpeg:dash:utc:http-xsdate:2012":
                    case "urn:mpeg:dash:utc:http-iso:2012":
                        i.method = "GET";
                        break;
                    case "urn:mpeg:dash:utc:direct:2014":
                    case "urn:mpeg:dash:utc:direct:2012":
                        i.method = "DIRECT", i.value = Date.parse(i.value);
                        break;
                    case "urn:mpeg:dash:utc:http-ntp:2014":
                    case "urn:mpeg:dash:utc:ntp:2014":
                    case "urn:mpeg:dash:utc:sntp:2014":
                    default:
                        throw new Error(Wa)
                }
                return i
            }(hs(e))
        },
        fs = function(e) {
            return e >>> 0
        };
    is = function(e) {
        return es(e, ["moov", "trak"]).reduce(function(e, t) {
            var i, n, r, a, s;
            return (i = es(t, ["tkhd"])[0]) ? (n = i[0], a = fs(i[r = 0 === n ? 12 : 20] << 24 | i[r + 1] << 16 | i[r + 2] << 8 | i[r + 3]), (s = es(t, ["mdia", "mdhd"])[0]) ? (r = 0 === (n = s[0]) ? 12 : 20, e[a] = fs(s[r] << 24 | s[r + 1] << 16 | s[r + 2] << 8 | s[r + 3]), e) : null) : null
        }, {})
    }, ns = function(r, e) {
        var t, i, n;
        return t = es(e, ["moof", "traf"]), i = [].concat.apply([], t.map(function(n) {
            return es(n, ["tfhd"]).map(function(e) {
                var t, i;
                return t = fs(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]), i = r[t] || 9e4, (es(n, ["tfdt"]).map(function(e) {
                    var t, i;
                    return t = e[0], i = fs(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]), 1 === t && (i *= Math.pow(2, 32), i += fs(e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11])), i
                })[0] || 1 / 0) / i
            })
        })), n = Math.min.apply(null, i), isFinite(n) ? n : 0
    }, rs = function(e) {
        var t = es(e, ["moov", "trak"]),
            o = [];
        return t.forEach(function(e) {
            var t = es(e, ["mdia", "hdlr"]),
                s = es(e, ["tkhd"]);
            t.forEach(function(e, t) {
                var i, n, r = ts(e.subarray(8, 12)),
                    a = s[t];
                "vide" === r && (n = 0 === (i = new DataView(a.buffer, a.byteOffset, a.byteLength)).getUint8(0) ? i.getUint32(12) : i.getUint32(20), o.push(n))
            })
        }), o
    };
    var ms, gs, ys, vs, _s, bs, Ts, Ss, ks, Cs, ws, Es, As, Ls, Ps, Os, Is, Us, xs, Ds, Rs, Ms, Bs, Ns, js, Fs, Vs, Hs, qs, zs, Ws, Gs, Xs, Ys, Ks, $s, Qs, Js, Zs, eo, to = {
            findBox: es = function(e, t) {
                var i, n, r, a, s, o = [];
                if (!t.length) return null;
                for (i = 0; i < e.byteLength;) n = fs(e[i] << 24 | e[i + 1] << 16 | e[i + 2] << 8 | e[i + 3]), r = ts(e.subarray(i + 4, i + 8)), a = 1 < n ? i + n : e.byteLength, r === t[0] && (1 === t.length ? o.push(e.subarray(i + 8, a)) : (s = es(e.subarray(i + 8, a), t.slice(1))).length && (o = o.concat(s))), i = a;
                return o
            },
            parseType: ts = function(e) {
                var t = "";
                return t += String.fromCharCode(e[0]), t += String.fromCharCode(e[1]), t += String.fromCharCode(e[2]), t += String.fromCharCode(e[3])
            },
            timescale: is,
            startTime: ns,
            videoTrackIds: rs
        },
        io = Math.pow(2, 32) - 1;
    ! function() {
        var e;
        if (Ms = {
                avc1: [],
                avcC: [],
                btrt: [],
                dinf: [],
                dref: [],
                esds: [],
                ftyp: [],
                hdlr: [],
                mdat: [],
                mdhd: [],
                mdia: [],
                mfhd: [],
                minf: [],
                moof: [],
                moov: [],
                mp4a: [],
                mvex: [],
                mvhd: [],
                sdtp: [],
                smhd: [],
                stbl: [],
                stco: [],
                stsc: [],
                stsd: [],
                stsz: [],
                stts: [],
                styp: [],
                tfdt: [],
                tfhd: [],
                traf: [],
                trak: [],
                trun: [],
                trex: [],
                tkhd: [],
                vmhd: []
            }, "undefined" != typeof Uint8Array) {
            for (e in Ms) Ms.hasOwnProperty(e) && (Ms[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
            Bs = new Uint8Array(["i".charCodeAt(0), "s".charCodeAt(0), "o".charCodeAt(0), "m".charCodeAt(0)]), js = new Uint8Array(["a".charCodeAt(0), "v".charCodeAt(0), "c".charCodeAt(0), "1".charCodeAt(0)]), Ns = new Uint8Array([0, 0, 0, 1]), Fs = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), Vs = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]), Hs = {
                video: Fs,
                audio: Vs
            }, Ws = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), zs = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), Gs = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), Xs = Gs, Ys = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), Ks = Gs, qs = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
        }
    }(), ms = function(e) {
        var t, i, n = [],
            r = 0;
        for (t = 1; t < arguments.length; t++) n.push(arguments[t]);
        for (t = n.length; t--;) r += n[t].byteLength;
        for (i = new Uint8Array(r + 8), new DataView(i.buffer, i.byteOffset, i.byteLength).setUint32(0, i.byteLength), i.set(e, 4), t = 0, r = 8; t < n.length; t++) i.set(n[t], r), r += n[t].byteLength;
        return i
    }, gs = function() {
        return ms(Ms.dinf, ms(Ms.dref, Ws))
    }, ys = function(e) {
        return ms(Ms.esds, new Uint8Array([0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, e.audioobjecttype << 3 | e.samplingfrequencyindex >>> 1, e.samplingfrequencyindex << 7 | e.channelcount << 3, 6, 1, 2]))
    }, Ps = function(e) {
        return ms(Ms.hdlr, Hs[e])
    }, Ls = function(e) {
        var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, e.duration >>> 24 & 255, e.duration >>> 16 & 255, e.duration >>> 8 & 255, 255 & e.duration, 85, 196, 0, 0]);
        return e.samplerate && (t[12] = e.samplerate >>> 24 & 255, t[13] = e.samplerate >>> 16 & 255, t[14] = e.samplerate >>> 8 & 255, t[15] = 255 & e.samplerate), ms(Ms.mdhd, t)
    }, As = function(e) {
        return ms(Ms.mdia, Ls(e), Ps(e.type), bs(e))
    }, _s = function(e) {
        return ms(Ms.mfhd, new Uint8Array([0, 0, 0, 0, (4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e]))
    }, bs = function(e) {
        return ms(Ms.minf, "video" === e.type ? ms(Ms.vmhd, qs) : ms(Ms.smhd, zs), gs(), Is(e))
    }, Ts = function(e, t) {
        for (var i = [], n = t.length; n--;) i[n] = xs(t[n]);
        return ms.apply(null, [Ms.moof, _s(e)].concat(i))
    }, Ss = function(e) {
        for (var t = e.length, i = []; t--;) i[t] = ws(e[t]);
        return ms.apply(null, [Ms.moov, Cs(4294967295)].concat(i).concat(ks(e)))
    }, ks = function(e) {
        for (var t = e.length, i = []; t--;) i[t] = Ds(e[t]);
        return ms.apply(null, [Ms.mvex].concat(i))
    }, Cs = function(e) {
        var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
        return ms(Ms.mvhd, t)
    }, Os = function(e) {
        var t, i, n = e.samples || [],
            r = new Uint8Array(4 + n.length);
        for (i = 0; i < n.length; i++) t = n[i].flags, r[i + 4] = t.dependsOn << 4 | t.isDependedOn << 2 | t.hasRedundancy;
        return ms(Ms.sdtp, r)
    }, Is = function(e) {
        return ms(Ms.stbl, Us(e), ms(Ms.stts, Ks), ms(Ms.stsc, Xs), ms(Ms.stsz, Ys), ms(Ms.stco, Gs))
    }, Us = function(e) {
        return ms(Ms.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), "video" === e.type ? $s(e) : Qs(e))
    }, $s = function(e) {
        var t, i = e.sps || [],
            n = e.pps || [],
            r = [],
            a = [];
        for (t = 0; t < i.length; t++) r.push((65280 & i[t].byteLength) >>> 8), r.push(255 & i[t].byteLength), r = r.concat(Array.prototype.slice.call(i[t]));
        for (t = 0; t < n.length; t++) a.push((65280 & n[t].byteLength) >>> 8), a.push(255 & n[t].byteLength), a = a.concat(Array.prototype.slice.call(n[t]));
        return ms(Ms.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e.width) >> 8, 255 & e.width, (65280 & e.height) >> 8, 255 & e.height, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), ms(Ms.avcC, new Uint8Array([1, e.profileIdc, e.profileCompatibility, e.levelIdc, 255].concat([i.length]).concat(r).concat([n.length]).concat(a))), ms(Ms.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])))
    }, Qs = function(e) {
        return ms(Ms.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e.channelcount) >> 8, 255 & e.channelcount, (65280 & e.samplesize) >> 8, 255 & e.samplesize, 0, 0, 0, 0, (65280 & e.samplerate) >> 8, 255 & e.samplerate, 0, 0]), ys(e))
    }, Es = function(e) {
        var t = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 0, (4278190080 & e.duration) >> 24, (16711680 & e.duration) >> 16, (65280 & e.duration) >> 8, 255 & e.duration, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (65280 & e.width) >> 8, 255 & e.width, 0, 0, (65280 & e.height) >> 8, 255 & e.height, 0, 0]);
        return ms(Ms.tkhd, t)
    }, xs = function(e) {
        var t, i, n, r, a, s;
        return t = ms(Ms.tfhd, new Uint8Array([0, 0, 0, 58, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])), a = Math.floor(e.baseMediaDecodeTime / (io + 1)), s = Math.floor(e.baseMediaDecodeTime % (io + 1)), i = ms(Ms.tfdt, new Uint8Array([1, 0, 0, 0, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s])), 92, "audio" === e.type ? (n = Rs(e, 92), ms(Ms.traf, t, i, n)) : (r = Os(e), n = Rs(e, r.length + 92), ms(Ms.traf, t, i, n, r))
    }, ws = function(e) {
        return e.duration = e.duration || 4294967295, ms(Ms.trak, Es(e), As(e))
    }, Ds = function(e) {
        var t = new Uint8Array([0, 0, 0, 0, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
        return "video" !== e.type && (t[t.length - 1] = 0), ms(Ms.trex, t)
    }, eo = function(e, t) {
        var i = 0,
            n = 0,
            r = 0,
            a = 0;
        return e.length && (void 0 !== e[0].duration && (i = 1), void 0 !== e[0].size && (n = 2), void 0 !== e[0].flags && (r = 4), void 0 !== e[0].compositionTimeOffset && (a = 8)), [0, 0, i | n | r | a, 1, (4278190080 & e.length) >>> 24, (16711680 & e.length) >>> 16, (65280 & e.length) >>> 8, 255 & e.length, (4278190080 & t) >>> 24, (16711680 & t) >>> 16, (65280 & t) >>> 8, 255 & t]
    }, Zs = function(e, t) {
        var i, n, r, a;
        for (t += 20 + 16 * (n = e.samples || []).length, i = eo(n, t), a = 0; a < n.length; a++) r = n[a], i = i.concat([(4278190080 & r.duration) >>> 24, (16711680 & r.duration) >>> 16, (65280 & r.duration) >>> 8, 255 & r.duration, (4278190080 & r.size) >>> 24, (16711680 & r.size) >>> 16, (65280 & r.size) >>> 8, 255 & r.size, r.flags.isLeading << 2 | r.flags.dependsOn, r.flags.isDependedOn << 6 | r.flags.hasRedundancy << 4 | r.flags.paddingValue << 1 | r.flags.isNonSyncSample, 61440 & r.flags.degradationPriority, 15 & r.flags.degradationPriority, (4278190080 & r.compositionTimeOffset) >>> 24, (16711680 & r.compositionTimeOffset) >>> 16, (65280 & r.compositionTimeOffset) >>> 8, 255 & r.compositionTimeOffset]);
        return ms(Ms.trun, new Uint8Array(i))
    }, Js = function(e, t) {
        var i, n, r, a;
        for (t += 20 + 8 * (n = e.samples || []).length, i = eo(n, t), a = 0; a < n.length; a++) r = n[a], i = i.concat([(4278190080 & r.duration) >>> 24, (16711680 & r.duration) >>> 16, (65280 & r.duration) >>> 8, 255 & r.duration, (4278190080 & r.size) >>> 24, (16711680 & r.size) >>> 16, (65280 & r.size) >>> 8, 255 & r.size]);
        return ms(Ms.trun, new Uint8Array(i))
    }, Rs = function(e, t) {
        return "audio" === e.type ? Js(e, t) : Zs(e, t)
    };
    var no = {
            ftyp: vs = function() {
                return ms(Ms.ftyp, Bs, Ns, Bs, js)
            },
            mdat: function(e) {
                return ms(Ms.mdat, e)
            },
            moof: Ts,
            moov: Ss,
            initSegment: function(e) {
                var t, i = vs(),
                    n = Ss(e);
                return (t = new Uint8Array(i.byteLength + n.byteLength)).set(i), t.set(n, i.byteLength), t
            }
        },
        ro = function() {
            this.init = function() {
                var a = {};
                this.on = function(e, t) {
                    a[e] || (a[e] = []), a[e] = a[e].concat(t)
                }, this.off = function(e, t) {
                    var i;
                    return !!a[e] && (i = a[e].indexOf(t), a[e] = a[e].slice(), a[e].splice(i, 1), -1 < i)
                }, this.trigger = function(e) {
                    var t, i, n, r;
                    if (t = a[e])
                        if (2 === arguments.length)
                            for (n = t.length, i = 0; i < n; ++i) t[i].call(this, arguments[1]);
                        else {
                            for (r = [], i = arguments.length, i = 1; i < arguments.length; ++i) r.push(arguments[i]);
                            for (n = t.length, i = 0; i < n; ++i) t[i].apply(this, r)
                        }
                }, this.dispose = function() {
                    a = {}
                }
            }
        };
    ro.prototype.pipe = function(t) {
        return this.on("data", function(e) {
            t.push(e)
        }), this.on("done", function(e) {
            t.flush(e)
        }), t
    }, ro.prototype.push = function(e) {
        this.trigger("data", e)
    }, ro.prototype.flush = function(e) {
        this.trigger("done", e)
    };
    var ao, so, oo, uo, lo, co, ho, po = ro,
        fo = function(e) {
            var t, i, n = [],
                r = [];
            for (t = n.byteLength = 0; t < e.length; t++) "access_unit_delimiter_rbsp" === (i = e[t]).nalUnitType ? (n.length && (n.duration = i.dts - n.dts, r.push(n)), (n = [i]).byteLength = i.data.byteLength, n.pts = i.pts, n.dts = i.dts) : ("slice_layer_without_partitioning_rbsp_idr" === i.nalUnitType && (n.keyFrame = !0), n.duration = i.dts - n.dts, n.byteLength += i.data.byteLength, n.push(i));
            return r.length && (!n.duration || n.duration <= 0) && (n.duration = r[r.length - 1].duration), r.push(n), r
        },
        mo = function(e) {
            var t, i, n = [],
                r = [];
            for (n.byteLength = 0, n.nalCount = 0, n.duration = 0, n.pts = e[0].pts, n.dts = e[0].dts, r.byteLength = 0, r.nalCount = 0, r.duration = 0, r.pts = e[0].pts, r.dts = e[0].dts, t = 0; t < e.length; t++)(i = e[t]).keyFrame ? (n.length && (r.push(n), r.byteLength += n.byteLength, r.nalCount += n.nalCount, r.duration += n.duration), (n = [i]).nalCount = i.length, n.byteLength = i.byteLength, n.pts = i.pts, n.dts = i.dts, n.duration = i.duration) : (n.duration += i.duration, n.nalCount += i.length, n.byteLength += i.byteLength, n.push(i));
            return r.length && n.duration <= 0 && (n.duration = r[r.length - 1].duration), r.byteLength += n.byteLength, r.nalCount += n.nalCount, r.duration += n.duration, r.push(n), r
        },
        go = function(e) {
            var t;
            return !e[0][0].keyFrame && 1 < e.length && (t = e.shift(), e.byteLength -= t.byteLength, e.nalCount -= t.nalCount, e[0][0].dts = t.dts, e[0][0].pts = t.pts, e[0][0].duration += t.duration), e
        },
        yo = function(e, t) {
            var i, n, r, a, s, o, u, l = t || 0,
                c = [];
            for (i = 0; i < e.length; i++)
                for (a = e[i], n = 0; n < a.length; n++) s = a[n], o = s, u = void 0, (u = {
                    size: 0,
                    flags: {
                        isLeading: 0,
                        dependsOn: 1,
                        isDependedOn: 0,
                        hasRedundancy: 0,
                        degradationPriority: 0,
                        isNonSyncSample: 1
                    }
                }).dataOffset = l, u.compositionTimeOffset = o.pts - o.dts, u.duration = o.duration, u.size = 4 * o.length, u.size += o.byteLength, o.keyFrame && (u.flags.dependsOn = 2, u.flags.isNonSyncSample = 0), l += (r = u).size, c.push(r);
            return c
        },
        vo = function(e) {
            var t, i, n, r, a, s, o = 0,
                u = e.byteLength,
                l = e.nalCount,
                c = new Uint8Array(u + 4 * l),
                h = new DataView(c.buffer);
            for (t = 0; t < e.length; t++)
                for (r = e[t], i = 0; i < r.length; i++)
                    for (a = r[i], n = 0; n < a.length; n++) s = a[n], h.setUint32(o, s.data.byteLength), o += 4, c.set(s.data, o), o += s.data.byteLength;
            return c
        },
        _o = [33, 16, 5, 32, 164, 27],
        bo = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252],
        To = function(e) {
            for (var t = []; e--;) t.push(0);
            return t
        },
        So = {
            96e3: [_o, [227, 64], To(154), [56]],
            88200: [_o, [231], To(170), [56]],
            64e3: [_o, [248, 192], To(240), [56]],
            48e3: [_o, [255, 192], To(268), [55, 148, 128], To(54), [112]],
            44100: [_o, [255, 192], To(268), [55, 163, 128], To(84), [112]],
            32e3: [_o, [255, 192], To(268), [55, 234], To(226), [112]],
            24e3: [_o, [255, 192], To(268), [55, 255, 128], To(268), [111, 112], To(126), [224]],
            16e3: [_o, [255, 192], To(268), [55, 255, 128], To(268), [111, 255], To(269), [223, 108], To(195), [1, 192]],
            12e3: [bo, To(268), [3, 127, 248], To(268), [6, 255, 240], To(268), [13, 255, 224], To(268), [27, 253, 128], To(259), [56]],
            11025: [bo, To(268), [3, 127, 248], To(268), [6, 255, 240], To(268), [13, 255, 224], To(268), [27, 255, 192], To(268), [55, 175, 128], To(108), [112]],
            8e3: [bo, To(268), [3, 121, 16], To(47), [7]]
        },
        ko = (ao = So, Object.keys(ao).reduce(function(e, t) {
            return e[t] = new Uint8Array(ao[t].reduce(function(e, t) {
                return e.concat(t)
            }, [])), e
        }, {}));
    co = function(e, t) {
        return so(lo(e, t))
    }, ho = function(e, t) {
        return oo(uo(e), t)
    };
    so = function(e) {
        return 9e4 * e
    }, oo = function(e, t) {
        return e * t
    }, uo = function(e) {
        return e / 9e4
    }, lo = function(e, t) {
        return e / t
    };
    var Co = co,
        wo = ho,
        Eo = function(e, t, i, n) {
            var r, a, s, o, u = 0,
                l = 0,
                c = 0;
            if (t.length && (r = Co(e.baseMediaDecodeTime, e.samplerate), a = Math.ceil(9e4 / (e.samplerate / 1024)), i && n && (u = r - Math.max(i, n), c = (l = Math.floor(u / a)) * a), !(l < 1 || 45e3 < c))) {
                for ((s = ko[e.samplerate]) || (s = t[0].data), o = 0; o < l; o++) t.splice(o, 0, {
                    data: s
                });
                e.baseMediaDecodeTime -= Math.floor(wo(c, e.samplerate))
            }
        },
        Ao = function(e, t, i) {
            return t.minSegmentDts >= i ? e : (t.minSegmentDts = 1 / 0, e.filter(function(e) {
                return e.dts >= i && (t.minSegmentDts = Math.min(t.minSegmentDts, e.dts), t.minSegmentPts = t.minSegmentDts, !0)
            }))
        },
        Lo = function(e) {
            var t, i, n = [];
            for (t = 0; t < e.length; t++) i = e[t], n.push({
                size: i.data.byteLength,
                duration: 1024
            });
            return n
        },
        Po = function(e) {
            var t, i, n = 0,
                r = new Uint8Array(function(e) {
                    var t, i = 0;
                    for (t = 0; t < e.length; t++) i += e[t].data.byteLength;
                    return i
                }(e));
            for (t = 0; t < e.length; t++) i = e[t], r.set(i.data, n), n += i.data.byteLength;
            return r
        },
        Oo = function(e) {
            delete e.minSegmentDts, delete e.maxSegmentDts, delete e.minSegmentPts, delete e.maxSegmentPts
        },
        Io = function(e, t) {
            var i, n = e.minSegmentDts;
            return t || (n -= e.timelineStartInfo.dts), i = e.timelineStartInfo.baseMediaDecodeTime, i += n, i = Math.max(0, i), "audio" === e.type && (i *= e.samplerate / 9e4, i = Math.floor(i)), i
        },
        Uo = function(e, t) {
            "number" == typeof t.pts && (void 0 === e.timelineStartInfo.pts && (e.timelineStartInfo.pts = t.pts), void 0 === e.minSegmentPts ? e.minSegmentPts = t.pts : e.minSegmentPts = Math.min(e.minSegmentPts, t.pts), void 0 === e.maxSegmentPts ? e.maxSegmentPts = t.pts : e.maxSegmentPts = Math.max(e.maxSegmentPts, t.pts)), "number" == typeof t.dts && (void 0 === e.timelineStartInfo.dts && (e.timelineStartInfo.dts = t.dts), void 0 === e.minSegmentDts ? e.minSegmentDts = t.dts : e.minSegmentDts = Math.min(e.minSegmentDts, t.dts), void 0 === e.maxSegmentDts ? e.maxSegmentDts = t.dts : e.maxSegmentDts = Math.max(e.maxSegmentDts, t.dts))
        },
        xo = function(e) {
            for (var t = 0, i = {
                    payloadType: -1,
                    payloadSize: 0
                }, n = 0, r = 0; t < e.byteLength && 128 !== e[t];) {
                for (; 255 === e[t];) n += 255, t++;
                for (n += e[t++]; 255 === e[t];) r += 255, t++;
                if (r += e[t++], !i.payload && 4 === n) {
                    i.payloadType = n, i.payloadSize = r, i.payload = e.subarray(t, t + r);
                    break
                }
                t += r, r = n = 0
            }
            return i
        },
        Do = function(e) {
            return 181 !== e.payload[0] ? null : 49 != (e.payload[1] << 8 | e.payload[2]) ? null : "GA94" !== String.fromCharCode(e.payload[3], e.payload[4], e.payload[5], e.payload[6]) ? null : 3 !== e.payload[7] ? null : e.payload.subarray(8, e.payload.length - 1)
        },
        Ro = function(e, t) {
            var i, n, r, a, s = [];
            if (!(64 & t[0])) return s;
            for (n = 31 & t[0], i = 0; i < n; i++) a = {
                type: 3 & t[2 + (r = 3 * i)],
                pts: e
            }, 4 & t[r + 2] && (a.ccData = t[r + 3] << 8 | t[r + 4], s.push(a));
            return s
        },
        Mo = function(e) {
            for (var t, i, n = e.byteLength, r = [], a = 1; a < n - 2;) 0 === e[a] && 0 === e[a + 1] && 3 === e[a + 2] ? (r.push(a + 2), a += 2) : a++;
            if (0 === r.length) return e;
            t = n - r.length, i = new Uint8Array(t);
            var s = 0;
            for (a = 0; a < t; s++, a++) s === r[0] && (s++, r.shift()), i[a] = e[s];
            return i
        },
        Bo = 4,
        No = function e() {
            e.prototype.init.call(this), this.captionPackets_ = [], this.ccStreams_ = [new qo(0, 0), new qo(0, 1), new qo(1, 0), new qo(1, 1)], this.reset(), this.ccStreams_.forEach(function(e) {
                e.on("data", this.trigger.bind(this, "data")), e.on("done", this.trigger.bind(this, "done"))
            }, this)
        };
    (No.prototype = new po).push = function(e) {
        var t, i, n;
        if ("sei_rbsp" === e.nalUnitType && (t = xo(e.escapedRBSP)).payloadType === Bo && (i = Do(t)))
            if (e.dts < this.latestDts_) this.ignoreNextEqualDts_ = !0;
            else {
                if (e.dts === this.latestDts_ && this.ignoreNextEqualDts_) return this.numSameDts_--, void(this.numSameDts_ || (this.ignoreNextEqualDts_ = !1));
                n = Ro(e.pts, i), this.captionPackets_ = this.captionPackets_.concat(n), this.latestDts_ !== e.dts && (this.numSameDts_ = 0), this.numSameDts_++, this.latestDts_ = e.dts
            }
    }, No.prototype.flush = function() {
        this.captionPackets_.length ? (this.captionPackets_.forEach(function(e, t) {
            e.presortIndex = t
        }), this.captionPackets_.sort(function(e, t) {
            return e.pts === t.pts ? e.presortIndex - t.presortIndex : e.pts - t.pts
        }), this.captionPackets_.forEach(function(e) {
            e.type < 2 && this.dispatchCea608Packet(e)
        }, this), this.captionPackets_.length = 0, this.ccStreams_.forEach(function(e) {
            e.flush()
        }, this)) : this.ccStreams_.forEach(function(e) {
            e.flush()
        }, this)
    }, No.prototype.reset = function() {
        this.latestDts_ = null, this.ignoreNextEqualDts_ = !1, this.numSameDts_ = 0, this.activeCea608Channel_ = [null, null], this.ccStreams_.forEach(function(e) {
            e.reset()
        })
    }, No.prototype.dispatchCea608Packet = function(e) {
        this.setsChannel1Active(e) ? this.activeCea608Channel_[e.type] = 0 : this.setsChannel2Active(e) && (this.activeCea608Channel_[e.type] = 1), null !== this.activeCea608Channel_[e.type] && this.ccStreams_[(e.type << 1) + this.activeCea608Channel_[e.type]].push(e)
    }, No.prototype.setsChannel1Active = function(e) {
        return 4096 == (30720 & e.ccData)
    }, No.prototype.setsChannel2Active = function(e) {
        return 6144 == (30720 & e.ccData)
    };
    var jo = {
            42: 225,
            92: 233,
            94: 237,
            95: 243,
            96: 250,
            123: 231,
            124: 247,
            125: 209,
            126: 241,
            127: 9608,
            304: 174,
            305: 176,
            306: 189,
            307: 191,
            308: 8482,
            309: 162,
            310: 163,
            311: 9834,
            312: 224,
            313: 160,
            314: 232,
            315: 226,
            316: 234,
            317: 238,
            318: 244,
            319: 251,
            544: 193,
            545: 201,
            546: 211,
            547: 218,
            548: 220,
            549: 252,
            550: 8216,
            551: 161,
            552: 42,
            553: 39,
            554: 8212,
            555: 169,
            556: 8480,
            557: 8226,
            558: 8220,
            559: 8221,
            560: 192,
            561: 194,
            562: 199,
            563: 200,
            564: 202,
            565: 203,
            566: 235,
            567: 206,
            568: 207,
            569: 239,
            570: 212,
            571: 217,
            572: 249,
            573: 219,
            574: 171,
            575: 187,
            800: 195,
            801: 227,
            802: 205,
            803: 204,
            804: 236,
            805: 210,
            806: 242,
            807: 213,
            808: 245,
            809: 123,
            810: 125,
            811: 92,
            812: 94,
            813: 95,
            814: 124,
            815: 126,
            816: 196,
            817: 228,
            818: 214,
            819: 246,
            820: 223,
            821: 165,
            822: 164,
            823: 9474,
            824: 197,
            825: 229,
            826: 216,
            827: 248,
            828: 9484,
            829: 9488,
            830: 9492,
            831: 9496
        },
        Fo = function(e) {
            return null === e ? "" : (e = jo[e] || e, String.fromCharCode(e))
        },
        Vo = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152],
        Ho = function() {
            for (var e = [], t = 15; t--;) e.push("");
            return e
        },
        qo = function e(t, i) {
            e.prototype.init.call(this), this.field_ = t || 0, this.dataChannel_ = i || 0, this.name_ = "CC" + (1 + (this.field_ << 1 | this.dataChannel_)), this.setConstants(), this.reset(), this.push = function(e) {
                var t, i, n, r, a;
                if ((t = 32639 & e.ccData) !== this.lastControlCode_) {
                    if (4096 == (61440 & t) ? this.lastControlCode_ = t : t !== this.PADDING_ && (this.lastControlCode_ = null), n = t >>> 8, r = 255 & t, t !== this.PADDING_)
                        if (t === this.RESUME_CAPTION_LOADING_) this.mode_ = "popOn";
                        else if (t === this.END_OF_CAPTION_) this.mode_ = "popOn", this.clearFormatting(e.pts), this.flushDisplayed(e.pts), i = this.displayed_, this.displayed_ = this.nonDisplayed_, this.nonDisplayed_ = i, this.startPts_ = e.pts;
                    else if (t === this.ROLL_UP_2_ROWS_) this.rollUpRows_ = 2, this.setRollUp(e.pts);
                    else if (t === this.ROLL_UP_3_ROWS_) this.rollUpRows_ = 3, this.setRollUp(e.pts);
                    else if (t === this.ROLL_UP_4_ROWS_) this.rollUpRows_ = 4, this.setRollUp(e.pts);
                    else if (t === this.CARRIAGE_RETURN_) this.clearFormatting(e.pts), this.flushDisplayed(e.pts), this.shiftRowsUp_(), this.startPts_ = e.pts;
                    else if (t === this.BACKSPACE_) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1);
                    else if (t === this.ERASE_DISPLAYED_MEMORY_) this.flushDisplayed(e.pts), this.displayed_ = Ho();
                    else if (t === this.ERASE_NON_DISPLAYED_MEMORY_) this.nonDisplayed_ = Ho();
                    else if (t === this.RESUME_DIRECT_CAPTIONING_) "paintOn" !== this.mode_ && (this.flushDisplayed(e.pts), this.displayed_ = Ho()), this.mode_ = "paintOn", this.startPts_ = e.pts;
                    else if (this.isSpecialCharacter(n, r)) a = Fo((n = (3 & n) << 8) | r), this[this.mode_](e.pts, a), this.column_++;
                    else if (this.isExtCharacter(n, r)) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1), a = Fo((n = (3 & n) << 8) | r), this[this.mode_](e.pts, a), this.column_++;
                    else if (this.isMidRowCode(n, r)) this.clearFormatting(e.pts), this[this.mode_](e.pts, " "), this.column_++, 14 == (14 & r) && this.addFormatting(e.pts, ["i"]), 1 == (1 & r) && this.addFormatting(e.pts, ["u"]);
                    else if (this.isOffsetControlCode(n, r)) this.column_ += 3 & r;
                    else if (this.isPAC(n, r)) {
                        var s = Vo.indexOf(7968 & t);
                        "rollUp" === this.mode_ && (s - this.rollUpRows_ + 1 < 0 && (s = this.rollUpRows_ - 1), this.setRollUp(e.pts, s)), s !== this.row_ && (this.clearFormatting(e.pts), this.row_ = s), 1 & r && -1 === this.formatting_.indexOf("u") && this.addFormatting(e.pts, ["u"]), 16 == (16 & t) && (this.column_ = 4 * ((14 & t) >> 1)), this.isColorPAC(r) && 14 == (14 & r) && this.addFormatting(e.pts, ["i"])
                    } else this.isNormalChar(n) && (0 === r && (r = null), a = Fo(n), a += Fo(r), this[this.mode_](e.pts, a), this.column_ += a.length)
                } else this.lastControlCode_ = null
            }
        };
    qo.prototype = new po, qo.prototype.flushDisplayed = function(e) {
        var t = this.displayed_.map(function(e) {
            try {
                return e.trim()
            } catch (e) {
                return ""
            }
        }).join("\n").replace(/^\n+|\n+$/g, "");
        t.length && this.trigger("data", {
            startPts: this.startPts_,
            endPts: e,
            text: t,
            stream: this.name_
        })
    }, qo.prototype.reset = function() {
        this.mode_ = "popOn", this.topRow_ = 0, this.startPts_ = 0, this.displayed_ = Ho(), this.nonDisplayed_ = Ho(), this.lastControlCode_ = null, this.column_ = 0, this.row_ = 14, this.rollUpRows_ = 2, this.formatting_ = []
    }, qo.prototype.setConstants = function() {
        0 === this.dataChannel_ ? (this.BASE_ = 16, this.EXT_ = 17, this.CONTROL_ = (20 | this.field_) << 8, this.OFFSET_ = 23) : 1 === this.dataChannel_ && (this.BASE_ = 24, this.EXT_ = 25, this.CONTROL_ = (28 | this.field_) << 8, this.OFFSET_ = 31), this.PADDING_ = 0, this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_, this.END_OF_CAPTION_ = 47 | this.CONTROL_, this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_, this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_, this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_, this.CARRIAGE_RETURN_ = 45 | this.CONTROL_, this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_, this.BACKSPACE_ = 33 | this.CONTROL_, this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_, this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_
    }, qo.prototype.isSpecialCharacter = function(e, t) {
        return e === this.EXT_ && 48 <= t && t <= 63
    }, qo.prototype.isExtCharacter = function(e, t) {
        return (e === this.EXT_ + 1 || e === this.EXT_ + 2) && 32 <= t && t <= 63
    }, qo.prototype.isMidRowCode = function(e, t) {
        return e === this.EXT_ && 32 <= t && t <= 47
    }, qo.prototype.isOffsetControlCode = function(e, t) {
        return e === this.OFFSET_ && 33 <= t && t <= 35
    }, qo.prototype.isPAC = function(e, t) {
        return e >= this.BASE_ && e < this.BASE_ + 8 && 64 <= t && t <= 127
    }, qo.prototype.isColorPAC = function(e) {
        return 64 <= e && e <= 79 || 96 <= e && e <= 127
    }, qo.prototype.isNormalChar = function(e) {
        return 32 <= e && e <= 127
    }, qo.prototype.setRollUp = function(e, t) {
        if ("rollUp" !== this.mode_ && (this.row_ = 14, this.mode_ = "rollUp", this.flushDisplayed(e), this.nonDisplayed_ = Ho(), this.displayed_ = Ho()), void 0 !== t && t !== this.row_)
            for (var i = 0; i < this.rollUpRows_; i++) this.displayed_[t - i] = this.displayed_[this.row_ - i], this.displayed_[this.row_ - i] = "";
        void 0 === t && (t = this.row_), this.topRow_ = t - this.rollUpRows_ + 1
    }, qo.prototype.addFormatting = function(e, t) {
        this.formatting_ = this.formatting_.concat(t);
        var i = t.reduce(function(e, t) {
            return e + "<" + t + ">"
        }, "");
        this[this.mode_](e, i)
    }, qo.prototype.clearFormatting = function(e) {
        if (this.formatting_.length) {
            var t = this.formatting_.reverse().reduce(function(e, t) {
                return e + "</" + t + ">"
            }, "");
            this.formatting_ = [], this[this.mode_](e, t)
        }
    }, qo.prototype.popOn = function(e, t) {
        var i = this.nonDisplayed_[this.row_];
        i += t, this.nonDisplayed_[this.row_] = i
    }, qo.prototype.rollUp = function(e, t) {
        var i = this.displayed_[this.row_];
        i += t, this.displayed_[this.row_] = i
    }, qo.prototype.shiftRowsUp_ = function() {
        var e;
        for (e = 0; e < this.topRow_; e++) this.displayed_[e] = "";
        for (e = this.row_ + 1; e < 15; e++) this.displayed_[e] = "";
        for (e = this.topRow_; e < this.row_; e++) this.displayed_[e] = this.displayed_[e + 1];
        this.displayed_[this.row_] = ""
    }, qo.prototype.paintOn = function(e, t) {
        var i = this.displayed_[this.row_];
        i += t, this.displayed_[this.row_] = i
    };
    var zo = {
            CaptionStream: No,
            Cea608Stream: qo
        },
        Wo = {
            H264_STREAM_TYPE: 27,
            ADTS_STREAM_TYPE: 15,
            METADATA_STREAM_TYPE: 21
        },
        Go = function(e, t) {
            var i = 1;
            for (t < e && (i = -1); 4294967296 < Math.abs(t - e);) e += 8589934592 * i;
            return e
        },
        Xo = function e(t) {
            var i, n;
            e.prototype.init.call(this), this.type_ = t, this.push = function(e) {
                e.type === this.type_ && (void 0 === n && (n = e.dts), e.dts = Go(e.dts, n), e.pts = Go(e.pts, n), i = e.dts, this.trigger("data", e))
            }, this.flush = function() {
                n = i, this.trigger("done")
            }, this.discontinuity = function() {
                i = n = void 0
            }
        };
    Xo.prototype = new po;
    var Yo, Ko = Xo,
        $o = Go,
        Qo = function(e, t, i) {
            var n, r = "";
            for (n = t; n < i; n++) r += "%" + ("00" + e[n].toString(16)).slice(-2);
            return r
        },
        Jo = function(e, t, i) {
            return decodeURIComponent(Qo(e, t, i))
        },
        Zo = function(e) {
            return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3]
        },
        eu = {
            TXXX: function(e) {
                var t;
                if (3 === e.data[0]) {
                    for (t = 1; t < e.data.length; t++)
                        if (0 === e.data[t]) {
                            e.description = Jo(e.data, 1, t), e.value = Jo(e.data, t + 1, e.data.length).replace(/\0*$/, "");
                            break
                        } e.data = e.value
                }
            },
            WXXX: function(e) {
                var t;
                if (3 === e.data[0])
                    for (t = 1; t < e.data.length; t++)
                        if (0 === e.data[t]) {
                            e.description = Jo(e.data, 1, t), e.url = Jo(e.data, t + 1, e.data.length);
                            break
                        }
            },
            PRIV: function(e) {
                var t, i;
                for (t = 0; t < e.data.length; t++)
                    if (0 === e.data[t]) {
                        e.owner = (i = e.data, unescape(Qo(i, 0, t)));
                        break
                    } e.privateData = e.data.subarray(t + 1), e.data = e.privateData
            }
        };
    (Yo = function(e) {
        var t, u = {
                debug: !(!e || !e.debug),
                descriptor: e && e.descriptor
            },
            l = 0,
            c = [],
            h = 0;
        if (Yo.prototype.init.call(this), this.dispatchType = Wo.METADATA_STREAM_TYPE.toString(16), u.descriptor)
            for (t = 0; t < u.descriptor.length; t++) this.dispatchType += ("00" + u.descriptor[t].toString(16)).slice(-2);
        this.push = function(e) {
            var t, i, n, r, a;
            if ("timed-metadata" === e.type)
                if (e.dataAlignmentIndicator && (h = 0, c.length = 0), 0 === c.length && (e.data.length < 10 || e.data[0] !== "I".charCodeAt(0) || e.data[1] !== "D".charCodeAt(0) || e.data[2] !== "3".charCodeAt(0))) u.debug;
                else if (c.push(e), h += e.data.byteLength, 1 === c.length && (l = Zo(e.data.subarray(6, 10)), l += 10), !(h < l)) {
                for (t = {
                        data: new Uint8Array(l),
                        frames: [],
                        pts: c[0].pts,
                        dts: c[0].dts
                    }, a = 0; a < l;) t.data.set(c[0].data.subarray(0, l - a), a), a += c[0].data.byteLength, h -= c[0].data.byteLength, c.shift();
                i = 10, 64 & t.data[5] && (i += 4, i += Zo(t.data.subarray(10, 14)), l -= Zo(t.data.subarray(16, 20)));
                do {
                    if ((n = Zo(t.data.subarray(i + 4, i + 8))) < 1) return;
                    if ((r = {
                            id: String.fromCharCode(t.data[i], t.data[i + 1], t.data[i + 2], t.data[i + 3]),
                            data: t.data.subarray(i + 10, i + n + 10)
                        }).key = r.id, eu[r.id] && (eu[r.id](r), "com.apple.streaming.transportStreamTimestamp" === r.owner)) {
                        var s = r.data,
                            o = (1 & s[3]) << 30 | s[4] << 22 | s[5] << 14 | s[6] << 6 | s[7] >>> 2;
                        o *= 4, o += 3 & s[7], r.timeStamp = o, void 0 === t.pts && void 0 === t.dts && (t.pts = r.timeStamp, t.dts = r.timeStamp), this.trigger("timestamp", r)
                    }
                    t.frames.push(r), i += 10, i += n
                } while (i < l);
                this.trigger("data", t)
            }
        }
    }).prototype = new po;
    var tu, iu, nu, ru = Yo,
        au = Ko;
    (tu = function() {
        var r = new Uint8Array(188),
            a = 0;
        tu.prototype.init.call(this), this.push = function(e) {
            var t, i = 0,
                n = 188;
            for (a ? ((t = new Uint8Array(e.byteLength + a)).set(r.subarray(0, a)), t.set(e, a), a = 0) : t = e; n < t.byteLength;) 71 !== t[i] || 71 !== t[n] ? (i++, n++) : (this.trigger("data", t.subarray(i, n)), i += 188, n += 188);
            i < t.byteLength && (r.set(t.subarray(i), 0), a = t.byteLength - i)
        }, this.flush = function() {
            188 === a && 71 === r[0] && (this.trigger("data", r), a = 0), this.trigger("done")
        }
    }).prototype = new po, (iu = function() {
        var n, r, a, s;
        iu.prototype.init.call(this), (s = this).packetsWaitingForPmt = [], this.programMapTable = void 0, n = function(e, t) {
            var i = 0;
            t.payloadUnitStartIndicator && (i += e[i] + 1), "pat" === t.type ? r(e.subarray(i), t) : a(e.subarray(i), t)
        }, r = function(e, t) {
            t.section_number = e[7], t.last_section_number = e[8], s.pmtPid = (31 & e[10]) << 8 | e[11], t.pmtPid = s.pmtPid
        }, a = function(e, t) {
            var i, n;
            if (1 & e[5]) {
                for (s.programMapTable = {
                        video: null,
                        audio: null,
                        "timed-metadata": {}
                    }, i = 3 + ((15 & e[1]) << 8 | e[2]) - 4, n = 12 + ((15 & e[10]) << 8 | e[11]); n < i;) {
                    var r = e[n],
                        a = (31 & e[n + 1]) << 8 | e[n + 2];
                    r === Wo.H264_STREAM_TYPE && null === s.programMapTable.video ? s.programMapTable.video = a : r === Wo.ADTS_STREAM_TYPE && null === s.programMapTable.audio ? s.programMapTable.audio = a : r === Wo.METADATA_STREAM_TYPE && (s.programMapTable["timed-metadata"][a] = r), n += 5 + ((15 & e[n + 3]) << 8 | e[n + 4])
                }
                t.programMapTable = s.programMapTable
            }
        }, this.push = function(e) {
            var t = {},
                i = 4;
            if (t.payloadUnitStartIndicator = !!(64 & e[1]), t.pid = 31 & e[1], t.pid <<= 8, t.pid |= e[2], 1 < (48 & e[3]) >>> 4 && (i += e[i] + 1), 0 === t.pid) t.type = "pat", n(e.subarray(i), t), this.trigger("data", t);
            else if (t.pid === this.pmtPid)
                for (t.type = "pmt", n(e.subarray(i), t), this.trigger("data", t); this.packetsWaitingForPmt.length;) this.processPes_.apply(this, this.packetsWaitingForPmt.shift());
            else void 0 === this.programMapTable ? this.packetsWaitingForPmt.push([e, i, t]) : this.processPes_(e, i, t)
        }, this.processPes_ = function(e, t, i) {
            i.pid === this.programMapTable.video ? i.streamType = Wo.H264_STREAM_TYPE : i.pid === this.programMapTable.audio ? i.streamType = Wo.ADTS_STREAM_TYPE : i.streamType = this.programMapTable["timed-metadata"][i.pid], i.type = "pes", i.data = e.subarray(t), this.trigger("data", i)
        }
    }).prototype = new po, iu.STREAM_TYPES = {
        h264: 27,
        adts: 15
    }, (nu = function() {
        var d = this,
            n = {
                data: [],
                size: 0
            },
            r = {
                data: [],
                size: 0
            },
            a = {
                data: [],
                size: 0
            },
            s = function(e, t, i) {
                var n, r, a = new Uint8Array(e.size),
                    s = {
                        type: t
                    },
                    o = 0,
                    u = 0;
                if (e.data.length && !(e.size < 9)) {
                    for (s.trackId = e.data[0].pid, o = 0; o < e.data.length; o++) r = e.data[o], a.set(r.data, u), u += r.data.byteLength;
                    var l, c, h;
                    l = a, (c = s).packetLength = 6 + (l[4] << 8 | l[5]), c.dataAlignmentIndicator = 0 != (4 & l[6]), 192 & (h = l[7]) && (c.pts = (14 & l[9]) << 27 | (255 & l[10]) << 20 | (254 & l[11]) << 12 | (255 & l[12]) << 5 | (254 & l[13]) >>> 3, c.pts *= 4, c.pts += (6 & l[13]) >>> 1, c.dts = c.pts, 64 & h && (c.dts = (14 & l[14]) << 27 | (255 & l[15]) << 20 | (254 & l[16]) << 12 | (255 & l[17]) << 5 | (254 & l[18]) >>> 3, c.dts *= 4, c.dts += (6 & l[18]) >>> 1)), c.data = l.subarray(9 + l[8]), n = "video" === t || s.packetLength <= e.size, (i || n) && (e.size = 0, e.data.length = 0), n && d.trigger("data", s)
                }
            };
        nu.prototype.init.call(this), this.push = function(i) {
            ({
                pat: function() {},
                pes: function() {
                    var e, t;
                    switch (i.streamType) {
                        case Wo.H264_STREAM_TYPE:
                        case Wo.H264_STREAM_TYPE:
                            e = n, t = "video";
                            break;
                        case Wo.ADTS_STREAM_TYPE:
                            e = r, t = "audio";
                            break;
                        case Wo.METADATA_STREAM_TYPE:
                            e = a, t = "timed-metadata";
                            break;
                        default:
                            return
                    }
                    i.payloadUnitStartIndicator && s(e, t, !0), e.data.push(i), e.size += i.data.byteLength
                },
                pmt: function() {
                    var e = {
                            type: "metadata",
                            tracks: []
                        },
                        t = i.programMapTable;
                    null !== t.video && e.tracks.push({
                        timelineStartInfo: {
                            baseMediaDecodeTime: 0
                        },
                        id: +t.video,
                        codec: "avc",
                        type: "video"
                    }), null !== t.audio && e.tracks.push({
                        timelineStartInfo: {
                            baseMediaDecodeTime: 0
                        },
                        id: +t.audio,
                        codec: "adts",
                        type: "audio"
                    }), d.trigger("data", e)
                }
            })[i.type]()
        }, this.flush = function() {
            s(n, "video"), s(r, "audio"), s(a, "timed-metadata"), this.trigger("done")
        }
    }).prototype = new po;
    var su = {
        PAT_PID: 0,
        MP2T_PACKET_LENGTH: 188,
        TransportPacketStream: tu,
        TransportParseStream: iu,
        ElementaryStream: nu,
        TimestampRolloverStream: au,
        CaptionStream: zo.CaptionStream,
        Cea608Stream: zo.Cea608Stream,
        MetadataStream: ru
    };
    for (var ou in Wo) Wo.hasOwnProperty(ou) && (su[ou] = Wo[ou]);
    var uu, lu = su,
        cu = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
    (uu = function() {
        var l;
        uu.prototype.init.call(this), this.push = function(e) {
            var t, i, n, r, a, s, o = 0,
                u = 0;
            if ("audio" === e.type)
                for (l ? (r = l, (l = new Uint8Array(r.byteLength + e.data.byteLength)).set(r), l.set(e.data, r.byteLength)) : l = e.data; o + 5 < l.length;)
                    if (255 === l[o] && 240 == (246 & l[o + 1])) {
                        if (i = 2 * (1 & ~l[o + 1]), t = (3 & l[o + 3]) << 11 | l[o + 4] << 3 | (224 & l[o + 5]) >> 5, s = 9e4 * (a = 1024 * (1 + (3 & l[o + 6]))) / cu[(60 & l[o + 2]) >>> 2], n = o + t, l.byteLength < n) return;
                        if (this.trigger("data", {
                                pts: e.pts + u * s,
                                dts: e.dts + u * s,
                                sampleCount: a,
                                audioobjecttype: 1 + (l[o + 2] >>> 6 & 3),
                                channelcount: (1 & l[o + 2]) << 2 | (192 & l[o + 3]) >>> 6,
                                samplerate: cu[(60 & l[o + 2]) >>> 2],
                                samplingfrequencyindex: (60 & l[o + 2]) >>> 2,
                                samplesize: 16,
                                data: l.subarray(o + 7 + i, n)
                            }), l.byteLength === n) return void(l = void 0);
                        u++, l = l.subarray(n)
                    } else o++
        }, this.flush = function() {
            this.trigger("done")
        }
    }).prototype = new po;
    var hu, du, pu, fu = uu,
        mu = function(n) {
            var r = n.byteLength,
                a = 0,
                s = 0;
            this.length = function() {
                return 8 * r
            }, this.bitsAvailable = function() {
                return 8 * r + s
            }, this.loadWord = function() {
                var e = n.byteLength - r,
                    t = new Uint8Array(4),
                    i = Math.min(4, r);
                if (0 === i) throw new Error("no bytes available");
                t.set(n.subarray(e, e + i)), a = new DataView(t.buffer).getUint32(0), s = 8 * i, r -= i
            }, this.skipBits = function(e) {
                var t;
                e < s || (e -= s, e -= 8 * (t = Math.floor(e / 8)), r -= t, this.loadWord()), a <<= e, s -= e
            }, this.readBits = function(e) {
                var t = Math.min(s, e),
                    i = a >>> 32 - t;
                return 0 < (s -= t) ? a <<= t : 0 < r && this.loadWord(), 0 < (t = e - t) ? i << t | this.readBits(t) : i
            }, this.skipLeadingZeros = function() {
                var e;
                for (e = 0; e < s; ++e)
                    if (0 != (a & 2147483648 >>> e)) return a <<= e, s -= e, e;
                return this.loadWord(), e + this.skipLeadingZeros()
            }, this.skipUnsignedExpGolomb = function() {
                this.skipBits(1 + this.skipLeadingZeros())
            }, this.skipExpGolomb = function() {
                this.skipBits(1 + this.skipLeadingZeros())
            }, this.readUnsignedExpGolomb = function() {
                var e = this.skipLeadingZeros();
                return this.readBits(e + 1) - 1
            }, this.readExpGolomb = function() {
                var e = this.readUnsignedExpGolomb();
                return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
            }, this.readBoolean = function() {
                return 1 === this.readBits(1)
            }, this.readUnsignedByte = function() {
                return this.readBits(8)
            }, this.loadWord()
        };
    (du = function() {
        var i, n, r = 0;
        du.prototype.init.call(this), this.push = function(e) {
            var t;
            for (n = n ? ((t = new Uint8Array(n.byteLength + e.data.byteLength)).set(n), t.set(e.data, n.byteLength), t) : e.data; r < n.byteLength - 3; r++)
                if (1 === n[r + 2]) {
                    i = r + 5;
                    break
                } for (; i < n.byteLength;) switch (n[i]) {
                case 0:
                    if (0 !== n[i - 1]) {
                        i += 2;
                        break
                    }
                    if (0 !== n[i - 2]) {
                        i++;
                        break
                    }
                    for (r + 3 !== i - 2 && this.trigger("data", n.subarray(r + 3, i - 2)); 1 !== n[++i] && i < n.length;);
                    r = i - 2, i += 3;
                    break;
                case 1:
                    if (0 !== n[i - 1] || 0 !== n[i - 2]) {
                        i += 3;
                        break
                    }
                    this.trigger("data", n.subarray(r + 3, i - 2)), r = i - 2, i += 3;
                    break;
                default:
                    i += 3
            }
            n = n.subarray(r), i -= r, r = 0
        }, this.flush = function() {
            n && 3 < n.byteLength && this.trigger("data", n.subarray(r + 3)), n = null, r = 0, this.trigger("done")
        }
    }).prototype = new po, pu = {
        100: !0,
        110: !0,
        122: !0,
        244: !0,
        44: !0,
        83: !0,
        86: !0,
        118: !0,
        128: !0,
        138: !0,
        139: !0,
        134: !0
    }, (hu = function() {
        var i, n, r, a, s, o, _, t = new du;
        hu.prototype.init.call(this), (i = this).push = function(e) {
            "video" === e.type && (n = e.trackId, r = e.pts, a = e.dts, t.push(e))
        }, t.on("data", function(e) {
            var t = {
                trackId: n,
                pts: r,
                dts: a,
                data: e
            };
            switch (31 & e[0]) {
                case 5:
                    t.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
                    break;
                case 6:
                    t.nalUnitType = "sei_rbsp", t.escapedRBSP = s(e.subarray(1));
                    break;
                case 7:
                    t.nalUnitType = "seq_parameter_set_rbsp", t.escapedRBSP = s(e.subarray(1)), t.config = o(t.escapedRBSP);
                    break;
                case 8:
                    t.nalUnitType = "pic_parameter_set_rbsp";
                    break;
                case 9:
                    t.nalUnitType = "access_unit_delimiter_rbsp"
            }
            i.trigger("data", t)
        }), t.on("done", function() {
            i.trigger("done")
        }), this.flush = function() {
            t.flush()
        }, _ = function(e, t) {
            var i, n = 8,
                r = 8;
            for (i = 0; i < e; i++) 0 !== r && (r = (n + t.readExpGolomb() + 256) % 256), n = 0 === r ? n : r
        }, s = function(e) {
            for (var t, i, n = e.byteLength, r = [], a = 1; a < n - 2;) 0 === e[a] && 0 === e[a + 1] && 3 === e[a + 2] ? (r.push(a + 2), a += 2) : a++;
            if (0 === r.length) return e;
            t = n - r.length, i = new Uint8Array(t);
            var s = 0;
            for (a = 0; a < t; s++, a++) s === r[0] && (s++, r.shift()), i[a] = e[s];
            return i
        }, o = function(e) {
            var t, i, n, r, a, s, o, u, l, c, h, d, p, f = 0,
                m = 0,
                g = 0,
                y = 0,
                v = 1;
            if (i = (t = new mu(e)).readUnsignedByte(), r = t.readUnsignedByte(), n = t.readUnsignedByte(), t.skipUnsignedExpGolomb(), pu[i] && (3 === (a = t.readUnsignedExpGolomb()) && t.skipBits(1), t.skipUnsignedExpGolomb(), t.skipUnsignedExpGolomb(), t.skipBits(1), t.readBoolean()))
                for (h = 3 !== a ? 8 : 12, p = 0; p < h; p++) t.readBoolean() && _(p < 6 ? 16 : 64, t);
            if (t.skipUnsignedExpGolomb(), 0 === (s = t.readUnsignedExpGolomb())) t.readUnsignedExpGolomb();
            else if (1 === s)
                for (t.skipBits(1), t.skipExpGolomb(), t.skipExpGolomb(), o = t.readUnsignedExpGolomb(), p = 0; p < o; p++) t.skipExpGolomb();
            if (t.skipUnsignedExpGolomb(), t.skipBits(1), u = t.readUnsignedExpGolomb(), l = t.readUnsignedExpGolomb(), 0 === (c = t.readBits(1)) && t.skipBits(1), t.skipBits(1), t.readBoolean() && (f = t.readUnsignedExpGolomb(), m = t.readUnsignedExpGolomb(), g = t.readUnsignedExpGolomb(), y = t.readUnsignedExpGolomb()), t.readBoolean() && t.readBoolean()) {
                switch (t.readUnsignedByte()) {
                    case 1:
                        d = [1, 1];
                        break;
                    case 2:
                        d = [12, 11];
                        break;
                    case 3:
                        d = [10, 11];
                        break;
                    case 4:
                        d = [16, 11];
                        break;
                    case 5:
                        d = [40, 33];
                        break;
                    case 6:
                        d = [24, 11];
                        break;
                    case 7:
                        d = [20, 11];
                        break;
                    case 8:
                        d = [32, 11];
                        break;
                    case 9:
                        d = [80, 33];
                        break;
                    case 10:
                        d = [18, 11];
                        break;
                    case 11:
                        d = [15, 11];
                        break;
                    case 12:
                        d = [64, 33];
                        break;
                    case 13:
                        d = [160, 99];
                        break;
                    case 14:
                        d = [4, 3];
                        break;
                    case 15:
                        d = [3, 2];
                        break;
                    case 16:
                        d = [2, 1];
                        break;
                    case 255:
                        d = [t.readUnsignedByte() << 8 | t.readUnsignedByte(), t.readUnsignedByte() << 8 | t.readUnsignedByte()]
                }
                d && (v = d[0] / d[1])
            }
            return {
                profileIdc: i,
                levelIdc: n,
                profileCompatibility: r,
                width: Math.ceil((16 * (u + 1) - 2 * f - 2 * m) * v),
                height: (2 - c) * (l + 1) * 16 - 2 * g - 2 * y
            }
        }
    }).prototype = new po;
    var gu, yu = {
            H264Stream: hu,
            NalByteStream: du
        },
        vu = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
        _u = function(e) {
            return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3]
        },
        bu = {
            isLikelyAacData: function(e) {
                return e[0] === "I".charCodeAt(0) && e[1] === "D".charCodeAt(0) && e[2] === "3".charCodeAt(0)
            },
            parseId3TagSize: function(e, t) {
                var i = e[t + 6] << 21 | e[t + 7] << 14 | e[t + 8] << 7 | e[t + 9];
                return (16 & e[t + 5]) >> 4 ? i + 20 : i + 10
            },
            parseAdtsSize: function(e, t) {
                var i = (224 & e[t + 5]) >> 5,
                    n = e[t + 4] << 3;
                return 6144 & e[t + 3] | n | i
            },
            parseType: function(e, t) {
                return e[t] === "I".charCodeAt(0) && e[t + 1] === "D".charCodeAt(0) && e[t + 2] === "3".charCodeAt(0) ? "timed-metadata" : !0 & e[t] && 240 == (240 & e[t + 1]) ? "audio" : null
            },
            parseSampleRate: function(e) {
                for (var t = 0; t + 5 < e.length;) {
                    if (255 === e[t] && 240 == (246 & e[t + 1])) return vu[(60 & e[t + 2]) >>> 2];
                    t++
                }
                return null
            },
            parseAacTimestamp: function(e) {
                var t, i, n;
                t = 10, 64 & e[5] && (t += 4, t += _u(e.subarray(10, 14)));
                do {
                    if ((i = _u(e.subarray(t + 4, t + 8))) < 1) return null;
                    if ("PRIV" === String.fromCharCode(e[t], e[t + 1], e[t + 2], e[t + 3])) {
                        n = e.subarray(t + 10, t + i + 10);
                        for (var r = 0; r < n.byteLength; r++)
                            if (0 === n[r]) {
                                if ("com.apple.streaming.transportStreamTimestamp" !== unescape(function(e, t, i) {
                                        var n, r = "";
                                        for (n = t; n < i; n++) r += "%" + ("00" + e[n].toString(16)).slice(-2);
                                        return r
                                    }(n, 0, r))) break;
                                var a = n.subarray(r + 1),
                                    s = (1 & a[3]) << 30 | a[4] << 22 | a[5] << 14 | a[6] << 6 | a[7] >>> 2;
                                return s *= 4, s += 3 & a[7]
                            }
                    }
                    t += 10, t += i
                } while (t < e.byteLength);
                return null
            }
        };
    (gu = function() {
        var o = new Uint8Array,
            u = 0;
        gu.prototype.init.call(this), this.setTimestamp = function(e) {
            u = e
        }, this.push = function(e) {
            var t, i, n, r, a = 0,
                s = 0;
            for (o.length ? (r = o.length, (o = new Uint8Array(e.byteLength + r)).set(o.subarray(0, r)), o.set(e, r)) : o = e; 3 <= o.length - s;)
                if (o[s] !== "I".charCodeAt(0) || o[s + 1] !== "D".charCodeAt(0) || o[s + 2] !== "3".charCodeAt(0))
                    if (255 != (255 & o[s]) || 240 != (240 & o[s + 1])) s++;
                    else {
                        if (o.length - s < 7) break;
                        if (s + (a = bu.parseAdtsSize(o, s)) > o.length) break;
                        n = {
                            type: "audio",
                            data: o.subarray(s, s + a),
                            pts: u,
                            dts: u
                        }, this.trigger("data", n), s += a
                    }
            else {
                if (o.length - s < 10) break;
                if (s + (a = bu.parseId3TagSize(o, s)) > o.length) break;
                i = {
                    type: "timed-metadata",
                    data: o.subarray(s, s + a)
                }, this.trigger("data", i), s += a
            }
            t = o.length - s, o = 0 < t ? o.subarray(s) : new Uint8Array
        }
    }).prototype = new po;
    var Tu, Su, ku, Cu, wu = gu,
        Eu = yu.H264Stream,
        Au = bu.isLikelyAacData,
        Lu = ["audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize"],
        Pu = ["width", "height", "profileIdc", "levelIdc", "profileCompatibility"],
        Ou = function(e, t) {
            var i;
            if (e.length !== t.length) return !1;
            for (i = 0; i < e.length; i++)
                if (e[i] !== t[i]) return !1;
            return !0
        },
        Iu = function(e, t, i, n, r, a) {
            return {
                start: {
                    dts: e,
                    pts: e + (i - t)
                },
                end: {
                    dts: e + (n - t),
                    pts: e + (r - i)
                },
                prependedContentDuration: a,
                baseMediaDecodeTime: e
            }
        };
    (Su = function(r, a) {
        var s = [],
            o = 0,
            u = 0,
            l = 0,
            c = 1 / 0;
        a = a || {}, Su.prototype.init.call(this), this.push = function(t) {
            Uo(r, t), r && Lu.forEach(function(e) {
                r[e] = t[e]
            }), s.push(t)
        }, this.setEarliestDts = function(e) {
            u = e - r.timelineStartInfo.baseMediaDecodeTime
        }, this.setVideoBaseMediaDecodeTime = function(e) {
            c = e
        }, this.setAudioAppendStart = function(e) {
            l = e
        }, this.flush = function() {
            var e, t, i, n;
            0 !== s.length && (e = Ao(s, r, u), r.baseMediaDecodeTime = Io(r, a.keepOriginalTimestamps), Eo(r, e, l, c), r.samples = Lo(e), i = no.mdat(Po(e)), s = [], t = no.moof(o, [r]), n = new Uint8Array(t.byteLength + i.byteLength), o++, n.set(t), n.set(i, t.byteLength), Oo(r), this.trigger("data", {
                track: r,
                boxes: n
            })), this.trigger("done", "AudioSegmentStream")
        }
    }).prototype = new po, (Tu = function(c, h) {
        var t, i, d = 0,
            p = [],
            f = [];
        h = h || {}, Tu.prototype.init.call(this), delete c.minPTS, this.gopCache_ = [], this.push = function(e) {
            Uo(c, e), "seq_parameter_set_rbsp" !== e.nalUnitType || t || (t = e.config, c.sps = [e.data], Pu.forEach(function(e) {
                c[e] = t[e]
            }, this)), "pic_parameter_set_rbsp" !== e.nalUnitType || i || (i = e.data, c.pps = [e.data]), p.push(e)
        }, this.flush = function() {
            for (var e, t, i, n, r, a, s, o, u = 0; p.length && "access_unit_delimiter_rbsp" !== p[0].nalUnitType;) p.shift();
            if (0 === p.length) return this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
            if (e = fo(p), (i = mo(e))[0][0].keyFrame || ((t = this.getGopForFusion_(p[0], c)) ? (u = t.duration, i.unshift(t), i.byteLength += t.byteLength, i.nalCount += t.nalCount, i.pts = t.pts, i.dts = t.dts, i.duration += t.duration) : i = go(i)), f.length) {
                var l;
                if (!(l = h.alignGopsAtEnd ? this.alignGopsAtEnd_(i) : this.alignGopsAtStart_(i))) return this.gopCache_.unshift({
                    gop: i.pop(),
                    pps: c.pps,
                    sps: c.sps
                }), this.gopCache_.length = Math.min(6, this.gopCache_.length), p = [], this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
                Oo(c), i = l
            }
            Uo(c, i), c.samples = yo(i), r = no.mdat(vo(i)), c.baseMediaDecodeTime = Io(c, h.keepOriginalTimestamps), this.trigger("processedGopsInfo", i.map(function(e) {
                return {
                    pts: e.pts,
                    dts: e.dts,
                    byteLength: e.byteLength
                }
            })), s = i[0], o = i[i.length - 1], this.trigger("segmentTimingInfo", Iu(c.baseMediaDecodeTime, s.dts, s.pts, o.dts + o.duration, o.pts + o.duration, u)), this.gopCache_.unshift({
                gop: i.pop(),
                pps: c.pps,
                sps: c.sps
            }), this.gopCache_.length = Math.min(6, this.gopCache_.length), p = [], this.trigger("baseMediaDecodeTime", c.baseMediaDecodeTime), this.trigger("timelineStartInfo", c.timelineStartInfo), n = no.moof(d, [c]), a = new Uint8Array(n.byteLength + r.byteLength), d++, a.set(n), a.set(r, n.byteLength), this.trigger("data", {
                track: c,
                boxes: a
            }), this.resetStream_(), this.trigger("done", "VideoSegmentStream")
        }, this.resetStream_ = function() {
            Oo(c), i = t = void 0
        }, this.getGopForFusion_ = function(e) {
            var t, i, n, r, a, s = 1 / 0;
            for (a = 0; a < this.gopCache_.length; a++) n = (r = this.gopCache_[a]).gop, c.pps && Ou(c.pps[0], r.pps[0]) && c.sps && Ou(c.sps[0], r.sps[0]) && (n.dts < c.timelineStartInfo.dts || -1e4 <= (t = e.dts - n.dts - n.duration) && t <= 45e3 && (!i || t < s) && (i = r, s = t));
            return i ? i.gop : null
        }, this.alignGopsAtStart_ = function(e) {
            var t, i, n, r, a, s, o, u;
            for (a = e.byteLength, s = e.nalCount, o = e.duration, t = i = 0; t < f.length && i < e.length && (n = f[t], r = e[i], n.pts !== r.pts);) r.pts > n.pts ? t++ : (i++, a -= r.byteLength, s -= r.nalCount, o -= r.duration);
            return 0 === i ? e : i === e.length ? null : ((u = e.slice(i)).byteLength = a, u.duration = o, u.nalCount = s, u.pts = u[0].pts, u.dts = u[0].dts, u)
        }, this.alignGopsAtEnd_ = function(e) {
            var t, i, n, r, a, s, o;
            for (t = f.length - 1, i = e.length - 1, a = null, s = !1; 0 <= t && 0 <= i;) {
                if (n = f[t], r = e[i], n.pts === r.pts) {
                    s = !0;
                    break
                }
                n.pts > r.pts ? t-- : (t === f.length - 1 && (a = i), i--)
            }
            if (!s && null === a) return null;
            if (0 === (o = s ? i : a)) return e;
            var u = e.slice(o),
                l = u.reduce(function(e, t) {
                    return e.byteLength += t.byteLength, e.duration += t.duration, e.nalCount += t.nalCount, e
                }, {
                    byteLength: 0,
                    duration: 0,
                    nalCount: 0
                });
            return u.byteLength = l.byteLength, u.duration = l.duration, u.nalCount = l.nalCount, u.pts = u[0].pts, u.dts = u[0].dts, u
        }, this.alignGopsWith = function(e) {
            f = e
        }
    }).prototype = new po, (Cu = function(e, t) {
        this.numberOfTracks = 0, this.metadataStream = t, "undefined" != typeof(e = e || {}).remux ? this.remuxTracks = !!e.remux : this.remuxTracks = !0, "boolean" == typeof e.keepOriginalTimestamps && (this.keepOriginalTimestamps = e.keepOriginalTimestamps), this.pendingTracks = [], this.videoTrack = null, this.pendingBoxes = [], this.pendingCaptions = [], this.pendingMetadata = [], this.pendingBytes = 0, this.emittedTracks = 0, Cu.prototype.init.call(this), this.push = function(e) {
            return e.text ? this.pendingCaptions.push(e) : e.frames ? this.pendingMetadata.push(e) : (this.pendingTracks.push(e.track), this.pendingBoxes.push(e.boxes), this.pendingBytes += e.boxes.byteLength, "video" === e.track.type && (this.videoTrack = e.track), void("audio" === e.track.type && (this.audioTrack = e.track)))
        }
    }).prototype = new po, Cu.prototype.flush = function(e) {
        var t, i, n, r, a = 0,
            s = {
                captions: [],
                captionStreams: {},
                metadata: [],
                info: {}
            },
            o = 0;
        if (this.pendingTracks.length < this.numberOfTracks) {
            if ("VideoSegmentStream" !== e && "AudioSegmentStream" !== e) return;
            if (this.remuxTracks) return;
            if (0 === this.pendingTracks.length) return this.emittedTracks++, void(this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0))
        }
        for (this.videoTrack ? (o = this.videoTrack.timelineStartInfo.pts, Pu.forEach(function(e) {
                s.info[e] = this.videoTrack[e]
            }, this)) : this.audioTrack && (o = this.audioTrack.timelineStartInfo.pts, Lu.forEach(function(e) {
                s.info[e] = this.audioTrack[e]
            }, this)), 1 === this.pendingTracks.length ? s.type = this.pendingTracks[0].type : s.type = "combined", this.emittedTracks += this.pendingTracks.length, n = no.initSegment(this.pendingTracks), s.initSegment = new Uint8Array(n.byteLength), s.initSegment.set(n), s.data = new Uint8Array(this.pendingBytes), r = 0; r < this.pendingBoxes.length; r++) s.data.set(this.pendingBoxes[r], a), a += this.pendingBoxes[r].byteLength;
        for (r = 0; r < this.pendingCaptions.length; r++)(t = this.pendingCaptions[r]).startTime = t.startPts, this.keepOriginalTimestamps || (t.startTime -= o), t.startTime /= 9e4, t.endTime = t.endPts, this.keepOriginalTimestamps || (t.endTime -= o), t.endTime /= 9e4, s.captionStreams[t.stream] = !0, s.captions.push(t);
        for (r = 0; r < this.pendingMetadata.length; r++)(i = this.pendingMetadata[r]).cueTime = i.pts, this.keepOriginalTimestamps || (i.cueTime -= o), i.cueTime /= 9e4, s.metadata.push(i);
        s.metadata.dispatchType = this.metadataStream.dispatchType, this.pendingTracks.length = 0, this.videoTrack = null, this.pendingBoxes.length = 0, this.pendingCaptions.length = 0, this.pendingBytes = 0, this.pendingMetadata.length = 0, this.trigger("data", s), this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0)
    }, (ku = function(n) {
        var r, a, s = this,
            i = !0;
        ku.prototype.init.call(this), n = n || {}, this.baseMediaDecodeTime = n.baseMediaDecodeTime || 0, this.transmuxPipeline_ = {}, this.setupAacPipeline = function() {
            var t = {};
            (this.transmuxPipeline_ = t).type = "aac", t.metadataStream = new lu.MetadataStream, t.aacStream = new wu, t.audioTimestampRolloverStream = new lu.TimestampRolloverStream("audio"), t.timedMetadataTimestampRolloverStream = new lu.TimestampRolloverStream("timed-metadata"), t.adtsStream = new fu, t.coalesceStream = new Cu(n, t.metadataStream), t.headOfPipeline = t.aacStream, t.aacStream.pipe(t.audioTimestampRolloverStream).pipe(t.adtsStream), t.aacStream.pipe(t.timedMetadataTimestampRolloverStream).pipe(t.metadataStream).pipe(t.coalesceStream), t.metadataStream.on("timestamp", function(e) {
                t.aacStream.setTimestamp(e.timeStamp)
            }), t.aacStream.on("data", function(e) {
                "timed-metadata" !== e.type || t.audioSegmentStream || (a = a || {
                    timelineStartInfo: {
                        baseMediaDecodeTime: s.baseMediaDecodeTime
                    },
                    codec: "adts",
                    type: "audio"
                }, t.coalesceStream.numberOfTracks++, t.audioSegmentStream = new Su(a, n), t.adtsStream.pipe(t.audioSegmentStream).pipe(t.coalesceStream))
            }), t.coalesceStream.on("data", this.trigger.bind(this, "data")), t.coalesceStream.on("done", this.trigger.bind(this, "done"))
        }, this.setupTsPipeline = function() {
            var i = {};
            (this.transmuxPipeline_ = i).type = "ts", i.metadataStream = new lu.MetadataStream, i.packetStream = new lu.TransportPacketStream, i.parseStream = new lu.TransportParseStream, i.elementaryStream = new lu.ElementaryStream, i.videoTimestampRolloverStream = new lu.TimestampRolloverStream("video"), i.audioTimestampRolloverStream = new lu.TimestampRolloverStream("audio"), i.timedMetadataTimestampRolloverStream = new lu.TimestampRolloverStream("timed-metadata"), i.adtsStream = new fu, i.h264Stream = new Eu, i.captionStream = new lu.CaptionStream, i.coalesceStream = new Cu(n, i.metadataStream), i.headOfPipeline = i.packetStream, i.packetStream.pipe(i.parseStream).pipe(i.elementaryStream), i.elementaryStream.pipe(i.videoTimestampRolloverStream).pipe(i.h264Stream), i.elementaryStream.pipe(i.audioTimestampRolloverStream).pipe(i.adtsStream), i.elementaryStream.pipe(i.timedMetadataTimestampRolloverStream).pipe(i.metadataStream).pipe(i.coalesceStream), i.h264Stream.pipe(i.captionStream).pipe(i.coalesceStream), i.elementaryStream.on("data", function(e) {
                var t;
                if ("metadata" === e.type) {
                    for (t = e.tracks.length; t--;) r || "video" !== e.tracks[t].type ? a || "audio" !== e.tracks[t].type || ((a = e.tracks[t]).timelineStartInfo.baseMediaDecodeTime = s.baseMediaDecodeTime) : (r = e.tracks[t]).timelineStartInfo.baseMediaDecodeTime = s.baseMediaDecodeTime;
                    r && !i.videoSegmentStream && (i.coalesceStream.numberOfTracks++, i.videoSegmentStream = new Tu(r, n), i.videoSegmentStream.on("timelineStartInfo", function(e) {
                        a && (a.timelineStartInfo = e, i.audioSegmentStream.setEarliestDts(e.dts))
                    }), i.videoSegmentStream.on("processedGopsInfo", s.trigger.bind(s, "gopInfo")), i.videoSegmentStream.on("segmentTimingInfo", s.trigger.bind(s, "videoSegmentTimingInfo")), i.videoSegmentStream.on("baseMediaDecodeTime", function(e) {
                        a && i.audioSegmentStream.setVideoBaseMediaDecodeTime(e)
                    }), i.h264Stream.pipe(i.videoSegmentStream).pipe(i.coalesceStream)), a && !i.audioSegmentStream && (i.coalesceStream.numberOfTracks++, i.audioSegmentStream = new Su(a, n), i.adtsStream.pipe(i.audioSegmentStream).pipe(i.coalesceStream))
                }
            }), i.coalesceStream.on("data", this.trigger.bind(this, "data")), i.coalesceStream.on("done", this.trigger.bind(this, "done"))
        }, this.setBaseMediaDecodeTime = function(e) {
            var t = this.transmuxPipeline_;
            n.keepOriginalTimestamps || (this.baseMediaDecodeTime = e), a && (a.timelineStartInfo.dts = void 0, a.timelineStartInfo.pts = void 0, Oo(a), n.keepOriginalTimestamps || (a.timelineStartInfo.baseMediaDecodeTime = e), t.audioTimestampRolloverStream && t.audioTimestampRolloverStream.discontinuity()), r && (t.videoSegmentStream && (t.videoSegmentStream.gopCache_ = [], t.videoTimestampRolloverStream.discontinuity()), r.timelineStartInfo.dts = void 0, r.timelineStartInfo.pts = void 0, Oo(r), t.captionStream.reset(), n.keepOriginalTimestamps || (r.timelineStartInfo.baseMediaDecodeTime = e)), t.timedMetadataTimestampRolloverStream && t.timedMetadataTimestampRolloverStream.discontinuity()
        }, this.setAudioAppendStart = function(e) {
            a && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(e)
        }, this.alignGopsWith = function(e) {
            r && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(e)
        }, this.push = function(e) {
            if (i) {
                var t = Au(e);
                t && "aac" !== this.transmuxPipeline_.type ? this.setupAacPipeline() : t || "ts" === this.transmuxPipeline_.type || this.setupTsPipeline(), i = !1
            }
            this.transmuxPipeline_.headOfPipeline.push(e)
        }, this.flush = function() {
            i = !0, this.transmuxPipeline_.headOfPipeline.flush()
        }, this.resetCaptions = function() {
            this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset()
        }
    }).prototype = new po;
    var Uu, xu, Du = {
            Transmuxer: ku,
            VideoSegmentStream: Tu,
            AudioSegmentStream: Su,
            AUDIO_PROPERTIES: Lu,
            VIDEO_PROPERTIES: Pu,
            generateVideoSegmentTimingInfo: Iu
        },
        Ru = to.parseType,
        Mu = function(e) {
            return new Date(1e3 * e - 20828448e5)
        },
        Bu = function(e) {
            return {
                isLeading: (12 & e[0]) >>> 2,
                dependsOn: 3 & e[0],
                isDependedOn: (192 & e[1]) >>> 6,
                hasRedundancy: (48 & e[1]) >>> 4,
                paddingValue: (14 & e[1]) >>> 1,
                isNonSyncSample: 1 & e[1],
                degradationPriority: e[2] << 8 | e[3]
            }
        },
        Nu = {
            avc1: function(e) {
                var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
                return {
                    dataReferenceIndex: t.getUint16(6),
                    width: t.getUint16(24),
                    height: t.getUint16(26),
                    horizresolution: t.getUint16(28) + t.getUint16(30) / 16,
                    vertresolution: t.getUint16(32) + t.getUint16(34) / 16,
                    frameCount: t.getUint16(40),
                    depth: t.getUint16(74),
                    config: Uu(e.subarray(78, e.byteLength))
                }
            },
            avcC: function(e) {
                var t, i, n, r, a = new DataView(e.buffer, e.byteOffset, e.byteLength),
                    s = {
                        configurationVersion: e[0],
                        avcProfileIndication: e[1],
                        profileCompatibility: e[2],
                        avcLevelIndication: e[3],
                        lengthSizeMinusOne: 3 & e[4],
                        sps: [],
                        pps: []
                    },
                    o = 31 & e[5];
                for (n = 6, r = 0; r < o; r++) i = a.getUint16(n), n += 2, s.sps.push(new Uint8Array(e.subarray(n, n + i))), n += i;
                for (t = e[n], n++, r = 0; r < t; r++) i = a.getUint16(n), n += 2, s.pps.push(new Uint8Array(e.subarray(n, n + i))), n += i;
                return s
            },
            btrt: function(e) {
                var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
                return {
                    bufferSizeDB: t.getUint32(0),
                    maxBitrate: t.getUint32(4),
                    avgBitrate: t.getUint32(8)
                }
            },
            esds: function(e) {
                return {
                    version: e[0],
                    flags: new Uint8Array(e.subarray(1, 4)),
                    esId: e[6] << 8 | e[7],
                    streamPriority: 31 & e[8],
                    decoderConfig: {
                        objectProfileIndication: e[11],
                        streamType: e[12] >>> 2 & 63,
                        bufferSize: e[13] << 16 | e[14] << 8 | e[15],
                        maxBitrate: e[16] << 24 | e[17] << 16 | e[18] << 8 | e[19],
                        avgBitrate: e[20] << 24 | e[21] << 16 | e[22] << 8 | e[23],
                        decoderConfigDescriptor: {
                            tag: e[24],
                            length: e[25],
                            audioObjectType: e[26] >>> 3 & 31,
                            samplingFrequencyIndex: (7 & e[26]) << 1 | e[27] >>> 7 & 1,
                            channelConfiguration: e[27] >>> 3 & 15
                        }
                    }
                }
            },
            ftyp: function(e) {
                for (var t = new DataView(e.buffer, e.byteOffset, e.byteLength), i = {
                        majorBrand: Ru(e.subarray(0, 4)),
                        minorVersion: t.getUint32(4),
                        compatibleBrands: []
                    }, n = 8; n < e.byteLength;) i.compatibleBrands.push(Ru(e.subarray(n, n + 4))), n += 4;
                return i
            },
            dinf: function(e) {
                return {
                    boxes: Uu(e)
                }
            },
            dref: function(e) {
                return {
                    version: e[0],
                    flags: new Uint8Array(e.subarray(1, 4)),
                    dataReferences: Uu(e.subarray(8))
                }
            },
            hdlr: function(e) {
                var t = {
                        version: new DataView(e.buffer, e.byteOffset, e.byteLength).getUint8(0),
                        flags: new Uint8Array(e.subarray(1, 4)),
                        handlerType: Ru(e.subarray(8, 12)),
                        name: ""
                    },
                    i = 8;
                for (i = 24; i < e.byteLength; i++) {
                    if (0 === e[i]) {
                        i++;
                        break
                    }
                    t.name += String.fromCharCode(e[i])
                }
                return t.name = decodeURIComponent(escape(t.name)), t
            },
            mdat: function(e) {
                return {
                    byteLength: e.byteLength,
                    nals: function(e) {
                        var t, i, n = new DataView(e.buffer, e.byteOffset, e.byteLength),
                            r = [];
                        for (t = 0; t + 4 < e.length; t += i)
                            if (i = n.getUint32(t), t += 4, i <= 0) r.push("<span style='color:red;'>MALFORMED DATA</span>");
                            else switch (31 & e[t]) {
                                case 1:
                                    r.push("slice_layer_without_partitioning_rbsp");
                                    break;
                                case 5:
                                    r.push("slice_layer_without_partitioning_rbsp_idr");
                                    break;
                                case 6:
                                    r.push("sei_rbsp");
                                    break;
                                case 7:
                                    r.push("seq_parameter_set_rbsp");
                                    break;
                                case 8:
                                    r.push("pic_parameter_set_rbsp");
                                    break;
                                case 9:
                                    r.push("access_unit_delimiter_rbsp");
                                    break;
                                default:
                                    r.push("UNKNOWN NAL - " + e[t] & 31)
                            }
                        return r
                    }(e)
                }
            },
            mdhd: function(e) {
                var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength),
                    n = 4,
                    r = {
                        version: i.getUint8(0),
                        flags: new Uint8Array(e.subarray(1, 4)),
                        language: ""
                    };
                return 1 === r.version ? (n += 4, r.creationTime = Mu(i.getUint32(n)), n += 8, r.modificationTime = Mu(i.getUint32(n)), n += 4, r.timescale = i.getUint32(n), n += 8) : (r.creationTime = Mu(i.getUint32(n)), n += 4, r.modificationTime = Mu(i.getUint32(n)), n += 4, r.timescale = i.getUint32(n), n += 4), r.duration = i.getUint32(n), n += 4, t = i.getUint16(n), r.language += String.fromCharCode(96 + (t >> 10)), r.language += String.fromCharCode(96 + ((992 & t) >> 5)), r.language += String.fromCharCode(96 + (31 & t)), r
            },
            mdia: function(e) {
                return {
                    boxes: Uu(e)
                }
            },
            mfhd: function(e) {
                return {
                    version: e[0],
                    flags: new Uint8Array(e.subarray(1, 4)),
                    sequenceNumber: e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]
                }
            },
            minf: function(e) {
                return {
                    boxes: Uu(e)
                }
            },
            mp4a: function(e) {
                var t = new DataView(e.buffer, e.byteOffset, e.byteLength),
                    i = {
                        dataReferenceIndex: t.getUint16(6),
                        channelcount: t.getUint16(16),
                        samplesize: t.getUint16(18),
                        samplerate: t.getUint16(24) + t.getUint16(26) / 65536
                    };
                return 28 < e.byteLength && (i.streamDescriptor = Uu(e.subarray(28))[0]), i
            },
            moof: function(e) {
                return {
                    boxes: Uu(e)
                }
            },
            moov: function(e) {
                return {
                    boxes: Uu(e)
                }
            },
            mvex: function(e) {
                return {
                    boxes: Uu(e)
                }
            },
            mvhd: function(e) {
                var t = new DataView(e.buffer, e.byteOffset, e.byteLength),
                    i = 4,
                    n = {
                        version: t.getUint8(0),
                        flags: new Uint8Array(e.subarray(1, 4))
                    };
                return 1 === n.version ? (i += 4, n.creationTime = Mu(t.getUint32(i)), i += 8, n.modificationTime = Mu(t.getUint32(i)), i += 4, n.timescale = t.getUint32(i), i += 8) : (n.creationTime = Mu(t.getUint32(i)), i += 4, n.modificationTime = Mu(t.getUint32(i)), i += 4, n.timescale = t.getUint32(i), i += 4), n.duration = t.getUint32(i), i += 4, n.rate = t.getUint16(i) + t.getUint16(i + 2) / 16, i += 4, n.volume = t.getUint8(i) + t.getUint8(i + 1) / 8, i += 2, i += 2, i += 8, n.matrix = new Uint32Array(e.subarray(i, i + 36)), i += 36, i += 24, n.nextTrackId = t.getUint32(i), n
            },
            pdin: function(e) {
                var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
                return {
                    version: t.getUint8(0),
                    flags: new Uint8Array(e.subarray(1, 4)),
                    rate: t.getUint32(4),
                    initialDelay: t.getUint32(8)
                }
            },
            sdtp: function(e) {
                var t, i = {
                    version: e[0],
                    flags: new Uint8Array(e.subarray(1, 4)),
                    samples: []
                };
                for (t = 4; t < e.byteLength; t++) i.samples.push({
                    dependsOn: (48 & e[t]) >> 4,
                    isDependedOn: (12 & e[t]) >> 2,
                    hasRedundancy: 3 & e[t]
                });
                return i
            },
            sidx: function(e) {
                var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength),
                    n = {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        references: [],
                        referenceId: i.getUint32(4),
                        timescale: i.getUint32(8),
                        earliestPresentationTime: i.getUint32(12),
                        firstOffset: i.getUint32(16)
                    },
                    r = i.getUint16(22);
                for (t = 24; r; t += 12, r--) n.references.push({
                    referenceType: (128 & e[t]) >>> 7,
                    referencedSize: 2147483647 & i.getUint32(t),
                    subsegmentDuration: i.getUint32(t + 4),
                    startsWithSap: !!(128 & e[t + 8]),
                    sapType: (112 & e[t + 8]) >>> 4,
                    sapDeltaTime: 268435455 & i.getUint32(t + 8)
                });
                return n
            },
            smhd: function(e) {
                return {
                    version: e[0],
                    flags: new Uint8Array(e.subarray(1, 4)),
                    balance: e[4] + e[5] / 256
                }
            },
            stbl: function(e) {
                return {
                    boxes: Uu(e)
                }
            },
            stco: function(e) {
                var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength),
                    n = {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        chunkOffsets: []
                    },
                    r = i.getUint32(4);
                for (t = 8; r; t += 4, r--) n.chunkOffsets.push(i.getUint32(t));
                return n
            },
            stsc: function(e) {
                var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength),
                    n = i.getUint32(4),
                    r = {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        sampleToChunks: []
                    };
                for (t = 8; n; t += 12, n--) r.sampleToChunks.push({
                    firstChunk: i.getUint32(t),
                    samplesPerChunk: i.getUint32(t + 4),
                    sampleDescriptionIndex: i.getUint32(t + 8)
                });
                return r
            },
            stsd: function(e) {
                return {
                    version: e[0],
                    flags: new Uint8Array(e.subarray(1, 4)),
                    sampleDescriptions: Uu(e.subarray(8))
                }
            },
            stsz: function(e) {
                var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength),
                    n = {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        sampleSize: i.getUint32(4),
                        entries: []
                    };
                for (t = 12; t < e.byteLength; t += 4) n.entries.push(i.getUint32(t));
                return n
            },
            stts: function(e) {
                var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength),
                    n = {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        timeToSamples: []
                    },
                    r = i.getUint32(4);
                for (t = 8; r; t += 8, r--) n.timeToSamples.push({
                    sampleCount: i.getUint32(t),
                    sampleDelta: i.getUint32(t + 4)
                });
                return n
            },
            styp: function(e) {
                return Nu.ftyp(e)
            },
            tfdt: function(e) {
                var t = {
                    version: e[0],
                    flags: new Uint8Array(e.subarray(1, 4)),
                    baseMediaDecodeTime: e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]
                };
                return 1 === t.version && (t.baseMediaDecodeTime *= Math.pow(2, 32), t.baseMediaDecodeTime += e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11]), t
            },
            tfhd: function(e) {
                var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength),
                    n = {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        trackId: i.getUint32(4)
                    },
                    r = 1 & n.flags[2],
                    a = 2 & n.flags[2],
                    s = 8 & n.flags[2],
                    o = 16 & n.flags[2],
                    u = 32 & n.flags[2],
                    l = 65536 & n.flags[0],
                    c = 131072 & n.flags[0];
                return t = 8, r && (t += 4, n.baseDataOffset = i.getUint32(12), t += 4), a && (n.sampleDescriptionIndex = i.getUint32(t), t += 4), s && (n.defaultSampleDuration = i.getUint32(t), t += 4), o && (n.defaultSampleSize = i.getUint32(t), t += 4), u && (n.defaultSampleFlags = i.getUint32(t)), l && (n.durationIsEmpty = !0), !r && c && (n.baseDataOffsetIsMoof = !0), n
            },
            tkhd: function(e) {
                var t = new DataView(e.buffer, e.byteOffset, e.byteLength),
                    i = 4,
                    n = {
                        version: t.getUint8(0),
                        flags: new Uint8Array(e.subarray(1, 4))
                    };
                return 1 === n.version ? (i += 4, n.creationTime = Mu(t.getUint32(i)), i += 8, n.modificationTime = Mu(t.getUint32(i)), i += 4, n.trackId = t.getUint32(i), i += 4, i += 8) : (n.creationTime = Mu(t.getUint32(i)), i += 4, n.modificationTime = Mu(t.getUint32(i)), i += 4, n.trackId = t.getUint32(i), i += 4, i += 4), n.duration = t.getUint32(i), i += 4, i += 8, n.layer = t.getUint16(i), i += 2, n.alternateGroup = t.getUint16(i), i += 2, n.volume = t.getUint8(i) + t.getUint8(i + 1) / 8, i += 2, i += 2, n.matrix = new Uint32Array(e.subarray(i, i + 36)), i += 36, n.width = t.getUint16(i) + t.getUint16(i + 2) / 16, i += 4, n.height = t.getUint16(i) + t.getUint16(i + 2) / 16, n
            },
            traf: function(e) {
                return {
                    boxes: Uu(e)
                }
            },
            trak: function(e) {
                return {
                    boxes: Uu(e)
                }
            },
            trex: function(e) {
                var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
                return {
                    version: e[0],
                    flags: new Uint8Array(e.subarray(1, 4)),
                    trackId: t.getUint32(4),
                    defaultSampleDescriptionIndex: t.getUint32(8),
                    defaultSampleDuration: t.getUint32(12),
                    defaultSampleSize: t.getUint32(16),
                    sampleDependsOn: 3 & e[20],
                    sampleIsDependedOn: (192 & e[21]) >> 6,
                    sampleHasRedundancy: (48 & e[21]) >> 4,
                    samplePaddingValue: (14 & e[21]) >> 1,
                    sampleIsDifferenceSample: !!(1 & e[21]),
                    sampleDegradationPriority: t.getUint16(22)
                }
            },
            trun: function(e) {
                var t, i = {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        samples: []
                    },
                    n = new DataView(e.buffer, e.byteOffset, e.byteLength),
                    r = 1 & i.flags[2],
                    a = 4 & i.flags[2],
                    s = 1 & i.flags[1],
                    o = 2 & i.flags[1],
                    u = 4 & i.flags[1],
                    l = 8 & i.flags[1],
                    c = n.getUint32(4),
                    h = 8;
                for (r && (i.dataOffset = n.getInt32(h), h += 4), a && c && (t = {
                        flags: Bu(e.subarray(h, h + 4))
                    }, h += 4, s && (t.duration = n.getUint32(h), h += 4), o && (t.size = n.getUint32(h), h += 4), l && (t.compositionTimeOffset = n.getUint32(h), h += 4), i.samples.push(t), c--); c--;) t = {}, s && (t.duration = n.getUint32(h), h += 4), o && (t.size = n.getUint32(h), h += 4), u && (t.flags = Bu(e.subarray(h, h + 4)), h += 4), l && (t.compositionTimeOffset = n.getUint32(h), h += 4), i.samples.push(t);
                return i
            },
            "url ": function(e) {
                return {
                    version: e[0],
                    flags: new Uint8Array(e.subarray(1, 4))
                }
            },
            vmhd: function(e) {
                var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
                return {
                    version: e[0],
                    flags: new Uint8Array(e.subarray(1, 4)),
                    graphicsmode: t.getUint16(4),
                    opcolor: new Uint16Array([t.getUint16(6), t.getUint16(8), t.getUint16(10)])
                }
            }
        },
        ju = {
            inspect: Uu = function(e) {
                for (var t, i, n, r, a, s = 0, o = [], u = new ArrayBuffer(e.length), l = new Uint8Array(u), c = 0; c < e.length; ++c) l[c] = e[c];
                for (t = new DataView(u); s < e.byteLength;) i = t.getUint32(s), n = Ru(e.subarray(s + 4, s + 8)), r = 1 < i ? s + i : e.byteLength, (a = (Nu[n] || function(e) {
                    return {
                        data: e
                    }
                })(e.subarray(s + 8, r))).size = i, a.type = n, o.push(a), s = r;
                return o
            },
            textify: xu = function(e, t) {
                var a;
                return t = t || 0, a = new Array(2 * t + 1).join(" "), e.map(function(r, e) {
                    return a + r.type + "\n" + Object.keys(r).filter(function(e) {
                        return "type" !== e && "boxes" !== e
                    }).map(function(e) {
                        var t = a + "  " + e + ": ",
                            i = r[e];
                        if (i instanceof Uint8Array || i instanceof Uint32Array) {
                            var n = Array.prototype.slice.call(new Uint8Array(i.buffer, i.byteOffset, i.byteLength)).map(function(e) {
                                return " " + ("00" + e.toString(16)).slice(-2)
                            }).join("").match(/.{1,24}/g);
                            return n ? 1 === n.length ? t + "<" + n.join("").slice(1) + ">" : t + "<\n" + n.map(function(e) {
                                return a + "  " + e
                            }).join("\n") + "\n" + a + "  >" : t + "<>"
                        }
                        return t + JSON.stringify(i, null, 2).split("\n").map(function(e, t) {
                            return 0 === t ? e : a + "  " + e
                        }).join("\n")
                    }).join("\n") + (r.boxes ? "\n" + xu(r.boxes, t + 1) : "")
                }).join("\n")
            },
            parseTfdt: Nu.tfdt,
            parseHdlr: Nu.hdlr,
            parseTfhd: Nu.tfhd,
            parseTrun: Nu.trun,
            parseSidx: Nu.sidx
        },
        Fu = Mo,
        Vu = zo.CaptionStream,
        Hu = function(e, t) {
            for (var i = e, n = 0; n < t.length; n++) {
                var r = t[n];
                if (i < r.size) return r;
                i -= r.size
            }
            return null
        },
        qu = function(e, y) {
            var n = to.findBox(e, ["moof", "traf"]),
                t = to.findBox(e, ["mdat"]),
                v = {},
                r = [];
            return t.forEach(function(e, t) {
                var i = n[t];
                r.push({
                    mdat: e,
                    traf: i
                })
            }), r.forEach(function(e) {
                var t, i, n, r, a, s, o, u, l = e.mdat,
                    c = e.traf,
                    h = to.findBox(c, ["tfhd"]),
                    d = ju.parseTfhd(h[0]),
                    p = d.trackId,
                    f = to.findBox(c, ["tfdt"]),
                    m = 0 < f.length ? ju.parseTfdt(f[0]).baseMediaDecodeTime : 0,
                    g = to.findBox(c, ["trun"]);
                y === p && 0 < g.length && (i = g, r = m, a = (n = d).defaultSampleDuration || 0, s = n.defaultSampleSize || 0, o = n.trackId, u = [], i.forEach(function(e) {
                    var t = ju.parseTrun(e).samples;
                    t.forEach(function(e) {
                        void 0 === e.duration && (e.duration = a), void 0 === e.size && (e.size = s), e.trackId = o, e.dts = r, void 0 === e.compositionTimeOffset && (e.compositionTimeOffset = 0), e.pts = r + e.compositionTimeOffset, r += e.duration
                    }), u = u.concat(t)
                }), t = function(e, t, i) {
                    var n, r, a, s, o = new DataView(e.buffer, e.byteOffset, e.byteLength),
                        u = [];
                    for (r = 0; r + 4 < e.length; r += a)
                        if (a = o.getUint32(r), r += 4, !(a <= 0)) switch (31 & e[r]) {
                            case 6:
                                var l = e.subarray(r + 1, r + 1 + a),
                                    c = Hu(r, t);
                                n = {
                                    nalUnitType: "sei_rbsp",
                                    size: a,
                                    data: l,
                                    escapedRBSP: Fu(l),
                                    trackId: i
                                }, c ? (n.pts = c.pts, n.dts = c.dts, s = c) : (n.pts = s.pts, n.dts = s.dts), u.push(n)
                        }
                    return u
                }(l, u, p), v[p] || (v[p] = []), v[p] = v[p].concat(t))
            }), v
        },
        zu = {
            generator: no,
            probe: to,
            Transmuxer: Du.Transmuxer,
            AudioSegmentStream: Du.AudioSegmentStream,
            VideoSegmentStream: Du.VideoSegmentStream,
            CaptionParser: function() {
                var t, u, l, c, h, e = !1;
                this.isInitialized = function() {
                    return e
                }, this.init = function() {
                    t = new Vu, e = !0, t.on("data", function(e) {
                        e.startTime = e.startPts / c, e.endTime = e.endPts / c, h.captions.push(e), h.captionStreams[e.stream] = !0
                    })
                }, this.isNewInit = function(e, t) {
                    return !(e && 0 === e.length || t && "object" == typeof t && 0 === Object.keys(t).length || l === e[0] && c === t[l])
                }, this.parse = function(e, t, i) {
                    var n, r, a, s;
                    if (!this.isInitialized()) return null;
                    if (!t || !i) return null;
                    if (this.isNewInit(t, i)) l = t[0], c = i[l];
                    else if (!l || !c) return u.push(e), null;
                    for (; 0 < u.length;) {
                        var o = u.shift();
                        this.parse(o, t, i)
                    }
                    return r = e, s = c, null !== (n = (a = l) ? {
                        seiNals: qu(r, a)[a],
                        timescale: s
                    } : null) && n.seiNals ? (this.pushNals(n.seiNals), this.flushStream(), h) : null
                }, this.pushNals = function(e) {
                    if (!this.isInitialized() || !e || 0 === e.length) return null;
                    e.forEach(function(e) {
                        t.push(e)
                    })
                }, this.flushStream = function() {
                    if (!this.isInitialized()) return null;
                    t.flush()
                }, this.clearParsedCaptions = function() {
                    h.captions = [], h.captionStreams = {}
                }, this.resetCaptionStream = function() {
                    if (!this.isInitialized()) return null;
                    t.reset()
                }, this.clearAllCaptions = function() {
                    this.clearParsedCaptions(), this.resetCaptionStream()
                }, this.reset = function() {
                    u = [], c = l = null, h ? this.clearParsedCaptions() : h = {
                        captions: [],
                        captionStreams: {}
                    }, this.resetCaptionStream()
                }, this.reset()
            }
        }.CaptionParser,
        Wu = function(e) {
            var t = 31 & e[1];
            return t <<= 8, t |= e[2]
        },
        Gu = function(e) {
            return !!(64 & e[1])
        },
        Xu = function(e) {
            var t = 0;
            return 1 < (48 & e[3]) >>> 4 && (t += e[4] + 1), t
        },
        Yu = function(e) {
            switch (e) {
                case 5:
                    return "slice_layer_without_partitioning_rbsp_idr";
                case 6:
                    return "sei_rbsp";
                case 7:
                    return "seq_parameter_set_rbsp";
                case 8:
                    return "pic_parameter_set_rbsp";
                case 9:
                    return "access_unit_delimiter_rbsp";
                default:
                    return null
            }
        },
        Ku = {
            parseType: function(e, t) {
                var i = Wu(e);
                return 0 === i ? "pat" : i === t ? "pmt" : t ? "pes" : null
            },
            parsePat: function(e) {
                var t = Gu(e),
                    i = 4 + Xu(e);
                return t && (i += e[i] + 1), (31 & e[i + 10]) << 8 | e[i + 11]
            },
            parsePmt: function(e) {
                var t = {},
                    i = Gu(e),
                    n = 4 + Xu(e);
                if (i && (n += e[n] + 1), 1 & e[n + 5]) {
                    var r;
                    r = 3 + ((15 & e[n + 1]) << 8 | e[n + 2]) - 4;
                    for (var a = 12 + ((15 & e[n + 10]) << 8 | e[n + 11]); a < r;) {
                        var s = n + a;
                        t[(31 & e[s + 1]) << 8 | e[s + 2]] = e[s], a += 5 + ((15 & e[s + 3]) << 8 | e[s + 4])
                    }
                    return t
                }
            },
            parsePayloadUnitStartIndicator: Gu,
            parsePesType: function(e, t) {
                switch (t[Wu(e)]) {
                    case Wo.H264_STREAM_TYPE:
                        return "video";
                    case Wo.ADTS_STREAM_TYPE:
                        return "audio";
                    case Wo.METADATA_STREAM_TYPE:
                        return "timed-metadata";
                    default:
                        return null
                }
            },
            parsePesTime: function(e) {
                if (!Gu(e)) return null;
                var t = 4 + Xu(e);
                if (t >= e.byteLength) return null;
                var i, n = null;
                return 192 & (i = e[t + 7]) && ((n = {}).pts = (14 & e[t + 9]) << 27 | (255 & e[t + 10]) << 20 | (254 & e[t + 11]) << 12 | (255 & e[t + 12]) << 5 | (254 & e[t + 13]) >>> 3, n.pts *= 4, n.pts += (6 & e[t + 13]) >>> 1, n.dts = n.pts, 64 & i && (n.dts = (14 & e[t + 14]) << 27 | (255 & e[t + 15]) << 20 | (254 & e[t + 16]) << 12 | (255 & e[t + 17]) << 5 | (254 & e[t + 18]) >>> 3, n.dts *= 4, n.dts += (6 & e[t + 18]) >>> 1)), n
            },
            videoPacketContainsKeyFrame: function(e) {
                for (var t = 4 + Xu(e), i = e.subarray(t), n = 0, r = 0, a = !1; r < i.byteLength - 3; r++)
                    if (1 === i[r + 2]) {
                        n = r + 5;
                        break
                    } for (; n < i.byteLength;) switch (i[n]) {
                    case 0:
                        if (0 !== i[n - 1]) {
                            n += 2;
                            break
                        }
                        if (0 !== i[n - 2]) {
                            n++;
                            break
                        }
                        for (r + 3 !== n - 2 && "slice_layer_without_partitioning_rbsp_idr" === Yu(31 & i[r + 3]) && (a = !0); 1 !== i[++n] && n < i.length;);
                        r = n - 2, n += 3;
                        break;
                    case 1:
                        if (0 !== i[n - 1] || 0 !== i[n - 2]) {
                            n += 3;
                            break
                        }
                        "slice_layer_without_partitioning_rbsp_idr" === Yu(31 & i[r + 3]) && (a = !0), r = n - 2, n += 3;
                        break;
                    default:
                        n += 3
                }
                return i = i.subarray(r), n -= r, r = 0, i && 3 < i.byteLength && "slice_layer_without_partitioning_rbsp_idr" === Yu(31 & i[r + 3]) && (a = !0), a
            }
        },
        $u = $o,
        Qu = {};
    Qu.ts = Ku, Qu.aac = bu;
    var Ju = 188,
        Zu = function(e, t, i) {
            for (var n, r, a, s, o = 0, u = Ju, l = !1; u <= e.byteLength;)
                if (71 !== e[o] || 71 !== e[u] && u !== e.byteLength) o++, u++;
                else {
                    switch (n = e.subarray(o, u), Qu.ts.parseType(n, t.pid)) {
                        case "pes":
                            r = Qu.ts.parsePesType(n, t.table), a = Qu.ts.parsePayloadUnitStartIndicator(n), "audio" === r && a && (s = Qu.ts.parsePesTime(n)) && (s.type = "audio", i.audio.push(s), l = !0)
                    }
                    if (l) break;
                    o += Ju, u += Ju
                } for (o = (u = e.byteLength) - Ju, l = !1; 0 <= o;)
                if (71 !== e[o] || 71 !== e[u] && u !== e.byteLength) o--, u--;
                else {
                    switch (n = e.subarray(o, u), Qu.ts.parseType(n, t.pid)) {
                        case "pes":
                            r = Qu.ts.parsePesType(n, t.table), a = Qu.ts.parsePayloadUnitStartIndicator(n), "audio" === r && a && (s = Qu.ts.parsePesTime(n)) && (s.type = "audio", i.audio.push(s), l = !0)
                    }
                    if (l) break;
                    o -= Ju, u -= Ju
                }
        },
        el = function(e, t, i) {
            for (var n, r, a, s, o, u, l, c = 0, h = Ju, d = !1, p = {
                    data: [],
                    size: 0
                }; h < e.byteLength;)
                if (71 !== e[c] || 71 !== e[h]) c++, h++;
                else {
                    switch (n = e.subarray(c, h), Qu.ts.parseType(n, t.pid)) {
                        case "pes":
                            if (r = Qu.ts.parsePesType(n, t.table), a = Qu.ts.parsePayloadUnitStartIndicator(n), "video" === r && (a && !d && (s = Qu.ts.parsePesTime(n)) && (s.type = "video", i.video.push(s), d = !0), !i.firstKeyFrame)) {
                                if (a && 0 !== p.size) {
                                    for (o = new Uint8Array(p.size), u = 0; p.data.length;) l = p.data.shift(), o.set(l, u), u += l.byteLength;
                                    Qu.ts.videoPacketContainsKeyFrame(o) && (i.firstKeyFrame = Qu.ts.parsePesTime(o), i.firstKeyFrame.type = "video"), p.size = 0
                                }
                                p.data.push(n), p.size += n.byteLength
                            }
                    }
                    if (d && i.firstKeyFrame) break;
                    c += Ju, h += Ju
                } for (c = (h = e.byteLength) - Ju, d = !1; 0 <= c;)
                if (71 !== e[c] || 71 !== e[h]) c--, h--;
                else {
                    switch (n = e.subarray(c, h), Qu.ts.parseType(n, t.pid)) {
                        case "pes":
                            r = Qu.ts.parsePesType(n, t.table), a = Qu.ts.parsePayloadUnitStartIndicator(n), "video" === r && a && (s = Qu.ts.parsePesTime(n)) && (s.type = "video", i.video.push(s), d = !0)
                    }
                    if (d) break;
                    c -= Ju, h -= Ju
                }
        },
        tl = function(e) {
            var t = {
                    pid: null,
                    table: null
                },
                i = {};
            for (var n in function(e, t) {
                    for (var i, n = 0, r = Ju; r < e.byteLength;)
                        if (71 !== e[n] || 71 !== e[r]) n++, r++;
                        else {
                            switch (i = e.subarray(n, r), Qu.ts.parseType(i, t.pid)) {
                                case "pat":
                                    t.pid || (t.pid = Qu.ts.parsePat(i));
                                    break;
                                case "pmt":
                                    t.table || (t.table = Qu.ts.parsePmt(i))
                            }
                            if (t.pid && t.table) return;
                            n += Ju, r += Ju
                        }
                }(e, t), t.table) {
                if (t.table.hasOwnProperty(n)) switch (t.table[n]) {
                    case Wo.H264_STREAM_TYPE:
                        i.video = [], el(e, t, i), 0 === i.video.length && delete i.video;
                        break;
                    case Wo.ADTS_STREAM_TYPE:
                        i.audio = [], Zu(e, t, i), 0 === i.audio.length && delete i.audio
                }
            }
            return i
        },
        il = function(e, t) {
            var i;
            return (i = Qu.aac.isLikelyAacData(e) ? function(e) {
                for (var t, i = !1, n = 0, r = null, a = null, s = 0, o = 0; 3 <= e.length - o;) {
                    switch (Qu.aac.parseType(e, o)) {
                        case "timed-metadata":
                            if (e.length - o < 10) {
                                i = !0;
                                break
                            }
                            if ((s = Qu.aac.parseId3TagSize(e, o)) > e.length) {
                                i = !0;
                                break
                            }
                            null === a && (t = e.subarray(o, o + s), a = Qu.aac.parseAacTimestamp(t)), o += s;
                            break;
                        case "audio":
                            if (e.length - o < 7) {
                                i = !0;
                                break
                            }
                            if ((s = Qu.aac.parseAdtsSize(e, o)) > e.length) {
                                i = !0;
                                break
                            }
                            null === r && (t = e.subarray(o, o + s), r = Qu.aac.parseSampleRate(t)), n++, o += s;
                            break;
                        default:
                            o++
                    }
                    if (i) return null
                }
                if (null === r || null === a) return null;
                var u = 9e4 / r;
                return {
                    audio: [{
                        type: "audio",
                        dts: a,
                        pts: a
                    }, {
                        type: "audio",
                        dts: a + 1024 * n * u,
                        pts: a + 1024 * n * u
                    }]
                }
            }(e) : tl(e)) && (i.audio || i.video) ? (function(e, t) {
                if (e.audio && e.audio.length) {
                    var i = t;
                    "undefined" == typeof i && (i = e.audio[0].dts), e.audio.forEach(function(e) {
                        e.dts = $u(e.dts, i), e.pts = $u(e.pts, i), e.dtsTime = e.dts / 9e4, e.ptsTime = e.pts / 9e4
                    })
                }
                if (e.video && e.video.length) {
                    var n = t;
                    if ("undefined" == typeof n && (n = e.video[0].dts), e.video.forEach(function(e) {
                            e.dts = $u(e.dts, n), e.pts = $u(e.pts, n), e.dtsTime = e.dts / 9e4, e.ptsTime = e.pts / 9e4
                        }), e.firstKeyFrame) {
                        var r = e.firstKeyFrame;
                        r.dts = $u(r.dts, n), r.pts = $u(r.pts, n), r.dtsTime = r.dts / 9e4, r.ptsTime = r.dts / 9e4
                    }
                }
            }(i, t), i) : null
        };
    var nl = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        rl = function() {
            function n(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(e, t, i) {
                return t && n(e.prototype, t), i && n(e, i), e
            }
        }(),
        al = null,
        sl = function() {
            function c(e) {
                nl(this, c), al || (al = function() {
                    var e = [
                            [
                                [],
                                [],
                                [],
                                [],
                                []
                            ],
                            [
                                [],
                                [],
                                [],
                                [],
                                []
                            ]
                        ],
                        t = e[0],
                        i = e[1],
                        n = t[4],
                        r = i[4],
                        a = void 0,
                        s = void 0,
                        o = void 0,
                        u = [],
                        l = [],
                        c = void 0,
                        h = void 0,
                        d = void 0,
                        p = void 0,
                        f = void 0;
                    for (a = 0; a < 256; a++) l[(u[a] = a << 1 ^ 283 * (a >> 7)) ^ a] = a;
                    for (s = o = 0; !n[s]; s ^= c || 1, o = l[o] || 1)
                        for (d = (d = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4) >> 8 ^ 255 & d ^ 99, f = 16843009 * u[h = u[c = u[r[n[s] = d] = s]]] ^ 65537 * h ^ 257 * c ^ 16843008 * s, p = 257 * u[d] ^ 16843008 * d, a = 0; a < 4; a++) t[a][s] = p = p << 24 ^ p >>> 8, i[a][d] = f = f << 24 ^ f >>> 8;
                    for (a = 0; a < 5; a++) t[a] = t[a].slice(0), i[a] = i[a].slice(0);
                    return e
                }()), this._tables = [
                    [al[0][0].slice(), al[0][1].slice(), al[0][2].slice(), al[0][3].slice(), al[0][4].slice()],
                    [al[1][0].slice(), al[1][1].slice(), al[1][2].slice(), al[1][3].slice(), al[1][4].slice()]
                ];
                var t = void 0,
                    i = void 0,
                    n = void 0,
                    r = void 0,
                    a = void 0,
                    s = this._tables[0][4],
                    o = this._tables[1],
                    u = e.length,
                    l = 1;
                if (4 !== u && 6 !== u && 8 !== u) throw new Error("Invalid aes key size");
                for (r = e.slice(0), a = [], this._key = [r, a], t = u; t < 4 * u + 28; t++) n = r[t - 1], (t % u == 0 || 8 === u && t % u == 4) && (n = s[n >>> 24] << 24 ^ s[n >> 16 & 255] << 16 ^ s[n >> 8 & 255] << 8 ^ s[255 & n], t % u == 0 && (n = n << 8 ^ n >>> 24 ^ l << 24, l = l << 1 ^ 283 * (l >> 7))), r[t] = r[t - u] ^ n;
                for (i = 0; t; i++, t--) n = r[3 & i ? t : t - 4], a[i] = t <= 4 || i < 4 ? n : o[0][s[n >>> 24]] ^ o[1][s[n >> 16 & 255]] ^ o[2][s[n >> 8 & 255]] ^ o[3][s[255 & n]]
            }
            return c.prototype.decrypt = function(e, t, i, n, r, a) {
                var s = this._key[1],
                    o = e ^ s[0],
                    u = n ^ s[1],
                    l = i ^ s[2],
                    c = t ^ s[3],
                    h = void 0,
                    d = void 0,
                    p = void 0,
                    f = s.length / 4 - 2,
                    m = void 0,
                    g = 4,
                    y = this._tables[1],
                    v = y[0],
                    _ = y[1],
                    b = y[2],
                    T = y[3],
                    S = y[4];
                for (m = 0; m < f; m++) h = v[o >>> 24] ^ _[u >> 16 & 255] ^ b[l >> 8 & 255] ^ T[255 & c] ^ s[g], d = v[u >>> 24] ^ _[l >> 16 & 255] ^ b[c >> 8 & 255] ^ T[255 & o] ^ s[g + 1], p = v[l >>> 24] ^ _[c >> 16 & 255] ^ b[o >> 8 & 255] ^ T[255 & u] ^ s[g + 2], c = v[c >>> 24] ^ _[o >> 16 & 255] ^ b[u >> 8 & 255] ^ T[255 & l] ^ s[g + 3], g += 4, o = h, u = d, l = p;
                for (m = 0; m < 4; m++) r[(3 & -m) + a] = S[o >>> 24] << 24 ^ S[u >> 16 & 255] << 16 ^ S[l >> 8 & 255] << 8 ^ S[255 & c] ^ s[g++], h = o, o = u, u = l, l = c, c = h
            }, c
        }(),
        ol = function() {
            function e() {
                nl(this, e), this.listeners = {}
            }
            return e.prototype.on = function(e, t) {
                this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t)
            }, e.prototype.off = function(e, t) {
                if (!this.listeners[e]) return !1;
                var i = this.listeners[e].indexOf(t);
                return this.listeners[e].splice(i, 1), -1 < i
            }, e.prototype.trigger = function(e) {
                var t = this.listeners[e];
                if (t)
                    if (2 === arguments.length)
                        for (var i = t.length, n = 0; n < i; ++n) t[n].call(this, arguments[1]);
                    else
                        for (var r = Array.prototype.slice.call(arguments, 1), a = t.length, s = 0; s < a; ++s) t[s].apply(this, r)
            }, e.prototype.dispose = function() {
                this.listeners = {}
            }, e.prototype.pipe = function(t) {
                this.on("data", function(e) {
                    t.push(e)
                })
            }, e
        }(),
        ul = function(t) {
            function i() {
                nl(this, i);
                var e = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, t.call(this, ol));
                return e.jobs = [], e.delay = 1, e.timeout_ = null, e
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(i, t), i.prototype.processJob_ = function() {
                this.jobs.shift()(), this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null
            }, i.prototype.push = function(e) {
                this.jobs.push(e), this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay))
            }, i
        }(ol),
        ll = function(e) {
            return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
        },
        cl = function(e, t, i) {
            var n = new Int32Array(e.buffer, e.byteOffset, e.byteLength >> 2),
                r = new sl(Array.prototype.slice.call(t)),
                a = new Uint8Array(e.byteLength),
                s = new Int32Array(a.buffer),
                o = void 0,
                u = void 0,
                l = void 0,
                c = void 0,
                h = void 0,
                d = void 0,
                p = void 0,
                f = void 0,
                m = void 0;
            for (o = i[0], u = i[1], l = i[2], c = i[3], m = 0; m < n.length; m += 4) h = ll(n[m]), d = ll(n[m + 1]), p = ll(n[m + 2]), f = ll(n[m + 3]), r.decrypt(h, d, p, f, s, m), s[m] = ll(s[m] ^ o), s[m + 1] = ll(s[m + 1] ^ u), s[m + 2] = ll(s[m + 2] ^ l), s[m + 3] = ll(s[m + 3] ^ c), o = h, u = d, l = p, c = f;
            return a
        },
        hl = function() {
            function u(e, t, i, n) {
                nl(this, u);
                var r = u.STEP,
                    a = new Int32Array(e.buffer),
                    s = new Uint8Array(e.byteLength),
                    o = 0;
                for (this.asyncStream_ = new ul, this.asyncStream_.push(this.decryptChunk_(a.subarray(o, o + r), t, i, s)), o = r; o < a.length; o += r) i = new Uint32Array([ll(a[o - 4]), ll(a[o - 3]), ll(a[o - 2]), ll(a[o - 1])]), this.asyncStream_.push(this.decryptChunk_(a.subarray(o, o + r), t, i, s));
                this.asyncStream_.push(function() {
                    var e;
                    n(null, (e = s).subarray(0, e.byteLength - e[e.byteLength - 1]))
                })
            }
            return u.prototype.decryptChunk_ = function(t, i, n, r) {
                return function() {
                    var e = cl(t, i, n);
                    r.set(e, t.byteOffset)
                }
            }, rl(u, null, [{
                key: "STEP",
                get: function() {
                    return 32e3
                }
            }]), u
        }(),
        dl = function(e, t) {
            return /^[a-z]+:/i.test(t) ? t : (/\/\//i.test(e) || (e = ma.buildAbsoluteURL(v.location.href, e)), ma.buildAbsoluteURL(e, t))
        },
        pl = function(e, t, i) {
            return e && i.responseURL && t !== i.responseURL ? i.responseURL : t
        },
        fl = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        ml = function() {
            function n(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(e, t, i) {
                return t && n(e.prototype, t), i && n(e, i), e
            }
        }(),
        gl = function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        },
        yl = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        },
        vl = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var i = [],
                    n = !0,
                    r = !1,
                    a = void 0;
                try {
                    for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (i.push(s.value), !t || i.length !== t); n = !0);
                } catch (e) {
                    r = !0, a = e
                } finally {
                    try {
                        !n && o.return && o.return()
                    } finally {
                        if (r) throw a
                    }
                }
                return i
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        },
        _l = da.mergeOptions,
        bl = da.EventTarget,
        Tl = da.log,
        Sl = function(r, a) {
            ["AUDIO", "SUBTITLES"].forEach(function(e) {
                for (var t in r.mediaGroups[e])
                    for (var i in r.mediaGroups[e][t]) {
                        var n = r.mediaGroups[e][t][i];
                        a(n, e, t, i)
                    }
            })
        },
        kl = function(e, t) {
            var i = _l(e, {}),
                n = i.playlists[t.uri];
            if (!n) return null;
            if (n.segments && t.segments && n.segments.length === t.segments.length && n.endList === t.endList && n.mediaSequence === t.mediaSequence) return null;
            var r = _l(n, t);
            n.segments && (r.segments = function(e, t, i) {
                var n = t.slice();
                i = i || 0;
                for (var r = Math.min(e.length, t.length + i), a = i; a < r; a++) n[a - i] = _l(e[a], n[a - i]);
                return n
            }(n.segments, t.segments, t.mediaSequence - n.mediaSequence)), r.segments.forEach(function(e) {
                var t, i;
                t = e, i = r.resolvedUri, t.resolvedUri || (t.resolvedUri = dl(i, t.uri)), t.key && !t.key.resolvedUri && (t.key.resolvedUri = dl(i, t.key.uri)), t.map && !t.map.resolvedUri && (t.map.resolvedUri = dl(i, t.map.uri))
            });
            for (var a = 0; a < i.playlists.length; a++) i.playlists[a].uri === t.uri && (i.playlists[a] = r);
            return i.playlists[t.uri] = r, i
        },
        Cl = function(e) {
            for (var t = e.playlists.length; t--;) {
                var i = e.playlists[t];
                (e.playlists[i.uri] = i).resolvedUri = dl(e.uri, i.uri), i.id = t, i.attributes || (i.attributes = {}, Tl.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute."))
            }
        },
        wl = function(t) {
            Sl(t, function(e) {
                e.uri && (e.resolvedUri = dl(t.uri, e.uri))
            })
        },
        El = function(e, t) {
            var i = e.segments[e.segments.length - 1];
            return t && i && i.duration ? 1e3 * i.duration : 500 * (e.targetDuration || 10)
        },
        Al = function(e) {
            function l(e, t) {
                var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                fl(this, l);
                var n = yl(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this)),
                    r = i.withCredentials,
                    a = void 0 !== r && r,
                    s = i.handleManifestRedirects,
                    o = void 0 !== s && s;
                n.srcUrl = e, n.hls_ = t, n.withCredentials = a, n.handleManifestRedirects = o;
                var u = t.options_;
                if (n.customTagParsers = u && u.customTagParsers || [], n.customTagMappers = u && u.customTagMappers || [], !n.srcUrl) throw new Error("A non-empty playlist URL is required");
                return n.state = "HAVE_NOTHING", n.on("mediaupdatetimeout", function() {
                    "HAVE_METADATA" === n.state && (n.state = "HAVE_CURRENT_METADATA", n.request = n.hls_.xhr({
                        uri: dl(n.master.uri, n.media().uri),
                        withCredentials: n.withCredentials
                    }, function(e, t) {
                        if (n.request) return e ? n.playlistRequestError(n.request, n.media().uri, "HAVE_METADATA") : void n.haveMetadata(n.request, n.media().uri)
                    }))
                }), n
            }
            return gl(l, bl), ml(l, [{
                key: "playlistRequestError",
                value: function(e, t, i) {
                    this.request = null, i && (this.state = i), this.error = {
                        playlist: this.master.playlists[t],
                        status: e.status,
                        message: "HLS playlist request error at URL: " + t,
                        responseText: e.responseText,
                        code: 500 <= e.status ? 4 : 2
                    }, this.trigger("error")
                }
            }, {
                key: "haveMetadata",
                value: function(e, t) {
                    var i = this;
                    this.request = null, this.state = "HAVE_METADATA";
                    var n = new ka;
                    this.customTagParsers.forEach(function(e) {
                        return n.addParser(e)
                    }), this.customTagMappers.forEach(function(e) {
                        return n.addTagMapper(e)
                    }), n.push(e.responseText), n.end(), n.manifest.uri = t, n.manifest.attributes = n.manifest.attributes || {};
                    var r = kl(this.master, n.manifest);
                    this.targetDuration = n.manifest.targetDuration, r ? (this.master = r, this.media_ = this.master.playlists[n.manifest.uri]) : this.trigger("playlistunchanged"), this.media().endList || (v.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = v.setTimeout(function() {
                        i.trigger("mediaupdatetimeout")
                    }, El(this.media(), !!r))), this.trigger("loadedplaylist")
                }
            }, {
                key: "dispose",
                value: function() {
                    this.stopRequest(), v.clearTimeout(this.mediaUpdateTimeout)
                }
            }, {
                key: "stopRequest",
                value: function() {
                    if (this.request) {
                        var e = this.request;
                        this.request = null, e.onreadystatechange = null, e.abort()
                    }
                }
            }, {
                key: "media",
                value: function(i) {
                    var n = this;
                    if (!i) return this.media_;
                    if ("HAVE_NOTHING" === this.state) throw new Error("Cannot switch media playlist from " + this.state);
                    var r = this.state;
                    if ("string" == typeof i) {
                        if (!this.master.playlists[i]) throw new Error("Unknown playlist URI: " + i);
                        i = this.master.playlists[i]
                    }
                    var e = !this.media_ || i.uri !== this.media_.uri;
                    if (this.master.playlists[i.uri].endList) return this.request && (this.request.onreadystatechange = null, this.request.abort(), this.request = null), this.state = "HAVE_METADATA", this.media_ = i, void(e && (this.trigger("mediachanging"), this.trigger("mediachange")));
                    if (e) {
                        if (this.state = "SWITCHING_MEDIA", this.request) {
                            if (i.resolvedUri === this.request.url) return;
                            this.request.onreadystatechange = null, this.request.abort(), this.request = null
                        }
                        this.media_ && this.trigger("mediachanging"), this.request = this.hls_.xhr({
                            uri: i.resolvedUri,
                            withCredentials: this.withCredentials
                        }, function(e, t) {
                            if (n.request) {
                                if (i.resolvedUri = pl(n.handleManifestRedirects, i.resolvedUri, t), e) return n.playlistRequestError(n.request, i.uri, r);
                                n.haveMetadata(t, i.uri), "HAVE_MASTER" === r ? n.trigger("loadedmetadata") : n.trigger("mediachange")
                            }
                        })
                    }
                }
            }, {
                key: "pause",
                value: function() {
                    this.stopRequest(), v.clearTimeout(this.mediaUpdateTimeout), "HAVE_NOTHING" === this.state && (this.started = !1), "SWITCHING_MEDIA" === this.state ? this.media_ ? this.state = "HAVE_METADATA" : this.state = "HAVE_MASTER" : "HAVE_CURRENT_METADATA" === this.state && (this.state = "HAVE_METADATA")
                }
            }, {
                key: "load",
                value: function(e) {
                    var t = this;
                    v.clearTimeout(this.mediaUpdateTimeout);
                    var i = this.media();
                    if (e) {
                        var n = i ? i.targetDuration / 2 * 1e3 : 5e3;
                        this.mediaUpdateTimeout = v.setTimeout(function() {
                            return t.load()
                        }, n)
                    } else this.started ? i && !i.endList ? this.trigger("mediaupdatetimeout") : this.trigger("loadedplaylist") : this.start()
                }
            }, {
                key: "start",
                value: function() {
                    var n = this;
                    this.started = !0, this.request = this.hls_.xhr({
                        uri: this.srcUrl,
                        withCredentials: this.withCredentials
                    }, function(e, t) {
                        if (n.request) {
                            if (n.request = null, e) return n.error = {
                                status: t.status,
                                message: "HLS playlist request error at URL: " + n.srcUrl,
                                responseText: t.responseText,
                                code: 2
                            }, "HAVE_NOTHING" === n.state && (n.started = !1), n.trigger("error");
                            var i = new ka;
                            return n.customTagParsers.forEach(function(e) {
                                return i.addParser(e)
                            }), n.customTagMappers.forEach(function(e) {
                                return i.addTagMapper(e)
                            }), i.push(t.responseText), i.end(), n.state = "HAVE_MASTER", n.srcUrl = pl(n.handleManifestRedirects, n.srcUrl, t), i.manifest.uri = n.srcUrl, i.manifest.playlists ? (n.master = i.manifest, Cl(n.master), wl(n.master), n.trigger("loadedplaylist"), void(n.request || n.media(i.manifest.playlists[0]))) : (n.master = {
                                mediaGroups: {
                                    AUDIO: {},
                                    VIDEO: {},
                                    "CLOSED-CAPTIONS": {},
                                    SUBTITLES: {}
                                },
                                uri: v.location.href,
                                playlists: [{
                                    uri: n.srcUrl,
                                    id: 0,
                                    resolvedUri: n.srcUrl,
                                    attributes: {}
                                }]
                            }, n.master.playlists[n.srcUrl] = n.master.playlists[0], n.haveMetadata(t, n.srcUrl), n.trigger("loadedmetadata"))
                        }
                    })
                }
            }]), l
        }(),
        Ll = da.createTimeRange,
        Pl = function(e, t, i) {
            var n, r;
            return "undefined" == typeof t && (t = e.mediaSequence + e.segments.length), t < e.mediaSequence ? 0 : (n = function(e, t) {
                var i = 0,
                    n = t - e.mediaSequence,
                    r = e.segments[n];
                if (r) {
                    if ("undefined" != typeof r.start) return {
                        result: r.start,
                        precise: !0
                    };
                    if ("undefined" != typeof r.end) return {
                        result: r.end - r.duration,
                        precise: !0
                    }
                }
                for (; n--;) {
                    if ("undefined" != typeof(r = e.segments[n]).end) return {
                        result: i + r.end,
                        precise: !0
                    };
                    if (i += r.duration, "undefined" != typeof r.start) return {
                        result: i + r.start,
                        precise: !0
                    }
                }
                return {
                    result: i,
                    precise: !1
                }
            }(e, t)).precise ? n.result : (r = function(e, t) {
                for (var i = 0, n = void 0, r = t - e.mediaSequence; r < e.segments.length; r++) {
                    if ("undefined" != typeof(n = e.segments[r]).start) return {
                        result: n.start - i,
                        precise: !0
                    };
                    if (i += n.duration, "undefined" != typeof n.end) return {
                        result: n.end - i,
                        precise: !0
                    }
                }
                return {
                    result: -1,
                    precise: !1
                }
            }(e, t)).precise ? r.result : n.result + i
        },
        Ol = function(e, t, i) {
            if (!e) return 0;
            if ("number" != typeof i && (i = 0), "undefined" == typeof t) {
                if (e.totalDuration) return e.totalDuration;
                if (!e.endList) return v.Infinity
            }
            return Pl(e, t, i)
        },
        Il = function(e, t, i) {
            var n = 0;
            if (i < t) {
                var r = [i, t];
                t = r[0], i = r[1]
            }
            if (t < 0) {
                for (var a = t; a < Math.min(0, i); a++) n += e.targetDuration;
                t = 0
            }
            for (var s = t; s < i; s++) n += e.segments[s].duration;
            return n
        },
        Ul = function(e) {
            if (!e.segments.length) return 0;
            for (var t = e.segments.length - 1, i = e.segments[t].duration || e.targetDuration, n = i + 2 * e.targetDuration; t-- && !(n <= (i += e.segments[t].duration)););
            return Math.max(0, t)
        },
        xl = function(e, t, i) {
            if (!e || !e.segments) return null;
            if (e.endList) return Ol(e);
            if (null === t) return null;
            t = t || 0;
            var n = i ? Ul(e) : e.segments.length;
            return Pl(e, e.mediaSequence + n, t)
        },
        Dl = function(e) {
            return e - Math.floor(e) == 0
        },
        Rl = function(e, t) {
            if (Dl(t)) return t + .1 * e;
            for (var i = t.toString().split(".")[1].length, n = 1; n <= i; n++) {
                var r = Math.pow(10, n),
                    a = t * r;
                if (Dl(a) || n === i) return (a + e) / r
            }
        },
        Ml = Rl.bind(null, 1),
        Bl = Rl.bind(null, -1),
        Nl = function(e) {
            return e.excludeUntil && e.excludeUntil > Date.now()
        },
        jl = function(e) {
            return e.excludeUntil && e.excludeUntil === 1 / 0
        },
        Fl = function(e) {
            var t = Nl(e);
            return !e.disabled && !t
        },
        Vl = function(e, t) {
            return t.attributes && t.attributes[e]
        },
        Hl = function(e, t) {
            if (1 === e.playlists.length) return !0;
            var i = t.attributes.BANDWIDTH || Number.MAX_VALUE;
            return 0 === e.playlists.filter(function(e) {
                return !!Fl(e) && (e.attributes.BANDWIDTH || 0) < i
            }).length
        },
        ql = {
            duration: Ol,
            seekable: function(e, t) {
                var i = t || 0,
                    n = xl(e, t, !0);
                return null === n ? Ll() : Ll(i, n)
            },
            safeLiveIndex: Ul,
            getMediaInfoForTime: function(e, t, i, n) {
                var r = void 0,
                    a = void 0,
                    s = e.segments.length,
                    o = t - n;
                if (o < 0) {
                    if (0 < i)
                        for (r = i - 1; 0 <= r; r--)
                            if (a = e.segments[r], 0 < (o += Bl(a.duration))) return {
                                mediaIndex: r,
                                startTime: n - Il(e, i, r)
                            };
                    return {
                        mediaIndex: 0,
                        startTime: t
                    }
                }
                if (i < 0) {
                    for (r = i; r < 0; r++)
                        if ((o -= e.targetDuration) < 0) return {
                            mediaIndex: 0,
                            startTime: t
                        };
                    i = 0
                }
                for (r = i; r < s; r++)
                    if (a = e.segments[r], (o -= Ml(a.duration)) < 0) return {
                        mediaIndex: r,
                        startTime: n + Il(e, i, r)
                    };
                return {
                    mediaIndex: s - 1,
                    startTime: t
                }
            },
            isEnabled: Fl,
            isDisabled: function(e) {
                return e.disabled
            },
            isBlacklisted: Nl,
            isIncompatible: jl,
            playlistEnd: xl,
            isAes: function(e) {
                for (var t = 0; t < e.segments.length; t++)
                    if (e.segments[t].key) return !0;
                return !1
            },
            isFmp4: function(e) {
                for (var t = 0; t < e.segments.length; t++)
                    if (e.segments[t].map) return !0;
                return !1
            },
            hasAttribute: Vl,
            estimateSegmentRequestTime: function(e, t, i) {
                var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
                return Vl("BANDWIDTH", i) ? (e * i.attributes.BANDWIDTH - 8 * n) / t : NaN
            },
            isLowestEnabledRendition: Hl
        },
        zl = da.xhr,
        Wl = da.mergeOptions,
        Gl = function() {
            return function e(t, n) {
                t = Wl({
                    timeout: 45e3
                }, t);
                var i = e.beforeRequest || da.Hls.xhr.beforeRequest;
                if (i && "function" == typeof i) {
                    var r = i(t);
                    r && (t = r)
                }
                var a = zl(t, function(e, t) {
                        var i = a.response;
                        !e && i && (a.responseTime = Date.now(), a.roundTripTime = a.responseTime - a.requestTime, a.bytesReceived = i.byteLength || i.length, a.bandwidth || (a.bandwidth = Math.floor(a.bytesReceived / a.roundTripTime * 8 * 1e3))), t.headers && (a.responseHeaders = t.headers), e && "ETIMEDOUT" === e.code && (a.timedout = !0), e || a.aborted || 200 === t.statusCode || 206 === t.statusCode || 0 === t.statusCode || (e = new Error("XHR Failed with a response of: " + (a && (i || a.responseText)))), n(e, a)
                    }),
                    s = a.abort;
                return a.abort = function() {
                    return a.aborted = !0, s.apply(a, arguments)
                }, a.uri = t.uri, a.requestTime = Date.now(), a
            }
        },
        Xl = function(e, t) {
            var i = e.toString(16);
            return "00".substring(0, 2 - i.length) + i + (t % 2 ? " " : "")
        },
        Yl = function(e) {
            return 32 <= e && e < 126 ? String.fromCharCode(e) : "."
        },
        Kl = function(i) {
            var n = {};
            return Object.keys(i).forEach(function(e) {
                var t = i[e];
                ArrayBuffer.isView(t) ? n[e] = {
                    bytes: t.buffer,
                    byteOffset: t.byteOffset,
                    byteLength: t.byteLength
                } : n[e] = t
            }), n
        },
        $l = function(e) {
            var t = e.byterange || {
                length: 1 / 0,
                offset: 0
            };
            return [t.length, t.offset, e.resolvedUri].join(",")
        },
        Ql = function(e) {
            for (var t = Array.prototype.slice.call(e), i = "", n = 0; n < t.length / 16; n++) i += t.slice(16 * n, 16 * n + 16).map(Xl).join("") + " " + t.slice(16 * n, 16 * n + 16).map(Yl).join("") + "\n";
            return i
        },
        Jl = Object.freeze({
            createTransferableMessage: Kl,
            initSegmentId: $l,
            hexDump: Ql,
            tagDump: function(e) {
                var t = e.bytes;
                return Ql(t)
            },
            textRanges: function(e) {
                var t, i, n = "",
                    r = void 0;
                for (r = 0; r < e.length; r++) n += (i = r, (t = e).start(i) + "-" + t.end(i) + " ");
                return n
            }
        }),
        Zl = function(e) {
            var t = e.playlist,
                i = e.time,
                n = void 0 === i ? void 0 : i,
                r = e.callback;
            if (!r) throw new Error("getProgramTime: callback must be provided");
            if (!t || void 0 === n) return r({
                message: "getProgramTime: playlist and time must be provided"
            });
            var a = function(e, t) {
                if (!t || !t.segments || 0 === t.segments.length) return null;
                for (var i = 0, n = void 0, r = 0; r < t.segments.length && !(e <= (i = (n = t.segments[r]).videoTimingInfo ? n.videoTimingInfo.transmuxedPresentationEnd : i + n.duration)); r++);
                var a = t.segments[t.segments.length - 1];
                if (a.videoTimingInfo && a.videoTimingInfo.transmuxedPresentationEnd < e) return null;
                if (i < e) {
                    if (e > i + .25 * a.duration) return null;
                    n = a
                }
                return {
                    segment: n,
                    estimatedStart: n.videoTimingInfo ? n.videoTimingInfo.transmuxedPresentationStart : i - n.duration,
                    type: n.videoTimingInfo ? "accurate" : "estimate"
                }
            }(n, t);
            if (!a) return r({
                message: "valid programTime was not found"
            });
            if ("estimate" === a.type) return r({
                message: "Accurate programTime could not be determined. Please seek to e.seekTime and try again",
                seekTime: a.estimatedStart
            });
            var s = {
                    mediaSeconds: n
                },
                o = function(e, t) {
                    if (!t.dateTimeObject) return null;
                    var i = t.videoTimingInfo.transmuxerPrependedSeconds,
                        n = e - (t.videoTimingInfo.transmuxedPresentationStart + i);
                    return new Date(t.dateTimeObject.getTime() + 1e3 * n)
                }(n, a.segment);
            return o && (s.programDateTime = o.toISOString()), r(null, s)
        },
        ec = function e(t) {
            var i = t.programTime,
                n = t.playlist,
                r = t.retryCount,
                a = void 0 === r ? 2 : r,
                s = t.seekTo,
                o = t.pauseAfterSeek,
                u = void 0 === o || o,
                l = t.tech,
                c = t.callback;
            if (!c) throw new Error("seekToProgramTime: callback must be provided");
            if ("undefined" == typeof i || !n || !s) return c({
                message: "seekToProgramTime: programTime, seekTo and playlist must be provided"
            });
            if (!n.endList && !l.hasStarted_) return c({
                message: "player must be playing a live stream to start buffering"
            });
            if (! function(e) {
                    if (!e.segments || 0 === e.segments.length) return !1;
                    for (var t = 0; t < e.segments.length; t++)
                        if (!e.segments[t].dateTimeObject) return !1;
                    return !0
                }(n)) return c({
                message: "programDateTime tags must be provided in the manifest " + n.resolvedUri
            });
            var h = function(e, t) {
                var i = void 0;
                try {
                    i = new Date(e)
                } catch (e) {
                    return null
                }
                if (!t || !t.segments || 0 === t.segments.length) return null;
                var n = t.segments[0];
                if (i < n.dateTimeObject) return null;
                for (var r = 0; r < t.segments.length - 1 && (n = t.segments[r], !(i < t.segments[r + 1].dateTimeObject)); r++);
                var a, s = t.segments[t.segments.length - 1],
                    o = s.dateTimeObject,
                    u = s.videoTimingInfo ? (a = s.videoTimingInfo).transmuxedPresentationEnd - a.transmuxedPresentationStart - a.transmuxerPrependedSeconds : s.duration + .25 * s.duration;
                return new Date(o.getTime() + 1e3 * u) < i ? null : (o < i && (n = s), {
                    segment: n,
                    estimatedStart: n.videoTimingInfo ? n.videoTimingInfo.transmuxedPresentationStart : ql.duration(t, t.mediaSequence + t.segments.indexOf(n)),
                    type: n.videoTimingInfo ? "accurate" : "estimate"
                })
            }(i, n);
            if (!h) return c({
                message: i + " was not found in the stream"
            });
            var d = h.segment,
                p = function(e, t) {
                    var i = void 0,
                        n = void 0;
                    try {
                        i = new Date(e), n = new Date(t)
                    } catch (e) {}
                    var r = i.getTime();
                    return (n.getTime() - r) / 1e3
                }(d.dateTimeObject, i);
            if ("estimate" === h.type) return 0 === a ? c({
                message: i + " is not buffered yet. Try again"
            }) : (s(h.estimatedStart + p), void l.one("seeked", function() {
                e({
                    programTime: i,
                    playlist: n,
                    retryCount: a - 1,
                    seekTo: s,
                    pauseAfterSeek: u,
                    tech: l,
                    callback: c
                })
            }));
            var f = d.start + p;
            l.one("seeked", function() {
                return c(null, l.currentTime())
            }), u && l.pause(), s(f)
        },
        tc = 1 / 30,
        ic = function(e, t) {
            var i = [],
                n = void 0;
            if (e && e.length)
                for (n = 0; n < e.length; n++) t(e.start(n), e.end(n)) && i.push([e.start(n), e.end(n)]);
            return da.createTimeRanges(i)
        },
        nc = function(e, i) {
            return ic(e, function(e, t) {
                return e - tc <= i && i <= t + tc
            })
        },
        rc = function(e, t) {
            return ic(e, function(e) {
                return t <= e - tc
            })
        },
        ac = function(e) {
            var t = [];
            if (!e || !e.length) return "";
            for (var i = 0; i < e.length; i++) t.push(e.start(i) + " => " + e.end(i));
            return t.join(", ")
        },
        sc = function(e) {
            for (var t = [], i = 0; i < e.length; i++) t.push({
                start: e.start(i),
                end: e.end(i)
            });
            return t
        },
        oc = function(e, t, i) {
            var n = void 0,
                r = void 0;
            if (i && i.cues)
                for (n = i.cues.length; n--;)(r = i.cues[n]).startTime <= t && r.endTime >= e && i.removeCue(r)
        },
        uc = function(e) {
            return isNaN(e) || Math.abs(e) === 1 / 0 ? Number.MAX_VALUE : e
        },
        lc = function(e, t, i) {
            var r = v.WebKitDataCue || v.VTTCue;
            if (t && t.forEach(function(e) {
                    var t = e.stream;
                    this.inbandTextTracks_[t].addCue(new r(e.startTime + this.timestampOffset, e.endTime + this.timestampOffset, e.text))
                }, e), i) {
                var a = uc(e.mediaSource_.duration);
                if (i.forEach(function(e) {
                        var n = e.cueTime + this.timestampOffset;
                        !("number" != typeof n || v.isNaN(n) || n < 0) && n < 1 / 0 && e.frames.forEach(function(e) {
                            var t, i = new r(n, n, e.value || e.url || e.data || "");
                            i.frame = e, i.value = e, t = i, Object.defineProperties(t.frame, {
                                id: {
                                    get: function() {
                                        return da.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."), t.value.key
                                    }
                                },
                                value: {
                                    get: function() {
                                        return da.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."), t.value.data
                                    }
                                },
                                privateData: {
                                    get: function() {
                                        return da.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."), t.value.data
                                    }
                                }
                            }), this.metadataTrack_.addCue(i)
                        }, this)
                    }, e), e.metadataTrack_ && e.metadataTrack_.cues && e.metadataTrack_.cues.length) {
                    for (var n = e.metadataTrack_.cues, s = [], o = 0; o < n.length; o++) n[o] && s.push(n[o]);
                    var u = s.reduce(function(e, t) {
                            var i = e[t.startTime] || [];
                            return i.push(t), e[t.startTime] = i, e
                        }, {}),
                        l = Object.keys(u).sort(function(e, t) {
                            return Number(e) - Number(t)
                        });
                    l.forEach(function(e, t) {
                        var i = u[e],
                            n = Number(l[t + 1]) || a;
                        i.forEach(function(e) {
                            e.endTime = n
                        })
                    })
                }
            }
        },
        cc = "undefined" != typeof window ? window : {},
        hc = "undefined" == typeof Symbol ? "__target" : Symbol(),
        dc = "application/javascript",
        pc = cc.BlobBuilder || cc.WebKitBlobBuilder || cc.MozBlobBuilder || cc.MSBlobBuilder,
        fc = cc.URL || cc.webkitURL || fc && fc.msURL,
        mc = cc.Worker;

    function gc(r, a) {
        return function(e) {
            var t = this;
            if (!a) return new mc(r);
            if (mc && !e) {
                var i = bc(a.toString().replace(/^function.+?{/, "").slice(0, -1));
                return this[hc] = new mc(i),
                    function(e, t) {
                        if (!e || !t) return;
                        var i = e.terminate;
                        e.objURL = t, e.terminate = function() {
                            e.objURL && fc.revokeObjectURL(e.objURL), i.call(e)
                        }
                    }(this[hc], i), this[hc]
            }
            var n = {
                postMessage: function(e) {
                    t.onmessage && setTimeout(function() {
                        t.onmessage({
                            data: e,
                            target: n
                        })
                    })
                }
            };
            a.call(n), this.postMessage = function(e) {
                setTimeout(function() {
                    n.onmessage({
                        data: e,
                        target: t
                    })
                })
            }, this.isThisThread = !0
        }
    }
    if (mc) {
        var yc, vc = bc("self.onmessage = function () {}"),
            _c = new Uint8Array(1);
        try {
            (yc = new mc(vc)).postMessage(_c, [_c.buffer])
        } catch (e) {
            mc = null
        } finally {
            fc.revokeObjectURL(vc), yc && yc.terminate()
        }
    }

    function bc(t) {
        try {
            return fc.createObjectURL(new Blob([t], {
                type: dc
            }))
        } catch (e) {
            var i = new pc;
            return i.append(t), fc.createObjectURL(i.getBlob(type))
        }
    }
    var Tc = new gc("./transmuxer-worker.worker.js", function(e, t) {
            var Mt = this;
            ! function() {
                var o, t, i, r, a, n, e, s, u, l, c, h, d, p, f, m, g, y, v, _, b, T, S, k, C, w, E, A, L, P, O, I, U, x, D, R, M, B, N, j, F = Math.pow(2, 32) - 1;
                ! function() {
                    var e;
                    if (T = {
                            avc1: [],
                            avcC: [],
                            btrt: [],
                            dinf: [],
                            dref: [],
                            esds: [],
                            ftyp: [],
                            hdlr: [],
                            mdat: [],
                            mdhd: [],
                            mdia: [],
                            mfhd: [],
                            minf: [],
                            moof: [],
                            moov: [],
                            mp4a: [],
                            mvex: [],
                            mvhd: [],
                            sdtp: [],
                            smhd: [],
                            stbl: [],
                            stco: [],
                            stsc: [],
                            stsd: [],
                            stsz: [],
                            stts: [],
                            styp: [],
                            tfdt: [],
                            tfhd: [],
                            traf: [],
                            trak: [],
                            trun: [],
                            trex: [],
                            tkhd: [],
                            vmhd: []
                        }, "undefined" != typeof Uint8Array) {
                        for (e in T) T.hasOwnProperty(e) && (T[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
                        S = new Uint8Array(["i".charCodeAt(0), "s".charCodeAt(0), "o".charCodeAt(0), "m".charCodeAt(0)]), C = new Uint8Array(["a".charCodeAt(0), "v".charCodeAt(0), "c".charCodeAt(0), "1".charCodeAt(0)]), k = new Uint8Array([0, 0, 0, 1]), w = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), E = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]), A = {
                            video: w,
                            audio: E
                        }, O = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), P = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), I = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), U = I, x = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), D = I, L = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
                    }
                }(), o = function(e) {
                    var t, i, n = [],
                        r = 0;
                    for (t = 1; t < arguments.length; t++) n.push(arguments[t]);
                    for (t = n.length; t--;) r += n[t].byteLength;
                    for (i = new Uint8Array(r + 8), new DataView(i.buffer, i.byteOffset, i.byteLength).setUint32(0, i.byteLength), i.set(e, 4), t = 0, r = 8; t < n.length; t++) i.set(n[t], r), r += n[t].byteLength;
                    return i
                }, t = function() {
                    return o(T.dinf, o(T.dref, O))
                }, i = function(e) {
                    return o(T.esds, new Uint8Array([0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, e.audioobjecttype << 3 | e.samplingfrequencyindex >>> 1, e.samplingfrequencyindex << 7 | e.channelcount << 3, 6, 1, 2]))
                }, f = function(e) {
                    return o(T.hdlr, A[e])
                }, p = function(e) {
                    var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, e.duration >>> 24 & 255, e.duration >>> 16 & 255, e.duration >>> 8 & 255, 255 & e.duration, 85, 196, 0, 0]);
                    return e.samplerate && (t[12] = e.samplerate >>> 24 & 255, t[13] = e.samplerate >>> 16 & 255, t[14] = e.samplerate >>> 8 & 255, t[15] = 255 & e.samplerate), o(T.mdhd, t)
                }, d = function(e) {
                    return o(T.mdia, p(e), f(e.type), n(e))
                }, a = function(e) {
                    return o(T.mfhd, new Uint8Array([0, 0, 0, 0, (4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e]))
                }, n = function(e) {
                    return o(T.minf, "video" === e.type ? o(T.vmhd, L) : o(T.smhd, P), t(), g(e))
                }, e = function(e, t) {
                    for (var i = [], n = t.length; n--;) i[n] = v(t[n]);
                    return o.apply(null, [T.moof, a(e)].concat(i))
                }, s = function(e) {
                    for (var t = e.length, i = []; t--;) i[t] = c(e[t]);
                    return o.apply(null, [T.moov, l(4294967295)].concat(i).concat(u(e)))
                }, u = function(e) {
                    for (var t = e.length, i = []; t--;) i[t] = _(e[t]);
                    return o.apply(null, [T.mvex].concat(i))
                }, l = function(e) {
                    var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                    return o(T.mvhd, t)
                }, m = function(e) {
                    var t, i, n = e.samples || [],
                        r = new Uint8Array(4 + n.length);
                    for (i = 0; i < n.length; i++) t = n[i].flags, r[i + 4] = t.dependsOn << 4 | t.isDependedOn << 2 | t.hasRedundancy;
                    return o(T.sdtp, r)
                }, g = function(e) {
                    return o(T.stbl, y(e), o(T.stts, D), o(T.stsc, U), o(T.stsz, x), o(T.stco, I))
                }, y = function(e) {
                    return o(T.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), "video" === e.type ? R(e) : M(e))
                }, R = function(e) {
                    var t, i = e.sps || [],
                        n = e.pps || [],
                        r = [],
                        a = [];
                    for (t = 0; t < i.length; t++) r.push((65280 & i[t].byteLength) >>> 8), r.push(255 & i[t].byteLength), r = r.concat(Array.prototype.slice.call(i[t]));
                    for (t = 0; t < n.length; t++) a.push((65280 & n[t].byteLength) >>> 8), a.push(255 & n[t].byteLength), a = a.concat(Array.prototype.slice.call(n[t]));
                    return o(T.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e.width) >> 8, 255 & e.width, (65280 & e.height) >> 8, 255 & e.height, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o(T.avcC, new Uint8Array([1, e.profileIdc, e.profileCompatibility, e.levelIdc, 255].concat([i.length]).concat(r).concat([n.length]).concat(a))), o(T.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])))
                }, M = function(e) {
                    return o(T.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e.channelcount) >> 8, 255 & e.channelcount, (65280 & e.samplesize) >> 8, 255 & e.samplesize, 0, 0, 0, 0, (65280 & e.samplerate) >> 8, 255 & e.samplerate, 0, 0]), i(e))
                }, h = function(e) {
                    var t = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 0, (4278190080 & e.duration) >> 24, (16711680 & e.duration) >> 16, (65280 & e.duration) >> 8, 255 & e.duration, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (65280 & e.width) >> 8, 255 & e.width, 0, 0, (65280 & e.height) >> 8, 255 & e.height, 0, 0]);
                    return o(T.tkhd, t)
                }, v = function(e) {
                    var t, i, n, r, a, s;
                    return t = o(T.tfhd, new Uint8Array([0, 0, 0, 58, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])), a = Math.floor(e.baseMediaDecodeTime / (F + 1)), s = Math.floor(e.baseMediaDecodeTime % (F + 1)), i = o(T.tfdt, new Uint8Array([1, 0, 0, 0, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s])), 92, "audio" === e.type ? (n = b(e, 92), o(T.traf, t, i, n)) : (r = m(e), n = b(e, r.length + 92), o(T.traf, t, i, n, r))
                }, c = function(e) {
                    return e.duration = e.duration || 4294967295, o(T.trak, h(e), d(e))
                }, _ = function(e) {
                    var t = new Uint8Array([0, 0, 0, 0, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
                    return "video" !== e.type && (t[t.length - 1] = 0), o(T.trex, t)
                }, j = function(e, t) {
                    var i = 0,
                        n = 0,
                        r = 0,
                        a = 0;
                    return e.length && (void 0 !== e[0].duration && (i = 1), void 0 !== e[0].size && (n = 2), void 0 !== e[0].flags && (r = 4), void 0 !== e[0].compositionTimeOffset && (a = 8)), [0, 0, i | n | r | a, 1, (4278190080 & e.length) >>> 24, (16711680 & e.length) >>> 16, (65280 & e.length) >>> 8, 255 & e.length, (4278190080 & t) >>> 24, (16711680 & t) >>> 16, (65280 & t) >>> 8, 255 & t]
                }, N = function(e, t) {
                    var i, n, r, a;
                    for (t += 20 + 16 * (n = e.samples || []).length, i = j(n, t), a = 0; a < n.length; a++) r = n[a], i = i.concat([(4278190080 & r.duration) >>> 24, (16711680 & r.duration) >>> 16, (65280 & r.duration) >>> 8, 255 & r.duration, (4278190080 & r.size) >>> 24, (16711680 & r.size) >>> 16, (65280 & r.size) >>> 8, 255 & r.size, r.flags.isLeading << 2 | r.flags.dependsOn, r.flags.isDependedOn << 6 | r.flags.hasRedundancy << 4 | r.flags.paddingValue << 1 | r.flags.isNonSyncSample, 61440 & r.flags.degradationPriority, 15 & r.flags.degradationPriority, (4278190080 & r.compositionTimeOffset) >>> 24, (16711680 & r.compositionTimeOffset) >>> 16, (65280 & r.compositionTimeOffset) >>> 8, 255 & r.compositionTimeOffset]);
                    return o(T.trun, new Uint8Array(i))
                }, B = function(e, t) {
                    var i, n, r, a;
                    for (t += 20 + 8 * (n = e.samples || []).length, i = j(n, t), a = 0; a < n.length; a++) r = n[a], i = i.concat([(4278190080 & r.duration) >>> 24, (16711680 & r.duration) >>> 16, (65280 & r.duration) >>> 8, 255 & r.duration, (4278190080 & r.size) >>> 24, (16711680 & r.size) >>> 16, (65280 & r.size) >>> 8, 255 & r.size]);
                    return o(T.trun, new Uint8Array(i))
                }, b = function(e, t) {
                    return "audio" === e.type ? B(e, t) : N(e, t)
                };
                var V, H, q, z, W, G = {
                        ftyp: r = function() {
                            return o(T.ftyp, S, k, S, C)
                        },
                        mdat: function(e) {
                            return o(T.mdat, e)
                        },
                        moof: e,
                        moov: s,
                        initSegment: function(e) {
                            var t, i = r(),
                                n = s(e);
                            return (t = new Uint8Array(i.byteLength + n.byteLength)).set(i), t.set(n, i.byteLength), t
                        }
                    },
                    X = function(e) {
                        return e >>> 0
                    };
                q = function(e) {
                    return V(e, ["moov", "trak"]).reduce(function(e, t) {
                        var i, n, r, a, s;
                        return (i = V(t, ["tkhd"])[0]) ? (n = i[0], a = X(i[r = 0 === n ? 12 : 20] << 24 | i[r + 1] << 16 | i[r + 2] << 8 | i[r + 3]), (s = V(t, ["mdia", "mdhd"])[0]) ? (r = 0 === (n = s[0]) ? 12 : 20, e[a] = X(s[r] << 24 | s[r + 1] << 16 | s[r + 2] << 8 | s[r + 3]), e) : null) : null
                    }, {})
                }, z = function(r, e) {
                    var t, i, n;
                    return t = V(e, ["moof", "traf"]), i = [].concat.apply([], t.map(function(n) {
                        return V(n, ["tfhd"]).map(function(e) {
                            var t, i;
                            return t = X(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]), i = r[t] || 9e4, (V(n, ["tfdt"]).map(function(e) {
                                var t, i;
                                return t = e[0], i = X(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]), 1 === t && (i *= Math.pow(2, 32), i += X(e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11])), i
                            })[0] || 1 / 0) / i
                        })
                    })), n = Math.min.apply(null, i), isFinite(n) ? n : 0
                }, W = function(e) {
                    var t = V(e, ["moov", "trak"]),
                        o = [];
                    return t.forEach(function(e) {
                        var t = V(e, ["mdia", "hdlr"]),
                            s = V(e, ["tkhd"]);
                        t.forEach(function(e, t) {
                            var i, n, r = H(e.subarray(8, 12)),
                                a = s[t];
                            "vide" === r && (n = 0 === (i = new DataView(a.buffer, a.byteOffset, a.byteLength)).getUint8(0) ? i.getUint32(12) : i.getUint32(20), o.push(n))
                        })
                    }), o
                };
                var Y = {
                        findBox: V = function(e, t) {
                            var i, n, r, a, s, o = [];
                            if (!t.length) return null;
                            for (i = 0; i < e.byteLength;) n = X(e[i] << 24 | e[i + 1] << 16 | e[i + 2] << 8 | e[i + 3]), r = H(e.subarray(i + 4, i + 8)), a = 1 < n ? i + n : e.byteLength, r === t[0] && (1 === t.length ? o.push(e.subarray(i + 8, a)) : (s = V(e.subarray(i + 8, a), t.slice(1))).length && (o = o.concat(s))), i = a;
                            return o
                        },
                        parseType: H = function(e) {
                            var t = "";
                            return t += String.fromCharCode(e[0]), t += String.fromCharCode(e[1]), t += String.fromCharCode(e[2]), t += String.fromCharCode(e[3])
                        },
                        timescale: q,
                        startTime: z,
                        videoTrackIds: W
                    },
                    K = function() {
                        this.init = function() {
                            var a = {};
                            this.on = function(e, t) {
                                a[e] || (a[e] = []), a[e] = a[e].concat(t)
                            }, this.off = function(e, t) {
                                var i;
                                return !!a[e] && (i = a[e].indexOf(t), a[e] = a[e].slice(), a[e].splice(i, 1), -1 < i)
                            }, this.trigger = function(e) {
                                var t, i, n, r;
                                if (t = a[e])
                                    if (2 === arguments.length)
                                        for (n = t.length, i = 0; i < n; ++i) t[i].call(this, arguments[1]);
                                    else {
                                        for (r = [], i = arguments.length, i = 1; i < arguments.length; ++i) r.push(arguments[i]);
                                        for (n = t.length, i = 0; i < n; ++i) t[i].apply(this, r)
                                    }
                            }, this.dispose = function() {
                                a = {}
                            }
                        }
                    };
                K.prototype.pipe = function(t) {
                    return this.on("data", function(e) {
                        t.push(e)
                    }), this.on("done", function(e) {
                        t.flush(e)
                    }), t
                }, K.prototype.push = function(e) {
                    this.trigger("data", e)
                }, K.prototype.flush = function(e) {
                    this.trigger("done", e)
                };
                var $, Q, J, Z, ee, te, ie, ne = K,
                    re = function(e) {
                        var t, i, n = [],
                            r = [];
                        for (t = n.byteLength = 0; t < e.length; t++) "access_unit_delimiter_rbsp" === (i = e[t]).nalUnitType ? (n.length && (n.duration = i.dts - n.dts, r.push(n)), (n = [i]).byteLength = i.data.byteLength, n.pts = i.pts, n.dts = i.dts) : ("slice_layer_without_partitioning_rbsp_idr" === i.nalUnitType && (n.keyFrame = !0), n.duration = i.dts - n.dts, n.byteLength += i.data.byteLength, n.push(i));
                        return r.length && (!n.duration || n.duration <= 0) && (n.duration = r[r.length - 1].duration), r.push(n), r
                    },
                    ae = function(e) {
                        var t, i, n = [],
                            r = [];
                        for (n.byteLength = 0, n.nalCount = 0, n.duration = 0, n.pts = e[0].pts, n.dts = e[0].dts, r.byteLength = 0, r.nalCount = 0, r.duration = 0, r.pts = e[0].pts, r.dts = e[0].dts, t = 0; t < e.length; t++)(i = e[t]).keyFrame ? (n.length && (r.push(n), r.byteLength += n.byteLength, r.nalCount += n.nalCount, r.duration += n.duration), (n = [i]).nalCount = i.length, n.byteLength = i.byteLength, n.pts = i.pts, n.dts = i.dts, n.duration = i.duration) : (n.duration += i.duration, n.nalCount += i.length, n.byteLength += i.byteLength, n.push(i));
                        return r.length && n.duration <= 0 && (n.duration = r[r.length - 1].duration), r.byteLength += n.byteLength, r.nalCount += n.nalCount, r.duration += n.duration, r.push(n), r
                    },
                    se = function(e) {
                        var t;
                        return !e[0][0].keyFrame && 1 < e.length && (t = e.shift(), e.byteLength -= t.byteLength, e.nalCount -= t.nalCount, e[0][0].dts = t.dts, e[0][0].pts = t.pts, e[0][0].duration += t.duration), e
                    },
                    oe = function(e, t) {
                        var i, n, r, a, s, o, u, l = t || 0,
                            c = [];
                        for (i = 0; i < e.length; i++)
                            for (a = e[i], n = 0; n < a.length; n++) s = a[n], o = s, u = void 0, (u = {
                                size: 0,
                                flags: {
                                    isLeading: 0,
                                    dependsOn: 1,
                                    isDependedOn: 0,
                                    hasRedundancy: 0,
                                    degradationPriority: 0,
                                    isNonSyncSample: 1
                                }
                            }).dataOffset = l, u.compositionTimeOffset = o.pts - o.dts, u.duration = o.duration, u.size = 4 * o.length, u.size += o.byteLength, o.keyFrame && (u.flags.dependsOn = 2, u.flags.isNonSyncSample = 0), l += (r = u).size, c.push(r);
                        return c
                    },
                    ue = function(e) {
                        var t, i, n, r, a, s, o = 0,
                            u = e.byteLength,
                            l = e.nalCount,
                            c = new Uint8Array(u + 4 * l),
                            h = new DataView(c.buffer);
                        for (t = 0; t < e.length; t++)
                            for (r = e[t], i = 0; i < r.length; i++)
                                for (a = r[i], n = 0; n < a.length; n++) s = a[n], h.setUint32(o, s.data.byteLength), o += 4, c.set(s.data, o), o += s.data.byteLength;
                        return c
                    },
                    le = [33, 16, 5, 32, 164, 27],
                    ce = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252],
                    he = function(e) {
                        for (var t = []; e--;) t.push(0);
                        return t
                    },
                    de = {
                        96e3: [le, [227, 64], he(154), [56]],
                        88200: [le, [231], he(170), [56]],
                        64e3: [le, [248, 192], he(240), [56]],
                        48e3: [le, [255, 192], he(268), [55, 148, 128], he(54), [112]],
                        44100: [le, [255, 192], he(268), [55, 163, 128], he(84), [112]],
                        32e3: [le, [255, 192], he(268), [55, 234], he(226), [112]],
                        24e3: [le, [255, 192], he(268), [55, 255, 128], he(268), [111, 112], he(126), [224]],
                        16e3: [le, [255, 192], he(268), [55, 255, 128], he(268), [111, 255], he(269), [223, 108], he(195), [1, 192]],
                        12e3: [ce, he(268), [3, 127, 248], he(268), [6, 255, 240], he(268), [13, 255, 224], he(268), [27, 253, 128], he(259), [56]],
                        11025: [ce, he(268), [3, 127, 248], he(268), [6, 255, 240], he(268), [13, 255, 224], he(268), [27, 255, 192], he(268), [55, 175, 128], he(108), [112]],
                        8e3: [ce, he(268), [3, 121, 16], he(47), [7]]
                    },
                    pe = ($ = de, Object.keys($).reduce(function(e, t) {
                        return e[t] = new Uint8Array($[t].reduce(function(e, t) {
                            return e.concat(t)
                        }, [])), e
                    }, {}));
                te = function(e, t) {
                    return Q(ee(e, t))
                }, ie = function(e, t) {
                    return J(Z(e), t)
                };
                Q = function(e) {
                    return 9e4 * e
                }, J = function(e, t) {
                    return e * t
                }, Z = function(e) {
                    return e / 9e4
                }, ee = function(e, t) {
                    return e / t
                };
                var fe = te,
                    me = ie,
                    ge = function(e, t, i, n) {
                        var r, a, s, o, u = 0,
                            l = 0,
                            c = 0;
                        if (t.length && (r = fe(e.baseMediaDecodeTime, e.samplerate), a = Math.ceil(9e4 / (e.samplerate / 1024)), i && n && (u = r - Math.max(i, n), c = (l = Math.floor(u / a)) * a), !(l < 1 || 45e3 < c))) {
                            for ((s = pe[e.samplerate]) || (s = t[0].data), o = 0; o < l; o++) t.splice(o, 0, {
                                data: s
                            });
                            e.baseMediaDecodeTime -= Math.floor(me(c, e.samplerate))
                        }
                    },
                    ye = function(e, t, i) {
                        return t.minSegmentDts >= i ? e : (t.minSegmentDts = 1 / 0, e.filter(function(e) {
                            return e.dts >= i && (t.minSegmentDts = Math.min(t.minSegmentDts, e.dts), t.minSegmentPts = t.minSegmentDts, !0)
                        }))
                    },
                    ve = function(e) {
                        var t, i, n = [];
                        for (t = 0; t < e.length; t++) i = e[t], n.push({
                            size: i.data.byteLength,
                            duration: 1024
                        });
                        return n
                    },
                    _e = function(e) {
                        var t, i, n = 0,
                            r = new Uint8Array(function(e) {
                                var t, i = 0;
                                for (t = 0; t < e.length; t++) i += e[t].data.byteLength;
                                return i
                            }(e));
                        for (t = 0; t < e.length; t++) i = e[t], r.set(i.data, n), n += i.data.byteLength;
                        return r
                    },
                    be = function(e) {
                        delete e.minSegmentDts, delete e.maxSegmentDts, delete e.minSegmentPts, delete e.maxSegmentPts
                    },
                    Te = function(e, t) {
                        var i, n = e.minSegmentDts;
                        return t || (n -= e.timelineStartInfo.dts), i = e.timelineStartInfo.baseMediaDecodeTime, i += n, i = Math.max(0, i), "audio" === e.type && (i *= e.samplerate / 9e4, i = Math.floor(i)), i
                    },
                    Se = function(e, t) {
                        "number" == typeof t.pts && (void 0 === e.timelineStartInfo.pts && (e.timelineStartInfo.pts = t.pts), void 0 === e.minSegmentPts ? e.minSegmentPts = t.pts : e.minSegmentPts = Math.min(e.minSegmentPts, t.pts), void 0 === e.maxSegmentPts ? e.maxSegmentPts = t.pts : e.maxSegmentPts = Math.max(e.maxSegmentPts, t.pts)), "number" == typeof t.dts && (void 0 === e.timelineStartInfo.dts && (e.timelineStartInfo.dts = t.dts), void 0 === e.minSegmentDts ? e.minSegmentDts = t.dts : e.minSegmentDts = Math.min(e.minSegmentDts, t.dts), void 0 === e.maxSegmentDts ? e.maxSegmentDts = t.dts : e.maxSegmentDts = Math.max(e.maxSegmentDts, t.dts))
                    },
                    ke = function(e) {
                        for (var t = 0, i = {
                                payloadType: -1,
                                payloadSize: 0
                            }, n = 0, r = 0; t < e.byteLength && 128 !== e[t];) {
                            for (; 255 === e[t];) n += 255, t++;
                            for (n += e[t++]; 255 === e[t];) r += 255, t++;
                            if (r += e[t++], !i.payload && 4 === n) {
                                i.payloadType = n, i.payloadSize = r, i.payload = e.subarray(t, t + r);
                                break
                            }
                            t += r, r = n = 0
                        }
                        return i
                    },
                    Ce = function(e) {
                        return 181 !== e.payload[0] ? null : 49 != (e.payload[1] << 8 | e.payload[2]) ? null : "GA94" !== String.fromCharCode(e.payload[3], e.payload[4], e.payload[5], e.payload[6]) ? null : 3 !== e.payload[7] ? null : e.payload.subarray(8, e.payload.length - 1)
                    },
                    we = function(e, t) {
                        var i, n, r, a, s = [];
                        if (!(64 & t[0])) return s;
                        for (n = 31 & t[0], i = 0; i < n; i++) a = {
                            type: 3 & t[2 + (r = 3 * i)],
                            pts: e
                        }, 4 & t[r + 2] && (a.ccData = t[r + 3] << 8 | t[r + 4], s.push(a));
                        return s
                    },
                    Ee = function(e) {
                        for (var t, i, n = e.byteLength, r = [], a = 1; a < n - 2;) 0 === e[a] && 0 === e[a + 1] && 3 === e[a + 2] ? (r.push(a + 2), a += 2) : a++;
                        if (0 === r.length) return e;
                        t = n - r.length, i = new Uint8Array(t);
                        var s = 0;
                        for (a = 0; a < t; s++, a++) s === r[0] && (s++, r.shift()), i[a] = e[s];
                        return i
                    },
                    Ae = 4,
                    Le = function e() {
                        e.prototype.init.call(this), this.captionPackets_ = [], this.ccStreams_ = [new xe(0, 0), new xe(0, 1), new xe(1, 0), new xe(1, 1)], this.reset(), this.ccStreams_.forEach(function(e) {
                            e.on("data", this.trigger.bind(this, "data")), e.on("done", this.trigger.bind(this, "done"))
                        }, this)
                    };
                (Le.prototype = new ne).push = function(e) {
                    var t, i, n;
                    if ("sei_rbsp" === e.nalUnitType && (t = ke(e.escapedRBSP)).payloadType === Ae && (i = Ce(t)))
                        if (e.dts < this.latestDts_) this.ignoreNextEqualDts_ = !0;
                        else {
                            if (e.dts === this.latestDts_ && this.ignoreNextEqualDts_) return this.numSameDts_--, void(this.numSameDts_ || (this.ignoreNextEqualDts_ = !1));
                            n = we(e.pts, i), this.captionPackets_ = this.captionPackets_.concat(n), this.latestDts_ !== e.dts && (this.numSameDts_ = 0), this.numSameDts_++, this.latestDts_ = e.dts
                        }
                }, Le.prototype.flush = function() {
                    this.captionPackets_.length ? (this.captionPackets_.forEach(function(e, t) {
                        e.presortIndex = t
                    }), this.captionPackets_.sort(function(e, t) {
                        return e.pts === t.pts ? e.presortIndex - t.presortIndex : e.pts - t.pts
                    }), this.captionPackets_.forEach(function(e) {
                        e.type < 2 && this.dispatchCea608Packet(e)
                    }, this), this.captionPackets_.length = 0, this.ccStreams_.forEach(function(e) {
                        e.flush()
                    }, this)) : this.ccStreams_.forEach(function(e) {
                        e.flush()
                    }, this)
                }, Le.prototype.reset = function() {
                    this.latestDts_ = null, this.ignoreNextEqualDts_ = !1, this.numSameDts_ = 0, this.activeCea608Channel_ = [null, null], this.ccStreams_.forEach(function(e) {
                        e.reset()
                    })
                }, Le.prototype.dispatchCea608Packet = function(e) {
                    this.setsChannel1Active(e) ? this.activeCea608Channel_[e.type] = 0 : this.setsChannel2Active(e) && (this.activeCea608Channel_[e.type] = 1), null !== this.activeCea608Channel_[e.type] && this.ccStreams_[(e.type << 1) + this.activeCea608Channel_[e.type]].push(e)
                }, Le.prototype.setsChannel1Active = function(e) {
                    return 4096 == (30720 & e.ccData)
                }, Le.prototype.setsChannel2Active = function(e) {
                    return 6144 == (30720 & e.ccData)
                };
                var Pe = {
                        42: 225,
                        92: 233,
                        94: 237,
                        95: 243,
                        96: 250,
                        123: 231,
                        124: 247,
                        125: 209,
                        126: 241,
                        127: 9608,
                        304: 174,
                        305: 176,
                        306: 189,
                        307: 191,
                        308: 8482,
                        309: 162,
                        310: 163,
                        311: 9834,
                        312: 224,
                        313: 160,
                        314: 232,
                        315: 226,
                        316: 234,
                        317: 238,
                        318: 244,
                        319: 251,
                        544: 193,
                        545: 201,
                        546: 211,
                        547: 218,
                        548: 220,
                        549: 252,
                        550: 8216,
                        551: 161,
                        552: 42,
                        553: 39,
                        554: 8212,
                        555: 169,
                        556: 8480,
                        557: 8226,
                        558: 8220,
                        559: 8221,
                        560: 192,
                        561: 194,
                        562: 199,
                        563: 200,
                        564: 202,
                        565: 203,
                        566: 235,
                        567: 206,
                        568: 207,
                        569: 239,
                        570: 212,
                        571: 217,
                        572: 249,
                        573: 219,
                        574: 171,
                        575: 187,
                        800: 195,
                        801: 227,
                        802: 205,
                        803: 204,
                        804: 236,
                        805: 210,
                        806: 242,
                        807: 213,
                        808: 245,
                        809: 123,
                        810: 125,
                        811: 92,
                        812: 94,
                        813: 95,
                        814: 124,
                        815: 126,
                        816: 196,
                        817: 228,
                        818: 214,
                        819: 246,
                        820: 223,
                        821: 165,
                        822: 164,
                        823: 9474,
                        824: 197,
                        825: 229,
                        826: 216,
                        827: 248,
                        828: 9484,
                        829: 9488,
                        830: 9492,
                        831: 9496
                    },
                    Oe = function(e) {
                        return null === e ? "" : (e = Pe[e] || e, String.fromCharCode(e))
                    },
                    Ie = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152],
                    Ue = function() {
                        for (var e = [], t = 15; t--;) e.push("");
                        return e
                    },
                    xe = function e(t, i) {
                        e.prototype.init.call(this), this.field_ = t || 0, this.dataChannel_ = i || 0, this.name_ = "CC" + (1 + (this.field_ << 1 | this.dataChannel_)), this.setConstants(), this.reset(), this.push = function(e) {
                            var t, i, n, r, a;
                            if ((t = 32639 & e.ccData) !== this.lastControlCode_) {
                                if (4096 == (61440 & t) ? this.lastControlCode_ = t : t !== this.PADDING_ && (this.lastControlCode_ = null), n = t >>> 8, r = 255 & t, t !== this.PADDING_)
                                    if (t === this.RESUME_CAPTION_LOADING_) this.mode_ = "popOn";
                                    else if (t === this.END_OF_CAPTION_) this.mode_ = "popOn", this.clearFormatting(e.pts), this.flushDisplayed(e.pts), i = this.displayed_, this.displayed_ = this.nonDisplayed_, this.nonDisplayed_ = i, this.startPts_ = e.pts;
                                else if (t === this.ROLL_UP_2_ROWS_) this.rollUpRows_ = 2, this.setRollUp(e.pts);
                                else if (t === this.ROLL_UP_3_ROWS_) this.rollUpRows_ = 3, this.setRollUp(e.pts);
                                else if (t === this.ROLL_UP_4_ROWS_) this.rollUpRows_ = 4, this.setRollUp(e.pts);
                                else if (t === this.CARRIAGE_RETURN_) this.clearFormatting(e.pts), this.flushDisplayed(e.pts), this.shiftRowsUp_(), this.startPts_ = e.pts;
                                else if (t === this.BACKSPACE_) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1);
                                else if (t === this.ERASE_DISPLAYED_MEMORY_) this.flushDisplayed(e.pts), this.displayed_ = Ue();
                                else if (t === this.ERASE_NON_DISPLAYED_MEMORY_) this.nonDisplayed_ = Ue();
                                else if (t === this.RESUME_DIRECT_CAPTIONING_) "paintOn" !== this.mode_ && (this.flushDisplayed(e.pts), this.displayed_ = Ue()), this.mode_ = "paintOn", this.startPts_ = e.pts;
                                else if (this.isSpecialCharacter(n, r)) a = Oe((n = (3 & n) << 8) | r), this[this.mode_](e.pts, a), this.column_++;
                                else if (this.isExtCharacter(n, r)) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1), a = Oe((n = (3 & n) << 8) | r), this[this.mode_](e.pts, a), this.column_++;
                                else if (this.isMidRowCode(n, r)) this.clearFormatting(e.pts), this[this.mode_](e.pts, " "), this.column_++, 14 == (14 & r) && this.addFormatting(e.pts, ["i"]), 1 == (1 & r) && this.addFormatting(e.pts, ["u"]);
                                else if (this.isOffsetControlCode(n, r)) this.column_ += 3 & r;
                                else if (this.isPAC(n, r)) {
                                    var s = Ie.indexOf(7968 & t);
                                    "rollUp" === this.mode_ && (s - this.rollUpRows_ + 1 < 0 && (s = this.rollUpRows_ - 1), this.setRollUp(e.pts, s)), s !== this.row_ && (this.clearFormatting(e.pts), this.row_ = s), 1 & r && -1 === this.formatting_.indexOf("u") && this.addFormatting(e.pts, ["u"]), 16 == (16 & t) && (this.column_ = 4 * ((14 & t) >> 1)), this.isColorPAC(r) && 14 == (14 & r) && this.addFormatting(e.pts, ["i"])
                                } else this.isNormalChar(n) && (0 === r && (r = null), a = Oe(n), a += Oe(r), this[this.mode_](e.pts, a), this.column_ += a.length)
                            } else this.lastControlCode_ = null
                        }
                    };
                xe.prototype = new ne, xe.prototype.flushDisplayed = function(e) {
                    var t = this.displayed_.map(function(e) {
                        try {
                            return e.trim()
                        } catch (e) {
                            return ""
                        }
                    }).join("\n").replace(/^\n+|\n+$/g, "");
                    t.length && this.trigger("data", {
                        startPts: this.startPts_,
                        endPts: e,
                        text: t,
                        stream: this.name_
                    })
                }, xe.prototype.reset = function() {
                    this.mode_ = "popOn", this.topRow_ = 0, this.startPts_ = 0, this.displayed_ = Ue(), this.nonDisplayed_ = Ue(), this.lastControlCode_ = null, this.column_ = 0, this.row_ = 14, this.rollUpRows_ = 2, this.formatting_ = []
                }, xe.prototype.setConstants = function() {
                    0 === this.dataChannel_ ? (this.BASE_ = 16, this.EXT_ = 17, this.CONTROL_ = (20 | this.field_) << 8, this.OFFSET_ = 23) : 1 === this.dataChannel_ && (this.BASE_ = 24, this.EXT_ = 25, this.CONTROL_ = (28 | this.field_) << 8, this.OFFSET_ = 31), this.PADDING_ = 0, this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_, this.END_OF_CAPTION_ = 47 | this.CONTROL_, this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_, this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_, this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_, this.CARRIAGE_RETURN_ = 45 | this.CONTROL_, this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_, this.BACKSPACE_ = 33 | this.CONTROL_, this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_, this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_
                }, xe.prototype.isSpecialCharacter = function(e, t) {
                    return e === this.EXT_ && 48 <= t && t <= 63
                }, xe.prototype.isExtCharacter = function(e, t) {
                    return (e === this.EXT_ + 1 || e === this.EXT_ + 2) && 32 <= t && t <= 63
                }, xe.prototype.isMidRowCode = function(e, t) {
                    return e === this.EXT_ && 32 <= t && t <= 47
                }, xe.prototype.isOffsetControlCode = function(e, t) {
                    return e === this.OFFSET_ && 33 <= t && t <= 35
                }, xe.prototype.isPAC = function(e, t) {
                    return e >= this.BASE_ && e < this.BASE_ + 8 && 64 <= t && t <= 127
                }, xe.prototype.isColorPAC = function(e) {
                    return 64 <= e && e <= 79 || 96 <= e && e <= 127
                }, xe.prototype.isNormalChar = function(e) {
                    return 32 <= e && e <= 127
                }, xe.prototype.setRollUp = function(e, t) {
                    if ("rollUp" !== this.mode_ && (this.row_ = 14, this.mode_ = "rollUp", this.flushDisplayed(e), this.nonDisplayed_ = Ue(), this.displayed_ = Ue()), void 0 !== t && t !== this.row_)
                        for (var i = 0; i < this.rollUpRows_; i++) this.displayed_[t - i] = this.displayed_[this.row_ - i], this.displayed_[this.row_ - i] = "";
                    void 0 === t && (t = this.row_), this.topRow_ = t - this.rollUpRows_ + 1
                }, xe.prototype.addFormatting = function(e, t) {
                    this.formatting_ = this.formatting_.concat(t);
                    var i = t.reduce(function(e, t) {
                        return e + "<" + t + ">"
                    }, "");
                    this[this.mode_](e, i)
                }, xe.prototype.clearFormatting = function(e) {
                    if (this.formatting_.length) {
                        var t = this.formatting_.reverse().reduce(function(e, t) {
                            return e + "</" + t + ">"
                        }, "");
                        this.formatting_ = [], this[this.mode_](e, t)
                    }
                }, xe.prototype.popOn = function(e, t) {
                    var i = this.nonDisplayed_[this.row_];
                    i += t, this.nonDisplayed_[this.row_] = i
                }, xe.prototype.rollUp = function(e, t) {
                    var i = this.displayed_[this.row_];
                    i += t, this.displayed_[this.row_] = i
                }, xe.prototype.shiftRowsUp_ = function() {
                    var e;
                    for (e = 0; e < this.topRow_; e++) this.displayed_[e] = "";
                    for (e = this.row_ + 1; e < 15; e++) this.displayed_[e] = "";
                    for (e = this.topRow_; e < this.row_; e++) this.displayed_[e] = this.displayed_[e + 1];
                    this.displayed_[this.row_] = ""
                }, xe.prototype.paintOn = function(e, t) {
                    var i = this.displayed_[this.row_];
                    i += t, this.displayed_[this.row_] = i
                };
                var De = {
                        CaptionStream: Le,
                        Cea608Stream: xe
                    },
                    Re = {
                        H264_STREAM_TYPE: 27,
                        ADTS_STREAM_TYPE: 15,
                        METADATA_STREAM_TYPE: 21
                    },
                    Me = function(e, t) {
                        var i = 1;
                        for (t < e && (i = -1); 4294967296 < Math.abs(t - e);) e += 8589934592 * i;
                        return e
                    },
                    Be = function e(t) {
                        var i, n;
                        e.prototype.init.call(this), this.type_ = t, this.push = function(e) {
                            e.type === this.type_ && (void 0 === n && (n = e.dts), e.dts = Me(e.dts, n), e.pts = Me(e.pts, n), i = e.dts, this.trigger("data", e))
                        }, this.flush = function() {
                            n = i, this.trigger("done")
                        }, this.discontinuity = function() {
                            i = n = void 0
                        }
                    };
                Be.prototype = new ne;
                var Ne, je = Be,
                    Fe = function(e, t, i) {
                        var n, r = "";
                        for (n = t; n < i; n++) r += "%" + ("00" + e[n].toString(16)).slice(-2);
                        return r
                    },
                    Ve = function(e, t, i) {
                        return decodeURIComponent(Fe(e, t, i))
                    },
                    He = function(e) {
                        return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3]
                    },
                    qe = {
                        TXXX: function(e) {
                            var t;
                            if (3 === e.data[0]) {
                                for (t = 1; t < e.data.length; t++)
                                    if (0 === e.data[t]) {
                                        e.description = Ve(e.data, 1, t), e.value = Ve(e.data, t + 1, e.data.length).replace(/\0*$/, "");
                                        break
                                    } e.data = e.value
                            }
                        },
                        WXXX: function(e) {
                            var t;
                            if (3 === e.data[0])
                                for (t = 1; t < e.data.length; t++)
                                    if (0 === e.data[t]) {
                                        e.description = Ve(e.data, 1, t), e.url = Ve(e.data, t + 1, e.data.length);
                                        break
                                    }
                        },
                        PRIV: function(e) {
                            var t, i;
                            for (t = 0; t < e.data.length; t++)
                                if (0 === e.data[t]) {
                                    e.owner = (i = e.data, unescape(Fe(i, 0, t)));
                                    break
                                } e.privateData = e.data.subarray(t + 1), e.data = e.privateData
                        }
                    };
                (Ne = function(e) {
                    var t, u = {
                            debug: !(!e || !e.debug),
                            descriptor: e && e.descriptor
                        },
                        l = 0,
                        c = [],
                        h = 0;
                    if (Ne.prototype.init.call(this), this.dispatchType = Re.METADATA_STREAM_TYPE.toString(16), u.descriptor)
                        for (t = 0; t < u.descriptor.length; t++) this.dispatchType += ("00" + u.descriptor[t].toString(16)).slice(-2);
                    this.push = function(e) {
                        var t, i, n, r, a;
                        if ("timed-metadata" === e.type)
                            if (e.dataAlignmentIndicator && (h = 0, c.length = 0), 0 === c.length && (e.data.length < 10 || e.data[0] !== "I".charCodeAt(0) || e.data[1] !== "D".charCodeAt(0) || e.data[2] !== "3".charCodeAt(0))) u.debug;
                            else if (c.push(e), h += e.data.byteLength, 1 === c.length && (l = He(e.data.subarray(6, 10)), l += 10), !(h < l)) {
                            for (t = {
                                    data: new Uint8Array(l),
                                    frames: [],
                                    pts: c[0].pts,
                                    dts: c[0].dts
                                }, a = 0; a < l;) t.data.set(c[0].data.subarray(0, l - a), a), a += c[0].data.byteLength, h -= c[0].data.byteLength, c.shift();
                            i = 10, 64 & t.data[5] && (i += 4, i += He(t.data.subarray(10, 14)), l -= He(t.data.subarray(16, 20)));
                            do {
                                if ((n = He(t.data.subarray(i + 4, i + 8))) < 1) return;
                                if ((r = {
                                        id: String.fromCharCode(t.data[i], t.data[i + 1], t.data[i + 2], t.data[i + 3]),
                                        data: t.data.subarray(i + 10, i + n + 10)
                                    }).key = r.id, qe[r.id] && (qe[r.id](r), "com.apple.streaming.transportStreamTimestamp" === r.owner)) {
                                    var s = r.data,
                                        o = (1 & s[3]) << 30 | s[4] << 22 | s[5] << 14 | s[6] << 6 | s[7] >>> 2;
                                    o *= 4, o += 3 & s[7], r.timeStamp = o, void 0 === t.pts && void 0 === t.dts && (t.pts = r.timeStamp, t.dts = r.timeStamp), this.trigger("timestamp", r)
                                }
                                t.frames.push(r), i += 10, i += n
                            } while (i < l);
                            this.trigger("data", t)
                        }
                    }
                }).prototype = new ne;
                var ze, We, Ge, Xe = Ne,
                    Ye = je;
                (ze = function() {
                    var r = new Uint8Array(188),
                        a = 0;
                    ze.prototype.init.call(this), this.push = function(e) {
                        var t, i = 0,
                            n = 188;
                        for (a ? ((t = new Uint8Array(e.byteLength + a)).set(r.subarray(0, a)), t.set(e, a), a = 0) : t = e; n < t.byteLength;) 71 !== t[i] || 71 !== t[n] ? (i++, n++) : (this.trigger("data", t.subarray(i, n)), i += 188, n += 188);
                        i < t.byteLength && (r.set(t.subarray(i), 0), a = t.byteLength - i)
                    }, this.flush = function() {
                        188 === a && 71 === r[0] && (this.trigger("data", r), a = 0), this.trigger("done")
                    }
                }).prototype = new ne, (We = function() {
                    var n, r, a, s;
                    We.prototype.init.call(this), (s = this).packetsWaitingForPmt = [], this.programMapTable = void 0, n = function(e, t) {
                        var i = 0;
                        t.payloadUnitStartIndicator && (i += e[i] + 1), "pat" === t.type ? r(e.subarray(i), t) : a(e.subarray(i), t)
                    }, r = function(e, t) {
                        t.section_number = e[7], t.last_section_number = e[8], s.pmtPid = (31 & e[10]) << 8 | e[11], t.pmtPid = s.pmtPid
                    }, a = function(e, t) {
                        var i, n;
                        if (1 & e[5]) {
                            for (s.programMapTable = {
                                    video: null,
                                    audio: null,
                                    "timed-metadata": {}
                                }, i = 3 + ((15 & e[1]) << 8 | e[2]) - 4, n = 12 + ((15 & e[10]) << 8 | e[11]); n < i;) {
                                var r = e[n],
                                    a = (31 & e[n + 1]) << 8 | e[n + 2];
                                r === Re.H264_STREAM_TYPE && null === s.programMapTable.video ? s.programMapTable.video = a : r === Re.ADTS_STREAM_TYPE && null === s.programMapTable.audio ? s.programMapTable.audio = a : r === Re.METADATA_STREAM_TYPE && (s.programMapTable["timed-metadata"][a] = r), n += 5 + ((15 & e[n + 3]) << 8 | e[n + 4])
                            }
                            t.programMapTable = s.programMapTable
                        }
                    }, this.push = function(e) {
                        var t = {},
                            i = 4;
                        if (t.payloadUnitStartIndicator = !!(64 & e[1]), t.pid = 31 & e[1], t.pid <<= 8, t.pid |= e[2], 1 < (48 & e[3]) >>> 4 && (i += e[i] + 1), 0 === t.pid) t.type = "pat", n(e.subarray(i), t), this.trigger("data", t);
                        else if (t.pid === this.pmtPid)
                            for (t.type = "pmt", n(e.subarray(i), t), this.trigger("data", t); this.packetsWaitingForPmt.length;) this.processPes_.apply(this, this.packetsWaitingForPmt.shift());
                        else void 0 === this.programMapTable ? this.packetsWaitingForPmt.push([e, i, t]) : this.processPes_(e, i, t)
                    }, this.processPes_ = function(e, t, i) {
                        i.pid === this.programMapTable.video ? i.streamType = Re.H264_STREAM_TYPE : i.pid === this.programMapTable.audio ? i.streamType = Re.ADTS_STREAM_TYPE : i.streamType = this.programMapTable["timed-metadata"][i.pid], i.type = "pes", i.data = e.subarray(t), this.trigger("data", i)
                    }
                }).prototype = new ne, We.STREAM_TYPES = {
                    h264: 27,
                    adts: 15
                }, (Ge = function() {
                    var d = this,
                        n = {
                            data: [],
                            size: 0
                        },
                        r = {
                            data: [],
                            size: 0
                        },
                        a = {
                            data: [],
                            size: 0
                        },
                        s = function(e, t, i) {
                            var n, r, a = new Uint8Array(e.size),
                                s = {
                                    type: t
                                },
                                o = 0,
                                u = 0;
                            if (e.data.length && !(e.size < 9)) {
                                for (s.trackId = e.data[0].pid, o = 0; o < e.data.length; o++) r = e.data[o], a.set(r.data, u), u += r.data.byteLength;
                                var l, c, h;
                                l = a, (c = s).packetLength = 6 + (l[4] << 8 | l[5]), c.dataAlignmentIndicator = 0 != (4 & l[6]), 192 & (h = l[7]) && (c.pts = (14 & l[9]) << 27 | (255 & l[10]) << 20 | (254 & l[11]) << 12 | (255 & l[12]) << 5 | (254 & l[13]) >>> 3, c.pts *= 4, c.pts += (6 & l[13]) >>> 1, c.dts = c.pts, 64 & h && (c.dts = (14 & l[14]) << 27 | (255 & l[15]) << 20 | (254 & l[16]) << 12 | (255 & l[17]) << 5 | (254 & l[18]) >>> 3, c.dts *= 4, c.dts += (6 & l[18]) >>> 1)), c.data = l.subarray(9 + l[8]), n = "video" === t || s.packetLength <= e.size, (i || n) && (e.size = 0, e.data.length = 0), n && d.trigger("data", s)
                            }
                        };
                    Ge.prototype.init.call(this), this.push = function(i) {
                        ({
                            pat: function() {},
                            pes: function() {
                                var e, t;
                                switch (i.streamType) {
                                    case Re.H264_STREAM_TYPE:
                                    case Re.H264_STREAM_TYPE:
                                        e = n, t = "video";
                                        break;
                                    case Re.ADTS_STREAM_TYPE:
                                        e = r, t = "audio";
                                        break;
                                    case Re.METADATA_STREAM_TYPE:
                                        e = a, t = "timed-metadata";
                                        break;
                                    default:
                                        return
                                }
                                i.payloadUnitStartIndicator && s(e, t, !0), e.data.push(i), e.size += i.data.byteLength
                            },
                            pmt: function() {
                                var e = {
                                        type: "metadata",
                                        tracks: []
                                    },
                                    t = i.programMapTable;
                                null !== t.video && e.tracks.push({
                                    timelineStartInfo: {
                                        baseMediaDecodeTime: 0
                                    },
                                    id: +t.video,
                                    codec: "avc",
                                    type: "video"
                                }), null !== t.audio && e.tracks.push({
                                    timelineStartInfo: {
                                        baseMediaDecodeTime: 0
                                    },
                                    id: +t.audio,
                                    codec: "adts",
                                    type: "audio"
                                }), d.trigger("data", e)
                            }
                        })[i.type]()
                    }, this.flush = function() {
                        s(n, "video"), s(r, "audio"), s(a, "timed-metadata"), this.trigger("done")
                    }
                }).prototype = new ne;
                var Ke = {
                    PAT_PID: 0,
                    MP2T_PACKET_LENGTH: 188,
                    TransportPacketStream: ze,
                    TransportParseStream: We,
                    ElementaryStream: Ge,
                    TimestampRolloverStream: Ye,
                    CaptionStream: De.CaptionStream,
                    Cea608Stream: De.Cea608Stream,
                    MetadataStream: Xe
                };
                for (var $e in Re) Re.hasOwnProperty($e) && (Ke[$e] = Re[$e]);
                var Qe, Je = Ke,
                    Ze = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                (Qe = function() {
                    var l;
                    Qe.prototype.init.call(this), this.push = function(e) {
                        var t, i, n, r, a, s, o = 0,
                            u = 0;
                        if ("audio" === e.type)
                            for (l ? (r = l, (l = new Uint8Array(r.byteLength + e.data.byteLength)).set(r), l.set(e.data, r.byteLength)) : l = e.data; o + 5 < l.length;)
                                if (255 === l[o] && 240 == (246 & l[o + 1])) {
                                    if (i = 2 * (1 & ~l[o + 1]), t = (3 & l[o + 3]) << 11 | l[o + 4] << 3 | (224 & l[o + 5]) >> 5, s = 9e4 * (a = 1024 * (1 + (3 & l[o + 6]))) / Ze[(60 & l[o + 2]) >>> 2], n = o + t, l.byteLength < n) return;
                                    if (this.trigger("data", {
                                            pts: e.pts + u * s,
                                            dts: e.dts + u * s,
                                            sampleCount: a,
                                            audioobjecttype: 1 + (l[o + 2] >>> 6 & 3),
                                            channelcount: (1 & l[o + 2]) << 2 | (192 & l[o + 3]) >>> 6,
                                            samplerate: Ze[(60 & l[o + 2]) >>> 2],
                                            samplingfrequencyindex: (60 & l[o + 2]) >>> 2,
                                            samplesize: 16,
                                            data: l.subarray(o + 7 + i, n)
                                        }), l.byteLength === n) return void(l = void 0);
                                    u++, l = l.subarray(n)
                                } else o++
                    }, this.flush = function() {
                        this.trigger("done")
                    }
                }).prototype = new ne;
                var et, tt, it, nt = Qe,
                    rt = function(n) {
                        var r = n.byteLength,
                            a = 0,
                            s = 0;
                        this.length = function() {
                            return 8 * r
                        }, this.bitsAvailable = function() {
                            return 8 * r + s
                        }, this.loadWord = function() {
                            var e = n.byteLength - r,
                                t = new Uint8Array(4),
                                i = Math.min(4, r);
                            if (0 === i) throw new Error("no bytes available");
                            t.set(n.subarray(e, e + i)), a = new DataView(t.buffer).getUint32(0), s = 8 * i, r -= i
                        }, this.skipBits = function(e) {
                            var t;
                            e < s || (e -= s, e -= 8 * (t = Math.floor(e / 8)), r -= t, this.loadWord()), a <<= e, s -= e
                        }, this.readBits = function(e) {
                            var t = Math.min(s, e),
                                i = a >>> 32 - t;
                            return 0 < (s -= t) ? a <<= t : 0 < r && this.loadWord(), 0 < (t = e - t) ? i << t | this.readBits(t) : i
                        }, this.skipLeadingZeros = function() {
                            var e;
                            for (e = 0; e < s; ++e)
                                if (0 != (a & 2147483648 >>> e)) return a <<= e, s -= e, e;
                            return this.loadWord(), e + this.skipLeadingZeros()
                        }, this.skipUnsignedExpGolomb = function() {
                            this.skipBits(1 + this.skipLeadingZeros())
                        }, this.skipExpGolomb = function() {
                            this.skipBits(1 + this.skipLeadingZeros())
                        }, this.readUnsignedExpGolomb = function() {
                            var e = this.skipLeadingZeros();
                            return this.readBits(e + 1) - 1
                        }, this.readExpGolomb = function() {
                            var e = this.readUnsignedExpGolomb();
                            return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
                        }, this.readBoolean = function() {
                            return 1 === this.readBits(1)
                        }, this.readUnsignedByte = function() {
                            return this.readBits(8)
                        }, this.loadWord()
                    };
                (tt = function() {
                    var i, n, r = 0;
                    tt.prototype.init.call(this), this.push = function(e) {
                        var t;
                        for (n = n ? ((t = new Uint8Array(n.byteLength + e.data.byteLength)).set(n), t.set(e.data, n.byteLength), t) : e.data; r < n.byteLength - 3; r++)
                            if (1 === n[r + 2]) {
                                i = r + 5;
                                break
                            } for (; i < n.byteLength;) switch (n[i]) {
                            case 0:
                                if (0 !== n[i - 1]) {
                                    i += 2;
                                    break
                                }
                                if (0 !== n[i - 2]) {
                                    i++;
                                    break
                                }
                                for (r + 3 !== i - 2 && this.trigger("data", n.subarray(r + 3, i - 2)); 1 !== n[++i] && i < n.length;);
                                r = i - 2, i += 3;
                                break;
                            case 1:
                                if (0 !== n[i - 1] || 0 !== n[i - 2]) {
                                    i += 3;
                                    break
                                }
                                this.trigger("data", n.subarray(r + 3, i - 2)), r = i - 2, i += 3;
                                break;
                            default:
                                i += 3
                        }
                        n = n.subarray(r), i -= r, r = 0
                    }, this.flush = function() {
                        n && 3 < n.byteLength && this.trigger("data", n.subarray(r + 3)), n = null, r = 0, this.trigger("done")
                    }
                }).prototype = new ne, it = {
                    100: !0,
                    110: !0,
                    122: !0,
                    244: !0,
                    44: !0,
                    83: !0,
                    86: !0,
                    118: !0,
                    128: !0,
                    138: !0,
                    139: !0,
                    134: !0
                }, (et = function() {
                    var i, n, r, a, s, o, _, t = new tt;
                    et.prototype.init.call(this), (i = this).push = function(e) {
                        "video" === e.type && (n = e.trackId, r = e.pts, a = e.dts, t.push(e))
                    }, t.on("data", function(e) {
                        var t = {
                            trackId: n,
                            pts: r,
                            dts: a,
                            data: e
                        };
                        switch (31 & e[0]) {
                            case 5:
                                t.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
                                break;
                            case 6:
                                t.nalUnitType = "sei_rbsp", t.escapedRBSP = s(e.subarray(1));
                                break;
                            case 7:
                                t.nalUnitType = "seq_parameter_set_rbsp", t.escapedRBSP = s(e.subarray(1)), t.config = o(t.escapedRBSP);
                                break;
                            case 8:
                                t.nalUnitType = "pic_parameter_set_rbsp";
                                break;
                            case 9:
                                t.nalUnitType = "access_unit_delimiter_rbsp"
                        }
                        i.trigger("data", t)
                    }), t.on("done", function() {
                        i.trigger("done")
                    }), this.flush = function() {
                        t.flush()
                    }, _ = function(e, t) {
                        var i, n = 8,
                            r = 8;
                        for (i = 0; i < e; i++) 0 !== r && (r = (n + t.readExpGolomb() + 256) % 256), n = 0 === r ? n : r
                    }, s = function(e) {
                        for (var t, i, n = e.byteLength, r = [], a = 1; a < n - 2;) 0 === e[a] && 0 === e[a + 1] && 3 === e[a + 2] ? (r.push(a + 2), a += 2) : a++;
                        if (0 === r.length) return e;
                        t = n - r.length, i = new Uint8Array(t);
                        var s = 0;
                        for (a = 0; a < t; s++, a++) s === r[0] && (s++, r.shift()), i[a] = e[s];
                        return i
                    }, o = function(e) {
                        var t, i, n, r, a, s, o, u, l, c, h, d, p, f = 0,
                            m = 0,
                            g = 0,
                            y = 0,
                            v = 1;
                        if (i = (t = new rt(e)).readUnsignedByte(), r = t.readUnsignedByte(), n = t.readUnsignedByte(), t.skipUnsignedExpGolomb(), it[i] && (3 === (a = t.readUnsignedExpGolomb()) && t.skipBits(1), t.skipUnsignedExpGolomb(), t.skipUnsignedExpGolomb(), t.skipBits(1), t.readBoolean()))
                            for (h = 3 !== a ? 8 : 12, p = 0; p < h; p++) t.readBoolean() && _(p < 6 ? 16 : 64, t);
                        if (t.skipUnsignedExpGolomb(), 0 === (s = t.readUnsignedExpGolomb())) t.readUnsignedExpGolomb();
                        else if (1 === s)
                            for (t.skipBits(1), t.skipExpGolomb(), t.skipExpGolomb(), o = t.readUnsignedExpGolomb(), p = 0; p < o; p++) t.skipExpGolomb();
                        if (t.skipUnsignedExpGolomb(), t.skipBits(1), u = t.readUnsignedExpGolomb(), l = t.readUnsignedExpGolomb(), 0 === (c = t.readBits(1)) && t.skipBits(1), t.skipBits(1), t.readBoolean() && (f = t.readUnsignedExpGolomb(), m = t.readUnsignedExpGolomb(), g = t.readUnsignedExpGolomb(), y = t.readUnsignedExpGolomb()), t.readBoolean() && t.readBoolean()) {
                            switch (t.readUnsignedByte()) {
                                case 1:
                                    d = [1, 1];
                                    break;
                                case 2:
                                    d = [12, 11];
                                    break;
                                case 3:
                                    d = [10, 11];
                                    break;
                                case 4:
                                    d = [16, 11];
                                    break;
                                case 5:
                                    d = [40, 33];
                                    break;
                                case 6:
                                    d = [24, 11];
                                    break;
                                case 7:
                                    d = [20, 11];
                                    break;
                                case 8:
                                    d = [32, 11];
                                    break;
                                case 9:
                                    d = [80, 33];
                                    break;
                                case 10:
                                    d = [18, 11];
                                    break;
                                case 11:
                                    d = [15, 11];
                                    break;
                                case 12:
                                    d = [64, 33];
                                    break;
                                case 13:
                                    d = [160, 99];
                                    break;
                                case 14:
                                    d = [4, 3];
                                    break;
                                case 15:
                                    d = [3, 2];
                                    break;
                                case 16:
                                    d = [2, 1];
                                    break;
                                case 255:
                                    d = [t.readUnsignedByte() << 8 | t.readUnsignedByte(), t.readUnsignedByte() << 8 | t.readUnsignedByte()]
                            }
                            d && (v = d[0] / d[1])
                        }
                        return {
                            profileIdc: i,
                            levelIdc: n,
                            profileCompatibility: r,
                            width: Math.ceil((16 * (u + 1) - 2 * f - 2 * m) * v),
                            height: (2 - c) * (l + 1) * 16 - 2 * g - 2 * y
                        }
                    }
                }).prototype = new ne;
                var at, st = {
                        H264Stream: et,
                        NalByteStream: tt
                    },
                    ot = function(e) {
                        return e[0] === "I".charCodeAt(0) && e[1] === "D".charCodeAt(0) && e[2] === "3".charCodeAt(0)
                    },
                    ut = function(e, t) {
                        var i = e[t + 6] << 21 | e[t + 7] << 14 | e[t + 8] << 7 | e[t + 9];
                        return (16 & e[t + 5]) >> 4 ? i + 20 : i + 10
                    },
                    lt = function(e, t) {
                        var i = (224 & e[t + 5]) >> 5,
                            n = e[t + 4] << 3;
                        return 6144 & e[t + 3] | n | i
                    };
                (at = function() {
                    var o = new Uint8Array,
                        u = 0;
                    at.prototype.init.call(this), this.setTimestamp = function(e) {
                        u = e
                    }, this.push = function(e) {
                        var t, i, n, r, a = 0,
                            s = 0;
                        for (o.length ? (r = o.length, (o = new Uint8Array(e.byteLength + r)).set(o.subarray(0, r)), o.set(e, r)) : o = e; 3 <= o.length - s;)
                            if (o[s] !== "I".charCodeAt(0) || o[s + 1] !== "D".charCodeAt(0) || o[s + 2] !== "3".charCodeAt(0))
                                if (255 != (255 & o[s]) || 240 != (240 & o[s + 1])) s++;
                                else {
                                    if (o.length - s < 7) break;
                                    if (s + (a = lt(o, s)) > o.length) break;
                                    n = {
                                        type: "audio",
                                        data: o.subarray(s, s + a),
                                        pts: u,
                                        dts: u
                                    }, this.trigger("data", n), s += a
                                }
                        else {
                            if (o.length - s < 10) break;
                            if (s + (a = ut(o, s)) > o.length) break;
                            i = {
                                type: "timed-metadata",
                                data: o.subarray(s, s + a)
                            }, this.trigger("data", i), s += a
                        }
                        t = o.length - s, o = 0 < t ? o.subarray(s) : new Uint8Array
                    }
                }).prototype = new ne;
                var ct, ht, dt, pt, ft = at,
                    mt = st.H264Stream,
                    gt = ot,
                    yt = ["audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize"],
                    vt = ["width", "height", "profileIdc", "levelIdc", "profileCompatibility"],
                    _t = function(e, t) {
                        var i;
                        if (e.length !== t.length) return !1;
                        for (i = 0; i < e.length; i++)
                            if (e[i] !== t[i]) return !1;
                        return !0
                    },
                    bt = function(e, t, i, n, r, a) {
                        return {
                            start: {
                                dts: e,
                                pts: e + (i - t)
                            },
                            end: {
                                dts: e + (n - t),
                                pts: e + (r - i)
                            },
                            prependedContentDuration: a,
                            baseMediaDecodeTime: e
                        }
                    };
                (ht = function(r, a) {
                    var s = [],
                        o = 0,
                        u = 0,
                        l = 0,
                        c = 1 / 0;
                    a = a || {}, ht.prototype.init.call(this), this.push = function(t) {
                        Se(r, t), r && yt.forEach(function(e) {
                            r[e] = t[e]
                        }), s.push(t)
                    }, this.setEarliestDts = function(e) {
                        u = e - r.timelineStartInfo.baseMediaDecodeTime
                    }, this.setVideoBaseMediaDecodeTime = function(e) {
                        c = e
                    }, this.setAudioAppendStart = function(e) {
                        l = e
                    }, this.flush = function() {
                        var e, t, i, n;
                        0 !== s.length && (e = ye(s, r, u), r.baseMediaDecodeTime = Te(r, a.keepOriginalTimestamps), ge(r, e, l, c), r.samples = ve(e), i = G.mdat(_e(e)), s = [], t = G.moof(o, [r]), n = new Uint8Array(t.byteLength + i.byteLength), o++, n.set(t), n.set(i, t.byteLength), be(r), this.trigger("data", {
                            track: r,
                            boxes: n
                        })), this.trigger("done", "AudioSegmentStream")
                    }
                }).prototype = new ne, (ct = function(c, h) {
                    var t, i, d = 0,
                        p = [],
                        f = [];
                    h = h || {}, ct.prototype.init.call(this), delete c.minPTS, this.gopCache_ = [], this.push = function(e) {
                        Se(c, e), "seq_parameter_set_rbsp" !== e.nalUnitType || t || (t = e.config, c.sps = [e.data], vt.forEach(function(e) {
                            c[e] = t[e]
                        }, this)), "pic_parameter_set_rbsp" !== e.nalUnitType || i || (i = e.data, c.pps = [e.data]), p.push(e)
                    }, this.flush = function() {
                        for (var e, t, i, n, r, a, s, o, u = 0; p.length && "access_unit_delimiter_rbsp" !== p[0].nalUnitType;) p.shift();
                        if (0 === p.length) return this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
                        if (e = re(p), (i = ae(e))[0][0].keyFrame || ((t = this.getGopForFusion_(p[0], c)) ? (u = t.duration, i.unshift(t), i.byteLength += t.byteLength, i.nalCount += t.nalCount, i.pts = t.pts, i.dts = t.dts, i.duration += t.duration) : i = se(i)), f.length) {
                            var l;
                            if (!(l = h.alignGopsAtEnd ? this.alignGopsAtEnd_(i) : this.alignGopsAtStart_(i))) return this.gopCache_.unshift({
                                gop: i.pop(),
                                pps: c.pps,
                                sps: c.sps
                            }), this.gopCache_.length = Math.min(6, this.gopCache_.length), p = [], this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
                            be(c), i = l
                        }
                        Se(c, i), c.samples = oe(i), r = G.mdat(ue(i)), c.baseMediaDecodeTime = Te(c, h.keepOriginalTimestamps), this.trigger("processedGopsInfo", i.map(function(e) {
                            return {
                                pts: e.pts,
                                dts: e.dts,
                                byteLength: e.byteLength
                            }
                        })), s = i[0], o = i[i.length - 1], this.trigger("segmentTimingInfo", bt(c.baseMediaDecodeTime, s.dts, s.pts, o.dts + o.duration, o.pts + o.duration, u)), this.gopCache_.unshift({
                            gop: i.pop(),
                            pps: c.pps,
                            sps: c.sps
                        }), this.gopCache_.length = Math.min(6, this.gopCache_.length), p = [], this.trigger("baseMediaDecodeTime", c.baseMediaDecodeTime), this.trigger("timelineStartInfo", c.timelineStartInfo), n = G.moof(d, [c]), a = new Uint8Array(n.byteLength + r.byteLength), d++, a.set(n), a.set(r, n.byteLength), this.trigger("data", {
                            track: c,
                            boxes: a
                        }), this.resetStream_(), this.trigger("done", "VideoSegmentStream")
                    }, this.resetStream_ = function() {
                        be(c), i = t = void 0
                    }, this.getGopForFusion_ = function(e) {
                        var t, i, n, r, a, s = 1 / 0;
                        for (a = 0; a < this.gopCache_.length; a++) n = (r = this.gopCache_[a]).gop, c.pps && _t(c.pps[0], r.pps[0]) && c.sps && _t(c.sps[0], r.sps[0]) && (n.dts < c.timelineStartInfo.dts || -1e4 <= (t = e.dts - n.dts - n.duration) && t <= 45e3 && (!i || t < s) && (i = r, s = t));
                        return i ? i.gop : null
                    }, this.alignGopsAtStart_ = function(e) {
                        var t, i, n, r, a, s, o, u;
                        for (a = e.byteLength, s = e.nalCount, o = e.duration, t = i = 0; t < f.length && i < e.length && (n = f[t], r = e[i], n.pts !== r.pts);) r.pts > n.pts ? t++ : (i++, a -= r.byteLength, s -= r.nalCount, o -= r.duration);
                        return 0 === i ? e : i === e.length ? null : ((u = e.slice(i)).byteLength = a, u.duration = o, u.nalCount = s, u.pts = u[0].pts, u.dts = u[0].dts, u)
                    }, this.alignGopsAtEnd_ = function(e) {
                        var t, i, n, r, a, s, o;
                        for (t = f.length - 1, i = e.length - 1, a = null, s = !1; 0 <= t && 0 <= i;) {
                            if (n = f[t], r = e[i], n.pts === r.pts) {
                                s = !0;
                                break
                            }
                            n.pts > r.pts ? t-- : (t === f.length - 1 && (a = i), i--)
                        }
                        if (!s && null === a) return null;
                        if (0 === (o = s ? i : a)) return e;
                        var u = e.slice(o),
                            l = u.reduce(function(e, t) {
                                return e.byteLength += t.byteLength, e.duration += t.duration, e.nalCount += t.nalCount, e
                            }, {
                                byteLength: 0,
                                duration: 0,
                                nalCount: 0
                            });
                        return u.byteLength = l.byteLength, u.duration = l.duration, u.nalCount = l.nalCount, u.pts = u[0].pts, u.dts = u[0].dts, u
                    }, this.alignGopsWith = function(e) {
                        f = e
                    }
                }).prototype = new ne, (pt = function(e, t) {
                    this.numberOfTracks = 0, this.metadataStream = t, "undefined" != typeof(e = e || {}).remux ? this.remuxTracks = !!e.remux : this.remuxTracks = !0, "boolean" == typeof e.keepOriginalTimestamps && (this.keepOriginalTimestamps = e.keepOriginalTimestamps), this.pendingTracks = [], this.videoTrack = null, this.pendingBoxes = [], this.pendingCaptions = [], this.pendingMetadata = [], this.pendingBytes = 0, this.emittedTracks = 0, pt.prototype.init.call(this), this.push = function(e) {
                        return e.text ? this.pendingCaptions.push(e) : e.frames ? this.pendingMetadata.push(e) : (this.pendingTracks.push(e.track), this.pendingBoxes.push(e.boxes), this.pendingBytes += e.boxes.byteLength, "video" === e.track.type && (this.videoTrack = e.track), void("audio" === e.track.type && (this.audioTrack = e.track)))
                    }
                }).prototype = new ne, pt.prototype.flush = function(e) {
                    var t, i, n, r, a = 0,
                        s = {
                            captions: [],
                            captionStreams: {},
                            metadata: [],
                            info: {}
                        },
                        o = 0;
                    if (this.pendingTracks.length < this.numberOfTracks) {
                        if ("VideoSegmentStream" !== e && "AudioSegmentStream" !== e) return;
                        if (this.remuxTracks) return;
                        if (0 === this.pendingTracks.length) return this.emittedTracks++, void(this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0))
                    }
                    for (this.videoTrack ? (o = this.videoTrack.timelineStartInfo.pts, vt.forEach(function(e) {
                            s.info[e] = this.videoTrack[e]
                        }, this)) : this.audioTrack && (o = this.audioTrack.timelineStartInfo.pts, yt.forEach(function(e) {
                            s.info[e] = this.audioTrack[e]
                        }, this)), 1 === this.pendingTracks.length ? s.type = this.pendingTracks[0].type : s.type = "combined", this.emittedTracks += this.pendingTracks.length, n = G.initSegment(this.pendingTracks), s.initSegment = new Uint8Array(n.byteLength), s.initSegment.set(n), s.data = new Uint8Array(this.pendingBytes), r = 0; r < this.pendingBoxes.length; r++) s.data.set(this.pendingBoxes[r], a), a += this.pendingBoxes[r].byteLength;
                    for (r = 0; r < this.pendingCaptions.length; r++)(t = this.pendingCaptions[r]).startTime = t.startPts, this.keepOriginalTimestamps || (t.startTime -= o), t.startTime /= 9e4, t.endTime = t.endPts, this.keepOriginalTimestamps || (t.endTime -= o), t.endTime /= 9e4, s.captionStreams[t.stream] = !0, s.captions.push(t);
                    for (r = 0; r < this.pendingMetadata.length; r++)(i = this.pendingMetadata[r]).cueTime = i.pts, this.keepOriginalTimestamps || (i.cueTime -= o), i.cueTime /= 9e4, s.metadata.push(i);
                    s.metadata.dispatchType = this.metadataStream.dispatchType, this.pendingTracks.length = 0, this.videoTrack = null, this.pendingBoxes.length = 0, this.pendingCaptions.length = 0, this.pendingBytes = 0, this.pendingMetadata.length = 0, this.trigger("data", s), this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0)
                }, (dt = function(n) {
                    var r, a, s = this,
                        i = !0;
                    dt.prototype.init.call(this), n = n || {}, this.baseMediaDecodeTime = n.baseMediaDecodeTime || 0, this.transmuxPipeline_ = {}, this.setupAacPipeline = function() {
                        var t = {};
                        (this.transmuxPipeline_ = t).type = "aac", t.metadataStream = new Je.MetadataStream, t.aacStream = new ft, t.audioTimestampRolloverStream = new Je.TimestampRolloverStream("audio"), t.timedMetadataTimestampRolloverStream = new Je.TimestampRolloverStream("timed-metadata"), t.adtsStream = new nt, t.coalesceStream = new pt(n, t.metadataStream), t.headOfPipeline = t.aacStream, t.aacStream.pipe(t.audioTimestampRolloverStream).pipe(t.adtsStream), t.aacStream.pipe(t.timedMetadataTimestampRolloverStream).pipe(t.metadataStream).pipe(t.coalesceStream), t.metadataStream.on("timestamp", function(e) {
                            t.aacStream.setTimestamp(e.timeStamp)
                        }), t.aacStream.on("data", function(e) {
                            "timed-metadata" !== e.type || t.audioSegmentStream || (a = a || {
                                timelineStartInfo: {
                                    baseMediaDecodeTime: s.baseMediaDecodeTime
                                },
                                codec: "adts",
                                type: "audio"
                            }, t.coalesceStream.numberOfTracks++, t.audioSegmentStream = new ht(a, n), t.adtsStream.pipe(t.audioSegmentStream).pipe(t.coalesceStream))
                        }), t.coalesceStream.on("data", this.trigger.bind(this, "data")), t.coalesceStream.on("done", this.trigger.bind(this, "done"))
                    }, this.setupTsPipeline = function() {
                        var i = {};
                        (this.transmuxPipeline_ = i).type = "ts", i.metadataStream = new Je.MetadataStream, i.packetStream = new Je.TransportPacketStream, i.parseStream = new Je.TransportParseStream, i.elementaryStream = new Je.ElementaryStream, i.videoTimestampRolloverStream = new Je.TimestampRolloverStream("video"), i.audioTimestampRolloverStream = new Je.TimestampRolloverStream("audio"), i.timedMetadataTimestampRolloverStream = new Je.TimestampRolloverStream("timed-metadata"), i.adtsStream = new nt, i.h264Stream = new mt, i.captionStream = new Je.CaptionStream, i.coalesceStream = new pt(n, i.metadataStream), i.headOfPipeline = i.packetStream, i.packetStream.pipe(i.parseStream).pipe(i.elementaryStream), i.elementaryStream.pipe(i.videoTimestampRolloverStream).pipe(i.h264Stream), i.elementaryStream.pipe(i.audioTimestampRolloverStream).pipe(i.adtsStream), i.elementaryStream.pipe(i.timedMetadataTimestampRolloverStream).pipe(i.metadataStream).pipe(i.coalesceStream), i.h264Stream.pipe(i.captionStream).pipe(i.coalesceStream), i.elementaryStream.on("data", function(e) {
                            var t;
                            if ("metadata" === e.type) {
                                for (t = e.tracks.length; t--;) r || "video" !== e.tracks[t].type ? a || "audio" !== e.tracks[t].type || ((a = e.tracks[t]).timelineStartInfo.baseMediaDecodeTime = s.baseMediaDecodeTime) : (r = e.tracks[t]).timelineStartInfo.baseMediaDecodeTime = s.baseMediaDecodeTime;
                                r && !i.videoSegmentStream && (i.coalesceStream.numberOfTracks++, i.videoSegmentStream = new ct(r, n), i.videoSegmentStream.on("timelineStartInfo", function(e) {
                                    a && (a.timelineStartInfo = e, i.audioSegmentStream.setEarliestDts(e.dts))
                                }), i.videoSegmentStream.on("processedGopsInfo", s.trigger.bind(s, "gopInfo")), i.videoSegmentStream.on("segmentTimingInfo", s.trigger.bind(s, "videoSegmentTimingInfo")), i.videoSegmentStream.on("baseMediaDecodeTime", function(e) {
                                    a && i.audioSegmentStream.setVideoBaseMediaDecodeTime(e)
                                }), i.h264Stream.pipe(i.videoSegmentStream).pipe(i.coalesceStream)), a && !i.audioSegmentStream && (i.coalesceStream.numberOfTracks++, i.audioSegmentStream = new ht(a, n), i.adtsStream.pipe(i.audioSegmentStream).pipe(i.coalesceStream))
                            }
                        }), i.coalesceStream.on("data", this.trigger.bind(this, "data")), i.coalesceStream.on("done", this.trigger.bind(this, "done"))
                    }, this.setBaseMediaDecodeTime = function(e) {
                        var t = this.transmuxPipeline_;
                        n.keepOriginalTimestamps || (this.baseMediaDecodeTime = e), a && (a.timelineStartInfo.dts = void 0, a.timelineStartInfo.pts = void 0, be(a), n.keepOriginalTimestamps || (a.timelineStartInfo.baseMediaDecodeTime = e), t.audioTimestampRolloverStream && t.audioTimestampRolloverStream.discontinuity()), r && (t.videoSegmentStream && (t.videoSegmentStream.gopCache_ = [], t.videoTimestampRolloverStream.discontinuity()), r.timelineStartInfo.dts = void 0, r.timelineStartInfo.pts = void 0, be(r), t.captionStream.reset(), n.keepOriginalTimestamps || (r.timelineStartInfo.baseMediaDecodeTime = e)), t.timedMetadataTimestampRolloverStream && t.timedMetadataTimestampRolloverStream.discontinuity()
                    }, this.setAudioAppendStart = function(e) {
                        a && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(e)
                    }, this.alignGopsWith = function(e) {
                        r && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(e)
                    }, this.push = function(e) {
                        if (i) {
                            var t = gt(e);
                            t && "aac" !== this.transmuxPipeline_.type ? this.setupAacPipeline() : t || "ts" === this.transmuxPipeline_.type || this.setupTsPipeline(), i = !1
                        }
                        this.transmuxPipeline_.headOfPipeline.push(e)
                    }, this.flush = function() {
                        i = !0, this.transmuxPipeline_.headOfPipeline.flush()
                    }, this.resetCaptions = function() {
                        this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset()
                    }
                }).prototype = new ne;
                var Tt, St, kt = {
                        Transmuxer: dt,
                        VideoSegmentStream: ct,
                        AudioSegmentStream: ht,
                        AUDIO_PROPERTIES: yt,
                        VIDEO_PROPERTIES: vt,
                        generateVideoSegmentTimingInfo: bt
                    },
                    Ct = Y.parseType,
                    wt = function(e) {
                        return new Date(1e3 * e - 20828448e5)
                    },
                    Et = function(e) {
                        return {
                            isLeading: (12 & e[0]) >>> 2,
                            dependsOn: 3 & e[0],
                            isDependedOn: (192 & e[1]) >>> 6,
                            hasRedundancy: (48 & e[1]) >>> 4,
                            paddingValue: (14 & e[1]) >>> 1,
                            isNonSyncSample: 1 & e[1],
                            degradationPriority: e[2] << 8 | e[3]
                        }
                    },
                    At = {
                        avc1: function(e) {
                            var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
                            return {
                                dataReferenceIndex: t.getUint16(6),
                                width: t.getUint16(24),
                                height: t.getUint16(26),
                                horizresolution: t.getUint16(28) + t.getUint16(30) / 16,
                                vertresolution: t.getUint16(32) + t.getUint16(34) / 16,
                                frameCount: t.getUint16(40),
                                depth: t.getUint16(74),
                                config: Tt(e.subarray(78, e.byteLength))
                            }
                        },
                        avcC: function(e) {
                            var t, i, n, r, a = new DataView(e.buffer, e.byteOffset, e.byteLength),
                                s = {
                                    configurationVersion: e[0],
                                    avcProfileIndication: e[1],
                                    profileCompatibility: e[2],
                                    avcLevelIndication: e[3],
                                    lengthSizeMinusOne: 3 & e[4],
                                    sps: [],
                                    pps: []
                                },
                                o = 31 & e[5];
                            for (n = 6, r = 0; r < o; r++) i = a.getUint16(n), n += 2, s.sps.push(new Uint8Array(e.subarray(n, n + i))), n += i;
                            for (t = e[n], n++, r = 0; r < t; r++) i = a.getUint16(n), n += 2, s.pps.push(new Uint8Array(e.subarray(n, n + i))), n += i;
                            return s
                        },
                        btrt: function(e) {
                            var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
                            return {
                                bufferSizeDB: t.getUint32(0),
                                maxBitrate: t.getUint32(4),
                                avgBitrate: t.getUint32(8)
                            }
                        },
                        esds: function(e) {
                            return {
                                version: e[0],
                                flags: new Uint8Array(e.subarray(1, 4)),
                                esId: e[6] << 8 | e[7],
                                streamPriority: 31 & e[8],
                                decoderConfig: {
                                    objectProfileIndication: e[11],
                                    streamType: e[12] >>> 2 & 63,
                                    bufferSize: e[13] << 16 | e[14] << 8 | e[15],
                                    maxBitrate: e[16] << 24 | e[17] << 16 | e[18] << 8 | e[19],
                                    avgBitrate: e[20] << 24 | e[21] << 16 | e[22] << 8 | e[23],
                                    decoderConfigDescriptor: {
                                        tag: e[24],
                                        length: e[25],
                                        audioObjectType: e[26] >>> 3 & 31,
                                        samplingFrequencyIndex: (7 & e[26]) << 1 | e[27] >>> 7 & 1,
                                        channelConfiguration: e[27] >>> 3 & 15
                                    }
                                }
                            }
                        },
                        ftyp: function(e) {
                            for (var t = new DataView(e.buffer, e.byteOffset, e.byteLength), i = {
                                    majorBrand: Ct(e.subarray(0, 4)),
                                    minorVersion: t.getUint32(4),
                                    compatibleBrands: []
                                }, n = 8; n < e.byteLength;) i.compatibleBrands.push(Ct(e.subarray(n, n + 4))), n += 4;
                            return i
                        },
                        dinf: function(e) {
                            return {
                                boxes: Tt(e)
                            }
                        },
                        dref: function(e) {
                            return {
                                version: e[0],
                                flags: new Uint8Array(e.subarray(1, 4)),
                                dataReferences: Tt(e.subarray(8))
                            }
                        },
                        hdlr: function(e) {
                            var t = {
                                    version: new DataView(e.buffer, e.byteOffset, e.byteLength).getUint8(0),
                                    flags: new Uint8Array(e.subarray(1, 4)),
                                    handlerType: Ct(e.subarray(8, 12)),
                                    name: ""
                                },
                                i = 8;
                            for (i = 24; i < e.byteLength; i++) {
                                if (0 === e[i]) {
                                    i++;
                                    break
                                }
                                t.name += String.fromCharCode(e[i])
                            }
                            return t.name = decodeURIComponent(escape(t.name)), t
                        },
                        mdat: function(e) {
                            return {
                                byteLength: e.byteLength,
                                nals: function(e) {
                                    var t, i, n = new DataView(e.buffer, e.byteOffset, e.byteLength),
                                        r = [];
                                    for (t = 0; t + 4 < e.length; t += i)
                                        if (i = n.getUint32(t), t += 4, i <= 0) r.push("<span style='color:red;'>MALFORMED DATA</span>");
                                        else switch (31 & e[t]) {
                                            case 1:
                                                r.push("slice_layer_without_partitioning_rbsp");
                                                break;
                                            case 5:
                                                r.push("slice_layer_without_partitioning_rbsp_idr");
                                                break;
                                            case 6:
                                                r.push("sei_rbsp");
                                                break;
                                            case 7:
                                                r.push("seq_parameter_set_rbsp");
                                                break;
                                            case 8:
                                                r.push("pic_parameter_set_rbsp");
                                                break;
                                            case 9:
                                                r.push("access_unit_delimiter_rbsp");
                                                break;
                                            default:
                                                r.push("UNKNOWN NAL - " + e[t] & 31)
                                        }
                                    return r
                                }(e)
                            }
                        },
                        mdhd: function(e) {
                            var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength),
                                n = 4,
                                r = {
                                    version: i.getUint8(0),
                                    flags: new Uint8Array(e.subarray(1, 4)),
                                    language: ""
                                };
                            return 1 === r.version ? (n += 4, r.creationTime = wt(i.getUint32(n)), n += 8, r.modificationTime = wt(i.getUint32(n)), n += 4, r.timescale = i.getUint32(n), n += 8) : (r.creationTime = wt(i.getUint32(n)), n += 4, r.modificationTime = wt(i.getUint32(n)), n += 4, r.timescale = i.getUint32(n), n += 4), r.duration = i.getUint32(n), n += 4, t = i.getUint16(n), r.language += String.fromCharCode(96 + (t >> 10)), r.language += String.fromCharCode(96 + ((992 & t) >> 5)), r.language += String.fromCharCode(96 + (31 & t)), r
                        },
                        mdia: function(e) {
                            return {
                                boxes: Tt(e)
                            }
                        },
                        mfhd: function(e) {
                            return {
                                version: e[0],
                                flags: new Uint8Array(e.subarray(1, 4)),
                                sequenceNumber: e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]
                            }
                        },
                        minf: function(e) {
                            return {
                                boxes: Tt(e)
                            }
                        },
                        mp4a: function(e) {
                            var t = new DataView(e.buffer, e.byteOffset, e.byteLength),
                                i = {
                                    dataReferenceIndex: t.getUint16(6),
                                    channelcount: t.getUint16(16),
                                    samplesize: t.getUint16(18),
                                    samplerate: t.getUint16(24) + t.getUint16(26) / 65536
                                };
                            return 28 < e.byteLength && (i.streamDescriptor = Tt(e.subarray(28))[0]), i
                        },
                        moof: function(e) {
                            return {
                                boxes: Tt(e)
                            }
                        },
                        moov: function(e) {
                            return {
                                boxes: Tt(e)
                            }
                        },
                        mvex: function(e) {
                            return {
                                boxes: Tt(e)
                            }
                        },
                        mvhd: function(e) {
                            var t = new DataView(e.buffer, e.byteOffset, e.byteLength),
                                i = 4,
                                n = {
                                    version: t.getUint8(0),
                                    flags: new Uint8Array(e.subarray(1, 4))
                                };
                            return 1 === n.version ? (i += 4, n.creationTime = wt(t.getUint32(i)), i += 8, n.modificationTime = wt(t.getUint32(i)), i += 4, n.timescale = t.getUint32(i), i += 8) : (n.creationTime = wt(t.getUint32(i)), i += 4, n.modificationTime = wt(t.getUint32(i)), i += 4, n.timescale = t.getUint32(i), i += 4), n.duration = t.getUint32(i), i += 4, n.rate = t.getUint16(i) + t.getUint16(i + 2) / 16, i += 4, n.volume = t.getUint8(i) + t.getUint8(i + 1) / 8, i += 2, i += 2, i += 8, n.matrix = new Uint32Array(e.subarray(i, i + 36)), i += 36, i += 24, n.nextTrackId = t.getUint32(i), n
                        },
                        pdin: function(e) {
                            var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
                            return {
                                version: t.getUint8(0),
                                flags: new Uint8Array(e.subarray(1, 4)),
                                rate: t.getUint32(4),
                                initialDelay: t.getUint32(8)
                            }
                        },
                        sdtp: function(e) {
                            var t, i = {
                                version: e[0],
                                flags: new Uint8Array(e.subarray(1, 4)),
                                samples: []
                            };
                            for (t = 4; t < e.byteLength; t++) i.samples.push({
                                dependsOn: (48 & e[t]) >> 4,
                                isDependedOn: (12 & e[t]) >> 2,
                                hasRedundancy: 3 & e[t]
                            });
                            return i
                        },
                        sidx: function(e) {
                            var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength),
                                n = {
                                    version: e[0],
                                    flags: new Uint8Array(e.subarray(1, 4)),
                                    references: [],
                                    referenceId: i.getUint32(4),
                                    timescale: i.getUint32(8),
                                    earliestPresentationTime: i.getUint32(12),
                                    firstOffset: i.getUint32(16)
                                },
                                r = i.getUint16(22);
                            for (t = 24; r; t += 12, r--) n.references.push({
                                referenceType: (128 & e[t]) >>> 7,
                                referencedSize: 2147483647 & i.getUint32(t),
                                subsegmentDuration: i.getUint32(t + 4),
                                startsWithSap: !!(128 & e[t + 8]),
                                sapType: (112 & e[t + 8]) >>> 4,
                                sapDeltaTime: 268435455 & i.getUint32(t + 8)
                            });
                            return n
                        },
                        smhd: function(e) {
                            return {
                                version: e[0],
                                flags: new Uint8Array(e.subarray(1, 4)),
                                balance: e[4] + e[5] / 256
                            }
                        },
                        stbl: function(e) {
                            return {
                                boxes: Tt(e)
                            }
                        },
                        stco: function(e) {
                            var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength),
                                n = {
                                    version: e[0],
                                    flags: new Uint8Array(e.subarray(1, 4)),
                                    chunkOffsets: []
                                },
                                r = i.getUint32(4);
                            for (t = 8; r; t += 4, r--) n.chunkOffsets.push(i.getUint32(t));
                            return n
                        },
                        stsc: function(e) {
                            var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength),
                                n = i.getUint32(4),
                                r = {
                                    version: e[0],
                                    flags: new Uint8Array(e.subarray(1, 4)),
                                    sampleToChunks: []
                                };
                            for (t = 8; n; t += 12, n--) r.sampleToChunks.push({
                                firstChunk: i.getUint32(t),
                                samplesPerChunk: i.getUint32(t + 4),
                                sampleDescriptionIndex: i.getUint32(t + 8)
                            });
                            return r
                        },
                        stsd: function(e) {
                            return {
                                version: e[0],
                                flags: new Uint8Array(e.subarray(1, 4)),
                                sampleDescriptions: Tt(e.subarray(8))
                            }
                        },
                        stsz: function(e) {
                            var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength),
                                n = {
                                    version: e[0],
                                    flags: new Uint8Array(e.subarray(1, 4)),
                                    sampleSize: i.getUint32(4),
                                    entries: []
                                };
                            for (t = 12; t < e.byteLength; t += 4) n.entries.push(i.getUint32(t));
                            return n
                        },
                        stts: function(e) {
                            var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength),
                                n = {
                                    version: e[0],
                                    flags: new Uint8Array(e.subarray(1, 4)),
                                    timeToSamples: []
                                },
                                r = i.getUint32(4);
                            for (t = 8; r; t += 8, r--) n.timeToSamples.push({
                                sampleCount: i.getUint32(t),
                                sampleDelta: i.getUint32(t + 4)
                            });
                            return n
                        },
                        styp: function(e) {
                            return At.ftyp(e)
                        },
                        tfdt: function(e) {
                            var t = {
                                version: e[0],
                                flags: new Uint8Array(e.subarray(1, 4)),
                                baseMediaDecodeTime: e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]
                            };
                            return 1 === t.version && (t.baseMediaDecodeTime *= Math.pow(2, 32), t.baseMediaDecodeTime += e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11]), t
                        },
                        tfhd: function(e) {
                            var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength),
                                n = {
                                    version: e[0],
                                    flags: new Uint8Array(e.subarray(1, 4)),
                                    trackId: i.getUint32(4)
                                },
                                r = 1 & n.flags[2],
                                a = 2 & n.flags[2],
                                s = 8 & n.flags[2],
                                o = 16 & n.flags[2],
                                u = 32 & n.flags[2],
                                l = 65536 & n.flags[0],
                                c = 131072 & n.flags[0];
                            return t = 8, r && (t += 4, n.baseDataOffset = i.getUint32(12), t += 4), a && (n.sampleDescriptionIndex = i.getUint32(t), t += 4), s && (n.defaultSampleDuration = i.getUint32(t), t += 4), o && (n.defaultSampleSize = i.getUint32(t), t += 4), u && (n.defaultSampleFlags = i.getUint32(t)), l && (n.durationIsEmpty = !0), !r && c && (n.baseDataOffsetIsMoof = !0), n
                        },
                        tkhd: function(e) {
                            var t = new DataView(e.buffer, e.byteOffset, e.byteLength),
                                i = 4,
                                n = {
                                    version: t.getUint8(0),
                                    flags: new Uint8Array(e.subarray(1, 4))
                                };
                            return 1 === n.version ? (i += 4, n.creationTime = wt(t.getUint32(i)), i += 8, n.modificationTime = wt(t.getUint32(i)), i += 4, n.trackId = t.getUint32(i), i += 4, i += 8) : (n.creationTime = wt(t.getUint32(i)), i += 4, n.modificationTime = wt(t.getUint32(i)), i += 4, n.trackId = t.getUint32(i), i += 4, i += 4), n.duration = t.getUint32(i), i += 4, i += 8, n.layer = t.getUint16(i), i += 2, n.alternateGroup = t.getUint16(i), i += 2, n.volume = t.getUint8(i) + t.getUint8(i + 1) / 8, i += 2, i += 2, n.matrix = new Uint32Array(e.subarray(i, i + 36)), i += 36, n.width = t.getUint16(i) + t.getUint16(i + 2) / 16, i += 4, n.height = t.getUint16(i) + t.getUint16(i + 2) / 16, n
                        },
                        traf: function(e) {
                            return {
                                boxes: Tt(e)
                            }
                        },
                        trak: function(e) {
                            return {
                                boxes: Tt(e)
                            }
                        },
                        trex: function(e) {
                            var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
                            return {
                                version: e[0],
                                flags: new Uint8Array(e.subarray(1, 4)),
                                trackId: t.getUint32(4),
                                defaultSampleDescriptionIndex: t.getUint32(8),
                                defaultSampleDuration: t.getUint32(12),
                                defaultSampleSize: t.getUint32(16),
                                sampleDependsOn: 3 & e[20],
                                sampleIsDependedOn: (192 & e[21]) >> 6,
                                sampleHasRedundancy: (48 & e[21]) >> 4,
                                samplePaddingValue: (14 & e[21]) >> 1,
                                sampleIsDifferenceSample: !!(1 & e[21]),
                                sampleDegradationPriority: t.getUint16(22)
                            }
                        },
                        trun: function(e) {
                            var t, i = {
                                    version: e[0],
                                    flags: new Uint8Array(e.subarray(1, 4)),
                                    samples: []
                                },
                                n = new DataView(e.buffer, e.byteOffset, e.byteLength),
                                r = 1 & i.flags[2],
                                a = 4 & i.flags[2],
                                s = 1 & i.flags[1],
                                o = 2 & i.flags[1],
                                u = 4 & i.flags[1],
                                l = 8 & i.flags[1],
                                c = n.getUint32(4),
                                h = 8;
                            for (r && (i.dataOffset = n.getInt32(h), h += 4), a && c && (t = {
                                    flags: Et(e.subarray(h, h + 4))
                                }, h += 4, s && (t.duration = n.getUint32(h), h += 4), o && (t.size = n.getUint32(h), h += 4), l && (t.compositionTimeOffset = n.getUint32(h), h += 4), i.samples.push(t), c--); c--;) t = {}, s && (t.duration = n.getUint32(h), h += 4), o && (t.size = n.getUint32(h), h += 4), u && (t.flags = Et(e.subarray(h, h + 4)), h += 4), l && (t.compositionTimeOffset = n.getUint32(h), h += 4), i.samples.push(t);
                            return i
                        },
                        "url ": function(e) {
                            return {
                                version: e[0],
                                flags: new Uint8Array(e.subarray(1, 4))
                            }
                        },
                        vmhd: function(e) {
                            var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
                            return {
                                version: e[0],
                                flags: new Uint8Array(e.subarray(1, 4)),
                                graphicsmode: t.getUint16(4),
                                opcolor: new Uint16Array([t.getUint16(6), t.getUint16(8), t.getUint16(10)])
                            }
                        }
                    },
                    Lt = {
                        inspect: Tt = function(e) {
                            for (var t, i, n, r, a, s = 0, o = [], u = new ArrayBuffer(e.length), l = new Uint8Array(u), c = 0; c < e.length; ++c) l[c] = e[c];
                            for (t = new DataView(u); s < e.byteLength;) i = t.getUint32(s), n = Ct(e.subarray(s + 4, s + 8)), r = 1 < i ? s + i : e.byteLength, (a = (At[n] || function(e) {
                                return {
                                    data: e
                                }
                            })(e.subarray(s + 8, r))).size = i, a.type = n, o.push(a), s = r;
                            return o
                        },
                        textify: St = function(e, t) {
                            var a;
                            return t = t || 0, a = new Array(2 * t + 1).join(" "), e.map(function(r, e) {
                                return a + r.type + "\n" + Object.keys(r).filter(function(e) {
                                    return "type" !== e && "boxes" !== e
                                }).map(function(e) {
                                    var t = a + "  " + e + ": ",
                                        i = r[e];
                                    if (i instanceof Uint8Array || i instanceof Uint32Array) {
                                        var n = Array.prototype.slice.call(new Uint8Array(i.buffer, i.byteOffset, i.byteLength)).map(function(e) {
                                            return " " + ("00" + e.toString(16)).slice(-2)
                                        }).join("").match(/.{1,24}/g);
                                        return n ? 1 === n.length ? t + "<" + n.join("").slice(1) + ">" : t + "<\n" + n.map(function(e) {
                                            return a + "  " + e
                                        }).join("\n") + "\n" + a + "  >" : t + "<>"
                                    }
                                    return t + JSON.stringify(i, null, 2).split("\n").map(function(e, t) {
                                        return 0 === t ? e : a + "  " + e
                                    }).join("\n")
                                }).join("\n") + (r.boxes ? "\n" + St(r.boxes, t + 1) : "")
                            }).join("\n")
                        },
                        parseTfdt: At.tfdt,
                        parseHdlr: At.hdlr,
                        parseTfhd: At.tfhd,
                        parseTrun: At.trun,
                        parseSidx: At.sidx
                    },
                    Pt = Ee,
                    Ot = De.CaptionStream,
                    It = function(e, t) {
                        for (var i = e, n = 0; n < t.length; n++) {
                            var r = t[n];
                            if (i < r.size) return r;
                            i -= r.size
                        }
                        return null
                    },
                    Ut = function(e, y) {
                        var n = Y.findBox(e, ["moof", "traf"]),
                            t = Y.findBox(e, ["mdat"]),
                            v = {},
                            r = [];
                        return t.forEach(function(e, t) {
                            var i = n[t];
                            r.push({
                                mdat: e,
                                traf: i
                            })
                        }), r.forEach(function(e) {
                            var t, i, n, r, a, s, o, u, l = e.mdat,
                                c = e.traf,
                                h = Y.findBox(c, ["tfhd"]),
                                d = Lt.parseTfhd(h[0]),
                                p = d.trackId,
                                f = Y.findBox(c, ["tfdt"]),
                                m = 0 < f.length ? Lt.parseTfdt(f[0]).baseMediaDecodeTime : 0,
                                g = Y.findBox(c, ["trun"]);
                            y === p && 0 < g.length && (i = g, r = m, a = (n = d).defaultSampleDuration || 0, s = n.defaultSampleSize || 0, o = n.trackId, u = [], i.forEach(function(e) {
                                var t = Lt.parseTrun(e).samples;
                                t.forEach(function(e) {
                                    void 0 === e.duration && (e.duration = a), void 0 === e.size && (e.size = s), e.trackId = o, e.dts = r, void 0 === e.compositionTimeOffset && (e.compositionTimeOffset = 0), e.pts = r + e.compositionTimeOffset, r += e.duration
                                }), u = u.concat(t)
                            }), t = function(e, t, i) {
                                var n, r, a, s, o = new DataView(e.buffer, e.byteOffset, e.byteLength),
                                    u = [];
                                for (r = 0; r + 4 < e.length; r += a)
                                    if (a = o.getUint32(r), r += 4, !(a <= 0)) switch (31 & e[r]) {
                                        case 6:
                                            var l = e.subarray(r + 1, r + 1 + a),
                                                c = It(r, t);
                                            n = {
                                                nalUnitType: "sei_rbsp",
                                                size: a,
                                                data: l,
                                                escapedRBSP: Pt(l),
                                                trackId: i
                                            }, c ? (n.pts = c.pts, n.dts = c.dts, s = c) : (n.pts = s.pts, n.dts = s.dts), u.push(n)
                                    }
                                return u
                            }(l, u, p), v[p] || (v[p] = []), v[p] = v[p].concat(t))
                        }), v
                    },
                    xt = {
                        generator: G,
                        probe: Y,
                        Transmuxer: kt.Transmuxer,
                        AudioSegmentStream: kt.AudioSegmentStream,
                        VideoSegmentStream: kt.VideoSegmentStream,
                        CaptionParser: function() {
                            var t, u, l, c, h, e = !1;
                            this.isInitialized = function() {
                                return e
                            }, this.init = function() {
                                t = new Ot, e = !0, t.on("data", function(e) {
                                    e.startTime = e.startPts / c, e.endTime = e.endPts / c, h.captions.push(e), h.captionStreams[e.stream] = !0
                                })
                            }, this.isNewInit = function(e, t) {
                                return !(e && 0 === e.length || t && "object" == typeof t && 0 === Object.keys(t).length || l === e[0] && c === t[l])
                            }, this.parse = function(e, t, i) {
                                var n, r, a, s;
                                if (!this.isInitialized()) return null;
                                if (!t || !i) return null;
                                if (this.isNewInit(t, i)) l = t[0], c = i[l];
                                else if (!l || !c) return u.push(e), null;
                                for (; 0 < u.length;) {
                                    var o = u.shift();
                                    this.parse(o, t, i)
                                }
                                return r = e, s = c, null !== (n = (a = l) ? {
                                    seiNals: Ut(r, a)[a],
                                    timescale: s
                                } : null) && n.seiNals ? (this.pushNals(n.seiNals), this.flushStream(), h) : null
                            }, this.pushNals = function(e) {
                                if (!this.isInitialized() || !e || 0 === e.length) return null;
                                e.forEach(function(e) {
                                    t.push(e)
                                })
                            }, this.flushStream = function() {
                                if (!this.isInitialized()) return null;
                                t.flush()
                            }, this.clearParsedCaptions = function() {
                                h.captions = [], h.captionStreams = {}
                            }, this.resetCaptionStream = function() {
                                if (!this.isInitialized()) return null;
                                t.reset()
                            }, this.clearAllCaptions = function() {
                                this.clearParsedCaptions(), this.resetCaptionStream()
                            }, this.reset = function() {
                                u = [], c = l = null, h ? this.clearParsedCaptions() : h = {
                                    captions: [],
                                    captionStreams: {}
                                }, this.resetCaptionStream()
                            }, this.reset()
                        }
                    },
                    Dt = function() {
                        function n(e, t) {
                            for (var i = 0; i < t.length; i++) {
                                var n = t[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                            }
                        }
                        return function(e, t, i) {
                            return t && n(e.prototype, t), i && n(e, i), e
                        }
                    }(),
                    Rt = function() {
                        function i(e, t) {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, i), this.options = t || {}, this.self = e, this.init()
                        }
                        return Dt(i, [{
                            key: "init",
                            value: function() {
                                var n, e;
                                this.transmuxer && this.transmuxer.dispose(), this.transmuxer = new xt.Transmuxer(this.options), n = this.self, (e = this.transmuxer).on("data", function(e) {
                                    var t = e.initSegment;
                                    e.initSegment = {
                                        data: t.buffer,
                                        byteOffset: t.byteOffset,
                                        byteLength: t.byteLength
                                    };
                                    var i = e.data;
                                    e.data = i.buffer, n.postMessage({
                                        action: "data",
                                        segment: e,
                                        byteOffset: i.byteOffset,
                                        byteLength: i.byteLength
                                    }, [e.data])
                                }), e.captionStream && e.captionStream.on("data", function(e) {
                                    n.postMessage({
                                        action: "caption",
                                        data: e
                                    })
                                }), e.on("done", function(e) {
                                    n.postMessage({
                                        action: "done"
                                    })
                                }), e.on("gopInfo", function(e) {
                                    n.postMessage({
                                        action: "gopInfo",
                                        gopInfo: e
                                    })
                                }), e.on("videoSegmentTimingInfo", function(e) {
                                    n.postMessage({
                                        action: "videoSegmentTimingInfo",
                                        videoSegmentTimingInfo: e
                                    })
                                })
                            }
                        }, {
                            key: "push",
                            value: function(e) {
                                var t = new Uint8Array(e.data, e.byteOffset, e.byteLength);
                                this.transmuxer.push(t)
                            }
                        }, {
                            key: "reset",
                            value: function() {
                                this.init()
                            }
                        }, {
                            key: "setTimestampOffset",
                            value: function(e) {
                                var t = e.timestampOffset || 0;
                                this.transmuxer.setBaseMediaDecodeTime(Math.round(9e4 * t))
                            }
                        }, {
                            key: "setAudioAppendStart",
                            value: function(e) {
                                this.transmuxer.setAudioAppendStart(Math.ceil(9e4 * e.appendStart))
                            }
                        }, {
                            key: "flush",
                            value: function(e) {
                                this.transmuxer.flush()
                            }
                        }, {
                            key: "resetCaptions",
                            value: function() {
                                this.transmuxer.resetCaptions()
                            }
                        }, {
                            key: "alignGopsWith",
                            value: function(e) {
                                this.transmuxer.alignGopsWith(e.gopsToAlignWith.slice())
                            }
                        }]), i
                    }();
                new function(t) {
                    t.onmessage = function(e) {
                        "init" === e.data.action && e.data.options ? this.messageHandlers = new Rt(t, e.data.options) : (this.messageHandlers || (this.messageHandlers = new Rt(t)), e.data && e.data.action && "init" !== e.data.action && this.messageHandlers[e.data.action] && this.messageHandlers[e.data.action](e.data))
                    }
                }(Mt)
            }()
        }),
        Sc = {
            videoCodec: "avc1",
            videoObjectTypeIndicator: ".4d400d",
            audioProfile: "2"
        },
        kc = function(e) {
            return e.map(function(e) {
                return e.replace(/avc1\.(\d+)\.(\d+)/i, function(e, t, i) {
                    return "avc1." + ("00" + Number(t).toString(16)).slice(-2) + "00" + ("00" + Number(i).toString(16)).slice(-2)
                })
            })
        },
        Cc = function() {
            var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                i = {
                    codecCount: 0
                };
            return i.codecCount = t.split(",").length, i.codecCount = i.codecCount || 2, (e = /(^|\s|,)+(avc[13])([^ ,]*)/i.exec(t)) && (i.videoCodec = e[2], i.videoObjectTypeIndicator = e[3]), i.audioProfile = /(^|\s|,)+mp4a.[0-9A-Fa-f]+\.([0-9A-Fa-f]+)/i.exec(t), i.audioProfile = i.audioProfile && i.audioProfile[2], i
        },
        wc = function(e, t, i) {
            return e + "/" + t + '; codecs="' + i.filter(function(e) {
                return !!e
            }).join(", ") + '"'
        },
        Ec = function(e, t) {
            var i, n, r = (i = t).segments && i.segments.length && i.segments[0].map ? "mp4" : "mp2t",
                a = (n = t.attributes || {}).CODECS ? Cc(n.CODECS) : Sc,
                s = t.attributes || {},
                o = !0,
                u = !1;
            if (!t) return [];
            if (e.mediaGroups.AUDIO && s.AUDIO) {
                var l = e.mediaGroups.AUDIO[s.AUDIO];
                if (l)
                    for (var c in o = !(u = !0), l)
                        if (!l[c].uri && !l[c].playlists) {
                            o = !0;
                            break
                        }
            }
            u && !a.audioProfile && (o || (a.audioProfile = function(e, t) {
                if (!e.mediaGroups.AUDIO || !t) return null;
                var i = e.mediaGroups.AUDIO[t];
                if (!i) return null;
                for (var n in i) {
                    var r = i[n];
                    if (r.default && r.playlists) return Cc(r.playlists[0].attributes.CODECS).audioProfile
                }
                return null
            }(e, s.AUDIO)), a.audioProfile || (da.log.warn("Multiple audio tracks present but no audio codec string is specified. Attempting to use the default audio codec (mp4a.40.2)"), a.audioProfile = Sc.audioProfile));
            var h = {};
            a.videoCodec && (h.video = "" + a.videoCodec + a.videoObjectTypeIndicator), a.audioProfile && (h.audio = "mp4a.40." + a.audioProfile);
            var d = wc("audio", r, [h.audio]),
                p = wc("video", r, [h.video]),
                f = wc("video", r, [h.video, h.audio]);
            return u ? !o && h.video ? [p, d] : o || h.video ? [f, d] : [d, d] : h.video ? [f] : [d]
        },
        Ac = function(e) {
            return /mp4a\.\d+.\d+/i.test(e)
        },
        Lc = function(e) {
            return /avc1\.[\da-f]+/i.test(e)
        },
        Pc = function(e) {
            function r(e, t) {
                fl(this, r);
                var i = yl(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, da.EventTarget));
                i.timestampOffset_ = 0, i.pendingBuffers_ = [], i.bufferUpdating_ = !1, i.mediaSource_ = e, i.codecs_ = t, i.audioCodec_ = null, i.videoCodec_ = null, i.audioDisabled_ = !1, i.appendAudioInitSegment_ = !0, i.gopBuffer_ = [], i.timeMapping_ = 0, i.safeAppend_ = 11 <= da.browser.IE_VERSION;
                var n = {
                    remux: !1,
                    alignGopsAtEnd: i.safeAppend_
                };
                return i.codecs_.forEach(function(e) {
                    Ac(e) ? i.audioCodec_ = e : Lc(e) && (i.videoCodec_ = e)
                }), i.transmuxer_ = new Tc, i.transmuxer_.postMessage({
                    action: "init",
                    options: n
                }), i.transmuxer_.onmessage = function(e) {
                    return "data" === e.data.action ? i.data_(e) : "done" === e.data.action ? i.done_(e) : "gopInfo" === e.data.action ? i.appendGopInfo_(e) : "videoSegmentTimingInfo" === e.data.action ? i.videoSegmentTimingInfo_(e.data.videoSegmentTimingInfo) : void 0
                }, Object.defineProperty(i, "timestampOffset", {
                    get: function() {
                        return this.timestampOffset_
                    },
                    set: function(e) {
                        "number" == typeof e && 0 <= e && (this.timestampOffset_ = e, this.appendAudioInitSegment_ = !0, this.gopBuffer_.length = 0, this.timeMapping_ = 0, this.transmuxer_.postMessage({
                            action: "setTimestampOffset",
                            timestampOffset: e
                        }))
                    }
                }), Object.defineProperty(i, "appendWindowStart", {
                    get: function() {
                        return (this.videoBuffer_ || this.audioBuffer_).appendWindowStart
                    },
                    set: function(e) {
                        this.videoBuffer_ && (this.videoBuffer_.appendWindowStart = e), this.audioBuffer_ && (this.audioBuffer_.appendWindowStart = e)
                    }
                }), Object.defineProperty(i, "updating", {
                    get: function() {
                        return !!(this.bufferUpdating_ || !this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.updating || this.videoBuffer_ && this.videoBuffer_.updating)
                    }
                }), Object.defineProperty(i, "buffered", {
                    get: function() {
                        return function(e, t, i) {
                            var n = null,
                                r = null,
                                a = 0,
                                s = [],
                                o = [];
                            if (!e && !t) return da.createTimeRange();
                            if (!e) return t.buffered;
                            if (!t) return e.buffered;
                            if (i) return e.buffered;
                            if (0 === e.buffered.length && 0 === t.buffered.length) return da.createTimeRange();
                            for (var u = e.buffered, l = t.buffered, c = u.length; c--;) s.push({
                                time: u.start(c),
                                type: "start"
                            }), s.push({
                                time: u.end(c),
                                type: "end"
                            });
                            for (c = l.length; c--;) s.push({
                                time: l.start(c),
                                type: "start"
                            }), s.push({
                                time: l.end(c),
                                type: "end"
                            });
                            for (s.sort(function(e, t) {
                                    return e.time - t.time
                                }), c = 0; c < s.length; c++) "start" === s[c].type ? 2 == ++a && (n = s[c].time) : "end" === s[c].type && 1 == --a && (r = s[c].time), null !== n && null !== r && (o.push([n, r]), r = n = null);
                            return da.createTimeRanges(o)
                        }(this.videoBuffer_, this.audioBuffer_, this.audioDisabled_)
                    }
                }), i
            }
            return gl(r, da.EventTarget), ml(r, [{
                key: "data_",
                value: function(e) {
                    var t = e.data.segment;
                    t.data = new Uint8Array(t.data, e.data.byteOffset, e.data.byteLength), t.initSegment = new Uint8Array(t.initSegment.data, t.initSegment.byteOffset, t.initSegment.byteLength),
                        function(e, t, i) {
                            var n = t.player_;
                            if (i.captions && i.captions.length)
                                for (var r in e.inbandTextTracks_ || (e.inbandTextTracks_ = {}), i.captionStreams)
                                    if (!e.inbandTextTracks_[r]) {
                                        n.tech_.trigger({
                                            type: "usage",
                                            name: "hls-608"
                                        });
                                        var a = n.textTracks().getTrackById(r);
                                        e.inbandTextTracks_[r] = a || n.addRemoteTextTrack({
                                            kind: "captions",
                                            id: r,
                                            label: r
                                        }, !1).track
                                    } i.metadata && i.metadata.length && !e.metadataTrack_ && (e.metadataTrack_ = n.addRemoteTextTrack({
                                kind: "metadata",
                                label: "Timed Metadata"
                            }, !1).track, e.metadataTrack_.inBandMetadataTrackDispatchType = i.metadata.dispatchType)
                        }(this, this.mediaSource_, t), this.pendingBuffers_.push(t)
                }
            }, {
                key: "done_",
                value: function(e) {
                    "closed" !== this.mediaSource_.readyState ? this.processPendingSegments_() : this.pendingBuffers_.length = 0
                }
            }, {
                key: "videoSegmentTimingInfo_",
                value: function(e) {
                    var t = {
                        start: {
                            decode: e.start.dts / 9e4,
                            presentation: e.start.pts / 9e4
                        },
                        end: {
                            decode: e.end.dts / 9e4,
                            presentation: e.end.pts / 9e4
                        },
                        baseMediaDecodeTime: e.baseMediaDecodeTime / 9e4
                    };
                    e.prependedContentDuration && (t.prependedContentDuration = e.prependedContentDuration / 9e4), this.trigger({
                        type: "videoSegmentTimingInfo",
                        videoSegmentTimingInfo: t
                    })
                }
            }, {
                key: "createRealSourceBuffers_",
                value: function() {
                    var n = this,
                        r = ["audio", "video"];
                    r.forEach(function(t) {
                        if (n[t + "Codec_"] && !n[t + "Buffer_"]) {
                            var i = null;
                            if (n.mediaSource_[t + "Buffer_"])(i = n.mediaSource_[t + "Buffer_"]).updating = !1;
                            else {
                                var e = t + '/mp4;codecs="' + n[t + "Codec_"] + '"';
                                i = function(e, t) {
                                    var i = e.addSourceBuffer(t),
                                        n = Object.create(null);
                                    n.updating = !1, n.realBuffer_ = i;
                                    var r = function(t) {
                                        "function" == typeof i[t] ? n[t] = function() {
                                            return i[t].apply(i, arguments)
                                        } : "undefined" == typeof n[t] && Object.defineProperty(n, t, {
                                            get: function() {
                                                return i[t]
                                            },
                                            set: function(e) {
                                                return i[t] = e
                                            }
                                        })
                                    };
                                    for (var a in i) r(a);
                                    return n
                                }(n.mediaSource_.nativeMediaSource_, e), n.mediaSource_[t + "Buffer_"] = i
                            }
                            n[t + "Buffer_"] = i, ["update", "updatestart", "updateend"].forEach(function(e) {
                                i.addEventListener(e, function() {
                                    if ("audio" !== t || !n.audioDisabled_) return "updateend" === e && (n[t + "Buffer_"].updating = !1), r.every(function(e) {
                                        return !("audio" !== e || !n.audioDisabled_) || (t === e || !n[e + "Buffer_"] || !n[e + "Buffer_"].updating)
                                    }) ? n.trigger(e) : void 0
                                })
                            })
                        }
                    })
                }
            }, {
                key: "appendBuffer",
                value: function(e) {
                    if (this.bufferUpdating_ = !0, this.audioBuffer_ && this.audioBuffer_.buffered.length) {
                        var t = this.audioBuffer_.buffered;
                        this.transmuxer_.postMessage({
                            action: "setAudioAppendStart",
                            appendStart: t.end(t.length - 1)
                        })
                    }
                    this.videoBuffer_ && this.transmuxer_.postMessage({
                        action: "alignGopsWith",
                        gopsToAlignWith: function(e, t, i) {
                            if ("undefined" == typeof t || null === t || !e.length) return [];
                            var n = Math.ceil(9e4 * (t - i + 3)),
                                r = void 0;
                            for (r = 0; r < e.length && !(e[r].pts > n); r++);
                            return e.slice(r)
                        }(this.gopBuffer_, this.mediaSource_.player_ ? this.mediaSource_.player_.currentTime() : null, this.timeMapping_)
                    }), this.transmuxer_.postMessage({
                        action: "push",
                        data: e.buffer,
                        byteOffset: e.byteOffset,
                        byteLength: e.byteLength
                    }, [e.buffer]), this.transmuxer_.postMessage({
                        action: "flush"
                    })
                }
            }, {
                key: "appendGopInfo_",
                value: function(e) {
                    this.gopBuffer_ = function(e, t, i) {
                        if (!t.length) return e;
                        if (i) return t.slice();
                        for (var n = t[0].pts, r = 0; r < e.length && !(e[r].pts >= n); r++);
                        return e.slice(0, r).concat(t)
                    }(this.gopBuffer_, e.data.gopInfo, this.safeAppend_)
                }
            }, {
                key: "remove",
                value: function(e, t) {
                    if (this.videoBuffer_ && (this.videoBuffer_.updating = !0, this.videoBuffer_.remove(e, t), this.gopBuffer_ = function(e, t, i, n) {
                            for (var r = Math.ceil(9e4 * (t - n)), a = Math.ceil(9e4 * (i - n)), s = e.slice(), o = e.length; o-- && !(e[o].pts <= a););
                            if (-1 === o) return s;
                            for (var u = o + 1; u-- && !(e[u].pts <= r););
                            return u = Math.max(u, 0), s.splice(u, o - u + 1), s
                        }(this.gopBuffer_, e, t, this.timeMapping_)), !this.audioDisabled_ && this.audioBuffer_ && (this.audioBuffer_.updating = !0, this.audioBuffer_.remove(e, t)), oc(e, t, this.metadataTrack_), this.inbandTextTracks_)
                        for (var i in this.inbandTextTracks_) oc(e, t, this.inbandTextTracks_[i])
                }
            }, {
                key: "processPendingSegments_",
                value: function() {
                    var e = {
                        video: {
                            segments: [],
                            bytes: 0
                        },
                        audio: {
                            segments: [],
                            bytes: 0
                        },
                        captions: [],
                        metadata: []
                    };
                    e = this.pendingBuffers_.reduce(function(e, t) {
                        var i = t.type,
                            n = t.data,
                            r = t.initSegment;
                        return e[i].segments.push(n), e[i].bytes += n.byteLength, e[i].initSegment = r, t.captions && (e.captions = e.captions.concat(t.captions)), t.info && (e[i].info = t.info), t.metadata && (e.metadata = e.metadata.concat(t.metadata)), e
                    }, e), this.videoBuffer_ || this.audioBuffer_ || (0 === e.video.bytes && (this.videoCodec_ = null), 0 === e.audio.bytes && (this.audioCodec_ = null), this.createRealSourceBuffers_()), e.audio.info && this.mediaSource_.trigger({
                        type: "audioinfo",
                        info: e.audio.info
                    }), e.video.info && this.mediaSource_.trigger({
                        type: "videoinfo",
                        info: e.video.info
                    }), this.appendAudioInitSegment_ && (!this.audioDisabled_ && this.audioBuffer_ && (e.audio.segments.unshift(e.audio.initSegment), e.audio.bytes += e.audio.initSegment.byteLength), this.appendAudioInitSegment_ = !1);
                    var t = !1;
                    this.videoBuffer_ && e.video.bytes ? (e.video.segments.unshift(e.video.initSegment), e.video.bytes += e.video.initSegment.byteLength, this.concatAndAppendSegments_(e.video, this.videoBuffer_)) : !this.videoBuffer_ || !this.audioDisabled_ && this.audioBuffer_ || (t = !0), lc(this, e.captions, e.metadata), !this.audioDisabled_ && this.audioBuffer_ && this.concatAndAppendSegments_(e.audio, this.audioBuffer_), this.pendingBuffers_.length = 0, t && this.trigger("updateend"), this.bufferUpdating_ = !1
                }
            }, {
                key: "concatAndAppendSegments_",
                value: function(e, t) {
                    var i = 0,
                        n = void 0;
                    if (e.bytes) {
                        n = new Uint8Array(e.bytes), e.segments.forEach(function(e) {
                            n.set(e, i), i += e.byteLength
                        });
                        try {
                            t.updating = !0, t.appendBuffer(n)
                        } catch (e) {
                            this.mediaSource_.player_ && this.mediaSource_.player_.error({
                                code: -3,
                                type: "APPEND_BUFFER_ERR",
                                message: e.message,
                                originalError: e
                            })
                        }
                    }
                }
            }, {
                key: "abort",
                value: function() {
                    this.videoBuffer_ && this.videoBuffer_.abort(), !this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.abort(), this.transmuxer_ && this.transmuxer_.postMessage({
                        action: "reset"
                    }), this.pendingBuffers_.length = 0, this.bufferUpdating_ = !1
                }
            }]), r
        }(),
        Oc = function(e) {
            function t() {
                fl(this, t);
                var a = yl(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)),
                    e = void 0;
                for (e in a.nativeMediaSource_ = new v.MediaSource, a.nativeMediaSource_) e in t.prototype || "function" != typeof a.nativeMediaSource_[e] || (a[e] = a.nativeMediaSource_[e].bind(a.nativeMediaSource_));
                return a.duration_ = NaN, Object.defineProperty(a, "duration", {
                    get: function() {
                        return this.duration_ === 1 / 0 ? this.duration_ : this.nativeMediaSource_.duration
                    },
                    set: function(e) {
                        (this.duration_ = e) === 1 / 0 || (this.nativeMediaSource_.duration = e)
                    }
                }), Object.defineProperty(a, "seekable", {
                    get: function() {
                        return this.duration_ === 1 / 0 ? da.createTimeRanges([
                            [0, this.nativeMediaSource_.duration]
                        ]) : this.nativeMediaSource_.seekable
                    }
                }), Object.defineProperty(a, "readyState", {
                    get: function() {
                        return this.nativeMediaSource_.readyState
                    }
                }), Object.defineProperty(a, "activeSourceBuffers", {
                    get: function() {
                        return this.activeSourceBuffers_
                    }
                }), a.sourceBuffers = [], a.activeSourceBuffers_ = [], a.updateActiveSourceBuffers_ = function() {
                    if (a.activeSourceBuffers_.length = 0, 1 === a.sourceBuffers.length) {
                        var e = a.sourceBuffers[0];
                        return e.appendAudioInitSegment_ = !0, e.audioDisabled_ = !e.audioCodec_, void a.activeSourceBuffers_.push(e)
                    }
                    for (var i = !1, n = !0, t = 0; t < a.player_.audioTracks().length; t++) {
                        var r = a.player_.audioTracks()[t];
                        if (r.enabled && "main" !== r.kind) {
                            n = !(i = !0);
                            break
                        }
                    }
                    a.sourceBuffers.forEach(function(e, t) {
                        if (e.appendAudioInitSegment_ = !0, e.videoCodec_ && e.audioCodec_) e.audioDisabled_ = i;
                        else if (e.videoCodec_ && !e.audioCodec_) e.audioDisabled_ = !0, n = !1;
                        else if (!e.videoCodec_ && e.audioCodec_ && (e.audioDisabled_ = t ? n : !n, e.audioDisabled_)) return;
                        a.activeSourceBuffers_.push(e)
                    })
                }, a.onPlayerMediachange_ = function() {
                    a.sourceBuffers.forEach(function(e) {
                        e.appendAudioInitSegment_ = !0
                    })
                }, a.onHlsReset_ = function() {
                    a.sourceBuffers.forEach(function(e) {
                        e.transmuxer_ && e.transmuxer_.postMessage({
                            action: "resetCaptions"
                        })
                    })
                }, a.onHlsSegmentTimeMapping_ = function(t) {
                    a.sourceBuffers.forEach(function(e) {
                        return e.timeMapping_ = t.mapping
                    })
                }, ["sourceopen", "sourceclose", "sourceended"].forEach(function(e) {
                    this.nativeMediaSource_.addEventListener(e, this.trigger.bind(this))
                }, a), a.on("sourceopen", function(e) {
                    var t = h.querySelector('[src="' + a.url_ + '"]');
                    t && (a.player_ = da(t.parentNode), a.player_ && (a.player_.tech_.on("hls-reset", a.onHlsReset_), a.player_.tech_.on("hls-segment-time-mapping", a.onHlsSegmentTimeMapping_), a.player_.audioTracks && a.player_.audioTracks() && (a.player_.audioTracks().on("change", a.updateActiveSourceBuffers_), a.player_.audioTracks().on("addtrack", a.updateActiveSourceBuffers_), a.player_.audioTracks().on("removetrack", a.updateActiveSourceBuffers_)), a.player_.on("mediachange", a.onPlayerMediachange_)))
                }), a.on("sourceended", function(e) {
                    for (var t = uc(a.duration), i = 0; i < a.sourceBuffers.length; i++) {
                        var n = a.sourceBuffers[i],
                            r = n.metadataTrack_ && n.metadataTrack_.cues;
                        r && r.length && (r[r.length - 1].endTime = t)
                    }
                }), a.on("sourceclose", function(e) {
                    this.sourceBuffers.forEach(function(e) {
                        e.transmuxer_ && e.transmuxer_.terminate()
                    }), this.sourceBuffers.length = 0, this.player_ && (this.player_.audioTracks && this.player_.audioTracks() && (this.player_.audioTracks().off("change", this.updateActiveSourceBuffers_), this.player_.audioTracks().off("addtrack", this.updateActiveSourceBuffers_), this.player_.audioTracks().off("removetrack", this.updateActiveSourceBuffers_)), this.player_.el_ && this.player_.off("mediachange", this.onPlayerMediachange_), this.player_.tech_ && this.player_.tech_.el_ && (this.player_.tech_.off("hls-reset", this.onHlsReset_), this.player_.tech_.off("hls-segment-time-mapping", this.onHlsSegmentTimeMapping_)))
                }), a
            }
            return gl(t, da.EventTarget), ml(t, [{
                key: "addSeekableRange_",
                value: function(e, t) {
                    var i = void 0;
                    if (this.duration !== 1 / 0) throw (i = new Error("MediaSource.addSeekableRange() can only be invoked when the duration is Infinity")).name = "InvalidStateError", i.code = 11, i;
                    (t > this.nativeMediaSource_.duration || isNaN(this.nativeMediaSource_.duration)) && (this.nativeMediaSource_.duration = t)
                }
            }, {
                key: "addSourceBuffer",
                value: function(e) {
                    var r, t, i = void 0,
                        n = (r = {
                            type: "",
                            parameters: {}
                        }, t = e.trim().split(";"), r.type = t.shift().trim(), t.forEach(function(e) {
                            var t = e.trim().split("=");
                            if (1 < t.length) {
                                var i = t[0].replace(/"/g, "").trim(),
                                    n = t[1].replace(/"/g, "").trim();
                                r.parameters[i] = n
                            }
                        }), r);
                    if (/^(video|audio)\/mp2t$/i.test(n.type)) {
                        var a = [];
                        n.parameters && n.parameters.codecs && (a = n.parameters.codecs.split(","), a = (a = kc(a)).filter(function(e) {
                            return Ac(e) || Lc(e)
                        })), 0 === a.length && (a = ["avc1.4d400d", "mp4a.40.2"]), i = new Pc(this, a), 0 !== this.sourceBuffers.length && (this.sourceBuffers[0].createRealSourceBuffers_(), i.createRealSourceBuffers_(), this.sourceBuffers[0].audioDisabled_ = !0)
                    } else i = this.nativeMediaSource_.addSourceBuffer(e);
                    return this.sourceBuffers.push(i), i
                }
            }]), t
        }(),
        Ic = 0;
    da.mediaSources = {};
    var Uc = function(e, t) {
            var i = da.mediaSources[e];
            if (!i) throw new Error("Media Source not found (Video.js)");
            i.trigger({
                type: "sourceopen",
                swfId: t
            })
        },
        xc = function() {
            return !!v.MediaSource && !!v.MediaSource.isTypeSupported && v.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')
        },
        Dc = function() {
            if (this.MediaSource = {
                    open: Uc,
                    supportsNativeMediaSources: xc
                }, xc()) return new Oc;
            throw new Error("Cannot use create a virtual MediaSource for this video")
        };
    Dc.open = Uc, Dc.supportsNativeMediaSources = xc;
    var Rc = {
        createObjectURL: function(e) {
            var t = void 0;
            return e instanceof Oc ? (t = v.URL.createObjectURL(e.nativeMediaSource_), e.url_ = t) : e instanceof Oc ? (t = "blob:vjs-media-source/" + Ic, Ic++, da.mediaSources[t] = e, t) : (t = v.URL.createObjectURL(e), e.url_ = t)
        }
    };
    da.MediaSource = Dc, da.URL = Rc;
    var Mc = da.EventTarget,
        Bc = da.mergeOptions,
        Nc = function(e, t) {
            for (var s = void 0, o = Bc(e, {
                    duration: t.duration,
                    minimumUpdatePeriod: t.minimumUpdatePeriod
                }), i = 0; i < t.playlists.length; i++) {
                var n = kl(o, t.playlists[i]);
                n ? o = n : s = !0
            }
            return Sl(t, function(e, t, i, n) {
                if (e.playlists && e.playlists.length) {
                    var r = e.playlists[0].uri,
                        a = kl(o, e.playlists[0]);
                    a && ((o = a).mediaGroups[t][i][n].playlists[0] = o.playlists[r], s = !1)
                }
            }), s ? null : o
        },
        jc = function(e) {
            function l(e, t) {
                var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                    n = arguments[3];
                fl(this, l);
                var r = yl(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this)),
                    a = i.withCredentials,
                    s = void 0 !== a && a,
                    o = i.handleManifestRedirects,
                    u = void 0 !== o && o;
                if (r.hls_ = t, r.withCredentials = s, r.handleManifestRedirects = u, !e) throw new Error("A non-empty playlist URL or playlist is required");
                return r.on("minimumUpdatePeriod", function() {
                    r.refreshXml_()
                }), r.on("mediaupdatetimeout", function() {
                    r.refreshMedia_()
                }), r.state = "HAVE_NOTHING", r.loadedPlaylists_ = {}, "string" == typeof e ? (r.srcUrl = e, yl(r)) : (r.setupChildLoader(n, e), r)
            }
            return gl(l, Mc), ml(l, [{
                key: "setupChildLoader",
                value: function(e, t) {
                    this.masterPlaylistLoader_ = e, this.childPlaylist_ = t
                }
            }, {
                key: "dispose",
                value: function() {
                    this.stopRequest(), this.loadedPlaylists_ = {}, v.clearTimeout(this.mediaUpdateTimeout)
                }
            }, {
                key: "hasPendingRequest",
                value: function() {
                    return this.request || this.mediaRequest_
                }
            }, {
                key: "stopRequest",
                value: function() {
                    if (this.request) {
                        var e = this.request;
                        this.request = null, e.onreadystatechange = null, e.abort()
                    }
                }
            }, {
                key: "media",
                value: function(e) {
                    if (!e) return this.media_;
                    if ("HAVE_NOTHING" === this.state) throw new Error("Cannot switch media playlist from " + this.state);
                    var t = this.state;
                    if ("string" == typeof e) {
                        if (!this.master.playlists[e]) throw new Error("Unknown playlist URI: " + e);
                        e = this.master.playlists[e]
                    }
                    var i = !this.media_ || e.uri !== this.media_.uri;
                    if (i && this.loadedPlaylists_[e.uri] && this.loadedPlaylists_[e.uri].endList) return this.state = "HAVE_METADATA", this.media_ = e, void(i && (this.trigger("mediachanging"), this.trigger("mediachange")));
                    i && (this.media_ && this.trigger("mediachanging"), this.mediaRequest_ = v.setTimeout(this.haveMetadata.bind(this, {
                        startingState: t,
                        playlist: e
                    }), 0))
                }
            }, {
                key: "haveMetadata",
                value: function(e) {
                    var t = e.startingState,
                        i = e.playlist;
                    this.state = "HAVE_METADATA", this.media_ = i, this.loadedPlaylists_[i.uri] = i, this.mediaRequest_ = null, this.refreshMedia_(), "HAVE_MASTER" === t ? this.trigger("loadedmetadata") : this.trigger("mediachange")
                }
            }, {
                key: "pause",
                value: function() {
                    this.stopRequest(), v.clearTimeout(this.mediaUpdateTimeout), "HAVE_NOTHING" === this.state && (this.started = !1)
                }
            }, {
                key: "load",
                value: function(e) {
                    var t = this;
                    v.clearTimeout(this.mediaUpdateTimeout);
                    var i = this.media();
                    if (e) {
                        var n = i ? i.targetDuration / 2 * 1e3 : 5e3;
                        this.mediaUpdateTimeout = v.setTimeout(function() {
                            return t.load()
                        }, n)
                    } else this.started ? this.trigger("loadedplaylist") : this.start()
                }
            }, {
                key: "parseMasterXml",
                value: function() {
                    var a = ds(this.masterXml_, {
                        manifestUri: this.srcUrl,
                        clientOffset: this.clientOffset_
                    });
                    a.uri = this.srcUrl;
                    for (var e = 0; e < a.playlists.length; e++) {
                        var t = "placeholder-uri-" + e;
                        a.playlists[e].uri = t, a.playlists[t] = a.playlists[e]
                    }
                    return Sl(a, function(e, t, i, n) {
                        if (e.playlists && e.playlists.length) {
                            var r = "placeholder-uri-" + t + "-" + i + "-" + n;
                            e.playlists[0].uri = r, a.playlists[r] = e.playlists[0]
                        }
                    }), Cl(a), wl(a), a
                }
            }, {
                key: "start",
                value: function() {
                    var i = this;
                    this.started = !0, this.masterPlaylistLoader_ ? this.mediaRequest_ = v.setTimeout(this.haveMaster_.bind(this), 0) : this.request = this.hls_.xhr({
                        uri: this.srcUrl,
                        withCredentials: this.withCredentials
                    }, function(e, t) {
                        if (i.request) {
                            if (i.request = null, e) return i.error = {
                                status: t.status,
                                message: "DASH playlist request error at URL: " + i.srcUrl,
                                responseText: t.responseText,
                                code: 2
                            }, "HAVE_NOTHING" === i.state && (i.started = !1), i.trigger("error");
                            i.masterXml_ = t.responseText, t.responseHeaders && t.responseHeaders.date ? i.masterLoaded_ = Date.parse(t.responseHeaders.date) : i.masterLoaded_ = Date.now(), i.srcUrl = pl(i.handleManifestRedirects, i.srcUrl, t), i.syncClientServerClock_(i.onClientServerClockSync_.bind(i))
                        }
                    })
                }
            }, {
                key: "syncClientServerClock_",
                value: function(n) {
                    var r = this,
                        a = ps(this.masterXml_);
                    return null === a ? (this.clientOffset_ = this.masterLoaded_ - Date.now(), n()) : "DIRECT" === a.method ? (this.clientOffset_ = a.value - Date.now(), n()) : void(this.request = this.hls_.xhr({
                        uri: dl(this.srcUrl, a.value),
                        method: a.method,
                        withCredentials: this.withCredentials
                    }, function(e, t) {
                        if (r.request) {
                            if (e) return r.clientOffset_ = r.masterLoaded_ - Date.now(), n();
                            var i = void 0;
                            i = "HEAD" === a.method ? t.responseHeaders && t.responseHeaders.date ? Date.parse(t.responseHeaders.date) : r.masterLoaded_ : Date.parse(t.responseText), r.clientOffset_ = i - Date.now(), n()
                        }
                    }))
                }
            }, {
                key: "haveMaster_",
                value: function() {
                    this.state = "HAVE_MASTER", this.mediaRequest_ = null, this.masterPlaylistLoader_ ? this.media_ || this.media(this.childPlaylist_) : (this.master = this.parseMasterXml(), this.trigger("loadedplaylist"))
                }
            }, {
                key: "onClientServerClockSync_",
                value: function() {
                    var e = this;
                    this.haveMaster_(), this.hasPendingRequest() || this.media_ || this.media(this.master.playlists[0]), this.master && this.master.minimumUpdatePeriod && v.setTimeout(function() {
                        e.trigger("minimumUpdatePeriod")
                    }, this.master.minimumUpdatePeriod)
                }
            }, {
                key: "refreshXml_",
                value: function() {
                    var r = this;
                    this.request = this.hls_.xhr({
                        uri: this.srcUrl,
                        withCredentials: this.withCredentials
                    }, function(e, t) {
                        if (r.request) {
                            if (r.request = null, e) return r.error = {
                                status: t.status,
                                message: "DASH playlist request error at URL: " + r.srcUrl,
                                responseText: t.responseText,
                                code: 2
                            }, "HAVE_NOTHING" === r.state && (r.started = !1), r.trigger("error");
                            r.masterXml_ = t.responseText;
                            var i = r.parseMasterXml(),
                                n = Nc(r.master, i);
                            n && (r.master = n), v.setTimeout(function() {
                                r.trigger("minimumUpdatePeriod")
                            }, r.master.minimumUpdatePeriod)
                        }
                    })
                }
            }, {
                key: "refreshMedia_",
                value: function() {
                    var e = this,
                        t = void 0,
                        i = void 0;
                    i = this.masterPlaylistLoader_ ? (t = this.masterPlaylistLoader_.master, this.masterPlaylistLoader_.parseMasterXml()) : (t = this.master, this.parseMasterXml());
                    var n = Nc(t, i);
                    n ? (this.masterPlaylistLoader_ ? this.masterPlaylistLoader_.master = n : this.master = n, this.media_ = n.playlists[this.media_.uri]) : this.trigger("playlistunchanged"), this.media().endList || (this.mediaUpdateTimeout = v.setTimeout(function() {
                        e.trigger("mediaupdatetimeout")
                    }, El(this.media(), !!n))), this.trigger("loadedplaylist")
                }
            }]), l
        }(),
        Fc = function(e) {
            return da.log.debug ? da.log.debug.bind(da, "VHS:", e + " >") : function() {}
        };

    function Vc() {}
    var Hc = function() {
            function r(e, t, i, n) {
                fl(this, r), this.callbacks_ = [], this.pendingCallback_ = null, this.timestampOffset_ = 0, this.mediaSource = e, this.processedAppend_ = !1, this.type_ = i, this.mimeType_ = t, this.logger_ = Fc("SourceUpdater[" + i + "][" + t + "]"), "closed" === e.readyState ? e.addEventListener("sourceopen", this.createSourceBuffer_.bind(this, t, n)) : this.createSourceBuffer_(t, n)
            }
            return ml(r, [{
                key: "createSourceBuffer_",
                value: function(e, t) {
                    var i = this;
                    this.sourceBuffer_ = this.mediaSource.addSourceBuffer(e), this.logger_("created SourceBuffer"), t && (t.trigger("sourcebufferadded"), this.mediaSource.sourceBuffers.length < 2) ? t.on("sourcebufferadded", function() {
                        i.start_()
                    }) : this.start_()
                }
            }, {
                key: "start_",
                value: function() {
                    var t = this;
                    this.started_ = !0, this.onUpdateendCallback_ = function() {
                        var e = t.pendingCallback_;
                        t.pendingCallback_ = null, t.logger_("buffered [" + ac(t.buffered()) + "]"), e && e(), t.runCallback_()
                    }, this.sourceBuffer_.addEventListener("updateend", this.onUpdateendCallback_), this.runCallback_()
                }
            }, {
                key: "abort",
                value: function(e) {
                    var t = this;
                    this.processedAppend_ && this.queueCallback_(function() {
                        t.sourceBuffer_.abort()
                    }, e)
                }
            }, {
                key: "appendBuffer",
                value: function(e, t) {
                    var i = this;
                    this.processedAppend_ = !0, this.queueCallback_(function() {
                        e.videoSegmentTimingInfoCallback && i.sourceBuffer_.addEventListener("videoSegmentTimingInfo", e.videoSegmentTimingInfoCallback), i.sourceBuffer_.appendBuffer(e.bytes)
                    }, function() {
                        e.videoSegmentTimingInfoCallback && i.sourceBuffer_.removeEventListener("videoSegmentTimingInfo", e.videoSegmentTimingInfoCallback), t()
                    })
                }
            }, {
                key: "buffered",
                value: function() {
                    return this.sourceBuffer_ ? this.sourceBuffer_.buffered : da.createTimeRanges()
                }
            }, {
                key: "remove",
                value: function(e, t) {
                    var i = this,
                        n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : Vc;
                    this.processedAppend_ && this.queueCallback_(function() {
                        i.logger_("remove [" + e + " => " + t + "]"), i.sourceBuffer_.remove(e, t)
                    }, n)
                }
            }, {
                key: "updating",
                value: function() {
                    return !this.sourceBuffer_ || this.sourceBuffer_.updating || !!this.pendingCallback_ && this.pendingCallback_ !== Vc
                }
            }, {
                key: "timestampOffset",
                value: function(e) {
                    var t = this;
                    return "undefined" != typeof e && (this.queueCallback_(function() {
                        t.sourceBuffer_.timestampOffset = e
                    }), this.timestampOffset_ = e), this.timestampOffset_
                }
            }, {
                key: "queueCallback_",
                value: function(e, t) {
                    this.callbacks_.push([e.bind(this), t]), this.runCallback_()
                }
            }, {
                key: "runCallback_",
                value: function() {
                    var e = void 0;
                    !this.updating() && this.callbacks_.length && this.started_ && (e = this.callbacks_.shift(), this.pendingCallback_ = e[1], e[0]())
                }
            }, {
                key: "dispose",
                value: function() {
                    this.sourceBuffer_.removeEventListener("updateend", this.onUpdateendCallback_), this.sourceBuffer_ && "open" === this.mediaSource.readyState && this.sourceBuffer_.abort()
                }
            }]), r
        }(),
        qc = {
            GOAL_BUFFER_LENGTH: 30,
            MAX_GOAL_BUFFER_LENGTH: 60,
            GOAL_BUFFER_LENGTH_RATE: 1,
            INITIAL_BANDWIDTH: 4194304,
            BANDWIDTH_VARIANCE: 1.2,
            BUFFER_LOW_WATER_LINE: 0,
            MAX_BUFFER_LOW_WATER_LINE: 30,
            BUFFER_LOW_WATER_LINE_RATE: 1
        },
        zc = 2,
        Wc = -101,
        Gc = -102,
        Xc = function(e) {
            var t, i, n = {};
            return e.byterange && (n.Range = (t = e.byterange, i = t.offset + t.length - 1, "bytes=" + t.offset + "-" + i)), n
        },
        Yc = function(e) {
            e.forEach(function(e) {
                e.abort()
            })
        },
        Kc = function(e, t) {
            return t.timedout ? {
                status: t.status,
                message: "HLS request timed-out at URL: " + t.uri,
                code: Wc,
                xhr: t
            } : t.aborted ? {
                status: t.status,
                message: "HLS request aborted at URL: " + t.uri,
                code: Gc,
                xhr: t
            } : e ? {
                status: t.status,
                message: "HLS request errored at URL: " + t.uri,
                code: zc,
                xhr: t
            } : null
        },
        $c = function(i, s, o) {
            var u = 0,
                l = !1;
            return function(e, t) {
                var n, r, a;
                if (!l) return e ? (l = !0, Yc(i), o(e, t)) : (u += 1) === i.length ? (t.endOfAllRequests = Date.now(), t.encryptedBytes ? (r = t, a = o, (n = s).addEventListener("message", function e(t) {
                    if (t.data.source === r.requestId) {
                        n.removeEventListener("message", e);
                        var i = t.data.decrypted;
                        return r.bytes = new Uint8Array(i.bytes, i.byteOffset, i.byteLength), a(null, r)
                    }
                }), void n.postMessage(Kl({
                    source: r.requestId,
                    encrypted: r.encryptedBytes,
                    key: r.key.bytes,
                    iv: r.key.iv
                }), [r.encryptedBytes.buffer, r.key.bytes.buffer])) : o(null, t)) : void 0
            }
        },
        Qc = function(r, a) {
            return function(e) {
                var t, i, n;
                return r.stats = da.mergeOptions(r.stats, (i = (t = e).target, (n = {
                    bandwidth: 1 / 0,
                    bytesReceived: 0,
                    roundTripTime: Date.now() - i.requestTime || 0
                }).bytesReceived = t.loaded, n.bandwidth = Math.floor(n.bytesReceived / n.roundTripTime * 8 * 1e3), n)), !r.stats.firstBytesReceivedAt && r.stats.bytesReceived && (r.stats.firstBytesReceivedAt = Date.now()), a(e, r)
            }
        },
        Jc = function(e, t, i, n, r, a, s) {
            var o, u, l, c, h, d = [],
                p = $c(d, i, s);
            if (r.key) {
                var f = e(da.mergeOptions(t, {
                    uri: r.key.resolvedUri,
                    responseType: "arraybuffer"
                }), (o = r, u = p, function(e, t) {
                    var i = t.response,
                        n = Kc(e, t);
                    if (n) return u(n, o);
                    if (16 !== i.byteLength) return u({
                        status: t.status,
                        message: "Invalid HLS key at URL: " + t.uri,
                        code: zc,
                        xhr: t
                    }, o);
                    var r = new DataView(i);
                    return o.key.bytes = new Uint32Array([r.getUint32(0), r.getUint32(4), r.getUint32(8), r.getUint32(12)]), u(null, o)
                }));
                d.push(f)
            }
            if (r.map && !r.map.bytes) {
                var m = e(da.mergeOptions(t, {
                    uri: r.map.resolvedUri,
                    responseType: "arraybuffer",
                    headers: Xc(r.map)
                }), (l = r, c = n, h = p, function(e, t) {
                    var i = t.response,
                        n = Kc(e, t);
                    return n ? h(n, l) : 0 === i.byteLength ? h({
                        status: t.status,
                        message: "Empty HLS segment content at URL: " + t.uri,
                        code: zc,
                        xhr: t
                    }, l) : (l.map.bytes = new Uint8Array(t.response), c.isInitialized() || c.init(), l.map.timescales = to.timescale(l.map.bytes), l.map.videoTrackIds = to.videoTrackIds(l.map.bytes), h(null, l))
                }));
                d.push(m)
            }
            var g, y, v, _ = e(da.mergeOptions(t, {
                uri: r.resolvedUri,
                responseType: "arraybuffer",
                headers: Xc(r)
            }), (g = r, y = n, v = p, function(e, t) {
                var i, n = t.response,
                    r = Kc(e, t),
                    a = void 0;
                return r ? v(r, g) : 0 === n.byteLength ? v({
                    status: t.status,
                    message: "Empty HLS segment content at URL: " + t.uri,
                    code: zc,
                    xhr: t
                }, g) : (g.stats = {
                    bandwidth: (i = t).bandwidth,
                    bytesReceived: i.bytesReceived || 0,
                    roundTripTime: i.roundTripTime || 0
                }, g.key ? g.encryptedBytes = new Uint8Array(t.response) : g.bytes = new Uint8Array(t.response), g.map && g.map.bytes && (y.isInitialized() || y.init(), (a = y.parse(g.bytes, g.map.videoTrackIds, g.map.timescales)) && a.captions && (g.captionStreams = a.captionStreams, g.fmp4Captions = a.captions)), v(null, g))
            }));
            return _.addEventListener("progress", Qc(r, a)), d.push(_),
                function() {
                    return Yc(d)
                }
        },
        Zc = function(e, t) {
            var i;
            return e && (i = v.getComputedStyle(e)) ? i[t] : ""
        },
        eh = function(e, n) {
            var r = e.slice();
            e.sort(function(e, t) {
                var i = n(e, t);
                return 0 === i ? r.indexOf(e) - r.indexOf(t) : i
            })
        },
        th = function(e, t) {
            var i = void 0,
                n = void 0;
            return e.attributes.BANDWIDTH && (i = e.attributes.BANDWIDTH), i = i || v.Number.MAX_VALUE, t.attributes.BANDWIDTH && (n = t.attributes.BANDWIDTH), i - (n = n || v.Number.MAX_VALUE)
        },
        ih = function(e) {
            return "number" == typeof e && isFinite(e)
        },
        nh = function(e) {
            function i(e) {
                fl(this, i);
                var t = yl(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                if (!e) throw new TypeError("Initialization settings are required");
                if ("function" != typeof e.currentTime) throw new TypeError("No currentTime getter specified");
                if (!e.mediaSource) throw new TypeError("No MediaSource specified");
                return t.bandwidth = e.bandwidth, t.throughput = {
                    rate: 0,
                    count: 0
                }, t.roundTrip = NaN, t.resetStats_(), t.mediaIndex = null, t.hasPlayed_ = e.hasPlayed, t.currentTime_ = e.currentTime, t.seekable_ = e.seekable, t.seeking_ = e.seeking, t.duration_ = e.duration, t.mediaSource_ = e.mediaSource, t.hls_ = e.hls, t.loaderType_ = e.loaderType, t.startingMedia_ = void 0, t.segmentMetadataTrack_ = e.segmentMetadataTrack, t.goalBufferLength_ = e.goalBufferLength, t.sourceType_ = e.sourceType, t.inbandTextTracks_ = e.inbandTextTracks, t.state_ = "INIT", t.checkBufferTimeout_ = null, t.error_ = void 0, t.currentTimeline_ = -1, t.pendingSegment_ = null, t.mimeType_ = null, t.sourceUpdater_ = null, t.xhrOptions_ = null, t.activeInitSegmentId_ = null, t.initSegments_ = {}, t.captionParser_ = new zu, t.decrypter_ = e.decrypter, t.syncController_ = e.syncController, t.syncPoint_ = {
                    segmentIndex: 0,
                    time: 0
                }, t.syncController_.on("syncinfoupdate", function() {
                    return t.trigger("syncinfoupdate")
                }), t.mediaSource_.addEventListener("sourceopen", function() {
                    return t.ended_ = !1
                }), t.fetchAtBuffer_ = !1, t.logger_ = Fc("SegmentLoader[" + t.loaderType_ + "]"), Object.defineProperty(t, "state", {
                    get: function() {
                        return this.state_
                    },
                    set: function(e) {
                        e !== this.state_ && (this.logger_(this.state_ + " -> " + e), this.state_ = e)
                    }
                }), t
            }
            return gl(i, da.EventTarget), ml(i, [{
                key: "resetStats_",
                value: function() {
                    this.mediaBytesTransferred = 0, this.mediaRequests = 0, this.mediaRequestsAborted = 0, this.mediaRequestsTimedout = 0, this.mediaRequestsErrored = 0, this.mediaTransferDuration = 0, this.mediaSecondsLoaded = 0
                }
            }, {
                key: "dispose",
                value: function() {
                    this.state = "DISPOSED", this.pause(), this.abort_(), this.sourceUpdater_ && this.sourceUpdater_.dispose(), this.resetStats_(), this.captionParser_.reset()
                }
            }, {
                key: "abort",
                value: function() {
                    "WAITING" === this.state ? (this.abort_(), this.state = "READY", this.paused() || this.monitorBuffer_()) : this.pendingSegment_ && (this.pendingSegment_ = null)
                }
            }, {
                key: "abort_",
                value: function() {
                    this.pendingSegment_ && this.pendingSegment_.abortRequests(), this.pendingSegment_ = null
                }
            }, {
                key: "error",
                value: function(e) {
                    return "undefined" != typeof e && (this.error_ = e), this.pendingSegment_ = null, this.error_
                }
            }, {
                key: "endOfStream",
                value: function() {
                    this.ended_ = !0, this.pause(), this.trigger("ended")
                }
            }, {
                key: "buffered_",
                value: function() {
                    return this.sourceUpdater_ ? this.sourceUpdater_.buffered() : da.createTimeRanges()
                }
            }, {
                key: "initSegment",
                value: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                    if (!e) return null;
                    var i = $l(e),
                        n = this.initSegments_[i];
                    return t && !n && e.bytes && (this.initSegments_[i] = n = {
                        resolvedUri: e.resolvedUri,
                        byterange: e.byterange,
                        bytes: e.bytes,
                        timescales: e.timescales,
                        videoTrackIds: e.videoTrackIds
                    }), n || e
                }
            }, {
                key: "couldBeginLoading_",
                value: function() {
                    return this.playlist_ && (this.sourceUpdater_ || this.mimeType_ && "INIT" === this.state) && !this.paused()
                }
            }, {
                key: "load",
                value: function() {
                    if (this.monitorBuffer_(), this.playlist_) {
                        if (this.syncController_.setDateTimeMapping(this.playlist_), "INIT" === this.state && this.couldBeginLoading_()) return this.init_();
                        !this.couldBeginLoading_() || "READY" !== this.state && "INIT" !== this.state || (this.state = "READY")
                    }
                }
            }, {
                key: "init_",
                value: function() {
                    return this.state = "READY", this.sourceUpdater_ = new Hc(this.mediaSource_, this.mimeType_, this.loaderType_, this.sourceBufferEmitter_), this.resetEverything(), this.monitorBuffer_()
                }
            }, {
                key: "playlist",
                value: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    if (e) {
                        var i = this.playlist_,
                            n = this.pendingSegment_;
                        this.playlist_ = e, this.xhrOptions_ = t, this.hasPlayed_() || (e.syncInfo = {
                            mediaSequence: e.mediaSequence,
                            time: 0
                        });
                        var r = null;
                        if (i && (i.id ? r = i.id : i.uri && (r = i.uri)), this.logger_("playlist update [" + r + " => " + (e.id || e.uri) + "]"), this.trigger("syncinfoupdate"), "INIT" === this.state && this.couldBeginLoading_()) return this.init_();
                        if (i && i.uri === e.uri) {
                            var a = e.mediaSequence - i.mediaSequence;
                            this.logger_("live window shift [" + a + "]"), null !== this.mediaIndex && (this.mediaIndex -= a), n && (n.mediaIndex -= a, 0 <= n.mediaIndex && (n.segment = e.segments[n.mediaIndex])), this.syncController_.saveExpiredSegmentInfo(i, e)
                        } else null !== this.mediaIndex && this.resyncLoader()
                    }
                }
            }, {
                key: "pause",
                value: function() {
                    this.checkBufferTimeout_ && (v.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = null)
                }
            }, {
                key: "paused",
                value: function() {
                    return null === this.checkBufferTimeout_
                }
            }, {
                key: "mimeType",
                value: function(e, t) {
                    this.mimeType_ || (this.mimeType_ = e, this.sourceBufferEmitter_ = t, "INIT" === this.state && this.couldBeginLoading_() && this.init_())
                }
            }, {
                key: "resetEverything",
                value: function(e) {
                    this.ended_ = !1, this.resetLoader(), this.remove(0, this.duration_(), e), this.captionParser_.clearAllCaptions(), this.trigger("reseteverything")
                }
            }, {
                key: "resetLoader",
                value: function() {
                    this.fetchAtBuffer_ = !1, this.resyncLoader()
                }
            }, {
                key: "resyncLoader",
                value: function() {
                    this.mediaIndex = null, this.syncPoint_ = null, this.abort()
                }
            }, {
                key: "remove",
                value: function(e, t, i) {
                    if (this.sourceUpdater_ && this.sourceUpdater_.remove(e, t, i), oc(e, t, this.segmentMetadataTrack_), this.inbandTextTracks_)
                        for (var n in this.inbandTextTracks_) oc(e, t, this.inbandTextTracks_[n])
                }
            }, {
                key: "monitorBuffer_",
                value: function() {
                    this.checkBufferTimeout_ && v.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = v.setTimeout(this.monitorBufferTick_.bind(this), 1)
                }
            }, {
                key: "monitorBufferTick_",
                value: function() {
                    "READY" === this.state && this.fillBuffer_(), this.checkBufferTimeout_ && v.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = v.setTimeout(this.monitorBufferTick_.bind(this), 500)
                }
            }, {
                key: "fillBuffer_",
                value: function() {
                    if (!this.sourceUpdater_.updating()) {
                        this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
                        var e = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
                        e && (this.isEndOfStream_(e.mediaIndex) ? this.endOfStream() : (e.mediaIndex !== this.playlist_.segments.length - 1 || "ended" !== this.mediaSource_.readyState || this.seeking_()) && ((e.timeline !== this.currentTimeline_ || null !== e.startOfSegment && e.startOfSegment < this.sourceUpdater_.timestampOffset()) && (this.syncController_.reset(), e.timestampOffset = e.startOfSegment, this.captionParser_.clearAllCaptions()), this.loadSegment_(e)))
                    }
                }
            }, {
                key: "isEndOfStream_",
                value: function(e) {
                    return function(e, t, i) {
                        if (!e || !t) return !1;
                        var n = i === e.segments.length;
                        return e.endList && "open" === t.readyState && n
                    }(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.playlist_, this.mediaSource_, e) && !this.sourceUpdater_.updating()
                }
            }, {
                key: "checkBuffer_",
                value: function(e, t, i, n, r, a) {
                    var s = 0,
                        o = void 0;
                    e.length && (s = e.end(e.length - 1));
                    var u = Math.max(0, s - r);
                    if (!t.segments.length) return null;
                    if (u >= this.goalBufferLength_()) return null;
                    if (!n && 1 <= u) return null;
                    if (null === a) return i = this.getSyncSegmentCandidate_(t), this.generateSegmentInfo_(t, i, null, !0);
                    if (null !== i) {
                        var l = t.segments[i];
                        return o = l && l.end ? l.end : s, this.generateSegmentInfo_(t, i + 1, o, !1)
                    }
                    if (this.fetchAtBuffer_) {
                        var c = ql.getMediaInfoForTime(t, s, a.segmentIndex, a.time);
                        i = c.mediaIndex, o = c.startTime
                    } else {
                        var h = ql.getMediaInfoForTime(t, r, a.segmentIndex, a.time);
                        i = h.mediaIndex, o = h.startTime
                    }
                    return this.generateSegmentInfo_(t, i, o, !1)
                }
            }, {
                key: "getSyncSegmentCandidate_",
                value: function(e) {
                    var t = this;
                    if (-1 === this.currentTimeline_) return 0;
                    var i = e.segments.map(function(e, t) {
                        return {
                            timeline: e.timeline,
                            segmentIndex: t
                        }
                    }).filter(function(e) {
                        return e.timeline === t.currentTimeline_
                    });
                    return i.length ? i[Math.min(i.length - 1, 1)].segmentIndex : Math.max(e.segments.length - 1, 0)
                }
            }, {
                key: "generateSegmentInfo_",
                value: function(e, t, i, n) {
                    if (t < 0 || t >= e.segments.length) return null;
                    var r = e.segments[t];
                    return {
                        requestId: "segment-loader-" + Math.random(),
                        uri: r.resolvedUri,
                        mediaIndex: t,
                        isSyncRequest: n,
                        startOfSegment: i,
                        playlist: e,
                        bytes: null,
                        encryptedBytes: null,
                        timestampOffset: null,
                        timeline: r.timeline,
                        duration: r.duration,
                        segment: r
                    }
                }
            }, {
                key: "abortRequestEarly_",
                value: function(e) {
                    if (this.hls_.tech_.paused() || !this.xhrOptions_.timeout || !this.playlist_.attributes.BANDWIDTH) return !1;
                    if (Date.now() - (e.firstBytesReceivedAt || Date.now()) < 1e3) return !1;
                    var t = this.currentTime_(),
                        i = e.bandwidth,
                        n = this.pendingSegment_.duration,
                        r = ql.estimateSegmentRequestTime(n, i, this.playlist_, e.bytesReceived),
                        a = function(e, t) {
                            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1;
                            return ((e.length ? e.end(e.length - 1) : 0) - t) / i
                        }(this.buffered_(), t, this.hls_.tech_.playbackRate()) - 1;
                    if (r <= a) return !1;
                    var s = function(e) {
                        var t = e.master,
                            i = e.currentTime,
                            n = e.bandwidth,
                            r = e.duration,
                            a = e.segmentDuration,
                            s = e.timeUntilRebuffer,
                            o = e.currentTimeline,
                            u = e.syncController,
                            l = t.playlists.filter(function(e) {
                                return !ql.isIncompatible(e)
                            }),
                            c = l.filter(ql.isEnabled);
                        c.length || (c = l.filter(function(e) {
                            return !ql.isDisabled(e)
                        }));
                        var h = c.filter(ql.hasAttribute.bind(null, "BANDWIDTH")).map(function(e) {
                                var t = u.getSyncPoint(e, r, o, i) ? 1 : 2;
                                return {
                                    playlist: e,
                                    rebufferingImpact: ql.estimateSegmentRequestTime(a, n, e) * t - s
                                }
                            }),
                            d = h.filter(function(e) {
                                return e.rebufferingImpact <= 0
                            });
                        return eh(d, function(e, t) {
                            return th(t.playlist, e.playlist)
                        }), d.length ? d[0] : (eh(h, function(e, t) {
                            return e.rebufferingImpact - t.rebufferingImpact
                        }), h[0] || null)
                    }({
                        master: this.hls_.playlists.master,
                        currentTime: t,
                        bandwidth: i,
                        duration: this.duration_(),
                        segmentDuration: n,
                        timeUntilRebuffer: a,
                        currentTimeline: this.currentTimeline_,
                        syncController: this.syncController_
                    });
                    if (s) {
                        var o = r - a - s.rebufferingImpact,
                            u = .5;
                        return a <= tc && (u = 1), !s.playlist || s.playlist.uri === this.playlist_.uri || o < u ? !1 : (this.bandwidth = s.playlist.attributes.BANDWIDTH * qc.BANDWIDTH_VARIANCE + 1, this.abort(), this.trigger("earlyabort"), !0)
                    }
                }
            }, {
                key: "handleProgress_",
                value: function(e, t) {
                    this.pendingSegment_ && t.requestId === this.pendingSegment_.requestId && !this.abortRequestEarly_(t.stats) && this.trigger("progress")
                }
            }, {
                key: "loadSegment_",
                value: function(e) {
                    this.state = "WAITING", this.pendingSegment_ = e, this.trimBackBuffer_(e), e.abortRequests = Jc(this.hls_.xhr, this.xhrOptions_, this.decrypter_, this.captionParser_, this.createSimplifiedSegmentObj_(e), this.handleProgress_.bind(this), this.segmentRequestFinished_.bind(this))
                }
            }, {
                key: "trimBackBuffer_",
                value: function(e) {
                    var t, i, n, r, a = (t = this.seekable_(), i = this.currentTime_(), n = this.playlist_.targetDuration || 10, r = void 0, r = t.length && 0 < t.start(0) && t.start(0) < i ? t.start(0) : i - 30, Math.min(r, i - n));
                    0 < a && this.remove(0, a)
                }
            }, {
                key: "createSimplifiedSegmentObj_",
                value: function(e) {
                    var t = e.segment,
                        i = {
                            resolvedUri: t.resolvedUri,
                            byterange: t.byterange,
                            requestId: e.requestId
                        };
                    if (t.key) {
                        var n = t.key.iv || new Uint32Array([0, 0, 0, e.mediaIndex + e.playlist.mediaSequence]);
                        i.key = {
                            resolvedUri: t.key.resolvedUri,
                            iv: n
                        }
                    }
                    return t.map && (i.map = this.initSegment(t.map)), i
                }
            }, {
                key: "segmentRequestFinished_",
                value: function(e, t) {
                    if (this.mediaRequests += 1, t.stats && (this.mediaBytesTransferred += t.stats.bytesReceived, this.mediaTransferDuration += t.stats.roundTripTime), this.pendingSegment_) {
                        if (t.requestId === this.pendingSegment_.requestId) {
                            if (e) return this.pendingSegment_ = null, this.state = "READY", e.code === Gc ? void(this.mediaRequestsAborted += 1) : (this.pause(), e.code === Wc ? (this.mediaRequestsTimedout += 1, this.bandwidth = 1, this.roundTrip = NaN, void this.trigger("bandwidthupdate")) : (this.mediaRequestsErrored += 1, this.error(e), void this.trigger("error")));
                            this.bandwidth = t.stats.bandwidth, this.roundTrip = t.stats.roundTripTime, t.map && (t.map = this.initSegment(t.map, !0)), this.processSegmentResponse_(t)
                        }
                    } else this.mediaRequestsAborted += 1
                }
            }, {
                key: "processSegmentResponse_",
                value: function(e) {
                    var t = this.pendingSegment_;
                    t.bytes = e.bytes, e.map && (t.segment.map.bytes = e.map.bytes), t.endOfAllRequests = e.endOfAllRequests, e.fmp4Captions && (! function(e, t, i) {
                        for (var n in i)
                            if (!e[n]) {
                                t.trigger({
                                    type: "usage",
                                    name: "hls-608"
                                });
                                var r = t.textTracks().getTrackById(n);
                                e[n] = r || t.addRemoteTextTrack({
                                    kind: "captions",
                                    id: n,
                                    label: n
                                }, !1).track
                            }
                    }(this.inbandTextTracks_, this.hls_.tech_, e.captionStreams), function(e) {
                        var r = e.inbandTextTracks,
                            t = e.captionArray,
                            a = e.timestampOffset;
                        if (t) {
                            var s = window.WebKitDataCue || window.VTTCue;
                            t.forEach(function(e) {
                                var t = e.stream,
                                    i = e.startTime,
                                    n = e.endTime;
                                r[t] && (i += a, n += a, r[t].addCue(new s(i, n, e.text)))
                            })
                        }
                    }({
                        inbandTextTracks: this.inbandTextTracks_,
                        captionArray: e.fmp4Captions,
                        timestampOffset: 0
                    }), this.captionParser_.clearParsedCaptions()), this.handleSegment_()
                }
            }, {
                key: "handleSegment_",
                value: function() {
                    var e = this;
                    if (this.pendingSegment_) {
                        var t = this.pendingSegment_,
                            i = t.segment,
                            n = this.syncController_.probeSegmentInfo(t);
                        "undefined" == typeof this.startingMedia_ && n && (n.containsAudio || n.containsVideo) && (this.startingMedia_ = {
                            containsAudio: n.containsAudio,
                            containsVideo: n.containsVideo
                        });
                        var r, a, s, o = (r = this.loaderType_, a = this.startingMedia_, s = n, "main" === r && a && s ? s.containsAudio || s.containsVideo ? a.containsVideo && !s.containsVideo ? "Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest." : !a.containsVideo && s.containsVideo ? "Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest." : null : "Neither audio nor video found in segment." : null);
                        if (o) return this.error({
                            message: o,
                            blacklistDuration: 1 / 0
                        }), void this.trigger("error");
                        if (t.isSyncRequest) return this.trigger("syncinfoupdate"), this.pendingSegment_ = null, void(this.state = "READY");
                        null !== t.timestampOffset && t.timestampOffset !== this.sourceUpdater_.timestampOffset() && (this.sourceUpdater_.timestampOffset(t.timestampOffset), this.trigger("timestampoffset"));
                        var u, l, c, h, d, p, f, m, g, y, v, _ = this.syncController_.mappingForTimeline(t.timeline);
                        if (null !== _ && this.trigger({
                                type: "segmenttimemapping",
                                mapping: _
                            }), this.state = "APPENDING", i.map) {
                            var b = $l(i.map);
                            if (!this.activeInitSegmentId_ || this.activeInitSegmentId_ !== b) {
                                var T = this.initSegment(i.map);
                                this.sourceUpdater_.appendBuffer({
                                    bytes: T.bytes
                                }, function() {
                                    e.activeInitSegmentId_ = b
                                })
                            }
                        }
                        t.byteLength = t.bytes.byteLength, "number" == typeof i.start && "number" == typeof i.end ? this.mediaSecondsLoaded += i.end - i.start : this.mediaSecondsLoaded += i.duration, this.logger_((l = (u = t).segment, c = l.start, h = l.end, d = u.playlist, p = d.mediaSequence, f = d.id, m = d.segments, g = void 0 === m ? [] : m, y = u.mediaIndex, v = u.timeline, ["appending [" + y + "] of [" + p + ", " + (p + g.length) + "] from playlist [" + f + "]", "[" + c + " => " + h + "] in timeline [" + v + "]"].join(" "))), this.sourceUpdater_.appendBuffer({
                            bytes: t.bytes,
                            videoSegmentTimingInfoCallback: this.handleVideoSegmentTimingInfo_.bind(this, t.requestId)
                        }, this.handleUpdateEnd_.bind(this))
                    } else this.state = "READY"
                }
            }, {
                key: "handleVideoSegmentTimingInfo_",
                value: function(e, t) {
                    if (this.pendingSegment_ && e === this.pendingSegment_.requestId) {
                        var i = this.pendingSegment_.segment;
                        i.videoTimingInfo || (i.videoTimingInfo = {}), i.videoTimingInfo.transmuxerPrependedSeconds = t.videoSegmentTimingInfo.prependedContentDuration || 0, i.videoTimingInfo.transmuxedPresentationStart = t.videoSegmentTimingInfo.start.presentation, i.videoTimingInfo.transmuxedPresentationEnd = t.videoSegmentTimingInfo.end.presentation, i.videoTimingInfo.baseMediaDecodeTime = t.videoSegmentTimingInfo.baseMediaDecodeTime
                    }
                }
            }, {
                key: "handleUpdateEnd_",
                value: function() {
                    if (!this.pendingSegment_) return this.state = "READY", void(this.paused() || this.monitorBuffer_());
                    var e = this.pendingSegment_,
                        t = e.segment,
                        i = null !== this.mediaIndex;
                    this.pendingSegment_ = null, this.recordThroughput_(e), this.addSegmentMetadataCue_(e), this.state = "READY", this.mediaIndex = e.mediaIndex, this.fetchAtBuffer_ = !0, this.currentTimeline_ = e.timeline, this.trigger("syncinfoupdate"), t.end && this.currentTime_() - t.end > 3 * e.playlist.targetDuration ? this.resetEverything() : (i && this.trigger("bandwidthupdate"), this.trigger("progress"), this.isEndOfStream_(e.mediaIndex + 1, e.playlist) && this.endOfStream(), this.paused() || this.monitorBuffer_())
                }
            }, {
                key: "recordThroughput_",
                value: function(e) {
                    var t = this.throughput.rate,
                        i = Date.now() - e.endOfAllRequests + 1,
                        n = Math.floor(e.byteLength / i * 8 * 1e3);
                    this.throughput.rate += (n - t) / ++this.throughput.count
                }
            }, {
                key: "addSegmentMetadataCue_",
                value: function(e) {
                    if (this.segmentMetadataTrack_) {
                        var t = e.segment,
                            i = t.start,
                            n = t.end;
                        if (ih(i) && ih(n)) {
                            oc(i, n, this.segmentMetadataTrack_);
                            var r = v.WebKitDataCue || v.VTTCue,
                                a = {
                                    custom: t.custom,
                                    dateTimeObject: t.dateTimeObject,
                                    dateTimeString: t.dateTimeString,
                                    bandwidth: e.playlist.attributes.BANDWIDTH,
                                    resolution: e.playlist.attributes.RESOLUTION,
                                    codecs: e.playlist.attributes.CODECS,
                                    byteLength: e.byteLength,
                                    uri: e.uri,
                                    timeline: e.timeline,
                                    playlist: e.playlist.uri,
                                    start: i,
                                    end: n
                                },
                                s = new r(i, n, JSON.stringify(a));
                            s.value = a, this.segmentMetadataTrack_.addCue(s)
                        }
                    }
                }
            }]), i
        }(),
        rh = function(e) {
            return decodeURIComponent(escape(String.fromCharCode.apply(null, e)))
        },
        ah = new Uint8Array("\n\n".split("").map(function(e) {
            return e.charCodeAt(0)
        })),
        sh = function(e) {
            function n(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                fl(this, n);
                var i = yl(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e, t));
                return i.mediaSource_ = null, i.subtitlesTrack_ = null, i
            }
            return gl(n, nh), ml(n, [{
                key: "buffered_",
                value: function() {
                    if (!this.subtitlesTrack_ || !this.subtitlesTrack_.cues.length) return da.createTimeRanges();
                    var e = this.subtitlesTrack_.cues,
                        t = e[0].startTime,
                        i = e[e.length - 1].startTime;
                    return da.createTimeRanges([
                        [t, i]
                    ])
                }
            }, {
                key: "initSegment",
                value: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                    if (!e) return null;
                    var i = $l(e),
                        n = this.initSegments_[i];
                    if (t && !n && e.bytes) {
                        var r = ah.byteLength + e.bytes.byteLength,
                            a = new Uint8Array(r);
                        a.set(e.bytes), a.set(ah, e.bytes.byteLength), this.initSegments_[i] = n = {
                            resolvedUri: e.resolvedUri,
                            byterange: e.byterange,
                            bytes: a
                        }
                    }
                    return n || e
                }
            }, {
                key: "couldBeginLoading_",
                value: function() {
                    return this.playlist_ && this.subtitlesTrack_ && !this.paused()
                }
            }, {
                key: "init_",
                value: function() {
                    return this.state = "READY", this.resetEverything(), this.monitorBuffer_()
                }
            }, {
                key: "track",
                value: function(e) {
                    return "undefined" == typeof e || (this.subtitlesTrack_ = e, "INIT" === this.state && this.couldBeginLoading_() && this.init_()), this.subtitlesTrack_
                }
            }, {
                key: "remove",
                value: function(e, t) {
                    oc(e, t, this.subtitlesTrack_)
                }
            }, {
                key: "fillBuffer_",
                value: function() {
                    var e = this;
                    this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
                    var t = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
                    if (t = this.skipEmptySegments_(t)) {
                        if (null === this.syncController_.timestampOffsetForTimeline(t.timeline)) {
                            return this.syncController_.one("timestampoffset", function() {
                                e.state = "READY", e.paused() || e.monitorBuffer_()
                            }), void(this.state = "WAITING_ON_TIMELINE")
                        }
                        this.loadSegment_(t)
                    }
                }
            }, {
                key: "skipEmptySegments_",
                value: function(e) {
                    for (; e && e.segment.empty;) e = this.generateSegmentInfo_(e.playlist, e.mediaIndex + 1, e.startOfSegment + e.duration, e.isSyncRequest);
                    return e
                }
            }, {
                key: "handleSegment_",
                value: function() {
                    var t = this;
                    if (this.pendingSegment_ && this.subtitlesTrack_) {
                        this.state = "APPENDING";
                        var e = this.pendingSegment_,
                            i = e.segment;
                        if ("function" != typeof v.WebVTT && this.subtitlesTrack_ && this.subtitlesTrack_.tech_) {
                            var n = function() {
                                t.handleSegment_()
                            };
                            return this.state = "WAITING_ON_VTTJS", this.subtitlesTrack_.tech_.one("vttjsloaded", n), void this.subtitlesTrack_.tech_.one("vttjserror", function() {
                                t.subtitlesTrack_.tech_.off("vttjsloaded", n), t.error({
                                    message: "Error loading vtt.js"
                                }), t.state = "READY", t.pause(), t.trigger("error")
                            })
                        }
                        i.requested = !0;
                        try {
                            this.parseVTTCues_(e)
                        } catch (e) {
                            return this.error({
                                message: e.message
                            }), this.state = "READY", this.pause(), this.trigger("error")
                        }
                        if (this.updateTimeMapping_(e, this.syncController_.timelines[e.timeline], this.playlist_), e.isSyncRequest) return this.trigger("syncinfoupdate"), this.pendingSegment_ = null, void(this.state = "READY");
                        e.byteLength = e.bytes.byteLength, this.mediaSecondsLoaded += i.duration, e.cues.length && this.remove(e.cues[0].endTime, e.cues[e.cues.length - 1].endTime), e.cues.forEach(function(e) {
                            t.subtitlesTrack_.addCue(e)
                        }), this.handleUpdateEnd_()
                    } else this.state = "READY"
                }
            }, {
                key: "parseVTTCues_",
                value: function(t) {
                    var e = void 0,
                        i = !1;
                    "function" == typeof v.TextDecoder ? e = new v.TextDecoder("utf8") : (e = v.WebVTT.StringDecoder(), i = !0);
                    var n = new v.WebVTT.Parser(v, v.vttjs, e);
                    if (t.cues = [], t.timestampmap = {
                            MPEGTS: 0,
                            LOCAL: 0
                        }, n.oncue = t.cues.push.bind(t.cues), n.ontimestampmap = function(e) {
                            return t.timestampmap = e
                        }, n.onparsingerror = function(e) {
                            da.log.warn("Error encountered when parsing cues: " + e.message)
                        }, t.segment.map) {
                        var r = t.segment.map.bytes;
                        i && (r = rh(r)), n.parse(r)
                    }
                    var a = t.bytes;
                    i && (a = rh(a)), n.parse(a), n.flush()
                }
            }, {
                key: "updateTimeMapping_",
                value: function(e, t, i) {
                    var n = e.segment;
                    if (t)
                        if (e.cues.length) {
                            var r = e.timestampmap,
                                a = r.MPEGTS / 9e4 - r.LOCAL + t.mapping;
                            if (e.cues.forEach(function(e) {
                                    e.startTime += a, e.endTime += a
                                }), !i.syncInfo) {
                                var s = e.cues[0].startTime,
                                    o = e.cues[e.cues.length - 1].startTime;
                                i.syncInfo = {
                                    mediaSequence: i.mediaSequence + e.mediaIndex,
                                    time: Math.min(s, o - n.duration)
                                }
                            }
                        } else n.empty = !0
                }
            }]), n
        }(),
        oh = function(e, t) {
            for (var i = e.cues, n = 0; n < i.length; n++) {
                var r = i[n];
                if (t >= r.adStartTime && t <= r.adEndTime) return r
            }
            return null
        },
        uh = il,
        lh = [{
            name: "VOD",
            run: function(e, t, i, n, r) {
                if (i === 1 / 0) return null;
                return {
                    time: 0,
                    segmentIndex: 0
                }
            }
        }, {
            name: "ProgramDateTime",
            run: function(e, t, i, n, r) {
                if (!e.datetimeToDisplayTime) return null;
                var a = t.segments || [],
                    s = null,
                    o = null;
                r = r || 0;
                for (var u = 0; u < a.length; u++) {
                    var l = a[u];
                    if (l.dateTimeObject) {
                        var c = l.dateTimeObject.getTime() / 1e3 + e.datetimeToDisplayTime,
                            h = Math.abs(r - c);
                        if (null !== o && o < h) break;
                        o = h, s = {
                            time: c,
                            segmentIndex: u
                        }
                    }
                }
                return s
            }
        }, {
            name: "Segment",
            run: function(e, t, i, n, r) {
                var a = t.segments || [],
                    s = null,
                    o = null;
                r = r || 0;
                for (var u = 0; u < a.length; u++) {
                    var l = a[u];
                    if (l.timeline === n && "undefined" != typeof l.start) {
                        var c = Math.abs(r - l.start);
                        if (null !== o && o < c) break;
                        (!s || null === o || c <= o) && (o = c, s = {
                            time: l.start,
                            segmentIndex: u
                        })
                    }
                }
                return s
            }
        }, {
            name: "Discontinuity",
            run: function(e, t, i, n, r) {
                var a = null;
                if (r = r || 0, t.discontinuityStarts && t.discontinuityStarts.length)
                    for (var s = null, o = 0; o < t.discontinuityStarts.length; o++) {
                        var u = t.discontinuityStarts[o],
                            l = t.discontinuitySequence + o + 1,
                            c = e.discontinuities[l];
                        if (c) {
                            var h = Math.abs(r - c.time);
                            if (null !== s && s < h) break;
                            (!a || null === s || h <= s) && (s = h, a = {
                                time: c.time,
                                segmentIndex: u
                            })
                        }
                    }
                return a
            }
        }, {
            name: "Playlist",
            run: function(e, t, i, n, r) {
                return t.syncInfo ? {
                    time: t.syncInfo.time,
                    segmentIndex: t.syncInfo.mediaSequence - t.mediaSequence
                } : null
            }
        }],
        ch = function(e) {
            function t() {
                fl(this, t);
                var e = yl(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.inspectCache_ = void 0, e.timelines = [], e.discontinuities = [], e.datetimeToDisplayTime = null, e.logger_ = Fc("SyncController"), e
            }
            return gl(t, da.EventTarget), ml(t, [{
                key: "getSyncPoint",
                value: function(e, t, i, n) {
                    var r = this.runStrategies_(e, t, i, n);
                    return r.length ? this.selectSyncPoint_(r, {
                        key: "time",
                        value: n
                    }) : null
                }
            }, {
                key: "getExpiredTime",
                value: function(e, t) {
                    if (!e || !e.segments) return null;
                    var i = this.runStrategies_(e, t, e.discontinuitySequence, 0);
                    if (!i.length) return null;
                    var n = this.selectSyncPoint_(i, {
                        key: "segmentIndex",
                        value: 0
                    });
                    return 0 < n.segmentIndex && (n.time *= -1), Math.abs(n.time + Il(e, n.segmentIndex, 0))
                }
            }, {
                key: "runStrategies_",
                value: function(e, t, i, n) {
                    for (var r = [], a = 0; a < lh.length; a++) {
                        var s = lh[a],
                            o = s.run(this, e, t, i, n);
                        o && (o.strategy = s.name, r.push({
                            strategy: s.name,
                            syncPoint: o
                        }))
                    }
                    return r
                }
            }, {
                key: "selectSyncPoint_",
                value: function(e, t) {
                    for (var i = e[0].syncPoint, n = Math.abs(e[0].syncPoint[t.key] - t.value), r = e[0].strategy, a = 1; a < e.length; a++) {
                        var s = Math.abs(e[a].syncPoint[t.key] - t.value);
                        s < n && (n = s, i = e[a].syncPoint, r = e[a].strategy)
                    }
                    return this.logger_("syncPoint for [" + t.key + ": " + t.value + "] chosen with strategy [" + r + "]: [time:" + i.time + ", segmentIndex:" + i.segmentIndex + "]"), i
                }
            }, {
                key: "saveExpiredSegmentInfo",
                value: function(e, t) {
                    for (var i = t.mediaSequence - e.mediaSequence - 1; 0 <= i; i--) {
                        var n = e.segments[i];
                        if (n && "undefined" != typeof n.start) {
                            t.syncInfo = {
                                mediaSequence: e.mediaSequence + i,
                                time: n.start
                            }, this.logger_("playlist refresh sync: [time:" + t.syncInfo.time + ", mediaSequence: " + t.syncInfo.mediaSequence + "]"), this.trigger("syncinfoupdate");
                            break
                        }
                    }
                }
            }, {
                key: "setDateTimeMapping",
                value: function(e) {
                    if (!this.datetimeToDisplayTime && e.segments && e.segments.length && e.segments[0].dateTimeObject) {
                        var t = e.segments[0].dateTimeObject.getTime() / 1e3;
                        this.datetimeToDisplayTime = -t
                    }
                }
            }, {
                key: "reset",
                value: function() {
                    this.inspectCache_ = void 0
                }
            }, {
                key: "probeSegmentInfo",
                value: function(e) {
                    var t = e.segment,
                        i = e.playlist,
                        n = void 0;
                    return (n = t.map ? this.probeMp4Segment_(e) : this.probeTsSegment_(e)) && this.calculateSegmentTimeMapping_(e, n) && (this.saveDiscontinuitySyncInfo_(e), i.syncInfo || (i.syncInfo = {
                        mediaSequence: i.mediaSequence + e.mediaIndex,
                        time: t.start
                    })), n
                }
            }, {
                key: "probeMp4Segment_",
                value: function(e) {
                    var t = e.segment,
                        i = to.timescale(t.map.bytes),
                        n = to.startTime(i, e.bytes);
                    return null !== e.timestampOffset && (e.timestampOffset -= n), {
                        start: n,
                        end: n + t.duration
                    }
                }
            }, {
                key: "probeTsSegment_",
                value: function(e) {
                    var t = uh(e.bytes, this.inspectCache_),
                        i = void 0,
                        n = void 0;
                    return t ? (t.video && 2 === t.video.length ? (this.inspectCache_ = t.video[1].dts, i = t.video[0].dtsTime, n = t.video[1].dtsTime) : t.audio && 2 === t.audio.length && (this.inspectCache_ = t.audio[1].dts, i = t.audio[0].dtsTime, n = t.audio[1].dtsTime), {
                        start: i,
                        end: n,
                        containsVideo: t.video && 2 === t.video.length,
                        containsAudio: t.audio && 2 === t.audio.length
                    }) : null
                }
            }, {
                key: "timestampOffsetForTimeline",
                value: function(e) {
                    return "undefined" == typeof this.timelines[e] ? null : this.timelines[e].time
                }
            }, {
                key: "mappingForTimeline",
                value: function(e) {
                    return "undefined" == typeof this.timelines[e] ? null : this.timelines[e].mapping
                }
            }, {
                key: "calculateSegmentTimeMapping_",
                value: function(e, t) {
                    var i = e.segment,
                        n = this.timelines[e.timeline];
                    if (null !== e.timestampOffset) n = {
                        time: e.startOfSegment,
                        mapping: e.startOfSegment - t.start
                    }, this.timelines[e.timeline] = n, this.trigger("timestampoffset"), this.logger_("time mapping for timeline " + e.timeline + ": [time: " + n.time + "] [mapping: " + n.mapping + "]"), i.start = e.startOfSegment, i.end = t.end + n.mapping;
                    else {
                        if (!n) return !1;
                        i.start = t.start + n.mapping, i.end = t.end + n.mapping
                    }
                    return !0
                }
            }, {
                key: "saveDiscontinuitySyncInfo_",
                value: function(e) {
                    var t = e.playlist,
                        i = e.segment;
                    if (i.discontinuity) this.discontinuities[i.timeline] = {
                        time: i.start,
                        accuracy: 0
                    };
                    else if (t.discontinuityStarts && t.discontinuityStarts.length)
                        for (var n = 0; n < t.discontinuityStarts.length; n++) {
                            var r = t.discontinuityStarts[n],
                                a = t.discontinuitySequence + n + 1,
                                s = r - e.mediaIndex,
                                o = Math.abs(s);
                            if (!this.discontinuities[a] || this.discontinuities[a].accuracy > o) {
                                var u = void 0;
                                u = s < 0 ? i.start - Il(t, e.mediaIndex, r) : i.end + Il(t, e.mediaIndex + 1, r), this.discontinuities[a] = {
                                    time: u,
                                    accuracy: o
                                }
                            }
                        }
                }
            }]), t
        }(),
        hh = new gc("./decrypter-worker.worker.js", function(e, t) {
            var h, i, d, g, n, l, y, s, r = this;
            h = function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }, i = function() {
                function n(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(e, t, i) {
                    return t && n(e.prototype, t), i && n(e, i), e
                }
            }(), d = null, g = function() {
                function c(e) {
                    h(this, c), d || (d = function() {
                        var e = [
                                [
                                    [],
                                    [],
                                    [],
                                    [],
                                    []
                                ],
                                [
                                    [],
                                    [],
                                    [],
                                    [],
                                    []
                                ]
                            ],
                            t = e[0],
                            i = e[1],
                            n = t[4],
                            r = i[4],
                            a = void 0,
                            s = void 0,
                            o = void 0,
                            u = [],
                            l = [],
                            c = void 0,
                            h = void 0,
                            d = void 0,
                            p = void 0,
                            f = void 0;
                        for (a = 0; a < 256; a++) l[(u[a] = a << 1 ^ 283 * (a >> 7)) ^ a] = a;
                        for (s = o = 0; !n[s]; s ^= c || 1, o = l[o] || 1)
                            for (d = (d = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4) >> 8 ^ 255 & d ^ 99, f = 16843009 * u[h = u[c = u[r[n[s] = d] = s]]] ^ 65537 * h ^ 257 * c ^ 16843008 * s, p = 257 * u[d] ^ 16843008 * d, a = 0; a < 4; a++) t[a][s] = p = p << 24 ^ p >>> 8, i[a][d] = f = f << 24 ^ f >>> 8;
                        for (a = 0; a < 5; a++) t[a] = t[a].slice(0), i[a] = i[a].slice(0);
                        return e
                    }()), this._tables = [
                        [d[0][0].slice(), d[0][1].slice(), d[0][2].slice(), d[0][3].slice(), d[0][4].slice()],
                        [d[1][0].slice(), d[1][1].slice(), d[1][2].slice(), d[1][3].slice(), d[1][4].slice()]
                    ];
                    var t = void 0,
                        i = void 0,
                        n = void 0,
                        r = void 0,
                        a = void 0,
                        s = this._tables[0][4],
                        o = this._tables[1],
                        u = e.length,
                        l = 1;
                    if (4 !== u && 6 !== u && 8 !== u) throw new Error("Invalid aes key size");
                    for (r = e.slice(0), a = [], this._key = [r, a], t = u; t < 4 * u + 28; t++) n = r[t - 1], (t % u == 0 || 8 === u && t % u == 4) && (n = s[n >>> 24] << 24 ^ s[n >> 16 & 255] << 16 ^ s[n >> 8 & 255] << 8 ^ s[255 & n], t % u == 0 && (n = n << 8 ^ n >>> 24 ^ l << 24, l = l << 1 ^ 283 * (l >> 7))), r[t] = r[t - u] ^ n;
                    for (i = 0; t; i++, t--) n = r[3 & i ? t : t - 4], a[i] = t <= 4 || i < 4 ? n : o[0][s[n >>> 24]] ^ o[1][s[n >> 16 & 255]] ^ o[2][s[n >> 8 & 255]] ^ o[3][s[255 & n]]
                }
                return c.prototype.decrypt = function(e, t, i, n, r, a) {
                    var s = this._key[1],
                        o = e ^ s[0],
                        u = n ^ s[1],
                        l = i ^ s[2],
                        c = t ^ s[3],
                        h = void 0,
                        d = void 0,
                        p = void 0,
                        f = s.length / 4 - 2,
                        m = void 0,
                        g = 4,
                        y = this._tables[1],
                        v = y[0],
                        _ = y[1],
                        b = y[2],
                        T = y[3],
                        S = y[4];
                    for (m = 0; m < f; m++) h = v[o >>> 24] ^ _[u >> 16 & 255] ^ b[l >> 8 & 255] ^ T[255 & c] ^ s[g], d = v[u >>> 24] ^ _[l >> 16 & 255] ^ b[c >> 8 & 255] ^ T[255 & o] ^ s[g + 1], p = v[l >>> 24] ^ _[c >> 16 & 255] ^ b[o >> 8 & 255] ^ T[255 & u] ^ s[g + 2], c = v[c >>> 24] ^ _[o >> 16 & 255] ^ b[u >> 8 & 255] ^ T[255 & l] ^ s[g + 3], g += 4, o = h, u = d, l = p;
                    for (m = 0; m < 4; m++) r[(3 & -m) + a] = S[o >>> 24] << 24 ^ S[u >> 16 & 255] << 16 ^ S[l >> 8 & 255] << 8 ^ S[255 & c] ^ s[g++], h = o, o = u, u = l, l = c, c = h
                }, c
            }(), n = function() {
                function e() {
                    h(this, e), this.listeners = {}
                }
                return e.prototype.on = function(e, t) {
                    this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t)
                }, e.prototype.off = function(e, t) {
                    if (!this.listeners[e]) return !1;
                    var i = this.listeners[e].indexOf(t);
                    return this.listeners[e].splice(i, 1), -1 < i
                }, e.prototype.trigger = function(e) {
                    var t = this.listeners[e];
                    if (t)
                        if (2 === arguments.length)
                            for (var i = t.length, n = 0; n < i; ++n) t[n].call(this, arguments[1]);
                        else
                            for (var r = Array.prototype.slice.call(arguments, 1), a = t.length, s = 0; s < a; ++s) t[s].apply(this, r)
                }, e.prototype.dispose = function() {
                    this.listeners = {}
                }, e.prototype.pipe = function(t) {
                    this.on("data", function(e) {
                        t.push(e)
                    })
                }, e
            }(), l = function(t) {
                function i() {
                    h(this, i);
                    var e = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, t.call(this, n));
                    return e.jobs = [], e.delay = 1, e.timeout_ = null, e
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(i, t), i.prototype.processJob_ = function() {
                    this.jobs.shift()(), this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null
                }, i.prototype.push = function(e) {
                    this.jobs.push(e), this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay))
                }, i
            }(n), y = function(e) {
                return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
            }, s = function() {
                function u(e, t, i, n) {
                    h(this, u);
                    var r = u.STEP,
                        a = new Int32Array(e.buffer),
                        s = new Uint8Array(e.byteLength),
                        o = 0;
                    for (this.asyncStream_ = new l, this.asyncStream_.push(this.decryptChunk_(a.subarray(o, o + r), t, i, s)), o = r; o < a.length; o += r) i = new Uint32Array([y(a[o - 4]), y(a[o - 3]), y(a[o - 2]), y(a[o - 1])]), this.asyncStream_.push(this.decryptChunk_(a.subarray(o, o + r), t, i, s));
                    this.asyncStream_.push(function() {
                        var e;
                        n(null, (e = s).subarray(0, e.byteLength - e[e.byteLength - 1]))
                    })
                }
                return u.prototype.decryptChunk_ = function(t, i, n, r) {
                    return function() {
                        var e = function(e, t, i) {
                            var n = new Int32Array(e.buffer, e.byteOffset, e.byteLength >> 2),
                                r = new g(Array.prototype.slice.call(t)),
                                a = new Uint8Array(e.byteLength),
                                s = new Int32Array(a.buffer),
                                o = void 0,
                                u = void 0,
                                l = void 0,
                                c = void 0,
                                h = void 0,
                                d = void 0,
                                p = void 0,
                                f = void 0,
                                m = void 0;
                            for (o = i[0], u = i[1], l = i[2], c = i[3], m = 0; m < n.length; m += 4) h = y(n[m]), d = y(n[m + 1]), p = y(n[m + 2]), f = y(n[m + 3]), r.decrypt(h, d, p, f, s, m), s[m] = y(s[m] ^ o), s[m + 1] = y(s[m + 1] ^ u), s[m + 2] = y(s[m + 2] ^ l), s[m + 3] = y(s[m + 3] ^ c), o = h, u = d, l = p, c = f;
                            return a
                        }(t, i, n);
                        r.set(e, t.byteOffset)
                    }
                }, i(u, null, [{
                    key: "STEP",
                    get: function() {
                        return 32e3
                    }
                }]), u
            }(), new function(a) {
                a.onmessage = function(e) {
                    var r = e.data,
                        t = new Uint8Array(r.encrypted.bytes, r.encrypted.byteOffset, r.encrypted.byteLength),
                        i = new Uint32Array(r.key.bytes, r.key.byteOffset, r.key.byteLength / 4),
                        n = new Uint32Array(r.iv.bytes, r.iv.byteOffset, r.iv.byteLength / 4);
                    new s(t, i, n, function(e, t) {
                        var i, n;
                        a.postMessage((i = {
                            source: r.source,
                            decrypted: t
                        }, n = {}, Object.keys(i).forEach(function(e) {
                            var t = i[e];
                            ArrayBuffer.isView(t) ? n[e] = {
                                bytes: t.buffer,
                                byteOffset: t.byteOffset,
                                byteLength: t.byteLength
                            } : n[e] = t
                        }), n), [t.buffer])
                    })
                }
            }(r)
        }),
        dh = function(e, t) {
            e.abort(), e.pause(), t && t.activePlaylistLoader && (t.activePlaylistLoader.pause(), t.activePlaylistLoader = null)
        },
        ph = function(e, t) {
            (t.activePlaylistLoader = e).load()
        },
        fh = {
            AUDIO: function(u, l) {
                return function() {
                    var e = l.segmentLoaders[u],
                        t = l.mediaTypes[u],
                        i = l.blacklistCurrentPlaylist;
                    dh(e, t);
                    var n = t.activeTrack(),
                        r = t.activeGroup(),
                        a = (r.filter(function(e) {
                            return e.default
                        })[0] || r[0]).id,
                        s = t.tracks[a];
                    if (n !== s) {
                        for (var o in da.log.warn("Problem encountered loading the alternate audio track.Switching back to default."), t.tracks) t.tracks[o].enabled = t.tracks[o] === s;
                        t.onTrackChanged()
                    } else i({
                        message: "Problem encountered loading the default audio track."
                    })
                }
            },
            SUBTITLES: function(n, r) {
                return function() {
                    var e = r.segmentLoaders[n],
                        t = r.mediaTypes[n];
                    da.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."), dh(e, t);
                    var i = t.activeTrack();
                    i && (i.mode = "disabled"), t.onTrackChanged()
                }
            }
        },
        mh = {
            AUDIO: function(e, t, i) {
                if (t) {
                    var n = i.tech,
                        r = i.requestOptions,
                        a = i.segmentLoaders[e];
                    t.on("loadedmetadata", function() {
                        var e = t.media();
                        a.playlist(e, r), (!n.paused() || e.endList && "none" !== n.preload()) && a.load()
                    }), t.on("loadedplaylist", function() {
                        a.playlist(t.media(), r), n.paused() || a.load()
                    }), t.on("error", fh[e](e, i))
                }
            },
            SUBTITLES: function(e, t, i) {
                var n = i.tech,
                    r = i.requestOptions,
                    a = i.segmentLoaders[e],
                    s = i.mediaTypes[e];
                t.on("loadedmetadata", function() {
                    var e = t.media();
                    a.playlist(e, r), a.track(s.activeTrack()), (!n.paused() || e.endList && "none" !== n.preload()) && a.load()
                }), t.on("loadedplaylist", function() {
                    a.playlist(t.media(), r), n.paused() || a.load()
                }), t.on("error", fh[e](e, i))
            }
        },
        gh = function(t, i) {
            return function(e) {
                return e.attributes[t] === i
            }
        },
        yh = function(t) {
            return function(e) {
                return e.resolvedUri === t
            }
        },
        vh = {
            AUDIO: function(e, t) {
                var i, n, r = t.hls,
                    a = t.sourceType,
                    s = t.segmentLoaders[e],
                    o = t.requestOptions,
                    u = t.master,
                    l = u.mediaGroups,
                    c = u.playlists,
                    h = t.mediaTypes[e],
                    d = h.groups,
                    p = h.tracks,
                    f = t.masterPlaylistLoader;
                for (var m in l[e] && 0 !== Object.keys(l[e]).length || (l[e] = {
                        main: {
                            default: {
                                default: !0
                            }
                        }
                    }), l[e]) {
                    d[m] || (d[m] = []);
                    var g = c.filter(gh(e, m));
                    for (var y in l[e][m]) {
                        var v = l[e][m][y];
                        g.filter(yh(v.resolvedUri)).length && delete v.resolvedUri;
                        var _ = void 0;
                        if (_ = v.resolvedUri ? new Al(v.resolvedUri, r, o) : v.playlists && "dash" === a ? new jc(v.playlists[0], r, o, f) : null, v = da.mergeOptions({
                                id: y,
                                playlistLoader: _
                            }, v), mh[e](e, v.playlistLoader, t), d[m].push(v), "undefined" == typeof p[y]) {
                            var b = new da.AudioTrack({
                                id: y,
                                kind: (i = v, n = void 0, n = i.default ? "main" : "alternative", i.characteristics && 0 <= i.characteristics.indexOf("public.accessibility.describes-video") && (n = "main-desc"), n),
                                enabled: !1,
                                language: v.language,
                                default: v.default,
                                label: y
                            });
                            p[y] = b
                        }
                    }
                }
                s.on("error", fh[e](e, t))
            },
            SUBTITLES: function(e, t) {
                var i = t.tech,
                    n = t.hls,
                    r = t.sourceType,
                    a = t.segmentLoaders[e],
                    s = t.requestOptions,
                    o = t.master.mediaGroups,
                    u = t.mediaTypes[e],
                    l = u.groups,
                    c = u.tracks,
                    h = t.masterPlaylistLoader;
                for (var d in o[e])
                    for (var p in l[d] || (l[d] = []), o[e][d])
                        if (!o[e][d][p].forced) {
                            var f = o[e][d][p],
                                m = void 0;
                            if ("hls" === r ? m = new Al(f.resolvedUri, n, s) : "dash" === r && (m = new jc(f.playlists[0], n, s, h)), f = da.mergeOptions({
                                    id: p,
                                    playlistLoader: m
                                }, f), mh[e](e, f.playlistLoader, t), l[d].push(f), "undefined" == typeof c[p]) {
                                var g = i.addRemoteTextTrack({
                                    id: p,
                                    kind: "subtitles",
                                    default: f.default && f.autoselect,
                                    language: f.language,
                                    label: p
                                }, !1).track;
                                c[p] = g
                            }
                        } a.on("error", fh[e](e, t))
            },
            "CLOSED-CAPTIONS": function(e, t) {
                var i = t.tech,
                    n = t.master.mediaGroups,
                    r = t.mediaTypes[e],
                    a = r.groups,
                    s = r.tracks;
                for (var o in n[e])
                    for (var u in a[o] || (a[o] = []), n[e][o]) {
                        var l = n[e][o][u];
                        if (l.instreamId.match(/CC\d/) && (a[o].push(da.mergeOptions({
                                id: u
                            }, l)), "undefined" == typeof s[u])) {
                            var c = i.addRemoteTextTrack({
                                id: l.instreamId,
                                kind: "captions",
                                default: l.default && l.autoselect,
                                language: l.language,
                                label: u
                            }, !1).track;
                            s[u] = c
                        }
                    }
            }
        },
        _h = {
            AUDIO: function(i, n) {
                return function() {
                    var e = n.mediaTypes[i].tracks;
                    for (var t in e)
                        if (e[t].enabled) return e[t];
                    return null
                }
            },
            SUBTITLES: function(i, n) {
                return function() {
                    var e = n.mediaTypes[i].tracks;
                    for (var t in e)
                        if ("showing" === e[t].mode) return e[t];
                    return null
                }
            }
        },
        bh = function(t) {
            ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(function(e) {
                vh[e](e, t)
            });
            var i = t.mediaTypes,
                e = t.masterPlaylistLoader,
                n = t.tech,
                r = t.hls;
            ["AUDIO", "SUBTITLES"].forEach(function(e) {
                var a, s, o, u, l, c;
                i[e].activeGroup = (a = e, s = t, function(t) {
                    var e = s.masterPlaylistLoader,
                        i = s.mediaTypes[a].groups,
                        n = e.media();
                    if (!n) return null;
                    var r = null;
                    return n.attributes[a] && (r = i[n.attributes[a]]), r = r || i.main, "undefined" == typeof t ? r : null === t ? null : r.filter(function(e) {
                        return e.id === t.id
                    })[0] || null
                }), i[e].activeTrack = _h[e](e, t), i[e].onGroupChanged = (o = e, u = t, function() {
                    var e = u.segmentLoaders,
                        t = e[o],
                        i = e.main,
                        n = u.mediaTypes[o],
                        r = n.activeTrack(),
                        a = n.activeGroup(r),
                        s = n.activePlaylistLoader;
                    dh(t, n), a && (a.playlistLoader ? (t.resyncLoader(), ph(a.playlistLoader, n)) : s && i.resetEverything())
                }), i[e].onTrackChanged = (l = e, c = t, function() {
                    var e = c.segmentLoaders,
                        t = e[l],
                        i = e.main,
                        n = c.mediaTypes[l],
                        r = n.activeTrack(),
                        a = n.activeGroup(r),
                        s = n.activePlaylistLoader;
                    dh(t, n), a && (a.playlistLoader ? (s !== a.playlistLoader && (t.track && t.track(r), t.resetEverything()), ph(a.playlistLoader, n)) : i.resetEverything())
                })
            });
            var a = i.AUDIO.activeGroup(),
                s = (a.filter(function(e) {
                    return e.default
                })[0] || a[0]).id;
            i.AUDIO.tracks[s].enabled = !0, i.AUDIO.onTrackChanged(), e.on("mediachange", function() {
                ["AUDIO", "SUBTITLES"].forEach(function(e) {
                    return i[e].onGroupChanged()
                })
            });
            var o = function() {
                i.AUDIO.onTrackChanged(), n.trigger({
                    type: "usage",
                    name: "hls-audio-change"
                })
            };
            for (var u in n.audioTracks().addEventListener("change", o), n.remoteTextTracks().addEventListener("change", i.SUBTITLES.onTrackChanged), r.on("dispose", function() {
                    n.audioTracks().removeEventListener("change", o), n.remoteTextTracks().removeEventListener("change", i.SUBTITLES.onTrackChanged)
                }), n.clearTracks("audio"), i.AUDIO.tracks) n.audioTracks().addTrack(i.AUDIO.tracks[u])
        },
        Th = void 0,
        Sh = ["mediaRequests", "mediaRequestsAborted", "mediaRequestsTimedout", "mediaRequestsErrored", "mediaTransferDuration", "mediaBytesTransferred"],
        kh = function(e) {
            function m(e) {
                fl(this, m);
                var t, i = yl(this, (m.__proto__ || Object.getPrototypeOf(m)).call(this)),
                    n = e.url,
                    r = e.handleManifestRedirects,
                    a = e.withCredentials,
                    s = e.tech,
                    o = e.bandwidth,
                    u = e.externHls,
                    l = e.useCueTags,
                    c = e.blacklistDuration,
                    h = e.enableLowInitialPlaylist,
                    d = e.sourceType,
                    p = e.seekTo;
                if (!n) throw new Error("A non-empty playlist URL is required");
                Th = u, i.withCredentials = a, i.tech_ = s, i.hls_ = s.hls, i.seekTo_ = p, i.sourceType_ = d, i.useCueTags_ = l, i.blacklistDuration = c, i.enableLowInitialPlaylist = h, i.useCueTags_ && (i.cueTagsTrack_ = i.tech_.addTextTrack("metadata", "ad-cues"), i.cueTagsTrack_.inBandMetadataTrackDispatchType = ""), i.requestOptions_ = {
                    withCredentials: a,
                    handleManifestRedirects: r,
                    timeout: null
                }, i.mediaTypes_ = (t = {}, ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(function(e) {
                    t[e] = {
                        groups: {},
                        tracks: {},
                        activePlaylistLoader: null,
                        activeGroup: Vc,
                        activeTrack: Vc,
                        onGroupChanged: Vc,
                        onTrackChanged: Vc
                    }
                }), t), i.mediaSource = new da.MediaSource, i.mediaSource.addEventListener("sourceopen", i.handleSourceOpen_.bind(i)), i.seekable_ = da.createTimeRanges(), i.hasPlayed_ = function() {
                    return !1
                }, i.syncController_ = new ch(e), i.segmentMetadataTrack_ = s.addRemoteTextTrack({
                    kind: "metadata",
                    label: "segment-metadata"
                }, !1).track, i.decrypter_ = new hh, i.inbandTextTracks_ = {};
                var f = {
                    hls: i.hls_,
                    mediaSource: i.mediaSource,
                    currentTime: i.tech_.currentTime.bind(i.tech_),
                    seekable: function() {
                        return i.seekable()
                    },
                    seeking: function() {
                        return i.tech_.seeking()
                    },
                    duration: function() {
                        return i.mediaSource.duration
                    },
                    hasPlayed: function() {
                        return i.hasPlayed_()
                    },
                    goalBufferLength: function() {
                        return i.goalBufferLength()
                    },
                    bandwidth: o,
                    syncController: i.syncController_,
                    decrypter: i.decrypter_,
                    sourceType: i.sourceType_,
                    inbandTextTracks: i.inbandTextTracks_
                };
                return i.masterPlaylistLoader_ = "dash" === i.sourceType_ ? new jc(n, i.hls_, i.requestOptions_) : new Al(n, i.hls_, i.requestOptions_), i.setupMasterPlaylistLoaderListeners_(), i.mainSegmentLoader_ = new nh(da.mergeOptions(f, {
                    segmentMetadataTrack: i.segmentMetadataTrack_,
                    loaderType: "main"
                }), e), i.audioSegmentLoader_ = new nh(da.mergeOptions(f, {
                    loaderType: "audio"
                }), e), i.subtitleSegmentLoader_ = new sh(da.mergeOptions(f, {
                    loaderType: "vtt"
                }), e), i.setupSegmentLoaderListeners_(), Sh.forEach(function(e) {
                    i[e + "_"] = function(e) {
                        return this.audioSegmentLoader_[e] + this.mainSegmentLoader_[e]
                    }.bind(i, e)
                }), i.logger_ = Fc("MPC"), i.masterPlaylistLoader_.load(), i
            }
            return gl(m, da.EventTarget), ml(m, [{
                key: "setupMasterPlaylistLoaderListeners_",
                value: function() {
                    var n = this;
                    this.masterPlaylistLoader_.on("loadedmetadata", function() {
                        var e = n.masterPlaylistLoader_.media(),
                            t = 1.5 * e.targetDuration * 1e3;
                        Hl(n.masterPlaylistLoader_.master, n.masterPlaylistLoader_.media()) ? n.requestOptions_.timeout = 0 : n.requestOptions_.timeout = t, e.endList && "none" !== n.tech_.preload() && (n.mainSegmentLoader_.playlist(e, n.requestOptions_), n.mainSegmentLoader_.load()), bh({
                            sourceType: n.sourceType_,
                            segmentLoaders: {
                                AUDIO: n.audioSegmentLoader_,
                                SUBTITLES: n.subtitleSegmentLoader_,
                                main: n.mainSegmentLoader_
                            },
                            tech: n.tech_,
                            requestOptions: n.requestOptions_,
                            masterPlaylistLoader: n.masterPlaylistLoader_,
                            hls: n.hls_,
                            master: n.master(),
                            mediaTypes: n.mediaTypes_,
                            blacklistCurrentPlaylist: n.blacklistCurrentPlaylist.bind(n)
                        }), n.triggerPresenceUsage_(n.master(), e);
                        try {
                            n.setupSourceBuffers_()
                        } catch (e) {
                            return da.log.warn("Failed to create SourceBuffers", e), n.mediaSource.endOfStream("decode")
                        }
                        n.setupFirstPlay(), !n.mediaTypes_.AUDIO.activePlaylistLoader || n.mediaTypes_.AUDIO.activePlaylistLoader.media() ? n.trigger("selectedinitialmedia") : n.mediaTypes_.AUDIO.activePlaylistLoader.one("loadedmetadata", function() {
                            n.trigger("selectedinitialmedia")
                        })
                    }), this.masterPlaylistLoader_.on("loadedplaylist", function() {
                        var e = n.masterPlaylistLoader_.media();
                        if (!e) {
                            n.excludeUnsupportedVariants_();
                            var t = void 0;
                            return n.enableLowInitialPlaylist && (t = n.selectInitialPlaylist()), t || (t = n.selectPlaylist()), n.initialMedia_ = t, void n.masterPlaylistLoader_.media(n.initialMedia_)
                        }
                        if (n.useCueTags_ && n.updateAdCues_(e), n.mainSegmentLoader_.playlist(e, n.requestOptions_), n.updateDuration(), n.tech_.paused() || (n.mainSegmentLoader_.load(), n.audioSegmentLoader_ && n.audioSegmentLoader_.load()), !e.endList) {
                            var i = function() {
                                var e = n.seekable();
                                0 !== e.length && n.mediaSource.addSeekableRange_(e.start(0), e.end(0))
                            };
                            if (n.duration() !== 1 / 0) {
                                n.tech_.one("durationchange", function e() {
                                    n.duration() === 1 / 0 ? i() : n.tech_.one("durationchange", e)
                                })
                            } else i()
                        }
                    }), this.masterPlaylistLoader_.on("error", function() {
                        n.blacklistCurrentPlaylist(n.masterPlaylistLoader_.error)
                    }), this.masterPlaylistLoader_.on("mediachanging", function() {
                        n.mainSegmentLoader_.abort(), n.mainSegmentLoader_.pause()
                    }), this.masterPlaylistLoader_.on("mediachange", function() {
                        var e = n.masterPlaylistLoader_.media(),
                            t = 1.5 * e.targetDuration * 1e3;
                        Hl(n.masterPlaylistLoader_.master, n.masterPlaylistLoader_.media()) ? n.requestOptions_.timeout = 0 : n.requestOptions_.timeout = t, n.mainSegmentLoader_.playlist(e, n.requestOptions_), n.mainSegmentLoader_.load(), n.tech_.trigger({
                            type: "mediachange",
                            bubbles: !0
                        })
                    }), this.masterPlaylistLoader_.on("playlistunchanged", function() {
                        var e = n.masterPlaylistLoader_.media();
                        n.stuckAtPlaylistEnd_(e) && (n.blacklistCurrentPlaylist({
                            message: "Playlist no longer updating."
                        }), n.tech_.trigger("playliststuck"))
                    }), this.masterPlaylistLoader_.on("renditiondisabled", function() {
                        n.tech_.trigger({
                            type: "usage",
                            name: "hls-rendition-disabled"
                        })
                    }), this.masterPlaylistLoader_.on("renditionenabled", function() {
                        n.tech_.trigger({
                            type: "usage",
                            name: "hls-rendition-enabled"
                        })
                    })
                }
            }, {
                key: "triggerPresenceUsage_",
                value: function(e, t) {
                    var i = e.mediaGroups || {},
                        n = !0,
                        r = Object.keys(i.AUDIO);
                    for (var a in i.AUDIO)
                        for (var s in i.AUDIO[a]) {
                            i.AUDIO[a][s].uri || (n = !1)
                        }
                    n && this.tech_.trigger({
                        type: "usage",
                        name: "hls-demuxed"
                    }), Object.keys(i.SUBTITLES).length && this.tech_.trigger({
                        type: "usage",
                        name: "hls-webvtt"
                    }), Th.Playlist.isAes(t) && this.tech_.trigger({
                        type: "usage",
                        name: "hls-aes"
                    }), Th.Playlist.isFmp4(t) && this.tech_.trigger({
                        type: "usage",
                        name: "hls-fmp4"
                    }), r.length && 1 < Object.keys(i.AUDIO[r[0]]).length && this.tech_.trigger({
                        type: "usage",
                        name: "hls-alternate-audio"
                    }), this.useCueTags_ && this.tech_.trigger({
                        type: "usage",
                        name: "hls-playlist-cue-tags"
                    })
                }
            }, {
                key: "setupSegmentLoaderListeners_",
                value: function() {
                    var a = this;
                    this.mainSegmentLoader_.on("bandwidthupdate", function() {
                        var e = a.selectPlaylist(),
                            t = a.masterPlaylistLoader_.media(),
                            i = a.tech_.buffered(),
                            n = i.length ? i.end(i.length - 1) - a.tech_.currentTime() : 0,
                            r = a.bufferLowWaterLine();
                        (!t.endList || a.duration() < qc.MAX_BUFFER_LOW_WATER_LINE || e.attributes.BANDWIDTH < t.attributes.BANDWIDTH || r <= n) && a.masterPlaylistLoader_.media(e), a.tech_.trigger("bandwidthupdate")
                    }), this.mainSegmentLoader_.on("progress", function() {
                        a.trigger("progress")
                    }), this.mainSegmentLoader_.on("error", function() {
                        a.blacklistCurrentPlaylist(a.mainSegmentLoader_.error())
                    }), this.mainSegmentLoader_.on("syncinfoupdate", function() {
                        a.onSyncInfoUpdate_()
                    }), this.mainSegmentLoader_.on("timestampoffset", function() {
                        a.tech_.trigger({
                            type: "usage",
                            name: "hls-timestamp-offset"
                        })
                    }), this.audioSegmentLoader_.on("syncinfoupdate", function() {
                        a.onSyncInfoUpdate_()
                    }), this.mainSegmentLoader_.on("ended", function() {
                        a.onEndOfStream()
                    }), this.mainSegmentLoader_.on("earlyabort", function() {
                        a.blacklistCurrentPlaylist({
                            message: "Aborted early because there isn't enough bandwidth to complete the request without rebuffering."
                        }, 120)
                    }), this.mainSegmentLoader_.on("reseteverything", function() {
                        a.tech_.trigger("hls-reset")
                    }), this.mainSegmentLoader_.on("segmenttimemapping", function(e) {
                        a.tech_.trigger({
                            type: "hls-segment-time-mapping",
                            mapping: e.mapping
                        })
                    }), this.audioSegmentLoader_.on("ended", function() {
                        a.onEndOfStream()
                    })
                }
            }, {
                key: "mediaSecondsLoaded_",
                value: function() {
                    return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded)
                }
            }, {
                key: "load",
                value: function() {
                    this.mainSegmentLoader_.load(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.load(), this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.load()
                }
            }, {
                key: "smoothQualityChange_",
                value: function() {
                    var e = this.selectPlaylist();
                    e !== this.masterPlaylistLoader_.media() && (this.masterPlaylistLoader_.media(e), this.mainSegmentLoader_.resetLoader())
                }
            }, {
                key: "fastQualityChange_",
                value: function() {
                    var e = this,
                        t = this.selectPlaylist();
                    t !== this.masterPlaylistLoader_.media() && (this.masterPlaylistLoader_.media(t), this.mainSegmentLoader_.resetEverything(function() {
                        da.browser.IE_VERSION || da.browser.IS_EDGE ? e.tech_.setCurrentTime(e.tech_.currentTime() + .04) : e.tech_.setCurrentTime(e.tech_.currentTime())
                    }))
                }
            }, {
                key: "play",
                value: function() {
                    if (!this.setupFirstPlay()) {
                        this.tech_.ended() && this.seekTo_(0), this.hasPlayed_() && this.load();
                        var e = this.tech_.seekable();
                        return this.tech_.duration() === 1 / 0 && this.tech_.currentTime() < e.start(0) ? this.seekTo_(e.end(e.length - 1)) : void 0
                    }
                }
            }, {
                key: "setupFirstPlay",
                value: function() {
                    var e = this,
                        t = this.masterPlaylistLoader_.media();
                    if (!t || this.tech_.paused() || this.hasPlayed_()) return !1;
                    if (!t.endList) {
                        var i = this.seekable();
                        if (!i.length) return !1;
                        if (da.browser.IE_VERSION && 0 === this.tech_.readyState()) return this.tech_.one("loadedmetadata", function() {
                            e.trigger("firstplay"), e.seekTo_(i.end(0)), e.hasPlayed_ = function() {
                                return !0
                            }
                        }), !1;
                        this.trigger("firstplay"), this.seekTo_(i.end(0))
                    }
                    return this.hasPlayed_ = function() {
                        return !0
                    }, this.load(), !0
                }
            }, {
                key: "handleSourceOpen_",
                value: function() {
                    try {
                        this.setupSourceBuffers_()
                    } catch (e) {
                        return da.log.warn("Failed to create Source Buffers", e), this.mediaSource.endOfStream("decode")
                    }
                    if (this.tech_.autoplay()) {
                        var e = this.tech_.play();
                        "undefined" != typeof e && "function" == typeof e.then && e.then(null, function(e) {})
                    }
                    this.trigger("sourceopen")
                }
            }, {
                key: "onEndOfStream",
                value: function() {
                    var e = this.mainSegmentLoader_.ended_;
                    if (this.mediaTypes_.AUDIO.activePlaylistLoader && (e = !this.mainSegmentLoader_.startingMedia_ || this.mainSegmentLoader_.startingMedia_.containsVideo ? e && this.audioSegmentLoader_.ended_ : this.audioSegmentLoader_.ended_), e) {
                        this.logger_("calling mediaSource.endOfStream()");
                        try {
                            this.mediaSource.endOfStream()
                        } catch (e) {
                            da.log.warn("Failed to call media source endOfStream", e)
                        }
                    }
                }
            }, {
                key: "stuckAtPlaylistEnd_",
                value: function(e) {
                    if (!this.seekable().length) return !1;
                    var t = this.syncController_.getExpiredTime(e, this.mediaSource.duration);
                    if (null === t) return !1;
                    var i = Th.Playlist.playlistEnd(e, t),
                        n = this.tech_.currentTime(),
                        r = this.tech_.buffered();
                    if (!r.length) return i - n <= .1;
                    var a = r.end(r.length - 1);
                    return a - n <= .1 && i - a <= .1
                }
            }, {
                key: "blacklistCurrentPlaylist",
                value: function() {
                    var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        i = arguments[1],
                        n = void 0;
                    if (n = t.playlist || this.masterPlaylistLoader_.media(), i = i || t.blacklistDuration || this.blacklistDuration, !n) {
                        this.error = t;
                        try {
                            return this.mediaSource.endOfStream("network")
                        } catch (e) {
                            return this.trigger("error")
                        }
                    }
                    var r = 1 === this.masterPlaylistLoader_.master.playlists.filter(Fl).length;
                    return r ? (da.log.warn("Problem encountered with the current HLS playlist. Trying again since it is the final playlist."), this.tech_.trigger("retryplaylist"), this.masterPlaylistLoader_.load(r)) : (n.excludeUntil = Date.now() + 1e3 * i, this.tech_.trigger("blacklistplaylist"), this.tech_.trigger({
                        type: "usage",
                        name: "hls-rendition-blacklisted"
                    }), e = this.selectPlaylist(), da.log.warn("Problem encountered with the current HLS playlist." + (t.message ? " " + t.message : "") + " Switching to another playlist."), this.masterPlaylistLoader_.media(e))
                }
            }, {
                key: "pauseLoading",
                value: function() {
                    this.mainSegmentLoader_.pause(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.pause(), this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.pause()
                }
            }, {
                key: "setCurrentTime",
                value: function(e) {
                    var t = nc(this.tech_.buffered(), e);
                    return this.masterPlaylistLoader_ && this.masterPlaylistLoader_.media() && this.masterPlaylistLoader_.media().segments ? t && t.length ? e : (this.mainSegmentLoader_.resetEverything(), this.mainSegmentLoader_.abort(), this.mediaTypes_.AUDIO.activePlaylistLoader && (this.audioSegmentLoader_.resetEverything(), this.audioSegmentLoader_.abort()), this.mediaTypes_.SUBTITLES.activePlaylistLoader && (this.subtitleSegmentLoader_.resetEverything(), this.subtitleSegmentLoader_.abort()), void this.load()) : 0
                }
            }, {
                key: "duration",
                value: function() {
                    return this.masterPlaylistLoader_ ? this.mediaSource ? this.mediaSource.duration : Th.Playlist.duration(this.masterPlaylistLoader_.media()) : 0
                }
            }, {
                key: "seekable",
                value: function() {
                    return this.seekable_
                }
            }, {
                key: "onSyncInfoUpdate_",
                value: function() {
                    var e = void 0,
                        t = void 0;
                    if (this.masterPlaylistLoader_) {
                        var i = this.masterPlaylistLoader_.media();
                        if (i) {
                            var n = this.syncController_.getExpiredTime(i, this.mediaSource.duration);
                            if (null !== n && 0 !== (e = Th.Playlist.seekable(i, n)).length) {
                                if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
                                    if (i = this.mediaTypes_.AUDIO.activePlaylistLoader.media(), null === (n = this.syncController_.getExpiredTime(i, this.mediaSource.duration))) return;
                                    if (0 === (t = Th.Playlist.seekable(i, n)).length) return
                                }
                                var r = void 0,
                                    a = void 0;
                                this.seekable_ && this.seekable_.length && (r = this.seekable_.end(0), a = this.seekable_.start(0)), t ? t.start(0) > e.end(0) || e.start(0) > t.end(0) ? this.seekable_ = e : this.seekable_ = da.createTimeRanges([
                                    [t.start(0) > e.start(0) ? t.start(0) : e.start(0), t.end(0) < e.end(0) ? t.end(0) : e.end(0)]
                                ]) : this.seekable_ = e, this.seekable_ && this.seekable_.length && this.seekable_.end(0) === r && this.seekable_.start(0) === a || (this.logger_("seekable updated [" + ac(this.seekable_) + "]"), this.tech_.trigger("seekablechanged"))
                            }
                        }
                    }
                }
            }, {
                key: "updateDuration",
                value: function() {
                    var t = this,
                        e = this.mediaSource.duration,
                        i = Th.Playlist.duration(this.masterPlaylistLoader_.media()),
                        n = this.tech_.buffered(),
                        r = function e() {
                            t.logger_("Setting duration from " + t.mediaSource.duration + " => " + i);
                            try {
                                t.mediaSource.duration = i
                            } catch (e) {
                                da.log.warn("Failed to set media source duration", e)
                            }
                            t.tech_.trigger("durationchange"), t.mediaSource.removeEventListener("sourceopen", e)
                        };
                    0 < n.length && (i = Math.max(i, n.end(n.length - 1))), e !== i && ("open" !== this.mediaSource.readyState ? this.mediaSource.addEventListener("sourceopen", r) : r())
                }
            }, {
                key: "dispose",
                value: function() {
                    var n = this;
                    this.decrypter_.terminate(), this.masterPlaylistLoader_.dispose(), this.mainSegmentLoader_.dispose(), ["AUDIO", "SUBTITLES"].forEach(function(e) {
                        var t = n.mediaTypes_[e].groups;
                        for (var i in t) t[i].forEach(function(e) {
                            e.playlistLoader && e.playlistLoader.dispose()
                        })
                    }), this.audioSegmentLoader_.dispose(), this.subtitleSegmentLoader_.dispose()
                }
            }, {
                key: "master",
                value: function() {
                    return this.masterPlaylistLoader_.master
                }
            }, {
                key: "media",
                value: function() {
                    return this.masterPlaylistLoader_.media() || this.initialMedia_
                }
            }, {
                key: "setupSourceBuffers_",
                value: function() {
                    var e, t = this.masterPlaylistLoader_.media();
                    if (t && "open" === this.mediaSource.readyState) {
                        if ((e = Ec(this.masterPlaylistLoader_.master, t)).length < 1) return this.error = "No compatible SourceBuffer configuration for the variant stream:" + t.resolvedUri, this.mediaSource.endOfStream("decode");
                        this.configureLoaderMimeTypes_(e), this.excludeIncompatibleVariants_(t)
                    }
                }
            }, {
                key: "configureLoaderMimeTypes_",
                value: function(e) {
                    var t = 1 < e.length && -1 === e[0].indexOf(",") && e[0] !== e[1] ? new da.EventTarget : null;
                    this.mainSegmentLoader_.mimeType(e[0], t), e[1] && this.audioSegmentLoader_.mimeType(e[1], t)
                }
            }, {
                key: "excludeUnsupportedVariants_",
                value: function() {
                    this.master().playlists.forEach(function(e) {
                        e.attributes.CODECS && v.MediaSource && v.MediaSource.isTypeSupported && !v.MediaSource.isTypeSupported('video/mp4; codecs="' + e.attributes.CODECS.replace(/avc1\.(\d+)\.(\d+)/i, function(e) {
                            return kc([e])[0]
                        }) + '"') && (e.excludeUntil = 1 / 0)
                    })
                }
            }, {
                key: "excludeIncompatibleVariants_",
                value: function(e) {
                    var i = 2,
                        n = null,
                        t = void 0;
                    e.attributes.CODECS && (t = Cc(e.attributes.CODECS), n = t.videoCodec, i = t.codecCount), this.master().playlists.forEach(function(e) {
                        var t = {
                            codecCount: 2,
                            videoCodec: null
                        };
                        e.attributes.CODECS && (t = Cc(e.attributes.CODECS)), t.codecCount !== i && (e.excludeUntil = 1 / 0), t.videoCodec !== n && (e.excludeUntil = 1 / 0)
                    })
                }
            }, {
                key: "updateAdCues_",
                value: function(e) {
                    var t = 0,
                        i = this.seekable();
                    i.length && (t = i.start(0)),
                        function(e, t) {
                            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                            if (e.segments)
                                for (var n = i, r = void 0, a = 0; a < e.segments.length; a++) {
                                    var s = e.segments[a];
                                    if (r || (r = oh(t, n + s.duration / 2)), r) {
                                        if ("cueIn" in s) {
                                            r.endTime = n, r.adEndTime = n, n += s.duration, r = null;
                                            continue
                                        }
                                        if (n < r.endTime) {
                                            n += s.duration;
                                            continue
                                        }
                                        r.endTime += s.duration
                                    } else if ("cueOut" in s && ((r = new v.VTTCue(n, n + s.duration, s.cueOut)).adStartTime = n, r.adEndTime = n + parseFloat(s.cueOut), t.addCue(r)), "cueOutCont" in s) {
                                        var o, u, l = s.cueOutCont.split("/").map(parseFloat),
                                            c = vl(l, 2);
                                        o = c[0], u = c[1], (r = new v.VTTCue(n, n + s.duration, "")).adStartTime = n - o, r.adEndTime = r.adStartTime + u, t.addCue(r)
                                    }
                                    n += s.duration
                                }
                        }(e, this.cueTagsTrack_, t)
                }
            }, {
                key: "goalBufferLength",
                value: function() {
                    var e = this.tech_.currentTime(),
                        t = qc.GOAL_BUFFER_LENGTH,
                        i = qc.GOAL_BUFFER_LENGTH_RATE,
                        n = Math.max(t, qc.MAX_GOAL_BUFFER_LENGTH);
                    return Math.min(t + e * i, n)
                }
            }, {
                key: "bufferLowWaterLine",
                value: function() {
                    var e = this.tech_.currentTime(),
                        t = qc.BUFFER_LOW_WATER_LINE,
                        i = qc.BUFFER_LOW_WATER_LINE_RATE,
                        n = Math.max(t, qc.MAX_BUFFER_LOW_WATER_LINE);
                    return Math.min(t + e * i, n)
                }
            }]), m
        }(),
        Ch = function e(t, i, n) {
            fl(this, e);
            var r, a, s, o = t.masterPlaylistController_,
                u = o[(t.options_.smoothQualityChange ? "smooth" : "fast") + "QualityChange_"].bind(o);
            if (i.attributes.RESOLUTION) {
                var l = i.attributes.RESOLUTION;
                this.width = l.width, this.height = l.height
            }
            this.bandwidth = i.attributes.BANDWIDTH, this.id = n, this.enabled = (r = t.playlists, a = i.uri, s = u, function(e) {
                var t = r.master.playlists[a],
                    i = jl(t),
                    n = Fl(t);
                return "undefined" == typeof e ? n : (e ? delete t.disabled : t.disabled = !0, e === n || i || (s(), e ? r.trigger("renditionenabled") : r.trigger("renditiondisabled")), e)
            })
        },
        wh = ["seeking", "seeked", "pause", "playing", "error"],
        Eh = function() {
            function s(e) {
                var t = this;
                fl(this, s), this.tech_ = e.tech, this.seekable = e.seekable, this.seekTo = e.seekTo, this.allowSeeksWithinUnsafeLiveWindow = e.allowSeeksWithinUnsafeLiveWindow, this.media = e.media, this.consecutiveUpdates = 0, this.lastRecordedTime = null, this.timer_ = null, this.checkCurrentTimeTimeout_ = null, this.logger_ = Fc("PlaybackWatcher"), this.logger_("initialize");
                var i = function() {
                        return t.monitorCurrentTime_()
                    },
                    n = function() {
                        return t.techWaiting_()
                    },
                    r = function() {
                        return t.cancelTimer_()
                    },
                    a = function() {
                        return t.fixesBadSeeks_()
                    };
                this.tech_.on("seekablechanged", a), this.tech_.on("waiting", n), this.tech_.on(wh, r), this.tech_.on("canplay", i), this.dispose = function() {
                    t.logger_("dispose"), t.tech_.off("seekablechanged", a), t.tech_.off("waiting", n), t.tech_.off(wh, r), t.tech_.off("canplay", i), t.checkCurrentTimeTimeout_ && v.clearTimeout(t.checkCurrentTimeTimeout_), t.cancelTimer_()
                }
            }
            return ml(s, [{
                key: "monitorCurrentTime_",
                value: function() {
                    this.checkCurrentTime_(), this.checkCurrentTimeTimeout_ && v.clearTimeout(this.checkCurrentTimeTimeout_), this.checkCurrentTimeTimeout_ = v.setTimeout(this.monitorCurrentTime_.bind(this), 250)
                }
            }, {
                key: "checkCurrentTime_",
                value: function() {
                    if (this.tech_.seeking() && this.fixesBadSeeks_()) return this.consecutiveUpdates = 0, void(this.lastRecordedTime = this.tech_.currentTime());
                    if (!this.tech_.paused() && !this.tech_.seeking()) {
                        var e = this.tech_.currentTime(),
                            t = this.tech_.buffered();
                        if (this.lastRecordedTime === e && (!t.length || e + .1 >= t.end(t.length - 1))) return this.techWaiting_();
                        5 <= this.consecutiveUpdates && e === this.lastRecordedTime ? (this.consecutiveUpdates++, this.waiting_()) : e === this.lastRecordedTime ? this.consecutiveUpdates++ : (this.consecutiveUpdates = 0, this.lastRecordedTime = e)
                    }
                }
            }, {
                key: "cancelTimer_",
                value: function() {
                    this.consecutiveUpdates = 0, this.timer_ && (this.logger_("cancelTimer_"), clearTimeout(this.timer_)), this.timer_ = null
                }
            }, {
                key: "fixesBadSeeks_",
                value: function() {
                    if (!this.tech_.seeking()) return !1;
                    var e = this.seekable(),
                        t = this.tech_.currentTime(),
                        i = void 0;
                    this.afterSeekableWindow_(e, t, this.media(), this.allowSeeksWithinUnsafeLiveWindow) && (i = e.end(e.length - 1));
                    this.beforeSeekableWindow_(e, t) && (i = e.start(0) + .1);
                    return "undefined" != typeof i && (this.logger_("Trying to seek outside of seekable at time " + t + " with seekable range " + ac(e) + ". Seeking to " + i + "."), this.seekTo(i), !0)
                }
            }, {
                key: "waiting_",
                value: function() {
                    if (!this.techWaiting_()) {
                        var e = this.tech_.currentTime(),
                            t = this.tech_.buffered(),
                            i = nc(t, e);
                        return i.length && e + 3 <= i.end(0) ? (this.cancelTimer_(), this.seekTo(e), this.logger_("Stopped at " + e + " while inside a buffered region [" + i.start(0) + " -> " + i.end(0) + "]. Attempting to resume playback by seeking to the current time."), void this.tech_.trigger({
                            type: "usage",
                            name: "hls-unknown-waiting"
                        })) : void 0
                    }
                }
            }, {
                key: "techWaiting_",
                value: function() {
                    var e = this.seekable(),
                        t = this.tech_.currentTime();
                    if (this.tech_.seeking() && this.fixesBadSeeks_()) return !0;
                    if (this.tech_.seeking() || null !== this.timer_) return !0;
                    if (this.beforeSeekableWindow_(e, t)) {
                        var i = e.end(e.length - 1);
                        return this.logger_("Fell out of live window at time " + t + ". Seeking to live point (seekable end) " + i), this.cancelTimer_(), this.seekTo(i), this.tech_.trigger({
                            type: "usage",
                            name: "hls-live-resync"
                        }), !0
                    }
                    var n = this.tech_.buffered(),
                        r = rc(n, t);
                    if (this.videoUnderflow_(r, n, t)) return this.cancelTimer_(), this.seekTo(t), this.tech_.trigger({
                        type: "usage",
                        name: "hls-video-underflow"
                    }), !0;
                    if (0 < r.length) {
                        var a = r.start(0) - t;
                        return this.logger_("Stopped at " + t + ", setting timer for " + a + ", seeking to " + r.start(0)), this.timer_ = setTimeout(this.skipTheGap_.bind(this), 1e3 * a, t), !0
                    }
                    return !1
                }
            }, {
                key: "afterSeekableWindow_",
                value: function(e, t, i) {
                    var n = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
                    if (!e.length) return !1;
                    var r = e.end(e.length - 1) + .1;
                    return !i.endList && n && (r = e.end(e.length - 1) + 3 * i.targetDuration), r < t
                }
            }, {
                key: "beforeSeekableWindow_",
                value: function(e, t) {
                    return !!(e.length && 0 < e.start(0) && t < e.start(0) - .1)
                }
            }, {
                key: "videoUnderflow_",
                value: function(e, t, i) {
                    if (0 === e.length) {
                        var n = this.gapFromVideoUnderflow_(t, i);
                        if (n) return this.logger_("Encountered a gap in video from " + n.start + " to " + n.end + ". Seeking to current time " + i), !0
                    }
                    return !1
                }
            }, {
                key: "skipTheGap_",
                value: function(e) {
                    var t = this.tech_.buffered(),
                        i = this.tech_.currentTime(),
                        n = rc(t, i);
                    this.cancelTimer_(), 0 !== n.length && i === e && (this.logger_("skipTheGap_:", "currentTime:", i, "scheduled currentTime:", e, "nextRange start:", n.start(0)), this.seekTo(n.start(0) + tc), this.tech_.trigger({
                        type: "usage",
                        name: "hls-gap-skip"
                    }))
                }
            }, {
                key: "gapFromVideoUnderflow_",
                value: function(e, t) {
                    for (var i = function(e) {
                            if (e.length < 2) return da.createTimeRanges();
                            for (var t = [], i = 1; i < e.length; i++) {
                                var n = e.end(i - 1),
                                    r = e.start(i);
                                t.push([n, r])
                            }
                            return da.createTimeRanges(t)
                        }(e), n = 0; n < i.length; n++) {
                        var r = i.start(n),
                            a = i.end(n);
                        if (t - r < 4 && 2 < t - r) return {
                            start: r,
                            end: a
                        }
                    }
                    return null
                }
            }]), s
        }(),
        Ah = {
            errorInterval: 30,
            getSource: function(e) {
                return e(this.tech({
                    IWillNotUseThisInPlugins: !0
                }).currentSource_)
            }
        },
        Lh = function(e) {
            ! function t(i, e) {
                var n = 0,
                    r = 0,
                    a = da.mergeOptions(Ah, e);
                i.ready(function() {
                    i.trigger({
                        type: "usage",
                        name: "hls-error-reload-initialized"
                    })
                });
                var s = function() {
                        r && i.currentTime(r)
                    },
                    o = function(e) {
                        null != e && (r = i.duration() !== 1 / 0 && i.currentTime() || 0, i.one("loadedmetadata", s), i.src(e), i.trigger({
                            type: "usage",
                            name: "hls-error-reload"
                        }), i.play())
                    },
                    u = function() {
                        if (Date.now() - n < 1e3 * a.errorInterval) i.trigger({
                            type: "usage",
                            name: "hls-error-reload-canceled"
                        });
                        else {
                            if (a.getSource && "function" == typeof a.getSource) return n = Date.now(), a.getSource.call(i, o);
                            da.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!")
                        }
                    },
                    l = function e() {
                        i.off("loadedmetadata", s), i.off("error", u), i.off("dispose", e)
                    };
                i.on("error", u), i.on("dispose", l), i.reloadSourceOnError = function(e) {
                    l(), t(i, e)
                }
            }(this, e)
        };
    da.use("*", function(t) {
        return {
            setSource: function(e, t) {
                t(null, e)
            },
            setCurrentTime: function(e) {
                return t.vhs && t.currentSource().src === t.vhs.source_.src && t.vhs.setCurrentTime(e), e
            },
            play: function() {
                t.vhs && t.currentSource().src === t.vhs.source_.src && t.vhs.setCurrentTime(t.tech_.currentTime())
            }
        }
    });
    var Ph = {
        PlaylistLoader: Al,
        Playlist: ql,
        Decrypter: hl,
        AsyncStream: ul,
        decrypt: cl,
        utils: Jl,
        STANDARD_PLAYLIST_SELECTOR: function() {
            return function(e, t, i, n, r) {
                var a = e.playlists.map(function(e) {
                    var t, i;
                    return t = e.attributes.RESOLUTION && e.attributes.RESOLUTION.width, i = e.attributes.RESOLUTION && e.attributes.RESOLUTION.height, {
                        bandwidth: e.attributes.BANDWIDTH || v.Number.MAX_VALUE,
                        width: t,
                        height: i,
                        playlist: e
                    }
                });
                eh(a, function(e, t) {
                    return e.bandwidth - t.bandwidth
                });
                var s = (a = a.filter(function(e) {
                    return !ql.isIncompatible(e.playlist)
                })).filter(function(e) {
                    return ql.isEnabled(e.playlist)
                });
                s.length || (s = a.filter(function(e) {
                    return !ql.isDisabled(e.playlist)
                }));
                var o = s.filter(function(e) {
                        return e.bandwidth * qc.BANDWIDTH_VARIANCE < t
                    }),
                    u = o[o.length - 1],
                    l = o.filter(function(e) {
                        return e.bandwidth === u.bandwidth
                    })[0];
                if (!1 === r) {
                    var c = l || s[0] || a[0];
                    return c ? c.playlist : null
                }
                var h = o.filter(function(e) {
                    return e.width && e.height
                });
                eh(h, function(e, t) {
                    return e.width - t.width
                });
                var d = h.filter(function(e) {
                    return e.width === i && e.height === n
                });
                u = d[d.length - 1];
                var p = d.filter(function(e) {
                        return e.bandwidth === u.bandwidth
                    })[0],
                    f = void 0,
                    m = void 0,
                    g = void 0;
                p || (m = (f = h.filter(function(e) {
                    return e.width > i || e.height > n
                })).filter(function(e) {
                    return e.width === f[0].width && e.height === f[0].height
                }), u = m[m.length - 1], g = m.filter(function(e) {
                    return e.bandwidth === u.bandwidth
                })[0]);
                var y = g || p || l || s[0] || a[0];
                return y ? y.playlist : null
            }(this.playlists.master, this.systemBandwidth, parseInt(Zc(this.tech_.el(), "width"), 10), parseInt(Zc(this.tech_.el(), "height"), 10), this.limitRenditionByPlayerDimensions)
        },
        INITIAL_PLAYLIST_SELECTOR: function() {
            var e = this.playlists.master.playlists.filter(ql.isEnabled);
            return eh(e, function(e, t) {
                return th(e, t)
            }), e.filter(function(e) {
                return Cc(e.attributes.CODECS).videoCodec
            })[0] || null
        },
        comparePlaylistBandwidth: th,
        comparePlaylistResolution: function(e, t) {
            var i = void 0,
                n = void 0;
            return e.attributes.RESOLUTION && e.attributes.RESOLUTION.width && (i = e.attributes.RESOLUTION.width), i = i || v.Number.MAX_VALUE, t.attributes.RESOLUTION && t.attributes.RESOLUTION.width && (n = t.attributes.RESOLUTION.width), i === (n = n || v.Number.MAX_VALUE) && e.attributes.BANDWIDTH && t.attributes.BANDWIDTH ? e.attributes.BANDWIDTH - t.attributes.BANDWIDTH : i - n
        },
        xhr: Gl()
    };
    ["GOAL_BUFFER_LENGTH", "MAX_GOAL_BUFFER_LENGTH", "GOAL_BUFFER_LENGTH_RATE", "BUFFER_LOW_WATER_LINE", "MAX_BUFFER_LOW_WATER_LINE", "BUFFER_LOW_WATER_LINE_RATE", "BANDWIDTH_VARIANCE"].forEach(function(t) {
        Object.defineProperty(Ph, t, {
            get: function() {
                return da.log.warn("using Hls." + t + " is UNSAFE be sure you know what you are doing"), qc[t]
            },
            set: function(e) {
                da.log.warn("using Hls." + t + " is UNSAFE be sure you know what you are doing"), "number" != typeof e || e < 0 ? da.log.warn("value of Hls." + t + " must be greater than or equal to 0") : qc[t] = e
            }
        })
    });
    var Oh = "videojs-vhs",
        Ih = function(e) {
            if (/^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i.test(e)) return "hls";
            return /^application\/dash\+xml/i.test(e) ? "dash" : null
        },
        Uh = function(e, t) {
            for (var i = t.media(), n = -1, r = 0; r < e.length; r++)
                if (e[r].id === i.uri) {
                    n = r;
                    break
                } e.selectedIndex_ = n, e.trigger({
                selectedIndex: n,
                type: "change"
            })
        };
    Ph.canPlaySource = function() {
        return da.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
    };
    var xh = function(e) {
            if ("dash" === e.options_.sourceType) {
                var t = da.players[e.tech_.options_.playerId];
                if (t.eme) {
                    var i = function(e, t, i) {
                        if (!e) return e;
                        var n = {};
                        for (var r in e) n[r] = {
                            audioContentType: 'audio/mp4; codecs="' + i.attributes.CODECS + '"',
                            videoContentType: 'video/mp4; codecs="' + t.attributes.CODECS + '"'
                        }, t.contentProtection && t.contentProtection[r] && t.contentProtection[r].pssh && (n[r].pssh = t.contentProtection[r].pssh), "string" == typeof e[r] && (n[r].url = e[r]);
                        return da.mergeOptions(e, n)
                    }(e.source_.keySystems, e.playlists.media(), e.masterPlaylistController_.mediaTypes_.AUDIO.activePlaylistLoader.media());
                    i && (t.currentSource().keySystems = i, t.eme.initializeMediaKeys && t.eme.initializeMediaKeys())
                }
            }
        },
        Dh = function() {
            if (!window.localStorage) return null;
            var e = window.localStorage.getItem(Oh);
            if (!e) return null;
            try {
                return JSON.parse(e)
            } catch (e) {
                return null
            }
        };
    Ph.supportsNativeHls = function() {
        var t = h.createElement("video");
        if (!da.getTech("Html5").isSupported()) return !1;
        return ["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"].some(function(e) {
            return /maybe|probably/i.test(t.canPlayType(e))
        })
    }(), Ph.supportsNativeDash = !!da.getTech("Html5").isSupported() && /maybe|probably/i.test(h.createElement("video").canPlayType("application/dash+xml")), Ph.supportsTypeNatively = function(e) {
        return "hls" === e ? Ph.supportsNativeHls : "dash" === e && Ph.supportsNativeDash
    }, Ph.isSupported = function() {
        return da.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
    };
    var Rh = da.getComponent("Component"),
        Mh = function(e) {
            function a(e, t, i) {
                fl(this, a);
                var n = yl(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t, i.hls));
                if (t.options_ && t.options_.playerId) {
                    var r = da(t.options_.playerId);
                    r.hasOwnProperty("hls") || Object.defineProperty(r, "hls", {
                        get: function() {
                            return da.log.warn("player.hls is deprecated. Use player.tech().hls instead."), t.trigger({
                                type: "usage",
                                name: "hls-player-access"
                            }), n
                        },
                        configurable: !0
                    }), r.vhs = n, (r.dash = n).player_ = r
                }
                if (n.tech_ = t, n.source_ = e, n.stats = {}, n.setOptions_(), n.options_.overrideNative && t.overrideNativeAudioTracks && t.overrideNativeVideoTracks) t.overrideNativeAudioTracks(!0), t.overrideNativeVideoTracks(!0);
                else if (n.options_.overrideNative && (t.featuresNativeVideoTracks || t.featuresNativeAudioTracks)) throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB");
                return n.on(h, ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"], function(e) {
                    var t = h.fullscreenElement || h.webkitFullscreenElement || h.mozFullScreenElement || h.msFullscreenElement;
                    t && t.contains(n.tech_.el()) && n.masterPlaylistController_.smoothQualityChange_()
                }), n.on(n.tech_, "seeking", function() {
                    0 === this.tech_.currentTime() && this.tech_.player_.loop() && this.setCurrentTime(0)
                }), n.on(n.tech_, "error", function() {
                    this.masterPlaylistController_ && this.masterPlaylistController_.pauseLoading()
                }), n.on(n.tech_, "play", n.play), n
            }
            return gl(a, Rh), ml(a, [{
                key: "setOptions_",
                value: function() {
                    var t = this;
                    if (this.options_.withCredentials = this.options_.withCredentials || !1, this.options_.handleManifestRedirects = this.options_.handleManifestRedirects || !1, this.options_.limitRenditionByPlayerDimensions = !1 !== this.options_.limitRenditionByPlayerDimensions, this.options_.smoothQualityChange = this.options_.smoothQualityChange || !1, this.options_.useBandwidthFromLocalStorage = "undefined" != typeof this.source_.useBandwidthFromLocalStorage ? this.source_.useBandwidthFromLocalStorage : this.options_.useBandwidthFromLocalStorage || !1, this.options_.customTagParsers = this.options_.customTagParsers || [], this.options_.customTagMappers = this.options_.customTagMappers || [], "number" != typeof this.options_.blacklistDuration && (this.options_.blacklistDuration = 300), "number" != typeof this.options_.bandwidth && this.options_.useBandwidthFromLocalStorage) {
                        var e = Dh();
                        e && e.bandwidth && (this.options_.bandwidth = e.bandwidth, this.tech_.trigger({
                            type: "usage",
                            name: "hls-bandwidth-from-local-storage"
                        })), e && e.throughput && (this.options_.throughput = e.throughput, this.tech_.trigger({
                            type: "usage",
                            name: "hls-throughput-from-local-storage"
                        }))
                    }
                    "number" != typeof this.options_.bandwidth && (this.options_.bandwidth = qc.INITIAL_BANDWIDTH), this.options_.enableLowInitialPlaylist = this.options_.enableLowInitialPlaylist && this.options_.bandwidth === qc.INITIAL_BANDWIDTH, ["withCredentials", "limitRenditionByPlayerDimensions", "bandwidth", "smoothQualityChange", "customTagParsers", "customTagMappers", "handleManifestRedirects"].forEach(function(e) {
                        "undefined" != typeof t.source_[e] && (t.options_[e] = t.source_[e])
                    }), this.limitRenditionByPlayerDimensions = this.options_.limitRenditionByPlayerDimensions
                }
            }, {
                key: "src",
                value: function(e, t) {
                    var n = this;
                    e && (this.setOptions_(), this.options_.url = this.source_.src, this.options_.tech = this.tech_, this.options_.externHls = Ph, this.options_.sourceType = Ih(t), this.options_.seekTo = function(e) {
                        n.tech_.setCurrentTime(e), n.setCurrentTime(e)
                    }, this.masterPlaylistController_ = new kh(this.options_), this.playbackWatcher_ = new Eh(da.mergeOptions(this.options_, {
                        seekable: function() {
                            return n.seekable()
                        },
                        media: function() {
                            return n.masterPlaylistController_.media()
                        }
                    })), this.masterPlaylistController_.on("error", function() {
                        da.players[n.tech_.options_.playerId].error(n.masterPlaylistController_.error)
                    }), this.masterPlaylistController_.selectPlaylist = this.selectPlaylist ? this.selectPlaylist.bind(this) : Ph.STANDARD_PLAYLIST_SELECTOR.bind(this), this.masterPlaylistController_.selectInitialPlaylist = Ph.INITIAL_PLAYLIST_SELECTOR.bind(this), this.playlists = this.masterPlaylistController_.masterPlaylistLoader_, this.mediaSource = this.masterPlaylistController_.mediaSource, Object.defineProperties(this, {
                        selectPlaylist: {
                            get: function() {
                                return this.masterPlaylistController_.selectPlaylist
                            },
                            set: function(e) {
                                this.masterPlaylistController_.selectPlaylist = e.bind(this)
                            }
                        },
                        throughput: {
                            get: function() {
                                return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate
                            },
                            set: function(e) {
                                this.masterPlaylistController_.mainSegmentLoader_.throughput.rate = e, this.masterPlaylistController_.mainSegmentLoader_.throughput.count = 1
                            }
                        },
                        bandwidth: {
                            get: function() {
                                return this.masterPlaylistController_.mainSegmentLoader_.bandwidth
                            },
                            set: function(e) {
                                this.masterPlaylistController_.mainSegmentLoader_.bandwidth = e, this.masterPlaylistController_.mainSegmentLoader_.throughput = {
                                    rate: 0,
                                    count: 0
                                }
                            }
                        },
                        systemBandwidth: {
                            get: function() {
                                var e = 1 / (this.bandwidth || 1),
                                    t = void 0;
                                return t = 0 < this.throughput ? 1 / this.throughput : 0, Math.floor(1 / (e + t))
                            },
                            set: function() {
                                da.log.error('The "systemBandwidth" property is read-only')
                            }
                        }
                    }), this.options_.bandwidth && (this.bandwidth = this.options_.bandwidth), this.options_.throughput && (this.throughput = this.options_.throughput), Object.defineProperties(this.stats, {
                        bandwidth: {
                            get: function() {
                                return n.bandwidth || 0
                            },
                            enumerable: !0
                        },
                        mediaRequests: {
                            get: function() {
                                return n.masterPlaylistController_.mediaRequests_() || 0
                            },
                            enumerable: !0
                        },
                        mediaRequestsAborted: {
                            get: function() {
                                return n.masterPlaylistController_.mediaRequestsAborted_() || 0
                            },
                            enumerable: !0
                        },
                        mediaRequestsTimedout: {
                            get: function() {
                                return n.masterPlaylistController_.mediaRequestsTimedout_() || 0
                            },
                            enumerable: !0
                        },
                        mediaRequestsErrored: {
                            get: function() {
                                return n.masterPlaylistController_.mediaRequestsErrored_() || 0
                            },
                            enumerable: !0
                        },
                        mediaTransferDuration: {
                            get: function() {
                                return n.masterPlaylistController_.mediaTransferDuration_() || 0
                            },
                            enumerable: !0
                        },
                        mediaBytesTransferred: {
                            get: function() {
                                return n.masterPlaylistController_.mediaBytesTransferred_() || 0
                            },
                            enumerable: !0
                        },
                        mediaSecondsLoaded: {
                            get: function() {
                                return n.masterPlaylistController_.mediaSecondsLoaded_() || 0
                            },
                            enumerable: !0
                        },
                        buffered: {
                            get: function() {
                                return sc(n.tech_.buffered())
                            },
                            enumerable: !0
                        },
                        currentTime: {
                            get: function() {
                                return n.tech_.currentTime()
                            },
                            enumerable: !0
                        },
                        currentSource: {
                            get: function() {
                                return n.tech_.currentSource_
                            },
                            enumerable: !0
                        },
                        currentTech: {
                            get: function() {
                                return n.tech_.name_
                            },
                            enumerable: !0
                        },
                        duration: {
                            get: function() {
                                return n.tech_.duration()
                            },
                            enumerable: !0
                        },
                        master: {
                            get: function() {
                                return n.playlists.master
                            },
                            enumerable: !0
                        },
                        playerDimensions: {
                            get: function() {
                                return n.tech_.currentDimensions()
                            },
                            enumerable: !0
                        },
                        seekable: {
                            get: function() {
                                return sc(n.tech_.seekable())
                            },
                            enumerable: !0
                        },
                        timestamp: {
                            get: function() {
                                return Date.now()
                            },
                            enumerable: !0
                        },
                        videoPlaybackQuality: {
                            get: function() {
                                return n.tech_.getVideoPlaybackQuality()
                            },
                            enumerable: !0
                        }
                    }), this.tech_.one("canplay", this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)), this.tech_.on("bandwidthupdate", function() {
                        n.options_.useBandwidthFromLocalStorage && function(e) {
                            if (!window.localStorage) return;
                            var t = Dh();
                            t = t ? da.mergeOptions(t, e) : e;
                            try {
                                window.localStorage.setItem(Oh, JSON.stringify(t))
                            } catch (e) {
                                return
                            }
                        }({
                            bandwidth: n.bandwidth,
                            throughput: Math.round(n.throughput)
                        })
                    }), this.masterPlaylistController_.on("selectedinitialmedia", function() {
                        var i, e;
                        e = (i = n).playlists, i.representations = function() {
                            return e.master.playlists.filter(function(e) {
                                return !jl(e)
                            }).map(function(e, t) {
                                return new Ch(i, e, e.uri)
                            })
                        }, xh(n)
                    }), this.on(this.masterPlaylistController_, "progress", function() {
                        this.tech_.trigger("progress")
                    }), this.tech_.ready(function() {
                        return n.setupQualityLevels_()
                    }), this.tech_.el() && this.tech_.src(da.URL.createObjectURL(this.masterPlaylistController_.mediaSource)))
                }
            }, {
                key: "setupQualityLevels_",
                value: function() {
                    var i = this,
                        e = da.players[this.tech_.options_.playerId];
                    e && e.qualityLevels && (this.qualityLevels_ = e.qualityLevels(), this.masterPlaylistController_.on("selectedinitialmedia", function() {
                        var t, e;
                        t = i.qualityLevels_, (e = i).representations().forEach(function(e) {
                            t.addQualityLevel(e)
                        }), Uh(t, e.playlists)
                    }), this.playlists.on("mediachange", function() {
                        Uh(i.qualityLevels_, i.playlists)
                    }))
                }
            }, {
                key: "play",
                value: function() {
                    this.masterPlaylistController_.play()
                }
            }, {
                key: "setCurrentTime",
                value: function(e) {
                    this.masterPlaylistController_.setCurrentTime(e)
                }
            }, {
                key: "duration",
                value: function() {
                    return this.masterPlaylistController_.duration()
                }
            }, {
                key: "seekable",
                value: function() {
                    return this.masterPlaylistController_.seekable()
                }
            }, {
                key: "dispose",
                value: function() {
                    this.playbackWatcher_ && this.playbackWatcher_.dispose(), this.masterPlaylistController_ && this.masterPlaylistController_.dispose(), this.qualityLevels_ && this.qualityLevels_.dispose(), this.player_ && (delete this.player_.vhs, delete this.player_.dash, delete this.player_.hls), this.tech_ && this.tech_.hls && delete this.tech_.hls,
                        function e(t, i, n) {
                            null === t && (t = Function.prototype);
                            var r = Object.getOwnPropertyDescriptor(t, i);
                            if (void 0 === r) {
                                var a = Object.getPrototypeOf(t);
                                return null === a ? void 0 : e(a, i, n)
                            }
                            if ("value" in r) return r.value;
                            var s = r.get;
                            return void 0 !== s ? s.call(n) : void 0
                        }(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "dispose", this).call(this)
                }
            }, {
                key: "convertToProgramTime",
                value: function(e, t) {
                    return Zl({
                        playlist: this.masterPlaylistController_.media(),
                        time: e,
                        callback: t
                    })
                }
            }, {
                key: "seekToProgramTime",
                value: function(e, t) {
                    var i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                        n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 2;
                    return ec({
                        programTime: e,
                        playlist: this.masterPlaylistController_.media(),
                        retryCount: n,
                        pauseAfterSeek: i,
                        seekTo: this.options_.seekTo,
                        tech: this.options_.tech,
                        callback: t
                    })
                }
            }]), a
        }(),
        Bh = {
            name: "videojs-http-streaming",
            VERSION: "1.9.3",
            canHandleSource: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    i = da.mergeOptions(da.options, t);
                return Bh.canPlayType(e.type, i)
            },
            handleSource: function(e, t) {
                var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                    n = da.mergeOptions(da.options, i);
                return t.hls = new Mh(e, t, n), t.hls.xhr = Gl(), t.hls.src(e.src, e.type), t.hls
            },
            canPlayType: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    i = da.mergeOptions(da.options, t).hls.overrideNative,
                    n = Ih(e);
                return n && (!Ph.supportsTypeNatively(n) || i) ? "maybe" : ""
            }
        };
    return "undefined" != typeof da.MediaSource && "undefined" != typeof da.URL || (da.MediaSource = Dc, da.URL = Rc), Dc.supportsNativeMediaSources() && da.getTech("Html5").registerSourceHandler(Bh, 0), da.HlsHandler = Mh, da.HlsSourceHandler = Bh, da.Hls = Ph, da.use || da.registerComponent("Hls", Ph), da.options.hls = da.options.hls || {}, da.registerPlugin ? da.registerPlugin("reloadSourceOnError", Lh) : da.plugin("reloadSourceOnError", Lh), da
});