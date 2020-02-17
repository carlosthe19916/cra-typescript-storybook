(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@testing-library/jest-dom/extend-expect"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@testing-library/jest-dom/extend-expect"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.extendExpect);
    global.undefined = mod.exports;
  }
})(this, function () {
  "use strict";
});
//# sourceMappingURL=setupTests.js.map