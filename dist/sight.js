(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.sight = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    // Merge defaults into config
    var _defaultConfig$config = _extends({}, defaultConfig, config),
        selector = _defaultConfig$config.selector,
        threshold = _defaultConfig$config.threshold;
    // Select elements


    var elements = document.querySelectorAll(selector);
    // Create an observer
    var observer = void 0;
    // If IntersectionObserver is not supported break
    if (!('IntersectionObserver' in window)) {
      return;
    }

    function observe(elements) {
      // Create the new observer
      observer = new IntersectionObserver(onIntersection, config);

      Array.from(elements).forEach(function (element) {
        // For each element observe it
        observer.observe(element);
      });
    }

    function onIntersection(entries) {
      Array.from(entries).forEach(function (entry) {
        // For each entry remove an element from the count
        if (entry.intersectionRatio > 0) {
          // Animate the element => Hack w/ setTimeout
          setTimeout(function () {
            return entry.target.classList.add('animated');
          }, 300);
          // Stop watching the element
          observer.unobserve(entry.target);
        }
      });
    }

    // Run the observer agains the marked elements
    return observe(elements);
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var defaultConfig = {
    // Default selector
    selector: '[data-sight]',
    // Default threshold => Doesn't work for some reason
    threshold: 0.5
  };

  module.exports = exports['default'];
});