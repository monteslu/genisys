# Genisys

A quick way to get started using mqtt and johnny-five.

### Installation

`npm install genisys`


### Blink an Led


The "Hello World" of microcontroller programming:

```js
var genisys = require("genisys");
var five = require("johnny-five");

var board = new five.Board({
  io: new genisys.Board({
    url: 'mqtt://127.0.0.1:1883'
    transmitTopic: 'physicalDevice',
    receiveTopic: 'serialClient'
  }
});

board.on("ready", function() {
  var led = new five.Led({pin: 13});
  led.blink();
});
```


