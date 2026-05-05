function uv(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Pf = { exports: {} }, Lo = {};
var $2;
function j5() {
  if ($2) return Lo;
  $2 = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), a = /* @__PURE__ */ Symbol.for("react.fragment");
  function i(o, s, u) {
    var f = null;
    if (u !== void 0 && (f = "" + u), s.key !== void 0 && (f = "" + s.key), "key" in s) {
      u = {};
      for (var p in s)
        p !== "key" && (u[p] = s[p]);
    } else u = s;
    return s = u.ref, {
      $$typeof: t,
      type: o,
      key: f,
      ref: s !== void 0 ? s : null,
      props: u
    };
  }
  return Lo.Fragment = a, Lo.jsx = i, Lo.jsxs = i, Lo;
}
var eg;
function z5() {
  return eg || (eg = 1, Pf.exports = j5()), Pf.exports;
}
var m = z5(), Wf = { exports: {} }, Ee = {};
var tg;
function C5() {
  if (tg) return Ee;
  tg = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), i = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), u = /* @__PURE__ */ Symbol.for("react.consumer"), f = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), g = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), y = /* @__PURE__ */ Symbol.for("react.lazy"), w = /* @__PURE__ */ Symbol.for("react.activity"), j = Symbol.iterator;
  function A(S) {
    return S === null || typeof S != "object" ? null : (S = j && S[j] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var x = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, N = Object.assign, k = {};
  function H(S, B, Z) {
    this.props = S, this.context = B, this.refs = k, this.updater = Z || x;
  }
  H.prototype.isReactComponent = {}, H.prototype.setState = function(S, B) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, B, "setState");
  }, H.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function P() {
  }
  P.prototype = H.prototype;
  function V(S, B, Z) {
    this.props = S, this.context = B, this.refs = k, this.updater = Z || x;
  }
  var F = V.prototype = new P();
  F.constructor = V, N(F, H.prototype), F.isPureReactComponent = !0;
  var W = Array.isArray;
  function ee() {
  }
  var Q = { H: null, A: null, T: null, S: null }, Y = Object.prototype.hasOwnProperty;
  function K(S, B, Z) {
    var $ = Z.ref;
    return {
      $$typeof: t,
      type: S,
      key: B,
      ref: $ !== void 0 ? $ : null,
      props: Z
    };
  }
  function Ie(S, B) {
    return K(S.type, B, S.props);
  }
  function je(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }
  function Te(S) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(Z) {
      return B[Z];
    });
  }
  var Me = /\/+/g;
  function ve(S, B) {
    return typeof S == "object" && S !== null && S.key != null ? Te("" + S.key) : B.toString(36);
  }
  function ke(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(ee, ee) : (S.status = "pending", S.then(
          function(B) {
            S.status === "pending" && (S.status = "fulfilled", S.value = B);
          },
          function(B) {
            S.status === "pending" && (S.status = "rejected", S.reason = B);
          }
        )), S.status) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function C(S, B, Z, $, te) {
    var ce = typeof S;
    (ce === "undefined" || ce === "boolean") && (S = null);
    var Se = !1;
    if (S === null) Se = !0;
    else
      switch (ce) {
        case "bigint":
        case "string":
        case "number":
          Se = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case t:
            case a:
              Se = !0;
              break;
            case y:
              return Se = S._init, C(
                Se(S._payload),
                B,
                Z,
                $,
                te
              );
          }
      }
    if (Se)
      return te = te(S), Se = $ === "" ? "." + ve(S, 0) : $, W(te) ? (Z = "", Se != null && (Z = Se.replace(Me, "$&/") + "/"), C(te, B, Z, "", function(mn) {
        return mn;
      })) : te != null && (je(te) && (te = Ie(
        te,
        Z + (te.key == null || S && S.key === te.key ? "" : ("" + te.key).replace(
          Me,
          "$&/"
        ) + "/") + Se
      )), B.push(te)), 1;
    Se = 0;
    var at = $ === "" ? "." : $ + ":";
    if (W(S))
      for (var xe = 0; xe < S.length; xe++)
        $ = S[xe], ce = at + ve($, xe), Se += C(
          $,
          B,
          Z,
          ce,
          te
        );
    else if (xe = A(S), typeof xe == "function")
      for (S = xe.call(S), xe = 0; !($ = S.next()).done; )
        $ = $.value, ce = at + ve($, xe++), Se += C(
          $,
          B,
          Z,
          ce,
          te
        );
    else if (ce === "object") {
      if (typeof S.then == "function")
        return C(
          ke(S),
          B,
          Z,
          $,
          te
        );
      throw B = String(S), Error(
        "Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Se;
  }
  function I(S, B, Z) {
    if (S == null) return S;
    var $ = [], te = 0;
    return C(S, $, "", "", function(ce) {
      return B.call(Z, ce, te++);
    }), $;
  }
  function J(S) {
    if (S._status === -1) {
      var B = S._result;
      B = B(), B.then(
        function(Z) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = Z);
        },
        function(Z) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = Z);
        }
      ), S._status === -1 && (S._status = 0, S._result = B);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var oe = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var B = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(B)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, X = {
    map: I,
    forEach: function(S, B, Z) {
      I(
        S,
        function() {
          B.apply(this, arguments);
        },
        Z
      );
    },
    count: function(S) {
      var B = 0;
      return I(S, function() {
        B++;
      }), B;
    },
    toArray: function(S) {
      return I(S, function(B) {
        return B;
      }) || [];
    },
    only: function(S) {
      if (!je(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return Ee.Activity = w, Ee.Children = X, Ee.Component = H, Ee.Fragment = i, Ee.Profiler = s, Ee.PureComponent = V, Ee.StrictMode = o, Ee.Suspense = g, Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q, Ee.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return Q.H.useMemoCache(S);
    }
  }, Ee.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, Ee.cacheSignal = function() {
    return null;
  }, Ee.cloneElement = function(S, B, Z) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var $ = N({}, S.props), te = S.key;
    if (B != null)
      for (ce in B.key !== void 0 && (te = "" + B.key), B)
        !Y.call(B, ce) || ce === "key" || ce === "__self" || ce === "__source" || ce === "ref" && B.ref === void 0 || ($[ce] = B[ce]);
    var ce = arguments.length - 2;
    if (ce === 1) $.children = Z;
    else if (1 < ce) {
      for (var Se = Array(ce), at = 0; at < ce; at++)
        Se[at] = arguments[at + 2];
      $.children = Se;
    }
    return K(S.type, te, $);
  }, Ee.createContext = function(S) {
    return S = {
      $$typeof: f,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: u,
      _context: S
    }, S;
  }, Ee.createElement = function(S, B, Z) {
    var $, te = {}, ce = null;
    if (B != null)
      for ($ in B.key !== void 0 && (ce = "" + B.key), B)
        Y.call(B, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (te[$] = B[$]);
    var Se = arguments.length - 2;
    if (Se === 1) te.children = Z;
    else if (1 < Se) {
      for (var at = Array(Se), xe = 0; xe < Se; xe++)
        at[xe] = arguments[xe + 2];
      te.children = at;
    }
    if (S && S.defaultProps)
      for ($ in Se = S.defaultProps, Se)
        te[$] === void 0 && (te[$] = Se[$]);
    return K(S, ce, te);
  }, Ee.createRef = function() {
    return { current: null };
  }, Ee.forwardRef = function(S) {
    return { $$typeof: p, render: S };
  }, Ee.isValidElement = je, Ee.lazy = function(S) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: S },
      _init: J
    };
  }, Ee.memo = function(S, B) {
    return {
      $$typeof: v,
      type: S,
      compare: B === void 0 ? null : B
    };
  }, Ee.startTransition = function(S) {
    var B = Q.T, Z = {};
    Q.T = Z;
    try {
      var $ = S(), te = Q.S;
      te !== null && te(Z, $), typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(ee, oe);
    } catch (ce) {
      oe(ce);
    } finally {
      B !== null && Z.types !== null && (B.types = Z.types), Q.T = B;
    }
  }, Ee.unstable_useCacheRefresh = function() {
    return Q.H.useCacheRefresh();
  }, Ee.use = function(S) {
    return Q.H.use(S);
  }, Ee.useActionState = function(S, B, Z) {
    return Q.H.useActionState(S, B, Z);
  }, Ee.useCallback = function(S, B) {
    return Q.H.useCallback(S, B);
  }, Ee.useContext = function(S) {
    return Q.H.useContext(S);
  }, Ee.useDebugValue = function() {
  }, Ee.useDeferredValue = function(S, B) {
    return Q.H.useDeferredValue(S, B);
  }, Ee.useEffect = function(S, B) {
    return Q.H.useEffect(S, B);
  }, Ee.useEffectEvent = function(S) {
    return Q.H.useEffectEvent(S);
  }, Ee.useId = function() {
    return Q.H.useId();
  }, Ee.useImperativeHandle = function(S, B, Z) {
    return Q.H.useImperativeHandle(S, B, Z);
  }, Ee.useInsertionEffect = function(S, B) {
    return Q.H.useInsertionEffect(S, B);
  }, Ee.useLayoutEffect = function(S, B) {
    return Q.H.useLayoutEffect(S, B);
  }, Ee.useMemo = function(S, B) {
    return Q.H.useMemo(S, B);
  }, Ee.useOptimistic = function(S, B) {
    return Q.H.useOptimistic(S, B);
  }, Ee.useReducer = function(S, B, Z) {
    return Q.H.useReducer(S, B, Z);
  }, Ee.useRef = function(S) {
    return Q.H.useRef(S);
  }, Ee.useState = function(S) {
    return Q.H.useState(S);
  }, Ee.useSyncExternalStore = function(S, B, Z) {
    return Q.H.useSyncExternalStore(
      S,
      B,
      Z
    );
  }, Ee.useTransition = function() {
    return Q.H.useTransition();
  }, Ee.version = "19.2.4", Ee;
}
var ng;
function ou() {
  return ng || (ng = 1, Wf.exports = C5()), Wf.exports;
}
var q = ou();
const Rc = /* @__PURE__ */ uv(q);
var $f = { exports: {} }, Uo = {}, eh = { exports: {} }, th = {};
var ag;
function R5() {
  return ag || (ag = 1, (function(t) {
    function a(C, I) {
      var J = C.length;
      C.push(I);
      e: for (; 0 < J; ) {
        var oe = J - 1 >>> 1, X = C[oe];
        if (0 < s(X, I))
          C[oe] = I, C[J] = X, J = oe;
        else break e;
      }
    }
    function i(C) {
      return C.length === 0 ? null : C[0];
    }
    function o(C) {
      if (C.length === 0) return null;
      var I = C[0], J = C.pop();
      if (J !== I) {
        C[0] = J;
        e: for (var oe = 0, X = C.length, S = X >>> 1; oe < S; ) {
          var B = 2 * (oe + 1) - 1, Z = C[B], $ = B + 1, te = C[$];
          if (0 > s(Z, J))
            $ < X && 0 > s(te, Z) ? (C[oe] = te, C[$] = J, oe = $) : (C[oe] = Z, C[B] = J, oe = B);
          else if ($ < X && 0 > s(te, J))
            C[oe] = te, C[$] = J, oe = $;
          else break e;
        }
      }
      return I;
    }
    function s(C, I) {
      var J = C.sortIndex - I.sortIndex;
      return J !== 0 ? J : C.id - I.id;
    }
    if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      t.unstable_now = function() {
        return u.now();
      };
    } else {
      var f = Date, p = f.now();
      t.unstable_now = function() {
        return f.now() - p;
      };
    }
    var g = [], v = [], y = 1, w = null, j = 3, A = !1, x = !1, N = !1, k = !1, H = typeof setTimeout == "function" ? setTimeout : null, P = typeof clearTimeout == "function" ? clearTimeout : null, V = typeof setImmediate < "u" ? setImmediate : null;
    function F(C) {
      for (var I = i(v); I !== null; ) {
        if (I.callback === null) o(v);
        else if (I.startTime <= C)
          o(v), I.sortIndex = I.expirationTime, a(g, I);
        else break;
        I = i(v);
      }
    }
    function W(C) {
      if (N = !1, F(C), !x)
        if (i(g) !== null)
          x = !0, ee || (ee = !0, Te());
        else {
          var I = i(v);
          I !== null && ke(W, I.startTime - C);
        }
    }
    var ee = !1, Q = -1, Y = 5, K = -1;
    function Ie() {
      return k ? !0 : !(t.unstable_now() - K < Y);
    }
    function je() {
      if (k = !1, ee) {
        var C = t.unstable_now();
        K = C;
        var I = !0;
        try {
          e: {
            x = !1, N && (N = !1, P(Q), Q = -1), A = !0;
            var J = j;
            try {
              t: {
                for (F(C), w = i(g); w !== null && !(w.expirationTime > C && Ie()); ) {
                  var oe = w.callback;
                  if (typeof oe == "function") {
                    w.callback = null, j = w.priorityLevel;
                    var X = oe(
                      w.expirationTime <= C
                    );
                    if (C = t.unstable_now(), typeof X == "function") {
                      w.callback = X, F(C), I = !0;
                      break t;
                    }
                    w === i(g) && o(g), F(C);
                  } else o(g);
                  w = i(g);
                }
                if (w !== null) I = !0;
                else {
                  var S = i(v);
                  S !== null && ke(
                    W,
                    S.startTime - C
                  ), I = !1;
                }
              }
              break e;
            } finally {
              w = null, j = J, A = !1;
            }
            I = void 0;
          }
        } finally {
          I ? Te() : ee = !1;
        }
      }
    }
    var Te;
    if (typeof V == "function")
      Te = function() {
        V(je);
      };
    else if (typeof MessageChannel < "u") {
      var Me = new MessageChannel(), ve = Me.port2;
      Me.port1.onmessage = je, Te = function() {
        ve.postMessage(null);
      };
    } else
      Te = function() {
        H(je, 0);
      };
    function ke(C, I) {
      Q = H(function() {
        C(t.unstable_now());
      }, I);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(C) {
      C.callback = null;
    }, t.unstable_forceFrameRate = function(C) {
      0 > C || 125 < C ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Y = 0 < C ? Math.floor(1e3 / C) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return j;
    }, t.unstable_next = function(C) {
      switch (j) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = j;
      }
      var J = j;
      j = I;
      try {
        return C();
      } finally {
        j = J;
      }
    }, t.unstable_requestPaint = function() {
      k = !0;
    }, t.unstable_runWithPriority = function(C, I) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var J = j;
      j = C;
      try {
        return I();
      } finally {
        j = J;
      }
    }, t.unstable_scheduleCallback = function(C, I, J) {
      var oe = t.unstable_now();
      switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? oe + J : oe) : J = oe, C) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return X = J + X, C = {
        id: y++,
        callback: I,
        priorityLevel: C,
        startTime: J,
        expirationTime: X,
        sortIndex: -1
      }, J > oe ? (C.sortIndex = J, a(v, C), i(g) === null && C === i(v) && (N ? (P(Q), Q = -1) : N = !0, ke(W, J - oe))) : (C.sortIndex = X, a(g, C), x || A || (x = !0, ee || (ee = !0, Te()))), C;
    }, t.unstable_shouldYield = Ie, t.unstable_wrapCallback = function(C) {
      var I = j;
      return function() {
        var J = j;
        j = I;
        try {
          return C.apply(this, arguments);
        } finally {
          j = J;
        }
      };
    };
  })(th)), th;
}
var rg;
function O5() {
  return rg || (rg = 1, eh.exports = R5()), eh.exports;
}
var nh = { exports: {} }, Pt = {};
var ig;
function M5() {
  if (ig) return Pt;
  ig = 1;
  var t = ou();
  function a(g) {
    var v = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        v += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return "Minified React error #" + g + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function i() {
  }
  var o = {
    d: {
      f: i,
      r: function() {
        throw Error(a(522));
      },
      D: i,
      C: i,
      L: i,
      m: i,
      X: i,
      S: i,
      M: i
    },
    p: 0,
    findDOMNode: null
  }, s = /* @__PURE__ */ Symbol.for("react.portal");
  function u(g, v, y) {
    var w = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: w == null ? null : "" + w,
      children: g,
      containerInfo: v,
      implementation: y
    };
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(g, v) {
    if (g === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return Pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Pt.createPortal = function(g, v) {
    var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(a(299));
    return u(g, v, null, y);
  }, Pt.flushSync = function(g) {
    var v = f.T, y = o.p;
    try {
      if (f.T = null, o.p = 2, g) return g();
    } finally {
      f.T = v, o.p = y, o.d.f();
    }
  }, Pt.preconnect = function(g, v) {
    typeof g == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, o.d.C(g, v));
  }, Pt.prefetchDNS = function(g) {
    typeof g == "string" && o.d.D(g);
  }, Pt.preinit = function(g, v) {
    if (typeof g == "string" && v && typeof v.as == "string") {
      var y = v.as, w = p(y, v.crossOrigin), j = typeof v.integrity == "string" ? v.integrity : void 0, A = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      y === "style" ? o.d.S(
        g,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: w,
          integrity: j,
          fetchPriority: A
        }
      ) : y === "script" && o.d.X(g, {
        crossOrigin: w,
        integrity: j,
        fetchPriority: A,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, Pt.preinitModule = function(g, v) {
    if (typeof g == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var y = p(
            v.as,
            v.crossOrigin
          );
          o.d.M(g, {
            crossOrigin: y,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && o.d.M(g);
  }, Pt.preload = function(g, v) {
    if (typeof g == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var y = v.as, w = p(y, v.crossOrigin);
      o.d.L(g, y, {
        crossOrigin: w,
        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0,
        type: typeof v.type == "string" ? v.type : void 0,
        fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
        referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
        imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
        imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
        media: typeof v.media == "string" ? v.media : void 0
      });
    }
  }, Pt.preloadModule = function(g, v) {
    if (typeof g == "string")
      if (v) {
        var y = p(v.as, v.crossOrigin);
        o.d.m(g, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: y,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else o.d.m(g);
  }, Pt.requestFormReset = function(g) {
    o.d.r(g);
  }, Pt.unstable_batchedUpdates = function(g, v) {
    return g(v);
  }, Pt.useFormState = function(g, v, y) {
    return f.H.useFormState(g, v, y);
  }, Pt.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Pt.version = "19.2.4", Pt;
}
var lg;
function dv() {
  if (lg) return nh.exports;
  lg = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (a) {
        console.error(a);
      }
  }
  return t(), nh.exports = M5(), nh.exports;
}
var og;
function D5() {
  if (og) return Uo;
  og = 1;
  var t = O5(), a = ou(), i = dv();
  function o(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var r = 2; r < arguments.length; r++)
        n += "&args[]=" + encodeURIComponent(arguments[r]);
    }
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function u(e) {
    var n = e, r = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do
        n = e, (n.flags & 4098) !== 0 && (r = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? r : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (e.tag === 31) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function g(e) {
    if (u(e) !== e)
      throw Error(o(188));
  }
  function v(e) {
    var n = e.alternate;
    if (!n) {
      if (n = u(e), n === null) throw Error(o(188));
      return n !== e ? null : e;
    }
    for (var r = e, l = n; ; ) {
      var c = r.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (l = c.return, l !== null) {
          r = l;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === r) return g(c), e;
          if (d === l) return g(c), n;
          d = d.sibling;
        }
        throw Error(o(188));
      }
      if (r.return !== l.return) r = c, l = d;
      else {
        for (var h = !1, b = c.child; b; ) {
          if (b === r) {
            h = !0, r = c, l = d;
            break;
          }
          if (b === l) {
            h = !0, l = c, r = d;
            break;
          }
          b = b.sibling;
        }
        if (!h) {
          for (b = d.child; b; ) {
            if (b === r) {
              h = !0, r = d, l = c;
              break;
            }
            if (b === l) {
              h = !0, l = d, r = c;
              break;
            }
            b = b.sibling;
          }
          if (!h) throw Error(o(189));
        }
      }
      if (r.alternate !== l) throw Error(o(190));
    }
    if (r.tag !== 3) throw Error(o(188));
    return r.stateNode.current === r ? e : n;
  }
  function y(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (n = y(e), n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var w = Object.assign, j = /* @__PURE__ */ Symbol.for("react.element"), A = /* @__PURE__ */ Symbol.for("react.transitional.element"), x = /* @__PURE__ */ Symbol.for("react.portal"), N = /* @__PURE__ */ Symbol.for("react.fragment"), k = /* @__PURE__ */ Symbol.for("react.strict_mode"), H = /* @__PURE__ */ Symbol.for("react.profiler"), P = /* @__PURE__ */ Symbol.for("react.consumer"), V = /* @__PURE__ */ Symbol.for("react.context"), F = /* @__PURE__ */ Symbol.for("react.forward_ref"), W = /* @__PURE__ */ Symbol.for("react.suspense"), ee = /* @__PURE__ */ Symbol.for("react.suspense_list"), Q = /* @__PURE__ */ Symbol.for("react.memo"), Y = /* @__PURE__ */ Symbol.for("react.lazy"), K = /* @__PURE__ */ Symbol.for("react.activity"), Ie = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), je = Symbol.iterator;
  function Te(e) {
    return e === null || typeof e != "object" ? null : (e = je && e[je] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Me = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ve(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Me ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case N:
        return "Fragment";
      case H:
        return "Profiler";
      case k:
        return "StrictMode";
      case W:
        return "Suspense";
      case ee:
        return "SuspenseList";
      case K:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case x:
          return "Portal";
        case V:
          return e.displayName || "Context";
        case P:
          return (e._context.displayName || "Context") + ".Consumer";
        case F:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Q:
          return n = e.displayName || null, n !== null ? n : ve(e.type) || "Memo";
        case Y:
          n = e._payload, e = e._init;
          try {
            return ve(e(n));
          } catch {
          }
      }
    return null;
  }
  var ke = Array.isArray, C = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, oe = [], X = -1;
  function S(e) {
    return { current: e };
  }
  function B(e) {
    0 > X || (e.current = oe[X], oe[X] = null, X--);
  }
  function Z(e, n) {
    X++, oe[X] = e.current, e.current = n;
  }
  var $ = S(null), te = S(null), ce = S(null), Se = S(null);
  function at(e, n) {
    switch (Z(ce, n), Z(te, e), Z($, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? S2(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = S2(n), e = E2(n, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    B($), Z($, e);
  }
  function xe() {
    B($), B(te), B(ce);
  }
  function mn(e) {
    e.memoizedState !== null && Z(Se, e);
    var n = $.current, r = E2(n, e.type);
    n !== r && (Z(te, e), Z($, r));
  }
  function Ln(e) {
    te.current === e && (B($), B(te)), Se.current === e && (B(Se), Mo._currentValue = J);
  }
  var ye, st;
  function ne(e) {
    if (ye === void 0)
      try {
        throw Error();
      } catch (r) {
        var n = r.stack.trim().match(/\n( *(at )?)/);
        ye = n && n[1] || "", st = -1 < r.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < r.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ye + e + st;
  }
  var ue = !1;
  function ze(e, n) {
    if (!e || ue) return "";
    ue = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var G = function() {
                throw Error();
              };
              if (Object.defineProperty(G.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(G, []);
                } catch (_) {
                  var M = _;
                }
                Reflect.construct(e, [], G);
              } else {
                try {
                  G.call();
                } catch (_) {
                  M = _;
                }
                e.call(G.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (_) {
                M = _;
              }
              (G = e()) && typeof G.catch == "function" && G.catch(function() {
              });
            }
          } catch (_) {
            if (_ && M && typeof _.stack == "string")
              return [_.stack, M.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      c && c.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var d = l.DetermineComponentFrameRoot(), h = d[0], b = d[1];
      if (h && b) {
        var E = h.split(`
`), O = b.split(`
`);
        for (c = l = 0; l < E.length && !E[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; c < O.length && !O[c].includes(
          "DetermineComponentFrameRoot"
        ); )
          c++;
        if (l === E.length || c === O.length)
          for (l = E.length - 1, c = O.length - 1; 1 <= l && 0 <= c && E[l] !== O[c]; )
            c--;
        for (; 1 <= l && 0 <= c; l--, c--)
          if (E[l] !== O[c]) {
            if (l !== 1 || c !== 1)
              do
                if (l--, c--, 0 > c || E[l] !== O[c]) {
                  var L = `
` + E[l].replace(" at new ", " at ");
                  return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), L;
                }
              while (1 <= l && 0 <= c);
            break;
          }
      }
    } finally {
      ue = !1, Error.prepareStackTrace = r;
    }
    return (r = e ? e.displayName || e.name : "") ? ne(r) : "";
  }
  function Ct(e, n) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ne(e.type);
      case 16:
        return ne("Lazy");
      case 13:
        return e.child !== n && n !== null ? ne("Suspense Fallback") : ne("Suspense");
      case 19:
        return ne("SuspenseList");
      case 0:
      case 15:
        return ze(e.type, !1);
      case 11:
        return ze(e.type.render, !1);
      case 1:
        return ze(e.type, !0);
      case 31:
        return ne("Activity");
      default:
        return "";
    }
  }
  function Kt(e) {
    try {
      var n = "", r = null;
      do
        n += Ct(e, r), r = e, e = e.return;
      while (e);
      return n;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var en = Object.prototype.hasOwnProperty, Jt = t.unstable_scheduleCallback, Si = t.unstable_cancelCallback, fs = t.unstable_shouldYield, Ei = t.unstable_requestPaint, Bt = t.unstable_now, _r = t.unstable_getCurrentPriorityLevel, ql = t.unstable_ImmediatePriority, Br = t.unstable_UserBlockingPriority, Ja = t.unstable_NormalPriority, hs = t.unstable_LowPriority, Xl = t.unstable_IdlePriority, ps = t.log, d4 = t.unstable_setDisableYieldValue, Vl = null, gn = null;
  function Pa(e) {
    if (typeof ps == "function" && d4(e), gn && typeof gn.setStrictMode == "function")
      try {
        gn.setStrictMode(Vl, e);
      } catch {
      }
  }
  var bn = Math.clz32 ? Math.clz32 : p4, f4 = Math.log, h4 = Math.LN2;
  function p4(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (f4(e) / h4 | 0) | 0;
  }
  var ms = 256, gs = 262144, bs = 4194304;
  function Lr(e) {
    var n = e & 42;
    if (n !== 0) return n;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function vs(e, n, r) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var c = 0, d = e.suspendedLanes, h = e.pingedLanes;
    e = e.warmLanes;
    var b = l & 134217727;
    return b !== 0 ? (l = b & ~d, l !== 0 ? c = Lr(l) : (h &= b, h !== 0 ? c = Lr(h) : r || (r = b & ~e, r !== 0 && (c = Lr(r))))) : (b = l & ~d, b !== 0 ? c = Lr(b) : h !== 0 ? c = Lr(h) : r || (r = l & ~e, r !== 0 && (c = Lr(r)))), c === 0 ? 0 : n !== 0 && n !== c && (n & d) === 0 && (d = c & -c, r = n & -n, d >= r || d === 32 && (r & 4194048) !== 0) ? n : c;
  }
  function Il(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function m4(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function a1() {
    var e = bs;
    return bs <<= 1, (bs & 62914560) === 0 && (bs = 4194304), e;
  }
  function Uu(e) {
    for (var n = [], r = 0; 31 > r; r++) n.push(e);
    return n;
  }
  function Ql(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function g4(e, n, r, l, c, d) {
    var h = e.pendingLanes;
    e.pendingLanes = r, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= r, e.entangledLanes &= r, e.errorRecoveryDisabledLanes &= r, e.shellSuspendCounter = 0;
    var b = e.entanglements, E = e.expirationTimes, O = e.hiddenUpdates;
    for (r = h & ~r; 0 < r; ) {
      var L = 31 - bn(r), G = 1 << L;
      b[L] = 0, E[L] = -1;
      var M = O[L];
      if (M !== null)
        for (O[L] = null, L = 0; L < M.length; L++) {
          var _ = M[L];
          _ !== null && (_.lane &= -536870913);
        }
      r &= ~G;
    }
    l !== 0 && r1(e, l, 0), d !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(h & ~n));
  }
  function r1(e, n, r) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var l = 31 - bn(n);
    e.entangledLanes |= n, e.entanglements[l] = e.entanglements[l] | 1073741824 | r & 261930;
  }
  function i1(e, n) {
    var r = e.entangledLanes |= n;
    for (e = e.entanglements; r; ) {
      var l = 31 - bn(r), c = 1 << l;
      c & n | e[l] & n && (e[l] |= n), r &= ~c;
    }
  }
  function l1(e, n) {
    var r = n & -n;
    return r = (r & 42) !== 0 ? 1 : Hu(r), (r & (e.suspendedLanes | n)) !== 0 ? 0 : r;
  }
  function Hu(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Gu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function o1() {
    var e = I.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Q2(e.type));
  }
  function s1(e, n) {
    var r = I.p;
    try {
      return I.p = e, n();
    } finally {
      I.p = r;
    }
  }
  var Wa = Math.random().toString(36).slice(2), Xt = "__reactFiber$" + Wa, an = "__reactProps$" + Wa, ki = "__reactContainer$" + Wa, Yu = "__reactEvents$" + Wa, b4 = "__reactListeners$" + Wa, v4 = "__reactHandles$" + Wa, c1 = "__reactResources$" + Wa, Fl = "__reactMarker$" + Wa;
  function qu(e) {
    delete e[Xt], delete e[an], delete e[Yu], delete e[b4], delete e[v4];
  }
  function Ai(e) {
    var n = e[Xt];
    if (n) return n;
    for (var r = e.parentNode; r; ) {
      if (n = r[ki] || r[Xt]) {
        if (r = n.alternate, n.child !== null || r !== null && r.child !== null)
          for (e = C2(e); e !== null; ) {
            if (r = e[Xt]) return r;
            e = C2(e);
          }
        return n;
      }
      e = r, r = e.parentNode;
    }
    return null;
  }
  function Ni(e) {
    if (e = e[Xt] || e[ki]) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function Zl(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Ti(e) {
    var n = e[c1];
    return n || (n = e[c1] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Lt(e) {
    e[Fl] = !0;
  }
  var u1 = /* @__PURE__ */ new Set(), d1 = {};
  function Ur(e, n) {
    ji(e, n), ji(e + "Capture", n);
  }
  function ji(e, n) {
    for (d1[e] = n, e = 0; e < n.length; e++)
      u1.add(n[e]);
  }
  var y4 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), f1 = {}, h1 = {};
  function x4(e) {
    return en.call(h1, e) ? !0 : en.call(f1, e) ? !1 : y4.test(e) ? h1[e] = !0 : (f1[e] = !0, !1);
  }
  function ys(e, n, r) {
    if (x4(n))
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var l = n.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, "" + r);
      }
  }
  function xs(e, n, r) {
    if (r === null) e.removeAttribute(n);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, "" + r);
    }
  }
  function Aa(e, n, r, l) {
    if (l === null) e.removeAttribute(r);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(r);
          return;
      }
      e.setAttributeNS(n, r, "" + l);
    }
  }
  function Un(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function p1(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function w4(e, n, r) {
    var l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      n
    );
    if (!e.hasOwnProperty(n) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(e, n, {
        configurable: !0,
        get: function() {
          return c.call(this);
        },
        set: function(h) {
          r = "" + h, d.call(this, h);
        }
      }), Object.defineProperty(e, n, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return r;
        },
        setValue: function(h) {
          r = "" + h;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[n];
        }
      };
    }
  }
  function Xu(e) {
    if (!e._valueTracker) {
      var n = p1(e) ? "checked" : "value";
      e._valueTracker = w4(
        e,
        n,
        "" + e[n]
      );
    }
  }
  function m1(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var r = n.getValue(), l = "";
    return e && (l = p1(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== r ? (n.setValue(e), !0) : !1;
  }
  function ws(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var S4 = /[\n"\\]/g;
  function Hn(e) {
    return e.replace(
      S4,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Vu(e, n, r, l, c, d, h, b) {
    e.name = "", h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? e.type = h : e.removeAttribute("type"), n != null ? h === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + Un(n)) : e.value !== "" + Un(n) && (e.value = "" + Un(n)) : h !== "submit" && h !== "reset" || e.removeAttribute("value"), n != null ? Iu(e, h, Un(n)) : r != null ? Iu(e, h, Un(r)) : l != null && e.removeAttribute("value"), c == null && d != null && (e.defaultChecked = !!d), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.name = "" + Un(b) : e.removeAttribute("name");
  }
  function g1(e, n, r, l, c, d, h, b) {
    if (d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.type = d), n != null || r != null) {
      if (!(d !== "submit" && d !== "reset" || n != null)) {
        Xu(e);
        return;
      }
      r = r != null ? "" + Un(r) : "", n = n != null ? "" + Un(n) : r, b || n === e.value || (e.value = n), e.defaultValue = n;
    }
    l = l ?? c, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = b ? e.checked : !!l, e.defaultChecked = !!l, h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (e.name = h), Xu(e);
  }
  function Iu(e, n, r) {
    n === "number" && ws(e.ownerDocument) === e || e.defaultValue === "" + r || (e.defaultValue = "" + r);
  }
  function zi(e, n, r, l) {
    if (e = e.options, n) {
      n = {};
      for (var c = 0; c < r.length; c++)
        n["$" + r[c]] = !0;
      for (r = 0; r < e.length; r++)
        c = n.hasOwnProperty("$" + e[r].value), e[r].selected !== c && (e[r].selected = c), c && l && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + Un(r), n = null, c = 0; c < e.length; c++) {
        if (e[c].value === r) {
          e[c].selected = !0, l && (e[c].defaultSelected = !0);
          return;
        }
        n !== null || e[c].disabled || (n = e[c]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function b1(e, n, r) {
    if (n != null && (n = "" + Un(n), n !== e.value && (e.value = n), r == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = r != null ? "" + Un(r) : "";
  }
  function v1(e, n, r, l) {
    if (n == null) {
      if (l != null) {
        if (r != null) throw Error(o(92));
        if (ke(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), n = r;
    }
    r = Un(n), e.defaultValue = r, l = e.textContent, l === r && l !== "" && l !== null && (e.value = l), Xu(e);
  }
  function Ci(e, n) {
    if (n) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var E4 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function y1(e, n, r) {
    var l = n.indexOf("--") === 0;
    r == null || typeof r == "boolean" || r === "" ? l ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : l ? e.setProperty(n, r) : typeof r != "number" || r === 0 || E4.has(n) ? n === "float" ? e.cssFloat = r : e[n] = ("" + r).trim() : e[n] = r + "px";
  }
  function x1(e, n, r) {
    if (n != null && typeof n != "object")
      throw Error(o(62));
    if (e = e.style, r != null) {
      for (var l in r)
        !r.hasOwnProperty(l) || n != null && n.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var c in n)
        l = n[c], n.hasOwnProperty(c) && r[c] !== l && y1(e, c, l);
    } else
      for (var d in n)
        n.hasOwnProperty(d) && y1(e, d, n[d]);
  }
  function Qu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var k4 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), A4 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ss(e) {
    return A4.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Na() {
  }
  var Fu = null;
  function Zu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ri = null, Oi = null;
  function w1(e) {
    var n = Ni(e);
    if (n && (e = n.stateNode)) {
      var r = e[an] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if (Vu(
            e,
            r.value,
            r.defaultValue,
            r.defaultValue,
            r.checked,
            r.defaultChecked,
            r.type,
            r.name
          ), n = r.name, r.type === "radio" && n != null) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (r = r.querySelectorAll(
              'input[name="' + Hn(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < r.length; n++) {
              var l = r[n];
              if (l !== e && l.form === e.form) {
                var c = l[an] || null;
                if (!c) throw Error(o(90));
                Vu(
                  l,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name
                );
              }
            }
            for (n = 0; n < r.length; n++)
              l = r[n], l.form === e.form && m1(l);
          }
          break e;
        case "textarea":
          b1(e, r.value, r.defaultValue);
          break e;
        case "select":
          n = r.value, n != null && zi(e, !!r.multiple, n, !1);
      }
    }
  }
  var Ku = !1;
  function S1(e, n, r) {
    if (Ku) return e(n, r);
    Ku = !0;
    try {
      var l = e(n);
      return l;
    } finally {
      if (Ku = !1, (Ri !== null || Oi !== null) && (cc(), Ri && (n = Ri, e = Oi, Oi = Ri = null, w1(n), e)))
        for (n = 0; n < e.length; n++) w1(e[n]);
    }
  }
  function Kl(e, n) {
    var r = e.stateNode;
    if (r === null) return null;
    var l = r[an] || null;
    if (l === null) return null;
    r = l[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function")
      throw Error(
        o(231, n, typeof r)
      );
    return r;
  }
  var Ta = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ju = !1;
  if (Ta)
    try {
      var Jl = {};
      Object.defineProperty(Jl, "passive", {
        get: function() {
          Ju = !0;
        }
      }), window.addEventListener("test", Jl, Jl), window.removeEventListener("test", Jl, Jl);
    } catch {
      Ju = !1;
    }
  var $a = null, Pu = null, Es = null;
  function E1() {
    if (Es) return Es;
    var e, n = Pu, r = n.length, l, c = "value" in $a ? $a.value : $a.textContent, d = c.length;
    for (e = 0; e < r && n[e] === c[e]; e++) ;
    var h = r - e;
    for (l = 1; l <= h && n[r - l] === c[d - l]; l++) ;
    return Es = c.slice(e, 1 < l ? 1 - l : void 0);
  }
  function ks(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function As() {
    return !0;
  }
  function k1() {
    return !1;
  }
  function rn(e) {
    function n(r, l, c, d, h) {
      this._reactName = r, this._targetInst = c, this.type = l, this.nativeEvent = d, this.target = h, this.currentTarget = null;
      for (var b in e)
        e.hasOwnProperty(b) && (r = e[b], this[b] = r ? r(d) : d[b]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? As : k1, this.isPropagationStopped = k1, this;
    }
    return w(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = As);
      },
      stopPropagation: function() {
        var r = this.nativeEvent;
        r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = As);
      },
      persist: function() {
      },
      isPersistent: As
    }), n;
  }
  var Hr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ns = rn(Hr), Pl = w({}, Hr, { view: 0, detail: 0 }), N4 = rn(Pl), Wu, $u, Wl, Ts = w({}, Pl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: td,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Wl && (Wl && e.type === "mousemove" ? (Wu = e.screenX - Wl.screenX, $u = e.screenY - Wl.screenY) : $u = Wu = 0, Wl = e), Wu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : $u;
    }
  }), A1 = rn(Ts), T4 = w({}, Ts, { dataTransfer: 0 }), j4 = rn(T4), z4 = w({}, Pl, { relatedTarget: 0 }), ed = rn(z4), C4 = w({}, Hr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), R4 = rn(C4), O4 = w({}, Hr, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), M4 = rn(O4), D4 = w({}, Hr, { data: 0 }), N1 = rn(D4), _4 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, B4 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, L4 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function U4(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = L4[e]) ? !!n[e] : !1;
  }
  function td() {
    return U4;
  }
  var H4 = w({}, Pl, {
    key: function(e) {
      if (e.key) {
        var n = _4[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = ks(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? B4[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: td,
    charCode: function(e) {
      return e.type === "keypress" ? ks(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? ks(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), G4 = rn(H4), Y4 = w({}, Ts, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), T1 = rn(Y4), q4 = w({}, Pl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: td
  }), X4 = rn(q4), V4 = w({}, Hr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), I4 = rn(V4), Q4 = w({}, Ts, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), F4 = rn(Q4), Z4 = w({}, Hr, {
    newState: 0,
    oldState: 0
  }), K4 = rn(Z4), J4 = [9, 13, 27, 32], nd = Ta && "CompositionEvent" in window, $l = null;
  Ta && "documentMode" in document && ($l = document.documentMode);
  var P4 = Ta && "TextEvent" in window && !$l, j1 = Ta && (!nd || $l && 8 < $l && 11 >= $l), z1 = " ", C1 = !1;
  function R1(e, n) {
    switch (e) {
      case "keyup":
        return J4.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function O1(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Mi = !1;
  function W4(e, n) {
    switch (e) {
      case "compositionend":
        return O1(n);
      case "keypress":
        return n.which !== 32 ? null : (C1 = !0, z1);
      case "textInput":
        return e = n.data, e === z1 && C1 ? null : e;
      default:
        return null;
    }
  }
  function $4(e, n) {
    if (Mi)
      return e === "compositionend" || !nd && R1(e, n) ? (e = E1(), Es = Pu = $a = null, Mi = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return j1 && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var ex = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function M1(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!ex[e.type] : n === "textarea";
  }
  function D1(e, n, r, l) {
    Ri ? Oi ? Oi.push(l) : Oi = [l] : Ri = l, n = gc(n, "onChange"), 0 < n.length && (r = new Ns(
      "onChange",
      "change",
      null,
      r,
      l
    ), e.push({ event: r, listeners: n }));
  }
  var eo = null, to = null;
  function tx(e) {
    g2(e, 0);
  }
  function js(e) {
    var n = Zl(e);
    if (m1(n)) return e;
  }
  function _1(e, n) {
    if (e === "change") return n;
  }
  var B1 = !1;
  if (Ta) {
    var ad;
    if (Ta) {
      var rd = "oninput" in document;
      if (!rd) {
        var L1 = document.createElement("div");
        L1.setAttribute("oninput", "return;"), rd = typeof L1.oninput == "function";
      }
      ad = rd;
    } else ad = !1;
    B1 = ad && (!document.documentMode || 9 < document.documentMode);
  }
  function U1() {
    eo && (eo.detachEvent("onpropertychange", H1), to = eo = null);
  }
  function H1(e) {
    if (e.propertyName === "value" && js(to)) {
      var n = [];
      D1(
        n,
        to,
        e,
        Zu(e)
      ), S1(tx, n);
    }
  }
  function nx(e, n, r) {
    e === "focusin" ? (U1(), eo = n, to = r, eo.attachEvent("onpropertychange", H1)) : e === "focusout" && U1();
  }
  function ax(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return js(to);
  }
  function rx(e, n) {
    if (e === "click") return js(n);
  }
  function ix(e, n) {
    if (e === "input" || e === "change")
      return js(n);
  }
  function lx(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var vn = typeof Object.is == "function" ? Object.is : lx;
  function no(e, n) {
    if (vn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var r = Object.keys(e), l = Object.keys(n);
    if (r.length !== l.length) return !1;
    for (l = 0; l < r.length; l++) {
      var c = r[l];
      if (!en.call(n, c) || !vn(e[c], n[c]))
        return !1;
    }
    return !0;
  }
  function G1(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Y1(e, n) {
    var r = G1(e);
    e = 0;
    for (var l; r; ) {
      if (r.nodeType === 3) {
        if (l = e + r.textContent.length, e <= n && l >= n)
          return { node: r, offset: n - e };
        e = l;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = G1(r);
    }
  }
  function q1(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? q1(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function X1(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = ws(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof n.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = n.contentWindow;
      else break;
      n = ws(e.document);
    }
    return n;
  }
  function id(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var ox = Ta && "documentMode" in document && 11 >= document.documentMode, Di = null, ld = null, ao = null, od = !1;
  function V1(e, n, r) {
    var l = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    od || Di == null || Di !== ws(l) || (l = Di, "selectionStart" in l && id(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), ao && no(ao, l) || (ao = l, l = gc(ld, "onSelect"), 0 < l.length && (n = new Ns(
      "onSelect",
      "select",
      null,
      n,
      r
    ), e.push({ event: n, listeners: l }), n.target = Di)));
  }
  function Gr(e, n) {
    var r = {};
    return r[e.toLowerCase()] = n.toLowerCase(), r["Webkit" + e] = "webkit" + n, r["Moz" + e] = "moz" + n, r;
  }
  var _i = {
    animationend: Gr("Animation", "AnimationEnd"),
    animationiteration: Gr("Animation", "AnimationIteration"),
    animationstart: Gr("Animation", "AnimationStart"),
    transitionrun: Gr("Transition", "TransitionRun"),
    transitionstart: Gr("Transition", "TransitionStart"),
    transitioncancel: Gr("Transition", "TransitionCancel"),
    transitionend: Gr("Transition", "TransitionEnd")
  }, sd = {}, I1 = {};
  Ta && (I1 = document.createElement("div").style, "AnimationEvent" in window || (delete _i.animationend.animation, delete _i.animationiteration.animation, delete _i.animationstart.animation), "TransitionEvent" in window || delete _i.transitionend.transition);
  function Yr(e) {
    if (sd[e]) return sd[e];
    if (!_i[e]) return e;
    var n = _i[e], r;
    for (r in n)
      if (n.hasOwnProperty(r) && r in I1)
        return sd[e] = n[r];
    return e;
  }
  var Q1 = Yr("animationend"), F1 = Yr("animationiteration"), Z1 = Yr("animationstart"), sx = Yr("transitionrun"), cx = Yr("transitionstart"), ux = Yr("transitioncancel"), K1 = Yr("transitionend"), J1 = /* @__PURE__ */ new Map(), cd = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  cd.push("scrollEnd");
  function ta(e, n) {
    J1.set(e, n), Ur(n, [e]);
  }
  var zs = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Gn = [], Bi = 0, ud = 0;
  function Cs() {
    for (var e = Bi, n = ud = Bi = 0; n < e; ) {
      var r = Gn[n];
      Gn[n++] = null;
      var l = Gn[n];
      Gn[n++] = null;
      var c = Gn[n];
      Gn[n++] = null;
      var d = Gn[n];
      if (Gn[n++] = null, l !== null && c !== null) {
        var h = l.pending;
        h === null ? c.next = c : (c.next = h.next, h.next = c), l.pending = c;
      }
      d !== 0 && P1(r, c, d);
    }
  }
  function Rs(e, n, r, l) {
    Gn[Bi++] = e, Gn[Bi++] = n, Gn[Bi++] = r, Gn[Bi++] = l, ud |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function dd(e, n, r, l) {
    return Rs(e, n, r, l), Os(e);
  }
  function qr(e, n) {
    return Rs(e, null, null, n), Os(e);
  }
  function P1(e, n, r) {
    e.lanes |= r;
    var l = e.alternate;
    l !== null && (l.lanes |= r);
    for (var c = !1, d = e.return; d !== null; )
      d.childLanes |= r, l = d.alternate, l !== null && (l.childLanes |= r), d.tag === 22 && (e = d.stateNode, e === null || e._visibility & 1 || (c = !0)), e = d, d = d.return;
    return e.tag === 3 ? (d = e.stateNode, c && n !== null && (c = 31 - bn(r), e = d.hiddenUpdates, l = e[c], l === null ? e[c] = [n] : l.push(n), n.lane = r | 536870912), d) : null;
  }
  function Os(e) {
    if (50 < No)
      throw No = 0, wf = null, Error(o(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Li = {};
  function dx(e, n, r, l) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function yn(e, n, r, l) {
    return new dx(e, n, r, l);
  }
  function fd(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ja(e, n) {
    var r = e.alternate;
    return r === null ? (r = yn(
      e.tag,
      n,
      e.key,
      e.mode
    ), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = n, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 65011712, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, n = e.dependencies, r.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r.refCleanup = e.refCleanup, r;
  }
  function W1(e, n) {
    e.flags &= 65011714;
    var r = e.alternate;
    return r === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, e.type = r.type, n = r.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function Ms(e, n, r, l, c, d) {
    var h = 0;
    if (l = e, typeof e == "function") fd(e) && (h = 1);
    else if (typeof e == "string")
      h = g5(
        e,
        r,
        $.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case K:
          return e = yn(31, r, n, c), e.elementType = K, e.lanes = d, e;
        case N:
          return Xr(r.children, c, d, n);
        case k:
          h = 8, c |= 24;
          break;
        case H:
          return e = yn(12, r, n, c | 2), e.elementType = H, e.lanes = d, e;
        case W:
          return e = yn(13, r, n, c), e.elementType = W, e.lanes = d, e;
        case ee:
          return e = yn(19, r, n, c), e.elementType = ee, e.lanes = d, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case V:
                h = 10;
                break e;
              case P:
                h = 9;
                break e;
              case F:
                h = 11;
                break e;
              case Q:
                h = 14;
                break e;
              case Y:
                h = 16, l = null;
                break e;
            }
          h = 29, r = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return n = yn(h, r, n, c), n.elementType = e, n.type = l, n.lanes = d, n;
  }
  function Xr(e, n, r, l) {
    return e = yn(7, e, l, n), e.lanes = r, e;
  }
  function hd(e, n, r) {
    return e = yn(6, e, null, n), e.lanes = r, e;
  }
  function $1(e) {
    var n = yn(18, null, null, 0);
    return n.stateNode = e, n;
  }
  function pd(e, n, r) {
    return n = yn(
      4,
      e.children !== null ? e.children : [],
      e.key,
      n
    ), n.lanes = r, n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, n;
  }
  var e0 = /* @__PURE__ */ new WeakMap();
  function Yn(e, n) {
    if (typeof e == "object" && e !== null) {
      var r = e0.get(e);
      return r !== void 0 ? r : (n = {
        value: e,
        source: n,
        stack: Kt(n)
      }, e0.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: Kt(n)
    };
  }
  var Ui = [], Hi = 0, Ds = null, ro = 0, qn = [], Xn = 0, er = null, fa = 1, ha = "";
  function za(e, n) {
    Ui[Hi++] = ro, Ui[Hi++] = Ds, Ds = e, ro = n;
  }
  function t0(e, n, r) {
    qn[Xn++] = fa, qn[Xn++] = ha, qn[Xn++] = er, er = e;
    var l = fa;
    e = ha;
    var c = 32 - bn(l) - 1;
    l &= ~(1 << c), r += 1;
    var d = 32 - bn(n) + c;
    if (30 < d) {
      var h = c - c % 5;
      d = (l & (1 << h) - 1).toString(32), l >>= h, c -= h, fa = 1 << 32 - bn(n) + c | r << c | l, ha = d + e;
    } else
      fa = 1 << d | r << c | l, ha = e;
  }
  function md(e) {
    e.return !== null && (za(e, 1), t0(e, 1, 0));
  }
  function gd(e) {
    for (; e === Ds; )
      Ds = Ui[--Hi], Ui[Hi] = null, ro = Ui[--Hi], Ui[Hi] = null;
    for (; e === er; )
      er = qn[--Xn], qn[Xn] = null, ha = qn[--Xn], qn[Xn] = null, fa = qn[--Xn], qn[Xn] = null;
  }
  function n0(e, n) {
    qn[Xn++] = fa, qn[Xn++] = ha, qn[Xn++] = er, fa = n.id, ha = n.overflow, er = e;
  }
  var Vt = null, tt = null, Be = !1, tr = null, Vn = !1, bd = Error(o(519));
  function nr(e) {
    var n = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw io(Yn(n, e)), bd;
  }
  function a0(e) {
    var n = e.stateNode, r = e.type, l = e.memoizedProps;
    switch (n[Xt] = e, n[an] = l, r) {
      case "dialog":
        Oe("cancel", n), Oe("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Oe("load", n);
        break;
      case "video":
      case "audio":
        for (r = 0; r < jo.length; r++)
          Oe(jo[r], n);
        break;
      case "source":
        Oe("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Oe("error", n), Oe("load", n);
        break;
      case "details":
        Oe("toggle", n);
        break;
      case "input":
        Oe("invalid", n), g1(
          n,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        Oe("invalid", n);
        break;
      case "textarea":
        Oe("invalid", n), v1(n, l.value, l.defaultValue, l.children);
    }
    r = l.children, typeof r != "string" && typeof r != "number" && typeof r != "bigint" || n.textContent === "" + r || l.suppressHydrationWarning === !0 || x2(n.textContent, r) ? (l.popover != null && (Oe("beforetoggle", n), Oe("toggle", n)), l.onScroll != null && Oe("scroll", n), l.onScrollEnd != null && Oe("scrollend", n), l.onClick != null && (n.onclick = Na), n = !0) : n = !1, n || nr(e, !0);
  }
  function r0(e) {
    for (Vt = e.return; Vt; )
      switch (Vt.tag) {
        case 5:
        case 31:
        case 13:
          Vn = !1;
          return;
        case 27:
        case 3:
          Vn = !0;
          return;
        default:
          Vt = Vt.return;
      }
  }
  function Gi(e) {
    if (e !== Vt) return !1;
    if (!Be) return r0(e), Be = !0, !1;
    var n = e.tag, r;
    if ((r = n !== 3 && n !== 27) && ((r = n === 5) && (r = e.type, r = !(r !== "form" && r !== "button") || Bf(e.type, e.memoizedProps)), r = !r), r && tt && nr(e), r0(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      tt = z2(e);
    } else if (n === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      tt = z2(e);
    } else
      n === 27 ? (n = tt, gr(e.type) ? (e = Yf, Yf = null, tt = e) : tt = n) : tt = Vt ? Qn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Vr() {
    tt = Vt = null, Be = !1;
  }
  function vd() {
    var e = tr;
    return e !== null && (cn === null ? cn = e : cn.push.apply(
      cn,
      e
    ), tr = null), e;
  }
  function io(e) {
    tr === null ? tr = [e] : tr.push(e);
  }
  var yd = S(null), Ir = null, Ca = null;
  function ar(e, n, r) {
    Z(yd, n._currentValue), n._currentValue = r;
  }
  function Ra(e) {
    e._currentValue = yd.current, B(yd);
  }
  function xd(e, n, r) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, l !== null && (l.childLanes |= n)) : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n), e === r) break;
      e = e.return;
    }
  }
  function wd(e, n, r, l) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var d = c.dependencies;
      if (d !== null) {
        var h = c.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var b = d;
          d = c;
          for (var E = 0; E < n.length; E++)
            if (b.context === n[E]) {
              d.lanes |= r, b = d.alternate, b !== null && (b.lanes |= r), xd(
                d.return,
                r,
                e
              ), l || (h = null);
              break e;
            }
          d = b.next;
        }
      } else if (c.tag === 18) {
        if (h = c.return, h === null) throw Error(o(341));
        h.lanes |= r, d = h.alternate, d !== null && (d.lanes |= r), xd(h, r, e), h = null;
      } else h = c.child;
      if (h !== null) h.return = c;
      else
        for (h = c; h !== null; ) {
          if (h === e) {
            h = null;
            break;
          }
          if (c = h.sibling, c !== null) {
            c.return = h.return, h = c;
            break;
          }
          h = h.return;
        }
      c = h;
    }
  }
  function Yi(e, n, r, l) {
    e = null;
    for (var c = n, d = !1; c !== null; ) {
      if (!d) {
        if ((c.flags & 524288) !== 0) d = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var h = c.alternate;
        if (h === null) throw Error(o(387));
        if (h = h.memoizedProps, h !== null) {
          var b = c.type;
          vn(c.pendingProps.value, h.value) || (e !== null ? e.push(b) : e = [b]);
        }
      } else if (c === Se.current) {
        if (h = c.alternate, h === null) throw Error(o(387));
        h.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(Mo) : e = [Mo]);
      }
      c = c.return;
    }
    e !== null && wd(
      n,
      e,
      r,
      l
    ), n.flags |= 262144;
  }
  function _s(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!vn(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Qr(e) {
    Ir = e, Ca = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function It(e) {
    return i0(Ir, e);
  }
  function Bs(e, n) {
    return Ir === null && Qr(e), i0(e, n);
  }
  function i0(e, n) {
    var r = n._currentValue;
    if (n = { context: n, memoizedValue: r, next: null }, Ca === null) {
      if (e === null) throw Error(o(308));
      Ca = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else Ca = Ca.next = n;
    return r;
  }
  var fx = typeof AbortController < "u" ? AbortController : function() {
    var e = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(r, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      n.aborted = !0, e.forEach(function(r) {
        return r();
      });
    };
  }, hx = t.unstable_scheduleCallback, px = t.unstable_NormalPriority, Et = {
    $$typeof: V,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Sd() {
    return {
      controller: new fx(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function lo(e) {
    e.refCount--, e.refCount === 0 && hx(px, function() {
      e.controller.abort();
    });
  }
  var oo = null, Ed = 0, qi = 0, Xi = null;
  function mx(e, n) {
    if (oo === null) {
      var r = oo = [];
      Ed = 0, qi = Tf(), Xi = {
        status: "pending",
        value: void 0,
        then: function(l) {
          r.push(l);
        }
      };
    }
    return Ed++, n.then(l0, l0), n;
  }
  function l0() {
    if (--Ed === 0 && oo !== null) {
      Xi !== null && (Xi.status = "fulfilled");
      var e = oo;
      oo = null, qi = 0, Xi = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function gx(e, n) {
    var r = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(c) {
        r.push(c);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = n;
        for (var c = 0; c < r.length; c++) (0, r[c])(n);
      },
      function(c) {
        for (l.status = "rejected", l.reason = c, c = 0; c < r.length; c++)
          (0, r[c])(void 0);
      }
    ), l;
  }
  var o0 = C.S;
  C.S = function(e, n) {
    Vm = Bt(), typeof n == "object" && n !== null && typeof n.then == "function" && mx(e, n), o0 !== null && o0(e, n);
  };
  var Fr = S(null);
  function kd() {
    var e = Fr.current;
    return e !== null ? e : $e.pooledCache;
  }
  function Ls(e, n) {
    n === null ? Z(Fr, Fr.current) : Z(Fr, n.pool);
  }
  function s0() {
    var e = kd();
    return e === null ? null : { parent: Et._currentValue, pool: e };
  }
  var Vi = Error(o(460)), Ad = Error(o(474)), Us = Error(o(542)), Hs = { then: function() {
  } };
  function c0(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function u0(e, n, r) {
    switch (r = e[r], r === void 0 ? e.push(n) : r !== n && (n.then(Na, Na), n = r), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, f0(e), e;
      default:
        if (typeof n.status == "string") n.then(Na, Na);
        else {
          if (e = $e, e !== null && 100 < e.shellSuspendCounter)
            throw Error(o(482));
          e = n, e.status = "pending", e.then(
            function(l) {
              if (n.status === "pending") {
                var c = n;
                c.status = "fulfilled", c.value = l;
              }
            },
            function(l) {
              if (n.status === "pending") {
                var c = n;
                c.status = "rejected", c.reason = l;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw e = n.reason, f0(e), e;
        }
        throw Kr = n, Vi;
    }
  }
  function Zr(e) {
    try {
      var n = e._init;
      return n(e._payload);
    } catch (r) {
      throw r !== null && typeof r == "object" && typeof r.then == "function" ? (Kr = r, Vi) : r;
    }
  }
  var Kr = null;
  function d0() {
    if (Kr === null) throw Error(o(459));
    var e = Kr;
    return Kr = null, e;
  }
  function f0(e) {
    if (e === Vi || e === Us)
      throw Error(o(483));
  }
  var Ii = null, so = 0;
  function Gs(e) {
    var n = so;
    return so += 1, Ii === null && (Ii = []), u0(Ii, e, n);
  }
  function co(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function Ys(e, n) {
    throw n.$$typeof === j ? Error(o(525)) : (e = Object.prototype.toString.call(n), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e
      )
    ));
  }
  function h0(e) {
    function n(z, T) {
      if (e) {
        var R = z.deletions;
        R === null ? (z.deletions = [T], z.flags |= 16) : R.push(T);
      }
    }
    function r(z, T) {
      if (!e) return null;
      for (; T !== null; )
        n(z, T), T = T.sibling;
      return null;
    }
    function l(z) {
      for (var T = /* @__PURE__ */ new Map(); z !== null; )
        z.key !== null ? T.set(z.key, z) : T.set(z.index, z), z = z.sibling;
      return T;
    }
    function c(z, T) {
      return z = ja(z, T), z.index = 0, z.sibling = null, z;
    }
    function d(z, T, R) {
      return z.index = R, e ? (R = z.alternate, R !== null ? (R = R.index, R < T ? (z.flags |= 67108866, T) : R) : (z.flags |= 67108866, T)) : (z.flags |= 1048576, T);
    }
    function h(z) {
      return e && z.alternate === null && (z.flags |= 67108866), z;
    }
    function b(z, T, R, U) {
      return T === null || T.tag !== 6 ? (T = hd(R, z.mode, U), T.return = z, T) : (T = c(T, R), T.return = z, T);
    }
    function E(z, T, R, U) {
      var pe = R.type;
      return pe === N ? L(
        z,
        T,
        R.props.children,
        U,
        R.key
      ) : T !== null && (T.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === Y && Zr(pe) === T.type) ? (T = c(T, R.props), co(T, R), T.return = z, T) : (T = Ms(
        R.type,
        R.key,
        R.props,
        null,
        z.mode,
        U
      ), co(T, R), T.return = z, T);
    }
    function O(z, T, R, U) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== R.containerInfo || T.stateNode.implementation !== R.implementation ? (T = pd(R, z.mode, U), T.return = z, T) : (T = c(T, R.children || []), T.return = z, T);
    }
    function L(z, T, R, U, pe) {
      return T === null || T.tag !== 7 ? (T = Xr(
        R,
        z.mode,
        U,
        pe
      ), T.return = z, T) : (T = c(T, R), T.return = z, T);
    }
    function G(z, T, R) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return T = hd(
          "" + T,
          z.mode,
          R
        ), T.return = z, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case A:
            return R = Ms(
              T.type,
              T.key,
              T.props,
              null,
              z.mode,
              R
            ), co(R, T), R.return = z, R;
          case x:
            return T = pd(
              T,
              z.mode,
              R
            ), T.return = z, T;
          case Y:
            return T = Zr(T), G(z, T, R);
        }
        if (ke(T) || Te(T))
          return T = Xr(
            T,
            z.mode,
            R,
            null
          ), T.return = z, T;
        if (typeof T.then == "function")
          return G(z, Gs(T), R);
        if (T.$$typeof === V)
          return G(
            z,
            Bs(z, T),
            R
          );
        Ys(z, T);
      }
      return null;
    }
    function M(z, T, R, U) {
      var pe = T !== null ? T.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return pe !== null ? null : b(z, T, "" + R, U);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case A:
            return R.key === pe ? E(z, T, R, U) : null;
          case x:
            return R.key === pe ? O(z, T, R, U) : null;
          case Y:
            return R = Zr(R), M(z, T, R, U);
        }
        if (ke(R) || Te(R))
          return pe !== null ? null : L(z, T, R, U, null);
        if (typeof R.then == "function")
          return M(
            z,
            T,
            Gs(R),
            U
          );
        if (R.$$typeof === V)
          return M(
            z,
            T,
            Bs(z, R),
            U
          );
        Ys(z, R);
      }
      return null;
    }
    function _(z, T, R, U, pe) {
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return z = z.get(R) || null, b(T, z, "" + U, pe);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case A:
            return z = z.get(
              U.key === null ? R : U.key
            ) || null, E(T, z, U, pe);
          case x:
            return z = z.get(
              U.key === null ? R : U.key
            ) || null, O(T, z, U, pe);
          case Y:
            return U = Zr(U), _(
              z,
              T,
              R,
              U,
              pe
            );
        }
        if (ke(U) || Te(U))
          return z = z.get(R) || null, L(T, z, U, pe, null);
        if (typeof U.then == "function")
          return _(
            z,
            T,
            R,
            Gs(U),
            pe
          );
        if (U.$$typeof === V)
          return _(
            z,
            T,
            R,
            Bs(T, U),
            pe
          );
        Ys(T, U);
      }
      return null;
    }
    function ae(z, T, R, U) {
      for (var pe = null, He = null, se = T, Ne = T = 0, _e = null; se !== null && Ne < R.length; Ne++) {
        se.index > Ne ? (_e = se, se = null) : _e = se.sibling;
        var Ge = M(
          z,
          se,
          R[Ne],
          U
        );
        if (Ge === null) {
          se === null && (se = _e);
          break;
        }
        e && se && Ge.alternate === null && n(z, se), T = d(Ge, T, Ne), He === null ? pe = Ge : He.sibling = Ge, He = Ge, se = _e;
      }
      if (Ne === R.length)
        return r(z, se), Be && za(z, Ne), pe;
      if (se === null) {
        for (; Ne < R.length; Ne++)
          se = G(z, R[Ne], U), se !== null && (T = d(
            se,
            T,
            Ne
          ), He === null ? pe = se : He.sibling = se, He = se);
        return Be && za(z, Ne), pe;
      }
      for (se = l(se); Ne < R.length; Ne++)
        _e = _(
          se,
          z,
          Ne,
          R[Ne],
          U
        ), _e !== null && (e && _e.alternate !== null && se.delete(
          _e.key === null ? Ne : _e.key
        ), T = d(
          _e,
          T,
          Ne
        ), He === null ? pe = _e : He.sibling = _e, He = _e);
      return e && se.forEach(function(wr) {
        return n(z, wr);
      }), Be && za(z, Ne), pe;
    }
    function ge(z, T, R, U) {
      if (R == null) throw Error(o(151));
      for (var pe = null, He = null, se = T, Ne = T = 0, _e = null, Ge = R.next(); se !== null && !Ge.done; Ne++, Ge = R.next()) {
        se.index > Ne ? (_e = se, se = null) : _e = se.sibling;
        var wr = M(z, se, Ge.value, U);
        if (wr === null) {
          se === null && (se = _e);
          break;
        }
        e && se && wr.alternate === null && n(z, se), T = d(wr, T, Ne), He === null ? pe = wr : He.sibling = wr, He = wr, se = _e;
      }
      if (Ge.done)
        return r(z, se), Be && za(z, Ne), pe;
      if (se === null) {
        for (; !Ge.done; Ne++, Ge = R.next())
          Ge = G(z, Ge.value, U), Ge !== null && (T = d(Ge, T, Ne), He === null ? pe = Ge : He.sibling = Ge, He = Ge);
        return Be && za(z, Ne), pe;
      }
      for (se = l(se); !Ge.done; Ne++, Ge = R.next())
        Ge = _(se, z, Ne, Ge.value, U), Ge !== null && (e && Ge.alternate !== null && se.delete(Ge.key === null ? Ne : Ge.key), T = d(Ge, T, Ne), He === null ? pe = Ge : He.sibling = Ge, He = Ge);
      return e && se.forEach(function(T5) {
        return n(z, T5);
      }), Be && za(z, Ne), pe;
    }
    function Pe(z, T, R, U) {
      if (typeof R == "object" && R !== null && R.type === N && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case A:
            e: {
              for (var pe = R.key; T !== null; ) {
                if (T.key === pe) {
                  if (pe = R.type, pe === N) {
                    if (T.tag === 7) {
                      r(
                        z,
                        T.sibling
                      ), U = c(
                        T,
                        R.props.children
                      ), U.return = z, z = U;
                      break e;
                    }
                  } else if (T.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === Y && Zr(pe) === T.type) {
                    r(
                      z,
                      T.sibling
                    ), U = c(T, R.props), co(U, R), U.return = z, z = U;
                    break e;
                  }
                  r(z, T);
                  break;
                } else n(z, T);
                T = T.sibling;
              }
              R.type === N ? (U = Xr(
                R.props.children,
                z.mode,
                U,
                R.key
              ), U.return = z, z = U) : (U = Ms(
                R.type,
                R.key,
                R.props,
                null,
                z.mode,
                U
              ), co(U, R), U.return = z, z = U);
            }
            return h(z);
          case x:
            e: {
              for (pe = R.key; T !== null; ) {
                if (T.key === pe)
                  if (T.tag === 4 && T.stateNode.containerInfo === R.containerInfo && T.stateNode.implementation === R.implementation) {
                    r(
                      z,
                      T.sibling
                    ), U = c(T, R.children || []), U.return = z, z = U;
                    break e;
                  } else {
                    r(z, T);
                    break;
                  }
                else n(z, T);
                T = T.sibling;
              }
              U = pd(R, z.mode, U), U.return = z, z = U;
            }
            return h(z);
          case Y:
            return R = Zr(R), Pe(
              z,
              T,
              R,
              U
            );
        }
        if (ke(R))
          return ae(
            z,
            T,
            R,
            U
          );
        if (Te(R)) {
          if (pe = Te(R), typeof pe != "function") throw Error(o(150));
          return R = pe.call(R), ge(
            z,
            T,
            R,
            U
          );
        }
        if (typeof R.then == "function")
          return Pe(
            z,
            T,
            Gs(R),
            U
          );
        if (R.$$typeof === V)
          return Pe(
            z,
            T,
            Bs(z, R),
            U
          );
        Ys(z, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (R = "" + R, T !== null && T.tag === 6 ? (r(z, T.sibling), U = c(T, R), U.return = z, z = U) : (r(z, T), U = hd(R, z.mode, U), U.return = z, z = U), h(z)) : r(z, T);
    }
    return function(z, T, R, U) {
      try {
        so = 0;
        var pe = Pe(
          z,
          T,
          R,
          U
        );
        return Ii = null, pe;
      } catch (se) {
        if (se === Vi || se === Us) throw se;
        var He = yn(29, se, null, z.mode);
        return He.lanes = U, He.return = z, He;
      }
    };
  }
  var Jr = h0(!0), p0 = h0(!1), rr = !1;
  function Nd(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Td(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function ir(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function lr(e, n, r) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (qe & 2) !== 0) {
      var c = l.pending;
      return c === null ? n.next = n : (n.next = c.next, c.next = n), l.pending = n, n = Os(e), P1(e, null, r), n;
    }
    return Rs(e, l, n, r), Os(e);
  }
  function uo(e, n, r) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (r & 4194048) !== 0)) {
      var l = n.lanes;
      l &= e.pendingLanes, r |= l, n.lanes = r, i1(e, r);
    }
  }
  function jd(e, n) {
    var r = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, r === l)) {
      var c = null, d = null;
      if (r = r.firstBaseUpdate, r !== null) {
        do {
          var h = {
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          };
          d === null ? c = d = h : d = d.next = h, r = r.next;
        } while (r !== null);
        d === null ? c = d = n : d = d.next = n;
      } else c = d = n;
      r = {
        baseState: l.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: d,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = r;
      return;
    }
    e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = n : e.next = n, r.lastBaseUpdate = n;
  }
  var zd = !1;
  function fo() {
    if (zd) {
      var e = Xi;
      if (e !== null) throw e;
    }
  }
  function ho(e, n, r, l) {
    zd = !1;
    var c = e.updateQueue;
    rr = !1;
    var d = c.firstBaseUpdate, h = c.lastBaseUpdate, b = c.shared.pending;
    if (b !== null) {
      c.shared.pending = null;
      var E = b, O = E.next;
      E.next = null, h === null ? d = O : h.next = O, h = E;
      var L = e.alternate;
      L !== null && (L = L.updateQueue, b = L.lastBaseUpdate, b !== h && (b === null ? L.firstBaseUpdate = O : b.next = O, L.lastBaseUpdate = E));
    }
    if (d !== null) {
      var G = c.baseState;
      h = 0, L = O = E = null, b = d;
      do {
        var M = b.lane & -536870913, _ = M !== b.lane;
        if (_ ? (De & M) === M : (l & M) === M) {
          M !== 0 && M === qi && (zd = !0), L !== null && (L = L.next = {
            lane: 0,
            tag: b.tag,
            payload: b.payload,
            callback: null,
            next: null
          });
          e: {
            var ae = e, ge = b;
            M = n;
            var Pe = r;
            switch (ge.tag) {
              case 1:
                if (ae = ge.payload, typeof ae == "function") {
                  G = ae.call(Pe, G, M);
                  break e;
                }
                G = ae;
                break e;
              case 3:
                ae.flags = ae.flags & -65537 | 128;
              case 0:
                if (ae = ge.payload, M = typeof ae == "function" ? ae.call(Pe, G, M) : ae, M == null) break e;
                G = w({}, G, M);
                break e;
              case 2:
                rr = !0;
            }
          }
          M = b.callback, M !== null && (e.flags |= 64, _ && (e.flags |= 8192), _ = c.callbacks, _ === null ? c.callbacks = [M] : _.push(M));
        } else
          _ = {
            lane: M,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null
          }, L === null ? (O = L = _, E = G) : L = L.next = _, h |= M;
        if (b = b.next, b === null) {
          if (b = c.shared.pending, b === null)
            break;
          _ = b, b = _.next, _.next = null, c.lastBaseUpdate = _, c.shared.pending = null;
        }
      } while (!0);
      L === null && (E = G), c.baseState = E, c.firstBaseUpdate = O, c.lastBaseUpdate = L, d === null && (c.shared.lanes = 0), dr |= h, e.lanes = h, e.memoizedState = G;
    }
  }
  function m0(e, n) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(n);
  }
  function g0(e, n) {
    var r = e.callbacks;
    if (r !== null)
      for (e.callbacks = null, e = 0; e < r.length; e++)
        m0(r[e], n);
  }
  var Qi = S(null), qs = S(0);
  function b0(e, n) {
    e = Ga, Z(qs, e), Z(Qi, n), Ga = e | n.baseLanes;
  }
  function Cd() {
    Z(qs, Ga), Z(Qi, Qi.current);
  }
  function Rd() {
    Ga = qs.current, B(Qi), B(qs);
  }
  var xn = S(null), In = null;
  function or(e) {
    var n = e.alternate;
    Z(gt, gt.current & 1), Z(xn, e), In === null && (n === null || Qi.current !== null || n.memoizedState !== null) && (In = e);
  }
  function Od(e) {
    Z(gt, gt.current), Z(xn, e), In === null && (In = e);
  }
  function v0(e) {
    e.tag === 22 ? (Z(gt, gt.current), Z(xn, e), In === null && (In = e)) : sr();
  }
  function sr() {
    Z(gt, gt.current), Z(xn, xn.current);
  }
  function wn(e) {
    B(xn), In === e && (In = null), B(gt);
  }
  var gt = S(0);
  function Xs(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var r = n.memoizedState;
        if (r !== null && (r = r.dehydrated, r === null || Hf(r) || Gf(r)))
          return n;
      } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Oa = 0, Ae = null, Ke = null, kt = null, Vs = !1, Fi = !1, Pr = !1, Is = 0, po = 0, Zi = null, bx = 0;
  function ft() {
    throw Error(o(321));
  }
  function Md(e, n) {
    if (n === null) return !1;
    for (var r = 0; r < n.length && r < e.length; r++)
      if (!vn(e[r], n[r])) return !1;
    return !0;
  }
  function Dd(e, n, r, l, c, d) {
    return Oa = d, Ae = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, C.H = e === null || e.memoizedState === null ? tm : Kd, Pr = !1, d = r(l, c), Pr = !1, Fi && (d = x0(
      n,
      r,
      l,
      c
    )), y0(e), d;
  }
  function y0(e) {
    C.H = bo;
    var n = Ke !== null && Ke.next !== null;
    if (Oa = 0, kt = Ke = Ae = null, Vs = !1, po = 0, Zi = null, n) throw Error(o(300));
    e === null || At || (e = e.dependencies, e !== null && _s(e) && (At = !0));
  }
  function x0(e, n, r, l) {
    Ae = e;
    var c = 0;
    do {
      if (Fi && (Zi = null), po = 0, Fi = !1, 25 <= c) throw Error(o(301));
      if (c += 1, kt = Ke = null, e.updateQueue != null) {
        var d = e.updateQueue;
        d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0);
      }
      C.H = nm, d = n(r, l);
    } while (Fi);
    return d;
  }
  function vx() {
    var e = C.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? mo(n) : n, e = e.useState()[0], (Ke !== null ? Ke.memoizedState : null) !== e && (Ae.flags |= 1024), n;
  }
  function _d() {
    var e = Is !== 0;
    return Is = 0, e;
  }
  function Bd(e, n, r) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~r;
  }
  function Ld(e) {
    if (Vs) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      Vs = !1;
    }
    Oa = 0, kt = Ke = Ae = null, Fi = !1, po = Is = 0, Zi = null;
  }
  function tn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return kt === null ? Ae.memoizedState = kt = e : kt = kt.next = e, kt;
  }
  function bt() {
    if (Ke === null) {
      var e = Ae.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ke.next;
    var n = kt === null ? Ae.memoizedState : kt.next;
    if (n !== null)
      kt = n, Ke = e;
    else {
      if (e === null)
        throw Ae.alternate === null ? Error(o(467)) : Error(o(310));
      Ke = e, e = {
        memoizedState: Ke.memoizedState,
        baseState: Ke.baseState,
        baseQueue: Ke.baseQueue,
        queue: Ke.queue,
        next: null
      }, kt === null ? Ae.memoizedState = kt = e : kt = kt.next = e;
    }
    return kt;
  }
  function Qs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function mo(e) {
    var n = po;
    return po += 1, Zi === null && (Zi = []), e = u0(Zi, e, n), n = Ae, (kt === null ? n.memoizedState : kt.next) === null && (n = n.alternate, C.H = n === null || n.memoizedState === null ? tm : Kd), e;
  }
  function Fs(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return mo(e);
      if (e.$$typeof === V) return It(e);
    }
    throw Error(o(438, String(e)));
  }
  function Ud(e) {
    var n = null, r = Ae.updateQueue;
    if (r !== null && (n = r.memoCache), n == null) {
      var l = Ae.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (n = {
        data: l.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), r === null && (r = Qs(), Ae.updateQueue = r), r.memoCache = n, r = n.data[n.index], r === void 0)
      for (r = n.data[n.index] = Array(e), l = 0; l < e; l++)
        r[l] = Ie;
    return n.index++, r;
  }
  function Ma(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Zs(e) {
    var n = bt();
    return Hd(n, Ke, e);
  }
  function Hd(e, n, r) {
    var l = e.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = r;
    var c = e.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var h = c.next;
        c.next = d.next, d.next = h;
      }
      n.baseQueue = c = d, l.pending = null;
    }
    if (d = e.baseState, c === null) e.memoizedState = d;
    else {
      n = c.next;
      var b = h = null, E = null, O = n, L = !1;
      do {
        var G = O.lane & -536870913;
        if (G !== O.lane ? (De & G) === G : (Oa & G) === G) {
          var M = O.revertLane;
          if (M === 0)
            E !== null && (E = E.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null
            }), G === qi && (L = !0);
          else if ((Oa & M) === M) {
            O = O.next, M === qi && (L = !0);
            continue;
          } else
            G = {
              lane: 0,
              revertLane: O.revertLane,
              gesture: null,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null
            }, E === null ? (b = E = G, h = d) : E = E.next = G, Ae.lanes |= M, dr |= M;
          G = O.action, Pr && r(d, G), d = O.hasEagerState ? O.eagerState : r(d, G);
        } else
          M = {
            lane: G,
            revertLane: O.revertLane,
            gesture: O.gesture,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null
          }, E === null ? (b = E = M, h = d) : E = E.next = M, Ae.lanes |= G, dr |= G;
        O = O.next;
      } while (O !== null && O !== n);
      if (E === null ? h = d : E.next = b, !vn(d, e.memoizedState) && (At = !0, L && (r = Xi, r !== null)))
        throw r;
      e.memoizedState = d, e.baseState = h, e.baseQueue = E, l.lastRenderedState = d;
    }
    return c === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Gd(e) {
    var n = bt(), r = n.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = e;
    var l = r.dispatch, c = r.pending, d = n.memoizedState;
    if (c !== null) {
      r.pending = null;
      var h = c = c.next;
      do
        d = e(d, h.action), h = h.next;
      while (h !== c);
      vn(d, n.memoizedState) || (At = !0), n.memoizedState = d, n.baseQueue === null && (n.baseState = d), r.lastRenderedState = d;
    }
    return [d, l];
  }
  function w0(e, n, r) {
    var l = Ae, c = bt(), d = Be;
    if (d) {
      if (r === void 0) throw Error(o(407));
      r = r();
    } else r = n();
    var h = !vn(
      (Ke || c).memoizedState,
      r
    );
    if (h && (c.memoizedState = r, At = !0), c = c.queue, Xd(k0.bind(null, l, c, e), [
      e
    ]), c.getSnapshot !== n || h || kt !== null && kt.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ki(
        9,
        { destroy: void 0 },
        E0.bind(
          null,
          l,
          c,
          r,
          n
        ),
        null
      ), $e === null) throw Error(o(349));
      d || (Oa & 127) !== 0 || S0(l, n, r);
    }
    return r;
  }
  function S0(e, n, r) {
    e.flags |= 16384, e = { getSnapshot: n, value: r }, n = Ae.updateQueue, n === null ? (n = Qs(), Ae.updateQueue = n, n.stores = [e]) : (r = n.stores, r === null ? n.stores = [e] : r.push(e));
  }
  function E0(e, n, r, l) {
    n.value = r, n.getSnapshot = l, A0(n) && N0(e);
  }
  function k0(e, n, r) {
    return r(function() {
      A0(n) && N0(e);
    });
  }
  function A0(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var r = n();
      return !vn(e, r);
    } catch {
      return !0;
    }
  }
  function N0(e) {
    var n = qr(e, 2);
    n !== null && un(n, e, 2);
  }
  function Yd(e) {
    var n = tn();
    if (typeof e == "function") {
      var r = e;
      if (e = r(), Pr) {
        Pa(!0);
        try {
          r();
        } finally {
          Pa(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = e, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ma,
      lastRenderedState: e
    }, n;
  }
  function T0(e, n, r, l) {
    return e.baseState = r, Hd(
      e,
      Ke,
      typeof l == "function" ? l : Ma
    );
  }
  function yx(e, n, r, l, c) {
    if (Ps(e)) throw Error(o(485));
    if (e = n.action, e !== null) {
      var d = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(h) {
          d.listeners.push(h);
        }
      };
      C.T !== null ? r(!0) : d.isTransition = !1, l(d), r = n.pending, r === null ? (d.next = n.pending = d, j0(n, d)) : (d.next = r.next, n.pending = r.next = d);
    }
  }
  function j0(e, n) {
    var r = n.action, l = n.payload, c = e.state;
    if (n.isTransition) {
      var d = C.T, h = {};
      C.T = h;
      try {
        var b = r(c, l), E = C.S;
        E !== null && E(h, b), z0(e, n, b);
      } catch (O) {
        qd(e, n, O);
      } finally {
        d !== null && h.types !== null && (d.types = h.types), C.T = d;
      }
    } else
      try {
        d = r(c, l), z0(e, n, d);
      } catch (O) {
        qd(e, n, O);
      }
  }
  function z0(e, n, r) {
    r !== null && typeof r == "object" && typeof r.then == "function" ? r.then(
      function(l) {
        C0(e, n, l);
      },
      function(l) {
        return qd(e, n, l);
      }
    ) : C0(e, n, r);
  }
  function C0(e, n, r) {
    n.status = "fulfilled", n.value = r, R0(n), e.state = r, n = e.pending, n !== null && (r = n.next, r === n ? e.pending = null : (r = r.next, n.next = r, j0(e, r)));
  }
  function qd(e, n, r) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        n.status = "rejected", n.reason = r, R0(n), n = n.next;
      while (n !== l);
    }
    e.action = null;
  }
  function R0(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function O0(e, n) {
    return n;
  }
  function M0(e, n) {
    if (Be) {
      var r = $e.formState;
      if (r !== null) {
        e: {
          var l = Ae;
          if (Be) {
            if (tt) {
              t: {
                for (var c = tt, d = Vn; c.nodeType !== 8; ) {
                  if (!d) {
                    c = null;
                    break t;
                  }
                  if (c = Qn(
                    c.nextSibling
                  ), c === null) {
                    c = null;
                    break t;
                  }
                }
                d = c.data, c = d === "F!" || d === "F" ? c : null;
              }
              if (c) {
                tt = Qn(
                  c.nextSibling
                ), l = c.data === "F!";
                break e;
              }
            }
            nr(l);
          }
          l = !1;
        }
        l && (n = r[0]);
      }
    }
    return r = tn(), r.memoizedState = r.baseState = n, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: O0,
      lastRenderedState: n
    }, r.queue = l, r = W0.bind(
      null,
      Ae,
      l
    ), l.dispatch = r, l = Yd(!1), d = Zd.bind(
      null,
      Ae,
      !1,
      l.queue
    ), l = tn(), c = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = c, r = yx.bind(
      null,
      Ae,
      c,
      d,
      r
    ), c.dispatch = r, l.memoizedState = e, [n, r, !1];
  }
  function D0(e) {
    var n = bt();
    return _0(n, Ke, e);
  }
  function _0(e, n, r) {
    if (n = Hd(
      e,
      n,
      O0
    )[0], e = Zs(Ma)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var l = mo(n);
      } catch (h) {
        throw h === Vi ? Us : h;
      }
    else l = n;
    n = bt();
    var c = n.queue, d = c.dispatch;
    return r !== n.memoizedState && (Ae.flags |= 2048, Ki(
      9,
      { destroy: void 0 },
      xx.bind(null, c, r),
      null
    )), [l, d, e];
  }
  function xx(e, n) {
    e.action = n;
  }
  function B0(e) {
    var n = bt(), r = Ke;
    if (r !== null)
      return _0(n, r, e);
    bt(), n = n.memoizedState, r = bt();
    var l = r.queue.dispatch;
    return r.memoizedState = e, [n, l, !1];
  }
  function Ki(e, n, r, l) {
    return e = { tag: e, create: r, deps: l, inst: n, next: null }, n = Ae.updateQueue, n === null && (n = Qs(), Ae.updateQueue = n), r = n.lastEffect, r === null ? n.lastEffect = e.next = e : (l = r.next, r.next = e, e.next = l, n.lastEffect = e), e;
  }
  function L0() {
    return bt().memoizedState;
  }
  function Ks(e, n, r, l) {
    var c = tn();
    Ae.flags |= e, c.memoizedState = Ki(
      1 | n,
      { destroy: void 0 },
      r,
      l === void 0 ? null : l
    );
  }
  function Js(e, n, r, l) {
    var c = bt();
    l = l === void 0 ? null : l;
    var d = c.memoizedState.inst;
    Ke !== null && l !== null && Md(l, Ke.memoizedState.deps) ? c.memoizedState = Ki(n, d, r, l) : (Ae.flags |= e, c.memoizedState = Ki(
      1 | n,
      d,
      r,
      l
    ));
  }
  function U0(e, n) {
    Ks(8390656, 8, e, n);
  }
  function Xd(e, n) {
    Js(2048, 8, e, n);
  }
  function wx(e) {
    Ae.flags |= 4;
    var n = Ae.updateQueue;
    if (n === null)
      n = Qs(), Ae.updateQueue = n, n.events = [e];
    else {
      var r = n.events;
      r === null ? n.events = [e] : r.push(e);
    }
  }
  function H0(e) {
    var n = bt().memoizedState;
    return wx({ ref: n, nextImpl: e }), function() {
      if ((qe & 2) !== 0) throw Error(o(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function G0(e, n) {
    return Js(4, 2, e, n);
  }
  function Y0(e, n) {
    return Js(4, 4, e, n);
  }
  function q0(e, n) {
    if (typeof n == "function") {
      e = e();
      var r = n(e);
      return function() {
        typeof r == "function" ? r() : n(null);
      };
    }
    if (n != null)
      return e = e(), n.current = e, function() {
        n.current = null;
      };
  }
  function X0(e, n, r) {
    r = r != null ? r.concat([e]) : null, Js(4, 4, q0.bind(null, n, e), r);
  }
  function Vd() {
  }
  function V0(e, n) {
    var r = bt();
    n = n === void 0 ? null : n;
    var l = r.memoizedState;
    return n !== null && Md(n, l[1]) ? l[0] : (r.memoizedState = [e, n], e);
  }
  function I0(e, n) {
    var r = bt();
    n = n === void 0 ? null : n;
    var l = r.memoizedState;
    if (n !== null && Md(n, l[1]))
      return l[0];
    if (l = e(), Pr) {
      Pa(!0);
      try {
        e();
      } finally {
        Pa(!1);
      }
    }
    return r.memoizedState = [l, n], l;
  }
  function Id(e, n, r) {
    return r === void 0 || (Oa & 1073741824) !== 0 && (De & 261930) === 0 ? e.memoizedState = n : (e.memoizedState = r, e = Qm(), Ae.lanes |= e, dr |= e, r);
  }
  function Q0(e, n, r, l) {
    return vn(r, n) ? r : Qi.current !== null ? (e = Id(e, r, l), vn(e, n) || (At = !0), e) : (Oa & 42) === 0 || (Oa & 1073741824) !== 0 && (De & 261930) === 0 ? (At = !0, e.memoizedState = r) : (e = Qm(), Ae.lanes |= e, dr |= e, n);
  }
  function F0(e, n, r, l, c) {
    var d = I.p;
    I.p = d !== 0 && 8 > d ? d : 8;
    var h = C.T, b = {};
    C.T = b, Zd(e, !1, n, r);
    try {
      var E = c(), O = C.S;
      if (O !== null && O(b, E), E !== null && typeof E == "object" && typeof E.then == "function") {
        var L = gx(
          E,
          l
        );
        go(
          e,
          n,
          L,
          kn(e)
        );
      } else
        go(
          e,
          n,
          l,
          kn(e)
        );
    } catch (G) {
      go(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: G },
        kn()
      );
    } finally {
      I.p = d, h !== null && b.types !== null && (h.types = b.types), C.T = h;
    }
  }
  function Sx() {
  }
  function Qd(e, n, r, l) {
    if (e.tag !== 5) throw Error(o(476));
    var c = Z0(e).queue;
    F0(
      e,
      c,
      n,
      J,
      r === null ? Sx : function() {
        return K0(e), r(l);
      }
    );
  }
  function Z0(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: J,
      baseState: J,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ma,
        lastRenderedState: J
      },
      next: null
    };
    var r = {};
    return n.next = {
      memoizedState: r,
      baseState: r,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ma,
        lastRenderedState: r
      },
      next: null
    }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
  }
  function K0(e) {
    var n = Z0(e);
    n.next === null && (n = e.alternate.memoizedState), go(
      e,
      n.next.queue,
      {},
      kn()
    );
  }
  function Fd() {
    return It(Mo);
  }
  function J0() {
    return bt().memoizedState;
  }
  function P0() {
    return bt().memoizedState;
  }
  function Ex(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var r = kn();
          e = ir(r);
          var l = lr(n, e, r);
          l !== null && (un(l, n, r), uo(l, n, r)), n = { cache: Sd() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function kx(e, n, r) {
    var l = kn();
    r = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ps(e) ? $0(n, r) : (r = dd(e, n, r, l), r !== null && (un(r, e, l), em(r, n, l)));
  }
  function W0(e, n, r) {
    var l = kn();
    go(e, n, r, l);
  }
  function go(e, n, r, l) {
    var c = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ps(e)) $0(n, c);
    else {
      var d = e.alternate;
      if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = n.lastRenderedReducer, d !== null))
        try {
          var h = n.lastRenderedState, b = d(h, r);
          if (c.hasEagerState = !0, c.eagerState = b, vn(b, h))
            return Rs(e, n, c, 0), $e === null && Cs(), !1;
        } catch {
        }
      if (r = dd(e, n, c, l), r !== null)
        return un(r, e, l), em(r, n, l), !0;
    }
    return !1;
  }
  function Zd(e, n, r, l) {
    if (l = {
      lane: 2,
      revertLane: Tf(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ps(e)) {
      if (n) throw Error(o(479));
    } else
      n = dd(
        e,
        r,
        l,
        2
      ), n !== null && un(n, e, 2);
  }
  function Ps(e) {
    var n = e.alternate;
    return e === Ae || n !== null && n === Ae;
  }
  function $0(e, n) {
    Fi = Vs = !0;
    var r = e.pending;
    r === null ? n.next = n : (n.next = r.next, r.next = n), e.pending = n;
  }
  function em(e, n, r) {
    if ((r & 4194048) !== 0) {
      var l = n.lanes;
      l &= e.pendingLanes, r |= l, n.lanes = r, i1(e, r);
    }
  }
  var bo = {
    readContext: It,
    use: Fs,
    useCallback: ft,
    useContext: ft,
    useEffect: ft,
    useImperativeHandle: ft,
    useLayoutEffect: ft,
    useInsertionEffect: ft,
    useMemo: ft,
    useReducer: ft,
    useRef: ft,
    useState: ft,
    useDebugValue: ft,
    useDeferredValue: ft,
    useTransition: ft,
    useSyncExternalStore: ft,
    useId: ft,
    useHostTransitionStatus: ft,
    useFormState: ft,
    useActionState: ft,
    useOptimistic: ft,
    useMemoCache: ft,
    useCacheRefresh: ft
  };
  bo.useEffectEvent = ft;
  var tm = {
    readContext: It,
    use: Fs,
    useCallback: function(e, n) {
      return tn().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: It,
    useEffect: U0,
    useImperativeHandle: function(e, n, r) {
      r = r != null ? r.concat([e]) : null, Ks(
        4194308,
        4,
        q0.bind(null, n, e),
        r
      );
    },
    useLayoutEffect: function(e, n) {
      return Ks(4194308, 4, e, n);
    },
    useInsertionEffect: function(e, n) {
      Ks(4, 2, e, n);
    },
    useMemo: function(e, n) {
      var r = tn();
      n = n === void 0 ? null : n;
      var l = e();
      if (Pr) {
        Pa(!0);
        try {
          e();
        } finally {
          Pa(!1);
        }
      }
      return r.memoizedState = [l, n], l;
    },
    useReducer: function(e, n, r) {
      var l = tn();
      if (r !== void 0) {
        var c = r(n);
        if (Pr) {
          Pa(!0);
          try {
            r(n);
          } finally {
            Pa(!1);
          }
        }
      } else c = n;
      return l.memoizedState = l.baseState = c, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      }, l.queue = e, e = e.dispatch = kx.bind(
        null,
        Ae,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var n = tn();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = Yd(e);
      var n = e.queue, r = W0.bind(null, Ae, n);
      return n.dispatch = r, [e.memoizedState, r];
    },
    useDebugValue: Vd,
    useDeferredValue: function(e, n) {
      var r = tn();
      return Id(r, e, n);
    },
    useTransition: function() {
      var e = Yd(!1);
      return e = F0.bind(
        null,
        Ae,
        e.queue,
        !0,
        !1
      ), tn().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, r) {
      var l = Ae, c = tn();
      if (Be) {
        if (r === void 0)
          throw Error(o(407));
        r = r();
      } else {
        if (r = n(), $e === null)
          throw Error(o(349));
        (De & 127) !== 0 || S0(l, n, r);
      }
      c.memoizedState = r;
      var d = { value: r, getSnapshot: n };
      return c.queue = d, U0(k0.bind(null, l, d, e), [
        e
      ]), l.flags |= 2048, Ki(
        9,
        { destroy: void 0 },
        E0.bind(
          null,
          l,
          d,
          r,
          n
        ),
        null
      ), r;
    },
    useId: function() {
      var e = tn(), n = $e.identifierPrefix;
      if (Be) {
        var r = ha, l = fa;
        r = (l & ~(1 << 32 - bn(l) - 1)).toString(32) + r, n = "_" + n + "R_" + r, r = Is++, 0 < r && (n += "H" + r.toString(32)), n += "_";
      } else
        r = bx++, n = "_" + n + "r_" + r.toString(32) + "_";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: Fd,
    useFormState: M0,
    useActionState: M0,
    useOptimistic: function(e) {
      var n = tn();
      n.memoizedState = n.baseState = e;
      var r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = r, n = Zd.bind(
        null,
        Ae,
        !0,
        r
      ), r.dispatch = n, [e, n];
    },
    useMemoCache: Ud,
    useCacheRefresh: function() {
      return tn().memoizedState = Ex.bind(
        null,
        Ae
      );
    },
    useEffectEvent: function(e) {
      var n = tn(), r = { impl: e };
      return n.memoizedState = r, function() {
        if ((qe & 2) !== 0)
          throw Error(o(440));
        return r.impl.apply(void 0, arguments);
      };
    }
  }, Kd = {
    readContext: It,
    use: Fs,
    useCallback: V0,
    useContext: It,
    useEffect: Xd,
    useImperativeHandle: X0,
    useInsertionEffect: G0,
    useLayoutEffect: Y0,
    useMemo: I0,
    useReducer: Zs,
    useRef: L0,
    useState: function() {
      return Zs(Ma);
    },
    useDebugValue: Vd,
    useDeferredValue: function(e, n) {
      var r = bt();
      return Q0(
        r,
        Ke.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Zs(Ma)[0], n = bt().memoizedState;
      return [
        typeof e == "boolean" ? e : mo(e),
        n
      ];
    },
    useSyncExternalStore: w0,
    useId: J0,
    useHostTransitionStatus: Fd,
    useFormState: D0,
    useActionState: D0,
    useOptimistic: function(e, n) {
      var r = bt();
      return T0(r, Ke, e, n);
    },
    useMemoCache: Ud,
    useCacheRefresh: P0
  };
  Kd.useEffectEvent = H0;
  var nm = {
    readContext: It,
    use: Fs,
    useCallback: V0,
    useContext: It,
    useEffect: Xd,
    useImperativeHandle: X0,
    useInsertionEffect: G0,
    useLayoutEffect: Y0,
    useMemo: I0,
    useReducer: Gd,
    useRef: L0,
    useState: function() {
      return Gd(Ma);
    },
    useDebugValue: Vd,
    useDeferredValue: function(e, n) {
      var r = bt();
      return Ke === null ? Id(r, e, n) : Q0(
        r,
        Ke.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Gd(Ma)[0], n = bt().memoizedState;
      return [
        typeof e == "boolean" ? e : mo(e),
        n
      ];
    },
    useSyncExternalStore: w0,
    useId: J0,
    useHostTransitionStatus: Fd,
    useFormState: B0,
    useActionState: B0,
    useOptimistic: function(e, n) {
      var r = bt();
      return Ke !== null ? T0(r, Ke, e, n) : (r.baseState = e, [e, r.queue.dispatch]);
    },
    useMemoCache: Ud,
    useCacheRefresh: P0
  };
  nm.useEffectEvent = H0;
  function Jd(e, n, r, l) {
    n = e.memoizedState, r = r(l, n), r = r == null ? n : w({}, n, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var Pd = {
    enqueueSetState: function(e, n, r) {
      e = e._reactInternals;
      var l = kn(), c = ir(l);
      c.payload = n, r != null && (c.callback = r), n = lr(e, c, l), n !== null && (un(n, e, l), uo(n, e, l));
    },
    enqueueReplaceState: function(e, n, r) {
      e = e._reactInternals;
      var l = kn(), c = ir(l);
      c.tag = 1, c.payload = n, r != null && (c.callback = r), n = lr(e, c, l), n !== null && (un(n, e, l), uo(n, e, l));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var r = kn(), l = ir(r);
      l.tag = 2, n != null && (l.callback = n), n = lr(e, l, r), n !== null && (un(n, e, r), uo(n, e, r));
    }
  };
  function am(e, n, r, l, c, d, h) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, d, h) : n.prototype && n.prototype.isPureReactComponent ? !no(r, l) || !no(c, d) : !0;
  }
  function rm(e, n, r, l) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(r, l), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(r, l), n.state !== e && Pd.enqueueReplaceState(n, n.state, null);
  }
  function Wr(e, n) {
    var r = n;
    if ("ref" in n) {
      r = {};
      for (var l in n)
        l !== "ref" && (r[l] = n[l]);
    }
    if (e = e.defaultProps) {
      r === n && (r = w({}, r));
      for (var c in e)
        r[c] === void 0 && (r[c] = e[c]);
    }
    return r;
  }
  function im(e) {
    zs(e);
  }
  function lm(e) {
    console.error(e);
  }
  function om(e) {
    zs(e);
  }
  function Ws(e, n) {
    try {
      var r = e.onUncaughtError;
      r(n.value, { componentStack: n.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function sm(e, n, r) {
    try {
      var l = e.onCaughtError;
      l(r.value, {
        componentStack: r.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Wd(e, n, r) {
    return r = ir(r), r.tag = 3, r.payload = { element: null }, r.callback = function() {
      Ws(e, n);
    }, r;
  }
  function cm(e) {
    return e = ir(e), e.tag = 3, e;
  }
  function um(e, n, r, l) {
    var c = r.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var d = l.value;
      e.payload = function() {
        return c(d);
      }, e.callback = function() {
        sm(n, r, l);
      };
    }
    var h = r.stateNode;
    h !== null && typeof h.componentDidCatch == "function" && (e.callback = function() {
      sm(n, r, l), typeof c != "function" && (fr === null ? fr = /* @__PURE__ */ new Set([this]) : fr.add(this));
      var b = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: b !== null ? b : ""
      });
    });
  }
  function Ax(e, n, r, l, c) {
    if (r.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (n = r.alternate, n !== null && Yi(
        n,
        r,
        c,
        !0
      ), r = xn.current, r !== null) {
        switch (r.tag) {
          case 31:
          case 13:
            return In === null ? uc() : r.alternate === null && ht === 0 && (ht = 3), r.flags &= -257, r.flags |= 65536, r.lanes = c, l === Hs ? r.flags |= 16384 : (n = r.updateQueue, n === null ? r.updateQueue = /* @__PURE__ */ new Set([l]) : n.add(l), kf(e, l, c)), !1;
          case 22:
            return r.flags |= 65536, l === Hs ? r.flags |= 16384 : (n = r.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, r.updateQueue = n) : (r = n.retryQueue, r === null ? n.retryQueue = /* @__PURE__ */ new Set([l]) : r.add(l)), kf(e, l, c)), !1;
        }
        throw Error(o(435, r.tag));
      }
      return kf(e, l, c), uc(), !1;
    }
    if (Be)
      return n = xn.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = c, l !== bd && (e = Error(o(422), { cause: l }), io(Yn(e, r)))) : (l !== bd && (n = Error(o(423), {
        cause: l
      }), io(
        Yn(n, r)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, l = Yn(l, r), c = Wd(
        e.stateNode,
        l,
        c
      ), jd(e, c), ht !== 4 && (ht = 2)), !1;
    var d = Error(o(520), { cause: l });
    if (d = Yn(d, r), Ao === null ? Ao = [d] : Ao.push(d), ht !== 4 && (ht = 2), n === null) return !0;
    l = Yn(l, r), r = n;
    do {
      switch (r.tag) {
        case 3:
          return r.flags |= 65536, e = c & -c, r.lanes |= e, e = Wd(r.stateNode, l, e), jd(r, e), !1;
        case 1:
          if (n = r.type, d = r.stateNode, (r.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (fr === null || !fr.has(d))))
            return r.flags |= 65536, c &= -c, r.lanes |= c, c = cm(c), um(
              c,
              e,
              r,
              l
            ), jd(r, c), !1;
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var $d = Error(o(461)), At = !1;
  function Qt(e, n, r, l) {
    n.child = e === null ? p0(n, null, r, l) : Jr(
      n,
      e.child,
      r,
      l
    );
  }
  function dm(e, n, r, l, c) {
    r = r.render;
    var d = n.ref;
    if ("ref" in l) {
      var h = {};
      for (var b in l)
        b !== "ref" && (h[b] = l[b]);
    } else h = l;
    return Qr(n), l = Dd(
      e,
      n,
      r,
      h,
      d,
      c
    ), b = _d(), e !== null && !At ? (Bd(e, n, c), Da(e, n, c)) : (Be && b && md(n), n.flags |= 1, Qt(e, n, l, c), n.child);
  }
  function fm(e, n, r, l, c) {
    if (e === null) {
      var d = r.type;
      return typeof d == "function" && !fd(d) && d.defaultProps === void 0 && r.compare === null ? (n.tag = 15, n.type = d, hm(
        e,
        n,
        d,
        l,
        c
      )) : (e = Ms(
        r.type,
        null,
        l,
        n,
        n.mode,
        c
      ), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (d = e.child, !sf(e, c)) {
      var h = d.memoizedProps;
      if (r = r.compare, r = r !== null ? r : no, r(h, l) && e.ref === n.ref)
        return Da(e, n, c);
    }
    return n.flags |= 1, e = ja(d, l), e.ref = n.ref, e.return = n, n.child = e;
  }
  function hm(e, n, r, l, c) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (no(d, l) && e.ref === n.ref)
        if (At = !1, n.pendingProps = l = d, sf(e, c))
          (e.flags & 131072) !== 0 && (At = !0);
        else
          return n.lanes = e.lanes, Da(e, n, c);
    }
    return ef(
      e,
      n,
      r,
      l,
      c
    );
  }
  function pm(e, n, r, l) {
    var c = l.children, d = e !== null ? e.memoizedState : null;
    if (e === null && n.stateNode === null && (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (d = d !== null ? d.baseLanes | r : r, e !== null) {
          for (l = n.child = e.child, c = 0; l !== null; )
            c = c | l.lanes | l.childLanes, l = l.sibling;
          l = c & ~d;
        } else l = 0, n.child = null;
        return mm(
          e,
          n,
          d,
          r,
          l
        );
      }
      if ((r & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ls(
          n,
          d !== null ? d.cachePool : null
        ), d !== null ? b0(n, d) : Cd(), v0(n);
      else
        return l = n.lanes = 536870912, mm(
          e,
          n,
          d !== null ? d.baseLanes | r : r,
          r,
          l
        );
    } else
      d !== null ? (Ls(n, d.cachePool), b0(n, d), sr(), n.memoizedState = null) : (e !== null && Ls(n, null), Cd(), sr());
    return Qt(e, n, c, r), n.child;
  }
  function vo(e, n) {
    return e !== null && e.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function mm(e, n, r, l, c) {
    var d = kd();
    return d = d === null ? null : { parent: Et._currentValue, pool: d }, n.memoizedState = {
      baseLanes: r,
      cachePool: d
    }, e !== null && Ls(n, null), Cd(), v0(n), e !== null && Yi(e, n, l, !0), n.childLanes = c, null;
  }
  function $s(e, n) {
    return n = tc(
      { mode: n.mode, children: n.children },
      e.mode
    ), n.ref = e.ref, e.child = n, n.return = e, n;
  }
  function gm(e, n, r) {
    return Jr(n, e.child, null, r), e = $s(n, n.pendingProps), e.flags |= 2, wn(n), n.memoizedState = null, e;
  }
  function Nx(e, n, r) {
    var l = n.pendingProps, c = (n.flags & 128) !== 0;
    if (n.flags &= -129, e === null) {
      if (Be) {
        if (l.mode === "hidden")
          return e = $s(n, l), n.lanes = 536870912, vo(null, e);
        if (Od(n), (e = tt) ? (e = j2(
          e,
          Vn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (n.memoizedState = {
          dehydrated: e,
          treeContext: er !== null ? { id: fa, overflow: ha } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = $1(e), r.return = n, n.child = r, Vt = n, tt = null)) : e = null, e === null) throw nr(n);
        return n.lanes = 536870912, null;
      }
      return $s(n, l);
    }
    var d = e.memoizedState;
    if (d !== null) {
      var h = d.dehydrated;
      if (Od(n), c)
        if (n.flags & 256)
          n.flags &= -257, n = gm(
            e,
            n,
            r
          );
        else if (n.memoizedState !== null)
          n.child = e.child, n.flags |= 128, n = null;
        else throw Error(o(558));
      else if (At || Yi(e, n, r, !1), c = (r & e.childLanes) !== 0, At || c) {
        if (l = $e, l !== null && (h = l1(l, r), h !== 0 && h !== d.retryLane))
          throw d.retryLane = h, qr(e, h), un(l, e, h), $d;
        uc(), n = gm(
          e,
          n,
          r
        );
      } else
        e = d.treeContext, tt = Qn(h.nextSibling), Vt = n, Be = !0, tr = null, Vn = !1, e !== null && n0(n, e), n = $s(n, l), n.flags |= 4096;
      return n;
    }
    return e = ja(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = n.ref, n.child = e, e.return = n, e;
  }
  function ec(e, n) {
    var r = n.ref;
    if (r === null)
      e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof r != "function" && typeof r != "object")
        throw Error(o(284));
      (e === null || e.ref !== r) && (n.flags |= 4194816);
    }
  }
  function ef(e, n, r, l, c) {
    return Qr(n), r = Dd(
      e,
      n,
      r,
      l,
      void 0,
      c
    ), l = _d(), e !== null && !At ? (Bd(e, n, c), Da(e, n, c)) : (Be && l && md(n), n.flags |= 1, Qt(e, n, r, c), n.child);
  }
  function bm(e, n, r, l, c, d) {
    return Qr(n), n.updateQueue = null, r = x0(
      n,
      l,
      r,
      c
    ), y0(e), l = _d(), e !== null && !At ? (Bd(e, n, d), Da(e, n, d)) : (Be && l && md(n), n.flags |= 1, Qt(e, n, r, d), n.child);
  }
  function vm(e, n, r, l, c) {
    if (Qr(n), n.stateNode === null) {
      var d = Li, h = r.contextType;
      typeof h == "object" && h !== null && (d = It(h)), d = new r(l, d), n.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = Pd, n.stateNode = d, d._reactInternals = n, d = n.stateNode, d.props = l, d.state = n.memoizedState, d.refs = {}, Nd(n), h = r.contextType, d.context = typeof h == "object" && h !== null ? It(h) : Li, d.state = n.memoizedState, h = r.getDerivedStateFromProps, typeof h == "function" && (Jd(
        n,
        r,
        h,
        l
      ), d.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (h = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), h !== d.state && Pd.enqueueReplaceState(d, d.state, null), ho(n, l, d, c), fo(), d.state = n.memoizedState), typeof d.componentDidMount == "function" && (n.flags |= 4194308), l = !0;
    } else if (e === null) {
      d = n.stateNode;
      var b = n.memoizedProps, E = Wr(r, b);
      d.props = E;
      var O = d.context, L = r.contextType;
      h = Li, typeof L == "object" && L !== null && (h = It(L));
      var G = r.getDerivedStateFromProps;
      L = typeof G == "function" || typeof d.getSnapshotBeforeUpdate == "function", b = n.pendingProps !== b, L || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (b || O !== h) && rm(
        n,
        d,
        l,
        h
      ), rr = !1;
      var M = n.memoizedState;
      d.state = M, ho(n, l, d, c), fo(), O = n.memoizedState, b || M !== O || rr ? (typeof G == "function" && (Jd(
        n,
        r,
        G,
        l
      ), O = n.memoizedState), (E = rr || am(
        n,
        r,
        E,
        l,
        M,
        O,
        h
      )) ? (L || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = l, n.memoizedState = O), d.props = l, d.state = O, d.context = h, l = E) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308), l = !1);
    } else {
      d = n.stateNode, Td(e, n), h = n.memoizedProps, L = Wr(r, h), d.props = L, G = n.pendingProps, M = d.context, O = r.contextType, E = Li, typeof O == "object" && O !== null && (E = It(O)), b = r.getDerivedStateFromProps, (O = typeof b == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (h !== G || M !== E) && rm(
        n,
        d,
        l,
        E
      ), rr = !1, M = n.memoizedState, d.state = M, ho(n, l, d, c), fo();
      var _ = n.memoizedState;
      h !== G || M !== _ || rr || e !== null && e.dependencies !== null && _s(e.dependencies) ? (typeof b == "function" && (Jd(
        n,
        r,
        b,
        l
      ), _ = n.memoizedState), (L = rr || am(
        n,
        r,
        L,
        l,
        M,
        _,
        E
      ) || e !== null && e.dependencies !== null && _s(e.dependencies)) ? (O || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(l, _, E), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(
        l,
        _,
        E
      )), typeof d.componentDidUpdate == "function" && (n.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (n.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (n.flags |= 1024), n.memoizedProps = l, n.memoizedState = _), d.props = l, d.state = _, d.context = E, l = L) : (typeof d.componentDidUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (n.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (n.flags |= 1024), l = !1);
    }
    return d = l, ec(e, n), l = (n.flags & 128) !== 0, d || l ? (d = n.stateNode, r = l && typeof r.getDerivedStateFromError != "function" ? null : d.render(), n.flags |= 1, e !== null && l ? (n.child = Jr(
      n,
      e.child,
      null,
      c
    ), n.child = Jr(
      n,
      null,
      r,
      c
    )) : Qt(e, n, r, c), n.memoizedState = d.state, e = n.child) : e = Da(
      e,
      n,
      c
    ), e;
  }
  function ym(e, n, r, l) {
    return Vr(), n.flags |= 256, Qt(e, n, r, l), n.child;
  }
  var tf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function nf(e) {
    return { baseLanes: e, cachePool: s0() };
  }
  function af(e, n, r) {
    return e = e !== null ? e.childLanes & ~r : 0, n && (e |= En), e;
  }
  function xm(e, n, r) {
    var l = n.pendingProps, c = !1, d = (n.flags & 128) !== 0, h;
    if ((h = d) || (h = e !== null && e.memoizedState === null ? !1 : (gt.current & 2) !== 0), h && (c = !0, n.flags &= -129), h = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (Be) {
        if (c ? or(n) : sr(), (e = tt) ? (e = j2(
          e,
          Vn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (n.memoizedState = {
          dehydrated: e,
          treeContext: er !== null ? { id: fa, overflow: ha } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = $1(e), r.return = n, n.child = r, Vt = n, tt = null)) : e = null, e === null) throw nr(n);
        return Gf(e) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var b = l.children;
      return l = l.fallback, c ? (sr(), c = n.mode, b = tc(
        { mode: "hidden", children: b },
        c
      ), l = Xr(
        l,
        c,
        r,
        null
      ), b.return = n, l.return = n, b.sibling = l, n.child = b, l = n.child, l.memoizedState = nf(r), l.childLanes = af(
        e,
        h,
        r
      ), n.memoizedState = tf, vo(null, l)) : (or(n), rf(n, b));
    }
    var E = e.memoizedState;
    if (E !== null && (b = E.dehydrated, b !== null)) {
      if (d)
        n.flags & 256 ? (or(n), n.flags &= -257, n = lf(
          e,
          n,
          r
        )) : n.memoizedState !== null ? (sr(), n.child = e.child, n.flags |= 128, n = null) : (sr(), b = l.fallback, c = n.mode, l = tc(
          { mode: "visible", children: l.children },
          c
        ), b = Xr(
          b,
          c,
          r,
          null
        ), b.flags |= 2, l.return = n, b.return = n, l.sibling = b, n.child = l, Jr(
          n,
          e.child,
          null,
          r
        ), l = n.child, l.memoizedState = nf(r), l.childLanes = af(
          e,
          h,
          r
        ), n.memoizedState = tf, n = vo(null, l));
      else if (or(n), Gf(b)) {
        if (h = b.nextSibling && b.nextSibling.dataset, h) var O = h.dgst;
        h = O, l = Error(o(419)), l.stack = "", l.digest = h, io({ value: l, source: null, stack: null }), n = lf(
          e,
          n,
          r
        );
      } else if (At || Yi(e, n, r, !1), h = (r & e.childLanes) !== 0, At || h) {
        if (h = $e, h !== null && (l = l1(h, r), l !== 0 && l !== E.retryLane))
          throw E.retryLane = l, qr(e, l), un(h, e, l), $d;
        Hf(b) || uc(), n = lf(
          e,
          n,
          r
        );
      } else
        Hf(b) ? (n.flags |= 192, n.child = e.child, n = null) : (e = E.treeContext, tt = Qn(
          b.nextSibling
        ), Vt = n, Be = !0, tr = null, Vn = !1, e !== null && n0(n, e), n = rf(
          n,
          l.children
        ), n.flags |= 4096);
      return n;
    }
    return c ? (sr(), b = l.fallback, c = n.mode, E = e.child, O = E.sibling, l = ja(E, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = E.subtreeFlags & 65011712, O !== null ? b = ja(
      O,
      b
    ) : (b = Xr(
      b,
      c,
      r,
      null
    ), b.flags |= 2), b.return = n, l.return = n, l.sibling = b, n.child = l, vo(null, l), l = n.child, b = e.child.memoizedState, b === null ? b = nf(r) : (c = b.cachePool, c !== null ? (E = Et._currentValue, c = c.parent !== E ? { parent: E, pool: E } : c) : c = s0(), b = {
      baseLanes: b.baseLanes | r,
      cachePool: c
    }), l.memoizedState = b, l.childLanes = af(
      e,
      h,
      r
    ), n.memoizedState = tf, vo(e.child, l)) : (or(n), r = e.child, e = r.sibling, r = ja(r, {
      mode: "visible",
      children: l.children
    }), r.return = n, r.sibling = null, e !== null && (h = n.deletions, h === null ? (n.deletions = [e], n.flags |= 16) : h.push(e)), n.child = r, n.memoizedState = null, r);
  }
  function rf(e, n) {
    return n = tc(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function tc(e, n) {
    return e = yn(22, e, null, n), e.lanes = 0, e;
  }
  function lf(e, n, r) {
    return Jr(n, e.child, null, r), e = rf(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function wm(e, n, r) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n), xd(e.return, n, r);
  }
  function of(e, n, r, l, c, d) {
    var h = e.memoizedState;
    h === null ? e.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: r,
      tailMode: c,
      treeForkCount: d
    } : (h.isBackwards = n, h.rendering = null, h.renderingStartTime = 0, h.last = l, h.tail = r, h.tailMode = c, h.treeForkCount = d);
  }
  function Sm(e, n, r) {
    var l = n.pendingProps, c = l.revealOrder, d = l.tail;
    l = l.children;
    var h = gt.current, b = (h & 2) !== 0;
    if (b ? (h = h & 1 | 2, n.flags |= 128) : h &= 1, Z(gt, h), Qt(e, n, l, r), l = Be ? ro : 0, !b && e !== null && (e.flags & 128) !== 0)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && wm(e, r, n);
        else if (e.tag === 19)
          wm(e, r, n);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (c) {
      case "forwards":
        for (r = n.child, c = null; r !== null; )
          e = r.alternate, e !== null && Xs(e) === null && (c = r), r = r.sibling;
        r = c, r === null ? (c = n.child, n.child = null) : (c = r.sibling, r.sibling = null), of(
          n,
          !1,
          c,
          r,
          d,
          l
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (r = null, c = n.child, n.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && Xs(e) === null) {
            n.child = c;
            break;
          }
          e = c.sibling, c.sibling = r, r = c, c = e;
        }
        of(
          n,
          !0,
          r,
          null,
          d,
          l
        );
        break;
      case "together":
        of(
          n,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Da(e, n, r) {
    if (e !== null && (n.dependencies = e.dependencies), dr |= n.lanes, (r & n.childLanes) === 0)
      if (e !== null) {
        if (Yi(
          e,
          n,
          r,
          !1
        ), (r & n.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && n.child !== e.child)
      throw Error(o(153));
    if (n.child !== null) {
      for (e = n.child, r = ja(e, e.pendingProps), n.child = r, r.return = n; e.sibling !== null; )
        e = e.sibling, r = r.sibling = ja(e, e.pendingProps), r.return = n;
      r.sibling = null;
    }
    return n.child;
  }
  function sf(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && _s(e)));
  }
  function Tx(e, n, r) {
    switch (n.tag) {
      case 3:
        at(n, n.stateNode.containerInfo), ar(n, Et, e.memoizedState.cache), Vr();
        break;
      case 27:
      case 5:
        mn(n);
        break;
      case 4:
        at(n, n.stateNode.containerInfo);
        break;
      case 10:
        ar(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, Od(n), null;
        break;
      case 13:
        var l = n.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (or(n), n.flags |= 128, null) : (r & n.child.childLanes) !== 0 ? xm(e, n, r) : (or(n), e = Da(
            e,
            n,
            r
          ), e !== null ? e.sibling : null);
        or(n);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (l = (r & n.childLanes) !== 0, l || (Yi(
          e,
          n,
          r,
          !1
        ), l = (r & n.childLanes) !== 0), c) {
          if (l)
            return Sm(
              e,
              n,
              r
            );
          n.flags |= 128;
        }
        if (c = n.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Z(gt, gt.current), l) break;
        return null;
      case 22:
        return n.lanes = 0, pm(
          e,
          n,
          r,
          n.pendingProps
        );
      case 24:
        ar(n, Et, e.memoizedState.cache);
    }
    return Da(e, n, r);
  }
  function Em(e, n, r) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        At = !0;
      else {
        if (!sf(e, r) && (n.flags & 128) === 0)
          return At = !1, Tx(
            e,
            n,
            r
          );
        At = (e.flags & 131072) !== 0;
      }
    else
      At = !1, Be && (n.flags & 1048576) !== 0 && t0(n, ro, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          var l = n.pendingProps;
          if (e = Zr(n.elementType), n.type = e, typeof e == "function")
            fd(e) ? (l = Wr(e, l), n.tag = 1, n = vm(
              null,
              n,
              e,
              l,
              r
            )) : (n.tag = 0, n = ef(
              null,
              n,
              e,
              l,
              r
            ));
          else {
            if (e != null) {
              var c = e.$$typeof;
              if (c === F) {
                n.tag = 11, n = dm(
                  null,
                  n,
                  e,
                  l,
                  r
                );
                break e;
              } else if (c === Q) {
                n.tag = 14, n = fm(
                  null,
                  n,
                  e,
                  l,
                  r
                );
                break e;
              }
            }
            throw n = ve(e) || e, Error(o(306, n, ""));
          }
        }
        return n;
      case 0:
        return ef(
          e,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 1:
        return l = n.type, c = Wr(
          l,
          n.pendingProps
        ), vm(
          e,
          n,
          l,
          c,
          r
        );
      case 3:
        e: {
          if (at(
            n,
            n.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          l = n.pendingProps;
          var d = n.memoizedState;
          c = d.element, Td(e, n), ho(n, l, null, r);
          var h = n.memoizedState;
          if (l = h.cache, ar(n, Et, l), l !== d.cache && wd(
            n,
            [Et],
            r,
            !0
          ), fo(), l = h.element, d.isDehydrated)
            if (d = {
              element: l,
              isDehydrated: !1,
              cache: h.cache
            }, n.updateQueue.baseState = d, n.memoizedState = d, n.flags & 256) {
              n = ym(
                e,
                n,
                l,
                r
              );
              break e;
            } else if (l !== c) {
              c = Yn(
                Error(o(424)),
                n
              ), io(c), n = ym(
                e,
                n,
                l,
                r
              );
              break e;
            } else
              for (e = n.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, tt = Qn(e.firstChild), Vt = n, Be = !0, tr = null, Vn = !0, r = p0(
                n,
                null,
                l,
                r
              ), n.child = r; r; )
                r.flags = r.flags & -3 | 4096, r = r.sibling;
          else {
            if (Vr(), l === c) {
              n = Da(
                e,
                n,
                r
              );
              break e;
            }
            Qt(e, n, l, r);
          }
          n = n.child;
        }
        return n;
      case 26:
        return ec(e, n), e === null ? (r = D2(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = r : Be || (r = n.type, e = n.pendingProps, l = bc(
          ce.current
        ).createElement(r), l[Xt] = n, l[an] = e, Ft(l, r, e), Lt(l), n.stateNode = l) : n.memoizedState = D2(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return mn(n), e === null && Be && (l = n.stateNode = R2(
          n.type,
          n.pendingProps,
          ce.current
        ), Vt = n, Vn = !0, c = tt, gr(n.type) ? (Yf = c, tt = Qn(l.firstChild)) : tt = c), Qt(
          e,
          n,
          n.pendingProps.children,
          r
        ), ec(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && Be && ((c = l = tt) && (l = a5(
          l,
          n.type,
          n.pendingProps,
          Vn
        ), l !== null ? (n.stateNode = l, Vt = n, tt = Qn(l.firstChild), Vn = !1, c = !0) : c = !1), c || nr(n)), mn(n), c = n.type, d = n.pendingProps, h = e !== null ? e.memoizedProps : null, l = d.children, Bf(c, d) ? l = null : h !== null && Bf(c, h) && (n.flags |= 32), n.memoizedState !== null && (c = Dd(
          e,
          n,
          vx,
          null,
          null,
          r
        ), Mo._currentValue = c), ec(e, n), Qt(e, n, l, r), n.child;
      case 6:
        return e === null && Be && ((e = r = tt) && (r = r5(
          r,
          n.pendingProps,
          Vn
        ), r !== null ? (n.stateNode = r, Vt = n, tt = null, e = !0) : e = !1), e || nr(n)), null;
      case 13:
        return xm(e, n, r);
      case 4:
        return at(
          n,
          n.stateNode.containerInfo
        ), l = n.pendingProps, e === null ? n.child = Jr(
          n,
          null,
          l,
          r
        ) : Qt(e, n, l, r), n.child;
      case 11:
        return dm(
          e,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 7:
        return Qt(
          e,
          n,
          n.pendingProps,
          r
        ), n.child;
      case 8:
        return Qt(
          e,
          n,
          n.pendingProps.children,
          r
        ), n.child;
      case 12:
        return Qt(
          e,
          n,
          n.pendingProps.children,
          r
        ), n.child;
      case 10:
        return l = n.pendingProps, ar(n, n.type, l.value), Qt(e, n, l.children, r), n.child;
      case 9:
        return c = n.type._context, l = n.pendingProps.children, Qr(n), c = It(c), l = l(c), n.flags |= 1, Qt(e, n, l, r), n.child;
      case 14:
        return fm(
          e,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 15:
        return hm(
          e,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 19:
        return Sm(e, n, r);
      case 31:
        return Nx(e, n, r);
      case 22:
        return pm(
          e,
          n,
          r,
          n.pendingProps
        );
      case 24:
        return Qr(n), l = It(Et), e === null ? (c = kd(), c === null && (c = $e, d = Sd(), c.pooledCache = d, d.refCount++, d !== null && (c.pooledCacheLanes |= r), c = d), n.memoizedState = { parent: l, cache: c }, Nd(n), ar(n, Et, c)) : ((e.lanes & r) !== 0 && (Td(e, n), ho(n, null, null, r), fo()), c = e.memoizedState, d = n.memoizedState, c.parent !== l ? (c = { parent: l, cache: l }, n.memoizedState = c, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c), ar(n, Et, l)) : (l = d.cache, ar(n, Et, l), l !== c.cache && wd(
          n,
          [Et],
          r,
          !0
        ))), Qt(
          e,
          n,
          n.pendingProps.children,
          r
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(o(156, n.tag));
  }
  function _a(e) {
    e.flags |= 4;
  }
  function cf(e, n, r, l, c) {
    if ((n = (e.mode & 32) !== 0) && (n = !1), n) {
      if (e.flags |= 16777216, (c & 335544128) === c)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Jm()) e.flags |= 8192;
        else
          throw Kr = Hs, Ad;
    } else e.flags &= -16777217;
  }
  function km(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !H2(n))
      if (Jm()) e.flags |= 8192;
      else
        throw Kr = Hs, Ad;
  }
  function nc(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? a1() : 536870912, e.lanes |= n, $i |= n);
  }
  function yo(e, n) {
    if (!Be)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), n = n.sibling;
          r === null ? e.tail = null : r.sibling = null;
          break;
        case "collapsed":
          r = e.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
  }
  function nt(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, r = 0, l = 0;
    if (n)
      for (var c = e.child; c !== null; )
        r |= c.lanes | c.childLanes, l |= c.subtreeFlags & 65011712, l |= c.flags & 65011712, c.return = e, c = c.sibling;
    else
      for (c = e.child; c !== null; )
        r |= c.lanes | c.childLanes, l |= c.subtreeFlags, l |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= l, e.childLanes = r, n;
  }
  function jx(e, n, r) {
    var l = n.pendingProps;
    switch (gd(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return nt(n), null;
      case 1:
        return nt(n), null;
      case 3:
        return r = n.stateNode, l = null, e !== null && (l = e.memoizedState.cache), n.memoizedState.cache !== l && (n.flags |= 2048), Ra(Et), xe(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Gi(n) ? _a(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, vd())), nt(n), null;
      case 26:
        var c = n.type, d = n.memoizedState;
        return e === null ? (_a(n), d !== null ? (nt(n), km(n, d)) : (nt(n), cf(
          n,
          c,
          null,
          l,
          r
        ))) : d ? d !== e.memoizedState ? (_a(n), nt(n), km(n, d)) : (nt(n), n.flags &= -16777217) : (e = e.memoizedProps, e !== l && _a(n), nt(n), cf(
          n,
          c,
          e,
          l,
          r
        )), null;
      case 27:
        if (Ln(n), r = ce.current, c = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== l && _a(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(o(166));
            return nt(n), null;
          }
          e = $.current, Gi(n) ? a0(n) : (e = R2(c, l, r), n.stateNode = e, _a(n));
        }
        return nt(n), null;
      case 5:
        if (Ln(n), c = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== l && _a(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(o(166));
            return nt(n), null;
          }
          if (d = $.current, Gi(n))
            a0(n);
          else {
            var h = bc(
              ce.current
            );
            switch (d) {
              case 1:
                d = h.createElementNS(
                  "http://www.w3.org/2000/svg",
                  c
                );
                break;
              case 2:
                d = h.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  c
                );
                break;
              default:
                switch (c) {
                  case "svg":
                    d = h.createElementNS(
                      "http://www.w3.org/2000/svg",
                      c
                    );
                    break;
                  case "math":
                    d = h.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      c
                    );
                    break;
                  case "script":
                    d = h.createElement("div"), d.innerHTML = "<script><\/script>", d = d.removeChild(
                      d.firstChild
                    );
                    break;
                  case "select":
                    d = typeof l.is == "string" ? h.createElement("select", {
                      is: l.is
                    }) : h.createElement("select"), l.multiple ? d.multiple = !0 : l.size && (d.size = l.size);
                    break;
                  default:
                    d = typeof l.is == "string" ? h.createElement(c, { is: l.is }) : h.createElement(c);
                }
            }
            d[Xt] = n, d[an] = l;
            e: for (h = n.child; h !== null; ) {
              if (h.tag === 5 || h.tag === 6)
                d.appendChild(h.stateNode);
              else if (h.tag !== 4 && h.tag !== 27 && h.child !== null) {
                h.child.return = h, h = h.child;
                continue;
              }
              if (h === n) break e;
              for (; h.sibling === null; ) {
                if (h.return === null || h.return === n)
                  break e;
                h = h.return;
              }
              h.sibling.return = h.return, h = h.sibling;
            }
            n.stateNode = d;
            e: switch (Ft(d, c, l), c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && _a(n);
          }
        }
        return nt(n), cf(
          n,
          n.type,
          e === null ? null : e.memoizedProps,
          n.pendingProps,
          r
        ), null;
      case 6:
        if (e && n.stateNode != null)
          e.memoizedProps !== l && _a(n);
        else {
          if (typeof l != "string" && n.stateNode === null)
            throw Error(o(166));
          if (e = ce.current, Gi(n)) {
            if (e = n.stateNode, r = n.memoizedProps, l = null, c = Vt, c !== null)
              switch (c.tag) {
                case 27:
                case 5:
                  l = c.memoizedProps;
              }
            e[Xt] = n, e = !!(e.nodeValue === r || l !== null && l.suppressHydrationWarning === !0 || x2(e.nodeValue, r)), e || nr(n, !0);
          } else
            e = bc(e).createTextNode(
              l
            ), e[Xt] = n, n.stateNode = e;
        }
        return nt(n), null;
      case 31:
        if (r = n.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Gi(n), r !== null) {
            if (e === null) {
              if (!l) throw Error(o(318));
              if (e = n.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[Xt] = n;
            } else
              Vr(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            nt(n), e = !1;
          } else
            r = vd(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = r), e = !0;
          if (!e)
            return n.flags & 256 ? (wn(n), n) : (wn(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(o(558));
        }
        return nt(n), null;
      case 13:
        if (l = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (c = Gi(n), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(o(318));
              if (c = n.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(o(317));
              c[Xt] = n;
            } else
              Vr(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            nt(n), c = !1;
          } else
            c = vd(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return n.flags & 256 ? (wn(n), n) : (wn(n), null);
        }
        return wn(n), (n.flags & 128) !== 0 ? (n.lanes = r, n) : (r = l !== null, e = e !== null && e.memoizedState !== null, r && (l = n.child, c = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (c = l.alternate.memoizedState.cachePool.pool), d = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (d = l.memoizedState.cachePool.pool), d !== c && (l.flags |= 2048)), r !== e && r && (n.child.flags |= 8192), nc(n, n.updateQueue), nt(n), null);
      case 4:
        return xe(), e === null && Rf(n.stateNode.containerInfo), nt(n), null;
      case 10:
        return Ra(n.type), nt(n), null;
      case 19:
        if (B(gt), l = n.memoizedState, l === null) return nt(n), null;
        if (c = (n.flags & 128) !== 0, d = l.rendering, d === null)
          if (c) yo(l, !1);
          else {
            if (ht !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (d = Xs(e), d !== null) {
                  for (n.flags |= 128, yo(l, !1), e = d.updateQueue, n.updateQueue = e, nc(n, e), n.subtreeFlags = 0, e = r, r = n.child; r !== null; )
                    W1(r, e), r = r.sibling;
                  return Z(
                    gt,
                    gt.current & 1 | 2
                  ), Be && za(n, l.treeForkCount), n.child;
                }
                e = e.sibling;
              }
            l.tail !== null && Bt() > oc && (n.flags |= 128, c = !0, yo(l, !1), n.lanes = 4194304);
          }
        else {
          if (!c)
            if (e = Xs(d), e !== null) {
              if (n.flags |= 128, c = !0, e = e.updateQueue, n.updateQueue = e, nc(n, e), yo(l, !0), l.tail === null && l.tailMode === "hidden" && !d.alternate && !Be)
                return nt(n), null;
            } else
              2 * Bt() - l.renderingStartTime > oc && r !== 536870912 && (n.flags |= 128, c = !0, yo(l, !1), n.lanes = 4194304);
          l.isBackwards ? (d.sibling = n.child, n.child = d) : (e = l.last, e !== null ? e.sibling = d : n.child = d, l.last = d);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = Bt(), e.sibling = null, r = gt.current, Z(
          gt,
          c ? r & 1 | 2 : r & 1
        ), Be && za(n, l.treeForkCount), e) : (nt(n), null);
      case 22:
      case 23:
        return wn(n), Rd(), l = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (n.flags |= 8192) : l && (n.flags |= 8192), l ? (r & 536870912) !== 0 && (n.flags & 128) === 0 && (nt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : nt(n), r = n.updateQueue, r !== null && nc(n, r.retryQueue), r = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== r && (n.flags |= 2048), e !== null && B(Fr), null;
      case 24:
        return r = null, e !== null && (r = e.memoizedState.cache), n.memoizedState.cache !== r && (n.flags |= 2048), Ra(Et), nt(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, n.tag));
  }
  function zx(e, n) {
    switch (gd(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Ra(Et), xe(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return Ln(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (wn(n), n.alternate === null)
            throw Error(o(340));
          Vr();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 13:
        if (wn(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(o(340));
          Vr();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return B(gt), null;
      case 4:
        return xe(), null;
      case 10:
        return Ra(n.type), null;
      case 22:
      case 23:
        return wn(n), Rd(), e !== null && B(Fr), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return Ra(Et), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Am(e, n) {
    switch (gd(n), n.tag) {
      case 3:
        Ra(Et), xe();
        break;
      case 26:
      case 27:
      case 5:
        Ln(n);
        break;
      case 4:
        xe();
        break;
      case 31:
        n.memoizedState !== null && wn(n);
        break;
      case 13:
        wn(n);
        break;
      case 19:
        B(gt);
        break;
      case 10:
        Ra(n.type);
        break;
      case 22:
      case 23:
        wn(n), Rd(), e !== null && B(Fr);
        break;
      case 24:
        Ra(Et);
    }
  }
  function xo(e, n) {
    try {
      var r = n.updateQueue, l = r !== null ? r.lastEffect : null;
      if (l !== null) {
        var c = l.next;
        r = c;
        do {
          if ((r.tag & e) === e) {
            l = void 0;
            var d = r.create, h = r.inst;
            l = d(), h.destroy = l;
          }
          r = r.next;
        } while (r !== c);
      }
    } catch (b) {
      Ze(n, n.return, b);
    }
  }
  function cr(e, n, r) {
    try {
      var l = n.updateQueue, c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var d = c.next;
        l = d;
        do {
          if ((l.tag & e) === e) {
            var h = l.inst, b = h.destroy;
            if (b !== void 0) {
              h.destroy = void 0, c = n;
              var E = r, O = b;
              try {
                O();
              } catch (L) {
                Ze(
                  c,
                  E,
                  L
                );
              }
            }
          }
          l = l.next;
        } while (l !== d);
      }
    } catch (L) {
      Ze(n, n.return, L);
    }
  }
  function Nm(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var r = e.stateNode;
      try {
        g0(n, r);
      } catch (l) {
        Ze(e, e.return, l);
      }
    }
  }
  function Tm(e, n, r) {
    r.props = Wr(
      e.type,
      e.memoizedProps
    ), r.state = e.memoizedState;
    try {
      r.componentWillUnmount();
    } catch (l) {
      Ze(e, n, l);
    }
  }
  function wo(e, n) {
    try {
      var r = e.ref;
      if (r !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof r == "function" ? e.refCleanup = r(l) : r.current = l;
      }
    } catch (c) {
      Ze(e, n, c);
    }
  }
  function pa(e, n) {
    var r = e.ref, l = e.refCleanup;
    if (r !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (c) {
          Ze(e, n, c);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof r == "function")
        try {
          r(null);
        } catch (c) {
          Ze(e, n, c);
        }
      else r.current = null;
  }
  function jm(e) {
    var n = e.type, r = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          r.autoFocus && l.focus();
          break e;
        case "img":
          r.src ? l.src = r.src : r.srcSet && (l.srcset = r.srcSet);
      }
    } catch (c) {
      Ze(e, e.return, c);
    }
  }
  function uf(e, n, r) {
    try {
      var l = e.stateNode;
      Px(l, e.type, r, n), l[an] = n;
    } catch (c) {
      Ze(e, e.return, c);
    }
  }
  function zm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && gr(e.type) || e.tag === 4;
  }
  function df(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || zm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && gr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ff(e, n, r) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, n ? (r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r).insertBefore(e, n) : (n = r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r, n.appendChild(e), r = r._reactRootContainer, r != null || n.onclick !== null || (n.onclick = Na));
    else if (l !== 4 && (l === 27 && gr(e.type) && (r = e.stateNode, n = null), e = e.child, e !== null))
      for (ff(e, n, r), e = e.sibling; e !== null; )
        ff(e, n, r), e = e.sibling;
  }
  function ac(e, n, r) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, n ? r.insertBefore(e, n) : r.appendChild(e);
    else if (l !== 4 && (l === 27 && gr(e.type) && (r = e.stateNode), e = e.child, e !== null))
      for (ac(e, n, r), e = e.sibling; e !== null; )
        ac(e, n, r), e = e.sibling;
  }
  function Cm(e) {
    var n = e.stateNode, r = e.memoizedProps;
    try {
      for (var l = e.type, c = n.attributes; c.length; )
        n.removeAttributeNode(c[0]);
      Ft(n, l, r), n[Xt] = e, n[an] = r;
    } catch (d) {
      Ze(e, e.return, d);
    }
  }
  var Ba = !1, Nt = !1, hf = !1, Rm = typeof WeakSet == "function" ? WeakSet : Set, Ut = null;
  function Cx(e, n) {
    if (e = e.containerInfo, Df = kc, e = X1(e), id(e)) {
      if ("selectionStart" in e)
        var r = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          r = (r = e.ownerDocument) && r.defaultView || window;
          var l = r.getSelection && r.getSelection();
          if (l && l.rangeCount !== 0) {
            r = l.anchorNode;
            var c = l.anchorOffset, d = l.focusNode;
            l = l.focusOffset;
            try {
              r.nodeType, d.nodeType;
            } catch {
              r = null;
              break e;
            }
            var h = 0, b = -1, E = -1, O = 0, L = 0, G = e, M = null;
            t: for (; ; ) {
              for (var _; G !== r || c !== 0 && G.nodeType !== 3 || (b = h + c), G !== d || l !== 0 && G.nodeType !== 3 || (E = h + l), G.nodeType === 3 && (h += G.nodeValue.length), (_ = G.firstChild) !== null; )
                M = G, G = _;
              for (; ; ) {
                if (G === e) break t;
                if (M === r && ++O === c && (b = h), M === d && ++L === l && (E = h), (_ = G.nextSibling) !== null) break;
                G = M, M = G.parentNode;
              }
              G = _;
            }
            r = b === -1 || E === -1 ? null : { start: b, end: E };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (_f = { focusedElem: e, selectionRange: r }, kc = !1, Ut = n; Ut !== null; )
      if (n = Ut, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = n, Ut = e;
      else
        for (; Ut !== null; ) {
          switch (n = Ut, d = n.alternate, e = n.flags, n.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = n.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (r = 0; r < e.length; r++)
                  c = e[r], c.ref.impl = c.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && d !== null) {
                e = void 0, r = n, c = d.memoizedProps, d = d.memoizedState, l = r.stateNode;
                try {
                  var ae = Wr(
                    r.type,
                    c
                  );
                  e = l.getSnapshotBeforeUpdate(
                    ae,
                    d
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ge) {
                  Ze(
                    r,
                    r.return,
                    ge
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = n.stateNode.containerInfo, r = e.nodeType, r === 9)
                  Uf(e);
                else if (r === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Uf(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (e = n.sibling, e !== null) {
            e.return = n.return, Ut = e;
            break;
          }
          Ut = n.return;
        }
  }
  function Om(e, n, r) {
    var l = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        Ua(e, r), l & 4 && xo(5, r);
        break;
      case 1:
        if (Ua(e, r), l & 4)
          if (e = r.stateNode, n === null)
            try {
              e.componentDidMount();
            } catch (h) {
              Ze(r, r.return, h);
            }
          else {
            var c = Wr(
              r.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              e.componentDidUpdate(
                c,
                n,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (h) {
              Ze(
                r,
                r.return,
                h
              );
            }
          }
        l & 64 && Nm(r), l & 512 && wo(r, r.return);
        break;
      case 3:
        if (Ua(e, r), l & 64 && (e = r.updateQueue, e !== null)) {
          if (n = null, r.child !== null)
            switch (r.child.tag) {
              case 27:
              case 5:
                n = r.child.stateNode;
                break;
              case 1:
                n = r.child.stateNode;
            }
          try {
            g0(e, n);
          } catch (h) {
            Ze(r, r.return, h);
          }
        }
        break;
      case 27:
        n === null && l & 4 && Cm(r);
      case 26:
      case 5:
        Ua(e, r), n === null && l & 4 && jm(r), l & 512 && wo(r, r.return);
        break;
      case 12:
        Ua(e, r);
        break;
      case 31:
        Ua(e, r), l & 4 && _m(e, r);
        break;
      case 13:
        Ua(e, r), l & 4 && Bm(e, r), l & 64 && (e = r.memoizedState, e !== null && (e = e.dehydrated, e !== null && (r = Hx.bind(
          null,
          r
        ), i5(e, r))));
        break;
      case 22:
        if (l = r.memoizedState !== null || Ba, !l) {
          n = n !== null && n.memoizedState !== null || Nt, c = Ba;
          var d = Nt;
          Ba = l, (Nt = n) && !d ? Ha(
            e,
            r,
            (r.subtreeFlags & 8772) !== 0
          ) : Ua(e, r), Ba = c, Nt = d;
        }
        break;
      case 30:
        break;
      default:
        Ua(e, r);
    }
  }
  function Mm(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Mm(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && qu(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var rt = null, ln = !1;
  function La(e, n, r) {
    for (r = r.child; r !== null; )
      Dm(e, n, r), r = r.sibling;
  }
  function Dm(e, n, r) {
    if (gn && typeof gn.onCommitFiberUnmount == "function")
      try {
        gn.onCommitFiberUnmount(Vl, r);
      } catch {
      }
    switch (r.tag) {
      case 26:
        Nt || pa(r, n), La(
          e,
          n,
          r
        ), r.memoizedState ? r.memoizedState.count-- : r.stateNode && (r = r.stateNode, r.parentNode.removeChild(r));
        break;
      case 27:
        Nt || pa(r, n);
        var l = rt, c = ln;
        gr(r.type) && (rt = r.stateNode, ln = !1), La(
          e,
          n,
          r
        ), Co(r.stateNode), rt = l, ln = c;
        break;
      case 5:
        Nt || pa(r, n);
      case 6:
        if (l = rt, c = ln, rt = null, La(
          e,
          n,
          r
        ), rt = l, ln = c, rt !== null)
          if (ln)
            try {
              (rt.nodeType === 9 ? rt.body : rt.nodeName === "HTML" ? rt.ownerDocument.body : rt).removeChild(r.stateNode);
            } catch (d) {
              Ze(
                r,
                n,
                d
              );
            }
          else
            try {
              rt.removeChild(r.stateNode);
            } catch (d) {
              Ze(
                r,
                n,
                d
              );
            }
        break;
      case 18:
        rt !== null && (ln ? (e = rt, N2(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          r.stateNode
        ), ol(e)) : N2(rt, r.stateNode));
        break;
      case 4:
        l = rt, c = ln, rt = r.stateNode.containerInfo, ln = !0, La(
          e,
          n,
          r
        ), rt = l, ln = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        cr(2, r, n), Nt || cr(4, r, n), La(
          e,
          n,
          r
        );
        break;
      case 1:
        Nt || (pa(r, n), l = r.stateNode, typeof l.componentWillUnmount == "function" && Tm(
          r,
          n,
          l
        )), La(
          e,
          n,
          r
        );
        break;
      case 21:
        La(
          e,
          n,
          r
        );
        break;
      case 22:
        Nt = (l = Nt) || r.memoizedState !== null, La(
          e,
          n,
          r
        ), Nt = l;
        break;
      default:
        La(
          e,
          n,
          r
        );
    }
  }
  function _m(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        ol(e);
      } catch (r) {
        Ze(n, n.return, r);
      }
    }
  }
  function Bm(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        ol(e);
      } catch (r) {
        Ze(n, n.return, r);
      }
  }
  function Rx(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Rm()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Rm()), n;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function rc(e, n) {
    var r = Rx(e);
    n.forEach(function(l) {
      if (!r.has(l)) {
        r.add(l);
        var c = Gx.bind(null, e, l);
        l.then(c, c);
      }
    });
  }
  function on(e, n) {
    var r = n.deletions;
    if (r !== null)
      for (var l = 0; l < r.length; l++) {
        var c = r[l], d = e, h = n, b = h;
        e: for (; b !== null; ) {
          switch (b.tag) {
            case 27:
              if (gr(b.type)) {
                rt = b.stateNode, ln = !1;
                break e;
              }
              break;
            case 5:
              rt = b.stateNode, ln = !1;
              break e;
            case 3:
            case 4:
              rt = b.stateNode.containerInfo, ln = !0;
              break e;
          }
          b = b.return;
        }
        if (rt === null) throw Error(o(160));
        Dm(d, h, c), rt = null, ln = !1, d = c.alternate, d !== null && (d.return = null), c.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        Lm(n, e), n = n.sibling;
  }
  var na = null;
  function Lm(e, n) {
    var r = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        on(n, e), sn(e), l & 4 && (cr(3, e, e.return), xo(3, e), cr(5, e, e.return));
        break;
      case 1:
        on(n, e), sn(e), l & 512 && (Nt || r === null || pa(r, r.return)), l & 64 && Ba && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (r = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = r === null ? l : r.concat(l))));
        break;
      case 26:
        var c = na;
        if (on(n, e), sn(e), l & 512 && (Nt || r === null || pa(r, r.return)), l & 4) {
          var d = r !== null ? r.memoizedState : null;
          if (l = e.memoizedState, r === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, r = e.memoizedProps, c = c.ownerDocument || c;
                  t: switch (l) {
                    case "title":
                      d = c.getElementsByTagName("title")[0], (!d || d[Fl] || d[Xt] || d.namespaceURI === "http://www.w3.org/2000/svg" || d.hasAttribute("itemprop")) && (d = c.createElement(l), c.head.insertBefore(
                        d,
                        c.querySelector("head > title")
                      )), Ft(d, l, r), d[Xt] = e, Lt(d), l = d;
                      break e;
                    case "link":
                      var h = L2(
                        "link",
                        "href",
                        c
                      ).get(l + (r.href || ""));
                      if (h) {
                        for (var b = 0; b < h.length; b++)
                          if (d = h[b], d.getAttribute("href") === (r.href == null || r.href === "" ? null : r.href) && d.getAttribute("rel") === (r.rel == null ? null : r.rel) && d.getAttribute("title") === (r.title == null ? null : r.title) && d.getAttribute("crossorigin") === (r.crossOrigin == null ? null : r.crossOrigin)) {
                            h.splice(b, 1);
                            break t;
                          }
                      }
                      d = c.createElement(l), Ft(d, l, r), c.head.appendChild(d);
                      break;
                    case "meta":
                      if (h = L2(
                        "meta",
                        "content",
                        c
                      ).get(l + (r.content || ""))) {
                        for (b = 0; b < h.length; b++)
                          if (d = h[b], d.getAttribute("content") === (r.content == null ? null : "" + r.content) && d.getAttribute("name") === (r.name == null ? null : r.name) && d.getAttribute("property") === (r.property == null ? null : r.property) && d.getAttribute("http-equiv") === (r.httpEquiv == null ? null : r.httpEquiv) && d.getAttribute("charset") === (r.charSet == null ? null : r.charSet)) {
                            h.splice(b, 1);
                            break t;
                          }
                      }
                      d = c.createElement(l), Ft(d, l, r), c.head.appendChild(d);
                      break;
                    default:
                      throw Error(o(468, l));
                  }
                  d[Xt] = e, Lt(d), l = d;
                }
                e.stateNode = l;
              } else
                U2(
                  c,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = B2(
                c,
                l,
                e.memoizedProps
              );
          else
            d !== l ? (d === null ? r.stateNode !== null && (r = r.stateNode, r.parentNode.removeChild(r)) : d.count--, l === null ? U2(
              c,
              e.type,
              e.stateNode
            ) : B2(
              c,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && uf(
              e,
              e.memoizedProps,
              r.memoizedProps
            );
        }
        break;
      case 27:
        on(n, e), sn(e), l & 512 && (Nt || r === null || pa(r, r.return)), r !== null && l & 4 && uf(
          e,
          e.memoizedProps,
          r.memoizedProps
        );
        break;
      case 5:
        if (on(n, e), sn(e), l & 512 && (Nt || r === null || pa(r, r.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            Ci(c, "");
          } catch (ae) {
            Ze(e, e.return, ae);
          }
        }
        l & 4 && e.stateNode != null && (c = e.memoizedProps, uf(
          e,
          c,
          r !== null ? r.memoizedProps : c
        )), l & 1024 && (hf = !0);
        break;
      case 6:
        if (on(n, e), sn(e), l & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          l = e.memoizedProps, r = e.stateNode;
          try {
            r.nodeValue = l;
          } catch (ae) {
            Ze(e, e.return, ae);
          }
        }
        break;
      case 3:
        if (xc = null, c = na, na = vc(n.containerInfo), on(n, e), na = c, sn(e), l & 4 && r !== null && r.memoizedState.isDehydrated)
          try {
            ol(n.containerInfo);
          } catch (ae) {
            Ze(e, e.return, ae);
          }
        hf && (hf = !1, Um(e));
        break;
      case 4:
        l = na, na = vc(
          e.stateNode.containerInfo
        ), on(n, e), sn(e), na = l;
        break;
      case 12:
        on(n, e), sn(e);
        break;
      case 31:
        on(n, e), sn(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, rc(e, l)));
        break;
      case 13:
        on(n, e), sn(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (lc = Bt()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, rc(e, l)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var E = r !== null && r.memoizedState !== null, O = Ba, L = Nt;
        if (Ba = O || c, Nt = L || E, on(n, e), Nt = L, Ba = O, sn(e), l & 8192)
          e: for (n = e.stateNode, n._visibility = c ? n._visibility & -2 : n._visibility | 1, c && (r === null || E || Ba || Nt || $r(e)), r = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (r === null) {
                E = r = n;
                try {
                  if (d = E.stateNode, c)
                    h = d.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none";
                  else {
                    b = E.stateNode;
                    var G = E.memoizedProps.style, M = G != null && G.hasOwnProperty("display") ? G.display : null;
                    b.style.display = M == null || typeof M == "boolean" ? "" : ("" + M).trim();
                  }
                } catch (ae) {
                  Ze(E, E.return, ae);
                }
              }
            } else if (n.tag === 6) {
              if (r === null) {
                E = n;
                try {
                  E.stateNode.nodeValue = c ? "" : E.memoizedProps;
                } catch (ae) {
                  Ze(E, E.return, ae);
                }
              }
            } else if (n.tag === 18) {
              if (r === null) {
                E = n;
                try {
                  var _ = E.stateNode;
                  c ? T2(_, !0) : T2(E.stateNode, !1);
                } catch (ae) {
                  Ze(E, E.return, ae);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === e) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === e) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) break e;
              r === n && (r = null), n = n.return;
            }
            r === n && (r = null), n.sibling.return = n.return, n = n.sibling;
          }
        l & 4 && (l = e.updateQueue, l !== null && (r = l.retryQueue, r !== null && (l.retryQueue = null, rc(e, r))));
        break;
      case 19:
        on(n, e), sn(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, rc(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        on(n, e), sn(e);
    }
  }
  function sn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var r, l = e.return; l !== null; ) {
          if (zm(l)) {
            r = l;
            break;
          }
          l = l.return;
        }
        if (r == null) throw Error(o(160));
        switch (r.tag) {
          case 27:
            var c = r.stateNode, d = df(e);
            ac(e, d, c);
            break;
          case 5:
            var h = r.stateNode;
            r.flags & 32 && (Ci(h, ""), r.flags &= -33);
            var b = df(e);
            ac(e, b, h);
            break;
          case 3:
          case 4:
            var E = r.stateNode.containerInfo, O = df(e);
            ff(
              e,
              O,
              E
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (L) {
        Ze(e, e.return, L);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Um(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        Um(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling;
      }
  }
  function Ua(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Om(e, n.alternate, n), n = n.sibling;
  }
  function $r(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          cr(4, n, n.return), $r(n);
          break;
        case 1:
          pa(n, n.return);
          var r = n.stateNode;
          typeof r.componentWillUnmount == "function" && Tm(
            n,
            n.return,
            r
          ), $r(n);
          break;
        case 27:
          Co(n.stateNode);
        case 26:
        case 5:
          pa(n, n.return), $r(n);
          break;
        case 22:
          n.memoizedState === null && $r(n);
          break;
        case 30:
          $r(n);
          break;
        default:
          $r(n);
      }
      e = e.sibling;
    }
  }
  function Ha(e, n, r) {
    for (r = r && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var l = n.alternate, c = e, d = n, h = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          Ha(
            c,
            d,
            r
          ), xo(4, d);
          break;
        case 1:
          if (Ha(
            c,
            d,
            r
          ), l = d, c = l.stateNode, typeof c.componentDidMount == "function")
            try {
              c.componentDidMount();
            } catch (O) {
              Ze(l, l.return, O);
            }
          if (l = d, c = l.updateQueue, c !== null) {
            var b = l.stateNode;
            try {
              var E = c.shared.hiddenCallbacks;
              if (E !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < E.length; c++)
                  m0(E[c], b);
            } catch (O) {
              Ze(l, l.return, O);
            }
          }
          r && h & 64 && Nm(d), wo(d, d.return);
          break;
        case 27:
          Cm(d);
        case 26:
        case 5:
          Ha(
            c,
            d,
            r
          ), r && l === null && h & 4 && jm(d), wo(d, d.return);
          break;
        case 12:
          Ha(
            c,
            d,
            r
          );
          break;
        case 31:
          Ha(
            c,
            d,
            r
          ), r && h & 4 && _m(c, d);
          break;
        case 13:
          Ha(
            c,
            d,
            r
          ), r && h & 4 && Bm(c, d);
          break;
        case 22:
          d.memoizedState === null && Ha(
            c,
            d,
            r
          ), wo(d, d.return);
          break;
        case 30:
          break;
        default:
          Ha(
            c,
            d,
            r
          );
      }
      n = n.sibling;
    }
  }
  function pf(e, n) {
    var r = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== r && (e != null && e.refCount++, r != null && lo(r));
  }
  function mf(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && lo(e));
  }
  function aa(e, n, r, l) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Hm(
          e,
          n,
          r,
          l
        ), n = n.sibling;
  }
  function Hm(e, n, r, l) {
    var c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        aa(
          e,
          n,
          r,
          l
        ), c & 2048 && xo(9, n);
        break;
      case 1:
        aa(
          e,
          n,
          r,
          l
        );
        break;
      case 3:
        aa(
          e,
          n,
          r,
          l
        ), c & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && lo(e)));
        break;
      case 12:
        if (c & 2048) {
          aa(
            e,
            n,
            r,
            l
          ), e = n.stateNode;
          try {
            var d = n.memoizedProps, h = d.id, b = d.onPostCommit;
            typeof b == "function" && b(
              h,
              n.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (E) {
            Ze(n, n.return, E);
          }
        } else
          aa(
            e,
            n,
            r,
            l
          );
        break;
      case 31:
        aa(
          e,
          n,
          r,
          l
        );
        break;
      case 13:
        aa(
          e,
          n,
          r,
          l
        );
        break;
      case 23:
        break;
      case 22:
        d = n.stateNode, h = n.alternate, n.memoizedState !== null ? d._visibility & 2 ? aa(
          e,
          n,
          r,
          l
        ) : So(e, n) : d._visibility & 2 ? aa(
          e,
          n,
          r,
          l
        ) : (d._visibility |= 2, Ji(
          e,
          n,
          r,
          l,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), c & 2048 && pf(h, n);
        break;
      case 24:
        aa(
          e,
          n,
          r,
          l
        ), c & 2048 && mf(n.alternate, n);
        break;
      default:
        aa(
          e,
          n,
          r,
          l
        );
    }
  }
  function Ji(e, n, r, l, c) {
    for (c = c && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var d = e, h = n, b = r, E = l, O = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          Ji(
            d,
            h,
            b,
            E,
            c
          ), xo(8, h);
          break;
        case 23:
          break;
        case 22:
          var L = h.stateNode;
          h.memoizedState !== null ? L._visibility & 2 ? Ji(
            d,
            h,
            b,
            E,
            c
          ) : So(
            d,
            h
          ) : (L._visibility |= 2, Ji(
            d,
            h,
            b,
            E,
            c
          )), c && O & 2048 && pf(
            h.alternate,
            h
          );
          break;
        case 24:
          Ji(
            d,
            h,
            b,
            E,
            c
          ), c && O & 2048 && mf(h.alternate, h);
          break;
        default:
          Ji(
            d,
            h,
            b,
            E,
            c
          );
      }
      n = n.sibling;
    }
  }
  function So(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var r = e, l = n, c = l.flags;
        switch (l.tag) {
          case 22:
            So(r, l), c & 2048 && pf(
              l.alternate,
              l
            );
            break;
          case 24:
            So(r, l), c & 2048 && mf(l.alternate, l);
            break;
          default:
            So(r, l);
        }
        n = n.sibling;
      }
  }
  var Eo = 8192;
  function Pi(e, n, r) {
    if (e.subtreeFlags & Eo)
      for (e = e.child; e !== null; )
        Gm(
          e,
          n,
          r
        ), e = e.sibling;
  }
  function Gm(e, n, r) {
    switch (e.tag) {
      case 26:
        Pi(
          e,
          n,
          r
        ), e.flags & Eo && e.memoizedState !== null && b5(
          r,
          na,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Pi(
          e,
          n,
          r
        );
        break;
      case 3:
      case 4:
        var l = na;
        na = vc(e.stateNode.containerInfo), Pi(
          e,
          n,
          r
        ), na = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Eo, Eo = 16777216, Pi(
          e,
          n,
          r
        ), Eo = l) : Pi(
          e,
          n,
          r
        ));
        break;
      default:
        Pi(
          e,
          n,
          r
        );
    }
  }
  function Ym(e) {
    var n = e.alternate;
    if (n !== null && (e = n.child, e !== null)) {
      n.child = null;
      do
        n = e.sibling, e.sibling = null, e = n;
      while (e !== null);
    }
  }
  function ko(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var l = n[r];
          Ut = l, Xm(
            l,
            e
          );
        }
      Ym(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        qm(e), e = e.sibling;
  }
  function qm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ko(e), e.flags & 2048 && cr(9, e, e.return);
        break;
      case 3:
        ko(e);
        break;
      case 12:
        ko(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, ic(e)) : ko(e);
        break;
      default:
        ko(e);
    }
  }
  function ic(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var l = n[r];
          Ut = l, Xm(
            l,
            e
          );
        }
      Ym(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          cr(8, n, n.return), ic(n);
          break;
        case 22:
          r = n.stateNode, r._visibility & 2 && (r._visibility &= -3, ic(n));
          break;
        default:
          ic(n);
      }
      e = e.sibling;
    }
  }
  function Xm(e, n) {
    for (; Ut !== null; ) {
      var r = Ut;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          cr(8, r, n);
          break;
        case 23:
        case 22:
          if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
            var l = r.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          lo(r.memoizedState.cache);
      }
      if (l = r.child, l !== null) l.return = r, Ut = l;
      else
        e: for (r = e; Ut !== null; ) {
          l = Ut;
          var c = l.sibling, d = l.return;
          if (Mm(l), l === r) {
            Ut = null;
            break e;
          }
          if (c !== null) {
            c.return = d, Ut = c;
            break e;
          }
          Ut = d;
        }
    }
  }
  var Ox = {
    getCacheForType: function(e) {
      var n = It(Et), r = n.data.get(e);
      return r === void 0 && (r = e(), n.data.set(e, r)), r;
    },
    cacheSignal: function() {
      return It(Et).controller.signal;
    }
  }, Mx = typeof WeakMap == "function" ? WeakMap : Map, qe = 0, $e = null, Re = null, De = 0, Fe = 0, Sn = null, ur = !1, Wi = !1, gf = !1, Ga = 0, ht = 0, dr = 0, ei = 0, bf = 0, En = 0, $i = 0, Ao = null, cn = null, vf = !1, lc = 0, Vm = 0, oc = 1 / 0, sc = null, fr = null, Rt = 0, hr = null, el = null, Ya = 0, yf = 0, xf = null, Im = null, No = 0, wf = null;
  function kn() {
    return (qe & 2) !== 0 && De !== 0 ? De & -De : C.T !== null ? Tf() : o1();
  }
  function Qm() {
    if (En === 0)
      if ((De & 536870912) === 0 || Be) {
        var e = gs;
        gs <<= 1, (gs & 3932160) === 0 && (gs = 262144), En = e;
      } else En = 536870912;
    return e = xn.current, e !== null && (e.flags |= 32), En;
  }
  function un(e, n, r) {
    (e === $e && (Fe === 2 || Fe === 9) || e.cancelPendingCommit !== null) && (tl(e, 0), pr(
      e,
      De,
      En,
      !1
    )), Ql(e, r), ((qe & 2) === 0 || e !== $e) && (e === $e && ((qe & 2) === 0 && (ei |= r), ht === 4 && pr(
      e,
      De,
      En,
      !1
    )), ma(e));
  }
  function Fm(e, n, r) {
    if ((qe & 6) !== 0) throw Error(o(327));
    var l = !r && (n & 127) === 0 && (n & e.expiredLanes) === 0 || Il(e, n), c = l ? Bx(e, n) : Ef(e, n, !0), d = l;
    do {
      if (c === 0) {
        Wi && !l && pr(e, n, 0, !1);
        break;
      } else {
        if (r = e.current.alternate, d && !Dx(r)) {
          c = Ef(e, n, !1), d = !1;
          continue;
        }
        if (c === 2) {
          if (d = n, e.errorRecoveryDisabledLanes & d)
            var h = 0;
          else
            h = e.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
          if (h !== 0) {
            n = h;
            e: {
              var b = e;
              c = Ao;
              var E = b.current.memoizedState.isDehydrated;
              if (E && (tl(b, h).flags |= 256), h = Ef(
                b,
                h,
                !1
              ), h !== 2) {
                if (gf && !E) {
                  b.errorRecoveryDisabledLanes |= d, ei |= d, c = 4;
                  break e;
                }
                d = cn, cn = c, d !== null && (cn === null ? cn = d : cn.push.apply(
                  cn,
                  d
                ));
              }
              c = h;
            }
            if (d = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          tl(e, 0), pr(e, n, 0, !0);
          break;
        }
        e: {
          switch (l = e, d = c, d) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              pr(
                l,
                n,
                En,
                !ur
              );
              break e;
            case 2:
              cn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((n & 62914560) === n && (c = lc + 300 - Bt(), 10 < c)) {
            if (pr(
              l,
              n,
              En,
              !ur
            ), vs(l, 0, !0) !== 0) break e;
            Ya = n, l.timeoutHandle = k2(
              Zm.bind(
                null,
                l,
                r,
                cn,
                sc,
                vf,
                n,
                En,
                ei,
                $i,
                ur,
                d,
                "Throttled",
                -0,
                0
              ),
              c
            );
            break e;
          }
          Zm(
            l,
            r,
            cn,
            sc,
            vf,
            n,
            En,
            ei,
            $i,
            ur,
            d,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ma(e);
  }
  function Zm(e, n, r, l, c, d, h, b, E, O, L, G, M, _) {
    if (e.timeoutHandle = -1, G = n.subtreeFlags, G & 8192 || (G & 16785408) === 16785408) {
      G = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Na
      }, Gm(
        n,
        d,
        G
      );
      var ae = (d & 62914560) === d ? lc - Bt() : (d & 4194048) === d ? Vm - Bt() : 0;
      if (ae = v5(
        G,
        ae
      ), ae !== null) {
        Ya = d, e.cancelPendingCommit = ae(
          n2.bind(
            null,
            e,
            n,
            d,
            r,
            l,
            c,
            h,
            b,
            E,
            L,
            G,
            null,
            M,
            _
          )
        ), pr(e, d, h, !O);
        return;
      }
    }
    n2(
      e,
      n,
      d,
      r,
      l,
      c,
      h,
      b,
      E
    );
  }
  function Dx(e) {
    for (var n = e; ; ) {
      var r = n.tag;
      if ((r === 0 || r === 11 || r === 15) && n.flags & 16384 && (r = n.updateQueue, r !== null && (r = r.stores, r !== null)))
        for (var l = 0; l < r.length; l++) {
          var c = r[l], d = c.getSnapshot;
          c = c.value;
          try {
            if (!vn(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (r = n.child, n.subtreeFlags & 16384 && r !== null)
        r.return = n, n = r;
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function pr(e, n, r, l) {
    n &= ~bf, n &= ~ei, e.suspendedLanes |= n, e.pingedLanes &= ~n, l && (e.warmLanes |= n), l = e.expirationTimes;
    for (var c = n; 0 < c; ) {
      var d = 31 - bn(c), h = 1 << d;
      l[d] = -1, c &= ~h;
    }
    r !== 0 && r1(e, r, n);
  }
  function cc() {
    return (qe & 6) === 0 ? (To(0), !1) : !0;
  }
  function Sf() {
    if (Re !== null) {
      if (Fe === 0)
        var e = Re.return;
      else
        e = Re, Ca = Ir = null, Ld(e), Ii = null, so = 0, e = Re;
      for (; e !== null; )
        Am(e.alternate, e), e = e.return;
      Re = null;
    }
  }
  function tl(e, n) {
    var r = e.timeoutHandle;
    r !== -1 && (e.timeoutHandle = -1, e5(r)), r = e.cancelPendingCommit, r !== null && (e.cancelPendingCommit = null, r()), Ya = 0, Sf(), $e = e, Re = r = ja(e.current, null), De = n, Fe = 0, Sn = null, ur = !1, Wi = Il(e, n), gf = !1, $i = En = bf = ei = dr = ht = 0, cn = Ao = null, vf = !1, (n & 8) !== 0 && (n |= n & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= n; 0 < l; ) {
        var c = 31 - bn(l), d = 1 << c;
        n |= e[c], l &= ~d;
      }
    return Ga = n, Cs(), r;
  }
  function Km(e, n) {
    Ae = null, C.H = bo, n === Vi || n === Us ? (n = d0(), Fe = 3) : n === Ad ? (n = d0(), Fe = 4) : Fe = n === $d ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Sn = n, Re === null && (ht = 1, Ws(
      e,
      Yn(n, e.current)
    ));
  }
  function Jm() {
    var e = xn.current;
    return e === null ? !0 : (De & 4194048) === De ? In === null : (De & 62914560) === De || (De & 536870912) !== 0 ? e === In : !1;
  }
  function Pm() {
    var e = C.H;
    return C.H = bo, e === null ? bo : e;
  }
  function Wm() {
    var e = C.A;
    return C.A = Ox, e;
  }
  function uc() {
    ht = 4, ur || (De & 4194048) !== De && xn.current !== null || (Wi = !0), (dr & 134217727) === 0 && (ei & 134217727) === 0 || $e === null || pr(
      $e,
      De,
      En,
      !1
    );
  }
  function Ef(e, n, r) {
    var l = qe;
    qe |= 2;
    var c = Pm(), d = Wm();
    ($e !== e || De !== n) && (sc = null, tl(e, n)), n = !1;
    var h = ht;
    e: do
      try {
        if (Fe !== 0 && Re !== null) {
          var b = Re, E = Sn;
          switch (Fe) {
            case 8:
              Sf(), h = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              xn.current === null && (n = !0);
              var O = Fe;
              if (Fe = 0, Sn = null, nl(e, b, E, O), r && Wi) {
                h = 0;
                break e;
              }
              break;
            default:
              O = Fe, Fe = 0, Sn = null, nl(e, b, E, O);
          }
        }
        _x(), h = ht;
        break;
      } catch (L) {
        Km(e, L);
      }
    while (!0);
    return n && e.shellSuspendCounter++, Ca = Ir = null, qe = l, C.H = c, C.A = d, Re === null && ($e = null, De = 0, Cs()), h;
  }
  function _x() {
    for (; Re !== null; ) $m(Re);
  }
  function Bx(e, n) {
    var r = qe;
    qe |= 2;
    var l = Pm(), c = Wm();
    $e !== e || De !== n ? (sc = null, oc = Bt() + 500, tl(e, n)) : Wi = Il(
      e,
      n
    );
    e: do
      try {
        if (Fe !== 0 && Re !== null) {
          n = Re;
          var d = Sn;
          t: switch (Fe) {
            case 1:
              Fe = 0, Sn = null, nl(e, n, d, 1);
              break;
            case 2:
            case 9:
              if (c0(d)) {
                Fe = 0, Sn = null, e2(n);
                break;
              }
              n = function() {
                Fe !== 2 && Fe !== 9 || $e !== e || (Fe = 7), ma(e);
              }, d.then(n, n);
              break e;
            case 3:
              Fe = 7;
              break e;
            case 4:
              Fe = 5;
              break e;
            case 7:
              c0(d) ? (Fe = 0, Sn = null, e2(n)) : (Fe = 0, Sn = null, nl(e, n, d, 7));
              break;
            case 5:
              var h = null;
              switch (Re.tag) {
                case 26:
                  h = Re.memoizedState;
                case 5:
                case 27:
                  var b = Re;
                  if (h ? H2(h) : b.stateNode.complete) {
                    Fe = 0, Sn = null;
                    var E = b.sibling;
                    if (E !== null) Re = E;
                    else {
                      var O = b.return;
                      O !== null ? (Re = O, dc(O)) : Re = null;
                    }
                    break t;
                  }
              }
              Fe = 0, Sn = null, nl(e, n, d, 5);
              break;
            case 6:
              Fe = 0, Sn = null, nl(e, n, d, 6);
              break;
            case 8:
              Sf(), ht = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        Lx();
        break;
      } catch (L) {
        Km(e, L);
      }
    while (!0);
    return Ca = Ir = null, C.H = l, C.A = c, qe = r, Re !== null ? 0 : ($e = null, De = 0, Cs(), ht);
  }
  function Lx() {
    for (; Re !== null && !fs(); )
      $m(Re);
  }
  function $m(e) {
    var n = Em(e.alternate, e, Ga);
    e.memoizedProps = e.pendingProps, n === null ? dc(e) : Re = n;
  }
  function e2(e) {
    var n = e, r = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = bm(
          r,
          n,
          n.pendingProps,
          n.type,
          void 0,
          De
        );
        break;
      case 11:
        n = bm(
          r,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          De
        );
        break;
      case 5:
        Ld(n);
      default:
        Am(r, n), n = Re = W1(n, Ga), n = Em(r, n, Ga);
    }
    e.memoizedProps = e.pendingProps, n === null ? dc(e) : Re = n;
  }
  function nl(e, n, r, l) {
    Ca = Ir = null, Ld(n), Ii = null, so = 0;
    var c = n.return;
    try {
      if (Ax(
        e,
        c,
        n,
        r,
        De
      )) {
        ht = 1, Ws(
          e,
          Yn(r, e.current)
        ), Re = null;
        return;
      }
    } catch (d) {
      if (c !== null) throw Re = c, d;
      ht = 1, Ws(
        e,
        Yn(r, e.current)
      ), Re = null;
      return;
    }
    n.flags & 32768 ? (Be || l === 1 ? e = !0 : Wi || (De & 536870912) !== 0 ? e = !1 : (ur = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = xn.current, l !== null && l.tag === 13 && (l.flags |= 16384))), t2(n, e)) : dc(n);
  }
  function dc(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        t2(
          n,
          ur
        );
        return;
      }
      e = n.return;
      var r = jx(
        n.alternate,
        n,
        Ga
      );
      if (r !== null) {
        Re = r;
        return;
      }
      if (n = n.sibling, n !== null) {
        Re = n;
        return;
      }
      Re = n = e;
    } while (n !== null);
    ht === 0 && (ht = 5);
  }
  function t2(e, n) {
    do {
      var r = zx(e.alternate, e);
      if (r !== null) {
        r.flags &= 32767, Re = r;
        return;
      }
      if (r = e.return, r !== null && (r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null), !n && (e = e.sibling, e !== null)) {
        Re = e;
        return;
      }
      Re = e = r;
    } while (e !== null);
    ht = 6, Re = null;
  }
  function n2(e, n, r, l, c, d, h, b, E) {
    e.cancelPendingCommit = null;
    do
      fc();
    while (Rt !== 0);
    if ((qe & 6) !== 0) throw Error(o(327));
    if (n !== null) {
      if (n === e.current) throw Error(o(177));
      if (d = n.lanes | n.childLanes, d |= ud, g4(
        e,
        r,
        d,
        h,
        b,
        E
      ), e === $e && (Re = $e = null, De = 0), el = n, hr = e, Ya = r, yf = d, xf = c, Im = l, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Yx(Ja, function() {
        return o2(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || l) {
        l = C.T, C.T = null, c = I.p, I.p = 2, h = qe, qe |= 4;
        try {
          Cx(e, n, r);
        } finally {
          qe = h, I.p = c, C.T = l;
        }
      }
      Rt = 1, a2(), r2(), i2();
    }
  }
  function a2() {
    if (Rt === 1) {
      Rt = 0;
      var e = hr, n = el, r = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || r) {
        r = C.T, C.T = null;
        var l = I.p;
        I.p = 2;
        var c = qe;
        qe |= 4;
        try {
          Lm(n, e);
          var d = _f, h = X1(e.containerInfo), b = d.focusedElem, E = d.selectionRange;
          if (h !== b && b && b.ownerDocument && q1(
            b.ownerDocument.documentElement,
            b
          )) {
            if (E !== null && id(b)) {
              var O = E.start, L = E.end;
              if (L === void 0 && (L = O), "selectionStart" in b)
                b.selectionStart = O, b.selectionEnd = Math.min(
                  L,
                  b.value.length
                );
              else {
                var G = b.ownerDocument || document, M = G && G.defaultView || window;
                if (M.getSelection) {
                  var _ = M.getSelection(), ae = b.textContent.length, ge = Math.min(E.start, ae), Pe = E.end === void 0 ? ge : Math.min(E.end, ae);
                  !_.extend && ge > Pe && (h = Pe, Pe = ge, ge = h);
                  var z = Y1(
                    b,
                    ge
                  ), T = Y1(
                    b,
                    Pe
                  );
                  if (z && T && (_.rangeCount !== 1 || _.anchorNode !== z.node || _.anchorOffset !== z.offset || _.focusNode !== T.node || _.focusOffset !== T.offset)) {
                    var R = G.createRange();
                    R.setStart(z.node, z.offset), _.removeAllRanges(), ge > Pe ? (_.addRange(R), _.extend(T.node, T.offset)) : (R.setEnd(T.node, T.offset), _.addRange(R));
                  }
                }
              }
            }
            for (G = [], _ = b; _ = _.parentNode; )
              _.nodeType === 1 && G.push({
                element: _,
                left: _.scrollLeft,
                top: _.scrollTop
              });
            for (typeof b.focus == "function" && b.focus(), b = 0; b < G.length; b++) {
              var U = G[b];
              U.element.scrollLeft = U.left, U.element.scrollTop = U.top;
            }
          }
          kc = !!Df, _f = Df = null;
        } finally {
          qe = c, I.p = l, C.T = r;
        }
      }
      e.current = n, Rt = 2;
    }
  }
  function r2() {
    if (Rt === 2) {
      Rt = 0;
      var e = hr, n = el, r = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || r) {
        r = C.T, C.T = null;
        var l = I.p;
        I.p = 2;
        var c = qe;
        qe |= 4;
        try {
          Om(e, n.alternate, n);
        } finally {
          qe = c, I.p = l, C.T = r;
        }
      }
      Rt = 3;
    }
  }
  function i2() {
    if (Rt === 4 || Rt === 3) {
      Rt = 0, Ei();
      var e = hr, n = el, r = Ya, l = Im;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Rt = 5 : (Rt = 0, el = hr = null, l2(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (fr = null), Gu(r), n = n.stateNode, gn && typeof gn.onCommitFiberRoot == "function")
        try {
          gn.onCommitFiberRoot(
            Vl,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        n = C.T, c = I.p, I.p = 2, C.T = null;
        try {
          for (var d = e.onRecoverableError, h = 0; h < l.length; h++) {
            var b = l[h];
            d(b.value, {
              componentStack: b.stack
            });
          }
        } finally {
          C.T = n, I.p = c;
        }
      }
      (Ya & 3) !== 0 && fc(), ma(e), c = e.pendingLanes, (r & 261930) !== 0 && (c & 42) !== 0 ? e === wf ? No++ : (No = 0, wf = e) : No = 0, To(0);
    }
  }
  function l2(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, lo(n)));
  }
  function fc() {
    return a2(), r2(), i2(), o2();
  }
  function o2() {
    if (Rt !== 5) return !1;
    var e = hr, n = yf;
    yf = 0;
    var r = Gu(Ya), l = C.T, c = I.p;
    try {
      I.p = 32 > r ? 32 : r, C.T = null, r = xf, xf = null;
      var d = hr, h = Ya;
      if (Rt = 0, el = hr = null, Ya = 0, (qe & 6) !== 0) throw Error(o(331));
      var b = qe;
      if (qe |= 4, qm(d.current), Hm(
        d,
        d.current,
        h,
        r
      ), qe = b, To(0, !1), gn && typeof gn.onPostCommitFiberRoot == "function")
        try {
          gn.onPostCommitFiberRoot(Vl, d);
        } catch {
        }
      return !0;
    } finally {
      I.p = c, C.T = l, l2(e, n);
    }
  }
  function s2(e, n, r) {
    n = Yn(r, n), n = Wd(e.stateNode, n, 2), e = lr(e, n, 2), e !== null && (Ql(e, 2), ma(e));
  }
  function Ze(e, n, r) {
    if (e.tag === 3)
      s2(e, e, r);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          s2(
            n,
            e,
            r
          );
          break;
        } else if (n.tag === 1) {
          var l = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (fr === null || !fr.has(l))) {
            e = Yn(r, e), r = cm(2), l = lr(n, r, 2), l !== null && (um(
              r,
              l,
              n,
              e
            ), Ql(l, 2), ma(l));
            break;
          }
        }
        n = n.return;
      }
  }
  function kf(e, n, r) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Mx();
      var c = /* @__PURE__ */ new Set();
      l.set(n, c);
    } else
      c = l.get(n), c === void 0 && (c = /* @__PURE__ */ new Set(), l.set(n, c));
    c.has(r) || (gf = !0, c.add(r), e = Ux.bind(null, e, n, r), n.then(e, e));
  }
  function Ux(e, n, r) {
    var l = e.pingCache;
    l !== null && l.delete(n), e.pingedLanes |= e.suspendedLanes & r, e.warmLanes &= ~r, $e === e && (De & r) === r && (ht === 4 || ht === 3 && (De & 62914560) === De && 300 > Bt() - lc ? (qe & 2) === 0 && tl(e, 0) : bf |= r, $i === De && ($i = 0)), ma(e);
  }
  function c2(e, n) {
    n === 0 && (n = a1()), e = qr(e, n), e !== null && (Ql(e, n), ma(e));
  }
  function Hx(e) {
    var n = e.memoizedState, r = 0;
    n !== null && (r = n.retryLane), c2(e, r);
  }
  function Gx(e, n) {
    var r = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, c = e.memoizedState;
        c !== null && (r = c.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    l !== null && l.delete(n), c2(e, r);
  }
  function Yx(e, n) {
    return Jt(e, n);
  }
  var hc = null, al = null, Af = !1, pc = !1, Nf = !1, mr = 0;
  function ma(e) {
    e !== al && e.next === null && (al === null ? hc = al = e : al = al.next = e), pc = !0, Af || (Af = !0, Xx());
  }
  function To(e, n) {
    if (!Nf && pc) {
      Nf = !0;
      do
        for (var r = !1, l = hc; l !== null; ) {
          if (e !== 0) {
            var c = l.pendingLanes;
            if (c === 0) var d = 0;
            else {
              var h = l.suspendedLanes, b = l.pingedLanes;
              d = (1 << 31 - bn(42 | e) + 1) - 1, d &= c & ~(h & ~b), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0;
            }
            d !== 0 && (r = !0, h2(l, d));
          } else
            d = De, d = vs(
              l,
              l === $e ? d : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (d & 3) === 0 || Il(l, d) || (r = !0, h2(l, d));
          l = l.next;
        }
      while (r);
      Nf = !1;
    }
  }
  function qx() {
    u2();
  }
  function u2() {
    pc = Af = !1;
    var e = 0;
    mr !== 0 && $x() && (e = mr);
    for (var n = Bt(), r = null, l = hc; l !== null; ) {
      var c = l.next, d = d2(l, n);
      d === 0 ? (l.next = null, r === null ? hc = c : r.next = c, c === null && (al = r)) : (r = l, (e !== 0 || (d & 3) !== 0) && (pc = !0)), l = c;
    }
    Rt !== 0 && Rt !== 5 || To(e), mr !== 0 && (mr = 0);
  }
  function d2(e, n) {
    for (var r = e.suspendedLanes, l = e.pingedLanes, c = e.expirationTimes, d = e.pendingLanes & -62914561; 0 < d; ) {
      var h = 31 - bn(d), b = 1 << h, E = c[h];
      E === -1 ? ((b & r) === 0 || (b & l) !== 0) && (c[h] = m4(b, n)) : E <= n && (e.expiredLanes |= b), d &= ~b;
    }
    if (n = $e, r = De, r = vs(
      e,
      e === n ? r : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, r === 0 || e === n && (Fe === 2 || Fe === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Si(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((r & 3) === 0 || Il(e, r)) {
      if (n = r & -r, n === e.callbackPriority) return n;
      switch (l !== null && Si(l), Gu(r)) {
        case 2:
        case 8:
          r = Br;
          break;
        case 32:
          r = Ja;
          break;
        case 268435456:
          r = Xl;
          break;
        default:
          r = Ja;
      }
      return l = f2.bind(null, e), r = Jt(r, l), e.callbackPriority = n, e.callbackNode = r, n;
    }
    return l !== null && l !== null && Si(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function f2(e, n) {
    if (Rt !== 0 && Rt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var r = e.callbackNode;
    if (fc() && e.callbackNode !== r)
      return null;
    var l = De;
    return l = vs(
      e,
      e === $e ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (Fm(e, l, n), d2(e, Bt()), e.callbackNode != null && e.callbackNode === r ? f2.bind(null, e) : null);
  }
  function h2(e, n) {
    if (fc()) return null;
    Fm(e, n, !0);
  }
  function Xx() {
    t5(function() {
      (qe & 6) !== 0 ? Jt(
        ql,
        qx
      ) : u2();
    });
  }
  function Tf() {
    if (mr === 0) {
      var e = qi;
      e === 0 && (e = ms, ms <<= 1, (ms & 261888) === 0 && (ms = 256)), mr = e;
    }
    return mr;
  }
  function p2(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ss("" + e);
  }
  function m2(e, n) {
    var r = n.ownerDocument.createElement("input");
    return r.name = n.name, r.value = n.value, e.id && r.setAttribute("form", e.id), n.parentNode.insertBefore(r, n), e = new FormData(e), r.parentNode.removeChild(r), e;
  }
  function Vx(e, n, r, l, c) {
    if (n === "submit" && r && r.stateNode === c) {
      var d = p2(
        (c[an] || null).action
      ), h = l.submitter;
      h && (n = (n = h[an] || null) ? p2(n.formAction) : h.getAttribute("formAction"), n !== null && (d = n, h = null));
      var b = new Ns(
        "action",
        "action",
        null,
        l,
        c
      );
      e.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (mr !== 0) {
                  var E = h ? m2(c, h) : new FormData(c);
                  Qd(
                    r,
                    {
                      pending: !0,
                      data: E,
                      method: c.method,
                      action: d
                    },
                    null,
                    E
                  );
                }
              } else
                typeof d == "function" && (b.preventDefault(), E = h ? m2(c, h) : new FormData(c), Qd(
                  r,
                  {
                    pending: !0,
                    data: E,
                    method: c.method,
                    action: d
                  },
                  d,
                  E
                ));
            },
            currentTarget: c
          }
        ]
      });
    }
  }
  for (var jf = 0; jf < cd.length; jf++) {
    var zf = cd[jf], Ix = zf.toLowerCase(), Qx = zf[0].toUpperCase() + zf.slice(1);
    ta(
      Ix,
      "on" + Qx
    );
  }
  ta(Q1, "onAnimationEnd"), ta(F1, "onAnimationIteration"), ta(Z1, "onAnimationStart"), ta("dblclick", "onDoubleClick"), ta("focusin", "onFocus"), ta("focusout", "onBlur"), ta(sx, "onTransitionRun"), ta(cx, "onTransitionStart"), ta(ux, "onTransitionCancel"), ta(K1, "onTransitionEnd"), ji("onMouseEnter", ["mouseout", "mouseover"]), ji("onMouseLeave", ["mouseout", "mouseover"]), ji("onPointerEnter", ["pointerout", "pointerover"]), ji("onPointerLeave", ["pointerout", "pointerover"]), Ur(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ur(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ur("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ur(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ur(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ur(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var jo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Fx = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jo)
  );
  function g2(e, n) {
    n = (n & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var l = e[r], c = l.event;
      l = l.listeners;
      e: {
        var d = void 0;
        if (n)
          for (var h = l.length - 1; 0 <= h; h--) {
            var b = l[h], E = b.instance, O = b.currentTarget;
            if (b = b.listener, E !== d && c.isPropagationStopped())
              break e;
            d = b, c.currentTarget = O;
            try {
              d(c);
            } catch (L) {
              zs(L);
            }
            c.currentTarget = null, d = E;
          }
        else
          for (h = 0; h < l.length; h++) {
            if (b = l[h], E = b.instance, O = b.currentTarget, b = b.listener, E !== d && c.isPropagationStopped())
              break e;
            d = b, c.currentTarget = O;
            try {
              d(c);
            } catch (L) {
              zs(L);
            }
            c.currentTarget = null, d = E;
          }
      }
    }
  }
  function Oe(e, n) {
    var r = n[Yu];
    r === void 0 && (r = n[Yu] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    r.has(l) || (b2(n, e, 2, !1), r.add(l));
  }
  function Cf(e, n, r) {
    var l = 0;
    n && (l |= 4), b2(
      r,
      e,
      l,
      n
    );
  }
  var mc = "_reactListening" + Math.random().toString(36).slice(2);
  function Rf(e) {
    if (!e[mc]) {
      e[mc] = !0, u1.forEach(function(r) {
        r !== "selectionchange" && (Fx.has(r) || Cf(r, !1, e), Cf(r, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[mc] || (n[mc] = !0, Cf("selectionchange", !1, n));
    }
  }
  function b2(e, n, r, l) {
    switch (Q2(n)) {
      case 2:
        var c = w5;
        break;
      case 8:
        c = S5;
        break;
      default:
        c = Qf;
    }
    r = c.bind(
      null,
      n,
      r,
      e
    ), c = void 0, !Ju || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (c = !0), l ? c !== void 0 ? e.addEventListener(n, r, {
      capture: !0,
      passive: c
    }) : e.addEventListener(n, r, !0) : c !== void 0 ? e.addEventListener(n, r, {
      passive: c
    }) : e.addEventListener(n, r, !1);
  }
  function Of(e, n, r, l, c) {
    var d = l;
    if ((n & 1) === 0 && (n & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var h = l.tag;
        if (h === 3 || h === 4) {
          var b = l.stateNode.containerInfo;
          if (b === c) break;
          if (h === 4)
            for (h = l.return; h !== null; ) {
              var E = h.tag;
              if ((E === 3 || E === 4) && h.stateNode.containerInfo === c)
                return;
              h = h.return;
            }
          for (; b !== null; ) {
            if (h = Ai(b), h === null) return;
            if (E = h.tag, E === 5 || E === 6 || E === 26 || E === 27) {
              l = d = h;
              continue e;
            }
            b = b.parentNode;
          }
        }
        l = l.return;
      }
    S1(function() {
      var O = d, L = Zu(r), G = [];
      e: {
        var M = J1.get(e);
        if (M !== void 0) {
          var _ = Ns, ae = e;
          switch (e) {
            case "keypress":
              if (ks(r) === 0) break e;
            case "keydown":
            case "keyup":
              _ = G4;
              break;
            case "focusin":
              ae = "focus", _ = ed;
              break;
            case "focusout":
              ae = "blur", _ = ed;
              break;
            case "beforeblur":
            case "afterblur":
              _ = ed;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              _ = A1;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _ = j4;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _ = X4;
              break;
            case Q1:
            case F1:
            case Z1:
              _ = R4;
              break;
            case K1:
              _ = I4;
              break;
            case "scroll":
            case "scrollend":
              _ = N4;
              break;
            case "wheel":
              _ = F4;
              break;
            case "copy":
            case "cut":
            case "paste":
              _ = M4;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _ = T1;
              break;
            case "toggle":
            case "beforetoggle":
              _ = K4;
          }
          var ge = (n & 4) !== 0, Pe = !ge && (e === "scroll" || e === "scrollend"), z = ge ? M !== null ? M + "Capture" : null : M;
          ge = [];
          for (var T = O, R; T !== null; ) {
            var U = T;
            if (R = U.stateNode, U = U.tag, U !== 5 && U !== 26 && U !== 27 || R === null || z === null || (U = Kl(T, z), U != null && ge.push(
              zo(T, U, R)
            )), Pe) break;
            T = T.return;
          }
          0 < ge.length && (M = new _(
            M,
            ae,
            null,
            r,
            L
          ), G.push({ event: M, listeners: ge }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (M = e === "mouseover" || e === "pointerover", _ = e === "mouseout" || e === "pointerout", M && r !== Fu && (ae = r.relatedTarget || r.fromElement) && (Ai(ae) || ae[ki]))
            break e;
          if ((_ || M) && (M = L.window === L ? L : (M = L.ownerDocument) ? M.defaultView || M.parentWindow : window, _ ? (ae = r.relatedTarget || r.toElement, _ = O, ae = ae ? Ai(ae) : null, ae !== null && (Pe = u(ae), ge = ae.tag, ae !== Pe || ge !== 5 && ge !== 27 && ge !== 6) && (ae = null)) : (_ = null, ae = O), _ !== ae)) {
            if (ge = A1, U = "onMouseLeave", z = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (ge = T1, U = "onPointerLeave", z = "onPointerEnter", T = "pointer"), Pe = _ == null ? M : Zl(_), R = ae == null ? M : Zl(ae), M = new ge(
              U,
              T + "leave",
              _,
              r,
              L
            ), M.target = Pe, M.relatedTarget = R, U = null, Ai(L) === O && (ge = new ge(
              z,
              T + "enter",
              ae,
              r,
              L
            ), ge.target = R, ge.relatedTarget = Pe, U = ge), Pe = U, _ && ae)
              t: {
                for (ge = Zx, z = _, T = ae, R = 0, U = z; U; U = ge(U))
                  R++;
                U = 0;
                for (var pe = T; pe; pe = ge(pe))
                  U++;
                for (; 0 < R - U; )
                  z = ge(z), R--;
                for (; 0 < U - R; )
                  T = ge(T), U--;
                for (; R--; ) {
                  if (z === T || T !== null && z === T.alternate) {
                    ge = z;
                    break t;
                  }
                  z = ge(z), T = ge(T);
                }
                ge = null;
              }
            else ge = null;
            _ !== null && v2(
              G,
              M,
              _,
              ge,
              !1
            ), ae !== null && Pe !== null && v2(
              G,
              Pe,
              ae,
              ge,
              !0
            );
          }
        }
        e: {
          if (M = O ? Zl(O) : window, _ = M.nodeName && M.nodeName.toLowerCase(), _ === "select" || _ === "input" && M.type === "file")
            var He = _1;
          else if (M1(M))
            if (B1)
              He = ix;
            else {
              He = ax;
              var se = nx;
            }
          else
            _ = M.nodeName, !_ || _.toLowerCase() !== "input" || M.type !== "checkbox" && M.type !== "radio" ? O && Qu(O.elementType) && (He = _1) : He = rx;
          if (He && (He = He(e, O))) {
            D1(
              G,
              He,
              r,
              L
            );
            break e;
          }
          se && se(e, M, O), e === "focusout" && O && M.type === "number" && O.memoizedProps.value != null && Iu(M, "number", M.value);
        }
        switch (se = O ? Zl(O) : window, e) {
          case "focusin":
            (M1(se) || se.contentEditable === "true") && (Di = se, ld = O, ao = null);
            break;
          case "focusout":
            ao = ld = Di = null;
            break;
          case "mousedown":
            od = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            od = !1, V1(G, r, L);
            break;
          case "selectionchange":
            if (ox) break;
          case "keydown":
          case "keyup":
            V1(G, r, L);
        }
        var Ne;
        if (nd)
          e: {
            switch (e) {
              case "compositionstart":
                var _e = "onCompositionStart";
                break e;
              case "compositionend":
                _e = "onCompositionEnd";
                break e;
              case "compositionupdate":
                _e = "onCompositionUpdate";
                break e;
            }
            _e = void 0;
          }
        else
          Mi ? R1(e, r) && (_e = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (_e = "onCompositionStart");
        _e && (j1 && r.locale !== "ko" && (Mi || _e !== "onCompositionStart" ? _e === "onCompositionEnd" && Mi && (Ne = E1()) : ($a = L, Pu = "value" in $a ? $a.value : $a.textContent, Mi = !0)), se = gc(O, _e), 0 < se.length && (_e = new N1(
          _e,
          e,
          null,
          r,
          L
        ), G.push({ event: _e, listeners: se }), Ne ? _e.data = Ne : (Ne = O1(r), Ne !== null && (_e.data = Ne)))), (Ne = P4 ? W4(e, r) : $4(e, r)) && (_e = gc(O, "onBeforeInput"), 0 < _e.length && (se = new N1(
          "onBeforeInput",
          "beforeinput",
          null,
          r,
          L
        ), G.push({
          event: se,
          listeners: _e
        }), se.data = Ne)), Vx(
          G,
          e,
          O,
          r,
          L
        );
      }
      g2(G, n);
    });
  }
  function zo(e, n, r) {
    return {
      instance: e,
      listener: n,
      currentTarget: r
    };
  }
  function gc(e, n) {
    for (var r = n + "Capture", l = []; e !== null; ) {
      var c = e, d = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || d === null || (c = Kl(e, r), c != null && l.unshift(
        zo(e, c, d)
      ), c = Kl(e, n), c != null && l.push(
        zo(e, c, d)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function Zx(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function v2(e, n, r, l, c) {
    for (var d = n._reactName, h = []; r !== null && r !== l; ) {
      var b = r, E = b.alternate, O = b.stateNode;
      if (b = b.tag, E !== null && E === l) break;
      b !== 5 && b !== 26 && b !== 27 || O === null || (E = O, c ? (O = Kl(r, d), O != null && h.unshift(
        zo(r, O, E)
      )) : c || (O = Kl(r, d), O != null && h.push(
        zo(r, O, E)
      ))), r = r.return;
    }
    h.length !== 0 && e.push({ event: n, listeners: h });
  }
  var Kx = /\r\n?/g, Jx = /\u0000|\uFFFD/g;
  function y2(e) {
    return (typeof e == "string" ? e : "" + e).replace(Kx, `
`).replace(Jx, "");
  }
  function x2(e, n) {
    return n = y2(n), y2(e) === n;
  }
  function Je(e, n, r, l, c, d) {
    switch (r) {
      case "children":
        typeof l == "string" ? n === "body" || n === "textarea" && l === "" || Ci(e, l) : (typeof l == "number" || typeof l == "bigint") && n !== "body" && Ci(e, "" + l);
        break;
      case "className":
        xs(e, "class", l);
        break;
      case "tabIndex":
        xs(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        xs(e, r, l);
        break;
      case "style":
        x1(e, l, d);
        break;
      case "data":
        if (n !== "object") {
          xs(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (n !== "a" || r !== "href")) {
          e.removeAttribute(r);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(r);
          break;
        }
        l = Ss("" + l), e.setAttribute(r, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            r,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof d == "function" && (r === "formAction" ? (n !== "input" && Je(e, n, "name", c.name, c, null), Je(
            e,
            n,
            "formEncType",
            c.formEncType,
            c,
            null
          ), Je(
            e,
            n,
            "formMethod",
            c.formMethod,
            c,
            null
          ), Je(
            e,
            n,
            "formTarget",
            c.formTarget,
            c,
            null
          )) : (Je(e, n, "encType", c.encType, c, null), Je(e, n, "method", c.method, c, null), Je(e, n, "target", c.target, c, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(r);
          break;
        }
        l = Ss("" + l), e.setAttribute(r, l);
        break;
      case "onClick":
        l != null && (e.onclick = Na);
        break;
      case "onScroll":
        l != null && Oe("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Oe("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(o(61));
          if (r = l.__html, r != null) {
            if (c.children != null) throw Error(o(60));
            e.innerHTML = r;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        r = Ss("" + l), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          r
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(r, "" + l) : e.removeAttribute(r);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(r, "") : e.removeAttribute(r);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(r, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(r, l) : e.removeAttribute(r);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(r, l) : e.removeAttribute(r);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(r) : e.setAttribute(r, l);
        break;
      case "popover":
        Oe("beforetoggle", e), Oe("toggle", e), ys(e, "popover", l);
        break;
      case "xlinkActuate":
        Aa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        Aa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        Aa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        Aa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        Aa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        Aa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        Aa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        Aa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        Aa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        ys(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (r = k4.get(r) || r, ys(e, r, l));
    }
  }
  function Mf(e, n, r, l, c, d) {
    switch (r) {
      case "style":
        x1(e, l, d);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(o(61));
          if (r = l.__html, r != null) {
            if (c.children != null) throw Error(o(60));
            e.innerHTML = r;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Ci(e, l) : (typeof l == "number" || typeof l == "bigint") && Ci(e, "" + l);
        break;
      case "onScroll":
        l != null && Oe("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Oe("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = Na);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!d1.hasOwnProperty(r))
          e: {
            if (r[0] === "o" && r[1] === "n" && (c = r.endsWith("Capture"), n = r.slice(2, c ? r.length - 7 : void 0), d = e[an] || null, d = d != null ? d[r] : null, typeof d == "function" && e.removeEventListener(n, d, c), typeof l == "function")) {
              typeof d != "function" && d !== null && (r in e ? e[r] = null : e.hasAttribute(r) && e.removeAttribute(r)), e.addEventListener(n, l, c);
              break e;
            }
            r in e ? e[r] = l : l === !0 ? e.setAttribute(r, "") : ys(e, r, l);
          }
    }
  }
  function Ft(e, n, r) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Oe("error", e), Oe("load", e);
        var l = !1, c = !1, d;
        for (d in r)
          if (r.hasOwnProperty(d)) {
            var h = r[d];
            if (h != null)
              switch (d) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, n));
                default:
                  Je(e, n, d, h, r, null);
              }
          }
        c && Je(e, n, "srcSet", r.srcSet, r, null), l && Je(e, n, "src", r.src, r, null);
        return;
      case "input":
        Oe("invalid", e);
        var b = d = h = c = null, E = null, O = null;
        for (l in r)
          if (r.hasOwnProperty(l)) {
            var L = r[l];
            if (L != null)
              switch (l) {
                case "name":
                  c = L;
                  break;
                case "type":
                  h = L;
                  break;
                case "checked":
                  E = L;
                  break;
                case "defaultChecked":
                  O = L;
                  break;
                case "value":
                  d = L;
                  break;
                case "defaultValue":
                  b = L;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (L != null)
                    throw Error(o(137, n));
                  break;
                default:
                  Je(e, n, l, L, r, null);
              }
          }
        g1(
          e,
          d,
          b,
          E,
          O,
          h,
          c,
          !1
        );
        return;
      case "select":
        Oe("invalid", e), l = h = d = null;
        for (c in r)
          if (r.hasOwnProperty(c) && (b = r[c], b != null))
            switch (c) {
              case "value":
                d = b;
                break;
              case "defaultValue":
                h = b;
                break;
              case "multiple":
                l = b;
              default:
                Je(e, n, c, b, r, null);
            }
        n = d, r = h, e.multiple = !!l, n != null ? zi(e, !!l, n, !1) : r != null && zi(e, !!l, r, !0);
        return;
      case "textarea":
        Oe("invalid", e), d = c = l = null;
        for (h in r)
          if (r.hasOwnProperty(h) && (b = r[h], b != null))
            switch (h) {
              case "value":
                l = b;
                break;
              case "defaultValue":
                c = b;
                break;
              case "children":
                d = b;
                break;
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(o(91));
                break;
              default:
                Je(e, n, h, b, r, null);
            }
        v1(e, l, c, d);
        return;
      case "option":
        for (E in r)
          r.hasOwnProperty(E) && (l = r[E], l != null) && (E === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : Je(e, n, E, l, r, null));
        return;
      case "dialog":
        Oe("beforetoggle", e), Oe("toggle", e), Oe("cancel", e), Oe("close", e);
        break;
      case "iframe":
      case "object":
        Oe("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < jo.length; l++)
          Oe(jo[l], e);
        break;
      case "image":
        Oe("error", e), Oe("load", e);
        break;
      case "details":
        Oe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Oe("error", e), Oe("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (O in r)
          if (r.hasOwnProperty(O) && (l = r[O], l != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, n));
              default:
                Je(e, n, O, l, r, null);
            }
        return;
      default:
        if (Qu(n)) {
          for (L in r)
            r.hasOwnProperty(L) && (l = r[L], l !== void 0 && Mf(
              e,
              n,
              L,
              l,
              r,
              void 0
            ));
          return;
        }
    }
    for (b in r)
      r.hasOwnProperty(b) && (l = r[b], l != null && Je(e, n, b, l, r, null));
  }
  function Px(e, n, r, l) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var c = null, d = null, h = null, b = null, E = null, O = null, L = null;
        for (_ in r) {
          var G = r[_];
          if (r.hasOwnProperty(_) && G != null)
            switch (_) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                E = G;
              default:
                l.hasOwnProperty(_) || Je(e, n, _, null, l, G);
            }
        }
        for (var M in l) {
          var _ = l[M];
          if (G = r[M], l.hasOwnProperty(M) && (_ != null || G != null))
            switch (M) {
              case "type":
                d = _;
                break;
              case "name":
                c = _;
                break;
              case "checked":
                O = _;
                break;
              case "defaultChecked":
                L = _;
                break;
              case "value":
                h = _;
                break;
              case "defaultValue":
                b = _;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(o(137, n));
                break;
              default:
                _ !== G && Je(
                  e,
                  n,
                  M,
                  _,
                  l,
                  G
                );
            }
        }
        Vu(
          e,
          h,
          b,
          E,
          O,
          L,
          d,
          c
        );
        return;
      case "select":
        _ = h = b = M = null;
        for (d in r)
          if (E = r[d], r.hasOwnProperty(d) && E != null)
            switch (d) {
              case "value":
                break;
              case "multiple":
                _ = E;
              default:
                l.hasOwnProperty(d) || Je(
                  e,
                  n,
                  d,
                  null,
                  l,
                  E
                );
            }
        for (c in l)
          if (d = l[c], E = r[c], l.hasOwnProperty(c) && (d != null || E != null))
            switch (c) {
              case "value":
                M = d;
                break;
              case "defaultValue":
                b = d;
                break;
              case "multiple":
                h = d;
              default:
                d !== E && Je(
                  e,
                  n,
                  c,
                  d,
                  l,
                  E
                );
            }
        n = b, r = h, l = _, M != null ? zi(e, !!r, M, !1) : !!l != !!r && (n != null ? zi(e, !!r, n, !0) : zi(e, !!r, r ? [] : "", !1));
        return;
      case "textarea":
        _ = M = null;
        for (b in r)
          if (c = r[b], r.hasOwnProperty(b) && c != null && !l.hasOwnProperty(b))
            switch (b) {
              case "value":
                break;
              case "children":
                break;
              default:
                Je(e, n, b, null, l, c);
            }
        for (h in l)
          if (c = l[h], d = r[h], l.hasOwnProperty(h) && (c != null || d != null))
            switch (h) {
              case "value":
                M = c;
                break;
              case "defaultValue":
                _ = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(o(91));
                break;
              default:
                c !== d && Je(e, n, h, c, l, d);
            }
        b1(e, M, _);
        return;
      case "option":
        for (var ae in r)
          M = r[ae], r.hasOwnProperty(ae) && M != null && !l.hasOwnProperty(ae) && (ae === "selected" ? e.selected = !1 : Je(
            e,
            n,
            ae,
            null,
            l,
            M
          ));
        for (E in l)
          M = l[E], _ = r[E], l.hasOwnProperty(E) && M !== _ && (M != null || _ != null) && (E === "selected" ? e.selected = M && typeof M != "function" && typeof M != "symbol" : Je(
            e,
            n,
            E,
            M,
            l,
            _
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ge in r)
          M = r[ge], r.hasOwnProperty(ge) && M != null && !l.hasOwnProperty(ge) && Je(e, n, ge, null, l, M);
        for (O in l)
          if (M = l[O], _ = r[O], l.hasOwnProperty(O) && M !== _ && (M != null || _ != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null)
                  throw Error(o(137, n));
                break;
              default:
                Je(
                  e,
                  n,
                  O,
                  M,
                  l,
                  _
                );
            }
        return;
      default:
        if (Qu(n)) {
          for (var Pe in r)
            M = r[Pe], r.hasOwnProperty(Pe) && M !== void 0 && !l.hasOwnProperty(Pe) && Mf(
              e,
              n,
              Pe,
              void 0,
              l,
              M
            );
          for (L in l)
            M = l[L], _ = r[L], !l.hasOwnProperty(L) || M === _ || M === void 0 && _ === void 0 || Mf(
              e,
              n,
              L,
              M,
              l,
              _
            );
          return;
        }
    }
    for (var z in r)
      M = r[z], r.hasOwnProperty(z) && M != null && !l.hasOwnProperty(z) && Je(e, n, z, null, l, M);
    for (G in l)
      M = l[G], _ = r[G], !l.hasOwnProperty(G) || M === _ || M == null && _ == null || Je(e, n, G, M, l, _);
  }
  function w2(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Wx() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, n = 0, r = performance.getEntriesByType("resource"), l = 0; l < r.length; l++) {
        var c = r[l], d = c.transferSize, h = c.initiatorType, b = c.duration;
        if (d && b && w2(h)) {
          for (h = 0, b = c.responseEnd, l += 1; l < r.length; l++) {
            var E = r[l], O = E.startTime;
            if (O > b) break;
            var L = E.transferSize, G = E.initiatorType;
            L && w2(G) && (E = E.responseEnd, h += L * (E < b ? 1 : (b - O) / (E - O)));
          }
          if (--l, n += 8 * (d + h) / (c.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return n / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Df = null, _f = null;
  function bc(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function S2(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function E2(e, n) {
    if (e === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && n === "foreignObject" ? 0 : e;
  }
  function Bf(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Lf = null;
  function $x() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Lf ? !1 : (Lf = e, !0) : (Lf = null, !1);
  }
  var k2 = typeof setTimeout == "function" ? setTimeout : void 0, e5 = typeof clearTimeout == "function" ? clearTimeout : void 0, A2 = typeof Promise == "function" ? Promise : void 0, t5 = typeof queueMicrotask == "function" ? queueMicrotask : typeof A2 < "u" ? function(e) {
    return A2.resolve(null).then(e).catch(n5);
  } : k2;
  function n5(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function gr(e) {
    return e === "head";
  }
  function N2(e, n) {
    var r = n, l = 0;
    do {
      var c = r.nextSibling;
      if (e.removeChild(r), c && c.nodeType === 8)
        if (r = c.data, r === "/$" || r === "/&") {
          if (l === 0) {
            e.removeChild(c), ol(n);
            return;
          }
          l--;
        } else if (r === "$" || r === "$?" || r === "$~" || r === "$!" || r === "&")
          l++;
        else if (r === "html")
          Co(e.ownerDocument.documentElement);
        else if (r === "head") {
          r = e.ownerDocument.head, Co(r);
          for (var d = r.firstChild; d; ) {
            var h = d.nextSibling, b = d.nodeName;
            d[Fl] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && d.rel.toLowerCase() === "stylesheet" || r.removeChild(d), d = h;
          }
        } else
          r === "body" && Co(e.ownerDocument.body);
      r = c;
    } while (r);
    ol(n);
  }
  function T2(e, n) {
    var r = e;
    e = 0;
    do {
      var l = r.nextSibling;
      if (r.nodeType === 1 ? n ? (r._stashedDisplay = r.style.display, r.style.display = "none") : (r.style.display = r._stashedDisplay || "", r.getAttribute("style") === "" && r.removeAttribute("style")) : r.nodeType === 3 && (n ? (r._stashedText = r.nodeValue, r.nodeValue = "") : r.nodeValue = r._stashedText || ""), l && l.nodeType === 8)
        if (r = l.data, r === "/$") {
          if (e === 0) break;
          e--;
        } else
          r !== "$" && r !== "$?" && r !== "$~" && r !== "$!" || e++;
      r = l;
    } while (r);
  }
  function Uf(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var r = n;
      switch (n = n.nextSibling, r.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Uf(r), qu(r);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (r.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(r);
    }
  }
  function a5(e, n, r, l) {
    for (; e.nodeType === 1; ) {
      var c = r;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[Fl])
          switch (n) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (d = e.getAttribute("rel"), d === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (d !== c.rel || e.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || e.getAttribute("title") !== (c.title == null ? null : c.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (d = e.getAttribute("src"), (d !== (c.src == null ? null : c.src) || e.getAttribute("type") !== (c.type == null ? null : c.type) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && d && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var d = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === d)
          return e;
      } else return e;
      if (e = Qn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function r5(e, n, r) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !r || (e = Qn(e.nextSibling), e === null)) return null;
    return e;
  }
  function j2(e, n) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Qn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Hf(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Gf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function i5(e, n) {
    var r = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = n;
    else if (e.data !== "$?" || r.readyState !== "loading")
      n();
    else {
      var l = function() {
        n(), r.removeEventListener("DOMContentLoaded", l);
      };
      r.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function Qn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F")
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return e;
  }
  var Yf = null;
  function z2(e) {
    e = e.nextSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "/$" || r === "/&") {
          if (n === 0)
            return Qn(e.nextSibling);
          n--;
        } else
          r !== "$" && r !== "$!" && r !== "$?" && r !== "$~" && r !== "&" || n++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function C2(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?" || r === "$~" || r === "&") {
          if (n === 0) return e;
          n--;
        } else r !== "/$" && r !== "/&" || n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function R2(e, n, r) {
    switch (n = bc(r), e) {
      case "html":
        if (e = n.documentElement, !e) throw Error(o(452));
        return e;
      case "head":
        if (e = n.head, !e) throw Error(o(453));
        return e;
      case "body":
        if (e = n.body, !e) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function Co(e) {
    for (var n = e.attributes; n.length; )
      e.removeAttributeNode(n[0]);
    qu(e);
  }
  var Fn = /* @__PURE__ */ new Map(), O2 = /* @__PURE__ */ new Set();
  function vc(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var qa = I.d;
  I.d = {
    f: l5,
    r: o5,
    D: s5,
    C: c5,
    L: u5,
    m: d5,
    X: h5,
    S: f5,
    M: p5
  };
  function l5() {
    var e = qa.f(), n = cc();
    return e || n;
  }
  function o5(e) {
    var n = Ni(e);
    n !== null && n.tag === 5 && n.type === "form" ? K0(n) : qa.r(e);
  }
  var rl = typeof document > "u" ? null : document;
  function M2(e, n, r) {
    var l = rl;
    if (l && typeof n == "string" && n) {
      var c = Hn(n);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof r == "string" && (c += '[crossorigin="' + r + '"]'), O2.has(c) || (O2.add(c), e = { rel: e, crossOrigin: r, href: n }, l.querySelector(c) === null && (n = l.createElement("link"), Ft(n, "link", e), Lt(n), l.head.appendChild(n)));
    }
  }
  function s5(e) {
    qa.D(e), M2("dns-prefetch", e, null);
  }
  function c5(e, n) {
    qa.C(e, n), M2("preconnect", e, n);
  }
  function u5(e, n, r) {
    qa.L(e, n, r);
    var l = rl;
    if (l && e && n) {
      var c = 'link[rel="preload"][as="' + Hn(n) + '"]';
      n === "image" && r && r.imageSrcSet ? (c += '[imagesrcset="' + Hn(
        r.imageSrcSet
      ) + '"]', typeof r.imageSizes == "string" && (c += '[imagesizes="' + Hn(
        r.imageSizes
      ) + '"]')) : c += '[href="' + Hn(e) + '"]';
      var d = c;
      switch (n) {
        case "style":
          d = il(e);
          break;
        case "script":
          d = ll(e);
      }
      Fn.has(d) || (e = w(
        {
          rel: "preload",
          href: n === "image" && r && r.imageSrcSet ? void 0 : e,
          as: n
        },
        r
      ), Fn.set(d, e), l.querySelector(c) !== null || n === "style" && l.querySelector(Ro(d)) || n === "script" && l.querySelector(Oo(d)) || (n = l.createElement("link"), Ft(n, "link", e), Lt(n), l.head.appendChild(n)));
    }
  }
  function d5(e, n) {
    qa.m(e, n);
    var r = rl;
    if (r && e) {
      var l = n && typeof n.as == "string" ? n.as : "script", c = 'link[rel="modulepreload"][as="' + Hn(l) + '"][href="' + Hn(e) + '"]', d = c;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = ll(e);
      }
      if (!Fn.has(d) && (e = w({ rel: "modulepreload", href: e }, n), Fn.set(d, e), r.querySelector(c) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (r.querySelector(Oo(d)))
              return;
        }
        l = r.createElement("link"), Ft(l, "link", e), Lt(l), r.head.appendChild(l);
      }
    }
  }
  function f5(e, n, r) {
    qa.S(e, n, r);
    var l = rl;
    if (l && e) {
      var c = Ti(l).hoistableStyles, d = il(e);
      n = n || "default";
      var h = c.get(d);
      if (!h) {
        var b = { loading: 0, preload: null };
        if (h = l.querySelector(
          Ro(d)
        ))
          b.loading = 5;
        else {
          e = w(
            { rel: "stylesheet", href: e, "data-precedence": n },
            r
          ), (r = Fn.get(d)) && qf(e, r);
          var E = h = l.createElement("link");
          Lt(E), Ft(E, "link", e), E._p = new Promise(function(O, L) {
            E.onload = O, E.onerror = L;
          }), E.addEventListener("load", function() {
            b.loading |= 1;
          }), E.addEventListener("error", function() {
            b.loading |= 2;
          }), b.loading |= 4, yc(h, n, l);
        }
        h = {
          type: "stylesheet",
          instance: h,
          count: 1,
          state: b
        }, c.set(d, h);
      }
    }
  }
  function h5(e, n) {
    qa.X(e, n);
    var r = rl;
    if (r && e) {
      var l = Ti(r).hoistableScripts, c = ll(e), d = l.get(c);
      d || (d = r.querySelector(Oo(c)), d || (e = w({ src: e, async: !0 }, n), (n = Fn.get(c)) && Xf(e, n), d = r.createElement("script"), Lt(d), Ft(d, "link", e), r.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, l.set(c, d));
    }
  }
  function p5(e, n) {
    qa.M(e, n);
    var r = rl;
    if (r && e) {
      var l = Ti(r).hoistableScripts, c = ll(e), d = l.get(c);
      d || (d = r.querySelector(Oo(c)), d || (e = w({ src: e, async: !0, type: "module" }, n), (n = Fn.get(c)) && Xf(e, n), d = r.createElement("script"), Lt(d), Ft(d, "link", e), r.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, l.set(c, d));
    }
  }
  function D2(e, n, r, l) {
    var c = (c = ce.current) ? vc(c) : null;
    if (!c) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof r.precedence == "string" && typeof r.href == "string" ? (n = il(r.href), r = Ti(
          c
        ).hoistableStyles, l = r.get(n), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, r.set(n, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (r.rel === "stylesheet" && typeof r.href == "string" && typeof r.precedence == "string") {
          e = il(r.href);
          var d = Ti(
            c
          ).hoistableStyles, h = d.get(e);
          if (h || (c = c.ownerDocument || c, h = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, d.set(e, h), (d = c.querySelector(
            Ro(e)
          )) && !d._p && (h.instance = d, h.state.loading = 5), Fn.has(e) || (r = {
            rel: "preload",
            as: "style",
            href: r.href,
            crossOrigin: r.crossOrigin,
            integrity: r.integrity,
            media: r.media,
            hrefLang: r.hrefLang,
            referrerPolicy: r.referrerPolicy
          }, Fn.set(e, r), d || m5(
            c,
            e,
            r,
            h.state
          ))), n && l === null)
            throw Error(o(528, ""));
          return h;
        }
        if (n && l !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return n = r.async, r = r.src, typeof r == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = ll(r), r = Ti(
          c
        ).hoistableScripts, l = r.get(n), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, r.set(n, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, e));
    }
  }
  function il(e) {
    return 'href="' + Hn(e) + '"';
  }
  function Ro(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function _2(e) {
    return w({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function m5(e, n, r, l) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? l.loading = 1 : (n = e.createElement("link"), l.preload = n, n.addEventListener("load", function() {
      return l.loading |= 1;
    }), n.addEventListener("error", function() {
      return l.loading |= 2;
    }), Ft(n, "link", r), Lt(n), e.head.appendChild(n));
  }
  function ll(e) {
    return '[src="' + Hn(e) + '"]';
  }
  function Oo(e) {
    return "script[async]" + e;
  }
  function B2(e, n, r) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Hn(r.href) + '"]'
          );
          if (l)
            return n.instance = l, Lt(l), l;
          var c = w({}, r, {
            "data-href": r.href,
            "data-precedence": r.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), Lt(l), Ft(l, "style", c), yc(l, r.precedence, e), n.instance = l;
        case "stylesheet":
          c = il(r.href);
          var d = e.querySelector(
            Ro(c)
          );
          if (d)
            return n.state.loading |= 4, n.instance = d, Lt(d), d;
          l = _2(r), (c = Fn.get(c)) && qf(l, c), d = (e.ownerDocument || e).createElement("link"), Lt(d);
          var h = d;
          return h._p = new Promise(function(b, E) {
            h.onload = b, h.onerror = E;
          }), Ft(d, "link", l), n.state.loading |= 4, yc(d, r.precedence, e), n.instance = d;
        case "script":
          return d = ll(r.src), (c = e.querySelector(
            Oo(d)
          )) ? (n.instance = c, Lt(c), c) : (l = r, (c = Fn.get(d)) && (l = w({}, r), Xf(l, c)), e = e.ownerDocument || e, c = e.createElement("script"), Lt(c), Ft(c, "link", l), e.head.appendChild(c), n.instance = c);
        case "void":
          return null;
        default:
          throw Error(o(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (l = n.instance, n.state.loading |= 4, yc(l, r.precedence, e));
    return n.instance;
  }
  function yc(e, n, r) {
    for (var l = r.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), c = l.length ? l[l.length - 1] : null, d = c, h = 0; h < l.length; h++) {
      var b = l[h];
      if (b.dataset.precedence === n) d = b;
      else if (d !== c) break;
    }
    d ? d.parentNode.insertBefore(e, d.nextSibling) : (n = r.nodeType === 9 ? r.head : r, n.insertBefore(e, n.firstChild));
  }
  function qf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function Xf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var xc = null;
  function L2(e, n, r) {
    if (xc === null) {
      var l = /* @__PURE__ */ new Map(), c = xc = /* @__PURE__ */ new Map();
      c.set(r, l);
    } else
      c = xc, l = c.get(r), l || (l = /* @__PURE__ */ new Map(), c.set(r, l));
    if (l.has(e)) return l;
    for (l.set(e, null), r = r.getElementsByTagName(e), c = 0; c < r.length; c++) {
      var d = r[c];
      if (!(d[Fl] || d[Xt] || e === "link" && d.getAttribute("rel") === "stylesheet") && d.namespaceURI !== "http://www.w3.org/2000/svg") {
        var h = d.getAttribute(n) || "";
        h = e + h;
        var b = l.get(h);
        b ? b.push(d) : l.set(h, [d]);
      }
    }
    return l;
  }
  function U2(e, n, r) {
    e = e.ownerDocument || e, e.head.insertBefore(
      r,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function g5(e, n, r) {
    if (r === 1 || n.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        return n.rel === "stylesheet" ? (e = n.disabled, typeof n.precedence == "string" && e == null) : !0;
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function H2(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function b5(e, n, r, l) {
    if (r.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (r.state.loading & 4) === 0) {
      if (r.instance === null) {
        var c = il(l.href), d = n.querySelector(
          Ro(c)
        );
        if (d) {
          n = d._p, n !== null && typeof n == "object" && typeof n.then == "function" && (e.count++, e = wc.bind(e), n.then(e, e)), r.state.loading |= 4, r.instance = d, Lt(d);
          return;
        }
        d = n.ownerDocument || n, l = _2(l), (c = Fn.get(c)) && qf(l, c), d = d.createElement("link"), Lt(d);
        var h = d;
        h._p = new Promise(function(b, E) {
          h.onload = b, h.onerror = E;
        }), Ft(d, "link", l), r.instance = d;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(r, n), (n = r.state.preload) && (r.state.loading & 3) === 0 && (e.count++, r = wc.bind(e), n.addEventListener("load", r), n.addEventListener("error", r));
    }
  }
  var Vf = 0;
  function v5(e, n) {
    return e.stylesheets && e.count === 0 && Ec(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(r) {
      var l = setTimeout(function() {
        if (e.stylesheets && Ec(e, e.stylesheets), e.unsuspend) {
          var d = e.unsuspend;
          e.unsuspend = null, d();
        }
      }, 6e4 + n);
      0 < e.imgBytes && Vf === 0 && (Vf = 62500 * Wx());
      var c = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Ec(e, e.stylesheets), e.unsuspend)) {
            var d = e.unsuspend;
            e.unsuspend = null, d();
          }
        },
        (e.imgBytes > Vf ? 50 : 800) + n
      );
      return e.unsuspend = r, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(c);
      };
    } : null;
  }
  function wc() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Ec(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Sc = null;
  function Ec(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Sc = /* @__PURE__ */ new Map(), n.forEach(y5, e), Sc = null, wc.call(e));
  }
  function y5(e, n) {
    if (!(n.state.loading & 4)) {
      var r = Sc.get(e);
      if (r) var l = r.get(null);
      else {
        r = /* @__PURE__ */ new Map(), Sc.set(e, r);
        for (var c = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), d = 0; d < c.length; d++) {
          var h = c[d];
          (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") && (r.set(h.dataset.precedence, h), l = h);
        }
        l && r.set(null, l);
      }
      c = n.instance, h = c.getAttribute("data-precedence"), d = r.get(h) || l, d === l && r.set(null, c), r.set(h, c), this.count++, l = wc.bind(this), c.addEventListener("load", l), c.addEventListener("error", l), d ? d.parentNode.insertBefore(c, d.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), n.state.loading |= 4;
    }
  }
  var Mo = {
    $$typeof: V,
    Provider: null,
    Consumer: null,
    _currentValue: J,
    _currentValue2: J,
    _threadCount: 0
  };
  function x5(e, n, r, l, c, d, h, b, E) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Uu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Uu(0), this.hiddenUpdates = Uu(null), this.identifierPrefix = l, this.onUncaughtError = c, this.onCaughtError = d, this.onRecoverableError = h, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = E, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function G2(e, n, r, l, c, d, h, b, E, O, L, G) {
    return e = new x5(
      e,
      n,
      r,
      h,
      E,
      O,
      L,
      G,
      b
    ), n = 1, d === !0 && (n |= 24), d = yn(3, null, null, n), e.current = d, d.stateNode = e, n = Sd(), n.refCount++, e.pooledCache = n, n.refCount++, d.memoizedState = {
      element: l,
      isDehydrated: r,
      cache: n
    }, Nd(d), e;
  }
  function Y2(e) {
    return e ? (e = Li, e) : Li;
  }
  function q2(e, n, r, l, c, d) {
    c = Y2(c), l.context === null ? l.context = c : l.pendingContext = c, l = ir(n), l.payload = { element: r }, d = d === void 0 ? null : d, d !== null && (l.callback = d), r = lr(e, l, n), r !== null && (un(r, e, n), uo(r, e, n));
  }
  function X2(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < n ? r : n;
    }
  }
  function If(e, n) {
    X2(e, n), (e = e.alternate) && X2(e, n);
  }
  function V2(e) {
    if (e.tag === 13 || e.tag === 31) {
      var n = qr(e, 67108864);
      n !== null && un(n, e, 67108864), If(e, 67108864);
    }
  }
  function I2(e) {
    if (e.tag === 13 || e.tag === 31) {
      var n = kn();
      n = Hu(n);
      var r = qr(e, n);
      r !== null && un(r, e, n), If(e, n);
    }
  }
  var kc = !0;
  function w5(e, n, r, l) {
    var c = C.T;
    C.T = null;
    var d = I.p;
    try {
      I.p = 2, Qf(e, n, r, l);
    } finally {
      I.p = d, C.T = c;
    }
  }
  function S5(e, n, r, l) {
    var c = C.T;
    C.T = null;
    var d = I.p;
    try {
      I.p = 8, Qf(e, n, r, l);
    } finally {
      I.p = d, C.T = c;
    }
  }
  function Qf(e, n, r, l) {
    if (kc) {
      var c = Ff(l);
      if (c === null)
        Of(
          e,
          n,
          l,
          Ac,
          r
        ), F2(e, l);
      else if (k5(
        c,
        e,
        n,
        r,
        l
      ))
        l.stopPropagation();
      else if (F2(e, l), n & 4 && -1 < E5.indexOf(e)) {
        for (; c !== null; ) {
          var d = Ni(c);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (d = d.stateNode, d.current.memoizedState.isDehydrated) {
                  var h = Lr(d.pendingLanes);
                  if (h !== 0) {
                    var b = d;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; h; ) {
                      var E = 1 << 31 - bn(h);
                      b.entanglements[1] |= E, h &= ~E;
                    }
                    ma(d), (qe & 6) === 0 && (oc = Bt() + 500, To(0));
                  }
                }
                break;
              case 31:
              case 13:
                b = qr(d, 2), b !== null && un(b, d, 2), cc(), If(d, 2);
            }
          if (d = Ff(l), d === null && Of(
            e,
            n,
            l,
            Ac,
            r
          ), d === c) break;
          c = d;
        }
        c !== null && l.stopPropagation();
      } else
        Of(
          e,
          n,
          l,
          null,
          r
        );
    }
  }
  function Ff(e) {
    return e = Zu(e), Zf(e);
  }
  var Ac = null;
  function Zf(e) {
    if (Ac = null, e = Ai(e), e !== null) {
      var n = u(e);
      if (n === null) e = null;
      else {
        var r = n.tag;
        if (r === 13) {
          if (e = f(n), e !== null) return e;
          e = null;
        } else if (r === 31) {
          if (e = p(n), e !== null) return e;
          e = null;
        } else if (r === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return Ac = e, null;
  }
  function Q2(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (_r()) {
          case ql:
            return 2;
          case Br:
            return 8;
          case Ja:
          case hs:
            return 32;
          case Xl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Kf = !1, br = null, vr = null, yr = null, Do = /* @__PURE__ */ new Map(), _o = /* @__PURE__ */ new Map(), xr = [], E5 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function F2(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        br = null;
        break;
      case "dragenter":
      case "dragleave":
        vr = null;
        break;
      case "mouseover":
      case "mouseout":
        yr = null;
        break;
      case "pointerover":
      case "pointerout":
        Do.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _o.delete(n.pointerId);
    }
  }
  function Bo(e, n, r, l, c, d) {
    return e === null || e.nativeEvent !== d ? (e = {
      blockedOn: n,
      domEventName: r,
      eventSystemFlags: l,
      nativeEvent: d,
      targetContainers: [c]
    }, n !== null && (n = Ni(n), n !== null && V2(n)), e) : (e.eventSystemFlags |= l, n = e.targetContainers, c !== null && n.indexOf(c) === -1 && n.push(c), e);
  }
  function k5(e, n, r, l, c) {
    switch (n) {
      case "focusin":
        return br = Bo(
          br,
          e,
          n,
          r,
          l,
          c
        ), !0;
      case "dragenter":
        return vr = Bo(
          vr,
          e,
          n,
          r,
          l,
          c
        ), !0;
      case "mouseover":
        return yr = Bo(
          yr,
          e,
          n,
          r,
          l,
          c
        ), !0;
      case "pointerover":
        var d = c.pointerId;
        return Do.set(
          d,
          Bo(
            Do.get(d) || null,
            e,
            n,
            r,
            l,
            c
          )
        ), !0;
      case "gotpointercapture":
        return d = c.pointerId, _o.set(
          d,
          Bo(
            _o.get(d) || null,
            e,
            n,
            r,
            l,
            c
          )
        ), !0;
    }
    return !1;
  }
  function Z2(e) {
    var n = Ai(e.target);
    if (n !== null) {
      var r = u(n);
      if (r !== null) {
        if (n = r.tag, n === 13) {
          if (n = f(r), n !== null) {
            e.blockedOn = n, s1(e.priority, function() {
              I2(r);
            });
            return;
          }
        } else if (n === 31) {
          if (n = p(r), n !== null) {
            e.blockedOn = n, s1(e.priority, function() {
              I2(r);
            });
            return;
          }
        } else if (n === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Nc(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var r = Ff(e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var l = new r.constructor(
          r.type,
          r
        );
        Fu = l, r.target.dispatchEvent(l), Fu = null;
      } else
        return n = Ni(r), n !== null && V2(n), e.blockedOn = r, !1;
      n.shift();
    }
    return !0;
  }
  function K2(e, n, r) {
    Nc(e) && r.delete(n);
  }
  function A5() {
    Kf = !1, br !== null && Nc(br) && (br = null), vr !== null && Nc(vr) && (vr = null), yr !== null && Nc(yr) && (yr = null), Do.forEach(K2), _o.forEach(K2);
  }
  function Tc(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Kf || (Kf = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      A5
    )));
  }
  var jc = null;
  function J2(e) {
    jc !== e && (jc = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        jc === e && (jc = null);
        for (var n = 0; n < e.length; n += 3) {
          var r = e[n], l = e[n + 1], c = e[n + 2];
          if (typeof l != "function") {
            if (Zf(l || r) === null)
              continue;
            break;
          }
          var d = Ni(r);
          d !== null && (e.splice(n, 3), n -= 3, Qd(
            d,
            {
              pending: !0,
              data: c,
              method: r.method,
              action: l
            },
            l,
            c
          ));
        }
      }
    ));
  }
  function ol(e) {
    function n(E) {
      return Tc(E, e);
    }
    br !== null && Tc(br, e), vr !== null && Tc(vr, e), yr !== null && Tc(yr, e), Do.forEach(n), _o.forEach(n);
    for (var r = 0; r < xr.length; r++) {
      var l = xr[r];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < xr.length && (r = xr[0], r.blockedOn === null); )
      Z2(r), r.blockedOn === null && xr.shift();
    if (r = (e.ownerDocument || e).$$reactFormReplay, r != null)
      for (l = 0; l < r.length; l += 3) {
        var c = r[l], d = r[l + 1], h = c[an] || null;
        if (typeof d == "function")
          h || J2(r);
        else if (h) {
          var b = null;
          if (d && d.hasAttribute("formAction")) {
            if (c = d, h = d[an] || null)
              b = h.formAction;
            else if (Zf(c) !== null) continue;
          } else b = h.action;
          typeof b == "function" ? r[l + 1] = b : (r.splice(l, 3), l -= 3), J2(r);
        }
      }
  }
  function P2() {
    function e(d) {
      d.canIntercept && d.info === "react-transition" && d.intercept({
        handler: function() {
          return new Promise(function(h) {
            return c = h;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function n() {
      c !== null && (c(), c = null), l || setTimeout(r, 20);
    }
    function r() {
      if (!l && !navigation.transition) {
        var d = navigation.currentEntry;
        d && d.url != null && navigation.navigate(d.url, {
          state: d.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, c = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(r, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), c !== null && (c(), c = null);
      };
    }
  }
  function Jf(e) {
    this._internalRoot = e;
  }
  zc.prototype.render = Jf.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(o(409));
    var r = n.current, l = kn();
    q2(r, l, e, n, null, null);
  }, zc.prototype.unmount = Jf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      q2(e.current, 2, null, e, null, null), cc(), n[ki] = null;
    }
  };
  function zc(e) {
    this._internalRoot = e;
  }
  zc.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = o1();
      e = { blockedOn: null, target: e, priority: n };
      for (var r = 0; r < xr.length && n !== 0 && n < xr[r].priority; r++) ;
      xr.splice(r, 0, e), r === 0 && Z2(e);
    }
  };
  var W2 = a.version;
  if (W2 !== "19.2.4")
    throw Error(
      o(
        527,
        W2,
        "19.2.4"
      )
    );
  I.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = v(n), e = e !== null ? y(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var N5 = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: C,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Cc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cc.isDisabled && Cc.supportsFiber)
      try {
        Vl = Cc.inject(
          N5
        ), gn = Cc;
      } catch {
      }
  }
  return Uo.createRoot = function(e, n) {
    if (!s(e)) throw Error(o(299));
    var r = !1, l = "", c = im, d = lm, h = om;
    return n != null && (n.unstable_strictMode === !0 && (r = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (d = n.onCaughtError), n.onRecoverableError !== void 0 && (h = n.onRecoverableError)), n = G2(
      e,
      1,
      !1,
      null,
      null,
      r,
      l,
      null,
      c,
      d,
      h,
      P2
    ), e[ki] = n.current, Rf(e), new Jf(n);
  }, Uo.hydrateRoot = function(e, n, r) {
    if (!s(e)) throw Error(o(299));
    var l = !1, c = "", d = im, h = lm, b = om, E = null;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (c = r.identifierPrefix), r.onUncaughtError !== void 0 && (d = r.onUncaughtError), r.onCaughtError !== void 0 && (h = r.onCaughtError), r.onRecoverableError !== void 0 && (b = r.onRecoverableError), r.formState !== void 0 && (E = r.formState)), n = G2(
      e,
      1,
      !0,
      n,
      r ?? null,
      l,
      c,
      E,
      d,
      h,
      b,
      P2
    ), n.context = Y2(null), r = n.current, l = kn(), l = Hu(l), c = ir(l), c.callback = null, lr(r, c, l), r = l, n.current.lanes = r, Ql(n, r), ma(n), e[ki] = n.current, Rf(e), new zc(n);
  }, Uo.version = "19.2.4", Uo;
}
var sg;
function _5() {
  if (sg) return $f.exports;
  sg = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (a) {
        console.error(a);
      }
  }
  return t(), $f.exports = D5(), $f.exports;
}
var B5 = _5();
const cg = (t) => {
  let a;
  const i = /* @__PURE__ */ new Set(), o = (v, y) => {
    const w = typeof v == "function" ? v(a) : v;
    if (!Object.is(w, a)) {
      const j = a;
      a = y ?? (typeof w != "object" || w === null) ? w : Object.assign({}, a, w), i.forEach((A) => A(a, j));
    }
  }, s = () => a, p = { setState: o, getState: s, getInitialState: () => g, subscribe: (v) => (i.add(v), () => i.delete(v)) }, g = a = t(o, s, p);
  return p;
}, L5 = ((t) => t ? cg(t) : cg), U5 = (t) => t;
function H5(t, a = U5) {
  const i = Rc.useSyncExternalStore(
    t.subscribe,
    Rc.useCallback(() => a(t.getState()), [t, a]),
    Rc.useCallback(() => a(t.getInitialState()), [t, a])
  );
  return Rc.useDebugValue(i), i;
}
const ug = (t) => {
  const a = L5(t), i = (o) => H5(a, o);
  return Object.assign(i, a), i;
}, fv = ((t) => t ? ug(t) : ug);
function hv(t, a) {
  let i;
  try {
    i = t();
  } catch {
    return;
  }
  return {
    getItem: (s) => {
      var u;
      const f = (g) => g === null ? null : JSON.parse(g, void 0), p = (u = i.getItem(s)) != null ? u : null;
      return p instanceof Promise ? p.then(f) : f(p);
    },
    setItem: (s, u) => i.setItem(s, JSON.stringify(u, void 0)),
    removeItem: (s) => i.removeItem(s)
  };
}
const xh = (t) => (a) => {
  try {
    const i = t(a);
    return i instanceof Promise ? i : {
      then(o) {
        return xh(o)(i);
      },
      catch(o) {
        return this;
      }
    };
  } catch (i) {
    return {
      then(o) {
        return this;
      },
      catch(o) {
        return xh(o)(i);
      }
    };
  }
}, G5 = (t, a) => (i, o, s) => {
  let u = {
    storage: hv(() => window.localStorage),
    partialize: (k) => k,
    version: 0,
    merge: (k, H) => ({
      ...H,
      ...k
    }),
    ...a
  }, f = !1, p = 0;
  const g = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set();
  let y = u.storage;
  if (!y)
    return t(
      (...k) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${u.name}', the given storage is currently unavailable.`
        ), i(...k);
      },
      o,
      s
    );
  const w = () => {
    const k = u.partialize({ ...o() });
    return y.setItem(u.name, {
      state: k,
      version: u.version
    });
  }, j = s.setState;
  s.setState = (k, H) => (j(k, H), w());
  const A = t(
    (...k) => (i(...k), w()),
    o,
    s
  );
  s.getInitialState = () => A;
  let x;
  const N = () => {
    var k, H;
    if (!y) return;
    const P = ++p;
    f = !1, g.forEach((F) => {
      var W;
      return F((W = o()) != null ? W : A);
    });
    const V = ((H = u.onRehydrateStorage) == null ? void 0 : H.call(u, (k = o()) != null ? k : A)) || void 0;
    return xh(y.getItem.bind(y))(u.name).then((F) => {
      if (F)
        if (typeof F.version == "number" && F.version !== u.version) {
          if (u.migrate) {
            const W = u.migrate(
              F.state,
              F.version
            );
            return W instanceof Promise ? W.then((ee) => [!0, ee]) : [!0, W];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, F.state];
      return [!1, void 0];
    }).then((F) => {
      var W;
      if (P !== p)
        return;
      const [ee, Q] = F;
      if (x = u.merge(
        Q,
        (W = o()) != null ? W : A
      ), i(x, !0), ee)
        return w();
    }).then(() => {
      P === p && (V?.(x, void 0), x = o(), f = !0, v.forEach((F) => F(x)));
    }).catch((F) => {
      P === p && V?.(void 0, F);
    });
  };
  return s.persist = {
    setOptions: (k) => {
      u = {
        ...u,
        ...k
      }, k.storage && (y = k.storage);
    },
    clearStorage: () => {
      y?.removeItem(u.name);
    },
    getOptions: () => u,
    rehydrate: () => N(),
    hasHydrated: () => f,
    onHydrate: (k) => (g.add(k), () => {
      g.delete(k);
    }),
    onFinishHydration: (k) => (v.add(k), () => {
      v.delete(k);
    })
  }, u.skipHydration || N(), x || A;
}, Y5 = G5;
function pv(t, a) {
  return function() {
    return t.apply(a, arguments);
  };
}
const { toString: q5 } = Object.prototype, { getPrototypeOf: Kh } = Object, { iterator: su, toStringTag: mv } = Symbol, cu = /* @__PURE__ */ ((t) => (a) => {
  const i = q5.call(a);
  return t[i] || (t[i] = i.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), sa = (t) => (t = t.toLowerCase(), (a) => cu(a) === t), uu = (t) => (a) => typeof a === t, { isArray: zl } = Array, ml = uu("undefined");
function $o(t) {
  return t !== null && !ml(t) && t.constructor !== null && !ml(t.constructor) && fn(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const gv = sa("ArrayBuffer");
function X5(t) {
  let a;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? a = ArrayBuffer.isView(t) : a = t && t.buffer && gv(t.buffer), a;
}
const V5 = uu("string"), fn = uu("function"), bv = uu("number"), es = (t) => t !== null && typeof t == "object", I5 = (t) => t === !0 || t === !1, Yc = (t) => {
  if (cu(t) !== "object")
    return !1;
  const a = Kh(t);
  return (a === null || a === Object.prototype || Object.getPrototypeOf(a) === null) && !(mv in t) && !(su in t);
}, Q5 = (t) => {
  if (!es(t) || $o(t))
    return !1;
  try {
    return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype;
  } catch {
    return !1;
  }
}, F5 = sa("Date"), Z5 = sa("File"), K5 = (t) => !!(t && typeof t.uri < "u"), J5 = (t) => t && typeof t.getParts < "u", P5 = sa("Blob"), W5 = sa("FileList"), $5 = (t) => es(t) && fn(t.pipe);
function ew() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const dg = ew(), fg = typeof dg.FormData < "u" ? dg.FormData : void 0, tw = (t) => {
  let a;
  return t && (fg && t instanceof fg || fn(t.append) && ((a = cu(t)) === "formdata" || // detect form-data instance
  a === "object" && fn(t.toString) && t.toString() === "[object FormData]"));
}, nw = sa("URLSearchParams"), [aw, rw, iw, lw] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(sa), ow = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ts(t, a, { allOwnKeys: i = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let o, s;
  if (typeof t != "object" && (t = [t]), zl(t))
    for (o = 0, s = t.length; o < s; o++)
      a.call(null, t[o], o, t);
  else {
    if ($o(t))
      return;
    const u = i ? Object.getOwnPropertyNames(t) : Object.keys(t), f = u.length;
    let p;
    for (o = 0; o < f; o++)
      p = u[o], a.call(null, t[p], p, t);
  }
}
function vv(t, a) {
  if ($o(t))
    return null;
  a = a.toLowerCase();
  const i = Object.keys(t);
  let o = i.length, s;
  for (; o-- > 0; )
    if (s = i[o], a === s.toLowerCase())
      return s;
  return null;
}
const ri = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, yv = (t) => !ml(t) && t !== ri;
function wh() {
  const { caseless: t, skipUndefined: a } = yv(this) && this || {}, i = {}, o = (s, u) => {
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return;
    const f = t && vv(i, u) || u;
    Yc(i[f]) && Yc(s) ? i[f] = wh(i[f], s) : Yc(s) ? i[f] = wh({}, s) : zl(s) ? i[f] = s.slice() : (!a || !ml(s)) && (i[f] = s);
  };
  for (let s = 0, u = arguments.length; s < u; s++)
    arguments[s] && ts(arguments[s], o);
  return i;
}
const sw = (t, a, i, { allOwnKeys: o } = {}) => (ts(
  a,
  (s, u) => {
    i && fn(s) ? Object.defineProperty(t, u, {
      value: pv(s, i),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(t, u, {
      value: s,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: o }
), t), cw = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), uw = (t, a, i, o) => {
  t.prototype = Object.create(a.prototype, o), Object.defineProperty(t.prototype, "constructor", {
    value: t,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t, "super", {
    value: a.prototype
  }), i && Object.assign(t.prototype, i);
}, dw = (t, a, i, o) => {
  let s, u, f;
  const p = {};
  if (a = a || {}, t == null) return a;
  do {
    for (s = Object.getOwnPropertyNames(t), u = s.length; u-- > 0; )
      f = s[u], (!o || o(f, t, a)) && !p[f] && (a[f] = t[f], p[f] = !0);
    t = i !== !1 && Kh(t);
  } while (t && (!i || i(t, a)) && t !== Object.prototype);
  return a;
}, fw = (t, a, i) => {
  t = String(t), (i === void 0 || i > t.length) && (i = t.length), i -= a.length;
  const o = t.indexOf(a, i);
  return o !== -1 && o === i;
}, hw = (t) => {
  if (!t) return null;
  if (zl(t)) return t;
  let a = t.length;
  if (!bv(a)) return null;
  const i = new Array(a);
  for (; a-- > 0; )
    i[a] = t[a];
  return i;
}, pw = /* @__PURE__ */ ((t) => (a) => t && a instanceof t)(typeof Uint8Array < "u" && Kh(Uint8Array)), mw = (t, a) => {
  const o = (t && t[su]).call(t);
  let s;
  for (; (s = o.next()) && !s.done; ) {
    const u = s.value;
    a.call(t, u[0], u[1]);
  }
}, gw = (t, a) => {
  let i;
  const o = [];
  for (; (i = t.exec(a)) !== null; )
    o.push(i);
  return o;
}, bw = sa("HTMLFormElement"), vw = (t) => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(i, o, s) {
  return o.toUpperCase() + s;
}), hg = (({ hasOwnProperty: t }) => (a, i) => t.call(a, i))(Object.prototype), yw = sa("RegExp"), xv = (t, a) => {
  const i = Object.getOwnPropertyDescriptors(t), o = {};
  ts(i, (s, u) => {
    let f;
    (f = a(s, u, t)) !== !1 && (o[u] = f || s);
  }), Object.defineProperties(t, o);
}, xw = (t) => {
  xv(t, (a, i) => {
    if (fn(t) && ["arguments", "caller", "callee"].indexOf(i) !== -1)
      return !1;
    const o = t[i];
    if (fn(o)) {
      if (a.enumerable = !1, "writable" in a) {
        a.writable = !1;
        return;
      }
      a.set || (a.set = () => {
        throw Error("Can not rewrite read-only method '" + i + "'");
      });
    }
  });
}, ww = (t, a) => {
  const i = {}, o = (s) => {
    s.forEach((u) => {
      i[u] = !0;
    });
  };
  return zl(t) ? o(t) : o(String(t).split(a)), i;
}, Sw = () => {
}, Ew = (t, a) => t != null && Number.isFinite(t = +t) ? t : a;
function kw(t) {
  return !!(t && fn(t.append) && t[mv] === "FormData" && t[su]);
}
const Aw = (t) => {
  const a = new Array(10), i = (o, s) => {
    if (es(o)) {
      if (a.indexOf(o) >= 0)
        return;
      if ($o(o))
        return o;
      if (!("toJSON" in o)) {
        a[s] = o;
        const u = zl(o) ? [] : {};
        return ts(o, (f, p) => {
          const g = i(f, s + 1);
          !ml(g) && (u[p] = g);
        }), a[s] = void 0, u;
      }
    }
    return o;
  };
  return i(t, 0);
}, Nw = sa("AsyncFunction"), Tw = (t) => t && (es(t) || fn(t)) && fn(t.then) && fn(t.catch), wv = ((t, a) => t ? setImmediate : a ? ((i, o) => (ri.addEventListener(
  "message",
  ({ source: s, data: u }) => {
    s === ri && u === i && o.length && o.shift()();
  },
  !1
), (s) => {
  o.push(s), ri.postMessage(i, "*");
}))(`axios@${Math.random()}`, []) : (i) => setTimeout(i))(typeof setImmediate == "function", fn(ri.postMessage)), jw = typeof queueMicrotask < "u" ? queueMicrotask.bind(ri) : typeof process < "u" && process.nextTick || wv, zw = (t) => t != null && fn(t[su]), D = {
  isArray: zl,
  isArrayBuffer: gv,
  isBuffer: $o,
  isFormData: tw,
  isArrayBufferView: X5,
  isString: V5,
  isNumber: bv,
  isBoolean: I5,
  isObject: es,
  isPlainObject: Yc,
  isEmptyObject: Q5,
  isReadableStream: aw,
  isRequest: rw,
  isResponse: iw,
  isHeaders: lw,
  isUndefined: ml,
  isDate: F5,
  isFile: Z5,
  isReactNativeBlob: K5,
  isReactNative: J5,
  isBlob: P5,
  isRegExp: yw,
  isFunction: fn,
  isStream: $5,
  isURLSearchParams: nw,
  isTypedArray: pw,
  isFileList: W5,
  forEach: ts,
  merge: wh,
  extend: sw,
  trim: ow,
  stripBOM: cw,
  inherits: uw,
  toFlatObject: dw,
  kindOf: cu,
  kindOfTest: sa,
  endsWith: fw,
  toArray: hw,
  forEachEntry: mw,
  matchAll: gw,
  isHTMLForm: bw,
  hasOwnProperty: hg,
  hasOwnProp: hg,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: xv,
  freezeMethods: xw,
  toObjectSet: ww,
  toCamelCase: vw,
  noop: Sw,
  toFiniteNumber: Ew,
  findKey: vv,
  global: ri,
  isContextDefined: yv,
  isSpecCompliantForm: kw,
  toJSONObject: Aw,
  isAsyncFn: Nw,
  isThenable: Tw,
  setImmediate: wv,
  asap: jw,
  isIterable: zw
};
let we = class Sv extends Error {
  static from(a, i, o, s, u, f) {
    const p = new Sv(a.message, i || a.code, o, s, u);
    return p.cause = a, p.name = a.name, a.status != null && p.status == null && (p.status = a.status), f && Object.assign(p, f), p;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(a, i, o, s, u) {
    super(a), Object.defineProperty(this, "message", {
      value: a,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, i && (this.code = i), o && (this.config = o), s && (this.request = s), u && (this.response = u, this.status = u.status);
  }
  toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: D.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
we.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
we.ERR_BAD_OPTION = "ERR_BAD_OPTION";
we.ECONNABORTED = "ECONNABORTED";
we.ETIMEDOUT = "ETIMEDOUT";
we.ERR_NETWORK = "ERR_NETWORK";
we.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
we.ERR_DEPRECATED = "ERR_DEPRECATED";
we.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
we.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
we.ERR_CANCELED = "ERR_CANCELED";
we.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
we.ERR_INVALID_URL = "ERR_INVALID_URL";
const Cw = null;
function Sh(t) {
  return D.isPlainObject(t) || D.isArray(t);
}
function Ev(t) {
  return D.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function ah(t, a, i) {
  return t ? t.concat(a).map(function(s, u) {
    return s = Ev(s), !i && u ? "[" + s + "]" : s;
  }).join(i ? "." : "") : a;
}
function Rw(t) {
  return D.isArray(t) && !t.some(Sh);
}
const Ow = D.toFlatObject(D, {}, null, function(a) {
  return /^is[A-Z]/.test(a);
});
function du(t, a, i) {
  if (!D.isObject(t))
    throw new TypeError("target must be an object");
  a = a || new FormData(), i = D.toFlatObject(
    i,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(N, k) {
      return !D.isUndefined(k[N]);
    }
  );
  const o = i.metaTokens, s = i.visitor || y, u = i.dots, f = i.indexes, g = (i.Blob || typeof Blob < "u" && Blob) && D.isSpecCompliantForm(a);
  if (!D.isFunction(s))
    throw new TypeError("visitor must be a function");
  function v(x) {
    if (x === null) return "";
    if (D.isDate(x))
      return x.toISOString();
    if (D.isBoolean(x))
      return x.toString();
    if (!g && D.isBlob(x))
      throw new we("Blob is not supported. Use a Buffer instead.");
    return D.isArrayBuffer(x) || D.isTypedArray(x) ? g && typeof Blob == "function" ? new Blob([x]) : Buffer.from(x) : x;
  }
  function y(x, N, k) {
    let H = x;
    if (D.isReactNative(a) && D.isReactNativeBlob(x))
      return a.append(ah(k, N, u), v(x)), !1;
    if (x && !k && typeof x == "object") {
      if (D.endsWith(N, "{}"))
        N = o ? N : N.slice(0, -2), x = JSON.stringify(x);
      else if (D.isArray(x) && Rw(x) || (D.isFileList(x) || D.endsWith(N, "[]")) && (H = D.toArray(x)))
        return N = Ev(N), H.forEach(function(V, F) {
          !(D.isUndefined(V) || V === null) && a.append(
            // eslint-disable-next-line no-nested-ternary
            f === !0 ? ah([N], F, u) : f === null ? N : N + "[]",
            v(V)
          );
        }), !1;
    }
    return Sh(x) ? !0 : (a.append(ah(k, N, u), v(x)), !1);
  }
  const w = [], j = Object.assign(Ow, {
    defaultVisitor: y,
    convertValue: v,
    isVisitable: Sh
  });
  function A(x, N) {
    if (!D.isUndefined(x)) {
      if (w.indexOf(x) !== -1)
        throw Error("Circular reference detected in " + N.join("."));
      w.push(x), D.forEach(x, function(H, P) {
        (!(D.isUndefined(H) || H === null) && s.call(a, H, D.isString(P) ? P.trim() : P, N, j)) === !0 && A(H, N ? N.concat(P) : [P]);
      }), w.pop();
    }
  }
  if (!D.isObject(t))
    throw new TypeError("data must be an object");
  return A(t), a;
}
function pg(t) {
  const a = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(o) {
    return a[o];
  });
}
function Jh(t, a) {
  this._pairs = [], t && du(t, this, a);
}
const kv = Jh.prototype;
kv.append = function(a, i) {
  this._pairs.push([a, i]);
};
kv.toString = function(a) {
  const i = a ? function(o) {
    return a.call(this, o, pg);
  } : pg;
  return this._pairs.map(function(s) {
    return i(s[0]) + "=" + i(s[1]);
  }, "").join("&");
};
function Mw(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Av(t, a, i) {
  if (!a)
    return t;
  const o = i && i.encode || Mw, s = D.isFunction(i) ? {
    serialize: i
  } : i, u = s && s.serialize;
  let f;
  if (u ? f = u(a, s) : f = D.isURLSearchParams(a) ? a.toString() : new Jh(a, s).toString(o), f) {
    const p = t.indexOf("#");
    p !== -1 && (t = t.slice(0, p)), t += (t.indexOf("?") === -1 ? "?" : "&") + f;
  }
  return t;
}
class mg {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(a, i, o) {
    return this.handlers.push({
      fulfilled: a,
      rejected: i,
      synchronous: o ? o.synchronous : !1,
      runWhen: o ? o.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(a) {
    this.handlers[a] && (this.handlers[a] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(a) {
    D.forEach(this.handlers, function(o) {
      o !== null && a(o);
    });
  }
}
const Ph = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, Dw = typeof URLSearchParams < "u" ? URLSearchParams : Jh, _w = typeof FormData < "u" ? FormData : null, Bw = typeof Blob < "u" ? Blob : null, Lw = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Dw,
    FormData: _w,
    Blob: Bw
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Wh = typeof window < "u" && typeof document < "u", Eh = typeof navigator == "object" && navigator || void 0, Uw = Wh && (!Eh || ["ReactNative", "NativeScript", "NS"].indexOf(Eh.product) < 0), Hw = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Gw = Wh && window.location.href || "http://localhost", Yw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Wh,
  hasStandardBrowserEnv: Uw,
  hasStandardBrowserWebWorkerEnv: Hw,
  navigator: Eh,
  origin: Gw
}, Symbol.toStringTag, { value: "Module" })), $t = {
  ...Yw,
  ...Lw
};
function qw(t, a) {
  return du(t, new $t.classes.URLSearchParams(), {
    visitor: function(i, o, s, u) {
      return $t.isNode && D.isBuffer(i) ? (this.append(o, i.toString("base64")), !1) : u.defaultVisitor.apply(this, arguments);
    },
    ...a
  });
}
function Xw(t) {
  return D.matchAll(/\w+|\[(\w*)]/g, t).map((a) => a[0] === "[]" ? "" : a[1] || a[0]);
}
function Vw(t) {
  const a = {}, i = Object.keys(t);
  let o;
  const s = i.length;
  let u;
  for (o = 0; o < s; o++)
    u = i[o], a[u] = t[u];
  return a;
}
function Nv(t) {
  function a(i, o, s, u) {
    let f = i[u++];
    if (f === "__proto__") return !0;
    const p = Number.isFinite(+f), g = u >= i.length;
    return f = !f && D.isArray(s) ? s.length : f, g ? (D.hasOwnProp(s, f) ? s[f] = [s[f], o] : s[f] = o, !p) : ((!s[f] || !D.isObject(s[f])) && (s[f] = []), a(i, o, s[f], u) && D.isArray(s[f]) && (s[f] = Vw(s[f])), !p);
  }
  if (D.isFormData(t) && D.isFunction(t.entries)) {
    const i = {};
    return D.forEachEntry(t, (o, s) => {
      a(Xw(o), s, i, 0);
    }), i;
  }
  return null;
}
function Iw(t, a, i) {
  if (D.isString(t))
    try {
      return (a || JSON.parse)(t), D.trim(t);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (i || JSON.stringify)(t);
}
const ns = {
  transitional: Ph,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(a, i) {
      const o = i.getContentType() || "", s = o.indexOf("application/json") > -1, u = D.isObject(a);
      if (u && D.isHTMLForm(a) && (a = new FormData(a)), D.isFormData(a))
        return s ? JSON.stringify(Nv(a)) : a;
      if (D.isArrayBuffer(a) || D.isBuffer(a) || D.isStream(a) || D.isFile(a) || D.isBlob(a) || D.isReadableStream(a))
        return a;
      if (D.isArrayBufferView(a))
        return a.buffer;
      if (D.isURLSearchParams(a))
        return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), a.toString();
      let p;
      if (u) {
        if (o.indexOf("application/x-www-form-urlencoded") > -1)
          return qw(a, this.formSerializer).toString();
        if ((p = D.isFileList(a)) || o.indexOf("multipart/form-data") > -1) {
          const g = this.env && this.env.FormData;
          return du(
            p ? { "files[]": a } : a,
            g && new g(),
            this.formSerializer
          );
        }
      }
      return u || s ? (i.setContentType("application/json", !1), Iw(a)) : a;
    }
  ],
  transformResponse: [
    function(a) {
      const i = this.transitional || ns.transitional, o = i && i.forcedJSONParsing, s = this.responseType === "json";
      if (D.isResponse(a) || D.isReadableStream(a))
        return a;
      if (a && D.isString(a) && (o && !this.responseType || s)) {
        const f = !(i && i.silentJSONParsing) && s;
        try {
          return JSON.parse(a, this.parseReviver);
        } catch (p) {
          if (f)
            throw p.name === "SyntaxError" ? we.from(p, we.ERR_BAD_RESPONSE, this, null, this.response) : p;
        }
      }
      return a;
    }
  ],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: $t.classes.FormData,
    Blob: $t.classes.Blob
  },
  validateStatus: function(a) {
    return a >= 200 && a < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
D.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  ns.headers[t] = {};
});
const Qw = D.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Fw = (t) => {
  const a = {};
  let i, o, s;
  return t && t.split(`
`).forEach(function(f) {
    s = f.indexOf(":"), i = f.substring(0, s).trim().toLowerCase(), o = f.substring(s + 1).trim(), !(!i || a[i] && Qw[i]) && (i === "set-cookie" ? a[i] ? a[i].push(o) : a[i] = [o] : a[i] = a[i] ? a[i] + ", " + o : o);
  }), a;
}, gg = /* @__PURE__ */ Symbol("internals");
function Ho(t) {
  return t && String(t).trim().toLowerCase();
}
function qc(t) {
  return t === !1 || t == null ? t : D.isArray(t) ? t.map(qc) : String(t);
}
function Zw(t) {
  const a = /* @__PURE__ */ Object.create(null), i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = i.exec(t); )
    a[o[1]] = o[2];
  return a;
}
const Kw = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function rh(t, a, i, o, s) {
  if (D.isFunction(o))
    return o.call(this, a, i);
  if (s && (a = i), !!D.isString(a)) {
    if (D.isString(o))
      return a.indexOf(o) !== -1;
    if (D.isRegExp(o))
      return o.test(a);
  }
}
function Jw(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (a, i, o) => i.toUpperCase() + o);
}
function Pw(t, a) {
  const i = D.toCamelCase(" " + a);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(t, o + i, {
      value: function(s, u, f) {
        return this[o].call(this, a, s, u, f);
      },
      configurable: !0
    });
  });
}
let hn = class {
  constructor(a) {
    a && this.set(a);
  }
  set(a, i, o) {
    const s = this;
    function u(p, g, v) {
      const y = Ho(g);
      if (!y)
        throw new Error("header name must be a non-empty string");
      const w = D.findKey(s, y);
      (!w || s[w] === void 0 || v === !0 || v === void 0 && s[w] !== !1) && (s[w || g] = qc(p));
    }
    const f = (p, g) => D.forEach(p, (v, y) => u(v, y, g));
    if (D.isPlainObject(a) || a instanceof this.constructor)
      f(a, i);
    else if (D.isString(a) && (a = a.trim()) && !Kw(a))
      f(Fw(a), i);
    else if (D.isObject(a) && D.isIterable(a)) {
      let p = {}, g, v;
      for (const y of a) {
        if (!D.isArray(y))
          throw TypeError("Object iterator must return a key-value pair");
        p[v = y[0]] = (g = p[v]) ? D.isArray(g) ? [...g, y[1]] : [g, y[1]] : y[1];
      }
      f(p, i);
    } else
      a != null && u(i, a, o);
    return this;
  }
  get(a, i) {
    if (a = Ho(a), a) {
      const o = D.findKey(this, a);
      if (o) {
        const s = this[o];
        if (!i)
          return s;
        if (i === !0)
          return Zw(s);
        if (D.isFunction(i))
          return i.call(this, s, o);
        if (D.isRegExp(i))
          return i.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(a, i) {
    if (a = Ho(a), a) {
      const o = D.findKey(this, a);
      return !!(o && this[o] !== void 0 && (!i || rh(this, this[o], o, i)));
    }
    return !1;
  }
  delete(a, i) {
    const o = this;
    let s = !1;
    function u(f) {
      if (f = Ho(f), f) {
        const p = D.findKey(o, f);
        p && (!i || rh(o, o[p], p, i)) && (delete o[p], s = !0);
      }
    }
    return D.isArray(a) ? a.forEach(u) : u(a), s;
  }
  clear(a) {
    const i = Object.keys(this);
    let o = i.length, s = !1;
    for (; o--; ) {
      const u = i[o];
      (!a || rh(this, this[u], u, a, !0)) && (delete this[u], s = !0);
    }
    return s;
  }
  normalize(a) {
    const i = this, o = {};
    return D.forEach(this, (s, u) => {
      const f = D.findKey(o, u);
      if (f) {
        i[f] = qc(s), delete i[u];
        return;
      }
      const p = a ? Jw(u) : String(u).trim();
      p !== u && delete i[u], i[p] = qc(s), o[p] = !0;
    }), this;
  }
  concat(...a) {
    return this.constructor.concat(this, ...a);
  }
  toJSON(a) {
    const i = /* @__PURE__ */ Object.create(null);
    return D.forEach(this, (o, s) => {
      o != null && o !== !1 && (i[s] = a && D.isArray(o) ? o.join(", ") : o);
    }), i;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([a, i]) => a + ": " + i).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(a) {
    return a instanceof this ? a : new this(a);
  }
  static concat(a, ...i) {
    const o = new this(a);
    return i.forEach((s) => o.set(s)), o;
  }
  static accessor(a) {
    const o = (this[gg] = this[gg] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function u(f) {
      const p = Ho(f);
      o[p] || (Pw(s, f), o[p] = !0);
    }
    return D.isArray(a) ? a.forEach(u) : u(a), this;
  }
};
hn.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
D.reduceDescriptors(hn.prototype, ({ value: t }, a) => {
  let i = a[0].toUpperCase() + a.slice(1);
  return {
    get: () => t,
    set(o) {
      this[i] = o;
    }
  };
});
D.freezeMethods(hn);
function ih(t, a) {
  const i = this || ns, o = a || i, s = hn.from(o.headers);
  let u = o.data;
  return D.forEach(t, function(p) {
    u = p.call(i, u, s.normalize(), a ? a.status : void 0);
  }), s.normalize(), u;
}
function Tv(t) {
  return !!(t && t.__CANCEL__);
}
let as = class extends we {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(a, i, o) {
    super(a ?? "canceled", we.ERR_CANCELED, i, o), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function jv(t, a, i) {
  const o = i.config.validateStatus;
  !i.status || !o || o(i.status) ? t(i) : a(
    new we(
      "Request failed with status code " + i.status,
      [we.ERR_BAD_REQUEST, we.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4],
      i.config,
      i.request,
      i
    )
  );
}
function Ww(t) {
  const a = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return a && a[1] || "";
}
function $w(t, a) {
  t = t || 10;
  const i = new Array(t), o = new Array(t);
  let s = 0, u = 0, f;
  return a = a !== void 0 ? a : 1e3, function(g) {
    const v = Date.now(), y = o[u];
    f || (f = v), i[s] = g, o[s] = v;
    let w = u, j = 0;
    for (; w !== s; )
      j += i[w++], w = w % t;
    if (s = (s + 1) % t, s === u && (u = (u + 1) % t), v - f < a)
      return;
    const A = y && v - y;
    return A ? Math.round(j * 1e3 / A) : void 0;
  };
}
function e6(t, a) {
  let i = 0, o = 1e3 / a, s, u;
  const f = (v, y = Date.now()) => {
    i = y, s = null, u && (clearTimeout(u), u = null), t(...v);
  };
  return [(...v) => {
    const y = Date.now(), w = y - i;
    w >= o ? f(v, y) : (s = v, u || (u = setTimeout(() => {
      u = null, f(s);
    }, o - w)));
  }, () => s && f(s)];
}
const Pc = (t, a, i = 3) => {
  let o = 0;
  const s = $w(50, 250);
  return e6((u) => {
    const f = u.loaded, p = u.lengthComputable ? u.total : void 0, g = f - o, v = s(g), y = f <= p;
    o = f;
    const w = {
      loaded: f,
      total: p,
      progress: p ? f / p : void 0,
      bytes: g,
      rate: v || void 0,
      estimated: v && p && y ? (p - f) / v : void 0,
      event: u,
      lengthComputable: p != null,
      [a ? "download" : "upload"]: !0
    };
    t(w);
  }, i);
}, bg = (t, a) => {
  const i = t != null;
  return [
    (o) => a[0]({
      lengthComputable: i,
      total: t,
      loaded: o
    }),
    a[1]
  ];
}, vg = (t) => (...a) => D.asap(() => t(...a)), t6 = $t.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, a) => (i) => (i = new URL(i, $t.origin), t.protocol === i.protocol && t.host === i.host && (a || t.port === i.port)))(
  new URL($t.origin),
  $t.navigator && /(msie|trident)/i.test($t.navigator.userAgent)
) : () => !0, n6 = $t.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, a, i, o, s, u, f) {
      if (typeof document > "u") return;
      const p = [`${t}=${encodeURIComponent(a)}`];
      D.isNumber(i) && p.push(`expires=${new Date(i).toUTCString()}`), D.isString(o) && p.push(`path=${o}`), D.isString(s) && p.push(`domain=${s}`), u === !0 && p.push("secure"), D.isString(f) && p.push(`SameSite=${f}`), document.cookie = p.join("; ");
    },
    read(t) {
      if (typeof document > "u") return null;
      const a = document.cookie.match(new RegExp("(?:^|; )" + t + "=([^;]*)"));
      return a ? decodeURIComponent(a[1]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function a6(t) {
  return typeof t != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function r6(t, a) {
  return a ? t.replace(/\/?\/$/, "") + "/" + a.replace(/^\/+/, "") : t;
}
function zv(t, a, i) {
  let o = !a6(a);
  return t && (o || i == !1) ? r6(t, a) : a;
}
const yg = (t) => t instanceof hn ? { ...t } : t;
function hi(t, a) {
  a = a || {};
  const i = {};
  function o(v, y, w, j) {
    return D.isPlainObject(v) && D.isPlainObject(y) ? D.merge.call({ caseless: j }, v, y) : D.isPlainObject(y) ? D.merge({}, y) : D.isArray(y) ? y.slice() : y;
  }
  function s(v, y, w, j) {
    if (D.isUndefined(y)) {
      if (!D.isUndefined(v))
        return o(void 0, v, w, j);
    } else return o(v, y, w, j);
  }
  function u(v, y) {
    if (!D.isUndefined(y))
      return o(void 0, y);
  }
  function f(v, y) {
    if (D.isUndefined(y)) {
      if (!D.isUndefined(v))
        return o(void 0, v);
    } else return o(void 0, y);
  }
  function p(v, y, w) {
    if (w in a)
      return o(v, y);
    if (w in t)
      return o(void 0, v);
  }
  const g = {
    url: u,
    method: u,
    data: u,
    baseURL: f,
    transformRequest: f,
    transformResponse: f,
    paramsSerializer: f,
    timeout: f,
    timeoutMessage: f,
    withCredentials: f,
    withXSRFToken: f,
    adapter: f,
    responseType: f,
    xsrfCookieName: f,
    xsrfHeaderName: f,
    onUploadProgress: f,
    onDownloadProgress: f,
    decompress: f,
    maxContentLength: f,
    maxBodyLength: f,
    beforeRedirect: f,
    transport: f,
    httpAgent: f,
    httpsAgent: f,
    cancelToken: f,
    socketPath: f,
    responseEncoding: f,
    validateStatus: p,
    headers: (v, y, w) => s(yg(v), yg(y), w, !0)
  };
  return D.forEach(Object.keys({ ...t, ...a }), function(y) {
    if (y === "__proto__" || y === "constructor" || y === "prototype") return;
    const w = D.hasOwnProp(g, y) ? g[y] : s, j = w(t[y], a[y], y);
    D.isUndefined(j) && w !== p || (i[y] = j);
  }), i;
}
const Cv = (t) => {
  const a = hi({}, t);
  let { data: i, withXSRFToken: o, xsrfHeaderName: s, xsrfCookieName: u, headers: f, auth: p } = a;
  if (a.headers = f = hn.from(f), a.url = Av(
    zv(a.baseURL, a.url, a.allowAbsoluteUrls),
    t.params,
    t.paramsSerializer
  ), p && f.set(
    "Authorization",
    "Basic " + btoa(
      (p.username || "") + ":" + (p.password ? unescape(encodeURIComponent(p.password)) : "")
    )
  ), D.isFormData(i)) {
    if ($t.hasStandardBrowserEnv || $t.hasStandardBrowserWebWorkerEnv)
      f.setContentType(void 0);
    else if (D.isFunction(i.getHeaders)) {
      const g = i.getHeaders(), v = ["content-type", "content-length"];
      Object.entries(g).forEach(([y, w]) => {
        v.includes(y.toLowerCase()) && f.set(y, w);
      });
    }
  }
  if ($t.hasStandardBrowserEnv && (o && D.isFunction(o) && (o = o(a)), o || o !== !1 && t6(a.url))) {
    const g = s && u && n6.read(u);
    g && f.set(s, g);
  }
  return a;
}, i6 = typeof XMLHttpRequest < "u", l6 = i6 && function(t) {
  return new Promise(function(i, o) {
    const s = Cv(t);
    let u = s.data;
    const f = hn.from(s.headers).normalize();
    let { responseType: p, onUploadProgress: g, onDownloadProgress: v } = s, y, w, j, A, x;
    function N() {
      A && A(), x && x(), s.cancelToken && s.cancelToken.unsubscribe(y), s.signal && s.signal.removeEventListener("abort", y);
    }
    let k = new XMLHttpRequest();
    k.open(s.method.toUpperCase(), s.url, !0), k.timeout = s.timeout;
    function H() {
      if (!k)
        return;
      const V = hn.from(
        "getAllResponseHeaders" in k && k.getAllResponseHeaders()
      ), W = {
        data: !p || p === "text" || p === "json" ? k.responseText : k.response,
        status: k.status,
        statusText: k.statusText,
        headers: V,
        config: t,
        request: k
      };
      jv(
        function(Q) {
          i(Q), N();
        },
        function(Q) {
          o(Q), N();
        },
        W
      ), k = null;
    }
    "onloadend" in k ? k.onloadend = H : k.onreadystatechange = function() {
      !k || k.readyState !== 4 || k.status === 0 && !(k.responseURL && k.responseURL.indexOf("file:") === 0) || setTimeout(H);
    }, k.onabort = function() {
      k && (o(new we("Request aborted", we.ECONNABORTED, t, k)), k = null);
    }, k.onerror = function(F) {
      const W = F && F.message ? F.message : "Network Error", ee = new we(W, we.ERR_NETWORK, t, k);
      ee.event = F || null, o(ee), k = null;
    }, k.ontimeout = function() {
      let F = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const W = s.transitional || Ph;
      s.timeoutErrorMessage && (F = s.timeoutErrorMessage), o(
        new we(
          F,
          W.clarifyTimeoutError ? we.ETIMEDOUT : we.ECONNABORTED,
          t,
          k
        )
      ), k = null;
    }, u === void 0 && f.setContentType(null), "setRequestHeader" in k && D.forEach(f.toJSON(), function(F, W) {
      k.setRequestHeader(W, F);
    }), D.isUndefined(s.withCredentials) || (k.withCredentials = !!s.withCredentials), p && p !== "json" && (k.responseType = s.responseType), v && ([j, x] = Pc(v, !0), k.addEventListener("progress", j)), g && k.upload && ([w, A] = Pc(g), k.upload.addEventListener("progress", w), k.upload.addEventListener("loadend", A)), (s.cancelToken || s.signal) && (y = (V) => {
      k && (o(!V || V.type ? new as(null, t, k) : V), k.abort(), k = null);
    }, s.cancelToken && s.cancelToken.subscribe(y), s.signal && (s.signal.aborted ? y() : s.signal.addEventListener("abort", y)));
    const P = Ww(s.url);
    if (P && $t.protocols.indexOf(P) === -1) {
      o(
        new we(
          "Unsupported protocol " + P + ":",
          we.ERR_BAD_REQUEST,
          t
        )
      );
      return;
    }
    k.send(u || null);
  });
}, o6 = (t, a) => {
  const { length: i } = t = t ? t.filter(Boolean) : [];
  if (a || i) {
    let o = new AbortController(), s;
    const u = function(v) {
      if (!s) {
        s = !0, p();
        const y = v instanceof Error ? v : this.reason;
        o.abort(
          y instanceof we ? y : new as(y instanceof Error ? y.message : y)
        );
      }
    };
    let f = a && setTimeout(() => {
      f = null, u(new we(`timeout of ${a}ms exceeded`, we.ETIMEDOUT));
    }, a);
    const p = () => {
      t && (f && clearTimeout(f), f = null, t.forEach((v) => {
        v.unsubscribe ? v.unsubscribe(u) : v.removeEventListener("abort", u);
      }), t = null);
    };
    t.forEach((v) => v.addEventListener("abort", u));
    const { signal: g } = o;
    return g.unsubscribe = () => D.asap(p), g;
  }
}, s6 = function* (t, a) {
  let i = t.byteLength;
  if (i < a) {
    yield t;
    return;
  }
  let o = 0, s;
  for (; o < i; )
    s = o + a, yield t.slice(o, s), o = s;
}, c6 = async function* (t, a) {
  for await (const i of u6(t))
    yield* s6(i, a);
}, u6 = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const a = t.getReader();
  try {
    for (; ; ) {
      const { done: i, value: o } = await a.read();
      if (i)
        break;
      yield o;
    }
  } finally {
    await a.cancel();
  }
}, xg = (t, a, i, o) => {
  const s = c6(t, a);
  let u = 0, f, p = (g) => {
    f || (f = !0, o && o(g));
  };
  return new ReadableStream(
    {
      async pull(g) {
        try {
          const { done: v, value: y } = await s.next();
          if (v) {
            p(), g.close();
            return;
          }
          let w = y.byteLength;
          if (i) {
            let j = u += w;
            i(j);
          }
          g.enqueue(new Uint8Array(y));
        } catch (v) {
          throw p(v), v;
        }
      },
      cancel(g) {
        return p(g), s.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, wg = 64 * 1024, { isFunction: Oc } = D, d6 = (({ Request: t, Response: a }) => ({
  Request: t,
  Response: a
}))(D.global), { ReadableStream: Sg, TextEncoder: Eg } = D.global, kg = (t, ...a) => {
  try {
    return !!t(...a);
  } catch {
    return !1;
  }
}, f6 = (t) => {
  t = D.merge.call(
    {
      skipUndefined: !0
    },
    d6,
    t
  );
  const { fetch: a, Request: i, Response: o } = t, s = a ? Oc(a) : typeof fetch == "function", u = Oc(i), f = Oc(o);
  if (!s)
    return !1;
  const p = s && Oc(Sg), g = s && (typeof Eg == "function" ? /* @__PURE__ */ ((x) => (N) => x.encode(N))(new Eg()) : async (x) => new Uint8Array(await new i(x).arrayBuffer())), v = u && p && kg(() => {
    let x = !1;
    const N = new i($t.origin, {
      body: new Sg(),
      method: "POST",
      get duplex() {
        return x = !0, "half";
      }
    }).headers.has("Content-Type");
    return x && !N;
  }), y = f && p && kg(() => D.isReadableStream(new o("").body)), w = {
    stream: y && ((x) => x.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((x) => {
    !w[x] && (w[x] = (N, k) => {
      let H = N && N[x];
      if (H)
        return H.call(N);
      throw new we(
        `Response type '${x}' is not supported`,
        we.ERR_NOT_SUPPORT,
        k
      );
    });
  });
  const j = async (x) => {
    if (x == null)
      return 0;
    if (D.isBlob(x))
      return x.size;
    if (D.isSpecCompliantForm(x))
      return (await new i($t.origin, {
        method: "POST",
        body: x
      }).arrayBuffer()).byteLength;
    if (D.isArrayBufferView(x) || D.isArrayBuffer(x))
      return x.byteLength;
    if (D.isURLSearchParams(x) && (x = x + ""), D.isString(x))
      return (await g(x)).byteLength;
  }, A = async (x, N) => {
    const k = D.toFiniteNumber(x.getContentLength());
    return k ?? j(N);
  };
  return async (x) => {
    let {
      url: N,
      method: k,
      data: H,
      signal: P,
      cancelToken: V,
      timeout: F,
      onDownloadProgress: W,
      onUploadProgress: ee,
      responseType: Q,
      headers: Y,
      withCredentials: K = "same-origin",
      fetchOptions: Ie
    } = Cv(x), je = a || fetch;
    Q = Q ? (Q + "").toLowerCase() : "text";
    let Te = o6(
      [P, V && V.toAbortSignal()],
      F
    ), Me = null;
    const ve = Te && Te.unsubscribe && (() => {
      Te.unsubscribe();
    });
    let ke;
    try {
      if (ee && v && k !== "get" && k !== "head" && (ke = await A(Y, H)) !== 0) {
        let S = new i(N, {
          method: "POST",
          body: H,
          duplex: "half"
        }), B;
        if (D.isFormData(H) && (B = S.headers.get("content-type")) && Y.setContentType(B), S.body) {
          const [Z, $] = bg(
            ke,
            Pc(vg(ee))
          );
          H = xg(S.body, wg, Z, $);
        }
      }
      D.isString(K) || (K = K ? "include" : "omit");
      const C = u && "credentials" in i.prototype, I = {
        ...Ie,
        signal: Te,
        method: k.toUpperCase(),
        headers: Y.normalize().toJSON(),
        body: H,
        duplex: "half",
        credentials: C ? K : void 0
      };
      Me = u && new i(N, I);
      let J = await (u ? je(Me, Ie) : je(N, I));
      const oe = y && (Q === "stream" || Q === "response");
      if (y && (W || oe && ve)) {
        const S = {};
        ["status", "statusText", "headers"].forEach((te) => {
          S[te] = J[te];
        });
        const B = D.toFiniteNumber(J.headers.get("content-length")), [Z, $] = W && bg(
          B,
          Pc(vg(W), !0)
        ) || [];
        J = new o(
          xg(J.body, wg, Z, () => {
            $ && $(), ve && ve();
          }),
          S
        );
      }
      Q = Q || "text";
      let X = await w[D.findKey(w, Q) || "text"](
        J,
        x
      );
      return !oe && ve && ve(), await new Promise((S, B) => {
        jv(S, B, {
          data: X,
          headers: hn.from(J.headers),
          status: J.status,
          statusText: J.statusText,
          config: x,
          request: Me
        });
      });
    } catch (C) {
      throw ve && ve(), C && C.name === "TypeError" && /Load failed|fetch/i.test(C.message) ? Object.assign(
        new we(
          "Network Error",
          we.ERR_NETWORK,
          x,
          Me,
          C && C.response
        ),
        {
          cause: C.cause || C
        }
      ) : we.from(C, C && C.code, x, Me, C && C.response);
    }
  };
}, h6 = /* @__PURE__ */ new Map(), Rv = (t) => {
  let a = t && t.env || {};
  const { fetch: i, Request: o, Response: s } = a, u = [o, s, i];
  let f = u.length, p = f, g, v, y = h6;
  for (; p--; )
    g = u[p], v = y.get(g), v === void 0 && y.set(g, v = p ? /* @__PURE__ */ new Map() : f6(a)), y = v;
  return v;
};
Rv();
const $h = {
  http: Cw,
  xhr: l6,
  fetch: {
    get: Rv
  }
};
D.forEach($h, (t, a) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: a });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: a });
  }
});
const Ag = (t) => `- ${t}`, p6 = (t) => D.isFunction(t) || t === null || t === !1;
function m6(t, a) {
  t = D.isArray(t) ? t : [t];
  const { length: i } = t;
  let o, s;
  const u = {};
  for (let f = 0; f < i; f++) {
    o = t[f];
    let p;
    if (s = o, !p6(o) && (s = $h[(p = String(o)).toLowerCase()], s === void 0))
      throw new we(`Unknown adapter '${p}'`);
    if (s && (D.isFunction(s) || (s = s.get(a))))
      break;
    u[p || "#" + f] = s;
  }
  if (!s) {
    const f = Object.entries(u).map(
      ([g, v]) => `adapter ${g} ` + (v === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let p = i ? f.length > 1 ? `since :
` + f.map(Ag).join(`
`) : " " + Ag(f[0]) : "as no adapter specified";
    throw new we(
      "There is no suitable adapter to dispatch the request " + p,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const Ov = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: m6,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: $h
};
function lh(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new as(null, t);
}
function Ng(t) {
  return lh(t), t.headers = hn.from(t.headers), t.data = ih.call(t, t.transformRequest), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Ov.getAdapter(t.adapter || ns.adapter, t)(t).then(
    function(o) {
      return lh(t), o.data = ih.call(t, t.transformResponse, o), o.headers = hn.from(o.headers), o;
    },
    function(o) {
      return Tv(o) || (lh(t), o && o.response && (o.response.data = ih.call(
        t,
        t.transformResponse,
        o.response
      ), o.response.headers = hn.from(o.response.headers))), Promise.reject(o);
    }
  );
}
const Mv = "1.13.6", fu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, a) => {
  fu[t] = function(o) {
    return typeof o === t || "a" + (a < 1 ? "n " : " ") + t;
  };
});
const Tg = {};
fu.transitional = function(a, i, o) {
  function s(u, f) {
    return "[Axios v" + Mv + "] Transitional option '" + u + "'" + f + (o ? ". " + o : "");
  }
  return (u, f, p) => {
    if (a === !1)
      throw new we(
        s(f, " has been removed" + (i ? " in " + i : "")),
        we.ERR_DEPRECATED
      );
    return i && !Tg[f] && (Tg[f] = !0, console.warn(
      s(
        f,
        " has been deprecated since v" + i + " and will be removed in the near future"
      )
    )), a ? a(u, f, p) : !0;
  };
};
fu.spelling = function(a) {
  return (i, o) => (console.warn(`${o} is likely a misspelling of ${a}`), !0);
};
function g6(t, a, i) {
  if (typeof t != "object")
    throw new we("options must be an object", we.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(t);
  let s = o.length;
  for (; s-- > 0; ) {
    const u = o[s], f = a[u];
    if (f) {
      const p = t[u], g = p === void 0 || f(p, u, t);
      if (g !== !0)
        throw new we(
          "option " + u + " must be " + g,
          we.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (i !== !0)
      throw new we("Unknown option " + u, we.ERR_BAD_OPTION);
  }
}
const Xc = {
  assertOptions: g6,
  validators: fu
}, Zn = Xc.validators;
let oi = class {
  constructor(a) {
    this.defaults = a || {}, this.interceptors = {
      request: new mg(),
      response: new mg()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(a, i) {
    try {
      return await this._request(a, i);
    } catch (o) {
      if (o instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const u = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          o.stack ? u && !String(o.stack).endsWith(u.replace(/^.+\n.+\n/, "")) && (o.stack += `
` + u) : o.stack = u;
        } catch {
        }
      }
      throw o;
    }
  }
  _request(a, i) {
    typeof a == "string" ? (i = i || {}, i.url = a) : i = a || {}, i = hi(this.defaults, i);
    const { transitional: o, paramsSerializer: s, headers: u } = i;
    o !== void 0 && Xc.assertOptions(
      o,
      {
        silentJSONParsing: Zn.transitional(Zn.boolean),
        forcedJSONParsing: Zn.transitional(Zn.boolean),
        clarifyTimeoutError: Zn.transitional(Zn.boolean),
        legacyInterceptorReqResOrdering: Zn.transitional(Zn.boolean)
      },
      !1
    ), s != null && (D.isFunction(s) ? i.paramsSerializer = {
      serialize: s
    } : Xc.assertOptions(
      s,
      {
        encode: Zn.function,
        serialize: Zn.function
      },
      !0
    )), i.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? i.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : i.allowAbsoluteUrls = !0), Xc.assertOptions(
      i,
      {
        baseUrl: Zn.spelling("baseURL"),
        withXsrfToken: Zn.spelling("withXSRFToken")
      },
      !0
    ), i.method = (i.method || this.defaults.method || "get").toLowerCase();
    let f = u && D.merge(u.common, u[i.method]);
    u && D.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (x) => {
      delete u[x];
    }), i.headers = hn.concat(f, u);
    const p = [];
    let g = !0;
    this.interceptors.request.forEach(function(N) {
      if (typeof N.runWhen == "function" && N.runWhen(i) === !1)
        return;
      g = g && N.synchronous;
      const k = i.transitional || Ph;
      k && k.legacyInterceptorReqResOrdering ? p.unshift(N.fulfilled, N.rejected) : p.push(N.fulfilled, N.rejected);
    });
    const v = [];
    this.interceptors.response.forEach(function(N) {
      v.push(N.fulfilled, N.rejected);
    });
    let y, w = 0, j;
    if (!g) {
      const x = [Ng.bind(this), void 0];
      for (x.unshift(...p), x.push(...v), j = x.length, y = Promise.resolve(i); w < j; )
        y = y.then(x[w++], x[w++]);
      return y;
    }
    j = p.length;
    let A = i;
    for (; w < j; ) {
      const x = p[w++], N = p[w++];
      try {
        A = x(A);
      } catch (k) {
        N.call(this, k);
        break;
      }
    }
    try {
      y = Ng.call(this, A);
    } catch (x) {
      return Promise.reject(x);
    }
    for (w = 0, j = v.length; w < j; )
      y = y.then(v[w++], v[w++]);
    return y;
  }
  getUri(a) {
    a = hi(this.defaults, a);
    const i = zv(a.baseURL, a.url, a.allowAbsoluteUrls);
    return Av(i, a.params, a.paramsSerializer);
  }
};
D.forEach(["delete", "get", "head", "options"], function(a) {
  oi.prototype[a] = function(i, o) {
    return this.request(
      hi(o || {}, {
        method: a,
        url: i,
        data: (o || {}).data
      })
    );
  };
});
D.forEach(["post", "put", "patch"], function(a) {
  function i(o) {
    return function(u, f, p) {
      return this.request(
        hi(p || {}, {
          method: a,
          headers: o ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: u,
          data: f
        })
      );
    };
  }
  oi.prototype[a] = i(), oi.prototype[a + "Form"] = i(!0);
});
let b6 = class Dv {
  constructor(a) {
    if (typeof a != "function")
      throw new TypeError("executor must be a function.");
    let i;
    this.promise = new Promise(function(u) {
      i = u;
    });
    const o = this;
    this.promise.then((s) => {
      if (!o._listeners) return;
      let u = o._listeners.length;
      for (; u-- > 0; )
        o._listeners[u](s);
      o._listeners = null;
    }), this.promise.then = (s) => {
      let u;
      const f = new Promise((p) => {
        o.subscribe(p), u = p;
      }).then(s);
      return f.cancel = function() {
        o.unsubscribe(u);
      }, f;
    }, a(function(u, f, p) {
      o.reason || (o.reason = new as(u, f, p), i(o.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(a) {
    if (this.reason) {
      a(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(a) : this._listeners = [a];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(a) {
    if (!this._listeners)
      return;
    const i = this._listeners.indexOf(a);
    i !== -1 && this._listeners.splice(i, 1);
  }
  toAbortSignal() {
    const a = new AbortController(), i = (o) => {
      a.abort(o);
    };
    return this.subscribe(i), a.signal.unsubscribe = () => this.unsubscribe(i), a.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let a;
    return {
      token: new Dv(function(s) {
        a = s;
      }),
      cancel: a
    };
  }
};
function v6(t) {
  return function(i) {
    return t.apply(null, i);
  };
}
function y6(t) {
  return D.isObject(t) && t.isAxiosError === !0;
}
const kh = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(kh).forEach(([t, a]) => {
  kh[a] = t;
});
function _v(t) {
  const a = new oi(t), i = pv(oi.prototype.request, a);
  return D.extend(i, oi.prototype, a, { allOwnKeys: !0 }), D.extend(i, a, null, { allOwnKeys: !0 }), i.create = function(s) {
    return _v(hi(t, s));
  }, i;
}
const St = _v(ns);
St.Axios = oi;
St.CanceledError = as;
St.CancelToken = b6;
St.isCancel = Tv;
St.VERSION = Mv;
St.toFormData = du;
St.AxiosError = we;
St.Cancel = St.CanceledError;
St.all = function(a) {
  return Promise.all(a);
};
St.spread = v6;
St.isAxiosError = y6;
St.mergeConfig = hi;
St.AxiosHeaders = hn;
St.formToJSON = (t) => Nv(D.isHTMLForm(t) ? new FormData(t) : t);
St.getAdapter = Ov.getAdapter;
St.HttpStatusCode = kh;
St.default = St;
const {
  Axios: fE,
  AxiosError: hE,
  CanceledError: pE,
  isCancel: mE,
  CancelToken: gE,
  VERSION: bE,
  all: vE,
  Cancel: yE,
  isAxiosError: xE,
  spread: wE,
  toFormData: SE,
  AxiosHeaders: EE,
  HttpStatusCode: kE,
  formToJSON: AE,
  getAdapter: NE,
  mergeConfig: TE
} = St, x6 = "/api/v1", bi = St.create({
  baseURL: x6,
  timeout: 9e5
  // 15 min - Railway CPU throttling can make OCR very slow
});
function jg(t) {
  bi.defaults.baseURL = t;
}
let Bv = null, Lv = null;
function w6(t, a) {
  Bv = t, Lv = a;
}
bi.interceptors.request.use((t) => {
  const a = Bv?.();
  return a && (t.headers.Authorization = `Bearer ${a}`), t;
});
bi.interceptors.response.use(
  (t) => t,
  (t) => (t.response?.status === 401 && t.config?.url !== "/auth/login" && Lv?.(), Promise.reject(t))
);
async function zg(t, a, i) {
  const o = new FormData();
  o.append("dni_front", t, "dni_front.jpg"), a && o.append("dni_back", a, "dni_back.jpg");
  const s = i ? { session_id: i } : {};
  return (await bi.post("/kyc/ocr", o, { params: s })).data;
}
async function S6(t) {
  return (await bi.post("/kyc/ocr/confirm", {
    session_id: t.session_id,
    dni_number: t.dni_number,
    apellido: t.apellido,
    nombre: t.nombre,
    sexo: t.sexo,
    fecha_nacimiento: t.fecha_nacimiento,
    fecha_emision: t.fecha_emision,
    fecha_vencimiento: t.fecha_vencimiento,
    nacionalidad: t.nacionalidad
  })).data;
}
async function E6(t, a, i = {}) {
  const o = typeof i == "string" ? { sessionId: i } : i, s = new FormData();
  s.append("dni_front", t, "dni_front.jpg"), s.append("selfie", a, "selfie.jpg"), o.challengeToken && s.append("challenge_token", o.challengeToken);
  const u = o.sessionId ? { session_id: o.sessionId } : {};
  return (await bi.post("/kyc/biometry", s, { params: u })).data;
}
async function ul(t, a = 1800, i = 0.88) {
  return new Promise((o, s) => {
    const u = new Image();
    u.onload = () => {
      const f = Math.min(1, a / Math.max(u.width, u.height)), p = Math.round(u.width * f), g = Math.round(u.height * f), v = document.createElement("canvas");
      v.width = p, v.height = g, v.getContext("2d").drawImage(u, 0, 0, p, g), v.toBlob(
        (w) => w ? o(w) : s(new Error("canvas.toBlob failed")),
        "image/jpeg",
        i
      );
    }, u.onerror = () => s(new Error("Image load failed")), u.src = t;
  });
}
const Cg = fv()(
  Y5(
    (t) => ({
      token: null,
      isLoading: !1,
      error: null,
      login: async (a, i) => {
        t({ isLoading: !0, error: null });
        try {
          const o = await bi.post("/auth/login", {
            username: a,
            password: i
          });
          return t({ token: o.data.access_token, isLoading: !1 }), !0;
        } catch (o) {
          const s = o?.response?.data?.detail || "Error de conexion";
          return t({ error: s, isLoading: !1 }), !1;
        }
      },
      logout: () => t({ token: null, error: null })
    }),
    {
      name: "auth-store",
      storage: hv(() => sessionStorage),
      // Solo persistimos el token; estado transitorio queda en memoria.
      partialize: (t) => ({ token: t.token })
    }
  )
), hu = "data:image/png;base64,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";
const Uv = (...t) => t.filter((a, i, o) => !!a && a.trim() !== "" && o.indexOf(a) === i).join(" ").trim();
const k6 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const A6 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, i, o) => o ? o.toUpperCase() : i.toLowerCase()
);
const Rg = (t) => {
  const a = A6(t);
  return a.charAt(0).toUpperCase() + a.slice(1);
};
var N6 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const T6 = (t) => {
  for (const a in t)
    if (a.startsWith("aria-") || a === "role" || a === "title")
      return !0;
  return !1;
};
const j6 = q.forwardRef(
  ({
    color: t = "currentColor",
    size: a = 24,
    strokeWidth: i = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: u,
    iconNode: f,
    ...p
  }, g) => q.createElement(
    "svg",
    {
      ref: g,
      ...N6,
      width: a,
      height: a,
      stroke: t,
      strokeWidth: o ? Number(i) * 24 / Number(a) : i,
      className: Uv("lucide", s),
      ...!u && !T6(p) && { "aria-hidden": "true" },
      ...p
    },
    [
      ...f.map(([v, y]) => q.createElement(v, y)),
      ...Array.isArray(u) ? u : [u]
    ]
  )
);
const Qe = (t, a) => {
  const i = q.forwardRef(
    ({ className: o, ...s }, u) => q.createElement(j6, {
      ref: u,
      iconNode: a,
      className: Uv(
        `lucide-${k6(Rg(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return i.displayName = Rg(t), i;
};
const z6 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], pu = Qe("arrow-right", z6);
const C6 = [
  [
    "path",
    {
      d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
      key: "18u6gg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
], R6 = Qe("camera", C6);
const O6 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], M6 = Qe("check", O6);
const D6 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], _6 = Qe("chevron-down", D6);
const B6 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], L6 = Qe("chevron-up", B6);
const U6 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], Ah = Qe("circle-alert", U6);
const H6 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], gl = Qe("circle-check", H6);
const G6 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
], Og = Qe("circle-dot", G6);
const Y6 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], Hv = Qe("circle-x", Y6);
const q6 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], X6 = Qe("circle", q6);
const V6 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
], Mg = Qe("clock", V6);
const I6 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], Q6 = Qe("copy", I6);
const F6 = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
], Gv = Qe("credit-card", F6);
const Z6 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], K6 = Qe("image", Z6);
const J6 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], P6 = Qe("info", J6);
const W6 = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
], $6 = Qe("lightbulb", W6);
const e8 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], oh = Qe("loader-circle", e8);
const t8 = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
], ep = Qe("monitor", t8);
const n8 = [
  ["path", { d: "M6 8L2 12L6 16", key: "kyvwex" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
], Yv = Qe("move-left", n8);
const a8 = [
  ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
], qv = Qe("move-right", a8);
const r8 = [
  ["path", { d: "M13 21h8", key: "1jsn5i" }],
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
], i8 = Qe("pen-line", r8);
const l8 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], tp = Qe("refresh-cw", l8);
const o8 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], np = Qe("rotate-ccw", o8);
const s8 = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["path", { d: "M15 9h.01", key: "x1ddxp" }]
], Xv = Qe("scan-face", s8);
const c8 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], u8 = Qe("shield-check", c8);
const d8 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
], f8 = Qe("shield", d8);
const h8 = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
], p8 = Qe("smartphone", h8);
const m8 = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Vv = Qe("triangle-alert", m8);
const g8 = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], Dg = Qe("user", g8);
const b8 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Nh = Qe("x", b8);
function Iv(t) {
  var a, i, o = "";
  if (typeof t == "string" || typeof t == "number") o += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var s = t.length;
    for (a = 0; a < s; a++) t[a] && (i = Iv(t[a])) && (o && (o += " "), o += i);
  } else for (i in t) t[i] && (o && (o += " "), o += i);
  return o;
}
function Qv() {
  for (var t, a, i = 0, o = "", s = arguments.length; i < s; i++) (t = arguments[i]) && (a = Iv(t)) && (o && (o += " "), o += a);
  return o;
}
const _g = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, Bg = Qv, v8 = (t, a) => (i) => {
  var o;
  if (a?.variants == null) return Bg(t, i?.class, i?.className);
  const { variants: s, defaultVariants: u } = a, f = Object.keys(s).map((v) => {
    const y = i?.[v], w = u?.[v];
    if (y === null) return null;
    const j = _g(y) || _g(w);
    return s[v][j];
  }), p = i && Object.entries(i).reduce((v, y) => {
    let [w, j] = y;
    return j === void 0 || (v[w] = j), v;
  }, {}), g = a == null || (o = a.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((v, y) => {
    let { class: w, className: j, ...A } = y;
    return Object.entries(A).every((x) => {
      let [N, k] = x;
      return Array.isArray(k) ? k.includes({
        ...u,
        ...p
      }[N]) : {
        ...u,
        ...p
      }[N] === k;
    }) ? [
      ...v,
      w,
      j
    ] : v;
  }, []);
  return Bg(t, f, g, i?.class, i?.className);
}, y8 = (t, a) => {
  const i = new Array(t.length + a.length);
  for (let o = 0; o < t.length; o++)
    i[o] = t[o];
  for (let o = 0; o < a.length; o++)
    i[t.length + o] = a[o];
  return i;
}, x8 = (t, a) => ({
  classGroupId: t,
  validator: a
}), Fv = (t = /* @__PURE__ */ new Map(), a = null, i) => ({
  nextPart: t,
  validators: a,
  classGroupId: i
}), Wc = "-", Lg = [], w8 = "arbitrary..", S8 = (t) => {
  const a = k8(t), {
    conflictingClassGroups: i,
    conflictingClassGroupModifiers: o
  } = t;
  return {
    getClassGroupId: (f) => {
      if (f.startsWith("[") && f.endsWith("]"))
        return E8(f);
      const p = f.split(Wc), g = p[0] === "" && p.length > 1 ? 1 : 0;
      return Zv(p, g, a);
    },
    getConflictingClassGroupIds: (f, p) => {
      if (p) {
        const g = o[f], v = i[f];
        return g ? v ? y8(v, g) : g : v || Lg;
      }
      return i[f] || Lg;
    }
  };
}, Zv = (t, a, i) => {
  if (t.length - a === 0)
    return i.classGroupId;
  const s = t[a], u = i.nextPart.get(s);
  if (u) {
    const v = Zv(t, a + 1, u);
    if (v) return v;
  }
  const f = i.validators;
  if (f === null)
    return;
  const p = a === 0 ? t.join(Wc) : t.slice(a).join(Wc), g = f.length;
  for (let v = 0; v < g; v++) {
    const y = f[v];
    if (y.validator(p))
      return y.classGroupId;
  }
}, E8 = (t) => t.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const a = t.slice(1, -1), i = a.indexOf(":"), o = a.slice(0, i);
  return o ? w8 + o : void 0;
})(), k8 = (t) => {
  const {
    theme: a,
    classGroups: i
  } = t;
  return A8(i, a);
}, A8 = (t, a) => {
  const i = Fv();
  for (const o in t) {
    const s = t[o];
    ap(s, i, o, a);
  }
  return i;
}, ap = (t, a, i, o) => {
  const s = t.length;
  for (let u = 0; u < s; u++) {
    const f = t[u];
    N8(f, a, i, o);
  }
}, N8 = (t, a, i, o) => {
  if (typeof t == "string") {
    T8(t, a, i);
    return;
  }
  if (typeof t == "function") {
    j8(t, a, i, o);
    return;
  }
  z8(t, a, i, o);
}, T8 = (t, a, i) => {
  const o = t === "" ? a : Kv(a, t);
  o.classGroupId = i;
}, j8 = (t, a, i, o) => {
  if (C8(t)) {
    ap(t(o), a, i, o);
    return;
  }
  a.validators === null && (a.validators = []), a.validators.push(x8(i, t));
}, z8 = (t, a, i, o) => {
  const s = Object.entries(t), u = s.length;
  for (let f = 0; f < u; f++) {
    const [p, g] = s[f];
    ap(g, Kv(a, p), i, o);
  }
}, Kv = (t, a) => {
  let i = t;
  const o = a.split(Wc), s = o.length;
  for (let u = 0; u < s; u++) {
    const f = o[u];
    let p = i.nextPart.get(f);
    p || (p = Fv(), i.nextPart.set(f, p)), i = p;
  }
  return i;
}, C8 = (t) => "isThemeGetter" in t && t.isThemeGetter === !0, R8 = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let a = 0, i = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  const s = (u, f) => {
    i[u] = f, a++, a > t && (a = 0, o = i, i = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(u) {
      let f = i[u];
      if (f !== void 0)
        return f;
      if ((f = o[u]) !== void 0)
        return s(u, f), f;
    },
    set(u, f) {
      u in i ? i[u] = f : s(u, f);
    }
  };
}, Th = "!", Ug = ":", O8 = [], Hg = (t, a, i, o, s) => ({
  modifiers: t,
  hasImportantModifier: a,
  baseClassName: i,
  maybePostfixModifierPosition: o,
  isExternal: s
}), M8 = (t) => {
  const {
    prefix: a,
    experimentalParseClassName: i
  } = t;
  let o = (s) => {
    const u = [];
    let f = 0, p = 0, g = 0, v;
    const y = s.length;
    for (let N = 0; N < y; N++) {
      const k = s[N];
      if (f === 0 && p === 0) {
        if (k === Ug) {
          u.push(s.slice(g, N)), g = N + 1;
          continue;
        }
        if (k === "/") {
          v = N;
          continue;
        }
      }
      k === "[" ? f++ : k === "]" ? f-- : k === "(" ? p++ : k === ")" && p--;
    }
    const w = u.length === 0 ? s : s.slice(g);
    let j = w, A = !1;
    w.endsWith(Th) ? (j = w.slice(0, -1), A = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      w.startsWith(Th) && (j = w.slice(1), A = !0)
    );
    const x = v && v > g ? v - g : void 0;
    return Hg(u, A, j, x);
  };
  if (a) {
    const s = a + Ug, u = o;
    o = (f) => f.startsWith(s) ? u(f.slice(s.length)) : Hg(O8, !1, f, void 0, !0);
  }
  if (i) {
    const s = o;
    o = (u) => i({
      className: u,
      parseClassName: s
    });
  }
  return o;
}, D8 = (t) => {
  const a = /* @__PURE__ */ new Map();
  return t.orderSensitiveModifiers.forEach((i, o) => {
    a.set(i, 1e6 + o);
  }), (i) => {
    const o = [];
    let s = [];
    for (let u = 0; u < i.length; u++) {
      const f = i[u], p = f[0] === "[", g = a.has(f);
      p || g ? (s.length > 0 && (s.sort(), o.push(...s), s = []), o.push(f)) : s.push(f);
    }
    return s.length > 0 && (s.sort(), o.push(...s)), o;
  };
}, _8 = (t) => ({
  cache: R8(t.cacheSize),
  parseClassName: M8(t),
  sortModifiers: D8(t),
  ...S8(t)
}), B8 = /\s+/, L8 = (t, a) => {
  const {
    parseClassName: i,
    getClassGroupId: o,
    getConflictingClassGroupIds: s,
    sortModifiers: u
  } = a, f = [], p = t.trim().split(B8);
  let g = "";
  for (let v = p.length - 1; v >= 0; v -= 1) {
    const y = p[v], {
      isExternal: w,
      modifiers: j,
      hasImportantModifier: A,
      baseClassName: x,
      maybePostfixModifierPosition: N
    } = i(y);
    if (w) {
      g = y + (g.length > 0 ? " " + g : g);
      continue;
    }
    let k = !!N, H = o(k ? x.substring(0, N) : x);
    if (!H) {
      if (!k) {
        g = y + (g.length > 0 ? " " + g : g);
        continue;
      }
      if (H = o(x), !H) {
        g = y + (g.length > 0 ? " " + g : g);
        continue;
      }
      k = !1;
    }
    const P = j.length === 0 ? "" : j.length === 1 ? j[0] : u(j).join(":"), V = A ? P + Th : P, F = V + H;
    if (f.indexOf(F) > -1)
      continue;
    f.push(F);
    const W = s(H, k);
    for (let ee = 0; ee < W.length; ++ee) {
      const Q = W[ee];
      f.push(V + Q);
    }
    g = y + (g.length > 0 ? " " + g : g);
  }
  return g;
}, U8 = (...t) => {
  let a = 0, i, o, s = "";
  for (; a < t.length; )
    (i = t[a++]) && (o = Jv(i)) && (s && (s += " "), s += o);
  return s;
}, Jv = (t) => {
  if (typeof t == "string")
    return t;
  let a, i = "";
  for (let o = 0; o < t.length; o++)
    t[o] && (a = Jv(t[o])) && (i && (i += " "), i += a);
  return i;
}, H8 = (t, ...a) => {
  let i, o, s, u;
  const f = (g) => {
    const v = a.reduce((y, w) => w(y), t());
    return i = _8(v), o = i.cache.get, s = i.cache.set, u = p, p(g);
  }, p = (g) => {
    const v = o(g);
    if (v)
      return v;
    const y = L8(g, i);
    return s(g, y), y;
  };
  return u = f, (...g) => u(U8(...g));
}, G8 = [], Ot = (t) => {
  const a = (i) => i[t] || G8;
  return a.isThemeGetter = !0, a;
}, Pv = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Wv = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Y8 = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, q8 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, X8 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, V8 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, I8 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Q8 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Sr = (t) => Y8.test(t), Ce = (t) => !!t && !Number.isNaN(Number(t)), Er = (t) => !!t && Number.isInteger(Number(t)), sh = (t) => t.endsWith("%") && Ce(t.slice(0, -1)), Xa = (t) => q8.test(t), $v = () => !0, F8 = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  X8.test(t) && !V8.test(t)
), rp = () => !1, Z8 = (t) => I8.test(t), K8 = (t) => Q8.test(t), J8 = (t) => !re(t) && !le(t), P8 = (t) => Mr(t, n3, rp), re = (t) => Pv.test(t), ti = (t) => Mr(t, a3, F8), Gg = (t) => Mr(t, i7, Ce), W8 = (t) => Mr(t, i3, $v), $8 = (t) => Mr(t, r3, rp), Yg = (t) => Mr(t, e3, rp), e7 = (t) => Mr(t, t3, K8), Mc = (t) => Mr(t, l3, Z8), le = (t) => Wv.test(t), Go = (t) => vi(t, a3), t7 = (t) => vi(t, r3), qg = (t) => vi(t, e3), n7 = (t) => vi(t, n3), a7 = (t) => vi(t, t3), Dc = (t) => vi(t, l3, !0), r7 = (t) => vi(t, i3, !0), Mr = (t, a, i) => {
  const o = Pv.exec(t);
  return o ? o[1] ? a(o[1]) : i(o[2]) : !1;
}, vi = (t, a, i = !1) => {
  const o = Wv.exec(t);
  return o ? o[1] ? a(o[1]) : i : !1;
}, e3 = (t) => t === "position" || t === "percentage", t3 = (t) => t === "image" || t === "url", n3 = (t) => t === "length" || t === "size" || t === "bg-size", a3 = (t) => t === "length", i7 = (t) => t === "number", r3 = (t) => t === "family-name", i3 = (t) => t === "number" || t === "weight", l3 = (t) => t === "shadow", l7 = () => {
  const t = Ot("color"), a = Ot("font"), i = Ot("text"), o = Ot("font-weight"), s = Ot("tracking"), u = Ot("leading"), f = Ot("breakpoint"), p = Ot("container"), g = Ot("spacing"), v = Ot("radius"), y = Ot("shadow"), w = Ot("inset-shadow"), j = Ot("text-shadow"), A = Ot("drop-shadow"), x = Ot("blur"), N = Ot("perspective"), k = Ot("aspect"), H = Ot("ease"), P = Ot("animate"), V = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], F = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], W = () => [...F(), le, re], ee = () => ["auto", "hidden", "clip", "visible", "scroll"], Q = () => ["auto", "contain", "none"], Y = () => [le, re, g], K = () => [Sr, "full", "auto", ...Y()], Ie = () => [Er, "none", "subgrid", le, re], je = () => ["auto", {
    span: ["full", Er, le, re]
  }, Er, le, re], Te = () => [Er, "auto", le, re], Me = () => ["auto", "min", "max", "fr", le, re], ve = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ke = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], C = () => ["auto", ...Y()], I = () => [Sr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...Y()], J = () => [Sr, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...Y()], oe = () => [Sr, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...Y()], X = () => [t, le, re], S = () => [...F(), qg, Yg, {
    position: [le, re]
  }], B = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Z = () => ["auto", "cover", "contain", n7, P8, {
    size: [le, re]
  }], $ = () => [sh, Go, ti], te = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    v,
    le,
    re
  ], ce = () => ["", Ce, Go, ti], Se = () => ["solid", "dashed", "dotted", "double"], at = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], xe = () => [Ce, sh, qg, Yg], mn = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    le,
    re
  ], Ln = () => ["none", Ce, le, re], ye = () => ["none", Ce, le, re], st = () => [Ce, le, re], ne = () => [Sr, "full", ...Y()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Xa],
      breakpoint: [Xa],
      color: [$v],
      container: [Xa],
      "drop-shadow": [Xa],
      ease: ["in", "out", "in-out"],
      font: [J8],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Xa],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Xa],
      shadow: [Xa],
      spacing: ["px", Ce],
      text: [Xa],
      "text-shadow": [Xa],
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
        aspect: ["auto", "square", Sr, re, le, k]
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
        columns: [Ce, re, le, p]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": V()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": V()
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
        object: W()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ee()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ee()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ee()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Q()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Q()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Q()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: K()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": K()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": K()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": K(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: K()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": K(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: K()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": K()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": K()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: K()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: K()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: K()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: K()
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
        z: [Er, "auto", le, re]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Sr, "full", "auto", p, ...Y()]
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
        flex: [Ce, Sr, "auto", "initial", "none", re]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Ce, le, re]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Ce, le, re]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Er, "first", "last", "none", le, re]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": Ie()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: je()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Te()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Te()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": Ie()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: je()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Te()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Te()
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
        "auto-cols": Me()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Me()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: Y()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": Y()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": Y()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...ve(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...ke(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...ke()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ve()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...ke(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...ke(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": ve()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...ke(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...ke()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: Y()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: Y()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: Y()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: Y()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: Y()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: Y()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: Y()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: Y()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: Y()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: Y()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: Y()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: C()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: C()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: C()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: C()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: C()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: C()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: C()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: C()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: C()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: C()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: C()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": Y()
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
        "space-y": Y()
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
        size: I()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...J()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...J()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...J()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...oe()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...oe()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...oe()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [p, "screen", ...I()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          p,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...I()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          p,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [f]
          },
          ...I()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...I()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...I()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...I()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", i, Go, ti]
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
        font: [o, r7, W8]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", sh, re]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [t7, $8, a]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [re]
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
        tracking: [s, le, re]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Ce, "none", le, Gg]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          u,
          ...Y()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", le, re]
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
        list: ["disc", "decimal", "none", le, re]
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
        placeholder: X()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: X()
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
        decoration: [...Se(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Ce, "from-font", "auto", le, ti]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: X()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Ce, "auto", le, re]
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
        indent: Y()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", le, re]
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
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
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
        content: ["none", le, re]
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
        bg: S()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: B()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Z()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Er, le, re],
          radial: ["", le, re],
          conic: [Er, le, re]
        }, a7, e7]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: X()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: $()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: $()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: $()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: X()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: X()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: X()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: te()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": te()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": te()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": te()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": te()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": te()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": te()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": te()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": te()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": te()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": te()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": te()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": te()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": te()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": te()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: ce()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": ce()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": ce()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": ce()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": ce()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": ce()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": ce()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": ce()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": ce()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": ce()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": ce()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": ce()
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
        "divide-y": ce()
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
        border: [...Se(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Se(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: X()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": X()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": X()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": X()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": X()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": X()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": X()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": X()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": X()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": X()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": X()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: X()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Se(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ce, le, re]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Ce, Go, ti]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: X()
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
          y,
          Dc,
          Mc
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: X()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", w, Dc, Mc]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": X()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: ce()
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
        ring: X()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Ce, ti]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": X()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": ce()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": X()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", j, Dc, Mc]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": X()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Ce, le, re]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...at(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": at()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [Ce]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": xe()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": xe()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": X()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": X()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": xe()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": xe()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": X()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": X()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": xe()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": xe()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": X()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": X()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": xe()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": xe()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": X()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": X()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": xe()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": xe()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": X()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": X()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": xe()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": xe()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": X()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": X()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": xe()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": xe()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": X()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": X()
      }],
      "mask-image-radial": [{
        "mask-radial": [le, re]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": xe()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": xe()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": X()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": X()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": F()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Ce]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": xe()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": xe()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": X()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": X()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: S()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: B()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Z()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", le, re]
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
          le,
          re
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: mn()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Ce, le, re]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Ce, le, re]
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
          A,
          Dc,
          Mc
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": X()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Ce, le, re]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Ce, le, re]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Ce, le, re]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Ce, le, re]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Ce, le, re]
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
          le,
          re
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": mn()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Ce, le, re]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Ce, le, re]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Ce, le, re]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Ce, le, re]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Ce, le, re]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Ce, le, re]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Ce, le, re]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Ce, le, re]
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
        "border-spacing": Y()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": Y()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": Y()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", le, re]
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
        duration: [Ce, "initial", le, re]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", H, le, re]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Ce, le, re]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", P, le, re]
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
        perspective: [N, le, re]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": W()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Ln()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Ln()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Ln()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Ln()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ye()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ye()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ye()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ye()
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
        skew: st()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": st()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": st()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [le, re, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: W()
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
        translate: ne()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ne()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ne()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ne()
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
        accent: X()
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
        caret: X()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", le, re]
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
        "scroll-m": Y()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": Y()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": Y()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": Y()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": Y()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": Y()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": Y()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": Y()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": Y()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": Y()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": Y()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": Y()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": Y()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": Y()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": Y()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": Y()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": Y()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": Y()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": Y()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": Y()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": Y()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": Y()
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
        "will-change": ["auto", "scroll", "contents", "transform", le, re]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...X()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ce, Go, ti, Gg]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...X()]
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
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
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
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
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
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, o7 = /* @__PURE__ */ H8(l7);
function Xe(...t) {
  return o7(Qv(t));
}
const s7 = v8(
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "text-primary-foreground bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-end)] hover:from-[var(--color-accent)] hover:to-[var(--color-accent-end)] hover:-translate-y-px active:scale-[0.98] shadow-[0_4px_20px_rgba(107,47,160,0.25)] hover:shadow-[0_4px_20px_rgba(14,110,181,0.30)] transition-all duration-300",
        secondary: "bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80",
        outline: "border border-border bg-transparent text-foreground hover:border-[var(--color-border-active)] hover:text-primary",
        ghost: "bg-transparent text-muted-foreground hover:text-foreground",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        success: "bg-success text-success-foreground hover:bg-success/90"
      },
      size: {
        sm: "h-11 px-4 text-[14px]",
        md: "h-12 px-5 text-[15px]",
        lg: "h-14 px-6 text-[15px] lg:text-[16px] w-full",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);
function pt({ className: t, variant: a, size: i, ...o }) {
  return /* @__PURE__ */ m.jsx(
    "button",
    {
      className: Xe(s7({ variant: a, size: i, className: t })),
      ...o
    }
  );
}
function xt({ className: t, ...a }) {
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      className: Xe(
        "rounded-[18px] bg-card text-card-foreground border border-border overflow-hidden transition-colors",
        t
      ),
      ...a
    }
  );
}
function ra({ className: t, ...a }) {
  return /* @__PURE__ */ m.jsx("div", { className: Xe("flex flex-col gap-1 p-4 pb-3 sm:p-6 sm:pb-4", t), ...a });
}
function ia({ className: t, ...a }) {
  return /* @__PURE__ */ m.jsx(
    "h3",
    {
      className: Xe("text-[17px] lg:text-[18px] font-semibold leading-tight", t),
      ...a
    }
  );
}
function $c({ className: t, ...a }) {
  return /* @__PURE__ */ m.jsx("p", { className: Xe("text-[15px] lg:text-[16px] text-muted-foreground font-light", t), ...a });
}
function la({ className: t, ...a }) {
  return /* @__PURE__ */ m.jsx("div", { className: Xe("p-4 pt-0 sm:p-6 sm:pt-0", t), ...a });
}
const c7 = [
  { num: "01", icon: Gv, name: "Fotografiar el DNI", desc: "Frente y dorso del documento" },
  { num: "02", icon: Xv, name: "Verificación facial", desc: "Prueba de vida en tiempo real" },
  { num: "03", icon: u8, name: "Validación de datos", desc: "Consulta con registros oficiales" }
];
function u7({ onStart: t }) {
  return /* @__PURE__ */ m.jsxs(xt, { children: [
    /* @__PURE__ */ m.jsxs("div", { className: "relative overflow-hidden px-7 pt-[22px] pb-[14px] text-center", children: [
      /* @__PURE__ */ m.jsx("div", { className: "absolute inset-0 pointer-events-none overflow-hidden", "aria-hidden": "true", children: /* @__PURE__ */ m.jsx("div", { className: "scan-line" }) }),
      /* @__PURE__ */ m.jsxs(
        "h2",
        {
          className: "text-[28px] sm:text-[32px] lg:text-[36px] font-extrabold leading-[1.08] tracking-[-0.02em] mb-2",
          style: { fontFamily: "var(--font-display)" },
          children: [
            "Verifiquemos",
            /* @__PURE__ */ m.jsx("br", {}),
            "tu ",
            /* @__PURE__ */ m.jsx("em", { className: "not-italic text-primary", children: "identidad" })
          ]
        }
      ),
      /* @__PURE__ */ m.jsx("p", { className: "text-[15px] lg:text-[16px] font-light text-muted-foreground", children: "Completá estos 3 pasos" })
    ] }),
    /* @__PURE__ */ m.jsx("div", { className: "border-t border-border", role: "list", children: c7.map(({ num: a, icon: i, name: o, desc: s }) => /* @__PURE__ */ m.jsxs(
      "div",
      {
        className: "grid items-center border-b border-border last:border-b-0 px-7 py-[11px] hover:bg-[var(--color-surface-2)] transition-colors",
        style: { gridTemplateColumns: "44px 1fr 24px" },
        role: "listitem",
        children: [
          /* @__PURE__ */ m.jsx(
            "span",
            {
              className: "text-[20px] lg:text-[22px] font-bold text-[var(--color-dim)] transition-colors",
              style: { fontFamily: "var(--font-body)" },
              children: a
            }
          ),
          /* @__PURE__ */ m.jsxs("div", { children: [
            /* @__PURE__ */ m.jsx("p", { className: "text-[16px] font-medium text-foreground", children: o }),
            /* @__PURE__ */ m.jsx("p", { className: "text-[14px] font-light text-muted-foreground", children: s })
          ] }),
          /* @__PURE__ */ m.jsx(i, { size: 18, strokeWidth: 1.5, className: "text-[var(--color-dim)]" })
        ]
      },
      a
    )) }),
    /* @__PURE__ */ m.jsxs("div", { className: "mx-7 my-[10px] px-3 py-[9px] rounded-md bg-primary/10 border border-[var(--color-border-active)] flex items-start gap-2", children: [
      /* @__PURE__ */ m.jsx(P6, { size: 15, strokeWidth: 1.5, className: "text-primary flex-shrink-0 mt-0.5" }),
      /* @__PURE__ */ m.jsx("p", { className: "text-[14px] font-light text-muted-foreground leading-relaxed", children: "Necesitará su DNI argentino a mano y acceso a la cámara de su dispositivo." })
    ] }),
    /* @__PURE__ */ m.jsx("div", { className: "px-7 pb-[20px]", children: /* @__PURE__ */ m.jsxs(pt, { size: "lg", onClick: t, children: [
      /* @__PURE__ */ m.jsx(pu, { size: 16, strokeWidth: 2 }),
      "Comenzar verificación"
    ] }) })
  ] });
}
var o3 = dv(), Vc = { exports: {} }, d7 = Vc.exports, Xg;
function f7() {
  return Xg || (Xg = 1, (function(t, a) {
    (function(o, s) {
      t.exports = s(ou());
    })(d7, function(i) {
      return (
        /******/
        (function(o) {
          var s = {};
          function u(f) {
            if (s[f])
              return s[f].exports;
            var p = s[f] = {
              /******/
              i: f,
              /******/
              l: !1,
              /******/
              exports: {}
              /******/
            };
            return o[f].call(p.exports, p, p.exports, u), p.l = !0, p.exports;
          }
          return u.m = o, u.c = s, u.d = function(f, p, g) {
            u.o(f, p) || Object.defineProperty(f, p, { enumerable: !0, get: g });
          }, u.r = function(f) {
            typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(f, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(f, "__esModule", { value: !0 });
          }, u.t = function(f, p) {
            if (p & 1 && (f = u(f)), p & 8 || p & 4 && typeof f == "object" && f && f.__esModule) return f;
            var g = /* @__PURE__ */ Object.create(null);
            if (u.r(g), Object.defineProperty(g, "default", { enumerable: !0, value: f }), p & 2 && typeof f != "string") for (var v in f) u.d(g, v, (function(y) {
              return f[y];
            }).bind(null, v));
            return g;
          }, u.n = function(f) {
            var p = f && f.__esModule ? (
              /******/
              function() {
                return f.default;
              }
            ) : (
              /******/
              function() {
                return f;
              }
            );
            return u.d(p, "a", p), p;
          }, u.o = function(f, p) {
            return Object.prototype.hasOwnProperty.call(f, p);
          }, u.p = "", u(u.s = "./src/react-webcam.tsx");
        })({
          /***/
          "./src/react-webcam.tsx": (
            /*!******************************!*\
              !*** ./src/react-webcam.tsx ***!
              \******************************/
            /*! exports provided: default */
            /***/
            (function(o, s, u) {
              u.r(s);
              var f = u(
                /*! react */
                "react"
              ), p = /* @__PURE__ */ (function() {
                var j = function(A, x) {
                  return j = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(N, k) {
                    N.__proto__ = k;
                  } || function(N, k) {
                    for (var H in k) k.hasOwnProperty(H) && (N[H] = k[H]);
                  }, j(A, x);
                };
                return function(A, x) {
                  j(A, x);
                  function N() {
                    this.constructor = A;
                  }
                  A.prototype = x === null ? Object.create(x) : (N.prototype = x.prototype, new N());
                };
              })(), g = function() {
                return g = Object.assign || function(j) {
                  for (var A, x = 1, N = arguments.length; x < N; x++) {
                    A = arguments[x];
                    for (var k in A) Object.prototype.hasOwnProperty.call(A, k) && (j[k] = A[k]);
                  }
                  return j;
                }, g.apply(this, arguments);
              }, v = function(j, A) {
                var x = {};
                for (var N in j) Object.prototype.hasOwnProperty.call(j, N) && A.indexOf(N) < 0 && (x[N] = j[N]);
                if (j != null && typeof Object.getOwnPropertySymbols == "function")
                  for (var k = 0, N = Object.getOwnPropertySymbols(j); k < N.length; k++)
                    A.indexOf(N[k]) < 0 && Object.prototype.propertyIsEnumerable.call(j, N[k]) && (x[N[k]] = j[N[k]]);
                return x;
              };
              (function() {
                typeof window > "u" || (navigator.mediaDevices === void 0 && (navigator.mediaDevices = {}), navigator.mediaDevices.getUserMedia === void 0 && (navigator.mediaDevices.getUserMedia = function(A) {
                  var x = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
                  return x ? new Promise(function(N, k) {
                    x.call(navigator, A, N, k);
                  }) : Promise.reject(new Error("getUserMedia is not implemented in this browser"));
                }));
              })();
              function y() {
                return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
              }
              var w = (
                /** @class */
                (function(j) {
                  p(A, j);
                  function A(x) {
                    var N = j.call(this, x) || this;
                    return N.canvas = null, N.ctx = null, N.requestUserMediaId = 0, N.unmounted = !1, N.state = {
                      hasUserMedia: !1
                    }, N;
                  }
                  return A.prototype.componentDidMount = function() {
                    var x = this, N = x.state, k = x.props;
                    if (this.unmounted = !1, !y()) {
                      k.onUserMediaError("getUserMedia not supported");
                      return;
                    }
                    N.hasUserMedia || this.requestUserMedia(), k.children && typeof k.children != "function" && console.warn("children must be a function");
                  }, A.prototype.componentDidUpdate = function(x) {
                    var N = this.props;
                    if (!y()) {
                      N.onUserMediaError("getUserMedia not supported");
                      return;
                    }
                    var k = JSON.stringify(x.audioConstraints) !== JSON.stringify(N.audioConstraints), H = JSON.stringify(x.videoConstraints) !== JSON.stringify(N.videoConstraints), P = x.minScreenshotWidth !== N.minScreenshotWidth, V = x.minScreenshotHeight !== N.minScreenshotHeight;
                    (H || P || V) && (this.canvas = null, this.ctx = null), (k || H) && (this.stopAndCleanup(), this.requestUserMedia());
                  }, A.prototype.componentWillUnmount = function() {
                    this.unmounted = !0, this.stopAndCleanup();
                  }, A.stopMediaStream = function(x) {
                    x && (x.getVideoTracks && x.getAudioTracks ? (x.getVideoTracks().map(function(N) {
                      x.removeTrack(N), N.stop();
                    }), x.getAudioTracks().map(function(N) {
                      x.removeTrack(N), N.stop();
                    })) : x.stop());
                  }, A.prototype.stopAndCleanup = function() {
                    var x = this.state;
                    x.hasUserMedia && (A.stopMediaStream(this.stream), x.src && window.URL.revokeObjectURL(x.src));
                  }, A.prototype.getScreenshot = function(x) {
                    var N = this, k = N.state, H = N.props;
                    if (!k.hasUserMedia)
                      return null;
                    var P = this.getCanvas(x);
                    return P && P.toDataURL(H.screenshotFormat, H.screenshotQuality);
                  }, A.prototype.getCanvas = function(x) {
                    var N = this, k = N.state, H = N.props;
                    if (!this.video || !k.hasUserMedia || !this.video.videoHeight)
                      return null;
                    if (!this.ctx) {
                      var P = this.video.videoWidth, V = this.video.videoHeight;
                      if (!this.props.forceScreenshotSourceSize) {
                        var F = P / V;
                        P = H.minScreenshotWidth || this.video.clientWidth, V = P / F, H.minScreenshotHeight && V < H.minScreenshotHeight && (V = H.minScreenshotHeight, P = V * F);
                      }
                      this.canvas = document.createElement("canvas"), this.canvas.width = x?.width || P, this.canvas.height = x?.height || V, this.ctx = this.canvas.getContext("2d");
                    }
                    var W = this, ee = W.ctx, Q = W.canvas;
                    return ee && Q && (Q.width = x?.width || Q.width, Q.height = x?.height || Q.height, H.mirrored && (ee.translate(Q.width, 0), ee.scale(-1, 1)), ee.imageSmoothingEnabled = H.imageSmoothing, ee.drawImage(this.video, 0, 0, x?.width || Q.width, x?.height || Q.height), H.mirrored && (ee.scale(-1, 1), ee.translate(-Q.width, 0))), Q;
                  }, A.prototype.requestUserMedia = function() {
                    var x = this, N = this.props, k = function(V, F) {
                      var W = {
                        video: typeof F < "u" ? F : !0
                      };
                      N.audio && (W.audio = typeof V < "u" ? V : !0), x.requestUserMediaId++;
                      var ee = x.requestUserMediaId;
                      navigator.mediaDevices.getUserMedia(W).then(function(Q) {
                        x.unmounted || ee !== x.requestUserMediaId ? A.stopMediaStream(Q) : x.handleUserMedia(null, Q);
                      }).catch(function(Q) {
                        x.handleUserMedia(Q);
                      });
                    };
                    if ("mediaDevices" in navigator)
                      k(N.audioConstraints, N.videoConstraints);
                    else {
                      var H = function(V) {
                        return { optional: [{ sourceId: V }] };
                      }, P = function(V) {
                        var F = V.deviceId;
                        return typeof F == "string" ? F : Array.isArray(F) && F.length > 0 ? F[0] : typeof F == "object" && F.ideal ? F.ideal : null;
                      };
                      MediaStreamTrack.getSources(function(V) {
                        var F = null, W = null;
                        V.forEach(function(Y) {
                          Y.kind === "audio" ? F = Y.id : Y.kind === "video" && (W = Y.id);
                        });
                        var ee = P(N.audioConstraints);
                        ee && (F = ee);
                        var Q = P(N.videoConstraints);
                        Q && (W = Q), k(H(F), H(W));
                      });
                    }
                  }, A.prototype.handleUserMedia = function(x, N) {
                    var k = this.props;
                    if (x || !N) {
                      this.setState({ hasUserMedia: !1 }), k.onUserMediaError(x);
                      return;
                    }
                    this.stream = N;
                    try {
                      this.video && (this.video.srcObject = N), this.setState({ hasUserMedia: !0 });
                    } catch {
                      this.setState({
                        hasUserMedia: !0,
                        src: window.URL.createObjectURL(N)
                      });
                    }
                    k.onUserMedia(N);
                  }, A.prototype.render = function() {
                    var x = this, N = this, k = N.state, H = N.props, P = H.audio;
                    H.forceScreenshotSourceSize;
                    var V = H.disablePictureInPicture;
                    H.onUserMedia, H.onUserMediaError, H.screenshotFormat, H.screenshotQuality, H.minScreenshotWidth, H.minScreenshotHeight, H.audioConstraints, H.videoConstraints, H.imageSmoothing;
                    var F = H.mirrored, W = H.style, ee = W === void 0 ? {} : W, Q = H.children, Y = v(H, ["audio", "forceScreenshotSourceSize", "disablePictureInPicture", "onUserMedia", "onUserMediaError", "screenshotFormat", "screenshotQuality", "minScreenshotWidth", "minScreenshotHeight", "audioConstraints", "videoConstraints", "imageSmoothing", "mirrored", "style", "children"]), K = F ? g(g({}, ee), { transform: (ee.transform || "") + " scaleX(-1)" }) : ee, Ie = {
                      getScreenshot: this.getScreenshot.bind(this)
                    };
                    return f.createElement(
                      f.Fragment,
                      null,
                      f.createElement("video", g({ autoPlay: !0, disablePictureInPicture: V, src: k.src, muted: !P, playsInline: !0, ref: function(je) {
                        x.video = je;
                      }, style: K }, Y)),
                      Q && Q(Ie)
                    );
                  }, A.defaultProps = {
                    audio: !1,
                    disablePictureInPicture: !1,
                    forceScreenshotSourceSize: !1,
                    imageSmoothing: !0,
                    mirrored: !1,
                    onUserMedia: function() {
                    },
                    onUserMediaError: function() {
                    },
                    screenshotFormat: "image/webp",
                    screenshotQuality: 0.92
                  }, A;
                })(f.Component)
              );
              s.default = w;
            })
          ),
          /***/
          react: (
            /*!**************************************************************************************!*\
              !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
              \**************************************************************************************/
            /*! no static exports found */
            /***/
            (function(o, s) {
              o.exports = i;
            })
          )
          /******/
        }).default
      );
    });
  })(Vc)), Vc.exports;
}
var h7 = f7();
const jh = /* @__PURE__ */ uv(h7), Vg = {
  status: "none",
  sharpness: 0,
  alignment: 0,
  message: "Coloque el DNI dentro del recuadro"
}, zh = 1.586, p7 = 150, Ig = 320, m7 = {
  // computed dynamically based on aspect ratio
  w: 0.85
};
function s3(t, a, i = m7.w) {
  const o = i, s = o * t / (zh * a), u = (1 - o) / 2, f = (1 - s) / 2;
  return { x: u, y: f, w: o, h: s };
}
function g7(t) {
  const { data: a, width: i, height: o } = t, s = new Float32Array(i * o);
  for (let u = 0; u < i * o; u++) {
    const f = u * 4;
    s[u] = 0.299 * a[f] + 0.587 * a[f + 1] + 0.114 * a[f + 2];
  }
  return s;
}
function b7(t, a, i) {
  let o = 0, s = 0, u = 0;
  for (let p = 1; p < i - 1; p++)
    for (let g = 1; g < a - 1; g++) {
      const v = p * a + g, y = t[v - a] + t[v + a] + t[v - 1] + t[v + 1] - 4 * t[v];
      o += y, s += y * y, u++;
    }
  if (u === 0) return 0;
  const f = o / u;
  return s / u - f * f;
}
function v7(t, a, i) {
  const o = new Float32Array(a * i);
  for (let s = 1; s < i - 1; s++)
    for (let u = 1; u < a - 1; u++) {
      const f = s * a + u, p = -t[f - a - 1] + t[f - a + 1] + -2 * t[f - 1] + 2 * t[f + 1] + -t[f + a - 1] + t[f + a + 1], g = -t[f - a - 1] - 2 * t[f - a] - t[f - a + 1] + t[f + a - 1] + 2 * t[f + a] + t[f + a + 1];
      o[f] = Math.sqrt(p * p + g * g);
    }
  return o;
}
function y7(t, a, i, o) {
  const s = new Float32Array(i);
  for (let x = 0; x < i; x++) {
    let N = 0;
    for (let k = 0; k < a; k++)
      t[x * a + k] > o && N++;
    s[x] = N;
  }
  const u = new Float32Array(a);
  for (let x = 0; x < a; x++) {
    let N = 0;
    for (let k = 0; k < i; k++)
      t[k * a + x] > o && N++;
    u[x] = N;
  }
  const f = a * 0.18, p = Qg(s, f, i * 0.15);
  if (p.length < 2) return null;
  const g = i * 0.18, v = Qg(u, g, a * 0.15);
  if (v.length < 2) return null;
  const y = Math.min(p[0], p[1]), w = Math.max(p[0], p[1]), j = Math.min(v[0], v[1]), A = Math.max(v[0], v[1]);
  return w - y < i * 0.2 || A - j < a * 0.2 ? null : { top: y, bottom: w, left: j, right: A };
}
function Qg(t, a, i) {
  const o = [];
  for (let u = 0; u < t.length; u++)
    if (t[u] >= a) {
      let f = !0;
      const p = Math.max(3, Math.floor(i * 0.3));
      for (let g = Math.max(0, u - p); g <= Math.min(t.length - 1, u + p); g++)
        if (g !== u && t[g] > t[u]) {
          f = !1;
          break;
        }
      f && o.push({ idx: u, val: t[u] });
    }
  if (o.sort((u, f) => f.val - u.val), o.length === 0) return [];
  const s = [o[0].idx];
  for (let u = 1; u < o.length && s.length < 2; u++)
    Math.abs(o[u].idx - s[0]) >= i && s.push(o[u].idx);
  return s;
}
function x7(t, a, i) {
  const o = (t.right - t.left) / a, s = (t.bottom - t.top) / i, u = (t.left + t.right) / 2 / a, f = (t.top + t.bottom) / 2 / i, p = 0.5, g = 0.5, v = Math.min(o, s) > 0.5 ? Math.min(1, o * s / 0.7) : o * s, y = Math.abs(u - p), w = Math.abs(f - g), j = Math.max(0, 1 - (y + w) * 3), A = o * a / (s * i || 1), x = Math.abs(A - zh) / zh, N = Math.max(0, 1 - x * 3);
  return v * 0.35 + j * 0.35 + N * 0.3;
}
const w7 = 0.25, Fg = 0.17, S7 = 3;
function E7(t, a = 0) {
  const i = q.useRef(0), o = q.useRef(null), s = q.useRef(0), [u, f] = q.useState(Vg), p = q.useRef(!1), g = q.useRef(!1), v = q.useRef(0), y = q.useRef(null), w = q.useRef(null);
  return q.useEffect(() => {
    t || f(Vg), p.current = !1, g.current = !1, v.current = 0, y.current = null, w.current = null;
  }, [t, a]), q.useEffect(() => {
    if (!t) return;
    o.current || (o.current = document.createElement("canvas"));
    const j = o.current, A = j.getContext("2d", { willReadFrequently: !0 });
    if (!A) return;
    function x() {
      if (!t || t.readyState < 2 || !A) {
        i.current = requestAnimationFrame(x);
        return;
      }
      const N = performance.now();
      if (N - s.current < p7) {
        i.current = requestAnimationFrame(x);
        return;
      }
      s.current = N;
      const k = t.videoWidth, H = t.videoHeight;
      if (k === 0 || H === 0) {
        i.current = requestAnimationFrame(x);
        return;
      }
      const P = s3(k, H), V = Math.floor(P.x * k), F = Math.floor(P.y * H), W = Math.floor(P.w * k), ee = Math.floor(P.h * H);
      if (W <= 0 || ee <= 0) {
        i.current = requestAnimationFrame(x);
        return;
      }
      const Q = Ig / W, Y = Ig, K = Math.floor(ee * Q);
      j.width = Y, j.height = K, A.drawImage(t, V, F, W, ee, 0, 0, Y, K);
      let Ie;
      try {
        Ie = A.getImageData(0, 0, Y, K);
      } catch {
        i.current = requestAnimationFrame(x);
        return;
      }
      const je = g7(Ie), Te = b7(je, Y, K), Me = Math.min(1, Te / 800);
      w.current = w.current === null ? Me : w.current + 0.3 * (Me - w.current);
      const ve = w.current, ke = v7(je, Y, K), I = y7(ke, Y, K, 28), J = I ? x7(I, Y, K) : 0;
      y.current = y.current === null ? J : y.current + 0.3 * (J - y.current);
      const oe = y.current;
      let X = "none", S = "Coloque el DNI dentro del recuadro";
      oe > 0.45 && ve > 0.16 ? (g.current = !0, p.current = !0, v.current = 0, X = "ready", S = "Perfecto! Mantenga la posición...") : g.current ? (v.current += 1, v.current < S7 ? (X = "ready", S = "Perfecto! Mantenga la posición...") : (g.current = !1, v.current = 0, p.current && oe >= Fg ? (X = "partial", S = ve < 0.12 ? "Imagen borrosa - acerque o enfoque" : "Alinee el DNI con el recuadro") : p.current = !1)) : p.current ? oe >= Fg ? (X = "partial", S = ve < 0.12 ? "Imagen borrosa - acerque o enfoque" : "Alinee el DNI con el recuadro") : p.current = !1 : oe > w7 ? (p.current = !0, X = "partial", S = ve < 0.12 ? "Imagen borrosa - acerque o enfoque" : "Alinee el DNI con el recuadro") : ve < 0.1 && (S = "Imagen borrosa - mejore la iluminación"), f({ status: X, sharpness: ve, alignment: oe, message: S }), i.current = requestAnimationFrame(x);
    }
    return i.current = requestAnimationFrame(x), () => {
      i.current && cancelAnimationFrame(i.current);
    };
  }, [t]), { detectionState: u };
}
const k7 = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i, A7 = 768;
function Zg() {
  const t = navigator.userAgent, a = "ontouchstart" in window, i = window.innerWidth <= A7, o = k7.test(t) || a && i, s = window.innerHeight > window.innerWidth;
  return { isMobile: o, isPortrait: s };
}
function ip() {
  const [t, a] = q.useState(Zg);
  return q.useEffect(() => {
    const i = () => a(Zg());
    return window.addEventListener("resize", i), window.addEventListener("orientationchange", i), () => {
      window.removeEventListener("resize", i), window.removeEventListener("orientationchange", i);
    };
  }, []), t;
}
const N7 = {
  none: "border-white/60",
  partial: "border-amber-400",
  ready: "border-green-400"
}, T7 = {
  none: "bg-white/60",
  partial: "bg-amber-400",
  ready: "bg-green-400"
}, j7 = {
  none: { bg: "rgba(0,0,0,0.55)", text: "rgba(255,255,255,0.9)" },
  partial: { bg: "rgba(245,158,11,0.88)", text: "#000" },
  ready: { bg: "rgba(34,197,94,0.88)", text: "#fff" }
}, Kg = 24, Jg = 3, Pg = 75.4;
function _c({ position: t, color: a }) {
  const i = t.startsWith("t"), o = t.endsWith("l");
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      className: "absolute",
      style: {
        top: i ? -1 : void 0,
        bottom: i ? void 0 : -1,
        left: o ? -1 : void 0,
        right: o ? void 0 : -1
      },
      children: [
        /* @__PURE__ */ m.jsx(
          "div",
          {
            className: `absolute transition-colors duration-300 ${a}`,
            style: {
              width: Kg,
              height: Jg,
              top: i ? 0 : void 0,
              bottom: i ? void 0 : 0,
              left: o ? 0 : void 0,
              right: o ? void 0 : 0,
              borderRadius: i && o ? "4px 0 0 0" : i && !o ? "0 4px 0 0" : !i && o ? "0 0 0 4px" : "0 0 4px 0"
            }
          }
        ),
        /* @__PURE__ */ m.jsx(
          "div",
          {
            className: `absolute transition-colors duration-300 ${a}`,
            style: {
              width: Jg,
              height: Kg,
              top: i ? 0 : void 0,
              bottom: i ? void 0 : 0,
              left: o ? 0 : void 0,
              right: o ? void 0 : 0
            }
          }
        )
      ]
    }
  );
}
function Wg({
  status: t,
  message: a,
  guideWidth: i = 0.85,
  holdProgress: o = 0,
  label: s
}) {
  const u = T7[t], f = N7[t], p = j7[t], g = `${(i * 100).toFixed(1)}%`;
  return /* @__PURE__ */ m.jsxs("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: [
    s && /* @__PURE__ */ m.jsx(
      "div",
      {
        className: "absolute z-10 px-4 py-2 rounded-[10px] text-[15px] font-semibold",
        style: {
          top: 64,
          background: "rgba(255,255,255,0.96)",
          color: "#172030",
          boxShadow: "0 4px 16px rgba(0,0,0,0.35)",
          whiteSpace: "nowrap"
        },
        children: s
      }
    ),
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        className: `relative border-2 rounded-xl transition-colors duration-300 overflow-hidden ${f}`,
        style: { width: g, aspectRatio: "1.586" },
        children: [
          /* @__PURE__ */ m.jsx(_c, { position: "tl", color: u }),
          /* @__PURE__ */ m.jsx(_c, { position: "tr", color: u }),
          /* @__PURE__ */ m.jsx(_c, { position: "bl", color: u }),
          /* @__PURE__ */ m.jsx(_c, { position: "br", color: u }),
          t === "partial" && /* @__PURE__ */ m.jsx(
            "div",
            {
              className: "absolute left-0 right-0 h-[2px] pointer-events-none",
              style: {
                background: "linear-gradient(90deg, transparent 0%, #5856d6 50%, transparent 100%)",
                boxShadow: "0 0 8px #5856d6",
                animation: "scanLine 1.2s linear infinite"
              }
            }
          )
        ]
      }
    ),
    t === "ready" && o > 0 && /* @__PURE__ */ m.jsx("div", { className: "absolute bottom-14 left-1/2 -translate-x-1/2", children: /* @__PURE__ */ m.jsxs("svg", { width: "32", height: "32", style: { transform: "rotate(-90deg)" }, children: [
      /* @__PURE__ */ m.jsx("circle", { cx: "16", cy: "16", r: "12", fill: "none", stroke: "rgba(255,255,255,0.25)", strokeWidth: "3" }),
      /* @__PURE__ */ m.jsx(
        "circle",
        {
          cx: "16",
          cy: "16",
          r: "12",
          fill: "none",
          stroke: "#22c55e",
          strokeWidth: "3",
          strokeLinecap: "round",
          strokeDasharray: `${o * Pg} ${Pg}`
        }
      )
    ] }) }),
    /* @__PURE__ */ m.jsx(
      "div",
      {
        className: "absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-300",
        style: {
          background: p.bg,
          color: p.text,
          backdropFilter: "blur(8px)",
          whiteSpace: "nowrap"
        },
        children: a
      }
    ),
    /* @__PURE__ */ m.jsx("div", { className: "absolute inset-0 pointer-events-none", children: /* @__PURE__ */ m.jsx(
      "div",
      {
        className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl",
        style: {
          width: g,
          aspectRatio: "1.586",
          boxShadow: "0 0 0 200vmax rgba(0,0,0,0.45)"
        }
      }
    ) }),
    /* @__PURE__ */ m.jsx("style", { children: `
        @keyframes scanLine {
          0%   { top: 0%; }
          100% { top: 100%; }
        }
      ` })
  ] });
}
function $g(t, a) {
  return Promise.race([
    t,
    new Promise((i) => {
      setTimeout(() => i("timeout"), a);
    })
  ]);
}
async function Ic() {
  try {
    if (!document.fullscreenElement) {
      const t = document.documentElement, a = t.requestFullscreen?.() ?? t.webkitRequestFullscreen?.();
      a && await $g(a, 1500);
    }
  } catch {
  }
  try {
    const t = screen.orientation?.lock?.("portrait-primary");
    t && await $g(t, 1500);
  } catch {
  }
}
function fl() {
  try {
    document.fullscreenElement && document.exitFullscreen?.();
  } catch {
  }
}
function c3() {
  try {
    document.fullscreenElement && document.exitFullscreen?.();
  } catch {
  }
  try {
    screen.orientation?.unlock?.();
  } catch {
  }
}
function Qc(t) {
  const a = t?.srcObject;
  a instanceof MediaStream && a.getTracks().forEach((i) => i.stop());
}
const eb = {
  facingMode: { ideal: "environment" },
  width: { ideal: 1920 },
  height: { ideal: 1080 }
}, z7 = 400, C7 = 1e3, R7 = 15 * 1024 * 1024, O7 = 1600, ch = 0.98;
function M7(t) {
  const a = t.getContext("2d");
  if (!a) return Number.POSITIVE_INFINITY;
  const i = t.width, o = t.height, s = a.getImageData(0, 0, i, o).data, u = new Uint8Array(i * o);
  for (let y = 0, w = 0; y < s.length; y += 4, w++)
    u[w] = s[y] * 0.299 + s[y + 1] * 0.587 + s[y + 2] * 0.114 | 0;
  let f = 0, p = 0, g = 0;
  for (let y = 1; y < o - 1; y++)
    for (let w = 1; w < i - 1; w++) {
      const j = y * i + w, A = -4 * u[j] + u[j - 1] + u[j + 1] + u[j - i] + u[j + i];
      f += A, p += A * A, g++;
    }
  if (g === 0) return Number.POSITIVE_INFINITY;
  const v = f / g;
  return p / g - v * v;
}
const D7 = 30;
function _7(t) {
  return new Promise((a) => {
    const i = new Image();
    i.onload = () => {
      if (i.width >= i.height) {
        a(t);
        return;
      }
      const o = document.createElement("canvas");
      o.width = i.height, o.height = i.width;
      const s = o.getContext("2d");
      s.translate(o.width / 2, o.height / 2), s.rotate(Math.PI / 2), s.drawImage(i, -i.width / 2, -i.height / 2), a(o.toDataURL("image/jpeg", 0.92));
    }, i.onerror = () => a(t), i.src = t;
  });
}
function tb({ side: t, onNext: a, onBack: i }) {
  const o = q.useRef(null), s = q.useRef(null), [u, f] = q.useState("choose"), [p, g] = q.useState(null), [v, y] = q.useState(null), [w, j] = q.useState(!1), A = q.useRef(null), { isMobile: x } = ip(), [N, k] = q.useState(null), [H, P] = q.useState(0), { detectionState: V } = E7(N, H), F = V.status === "ready", W = q.useRef(null), ee = q.useRef(!1), Q = q.useRef(null), Y = q.useRef(null), K = q.useRef(null), [Ie, je] = q.useState(0), [Te, Me] = q.useState(!1), [ve, ke] = q.useState(null), C = q.useRef(null), [I, J] = q.useState(
    () => screen.orientation?.angle ?? 0
  ), [oe, X] = q.useState(0), S = t === "front" ? "Frente del DNI" : "Dorso del DNI", B = t === "front" ? "Encuadrá el frente de tu DNI dentro del recuadro" : "Encuadrá el dorso de tu DNI dentro del recuadro", Z = t === "front" ? "Paso 1 de 4" : "Paso 2 de 4";
  q.useEffect(() => {
    c3();
  }, []), q.useEffect(() => {
    if (u !== "camera" || !x) return;
    Ic();
    const ne = () => {
      const ue = screen.orientation?.angle ?? 0;
      J(ue);
    };
    return window.addEventListener("orientationchange", ne), screen.orientation?.addEventListener?.("change", ne), () => {
      try {
        screen.orientation?.unlock?.();
      } catch {
      }
      fl(), window.removeEventListener("orientationchange", ne), screen.orientation?.removeEventListener?.("change", ne);
    };
  }, [u, x]), q.useEffect(() => {
    if (u !== "camera" || !x) return;
    const ne = () => {
      if (document.fullscreenElement) return;
      const ue = o.current?.video?.srcObject;
      ue instanceof MediaStream && ue.getTracks().forEach((ze) => ze.stop()), k(null), j(!0), A.current !== null && clearTimeout(A.current), A.current = window.setTimeout(() => {
        A.current = null, X((ze) => ze + 1), j(!1), Ic();
      }, 600);
    };
    return document.addEventListener("fullscreenchange", ne), document.addEventListener("webkitfullscreenchange", ne), () => {
      document.removeEventListener("fullscreenchange", ne), document.removeEventListener("webkitfullscreenchange", ne), A.current !== null && (clearTimeout(A.current), A.current = null);
    };
  }, [u, x]), q.useEffect(() => {
    if (u !== "camera") {
      k(null);
      return;
    }
    const ne = setInterval(() => {
      const ue = o.current?.video;
      ue && ue.readyState >= 2 && k((ze) => ze !== ue ? ue : ze);
    }, 100);
    return () => clearInterval(ne);
  }, [u]);
  const $ = q.useCallback(() => {
    if (!o.current) return null;
    const ne = o.current.video;
    if (!ne) return null;
    const ue = ne.videoWidth || 1920, ze = ne.videoHeight || 1080, Ct = s3(ue, ze, ch), Kt = Math.floor(Ct.x * ue), en = Math.floor(Ct.y * ze), Jt = Math.floor(Ct.w * ue), Si = Math.floor(Ct.h * ze), fs = Math.min(1, O7 / Jt), Ei = Math.round(Jt * fs), Bt = Math.round(Si * fs);
    if (Ei <= 0 || Bt <= 0) return null;
    const _r = document.createElement("canvas");
    _r.width = Ei, _r.height = Bt;
    const ql = _r.getContext("2d");
    if (!ql) return null;
    ql.drawImage(ne, Kt, en, Jt, Si, 0, 0, Ei, Bt);
    const Br = document.createElement("canvas"), Ja = 400, hs = Math.max(1, Math.floor(Ja * (Bt / Ei)));
    Br.width = Ja, Br.height = hs;
    const Xl = Br.getContext("2d");
    let ps = Number.POSITIVE_INFINITY;
    return Xl && (Xl.drawImage(_r, 0, 0, Ja, hs), ps = M7(Br)), {
      dataUrl: _r.toDataURL("image/jpeg", 0.9),
      sharpness: ps
    };
  }, []), te = q.useCallback(() => {
    try {
      const ne = new AudioContext(), ue = ne.createOscillator(), ze = ne.createGain();
      ue.connect(ze), ze.connect(ne.destination), ue.frequency.value = 800, ze.gain.value = 0.1, ze.gain.exponentialRampToValueAtTime(1e-3, ne.currentTime + 0.08), ue.start(), ue.stop(ne.currentTime + 0.08);
    } catch {
    }
  }, []), ce = q.useCallback((ne) => {
    const ue = $();
    if (!ue) return !1;
    const { dataUrl: ze, sharpness: Ct } = ue;
    return !ne?.allowBlurry && Ct < D7 ? (ke("Imagen borrosa — mantené la cámara firme"), C.current !== null && clearTimeout(C.current), C.current = window.setTimeout(() => {
      ke(null), C.current = null;
    }, 2200), !1) : (Me(!0), te(), g(ze), ke(null), C.current !== null && (clearTimeout(C.current), C.current = null), K.current !== null && clearTimeout(K.current), K.current = window.setTimeout(() => {
      Me(!1), f("preview");
      const Kt = o.current?.video?.srcObject;
      Kt instanceof MediaStream && Kt.getTracks().forEach((en) => en.stop()), K.current = null;
    }, 300), !0);
  }, [$, te]), Se = q.useCallback(() => {
    Q.current !== null && (clearTimeout(Q.current), Q.current = null);
  }, []), at = q.useCallback(() => {
    Qc(o.current?.video);
  }, []), xe = () => {
    at();
    try {
      screen.orientation?.unlock?.();
    } catch {
    }
    fl(), g(null), f("choose"), y(null), W.current = null, ee.current = !1, je(0), Me(!1), Se(), K.current !== null && (clearTimeout(K.current), K.current = null), A.current !== null && (clearTimeout(A.current), A.current = null), C.current !== null && (clearTimeout(C.current), C.current = null), ke(null), j(!1), P((ne) => ne + 1);
  };
  q.useEffect(() => {
    if (u !== "camera") {
      Y.current = null;
      return;
    }
    Y.current = Date.now(), W.current = null, ee.current = !1, je(0), Me(!1), Se(), K.current !== null && (clearTimeout(K.current), K.current = null), P((ne) => ne + 1);
  }, [u, Se]), q.useEffect(() => {
    if (u !== "camera" || ee.current || w) {
      je(0), Se();
      return;
    }
    if (Y.current && Date.now() - Y.current < 350) {
      W.current = null, je(0), Se();
      return;
    }
    if (!F) {
      W.current = null, je(0), Se();
      return;
    }
    W.current || (W.current = Date.now()), Q.current === null && (Q.current = window.setTimeout(() => {
      if (Q.current = null, u !== "camera" || ee.current) return;
      ce({ allowBlurry: !0 }) && (ee.current = !0);
    }, C7));
    let ue;
    const ze = () => {
      if (!W.current || ee.current) return;
      const Ct = Date.now() - W.current, Kt = Math.min(Ct / z7, 1);
      if (je(Kt), Kt >= 1) {
        ce() ? (ee.current = !0, Se()) : (W.current = null, je(0), Se());
        return;
      }
      ue = requestAnimationFrame(ze);
    };
    return ue = requestAnimationFrame(ze), () => cancelAnimationFrame(ue);
  }, [F, u, w, ce, Se]), q.useEffect(() => () => {
    at();
    try {
      screen.orientation?.unlock?.();
    } catch {
    }
    fl();
  }, [at]);
  const mn = async (ne) => {
    const ue = ne.target.files?.[0];
    if (!ue) return;
    ne.target.value = "";
    const ze = new FileReader();
    ze.onload = async () => {
      let Ct = ze.result;
      if (ue.size > R7)
        try {
          const Kt = await ul(Ct, 1800, 0.85);
          Ct = await new Promise((en) => {
            const Jt = new FileReader();
            Jt.onload = () => en(Jt.result), Jt.readAsDataURL(Kt);
          });
        } catch {
        }
      g(await _7(Ct)), f("preview");
    }, ze.readAsDataURL(ue);
  }, st = I === 90 || I === 270 ? {
    position: "fixed",
    width: "100vh",
    // short dimension in landscape = portrait width
    height: "100vw",
    // long dimension in landscape = portrait height
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%) rotate(${I === 90 ? -90 : I === 270 ? 90 : 0}deg)`,
    transformOrigin: "center center",
    zIndex: 9999,
    background: "#0b0b18",
    display: "flex",
    flexDirection: "column",
    touchAction: "manipulation"
  } : {
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    background: "#0b0b18",
    display: "flex",
    flexDirection: "column",
    touchAction: "manipulation"
  };
  if (u === "preview" && p)
    return /* @__PURE__ */ m.jsxs(xt, { className: "overflow-hidden", children: [
      /* @__PURE__ */ m.jsxs(ra, { children: [
        /* @__PURE__ */ m.jsxs(ia, { className: "flex items-center gap-2", style: { fontFamily: "var(--font-display)" }, children: [
          /* @__PURE__ */ m.jsx("i", { className: "bi bi-credit-card-2-front", style: { color: "var(--color-primary)", fontSize: 18 } }),
          S
        ] }),
        /* @__PURE__ */ m.jsx($c, { children: "Verificá que la imagen sea clara y legible" })
      ] }),
      /* @__PURE__ */ m.jsxs(la, { className: "space-y-4", children: [
        /* @__PURE__ */ m.jsx("div", { className: "rounded-xl overflow-hidden border border-border bg-black", style: { aspectRatio: "1.586 / 1" }, children: /* @__PURE__ */ m.jsx("img", { src: p, alt: S, className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ m.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ m.jsxs(pt, { variant: "secondary", size: "lg", onClick: xe, className: "flex-1", children: [
            /* @__PURE__ */ m.jsx(np, { size: 16, strokeWidth: 1.5 }),
            "Reintentar"
          ] }),
          /* @__PURE__ */ m.jsxs(pt, { size: "lg", onClick: () => a(p), className: "flex-1", children: [
            "Continuar",
            /* @__PURE__ */ m.jsx(pu, { size: 16, strokeWidth: 2 })
          ] })
        ] })
      ] })
    ] });
  if (u === "camera") {
    if (x) {
      const ne = /* @__PURE__ */ m.jsxs("div", { style: st, children: [
        /* @__PURE__ */ m.jsxs(
          "div",
          {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 16px",
              paddingTop: "calc(env(safe-area-inset-top, 0px) + 12px)"
            },
            children: [
              /* @__PURE__ */ m.jsxs(
                "button",
                {
                  onClick: xe,
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    background: "rgba(0,0,0,0.55)",
                    backdropFilter: "blur(6px)",
                    border: "none",
                    color: "#fff",
                    borderRadius: 10,
                    padding: "8px 12px",
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: "pointer"
                  },
                  children: [
                    /* @__PURE__ */ m.jsx(Nh, { size: 16 }),
                    "Cancelar"
                  ]
                }
              ),
              /* @__PURE__ */ m.jsx("div", { style: { background: "#fff", borderRadius: 8, padding: "4px 8px" }, children: /* @__PURE__ */ m.jsx("img", { src: hu, alt: "ATM", style: { height: 22, display: "block" } }) }),
              /* @__PURE__ */ m.jsx(
                "div",
                {
                  style: {
                    background: "rgba(0,0,0,0.55)",
                    backdropFilter: "blur(6px)",
                    borderRadius: 20,
                    padding: "6px 14px",
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 500
                  },
                  children: Z
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ m.jsxs("div", { style: { position: "relative", flex: 1, overflow: "hidden" }, children: [
          v ? /* @__PURE__ */ m.jsxs(
            "div",
            {
              style: {
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
                padding: "0 32px",
                textAlign: "center"
              },
              children: [
                /* @__PURE__ */ m.jsx("i", { className: "bi bi-camera-video-off", style: { fontSize: 48, color: "rgba(255,255,255,0.4)" } }),
                /* @__PURE__ */ m.jsx("p", { style: { color: "rgba(255,255,255,0.65)", fontSize: 15 }, children: v }),
                /* @__PURE__ */ m.jsx(
                  pt,
                  {
                    onClick: () => {
                      y(null), X((ue) => ue + 1);
                    },
                    variant: "ghost",
                    style: { color: "#fff", border: "1px solid rgba(255,255,255,0.3)" },
                    children: "Reintentar cámara"
                  }
                ),
                /* @__PURE__ */ m.jsx(pt, { onClick: xe, variant: "ghost", style: { color: "rgba(255,255,255,0.6)" }, children: "Cancelar" })
              ]
            }
          ) : w ? /* @__PURE__ */ m.jsxs(
            "div",
            {
              style: {
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                color: "rgba(255,255,255,0.75)"
              },
              children: [
                /* @__PURE__ */ m.jsx("i", { className: "bi bi-arrow-repeat", style: {
                  fontSize: 32,
                  opacity: 0.7,
                  animation: "ring-spin 0.8s linear infinite"
                } }),
                /* @__PURE__ */ m.jsx("p", { style: { fontSize: 14, margin: 0 }, children: "Reacomodando cámara..." })
              ]
            }
          ) : /* @__PURE__ */ m.jsx(
            jh,
            {
              ref: o,
              audio: !1,
              screenshotFormat: "image/jpeg",
              screenshotQuality: 1,
              videoConstraints: eb,
              playsInline: !0,
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                pointerEvents: "none"
              },
              onUserMedia: () => {
                y(null);
                const ue = o.current?.video;
                ue && ue.play().catch(() => {
                });
              },
              onUserMediaError: (ue) => {
                const ze = ue instanceof Error ? ue.message : String(ue);
                y("No se pudo acceder a la cámara. " + ze);
              }
            },
            oe
          ),
          !v && !w && /* @__PURE__ */ m.jsx(
            Wg,
            {
              status: V.status,
              message: V.message,
              guideWidth: ch,
              holdProgress: Ie,
              label: S
            }
          ),
          Te && /* @__PURE__ */ m.jsx(
            "div",
            {
              style: {
                position: "absolute",
                inset: 0,
                background: "#fff",
                pointerEvents: "none",
                zIndex: 20,
                animation: "capture-flash 300ms ease-out forwards"
              }
            }
          ),
          ve && /* @__PURE__ */ m.jsx(
            "div",
            {
              style: {
                position: "absolute",
                left: "50%",
                bottom: 20,
                zIndex: 25,
                transform: "translateX(-50%)",
                background: "rgba(216, 60, 60, 0.92)",
                color: "#fff",
                padding: "10px 16px",
                borderRadius: 12,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.01em",
                boxShadow: "0 4px 16px rgba(0,0,0,0.35)",
                pointerEvents: "none",
                animation: "capture-warning-fade 2200ms ease-out forwards"
              },
              children: ve
            }
          )
        ] }),
        /* @__PURE__ */ m.jsxs(
          "div",
          {
            style: {
              zIndex: 10,
              background: "#0b0b18",
              padding: "10px 16px",
              paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10
            },
            children: [
              /* @__PURE__ */ m.jsxs(
                "button",
                {
                  onClick: () => {
                    ce({ allowBlurry: !0 });
                  },
                  disabled: w || !!v,
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    background: "rgba(88,86,214,0.9)",
                    color: "#fff",
                    border: "none",
                    borderRadius: 18,
                    padding: "8px 14px",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    opacity: w || v ? 0.4 : 1
                  },
                  children: [
                    /* @__PURE__ */ m.jsx("i", { className: "bi bi-camera-fill", style: { fontSize: 14 } }),
                    "Capturar"
                  ]
                }
              ),
              /* @__PURE__ */ m.jsx("p", { style: { color: "rgba(255,255,255,0.35)", fontSize: 12, margin: 0 }, children: "o esperá la automática" })
            ]
          }
        )
      ] });
      return o3.createPortal(ne, document.body);
    }
    return /* @__PURE__ */ m.jsxs(xt, { className: "overflow-hidden", children: [
      /* @__PURE__ */ m.jsx(ra, { className: "py-2 px-4 sm:py-4 sm:px-6", children: /* @__PURE__ */ m.jsxs(ia, { className: "flex items-center gap-2 text-base sm:text-lg", style: { fontFamily: "var(--font-display)" }, children: [
        /* @__PURE__ */ m.jsx("i", { className: "bi bi-credit-card-2-front", style: { color: "var(--color-primary)", fontSize: 18 } }),
        S
      ] }) }),
      /* @__PURE__ */ m.jsxs(la, { className: "p-2 sm:p-6 space-y-2 sm:space-y-4", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "relative rounded-xl overflow-hidden bg-black", children: [
          /* @__PURE__ */ m.jsx(
            jh,
            {
              ref: o,
              audio: !1,
              screenshotFormat: "image/jpeg",
              screenshotQuality: 1,
              videoConstraints: eb,
              className: "w-full",
              onUserMedia: () => y(null),
              onUserMediaError: (ne) => {
                const ue = ne instanceof Error ? ne.message : String(ne);
                y("No se pudo acceder a la cámara. " + ue);
              }
            }
          ),
          v && /* @__PURE__ */ m.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/80 text-white text-center px-6", children: [
            /* @__PURE__ */ m.jsx("i", { className: "bi bi-camera-video-off", style: { fontSize: 36, opacity: 0.5 } }),
            /* @__PURE__ */ m.jsx("p", { className: "text-[14px] opacity-70", children: v })
          ] }),
          !v && /* @__PURE__ */ m.jsx(
            Wg,
            {
              status: V.status,
              message: V.message,
              guideWidth: ch,
              holdProgress: Ie,
              label: S
            }
          ),
          Te && /* @__PURE__ */ m.jsx(
            "div",
            {
              className: "absolute inset-0 bg-white pointer-events-none z-20",
              style: { animation: "capture-flash 300ms ease-out forwards" }
            }
          )
        ] }),
        /* @__PURE__ */ m.jsxs(pt, { variant: "outline", size: "lg", onClick: xe, className: "w-full", children: [
          /* @__PURE__ */ m.jsx(Nh, { size: 16, strokeWidth: 2 }),
          "Cancelar"
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ m.jsxs(xt, { children: [
    /* @__PURE__ */ m.jsxs(ra, { className: "text-center pt-5 pb-4", children: [
      /* @__PURE__ */ m.jsxs(
        "p",
        {
          className: "text-[12px] font-medium uppercase tracking-[0.2em] flex items-center justify-center gap-1.5 mb-2",
          style: { color: "var(--color-primary)", fontFamily: "var(--font-body)" },
          children: [
            /* @__PURE__ */ m.jsx("span", { className: "inline-block w-2.5 h-px", style: { background: "var(--color-primary)" } }),
            Z
          ]
        }
      ),
      /* @__PURE__ */ m.jsx(
        ia,
        {
          className: "text-[24px] lg:text-[26px] font-extrabold tracking-tight",
          style: { fontFamily: "var(--font-display)" },
          children: S
        }
      ),
      /* @__PURE__ */ m.jsx($c, { className: "font-light", children: B })
    ] }),
    /* @__PURE__ */ m.jsxs(la, { className: "space-y-2 px-7 pb-5", children: [
      /* @__PURE__ */ m.jsxs(
        pt,
        {
          size: "lg",
          className: "w-full",
          onClick: async () => {
            await Ic(), f("camera");
          },
          children: [
            /* @__PURE__ */ m.jsx("i", { className: "bi bi-camera", style: { fontSize: 16 } }),
            "Tomar foto"
          ]
        }
      ),
      /* @__PURE__ */ m.jsxs(
        pt,
        {
          variant: "outline",
          size: "lg",
          className: "w-full",
          onClick: () => s.current?.click(),
          children: [
            /* @__PURE__ */ m.jsx(K6, { size: 16, strokeWidth: 1.5 }),
            "Elegir de galería"
          ]
        }
      ),
      /* @__PURE__ */ m.jsx(
        "input",
        {
          ref: s,
          type: "file",
          accept: "image/*",
          onChange: mn,
          className: "hidden"
        }
      ),
      i && /* @__PURE__ */ m.jsx(pt, { variant: "ghost", size: "lg", className: "w-full", onClick: i, children: "Volver" })
    ] })
  ] });
}
var bl = typeof self < "u" ? self : {};
function Zo(t, a) {
  e: {
    for (var i = ["CLOSURE_FLAGS"], o = bl, s = 0; s < i.length; s++) if ((o = o[i[s]]) == null) {
      i = null;
      break e;
    }
    i = o;
  }
  return (t = i && i[t]) != null ? t : a;
}
function ni() {
  throw Error("Invalid UTF8");
}
function nb(t, a) {
  return a = String.fromCharCode.apply(null, a), t == null ? a : t + a;
}
let Bc, uh;
const B7 = typeof TextDecoder < "u";
let L7;
const U7 = typeof TextEncoder < "u";
function u3(t) {
  if (U7) t = (L7 ||= new TextEncoder()).encode(t);
  else {
    let i = 0;
    const o = new Uint8Array(3 * t.length);
    for (let s = 0; s < t.length; s++) {
      var a = t.charCodeAt(s);
      if (a < 128) o[i++] = a;
      else {
        if (a < 2048) o[i++] = a >> 6 | 192;
        else {
          if (a >= 55296 && a <= 57343) {
            if (a <= 56319 && s < t.length) {
              const u = t.charCodeAt(++s);
              if (u >= 56320 && u <= 57343) {
                a = 1024 * (a - 55296) + u - 56320 + 65536, o[i++] = a >> 18 | 240, o[i++] = a >> 12 & 63 | 128, o[i++] = a >> 6 & 63 | 128, o[i++] = 63 & a | 128;
                continue;
              }
              s--;
            }
            a = 65533;
          }
          o[i++] = a >> 12 | 224, o[i++] = a >> 6 & 63 | 128;
        }
        o[i++] = 63 & a | 128;
      }
    }
    t = i === o.length ? o : o.subarray(0, i);
  }
  return t;
}
function d3(t) {
  bl.setTimeout((() => {
    throw t;
  }), 0);
}
var Ch, H7 = Zo(610401301, !1), ab = Zo(748402147, !0), lp = Zo(824648567, !0), op = Zo(824656860, Zo(1, !0));
function rb() {
  var t = bl.navigator;
  return t && (t = t.userAgent) ? t : "";
}
const ib = bl.navigator;
function mu(t) {
  return mu[" "](t), t;
}
Ch = ib && ib.userAgentData || null, mu[" "] = function() {
};
const f3 = {};
let Xo = null;
function G7(t) {
  const a = t.length;
  let i = 3 * a / 4;
  i % 3 ? i = Math.floor(i) : "=.".indexOf(t[a - 1]) != -1 && (i = "=.".indexOf(t[a - 2]) != -1 ? i - 2 : i - 1);
  const o = new Uint8Array(i);
  let s = 0;
  return (function(u, f) {
    function p(v) {
      for (; g < u.length; ) {
        const y = u.charAt(g++), w = Xo[y];
        if (w != null) return w;
        if (!/^[\s\xa0]*$/.test(y)) throw Error("Unknown base64 encoding at char: " + y);
      }
      return v;
    }
    h3();
    let g = 0;
    for (; ; ) {
      const v = p(-1), y = p(0), w = p(64), j = p(64);
      if (j === 64 && v === -1) break;
      f(v << 2 | y >> 4), w != 64 && (f(y << 4 & 240 | w >> 2), j != 64 && f(w << 6 & 192 | j));
    }
  })(t, (function(u) {
    o[s++] = u;
  })), s !== i ? o.subarray(0, s) : o;
}
function h3() {
  if (!Xo) {
    Xo = {};
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), a = ["+/=", "+/", "-_=", "-_.", "-_"];
    for (let i = 0; i < 5; i++) {
      const o = t.concat(a[i].split(""));
      f3[i] = o;
      for (let s = 0; s < o.length; s++) {
        const u = o[s];
        Xo[u] === void 0 && (Xo[u] = s);
      }
    }
  }
}
var Y7 = typeof Uint8Array < "u", p3 = !(!(H7 && Ch && Ch.brands.length > 0) && (rb().indexOf("Trident") != -1 || rb().indexOf("MSIE") != -1)) && typeof btoa == "function";
const lb = /[-_.]/g, q7 = { "-": "+", _: "/", ".": "=" };
function X7(t) {
  return q7[t] || "";
}
function m3(t) {
  if (!p3) return G7(t);
  t = lb.test(t) ? t.replace(lb, X7) : t, t = atob(t);
  const a = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++) a[i] = t.charCodeAt(i);
  return a;
}
function sp(t) {
  return Y7 && t != null && t instanceof Uint8Array;
}
var vl = {};
function pi() {
  return V7 ||= new ya(null, vl);
}
function cp(t) {
  g3(vl);
  var a = t.g;
  return (a = a == null || sp(a) ? a : typeof a == "string" ? m3(a) : null) == null ? a : t.g = a;
}
var ya = class {
  h() {
    return new Uint8Array(cp(this) || 0);
  }
  constructor(t, a) {
    if (g3(a), this.g = t, t != null && t.length === 0) throw Error("ByteString should be constructed with non-empty values");
  }
};
let V7, I7;
function g3(t) {
  if (t !== vl) throw Error("illegal external caller");
}
function b3(t, a) {
  t.__closure__error__context__984382 || (t.__closure__error__context__984382 = {}), t.__closure__error__context__984382.severity = a;
}
function Rh(t) {
  return b3(t = Error(t), "warning"), t;
}
function yl(t, a) {
  if (t != null) {
    var i = I7 ??= {}, o = i[t] || 0;
    o >= a || (i[t] = o + 1, b3(t = Error(), "incident"), d3(t));
  }
}
function Cl() {
  return typeof BigInt == "function";
}
var Rl = typeof Symbol == "function" && typeof /* @__PURE__ */ Symbol() == "symbol";
function xa(t, a, i = !1) {
  return typeof Symbol == "function" && typeof /* @__PURE__ */ Symbol() == "symbol" ? i && Symbol.for && t ? Symbol.for(t) : t != null ? Symbol(t) : /* @__PURE__ */ Symbol() : a;
}
var Q7 = xa("jas", void 0, !0), ob = xa(void 0, "0di"), Yo = xa(void 0, "1oa"), zn = xa(void 0, /* @__PURE__ */ Symbol()), F7 = xa(void 0, "0ub"), Z7 = xa(void 0, "0ubs"), Oh = xa(void 0, "0ubsb"), K7 = xa(void 0, "0actk"), xl = xa("m_m", "Pa", !0), sb = xa();
const v3 = { Ga: { value: 0, configurable: !0, writable: !0, enumerable: !1 } }, y3 = Object.defineProperties, de = Rl ? Q7 : "Ga";
var yi;
const cb = [];
function rs(t, a) {
  Rl || de in t || y3(t, v3), t[de] |= a;
}
function _t(t, a) {
  Rl || de in t || y3(t, v3), t[de] = a;
}
function is(t) {
  return rs(t, 34), t;
}
function Ko(t) {
  return rs(t, 8192), t;
}
_t(cb, 7), yi = Object.freeze(cb);
var wl = {};
function Rn(t, a) {
  return a === void 0 ? t.h !== mi && !!(2 & (0 | t.v[de])) : !!(2 & a) && t.h !== mi;
}
const mi = {};
function up(t, a) {
  if (t != null) {
    if (typeof t == "string") t = t ? new ya(t, vl) : pi();
    else if (t.constructor !== ya) if (sp(t)) t = t.length ? new ya(new Uint8Array(t), vl) : pi();
    else {
      if (!a) throw Error();
      t = void 0;
    }
  }
  return t;
}
class ub {
  constructor(a, i, o) {
    this.g = a, this.h = i, this.l = o;
  }
  next() {
    const a = this.g.next();
    return a.done || (a.value = this.h.call(this.l, a.value)), a;
  }
  [Symbol.iterator]() {
    return this;
  }
}
var J7 = Object.freeze({});
function x3(t, a, i) {
  const o = 128 & a ? 0 : -1, s = t.length;
  var u;
  (u = !!s) && (u = (u = t[s - 1]) != null && typeof u == "object" && u.constructor === Object);
  const f = s + (u ? -1 : 0);
  for (a = 128 & a ? 1 : 0; a < f; a++) i(a - o, t[a]);
  if (u) {
    t = t[s - 1];
    for (const p in t) !isNaN(p) && i(+p, t[p]);
  }
}
var w3 = {};
function Ol(t) {
  return 128 & t ? w3 : void 0;
}
function gu(t) {
  return t.Na = !0, t;
}
var P7 = gu(((t) => typeof t == "number")), db = gu(((t) => typeof t == "string")), W7 = gu(((t) => typeof t == "boolean")), bu = typeof bl.BigInt == "function" && typeof bl.BigInt(0) == "bigint";
function Cn(t) {
  var a = t;
  if (db(a)) {
    if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(a)) throw Error(String(a));
  } else if (P7(a) && !Number.isSafeInteger(a)) throw Error(String(a));
  return bu ? BigInt(t) : t = W7(t) ? t ? "1" : "0" : db(t) ? t.trim() || "0" : String(t);
}
var Mh = gu(((t) => bu ? t >= e9 && t <= n9 : t[0] === "-" ? fb(t, $7) : fb(t, t9)));
const $7 = Number.MIN_SAFE_INTEGER.toString(), e9 = bu ? BigInt(Number.MIN_SAFE_INTEGER) : void 0, t9 = Number.MAX_SAFE_INTEGER.toString(), n9 = bu ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;
function fb(t, a) {
  if (t.length > a.length) return !1;
  if (t.length < a.length || t === a) return !0;
  for (let i = 0; i < t.length; i++) {
    const o = t[i], s = a[i];
    if (o > s) return !1;
    if (o < s) return !0;
  }
}
const a9 = typeof Uint8Array.prototype.slice == "function";
let r9, ut = 0, Tt = 0;
function hb(t) {
  const a = t >>> 0;
  ut = a, Tt = (t - a) / 4294967296 >>> 0;
}
function Sl(t) {
  if (t < 0) {
    hb(-t);
    const [a, i] = pp(ut, Tt);
    ut = a >>> 0, Tt = i >>> 0;
  } else hb(t);
}
function dp(t) {
  const a = r9 ||= new DataView(new ArrayBuffer(8));
  a.setFloat32(0, +t, !0), Tt = 0, ut = a.getUint32(0, !0);
}
function Dh(t, a) {
  const i = 4294967296 * a + (t >>> 0);
  return Number.isSafeInteger(i) ? i : Jo(t, a);
}
function i9(t, a) {
  return Cn(Cl() ? BigInt.asUintN(64, (BigInt(a >>> 0) << BigInt(32)) + BigInt(t >>> 0)) : Jo(t, a));
}
function fp(t, a) {
  const i = 2147483648 & a;
  return i && (a = ~a >>> 0, (t = 1 + ~t >>> 0) == 0 && (a = a + 1 >>> 0)), typeof (t = Dh(t, a)) == "number" ? i ? -t : t : i ? "-" + t : t;
}
function S3(t, a) {
  return Cl() ? Cn(BigInt.asIntN(64, (BigInt.asUintN(32, BigInt(a)) << BigInt(32)) + BigInt.asUintN(32, BigInt(t)))) : Cn(hp(t, a));
}
function Jo(t, a) {
  if (t >>>= 0, (a >>>= 0) <= 2097151) var i = "" + (4294967296 * a + t);
  else Cl() ? i = "" + (BigInt(a) << BigInt(32) | BigInt(t)) : (t = (16777215 & t) + 6777216 * (i = 16777215 & (t >>> 24 | a << 8)) + 6710656 * (a = a >> 16 & 65535), i += 8147497 * a, a *= 2, t >= 1e7 && (i += t / 1e7 >>> 0, t %= 1e7), i >= 1e7 && (a += i / 1e7 >>> 0, i %= 1e7), i = a + pb(i) + pb(t));
  return i;
}
function pb(t) {
  return t = String(t), "0000000".slice(t.length) + t;
}
function hp(t, a) {
  if (2147483648 & a) if (Cl()) t = "" + (BigInt(0 | a) << BigInt(32) | BigInt(t >>> 0));
  else {
    const [i, o] = pp(t, a);
    t = "-" + Jo(i, o);
  }
  else t = Jo(t, a);
  return t;
}
function vu(t) {
  if (t.length < 16) Sl(Number(t));
  else if (Cl()) t = BigInt(t), ut = Number(t & BigInt(4294967295)) >>> 0, Tt = Number(t >> BigInt(32) & BigInt(4294967295));
  else {
    const a = +(t[0] === "-");
    Tt = ut = 0;
    const i = t.length;
    for (let o = a, s = (i - a) % 6 + a; s <= i; o = s, s += 6) {
      const u = Number(t.slice(o, s));
      Tt *= 1e6, ut = 1e6 * ut + u, ut >= 4294967296 && (Tt += Math.trunc(ut / 4294967296), Tt >>>= 0, ut >>>= 0);
    }
    if (a) {
      const [o, s] = pp(ut, Tt);
      ut = o, Tt = s;
    }
  }
}
function pp(t, a) {
  return a = ~a, t ? t = 1 + ~t : a += 1, [t, a];
}
function oa(t) {
  return Array.prototype.slice.call(t);
}
const ls = typeof BigInt == "function" ? BigInt.asIntN : void 0, l9 = typeof BigInt == "function" ? BigInt.asUintN : void 0, gi = Number.isSafeInteger, yu = Number.isFinite, El = Math.trunc, o9 = Cn(0);
function Vo(t) {
  if (t != null && typeof t != "number") throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);
  return t;
}
function va(t) {
  return t == null || typeof t == "number" ? t : t === "NaN" || t === "Infinity" || t === "-Infinity" ? Number(t) : void 0;
}
function Po(t) {
  if (t != null && typeof t != "boolean") {
    var a = typeof t;
    throw Error(`Expected boolean but got ${a != "object" ? a : t ? Array.isArray(t) ? "array" : a : "null"}: ${t}`);
  }
  return t;
}
function E3(t) {
  return t == null || typeof t == "boolean" ? t : typeof t == "number" ? !!t : void 0;
}
const s9 = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function os(t) {
  switch (typeof t) {
    case "bigint":
      return !0;
    case "number":
      return yu(t);
    case "string":
      return s9.test(t);
    default:
      return !1;
  }
}
function Ml(t) {
  if (t == null) return t;
  if (typeof t == "string" && t) t = +t;
  else if (typeof t != "number") return;
  return yu(t) ? 0 | t : void 0;
}
function k3(t) {
  if (t == null) return t;
  if (typeof t == "string" && t) t = +t;
  else if (typeof t != "number") return;
  return yu(t) ? t >>> 0 : void 0;
}
function A3(t) {
  const a = t.length;
  return (t[0] === "-" ? a < 20 || a === 20 && t <= "-9223372036854775808" : a < 19 || a === 19 && t <= "9223372036854775807") ? t : (vu(t), hp(ut, Tt));
}
function mp(t) {
  return t = El(t), gi(t) || (Sl(t), t = fp(ut, Tt)), t;
}
function N3(t) {
  var a = El(Number(t));
  return gi(a) ? String(a) : ((a = t.indexOf(".")) !== -1 && (t = t.substring(0, a)), A3(t));
}
function T3(t) {
  var a = El(Number(t));
  return gi(a) ? Cn(a) : ((a = t.indexOf(".")) !== -1 && (t = t.substring(0, a)), Cl() ? Cn(ls(64, BigInt(t))) : Cn(A3(t)));
}
function j3(t) {
  return gi(t) ? t = Cn(mp(t)) : (t = El(t), gi(t) ? t = String(t) : (Sl(t), t = hp(ut, Tt)), t = Cn(t)), t;
}
function c9(t) {
  return t == null ? t : typeof t == "bigint" ? (Mh(t) ? t = Number(t) : (t = ls(64, t), t = Mh(t) ? Number(t) : String(t)), t) : os(t) ? typeof t == "number" ? mp(t) : N3(t) : void 0;
}
function eu(t) {
  const a = typeof t;
  return t == null ? t : a === "bigint" ? Cn(ls(64, t)) : os(t) ? a === "string" ? T3(t) : j3(t) : void 0;
}
function z3(t) {
  if (typeof t != "string") throw Error();
  return t;
}
function ss(t) {
  if (t != null && typeof t != "string") throw Error();
  return t;
}
function Zt(t) {
  return t == null || typeof t == "string" ? t : void 0;
}
function gp(t, a, i, o) {
  return t != null && t[xl] === wl ? t : Array.isArray(t) ? ((o = (i = 0 | t[de]) | 32 & o | 2 & o) !== i && _t(t, o), new a(t)) : (i ? 2 & o ? ((t = a[ob]) || (is((t = new a()).v), t = a[ob] = t), a = t) : a = new a() : a = void 0, a);
}
function u9(t, a, i) {
  if (a) e: {
    if (!os(a = t)) throw Rh("int64");
    switch (typeof a) {
      case "string":
        a = T3(a);
        break e;
      case "bigint":
        a = Cn(ls(64, a));
        break e;
      default:
        a = j3(a);
    }
  }
  else a = eu(t);
  return (t = a) == null ? i ? o9 : void 0 : t;
}
const d9 = {};
let f9 = (function() {
  try {
    return mu(new class extends Map {
      constructor() {
        super();
      }
    }()), !1;
  } catch {
    return !0;
  }
})();
class dh {
  constructor() {
    this.g = /* @__PURE__ */ new Map();
  }
  get(a) {
    return this.g.get(a);
  }
  set(a, i) {
    return this.g.set(a, i), this.size = this.g.size, this;
  }
  delete(a) {
    return a = this.g.delete(a), this.size = this.g.size, a;
  }
  clear() {
    this.g.clear(), this.size = this.g.size;
  }
  has(a) {
    return this.g.has(a);
  }
  entries() {
    return this.g.entries();
  }
  keys() {
    return this.g.keys();
  }
  values() {
    return this.g.values();
  }
  forEach(a, i) {
    return this.g.forEach(a, i);
  }
  [Symbol.iterator]() {
    return this.entries();
  }
}
const h9 = f9 ? (Object.setPrototypeOf(dh.prototype, Map.prototype), Object.defineProperties(dh.prototype, { size: { value: 0, configurable: !0, enumerable: !0, writable: !0 } }), dh) : class extends Map {
  constructor() {
    super();
  }
};
function mb(t) {
  return t;
}
function fh(t) {
  if (2 & t.J) throw Error("Cannot mutate an immutable Map");
}
var Ia = class extends h9 {
  constructor(t, a, i = mb, o = mb) {
    super(), this.J = 0 | t[de], this.K = a, this.S = i, this.fa = this.K ? p9 : o;
    for (let s = 0; s < t.length; s++) {
      const u = t[s], f = i(u[0], !1, !0);
      let p = u[1];
      a ? p === void 0 && (p = null) : p = o(u[1], !1, !0, void 0, void 0, this.J), super.set(f, p);
    }
  }
  V(t) {
    return Ko(Array.from(super.entries(), t));
  }
  clear() {
    fh(this), super.clear();
  }
  delete(t) {
    return fh(this), super.delete(this.S(t, !0, !1));
  }
  entries() {
    if (this.K) {
      var t = super.keys();
      t = new ub(t, m9, this);
    } else t = super.entries();
    return t;
  }
  values() {
    if (this.K) {
      var t = super.keys();
      t = new ub(t, Ia.prototype.get, this);
    } else t = super.values();
    return t;
  }
  forEach(t, a) {
    this.K ? super.forEach(((i, o, s) => {
      t.call(a, s.get(o), o, s);
    })) : super.forEach(t, a);
  }
  set(t, a) {
    return fh(this), (t = this.S(t, !0, !1)) == null ? this : a == null ? (super.delete(t), this) : super.set(t, this.fa(a, !0, !0, this.K, !1, this.J));
  }
  Ma(t) {
    const a = this.S(t[0], !1, !0);
    t = t[1], t = this.K ? t === void 0 ? null : t : this.fa(t, !1, !0, void 0, !1, this.J), super.set(a, t);
  }
  has(t) {
    return super.has(this.S(t, !1, !1));
  }
  get(t) {
    t = this.S(t, !1, !1);
    const a = super.get(t);
    if (a !== void 0) {
      var i = this.K;
      return i ? ((i = this.fa(a, !1, !0, i, this.ra, this.J)) !== a && super.set(t, i), i) : a;
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
};
function p9(t, a, i, o, s, u) {
  return t = gp(t, o, i, u), s && (t = vp(t)), t;
}
function m9(t) {
  return [t, this.get(t)];
}
let g9;
function gb() {
  return g9 ||= new Ia(is([]), void 0, void 0, void 0, d9);
}
function xu(t) {
  return zn ? t[zn] : void 0;
}
function tu(t, a) {
  for (const i in t) !isNaN(i) && a(t, +i, t[i]);
}
Ia.prototype.toJSON = void 0;
var _h = class {
};
const b9 = { Ka: !0 };
function v9(t, a) {
  a < 100 || yl(Z7, 1);
}
function wu(t, a, i, o) {
  const s = o !== void 0;
  o = !!o;
  var u, f = zn;
  !s && Rl && f && (u = t[f]) && tu(u, v9), f = [];
  var p = t.length;
  let g;
  u = 4294967295;
  let v = !1;
  const y = !!(64 & a), w = y ? 128 & a ? 0 : -1 : void 0;
  1 & a || (g = p && t[p - 1], g != null && typeof g == "object" && g.constructor === Object ? u = --p : g = void 0, !y || 128 & a || s || (v = !0, u = u - w + w)), a = void 0;
  for (var j = 0; j < p; j++) {
    let A = t[j];
    if (A != null && (A = i(A, o)) != null) if (y && j >= u) {
      const x = j - w;
      (a ??= {})[x] = A;
    } else f[j] = A;
  }
  if (g) for (let A in g) {
    if ((p = g[A]) == null || (p = i(p, o)) == null) continue;
    let x;
    j = +A, y && !Number.isNaN(j) && (x = j + w) < u ? f[x] = p : (a ??= {})[A] = p;
  }
  return a && (v ? f.push(a) : f[u] = a), s && zn && (t = xu(t)) && t instanceof _h && (f[zn] = (function(A) {
    const x = new _h();
    return tu(A, ((N, k, H) => {
      x[k] = oa(H);
    })), x.da = A.da, x;
  })(t)), f;
}
function y9(t) {
  return t[0] = Wo(t[0]), t[1] = Wo(t[1]), t;
}
function Wo(t) {
  switch (typeof t) {
    case "number":
      return Number.isFinite(t) ? t : "" + t;
    case "bigint":
      return Mh(t) ? Number(t) : "" + t;
    case "boolean":
      return t ? 1 : 0;
    case "object":
      if (Array.isArray(t)) {
        var a = 0 | t[de];
        return t.length === 0 && 1 & a ? void 0 : wu(t, a, Wo);
      }
      if (t != null && t[xl] === wl) return C3(t);
      if (t instanceof ya) {
        if ((a = t.g) == null) t = "";
        else if (typeof a == "string") t = a;
        else {
          if (p3) {
            for (var i = "", o = 0, s = a.length - 10240; o < s; ) i += String.fromCharCode.apply(null, a.subarray(o, o += 10240));
            i += String.fromCharCode.apply(null, o ? a.subarray(o) : a), a = btoa(i);
          } else {
            i === void 0 && (i = 0), h3(), i = f3[i], o = Array(Math.floor(a.length / 3)), s = i[64] || "";
            let v = 0, y = 0;
            for (; v < a.length - 2; v += 3) {
              var u = a[v], f = a[v + 1], p = a[v + 2], g = i[u >> 2];
              u = i[(3 & u) << 4 | f >> 4], f = i[(15 & f) << 2 | p >> 6], p = i[63 & p], o[y++] = g + u + f + p;
            }
            switch (g = 0, p = s, a.length - v) {
              case 2:
                p = i[(15 & (g = a[v + 1])) << 2] || s;
              case 1:
                a = a[v], o[y] = i[a >> 2] + i[(3 & a) << 4 | g >> 4] + p + s;
            }
            a = o.join("");
          }
          t = t.g = a;
        }
        return t;
      }
      return t instanceof Ia ? t = t.size !== 0 ? t.V(y9) : void 0 : void 0;
  }
  return t;
}
function C3(t) {
  return wu(t = t.v, 0 | t[de], Wo);
}
let x9, w9;
function si(t, a) {
  return R3(t, a[0], a[1]);
}
function R3(t, a, i, o = 0) {
  if (t == null) {
    var s = 32;
    i ? (t = [i], s |= 128) : t = [], a && (s = -16760833 & s | (1023 & a) << 14);
  } else {
    if (!Array.isArray(t)) throw Error("narr");
    if (s = 0 | t[de], ab && 1 & s) throw Error("rfarr");
    if (2048 & s && !(2 & s) && (function() {
      if (ab) throw Error("carr");
      yl(K7, 5);
    })(), 256 & s) throw Error("farr");
    if (64 & s) return (s | o) !== s && _t(t, s | o), t;
    if (i && (s |= 128, i !== t[0])) throw Error("mid");
    e: {
      s |= 64;
      var u = (i = t).length;
      if (u) {
        var f = u - 1;
        const g = i[f];
        if (g != null && typeof g == "object" && g.constructor === Object) {
          if ((f -= a = 128 & s ? 0 : -1) >= 1024) throw Error("pvtlmt");
          for (var p in g) (u = +p) < f && (i[u + a] = g[p], delete g[p]);
          s = -16760833 & s | (1023 & f) << 14;
          break e;
        }
      }
      if (a) {
        if ((p = Math.max(a, u - (128 & s ? 0 : -1))) > 1024) throw Error("spvt");
        s = -16760833 & s | (1023 & p) << 14;
      }
    }
  }
  return _t(t, 64 | s | o), t;
}
function S9(t, a) {
  if (typeof t != "object") return t;
  if (Array.isArray(t)) {
    var i = 0 | t[de];
    return t.length === 0 && 1 & i ? void 0 : bb(t, i, a);
  }
  if (t != null && t[xl] === wl) return vb(t);
  if (t instanceof Ia) {
    if (2 & (a = t.J)) return t;
    if (!t.size) return;
    if (i = is(t.V()), t.K) for (t = 0; t < i.length; t++) {
      const o = i[t];
      let s = o[1];
      s = s == null || typeof s != "object" ? void 0 : s != null && s[xl] === wl ? vb(s) : Array.isArray(s) ? bb(s, 0 | s[de], !!(32 & a)) : void 0, o[1] = s;
    }
    return i;
  }
  return t instanceof ya ? t : void 0;
}
function bb(t, a, i) {
  return 2 & a || (!i || 4096 & a || 16 & a ? t = Dl(t, a, !1, i && !(16 & a)) : (rs(t, 34), 4 & a && Object.freeze(t))), t;
}
function bp(t, a, i) {
  return t = new t.constructor(a), i && (t.h = mi), t.m = mi, t;
}
function vb(t) {
  const a = t.v, i = 0 | a[de];
  return Rn(t, i) ? t : yp(t, a, i) ? bp(t, a) : Dl(a, i);
}
function Dl(t, a, i, o) {
  return o ??= !!(34 & a), t = wu(t, a, S9, o), o = 32, i && (o |= 2), _t(t, a = 16769217 & a | o), t;
}
function vp(t) {
  const a = t.v, i = 0 | a[de];
  return Rn(t, i) ? yp(t, a, i) ? bp(t, a, !0) : new t.constructor(Dl(a, i, !1)) : t;
}
function _l(t) {
  if (t.h !== mi) return !1;
  var a = t.v;
  return rs(a = Dl(a, 0 | a[de]), 2048), t.v = a, t.h = void 0, t.m = void 0, !0;
}
function Bl(t) {
  if (!_l(t) && Rn(t, 0 | t.v[de])) throw Error();
}
function xi(t, a) {
  a === void 0 && (a = 0 | t[de]), 32 & a && !(4096 & a) && _t(t, 4096 | a);
}
function yp(t, a, i) {
  return !!(2 & i) || !(!(32 & i) || 4096 & i) && (_t(a, 2 | i), t.h = mi, !0);
}
const E9 = Cn(0), kr = {};
function lt(t, a, i, o, s) {
  if ((a = Qa(t.v, a, i, s)) !== null || o && t.m !== mi) return a;
}
function Qa(t, a, i, o) {
  if (a === -1) return null;
  const s = a + (i ? 0 : -1), u = t.length - 1;
  let f, p;
  if (!(u < 1 + (i ? 0 : -1))) {
    if (s >= u) if (f = t[u], f != null && typeof f == "object" && f.constructor === Object) i = f[a], p = !0;
    else {
      if (s !== u) return;
      i = f;
    }
    else i = t[s];
    if (o && i != null) {
      if ((o = o(i)) == null) return o;
      if (!Object.is(o, i)) return p ? f[a] = o : t[s] = o, o;
    }
    return i;
  }
}
function We(t, a, i, o) {
  Bl(t), Mt(t = t.v, 0 | t[de], a, i, o);
}
function Mt(t, a, i, o, s) {
  const u = i + (s ? 0 : -1);
  var f = t.length - 1;
  if (f >= 1 + (s ? 0 : -1) && u >= f) {
    const p = t[f];
    if (p != null && typeof p == "object" && p.constructor === Object) return p[i] = o, a;
  }
  return u <= f ? (t[u] = o, a) : (o !== void 0 && (i >= (f = (a ??= 0 | t[de]) >> 14 & 1023 || 536870912) ? o != null && (t[f + (s ? 0 : -1)] = { [i]: o }) : t[u] = o), a);
}
function ii() {
  return J7 === void 0 ? 2 : 4;
}
function li(t, a, i, o, s) {
  let u = t.v, f = 0 | u[de];
  o = Rn(t, f) ? 1 : o, s = !!s || o === 3, o === 2 && _l(t) && (u = t.v, f = 0 | u[de]);
  let p = (t = xp(u, a)) === yi ? 7 : 0 | t[de], g = wp(p, f);
  var v = !(4 & g);
  if (v) {
    4 & g && (t = oa(t), p = 0, g = ui(g, f), f = Mt(u, f, a, t));
    let y = 0, w = 0;
    for (; y < t.length; y++) {
      const j = i(t[y]);
      j != null && (t[w++] = j);
    }
    w < y && (t.length = w), i = -513 & (4 | g), g = i &= -1025, g &= -4097;
  }
  return g !== p && (_t(t, g), 2 & g && Object.freeze(t)), O3(t, g, u, f, a, o, v, s);
}
function O3(t, a, i, o, s, u, f, p) {
  let g = a;
  return u === 1 || u === 4 && (2 & a || !(16 & a) && 32 & o) ? ci(a) || ((a |= !t.length || f && !(4096 & a) || 32 & o && !(4096 & a || 16 & a) ? 2 : 256) !== g && _t(t, a), Object.freeze(t)) : (u === 2 && ci(a) && (t = oa(t), g = 0, a = ui(a, o), o = Mt(i, o, s, t)), ci(a) || (p || (a |= 16), a !== g && _t(t, a))), 2 & a || !(4096 & a || 16 & a) || xi(i, o), t;
}
function xp(t, a, i) {
  return t = Qa(t, a, i), Array.isArray(t) ? t : yi;
}
function wp(t, a) {
  return 2 & a && (t |= 2), 1 | t;
}
function ci(t) {
  return !!(2 & t) && !!(4 & t) || !!(256 & t);
}
function M3(t) {
  return up(t, !0);
}
function D3(t) {
  t = oa(t);
  for (let a = 0; a < t.length; a++) {
    const i = t[a] = oa(t[a]);
    Array.isArray(i[1]) && (i[1] = is(i[1]));
  }
  return Ko(t);
}
function jr(t, a, i, o) {
  Bl(t), Mt(t = t.v, 0 | t[de], a, (o === "0" ? Number(i) === 0 : i === o) ? void 0 : i);
}
function Ll(t, a, i) {
  if (2 & a) throw Error();
  const o = Ol(a);
  let s = xp(t, i, o), u = s === yi ? 7 : 0 | s[de], f = wp(u, a);
  return (2 & f || ci(f) || 16 & f) && (f === u || ci(f) || _t(s, f), s = oa(s), u = 0, f = ui(f, a), Mt(t, a, i, s, o)), f &= -13, f !== u && _t(s, f), s;
}
function hh(t, a) {
  var i = Ny;
  return Ep(Sp(t = t.v), t, void 0, i) === a ? a : -1;
}
function Sp(t) {
  if (Rl) return t[Yo] ?? (t[Yo] = /* @__PURE__ */ new Map());
  if (Yo in t) return t[Yo];
  const a = /* @__PURE__ */ new Map();
  return Object.defineProperty(t, Yo, { value: a }), a;
}
function _3(t, a, i, o, s) {
  const u = Sp(t), f = Ep(u, t, a, i, s);
  return f !== o && (f && (a = Mt(t, a, f, void 0, s)), u.set(i, o)), a;
}
function Ep(t, a, i, o, s) {
  let u = t.get(o);
  if (u != null) return u;
  u = 0;
  for (let f = 0; f < o.length; f++) {
    const p = o[f];
    Qa(a, p, s) != null && (u !== 0 && (i = Mt(a, i, u, void 0, s)), u = p);
  }
  return t.set(o, u), u;
}
function kp(t, a, i) {
  let o = 0 | t[de];
  const s = Ol(o), u = Qa(t, i, s);
  let f;
  if (u != null && u[xl] === wl) {
    if (!Rn(u)) return _l(u), u.v;
    f = u.v;
  } else Array.isArray(u) && (f = u);
  if (f) {
    const p = 0 | f[de];
    2 & p && (f = Dl(f, p));
  }
  return f = si(f, a), f !== u && Mt(t, o, i, f, s), f;
}
function B3(t, a, i, o, s) {
  let u = !1;
  if ((o = Qa(t, o, s, ((f) => {
    const p = gp(f, i, !1, a);
    return u = p !== f && p != null, p;
  }))) != null) return u && !Rn(o) && xi(t, a), o;
}
function Ye(t, a, i, o) {
  let s = t.v, u = 0 | s[de];
  if ((a = B3(s, u, a, i, o)) == null) return a;
  if (u = 0 | s[de], !Rn(t, u)) {
    const f = vp(a);
    f !== a && (_l(t) && (s = t.v, u = 0 | s[de]), u = Mt(s, u, i, a = f, o), xi(s, u));
  }
  return a;
}
function L3(t, a, i, o, s, u, f, p) {
  var g = Rn(t, i);
  u = g ? 1 : u, f = !!f || u === 3, g = p && !g, (u === 2 || g) && _l(t) && (i = 0 | (a = t.v)[de]);
  var v = (t = xp(a, s)) === yi ? 7 : 0 | t[de], y = wp(v, i);
  if (p = !(4 & y)) {
    var w = t, j = i;
    const A = !!(2 & y);
    A && (j |= 2);
    let x = !A, N = !0, k = 0, H = 0;
    for (; k < w.length; k++) {
      const P = gp(w[k], o, !1, j);
      if (P instanceof o) {
        if (!A) {
          const V = Rn(P);
          x &&= !V, N &&= V;
        }
        w[H++] = P;
      }
    }
    H < k && (w.length = H), y |= 4, y = N ? -4097 & y : 4096 | y, y = x ? 8 | y : -9 & y;
  }
  if (y !== v && (_t(t, y), 2 & y && Object.freeze(t)), g && !(8 & y || !t.length && (u === 1 || u === 4 && (2 & y || !(16 & y) && 32 & i)))) {
    for (ci(y) && (t = oa(t), y = ui(y, i), i = Mt(a, i, s, t)), o = t, g = y, v = 0; v < o.length; v++) (w = o[v]) !== (y = vp(w)) && (o[v] = y);
    g |= 8, _t(t, y = g = o.length ? 4096 | g : -4097 & g);
  }
  return O3(t, y, a, i, s, u, p, f);
}
function Fa(t, a, i) {
  const o = t.v;
  return L3(t, o, 0 | o[de], a, i, ii(), !1, !0);
}
function U3(t) {
  return t == null && (t = void 0), t;
}
function be(t, a, i, o, s) {
  return We(t, i, o = U3(o), s), o && !Rn(o) && xi(t.v), t;
}
function Io(t, a, i, o) {
  e: {
    var s = o = U3(o);
    Bl(t);
    const u = t.v;
    let f = 0 | u[de];
    if (s == null) {
      const p = Sp(u);
      if (Ep(p, u, f, i) !== a) break e;
      p.set(i, 0);
    } else f = _3(u, f, i, a);
    Mt(u, f, a, s);
  }
  o && !Rn(o) && xi(t.v);
}
function ui(t, a) {
  return -273 & (2 & a ? 2 | t : -3 & t);
}
function Ap(t, a, i, o) {
  var s = o;
  Bl(t), t = L3(t, o = t.v, 0 | o[de], i, a, 2, !0), s = s ?? new i(), t.push(s), a = i = t === yi ? 7 : 0 | t[de], (s = Rn(s)) ? (i &= -9, t.length === 1 && (i &= -4097)) : i |= 4096, i !== a && _t(t, i), s || xi(o);
}
function Wn(t, a, i) {
  return Ml(lt(t, a, void 0, i));
}
function H3(t) {
  return (op ? lt(t, 2, void 0, void 0, eu) : eu(lt(t, 2))) ?? E9;
}
function yt(t, a) {
  return lt(t, a, void 0, void 0, va) ?? 0;
}
function Za(t, a, i) {
  if (i != null) {
    if (typeof i != "number" || !yu(i)) throw Rh("int32");
    i |= 0;
  }
  We(t, a, i);
}
function me(t, a, i) {
  We(t, a, Vo(i));
}
function On(t, a, i) {
  jr(t, a, ss(i), "");
}
function nu(t, a, i) {
  {
    Bl(t);
    const f = t.v;
    let p = 0 | f[de];
    if (i == null) Mt(f, p, a);
    else {
      var o = t = i === yi ? 7 : 0 | i[de], s = ci(t), u = s || Object.isFrozen(i);
      for (s || (t = 0), u || (i = oa(i), o = 0, t = ui(t, p), u = !1), t |= 5, t |= (4 & t ? 512 & t ? 512 : 1024 & t ? 1024 : 0 : void 0) ?? (op ? 1024 : 0), s = 0; s < i.length; s++) {
        const g = i[s], v = z3(g);
        Object.is(g, v) || (u && (i = oa(i), o = 0, t = ui(t, p), u = !1), i[s] = v);
      }
      t !== o && (u && (i = oa(i), t = ui(t, p)), _t(i, t)), Mt(f, p, a, i);
    }
  }
}
function Su(t, a, i) {
  Bl(t), li(t, a, Zt, 2, !0).push(z3(i));
}
var sl = class {
  constructor(t, a, i) {
    if (this.buffer = t, i && !a) throw Error();
    this.g = a;
  }
};
function Np(t, a) {
  if (typeof t == "string") return new sl(m3(t), a);
  if (Array.isArray(t)) return new sl(new Uint8Array(t), a);
  if (t.constructor === Uint8Array) return new sl(t, !1);
  if (t.constructor === ArrayBuffer) return t = new Uint8Array(t), new sl(t, !1);
  if (t.constructor === ya) return a = cp(t) || new Uint8Array(0), new sl(a, !0, t);
  if (t instanceof Uint8Array) return t = t.constructor === Uint8Array ? t : new Uint8Array(t.buffer, t.byteOffset, t.byteLength), new sl(t, !1);
  throw Error();
}
function kl(t, a) {
  let i, o = 0, s = 0, u = 0;
  const f = t.h;
  let p = t.g;
  do
    i = f[p++], o |= (127 & i) << u, u += 7;
  while (u < 32 && 128 & i);
  if (u > 32) for (s |= (127 & i) >> 4, u = 3; u < 32 && 128 & i; u += 7) i = f[p++], s |= (127 & i) << u;
  if (di(t, p), !(128 & i)) return a(o >>> 0, s >>> 0);
  throw Error();
}
function Tp(t) {
  let a = 0, i = t.g;
  const o = i + 10, s = t.h;
  for (; i < o; ) {
    const u = s[i++];
    if (a |= u, (128 & u) == 0) return di(t, i), !!(127 & a);
  }
  throw Error();
}
function Rr(t) {
  const a = t.h;
  let i = t.g, o = a[i++], s = 127 & o;
  if (128 & o && (o = a[i++], s |= (127 & o) << 7, 128 & o && (o = a[i++], s |= (127 & o) << 14, 128 & o && (o = a[i++], s |= (127 & o) << 21, 128 & o && (o = a[i++], s |= o << 28, 128 & o && 128 & a[i++] && 128 & a[i++] && 128 & a[i++] && 128 & a[i++] && 128 & a[i++]))))) throw Error();
  return di(t, i), s;
}
function Ka(t) {
  return Rr(t) >>> 0;
}
function au(t) {
  var a = t.h;
  const i = t.g;
  var o = a[i], s = a[i + 1];
  const u = a[i + 2];
  return a = a[i + 3], di(t, t.g + 4), t = 2 * ((s = (o << 0 | s << 8 | u << 16 | a << 24) >>> 0) >> 31) + 1, o = s >>> 23 & 255, s &= 8388607, o == 255 ? s ? NaN : t * (1 / 0) : o == 0 ? 1401298464324817e-60 * t * s : t * Math.pow(2, o - 150) * (s + 8388608);
}
function k9(t) {
  return Rr(t);
}
function di(t, a) {
  if (t.g = a, a > t.l) throw Error();
}
function G3(t, a) {
  if (a < 0) throw Error();
  const i = t.g;
  if ((a = i + a) > t.l) throw Error();
  return t.g = a, i;
}
function Y3(t, a) {
  if (a == 0) return pi();
  var i = G3(t, a);
  return t.Y && t.j ? i = t.h.subarray(i, i + a) : (t = t.h, i = i === (a = i + a) ? new Uint8Array(0) : a9 ? t.slice(i, a) : new Uint8Array(t.subarray(i, a))), i.length == 0 ? pi() : new ya(i, vl);
}
var yb = [];
function q3(t, a, i, o) {
  if (ru.length) {
    const s = ru.pop();
    return s.o(o), s.g.init(t, a, i, o), s;
  }
  return new A9(t, a, i, o);
}
function X3(t) {
  t.g.clear(), t.l = -1, t.h = -1, ru.length < 100 && ru.push(t);
}
function V3(t) {
  var a = t.g;
  if (a.g == a.l) return !1;
  t.m = t.g.g;
  var i = Ka(t.g);
  if (a = i >>> 3, !((i &= 7) >= 0 && i <= 5) || a < 1) throw Error();
  return t.l = a, t.h = i, !0;
}
function Fc(t) {
  switch (t.h) {
    case 0:
      t.h != 0 ? Fc(t) : Tp(t.g);
      break;
    case 1:
      di(t = t.g, t.g + 8);
      break;
    case 2:
      if (t.h != 2) Fc(t);
      else {
        var a = Ka(t.g);
        di(t = t.g, t.g + a);
      }
      break;
    case 5:
      di(t = t.g, t.g + 4);
      break;
    case 3:
      for (a = t.l; ; ) {
        if (!V3(t)) throw Error();
        if (t.h == 4) {
          if (t.l != a) throw Error();
          break;
        }
        Fc(t);
      }
      break;
    default:
      throw Error();
  }
}
function cs(t, a, i) {
  const o = t.g.l;
  var s = Ka(t.g);
  let u = (s = t.g.g + s) - o;
  if (u <= 0 && (t.g.l = s, i(a, t, void 0, void 0, void 0), u = s - t.g.g), u) throw Error();
  return t.g.g = s, t.g.l = o, a;
}
function jp(t) {
  var a = Ka(t.g), i = G3(t = t.g, a);
  if (t = t.h, B7) {
    var o, s = t;
    (o = uh) || (o = uh = new TextDecoder("utf-8", { fatal: !0 })), a = i + a, s = i === 0 && a === s.length ? s : s.subarray(i, a);
    try {
      var u = o.decode(s);
    } catch (p) {
      if (Bc === void 0) {
        try {
          o.decode(new Uint8Array([128]));
        } catch {
        }
        try {
          o.decode(new Uint8Array([97])), Bc = !0;
        } catch {
          Bc = !1;
        }
      }
      throw !Bc && (uh = void 0), p;
    }
  } else {
    a = (u = i) + a, i = [];
    let p, g = null;
    for (; u < a; ) {
      var f = t[u++];
      f < 128 ? i.push(f) : f < 224 ? u >= a ? ni() : (p = t[u++], f < 194 || (192 & p) != 128 ? (u--, ni()) : i.push((31 & f) << 6 | 63 & p)) : f < 240 ? u >= a - 1 ? ni() : (p = t[u++], (192 & p) != 128 || f === 224 && p < 160 || f === 237 && p >= 160 || (192 & (o = t[u++])) != 128 ? (u--, ni()) : i.push((15 & f) << 12 | (63 & p) << 6 | 63 & o)) : f <= 244 ? u >= a - 2 ? ni() : (p = t[u++], (192 & p) != 128 || p - 144 + (f << 28) >> 30 != 0 || (192 & (o = t[u++])) != 128 || (192 & (s = t[u++])) != 128 ? (u--, ni()) : (f = (7 & f) << 18 | (63 & p) << 12 | (63 & o) << 6 | 63 & s, f -= 65536, i.push(55296 + (f >> 10 & 1023), 56320 + (1023 & f)))) : ni(), i.length >= 8192 && (g = nb(g, i), i.length = 0);
    }
    u = nb(g, i);
  }
  return u;
}
function I3(t) {
  const a = Ka(t.g);
  return Y3(t.g, a);
}
function Eu(t, a, i) {
  var o = Ka(t.g);
  for (o = t.g.g + o; t.g.g < o; ) i.push(a(t.g));
}
var A9 = class {
  constructor(t, a, i, o) {
    if (yb.length) {
      const s = yb.pop();
      s.init(t, a, i, o), t = s;
    } else t = new class {
      constructor(s, u, f, p) {
        this.h = null, this.j = !1, this.g = this.l = this.m = 0, this.init(s, u, f, p);
      }
      init(s, u, f, { Y: p = !1, ea: g = !1 } = {}) {
        this.Y = p, this.ea = g, s && (s = Np(s, this.ea), this.h = s.buffer, this.j = s.g, this.m = u || 0, this.l = f !== void 0 ? this.m + f : this.h.length, this.g = this.m);
      }
      clear() {
        this.h = null, this.j = !1, this.g = this.l = this.m = 0, this.Y = !1;
      }
    }(t, a, i, o);
    this.g = t, this.m = this.g.g, this.h = this.l = -1, this.o(o);
  }
  o({ ha: t = !1 } = {}) {
    this.ha = t;
  }
}, ru = [];
function xb(t) {
  return t ? /^\d+$/.test(t) ? (vu(t), new Bh(ut, Tt)) : null : N9 ||= new Bh(0, 0);
}
var Bh = class {
  constructor(t, a) {
    this.h = t >>> 0, this.g = a >>> 0;
  }
};
let N9;
function wb(t) {
  return t ? /^-?\d+$/.test(t) ? (vu(t), new Lh(ut, Tt)) : null : T9 ||= new Lh(0, 0);
}
var Lh = class {
  constructor(t, a) {
    this.h = t >>> 0, this.g = a >>> 0;
  }
};
let T9;
function hl(t, a, i) {
  for (; i > 0 || a > 127; ) t.g.push(127 & a | 128), a = (a >>> 7 | i << 25) >>> 0, i >>>= 7;
  t.g.push(a);
}
function Ul(t, a) {
  for (; a > 127; ) t.g.push(127 & a | 128), a >>>= 7;
  t.g.push(a);
}
function ku(t, a) {
  if (a >= 0) Ul(t, a);
  else {
    for (let i = 0; i < 9; i++) t.g.push(127 & a | 128), a >>= 7;
    t.g.push(1);
  }
}
function zp(t) {
  var a = ut;
  t.g.push(a >>> 0 & 255), t.g.push(a >>> 8 & 255), t.g.push(a >>> 16 & 255), t.g.push(a >>> 24 & 255);
}
function Al(t, a) {
  a.length !== 0 && (t.l.push(a), t.h += a.length);
}
function $n(t, a, i) {
  Ul(t.g, 8 * a + i);
}
function Cp(t, a) {
  return $n(t, a, 2), a = t.g.end(), Al(t, a), a.push(t.h), a;
}
function Rp(t, a) {
  var i = a.pop();
  for (i = t.h + t.g.length() - i; i > 127; ) a.push(127 & i | 128), i >>>= 7, t.h++;
  a.push(i), t.h++;
}
function Au(t, a, i) {
  $n(t, a, 2), Ul(t.g, i.length), Al(t, t.g.end()), Al(t, i);
}
function iu(t, a, i, o) {
  i != null && (a = Cp(t, a), o(i, t), Rp(t, a));
}
function wa() {
  const t = class {
    constructor() {
      throw Error();
    }
  };
  return Object.setPrototypeOf(t, t.prototype), t;
}
var Op = wa(), Q3 = wa(), Mp = wa(), Dp = wa(), F3 = wa(), Z3 = wa(), j9 = wa(), Nu = wa(), K3 = wa(), J3 = wa();
function Sa(t, a, i) {
  var o = t.v;
  zn && zn in o && (o = o[zn]) && delete o[a.g], a.h ? a.j(t, a.h, a.g, i, a.l) : a.j(t, a.g, i, a.l);
}
var fe = class {
  constructor(t, a) {
    this.v = R3(t, a, void 0, 2048);
  }
  toJSON() {
    return C3(this);
  }
  j() {
    var t = uS, a = this.v, i = t.g, o = zn;
    if (Rl && o && a[o]?.[i] != null && yl(F7, 3), a = t.g, sb && zn && sb === void 0 && (o = (i = this.v)[zn]) && (o = o.da)) try {
      o(i, a, b9);
    } catch (s) {
      d3(s);
    }
    return t.h ? t.m(this, t.h, t.g, t.l) : t.m(this, t.g, t.defaultValue, t.l);
  }
  clone() {
    const t = this.v, a = 0 | t[de];
    return yp(this, t, a) ? bp(this, t, !0) : new this.constructor(Dl(t, a, !1));
  }
};
fe.prototype[xl] = wl, fe.prototype.toString = function() {
  return this.v.toString();
};
var Hl = class {
  constructor(t, a, i) {
    this.g = t, this.h = a, t = Op, this.l = !!t && i === t || !1;
  }
};
function Tu(t, a) {
  return new Hl(t, a, Op);
}
function P3(t, a, i, o, s) {
  iu(t, i, ty(a, o), s);
}
const z9 = Tu((function(t, a, i, o, s) {
  return t.h === 2 && (cs(t, kp(a, o, i), s), !0);
}), P3), C9 = Tu((function(t, a, i, o, s) {
  return t.h === 2 && (cs(t, kp(a, o, i), s), !0);
}), P3);
var ju = /* @__PURE__ */ Symbol(), zu = /* @__PURE__ */ Symbol(), Uh = /* @__PURE__ */ Symbol(), Sb = /* @__PURE__ */ Symbol(), Eb = /* @__PURE__ */ Symbol();
let W3, $3;
function wi(t, a, i, o) {
  var s = o[t];
  if (s) return s;
  (s = {}).qa = o, s.T = (function(w) {
    switch (typeof w) {
      case "boolean":
        return x9 ||= [0, void 0, !0];
      case "number":
        return w > 0 ? void 0 : w === 0 ? w9 ||= [0, void 0] : [-w, void 0];
      case "string":
        return [0, w];
      case "object":
        return w;
    }
  })(o[0]);
  var u = o[1];
  let f = 1;
  u && u.constructor === Object && (s.ba = u, typeof (u = o[++f]) == "function" && (s.ma = !0, W3 ??= u, $3 ??= o[f + 1], u = o[f += 2]));
  const p = {};
  for (; u && Array.isArray(u) && u.length && typeof u[0] == "number" && u[0] > 0; ) {
    for (var g = 0; g < u.length; g++) p[u[g]] = u;
    u = o[++f];
  }
  for (g = 1; u !== void 0; ) {
    let w;
    typeof u == "number" && (g += u, u = o[++f]);
    var v = void 0;
    if (u instanceof Hl ? w = u : (w = z9, f--), w?.l) {
      u = o[++f], v = o;
      var y = f;
      typeof u == "function" && (u = u(), v[y] = u), v = u;
    }
    for (y = g + 1, typeof (u = o[++f]) == "number" && u < 0 && (y -= u, u = o[++f]); g < y; g++) {
      const j = p[g];
      v ? i(s, g, w, v, j) : a(s, g, w, j);
    }
  }
  return o[t] = s;
}
function ey(t) {
  return Array.isArray(t) ? t[0] instanceof Hl ? t : [C9, t] : [t, void 0];
}
function ty(t, a) {
  return t instanceof fe ? t.v : Array.isArray(t) ? si(t, a) : void 0;
}
function _p(t, a, i, o) {
  const s = i.g;
  t[a] = o ? (u, f, p) => s(u, f, p, o) : s;
}
function Bp(t, a, i, o, s) {
  const u = i.g;
  let f, p;
  t[a] = (g, v, y) => u(g, v, y, p ||= wi(zu, _p, Bp, o).T, f ||= Lp(o), s);
}
function Lp(t) {
  let a = t[Uh];
  if (a != null) return a;
  const i = wi(zu, _p, Bp, t);
  return a = i.ma ? (o, s) => W3(o, s, i) : (o, s) => {
    for (; V3(s) && s.h != 4; ) {
      var u = s.l, f = i[u];
      if (f == null) {
        var p = i.ba;
        p && (p = p[u]) && (p = O9(p)) != null && (f = i[u] = p);
      }
      if (f == null || !f(s, o, u)) {
        if (f = (p = s).m, Fc(p), p.ha) var g = void 0;
        else g = p.g.g - f, p.g.g = f, g = Y3(p.g, g);
        f = void 0, p = o, g && ((f = p[zn] ?? (p[zn] = new _h()))[u] ?? (f[u] = [])).push(g);
      }
    }
    return (o = xu(o)) && (o.da = i.qa[Eb]), !0;
  }, t[Uh] = a, t[Eb] = R9.bind(t), a;
}
function R9(t, a, i, o) {
  var s = this[zu];
  const u = this[Uh], f = si(void 0, s.T), p = xu(t);
  if (p) {
    var g = !1, v = s.ba;
    if (v) {
      if (s = (y, w, j) => {
        if (j.length !== 0) if (v[w]) for (const A of j) {
          y = q3(A);
          try {
            g = !0, u(f, y);
          } finally {
            X3(y);
          }
        }
        else o?.(t, w, j);
      }, a == null) tu(p, s);
      else if (p != null) {
        const y = p[a];
        y && s(p, a, y);
      }
      if (g) {
        let y = 0 | t[de];
        if (2 & y && 2048 & y && !i?.Ka) throw Error();
        const w = Ol(y), j = (A, x) => {
          if (Qa(t, A, w) != null) {
            if (i?.Qa === 1) return;
            throw Error();
          }
          x != null && (y = Mt(t, y, A, x, w)), delete p[A];
        };
        a == null ? x3(f, 0 | f[de], ((A, x) => {
          j(A, x);
        })) : j(a, Qa(f, a, w));
      }
    }
  }
}
function O9(t) {
  const a = (t = ey(t))[0].g;
  if (t = t[1]) {
    const i = Lp(t), o = wi(zu, _p, Bp, t).T;
    return (s, u, f) => a(s, u, f, o, i);
  }
  return a;
}
function Cu(t, a, i) {
  t[a] = i.h;
}
function Ru(t, a, i, o) {
  let s, u;
  const f = i.h;
  t[a] = (p, g, v) => f(p, g, v, u ||= wi(ju, Cu, Ru, o).T, s ||= ny(o));
}
function ny(t) {
  let a = t[Sb];
  if (!a) {
    const i = wi(ju, Cu, Ru, t);
    a = (o, s) => ay(o, s, i), t[Sb] = a;
  }
  return a;
}
function ay(t, a, i) {
  x3(t, 0 | t[de], ((o, s) => {
    if (s != null) {
      var u = (function(f, p) {
        var g = f[p];
        if (g) return g;
        if ((g = f.ba) && (g = g[p])) {
          var v = (g = ey(g))[0].h;
          if (g = g[1]) {
            const y = ny(g), w = wi(ju, Cu, Ru, g).T;
            g = f.ma ? $3(w, y) : (j, A, x) => v(j, A, x, w, y);
          } else g = v;
          return f[p] = g;
        }
      })(i, o);
      u ? u(a, s, o) : o < 500 || yl(Oh, 3);
    }
  })), (t = xu(t)) && tu(t, ((o, s, u) => {
    for (Al(a, a.g.end()), o = 0; o < u.length; o++) Al(a, cp(u[o]) || new Uint8Array(0));
  }));
}
const M9 = Cn(0);
function Gl(t, a) {
  if (Array.isArray(a)) {
    var i = 0 | a[de];
    if (4 & i) return a;
    for (var o = 0, s = 0; o < a.length; o++) {
      const u = t(a[o]);
      u != null && (a[s++] = u);
    }
    return s < o && (a.length = s), (t = -1537 & (5 | i)) !== i && _t(a, t), 2 & t && Object.freeze(a), a;
  }
}
function nn(t, a, i) {
  return new Hl(t, a, i);
}
function Yl(t, a, i) {
  return new Hl(t, a, i);
}
function qt(t, a, i) {
  Mt(t, 0 | t[de], a, i, Ol(0 | t[de]));
}
var D9 = Tu((function(t, a, i, o, s) {
  if (t.h !== 2) return !1;
  if (t = oa(t = cs(t, si([void 0, void 0], o), s)), s = Ol(o = 0 | a[de]), 2 & o) throw Error();
  let u = Qa(a, i, s);
  if (u instanceof Ia) (2 & u.J) != 0 ? (u = u.V(), u.push(t), Mt(a, o, i, u, s)) : u.Ma(t);
  else if (Array.isArray(u)) {
    var f = 0 | u[de];
    8192 & f || _t(u, f |= 8192), 2 & f && (u = D3(u), Mt(a, o, i, u, s)), u.push(t);
  } else Mt(a, o, i, Ko([t]), s);
  return !0;
}), (function(t, a, i, o, s) {
  if (a instanceof Ia) a.forEach(((u, f) => {
    iu(t, i, si([f, u], o), s);
  }));
  else if (Array.isArray(a)) {
    for (let u = 0; u < a.length; u++) {
      const f = a[u];
      Array.isArray(f) && iu(t, i, si(f, o), s);
    }
    Ko(a);
  }
}));
function ry(t, a, i) {
  (a = va(a)) != null && ($n(t, i, 5), t = t.g, dp(a), zp(t));
}
function iy(t, a, i) {
  if (a = (function(o) {
    if (o == null) return o;
    const s = typeof o;
    if (s === "bigint") return String(ls(64, o));
    if (os(o)) {
      if (s === "string") return N3(o);
      if (s === "number") return mp(o);
    }
  })(a), a != null && (typeof a == "string" && wb(a), a != null))
    switch ($n(t, i, 0), typeof a) {
      case "number":
        t = t.g, Sl(a), hl(t, ut, Tt);
        break;
      case "bigint":
        i = BigInt.asUintN(64, a), i = new Lh(Number(i & BigInt(4294967295)), Number(i >> BigInt(32))), hl(t.g, i.h, i.g);
        break;
      default:
        i = wb(a), hl(t.g, i.h, i.g);
    }
}
function ly(t, a, i) {
  (a = Ml(a)) != null && a != null && ($n(t, i, 0), ku(t.g, a));
}
function oy(t, a, i) {
  (a = E3(a)) != null && ($n(t, i, 0), t.g.g.push(a ? 1 : 0));
}
function sy(t, a, i) {
  (a = Zt(a)) != null && Au(t, i, u3(a));
}
function cy(t, a, i, o, s) {
  iu(t, i, ty(a, o), s);
}
function uy(t, a, i) {
  (a = a == null || typeof a == "string" || a instanceof ya ? a : void 0) != null && Au(t, i, Np(a, !0).buffer);
}
function dy(t, a, i) {
  return (t.h === 5 || t.h === 2) && (a = Ll(a, 0 | a[de], i), t.h == 2 ? Eu(t, au, a) : a.push(au(t.g)), !0);
}
var jt = nn((function(t, a, i) {
  return t.h === 5 && (qt(a, i, au(t.g)), !0);
}), ry, Nu), _9 = Yl(dy, (function(t, a, i) {
  if ((a = Gl(va, a)) != null) for (let f = 0; f < a.length; f++) {
    var o = t, s = i, u = a[f];
    u != null && ($n(o, s, 5), o = o.g, dp(u), zp(o));
  }
}), Nu), Up = Yl(dy, (function(t, a, i) {
  if ((a = Gl(va, a)) != null && a.length) {
    $n(t, i, 2), Ul(t.g, 4 * a.length);
    for (let o = 0; o < a.length; o++) i = t.g, dp(a[o]), zp(i);
  }
}), Nu), B9 = nn((function(t, a, i) {
  return t.h === 5 && (qt(a, i, (t = au(t.g)) === 0 ? void 0 : t), !0);
}), ry, Nu), Or = nn((function(t, a, i) {
  return lp ? (t.h !== 0 ? t = !1 : (qt(a, i, kl(t.g, S3)), t = !0), t) : t.h === 0 && (qt(a, i, kl(t.g, fp)), !0);
}), iy, Z3), ph = nn((function(t, a, i) {
  return lp ? (t.h !== 0 ? a = !1 : (qt(a, i, (t = kl(t.g, S3)) === M9 ? void 0 : t), a = !0), a) : t.h === 0 && (qt(a, i, (t = kl(t.g, fp)) === 0 ? void 0 : t), !0);
}), iy, Z3), L9 = nn((function(t, a, i) {
  return lp ? (t.h !== 0 ? t = !1 : (qt(a, i, kl(t.g, i9)), t = !0), t) : t.h === 0 && (qt(a, i, kl(t.g, Dh)), !0);
}), (function(t, a, i) {
  if (a = (function(o) {
    if (o == null) return o;
    var s = typeof o;
    if (s === "bigint") return String(l9(64, o));
    if (os(o)) {
      if (s === "string") return s = El(Number(o)), gi(s) && s >= 0 ? o = String(s) : ((s = o.indexOf(".")) !== -1 && (o = o.substring(0, s)), (s = o[0] !== "-" && ((s = o.length) < 20 || s === 20 && o <= "18446744073709551615")) || (vu(o), o = Jo(ut, Tt))), o;
      if (s === "number") return (o = El(o)) >= 0 && gi(o) || (Sl(o), o = Dh(ut, Tt)), o;
    }
  })(a), a != null && (typeof a == "string" && xb(a), a != null))
    switch ($n(t, i, 0), typeof a) {
      case "number":
        t = t.g, Sl(a), hl(t, ut, Tt);
        break;
      case "bigint":
        i = BigInt.asUintN(64, a), i = new Bh(Number(i & BigInt(4294967295)), Number(i >> BigInt(32))), hl(t.g, i.h, i.g);
        break;
      default:
        i = xb(a), hl(t.g, i.h, i.g);
    }
}), j9), Yt = nn((function(t, a, i) {
  return t.h === 0 && (qt(a, i, Rr(t.g)), !0);
}), ly, Dp), us = Yl((function(t, a, i) {
  return (t.h === 0 || t.h === 2) && (a = Ll(a, 0 | a[de], i), t.h == 2 ? Eu(t, Rr, a) : a.push(Rr(t.g)), !0);
}), (function(t, a, i) {
  if ((a = Gl(Ml, a)) != null && a.length) {
    i = Cp(t, i);
    for (let o = 0; o < a.length; o++) ku(t.g, a[o]);
    Rp(t, i);
  }
}), Dp), dl = nn((function(t, a, i) {
  return t.h === 0 && (qt(a, i, (t = Rr(t.g)) === 0 ? void 0 : t), !0);
}), ly, Dp), wt = nn((function(t, a, i) {
  return t.h === 0 && (qt(a, i, Tp(t.g)), !0);
}), oy, Q3), fi = nn((function(t, a, i) {
  return t.h === 0 && (qt(a, i, (t = Tp(t.g)) === !1 ? void 0 : t), !0);
}), oy, Q3), Wt = Yl((function(t, a, i) {
  return t.h === 2 && (t = jp(t), Ll(a, 0 | a[de], i).push(t), !0);
}), (function(t, a, i) {
  if ((a = Gl(Zt, a)) != null) for (let f = 0; f < a.length; f++) {
    var o = t, s = i, u = a[f];
    u != null && Au(o, s, u3(u));
  }
}), Mp), zr = nn((function(t, a, i) {
  return t.h === 2 && (qt(a, i, (t = jp(t)) === "" ? void 0 : t), !0);
}), sy, Mp), et = nn((function(t, a, i) {
  return t.h === 2 && (qt(a, i, jp(t)), !0);
}), sy, Mp), Gt = (function(t, a, i = Op) {
  return new Hl(t, a, i);
})((function(t, a, i, o, s) {
  return t.h === 2 && (o = si(void 0, o), Ll(a, 0 | a[de], i).push(o), cs(t, o, s), !0);
}), (function(t, a, i, o, s) {
  if (Array.isArray(a)) {
    for (let u = 0; u < a.length; u++) cy(t, a[u], i, o, s);
    1 & (t = 0 | a[de]) || _t(a, 1 | t);
  }
})), vt = Tu((function(t, a, i, o, s, u) {
  if (t.h !== 2) return !1;
  let f = 0 | a[de];
  return _3(a, f, u, i, Ol(f)), cs(t, a = kp(a, o, i), s), !0;
}), cy), fy = nn((function(t, a, i) {
  return t.h === 2 && (qt(a, i, I3(t)), !0);
}), uy, K3), U9 = Yl((function(t, a, i) {
  return (t.h === 0 || t.h === 2) && (a = Ll(a, 0 | a[de], i), t.h == 2 ? Eu(t, Ka, a) : a.push(Ka(t.g)), !0);
}), (function(t, a, i) {
  if ((a = Gl(k3, a)) != null) for (let f = 0; f < a.length; f++) {
    var o = t, s = i, u = a[f];
    u != null && ($n(o, s, 0), Ul(o.g, u));
  }
}), F3), H9 = nn((function(t, a, i) {
  return t.h === 0 && (qt(a, i, (t = Ka(t.g)) === 0 ? void 0 : t), !0);
}), (function(t, a, i) {
  (a = k3(a)) != null && a != null && ($n(t, i, 0), Ul(t.g, a));
}), F3), Mn = nn((function(t, a, i) {
  return t.h === 0 && (qt(a, i, Rr(t.g)), !0);
}), (function(t, a, i) {
  (a = Ml(a)) != null && (a = parseInt(a, 10), $n(t, i, 0), ku(t.g, a));
}), J3);
class G9 {
  constructor(a, i) {
    var o = _n;
    this.g = a, this.h = i, this.m = Ye, this.j = be, this.defaultValue = void 0, this.l = o.Oa != null ? w3 : void 0;
  }
  register() {
    mu(this);
  }
}
function Ea(t, a) {
  return new G9(t, a);
}
function Dr(t, a) {
  return (i, o) => {
    {
      const u = { ea: !0 };
      o && Object.assign(u, o), i = q3(i, void 0, void 0, u);
      try {
        const f = new t(), p = f.v;
        Lp(a)(p, i);
        var s = f;
      } finally {
        X3(i);
      }
    }
    return s;
  };
}
function Ou(t) {
  return function() {
    const a = new class {
      constructor() {
        this.l = [], this.h = 0, this.g = new class {
          constructor() {
            this.g = [];
          }
          length() {
            return this.g.length;
          }
          end() {
            const f = this.g;
            return this.g = [], f;
          }
        }();
      }
    }();
    ay(this.v, a, wi(ju, Cu, Ru, t)), Al(a, a.g.end());
    const i = new Uint8Array(a.h), o = a.l, s = o.length;
    let u = 0;
    for (let f = 0; f < s; f++) {
      const p = o[f];
      i.set(p, u), u += p.length;
    }
    return a.l = [i], i;
  };
}
var kb = class extends fe {
  constructor(t) {
    super(t);
  }
}, Ab = [0, zr, nn((function(t, a, i) {
  return t.h === 2 && (qt(a, i, (t = I3(t)) === pi() ? void 0 : t), !0);
}), (function(t, a, i) {
  if (a != null) {
    if (a instanceof fe) {
      const o = a.Ra;
      return void (o ? (a = o(a), a != null && Au(t, i, Np(a, !0).buffer)) : yl(Oh, 3));
    }
    if (Array.isArray(a)) return void yl(Oh, 3);
  }
  uy(t, a, i);
}), K3)];
let mh, Nb = globalThis.trustedTypes;
function Tb(t) {
  var a;
  return mh === void 0 && (mh = (function() {
    let i = null;
    if (!Nb) return i;
    try {
      const o = (s) => s;
      i = Nb.createPolicy("goog#html", { createHTML: o, createScript: o, createScriptURL: o });
    } catch {
    }
    return i;
  })()), t = (a = mh) ? a.createScriptURL(t) : t, new class {
    constructor(i) {
      this.g = i;
    }
    toString() {
      return this.g + "";
    }
  }(t);
}
function Y9(t, ...a) {
  if (a.length === 0) return Tb(t[0]);
  let i = t[0];
  for (let o = 0; o < a.length; o++) i += encodeURIComponent(a[o]) + t[o + 1];
  return Tb(i);
}
var hy = [0, Yt, Mn, wt, -1, us, Mn, -1, wt], q9 = class extends fe {
  constructor(t) {
    super(t);
  }
}, py = [0, wt, et, wt, Mn, -1, Yl((function(t, a, i) {
  return (t.h === 0 || t.h === 2) && (a = Ll(a, 0 | a[de], i), t.h == 2 ? Eu(t, k9, a) : a.push(Rr(t.g)), !0);
}), (function(t, a, i) {
  if ((a = Gl(Ml, a)) != null && a.length) {
    i = Cp(t, i);
    for (let o = 0; o < a.length; o++) ku(t.g, a[o]);
    Rp(t, i);
  }
}), J3), et, -1, [0, wt, -1], Mn, wt, -1], my = [0, 3, wt, -1, 2, [0, Yt], [0, Mn, wt], [0, et, -1], [0]], gy = [0, et, -2], jb = class extends fe {
  constructor(t) {
    super(t);
  }
}, by = [0], vy = [0, Yt, wt, 1, wt, -4], _n = class extends fe {
  constructor(t) {
    super(t, 2);
  }
}, Dt = {};
Dt[336783863] = [0, et, wt, -1, Yt, [0, [1, 2, 3, 4, 5, 6, 7, 8, 9], vt, by, vt, py, vt, gy, vt, vy, vt, hy, vt, [0, et, -2], vt, [0, et, Mn], vt, my, vt, [0, Mn, -1, wt]], [0, et], wt, [0, [1, 3], [2, 4], vt, [0, us], -1, vt, [0, Wt], -1, Gt, [0, et, -1]], et];
var zb = [0, ph, -1, fi, -3, ph, us, zr, dl, ph, -1, fi, dl, fi, -2, zr];
function ot(t, a) {
  Su(t, 3, a);
}
function Le(t, a) {
  Su(t, 4, a);
}
var pn = class extends fe {
  constructor(t) {
    super(t, 500);
  }
  o(t) {
    return be(this, 0, 7, t);
  }
}, Qo = [-1, {}], Cb = [0, et, 1, Qo], Rb = [0, et, Wt, Qo];
function ea(t, a) {
  Ap(t, 1, pn, a);
}
function dt(t, a) {
  Su(t, 10, a);
}
function Ve(t, a) {
  Su(t, 15, a);
}
var Bn = class extends fe {
  constructor(t) {
    super(t, 500);
  }
  o(t) {
    return be(this, 0, 1001, t);
  }
}, yy = [-500, Gt, [-500, zr, -1, Wt, -3, [-2, Dt, wt], Gt, Ab, dl, -1, Cb, Rb, Gt, [0, zr, fi], zr, zb, dl, Wt, 987, Wt], 4, Gt, [-500, et, -1, [-1, {}], 998, et], Gt, [-500, et, Wt, -1, [-2, {}, wt], 997, Wt, -1], dl, Gt, [-500, et, Wt, Qo, 998, Wt], Wt, dl, Cb, Rb, Gt, [0, zr, -1, Qo], Wt, -2, zb, zr, -1, fi, [0, fi, H9], 978, Qo, Gt, Ab];
Bn.prototype.g = Ou(yy);
var X9 = Dr(Bn, yy), V9 = class extends fe {
  constructor(t) {
    super(t);
  }
}, xy = class extends fe {
  constructor(t) {
    super(t);
  }
  g() {
    return Fa(this, V9, 1);
  }
}, wy = [0, Gt, [0, Yt, jt, et, -1]], Mu = Dr(xy, wy), I9 = class extends fe {
  constructor(t) {
    super(t);
  }
}, Q9 = class extends fe {
  constructor(t) {
    super(t);
  }
}, gh = class extends fe {
  constructor(t) {
    super(t);
  }
  l() {
    return Ye(this, I9, 2);
  }
  g() {
    return Fa(this, Q9, 5);
  }
}, Sy = Dr(class extends fe {
  constructor(t) {
    super(t);
  }
}, [0, Wt, us, Up, [0, Mn, [0, Yt, -3], [0, jt, -3], [0, Yt, -1, [0, Gt, [0, Yt, -2]]], Gt, [0, jt, -1, et, jt]], et, -1, Or, Gt, [0, Yt, jt], Wt, Or]), Ey = class extends fe {
  constructor(t) {
    super(t);
  }
}, pl = Dr(class extends fe {
  constructor(t) {
    super(t);
  }
}, [0, Gt, [0, jt, -4]]), ky = class extends fe {
  constructor(t) {
    super(t);
  }
}, ds = Dr(class extends fe {
  constructor(t) {
    super(t);
  }
}, [0, Gt, [0, jt, -4]]), F9 = class extends fe {
  constructor(t) {
    super(t);
  }
}, Z9 = [0, Yt, -1, Up, Mn], Ay = class extends fe {
  constructor(t) {
    super(t);
  }
};
Ay.prototype.g = Ou([0, jt, -4, Or]);
var K9 = class extends fe {
  constructor(t) {
    super(t);
  }
}, J9 = Dr(class extends fe {
  constructor(t) {
    super(t);
  }
}, [0, Gt, [0, 1, Yt, et, wy], Or]), Ob = class extends fe {
  constructor(t) {
    super(t);
  }
}, P9 = class extends fe {
  constructor(t) {
    super(t);
  }
  na() {
    const t = lt(this, 1, void 0, void 0, M3);
    return t ?? pi();
  }
}, W9 = class extends fe {
  constructor(t) {
    super(t);
  }
}, Ny = [1, 2], $9 = Dr(class extends fe {
  constructor(t) {
    super(t);
  }
}, [0, Gt, [0, Ny, vt, [0, Up], vt, [0, fy], Yt, et], Or]), Hp = class extends fe {
  constructor(t) {
    super(t);
  }
}, Ty = [0, et, Yt, jt, Wt, -1], Mb = class extends fe {
  constructor(t) {
    super(t);
  }
}, eS = [0, wt, -1], Db = class extends fe {
  constructor(t) {
    super(t);
  }
}, Zc = [1, 2, 3, 4, 5, 6], lu = class extends fe {
  constructor(t) {
    super(t);
  }
  g() {
    return lt(this, 1, void 0, void 0, M3) != null;
  }
  l() {
    return Zt(lt(this, 2)) != null;
  }
}, mt = class extends fe {
  constructor(t) {
    super(t);
  }
  g() {
    return E3(lt(this, 2)) ?? !1;
  }
}, jy = [0, fy, et, [0, Yt, Or, -1], [0, L9, Or]], zt = [0, jy, wt, [0, Zc, vt, vy, vt, py, vt, hy, vt, by, vt, gy, vt, my], Mn], Du = class extends fe {
  constructor(t) {
    super(t);
  }
}, Gp = [0, zt, jt, -1, Yt], tS = Ea(502141897, Du);
Dt[502141897] = Gp;
var nS = Dr(class extends fe {
  constructor(t) {
    super(t);
  }
}, [0, [0, Mn, -1, _9, U9], Z9]), zy = class extends fe {
  constructor(t) {
    super(t);
  }
}, Cy = class extends fe {
  constructor(t) {
    super(t);
  }
}, Hh = [0, zt, jt, [0, zt], wt], aS = Ea(508968150, Cy);
Dt[508968150] = [0, zt, Gp, Hh, jt, [0, [0, jy]]], Dt[508968149] = Hh;
var cl = class extends fe {
  constructor(t) {
    super(t);
  }
  l() {
    return Ye(this, Hp, 2);
  }
  g() {
    We(this, 2);
  }
}, Ry = [0, zt, Ty];
Dt[478825465] = Ry;
var rS = class extends fe {
  constructor(t) {
    super(t);
  }
}, Oy = class extends fe {
  constructor(t) {
    super(t);
  }
}, Yp = class extends fe {
  constructor(t) {
    super(t);
  }
}, qp = class extends fe {
  constructor(t) {
    super(t);
  }
}, My = class extends fe {
  constructor(t) {
    super(t);
  }
}, _b = [0, zt, [0, zt], Ry, -1], Dy = [0, zt, jt, Yt], Xp = [0, zt, jt], _y = [0, zt, Dy, Xp, jt], iS = Ea(479097054, My);
Dt[479097054] = [0, zt, _y, _b], Dt[463370452] = _b, Dt[464864288] = Dy;
var lS = Ea(462713202, qp);
Dt[462713202] = _y, Dt[474472470] = Xp;
var oS = class extends fe {
  constructor(t) {
    super(t);
  }
}, By = class extends fe {
  constructor(t) {
    super(t);
  }
}, Ly = class extends fe {
  constructor(t) {
    super(t);
  }
}, Uy = class extends fe {
  constructor(t) {
    super(t);
  }
}, Vp = [0, zt, jt, -1, Yt], Gh = [0, zt, jt, wt];
Uy.prototype.g = Ou([0, zt, Xp, [0, zt], Gp, Hh, Vp, Gh]);
var Hy = class extends fe {
  constructor(t) {
    super(t);
  }
}, sS = Ea(456383383, Hy);
Dt[456383383] = [0, zt, Ty];
var Gy = class extends fe {
  constructor(t) {
    super(t);
  }
}, cS = Ea(476348187, Gy);
Dt[476348187] = [0, zt, eS];
var Yy = class extends fe {
  constructor(t) {
    super(t);
  }
}, Bb = class extends fe {
  constructor(t) {
    super(t);
  }
}, qy = [0, Mn, -1], uS = Ea(458105876, class extends fe {
  constructor(t) {
    super(t);
  }
  g() {
    let t;
    var a = this.v;
    const i = 0 | a[de];
    return t = Rn(this, i), a = (function(o, s, u, f) {
      var p = Bb;
      !f && _l(o) && (u = 0 | (s = o.v)[de]);
      var g = Qa(s, 2);
      if (o = !1, g == null) {
        if (f) return gb();
        g = [];
      } else if (g.constructor === Ia) {
        if (!(2 & g.J) || f) return g;
        g = g.V();
      } else Array.isArray(g) ? o = !!(2 & (0 | g[de])) : g = [];
      if (f) {
        if (!g.length) return gb();
        o || (o = !0, is(g));
      } else o && (o = !1, Ko(g), g = D3(g));
      return !o && 32 & u && rs(g, 32), u = Mt(s, u, 2, f = new Ia(g, p, u9, void 0)), o || xi(s, u), f;
    })(this, a, i, t), !t && Bb && (a.ra = !0), a;
  }
});
Dt[458105876] = [0, qy, D9, [!0, Or, [0, et, -1, Wt]], [0, us, wt, Mn]];
var Ip = class extends fe {
  constructor(t) {
    super(t);
  }
}, Xy = Ea(458105758, Ip);
Dt[458105758] = [0, zt, et, qy];
var bh = class extends fe {
  constructor(t) {
    super(t);
  }
}, Lb = [0, B9, -1, fi], dS = class extends fe {
  constructor(t) {
    super(t);
  }
}, Vy = class extends fe {
  constructor(t) {
    super(t);
  }
}, Yh = [1, 2];
Vy.prototype.g = Ou([0, Yh, vt, Lb, vt, [0, Gt, Lb]]);
var Iy = class extends fe {
  constructor(t) {
    super(t);
  }
}, fS = Ea(443442058, Iy);
Dt[443442058] = [0, zt, et, Yt, jt, Wt, -1, wt, jt], Dt[514774813] = Vp;
var Qy = class extends fe {
  constructor(t) {
    super(t);
  }
}, hS = Ea(516587230, Qy);
function qh(t, a) {
  return a = a ? a.clone() : new Hp(), t.displayNamesLocale !== void 0 ? We(a, 1, ss(t.displayNamesLocale)) : t.displayNamesLocale === void 0 && We(a, 1), t.maxResults !== void 0 ? Za(a, 2, t.maxResults) : "maxResults" in t && We(a, 2), t.scoreThreshold !== void 0 ? me(a, 3, t.scoreThreshold) : "scoreThreshold" in t && We(a, 3), t.categoryAllowlist !== void 0 ? nu(a, 4, t.categoryAllowlist) : "categoryAllowlist" in t && We(a, 4), t.categoryDenylist !== void 0 ? nu(a, 5, t.categoryDenylist) : "categoryDenylist" in t && We(a, 5), a;
}
function Fy(t) {
  const a = Number(t);
  return Number.isSafeInteger(a) ? a : String(t);
}
function Qp(t, a = -1, i = "") {
  return { categories: t.map(((o) => ({ index: Wn(o, 1) ?? 0 ?? -1, score: yt(o, 2) ?? 0, categoryName: Zt(lt(o, 3)) ?? "" ?? "", displayName: Zt(lt(o, 4)) ?? "" ?? "" }))), headIndex: a, headName: i };
}
function pS(t) {
  const a = { classifications: Fa(t, K9, 1).map(((i) => Qp(Ye(i, xy, 4)?.g() ?? [], Wn(i, 2) ?? 0, Zt(lt(i, 3)) ?? ""))) };
  return (function(i) {
    return c9(op ? lt(i, 2, void 0, void 0, eu) : lt(i, 2));
  })(t) != null && (a.timestampMs = Fy(H3(t))), a;
}
function Zy(t) {
  var a = li(t, 3, va, ii()), i = li(t, 2, Ml, ii()), o = li(t, 1, Zt, ii()), s = li(t, 9, Zt, ii());
  const u = { categories: [], keypoints: [] };
  for (let f = 0; f < a.length; f++) u.categories.push({ score: a[f], index: i[f] ?? -1, categoryName: o[f] ?? "", displayName: s[f] ?? "" });
  if ((a = Ye(t, gh, 4)?.l()) && (u.boundingBox = { originX: Wn(a, 1, kr) ?? 0, originY: Wn(a, 2, kr) ?? 0, width: Wn(a, 3, kr) ?? 0, height: Wn(a, 4, kr) ?? 0, angle: 0 }), Ye(t, gh, 4)?.g().length) for (const f of Ye(t, gh, 4).g()) u.keypoints.push({ x: lt(f, 1, void 0, kr, va) ?? 0, y: lt(f, 2, void 0, kr, va) ?? 0, score: lt(f, 4, void 0, kr, va) ?? 0, label: Zt(lt(f, 3, void 0, kr)) ?? "" });
  return u;
}
function _u(t) {
  const a = [];
  for (const i of Fa(t, ky, 1)) a.push({ x: yt(i, 1) ?? 0, y: yt(i, 2) ?? 0, z: yt(i, 3) ?? 0, visibility: yt(i, 4) ?? 0 });
  return a;
}
function Fo(t) {
  const a = [];
  for (const i of Fa(t, Ey, 1)) a.push({ x: yt(i, 1) ?? 0, y: yt(i, 2) ?? 0, z: yt(i, 3) ?? 0, visibility: yt(i, 4) ?? 0 });
  return a;
}
function Ub(t) {
  return Array.from(t, ((a) => a > 127 ? a - 256 : a));
}
function Hb(t, a) {
  if (t.length !== a.length) throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${a.length}).`);
  let i = 0, o = 0, s = 0;
  for (let u = 0; u < t.length; u++) i += t[u] * a[u], o += t[u] * t[u], s += a[u] * a[u];
  if (o <= 0 || s <= 0) throw Error("Cannot compute cosine similarity on embedding with 0 norm.");
  return i / Math.sqrt(o * s);
}
let Lc;
Dt[516587230] = [0, zt, Vp, Gh, jt], Dt[518928384] = Gh;
const mS = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]);
async function Ky() {
  if (Lc === void 0) try {
    await WebAssembly.instantiate(mS), Lc = !0;
  } catch {
    Lc = !1;
  }
  return Lc;
}
async function qo(t, a = Y9``) {
  const i = await Ky() ? "wasm_internal" : "wasm_nosimd_internal";
  return { wasmLoaderPath: `${a}/${t}_${i}.js`, wasmBinaryPath: `${a}/${t}_${i}.wasm` };
}
var ai = class {
};
function Jy() {
  var t = navigator;
  return typeof OffscreenCanvas < "u" && (!(function(a = navigator) {
    return (a = a.userAgent).includes("Safari") && !a.includes("Chrome");
  })(t) || !!((t = t.userAgent.match(/Version\/([\d]+).*Safari/)) && t.length >= 1 && Number(t[1]) >= 17));
}
async function Gb(t) {
  if (typeof importScripts != "function") {
    const a = document.createElement("script");
    return a.src = t.toString(), a.crossOrigin = "anonymous", new Promise(((i, o) => {
      a.addEventListener("load", (() => {
        i();
      }), !1), a.addEventListener("error", ((s) => {
        o(s);
      }), !1), document.body.appendChild(a);
    }));
  }
  try {
    importScripts(t.toString());
  } catch (a) {
    if (!(a instanceof TypeError)) throw a;
    await self.import(t.toString());
  }
}
function Py(t) {
  return t.videoWidth !== void 0 ? [t.videoWidth, t.videoHeight] : t.naturalWidth !== void 0 ? [t.naturalWidth, t.naturalHeight] : t.displayWidth !== void 0 ? [t.displayWidth, t.displayHeight] : [t.width, t.height];
}
function he(t, a, i) {
  t.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"), i(a = t.i.stringToNewUTF8(a)), t.i._free(a);
}
function Yb(t, a, i) {
  if (!t.i.canvas) throw Error("No OpenGL canvas configured.");
  if (i ? t.i._bindTextureToStream(i) : t.i._bindTextureToCanvas(), !(i = t.i.canvas.getContext("webgl2") || t.i.canvas.getContext("webgl"))) throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");
  t.i.gpuOriginForWebTexturesIsBottomLeft && i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, !0), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, a), t.i.gpuOriginForWebTexturesIsBottomLeft && i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, !1);
  const [o, s] = Py(a);
  return !t.l || o === t.i.canvas.width && s === t.i.canvas.height || (t.i.canvas.width = o, t.i.canvas.height = s), [o, s];
}
function qb(t, a, i) {
  t.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");
  const o = new Uint32Array(a.length);
  for (let s = 0; s < a.length; s++) o[s] = t.i.stringToNewUTF8(a[s]);
  a = t.i._malloc(4 * o.length), t.i.HEAPU32.set(o, a >> 2), i(a);
  for (const s of o) t.i._free(s);
  t.i._free(a);
}
function ga(t, a, i) {
  t.i.simpleListeners = t.i.simpleListeners || {}, t.i.simpleListeners[a] = i;
}
function Ar(t, a, i) {
  let o = [];
  t.i.simpleListeners = t.i.simpleListeners || {}, t.i.simpleListeners[a] = (s, u, f) => {
    u ? (i(o, f), o = []) : o.push(s);
  };
}
ai.forVisionTasks = function(t) {
  return qo("vision", t);
}, ai.forTextTasks = function(t) {
  return qo("text", t);
}, ai.forGenAiExperimentalTasks = function(t) {
  return qo("genai_experimental", t);
}, ai.forGenAiTasks = function(t) {
  return qo("genai", t);
}, ai.forAudioTasks = function(t) {
  return qo("audio", t);
}, ai.isSimdSupported = function() {
  return Ky();
};
async function gS(t, a, i, o) {
  return t = await (async (s, u, f, p, g) => {
    if (u && await Gb(u), !self.ModuleFactory || f && (await Gb(f), !self.ModuleFactory)) throw Error("ModuleFactory not set.");
    return self.Module && g && ((u = self.Module).locateFile = g.locateFile, g.mainScriptUrlOrBlob && (u.mainScriptUrlOrBlob = g.mainScriptUrlOrBlob)), g = await self.ModuleFactory(self.Module || g), self.ModuleFactory = self.Module = void 0, new s(g, p);
  })(t, i.wasmLoaderPath, i.assetLoaderPath, a, { locateFile: (s) => s.endsWith(".wasm") ? i.wasmBinaryPath.toString() : i.assetBinaryPath && s.endsWith(".data") ? i.assetBinaryPath.toString() : s }), await t.o(o), t;
}
function vh(t, a) {
  const i = Ye(t.baseOptions, lu, 1) || new lu();
  typeof a == "string" ? (We(i, 2, ss(a)), We(i, 1)) : a instanceof Uint8Array && (We(i, 1, up(a, !1)), We(i, 2)), be(t.baseOptions, 0, 1, i);
}
function Xb(t) {
  try {
    const a = t.H.length;
    if (a === 1) throw Error(t.H[0].message);
    if (a > 1) throw Error("Encountered multiple errors: " + t.H.map(((i) => i.message)).join(", "));
  } finally {
    t.H = [];
  }
}
function ie(t, a) {
  t.C = Math.max(t.C, a);
}
function Bu(t, a) {
  t.B = new pn(), On(t.B, 2, "PassThroughCalculator"), ot(t.B, "free_memory"), Le(t.B, "free_memory_unused_out"), dt(a, "free_memory"), ea(a, t.B);
}
function Nl(t, a) {
  ot(t.B, a), Le(t.B, a + "_unused_out");
}
function Lu(t) {
  t.g.addBoolToStream(!0, "free_memory", t.C);
}
var Xh = class {
  constructor(t) {
    this.g = t, this.H = [], this.C = 0, this.g.setAutoRenderToScreen(!1);
  }
  l(t, a = !0) {
    if (a) {
      const i = t.baseOptions || {};
      if (t.baseOptions?.modelAssetBuffer && t.baseOptions?.modelAssetPath) throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");
      if (!(Ye(this.baseOptions, lu, 1)?.g() || Ye(this.baseOptions, lu, 1)?.l() || t.baseOptions?.modelAssetBuffer || t.baseOptions?.modelAssetPath)) throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");
      if ((function(o, s) {
        let u = Ye(o.baseOptions, Db, 3);
        if (!u) {
          var f = u = new Db(), p = new jb();
          Io(f, 4, Zc, p);
        }
        "delegate" in s && (s.delegate === "GPU" ? (s = u, f = new q9(), Io(s, 2, Zc, f)) : (s = u, f = new jb(), Io(s, 4, Zc, f))), be(o.baseOptions, 0, 3, u);
      })(this, i), i.modelAssetPath) return fetch(i.modelAssetPath.toString()).then(((o) => {
        if (o.ok) return o.arrayBuffer();
        throw Error(`Failed to fetch model: ${i.modelAssetPath} (${o.status})`);
      })).then(((o) => {
        try {
          this.g.i.FS_unlink("/model.dat");
        } catch {
        }
        this.g.i.FS_createDataFile("/", "model.dat", new Uint8Array(o), !0, !1, !1), vh(this, "/model.dat"), this.m(), this.L();
      }));
      if (i.modelAssetBuffer instanceof Uint8Array) vh(this, i.modelAssetBuffer);
      else if (i.modelAssetBuffer) return (async function(o) {
        const s = [];
        for (var u = 0; ; ) {
          const { done: f, value: p } = await o.read();
          if (f) break;
          s.push(p), u += p.length;
        }
        if (s.length === 0) return new Uint8Array(0);
        if (s.length === 1) return s[0];
        o = new Uint8Array(u), u = 0;
        for (const f of s) o.set(f, u), u += f.length;
        return o;
      })(i.modelAssetBuffer).then(((o) => {
        vh(this, o), this.m(), this.L();
      }));
    }
    return this.m(), this.L(), Promise.resolve();
  }
  L() {
  }
  ca() {
    let t;
    if (this.g.ca(((a) => {
      t = X9(a);
    })), !t) throw Error("Failed to retrieve CalculatorGraphConfig");
    return t;
  }
  setGraph(t, a) {
    this.g.attachErrorListener(((i, o) => {
      this.H.push(Error(o));
    })), this.g.Ja(), this.g.setGraph(t, a), this.B = void 0, Xb(this);
  }
  finishProcessing() {
    this.g.finishProcessing(), Xb(this);
  }
  close() {
    this.B = void 0, this.g.closeGraph();
  }
};
function Cr(t, a) {
  if (!t) throw Error(`Unable to obtain required WebGL resource: ${a}`);
  return t;
}
Xh.prototype.close = Xh.prototype.close;
class bS {
  constructor(a, i, o, s) {
    this.g = a, this.h = i, this.m = o, this.l = s;
  }
  bind() {
    this.g.bindVertexArray(this.h);
  }
  close() {
    this.g.deleteVertexArray(this.h), this.g.deleteBuffer(this.m), this.g.deleteBuffer(this.l);
  }
}
function Vb(t, a, i) {
  const o = t.g;
  if (i = Cr(o.createShader(i), "Failed to create WebGL shader"), o.shaderSource(i, a), o.compileShader(i), !o.getShaderParameter(i, o.COMPILE_STATUS)) throw Error(`Could not compile WebGL shader: ${o.getShaderInfoLog(i)}`);
  return o.attachShader(t.h, i), i;
}
function Ib(t, a) {
  const i = t.g, o = Cr(i.createVertexArray(), "Failed to create vertex array");
  i.bindVertexArray(o);
  const s = Cr(i.createBuffer(), "Failed to create buffer");
  i.bindBuffer(i.ARRAY_BUFFER, s), i.enableVertexAttribArray(t.O), i.vertexAttribPointer(t.O, 2, i.FLOAT, !1, 0, 0), i.bufferData(i.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), i.STATIC_DRAW);
  const u = Cr(i.createBuffer(), "Failed to create buffer");
  return i.bindBuffer(i.ARRAY_BUFFER, u), i.enableVertexAttribArray(t.L), i.vertexAttribPointer(t.L, 2, i.FLOAT, !1, 0, 0), i.bufferData(i.ARRAY_BUFFER, new Float32Array(a ? [0, 1, 0, 0, 1, 0, 1, 1] : [0, 0, 0, 1, 1, 1, 1, 0]), i.STATIC_DRAW), i.bindBuffer(i.ARRAY_BUFFER, null), i.bindVertexArray(null), new bS(i, o, s, u);
}
function Fp(t, a) {
  if (t.g) {
    if (a !== t.g) throw Error("Cannot change GL context once initialized");
  } else t.g = a;
}
function vS(t, a, i, o) {
  return Fp(t, a), t.h || (t.m(), t.D()), i ? (t.u || (t.u = Ib(t, !0)), i = t.u) : (t.A || (t.A = Ib(t, !1)), i = t.A), a.useProgram(t.h), i.bind(), t.l(), t = o(), i.g.bindVertexArray(null), t;
}
function Wy(t, a, i) {
  return Fp(t, a), t = Cr(a.createTexture(), "Failed to create texture"), a.bindTexture(a.TEXTURE_2D, t), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, i ?? a.LINEAR), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, i ?? a.LINEAR), a.bindTexture(a.TEXTURE_2D, null), t;
}
function $y(t, a, i) {
  Fp(t, a), t.B || (t.B = Cr(a.createFramebuffer(), "Failed to create framebuffe.")), a.bindFramebuffer(a.FRAMEBUFFER, t.B), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, i, 0);
}
function yS(t) {
  t.g?.bindFramebuffer(t.g.FRAMEBUFFER, null);
}
var e4 = class {
  H() {
    return `
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `;
  }
  m() {
    const t = this.g;
    if (this.h = Cr(t.createProgram(), "Failed to create WebGL program"), this.X = Vb(this, `
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`, t.VERTEX_SHADER), this.W = Vb(this, this.H(), t.FRAGMENT_SHADER), t.linkProgram(this.h), !t.getProgramParameter(this.h, t.LINK_STATUS)) throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);
    this.O = t.getAttribLocation(this.h, "aVertex"), this.L = t.getAttribLocation(this.h, "aTex");
  }
  D() {
  }
  l() {
  }
  close() {
    if (this.h) {
      const t = this.g;
      t.deleteProgram(this.h), t.deleteShader(this.X), t.deleteShader(this.W);
    }
    this.B && this.g.deleteFramebuffer(this.B), this.A && this.A.close(), this.u && this.u.close();
  }
};
function Va(t, a) {
  switch (a) {
    case 0:
      return t.g.find(((i) => i instanceof Uint8Array));
    case 1:
      return t.g.find(((i) => i instanceof Float32Array));
    case 2:
      return t.g.find(((i) => typeof WebGLTexture < "u" && i instanceof WebGLTexture));
    default:
      throw Error(`Type is not supported: ${a}`);
  }
}
function Vh(t) {
  var a = Va(t, 1);
  if (!a) {
    if (a = Va(t, 0)) a = new Float32Array(a).map(((o) => o / 255));
    else {
      a = new Float32Array(t.width * t.height);
      const o = Tl(t);
      var i = Zp(t);
      if ($y(i, o, t4(t)), "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform) || navigator.userAgent.includes("Mac") && "document" in self && "ontouchend" in self.document) {
        i = new Float32Array(t.width * t.height * 4), o.readPixels(0, 0, t.width, t.height, o.RGBA, o.FLOAT, i);
        for (let s = 0, u = 0; s < a.length; ++s, u += 4) a[s] = i[u];
      } else o.readPixels(0, 0, t.width, t.height, o.RED, o.FLOAT, a);
    }
    t.g.push(a);
  }
  return a;
}
function t4(t) {
  let a = Va(t, 2);
  if (!a) {
    const i = Tl(t);
    a = a4(t);
    const o = Vh(t), s = n4(t);
    i.texImage2D(i.TEXTURE_2D, 0, s, t.width, t.height, 0, i.RED, i.FLOAT, o), Ih(t);
  }
  return a;
}
function Tl(t) {
  if (!t.canvas) throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");
  return t.h || (t.h = Cr(t.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), t.h;
}
function n4(t) {
  if (t = Tl(t), !Uc) if (t.getExtension("EXT_color_buffer_float") && t.getExtension("OES_texture_float_linear") && t.getExtension("EXT_float_blend")) Uc = t.R32F;
  else {
    if (!t.getExtension("EXT_color_buffer_half_float")) throw Error("GPU does not fully support 4-channel float32 or float16 formats");
    Uc = t.R16F;
  }
  return Uc;
}
function Zp(t) {
  return t.l || (t.l = new e4()), t.l;
}
function a4(t) {
  const a = Tl(t);
  a.viewport(0, 0, t.width, t.height), a.activeTexture(a.TEXTURE0);
  let i = Va(t, 2);
  return i || (i = Wy(Zp(t), a, t.m ? a.LINEAR : a.NEAREST), t.g.push(i), t.j = !0), a.bindTexture(a.TEXTURE_2D, i), i;
}
function Ih(t) {
  t.h.bindTexture(t.h.TEXTURE_2D, null);
}
var Uc, Ht = class {
  constructor(t, a, i, o, s, u, f) {
    this.g = t, this.m = a, this.j = i, this.canvas = o, this.l = s, this.width = u, this.height = f, this.j && --Qb === 0 && console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.");
  }
  Fa() {
    return !!Va(this, 0);
  }
  ka() {
    return !!Va(this, 1);
  }
  R() {
    return !!Va(this, 2);
  }
  ja() {
    return (a = Va(t = this, 0)) || (a = Vh(t), a = new Uint8Array(a.map(((i) => Math.round(255 * i)))), t.g.push(a)), a;
    var t, a;
  }
  ia() {
    return Vh(this);
  }
  N() {
    return t4(this);
  }
  clone() {
    const t = [];
    for (const a of this.g) {
      let i;
      if (a instanceof Uint8Array) i = new Uint8Array(a);
      else if (a instanceof Float32Array) i = new Float32Array(a);
      else {
        if (!(a instanceof WebGLTexture)) throw Error(`Type is not supported: ${a}`);
        {
          const o = Tl(this), s = Zp(this);
          o.activeTexture(o.TEXTURE1), i = Wy(s, o, this.m ? o.LINEAR : o.NEAREST), o.bindTexture(o.TEXTURE_2D, i);
          const u = n4(this);
          o.texImage2D(o.TEXTURE_2D, 0, u, this.width, this.height, 0, o.RED, o.FLOAT, null), o.bindTexture(o.TEXTURE_2D, null), $y(s, o, i), vS(s, o, !1, (() => {
            a4(this), o.clearColor(0, 0, 0, 0), o.clear(o.COLOR_BUFFER_BIT), o.drawArrays(o.TRIANGLE_FAN, 0, 4), Ih(this);
          })), yS(s), Ih(this);
        }
      }
      t.push(i);
    }
    return new Ht(t, this.m, this.R(), this.canvas, this.l, this.width, this.height);
  }
  close() {
    this.j && Tl(this).deleteTexture(Va(this, 2)), Qb = -1;
  }
};
Ht.prototype.close = Ht.prototype.close, Ht.prototype.clone = Ht.prototype.clone, Ht.prototype.getAsWebGLTexture = Ht.prototype.N, Ht.prototype.getAsFloat32Array = Ht.prototype.ia, Ht.prototype.getAsUint8Array = Ht.prototype.ja, Ht.prototype.hasWebGLTexture = Ht.prototype.R, Ht.prototype.hasFloat32Array = Ht.prototype.ka, Ht.prototype.hasUint8Array = Ht.prototype.Fa;
var Qb = 250;
function ca(...t) {
  return t.map((([a, i]) => ({ start: a, end: i })));
}
const xS = /* @__PURE__ */ (function(t) {
  return class extends t {
    Ja() {
      this.i._registerModelResourcesGraphService();
    }
  };
})((Fb = class {
  constructor(t, a) {
    this.l = !0, this.i = t, this.g = null, this.h = 0, this.m = typeof this.i._addIntToInputStream == "function", a !== void 0 ? this.i.canvas = a : Jy() ? this.i.canvas = new OffscreenCanvas(1, 1) : (console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."), this.i.canvas = document.createElement("canvas"));
  }
  async initializeGraph(t) {
    const a = await (await fetch(t)).arrayBuffer();
    t = !(t.endsWith(".pbtxt") || t.endsWith(".textproto")), this.setGraph(new Uint8Array(a), t);
  }
  setGraphFromString(t) {
    this.setGraph(new TextEncoder().encode(t), !1);
  }
  setGraph(t, a) {
    const i = t.length, o = this.i._malloc(i);
    this.i.HEAPU8.set(t, o), a ? this.i._changeBinaryGraph(i, o) : this.i._changeTextGraph(i, o), this.i._free(o);
  }
  configureAudio(t, a, i, o, s) {
    this.i._configureAudio || console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'), he(this, o || "input_audio", ((u) => {
      he(this, s = s || "audio_header", ((f) => {
        this.i._configureAudio(u, f, t, a ?? 0, i);
      }));
    }));
  }
  setAutoResizeCanvas(t) {
    this.l = t;
  }
  setAutoRenderToScreen(t) {
    this.i._setAutoRenderToScreen(t);
  }
  setGpuBufferVerticalFlip(t) {
    this.i.gpuOriginForWebTexturesIsBottomLeft = t;
  }
  ca(t) {
    ga(this, "__graph_config__", ((a) => {
      t(a);
    })), he(this, "__graph_config__", ((a) => {
      this.i._getGraphConfig(a, void 0);
    })), delete this.i.simpleListeners.__graph_config__;
  }
  attachErrorListener(t) {
    this.i.errorListener = t;
  }
  attachEmptyPacketListener(t, a) {
    this.i.emptyPacketListeners = this.i.emptyPacketListeners || {}, this.i.emptyPacketListeners[t] = a;
  }
  addAudioToStream(t, a, i) {
    this.addAudioToStreamWithShape(t, 0, 0, a, i);
  }
  addAudioToStreamWithShape(t, a, i, o, s) {
    const u = 4 * t.length;
    this.h !== u && (this.g && this.i._free(this.g), this.g = this.i._malloc(u), this.h = u), this.i.HEAPF32.set(t, this.g / 4), he(this, o, ((f) => {
      this.i._addAudioToInputStream(this.g, a, i, f, s);
    }));
  }
  addGpuBufferToStream(t, a, i) {
    he(this, a, ((o) => {
      const [s, u] = Yb(this, t, o);
      this.i._addBoundTextureToStream(o, s, u, i);
    }));
  }
  addBoolToStream(t, a, i) {
    he(this, a, ((o) => {
      this.i._addBoolToInputStream(t, o, i);
    }));
  }
  addDoubleToStream(t, a, i) {
    he(this, a, ((o) => {
      this.i._addDoubleToInputStream(t, o, i);
    }));
  }
  addFloatToStream(t, a, i) {
    he(this, a, ((o) => {
      this.i._addFloatToInputStream(t, o, i);
    }));
  }
  addIntToStream(t, a, i) {
    he(this, a, ((o) => {
      this.i._addIntToInputStream(t, o, i);
    }));
  }
  addUintToStream(t, a, i) {
    he(this, a, ((o) => {
      this.i._addUintToInputStream(t, o, i);
    }));
  }
  addStringToStream(t, a, i) {
    he(this, a, ((o) => {
      he(this, t, ((s) => {
        this.i._addStringToInputStream(s, o, i);
      }));
    }));
  }
  addStringRecordToStream(t, a, i) {
    he(this, a, ((o) => {
      qb(this, Object.keys(t), ((s) => {
        qb(this, Object.values(t), ((u) => {
          this.i._addFlatHashMapToInputStream(s, u, Object.keys(t).length, o, i);
        }));
      }));
    }));
  }
  addProtoToStream(t, a, i, o) {
    he(this, i, ((s) => {
      he(this, a, ((u) => {
        const f = this.i._malloc(t.length);
        this.i.HEAPU8.set(t, f), this.i._addProtoToInputStream(f, t.length, u, s, o), this.i._free(f);
      }));
    }));
  }
  addEmptyPacketToStream(t, a) {
    he(this, t, ((i) => {
      this.i._addEmptyPacketToInputStream(i, a);
    }));
  }
  addBoolVectorToStream(t, a, i) {
    he(this, a, ((o) => {
      const s = this.i._allocateBoolVector(t.length);
      if (!s) throw Error("Unable to allocate new bool vector on heap.");
      for (const u of t) this.i._addBoolVectorEntry(s, u);
      this.i._addBoolVectorToInputStream(s, o, i);
    }));
  }
  addDoubleVectorToStream(t, a, i) {
    he(this, a, ((o) => {
      const s = this.i._allocateDoubleVector(t.length);
      if (!s) throw Error("Unable to allocate new double vector on heap.");
      for (const u of t) this.i._addDoubleVectorEntry(s, u);
      this.i._addDoubleVectorToInputStream(s, o, i);
    }));
  }
  addFloatVectorToStream(t, a, i) {
    he(this, a, ((o) => {
      const s = this.i._allocateFloatVector(t.length);
      if (!s) throw Error("Unable to allocate new float vector on heap.");
      for (const u of t) this.i._addFloatVectorEntry(s, u);
      this.i._addFloatVectorToInputStream(s, o, i);
    }));
  }
  addIntVectorToStream(t, a, i) {
    he(this, a, ((o) => {
      const s = this.i._allocateIntVector(t.length);
      if (!s) throw Error("Unable to allocate new int vector on heap.");
      for (const u of t) this.i._addIntVectorEntry(s, u);
      this.i._addIntVectorToInputStream(s, o, i);
    }));
  }
  addUintVectorToStream(t, a, i) {
    he(this, a, ((o) => {
      const s = this.i._allocateUintVector(t.length);
      if (!s) throw Error("Unable to allocate new unsigned int vector on heap.");
      for (const u of t) this.i._addUintVectorEntry(s, u);
      this.i._addUintVectorToInputStream(s, o, i);
    }));
  }
  addStringVectorToStream(t, a, i) {
    he(this, a, ((o) => {
      const s = this.i._allocateStringVector(t.length);
      if (!s) throw Error("Unable to allocate new string vector on heap.");
      for (const u of t) he(this, u, ((f) => {
        this.i._addStringVectorEntry(s, f);
      }));
      this.i._addStringVectorToInputStream(s, o, i);
    }));
  }
  addBoolToInputSidePacket(t, a) {
    he(this, a, ((i) => {
      this.i._addBoolToInputSidePacket(t, i);
    }));
  }
  addDoubleToInputSidePacket(t, a) {
    he(this, a, ((i) => {
      this.i._addDoubleToInputSidePacket(t, i);
    }));
  }
  addFloatToInputSidePacket(t, a) {
    he(this, a, ((i) => {
      this.i._addFloatToInputSidePacket(t, i);
    }));
  }
  addIntToInputSidePacket(t, a) {
    he(this, a, ((i) => {
      this.i._addIntToInputSidePacket(t, i);
    }));
  }
  addUintToInputSidePacket(t, a) {
    he(this, a, ((i) => {
      this.i._addUintToInputSidePacket(t, i);
    }));
  }
  addStringToInputSidePacket(t, a) {
    he(this, a, ((i) => {
      he(this, t, ((o) => {
        this.i._addStringToInputSidePacket(o, i);
      }));
    }));
  }
  addProtoToInputSidePacket(t, a, i) {
    he(this, i, ((o) => {
      he(this, a, ((s) => {
        const u = this.i._malloc(t.length);
        this.i.HEAPU8.set(t, u), this.i._addProtoToInputSidePacket(u, t.length, s, o), this.i._free(u);
      }));
    }));
  }
  addBoolVectorToInputSidePacket(t, a) {
    he(this, a, ((i) => {
      const o = this.i._allocateBoolVector(t.length);
      if (!o) throw Error("Unable to allocate new bool vector on heap.");
      for (const s of t) this.i._addBoolVectorEntry(o, s);
      this.i._addBoolVectorToInputSidePacket(o, i);
    }));
  }
  addDoubleVectorToInputSidePacket(t, a) {
    he(this, a, ((i) => {
      const o = this.i._allocateDoubleVector(t.length);
      if (!o) throw Error("Unable to allocate new double vector on heap.");
      for (const s of t) this.i._addDoubleVectorEntry(o, s);
      this.i._addDoubleVectorToInputSidePacket(o, i);
    }));
  }
  addFloatVectorToInputSidePacket(t, a) {
    he(this, a, ((i) => {
      const o = this.i._allocateFloatVector(t.length);
      if (!o) throw Error("Unable to allocate new float vector on heap.");
      for (const s of t) this.i._addFloatVectorEntry(o, s);
      this.i._addFloatVectorToInputSidePacket(o, i);
    }));
  }
  addIntVectorToInputSidePacket(t, a) {
    he(this, a, ((i) => {
      const o = this.i._allocateIntVector(t.length);
      if (!o) throw Error("Unable to allocate new int vector on heap.");
      for (const s of t) this.i._addIntVectorEntry(o, s);
      this.i._addIntVectorToInputSidePacket(o, i);
    }));
  }
  addUintVectorToInputSidePacket(t, a) {
    he(this, a, ((i) => {
      const o = this.i._allocateUintVector(t.length);
      if (!o) throw Error("Unable to allocate new unsigned int vector on heap.");
      for (const s of t) this.i._addUintVectorEntry(o, s);
      this.i._addUintVectorToInputSidePacket(o, i);
    }));
  }
  addStringVectorToInputSidePacket(t, a) {
    he(this, a, ((i) => {
      const o = this.i._allocateStringVector(t.length);
      if (!o) throw Error("Unable to allocate new string vector on heap.");
      for (const s of t) he(this, s, ((u) => {
        this.i._addStringVectorEntry(o, u);
      }));
      this.i._addStringVectorToInputSidePacket(o, i);
    }));
  }
  attachBoolListener(t, a) {
    ga(this, t, a), he(this, t, ((i) => {
      this.i._attachBoolListener(i);
    }));
  }
  attachBoolVectorListener(t, a) {
    Ar(this, t, a), he(this, t, ((i) => {
      this.i._attachBoolVectorListener(i);
    }));
  }
  attachIntListener(t, a) {
    ga(this, t, a), he(this, t, ((i) => {
      this.i._attachIntListener(i);
    }));
  }
  attachIntVectorListener(t, a) {
    Ar(this, t, a), he(this, t, ((i) => {
      this.i._attachIntVectorListener(i);
    }));
  }
  attachUintListener(t, a) {
    ga(this, t, a), he(this, t, ((i) => {
      this.i._attachUintListener(i);
    }));
  }
  attachUintVectorListener(t, a) {
    Ar(this, t, a), he(this, t, ((i) => {
      this.i._attachUintVectorListener(i);
    }));
  }
  attachDoubleListener(t, a) {
    ga(this, t, a), he(this, t, ((i) => {
      this.i._attachDoubleListener(i);
    }));
  }
  attachDoubleVectorListener(t, a) {
    Ar(this, t, a), he(this, t, ((i) => {
      this.i._attachDoubleVectorListener(i);
    }));
  }
  attachFloatListener(t, a) {
    ga(this, t, a), he(this, t, ((i) => {
      this.i._attachFloatListener(i);
    }));
  }
  attachFloatVectorListener(t, a) {
    Ar(this, t, a), he(this, t, ((i) => {
      this.i._attachFloatVectorListener(i);
    }));
  }
  attachStringListener(t, a) {
    ga(this, t, a), he(this, t, ((i) => {
      this.i._attachStringListener(i);
    }));
  }
  attachStringVectorListener(t, a) {
    Ar(this, t, a), he(this, t, ((i) => {
      this.i._attachStringVectorListener(i);
    }));
  }
  attachProtoListener(t, a, i) {
    ga(this, t, a), he(this, t, ((o) => {
      this.i._attachProtoListener(o, i || !1);
    }));
  }
  attachProtoVectorListener(t, a, i) {
    Ar(this, t, a), he(this, t, ((o) => {
      this.i._attachProtoVectorListener(o, i || !1);
    }));
  }
  attachAudioListener(t, a, i) {
    this.i._attachAudioListener || console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'), ga(this, t, ((o, s) => {
      o = new Float32Array(o.buffer, o.byteOffset, o.length / 4), a(o, s);
    })), he(this, t, ((o) => {
      this.i._attachAudioListener(o, i || !1);
    }));
  }
  finishProcessing() {
    this.i._waitUntilIdle();
  }
  closeGraph() {
    this.i._closeGraph(), this.i.simpleListeners = void 0, this.i.emptyPacketListeners = void 0;
  }
}, class extends Fb {
  get ga() {
    return this.i;
  }
  pa(t, a, i) {
    he(this, a, ((o) => {
      const [s, u] = Yb(this, t, o);
      this.ga._addBoundTextureAsImageToStream(o, s, u, i);
    }));
  }
  Z(t, a) {
    ga(this, t, a), he(this, t, ((i) => {
      this.ga._attachImageListener(i);
    }));
  }
  aa(t, a) {
    Ar(this, t, a), he(this, t, ((i) => {
      this.ga._attachImageVectorListener(i);
    }));
  }
}));
var Fb, ua = class extends xS {
};
async function Ue(t, a, i) {
  return (async function(o, s, u, f) {
    return gS(o, s, u, f);
  })(t, i.canvas ?? (Jy() ? void 0 : document.createElement("canvas")), a, i);
}
function r4(t, a, i, o) {
  if (t.U) {
    const u = new Ay();
    if (i?.regionOfInterest) {
      if (!t.oa) throw Error("This task doesn't support region-of-interest.");
      var s = i.regionOfInterest;
      if (s.left >= s.right || s.top >= s.bottom) throw Error("Expected RectF with left < right and top < bottom.");
      if (s.left < 0 || s.top < 0 || s.right > 1 || s.bottom > 1) throw Error("Expected RectF values to be in [0,1].");
      me(u, 1, (s.left + s.right) / 2), me(u, 2, (s.top + s.bottom) / 2), me(u, 4, s.right - s.left), me(u, 3, s.bottom - s.top);
    } else me(u, 1, 0.5), me(u, 2, 0.5), me(u, 4, 1), me(u, 3, 1);
    if (i?.rotationDegrees) {
      if (i?.rotationDegrees % 90 != 0) throw Error("Expected rotation to be a multiple of 90°.");
      if (me(u, 5, -Math.PI * i.rotationDegrees / 180), i?.rotationDegrees % 180 != 0) {
        const [f, p] = Py(a);
        i = yt(u, 3) * p / f, s = yt(u, 4) * f / p, me(u, 4, i), me(u, 3, s);
      }
    }
    t.g.addProtoToStream(u.g(), "mediapipe.NormalizedRect", t.U, o);
  }
  t.g.pa(a, t.X, o ?? performance.now()), t.finishProcessing();
}
function da(t, a, i) {
  if (t.baseOptions?.g()) throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");
  r4(t, a, i, t.C + 1);
}
function ka(t, a, i, o) {
  if (!t.baseOptions?.g()) throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");
  r4(t, a, i, o);
}
function jl(t, a, i, o) {
  var s = a.data;
  const u = a.width, f = u * (a = a.height);
  if ((s instanceof Uint8Array || s instanceof Float32Array) && s.length !== f) throw Error("Unsupported channel count: " + s.length / f);
  return t = new Ht([s], i, !1, t.g.i.canvas, t.P, u, a), o ? t.clone() : t;
}
var Dn = class extends Xh {
  constructor(t, a, i, o) {
    super(t), this.g = t, this.X = a, this.U = i, this.oa = o, this.P = new e4();
  }
  l(t, a = !0) {
    if ("runningMode" in t && We(this.baseOptions, 2, Po(!!t.runningMode && t.runningMode !== "IMAGE")), t.canvas !== void 0 && this.g.i.canvas !== t.canvas) throw Error("You must create a new task to reset the canvas.");
    return super.l(t, a);
  }
  close() {
    this.P.close(), super.close();
  }
};
Dn.prototype.close = Dn.prototype.close;
var Kn = class extends Dn {
  constructor(t, a) {
    super(new ua(t, a), "image_in", "norm_rect_in", !1), this.j = { detections: [] }, be(t = this.h = new Du(), 0, 1, a = new mt()), me(this.h, 2, 0.5), me(this.h, 3, 0.3);
  }
  get baseOptions() {
    return Ye(this.h, mt, 1);
  }
  set baseOptions(t) {
    be(this.h, 0, 1, t);
  }
  o(t) {
    return "minDetectionConfidence" in t && me(this.h, 2, t.minDetectionConfidence ?? 0.5), "minSuppressionThreshold" in t && me(this.h, 3, t.minSuppressionThreshold ?? 0.3), this.l(t);
  }
  F(t, a) {
    return this.j = { detections: [] }, da(this, t, a), this.j;
  }
  G(t, a, i) {
    return this.j = { detections: [] }, ka(this, t, i, a), this.j;
  }
  m() {
    var t = new Bn();
    dt(t, "image_in"), dt(t, "norm_rect_in"), Ve(t, "detections");
    const a = new _n();
    Sa(a, tS, this.h);
    const i = new pn();
    On(i, 2, "mediapipe.tasks.vision.face_detector.FaceDetectorGraph"), ot(i, "IMAGE:image_in"), ot(i, "NORM_RECT:norm_rect_in"), Le(i, "DETECTIONS:detections"), i.o(a), ea(t, i), this.g.attachProtoVectorListener("detections", ((o, s) => {
      for (const u of o) o = Sy(u), this.j.detections.push(Zy(o));
      ie(this, s);
    })), this.g.attachEmptyPacketListener("detections", ((o) => {
      ie(this, o);
    })), t = t.g(), this.setGraph(new Uint8Array(t), !0);
  }
};
Kn.prototype.detectForVideo = Kn.prototype.G, Kn.prototype.detect = Kn.prototype.F, Kn.prototype.setOptions = Kn.prototype.o, Kn.createFromModelPath = async function(t, a) {
  return Ue(Kn, t, { baseOptions: { modelAssetPath: a } });
}, Kn.createFromModelBuffer = function(t, a) {
  return Ue(Kn, t, { baseOptions: { modelAssetBuffer: a } });
}, Kn.createFromOptions = function(t, a) {
  return Ue(Kn, t, a);
};
var Kp = ca([61, 146], [146, 91], [91, 181], [181, 84], [84, 17], [17, 314], [314, 405], [405, 321], [321, 375], [375, 291], [61, 185], [185, 40], [40, 39], [39, 37], [37, 0], [0, 267], [267, 269], [269, 270], [270, 409], [409, 291], [78, 95], [95, 88], [88, 178], [178, 87], [87, 14], [14, 317], [317, 402], [402, 318], [318, 324], [324, 308], [78, 191], [191, 80], [80, 81], [81, 82], [82, 13], [13, 312], [312, 311], [311, 310], [310, 415], [415, 308]), Jp = ca([263, 249], [249, 390], [390, 373], [373, 374], [374, 380], [380, 381], [381, 382], [382, 362], [263, 466], [466, 388], [388, 387], [387, 386], [386, 385], [385, 384], [384, 398], [398, 362]), Pp = ca([276, 283], [283, 282], [282, 295], [295, 285], [300, 293], [293, 334], [334, 296], [296, 336]), i4 = ca([474, 475], [475, 476], [476, 477], [477, 474]), Wp = ca([33, 7], [7, 163], [163, 144], [144, 145], [145, 153], [153, 154], [154, 155], [155, 133], [33, 246], [246, 161], [161, 160], [160, 159], [159, 158], [158, 157], [157, 173], [173, 133]), $p = ca([46, 53], [53, 52], [52, 65], [65, 55], [70, 63], [63, 105], [105, 66], [66, 107]), l4 = ca([469, 470], [470, 471], [471, 472], [472, 469]), e1 = ca([10, 338], [338, 297], [297, 332], [332, 284], [284, 251], [251, 389], [389, 356], [356, 454], [454, 323], [323, 361], [361, 288], [288, 397], [397, 365], [365, 379], [379, 378], [378, 400], [400, 377], [377, 152], [152, 148], [148, 176], [176, 149], [149, 150], [150, 136], [136, 172], [172, 58], [58, 132], [132, 93], [93, 234], [234, 127], [127, 162], [162, 21], [21, 54], [54, 103], [103, 67], [67, 109], [109, 10]), o4 = [...Kp, ...Jp, ...Pp, ...Wp, ...$p, ...e1], s4 = ca([127, 34], [34, 139], [139, 127], [11, 0], [0, 37], [37, 11], [232, 231], [231, 120], [120, 232], [72, 37], [37, 39], [39, 72], [128, 121], [121, 47], [47, 128], [232, 121], [121, 128], [128, 232], [104, 69], [69, 67], [67, 104], [175, 171], [171, 148], [148, 175], [118, 50], [50, 101], [101, 118], [73, 39], [39, 40], [40, 73], [9, 151], [151, 108], [108, 9], [48, 115], [115, 131], [131, 48], [194, 204], [204, 211], [211, 194], [74, 40], [40, 185], [185, 74], [80, 42], [42, 183], [183, 80], [40, 92], [92, 186], [186, 40], [230, 229], [229, 118], [118, 230], [202, 212], [212, 214], [214, 202], [83, 18], [18, 17], [17, 83], [76, 61], [61, 146], [146, 76], [160, 29], [29, 30], [30, 160], [56, 157], [157, 173], [173, 56], [106, 204], [204, 194], [194, 106], [135, 214], [214, 192], [192, 135], [203, 165], [165, 98], [98, 203], [21, 71], [71, 68], [68, 21], [51, 45], [45, 4], [4, 51], [144, 24], [24, 23], [23, 144], [77, 146], [146, 91], [91, 77], [205, 50], [50, 187], [187, 205], [201, 200], [200, 18], [18, 201], [91, 106], [106, 182], [182, 91], [90, 91], [91, 181], [181, 90], [85, 84], [84, 17], [17, 85], [206, 203], [203, 36], [36, 206], [148, 171], [171, 140], [140, 148], [92, 40], [40, 39], [39, 92], [193, 189], [189, 244], [244, 193], [159, 158], [158, 28], [28, 159], [247, 246], [246, 161], [161, 247], [236, 3], [3, 196], [196, 236], [54, 68], [68, 104], [104, 54], [193, 168], [168, 8], [8, 193], [117, 228], [228, 31], [31, 117], [189, 193], [193, 55], [55, 189], [98, 97], [97, 99], [99, 98], [126, 47], [47, 100], [100, 126], [166, 79], [79, 218], [218, 166], [155, 154], [154, 26], [26, 155], [209, 49], [49, 131], [131, 209], [135, 136], [136, 150], [150, 135], [47, 126], [126, 217], [217, 47], [223, 52], [52, 53], [53, 223], [45, 51], [51, 134], [134, 45], [211, 170], [170, 140], [140, 211], [67, 69], [69, 108], [108, 67], [43, 106], [106, 91], [91, 43], [230, 119], [119, 120], [120, 230], [226, 130], [130, 247], [247, 226], [63, 53], [53, 52], [52, 63], [238, 20], [20, 242], [242, 238], [46, 70], [70, 156], [156, 46], [78, 62], [62, 96], [96, 78], [46, 53], [53, 63], [63, 46], [143, 34], [34, 227], [227, 143], [123, 117], [117, 111], [111, 123], [44, 125], [125, 19], [19, 44], [236, 134], [134, 51], [51, 236], [216, 206], [206, 205], [205, 216], [154, 153], [153, 22], [22, 154], [39, 37], [37, 167], [167, 39], [200, 201], [201, 208], [208, 200], [36, 142], [142, 100], [100, 36], [57, 212], [212, 202], [202, 57], [20, 60], [60, 99], [99, 20], [28, 158], [158, 157], [157, 28], [35, 226], [226, 113], [113, 35], [160, 159], [159, 27], [27, 160], [204, 202], [202, 210], [210, 204], [113, 225], [225, 46], [46, 113], [43, 202], [202, 204], [204, 43], [62, 76], [76, 77], [77, 62], [137, 123], [123, 116], [116, 137], [41, 38], [38, 72], [72, 41], [203, 129], [129, 142], [142, 203], [64, 98], [98, 240], [240, 64], [49, 102], [102, 64], [64, 49], [41, 73], [73, 74], [74, 41], [212, 216], [216, 207], [207, 212], [42, 74], [74, 184], [184, 42], [169, 170], [170, 211], [211, 169], [170, 149], [149, 176], [176, 170], [105, 66], [66, 69], [69, 105], [122, 6], [6, 168], [168, 122], [123, 147], [147, 187], [187, 123], [96, 77], [77, 90], [90, 96], [65, 55], [55, 107], [107, 65], [89, 90], [90, 180], [180, 89], [101, 100], [100, 120], [120, 101], [63, 105], [105, 104], [104, 63], [93, 137], [137, 227], [227, 93], [15, 86], [86, 85], [85, 15], [129, 102], [102, 49], [49, 129], [14, 87], [87, 86], [86, 14], [55, 8], [8, 9], [9, 55], [100, 47], [47, 121], [121, 100], [145, 23], [23, 22], [22, 145], [88, 89], [89, 179], [179, 88], [6, 122], [122, 196], [196, 6], [88, 95], [95, 96], [96, 88], [138, 172], [172, 136], [136, 138], [215, 58], [58, 172], [172, 215], [115, 48], [48, 219], [219, 115], [42, 80], [80, 81], [81, 42], [195, 3], [3, 51], [51, 195], [43, 146], [146, 61], [61, 43], [171, 175], [175, 199], [199, 171], [81, 82], [82, 38], [38, 81], [53, 46], [46, 225], [225, 53], [144, 163], [163, 110], [110, 144], [52, 65], [65, 66], [66, 52], [229, 228], [228, 117], [117, 229], [34, 127], [127, 234], [234, 34], [107, 108], [108, 69], [69, 107], [109, 108], [108, 151], [151, 109], [48, 64], [64, 235], [235, 48], [62, 78], [78, 191], [191, 62], [129, 209], [209, 126], [126, 129], [111, 35], [35, 143], [143, 111], [117, 123], [123, 50], [50, 117], [222, 65], [65, 52], [52, 222], [19, 125], [125, 141], [141, 19], [221, 55], [55, 65], [65, 221], [3, 195], [195, 197], [197, 3], [25, 7], [7, 33], [33, 25], [220, 237], [237, 44], [44, 220], [70, 71], [71, 139], [139, 70], [122, 193], [193, 245], [245, 122], [247, 130], [130, 33], [33, 247], [71, 21], [21, 162], [162, 71], [170, 169], [169, 150], [150, 170], [188, 174], [174, 196], [196, 188], [216, 186], [186, 92], [92, 216], [2, 97], [97, 167], [167, 2], [141, 125], [125, 241], [241, 141], [164, 167], [167, 37], [37, 164], [72, 38], [38, 12], [12, 72], [38, 82], [82, 13], [13, 38], [63, 68], [68, 71], [71, 63], [226, 35], [35, 111], [111, 226], [101, 50], [50, 205], [205, 101], [206, 92], [92, 165], [165, 206], [209, 198], [198, 217], [217, 209], [165, 167], [167, 97], [97, 165], [220, 115], [115, 218], [218, 220], [133, 112], [112, 243], [243, 133], [239, 238], [238, 241], [241, 239], [214, 135], [135, 169], [169, 214], [190, 173], [173, 133], [133, 190], [171, 208], [208, 32], [32, 171], [125, 44], [44, 237], [237, 125], [86, 87], [87, 178], [178, 86], [85, 86], [86, 179], [179, 85], [84, 85], [85, 180], [180, 84], [83, 84], [84, 181], [181, 83], [201, 83], [83, 182], [182, 201], [137, 93], [93, 132], [132, 137], [76, 62], [62, 183], [183, 76], [61, 76], [76, 184], [184, 61], [57, 61], [61, 185], [185, 57], [212, 57], [57, 186], [186, 212], [214, 207], [207, 187], [187, 214], [34, 143], [143, 156], [156, 34], [79, 239], [239, 237], [237, 79], [123, 137], [137, 177], [177, 123], [44, 1], [1, 4], [4, 44], [201, 194], [194, 32], [32, 201], [64, 102], [102, 129], [129, 64], [213, 215], [215, 138], [138, 213], [59, 166], [166, 219], [219, 59], [242, 99], [99, 97], [97, 242], [2, 94], [94, 141], [141, 2], [75, 59], [59, 235], [235, 75], [24, 110], [110, 228], [228, 24], [25, 130], [130, 226], [226, 25], [23, 24], [24, 229], [229, 23], [22, 23], [23, 230], [230, 22], [26, 22], [22, 231], [231, 26], [112, 26], [26, 232], [232, 112], [189, 190], [190, 243], [243, 189], [221, 56], [56, 190], [190, 221], [28, 56], [56, 221], [221, 28], [27, 28], [28, 222], [222, 27], [29, 27], [27, 223], [223, 29], [30, 29], [29, 224], [224, 30], [247, 30], [30, 225], [225, 247], [238, 79], [79, 20], [20, 238], [166, 59], [59, 75], [75, 166], [60, 75], [75, 240], [240, 60], [147, 177], [177, 215], [215, 147], [20, 79], [79, 166], [166, 20], [187, 147], [147, 213], [213, 187], [112, 233], [233, 244], [244, 112], [233, 128], [128, 245], [245, 233], [128, 114], [114, 188], [188, 128], [114, 217], [217, 174], [174, 114], [131, 115], [115, 220], [220, 131], [217, 198], [198, 236], [236, 217], [198, 131], [131, 134], [134, 198], [177, 132], [132, 58], [58, 177], [143, 35], [35, 124], [124, 143], [110, 163], [163, 7], [7, 110], [228, 110], [110, 25], [25, 228], [356, 389], [389, 368], [368, 356], [11, 302], [302, 267], [267, 11], [452, 350], [350, 349], [349, 452], [302, 303], [303, 269], [269, 302], [357, 343], [343, 277], [277, 357], [452, 453], [453, 357], [357, 452], [333, 332], [332, 297], [297, 333], [175, 152], [152, 377], [377, 175], [347, 348], [348, 330], [330, 347], [303, 304], [304, 270], [270, 303], [9, 336], [336, 337], [337, 9], [278, 279], [279, 360], [360, 278], [418, 262], [262, 431], [431, 418], [304, 408], [408, 409], [409, 304], [310, 415], [415, 407], [407, 310], [270, 409], [409, 410], [410, 270], [450, 348], [348, 347], [347, 450], [422, 430], [430, 434], [434, 422], [313, 314], [314, 17], [17, 313], [306, 307], [307, 375], [375, 306], [387, 388], [388, 260], [260, 387], [286, 414], [414, 398], [398, 286], [335, 406], [406, 418], [418, 335], [364, 367], [367, 416], [416, 364], [423, 358], [358, 327], [327, 423], [251, 284], [284, 298], [298, 251], [281, 5], [5, 4], [4, 281], [373, 374], [374, 253], [253, 373], [307, 320], [320, 321], [321, 307], [425, 427], [427, 411], [411, 425], [421, 313], [313, 18], [18, 421], [321, 405], [405, 406], [406, 321], [320, 404], [404, 405], [405, 320], [315, 16], [16, 17], [17, 315], [426, 425], [425, 266], [266, 426], [377, 400], [400, 369], [369, 377], [322, 391], [391, 269], [269, 322], [417, 465], [465, 464], [464, 417], [386, 257], [257, 258], [258, 386], [466, 260], [260, 388], [388, 466], [456, 399], [399, 419], [419, 456], [284, 332], [332, 333], [333, 284], [417, 285], [285, 8], [8, 417], [346, 340], [340, 261], [261, 346], [413, 441], [441, 285], [285, 413], [327, 460], [460, 328], [328, 327], [355, 371], [371, 329], [329, 355], [392, 439], [439, 438], [438, 392], [382, 341], [341, 256], [256, 382], [429, 420], [420, 360], [360, 429], [364, 394], [394, 379], [379, 364], [277, 343], [343, 437], [437, 277], [443, 444], [444, 283], [283, 443], [275, 440], [440, 363], [363, 275], [431, 262], [262, 369], [369, 431], [297, 338], [338, 337], [337, 297], [273, 375], [375, 321], [321, 273], [450, 451], [451, 349], [349, 450], [446, 342], [342, 467], [467, 446], [293, 334], [334, 282], [282, 293], [458, 461], [461, 462], [462, 458], [276, 353], [353, 383], [383, 276], [308, 324], [324, 325], [325, 308], [276, 300], [300, 293], [293, 276], [372, 345], [345, 447], [447, 372], [352, 345], [345, 340], [340, 352], [274, 1], [1, 19], [19, 274], [456, 248], [248, 281], [281, 456], [436, 427], [427, 425], [425, 436], [381, 256], [256, 252], [252, 381], [269, 391], [391, 393], [393, 269], [200, 199], [199, 428], [428, 200], [266, 330], [330, 329], [329, 266], [287, 273], [273, 422], [422, 287], [250, 462], [462, 328], [328, 250], [258, 286], [286, 384], [384, 258], [265, 353], [353, 342], [342, 265], [387, 259], [259, 257], [257, 387], [424, 431], [431, 430], [430, 424], [342, 353], [353, 276], [276, 342], [273, 335], [335, 424], [424, 273], [292, 325], [325, 307], [307, 292], [366, 447], [447, 345], [345, 366], [271, 303], [303, 302], [302, 271], [423, 266], [266, 371], [371, 423], [294, 455], [455, 460], [460, 294], [279, 278], [278, 294], [294, 279], [271, 272], [272, 304], [304, 271], [432, 434], [434, 427], [427, 432], [272, 407], [407, 408], [408, 272], [394, 430], [430, 431], [431, 394], [395, 369], [369, 400], [400, 395], [334, 333], [333, 299], [299, 334], [351, 417], [417, 168], [168, 351], [352, 280], [280, 411], [411, 352], [325, 319], [319, 320], [320, 325], [295, 296], [296, 336], [336, 295], [319, 403], [403, 404], [404, 319], [330, 348], [348, 349], [349, 330], [293, 298], [298, 333], [333, 293], [323, 454], [454, 447], [447, 323], [15, 16], [16, 315], [315, 15], [358, 429], [429, 279], [279, 358], [14, 15], [15, 316], [316, 14], [285, 336], [336, 9], [9, 285], [329, 349], [349, 350], [350, 329], [374, 380], [380, 252], [252, 374], [318, 402], [402, 403], [403, 318], [6, 197], [197, 419], [419, 6], [318, 319], [319, 325], [325, 318], [367, 364], [364, 365], [365, 367], [435, 367], [367, 397], [397, 435], [344, 438], [438, 439], [439, 344], [272, 271], [271, 311], [311, 272], [195, 5], [5, 281], [281, 195], [273, 287], [287, 291], [291, 273], [396, 428], [428, 199], [199, 396], [311, 271], [271, 268], [268, 311], [283, 444], [444, 445], [445, 283], [373, 254], [254, 339], [339, 373], [282, 334], [334, 296], [296, 282], [449, 347], [347, 346], [346, 449], [264, 447], [447, 454], [454, 264], [336, 296], [296, 299], [299, 336], [338, 10], [10, 151], [151, 338], [278, 439], [439, 455], [455, 278], [292, 407], [407, 415], [415, 292], [358, 371], [371, 355], [355, 358], [340, 345], [345, 372], [372, 340], [346, 347], [347, 280], [280, 346], [442, 443], [443, 282], [282, 442], [19, 94], [94, 370], [370, 19], [441, 442], [442, 295], [295, 441], [248, 419], [419, 197], [197, 248], [263, 255], [255, 359], [359, 263], [440, 275], [275, 274], [274, 440], [300, 383], [383, 368], [368, 300], [351, 412], [412, 465], [465, 351], [263, 467], [467, 466], [466, 263], [301, 368], [368, 389], [389, 301], [395, 378], [378, 379], [379, 395], [412, 351], [351, 419], [419, 412], [436, 426], [426, 322], [322, 436], [2, 164], [164, 393], [393, 2], [370, 462], [462, 461], [461, 370], [164, 0], [0, 267], [267, 164], [302, 11], [11, 12], [12, 302], [268, 12], [12, 13], [13, 268], [293, 300], [300, 301], [301, 293], [446, 261], [261, 340], [340, 446], [330, 266], [266, 425], [425, 330], [426, 423], [423, 391], [391, 426], [429, 355], [355, 437], [437, 429], [391, 327], [327, 326], [326, 391], [440, 457], [457, 438], [438, 440], [341, 382], [382, 362], [362, 341], [459, 457], [457, 461], [461, 459], [434, 430], [430, 394], [394, 434], [414, 463], [463, 362], [362, 414], [396, 369], [369, 262], [262, 396], [354, 461], [461, 457], [457, 354], [316, 403], [403, 402], [402, 316], [315, 404], [404, 403], [403, 315], [314, 405], [405, 404], [404, 314], [313, 406], [406, 405], [405, 313], [421, 418], [418, 406], [406, 421], [366, 401], [401, 361], [361, 366], [306, 408], [408, 407], [407, 306], [291, 409], [409, 408], [408, 291], [287, 410], [410, 409], [409, 287], [432, 436], [436, 410], [410, 432], [434, 416], [416, 411], [411, 434], [264, 368], [368, 383], [383, 264], [309, 438], [438, 457], [457, 309], [352, 376], [376, 401], [401, 352], [274, 275], [275, 4], [4, 274], [421, 428], [428, 262], [262, 421], [294, 327], [327, 358], [358, 294], [433, 416], [416, 367], [367, 433], [289, 455], [455, 439], [439, 289], [462, 370], [370, 326], [326, 462], [2, 326], [326, 370], [370, 2], [305, 460], [460, 455], [455, 305], [254, 449], [449, 448], [448, 254], [255, 261], [261, 446], [446, 255], [253, 450], [450, 449], [449, 253], [252, 451], [451, 450], [450, 252], [256, 452], [452, 451], [451, 256], [341, 453], [453, 452], [452, 341], [413, 464], [464, 463], [463, 413], [441, 413], [413, 414], [414, 441], [258, 442], [442, 441], [441, 258], [257, 443], [443, 442], [442, 257], [259, 444], [444, 443], [443, 259], [260, 445], [445, 444], [444, 260], [467, 342], [342, 445], [445, 467], [459, 458], [458, 250], [250, 459], [289, 392], [392, 290], [290, 289], [290, 328], [328, 460], [460, 290], [376, 433], [433, 435], [435, 376], [250, 290], [290, 392], [392, 250], [411, 416], [416, 433], [433, 411], [341, 463], [463, 464], [464, 341], [453, 464], [464, 465], [465, 453], [357, 465], [465, 412], [412, 357], [343, 412], [412, 399], [399, 343], [360, 363], [363, 440], [440, 360], [437, 399], [399, 456], [456, 437], [420, 456], [456, 363], [363, 420], [401, 435], [435, 288], [288, 401], [372, 383], [383, 353], [353, 372], [339, 255], [255, 249], [249, 339], [448, 261], [261, 255], [255, 448], [133, 243], [243, 190], [190, 133], [133, 155], [155, 112], [112, 133], [33, 246], [246, 247], [247, 33], [33, 130], [130, 25], [25, 33], [398, 384], [384, 286], [286, 398], [362, 398], [398, 414], [414, 362], [362, 463], [463, 341], [341, 362], [263, 359], [359, 467], [467, 263], [263, 249], [249, 255], [255, 263], [466, 467], [467, 260], [260, 466], [75, 60], [60, 166], [166, 75], [238, 239], [239, 79], [79, 238], [162, 127], [127, 139], [139, 162], [72, 11], [11, 37], [37, 72], [121, 232], [232, 120], [120, 121], [73, 72], [72, 39], [39, 73], [114, 128], [128, 47], [47, 114], [233, 232], [232, 128], [128, 233], [103, 104], [104, 67], [67, 103], [152, 175], [175, 148], [148, 152], [119, 118], [118, 101], [101, 119], [74, 73], [73, 40], [40, 74], [107, 9], [9, 108], [108, 107], [49, 48], [48, 131], [131, 49], [32, 194], [194, 211], [211, 32], [184, 74], [74, 185], [185, 184], [191, 80], [80, 183], [183, 191], [185, 40], [40, 186], [186, 185], [119, 230], [230, 118], [118, 119], [210, 202], [202, 214], [214, 210], [84, 83], [83, 17], [17, 84], [77, 76], [76, 146], [146, 77], [161, 160], [160, 30], [30, 161], [190, 56], [56, 173], [173, 190], [182, 106], [106, 194], [194, 182], [138, 135], [135, 192], [192, 138], [129, 203], [203, 98], [98, 129], [54, 21], [21, 68], [68, 54], [5, 51], [51, 4], [4, 5], [145, 144], [144, 23], [23, 145], [90, 77], [77, 91], [91, 90], [207, 205], [205, 187], [187, 207], [83, 201], [201, 18], [18, 83], [181, 91], [91, 182], [182, 181], [180, 90], [90, 181], [181, 180], [16, 85], [85, 17], [17, 16], [205, 206], [206, 36], [36, 205], [176, 148], [148, 140], [140, 176], [165, 92], [92, 39], [39, 165], [245, 193], [193, 244], [244, 245], [27, 159], [159, 28], [28, 27], [30, 247], [247, 161], [161, 30], [174, 236], [236, 196], [196, 174], [103, 54], [54, 104], [104, 103], [55, 193], [193, 8], [8, 55], [111, 117], [117, 31], [31, 111], [221, 189], [189, 55], [55, 221], [240, 98], [98, 99], [99, 240], [142, 126], [126, 100], [100, 142], [219, 166], [166, 218], [218, 219], [112, 155], [155, 26], [26, 112], [198, 209], [209, 131], [131, 198], [169, 135], [135, 150], [150, 169], [114, 47], [47, 217], [217, 114], [224, 223], [223, 53], [53, 224], [220, 45], [45, 134], [134, 220], [32, 211], [211, 140], [140, 32], [109, 67], [67, 108], [108, 109], [146, 43], [43, 91], [91, 146], [231, 230], [230, 120], [120, 231], [113, 226], [226, 247], [247, 113], [105, 63], [63, 52], [52, 105], [241, 238], [238, 242], [242, 241], [124, 46], [46, 156], [156, 124], [95, 78], [78, 96], [96, 95], [70, 46], [46, 63], [63, 70], [116, 143], [143, 227], [227, 116], [116, 123], [123, 111], [111, 116], [1, 44], [44, 19], [19, 1], [3, 236], [236, 51], [51, 3], [207, 216], [216, 205], [205, 207], [26, 154], [154, 22], [22, 26], [165, 39], [39, 167], [167, 165], [199, 200], [200, 208], [208, 199], [101, 36], [36, 100], [100, 101], [43, 57], [57, 202], [202, 43], [242, 20], [20, 99], [99, 242], [56, 28], [28, 157], [157, 56], [124, 35], [35, 113], [113, 124], [29, 160], [160, 27], [27, 29], [211, 204], [204, 210], [210, 211], [124, 113], [113, 46], [46, 124], [106, 43], [43, 204], [204, 106], [96, 62], [62, 77], [77, 96], [227, 137], [137, 116], [116, 227], [73, 41], [41, 72], [72, 73], [36, 203], [203, 142], [142, 36], [235, 64], [64, 240], [240, 235], [48, 49], [49, 64], [64, 48], [42, 41], [41, 74], [74, 42], [214, 212], [212, 207], [207, 214], [183, 42], [42, 184], [184, 183], [210, 169], [169, 211], [211, 210], [140, 170], [170, 176], [176, 140], [104, 105], [105, 69], [69, 104], [193, 122], [122, 168], [168, 193], [50, 123], [123, 187], [187, 50], [89, 96], [96, 90], [90, 89], [66, 65], [65, 107], [107, 66], [179, 89], [89, 180], [180, 179], [119, 101], [101, 120], [120, 119], [68, 63], [63, 104], [104, 68], [234, 93], [93, 227], [227, 234], [16, 15], [15, 85], [85, 16], [209, 129], [129, 49], [49, 209], [15, 14], [14, 86], [86, 15], [107, 55], [55, 9], [9, 107], [120, 100], [100, 121], [121, 120], [153, 145], [145, 22], [22, 153], [178, 88], [88, 179], [179, 178], [197, 6], [6, 196], [196, 197], [89, 88], [88, 96], [96, 89], [135, 138], [138, 136], [136, 135], [138, 215], [215, 172], [172, 138], [218, 115], [115, 219], [219, 218], [41, 42], [42, 81], [81, 41], [5, 195], [195, 51], [51, 5], [57, 43], [43, 61], [61, 57], [208, 171], [171, 199], [199, 208], [41, 81], [81, 38], [38, 41], [224, 53], [53, 225], [225, 224], [24, 144], [144, 110], [110, 24], [105, 52], [52, 66], [66, 105], [118, 229], [229, 117], [117, 118], [227, 34], [34, 234], [234, 227], [66, 107], [107, 69], [69, 66], [10, 109], [109, 151], [151, 10], [219, 48], [48, 235], [235, 219], [183, 62], [62, 191], [191, 183], [142, 129], [129, 126], [126, 142], [116, 111], [111, 143], [143, 116], [118, 117], [117, 50], [50, 118], [223, 222], [222, 52], [52, 223], [94, 19], [19, 141], [141, 94], [222, 221], [221, 65], [65, 222], [196, 3], [3, 197], [197, 196], [45, 220], [220, 44], [44, 45], [156, 70], [70, 139], [139, 156], [188, 122], [122, 245], [245, 188], [139, 71], [71, 162], [162, 139], [149, 170], [170, 150], [150, 149], [122, 188], [188, 196], [196, 122], [206, 216], [216, 92], [92, 206], [164, 2], [2, 167], [167, 164], [242, 141], [141, 241], [241, 242], [0, 164], [164, 37], [37, 0], [11, 72], [72, 12], [12, 11], [12, 38], [38, 13], [13, 12], [70, 63], [63, 71], [71, 70], [31, 226], [226, 111], [111, 31], [36, 101], [101, 205], [205, 36], [203, 206], [206, 165], [165, 203], [126, 209], [209, 217], [217, 126], [98, 165], [165, 97], [97, 98], [237, 220], [220, 218], [218, 237], [237, 239], [239, 241], [241, 237], [210, 214], [214, 169], [169, 210], [140, 171], [171, 32], [32, 140], [241, 125], [125, 237], [237, 241], [179, 86], [86, 178], [178, 179], [180, 85], [85, 179], [179, 180], [181, 84], [84, 180], [180, 181], [182, 83], [83, 181], [181, 182], [194, 201], [201, 182], [182, 194], [177, 137], [137, 132], [132, 177], [184, 76], [76, 183], [183, 184], [185, 61], [61, 184], [184, 185], [186, 57], [57, 185], [185, 186], [216, 212], [212, 186], [186, 216], [192, 214], [214, 187], [187, 192], [139, 34], [34, 156], [156, 139], [218, 79], [79, 237], [237, 218], [147, 123], [123, 177], [177, 147], [45, 44], [44, 4], [4, 45], [208, 201], [201, 32], [32, 208], [98, 64], [64, 129], [129, 98], [192, 213], [213, 138], [138, 192], [235, 59], [59, 219], [219, 235], [141, 242], [242, 97], [97, 141], [97, 2], [2, 141], [141, 97], [240, 75], [75, 235], [235, 240], [229, 24], [24, 228], [228, 229], [31, 25], [25, 226], [226, 31], [230, 23], [23, 229], [229, 230], [231, 22], [22, 230], [230, 231], [232, 26], [26, 231], [231, 232], [233, 112], [112, 232], [232, 233], [244, 189], [189, 243], [243, 244], [189, 221], [221, 190], [190, 189], [222, 28], [28, 221], [221, 222], [223, 27], [27, 222], [222, 223], [224, 29], [29, 223], [223, 224], [225, 30], [30, 224], [224, 225], [113, 247], [247, 225], [225, 113], [99, 60], [60, 240], [240, 99], [213, 147], [147, 215], [215, 213], [60, 20], [20, 166], [166, 60], [192, 187], [187, 213], [213, 192], [243, 112], [112, 244], [244, 243], [244, 233], [233, 245], [245, 244], [245, 128], [128, 188], [188, 245], [188, 114], [114, 174], [174, 188], [134, 131], [131, 220], [220, 134], [174, 217], [217, 236], [236, 174], [236, 198], [198, 134], [134, 236], [215, 177], [177, 58], [58, 215], [156, 143], [143, 124], [124, 156], [25, 110], [110, 7], [7, 25], [31, 228], [228, 25], [25, 31], [264, 356], [356, 368], [368, 264], [0, 11], [11, 267], [267, 0], [451, 452], [452, 349], [349, 451], [267, 302], [302, 269], [269, 267], [350, 357], [357, 277], [277, 350], [350, 452], [452, 357], [357, 350], [299, 333], [333, 297], [297, 299], [396, 175], [175, 377], [377, 396], [280, 347], [347, 330], [330, 280], [269, 303], [303, 270], [270, 269], [151, 9], [9, 337], [337, 151], [344, 278], [278, 360], [360, 344], [424, 418], [418, 431], [431, 424], [270, 304], [304, 409], [409, 270], [272, 310], [310, 407], [407, 272], [322, 270], [270, 410], [410, 322], [449, 450], [450, 347], [347, 449], [432, 422], [422, 434], [434, 432], [18, 313], [313, 17], [17, 18], [291, 306], [306, 375], [375, 291], [259, 387], [387, 260], [260, 259], [424, 335], [335, 418], [418, 424], [434, 364], [364, 416], [416, 434], [391, 423], [423, 327], [327, 391], [301, 251], [251, 298], [298, 301], [275, 281], [281, 4], [4, 275], [254, 373], [373, 253], [253, 254], [375, 307], [307, 321], [321, 375], [280, 425], [425, 411], [411, 280], [200, 421], [421, 18], [18, 200], [335, 321], [321, 406], [406, 335], [321, 320], [320, 405], [405, 321], [314, 315], [315, 17], [17, 314], [423, 426], [426, 266], [266, 423], [396, 377], [377, 369], [369, 396], [270, 322], [322, 269], [269, 270], [413, 417], [417, 464], [464, 413], [385, 386], [386, 258], [258, 385], [248, 456], [456, 419], [419, 248], [298, 284], [284, 333], [333, 298], [168, 417], [417, 8], [8, 168], [448, 346], [346, 261], [261, 448], [417, 413], [413, 285], [285, 417], [326, 327], [327, 328], [328, 326], [277, 355], [355, 329], [329, 277], [309, 392], [392, 438], [438, 309], [381, 382], [382, 256], [256, 381], [279, 429], [429, 360], [360, 279], [365, 364], [364, 379], [379, 365], [355, 277], [277, 437], [437, 355], [282, 443], [443, 283], [283, 282], [281, 275], [275, 363], [363, 281], [395, 431], [431, 369], [369, 395], [299, 297], [297, 337], [337, 299], [335, 273], [273, 321], [321, 335], [348, 450], [450, 349], [349, 348], [359, 446], [446, 467], [467, 359], [283, 293], [293, 282], [282, 283], [250, 458], [458, 462], [462, 250], [300, 276], [276, 383], [383, 300], [292, 308], [308, 325], [325, 292], [283, 276], [276, 293], [293, 283], [264, 372], [372, 447], [447, 264], [346, 352], [352, 340], [340, 346], [354, 274], [274, 19], [19, 354], [363, 456], [456, 281], [281, 363], [426, 436], [436, 425], [425, 426], [380, 381], [381, 252], [252, 380], [267, 269], [269, 393], [393, 267], [421, 200], [200, 428], [428, 421], [371, 266], [266, 329], [329, 371], [432, 287], [287, 422], [422, 432], [290, 250], [250, 328], [328, 290], [385, 258], [258, 384], [384, 385], [446, 265], [265, 342], [342, 446], [386, 387], [387, 257], [257, 386], [422, 424], [424, 430], [430, 422], [445, 342], [342, 276], [276, 445], [422, 273], [273, 424], [424, 422], [306, 292], [292, 307], [307, 306], [352, 366], [366, 345], [345, 352], [268, 271], [271, 302], [302, 268], [358, 423], [423, 371], [371, 358], [327, 294], [294, 460], [460, 327], [331, 279], [279, 294], [294, 331], [303, 271], [271, 304], [304, 303], [436, 432], [432, 427], [427, 436], [304, 272], [272, 408], [408, 304], [395, 394], [394, 431], [431, 395], [378, 395], [395, 400], [400, 378], [296, 334], [334, 299], [299, 296], [6, 351], [351, 168], [168, 6], [376, 352], [352, 411], [411, 376], [307, 325], [325, 320], [320, 307], [285, 295], [295, 336], [336, 285], [320, 319], [319, 404], [404, 320], [329, 330], [330, 349], [349, 329], [334, 293], [293, 333], [333, 334], [366, 323], [323, 447], [447, 366], [316, 15], [15, 315], [315, 316], [331, 358], [358, 279], [279, 331], [317, 14], [14, 316], [316, 317], [8, 285], [285, 9], [9, 8], [277, 329], [329, 350], [350, 277], [253, 374], [374, 252], [252, 253], [319, 318], [318, 403], [403, 319], [351, 6], [6, 419], [419, 351], [324, 318], [318, 325], [325, 324], [397, 367], [367, 365], [365, 397], [288, 435], [435, 397], [397, 288], [278, 344], [344, 439], [439, 278], [310, 272], [272, 311], [311, 310], [248, 195], [195, 281], [281, 248], [375, 273], [273, 291], [291, 375], [175, 396], [396, 199], [199, 175], [312, 311], [311, 268], [268, 312], [276, 283], [283, 445], [445, 276], [390, 373], [373, 339], [339, 390], [295, 282], [282, 296], [296, 295], [448, 449], [449, 346], [346, 448], [356, 264], [264, 454], [454, 356], [337, 336], [336, 299], [299, 337], [337, 338], [338, 151], [151, 337], [294, 278], [278, 455], [455, 294], [308, 292], [292, 415], [415, 308], [429, 358], [358, 355], [355, 429], [265, 340], [340, 372], [372, 265], [352, 346], [346, 280], [280, 352], [295, 442], [442, 282], [282, 295], [354, 19], [19, 370], [370, 354], [285, 441], [441, 295], [295, 285], [195, 248], [248, 197], [197, 195], [457, 440], [440, 274], [274, 457], [301, 300], [300, 368], [368, 301], [417, 351], [351, 465], [465, 417], [251, 301], [301, 389], [389, 251], [394, 395], [395, 379], [379, 394], [399, 412], [412, 419], [419, 399], [410, 436], [436, 322], [322, 410], [326, 2], [2, 393], [393, 326], [354, 370], [370, 461], [461, 354], [393, 164], [164, 267], [267, 393], [268, 302], [302, 12], [12, 268], [312, 268], [268, 13], [13, 312], [298, 293], [293, 301], [301, 298], [265, 446], [446, 340], [340, 265], [280, 330], [330, 425], [425, 280], [322, 426], [426, 391], [391, 322], [420, 429], [429, 437], [437, 420], [393, 391], [391, 326], [326, 393], [344, 440], [440, 438], [438, 344], [458, 459], [459, 461], [461, 458], [364, 434], [434, 394], [394, 364], [428, 396], [396, 262], [262, 428], [274, 354], [354, 457], [457, 274], [317, 316], [316, 402], [402, 317], [316, 315], [315, 403], [403, 316], [315, 314], [314, 404], [404, 315], [314, 313], [313, 405], [405, 314], [313, 421], [421, 406], [406, 313], [323, 366], [366, 361], [361, 323], [292, 306], [306, 407], [407, 292], [306, 291], [291, 408], [408, 306], [291, 287], [287, 409], [409, 291], [287, 432], [432, 410], [410, 287], [427, 434], [434, 411], [411, 427], [372, 264], [264, 383], [383, 372], [459, 309], [309, 457], [457, 459], [366, 352], [352, 401], [401, 366], [1, 274], [274, 4], [4, 1], [418, 421], [421, 262], [262, 418], [331, 294], [294, 358], [358, 331], [435, 433], [433, 367], [367, 435], [392, 289], [289, 439], [439, 392], [328, 462], [462, 326], [326, 328], [94, 2], [2, 370], [370, 94], [289, 305], [305, 455], [455, 289], [339, 254], [254, 448], [448, 339], [359, 255], [255, 446], [446, 359], [254, 253], [253, 449], [449, 254], [253, 252], [252, 450], [450, 253], [252, 256], [256, 451], [451, 252], [256, 341], [341, 452], [452, 256], [414, 413], [413, 463], [463, 414], [286, 441], [441, 414], [414, 286], [286, 258], [258, 441], [441, 286], [258, 257], [257, 442], [442, 258], [257, 259], [259, 443], [443, 257], [259, 260], [260, 444], [444, 259], [260, 467], [467, 445], [445, 260], [309, 459], [459, 250], [250, 309], [305, 289], [289, 290], [290, 305], [305, 290], [290, 460], [460, 305], [401, 376], [376, 435], [435, 401], [309, 250], [250, 392], [392, 309], [376, 411], [411, 433], [433, 376], [453, 341], [341, 464], [464, 453], [357, 453], [453, 465], [465, 357], [343, 357], [357, 412], [412, 343], [437, 343], [343, 399], [399, 437], [344, 360], [360, 440], [440, 344], [420, 437], [437, 456], [456, 420], [360, 420], [420, 363], [363, 360], [361, 401], [401, 288], [288, 361], [265, 372], [372, 353], [353, 265], [390, 339], [339, 249], [249, 390], [339, 448], [448, 255], [255, 339]);
function Zb(t) {
  t.j = { faceLandmarks: [], faceBlendshapes: [], facialTransformationMatrixes: [] };
}
var ct = class extends Dn {
  constructor(t, a) {
    super(new ua(t, a), "image_in", "norm_rect", !1), this.j = { faceLandmarks: [], faceBlendshapes: [], facialTransformationMatrixes: [] }, this.outputFacialTransformationMatrixes = this.outputFaceBlendshapes = !1, be(t = this.h = new Cy(), 0, 1, a = new mt()), this.A = new zy(), be(this.h, 0, 3, this.A), this.u = new Du(), be(this.h, 0, 2, this.u), Za(this.u, 4, 1), me(this.u, 2, 0.5), me(this.A, 2, 0.5), me(this.h, 4, 0.5);
  }
  get baseOptions() {
    return Ye(this.h, mt, 1);
  }
  set baseOptions(t) {
    be(this.h, 0, 1, t);
  }
  o(t) {
    return "numFaces" in t && Za(this.u, 4, t.numFaces ?? 1), "minFaceDetectionConfidence" in t && me(this.u, 2, t.minFaceDetectionConfidence ?? 0.5), "minTrackingConfidence" in t && me(this.h, 4, t.minTrackingConfidence ?? 0.5), "minFacePresenceConfidence" in t && me(this.A, 2, t.minFacePresenceConfidence ?? 0.5), "outputFaceBlendshapes" in t && (this.outputFaceBlendshapes = !!t.outputFaceBlendshapes), "outputFacialTransformationMatrixes" in t && (this.outputFacialTransformationMatrixes = !!t.outputFacialTransformationMatrixes), this.l(t);
  }
  F(t, a) {
    return Zb(this), da(this, t, a), this.j;
  }
  G(t, a, i) {
    return Zb(this), ka(this, t, i, a), this.j;
  }
  m() {
    var t = new Bn();
    dt(t, "image_in"), dt(t, "norm_rect"), Ve(t, "face_landmarks");
    const a = new _n();
    Sa(a, aS, this.h);
    const i = new pn();
    On(i, 2, "mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"), ot(i, "IMAGE:image_in"), ot(i, "NORM_RECT:norm_rect"), Le(i, "NORM_LANDMARKS:face_landmarks"), i.o(a), ea(t, i), this.g.attachProtoVectorListener("face_landmarks", ((o, s) => {
      for (const u of o) o = ds(u), this.j.faceLandmarks.push(_u(o));
      ie(this, s);
    })), this.g.attachEmptyPacketListener("face_landmarks", ((o) => {
      ie(this, o);
    })), this.outputFaceBlendshapes && (Ve(t, "blendshapes"), Le(i, "BLENDSHAPES:blendshapes"), this.g.attachProtoVectorListener("blendshapes", ((o, s) => {
      if (this.outputFaceBlendshapes) for (const u of o) o = Mu(u), this.j.faceBlendshapes.push(Qp(o.g() ?? []));
      ie(this, s);
    })), this.g.attachEmptyPacketListener("blendshapes", ((o) => {
      ie(this, o);
    }))), this.outputFacialTransformationMatrixes && (Ve(t, "face_geometry"), Le(i, "FACE_GEOMETRY:face_geometry"), this.g.attachProtoVectorListener("face_geometry", ((o, s) => {
      if (this.outputFacialTransformationMatrixes) for (const u of o) (o = Ye(o = nS(u), F9, 2)) && this.j.facialTransformationMatrixes.push({ rows: Wn(o, 1) ?? 0 ?? 0, columns: Wn(o, 2) ?? 0 ?? 0, data: li(o, 3, va, ii()).slice() ?? [] });
      ie(this, s);
    })), this.g.attachEmptyPacketListener("face_geometry", ((o) => {
      ie(this, o);
    }))), t = t.g(), this.setGraph(new Uint8Array(t), !0);
  }
};
ct.prototype.detectForVideo = ct.prototype.G, ct.prototype.detect = ct.prototype.F, ct.prototype.setOptions = ct.prototype.o, ct.createFromModelPath = function(t, a) {
  return Ue(ct, t, { baseOptions: { modelAssetPath: a } });
}, ct.createFromModelBuffer = function(t, a) {
  return Ue(ct, t, { baseOptions: { modelAssetBuffer: a } });
}, ct.createFromOptions = function(t, a) {
  return Ue(ct, t, a);
}, ct.FACE_LANDMARKS_LIPS = Kp, ct.FACE_LANDMARKS_LEFT_EYE = Jp, ct.FACE_LANDMARKS_LEFT_EYEBROW = Pp, ct.FACE_LANDMARKS_LEFT_IRIS = i4, ct.FACE_LANDMARKS_RIGHT_EYE = Wp, ct.FACE_LANDMARKS_RIGHT_EYEBROW = $p, ct.FACE_LANDMARKS_RIGHT_IRIS = l4, ct.FACE_LANDMARKS_FACE_OVAL = e1, ct.FACE_LANDMARKS_CONTOURS = o4, ct.FACE_LANDMARKS_TESSELATION = s4;
var t1 = ca([0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8], [5, 9], [9, 10], [10, 11], [11, 12], [9, 13], [13, 14], [14, 15], [15, 16], [13, 17], [0, 17], [17, 18], [18, 19], [19, 20]);
function Kb(t) {
  t.gestures = [], t.landmarks = [], t.worldLandmarks = [], t.handedness = [];
}
function Jb(t) {
  return t.gestures.length === 0 ? { gestures: [], landmarks: [], worldLandmarks: [], handedness: [], handednesses: [] } : { gestures: t.gestures, landmarks: t.landmarks, worldLandmarks: t.worldLandmarks, handedness: t.handedness, handednesses: t.handedness };
}
function Pb(t, a = !0) {
  const i = [];
  for (const s of t) {
    var o = Mu(s);
    t = [];
    for (const u of o.g()) o = a && Wn(u, 1) != null ? Wn(u, 1) ?? 0 : -1, t.push({ score: yt(u, 2) ?? 0, index: o, categoryName: Zt(lt(u, 3)) ?? "" ?? "", displayName: Zt(lt(u, 4)) ?? "" ?? "" });
    i.push(t);
  }
  return i;
}
var An = class extends Dn {
  constructor(t, a) {
    super(new ua(t, a), "image_in", "norm_rect", !1), this.gestures = [], this.landmarks = [], this.worldLandmarks = [], this.handedness = [], be(t = this.j = new My(), 0, 1, a = new mt()), this.u = new qp(), be(this.j, 0, 2, this.u), this.D = new Yp(), be(this.u, 0, 3, this.D), this.A = new Oy(), be(this.u, 0, 2, this.A), this.h = new rS(), be(this.j, 0, 3, this.h), me(this.A, 2, 0.5), me(this.u, 4, 0.5), me(this.D, 2, 0.5);
  }
  get baseOptions() {
    return Ye(this.j, mt, 1);
  }
  set baseOptions(t) {
    be(this.j, 0, 1, t);
  }
  o(t) {
    if (Za(this.A, 3, t.numHands ?? 1), "minHandDetectionConfidence" in t && me(this.A, 2, t.minHandDetectionConfidence ?? 0.5), "minTrackingConfidence" in t && me(this.u, 4, t.minTrackingConfidence ?? 0.5), "minHandPresenceConfidence" in t && me(this.D, 2, t.minHandPresenceConfidence ?? 0.5), t.cannedGesturesClassifierOptions) {
      var a = new cl(), i = a, o = qh(t.cannedGesturesClassifierOptions, Ye(this.h, cl, 3)?.l());
      be(i, 0, 2, o), be(this.h, 0, 3, a);
    } else t.cannedGesturesClassifierOptions === void 0 && Ye(this.h, cl, 3)?.g();
    return t.customGesturesClassifierOptions ? (be(i = a = new cl(), 0, 2, o = qh(t.customGesturesClassifierOptions, Ye(this.h, cl, 4)?.l())), be(this.h, 0, 4, a)) : t.customGesturesClassifierOptions === void 0 && Ye(this.h, cl, 4)?.g(), this.l(t);
  }
  Ha(t, a) {
    return Kb(this), da(this, t, a), Jb(this);
  }
  Ia(t, a, i) {
    return Kb(this), ka(this, t, i, a), Jb(this);
  }
  m() {
    var t = new Bn();
    dt(t, "image_in"), dt(t, "norm_rect"), Ve(t, "hand_gestures"), Ve(t, "hand_landmarks"), Ve(t, "world_hand_landmarks"), Ve(t, "handedness");
    const a = new _n();
    Sa(a, iS, this.j);
    const i = new pn();
    On(i, 2, "mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"), ot(i, "IMAGE:image_in"), ot(i, "NORM_RECT:norm_rect"), Le(i, "HAND_GESTURES:hand_gestures"), Le(i, "LANDMARKS:hand_landmarks"), Le(i, "WORLD_LANDMARKS:world_hand_landmarks"), Le(i, "HANDEDNESS:handedness"), i.o(a), ea(t, i), this.g.attachProtoVectorListener("hand_landmarks", ((o, s) => {
      for (const u of o) {
        o = ds(u);
        const f = [];
        for (const p of Fa(o, ky, 1)) f.push({ x: yt(p, 1) ?? 0, y: yt(p, 2) ?? 0, z: yt(p, 3) ?? 0, visibility: yt(p, 4) ?? 0 });
        this.landmarks.push(f);
      }
      ie(this, s);
    })), this.g.attachEmptyPacketListener("hand_landmarks", ((o) => {
      ie(this, o);
    })), this.g.attachProtoVectorListener("world_hand_landmarks", ((o, s) => {
      for (const u of o) {
        o = pl(u);
        const f = [];
        for (const p of Fa(o, Ey, 1)) f.push({ x: yt(p, 1) ?? 0, y: yt(p, 2) ?? 0, z: yt(p, 3) ?? 0, visibility: yt(p, 4) ?? 0 });
        this.worldLandmarks.push(f);
      }
      ie(this, s);
    })), this.g.attachEmptyPacketListener("world_hand_landmarks", ((o) => {
      ie(this, o);
    })), this.g.attachProtoVectorListener("hand_gestures", ((o, s) => {
      this.gestures.push(...Pb(o, !1)), ie(this, s);
    })), this.g.attachEmptyPacketListener("hand_gestures", ((o) => {
      ie(this, o);
    })), this.g.attachProtoVectorListener("handedness", ((o, s) => {
      this.handedness.push(...Pb(o)), ie(this, s);
    })), this.g.attachEmptyPacketListener("handedness", ((o) => {
      ie(this, o);
    })), t = t.g(), this.setGraph(new Uint8Array(t), !0);
  }
};
function Wb(t) {
  return { landmarks: t.landmarks, worldLandmarks: t.worldLandmarks, handednesses: t.handedness, handedness: t.handedness };
}
An.prototype.recognizeForVideo = An.prototype.Ia, An.prototype.recognize = An.prototype.Ha, An.prototype.setOptions = An.prototype.o, An.createFromModelPath = function(t, a) {
  return Ue(An, t, { baseOptions: { modelAssetPath: a } });
}, An.createFromModelBuffer = function(t, a) {
  return Ue(An, t, { baseOptions: { modelAssetBuffer: a } });
}, An.createFromOptions = function(t, a) {
  return Ue(An, t, a);
}, An.HAND_CONNECTIONS = t1;
var Nn = class extends Dn {
  constructor(t, a) {
    super(new ua(t, a), "image_in", "norm_rect", !1), this.landmarks = [], this.worldLandmarks = [], this.handedness = [], be(t = this.h = new qp(), 0, 1, a = new mt()), this.u = new Yp(), be(this.h, 0, 3, this.u), this.j = new Oy(), be(this.h, 0, 2, this.j), Za(this.j, 3, 1), me(this.j, 2, 0.5), me(this.u, 2, 0.5), me(this.h, 4, 0.5);
  }
  get baseOptions() {
    return Ye(this.h, mt, 1);
  }
  set baseOptions(t) {
    be(this.h, 0, 1, t);
  }
  o(t) {
    return "numHands" in t && Za(this.j, 3, t.numHands ?? 1), "minHandDetectionConfidence" in t && me(this.j, 2, t.minHandDetectionConfidence ?? 0.5), "minTrackingConfidence" in t && me(this.h, 4, t.minTrackingConfidence ?? 0.5), "minHandPresenceConfidence" in t && me(this.u, 2, t.minHandPresenceConfidence ?? 0.5), this.l(t);
  }
  F(t, a) {
    return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], da(this, t, a), Wb(this);
  }
  G(t, a, i) {
    return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], ka(this, t, i, a), Wb(this);
  }
  m() {
    var t = new Bn();
    dt(t, "image_in"), dt(t, "norm_rect"), Ve(t, "hand_landmarks"), Ve(t, "world_hand_landmarks"), Ve(t, "handedness");
    const a = new _n();
    Sa(a, lS, this.h);
    const i = new pn();
    On(i, 2, "mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"), ot(i, "IMAGE:image_in"), ot(i, "NORM_RECT:norm_rect"), Le(i, "LANDMARKS:hand_landmarks"), Le(i, "WORLD_LANDMARKS:world_hand_landmarks"), Le(i, "HANDEDNESS:handedness"), i.o(a), ea(t, i), this.g.attachProtoVectorListener("hand_landmarks", ((o, s) => {
      for (const u of o) o = ds(u), this.landmarks.push(_u(o));
      ie(this, s);
    })), this.g.attachEmptyPacketListener("hand_landmarks", ((o) => {
      ie(this, o);
    })), this.g.attachProtoVectorListener("world_hand_landmarks", ((o, s) => {
      for (const u of o) o = pl(u), this.worldLandmarks.push(Fo(o));
      ie(this, s);
    })), this.g.attachEmptyPacketListener("world_hand_landmarks", ((o) => {
      ie(this, o);
    })), this.g.attachProtoVectorListener("handedness", ((o, s) => {
      var u = this.handedness, f = u.push;
      const p = [];
      for (const g of o) {
        o = Mu(g);
        const v = [];
        for (const y of o.g()) v.push({ score: yt(y, 2) ?? 0, index: Wn(y, 1) ?? 0 ?? -1, categoryName: Zt(lt(y, 3)) ?? "" ?? "", displayName: Zt(lt(y, 4)) ?? "" ?? "" });
        p.push(v);
      }
      f.call(u, ...p), ie(this, s);
    })), this.g.attachEmptyPacketListener("handedness", ((o) => {
      ie(this, o);
    })), t = t.g(), this.setGraph(new Uint8Array(t), !0);
  }
};
Nn.prototype.detectForVideo = Nn.prototype.G, Nn.prototype.detect = Nn.prototype.F, Nn.prototype.setOptions = Nn.prototype.o, Nn.createFromModelPath = function(t, a) {
  return Ue(Nn, t, { baseOptions: { modelAssetPath: a } });
}, Nn.createFromModelBuffer = function(t, a) {
  return Ue(Nn, t, { baseOptions: { modelAssetBuffer: a } });
}, Nn.createFromOptions = function(t, a) {
  return Ue(Nn, t, a);
}, Nn.HAND_CONNECTIONS = t1;
var c4 = ca([0, 1], [1, 2], [2, 3], [3, 7], [0, 4], [4, 5], [5, 6], [6, 8], [9, 10], [11, 12], [11, 13], [13, 15], [15, 17], [15, 19], [15, 21], [17, 19], [12, 14], [14, 16], [16, 18], [16, 20], [16, 22], [18, 20], [11, 23], [12, 24], [23, 24], [23, 25], [24, 26], [25, 27], [26, 28], [27, 29], [28, 30], [29, 31], [30, 32], [27, 31], [28, 32]);
function $b(t) {
  t.h = { faceLandmarks: [], faceBlendshapes: [], poseLandmarks: [], poseWorldLandmarks: [], poseSegmentationMasks: [], leftHandLandmarks: [], leftHandWorldLandmarks: [], rightHandLandmarks: [], rightHandWorldLandmarks: [] };
}
function ev(t) {
  try {
    if (!t.D) return t.h;
    t.D(t.h);
  } finally {
    Lu(t);
  }
}
function Hc(t, a) {
  t = ds(t), a.push(_u(t));
}
var it = class extends Dn {
  constructor(t, a) {
    super(new ua(t, a), "input_frames_image", null, !1), this.h = { faceLandmarks: [], faceBlendshapes: [], poseLandmarks: [], poseWorldLandmarks: [], poseSegmentationMasks: [], leftHandLandmarks: [], leftHandWorldLandmarks: [], rightHandLandmarks: [], rightHandWorldLandmarks: [] }, this.outputPoseSegmentationMasks = this.outputFaceBlendshapes = !1, be(t = this.j = new Uy(), 0, 1, a = new mt()), this.I = new Yp(), be(this.j, 0, 2, this.I), this.W = new oS(), be(this.j, 0, 3, this.W), this.u = new Du(), be(this.j, 0, 4, this.u), this.O = new zy(), be(this.j, 0, 5, this.O), this.A = new By(), be(this.j, 0, 6, this.A), this.M = new Ly(), be(this.j, 0, 7, this.M), me(this.u, 2, 0.5), me(this.u, 3, 0.3), me(this.O, 2, 0.5), me(this.A, 2, 0.5), me(this.A, 3, 0.3), me(this.M, 2, 0.5), me(this.I, 2, 0.5);
  }
  get baseOptions() {
    return Ye(this.j, mt, 1);
  }
  set baseOptions(t) {
    be(this.j, 0, 1, t);
  }
  o(t) {
    return "minFaceDetectionConfidence" in t && me(this.u, 2, t.minFaceDetectionConfidence ?? 0.5), "minFaceSuppressionThreshold" in t && me(this.u, 3, t.minFaceSuppressionThreshold ?? 0.3), "minFacePresenceConfidence" in t && me(this.O, 2, t.minFacePresenceConfidence ?? 0.5), "outputFaceBlendshapes" in t && (this.outputFaceBlendshapes = !!t.outputFaceBlendshapes), "minPoseDetectionConfidence" in t && me(this.A, 2, t.minPoseDetectionConfidence ?? 0.5), "minPoseSuppressionThreshold" in t && me(this.A, 3, t.minPoseSuppressionThreshold ?? 0.3), "minPosePresenceConfidence" in t && me(this.M, 2, t.minPosePresenceConfidence ?? 0.5), "outputPoseSegmentationMasks" in t && (this.outputPoseSegmentationMasks = !!t.outputPoseSegmentationMasks), "minHandLandmarksConfidence" in t && me(this.I, 2, t.minHandLandmarksConfidence ?? 0.5), this.l(t);
  }
  F(t, a, i) {
    const o = typeof a != "function" ? a : {};
    return this.D = typeof a == "function" ? a : i, $b(this), da(this, t, o), ev(this);
  }
  G(t, a, i, o) {
    const s = typeof i != "function" ? i : {};
    return this.D = typeof i == "function" ? i : o, $b(this), ka(this, t, s, a), ev(this);
  }
  m() {
    var t = new Bn();
    dt(t, "input_frames_image"), Ve(t, "pose_landmarks"), Ve(t, "pose_world_landmarks"), Ve(t, "face_landmarks"), Ve(t, "left_hand_landmarks"), Ve(t, "left_hand_world_landmarks"), Ve(t, "right_hand_landmarks"), Ve(t, "right_hand_world_landmarks");
    const a = new _n(), i = new kb();
    On(i, 1, "type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"), (function(s, u) {
      if (u != null) if (Array.isArray(u)) We(s, 2, wu(u, 0, Wo));
      else {
        if (!(typeof u == "string" || u instanceof ya || sp(u))) throw Error("invalid value in Any.value field: " + u + " expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");
        jr(s, 2, up(u, !1), pi());
      }
    })(i, this.j.g());
    const o = new pn();
    On(o, 2, "mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"), Ap(o, 8, kb, i), ot(o, "IMAGE:input_frames_image"), Le(o, "POSE_LANDMARKS:pose_landmarks"), Le(o, "POSE_WORLD_LANDMARKS:pose_world_landmarks"), Le(o, "FACE_LANDMARKS:face_landmarks"), Le(o, "LEFT_HAND_LANDMARKS:left_hand_landmarks"), Le(o, "LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"), Le(o, "RIGHT_HAND_LANDMARKS:right_hand_landmarks"), Le(o, "RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"), o.o(a), ea(t, o), Bu(this, t), this.g.attachProtoListener("pose_landmarks", ((s, u) => {
      Hc(s, this.h.poseLandmarks), ie(this, u);
    })), this.g.attachEmptyPacketListener("pose_landmarks", ((s) => {
      ie(this, s);
    })), this.g.attachProtoListener("pose_world_landmarks", ((s, u) => {
      var f = this.h.poseWorldLandmarks;
      s = pl(s), f.push(Fo(s)), ie(this, u);
    })), this.g.attachEmptyPacketListener("pose_world_landmarks", ((s) => {
      ie(this, s);
    })), this.outputPoseSegmentationMasks && (Le(o, "POSE_SEGMENTATION_MASK:pose_segmentation_mask"), Nl(this, "pose_segmentation_mask"), this.g.Z("pose_segmentation_mask", ((s, u) => {
      this.h.poseSegmentationMasks = [jl(this, s, !0, !this.D)], ie(this, u);
    })), this.g.attachEmptyPacketListener("pose_segmentation_mask", ((s) => {
      this.h.poseSegmentationMasks = [], ie(this, s);
    }))), this.g.attachProtoListener("face_landmarks", ((s, u) => {
      Hc(s, this.h.faceLandmarks), ie(this, u);
    })), this.g.attachEmptyPacketListener("face_landmarks", ((s) => {
      ie(this, s);
    })), this.outputFaceBlendshapes && (Ve(t, "extra_blendshapes"), Le(o, "FACE_BLENDSHAPES:extra_blendshapes"), this.g.attachProtoListener("extra_blendshapes", ((s, u) => {
      var f = this.h.faceBlendshapes;
      this.outputFaceBlendshapes && (s = Mu(s), f.push(Qp(s.g() ?? []))), ie(this, u);
    })), this.g.attachEmptyPacketListener("extra_blendshapes", ((s) => {
      ie(this, s);
    }))), this.g.attachProtoListener("left_hand_landmarks", ((s, u) => {
      Hc(s, this.h.leftHandLandmarks), ie(this, u);
    })), this.g.attachEmptyPacketListener("left_hand_landmarks", ((s) => {
      ie(this, s);
    })), this.g.attachProtoListener("left_hand_world_landmarks", ((s, u) => {
      var f = this.h.leftHandWorldLandmarks;
      s = pl(s), f.push(Fo(s)), ie(this, u);
    })), this.g.attachEmptyPacketListener("left_hand_world_landmarks", ((s) => {
      ie(this, s);
    })), this.g.attachProtoListener("right_hand_landmarks", ((s, u) => {
      Hc(s, this.h.rightHandLandmarks), ie(this, u);
    })), this.g.attachEmptyPacketListener("right_hand_landmarks", ((s) => {
      ie(this, s);
    })), this.g.attachProtoListener("right_hand_world_landmarks", ((s, u) => {
      var f = this.h.rightHandWorldLandmarks;
      s = pl(s), f.push(Fo(s)), ie(this, u);
    })), this.g.attachEmptyPacketListener("right_hand_world_landmarks", ((s) => {
      ie(this, s);
    })), t = t.g(), this.setGraph(new Uint8Array(t), !0);
  }
};
it.prototype.detectForVideo = it.prototype.G, it.prototype.detect = it.prototype.F, it.prototype.setOptions = it.prototype.o, it.createFromModelPath = function(t, a) {
  return Ue(it, t, { baseOptions: { modelAssetPath: a } });
}, it.createFromModelBuffer = function(t, a) {
  return Ue(it, t, { baseOptions: { modelAssetBuffer: a } });
}, it.createFromOptions = function(t, a) {
  return Ue(it, t, a);
}, it.HAND_CONNECTIONS = t1, it.POSE_CONNECTIONS = c4, it.FACE_LANDMARKS_LIPS = Kp, it.FACE_LANDMARKS_LEFT_EYE = Jp, it.FACE_LANDMARKS_LEFT_EYEBROW = Pp, it.FACE_LANDMARKS_LEFT_IRIS = i4, it.FACE_LANDMARKS_RIGHT_EYE = Wp, it.FACE_LANDMARKS_RIGHT_EYEBROW = $p, it.FACE_LANDMARKS_RIGHT_IRIS = l4, it.FACE_LANDMARKS_FACE_OVAL = e1, it.FACE_LANDMARKS_CONTOURS = o4, it.FACE_LANDMARKS_TESSELATION = s4;
var Jn = class extends Dn {
  constructor(t, a) {
    super(new ua(t, a), "input_image", "norm_rect", !0), this.j = { classifications: [] }, be(t = this.h = new Hy(), 0, 1, a = new mt());
  }
  get baseOptions() {
    return Ye(this.h, mt, 1);
  }
  set baseOptions(t) {
    be(this.h, 0, 1, t);
  }
  o(t) {
    return be(this.h, 0, 2, qh(t, Ye(this.h, Hp, 2))), this.l(t);
  }
  sa(t, a) {
    return this.j = { classifications: [] }, da(this, t, a), this.j;
  }
  ta(t, a, i) {
    return this.j = { classifications: [] }, ka(this, t, i, a), this.j;
  }
  m() {
    var t = new Bn();
    dt(t, "input_image"), dt(t, "norm_rect"), Ve(t, "classifications");
    const a = new _n();
    Sa(a, sS, this.h);
    const i = new pn();
    On(i, 2, "mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"), ot(i, "IMAGE:input_image"), ot(i, "NORM_RECT:norm_rect"), Le(i, "CLASSIFICATIONS:classifications"), i.o(a), ea(t, i), this.g.attachProtoListener("classifications", ((o, s) => {
      this.j = pS(J9(o)), ie(this, s);
    })), this.g.attachEmptyPacketListener("classifications", ((o) => {
      ie(this, o);
    })), t = t.g(), this.setGraph(new Uint8Array(t), !0);
  }
};
Jn.prototype.classifyForVideo = Jn.prototype.ta, Jn.prototype.classify = Jn.prototype.sa, Jn.prototype.setOptions = Jn.prototype.o, Jn.createFromModelPath = function(t, a) {
  return Ue(Jn, t, { baseOptions: { modelAssetPath: a } });
}, Jn.createFromModelBuffer = function(t, a) {
  return Ue(Jn, t, { baseOptions: { modelAssetBuffer: a } });
}, Jn.createFromOptions = function(t, a) {
  return Ue(Jn, t, a);
};
var Tn = class extends Dn {
  constructor(t, a) {
    super(new ua(t, a), "image_in", "norm_rect", !0), this.h = new Gy(), this.embeddings = { embeddings: [] }, be(t = this.h, 0, 1, a = new mt());
  }
  get baseOptions() {
    return Ye(this.h, mt, 1);
  }
  set baseOptions(t) {
    be(this.h, 0, 1, t);
  }
  o(t) {
    var a = this.h, i = Ye(this.h, Mb, 2);
    return i = i ? i.clone() : new Mb(), t.l2Normalize !== void 0 ? We(i, 1, Po(t.l2Normalize)) : "l2Normalize" in t && We(i, 1), t.quantize !== void 0 ? We(i, 2, Po(t.quantize)) : "quantize" in t && We(i, 2), be(a, 0, 2, i), this.l(t);
  }
  za(t, a) {
    return da(this, t, a), this.embeddings;
  }
  Aa(t, a, i) {
    return ka(this, t, i, a), this.embeddings;
  }
  m() {
    var t = new Bn();
    dt(t, "image_in"), dt(t, "norm_rect"), Ve(t, "embeddings_out");
    const a = new _n();
    Sa(a, cS, this.h);
    const i = new pn();
    On(i, 2, "mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"), ot(i, "IMAGE:image_in"), ot(i, "NORM_RECT:norm_rect"), Le(i, "EMBEDDINGS:embeddings_out"), i.o(a), ea(t, i), this.g.attachProtoListener("embeddings_out", ((o, s) => {
      o = $9(o), this.embeddings = (function(u) {
        return { embeddings: Fa(u, W9, 1).map(((f) => {
          const p = { headIndex: Wn(f, 3) ?? 0 ?? -1, headName: Zt(lt(f, 4)) ?? "" ?? "" };
          var g = f.v;
          return B3(g, 0 | g[de], Ob, hh(f, 1)) !== void 0 ? (f = li(f = Ye(f, Ob, hh(f, 1), void 0), 1, va, ii()), p.floatEmbedding = f.slice()) : (g = new Uint8Array(0), p.quantizedEmbedding = Ye(f, P9, hh(f, 2), void 0)?.na()?.h() ?? g), p;
        })), timestampMs: Fy(H3(u)) };
      })(o), ie(this, s);
    })), this.g.attachEmptyPacketListener("embeddings_out", ((o) => {
      ie(this, o);
    })), t = t.g(), this.setGraph(new Uint8Array(t), !0);
  }
};
Tn.cosineSimilarity = function(t, a) {
  if (t.floatEmbedding && a.floatEmbedding) t = Hb(t.floatEmbedding, a.floatEmbedding);
  else {
    if (!t.quantizedEmbedding || !a.quantizedEmbedding) throw Error("Cannot compute cosine similarity between quantized and float embeddings.");
    t = Hb(Ub(t.quantizedEmbedding), Ub(a.quantizedEmbedding));
  }
  return t;
}, Tn.prototype.embedForVideo = Tn.prototype.Aa, Tn.prototype.embed = Tn.prototype.za, Tn.prototype.setOptions = Tn.prototype.o, Tn.createFromModelPath = function(t, a) {
  return Ue(Tn, t, { baseOptions: { modelAssetPath: a } });
}, Tn.createFromModelBuffer = function(t, a) {
  return Ue(Tn, t, { baseOptions: { modelAssetBuffer: a } });
}, Tn.createFromOptions = function(t, a) {
  return Ue(Tn, t, a);
};
var Qh = class {
  constructor(t, a, i) {
    this.confidenceMasks = t, this.categoryMask = a, this.qualityScores = i;
  }
  close() {
    this.confidenceMasks?.forEach(((t) => {
      t.close();
    })), this.categoryMask?.close();
  }
};
function wS(t) {
  const a = (function(i) {
    return Fa(i, pn, 1);
  })(t.ca()).filter(((i) => (Zt(lt(i, 1)) ?? "").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));
  if (t.u = [], a.length > 1) throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");
  a.length === 1 && (Ye(a[0], _n, 7)?.j()?.g() ?? /* @__PURE__ */ new Map()).forEach(((i, o) => {
    t.u[Number(o)] = Zt(lt(i, 1)) ?? "";
  }));
}
function tv(t) {
  t.categoryMask = void 0, t.confidenceMasks = void 0, t.qualityScores = void 0;
}
function nv(t) {
  try {
    const a = new Qh(t.confidenceMasks, t.categoryMask, t.qualityScores);
    if (!t.j) return a;
    t.j(a);
  } finally {
    Lu(t);
  }
}
Qh.prototype.close = Qh.prototype.close;
var dn = class extends Dn {
  constructor(t, a) {
    super(new ua(t, a), "image_in", "norm_rect", !1), this.u = [], this.outputCategoryMask = !1, this.outputConfidenceMasks = !0, this.h = new Ip(), this.A = new Yy(), be(this.h, 0, 3, this.A), be(t = this.h, 0, 1, a = new mt());
  }
  get baseOptions() {
    return Ye(this.h, mt, 1);
  }
  set baseOptions(t) {
    be(this.h, 0, 1, t);
  }
  o(t) {
    return t.displayNamesLocale !== void 0 ? We(this.h, 2, ss(t.displayNamesLocale)) : "displayNamesLocale" in t && We(this.h, 2), "outputCategoryMask" in t && (this.outputCategoryMask = t.outputCategoryMask ?? !1), "outputConfidenceMasks" in t && (this.outputConfidenceMasks = t.outputConfidenceMasks ?? !0), super.l(t);
  }
  L() {
    wS(this);
  }
  segment(t, a, i) {
    const o = typeof a != "function" ? a : {};
    return this.j = typeof a == "function" ? a : i, tv(this), da(this, t, o), nv(this);
  }
  La(t, a, i, o) {
    const s = typeof i != "function" ? i : {};
    return this.j = typeof i == "function" ? i : o, tv(this), ka(this, t, s, a), nv(this);
  }
  Da() {
    return this.u;
  }
  m() {
    var t = new Bn();
    dt(t, "image_in"), dt(t, "norm_rect");
    const a = new _n();
    Sa(a, Xy, this.h);
    const i = new pn();
    On(i, 2, "mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"), ot(i, "IMAGE:image_in"), ot(i, "NORM_RECT:norm_rect"), i.o(a), ea(t, i), Bu(this, t), this.outputConfidenceMasks && (Ve(t, "confidence_masks"), Le(i, "CONFIDENCE_MASKS:confidence_masks"), Nl(this, "confidence_masks"), this.g.aa("confidence_masks", ((o, s) => {
      this.confidenceMasks = o.map(((u) => jl(this, u, !0, !this.j))), ie(this, s);
    })), this.g.attachEmptyPacketListener("confidence_masks", ((o) => {
      this.confidenceMasks = [], ie(this, o);
    }))), this.outputCategoryMask && (Ve(t, "category_mask"), Le(i, "CATEGORY_MASK:category_mask"), Nl(this, "category_mask"), this.g.Z("category_mask", ((o, s) => {
      this.categoryMask = jl(this, o, !1, !this.j), ie(this, s);
    })), this.g.attachEmptyPacketListener("category_mask", ((o) => {
      this.categoryMask = void 0, ie(this, o);
    }))), Ve(t, "quality_scores"), Le(i, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", ((o, s) => {
      this.qualityScores = o, ie(this, s);
    })), this.g.attachEmptyPacketListener("quality_scores", ((o) => {
      this.categoryMask = void 0, ie(this, o);
    })), t = t.g(), this.setGraph(new Uint8Array(t), !0);
  }
};
dn.prototype.getLabels = dn.prototype.Da, dn.prototype.segmentForVideo = dn.prototype.La, dn.prototype.segment = dn.prototype.segment, dn.prototype.setOptions = dn.prototype.o, dn.createFromModelPath = function(t, a) {
  return Ue(dn, t, { baseOptions: { modelAssetPath: a } });
}, dn.createFromModelBuffer = function(t, a) {
  return Ue(dn, t, { baseOptions: { modelAssetBuffer: a } });
}, dn.createFromOptions = function(t, a) {
  return Ue(dn, t, a);
};
var Fh = class {
  constructor(t, a, i) {
    this.confidenceMasks = t, this.categoryMask = a, this.qualityScores = i;
  }
  close() {
    this.confidenceMasks?.forEach(((t) => {
      t.close();
    })), this.categoryMask?.close();
  }
};
Fh.prototype.close = Fh.prototype.close;
var ba = class extends Dn {
  constructor(t, a) {
    super(new ua(t, a), "image_in", "norm_rect_in", !1), this.outputCategoryMask = !1, this.outputConfidenceMasks = !0, this.h = new Ip(), this.u = new Yy(), be(this.h, 0, 3, this.u), be(t = this.h, 0, 1, a = new mt());
  }
  get baseOptions() {
    return Ye(this.h, mt, 1);
  }
  set baseOptions(t) {
    be(this.h, 0, 1, t);
  }
  o(t) {
    return "outputCategoryMask" in t && (this.outputCategoryMask = t.outputCategoryMask ?? !1), "outputConfidenceMasks" in t && (this.outputConfidenceMasks = t.outputConfidenceMasks ?? !0), super.l(t);
  }
  segment(t, a, i, o) {
    const s = typeof i != "function" ? i : {};
    if (this.j = typeof i == "function" ? i : o, this.qualityScores = this.categoryMask = this.confidenceMasks = void 0, i = this.C + 1, o = new Vy(), a.keypoint && a.scribble) throw Error("Cannot provide both keypoint and scribble.");
    if (a.keypoint) {
      var u = new bh();
      jr(u, 3, Po(!0), !1), jr(u, 1, Vo(a.keypoint.x), 0), jr(u, 2, Vo(a.keypoint.y), 0), Io(o, 1, Yh, u);
    } else {
      if (!a.scribble) throw Error("Must provide either a keypoint or a scribble.");
      {
        const p = new dS();
        for (u of a.scribble) jr(a = new bh(), 3, Po(!0), !1), jr(a, 1, Vo(u.x), 0), jr(a, 2, Vo(u.y), 0), Ap(p, 1, bh, a);
        Io(o, 2, Yh, p);
      }
    }
    this.g.addProtoToStream(o.g(), "mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest", "roi_in", i), da(this, t, s);
    e: {
      try {
        const p = new Fh(this.confidenceMasks, this.categoryMask, this.qualityScores);
        if (!this.j) {
          var f = p;
          break e;
        }
        this.j(p);
      } finally {
        Lu(this);
      }
      f = void 0;
    }
    return f;
  }
  m() {
    var t = new Bn();
    dt(t, "image_in"), dt(t, "roi_in"), dt(t, "norm_rect_in");
    const a = new _n();
    Sa(a, Xy, this.h);
    const i = new pn();
    On(i, 2, "mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"), ot(i, "IMAGE:image_in"), ot(i, "ROI:roi_in"), ot(i, "NORM_RECT:norm_rect_in"), i.o(a), ea(t, i), Bu(this, t), this.outputConfidenceMasks && (Ve(t, "confidence_masks"), Le(i, "CONFIDENCE_MASKS:confidence_masks"), Nl(this, "confidence_masks"), this.g.aa("confidence_masks", ((o, s) => {
      this.confidenceMasks = o.map(((u) => jl(this, u, !0, !this.j))), ie(this, s);
    })), this.g.attachEmptyPacketListener("confidence_masks", ((o) => {
      this.confidenceMasks = [], ie(this, o);
    }))), this.outputCategoryMask && (Ve(t, "category_mask"), Le(i, "CATEGORY_MASK:category_mask"), Nl(this, "category_mask"), this.g.Z("category_mask", ((o, s) => {
      this.categoryMask = jl(this, o, !1, !this.j), ie(this, s);
    })), this.g.attachEmptyPacketListener("category_mask", ((o) => {
      this.categoryMask = void 0, ie(this, o);
    }))), Ve(t, "quality_scores"), Le(i, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", ((o, s) => {
      this.qualityScores = o, ie(this, s);
    })), this.g.attachEmptyPacketListener("quality_scores", ((o) => {
      this.categoryMask = void 0, ie(this, o);
    })), t = t.g(), this.setGraph(new Uint8Array(t), !0);
  }
};
ba.prototype.segment = ba.prototype.segment, ba.prototype.setOptions = ba.prototype.o, ba.createFromModelPath = function(t, a) {
  return Ue(ba, t, { baseOptions: { modelAssetPath: a } });
}, ba.createFromModelBuffer = function(t, a) {
  return Ue(ba, t, { baseOptions: { modelAssetBuffer: a } });
}, ba.createFromOptions = function(t, a) {
  return Ue(ba, t, a);
};
var Pn = class extends Dn {
  constructor(t, a) {
    super(new ua(t, a), "input_frame_gpu", "norm_rect", !1), this.j = { detections: [] }, be(t = this.h = new Iy(), 0, 1, a = new mt());
  }
  get baseOptions() {
    return Ye(this.h, mt, 1);
  }
  set baseOptions(t) {
    be(this.h, 0, 1, t);
  }
  o(t) {
    return t.displayNamesLocale !== void 0 ? We(this.h, 2, ss(t.displayNamesLocale)) : "displayNamesLocale" in t && We(this.h, 2), t.maxResults !== void 0 ? Za(this.h, 3, t.maxResults) : "maxResults" in t && We(this.h, 3), t.scoreThreshold !== void 0 ? me(this.h, 4, t.scoreThreshold) : "scoreThreshold" in t && We(this.h, 4), t.categoryAllowlist !== void 0 ? nu(this.h, 5, t.categoryAllowlist) : "categoryAllowlist" in t && We(this.h, 5), t.categoryDenylist !== void 0 ? nu(this.h, 6, t.categoryDenylist) : "categoryDenylist" in t && We(this.h, 6), this.l(t);
  }
  F(t, a) {
    return this.j = { detections: [] }, da(this, t, a), this.j;
  }
  G(t, a, i) {
    return this.j = { detections: [] }, ka(this, t, i, a), this.j;
  }
  m() {
    var t = new Bn();
    dt(t, "input_frame_gpu"), dt(t, "norm_rect"), Ve(t, "detections");
    const a = new _n();
    Sa(a, fS, this.h);
    const i = new pn();
    On(i, 2, "mediapipe.tasks.vision.ObjectDetectorGraph"), ot(i, "IMAGE:input_frame_gpu"), ot(i, "NORM_RECT:norm_rect"), Le(i, "DETECTIONS:detections"), i.o(a), ea(t, i), this.g.attachProtoVectorListener("detections", ((o, s) => {
      for (const u of o) o = Sy(u), this.j.detections.push(Zy(o));
      ie(this, s);
    })), this.g.attachEmptyPacketListener("detections", ((o) => {
      ie(this, o);
    })), t = t.g(), this.setGraph(new Uint8Array(t), !0);
  }
};
Pn.prototype.detectForVideo = Pn.prototype.G, Pn.prototype.detect = Pn.prototype.F, Pn.prototype.setOptions = Pn.prototype.o, Pn.createFromModelPath = async function(t, a) {
  return Ue(Pn, t, { baseOptions: { modelAssetPath: a } });
}, Pn.createFromModelBuffer = function(t, a) {
  return Ue(Pn, t, { baseOptions: { modelAssetBuffer: a } });
}, Pn.createFromOptions = function(t, a) {
  return Ue(Pn, t, a);
};
var Zh = class {
  constructor(t, a, i) {
    this.landmarks = t, this.worldLandmarks = a, this.segmentationMasks = i;
  }
  close() {
    this.segmentationMasks?.forEach(((t) => {
      t.close();
    }));
  }
};
function av(t) {
  t.landmarks = [], t.worldLandmarks = [], t.segmentationMasks = void 0;
}
function rv(t) {
  try {
    const a = new Zh(t.landmarks, t.worldLandmarks, t.segmentationMasks);
    if (!t.u) return a;
    t.u(a);
  } finally {
    Lu(t);
  }
}
Zh.prototype.close = Zh.prototype.close;
var jn = class extends Dn {
  constructor(t, a) {
    super(new ua(t, a), "image_in", "norm_rect", !1), this.landmarks = [], this.worldLandmarks = [], this.outputSegmentationMasks = !1, be(t = this.h = new Qy(), 0, 1, a = new mt()), this.A = new Ly(), be(this.h, 0, 3, this.A), this.j = new By(), be(this.h, 0, 2, this.j), Za(this.j, 4, 1), me(this.j, 2, 0.5), me(this.A, 2, 0.5), me(this.h, 4, 0.5);
  }
  get baseOptions() {
    return Ye(this.h, mt, 1);
  }
  set baseOptions(t) {
    be(this.h, 0, 1, t);
  }
  o(t) {
    return "numPoses" in t && Za(this.j, 4, t.numPoses ?? 1), "minPoseDetectionConfidence" in t && me(this.j, 2, t.minPoseDetectionConfidence ?? 0.5), "minTrackingConfidence" in t && me(this.h, 4, t.minTrackingConfidence ?? 0.5), "minPosePresenceConfidence" in t && me(this.A, 2, t.minPosePresenceConfidence ?? 0.5), "outputSegmentationMasks" in t && (this.outputSegmentationMasks = t.outputSegmentationMasks ?? !1), this.l(t);
  }
  F(t, a, i) {
    const o = typeof a != "function" ? a : {};
    return this.u = typeof a == "function" ? a : i, av(this), da(this, t, o), rv(this);
  }
  G(t, a, i, o) {
    const s = typeof i != "function" ? i : {};
    return this.u = typeof i == "function" ? i : o, av(this), ka(this, t, s, a), rv(this);
  }
  m() {
    var t = new Bn();
    dt(t, "image_in"), dt(t, "norm_rect"), Ve(t, "normalized_landmarks"), Ve(t, "world_landmarks"), Ve(t, "segmentation_masks");
    const a = new _n();
    Sa(a, hS, this.h);
    const i = new pn();
    On(i, 2, "mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"), ot(i, "IMAGE:image_in"), ot(i, "NORM_RECT:norm_rect"), Le(i, "NORM_LANDMARKS:normalized_landmarks"), Le(i, "WORLD_LANDMARKS:world_landmarks"), i.o(a), ea(t, i), Bu(this, t), this.g.attachProtoVectorListener("normalized_landmarks", ((o, s) => {
      this.landmarks = [];
      for (const u of o) o = ds(u), this.landmarks.push(_u(o));
      ie(this, s);
    })), this.g.attachEmptyPacketListener("normalized_landmarks", ((o) => {
      this.landmarks = [], ie(this, o);
    })), this.g.attachProtoVectorListener("world_landmarks", ((o, s) => {
      this.worldLandmarks = [];
      for (const u of o) o = pl(u), this.worldLandmarks.push(Fo(o));
      ie(this, s);
    })), this.g.attachEmptyPacketListener("world_landmarks", ((o) => {
      this.worldLandmarks = [], ie(this, o);
    })), this.outputSegmentationMasks && (Le(i, "SEGMENTATION_MASK:segmentation_masks"), Nl(this, "segmentation_masks"), this.g.aa("segmentation_masks", ((o, s) => {
      this.segmentationMasks = o.map(((u) => jl(this, u, !0, !this.u))), ie(this, s);
    })), this.g.attachEmptyPacketListener("segmentation_masks", ((o) => {
      this.segmentationMasks = [], ie(this, o);
    }))), t = t.g(), this.setGraph(new Uint8Array(t), !0);
  }
};
jn.prototype.detectForVideo = jn.prototype.G, jn.prototype.detect = jn.prototype.F, jn.prototype.setOptions = jn.prototype.o, jn.createFromModelPath = function(t, a) {
  return Ue(jn, t, { baseOptions: { modelAssetPath: a } });
}, jn.createFromModelBuffer = function(t, a) {
  return Ue(jn, t, { baseOptions: { modelAssetBuffer: a } });
}, jn.createFromOptions = function(t, a) {
  return Ue(jn, t, a);
}, jn.POSE_CONNECTIONS = c4;
const SS = 1, ES = 234, kS = 454, AS = 152, NS = 263, TS = 33, Gc = {
  faceDetected: !1,
  centered: !1,
  lookingLeft: !1,
  lookingRight: !1
};
function jS(t, a) {
  const i = q.useRef(null), o = q.useRef(0), [s, u] = q.useState(Gc), f = q.useRef(Gc), [p, g] = q.useState(!1), [v, y] = q.useState(null), w = q.useRef(a);
  q.useEffect(() => {
    w.current = a;
  }, [a]), q.useEffect(() => {
    let x = !1;
    async function N() {
      const k = await ai.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
      );
      if (x) return;
      const H = "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task", P = {
        runningMode: "VIDEO",
        numFaces: 1,
        // Lower confidence thresholds for better detection under varied lighting / angles.
        // Default is 0.5 — 0.3 catches faces that would otherwise be missed.
        minFaceDetectionConfidence: 0.3,
        minFacePresenceScore: 0.3,
        minTrackingConfidence: 0.3,
        outputFaceBlendshapes: !1,
        outputFacialTransformationMatrixes: !1
      }, V = await ct.createFromOptions(k, {
        baseOptions: { modelAssetPath: H, delegate: "CPU" },
        ...P
      });
      if (x) {
        V.close();
        return;
      }
      i.current = V, g(!0);
    }
    return N().catch((k) => {
      x || y(k instanceof Error ? k.message : "Error inicializando detección facial");
    }), () => {
      x = !0, i.current && (i.current.close(), i.current = null);
    };
  }, []), q.useEffect(() => {
    if (!p || !t || !i.current) return;
    let x = -1;
    function N() {
      if (!i.current || !t) return;
      if (t.readyState < 2 || t.videoWidth === 0) {
        if (w.current)
          try {
            w.current([], t);
          } catch {
          }
        o.current = requestAnimationFrame(N);
        return;
      }
      const k = performance.now();
      if (k === x) {
        o.current = requestAnimationFrame(N);
        return;
      }
      x = k;
      let H;
      try {
        H = i.current.detectForVideo(t, k);
      } catch {
        o.current = requestAnimationFrame(N);
        return;
      }
      if (!H.faceLandmarks || H.faceLandmarks.length === 0) {
        if (f.current = Gc, u(Gc), w.current)
          try {
            w.current([], t);
          } catch {
          }
        o.current = requestAnimationFrame(N);
        return;
      }
      const P = H.faceLandmarks[0], V = P[SS], F = P[ES], W = P[kS], ee = (F.x + W.x) / 2, Q = Math.abs(W.x - F.x), Y = (V.x - ee) / (Q || 1e-3), K = (P[NS].y + P[TS].y) / 2, Ie = P[AS].y, je = Math.abs(Ie - K) || 1e-3, Te = (V.y - K) / je, Me = Te > 0.3 && Te < 0.75, ve = Math.abs(V.x - 0.5), ke = Math.abs(V.y - 0.45), C = ve < 0.12 && ke < 0.15 && Me, I = Y > 0.25, J = Y < -0.25, oe = {
        faceDetected: !0,
        centered: C,
        lookingLeft: I,
        lookingRight: J
      };
      if (f.current = oe, u(oe), w.current)
        try {
          w.current(P, t);
        } catch {
        }
      o.current = requestAnimationFrame(N);
    }
    return o.current = requestAnimationFrame(N), () => {
      o.current && cancelAnimationFrame(o.current);
    };
  }, [p, t]);
  const j = q.useCallback(
    (x) => {
      const N = f.current;
      switch (x) {
        case "center":
          return N.faceDetected && N.centered;
        case "look_left":
          return N.faceDetected && N.lookingLeft;
        case "look_right":
          return N.faceDetected && N.lookingRight;
        default:
          return !1;
      }
    },
    []
  ), A = q.useCallback(() => {
    o.current && cancelAnimationFrame(o.current);
  }, []);
  return { faceState: s, checkChallenge: j, ready: p, stop: A, initError: v };
}
const zS = 1, CS = 234, RS = 454, OS = 10, MS = 152, DS = [
  10,
  338,
  297,
  332,
  284,
  251,
  389,
  356,
  454,
  323,
  361,
  288,
  397,
  365,
  379,
  378,
  400,
  377,
  152,
  148,
  176,
  149,
  150,
  136,
  172,
  58,
  132,
  93,
  234,
  127,
  162,
  21,
  54,
  103,
  67,
  109
], iv = "#10b981", Kc = "#4ade80", _S = "rgba(255,255,255,0.85)", BS = "rgba(239,68,68,0.75)", LS = "rgba(250,204,21,0.85)", Nr = 0.25;
function US(t, a) {
  const i = q.useRef(a);
  i.current = a;
  const o = q.useRef({ cx: -1, cy: -1, rx: 0, ry: 0 }), s = q.useRef(0);
  return q.useCallback(
    (f) => {
      const p = t.current;
      if (!p) return;
      const g = window.devicePixelRatio || 1, v = p.clientWidth, y = p.clientHeight;
      if (v === 0 || y === 0) return;
      const w = Math.round(v * g), j = Math.round(y * g);
      (p.width !== w || p.height !== j) && (p.width = w, p.height = j);
      const A = p.getContext("2d", { willReadFrequently: !1 });
      if (!A) return;
      const { phase: x, challengeId: N, holdProgress: k, showingResult: H, actionDetected: P } = i.current, V = f.length > 0;
      s.current++;
      const F = (J) => ({
        x: (1 - J.x) * v,
        y: J.y * y
      });
      let W = v * 0.5, ee = y * 0.45, Q = v * 0.22, Y = y * 0.32;
      if (V) {
        const J = F(f[CS]), oe = F(f[RS]), X = F(f[OS]), S = F(f[MS]);
        W = (J.x + oe.x) / 2, ee = (X.y + S.y) / 2, Q = Math.abs(oe.x - J.x) / 2 * 1.18, Y = Math.abs(S.y - X.y) / 2 * 1.12;
      }
      const K = o.current;
      K.cx < 0 ? (K.cx = W, K.cy = ee, K.rx = Q, K.ry = Y) : (K.cx = Nr * W + (1 - Nr) * K.cx, K.cy = Nr * ee + (1 - Nr) * K.cy, K.rx = Nr * Q + (1 - Nr) * K.rx, K.ry = Nr * Y + (1 - Nr) * K.ry);
      const { cx: Ie, cy: je, rx: Te, ry: Me } = K;
      A.save(), A.scale(g, g), A.clearRect(0, 0, v, y);
      let ve, ke = null, C = 0;
      if (V ? x === "validated" || x === "countdown" || H ? (ve = iv, ke = "rgba(16,185,129,0.5)", C = 18) : P ? (ve = Kc, ke = "rgba(74,222,128,0.4)", C = 12) : x === "recenter" ? ve = k > 10 ? Kc : LS : ve = _S : ve = BS, A.beginPath(), A.ellipse(Ie, je, Te, Me, 0, 0, Math.PI * 2), A.strokeStyle = ve, A.lineWidth = 3, ke && (A.shadowColor = ke, A.shadowBlur = C), A.stroke(), A.shadowBlur = 0, k > 0 && k < 100 && V) {
        const J = k / 100 * Math.PI * 2, oe = Math.max(Te, Me) + 5;
        A.beginPath(), A.arc(Ie, je, oe, -Math.PI / 2, -Math.PI / 2 + J), A.strokeStyle = Kc, A.lineWidth = 4, A.shadowColor = "rgba(74,222,128,0.6)", A.shadowBlur = 8, A.stroke(), A.shadowBlur = 0;
      }
      if (k >= 100 && V && (A.beginPath(), A.arc(Ie, je, Math.max(Te, Me) + 5, 0, Math.PI * 2), A.strokeStyle = iv, A.lineWidth = 4, A.shadowColor = "rgba(16,185,129,0.7)", A.shadowBlur = 14, A.stroke(), A.shadowBlur = 0), x === "challenges" && !H && V) {
        const J = Math.round(k), oe = je + Me + 28;
        GS(A, Ie, oe, J, P);
      }
      V && N !== "look_left" && N !== "look_right" && s.current % 2 === 0 && (A.beginPath(), DS.forEach((J, oe) => {
        const X = F(f[J]);
        oe === 0 ? A.moveTo(X.x, X.y) : A.lineTo(X.x, X.y);
      }), A.closePath(), A.strokeStyle = "rgba(255,255,255,0.13)", A.lineWidth = 1, A.stroke()), x === "challenges" && !H && V && HS(A, N, P, f, F, Ie, je, Te), A.restore();
    },
    [t]
    // stable — all mutable values read from stateRef / ovalRef / frameRef
  );
}
function HS(t, a, i, o, s, u, f, p, g, v, y) {
  const w = i ? Kc : "rgba(255,255,255,0.8)";
  switch (a) {
    case "look_left":
      ov(t, u - p - 18, f, "left", w);
      break;
    case "look_right":
      ov(t, u + p + 18, f, "right", w);
      break;
    case "center": {
      if (!i) {
        const j = s(o[zS]), A = 18;
        t.strokeStyle = "rgba(255,255,255,0.4)", t.lineWidth = 1.5, t.beginPath(), t.moveTo(j.x - A, j.y), t.lineTo(j.x + A, j.y), t.stroke(), t.beginPath(), t.moveTo(j.x, j.y - A), t.lineTo(j.x, j.y + A), t.stroke();
      }
      break;
    }
  }
}
function lv(t, a, i, o, s, u) {
  const f = Math.min(u, o / 2, s / 2);
  t.beginPath(), t.moveTo(a + f, i), t.arcTo(a + o, i, a + o, i + s, f), t.arcTo(a + o, i + s, a, i + s, f), t.arcTo(a, i + s, a, i, f), t.arcTo(a, i, a + o, i, f), t.closePath();
}
function GS(t, a, i, o, s) {
  const u = `${o}%`, f = 13;
  t.font = `600 ${f}px -apple-system, BlinkMacSystemFont, sans-serif`;
  const p = t.measureText(u).width, g = 10, v = 5, y = p + g * 2, w = f + v * 2, j = a - y / 2, A = i - w / 2;
  lv(t, j, A, y, w, w / 2), t.fillStyle = s ? "rgba(16,185,129,0.85)" : "rgba(0,0,0,0.55)", t.fill(), lv(t, j, A, y, w, w / 2), t.strokeStyle = s ? "rgba(74,222,128,0.9)" : "rgba(255,255,255,0.2)", t.lineWidth = 1, t.stroke(), t.fillStyle = "#ffffff", t.textAlign = "center", t.textBaseline = "middle", t.fillText(u, a, i);
}
function ov(t, a, i, o, s) {
  const f = o === "left" ? 1 : -1;
  t.save(), t.translate(a, i), t.strokeStyle = s, t.lineWidth = 3, t.lineCap = "round", t.lineJoin = "round", t.beginPath(), t.moveTo(f * 22 * 0.5, -22 * 0.6), t.lineTo(-f * 22 * 0.5, 0), t.lineTo(f * 22 * 0.5, 22 * 0.6), t.stroke(), t.restore();
}
function YS({ canvasRef: t }) {
  return q.useEffect(() => {
    const a = t.current;
    if (!a) return;
    const i = (u, f) => {
      const p = window.devicePixelRatio || 1;
      a.width = Math.round(u * p), a.height = Math.round(f * p);
    }, o = new ResizeObserver((u) => {
      const f = u[0];
      if (!f) return;
      const { width: p, height: g } = f.contentRect;
      i(p, g);
    });
    o.observe(a);
    const s = a.getBoundingClientRect();
    return i(s.width || a.clientWidth, s.height || a.clientHeight), () => o.disconnect();
  }, [t]), /* @__PURE__ */ m.jsx(
    "canvas",
    {
      ref: t,
      className: "absolute inset-0 w-full h-full pointer-events-none",
      style: { zIndex: 10 }
    }
  );
}
const Jc = fv((t, a) => ({
  step: "welcome",
  dniFront: null,
  dniBack: null,
  selfie: null,
  ocrResult: null,
  biometryResult: null,
  error: null,
  tasks: [],
  processingLabel: "",
  // Fase 0 state (all null when flag off — never populated)
  challengeToken: null,
  challengeSequence: null,
  reservedSessionId: null,
  setStep: (i) => t({ step: i }),
  startValidation: async () => {
    t({ step: "dni_front" });
  },
  handleDniFront: (i) => {
    t({ dniFront: i, step: "dni_back" });
  },
  handleDniBack: (i) => {
    t({ dniBack: i, step: "selfie" });
  },
  ensureChallengeForCurrentSession: async () => {
  },
  handleSelfie: async (i) => {
    t({
      selfie: i,
      error: null,
      step: "processing",
      tasks: [
        { id: "ocr", label: "Leyendo datos del documento", status: "pending" },
        { id: "biometry", label: "Verificando que sea usted", status: "pending" }
      ]
    });
    const { dniFront: o, dniBack: s, reservedSessionId: u, challengeToken: f } = a();
    try {
      const [p, g, v] = await Promise.all([
        ul(o),
        s ? ul(s) : Promise.resolve(void 0),
        ul(i, 1200)
      ]);
      t({
        processingLabel: "Leyendo su documento...",
        tasks: a().tasks.map(
          (A) => A.id === "ocr" ? { ...A, status: "active" } : A
        )
      });
      const y = await zg(p, g, u ?? void 0);
      t({
        ocrResult: y,
        tasks: a().tasks.map(
          (A) => A.id === "ocr" ? { ...A, status: "done" } : A
        )
      });
      const w = !1;
      t({
        processingLabel: "Verificando identidad...",
        tasks: a().tasks.map(
          (A) => A.id === "biometry" ? { ...A, status: "active" } : A
        )
      });
      const j = await E6(p, v, {
        sessionId: y.session_id,
        challengeToken: f ?? void 0
      });
      t({
        biometryResult: j,
        tasks: a().tasks.map(
          (A) => A.id === "biometry" ? { ...A, status: "done" } : A
        ),
        step: "confirm"
      });
    } catch (p) {
      const g = p instanceof Error ? p.message : "Error inesperado";
      t({
        error: p.response?.data?.detail || g,
        tasks: a().tasks.map(
          (y) => y.status === "active" ? { ...y, status: "error" } : y
        ),
        step: "result"
      });
    }
  },
  processOcrOnly: async () => {
    t({
      error: null,
      step: "processing",
      tasks: [
        { id: "ocr", label: "Leyendo datos del documento", status: "pending" }
      ]
    });
    const { dniFront: i, dniBack: o } = a();
    try {
      const [s, u] = await Promise.all([
        ul(i),
        o ? ul(o) : Promise.resolve(void 0)
      ]);
      t({
        processingLabel: "Leyendo su documento...",
        tasks: a().tasks.map(
          (p) => p.id === "ocr" ? { ...p, status: "active" } : p
        )
      });
      const f = await zg(s, u);
      t({
        ocrResult: f,
        tasks: a().tasks.map(
          (p) => p.id === "ocr" ? { ...p, status: "done" } : p
        ),
        step: "confirm"
      });
    } catch (s) {
      const u = s instanceof Error ? s.message : "Error inesperado";
      t({
        error: s.response?.data?.detail || u,
        tasks: a().tasks.map(
          (p) => p.status === "active" ? { ...p, status: "error" } : p
        ),
        step: "result"
      });
    }
  },
  confirmData: async (i) => {
    const { ocrResult: o } = a();
    if (o) {
      t({
        step: "processing",
        tasks: [
          { id: "verify", label: "Confirmando datos", status: "active" }
        ],
        processingLabel: "Confirmando datos..."
      });
      try {
        const s = { ...o, ...i }, u = await S6(s);
        t({
          ocrResult: {
            ...s,
            quality_issues: u.quality_issues ?? s.quality_issues
          },
          tasks: [
            { id: "verify", label: "Confirmando datos", status: "done" }
          ],
          step: "result"
        });
      } catch (s) {
        const u = s instanceof Error ? s.message : "Error inesperado";
        t({
          error: s.response?.data?.detail || u,
          tasks: [
            { id: "verify", label: "Confirmando datos", status: "error" }
          ],
          step: "result"
        });
      }
    }
  },
  restart: () => t({
    step: "welcome",
    dniFront: null,
    dniBack: null,
    selfie: null,
    ocrResult: null,
    biometryResult: null,
    error: null,
    tasks: [],
    processingLabel: "",
    // Fase 0: fresh flow → fresh reservation + token. Keeping stale values
    // would cause "already_consumed" errors on the next biometry.
    challengeToken: null,
    challengeSequence: null,
    reservedSessionId: null
  }),
  // Partial re-scan: go back to a specific step without losing earlier captured images
  rescanDniFront: () => t({
    step: "dni_front",
    dniFront: null,
    dniBack: null,
    selfie: null,
    ocrResult: null,
    biometryResult: null,
    error: null,
    // Keep reservedSessionId (the whole flow is still this session), but
    // drop the challenge token — the user will re-do the challenges, so a
    // fresh token will be minted in ensureChallengeForCurrentSession.
    challengeToken: null,
    challengeSequence: null
  }),
  rescanDniBack: () => t({
    step: "dni_back",
    dniBack: null,
    selfie: null,
    ocrResult: null,
    biometryResult: null,
    error: null,
    challengeToken: null,
    challengeSequence: null
  }),
  rescanSelfie: () => t({
    step: "selfie",
    selfie: null,
    ocrResult: null,
    biometryResult: null,
    error: null,
    challengeToken: null,
    challengeSequence: null
  })
})), u4 = [
  {
    id: "look_left",
    instruction: "Mire hacia la izquierda",
    icon: /* @__PURE__ */ m.jsx(Yv, { className: "h-6 w-6" }),
    holdTime: 1.5
  },
  {
    id: "look_right",
    instruction: "Mire hacia la derecha",
    icon: /* @__PURE__ */ m.jsx(qv, { className: "h-6 w-6" }),
    holdTime: 1.5
  }
];
Object.fromEntries(
  u4.map((t) => [t.id, t])
);
const qS = {
  facingMode: "user",
  width: { ideal: 720 },
  height: { ideal: 960 }
};
function XS({ onNext: t, onBack: a }) {
  const i = q.useRef(null), o = q.useRef(null), [s, u] = q.useState("intro"), [f, p] = q.useState(!1), [g, v] = q.useState(0), [y, w] = q.useState([]), [j, A] = q.useState(!1), [x, N] = q.useState(null), { isMobile: k } = ip(), [H, P] = q.useState(3 / 4), V = q.useRef(null), [F, W] = q.useState(
    () => screen.orientation?.angle ?? 0
  );
  q.useEffect(() => {
    c3();
  }, []), q.useEffect(() => () => {
    Qc(i.current?.video);
    try {
      screen.orientation?.unlock?.();
    } catch {
    }
    fl();
  }, []);
  const ee = s === "loading" || s === "challenges" || s === "validated" || s === "recenter";
  q.useEffect(() => {
    if (!k || !ee) return;
    const ye = () => {
      W(screen.orientation?.angle ?? 0);
    };
    return window.addEventListener("orientationchange", ye), screen.orientation?.addEventListener?.("change", ye), () => {
      window.removeEventListener("orientationchange", ye), screen.orientation?.removeEventListener?.("change", ye);
    };
  }, [k, ee]);
  const [Q, Y] = q.useState(0), K = q.useRef(null), Ie = Jc((ye) => ye.challengeToken), je = Jc((ye) => ye.challengeSequence), Te = Jc((ye) => ye.ensureChallengeForCurrentSession), Me = q.useMemo(() => u4, [je]), ve = Me[g], [ke, C] = q.useState(null), I = q.useRef(null), { faceState: J, checkChallenge: oe, ready: X, stop: S, initError: B } = jS(ke, I.current), Z = s === "challenges" && !j ? oe(ve.id) : !1, $ = US(o, {
    phase: s,
    challengeId: ve.id,
    holdProgress: Q,
    showingResult: j,
    actionDetected: Z
  });
  I.current = $;
  const te = q.useCallback(() => {
    const ye = i.current?.video ?? null;
    if (ye !== ke && C(ye), ye) {
      const st = () => {
        if (ye.videoWidth > 0 && ye.videoHeight > 0) {
          const ne = ye.videoWidth / ye.videoHeight;
          P((ue) => Math.abs(ue - ne) > 0.01 ? ne : ue);
        }
      };
      ye.readyState >= 1 ? st() : ye.addEventListener("loadedmetadata", st, { once: !0 });
    }
  }, [ke]);
  q.useEffect(() => {
    if (ke || s === "intro" || s === "preview") return;
    const ye = setInterval(te, 200);
    return () => clearInterval(ye);
  }, [ke, s, te]), q.useEffect(() => {
    if (!k) return;
    const ye = V.current;
    if (!ye) return;
    const st = ye.parentElement;
    if (!st) return;
    const ne = () => {
      const ze = H, Ct = st.clientWidth, Kt = st.clientHeight;
      if (Ct === 0 || Kt === 0 || !ze) return;
      let en, Jt;
      Ct / Kt > ze ? (Jt = Kt, en = Jt * ze) : (en = Ct, Jt = en / ze), ye.style.width = `${Math.round(en)}px`, ye.style.height = `${Math.round(Jt)}px`;
    };
    ne();
    const ue = new ResizeObserver(ne);
    return ue.observe(st), () => ue.disconnect();
  }, [k, H, s]), q.useEffect(() => {
    s === "loading" && X && ke && (u("recenter"), p(!1));
  }, [s, X, ke]), q.useEffect(() => {
    (s === "loading" || s === "challenges") && Te();
  }, [s, Te]), q.useEffect(() => {
  }, [y.length, Ie]), q.useEffect(() => {
    if (s !== "challenges" || j) return;
    const ye = setInterval(() => {
      if (oe(ve.id)) {
        K.current === null && (K.current = Date.now());
        const ne = (Date.now() - K.current) / 1e3, ue = Math.min(ne / ve.holdTime * 100, 100);
        Y(ue), ne >= ve.holdTime && (clearInterval(ye), K.current = null, Y(100), w((ze) => [...ze, ve.id]), A(!0));
      } else
        K.current = null, Y(0);
    }, 80);
    return () => {
      clearInterval(ye);
    };
  }, [s, g, ve, j, oe]), q.useEffect(() => {
    if (!j) return;
    const ye = setTimeout(() => {
      A(!1), Y(0), g < Me.length - 1 ? v((st) => st + 1) : u("validated");
    }, 1500);
    return () => clearTimeout(ye);
  }, [j, g]), q.useEffect(() => {
    if (s !== "validated") return;
    const ye = setTimeout(() => {
      S(), u("preview"), K.current = null, Y(0), Qc(i.current?.video);
      try {
        screen.orientation?.unlock?.();
      } catch {
      }
      fl();
    }, 2e3);
    return () => clearTimeout(ye);
  }, [s, S]), q.useEffect(() => {
    if (s !== "recenter") return;
    const ye = setInterval(() => {
      if (oe("center")) {
        K.current === null && (K.current = Date.now());
        const ne = (Date.now() - K.current) / 1e3;
        if (Y(Math.min(ne / 1.5 * 100, 100)), ne >= 1.5) {
          clearInterval(ye), K.current = null, Y(0);
          const ue = i.current?.getScreenshot() ?? null;
          ue && (N(ue), u("challenges"));
        }
      } else
        K.current = null, Y(0);
    }, 80);
    return () => clearInterval(ye);
  }, [s, oe]);
  const ce = async () => {
    p(!0), k && await Ic(), C(null), u(X ? "recenter" : "loading");
  }, Se = () => {
    Qc(i.current?.video);
    try {
      screen.orientation?.unlock?.();
    } catch {
    }
    fl(), xe();
  }, at = () => {
    N(null), Y(0), v(0), w([]), A(!1), K.current = null, C(null), u("recenter");
  }, xe = () => {
    N(null), v(0), w([]), Y(0), A(!1), K.current = null, p(!1), u("intro"), C(null);
  }, mn = J.faceDetected;
  if (s === "preview" && x)
    return /* @__PURE__ */ m.jsxs(xt, { className: "overflow-hidden", children: [
      /* @__PURE__ */ m.jsxs(ra, { children: [
        /* @__PURE__ */ m.jsxs(ia, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ m.jsx(Dg, { className: "h-5 w-5 text-primary" }),
          "Selfie capturada"
        ] }),
        /* @__PURE__ */ m.jsx($c, { children: "Verifique que su rostro se vea claramente" })
      ] }),
      /* @__PURE__ */ m.jsxs(la, { className: "space-y-4", children: [
        /* @__PURE__ */ m.jsx("div", { className: "rounded-lg overflow-hidden border border-border", children: /* @__PURE__ */ m.jsx("img", { src: x, alt: "Selfie", className: "w-full object-cover" }) }),
        /* @__PURE__ */ m.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ m.jsxs(pt, { variant: "secondary", size: "lg", onClick: at, className: "flex-1", children: [
            /* @__PURE__ */ m.jsx(np, { className: "h-4 w-4" }),
            "Repetir"
          ] }),
          /* @__PURE__ */ m.jsxs(pt, { size: "lg", onClick: () => t(x), className: "flex-1", children: [
            "Continuar",
            /* @__PURE__ */ m.jsx(pu, { className: "h-4 w-4" })
          ] })
        ] })
      ] })
    ] });
  const Ln = s === "recenter" && oe("center");
  if (s === "loading" || s === "challenges" || s === "validated" || s === "recenter") {
    const ye = /* @__PURE__ */ m.jsxs("div", { className: Xe(
      "relative overflow-hidden bg-black flex items-center justify-center",
      k ? "w-full h-full" : "rounded-lg"
    ), children: [
      /* @__PURE__ */ m.jsxs(
        "div",
        {
          ref: V,
          className: "relative",
          style: k ? {
            // Sin width/height/aspectRatio en CSS — los aplica el effect
            // JS-driven `apply()` arriba que mide el padre y calcula
            // dimensiones exactas en píxeles. Antes de la primera
            // medición, fallback minimal para evitar flash de 0px.
            width: "100%",
            aspectRatio: `${H}`
          } : { width: "100%" },
          children: [
            /* @__PURE__ */ m.jsx(
              jh,
              {
                ref: i,
                audio: !1,
                mirrored: !0,
                screenshotFormat: "image/jpeg",
                screenshotQuality: 0.92,
                videoConstraints: qS,
                className: Xe(
                  "block",
                  k ? "w-full h-full" : "w-full h-auto"
                ),
                style: k ? { objectFit: "cover" } : { objectFit: "fill" },
                onUserMedia: te
              }
            ),
            /* @__PURE__ */ m.jsx(YS, { canvasRef: o })
          ]
        }
      ),
      s === "challenges" && !j && !mn && /* @__PURE__ */ m.jsx("div", { className: "absolute bottom-3 left-0 right-0 flex justify-center pointer-events-none z-10", children: /* @__PURE__ */ m.jsxs("div", { className: "bg-red-500/90 text-white text-sm px-3 py-1.5 rounded-full flex items-center gap-1.5", children: [
        /* @__PURE__ */ m.jsx(Ah, { className: "h-4 w-4" }),
        "No se detecta rostro"
      ] }) }),
      s === "loading" && !B && /* @__PURE__ */ m.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black/50 z-10", children: /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col items-center gap-3 text-white", children: [
        /* @__PURE__ */ m.jsx(oh, { className: "h-8 w-8 animate-spin" }),
        /* @__PURE__ */ m.jsx("span", { className: "text-sm font-medium", children: "Cargando detección facial..." })
      ] }) }),
      s === "loading" && B && /* @__PURE__ */ m.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black/70 z-10", children: /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col items-center gap-3 text-white px-6 text-center", children: [
        /* @__PURE__ */ m.jsx(Ah, { className: "h-8 w-8 text-red-400" }),
        /* @__PURE__ */ m.jsx("span", { className: "text-sm font-medium", children: "No se pudo inicializar la detección facial" }),
        /* @__PURE__ */ m.jsx("span", { className: "text-xs text-white/70", children: "Verifique su conexión y que el navegador soporte cámara" }),
        /* @__PURE__ */ m.jsx(
          "button",
          {
            onClick: xe,
            className: "mt-1 text-xs underline text-white/80 hover:text-white",
            children: "Reintentar"
          }
        )
      ] }) })
    ] }), st = /* @__PURE__ */ m.jsxs("div", { className: Xe("space-y-2 sm:space-y-4", k && "text-white"), children: [
      s === "challenges" && !j && /* @__PURE__ */ m.jsxs("div", { className: "space-y-1.5 sm:space-y-3", children: [
        /* @__PURE__ */ m.jsxs("div", { className: Xe(
          "flex items-center gap-2 justify-center font-semibold text-[15px] sm:text-[18px]",
          k ? "text-white" : "text-primary"
        ), children: [
          ve.icon,
          /* @__PURE__ */ m.jsx("span", { children: ve.instruction })
        ] }),
        /* @__PURE__ */ m.jsx("div", { className: Xe(
          "h-2 sm:h-2.5 rounded-full overflow-hidden",
          k ? "bg-white/20" : "bg-muted"
        ), children: /* @__PURE__ */ m.jsx(
          "div",
          {
            className: Xe(
              "h-full rounded-full transition-all duration-100 ease-linear",
              Z ? "bg-green-500" : "bg-primary"
            ),
            style: { width: `${Q}%` }
          }
        ) }),
        !mn && /* @__PURE__ */ m.jsx("p", { className: Xe(
          "text-sm text-center",
          k ? "text-white/70" : "text-muted-foreground"
        ), children: "Ubique su rostro frente a la cámara" })
      ] }),
      s === "challenges" && j && /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col items-center gap-1 py-1 sm:gap-2 sm:py-2", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2 text-success font-semibold text-[15px] sm:text-[18px]", children: [
          /* @__PURE__ */ m.jsx(gl, { className: "h-5 w-5" }),
          /* @__PURE__ */ m.jsx("span", { children: "Correcto!" })
        ] }),
        /* @__PURE__ */ m.jsx("p", { className: Xe(
          "text-[13px] sm:text-[15px]",
          k ? "text-white/70" : "text-muted-foreground"
        ), children: g < Me.length - 1 ? "Prepárese para la siguiente acción..." : "¡Todas las verificaciones completadas!" })
      ] }),
      s === "validated" && /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col items-center gap-1 py-1 sm:gap-2 sm:py-2", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2 text-success font-semibold text-[15px] sm:text-[18px]", children: [
          /* @__PURE__ */ m.jsx(gl, { className: "h-5 w-5" }),
          "Todas las pruebas superadas!"
        ] }),
        /* @__PURE__ */ m.jsx("p", { className: Xe(
          "text-[13px] sm:text-[15px]",
          k ? "text-white/70" : "text-muted-foreground"
        ), children: "Procesando..." })
      ] }),
      s === "recenter" && /* @__PURE__ */ m.jsxs("div", { className: "space-y-1.5 sm:space-y-3", children: [
        /* @__PURE__ */ m.jsxs("div", { className: Xe(
          "flex items-center gap-2 justify-center font-semibold text-[15px] sm:text-[18px]",
          k ? "text-white" : "text-primary"
        ), children: [
          /* @__PURE__ */ m.jsx(Og, { className: "h-5 w-5" }),
          /* @__PURE__ */ m.jsx("span", { children: "Mire de frente a la cámara" })
        ] }),
        /* @__PURE__ */ m.jsx("div", { className: Xe(
          "h-2 sm:h-2.5 rounded-full overflow-hidden",
          k ? "bg-white/20" : "bg-muted"
        ), children: /* @__PURE__ */ m.jsx(
          "div",
          {
            className: Xe(
              "h-full rounded-full transition-all duration-100 ease-linear",
              Ln ? "bg-green-500" : "bg-primary"
            ),
            style: { width: `${Q}%` }
          }
        ) }),
        /* @__PURE__ */ m.jsx("p", { className: Xe(
          "text-xs sm:text-sm text-center",
          k ? "text-white/70" : "text-muted-foreground"
        ), children: "Centre su rostro para tomar la foto" })
      ] }),
      s === "loading" && /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col items-center gap-1 py-1 sm:gap-2 sm:py-2", children: [
        /* @__PURE__ */ m.jsxs("div", { className: Xe(
          "flex items-center gap-2 font-medium text-[15px]",
          k ? "text-white/80" : "text-muted-foreground"
        ), children: [
          /* @__PURE__ */ m.jsx(oh, { className: "h-5 w-5 animate-spin" }),
          "Inicializando detección facial..."
        ] }),
        /* @__PURE__ */ m.jsx("p", { className: Xe(
          "text-[13px]",
          k ? "text-white/60" : "text-muted-foreground"
        ), children: "Esto puede tardar unos segundos la primera vez" })
      ] }),
      /* @__PURE__ */ m.jsx("div", { className: "flex justify-center gap-1.5 sm:gap-2 pt-0.5 sm:pt-1", children: Me.map((ne, ue) => /* @__PURE__ */ m.jsx(
        "div",
        {
          className: Xe(
            "h-2 w-8 sm:h-2.5 sm:w-10 rounded-full transition-all duration-300",
            y.includes(ne.id) ? "bg-success" : ue === g && s === "challenges" ? "bg-primary" : k ? "bg-white/20" : "bg-muted"
          )
        },
        ne.id
      )) })
    ] });
    if (k) {
      const ze = F === 90 || F === 270 ? {
        position: "fixed",
        width: "100vh",
        // ancho corto en landscape == alto portrait
        height: "100vw",
        // alto largo en landscape == ancho portrait
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%) rotate(${F === 90 ? -90 : F === 270 ? 90 : 0}deg)`,
        transformOrigin: "center center",
        zIndex: 9999,
        background: "#0b0b18",
        display: "flex",
        flexDirection: "column",
        paddingTop: "env(safe-area-inset-top, 0px)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
        touchAction: "manipulation"
      } : {
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#0b0b18",
        display: "flex",
        flexDirection: "column",
        paddingTop: "env(safe-area-inset-top, 0px)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
        touchAction: "manipulation"
      };
      return o3.createPortal(
        /* @__PURE__ */ m.jsxs("div", { style: ze, children: [
          /* @__PURE__ */ m.jsxs(
            "div",
            {
              style: {
                position: "relative",
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 16px"
              },
              children: [
                /* @__PURE__ */ m.jsxs(
                  "button",
                  {
                    onClick: Se,
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      background: "rgba(255,255,255,0.08)",
                      backdropFilter: "blur(6px)",
                      border: "none",
                      color: "#fff",
                      borderRadius: 10,
                      padding: "8px 12px",
                      fontSize: 14,
                      fontWeight: 500,
                      cursor: "pointer"
                    },
                    children: [
                      /* @__PURE__ */ m.jsx(Nh, { size: 16 }),
                      "Cancelar"
                    ]
                  }
                ),
                /* @__PURE__ */ m.jsx("div", { style: { background: "#fff", borderRadius: 8, padding: "4px 8px" }, children: /* @__PURE__ */ m.jsx("img", { src: hu, alt: "ATM", style: { height: 22, display: "block" } }) }),
                /* @__PURE__ */ m.jsx(
                  "div",
                  {
                    style: {
                      background: "rgba(255,255,255,0.08)",
                      backdropFilter: "blur(6px)",
                      borderRadius: 20,
                      padding: "6px 14px",
                      color: "#fff",
                      fontSize: 13,
                      fontWeight: 500
                    },
                    children: "Paso 3 de 4"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ m.jsx("div", { style: { position: "relative", flex: 1, overflow: "hidden" }, children: ye }),
          /* @__PURE__ */ m.jsx("div", { style: { padding: "16px", background: "rgba(0,0,0,0.6)" }, children: st })
        ] }),
        document.body
      );
    }
    return /* @__PURE__ */ m.jsxs(xt, { className: "overflow-hidden", children: [
      /* @__PURE__ */ m.jsx(ra, { className: "py-2 px-4 sm:py-4 sm:px-6", children: /* @__PURE__ */ m.jsxs(ia, { className: "flex items-center gap-2 text-base sm:text-lg", children: [
        /* @__PURE__ */ m.jsx(Dg, { className: "h-4 w-4 text-primary" }),
        "Verificación de vida"
      ] }) }),
      /* @__PURE__ */ m.jsxs(la, { className: "p-2 sm:p-6 space-y-2 sm:space-y-4", children: [
        ye,
        st
      ] })
    ] });
  }
  return /* @__PURE__ */ m.jsxs(xt, { children: [
    /* @__PURE__ */ m.jsxs(ra, { className: "text-center pt-5 pb-4", children: [
      /* @__PURE__ */ m.jsxs(
        "p",
        {
          className: "text-[12px] font-medium uppercase tracking-[0.2em] text-accent flex items-center justify-center gap-1.5 mb-2",
          style: { fontFamily: "var(--font-body)" },
          children: [
            /* @__PURE__ */ m.jsx("span", { className: "inline-block w-2.5 h-px bg-accent" }),
            "Paso 03 de 04"
          ]
        }
      ),
      /* @__PURE__ */ m.jsx(
        ia,
        {
          className: "text-[24px] lg:text-[26px] font-extrabold tracking-tight",
          style: { fontFamily: "var(--font-display)" },
          children: "Selfie de verificación"
        }
      ),
      /* @__PURE__ */ m.jsx($c, { className: "font-light", children: "Realizaremos una verificación de vida. Siga las instrucciones en pantalla." })
    ] }),
    /* @__PURE__ */ m.jsxs(la, { className: "space-y-3 px-7 pb-5", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-3 py-[9px] px-3 rounded-md bg-[var(--color-surface-2)]", children: [
          /* @__PURE__ */ m.jsx("span", { className: "text-primary flex-shrink-0", children: /* @__PURE__ */ m.jsx(Og, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ m.jsx("span", { className: "text-[15px]", children: "Mire de frente a la cámara" })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-3 py-[9px] px-3 rounded-md bg-[var(--color-surface-2)]", children: [
          /* @__PURE__ */ m.jsx("span", { className: "text-primary flex-shrink-0", children: /* @__PURE__ */ m.jsx(Yv, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ m.jsx("span", { className: "text-[15px]", children: "Mire hacia la izquierda" })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-3 py-[9px] px-3 rounded-md bg-[var(--color-surface-2)]", children: [
          /* @__PURE__ */ m.jsx("span", { className: "text-primary flex-shrink-0", children: /* @__PURE__ */ m.jsx(qv, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ m.jsx("span", { className: "text-[15px]", children: "Mire hacia la derecha" })
        ] })
      ] }),
      /* @__PURE__ */ m.jsx("div", { className: "rounded-md bg-primary/10 border border-[var(--color-border-active)] px-3 py-[9px] text-[14px] font-light text-muted-foreground", children: "Se tomará una foto al mirar de frente. Luego haga los movimientos a izquierda y derecha para validar." }),
      /* @__PURE__ */ m.jsx(pt, { size: "lg", onClick: ce, disabled: f, children: f ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
        /* @__PURE__ */ m.jsx(oh, { size: 16, strokeWidth: 2, className: "animate-spin" }),
        "Iniciando cámara..."
      ] }) : /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
        /* @__PURE__ */ m.jsx(R6, { size: 16, strokeWidth: 1.5 }),
        "Iniciar verificación"
      ] }) }),
      /* @__PURE__ */ m.jsx(pt, { variant: "ghost", size: "lg", onClick: a, children: "Volver" })
    ] })
  ] });
}
function VS({ tasks: t, currentLabel: a }) {
  return /* @__PURE__ */ m.jsxs(xt, { children: [
    /* @__PURE__ */ m.jsx("div", { className: "flex justify-center pt-[22px] pb-[10px]", children: /* @__PURE__ */ m.jsx("div", { className: "ring-spinner", role: "status", "aria-label": "Procesando" }) }),
    /* @__PURE__ */ m.jsxs("div", { className: "text-center pb-[10px]", children: [
      /* @__PURE__ */ m.jsx(
        "p",
        {
          className: "text-[18px] lg:text-[20px] font-bold text-foreground",
          style: { fontFamily: "var(--font-display)" },
          children: a
        }
      ),
      /* @__PURE__ */ m.jsx("p", { className: "text-[14px] font-light text-muted-foreground mt-0.5", children: "Esto puede tardar unos segundos" })
    ] }),
    /* @__PURE__ */ m.jsx("div", { className: "px-7 pb-[18px] flex flex-col gap-0.5", role: "list", children: t.map((i) => /* @__PURE__ */ m.jsxs(
      "div",
      {
        className: Xe(
          "flex items-center gap-[10px] px-3 py-[10px] rounded-md text-[15px] transition-colors",
          i.status === "done" && "text-success",
          i.status === "active" && "bg-[var(--color-surface-2)] text-foreground font-medium",
          i.status === "pending" && "text-[var(--color-dim)]",
          i.status === "error" && "text-destructive"
        ),
        role: "listitem",
        "aria-current": i.status === "active" ? "true" : void 0,
        children: [
          i.status === "done" && /* @__PURE__ */ m.jsx(gl, { size: 16, strokeWidth: 2, className: "flex-shrink-0" }),
          i.status === "active" && /* @__PURE__ */ m.jsx("div", { className: "w-[16px] h-[16px] rounded-full border-2 border-border border-t-primary animate-spin flex-shrink-0" }),
          i.status === "pending" && /* @__PURE__ */ m.jsx(X6, { size: 16, strokeWidth: 1.5, className: "flex-shrink-0" }),
          i.status === "error" && /* @__PURE__ */ m.jsx(Ah, { size: 16, strokeWidth: 2, className: "flex-shrink-0" }),
          /* @__PURE__ */ m.jsx("span", { children: i.label })
        ]
      },
      i.id
    )) })
  ] });
}
const sv = [
  // dni_number editable: el OCR puede leer mal el primer dígito (3↔5, 8↔B)
  // sobre todo si la foto llegó rotada. El usuario debe poder corregirlo
  // antes de confirmar — sino el dato queda mal en la sesión y en backoffice.
  { key: "dni_number", label: "Número de documento" },
  { key: "apellido", label: "Apellido" },
  { key: "nombre", label: "Nombre" },
  { key: "sexo", label: "Sexo", type: "select", options: [
    { value: "M", label: "Masculino" },
    { value: "F", label: "Femenino" }
  ] },
  { key: "fecha_nacimiento", label: "Fecha de nacimiento" },
  { key: "fecha_emision", label: "Fecha de emisión" },
  { key: "fecha_vencimiento", label: "Fecha de vencimiento" },
  { key: "nacionalidad", label: "Nacionalidad" }
];
function IS({ ocr: t, onConfirm: a, onRestart: i, onRescanDniFront: o, onRescanDniBack: s, onRescanSelfie: u }) {
  const [f, p] = q.useState(() => {
    const j = {};
    for (const A of sv)
      j[A.key] = t[A.key];
    return j;
  }), [g, v] = q.useState(/* @__PURE__ */ new Set()), y = (j, A) => {
    const x = t[j];
    p((N) => ({ ...N, [j]: A || null })), v((N) => {
      const k = new Set(N);
      return A !== (x || "") ? k.add(j) : k.delete(j), k;
    });
  }, w = () => {
    a(f);
  };
  return /* @__PURE__ */ m.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ m.jsxs(xt, { children: [
      /* @__PURE__ */ m.jsxs(ra, { className: "text-center pb-2", children: [
        /* @__PURE__ */ m.jsx("div", { className: "mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10", children: /* @__PURE__ */ m.jsx(i8, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ m.jsx(ia, { children: "Verifique sus datos" }),
        /* @__PURE__ */ m.jsx("p", { className: "text-[15px] text-muted-foreground mt-1", children: "Estos datos fueron leidos de su documento. Corrija cualquier error antes de continuar." })
      ] }),
      /* @__PURE__ */ m.jsxs(la, { className: "space-y-3", children: [
        sv.map((j) => {
          const A = f[j.key];
          if (!A && j.key === "fecha_emision")
            return null;
          const x = g.has(j.key);
          return /* @__PURE__ */ m.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ m.jsxs("label", { className: "text-[14px] text-muted-foreground flex items-center gap-1", children: [
              j.label,
              x && /* @__PURE__ */ m.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary", children: "modificado" })
            ] }),
            j.type === "select" ? /* @__PURE__ */ m.jsxs(
              "select",
              {
                value: A || "",
                onChange: (N) => y(j.key, N.target.value),
                className: Xe(
                  "w-full rounded-lg border px-3 py-3 text-[16px] bg-background",
                  "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
                  x && "border-primary bg-primary/5"
                ),
                children: [
                  /* @__PURE__ */ m.jsx("option", { value: "", children: "—" }),
                  j.options?.map((N) => /* @__PURE__ */ m.jsx("option", { value: N.value, children: N.label }, N.value))
                ]
              }
            ) : /* @__PURE__ */ m.jsx(
              "input",
              {
                type: "text",
                value: A || "",
                readOnly: j.readonly,
                onChange: (N) => y(j.key, N.target.value),
                className: Xe(
                  "w-full rounded-lg border px-3 py-3 text-[16px] bg-background",
                  "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
                  j.readonly && "bg-muted text-muted-foreground cursor-not-allowed",
                  x && "border-primary bg-primary/5"
                )
              }
            )
          ] }, j.key);
        }),
        g.size > 0 && /* @__PURE__ */ m.jsxs("div", { className: "rounded-lg bg-primary/5 border border-primary/20 p-2 flex items-center gap-2", children: [
          /* @__PURE__ */ m.jsx(gl, { className: "h-3.5 w-3.5 text-primary shrink-0" }),
          /* @__PURE__ */ m.jsxs("p", { className: "text-xs text-primary", children: [
            g.size === 1 ? "1 campo modificado" : `${g.size} campos modificados`,
            "— se verificarán los datos corregidos."
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ m.jsxs(pt, { onClick: w, className: "w-full", size: "lg", children: [
        "Confirmar y verificar",
        /* @__PURE__ */ m.jsx(pu, { className: "h-4 w-4 ml-1" })
      ] }),
      /* @__PURE__ */ m.jsxs("details", { className: "group", children: [
        /* @__PURE__ */ m.jsxs("summary", { className: "flex items-center justify-center gap-1.5 text-[15px] text-muted-foreground cursor-pointer hover:text-foreground py-2 list-none", children: [
          /* @__PURE__ */ m.jsx(np, { className: "h-3.5 w-3.5" }),
          "Volver a escanear"
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col gap-2 pt-1", children: [
          /* @__PURE__ */ m.jsx(pt, { variant: "outline", size: "sm", className: "w-full", onClick: s, children: "Repetir dorso del DNI" }),
          /* @__PURE__ */ m.jsx(pt, { variant: "outline", size: "sm", className: "w-full", onClick: o, children: "Repetir frente del DNI" }),
          /* @__PURE__ */ m.jsx(pt, { variant: "outline", size: "sm", className: "w-full", onClick: u, children: "Repetir selfie" }),
          /* @__PURE__ */ m.jsx(pt, { variant: "ghost", size: "sm", className: "w-full text-destructive hover:text-destructive", onClick: i, children: "Reiniciar todo" })
        ] })
      ] })
    ] })
  ] });
}
function n1({ ocr: t, biometry: a, issues: i }) {
  const [o, s] = q.useState(!1);
  return /* @__PURE__ */ m.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ m.jsxs(
      "button",
      {
        onClick: () => s((u) => !u),
        className: "flex items-center justify-center gap-1.5 text-[15px] text-muted-foreground hover:text-foreground mx-auto transition-colors",
        children: [
          o ? /* @__PURE__ */ m.jsx(L6, { className: "h-4 w-4" }) : /* @__PURE__ */ m.jsx(_6, { className: "h-4 w-4" }),
          o ? "Ocultar detalles de la validación" : "Ver detalles de la validación"
        ]
      }
    ),
    o && /* @__PURE__ */ m.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ m.jsxs(xt, { children: [
        /* @__PURE__ */ m.jsx(ra, { className: "pb-2", children: /* @__PURE__ */ m.jsxs(ia, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ m.jsx(Gv, { size: 16, strokeWidth: 1.5, className: "text-primary" }),
          "Datos del documento"
        ] }) }),
        /* @__PURE__ */ m.jsx(la, { children: /* @__PURE__ */ m.jsxs("div", { className: "grid gap-2 text-[15px]", children: [
          /* @__PURE__ */ m.jsx(Tr, { label: "DNI", value: t.dni_number, source: t.field_sources?.dni_number }),
          /* @__PURE__ */ m.jsx(Tr, { label: "Apellido", value: t.apellido, source: t.field_sources?.apellido }),
          /* @__PURE__ */ m.jsx(Tr, { label: "Nombre", value: t.nombre, source: t.field_sources?.nombre }),
          /* @__PURE__ */ m.jsx(Tr, { label: "Sexo", value: t.sexo, source: t.field_sources?.sexo }),
          /* @__PURE__ */ m.jsx(Tr, { label: "Nacimiento", value: t.fecha_nacimiento, source: t.field_sources?.fecha_nacimiento }),
          /* @__PURE__ */ m.jsx(Tr, { label: "Emisión", value: t.fecha_emision, source: t.field_sources?.fecha_emision }),
          /* @__PURE__ */ m.jsx(Tr, { label: "Vencimiento", value: t.fecha_vencimiento, source: t.field_sources?.fecha_vencimiento }),
          /* @__PURE__ */ m.jsx(Tr, { label: "Nacionalidad", value: t.nacionalidad, source: t.field_sources?.nacionalidad })
        ] }) })
      ] }),
      a && /* @__PURE__ */ m.jsxs(xt, { children: [
        /* @__PURE__ */ m.jsx(ra, { className: "pb-2", children: /* @__PURE__ */ m.jsxs(ia, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ m.jsx(Xv, { size: 16, strokeWidth: 1.5, className: "text-primary" }),
          "Verificación facial"
        ] }) }),
        /* @__PURE__ */ m.jsx(la, { children: /* @__PURE__ */ m.jsxs("div", { className: "grid gap-2 text-[15px]", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ m.jsx("span", { className: "text-muted-foreground", children: "Prueba de vida" }),
            /* @__PURE__ */ m.jsxs("span", { className: Xe("font-medium", a.liveness_passed ? "text-success" : "text-destructive"), children: [
              a.liveness_passed ? "Aprobado" : "Fallido",
              " (",
              (a.liveness_score * 100).toFixed(0),
              "%)"
            ] })
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ m.jsx("span", { className: "text-muted-foreground", children: "Coincidencia de rostro" }),
            /* @__PURE__ */ m.jsxs("span", { className: Xe("font-medium", a.face_match ? "text-success" : "text-destructive"), children: [
              a.face_match ? "Sí" : "No",
              " (",
              (a.face_similarity * 100).toFixed(0),
              "%)"
            ] })
          ] })
        ] }) })
      ] }),
      t.mrz_valid !== void 0 && /* @__PURE__ */ m.jsxs(xt, { children: [
        /* @__PURE__ */ m.jsx(ra, { className: "pb-2", children: /* @__PURE__ */ m.jsxs(ia, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ m.jsx(f8, { size: 16, strokeWidth: 1.5, className: "text-primary" }),
          "Código de seguridad del documento"
        ] }) }),
        /* @__PURE__ */ m.jsx(la, { children: /* @__PURE__ */ m.jsxs("div", { className: "flex justify-between text-[15px]", children: [
          /* @__PURE__ */ m.jsx("span", { className: "text-muted-foreground", children: "Código de seguridad válido" }),
          /* @__PURE__ */ m.jsx("span", { className: Xe("font-medium", t.mrz_valid ? "text-success" : "text-destructive"), children: t.mrz_valid ? "Sí" : "No" })
        ] }) })
      ] }),
      i.length > 0 && /* @__PURE__ */ m.jsxs(xt, { className: "border-warning/50", children: [
        /* @__PURE__ */ m.jsx(ra, { className: "pb-2", children: /* @__PURE__ */ m.jsxs(ia, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ m.jsx(Vv, { size: 16, strokeWidth: 1.5, className: "text-warning" }),
          "Puntos a revisar"
        ] }) }),
        /* @__PURE__ */ m.jsx(la, { children: /* @__PURE__ */ m.jsx("ul", { className: "space-y-1 text-[15px] text-muted-foreground", children: i.map((u, f) => /* @__PURE__ */ m.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ m.jsx("span", { className: "text-warning mt-0.5", children: "•" }),
          u
        ] }, f)) }) })
      ] })
    ] })
  ] });
}
function Tr({ label: t, value: a, source: i }) {
  return /* @__PURE__ */ m.jsxs("div", { className: "flex justify-between items-center py-[6px] border-b border-border last:border-b-0", children: [
    /* @__PURE__ */ m.jsx("span", { className: "text-[15px] font-light text-muted-foreground", children: t }),
    /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ m.jsx("span", { className: "text-[15px] font-medium", style: { fontFamily: "var(--font-mono)" }, children: a || "—" }),
      i && /* @__PURE__ */ m.jsx("span", { className: Xe(
        "text-[12px] px-1.5 py-0.5 rounded font-medium",
        i === "confirmed" && "bg-success/10 text-success",
        i === "mrz_back" && "bg-primary/10 text-primary",
        i === "ocr_front" && "bg-muted text-muted-foreground",
        i === "calculated" && "bg-warning/10 text-warning"
      ), children: i === "confirmed" ? "Verificado" : i === "mrz_back" ? "Dorso" : i === "calculated" ? "Calculado" : "Frente" })
    ] })
  ] });
}
function uE({ returnUrl: t, status: a, ocr: i, biometry: o, error: s }) {
  q.useEffect(() => {
    if (!t) return;
    const u = window.setTimeout(() => {
      try {
        const f = new URL(t, window.location.href);
        f.searchParams.set("validation_status", a), s && f.searchParams.set("validation_error", s), i?.nombre && f.searchParams.set("validation_name", i.nombre), i?.apellido && f.searchParams.set("validation_last_name", i.apellido), i?.dni_number && f.searchParams.set("validation_dni", i.dni_number), i?.fecha_nacimiento && f.searchParams.set("validation_dob", i.fecha_nacimiento), o?.liveness_score != null && f.searchParams.set("validation_liveness", String(o.liveness_score)), window.location.assign(f.toString());
      } catch (p) {
        console.error("[validador-biometrico] redirect to portal failed:", p);
      }
    }, 2500);
    return () => window.clearTimeout(u);
  }, [t, a, i, o, s]);
  return null;
}
function QS({ ocr: t, biometry: a, issues: i, returnUrl: o }) {
  return /* @__PURE__ */ m.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ m.jsx(uE, { returnUrl: o, status: "approved", ocr: t, biometry: a }),
    /* @__PURE__ */ m.jsxs(xt, { children: [
      /* @__PURE__ */ m.jsxs("div", { className: "text-center px-7 pt-[28px] pb-[22px]", children: [
        /* @__PURE__ */ m.jsx("div", { className: "w-[76px] h-[76px] rounded-full flex items-center justify-center mx-auto mb-4 bg-success/10 border border-success/30 shadow-[0_0_40px_rgba(0,200,150,0.15)]", children: /* @__PURE__ */ m.jsx(gl, { size: 38, strokeWidth: 1.5, className: "text-success" }) }),
        /* @__PURE__ */ m.jsx(
          "h2",
          {
            className: "text-[22px] lg:text-[24px] font-bold text-success mb-2",
            style: { fontFamily: "var(--font-display)" },
            children: "Identidad verificada"
          }
        ),
        /* @__PURE__ */ m.jsx("p", { className: "text-[15px] text-muted-foreground font-light", children: "Tu identidad fue verificada exitosamente." })
      ] }),
      /* @__PURE__ */ m.jsx("div", { className: "px-7 pb-[24px]", children: /* @__PURE__ */ m.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-xl bg-success/10 border border-success/25", children: [
        /* @__PURE__ */ m.jsx(ep, { size: 18, className: "text-success flex-shrink-0 mt-0.5" }),
        /* @__PURE__ */ m.jsxs("div", { children: [
          /* @__PURE__ */ m.jsx("p", { className: "text-[14px] font-semibold text-success leading-snug", children: "Regresá al Portal ATM" }),
          /* @__PURE__ */ m.jsx("p", { className: "text-[13px] text-muted-foreground font-light leading-relaxed mt-0.5", children: "El acceso al trámite fue habilitado. Podés cerrar esta pantalla y continuar desde la computadora." })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ m.jsx(n1, { ocr: t, biometry: a, issues: i })
  ] });
}
const FS = [
  { label: "Frente del DNI", desc: "Documento capturado" },
  { label: "Dorso del DNI", desc: "Código MRZ leído" },
  { label: "Selfie de verificación", desc: "Prueba de vida completada" },
  { label: "Confirmación de datos", desc: "Datos revisados" }
];
function ZS({ ocr: t, biometry: a, issues: i, onRestart: o, returnUrl: s }) {
  return /* @__PURE__ */ m.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ m.jsx(uE, { returnUrl: s, status: "manual_review", ocr: t, biometry: a }),
    /* @__PURE__ */ m.jsx(xt, { children: /* @__PURE__ */ m.jsxs("div", { className: "px-7 pt-[22px] pb-[18px]", children: [
      /* @__PURE__ */ m.jsx(
        "p",
        {
          className: "text-[13px] font-medium uppercase tracking-[0.15em] text-muted-foreground mb-4",
          style: { fontFamily: "var(--font-body)" },
          children: "Pasos de tu validación"
        }
      ),
      /* @__PURE__ */ m.jsxs("div", { className: "space-y-0", children: [
        FS.map(({ label: s, desc: u }) => /* @__PURE__ */ m.jsxs(
          "div",
          {
            className: "flex items-center gap-3 py-[10px] border-b border-border last:border-b-0",
            children: [
              /* @__PURE__ */ m.jsx("div", { className: "w-[28px] h-[28px] rounded-full flex items-center justify-center flex-shrink-0 bg-success/10 border border-success/30", children: /* @__PURE__ */ m.jsx(gl, { size: 14, strokeWidth: 2.5, className: "text-success" }) }),
              /* @__PURE__ */ m.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ m.jsx("p", { className: "text-[15px] font-medium text-foreground leading-tight", children: s }),
                /* @__PURE__ */ m.jsx("p", { className: "text-[13px] text-muted-foreground font-light", children: u })
              ] }),
              /* @__PURE__ */ m.jsx("span", { className: "text-[12px] text-success font-medium", children: "Completado" })
            ]
          },
          s
        )),
        /* @__PURE__ */ m.jsxs("div", { className: Xe(
          "flex items-center gap-3 py-[10px] rounded-md mt-1 px-2 -mx-2",
          "bg-warning/5 border border-warning/20"
        ), children: [
          /* @__PURE__ */ m.jsx("div", { className: "w-[28px] h-[28px] rounded-full flex items-center justify-center flex-shrink-0 bg-warning/10 border border-warning/30", children: /* @__PURE__ */ m.jsx(Mg, { size: 14, strokeWidth: 2, className: "text-warning" }) }),
          /* @__PURE__ */ m.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ m.jsx("p", { className: "text-[15px] font-medium text-foreground leading-tight", children: "Revisión manual" }),
            /* @__PURE__ */ m.jsx("p", { className: "text-[13px] text-muted-foreground font-light", children: "A cargo de un administrador" })
          ] }),
          /* @__PURE__ */ m.jsx("span", { className: "text-[12px] text-warning font-medium", children: "En espera" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ m.jsx(xt, { children: /* @__PURE__ */ m.jsx("div", { className: "px-7 py-[22px] space-y-3", children: /* @__PURE__ */ m.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ m.jsx("div", { className: "w-[40px] h-[40px] rounded-full flex items-center justify-center flex-shrink-0 bg-warning/10 border border-warning/30 mt-0.5", children: /* @__PURE__ */ m.jsx(Mg, { size: 20, strokeWidth: 1.5, className: "text-warning" }) }),
      /* @__PURE__ */ m.jsxs("div", { children: [
        /* @__PURE__ */ m.jsx(
          "h2",
          {
            className: "text-[18px] lg:text-[20px] font-bold text-foreground leading-tight mb-1",
            style: { fontFamily: "var(--font-display)" },
            children: "Pendiente de revisión"
          }
        ),
        /* @__PURE__ */ m.jsx("p", { className: "text-[15px] text-muted-foreground font-light leading-relaxed", children: "Un administrador revisará tu validación manualmente. Recibirás una notificación cuando la revisión esté completa y puedas continuar." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ m.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-xl bg-warning/10 border border-warning/25", children: [
      /* @__PURE__ */ m.jsx(ep, { size: 18, className: "text-warning flex-shrink-0 mt-0.5" }),
      /* @__PURE__ */ m.jsxs("div", { children: [
        /* @__PURE__ */ m.jsx("p", { className: "text-[14px] font-semibold text-foreground leading-snug", children: "Regresá al Portal ATM" }),
        /* @__PURE__ */ m.jsxs("p", { className: "text-[13px] text-muted-foreground font-light leading-relaxed mt-0.5", children: [
          "El trámite quedará en estado ",
          /* @__PURE__ */ m.jsx("strong", { children: "pendiente" }),
          " hasta que un administrador confirme tu identidad. Podés cerrar esta pantalla."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs(pt, { size: "lg", variant: "outline", onClick: o, children: [
      /* @__PURE__ */ m.jsx(tp, { size: 16, strokeWidth: 2 }),
      "Reintentar validación"
    ] }),
    /* @__PURE__ */ m.jsx(
      n1,
      {
        ocr: t,
        biometry: a,
        issues: i
      }
    )
  ] });
}
const KS = [
  "Asegúrese de tener buena iluminación, sin sombras sobre el documento",
  "Sostenga el DNI firme y sin moverlo durante la captura",
  "Capture el documento completo, sin cortar ninguno de sus bordes",
  "Evite reflejos y brillos sobre el plástico del DNI",
  "Mire directamente a la cámara y mantenga una expresión neutra durante la selfie",
  "Use un fondo liso y neutro, alejado de objetos que distraigan"
];
function JS({ ocr: t, biometry: a, issues: i, onRestart: o, returnUrl: s }) {
  return /* @__PURE__ */ m.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ m.jsx(uE, { returnUrl: s, status: "rejected", ocr: t, biometry: a, error: i?.join(" · ") }),
    /* @__PURE__ */ m.jsxs(xt, { children: [
      /* @__PURE__ */ m.jsxs("div", { className: "text-center px-7 pt-[28px] pb-[22px]", children: [
        /* @__PURE__ */ m.jsx("div", { className: "w-[76px] h-[76px] rounded-full flex items-center justify-center mx-auto mb-4 bg-destructive/10 border border-destructive/30", children: /* @__PURE__ */ m.jsx(Hv, { size: 38, strokeWidth: 1.5, className: "text-destructive" }) }),
        /* @__PURE__ */ m.jsx(
          "h2",
          {
            className: "text-[22px] lg:text-[24px] font-bold text-destructive mb-2",
            style: { fontFamily: "var(--font-display)" },
            children: "Validación rechazada"
          }
        ),
        /* @__PURE__ */ m.jsx("p", { className: "text-[15px] text-muted-foreground font-light", children: "No fue posible verificar tu identidad en este intento." })
      ] }),
      /* @__PURE__ */ m.jsx("div", { className: "px-7 pb-[24px]", children: /* @__PURE__ */ m.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-xl bg-destructive/8 border border-destructive/20", children: [
        /* @__PURE__ */ m.jsx(ep, { size: 18, className: "text-destructive flex-shrink-0 mt-0.5" }),
        /* @__PURE__ */ m.jsxs("div", { children: [
          /* @__PURE__ */ m.jsx("p", { className: "text-[14px] font-semibold text-destructive leading-snug", children: "El Portal ATM no habilitó el acceso" }),
          /* @__PURE__ */ m.jsx("p", { className: "text-[13px] text-muted-foreground font-light leading-relaxed mt-0.5", children: "Podés reintentar la verificación o regresar a la web para ver el estado del trámite." })
        ] })
      ] }) })
    ] }),
    i.length > 0 && /* @__PURE__ */ m.jsx(xt, { className: "border-destructive/30", children: /* @__PURE__ */ m.jsxs("div", { className: "px-7 py-[20px]", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ m.jsx(Vv, { size: 16, strokeWidth: 2, className: "text-destructive flex-shrink-0" }),
        /* @__PURE__ */ m.jsx(
          "h3",
          {
            className: "text-[16px] font-semibold text-destructive",
            style: { fontFamily: "var(--font-display)" },
            children: "Motivos del rechazo"
          }
        )
      ] }),
      /* @__PURE__ */ m.jsx("ul", { className: "space-y-2", children: i.map((s, u) => /* @__PURE__ */ m.jsxs("li", { className: "flex items-start gap-2.5 text-[15px] text-foreground", children: [
        /* @__PURE__ */ m.jsx("span", { className: "text-destructive font-bold mt-0.5 flex-shrink-0", children: "·" }),
        s
      ] }, u)) })
    ] }) }),
    /* @__PURE__ */ m.jsx(xt, { className: "border-[var(--color-border-active)]", children: /* @__PURE__ */ m.jsxs("div", { className: "px-7 py-[20px]", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ m.jsx($6, { size: 16, strokeWidth: 1.5, className: "text-primary flex-shrink-0" }),
        /* @__PURE__ */ m.jsx(
          "h3",
          {
            className: "text-[16px] font-semibold text-foreground",
            style: { fontFamily: "var(--font-display)" },
            children: "Consejos para el reintento"
          }
        )
      ] }),
      /* @__PURE__ */ m.jsx("ul", { className: "space-y-2", children: KS.map((s, u) => /* @__PURE__ */ m.jsxs("li", { className: "flex items-start gap-2.5 text-[15px] text-muted-foreground", children: [
        /* @__PURE__ */ m.jsxs("span", { className: "text-primary font-bold mt-0.5 flex-shrink-0", children: [
          u + 1,
          "."
        ] }),
        s
      ] }, u)) })
    ] }) }),
    /* @__PURE__ */ m.jsxs(pt, { size: "lg", onClick: o, children: [
      /* @__PURE__ */ m.jsx(tp, { size: 16, strokeWidth: 2 }),
      "Intentar nuevamente"
    ] }),
    /* @__PURE__ */ m.jsx(
      n1,
      {
        ocr: t,
        biometry: a,
        issues: i
      }
    )
  ] });
}
function PS(t, a) {
  const i = [...t.quality_issues || []];
  a && !a.liveness_passed && i.push("La prueba de vida no fue superada"), a && !a.face_match && i.push("El rostro no coincide con la foto del documento");
  const o = t.confidence || 0;
  return i.length === 0 && o >= 0.8 ? "approved" : i.length <= 1 && o >= 0.5 ? "pending" : "rejected";
}
function WS(t, a) {
  const i = [...t.quality_issues || []];
  return a && !a.liveness_passed && i.push("La prueba de vida no fue superada"), a && !a.face_match && i.push("El rostro no coincide con la foto del documento"), i;
}
function $S({ ocr: t, biometry: a, error: i, onRestart: o, returnUrl: s }) {
  if (i)
    return /* @__PURE__ */ m.jsxs(xt, { children: [
      /* @__PURE__ */ m.jsxs("div", { className: "text-center px-7 pt-[22px] pb-[16px]", children: [
        /* @__PURE__ */ m.jsx("div", { className: "w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto mb-3 bg-destructive/10 border border-destructive/30", children: /* @__PURE__ */ m.jsx(Hv, { size: 36, strokeWidth: 1.5, className: "text-destructive" }) }),
        /* @__PURE__ */ m.jsx("h2", { className: "text-[22px] lg:text-[24px] font-bold text-destructive mb-1", style: { fontFamily: "var(--font-display)" }, children: "Error en la validación" })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "px-7 pb-5 space-y-4", children: [
        /* @__PURE__ */ m.jsx("p", { className: "text-center text-muted-foreground text-[15px]", children: i }),
        /* @__PURE__ */ m.jsxs(pt, { size: "lg", onClick: o, children: [
          /* @__PURE__ */ m.jsx(tp, { size: 16, strokeWidth: 2 }),
          "Reintentar"
        ] })
      ] })
    ] });
  if (!t) return null;
  const u = PS(t, a), f = WS(t, a), p = { ocr: t, biometry: a, issues: f, onRestart: o, returnUrl: s };
  return u === "approved" ? /* @__PURE__ */ m.jsx(QS, { ...p }) : u === "pending" ? /* @__PURE__ */ m.jsx(ZS, { ...p }) : /* @__PURE__ */ m.jsx(JS, { ...p });
}
function eE({ children: t, mobileUrl: a }) {
  const { isMobile: i } = ip(), [o, s] = q.useState(!1);
  if (i)
    return /* @__PURE__ */ m.jsx(m.Fragment, { children: t });
  const u = a ?? window.location.href, f = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=8&data=${encodeURIComponent(u)}`, p = async () => {
    try {
      await navigator.clipboard.writeText(u), s(!0), setTimeout(() => s(!1), 2e3);
    } catch {
    }
  };
  return /* @__PURE__ */ m.jsx("div", { className: "min-h-full bg-background flex flex-col items-center justify-start overflow-y-auto px-5 py-7", children: /* @__PURE__ */ m.jsxs("div", { className: "max-w-[420px] w-full space-y-5", children: [
    /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-3 justify-center", children: [
      /* @__PURE__ */ m.jsx("img", { src: hu, alt: "ATM", height: 36, className: "object-contain", style: { maxHeight: 36, width: "auto" } }),
      /* @__PURE__ */ m.jsx("div", { className: "w-px h-6 bg-border" }),
      /* @__PURE__ */ m.jsx(
        "span",
        {
          className: "text-[15px] font-bold",
          style: { fontFamily: "var(--font-display)" },
          children: "Validación Biométrica"
        }
      )
    ] }),
    /* @__PURE__ */ m.jsx(xt, { children: /* @__PURE__ */ m.jsxs("div", { className: "px-7 pt-[28px] pb-[24px] text-center space-y-4", children: [
      /* @__PURE__ */ m.jsx("div", { className: "w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto bg-primary/10 border border-primary/30", children: /* @__PURE__ */ m.jsx(p8, { size: 36, strokeWidth: 1.5, className: "text-primary" }) }),
      /* @__PURE__ */ m.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ m.jsx(
          "h2",
          {
            className: "text-[22px] font-bold",
            style: { fontFamily: "var(--font-display)" },
            children: "Necesitás tu celular"
          }
        ),
        /* @__PURE__ */ m.jsx("p", { className: "text-[15px] text-muted-foreground font-light", children: "La validación biométrica usa la cámara del celular y solo está disponible desde dispositivos móviles. Escaneá el QR o copiá el enlace para abrirlo desde el teléfono." })
      ] }),
      /* @__PURE__ */ m.jsx("div", { className: "flex justify-center pt-2", children: /* @__PURE__ */ m.jsx("div", { className: "rounded-2xl bg-white p-3 border border-border", children: /* @__PURE__ */ m.jsx(
        "img",
        {
          src: f,
          alt: "QR para abrir desde el celular",
          width: 240,
          height: 240,
          className: "block"
        }
      ) }) }),
      /* @__PURE__ */ m.jsxs("div", { className: "space-y-2 pt-2", children: [
        /* @__PURE__ */ m.jsx("p", { className: "text-[13px] text-muted-foreground", children: "URL del validador" }),
        /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ m.jsx("code", { className: "flex-1 text-[12px] bg-muted px-3 py-2 rounded-lg break-all text-left", style: { fontFamily: "var(--font-mono)" }, children: u }),
          /* @__PURE__ */ m.jsx(
            pt,
            {
              variant: "outline",
              size: "sm",
              onClick: p,
              className: "shrink-0",
              title: "Copiar enlace",
              children: o ? /* @__PURE__ */ m.jsx(M6, { className: "h-4 w-4 text-success" }) : /* @__PURE__ */ m.jsx(Q6, { className: "h-4 w-4" })
            }
          )
        ] })
      ] })
    ] }) })
  ] }) });
}
const yh = [
  { id: "dni_front", label: "DNI" },
  { id: "dni_back", label: "DNI" },
  { id: "selfie", label: "Selfie" },
  { id: "confirm", label: "Confirmar" }
], tE = {
  welcome: 20,
  dni_front: 40,
  dni_back: 55,
  selfie: 70,
  processing: 85,
  confirm: 95,
  result: 100
};
function nE({ currentStep: t }) {
  const a = yh.findIndex((s) => s.id === t), i = tE[t] ?? 100, o = yh[a]?.label ?? (t === "result" ? "Resultado" : "Procesando");
  return /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2.5", children: [
    /* @__PURE__ */ m.jsx("div", { className: "flex items-center gap-1 flex-shrink-0", children: yh.map((s, u) => {
      const f = u < a, p = u === a;
      return /* @__PURE__ */ m.jsx(
        "div",
        {
          className: Xe(
            "h-[5px] rounded-full transition-all duration-400",
            f && "w-[5px] bg-primary opacity-60",
            p && "w-[18px] bg-primary opacity-100",
            !f && !p && "w-[5px] bg-[var(--color-surface-2)] border border-border"
          )
        },
        s.id
      );
    }) }),
    /* @__PURE__ */ m.jsx("div", { className: "flex-1 h-[1.5px] bg-[var(--color-surface-2)] rounded-full overflow-hidden", children: /* @__PURE__ */ m.jsx(
      "div",
      {
        className: "h-full bg-primary rounded-full transition-all duration-600 ease-out",
        style: { width: `${i}%` }
      }
    ) }),
    /* @__PURE__ */ m.jsx(
      "span",
      {
        className: "text-[12px] font-medium uppercase tracking-widest text-primary whitespace-nowrap flex-shrink-0",
        style: { fontFamily: "var(--font-body)", letterSpacing: "0.06em" },
        children: o
      }
    )
  ] });
}
w6(
  () => Cg.getState().token,
  () => Cg.getState().logout()
);
function aE({ onComplete: t, onRestart: a, mobileUrl: i, returnUrl: o }) {
  return /* @__PURE__ */ m.jsx(eE, { mobileUrl: i, children: /* @__PURE__ */ m.jsx(rE, { onComplete: t, onRestart: a, returnUrl: o }) });
}
function rE({ onComplete: t, onRestart: a, returnUrl: Q }) {
  const {
    step: i,
    setStep: o,
    tasks: s,
    processingLabel: u,
    ocrResult: f,
    biometryResult: p,
    error: g,
    startValidation: v,
    handleDniFront: y,
    handleDniBack: w,
    handleSelfie: j,
    confirmData: A,
    restart: x,
    rescanDniFront: N,
    rescanDniBack: k,
    rescanSelfie: H
  } = Jc(), P = q.useRef(null);
  q.useEffect(() => {
    if (i === "result" && P.current !== "result") {
      P.current = "result";
      const F = !!g, W = p && (!p.liveness_passed || !p.face_match);
      t?.({
        success: !F && !W,
        ocrResult: f,
        biometryResult: p,
        error: g
      });
    } else i !== "result" && (P.current = null);
  }, [i, f, p, g, t]);
  const V = () => {
    x(), a?.();
  };
  return /* @__PURE__ */ m.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ m.jsxs("header", { className: "sticky top-0 z-10 bg-card/90 backdrop-blur-md border-b border-border transition-colors", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "max-w-[560px] mx-auto px-5 py-[11px] flex items-center gap-3", children: [
        /* @__PURE__ */ m.jsx("img", { src: hu, alt: "ATM", height: 34, className: "object-contain", style: { maxHeight: 34, width: "auto" } }),
        /* @__PURE__ */ m.jsx("div", { className: "w-px h-5 bg-border flex-shrink-0" }),
        /* @__PURE__ */ m.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ m.jsx("h1", { className: "text-[15px] font-bold leading-tight", style: { fontFamily: "var(--font-display)" }, children: "Validación Biométrica" }),
          /* @__PURE__ */ m.jsx("p", { className: "text-[13px] text-muted-foreground font-light", children: "Agencia Tributaria Misiones" })
        ] })
      ] }),
      i !== "welcome" && /* @__PURE__ */ m.jsx("div", { className: "max-w-[560px] mx-auto px-5 pb-2", children: /* @__PURE__ */ m.jsx(nE, { currentStep: i }) })
    ] }),
    /* @__PURE__ */ m.jsxs("main", { className: "max-w-[560px] mx-auto px-4 py-3 sm:px-5 sm:py-4 screen-enter", children: [
      i === "welcome" && /* @__PURE__ */ m.jsx(u7, { onStart: v }),
      i === "dni_front" && /* @__PURE__ */ m.jsx(tb, { side: "front", onNext: y }),
      i === "dni_back" && /* @__PURE__ */ m.jsx(tb, { side: "back", onNext: w, onBack: () => o("dni_front") }),
      i === "selfie" && /* @__PURE__ */ m.jsx(XS, { onNext: j, onBack: () => o("dni_back") }),
      i === "processing" && /* @__PURE__ */ m.jsx(VS, { tasks: s, currentLabel: u }),
      i === "confirm" && f && /* @__PURE__ */ m.jsx(
        IS,
        {
          ocr: f,
          onConfirm: A,
          onRestart: V,
          onRescanDniFront: N,
          onRescanDniBack: k,
          onRescanSelfie: H
        }
      ),
      i === "result" && /* @__PURE__ */ m.jsx(
        $S,
        {
          ocr: f,
          biometry: p,
          error: g,
          onRestart: V,
          returnUrl: Q
        }
      )
    ] })
  ] });
}
const iE = `@import"https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=IBM+Plex+Mono:wght@400;500&display=swap";@layer components;@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-pan-x:initial;--tw-pan-y:initial;--tw-pinch-zoom:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-x-reverse:0;--tw-border-style:solid;--tw-divide-y-reverse:0;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:"IBM Plex Mono", monospace;--color-red-400:oklch(70.4% .191 22.216);--color-red-500:oklch(63.7% .237 25.331);--color-amber-400:oklch(82.8% .189 84.429);--color-green-400:oklch(79.2% .209 151.711);--color-green-500:oklch(72.3% .219 149.579);--color-blue-400:oklch(70.7% .165 254.624);--color-purple-400:oklch(71.4% .203 305.504);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--container-5xl:64rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--font-weight-light:300;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--font-weight-extrabold:800;--tracking-tight:-.025em;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-snug:1.375;--leading-relaxed:1.625;--radius-sm:6px;--radius-md:12px;--radius-lg:18px;--radius-xl:.75rem;--radius-2xl:1rem;--shadow-sm:0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a;--shadow-md:0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a;--shadow-lg:0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;--ease-out:cubic-bezier(0, 0, .2, 1);--ease-in-out:cubic-bezier(.4, 0, .2, 1);--animate-spin:spin 1s linear infinite;--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-background:#fff;--color-surface:#f7f8fa;--color-surface-2:#eef1f5;--color-primary:#6b2fa0;--color-primary-foreground:#fff;--color-primary-end:#a03060;--color-accent:#0e6eb5;--color-accent-end:#1a8fd0;--color-success:#0a8f5c;--color-success-foreground:#fff;--color-destructive:#b3261e;--color-destructive-foreground:#fff;--color-warning:#b6790d;--color-foreground:#0f172a;--color-muted-foreground:#5e6b7f;--color-dim:#c2cce0;--color-card:#fff;--color-card-foreground:#0f172a;--color-border:#113a5c1f;--color-border-active:#6b2fa061;--color-muted:#eef1f5;--color-secondary:#eef1f5;--color-secondary-foreground:#0f172a;--font-display:"Bricolage Grotesque", sans-serif;--font-body:"DM Sans", sans-serif}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer utilities{.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.not-sr-only{clip-path:none;white-space:normal;width:auto;height:auto;margin:0;padding:0;position:static;overflow:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.inset-0{inset:calc(var(--spacing) * 0)}.start{inset-inline-start:var(--spacing)}.end{inset-inline-end:var(--spacing)}.top-0{top:calc(var(--spacing) * 0)}.top-1{top:calc(var(--spacing) * 1)}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing) * 2)}.top-3{top:calc(var(--spacing) * 3)}.right-0{right:calc(var(--spacing) * 0)}.bottom-0{bottom:calc(var(--spacing) * 0)}.bottom-3{bottom:calc(var(--spacing) * 3)}.bottom-4{bottom:calc(var(--spacing) * 4)}.bottom-14{bottom:calc(var(--spacing) * 14)}.-left-\\[5px\\]{left:-5px}.left-0{left:calc(var(--spacing) * 0)}.left-1{left:calc(var(--spacing) * 1)}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing) * 2)}.left-2\\.5{left:calc(var(--spacing) * 2.5)}.left-3{left:calc(var(--spacing) * 3)}.isolate{isolation:isolate}.isolation-auto{isolation:auto}.z-10{z-index:10}.z-20{z-index:20}.z-50{z-index:50}.z-\\[1\\]{z-index:1}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.-mx-2{margin-inline:calc(var(--spacing) * -2)}.mx-7{margin-inline:calc(var(--spacing) * 7)}.mx-auto{margin-inline:auto}.my-\\[10px\\]{margin-block:10px}.mt-0{margin-top:calc(var(--spacing) * 0)}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-1\\.5{margin-top:calc(var(--spacing) * 1.5)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mr-2{margin-right:calc(var(--spacing) * 2)}.mb-1{margin-bottom:calc(var(--spacing) * 1)}.mb-1\\.5{margin-bottom:calc(var(--spacing) * 1.5)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.ml-1{margin-left:calc(var(--spacing) * 1)}.ml-2{margin-left:calc(var(--spacing) * 2)}.ml-auto{margin-left:auto}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-grid{display:inline-grid}.inline-table{display:inline-table}.list-item{display:list-item}.table{display:table}.table-caption{display:table-caption}.table-cell{display:table-cell}.table-column{display:table-column}.table-column-group{display:table-column-group}.table-footer-group{display:table-footer-group}.table-header-group{display:table-header-group}.table-row{display:table-row}.table-row-group{display:table-row-group}.h-1{height:calc(var(--spacing) * 1)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-2{height:calc(var(--spacing) * 2)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-11{height:calc(var(--spacing) * 11)}.h-12{height:calc(var(--spacing) * 12)}.h-14{height:calc(var(--spacing) * 14)}.h-48{height:calc(var(--spacing) * 48)}.h-\\[1\\.5px\\]{height:1.5px}.h-\\[2px\\]{height:2px}.h-\\[5px\\]{height:5px}.h-\\[16px\\]{height:16px}.h-\\[28px\\]{height:28px}.h-\\[40px\\]{height:40px}.h-\\[72px\\]{height:72px}.h-\\[76px\\]{height:76px}.h-auto{height:auto}.h-full{height:100%}.h-px{height:1px}.max-h-48{max-height:calc(var(--spacing) * 48)}.min-h-\\[96px\\]{min-height:96px}.min-h-\\[120px\\]{min-height:120px}.min-h-full{min-height:100%}.min-h-screen{min-height:100vh}.w-2{width:calc(var(--spacing) * 2)}.w-2\\.5{width:calc(var(--spacing) * 2.5)}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-4{width:calc(var(--spacing) * 4)}.w-5{width:calc(var(--spacing) * 5)}.w-6{width:calc(var(--spacing) * 6)}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-24{width:calc(var(--spacing) * 24)}.w-28{width:calc(var(--spacing) * 28)}.w-\\[5px\\]{width:5px}.w-\\[16px\\]{width:16px}.w-\\[18px\\]{width:18px}.w-\\[28px\\]{width:28px}.w-\\[40px\\]{width:40px}.w-\\[72px\\]{width:72px}.w-\\[76px\\]{width:76px}.w-auto{width:auto}.w-full{width:100%}.w-px{width:1px}.max-w-4xl{max-width:var(--container-4xl)}.max-w-5xl{max-width:var(--container-5xl)}.max-w-\\[180px\\]{max-width:180px}.max-w-\\[420px\\]{max-width:420px}.max-w-\\[560px\\]{max-width:560px}.max-w-md{max-width:var(--container-md)}.max-w-sm{max-width:var(--container-sm)}.min-w-\\[220px\\]{min-width:220px}.flex-1{flex:1}.flex-shrink{flex-shrink:1}.flex-shrink-0{flex-shrink:0}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.-translate-x-1{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-none{translate:none}.scale-3d{scale:var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.animate-\\[fadeIn_120ms_ease-out\\]{animation:.12s ease-out fadeIn}.animate-spin{animation:var(--animate-spin)}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.touch-pinch-zoom{--tw-pinch-zoom:pinch-zoom;touch-action:var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)}.resize{resize:both}.list-none{list-style-type:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:calc(var(--spacing) * 0)}.gap-0\\.5{gap:calc(var(--spacing) * .5)}.gap-1{gap:calc(var(--spacing) * 1)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-2\\.5{gap:calc(var(--spacing) * 2.5)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-\\[10px\\]{gap:10px}:where(.space-y-0>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 0) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 0) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-0\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * .5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * .5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-reverse>:not(:last-child)){--tw-space-y-reverse:1}:where(.space-x-reverse>:not(:last-child)){--tw-space-x-reverse:1}:where(.divide-x>:not(:last-child)){--tw-divide-x-reverse:0;border-inline-style:var(--tw-border-style);border-inline-start-width:calc(1px * var(--tw-divide-x-reverse));border-inline-end-width:calc(1px * calc(1 - var(--tw-divide-x-reverse)))}:where(.divide-y>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-top-style:var(--tw-border-style);border-top-width:calc(1px * var(--tw-divide-y-reverse));border-bottom-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)))}:where(.divide-y-reverse>:not(:last-child)){--tw-divide-y-reverse:1}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-\\[10px\\]{border-radius:10px}.rounded-\\[18px\\]{border-radius:18px}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-s{border-start-start-radius:.25rem;border-end-start-radius:.25rem}.rounded-ss{border-start-start-radius:.25rem}.rounded-e{border-start-end-radius:.25rem;border-end-end-radius:.25rem}.rounded-se{border-start-end-radius:.25rem}.rounded-ee{border-end-end-radius:.25rem}.rounded-es{border-end-start-radius:.25rem}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.rounded-l{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-tl{border-top-left-radius:.25rem}.rounded-r{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.rounded-tr{border-top-right-radius:.25rem}.rounded-b{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-br{border-bottom-right-radius:.25rem}.rounded-bl{border-bottom-left-radius:.25rem}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-x{border-inline-style:var(--tw-border-style);border-inline-width:1px}.border-y{border-block-style:var(--tw-border-style);border-block-width:1px}.border-s{border-inline-start-style:var(--tw-border-style);border-inline-start-width:1px}.border-e{border-inline-end-style:var(--tw-border-style);border-inline-end-width:1px}.border-bs{border-block-start-style:var(--tw-border-style);border-block-start-width:1px}.border-be{border-block-end-style:var(--tw-border-style);border-block-end-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-\\[var\\(--color-border-active\\)\\]{border-color:var(--color-border-active)}.border-amber-400{border-color:var(--color-amber-400)}.border-border{border-color:var(--color-border)}.border-border\\/50{border-color:#113a5c10}@supports (color:color-mix(in lab,red,red)){.border-border\\/50{border-color:color-mix(in oklab,var(--color-border) 50%,transparent)}}.border-border\\/60{border-color:#113a5c13}@supports (color:color-mix(in lab,red,red)){.border-border\\/60{border-color:color-mix(in oklab,var(--color-border) 60%,transparent)}}.border-border\\/80{border-color:#113a5c19}@supports (color:color-mix(in lab,red,red)){.border-border\\/80{border-color:color-mix(in oklab,var(--color-border) 80%,transparent)}}.border-card{border-color:var(--color-card)}.border-destructive{border-color:var(--color-destructive)}.border-destructive\\/20{border-color:#b3261e33}@supports (color:color-mix(in lab,red,red)){.border-destructive\\/20{border-color:color-mix(in oklab,var(--color-destructive) 20%,transparent)}}.border-destructive\\/30{border-color:#b3261e4d}@supports (color:color-mix(in lab,red,red)){.border-destructive\\/30{border-color:color-mix(in oklab,var(--color-destructive) 30%,transparent)}}.border-green-400{border-color:var(--color-green-400)}.border-primary{border-color:var(--color-primary)}.border-primary\\/20{border-color:#6b2fa033}@supports (color:color-mix(in lab,red,red)){.border-primary\\/20{border-color:color-mix(in oklab,var(--color-primary) 20%,transparent)}}.border-primary\\/30{border-color:#6b2fa04d}@supports (color:color-mix(in lab,red,red)){.border-primary\\/30{border-color:color-mix(in oklab,var(--color-primary) 30%,transparent)}}.border-primary\\/50{border-color:#6b2fa080}@supports (color:color-mix(in lab,red,red)){.border-primary\\/50{border-color:color-mix(in oklab,var(--color-primary) 50%,transparent)}}.border-success{border-color:var(--color-success)}.border-success\\/25{border-color:#0a8f5c40}@supports (color:color-mix(in lab,red,red)){.border-success\\/25{border-color:color-mix(in oklab,var(--color-success) 25%,transparent)}}.border-success\\/30{border-color:#0a8f5c4d}@supports (color:color-mix(in lab,red,red)){.border-success\\/30{border-color:color-mix(in oklab,var(--color-success) 30%,transparent)}}.border-warning{border-color:var(--color-warning)}.border-warning\\/20{border-color:#b6790d33}@supports (color:color-mix(in lab,red,red)){.border-warning\\/20{border-color:color-mix(in oklab,var(--color-warning) 20%,transparent)}}.border-warning\\/25{border-color:#b6790d40}@supports (color:color-mix(in lab,red,red)){.border-warning\\/25{border-color:color-mix(in oklab,var(--color-warning) 25%,transparent)}}.border-warning\\/30{border-color:#b6790d4d}@supports (color:color-mix(in lab,red,red)){.border-warning\\/30{border-color:color-mix(in oklab,var(--color-warning) 30%,transparent)}}.border-warning\\/50{border-color:#b6790d80}@supports (color:color-mix(in lab,red,red)){.border-warning\\/50{border-color:color-mix(in oklab,var(--color-warning) 50%,transparent)}}.border-white{border-color:var(--color-white)}.border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){.border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}.border-t-primary{border-top-color:var(--color-primary)}.bg-\\[var\\(--color-surface-2\\)\\]{background-color:var(--color-surface-2)}.bg-accent{background-color:var(--color-accent)}.bg-amber-400{background-color:var(--color-amber-400)}.bg-background{background-color:var(--color-background)}.bg-black{background-color:var(--color-black)}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}.bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}.bg-black\\/70{background-color:#000000b3}@supports (color:color-mix(in lab,red,red)){.bg-black\\/70{background-color:color-mix(in oklab,var(--color-black) 70%,transparent)}}.bg-black\\/80{background-color:#000c}@supports (color:color-mix(in lab,red,red)){.bg-black\\/80{background-color:color-mix(in oklab,var(--color-black) 80%,transparent)}}.bg-border{background-color:var(--color-border)}.bg-card{background-color:var(--color-card)}.bg-card\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.bg-card\\/90{background-color:color-mix(in oklab,var(--color-card) 90%,transparent)}}.bg-destructive{background-color:var(--color-destructive)}.bg-destructive\\/8{background-color:#b3261e14}@supports (color:color-mix(in lab,red,red)){.bg-destructive\\/8{background-color:color-mix(in oklab,var(--color-destructive) 8%,transparent)}}.bg-destructive\\/10{background-color:#b3261e1a}@supports (color:color-mix(in lab,red,red)){.bg-destructive\\/10{background-color:color-mix(in oklab,var(--color-destructive) 10%,transparent)}}.bg-destructive\\/15{background-color:#b3261e26}@supports (color:color-mix(in lab,red,red)){.bg-destructive\\/15{background-color:color-mix(in oklab,var(--color-destructive) 15%,transparent)}}.bg-foreground{background-color:var(--color-foreground)}.bg-foreground\\/40{background-color:#0f172a66}@supports (color:color-mix(in lab,red,red)){.bg-foreground\\/40{background-color:color-mix(in oklab,var(--color-foreground) 40%,transparent)}}.bg-green-400{background-color:var(--color-green-400)}.bg-green-500{background-color:var(--color-green-500)}.bg-muted{background-color:var(--color-muted)}.bg-muted\\/30{background-color:#eef1f54d}@supports (color:color-mix(in lab,red,red)){.bg-muted\\/30{background-color:color-mix(in oklab,var(--color-muted) 30%,transparent)}}.bg-muted\\/95{background-color:#eef1f5f2}@supports (color:color-mix(in lab,red,red)){.bg-muted\\/95{background-color:color-mix(in oklab,var(--color-muted) 95%,transparent)}}.bg-primary{background-color:var(--color-primary)}.bg-primary\\/5{background-color:#6b2fa00d}@supports (color:color-mix(in lab,red,red)){.bg-primary\\/5{background-color:color-mix(in oklab,var(--color-primary) 5%,transparent)}}.bg-primary\\/10{background-color:#6b2fa01a}@supports (color:color-mix(in lab,red,red)){.bg-primary\\/10{background-color:color-mix(in oklab,var(--color-primary) 10%,transparent)}}.bg-primary\\/15{background-color:#6b2fa026}@supports (color:color-mix(in lab,red,red)){.bg-primary\\/15{background-color:color-mix(in oklab,var(--color-primary) 15%,transparent)}}.bg-primary\\/60{background-color:#6b2fa099}@supports (color:color-mix(in lab,red,red)){.bg-primary\\/60{background-color:color-mix(in oklab,var(--color-primary) 60%,transparent)}}.bg-red-500{background-color:var(--color-red-500)}.bg-red-500\\/90{background-color:#fb2c36e6}@supports (color:color-mix(in lab,red,red)){.bg-red-500\\/90{background-color:color-mix(in oklab,var(--color-red-500) 90%,transparent)}}.bg-secondary{background-color:var(--color-secondary)}.bg-success{background-color:var(--color-success)}.bg-success\\/10{background-color:#0a8f5c1a}@supports (color:color-mix(in lab,red,red)){.bg-success\\/10{background-color:color-mix(in oklab,var(--color-success) 10%,transparent)}}.bg-success\\/15{background-color:#0a8f5c26}@supports (color:color-mix(in lab,red,red)){.bg-success\\/15{background-color:color-mix(in oklab,var(--color-success) 15%,transparent)}}.bg-surface{background-color:var(--color-surface)}.bg-transparent{background-color:#0000}.bg-warning{background-color:var(--color-warning)}.bg-warning\\/5{background-color:#b6790d0d}@supports (color:color-mix(in lab,red,red)){.bg-warning\\/5{background-color:color-mix(in oklab,var(--color-warning) 5%,transparent)}}.bg-warning\\/10{background-color:#b6790d1a}@supports (color:color-mix(in lab,red,red)){.bg-warning\\/10{background-color:color-mix(in oklab,var(--color-warning) 10%,transparent)}}.bg-warning\\/15{background-color:#b6790d26}@supports (color:color-mix(in lab,red,red)){.bg-warning\\/15{background-color:color-mix(in oklab,var(--color-warning) 15%,transparent)}}.bg-white{background-color:var(--color-white)}.bg-white\\/20{background-color:#fff3}@supports (color:color-mix(in lab,red,red)){.bg-white\\/20{background-color:color-mix(in oklab,var(--color-white) 20%,transparent)}}.bg-white\\/60{background-color:#fff9}@supports (color:color-mix(in lab,red,red)){.bg-white\\/60{background-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-\\[var\\(--color-primary\\)\\]{--tw-gradient-from:var(--color-primary);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-\\[var\\(--color-primary-end\\)\\]{--tw-gradient-to:var(--color-primary-end);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.bg-repeat{background-repeat:repeat}.mask-no-clip{-webkit-mask-clip:no-clip;mask-clip:no-clip}.mask-repeat{-webkit-mask-repeat:repeat;mask-repeat:repeat}.object-contain{object-fit:contain}.object-cover{object-fit:cover}.p-0{padding:calc(var(--spacing) * 0)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.px-1{padding-inline:calc(var(--spacing) * 1)}.px-1\\.5{padding-inline:calc(var(--spacing) * 1.5)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-5{padding-inline:calc(var(--spacing) * 5)}.px-6{padding-inline:calc(var(--spacing) * 6)}.px-7{padding-inline:calc(var(--spacing) * 7)}.py-0{padding-block:calc(var(--spacing) * 0)}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-4{padding-block:calc(var(--spacing) * 4)}.py-6{padding-block:calc(var(--spacing) * 6)}.py-7{padding-block:calc(var(--spacing) * 7)}.py-8{padding-block:calc(var(--spacing) * 8)}.py-10{padding-block:calc(var(--spacing) * 10)}.py-12{padding-block:calc(var(--spacing) * 12)}.py-\\[6px\\]{padding-block:6px}.py-\\[9px\\]{padding-block:9px}.py-\\[10px\\]{padding-block:10px}.py-\\[11px\\]{padding-block:11px}.py-\\[20px\\]{padding-block:20px}.py-\\[22px\\]{padding-block:22px}.pt-0{padding-top:calc(var(--spacing) * 0)}.pt-0\\.5{padding-top:calc(var(--spacing) * .5)}.pt-1{padding-top:calc(var(--spacing) * 1)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-5{padding-top:calc(var(--spacing) * 5)}.pt-6{padding-top:calc(var(--spacing) * 6)}.pt-\\[22px\\]{padding-top:22px}.pt-\\[28px\\]{padding-top:28px}.pr-3{padding-right:calc(var(--spacing) * 3)}.pb-2{padding-bottom:calc(var(--spacing) * 2)}.pb-3{padding-bottom:calc(var(--spacing) * 3)}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-5{padding-bottom:calc(var(--spacing) * 5)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pb-\\[10px\\]{padding-bottom:10px}.pb-\\[14px\\]{padding-bottom:14px}.pb-\\[16px\\]{padding-bottom:16px}.pb-\\[18px\\]{padding-bottom:18px}.pb-\\[20px\\]{padding-bottom:20px}.pb-\\[22px\\]{padding-bottom:22px}.pb-\\[24px\\]{padding-bottom:24px}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-9{padding-left:calc(var(--spacing) * 9)}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.font-mono{font-family:var(--font-mono)}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[15px\\]{font-size:15px}.text-\\[16px\\]{font-size:16px}.text-\\[17px\\]{font-size:17px}.text-\\[18px\\]{font-size:18px}.text-\\[20px\\]{font-size:20px}.text-\\[22px\\]{font-size:22px}.text-\\[24px\\]{font-size:24px}.text-\\[28px\\]{font-size:28px}.leading-\\[1\\.08\\]{--tw-leading:1.08;line-height:1.08}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-snug{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-extrabold{--tw-font-weight:var(--font-weight-extrabold);font-weight:var(--font-weight-extrabold)}.font-light{--tw-font-weight:var(--font-weight-light);font-weight:var(--font-weight-light)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[-0\\.02em\\]{--tw-tracking:-.02em;letter-spacing:-.02em}.tracking-\\[0\\.2em\\]{--tw-tracking:.2em;letter-spacing:.2em}.tracking-\\[0\\.15em\\]{--tw-tracking:.15em;letter-spacing:.15em}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.text-wrap{text-wrap:wrap}.break-all{word-break:break-all}.text-clip{text-overflow:clip}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.text-\\[var\\(--color-dim\\)\\]{color:var(--color-dim)}.text-accent{color:var(--color-accent)}.text-blue-400{color:var(--color-blue-400)}.text-card-foreground{color:var(--color-card-foreground)}.text-destructive{color:var(--color-destructive)}.text-destructive-foreground{color:var(--color-destructive-foreground)}.text-destructive\\/70{color:#b3261eb3}@supports (color:color-mix(in lab,red,red)){.text-destructive\\/70{color:color-mix(in oklab,var(--color-destructive) 70%,transparent)}}.text-foreground{color:var(--color-foreground)}.text-foreground\\/80{color:#0f172acc}@supports (color:color-mix(in lab,red,red)){.text-foreground\\/80{color:color-mix(in oklab,var(--color-foreground) 80%,transparent)}}.text-muted-foreground{color:var(--color-muted-foreground)}.text-muted-foreground\\/50{color:#5e6b7f80}@supports (color:color-mix(in lab,red,red)){.text-muted-foreground\\/50{color:color-mix(in oklab,var(--color-muted-foreground) 50%,transparent)}}.text-muted-foreground\\/60{color:#5e6b7f99}@supports (color:color-mix(in lab,red,red)){.text-muted-foreground\\/60{color:color-mix(in oklab,var(--color-muted-foreground) 60%,transparent)}}.text-muted-foreground\\/70{color:#5e6b7fb3}@supports (color:color-mix(in lab,red,red)){.text-muted-foreground\\/70{color:color-mix(in oklab,var(--color-muted-foreground) 70%,transparent)}}.text-muted-foreground\\/80{color:#5e6b7fcc}@supports (color:color-mix(in lab,red,red)){.text-muted-foreground\\/80{color:color-mix(in oklab,var(--color-muted-foreground) 80%,transparent)}}.text-primary{color:var(--color-primary)}.text-primary-foreground{color:var(--color-primary-foreground)}.text-purple-400{color:var(--color-purple-400)}.text-red-400{color:var(--color-red-400)}.text-secondary-foreground{color:var(--color-secondary-foreground)}.text-success{color:var(--color-success)}.text-success-foreground{color:var(--color-success-foreground)}.text-warning{color:var(--color-warning)}.text-white{color:var(--color-white)}.text-white\\/60{color:#fff9}@supports (color:color-mix(in lab,red,red)){.text-white\\/60{color:color-mix(in oklab,var(--color-white) 60%,transparent)}}.text-white\\/70{color:#ffffffb3}@supports (color:color-mix(in lab,red,red)){.text-white\\/70{color:color-mix(in oklab,var(--color-white) 70%,transparent)}}.text-white\\/80{color:#fffc}@supports (color:color-mix(in lab,red,red)){.text-white\\/80{color:color-mix(in oklab,var(--color-white) 80%,transparent)}}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.normal-case{text-transform:none}.uppercase{text-transform:uppercase}.italic{font-style:italic}.not-italic{font-style:normal}.diagonal-fractions{--tw-numeric-fraction:diagonal-fractions;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.lining-nums{--tw-numeric-figure:lining-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.oldstyle-nums{--tw-numeric-figure:oldstyle-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.proportional-nums{--tw-numeric-spacing:proportional-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.slashed-zero{--tw-slashed-zero:slashed-zero;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.stacked-fractions{--tw-numeric-fraction:stacked-fractions;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.normal-nums{font-variant-numeric:normal}.line-through{text-decoration-line:line-through}.no-underline{text-decoration-line:none}.overline{text-decoration-line:overline}.underline{text-decoration-line:underline}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.subpixel-antialiased{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-100{opacity:1}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-\\[0_0_40px_rgba\\(0\\,200\\,150\\,0\\.15\\)\\]{--tw-shadow:0 0 40px var(--tw-shadow-color,#00c89626);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-\\[0_4px_20px_rgba\\(107\\,47\\,160\\,0\\.25\\)\\]{--tw-shadow:0 4px 20px var(--tw-shadow-color,#6b2fa040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring,.ring-1{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.inset-ring{--tw-inset-ring-shadow:inset 0 0 0 1px var(--tw-inset-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-primary{--tw-ring-color:var(--color-primary)}.ring-primary\\/20{--tw-ring-color:#6b2fa033}@supports (color:color-mix(in lab,red,red)){.ring-primary\\/20{--tw-ring-color:color-mix(in oklab, var(--color-primary) 20%, transparent)}}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a)) drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a) drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.sepia{--tw-sepia:sepia(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-grayscale{--tw-backdrop-grayscale:grayscale(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-invert{--tw-backdrop-invert:invert(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-sepia{--tw-backdrop-sepia:sepia(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-100{--tw-duration:.1s;transition-duration:.1s}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-400{--tw-duration:.4s;transition-duration:.4s}.duration-600{--tw-duration:.6s;transition-duration:.6s}.duration-1000{--tw-duration:1s;transition-duration:1s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-linear{--tw-ease:linear;transition-timing-function:linear}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}:where(.divide-x-reverse>:not(:last-child)){--tw-divide-x-reverse:1}.ring-inset{--tw-ring-inset:inset}.placeholder\\:text-muted-foreground\\/60::placeholder{color:#5e6b7f99}@supports (color:color-mix(in lab,red,red)){.placeholder\\:text-muted-foreground\\/60::placeholder{color:color-mix(in oklab,var(--color-muted-foreground) 60%,transparent)}}.last\\:border-0:last-child{border-style:var(--tw-border-style);border-width:0}.last\\:border-b-0:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}@media(hover:hover){.hover\\:-translate-y-0\\.5:hover{--tw-translate-y:calc(var(--spacing) * -.5);translate:var(--tw-translate-x) var(--tw-translate-y)}.hover\\:-translate-y-px:hover{--tw-translate-y:-1px;translate:var(--tw-translate-x) var(--tw-translate-y)}.hover\\:border-\\[var\\(--color-border-active\\)\\]:hover{border-color:var(--color-border-active)}.hover\\:border-primary\\/30:hover{border-color:#6b2fa04d}@supports (color:color-mix(in lab,red,red)){.hover\\:border-primary\\/30:hover{border-color:color-mix(in oklab,var(--color-primary) 30%,transparent)}}.hover\\:border-primary\\/60:hover{border-color:#6b2fa099}@supports (color:color-mix(in lab,red,red)){.hover\\:border-primary\\/60:hover{border-color:color-mix(in oklab,var(--color-primary) 60%,transparent)}}.hover\\:bg-\\[var\\(--color-surface-2\\)\\]:hover{background-color:var(--color-surface-2)}.hover\\:bg-destructive\\/90:hover{background-color:#b3261ee6}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-destructive\\/90:hover{background-color:color-mix(in oklab,var(--color-destructive) 90%,transparent)}}.hover\\:bg-muted\\/60:hover{background-color:#eef1f599}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-muted\\/60:hover{background-color:color-mix(in oklab,var(--color-muted) 60%,transparent)}}.hover\\:bg-secondary\\/80:hover{background-color:#eef1f5cc}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-secondary\\/80:hover{background-color:color-mix(in oklab,var(--color-secondary) 80%,transparent)}}.hover\\:bg-success\\/90:hover{background-color:#0a8f5ce6}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-success\\/90:hover{background-color:color-mix(in oklab,var(--color-success) 90%,transparent)}}.hover\\:from-\\[var\\(--color-accent\\)\\]:hover{--tw-gradient-from:var(--color-accent);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.hover\\:to-\\[var\\(--color-accent-end\\)\\]:hover{--tw-gradient-to:var(--color-accent-end);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.hover\\:text-destructive:hover{color:var(--color-destructive)}.hover\\:text-foreground:hover{color:var(--color-foreground)}.hover\\:text-primary:hover{color:var(--color-primary)}.hover\\:text-white:hover{color:var(--color-white)}.hover\\:shadow-\\[0_4px_20px_rgba\\(14\\,110\\,181\\,0\\.30\\)\\]:hover{--tw-shadow:0 4px 20px var(--tw-shadow-color,#0e6eb54d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\:shadow-md:hover{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:border-primary:focus{border-color:var(--color-primary)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-primary\\/15:focus{--tw-ring-color:#6b2fa026}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-primary\\/15:focus{--tw-ring-color:color-mix(in oklab, var(--color-primary) 15%, transparent)}}.focus\\:ring-primary\\/20:focus{--tw-ring-color:#6b2fa033}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-primary\\/20:focus{--tw-ring-color:color-mix(in oklab, var(--color-primary) 20%, transparent)}}.focus\\:ring-primary\\/30:focus{--tw-ring-color:#6b2fa04d}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-primary\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-primary) 30%, transparent)}}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:bg-muted\\/60:focus-visible{background-color:#eef1f599}@supports (color:color-mix(in lab,red,red)){.focus-visible\\:bg-muted\\/60:focus-visible{background-color:color-mix(in oklab,var(--color-muted) 60%,transparent)}}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-primary\\/40:focus-visible{--tw-ring-color:#6b2fa066}@supports (color:color-mix(in lab,red,red)){.focus-visible\\:ring-primary\\/40:focus-visible{--tw-ring-color:color-mix(in oklab, var(--color-primary) 40%, transparent)}}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-inset:focus-visible{--tw-ring-inset:inset}.active\\:scale-\\[0\\.98\\]:active{scale:.98}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:opacity-50:disabled{opacity:.5}@media(min-width:40rem){.sm\\:h-2\\.5{height:calc(var(--spacing) * 2.5)}.sm\\:w-10{width:calc(var(--spacing) * 10)}.sm\\:gap-2{gap:calc(var(--spacing) * 2)}:where(.sm\\:space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.sm\\:space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}.sm\\:p-6{padding:calc(var(--spacing) * 6)}.sm\\:px-5{padding-inline:calc(var(--spacing) * 5)}.sm\\:px-6{padding-inline:calc(var(--spacing) * 6)}.sm\\:py-2{padding-block:calc(var(--spacing) * 2)}.sm\\:py-4{padding-block:calc(var(--spacing) * 4)}.sm\\:pt-0{padding-top:calc(var(--spacing) * 0)}.sm\\:pt-1{padding-top:calc(var(--spacing) * 1)}.sm\\:pb-4{padding-bottom:calc(var(--spacing) * 4)}.sm\\:text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.sm\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.sm\\:text-\\[15px\\]{font-size:15px}.sm\\:text-\\[18px\\]{font-size:18px}.sm\\:text-\\[32px\\]{font-size:32px}}@media(min-width:48rem){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:64rem){.lg\\:grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.lg\\:text-\\[16px\\]{font-size:16px}.lg\\:text-\\[18px\\]{font-size:18px}.lg\\:text-\\[20px\\]{font-size:20px}.lg\\:text-\\[22px\\]{font-size:22px}.lg\\:text-\\[24px\\]{font-size:24px}.lg\\:text-\\[26px\\]{font-size:26px}.lg\\:text-\\[36px\\]{font-size:36px}}}body{font-family:var(--font-body);background-color:var(--color-background);color:var(--color-foreground);-webkit-font-smoothing:antialiased;min-height:100vh;margin:0;transition:background-color .26s,color .26s}body:after{content:"";opacity:.025;pointer-events:none;z-index:9999;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");position:fixed;inset:0}@keyframes scan-pass{0%{opacity:0;top:0%}4%{opacity:.55}96%{opacity:.55}to{opacity:0;top:100%}}.scan-line{background:linear-gradient(90deg,transparent 0%,transparent 10%,var(--color-accent) 50%,transparent 90%,transparent 100%);opacity:0;height:1px;animation:4s ease-in-out 1s infinite scan-pass;position:absolute;left:0;right:0}@keyframes ring-spin{to{transform:rotate(360deg)}}.ring-spinner{border:2px solid var(--color-surface-2);border-top-color:var(--color-primary);border-right-color:var(--color-accent);border-radius:50%;width:64px;height:64px;animation:1.3s linear infinite ring-spin;position:relative}.ring-spinner:after{content:"";border:1px solid var(--color-border-active);border-radius:50%;animation:2.1s linear infinite reverse ring-spin;position:absolute;inset:9px}@keyframes screen-in{0%{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}.screen-enter{animation:.22s both screen-in}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes countdown-pop{0%{opacity:0;transform:translate(-50%,-50%)scale(.5)}50%{opacity:1;transform:translate(-50%,-50%)scale(1.2)}to{opacity:1;transform:translate(-50%,-50%)scale(1)}}@keyframes capture-flash{0%{opacity:.9}to{opacity:0}}@keyframes capture-warning-fade{0%{opacity:0;transform:translate(-50%,12px)}10%{opacity:1;transform:translate(-50%)}85%{opacity:1;transform:translate(-50%)}to{opacity:0;transform:translate(-50%,12px)}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-pan-x{syntax:"*";inherits:false}@property --tw-pan-y{syntax:"*";inherits:false}@property --tw-pinch-zoom{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-divide-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-divide-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}`, cv = "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=IBM+Plex+Mono:wght@400;500&display=swap";
function lE(t) {
  let a = t.replace(/@import\s+url\([^)]*\)\s*;?/g, "");
  a = a.replace(/@import\s+['"][^'"]*['"]\s*;?/g, ""), a = a.replaceAll(":root", ":host");
  const i = [];
  return a = a.replace(
    /@property\s+([^\s{]+)\s*\{[^}]*initial-value\s*:\s*([^;}\n]+)[^}]*\}/g,
    (o, s, u) => (i.push(`${s.trim()}: ${u.trim()}`), "")
  ), i.length > 0 && (a = `:host { ${i.join("; ")} }
${a}`), a;
}
const oE = `
  :host {
    display: block;
    font-family: var(--font-body, 'DM Sans', sans-serif);
    background-color: var(--color-background, #ffffff);
    color: var(--color-foreground, #0f172a);
    min-height: 100%;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    transition: background-color 260ms ease, color 260ms ease;
    overflow: hidden;
    border-radius: 12px;
  }
`;
class sE extends HTMLElement {
  reactRoot = null;
  shadow = null;
  static get observedAttributes() {
    return ["api-url", "mobile-url", "return-url"];
  }
  connectedCallback() {
    console.log("[validador-biometrico] connectedCallback START");
    try {
      this.shadow = this.attachShadow({ mode: "open" }), this.injectStyles(), this.injectFonts();
      const a = this.getAttribute("api-url");
      a && jg(a);
      const i = document.createElement("div");
      i.id = "validador-root", this.shadow.appendChild(i), this.reactRoot = B5.createRoot(i), this.renderApp(), console.log("[validador-biometrico] connectedCallback OK");
    } catch (a) {
      console.error("[validador-biometrico] connectedCallback FAILED:", a);
    }
  }
  disconnectedCallback() {
    this.reactRoot?.unmount(), this.reactRoot = null;
  }
  attributeChangedCallback(a, i, o) {
    a === "api-url" && o && jg(o), (a === "mobile-url" || a === "return-url") && this.renderApp();
  }
  // -----------------------------------------------------------------------
  // Style injection — uses <style> tags for maximum compatibility.
  // adoptedStyleSheets + replaceSync throws on @import/@property rules.
  // -----------------------------------------------------------------------
  injectStyles() {
    if (this.shadow)
      try {
        const a = lE(iE);
        console.log("[validador-biometrico] CSS processed, length:", a.length);
        const i = document.createElement("style");
        i.textContent = a, this.shadow.appendChild(i);
        const o = document.createElement("style");
        o.textContent = oE, this.shadow.appendChild(o);
      } catch (a) {
        console.error("[validador-biometrico] CSS injection failed:", a);
      }
  }
  // -----------------------------------------------------------------------
  // Google Fonts — injected as <link> since @import inside replaceSync is
  // silently ignored. We inject into the Shadow Root AND the main document
  // to ensure fonts load regardless of browser behavior.
  // -----------------------------------------------------------------------
  injectFonts() {
    if (this.shadow) {
      const a = document.createElement("link");
      a.rel = "stylesheet", a.href = cv, this.shadow.appendChild(a);
    }
    if (!document.querySelector('link[href*="Bricolage+Grotesque"]')) {
      const a = document.createElement("link");
      a.rel = "stylesheet", a.href = cv, document.head.appendChild(a);
    }
  }
  // -----------------------------------------------------------------------
  // React render
  // -----------------------------------------------------------------------
  renderApp() {
    if (!this.reactRoot) return;
    const a = this.getAttribute("mobile-url") ?? void 0, i = this.getAttribute("return-url") ?? new URLSearchParams(window.location.search).get("return_url") ?? void 0;
    this.reactRoot.render(
      /* @__PURE__ */ m.jsx(q.StrictMode, { children: /* @__PURE__ */ m.jsx(
        aE,
        {
          mobileUrl: a,
          returnUrl: i,
          onComplete: (o) => this.handleComplete(o),
          onRestart: () => this.emit("validation-restart", null)
        }
      ) })
    );
  }
  // -----------------------------------------------------------------------
  // Event emission — CustomEvents with bubbles + composed so they cross
  // the Shadow DOM boundary and reach the host document listeners.
  // -----------------------------------------------------------------------
  emit(a, i) {
    this.dispatchEvent(
      new CustomEvent(a, {
        bubbles: !0,
        composed: !0,
        detail: i
      })
    );
  }
  handleComplete(a) {
    a.success ? this.emit("validation-success", {
      ocrResult: a.ocrResult,
      biometryResult: a.biometryResult
    }) : this.emit("validation-error", {
      error: a.error,
      ocrResult: a.ocrResult,
      biometryResult: a.biometryResult
    });
  }
}
customElements.get("validador-biometrico") || customElements.define("validador-biometrico", sE);
export {
  sE as default
};
