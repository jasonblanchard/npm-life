(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.MyLibrary = factory();
})(this, function () {
  'use strict';

  var Another = {
    anotherFn: function anotherFn() {
      return 'ok';
    }
  };

  var MyLibrary = {
    anotherFn: function anotherFn() {
      return Another.anotherFn() + ', friend';
    },
    mainFn: function mainFn() {
      return 'hello';
    }
  };

  var index = MyLibrary;

  return index;
});
//# sourceMappingURL=./library-dist.js.map