// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"eAdfr":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "dbea4b5750870654";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"2GA9o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addMessageToUI", ()=>addMessageToUI);
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
var _constants = require("./constants");
var _main = require("./main");
document.addEventListener("DOMContentLoaded", async ()=>{
    localStorage.setItem("numberUploadedMessages", 0);
    const token = (0, _jsCookieDefault.default).get("token");
    if (token) {
        const response = await (0, _main.getMessageHistory)(token);
        const data = await response.json();
        try {
            localStorage.setItem("messages", JSON.stringify(data));
        } catch (error) {
            console.log(error);
        }
        uploadMessageHistory();
        (0, _main.openWebsocket)();
    } else {
        (0, _constants.UI_ELEMENTS).MODAL_WINDOW.AUTHORIZATION.classList.add("open");
        (0, _constants.UI_ELEMENTS).BACKGROUND_MODAL_WINDOW.style.display = "block";
    }
});
(0, _constants.UI_ELEMENTS).MESSAGE_LIST.addEventListener("scroll", (event)=>{
    const containerHeight = event.currentTarget.clientHeight;
    const scrollHeight = event.currentTarget.scrollHeight;
    const scrollTop = event.currentTarget.scrollTop;
    const isTopOfScroll = containerHeight + Math.abs(scrollTop) + 1 >= scrollHeight;
    if (isTopOfScroll) uploadMessageHistory();
});
(0, _constants.UI_ELEMENTS).BUTTON.SETTINGS.addEventListener("click", async ()=>{
    (0, _constants.UI_ELEMENTS).MODAL_WINDOW.SETTINGS.classList.add("open");
    (0, _constants.UI_ELEMENTS).BACKGROUND_MODAL_WINDOW.style.display = "block";
    (0, _constants.UI_ELEMENTS).FORM.SETTINGS.firstElementChild.value = localStorage.getItem("name");
});
(0, _constants.UI_ELEMENTS).FORM.INPUT_MESSAGE.addEventListener("submit", (event)=>{
    event.preventDefault();
    const message = event.target.firstElementChild.value;
    event.target.firstElementChild.value = "";
    if (!message) {
        alert("\u041D\u0435\u043B\u044C\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u0443\u0441\u0442\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435!");
        return;
    }
    (0, _main.sendMessage)(message);
});
(0, _constants.UI_ELEMENTS).FORM.SETTINGS.addEventListener("submit", async (event)=>{
    event.preventDefault();
    const name = event.target.firstElementChild.value;
    const response = await (0, _main.updateName)(name);
    if (response.status === (0, _constants.HTTP).STATUS.BAD_REQUEST) {
        alert("\u0418\u043C\u044F \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435! \u041C\u0438\u043D\u0438\u043C\u0443\u043C \u0434\u0432\u0430 \u0441\u0438\u043C\u0432\u043E\u043B\u0430!");
        return;
    }
    // const data = await response.json();
    // console.log(data);
    localStorage.setItem("name", name);
    alert("\u0418\u043C\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0438\u043D\u043E!");
});
(0, _constants.UI_ELEMENTS).FORM.AUTHORIZATION.addEventListener("submit", async (event)=>{
    event.preventDefault();
    const email = event.target.firstElementChild.value;
    const response = await (0, _main.sendEmail)(email);
    if (response.status === (0, _constants.HTTP).STATUS.BAD_REQUEST) {
        alert("\u0412\u0432\u0435\u0434\u0435\u043D \u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B. \u043F\u043E\u0447\u0442\u044B!");
        return;
    }
    alert("\u041D\u0430 \u043F\u043E\u0447\u0442\u0443 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u043A\u043E\u0434 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F!");
    (0, _constants.UI_ELEMENTS).MODAL_WINDOW.AUTHORIZATION.classList.remove("open");
    (0, _constants.UI_ELEMENTS).MODAL_WINDOW.ACCEPT.classList.add("open");
});
(0, _constants.UI_ELEMENTS).FORM.ACCEPT.addEventListener("submit", async (event)=>{
    event.preventDefault();
    const token = event.target.firstElementChild.value;
    const response = await (0, _main.getMessageHistory)(token);
    if (response.status === (0, _constants.HTTP).STATUS.UNAUTHORIZED) {
        alert("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043E\u0434 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F!");
        return;
    }
    const data = await response.json();
    try {
        localStorage.setItem("messages", JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
    (0, _jsCookieDefault.default).set("token", token);
    const personalInfoResponse = await (0, _main.getPersonalInfo)();
    const personalInfo = await personalInfoResponse.json();
    localStorage.setItem("email", personalInfo.email);
    localStorage.setItem("name", personalInfo.name);
    uploadMessageHistory();
    (0, _main.openWebsocket)();
    (0, _constants.UI_ELEMENTS).MODAL_WINDOW.ACCEPT.classList.remove("open");
    (0, _constants.UI_ELEMENTS).BACKGROUND_MODAL_WINDOW.style.display = "none";
    event.target.firstElementChild.value = "";
});
function addMessageToUI(name, message, date, isPersonalMessage, isSendingLive) {
    const hoursNow = date.getHours();
    const minutesNow = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(); //
    const messageType = isPersonalMessage ? "dialog__personal_message" : "dialog__someone_message";
    let li = document.createElement("li");
    li.append((0, _constants.UI_ELEMENTS).TEMPLATE.content.cloneNode(true));
    li.firstElementChild.textContent = `${name}: ${message}`;
    li.lastElementChild.textContent = `${hoursNow}:${minutesNow}`;
    li.classList.add("dialog__message", "dialog__message-box", messageType);
    if (isSendingLive) (0, _constants.UI_ELEMENTS).MESSAGE_LIST.prepend(li);
    else (0, _constants.UI_ELEMENTS).MESSAGE_LIST.append(li);
}
async function uploadMessageHistory() {
    const firstIndex = localStorage.getItem("numberUploadedMessages");
    //  
    localStorage.setItem("numberUploadedMessages", Number(localStorage.getItem("numberUploadedMessages")) + 19);
    const lastIndex = localStorage.getItem("numberUploadedMessages");
    try {
        const data = JSON.parse(localStorage.getItem("messages"));
        data.messages.forEach((item, index)=>{
            let isValidIndex = index >= firstIndex && index < lastIndex;
            if (isValidIndex) {
                const dateNow = new Date(item.createdAt);
                const email = localStorage.getItem("email");
                if (item.user.email === email) addMessageToUI(item.user.name, item.text, dateNow, true, false);
                else addMessageToUI(item.user.name, item.text, dateNow, false, false);
            } else return;
        });
    } catch (error) {
        console.log(error);
    }
}

},{"js-cookie":"c8bBu","./constants":"1j8D1","./main":"bDbGG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c8bBu":[function(require,module,exports) {
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    /* eslint-disable no-var */ function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)target[key] = source[key];
        }
        return target;
    }
    /* eslint-enable no-var */ /* eslint-disable no-var */ var defaultConverter = {
        read: function(value) {
            if (value[0] === '"') value = value.slice(1, -1);
            return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
        },
        write: function(value) {
            return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
        }
    };
    /* eslint-enable no-var */ /* eslint-disable no-var */ function init(converter, defaultAttributes) {
        function set(name, value, attributes) {
            if (typeof document === "undefined") return;
            attributes = assign({}, defaultAttributes, attributes);
            if (typeof attributes.expires === "number") attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
            if (attributes.expires) attributes.expires = attributes.expires.toUTCString();
            name = encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var stringifiedAttributes = "";
            for(var attributeName in attributes){
                if (!attributes[attributeName]) continue;
                stringifiedAttributes += "; " + attributeName;
                if (attributes[attributeName] === true) continue;
                // Considers RFC 6265 section 5.2:
                // ...
                // 3.  If the remaining unparsed-attributes contains a %x3B (";")
                //     character:
                // Consume the characters of the unparsed-attributes up to,
                // not including, the first %x3B (";") character.
                // ...
                stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
            }
            return document.cookie = name + "=" + converter.write(value, name) + stringifiedAttributes;
        }
        function get(name) {
            if (typeof document === "undefined" || arguments.length && !name) return;
            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all.
            var cookies = document.cookie ? document.cookie.split("; ") : [];
            var jar = {};
            for(var i = 0; i < cookies.length; i++){
                var parts = cookies[i].split("=");
                var value = parts.slice(1).join("=");
                try {
                    var found = decodeURIComponent(parts[0]);
                    jar[found] = converter.read(value, found);
                    if (name === found) break;
                } catch (e) {}
            }
            return name ? jar[name] : jar;
        }
        return Object.create({
            set,
            get,
            remove: function(name, attributes) {
                set(name, "", assign({}, attributes, {
                    expires: -1
                }));
            },
            withAttributes: function(attributes) {
                return init(this.converter, assign({}, this.attributes, attributes));
            },
            withConverter: function(converter) {
                return init(assign({}, this.converter, converter), this.attributes);
            }
        }, {
            attributes: {
                value: Object.freeze(defaultAttributes)
            },
            converter: {
                value: Object.freeze(converter)
            }
        });
    }
    var api = init(defaultConverter, {
        path: "/"
    });
    /* eslint-enable no-var */ return api;
});

},{}],"1j8D1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UI_ELEMENTS", ()=>UI_ELEMENTS);
parcelHelpers.export(exports, "URL", ()=>URL);
parcelHelpers.export(exports, "HTTP", ()=>HTTP);
parcelHelpers.export(exports, "WS_READY_STATE", ()=>WS_READY_STATE);
const UI_ELEMENTS = {
    FORM: {
        AUTHORIZATION: document.querySelector(".authorization__form"),
        SETTINGS: document.querySelector(".settings__form"),
        ACCEPT: document.querySelector(".accept__form"),
        INPUT_MESSAGE: document.querySelector(".dialog__bottom")
    },
    MODAL_WINDOW: {
        AUTHORIZATION: document.querySelector(".authorization"),
        SETTINGS: document.querySelector(".settings"),
        ACCEPT: document.querySelector(".accept")
    },
    BUTTON: {
        AUTHORIZATION_TOKEN_BTN: document.querySelector(".authorization__token-btn"),
        ACCEPT_CLOSE: document.querySelector(".accept__close"),
        SETTINGS_CLOSE: document.querySelector(".settings__close"),
        SETTINGS: document.querySelector(".dialog__btn-settings"),
        EXIT: document.querySelector(".dialog__btn-exit")
    },
    BACKGROUND_MODAL_WINDOW: document.querySelector(".background-modal_window"),
    TEMPLATE: document.getElementById("message_submit"),
    MESSAGE_LIST: document.querySelector(".dialog__message-list")
};
const URL = {
    API: {
        MESSAGES: "https://edu.strada.one/api/messages",
        USER: "https://edu.strada.one/api/user",
        USER_ME: "https://edu.strada.one/api/user/me"
    },
    WEB_SOCKET: "ws://edu.strada.one/websockets?"
};
const HTTP = {
    STATUS: {
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401
    }
};
const WS_READY_STATE = {
    OPEN: 1,
    CLOSED: 3
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bDbGG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sendRequest", ()=>sendRequest);
parcelHelpers.export(exports, "updateName", ()=>updateName);
parcelHelpers.export(exports, "sendEmail", ()=>sendEmail);
parcelHelpers.export(exports, "getPersonalInfo", ()=>getPersonalInfo);
parcelHelpers.export(exports, "getMessageHistory", ()=>getMessageHistory);
parcelHelpers.export(exports, "handleRecevingMessages", ()=>handleRecevingMessages);
parcelHelpers.export(exports, "openWebsocket", ()=>openWebsocket);
parcelHelpers.export(exports, "sendMessage", ()=>sendMessage);
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
var _constants = require("./constants");
var _view = require("./view");
let socket;
async function sendRequest(url, method, body, headers) {
    const options = {
        method: method,
        headers: headers
    };
    try {
        const isNotEmptyBody = Object.keys(body).length;
        if (isNotEmptyBody) options.body = JSON.stringify(body);
    } catch (error) {
        console.log(error);
    }
    return await fetch(url, options);
}
function updateName(name) {
    const token = (0, _jsCookieDefault.default).get("token");
    const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    };
    return sendRequest((0, _constants.URL).API.USER, "PATCH", {
        name: name
    }, headers);
}
function sendEmail(email) {
    const headers = {
        "Content-Type": "application/json"
    };
    return sendRequest((0, _constants.URL).API.USER, "POST", {
        email: email
    }, headers);
}
function getPersonalInfo() {
    const token = (0, _jsCookieDefault.default).get("token");
    const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    };
    return sendRequest((0, _constants.URL).API.USER_ME, "GET", {}, headers);
}
function getMessageHistory(token) {
    const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    };
    return sendRequest((0, _constants.URL).API.MESSAGES, "GET", {}, headers);
}
function handleRecevingMessages() {
    socket.onmessage = function(event) {
        try {
            const data = JSON.parse(event.data);
            const dateNow = new Date(data.createdAt);
            const email = localStorage.getItem("email");
            if (data.user.email === email) (0, _view.addMessageToUI)(data.user.name, data.text, dateNow, true, true);
            else (0, _view.addMessageToUI)(data.user.name, data.text, dateNow, false, true);
        } catch (error) {
            console.log(error);
        }
    };
}
function openWebsocket() {
    try {
        const token = (0, _jsCookieDefault.default).get("token");
        const isSocketOpen = socket?.readyState === (0, _constants.WS_READY_STATE).OPEN;
        const isSocketClose = socket?.readyState === (0, _constants.WS_READY_STATE).CLOSED || !socket;
        if (isSocketOpen) {
            socket.close();
            socket = new WebSocket((0, _constants.URL).WEB_SOCKET + token);
            handleRecevingMessages();
        } else if (isSocketClose) {
            socket = new WebSocket((0, _constants.URL).WEB_SOCKET + token);
            handleRecevingMessages();
        }
    } catch (error) {
        console.log(error);
    }
}
function sendMessage(message) {
    try {
        if (socket?.readyState === 1) socket.send(JSON.stringify({
            text: `${message}`
        }));
    } catch (error) {
        console.log(error);
    }
}

},{"js-cookie":"c8bBu","./constants":"1j8D1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./view":"2GA9o"}]},["eAdfr","2GA9o"], "2GA9o", "parcelRequire25d8")

//# sourceMappingURL=index.50870654.js.map
