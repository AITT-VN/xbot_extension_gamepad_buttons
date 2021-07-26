Blockly.Blocks["get_value_button"] = {
  init: function () {
    this.jsonInit({
      colour: "#00A06B",
      tooltip: "",
      message0: "nút nhấn %1 trên gamepad được nhấn",
      args0: [
        {
          type: "field_dropdown",
          name: "index",
          options: [
            ["S1","0"],
            ["S2","1"],
            ["S3","2"],
            ["S4","3"],
            ["S5","4"],
            ["S6","5"],
            ["S7","6"],
            ["S8","7"]
          ]
        }
      ],
      output: null,
      helpUrl: "",
    });
  },
};

// PYTHON
Blockly.Python["get_value_button"] = function (block) {
  var index = block.getFieldValue('index');
  // TODO: Assemble Python into code variable.
  var code = "gamepad.is_pressed(" + index + ")";
  return [code, Blockly.Python.ORDER_NONE];
};

