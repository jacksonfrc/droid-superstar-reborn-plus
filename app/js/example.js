'use strict';


dragula([$('left-copy-1tomany'), $('right-copy-1tomany')], {
  copy: function (el, source) {
    return source === $('left-copy-1tomany');
  },
  accepts: function (el, target) {
    return target !== $('left-copy-1tomany');
  }
});

function $ (id) {
  return document.getElementById(id);
}