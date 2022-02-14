const replaceUserAgent = "(" + function () {
  Object.defineProperty(Navigator.prototype, "appVersion",{
    value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.81 Safari/537.36.",
    configurable: false,
    enumerable: true,
    writable: false
  })
} + ")();"


const injectScriptEl = document.createElement("script")
injectScriptEl.textContent = replaceUserAgent
document.documentElement.appendChild(injectScriptEl)
injectScriptEl.remove()
