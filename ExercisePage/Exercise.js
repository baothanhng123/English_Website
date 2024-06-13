const toolbox = {
    'kind': 'flyoutToolbox',
    'contents': [
      {
        'kind': 'block',
        'type': 'controls_repeat_ext',
        'inputs': {
          'TIMES': {
            'shadow': {
              'type': 'math_number',
              'fields': {
                'NUM': 5
              }
            }
          }
        }
      },
      {
        'kind': 'block',
        'type': 'controls_if'
      },
      {
        'kind': 'block',
        'type': 'text'
      },
      {
        'kind': 'block',
        'type': 'logic_compare'
      },
      {
        'kind': 'block',
        'type': 'logic_operation'
      },
      {
        'kind': 'block',
        'type': 'math_number'
      }
    ]
  };
  Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
    scrollbars: false,
    horizontalLayout: true,
    toolboxPosition: "end",
  });