var ledCount = 25;

Blockly.JavaScript['matrix_new'] = function (block) {
  var code = 'getWS2812(board, 4, ' + ledCount + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['matrix_color'] = function (block) {
  var variable_matrix = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('matrix_'), Blockly.Variables.NAME_TYPE);
  var leds = [];
  for (var i = 0; i < ledCount; i++) {
    var id = i.toString();

    if (i < 10) {
      id = '0' + i.toString();
    }
    leds.push(id + block.getFieldValue('led_' + i + '_').replace('#', ''));
  }
  leds = leds.join('').toLowerCase();
  var code = variable_matrix + '.setColor(\'' + leds + '\');\n';
  return code;
};

Blockly.JavaScript['matrix_brightness'] = function (block) {
  var variable_matrix_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('matrix_'), Blockly.Variables.NAME_TYPE);
  var value_brightness_ = Blockly.JavaScript.valueToCode(block, 'brightness_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_matrix_ + '.brightness(' + value_brightness_ + ');\n';
  return code;
};

Blockly.JavaScript['matrix_off'] = function (block) {
  var variable_matrix_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('matrix_'), Blockly.Variables.NAME_TYPE);
  var code = variable_matrix_ + '.off();\n';
  return code;
};
