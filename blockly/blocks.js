var mainUrl = 'https://tutorials.webduino.io/zh-tw/docs/';
var utmUrl = '?utm_source=cloud-blockly&utm_medium=contextMenu&utm_campaign=tutorials';

Blockly.Blocks['matrix_new'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBDUINO_LED_MATRIX);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['matrix_color'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBDUINO_LED_MATRIX_LED_SET)
        .appendField(new Blockly.FieldVariable('matrix'), 'matrix_')
        .appendField(Blockly.Msg.WEBDUINO_LED_MATRIX_LED_COLOR);
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBDUINO_LED_MATRIX_LED_SELECT_COLOR)
        .appendField(new Blockly.CustomFieldColour('#ff0000'), 'mcolor_');
    this.appendDummyInput()
        .appendField(new Blockly.CustomFieldCheckbox('#ffffff'), 'led_0_')
        .appendField(new Blockly.CustomFieldCheckbox('#ffffff'), 'led_1_')
        .appendField(new Blockly.CustomFieldCheckbox('#ffffff'), 'led_2_')
        .appendField(new Blockly.CustomFieldCheckbox('#ffffff'), 'led_3_')
        .appendField(new Blockly.CustomFieldCheckbox('#ffffff'), 'led_4_');
    this.appendDummyInput()
        .appendField(new Blockly.CustomFieldCheckbox('#ffffff'), 'led_5_')
        .appendField(new Blockly.CustomFieldCheckbox('#ffffff'), 'led_6_')
        .appendField(new Blockly.CustomFieldCheckbox('#ffffff'), 'led_7_')
        .appendField(new Blockly.CustomFieldCheckbox('#ffffff'), 'led_8_')
        .appendField(new Blockly.CustomFieldCheckbox('#ffffff'), 'led_9_');
    this.appendDummyInput()
        .appendField(new Blockly.CustomFieldCheckbox('#ffffff'), 'led_10_')
        .appendField(new Blockly.CustomFieldCheckbox('#ffffff'), 'led_11_')
        .appendField(new Blockly.CustomFieldCheckbox('#ffffff'), 'led_12_')
        .appendField(new Blockly.CustomFieldCheckbox('#ffffff'), 'led_13_')
        .appendField(new Blockly.CustomFieldCheckbox('#ffffff'), 'led_14_');
    this.appendDummyInput()
        .appendField(new Blockly.CustomFieldCheckbox('#ffffff'), 'led_15_')
        .appendField(new Blockly.CustomFieldCheckbox('#ffffff'), 'led_16_')
        .appendField(new Blockly.CustomFieldCheckbox('#ffffff'), 'led_17_')
        .appendField(new Blockly.CustomFieldCheckbox('#ffffff'), 'led_18_')
        .appendField(new Blockly.CustomFieldCheckbox('#ffffff'), 'led_19_');
    this.appendDummyInput()
        .appendField(new Blockly.CustomFieldCheckbox('#ffffff'), 'led_20_')
        .appendField(new Blockly.CustomFieldCheckbox('#ffffff'), 'led_21_')
        .appendField(new Blockly.CustomFieldCheckbox('#ffffff'), 'led_22_')
        .appendField(new Blockly.CustomFieldCheckbox('#ffffff'), 'led_23_')
        .appendField(new Blockly.CustomFieldCheckbox('#ffffff'), 'led_24_');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['matrix_brightness'] = {
  init: function () {
    this.appendValueInput('brightness_')
        .setCheck(null)
        .appendField(Blockly.Msg.WEBDUINO_LED_MATRIX_LED_SET)
        .appendField(new Blockly.FieldVariable('matrix'), 'matrix_')
        .appendField(Blockly.Msg.WEBDUINO_LED_MATRIX_LED_BRIGHTNESS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['matrix_off'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBDUINO_LED_MATRIX_CLOSE)
        .appendField(new Blockly.FieldVariable('matrix'), 'matrix_');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
