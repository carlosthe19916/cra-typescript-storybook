(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./MyComponent"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./MyComponent"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.MyComponent);
    global.undefined = mod.exports;
  }
})(this, function (exports, _MyComponent) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_MyComponent).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _MyComponent[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map