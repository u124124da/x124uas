videojs.options.controlBar = {
    volumePanel: {
        inline: !1,
        vertical: !0
    },
    children: ["liveDisplay", "seekToLive", "playToggle", "currentTimeDisplay", "progressControl", "timeDivider", "durationDisplay", "customControlSpacer", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "volumePanel", "fullscreenToggle"]
}, videojs.options.techOrder = ["html5"];
var vjs_skins = ["chrome", "party", "treso", "roundal", "pinko", "jwlike"];
videojs.options.skinname = "default";
var vjs_skin = document.createElement("div");
for (var k in document.body.appendChild(vjs_skin), vjs_skins) vjs_skin.className = "vjs-" + vjs_skins[k], 13 == vjs_skin.offsetWidth && ("treso" == vjs_skins[k] ? (videojs.options.skinname = "treso", videojs.options.controlBar = {
    children: ["progressControl", "playToggle", "liveDisplay", "seekToLive", "currentTimeDisplay", "durationDisplay", "volumePanel", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle"]
}) : "chrome" == vjs_skins[k] ? (videojs.options.skinname = "chrome", videojs.options.controlBar = {
    children: ["playToggle", "liveDisplay", "seekToLive", "currentTimeDisplay", "timeDivider", "durationDisplay", "customControlSpacer", "progressControl", "volumePanel", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle"]
}) : "party" == vjs_skins[k] ? (videojs.options.skinname = "party", videojs.options.controlBar = {
    children: ["playToggle", "liveDisplay", "seekToLive", "progressControl", "currentTimeDisplay", "timeDivider", "durationDisplay", "customControlSpacer", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "volumePanel", "fullscreenToggle"]
}) : "roundal" == vjs_skins[k] ? (videojs.options.skinname = "roundal", videojs.options.controlBar = {
    volumePanel: {
        inline: !1,
        vertical: !0
    },
    children: ["liveDisplay", "seekToLive", "playToggle", "currentTimeDisplay", , "progressControl", "timeDivider", "durationDisplay", "customControlSpacer", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "volumePanel", "fullscreenToggle"]
}) : "pinko" == vjs_skins[k] ? (videojs.options.skinname = "pinko", videojs.options.controlBar = {
    volumePanel: {
        inline: !1,
        vertical: !0
    },
    children: ["liveDisplay", "seekToLive", "playToggle", "currentTimeDisplay", "progressControl", "timeDivider", "durationDisplay", "customControlSpacer", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "volumePanel", "fullscreenToggle"]
}) : "jwlike" == vjs_skins[k] && (videojs.options.skinname = "jwlike", videojs.options.controlBar = {
    volumePanel: {
        inline: !1,
        vertical: !0
    },
    children: ["progressControl", "playToggle", "liveDisplay", "seekToLive", "volumePanel", "customControlSpacer", "currentTimeDisplay", "timeDivider", "durationDisplay", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle"]
}));
document.body.removeChild(vjs_skin), "ontouchstart" in document.documentElement || (document.documentElement.className += " no-touch");
var nv = null;

function vjs_find(e, s) {
    return e.querySelector(s)
}

function vjs_mfind(e, s) {
    return e.querySelectorAll(s)
}

function vjs_find_position(e) {
    if (null !== e) {
        var s = e.getBoundingClientRect(),
            t = getComputedStyle(e),
            n = null !== t.marginTop ? parseInt(t.marginTop, 10) : 0,
            i = null !== t.marginLeft ? parseInt(t.marginLeft, 10) : 0;
        return {
            top: s.top - n,
            left: s.left - i
        }
    }
}

function vjs_addClass(e, s) {
    if (e) {
        e.length || (e = [e]);
        for (var t = 0, n = e.length; t < n; t++) null == vjs_hasClass(e[t], s) && (e[t].className += " " + s, e[t].className.replace(/\s+/g, " "))
    }
}

function vjs_touch_device() {
    return "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
}

function vjs_removeClass(e, s) {
    if (e && (e.classList.remove(s), vjs_hasClass(e, s))) {
        var t = new RegExp("(\\s|^)" + s + "(\\s|$)");
        e.className = e.className.replace(t, " "), e.className.replace(/\s+/g, " ")
    }
}

function vjs_El(e) {
    return document.createElement(e)
}
vjs_hasClass = function(e, s) {
        if (e) {
            var t = new RegExp("(\\s|^)" + s + "(\\s|$)");
            return (void 0 === e.className ? window.event.srcElement : e).className.match(t)
        }
    }, vjs_inArray = function(e, s) {
        if (s.indexOf) return s.indexOf(e);
        for (var t = 0, n = s.length; t < n; t++)
            if (s[t] === e) return t;
        return -1
    },
	
    function() {
        var e = 1;
        var a = null;
		
        a = void 0 === window.videojs && "function" == typeof require ? require("video.js") : window.videojs,
            function(s, t) {
                var n = {},
                    i, i = function(n) {
                        var i = {
                                videoInfo: !1,
                                infoSize: 18,
                                infoBold: !1,
                                infoAlign: "left",
                                infoIcon: "",
                                infoText: "",
                                infoIconURL: "",
                                zoomMenu: !0,
                                relatedMenu: !0,
                                rateMenu: !0,
                                //shareMenu: !0,
                                zoomNav: !0,
                                zoomScroll: !1,
                                zoomReset: !0,
                                mirrorButton: !1,
                                contextMenu: !1,
                                timetooltip: !0,
                                mousedisplay: !0,
                                errordisplay: !0,
                                related: {},
                                logo: "",
                                logoalpha: 100,
                                logocontrolbar: "",
                                logoposition: "LT",
                                logooffsetX: 10,
                                logooffsetY: 10,
                                logourl: "",
                                shareUrl: "",
                                shareTitle: "",
                                shareEmebed: "",
                                endAction: "",
                                pubid: "",
                                slideImage: "",
                                slideWidth: 192,
                                slideHeight: 108,
                                slideType: "vertical",
                                sharemethod: "auto",
                                limit: 0,
                                limiturl: "",
                                limitimage: "",
                                limitmessage: "Watch full video on",
                                dashQualities: !0,
                                hlsQualities: !0,
                                minResolution: 2,
                                qualityButton: !0,
                                theaterButton: !1,
                                autoplay: !1,
                                resume: !0,
                                video_id: "",
                                overlay: "",
                                overlay_ready: !1
                            },
                            a = "deretsiger ton tcudorP",
                            o = this,
                            r = this.tech_,
                            l = new Array,
                            d = t.mergeOptions(i, n),
                            v = o.el(),
                            c = 0,
                            u = 0,
                            j = 0;
                        if (1 != e) {
                            var o = this,
                                v = o.el();
                            return v.innerHTML = '<h2 class="vjs-nokey">' + a.split("").reverse().join(""), void(v.style.visibility = "visible")
                        }
                        var h = vjs_find(v, ".vjs-big-play-button"),
                            p = document.createElement("div");
                        p.className = "vjs-replay-button vjs-hidden", v.appendChild(p), p.innerHTML = o.localize("Replay"), p.onclick = function(e) {
                            p.className = "vjs-replay-button vjs-hidden", o.play()
                        }, v.insertBefore(p, h), o.el_.style.visibility = "visible", 1 != d.contextMenu && v.addEventListener("contextmenu", function(e) {
                            e.preventDefault()
                        }, !1);
                        var f = o.autoplay();
                        f && (vjs_addClass(h, "vjs-abs-hidden"), vjs_addClass(vjs_find(v, ".vjs-loading-spinner"), "vjs-block")), d.related.length > 1 || (d.lang_menu_related = ""), quaButton = o.controlBar.addChild("button", {
                            el: t.dom.createEl("div", {
                                className: "vjs-quality-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden",
                                title: o.localize("Quality")
                            }, {
                                "aria-haspopup": "true",
                                "aria-expanded": "false"
                            })
                        }), o.controlBar.el_.insertBefore(quaButton.el_, o.controlBar.getChild("fullscreenToggle").el_);
                        var m = vjs_find(v, ".vjs-quality-button"),
                            _ = '<button class="vjs-quality-button vjs-menu-button vjs-menu-button-popup vjs-button"><span></span></button><div class="vjs-menu"><ul class="vjs-menu-content vjs-qlist" role="menu"></ul></div>';
                        m.innerHTML = _, setButton = o.controlBar.addChild("button", {
                            el: t.dom.createEl("div", {
                                className: "vjs-control vjs-button vjs-cog-menu-button vjs-hidden",
                                title: o.localize("Settings"),
                                id: "settings_button"
                            }, {
                                "aria-live": "polite",
                                "aria-disabled": "false"
                            })
                        }), o.controlBar.el_.insertBefore(setButton.el_, o.controlBar.getChild("fullscreenToggle").el_);
                        var g = vjs_find(v, ".vjs-cog-menu-button");
                        d.theaterButton && (theaterBtn = o.controlBar.addChild("button", {
                            el: t.dom.createEl("div", {
                                className: "vjs-control vjs-button vjs-control-button vjs-mode-control",
                                title: o.localize("Theater mode")
                            }, {
                                "aria-live": "polite",
                                "aria-disabled": "false"
                            })
                        }), o.controlBar.el_.insertBefore(theaterBtn.el_, o.controlBar.getChild("fullscreenToggle").el_), theaterBtn.el_.innerHTML = "<span></span>", theaterBtn.el_.addEventListener(O("click"), function(e) {
                            e.preventDefault(), e.stopPropagation();
                            var s = theaterBtn.el_;
                            vjs_hasClass(s, "vjs-mode") ? (vjs_removeClass(s, "vjs-mode"), o.trigger("mode", "normal")) : (vjs_addClass(s, "vjs-mode"), o.trigger("mode", "large"))
                        }, !1));
                        var y = vjs_El("div");
                        y.className = "vjs-menu-settings vjs-hidden";
                        var b = vjs_El("div");
                        b.className = "vjs-menu-div vjs-settings-div", y.appendChild(b);
                        var C = vjs_El("div");
                        C.className = "vjs-submenu vjs-settings-home", b.appendChild(C);
                        var k = vjs_El("ul");

                        function w() {
                            var e = vjs_find(v, ".vjs-menu-quality");
                            e && e.parentNode.removeChild(e), vjs_find(v, ".vjs-quality-button .vjs-menu .vjs-menu-content").innerHTML = ""
                        }

                        function T() {
                            var e = vjs_find(v, ".vjs-menu-settings");
                            if (c > 1) {
                                var s = vjs_find(v, "button.vjs-quality-button"),
                                    t = function(s) {
                                        s.preventDefault(), s.stopPropagation();
                                        var t = vjs_find(vjs_find(v, ".vjs-quality-button"), ".vjs-menu"),
                                            n = t.style.display;
                                        t.style.display = "none" == n ? "block" : "none", vjs_addClass(e, "vjs-hidden"), x()
                                    };
                                s.onclick = function(e) {
                                    t(e)
                                }, s.ontouchstart = function(e) {
                                    t(e)
                                }
                            }
                            vjs_find(v, ".vjs-settings-menu");
                            var n = vjs_find(v, ".vjs-settings-div"),
                                i = vjs_find(v, ".vjs-menu-speed"),
                                a = vjs_find(v, ".vjs-zoom-menu"),
                                o = vjs_find(v, ".vjs-settings-home");
								if (i) {
                                s = vjs_find(v, ".vjs-extend-speed");
                                var r = function(e) {
                                    e.preventDefault(), e.stopPropagation(), vjs_addClass(o, "vjs-hidden"), vjs_removeClass(i, "vjs-hidden"), a && vjs_addClass(a, "vjs-hidden"), n.style.width = l.speedMenu.width + "px", n.style.height = l.speedMenu.height + "px"
                                };
                                s.onclick = function(e) {
                                    r(e)
                                }, s.ontouchstart = function(e) {
                                    r(e)
                                };
                                var d = vjs_find(i, ".vjs-settings-back");
                                if (d) {
                                    var u = function(e) {
                                        e.preventDefault(), e.stopPropagation(), vjs_addClass(vjs_mfind(v, ".vjs-submenu"), "vjs-hidden"), vjs_removeClass(o, "vjs-hidden"), n.style.width = l.cogMenu.width + "px", n.style.height = l.cogMenu.height + "px"
                                    };
                                    d.onclick = function(e) {
                                        u(e)
                                    }, d.ontouchstart = function(e) {
                                        u(e)
                                    }
                                }
                            }
                            if (a) {
                                s = vjs_find(v, ".vjs-extend-zoom");
                                var j = function(e) {
                                    e.preventDefault(), e.stopPropagation(), vjs_addClass(o, "vjs-hidden"), vjs_removeClass(a, "vjs-hidden"), i && vjs_addClass(i, "vjs-hidden"), n.style.width = l.zoomMenu.width + "px", n.style.height = l.zoomMenu.height + "px"
                                };
                                s.onclick = function(e) {
                                    j(e)
                                }, s.ontouchstart = function(e) {
                                    j(e)
                                };
                                var p = vjs_find(a, ".vjs-settings-back");
                                if (p) {
                                    var f = function(e) {
                                        e.preventDefault(), e.stopPropagation(), vjs_addClass(vjs_mfind(v, ".vjs-submenu"), "vjs-hidden"), vjs_removeClass(o, "vjs-hidden"), n.style.width = l.cogMenu.width + "px", n.style.height = l.cogMenu.height + "px"
                                    };
                                    p.onclick = function(e) {
                                        f(e)
                                    }, p.ontouchstart = function(e) {
                                        f(e)
                                    }
                                }
                            }
                            e.onclick = function(e) {
                                e.preventDefault(), e.stopImmediatePropagation()
                            }, e.ontouchstart = function(e) {
                                e.preventDefault(), e.stopImmediatePropagation()
                            };
                            vjs_find(v, ".vjs-cog-menu-button");
                            var m = function(s) {
                                s.preventDefault(), s.stopImmediatePropagation();
                                e.className;
                                vjs_hasClass(e, "vjs-hidden") ? (vjs_removeClass(e, "vjs-hidden"), vjs_addClass(h, "vjs-hidden"), vjs_find(vjs_find(v, ".vjs-quality-button"), ".vjs-menu").style.display = "none") : function() {
                                    for (var s = vjs_mfind(v, ".vjs-submenu"), t = 0; t < s.length; t++) vjs_addClass(s[t], "vjs-hidden");
                                    vjs_removeClass(C, "vjs-hidden"), n.style.width = l.cogMenu.width + "px", n.style.height = l.cogMenu.height + "px", vjs_addClass(e, "vjs-hidden"), vjs_removeClass(h, "vjs-hidden")
                                }()
                            };
                            g.onclick = function(e) {
                                m(e)
                            }, g.ontouchstart = function(e) {
                                m(e)
                            }
                        }

                        function E() {
                            if (v.offsetWidth < 480) vjs_addClass(vjs_find(v, ".vjs-grid"), "vjs-abs-hidden"), 3 == d.newstate && "related" == d.endAction && vjs_removeClass(p, "vjs-hidden");
                            else {
                                vjs_addClass(p, "vjs-hidden"), vjs_removeClass(vjs_find(v, ".vjs-grid"), "vjs-abs-hidden");
                                var e = d.related.length,
                                    s = .8,
                                    t = 800;
                                if (e < 5 && (s = .7, t = 700), vjs_find(v, ".rel-block")) {
                                    vjs_removeClass(vjs_find(v, ".rel-block"), "rel-anim");
                                    var n = v.offsetWidth,
                                        i = v.offsetHeight,
                                        a = n * s;
                                    a > t && (a = t);
                                    var o = parseInt(vjs_find(v, ".vjs-related").style.maxWidth);
                                    isNaN(o) && (o = 0), parseInt(o) < 100 && (o = t), a > o && (a = o), vjs_find(v, ".vjs-related").style.maxWidth = t < o ? t + "px" : "800px";
                                    var r = 3,
                                        l = 2;
                                    e < 5 && 3 != e && (r = 2), a < 480 && (r = 2), e < 4 && (l = 1);
                                    var c = a / r * .5625,
                                        h = a / r;
                                    j = Math.ceil(e / 6), 2 == r && (j = Math.ceil(e / 4));
                                    var f = vjs_find(v, ".vjs-related");
                                    f.style.height = c * l + "px";
                                    var m = n / 2 - a / 2;
                                    f.style.top = i / 2 - c * l / 2 + "px", f.style.left = n / 2 - a / 2 + "px";
                                    var _ = parseInt(vjs_find(v, ".vjs-prev").offsetWidth + 5);
                                    if (vjs_find(v, ".vjs-arrow-prev").style.left = m - _ + "px", vjs_find(v, ".vjs-arrow-next").style.left = a + m + "px", u < j && vjs_removeClass(vjs_find(v, ".vjs-arrow-next"), "vjs-disabled"), u > 1) {
                                        var g = f.offsetWidth,
                                            y = (u - 1) * g;
                                        vjs_find(v, ".rel-block").style.left = "-" + y + "px"
                                    }
                                    for (var b = 0, C = 0, k = v.querySelectorAll(".rel-parent"), w = 0; w < k.length; w++) {
                                        var T = k[w],
                                            E = parseInt(T.style.top);
                                        0 != E && (T.style.top = c + "px"), T.style.width = h + "px", T.style.height = c + "px", (0 != b && 1 != b || 1 == l && 0 != b) && (0 == E && (C += h), T.style.left = C + "px"), b++
                                    }
                                    vjs_addClass(vjs_find(v, ".rel-block"), "rel-anim"), 3 == d.newstate && "related" == d.endAction && vjs_removeClass(vjs_find(v, ".vjs-grid"), "vjs-hidden")
                                }
                            }
                        }

                        function x() {
                            try {
                                var e = vjs_find(vjs_find(v, ".vjs-quality-button"), ".vjs-qlist");
                                if (e) {
                                    var s = v.offsetHeight,
                                        n = vjs_find(v, ".vjs-control-bar").offsetHeight + 5;
                                    if ("roundal" == t.options.skinname || "treso" == t.options.skinname) n = vjs_find(v, ".vjs-control-bar").offsetHeight + 10;
                                    max = s - n, vjs_find(v, ".vjs-menu-content.vjs-qlist").style.maxHeight = "none", e.offsetHeight > max && (vjs_find(v, ".vjs-menu-content.vjs-qlist").style.maxHeight = max + "px")
                                }
                            } catch (e) {}
                        }

                        function z() {
                            var e = vjs_find(v, ".vjs-menu-speed"),
                                s = vjs_find(v, ".vjs-zoom-menu"),
                                t = vjs_find(v, ".vjs-settings-div"),
                                n = vjs_find(v, ".vjs-control-bar");
                            vjs_addClass(n, "vjs-block"), t.style.width = "auto", t.style.height = "auto", e && vjs_addClass(e, "vjs-hidden"), s && vjs_addClass(s, "vjs-hidden");
                            var i = vjs_find(v, ".vjs-menu-settings");
                            vjs_removeClass(i, "vjs-hidden"), vjs_addClass(i, "vjs-invisible"), l.cogMenu = {
                                width: i.offsetWidth,
                                height: i.offsetHeight
                            }, e && (vjs_addClass(vjs_mfind(v, ".vjs-submenu"), "vjs-hidden"), vjs_removeClass(e, "vjs-hidden"), vjs_addClass(e, "vjs-invisible"), l.speedMenu = {
                                width: e.offsetWidth,
                                height: e.offsetHeight
                            }, vjs_removeClass(e, "vjs-invisible"), vjs_addClass(e, "vjs-hidden")), s && (vjs_addClass(vjs_mfind(v, ".vjs-submenu"), "vjs-hidden"), vjs_removeClass(s, "vjs-hidden"), vjs_addClass(s, "vjs-invisible"), l.zoomMenu = {
                                width: s.offsetWidth,
                                height: s.offsetHeight
                            }, vjs_removeClass(s, "vjs-invisible"), vjs_addClass(s, "vjs-hidden")), vjs_removeClass(n, "vjs-block"), vjs_addClass(vjs_mfind(v, ".vjs-submenu"), "vjs-hidden"), vjs_removeClass(vjs_find(v, ".vjs-settings-home"), "vjs-hidden"), t.style.width = l.cogMenu.width + "px", t.style.height = l.cogMenu.height + "px", vjs_removeClass(i, "vjs-invisible"), vjs_addClass(i, "vjs-hidden"), vjs_removeClass(vjs_find(v, ".vjs-settings-home"), "vjs-hidden")
                        }

                        function M(e, s) {
                            var t = parseInt(e),
                                n = "";
                            vjs_find(v, ".vjs-cog-menu-button").innerHTML, (t > 719 || "hd" == s.toLowerCase()) && (n = '<i class="vjs-hd-icon vjs-hd-home">HD</i>'), vjs_find(v, ".vjs-quality-button span").innerHTML = s + n
                        }

                        function L(e, s) {
                            return e.res && s.res ? +s.res - +e.res : 0
                        }
                        if (k.className = "vjs-menu-content vjs-settings-list", C.appendChild(k), vjs_find(v, ".vjs-control-bar").appendChild(y), s.addEventListener("resize", function(e) {
                                E(), x()
                            }, !1), o.updateSrc = function(e) {
                                if (d.dash = !1, d.hls = !1, !e) {
                                    var t = !1;
                                    return (d.relatedMenu && related.length > 0 || d.shareMenu || d.rateMenu || d.zoomMenu) && (t = !0), 1 != t && vjs_find(v, ".vjs-cog-menu-button").vjs_addClass("vjs-hidden"), o.src()
                                }
                                var n, i = new Array,
                                    a = new Array,
                                    r = new Array,
                                    l = "",
                                    u = 0,
                                    j = 0,
                                    h = 0,
                                    p = 0,
                                    f = 0,
                                    m = !1,
                                    _ = "MediaSource" in s,
                                    g = ["iPad", "iPhone", "iPod"].indexOf(navigator.platform) >= 0;
                                for (g && (_ = !1), g && 1 == e.length && (_ = !0); u < e.length; u++) {
                                    var y = "";
                                    try {
                                        N = e[u].type
                                    } catch (e) {}
                                    if ("" != N && (-1 === N.indexOf("mpeg") && -1 === N.indexOf("apple") || (d.hls = !0), -1 !== N.indexOf("dash") && (d.dash = !0)), e[u].res && e[u].label) {
                                        1 != m && (m = !0, n = {
                                            res: e[u].res,
                                            type: e[u].type,
                                            src: e[u].src,
                                            label: e[u].label
                                        });
                                        y = e[u].type;
                                        if (e[u].default) var b = "yes";
                                        else b = ""; - 1 !== y.indexOf("mpeg") || -1 !== y.indexOf("apple") ? (i[j] = {
                                            res: e[u].res,
                                            label: e[u].label,
                                            type: e[u].type,
                                            src: e[u].src,
                                            default: b
                                        }, ++j > 1 && (d.hls = !0, d.hlsQualities = !1)) : -1 !== y.indexOf("dash") ? (a[h] = {
                                            res: e[u].res,
                                            label: e[u].label,
                                            type: e[u].type,
                                            src: e[u].src,
                                            default: b
                                        }, ++h > 1 && (d.dash = !0, d.dashQualities = !1)) : (r[p] = {
                                            res: e[u].res,
                                            label: e[u].label,
                                            type: e[u].type,
                                            src: e[u].src,
                                            default: b
                                        }, p++)
                                    }
                                }
                                var C = new Array;
                                C = (C = i.length > 0 && _ ? i : a.length > 0 && _ ? a : r).sort(L);
                                for (u = 0; u < C.length; u++) {
                                    res = C[u].res, res_num = parseInt(res);
                                    var k = "";
                                    (res_num > 719 || "hd" == res.toLowerCase()) && (k = '<i class="vjs-hd-icon">HD</i>');
                                    0 == u && " vjs-first", "yes" == C[u].default ? (def_source = {
                                        res: C[u].res,
                                        type: C[u].type,
                                        src: C[u].src,
                                        label: C[u].label
                                    }, l = l + '<li data-res="' + u + '" class="vjs-checked">' + C[u].label + k + "</li>") : l = l + '<li data-res="' + u + '">' + C[u].label + k + "</li>", f++
                                }
                                if (f > 1) {
                                    w(), c = f, vjs_find(v, ".vjs-quality-button .vjs-menu .vjs-menu-content").innerHTML = l, vjs_removeClass(vjs_find(v, ".vjs-quality-button"), "vjs-hidden");
                                    var E = vjs_mfind(v, ".vjs-quality-button .vjs-menu .vjs-menu-content li");
                                    d.menutouch = !1;
                                    for (u = 0; u < E.length; u++) {
                                        var x = E[u];
                                        x.ontouchstart = function(e) {
                                            d.menutouch = !1
                                        }, x.ontouchmove = function(e) {
                                            d.menutouch = !0
                                        };
                                        var z = function(e) {
                                            e.preventDefault(), e.stopPropagation();
                                            for (var s = vjs_mfind(v, ".vjs-menu-content li"), t = 0; t < s.length; t++) vjs_removeClass(s[t], "vjs-checked");
                                            vjs_addClass(e.target, "vjs-checked");
                                            var n = e.target.getAttribute("data-res");
                                            M(C[n].res, C[n].label);
                                            var i = {
                                                type: C[n].type,
                                                src: C[n].src
                                            };
                                            o.trigger("resolutionchange", {
                                                label: C[n].label,
                                                res: C[n].res
                                            }), vjs_find(v, ".vjs-quality-button .vjs-menu").style.display = "none", B(i)
                                        };
                                        x.onclick = function(e) {
                                            z(e)
                                        }, x.ontouchstart = function(e) {
                                            z(e)
                                        }
                                    }

                                    function B(e) {
                                        var t = o.currentTime(),
                                            n = o.paused();
                                        e.type;
                                        if (o.src(e), o.load(), o.play(), o.on("loadeddata", function() {
                                                try {
                                                    s.URL.revokeObjectURL(mediaurl)
                                                } catch (e) {}
                                                t > 0 && o.currentTime(t), o.play()
                                            }), o.handleTechSeeked_(), n) {
                                            var i = !0;
                                            o.on("playing", function() {
                                                i && (o.pause(), o.handleTechSeeked_(), i = !1)
                                            })
                                        }
                                    }(1 != d.hls && 1 != d.dash || 1 != _) && M(n.res, n.label), i.length > 1 && 1 != d.hlsQualities && _ && M(n.res, n.label), a.length > 1 && 1 != d.dashQualities && _ && M(n.res, n.label), T(), "undefined" != typeof def_source ? (1 != d.hls && 1 != d.dash || 1 != _ || i.length > 1 && 1 != d.hlsQualities && _ || a.length > 1 && 1 != d.dashQualities && _) && def_source.src != n.src && (M(def_source.res, def_source.label), o.src([{
                                        type: def_source.type,
                                        src: def_source.src
                                    }])) : (i.length > 1 && _ || a.length > 1 && _) && M("auto", "Auto")
                                }
                            }, o.options_.sources.length > 0) {
                            var B = 0,
                                I = 0;
                            for (B = 0; B < o.options_.sources.length; B++)(o.options_.sources[B].res || o.options_.sources[B].label) && I++;
                            I >= d.minResolution && o.updateSrc(o.options_.sources)
                        }
                        if (1 != d.errordisplay && vjs_addClass(vjs_find(v, ".vjs-error-display"), "vjs-abs-hidden"), 1 != d.timetooltip) {
                            var A = vjs_find(v, ".vjs-play-progress"),
                                N = vjs_find(A, ".vjs-time-tooltip");
                            vjs_addClass(N, "vjs-abs-hidden")
                        }

                        function D(e, s) {
                            if (localStorage) try {
                                localStorage[e] = s
                            } catch (e) {}
                        }

                        function H(e, s) {
                            e.style.transform = "scale(" + s + ")", e.style.transform = "scale(" + s + ")", e.style.webkitTransform = "scale(" + s + ")", e.style.mozTransform = "scale(" + s + ")", e.style.msTransform = "scale(" + s + ")", e.style.oTransform = "scale(" + s + ")"
                        }

                        function P(e) {
                            for (var s = e.offsetTop; e = e.offsetParent;) s += e.offsetTop;
                            return s
                        }

                        function S() {
                            document.body.style.MozUserSelect = "none", document.body.style.webkitUserSelect = "none", document.body.focus(), document.onselectstart = function() {
                                return !1
                            }
                        }

                        function q() {
                            document.body.style.MozUserSelect = "text", document.body.style.webkitUserSelect = "text", document.onselectstart = function() {
                                return !0
                            }
                        }

                        function O(e) {
                            if ("ontouchstart" in document.documentElement) switch (e) {
                                case "click":
                                    e = "touchend";
                                    break;
                                case "mousedown":
                                    e = "touchstart";
                                    break;
                                case "mousemove":
                                    e = "touchmove";
                                    break;
                                case "mouseup":
                                    e = "touchend"
                            }
                            return e
                        }
                        1 != d.mousedisplay && vjs_addClass(vjs_find(v, ".vjs-mouse-display"), "vjs-abs-hidden vjs-out"), o.ready(function() {
                            d.isAddon = !1, d.newstate = 4, d.oldstate = 4, d.events = {};
                            var e = o.id(),
                                n = o.el(),
                                i = !1,
                                a = o.$(".vjs-tech"),
                                r = !1,
                                v = this,
                                f = !1,
                                m = !1,
                                _ = new Array,
                                g = new Array,
                                k = new Array,
                                x = "height",
                                L = new Array,
                                B = new Array,
                                I, A = !1,
                                N = vjs_touch_device();
                            if (1 == o.options_.sources.length) {
                                var W = o.options_.sources[0],
                                    R = W.type; - 1 !== R.indexOf("dash") && (o.reset(), o.src(W))
                            } else if (o.options_.sources.length > 1) {
                                var W = o.options_.sources[0],
                                    R = W.type,
                                    U = "MediaSource" in s; - 1 !== R.indexOf("dash") && U && (o.reset(), o.src(W))
                            }
                            if (d.logocontrolbar) {
                                var F = vjs_El("img"),
                                    Y = !1;
                                F.src = d.logocontrolbar, F.onload = function() {
                                    if ("naturalHeight" in this ? this.naturalHeight + this.naturalWidth === 0 && (Y = !0) : this.width + this.height == 0 && (Y = !0), 1 != Y) {
                                        var e = vjs_El("div");
                                        if (e.className = "vjs-logo-bar", "" !== d.logourl) {
                                            var s = vjs_El("a");
                                            s.href = d.logourl, s.target = "_blank", d.logotitle && s.setAttribute("title", d.logotitle), s.appendChild(F), e.appendChild(s), e.style.cursor = "pointer"
                                        } else e.appendChild(Q);
                                        o.controlBar.el().insertBefore(e, o.controlBar.getChild("fullscreenToggle").el_)
                                    }
                                }
                            }
                            if (d.logo) {
                                var Q = vjs_El("img");
                                Q.src = d.logo;
                                var K = vjs_El("div");
                                K.className = "vjs-logo", n.appendChild(K), Q.onload = function() {
                                    if ("naturalHeight" in this) {
                                        if (this.naturalHeight + this.naturalWidth === 0) return void n.removeChild(K)
                                    } else if (this.width + this.height == 0) return void n.removeChild(K);
                                    var e = d.logooffsetX;
                                    d.logooffsetY;
                                    if ("RT" == d.logoposition ? (K.style.right = e + "px", K.style.top = e + "px") : (K.style.left = e + "px", K.style.top = e + "px"), "" !== d.logourl) {
                                        var s = vjs_El("a");
                                        s.href = d.logourl, s.target = "_blank", d.logotitle && s.setAttribute("title", d.logotitle), s.appendChild(Q), K.appendChild(s), K.style.cursor = "pointer"
                                    } else K.appendChild(Q)
                                }, Q.onerror = function() {
                                    n.removeChild(K)
                                }
                            }
                            if ("treso" == t.options.skinname) {
                                var Z = vjs_find(n, ".vjs-current-time"),
                                    X = vjs_find(n, ".vjs-duration"),
                                    $ = vjs_find(n, ".vjs-control-bar");
                                $.removeChild(Z);
                                var G = vjs_find(n, ".vjs-progress-control");
                                G.insertBefore(Z, G.childNodes[0]), $.removeChild(X), G.appendChild(X)
                            }

                            function V(e, s) {
                                function t(e, s) {
                                    return e.sort(function(e, t) {
                                        var n = e[s],
                                            i = t[s];
                                        return n < i ? -1 : n > i ? 1 : 0
                                    })
                                }
                                for (var i = "", a = 0, r = (_ = (_ = t(_, "height" == e ? "height" : "bandwidth")).reverse()).length; a < r; a++) {
                                    var l = "";
                                    if ("height" == e) {
                                        var v = "";
                                        parseInt(_[a].height) > 719 && (v = '<i class="vjs-hd-icon">HD</i>');
                                        var c = 0;
                                        1 == _[a].auto && (l = ' class="vjs-checked"'), i = i + '<li data-id="' + (c = "dash" == s ? _[a].id : _[a].height) + '" data-res="' + _[a].height + '"' + l + ' role="menuitem" aria-live="polite" aria-disabled="false">' + _[a].height + "p" + v + "</li>"
                                    } else c = "dash" == s ? _[a].id : _[a].bandwidth, 1 == _[a].auto && (l = ' class="vjs-checked"'), i = i + '<li data-id="' + c + '" data-res="' + _[a].bandwidth + '"' + l + ' role="menuitem" aria-live="polite" aria-disabled="false">' + _[a].bandwidth + " kbps</li>"
                                }
                                vjs_find(n, ".vjs-quality-button .vjs-menu .vjs-menu-content").innerHTML = i, vjs_removeClass(vjs_find(n, ".vjs-quality-button"), "vjs-hidden"), M("auto", "Auto"), T(), d.menutouch = !1;
                                var u = vjs_mfind(n, ".vjs-quality-button .vjs-menu .vjs-menu-content li");
                                for (a = 0; a < u.length; a++) {
                                    item = u[a];
                                    var j = function(t) {
                                        t.preventDefault(), t.stopPropagation();
                                        for (var i = vjs_mfind(n, ".vjs-menu-content li"), a = 0; a < i.length; a++) vjs_removeClass(i[a], "vjs-checked");
                                        vjs_addClass(t.target, "vjs-checked");
                                        var r = t.target,
                                            l = r.getAttribute("data-id"),
                                            d = r.getAttribute("data-res");
                                        vjs_find(n, ".vjs-quality-button .vjs-menu").style.display = "none", "dash" == s ? (o.dash.mediaPlayer.setFastSwitchEnabled(!1), o.dash.mediaPlayer.setQualityFor("video", l), "height" == e ? (M(d, d + "p"), o.trigger("resolutionchange", {
                                            label: d + "p",
                                            res: d
                                        })) : (M(d, d > 1e4 ? d / 1e3 + " MB" : d + " kB"), o.trigger("resolutionchange", {
                                            label: d + " kB",
                                            res: d
                                        }))) : o.tech_.hls.representations().forEach(function(s) {
                                            "height" == e ? s.height == l ? (s.enabled(!0), M(d, d + "p"), o.trigger("resolutionchange", {
                                                label: d + "p",
                                                res: d
                                            })) : s.enabled(!1) : parseInt(s.bandwidth / 1e3) == l ? (s.enabled(!0), M(d, d > 1e4 ? (d / 1e3).toFixed(1) + " MB" : d + " kB"), o.trigger("resolutionchange", {
                                                label: d + " kB",
                                                res: d
                                            })) : s.enabled(!1)
                                        })
                                    };
                                    item.ontouchstart = function(e) {
                                        j(e)
                                    }, item.onclick = function(e) {
                                        j(e)
                                    }
                                }
                            }
                            if (vjs_find(n, "video").controls = !1, this.on("loadeddata", function() {
                                    if (1 != m) try {
                                        o.dash.mediaPlayer.setFastSwitchEnabled(!1);
                                        var e = o.dash.mediaPlayer.getBitrateInfoListFor("video"),
                                            s = o.dash.mediaPlayer.getQualityFor("video"),
                                            t = 0;
                                        e.length > 1 && d.dashQualities && (o.dash.mediaPlayer.setAutoSwitchQualityFor("video", !1), e.forEach(function(e) {
                                            var n = new Object;
                                            "video" == e.mediaType && (e.height > 0 && -1 == vjs_inArray(e.height, L) && (n.id = t, n.height = e.height, n.auto = t == s ? 1 : 0, g.push(n), L.push(e.height), I = "dash"), e.bandwidth > 0 && -1 == vjs_inArray(e.bandwidth, B) && (n.id = t, n.auto = t == s ? 1 : 0, n.bandwidth = parseInt(e.bandwidth / 1e3), k.push(n), B.push(e.bandwidth), I = "dash")), t += 1
                                        }))
                                    } catch (e) {}
                                    if (["iPad", "iPhone", "iPod"].indexOf(navigator.platform) >= 0 && (f = !0), 1 != f) try {
                                        o.tech_.hls.representations().forEach(function(e) {
                                            var s = new Object,
                                                t = o.tech_.hls.selectPlaylist();
                                            e.width > 0 && e.height > 0 && -1 == vjs_inArray(e.height, L) && (s.auto = 0, e.bandwidth && e.bandwidth > 0 && t.attributes.BANDWIDTH == e.bandwidth && (s.auto = 1), s.id = e.id, s.width = e.width, s.height = e.height, g.push(s), L.push(e.height), I = "hls"), e.bandwidth > 0 && -1 == vjs_inArray(e.bandwidth, B) && (s.auto = 0, t.attributes.BANDWIDTH == e.bandwidth && (s.auto = 1), s.id = e.id, s.bandwidth = parseInt(e.bandwidth / 1e3), k.push(s), B.push(e.bandwidth), I = "hls")
                                        })
                                    } catch (e) {}(g.length > 1 || k.length > 1) && (w(), c = g.length, f = !0, m = !0, k > g ? (x = "bandwidth", _ = k) : (x = "height", _ = g), V(x, I))
                                }), s.onclick = function(e) {
                                    d.isAddon && (d.isAddon = !1, vjs_addClass(vjs_find(n, ".vjs-grid"), "vjs-hidden"), vjs_addClass(vjs_find(n, ".vjs-sharing-overlay"), "vjs-hidden"), vjs_removeClass(h, "vjs-hidden"), d.isAddon = !1, v.pauseLock = !1, 1 == d.player_state && 3 != d.newstate || o.play());
                                    for (var s = vjs_mfind(n, ".vjs-submenu"), t = 0; t < s.length; t++) vjs_addClass(s[t], "vjs-hidden");
                                    vjs_removeClass(C, "vjs-hidden");
                                    try {
                                        b.style.width = l.cogMenu.width + "px", b.style.height = l.cogMenu.height + "px"
                                    } catch (e) {}
                                    vjs_addClass(y, "vjs-hidden"), vjs_find(n, ".vjs-quality-button .vjs-menu").style.display = "none"
                                }, vjs_find(n, ".vjs-play-control").parentNode.insertBefore(vjs_find(n, ".vjs-play-control"), vjs_find(n, ".vjs-live-control")), d.videoInfo && (d.shareTitle || "" != d.infoText)) {
                                var J = !1,
                                    ee = d.shareUrl || document.location.href,
                                    se = vjs_El("span");
                                se.className = "vjs-info", "" != d.infoText ? inner = d.infoText : inner = d.shareTitle, "" != d.infoIcon && (Q = '<img src="' + d.infoIcon + '"/>', "" != d.infoIconURL && (Q = '<a target="_blank" href=' + d.infoIconURL + ">" + Q + "</a>", inner = '<a href="' + ee + '" target="_blank">' + inner + "</a>", J = !0), "right" != d.infoAlign ? inner = Q + inner : inner += Q), 1 != J && (inner = '<a href="' + ee + '" target="_blank">' + inner + "</a>"), se.innerHTML = inner, n.appendChild(se);
                                var te = d.infoSize;
                                d.infoBold && (se.style.fontWeight = "bold"), parseInt(d.infoSize) > 15 && parseInt(d.infoSize) < 24 && (te = 18), se.style.fontSize = te + "px", "right" == d.infoAlign && (se.style.textAlign = "right");
                                var Q = "";
                                se.onclick = function() {
                                    s.open(ee, "_blank")
                                }
                            }
                            this.pauseLock = !1, d.seeking = !1, vjs_find(n, ".vjs-progress-holder").addEventListener(O("mousedown"), function(e) {
                                e.preventDefault(), d.seeking = !0
                            }, !1), vjs_find(n, ".vjs-progress-holder").addEventListener(O("touchstart"), function(e) {
                                e.preventDefault(), d.seeking = !0
                            }, !1), vjs_find(n, ".vjs-progress-holder").addEventListener(O("touchend"), function(e) {
                                e.preventDefault(), d.seeking = !1
                            }, !1), vjs_find(n, ".vjs-progress-holder").addEventListener(O("mouseup"), function(e) {
                                e.preventDefault(), d.seeking = !1
                            }, !1);
                            var ne = vjs_find(n, ".vjs-load-progress");
                            ne.style.opacity = .3, ne.style.MozOpacity = .3, ne.style.filter = "alpha(opacity=30)", this.on("timeupdate", function() {
                                if (o.paused() || oe(n, "TIME"), d.resume && d.video_id) {
                                    var e = o.currentTime();
                                    (e = e.toFixed(2)) > 0 && D("vjs_resume", d.video_id + "," + e)
                                }
                            }), this.on("volumechange", function() {
                                D("volume", o.volume())
                            }), this.on("ended", function() {
                                if (d.newstate = 3, d.resume && "" != d.video_id && D("vjs_resume", d.video_id + ",0"), "" != d.endAction)
                                    if ("share" == d.endAction && d.shareMenu) vjs_addClass(vjs_find(n, ".vjs-menu-settings"), "vjs-hidden"), vjs_removeClass(vjs_find(n, ".vjs-sharing-overlay"), "vjs-hidden"), vjs_addClass(h, "vjs-hidden"), d.isAddon = !0;
                                    else if ("related" == d.endAction && d.relatedMenu && d.related.length > 1) {
                                    n.offsetWidth < 480 ? (vjs_addClass(vjs_find(n, ".vjs-grid"), "vjs-abs-hidden"), vjs_addClass(h, "vjs-hidden"), vjs_removeClass(p, "vjs-hidden")) : (vjs_removeClass(vjs_find(n, ".vjs-grid"), "vjs-abs-hidden"), vjs_addClass(vjs_find(n, ".vjs-menu-settings"), "vjs-hidden"), vjs_addClass(h, "vjs-hidden"), vjs_removeClass(vjs_find(n, ".vjs-grid"), "vjs-hidden"), E(), d.isAddon = !0)
                                } else vjs_addClass(h, "vjs-hidden"), vjs_removeClass(p, "vjs-hidden");
                                else vjs_addClass(h, "vjs-hidden"), vjs_removeClass(p, "vjs-hidden")
                            }), this.on("waiting", function() {
                                1 == d.oldstate && (d.oldstate = 2, d.newstate = 2), vjs_addClass(p, "vjs-hidden")
                            }), this.on("playing", function() {
                                vjs_addClass(p, "vjs-hidden"), vjs_removeClass(h, "vjs-hidden"), h.style.visibility = "visible", vjs_removeClass(h, "vjs-abs-hidden"), vjs_removeClass(vjs_find(n, ".vjs-loading-spinner"), "vjs-block"), N && vjs_addClass(h, "vjs-abs-hidden"), 1 != i && (t.trigger(this.el_, {
                                    type: "firstplay",
                                    target: this.el_
                                }), i = !0), 2 != d.oldstate && 1 != d.oldstate && (d.newstate = 1, oe(n, "STATE"), d.oldstate = 1), d.overlay_ready && vjs_removeClass(vjs_find(n, ".vjs-over"), "vjs-fade")
                            }), this.on("pause", function(e) {
                                v.pauseLock || 0 != d.oldstate && 1 != d.seeking && (d.newstate = 0, oe(n, "STATE"), d.oldstate = 0, d.overlay_ready && vjs_addClass(vjs_find(n, ".vjs-over"), "vjs-fade"))
                            });
                            var ie = this.volume(),
                                ae;

                            function oe(s, t, i) {
                                var a = new Array("PAUSED", "PLAYING", "BUFFERING", "COMPLETED", "IDLE");
                                switch (t) {
                                    case "TIME":
                                        var r = o.currentTime(),
                                            l = o.duration();
                                        r = r.toFixed(2), l = l.toFixed(2);
                                        try {
                                            updateEvent("TIME", r, l, e)
                                        } catch (e) {}
                                        break;
                                    case "STATE":
                                        if (d.isAddon) return;
                                        try {
                                            updateEvent("STATE", d.newstate, 0, e)
                                        } catch (e) {}
                                }
                                if (d.events && d.events[t]) {
                                    var v = d.events[t];
                                    switch (t) {
                                        case "TIME":
                                            r = o.currentTime(), l = o.duration();
                                            v[0] = r, v.position = r, v.duration = l, v[1] = l, v.id = e, v[2] = e;
                                            try {
                                                updateEvent("TIME", r, l, e)
                                            } catch (e) {}
                                            break;
                                        case "VOLUME":
                                            var c = o.volume();
                                            v.percentage = c.toFixed(2), v[0] = c.toFixed(2), v.id, v[2];
                                            try {
                                                updateEvent("VOLUME", c.toFixed(2), 0, e)
                                            } catch (e) {}
                                            break;
                                        case "STATE":
                                            if (d.isAddon) return;
                                            d.newstate, d.oldstate;
                                            v.newstate = a[d.newstate], v.oldstate = a[d.oldstate], v.id;
                                            try {
                                                updateEvent("STATE", v.newstate, v.oldstate, e)
                                            } catch (e) {}
                                    }
                                    document.createEventObject ? n.fireEvent("on" + v, evt) : n.dispatchEvent(v)
                                }
                            }
                            n.addModelListener = function(e, s) {
                                if ("string" == typeof e) {
                                    var t = e.toUpperCase();
                                    if (("TIME" == t || "STATE" == t || "SEEK" == t) && document.createEvent) {
                                        var i = document.createEvent("Event");
                                        if (i.initEvent(t, !0, !0), d.events[t] = i, "string" == typeof s) {
                                            var a = eval(s);
                                            try {
                                                n.addEventListener(t, a, !1)
                                            } catch (e) {}
                                        } else try {
                                            n.addEventListener(t, s, !1)
                                        } catch (e) {}
                                        try {
                                            oe(n, t)
                                        } catch (e) {}
                                    }
                                }
                            }, n.removeModelListener = function(e, s) {
                                if ("string" == typeof e) {
                                    var t = e.toUpperCase();
                                    n.removeEventListener(t, s, !1);
                                    try {
                                        delete n.options.events[t]
                                    } catch (e) {}
                                }
                            }, n.sendEvent = function(e, s) {
                                if ("string" == typeof e) switch (e = e.toLowerCase()) {
                                    case "anyshow":
                                        try {
                                            n.removeChild(ae)
                                        } catch (e) {}(ae = vjs_El("div")).style.width = "100%", ae.style.height = "100%", ae.style.position = "absolute", ae.style.left = "0", ae.style.top = "0", ae.style.background = "rgba(0,0,0,0.5)", n.appendChild(ae), h.style.visibility = "hidden", ae.style.pointerEvents = "none";
                                    case "anycancel":
                                        try {
                                            n.removeChild(ae)
                                        } catch (e) {}
                                        h.style.visibility = "vidible";
                                    case "play":
                                        o.paused() && o.play();
                                        break;
                                    case "mute":
                                        o.muted(!0);
                                        break;
                                    case "unmute":
                                        o.muted(!1);
                                        break;
                                    case "volume":
                                        if (s >= 0 && s <= 100) {
                                            o.volume(s / 100);
                                            break
                                        }
                                        case "pause":
                                            1 != o.paused() && o.pause()
                                }
                            };
                            var re = {
                                id: e
                            };
                            try {
                                playerReady(re)
                            } catch (e) {}
                            d.newstate = 4, oe(n, "STATE"), o.on("useractive", function() {
                                vjs_find(n, "video").controls = !1
                            }), o.on("contentupdate", function() {
                                var e = vjs_find(n, ".vjs-tech");
                                e.style.top = "0", e.style.left = "0", e.style.transform = "scale(1)", e.style.webkitTransform = "scale(1)", e.style.mozTransform = "scale(1)", e.style.msTransform = "scale(1)", e.style.oTransform = "scale(1)"
                            }), o.on("firstplay", function() {
                                if (d.resume && "" != d.video_id) {
                                    if (localStorage && localStorage.vjs_resume) {
                                        var e = localStorage.vjs_resume.split(",");
                                        if (2 == e.length)
                                            if (e[0] == d.video_id && Number(e[1]) > 3) {
                                                e[1];
                                                o.currentTime(e[1])
                                            }
                                    }
                                    D("vjs_resume", d.video_id + ",0")
                                }
                                if (vjs_find(n, "video").controls = !1, d.limit > 0 && ("" != d.limiturl || "" != d.shareUrl)) {
                                    var s = !1;
                                    o.on("timeupdate", function() {
                                        if (o.currentTime() > d.limit && (o.pause(), h.style.display = "none", 1 != s)) {
                                            s = !0;
                                            var e = vjs_El("div");
                                            e.className = "vjs-limit-overlay";
                                            var t = vjs_El("a");
                                            if (t.className = "vjs-limit", t.href = d.limiturl, t.target = "_blank", t.style.textDecoration = "none", e.appendChild(t), "" == d.limiturl && (d.limiturl = d.shareUrl), "" != d.limitimage) {
                                                var n = vjs_El("img");
                                                n.src = d.limitimage, n.onload = function() {
                                                    t.innerHTML = '<img style="max-width:100%;height:auto;" src="' + d.limitimage + '" />'
                                                }, n.onerror = function() {
                                                    i()
                                                }
                                            } else i();

                                            function i() {
                                                var e = vjs_El("span");
                                                e.style.lineHeight = "1.5em";
                                                var s = d.limitmessage;
                                                e.innerHTML = s + '<span style="color:#fff;">' + d.limiturl + "</span>", t.appendChild(e)
                                            }
                                            o.el().appendChild(e)
                                        }
                                    })
                                }
                                if (!i) {
                                    var a = o.$(".vjs-tech");
                                    o.$(".vjs-tech");
                                    a && a.removeAttribute("poster");
                                    var r = vjs_find(n, ".vjs-mouse-display");
                                    if (d.slideImage && 1 != N && 1 != A && r) {
                                        A = !0;
                                        var l = vjs_El("div");
                                        l.className = "vjs-progress-slide";
                                        var v = vjs_El("div"),
                                            c = vjs_El("div");
                                        v.className = "vjs-thumb", c.className = "vjs-thumb-duration";
                                        var u = vjs_El("img");
                                        u.src = d.slideImage, "horizontal" == d.slideType ? (u.style.width = "auto", u.style.height = d.slideHeight + "px") : (u.style.height = "auto", u.style.width = d.slideWidth + "px"), v.appendChild(u), v.appendChild(c), l.appendChild(v), v.style.left = "-" + parseInt(d.slideWidth / 2) + "px", vjs_find(n, ".vjs-progress-control").append(l), l.style.left = "-1000px";
                                        var j = new Image;
                                        j.src = d.slideImage, j.onload = function() {
                                            vjs_addClass(vjs_find(vjs_find(n, ".vjs-play-progress"), ".vjs-time-tooltip"), "vjs-abs-hidden"), vjs_addClass(vjs_find(n, ".vjs-mouse-display"), "vjs-abs-hidden");
                                            var e = this.width,
                                                s = this.height,
                                                i = e / d.slideWidth;
                                            if ("horizontal" != d.slideType) i = s / d.slideHeight;
                                            vjs_find(n, ".vjs-progress-holder").onmousemove = function(e) {
                                                ! function(e) {
                                                    parseInt(o.duration());
                                                    var s = vjs_find(n, ".vjs-progress-holder").offsetWidth,
                                                        a = parseFloat(vjs_find(n, ".vjs-mouse-display").style.left);
                                                    if ("auto" == a) {
                                                        var r = parseFloat(vjs_find(n, ".vjs-mouse-display").style.left);
                                                        a = parseInt(r)
                                                    }
                                                    var j = Number(a) / Number(s),
                                                        h = t.options.skinname,
                                                        p = vjs_find(vjs_find(n, ".vjs-mouse-display"), ".vjs-time-tooltip").innerHTML;
                                                    if ("treso" == t.options.skinname) {
                                                        var f = vjs_find(n, ".vjs-progress-holder").offsetLeft;
                                                        a += f
                                                    }
                                                    var m = parseInt(j * i);
                                                    if (vjs_find(n, ".vjs-thumb").style.width = d.slideWidth + "px", vjs_find(n, ".vjs-thumb").style.height = d.slideHeight + "px", "horizontal" == d.slideType) {
                                                        var _ = m * d.slideWidth;
                                                        u.style.left = "-" + _ + "px"
                                                    } else _ = m * d.slideHeight, u.style.top = "-" + _ + "px";
                                                    a < 0 && (a = 0), a > s && (a = s), c.innerHTML = p;
                                                    var g = d.slideWidth / 2;
                                                    "treso" == h && (g += f);
                                                    var y = s - d.slideWidth / 2;
                                                    "treso" == h && (y += f), a < g && (a = g), a > y && (a = y), "party" == h && (a += 10), l.style.left = a + "px", v.style.opacity = 1, v.style.MozOpacity = 1, v.style.filter = "alpha(opacity=100)"
                                                }()
                                            }, vjs_find(n, ".vjs-progress-holder").onmouseout = function(e) {
                                                v.style.opacity = 0, v.style.MozOpacity = 0, v.style.filter = "alpha(opacity=0)", l.style.left = "-1000px"
                                            }
                                        }
                                    }
                                }
                            });
                            var le = vjs_El("div");
                            n.appendChild(le), le.className = "vjs-backdrop";
                            var de = !1;
                            if ((d.relatedMenu || d.shareMenu || d.rateMenu || d.zoomMenu) && (de = !0), de) {
                                var i = !1;
                                if (d.zoomMenu) {
                                    var ve = vjs_El("div");
                                    ve.className = "vjs-zoom-info vjs-hidden", n.appendChild(ve)
                                }
                                o.on("firstplay", function() {
                                    if (!i) {
                                        i = !0, localStorage && localStorage.volume && o.volume(localStorage.volume), vjs_addClass(vjs_find(n, ".vjs-poster"), "vjs-hidden");
                                        var e = "",
                                            a = !1,
                                            r = !1;
                                        if (d.shareMenu && (e = e + '<li class="vjs-settings-item vjs-share-button">' + o.localize("Share") + '<span class="vjs-share-icon"></span></li>'), d.relatedMenu && d.related.length > 1 && (e = e + '<li class="vjs-settings-item vjs-related-button">' + o.localize("Related") + '<span class="vjs-related-icon"></span></li>'), d.zoomMenu) e = e + '<li class="vjs-settings-item vjs-extend-zoom vjs-menu-forward">' + o.localize("Zoom") + '<span class="zoom-label">100%</span></li>', (r = vjs_El("div")).className = "vjs-submenu vjs-zoom-menu vjs-hidden", r.innerHTML = '<div class="vjs-settings-back vjs-zoom-return"><span>' + o.localize("Zoom") + '</span></div><div class="vjs-zoom-slider"><div class="vjs-zoom-back"></div><div class="vjs-zoom-level"></div></div><div class="vjs-zoom-reset">RESET</div>';
                                        if (d.rateMenu) e = e + '<li class="vjs-settings-item vjs-extend-speed vjs-menu-forward">' + o.localize("Speed") + "<span>Normal</span></li>", (a = vjs_El("div")).className = "vjs-submenu vjs-menu-speed vjs-hidden", a.innerHTML = '<ul class="vjs-menu-content"><li class="vjs-settings-back">' + o.localize("Speed") + '</li><li class="vjs-speed">0.5x</li><li class="vjs-speed vjs-checked">1x</li><li class="vjs-speed">1.1x</li><li class="vjs-speed">1.5x</li><li class="vjs-speed">2x</li></ul>';
                                        var l = vjs_find(n, ".vjs-settings-list");
                                        if ("" != e) {
                                            e += "", l.innerHTML = e + l.innerHTML, a && vjs_find(n, ".vjs-settings-div").appendChild(a), r && vjs_find(n, ".vjs-settings-div").appendChild(r), vjs_removeClass(vjs_find(n, ".vjs-cog-menu-button"), "vjs-hidden"), T(), z();
                                            for (var c = function(e) {
                                                    e.preventDefault(), e.stopImmediatePropagation();
                                                    var s = e.target.innerHTML,
                                                        t = (s = s.replace("x", "")) + "x";
                                                    if ("1" == s && (t = "Normal"), vjs_find(n, ".vjs-extend-speed span").innerHTML = t, parseFloat(s) > 0) {
                                                        o.playbackRate(s);
                                                        for (var i = n.querySelectorAll(".vjs-speed"), a = 0; a < i.length; a++) vjs_removeClass(i[a], "vjs-checked");
                                                        vjs_addClass(this, "vjs-checked")
                                                    }
                                                }, p = n.querySelectorAll(".vjs-speed"), f = 0; f < p.length; f++) p[f].addEventListener("click", c, !0), p[f].addEventListener("touchstart", c, !0)
                                        }
                                        if (d.related.length > 1 && d.relatedMenu) {
                                            var m = d.related.length,
                                                _ = vjs_El("div");
                                            _.innerHTML = '<div class="vjs-close-btn"></div><div class="vjs-arrow vjs-arrow-prev vjs-disabled"><div class="vjs-prev"></div></div><div class="vjs-arrow vjs-arrow-next"><div class="vjs-next"></div></div>', _.className = "vjs-grid vjs-hidden";
                                            var g = vjs_El("div");
                                            g.className = "vjs-related";
                                            var y = n.offsetWidth,
                                                b = .8 * y;
                                            _.appendChild(g), n.appendChild(_);
                                            var C = parseInt(g.style.maxWidth);
                                            isNaN(C) && (C = 0), parseInt(C) < 100 && (C = 800), b > C && (b = C);
                                            var k = 3,
                                                w = 2;
                                            m < 5 && 3 != m && (k = 2), b < 480 && (k = 2), m < 4 && (w = 1);
                                            var x = b / k * .5625,
                                                M = x * w,
                                                L = b / k;
                                            g.style.height = M + "px";
                                            var B = n.offsetHeight;
                                            g.style.top = B / 2 - M / 2 + "px", g.style.left = y / 2 - b / 2 + "px";
                                            var I = parseInt(vjs_find(n, ".vjs-prev").offsetWidth) + 5;
                                            vjs_find(n, ".vjs-arrow-prev").style.left = parseInt(g.style.left) - I + "px", vjs_find(n, ".vjs-arrow-next").style.left = b + parseInt(g.style.left) + "px";
                                            var A = vjs_El("div");
                                            A.className = "rel-block rel-anim", g.appendChild(A);
                                            var D = 0,
                                                W = d.related;
                                            j = Math.ceil(m / 6), 2 == k && (j = Math.ceil(m / 4)), u = 1;
                                            for (f = 0; f < m; f++) {
                                                var R = vjs_El("div");
                                                R.className = "rel-parent", R.style.width = L + "px", R.style.height = x + "px";
                                                var U = vjs_El("div");
                                                U.className = "rel-item", f % 2 != 0 && 1 != w ? R.style.top = x + "px" : (R.style.top = 0, (0 != f && 1 != f || 0 != f && 1 == w) && D++), R.style.left = D * L + "px", R.appendChild(U), A.appendChild(R), U.innerHTML = '<a href="' + W[f].url + '" alt="' + W[f].title + '"><span class="rel-bg" style="background-image:url(' + W[f].thumb + ');"></span><label>' + W[f].title + "</label><i>" + W[f].duration + "</i></a>"
                                            }
                                            m < 7 && (vjs_addClass(vjs_find(n, ".vjs-arrow-next"), "vjs-hidden"), vjs_addClass(vjs_find(n, ".vjs-arrow-prev"), "vjs-hidden"));
                                            var F = function(e) {
                                                if (e.preventDefault(), e.stopImmediatePropagation(), !vjs_hasClass(vjs_find(n, ".vjs-arrow-next"), "vjs-disabled")) {
                                                    var s = vjs_find(n, ".vjs-related").offsetWidth;
                                                    u++, vjs_removeClass(vjs_find(n, ".vjs-arrow-prev"), "vjs-disabled");
                                                    var t = (u - 1) * s;
                                                    vjs_find(n, ".rel-block").style.left = "-" + t + "px", u == j && vjs_addClass(vjs_find(n, ".vjs-arrow-next"), "vjs-disabled"), 1 == u && vjs_addClass(vjs_find(n, ".vjs-arrow-next"), "vjs-disabled")
                                                }
                                            };
                                            vjs_find(n, ".vjs-arrow-next").onclick = function(e) {
                                                F(e)
                                            }, vjs_find(n, ".vjs-arrow-next").onctouchstart = function(e) {
                                                F(e)
                                            };
                                            var Y = function(e) {
                                                if (e.preventDefault(), e.stopImmediatePropagation(), !vjs_hasClass(vjs_find(n, ".vjs-arrow-prev"), "vjs-disabled")) {
                                                    var s = vjs_find(n, ".vjs-related").offsetWidth,
                                                        t = ((u -= 1) - 1) * s;
                                                    vjs_find(n, ".rel-block").style.left = "-" + t + "px", 1 == u && vjs_addClass(vjs_find(n, ".vjs-arrow-prev"), "vjs-disabled"), vjs_removeClass(vjs_find(n, ".vjs-arrow-next"), "vjs-disabled")
                                                }
                                            };
                                            vjs_find(n, ".vjs-arrow-prev").onclick = function(e) {
                                                Y(e)
                                            }, vjs_find(n, ".vjs-arrow-prev").onctouchstart = function(e) {
                                                Y(e)
                                            }, vjs_find(n, ".vjs-related-button").addEventListener(O("click"), function(e) {
                                                e.preventDefault(), e.stopImmediatePropagation(), n.offsetWidth < 640 ? vjs_addClass(vjs_find(n, ".vjs-grid"), "vjs-abs-hidden") : vjs_removeClass(vjs_find(n, ".vjs-grid"), "vjs-abs-hidden"), vjs_addClass(vjs_find(n, ".vjs-menu-settings"), "vjs-hidden"), vjs_addClass(h, "vjs-hidden"), vjs_removeClass(vjs_find(n, ".vjs-grid"), "vjs-hidden"), E(), d.isAddon = !0;
                                                var s = o.paused();
                                                d.player_state = s, 1 != s && o.pause()
                                            }, !1), vjs_find(vjs_find(n, ".vjs-grid"), ".vjs-close-btn").addEventListener("click", function(e) {
                                                e.preventDefault(), d.isAddon = !1, vjs_addClass(vjs_find(n, ".vjs-grid"), "vjs-hidden"), 1 != player_state && o.play()
                                            })
                                        }
                                        if (d.shareMenu) {
                                            var Q = vjs_El("div");
                                            Q.className = "vjs-sharing-overlay vjs-hidden";
                                            var K = vjs_El("div");
                                            K.className = "vjs-sharing-container";
                                            var Z = vjs_El("div");
                                            Z.className = "vjs-sharing-body";
                                            var X = d.shareUrl || document.location.href,
                                                $ = d.shareEmbed || "N/A",
                                                G = vjs_El("div");
                                            G.className = "vjs-close-btn vjs-share-close";
                                            var V = (V = '<div class="vjs-inputs-body"><h2>' + o.localize("Link") + '</h2><input type="text" class="perma"><h2>' + o.localize("Embed") + '</h2><input class="embed-code" type="text"></div>') + '<div class="vjs-inputs-body"><h2>' + o.localize("Social") + "</h2></div>";
                                            if (V += '<div class="vjs-share-block"><i title="Dacebook" id="share_facebook" class="vjs-share-icon nv vjs-facebook-square" role="button" aria-live="polite" tabindex="0"></i>', V += '<i title="Twitter" id="share_twitter" class="vjs-share-icon nv vjs-twitter-square" role="button" aria-live="polite" tabindex="0"></i>', V += '<i title="Pinterest" id="share_pinterest" class="vjs-share-icon nv vjs-pinterest-square" role="button" aria-live="polite" tabindex="0"></i>', V += '<i title="LinkedIn" id="share_linkedin" class="vjs-share-icon nv vjs-linkedin-square" role="button" aria-live="polite" tabindex="0"></i></div>', Z.innerHTML = V, K.appendChild(Z), Q.appendChild(G), Q.appendChild(K), o.el().appendChild(Q), vjs_find(n, ".embed-code").value = $, vjs_find(n, ".perma").value = X, vjs_find(n, ".vjs-share-button").addEventListener(O("click"), function(e) {
                                                    e.preventDefault(), e.stopImmediatePropagation(), vjs_addClass(vjs_find(n, ".vjs-menu-settings"), "vjs-hidden"), vjs_removeClass(Q, "vjs-hidden"), v.pauseLock = !0, vjs_addClass(h, "vjs-hidden"), d.isAddon = !0;
                                                    var s = o.paused();
                                                    d.player_state = s, 1 != s && o.pause()
                                                }, !1), "auto" == d.sharemethod) var J = {
                                                url: X,
                                                title: d.shareTitle || document.title,
                                                description: o.localize("Check out this cool video on") + " " + d.shareUrl
                                            };
                                            else J = {
                                                url: X,
                                                title: d.shareTitle || document.title,
                                                description: o.localize("Check out this cool video on") + " " + d.shareUrl,
                                                pubid: d.pubid || null
                                            };
                                            var ee = function(e) {
                                                    e.preventDefault(), e.stopImmediatePropagation();
                                                    var t = "";
                                                    switch (e.target.id.split("_")[1]) {
                                                        case "facebook":
                                                            t = "facebook";
                                                            break;
                                                        case "twitter":
                                                            t = "twitter";
                                                            break;
                                                        case "pinterest":
                                                            t = "pinterest";
                                                            break;
                                                        case "linkedin":
                                                            t = "linkedin"
                                                    }
                                                    s.open("http://api.addthis.com/oexchange/0.8/forward/" + t + "/offer?" + function(e) {
                                                        var s = [];
                                                        for (var t in e) s.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
                                                        return s.join("&")
                                                    }(J), "AddThis", "height=450,width=550,modal=yes,alwaysRaised=yes")
                                                },
                                                se = n.querySelectorAll(".vjs-share-icon");
                                            for (f = 0; f < se.length; f++) se[f].addEventListener("click", ee, !1);
                                            vjs_find(n, ".vjs-inputs-body").onclick = function(e) {
                                                e.preventDefault(), e.stopImmediatePropagation()
                                            }, vjs_find(n, ".vjs-inputs-body input").onclick = function(e) {
                                                this.select()
                                            }, vjs_find(n, ".vjs-share-close").onclick = function(e) {
                                                d.isAddon = !1, vjs_addClass(vjs_find(n, ".vjs-sharing-overlay"), "vjs-hidden"), vjs_addClass(h, "vjs-hidden"), d.isAddon = !1, v.pauseLock = !1, 1 == d.player_state && 3 != d.newstate || o.play()
                                            }
                                        }
                                        if (d.zoomMenu) {
                                            var te, ne, ie = !1,
                                                ae = !1,
                                                oe = "",
                                                re = 1;
                                            if (d.zoomReset) {
                                                if (this.zoom_panel = vjs_El("div"), this.zoom_panel.className = "vjs-zoom-parent vjs-zoom-hidden", this.zoom_button = vjs_El("div"), this.zoom_button.className = "vjs-reset-zoom", this.zoom_button.innerHTML = o.localize("ZOOM RESETAR"), this.zoom_panel.appendChild(this.zoom_button), 1 != N) {
                                                    this.zoom_info = vjs_El("div"), this.zoom_info.className = "vjs-reset-info", this.zoom_menu = vjs_El("div"), this.zoom_menu.className = "vjs-reset-menu";
                                                    var le = '<div class="vjs-reset-header">' + o.localize("Keyboard control") + "</div>";
                                                    le = (le = (le = (le = (le = le + '<div><span class="s1">+/-</span>' + o.localize("zoom area") + "</div>") + '<div><span class="s1">&larr;</span>' + o.localize("scroll left") + "</div>") + '<div><span class="s1">&rarr;</span>' + o.localize("scroll right") + "</div>") + '<div><span class="s1">&uarr;</span>' + o.localize("scroll up") + "</div>") + '<div><span class="s1">&darr;</span>' + o.localize("scroll down") + "</div>", this.zoom_menu.innerHTML = le, this.zoom_panel.appendChild(this.zoom_info), this.zoom_info.appendChild(this.zoom_menu)
                                                }
                                                vjs_find(n, ".vjs-control-bar").appendChild(this.zoom_panel)
                                            }
                                            var de = o.el();

                                            function ve(e) {
                                                var s = vjs_find(n, ".vjs-zoom-slider"),
                                                    i = !1;
                                                if ("ontouchstart" in document) {
                                                    try {
                                                        i = e.originalEvent.touches[0].pageY
                                                    } catch (e) {}
                                                    try {
                                                        i = e.originalEvent.changedTouches[0].pageY
                                                    } catch (e) {}
                                                    try {
                                                        i = e.changedTouches[0].pageY
                                                    } catch (e) {}
                                                } else try {
                                                    i = e.pageY
                                                } catch (e) {}
                                                if (0 != i) {
                                                    var a = i - P(s);
                                                    a > 70 && (a = 70), a < 0 && (a = 0);
                                                    var r = parseInt(100 - a / 70 * 100);
                                                    vjs_find(n, ".vjs-zoom-level").style.height = r + "%";
                                                    var l = 1 + 4 * r / 100;
                                                    re = l;
                                                    o.id();
                                                    H(vjs_find(n, ".vjs-tech"), l), vjs_find(n, ".zoom-label").innerHTML = parseInt(100 * l) + "%", vjs_find(n, ".vjs-zoom-info").innerHTML = o.localize("ZOOM") + ": " + parseInt(100 * l) + " %<span>" + o.localize("Use tecla + ou - para aumentar ou diminuir") + "</span>", l > 1 ? (t.options.blockKeys = !0, vjs_removeClass(vjs_find(n, ".vjs-zoom-parent"), "vjs-zoom-hidden")) : (t.options.blockKeys = !1, vjs_addClass(vjs_find(n, ".vjs-zoom-parent"), "vjs-zoom-hidden"))
                                                }
                                            }

                                            function ue() {
                                                var e = vjs_find(n, ".vjs-tech"),
                                                    s = parseInt(e.offsetTop),
                                                    t = parseInt(e.offsetLeft);
                                                "down" == oe && (s += 5), "up" == oe && (s -= 5), "left" == oe && (t -= 5), "right" == oe && (t += 5), e.style.left = t + "px", e.style.top = s + "px"
                                            }
                                            de.hasAttribute("tabIndex") || de.setAttribute("tabIndex", "-1"), de.style.outline = "none", document.addEventListener("keydown", function(e) {
                                                var s = e.keyCode;
                                                if (re > 1 && 36 == s) {
                                                    e.preventDefault();
                                                    o.id();
                                                    var a = vjs_find(n, ".vjs-tech");
                                                    a.style.top = "0", a.style.left = "0"
                                                }
                                                if (re > 1 && (40 == s || 38 == s || 37 == s || 39 == s || 176 == s || 177 == s)) {
                                                    if (e.preventDefault(), ie) return;
                                                    if (ie = !0, oe = "", clearInterval(te), 40 == s && (oe = "down"), 38 == s && (oe = "up"), 37 != s && 176 != s || (oe = "left"), 39 != s && 177 != s || (oe = "right"), "" != oe) {
                                                        document.addEventListener("keyup", function e() {
                                                            ie = !1, clearInterval(te), document.removeEventListener("keyup", e, !1)
                                                        }, !1), te = setInterval(ue, 25)
                                                    }
                                                }
                                                if ((107 == s || 109 == s) && 1 == i) {
                                                    if (e.preventDefault(), ae) return;
                                                    ae = !0, clearInterval(ne), document.addEventListener("keyup", function e() {
                                                        ae = !1, clearInterval(ne), document.removeEventListener("keyup", e, !1)
                                                    }, !1), ne = setInterval(function() {
                                                        107 == s && (re += .1), 109 == s && (re -= .1), re > 5 && (re = 5), re < 1 && (re = 1),
                                                            function(e) {
                                                                o.id();
                                                                var s = vjs_find(n, ".vjs-tech");
                                                                H(s, e), vjs_find(n, ".vjs-zoom-info").innerHTML = o.localize("ZOOM") + ": " + parseInt(100 * e) + " %<span>" + o.localize("Use tecla + ou - para aumentar ou diminuir") + "</span>", e > 1 ? (t.options.blockKeys = !0, vjs_removeClass(vjs_find(n, ".vjs-zoom-parent"), "vjs-zoom-hidden")) : (t.options.blockKeys = !1, vjs_addClass(vjs_find(n, ".vjs-zoom-parent"), "vjs-zoom-hidden"), s.style.left = 0, s.style.top = 0);
                                                                var i = (e - 1) / 4;
                                                                i = parseInt(100 * i), vjs_find(n, ".vjs-zoom-level").style.height = i + "%"
                                                            }(re)
                                                    }, 50)
                                                }
                                            }, !1), d.zoomReset && vjs_find(n, ".vjs-reset-zoom").addEventListener(O("click"), function(e) {
                                                ce(), e.preventDefault(), e.stopImmediatePropagation()
                                            }, !1), vjs_find(n, ".vjs-zoom-reset").addEventListener(O("click"), function(e) {
                                                ce(), e.preventDefault(), e.stopImmediatePropagation()
                                            }, !1), vjs_find(n, ".vjs-zoom-slider").addEventListener("click", function(e) {
                                                e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation()
                                            }, !1), vjs_find(n, ".vjs-zoom-slider").addEventListener(O("mousedown"), function(e) {
                                                e.preventDefault(), e.stopImmediatePropagation(), S(), ve(e), 1 != N && vjs_removeClass(vjs_find(n, ".vjs-zoom-info"), "vjs-hidden");
                                                var s = function(e) {
                                                        e.preventDefault(), e.stopPropagation(), ve(e)
                                                    },
                                                    t = function(e) {
                                                        e.preventDefault(), e.stopPropagation(), q(), vjs_addClass(vjs_find(n, ".vjs-zoom-info"), "vjs-hidden"), document.removeEventListener(O("mouseup"), t), document.removeEventListener(O("mousemove"), s)
                                                    };
                                                document.addEventListener(O("mousemove"), s, !1), document.addEventListener(O("mouseup"), t, !1)
                                            }, !1)
                                        }
                                    }
                                })
                            }

                            function ce() {
                                t.options.blockKeys = !1, currentZoom = 1, isKey = !1, vjs_find(n, ".vjs-zoom-level").style.height = "0";
                                var e = vjs_find(n, ".vjs-tech");
                                H(e, 1), e.style.top = 0, e.style.left = 0, vjs_find(n, ".zoom-label").innerHTML = "100%", vjs_addClass(vjs_find(n, ".vjs-zoom-info"), "vjs-hidden"), vjs_addClass(vjs_find(n, ".vjs-zoom-parent"), "vjs-zoom-hidden")
                            }
                            if (0 != d.mirrorButton) {
                                o.controlBar.mirrorButton = o.controlBar.addChild("button", {
                                    el: t.dom.createEl("div", {
                                        title: o.localize("Mirror view"),
                                        text: "Mirror view",
                                        className: "vjs-mirror-button vjs-control vjs-button"
                                    }, {
                                        role: "button",
                                        "aria-live": "polite",
                                        "aria-disabled": "false"
                                    })
                                }), o.controlBar.el_.insertBefore(o.controlBar.mirrorButton.el_, o.controlBar.getChildById("settings_button").el_);
                                var ue = function(e) {
                                    e.preventDefault();
                                    var s = n.className,
                                        t = !1;
                                    s.indexOf("vjs-has-started") > 0 && (t = !0);
                                    var i, a = !1;
                                    (s.indexOf("vjs-ended") > 0 && (a = !0), t && 1 != a) && (vjs_hasClass(e.target, "vjs-mirrored") ? (vjs_removeClass(e.target, "vjs-mirrored"), (i = vjs_find(n, ".vjs-tech")).style.transform = "rotateY(0)", i.style.transform, i.style.webkitTransform = "rotateY(0)", i.style.mozTransform = "rotateY(0)", i.style.msTransform = "rotateY(0)", i.style.oTransform = "rotateY(0)") : (vjs_addClass(e.target, "vjs-mirrored"), (i = vjs_find(n, ".vjs-tech")).style.transform = "rotateY(180deg)", i.style.transform, i.style.webkitTransform = "rotateY(180deg)", i.style.mozTransform = "rotateY(180deg)", i.style.msTransform = "rotateY(180deg)", i.style.oTransform = "rotateY(180deg)"))
                                };
                                vjs_find(n, ".vjs-mirror-button").onclick = function(e) {
                                    ue(e)
                                }, vjs_find(n, ".vjs-mirror-button").ontouchstart = function(e) {
                                    ue(e)
                                }
                            }
                            if ("" != d.overlay) {
                                var je = function(e, t) {
                                    if (s.XMLHttpRequest) {
                                        var n = new XMLHttpRequest;
                                        n.onload = function() {
                                            t && "function" == typeof t && t(this.responseXML)
                                        }, n.open("GET", e), n.responseType = "document", n.send()
                                    }
                                };
                                je(d.overlay, function(e) {
                                    var s = document.createElement("div");
                                    s.className = "vjs-over";
                                    var t = document.createElement("div");
                                    t.className = "over-inn";
                                    var i = document.createElement("div");
                                    i.innerHTML = e.documentElement.innerHTML, t.appendChild(i);
                                    var a = document.createElement("div");
                                    a.className = "vjs-close-btn", s.appendChild(t), s.appendChild(a), n.appendChild(s), a.onclick = function(e) {
                                        o.play()
                                    }, d.overlay_ready = !0
                                })
                            }
                            o.trigger("nuevoReady")
                        })
                    };
                t.registerPlugin("nuevo", i)
            }(window, a)
    }(),
    function(e, s) {
        "use strict";
        var t, n = {
            src: "",
            id: void 0,
            href: "",
            target: "_blank",
            allowSkip: !0,
            skipTime: 0,
            repeatAd: !1,
            adsOptions: {}
        };
        t = function(t) {
            var i, a = s.mergeOptions(n, t),
                o = this,
                r = !1;
            o.ready(function() {
                var s = o,
                    t = o.el();
                if ("" != a.src) {
                    s.pause();
                    var n = vjs_El("div");
                    n.className = "vjs-preroll vjs-hidden";
                    var l = vjs_El("video");
                    n.appendChild(l), a.src.src ? l.src = a.src.src : l.src = a.src, a.src.type && l.setAttribute("type", a.src.type);
                    var d = vjs_El("a");
                    d.className = "preroll-blocker", d.href = a.href, d.target = "_blank", d.onclick = function() {
                        null != a.id ? player_.trigger("adclick", {
                            id: a.id
                        }) : o.trigger("adclick")
                    }, n.appendChild(d);
                    var v = vjs_El("div");
                    v.className = "vjs-pre-controls";
                    var c = '<div class="pre-btn pre-play-pause pre-paused"></div><div class="pre-countdown">' + o.localize("Advertisement") + '</div><div class="pre-btn pre-fscreen pre-non-fullscreen"></div><div class="pre-btn pre-mute pre-non-muted"></div>';
                    if (v.innerHTML = c, parseInt(a.skipTime) > 0) {
                        var u = vjs_El("div");
                        u.className = "preroll-skip-button", n.appendChild(u)
                    }
                    n.appendChild(v), n.style.zIndex = 1111, t.appendChild(n), l.load(), parseInt(a.skipTime) > 0 && (u.onclick = function(s) {
                        var a = a || e.Event;
                        if ((" " + u.className + " ").indexOf(" enabled ") >= 0 && (r = !0, clearInterval(i), t.removeChild(n), o.play()), void 0 === a.prototype.stopPropagation) return !1;
                        s.stopPropagation()
                    }), vjs_find(v, ".pre-play-pause").onclick = function(e) {
                        l.paused ? (l.play(), vjs_removeClass(this, "pre-playing"), vjs_addClass(this, "pre-paused")) : (l.pause(), vjs_removeClass(this, "pre-paused"), vjs_addClass(this, "pre-playing"))
                    }, vjs_find(v, ".pre-mute").onclick = function(e) {
                        l.muted ? (l.muted = !1, vjs_addClass(this, "pre-non-muted"), vjs_removeClass(this, "pre-muted")) : (l.muted = !0, vjs_addClass(this, "pre-muted"), vjs_removeClass(this, "pre-non-muted"))
                    }, vjs_find(v, ".pre-fscreen").onclick = function(e) {
                        o.isFullscreen() ? o.exitFullscreen() : o.requestFullscreen()
                    }, o.onFullscreenChange = function() {
                        var e = vjs_find(v, ".pre-fscreen");
                        o.isFullscreen() ? (vjs_addClass(e, "pre-fullscreen"), vjs_removeClass(e, "pre-non-fullscreen")) : (vjs_addClass(e, "pre-non-fullscreen"), vjs_removeClass(e, "pre-fullscreen"))
                    }, o.on("playing", function() {
                        1 != r && (o.pause(), vjs_removeClass(n, "vjs-hidden"), l.play())
                    }), l.onended = function() {
                        r = !0;
                        try {
                            clearInterval(i)
                        } catch (e) {}
                        try {
                            t.removeChild(n)
                        } catch (e) {}
                        try {
                            o.play()
                        } catch (e) {}
                    };
                    try {
                        l.onerror = function() {
                            r = !0;
                            try {
                                clearInterval(i)
                            } catch (e) {}
                            try {
                                t.removeChild(n)
                            } catch (e) {}
                            try {
                                o.play()
                            } catch (e) {}
                        }
                    } catch (e) {}
                    i = setInterval(function() {
                        if (!l.paused) {
                            var e = l.duration,
                                s = l.currentTime,
                                t = e - (s = s > 0 ? s : 0),
                                n = Math.floor(t / 60),
                                i = Math.floor(t % 60);
                            if (i.toString().length < 2 && (i = "0" + i), vjs_find(v, ".pre-countdown").innerHTML = o.localize("Advertisement") + " " + n + ":" + i, a.skipTime > 0) {
                                var r = Math.ceil(a.skipTime - s),
                                    d = "";
                                if (r > 0) {
                                    var c = "";
                                    try {
                                        c = o.el().getAttribute("poster")
                                    } catch (e) {}
                                    "" != c && null != c && (d = '<img src="' + c + '" />'), d = d + "<span>" + o.localize("Skip Ad in") + " " + r + " " + o.localize("seconds") + "</span>", u.innerHTML = d
                                } else -1 === (" " + u.className + " ").indexOf(" enabled ") && (u.className += " enabled", u.innerHTML = "<span>" + o.localize("Skip Now!") + '</span><i class="circle"></i>')
                            }
                        }
                    }, 500)
                }
            })
        }, s.registerPlugin("preroll", t)
    }(window, window.videojs);