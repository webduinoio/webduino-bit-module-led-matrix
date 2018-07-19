var ledCount = 25;

Blockly.JavaScript['matrix_new'] = function (block) {
  var code = 'getMatrix(board, 4, ' + ledCount + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['matrix_color'] = function (block) {
  var variable_matrix = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('matrix_'), Blockly.Variables.NAME_TYPE);
  var leds = '';
  var toHex = function (num) {
    var str = num.toString(16);
    if (parseInt(num) < 16) {
      str = '0' + str;
    }
    return str;
  };
  var getLedString = function (id, color) {
    return (toHex(id) + color.substring(1)).toLowerCase();
  };

  for (var i = 0; i < ledCount; i++) {
    var color = block.getFieldValue('led_' + i + '_');
    leds += getLedString(i, color);
  }
  var code = variable_matrix + '.setColorString(\'' + leds + '\');\n';
  return code;
};

Blockly.JavaScript['matrix_color_single'] = function(block) {
  var variable_matrix_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('matrix_'), Blockly.Variables.NAME_TYPE);
  var value_led_ = Blockly.JavaScript.valueToCode(block, 'led_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_matrix_ + '.setColor((' + value_led_ + ' - 1), ' + value_color_ + ');\n';
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

Blockly.JavaScript['matrix_character'] = function(block) {
  var variable_matrix_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('matrix_'), Blockly.Variables.NAME_TYPE);
  var value_char_ = Blockly.JavaScript.valueToCode(block, 'char_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_matrix_ + '.setCharacter(' + value_char_ + ', ' + value_color_ + ');\n';
  return code;
};

Blockly.JavaScript['matrix_string'] = function(block) {
  var variable_matrix_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('matrix_'), Blockly.Variables.NAME_TYPE);
  var value_str_ = Blockly.JavaScript.valueToCode(block, 'str_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_speed_ = block.getFieldValue('speed_');
  var code = variable_matrix_ + '.setString(' + value_str_ + ', ' + value_color_ +  ', ' + value_speed_ + ');\n';
  return code;
};

Blockly.JavaScript['matrix_color_output'] = function(block) {
  let variable_matrix_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('matrix_'), Blockly.Variables.NAME_TYPE);
  let value_color_input = Blockly.JavaScript.valueToCode(block, 'color_input', Blockly.JavaScript.ORDER_ATOMIC);
  //let code = variable_matrix_+'.setColor(colorCodeGen('+value_color_input+'));\n';
  let code = variable_matrix_+'.setColor('+value_color_input+');\n';
  return code;
};


Blockly.JavaScript['matrix_color_array'] = function (block) {
  let leds = '';
  let toHex = function (num) {
    let str = num.toString(16);
    if (parseInt(num) < 16) {
      str = '0' + str;
    }
    return str;
  };
  let getLedString = function (id, color) {
    return (toHex(id) + color.substring(1)).toLowerCase();
  };

  for (let i = 0; i < ledCount; i++) {
    let color = block.getFieldValue('led_' + i + '_');
    leds += getLedString(i, color);
  }
  let code = '"' + leds + '"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
