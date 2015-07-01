'use strict';

var mqtt = require('mqtt');
var SerialPort = require('mqtt-serial').SerialPort;
var firmata = require('firmata');
var util = require('util');


function Board(options){
  var self = this;
  this.options = options;
  this.mqtt = mqtt.connect(options.url, options);
  this.serialPort = new SerialPort({
    client: self.mqtt,
    transmitTopic: options.transmitTopic,
    receiveTopic: options.receiveTopic
  });

  Board.super_.call(this, this.serialPort, this.options);
}



util.inherits(Board, firmata.Board);



module.exports = {Board : Board};
