(this.webpackJsonpblackbox = this.webpackJsonpblackbox || []).push([[0], { 11: function (e, t, n) { e.exports = { container: "styles_container__1UYJ6", title: "styles_title__2Wp6F", nextButton: "styles_nextButton__1NvjB" } }, 22: function (e, t, n) { }, 29: function (e, t, n) { }, 30: function (e, t) { function n(e) { var t = new Error("Cannot find module '" + e + "'"); throw t.code = "MODULE_NOT_FOUND", t } n.keys = function () { return [] }, n.resolve = n, e.exports = n, n.id = 30 }, 4: function (e, t, n) { e.exports = { container: "styles_container__qlI-2", title: "styles_title__1gahL", input: "styles_input__1Ewip", joinBtn: "styles_joinBtn__1T4dU", activeBlue: "styles_activeBlue__3TsNb", row: "styles_row__NU_qs" } }, 5: function (e, t, n) { e.exports = { container: "styles_container__91emN", title: "styles_title__jMad3", videosContainer: "styles_videosContainer__10nus", video: "styles_video__2dhSk", hangUpBtn: "styles_hangUpBtn__3hwR9", canvas: "styles_canvas__r3lmI" } }, 50: function (e, t, n) { "use strict"; n.r(t); var c = n(1), a = n.n(c), o = n(20), i = n.n(o), r = (n(29), n(3)), s = n(21), d = n.n(s), l = n(22), u = n.n(l), v = n(23), j = n(24), m = n.n(j), b = n(8), h = n.n(b), O = n(4), f = n.n(O), g = n(0), p = function (e) { var t = e.name, n = e.myPeer, a = e.setMeetingId, o = Object(c.useState)(), i = Object(r.a)(o, 2), s = i[0], d = i[1], l = Object(c.useState)(), u = Object(r.a)(l, 2), j = u[0], b = u[1]; return Object(g.jsxs)("div", { className: f.a.container, children: [Object(g.jsxs)("p", { className: f.a.title, children: ["Hello ", t, "!"] }), Object(g.jsxs)("div", { className: f.a.row, children: [Object(g.jsx)("input", { className: f.a.input, onChange: function (e) { b(e.target.value) }, placeholder: "Email to invite (Optional)" }), Object(g.jsx)("button", { onClick: function () { h.a.post("https://backend-fjkv.onrender.com/meet", { peerID: n.id, name: t, email: j }, { headers: { "Content-Type": "application/json" } }).then((function (e) { var t, n; window.history.replaceState("", "", "https://backend-fjkv.onrender.com/meet/".concat(null === (t = e.data) || void 0 === t ? void 0 : t.id)), a(null === (n = e.data) || void 0 === n ? void 0 : n.id) })).catch((function (e) { return alert(e) })) }, children: "New Meeting" })] }), Object(g.jsxs)("div", { className: f.a.row, children: [Object(g.jsx)("input", { className: f.a.input, onChange: function (e) { d(e.target.value) }, placeholder: "Enter meeting id" }), Object(g.jsx)("button", { className: m()(f.a.joinBtn, Object(v.a)({}, f.a.activeBlue, null === s || void 0 === s ? void 0 : s.length)), onClick: function () { h()("https://backend-fjkv.onrender.com/meet/".concat(s)).then((function (e) { console.log(e), 200 === e.status && (window.history.replaceState("", "", "https://backend-fjkv.onrender.com/meet/".concat(s)), a(s)) })).catch((function (e) { return alert(e.message) })) }, children: "Join" })] })] }) }, _ = n(11), w = n.n(_), y = function (e) { var t = e.setName, n = Object(c.useState)(), a = Object(r.a)(n, 2), o = a[0], i = a[1]; return Object(g.jsxs)("div", { className: w.a.container, children: [Object(g.jsx)("p", { className: w.a.title, children: "Hi! What's your name?" }), Object(g.jsx)("input", { onChange: function (e) { var t; i(null === (t = e.target) || void 0 === t ? void 0 : t.value) }, placeholder: "Your lovely name" }), Object(g.jsx)("button", { onClick: function () { t(o), localStorage.setItem("name", o) }, children: "Go" })] }) }, x = n(6), k = n(5), S = n.n(k), I = function (e) { var t = e.meetingID, n = e.myPeer, a = e.setMeetingId, o = Object(c.useState)(), i = Object(r.a)(o, 2), s = i[0], d = i[1], l = Object(c.useState)(), u = Object(r.a)(l, 2), v = u[0], j = u[1], m = Object(c.useRef)(), b = Object(c.useRef)(), O = Object(c.useRef)(), f = Object(c.useRef)(), p = Object(c.useRef)(), _ = Object(c.useRef)(), w = Object(c.useRef)(), y = Object(c.useRef)([]), k = Object(c.useCallback)((function () { var e, t; window.history.replaceState("", "", "https://blackbox-frontend.onrender.com/"), a(null), null === (e = b.current) || void 0 === e || e.forEach((function (e) { return e.stop() })), null === (t = f.current) || void 0 === t || t.close() }), [a]); Object(c.useEffect)((function () { h()("https://backend-fjkv.onrender.com/meet/".concat(t)).then((function (e) { var t, n; d(null === (t = e.data) || void 0 === t ? void 0 : t.name), m.current = null === (n = e.data) || void 0 === n ? void 0 : n.peerID })).catch((function (e) { 404 == e.response.status && alert("Invalid meeting ID") })) }), [t, a]); var I = Object(c.useCallback)((function () { j(!0); var e = document.getElementById("recording-canvas"), t = document.getElementById("my-video"), n = document.getElementById("his-video"), c = t.getBoundingClientRect(), a = n.getBoundingClientRect(); e.height = Math.max(c.height, a.height), e.width = c.width + a.width; var o = new AudioContext; console.log(O.current); var i = o.createMediaStreamSource(new MediaStream([O.current[0]])), r = o.createMediaStreamSource(new MediaStream([O.current[1]])), s = o.createMediaStreamDestination(); i.connect(s), r.connect(s), _.current = e.captureStream(30), w.current = new MediaRecorder(new MediaStream([].concat(Object(x.a)(_.current.getTracks()), Object(x.a)(s.stream.getTracks()))), { mimeType: "video/webm" }), w.current.ondataavailable = function (e) { var t; (null === (t = e.data) || void 0 === t ? void 0 : t.size) > 0 && (y.current.push(e.data), d()) }, w.current.start(); var d = function () { var e = new Blob(y.current, { type: "video/webm" }), t = URL.createObjectURL(e), n = document.createElement("a"); document.body.appendChild(n), n.style = "display: none", n.href = t, n.download = "recording.webm", n.click(), window.URL.revokeObjectURL(t), y.current = [] }; p.current = setInterval((function () { e.getContext("2d").drawImage(t, 0, 0, 100, 100), e.getContext("2d").drawImage(t, 0, 0, c.width, c.height), e.getContext("2d").drawImage(n, c.width, 0, a.width, a.height) }), 1e3 / 30) }), []); return Object(c.useEffect)((function () { var e = document.getElementById("my-video"), t = document.getElementById("his-video"); navigator.mediaDevices.getUserMedia({ video: !0, audio: !0 }).then((function (o) { b.current = null === o || void 0 === o ? void 0 : o.getTracks(), O.current = null === o || void 0 === o ? void 0 : o.getAudioTracks(), a(e, o), null === n || void 0 === n || n.on("call", (function (e) { f.current = e, e.answer(o), e.on("stream", (function (e) { O.current.find((function (t) { var n; return t.id === (null === (n = e.getAudioTracks()[0]) || void 0 === n ? void 0 : n.id) })) || (O.current = [].concat(Object(x.a)(O.current), Object(x.a)(e.getAudioTracks()))), a(t, e) })), e.on("close", k) })), n.id !== m.current && c(m.current, o) })).catch(console.log); var c = function (e, c) { var o = n.call(e, c); o.on("stream", (function (e) { O.current.find((function (t) { var n; return t.id === (null === (n = e.getAudioTracks()[0]) || void 0 === n ? void 0 : n.id) })) || (O.current = [].concat(Object(x.a)(O.current), Object(x.a)(e.getAudioTracks()))), a(t, e) })), o.on("close", k), f.current = o }, a = function (e, t) { e.srcObject = t, e.addEventListener("loadedmetadata", (function () { e.play() })) } }), [n, k]), Object(g.jsxs)("div", { className: S.a.container, children: [Object(g.jsxs)("p", { className: S.a.title, children: ["Meeting with ", s] }), Object(g.jsxs)("div", { className: S.a.videosContainer, children: [Object(g.jsx)("div", { className: S.a.video, children: Object(g.jsx)("video", { autoPlay: !0, id: "my-video", muted: !0, children: "Your browser does not support the video tag." }) }), Object(g.jsx)("div", { className: S.a.video, children: Object(g.jsx)("video", { autoPlay: !0, id: "his-video", children: "Your browser does not support the video tag." }) })] }), Object(g.jsx)("canvas", { className: S.a.canvas, id: "recording-canvas" }), Object(g.jsx)("button", { className: S.a.hangUpBtn, onClick: k, children: "Hang Up" }), Object(g.jsx)("button", { onClick: v ? function () { var e; j(!1), clearInterval(p.current), null === (e = w.current) || void 0 === e || e.stop() } : I, children: v ? "Stop Recording" : "Start Recording" })] }) }, N = function () { var e, t, n = Object(c.useState)(), a = Object(r.a)(n, 2), o = a[0], i = a[1], s = Object(c.useState)(localStorage.getItem("name")), l = Object(r.a)(s, 2), v = l[0], j = l[1], m = Object(c.useState)(), b = Object(r.a)(m, 2), h = b[0], O = b[1], f = null === (e = window.location) || void 0 === e || null === (t = e.pathname) || void 0 === t ? void 0 : t.match(/(?<=\/meet\/)()\d+$/gm); (null === f || void 0 === f ? void 0 : f.length) && f[0] != o && i(f); var _ = Object(c.useRef)(new d.a({ host: "https://backend-fjkv.onrender.com", path: "peer", port: "80" })); return _.current.on("open", (function (e) { O(_.current) })), Object(g.jsx)("div", { style: u.a.container, children: o ? Object(g.jsx)(I, { myPeer: h, meetingID: o, setMeetingId: i }) : v ? Object(g.jsx)(p, { name: v, myPeer: h, setMeetingId: i }) : Object(g.jsx)(y, { setName: j }) }) }; i.a.render(Object(g.jsx)(a.a.StrictMode, { children: Object(g.jsx)(N, {}) }), document.getElementById("root")) } }, [[50, 1, 2]]]);
//# sourceMappingURL=main.8a21f981.chunk.js.map