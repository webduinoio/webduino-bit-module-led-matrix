+(function (window, webduino) {

  'use strict';

  window.getMatrix = function (board, pin, leds) {
    return new webduino.module.Matrix(board, pin, leds);
  };

}(window, window.webduino));
