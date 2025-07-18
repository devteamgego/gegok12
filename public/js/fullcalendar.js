/*!
 * FullCalendar v3.4.0
 * Docs & License: https://fullcalendar.io/
 * (c) 2017 Adam Shaw
 */
! function(t) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], t) : "object" == typeof exports ? module.exports = t(require("jquery"), require("moment")) : t(jQuery, moment)
}(function(t, e) {
    function n(t) {
        return it(t, Qt)
    }

    function i(t, e) {
        e.left && t.css({
            "border-left-width": 1,
            "margin-left": e.left - 1
        }), e.right && t.css({
            "border-right-width": 1,
            "margin-right": e.right - 1
        })
    }

    function r(t) {
        t.css({
            "margin-left": "",
            "margin-right": "",
            "border-left-width": "",
            "border-right-width": ""
        })
    }

    function s() {
        t("body").addClass("fc-not-allowed")
    }

    function o() {
        t("body").removeClass("fc-not-allowed")
    }

    function a(e, n, i) {
        var r = Math.floor(n / e.length),
            s = Math.floor(n - r * (e.length - 1)),
            o = [],
            a = [],
            u = [],
            h = 0;
        l(e), e.each(function(n, i) {
            var l = n === e.length - 1 ? s : r,
                c = t(i).outerHeight(!0);
            c < l ? (o.push(i), a.push(c), u.push(t(i).height())) : h += c
        }), i && (n -= h, r = Math.floor(n / o.length), s = Math.floor(n - r * (o.length - 1))), t(o).each(function(e, n) {
            var i = e === o.length - 1 ? s : r,
                l = a[e],
                h = u[e],
                c = i - (l - h);
            l < i && t(n).height(c)
        })
    }

    function l(t) {
        t.height("")
    }

    function u(e) {
        var n = 0;
        return e.find("> *").each(function(e, i) {
            var r = t(i).outerWidth();
            r > n && (n = r)
        }), n++, e.width(n), n
    }

    function h(t, e) {
        var n, i = t.add(e);
        return i.css({
            position: "relative",
            left: -1
        }), n = t.outerHeight() - e.outerHeight(), i.css({
            position: "",
            left: ""
        }), n
    }

    function c(e) {
        var n = e.css("position"),
            i = e.parents().filter(function() {
                var e = t(this);
                return /(auto|scroll)/.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
            }).eq(0);
        return "fixed" !== n && i.length ? i : t(e[0].ownerDocument || document)
    }

    function d(t, e) {
        var n = t.offset(),
            i = n.left - (e ? e.left : 0),
            r = n.top - (e ? e.top : 0);
        return {
            left: i,
            right: i + t.outerWidth(),
            top: r,
            bottom: r + t.outerHeight()
        }
    }

    function f(t, e) {
        var n = t.offset(),
            i = p(t),
            r = n.left + w(t, "border-left-width") + i.left - (e ? e.left : 0),
            s = n.top + w(t, "border-top-width") + i.top - (e ? e.top : 0);
        return {
            left: r,
            right: r + t[0].clientWidth,
            top: s,
            bottom: s + t[0].clientHeight
        }
    }

    function g(t, e) {
        var n = t.offset(),
            i = n.left + w(t, "border-left-width") + w(t, "padding-left") - (e ? e.left : 0),
            r = n.top + w(t, "border-top-width") + w(t, "padding-top") - (e ? e.top : 0);
        return {
            left: i,
            right: i + t.width(),
            top: r,
            bottom: r + t.height()
        }
    }

    function p(t) {
        var e, n = t[0].offsetWidth - t[0].clientWidth,
            i = t[0].offsetHeight - t[0].clientHeight;
        return n = v(n), i = v(i), e = {
            left: 0,
            right: 0,
            top: 0,
            bottom: i
        }, m() && "rtl" == t.css("direction") ? e.left = n : e.right = n, e
    }

    function v(t) {
        return t = Math.max(0, t), t = Math.round(t)
    }

    function m() {
        return null === Xt && (Xt = y()), Xt
    }

    function y() {
        var e = t("<div><div/></div>").css({
                position: "absolute",
                top: -1e3,
                left: 0,
                border: 0,
                padding: 0,
                overflow: "scroll",
                direction: "rtl"
            }).appendTo("body"),
            n = e.children(),
            i = n.offset().left > e.offset().left;
        return e.remove(), i
    }

    function w(t, e) {
        return parseFloat(t.css(e)) || 0
    }

    function S(t) {
        return 1 == t.which && !t.ctrlKey
    }

    function b(t) {
        var e = t.originalEvent.touches;
        return e && e.length ? e[0].pageX : t.pageX
    }

    function E(t) {
        var e = t.originalEvent.touches;
        return e && e.length ? e[0].pageY : t.pageY
    }

    function D(t) {
        return /^touch/.test(t.type)
    }

    function T(t) {
        t.addClass("fc-unselectable").on("selectstart", H)
    }

    function C(t) {
        t.removeClass("fc-unselectable").off("selectstart", H)
    }

    function H(t) {
        t.preventDefault()
    }

    function R(t, e) {
        var n = {
            left: Math.max(t.left, e.left),
            right: Math.min(t.right, e.right),
            top: Math.max(t.top, e.top),
            bottom: Math.min(t.bottom, e.bottom)
        };
        return n.left < n.right && n.top < n.bottom && n
    }

    function x(t, e) {
        return {
            left: Math.min(Math.max(t.left, e.left), e.right),
            top: Math.min(Math.max(t.top, e.top), e.bottom)
        }
    }

    function I(t) {
        return {
            left: (t.left + t.right) / 2,
            top: (t.top + t.bottom) / 2
        }
    }

    function k(t, e) {
        return {
            left: t.left - e.left,
            top: t.top - e.top
        }
    }

    function M(e) {
        var n, i, r = [],
            s = [];
        for ("string" == typeof e ? s = e.split(/\s*,\s*/) : "function" == typeof e ? s = [e] : t.isArray(e) && (s = e), n = 0; n < s.length; n++) i = s[n], "string" == typeof i ? r.push("-" == i.charAt(0) ? {
            field: i.substring(1),
            order: -1
        } : {
            field: i,
            order: 1
        }) : "function" == typeof i && r.push({
            func: i
        });
        return r
    }

    function B(t, e, n) {
        var i, r;
        for (i = 0; i < n.length; i++)
            if (r = L(t, e, n[i])) return r;
        return 0
    }

    function L(t, e, n) {
        return n.func ? n.func(t, e) : N(t[n.field], e[n.field]) * (n.order || 1)
    }

    function N(e, n) {
        return e || n ? null == n ? -1 : null == e ? 1 : "string" === t.type(e) || "string" === t.type(n) ? String(e).localeCompare(String(n)) : e - n : 0
    }

    function z(t, e) {
        var n, i, r, s, o = t.start,
            a = t.end,
            l = e.start,
            u = e.end;
        if (a > l && o < u) return o >= l ? (n = o.clone(), r = !0) : (n = l.clone(), r = !1), a <= u ? (i = a.clone(), s = !0) : (i = u.clone(), s = !1), {
            start: n,
            end: i,
            isStart: r,
            isEnd: s
        }
    }

    function F(t, n) {
        return e.duration({
            days: t.clone().stripTime().diff(n.clone().stripTime(), "days"),
            ms: t.time() - n.time()
        })
    }

    function A(t, n) {
        return e.duration({
            days: t.clone().stripTime().diff(n.clone().stripTime(), "days")
        })
    }

    function G(t, n, i) {
        return e.duration(Math.round(t.diff(n, i, !0)), i)
    }

    function V(t, e) {
        var n, i, r;
        for (n = 0; n < Jt.length && (i = Jt[n], !((r = P(i, t, e)) >= 1 && vt(r))); n++);
        return i
    }

    function O(t, e) {
        var n = V(t);
        return "week" === n && "object" == typeof e && e.days && (n = "day"), n
    }

    function P(t, n, i) {
        return null != i ? i.diff(n, t, !0) : e.isDuration(n) ? n.as(t) : n.end.diff(n.start, t, !0)
    }

    function _(t, e, n) {
        var i;
        return tt(n) ? (e - t) / n : (i = n.asMonths(), Math.abs(i) >= 1 && vt(i) ? e.diff(t, "months", !0) / i : e.diff(t, "days", !0) / n.asDays())
    }

    function W(t, e) {
        var n, i;
        return tt(t) || tt(e) ? t / e : (n = t.asMonths(), i = e.asMonths(), Math.abs(n) >= 1 && vt(n) && Math.abs(i) >= 1 && vt(i) ? n / i : t.asDays() / e.asDays())
    }

    function Y(t, n) {
        var i;
        return tt(t) ? e.duration(t * n) : (i = t.asMonths(), Math.abs(i) >= 1 && vt(i) ? e.duration({
            months: i * n
        }) : e.duration({
            days: t.asDays() * n
        }))
    }

    function q(t) {
        return {
            start: t.start.clone(),
            end: t.end.clone()
        }
    }

    function U(t, e) {
        return t = q(t), e.start && (t.start = j(t.start, e)), e.end && (t.end = K(t.end, e.end)), t
    }

    function j(t, e) {
        return t = t.clone(), e.start && (t = J(t, e.start)), e.end && t >= e.end && (t = e.end.clone().subtract(1)), t
    }

    function Z(t, e) {
        return (!e.start || t >= e.start) && (!e.end || t < e.end)
    }

    function $(t, e) {
        return (!e.start || t.end >= e.start) && (!e.end || t.start < e.end)
    }

    function Q(t, e) {
        return (!e.start || t.start >= e.start) && (!e.end || t.end <= e.end)
    }

    function X(t, e) {
        return (t.start && e.start && t.start.isSame(e.start) || !t.start && !e.start) && (t.end && e.end && t.end.isSame(e.end) || !t.end && !e.end)
    }

    function K(t, e) {
        return (t.isBefore(e) ? t : e).clone()
    }

    function J(t, e) {
        return (t.isAfter(e) ? t : e).clone()
    }

    function tt(t) {
        return Boolean(t.hours() || t.minutes() || t.seconds() || t.milliseconds())
    }

    function et(t) {
        return "[object Date]" === Object.prototype.toString.call(t) || t instanceof Date
    }

    function nt(t) {
        return /^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(t)
    }

    function it(t, e) {
        var n, i, r, s, o, a, l = {};
        if (e)
            for (n = 0; n < e.length; n++) {
                for (i = e[n], r = [], s = t.length - 1; s >= 0; s--)
                    if ("object" == typeof(o = t[s][i])) r.unshift(o);
                    else if (void 0 !== o) {
                    l[i] = o;
                    break
                }
                r.length && (l[i] = it(r))
            }
        for (n = t.length - 1; n >= 0; n--) {
            a = t[n];
            for (i in a) i in l || (l[i] = a[i])
        }
        return l
    }

    function rt(t) {
        var e = function() {};
        return e.prototype = t, new e
    }

    function st(t, e) {
        for (var n in t) ot(t, n) && (e[n] = t[n])
    }

    function ot(t, e) {
        return te.call(t, e)
    }

    function at(e) {
        return /undefined|null|boolean|number|string/.test(t.type(e))
    }

    function lt(e, n, i) {
        if (t.isFunction(e) && (e = [e]), e) {
            var r, s;
            for (r = 0; r < e.length; r++) s = e[r].apply(n, i) || s;
            return s
        }
    }

    function ut() {
        for (var t = 0; t < arguments.length; t++)
            if (void 0 !== arguments[t]) return arguments[t]
    }

    function ht(t) {
        return (t + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
    }

    function ct(t) {
        return t.replace(/&.*?;/g, "")
    }

    function dt(e) {
        var n = [];
        return t.each(e, function(t, e) {
            null != e && n.push(t + ":" + e)
        }), n.join(";")
    }

    function ft(e) {
        var n = [];
        return t.each(e, function(t, e) {
            null != e && n.push(t + '="' + ht(e) + '"')
        }), n.join(" ")
    }

    function gt(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }

    function pt(t, e) {
        return t - e
    }

    function vt(t) {
        return t % 1 == 0
    }

    function mt(t, e) {
        var n = t[e];
        return function() {
            return n.apply(t, arguments)
        }
    }

    function yt(t, e, n) {
        var i, r, s, o, a, l = function() {
            var u = +new Date - o;
            u < e ? i = setTimeout(l, e - u) : (i = null, n || (a = t.apply(s, r), s = r = null))
        };
        return function() {
            s = this, r = arguments, o = +new Date;
            var u = n && !i;
            return i || (i = setTimeout(l, e)), u && (a = t.apply(s, r), s = r = null), a
        }
    }

    function wt(n, i, r) {
        var s, o, a, l, u = n[0],
            h = 1 == n.length && "string" == typeof u;
        return e.isMoment(u) || et(u) || void 0 === u ? l = e.apply(null, n) : (s = !1, o = !1, h ? ee.test(u) ? (u += "-01", n = [u], s = !0, o = !0) : (a = ne.exec(u)) && (s = !a[5], o = !0) : t.isArray(u) && (o = !0), l = i || s ? e.utc.apply(e, n) : e.apply(null, n), s ? (l._ambigTime = !0, l._ambigZone = !0) : r && (o ? l._ambigZone = !0 : h && l.utcOffset(u))), l._fullCalendar = !0, l
    }

    function St(t) {
        return "en" !== t.locale() ? t.clone().locale("en") : t
    }

    function bt() {}

    function Et(t, e) {
        var n;
        return ot(e, "constructor") && (n = e.constructor), "function" != typeof n && (n = e.constructor = function() {
            t.apply(this, arguments)
        }), n.prototype = rt(t.prototype), st(e, n.prototype), st(t, n), n
    }

    function Dt(t, e) {
        st(e, t.prototype)
    }

    function Tt(t, e) {
        t.then = function(n) {
            return "function" == typeof n && n(e), t
        }
    }

    function Ct(t) {
        t.then = function(e, n) {
            return "function" == typeof n && n(), t
        }
    }

    function Ht(t, e) {
        return !t && !e || !(!t || !e) && (t.component === e.component && Rt(t, e) && Rt(e, t))
    }

    function Rt(t, e) {
        for (var n in t)
            if (!/^(component|left|right|top|bottom)$/.test(n) && t[n] !== e[n]) return !1;
        return !0
    }

    function xt(t) {
        return {
            start: t.start.clone(),
            end: t.end ? t.end.clone() : null,
            allDay: t.allDay
        }
    }

    function It(t) {
        var e = Mt(t);
        return "background" === e || "inverse-background" === e
    }

    function kt(t) {
        return "inverse-background" === Mt(t)
    }

    function Mt(t) {
        return ut((t.source || {}).rendering, t.rendering)
    }

    function Bt(t) {
        var e, n, i = {};
        for (e = 0; e < t.length; e++) n = t[e], (i[n._id] || (i[n._id] = [])).push(n);
        return i
    }

    function Lt(t, e) {
        return t.start - e.start
    }

    function Nt(n) {
        var i, r, s, o, a = Zt.dataAttrPrefix;
        return a && (a += "-"), i = n.data(a + "event") || null, i && (i = "object" == typeof i ? t.extend({}, i) : {}, r = i.start, null == r && (r = i.time), s = i.duration, o = i.stick, delete i.start, delete i.time, delete i.duration, delete i.stick), null == r && (r = n.data(a + "start")), null == r && (r = n.data(a + "time")), null == s && (s = n.data(a + "duration")), null == o && (o = n.data(a + "stick")), r = null != r ? e.duration(r) : null, s = null != s ? e.duration(s) : null, o = Boolean(o), {
            eventProps: i,
            startTime: r,
            duration: s,
            stick: o
        }
    }

    function zt(t, e) {
        var n, i;
        for (n = 0; n < e.length; n++)
            if (i = e[n], i.leftCol <= t.rightCol && i.rightCol >= t.leftCol) return !0;
        return !1
    }

    function Ft(t, e) {
        return t.leftCol - e.leftCol
    }

    function At(t) {
        var e, n, i, r = [];
        for (e = 0; e < t.length; e++) {
            for (n = t[e], i = 0; i < r.length && Ot(n, r[i]).length; i++);
            n.level = i, (r[i] || (r[i] = [])).push(n)
        }
        return r
    }

    function Gt(t) {
        var e, n, i, r, s;
        for (e = 0; e < t.length; e++)
            for (n = t[e], i = 0; i < n.length; i++)
                for (r = n[i], r.forwardSegs = [], s = e + 1; s < t.length; s++) Ot(r, t[s], r.forwardSegs)
    }

    function Vt(t) {
        var e, n, i = t.forwardSegs,
            r = 0;
        if (void 0 === t.forwardPressure) {
            for (e = 0; e < i.length; e++) n = i[e], Vt(n), r = Math.max(r, 1 + n.forwardPressure);
            t.forwardPressure = r
        }
    }

    function Ot(t, e, n) {
        n = n || [];
        for (var i = 0; i < e.length; i++) Pt(t, e[i]) && n.push(e[i]);
        return n
    }

    function Pt(t, e) {
        return t.bottom > e.top && t.top < e.bottom
    }

    function _t(t) {
        this.items = t || []
    }

    function Wt(e, n) {
        function i(t) {
            n = t
        }

        function r() {
            var i = n.layout;
            p = e.opt("theme") ? "ui" : "fc", i ? (g ? g.empty() : g = this.el = t("<div class='fc-toolbar " + n.extraClasses + "'/>"), g.append(o("left")).append(o("right")).append(o("center")).append('<div class="fc-clear"/>')) : s()
        }

        function s() {
            g && (g.remove(), g = f.el = null)
        }

        function o(i) {
            var r = t('<div class="fc-' + i + '"/>'),
                s = n.layout[i],
                o = e.opt("customButtons") || {},
                a = e.opt("buttonText") || {};
            return s && t.each(s.split(" "), function(n) {
                var i, s = t(),
                    l = !0;
                t.each(this.split(","), function(n, i) {
                    var r, u, h, c, d, f, g, m, y, w;
                    "title" == i ? (s = s.add(t("<h2>&nbsp;</h2>")), l = !1) : ((r = o[i]) ? (h = function(t) {
                        r.click && r.click.call(w[0], t)
                    }, c = "", d = r.text) : (u = e.getViewSpec(i)) ? (h = function() {
                        e.changeView(i)
                    }, v.push(i), c = u.buttonTextOverride, d = u.buttonTextDefault) : e[i] && (h = function() {
                        e[i]()
                    }, c = (e.overrides.buttonText || {})[i], d = a[i]), h && (f = r ? r.themeIcon : e.opt("themeButtonIcons")[i], g = r ? r.icon : e.opt("buttonIcons")[i], m = c ? ht(c) : f && e.opt("theme") ? "<span class='ui-icon ui-icon-" + f + "'></span>" : g && !e.opt("theme") ? "<span class='fc-icon fc-icon-" + g + "'></span>" : ht(d), y = ["fc-" + i + "-button", p + "-button", p + "-state-default"], w = t('<button type="button" class="' + y.join(" ") + '">' + m + "</button>").click(function(t) {
                        w.hasClass(p + "-state-disabled") || (h(t), (w.hasClass(p + "-state-active") || w.hasClass(p + "-state-disabled")) && w.removeClass(p + "-state-hover"))
                    }).mousedown(function() {
                        w.not("." + p + "-state-active").not("." + p + "-state-disabled").addClass(p + "-state-down")
                    }).mouseup(function() {
                        w.removeClass(p + "-state-down")
                    }).hover(function() {
                        w.not("." + p + "-state-active").not("." + p + "-state-disabled").addClass(p + "-state-hover")
                    }, function() {
                        w.removeClass(p + "-state-hover").removeClass(p + "-state-down")
                    }), s = s.add(w)))
                }), l && s.first().addClass(p + "-corner-left").end().last().addClass(p + "-corner-right").end(), s.length > 1 ? (i = t("<div/>"), l && i.addClass("fc-button-group"), i.append(s), r.append(i)) : r.append(s)
            }), r
        }

        function a(t) {
            g && g.find("h2").text(t)
        }

        function l(t) {
            g && g.find(".fc-" + t + "-button").addClass(p + "-state-active")
        }

        function u(t) {
            g && g.find(".fc-" + t + "-button").removeClass(p + "-state-active")
        }

        function h(t) {
            g && g.find(".fc-" + t + "-button").prop("disabled", !0).addClass(p + "-state-disabled")
        }

        function c(t) {
            g && g.find(".fc-" + t + "-button").prop("disabled", !1).removeClass(p + "-state-disabled")
        }

        function d() {
            return v
        }
        var f = this;
        f.setToolbarOptions = i, f.render = r, f.removeElement = s, f.updateTitle = a, f.activateButton = l, f.deactivateButton = u, f.disableButton = h, f.enableButton = c, f.getViewsWithButtons = d, f.el = null;
        var g, p, v = []
    }

    function Yt(e) {
        t.each(Me, function(t, n) {
            null == e[t] && (e[t] = n(e))
        })
    }

    function qt(t) {
        return e.localeData(t) || e.localeData("en")
    }

    function Ut() {
        function n(t, e) {
            return !q.opt("lazyFetching") || s(t, e) ? o(t, e) : he.resolve(Z)
        }

        function i() {
            Z = r(K), q.trigger("eventsReset", Z)
        }

        function r(t) {
            var e, n, i = [];
            for (e = 0; e < t.length; e++) n = t[e], n.start.clone().stripZone() < j && q.getEventEnd(n).stripZone() > U && i.push(n);
            return i
        }

        function s(t, e) {
            return !U || t < U || e > j
        }

        function o(t, e) {
            return U = t, j = e, a()
        }

        function a() {
            return u(Q, "reset")
        }

        function l(t) {
            return u(b(t))
        }

        function u(t, e) {
            var n, i;
            for ("reset" === e ? K = [] : "add" !== e && (K = C(K, t)), n = 0; n < t.length; n++) i = t[n], "pending" !== i._status && X++, i._fetchId = (i._fetchId || 0) + 1, i._status = "pending";
            for (n = 0; n < t.length; n++) i = t[n], h(i, i._fetchId);
            return X ? he.construct(function(t) {
                q.one("eventsReceived", t)
            }) : he.resolve(Z)
        }

        function h(e, n) {
            f(e, function(i) {
                var r, s, o, a = t.isArray(e.events);
                if (n === e._fetchId && "rejected" !== e._status) {
                    if (e._status = "resolved", i)
                        for (r = 0; r < i.length; r++) s = i[r], (o = a ? s : z(s, e)) && K.push.apply(K, _(o));
                    d()
                }
            })
        }

        function c(t) {
            var e = "pending" === t._status;
            t._status = "rejected", e && d()
        }

        function d() {
            --X || (i(K), q.trigger("eventsReceived", Z))
        }

        function f(e, n) {
            var i, r, s = Zt.sourceFetchers;
            for (i = 0; i < s.length; i++) {
                if (!0 === (r = s[i].call(q, e, U.clone(), j.clone(), q.opt("timezone"), n))) return;
                if ("object" == typeof r) return void f(r, n)
            }
            var o = e.events;
            if (o) t.isFunction(o) ? (q.pushLoading(), o.call(q, U.clone(), j.clone(), q.opt("timezone"), function(t) {
                n(t), q.popLoading()
            })) : t.isArray(o) ? n(o) : n();
            else {
                if (e.url) {
                    var a, l = e.success,
                        u = e.error,
                        h = e.complete;
                    a = t.isFunction(e.data) ? e.data() : e.data;
                    var c = t.extend({}, a || {}),
                        d = ut(e.startParam, q.opt("startParam")),
                        g = ut(e.endParam, q.opt("endParam")),
                        p = ut(e.timezoneParam, q.opt("timezoneParam"));
                    d && (c[d] = U.format()), g && (c[g] = j.format()), q.opt("timezone") && "local" != q.opt("timezone") && (c[p] = q.opt("timezone")), q.pushLoading(), t.ajax(t.extend({}, Be, e, {
                        data: c,
                        success: function(e) {
                            e = e || [];
                            var i = lt(l, this, arguments);
                            t.isArray(i) && (e = i), n(e)
                        },
                        error: function() {
                            lt(u, this, arguments), n()
                        },
                        complete: function() {
                            lt(h, this, arguments), q.popLoading()
                        }
                    }))
                } else n()
            }
        }

        function g(t) {
            var e = p(t);
            e && (Q.push(e), u([e], "add"))
        }

        function p(e) {
            var n, i, r = Zt.sourceNormalizers;
            if (t.isFunction(e) || t.isArray(e) ? n = {
                    events: e
                } : "string" == typeof e ? n = {
                    url: e
                } : "object" == typeof e && (n = t.extend({}, e)), n) {
                for (n.className ? "string" == typeof n.className && (n.className = n.className.split(/\s+/)) : n.className = [], t.isArray(n.events) && (n.origArray = n.events, n.events = t.map(n.events, function(t) {
                        return z(t, n)
                    })), i = 0; i < r.length; i++) r[i].call(q, n);
                return n
            }
        }

        function v(t) {
            y(E(t))
        }

        function m(t) {
            null == t ? y(Q, !0) : y(b(t))
        }

        function y(e, n) {
            var r;
            for (r = 0; r < e.length; r++) c(e[r]);
            n ? (Q = [], K = []) : (Q = t.grep(Q, function(t) {
                for (r = 0; r < e.length; r++)
                    if (t === e[r]) return !1;
                return !0
            }), K = C(K, e)), i()
        }

        function w() {
            return Q.slice(1)
        }

        function S(e) {
            return t.grep(Q, function(t) {
                return t.id && t.id === e
            })[0]
        }

        function b(e) {
            e ? t.isArray(e) || (e = [e]) : e = [];
            var n, i = [];
            for (n = 0; n < e.length; n++) i.push.apply(i, E(e[n]));
            return i
        }

        function E(e) {
            var n, i;
            for (n = 0; n < Q.length; n++)
                if ((i = Q[n]) === e) return [i];
            return i = S(e), i ? [i] : t.grep(Q, function(t) {
                return D(e, t)
            })
        }

        function D(t, e) {
            return t && e && T(t) == T(e)
        }

        function T(t) {
            return ("object" == typeof t ? t.origArray || t.googleCalendarId || t.url || t.events : null) || t
        }

        function C(e, n) {
            return t.grep(e, function(t) {
                for (var e = 0; e < n.length; e++)
                    if (t.source === n[e]) return !1;
                return !0
            })
        }

        function H(t) {
            R([t])
        }

        function R(t) {
            var e, n;
            for (e = 0; e < t.length; e++) n = t[e], n.start = q.moment(n.start), n.end ? n.end = q.moment(n.end) : n.end = null, W(n, x(n));
            i()
        }

        function x(e) {
            var n = {};
            return t.each(e, function(t, e) {
                I(t) && void 0 !== e && at(e) && (n[t] = e)
            }), n
        }

        function I(t) {
            return !/^_|^(id|allDay|start|end)$/.test(t)
        }

        function k(t, e) {
            return M([t], e)
        }

        function M(t, e) {
            var n, r, s, o, a, l = [];
            for (s = 0; s < t.length; s++)
                if (r = z(t[s])) {
                    for (n = _(r), o = 0; o < n.length; o++) a = n[o], a.source || (e && ($.events.push(a), a.source = $), K.push(a));
                    l = l.concat(n)
                } return l.length && i(), l
        }

        function B(e) {
            var n, r;
            for (null == e ? e = function() {
                    return !0
                } : t.isFunction(e) || (n = e + "", e = function(t) {
                    return t._id == n
                }), K = t.grep(K, e, !0), r = 0; r < Q.length; r++) t.isArray(Q[r].events) && (Q[r].events = t.grep(Q[r].events, e, !0));
            i()
        }

        function L(e) {
            return t.isFunction(e) ? t.grep(K, e) : null != e ? (e += "", t.grep(K, function(t) {
                return t._id == e
            })) : K
        }

        function N(t) {
            t.start = q.moment(t.start), t.end && (t.end = q.moment(t.end)), jt(t)
        }

        function z(n, i) {
            var r, s, o, a = q.opt("eventDataTransform"),
                l = {};
            if (a && (n = a(n)), i && i.eventDataTransform && (n = i.eventDataTransform(n)), t.extend(l, n), i && (l.source = i), l._id = n._id || (void 0 === n.id ? "_fc" + Le++ : n.id + ""), n.className ? "string" == typeof n.className ? l.className = n.className.split(/\s+/) : l.className = n.className : l.className = [], r = n.start || n.date, s = n.end, nt(r) && (r = e.duration(r)), nt(s) && (s = e.duration(s)), n.dow || e.isDuration(r) || e.isDuration(s)) l.start = r ? e.duration(r) : null, l.end = s ? e.duration(s) : null, l._recurring = !0;
            else {
                if (r && (r = q.moment(r), !r.isValid())) return !1;
                s && (s = q.moment(s), s.isValid() || (s = null)), o = n.allDay, void 0 === o && (o = ut(i ? i.allDayDefault : void 0, q.opt("allDayDefault"))), V(r, s, o, l)
            }
            return q.normalizeEvent(l), l
        }

        function V(t, e, n, i) {
            i.start = t, i.end = e, i.allDay = n, O(i), jt(i)
        }

        function O(t) {
            P(t), t.end && !t.end.isAfter(t.start) && (t.end = null), t.end || (q.opt("forceEventDuration") ? t.end = q.getDefaultEventEnd(t.allDay, t.start) : t.end = null)
        }

        function P(t) {
            null == t.allDay && (t.allDay = !(t.start.hasTime() || t.end && t.end.hasTime())), t.allDay ? (t.start.stripTime(), t.end && t.end.stripTime()) : (t.start.hasTime() || (t.start = q.applyTimezone(t.start.time(0))), t.end && !t.end.hasTime() && (t.end = q.applyTimezone(t.end.time(0))))
        }

        function _(e, n, i) {
            var r, s, o, a, l, u, h, c, d, f = [];
            if (n = n || U, i = i || j, e)
                if (e._recurring) {
                    if (s = e.dow)
                        for (r = {}, o = 0; o < s.length; o++) r[s[o]] = !0;
                    for (a = n.clone().stripTime(); a.isBefore(i);) r && !r[a.day()] || (l = e.start, u = e.end, h = a.clone(), c = null, l && (h = h.time(l)), u && (c = a.clone().time(u)), d = t.extend({}, e), V(h, c, !l && !u, d), f.push(d)), a.add(1, "days")
                } else f.push(e);
            return f
        }

        function W(e, n, i) {
            function r(t, e) {
                return i ? G(t, e, i) : n.allDay ? A(t, e) : F(t, e)
            }
            var s, o, a, l, u, h, c = {};
            return n = n || {}, n.start || (n.start = e.start.clone()), void 0 === n.end && (n.end = e.end ? e.end.clone() : null), null == n.allDay && (n.allDay = e.allDay), O(n), s = {
                start: e._start.clone(),
                end: e._end ? e._end.clone() : q.getDefaultEventEnd(e._allDay, e._start),
                allDay: n.allDay
            }, O(s), o = null !== e._end && null === n.end, a = r(n.start, s.start), n.end ? (l = r(n.end, s.end), u = l.subtract(a)) : u = null, t.each(n, function(t, e) {
                I(t) && void 0 !== e && (c[t] = e)
            }), h = Y(L(e._id), o, n.allDay, a, u, c), {
                dateDelta: a,
                durationDelta: u,
                undo: h
            }
        }

        function Y(e, n, i, r, s, o) {
            var a = q.getIsAmbigTimezone(),
                l = [];
            return r && !r.valueOf() && (r = null), s && !s.valueOf() && (s = null), t.each(e, function(e, u) {
                    var h, c;
                    h = {
                        start: u.start.clone(),
                        end: u.end ? u.end.clone() : null,
                        allDay: u.allDay
                    }, t.each(o, function(t) {
                        h[t] = u[t]
                    }), c = {
                        start: u._start,
                        end: u._end,
                        allDay: i
                    }, O(c), n ? c.end = null : s && !c.end && (c.end = q.getDefaultEventEnd(c.allDay, c.start)), r && (c.start.add(r), c.end && c.end.add(r)), s && c.end.add(s), a && !c.allDay && (r || s) && (c.start.stripZone(), c.end && c.end.stripZone()), t.extend(u, o, c), jt(u), l.push(function() {
                        t.extend(u, h), jt(u)
                    })
                }),
                function() {
                    for (var t = 0; t < l.length; t++) l[t]()
                }
        }
        var q = this;
        q.requestEvents = n, q.reportEventChange = i, q.isFetchNeeded = s, q.fetchEvents = o, q.fetchEventSources = u, q.refetchEvents = a, q.refetchEventSources = l, q.getEventSources = w, q.getEventSourceById = S, q.addEventSource = g, q.removeEventSource = v, q.removeEventSources = m, q.updateEvent = H, q.updateEvents = R, q.renderEvent = k, q.renderEvents = M, q.removeEvents = B, q.clientEvents = L, q.mutateEvent = W, q.normalizeEventDates = O, q.normalizeEventTimes = P;
        var U, j, Z, $ = {
                events: []
            },
            Q = [$],
            X = 0,
            K = [];
        t.each((q.opt("events") ? [q.opt("events")] : []).concat(q.opt("eventSources") || []), function(t, e) {
            var n = p(e);
            n && Q.push(n)
        }), q.getEventCache = function() {
            return K
        }, q.rezoneArrayEventSources = function() {
            var e, n, i;
            for (e = 0; e < Q.length; e++)
                if (n = Q[e].events, t.isArray(n))
                    for (i = 0; i < n.length; i++) N(n[i])
        }, q.buildEventFromInput = z, q.expandEvent = _
    }

    function jt(t) {
        t._allDay = t.allDay, t._start = t.start.clone(), t._end = t.end ? t.end.clone() : null
    }
    var Zt = t.fullCalendar = {
            version: "3.4.0",
            internalApiVersion: 9
        },
        $t = Zt.views = {};
    t.fn.fullCalendar = function(e) {
        var n = Array.prototype.slice.call(arguments, 1),
            i = this;
        return this.each(function(r, s) {
            var o, a = t(s),
                l = a.data("fullCalendar");
            "string" == typeof e ? l && t.isFunction(l[e]) && (o = l[e].apply(l, n), r || (i = o), "destroy" === e && a.removeData("fullCalendar")) : l || (l = new Re(a, e), a.data("fullCalendar", l), l.render())
        }), i
    };
    var Qt = ["header", "footer", "buttonText", "buttonIcons", "themeButtonIcons"];
    Zt.intersectRanges = z, Zt.applyAll = lt, Zt.debounce = yt, Zt.isInt = vt, Zt.htmlEscape = ht, Zt.cssToStr = dt, Zt.proxy = mt, Zt.capitaliseFirstLetter = gt, Zt.getOuterRect = d, Zt.getClientRect = f, Zt.getContentRect = g, Zt.getScrollbarWidths = p;
    var Xt = null;
    Zt.preventDefault = H, Zt.intersectRects = R, Zt.parseFieldSpecs = M, Zt.compareByFieldSpecs = B, Zt.compareByFieldSpec = L, Zt.flexibleCompare = N, Zt.computeGreatestUnit = V, Zt.divideRangeByDuration = _, Zt.divideDurationByDuration = W, Zt.multiplyDuration = Y, Zt.durationHasTime = tt;
    var Kt = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
        Jt = ["year", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    Zt.log = function() {
        var t = window.console;
        if (t && t.log) return t.log.apply(t, arguments)
    }, Zt.warn = function() {
        var t = window.console;
        return t && t.warn ? t.warn.apply(t, arguments) : Zt.log.apply(Zt, arguments)
    };
    var te = {}.hasOwnProperty;
    Zt.createObject = rt;
    var ee = /^\s*\d{4}-\d\d$/,
        ne = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/,
        ie = e.fn,
        re = t.extend({}, ie),
        se = e.momentProperties;
    se.push("_fullCalendar"), se.push("_ambigTime"), se.push("_ambigZone"), Zt.moment = function() {
            return wt(arguments)
        }, Zt.moment.utc = function() {
            var t = wt(arguments, !0);
            return t.hasTime() && t.utc(), t
        }, Zt.moment.parseZone = function() {
            return wt(arguments, !0, !0)
        }, ie.week = ie.weeks = function(t) {
            var e = this._locale._fullCalendar_weekCalc;
            return null == t && "function" == typeof e ? e(this) : "ISO" === e ? re.isoWeek.apply(this, arguments) : re.week.apply(this, arguments)
        }, ie.time = function(t) {
            if (!this._fullCalendar) return re.time.apply(this, arguments);
            if (null == t) return e.duration({
                hours: this.hours(),
                minutes: this.minutes(),
                seconds: this.seconds(),
                milliseconds: this.milliseconds()
            });
            this._ambigTime = !1, e.isDuration(t) || e.isMoment(t) || (t = e.duration(t));
            var n = 0;
            return e.isDuration(t) && (n = 24 * Math.floor(t.asDays())), this.hours(n + t.hours()).minutes(t.minutes()).seconds(t.seconds()).milliseconds(t.milliseconds())
        }, ie.stripTime = function() {
            return this._ambigTime || (this.utc(!0), this.set({
                hours: 0,
                minutes: 0,
                seconds: 0,
                ms: 0
            }), this._ambigTime = !0, this._ambigZone = !0), this
        }, ie.hasTime = function() {
            return !this._ambigTime
        }, ie.stripZone = function() {
            var t;
            return this._ambigZone || (t = this._ambigTime, this.utc(!0), this._ambigTime = t || !1, this._ambigZone = !0), this
        }, ie.hasZone = function() {
            return !this._ambigZone
        }, ie.local = function(t) {
            return re.local.call(this, this._ambigZone || t), this._ambigTime = !1, this._ambigZone = !1, this
        }, ie.utc = function(t) {
            return re.utc.call(this, t), this._ambigTime = !1, this._ambigZone = !1, this
        }, ie.utcOffset = function(t) {
            return null != t && (this._ambigTime = !1, this._ambigZone = !1), re.utcOffset.apply(this, arguments)
        }, ie.format = function() {
            return this._fullCalendar && arguments[0] ? oe(this, arguments[0]) : this._ambigTime ? le(St(this), "YYYY-MM-DD") : this._ambigZone ? le(St(this), "YYYY-MM-DD[T]HH:mm:ss") : this._fullCalendar ? le(St(this)) : re.format.apply(this, arguments)
        }, ie.toISOString = function() {
            return this._ambigTime ? le(St(this), "YYYY-MM-DD") : this._ambigZone ? le(St(this), "YYYY-MM-DD[T]HH:mm:ss") : this._fullCalendar ? re.toISOString.apply(St(this), arguments) : re.toISOString.apply(this, arguments)
        },
        function() {
            function t(t, e) {
                return h(r(e).fakeFormatString, t)
            }

            function e(t, e) {
                return re.format.call(t, e)
            }

            function n(t, e, n, s, o) {
                var a;
                return t = Zt.moment.parseZone(t), e = Zt.moment.parseZone(e), a = t.localeData(), n = a.longDateFormat(n) || n, i(r(n), t, e, s || " - ", o)
            }

            function i(t, e, n, i, r) {
                var s, o, a, l = t.sameUnits,
                    u = e.clone().stripZone(),
                    h = n.clone().stripZone(),
                    f = c(t.fakeFormatString, e),
                    g = c(t.fakeFormatString, n),
                    p = "",
                    v = "",
                    m = "",
                    y = "",
                    w = "";
                for (s = 0; s < l.length && (!l[s] || u.isSame(h, l[s])); s++) p += f[s];
                for (o = l.length - 1; o > s && (!l[o] || u.isSame(h, l[o])) && (o - 1 !== s || "." !== f[o]); o--) v = f[o] + v;
                for (a = s; a <= o; a++) m += f[a], y += g[a];
                return (m || y) && (w = r ? y + i + m : m + i + y), d(p + w + v)
            }

            function r(t) {
                return S[t] || (S[t] = s(t))
            }

            function s(t) {
                var e = o(t);
                return {
                    fakeFormatString: l(e),
                    sameUnits: u(e)
                }
            }

            function o(t) {
                for (var e, n = [], i = /\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g; e = i.exec(t);) e[1] ? n.push.apply(n, a(e[1])) : e[2] ? n.push({
                    maybe: o(e[2])
                }) : e[3] ? n.push({
                    token: e[3]
                }) : e[5] && n.push.apply(n, a(e[5]));
                return n
            }

            function a(t) {
                return ". " === t ? [".", " "] : [t]
            }

            function l(t) {
                var e, n, i = [];
                for (e = 0; e < t.length; e++) n = t[e], "string" == typeof n ? i.push("[" + n + "]") : n.token ? n.token in y ? i.push(p + "[" + n.token + "]") : i.push(n.token) : n.maybe && i.push(v + l(n.maybe) + v);
                return i.join(g)
            }

            function u(t) {
                var e, n, i, r = [];
                for (e = 0; e < t.length; e++) n = t[e], n.token ? (i = w[n.token.charAt(0)], r.push(i ? i.unit : "second")) : n.maybe ? r.push.apply(r, u(n.maybe)) : r.push(null);
                return r
            }

            function h(t, e) {
                return d(c(t, e).join(""))
            }

            function c(t, n) {
                var i, r, s = [],
                    o = e(n, t),
                    a = o.split(g);
                for (i = 0; i < a.length; i++) r = a[i], r.charAt(0) === p ? s.push(y[r.substring(1)](n)) : s.push(r);
                return s
            }

            function d(t) {
                return t.replace(m, function(t, e) {
                    return e.match(/[1-9]/) ? e : ""
                })
            }

            function f(t) {
                var e, n, i, r, s = o(t);
                for (e = 0; e < s.length; e++) n = s[e], n.token && (i = w[n.token.charAt(0)]) && (!r || i.value > r.value) && (r = i);
                return r ? r.unit : null
            }
            Zt.formatDate = t, Zt.formatRange = n, Zt.oldMomentFormat = e, Zt.queryMostGranularFormatUnit = f;
            var g = "\v",
                p = "",
                v = "",
                m = new RegExp(v + "([^" + v + "]*)" + v, "g"),
                y = {
                    t: function(t) {
                        return e(t, "a").charAt(0)
                    },
                    T: function(t) {
                        return e(t, "A").charAt(0)
                    }
                },
                w = {
                    Y: {
                        value: 1,
                        unit: "year"
                    },
                    M: {
                        value: 2,
                        unit: "month"
                    },
                    W: {
                        value: 3,
                        unit: "week"
                    },
                    w: {
                        value: 3,
                        unit: "week"
                    },
                    D: {
                        value: 4,
                        unit: "day"
                    },
                    d: {
                        value: 4,
                        unit: "day"
                    }
                },
                S = {}
        }();
    var oe = Zt.formatDate,
        ae = Zt.formatRange,
        le = Zt.oldMomentFormat;
    Zt.Class = bt, bt.extend = function() {
        var t, e, n = arguments.length;
        for (t = 0; t < n; t++) e = arguments[t], t < n - 1 && Dt(this, e);
        return Et(this, e || {})
    }, bt.mixin = function(t) {
        Dt(this, t)
    };
    var ue = bt.extend(fe, ge, {
        _props: null,
        _watchers: null,
        _globalWatchArgs: null,
        constructor: function() {
            this._watchers = {}, this._props = {}, this.applyGlobalWatchers()
        },
        applyGlobalWatchers: function() {
            var t, e = this._globalWatchArgs || [];
            for (t = 0; t < e.length; t++) this.watch.apply(this, e[t])
        },
        has: function(t) {
            return t in this._props
        },
        get: function(t) {
            return void 0 === t ? this._props : this._props[t]
        },
        set: function(t, e) {
            var n;
            "string" == typeof t ? (n = {}, n[t] = void 0 === e ? null : e) : n = t, this.setProps(n)
        },
        reset: function(t) {
            var e, n = this._props,
                i = {};
            for (e in n) i[e] = void 0;
            for (e in t) i[e] = t[e];
            this.setProps(i)
        },
        unset: function(t) {
            var e, n, i = {};
            for (e = "string" == typeof t ? [t] : t, n = 0; n < e.length; n++) i[e[n]] = void 0;
            this.setProps(i)
        },
        setProps: function(t) {
            var e, n, i = {},
                r = 0;
            for (e in t) "object" != typeof(n = t[e]) && n === this._props[e] || (i[e] = n, r++);
            if (r) {
                this.trigger("before:batchChange", i);
                for (e in i) n = i[e], this.trigger("before:change", e, n), this.trigger("before:change:" + e, n);
                for (e in i) n = i[e], void 0 === n ? delete this._props[e] : this._props[e] = n, this.trigger("change:" + e, n), this.trigger("change", e, n);
                this.trigger("batchChange", i)
            }
        },
        watch: function(t, e, n, i) {
            var r = this;
            this.unwatch(t), this._watchers[t] = this._watchDeps(e, function(e) {
                var i = n.call(r, e);
                i && i.then ? (r.unset(t), i.then(function(e) {
                    r.set(t, e)
                })) : r.set(t, i)
            }, function() {
                r.unset(t), i && i.call(r)
            })
        },
        unwatch: function(t) {
            var e = this._watchers[t];
            e && (delete this._watchers[t], e.teardown())
        },
        _watchDeps: function(t, e, n) {
            function i(t, e, i) {
                1 === ++a && u === l && (d = !0, n(), d = !1)
            }

            function r(t, n, i) {
                void 0 === n ? (i || void 0 === h[t] || u--, delete h[t]) : (i || void 0 !== h[t] || u++, h[t] = n), --a || u === l && (d || e(h))
            }

            function s(t, e) {
                o.on(t, e), c.push([t, e])
            }
            var o = this,
                a = 0,
                l = t.length,
                u = 0,
                h = {},
                c = [],
                d = !1;
            return t.forEach(function(t) {
                var e = !1;
                "?" === t.charAt(0) && (t = t.substring(1), e = !0), s("before:change:" + t, function(n) {
                    i(t, n, e)
                }), s("change:" + t, function(n) {
                    r(t, n, e)
                })
            }), t.forEach(function(t) {
                var e = !1;
                "?" === t.charAt(0) && (t = t.substring(1), e = !0), o.has(t) ? (h[t] = o.get(t), u++) : e && u++
            }), u === l && e(h), {
                teardown: function() {
                    for (var t = 0; t < c.length; t++) o.off(c[t][0], c[t][1]);
                    c = null, u === l && n()
                },
                flash: function() {
                    u === l && (n(), e(h))
                }
            }
        },
        flash: function(t) {
            var e = this._watchers[t];
            e && e.flash()
        }
    });
    ue.watch = function() {
        var t = this.prototype;
        t._globalWatchArgs || (t._globalWatchArgs = []), t._globalWatchArgs.push(arguments)
    }, Zt.Model = ue;
    var he = {
        construct: function(e) {
            var n = t.Deferred(),
                i = n.promise();
            return "function" == typeof e && e(function(t) {
                n.resolve(t), Tt(i, t)
            }, function() {
                n.reject(), Ct(i)
            }), i
        },
        resolve: function(e) {
            var n = t.Deferred().resolve(e),
                i = n.promise();
            return Tt(i, e), i
        },
        reject: function() {
            var e = t.Deferred().reject(),
                n = e.promise();
            return Ct(n), n
        }
    };
    Zt.Promise = he;
    var ce = bt.extend(fe, {
        q: null,
        isPaused: !1,
        isRunning: !1,
        constructor: function() {
            this.q = []
        },
        queue: function() {
            this.q.push.apply(this.q, arguments), this.tryStart()
        },
        pause: function() {
            this.isPaused = !0
        },
        resume: function() {
            this.isPaused = !1, this.tryStart()
        },
        tryStart: function() {
            !this.isRunning && this.canRunNext() && (this.isRunning = !0, this.trigger("start"), this.runNext())
        },
        canRunNext: function() {
            return !this.isPaused && this.q.length
        },
        runNext: function() {
            this.runTask(this.q.shift())
        },
        runTask: function(t) {
            this.runTaskFunc(t)
        },
        runTaskFunc: function(t) {
            function e() {
                n.canRunNext() ? n.runNext() : (n.isRunning = !1, n.trigger("stop"))
            }
            var n = this,
                i = t();
            i && i.then ? i.then(e) : e()
        }
    });
    Zt.TaskQueue = ce;
    var de = ce.extend({
        waitsByNamespace: null,
        waitNamespace: null,
        waitId: null,
        constructor: function(t) {
            ce.call(this), this.waitsByNamespace = t || {}
        },
        queue: function(t, e, n) {
            var i, r = {
                func: t,
                namespace: e,
                type: n
            };
            e && (i = this.waitsByNamespace[e]), this.waitNamespace && (e === this.waitNamespace && null != i ? this.delayWait(i) : (this.clearWait(), this.tryStart())), this.compoundTask(r) && (this.waitNamespace || null == i ? this.tryStart() : this.startWait(e, i))
        },
        startWait: function(t, e) {
            this.waitNamespace = t, this.spawnWait(e)
        },
        delayWait: function(t) {
            clearTimeout(this.waitId), this.spawnWait(t)
        },
        spawnWait: function(t) {
            var e = this;
            this.waitId = setTimeout(function() {
                e.waitNamespace = null, e.tryStart()
            }, t)
        },
        clearWait: function() {
            this.waitNamespace && (clearTimeout(this.waitId), this.waitId = null, this.waitNamespace = null)
        },
        canRunNext: function() {
            if (!ce.prototype.canRunNext.apply(this, arguments)) return !1;
            if (this.waitNamespace) {
                for (var t = this.q, e = 0; e < t.length; e++)
                    if (t[e].namespace !== this.waitNamespace) return !0;
                return !1
            }
            return !0
        },
        runTask: function(t) {
            this.runTaskFunc(t.func)
        },
        compoundTask: function(t) {
            var e, n, i = this.q,
                r = !0;
            if (t.namespace && ("destroy" === t.type || "init" === t.type)) {
                for (e = i.length - 1; e >= 0; e--) n = i[e], n.namespace !== t.namespace || "add" !== n.type && "remove" !== n.type || i.splice(e, 1);
                "destroy" === t.type ? i.length && (n = i[i.length - 1], n.namespace === t.namespace && ("init" === n.type ? (r = !1, i.pop()) : "destroy" === n.type && (r = !1))) : "init" === t.type && i.length && (n = i[i.length - 1], n.namespace === t.namespace && "init" === n.type && i.pop())
            }
            return r && i.push(t), r
        }
    });
    Zt.RenderQueue = de;
    var fe = Zt.EmitterMixin = {
            on: function(e, n) {
                return t(this).on(e, this._prepareIntercept(n)), this
            },
            one: function(e, n) {
                return t(this).one(e, this._prepareIntercept(n)), this
            },
            _prepareIntercept: function(e) {
                var n = function(t, n) {
                    return e.apply(n.context || this, n.args || [])
                };
                return e.guid || (e.guid = t.guid++), n.guid = e.guid, n
            },
            off: function(e, n) {
                return t(this).off(e, n), this
            },
            trigger: function(e) {
                var n = Array.prototype.slice.call(arguments, 1);
                return t(this).triggerHandler(e, {
                    args: n
                }), this
            },
            triggerWith: function(e, n, i) {
                return t(this).triggerHandler(e, {
                    context: n,
                    args: i
                }), this
            }
        },
        ge = Zt.ListenerMixin = function() {
            var e = 0;
            return {
                listenerId: null,
                listenTo: function(e, n, i) {
                    if ("object" == typeof n)
                        for (var r in n) n.hasOwnProperty(r) && this.listenTo(e, r, n[r]);
                    else "string" == typeof n && e.on(n + "." + this.getListenerNamespace(), t.proxy(i, this))
                },
                stopListeningTo: function(t, e) {
                    t.off((e || "") + "." + this.getListenerNamespace())
                },
                getListenerNamespace: function() {
                    return null == this.listenerId && (this.listenerId = e++), "_listener" + this.listenerId
                }
            }
        }(),
        pe = bt.extend(ge, {
            isHidden: !0,
            options: null,
            el: null,
            margin: 10,
            constructor: function(t) {
                this.options = t || {}
            },
            show: function() {
                this.isHidden && (this.el || this.render(), this.el.show(), this.position(), this.isHidden = !1, this.trigger("show"))
            },
            hide: function() {
                this.isHidden || (this.el.hide(), this.isHidden = !0, this.trigger("hide"))
            },
            render: function() {
                var e = this,
                    n = this.options;
                this.el = t('<div class="fc-popover"/>').addClass(n.className || "").css({
                    top: 0,
                    left: 0
                }).append(n.content).appendTo(n.parentEl), this.el.on("click", ".fc-close", function() {
                    e.hide()
                }), n.autoHide && this.listenTo(t(document), "mousedown", this.documentMousedown)
            },
            documentMousedown: function(e) {
                this.el && !t(e.target).closest(this.el).length && this.hide()
            },
            removeElement: function() {
                this.hide(), this.el && (this.el.remove(), this.el = null), this.stopListeningTo(t(document), "mousedown")
            },
            position: function() {
                var e, n, i, r, s, o = this.options,
                    a = this.el.offsetParent().offset(),
                    l = this.el.outerWidth(),
                    u = this.el.outerHeight(),
                    h = t(window),
                    d = c(this.el);
                r = o.top || 0, s = void 0 !== o.left ? o.left : void 0 !== o.right ? o.right - l : 0, d.is(window) || d.is(document) ? (d = h, e = 0, n = 0) : (i = d.offset(), e = i.top, n = i.left), e += h.scrollTop(), n += h.scrollLeft(), !1 !== o.viewportConstrain && (r = Math.min(r, e + d.outerHeight() - u - this.margin), r = Math.max(r, e + this.margin), s = Math.min(s, n + d.outerWidth() - l - this.margin), s = Math.max(s, n + this.margin)), this.el.css({
                    top: r - a.top,
                    left: s - a.left
                })
            },
            trigger: function(t) {
                this.options[t] && this.options[t].apply(this, Array.prototype.slice.call(arguments, 1))
            }
        }),
        ve = Zt.CoordCache = bt.extend({
            els: null,
            forcedOffsetParentEl: null,
            origin: null,
            boundingRect: null,
            isHorizontal: !1,
            isVertical: !1,
            lefts: null,
            rights: null,
            tops: null,
            bottoms: null,
            constructor: function(e) {
                this.els = t(e.els), this.isHorizontal = e.isHorizontal, this.isVertical = e.isVertical, this.forcedOffsetParentEl = e.offsetParent ? t(e.offsetParent) : null
            },
            build: function() {
                var t = this.forcedOffsetParentEl;
                !t && this.els.length > 0 && (t = this.els.eq(0).offsetParent()), this.origin = t ? t.offset() : null, this.boundingRect = this.queryBoundingRect(), this.isHorizontal && this.buildElHorizontals(), this.isVertical && this.buildElVerticals()
            },
            clear: function() {
                this.origin = null, this.boundingRect = null, this.lefts = null, this.rights = null, this.tops = null, this.bottoms = null
            },
            ensureBuilt: function() {
                this.origin || this.build()
            },
            buildElHorizontals: function() {
                var e = [],
                    n = [];
                this.els.each(function(i, r) {
                    var s = t(r),
                        o = s.offset().left,
                        a = s.outerWidth();
                    e.push(o), n.push(o + a)
                }), this.lefts = e, this.rights = n
            },
            buildElVerticals: function() {
                var e = [],
                    n = [];
                this.els.each(function(i, r) {
                    var s = t(r),
                        o = s.offset().top,
                        a = s.outerHeight();
                    e.push(o), n.push(o + a)
                }), this.tops = e, this.bottoms = n
            },
            getHorizontalIndex: function(t) {
                this.ensureBuilt();
                var e, n = this.lefts,
                    i = this.rights,
                    r = n.length;
                for (e = 0; e < r; e++)
                    if (t >= n[e] && t < i[e]) return e
            },
            getVerticalIndex: function(t) {
                this.ensureBuilt();
                var e, n = this.tops,
                    i = this.bottoms,
                    r = n.length;
                for (e = 0; e < r; e++)
                    if (t >= n[e] && t < i[e]) return e
            },
            getLeftOffset: function(t) {
                return this.ensureBuilt(), this.lefts[t]
            },
            getLeftPosition: function(t) {
                return this.ensureBuilt(), this.lefts[t] - this.origin.left
            },
            getRightOffset: function(t) {
                return this.ensureBuilt(), this.rights[t]
            },
            getRightPosition: function(t) {
                return this.ensureBuilt(), this.rights[t] - this.origin.left
            },
            getWidth: function(t) {
                return this.ensureBuilt(), this.rights[t] - this.lefts[t]
            },
            getTopOffset: function(t) {
                return this.ensureBuilt(), this.tops[t]
            },
            getTopPosition: function(t) {
                return this.ensureBuilt(), this.tops[t] - this.origin.top
            },
            getBottomOffset: function(t) {
                return this.ensureBuilt(), this.bottoms[t]
            },
            getBottomPosition: function(t) {
                return this.ensureBuilt(), this.bottoms[t] - this.origin.top
            },
            getHeight: function(t) {
                return this.ensureBuilt(), this.bottoms[t] - this.tops[t]
            },
            queryBoundingRect: function() {
                var t;
                return this.els.length > 0 && (t = c(this.els.eq(0)), !t.is(document)) ? f(t) : null
            },
            isPointInBounds: function(t, e) {
                return this.isLeftInBounds(t) && this.isTopInBounds(e)
            },
            isLeftInBounds: function(t) {
                return !this.boundingRect || t >= this.boundingRect.left && t < this.boundingRect.right
            },
            isTopInBounds: function(t) {
                return !this.boundingRect || t >= this.boundingRect.top && t < this.boundingRect.bottom
            }
        }),
        me = Zt.DragListener = bt.extend(ge, {
            options: null,
            subjectEl: null,
            originX: null,
            originY: null,
            scrollEl: null,
            isInteracting: !1,
            isDistanceSurpassed: !1,
            isDelayEnded: !1,
            isDragging: !1,
            isTouch: !1,
            isGeneric: !1,
            delay: null,
            delayTimeoutId: null,
            minDistance: null,
            shouldCancelTouchScroll: !0,
            scrollAlwaysKills: !1,
            constructor: function(t) {
                this.options = t || {}
            },
            startInteraction: function(e, n) {
                if ("mousedown" === e.type) {
                    if (we.get().shouldIgnoreMouse()) return;
                    if (!S(e)) return;
                    e.preventDefault()
                }
                this.isInteracting || (n = n || {}, this.delay = ut(n.delay, this.options.delay, 0), this.minDistance = ut(n.distance, this.options.distance, 0), this.subjectEl = this.options.subjectEl, T(t("body")), this.isInteracting = !0, this.isTouch = D(e), this.isGeneric = "dragstart" === e.type, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, this.originX = b(e), this.originY = E(e), this.scrollEl = c(t(e.target)), this.bindHandlers(), this.initAutoScroll(), this.handleInteractionStart(e), this.startDelay(e), this.minDistance || this.handleDistanceSurpassed(e))
            },
            handleInteractionStart: function(t) {
                this.trigger("interactionStart", t)
            },
            endInteraction: function(e, n) {
                this.isInteracting && (this.endDrag(e), this.delayTimeoutId && (clearTimeout(this.delayTimeoutId), this.delayTimeoutId = null), this.destroyAutoScroll(), this.unbindHandlers(), this.isInteracting = !1, this.handleInteractionEnd(e, n), C(t("body")))
            },
            handleInteractionEnd: function(t, e) {
                this.trigger("interactionEnd", t, e || !1)
            },
            bindHandlers: function() {
                var e = we.get();
                this.isGeneric ? this.listenTo(t(document), {
                    drag: this.handleMove,
                    dragstop: this.endInteraction
                }) : this.isTouch ? this.listenTo(e, {
                    touchmove: this.handleTouchMove,
                    touchend: this.endInteraction,
                    scroll: this.handleTouchScroll
                }) : this.listenTo(e, {
                    mousemove: this.handleMouseMove,
                    mouseup: this.endInteraction
                }), this.listenTo(e, {
                    selectstart: H,
                    contextmenu: H
                })
            },
            unbindHandlers: function() {
                this.stopListeningTo(we.get()), this.stopListeningTo(t(document))
            },
            startDrag: function(t, e) {
                this.startInteraction(t, e), this.isDragging || (this.isDragging = !0, this.handleDragStart(t))
            },
            handleDragStart: function(t) {
                this.trigger("dragStart", t)
            },
            handleMove: function(t) {
                var e = b(t) - this.originX,
                    n = E(t) - this.originY,
                    i = this.minDistance;
                this.isDistanceSurpassed || e * e + n * n >= i * i && this.handleDistanceSurpassed(t), this.isDragging && this.handleDrag(e, n, t)
            },
            handleDrag: function(t, e, n) {
                this.trigger("drag", t, e, n), this.updateAutoScroll(n)
            },
            endDrag: function(t) {
                this.isDragging && (this.isDragging = !1, this.handleDragEnd(t))
            },
            handleDragEnd: function(t) {
                this.trigger("dragEnd", t)
            },
            startDelay: function(t) {
                var e = this;
                this.delay ? this.delayTimeoutId = setTimeout(function() {
                    e.handleDelayEnd(t)
                }, this.delay) : this.handleDelayEnd(t)
            },
            handleDelayEnd: function(t) {
                this.isDelayEnded = !0, this.isDistanceSurpassed && this.startDrag(t)
            },
            handleDistanceSurpassed: function(t) {
                this.isDistanceSurpassed = !0, this.isDelayEnded && this.startDrag(t)
            },
            handleTouchMove: function(t) {
                this.isDragging && this.shouldCancelTouchScroll && t.preventDefault(), this.handleMove(t)
            },
            handleMouseMove: function(t) {
                this.handleMove(t)
            },
            handleTouchScroll: function(t) {
                this.isDragging && !this.scrollAlwaysKills || this.endInteraction(t, !0)
            },
            trigger: function(t) {
                this.options[t] && this.options[t].apply(this, Array.prototype.slice.call(arguments, 1)), this["_" + t] && this["_" + t].apply(this, Array.prototype.slice.call(arguments, 1))
            }
        });
    me.mixin({
        isAutoScroll: !1,
        scrollBounds: null,
        scrollTopVel: null,
        scrollLeftVel: null,
        scrollIntervalId: null,
        scrollSensitivity: 30,
        scrollSpeed: 200,
        scrollIntervalMs: 50,
        initAutoScroll: function() {
            var t = this.scrollEl;
            this.isAutoScroll = this.options.scroll && t && !t.is(window) && !t.is(document), this.isAutoScroll && this.listenTo(t, "scroll", yt(this.handleDebouncedScroll, 100))
        },
        destroyAutoScroll: function() {
            this.endAutoScroll(), this.isAutoScroll && this.stopListeningTo(this.scrollEl, "scroll")
        },
        computeScrollBounds: function() {
            this.isAutoScroll && (this.scrollBounds = d(this.scrollEl))
        },
        updateAutoScroll: function(t) {
            var e, n, i, r, s = this.scrollSensitivity,
                o = this.scrollBounds,
                a = 0,
                l = 0;
            o && (e = (s - (E(t) - o.top)) / s, n = (s - (o.bottom - E(t))) / s, i = (s - (b(t) - o.left)) / s, r = (s - (o.right - b(t))) / s, e >= 0 && e <= 1 ? a = e * this.scrollSpeed * -1 : n >= 0 && n <= 1 && (a = n * this.scrollSpeed), i >= 0 && i <= 1 ? l = i * this.scrollSpeed * -1 : r >= 0 && r <= 1 && (l = r * this.scrollSpeed)), this.setScrollVel(a, l)
        },
        setScrollVel: function(t, e) {
            this.scrollTopVel = t, this.scrollLeftVel = e, this.constrainScrollVel(), !this.scrollTopVel && !this.scrollLeftVel || this.scrollIntervalId || (this.scrollIntervalId = setInterval(mt(this, "scrollIntervalFunc"), this.scrollIntervalMs))
        },
        constrainScrollVel: function() {
            var t = this.scrollEl;
            this.scrollTopVel < 0 ? t.scrollTop() <= 0 && (this.scrollTopVel = 0) : this.scrollTopVel > 0 && t.scrollTop() + t[0].clientHeight >= t[0].scrollHeight && (this.scrollTopVel = 0), this.scrollLeftVel < 0 ? t.scrollLeft() <= 0 && (this.scrollLeftVel = 0) : this.scrollLeftVel > 0 && t.scrollLeft() + t[0].clientWidth >= t[0].scrollWidth && (this.scrollLeftVel = 0)
        },
        scrollIntervalFunc: function() {
            var t = this.scrollEl,
                e = this.scrollIntervalMs / 1e3;
            this.scrollTopVel && t.scrollTop(t.scrollTop() + this.scrollTopVel * e), this.scrollLeftVel && t.scrollLeft(t.scrollLeft() + this.scrollLeftVel * e), this.constrainScrollVel(), this.scrollTopVel || this.scrollLeftVel || this.endAutoScroll()
        },
        endAutoScroll: function() {
            this.scrollIntervalId && (clearInterval(this.scrollIntervalId), this.scrollIntervalId = null, this.handleScrollEnd())
        },
        handleDebouncedScroll: function() {
            this.scrollIntervalId || this.handleScrollEnd()
        },
        handleScrollEnd: function() {}
    });
    var ye = me.extend({
        component: null,
        origHit: null,
        hit: null,
        coordAdjust: null,
        constructor: function(t, e) {
            me.call(this, e), this.component = t
        },
        handleInteractionStart: function(t) {
            var e, n, i, r = this.subjectEl;
            this.component.hitsNeeded(), this.computeScrollBounds(), t ? (n = {
                left: b(t),
                top: E(t)
            }, i = n, r && (e = d(r), i = x(i, e)), this.origHit = this.queryHit(i.left, i.top), r && this.options.subjectCenter && (this.origHit && (e = R(this.origHit, e) || e), i = I(e)), this.coordAdjust = k(i, n)) : (this.origHit = null, this.coordAdjust = null), me.prototype.handleInteractionStart.apply(this, arguments)
        },
        handleDragStart: function(t) {
            var e;
            me.prototype.handleDragStart.apply(this, arguments), (e = this.queryHit(b(t), E(t))) && this.handleHitOver(e)
        },
        handleDrag: function(t, e, n) {
            var i;
            me.prototype.handleDrag.apply(this, arguments), i = this.queryHit(b(n), E(n)), Ht(i, this.hit) || (this.hit && this.handleHitOut(), i && this.handleHitOver(i))
        },
        handleDragEnd: function() {
            this.handleHitDone(), me.prototype.handleDragEnd.apply(this, arguments)
        },
        handleHitOver: function(t) {
            var e = Ht(t, this.origHit);
            this.hit = t, this.trigger("hitOver", this.hit, e, this.origHit)
        },
        handleHitOut: function() {
            this.hit && (this.trigger("hitOut", this.hit), this.handleHitDone(), this.hit = null)
        },
        handleHitDone: function() {
            this.hit && this.trigger("hitDone", this.hit)
        },
        handleInteractionEnd: function() {
            me.prototype.handleInteractionEnd.apply(this, arguments), this.origHit = null, this.hit = null, this.component.hitsNotNeeded()
        },
        handleScrollEnd: function() {
            me.prototype.handleScrollEnd.apply(this, arguments), this.isDragging && (this.component.releaseHits(), this.component.prepareHits())
        },
        queryHit: function(t, e) {
            return this.coordAdjust && (t += this.coordAdjust.left, e += this.coordAdjust.top), this.component.queryHit(t, e)
        }
    });
    Zt.touchMouseIgnoreWait = 500;
    var we = bt.extend(ge, fe, {
        isTouching: !1,
        mouseIgnoreDepth: 0,
        handleScrollProxy: null,
        bind: function() {
            var e = this;
            this.listenTo(t(document), {
                touchstart: this.handleTouchStart,
                touchcancel: this.handleTouchCancel,
                touchend: this.handleTouchEnd,
                mousedown: this.handleMouseDown,
                mousemove: this.handleMouseMove,
                mouseup: this.handleMouseUp,
                click: this.handleClick,
                selectstart: this.handleSelectStart,
                contextmenu: this.handleContextMenu
            }), window.addEventListener("touchmove", this.handleTouchMoveProxy = function(n) {
                e.handleTouchMove(t.Event(n))
            }, {
                passive: !1
            }), window.addEventListener("scroll", this.handleScrollProxy = function(n) {
                e.handleScroll(t.Event(n))
            }, !0)
        },
        unbind: function() {
            this.stopListeningTo(t(document)), window.removeEventListener("touchmove", this.handleTouchMoveProxy), window.removeEventListener("scroll", this.handleScrollProxy, !0)
        },
        handleTouchStart: function(t) {
            this.stopTouch(t, !0), this.isTouching = !0, this.trigger("touchstart", t)
        },
        handleTouchMove: function(t) {
            this.isTouching && this.trigger("touchmove", t)
        },
        handleTouchCancel: function(t) {
            this.isTouching && (this.trigger("touchcancel", t), this.stopTouch(t))
        },
        handleTouchEnd: function(t) {
            this.stopTouch(t)
        },
        handleMouseDown: function(t) {
            this.shouldIgnoreMouse() || this.trigger("mousedown", t)
        },
        handleMouseMove: function(t) {
            this.shouldIgnoreMouse() || this.trigger("mousemove", t)
        },
        handleMouseUp: function(t) {
            this.shouldIgnoreMouse() || this.trigger("mouseup", t)
        },
        handleClick: function(t) {
            this.shouldIgnoreMouse() || this.trigger("click", t)
        },
        handleSelectStart: function(t) {
            this.trigger("selectstart", t)
        },
        handleContextMenu: function(t) {
            this.trigger("contextmenu", t)
        },
        handleScroll: function(t) {
            this.trigger("scroll", t)
        },
        stopTouch: function(t, e) {
            this.isTouching && (this.isTouching = !1, this.trigger("touchend", t), e || this.startTouchMouseIgnore())
        },
        startTouchMouseIgnore: function() {
            var t = this,
                e = Zt.touchMouseIgnoreWait;
            e && (this.mouseIgnoreDepth++, setTimeout(function() {
                t.mouseIgnoreDepth--
            }, e))
        },
        shouldIgnoreMouse: function() {
            return this.isTouching || Boolean(this.mouseIgnoreDepth)
        }
    });
    ! function() {
        var t = null,
            e = 0;
        we.get = function() {
            return t || (t = new we, t.bind()), t
        }, we.needed = function() {
            we.get(), e++
        }, we.unneeded = function() {
            --e || (t.unbind(), t = null)
        }
    }();
    var Se = bt.extend(ge, {
            options: null,
            sourceEl: null,
            el: null,
            parentEl: null,
            top0: null,
            left0: null,
            y0: null,
            x0: null,
            topDelta: null,
            leftDelta: null,
            isFollowing: !1,
            isHidden: !1,
            isAnimating: !1,
            constructor: function(e, n) {
                this.options = n = n || {}, this.sourceEl = e, this.parentEl = n.parentEl ? t(n.parentEl) : e.parent()
            },
            start: function(e) {
                this.isFollowing || (this.isFollowing = !0, this.y0 = E(e), this.x0 = b(e), this.topDelta = 0, this.leftDelta = 0, this.isHidden || this.updatePosition(), D(e) ? this.listenTo(t(document), "touchmove", this.handleMove) : this.listenTo(t(document), "mousemove", this.handleMove))
            },
            stop: function(e, n) {
                function i() {
                    r.isAnimating = !1, r.removeElement(), r.top0 = r.left0 = null, n && n()
                }
                var r = this,
                    s = this.options.revertDuration;
                this.isFollowing && !this.isAnimating && (this.isFollowing = !1, this.stopListeningTo(t(document)), e && s && !this.isHidden ? (this.isAnimating = !0, this.el.animate({
                    top: this.top0,
                    left: this.left0
                }, {
                    duration: s,
                    complete: i
                })) : i())
            },
            getEl: function() {
                var t = this.el;
                return t || (t = this.el = this.sourceEl.clone().addClass(this.options.additionalClass || "").css({
                    position: "absolute",
                    visibility: "",
                    display: this.isHidden ? "none" : "",
                    margin: 0,
                    right: "auto",
                    bottom: "auto",
                    width: this.sourceEl.width(),
                    height: this.sourceEl.height(),
                    opacity: this.options.opacity || "",
                    zIndex: this.options.zIndex
                }), t.addClass("fc-unselectable"), t.appendTo(this.parentEl)), t
            },
            removeElement: function() {
                this.el && (this.el.remove(), this.el = null)
            },
            updatePosition: function() {
                var t, e;
                this.getEl(), null === this.top0 && (t = this.sourceEl.offset(), e = this.el.offsetParent().offset(), this.top0 = t.top - e.top, this.left0 = t.left - e.left), this.el.css({
                    top: this.top0 + this.topDelta,
                    left: this.left0 + this.leftDelta
                })
            },
            handleMove: function(t) {
                this.topDelta = E(t) - this.y0, this.leftDelta = b(t) - this.x0, this.isHidden || this.updatePosition()
            },
            hide: function() {
                this.isHidden || (this.isHidden = !0, this.el && this.el.hide())
            },
            show: function() {
                this.isHidden && (this.isHidden = !1, this.updatePosition(), this.getEl().show())
            }
        }),
        be = Zt.Grid = bt.extend(ge, {
            hasDayInteractions: !0,
            view: null,
            isRTL: null,
            start: null,
            end: null,
            el: null,
            elsByFill: null,
            eventTimeFormat: null,
            displayEventTime: null,
            displayEventEnd: null,
            minResizeDuration: null,
            largeUnit: null,
            dayClickListener: null,
            daySelectListener: null,
            segDragListener: null,
            segResizeListener: null,
            externalDragListener: null,
            constructor: function(t) {
                this.view = t, this.isRTL = t.opt("isRTL"), this.elsByFill = {}, this.dayClickListener = this.buildDayClickListener(), this.daySelectListener = this.buildDaySelectListener()
            },
            computeEventTimeFormat: function() {
                return this.view.opt("smallTimeFormat")
            },
            computeDisplayEventTime: function() {
                return !0
            },
            computeDisplayEventEnd: function() {
                return !0
            },
            setRange: function(t) {
                this.start = t.start.clone(), this.end = t.end.clone(), this.rangeUpdated(), this.processRangeOptions()
            },
            rangeUpdated: function() {},
            processRangeOptions: function() {
                var t, e, n = this.view;
                this.eventTimeFormat = n.opt("eventTimeFormat") || n.opt("timeFormat") || this.computeEventTimeFormat(), t = n.opt("displayEventTime"), null == t && (t = this.computeDisplayEventTime()), e = n.opt("displayEventEnd"), null == e && (e = this.computeDisplayEventEnd()), this.displayEventTime = t, this.displayEventEnd = e
            },
            spanToSegs: function(t) {},
            diffDates: function(t, e) {
                return this.largeUnit ? G(t, e, this.largeUnit) : F(t, e)
            },
            hitsNeededDepth: 0,
            hitsNeeded: function() {
                this.hitsNeededDepth++ || this.prepareHits()
            },
            hitsNotNeeded: function() {
                this.hitsNeededDepth && !--this.hitsNeededDepth && this.releaseHits()
            },
            prepareHits: function() {},
            releaseHits: function() {},
            queryHit: function(t, e) {},
            getSafeHitSpan: function(t) {
                var e = this.getHitSpan(t);
                return Q(e, this.view.activeRange) ? e : null
            },
            getHitSpan: function(t) {},
            getHitEl: function(t) {},
            setElement: function(t) {
                this.el = t, this.hasDayInteractions && (T(t), this.bindDayHandler("touchstart", this.dayTouchStart), this.bindDayHandler("mousedown", this.dayMousedown)), this.bindSegHandlers(), this.bindGlobalHandlers()
            },
            bindDayHandler: function(e, n) {
                var i = this;
                this.el.on(e, function(e) {
                    if (!t(e.target).is(i.segSelector + "," + i.segSelector + " *,.fc-more,a[data-goto]")) return n.call(i, e)
                })
            },
            removeElement: function() {
                this.unbindGlobalHandlers(), this.clearDragListeners(), this.el.remove()
            },
            renderSkeleton: function() {},
            renderDates: function() {},
            unrenderDates: function() {},
            bindGlobalHandlers: function() {
                this.listenTo(t(document), {
                    dragstart: this.externalDragStart,
                    sortstart: this.externalDragStart
                })
            },
            unbindGlobalHandlers: function() {
                this.stopListeningTo(t(document))
            },
            dayMousedown: function(t) {
                var e = this.view;
                we.get().shouldIgnoreMouse() || (this.dayClickListener.startInteraction(t), e.opt("selectable") && this.daySelectListener.startInteraction(t, {
                    distance: e.opt("selectMinDistance")
                }))
            },
            dayTouchStart: function(t) {
                var e, n = this.view;
                n.isSelected || n.selectedEvent || (e = n.opt("selectLongPressDelay"), null == e && (e = n.opt("longPressDelay")), this.dayClickListener.startInteraction(t), n.opt("selectable") && this.daySelectListener.startInteraction(t, {
                    delay: e
                }))
            },
            buildDayClickListener: function() {
                var t, e = this,
                    n = this.view,
                    i = new ye(this, {
                        scroll: n.opt("dragScroll"),
                        interactionStart: function() {
                            t = i.origHit
                        },
                        hitOver: function(e, n, i) {
                            n || (t = null)
                        },
                        hitOut: function() {
                            t = null
                        },
                        interactionEnd: function(i, r) {
                            var s;
                            !r && t && (s = e.getSafeHitSpan(t)) && n.triggerDayClick(s, e.getHitEl(t), i)
                        }
                    });
                return i.shouldCancelTouchScroll = !1, i.scrollAlwaysKills = !0, i
            },
            buildDaySelectListener: function() {
                var t, e = this,
                    n = this.view;
                return new ye(this, {
                    scroll: n.opt("dragScroll"),
                    interactionStart: function() {
                        t = null
                    },
                    dragStart: function() {
                        n.unselect()
                    },
                    hitOver: function(n, i, r) {
                        var o, a;
                        r && (o = e.getSafeHitSpan(r), a = e.getSafeHitSpan(n), t = o && a ? e.computeSelection(o, a) : null, t ? e.renderSelection(t) : !1 === t && s())
                    },
                    hitOut: function() {
                        t = null, e.unrenderSelection()
                    },
                    hitDone: function() {
                        o()
                    },
                    interactionEnd: function(e, i) {
                        !i && t && n.reportSelection(t, e)
                    }
                })
            },
            clearDragListeners: function() {
                this.dayClickListener.endInteraction(), this.daySelectListener.endInteraction(), this.segDragListener && this.segDragListener.endInteraction(), this.segResizeListener && this.segResizeListener.endInteraction(), this.externalDragListener && this.externalDragListener.endInteraction()
            },
            renderEventLocationHelper: function(t, e) {
                var n = this.fabricateHelperEvent(t, e);
                return this.renderHelper(n, e)
            },
            fabricateHelperEvent: function(t, e) {
                var n = e ? rt(e.event) : {};
                return n.start = t.start.clone(), n.end = t.end ? t.end.clone() : null, n.allDay = null, this.view.calendar.normalizeEventDates(n), n.className = (n.className || []).concat("fc-helper"), e || (n.editable = !1), n
            },
            renderHelper: function(t, e) {},
            unrenderHelper: function() {},
            renderSelection: function(t) {
                this.renderHighlight(t)
            },
            unrenderSelection: function() {
                this.unrenderHighlight()
            },
            computeSelection: function(t, e) {
                var n = this.computeSelectionSpan(t, e);
                return !(n && !this.view.calendar.isSelectionSpanAllowed(n)) && n
            },
            computeSelectionSpan: function(t, e) {
                var n = [t.start, t.end, e.start, e.end];
                return n.sort(pt), {
                    start: n[0].clone(),
                    end: n[3].clone()
                }
            },
            renderHighlight: function(t) {
                this.renderFill("highlight", this.spanToSegs(t))
            },
            unrenderHighlight: function() {
                this.unrenderFill("highlight")
            },
            highlightSegClasses: function() {
                return ["fc-highlight"]
            },
            renderBusinessHours: function() {},
            unrenderBusinessHours: function() {},
            getNowIndicatorUnit: function() {},
            renderNowIndicator: function(t) {},
            unrenderNowIndicator: function() {},
            renderFill: function(t, e) {},
            unrenderFill: function(t) {
                var e = this.elsByFill[t];
                e && (e.remove(), delete this.elsByFill[t])
            },
            renderFillSegEls: function(e, n) {
                var i, r = this,
                    s = this[e + "SegEl"],
                    o = "",
                    a = [];
                if (n.length) {
                    for (i = 0; i < n.length; i++) o += this.fillSegHtml(e, n[i]);
                    t(o).each(function(e, i) {
                        var o = n[e],
                            l = t(i);
                        s && (l = s.call(r, o, l)), l && (l = t(l), l.is(r.fillSegTag) && (o.el = l, a.push(o)))
                    })
                }
                return a
            },
            fillSegTag: "div",
            fillSegHtml: function(t, e) {
                var n = this[t + "SegClasses"],
                    i = this[t + "SegCss"],
                    r = n ? n.call(this, e) : [],
                    s = dt(i ? i.call(this, e) : {});
                return "<" + this.fillSegTag + (r.length ? ' class="' + r.join(" ") + '"' : "") + (s ? ' style="' + s + '"' : "") + " />"
            },
            getDayClasses: function(t, e) {
                var n, i = this.view,
                    r = [];
                return Z(t, i.activeRange) ? (r.push("fc-" + Kt[t.day()]), 1 == i.currentRangeAs("months") && t.month() != i.currentRange.start.month() && r.push("fc-other-month"), n = i.calendar.getNow(), t.isSame(n, "day") ? (r.push("fc-today"), !0 !== e && r.push(i.highlightStateClass)) : t < n ? r.push("fc-past") : r.push("fc-future")) : r.push("fc-disabled-day"), r
            }
        });
    be.mixin({
        segSelector: ".fc-event-container > *",
        mousedOverSeg: null,
        isDraggingSeg: !1,
        isResizingSeg: !1,
        isDraggingExternal: !1,
        segs: null,
        renderEvents: function(t) {
            var e, n = [],
                i = [];
            for (e = 0; e < t.length; e++)(It(t[e]) ? n : i).push(t[e]);
            this.segs = [].concat(this.renderBgEvents(n), this.renderFgEvents(i))
        },
        renderBgEvents: function(t) {
            var e = this.eventsToSegs(t);
            return this.renderBgSegs(e) || e
        },
        renderFgEvents: function(t) {
            var e = this.eventsToSegs(t);
            return this.renderFgSegs(e) || e
        },
        unrenderEvents: function() {
            this.handleSegMouseout(), this.clearDragListeners(), this.unrenderFgSegs(), this.unrenderBgSegs(), this.segs = null
        },
        getEventSegs: function() {
            return this.segs || []
        },
        renderFgSegs: function(t) {},
        unrenderFgSegs: function() {},
        renderFgSegEls: function(e, n) {
            var i, r = this.view,
                s = "",
                o = [];
            if (e.length) {
                for (i = 0; i < e.length; i++) s += this.fgSegHtml(e[i], n);
                t(s).each(function(n, i) {
                    var s = e[n],
                        a = r.resolveEventEl(s.event, t(i));
                    a && (a.data("fc-seg", s), s.el = a, o.push(s))
                })
            }
            return o
        },
        fgSegHtml: function(t, e) {},
        renderBgSegs: function(t) {
            return this.renderFill("bgEvent", t)
        },
        unrenderBgSegs: function() {
            this.unrenderFill("bgEvent")
        },
        bgEventSegEl: function(t, e) {
            return this.view.resolveEventEl(t.event, e)
        },
        bgEventSegClasses: function(t) {
            var e = t.event,
                n = e.source || {};
            return ["fc-bgevent"].concat(e.className, n.className || [])
        },
        bgEventSegCss: function(t) {
            return {
                "background-color": this.getSegSkinCss(t)["background-color"]
            }
        },
        businessHoursSegClasses: function(t) {
            return ["fc-nonbusiness", "fc-bgevent"]
        },
        buildBusinessHourSegs: function(t, e) {
            return this.eventsToSegs(this.buildBusinessHourEvents(t, e))
        },
        buildBusinessHourEvents: function(e, n) {
            var i, r = this.view.calendar;
            return null == n && (n = r.opt("businessHours")), i = r.computeBusinessHourEvents(e, n), !i.length && n && (i = [t.extend({}, Ne, {
                start: this.view.activeRange.end,
                end: this.view.activeRange.end,
                dow: null
            })]), i
        },
        bindSegHandlers: function() {
            this.bindSegHandlersToEl(this.el)
        },
        bindSegHandlersToEl: function(t) {
            this.bindSegHandlerToEl(t, "touchstart", this.handleSegTouchStart), this.bindSegHandlerToEl(t, "mouseenter", this.handleSegMouseover), this.bindSegHandlerToEl(t, "mouseleave", this.handleSegMouseout), this.bindSegHandlerToEl(t, "mousedown", this.handleSegMousedown), this.bindSegHandlerToEl(t, "click", this.handleSegClick)
        },
        bindSegHandlerToEl: function(e, n, i) {
            var r = this;
            e.on(n, this.segSelector, function(e) {
                var n = t(this).data("fc-seg");
                if (n && !r.isDraggingSeg && !r.isResizingSeg) return i.call(r, n, e)
            })
        },
        handleSegClick: function(t, e) {
            !1 === this.view.publiclyTrigger("eventClick", t.el[0], t.event, e) && e.preventDefault()
        },
        handleSegMouseover: function(t, e) {
            we.get().shouldIgnoreMouse() || this.mousedOverSeg || (this.mousedOverSeg = t, this.view.isEventResizable(t.event) && t.el.addClass("fc-allow-mouse-resize"), this.view.publiclyTrigger("eventMouseover", t.el[0], t.event, e))
        },
        handleSegMouseout: function(t, e) {
            e = e || {}, this.mousedOverSeg && (t = t || this.mousedOverSeg, this.mousedOverSeg = null, this.view.isEventResizable(t.event) && t.el.removeClass("fc-allow-mouse-resize"), this.view.publiclyTrigger("eventMouseout", t.el[0], t.event, e))
        },
        handleSegMousedown: function(t, e) {
            !this.startSegResize(t, e, {
                distance: 5
            }) && this.view.isEventDraggable(t.event) && this.buildSegDragListener(t).startInteraction(e, {
                distance: 5
            })
        },
        handleSegTouchStart: function(t, e) {
            var n, i, r = this.view,
                s = t.event,
                o = r.isEventSelected(s),
                a = r.isEventDraggable(s),
                l = r.isEventResizable(s),
                u = !1;
            o && l && (u = this.startSegResize(t, e)), u || !a && !l || (i = r.opt("eventLongPressDelay"), null == i && (i = r.opt("longPressDelay")), n = a ? this.buildSegDragListener(t) : this.buildSegSelectListener(t), n.startInteraction(e, {
                delay: o ? 0 : i
            }))
        },
        startSegResize: function(e, n, i) {
            return !!t(n.target).is(".fc-resizer") && (this.buildSegResizeListener(e, t(n.target).is(".fc-start-resizer")).startInteraction(n, i), !0)
        },
        buildSegDragListener: function(t) {
            var e, n, i, r = this,
                a = this.view,
                l = t.el,
                u = t.event;
            if (this.segDragListener) return this.segDragListener;
            var h = this.segDragListener = new ye(a, {
                scroll: a.opt("dragScroll"),
                subjectEl: l,
                subjectCenter: !0,
                interactionStart: function(i) {
                    t.component = r, e = !1, n = new Se(t.el, {
                        additionalClass: "fc-dragging",
                        parentEl: a.el,
                        opacity: h.isTouch ? null : a.opt("dragOpacity"),
                        revertDuration: a.opt("dragRevertDuration"),
                        zIndex: 2
                    }), n.hide(), n.start(i)
                },
                dragStart: function(n) {
                    h.isTouch && !a.isEventSelected(u) && a.selectEvent(u), e = !0, r.handleSegMouseout(t, n), r.segDragStart(t, n), a.hideEvent(u)
                },
                hitOver: function(e, o, l) {
                    var c, d, f, g = !0;
                    t.hit && (l = t.hit), c = l.component.getSafeHitSpan(l), d = e.component.getSafeHitSpan(e), c && d ? (i = r.computeEventDrop(c, d, u), g = i && r.isEventLocationAllowed(i, u)) : g = !1, g || (i = null, s()), i && (f = a.renderDrag(i, t)) ? (f.addClass("fc-dragging"), h.isTouch || r.applyDragOpacity(f), n.hide()) : n.show(), o && (i = null)
                },
                hitOut: function() {
                    a.unrenderDrag(), n.show(), i = null
                },
                hitDone: function() {
                    o()
                },
                interactionEnd: function(s) {
                    delete t.component, n.stop(!i, function() {
                        e && (a.unrenderDrag(), r.segDragStop(t, s)), i ? a.reportSegDrop(t, i, r.largeUnit, l, s) : a.showEvent(u)
                    }), r.segDragListener = null
                }
            });
            return h
        },
        buildSegSelectListener: function(t) {
            var e = this,
                n = this.view,
                i = t.event;
            if (this.segDragListener) return this.segDragListener;
            var r = this.segDragListener = new me({
                dragStart: function(t) {
                    r.isTouch && !n.isEventSelected(i) && n.selectEvent(i)
                },
                interactionEnd: function(t) {
                    e.segDragListener = null
                }
            });
            return r
        },
        segDragStart: function(t, e) {
            this.isDraggingSeg = !0, this.view.publiclyTrigger("eventDragStart", t.el[0], t.event, e, {})
        },
        segDragStop: function(t, e) {
            this.isDraggingSeg = !1, this.view.publiclyTrigger("eventDragStop", t.el[0], t.event, e, {})
        },
        computeEventDrop: function(t, e, n) {
            var i, r, s = this.view.calendar,
                o = t.start,
                a = e.start;
            return o.hasTime() === a.hasTime() ? (i = this.diffDates(a, o), n.allDay && tt(i) ? (r = {
                start: n.start.clone(),
                end: s.getEventEnd(n),
                allDay: !1
            }, s.normalizeEventTimes(r)) : r = xt(n), r.start.add(i), r.end && r.end.add(i)) : r = {
                start: a.clone(),
                end: null,
                allDay: !a.hasTime()
            }, r
        },
        applyDragOpacity: function(t) {
            var e = this.view.opt("dragOpacity");
            null != e && t.css("opacity", e)
        },
        externalDragStart: function(e, n) {
            var i, r, s = this.view;
            s.opt("droppable") && (i = t((n ? n.item : null) || e.target), r = s.opt("dropAccept"), (t.isFunction(r) ? r.call(i[0], i) : i.is(r)) && (this.isDraggingExternal || this.listenToExternalDrag(i, e, n)))
        },
        listenToExternalDrag: function(t, e, n) {
            var i, r = this,
                a = this.view,
                l = Nt(t);
            (r.externalDragListener = new ye(this, {
                interactionStart: function() {
                    r.isDraggingExternal = !0
                },
                hitOver: function(t) {
                    var e = !0,
                        n = t.component.getSafeHitSpan(t);
                    n ? (i = r.computeExternalDrop(n, l), e = i && r.isExternalLocationAllowed(i, l.eventProps)) : e = !1, e || (i = null, s()), i && r.renderDrag(i)
                },
                hitOut: function() {
                    i = null
                },
                hitDone: function() {
                    o(), r.unrenderDrag()
                },
                interactionEnd: function(e) {
                    i && a.reportExternalDrop(l, i, t, e, n), r.isDraggingExternal = !1, r.externalDragListener = null
                }
            })).startDrag(e)
        },
        computeExternalDrop: function(t, e) {
            var n = this.view.calendar,
                i = {
                    start: n.applyTimezone(t.start),
                    end: null
                };
            return e.startTime && !i.start.hasTime() && i.start.time(e.startTime), e.duration && (i.end = i.start.clone().add(e.duration)), i
        },
        renderDrag: function(t, e) {},
        unrenderDrag: function() {},
        buildSegResizeListener: function(t, e) {
            var n, i, r = this,
                a = this.view,
                l = a.calendar,
                u = t.el,
                h = t.event,
                c = l.getEventEnd(h);
            return this.segResizeListener = new ye(this, {
                scroll: a.opt("dragScroll"),
                subjectEl: u,
                interactionStart: function() {
                    n = !1
                },
                dragStart: function(e) {
                    n = !0, r.handleSegMouseout(t, e), r.segResizeStart(t, e)
                },
                hitOver: function(n, o, l) {
                    var u = !0,
                        d = r.getSafeHitSpan(l),
                        f = r.getSafeHitSpan(n);
                    d && f ? (i = e ? r.computeEventStartResize(d, f, h) : r.computeEventEndResize(d, f, h), u = i && r.isEventLocationAllowed(i, h)) : u = !1, u ? i.start.isSame(h.start.clone().stripZone()) && i.end.isSame(c.clone().stripZone()) && (i = null) : (i = null, s()), i && (a.hideEvent(h), r.renderEventResize(i, t))
                },
                hitOut: function() {
                    i = null, a.showEvent(h)
                },
                hitDone: function() {
                    r.unrenderEventResize(), o()
                },
                interactionEnd: function(e) {
                    n && r.segResizeStop(t, e), i ? a.reportSegResize(t, i, r.largeUnit, u, e) : a.showEvent(h), r.segResizeListener = null
                }
            })
        },
        segResizeStart: function(t, e) {
            this.isResizingSeg = !0, this.view.publiclyTrigger("eventResizeStart", t.el[0], t.event, e, {})
        },
        segResizeStop: function(t, e) {
            this.isResizingSeg = !1, this.view.publiclyTrigger("eventResizeStop", t.el[0], t.event, e, {})
        },
        computeEventStartResize: function(t, e, n) {
            return this.computeEventResize("start", t, e, n)
        },
        computeEventEndResize: function(t, e, n) {
            return this.computeEventResize("end", t, e, n)
        },
        computeEventResize: function(t, e, n, i) {
            var r, s, o = this.view.calendar,
                a = this.diffDates(n[t], e[t]);
            return r = {
                start: i.start.clone(),
                end: o.getEventEnd(i),
                allDay: i.allDay
            }, r.allDay && tt(a) && (r.allDay = !1, o.normalizeEventTimes(r)), r[t].add(a), r.start.isBefore(r.end) || (s = this.minResizeDuration || (i.allDay ? o.defaultAllDayEventDuration : o.defaultTimedEventDuration), "start" == t ? r.start = r.end.clone().subtract(s) : r.end = r.start.clone().add(s)), r
        },
        renderEventResize: function(t, e) {},
        unrenderEventResize: function() {},
        getEventTimeText: function(t, e, n) {
            return null == e && (e = this.eventTimeFormat), null == n && (n = this.displayEventEnd), this.displayEventTime && t.start.hasTime() ? n && t.end ? this.view.formatRange(t, e) : t.start.format(e) : ""
        },
        getSegClasses: function(t, e, n) {
            var i = this.view,
                r = ["fc-event", t.isStart ? "fc-start" : "fc-not-start", t.isEnd ? "fc-end" : "fc-not-end"].concat(this.getSegCustomClasses(t));
            return e && r.push("fc-draggable"), n && r.push("fc-resizable"), i.isEventSelected(t.event) && r.push("fc-selected"), r
        },
        getSegCustomClasses: function(t) {
            var e = t.event;
            return [].concat(e.className, e.source ? e.source.className : [])
        },
        getSegSkinCss: function(t) {
            return {
                "background-color": this.getSegBackgroundColor(t),
                "border-color": this.getSegBorderColor(t),
                color: this.getSegTextColor(t)
            }
        },
        getSegBackgroundColor: function(t) {
            return t.event.backgroundColor || t.event.color || this.getSegDefaultBackgroundColor(t)
        },
        getSegDefaultBackgroundColor: function(t) {
            var e = t.event.source || {};
            return e.backgroundColor || e.color || this.view.opt("eventBackgroundColor") || this.view.opt("eventColor")
        },
        getSegBorderColor: function(t) {
            return t.event.borderColor || t.event.color || this.getSegDefaultBorderColor(t)
        },
        getSegDefaultBorderColor: function(t) {
            var e = t.event.source || {};
            return e.borderColor || e.color || this.view.opt("eventBorderColor") || this.view.opt("eventColor")
        },
        getSegTextColor: function(t) {
            return t.event.textColor || this.getSegDefaultTextColor(t)
        },
        getSegDefaultTextColor: function(t) {
            return (t.event.source || {}).textColor || this.view.opt("eventTextColor")
        },
        isEventLocationAllowed: function(t, e) {
            if (this.isEventLocationInRange(t)) {
                var n, i = this.view.calendar,
                    r = this.eventToSpans(t);
                if (r.length) {
                    for (n = 0; n < r.length; n++)
                        if (!i.isEventSpanAllowed(r[n], e)) return !1;
                    return !0
                }
            }
            return !1
        },
        isExternalLocationAllowed: function(t, e) {
            if (this.isEventLocationInRange(t)) {
                var n, i = this.view.calendar,
                    r = this.eventToSpans(t);
                if (r.length) {
                    for (n = 0; n < r.length; n++)
                        if (!i.isExternalSpanAllowed(r[n], t, e)) return !1;
                    return !0
                }
            }
            return !1
        },
        isEventLocationInRange: function(t) {
            return Q(this.eventToRawRange(t), this.view.validRange)
        },
        eventToSegs: function(t) {
            return this.eventsToSegs([t])
        },
        eventToSpans: function(t) {
            var e = this.eventToRange(t);
            return e ? this.eventRangeToSpans(e, t) : []
        },
        eventsToSegs: function(e, n) {
            var i = this,
                r = Bt(e),
                s = [];
            return t.each(r, function(t, e) {
                var r, o, a = [],
                    l = [];
                for (o = 0; o < e.length; o++)(r = i.eventToRange(e[o])) && (l.push(r), a.push(e[o]));
                if (kt(e[0]))
                    for (l = i.invertRanges(l), o = 0; o < l.length; o++) s.push.apply(s, i.eventRangeToSegs(l[o], e[0], n));
                else
                    for (o = 0; o < l.length; o++) s.push.apply(s, i.eventRangeToSegs(l[o], a[o], n))
            }), s
        },
        eventToRange: function(t) {
            return this.refineRawEventRange(this.eventToRawRange(t))
        },
        refineRawEventRange: function(t) {
            var e = this.view,
                n = e.calendar,
                i = z(t, e.activeRange);
            if (i) return n.localizeMoment(i.start), n.localizeMoment(i.end), i
        },
        eventToRawRange: function(t) {
            var e = this.view.calendar;
            return {
                start: t.start.clone().stripZone(),
                end: (t.end ? t.end.clone() : e.getDefaultEventEnd(null != t.allDay ? t.allDay : !t.start.hasTime(), t.start)).stripZone()
            }
        },
        eventRangeToSegs: function(t, e, n) {
            var i, r = this.eventRangeToSpans(t, e),
                s = [];
            for (i = 0; i < r.length; i++) s.push.apply(s, this.eventSpanToSegs(r[i], e, n));
            return s
        },
        eventRangeToSpans: function(e, n) {
            return [t.extend({}, e)]
        },
        eventSpanToSegs: function(t, e, n) {
            var i, r, s = n ? n(t) : this.spanToSegs(t);
            for (i = 0; i < s.length; i++) r = s[i], t.isStart || (r.isStart = !1), t.isEnd || (r.isEnd = !1), r.event = e, r.eventStartMS = +t.start, r.eventDurationMS = t.end - t.start;
            return s
        },
        invertRanges: function(t) {
            var e, n, i = this.view,
                r = i.activeRange.start.clone(),
                s = i.activeRange.end.clone(),
                o = [],
                a = r;
            for (t.sort(Lt), e = 0; e < t.length; e++) n = t[e], n.start > a && o.push({
                start: a,
                end: n.start
            }), n.end > a && (a = n.end);
            return a < s && o.push({
                start: a,
                end: s
            }), o
        },
        sortEventSegs: function(t) {
            t.sort(mt(this, "compareEventSegs"))
        },
        compareEventSegs: function(t, e) {
            return t.eventStartMS - e.eventStartMS || e.eventDurationMS - t.eventDurationMS || e.event.allDay - t.event.allDay || B(t.event, e.event, this.view.eventOrderSpecs)
        }
    }), Zt.pluckEventDateProps = xt, Zt.isBgEvent = It, Zt.dataAttrPrefix = "";
    var Ee = Zt.DayTableMixin = {
            breakOnWeeks: !1,
            dayDates: null,
            dayIndices: null,
            daysPerRow: null,
            rowCnt: null,
            colCnt: null,
            colHeadFormat: null,
            updateDayTable: function() {
                for (var t, e, n, i = this.view, r = this.start.clone(), s = -1, o = [], a = []; r.isBefore(this.end);) i.isHiddenDay(r) ? o.push(s + .5) : (s++, o.push(s), a.push(r.clone())), r.add(1, "days");
                if (this.breakOnWeeks) {
                    for (e = a[0].day(), t = 1; t < a.length && a[t].day() != e; t++);
                    n = Math.ceil(a.length / t)
                } else n = 1, t = a.length;
                this.dayDates = a, this.dayIndices = o, this.daysPerRow = t, this.rowCnt = n, this.updateDayTableCols()
            },
            updateDayTableCols: function() {
                this.colCnt = this.computeColCnt(), this.colHeadFormat = this.view.opt("columnFormat") || this.computeColHeadFormat()
            },
            computeColCnt: function() {
                return this.daysPerRow
            },
            getCellDate: function(t, e) {
                return this.dayDates[this.getCellDayIndex(t, e)].clone()
            },
            getCellRange: function(t, e) {
                var n = this.getCellDate(t, e);
                return {
                    start: n,
                    end: n.clone().add(1, "days")
                }
            },
            getCellDayIndex: function(t, e) {
                return t * this.daysPerRow + this.getColDayIndex(e)
            },
            getColDayIndex: function(t) {
                return this.isRTL ? this.colCnt - 1 - t : t
            },
            getDateDayIndex: function(t) {
                var e = this.dayIndices,
                    n = t.diff(this.start, "days");
                return n < 0 ? e[0] - 1 : n >= e.length ? e[e.length - 1] + 1 : e[n]
            },
            computeColHeadFormat: function() {
                return this.rowCnt > 1 || this.colCnt > 10 ? "ddd" : this.colCnt > 1 ? this.view.opt("dayOfMonthFormat") : "dddd"
            },
            sliceRangeByRow: function(t) {
                var e, n, i, r, s, o = this.daysPerRow,
                    a = this.view.computeDayRange(t),
                    l = this.getDateDayIndex(a.start),
                    u = this.getDateDayIndex(a.end.clone().subtract(1, "days")),
                    h = [];
                for (e = 0; e < this.rowCnt; e++) n = e * o, i = n + o - 1, r = Math.max(l, n), s = Math.min(u, i), r = Math.ceil(r), s = Math.floor(s), r <= s && h.push({
                    row: e,
                    firstRowDayIndex: r - n,
                    lastRowDayIndex: s - n,
                    isStart: r === l,
                    isEnd: s === u
                });
                return h
            },
            sliceRangeByDay: function(t) {
                var e, n, i, r, s, o, a = this.daysPerRow,
                    l = this.view.computeDayRange(t),
                    u = this.getDateDayIndex(l.start),
                    h = this.getDateDayIndex(l.end.clone().subtract(1, "days")),
                    c = [];
                for (e = 0; e < this.rowCnt; e++)
                    for (n = e * a, i = n + a - 1, r = n; r <= i; r++) s = Math.max(u, r), o = Math.min(h, r), s = Math.ceil(s), o = Math.floor(o), s <= o && c.push({
                        row: e,
                        firstRowDayIndex: s - n,
                        lastRowDayIndex: o - n,
                        isStart: s === u,
                        isEnd: o === h
                    });
                return c
            },
            renderHeadHtml: function() {
                return '<div class="fc-row ' + this.view.widgetHeaderClass + '"><table><thead>' + this.renderHeadTrHtml() + "</thead></table></div>"
            },
            renderHeadIntroHtml: function() {
                return this.renderIntroHtml()
            },
            renderHeadTrHtml: function() {
                return "<tr>" + (this.isRTL ? "" : this.renderHeadIntroHtml()) + this.renderHeadDateCellsHtml() + (this.isRTL ? this.renderHeadIntroHtml() : "") + "</tr>"
            },
            renderHeadDateCellsHtml: function() {
                var t, e, n = [];
                for (t = 0; t < this.colCnt; t++) e = this.getCellDate(0, t), n.push(this.renderHeadDateCellHtml(e));
                return n.join("")
            },
            renderHeadDateCellHtml: function(t, e, n) {
                var i = this.view,
                    r = Z(t, i.activeRange),
                    s = ["fc-day-header", i.widgetHeaderClass],
                    o = ht(t.format(this.colHeadFormat));
                return 1 === this.rowCnt ? s = s.concat(this.getDayClasses(t, !0)) : s.push("fc-" + Kt[t.day()]), '<th class="' + s.join(" ") + '"' + (1 === (r && this.rowCnt) ? ' data-date="' + t.format("YYYY-MM-DD") + '"' : "") + (e > 1 ? ' colspan="' + e + '"' : "") + (n ? " " + n : "") + ">" + (r ? i.buildGotoAnchorHtml({
                    date: t,
                    forceOff: this.rowCnt > 1 || 1 === this.colCnt
                }, o) : o) + "</th>"
            },
            renderBgTrHtml: function(t) {
                return "<tr>" + (this.isRTL ? "" : this.renderBgIntroHtml(t)) + this.renderBgCellsHtml(t) + (this.isRTL ? this.renderBgIntroHtml(t) : "") + "</tr>"
            },
            renderBgIntroHtml: function(t) {
                return this.renderIntroHtml()
            },
            renderBgCellsHtml: function(t) {
                var e, n, i = [];
                for (e = 0; e < this.colCnt; e++) n = this.getCellDate(t, e), i.push(this.renderBgCellHtml(n));
                return i.join("")
            },
            renderBgCellHtml: function(t, e) {
                var n = this.view,
                    i = Z(t, n.activeRange),
                    r = this.getDayClasses(t);
                return r.unshift("fc-day", n.widgetContentClass), '<td class="' + r.join(" ") + '"' + (i ? ' data-date="' + t.format("YYYY-MM-DD") + '"' : "") + (e ? " " + e : "") + "></td>"
            },
            renderIntroHtml: function() {},
            bookendCells: function(t) {
                var e = this.renderIntroHtml();
                e && (this.isRTL ? t.append(e) : t.prepend(e))
            }
        },
        De = Zt.DayGrid = be.extend(Ee, {
            numbersVisible: !1,
            bottomCoordPadding: 0,
            rowEls: null,
            cellEls: null,
            helperEls: null,
            rowCoordCache: null,
            colCoordCache: null,
            renderDates: function(t) {
                var e, n, i = this.view,
                    r = this.rowCnt,
                    s = this.colCnt,
                    o = "";
                for (e = 0; e < r; e++) o += this.renderDayRowHtml(e, t);
                for (this.el.html(o), this.rowEls = this.el.find(".fc-row"), this.cellEls = this.el.find(".fc-day, .fc-disabled-day"), this.rowCoordCache = new ve({
                        els: this.rowEls,
                        isVertical: !0
                    }), this.colCoordCache = new ve({
                        els: this.cellEls.slice(0, this.colCnt),
                        isHorizontal: !0
                    }), e = 0; e < r; e++)
                    for (n = 0; n < s; n++) i.publiclyTrigger("dayRender", null, this.getCellDate(e, n), this.getCellEl(e, n))
            },
            unrenderDates: function() {
                this.removeSegPopover()
            },
            renderBusinessHours: function() {
                var t = this.buildBusinessHourSegs(!0);
                this.renderFill("businessHours", t, "bgevent")
            },
            unrenderBusinessHours: function() {
                this.unrenderFill("businessHours")
            },
            renderDayRowHtml: function(t, e) {
                var n = this.view,
                    i = ["fc-row", "fc-week", n.widgetContentClass];
                return e && i.push("fc-rigid"), '<div class="' + i.join(" ") + '"><div class="fc-bg"><table>' + this.renderBgTrHtml(t) + '</table></div><div class="fc-content-skeleton"><table>' + (this.numbersVisible ? "<thead>" + this.renderNumberTrHtml(t) + "</thead>" : "") + "</table></div></div>"
            },
            renderNumberTrHtml: function(t) {
                return "<tr>" + (this.isRTL ? "" : this.renderNumberIntroHtml(t)) + this.renderNumberCellsHtml(t) + (this.isRTL ? this.renderNumberIntroHtml(t) : "") + "</tr>"
            },
            renderNumberIntroHtml: function(t) {
                return this.renderIntroHtml()
            },
            renderNumberCellsHtml: function(t) {
                var e, n, i = [];
                for (e = 0; e < this.colCnt; e++) n = this.getCellDate(t, e), i.push(this.renderNumberCellHtml(n));
                return i.join("")
            },
            renderNumberCellHtml: function(t) {
                var e, n, i = this.view,
                    r = "",
                    s = Z(t, i.activeRange),
                    o = i.dayNumbersVisible && s;
                return o || i.cellWeekNumbersVisible ? (e = this.getDayClasses(t), e.unshift("fc-day-top"), i.cellWeekNumbersVisible && (n = "ISO" === t._locale._fullCalendar_weekCalc ? 1 : t._locale.firstDayOfWeek()), r += '<td class="' + e.join(" ") + '"' + (s ? ' data-date="' + t.format() + '"' : "") + ">", i.cellWeekNumbersVisible && t.day() == n && (r += i.buildGotoAnchorHtml({
                    date: t,
                    type: "week"
                }, {
                    class: "fc-week-number"
                }, t.format("w"))), o && (r += i.buildGotoAnchorHtml(t, {
                    class: "fc-day-number"
                }, t.date())), r += "</td>") : "<td/>"
            },
            computeEventTimeFormat: function() {
                return this.view.opt("extraSmallTimeFormat")
            },
            computeDisplayEventEnd: function() {
                return 1 == this.colCnt
            },
            rangeUpdated: function() {
                this.updateDayTable()
            },
            spanToSegs: function(t) {
                var e, n, i = this.sliceRangeByRow(t);
                for (e = 0; e < i.length; e++) n = i[e], this.isRTL ? (n.leftCol = this.daysPerRow - 1 - n.lastRowDayIndex, n.rightCol = this.daysPerRow - 1 - n.firstRowDayIndex) : (n.leftCol = n.firstRowDayIndex, n.rightCol = n.lastRowDayIndex);
                return i
            },
            prepareHits: function() {
                this.colCoordCache.build(), this.rowCoordCache.build(), this.rowCoordCache.bottoms[this.rowCnt - 1] += this.bottomCoordPadding
            },
            releaseHits: function() {
                this.colCoordCache.clear(), this.rowCoordCache.clear()
            },
            queryHit: function(t, e) {
                if (this.colCoordCache.isLeftInBounds(t) && this.rowCoordCache.isTopInBounds(e)) {
                    var n = this.colCoordCache.getHorizontalIndex(t),
                        i = this.rowCoordCache.getVerticalIndex(e);
                    if (null != i && null != n) return this.getCellHit(i, n)
                }
            },
            getHitSpan: function(t) {
                return this.getCellRange(t.row, t.col)
            },
            getHitEl: function(t) {
                return this.getCellEl(t.row, t.col)
            },
            getCellHit: function(t, e) {
                return {
                    row: t,
                    col: e,
                    component: this,
                    left: this.colCoordCache.getLeftOffset(e),
                    right: this.colCoordCache.getRightOffset(e),
                    top: this.rowCoordCache.getTopOffset(t),
                    bottom: this.rowCoordCache.getBottomOffset(t)
                }
            },
            getCellEl: function(t, e) {
                return this.cellEls.eq(t * this.colCnt + e)
            },
            renderDrag: function(t, e) {
                var n, i = this.eventToSpans(t);
                for (n = 0; n < i.length; n++) this.renderHighlight(i[n]);
                if (e && e.component !== this) return this.renderEventLocationHelper(t, e)
            },
            unrenderDrag: function() {
                this.unrenderHighlight(), this.unrenderHelper()
            },
            renderEventResize: function(t, e) {
                var n, i = this.eventToSpans(t);
                for (n = 0; n < i.length; n++) this.renderHighlight(i[n]);
                return this.renderEventLocationHelper(t, e)
            },
            unrenderEventResize: function() {
                this.unrenderHighlight(), this.unrenderHelper()
            },
            renderHelper: function(e, n) {
                var i, r = [],
                    s = this.eventToSegs(e);
                return s = this.renderFgSegEls(s), i = this.renderSegRows(s), this.rowEls.each(function(e, s) {
                    var o, a = t(s),
                        l = t('<div class="fc-helper-skeleton"><table/></div>');
                    o = n && n.row === e ? n.el.position().top : a.find(".fc-content-skeleton tbody").position().top, l.css("top", o).find("table").append(i[e].tbodyEl), a.append(l), r.push(l[0])
                }), this.helperEls = t(r)
            },
            unrenderHelper: function() {
                this.helperEls && (this.helperEls.remove(), this.helperEls = null)
            },
            fillSegTag: "td",
            renderFill: function(e, n, i) {
                var r, s, o, a = [];
                for (n = this.renderFillSegEls(e, n), r = 0; r < n.length; r++) s = n[r], o = this.renderFillRow(e, s, i), this.rowEls.eq(s.row).append(o), a.push(o[0]);
                return this.elsByFill[e] = t(a), n
            },
            renderFillRow: function(e, n, i) {
                var r, s, o = this.colCnt,
                    a = n.leftCol,
                    l = n.rightCol + 1;
                return i = i || e.toLowerCase(), r = t('<div class="fc-' + i + '-skeleton"><table><tr/></table></div>'), s = r.find("tr"), a > 0 && s.append('<td colspan="' + a + '"/>'), s.append(n.el.attr("colspan", l - a)), l < o && s.append('<td colspan="' + (o - l) + '"/>'), this.bookendCells(s), r
            }
        });
    De.mixin({
        rowStructs: null,
        unrenderEvents: function() {
            this.removeSegPopover(), be.prototype.unrenderEvents.apply(this, arguments)
        },
        getEventSegs: function() {
            return be.prototype.getEventSegs.call(this).concat(this.popoverSegs || [])
        },
        renderBgSegs: function(e) {
            var n = t.grep(e, function(t) {
                return t.event.allDay
            });
            return be.prototype.renderBgSegs.call(this, n)
        },
        renderFgSegs: function(e) {
            var n;
            return e = this.renderFgSegEls(e), n = this.rowStructs = this.renderSegRows(e), this.rowEls.each(function(e, i) {
                t(i).find(".fc-content-skeleton > table").append(n[e].tbodyEl)
            }), e
        },
        unrenderFgSegs: function() {
            for (var t, e = this.rowStructs || []; t = e.pop();) t.tbodyEl.remove();
            this.rowStructs = null
        },
        renderSegRows: function(t) {
            var e, n, i = [];
            for (e = this.groupSegRows(t), n = 0; n < e.length; n++) i.push(this.renderSegRow(n, e[n]));
            return i
        },
        fgSegHtml: function(t, e) {
            var n, i, r = this.view,
                s = t.event,
                o = r.isEventDraggable(s),
                a = !e && s.allDay && t.isStart && r.isEventResizableFromStart(s),
                l = !e && s.allDay && t.isEnd && r.isEventResizableFromEnd(s),
                u = this.getSegClasses(t, o, a || l),
                h = dt(this.getSegSkinCss(t)),
                c = "";
                repeats_class=s.repeats_class;
            return u.unshift("fc-day-grid-event", "fc-h-event"), t.isStart && (n = this.getEventTimeText(s)) && (c = '<span class="fc-time">' + ht(n) + "</span>"), i = '<span class="fc-title">' + (ht(s.title || "") || "&nbsp;") + "</span>", '<a id="eve'+s.id+'" onmouseover="showeventdetails('+s.id+')" class="'+repeats_class+' ' + u.join(" ") + '"' + (s.url ? ' href="' + ht(s.url) + '"' : "") + (h ? ' style="' + h + '"' : "") + '><div class="fc-content">' + (this.isRTL ? i + " " + c : c + " " + i) + "</div>" + (a ? '<div class="fc-resizer fc-start-resizer" />' : "") + (l ? '<div class="fc-resizer fc-end-resizer" />' : "") + "</a>"
        },
        renderSegRow: function(e, n) {
            function i(e) {
                for (; o < e;) h = (m[r - 1] || [])[o], h ? h.attr("rowspan", parseInt(h.attr("rowspan") || 1, 10) + 1) : (h = t("<td/>"), a.append(h)), v[r][o] = h, m[r][o] = h, o++
            }
            var r, s, o, a, l, u, h, c = this.colCnt,
                d = this.buildSegLevels(n),
                f = Math.max(1, d.length),
                g = t("<tbody/>"),
                p = [],
                v = [],
                m = [];
            for (r = 0; r < f; r++) {
                if (s = d[r], o = 0, a = t("<tr/>"), p.push([]), v.push([]), m.push([]), s)
                    for (l = 0; l < s.length; l++) {
                        for (u = s[l], i(u.leftCol), h = t('<td class="fc-event-container"/>').append(u.el), u.leftCol != u.rightCol ? h.attr("colspan", u.rightCol - u.leftCol + 1) : m[r][o] = h; o <= u.rightCol;) v[r][o] = h, p[r][o] = u, o++;
                        a.append(h)
                    }
                i(c), this.bookendCells(a), g.append(a)
            }
            return {
                row: e,
                tbodyEl: g,
                cellMatrix: v,
                segMatrix: p,
                segLevels: d,
                segs: n
            }
        },
        buildSegLevels: function(t) {
            var e, n, i, r = [];
            for (this.sortEventSegs(t), e = 0; e < t.length; e++) {
                for (n = t[e], i = 0; i < r.length && zt(n, r[i]); i++);
                n.level = i, (r[i] || (r[i] = [])).push(n)
            }
            for (i = 0; i < r.length; i++) r[i].sort(Ft);
            return r
        },
        groupSegRows: function(t) {
            var e, n = [];
            for (e = 0; e < this.rowCnt; e++) n.push([]);
            for (e = 0; e < t.length; e++) n[t[e].row].push(t[e]);
            return n
        }
    }), De.mixin({
        segPopover: null,
        popoverSegs: null,
        removeSegPopover: function() {
            this.segPopover && this.segPopover.hide()
        },
        limitRows: function(t) {
            var e, n, i = this.rowStructs || [];
            for (e = 0; e < i.length; e++) this.unlimitRow(e), !1 !== (n = !!t && ("number" == typeof t ? t : this.computeRowLevelLimit(e))) && this.limitRow(e, n)
        },
        computeRowLevelLimit: function(e) {
            function n(e, n) {
                s = Math.max(s, t(n).outerHeight())
            }
            var i, r, s, o = this.rowEls.eq(e),
                a = o.height(),
                l = this.rowStructs[e].tbodyEl.children();
            for (i = 0; i < l.length; i++)
                if (r = l.eq(i).removeClass("fc-limited"), s = 0, r.find("> td > :first-child").each(n), r.position().top + s > a) return i;
            return !1
        },
        limitRow: function(e, n) {
            function i(i) {
                for (; E < i;) u = w.getCellSegs(e, E, n), u.length && (d = s[n - 1][E], y = w.renderMoreLink(e, E, u), m = t("<div/>").append(y), d.append(m), b.push(m[0])), E++
            }
            var r, s, o, a, l, u, h, c, d, f, g, p, v, m, y, w = this,
                S = this.rowStructs[e],
                b = [],
                E = 0;
            if (n && n < S.segLevels.length) {
                for (r = S.segLevels[n - 1], s = S.cellMatrix, o = S.tbodyEl.children().slice(n).addClass("fc-limited").get(), a = 0; a < r.length; a++) {
                    for (l = r[a], i(l.leftCol), c = [], h = 0; E <= l.rightCol;) u = this.getCellSegs(e, E, n), c.push(u), h += u.length, E++;
                    if (h) {
                        for (d = s[n - 1][l.leftCol], f = d.attr("rowspan") || 1, g = [], p = 0; p < c.length; p++) v = t('<td class="fc-more-cell"/>').attr("rowspan", f), u = c[p], y = this.renderMoreLink(e, l.leftCol + p, [l].concat(u)), m = t("<div/>").append(y), v.append(m), g.push(v[0]), b.push(v[0]);
                        d.addClass("fc-limited").after(t(g)), o.push(d[0])
                    }
                }
                i(this.colCnt), S.moreEls = t(b), S.limitedEls = t(o)
            }
        },
        unlimitRow: function(t) {
            var e = this.rowStructs[t];
            e.moreEls && (e.moreEls.remove(), e.moreEls = null), e.limitedEls && (e.limitedEls.removeClass("fc-limited"), e.limitedEls = null)
        },
        renderMoreLink: function(e, n, i) {
            var r = this,
                s = this.view;
            return t('<a class="fc-more"/>').text(this.getMoreLinkText(i.length)).on("click", function(o) {
                var a = s.opt("eventLimitClick"),
                    l = r.getCellDate(e, n),
                    u = t(this),
                    h = r.getCellEl(e, n),
                    c = r.getCellSegs(e, n),
                    d = r.resliceDaySegs(c, l),
                    f = r.resliceDaySegs(i, l);
                "function" == typeof a && (a = s.publiclyTrigger("eventLimitClick", null, {
                    date: l,
                    dayEl: h,
                    moreEl: u,
                    segs: d,
                    hiddenSegs: f
                }, o)), "popover" === a ? r.showSegPopover(e, n, u, d) : "string" == typeof a && s.calendar.zoomTo(l, a)
            })
        },
        showSegPopover: function(t, e, n, i) {
            var r, s, o = this,
                a = this.view,
                l = n.parent();
            r = 1 == this.rowCnt ? a.el : this.rowEls.eq(t), s = {
                className: "fc-more-popover",
                content: this.renderSegPopoverContent(t, e, i),
                parentEl: this.view.el,
                top: r.offset().top,
                autoHide: !0,
                viewportConstrain: a.opt("popoverViewportConstrain"),
                hide: function() {
                    if (o.popoverSegs)
                        for (var t, e = 0; e < o.popoverSegs.length; ++e) t = o.popoverSegs[e], a.publiclyTrigger("eventDestroy", t.event, t.event, t.el);
                    o.segPopover.removeElement(), o.segPopover = null, o.popoverSegs = null
                }
            }, this.isRTL ? s.right = l.offset().left + l.outerWidth() + 1 : s.left = l.offset().left - 1, this.segPopover = new pe(s), this.segPopover.show(), this.bindSegHandlersToEl(this.segPopover.el)
        },
        renderSegPopoverContent: function(e, n, i) {
            var r, s = this.view,
                o = s.opt("theme"),
                a = this.getCellDate(e, n).format(s.opt("dayPopoverFormat")),
                l = t('<div class="fc-header ' + s.widgetHeaderClass + '"><span class="fc-close ' + (o ? "ui-icon ui-icon-closethick" : "fc-icon fc-icon-x") + '"></span><span class="fc-title">' + ht(a) + '</span><div class="fc-clear"/></div><div class="fc-body ' + s.widgetContentClass + '"><div class="fc-event-container"></div></div>'),
                u = l.find(".fc-event-container");
            for (i = this.renderFgSegEls(i, !0), this.popoverSegs = i, r = 0; r < i.length; r++) this.hitsNeeded(), i[r].hit = this.getCellHit(e, n), this.hitsNotNeeded(), u.append(i[r].el);
            return l
        },
        resliceDaySegs: function(e, n) {
            var i = t.map(e, function(t) {
                    return t.event
                }),
                r = n.clone(),
                s = r.clone().add(1, "days"),
                o = {
                    start: r,
                    end: s
                };
            return e = this.eventsToSegs(i, function(t) {
                var e = z(t, o);
                return e ? [e] : []
            }), this.sortEventSegs(e), e
        },
        getMoreLinkText: function(t) {
            var e = this.view.opt("eventLimitText");
            return "function" == typeof e ? e(t) : "+" + t + " " + e
        },
        getCellSegs: function(t, e, n) {
            for (var i, r = this.rowStructs[t].segMatrix, s = n || 0, o = []; s < r.length;) i = r[s][e], i && o.push(i), s++;
            return o
        }
    });
    var Te = Zt.TimeGrid = be.extend(Ee, {
        slotDuration: null,
        snapDuration: null,
        snapsPerSlot: null,
        labelFormat: null,
        labelInterval: null,
        colEls: null,
        slatContainerEl: null,
        slatEls: null,
        nowIndicatorEls: null,
        colCoordCache: null,
        slatCoordCache: null,
        constructor: function() {
            be.apply(this, arguments), this.processOptions()
        },
        renderDates: function() {
            this.el.html(this.renderHtml()), this.colEls = this.el.find(".fc-day, .fc-disabled-day"), this.slatContainerEl = this.el.find(".fc-slats"), this.slatEls = this.slatContainerEl.find("tr"), this.colCoordCache = new ve({
                els: this.colEls,
                isHorizontal: !0
            }), this.slatCoordCache = new ve({
                els: this.slatEls,
                isVertical: !0
            }), this.renderContentSkeleton()
        },
        renderHtml: function() {
            return '<div class="fc-bg"><table>' + this.renderBgTrHtml(0) + '</table></div><div class="fc-slats"><table>' + this.renderSlatRowHtml() + "</table></div>"
        },
        renderSlatRowHtml: function() {
            for (var t, n, i, r = this.view, s = this.isRTL, o = "", a = e.duration(+this.view.minTime); a < this.view.maxTime;) t = this.start.clone().time(a), n = vt(W(a, this.labelInterval)), i = '<td class="fc-axis fc-time ' + r.widgetContentClass + '" ' + r.axisStyleAttr() + ">" + (n ? "<span>" + ht(t.format(this.labelFormat)) + "</span>" : "") + "</td>", o += '<tr data-time="' + t.format("HH:mm:ss") + '"' + (n ? "" : ' class="fc-minor"') + ">" + (s ? "" : i) + '<td class="' + r.widgetContentClass + '"/>' + (s ? i : "") + "</tr>", a.add(this.slotDuration);
            return o
        },
        processOptions: function() {
            var n, i = this.view,
                r = i.opt("slotDuration"),
                s = i.opt("snapDuration");
            r = e.duration(r), s = s ? e.duration(s) : r, this.slotDuration = r, this.snapDuration = s, this.snapsPerSlot = r / s, this.minResizeDuration = s, n = i.opt("slotLabelFormat"), t.isArray(n) && (n = n[n.length - 1]), this.labelFormat = n || i.opt("smallTimeFormat"), n = i.opt("slotLabelInterval"), this.labelInterval = n ? e.duration(n) : this.computeLabelInterval(r)
        },
        computeLabelInterval: function(t) {
            var n, i, r;
            for (n = _e.length - 1; n >= 0; n--)
                if (i = e.duration(_e[n]), r = W(i, t), vt(r) && r > 1) return i;
            return e.duration(t)
        },
        computeEventTimeFormat: function() {
            return this.view.opt("noMeridiemTimeFormat")
        },
        computeDisplayEventEnd: function() {
            return !0
        },
        prepareHits: function() {
            this.colCoordCache.build(), this.slatCoordCache.build()
        },
        releaseHits: function() {
            this.colCoordCache.clear()
        },
        queryHit: function(t, e) {
            var n = this.snapsPerSlot,
                i = this.colCoordCache,
                r = this.slatCoordCache;
            if (i.isLeftInBounds(t) && r.isTopInBounds(e)) {
                var s = i.getHorizontalIndex(t),
                    o = r.getVerticalIndex(e);
                if (null != s && null != o) {
                    var a = r.getTopOffset(o),
                        l = r.getHeight(o),
                        u = (e - a) / l,
                        h = Math.floor(u * n),
                        c = o * n + h,
                        d = a + h / n * l,
                        f = a + (h + 1) / n * l;
                    return {
                        col: s,
                        snap: c,
                        component: this,
                        left: i.getLeftOffset(s),
                        right: i.getRightOffset(s),
                        top: d,
                        bottom: f
                    }
                }
            }
        },
        getHitSpan: function(t) {
            var e, n = this.getCellDate(0, t.col),
                i = this.computeSnapTime(t.snap);
            return n.time(i), e = n.clone().add(this.snapDuration), {
                start: n,
                end: e
            }
        },
        getHitEl: function(t) {
            return this.colEls.eq(t.col)
        },
        rangeUpdated: function() {
            this.updateDayTable()
        },
        computeSnapTime: function(t) {
            return e.duration(this.view.minTime + this.snapDuration * t)
        },
        spanToSegs: function(t) {
            var e, n = this.sliceRangeByTimes(t);
            for (e = 0; e < n.length; e++) this.isRTL ? n[e].col = this.daysPerRow - 1 - n[e].dayIndex : n[e].col = n[e].dayIndex;
            return n
        },
        sliceRangeByTimes: function(t) {
            var e, n, i, r, s = [];
            for (n = 0; n < this.daysPerRow; n++) i = this.dayDates[n].clone().time(0), r = {
                start: i.clone().add(this.view.minTime),
                end: i.clone().add(this.view.maxTime)
            }, (e = z(t, r)) && (e.dayIndex = n, s.push(e));
            return s
        },
        updateSize: function(t) {
            this.slatCoordCache.build(), t && this.updateSegVerticals([].concat(this.fgSegs || [], this.bgSegs || [], this.businessSegs || []))
        },
        getTotalSlatHeight: function() {
            return this.slatContainerEl.outerHeight()
        },
        computeDateTop: function(t, n) {
            return this.computeTimeTop(e.duration(t - n.clone().stripTime()))
        },
        computeTimeTop: function(t) {
            var e, n, i = this.slatEls.length,
                r = (t - this.view.minTime) / this.slotDuration;
            return r = Math.max(0, r), r = Math.min(i, r), e = Math.floor(r), e = Math.min(e, i - 1), n = r - e, this.slatCoordCache.getTopPosition(e) + this.slatCoordCache.getHeight(e) * n
        },
        renderDrag: function(t, e) {
            var n, i;
            if (e) return this.renderEventLocationHelper(t, e);
            for (n = this.eventToSpans(t), i = 0; i < n.length; i++) this.renderHighlight(n[i])
        },
        unrenderDrag: function() {
            this.unrenderHelper(), this.unrenderHighlight()
        },
        renderEventResize: function(t, e) {
            return this.renderEventLocationHelper(t, e)
        },
        unrenderEventResize: function() {
            this.unrenderHelper()
        },
        renderHelper: function(t, e) {
            return this.renderHelperSegs(this.eventToSegs(t), e)
        },
        unrenderHelper: function() {
            this.unrenderHelperSegs()
        },
        renderBusinessHours: function() {
            this.renderBusinessSegs(this.buildBusinessHourSegs())
        },
        unrenderBusinessHours: function() {
            this.unrenderBusinessSegs()
        },
        getNowIndicatorUnit: function() {
            return "minute"
        },
        renderNowIndicator: function(e) {
            var n, i = this.spanToSegs({
                    start: e,
                    end: e
                }),
                r = this.computeDateTop(e, e),
                s = [];
            for (n = 0; n < i.length; n++) s.push(t('<div class="fc-now-indicator fc-now-indicator-line"></div>').css("top", r).appendTo(this.colContainerEls.eq(i[n].col))[0]);
            i.length > 0 && s.push(t('<div class="fc-now-indicator fc-now-indicator-arrow"></div>').css("top", r).appendTo(this.el.find(".fc-content-skeleton"))[0]), this.nowIndicatorEls = t(s)
        },
        unrenderNowIndicator: function() {
            this.nowIndicatorEls && (this.nowIndicatorEls.remove(), this.nowIndicatorEls = null)
        },
        renderSelection: function(t) {
            this.view.opt("selectHelper") ? this.renderEventLocationHelper(t) : this.renderHighlight(t)
        },
        unrenderSelection: function() {
            this.unrenderHelper(), this.unrenderHighlight()
        },
        renderHighlight: function(t) {
            this.renderHighlightSegs(this.spanToSegs(t))
        },
        unrenderHighlight: function() {
            this.unrenderHighlightSegs()
        }
    });
    Te.mixin({
        colContainerEls: null,
        fgContainerEls: null,
        bgContainerEls: null,
        helperContainerEls: null,
        highlightContainerEls: null,
        businessContainerEls: null,
        fgSegs: null,
        bgSegs: null,
        helperSegs: null,
        highlightSegs: null,
        businessSegs: null,
        renderContentSkeleton: function() {
            var e, n, i = "";
            for (e = 0; e < this.colCnt; e++) i += '<td><div class="fc-content-col"><div class="fc-event-container fc-helper-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>';
            n = t('<div class="fc-content-skeleton"><table><tr>' + i + "</tr></table></div>"), this.colContainerEls = n.find(".fc-content-col"), this.helperContainerEls = n.find(".fc-helper-container"), this.fgContainerEls = n.find(".fc-event-container:not(.fc-helper-container)"), this.bgContainerEls = n.find(".fc-bgevent-container"), this.highlightContainerEls = n.find(".fc-highlight-container"), this.businessContainerEls = n.find(".fc-business-container"), this.bookendCells(n.find("tr")), this.el.append(n)
        },
        renderFgSegs: function(t) {
            return t = this.renderFgSegsIntoContainers(t, this.fgContainerEls), this.fgSegs = t, t
        },
        unrenderFgSegs: function() {
            this.unrenderNamedSegs("fgSegs")
        },
        renderHelperSegs: function(e, n) {
            var i, r, s, o = [];
            for (e = this.renderFgSegsIntoContainers(e, this.helperContainerEls), i = 0; i < e.length; i++) r = e[i], n && n.col === r.col && (s = n.el, r.el.css({
                left: s.css("left"),
                right: s.css("right"),
                "margin-left": s.css("margin-left"),
                "margin-right": s.css("margin-right")
            })), o.push(r.el[0]);
            return this.helperSegs = e, t(o)
        },
        unrenderHelperSegs: function() {
            this.unrenderNamedSegs("helperSegs")
        },
        renderBgSegs: function(t) {
            return t = this.renderFillSegEls("bgEvent", t), this.updateSegVerticals(t), this.attachSegsByCol(this.groupSegsByCol(t), this.bgContainerEls), this.bgSegs = t, t
        },
        unrenderBgSegs: function() {
            this.unrenderNamedSegs("bgSegs")
        },
        renderHighlightSegs: function(t) {
            t = this.renderFillSegEls("highlight", t), this.updateSegVerticals(t), this.attachSegsByCol(this.groupSegsByCol(t), this.highlightContainerEls), this.highlightSegs = t
        },
        unrenderHighlightSegs: function() {
            this.unrenderNamedSegs("highlightSegs")
        },
        renderBusinessSegs: function(t) {
            t = this.renderFillSegEls("businessHours", t), this.updateSegVerticals(t), this.attachSegsByCol(this.groupSegsByCol(t), this.businessContainerEls), this.businessSegs = t
        },
        unrenderBusinessSegs: function() {
            this.unrenderNamedSegs("businessSegs")
        },
        groupSegsByCol: function(t) {
            var e, n = [];
            for (e = 0; e < this.colCnt; e++) n.push([]);
            for (e = 0; e < t.length; e++) n[t[e].col].push(t[e]);
            return n
        },
        attachSegsByCol: function(t, e) {
            var n, i, r;
            for (n = 0; n < this.colCnt; n++)
                for (i = t[n], r = 0; r < i.length; r++) e.eq(n).append(i[r].el)
        },
        unrenderNamedSegs: function(t) {
            var e, n = this[t];
            if (n) {
                for (e = 0; e < n.length; e++) n[e].el.remove();
                this[t] = null
            }
        },
        renderFgSegsIntoContainers: function(t, e) {
            var n, i;
            for (t = this.renderFgSegEls(t), n = this.groupSegsByCol(t), i = 0; i < this.colCnt; i++) this.updateFgSegCoords(n[i]);
            return this.attachSegsByCol(n, e), t
        },
        fgSegHtml: function(t, e) {
            var n, i, r, s = this.view,
                o = t.event,
                a = s.isEventDraggable(o),
                l = !e && t.isStart && s.isEventResizableFromStart(o),
                u = !e && t.isEnd && s.isEventResizableFromEnd(o),
                h = this.getSegClasses(t, a, l || u),
                c = dt(this.getSegSkinCss(t));
            return h.unshift("fc-time-grid-event", "fc-v-event"), s.isMultiDayEvent(o) ? (t.isStart || t.isEnd) && (n = this.getEventTimeText(t), i = this.getEventTimeText(t, "LT"), r = this.getEventTimeText(t, null, !1)) : (n = this.getEventTimeText(o), i = this.getEventTimeText(o, "LT"), r = this.getEventTimeText(o, null, !1)), '<a class="' + h.join(" ") + '"' + (o.url ? ' href="' + ht(o.url) + '"' : "") + (c ? ' style="' + c + '"' : "") + '><div class="fc-content">' + (n ? '<div class="fc-time" data-start="' + ht(r) + '" data-full="' + ht(i) + '"><span>' + ht(n) + "</span></div>" : "") + (o.title ? '<div class="fc-title">' + ht(o.title) + "</div>" : "") + '</div><div class="fc-bg"/>' + (u ? '<div class="fc-resizer fc-end-resizer" />' : "") + "</a>"
        },
        updateSegVerticals: function(t) {
            this.computeSegVerticals(t), this.assignSegVerticals(t)
        },
        computeSegVerticals: function(t) {
            var e, n, i;
            for (e = 0; e < t.length; e++) n = t[e], i = this.dayDates[n.dayIndex], n.top = this.computeDateTop(n.start, i), n.bottom = this.computeDateTop(n.end, i)
        },
        assignSegVerticals: function(t) {
            var e, n;
            for (e = 0; e < t.length; e++) n = t[e], n.el.css(this.generateSegVerticalCss(n))
        },
        generateSegVerticalCss: function(t) {
            return {
                top: t.top,
                bottom: -t.bottom
            }
        },
        updateFgSegCoords: function(t) {
            this.computeSegVerticals(t), this.computeFgSegHorizontals(t), this.assignSegVerticals(t), this.assignFgSegHorizontals(t)
        },
        computeFgSegHorizontals: function(t) {
            var e, n, i;
            if (this.sortEventSegs(t), e = At(t), Gt(e), n = e[0]) {
                for (i = 0; i < n.length; i++) Vt(n[i]);
                for (i = 0; i < n.length; i++) this.computeFgSegForwardBack(n[i], 0, 0)
            }
        },
        computeFgSegForwardBack: function(t, e, n) {
            var i, r = t.forwardSegs;
            if (void 0 === t.forwardCoord)
                for (r.length ? (this.sortForwardSegs(r), this.computeFgSegForwardBack(r[0], e + 1, n), t.forwardCoord = r[0].backwardCoord) : t.forwardCoord = 1, t.backwardCoord = t.forwardCoord - (t.forwardCoord - n) / (e + 1), i = 0; i < r.length; i++) this.computeFgSegForwardBack(r[i], 0, t.forwardCoord)
        },
        sortForwardSegs: function(t) {
            t.sort(mt(this, "compareForwardSegs"))
        },
        compareForwardSegs: function(t, e) {
            return e.forwardPressure - t.forwardPressure || (t.backwardCoord || 0) - (e.backwardCoord || 0) || this.compareEventSegs(t, e)
        },
        assignFgSegHorizontals: function(t) {
            var e, n;
            for (e = 0; e < t.length; e++) n = t[e], n.el.css(this.generateFgSegHorizontalCss(n)), n.bottom - n.top < 30 && n.el.addClass("fc-short")
        },
        generateFgSegHorizontalCss: function(t) {
            var e, n, i = this.view.opt("slotEventOverlap"),
                r = t.backwardCoord,
                s = t.forwardCoord,
                o = this.generateSegVerticalCss(t);
            return i && (s = Math.min(1, r + 2 * (s - r))), this.isRTL ? (e = 1 - s, n = r) : (e = r, n = 1 - s), o.zIndex = t.level + 1, o.left = 100 * e + "%", o.right = 100 * n + "%", i && t.forwardPressure && (o[this.isRTL ? "marginLeft" : "marginRight"] = 20), o
        }
    });
    var Ce = Zt.View = ue.extend({
        type: null,
        name: null,
        title: null,
        calendar: null,
        viewSpec: null,
        options: null,
        el: null,
        renderQueue: null,
        batchRenderDepth: 0,
        isDatesRendered: !1,
        isEventsRendered: !1,
        isBaseRendered: !1,
        queuedScroll: null,
        isRTL: !1,
        isSelected: !1,
        selectedEvent: null,
        eventOrderSpecs: null,
        widgetHeaderClass: null,
        widgetContentClass: null,
        highlightStateClass: null,
        nextDayThreshold: null,
        isHiddenDayHash: null,
        isNowIndicatorRendered: null,
        initialNowDate: null,
        initialNowQueriedMs: null,
        nowIndicatorTimeoutID: null,
        nowIndicatorIntervalID: null,
        constructor: function(t, n) {
            ue.prototype.constructor.call(this), this.calendar = t, this.viewSpec = n, this.type = n.type, this.options = n.options, this.name = this.type, this.nextDayThreshold = e.duration(this.opt("nextDayThreshold")), this.initThemingProps(), this.initHiddenDays(), this.isRTL = this.opt("isRTL"), this.eventOrderSpecs = M(this.opt("eventOrder")), this.renderQueue = this.buildRenderQueue(), this.initAutoBatchRender(), this.initialize()
        },
        buildRenderQueue: function() {
            var t = this,
                e = new de({
                    event: this.opt("eventRenderWait")
                });
            return e.on("start", function() {
                t.freezeHeight(), t.addScroll(t.queryScroll())
            }), e.on("stop", function() {
                t.thawHeight(), t.popScroll()
            }), e
        },
        initAutoBatchRender: function() {
            var t = this;
            this.on("before:change", function() {
                t.startBatchRender()
            }), this.on("change", function() {
                t.stopBatchRender()
            })
        },
        startBatchRender: function() {
            this.batchRenderDepth++ || this.renderQueue.pause()
        },
        stopBatchRender: function() {
            --this.batchRenderDepth || this.renderQueue.resume()
        },
        initialize: function() {},
        opt: function(t) {
            return this.options[t]
        },
        publiclyTrigger: function(t, e) {
            var n = this.calendar;
            return n.publiclyTrigger.apply(n, [t, e || this].concat(Array.prototype.slice.call(arguments, 2), [this]))
        },
        updateTitle: function() {
            this.title = this.computeTitle(), this.calendar.setToolbarsTitle(this.title)
        },
        computeTitle: function() {
            var t;
            return t = /^(year|month)$/.test(this.currentRangeUnit) ? this.currentRange : this.activeRange, this.formatRange({
                start: this.calendar.applyTimezone(t.start),
                end: this.calendar.applyTimezone(t.end)
            }, this.opt("titleFormat") || this.computeTitleFormat(), this.opt("titleRangeSeparator"))
        },
        computeTitleFormat: function() {
            return "year" == this.currentRangeUnit ? "YYYY" : "month" == this.currentRangeUnit ? this.opt("monthYearFormat") : this.currentRangeAs("days") > 1 ? "ll" : "LL"
        },
        formatRange: function(t, e, n) {
            var i = t.end;
            return i.hasTime() || (i = i.clone().subtract(1)), ae(t.start, i, e, n, this.opt("isRTL"))
        },
        getAllDayHtml: function() {
            return this.opt("allDayHtml") || ht(this.opt("allDayText"))
        },
        buildGotoAnchorHtml: function(e, n, i) {
            var r, s, o, a;
            return t.isPlainObject(e) ? (r = e.date, s = e.type, o = e.forceOff) : r = e, r = Zt.moment(r), a = {
                date: r.format("YYYY-MM-DD"),
                type: s || "day"
            }, "string" == typeof n && (i = n, n = null), n = n ? " " + ft(n) : "", i = i || "", !o && this.opt("navLinks") ? "<a" + n + ' data-goto="' + ht(JSON.stringify(a)) + '">' + i + "</a>" : "<span" + n + ">" + i + "</span>"
        },
        setElement: function(t) {
            this.el = t, this.bindGlobalHandlers(), this.bindBaseRenderHandlers(), this.renderSkeleton()
        },
        removeElement: function() {
            this.unsetDate(), this.unrenderSkeleton(), this.unbindGlobalHandlers(), this.unbindBaseRenderHandlers(), this.el.remove()
        },
        renderSkeleton: function() {},
        unrenderSkeleton: function() {},
        setDate: function(t) {
            var e = this.get("dateProfile"),
                n = this.buildDateProfile(t, null, !0);
            return e && X(e.activeRange, n.activeRange) || this.set("dateProfile", n), n.date
        },
        unsetDate: function() {
            this.unset("dateProfile")
        },
        requestDateRender: function(t) {
            var e = this;
            this.renderQueue.queue(function() {
                e.executeDateRender(t)
            }, "date", "init")
        },
        requestDateUnrender: function() {
            var t = this;
            this.renderQueue.queue(function() {
                t.executeDateUnrender()
            }, "date", "destroy")
        },
        fetchInitialEvents: function(t) {
            return this.calendar.requestEvents(t.activeRange.start, t.activeRange.end)
        },
        bindEventChanges: function() {
            this.listenTo(this.calendar, "eventsReset", this.resetEvents)
        },
        unbindEventChanges: function() {
            this.stopListeningTo(this.calendar, "eventsReset")
        },
        setEvents: function(t) {
            this.set("currentEvents", t), this.set("hasEvents", !0)
        },
        unsetEvents: function() {
            this.unset("currentEvents"), this.unset("hasEvents")
        },
        resetEvents: function(t) {
            this.startBatchRender(), this.unsetEvents(), this.setEvents(t), this.stopBatchRender()
        },
        requestEventsRender: function(t) {
            var e = this;
            this.renderQueue.queue(function() {
                e.executeEventsRender(t)
            }, "event", "init")
        },
        requestEventsUnrender: function() {
            var t = this;
            this.renderQueue.queue(function() {
                t.executeEventsUnrender()
            }, "event", "destroy")
        },
        executeDateRender: function(t, e) {
            this.setDateProfileForRendering(t), this.updateTitle(), this.calendar.updateToolbarButtons(), this.render && this.render(), this.renderDates(), this.updateSize(), this.renderBusinessHours(), this.startNowIndicator(), e || this.addScroll(this.computeInitialDateScroll()), this.isDatesRendered = !0, this.trigger("datesRendered")
        },
        executeDateUnrender: function() {
            this.unselect(), this.stopNowIndicator(), this.trigger("before:datesUnrendered"), this.unrenderBusinessHours(), this.unrenderDates(), this.destroy && this.destroy(), this.isDatesRendered = !1
        },
        renderDates: function() {},
        unrenderDates: function() {},
        bindBaseRenderHandlers: function() {
            var t = this;
            this.on("datesRendered.baseHandler", function() {
                t.onBaseRender()
            }), this.on("before:datesUnrendered.baseHandler", function() {
                t.onBeforeBaseUnrender()
            })
        },
        unbindBaseRenderHandlers: function() {
            this.off(".baseHandler")
        },
        onBaseRender: function() {
            this.applyScreenState(), this.publiclyTrigger("viewRender", this, this, this.el)
        },
        onBeforeBaseUnrender: function() {
            this.applyScreenState(), this.publiclyTrigger("viewDestroy", this, this, this.el)
        },
        bindGlobalHandlers: function() {
            this.listenTo(we.get(), {
                touchstart: this.processUnselect,
                mousedown: this.handleDocumentMousedown
            })
        },
        unbindGlobalHandlers: function() {
            this.stopListeningTo(we.get())
        },
        initThemingProps: function() {
            var t = this.opt("theme") ? "ui" : "fc";
            this.widgetHeaderClass = t + "-widget-header", this.widgetContentClass = t + "-widget-content", this.highlightStateClass = t + "-state-highlight"
        },
        renderBusinessHours: function() {},
        unrenderBusinessHours: function() {},
        startNowIndicator: function() {
            var t, n, i, r = this;
            this.opt("nowIndicator") && (t = this.getNowIndicatorUnit()) && (n = mt(this, "updateNowIndicator"), this.initialNowDate = this.calendar.getNow(), this.initialNowQueriedMs = +new Date, this.renderNowIndicator(this.initialNowDate), this.isNowIndicatorRendered = !0, i = this.initialNowDate.clone().startOf(t).add(1, t) - this.initialNowDate, this.nowIndicatorTimeoutID = setTimeout(function() {
                r.nowIndicatorTimeoutID = null, n(), i = +e.duration(1, t), i = Math.max(100, i), r.nowIndicatorIntervalID = setInterval(n, i)
            }, i))
        },
        updateNowIndicator: function() {
            this.isNowIndicatorRendered && (this.unrenderNowIndicator(), this.renderNowIndicator(this.initialNowDate.clone().add(new Date - this.initialNowQueriedMs)))
        },
        stopNowIndicator: function() {
            this.isNowIndicatorRendered && (this.nowIndicatorTimeoutID && (clearTimeout(this.nowIndicatorTimeoutID), this.nowIndicatorTimeoutID = null), this.nowIndicatorIntervalID && (clearTimeout(this.nowIndicatorIntervalID), this.nowIndicatorIntervalID = null), this.unrenderNowIndicator(), this.isNowIndicatorRendered = !1)
        },
        getNowIndicatorUnit: function() {},
        renderNowIndicator: function(t) {},
        unrenderNowIndicator: function() {},
        updateSize: function(t) {
            var e;
            t && (e = this.queryScroll()), this.updateHeight(t), this.updateWidth(t), this.updateNowIndicator(), t && this.applyScroll(e)
        },
        updateWidth: function(t) {},
        updateHeight: function(t) {
            var e = this.calendar;
            this.setHeight(e.getSuggestedViewHeight(), e.isHeightAuto())
        },
        setHeight: function(t, e) {},
        addForcedScroll: function(e) {
            this.addScroll(t.extend(e, {
                isForced: !0
            }))
        },
        addScroll: function(e) {
            var n = this.queuedScroll || (this.queuedScroll = {});
            n.isForced || t.extend(n, e)
        },
        popScroll: function() {
            this.applyQueuedScroll(), this.queuedScroll = null
        },
        applyQueuedScroll: function() {
            this.queuedScroll && this.applyScroll(this.queuedScroll)
        },
        queryScroll: function() {
            var e = {};
            return this.isDatesRendered && t.extend(e, this.queryDateScroll()), e
        },
        applyScroll: function(t) {
            this.isDatesRendered && this.applyDateScroll(t)
        },
        computeInitialDateScroll: function() {
            return {}
        },
        queryDateScroll: function() {
            return {}
        },
        applyDateScroll: function(t) {},
        freezeHeight: function() {
            this.calendar.freezeContentHeight()
        },
        thawHeight: function() {
            this.calendar.thawContentHeight()
        },
        executeEventsRender: function(t) {
            this.renderEvents(t), this.isEventsRendered = !0, this.onEventsRender()
        },
        executeEventsUnrender: function() {
            this.onBeforeEventsUnrender(), this.destroyEvents && this.destroyEvents(), this.unrenderEvents(), this.isEventsRendered = !1
        },
        onEventsRender: function() {
            this.applyScreenState(), this.renderedEventSegEach(function(t) {
                this.publiclyTrigger("eventAfterRender", t.event, t.event, t.el)
            }), this.publiclyTrigger("eventAfterAllRender")
        },
        onBeforeEventsUnrender: function() {
            this.applyScreenState(), this.renderedEventSegEach(function(t) {
                this.publiclyTrigger("eventDestroy", t.event, t.event, t.el)
            })
        },
        applyScreenState: function() {
            this.thawHeight(), this.freezeHeight(), this.applyQueuedScroll()
        },
        renderEvents: function(t) {},
        unrenderEvents: function() {},
        resolveEventEl: function(e, n) {
            var i = this.publiclyTrigger("eventRender", e, e, n);
            return !1 === i ? n = null : i && !0 !== i && (n = t(i)), n
        },
        showEvent: function(t) {
            this.renderedEventSegEach(function(t) {
                t.el.css("visibility", "")
            }, t)
        },
        hideEvent: function(t) {
            this.renderedEventSegEach(function(t) {
                t.el.css("visibility", "hidden")
            }, t)
        },
        renderedEventSegEach: function(t, e) {
            var n, i = this.getEventSegs();
            for (n = 0; n < i.length; n++) e && i[n].event._id !== e._id || i[n].el && t.call(this, i[n])
        },
        getEventSegs: function() {
            return []
        },
        isEventDraggable: function(t) {
            return this.isEventStartEditable(t)
        },
        isEventStartEditable: function(t) {
            return ut(t.startEditable, (t.source || {}).startEditable, this.opt("eventStartEditable"), this.isEventGenerallyEditable(t))
        },
        isEventGenerallyEditable: function(t) {
            return ut(t.editable, (t.source || {}).editable, this.opt("editable"))
        },
        reportSegDrop: function(t, e, n, i, r) {
            var s = this.calendar,
                o = s.mutateSeg(t, e, n),
                a = function() {
                    o.undo(), s.reportEventChange()
                };
            this.triggerEventDrop(t.event, o.dateDelta, a, i, r), s.reportEventChange()
        },
        triggerEventDrop: function(t, e, n, i, r) {
            this.publiclyTrigger("eventDrop", i[0], t, e, n, r, {})
        },
        reportExternalDrop: function(e, n, i, r, s) {
            var o, a, l = e.eventProps;
            l && (o = t.extend({}, l, n), a = this.calendar.renderEvent(o, e.stick)[0]), this.triggerExternalDrop(a, n, i, r, s)
        },
        triggerExternalDrop: function(t, e, n, i, r) {
            this.publiclyTrigger("drop", n[0], e.start, i, r), t && this.publiclyTrigger("eventReceive", null, t)
        },
        renderDrag: function(t, e) {},
        unrenderDrag: function() {},
        isEventResizableFromStart: function(t) {
            return this.opt("eventResizableFromStart") && this.isEventResizable(t)
        },
        isEventResizableFromEnd: function(t) {
            return this.isEventResizable(t)
        },
        isEventResizable: function(t) {
            var e = t.source || {};
            return ut(t.durationEditable, e.durationEditable, this.opt("eventDurationEditable"), t.editable, e.editable, this.opt("editable"))
        },
        reportSegResize: function(t, e, n, i, r) {
            var s = this.calendar,
                o = s.mutateSeg(t, e, n),
                a = function() {
                    o.undo(), s.reportEventChange()
                };
            this.triggerEventResize(t.event, o.durationDelta, a, i, r), s.reportEventChange()
        },
        triggerEventResize: function(t, e, n, i, r) {
            this.publiclyTrigger("eventResize", i[0], t, e, n, r, {})
        },
        select: function(t, e) {
            this.unselect(e), this.renderSelection(t), this.reportSelection(t, e)
        },
        renderSelection: function(t) {},
        reportSelection: function(t, e) {
            this.isSelected = !0, this.triggerSelect(t, e)
        },
        triggerSelect: function(t, e) {
            this.publiclyTrigger("select", null, this.calendar.applyTimezone(t.start), this.calendar.applyTimezone(t.end), e)
        },
        unselect: function(t) {
            this.isSelected && (this.isSelected = !1, this.destroySelection && this.destroySelection(), this.unrenderSelection(), this.publiclyTrigger("unselect", null, t))
        },
        unrenderSelection: function() {},
        selectEvent: function(t) {
            this.selectedEvent && this.selectedEvent === t || (this.unselectEvent(), this.renderedEventSegEach(function(t) {
                t.el.addClass("fc-selected")
            }, t), this.selectedEvent = t)
        },
        unselectEvent: function() {
            this.selectedEvent && (this.renderedEventSegEach(function(t) {
                t.el.removeClass("fc-selected")
            }, this.selectedEvent), this.selectedEvent = null)
        },
        isEventSelected: function(t) {
            return this.selectedEvent && this.selectedEvent._id === t._id
        },
        handleDocumentMousedown: function(t) {
            S(t) && this.processUnselect(t)
        },
        processUnselect: function(t) {
            this.processRangeUnselect(t), this.processEventUnselect(t)
        },
        processRangeUnselect: function(e) {
            var n;
            this.isSelected && this.opt("unselectAuto") && ((n = this.opt("unselectCancel")) && t(e.target).closest(n).length || this.unselect(e))
        },
        processEventUnselect: function(e) {
            this.selectedEvent && (t(e.target).closest(".fc-selected").length || this.unselectEvent())
        },
        triggerDayClick: function(t, e, n) {
            this.publiclyTrigger("dayClick", e, this.calendar.applyTimezone(t.start), n)
        },
        computeDayRange: function(t) {
            var e, n = t.start.clone().stripTime(),
                i = t.end,
                r = null;
            return i && (r = i.clone().stripTime(), (e = +i.time()) && e >= this.nextDayThreshold && r.add(1, "days")), (!i || r <= n) && (r = n.clone().add(1, "days")), {
                start: n,
                end: r
            }
        },
        isMultiDayEvent: function(t) {
            var e = this.computeDayRange(t);
            return e.end.diff(e.start, "days") > 1
        }
    });
    Ce.watch("displayingDates", ["dateProfile"], function(t) {
        this.requestDateRender(t.dateProfile)
    }, function() {
        this.requestDateUnrender()
    }), Ce.watch("initialEvents", ["dateProfile"], function(t) {
        return this.fetchInitialEvents(t.dateProfile)
    }), Ce.watch("bindingEvents", ["initialEvents"], function(t) {
        this.setEvents(t.initialEvents), this.bindEventChanges()
    }, function() {
        this.unbindEventChanges(), this.unsetEvents()
    }), Ce.watch("displayingEvents", ["displayingDates", "hasEvents"], function() {
        this.requestEventsRender(this.get("currentEvents"))
    }, function() {
        this.requestEventsUnrender()
    }), Ce.mixin({
        currentRange: null,
        currentRangeUnit: null,
        renderRange: null,
        activeRange: null,
        validRange: null,
        dateIncrement: null,
        minTime: null,
        maxTime: null,
        usesMinMaxTime: !1,
        start: null,
        end: null,
        intervalStart: null,
        intervalEnd: null,
        setDateProfileForRendering: function(t) {
            this.currentRange = t.currentRange, this.currentRangeUnit = t.currentRangeUnit, this.renderRange = t.renderRange, this.activeRange = t.activeRange, this.validRange = t.validRange, this.dateIncrement = t.dateIncrement, this.minTime = t.minTime, this.maxTime = t.maxTime, this.start = t.activeRange.start, this.end = t.activeRange.end, this.intervalStart = t.currentRange.start, this.intervalEnd = t.currentRange.end
        },
        buildPrevDateProfile: function(t) {
            var e = t.clone().startOf(this.currentRangeUnit).subtract(this.dateIncrement);
            return this.buildDateProfile(e, -1)
        },
        buildNextDateProfile: function(t) {
            var e = t.clone().startOf(this.currentRangeUnit).add(this.dateIncrement);
            return this.buildDateProfile(e, 1)
        },
        buildDateProfile: function(t, n, i) {
            var r, s, o, a, l = this.buildValidRange(),
                u = null,
                h = null;
            return i && (t = j(t, l)), r = this.buildCurrentRangeInfo(t, n), s = this.buildRenderRange(r.range, r.unit), o = q(s), this.opt("showNonCurrentDates") || (o = U(o, r.range)), u = e.duration(this.opt("minTime")), h = e.duration(this.opt("maxTime")), this.adjustActiveRange(o, u, h), o = U(o, l), t = j(t, o), a = $(r.range, l), {
                validRange: l,
                currentRange: r.range,
                currentRangeUnit: r.unit,
                activeRange: o,
                renderRange: s,
                minTime: u,
                maxTime: h,
                isValid: a,
                date: t,
                dateIncrement: this.buildDateIncrement(r.duration)
            }
        },
        buildValidRange: function() {
            return this.getRangeOption("validRange", this.calendar.getNow()) || {}
        },
        buildCurrentRangeInfo: function(t, e) {
            var n, i = null,
                r = null,
                s = null;
            return this.viewSpec.duration ? (i = this.viewSpec.duration, r = this.viewSpec.durationUnit, s = this.buildRangeFromDuration(t, e, i, r)) : (n = this.opt("dayCount")) ? (r = "day", s = this.buildRangeFromDayCount(t, e, n)) : (s = this.buildCustomVisibleRange(t)) ? r = V(s.start, s.end) : (i = this.getFallbackDuration(), r = V(i), s = this.buildRangeFromDuration(t, e, i, r)), this.normalizeCurrentRange(s, r), {
                duration: i,
                unit: r,
                range: s
            }
        },
        getFallbackDuration: function() {
            return e.duration({
                days: 1
            })
        },
        normalizeCurrentRange: function(t, e) {
            /^(year|month|week|day)$/.test(e) ? (t.start.stripTime(), t.end.stripTime()) : (t.start.hasTime() || t.start.time(0), t.end.hasTime() || t.end.time(0))
        },
        adjustActiveRange: function(t, e, n) {
            var i = !1;
            this.usesMinMaxTime && (e < 0 && (t.start.time(0).add(e), i = !0), n > 864e5 && (t.end.time(n - 864e5), i = !0), i && (t.start.hasTime() || t.start.time(0), t.end.hasTime() || t.end.time(0)))
        },
        buildRangeFromDuration: function(t, n, i, r) {
            var s, o, a, l = this.opt("dateAlignment"),
                u = t.clone();
            return i.as("days") <= 1 && this.isHiddenDay(u) && (u = this.skipHiddenDays(u, n), u.startOf("day")), l || (o = this.opt("dateIncrement"), o ? (a = e.duration(o), l = a < i ? O(a, o) : r) : l = r), u.startOf(l), s = u.clone().add(i), {
                start: u,
                end: s
            }
        },
        buildRangeFromDayCount: function(t, e, n) {
            var i, r = this.opt("dateAlignment"),
                s = 0,
                o = t.clone();
            r && o.startOf(r), o.startOf("day"), o = this.skipHiddenDays(o, e), i = o.clone();
            do {
                i.add(1, "day"), this.isHiddenDay(i) || s++
            } while (s < n);
            return {
                start: o,
                end: i
            }
        },
        buildCustomVisibleRange: function(t) {
            var e = this.getRangeOption("visibleRange", this.calendar.moment(t));
            return !e || e.start && e.end ? e : null
        },
        buildRenderRange: function(t, e) {
            return this.trimHiddenDays(t)
        },
        buildDateIncrement: function(t) {
            var n, i = this.opt("dateIncrement");
            return i ? e.duration(i) : (n = this.opt("dateAlignment")) ? e.duration(1, n) : t || e.duration({
                days: 1
            })
        },
        trimHiddenDays: function(t) {
            return {
                start: this.skipHiddenDays(t.start),
                end: this.skipHiddenDays(t.end, -1, !0)
            }
        },
        currentRangeAs: function(t) {
            var e = this.currentRange;
            return e.end.diff(e.start, t, !0)
        },
        getRangeOption: function(t) {
            var e = this.opt(t);
            if ("function" == typeof e && (e = e.apply(null, Array.prototype.slice.call(arguments, 1))), e) return this.calendar.parseRange(e)
        },
        initHiddenDays: function() {
            var e, n = this.opt("hiddenDays") || [],
                i = [],
                r = 0;
            for (!1 === this.opt("weekends") && n.push(0, 6), e = 0; e < 7; e++)(i[e] = -1 !== t.inArray(e, n)) || r++;
            if (!r) throw "invalid hiddenDays";
            this.isHiddenDayHash = i
        },
        isHiddenDay: function(t) {
            return e.isMoment(t) && (t = t.day()), this.isHiddenDayHash[t]
        },
        skipHiddenDays: function(t, e, n) {
            var i = t.clone();
            for (e = e || 1; this.isHiddenDayHash[(i.day() + (n ? e : 0) + 7) % 7];) i.add(e, "days");
            return i
        }
    });
    var He = Zt.Scroller = bt.extend({
        el: null,
        scrollEl: null,
        overflowX: null,
        overflowY: null,
        constructor: function(t) {
            t = t || {}, this.overflowX = t.overflowX || t.overflow || "auto", this.overflowY = t.overflowY || t.overflow || "auto"
        },
        render: function() {
            this.el = this.renderEl(), this.applyOverflow()
        },
        renderEl: function() {
            return this.scrollEl = t('<div class="fc-scroller"></div>')
        },
        clear: function() {
            this.setHeight("auto"), this.applyOverflow()
        },
        destroy: function() {
            this.el.remove()
        },
        applyOverflow: function() {
            this.scrollEl.css({
                "overflow-x": this.overflowX,
                "overflow-y": this.overflowY
            })
        },
        lockOverflow: function(t) {
            var e = this.overflowX,
                n = this.overflowY;
            t = t || this.getScrollbarWidths(), "auto" === e && (e = t.top || t.bottom || this.scrollEl[0].scrollWidth - 1 > this.scrollEl[0].clientWidth ? "scroll" : "hidden"), "auto" === n && (n = t.left || t.right || this.scrollEl[0].scrollHeight - 1 > this.scrollEl[0].clientHeight ? "scroll" : "hidden"), this.scrollEl.css({
                "overflow-x": e,
                "overflow-y": n
            })
        },
        setHeight: function(t) {
            this.scrollEl.height(t)
        },
        getScrollTop: function() {
            return this.scrollEl.scrollTop()
        },
        setScrollTop: function(t) {
            this.scrollEl.scrollTop(t)
        },
        getClientWidth: function() {
            return this.scrollEl[0].clientWidth
        },
        getClientHeight: function() {
            return this.scrollEl[0].clientHeight
        },
        getScrollbarWidths: function() {
            return p(this.scrollEl)
        }
    });
    _t.prototype.proxyCall = function(t) {
        var e = Array.prototype.slice.call(arguments, 1),
            n = [];
        return this.items.forEach(function(i) {
            n.push(i[t].apply(i, e))
        }), n
    };
    var Re = Zt.Calendar = bt.extend(fe, {
        view: null,
        viewsByType: null,
        currentDate: null,
        loadingLevel: 0,
        constructor: function(t, e) {
            we.needed(), this.el = t, this.viewsByType = {}, this.viewSpecCache = {}, this.initOptionsInternals(e), this.initMomentInternals(), this.initCurrentDate(), Ut.call(this), this.initialize()
        },
        initialize: function() {},
        getCalendar: function() {
            return this
        },
        getView: function() {
            return this.view
        },
        publiclyTrigger: function(t, e) {
            var n = Array.prototype.slice.call(arguments, 2),
                i = this.opt(t);
            if (e = e || this.el[0], this.triggerWith(t, e, n), i) return i.apply(e, n)
        },
        instantiateView: function(t) {
            var e = this.getViewSpec(t);
            return new e.class(this, e)
        },
        isValidViewType: function(t) {
            return Boolean(this.getViewSpec(t))
        },
        changeView: function(t, e) {
            e && (e.start && e.end ? this.recordOptionOverrides({
                visibleRange: e
            }) : this.currentDate = this.moment(e).stripZone()), this.renderView(t)
        },
        zoomTo: function(t, e) {
            var n;
            e = e || "day", n = this.getViewSpec(e) || this.getUnitViewSpec(e), this.currentDate = t.clone(), this.renderView(n ? n.type : null)
        },
        initCurrentDate: function() {
            var t = this.opt("defaultDate");
            this.currentDate = null != t ? this.moment(t).stripZone() : this.getNow()
        },
        prev: function() {
            var t = this.view.buildPrevDateProfile(this.currentDate);
            t.isValid && (this.currentDate = t.date, this.renderView())
        },
        next: function() {
            var t = this.view.buildNextDateProfile(this.currentDate);
            t.isValid && (this.currentDate = t.date, this.renderView())
        },
        prevYear: function() {
            this.currentDate.add(-1, "years"), this.renderView()
        },
        nextYear: function() {
            this.currentDate.add(1, "years"), this.renderView()
        },
        today: function() {
            this.currentDate = this.getNow(), this.renderView()
        },
        gotoDate: function(t) {
            this.currentDate = this.moment(t).stripZone(), this.renderView()
        },
        incrementDate: function(t) {
            this.currentDate.add(e.duration(t)), this.renderView()
        },
        getDate: function() {
            return this.applyTimezone(this.currentDate)
        },
        pushLoading: function() {
            this.loadingLevel++ || this.publiclyTrigger("loading", null, !0, this.view)
        },
        popLoading: function() {
            --this.loadingLevel || this.publiclyTrigger("loading", null, !1, this.view)
        },
        select: function(t, e) {
            this.view.select(this.buildSelectSpan.apply(this, arguments))
        },
        unselect: function() {
            this.view && this.view.unselect()
        },
        buildSelectSpan: function(t, e) {
            var n, i = this.moment(t).stripZone();
            return n = e ? this.moment(e).stripZone() : i.hasTime() ? i.clone().add(this.defaultTimedEventDuration) : i.clone().add(this.defaultAllDayEventDuration), {
                start: i,
                end: n
            }
        },
        parseRange: function(t) {
            var e = null,
                n = null;
            return t.start && (e = this.moment(t.start).stripZone()), t.end && (n = this.moment(t.end).stripZone()), e || n ? e && n && n.isBefore(e) ? null : {
                start: e,
                end: n
            } : null
        },
        rerenderEvents: function() {
            this.elementVisible() && this.reportEventChange()
        }
    });
    Re.mixin({
        dirDefaults: null,
        localeDefaults: null,
        overrides: null,
        dynamicOverrides: null,
        optionsModel: null,
        initOptionsInternals: function(e) {
            this.overrides = t.extend({}, e), this.dynamicOverrides = {}, this.optionsModel = new ue, this.populateOptionsHash()
        },
        option: function(t, e) {
            var n;
            if ("string" == typeof t) {
                if (void 0 === e) return this.optionsModel.get(t);
                n = {}, n[t] = e, this.setOptions(n)
            } else "object" == typeof t && this.setOptions(t)
        },
        opt: function(t) {
            return this.optionsModel.get(t)
        },
        setOptions: function(t) {
            var e, n = 0;
            this.recordOptionOverrides(t);
            for (e in t) n++;
            if (1 === n) {
                if ("height" === e || "contentHeight" === e || "aspectRatio" === e) return void this.updateSize(!0);
                if ("defaultDate" === e) return;
                if ("businessHours" === e) return void(this.view && (this.view.unrenderBusinessHours(), this.view.renderBusinessHours()));
                if ("timezone" === e) return this.rezoneArrayEventSources(), void this.refetchEvents()
            }
            this.renderHeader(), this.renderFooter(), this.viewsByType = {}, this.reinitView()
        },
        populateOptionsHash: function() {
            var t, e, i, r, s;
            t = ut(this.dynamicOverrides.locale, this.overrides.locale), e = xe[t], e || (t = Re.defaults.locale, e = xe[t] || {}), i = ut(this.dynamicOverrides.isRTL, this.overrides.isRTL, e.isRTL, Re.defaults.isRTL), r = i ? Re.rtlDefaults : {}, this.dirDefaults = r, this.localeDefaults = e, s = n([Re.defaults, r, e, this.overrides, this.dynamicOverrides]), Yt(s), this.optionsModel.reset(s)
        },
        recordOptionOverrides: function(t) {
            var e;
            for (e in t) this.dynamicOverrides[e] = t[e];
            this.viewSpecCache = {}, this.populateOptionsHash()
        }
    }), Re.mixin({
        defaultAllDayEventDuration: null,
        defaultTimedEventDuration: null,
        localeData: null,
        initMomentInternals: function() {
            var t = this;
            this.defaultAllDayEventDuration = e.duration(this.opt("defaultAllDayEventDuration")), this.defaultTimedEventDuration = e.duration(this.opt("defaultTimedEventDuration")), this.optionsModel.watch("buildingMomentLocale", ["?locale", "?monthNames", "?monthNamesShort", "?dayNames", "?dayNamesShort", "?firstDay", "?weekNumberCalculation"], function(e) {
                var n, i = e.weekNumberCalculation,
                    r = e.firstDay;
                "iso" === i && (i = "ISO");
                var s = rt(qt(e.locale));
                e.monthNames && (s._months = e.monthNames), e.monthNamesShort && (s._monthsShort = e.monthNamesShort), e.dayNames && (s._weekdays = e.dayNames), e.dayNamesShort && (s._weekdaysShort = e.dayNamesShort), null == r && "ISO" === i && (r = 1), null != r && (n = rt(s._week), n.dow = r, s._week = n), "ISO" !== i && "local" !== i && "function" != typeof i || (s._fullCalendar_weekCalc = i), t.localeData = s, t.currentDate && t.localizeMoment(t.currentDate)
            })
        },
        moment: function() {
            var t;
            return "local" === this.opt("timezone") ? (t = Zt.moment.apply(null, arguments), t.hasTime() && t.local()) : t = "UTC" === this.opt("timezone") ? Zt.moment.utc.apply(null, arguments) : Zt.moment.parseZone.apply(null, arguments), this.localizeMoment(t), t
        },
        localizeMoment: function(t) {
            t._locale = this.localeData
        },
        getIsAmbigTimezone: function() {
            return "local" !== this.opt("timezone") && "UTC" !== this.opt("timezone")
        },
        applyTimezone: function(t) {
            if (!t.hasTime()) return t.clone();
            var e, n = this.moment(t.toArray()),
                i = t.time() - n.time();
            return i && (e = n.clone().add(i), t.time() - e.time() == 0 && (n = e)), n
        },
        getNow: function() {
            var t = this.opt("now");
            return "function" == typeof t && (t = t()), this.moment(t).stripZone()
        },
        humanizeDuration: function(t) {
            return t.locale(this.opt("locale")).humanize()
        },
        getEventEnd: function(t) {
            return t.end ? t.end.clone() : this.getDefaultEventEnd(t.allDay, t.start)
        },
        getDefaultEventEnd: function(t, e) {
            var n = e.clone();
            return t ? n.stripTime().add(this.defaultAllDayEventDuration) : n.add(this.defaultTimedEventDuration), this.getIsAmbigTimezone() && n.stripZone(), n
        }
    }), Re.mixin({
        viewSpecCache: null,
        getViewSpec: function(t) {
            var e = this.viewSpecCache;
            return e[t] || (e[t] = this.buildViewSpec(t))
        },
        getUnitViewSpec: function(e) {
            var n, i, r;
            if (-1 != t.inArray(e, Jt))
                for (n = this.header.getViewsWithButtons(), t.each(Zt.views, function(t) {
                        n.push(t)
                    }), i = 0; i < n.length; i++)
                    if ((r = this.getViewSpec(n[i])) && r.singleUnit == e) return r
        },
        buildViewSpec: function(t) {
            for (var i, r, s, o, a, l = this.overrides.views || {}, u = [], h = [], c = [], d = t; d;) i = $t[d], r = l[d], d = null, "function" == typeof i && (i = {
                class: i
            }), i && (u.unshift(i), h.unshift(i.defaults || {}), s = s || i.duration, d = d || i.type), r && (c.unshift(r), s = s || r.duration, d = d || r.type);
            return i = it(u), i.type = t, !!i.class && (s = s || this.dynamicOverrides.duration || this.overrides.duration, s && (o = e.duration(s), o.valueOf() && (a = O(o, s), i.duration = o, i.durationUnit = a, 1 === o.as(a) && (i.singleUnit = a, c.unshift(l[a] || {})))), i.defaults = n(h), i.overrides = n(c), this.buildViewSpecOptions(i), this.buildViewSpecButtonText(i, t), i)
        },
        buildViewSpecOptions: function(t) {
            t.options = n([Re.defaults, t.defaults, this.dirDefaults, this.localeDefaults, this.overrides, t.overrides, this.dynamicOverrides]), Yt(t.options)
        },
        buildViewSpecButtonText: function(t, e) {
            function n(n) {
                var i = n.buttonText || {};
                return i[e] || (t.buttonTextKey ? i[t.buttonTextKey] : null) || (t.singleUnit ? i[t.singleUnit] : null)
            }
            t.buttonTextOverride = n(this.dynamicOverrides) || n(this.overrides) || t.overrides.buttonText, t.buttonTextDefault = n(this.localeDefaults) || n(this.dirDefaults) || t.defaults.buttonText || n(Re.defaults) || (t.duration ? this.humanizeDuration(t.duration) : null) || e
        }
    }), Re.mixin({
        el: null,
        contentEl: null,
        suggestedViewHeight: null,
        windowResizeProxy: null,
        ignoreWindowResize: 0,
        render: function() {
            this.contentEl ? this.elementVisible() && (this.calcSize(), this.renderView()) : this.initialRender()
        },
        initialRender: function() {
            var e = this,
                n = this.el;
            n.addClass("fc"), n.on("click.fc", "a[data-goto]", function(n) {
                var i = t(this),
                    r = i.data("goto"),
                    s = e.moment(r.date),
                    o = r.type,
                    a = e.view.opt("navLink" + gt(o) + "Click");
                "function" == typeof a ? a(s, n) : ("string" == typeof a && (o = a), e.zoomTo(s, o))
            }), this.optionsModel.watch("applyingThemeClasses", ["?theme"], function(t) {
                n.toggleClass("ui-widget", t.theme), n.toggleClass("fc-unthemed", !t.theme)
            }), this.optionsModel.watch("applyingDirClasses", ["?isRTL", "?locale"], function(t) {
                n.toggleClass("fc-ltr", !t.isRTL), n.toggleClass("fc-rtl", t.isRTL)
            }), this.contentEl = t("<div class='fc-view-container'/>").prependTo(n), this.initToolbars(), this.renderHeader(), this.renderFooter(), this.renderView(this.opt("defaultView")), this.opt("handleWindowResize") && t(window).resize(this.windowResizeProxy = yt(this.windowResize.bind(this), this.opt("windowResizeDelay")))
        },
        destroy: function() {
            this.view && this.view.removeElement(), this.toolbarsManager.proxyCall("removeElement"), this.contentEl.remove(), this.el.removeClass("fc fc-ltr fc-rtl fc-unthemed ui-widget"), this.el.off(".fc"), this.windowResizeProxy && (t(window).unbind("resize", this.windowResizeProxy), this.windowResizeProxy = null), we.unneeded()
        },
        elementVisible: function() {
            return this.el.is(":visible")
        },
        renderView: function(e, n) {
            this.ignoreWindowResize++;
            var i = this.view && e && this.view.type !== e;
            i && (this.freezeContentHeight(), this.clearView()), !this.view && e && (this.view = this.viewsByType[e] || (this.viewsByType[e] = this.instantiateView(e)), this.view.setElement(t("<div class='fc-view fc-" + e + "-view' />").appendTo(this.contentEl)), this.toolbarsManager.proxyCall("activateButton", e)), this.view && (n && this.view.addForcedScroll(n), this.elementVisible() && (this.currentDate = this.view.setDate(this.currentDate))), i && this.thawContentHeight(), this.ignoreWindowResize--
        },
        clearView: function() {
            this.toolbarsManager.proxyCall("deactivateButton", this.view.type), this.view.removeElement(), this.view = null
        },
        reinitView: function() {
            this.ignoreWindowResize++, this.freezeContentHeight();
            var t = this.view.type,
                e = this.view.queryScroll();
            this.clearView(), this.calcSize(), this.renderView(t, e), this.thawContentHeight(), this.ignoreWindowResize--
        },
        getSuggestedViewHeight: function() {
            return null === this.suggestedViewHeight && this.calcSize(), this.suggestedViewHeight
        },
        isHeightAuto: function() {
            return "auto" === this.opt("contentHeight") || "auto" === this.opt("height")
        },
        updateSize: function(t) {
            if (this.elementVisible()) return t && this._calcSize(), this.ignoreWindowResize++, this.view.updateSize(!0), this.ignoreWindowResize--, !0
        },
        calcSize: function() {
            this.elementVisible() && this._calcSize()
        },
        _calcSize: function() {
            var t = this.opt("contentHeight"),
                e = this.opt("height");
            this.suggestedViewHeight = "number" == typeof t ? t : "function" == typeof t ? t() : "number" == typeof e ? e - this.queryToolbarsHeight() : "function" == typeof e ? e() - this.queryToolbarsHeight() : "parent" === e ? this.el.parent().height() - this.queryToolbarsHeight() : Math.round(this.contentEl.width() / Math.max(this.opt("aspectRatio"), .5))
        },
        windowResize: function(t) {
            !this.ignoreWindowResize && t.target === window && this.view.renderRange && this.updateSize(!0) && this.view.publiclyTrigger("windowResize", this.el[0])
        },
        freezeContentHeight: function() {
            this.contentEl.css({
                width: "100%",
                height: this.contentEl.height(),
                overflow: "hidden"
            })
        },
        thawContentHeight: function() {
            this.contentEl.css({
                width: "",
                height: "",
                overflow: ""
            })
        }
    }), Re.mixin({
        header: null,
        footer: null,
        toolbarsManager: null,
        initToolbars: function() {
            this.header = new Wt(this, this.computeHeaderOptions()), this.footer = new Wt(this, this.computeFooterOptions()), this.toolbarsManager = new _t([this.header, this.footer])
        },
        computeHeaderOptions: function() {
            return {
                extraClasses: "fc-header-toolbar",
                layout: this.opt("header")
            }
        },
        computeFooterOptions: function() {
            return {
                extraClasses: "fc-footer-toolbar",
                layout: this.opt("footer")
            }
        },
        renderHeader: function() {
            var t = this.header;
            t.setToolbarOptions(this.computeHeaderOptions()), t.render(), t.el && this.el.prepend(t.el)
        },
        renderFooter: function() {
            var t = this.footer;
            t.setToolbarOptions(this.computeFooterOptions()), t.render(), t.el && this.el.append(t.el)
        },
        setToolbarsTitle: function(t) {
            this.toolbarsManager.proxyCall("updateTitle", t)
        },
        updateToolbarButtons: function() {
            var t = this.getNow(),
                e = this.view,
                n = e.buildDateProfile(t),
                i = e.buildPrevDateProfile(this.currentDate),
                r = e.buildNextDateProfile(this.currentDate);
            this.toolbarsManager.proxyCall(n.isValid && !Z(t, e.currentRange) ? "enableButton" : "disableButton", "today"), this.toolbarsManager.proxyCall(i.isValid ? "enableButton" : "disableButton", "prev"), this.toolbarsManager.proxyCall(r.isValid ? "enableButton" : "disableButton", "next")
        },
        queryToolbarsHeight: function() {
            return this.toolbarsManager.items.reduce(function(t, e) {
                return t + (e.el ? e.el.outerHeight(!0) : 0)
            }, 0)
        }
    }), Re.defaults = {
        titleRangeSeparator: " – ",
        monthYearFormat: "MMMM YYYY",
        defaultTimedEventDuration: "02:00:00",
        defaultAllDayEventDuration: {
            days: 1
        },
        forceEventDuration: !1,
        nextDayThreshold: "09:00:00",
        defaultView: "month",
        aspectRatio: 1.35,
        header: {
            left: "title",
            center: "",
            right: "today prev,next"
        },
        weekends: !0,
        weekNumbers: !1,
        weekNumberTitle: "W",
        weekNumberCalculation: "local",
        scrollTime: "06:00:00",
        minTime: "00:00:00",
        maxTime: "24:00:00",
        showNonCurrentDates: !0,
        lazyFetching: !0,
        startParam: "start",
        endParam: "end",
        timezoneParam: "timezone",
        timezone: !1,
        isRTL: !1,
        buttonText: {
            prev: "prev",
            next: "next",
            prevYear: "prev year",
            nextYear: "next year",
            year: "year",
            today: "today",
            month: "month",
            week: "week",
            day: "day"
        },
        buttonIcons: {
            prev: "left-single-arrow",
            next: "right-single-arrow",
            prevYear: "left-double-arrow",
            nextYear: "right-double-arrow"
        },
        allDayText: "all-day",
        theme: !1,
        themeButtonIcons: {
            prev: "circle-triangle-w",
            next: "circle-triangle-e",
            prevYear: "seek-prev",
            nextYear: "seek-next"
        },
        dragOpacity: .75,
        dragRevertDuration: 500,
        dragScroll: !0,
        unselectAuto: !0,
        dropAccept: "*",
        eventOrder: "title",
        eventLimit: !1,
        eventLimitText: "more",
        eventLimitClick: "popover",
        dayPopoverFormat: "LL",
        handleWindowResize: !0,
        windowResizeDelay: 100,
        longPressDelay: 1e3
    }, Re.englishDefaults = {
        dayPopoverFormat: "dddd, MMMM D"
    }, Re.rtlDefaults = {
        header: {
            left: "next,prev today",
            center: "",
            right: "title"
        },
        buttonIcons: {
            prev: "right-single-arrow",
            next: "left-single-arrow",
            prevYear: "right-double-arrow",
            nextYear: "left-double-arrow"
        },
        themeButtonIcons: {
            prev: "circle-triangle-e",
            next: "circle-triangle-w",
            nextYear: "seek-prev",
            prevYear: "seek-next"
        }
    };
    var xe = Zt.locales = {};
    Zt.datepickerLocale = function(e, n, i) {
        var r = xe[e] || (xe[e] = {});
        r.isRTL = i.isRTL, r.weekNumberTitle = i.weekHeader, t.each(Ie, function(t, e) {
            r[t] = e(i)
        }), t.datepicker && (t.datepicker.regional[n] = t.datepicker.regional[e] = i, t.datepicker.regional.en = t.datepicker.regional[""], t.datepicker.setDefaults(i))
    }, Zt.locale = function(e, i) {
        var r, s;
        r = xe[e] || (xe[e] = {}), i && (r = xe[e] = n([r, i])), s = qt(e), t.each(ke, function(t, e) {
            null == r[t] && (r[t] = e(s, r))
        }), Re.defaults.locale = e
    };
    var Ie = {
            buttonText: function(t) {
                return {
                    prev: ct(t.prevText),
                    next: ct(t.nextText),
                    today: ct(t.currentText)
                }
            },
            monthYearFormat: function(t) {
                return t.showMonthAfterYear ? "YYYY[" + t.yearSuffix + "] MMMM" : "MMMM YYYY[" + t.yearSuffix + "]"
            }
        },
        ke = {
            dayOfMonthFormat: function(t, e) {
                var n = t.longDateFormat("l");
                return n = n.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, ""), e.isRTL ? n += " ddd" : n = "ddd " + n, n
            },
            mediumTimeFormat: function(t) {
                return t.longDateFormat("LT").replace(/\s*a$/i, "a")
            },
            smallTimeFormat: function(t) {
                return t.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "a")
            },
            extraSmallTimeFormat: function(t) {
                return t.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "t")
            },
            hourFormat: function(t) {
                return t.longDateFormat("LT").replace(":mm", "").replace(/(\Wmm)$/, "").replace(/\s*a$/i, "a")
            },
            noMeridiemTimeFormat: function(t) {
                return t.longDateFormat("LT").replace(/\s*a$/i, "")
            }
        },
        Me = {
            smallDayDateFormat: function(t) {
                return t.isRTL ? "D dd" : "dd D"
            },
            weekFormat: function(t) {
                return t.isRTL ? "w[ " + t.weekNumberTitle + "]" : "[" + t.weekNumberTitle + " ]w"
            },
            smallWeekFormat: function(t) {
                return t.isRTL ? "w[" + t.weekNumberTitle + "]" : "[" + t.weekNumberTitle + "]w"
            }
        };
    Zt.locale("en", Re.englishDefaults), Zt.sourceNormalizers = [], Zt.sourceFetchers = [];
    var Be = {
            dataType: "json",
            cache: !1
        },
        Le = 1;
    Re.prototype.mutateSeg = function(t, e) {
        return this.mutateEvent(t.event, e)
    }, Re.prototype.normalizeEvent = function(t) {}, Re.prototype.spanContainsSpan = function(t, e) {
        var n = t.start.clone().stripZone(),
            i = this.getEventEnd(t).stripZone();
        return e.start >= n && e.end <= i
    }, Re.prototype.getPeerEvents = function(t, e) {
        var n, i, r = this.getEventCache(),
            s = [];
        for (n = 0; n < r.length; n++) i = r[n], e && e._id === i._id || s.push(i);
        return s
    }, Re.prototype.isEventSpanAllowed = function(t, e) {
        var n = e.source || {},
            i = this.opt("eventAllow"),
            r = ut(e.constraint, n.constraint, this.opt("eventConstraint")),
            s = ut(e.overlap, n.overlap, this.opt("eventOverlap"));
        return this.isSpanAllowed(t, r, s, e) && (!i || !1 !== i(t, e))
    }, Re.prototype.isExternalSpanAllowed = function(e, n, i) {
        var r, s;
        return i && (r = t.extend({}, i, n), s = this.expandEvent(this.buildEventFromInput(r))[0]), s ? this.isEventSpanAllowed(e, s) : this.isSelectionSpanAllowed(e)
    }, Re.prototype.isSelectionSpanAllowed = function(t) {
        var e = this.opt("selectAllow");
        return this.isSpanAllowed(t, this.opt("selectConstraint"), this.opt("selectOverlap")) && (!e || !1 !== e(t))
    }, Re.prototype.isSpanAllowed = function(t, e, n, i) {
        var r, s, o, a, l, u;
        if (null != e && (r = this.constraintToEvents(e))) {
            for (s = !1, a = 0; a < r.length; a++)
                if (this.spanContainsSpan(r[a], t)) {
                    s = !0;
                    break
                } if (!s) return !1
        }
        for (o = this.getPeerEvents(t, i), a = 0; a < o.length; a++)
            if (l = o[a], this.eventIntersectsRange(l, t)) {
                if (!1 === n) return !1;
                if ("function" == typeof n && !n(l, i)) return !1;
                if (i) {
                    if (!1 === (u = ut(l.overlap, (l.source || {}).overlap))) return !1;
                    if ("function" == typeof u && !u(i, l)) return !1
                }
            } return !0
    }, Re.prototype.constraintToEvents = function(t) {
        return "businessHours" === t ? this.getCurrentBusinessHourEvents() : "object" == typeof t ? null != t.start ? this.expandEvent(this.buildEventFromInput(t)) : null : this.clientEvents(t)
    }, Re.prototype.eventIntersectsRange = function(t, e) {
        var n = t.start.clone().stripZone(),
            i = this.getEventEnd(t).stripZone();
        return e.start < i && e.end > n
    };
    var Ne = {
        id: "_fcBusinessHours",
        start: "09:00",
        end: "17:00",
        dow: [1, 2, 3, 4, 5],
        rendering: "inverse-background"
    };
    Re.prototype.getCurrentBusinessHourEvents = function(t) {
        return this.computeBusinessHourEvents(t, this.opt("businessHours"))
    }, Re.prototype.computeBusinessHourEvents = function(e, n) {
        return !0 === n ? this.expandBusinessHourEvents(e, [{}]) : t.isPlainObject(n) ? this.expandBusinessHourEvents(e, [n]) : t.isArray(n) ? this.expandBusinessHourEvents(e, n, !0) : []
    }, Re.prototype.expandBusinessHourEvents = function(e, n, i) {
        var r, s, o = this.getView(),
            a = [];
        for (r = 0; r < n.length; r++) s = n[r], i && !s.dow || (s = t.extend({}, Ne, s), e && (s.start = null, s.end = null), a.push.apply(a, this.expandEvent(this.buildEventFromInput(s), o.activeRange.start, o.activeRange.end)));
        return a
    };
    var ze = Zt.BasicView = Ce.extend({
            scroller: null,
            dayGridClass: De,
            dayGrid: null,
            dayNumbersVisible: !1,
            colWeekNumbersVisible: !1,
            cellWeekNumbersVisible: !1,
            weekNumberWidth: null,
            headContainerEl: null,
            headRowEl: null,
            initialize: function() {
                this.dayGrid = this.instantiateDayGrid(), this.scroller = new He({
                    overflowX: "hidden",
                    overflowY: "auto"
                })
            },
            instantiateDayGrid: function() {
                return new(this.dayGridClass.extend(Fe))(this)
            },
            buildRenderRange: function(t, e) {
                var n = Ce.prototype.buildRenderRange.apply(this, arguments);
                return /^(year|month)$/.test(e) && (n.start.startOf("week"), n.end.weekday() && n.end.add(1, "week").startOf("week")), this.trimHiddenDays(n)
            },
            renderDates: function() {
                this.dayGrid.breakOnWeeks = /year|month|week/.test(this.currentRangeUnit), this.dayGrid.setRange(this.renderRange), this.dayNumbersVisible = this.dayGrid.rowCnt > 1, this.opt("weekNumbers") && (this.opt("weekNumbersWithinDays") ? (this.cellWeekNumbersVisible = !0, this.colWeekNumbersVisible = !1) : (this.cellWeekNumbersVisible = !1, this.colWeekNumbersVisible = !0)), this.dayGrid.numbersVisible = this.dayNumbersVisible || this.cellWeekNumbersVisible || this.colWeekNumbersVisible, this.el.addClass("fc-basic-view").html(this.renderSkeletonHtml()), this.renderHead(), this.scroller.render();
                var e = this.scroller.el.addClass("fc-day-grid-container"),
                    n = t('<div class="fc-day-grid" />').appendTo(e);
                this.el.find(".fc-body > tr > td").append(e), this.dayGrid.setElement(n), this.dayGrid.renderDates(this.hasRigidRows())
            },
            renderHead: function() {
                this.headContainerEl = this.el.find(".fc-head-container").html(this.dayGrid.renderHeadHtml()), this.headRowEl = this.headContainerEl.find(".fc-row")
            },
            unrenderDates: function() {
                this.dayGrid.unrenderDates(), this.dayGrid.removeElement(), this.scroller.destroy()
            },
            renderBusinessHours: function() {
                this.dayGrid.renderBusinessHours()
            },
            unrenderBusinessHours: function() {
                this.dayGrid.unrenderBusinessHours()
            },
            renderSkeletonHtml: function() {
                return '<table><thead class="fc-head"><tr><td class="fc-head-container ' + this.widgetHeaderClass + '"></td></tr></thead><tbody class="fc-body"><tr><td class="' + this.widgetContentClass + '"></td></tr></tbody></table>'
            },
            weekNumberStyleAttr: function() {
                return null !== this.weekNumberWidth ? 'style="width:' + this.weekNumberWidth + 'px"' : ""
            },
            hasRigidRows: function() {
                var t = this.opt("eventLimit");
                return t && "number" != typeof t
            },
            updateWidth: function() {
                this.colWeekNumbersVisible && (this.weekNumberWidth = u(this.el.find(".fc-week-number")))
            },
            setHeight: function(t, e) {
                var n, s, o = this.opt("eventLimit");
                this.scroller.clear(), r(this.headRowEl), this.dayGrid.removeSegPopover(), o && "number" == typeof o && this.dayGrid.limitRows(o), n = this.computeScrollerHeight(t), this.setGridHeight(n, e), o && "number" != typeof o && this.dayGrid.limitRows(o), e || (this.scroller.setHeight(n), s = this.scroller.getScrollbarWidths(), (s.left || s.right) && (i(this.headRowEl, s), n = this.computeScrollerHeight(t), this.scroller.setHeight(n)), this.scroller.lockOverflow(s))
            },
            computeScrollerHeight: function(t) {
                return t - h(this.el, this.scroller.el)
            },
            setGridHeight: function(t, e) {
                e ? l(this.dayGrid.rowEls) : a(this.dayGrid.rowEls, t, !0)
            },
            computeInitialDateScroll: function() {
                return {
                    top: 0
                }
            },
            queryDateScroll: function() {
                return {
                    top: this.scroller.getScrollTop()
                }
            },
            applyDateScroll: function(t) {
                void 0 !== t.top && this.scroller.setScrollTop(t.top)
            },
            hitsNeeded: function() {
                this.dayGrid.hitsNeeded()
            },
            hitsNotNeeded: function() {
                this.dayGrid.hitsNotNeeded()
            },
            prepareHits: function() {
                this.dayGrid.prepareHits()
            },
            releaseHits: function() {
                this.dayGrid.releaseHits()
            },
            queryHit: function(t, e) {
                return this.dayGrid.queryHit(t, e)
            },
            getHitSpan: function(t) {
                return this.dayGrid.getHitSpan(t)
            },
            getHitEl: function(t) {
                return this.dayGrid.getHitEl(t)
            },
            renderEvents: function(t) {
                this.dayGrid.renderEvents(t), this.updateHeight()
            },
            getEventSegs: function() {
                return this.dayGrid.getEventSegs()
            },
            unrenderEvents: function() {
                this.dayGrid.unrenderEvents()
            },
            renderDrag: function(t, e) {
                return this.dayGrid.renderDrag(t, e)
            },
            unrenderDrag: function() {
                this.dayGrid.unrenderDrag()
            },
            renderSelection: function(t) {
                this.dayGrid.renderSelection(t)
            },
            unrenderSelection: function() {
                this.dayGrid.unrenderSelection()
            }
        }),
        Fe = {
            renderHeadIntroHtml: function() {
                var t = this.view;
                return t.colWeekNumbersVisible ? '<th class="fc-week-number ' + t.widgetHeaderClass + '" ' + t.weekNumberStyleAttr() + "><span>" + ht(t.opt("weekNumberTitle")) + "</span></th>" : ""
            },
            renderNumberIntroHtml: function(t) {
                var e = this.view,
                    n = this.getCellDate(t, 0);
                return e.colWeekNumbersVisible ? '<td class="fc-week-number" ' + e.weekNumberStyleAttr() + ">" + e.buildGotoAnchorHtml({
                    date: n,
                    type: "week",
                    forceOff: 1 === this.colCnt
                }, n.format("w")) + "</td>" : ""
            },
            renderBgIntroHtml: function() {
                var t = this.view;
                return t.colWeekNumbersVisible ? '<td class="fc-week-number ' + t.widgetContentClass + '" ' + t.weekNumberStyleAttr() + "></td>" : ""
            },
            renderIntroHtml: function() {
                var t = this.view;
                return t.colWeekNumbersVisible ? '<td class="fc-week-number" ' + t.weekNumberStyleAttr() + "></td>" : ""
            }
        },
        Ae = Zt.MonthView = ze.extend({
            buildRenderRange: function() {
                var t, e = ze.prototype.buildRenderRange.apply(this, arguments);
                return this.isFixedWeeks() && (t = Math.ceil(e.end.diff(e.start, "weeks", !0)), e.end.add(6 - t, "weeks")), e
            },
            setGridHeight: function(t, e) {
                e && (t *= this.rowCnt / 6), a(this.dayGrid.rowEls, t, !e)
            },
            isFixedWeeks: function() {
                return this.opt("fixedWeekCount")
            }
        });
    $t.basic = {
        class: ze
    }, $t.basicDay = {
        type: "basic",
        duration: {
            days: 1
        }
    }, $t.basicWeek = {
        type: "basic",
        duration: {
            weeks: 1
        }
    }, $t.month = {
        class: Ae,
        duration: {
            months: 1
        },
        defaults: {
            fixedWeekCount: !0
        }
    };
    var Ge = Zt.AgendaView = Ce.extend({
            scroller: null,
            timeGridClass: Te,
            timeGrid: null,
            dayGridClass: De,
            dayGrid: null,
            axisWidth: null,
            headContainerEl: null,
            noScrollRowEls: null,
            bottomRuleEl: null,
            usesMinMaxTime: !0,
            initialize: function() {
                this.timeGrid = this.instantiateTimeGrid(), this.opt("allDaySlot") && (this.dayGrid = this.instantiateDayGrid()), this.scroller = new He({
                    overflowX: "hidden",
                    overflowY: "auto"
                })
            },
            instantiateTimeGrid: function() {
                return new(this.timeGridClass.extend(Ve))(this)
            },
            instantiateDayGrid: function() {
                return new(this.dayGridClass.extend(Oe))(this)
            },
            renderDates: function() {
                this.timeGrid.setRange(this.renderRange), this.dayGrid && this.dayGrid.setRange(this.renderRange), this.el.addClass("fc-agenda-view").html(this.renderSkeletonHtml()), this.renderHead(), this.scroller.render();
                var e = this.scroller.el.addClass("fc-time-grid-container"),
                    n = t('<div class="fc-time-grid" />').appendTo(e);
                this.el.find(".fc-body > tr > td").append(e), this.timeGrid.setElement(n), this.timeGrid.renderDates(), this.bottomRuleEl = t('<hr class="fc-divider ' + this.widgetHeaderClass + '"/>').appendTo(this.timeGrid.el), this.dayGrid && (this.dayGrid.setElement(this.el.find(".fc-day-grid")), this.dayGrid.renderDates(), this.dayGrid.bottomCoordPadding = this.dayGrid.el.next("hr").outerHeight()), this.noScrollRowEls = this.el.find(".fc-row:not(.fc-scroller *)")
            },
            renderHead: function() {
                this.headContainerEl = this.el.find(".fc-head-container").html(this.timeGrid.renderHeadHtml())
            },
            unrenderDates: function() {
                this.timeGrid.unrenderDates(), this.timeGrid.removeElement(), this.dayGrid && (this.dayGrid.unrenderDates(), this.dayGrid.removeElement()), this.scroller.destroy()
            },
            renderSkeletonHtml: function() {
                return '<table><thead class="fc-head"><tr><td class="fc-head-container ' + this.widgetHeaderClass + '"></td></tr></thead><tbody class="fc-body"><tr><td class="' + this.widgetContentClass + '">' + (this.dayGrid ? '<div class="fc-day-grid"/><hr class="fc-divider ' + this.widgetHeaderClass + '"/>' : "") + "</td></tr></tbody></table>"
            },
            axisStyleAttr: function() {
                return null !== this.axisWidth ? 'style="width:' + this.axisWidth + 'px"' : ""
            },
            renderBusinessHours: function() {
                this.timeGrid.renderBusinessHours(), this.dayGrid && this.dayGrid.renderBusinessHours()
            },
            unrenderBusinessHours: function() {
                this.timeGrid.unrenderBusinessHours(), this.dayGrid && this.dayGrid.unrenderBusinessHours()
            },
            getNowIndicatorUnit: function() {
                return this.timeGrid.getNowIndicatorUnit()
            },
            renderNowIndicator: function(t) {
                this.timeGrid.renderNowIndicator(t)
            },
            unrenderNowIndicator: function() {
                this.timeGrid.unrenderNowIndicator()
            },
            updateSize: function(t) {
                this.timeGrid.updateSize(t), Ce.prototype.updateSize.call(this, t)
            },
            updateWidth: function() {
                this.axisWidth = u(this.el.find(".fc-axis"))
            },
            setHeight: function(t, e) {
                var n, s, o;
                this.bottomRuleEl.hide(), this.scroller.clear(), r(this.noScrollRowEls), this.dayGrid && (this.dayGrid.removeSegPopover(), n = this.opt("eventLimit"), n && "number" != typeof n && (n = Pe), n && this.dayGrid.limitRows(n)), e || (s = this.computeScrollerHeight(t), this.scroller.setHeight(s), o = this.scroller.getScrollbarWidths(), (o.left || o.right) && (i(this.noScrollRowEls, o), s = this.computeScrollerHeight(t), this.scroller.setHeight(s)), this.scroller.lockOverflow(o), this.timeGrid.getTotalSlatHeight() < s && this.bottomRuleEl.show())
            },
            computeScrollerHeight: function(t) {
                return t - h(this.el, this.scroller.el)
            },
            computeInitialDateScroll: function() {
                var t = e.duration(this.opt("scrollTime")),
                    n = this.timeGrid.computeTimeTop(t);
                return n = Math.ceil(n), n && n++, {
                    top: n
                }
            },
            queryDateScroll: function() {
                return {
                    top: this.scroller.getScrollTop()
                }
            },
            applyDateScroll: function(t) {
                void 0 !== t.top && this.scroller.setScrollTop(t.top)
            },
            hitsNeeded: function() {
                this.timeGrid.hitsNeeded(), this.dayGrid && this.dayGrid.hitsNeeded()
            },
            hitsNotNeeded: function() {
                this.timeGrid.hitsNotNeeded(), this.dayGrid && this.dayGrid.hitsNotNeeded()
            },
            prepareHits: function() {
                this.timeGrid.prepareHits(), this.dayGrid && this.dayGrid.prepareHits()
            },
            releaseHits: function() {
                this.timeGrid.releaseHits(), this.dayGrid && this.dayGrid.releaseHits()
            },
            queryHit: function(t, e) {
                var n = this.timeGrid.queryHit(t, e);
                return !n && this.dayGrid && (n = this.dayGrid.queryHit(t, e)), n
            },
            getHitSpan: function(t) {
                return t.component.getHitSpan(t)
            },
            getHitEl: function(t) {
                return t.component.getHitEl(t)
            },
            renderEvents: function(t) {
                var e, n = [],
                    i = [];
                for (e = 0; e < t.length; e++) t[e].allDay ? n.push(t[e]) : i.push(t[e]);
                this.timeGrid.renderEvents(i), this.dayGrid && this.dayGrid.renderEvents(n), this.updateHeight()
            },
            getEventSegs: function() {
                return this.timeGrid.getEventSegs().concat(this.dayGrid ? this.dayGrid.getEventSegs() : [])
            },
            unrenderEvents: function() {
                this.timeGrid.unrenderEvents(), this.dayGrid && this.dayGrid.unrenderEvents()
            },
            renderDrag: function(t, e) {
                return t.start.hasTime() ? this.timeGrid.renderDrag(t, e) : this.dayGrid ? this.dayGrid.renderDrag(t, e) : void 0
            },
            unrenderDrag: function() {
                this.timeGrid.unrenderDrag(), this.dayGrid && this.dayGrid.unrenderDrag()
            },
            renderSelection: function(t) {
                t.start.hasTime() || t.end.hasTime() ? this.timeGrid.renderSelection(t) : this.dayGrid && this.dayGrid.renderSelection(t)
            },
            unrenderSelection: function() {
                this.timeGrid.unrenderSelection(), this.dayGrid && this.dayGrid.unrenderSelection()
            }
        }),
        Ve = {
            renderHeadIntroHtml: function() {
                var t, e = this.view;
                return e.opt("weekNumbers") ? (t = this.start.format(e.opt("smallWeekFormat")), '<th class="fc-axis fc-week-number ' + e.widgetHeaderClass + '" ' + e.axisStyleAttr() + ">" + e.buildGotoAnchorHtml({
                    date: this.start,
                    type: "week",
                    forceOff: this.colCnt > 1
                }, ht(t)) + "</th>") : '<th class="fc-axis ' + e.widgetHeaderClass + '" ' + e.axisStyleAttr() + "></th>"
            },
            renderBgIntroHtml: function() {
                var t = this.view;
                return '<td class="fc-axis ' + t.widgetContentClass + '" ' + t.axisStyleAttr() + "></td>"
            },
            renderIntroHtml: function() {
                return '<td class="fc-axis" ' + this.view.axisStyleAttr() + "></td>"
            }
        },
        Oe = {
            renderBgIntroHtml: function() {
                var t = this.view;
                return '<td class="fc-axis ' + t.widgetContentClass + '" ' + t.axisStyleAttr() + "><span>" + t.getAllDayHtml() + "</span></td>"
            },
            renderIntroHtml: function() {
                return '<td class="fc-axis" ' + this.view.axisStyleAttr() + "></td>"
            }
        },
        Pe = 5,
        _e = [{
            hours: 1
        }, {
            minutes: 30
        }, {
            minutes: 15
        }, {
            seconds: 30
        }, {
            seconds: 15
        }];
    $t.agenda = {
        class: Ge,
        defaults: {
            allDaySlot: !0,
            slotDuration: "00:30:00",
            slotEventOverlap: !0
        }
    }, $t.agendaDay = {
        type: "agenda",
        duration: {
            days: 1
        }
    }, $t.agendaWeek = {
        type: "agenda",
        duration: {
            weeks: 1
        }
    };
    var We = Ce.extend({
            grid: null,
            scroller: null,
            initialize: function() {
                this.grid = new Ye(this), this.scroller = new He({
                    overflowX: "hidden",
                    overflowY: "auto"
                })
            },
            renderSkeleton: function() {
                this.el.addClass("fc-list-view " + this.widgetContentClass), this.scroller.render(), this.scroller.el.appendTo(this.el), this.grid.setElement(this.scroller.scrollEl)
            },
            unrenderSkeleton: function() {
                this.scroller.destroy()
            },
            setHeight: function(t, e) {
                this.scroller.setHeight(this.computeScrollerHeight(t))
            },
            computeScrollerHeight: function(t) {
                return t - h(this.el, this.scroller.el)
            },
            renderDates: function() {
                this.grid.setRange(this.renderRange)
            },
            renderEvents: function(t) {
                this.grid.renderEvents(t)
            },
            unrenderEvents: function() {
                this.grid.unrenderEvents()
            },
            isEventResizable: function(t) {
                return !1
            },
            isEventDraggable: function(t) {
                return !1
            }
        }),
        Ye = be.extend({
            segSelector: ".fc-list-item",
            hasDayInteractions: !1,
            spanToSegs: function(t) {
                for (var e, n = this.view, i = n.renderRange.start.clone().time(0), r = 0, s = []; i < n.renderRange.end;)
                    if (e = z(t, {
                            start: i,
                            end: i.clone().add(1, "day")
                        }), e && (e.dayIndex = r, s.push(e)), i.add(1, "day"), r++, e && !e.isEnd && t.end.hasTime() && t.end < i.clone().add(this.view.nextDayThreshold)) {
                        e.end = t.end.clone(), e.isEnd = !0;
                        break
                    } return s
            },
            computeEventTimeFormat: function() {
                return this.view.opt("mediumTimeFormat")
            },
            handleSegClick: function(e, n) {
                var i;
                be.prototype.handleSegClick.apply(this, arguments), t(n.target).closest("a[href]").length || (i = e.event.url) && !n.isDefaultPrevented() && (window.location.href = i)
            },
            renderFgSegs: function(t) {
                return t = this.renderFgSegEls(t), t.length ? this.renderSegList(t) : this.renderEmptyMessage(), t
            },
            renderEmptyMessage: function() {
                this.el.html('<div class="fc-list-empty-wrap2"><div class="fc-list-empty-wrap1"><div class="fc-list-empty">' + ht(this.view.opt("noEventsMessage")) + "</div></div></div>")
            },
            renderSegList: function(e) {
                var n, i, r, s = this.groupSegsByDay(e),
                    o = t('<table class="fc-list-table"><tbody/></table>'),
                    a = o.find("tbody");
                for (n = 0; n < s.length; n++)
                    if (i = s[n])
                        for (a.append(this.dayHeaderHtml(this.view.renderRange.start.clone().add(n, "days"))), this.sortEventSegs(i), r = 0; r < i.length; r++) a.append(i[r].el);
                this.el.empty().append(o)
            },
            groupSegsByDay: function(t) {
                var e, n, i = [];
                for (e = 0; e < t.length; e++) n = t[e], (i[n.dayIndex] || (i[n.dayIndex] = [])).push(n);
                return i
            },
            dayHeaderHtml: function(t) {
                var e = this.view,
                    n = e.opt("listDayFormat"),
                    i = e.opt("listDayAltFormat");
                return '<tr class="fc-list-heading" data-date="' + t.format("YYYY-MM-DD") + '"><td class="' + e.widgetHeaderClass + '" colspan="3">' + (n ? e.buildGotoAnchorHtml(t, {
                    class: "fc-list-heading-main"
                }, ht(t.format(n))) : "") + (i ? e.buildGotoAnchorHtml(t, {
                    class: "fc-list-heading-alt"
                }, ht(t.format(i))) : "") + "</td></tr>"
            },
            fgSegHtml: function(t) {
                var e, n = this.view,
                    i = ["fc-list-item"].concat(this.getSegCustomClasses(t)),
                    r = this.getSegBackgroundColor(t),
                    s = t.event,
                    o = s.url;
                return e = s.allDay ? n.getAllDayHtml() : n.isMultiDayEvent(s) ? t.isStart || t.isEnd ? ht(this.getEventTimeText(t)) : n.getAllDayHtml() : ht(this.getEventTimeText(s)), o && i.push("fc-has-url"), '<tr class="' + i.join(" ") + '">' + (this.displayEventTime ? '<td class="fc-list-item-time ' + n.widgetContentClass + '">' + (e || "") + "</td>" : "") + '<td class="fc-list-item-marker ' + n.widgetContentClass + '"><span class="fc-event-dot"' + (r ? ' style="background-color:' + r + '"' : "") + '></span></td><td class="fc-list-item-title ' + n.widgetContentClass + '"><a' + (o ? ' href="' + ht(o) + '"' : "") + ">" + ht(t.event.title || "") + "</a></td></tr>"
            }
        });
    return $t.list = {
        class: We,
        buttonTextKey: "list",
        defaults: {
            buttonText: "list",
            listDayFormat: "LL",
            noEventsMessage: "No events to display"
        }
    }, $t.listDay = {
        type: "list",
        duration: {
            days: 1
        },
        defaults: {
            listDayFormat: "dddd"
        }
    }, $t.listWeek = {
        type: "list",
        duration: {
            weeks: 1
        },
        defaults: {
            listDayFormat: "dddd",
            listDayAltFormat: "LL"
        }
    }, $t.listMonth = {
        type: "list",
        duration: {
            month: 1
        },
        defaults: {
            listDayAltFormat: "dddd"
        }
    }, $t.listYear = {
        type: "list",
        duration: {
            year: 1
        },
        defaults: {
            listDayAltFormat: "dddd"
        }
    }, Zt
});